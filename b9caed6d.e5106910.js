(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(9),o=(n(0),n(218)),a={},s={id:"tutorial/1",title:"1",description:"# 1 - Intro",source:"@site/docs/tutorial/1.md",permalink:"/docs/tutorial/1",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/1.md"},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"1---intro"},"1 - Intro"),Object(o.b)("p",null,"Welcome to the Replay tutorial!"),Object(o.b)("p",null,"We're going to explore how to build games with Replay by builing ",Object(o.b)("em",{parentName:"p"},"Replay Bird"),". You can try playing it yourself on the right. By the end of this tutorial, you'll be equipped with all the knowledge you need to go out and make your own games using Replay."),Object(o.b)("p",null,"If you'd like to follow along, you can clone the replay-starter GitHub project in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/edbentley/replay-starter-ts"}),"TypeScript")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/edbentley/replay-starter-js"}),"JavaScript"),". Once complete, we can play it in the browser and on iOS!"),Object(o.b)("p",null,"Alternatively, you can develop online using CodeSandbox in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/edbentley/replay-starter-ts"}),"TypeScript")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/edbentley/replay-starter-js"}),"JavaScript"),"."))}d.isMDXComponent=!0},186:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(219),a=n(254),s=n(145);t.default=function(){return i.a.createElement(o.a,{part:1,MDXContent:s.default,Game:a.a,gameProps:a.b,assets:{imageFileNames:["/img/bird.png"],audioFileNames:["/audio/boop.wav"]}})}},217:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r={text:e=>({type:"text",props:e}),circle:e=>({type:"circle",props:e}),rectangle:e=>({type:"rectangle",props:e}),line:e=>({type:"line",props:e}),image:e=>({type:"image",props:e}),spriteSheet:e=>({type:"spriteSheet",props:e})};function i(e){return t=>({type:"custom",spriteObj:e,props:t})}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var r=n(0),i=n.n(r),o=n(224),a=n(221),s=n(231),c=n(1),l=(n(226),n(227),n(80),n(232),n(225),n(78),n(233),n(79),n(228),n(230)),d=n(229),u=n(223),p=n(222),h=n(220),g=n.n(h),m=n(132),f=n.n(m);function v(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(p.a,{value:"js"},i.a.createElement(y,{lang:"js",codes:n})),i.a.createElement(p.a,{value:"ts"},i.a.createElement(y,{lang:"ts",codes:t})))}function y(e){var t=e.lang,n=e.codes,o=n.map((function(e){return e.file})),a=Object(r.useState)(o[0]),s=a[0],c=a[1],l=n.find((function(e){return e.file===s}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},o.map((function(e){return i.a.createElement("button",{className:f.a.fileButton+(s===e?" "+f.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),i.a.createElement(w,{key:l.file,lang:t,code:l.code,highlight:l.highlight}))}function w(e){var t=e.lang,n=e.code,r=e.highlight,o=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(l.a,Object(c.a)({},l.b,{theme:d.a,code:o,language:t}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return i.a.createElement("div",{className:f.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:g()(t,f.a.codeBlock)},i.a.createElement("div",{className:f.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t}),o=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==o?void 0:o.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(25);function b(e,t,n,r,i,o){const a=S(t.position),s=e.getSprites(t,n,a,r,i,o),c=[],l=s.filter(j).map(t=>{const r={...t,props:{...t.props,position:M(a,t.props.position)}};if("custom"===r.type){c.push(r.props.id);let t=!1;return e.childContainers[r.props.id]||(t=!0,e.childContainers[r.props.id]=x(r,n,e.prevTime)),b(e.childContainers[r.props.id],r.props,n,t,i,o)}return[r]});return Object.keys(e.childContainers).forEach(t=>{c.includes(t)||delete e.childContainers[t]}),l.reduce((e,t)=>e.concat(t),[])}function x(e,t,n){const{spriteObj:r,props:i}=e,o=t(i.position),a=[],s=e=>{a.push(e)};let c;return r.init&&(c=r.init({props:i,device:o,updateState:s})),{state:c,childContainers:{},prevTime:n,currentLag:0,getSprites(e,t,n,i,o,c){const l=c-this.prevTime;this.prevTime=c,this.currentLag+=l;const d=t(n);let u=0;if(this.state=a.reduce((e,t)=>t(e),this.state),a.length=0,!i&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:d,updateState:s}),this.currentLag-=1/60*1e3;u=this.currentLag/(1/60*1e3)}let p=r[o];p||(p="renderPXL"===o&&r.renderXL?r.renderXL:r.render);const h=p({props:e,state:this.state,device:d,updateState:s,extrapolateFactor:u});return this.state=a.reduce((e,t)=>t(e),this.state),a.length=0,h}}}function E(e,t){const n=e.deviceHeight>e.deviceWidth;let r,i=!1;return"portrait"in t?(r=n?t.portrait:t.landscape,i=!0):r=t,r.minHeightXL&&e.deviceHeight>=r.minHeightXL||r.minWidthXL&&e.deviceWidth>=r.minWidthXL?i&&n?"renderPXL":"renderXL":i&&n?"renderP":"render"}function j(e){return null!==e}function S(e){return e?{...e,rotation:e.rotation||0}:{x:0,y:0,rotation:0}}function M(e,t){if(!t)return e;const{x:n,y:r,rotation:i}=S(t),o=Math.PI/180,a=-e.rotation*o;return{x:Math.round(e.x+n*Math.cos(a)-r*Math.sin(a))||0,y:Math.round(e.y+n*Math.sin(a)+r*Math.cos(a))||0,rotation:e.rotation+i}}let O={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function k(e){if(!e)return O;const t=e.x,n=e.y,{x:r,y:i}=O.pointer,o=Math.PI/180,a=-(e.rotation||0)*o;return{...O,pointer:{...O.pointer,x:(r-t)*Math.cos(a)+(i-n)*Math.sin(a),y:-(r-t)*Math.sin(a)+(i-n)*Math.cos(a)}}}function L(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),O.keysDown[e.key]=!0,O.keysJustPressed[e.key]=!0}function T(e){delete O.keysDown[e.key]}const P=Math.PI/180,X=(e,t)=>({circle(n,r){e.save();const i=n*t.anchorX,o=n*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-i,o),e.beginPath(),e.arc(0,0,Math.round(n),0,2*Math.PI),e.globalAlpha=t.opacity,e.fillStyle=r,e.fill(),e.closePath(),e.restore()},rectangle(n,r,i){e.save();const o=n/2*t.anchorX,a=r/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-o,a),e.globalAlpha=t.opacity,e.fillStyle=i,e.fillRect(-n/2,-r/2,n,r),e.closePath(),e.restore()},line(n,r,i){if(n.length<2)return;e.save();const[[o,a],...s]=n,{width:c,height:l}=function(e){if(e.length<2)return{width:0,height:0};let t=Number.MAX_SAFE_INTEGER,n=-Number.MAX_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER,i=-Number.MAX_SAFE_INTEGER;return e.forEach(([e,o])=>{e>n&&(n=e),e<t&&(t=e),o>i&&(i=o),o<r&&(r=o)}),{width:n-t,height:i-r}}(n),d=c/2*t.anchorX,u=l/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-d,u),e.globalAlpha=t.opacity,e.strokeStyle=i,e.lineWidth=r,e.beginPath(),e.moveTo(o,-a),s.forEach(([t,n])=>{e.lineTo(t,-n)}),e.stroke(),e.restore()},text(n,r,i){e.save();const o=`${n.size}px ${n.name}`;e.font=o,e.textBaseline="middle",e.textAlign="center";const{width:a}=e.measureText(r),s=n.size,c=a/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.font=o,e.textBaseline="middle",e.textAlign="center",e.globalAlpha=t.opacity,e.fillStyle=i,e.fillText(r,0,0),e.restore()},image(n,r,i){e.save();const o=r/2*t.anchorX,a=i/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-o,a),e.globalAlpha=t.opacity,e.drawImage(n,-r/2,-i/2,r,i),e.restore()},spriteSheet(n,r,i,o,a,s){e.save();const c=a/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*P),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.globalAlpha=t.opacity;const d=n.width/r,u=n.height/i,p=o%r,h=Math.floor(o/r)%i;e.drawImage(n,p*d,h*u,d,u,-a/2,-s/2,a,s),e.restore()}});let N;function A(e,t,n,r){let i;if("portrait"in r){i=t>e?r.portrait:r.landscape}else i=r;const{width:o,height:a,maxWidthMargin:s=0,maxHeightMargin:c=0}=i;if("game-coords"===n)return{width:o,height:a,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:a};const l=o/a;if(l>e/t){const n=e,r=n/l,i=r/a*c,s=Math.min(t,r+2*i);return{width:o,height:a,widthMargin:0,heightMargin:(s-r)/2*(a/r),deviceWidth:n,deviceHeight:s}}{const n=t,r=n*l,i=r/o*s,c=Math.min(e,r+2*i);return{width:o,height:a,widthMargin:(c-r)/2*(o/r),heightMargin:0,deviceWidth:c,deviceHeight:n}}}const z={name:"sans-serif",size:12};function C(e,t=[],n={},r="game-coords",i,o){var a;const s=i||document.createElement("canvas");i||document.body.appendChild(s);const c=s.getContext("2d",{alpha:!1});let l=!0;let d,u,p,h,g;function m(t){if(d&&(c.restore(),document.removeEventListener("pointerdown",u),document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",h),!0===t))return;const n=function(e,t,n,r){const i=A(e,t,n,r);return N=i,i}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;const i=e.props.defaultFont||z,a=function(e,{width:t,height:n,widthMargin:r,heightMargin:i,deviceWidth:o,deviceHeight:a},s,c){e.save();const l=Math.min(o/t,a/n),d=t+2*r,u=n+2*i;return e.translate(o/2,a/2),e.scale(l,l),{scale:l,render:t=>{e.clearRect(-o/2/l,-a/2/l,o/l,a/l),e.fillStyle="white",e.fillRect(-d/2,-u/2,d,u),t.forEach(t=>{var n,r,i;const o=t.props.position||{x:0,y:0};(function(e,t,n,r){switch(e.type){case"text":return()=>t.text(e.props.font||r,e.props.text,e.props.color);case"circle":return()=>t.circle(e.props.radius,e.props.color);case"rectangle":return()=>t.rectangle(e.props.width,e.props.height,e.props.color);case"line":return()=>t.line(e.props.path,e.props.thickness,e.props.color);case"image":return()=>t.image(n[e.props.fileName],e.props.width,e.props.height);case"spriteSheet":return()=>t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}})(t,X(e,{x:o.x,y:-o.y,rotation:o.rotation||0,opacity:null!==(n=t.props.opacity)&&void 0!==n?n:1,scaleX:null!==(r=t.props.scaleX)&&void 0!==r?r:1,scaleY:null!==(i=t.props.scaleY)&&void 0!==i?i:1,anchorX:t.props.anchorX||0,anchorY:t.props.anchorY||0}),s,c)()})}}}(c,n,v,i);g=a.scale,w.ref=a.render;const m=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:r})=>i=>(i.clientX-e)/n-t-r/2)({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:g}),f=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:r})=>i=>-(i.clientY-e)/n+t+r/2)({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:g}),y=(e,t)=>e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2+n.heightMargin;u=e=>{const t=m(e),n=f(e);y(t,n)?l=!1:(l=!0,function(e,t){O.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},p=e=>{const t=m(e),n=f(e);y(t,n)||function(e,t){O.pointer.x=e,O.pointer.y=t}(t,n)},h=e=>{const t=m(e),n=f(e);y(t,n)||function(e,t){O.pointer.justPressed=!1,O.pointer.pressed=!1,O.pointer.justReleased=!0,O.pointer.x=e,O.pointer.y=t}(t,n)},document.addEventListener("pointerdown",u,!1),document.addEventListener("pointermove",p,!1),document.addEventListener("pointerup",h,!1),d=n}document.addEventListener("keydown",e=>{l&&L(e)},!1),document.addEventListener("keyup",e=>{l&&T(e)},!1),window.addEventListener("resize",m,!1);const f={},v={},y={getGetDevice:I(f,A((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size))},w={ref:null};m();const{initTextures:j,getNextFrameTextures:S}=function(e,t,n){const r=t||game.Game(game.gameProps),i=e.getGetDevice(),o=i(r.props.position),a=x(r,i,0),s=n||r.props.size,c=E(o.size,s);return{initTextures:b(a,r.props,i,!0,c,0),getNextFrameTextures(t){const n=e.getGetDevice(),i=E(n(r.props.position).size,s);return b(a,r.props,n,!1,i,t)}}}(y,e);let M=null,k=!1;function P(e){var t;null===(t=w.ref)||void 0===t||t.call(w,e),window.requestAnimationFrame(e=>{k||(null===M&&(M=e-1/60),P(S(e-M)),O={keysDown:O.keysDown,keysJustPressed:{},pointer:{...O.pointer,justPressed:!1,justReleased:!1}})})}return null===(a=w.ref)||void 0===a||a.call(w,t),{cleanup:function(){s.width=s.width,i||document.body.removeChild(s),k=!0,document.removeEventListener("keydown",L,!1),document.removeEventListener("keyup",T,!1),window.removeEventListener("resize",m,!1),m(!0)},loadPromise:(async()=>{const e=[];(n.audioFileNames||[]).forEach(t=>{f[t]=new Audio(t),e.push(new Promise((e,n)=>{f[t].addEventListener("canplaythrough",e),f[t].addEventListener("error",n)})),f[t].load()}),(n.imageFileNames||[]).forEach(t=>{v[t]=new Image,e.push(new Promise((e,n)=>{v[t].addEventListener("load",e),v[t].addEventListener("error",n),v[t].src=t}))}),await Promise.all(e)})().then(()=>{const e=()=>{document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(f).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",e,!1),document.addEventListener("pointerdown",e,!1),P(j)}),audioElements:f}}function I(e,t){const n={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function n(n){let r=e[t];if(!r)throw Error("Cannot find audio file "+t);return n&&r.currentTime>0&&r.currentTime<r.duration&&(r=new Audio(t)),r}return{getPosition:()=>n(!1).currentTime,play:(e,t)=>{const r=n(!0);r.play(),e&&(r.currentTime=e),t&&(r.loop=!0)},pause:()=>{n(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...n,size:N||t,now:()=>new Date};return t=>({...e,inputs:k(t)})}}var Y=n(217);function R(e){var t=e.Game,n=e.gameProps,o=e.showReload,a=e.assets,s=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],o=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",o,!1),function(){return window.removeEventListener("resize",o,!1)}}),[]);var a=Object(r.useCallback)((function(t){null!==t&&(e.current=t,o())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){o()}}),[]),[n,a]}(),c=s[0],l=s[1],d=Object(r.useState)(0),u=d[0],p=d[1],h=0,g=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(g=c.height*(667/900),h=g*(375/667)):(h=c.width*(375/460),g=h/(375/667));var v=n.size.maxHeightMargin?0:.08*g;m=(c.height-g)/2+v}return Object(r.useEffect)((function(){if(h&&g){var e=document.getElementById("myCanvas"),r=C(t(n),[Y.b.text({color:"black",text:"Loading..."})],a,"scale-up",e,{width:h,height:g}).cleanup;return function(){r()}}}),[h,g,u]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:l,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),o&&i.a.createElement("img",{className:f.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:g}))}function B(e){var t=e.part,n=e.MDXContent,r=e.codesTs,c=e.codesJs,l=e.Game,d=e.gameProps,u=e.image,p=e.isEnd,h=e.assets,g=r&&c,m=l&&d?i.a.createElement(s.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(R,{Game:l,gameProps:d,showReload:g,assets:h})})):i.a.createElement("div",null,i.a.createElement("img",{src:u}));return i.a.createElement(o.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(a.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),p?i.a.createElement("div",null):i.a.createElement(a.a,{to:"/tutorial/"+(t+1)},"Next"))),g?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(v,{codesTs:r,codesJs:c})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},235:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}n.d(t,"a",(function(){return i}))},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g}));n(52),n(225);var r=n(217),i=n(235),o=Object(r.a)({render:function(){return[r.b.image({testId:"bird",fileName:"/img/bird.png",width:50,height:40})]}});function a(e){return"keysDown"in e}var s=Object(r.a)({render:function(e){var t=e.props,n=c(e.device.size,t.pipe.gapY),i=n.yUpperTop,o=n.yUpperBottom,a=n.yLowerTop,s=n.yLowerBottom;return[r.b.rectangle({color:"green",width:40,height:i-o,position:{x:0,y:(i+o)/2}}),r.b.rectangle({color:"green",width:40,height:a-s,position:{x:0,y:(a+s)/2}})]}});function c(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}var l=Object(r.a)({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[d(t)],score:0}},loop:function(e){var t=e.props,n=e.state,r=e.device;if(t.paused)return n;var o=r.inputs,s=n.birdGravity,l=n.birdY,p=n.pipes,h=n.score;return l-=s+=.8,(o.pointer.justPressed||a(o)&&o.keysJustPressed[" "])&&(s=-12),p[p.length-1].x<140&&(p=[].concat(p,[d(r)]).filter((function(e){return e.x>-(r.size.width+r.size.widthMargin+40)}))),function(e,t,n){if(e-20<-(t.height/2+t.heightMargin)||e+20>t.height/2+t.heightMargin)return!0;for(var r,o=function(){var n=r.value;if(n.x>45||n.x<-45)return"continue";var i=c(t,n.gapY),o=i.yUpperTop,a=i.yUpperBottom,s=i.yLowerTop,l=i.yLowerBottom,d={x:n.x,y:(o+a)/2,width:40,height:o-a},p={x:n.x,y:(s+l)/2,width:40,height:s-l};return[{x:25,y:e+20},{x:25,y:e-20},{x:0,y:e+20},{x:0,y:e-20},{x:-25,y:e+20},{x:-25,y:e-20}].some((function(e){return u(e,d)||u(e,p)}))?{v:!0}:void 0},a=Object(i.a)(n);!(r=a()).done;){var s=o();switch(s){case"continue":continue;default:if("object"==typeof s)return s.v}}return!1}(l,r.size,p)&&(r.audio("/audio/boop.wav").play(),t.gameOver(n.score)),{birdGravity:s,birdY:l,pipes:p=p.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0,h++),Object.assign(Object.assign({},e),{},{passed:t,x:e.x-2})})),score:h}},render:function(e){var t=e.state,n=e.device,i=n.size;return[r.b.rectangle({color:"#add8e6",width:i.width+2*i.widthMargin,height:i.height+2*i.heightMargin}),o({id:"bird",position:{x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)}})].concat(t.pipes.map((function(e,t){return s({id:"pipe-"+t,pipe:e,position:{x:e.x,y:0}})})),[r.b.text({text:"Score: "+t.score,color:"white",position:{x:-n.size.width/2+10,y:n.size.height/2+n.size.heightMargin-80},anchorX:-1})])}});function d(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function u(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}var p=Object(r.a)({render:function(e){var t=e.props,n=e.device.inputs;return(n.pointer.justReleased||a(n)&&n.keysJustPressed[" "])&&t.start(),[r.b.text({text:a(n)?"Click or Space Bar to Start":"Tap to Start",color:"white",position:{x:0,y:100}}),r.b.text({text:"High score: "+t.highScore,font:{name:"Courier",size:24},color:"white",position:{x:0,y:150}})]}}),h=Object(r.a)({init:function(e){var t=e.device.storage.getStore();return{view:"menu",attempt:0,highScore:Number(t.highScore||"0")}},render:function(e){var t=e.state,n=e.updateState,r=e.device,i="menu"===t.view;return[l({id:"level-"+t.attempt,paused:i,gameOver:function(e){n((function(t){var n=t.highScore;return e>n&&(n=e,r.storage.setStore({highScore:String(n)})),Object.assign(Object.assign({},t),{},{view:"menu",highScore:n})}))}}),i?p({id:"menu",highScore:t.highScore,start:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"level",attempt:e.attempt+1})}))}}):null]}}),g={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}}}}]);