(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-111da1c4"],{"2b94":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Button Pure")]),n("h2",[e._v("Introduction")]),e._m(0),n("p",[e._v("It can be used with or without a label. When hiding the label make sure to provide a descriptive label text for screen readers.")]),n("h2",[e._v("Basic example")]),n("h3",[e._v("With label")]),n("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{theme:o}},[e._v("Some label")]),n("p-button-pure",{attrs:{disabled:"true",theme:o}},[e._v("Some label")]),n("p-button-pure",{attrs:{loading:"true",theme:o}},[e._v("Some label")])]}}])}),n("h3",[e._v("Without label")]),n("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{"hide-label":"true",theme:o}},[e._v("Some label")]),n("p-button-pure",{attrs:{"hide-label":"true",disabled:"true",theme:o}},[e._v("Some label")]),n("p-button-pure",{attrs:{"hide-label":"true",loading:"true",theme:o}},[e._v("Some label")])]}}])}),n("h3",[e._v("Responsive")]),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{"hide-label":"{ base: true, l: false }",theme:o}},[e._v("Some label")])]}}])}),n("hr"),n("h2",[e._v("Size")]),e._m(1),e._m(2),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.size=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select a size")]),n("option",[e._v("x-small")]),n("option",[e._v("small")]),n("option",{attrs:{selected:""}},[e._v("medium")]),n("option",[e._v("large")]),n("option",[e._v("x-large")]),n("option",[e._v("inherit")])])]},proxy:!0},{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{style:e.isInherit,attrs:{size:e.size,theme:o}},[e._v("Some label")])]}}])}),n("h3",[e._v("Responsive")]),e._m(3),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{size:"{ base: 'small', l: 'medium' }",theme:o}},[e._v("Some label")])]}}])}),n("hr"),n("h2",[e._v("Weight")]),e._m(4),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.weight=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select a weight")]),n("option",{attrs:{selected:""}},[e._v("thin")]),n("option",[e._v("regular")]),n("option",[e._v("bold")])])]},proxy:!0},{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{size:"medium",weight:e.weight,theme:o}},[e._v("Some label")])]}}])}),n("hr"),n("h2",[e._v("Button with specific icon")]),e._m(5),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.theme;return[n("p-button-pure",{attrs:{icon:"delete",theme:r}},[e._v("Some label")]),n("br"),n("p-button-pure",{attrs:{"icon-source":o("8f19"),"hide-label":"true",theme:r}},[e._v("Some label")])]}}])}),n("hr"),n("h2",[e._v("Button with custom clickable/focusable area")]),n("p",[e._v("Sometimes it might be useful to enlarge the clickable/focusable area of a button to fulfill accessibility guidelines. Therefore a custom padding can be set on the host element.")]),n("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{staticStyle:{padding:"1rem"},attrs:{theme:o}},[e._v("Some label")]),n("p-button-pure",{staticStyle:{padding:"1rem"},attrs:{theme:o,"hide-label":"true"}},[e._v("Some label")])]}}])}),n("hr"),n("h2",[e._v("Bind events to the button")]),e._m(6),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{onclick:"alert('click')",onfocus:"console.log('focus')",onfocusin:"console.log('focusin')",onblur:"console.log('blur')",onfocusout:"console.log('focusout')",theme:o}},[e._v("Some label")])]}}])}),n("hr"),n("h2",[e._v("Remove button from tab order")]),e._m(7),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{tabbable:"true",theme:o}},[e._v("Some label")]),n("br"),n("p-button-pure",{attrs:{tabbable:"false","hide-label":"true",theme:o}},[e._v("Some label")])]}}])}),n("hr"),n("h2",[e._v("Button with Subline")]),e._m(8),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.size=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select a size")]),n("option",{attrs:{selected:""}},[e._v("small")]),n("option",[e._v("medium")]),n("option",[e._v("large")]),n("option",[e._v("x-large")])])]},proxy:!0},{key:"default",fn:function(t){var o=t.theme;return[n("p-button-pure",{attrs:{size:e.size,theme:o}},[e._v(" Some label "),n("p",{attrs:{slot:"subline"},slot:"subline"},[e._v("Some Subline")])]),n("p-button-pure",{attrs:{size:e.size,weight:"semibold",theme:o}},[e._v(" Some label "),n("p",{attrs:{slot:"subline"},slot:"subline"},[e._v("Some Subline")])])]}}])})],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The "),o("code",[e._v("<p-button-pure>")]),e._v(" component is essential to perform events for interactions.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("There are predefined text sizes for the component which should cover most use cases. If a specific text size is needed, the size can be set to "),o("code",[e._v("inherit")]),e._v(" to specify the text size from outside.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("strong",[e._v("Hint:")]),e._v(" If you are in "),o("code",[e._v("hideLabel")]),e._v("-mode, be aware that the box-size of the rendered element will not be the same as the given (font-size) pixel value, e.g. setting a font-size of "),o("strong",[e._v('"44px"')]),e._v(" will not generate a box with a "),o("strong",[e._v('"44px"')]),e._v(" width/height but instead a box size generated out of Porsche type-scaling formula which will end in "),o("strong",[e._v('"52px"')]),e._v(" width/height.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The settings above can also be used on different major breakpoints "),o("code",[e._v("xs")]),e._v(", "),o("code",[e._v("s")]),e._v(", "),o("code",[e._v("m")]),e._v(", "),o("code",[e._v("l")]),e._v(" and "),o("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("There are predefined default text weights. Be aware of using the "),o("code",[e._v("thin")]),e._v(" variant only with larger text sizes.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("If another icon needs to be implemented, just replace the default icon with another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),o("code",[e._v("icon")]),e._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),o("code",[e._v("iconSource")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("You can use native "),o("code",[e._v("click")]),e._v(", "),o("code",[e._v("focus")]),e._v(", "),o("code",[e._v("focusin")]),e._v(", "),o("code",[e._v("blur")]),e._v(" and "),o("code",[e._v("focusout")]),e._v(" events on the button.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("With setting the "),o("code",[e._v("tabbable")]),e._v(" property to "),o("code",[e._v("false")]),e._v(" you can remove the button from the tab order. For technical restrictions it's currently not possible to set an individual "),o("code",[e._v("tabindex")]),e._v(" attribute.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("If you need additional information on your button, we provide a "),o("code",[e._v('<p slot="subline" />')]),e._v(". The size of the "),o("em",[e._v("subline")]),e._v(" changes according to the size of the "),o("em",[e._v("label")]),e._v(". We do not support "),o("code",[e._v('size="inherit"')]),e._v(" in this pattern so far.")])}],a=o("276c"),i=o("e954"),l=o("920b"),s=o("92a6"),u=o("0f9e"),c=o("60a3"),h=function(e){Object(l["a"])(o,e);var t=Object(s["a"])(o);function o(){var e;return Object(a["a"])(this,o),e=t.apply(this,arguments),e.size="medium",e.weight="thin",e}return Object(i["a"])(o,[{key:"isInherit",get:function(){return"inherit"===this.size?"font-size: 48px;":void 0}}]),o}(c["c"]);h=Object(u["b"])([c["a"]],h);var v=h,_=v,d=o("2877"),b=Object(d["a"])(_,n,r,!1,null,null,null);t["default"]=b.exports},"8f19":function(e,t,o){e.exports=o.p+"img/icon-custom-kaixin.bbde6f67.svg"}}]);
//# sourceMappingURL=chunk-111da1c4.392b1dc8.js.map