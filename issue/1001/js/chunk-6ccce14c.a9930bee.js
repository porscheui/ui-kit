(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ccce14c"],{1676:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Link")]),e._m(0),n("p",[e._v("It can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")]),n("h2",[e._v("Variants")]),n("p",[e._v("Choose between predefined styling variants.")]),n("h3",[e._v("Primary")]),n("Playground",{attrs:{markup:e.buttons("primary"),config:e.config}}),n("h3",[e._v("Secondary (default)")]),n("Playground",{attrs:{markup:e.buttons(),config:e.config}}),n("h3",[e._v("Tertiary")]),n("Playground",{attrs:{markup:e.buttons("tertiary"),config:e.config}}),n("h3",[e._v("Responsive")]),n("Playground",{attrs:{markup:e.responsive,config:e.config}}),n("hr"),n("h2",[e._v("Framework routing (anchor nesting)")]),e._m(1),n("Playground",{attrs:{markup:e.routing,config:e.config}}),n("hr"),n("h2",[e._v("Link with specific icon")]),e._m(2),n("Playground",{attrs:{markup:e.icon,config:e.config}}),n("h2",[e._v("Bind events to the Link")]),e._m(3),n("Playground",{attrs:{markup:e.events,config:e.config}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("<p-link>")]),e._v(" component is essential to perform changes in page routes.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("To support custom anchor tags (e.g. framework specific routing) you can provide them as a "),n("strong",[e._v("slotted element")]),e._v(" of the component.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If another icon needs to be implemented, just replace the default icon with another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),n("code",[e._v("icon")]),e._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),n("code",[e._v("iconSource")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can use native "),n("code",[e._v("click")]),e._v(", "),n("code",[e._v("focus")]),e._v(", "),n("code",[e._v("focusin")]),e._v(", "),n("code",[e._v("blur")]),e._v(" and "),n("code",[e._v("focusout")]),e._v(" events on the link.")])}],c=(n("d86f"),n("75a4"),n("d4ec")),i=n("bee2"),a=n("262e"),s=n("2caf"),l=n("53ca"),u=n("2b0e"),f=n("2fe1"),p=function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":Object(l["a"])(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},h=function(e){Object(a["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(c["a"])(this,o),e=t.apply(this,arguments),e.config={themeable:!0,spacing:"inline"},e.responsive='<p-link variant="primary" href="https://www.porsche.com" hide-label="{ base: true, s: false }">Some label</p-link>\n<p-link variant="secondary" href="https://www.porsche.com" hide-label="{ base: true, m: false }">Some label</p-link>\n<p-link variant="tertiary" href="https://www.porsche.com" hide-label="{ base: true, l: false }">Some label</p-link>',e.routing='<p-link>\n  <a href="https://www.porsche.com">Some label</a>\n</p-link>',e.icon='<p-link href="https://www.porsche.com" icon="phone">Some label</p-link>\n<p-link href="https://www.porsche.com" icon-source="'.concat(n("928d"),'" hide-label="true">Some label</p-link>'),e.events='<p-link\n  href="https://www.porsche.com"\n  onclick="alert(\'click\'); return false;"\n  onfocus="console.log(\'focus\')"\n  onfocusin="console.log(\'focusin\')"\n  onblur="console.log(\'blur\')"\n  onfocusout="console.log(\'focusout\')"\n>Some label</p-link>',e}return Object(i["a"])(o,[{key:"buttons",value:function(e){var t=e?' variant="'.concat(e,'"'):"";return"<p-link".concat(t,' href="https://www.porsche.com">Some label</p-link>\n<p-link').concat(t,' href="https://www.porsche.com" hide-label="true">Some label</p-link>')}}]),o}(u["a"]);h=p([f["b"]],h);var d=h,v=d,m=(n("7280"),n("2877")),b=Object(m["a"])(v,o,r,!1,null,"cf72911a",null);t["default"]=b.exports},"189b":function(e,t,n){var o=n("72df"),r=n("7d53"),c=n("4fed"),i=r("species");e.exports=function(e){return c>=51||!o((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"37d1":function(e,t,n){var o=n("730c");e.exports=function(e){return Object(o(e))}},"4fed":function(e,t,n){var o,r,c=n("f498"),i=n("64e4"),a=c.process,s=a&&a.versions,l=s&&s.v8;l?(o=l.split("."),r=o[0]+o[1]):i&&(o=i.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=i.match(/Chrome\/(\d+)/),o&&(r=o[1]))),e.exports=r&&+r},"64e4":function(e,t,n){var o=n("5428");e.exports=o("navigator","userAgent")||""},"6a86":function(e,t,n){var o=n("7526"),r=n("c6de"),c=n("7d53"),i=c("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},7280:function(e,t,n){"use strict";var o=n("e267"),r=n.n(o);r.a},"75a4":function(e,t,n){var o=n("6b1d"),r=n("72df"),c=n("378c"),i=n("185a").f,a=n("d4cb"),s=r((function(){i(1)})),l=!a||s;o({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return i(c(e),t)}})},"928d":function(e,t,n){e.exports=n.p+"img/icon-custom-kaixin.bbde6f67.svg"},c6de:function(e,t,n){var o=n("6a61");e.exports=Array.isArray||function(e){return"Array"==o(e)}},d86f:function(e,t,n){"use strict";var o=n("6b1d"),r=n("72df"),c=n("c6de"),i=n("7526"),a=n("37d1"),s=n("b495"),l=n("dac6"),u=n("6a86"),f=n("189b"),p=n("7d53"),h=n("4fed"),d=p("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=h>=51||!r((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),g=f("concat"),w=function(e){if(!i(e))return!1;var t=e[d];return void 0!==t?!!t:c(e)},_=!b||!g;o({target:"Array",proto:!0,forced:_},{concat:function(e){var t,n,o,r,c,i=a(this),f=u(i,0),p=0;for(t=-1,o=arguments.length;t<o;t++)if(c=-1===t?i:arguments[t],w(c)){if(r=s(c.length),p+r>v)throw TypeError(m);for(n=0;n<r;n++,p++)n in c&&l(f,p,c[n])}else{if(p>=v)throw TypeError(m);l(f,p++,c)}return f.length=p,f}})},dac6:function(e,t,n){"use strict";var o=n("083f"),r=n("abdf"),c=n("9618");e.exports=function(e,t,n){var i=o(t);i in e?r.f(e,i,c(0,n)):e[i]=n}},e267:function(e,t,n){}}]);
//# sourceMappingURL=chunk-6ccce14c.a9930bee.js.map