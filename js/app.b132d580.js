(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(v.length)v.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/IT202-Spring2021-BigProject/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1756:function(t,e,a){},"3ad4":function(t,e,a){},4908:function(t,e,a){"use strict";a("1756")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ac1f"),a("5319");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("NavMenu"),a("v-main",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"/"!==this.$route.path?a("span",[a("v-navigation-drawer",{attrs:{bottom:"",app:"",dark:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.routeTo("/current")}}},[a("v-list-item-title",[t._v("Current Season")])],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.routeTo("/historic")}}},[a("v-list-item-title",[t._v("Historic Data")])],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-title",{on:{click:function(e){return t.routeTo("/favorites")}}},[t._v("Favorite Seasons")])],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-title",{on:{click:function(e){return t.routeTo("/upcoming")}}},[t._v("Upcoming GP")])],1),a("v-list-item",[a("v-list-item-subtitle",{staticClass:"mt-16"},[t._v("Nikhil Prasad (nprasa6) - IT202 Big Project")])],1)],1)],1),a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-spacer",{staticClass:"hidden-md-and-up"}),a("v-toolbar-title",[t._v("Formula Stats")]),a("v-btn",{staticClass:"ml-3 hidden-sm-and-down",attrs:{dark:""},on:{click:function(e){return t.routeTo("/current")}}},[t._v("Current Season")]),a("v-btn",{staticClass:"ml-3 hidden-sm-and-down",attrs:{dark:""},on:{click:function(e){return t.routeTo("/historic")}}},[t._v("Historic Data")]),a("v-btn",{staticClass:"ml-3 hidden-sm-and-down",attrs:{dark:""},on:{click:function(e){return t.routeTo("/favorites")}}},[t._v("Favorite Seasons")]),a("v-btn",{staticClass:"ml-3 hidden-sm-and-down",attrs:{dark:""},on:{click:function(e){return t.routeTo("/upcoming")}}},[t._v("Upcoming GP")])],1)],1):t._e()},s=[],c=(a("b0c0"),{name:"NavMenu",data:function(){return{drawer:!1}},watch:{group:function(){this.drawer=!1}},computed:{currentRoute:function(){return console.log(this.$route.name),this.$route.name}},methods:{routeTo:function(t){navigator.vibrate(50),this.$router.push(t)}}}),u=c,l=a("2877"),d=a("6544"),v=a.n(d),f=a("40dc"),p=a("5bc1"),h=a("8336"),m=a("8860"),g=a("da13"),b=a("5d23"),w=a("f774"),x=a("2fa4"),S=a("2a7f"),y=Object(l["a"])(u,o,s,!1,null,"6168634b",null),_=y.exports;v()(y,{VAppBar:f["a"],VAppBarNavIcon:p["a"],VBtn:h["a"],VList:m["a"],VListItem:g["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VNavigationDrawer:w["a"],VSpacer:x["a"],VToolbarTitle:S["a"]});var k={name:"App",components:{NavMenu:_},data:function(){return{}}},C=k,D=a("7496"),F=a("f6c4"),T=Object(l["a"])(C,r,i,!1,null,null,null),j=T.exports;v()(T,{VApp:D["a"],VMain:F["a"]});var V=a("f309");n["a"].use(V["a"]);var O=new V["a"]({}),P=a("8c4f"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"landing",staticStyle:{"max-height":"100vh"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[a("div",{staticClass:"display-3 font-weight-bold white--text text-xl-center"},[t._v(" Formula Stats ")]),a("div",{staticClass:"display-1 font-weight-bold white--text"},[t._v(" Quick Formula One information from the past and present ")]),a("v-btn",{staticClass:"mt-5",attrs:{dark:"",rounded:"",elevation:"6","x-large":""},on:{click:function(e){return t.routeTo("historic")}}},[t._v("Historic Season Data ")]),a("v-btn",{staticClass:"mt-5",attrs:{dark:"",rounded:"",elevation:"6","x-large":""},on:{click:function(e){return t.routeTo("current")}}},[t._v("Current Season Data ")]),a("v-btn",{staticClass:"mt-5",attrs:{dark:"",rounded:"",elevation:"6","x-large":""},on:{click:function(e){return t.routeTo("favorites")}}},[t._v("Favorite Seasons ")]),a("v-btn",{staticClass:"mt-5",attrs:{dark:"",rounded:"",elevation:"6","x-large":""},on:{click:function(e){return t.routeTo("upcoming")}}},[t._v("Upcoming GP Information ")])],1)],1)},I=[],$={name:"Landing",methods:{routeTo:function(t){navigator.vibrate(50),this.$router.push(t)}}},N=$,L=(a("9602"),a("a523")),M=a("a722"),B=Object(l["a"])(N,R,I,!1,null,"780716c2",null),E=B.exports;v()(B,{VBtn:h["a"],VContainer:L["a"],VLayout:M["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"current",attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"",column:""}},[a("div",{staticClass:"display-1 font-weight-bold white--text"},[t._v(" Current Season Statistics ")]),a("div",[a("v-card",{attrs:{dark:""}},[a("v-text-field",{staticClass:"ml-3 mr-3",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.tableSearch,callback:function(e){t.tableSearch=e},expression:"tableSearch"}}),a("v-data-table",{staticClass:" mt-5 elevation-2",attrs:{search:t.tableSearch,dense:"",dark:"",headers:t.headers,items:t.driverStandings,"items-per-page":10},scopedSlots:t._u([{key:"item.full_name",fn:function(e){var a=e.item;return[t._v(t._s(a.Driver.givenName)+" "+t._s(a.Driver.familyName))]}}])})],1)],1),a("div",{staticClass:"mt-5 display-1 font-weight-bold white--text"},[t._v(" Driver Wins ")]),a("div",{staticStyle:{width:"90%"}},[t.loaded?a("apexchart",{attrs:{height:"250",type:"bar",options:t.options,series:t.winSeries}}):t._e()],1),a("div",{staticClass:"mt-5 display-1 font-weight-bold white--text"},[t._v(" Driver Points ")]),a("div",{staticStyle:{width:"90%"}},[t.loaded?a("apexchart",{attrs:{height:"250",type:"bar",options:t.options,series:t.pointSeries}}):t._e()],1)])],1)},A=[],G=(a("d81d"),a("bc3a")),H=a.n(G),W={name:"CurrentSeason",data:function(){return{driverStandings:[],loaded:!1,tableSearch:"",options:{chart:{background:"#fff",width:"100%"},xaxis:{categories:[]}},pointSeries:[{name:"point series",data:[]}],winSeries:[{name:"win series",data:[]}],headers:[{text:"Position",sortable:!0,value:"position"},{text:"Driver",sortable:!1,value:"full_name"},{text:"Points",sortable:!1,filterable:!1,value:"points"},{text:"Wins",sortable:!0,filterable:!1,value:"wins"},{text:"Constructor",sortable:!1,value:"Constructors[0].name"}]}},created:function(){this.getStandings()},methods:{getStandings:function(){var t=this;H.a.get("http://ergast.com/api/f1/current/driverStandings.json").then((function(e){t.driverStandings=e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,t.winSeries[0].data=e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((function(t){return parseInt(t.wins)})),t.pointSeries[0].data=e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((function(t){return parseInt(t.points)})),t.options.xaxis.categories=e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((function(t){return t.Driver.code})),t.loaded=!0})).catch(alert)}}},U=W,J=(a("5a55"),a("b0af")),Y=a("8fea"),z=a("8654"),Q=Object(l["a"])(U,q,A,!1,null,"350b6c2d",null),K=Q.exports;v()(Q,{VCard:J["a"],VContainer:L["a"],VDataTable:Y["a"],VLayout:M["a"],VTextField:z["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"historic",attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"",column:""}},[a("div",{staticClass:"display-1 font-weight-bold white--text"},[t._v(" Historic Data ")]),a("div",{staticClass:"display-1 font-weight-bold white--text"},[t._v(" Enter a year between 1950 - 2020 ")]),a("div",[a("v-card",[a("v-text-field",{staticClass:"ml-2 mr-2",attrs:{rules:t.searchRules,"append-outer-icon":"mdi-magnify",type:"number"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.runSearch(e)},"click:append-outer":t.runSearch},model:{value:t.query,callback:function(e){t.query=t._n(e)},expression:"query"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"mt-3 mb-3"},[a("v-btn",{attrs:{large:"",rounded:"",dark:""},on:{click:t.saveFav}},[t._v("Add To Favorites")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}]},[a("v-card",{attrs:{dark:""}},[a("v-text-field",{staticClass:"ml-3 mr-3",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.tableSearch,callback:function(e){t.tableSearch=e},expression:"tableSearch"}}),a("v-data-table",{staticClass:" mt-5 elevation-2",attrs:{search:t.tableSearch,dense:"",dark:"",headers:t.headers,items:t.driverStandings,"items-per-page":10},scopedSlots:t._u([{key:"item.full_name",fn:function(e){var a=e.item;return[t._v(t._s(a.Driver.givenName)+" "+t._s(a.Driver.familyName))]}}])})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"mt-5 display-1 font-weight-bold white--text"},[t._v(" Driver Wins ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticStyle:{width:"90%"}},[a("apexchart",{ref:"winChart",attrs:{height:"250",type:"bar",options:t.options,series:t.winSeries}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"mt-5 display-1 font-weight-bold white--text"},[t._v(" Driver Points ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticStyle:{width:"90%"}},[a("apexchart",{ref:"pointChart",attrs:{height:"250",type:"bar",options:t.options,series:t.pointSeries}})],1),a("v-snackbar",{attrs:{timeout:500},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("Season added to favorites")])],1)],1)},Z=[],tt=a("1da1"),et=a("5530"),at=(a("96cf"),{name:"HistoricData",data:function(){return{loaded:!1,query:"",tableSearch:"",snackbar:!1,favInfo:{year:null,winner:null},searchRules:[function(t){return t>=1950&&t<2021||"Year out of range!"}],driverStandings:[],headers:[{text:"Position",sortable:!0,value:"position"},{text:"Driver",sortable:!1,value:"full_name"},{text:"Points",sortable:!1,filterable:!1,value:"points"},{text:"Wins",sortable:!0,filterable:!1,value:"wins"},{text:"Constructor",sortable:!1,value:"Constructors[0].name"}],options:{chart:{background:"#fff",width:"100%"},xaxis:{categories:[]}},pointSeries:[],winSeries:[]}},methods:{runSearch:function(){var t=this;this.query>=1950&&this.query<2021&&(this.loaded=!1,H.a.get("http://ergast.com/api/f1/".concat(this.query,"/driverStandings.json")).then((function(e){t.driverStandings=e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,t.$refs.winChart.updateSeries([{name:"win series",data:e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((function(t){return parseInt(t.wins)}))}]),t.options=Object(et["a"])(Object(et["a"])({},t.options),{xaxis:{categories:e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((function(t){return t.Driver.familyName}))}}),t.$refs.pointChart.updateSeries([{name:"point series",data:e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((function(t){return parseInt(t.points)}))}]),t.favInfo.winner=t.driverStandings[0].Driver.familyName,t.favInfo.year=t.query,t.loaded=!0})).catch(alert))},saveFav:function(){var t=this;return Object(tt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return navigator.vibrate([100,50,100]),e.next=3,t.$store.dispatch("saveFavorite",t.favInfo);case 3:return e.next=5,t.$store.dispatch("getFavorites");case 5:t.snackbar=!0;case 6:case"end":return e.stop()}}),e)})))()}}}),nt=at,rt=(a("4908"),a("2db4")),it=Object(l["a"])(nt,X,Z,!1,null,"18697eb2",null),ot=it.exports;v()(it,{VBtn:h["a"],VCard:J["a"],VContainer:L["a"],VDataTable:Y["a"],VLayout:M["a"],VSnackbar:rt["a"],VTextField:z["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"favorites",attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"",column:""}},[a("v-container",{staticClass:"display-1 font-weight-bold white--text  align-center text-center"},[t._v(" Your Favorite Seasons ")]),t._l(t.favorites,(function(e,n){return a("v-col",{key:n,staticStyle:{"min-width":"30%","max-width":"60%"}},[a("FavoriteCard",{attrs:{favorite:e},on:{delete:t.deleteFavorite}})],1)}))],2)],1)},ct=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{dark:""}},[a("v-card-title",[t._v(" "+t._s(t.favorite.year)+" ")]),a("v-card-text",[a("h3",[t._v("Winner: "+t._s(t.favorite.winner))])]),a("v-card-actions",[a("v-btn",{attrs:{color:"red"},on:{click:function(e){return t.$emit("delete",t.favorite)}}},[t._v("Remove")])],1)],1)},lt=[],dt={name:"FavoriteCard",props:["favorite"],data:function(){return{}},methods:{}},vt=dt,ft=a("99d9"),pt=Object(l["a"])(vt,ut,lt,!1,null,"4b3b660c",null),ht=pt.exports;v()(pt,{VBtn:h["a"],VCard:J["a"],VCardActions:ft["a"],VCardText:ft["b"],VCardTitle:ft["c"]});var mt={name:"ViewFavorites",components:{FavoriteCard:ht},computed:{favorites:function(){return this.$store.state.favorites}},created:function(){this.$store.dispatch("getFavorites")},methods:{deleteFavorite:function(t){var e=this;return Object(tt["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return navigator.vibrate(200),a.next=3,e.$store.dispatch("deleteFavorite",t);case 3:e.$store.dispatch("getFavorites");case 4:case"end":return a.stop()}}),a)})))()}}},gt=mt,bt=(a("62eb"),a("62ad")),wt=Object(l["a"])(gt,st,ct,!1,null,"374f1c2f",null),xt=wt.exports;v()(wt,{VCol:bt["a"],VContainer:L["a"],VLayout:M["a"]});var St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"trackweather",attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"",column:""}},[a("div",{staticClass:"mt-5 display-1 font-weight-bold white--text"},[t._v(" The next race is: ")]),a("div",{staticClass:"display-3 font-weight-bold white--text"},[t._v(" "+t._s(t.nextGP.raceName)+" ")]),a("div",{staticClass:"display-1 font-weight-bold white--text"},[t._v(" on ")]),a("div",{staticClass:"display-2 font-weight-bold white--text"},[t._v(" "+t._s(t.nextGP.date)+" ")]),a("div",{staticClass:"mt-5 display-2 font-weight-bold white--text"},[t._v(" The current weather at "+t._s(t.nextGP.Circuit.Location.locality)+" is ")]),a("div",{staticClass:"mt-2 display-2 font-weight-bold white--text"},[t._v(" "+t._s(t.weatherInfo.condition)+" with a temp of "+t._s(t.weatherInfo.temp)+" F ")]),a("div",{staticClass:"mt-2 display-1 font-weight-bold white--text"},[t._v(" (Feels like "+t._s(t.weatherInfo.feelsLike)+" F) ")])])],1)},yt=[],_t=(a("7db0"),{name:"TrackWeather",data:function(){return{nextGP:{},weatherInfo:{}}},created:function(){var t=this;H.a.get("http://ergast.com/api/f1/current.json").then((function(e){t.nextGP=e.data.MRData.RaceTable.Races.find((function(t){return Date.parse(t.date)>new Date})),H.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t.nextGP.Circuit.circuitId,"&units=imperial&appid=887ea5ce620056625ebefaba891e9fba")).then((function(e){t.weatherInfo={condition:e.data.weather[0].main,temp:e.data.main.temp,feelsLike:e.data.main.feels_like}}))})).catch(alert)}}),kt=_t,Ct=(a("6644"),Object(l["a"])(kt,St,yt,!1,null,"6c74ae3a",null)),Dt=Ct.exports;v()(Ct,{VContainer:L["a"],VLayout:M["a"]}),n["a"].use(P["a"]);var Ft,Tt=[{path:"/",name:"Home",component:E},{path:"/current",name:"Current Season",component:K},{path:"/historic",name:"Historic Data",component:ot},{path:"/favorites",name:"Favorites",component:xt},{path:"/upcoming",name:"Upcoming GP info",component:Dt}],jt=new P["a"]({mode:"abstract",base:"/IT202-Spring2021-BigProject/",routes:Tt}),Vt=jt,Ot=a("1321"),Pt=a.n(Ot),Rt=(a("159b"),a("2f62")),It=(a("d3b7"),{getDB:function(){return Object(tt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){if(Ft)return t(Ft);var a=window.indexedDB.open("Favorites",1);a.onerror=function(t){e("error ".concat(t))},a.onsuccess=function(e){Ft=e.target.result,t(Ft)},a.onupgradeneeded=function(t){var e=t.target.result;e.createObjectStore("Favorites",{autoIncrement:!0,keyPath:"id"})}})));case 1:case"end":return t.stop()}}),t)})))()},addFavorite:function(t){var e=this;return Object(tt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getDB();case 2:return n=a.sent,a.abrupt("return",new Promise((function(e){var a=n.transaction(["Favorites"],"readwrite");a.oncomplete=function(){e()};var r=a.objectStore("Favorites");r.put(t)})));case 4:case"end":return a.stop()}}),a)})))()},getFavorites:function(){var t=this;return Object(tt["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getDB();case 2:return a=e.sent,e.abrupt("return",new Promise((function(t){var e=a.transaction(["Favorites"],"readonly");e.oncomplete=function(){t(r)};var n=e.objectStore("Favorites"),r=[];n.openCursor().onsuccess=function(t){var e=t.target.result;e&&(r.push(e.value),e.continue())}})));case 4:case"end":return e.stop()}}),e)})))()},deleteFavorite:function(t){var e=this;return Object(tt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getDB();case 2:return n=a.sent,a.abrupt("return",new Promise((function(e){var a=n.transaction(["Favorites"],"readwrite");a.oncomplete=function(){e()};var r=a.objectStore("Favorites");r.delete(t.id)})));case 4:case"end":return a.stop()}}),a)})))()}});n["a"].use(Rt["a"]);var $t=new Rt["a"].Store({state:{favorites:[]},mutations:{},actions:{deleteFavorite:function(t,e){return Object(tt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,It.deleteFavorite(e);case 2:case"end":return t.stop()}}),t)})))()},getFavorites:function(t){return Object(tt["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state.favorites=[],e.next=3,It.getFavorites();case 3:a=e.sent,a.forEach((function(e){t.state.favorites.push(e)}));case 5:case"end":return e.stop()}}),e)})))()},saveFavorite:function(t,e){return Object(tt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,It.addFavorite(e);case 2:case"end":return t.stop()}}),t)})))()}}}),Nt=a("9483");Object(Nt["a"])("".concat("/IT202-Spring2021-BigProject/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({vuetify:O,router:Vt,VueApexCharts:Pt.a,store:$t,render:function(t){return t(j)}}).$mount("#app"),n["a"].component("apexchart",Pt.a),Vt.replace("/"),document.title="Formula Stats"},"5a55":function(t,e,a){"use strict";a("9a25")},"62eb":function(t,e,a){"use strict";a("6c61")},6644:function(t,e,a){"use strict";a("3ad4")},"6c61":function(t,e,a){},9602:function(t,e,a){"use strict";a("ec4e")},"9a25":function(t,e,a){},ec4e:function(t,e,a){}});
//# sourceMappingURL=app.b132d580.js.map