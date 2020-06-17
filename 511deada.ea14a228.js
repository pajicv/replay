(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),o=(n(0),n(218)),a={},s={id:"tutorial/14",title:"14",description:"# 14 - Pipes",source:"@site/docs/tutorial/14.md",permalink:"/docs/tutorial/14",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/14.md"},p=[],c={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"14---pipes"},"14 - Pipes"),Object(o.b)("p",null,"There's not much challenge to the game now, so let's add some green pipes that move across the screen for the bird to dodge."),Object(o.b)("p",null,"As you might have guessed by now, we'll add a ",Object(o.b)("inlineCode",{parentName:"p"},"Pipe")," Sprite for that. Each pipe is 2 rectangles with a gap in the middle. We need to do some math to calculate the ",Object(o.b)("inlineCode",{parentName:"p"},"y")," coordinate of each rectangle - remembering the ",Object(o.b)("inlineCode",{parentName:"p"},"y")," coordinate is the center of the rectangle."),Object(o.b)("p",null,"Next we need to add our pipes in the ",Object(o.b)("inlineCode",{parentName:"p"},"Level")," Sprite's state, defining it in the ",Object(o.b)("inlineCode",{parentName:"p"},"init")," method. Then in the ",Object(o.b)("inlineCode",{parentName:"p"},"loop")," method we update the state to move the pipe. Lastly in ",Object(o.b)("inlineCode",{parentName:"p"},"render")," we map the ",Object(o.b)("inlineCode",{parentName:"p"},"pipe")," state to the ",Object(o.b)("inlineCode",{parentName:"p"},"Pipe")," Sprite."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"newPipe")," function sets a random ",Object(o.b)("inlineCode",{parentName:"p"},"y")," coordinate for the pipe gap, which our bird has to jump through. The ",Object(o.b)("inlineCode",{parentName:"p"},"device")," parameter has a ",Object(o.b)("inlineCode",{parentName:"p"},"random")," field, which works like ",Object(o.b)("inlineCode",{parentName:"p"},"Math.random"),". It's important to use Replay's ",Object(o.b)("inlineCode",{parentName:"p"},"random")," function to ensure the game works cross-platform."))}d.isMDXComponent=!0},193:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(222),a=(n(52),n(217)),s=Object(a.a)({render:function(){return[a.b.rectangle({width:50,height:40,color:"yellow"})]}});function p(e){return"keysDown"in e}var c=Object(a.a)({render:function(e){var t=e.props,n=function(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}(e.device.size,t.pipe.gapY),i=n.yUpperTop,r=n.yUpperBottom,o=n.yLowerTop,s=n.yLowerBottom;return[a.b.rectangle({color:"green",width:40,height:i-r,y:(i+r)/2}),a.b.rectangle({color:"green",width:40,height:o-s,y:(o+s)/2})]}});var d=Object(a.a)({init:function(e){return{birdY:10,birdGravity:-12,pipes:[u(e.device)]}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,o=n.birdGravity,a=n.birdY,s=n.pipes;return a-=o+=.8,(r.pointer.justPressed||p(r)&&r.keysJustPressed[" "])&&(o=-12),s[s.length-1].x<140&&(s=[].concat(s,[u(i)]).filter((function(e){return e.x>-(i.size.width+i.size.widthMargin+40)}))),{birdGravity:o,birdY:a,pipes:s=s.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0),Object.assign(Object.assign({},e),{},{passed:t,x:e.x-2})}))}},render:function(e){var t=e.state,n=e.device.size;return[a.b.rectangle({color:"#add8e6",width:n.width+2*n.widthMargin,height:n.height+2*n.heightMargin}),s({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return c({id:"pipe-"+t,pipe:e,x:e.x})})))}});function u(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}var l=Object(a.a)({render:function(e){var t=e.props,n=e.device.inputs;return(n.pointer.justReleased||p(n)&&n.keysJustPressed[" "])&&t.start(),[a.b.text({text:p(n)?"Click or Space Bar to Start":"Tap to Start",color:"white",y:100})]}}),h=Object(a.a)({init:function(){return{view:"menu"}},render:function(e){var t=e.state,n=e.updateState,i="menu"===t.view;return[d({id:"level",paused:i}),i?l({id:"menu",start:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"level"})}))}}):null]}}),g={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},m=n(142);t.default=function(){return r.a.createElement(o.a,{part:14,MDXContent:m.default,codesTs:[{file:"pipe.ts",code:'import { makeSprite, t, DeviceSize } from "@replay/core";\n\nexport type PipeT = {\n  x: number;\n  gapY: number;\n  passed: boolean;\n};\n\nexport const pipeWidth = 40;\nexport const pipeGap = 170;\n\ntype PipeProps = {\n  pipe: PipeT;\n};\n\nexport const Pipe = makeSprite<PipeProps>({\n  render({ props, device }) {\n    const { size } = device;\n    const { pipe } = props;\n\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n\n    return [\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yUpperTop - yUpperBottom,\n        y: (yUpperTop + yUpperBottom) / 2,\n      }),\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yLowerTop - yLowerBottom,\n        y: (yLowerTop + yLowerBottom) / 2,\n      }),\n    ];\n  },\n});\n\nexport function getPipeYPositions(size: DeviceSize, gapY: number) {\n  return {\n    yUpperTop: size.height / 2 + size.heightMargin,\n    yUpperBottom: gapY + pipeGap / 2,\n    yLowerTop: gapY - pipeGap / 2,\n    yLowerBottom: -size.height / 2 - size.heightMargin,\n  };\n}\n'},{file:"level.ts",code:'import { makeSprite, t, Device } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird, birdWidth } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, PipeT, pipeWidth, pipeGap } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n  pipes: PipeT[];\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init({ device }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device: Device<{}>): PipeT {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n',highlight:[1,4,6,8,18,22,26,37,"49-67",72,"90-96","101-110"]}],codesJs:[{file:"pipe.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const pipeWidth = 40;\nexport const pipeGap = 170;\n\nexport const Pipe = makeSprite({\n  render({ props, device }) {\n    const { size } = device;\n    const { pipe } = props;\n\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n\n    return [\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yUpperTop - yUpperBottom,\n        y: (yUpperTop + yUpperBottom) / 2,\n      }),\n      t.rectangle({\n        color: "green",\n        width: pipeWidth,\n        height: yLowerTop - yLowerBottom,\n        y: (yLowerTop + yLowerBottom) / 2,\n      }),\n    ];\n  },\n});\n\nexport function getPipeYPositions(size, gapY) {\n  return {\n    yUpperTop: size.height / 2 + size.heightMargin,\n    yUpperBottom: gapY + pipeGap / 2,\n    yLowerTop: gapY - pipeGap / 2,\n    yLowerBottom: -size.height / 2 - size.heightMargin,\n  };\n}\n'},{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird, birdWidth } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, pipeWidth, pipeGap } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init({ device }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: [newPipe(device)],\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n    ];\n  },\n});\n\nfunction newPipe(device) {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n',highlight:[2,4,6,10,14,25,"37-55",60,"78-84","89-98"]}],Game:h,gameProps:g})}},217:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n(52);var i=n(219),r={text:function(e){return{type:"text",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function o(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},219:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0}}n.d(t,"a",(function(){return i}))},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var i=n(0),r=n.n(i),o=n(227),a=n(224),s=n(233),p=n(1),c=(n(220),n(221),n(78),n(234),n(228),n(79),n(235),n(80),n(229),n(232)),d=n(230),u=n(226),l=n(225),h=n(223),g=n.n(h),m=n(132),f=n.n(m);function v(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(l.a,{value:"js"},r.a.createElement(b,{lang:"js",codes:n})),r.a.createElement(l.a,{value:"ts"},r.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,o=n.map((function(e){return e.file})),a=Object(i.useState)(o[0]),s=a[0],p=a[1],c=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},o.map((function(e){return r.a.createElement("button",{className:f.a.fileButton+(s===e?" "+f.a.fileButtonSelected:""),key:e,onClick:function(){return p(e)}},e)}))),r.a.createElement(y,{key:c.file,lang:t,code:c.code,highlight:c.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,o=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(c.a,Object(p.a)({},c.b,{theme:d.a,code:o,language:t}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:f.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:g()(t,f.a.codeBlock)},r.a.createElement("div",{className:f.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t}),o=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==o?void 0:o.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(52),n(236),n(81);var w=n(237),x=n.n(w),j=(n(25),n(20),n(54),n(21),n(238),n(239)),E=(n(53),n(219));function O(e,t,n,i,r,o,a,s){var p=Object(E.a)(t);p.opacity*=s;var c=function(e){var t=i(e);return function(e){var t=e.x,n=e.y,i=Math.PI/180,r=-(e.rotation||0)*i;return function(i){var o=i.x,a=i.y,s=(o-t)*Math.cos(r)+(a-n)*Math.sin(r),p=-(o-t)*Math.sin(r)+(a-n)*Math.cos(r),c=e.x+(s-e.x)/e.scaleX,d=e.y+(p-e.y)/e.scaleY;return{x:c+e.anchorX,y:d+e.anchorY}}}(p)(t)},d=n(c),u=e.getSprites(t,d,r,o,a),l=[],h=u.filter(M).map((function(t){if("custom"===t.type){l.push(t.props.id);var i=!1;return e.childContainers[t.props.id]||(i=!0,e.childContainers[t.props.id]=P(t,d,e.prevTime)),O(e.childContainers[t.props.id],t.props,n,c,i,o,a,p.opacity)}return t}));return Object.keys(e.childContainers).forEach((function(t){l.includes(t)||delete e.childContainers[t]})),{id:t.id,baseProps:p,textures:h}}function P(e,t,n){var i,r=e.spriteObj,o=e.props,a=[],s=function(e){a.push(e)};return r.init&&(i=r.init({props:o,device:t,updateState:s})),{state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,o){var p=this,c=o-this.prevTime;this.prevTime=o,this.currentLag+=c;var d=0,u=function(){p.state=a.reduce((function(e,t){return t(e)}),p.state),a.length=0};if(u(),!n&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:t,updateState:s}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}u();var l=r[i];l||(l="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var h=l({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:d});return u(),h}}}function L(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function M(e){return null!==e}var k={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function z(e){return function(e,t){var n=e(t.pointer);return Object.assign(Object.assign({},t),{},{pointer:Object.assign(Object.assign({},t.pointer),{},{x:n.x,y:n.y})})}(e,k)}function T(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),k.keysDown[e.key]=!0,k.keysJustPressed[e.key]=!0}function S(e){delete k.keysDown[e.key]}function Y(){k.pointer.justPressed=!1,k.pointer.pressed=!1}n(231),n(240);function C(e,t,n,i){var r=t.width,o=t.height,a=t.widthMargin,s=t.heightMargin,p=t.deviceWidth,c=t.deviceHeight;e.save();var d=Math.min(p/r,c/o),u=r+2*a,l=o+2*s;return e.translate(p/2,c/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-p/2/d,-c/2/d,p/d,c/d),e.fillStyle="white",e.fillRect(-u/2,-l/2,u,l),function e(t,n,i,r){var o=t.baseProps,a=t.textures;n.save(),W(n,o),a.forEach((function(t){if("type"in t){var a=B(n);return n.save(),W(n,t.props,o.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,a,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var G,N=Math.PI/180,W=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,o=t.rotation,a=t.scaleX,s=t.scaleY,p=t.anchorX,c=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(o*N),e.scale(a,s),e.translate(-p,c),e.globalAlpha=d*n},B=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],o=r[0],a=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(o,-a),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var o=t.size+"px "+t.name;e.font=o,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,o,a){var s=t.width/n,p=t.height/i,c=r%n,d=Math.floor(r/n)%i;e.drawImage(t,c*s,d*p,s,p,-o/2,-a/2,o,a)}}};function I(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var o=r,a=o.width,s=o.height,p=o.maxWidthMargin,c=void 0===p?0:p,d=o.maxHeightMargin;if("game-coords"===n)return{width:a,height:s,widthMargin:0,heightMargin:0,deviceWidth:a,deviceHeight:s};var u=a/s;if(u>e/t){var l=e,h=l/u,g=h/s*(void 0===d?0:d),m=Math.min(t,h+2*g);return{width:a,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:l,deviceHeight:m}}var f=t,v=f*u,b=v/a*c,y=Math.min(e,v+2*b);return{width:a,height:s,widthMargin:(y-v)/2*(a/v),heightMargin:0,deviceWidth:y,deviceHeight:f}}var X={name:"sans-serif",size:12};function U(e,t,n,i,r,o){var a;void 0===t&&(t=[]),void 0===n&&(n={}),void 0===i&&(i="game-coords");var s=r||document.createElement("canvas");r||document.body.appendChild(s);var p,c,d,u,l,h=s.getContext("2d",{alpha:!1}),g=!0;function m(t){if(!p||(h.restore(),document.removeEventListener("pointerdown",c),document.removeEventListener("pointermove",d),document.removeEventListener("pointerup",u),document.removeEventListener("pointerout",Y),!0!==t)){var n=function(e,t,n,i){var r=I(e,t,n,i);return G=r,r}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;var r=e.props.defaultFont||X,a=C(h,n,v,r);l=a.scale,y.ref=a.render;var m=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:l}),f=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:l}),b=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2+n.heightMargin};c=function(e){var t=m(e),n=f(e);b(t,n)?g=!1:(g=!0,function(e,t){k.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},d=function(e){var t=m(e),n=f(e);b(t,n)||function(e,t){k.pointer.x=e,k.pointer.y=t}(t,n)},u=function(e){var t=m(e),n=f(e);b(t,n)?Y():function(e,t){k.pointer.justPressed=!1,k.pointer.pressed=!1,k.pointer.justReleased=!0,k.pointer.x=e,k.pointer.y=t}(t,n)},document.addEventListener("pointerdown",c,!1),document.addEventListener("pointermove",d,!1),document.addEventListener("pointerup",u,!1),document.addEventListener("pointerout",Y,!1),p=n}}document.addEventListener("keydown",(function(e){g&&T(e)}),!1),document.addEventListener("keyup",(function(e){g&&S(e)}),!1),window.addEventListener("resize",m,!1);var f={},v={},b={getGetDevice:D(f,I((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size))},y={ref:null};m();var w=!1,M=function(){var e=Object(j.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n.audioFileNames||[]).forEach((function(e){f[e]=new Audio(e),t.push(new Promise((function(t,n){f[e].addEventListener("canplaythrough",t),f[e].addEventListener("error",n)}))),f[e].load()})),(n.imageFileNames||[]).forEach((function(e){v[e]=new Image,t.push(new Promise((function(t,n){v[e].addEventListener("load",t),v[e].addEventListener("error",n),v[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(a=y.ref)||void 0===a||a.call(y,{id:"Loading",baseProps:Object(E.a)({}),textures:t}),{cleanup:function(){s.width=s.width,r||document.body.removeChild(s),w=!0,document.removeEventListener("keydown",T,!1),document.removeEventListener("keyup",S,!1),window.removeEventListener("resize",m,!1),m(!0)},loadPromise:M().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(f).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n){var i=t||game.Game(game.gameProps),r=function(e){return{x:e.x,y:e.y}},o=e.getGetDevice(),a=o(r),s=P(i,o(r),0),p=n||i.props.size,c=L(a.size,p);return{initTextures:O(s,i.props,o,r,!0,c,0,1),getNextFrameTextures:function(t){var n=e.getGetDevice(),o=L(n(r).size,p);return O(s,i.props,n,r,!1,o,t,1)}}}(b,e),i=n.initTextures,r=n.getNextFrameTextures,o=null;!function e(t){var n;null===(n=y.ref)||void 0===n||n.call(y,t),window.requestAnimationFrame((function(t){w||(null===o&&(o=t-1/60),e(r(t-o)),k={keysDown:k.keysDown,keysJustPressed:{},pointer:Object.assign(Object.assign({},k.pointer),{},{justPressed:!1,justReleased:!1})})}))}(i)})),audioElements:f}}function D(e,t){var n={log:console.log,random:Math.random,timeout:function(e,t){return setTimeout(e,t)},audio:function(t){function n(n){var i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:function(){n(!1).pause()}}},network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}}};return function(){var e=Object.assign(Object.assign({},n),{},{size:G||t,now:function(){return new Date}});return function(t){return Object.assign(Object.assign({},e),{},{inputs:z(t)})}}}var R=n(217);function H(e){var t=e.Game,n=e.gameProps,o=e.showReload,a=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],o=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",o,!1),function(){return window.removeEventListener("resize",o,!1)}}),[]);var a=Object(i.useCallback)((function(t){null!==t&&(e.current=t,o())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){o()}}),[]),[n,a]}(),p=s[0],c=s[1],d=Object(i.useState)(0),u=d[0],l=d[1],h=0,g=0,m=0;if(p&&p.height&&p.width){p.width/p.height>375/667?(g=p.height*(667/900),h=g*(375/667)):(h=p.width*(375/460),g=h/(375/667));var v=n.size.maxHeightMargin?0:.08*g;m=(p.height-g)/2+v}return Object(i.useEffect)((function(){if(h&&g){var e=document.getElementById("myCanvas"),i=U(t(n),[R.b.text({color:"black",text:"Loading..."})],a,"scale-up",e,{width:h,height:g}).cleanup;return function(){i()}}}),[h,g,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:c,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),o&&r.a.createElement("img",{className:f.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return l((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:g}))}function J(e){var t=e.part,n=e.MDXContent,i=e.codesTs,p=e.codesJs,c=e.Game,d=e.gameProps,u=e.image,l=e.isEnd,h=e.assets,g=i&&p,m=c&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(H,{Game:c,gameProps:d,showReload:g,assets:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:u}));return r.a.createElement(o.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(a.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),l?r.a.createElement("div",null):r.a.createElement(a.a,{to:"/tutorial/"+(t+1)},"Next"))),g?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(v,{codesTs:i,codesJs:p})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}}}]);