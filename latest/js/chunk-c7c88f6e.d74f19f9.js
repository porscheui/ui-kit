(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7c88f6e"],{"0538":function(e,t,n){"use strict";var r=n("1c0b"),a=n("861d"),o=[].slice,c={},s=function(e,t,n){if(!(t in c)){for(var r=[],a=0;a<t;a++)r[a]="a["+a+"]";c[t]=Function("C,a","return new C("+r.join(",")+")")}return c[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=o.call(arguments,1),c=function(){var r=n.concat(o.call(arguments));return this instanceof c?s(t,r.length,r):t.apply(e,r)};return a(t.prototype)&&(c.prototype=t.prototype),c}},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),a=n("825a"),o=n("d039"),c=n("ad6d"),s="toString",i=RegExp.prototype,l=i[s],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=l.name!=s;(u||p)&&r(RegExp.prototype,s,(function(){var e=a(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in i)?c.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"276c":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},3410:function(e,t,n){var r=n("23e7"),a=n("d039"),o=n("7b0b"),c=n("e163"),s=n("e177"),i=a((function(){c(1)}));r({target:"Object",stat:!0,forced:i,sham:!s},{getPrototypeOf:function(e){return c(o(e))}})},"4ae1":function(e,t,n){var r=n("23e7"),a=n("d066"),o=n("1c0b"),c=n("825a"),s=n("861d"),i=n("7c73"),l=n("0538"),u=n("d039"),p=a("Reflect","construct"),f=u((function(){function e(){}return!(p((function(){}),[],e)instanceof e)})),h=!u((function(){p((function(){}))})),d=f||h;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(e,t){o(e),c(t);var n=arguments.length<3?e:o(arguments[2]);if(h&&!f)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var a=n.prototype,u=i(s(a)?a:Object.prototype),d=Function.apply.call(e,u,t);return s(d)?d:u}})},"8f0b":function(e,t,n){"use strict";var r=n("6b1d"),a=n("e8e5");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"920b":function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},"92a6":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("4ae1"),n("3410");function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n("d3b7"),n("25f0");function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var o=n("0122");function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return!t||"object"!==Object(o["a"])(t)&&"function"!==typeof t?c(e):t}function i(e){var t=a();return function(){var n,a=r(e);if(t){var o=r(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return s(this,n)}}},e259:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Checkbox")]),e._m(0),e._m(1),n("h2",[e._v("Basic example")]),n("Playground",{attrs:{childElementLayout:{spacing:"block"}},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),n("option",{attrs:{value:"hide"}},[e._v("Without label")]),n("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]},proxy:!0}])},[[n("p-checkbox-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[n("input",{attrs:{type:"checkbox",name:"some-name"}})]),n("p-checkbox-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[n("input",{attrs:{type:"checkbox",name:"some-name",checked:""}})])]],2),n("hr"),n("h2",[e._v("Indeterminate")]),e._m(2),e._m(3),n("Playground",{attrs:{childElementLayout:{spacing:"inline"}}},[n("p-checkbox-wrapper",{attrs:{label:"Some label"}},[n("input",{staticClass:"example-set-to-indeterminate",attrs:{type:"checkbox",name:"some-name"}})]),n("p-checkbox-wrapper",{attrs:{label:"Some label",indeterminate:"true"}},[n("input",{staticClass:"example-set-to-indeterminate",attrs:{type:"checkbox",name:"some-name",checked:""}})])],1),n("hr"),n("h2",[e._v("Disabled")]),n("Playground",{attrs:{childElementLayout:{spacing:"inline"}}},[n("p-checkbox-wrapper",{attrs:{label:"Some label"}},[n("input",{attrs:{type:"checkbox",name:"some-name",disabled:""}})]),n("p-checkbox-wrapper",{attrs:{label:"Some label"}},[n("input",{attrs:{type:"checkbox",name:"some-name",checked:"",disabled:""}})])],1),n("hr"),n("h2",[e._v("Validation states")]),e._m(4),n("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),n("option",{attrs:{value:"error"}},[e._v("Error")]),n("option",{attrs:{value:"success"}},[e._v("Success")]),n("option",{attrs:{value:"none"}},[e._v("None")])])]},proxy:!0}])},[[n("p-checkbox-wrapper",{attrs:{label:"Some label",state:e.state,message:"none"!==e.state?"Some "+e.state+" validation message.":""}},[n("input",{attrs:{type:"checkbox",name:"some-name"}})])]],2),n("hr"),n("h2",[e._v("Slots")]),e._m(5),n("Playground",[[n("p-checkbox-wrapper",{attrs:{state:"error"}},[n("span",{attrs:{slot:"label",id:"some-label-id"},slot:"label"},[e._v("Some label with a "),n("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")]),n("input",{attrs:{type:"checkbox",name:"some-name","aria-labelledby":"some-label-id","aria-describedby":"some-message-id"}}),n("span",{attrs:{slot:"message",id:"some-message-id"},slot:"message"},[e._v("Some error message with a "),n("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")])])]],2)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("strong",[e._v("Checkbox Wrapper")]),e._v(" component is a styling wrapper for the native HTML input type "),n("code",[e._v("checkbox")]),e._v(" form element.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("A "),n("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),n("strong",[e._v("Checkbox Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Mask the visual appearance of a checkbox which has a state in-between checked and unchecked."),n("br"),e._v(" This is especially useful for a checkbox that is used to set the state of a group of checkboxes at once. However this group might have a mixed state. In this case we recommend to use "),n("code",[e._v("checked=false")]),e._v(" and "),n("code",[e._v("indeterminate=true")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note: The "),n("code",[e._v("indeterminate")]),e._v(" attribute can only be set through the DOM node. There is no HTML attribute to set it. Also it's worth to know, that the "),n("code",[e._v("indeterminate")]),e._v(" attribute only affects how the checkbox is shown. The current value is hidden from the user, but the checkbox still keeps it's "),n("code",[e._v("checked")]),e._v(" state. You can find more details in "),n("a",{attrs:{href:"https://www.w3.org/TR/html52/sec-forms.html#dom-htmlinputelement-indeterminate"}},[e._v("the specification")]),e._v(".")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("strong",[e._v("Checkbox Wrapper")]),e._v(" component supports the visualisation of inline validation. The "),n("code",[e._v("message")]),e._v(" and "),n("code",[e._v("checkbox")]),e._v(" is colored and visible/hidden depending on the defined "),n("code",[e._v("state")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),n("code",[e._v("label")]),e._v(" or "),n("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),n("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),n("strong",[e._v("aria")]),e._v(" attributes.")])}],o=(n("8f0b"),n("fa8c"),n("276c")),c=n("e954"),s=n("920b"),i=n("92a6"),l=n("0f9e"),u=n("60a3"),p=function(e){Object(s["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.state="error",e.label="show",e}return Object(c["a"])(n,[{key:"mounted",value:function(){this.$nextTick((function(){var e=document.querySelectorAll(".example-set-to-indeterminate");e.forEach((function(e){e.indeterminate=!0}))}))}}]),n}(u["c"]);p=Object(l["b"])([u["a"]],p);var f=p,h=f,d=n("2877"),v=Object(d["a"])(h,r,a,!1,null,null,null);t["default"]=v.exports},e8e5:function(e,t,n){"use strict";var r=n("d054").forEach,a=n("7f8a"),o=n("ce71"),c=a("forEach"),s=o("forEach");e.exports=c&&s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},e954:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},fa8c:function(e,t,n){var r=n("f498"),a=n("130d"),o=n("e8e5"),c=n("5b12");for(var s in a){var i=r[s],l=i&&i.prototype;if(l&&l.forEach!==o)try{c(l,"forEach",o)}catch(u){l.forEach=o}}}}]);
//# sourceMappingURL=chunk-c7c88f6e.d74f19f9.js.map