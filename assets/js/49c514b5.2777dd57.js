(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9662],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||l[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6800:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={title:"useCurrentFrame()",id:"use-current-frame"},u={unversionedId:"use-current-frame",id:"use-current-frame",isDocsHomePage:!1,title:"useCurrentFrame()",description:"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is 0, the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about the fundamentals.",source:"@site/docs/use-current-frame.md",sourceDirName:".",slug:"/use-current-frame",permalink:"/docs/use-current-frame",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/use-current-frame.md",version:"current",frontMatter:{title:"useCurrentFrame()",id:"use-current-frame"},sidebar:"someSidebar",previous:{title:"spring()",permalink:"/docs/spring"},next:{title:"useVideoConfig()",permalink:"/docs/use-video-config"}},s=[{value:"See also",id:"see-also",children:[]}],c={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about ",(0,a.kt)("a",{parentName:"p",href:"/docs/the-fundamentals"},"the fundamentals"),"."),(0,a.kt)("p",null,"If the component you are writing is wrapped in a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sequence>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return the frame relative to when the Sequence starts."),(0,a.kt)("p",null,"Say the timeline marker is positioned at frame 25. In the example below, ",(0,a.kt)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"20"),", except within the Subtitle component, where it will return ",(0,a.kt)("inlineCode",{parentName:"p"},"15")," because it is within a sequence that starts at frame 10."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {useCurrentFrame, Sequence} from 'remotion';\n\nconst Title = () => {\n  const frame = useCurrentFrame(); // 25\n  return (\n    <div>{frame}</div>\n  )\n}\n\nconst Subtitle = () => {\n  const frame = useCurrentFrame(); // 15\n  return (\n    <div>{frame}</div>\n  )\n}\n\nconst MyVideo = () => {\n  const frame = useCurrentFrame(); // 25\n\n  return (\n    <div>\n      <Title />\n      <Sequence from={10} durationInFrames={Infinity}>\n        <Subtitle />\n      </Sequence>\n    </div>\n  );\n}\n")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/use-video-config"},"useVideoConfig()"))))}m.isMDXComponent=!0}}]);