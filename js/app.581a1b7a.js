(function(e){function t(t){for(var i,o,l=t[0],a=t[1],r=t[2],d=0,m=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,r||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],i=!0,l=1;l<s.length;l++){var a=s[l];0!==n[a]&&(i=!1)}i&&(c.splice(t--,1),e=o(o.s=s[0]))}return e}var i={},n={app:0},c=[];function o(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=i,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var u=a;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"062c":function(e,t,s){},"0b0b":function(e,t,s){},"0ca8":function(e,t,s){e.exports=s.p+"img/20minutes-logo.6ce0469d.png"},"18d6":function(e,t,s){"use strict";s("38cb")},1943:function(e,t,s){},"2f69":function(e,t,s){e.exports=s.p+"img/lesEchos-logo.7818d993.jpg"},"36f4":function(e,t,s){},"38cb":function(e,t,s){},"45e9":function(e,t,s){"use strict";s("062c")},"4ab1":function(e,t,s){e.exports=s.p+"img/lePoint-logo.958ca6c8.jpg"},"4c21":function(e,t,s){e.exports=s.p+"img/leFigaro-logo.16447bc6.png"},"4fda":function(e,t,s){"use strict";s("8189")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],o=(s("5c0b"),s("2877")),l={},a=Object(o["a"])(l,n,c,!1,null,null,null),r=a.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("themeChoice")],1)},m=[],A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"theme-choice"},[s("router-link",{staticClass:"button setting-button",attrs:{to:"/settings"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-gear"}})],1),e._m(0),s("div",{staticClass:"choice-container"},[s("h3",[e._v("Choisissez vos sources 😄")]),s("ul",[s("li",{class:[e.selectedSources.includes("20minutes")?"source--button__active":"","source--button"],attrs:{id:"20minutes"},on:{click:function(t){return e.clickedSource("20minutes")}}},[e._v(" 20 minutes ")]),s("li",{class:[e.selectedSources.includes("lesEchos")?"source--button__active":"","source--button"],attrs:{id:"lesEchos"},on:{click:function(t){return e.clickedSource("lesEchos")}}},[e._v(" Les Echos ")]),s("li",{class:[e.selectedSources.includes("leFigaro")?"source--button__active":"","source--button"],attrs:{id:"leFigaro"},on:{click:function(t){return e.clickedSource("leFigaro")}}},[e._v(" Le Figaro ")]),s("li",{class:[e.selectedSources.includes("lexpress")?"source--button__active":"","source--button"],attrs:{id:"lexpress"},on:{click:function(t){return e.clickedSource("lexpress")}}},[e._v(" L'Express ")]),s("li",{class:[e.selectedSources.includes("lePoint")?"source--button__active":"","source--button"],attrs:{id:"lePoint"},on:{click:function(t){return e.clickedSource("lePoint")}}},[e._v(" le Point ")])]),0!=e.selectedSources.length?s("h3",[e._v("... et vos thèmes !")]):e._e(),s("ul",[e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")?s("li",{class:[e.selectedThemes.includes("actu-generale")?"source--button__active":"","source--button"],attrs:{id:"actu-generale"},on:{click:function(t){return e.clickedTheme("actu-generale")}}},[e._v(" Actu génèrale ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("leFigaro")?s("li",{class:[e.selectedThemes.includes("sport")?"source--button__active":"","source--button"],attrs:{id:"sport"},on:{click:function(t){return e.clickedTheme("sport")}}},[e._v(" Sport ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:[e.selectedThemes.includes("entertainment")?"source--button__active":"","source--button"],attrs:{id:"entertainment"},on:{click:function(t){return e.clickedTheme("entertainment")}}},[e._v(" Entertainment ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")||e.selectedSources.includes("leFigaro")||e.selectedSources.includes("lePoint")?s("li",{class:[e.selectedThemes.includes("economie")?"source--button__active":"","source--button"],attrs:{id:"economie"},on:{click:function(t){return e.clickedTheme("economie")}}},[e._v(" Economie ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("lexpress")?s("li",{class:[e.selectedThemes.includes("planete")?"source--button__active":"","source--button"],attrs:{id:"planete"},on:{click:function(t){return e.clickedTheme("planete")}}},[e._v(" Planète ")]):e._e(),e.selectedSources.includes("20minutes")?s("li",{class:[e.selectedThemes.includes("insolite")?"source--button__active":"","source--button"],attrs:{id:"insolite"},on:{click:function(t){return e.clickedTheme("insolite")}}},[e._v(" insolite ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("leFigaro")?s("li",{class:[e.selectedThemes.includes("desintox")?"source--button__active":"","source--button"],attrs:{id:"desintox"},on:{click:function(t){return e.clickedTheme("desintox")}}},[e._v(" desintox ")]):e._e(),e.selectedSources.includes("20minutes")||e.selectedSources.includes("lesEchos")||e.selectedSources.includes("leFigaro")||e.selectedSources.includes("lexpress")||e.selectedSources.includes("lePoint")?s("li",{class:[e.selectedThemes.includes("high-tech")?"source--button__active":"","source--button"],attrs:{id:"high-tech"},on:{click:function(t){return e.clickedTheme("high-tech")}}},[e._v(" High-tech ")]):e._e(),e.selectedSources.includes("leFigaro")||e.selectedSources.includes("lexpress")||e.selectedSources.includes("lePoint")?s("li",{class:[e.selectedThemes.includes("sciences")?"source--button__active":"","source--button"],attrs:{id:"sciences"},on:{click:function(t){return e.clickedTheme("sciences")}}},[e._v(" Sciences ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:[e.selectedThemes.includes("finance")?"source--button__active":"","source--button"],attrs:{id:"finance"},on:{click:function(t){return e.clickedTheme("finance")}}},[e._v(" Finance ")]):e._e(),e.selectedSources.includes("lesEchos")?s("li",{class:[e.selectedThemes.includes("bourse")?"source--button__active":"","source--button"],attrs:{id:"bourse"},on:{click:function(t){return e.clickedTheme("bourse")}}},[e._v(" Bourse ")]):e._e(),e.selectedSources.includes("lesEchos")||e.selectedSources.includes("lexpress")||e.selectedSources.includes("lePoint")?s("li",{class:[e.selectedThemes.includes("politique")?"source--button__active":"","source--button"],attrs:{id:"politique"},on:{click:function(t){return e.clickedTheme("politique")}}},[e._v(" Politique ")]):e._e(),e.selectedSources.includes("lexpress")||e.selectedSources.includes("lePoint")?s("li",{class:[e.selectedThemes.includes("idee-debats")?"source--button__active":"","source--button"],attrs:{id:"idee-debats"},on:{click:function(t){return e.clickedTheme("idee-debats")}}},[e._v(" Idée - débats ")]):e._e()])]),s("button",{staticClass:"button next-button",on:{click:e.themeValidator}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right"}})],1)],1)},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("span",{staticClass:"swipe"},[e._v("Swipe")]),e._v(" "),s("span",{staticClass:"news"},[e._v("news")])])}],g=(s("caad"),s("2532"),s("a434"),s("e9c4"),{name:"themeChoice",data:function(){return{selectedThemes:[],selectedSources:[]}},mounted:function(){var e=JSON.parse(window.localStorage.getItem("memoryThemes"));e&&(this.selectedThemes=e);var t=JSON.parse(window.localStorage.getItem("selectedSources"));t&&(this.selectedSources=t)},methods:{clickedTheme:function(e){var t=this.selectedThemes,s=this;if(t.includes(e)){var i=t.indexOf(e);t.splice(i,1),s.selectedThemes=t}else s.selectedThemes.push(e)},clickedSource:function(e){var t=this.selectedSources,s=this;if(t.includes(e)){var i=t.indexOf(e);t.splice(i,1),s.selectedSources=t}else s.selectedSources.push(e)},themeValidator:function(){var e=this.selectedThemes,t=this.selectedSources;0==t.length?alert("choisissez au moins une source 😉"):0==e.length?alert("choisissez au moins un thème 😉"):(window.localStorage.setItem("selectedThemes",JSON.stringify(e)),window.localStorage.setItem("selectedSources",JSON.stringify(t)),window.localStorage.removeItem("memoryThemes"),this.$router.push("/actu"))}}}),h=g,v=(s("4fda"),Object(o["a"])(h,A,f,!1,null,null,null)),p=v.exports,w={name:"Home",mounted:function(){var e=JSON.parse(window.localStorage.getItem("selectedThemes"));e&&this.$router.push("/actu")},components:{themeChoice:p}},S=w,b=Object(o["a"])(S,d,m,!1,null,null,null),_=b.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"actu"},[s("headerComponent"),s("articlesDisplayer"),s("actionButtons"),"loading"==e.status?s("loadingSpinner"):e._e(),1==e.notification?s("notification"):e._e()],1)},E=[],k=s("5530"),I=s("2f62"),B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"articles-displayer"},[e._l(e.returnedArticles,(function(t){return i("div",{key:t.id,class:[e.seenArticles&&e.seenArticles.includes("id"+t.uniqueId)?"un-displayed":"unseen-article","card-container"],attrs:{id:"id"+t.uniqueId}},[i("div",{directives:[{name:"hammer",rawName:"v-hammer:pan",value:e.onPan,expression:"onPan",arg:"pan"}],staticClass:"inside-card"},[i("img",{staticClass:"article-img",attrs:{src:t.img,alt:"image descriptive de l'article"}}),i("h2",[e._v(e._s(t.title))]),i("p",{staticClass:"themeInfo"},[e._v(e._s(t.theme))]),"20minutes"==t.source?i("img",{staticClass:"source-logo",attrs:{src:s("0ca8"),alt:"logo 20 minutes"}}):e._e(),"leFigaro"==t.source?i("img",{staticClass:"source-logo",attrs:{src:s("4c21"),alt:"logo le Figaro"}}):e._e(),"lesEchos"==t.source?i("img",{staticClass:"source-logo",attrs:{src:s("2f69"),alt:"logo les Echos"}}):e._e(),"lexpress"==t.source?i("img",{staticClass:"source-logo",attrs:{src:s("a3ae"),alt:"logo l'Express"}}):e._e(),"lePoint"==t.source?i("img",{staticClass:"source-logo",attrs:{src:s("4ab1"),alt:"logo le Point"}}):e._e(),i("p",{staticClass:"un-displayed"},[e._v(e._s(t.url))])])])})),e.savedArticles&&0!=e.savedArticles.length||e.notification?i("div",{staticClass:"notification"}):e._e(),e._m(0)],2)},T=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"end-message"},[s("h3",[e._v("C'est fini ...😞")]),s("p",[e._v("Revenez plus tard pour de nouvelles actus !")])])}],x=(s("99af"),{name:"articlesDisplayer",data:function(){return{seenArticles:[],savedArticles:[]}},computed:Object(k["a"])({},Object(I["b"])({returnedArticles:"returnedArticles",notification:"notification"})),mounted:function(){var e=JSON.parse(window.localStorage.getItem("selectedThemes")),t=JSON.parse(window.localStorage.getItem("selectedSources")),s={selectedSources:t,selectedThemes:e};this.$store.dispatch("getSpecifiedArticles",s),window.localStorage.getItem("seenArticles")&&(this.seenArticles=JSON.parse(window.localStorage.getItem("seenArticles"))),window.localStorage.getItem("savedArticles")&&(this.savedArticles=JSON.parse(window.localStorage.getItem("savedArticles")))},methods:{onPan:function(e){var t=this;window.localStorage.getItem("seenArticles")&&(this.seenArticles=JSON.parse(window.localStorage.getItem("seenArticles"))),window.localStorage.getItem("savedArticles")&&(this.savedArticles=JSON.parse(window.localStorage.getItem("savedArticles")));var s=45,i=.3,n=20,c=e.deltaX,o=Math.max(0,Math.abs(c*i)-n),l="inside-card"==e.target.className?e.target:e.target.offsetParent;"inside-card"==e.target.className&&(l=l.offsetParent),l.classList.remove("resetPos-card");var a=c<0?Math.max(c*i/100,-1)*s:Math.min(c*i/100,1)*s;l.style.transform="translateX(".concat(c,"px) translateY(").concat(o,"px) rotate(").concat(a,"deg)"),l.classList.remove("liking-card"),l.classList.remove("disliking-card"),c>150?l.classList.add("liking-card"):c<-150&&l.classList.add("disliking-card");var r=l.children[0].children[4].innerText,u=l.children[0].children[1].innerText;e.isFinal&&(l.style.transform="",c>150?(l.classList.add("liked-card"),setTimeout((function(){l.classList.add("un-displayed"),t.seenArticles.push(l.id),window.localStorage.setItem("seenArticles",JSON.stringify(t.seenArticles)),t.savedArticles.push({title:u,url:r}),window.localStorage.setItem("savedArticles",JSON.stringify(t.savedArticles));var e=[];e.push({title:u,url:r}),t.$store.commit("likedArticle",e),t.$store.commit("notification")}),"400")):c<-150?(l.classList.add("disliked-card"),setTimeout((function(){l.classList.add("un-displayed"),t.seenArticles.push(l.id),window.localStorage.setItem("seenArticles",JSON.stringify(t.seenArticles))}),"400")):l.classList.add("resetPos-card"))}}}),Q=x,y=(s("91d2"),Object(o["a"])(Q,B,T,!1,null,"01bfe10c",null)),D=y.exports,J=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading-spinner"},[s("div",{staticClass:"card-loader"},[s("div",{staticClass:"inside-card-loader"},[s("div",{staticClass:"img-loader bg-loader"}),s("div",{staticClass:"text-loader bg-loader"}),s("div",{staticClass:"text-loader bg-loader"}),s("div",{staticClass:"logo-loader bg-loader"})])])])}],G={name:"loadingSpinner"},M=G,j=(s("45e9"),Object(o["a"])(M,J,O,!1,null,"ec1cf79a",null)),P=j.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav"},[s("a",{staticClass:"button rounded",on:{click:e.removeThemes}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-list-check"}})],1),e._m(0),s("router-link",{staticClass:"button rounded",attrs:{to:"/articles"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-inbox"}})],1)],1)},L=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("span",{staticClass:"swipe"},[e._v("Swipe")]),e._v(" "),s("span",{staticClass:"news"},[e._v("news")])])}],N={name:"header",methods:{removeThemes:function(){var e=this;window.localStorage.setItem("memoryThemes",window.localStorage.getItem("selectedThemes")),window.localStorage.removeItem("selectedThemes"),setTimeout((function(){e.$router.push("/")}),"500")}}},q=N,H=(s("f42d"),Object(o["a"])(q,Y,L,!1,null,null,null)),Z=H.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"action-buttons"},[s("button",{staticClass:"button button-style dislike-button",on:{click:function(t){return e.dislike()}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1),s("button",{staticClass:"button button-style like-button",on:{click:function(t){return e.like()}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart"}})],1)])},F=[],$={name:"actionButtons",data:function(){return{actuArr:[],seenArticles:[],savedArticles:[]}},mounted:function(){this.actuArr=this.$parent.$el.children[1].children,this.index=this.$parent.$el.children[1].children.length-1},methods:{like:function(){var e=this;window.localStorage.getItem("seenArticles")&&(this.seenArticles=JSON.parse(window.localStorage.getItem("seenArticles"))),window.localStorage.getItem("savedArticles")&&(this.savedArticles=JSON.parse(window.localStorage.getItem("savedArticles")));var t=this.$parent.$el.children[1].querySelectorAll(".unseen-article"),s=t.length-1,i=t[s].children[0].children[1].innerText,n=t[s].children[0].children[4].innerText;t[s].classList.add("liked-card"),setTimeout((function(){t[s].classList.add("un-displayed"),t[s].classList.remove("unseen-article"),e.seenArticles.push(t[s].id),window.localStorage.setItem("seenArticles",JSON.stringify(e.seenArticles)),e.savedArticles.push({title:i,url:n}),window.localStorage.setItem("savedArticles",JSON.stringify(e.savedArticles))}),"400");var c=[];c.push({title:i,url:n}),this.$store.commit("likedArticle",c),this.$store.commit("notification")},dislike:function(){var e=this;window.localStorage.getItem("seenArticles")&&(this.seenArticles=JSON.parse(window.localStorage.getItem("seenArticles")));var t=this.$parent.$el.children[1].querySelectorAll(".unseen-article"),s=t.length-1;t[s].classList.add("disliked-card"),setTimeout((function(){t[s].classList.add("un-displayed"),t[s].classList.remove("unseen-article"),e.seenArticles.push(t[s].id),window.localStorage.setItem("seenArticles",JSON.stringify(e.seenArticles))}),"400")}}},W=$,V=(s("5763"),Object(o["a"])(W,R,F,!1,null,null,null)),U=V.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"notification-pop"},[s("a",{attrs:{href:e.likedArticle[0].url,target:"_blank"}},[s("div",[s("p",[e._v(e._s(e.likedArticle[0].title))])]),s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)])},K=[],X={name:"notification",computed:Object(k["a"])({},Object(I["b"])({likedArticle:"likedArticle"}))},ee=X,te=(s("18d6"),Object(o["a"])(ee,z,K,!1,null,"0124e38c",null)),se=te.exports,ie={name:"Actu",computed:Object(k["a"])({},Object(I["b"])({status:"status",notification:"notification"})),mounted:function(){var e=JSON.parse(window.localStorage.getItem("seenArticles"));e||window.localStorage.setItem("seenArticles",JSON.stringify([]))},components:{articlesDisplayer:D,loadingSpinner:P,headerComponent:Z,actionButtons:U,notification:se}},ne=ie,ce=Object(o["a"])(ne,C,E,!1,null,null,null),oe=ce.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("settingsComponent")],1)},ae=[],re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"settings"},[s("router-link",{staticClass:"button back-button",attrs:{to:"/"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),e._m(0),s("div",{staticClass:"main-buttons"},[s("button",{staticClass:"button big-button"},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-info"}}),e._v("À propos")],1),s("button",{staticClass:"button big-button",on:{click:function(t){return e.deletehistory()}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}}),e._v("Supprimer l'historique")],1),s("a",{staticClass:"button big-button",attrs:{href:"mailto:nico.maitre@laposte.net"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope"}}),e._v("Contactez moi !")],1)]),s("p",{staticClass:"credits"},[e._v("Nicolas Maitre - 2022")])],1)},ue=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("span",{staticClass:"swipe"},[e._v("Swipe")]),e._v(" "),s("span",{staticClass:"news"},[e._v("news")])])}],de={methods:{deletehistory:function(){var e=this;confirm("Êtes-vous sûre de vouloir effacer l'historique de l'application ?")&&(window.localStorage.removeItem("selectedSources"),window.localStorage.removeItem("selectedThemes"),window.localStorage.removeItem("memoryThemes"),window.localStorage.removeItem("seenArticles"),window.localStorage.removeItem("savedArticles"),setTimeout((function(){e.$router.push("/")}),"200"))}}},me=de,Ae=(s("dabe"),Object(o["a"])(me,re,ue,!1,null,null,null)),fe=Ae.exports,ge={name:"Settings",components:{settingsComponent:fe}},he=ge,ve=Object(o["a"])(he,le,ae,!1,null,null,null),pe=ve.exports,we=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"articles"},[s("savedArticlesComponent")],1)},Se=[],be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"saved-articles"},[s("router-link",{staticClass:"button back-button",attrs:{to:"/actu"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),e._m(0),0!=e.savedArticles.length?s("div",{staticClass:"list-articles"},e._l(e.savedArticles.slice().reverse(),(function(t){return s("div",{key:t.title,staticClass:"one-article"},[s("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.title))]),s("button",{on:{click:function(s){e.deleteArticle(e.savedArticles.indexOf(t))}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1),s("p",{staticClass:"un-displayed"},[e._v(e._s(e.savedArticles.indexOf(t)))])])})),0):e._e(),0==e.savedArticles.length?s("div",{staticClass:"info-message"},[s("p",[e._v('Les actus que vous avez "liké" apparaîtront ici 😉')])]):e._e()],1)},_e=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("span",{staticClass:"swipe"},[e._v("Swipe")]),e._v(" "),s("span",{staticClass:"news"},[e._v("news")])])}],Ce={name:"articleWindow",data:function(){return{savedArticles:[]}},mounted:function(){window.localStorage.getItem("savedArticles")&&(this.savedArticles=JSON.parse(window.localStorage.getItem("savedArticles")))},methods:{deleteArticle:function(e){this.savedArticles.splice(e,1),window.localStorage.setItem("savedArticles",JSON.stringify(this.savedArticles))}}},Ee=Ce,ke=(s("6cf7"),Object(o["a"])(Ee,be,_e,!1,null,null,null)),Ie=ke.exports,Be={name:"Settings",components:{savedArticlesComponent:Ie}},Te=Be,xe=Object(o["a"])(Te,we,Se,!1,null,null,null),Qe=xe.exports;i["a"].use(u["a"]);var ye=[{path:"/",name:"Home",component:_},{path:"/actu",name:"Actu",component:oe},{path:"/settings",name:"Settings",component:pe},{path:"/articles",name:"Articles",component:Qe}],De=new u["a"]({routes:ye}),Je=De,Oe=s("bc3a");i["a"].use(I["a"]);var Ge=new I["a"].Store({state:{selectThemesWindow:"",returnedArticles:[],status:"",likedArticle:[],notification:!1},mutations:{returnedArticles:function(e,t){e.returnedArticles=t},setStatus:function(e,t){e.status=t},likedArticle:function(e,t){e.likedArticle=t},notification:function(e){e.notification=!0,console.log("test"),setTimeout((function(){e.notification=!1}),5e3)}},actions:{getSpecifiedArticles:function(e,t){var s=e.commit;s("setStatus","loading");var i=t;Oe({method:"post",url:"https://swipetonactuapi.herokuapp.com/news",data:i,headers:{"content-type":"application/json"}}).then((function(e){s("returnedArticles",e.data),s("setStatus","")})).catch((function(e){return e}))}},modules:{}}),Me=s("ecee"),je=s("c074"),Pe=s("ad3d"),Ye=s("6591");i["a"].use(Ye["VueHammer"]),Me["c"].add(je["a"]),i["a"].component("font-awesome-icon",Pe["a"]),i["a"].config.productionTip=!1,new i["a"]({router:Je,store:Ge,render:function(e){return e(r)}}).$mount("#app")},5763:function(e,t,s){"use strict";s("0b0b")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"6cf7":function(e,t,s){"use strict";s("36f4")},8189:function(e,t,s){},"91d2":function(e,t,s){"use strict";s("1943")},"9c0c":function(e,t,s){},a3ae:function(e,t){e.exports="data:image/png;base64,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"},dabe:function(e,t,s){"use strict";s("f03e")},f03e:function(e,t,s){},f42d:function(e,t,s){"use strict";s("f746")},f746:function(e,t,s){}});
//# sourceMappingURL=app.581a1b7a.js.map