(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{201:function(t,e,r){"use strict";var n=r(0),c=r(294);n.a.use(c.a)},202:function(t,e,r){"use strict";var n=r(296),c=r.n(n);r(0).a.component("Draggable",c.a)},203:function(t,e,r){"use strict";r(444);var n=r(0),c=r(94);n.a.use(c.a),e.a=new c.a({icons:{iconfont:"fa"}})},204:function(t,e,r){"use strict";var n=r(6),c=(r(38),r(3),r(40));e.a=function(t,e){t.$axios.interceptors.request.use(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth0.getTokenSilently({redirect_uri:"".concat(c.a.getWebSiteUrl(),"/auth/callback")});case 3:n=e.sent,r.headers={Authorization:"Bearer ".concat(n)},e.next=16;break;case 7:if(e.prev=7,e.t0=e.catch(0),"login_required"!==e.t0.error){e.next=15;break}return e.next=12,t.$auth0.loginWithRedirect({redirect_uri:"".concat(c.a.getWebSiteUrl(),"/auth/callback")});case 12:return e.abrupt("return",new Promise((function(t){})));case 15:throw e.t0;case 16:return e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),t.$axios.interceptors.response.use(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==r.status){e.next=4;break}return e.next=3,t.$auth0.loginWithRedirect({redirect_uri:"".concat(c.a.getWebSiteUrl(),"/auth/callback")});case 3:return e.abrupt("return",new Promise((function(t){})));case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},205:function(t,e,r){"use strict";var n=r(297);e.a=function(t){var e=t.store;Object(n.a)({key:"4taku",storage:window.sessionStorage})(e)}},206:function(t,e,r){"use strict";var n=r(6),c=(r(38),r(298)),o=r(40);e.a=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,t.next=3,Object(c.a)({domain:"dev-3gluojp2.us.auth0.com",client_id:"jeKC4wXFcPA04mo7GWMgVSVvlqb4E5kf",redirect_uri:"".concat(o.a.getWebSiteUrl(),"/auth/callback"),audience:"https://4taku-api-local"});case 3:n=t.sent,r("auth0",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},207:function(t,e,r){"use strict";var n=r(6);r(38);e.a=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("auth/confirmLoginStatus");case 2:if(!e.store.state.auth.isAuthenticated){t.next=6;break}return t.next=6,e.store.dispatch("account/getFromServer");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},272:function(t,e,r){var content=r(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("eb27f6ca",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";var n=r(6),c=(r(38),r(11),r(3),{name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/",condition:"none"},{icon:"mdi-chart-bubble",title:"ヒーロー４択評価",to:"/heros",condition:"accountValid"},{icon:"mdi-chart-bubble",title:"Tier表作成（試作中）",to:"/tiertable/edit",condition:"accountValid"},{icon:"mdi-chart-bubble",title:"Tier表一覧",to:"/tiertable/list",condition:"accountValid"},{icon:"mdi-chart-bubble",title:"アカウント設定",to:"/account/profile",condition:"accountInvalid"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},computed:{showitems:function(){var t=this;return this.items.filter((function(e){if("none"===e.condition)return!0;var r=t.$store.state.auth.isAuthenticated;return"accountValid"===e.condition?r&&t.$store.getters["account/isValid"]:"accountInvalid"===e.condition?r:void 0}))}},methods:{login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/login");case 2:case"end":return e.stop()}}),e)})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/logout");case 2:t.$store.commit("account/clearAccounts");case 3:case"end":return e.stop()}}),e)})))()}}}),o=r(95),f=r(135),l=r.n(f),d=r(470),h=r(475),v=r(471),m=r(218),x=r(476),k=r(472),w=r(192),_=r(193),R=r(131),j=r(194),O=r(93),y=r(473),A=r(477),V=r(474),P=r(231),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"\n  drawer"}},[r("v-list",t._l(t.showitems,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",src:"https://i3.gamebiz.jp/media/32ca2643-1845-42dd-a850-3f88e4ac5b2e.jpg"}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[r("v-icon",[t._v("mdi-application")])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[r("v-icon",[t._v("mdi-minus")])],1),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),this.$store.state.auth.isAuthenticated?t._e():r("v-btn",{on:{click:function(e){return t.login()}}},[t._v("ログインする")]),t._v(" "),this.$store.state.auth.isAuthenticated?r("v-btn",{on:{click:function(e){return t.logout()}}},[t._v("ログアウトする")]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("Nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VAppBar:h.a,VAppBarNavIcon:v.a,VBtn:m.a,VContainer:x.a,VFooter:k.a,VIcon:w.a,VList:_.a,VListItem:R.a,VListItemAction:j.a,VListItemContent:O.a,VListItemTitle:O.b,VMain:y.a,VNavigationDrawer:A.a,VSpacer:V.a,VToolbarTitle:P.a})},311:function(t,e,r){r(312),t.exports=r(313)},349:function(t,e,r){"use strict";r.r(e);r(66);e.default=function(t){var e=t.store,r=t.route,n=r.fullPath;n.startsWith("/login")||n.startsWith("/auth/")||e.commit("auth/setPath",r.fullPath)}},350:function(t,e,r){"use strict";r.r(e);var n=r(6);r(38),r(96),r(3);function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=function(meta){var t=meta.find((function(t){if(t.auth&&t.auth.authority)return 1}));return t?t.auth.authority:2}(e.route.meta),e.store.state.auth.isAuthenticated){t.next=9;break}return t.next=6,e.$auth0.loginWithRedirect();case 6:return t.abrupt("return",new Promise((function(t){})));case 9:r>1&&(e.store.getters["account/isValid"]||e.redirect("/account/profile"));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return c.apply(this,arguments)}},358:function(t,e,r){"use strict";r(272)},359:function(t,e,r){var n=r(22)(!1);n.push([t.i,"h1[data-v-b2edf2c6]{font-size:20px}",""]),t.exports=n},40:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(26),c=r(27),o=function(){function t(){Object(n.a)(this,t)}return Object(c.a)(t,null,[{key:"isDev",value:function(){return!1}},{key:"getAPIServerURL",value:function(){return t.isDev()?"http://localhost:8080":"https://service-4taku-api-api-4taku-direboar.cloud.okteto.net"}},{key:"getWebSiteUrl",value:function(){return t.isDev()?"http://localhost:3000/4taku-site":"https://direboar.github.io/4taku-site"}}]),t}()},420:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n}));var n=function(){return{auth:{}}}},421:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"getters",(function(){return f})),r.d(e,"mutations",(function(){return l})),r.d(e,"actions",(function(){return d}));var n=r(6),c=(r(38),r(32),r(40)),o=function(){return{account:{},loaded:!1}},f={isValid:function(t){return!!t.account.name&&""!==t.account.name},isTearTableSelected:function(t,e){return!!e.isValid&&!!t.account.tierTableId}},l={setAccount:function(t,e){t.loaded=!0,t.account=e},setName:function(t,e){t.account.name=e},setTearTable:function(t,e){t.account.tierTableId=e.tierTableId,t.account.tierTableName=e.tierTableName},clearAccounts:function(t,e){t.loaded=!1,t.account={}}},d={getFromServer:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.getters,n=t.commit,t.state.loaded){r.next=7;break}return o="".concat(c.a.getAPIServerURL(),"/accounts"),r.next=5,e.$axios({url:o,method:"GET"});case 5:f=r.sent,n("setAccount",f.data);case 7:case"end":return r.stop()}}),r)})))()},saveProfile:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,f,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.state,f=t.commit,!o.loaded){n.next=9;break}return f("setName",e),l="".concat(c.a.getAPIServerURL(),"/accounts"),n.next=6,r.$axios({url:l,method:"POST",data:o.account});case 6:if(200===n.sent.status){n.next=9;break}throw new Error("update failed");case 9:case"end":return n.stop()}}),n)})))()},saveTiertable:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,f,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.state,f=t.commit,!o.loaded){n.next=9;break}return f("setTearTable",e),l="".concat(c.a.getAPIServerURL(),"/accounts"),n.next=6,r.$axios({url:l,method:"POST",data:o.account});case 6:if(200===n.sent.status){n.next=9;break}throw new Error("update failed");case 9:case"end":return n.stop()}}),n)})))()}}},422:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return f})),r.d(e,"actions",(function(){return l}));var n=r(6),c=(r(38),r(40)),o=function(){return{path:"",isAuthenticated:!1}},f={setPath:function(t,path){t.path=path},setAuthenticated:function(t,e){t.isAuthenticated=e}},l={confirmLoginStatus:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.getters,n=t.commit,t.state,r.next=3,e.$auth0.isAuthenticated();case 3:c=r.sent,n("setAuthenticated",c);case 5:case"end":return r.stop()}}),r)})))()},login:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.getters,n=t.commit,t.state,console.log("".concat(c.a.getWebSiteUrl(),"/auth/callback")),r.next=4,e.$auth0.isAuthenticated();case 4:if(!r.sent){r.next=9;break}n("setAuthenticated",!0),r.next=11;break;case 9:return r.next=11,e.$auth0.loginWithRedirect({redirect_uri:"".concat(c.a.getWebSiteUrl(),"/auth/callback")});case 11:case"end":return r.stop()}}),r)})))()},afterLogin:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.getters,n=t.commit,t.state,r.next=3,e.$auth0.handleRedirectCallback();case 3:return r.next=5,e.$auth0.isAuthenticated();case 5:c=r.sent,n("setAuthenticated",c);case 7:case"end":return r.stop()}}),r)})))()},logout:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.getters,n=t.commit,t.state,r.next=3,e.$auth0.logout({returnTo:"".concat(c.a.getWebSiteUrl())});case 3:n("setAuthenticated",!1);case 4:case"end":return r.stop()}}),r)})))()}}},423:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"getters",(function(){return f})),r.d(e,"mutations",(function(){return l})),r.d(e,"actions",(function(){return d}));var n=r(6),c=(r(38),r(96),r(3),r(40)),o=function(){return{loaded:!1,mappings:[]}},f={convertToHeroName:function(t){return function(e){return 0===t.mappings.length?null:t.mappings.find((function(t){return t.deckTrackerHeroName===e})).heroName}}},l={setMappings:function(t,e){t.mappings=e,t.loaded=!0}},d={getFromServer:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.getters,n=t.commit,t.state.loaded){r.next=7;break}return o="".concat(c.a.getAPIServerURL(),"/decktrackerheromapping"),r.next=5,e.$axios({url:o,method:"GET"});case 5:f=r.sent,n("setMappings",f.data);case 7:case"end":return r.stop()}}),r)})))()}}},459:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"getters",(function(){return d})),r.d(e,"mutations",(function(){return h})),r.d(e,"actions",(function(){return v}));var n=r(6),c=(r(38),r(64),r(10),r(208));var o=new function(){return new Worker(r.p+"f52a809.worker.js")};function f(text){var t=JSON.parse(text),e=t.Available,r=t.HeroList;return{available:e,heros:Object.keys(r).map((function(t){return{name:r[t],displayName:t}}))}}var l=function(){return{lastModified:0,heros:[],bans:[]}},d={},h={setLastModified:function(t,e){t.lastModified=e},setDeckTrackerInfo:function(t,e){t.heros=e.heros,t.bans=e.available}},v={watchStart:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,c,l,d,h,text,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,c=t.commit,e.prev=1,e.next=4,m(window);case 4:return l=e.sent,e.next=7,l[0].getFile();case 7:return d=e.sent,h=d.lastModified,e.next=11,d.text();case 11:text=e.sent,v=f(text),c("setLastModified",h),c("setDeckTrackerInfo",v),o.onmessage=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var n,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("tick"!==e.data){t.next=13;break}return t.next=4,l[0].getFile();case 4:if(n=t.sent,!(r.lastModified<n.lastModified)){t.next=13;break}return t.next=8,n.text();case 8:o=t.sent,d=f(o),c("setLastModified",n.lastModified),c("setDeckTrackerInfo",d),Notification.requestPermission().then((function(t){new Notification("ヒーロー情報が更新されました").onclick=function(){window.focus(),this.close()}}));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o.postMessage("start"),e.next=25;break;case 19:if(e.prev=19,e.t0=e.catch(1),!(e.t0 instanceof DOMException)){e.next=24;break}e.next=25;break;case 24:throw e.t0;case 25:case"end":return e.stop()}}),e,null,[[1,19]])})))()},watchEnd:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state,t.commit,o.postMessage("stop");case 2:case"end":return e.stop()}}),e)})))()}},m=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:if(r=t.sent){t.next=8;break}return t.next=6,e.showOpenFilePicker();case 6:r=t.sent,k(r);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)("/4taku/filehandle/decktracker/heros");case 2:if(!(e=t.sent)||!e.queryPermission){t.next=7;break}return t.next=6,w(e,"read");case 6:return t.abrupt("return",e);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)("/4taku/filehandle/decktracker/heros",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function w(t,e){return _.apply(this,arguments)}function _(){return(_=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},r&&(n.mode="readwrite"),t.next=4,e.queryPermission(n);case 4:if(t.t0=t.sent,"granted"!==t.t0){t.next=7;break}return t.abrupt("return",!0);case 7:return t.next=9,e.requestPermission(n);case 9:if(t.t1=t.sent,"granted"!==t.t1){t.next=12;break}return t.abrupt("return",!0);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},84:function(t,e,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(358),r(95)),o=r(135),f=r.n(o),l=r(470),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("p",[t._v("ステータスコード："+t._s(t.error.statusCode))]),t._v(" "),r("p",[t._v("メッセージ："+t._s(t.error.message))]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"b2edf2c6",null);e.a=component.exports;f()(component,{VApp:l.a})}},[[311,22,7,23]]]);