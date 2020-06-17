(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),a=(n(0),n(218)),o={},s={id:"tutorial/13",title:"13",description:"# 13 - Main Menu",source:"@site/docs/tutorial/13.md",permalink:"/docs/tutorial/13",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/13.md"},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"13---main-menu"},"13 - Main Menu"),Object(a.b)("p",null,"Let's now create a menu to unpause our game so we can actually play it again!"),Object(a.b)("p",null,"We create a ",Object(a.b)("inlineCode",{parentName:"p"},"Menu")," Sprite like we did before, the only new thing here being the ",Object(a.b)("inlineCode",{parentName:"p"},"t.text")," Texture Replay provides to draw text to the screen. Since our ",Object(a.b)("inlineCode",{parentName:"p"},"inputs")," can be different between platforms, we can set a different message for each one by checking the ",Object(a.b)("inlineCode",{parentName:"p"},"isWebInput")," function we created earlier."),Object(a.b)("p",null,"In our top-level ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite we can render the ",Object(a.b)("inlineCode",{parentName:"p"},"Menu")," Sprite on top of the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite. But when we're playing the game, we return ",Object(a.b)("inlineCode",{parentName:"p"},"null")," to hide it."),Object(a.b)("p",null,"Notice how ",Object(a.b)("inlineCode",{parentName:"p"},"Menu")," takes a ",Object(a.b)("em",{parentName:"p"},"callback")," prop ",Object(a.b)("inlineCode",{parentName:"p"},"start"),". By passing a function as a prop, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"updateState")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method to update the ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite's state. ",Object(a.b)("inlineCode",{parentName:"p"},"updateState")," is a function which takes the existing state and returns a new state to render on the next frame."),Object(a.b)("p",null,"This pattern is how child Sprites can update their parent's state, while still keeping a one-way data flow. In doing so, ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," is always in control of how its own state changes."))}l.isMDXComponent=!0},197:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(222),o=(n(52),n(217)),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}});function c(e){return"keysDown"in e}var u=Object(o.a)({init:function(){return{birdY:10,birdGravity:-12}},loop:function(e){var t=e.props,n=e.state,r=e.device;if(t.paused)return n;var i=r.inputs,a=n.birdGravity,o=n.birdY;return o-=a+=.8,(i.pointer.justPressed||c(i)&&i.keysJustPressed[" "])&&(a=-12),{birdGravity:a,birdY:o}},render:function(e){var t=e.state,n=e.device.size;return[o.b.rectangle({color:"#add8e6",width:n.width+2*n.widthMargin,height:n.height+2*n.heightMargin}),s({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})]}}),l=Object(o.a)({render:function(e){var t=e.props,n=e.device.inputs;return(n.pointer.justReleased||c(n)&&n.keysJustPressed[" "])&&t.start(),[o.b.text({text:c(n)?"Click or Space Bar to Start":"Tap to Start",color:"white",y:100})]}}),d=Object(o.a)({init:function(){return{view:"menu"}},render:function(e){var t=e.state,n=e.updateState,r="menu"===t.view;return[u({id:"level",paused:r}),r?l({id:"menu",start:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"level"})}))}}):null]}}),p={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},h=n(144);t.default=function(){return i.a.createElement(a.a,{part:13,MDXContent:h.default,codesTs:[{file:"menu.ts",code:'import { makeSprite, t } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { isWebInput } from "./utils";\n\ntype MenuProps = {\n  start: () => void;\n};\n\nexport const Menu = makeSprite<MenuProps, undefined, WebInputs | iOSInputs>({\n  render({ props, device }) {\n    const { inputs } = device;\n\n    if (\n      inputs.pointer.justReleased ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      props.start();\n    }\n\n    return [\n      t.text({\n        text: isWebInput(inputs)\n          ? "Click or Space Bar to Start"\n          : "Tap to Start",\n        color: "white",\n        y: 100,\n      }),\n    ];\n  },\n});\n'},{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\ntype GameState = {\n  view: "menu" | "level";\n};\n\nexport const Game = makeSprite<GameProps, GameState>({\n  init() {\n    return { view: "menu" };\n  },\n\n  render({ state, updateState }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: "level",\n        paused: inMenuScreen,\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[3,14,"22-34"]}],codesJs:[{file:"menu.js",code:'import { makeSprite, t } from "@replay/core";\nimport { isWebInput } from "./utils";\n\nexport const Menu = makeSprite({\n  render({ props, device }) {\n    const { inputs } = device;\n\n    if (\n      inputs.pointer.justReleased ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      props.start();\n    }\n\n    return [\n      t.text({\n        text: isWebInput(inputs)\n          ? "Click or Space Bar to Start"\n          : "Tap to Start",\n        color: "white",\n        y: 100,\n      }),\n    ];\n  },\n});\n'},{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\nexport const Game = makeSprite({\n  init() {\n    return { view: "menu" };\n  },\n\n  render({ state, updateState }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: "level",\n        paused: inMenuScreen,\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[3,10,"18-30"]}],Game:d,gameProps:p})}},217:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));n(52);var r=n(219),i={text:function(e){return{type:"text",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},219:function(e,t,n){"use strict";function r(e){var t,n,r;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(r=e.scaleY)&&void 0!==r?r:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0}}n.d(t,"a",(function(){return r}))},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var r=n(0),i=n.n(r),a=n(227),o=n(224),s=n(233),c=n(1),u=(n(220),n(221),n(78),n(234),n(228),n(79),n(235),n(80),n(229),n(232)),l=n(230),d=n(226),p=n(225),h=n(223),m=n.n(h),f=n(132),v=n.n(f);function g(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(d.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(p.a,{value:"js"},i.a.createElement(b,{lang:"js",codes:n})),i.a.createElement(p.a,{value:"ts"},i.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(r.useState)(a[0]),s=o[0],c=o[1],u=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return i.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(w,{key:u.file,lang:t,code:u.code,highlight:u.highlight}))}function w(e){var t=e.lang,n=e.code,r=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(u.a,Object(c.a)({},u.b,{theme:l.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:v.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:m()(t,v.a.codeBlock)},i.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(52),n(236),n(81);var y=n(237),j=n.n(y),x=(n(25),n(20),n(54),n(21),n(238),n(239)),E=(n(53),n(219));function O(e,t,n,r,i,a,o,s){var c=Object(E.a)(t);c.opacity*=s;var u=function(e){var t=r(e);return function(e){var t=e.x,n=e.y,r=Math.PI/180,i=-(e.rotation||0)*r;return function(r){var a=r.x,o=r.y,s=(a-t)*Math.cos(i)+(o-n)*Math.sin(i),c=-(a-t)*Math.sin(i)+(o-n)*Math.cos(i),u=e.x+(s-e.x)/e.scaleX,l=e.y+(c-e.y)/e.scaleY;return{x:u+e.anchorX,y:l+e.anchorY}}}(c)(t)},l=n(u),d=e.getSprites(t,l,i,a,o),p=[],h=d.filter(M).map((function(t){if("custom"===t.type){p.push(t.props.id);var r=!1;return e.childContainers[t.props.id]||(r=!0,e.childContainers[t.props.id]=S(t,l,e.prevTime)),O(e.childContainers[t.props.id],t.props,n,u,r,a,o,c.opacity)}return t}));return Object.keys(e.childContainers).forEach((function(t){p.includes(t)||delete e.childContainers[t]})),{id:t.id,baseProps:c,textures:h}}function S(e,t,n){var r,i=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return i.init&&(r=i.init({props:a,device:t,updateState:s})),{state:r,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,r,a){var c=this,u=a-this.prevTime;this.prevTime=a,this.currentLag+=u;var l=0,d=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};if(d(),!n&&i.loop){for(;this.currentLag>=1/60*1e3;)this.state=i.loop({props:e,state:this.state,device:t,updateState:s}),this.currentLag-=1/60*1e3;l=this.currentLag/(1/60*1e3)}d();var p=i[r];p||(p="renderPXL"===r&&i.renderXL?i.renderXL:i.render);var h=p({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:l});return d(),h}}}function k(e,t){var n,r=e.deviceHeight>e.deviceWidth,i=!1;return"portrait"in t?(n=r?t.portrait:t.landscape,i=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?i&&r?"renderPXL":"renderXL":i&&r?"renderP":"render"}function M(e){return null!==e}var L={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function P(e){return function(e,t){var n=e(t.pointer);return Object.assign(Object.assign({},t),{},{pointer:Object.assign(Object.assign({},t.pointer),{},{x:n.x,y:n.y})})}(e,L)}function C(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),L.keysDown[e.key]=!0,L.keysJustPressed[e.key]=!0}function I(e){delete L.keysDown[e.key]}function N(){L.pointer.justPressed=!1,L.pointer.pressed=!1}n(231),n(240);function T(e,t,n,r){var i=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,u=t.deviceHeight;e.save();var l=Math.min(c/i,u/a),d=i+2*o,p=a+2*s;return e.translate(c/2,u/2),e.scale(l,l),{scale:l,render:function(t){e.clearRect(-c/2/l,-u/2/l,c/l,u/l),e.fillStyle="white",e.fillRect(-d/2,-p/2,d,p),function e(t,n,r,i){var a=t.baseProps,o=t.textures;n.save(),X(n,a),o.forEach((function(t){if("type"in t){var o=z(n);return n.save(),X(n,t.props,a.opacity),function(e,t,n,r){switch(e.type){case"text":return t.text(e.props.font||r,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var i=n[e.props.fileName];if(!i)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(i,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,r,i),void n.restore()}e(t,n,r,i)})),n.restore()}(t,e,n,r)}}}var G,W=Math.PI/180,X=function(e,t,n){void 0===n&&(n=1);var r=t.x,i=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,u=t.anchorY,l=t.opacity;e.translate(r,-i),e.rotate(a*W),e.scale(o,s),e.translate(-c,u),e.globalAlpha=l*n},z=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,r){e.fillStyle=r,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,r){if(!(t.length<2)){var i=t[0],a=i[0],o=i[1],s=t.slice(1);e.strokeStyle=r,e.lineWidth=n,e.beginPath(),e.moveTo(a,-o),s.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),e.stroke()}},text:function(t,n,r,i){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=r,e.fillStyle=i,e.fillText(n,0,0)},image:function(t,n,r){e.drawImage(t,-n/2,-r/2,n,r)},spriteSheet:function(t,n,r,i,a,o){var s=t.width/n,c=t.height/r,u=i%n,l=Math.floor(i/n)%r;e.drawImage(t,u*s,l*c,s,c,-a/2,-o/2,a,o)}}};function H(e,t,n,r){var i;"portrait"in r?i=t>e?r.portrait:r.landscape:i=r;var a=i,o=a.width,s=a.height,c=a.maxWidthMargin,u=void 0===c?0:c,l=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var d=o/s;if(d>e/t){var p=e,h=p/d,m=h/s*(void 0===l?0:l),f=Math.min(t,h+2*m);return{width:o,height:s,widthMargin:0,heightMargin:(f-h)/2*(s/h),deviceWidth:p,deviceHeight:f}}var v=t,g=v*d,b=g/o*u,w=Math.min(e,g+2*b);return{width:o,height:s,widthMargin:(w-g)/2*(o/g),heightMargin:0,deviceWidth:w,deviceHeight:v}}var R={name:"sans-serif",size:12};function D(e,t,n,r,i,a){var o;void 0===t&&(t=[]),void 0===n&&(n={}),void 0===r&&(r="game-coords");var s=i||document.createElement("canvas");i||document.body.appendChild(s);var c,u,l,d,p,h=s.getContext("2d",{alpha:!1}),m=!0;function f(t){if(!c||(h.restore(),document.removeEventListener("pointerdown",u),document.removeEventListener("pointermove",l),document.removeEventListener("pointerup",d),document.removeEventListener("pointerout",N),!0!==t)){var n=function(e,t,n,r){var i=H(e,t,n,r);return G=i,i}((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,r,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;var i=e.props.defaultFont||R,o=T(h,n,g,i);p=o.scale,w.ref=o.render;var f=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,r=e.scale,i=e.width;return function(e){return(e.clientX-t)/r-n-i/2}}({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:p}),v=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,r=e.scale,i=e.height;return function(e){return-(e.clientY-t)/r+n+i/2}}({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:p}),b=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2+n.heightMargin};u=function(e){var t=f(e),n=v(e);b(t,n)?m=!1:(m=!0,function(e,t){L.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},l=function(e){var t=f(e),n=v(e);b(t,n)||function(e,t){L.pointer.x=e,L.pointer.y=t}(t,n)},d=function(e){var t=f(e),n=v(e);b(t,n)?N():function(e,t){L.pointer.justPressed=!1,L.pointer.pressed=!1,L.pointer.justReleased=!0,L.pointer.x=e,L.pointer.y=t}(t,n)},document.addEventListener("pointerdown",u,!1),document.addEventListener("pointermove",l,!1),document.addEventListener("pointerup",d,!1),document.addEventListener("pointerout",N,!1),c=n}}document.addEventListener("keydown",(function(e){m&&C(e)}),!1),document.addEventListener("keyup",(function(e){m&&I(e)}),!1),window.addEventListener("resize",f,!1);var v={},g={},b={getGetDevice:J(v,H((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,r,e.props.size))},w={ref:null};f();var y=!1,M=function(){var e=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n.audioFileNames||[]).forEach((function(e){v[e]=new Audio(e),t.push(new Promise((function(t,n){v[e].addEventListener("canplaythrough",t),v[e].addEventListener("error",n)}))),v[e].load()})),(n.imageFileNames||[]).forEach((function(e){g[e]=new Image,t.push(new Promise((function(t,n){g[e].addEventListener("load",t),g[e].addEventListener("error",n),g[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(o=w.ref)||void 0===o||o.call(w,{id:"Loading",baseProps:Object(E.a)({}),textures:t}),{cleanup:function(){s.width=s.width,i||document.body.removeChild(s),y=!0,document.removeEventListener("keydown",C,!1),document.removeEventListener("keyup",I,!1),window.removeEventListener("resize",f,!1),f(!0)},loadPromise:M().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(v).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n){var r=t||game.Game(game.gameProps),i=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(i),s=S(r,a(i),0),c=n||r.props.size,u=k(o.size,c);return{initTextures:O(s,r.props,a,i,!0,u,0,1),getNextFrameTextures:function(t){var n=e.getGetDevice(),a=k(n(i).size,c);return O(s,r.props,n,i,!1,a,t,1)}}}(b,e),r=n.initTextures,i=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=w.ref)||void 0===n||n.call(w,t),window.requestAnimationFrame((function(t){y||(null===a&&(a=t-1/60),e(i(t-a)),L={keysDown:L.keysDown,keysJustPressed:{},pointer:Object.assign(Object.assign({},L.pointer),{},{justPressed:!1,justReleased:!1})})}))}(r)})),audioElements:v}}function J(e,t){var n={log:console.log,random:Math.random,timeout:function(e,t){return setTimeout(e,t)},audio:function(t){function n(n){var r=e[t];if(!r)throw Error("Cannot find audio file "+t);return n&&!r.paused&&(r=new Audio(t)),r}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var r=n(!0);r.play(),void 0!==e&&(r.currentTime=e),t&&(r.loop=!0)},pause:function(){n(!1).pause()}}},network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}}};return function(){var e=Object.assign(Object.assign({},n),{},{size:G||t,now:function(){return new Date}});return function(t){return Object.assign(Object.assign({},e),{},{inputs:P(t)})}}}var B=n(217);function F(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],a=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(r.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],u=s[1],l=Object(r.useState)(0),d=l[0],p=l[1],h=0,m=0,f=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(m=c.height*(667/900),h=m*(375/667)):(h=c.width*(375/460),m=h/(375/667));var g=n.size.maxHeightMargin?0:.08*m;f=(c.height-m)/2+g}return Object(r.useEffect)((function(){if(h&&m){var e=document.getElementById("myCanvas"),r=D(t(n),[B.b.text({color:"black",text:"Loading..."})],o,"scale-up",e,{width:h,height:m}).cleanup;return function(){r()}}}),[h,m,d]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:u,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&i.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:f},width:h,height:m}))}function Y(e){var t=e.part,n=e.MDXContent,r=e.codesTs,c=e.codesJs,u=e.Game,l=e.gameProps,d=e.image,p=e.isEnd,h=e.assets,m=r&&c,f=u&&l?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(F,{Game:u,gameProps:l,showReload:m,assets:h})})):i.a.createElement("div",null,i.a.createElement("img",{src:d}));return i.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),p?i.a.createElement("div",null):i.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),m?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(g,{codesTs:r,codesJs:c})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},f)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},f)))}}}]);