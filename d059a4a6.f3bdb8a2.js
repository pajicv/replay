(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(216)),i={},c={id:"tutorial/20",title:"20",description:"# 20 - Setup Tests",source:"@site/docs/tutorial/20.md",permalink:"/docs/tutorial/20",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/20.md"},p=[],s={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"20---setup-tests"},"20 - Setup Tests"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@replay/test")," package provides a platform to automate gameplay tests for our game. We can write our tests as though we're playing the game for real, without needing to know much about the internal workings of our code."),Object(a.b)("p",null,"Using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/"}),"Jest")," we can write an initial test to confirm we can start the game."),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"__tests__/game.test")," replace what's there with the code on the right. We pass our ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite (and ",Object(a.b)("inlineCode",{parentName:"p"},"gameProps"),") into the ",Object(a.b)("inlineCode",{parentName:"p"},"testGame")," function, which returns some more useful functions for inspecting our game. Since the test platform doesn't know if we want to run on web or iOS, we need to supply the inputs we'd expect on those platforms through ",Object(a.b)("inlineCode",{parentName:"p"},"initInputs"),"."),Object(a.b)("p",null,"Below that ",Object(a.b)("inlineCode",{parentName:"p"},"getByText(mainMenuText)")," searches all ",Object(a.b)("inlineCode",{parentName:"p"},"t.text")," Textures that match the string passed in, or throws an error if it can't find it. This confirms that our main menu is visible on the initial render."),Object(a.b)("p",null,"Next we call ",Object(a.b)("inlineCode",{parentName:"p"},"updateInputs")," to simulate a mouse click or tap to start, then progress one frame with ",Object(a.b)("inlineCode",{parentName:"p"},"nextFrame"),". After that we reset the inputs and progress one more frame. Now that the game's started, we confirm in our test the main menu isn't visible any more."))}u.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||m[b]||a;return n?o.a.createElement(f,c({ref:t},s,{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);