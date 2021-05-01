(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1772],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4038:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a={slug:"1-1",title:"Remotion 1.1",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},u={permalink:"/blog/1-1",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-02-11-remotion1-1.md",source:"@site/blog/2021-02-11-remotion1-1.md",title:"Remotion 1.1",description:"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[],readingTime:1.96,truncated:!1,prevItem:{title:"Remotion 1.2",permalink:"/blog/1-2"},nextItem:{title:"Introducing Remotion",permalink:"/blog/introducing-remotion"}},l=[{value:"Customizing Webpack configuration",id:"customizing-webpack-configuration",children:[]},{value:"New <code>&lt;Img /&gt;</code> and <code>&lt;IFrame /&gt;</code> components",id:"new-img--and-iframe--components",children:[{value:"Bonus: ESLint rule",id:"bonus-eslint-rule",children:[]}]},{value:"Upgrading is easy",id:"upgrading-is-easy",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!"),(0,i.kt)("p",null,"Now it's time to iterate and make Remotion better. This release contains two new features: Customizing the Webpack configuration and new ",(0,i.kt)("inlineCode",{parentName:"p"},"<Img>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"</IFrame>")," components!"),(0,i.kt)("h2",{id:"customizing-webpack-configuration"},"Customizing Webpack configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/webpack"},"See docs"))),(0,i.kt)("p",null,"People had wild ideas on what to do with Remotion like importing MDX files or using React Native components. Now it is possible!"),(0,i.kt)("p",null,"When providing the possibility on how to configure Remotion, it was of big importance to provide both a high degree of flexibility and a good developer experience. This is how you update the webpack config:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"remotion.config.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {overrideWebpackConfig} from '@remotion/bundler';\n\noverrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        // Add more loaders here\n      ],\n    },\n  };\n});\n")),(0,i.kt)("p",null,"There is a new Remotion config file, that you can write in Typescript. Updating the Webpack config uses the ",(0,i.kt)("strong",{parentName:"p"},"reducer pattern"),": You get the default configuration and it is your responsibility to return an updated Webpack config. You get type checking, auto completion and the flexibility to either only update a single property or pass in a completely new configuration. No black magic here - since this is just a pure function, the outcome will be very predictable."),(0,i.kt)("h2",{id:"new-img--and-iframe--components"},"New ",(0,i.kt)("inlineCode",{parentName:"h2"},"<Img />")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"<IFrame />")," components"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/use-img-and-iframe"},"See docs"))),(0,i.kt)("p",null,"The purpose of these new components is to help with something that is easy to overlook in Remotion: Images or Iframes are being rendered, but Remotion does not wait until the loading of these network resources are complete. The result: Flicker in the end result! The correct thing is ",(0,i.kt)("a",{parentName:"p",href:"/docs/data-fetching#telling-remotion-to-wait-until-the-data-is-loaded"},"to wait using the ",(0,i.kt)("inlineCode",{parentName:"a"},"delayRender")," API"),", but this is not very obvious. Now Remotion comes with built-in components that will wait until assets are loaded."),(0,i.kt)("h3",{id:"bonus-eslint-rule"},"Bonus: ESLint rule"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1629785/107443059-62829e00-6b38-11eb-9d0e-fb12b68fa2a9.png",alt:"ESLint rule 'warn-native-media-tag'"})),(0,i.kt)("p",null,"To prevent shooting yourself into your foot, Remotion now comes with an ESLint rule that warns if you use the native ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<iframe>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<video>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<audio>")," tags. These tags work better when you use the Remotion-wrapped versions instead."),(0,i.kt)("h2",{id:"upgrading-is-easy"},"Upgrading is easy"),(0,i.kt)("p",null,"Simply type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"npm run upgrade\n")),(0,i.kt)("p",null,"in your project and you'll get all the newest Remotion packages! Maybe you also noticed that there is a banner in the editor that notifies you when an upgrade is available."))}c.isMDXComponent=!0}}]);