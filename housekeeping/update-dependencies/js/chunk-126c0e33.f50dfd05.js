(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-126c0e33"],{"189b":function(e,t,a){var r=a("72df"),n=a("7d53"),o=a("4fed"),s=n("species");e.exports=function(e){return o>=51||!r((function(){var t=[],a=t.constructor={};return a[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"37d1":function(e,t,a){var r=a("730c");e.exports=function(e){return Object(r(e))}},"4fed":function(e,t,a){var r,n,o=a("f498"),s=a("64e4"),i=o.process,l=i&&i.versions,c=l&&l.v8;c?(r=c.split("."),n=r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(n=r[1]))),e.exports=n&&+n},"64e4":function(e,t,a){var r=a("5428");e.exports=r("navigator","userAgent")||""},"6a86":function(e,t,a){var r=a("7526"),n=a("c6de"),o=a("7d53"),s=o("species");e.exports=function(e,t){var a;return n(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"75a4":function(e,t,a){var r=a("6b1d"),n=a("72df"),o=a("378c"),s=a("185a").f,i=a("d4cb"),l=n((function(){s(1)})),c=!i||l;r({target:"Object",stat:!0,forced:c,sham:!i},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},c6de:function(e,t,a){var r=a("6a61");e.exports=Array.isArray||function(e){return"Array"==r(e)}},cbe5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Textarea")]),e._m(0),e._m(1),e._m(2),a("h2",[e._v("Basic example")]),a("Playground",{attrs:{markup:e.basic,config:e.config}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a label mode")]),a("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),a("option",{attrs:{value:"hide"}},[e._v("Without label")]),a("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]),a("hr"),a("h2",[e._v("With description text")]),e._m(3),a("Playground",{attrs:{markup:e.withDescriptionText,config:e.config}}),a("hr"),a("h2",[e._v("Disabled")]),a("Playground",{attrs:{markup:e.disabled,config:e.config}}),a("hr"),a("h2",[e._v("Read only")]),a("Playground",{attrs:{markup:e.readonly,config:e.config}}),a("hr"),a("h2",[e._v("Validation states")]),e._m(4),a("Playground",{attrs:{markup:e.validationStates,config:e.config}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),a("option",{attrs:{value:"error"}},[e._v("Error")]),a("option",{attrs:{value:"success"}},[e._v("Success")]),a("option",{attrs:{value:"none"}},[e._v("None")])])]),a("hr"),a("h2",[e._v("Slots")]),e._m(5),a("Playground",{attrs:{markup:e.slots,config:e.config}})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Textarea")]),e._v(" component is a styling wrapper for the native HTML "),a("code",[e._v("<textarea>")]),e._v(" form element. Don't use a Textarea component if you want to allow users to enter shorter responses that are no longer than a single line, such as a phone number or name. In this case, you should use the Text Field component.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),a("strong",[e._v("Textarea Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("While a "),a("code",[e._v("placeholder")]),e._v(" is optional but recommended to be set whenever bits of example content or hints shall be shown to give the user visual cues to fill out the form.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A description text can be added to explain the meaning of a specific form field. It's meant to be a textual enhancement of the label text and is technically connected with the "),a("code",[e._v("hide-label")]),e._v(" property.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Textarea Wrapper")]),e._v(" component supports the visualisation of inline validation.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),a("code",[e._v("label")]),e._v(" or "),a("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),a("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),a("strong",[e._v("aria")]),e._v(" attributes.")])}],o=(a("d86f"),a("75a4"),a("d4ec")),s=a("bee2"),i=a("262e"),l=a("2caf"),c=a("53ca"),p=a("2b0e"),u=a("2fe1"),d=function(e,t,a,r){var n,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(c["a"])(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(o<3?n(s):o>3?n(t,a,s):n(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s},f=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.config={spacing:"block"},e.label="show",e.state="error",e.withDescriptionText='<p-textarea-wrapper label="Some label" description="Some description">\n  <textarea name="some-name"></textarea>\n</p-textarea-wrapper>',e.disabled='<p-textarea-wrapper label="Some label">\n  <textarea name="some-name" disabled>Some value</textarea>\n</p-textarea-wrapper>',e.readonly='<p-textarea-wrapper label="Some label">\n  <textarea name="some-name" readonly>Some value</textarea>\n</p-textarea-wrapper>',e.slots='<p-textarea-wrapper state="error">\n  <span slot="label" id="some-label-id">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <span slot="description">Some description with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <textarea name="some-name" aria-labelledby="some-label-id" aria-describedby="some-message-id"></textarea>\n  <span slot="message" id="some-message-id">Some error message with a <a href="https://designsystem.porsche.com">link</a>.</span>\n</p-textarea-wrapper>',e}return Object(s["a"])(a,[{key:"basic",get:function(){var e='hide-label="'.concat("hide"===this.label?"true":"responsive"===this.label?"{ base: true, l: false }":"false",'"');return'<p-textarea-wrapper label="Some label" '.concat(e,'>\n  <textarea name="some-name"></textarea>\n</p-textarea-wrapper>\n<p-textarea-wrapper label="Some label" ').concat(e,'>\n  <textarea name="some-name" placeholder="Some placeholder text"></textarea>\n</p-textarea-wrapper>')}},{key:"validationStates",get:function(){var e='message="'.concat("none"!==this.state?"Some ".concat(this.state," validation message."):"",'"');return'<p-textarea-wrapper label="Some label" state="'.concat(this.state,'" ').concat(e,'>\n  <textarea aria-invalid="').concat("error"===this.state,'" name="some-name">Some value</textarea>\n</p-textarea-wrapper>')}}]),a}(p["a"]);f=d([u["b"]],f);var v=f,m=v,h=a("2877"),b=Object(h["a"])(m,r,n,!1,null,null,null);t["default"]=b.exports},d86f:function(e,t,a){"use strict";var r=a("6b1d"),n=a("72df"),o=a("c6de"),s=a("7526"),i=a("37d1"),l=a("b495"),c=a("dac6"),p=a("6a86"),u=a("189b"),d=a("7d53"),f=a("4fed"),v=d("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",b=f>=51||!n((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),_=u("concat"),g=function(e){if(!s(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},x=!b||!_;r({target:"Array",proto:!0,forced:x},{concat:function(e){var t,a,r,n,o,s=i(this),u=p(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],g(o)){if(n=l(o.length),d+n>m)throw TypeError(h);for(a=0;a<n;a++,d++)a in o&&c(u,d,o[a])}else{if(d>=m)throw TypeError(h);c(u,d++,o)}return u.length=d,u}})},dac6:function(e,t,a){"use strict";var r=a("083f"),n=a("abdf"),o=a("9618");e.exports=function(e,t,a){var s=r(t);s in e?n.f(e,s,o(0,a)):e[s]=a}}}]);
//# sourceMappingURL=chunk-126c0e33.f50dfd05.js.map