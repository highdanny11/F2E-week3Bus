(function(e){function t(t){for(var r,o,l=t[0],s=t[1],i=t[2],u=0,f=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},c={app:0},a=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-8f63ea72":"a5c01de6","chunk-2643f94b":"433c8f7c","chunk-cbb1ed88":"3166b095"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}c[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/F2E-week3Bus/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("7b17"),n("bc3a")),a=n.n(c),o=n("130e");function l(e,t){var n=Object(r["y"])("router-view");return Object(r["t"])(),Object(r["d"])(n)}n("a251");var s=n("6b0d"),i=n.n(s);const u={},b=i()(u,[["render",l]]);var f=b,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p={class:"bg-img"},h={class:"container"},j={class:"position-relative d-sm-flex d-none justify-content-between pt-6"},m=Object(r["g"])("h1",{class:"helloBus text-white text-shadow"},"Hello, Bus !",-1),x={class:"list-unstyled mb-0 d-flex translate-middle-auto mb-0 position-xl-absolute start-50 mt-5 translate-middle-xl-x"},O=Object(r["i"])("公車動態"),g=Object(r["g"])("li",null,[Object(r["g"])("a",{href:"#",class:"px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5"},"附近站點")],-1),v=Object(r["g"])("li",null,[Object(r["g"])("a",{href:"#",class:"px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5"},"班表查詢")],-1),y=Object(r["g"])("li",null,[Object(r["g"])("a",{href:"#",class:"px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5"},"我的收藏")],-1),w=Object(r["g"])("div",{class:"position-relative h-100"},[Object(r["g"])("div",{class:"position-absolute start-50 top-25 translate-middle"},[Object(r["g"])("h2",{class:"text-shadow text-white text-center helloBus mb-0"}," Hello, Bus ! "),Object(r["g"])("p",{class:"mb-0 text-white text-center fs-sm-26 fs-8 letterSp-45"},"全台公車動態時刻查詢網")])],-1),k={class:"container"},S={class:"position-relative"},P={class:"optionaList"},B={class:"d-flex justify-content-between align-items-center list-unstyled"},_={class:"text-center text-primary"},M=Object(r["g"])("i",{class:"fas fa-bus"},null,-1),R=Object(r["i"])(" 公車動態 "),E=Object(r["h"])('<li class="text-center text-primary"><a href="#" class="btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn"><i class="fas fa-map-marker-alt"></i></a> 附近站點 </li><li class="text-center text-primary"><a href="#" class="btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn"><i class="fas fa-clock"></i></a> 班表查詢 </li><li class="text-center text-primary"><a href="#" class="btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn"><i class="fas fa-heart"></i></a> 我的收藏 </li>',3),H=Object(r["g"])("footer",{class:"bg-primary py-5 text-white text-center fs-lg-5 fs-8 position-absolute bottom-0 w-100"},[Object(r["g"])("div",{class:"container"}," HelloBus © 2021 Designer Vum. Engineer Sam. All rights reserved. ")],-1);function T(e,t){var n=Object(r["y"])("router-link");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",p,[Object(r["g"])("div",h,[Object(r["g"])("nav",j,[m,Object(r["g"])("ul",x,[Object(r["g"])("li",null,[Object(r["j"])(n,{to:"/ResultSearch",class:"px-xl-5 px-3 text-decoration-none text-white letterSp-15 fs-5"},{default:Object(r["F"])((function(){return[O]})),_:1})]),g,v,y])])]),w]),Object(r["g"])("div",k,[Object(r["g"])("div",S,[Object(r["g"])("div",P,[Object(r["g"])("ul",B,[Object(r["g"])("li",_,[Object(r["j"])(n,{to:"/ResultSearch",class:"btn btn-secondary mb-2 d-block rounded-circle text-white optionalBtn"},{default:Object(r["F"])((function(){return[M]})),_:1}),R]),E])])])]),H],64)}const F={},L=i()(F,[["render",T]]);var A=L,C=[{path:"/",name:"Home",component:A},{path:"/ResultSearch",name:"ResultSearch",component:function(){return Promise.all([n.e("chunk-8f63ea72"),n.e("chunk-cbb1ed88")]).then(n.bind(null,"6a04"))}},{path:"/ResultMap/:id",name:"ResultMap",component:function(){return Promise.all([n.e("chunk-8f63ea72"),n.e("chunk-2643f94b")]).then(n.bind(null,"fb70"))}}],J=Object(d["a"])({history:Object(d["b"])(),routes:C}),q=J,D=Object(r["c"])(f);D.use(o["a"],a.a),D.use(q),D.mount("#app")},"62ea":function(e,t,n){},a251:function(e,t,n){"use strict";n("62ea")}});
//# sourceMappingURL=app.c8461d2e.js.map