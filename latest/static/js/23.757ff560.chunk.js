(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{302:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=m(t(0)),o=m(t(78)),l=m(t(4));function m(e){return e&&e.__esModule?e:{default:e}}var p=(0,o.default)({}),c=p.Provider,i=p.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,o=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return r.default.createElement(i,null,function(n){return r.default.createElement(e,a({components:t||n},o))})}};var s=function(e){var n=e.components,t=e.children;return r.default.createElement(c,{value:n},t)};s.propTypes={components:l.default.object.isRequired,children:l.default.element.isRequired},n.default=s},303:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(305);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=t(302);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},304:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"a",function(){return a})},305:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(0),l=c(o),m=c(t(306)),p=t(302);function c(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,r=e.props,o=void 0===r?{}:r,p=e.children,c=e.components,s=void 0===c?{}:c,u=e.Layout,d=e.layoutProps,g=s[t+"."+n]||s[n]||i[n]||n;return u?((0,m.default)(this,u),l.default.createElement(u,a({components:s},d),l.default.createElement(g,o,p))):l.default.createElement(g,o,p)}}]),n}();n.default=(0,p.withMDXComponents)(s)},306:function(e,n,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,i=c&&c(Object);e.exports=function e(n,t,s){if("string"!==typeof t){if(i){var u=c(t);u&&u!==i&&e(n,u,s)}var d=l(t);m&&(d=d.concat(m(t)));for(var g=0;g<d.length;++g){var f=d[g];if(!a[f]&&!r[f]&&(!s||!s[f])){var D=p(t,f);try{o(n,f,D)}catch(M){}}}return n}return n}},347:function(e,n,t){"use strict";t.r(n);var a=t(304),r=t(0),o=t.n(r),l=t(303);n.default=function(e){var n=e.components;Object(a.a)(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:n},o.a.createElement(l.MDXTag,{name:"h1",components:n},"Icon"),o.a.createElement(l.MDXTag,{name:"h2",components:n},"Properties"),o.a.createElement(l.MDXTag,{name:"table",components:n},o.a.createElement(l.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Attribute"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default"))),o.a.createElement(l.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ariaLabel")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"aria-label")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Specifies the label to use for accessibility. Defaults to the icon name."),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"string")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"undefined"))),o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"icon")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"icon")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Specifies which icon file to use."),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"string")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"undefined"))),o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"lazy")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"lazy")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"false"),"."),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"boolean")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"false"))),o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"path")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"path")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Specifies the exact http(s) ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"path")," to an SVG file to use."),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"string")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},'"https://ui.porsche.com/cdn/0.0.3/icon/"'))),o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"size")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"size")),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The size of the icon."),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},'"large" | "medium" | "small"')),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},'"small"'))))),o.a.createElement(l.MDXTag,{name:"h2",components:n},"Dependencies"),o.a.createElement(l.MDXTag,{name:"h3",components:n},"Used by"),o.a.createElement(l.MDXTag,{name:"ul",components:n},o.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#/action/button-regular"}},"p-button-regular"))))}}}]);
//# sourceMappingURL=23.757ff560.chunk.js.map