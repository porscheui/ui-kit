(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63cc9937"],{"75a4":function(e,t,a){var n=a("6b1d"),o=a("72df"),i=a("378c"),r=a("185a").f,s=a("d4cb"),c=o((function(){r(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(e,t){return r(i(e),t)}})},e6b0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Pagination")]),a("h2",[e._v("Basic usage")]),e._m(0),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.theme;return[a("p-pagination",{attrs:{theme:t,"total-items-count":"500","items-per-page":"25","active-page":"1"}})]}}])}),a("h3",[e._v("Max Number of Page Links: 7 (desktop)")]),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.theme;return[a("p-pagination",{attrs:{theme:t,"total-items-count":"500","items-per-page":"25","active-page":"1","max-number-of-page-links":"7"}})]}}])}),a("h3",[e._v("Max Number of Page Links: 5 (mobile)")]),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.theme;return[a("p-pagination",{attrs:{theme:t,"total-items-count":"500","items-per-page":"25","active-page":"1","max-number-of-page-links":"5"}})]}}])}),a("h3",[e._v("Responsive")]),e._m(1),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.theme;return[a("p-pagination",{attrs:{theme:t,"total-items-count":"500","items-per-page":"25","active-page":"1","max-number-of-page-links":"{ base: 5, s: 7 }"}})]}}])}),a("hr"),a("h2",[e._v("Behaviour playground")]),a("p",[e._v("By changing values for total amount of items, items to display per page and number of currently active page, the behaviour of the pagination component can be changed.")]),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(t){var n=t.theme;return[a("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[a("p-text",{attrs:{tag:"span",size:"x-small",theme:n}},[e._v("Total items count")]),a("input",{attrs:{type:"number"},domProps:{value:e.totalItemsCount},on:{input:function(t){e.totalItemsCount=t.target.value}}})],1),a("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[a("p-text",{attrs:{tag:"span",size:"x-small",theme:n}},[e._v("Items per page")]),a("input",{attrs:{type:"number"},domProps:{value:e.itemsPerPage},on:{input:function(t){e.itemsPerPage=t.target.value}}})],1),a("label",{staticStyle:{display:"inline-block"}},[a("p-text",{attrs:{tag:"span",size:"x-small",theme:n}},[e._v("Active page")]),a("input",{ref:"activePage",attrs:{type:"number"},domProps:{value:e.activePage},on:{input:function(t){e.activePage=t.target.value}}})],1)]}},{key:"default",fn:function(t){var n=t.theme;return[a("p-pagination",{ref:"paginationPlayground",attrs:{theme:n,"total-items-count":e.totalItemsCount,"items-per-page":e.itemsPerPage,"active-page":e.activePage}})]}}])})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("To adapt the pagination to the specific viewport context, the amount of displayed page items varies between either "),a("code",[e._v("7")]),e._v(" (desktop/tablet) or "),a("code",[e._v("5")]),e._v(" (mobile). The components handles responsive viewport sizing by default.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The settings above can also be used on different major breakpoints "),a("code",[e._v("xs")]),e._v(", "),a("code",[e._v("s")]),e._v(", "),a("code",[e._v("m")]),e._v(", "),a("code",[e._v("l")]),e._v(" and "),a("code",[e._v("xl")]),e._v(".")])}],i=(a("75a4"),a("276c")),r=a("e954"),s=a("920b"),c=a("92a6"),u=a("0122"),l=a("60a3"),p=function(e,t,a,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===("undefined"===typeof Reflect?"undefined":Object(u["a"])(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,a,r):o(t,a))||r);return i>3&&r&&Object.defineProperty(t,a,r),r},m=function(e){Object(s["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.totalItemsCount=500,e.itemsPerPage=25,e.activePage=1,e}return Object(r["a"])(a,[{key:"mounted",value:function(){var e=this;this.$refs.paginationPlayground.addEventListener("pageChange",(function(t){e.activePage=t.detail.page}))}}]),a}(l["c"]);m=p([l["a"]],m);var v=m,g=v,f=a("2877"),d=Object(f["a"])(g,n,o,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-63cc9937.9638933d.js.map