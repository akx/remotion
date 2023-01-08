import {Log} from './log';
import {parsedCli} from './parse-command-line';
import {renderInner} from './render-inner';

export const render = async (remotionRoot: string, args: string[]) => {
	if (parsedCli.frame) {
		Log.error(
			'--frame flag was passed to the `render` command. This flag only works with the `still` command. Did you mean `--frames`? See reference: https://www.remotion.dev/docs/cli/'
		);
		process.exit(1);
	}

	return renderInner('series', remotionRoot, args);
};
