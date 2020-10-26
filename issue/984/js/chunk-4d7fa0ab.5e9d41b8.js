(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d7fa0ab"],{"09a4":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Checkbox")]),e._m(0),e._m(1),n("h2",[e._v("Basic example")]),n("Playground",{attrs:{markup:e.basic,config:e.config}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),n("option",{attrs:{value:"hide"}},[e._v("Without label")]),n("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]),n("hr"),n("h2",[e._v("Indeterminate")]),e._m(2),e._m(3),n("Playground",{attrs:{markup:e.indeterminate,config:e.config}}),n("hr"),n("h2",[e._v("Disabled")]),n("Playground",{attrs:{markup:e.disabled,config:e.config}}),n("hr"),n("h2",[e._v("Validation states")]),e._m(4),n("Playground",{attrs:{markup:e.validation,config:e.config}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),n("option",{attrs:{value:"error"}},[e._v("Error")]),n("option",{attrs:{value:"success"}},[e._v("Success")]),n("option",{attrs:{value:"none"}},[e._v("None")])])]),n("hr"),n("h2",[e._v("Slots")]),e._m(5),n("Playground",{attrs:{markup:e.slots,config:e.config}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("strong",[e._v("Checkbox")]),e._v(" component is a styling wrapper for the native HTML input type "),n("code",[e._v("checkbox")]),e._v(" form element. Checking one box doesn't uncheck other Checkboxes. By default Checkboxes are not selected.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("A "),n("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),n("strong",[e._v("Checkbox Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Mask the visual appearance of a checkbox which has a state in-between checked and unchecked."),n("br"),e._v(" This is especially useful for a checkbox that is used to set the state of a group of checkboxes at once. However this group might have a mixed state. In this case we recommend to use "),n("code",[e._v("checked=false")]),e._v(" and "),n("code",[e._v("indeterminate=true")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note: The "),n("code",[e._v("indeterminate")]),e._v(" attribute can only be set through the DOM node. There is no HTML attribute to set it. Also it's worth to know, that the "),n("code",[e._v("indeterminate")]),e._v(" attribute only affects how the checkbox is shown. The current value is hidden from the user, but the checkbox still keeps it's "),n("code",[e._v("checked")]),e._v(" state. You can find more details in "),n("a",{attrs:{href:"https://www.w3.org/TR/html52/sec-forms.html#dom-htmlinputelement-indeterminate"}},[e._v("the specification")]),e._v(".")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("strong",[e._v("Checkbox Wrapper")]),e._v(" component supports the visualisation of inline validation. The "),n("code",[e._v("message")]),e._v(" and "),n("code",[e._v("checkbox")]),e._v(" is colored and visible/hidden depending on the defined "),n("code",[e._v("state")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),n("code",[e._v("label")]),e._v(" or "),n("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),n("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),n("strong",[e._v("aria")]),e._v(" attributes.")])}],o=(n("d86f"),n("8f0b"),n("fa8c5"),n("d4ec")),i=n("bee2"),c=n("262e"),s=n("2caf"),l=n("0f9e"),u=n("2b0e"),p=n("2fe1"),f=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.config={spacing:"inline"},e.state="error",e.label="show",e.indeterminate='<p-checkbox-wrapper label="Some label">\n  <input type="checkbox" name="some-name" class="example-set-to-indeterminate"/>\n</p-checkbox-wrapper>\n<p-checkbox-wrapper label="Some label" indeterminate="true">\n  <input type="checkbox" name="some-name" class="example-set-to-indeterminate" checked/>\n</p-checkbox-wrapper>',e.disabled='<p-checkbox-wrapper label="Some label">\n  <input type="checkbox" name="some-name" disabled/>\n</p-checkbox-wrapper>\n<p-checkbox-wrapper label="Some label">\n  <input type="checkbox" name="some-name" checked disabled/>\n</p-checkbox-wrapper>',e.slots='<p-checkbox-wrapper state="error">\n  <span slot="label" id="some-label-id">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <input type="checkbox" name="some-name" aria-labelledby="some-label-id" aria-describedby="some-message-id" />\n  <span slot="message" id="some-message-id">Some error message with a <a href="https://designsystem.porsche.com">link</a>.</span>\n</p-checkbox-wrapper>',e}return Object(i["a"])(n,[{key:"mounted",value:function(){this.$nextTick((function(){var e=document.querySelectorAll(".example-set-to-indeterminate");e.forEach((function(e){e.indeterminate=!0}))}))}},{key:"basic",get:function(){var e="hide"===this.label?"true":"responsive"===this.label?"{ base: true, l: false }":"false";return'<p-checkbox-wrapper label="Some label" hide-label="'.concat(e,'">\n  <input type="checkbox" name="some-name"/>\n</p-checkbox-wrapper>\n<p-checkbox-wrapper label="Some label" hide-label="').concat(e,'">\n  <input type="checkbox" name="some-name" checked/>\n</p-checkbox-wrapper>')}},{key:"validation",get:function(){var e="none"!==this.state?"Some ".concat(this.state," validation message."):"";return'<p-checkbox-wrapper label="Some label" state="'.concat(this.state,'" message="').concat(e,'">\n  <input type="checkbox" name="some-name" />\n</p-checkbox-wrapper>')}}]),n}(u["a"]);f=Object(l["b"])([p["b"]],f);var h=f,d=h,v=n("2877"),m=Object(v["a"])(d,r,a,!1,null,null,null);t["default"]=m.exports},"130d":function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"189b":function(e,t,n){var r=n("72df"),a=n("7d53"),o=n("4fed"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2117:function(e,t,n){var r=n("8697");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},"37d1":function(e,t,n){var r=n("730c");e.exports=function(e){return Object(r(e))}},"4fed":function(e,t,n){var r,a,o=n("f498"),i=n("64e4"),c=o.process,s=c&&c.versions,l=s&&s.v8;l?(r=l.split("."),a=r[0]+r[1]):i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(a=r[1]))),e.exports=a&&+a},"64e4":function(e,t,n){var r=n("5428");e.exports=r("navigator","userAgent")||""},"6a86":function(e,t,n){var r=n("7526"),a=n("c6de"),o=n("7d53"),i=o("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"7f8a":function(e,t,n){"use strict";var r=n("72df");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},8697:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"8f0b":function(e,t,n){"use strict";var r=n("6b1d"),a=n("e8e5");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},c6de:function(e,t,n){var r=n("6a61");e.exports=Array.isArray||function(e){return"Array"==r(e)}},ce71:function(e,t,n){var r=n("d4cb"),a=n("72df"),o=n("f1a7"),i=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(o(c,e))return c[e];t||(t={});var n=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:s,p=o(t,1)?t[1]:void 0;return c[e]=!!n&&!a((function(){if(l&&!r)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,u,p)}))}},d054:function(e,t,n){var r=n("2117"),a=n("83a6"),o=n("37d1"),i=n("b495"),c=n("6a86"),s=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,p=6==e,f=5==e||p;return function(h,d,v,m){for(var b,_,g=o(h),k=a(g),x=r(d,v,3),y=i(k.length),w=0,S=m||c,L=t?S(h,y):n?S(h,0):void 0;y>w;w++)if((f||w in k)&&(b=k[w],_=x(b,w,g),e))if(t)L[w]=_;else if(_)switch(e){case 3:return!0;case 5:return b;case 6:return w;case 2:s.call(L,b)}else if(u)return!1;return p?-1:l||u?u:L}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d86f:function(e,t,n){"use strict";var r=n("6b1d"),a=n("72df"),o=n("c6de"),i=n("7526"),c=n("37d1"),s=n("b495"),l=n("dac6"),u=n("6a86"),p=n("189b"),f=n("7d53"),h=n("4fed"),d=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",b=h>=51||!a((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),_=p("concat"),g=function(e){if(!i(e))return!1;var t=e[d];return void 0!==t?!!t:o(e)},k=!b||!_;r({target:"Array",proto:!0,forced:k},{concat:function(e){var t,n,r,a,o,i=c(this),p=u(i,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],g(o)){if(a=s(o.length),f+a>v)throw TypeError(m);for(n=0;n<a;n++,f++)n in o&&l(p,f,o[n])}else{if(f>=v)throw TypeError(m);l(p,f++,o)}return p.length=f,p}})},dac6:function(e,t,n){"use strict";var r=n("083f"),a=n("abdf"),o=n("9618");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},e8e5:function(e,t,n){"use strict";var r=n("d054").forEach,a=n("7f8a"),o=n("ce71"),i=a("forEach"),c=o("forEach");e.exports=i&&c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},fa8c5:function(e,t,n){var r=n("f498"),a=n("130d"),o=n("e8e5"),i=n("5b12");for(var c in a){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==o)try{i(l,"forEach",o)}catch(u){l.forEach=o}}}}]);
//# sourceMappingURL=chunk-4d7fa0ab.5e9d41b8.js.map