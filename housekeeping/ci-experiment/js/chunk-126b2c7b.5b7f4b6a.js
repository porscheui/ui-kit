(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-126b2c7b"],{"189b":function(e,t,n){var a=n("72df"),r=n("7d53"),o=n("4fed"),i=r("species");e.exports=function(e){return o>=51||!a((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"37d1":function(e,t,n){var a=n("730c");e.exports=function(e){return Object(a(e))}},"4fed":function(e,t,n){var a,r,o=n("f498"),i=n("64e4"),c=o.process,s=c&&c.versions,u=s&&s.v8;u?(a=u.split("."),r=a[0]+a[1]):i&&(a=i.match(/Edge\/(\d+)/),(!a||a[1]>=74)&&(a=i.match(/Chrome\/(\d+)/),a&&(r=a[1]))),e.exports=r&&+r},"64e4":function(e,t,n){var a=n("5428");e.exports=a("navigator","userAgent")||""},"6a86":function(e,t,n){var a=n("7526"),r=n("c6de"),o=n("7d53"),i=o("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"75a4":function(e,t,n){var a=n("6b1d"),r=n("72df"),o=n("378c"),i=n("185a").f,c=n("d4cb"),s=r((function(){i(1)})),u=!c||s;a({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},ada5:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Pagination")]),n("h2",[e._v("Basic usage")]),e._m(0),n("Playground",{attrs:{markup:e.basic(),config:e.config}}),n("h3",[e._v("Max Number of Page Links: 7 (desktop)")]),n("Playground",{attrs:{markup:e.basic("7"),config:e.config}}),n("h3",[e._v("Max Number of Page Links: 5 (mobile)")]),n("Playground",{attrs:{markup:e.basic("5"),config:e.config}}),n("h3",[e._v("Responsive")]),e._m(1),n("Playground",{attrs:{markup:e.basic("{ base: 5, s: 7 }"),config:e.config}}),n("hr"),n("h2",[e._v("Behaviour playground")]),n("p",[e._v("By changing values for total amount of items, items to display per page and number of currently active page, the behaviour of the pagination component can be changed.")]),n("Playground",{staticClass:"playground-pagination",attrs:{markup:e.behaviour,config:e.config},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.theme;return[n("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[n("p-text",{attrs:{theme:a,tag:"span",size:"x-small"}},[e._v("Total items count")]),n("input",{attrs:{type:"number"},domProps:{value:e.totalItemsCount},on:{input:function(t){e.totalItemsCount=t.target.value}}})],1),n("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[n("p-text",{attrs:{theme:a,tag:"span",size:"x-small"}},[e._v("Items per page")]),n("input",{attrs:{type:"number"},domProps:{value:e.itemsPerPage},on:{input:function(t){e.itemsPerPage=t.target.value}}})],1),n("label",{staticStyle:{display:"inline-block"}},[n("p-text",{attrs:{theme:a,tag:"span",size:"x-small"}},[e._v("Active page")]),n("input",{attrs:{type:"number"},domProps:{value:e.activePage},on:{input:function(t){e.activePage=t.target.value}}})],1)]}}])})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("To adapt the pagination to the specific viewport context, the amount of displayed page items varies between either "),n("code",[e._v("7")]),e._v(" (desktop/tablet) or "),n("code",[e._v("5")]),e._v(" (mobile). The components handles responsive viewport sizing by default.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])}],o=(n("d86f"),n("75a4"),n("d4ec")),i=n("bee2"),c=n("262e"),s=n("2caf"),u=n("53ca"),p=n("2b0e"),f=n("2fe1"),l=function(e,t,n,a){var r,o=arguments.length,i=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===("undefined"===typeof Reflect?"undefined":Object(u["a"])(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},v=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.config={themeable:!0},e.totalItemsCount=500,e.itemsPerPage=25,e.activePage=1,e}return Object(i["a"])(n,[{key:"basic",value:function(e){var t=e?' max-number-of-page-links="'.concat(e,'"'):"";return'<p-pagination total-items-count="500" items-per-page="25" active-page="1"'.concat(t,"></p-pagination>")}},{key:"mounted",value:function(){this.registerEvents()}},{key:"updated",value:function(){this.registerEvents()}},{key:"registerEvents",value:function(){var e=this,t=this.$el.querySelector(".playground-pagination p-pagination");t.addEventListener("pageChange",(function(t){e.activePage=t.detail.page}))}},{key:"behaviour",get:function(){return'<p-pagination total-items-count="'.concat(this.totalItemsCount,'" items-per-page="').concat(this.itemsPerPage,'" active-page="').concat(this.activePage,'"></p-pagination>')}}]),n}(p["a"]);v=l([f["b"]],v);var d=v,g=d,m=n("2877"),b=Object(m["a"])(g,a,r,!1,null,null,null);t["default"]=b.exports},c6de:function(e,t,n){var a=n("6a61");e.exports=Array.isArray||function(e){return"Array"==a(e)}},d86f:function(e,t,n){"use strict";var a=n("6b1d"),r=n("72df"),o=n("c6de"),i=n("7526"),c=n("37d1"),s=n("b495"),u=n("dac6"),p=n("6a86"),f=n("189b"),l=n("7d53"),v=n("4fed"),d=l("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",b=v>=51||!r((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),h=f("concat"),y=function(e){if(!i(e))return!1;var t=e[d];return void 0!==t?!!t:o(e)},_=!b||!h;a({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,a,r,o,i=c(this),f=p(i,0),l=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?i:arguments[t],y(o)){if(r=s(o.length),l+r>g)throw TypeError(m);for(n=0;n<r;n++,l++)n in o&&u(f,l,o[n])}else{if(l>=g)throw TypeError(m);u(f,l++,o)}return f.length=l,f}})},dac6:function(e,t,n){"use strict";var a=n("083f"),r=n("abdf"),o=n("9618");e.exports=function(e,t,n){var i=a(t);i in e?r.f(e,i,o(0,n)):e[i]=n}}}]);
//# sourceMappingURL=chunk-126b2c7b.5b7f4b6a.js.map