(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74856f39"],{"56ef1":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vmark"},[o("h1",[e._v("Flash Of Unstyled Content")]),o("p",[e._v("Unstyled content when opening an application or website creates a bad first impression. To prevent this, the Porsche Design System offers various solutions to ensure all necessary Porsche Design System fonts and components are fully loaded.")]),o("p",[e._v("On this page you find detailed instructions on how to prevent Flash of Unstyled Content and Flash of Unstyled Text where we provide options to boost your application, so make sure to keep reading.")]),o("h2",[e._v("Unstyled Porsche Design System Components")]),e._m(0),e._m(1),e._m(2),o("h3",[e._v("Example usage with template")]),e._m(3),o("h3",[e._v("Example usage static")]),e._m(4),o("pre",[o("code",[e._v("// index.html\n\n<head>\n  "+e._s(e.coreStyles)+"\n</head>\n")])]),o("h2",[e._v("Flash of Unstyled Text")]),o("p",[e._v("The Porsche Design System provides font face definitions and loads all needed fonts dynamically from our CDN. Until the fonts are fully loaded the components use the fallback font and you can see a little change as soon as loading is finished.")]),o("h3",[e._v("Inject Porsche Design System Stylesheet")]),o("p",[e._v("So far, if you use the Porsche Design System components we inject the stylesheet with all font face definitions into the head of your application as soon as our core is loaded. We recommend that you load the stylesheet on your own. We don't want to interfere with you application if we don't have to. Also you got more control over resources that are loaded.")]),e._m(5),e._m(6),o("h4",[e._v("Example")]),o("pre",[o("code",[e._v("// index.html\n// Using template syntax\n<head>\n  <%= require('@porsche-design-system/partials').getFontFaceCSS() %>\n</head>\n\n// Static solution\n// If you use the static solution watch your console output. We notify if changes happen.\n<head>\n  "+e._s(e.fontFaceCSS)+"\n</head>\n")])]),o("h3",[e._v("Preload specific Fonts")]),o("p",[e._v("Fonts should be loaded as soon as possible but only those which are needed. The Porsche Design System is not able to determine which components you use on the site and which fonts we have to provide initially but we export all resources you need to preload fonts and solve 'Flash of Unstyled Text' in your application")]),e._m(7),o("h4",[e._v("Example preload")]),e._m(8)])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("If you use "),o("code",[e._v("Porsche Design System")]),e._v(" components, we take care that your application only renders a component if it is fully styled. But there is a blink until our core is loaded and we can take action. This short timespan has to be covered.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("There are two ways to get rid of FOUC. We provide partials in our "),o("code",[e._v("@porsche-design-system/partials")]),e._v(" package for you to import into the "),o("code",[e._v("<head>")]),e._v(" of your "),o("code",[e._v("index.html")]),e._v(". The example shows how to implement a partial in a webpack project.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("If you are not able to use partials use the second, static solution. Just copy the whole "),o("code",[e._v("<style>")]),e._v(" tag from the second example and put it into the "),o("code",[e._v("<head>")]),e._v(" of the "),o("code",[e._v("index.html")]),e._v(" of your application. While using the static solution, make sure to list every component you use and update the list when you upgrade the version of the "),o("code",[e._v("Porsche Design Sytem")]),e._v(" with new components introduced.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[o("code",[e._v("// index.html\n\n<head>\n  <%= require('@porsche-design-system/partials').getPorscheDesignSystemCoreStyles() %>\n</head>\n")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("strong",[e._v("Note:")]),e._v(" If you implement this static solution you have to keep track of the list and add every new component you use.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("We provide the URL to our stylesheet in our "),o("code",[e._v("@porsche-design-system/assets")]),e._v(" package with the name "),o("code",[e._v("FONT_FACE_CDN_URL")]),e._v(". We also provide a ready to use partial in the "),o("code",[e._v("@porsche-design-system/partials")]),e._v(" package called "),o("code",[e._v("getFontFaceCSS()")]),e._v(".")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("If you use the static solution you have to update the "),o("code",[e._v("<Link>")]),e._v(" if changes are made in our font face definitions. But don't worry, we don't remove old files to grant you a valid fallback.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("We provide all URL´s you need in the "),o("code",[e._v("@porsche-design-system/assets")]),e._v(" package. Use the const "),o("code",[e._v("FONTS_CDN_BASE_URL")]),e._v(" which is the basic path to the CDN and the object "),o("code",[e._v("FONTS_MANIFEST")]),e._v(" which contains the filenames of all "),o("code",[e._v("fonts")]),e._v(" and according "),o("code",[e._v("weights")]),e._v(" in either "),o("code",[e._v("woff")]),e._v(" or "),o("code",[e._v("woff2")]),e._v(" file format. Combine the path and filename to preload them as "),o("code",[e._v("href")]),e._v(" in a "),o("code",[e._v("<Link>")]),e._v(" at the head of your "),o("code",[e._v("index.html")]),e._v(".")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[o("code",[e._v('<head>\n <link\n   rel="preload"\n   href="path/to/webfont/nameOfWebFontFile"\n   as="font"\n   type="font/woff2"\n   crossorigin\n />\n</head>\n')])])}],a=(o("ac1f"),o("5319"),o("276c")),i=o("920b"),r=o("92a6"),c=o("9ab4"),l=o("60a3"),h=function(e){return(null===e||void 0===e?void 0:e.withoutTags)?"https://cdn.ui.porsche.com/porsche-design-system/style/font-face.min.de7353ac41430a74da152a5bf0e7bb5b.css":"<link rel=stylesheet href=https://cdn.ui.porsche.com/porsche-design-system/style/font-face.min.de7353ac41430a74da152a5bf0e7bb5b.css>"},d=function(e){var t="p-button,p-button-pure,p-checkbox-wrapper,p-content-wrapper,p-divider,p-fieldset-wrapper,p-flex,p-flex-item,p-grid,p-grid-item,p-headline,p-icon,p-link,p-link-pure,p-link-social,p-marque,p-pagination,p-radio-button-wrapper,p-select-wrapper,p-spinner,p-text,p-text-field-wrapper,p-text-list,p-text-list-item,p-textarea-wrapper{visibility:hidden}";return(null===e||void 0===e?void 0:e.withoutTags)?t:"<style>"+t+"</style>"},p=function(e){Object(i["a"])(o,e);var t=Object(r["a"])(o);function o(){var e;return Object(a["a"])(this,o),e=t.apply(this,arguments),e.fontFaceCSS=h(),e.coreStyles=d().replace(">",">\n    ").replace(/,/g,",\n    ").replace("}","}\n  "),e}return o}(l["c"]);p=Object(c["a"])([l["a"]],p);var u=p,v=u,f=o("2877"),_=Object(f["a"])(v,n,s,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-74856f39.662fa10e.js.map