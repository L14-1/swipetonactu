(function(e){function t(t){for(var r,o,a=t[0],s=t[1],l=t[2],u=0,d=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a85c8a56"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"99dffb55"}[e]+".css",c=s.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===c))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===r||u===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("a",{on:{click:e.removeThemes}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-object-ungroup"}})],1),n("h1",[e._v("Swipe ton actu !")]),n("router-link",{attrs:{to:"/about"}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-newspaper"}})],1)],1),n("router-view")],1)},c=[],i={methods:{removeThemes:function(){window.localStorage.removeItem("selectedThemes"),this.$router.push("/")}}},a=i,s=(n("5c0b"),n("2877")),l=Object(s["a"])(a,o,c,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("themeChoice")],1)},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-choice"},[n("div",{staticClass:"choice-container"},[n("h2",[e._v("Choisissez vos thèmes préférés 😃")]),n("ul",[n("li",{class:{active:e.selectedThemes.includes("actu-generale")},attrs:{id:"actu-generale"},on:{click:e.clickedTheme}},[e._v(" Actu génèrale ")]),n("li",{class:{active:e.selectedThemes.includes("sport")},attrs:{id:"sport"},on:{click:e.clickedTheme}},[e._v(" Sport ")]),n("li",{class:{active:e.selectedThemes.includes("entertainment")},attrs:{id:"entertainment"},on:{click:e.clickedTheme}},[e._v(" Entertainment ")]),n("li",{class:{active:e.selectedThemes.includes("economie")},attrs:{id:"economie"},on:{click:e.clickedTheme}},[e._v(" Economie ")]),n("li",{class:{active:e.selectedThemes.includes("planete")},attrs:{id:"planete"},on:{click:e.clickedTheme}},[e._v(" Planète ")]),n("li",{class:{active:e.selectedThemes.includes("insolite")},attrs:{id:"insolite"},on:{click:e.clickedTheme}},[e._v(" insolite ")]),n("li",{class:{active:e.selectedThemes.includes("desintox")},attrs:{id:"desintox"},on:{click:e.clickedTheme}},[e._v(" desintox ")]),n("li",{class:{active:e.selectedThemes.includes("high-tech")},attrs:{id:"high-tech"},on:{click:e.clickedTheme}},[e._v(" High-tech ")])]),n("button",{staticClass:"next-button",on:{click:e.themeValidator}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right"}})],1)])])},p=[],v=(n("caad"),n("2532"),n("a434"),n("e9c4"),{name:"themeChoice",data:function(){return{selectedThemes:[]}},methods:{clickedTheme:function(e){var t=this.selectedThemes,n=e.path[0].getAttribute("id");if(t.includes(n)){var r=t.indexOf(n);t.splice(r,1),this.selectedThemes=t}else this.selectedThemes.push(n)},themeValidator:function(){var e=this.selectedThemes;0==e.length?(window.localStorage.setItem("selectedThemes",JSON.stringify(["sport"])),this.$router.push("/about")):(window.localStorage.setItem("selectedThemes",JSON.stringify(e)),this.$router.push("/about"))}}}),b=v,g=(n("e68b"),Object(s["a"])(b,f,p,!1,null,"3805b26e",null)),T=g.exports,w={name:"Home",mounted:function(){var e=JSON.parse(window.localStorage.getItem("selectedThemes"));0==e.length||this.$router.push("/about")},components:{themeChoice:T}},y=w,k=Object(s["a"])(y,h,m,!1,null,null,null),_=k.exports;r["a"].use(d["a"]);var S=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new d["a"]({mode:"history",base:"/",routes:S}),j=O,x=n("2f62"),C=n("bc3a");r["a"].use(x["a"]);var A=new x["a"].Store({state:{selectThemesWindow:"",returnedArticles:[]},mutations:{returnedArticles:function(e,t){e.returnedArticles=t}},actions:{getSpecifiedArticles:function(e,t){var n=e.commit,r={selectedThemes:t};C({method:"post",url:"http://192.168.1.24:8000/news",data:r,headers:{"content-type":"application/json"}}).then((function(e){n("returnedArticles",e.data)})).catch((function(e){return e}))}},modules:{}}),E=n("ecee"),P=n("c074"),N=n("ad3d");E["c"].add(P["a"]),r["a"].component("font-awesome-icon",N["a"]),r["a"].config.productionTip=!1,new r["a"]({router:j,store:A,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5c5e":function(e,t,n){},"9c0c":function(e,t,n){},e68b:function(e,t,n){"use strict";n("5c5e")}});
//# sourceMappingURL=app.936b883b.js.map