(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c169319"],{"083f":function(t,e,n){var r=n("7526");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"0e93":function(t,e){t.exports=!1},"157c":function(t,e,n){var r=n("7526");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1676:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vmark"},[n("h1",[t._v("Link")]),t._m(0),n("p",[t._v("It can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")]),n("h2",[t._v("Variants")]),n("p",[t._v("Choose between predefined styling variants.")]),n("h3",[t._v("Primary")]),n("Playground",{attrs:{markup:t.buttons("primary"),config:t.config}}),n("h3",[t._v("Secondary (default)")]),n("Playground",{attrs:{markup:t.buttons(),config:t.config}}),n("h3",[t._v("Tertiary")]),n("Playground",{attrs:{markup:t.buttons("tertiary"),config:t.config}}),n("h3",[t._v("Responsive")]),n("Playground",{attrs:{markup:t.responsive,config:t.config}}),n("hr"),n("h2",[t._v("Framework routing (anchor nesting)")]),t._m(1),n("Playground",{attrs:{markup:t.routing,config:t.config}}),n("hr"),n("h2",[t._v("Link with specific icon")]),t._m(2),n("Playground",{attrs:{markup:t.icon,config:t.config}}),n("h2",[t._v("Bind events to the Link")]),t._m(3),n("Playground",{attrs:{markup:t.events,config:t.config}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The "),n("code",[t._v("<p-link>")]),t._v(" component is essential to perform changes in page routes.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("To support custom anchor tags (e.g. framework specific routing) you can provide them as a "),n("strong",[t._v("slotted element")]),t._v(" of the component.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("If another icon needs to be implemented, just replace the default icon with another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),n("code",[t._v("icon")]),t._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),n("code",[t._v("iconSource")]),t._v(" prop.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("You can use native "),n("code",[t._v("click")]),t._v(", "),n("code",[t._v("focus")]),t._v(", "),n("code",[t._v("focusin")]),t._v(", "),n("code",[t._v("blur")]),t._v(" and "),n("code",[t._v("focusout")]),t._v(" events on the link.")])}],c=(n("d86f"),n("d4ec")),i=n("bee2"),a=n("262e"),f=n("2caf"),u=n("0f9e"),s=n("a026"),l=n("2fe1"),p=function(t){Object(a["a"])(r,t);var e=Object(f["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.config={themeable:!0,spacing:"inline"},t.responsive='<p-link variant="primary" href="https://www.porsche.com" hide-label="{ base: true, s: false }">Some label</p-link>\n<p-link variant="secondary" href="https://www.porsche.com" hide-label="{ base: true, m: false }">Some label</p-link>\n<p-link variant="tertiary" href="https://www.porsche.com" hide-label="{ base: true, l: false }">Some label</p-link>',t.routing='<p-link>\n  <a href="https://www.porsche.com">Some label</a>\n</p-link>',t.icon='<p-link href="https://www.porsche.com" icon="phone">Some label</p-link>\n<p-link href="https://www.porsche.com" icon-source="'.concat(n("928d"),'" hide-label="true">Some label</p-link>'),t.events='<p-link\n  href="https://www.porsche.com"\n  onclick="alert(\'click\'); return false;"\n  onfocus="console.log(\'focus\')"\n  onfocusin="console.log(\'focusin\')"\n  onblur="console.log(\'blur\')"\n  onfocusout="console.log(\'focusout\')"\n>Some label</p-link>',t}return Object(i["a"])(r,[{key:"buttons",value:function(t){var e=t?' variant="'.concat(t,'"'):"";return"<p-link".concat(e,' href="https://www.porsche.com">Some label</p-link>\n<p-link').concat(e,' href="https://www.porsche.com" hide-label="true">Some label</p-link>')}}]),r}(s["a"]);p=Object(u["b"])([l["b"]],p);var v=p,d=v,h=(n("7280"),n("2877")),b=Object(h["a"])(d,r,o,!1,null,"cf72911a",null);e["default"]=b.exports},"185a":function(t,e,n){var r=n("d4cb"),o=n("e129"),c=n("9618"),i=n("378c"),a=n("083f"),f=n("f1a7"),u=n("7c3f"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=i(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(f(t,e))return c(!o.f.call(t,e),t[e])}},"189b":function(t,e,n){var r=n("72df"),o=n("7d53"),c=n("4fed"),i=o("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1d8a":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},"1f5e":function(t,e,n){var r=n("378c"),o=n("b495"),c=n("9a0f"),i=function(t){return function(e,n,i){var a,f=r(e),u=o(f.length),s=c(i,u);if(t&&n!=n){while(u>s)if(a=f[s++],a!=a)return!0}else for(;u>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},2402:function(t,e){e.f=Object.getOwnPropertySymbols},"332c":function(t,e,n){var r=n("4cdd"),o=n("1d8a"),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},"378c":function(t,e,n){var r=n("83a6"),o=n("730c");t.exports=function(t){return r(o(t))}},"37d1":function(t,e,n){var r=n("730c");t.exports=function(t){return Object(r(t))}},"3e34":function(t,e,n){var r=n("f498"),o=n("5b12");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},"3e36":function(t,e,n){var r=n("f498");t.exports=r},"4cdd":function(t,e,n){var r=n("0e93"),o=n("c607");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"4db4":function(t,e,n){var r=n("e7a0");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"4fed":function(t,e,n){var r,o,c=n("f498"),i=n("64e4"),a=c.process,f=a&&a.versions,u=f&&f.v8;u?(r=u.split("."),o=r[0]+r[1]):i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},5428:function(t,e,n){var r=n("3e36"),o=n("f498"),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},"5b12":function(t,e,n){var r=n("d4cb"),o=n("abdf"),c=n("9618");t.exports=r?function(t,e,n){return o.f(t,e,c(1,n))}:function(t,e,n){return t[e]=n,t}},"64e4":function(t,e,n){var r=n("5428");t.exports=r("navigator","userAgent")||""},"65d0":function(t,e,n){var r=n("c91c"),o=n("b17e"),c=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},"6a61":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6a86":function(t,e,n){var r=n("7526"),o=n("c6de"),c=n("7d53"),i=c("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6b1d":function(t,e,n){var r=n("f498"),o=n("185a").f,c=n("5b12"),i=n("b8ba"),a=n("3e34"),f=n("b634"),u=n("ebac");t.exports=function(t,e){var n,s,l,p,v,d,h=t.target,b=t.global,m=t.stat;if(s=b?r:m?r[h]||a(h,{}):(r[h]||{}).prototype,s)for(l in e){if(v=e[l],t.noTargetGet?(d=o(s,l),p=d&&d.value):p=s[l],n=u(b?l:h+(m?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof v===typeof p)continue;f(v,p)}(t.sham||p&&p.sham)&&c(v,"sham",!0),i(s,l,v,t)}}},7280:function(t,e,n){"use strict";var r=n("e267"),o=n.n(r);o.a},7297:function(t,e,n){var r=n("f498"),o=n("df6f"),c=r.WeakMap;t.exports="function"===typeof c&&/native code/.test(o(c))},"72df":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"730c":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},7526:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"7c3f":function(t,e,n){var r=n("d4cb"),o=n("72df"),c=n("f2bf");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},"7d53":function(t,e,n){var r=n("f498"),o=n("4cdd"),c=n("f1a7"),i=n("1d8a"),a=n("e7a0"),f=n("4db4"),u=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||i;t.exports=function(t){return c(u,t)||(a&&c(s,t)?u[t]=s[t]:u[t]=l("Symbol."+t)),u[t]}},"83a6":function(t,e,n){var r=n("72df"),o=n("6a61"),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},"8bb2":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"928d":function(t,e,n){t.exports=n.p+"img/icon-custom-kaixin.bbde6f67.svg"},9618:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"9a0f":function(t,e,n){var r=n("8bb2"),o=Math.max,c=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):c(n,e)}},a03e:function(t,e,n){var r=n("5428"),o=n("65d0"),c=n("2402"),i=n("157c");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(i(t)),n=c.f;return n?e.concat(n(t)):e}},abdf:function(t,e,n){var r=n("d4cb"),o=n("7c3f"),c=n("157c"),i=n("083f"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(c(t),e=i(e,!0),c(n),o)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},b17e:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(t,e,n){var r=n("8bb2"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b634:function(t,e,n){var r=n("f1a7"),o=n("a03e"),c=n("185a"),i=n("abdf");t.exports=function(t,e){for(var n=o(e),a=i.f,f=c.f,u=0;u<n.length;u++){var s=n[u];r(t,s)||a(t,s,f(e,s))}}},b8ba:function(t,e,n){var r=n("f498"),o=n("5b12"),c=n("f1a7"),i=n("3e34"),a=n("df6f"),f=n("cdcd"),u=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var f=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(f?!p&&t[e]&&(u=!0):delete t[e],u?t[e]=n:o(t,e,n)):u?t[e]=n:i(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},c607:function(t,e,n){var r=n("f498"),o=n("3e34"),c="__core-js_shared__",i=r[c]||o(c,{});t.exports=i},c6de:function(t,e,n){var r=n("6a61");t.exports=Array.isArray||function(t){return"Array"==r(t)}},c91c:function(t,e,n){var r=n("f1a7"),o=n("378c"),c=n("1f5e").indexOf,i=n("d687");t.exports=function(t,e){var n,a=o(t),f=0,u=[];for(n in a)!r(i,n)&&r(a,n)&&u.push(n);while(e.length>f)r(a,n=e[f++])&&(~c(u,n)||u.push(n));return u}},cdcd:function(t,e,n){var r,o,c,i=n("7297"),a=n("f498"),f=n("7526"),u=n("5b12"),s=n("f1a7"),l=n("332c"),p=n("d687"),v=a.WeakMap,d=function(t){return c(t)?o(t):r(t,{})},h=function(t){return function(e){var n;if(!f(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(i){var b=new v,m=b.get,y=b.has,g=b.set;r=function(t,e){return g.call(b,t,e),e},o=function(t){return m.call(b,t)||{}},c=function(t){return y.call(b,t)}}else{var w=l("state");p[w]=!0,r=function(t,e){return u(t,w,e),e},o=function(t){return s(t,w)?t[w]:{}},c=function(t){return s(t,w)}}t.exports={set:r,get:o,has:c,enforce:d,getterFor:h}},d4cb:function(t,e,n){var r=n("72df");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},d687:function(t,e){t.exports={}},d86f:function(t,e,n){"use strict";var r=n("6b1d"),o=n("72df"),c=n("c6de"),i=n("7526"),a=n("37d1"),f=n("b495"),u=n("dac6"),s=n("6a86"),l=n("189b"),p=n("7d53"),v=n("4fed"),d=p("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",m=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!i(t))return!1;var e=t[d];return void 0!==e?!!e:c(t)},w=!m||!y;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,o,c,i=a(this),l=s(i,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(c=-1===e?i:arguments[e],g(c)){if(o=f(c.length),p+o>h)throw TypeError(b);for(n=0;n<o;n++,p++)n in c&&u(l,p,c[n])}else{if(p>=h)throw TypeError(b);u(l,p++,c)}return l.length=p,l}})},dac6:function(t,e,n){"use strict";var r=n("083f"),o=n("abdf"),c=n("9618");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,c(0,n)):t[i]=n}},df6f:function(t,e,n){var r=n("c607"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},e129:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);e.f=c?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},e267:function(t,e,n){},e7a0:function(t,e,n){var r=n("72df");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},ebac:function(t,e,n){var r=n("72df"),o=/#|\.prototype\./,c=function(t,e){var n=a[i(t)];return n==u||n!=f&&("function"==typeof e?r(e):!!e)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",u=c.POLYFILL="P";t.exports=c},f1a7:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},f2bf:function(t,e,n){var r=n("f498"),o=n("7526"),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},f498:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-4c169319.928f9ce0.js.map