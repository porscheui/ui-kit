(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fc37ec0"],{"083f":function(e,t,n){var r=n("7526");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},"0e93":function(e,t){e.exports=!1},"157c":function(e,t,n){var r=n("7526");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"185a":function(e,t,n){var r=n("d4cb"),o=n("e129"),a=n("9618"),i=n("378c"),c=n("083f"),s=n("f1a7"),u=n("7c3f"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=i(e),t=c(t,!0),u)try{return l(e,t)}catch(n){}if(s(e,t))return a(!o.f.call(e,t),e[t])}},"1d8a":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},"1f5e":function(e,t,n){var r=n("378c"),o=n("b495"),a=n("9a0f"),i=function(e){return function(t,n,i){var c,s=r(t),u=o(s.length),l=a(i,u);if(e&&n!=n){while(u>l)if(c=s[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},2402:function(e,t){t.f=Object.getOwnPropertySymbols},"2aa5":function(e,t,n){"use strict";var r=n("6b1d"),o=n("42c5");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},"2f6a":function(e,t,n){"use strict";var r=n("72df");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"32f5":function(e,t,n){"use strict";var r=n("95b2"),o=n("157c"),a=n("37d1"),i=n("b495"),c=n("8bb2"),s=n("730c"),u=n("e3f6"),l=n("df8c"),f=Math.max,p=Math.min,d=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,y=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,_=m?"$":"$0";return[function(n,r){var o=s(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!m&&g||"string"===typeof r&&-1===r.indexOf(_)){var a=n(t,e,this,r);if(a.done)return a.value}var s=o(e),d=String(this),h="function"===typeof r;h||(r=String(r));var v=s.global;if(v){var x=s.unicode;s.lastIndex=0}var w=[];while(1){var E=l(s,d);if(null===E)break;if(w.push(E),!v)break;var S=String(E[0]);""===S&&(s.lastIndex=u(d,i(s.lastIndex),x))}for(var O="",k=0,P=0;P<w.length;P++){E=w[P];for(var T=String(E[0]),C=f(p(c(E.index),d.length),0),$=[],R=1;R<E.length;R++)$.push(y(E[R]));var j=E.groups;if(h){var F=[T].concat($,C,d);void 0!==j&&F.push(j);var I=String(r.apply(void 0,F))}else I=b(T,d,C,$,j,r);C>=k&&(O+=d.slice(k,C)+I,k=C+T.length)}return O+d.slice(k)}];function b(e,n,r,o,i,c){var s=r+e.length,u=o.length,l=v;return void 0!==i&&(i=a(i),l=h),t.call(c,l,(function(t,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return t;if(l>u){var f=d(l/10);return 0===f?t:f<=u?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):t}c=o[l-1]}return void 0===c?"":c}))}}))},"332c":function(e,t,n){var r=n("4cdd"),o=n("1d8a"),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},"378c":function(e,t,n){var r=n("83a6"),o=n("730c");e.exports=function(e){return r(o(e))}},"37d1":function(e,t,n){var r=n("730c");e.exports=function(e){return Object(r(e))}},"3e34":function(e,t,n){var r=n("f498"),o=n("5b12");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},"3e36":function(e,t,n){var r=n("f498");e.exports=r},"42c5":function(e,t,n){"use strict";var r=n("abfd"),o=n("2f6a"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(e){var t,n,o,c,f=this,p=u&&f.sticky,d=r.call(f),h=f.source,v=0,y=e;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),y=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(h="(?: "+h+")",y=" "+y,v++),n=new RegExp("^(?:"+h+")",d)),l&&(n=new RegExp("^"+h+"$(?!\\s)",d)),s&&(t=f.lastIndex),o=a.call(p?n:f,y),p?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:s&&o&&(f.lastIndex=f.global?o.index+o[0].length:t),l&&o&&o.length>1&&i.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),e.exports=c},"4cdd":function(e,t,n){var r=n("0e93"),o=n("c607");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"4db4":function(e,t,n){var r=n("e7a0");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5428:function(e,t,n){var r=n("3e36"),o=n("f498"),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},"5b12":function(e,t,n){var r=n("d4cb"),o=n("abdf"),a=n("9618");e.exports=r?function(e,t,n){return o.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},"65d0":function(e,t,n){var r=n("c91c"),o=n("b17e"),a=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},"6a61":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"6b1d":function(e,t,n){var r=n("f498"),o=n("185a").f,a=n("5b12"),i=n("b8ba"),c=n("3e34"),s=n("b634"),u=n("ebac");e.exports=function(e,t){var n,l,f,p,d,h,v=e.target,y=e.global,m=e.stat;if(l=y?r:m?r[v]||c(v,{}):(r[v]||{}).prototype,l)for(f in t){if(d=t[f],e.noTargetGet?(h=o(l,f),p=h&&h.value):p=l[f],n=u(y?f:v+(m?".":"#")+f,e.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;s(d,p)}(e.sham||p&&p.sham)&&a(d,"sham",!0),i(l,f,d,e)}}},7297:function(e,t,n){var r=n("f498"),o=n("df6f"),a=r.WeakMap;e.exports="function"===typeof a&&/native code/.test(o(a))},"72df":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"730c":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},7526:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"7c3f":function(e,t,n){var r=n("d4cb"),o=n("72df"),a=n("f2bf");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"7d53":function(e,t,n){var r=n("f498"),o=n("4cdd"),a=n("f1a7"),i=n("1d8a"),c=n("e7a0"),s=n("4db4"),u=o("wks"),l=r.Symbol,f=s?l:l&&l.withoutSetter||i;e.exports=function(e){return a(u,e)||(c&&a(l,e)?u[e]=l[e]:u[e]=f("Symbol."+e)),u[e]}},"83a6":function(e,t,n){var r=n("72df"),o=n("6a61"),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},"8bb2":function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},"95b2":function(e,t,n){"use strict";n("2aa5");var r=n("b8ba"),o=n("72df"),a=n("7d53"),i=n("42c5"),c=n("5b12"),s=a("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var h=a(e),v=!o((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),y=v&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!v||!y||"replace"===e&&(!u||!l||p)||"split"===e&&!d){var m=/./[h],g=n(h,""[e],(function(e,t,n,r,o){return t.exec===i?v&&!o?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=g[0],b=g[1];r(String.prototype,e,_),r(RegExp.prototype,h,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}f&&c(RegExp.prototype[h],"sham",!0)}},9618:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"9a0f":function(e,t,n){var r=n("8bb2"),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},"9ce0":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Loading Behaviour")]),n("p",[e._v("Unstyled content when opening an application or website creates a bad first impression. To prevent this, the Porsche Design System offers various solutions to ensure all necessary Porsche Design System fonts and components are fully loaded.")]),n("p",[e._v("On this page you find detailed instructions on how to prevent Flash of Unstyled Content and Flash of Unstyled Text where we provide options to boost your application, so make sure to keep reading.")]),n("h2",[e._v("Unstyled Porsche Design System Components")]),e._m(0),e._m(1),e._m(2),n("h3",[e._v("Example usage with template")]),e._m(3),n("h3",[e._v("Example usage with placeholder")]),n("p",[e._v("If you don't use webpack or your bundler does not work with the syntax of the previous example you can put a placeholder in your markup and replace its content with a script.")]),e._m(4),e._m(5),n("h3",[e._v("Example usage static")]),e._m(6),n("pre",[n("code",[e._v("// index.html\n\n<head>\n  "+e._s(e.coreStyles)+"\n</head>\n")])]),n("h2",[e._v("Flash of Unstyled Text")]),n("p",[e._v("The Porsche Design System provides font face definitions and loads all needed fonts dynamically from our CDN. Until the fonts are fully loaded the components use the fallback font and you can see a little change as soon as loading is finished.")]),n("h3",[e._v("Inject Porsche Design System Stylesheet")]),n("p",[e._v("So far, if you use the Porsche Design System components we inject the stylesheet with all font face definitions into the head of your application as soon as our core is loaded. We recommend that you load the stylesheet on your own. We don't want to interfere with you application if we don't have to. Also you got more control over resources that are loaded.")]),e._m(7),e._m(8),n("h4",[e._v("Example")]),n("pre",[n("code",[e._v("// index.html\n\n<head>\n  // Using template syntax\n  <%= require('@porsche-design-system/partials').getFontFaceCSS() %>\n\n  // Static solution\n  // Make sure to watch your console output. We notify you about any changes.\n  "+e._s(e.fontFaceCSS)+"\n</head>\n")])]),n("h4",[e._v("Example with placeholder")]),e._m(9),e._m(10),n("h3",[e._v("Preload specific Fonts")]),n("p",[e._v("Fonts should be loaded as soon as possible but only those which are needed. The Porsche Design System is not able to determine which components you use on the site and which fonts we have to provide initially, but we export all resources you need to preload fonts and solve 'Flash of Unstyled Text' in your application")]),e._m(11),n("h4",[e._v("Example preload")]),e._m(12)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you use "),n("code",[e._v("Porsche Design System")]),e._v(" components, we take care that your application only renders a component if it is fully styled. However, it takes a moment until our core is fully loaded and only then we can take action. This short timespan has to be covered.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are two ways to get rid of FOUC. We provide partials in our "),n("code",[e._v("@porsche-design-system/partials")]),e._v(" package for you to import into the "),n("code",[e._v("<head>")]),e._v(" of your "),n("code",[e._v("index.html")]),e._v(". The example shows how to implement a partial in a webpack project.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you are not able to use partials use the second, static solution. Just copy the whole "),n("code",[e._v("<style>")]),e._v(" tag from the second example and put it into the "),n("code",[e._v("<head>")]),e._v(" of the "),n("code",[e._v("index.html")]),e._v(" of your application. While using the static solution, make sure to list every component you use and update the list when you upgrade the version of the "),n("code",[e._v("Porsche Design Sytem")]),e._v(" with new components introduced.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// index.html\n\n<head>\n  <%= require('@porsche-design-system/partials').getPorscheDesignSystemCoreStyles() %>\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// index.html\n\n<head>\n  \x3c!--PLACEHOLDER_CORE_STYLES--\x3e\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('// package.json\n\n"scripts": {\n    "prestart": "yarn replace",\n    "replace": "partial=$(node -e \'console.log(require(\\"@porsche-design-system/partials\\").getPorscheDesignSystemCoreStyles())\') && regex=\'\x3c!--PLACEHOLDER_CORE_STYLES--\x3e|<style>(p-[a-z-]*,?)*{visibility:hidden}<\\\\/style>\' && sed -i \'\' -E -e \\"s@$regex@$partial@\\" src/index.html",\n} \n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note:")]),e._v(" If you implement this static solution you have to keep track of the list and add every new component you use.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("We provide the URL to our stylesheet in our "),n("code",[e._v("@porsche-design-system/assets")]),e._v(" package with the name "),n("code",[e._v("FONT_FACE_CDN_URL")]),e._v(". We also provide a ready to use partial in the "),n("code",[e._v("@porsche-design-system/partials")]),e._v(" package called "),n("code",[e._v("getFontFaceCSS()")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you use the static solution you have to update the "),n("code",[e._v("<Link>")]),e._v(" if changes are made in our font face definitions. But don't worry, we don't remove old files to grant you a valid fallback.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// index.html\n\n<head>\n  \x3c!--PLACEHOLDER_FONT_FACE_CSS--\x3e\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('// package.json\n\n"scripts": {\n    "prestart": "yarn replace",\n    "replace": "partial=$(node -e \'console.log(require(\\"@porsche-design-system/partials\\").getFontFaceCSS())\') && regex=\'\x3c!--PLACEHOLDER_FONT_FACE_CSS--\x3e|<link rel=\\"?stylesheet\\"? href=\\"?https:\\\\/\\\\/cdn\\\\.ui\\\\.porsche\\\\.(com|cn)\\\\/porsche-design-system\\\\/styles\\\\/font-face\\\\.min\\\\..*\\\\.css\\"?>\' && sed -i \'\' -E -e \\"s@$regex@$partial@\\" src/index.html",\n} \n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("We provide all URLs that you need in the "),n("code",[e._v("@porsche-design-system/assets")]),e._v(" package. Use the const "),n("code",[e._v("FONTS_CDN_BASE_URL")]),e._v(" which is the basic path to the CDN and the object "),n("code",[e._v("FONTS_MANIFEST")]),e._v(" which contains the filenames of all "),n("code",[e._v("fonts")]),e._v(" and according "),n("code",[e._v("weights")]),e._v(" in either "),n("code",[e._v("woff")]),e._v(" or "),n("code",[e._v("woff2")]),e._v(" file format. Combine the path and filename to preload them via "),n("code",[e._v("href")]),e._v(" with a "),n("code",[e._v("<link>")]),e._v(" tag at the head of your "),n("code",[e._v("index.html")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('// index.html\n\n<head>\n <link\n   rel="preload"\n   href="path/to/webfont/nameOfWebFontFile"\n   as="font"\n   type="font/woff2"\n   crossorigin\n />\n</head>\n')])])}],a=(n("ac1f"),n("5319"),n("d4ec")),i=n("262e"),c=n("2caf"),s=n("9ab4"),u=n("a026"),l=n("2fe1"),f=(n("2aa5"),n("32f5"),function(e){var t=("cn"===(null===e||void 0===e?void 0:e.cdn)?"https://cdn.ui.porsche.cn":"https://cdn.ui.porsche.com")+"/porsche-design-system/styles/"+("cn"===(null===e||void 0===e?void 0:e.cdn)?"font-face.min.cn.c1b46971322e96095de49987cdc90226.css":"font-face.min.de7353ac41430a74da152a5bf0e7bb5b.css");return(null===e||void 0===e?void 0:e.withoutTags)?t:"<link rel=stylesheet href=$URL$>".replace("$URL$",t)}),p=function(e){var t="p-banner,p-button,p-button-pure,p-checkbox-wrapper,p-content-wrapper,p-divider,p-fieldset-wrapper,p-flex,p-flex-item,p-grid,p-grid-item,p-headline,p-icon,p-link,p-link-pure,p-link-social,p-marque,p-modal,p-pagination,p-radio-button-wrapper,p-select-wrapper,p-spinner,p-tabs,p-tabs-bar,p-tabs-item,p-text,p-text-field-wrapper,p-text-list,p-text-list-item,p-textarea-wrapper{visibility:hidden}";return(null===e||void 0===e?void 0:e.withoutTags)?t:"<style>"+t+"</style>"},d=function(e){Object(i["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.fontFaceCSS=f(),e.coreStyles=p().replace(">",">\n    ").replace(/,/g,",\n    ").replace("}","}\n  ").replace(/({|}|:)/g," $1 ").replace(" :",":"),e}return n}(u["a"]);d=Object(s["a"])([l["b"]],d);var h=d,v=h,y=n("2877"),m=Object(y["a"])(v,r,o,!1,null,null,null);t["default"]=m.exports},a03e:function(e,t,n){var r=n("5428"),o=n("65d0"),a=n("2402"),i=n("157c");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},abdf:function(e,t,n){var r=n("d4cb"),o=n("7c3f"),a=n("157c"),i=n("083f"),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(a(e),t=i(t,!0),a(n),o)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},abfd:function(e,t,n){"use strict";var r=n("157c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b17e:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(e,t,n){var r=n("8bb2"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},b634:function(e,t,n){var r=n("f1a7"),o=n("a03e"),a=n("185a"),i=n("abdf");e.exports=function(e,t){for(var n=o(t),c=i.f,s=a.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||c(e,l,s(t,l))}}},b7fb:function(e,t,n){var r=n("8bb2"),o=n("730c"),a=function(e){return function(t,n){var a,i,c=String(o(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):a:e?c.slice(s,s+2):i-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},b8ba:function(e,t,n){var r=n("f498"),o=n("5b12"),a=n("f1a7"),i=n("3e34"),c=n("df6f"),s=n("cdcd"),u=s.get,l=s.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var s=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||o(n,"name",t),l(n).source=f.join("string"==typeof t?t:"")),e!==r?(s?!p&&e[t]&&(u=!0):delete e[t],u?e[t]=n:o(e,t,n)):u?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},c607:function(e,t,n){var r=n("f498"),o=n("3e34"),a="__core-js_shared__",i=r[a]||o(a,{});e.exports=i},c91c:function(e,t,n){var r=n("f1a7"),o=n("378c"),a=n("1f5e").indexOf,i=n("d687");e.exports=function(e,t){var n,c=o(e),s=0,u=[];for(n in c)!r(i,n)&&r(c,n)&&u.push(n);while(t.length>s)r(c,n=t[s++])&&(~a(u,n)||u.push(n));return u}},cdcd:function(e,t,n){var r,o,a,i=n("7297"),c=n("f498"),s=n("7526"),u=n("5b12"),l=n("f1a7"),f=n("332c"),p=n("d687"),d=c.WeakMap,h=function(e){return a(e)?o(e):r(e,{})},v=function(e){return function(t){var n;if(!s(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(i){var y=new d,m=y.get,g=y.has,_=y.set;r=function(e,t){return _.call(y,e,t),t},o=function(e){return m.call(y,e)||{}},a=function(e){return g.call(y,e)}}else{var b=f("state");p[b]=!0,r=function(e,t){return u(e,b,t),t},o=function(e){return l(e,b)?e[b]:{}},a=function(e){return l(e,b)}}e.exports={set:r,get:o,has:a,enforce:h,getterFor:v}},d4cb:function(e,t,n){var r=n("72df");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},d687:function(e,t){e.exports={}},df6f:function(e,t,n){var r=n("c607"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},df8c:function(e,t,n){var r=n("6a61"),o=n("42c5");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},e129:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},e3f6:function(e,t,n){"use strict";var r=n("b7fb").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},e7a0:function(e,t,n){var r=n("72df");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},ebac:function(e,t,n){var r=n("72df"),o=/#|\.prototype\./,a=function(e,t){var n=c[i(e)];return n==u||n!=s&&("function"==typeof t?r(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",u=a.POLYFILL="P";e.exports=a},f1a7:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},f2bf:function(e,t,n){var r=n("f498"),o=n("7526"),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},f498:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-7fc37ec0.036d51cb.js.map