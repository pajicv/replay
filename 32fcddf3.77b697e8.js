(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),a=(t(0),t(169)),c={id:"ios",title:"iOS"},i={id:"ios",title:"iOS",description:"## Swift Package",source:"@site/docs/ios.md",permalink:"/docs/ios",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/ios.md",sidebar:"someSidebar",previous:{title:"Web",permalink:"/docs/web"}},p=[{value:"Swift Package",id:"swift-package",children:[]},{value:"Inputs",id:"inputs",children:[]}],s={rightToc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"swift-package"},"Swift Package"),Object(a.b)("p",null,"The Replay Swift package is ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/edbentley/replay-swift"}),"hosted on GitHub"),". Once ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/xcode/adding_package_dependencies_to_your_app"}),"added as a package dependency")," to your Xcode project, you can replace the ",Object(a.b)("inlineCode",{parentName:"p"},"rootViewController"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift",metastring:"{1,8}","{1,8}":!0}),"import Replay\n\nclass SceneDelegate: UIResponder, UIWindowSceneDelegate {\n\n    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {\n        if let windowScene = scene as? UIWindowScene {\n            let window = UIWindow(windowScene: windowScene)\n            window.rootViewController = ReplayViewController()\n            self.window = window\n            window.makeKeyAndVisible()\n        }\n    }\n\n}\n")),Object(a.b)("p",null,"Your image and audio assets also need to be added to your Xcode project. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/starter"}),"Replay Starter")," for an example setup."),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"device.inputs")," parameter of Sprite methods is of type:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"type iOSInputs = {\n  pointer: {\n    pressed: boolean;\n    justPressed: boolean;\n    justReleased: boolean;\n    x: number;\n    y: number;\n  };\n};\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@replay/swift")," package exports this type for TypeScript projects."))}l.isMDXComponent=!0},169:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(f,i({ref:n},s,{components:t})):o.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);