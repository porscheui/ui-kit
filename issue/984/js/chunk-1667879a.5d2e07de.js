(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1667879a"],{"083f":function(e,t,n){var o=n("7526");e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},"0e93":function(e,t){e.exports=!1},"157c":function(e,t,n){var o=n("7526");e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},"185a":function(e,t,n){var o=n("d4cb"),r=n("e129"),i=n("9618"),u=n("378c"),c=n("083f"),a=n("f1a7"),f=n("7c3f"),s=Object.getOwnPropertyDescriptor;t.f=o?s:function(e,t){if(e=u(e),t=c(t,!0),f)try{return s(e,t)}catch(n){}if(a(e,t))return i(!r.f.call(e,t),e[t])}},"189b":function(e,t,n){var o=n("72df"),r=n("7d53"),i=n("4fed"),u=r("species");e.exports=function(e){return i>=51||!o((function(){var t=[],n=t.constructor={};return n[u]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1d8a":function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+o).toString(36)}},"1f5e":function(e,t,n){var o=n("378c"),r=n("b495"),i=n("9a0f"),u=function(e){return function(t,n,u){var c,a=o(t),f=r(a.length),s=i(u,f);if(e&&n!=n){while(f>s)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:u(!0),indexOf:u(!1)}},2402:function(e,t){t.f=Object.getOwnPropertySymbols},"2b94":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Button Pure")]),n("h2",[e._v("Introduction")]),e._m(0),n("p",[e._v("It can be used with or without a label. When hiding the label make sure to provide a descriptive label text for screen readers.")]),n("h2",[e._v("Basic example")]),n("h3",[e._v("With label")]),n("Playground",{attrs:{markup:e.withLabel,config:e.config}}),n("h3",[e._v("Without label")]),n("Playground",{attrs:{markup:e.withoutLabel,config:e.config}}),n("h3",[e._v("Responsive")]),n("Playground",{attrs:{markup:e.responsive,config:e.config}}),n("hr"),n("h2",[e._v("Size")]),e._m(1),e._m(2),n("Playground",{attrs:{markup:e.markupSize,config:e.config},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.size=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select a size")]),n("option",[e._v("x-small")]),n("option",[e._v("small")]),n("option",{attrs:{selected:""}},[e._v("medium")]),n("option",[e._v("large")]),n("option",[e._v("x-large")]),n("option",[e._v("inherit")])])]},proxy:!0}])}),n("h3",[e._v("Responsive")]),e._m(3),n("Playground",{attrs:{markup:e.markupResponsive,config:e.config}}),n("hr"),n("h2",[e._v("Weight")]),e._m(4),n("Playground",{attrs:{markup:e.markupWeight,config:e.config},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.weight=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select a weight")]),n("option",{attrs:{selected:""}},[e._v("thin")]),n("option",[e._v("regular")]),n("option",[e._v("bold")])])]},proxy:!0}])}),n("hr"),n("h2",[e._v("Button with specific icon")]),e._m(5),n("Playground",{attrs:{markup:e.icon,config:e.config}}),n("hr"),n("h2",[e._v("Button with custom clickable/focusable area")]),n("p",[e._v("Sometimes it might be useful to enlarge the clickable/focusable area of a button to fulfill accessibility guidelines. Therefore a custom padding can be set on the host element.")]),n("Playground",{attrs:{markup:e.clickableArea,config:e.config}}),n("hr"),n("h2",[e._v("Bind events to the button")]),e._m(6),n("Playground",{attrs:{markup:e.events,config:e.config}}),n("hr"),n("h2",[e._v("Remove button from tab order")]),e._m(7),n("Playground",{attrs:{markup:e.taborder,config:e.config}}),n("hr"),n("h2",[e._v("Button with Subline")]),e._m(8),n("Playground",{attrs:{markup:e.subline,config:e.config},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.size=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select a size")]),n("option",{attrs:{selected:""}},[e._v("small")]),n("option",[e._v("medium")]),n("option",[e._v("large")]),n("option",[e._v("x-large")])])]},proxy:!0}])})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("<p-button-pure>")]),e._v(" component is essential to perform events for interactions.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are predefined text sizes for the component which should cover most use cases. If a specific text size is needed, the size can be set to "),n("code",[e._v("inherit")]),e._v(" to specify the text size from outside.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Hint:")]),e._v(" If you are in "),n("code",[e._v("hideLabel")]),e._v("-mode, be aware that the box-size of the rendered element will not be the same as the given (font-size) pixel value, e.g. setting a font-size of "),n("strong",[e._v('"44px"')]),e._v(" will not generate a box with a "),n("strong",[e._v('"44px"')]),e._v(" width/height but instead a box size generated out of Porsche type-scaling formula which will end in "),n("strong",[e._v('"52px"')]),e._v(" width/height.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are predefined default text weights. Be aware of using the "),n("code",[e._v("thin")]),e._v(" variant only with larger text sizes.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If another icon needs to be implemented, just replace the default icon with another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),n("code",[e._v("icon")]),e._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),n("code",[e._v("iconSource")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can use native "),n("code",[e._v("click")]),e._v(", "),n("code",[e._v("focus")]),e._v(", "),n("code",[e._v("focusin")]),e._v(", "),n("code",[e._v("blur")]),e._v(" and "),n("code",[e._v("focusout")]),e._v(" events on the button.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("With setting the "),n("code",[e._v("tabbable")]),e._v(" property to "),n("code",[e._v("false")]),e._v(" you can remove the button from the tab order. For technical restrictions it's currently not possible to set an individual "),n("code",[e._v("tabindex")]),e._v(" attribute.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you need additional information on your button, we provide a "),n("code",[e._v('<p slot="subline" />')]),e._v(". The size of the "),n("em",[e._v("subline")]),e._v(" changes according to the size of the "),n("em",[e._v("label")]),e._v(". We do not support "),n("code",[e._v('size="inherit"')]),e._v(" in this pattern so far.")])}],i=(n("d86f"),n("d4ec")),u=n("bee2"),c=n("262e"),a=n("2caf"),f=n("0f9e"),s=n("a026"),l=n("2fe1"),p=function(e){Object(c["a"])(o,e);var t=Object(a["a"])(o);function o(){var e;return Object(i["a"])(this,o),e=t.apply(this,arguments),e.config={themeable:!0,spacing:"inline"},e.size="medium",e.weight="thin",e.withLabel='<p-button-pure>Some label</p-button-pure>\n<p-button-pure disabled="true">Some label</p-button-pure>\n<p-button-pure loading="true">Some label</p-button-pure>',e.withoutLabel='<p-button-pure hide-label="true">Some label</p-button-pure>\n<p-button-pure hide-label="true" disabled="true">Some label</p-button-pure>\n<p-button-pure hide-label="true" loading="true">Some label</p-button-pure>',e.responsive='<p-button-pure hide-label="{ base: true, l: false }">Some label</p-button-pure>',e.markupResponsive="<p-button-pure size=\"{ base: 'small', l: 'medium' }\">Some label</p-button-pure>",e.icon='<p-button-pure icon="delete">Some label</p-button-pure>\n<p-button-pure icon-source="'.concat(n("8f19"),'" hide-label="true">Some label</p-button-pure>'),e.clickableArea='<p-button-pure style="padding: 1rem;">Some label</p-button-pure>\n<p-button-pure hide-label="true" style="padding: 1rem;">Some label</p-button-pure>',e.events="<p-button-pure\n  onclick=\"alert('click')\"\n  onfocus=\"console.log('focus')\"\n  onfocusin=\"console.log('focusin')\"\n  onblur=\"console.log('blur')\"\n  onfocusout=\"console.log('focusout')\"\n>Some label</p-button-pure>",e.taborder='<p-button-pure tabbable="true">Some label</p-button-pure>\n<p-button-pure tabbable="false" hide-label="true">Some label</p-button-pure>',e}return Object(u["a"])(o,[{key:"markupSize",get:function(){var e="inherit"===this.size?' style="font-size: 48px;"':"";return'<p-button-pure size="'.concat(this.size,'"').concat(e,">Some label</p-button-pure>")}},{key:"markupWeight",get:function(){return'<p-button-pure size="medium" weight="'.concat(this.weight,'">Some label</p-button-pure>')}},{key:"subline",get:function(){return'<p-button-pure size="'.concat(this.size,'">\n  Some label\n  <p slot="subline">Some Subline</p>\n</p-button-pure>\n<p-button-pure size="').concat(this.size,'" weight="semibold">\n  Some label\n  <p slot="subline">Some Subline</p>\n</p-button-pure>')}}]),o}(s["a"]);p=Object(f["b"])([l["b"]],p);var b=p,v=b,d=n("2877"),h=Object(d["a"])(v,o,r,!1,null,null,null);t["default"]=h.exports},"332c":function(e,t,n){var o=n("4cdd"),r=n("1d8a"),i=o("keys");e.exports=function(e){return i[e]||(i[e]=r(e))}},"378c":function(e,t,n){var o=n("83a6"),r=n("730c");e.exports=function(e){return o(r(e))}},"37d1":function(e,t,n){var o=n("730c");e.exports=function(e){return Object(o(e))}},"3e34":function(e,t,n){var o=n("f498"),r=n("5b12");e.exports=function(e,t){try{r(o,e,t)}catch(n){o[e]=t}return t}},"3e36":function(e,t,n){var o=n("f498");e.exports=o},"4cdd":function(e,t,n){var o=n("0e93"),r=n("c607");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"4db4":function(e,t,n){var o=n("e7a0");e.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"4fed":function(e,t,n){var o,r,i=n("f498"),u=n("64e4"),c=i.process,a=c&&c.versions,f=a&&a.v8;f?(o=f.split("."),r=o[0]+o[1]):u&&(o=u.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=u.match(/Chrome\/(\d+)/),o&&(r=o[1]))),e.exports=r&&+r},5428:function(e,t,n){var o=n("3e36"),r=n("f498"),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(o[e])||i(r[e]):o[e]&&o[e][t]||r[e]&&r[e][t]}},"5b12":function(e,t,n){var o=n("d4cb"),r=n("abdf"),i=n("9618");e.exports=o?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"64e4":function(e,t,n){var o=n("5428");e.exports=o("navigator","userAgent")||""},"65d0":function(e,t,n){var o=n("c91c"),r=n("b17e"),i=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},"6a61":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"6a86":function(e,t,n){var o=n("7526"),r=n("c6de"),i=n("7d53"),u=i("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[u],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6b1d":function(e,t,n){var o=n("f498"),r=n("185a").f,i=n("5b12"),u=n("b8ba"),c=n("3e34"),a=n("b634"),f=n("ebac");e.exports=function(e,t){var n,s,l,p,b,v,d=e.target,h=e.global,m=e.stat;if(s=h?o:m?o[d]||c(d,{}):(o[d]||{}).prototype,s)for(l in t){if(b=t[l],e.noTargetGet?(v=r(s,l),p=v&&v.value):p=s[l],n=f(h?l:d+(m?".":"#")+l,e.forced),!n&&void 0!==p){if(typeof b===typeof p)continue;a(b,p)}(e.sham||p&&p.sham)&&i(b,"sham",!0),u(s,l,b,e)}}},7297:function(e,t,n){var o=n("f498"),r=n("df6f"),i=o.WeakMap;e.exports="function"===typeof i&&/native code/.test(r(i))},"72df":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"730c":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},7526:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"7c3f":function(e,t,n){var o=n("d4cb"),r=n("72df"),i=n("f2bf");e.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"7d53":function(e,t,n){var o=n("f498"),r=n("4cdd"),i=n("f1a7"),u=n("1d8a"),c=n("e7a0"),a=n("4db4"),f=r("wks"),s=o.Symbol,l=a?s:s&&s.withoutSetter||u;e.exports=function(e){return i(f,e)||(c&&i(s,e)?f[e]=s[e]:f[e]=l("Symbol."+e)),f[e]}},"83a6":function(e,t,n){var o=n("72df"),r=n("6a61"),i="".split;e.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?i.call(e,""):Object(e)}:Object},"8bb2":function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},"8f19":function(e,t,n){e.exports=n.p+"img/icon-custom-kaixin.bbde6f67.svg"},9618:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"9a0f":function(e,t,n){var o=n("8bb2"),r=Math.max,i=Math.min;e.exports=function(e,t){var n=o(e);return n<0?r(n+t,0):i(n,t)}},a03e:function(e,t,n){var o=n("5428"),r=n("65d0"),i=n("2402"),u=n("157c");e.exports=o("Reflect","ownKeys")||function(e){var t=r.f(u(e)),n=i.f;return n?t.concat(n(e)):t}},abdf:function(e,t,n){var o=n("d4cb"),r=n("7c3f"),i=n("157c"),u=n("083f"),c=Object.defineProperty;t.f=o?c:function(e,t,n){if(i(e),t=u(t,!0),i(n),r)try{return c(e,t,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},b17e:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(e,t,n){var o=n("8bb2"),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},b634:function(e,t,n){var o=n("f1a7"),r=n("a03e"),i=n("185a"),u=n("abdf");e.exports=function(e,t){for(var n=r(t),c=u.f,a=i.f,f=0;f<n.length;f++){var s=n[f];o(e,s)||c(e,s,a(t,s))}}},b8ba:function(e,t,n){var o=n("f498"),r=n("5b12"),i=n("f1a7"),u=n("3e34"),c=n("df6f"),a=n("cdcd"),f=a.get,s=a.enforce,l=String(String).split("String");(e.exports=function(e,t,n,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||r(n,"name",t),s(n).source=l.join("string"==typeof t?t:"")),e!==o?(a?!p&&e[t]&&(f=!0):delete e[t],f?e[t]=n:r(e,t,n)):f?e[t]=n:u(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},c607:function(e,t,n){var o=n("f498"),r=n("3e34"),i="__core-js_shared__",u=o[i]||r(i,{});e.exports=u},c6de:function(e,t,n){var o=n("6a61");e.exports=Array.isArray||function(e){return"Array"==o(e)}},c91c:function(e,t,n){var o=n("f1a7"),r=n("378c"),i=n("1f5e").indexOf,u=n("d687");e.exports=function(e,t){var n,c=r(e),a=0,f=[];for(n in c)!o(u,n)&&o(c,n)&&f.push(n);while(t.length>a)o(c,n=t[a++])&&(~i(f,n)||f.push(n));return f}},cdcd:function(e,t,n){var o,r,i,u=n("7297"),c=n("f498"),a=n("7526"),f=n("5b12"),s=n("f1a7"),l=n("332c"),p=n("d687"),b=c.WeakMap,v=function(e){return i(e)?r(e):o(e,{})},d=function(e){return function(t){var n;if(!a(t)||(n=r(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(u){var h=new b,m=h.get,g=h.has,_=h.set;o=function(e,t){return _.call(h,e,t),t},r=function(e){return m.call(h,e)||{}},i=function(e){return g.call(h,e)}}else{var y=l("state");p[y]=!0,o=function(e,t){return f(e,y,t),t},r=function(e){return s(e,y)?e[y]:{}},i=function(e){return s(e,y)}}e.exports={set:o,get:r,has:i,enforce:v,getterFor:d}},d4cb:function(e,t,n){var o=n("72df");e.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},d687:function(e,t){e.exports={}},d86f:function(e,t,n){"use strict";var o=n("6b1d"),r=n("72df"),i=n("c6de"),u=n("7526"),c=n("37d1"),a=n("b495"),f=n("dac6"),s=n("6a86"),l=n("189b"),p=n("7d53"),b=n("4fed"),v=p("isConcatSpreadable"),d=9007199254740991,h="Maximum allowed index exceeded",m=b>=51||!r((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),g=l("concat"),_=function(e){if(!u(e))return!1;var t=e[v];return void 0!==t?!!t:i(e)},y=!m||!g;o({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,o,r,i,u=c(this),l=s(u,0),p=0;for(t=-1,o=arguments.length;t<o;t++)if(i=-1===t?u:arguments[t],_(i)){if(r=a(i.length),p+r>d)throw TypeError(h);for(n=0;n<r;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=d)throw TypeError(h);f(l,p++,i)}return l.length=p,l}})},dac6:function(e,t,n){"use strict";var o=n("083f"),r=n("abdf"),i=n("9618");e.exports=function(e,t,n){var u=o(t);u in e?r.f(e,u,i(0,n)):e[u]=n}},df6f:function(e,t,n){var o=n("c607"),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(e){return r.call(e)}),e.exports=o.inspectSource},e129:function(e,t,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:o},e7a0:function(e,t,n){var o=n("72df");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},ebac:function(e,t,n){var o=n("72df"),r=/#|\.prototype\./,i=function(e,t){var n=c[u(e)];return n==f||n!=a&&("function"==typeof t?o(t):!!t)},u=i.normalize=function(e){return String(e).replace(r,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";e.exports=i},f1a7:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},f2bf:function(e,t,n){var o=n("f498"),r=n("7526"),i=o.document,u=r(i)&&r(i.createElement);e.exports=function(e){return u?i.createElement(e):{}}},f498:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-1667879a.5d2e07de.js.map