(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7925],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3363:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={id:"webpack",title:"Custom Webpack config"},l={unversionedId:"webpack",id:"webpack",isDocsHomePage:!1,title:"Custom Webpack config",description:"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion.",source:"@site/docs/overwriting-webpack-config.md",sourceDirName:".",slug:"/webpack",permalink:"/docs/webpack",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/overwriting-webpack-config.md",version:"current",frontMatter:{id:"webpack",title:"Custom Webpack config"},sidebar:"someSidebar",previous:{title:"Server-Side Rendering",permalink:"/docs/ssr"},next:{title:"Using legacy Babel transpilation",permalink:"/docs/legacy-babel"}},c=[{value:"Overriding the webpack config",id:"overriding-the-webpack-config",children:[]},{value:"Snippets",id:"snippets",children:[{value:"Enabling MDX support",id:"enabling-mdx-support",children:[]},{value:"Enable SASS/SCSS support",id:"enable-sassscss-support",children:[]},{value:"Use legacy babel loader",id:"use-legacy-babel-loader",children:[]}]},{value:"Customizing configuration file location",id:"customizing-configuration-file-location",children:[]},{value:"See also",id:"see-also",children:[]}],s={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion."),(0,i.kt)("p",null,"Create a config file called ",(0,i.kt)("inlineCode",{parentName:"p"},"remotion.config.ts")," in the root of your project. As a confirmation, you should get a console message ",(0,i.kt)("inlineCode",{parentName:"p"},"Applied configuration from [configuration-file]"),"."),(0,i.kt)("h2",{id:"overriding-the-webpack-config"},"Overriding the webpack config"),(0,i.kt)("p",null,"Get familiar with the default Webpack configuration which can be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/blob/main/packages/bundler/src/webpack-config.ts"},"found here"),"."),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"remotion.config.ts")," file, you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.Bundler.overrideWebpackConfig")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"remotion"),"."),(0,i.kt)("p",null,"Overriding the Webpack config uses the reducer pattern - pass in a function that takes as it's argument a Webpack configuration and return a new Webpack configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {Config} from 'remotion';\n\nConfig.Bundling.overrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        // Add more loaders here\n      ],\n    },\n  };\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using the reducer pattern will help with type safety, give you auto-complete, ensure forwards-compatibility and keep it completely flexible - you can override just one property or pass in a completely new Webpack configuration."))),(0,i.kt)("h2",{id:"snippets"},"Snippets"),(0,i.kt)("h3",{id:"enabling-mdx-support"},"Enabling MDX support"),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"remotion.config.ts")," file shows how to enable support for MDX. Installation of ",(0,i.kt)("inlineCode",{parentName:"p"},"mdx-loader babel-loader @babel/preset-env @babel/preset-react")," is required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Config.Bundling.overrideWebpackConfig((currentConfiguration) => {\n    return {\n        ...currentConfiguration,\n        module: {\n            ...currentConfiguration.module,\n            rules: [\n                ...(currentConfiguration.module?.rules\n                    ? currentConfiguration.module.rules\n                    : []),\n                {\n                    test: /\\.mdx?$/,\n                    use: [\n                        {\n                            loader: 'babel-loader',\n                            options: {\n                                presets: [\n                                    '@babel/preset-env',\n                                    [\n                                        '@babel/preset-react',\n                                        {\n                                            runtime: 'automatic',\n                                        },\n                                    ],\n                                ],\n                            },\n                        },\n                        'mdx-loader',\n                    ],\n                },\n            ],\n        },\n    };\n});\n\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Create a file which contains ",(0,i.kt)("inlineCode",{parentName:"p"},"declare module '*.mdx';")," in your project to fix a TypeScript error showing up."))),(0,i.kt)("h3",{id:"enable-sassscss-support"},"Enable SASS/SCSS support"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {Config} from 'remotion';\n\nConfig.Bundling.overrideWebpackConfig((currentConfiguration) => {\n    return {\n        ...currentConfiguration,\n        module: {\n            ...currentConfiguration.module,\n            rules: [\n                ...(currentConfiguration.module?.rules\n                    ? currentConfiguration.module.rules\n                    : []),\n                // Add more loaders here\n                {\n                    // look for .css or .scss files\n                    test: /\\.(css|scss)$/,\n                    // in the `src` directory\n                    include: [resolveApp('src')],\n                    use: [\n                        {\n                            loader: 'style-loader',\n                        },\n                        {\n                            loader: 'css-loader',\n                        },\n                        {\n                            loader: 'sass-loader',\n                            options: {\n                                sourceMap: true,\n                            },\n                        },\n                    ],\n                },\n            ],\n        },\n    };\n});\n")),(0,i.kt)("h3",{id:"use-legacy-babel-loader"},"Use legacy babel loader"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"legacy-babel"},"Using legacy Babel transpilation"),"."),(0,i.kt)("h2",{id:"customizing-configuration-file-location"},"Customizing configuration file location"),(0,i.kt)("p",null,"You can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," option to the command line to specify a custom location for your configuration file."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config"},"Configuration file"))))}u.isMDXComponent=!0}}]);