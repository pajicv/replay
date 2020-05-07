(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(9),a=(n(0),n(216)),o={},s={id:"tutorial/12",title:"12",description:"# 12 - Sprite Props",source:"@site/docs/tutorial/12.md",permalink:"/docs/tutorial/12",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/12.md"},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"12---sprite-props"},"12 - Sprite Props"),Object(a.b)("p",null,"To avoid our game auto-starting every time it loads, we need a way to pause the game, for example when in a menu screen. We can do this by passing ",Object(a.b)("inlineCode",{parentName:"p"},"props")," between Sprites."),Object(a.b)("p",null,"In our ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite we can setup a ",Object(a.b)("inlineCode",{parentName:"p"},"paused")," prop which we access in the ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," method. Pausing is simple: we just return early with the current ",Object(a.b)("inlineCode",{parentName:"p"},"state")," to avoid any of the game logic running."),Object(a.b)("p",null,"Then in our top-level ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite we add some state to know if we're viewing the menu or not. If we are, we pause the level by passing the ",Object(a.b)("inlineCode",{parentName:"p"},"paused")," prop in."))}d.isMDXComponent=!0},197:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(217),o=n(215),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}});var c=Object(o.a)({init:function(){return{birdY:10,birdGravity:-12}},loop:function(e){var t=e.props,n=e.state,r=e.device;if(t.paused)return n;var i=r.inputs,a=n.birdGravity,o=n.birdY;return o-=a+=.8,(i.pointer.justPressed||"keysDown"in i&&i.keysJustPressed[" "])&&(a=-12),{birdGravity:a,birdY:o}},render:function(e){var t=e.state,n=e.device.size;return[o.b.rectangle({color:"#add8e6",width:n.width+2*n.widthMargin,height:n.height+2*n.heightMargin}),s({id:"bird",position:{x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)}})]}}),l=Object(o.a)({init:function(){return{view:"menu"}},render:function(e){var t="menu"===e.state.view;return[c({id:"level",paused:t})]}}),d={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},p=n(139);t.default=function(){return i.a.createElement(a.a,{part:12,MDXContent:p.default,codesTs:[{file:"level.ts",code:'import { makeSprite, t } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird } from "./bird";\nimport { isWebInput } from "./utils";\n\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    return {\n      birdGravity,\n      birdY,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        position: {\n          x: birdX,\n          y: state.birdY,\n          rotation: Math.max(-30, state.birdGravity * 3 - 30),\n        },\n      }),\n    ];\n  },\n});\n',highlight:[9,10,11,18,"26-29"]},{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Level } from "./level";\n\ntype GameState = {\n  view: "menu" | "level";\n};\n\nexport const Game = makeSprite<GameProps, GameState>({\n  init() {\n    return { view: "menu" };\n  },\n\n  render({ state }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: "level",\n        paused: inMenuScreen,\n      }),\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[4,5,6,"8-11",13,14,19]}],codesJs:[{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird } from "./bird";\nimport { isWebInput } from "./utils";\n\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    return {\n      birdGravity,\n      birdY,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        position: {\n          x: birdX,\n          y: state.birdY,\n          rotation: Math.max(-30, state.birdGravity * 3 - 30),\n        },\n      }),\n    ];\n  },\n});\n',highlight:["15-18"]},{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Level } from "./level";\n\nexport const Game = makeSprite({\n  init() {\n    return { view: "menu" };\n  },\n\n  render({ state }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: "level",\n        paused: inMenuScreen,\n      }),\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[5,6,7,9,10,15]}],Game:l,gameProps:d})}},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r={text:e=>({type:"text",props:e}),circle:e=>({type:"circle",props:e}),rectangle:e=>({type:"rectangle",props:e}),line:e=>({type:"line",props:e}),image:e=>({type:"image",props:e}),spriteSheet:e=>({type:"spriteSheet",props:e})};function i(e){return t=>({type:"custom",spriteObj:e,props:t})}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var r=n(0),i=n.n(r),a=n(222),o=n(219),s=n(229),c=n(1),l=(n(224),n(225),n(80),n(230),n(223),n(78),n(231),n(79),n(226),n(228)),d=n(227),p=n(221),u=n(220),h=n(218),m=n.n(h),g=n(132),v=n.n(g);function f(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(p.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(u.a,{value:"js"},i.a.createElement(y,{lang:"js",codes:n})),i.a.createElement(u.a,{value:"ts"},i.a.createElement(y,{lang:"ts",codes:t})))}function y(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(r.useState)(a[0]),s=o[0],c=o[1],l=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return i.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(w,{key:l.file,lang:t,code:l.code,highlight:l.highlight}))}function w(e){var t=e.lang,n=e.code,r=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(l.a,Object(c.a)({},l.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:v.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:m()(t,v.a.codeBlock)},i.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(25);function b(e,t,n,r,i,a){const o=S(t.position),s=e.getSprites(t,n,o,r,i,a),c=[],l=s.filter(M).map(t=>{const r={...t,props:{...t.props,position:k(o,t.props.position)}};if("custom"===r.type){c.push(r.props.id);let t=!1;return e.childContainers[r.props.id]||(t=!0,e.childContainers[r.props.id]=E(r,n,e.prevTime)),b(e.childContainers[r.props.id],r.props,n,t,i,a)}return[r]});return Object.keys(e.childContainers).forEach(t=>{c.includes(t)||delete e.childContainers[t]}),l.reduce((e,t)=>e.concat(t),[])}function E(e,t,n){const{spriteObj:r,props:i}=e,a=t(i.position),o=[],s=e=>{o.push(e)};let c;return r.init&&(c=r.init({props:i,device:a,updateState:s})),{state:c,childContainers:{},prevTime:n,currentLag:0,getSprites(e,t,n,i,a,c){const l=c-this.prevTime;this.prevTime=c,this.currentLag+=l;const d=t(n);let p=0;if(this.state=o.reduce((e,t)=>t(e),this.state),o.length=0,!i&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:d,updateState:s}),this.currentLag-=1/60*1e3;p=this.currentLag/(1/60*1e3)}let u=r[a];u||(u="renderPXL"===a&&r.renderXL?r.renderXL:r.render);const h=u({props:e,state:this.state,device:d,updateState:s,extrapolateFactor:p});return this.state=o.reduce((e,t)=>t(e),this.state),o.length=0,h}}}function x(e,t){const n=e.deviceHeight>e.deviceWidth;let r,i=!1;return"portrait"in t?(r=n?t.portrait:t.landscape,i=!0):r=t,r.minHeightXL&&e.deviceHeight>=r.minHeightXL||r.minWidthXL&&e.deviceWidth>=r.minWidthXL?i&&n?"renderPXL":"renderXL":i&&n?"renderP":"render"}function M(e){return null!==e}function S(e){return e?{...e,rotation:e.rotation||0}:{x:0,y:0,rotation:0}}function k(e,t){if(!t)return e;const{x:n,y:r,rotation:i}=S(t),a=Math.PI/180,o=-e.rotation*a;return{x:Math.round(e.x+n*Math.cos(o)-r*Math.sin(o))||0,y:Math.round(e.y+n*Math.sin(o)+r*Math.cos(o))||0,rotation:e.rotation+i}}let L={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function j(e){if(!e)return L;const t=e.x,n=e.y,{x:r,y:i}=L.pointer,a=Math.PI/180,o=-(e.rotation||0)*a;return{...L,pointer:{...L.pointer,x:(r-t)*Math.cos(o)+(i-n)*Math.sin(o),y:-(r-t)*Math.sin(o)+(i-n)*Math.cos(o)}}}function P(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),L.keysDown[e.key]=!0,L.keysJustPressed[e.key]=!0}function G(e){delete L.keysDown[e.key]}const T=Math.PI/180,O=(e,t)=>({circle(n,r){e.save();const i=n*t.anchorX,a=n*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*T),e.scale(t.scaleX,t.scaleY),e.translate(-i,a),e.beginPath(),e.arc(0,0,Math.round(n),0,2*Math.PI),e.globalAlpha=t.opacity,e.fillStyle=r,e.fill(),e.closePath(),e.restore()},rectangle(n,r,i){e.save();const a=n/2*t.anchorX,o=r/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*T),e.scale(t.scaleX,t.scaleY),e.translate(-a,o),e.globalAlpha=t.opacity,e.fillStyle=i,e.fillRect(-n/2,-r/2,n,r),e.closePath(),e.restore()},line(n,r,i){if(n.length<2)return;e.save();const[[a,o],...s]=n,{width:c,height:l}=function(e){if(e.length<2)return{width:0,height:0};let t=Number.MAX_SAFE_INTEGER,n=-Number.MAX_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER,i=-Number.MAX_SAFE_INTEGER;return e.forEach(([e,a])=>{e>n&&(n=e),e<t&&(t=e),a>i&&(i=a),a<r&&(r=a)}),{width:n-t,height:i-r}}(n),d=c/2*t.anchorX,p=l/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*T),e.scale(t.scaleX,t.scaleY),e.translate(-d,p),e.globalAlpha=t.opacity,e.strokeStyle=i,e.lineWidth=r,e.beginPath(),e.moveTo(a,-o),s.forEach(([t,n])=>{e.lineTo(t,-n)}),e.stroke(),e.restore()},text(n,r,i){e.save();const a=`${n.size}px ${n.name}`;e.font=a,e.textBaseline="middle",e.textAlign="center";const{width:o}=e.measureText(r),s=n.size,c=o/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*T),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.font=a,e.textBaseline="middle",e.textAlign="center",e.globalAlpha=t.opacity,e.fillStyle=i,e.fillText(r,0,0),e.restore()},image(n,r,i){e.save();const a=r/2*t.anchorX,o=i/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*T),e.scale(t.scaleX,t.scaleY),e.translate(-a,o),e.globalAlpha=t.opacity,e.drawImage(n,-r/2,-i/2,r,i),e.restore()},spriteSheet(n,r,i,a,o,s){e.save();const c=o/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*T),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.globalAlpha=t.opacity;const d=n.width/r,p=n.height/i,u=a%r,h=Math.floor(a/r)%i;e.drawImage(n,u*d,h*p,d,p,-o/2,-s/2,o,s),e.restore()}});let X;function z(e,t,n,r){let i;if("portrait"in r){i=t>e?r.portrait:r.landscape}else i=r;const{width:a,height:o,maxWidthMargin:s=0,maxHeightMargin:c=0}=i;if("game-coords"===n)return{width:a,height:o,widthMargin:0,heightMargin:0,deviceWidth:a,deviceHeight:o};const l=a/o;if(l>e/t){const n=e,r=n/l,i=r/o*c,s=Math.min(t,r+2*i);return{width:a,height:o,widthMargin:0,heightMargin:(s-r)/2*(o/r),deviceWidth:n,deviceHeight:s}}{const n=t,r=n*l,i=r/a*s,c=Math.min(e,r+2*i);return{width:a,height:o,widthMargin:(c-r)/2*(a/r),heightMargin:0,deviceWidth:c,deviceHeight:n}}}const N={name:"sans-serif",size:12};function Y(e,t=[],n={},r="game-coords",i,a){var o;const s=i||document.createElement("canvas");i||document.body.appendChild(s);const c=s.getContext("2d",{alpha:!1});let l=!0;let d,p,u,h,m;function g(t){if(d&&(c.restore(),document.removeEventListener("pointerdown",p),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",h),!0===t))return;const n=function(e,t,n,r){const i=z(e,t,n,r);return X=i,i}((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,r,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;const i=e.props.defaultFont||N,o=function(e,{width:t,height:n,widthMargin:r,heightMargin:i,deviceWidth:a,deviceHeight:o},s,c){e.save();const l=Math.min(a/t,o/n),d=t+2*r,p=n+2*i;return e.translate(a/2,o/2),e.scale(l,l),{scale:l,render:t=>{e.clearRect(-a/2/l,-o/2/l,a/l,o/l),e.fillStyle="white",e.fillRect(-d/2,-p/2,d,p),t.forEach(t=>{var n,r,i;const a=t.props.position||{x:0,y:0};(function(e,t,n,r){switch(e.type){case"text":return()=>t.text(e.props.font||r,e.props.text,e.props.color);case"circle":return()=>t.circle(e.props.radius,e.props.color);case"rectangle":return()=>t.rectangle(e.props.width,e.props.height,e.props.color);case"line":return()=>t.line(e.props.path,e.props.thickness,e.props.color);case"image":return()=>t.image(n[e.props.fileName],e.props.width,e.props.height);case"spriteSheet":return()=>t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}})(t,O(e,{x:a.x,y:-a.y,rotation:a.rotation||0,opacity:null!==(n=t.props.opacity)&&void 0!==n?n:1,scaleX:null!==(r=t.props.scaleX)&&void 0!==r?r:1,scaleY:null!==(i=t.props.scaleY)&&void 0!==i?i:1,anchorX:t.props.anchorX||0,anchorY:t.props.anchorY||0}),s,c)()})}}}(c,n,f,i);m=o.scale,w.ref=o.render;const g=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:r})=>i=>(i.clientX-e)/n-t-r/2)({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:m}),v=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:r})=>i=>-(i.clientY-e)/n+t+r/2)({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:m}),y=(e,t)=>e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2+n.heightMargin;p=e=>{const t=g(e),n=v(e);y(t,n)?l=!1:(l=!0,function(e,t){L.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},u=e=>{const t=g(e),n=v(e);y(t,n)||function(e,t){L.pointer.x=e,L.pointer.y=t}(t,n)},h=e=>{const t=g(e),n=v(e);y(t,n)||function(e,t){L.pointer.justPressed=!1,L.pointer.pressed=!1,L.pointer.justReleased=!0,L.pointer.x=e,L.pointer.y=t}(t,n)},document.addEventListener("pointerdown",p,!1),document.addEventListener("pointermove",u,!1),document.addEventListener("pointerup",h,!1),d=n}document.addEventListener("keydown",e=>{l&&P(e)},!1),document.addEventListener("keyup",e=>{l&&G(e)},!1),window.addEventListener("resize",g,!1);const v={},f={},y={getGetDevice:C(v,z((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,r,e.props.size))},w={ref:null};g();const{initTextures:M,getNextFrameTextures:S}=function(e,t,n){const r=t||game.Game(game.gameProps),i=e.getGetDevice(),a=i(r.props.position),o=E(r,i,0),s=n||r.props.size,c=x(a.size,s);return{initTextures:b(o,r.props,i,!0,c,0),getNextFrameTextures(t){const n=e.getGetDevice(),i=x(n(r.props.position).size,s);return b(o,r.props,n,!1,i,t)}}}(y,e);let k=null,j=!1;function T(e){var t;null===(t=w.ref)||void 0===t||t.call(w,e),window.requestAnimationFrame(e=>{j||(null===k&&(k=e-1/60),T(S(e-k)),L={keysDown:L.keysDown,keysJustPressed:{},pointer:{...L.pointer,justPressed:!1,justReleased:!1}})})}return null===(o=w.ref)||void 0===o||o.call(w,t),{cleanup:function(){s.width=s.width,i||document.body.removeChild(s),j=!0,document.removeEventListener("keydown",P,!1),document.removeEventListener("keyup",G,!1),window.removeEventListener("resize",g,!1),g(!0)},loadPromise:(async()=>{const e=[];(n.audioFileNames||[]).forEach(t=>{v[t]=new Audio(t),e.push(new Promise((e,n)=>{v[t].addEventListener("canplaythrough",e),v[t].addEventListener("error",n)})),v[t].load()}),(n.imageFileNames||[]).forEach(t=>{f[t]=new Image,e.push(new Promise((e,n)=>{f[t].addEventListener("load",e),f[t].addEventListener("error",n),f[t].src=t}))}),await Promise.all(e)})().then(()=>{const e=()=>{document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(v).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",e,!1),document.addEventListener("pointerdown",e,!1),T(M)}),audioElements:v}}function C(e,t){const n={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function n(n){let r=e[t];if(!r)throw Error("Cannot find audio file "+t);return n&&r.currentTime>0&&r.currentTime<r.duration&&(r=new Audio(t)),r}return{getPosition:()=>n(!1).currentTime,play:(e,t)=>{const r=n(!0);r.play(),e&&(r.currentTime=e),t&&(r.loop=!0)},pause:()=>{n(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...n,size:X||t,now:()=>new Date};return t=>({...e,inputs:j(t)})}}var I=n(215);function A({Game:e,gameProps:t,showReload:n,assets:a}){const[o,s]=function(){const e=Object(r.useRef)(null),[t,n]=Object(r.useState)(null),i=()=>{n(e.current.getBoundingClientRect())};Object(r.useEffect)(()=>(window.addEventListener("resize",i,!1),()=>window.removeEventListener("resize",i,!1)),[]);const a=Object(r.useCallback)(t=>{null!==t&&(e.current=t,i())},[]);return[t,a]}(),[c,l]=Object(r.useState)(0),d=((null==o?void 0:o.height)||0)*(667/900),p=375*d/667,u=d*(t.size.maxHeightMargin?.175:.25),h=((null==o?void 0:o.height)||900)*(460/900);return Object(r.useEffect)(()=>{if(!p||!d)return;const n=document.getElementById("myCanvas"),{cleanup:r}=Y(e(t),[I.b.text({color:"black",text:"Loading..."})],a,"scale-up",n,{width:p,height:d});return()=>{r()}},[p,d,c]),i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{ref:s,height:"100%",width:h,style:{userSelect:"none"},src:"/img/iPhone8-Portrait-SpaceGray.png"}),n&&i.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:()=>l(e=>e+1)}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:u},width:p,height:d}))}function W({part:e,MDXContent:t,codesTs:n,codesJs:r,Game:c,gameProps:l,image:d,isEnd:p,assets:u}){const h=n&&r,m=c&&l?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},()=>i.a.createElement(A,{Game:c,gameProps:l,showReload:h,assets:u})):i.a.createElement("div",null,i.a.createElement("img",{src:d}));return i.a.createElement(a.a,{title:"Tutorial - Part "+e,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(t,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e>1?i.a.createElement(o.a,{to:"/tutorial/"+(e-1)},"Back"):i.a.createElement("div",null),p?i.a.createElement("div",null):i.a.createElement(o.a,{to:"/tutorial/"+(e+1)},"Next"))),h?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(f,{codesTs:n,codesJs:r})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}}}]);