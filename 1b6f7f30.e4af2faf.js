(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),o=(n(0),n(218)),a={},s={id:"tutorial/17",title:"17",description:"# 17 - Storage",source:"@site/docs/tutorial/17.md",permalink:"/docs/tutorial/17",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/17.md"},p=[],c={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"17---storage"},"17 - Storage"),Object(o.b)("p",null,"It would be nice to save a high score between plays! Replay provides a simple way to save things to local storage on the device."),Object(o.b)("p",null,"In our top-level ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," Sprite we add a ",Object(o.b)("inlineCode",{parentName:"p"},"highScore")," state field. In ",Object(o.b)("inlineCode",{parentName:"p"},"init")," we want to set this value to be what's saved in local storage. ",Object(o.b)("inlineCode",{parentName:"p"},"device.storage.getStore()")," accesses the current store, which is an object of string keys and values. If there's no ",Object(o.b)("inlineCode",{parentName:"p"},"highScore")," value in the store, then we set a default of ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"gameOver")," callback we'll have the ",Object(o.b)("inlineCode",{parentName:"p"},"Level")," Sprite pass in the current score. If it's higher than our ",Object(o.b)("inlineCode",{parentName:"p"},"highScore")," state value, we replace the value in the ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," Sprite's state and the store. Calling ",Object(o.b)("inlineCode",{parentName:"p"},"device.storage.setStore({ key, value })")," will merge the key and value into the existing store and save it."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"Level")," Sprite we need to pass the score into the ",Object(o.b)("inlineCode",{parentName:"p"},"gameOver")," callback."),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"Menu")," Sprite we read the ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," Sprite's ",Object(o.b)("inlineCode",{parentName:"p"},"highScore")," value through a prop and display it. In order to have the high score text stand out a bit, we explicitly set the font name and size through the ",Object(o.b)("inlineCode",{parentName:"p"},"font")," prop."))}d.isMDXComponent=!0},192:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(222),a=(n(52),n(228),n(217)),s=n(242),p=Object(a.a)({render:function(){return[a.b.rectangle({width:50,height:40,color:"yellow"})]}});function c(e){return"keysDown"in e}var d=Object(a.a)({render:function(e){var t=e.props,n=u(e.device.size,t.pipe.gapY),i=n.yUpperTop,r=n.yUpperBottom,o=n.yLowerTop,s=n.yLowerBottom;return[a.b.rectangle({color:"green",width:40,height:i-r,y:(i+r)/2}),a.b.rectangle({color:"green",width:40,height:o-s,y:(o+s)/2})]}});function u(e,t){return{yUpperTop:e.height/2+e.heightMargin,yUpperBottom:t+85,yLowerTop:t-85,yLowerBottom:-e.height/2-e.heightMargin}}var h=Object(a.a)({init:function(e){var t=e.device;return{birdY:10,birdGravity:-12,pipes:e.props.paused?[]:[l(t)],score:0}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,o=n.birdGravity,a=n.birdY,p=n.pipes,d=n.score;return a-=o+=.8,(r.pointer.justPressed||c(r)&&r.keysJustPressed[" "])&&(o=-12),p[p.length-1].x<140&&(p=[].concat(p,[l(i)]).filter((function(e){return e.x>-(i.size.width+i.size.widthMargin+40)}))),function(e,t,n){if(e-20<-(t.height/2+t.heightMargin)||e+20>t.height/2+t.heightMargin)return!0;for(var i,r=function(){var n=i.value;if(n.x>45||n.x<-45)return"continue";var r=u(t,n.gapY),o=r.yUpperTop,a=r.yUpperBottom,s=r.yLowerTop,p=r.yLowerBottom,c={x:n.x,y:(o+a)/2,width:40,height:o-a},d={x:n.x,y:(s+p)/2,width:40,height:s-p};return[{x:25,y:e+20},{x:25,y:e-20},{x:0,y:e+20},{x:0,y:e-20},{x:-25,y:e+20},{x:-25,y:e-20}].some((function(e){return g(e,c)||g(e,d)}))?{v:!0}:void 0},o=Object(s.a)(n);!(i=o()).done;){var a=r();switch(a){case"continue":continue;default:if("object"==typeof a)return a.v}}return!1}(a,i.size,p)&&t.gameOver(n.score),{birdGravity:o,birdY:a,pipes:p=p.map((function(e){var t=e.passed;return!t&&e.x<-45&&(t=!0,d++),Object.assign(Object.assign({},e),{},{passed:t,x:e.x-2})})),score:d}},render:function(e){var t=e.state,n=e.device,i=n.size;return[a.b.rectangle({color:"#add8e6",width:i.width+2*i.widthMargin,height:i.height+2*i.heightMargin}),p({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})].concat(t.pipes.map((function(e,t){return d({id:"pipe-"+t,pipe:e,x:e.x})})),[a.b.text({text:"Score: "+t.score,color:"white",x:-n.size.width/2+10,y:n.size.height/2+n.size.heightMargin-80,align:"left"})])}});function l(e){var t=(e.size.height+2*e.size.heightMargin-340)*(e.random()-.5);return{x:e.size.width+e.size.widthMargin+50,gapY:t,passed:!1}}function g(e,t){return e.x>t.x-t.width/2&&e.x<t.x+t.width/2&&e.y>t.y-t.height/2&&e.y<t.y+t.height/2}var m=Object(a.a)({render:function(e){var t=e.props,n=e.device.inputs;return(n.pointer.justReleased||c(n)&&n.keysJustPressed[" "])&&t.start(),[a.b.text({text:c(n)?"Click or Space Bar to Start":"Tap to Start",color:"white",y:100}),a.b.text({text:"High score: "+t.highScore,font:{name:"Courier",size:24},color:"white",y:150})]}}),v=Object(a.a)({init:function(e){var t=e.device.storage.getStore();return{view:"menu",attempt:0,highScore:Number(t.highScore||"0")}},render:function(e){var t=e.state,n=e.updateState,i=e.device,r="menu"===t.view;return[h({id:"level-"+t.attempt,paused:r,gameOver:function(e){n((function(t){var n=t.highScore;return e>n&&(n=e,i.storage.setStore({highScore:String(n)})),Object.assign(Object.assign({},t),{},{view:"menu",highScore:n})}))}}),r?m({id:"menu",highScore:t.highScore,start:function(){n((function(e){return Object.assign(Object.assign({},e),{},{view:"level",attempt:e.attempt+1})}))}}):null]}}),f={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},b=n(136);t.default=function(){return r.a.createElement(o.a,{part:17,MDXContent:b.default,codesTs:[{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\ntype GameState = {\n  view: "menu" | "level";\n  attempt: number;\n  highScore: number;\n};\n\nexport const Game = makeSprite<GameProps, GameState>({\n  init({ device }) {\n    const store = device.storage.getStore();\n    return {\n      view: "menu",\n      attempt: 0,\n      highScore: Number(store.highScore || "0"),\n    };\n  },\n\n  render({ state, updateState, device }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: `level-${state.attempt}`,\n        paused: inMenuScreen,\n        gameOver: (score) => {\n          updateState((prevState) => {\n            let { highScore } = prevState;\n            if (score > highScore) {\n              highScore = score;\n              device.storage.setStore({ highScore: String(highScore) });\n            }\n            return {\n              ...prevState,\n              view: "menu",\n              highScore,\n            };\n          });\n        },\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            highScore: state.highScore,\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                  attempt: prevState.attempt + 1,\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[8,12,13,17,21,28,"30-34",38,46]},{file:"level.ts",code:'import { makeSprite, t, Device, DeviceSize } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, PipeT, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\ntype LevelProps = {\n  paused: boolean;\n  gameOver: (score: number) => void;\n};\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n  pipes: PipeT[];\n  score: number;\n};\n\nexport const Level = makeSprite<LevelProps, LevelState, WebInputs | iOSInputs>({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n      score: 0,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes, score } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      props.gameOver(state.score);\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n        score++;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n      score,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n      t.text({\n        text: `Score: ${state.score}`,\n        color: "white",\n        x: -device.size.width / 2 + 10,\n        y: device.size.height / 2 + device.size.heightMargin - 80,\n        align: "left",\n      }),\n    ];\n  },\n});\n\nfunction newPipe(device: Device<{}>): PipeT {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY: number, size: DeviceSize, pipes: PipeT[]) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(\n  point: { x: number; y: number },\n  rect: { x: number; y: number; height: number; width: number }\n) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[13,63]},{file:"menu.ts",code:'import { makeSprite, t } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { isWebInput } from "./utils";\n\ntype MenuProps = {\n  start: () => void;\n  highScore: number;\n};\n\nexport const Menu = makeSprite<MenuProps, undefined, WebInputs | iOSInputs>({\n  render({ props, device }) {\n    const { inputs } = device;\n\n    if (\n      inputs.pointer.justReleased ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      props.start();\n    }\n\n    return [\n      t.text({\n        text: isWebInput(inputs)\n          ? "Click or Space Bar to Start"\n          : "Tap to Start",\n        color: "white",\n        y: 100,\n      }),\n      t.text({\n        text: `High score: ${props.highScore}`,\n        font: { name: "Courier", size: 24 },\n        color: "white",\n        y: 150,\n      }),\n    ];\n  },\n});\n',highlight:[8,"30-35"]}],codesJs:[{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\nexport const Game = makeSprite({\n  init({ device }) {\n    const store = device.storage.getStore();\n    return {\n      view: "menu",\n      attempt: 0,\n      highScore: Number(store.highScore || "0"),\n    };\n  },\n\n  render({ state, updateState, device }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: `level-${state.attempt}`,\n        paused: inMenuScreen,\n        gameOver: (score) => {\n          updateState((prevState) => {\n            let { highScore } = prevState;\n            if (score > highScore) {\n              highScore = score;\n              device.storage.setStore({ highScore: String(highScore) });\n            }\n            return {\n              ...prevState,\n              view: "menu",\n              highScore,\n            };\n          });\n        },\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            highScore: state.highScore,\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                  attempt: prevState.attempt + 1,\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[6,7,11,15,22,"24-28",32,40]},{file:"level.js",code:'import { makeSprite, t } from "@replay/core";\nimport { Bird, birdWidth, birdHeight } from "./bird";\nimport { isWebInput } from "./utils";\nimport { Pipe, pipeWidth, pipeGap, getPipeYPositions } from "./pipe";\n\nconst speedX = 2;\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init({ device, props }) {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n      pipes: props.paused ? [] : [newPipe(device)],\n      score: 0,\n    };\n  },\n\n  loop({ props, state, device }) {\n    if (props.paused) {\n      return state;\n    }\n\n    const { inputs } = device;\n\n    let { birdGravity, birdY, pipes, score } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (\n      inputs.pointer.justPressed ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      birdGravity = -12;\n    }\n\n    const lastPipe = pipes[pipes.length - 1];\n    if (lastPipe.x < 140) {\n      pipes = [...pipes, newPipe(device)]\n        // Remove the pipes off screen on left\n        .filter(\n          (pipe) =>\n            pipe.x > -(device.size.width + device.size.widthMargin + pipeWidth)\n        );\n    }\n\n    if (didHitPipe(birdY, device.size, pipes)) {\n      props.gameOver(state.score);\n    }\n\n    // Move pipes to the left\n    pipes = pipes.map((pipe) => {\n      let passed = pipe.passed;\n      if (!passed && pipe.x < birdX - birdWidth / 2 - pipeWidth / 2) {\n        // Mark pipe as having passed bird\'s x position\n        passed = true;\n        score++;\n      }\n      return { ...pipe, passed, x: pipe.x - speedX };\n    });\n\n    return {\n      birdGravity,\n      birdY,\n      pipes,\n      score,\n    };\n  },\n\n  render({ state, device }) {\n    const { size } = device;\n    return [\n      t.rectangle({\n        color: "#add8e6",\n        width: size.width + size.widthMargin * 2,\n        height: size.height + size.heightMargin * 2,\n      }),\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n        rotation: Math.max(-30, state.birdGravity * 3 - 30),\n      }),\n      ...state.pipes.map((pipe, index) =>\n        Pipe({\n          id: `pipe-${index}`,\n          pipe,\n          x: pipe.x,\n        })\n      ),\n      t.text({\n        text: `Score: ${state.score}`,\n        color: "white",\n        x: -device.size.width / 2 + 10,\n        y: device.size.height / 2 + device.size.heightMargin - 80,\n        align: "left",\n      }),\n    ];\n  },\n});\n\nfunction newPipe(device) {\n  const height = device.size.height + device.size.heightMargin * 2;\n  const randomY = (height - pipeGap * 2) * (device.random() - 0.5);\n\n  return {\n    x: device.size.width + device.size.widthMargin + 50,\n    gapY: randomY,\n    passed: false,\n  };\n}\n\nfunction didHitPipe(birdY, size, pipes) {\n  if (\n    birdY - birdHeight / 2 < -(size.height / 2 + size.heightMargin) ||\n    birdY + birdHeight / 2 > size.height / 2 + size.heightMargin\n  ) {\n    // hit bottom or top\n    return true;\n  }\n  for (const pipe of pipes) {\n    if (\n      pipe.x > birdX + birdWidth / 2 + pipeWidth / 2 ||\n      pipe.x < birdX - birdWidth / 2 - pipeWidth / 2\n    ) {\n      // bird isn\'t at pipe\n      continue;\n    }\n    const {\n      yUpperTop,\n      yUpperBottom,\n      yLowerTop,\n      yLowerBottom,\n    } = getPipeYPositions(size, pipe.gapY);\n    const topPipeRect = {\n      x: pipe.x,\n      y: (yUpperTop + yUpperBottom) / 2,\n      width: pipeWidth,\n      height: yUpperTop - yUpperBottom,\n    };\n    const bottomPipeRect = {\n      x: pipe.x,\n      y: (yLowerTop + yLowerBottom) / 2,\n      width: pipeWidth,\n      height: yLowerTop - yLowerBottom,\n    };\n    // Check a few points at edges of bird\n    const birdPoints = [\n      { x: birdX + birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX + birdWidth / 2, y: birdY - birdHeight / 2 },\n      { x: birdX, y: birdY + birdHeight / 2 },\n      { x: birdX, y: birdY - birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY + birdHeight / 2 },\n      { x: birdX - birdWidth / 2, y: birdY - birdHeight / 2 },\n    ];\n    if (\n      birdPoints.some(\n        (point) =>\n          pointInRect(point, topPipeRect) || pointInRect(point, bottomPipeRect)\n      )\n    ) {\n      // Bird hit a pipe!\n      return true;\n    }\n  }\n  return false;\n}\n\nfunction pointInRect(point, rect) {\n  return (\n    point.x > rect.x - rect.width / 2 &&\n    point.x < rect.x + rect.width / 2 &&\n    point.y > rect.y - rect.height / 2 &&\n    point.y < rect.y + rect.height / 2\n  );\n}\n',highlight:[49]},{file:"menu.js",code:'import { makeSprite, t } from "@replay/core";\nimport { isWebInput } from "./utils";\n\nexport const Menu = makeSprite({\n  render({ props, device }) {\n    const { inputs } = device;\n\n    if (\n      inputs.pointer.justReleased ||\n      (isWebInput(inputs) && inputs.keysJustPressed[" "])\n    ) {\n      props.start();\n    }\n\n    return [\n      t.text({\n        text: isWebInput(inputs)\n          ? "Click or Space Bar to Start"\n          : "Tap to Start",\n        color: "white",\n        y: 100,\n      }),\n      t.text({\n        text: `High score: ${props.highScore}`,\n        font: { name: "Courier", size: 24 },\n        color: "white",\n        y: 150,\n      }),\n    ];\n  },\n});\n',highlight:["23-28"]}],Game:v,gameProps:f})}},217:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n(52);var i=n(219),r={text:function(e){return{type:"text",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function o(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},219:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0}}n.d(t,"a",(function(){return i}))},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var i=n(0),r=n.n(i),o=n(227),a=n(224),s=n(233),p=n(1),c=(n(220),n(221),n(78),n(234),n(228),n(79),n(235),n(80),n(229),n(232)),d=n(230),u=n(226),h=n(225),l=n(223),g=n.n(l),m=n(132),v=n.n(m);function f(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(h.a,{value:"js"},r.a.createElement(b,{lang:"js",codes:n})),r.a.createElement(h.a,{value:"ts"},r.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,o=n.map((function(e){return e.file})),a=Object(i.useState)(o[0]),s=a[0],p=a[1],c=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},o.map((function(e){return r.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return p(e)}},e)}))),r.a.createElement(y,{key:c.file,lang:t,code:c.code,highlight:c.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,o=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(c.a,Object(p.a)({},c.b,{theme:d.a,code:o,language:t}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:g()(t,v.a.codeBlock)},r.a.createElement("div",{className:v.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t}),o=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==o?void 0:o.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(52),n(236),n(81);var w=n(237),x=n.n(w),S=(n(25),n(20),n(54),n(21),n(238),n(239)),j=(n(53),n(219));function O(e,t,n,i,r,o,a,s){var p=Object(j.a)(t);p.opacity*=s;var c=function(e){var t=i(e);return function(e){var t=e.x,n=e.y,i=Math.PI/180,r=-(e.rotation||0)*i;return function(i){var o=i.x,a=i.y,s=(o-t)*Math.cos(r)+(a-n)*Math.sin(r),p=-(o-t)*Math.sin(r)+(a-n)*Math.cos(r),c=e.x+(s-e.x)/e.scaleX,d=e.y+(p-e.y)/e.scaleY;return{x:c+e.anchorX,y:d+e.anchorY}}}(p)(t)},d=n(c),u=e.getSprites(t,d,r,o,a),h=[],l=u.filter(E).map((function(t){if("custom"===t.type){h.push(t.props.id);var i=!1;return e.childContainers[t.props.id]||(i=!0,e.childContainers[t.props.id]=P(t,d,e.prevTime)),O(e.childContainers[t.props.id],t.props,n,c,i,o,a,p.opacity)}return t}));return Object.keys(e.childContainers).forEach((function(t){h.includes(t)||delete e.childContainers[t]})),{id:t.id,baseProps:p,textures:l}}function P(e,t,n){var i,r=e.spriteObj,o=e.props,a=[],s=function(e){a.push(e)};return r.init&&(i=r.init({props:o,device:t,updateState:s})),{state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,o){var p=this,c=o-this.prevTime;this.prevTime=o,this.currentLag+=c;var d=0,u=function(){p.state=a.reduce((function(e,t){return t(e)}),p.state),a.length=0};if(u(),!n&&r.loop){for(;this.currentLag>=1/60*1e3;)this.state=r.loop({props:e,state:this.state,device:t,updateState:s}),this.currentLag-=1/60*1e3;d=this.currentLag/(1/60*1e3)}u();var h=r[i];h||(h="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var l=h({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:d});return u(),l}}}function M(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function E(e){return null!==e}var k={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function z(e){return function(e,t){var n=e(t.pointer);return Object.assign(Object.assign({},t),{},{pointer:Object.assign(Object.assign({},t.pointer),{},{x:n.x,y:n.y})})}(e,k)}function L(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&e.preventDefault(),k.keysDown[e.key]=!0,k.keysJustPressed[e.key]=!0}function I(e){delete k.keysDown[e.key]}function Y(){k.pointer.justPressed=!1,k.pointer.pressed=!1}n(231),n(240);function T(e,t,n,i){var r=t.width,o=t.height,a=t.widthMargin,s=t.heightMargin,p=t.deviceWidth,c=t.deviceHeight;e.save();var d=Math.min(p/r,c/o),u=r+2*a,h=o+2*s;return e.translate(p/2,c/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-p/2/d,-c/2/d,p/d,c/d),e.fillStyle="white",e.fillRect(-u/2,-h/2,u,h),function e(t,n,i,r){var o=t.baseProps,a=t.textures;n.save(),X(n,o),a.forEach((function(t){if("type"in t){var a=G(n);return n.save(),X(n,t.props,o.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,a,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var W,C=Math.PI/180,X=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,o=t.rotation,a=t.scaleX,s=t.scaleY,p=t.anchorX,c=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(o*C),e.scale(a,s),e.translate(-p,c),e.globalAlpha=d*n},G=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],o=r[0],a=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(o,-a),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var o=t.size+"px "+t.name;e.font=o,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,o,a){var s=t.width/n,p=t.height/i,c=r%n,d=Math.floor(r/n)%i;e.drawImage(t,c*s,d*p,s,p,-o/2,-a/2,o,a)}}};function H(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var o=r,a=o.width,s=o.height,p=o.maxWidthMargin,c=void 0===p?0:p,d=o.maxHeightMargin;if("game-coords"===n)return{width:a,height:s,widthMargin:0,heightMargin:0,deviceWidth:a,deviceHeight:s};var u=a/s;if(u>e/t){var h=e,l=h/u,g=l/s*(void 0===d?0:d),m=Math.min(t,l+2*g);return{width:a,height:s,widthMargin:0,heightMargin:(m-l)/2*(s/l),deviceWidth:h,deviceHeight:m}}var v=t,f=v*u,b=f/a*c,y=Math.min(e,f+2*b);return{width:a,height:s,widthMargin:(y-f)/2*(a/f),heightMargin:0,deviceWidth:y,deviceHeight:v}}var N={name:"sans-serif",size:12};function B(e,t,n,i,r,o){var a;void 0===t&&(t=[]),void 0===n&&(n={}),void 0===i&&(i="game-coords");var s=r||document.createElement("canvas");r||document.body.appendChild(s);var p,c,d,u,h,l=s.getContext("2d",{alpha:!1}),g=!0;function m(t){if(!p||(l.restore(),document.removeEventListener("pointerdown",c),document.removeEventListener("pointermove",d),document.removeEventListener("pointerup",u),document.removeEventListener("pointerout",Y),!0!==t)){var n=function(e,t,n,i){var r=H(e,t,n,i);return W=r,r}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;var r=e.props.defaultFont||N,a=T(l,n,f,r);h=a.scale,y.ref=a.render;var m=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:h}),v=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:h}),b=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2+n.heightMargin};c=function(e){var t=m(e),n=v(e);b(t,n)?g=!1:(g=!0,function(e,t){k.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},d=function(e){var t=m(e),n=v(e);b(t,n)||function(e,t){k.pointer.x=e,k.pointer.y=t}(t,n)},u=function(e){var t=m(e),n=v(e);b(t,n)?Y():function(e,t){k.pointer.justPressed=!1,k.pointer.pressed=!1,k.pointer.justReleased=!0,k.pointer.x=e,k.pointer.y=t}(t,n)},document.addEventListener("pointerdown",c,!1),document.addEventListener("pointermove",d,!1),document.addEventListener("pointerup",u,!1),document.addEventListener("pointerout",Y,!1),p=n}}document.addEventListener("keydown",(function(e){g&&L(e)}),!1),document.addEventListener("keyup",(function(e){g&&I(e)}),!1),window.addEventListener("resize",m,!1);var v={},f={},b={getGetDevice:R(v,H((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size))},y={ref:null};m();var w=!1,E=function(){var e=Object(S.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n.audioFileNames||[]).forEach((function(e){v[e]=new Audio(e),t.push(new Promise((function(t,n){v[e].addEventListener("canplaythrough",t),v[e].addEventListener("error",n)}))),v[e].load()})),(n.imageFileNames||[]).forEach((function(e){f[e]=new Image,t.push(new Promise((function(t,n){f[e].addEventListener("load",t),f[e].addEventListener("error",n),f[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(a=y.ref)||void 0===a||a.call(y,{id:"Loading",baseProps:Object(j.a)({}),textures:t}),{cleanup:function(){s.width=s.width,r||document.body.removeChild(s),w=!0,document.removeEventListener("keydown",L,!1),document.removeEventListener("keyup",I,!1),window.removeEventListener("resize",m,!1),m(!0)},loadPromise:E().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(v).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n){var i=t||game.Game(game.gameProps),r=function(e){return{x:e.x,y:e.y}},o=e.getGetDevice(),a=o(r),s=P(i,o(r),0),p=n||i.props.size,c=M(a.size,p);return{initTextures:O(s,i.props,o,r,!0,c,0,1),getNextFrameTextures:function(t){var n=e.getGetDevice(),o=M(n(r).size,p);return O(s,i.props,n,r,!1,o,t,1)}}}(b,e),i=n.initTextures,r=n.getNextFrameTextures,o=null;!function e(t){var n;null===(n=y.ref)||void 0===n||n.call(y,t),window.requestAnimationFrame((function(t){w||(null===o&&(o=t-1/60),e(r(t-o)),k={keysDown:k.keysDown,keysJustPressed:{},pointer:Object.assign(Object.assign({},k.pointer),{},{justPressed:!1,justReleased:!1})})}))}(i)})),audioElements:v}}function R(e,t){var n={log:console.log,random:Math.random,timeout:function(e,t){return setTimeout(e,t)},audio:function(t){function n(n){var i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:function(){n(!1).pause()}}},network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}}};return function(){var e=Object.assign(Object.assign({},n),{},{size:W||t,now:function(){return new Date}});return function(t){return Object.assign(Object.assign({},e),{},{inputs:z(t)})}}}var U=n(217);function D(e){var t=e.Game,n=e.gameProps,o=e.showReload,a=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],o=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",o,!1),function(){return window.removeEventListener("resize",o,!1)}}),[]);var a=Object(i.useCallback)((function(t){null!==t&&(e.current=t,o())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){o()}}),[]),[n,a]}(),p=s[0],c=s[1],d=Object(i.useState)(0),u=d[0],h=d[1],l=0,g=0,m=0;if(p&&p.height&&p.width){p.width/p.height>375/667?(g=p.height*(667/900),l=g*(375/667)):(l=p.width*(375/460),g=l/(375/667));var f=n.size.maxHeightMargin?0:.08*g;m=(p.height-g)/2+f}return Object(i.useEffect)((function(){if(l&&g){var e=document.getElementById("myCanvas"),i=B(t(n),[U.b.text({color:"black",text:"Loading..."})],a,"scale-up",e,{width:l,height:g}).cleanup;return function(){i()}}}),[l,g,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:c,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),o&&r.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return h((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:l,height:g}))}function J(e){var t=e.part,n=e.MDXContent,i=e.codesTs,p=e.codesJs,c=e.Game,d=e.gameProps,u=e.image,h=e.isEnd,l=e.assets,g=i&&p,m=c&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(D,{Game:c,gameProps:d,showReload:g,assets:l})})):r.a.createElement("div",null,r.a.createElement("img",{src:u}));return r.a.createElement(o.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(a.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),h?r.a.createElement("div",null):r.a.createElement(a.a,{to:"/tutorial/"+(t+1)},"Next"))),g?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(f,{codesTs:i,codesJs:p})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},242:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}n.d(t,"a",(function(){return r}))}}]);