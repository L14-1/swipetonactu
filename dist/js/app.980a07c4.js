(function(e){function t(t){for(var c,o,l=t[0],r=t[1],a=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,a||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],c=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(c=!1)}c&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var c={},n={app:0},i=[];function o(t){if(c[t])return c[t].exports;var s=c[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=c,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(s,c,function(t){return e[t]}.bind(null,c));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/swipetonactu/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0ca8":function(e,t,s){e.exports=s.p+"img/20minutes-logo.6ce0469d.png"},"119a":function(e,t,s){},2586:function(e,t,s){},"33fe":function(e,t,s){"use strict";s("2586")},"34bc":function(e,t,s){"use strict";s("119a")},"4c21":function(e,t,s){e.exports=s.p+"img/leFigaro-logo.16447bc6.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var c=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("a",{on:{click:e.removeThemes}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-gear"}})],1),s("h1",[e._v("swipe ton actu !")])]),s("router-view")],1)},i=[],o={methods:{removeThemes:function(){var e=this;window.localStorage.setItem("memoryThemes",window.localStorage.getItem("selectedThemes")),window.localStorage.removeItem("selectedThemes"),setTimeout((function(){e.$router.push("/")}),"500")}}},l=o,r=(s("5c0b"),s("2877")),a=Object(r["a"])(l,n,i,!1,null,null,null),u=a.exports,d=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("themeChoice")],1)},h=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"theme-choice"},[s("div",{staticClass:"choice-container"},[s("h3",[e._v("Choisissez vos sources 😄")]),s("ul",[s("li",{class:{active:e.selectedSources.includes("20minutes")},attrs:{id:"20minutes"},on:{click:function(t){return e.clickedSource("20minutes")}}},[e._v(" 20 minutes ")]),s("li",{class:{active:e.selectedSources.includes("lesEchos")},attrs:{id:"lesEchos"},on:{click:function(t){return e.clickedSource("lesEchos")}}},[e._v(" Les Echos ")]),s("li",{class:{active:e.selectedSources.includes("leFigaro")},attrs:{id:"leFigaro"},on:{click:function(t){return e.clickedSource("leFigaro")}}},[e._v(" Le Figaro ")])]),0!=e.selectedSources.length?s("h3",[e._v("... et vos thèmes !")]):e._e(),s("ul",[e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")?s("li",{class:{active:e.selectedThemes.includes("actu-generale")},attrs:{id:"actu-generale"},on:{click:function(t){return e.clickedTheme("actu-generale")}}},[e._v(" Actu génèrale ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("leFigaro")?s("li",{class:{active:e.selectedThemes.includes("sport")},attrs:{id:"sport"},on:{click:function(t){return e.clickedTheme("sport")}}},[e._v(" Sport ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:{active:e.selectedThemes.includes("entertainment")},attrs:{id:"entertainment"},on:{click:function(t){return e.clickedTheme("entertainment")}}},[e._v(" Entertainment ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")||e.selectedSources.includes("leFigaro")?s("li",{class:{active:e.selectedThemes.includes("economie")},attrs:{id:"economie"},on:{click:function(t){return e.clickedTheme("economie")}}},[e._v(" Economie ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:{active:e.selectedThemes.includes("planete")},attrs:{id:"planete"},on:{click:function(t){return e.clickedTheme("planete")}}},[e._v(" Planète ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:{active:e.selectedThemes.includes("insolite")},attrs:{id:"insolite"},on:{click:function(t){return e.clickedTheme("insolite")}}},[e._v(" insolite ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("leFigaro")?s("li",{class:{active:e.selectedThemes.includes("desintox")},attrs:{id:"desintox"},on:{click:function(t){return e.clickedTheme("desintox")}}},[e._v(" desintox ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")||e.selectedSources.includes("leFigaro")?s("li",{class:{active:e.selectedThemes.includes("high-tech")},attrs:{id:"high-tech"},on:{click:function(t){return e.clickedTheme("high-tech")}}},[e._v(" High-tech ")]):e._e(),e.selectedSources.includes("leFigaro")?s("li",{class:{active:e.selectedThemes.includes("sciences")},attrs:{id:"sciences"},on:{click:function(t){return e.clickedTheme("sciences")}}},[e._v(" Sciences ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:{active:e.selectedThemes.includes("finance")},attrs:{id:"finance"},on:{click:function(t){return e.clickedTheme("finance")}}},[e._v(" Finance ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:{active:e.selectedThemes.includes("bourse")},attrs:{id:"bourse"},on:{click:function(t){return e.clickedTheme("bourse")}}},[e._v(" Bourse ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:{active:e.selectedThemes.includes("politique")},attrs:{id:"politique"},on:{click:function(t){return e.clickedTheme("politique")}}},[e._v(" Politique ")]):e._e()]),s("button",{staticClass:"next-button",on:{click:e.themeValidator}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right"}})],1)])])},p=[],v=(s("caad"),s("2532"),s("a434"),s("e9c4"),{name:"themeChoice",data:function(){return{selectedThemes:[],selectedSources:[]}},mounted:function(){var e=JSON.parse(window.localStorage.getItem("memoryThemes"));e&&(this.selectedThemes=e);var t=JSON.parse(window.localStorage.getItem("selectedSources"));t&&(this.selectedSources=t)},methods:{clickedTheme:function(e){var t=this.selectedThemes,s=this;if(t.includes(e)){var c=t.indexOf(e);t.splice(c,1),s.selectedThemes=t}else s.selectedThemes.push(e)},clickedSource:function(e){var t=this.selectedSources,s=this;if(t.includes(e)){var c=t.indexOf(e);t.splice(c,1),s.selectedSources=t}else s.selectedSources.push(e)},themeValidator:function(){var e=this.selectedThemes,t=this.selectedSources;0==t.length?alert("choisissez au moins une source 😉"):0==e.length?alert("choisissez au moins un thème 😉"):(window.localStorage.setItem("selectedThemes",JSON.stringify(e)),window.localStorage.setItem("selectedSources",JSON.stringify(t)),window.localStorage.removeItem("memoryThemes"),this.$router.push("/actu"))}}}),g=v,S=(s("34bc"),Object(r["a"])(g,f,p,!1,null,"51eb43e2",null)),_=S.exports,w={name:"Home",mounted:function(){var e=JSON.parse(window.localStorage.getItem("selectedThemes"));e&&this.$router.push("/actu")},components:{themeChoice:_}},b=w,T=Object(r["a"])(b,m,h,!1,null,null,null),k=T.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"actu"},[s("articlesDisplayer"),"loading"==e.status?s("loadingSpinner"):e._e()],1)},y=[],A=s("5530"),x=s("2f62"),C=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"articles-displayer"},[e._l(e.returnedArticles,(function(t){return c("div",{key:t.id,class:[e.seenArticles&&e.seenArticles.includes(t.uniqueId)?"un-displayed":"","card-container"],attrs:{id:"id"+t.uniqueId}},[c("div",{staticClass:"inside-card"},[c("img",{staticClass:"article-img",attrs:{src:t.img,alt:"image descriptive de l'article"}}),c("h2",[e._v(e._s(t.title))]),c("p",{staticClass:"themeInfo"},[e._v(e._s(t.theme))]),c("div",{staticClass:"buttons"},[c("button",{staticClass:"buttons--choice buttons--dislike",on:{click:function(s){return e.nextArticle(t.uniqueId)}}},[c("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1),c("a",{staticClass:"buttons--choice buttons--like",attrs:{href:t.url,target:"_blank"},on:{click:function(s){return e.seenArticle(t.uniqueId)}}},[c("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart"}})],1)]),"20minutes"==t.source?c("img",{staticClass:"source-logo",attrs:{src:s("0ca8"),alt:"logo 20 minutes"}}):e._e(),"leFigaro"==t.source?c("img",{staticClass:"source-logo",attrs:{src:s("4c21"),alt:"logo le Figaro"}}):e._e(),"lesEchos"==t.source?c("img",{staticClass:"source-logo",attrs:{src:s("9869"),alt:"logo les Echos"}}):e._e()])])})),e._m(0)],2)},E=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"end-message"},[s("h3",[e._v("C'est fini pour aujourd'hui !")]),s("p",[e._v("Revenez demain pour de nouvelles actus !")])])}],j={name:"articlesDisplayer",data:function(){return{seenArticles:[]}},computed:Object(A["a"])({},Object(x["b"])({returnedArticles:"returnedArticles"})),mounted:function(){var e=JSON.parse(window.localStorage.getItem("selectedThemes")),t=JSON.parse(window.localStorage.getItem("selectedSources")),s={selectedSources:t,selectedThemes:e};this.$store.dispatch("getSpecifiedArticles",s),this.seenArticles=JSON.parse(window.localStorage.getItem("seenArticles"))},methods:{nextArticle:function(e){var t=this;this.$el.querySelector("#id".concat(e)).setAttribute("class","card-container slide-effect"),setTimeout((function(){t.seenArticles.push(e),window.localStorage.setItem("seenArticles",JSON.stringify(t.seenArticles))}),"1000")},seenArticle:function(e){var t=this;this.$el.querySelector("#id".concat(e)).setAttribute("class","card-container slide-effect-seen"),setTimeout((function(){t.seenArticles.push(e),window.localStorage.setItem("seenArticles",JSON.stringify(t.seenArticles))}),"1000")}}},I=j,$=(s("33fe"),Object(r["a"])(I,C,E,!1,null,"476325d6",null)),J=$.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading-spinner"},[s("div",{staticClass:"loader"},[e._v("Loading...")])])}],q={name:"loadingSpinner"},P=q,z=(s("964b"),Object(r["a"])(P,F,N,!1,null,"fc1d5194",null)),M=z.exports,D={name:"Actu",computed:Object(A["a"])({},Object(x["b"])({status:"status"})),mounted:function(){var e=JSON.parse(window.localStorage.getItem("seenArticles"));e||window.localStorage.setItem("seenArticles",JSON.stringify([]))},components:{articlesDisplayer:J,loadingSpinner:M}},H=D,L=Object(r["a"])(H,O,y,!1,null,null,null),V=L.exports;c["a"].use(d["a"]);var B=[{path:"/",name:"Home",component:k},{path:"/actu",name:"Actu",component:V}],R=new d["a"]({routes:B}),W=R,G=s("bc3a");c["a"].use(x["a"]);var K=new x["a"].Store({state:{selectThemesWindow:"",returnedArticles:[],status:""},mutations:{returnedArticles:function(e,t){e.returnedArticles=t},setStatus:function(e,t){e.status=t}},actions:{getSpecifiedArticles:function(e,t){var s=e.commit;s("setStatus","loading");var c=t;G({method:"post",url:"https://swipetonactuapi.herokuapp.com/news",data:c,headers:{"content-type":"application/json"}}).then((function(e){s("returnedArticles",e.data),s("setStatus","")})).catch((function(e){return e}))}},modules:{}}),Q=s("ecee"),U=s("c074"),X=s("ad3d");Q["c"].add(U["a"]),c["a"].component("font-awesome-icon",X["a"]),c["a"].config.productionTip=!1,new c["a"]({router:W,store:K,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"62f8":function(e,t,s){},"964b":function(e,t,s){"use strict";s("62f8")},9869:function(e,t,s){e.exports=s.p+"img/lesEchos-logo.642cf92f.png"},"9c0c":function(e,t,s){}});
//# sourceMappingURL=app.980a07c4.js.map