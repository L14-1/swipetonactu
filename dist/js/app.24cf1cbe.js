(function(e){function t(t){for(var n,a,o=t[0],l=t[1],r=t[2],d=0,m=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,r||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},i={app:0},c=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/swipetonactu/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var u=l;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0b0b":function(e,t,s){},"0c9f":function(e,t,s){},"0ca8":function(e,t,s){e.exports=s.p+"img/20minutes-logo.6ce0469d.png"},"35ca":function(e,t,s){"use strict";s("92a5")},"36f4":function(e,t,s){},"497e":function(e,t,s){"use strict";s("0c9f")},"4c21":function(e,t,s){e.exports=s.p+"img/leFigaro-logo.16447bc6.png"},"4fda":function(e,t,s){"use strict";s("8189")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],a=(s("5c0b"),s("2877")),o={},l=Object(a["a"])(o,i,c,!1,null,null,null),r=l.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("themeChoice")],1)},m=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"theme-choice"},[s("router-link",{staticClass:"button setting-button",attrs:{to:"/settings"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-gear"}})],1),s("div",{staticClass:"choice-container"},[s("h3",[e._v("Choisissez vos sources 😄")]),s("ul",[s("li",{class:[e.selectedSources.includes("20minutes")?"activeBtn":"","button"],attrs:{id:"20minutes"},on:{click:function(t){return e.clickedSource("20minutes")}}},[e._v(" 20 minutes ")]),s("li",{class:[e.selectedSources.includes("lesEchos")?"activeBtn":"","button"],attrs:{id:"lesEchos"},on:{click:function(t){return e.clickedSource("lesEchos")}}},[e._v(" Les Echos ")]),s("li",{class:[e.selectedSources.includes("leFigaro")?"activeBtn":"","button"],attrs:{id:"leFigaro"},on:{click:function(t){return e.clickedSource("leFigaro")}}},[e._v(" Le Figaro ")])]),0!=e.selectedSources.length?s("h3",[e._v("... et vos thèmes !")]):e._e(),s("ul",[e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")?s("li",{class:[e.selectedThemes.includes("actu-generale")?"activeBtn":"","button"],attrs:{id:"actu-generale"},on:{click:function(t){return e.clickedTheme("actu-generale")}}},[e._v(" Actu génèrale ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("leFigaro")?s("li",{class:[e.selectedThemes.includes("sport")?"activeBtn":"","button"],attrs:{id:"sport"},on:{click:function(t){return e.clickedTheme("sport")}}},[e._v(" Sport ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:[e.selectedThemes.includes("entertainment")?"activeBtn":"","button"],attrs:{id:"entertainment"},on:{click:function(t){return e.clickedTheme("entertainment")}}},[e._v(" Entertainment ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")||e.selectedSources.includes("leFigaro")?s("li",{class:[e.selectedThemes.includes("economie")?"activeBtn":"","button"],attrs:{id:"economie"},on:{click:function(t){return e.clickedTheme("economie")}}},[e._v(" Economie ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:[e.selectedThemes.includes("planete")?"activeBtn":"","button"],attrs:{id:"planete"},on:{click:function(t){return e.clickedTheme("planete")}}},[e._v(" Planète ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:[e.selectedThemes.includes("insolite")?"activeBtn":"","button"],attrs:{id:"insolite"},on:{click:function(t){return e.clickedTheme("insolite")}}},[e._v(" insolite ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("leFigaro")?s("li",{class:[e.selectedThemes.includes("desintox")?"activeBtn":"","button"],attrs:{id:"desintox"},on:{click:function(t){return e.clickedTheme("desintox")}}},[e._v(" desintox ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")||e.selectedSources.includes("leFigaro")?s("li",{class:[e.selectedThemes.includes("high-tech")?"activeBtn":"","button"],attrs:{id:"high-tech"},on:{click:function(t){return e.clickedTheme("high-tech")}}},[e._v(" High-tech ")]):e._e(),e.selectedSources.includes("leFigaro")?s("li",{class:[e.selectedThemes.includes("sciences")?"activeBtn":"","button"],attrs:{id:"sciences"},on:{click:function(t){return e.clickedTheme("sciences")}}},[e._v(" Sciences ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:[e.selectedThemes.includes("finance")?"activeBtn":"","button"],attrs:{id:"finance"},on:{click:function(t){return e.clickedTheme("finance")}}},[e._v(" Finance ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:[e.selectedThemes.includes("bourse")?"activeBtn":"","button"],attrs:{id:"bourse"},on:{click:function(t){return e.clickedTheme("bourse")}}},[e._v(" Bourse ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:[e.selectedThemes.includes("politique")?"activeBtn":"","button"],attrs:{id:"politique"},on:{click:function(t){return e.clickedTheme("politique")}}},[e._v(" Politique ")]):e._e()])]),s("button",{staticClass:"button next-button",on:{click:e.themeValidator}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right"}})],1)],1)},h=[],v=(s("caad"),s("2532"),s("a434"),s("e9c4"),{name:"themeChoice",data:function(){return{selectedThemes:[],selectedSources:[]}},mounted:function(){var e=JSON.parse(window.localStorage.getItem("memoryThemes"));e&&(this.selectedThemes=e);var t=JSON.parse(window.localStorage.getItem("selectedSources"));t&&(this.selectedSources=t)},methods:{clickedTheme:function(e){var t=this.selectedThemes,s=this;if(t.includes(e)){var n=t.indexOf(e);t.splice(n,1),s.selectedThemes=t}else s.selectedThemes.push(e)},clickedSource:function(e){var t=this.selectedSources,s=this;if(t.includes(e)){var n=t.indexOf(e);t.splice(n,1),s.selectedSources=t}else s.selectedSources.push(e)},themeValidator:function(){var e=this.selectedThemes,t=this.selectedSources;0==t.length?alert("choisissez au moins une source 😉"):0==e.length?alert("choisissez au moins un thème 😉"):(window.localStorage.setItem("selectedThemes",JSON.stringify(e)),window.localStorage.setItem("selectedSources",JSON.stringify(t)),window.localStorage.removeItem("memoryThemes"),this.$router.push("/actu"))}}}),p=v,g=(s("4fda"),Object(a["a"])(p,f,h,!1,null,null,null)),_=g.exports,b={name:"Home",mounted:function(){var e=JSON.parse(window.localStorage.getItem("selectedThemes"));e&&this.$router.push("/actu")},components:{themeChoice:_}},S=b,w=Object(a["a"])(S,d,m,!1,null,null,null),k=w.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"actu"},[s("headerComponent"),s("articlesDisplayer"),s("actionButtons"),"loading"==e.status?s("loadingSpinner"):e._e()],1)},T=[],A=s("5530"),O=s("2f62"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"articles-displayer"},[e._l(e.returnedArticles,(function(t){return n("div",{key:t.id,class:[e.seenArticles&&e.seenArticles.includes("id"+t.uniqueId)?"un-displayed":"","card-container"],attrs:{id:"id"+t.uniqueId}},[n("div",{directives:[{name:"hammer",rawName:"v-hammer:pan",value:e.onPan,expression:"onPan",arg:"pan"}],staticClass:"inside-card"},[n("img",{staticClass:"article-img",attrs:{src:t.img,alt:"image descriptive de l'article"}}),n("h2",[e._v(e._s(t.title))]),n("p",{staticClass:"themeInfo"},[e._v(e._s(t.theme))]),"20minutes"==t.source?n("img",{staticClass:"source-logo",attrs:{src:s("0ca8"),alt:"logo 20 minutes"}}):e._e(),"leFigaro"==t.source?n("img",{staticClass:"source-logo",attrs:{src:s("4c21"),alt:"logo le Figaro"}}):e._e(),"lesEchos"==t.source?n("img",{staticClass:"source-logo",attrs:{src:s("9869"),alt:"logo les Echos"}}):e._e(),n("p",{staticClass:"un-displayed"},[e._v(e._s(t.url))])])])})),e._m(0)],2)},y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"end-message"},[s("h3",[e._v("C'est fini ...😞")]),s("p",[e._v("Revenez plus tard pour de nouvelles actus !")])])}],E=(s("99af"),{name:"articlesDisplayer",data:function(){return{seenArticles:[],savedArticles:[]}},computed:Object(A["a"])({},Object(O["b"])({returnedArticles:"returnedArticles"})),mounted:function(){var e=JSON.parse(window.localStorage.getItem("selectedThemes")),t=JSON.parse(window.localStorage.getItem("selectedSources")),s={selectedSources:t,selectedThemes:e};this.$store.dispatch("getSpecifiedArticles",s),this.seenArticles=JSON.parse(window.localStorage.getItem("seenArticles")),window.localStorage.getItem("savedArticles")&&(this.savedArticles=JSON.parse(window.localStorage.getItem("savedArticles")))},methods:{onPan:function(e){var t=this,s=45,n=.3,i=20,c=e.deltaX,a=Math.max(0,Math.abs(c*n)-i),o="inside-card"==e.target.className?e.target:e.target.offsetParent;"inside-card"==e.target.className&&(o=o.offsetParent),o.classList.remove("resetPos-card");var l=c<0?Math.max(c*n/100,-1)*s:Math.min(c*n/100,1)*s;o.style.transform="translateX(".concat(c,"px) translateY(").concat(a,"px) rotate(").concat(l,"deg)"),o.classList.remove("liking-card"),o.classList.remove("disliking-card"),c>150?o.classList.add("liking-card"):c<-150&&o.classList.add("disliking-card");var r=o.children[0].children[4].innerText,u=o.children[0].children[1].innerText;e.isFinal&&(o.style.transform="",c>150?(o.classList.add("liked-card"),setTimeout((function(){o.classList.add("un-displayed"),t.seenArticles.push(o.id),window.localStorage.setItem("seenArticles",JSON.stringify(t.seenArticles)),t.savedArticles.push({title:u,url:r}),window.localStorage.setItem("savedArticles",JSON.stringify(t.savedArticles))}),"400")):c<-150?(o.classList.add("disliked-card"),setTimeout((function(){o.classList.add("un-displayed"),t.seenArticles.push(o.id),window.localStorage.setItem("seenArticles",JSON.stringify(t.seenArticles))}),"400")):o.classList.add("resetPos-card"))}}}),$=E,I=(s("497e"),Object(a["a"])($,x,y,!1,null,"2878f402",null)),j=I.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading-spinner"},[s("div",{staticClass:"card-loader"},[s("div",{staticClass:"inside-card-loader"},[s("div",{staticClass:"img-loader bg-loader"}),s("div",{staticClass:"text-loader bg-loader"}),s("div",{staticClass:"text-loader bg-loader"}),s("div",{staticClass:"logo-loader bg-loader"})])])])}],J={name:"loadingSpinner"},P=J,F=(s("35ca"),Object(a["a"])(P,N,B,!1,null,"00670d48",null)),L=F.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav"},[s("a",{staticClass:"button rounded",on:{click:e.removeThemes}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-list-check"}})],1),e._m(0),s("router-link",{staticClass:"button rounded",attrs:{to:"/articles"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-inbox"}})],1)],1)},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("span",{staticClass:"swipe"},[e._v("Swipe")]),e._v(" "),s("span",{staticClass:"news"},[e._v("news")])])}],z={name:"header",methods:{removeThemes:function(){var e=this;window.localStorage.setItem("memoryThemes",window.localStorage.getItem("selectedThemes")),window.localStorage.removeItem("selectedThemes"),setTimeout((function(){e.$router.push("/")}),"500")}}},H=z,D=(s("f42d"),Object(a["a"])(H,M,q,!1,null,null,null)),V=D.exports,W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"action-buttons"},[s("button",{staticClass:"button button-style dislike-button",on:{click:e.like}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1),s("button",{staticClass:"button button-style like-button"},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart"}})],1)])},X=[],R={name:"actionButtons",data:function(){return{index:0,actuArr:[]}},mounted:function(){console.log(this.$parent.$el.children[1].children),this.actuArr=this.$parent.$el.children[1].children,this.index=this.$parent.$el.children[1].children.length-1},methods:{like:function(){console.log(this.$parent.$el.children[1].children[this.index]),this.index--}}},Y=R,G=(s("5763"),Object(a["a"])(Y,W,X,!1,null,null,null)),K=G.exports,Q={name:"Actu",computed:Object(A["a"])({},Object(O["b"])({status:"status"})),mounted:function(){var e=JSON.parse(window.localStorage.getItem("seenArticles"));e||window.localStorage.setItem("seenArticles",JSON.stringify([]))},components:{articlesDisplayer:j,loadingSpinner:L,headerComponent:V,actionButtons:K}},U=Q,Z=Object(a["a"])(U,C,T,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("settingsComponent")],1)},se=[],ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"settings"},[s("router-link",{staticClass:"button back-button",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),e._m(0),s("div",{staticClass:"main-buttons"},[s("button",{staticClass:"button big-button"},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-info"}}),e._v("À propos")],1),s("button",{staticClass:"button big-button",on:{click:function(t){return e.deletehistory()}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}}),e._v("Supprimer l'historique")],1),s("button",{staticClass:"button big-button"},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope"}}),e._v("Contactez moi !")],1)]),s("p",{staticClass:"credits"},[e._v("Nicolas Maitre - 2022")])],1)},ie=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("span",{staticClass:"swipe"},[e._v("Swipe")]),e._v(" "),s("span",{staticClass:"news"},[e._v("news")])])}],ce={methods:{deletehistory:function(){var e=this;window.localStorage.removeItem("selectedSources"),window.localStorage.removeItem("selectedThemes"),window.localStorage.removeItem("memoryThemes"),window.localStorage.removeItem("seenArticles"),window.localStorage.removeItem("savedArticles"),setTimeout((function(){e.$router.push("/")}),"200")}}},ae=ce,oe=(s("dabe"),Object(a["a"])(ae,ne,ie,!1,null,null,null)),le=oe.exports,re={name:"Settings",components:{settingsComponent:le}},ue=re,de=Object(a["a"])(ue,te,se,!1,null,null,null),me=de.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"articles"},[s("savedArticlesComponent")],1)},he=[],ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"saved-articles"},[s("router-link",{staticClass:"button back-button",attrs:{to:"/actu"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),e._m(0),0!=e.savedArticles.length?s("div",{staticClass:"list-articles"},e._l(e.savedArticles,(function(t){return s("div",{key:t.title,staticClass:"one-article"},[s("a",{attrs:{href:t.url}},[e._v(e._s(t.title))]),s("button",{on:{click:function(s){e.deleteArticle(e.savedArticles.indexOf(t))}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1),s("p",{staticClass:"un-displayed"},[e._v(e._s(e.savedArticles.indexOf(t)))])])})),0):e._e(),0==e.savedArticles.length?s("div",{staticClass:"info-message"},[s("p",[e._v('Les actus que vous avez "liké" apparaîtront ici 😉')])]):e._e()],1)},pe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("span",{staticClass:"swipe"},[e._v("Swipe")]),e._v(" "),s("span",{staticClass:"news"},[e._v("news")])])}],ge={name:"articleWindow",data:function(){return{savedArticles:[]}},mounted:function(){window.localStorage.getItem("savedArticles")&&(this.savedArticles=JSON.parse(window.localStorage.getItem("savedArticles")))},methods:{deleteArticle:function(e){this.savedArticles.splice(e,1),window.localStorage.setItem("savedArticles",JSON.stringify(this.savedArticles))}}},_e=ge,be=(s("6cf7"),Object(a["a"])(_e,ve,pe,!1,null,null,null)),Se=be.exports,we={name:"Settings",components:{savedArticlesComponent:Se}},ke=we,Ce=Object(a["a"])(ke,fe,he,!1,null,null,null),Te=Ce.exports;n["a"].use(u["a"]);var Ae=[{path:"/",name:"Home",component:k},{path:"/actu",name:"Actu",component:ee},{path:"/settings",name:"Settings",component:me},{path:"/articles",name:"Articles",component:Te}],Oe=new u["a"]({routes:Ae}),xe=Oe,ye=s("bc3a");n["a"].use(O["a"]);var Ee=new O["a"].Store({state:{selectThemesWindow:"",returnedArticles:[],status:""},mutations:{returnedArticles:function(e,t){e.returnedArticles=t},setStatus:function(e,t){e.status=t}},actions:{getSpecifiedArticles:function(e,t){var s=e.commit;s("setStatus","loading");var n=t;ye({method:"post",url:"https://swipetonactuapi.herokuapp.com/news",data:n,headers:{"content-type":"application/json"}}).then((function(e){s("returnedArticles",e.data),s("setStatus","")})).catch((function(e){return e}))}},modules:{}}),$e=s("ecee"),Ie=s("c074"),je=s("ad3d"),Ne=s("6591");n["a"].use(Ne["VueHammer"]),$e["c"].add(Ie["a"]),n["a"].component("font-awesome-icon",je["a"]),n["a"].config.productionTip=!1,new n["a"]({router:xe,store:Ee,render:function(e){return e(r)}}).$mount("#app")},5763:function(e,t,s){"use strict";s("0b0b")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"6cf7":function(e,t,s){"use strict";s("36f4")},8189:function(e,t,s){},"92a5":function(e,t,s){},9869:function(e,t,s){e.exports=s.p+"img/lesEchos-logo.642cf92f.png"},"9c0c":function(e,t,s){},dabe:function(e,t,s){"use strict";s("f03e")},f03e:function(e,t,s){},f42d:function(e,t,s){"use strict";s("f746")},f746:function(e,t,s){}});
//# sourceMappingURL=app.24cf1cbe.js.map