(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(216)),i={},c={id:"tutorial/10",title:"10",description:"# 10 - Background",source:"@site/docs/tutorial/10.md",permalink:"/docs/tutorial/10",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/10.md"},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"10---background"},"10 - Background"),Object(a.b)("p",null,"Let's draw a nice blue background for our bird to jump in, instead of the default white background we have now."),Object(a.b)("p",null,"We add a ",Object(a.b)("inlineCode",{parentName:"p"},"t.rectangle")," Texture as the ",Object(a.b)("em",{parentName:"p"},"first")," Sprite returned in the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method. Sprites are rendered in the order they're returned, so this way our background will always be drawn at the back."),Object(a.b)("p",null,"We also want to fill the full view, not just the safe zone. To do this we need a rectangle the width and height of the view, plus the margins. The ",Object(a.b)("inlineCode",{parentName:"p"},"device")," parameter we accessed before to get ",Object(a.b)("inlineCode",{parentName:"p"},"inputs")," also has a ",Object(a.b)("inlineCode",{parentName:"p"},"size")," field just for this."),Object(a.b)("p",null,"We could set a position for the rectangle through a ",Object(a.b)("inlineCode",{parentName:"p"},"position")," prop, but actually the default ",Object(a.b)("inlineCode",{parentName:"p"},"{ x: 0, y: 0 }")," position is exactly what we want. In Replay, the origin is directly in the center of the screen, and when you position a Sprite you're positioning its center point too. The ",Object(a.b)("inlineCode",{parentName:"p"},"y")," axis is also positive upwards."))}u.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);