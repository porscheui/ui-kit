(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47932d2b"],{"00bf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Textarea")]),e._m(0),e._m(1),e._m(2),a("h2",[e._v("Basic example")]),a("Playground",{attrs:{childElementLayout:{spacing:"block"}},scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a label mode")]),a("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),a("option",{attrs:{value:"hide"}},[e._v("Without label")]),a("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]},proxy:!0}])},[[a("p-textarea-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[a("textarea",{attrs:{name:"some-name"}})]),a("p-textarea-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[a("textarea",{attrs:{name:"some-name",placeholder:"Some placeholder text"}})])]],2),a("hr"),a("h2",[e._v("Disabled")]),a("Playground",[a("p-textarea-wrapper",{attrs:{label:"Some label"}},[a("textarea",{attrs:{name:"some-name",disabled:"disabled"}},[e._v("Some value")])])],1),a("hr"),a("h2",[e._v("Read only")]),a("Playground",[a("p-textarea-wrapper",{attrs:{label:"Some label"}},[a("textarea",{attrs:{name:"some-name",readonly:"readonly"}},[e._v("Some value")])])],1),a("hr"),a("h2",[e._v("Validation states")]),e._m(3),a("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),a("option",{attrs:{value:"error"}},[e._v("Error")]),a("option",{attrs:{value:"success"}},[e._v("Success")]),a("option",{attrs:{value:"none"}},[e._v("None")])])]},proxy:!0}])},[[a("p-textarea-wrapper",{attrs:{label:"Some label",state:e.state,message:"none"!==e.state?"Some "+e.state+" validation message.":""}},[a("textarea",{attrs:{"aria-invalid":"error"===e.state,name:"some-name"}},[e._v("Some value")])])]],2),a("hr"),a("h2",[e._v("Slots")]),e._m(4),a("Playground",[[a("p-textarea-wrapper",{attrs:{state:"error"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("Some label with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")]),a("textarea",{attrs:{name:"some-name","aria-invalid":"true",placeholder:"Some placeholder"}}),a("span",{attrs:{slot:"message"},slot:"message"},[e._v("Some error message with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")])])]],2)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Textarea Wrapper")]),e._v(" component represents a multi-line plain-text editing form element.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),a("strong",[e._v("Textarea Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("While a "),a("code",[e._v("placeholder")]),e._v(" is optional but recommended to be set whenever bits of example content or hints shall be shown to give the user visual cues to fill out the form.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Textarea Wrapper")]),e._v(" component supports the visualisation of inline validation.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),a("code",[e._v("label")]),e._v(" or "),a("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),a("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed.")])}],l=a("d4ec"),n=a("99de"),s=a("7e84"),i=a("262e"),c=a("0f9e"),p=a("60a3"),u=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(n["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.label="show",e.state="error",e}return Object(i["a"])(t,e),t}(p["c"]);u=Object(c["a"])([p["a"]],u);var v=u,m=v,d=a("2877"),h=Object(d["a"])(m,r,o,!1,null,null,null);t["default"]=h.exports},"0f9e":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));function r(e,t,a,r){var o,l=arguments.length,n=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(l<3?o(n):l>3?o(t,a,n):o(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}}}]);
//# sourceMappingURL=chunk-47932d2b.c178b068.js.map