(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(1),r=n(9),a=(n(0),n(216)),o={},s={id:"tutorial/21",title:"21",description:"# 21 - Gameplay Test",source:"@site/docs/tutorial/21.md",permalink:"/docs/tutorial/21",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/21.md"},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"21---gameplay-test"},"21 - Gameplay Test"),Object(a.b)("p",null,"Let's expand our test to play the game. We're going to check the bird can fly past 2 pipes, then crash into one, ending up with a score of ",Object(a.b)("inlineCode",{parentName:"p"},"2"),"."),Object(a.b)("p",null,"We pass an ",Object(a.b)("inlineCode",{parentName:"p"},"initRandom")," field into ",Object(a.b)("inlineCode",{parentName:"p"},"testGame"),". This ensures ",Object(a.b)("inlineCode",{parentName:"p"},"device.random()")," calls always produce the same result, in this case ",Object(a.b)("inlineCode",{parentName:"p"},"0.5"),", then ",Object(a.b)("inlineCode",{parentName:"p"},"0.5"),", then ",Object(a.b)("inlineCode",{parentName:"p"},"0"),". With this we can ensure our bird knows what height to fly at."),Object(a.b)("p",null,"We create a function ",Object(a.b)("inlineCode",{parentName:"p"},"keepBirdInMiddle")," which is going to keep clicking the screen when the bird's ",Object(a.b)("inlineCode",{parentName:"p"},"y")," position is too low, to keep the bird jumping at the right height."),Object(a.b)("p",null,"We can access the bird Texture through the ",Object(a.b)("inlineCode",{parentName:"p"},'getTexture("bird")')," call in order to read its ",Object(a.b)("inlineCode",{parentName:"p"},"position.y")," value. Here ",Object(a.b)("inlineCode",{parentName:"p"},'"bird"')," is the ",Object(a.b)("inlineCode",{parentName:"p"},"testId")," ",Object(a.b)("inlineCode",{parentName:"p"},"prop")," which we need to pass into the ",Object(a.b)("inlineCode",{parentName:"p"},"t.image")," Texture in our ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite. The ",Object(a.b)("inlineCode",{parentName:"p"},"testId")," prop can be passed into any Texture to reference it in a test."),Object(a.b)("p",null,"We loop through the game's frames with ",Object(a.b)("inlineCode",{parentName:"p"},"jumpToFrame"),", which will keep running until a condition returns either a Texture or ",Object(a.b)("inlineCode",{parentName:"p"},"true"),". When that exits (bird hit a pipe!) we confirm the score shows as expected."),Object(a.b)("p",null,"Lastly we can even confirm the sound effect played as expected after we crashed."))}p.isMDXComponent=!0},207:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(217),o=n(135);t.default=function(){return r.a.createElement(a.a,{part:21,MDXContent:o.default,codesTs:[{file:"__tests__/game.test.ts",code:'import { testGame } from "@replay/test";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Game, gameProps } from "..";\nimport { pipeGap } from "../pipe";\nimport { birdHeight } from "../bird";\n\ntest("Can reach a score of 2", () => {\n  const initInputs: WebInputs | iOSInputs = {\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  };\n  const mainMenuText = "Start";\n\n  const {\n    nextFrame,\n    updateInputs,\n    getByText,\n    getTexture,\n    jumpToFrame,\n    audio,\n  } = testGame(Game(gameProps), {\n    initInputs,\n    // First two pipes will have gap in middle, third pipe lower down\n    initRandom: [0.5, 0.5, 0],\n  });\n\n  expect(getByText(mainMenuText)).toBeDefined();\n\n  updateInputs({\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: true,\n      // Note that the pointer position has the same coordinates in all Sprites\n      x: 0,\n      y: 0,\n    },\n  });\n  nextFrame();\n\n  updateInputs(initInputs);\n  nextFrame();\n\n  // Main menu gone, game has started\n  expect(() => getByText(mainMenuText)).toThrowError();\n\n  // Keeps the bird hovering in the middle to pass the first 2 pipes\n  function keepBirdInMiddle() {\n    if (getTexture("bird").props.position.y < -pipeGap / 2 + birdHeight + 20) {\n      updateInputs({\n        pointer: {\n          pressed: true,\n          justPressed: true,\n          justReleased: false,\n          x: 0,\n          y: 0,\n        },\n      });\n      nextFrame();\n\n      updateInputs(initInputs);\n      nextFrame();\n    }\n\n    nextFrame();\n  }\n\n  jumpToFrame(() => {\n    keepBirdInMiddle();\n\n    // Exit when main menu appears again\n    return getByText(mainMenuText)[0];\n  });\n\n  getByText("Score: 2");\n  getByText("High score: 2");\n\n  expect(audio.play).toBeCalledWith("boop.wav");\n  expect(audio.play).toBeCalledTimes(1);\n});\n',highlight:[5,6,8,"24-26",29,30,"53-85"]},{file:"bird.ts",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.image({\n        testId: "bird",\n        fileName: "/img/bird.png",\n        width: birdWidth,\n        height: birdHeight,\n      }),\n    ];\n  },\n});\n',highlight:[10]}],codesJs:[{file:"__tests__/game.test.js",code:'import { testGame } from "@replay/test";\nimport { Game, gameProps } from "..";\nimport { pipeGap } from "../pipe";\nimport { birdHeight } from "../bird";\n\ntest("Can reach a score of 2", () => {\n  const initInputs = {\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: false,\n      x: 0,\n      y: 0,\n    },\n  };\n  const mainMenuText = "Start";\n\n  const {\n    nextFrame,\n    updateInputs,\n    getByText,\n    getTexture,\n    jumpToFrame,\n    audio,\n  } = testGame(Game(gameProps), {\n    initInputs,\n    // First two pipes will have gap in middle, third pipe lower down\n    initRandom: [0.5, 0.5, 0],\n  });\n\n  expect(getByText(mainMenuText)).toBeDefined();\n\n  updateInputs({\n    pointer: {\n      pressed: false,\n      justPressed: false,\n      justReleased: true,\n      // Note that the pointer position has the same coordinates in all Sprites\n      x: 0,\n      y: 0,\n    },\n  });\n  nextFrame();\n\n  updateInputs(initInputs);\n  nextFrame();\n\n  // Main menu gone, game has started\n  expect(() => getByText(mainMenuText)).toThrowError();\n\n  // Keeps the bird hovering in the middle to pass the first 2 pipes\n  function keepBirdInMiddle() {\n    if (getTexture("bird").props.position.y < -pipeGap / 2 + birdHeight + 20) {\n      updateInputs({\n        pointer: {\n          pressed: true,\n          justPressed: true,\n          justReleased: false,\n          x: 0,\n          y: 0,\n        },\n      });\n      nextFrame();\n\n      updateInputs(initInputs);\n      nextFrame();\n    }\n\n    nextFrame();\n  }\n\n  jumpToFrame(() => {\n    keepBirdInMiddle();\n\n    // Exit when main menu appears again\n    return getByText(mainMenuText)[0];\n  });\n\n  getByText("Score: 2");\n  getByText("High score: 2");\n\n  expect(audio.play).toBeCalledWith("boop.wav");\n  expect(audio.play).toBeCalledTimes(1);\n});\n',highlight:[3,4,6,"22-24",27,28,"51-83"]},{file:"bird.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.image({\n        testId: "bird",\n        fileName: "/img/bird.png",\n        width: birdWidth,\n        height: birdHeight,\n      }),\n    ];\n  },\n});\n',highlight:[10]}],image:"/img/test21.gif"})}},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));const i={text:e=>({type:"text",props:e}),circle:e=>({type:"circle",props:e}),rectangle:e=>({type:"rectangle",props:e}),line:e=>({type:"line",props:e}),image:e=>({type:"image",props:e}),spriteSheet:e=>({type:"spriteSheet",props:e})};function r(e){return t=>({type:"custom",spriteObj:e,props:t})}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return G}));var i=n(0),r=n.n(i),a=n(222),o=n(219),s=n(229),c=n(1),l=(n(224),n(225),n(80),n(230),n(223),n(78),n(231),n(79),n(226),n(228)),p=n(227),d=n(221),u=n(220),h=n(218),m=n.n(h),g=n(132),f=n.n(g);function y(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(d.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(u.a,{value:"js"},r.a.createElement(b,{lang:"js",codes:n})),r.a.createElement(u.a,{value:"ts"},r.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],c=o[1],l=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:f.a.fileButton+(s===e?" "+f.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),r.a.createElement(v,{key:l.file,lang:t,code:l.code,highlight:l.highlight}))}function v(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(l.a,Object(c.a)({},l.b,{theme:p.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:f.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:m()(t,f.a.codeBlock)},r.a.createElement("div",{className:f.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(25);function w(e,t,n,i,r,a){const o=T(t.position),s=e.getSprites(t,n,o,i,r,a),c=[],l=s.filter(j).map(t=>{const i={...t,props:{...t.props,position:M(o,t.props.position)}};if("custom"===i.type){c.push(i.props.id);let t=!1;return e.childContainers[i.props.id]||(t=!0,e.childContainers[i.props.id]=x(i,n,e.prevTime)),w(e.childContainers[i.props.id],i.props,n,t,r,a)}return[i]});return Object.keys(e.childContainers).forEach(t=>{c.includes(t)||delete e.childContainers[t]}),l.reduce((e,t)=>e.concat(t),[])}function x(e,t,n){const{spriteObj:i,props:r}=e,a=t(r.position),o=[],s=e=>{o.push(e)};let c;return i.init&&(c=i.init({props:r,device:a,updateState:s})),{state:c,childContainers:{},prevTime:n,currentLag:0,getSprites(e,t,n,r,a,c){const l=c-this.prevTime;this.prevTime=c,this.currentLag+=l;const p=t(n);let d=0;if(this.state=o.reduce((e,t)=>t(e),this.state),o.length=0,!r&&i.loop){for(;this.currentLag>=1/60*1e3;)this.state=i.loop({props:e,state:this.state,device:p,updateState:s}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}let u=i[a];u||(u="renderPXL"===a&&i.renderXL?i.renderXL:i.render);const h=u({props:e,state:this.state,device:p,updateState:s,extrapolateFactor:d});return this.state=o.reduce((e,t)=>t(e),this.state),o.length=0,h}}}function E(e,t){const n=e.deviceHeight>e.deviceWidth;let i,r=!1;return"portrait"in t?(i=n?t.portrait:t.landscape,r=!0):i=t,i.minHeightXL&&e.deviceHeight>=i.minHeightXL||i.minWidthXL&&e.deviceWidth>=i.minWidthXL?r&&n?"renderPXL":"renderXL":r&&n?"renderP":"render"}function j(e){return null!==e}function T(e){return e?{...e,rotation:e.rotation||0}:{x:0,y:0,rotation:0}}function M(e,t){if(!t)return e;const{x:n,y:i,rotation:r}=T(t),a=Math.PI/180,o=-e.rotation*a;return{x:Math.round(e.x+n*Math.cos(o)-i*Math.sin(o))||0,y:Math.round(e.y+n*Math.sin(o)+i*Math.cos(o))||0,rotation:e.rotation+r}}let k={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function O(e){if(!e)return k;const t=e.x,n=e.y,{x:i,y:r}=k.pointer,a=Math.PI/180,o=-(e.rotation||0)*a;return{...k,pointer:{...k.pointer,x:(i-t)*Math.cos(o)+(r-n)*Math.sin(o),y:-(i-t)*Math.sin(o)+(r-n)*Math.cos(o)}}}function S(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),k.keysDown[e.key]=!0,k.keysJustPressed[e.key]=!0}function C(e){delete k.keysDown[e.key]}const I=Math.PI/180,N=(e,t)=>({circle(n,i){e.save();const r=n*t.anchorX,a=n*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*I),e.scale(t.scaleX,t.scaleY),e.translate(-r,a),e.beginPath(),e.arc(0,0,Math.round(n),0,2*Math.PI),e.globalAlpha=t.opacity,e.fillStyle=i,e.fill(),e.closePath(),e.restore()},rectangle(n,i,r){e.save();const a=n/2*t.anchorX,o=i/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*I),e.scale(t.scaleX,t.scaleY),e.translate(-a,o),e.globalAlpha=t.opacity,e.fillStyle=r,e.fillRect(-n/2,-i/2,n,i),e.closePath(),e.restore()},line(n,i,r){if(n.length<2)return;e.save();const[[a,o],...s]=n,{width:c,height:l}=function(e){if(e.length<2)return{width:0,height:0};let t=Number.MAX_SAFE_INTEGER,n=-Number.MAX_SAFE_INTEGER,i=Number.MAX_SAFE_INTEGER,r=-Number.MAX_SAFE_INTEGER;return e.forEach(([e,a])=>{e>n&&(n=e),e<t&&(t=e),a>r&&(r=a),a<i&&(i=a)}),{width:n-t,height:r-i}}(n),p=c/2*t.anchorX,d=l/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*I),e.scale(t.scaleX,t.scaleY),e.translate(-p,d),e.globalAlpha=t.opacity,e.strokeStyle=r,e.lineWidth=i,e.beginPath(),e.moveTo(a,-o),s.forEach(([t,n])=>{e.lineTo(t,-n)}),e.stroke(),e.restore()},text(n,i,r){e.save();const a=`${n.size}px ${n.name}`;e.font=a,e.textBaseline="middle",e.textAlign="center";const{width:o}=e.measureText(i),s=n.size,c=o/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*I),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.font=a,e.textBaseline="middle",e.textAlign="center",e.globalAlpha=t.opacity,e.fillStyle=r,e.fillText(i,0,0),e.restore()},image(n,i,r){e.save();const a=i/2*t.anchorX,o=r/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*I),e.scale(t.scaleX,t.scaleY),e.translate(-a,o),e.globalAlpha=t.opacity,e.drawImage(n,-i/2,-r/2,i,r),e.restore()},spriteSheet(n,i,r,a,o,s){e.save();const c=o/2*t.anchorX,l=s/2*t.anchorY;e.translate(t.x,t.y),e.rotate(t.rotation*I),e.scale(t.scaleX,t.scaleY),e.translate(-c,l),e.globalAlpha=t.opacity;const p=n.width/i,d=n.height/r,u=a%i,h=Math.floor(a/i)%r;e.drawImage(n,u*p,h*d,p,d,-o/2,-s/2,o,s),e.restore()}});let L;function P(e,t,n,i){let r;if("portrait"in i){r=t>e?i.portrait:i.landscape}else r=i;const{width:a,height:o,maxWidthMargin:s=0,maxHeightMargin:c=0}=r;if("game-coords"===n)return{width:a,height:o,widthMargin:0,heightMargin:0,deviceWidth:a,deviceHeight:o};const l=a/o;if(l>e/t){const n=e,i=n/l,r=i/o*c,s=Math.min(t,i+2*r);return{width:a,height:o,widthMargin:0,heightMargin:(s-i)/2*(o/i),deviceWidth:n,deviceHeight:s}}{const n=t,i=n*l,r=i/a*s,c=Math.min(e,i+2*r);return{width:a,height:o,widthMargin:(c-i)/2*(a/i),heightMargin:0,deviceWidth:c,deviceHeight:n}}}const B={name:"sans-serif",size:12};function X(e,t=[],n={},i="game-coords",r,a){var o;const s=r||document.createElement("canvas");r||document.body.appendChild(s);const c=s.getContext("2d",{alpha:!1});let l=!0;let p,d,u,h,m;function g(t){if(p&&(c.restore(),document.removeEventListener("pointerdown",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",h),!0===t))return;const n=function(e,t,n,i){const r=P(e,t,n,i);return L=r,r}((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,i,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;const r=e.props.defaultFont||B,o=function(e,{width:t,height:n,widthMargin:i,heightMargin:r,deviceWidth:a,deviceHeight:o},s,c){e.save();const l=Math.min(a/t,o/n),p=t+2*i,d=n+2*r;return e.translate(a/2,o/2),e.scale(l,l),{scale:l,render:t=>{e.clearRect(-a/2/l,-o/2/l,a/l,o/l),e.fillStyle="white",e.fillRect(-p/2,-d/2,p,d),t.forEach(t=>{var n,i,r;const a=t.props.position||{x:0,y:0};(function(e,t,n,i){switch(e.type){case"text":return()=>t.text(e.props.font||i,e.props.text,e.props.color);case"circle":return()=>t.circle(e.props.radius,e.props.color);case"rectangle":return()=>t.rectangle(e.props.width,e.props.height,e.props.color);case"line":return()=>t.line(e.props.path,e.props.thickness,e.props.color);case"image":return()=>t.image(n[e.props.fileName],e.props.width,e.props.height);case"spriteSheet":return()=>t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}})(t,N(e,{x:a.x,y:-a.y,rotation:a.rotation||0,opacity:null!==(n=t.props.opacity)&&void 0!==n?n:1,scaleX:null!==(i=t.props.scaleX)&&void 0!==i?i:1,scaleY:null!==(r=t.props.scaleY)&&void 0!==r?r:1,anchorX:t.props.anchorX||0,anchorY:t.props.anchorY||0}),s,c)()})}}}(c,n,y,r);m=o.scale,v.ref=o.render;const g=(({canvasOffsetLeft:e,widthMargin:t,scale:n,width:i})=>r=>(r.clientX-e)/n-t-i/2)({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:m}),f=(({canvasOffsetTop:e,heightMargin:t,scale:n,height:i})=>r=>-(r.clientY-e)/n+t+i/2)({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:m}),b=(e,t)=>e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2+n.heightMargin;d=e=>{const t=g(e),n=f(e);b(t,n)?l=!1:(l=!0,function(e,t){k.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},u=e=>{const t=g(e),n=f(e);b(t,n)||function(e,t){k.pointer.x=e,k.pointer.y=t}(t,n)},h=e=>{const t=g(e),n=f(e);b(t,n)||function(e,t){k.pointer.justPressed=!1,k.pointer.pressed=!1,k.pointer.justReleased=!0,k.pointer.x=e,k.pointer.y=t}(t,n)},document.addEventListener("pointerdown",d,!1),document.addEventListener("pointermove",u,!1),document.addEventListener("pointerup",h,!1),p=n}document.addEventListener("keydown",e=>{l&&S(e)},!1),document.addEventListener("keyup",e=>{l&&C(e)},!1),window.addEventListener("resize",g,!1);const f={},y={},b={getGetDevice:F(f,P((null==a?void 0:a.width)||window.innerWidth,(null==a?void 0:a.height)||window.innerHeight,i,e.props.size))},v={ref:null};g();const{initTextures:j,getNextFrameTextures:T}=function(e,t,n){const i=t||game.Game(game.gameProps),r=e.getGetDevice(),a=r(i.props.position),o=x(i,r,0),s=n||i.props.size,c=E(a.size,s);return{initTextures:w(o,i.props,r,!0,c,0),getNextFrameTextures(t){const n=e.getGetDevice(),r=E(n(i.props.position).size,s);return w(o,i.props,n,!1,r,t)}}}(b,e);let M=null,O=!1;function I(e){var t;null===(t=v.ref)||void 0===t||t.call(v,e),window.requestAnimationFrame(e=>{O||(null===M&&(M=e-1/60),I(T(e-M)),k={keysDown:k.keysDown,keysJustPressed:{},pointer:{...k.pointer,justPressed:!1,justReleased:!1}})})}return null===(o=v.ref)||void 0===o||o.call(v,t),{cleanup:function(){s.width=s.width,r||document.body.removeChild(s),O=!0,document.removeEventListener("keydown",S,!1),document.removeEventListener("keyup",C,!1),window.removeEventListener("resize",g,!1),g(!0)},loadPromise:(async()=>{const e=[];(n.audioFileNames||[]).forEach(t=>{f[t]=new Audio(t),e.push(new Promise((e,n)=>{f[t].addEventListener("canplaythrough",e),f[t].addEventListener("error",n)})),f[t].load()}),(n.imageFileNames||[]).forEach(t=>{y[t]=new Image,e.push(new Promise((e,n)=>{y[t].addEventListener("load",e),y[t].addEventListener("error",n),y[t].src=t}))}),await Promise.all(e)})().then(()=>{const e=()=>{document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(f).forEach(e=>{e.muted=!0,e.play().then(()=>{e.pause(),e.muted=!1})})};document.addEventListener("keydown",e,!1),document.addEventListener("pointerdown",e,!1),I(j)}),audioElements:f}}function F(e,t){const n={log:console.log,random:Math.random,timeout:(e,t)=>setTimeout(e,t),audio:t=>{function n(n){let i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&i.currentTime>0&&i.currentTime<i.duration&&(i=new Audio(t)),i}return{getPosition:()=>n(!1).currentTime,play:(e,t)=>{const i=n(!0);i.play(),e&&(i.currentTime=e),t&&(i.loop=!0)},pause:()=>{n(!1).pause()}}},network:{get:(e,t)=>{fetch(e).then(e=>e.json()).then(t)},post:(e,t,n)=>{fetch(e,{method:"POST",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},put:(e,t,n)=>{fetch(e,{method:"PUT",body:JSON.stringify(t)}).then(e=>e.json()).then(n)},delete:(e,t)=>{fetch(e,{method:"DELETE"}).then(e=>e.json()).then(t)}},storage:{getStore:()=>{var e;const t={};for(let n=0;n<localStorage.length;n++){const i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:e=>{Object.entries(e).forEach(([e,t])=>{void 0===t?localStorage.removeItem(e):localStorage.setItem(e,t)})}}};return()=>{const e={...n,size:L||t,now:()=>new Date};return t=>({...e,inputs:O(t)})}}var W=n(215);function R({Game:e,gameProps:t,showReload:n,assets:a}){const[o,s]=function(){const e=Object(i.useRef)(null),[t,n]=Object(i.useState)(null),r=()=>{n(e.current.getBoundingClientRect())};Object(i.useEffect)(()=>(window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)),[]);const a=Object(i.useCallback)(t=>{null!==t&&(e.current=t,r())},[]);return[t,a]}(),[c,l]=Object(i.useState)(0),p=((null==o?void 0:o.height)||0)*(667/900),d=375*p/667,u=p*(t.size.maxHeightMargin?.175:.25),h=((null==o?void 0:o.height)||900)*(460/900);return Object(i.useEffect)(()=>{if(!d||!p)return;const n=document.getElementById("myCanvas"),{cleanup:i}=X(e(t),[W.b.text({color:"black",text:"Loading..."})],a,"scale-up",n,{width:d,height:p});return()=>{i()}},[d,p,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{ref:s,height:"100%",width:h,style:{userSelect:"none"},src:"/img/iPhone8-Portrait-SpaceGray.png"}),n&&r.a.createElement("img",{className:f.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:()=>l(e=>e+1)}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:u},width:d,height:p}))}function G({part:e,MDXContent:t,codesTs:n,codesJs:i,Game:c,gameProps:l,image:p,isEnd:d,assets:u}){const h=n&&i,m=c&&l?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},()=>r.a.createElement(R,{Game:c,gameProps:l,showReload:h,assets:u})):r.a.createElement("div",null,r.a.createElement("img",{src:p}));return r.a.createElement(a.a,{title:"Tutorial - Part "+e,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(t,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e>1?r.a.createElement(o.a,{to:"/tutorial/"+(e-1)},"Back"):r.a.createElement("div",null),d?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(e+1)},"Next"))),h?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(y,{codesTs:n,codesJs:i})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}}}]);