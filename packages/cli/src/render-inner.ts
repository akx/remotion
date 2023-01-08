import type {RenderMediaOnDownload, StitchingState} from '@remotion/renderer';
import {
	getCompositions,
	openBrowser,
	renderFrames,
	RenderInternals,
	renderMedia,
} from '@remotion/renderer';
import fs from 'fs';
import os from 'os';
import path from 'path';
import {chalk} from './chalk';
import {ConfigInternals} from './config';
import {findEntryPoint} from './entry-point';
import {
	getAndValidateAbsoluteOutputFile,
	getCliOptions,
	getFinalCodec,
	validateFfmepgCanUseCodec,
} from './get-cli-options';
import {getCompositionWithDimensionOverride} from './get-composition-with-dimension-override';
import {getOutputFilename} from './get-filename';
import {getRenderMediaOptions} from './get-render-media-options';
import {getImageFormat} from './image-formats';
import {Log} from './log';
import {parsedCli, quietFlagProvided} from './parse-command-line';
import type {DownloadProgress} from './progress-bar';
import {
	createOverwriteableCliOutput,
	makeRenderingAndStitchingProgress,
} from './progress-bar';
import {bundleOnCliOrTakeServeUrl} from './setup-cache';
import type {RenderStep} from './step';
import {truthy} from './truthy';
import {getUserPassedOutputLocation} from './user-passed-output-location';

export const renderInner = async (
	type: 'series' | 'still',
	remotionRoot: string,
	args: string[]
) => {
	if (type === 'still' && parsedCli.frames) {
		Log.error(
			'--frames flag was passed to the `still` command. This flag only works with the `series` command. Did you mean `--frame`? See reference: https://www.remotion.dev/docs/cli/'
		);
		process.exit(1);
	}

	const startTime = Date.now();
	const {
		file,
		remainingArgs,
		reason: entryPointReason,
	} = findEntryPoint(args, remotionRoot);

	if (!file) {
		Log.error('No entry point specified. Pass more arguments:');
		Log.error(
			'   npx remotion render [entry-point] [composition-name] [out-name]'
		);
		Log.error('Documentation: https://www.remotion.dev/docs/render');
		process.exit(1);
	}

	const fullPath = RenderInternals.isServeUrl(file)
		? file
		: path.join(process.cwd(), file);

	const {
		browser,
		browserExecutable,
		chromiumOptions,
		concurrency,
		envVariables,
		everyNthFrame,
		ffmpegExecutable,
		ffprobeExecutable,
		frameRange,
		height,
		inputProps,
		overwrite,
		port,
		publicDir,
		puppeteerTimeout,
		quality,
		scale,
		shouldOutputImageSequence,
		width,
	} = await getCliOptions({
		isLambda: false,
		type: 'series',
		remotionRoot,
	});

	const ffmpegVersion = await RenderInternals.getFfmpegVersion({
		ffmpegExecutable,
		remotionRoot,
	});
	Log.verbose(
		'FFMPEG Version:',
		ffmpegVersion ? ffmpegVersion.join('.') : 'Built from source'
	);
	Log.verbose('Browser executable: ', browserExecutable);

	const browserInstance = openBrowser(browser, {
		browserExecutable,
		chromiumOptions,
		shouldDumpIo: RenderInternals.isEqualOrBelowLogLevel(
			ConfigInternals.Logging.getLogLevel(),
			'verbose'
		),
		forceDeviceScaleFactor: scale,
	});

	const steps: RenderStep[] = [
		RenderInternals.isServeUrl(fullPath) ? null : ('bundling' as const),
		'rendering' as const,
		shouldOutputImageSequence ? null : ('stitching' as const),
	].filter(truthy);

	const {urlOrBundle, cleanup: cleanupBundle} = await bundleOnCliOrTakeServeUrl(
		{
			fullPath,
			remotionRoot,
			steps,
			publicDir,
		}
	);

	const onDownload: RenderMediaOnDownload = (src) => {
		const id = Math.random();
		const download: DownloadProgress = {
			id,
			name: src,
			progress: 0,
			downloaded: 0,
			totalBytes: null,
		};
		downloads.push(download);
		updateProgress();

		return ({percent, downloaded, totalSize}) => {
			download.progress = percent;
			download.totalBytes = totalSize;
			download.downloaded = downloaded;
			updateProgress();
		};
	};

	const puppeteerInstance = await browserInstance;

	const downloadMap = RenderInternals.makeDownloadMap();
	Log.verbose('Asset dirs', downloadMap.assetDir);

	const comps = await getCompositions(urlOrBundle, {
		browserExecutable,
		chromiumOptions,
		downloadMap,
		envVariables,
		ffmpegExecutable,
		ffprobeExecutable,
		inputProps,
		port,
		puppeteerInstance,
		timeoutInMilliseconds: puppeteerTimeout,
	});

	const {compositionId, config, reason, argsAfterComposition} =
		await getCompositionWithDimensionOverride({
			validCompositions: comps,
			height,
			width,
			args: remainingArgs,
		});

	const {codec, reason: codecReason} = getFinalCodec({
		downloadName: null,
		outName: getUserPassedOutputLocation(argsAfterComposition),
	});
	validateFfmepgCanUseCodec(codec, remotionRoot);

	RenderInternals.validateEvenDimensionsWithCodec({
		width: config.width,
		height: config.height,
		codec,
		scale,
	});

	const relativeOutputLocation = getOutputFilename({
		codec,
		imageSequence: shouldOutputImageSequence,
		compositionName: compositionId,
		defaultExtension: RenderInternals.getFileExtensionFromCodec(codec, 'final'),
		args: argsAfterComposition,
	});

	const absoluteOutputLocation = getAndValidateAbsoluteOutputFile(
		relativeOutputLocation,
		overwrite
	);

	Log.info(
		chalk.gray(
			`Entry point = ${file} (${entryPointReason}), Composition = ${compositionId} (${reason}), Codec = ${codec} (${codecReason}), Output = ${relativeOutputLocation}`
		)
	);

	const outputDir = shouldOutputImageSequence
		? absoluteOutputLocation
		: await fs.promises.mkdtemp(path.join(os.tmpdir(), 'react-motion-render'));

	Log.verbose('Output dir', outputDir);

	const renderProgress = createOverwriteableCliOutput(quietFlagProvided());
	const realFrameRange = RenderInternals.getRealFrameRange(
		config.durationInFrames,
		frameRange
	);
	const totalFrames: number[] = RenderInternals.getFramesToRender(
		realFrameRange,
		everyNthFrame
	);
	let encodedFrames = 0;
	let renderedFrames = 0;
	let encodedDoneIn: number | null = null;
	let renderedDoneIn: number | null = null;
	let stitchStage: StitchingState = 'encoding';
	const downloads: DownloadProgress[] = [];

	const updateProgress = () => {
		if (totalFrames.length === 0) {
			throw new Error('totalFrames should not be 0');
		}

		return renderProgress.update(
			makeRenderingAndStitchingProgress({
				rendering: {
					frames: renderedFrames,
					totalFrames: totalFrames.length,
					concurrency: RenderInternals.getActualConcurrency(concurrency),
					doneIn: renderedDoneIn,
					steps,
				},
				stitching: shouldOutputImageSequence
					? null
					: {
							doneIn: encodedDoneIn,
							frames: encodedFrames,
							stage: stitchStage,
							steps,
							totalFrames: totalFrames.length,
							codec,
					  },
				downloads,
			})
		);
	};

	const imageFormat = getImageFormat(
		shouldOutputImageSequence ? undefined : codec
	);

	if (shouldOutputImageSequence) {
		fs.mkdirSync(absoluteOutputLocation, {
			recursive: true,
		});
		if (imageFormat === 'none') {
			Log.error(
				'Cannot render an image sequence with a codec that renders no images.'
			);
			Log.error(`codec = ${codec}, imageFormat = ${imageFormat}`);
			process.exit(1);
		}

		await renderFrames({
			config,
			imageFormat,
			inputProps,
			onFrameUpdate: (rendered) => {
				renderedFrames = rendered;
				updateProgress();
			},
			onStart: () => undefined,
			onDownload: (src: string) => {
				if (src.startsWith('data:')) {
					Log.info(
						'\nWriting Data URL to file: ',
						src.substring(0, 30) + '...'
					);
				} else {
					Log.info('\nDownloading asset... ', src);
				}
			},
			outputDir,
			serveUrl: urlOrBundle,
			dumpBrowserLogs: RenderInternals.isEqualOrBelowLogLevel(
				ConfigInternals.Logging.getLogLevel(),
				'verbose'
			),
			everyNthFrame,
			envVariables,
			frameRange,
			concurrency,
			puppeteerInstance,
			quality,
			timeoutInMilliseconds: puppeteerTimeout,
			chromiumOptions,
			scale,
			ffmpegExecutable,
			ffprobeExecutable,
			browserExecutable,
			port,
			downloadMap,
		});
		renderedDoneIn = Date.now() - startTime;

		updateProgress();
		Log.info();
		Log.info();
		Log.info(chalk.green('\nYour image sequence is ready!'));
		Log.info(chalk.cyan(`▶ ${absoluteOutputLocation}`));

		return;
	}

	const options = await getRenderMediaOptions({
		config,
		outputLocation: absoluteOutputLocation,
		serveUrl: urlOrBundle,
		codec,
		remotionRoot,
	});

	await renderMedia({
		...options,
		onProgress: (update) => {
			encodedDoneIn = update.encodedDoneIn;
			encodedFrames = update.encodedFrames;
			renderedDoneIn = update.renderedDoneIn;
			stitchStage = update.stitchStage;
			renderedFrames = update.renderedFrames;
			updateProgress();
		},
		puppeteerInstance,
		onDownload,
		downloadMap,
		onSlowestFrames: (slowestFrames) => {
			Log.verbose();
			Log.verbose(`Slowest frames:`);
			slowestFrames.forEach(({frame, time}) => {
				Log.verbose(`Frame ${frame} (${time.toFixed(3)}ms)`);
			});
		},
	});

	Log.info();
	Log.info();
	const closeBrowserPromise = puppeteerInstance.close(false);

	const seconds = Math.round((Date.now() - startTime) / 1000);
	Log.info(
		[
			'- Total render time:',
			seconds,
			seconds === 1 ? 'second' : 'seconds',
		].join(' ')
	);
	Log.info('-', 'Output can be found at:');
	Log.info(chalk.cyan(`▶ ${absoluteOutputLocation}`));

	try {
		await closeBrowserPromise;
		await RenderInternals.cleanDownloadMap(downloadMap);
		await cleanupBundle();
		Log.verbose('Cleaned up', downloadMap.assetDir);
	} catch (err) {
		Log.warn('Could not clean up directory.');
		Log.warn(err);
		Log.warn('Do you have minimum required Node.js version?');
	}

	Log.info(
		chalk.green(`\nYour ${codec === 'gif' ? 'GIF' : 'video'} is ready!`)
	);

	if (
		RenderInternals.isEqualOrBelowLogLevel(
			ConfigInternals.Logging.getLogLevel(),
			'verbose'
		)
	) {
		RenderInternals.perf.logPerf();
	}
};
