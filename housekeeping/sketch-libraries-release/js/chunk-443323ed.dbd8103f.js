(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-443323ed"],{"0538":function(t,e,n){"use strict";var a=n("1c0b"),r=n("861d"),o=[].slice,i={},u=function(t,e,n){if(!(e in i)){for(var a=[],r=0;r<e;r++)a[r]="a["+r+"]";i[e]=Function("C,a","return new C("+a.join(",")+")")}return i[e](t,n)};t.exports=Function.bind||function(t){var e=a(this),n=o.call(arguments,1),i=function(){var a=n.concat(o.call(arguments));return this instanceof i?u(e,a.length,a):e.apply(t,a)};return r(e.prototype)&&(i.prototype=e.prototype),i}},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),r=n("825a"),o=n("d039"),i=n("ad6d"),u="toString",c=RegExp.prototype,s=c[u],l=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),p=s.name!=u;(l||p)&&a(RegExp.prototype,u,(function(){var t=r(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?i.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},"276c":function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},3410:function(t,e,n){var a=n("23e7"),r=n("d039"),o=n("7b0b"),i=n("e163"),u=n("e177"),c=r((function(){i(1)}));a({target:"Object",stat:!0,forced:c,sham:!u},{getPrototypeOf:function(t){return i(o(t))}})},"4ae1":function(t,e,n){var a=n("23e7"),r=n("d066"),o=n("1c0b"),i=n("825a"),u=n("861d"),c=n("7c73"),s=n("0538"),l=n("d039"),p=r("Reflect","construct"),f=l((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),v=!l((function(){p((function(){}))})),g=f||v;a({target:"Reflect",stat:!0,forced:g,sham:g},{construct:function(t,e){o(t),i(e);var n=arguments.length<3?t:o(arguments[2]);if(v&&!f)return p(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var a=[null];return a.push.apply(a,e),new(s.apply(t,a))}var r=n.prototype,l=c(u(r)?r:Object.prototype),g=Function.apply.call(t,l,e);return u(g)?g:l}})},"920b":function(t,e,n){"use strict";function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return r}))},"92a6":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("4ae1"),n("3410");function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}n("d3b7"),n("25f0");function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var o=n("0122");function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return!e||"object"!==Object(o["a"])(e)&&"function"!==typeof e?i(t):e}function c(t){var e=r();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}},e6b0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vmark"},[n("h1",[t._v("Pagination")]),n("h2",[t._v("Basic usage")]),t._m(0),n("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.theme;return[n("p-pagination",{attrs:{theme:e,"total-items-count":"500","items-per-page":"25","active-page":"1"}})]}}])}),n("h3",[t._v("Max Number of Page Links: 7 (desktop)")]),n("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.theme;return[n("p-pagination",{attrs:{theme:e,"total-items-count":"500","items-per-page":"25","active-page":"1","max-number-of-page-links":"7"}})]}}])}),n("h3",[t._v("Max Number of Page Links: 5 (mobile)")]),n("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.theme;return[n("p-pagination",{attrs:{theme:e,"total-items-count":"500","items-per-page":"25","active-page":"1","max-number-of-page-links":"5"}})]}}])}),n("h3",[t._v("Responsive")]),t._m(1),n("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.theme;return[n("p-pagination",{attrs:{theme:e,"total-items-count":"500","items-per-page":"25","active-page":"1","max-number-of-page-links":"{ base: 5, s: 7 }"}})]}}])}),n("hr"),n("h2",[t._v("Behaviour playground")]),n("p",[t._v("By changing values for total amount of items, items to display per page and number of currently active page, the behaviour of the pagination component can be changed.")]),n("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"configurator",fn:function(e){var a=e.theme;return[n("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[n("p-text",{attrs:{tag:"span",size:"x-small",theme:a}},[t._v("Total items count")]),n("input",{attrs:{type:"number"},domProps:{value:t.totalItemsCount},on:{input:function(e){t.totalItemsCount=e.target.value}}})],1),n("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[n("p-text",{attrs:{tag:"span",size:"x-small",theme:a}},[t._v("Items per page")]),n("input",{attrs:{type:"number"},domProps:{value:t.itemsPerPage},on:{input:function(e){t.itemsPerPage=e.target.value}}})],1),n("label",{staticStyle:{display:"inline-block"}},[n("p-text",{attrs:{tag:"span",size:"x-small",theme:a}},[t._v("Active page")]),n("input",{ref:"activePage",attrs:{type:"number"},domProps:{value:t.activePage},on:{input:function(e){t.activePage=e.target.value}}})],1)]}},{key:"default",fn:function(e){var a=e.theme;return[n("p-pagination",{ref:"paginationPlayground",attrs:{theme:a,"total-items-count":t.totalItemsCount,"items-per-page":t.itemsPerPage,"active-page":t.activePage}})]}}])})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("To adapt the pagination to the specific viewport context, the amount of displayed page items varies between either "),n("code",[t._v("7")]),t._v(" (desktop/tablet) or "),n("code",[t._v("5")]),t._v(" (mobile). The components handles responsive viewport sizing by default.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The settings above can also be used on different major breakpoints "),n("code",[t._v("xs")]),t._v(", "),n("code",[t._v("s")]),t._v(", "),n("code",[t._v("m")]),t._v(", "),n("code",[t._v("l")]),t._v(" and "),n("code",[t._v("xl")]),t._v(".")])}],o=n("276c"),i=n("e954"),u=n("920b"),c=n("92a6"),s=n("0f9e"),l=n("60a3"),p=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.totalItemsCount=500,t.itemsPerPage=25,t.activePage=1,t}return Object(i["a"])(n,[{key:"mounted",value:function(){var t=this;this.$refs.paginationPlayground.addEventListener("pageChange",(function(e){t.activePage=e.detail.page}))}}]),n}(l["c"]);p=Object(s["b"])([l["a"]],p);var f=p,v=f,g=n("2877"),m=Object(g["a"])(v,a,r,!1,null,null,null);e["default"]=m.exports},e954:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=chunk-443323ed.dbd8103f.js.map