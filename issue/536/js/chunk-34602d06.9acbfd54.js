(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34602d06"],{2048:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.hasTabs?n("p-tabs-bar",{attrs:{"active-tab-index":e.activeTabIndex,size:"medium",weight:"semibold"}},e._l(e.tabs,(function(t,r){return n("router-link",{key:r,attrs:{to:e.createTabLink(t)}},[e._v(e._s(t))])})),1):e._e(),n("Markdown",e._l(e.components,(function(e,t){return n(e,{key:t,tag:"component"})})),1)],1)},a=[];n("c975"),n("b64b"),n("ac1f"),n("5319"),n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("a630"),n("fb6a"),n("b0c0"),n("25f0");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw o}}}}n("96cf");var u=n("1da1"),s=n("d4ec"),f=n("bee2"),l=n("262e"),b=n("2caf"),h=n("9ab4"),d=n("2b0e"),p=n("2fe1"),v=n("60a3"),y=n("afc6"),g=n("e6e0"),m=n("963d"),k=n("16bd"),w=function(e){Object(l["a"])(n,e);var t=Object(b["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.components=[],e}return Object(f["a"])(n,[{key:"createTabLink",value:function(e){return"#".concat(Object(m["a"])(e))}},{key:"onRouteChange",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadComponents();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadComponents();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadComponents",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.components=[],e.next=3,this.$store.dispatch("toggleLoadingAsync",!0);case 3:e.prev=3,t=c(this.pages),e.prev=5,t.s();case 7:if((n=t.n()).done){e.next=16;break}return r=n.value,e.t0=this.components,e.next=12,r();case 12:e.t1=e.sent.default,e.t0.push.call(e.t0,e.t1);case 14:e.next=7;break;case 16:e.next=21;break;case 18:e.prev=18,e.t2=e["catch"](5),t.e(e.t2);case 21:return e.prev=21,t.f(),e.finish(21);case 24:e.next=30;break;case 26:return e.prev=26,e.t3=e["catch"](3),e.next=30,this.redirect();case 30:return e.next=32,this.$store.dispatch("toggleLoadingAsync",!1);case 32:case"end":return e.stop()}}),e,this,[[3,26],[5,18,21,24]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"redirect",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.hasTabs){e.next=5;break}return e.next=3,this.$router.replace(this.createTabLink(this.tabs[0]));case 3:e.next=7;break;case 5:return e.next=7,this.$router.replace({name:"404"});case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"hasTabs",get:function(){return this.tabs.length>0}},{key:"activeTabIndex",get:function(){return this.tabs.indexOf(this.tab)}},{key:"tabs",get:function(){var e,t=null===y["a"]||void 0===y["a"]||null===(e=y["a"][this.category])||void 0===e?void 0:e[this.page];return!t||Array.isArray(t)?[]:Object.keys(t)}},{key:"category",get:function(){return Object(k["a"])(this.$route.params.category)}},{key:"page",get:function(){return Object(k["a"])(this.$route.params.page)}},{key:"tab",get:function(){return Object(k["a"])(this.$route.hash.substring(1))}},{key:"pages",get:function(){var e,t=null===y["a"]||void 0===y["a"]||null===(e=y["a"][this.category])||void 0===e?void 0:e[this.page];return!t||Array.isArray(t)?t:t[this.tab]}}]),n}(d["a"]);Object(h["a"])([Object(v["b"])("$route")],w.prototype,"onRouteChange",null),w=Object(h["a"])([Object(p["b"])({components:{Markdown:g["a"]}})],w);var x=w,O=x,j=(n("8cdd"),n("2877")),A=Object(j["a"])(O,r,a,!1,null,"0ad81e2f",null);t["default"]=A.exports},"4df4":function(e,t,n){"use strict";var r=n("0366"),a=n("7b0b"),o=n("9bdd"),i=n("e95a"),c=n("50c4"),u=n("8418"),s=n("35a1");e.exports=function(e){var t,n,f,l,b,h,d=a(e),p="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,g=void 0!==y,m=s(d),k=0;if(g&&(y=r(y,v>2?arguments[2]:void 0,2)),void 0==m||p==Array&&i(m))for(t=c(d.length),n=new p(t);t>k;k++)h=g?y(d[k],k):d[k],u(n,k,h);else for(l=m.call(d),b=l.next,n=new p;!(f=b.call(l)).done;k++)h=g?o(l,y,[f.value,k],!0):f.value,u(n,k,h);return n.length=k,n}},"8cdd":function(e,t,n){"use strict";var r=n("edcf"),a=n.n(r);a.a},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),i=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:a})},b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in o)&&a(o,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},edcf:function(e,t,n){},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),o=n("e8b5"),i=n("23cb"),c=n("50c4"),u=n("fc6a"),s=n("8418"),f=n("b622"),l=n("1dde"),b=n("ae40"),h=l("slice"),d=b("slice",{ACCESSORS:!0,0:0,1:2}),p=f("species"),v=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!h||!d},{slice:function(e,t){var n,r,f,l=u(this),b=c(l.length),h=i(e,b),d=i(void 0===t?b:t,b);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(l,h,d);for(r=new(void 0===n?Array:n)(y(d-h,0)),f=0;h<d;h++,f++)h in l&&s(r,f,l[h]);return r.length=f,r}})}}]);
//# sourceMappingURL=chunk-34602d06.9acbfd54.js.map