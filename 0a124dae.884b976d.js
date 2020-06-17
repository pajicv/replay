(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(9),a=(n(0),n(218)),o={},c={id:"tutorial/21",title:"21",description:"# 21 - Gameplay Test",source:"@site/docs/tutorial/21.md",permalink:"/docs/tutorial/21",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/21.md"},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"21---gameplay-test"},"21 - Gameplay Test"),Object(a.b)("p",null,"Let's expand our test to play the game. We're going to check the bird can fly past 2 pipes, then crash into one, ending up with a score of ",Object(a.b)("inlineCode",{parentName:"p"},"2"),"."),Object(a.b)("p",null,"We pass an ",Object(a.b)("inlineCode",{parentName:"p"},"initRandom")," field into ",Object(a.b)("inlineCode",{parentName:"p"},"testSprite"),". This ensures ",Object(a.b)("inlineCode",{parentName:"p"},"device.random()")," calls always produce the same result, in this case ",Object(a.b)("inlineCode",{parentName:"p"},"0.5"),", then ",Object(a.b)("inlineCode",{parentName:"p"},"0.5"),", then ",Object(a.b)("inlineCode",{parentName:"p"},"0"),". With this we can ensure our bird knows what height to fly at."),Object(a.b)("p",null,"We create a function ",Object(a.b)("inlineCode",{parentName:"p"},"keepBirdInMiddle")," which is going to keep clicking the screen when the bird's ",Object(a.b)("inlineCode",{parentName:"p"},"y")," position is too low, to keep the bird jumping at the right height."),Object(a.b)("p",null,"We can access the bird Texture through the ",Object(a.b)("inlineCode",{parentName:"p"},'getTexture("bird")')," call in order to read its ",Object(a.b)("inlineCode",{parentName:"p"},"y")," value. Here ",Object(a.b)("inlineCode",{parentName:"p"},'"bird"')," is the ",Object(a.b)("inlineCode",{parentName:"p"},"testId")," ",Object(a.b)("inlineCode",{parentName:"p"},"prop")," which we need to pass into the ",Object(a.b)("inlineCode",{parentName:"p"},"t.image")," Texture in our ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite. The ",Object(a.b)("inlineCode",{parentName:"p"},"testId")," prop can be passed into any Texture to reference it in a test."),Object(a.b)("p",null,"We loop through the game's frames with ",Object(a.b)("inlineCode",{parentName:"p"},"jumpToFrame"),", which will keep running until a condition returns either a Texture or ",Object(a.b)("inlineCode",{parentName:"p"},"true"),". When that exits (bird hit a pipe!) we confirm the score shows as expected."),Object(a.b)("p",null,"Lastly we can even confirm the sound effect played as expected after we crashed."))}u.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);