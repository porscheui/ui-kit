(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eff27524"],{2048:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.hasTabs?n("nav",{staticClass:"tabs"},e._l(e.tabs,(function(t,r){return n("p-text",{key:r,staticClass:"tab",attrs:{size:"inherit",tag:"div",weight:"thin"}},[n("router-link",{attrs:{to:e.createTabLink(t)}},[e._v(e._s(t))])],1)})),1):e._e(),n("Markdown",e._l(e.components,(function(e,t){return n(e,{key:t,tag:"component"})})),1)],1)},o=[],a=(n("a4d3"),n("e01a"),n("d28b"),n("e439"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("ddb0"),n("0122")),i=n("60a3"),c=n("afc6"),u=n("e6e0"),s=n("0a0c"),l=n("16bd"),p=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(a["a"])(Reflect))&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},b=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r["throw"](e))}catch(t){a(t)}}function u(e){e.done?n(e.value):o(e.value).then(i,c)}u((r=r.apply(e,t||[])).next())}))},h=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=2&a[0]?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.components=[],t}return p(t,e),Object.defineProperty(t.prototype,"hasTabs",{get:function(){return this.tabs.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tabs",{get:function(){var e,t=null===(e=null===c["a"]||void 0===c["a"]?void 0:c["a"][this.category])||void 0===e?void 0:e[this.page];return!t||Array.isArray(t)?[]:Object.keys(t)},enumerable:!1,configurable:!0}),t.prototype.createTabLink=function(e){return"#"+Object(s["a"])(e)},t.prototype.onRouteChange=function(){return b(this,void 0,Promise,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,this.loadComponents()];case 1:return e.sent(),[2]}}))}))},t.prototype.mounted=function(){return b(this,void 0,Promise,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,this.loadComponents()];case 1:return e.sent(),[2]}}))}))},Object.defineProperty(t.prototype,"category",{get:function(){return Object(l["a"])(this.$route.params.category)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"page",{get:function(){return Object(l["a"])(this.$route.params.page)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tab",{get:function(){return Object(l["a"])(this.$route.hash.substring(1))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pages",{get:function(){var e,t=null===(e=null===c["a"]||void 0===c["a"]?void 0:c["a"][this.category])||void 0===e?void 0:e[this.page];return!t||Array.isArray(t)?t:t[this.tab]},enumerable:!1,configurable:!0}),t.prototype.loadComponents=function(){return b(this,void 0,Promise,(function(){var e,t,n,r,o;return h(this,(function(a){switch(a.label){case 0:return this.components=[],[4,this.$store.dispatch("toggleLoadingAsync",!0)];case 1:a.sent(),a.label=2;case 2:a.trys.push([2,7,,9]),e=0,t=this.pages,a.label=3;case 3:return e<t.length?(n=t[e],o=(r=this.components).push,[4,n()]):[3,6];case 4:o.apply(r,[a.sent().default]),a.label=5;case 5:return e++,[3,3];case 6:return[3,9];case 7:return a.sent(),[4,this.redirect()];case 8:return a.sent(),[3,9];case 9:return[4,this.$store.dispatch("toggleLoadingAsync",!1)];case 10:return a.sent(),[2]}}))}))},t.prototype.redirect=function(){return b(this,void 0,Promise,(function(){return h(this,(function(e){switch(e.label){case 0:return this.hasTabs?[4,this.$router.replace(this.createTabLink(this.tabs[0]))]:[3,2];case 1:return e.sent(),[3,4];case 2:return[4,this.$router.replace({name:"404"})];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},f([Object(i["d"])("$route")],t.prototype,"onRouteChange",null),t=f([Object(i["a"])({components:{Markdown:u["a"]}})],t),t}(i["c"]),y=d,g=y,v=(n("b21d"),n("2877")),m=Object(v["a"])(g,r,o,!1,null,"e597d97a",null);t["default"]=m.exports},b21d:function(e,t,n){"use strict";var r=n("c140"),o=n.n(r);o.a},c140:function(e,t,n){}}]);
//# sourceMappingURL=chunk-eff27524.25a45998.js.map