(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),r=(n(0),n(218)),c={id:"device",title:"Device"},i={id:"device",title:"Device",description:"The `device` parameter of the Sprite methods can be used to interact with the platform, like reading inputs and playing sound effects.",source:"@site/docs/device.md",permalink:"/docs/device",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/device.md",sidebar:"someSidebar",previous:{title:"Textures",permalink:"/docs/textures"},next:{title:"Game Size",permalink:"/docs/game-size"}},l=[{value:"<code>inputs</code>",id:"inputs",children:[]},{value:"<code>size</code>",id:"size",children:[]},{value:"<code>log</code>",id:"log",children:[]},{value:"<code>random</code>",id:"random",children:[]},{value:"<code>timeout</code>",id:"timeout",children:[]},{value:"<code>now</code>",id:"now",children:[]},{value:"<code>audio</code>",id:"audio",children:[]},{value:"<code>network</code>",id:"network",children:[]},{value:"<code>storage</code>",id:"storage",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"device")," parameter of the Sprite methods can be used to interact with the platform, like reading inputs and playing sound effects."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  loop({ device }) {\n    const {\n      inputs,\n      size,\n      log,\n      random,\n      timeout,\n      now,\n      audio,\n      network,\n      storage,\n    } = device;\n\n    ...\n  },\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Functions like ",Object(r.b)("inlineCode",{parentName:"p"},"log")," and ",Object(r.b)("inlineCode",{parentName:"p"},"random")," replace ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Math.random"),". Using these ensures the game works across all platforms and tests (plus it keeps your Sprite methods pure)."))),Object(r.b)("h3",{id:"inputs"},Object(r.b)("inlineCode",{parentName:"h3"},"inputs")),Object(r.b)("p",null,"An object of the device's input state. ",Object(r.b)("strong",{parentName:"p"},"The value depends on the platform your game is running on"),". See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web"}),"Platforms")," for the values available."),Object(r.b)("p",null,"Platforms share similar input object shapes. For example, both the web and iOS platforms have a ",Object(r.b)("inlineCode",{parentName:"p"},"pointer")," field (relative to the Sprite's position):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const hitX = inputs.pointer.x;\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The pointer is relative to the Sprite's position and rotation. If your Sprite has an ",Object(r.b)("inlineCode",{parentName:"p"},"x")," position of ",Object(r.b)("inlineCode",{parentName:"p"},"100"),", and you click at an ",Object(r.b)("inlineCode",{parentName:"p"},"x")," position of ",Object(r.b)("inlineCode",{parentName:"p"},"50"),", the value of ",Object(r.b)("inlineCode",{parentName:"p"},"inputs.pointer.x")," in the Sprite will be translated to ",Object(r.b)("inlineCode",{parentName:"p"},"-50"),". To do this translation in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/test"}),"Replay Test")," you can pass in a ",Object(r.b)("inlineCode",{parentName:"p"},"mapInputCoordinates")," function."))),Object(r.b)("h3",{id:"size"},Object(r.b)("inlineCode",{parentName:"h3"},"size")),Object(r.b)("p",null,"An object of the device's size. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/game-size"}),"Game Size")," for info on this."),Object(r.b)("h3",{id:"log"},Object(r.b)("inlineCode",{parentName:"h3"},"log")),Object(r.b)("p",null,"A platform independent way of logging messages. Replaces ",Object(r.b)("inlineCode",{parentName:"p"},"console.log"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'log("debug message");\n')),Object(r.b)("h3",{id:"random"},Object(r.b)("inlineCode",{parentName:"h3"},"random")),Object(r.b)("p",null,"Returns a random number between 0 - 1. Replaces ",Object(r.b)("inlineCode",{parentName:"p"},"Math.random"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const spawnY = random() * 500;\n")),Object(r.b)("h3",{id:"timeout"},Object(r.b)("inlineCode",{parentName:"h3"},"timeout")),Object(r.b)("p",null,"Run a callback after a time in milliseconds. Replaces ",Object(r.b)("inlineCode",{parentName:"p"},"setTimeout"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"timeout(() => {\n  // Do stuff\n}, 500);\n")),Object(r.b)("h3",{id:"now"},Object(r.b)("inlineCode",{parentName:"h3"},"now")),Object(r.b)("p",null,"Get the current time and date as a Date object. Replaces ",Object(r.b)("inlineCode",{parentName:"p"},"new Date()"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const date = now();\n")),Object(r.b)("h3",{id:"audio"},Object(r.b)("inlineCode",{parentName:"h3"},"audio")),Object(r.b)("p",null,"Play audio files in your game."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const mySound = audio("sound.wav");\n')),Object(r.b)("p",null,"The returned object has the following methods:"),Object(r.b)("h4",{id:"play"},Object(r.b)("inlineCode",{parentName:"h4"},"play")),Object(r.b)("p",null,"Play the sound file. ",Object(r.b)("inlineCode",{parentName:"p"},"position")," and ",Object(r.b)("inlineCode",{parentName:"p"},"loop")," arguments are optional."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mySound.play(position = 0, loop = false);\n")),Object(r.b)("h4",{id:"pause"},Object(r.b)("inlineCode",{parentName:"h4"},"pause")),Object(r.b)("p",null,"Pause the sound file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mySound.pause();\n")),Object(r.b)("h4",{id:"getposition"},Object(r.b)("inlineCode",{parentName:"h4"},"getPosition")),Object(r.b)("p",null,"Get the current play position of the sound in seconds."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mySound.getPosition();\n")),Object(r.b)("h3",{id:"network"},Object(r.b)("inlineCode",{parentName:"h3"},"network")),Object(r.b)("p",null,"Make platform-independent networks calls. Returns and sends data as a JSON object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'network.get(url, callback);\nnetwork.post(url, body, callback);\nnetwork.put(url, body, callback);\nnetwork.delete(url, callback);\n\n// Example\nnetwork.post("/api/score", { score: 5 }, (data) => {\n  const { success } = data;\n  log(`successful: ${success}`);\n});\n')),Object(r.b)("h3",{id:"storage"},Object(r.b)("inlineCode",{parentName:"h3"},"storage")),Object(r.b)("p",null,"Platform-independent way of storing save data to the local device."),Object(r.b)("h4",{id:"getstore"},Object(r.b)("inlineCode",{parentName:"h4"},"getStore")),Object(r.b)("p",null,"Returns the current store: an object of keys and values of type string."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { highScore } = storage.getStore();\n")),Object(r.b)("h4",{id:"setstore"},Object(r.b)("inlineCode",{parentName:"h4"},"setStore")),Object(r.b)("p",null,"Add or remove fields in the store. New fields are merged into the existing store:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"storage.setStore({ highScore: 5 });\n")),Object(r.b)("p",null,"Setting ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," will remove a field from storage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"storage.setStore({ highScore: undefined });\n")))}s.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,i({ref:t},b,{components:n})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<r;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);