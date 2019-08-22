/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
var shimFeatures={"no-bootstrap":!0,"intersection-observer":!1,"resize-observer":!1,"web-animations":!0,"build-fetch":!1};window.DojoHasEnvironment&&window.DojoHasEnvironment.staticFeatures&&Object.keys(window.DojoHasEnvironment.staticFeatures).forEach(function(e){shimFeatures[e]=window.DojoHasEnvironment.staticFeatures[e]}),window.DojoHasEnvironment={staticFeatures:shimFeatures},function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("catsvsdogs",[],t):"object"==typeof exports?exports.catsvsdogs=t():e.catsvsdogs=t()}(window,function(){return function(e){function t(t){for(var n,r,i=t[0],s=t[1],u=0,a=[];u<i.length;u++)r=i[u],o[r]&&a.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(f&&f(t);a.length;)a.shift()()}var n={},r={bootstrap:0},o={bootstrap:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{main:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var r=({main:"main","runtime/IntersectionObserver":"runtime/IntersectionObserver","runtime/ResizeObserver":"runtime/ResizeObserver","runtime/WebAnimations":"runtime/WebAnimations","runtime/blocks":"runtime/blocks","runtime/client":"runtime/client","runtime/fetch":"runtime/fetch","runtime/pointerEvents":"runtime/pointerEvents"}[e]||e)+"."+{main:"5e77c36aab6afc131f43","runtime/IntersectionObserver":"31d6cfe0d16ae931b73c","runtime/ResizeObserver":"31d6cfe0d16ae931b73c","runtime/WebAnimations":"31d6cfe0d16ae931b73c","runtime/blocks":"31d6cfe0d16ae931b73c","runtime/client":"31d6cfe0d16ae931b73c","runtime/fetch":"31d6cfe0d16ae931b73c","runtime/pointerEvents":"31d6cfe0d16ae931b73c"}[e]+".bundle.css",o=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var a=(d=s[u]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(a===r||a===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){var d;if((a=(d=f[u]).getAttribute("data-href"))===r||a===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},l.href=o,document.getElementsByTagName("head")[0].appendChild(l)}).then(function(){r[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=s);var u,a=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=function(e){return i.p+""+({main:"main","runtime/IntersectionObserver":"runtime/IntersectionObserver","runtime/ResizeObserver":"runtime/ResizeObserver","runtime/WebAnimations":"runtime/WebAnimations","runtime/blocks":"runtime/blocks","runtime/client":"runtime/client","runtime/fetch":"runtime/fetch","runtime/pointerEvents":"runtime/pointerEvents"}[e]||e)+"."+{main:"77fea297413815474634","runtime/IntersectionObserver":"0b0444a337eebdf34cc9","runtime/ResizeObserver":"98729e9eb20ebde7164d","runtime/WebAnimations":"ec9772497664c17f1539","runtime/blocks":"632d05b8d50cf276eebb","runtime/client":"decd9a4b7750f543ffa3","runtime/fetch":"31d962ca55915573ed89","runtime/pointerEvents":"f3007805429cca72f24b"}[e]+".bundle.js"}(e),u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,a.appendChild(f)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window.dojoWebpackJsonpcatsvsdogs=window.dojoWebpackJsonpcatsvsdogs||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var f=u;return i(i.s=4)}([function(e,t,n){"use strict";n.r(t),function(e){const n="undefined"!=typeof window&&window.navigator.userAgent.indexOf("jsdom")>-1?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0;t.default=n}.call(this,n(3))},function(e,t,n){"use strict";n.r(t),n.d(t,"testCache",function(){return o}),n.d(t,"testFunctions",function(){return i}),n.d(t,"normalize",function(){return a}),n.d(t,"exists",function(){return f}),n.d(t,"add",function(){return d}),n.d(t,"default",function(){return l});var r=n(0);const o={},i={},{staticFeatures:s}=r.default.DojoHasEnvironment||{};"DojoHasEnvironment"in r.default&&delete r.default.DojoHasEnvironment;const u=s?"function"==typeof s?s.apply(r.default):s:{};function a(e,t){const n=e.match(/[\?:]|[^:\?]*/g)||[];let r=0;const o=function e(t){const o=n[r++];return":"===o?null:"?"===n[r++]?!t&&l(o)?e():(e(!0),e(t)):o}();return o&&t(o)}function f(e){const t=e.toLowerCase();return Boolean(t in u||t in o||i[t])}function d(e,t,n=!1){const r=e.toLowerCase();if(f(r)&&!n&&!(r in u))throw new TypeError(`Feature "${e}" exists and overwrite not true.`);"function"==typeof t?i[r]=t:(o[r]=t,delete i[r])}function l(e,t=!1){let n;const r=e.toLowerCase();if(r in u)n=u[r];else if(i[r])n=o[r]=i[r].call(null),delete i[r];else if(r in o)n=o[r];else if(t)throw new TypeError(`Attempt to detect unregistered has feature "${e}"`);return n}d("public-path",void 0),d("dojo-debug",!1),d("host-browser","undefined"!=typeof document&&"undefined"!=typeof location),d("host-node",function(){if("object"==typeof process&&process.versions&&process.versions.node)return process.versions.node}),d("fetch","fetch"in r.default&&"function"==typeof r.default.fetch,!0),d("es6-array",()=>["from","of"].every(e=>e in r.default.Array)&&["findIndex","find","copyWithin"].every(e=>e in r.default.Array.prototype),!0),d("es6-array-fill",()=>"fill"in r.default.Array.prototype&&1===[1].fill(9,Number.POSITIVE_INFINITY)[0],!0),d("es7-array",()=>"includes"in r.default.Array.prototype,!0),d("es6-map",()=>{if("function"==typeof r.default.Map)try{const e=new r.default.Map([[0,1]]);return e.has(0)&&"function"==typeof e.keys&&l("es6-symbol")&&"function"==typeof e.values&&"function"==typeof e.entries}catch(e){return!1}return!1},!0),d("es6-iterator",()=>l("es6-map")),d("es6-math",()=>["clz32","sign","log10","log2","log1p","expm1","cosh","sinh","tanh","acosh","asinh","atanh","trunc","fround","cbrt","hypot"].every(e=>"function"==typeof r.default.Math[e]),!0),d("es6-math-imul",()=>"imul"in r.default.Math&&-5===Math.imul(4294967295,5),!0),d("es6-object",()=>l("es6-symbol")&&["assign","is","getOwnPropertySymbols","setPrototypeOf"].every(e=>"function"==typeof r.default.Object[e]),!0),d("es2017-object",()=>["values","entries","getOwnPropertyDescriptors"].every(e=>"function"==typeof r.default.Object[e]),!0),d("es-observable",()=>void 0!==r.default.Observable,!0),d("es6-promise",()=>void 0!==r.default.Promise&&l("es6-symbol"),!0),d("es2018-promise-finally",()=>l("es6-promise")&&void 0!==r.default.Promise.prototype.finally,!0),d("es6-set",()=>{if("function"==typeof r.default.Set){const e=new r.default.Set([1]);return e.has(1)&&"keys"in e&&"function"==typeof e.keys&&l("es6-symbol")}return!1},!0),d("es6-string",()=>["fromCodePoint"].every(e=>"function"==typeof r.default.String[e])&&["codePointAt","normalize","repeat","startsWith","endsWith","includes"].every(e=>"function"==typeof r.default.String.prototype[e]),!0),d("es6-string-raw",()=>{if("raw"in r.default.String){let e=function(e,...t){const n=[...e];return n.raw=e.raw,n}`a\n${1}`;return e.raw=["a\\n"],"a\\n"===r.default.String.raw(e,42)}return!1},!0),d("es2017-string",()=>["padStart","padEnd"].every(e=>"function"==typeof r.default.String.prototype[e]),!0),d("es6-symbol",()=>void 0!==r.default.Symbol&&"symbol"==typeof Symbol(),!0),d("es6-weakmap",()=>{if(void 0!==r.default.WeakMap){const e={},t={},n=new r.default.WeakMap([[e,1]]);return Object.freeze(e),1===n.get(e)&&n.set(t,2)===n&&l("es6-symbol")}return!1},!0),d("microtasks",()=>l("es6-promise")||l("host-node")||l("dom-mutationobserver"),!0),d("postmessage",()=>void 0!==r.default.window&&"function"==typeof r.default.postMessage,!0),d("raf",()=>"function"==typeof r.default.requestAnimationFrame,!0),d("setimmediate",()=>void 0!==r.default.setImmediate,!0),d("dom-mutationobserver",()=>{if(l("host-browser")&&Boolean(r.default.MutationObserver||r.default.WebKitMutationObserver)){const e=document.createElement("div"),t=new(r.default.MutationObserver||r.default.WebKitMutationObserver)(function(){});return t.observe(e,{attributes:!0}),e.style.setProperty("display","block"),Boolean(t.takeRecords().length)}return!1},!0),d("dom-webanimation",()=>l("host-browser")&&void 0!==r.default.Animation&&void 0!==r.default.KeyframeEffect,!0),d("abort-controller",()=>void 0!==r.default.AbortController),d("abort-signal",()=>void 0!==r.default.AbortSignal),d("dom-intersection-observer",()=>l("host-browser")&&void 0!==r.default.IntersectionObserver,!0),d("dom-resize-observer",()=>l("host-browser")&&void 0!==r.default.ResizeObserver,!0),d("dom-pointer-events",()=>l("host-browser")&&void 0!==r.default.onpointerdown,!0),d("build-elide",!1),d("test",!1),d("global-this",()=>void 0!==r.default.globalThis)},function(e,t,n){"use strict";n.r(t),n.d(t,"ShimPromise",function(){return i}),n.d(t,"isThenable",function(){return s});var r=n(0),o=n(1);let i=r.default.Promise;const s=function(e){return e&&"function"==typeof e.then};Object(o.default)("es2018-promise-finally")||(r.default.Promise.prototype.finally=function(e){return this.then(e&&(t=>Promise.resolve(e()).then(()=>t)),e&&(t=>Promise.resolve(e()).then(()=>{throw t})))}),t.default=i},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(5),n(2),n(7),e.exports=n(9)},function(e,t,n){},,function(e,t,n){var r=n(1);n(8);var o=[];r.default("build-serve")&&(o.push(n.e("runtime/client").then(n.t.bind(null,10,7))),o.push(n.e("runtime/client").then(n.t.bind(null,11,7)))),r.default("build-blocks")&&o.push(n.e("runtime/blocks").then(n.t.bind(null,12,7))),r.default("intersection-observer")&&!r.default("dom-intersection-observer")&&o.push(n.e("runtime/IntersectionObserver").then(n.bind(null,13))),r.default("no-bootstrap"),r.default("web-animations")&&!r.default("dom-webanimation")&&o.push(n.e("runtime/WebAnimations").then(n.bind(null,15))),r.default("resize-observer")&&!r.default("dom-resize-observer")&&o.push(n.e("runtime/ResizeObserver").then(n.bind(null,16))),r.default("dom-pointer-events")||o.push(n.e("runtime/pointerEvents").then(n.bind(null,17))),Promise.all(o).then(function(){n.e("main").then(n.bind(null,18))})},function(e,t,n){var r=n(1),o=n(0);if(r.exists("build-time-render")||r.add("build-time-render",!1,!1),r.exists("build-serve")||r.add("build-serve",!1,!1),o.default.__public_path__||o.default.__public_origin__){var i=o.default.__public_origin__||window.location.origin;o.default.__public_path__&&(i+=o.default.__public_path__,r.add("public-path",o.default.__public_path__,!0)),n.p=i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1),o=n(0);if("serviceWorker"in o.default.navigator){var i="";r.default("public-path")&&(i=String(r.default("public-path")).replace(/\/$/,"")+"/"),o.default.addEventListener("load",function(){o.default.navigator.serviceWorker.register(i+"service-worker.js")})}}])});
//# sourceMappingURL=bootstrap.244369661f61440d311c.bundle.js.map