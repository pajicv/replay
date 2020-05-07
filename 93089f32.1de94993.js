(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(216)),o={},s={id:"tutorial/20",title:"20",description:"# 20 - Setup Tests",source:"@site/docs/tutorial/20.md",permalink:"/docs/tutorial/20",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/20.md"},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"20---setup-tests"},"20 - Setup Tests"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@replay/test")," package provides a platform to automate gameplay tests for our game. We can write our tests as though we're playing the game for real, without needing to know much about the internal workings of our code."),Object(i.b)("p",null,"Using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/"}),"Jest")," we can write an initial test to confirm we can start the game."),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"__tests__/game.test")," replace what's there with the code on the right. We pass our ",Object(i.b)("inlineCode",{parentName:"p"},"Game")," Sprite (and ",Object(i.b)("inlineCode",{parentName:"p"},"gameProps"),") into the ",Object(i.b)("inlineCode",{parentName:"p"},"testGame")," function, which returns some more useful functions for inspecting our game. Since the test platform doesn't know if we want to run on web or iOS, we need to supply the inputs we'd expect on those platforms through ",Object(i.b)("inlineCode",{parentName:"p"},"initInputs"),"."),Object(i.b)("p",null,"Below that ",Object(i.b)("inlineCode",{parentName:"p"},"getByText(mainMenuText)")," searches all ",Object(i.b)("inlineCode",{parentName:"p"},"t.text")," Textures that match the string passed in, or throws an error if it can't find it. This confirms that our main menu is visible on the initial render."),Object(i.b)("p",null,"Next we call ",Object(i.b)("inlineCode",{parentName:"p"},"updateInputs")," to simulate a mouse click or tap to start, then progress one frame with ",Object(i.b)("inlineCode",{parentName:"p"},"nextFrame"),". After that we reset the inputs and progress one more frame. Now that the game's started, we confirm in our test the main menu isn't visible any more."))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(217),o=n(151);t.default=function(){return a.a.createElement(i.a,{part:20,MDXContent:o.default,codesTs:[{file:"__tests__/game.test.ts",code:'import { testGame } from "@replay/test";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Game, gameProps } from "..";\n\ntest("Can start game", () => {\n  const initInputs: WebInputs | iOSInputs = {\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  };\n  const mainMenuText = "Start";\n\n  const { nextFrame, updateInputs, getByText } = testGame(Game(gameProps), {\n    initInputs,\n  });\n\n  expect(getByText(mainMenuText)).toBeDefined();\n\n  updateInputs({\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: true,\n      // Note that the pointer position has the same coordinates in all Sprites\n      x: 0,\n      y: 0,\n    },\n  });\n  nextFrame();\n\n  updateInputs(initInputs);\n  nextFrame();\n\n  // Main menu gone, game has started\n  expect(() => getByText(mainMenuText)).toThrowError();\n});\n'}],codesJs:[{file:"__tests__/game.test.js",code:'import { testGame } from "@replay/test";\nimport { Game, gameProps } from "..";\n\ntest("Can start game", () => {\n  const initInputs = {\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  };\n  const mainMenuText = "Start";\n\n  const { nextFrame, updateInputs, getByText } = testGame(Game(gameProps), {\n    initInputs,\n  });\n\n  expect(getByText(mainMenuText)).toBeDefined();\n\n  updateInputs({\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: true,\n      // Note that the pointer position has the same coordinates in all Sprites\n      x: 0,\n      y: 0,\n    },\n  });\n  nextFrame();\n\n  updateInputs(initInputs);\n  nextFrame();\n\n  // Main menu gone, game has started\n  expect(() => getByText(mainMenuText)).toThrowError();\n});\n'}],image:"/img/test20.gif"})}},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));const r={text:e=>({type:"text",props:e}),circle:e=>({type:"circle",props:e}),rectangle:e=>({type:"rectangle",props:e}),line:e=>({type:"line",props:e}),image:e=>({type:"image",props:e}),spriteSheet:e=>({type:"spriteSheet",props:e})};function a(e){return t=>({type:"custom",spriteObj:e,props:t})}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var r=n(0),a=n.n(r),i=n(222),o=n(219),s=n(229),c=n(1),l=(n(224),n(225),n(80),n(230),n(223),n(78),n(231),n(79),n(226),n(228)),p=n(227),d=n(221),u=n(220),h=n(218),m=n.n(h),g=n(132),f=n.n(g);function v(e){var t=e.codesTs,n=e.codesJs;return a.a.createElement(d.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},a.a.createElement(u.a,{value:"js"},a.a.createElement(w,{lang:"js",codes:n})),a.a.createElement(u.a,{value:"ts"},a.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,i=n.map((function(e){return e.file})),o=Object(r.useState)(i[0]),s=o[0],c=o[1],l=n.find((function(e){return e.file===s}));return a.a.createElement("div",{style:{marginTop:-12}},a.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},i.map((function(e){return a.a.createElement("button",{className:f.a.fileButton+(s===e?" "+f.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),a.a.createElement(y,{key:l.file,lang:t,code:l.code,highlight:l.highlight}))}function y(e){var t=e.lang,n=e.code,r=e.highlight,i=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return a.a.createElement(l.a,Object(c.a)({},l.b,{theme:p.a,code:i,language:t}),(function(e){var t=e.className,n=e.style,i=e.tokens,o=e.getLineProps,s=e.getTokenProps;return a.a.createElement("div",{className:f.a.codeBlockContent},a.a.createElement("div",{tabIndex:"0",className:m()(t,f.a.codeBlock)},a.a.createElement("div",{className:f.a.codeBlockLines,style:n},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),i=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==i?void 0:i.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),a.a.createElement("div",n,a.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return a.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(25);function b(e,t,n,r,a,i){const o=M(t.position),s=e.getSprites(t,n,o,r,a,i),c=[],l=s.filter(j).map(t=>{const r={...t,props:{...t.props,position:T(o,t.props.position)}};if("custom"===r.type){c.push(r.props.id);let t=!1;return e.childContainers[r.props.id]||(t=!0,e.childContainers[r.props.id]=x(r,n,e.prevTime)),b(e.childContainers[r.props.id],r.props,n,t,a,i)}return[r]});return Object.keys(e.childContainers).forEach(t=>{c.includes(t)||delete e.childContainers[t]}),l.reduce((e,t)=>e.concat(t),[])}function x(e,t,n){const{spriteObj:r,props:a}=e,i=t(a.position),o=[],s=e=>{o.push(e)};let c;return r.init&&(c=r.init({props:a,device:i,updateState:s})),{state:c,childContainers:{},prevTime:n,currentLag:0,getSprites(e,t,n,a,i,c){const l=c-this.prevTime;this.prevTime=c,this.currentLag+=l;const p=t(n);let d=0;if(this.state=o.reduce((e,t)=>t(e),this.state),o.length=0,!a&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:p,updateState:s}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}let u=r[i];u||(u="renderPXL"===i&&r.renderXL?r.renderXL:r.render);const h=u({props:e,state:this.state,device:p,updateState:s,extrapolateFactor:d});return this.state=o.reduce((e,t)=>t(e),this.state),o.length=0,h}}}function E(e,t){const n=e.deviceHeight>e.deviceWidth;let r,a=!1;return"portrait"in t?(r=n?t.portrait:t.landscape,a=!0):r=t,r.minHeightXL&&e.deviceHeight>=r.minHeightXL||r.minWidthXL&&e.deviceWidth>=r.minWidthXL?a&&n?"renderPXL":"renderXL":a&&n?"renderP":"render"}function j(e){return null!==e}function M(e){return e?{...e,rotation:e.rotation||0}:{x:0,y:0,rotation:0}}function T(e,t){if(!t)return e;const{x:n,y:r,rotation:a}=M(t),i=Math.PI/180,o=-e.rotation*i;return{x:Math.round(e.x+n*Math.cos(o)-r*Math.sin(o))||0,y:Math.round(e.y+n*Math.sin(o)+r*Math.cos(o))||0,rotation:e.rotation+a}}let k={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function S(e){if(!e)return k;const t=e.x,n=e.y,{x:r,y:a}=k.pointer,i=Math.PI/180,o=-(e.rotation||0)*i;return{...k,pointer:{...k.pointer,x:(r-t)*Math.cos(o)+(a-n)*Math.sin(o),y:-(r-t)*Math.sin(o)+(a-n)*Math.cos(o)}}}function L(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),k.keysDown[e.key]=!0,k.keysJustPressed[e.key]=!0}function O(e){delete k.keysDown[e.key]}const P=Math.PI/180,N=(e,t)=>({circle(n,r){e.save();const a=n*t.anchorX,i=n*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-a,i),e.beginPath(),e.arc(0,0,Math.round(n),0,2*Math.PI),e.globalAlpha=t.opacity,e.fillStyle=r,e.fill(),e.closePath(),e.restore()},rectangle(n,r,a){e.save();const i=n/2*t.anchorX,o=r/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-i,o),e.globalAlpha=t.opacity,e.fillStyle=a,e.fillRect(-n/2,-r/2,n,r),e.closePath(),e.restore()},line(n,r,a){if(n.length<2)return;e.save();const[[i,o],...s]=n,{width:c,height:l}=function(e){if(e.length<2)return{width:0,height:0};let t=Number.MAX_SAFE_INTEGER,n=-Number.MAX_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER,a=-Number.MAX_SAFE_INTEGER;return e.forEach(([e,i])=>{e>n&&(n=e),e<t&&(t=e),i>a&&(a=i),i<r&&(r=i)}),{width:n-t,height:a-r}}(n),p=c/2*t.anchorX,d=l/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-p,d),e.globalAlpha=t.opacity,e.strokeStyle=a,e.lineWidth=r,e.beginPath(),e.moveTo(i,-o),s.forEach(([t,n])=>{e.lineTo(t,-n)}),e.stroke(),e.restore()},text(n,r,a){e.save();const i=`${n.size}px ${n.name}`;e.font=i,e.textBaseline="middle",e.textAlign="center";const{width:o}=e.measureText(r),s=n.size,c=o/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.font=i,e.textBaseline="middle",e.textAlign="center",e.globalAlpha=t.opacity,e.fillStyle=a,e.fillText(r,0,0),e.restore()},image(n,r,a){e.save();const i=r/2*t.anchorX,o=a/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-i,o),e.globalAlpha=t.opacity,e.drawImage(n,-r/2,-a/2,r,a),e.restore()},spriteSheet(n,r,a,i,o,s){e.save();const c=o/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.globalAlpha=t.opacity;const p=n.width/r,d=n.height/a,u=i%r,h=Math.floor(i/r)%a;e.drawImage(n,u*p,h*d,p,d,-o/2,-s/2,o,s),e.restore()}});let I;function C(e,t,n,r){let a;if("portrait"in r){a=t>e?r.portrait:r.landscape}else a=r;const{width:i,height:o,maxWidthMargin:s=0,maxHeightMargin:c=0}=a;if("game-coords"===n)return{width:i,height:o,widthMargin:0,heightMargin:0,deviceWidth:i,deviceHeight:o};const l=i/o;if(l>e/t){const n=e,r=n/l,a=r/o*c,s=Math.min(t,r+2*a);return{width:i,height:o,widthMargin:0,heightMargin:(s-r)/2*(o/r),deviceWidth:n,deviceHeight:s}}{const n=t,r=n*l,a=r/i*s,c=Math.min(e,r+2*a);return{width:i,height:o,widthMargin:(c-r)/2*(i/r),heightMargin:0,deviceWidth:c,deviceHeight:n}}}const X={name:"sans-serif",size:12};function A(e,t=[],n={},r="game-coords",a,i){var o;const s=a||document.createElement("canvas");a||document.body.appendChild(s);const c=s.getContext("2d",{alpha:!1});let l=!0;let p,d,u,h,m;function g(t){if(p&&(c.restore(),document.removeEventListener("pointerdown",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",h),!0===t))return;const n=function(e,t,n,r){const a=C(e,t,n,r);return I=a,a}((null==i?void 0:i.width)||window.innerWidth,(null==i?void 0:i.height)||window.innerHeight,r,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;const a=e.props.defaultFont||X,o=function(e,{width:t,height:n,widthMargin:r,heightMargin:a,deviceWidth:i,deviceHeight:o},s,c){e.save();const l=Math.min(i/t,o/n),p=t+2*r,d=n+2*a;return e.translate(i/2,o/2),e.scale(l,l),{scale:l,render:t=>{e.clearRect(-i/2/l,-o/2/l,i/l,o/l),e.fillStyle="white",e.fillRect(-p/2,-d/2,p,d),t.forEach(t=>{var n,r,a;const i=t.props.position||{x:0,y:0};(function(e,t,n,r){switch(e.type){case"text":return()=>t.text(e.props.font||r,e.props.text,e.props.color);case"circle":return()=>t.circle(e.props.radius,e.props.color);case"rectangle":return()=>t.rectangle(e.props.width,e.props.height,e.props.color);case"line":return()=>t.line(e.props.path,e.props.thickness,e.props.color);case"image":return()=>t.image(n[e.props.fileName],e.props.width,e.props.height);case"spriteSheet":return()=>t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}})(t,N(e,{x:i.x,y:-i.y,rotation:i.rotation||0,opacity:null!==(n=t.props.opacity)&&void 0!==n?n:1,scaleX:null!==(r=t.props.scaleX)&&void 0!==r?r:1,scaleY:null!==(a=t.props.scaleY)&&void 0!==a?a:1,anchorX:t.props.anchorX||0,anchorY:t.props.anchorY||0}),s,c)()})}}}(c,n,v,a);m=o.scale,y.ref=o.render;const g=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:r})=>a=>(a.clientX-e)/n-t-r/2)({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:m}),f=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:r})=>a=>-(a.clientY-e)/n+t+r/2)({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:m}),w=(e,t)=>e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2+n.heightMargin;d=e=>{const t=g(e),n=f(e);w(t,n)?l=!1:(l=!0,function(e,t){k.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},u=e=>{const t=g(e),n=f(e);w(t,n)||function(e,t){k.pointer.x=e,k.pointer.y=t}(t,n)},h=e=>{const t=g(e),n=f(e);w(t,n)||function(e,t){k.pointer.justPressed=!1,k.pointer.pressed=!1,k.pointer.justReleased=!0,k.pointer.x=e,k.pointer.y=t}(t,n)},document.addEventListener("pointerdown",d,!1),document.addEventListener("pointermove",u,!1),document.addEventListener("pointerup",h,!1),p=n}document.addEventListener("keydown",e=>{l&&L(e)},!1),document.addEventListener("keyup",e=>{l&&O(e)},!1),window.addEventListener("resize",g,!1);const f={},v={},w={getGetDevice:R(f,C((null==i?void 0:i.width)||window.innerWidth,(null==i?void 0:i.height)||window.innerHeight,r,e.props.size))},y={ref:null};g();const{initTextures:j,getNextFrameTextures:M}=function(e,t,n){const r=t||game.Game(game.gameProps),a=e.getGetDevice(),i=a(r.props.position),o=x(r,a,0),s=n||r.props.size,c=E(i.size,s);return{initTextures:b(o,r.props,a,!0,c,0),getNextFrameTextures(t){const n=e.getGetDevice(),a=E(n(r.props.position).size,s);return b(o,r.props,n,!1,a,t)}}}(w,e);let T=null,S=!1;function P(e){var t;null===(t=y.ref)||void 0===t||t.call(y,e),window.requestAnimationFrame(e=>{S||(null===T&&(T=e-1/60),P(M(e-T)),k={keysDown:k.keysDown,keysJustPressed:{},pointer:{...k.pointer,justPressed:!1,justReleased:!1}})})}return null===(o=y.ref)||void 0===o||o.call(y,t),{cleanup:function(){s.width=s.width,a||document.body.removeChild(s),S=!0,document.removeEventListener("keydown",L,!1),document.removeEventListener("keyup",O,!1),window.removeEventListener("resize",g,!1),g(!0)},loadPromise:(async()=>{const e=[];(n.audioFileNames||[]).forEach(t=>{f[t]=new Audio(t),e.push(new Promise((e,n)=>{f[t].addEventListener("canplaythrough",e),f[t].addEventListener("error",n)})),f[t].load()}),(n.imageFileNames||[]).forEach(t=>{v[t]=new Image,e.push(new Promise((e,n)=>{v[t].addEventListener("load",e),v[t].addEventListener("error",n),v[t].src=t}))}),await Promise.all(e)})().then(()=>{const e=()=>{document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(f).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",e,!1),document.addEventListener("pointerdown",e,!1),P(j)}),audioElements:f}}function R(e,t){const n={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function n(n){let r=e[t];if(!r)throw Error("Cannot find audio file "+t);return n&&r.currentTime>0&&r.currentTime<r.duration&&(r=new Audio(t)),r}return{getPosition:()=>n(!1).currentTime,play:(e,t)=>{const r=n(!0);r.play(),e&&(r.currentTime=e),t&&(r.loop=!0)},pause:()=>{n(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...n,size:I||t,now:()=>new Date};return t=>({...e,inputs:S(t)})}}var G=n(215);function F({Game:e,gameProps:t,showReload:n,assets:i}){const[o,s]=function(){const e=Object(r.useRef)(null),[t,n]=Object(r.useState)(null),a=()=>{n(e.current.getBoundingClientRect())};Object(r.useEffect)(()=>(window.addEventListener("resize",a,!1),()=>window.removeEventListener("resize",a,!1)),[]);const i=Object(r.useCallback)(t=>{null!==t&&(e.current=t,a())},[]);return[t,i]}(),[c,l]=Object(r.useState)(0),p=((null==o?void 0:o.height)||0)*(667/900),d=375*p/667,u=p*(t.size.maxHeightMargin?.175:.25),h=((null==o?void 0:o.height)||900)*(460/900);return Object(r.useEffect)(()=>{if(!d||!p)return;const n=document.getElementById("myCanvas"),{cleanup:r}=A(e(t),[G.b.text({color:"black",text:"Loading..."})],i,"scale-up",n,{width:d,height:p});return()=>{r()}},[d,p,c]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{ref:s,height:"100%",width:h,style:{userSelect:"none"},src:"/img/iPhone8-Portrait-SpaceGray.png"}),n&&a.a.createElement("img",{className:f.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:()=>l(e=>e+1)}),a.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:u},width:d,height:p}))}function B({part:e,MDXContent:t,codesTs:n,codesJs:r,Game:c,gameProps:l,image:p,isEnd:d,assets:u}){const h=n&&r,m=c&&l?a.a.createElement(s.a,{fallback:a.a.createElement("div",null,"Preview")},()=>a.a.createElement(F,{Game:c,gameProps:l,showReload:h,assets:u})):a.a.createElement("div",null,a.a.createElement("img",{src:p}));return a.a.createElement(i.a,{title:"Tutorial - Part "+e,noFooter:!0},a.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},a.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},a.a.createElement(t,null),a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e>1?a.a.createElement(o.a,{to:"/tutorial/"+(e-1)},"Back"):a.a.createElement("div",null),d?a.a.createElement("div",null):a.a.createElement(o.a,{to:"/tutorial/"+(e+1)},"Next"))),h?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},a.a.createElement(v,{codesTs:n,codesJs:r})),a.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):a.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}}}]);