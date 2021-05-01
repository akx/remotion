(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4065],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3433:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={id:"performance",title:"Performance Tips"},s={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"Performance Tips",description:"Video rendering is one of the most heavy workloads a computer can take on. Remotion aims to at least perform similarly than traditional video editing programs. This section describes several aspects that influence render speed that you can influence.",source:"@site/docs/performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/performance",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/performance.md",version:"current",frontMatter:{id:"performance",title:"Performance Tips"},sidebar:"someSidebar",previous:{title:"Puppeteer timeout",permalink:"/docs/timeout"},next:{title:"v2.0 Breaking changes",permalink:"/docs/2-0-migration"}},c=[{value:"Increase concurrency",id:"increase-concurrency",children:[]},{value:"Decrease remote load",id:"decrease-remote-load",children:[]},{value:"Decrease image resolution",id:"decrease-image-resolution",children:[]},{value:"Choose the right image format and codec",id:"choose-the-right-image-format-and-codec",children:[]},{value:"Rendering still too slow?",id:"rendering-still-too-slow",children:[]}],l={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Video rendering is one of the most heavy workloads a computer can take on. Remotion aims to at least perform similarly than traditional video editing programs. This section describes several aspects that influence render speed that you can influence."),(0,a.kt)("h2",{id:"increase-concurrency"},"Increase concurrency"),(0,a.kt)("p",null,"By default, Remotion will use half of the threads available on the system to perform rendering. ",(0,a.kt)("a",{parentName:"p",href:"https://www.remotion.dev/docs/cli"},"You can increase the default concurrency to use up to all of your threads"),". This will most likely increase render speed but might slow down other operations on your computer."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Most Intel and AMD CPUs have hyperthreading, which means that per CPU core you get 2 threads. So for example, if you have an 8-core CPU, you have 16 threads, which means that the maximum concurrency that Remotion supports is 16."))),(0,a.kt)("h2",{id:"decrease-remote-load"},"Decrease remote load"),(0,a.kt)("p",null,"Loading data from remote sources, such as making an API call, loading an image, video, or audio file from a remote location will increase the render time because Remotion has to wait until the data is fetched. Try to move assets to your local machine or cache API requests (for example in ",(0,a.kt)("inlineCode",{parentName:"p"},"localStorage"),") to speed up Remotion rendering."),(0,a.kt)("h2",{id:"decrease-image-resolution"},"Decrease image resolution"),(0,a.kt)("p",null,"Generally, lower resolution frames result in faster renders. You can make the dimensions smaller while in development and rendering test files, and apply a ",(0,a.kt)("inlineCode",{parentName:"p"},"scale")," transformation to the composition to move faster initially, and then render at full resolution later."),(0,a.kt)("h2",{id:"choose-the-right-image-format-and-codec"},"Choose the right image format and codec"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/config#setimageformat"},"JPEG rendering is faster")," than PNG rendering. ",(0,a.kt)("a",{parentName:"p",href:"/docs/encoding"},"H264 is the fastest way")," to encode frames into a video. If you have deviated from the defaults, consider them again if you see slow rendering."),(0,a.kt)("h2",{id:"rendering-still-too-slow"},"Rendering still too slow?"),(0,a.kt)("p",null,"We are actively working on a way to massively speed up video rendering. Hang on!"))}d.isMDXComponent=!0}}]);