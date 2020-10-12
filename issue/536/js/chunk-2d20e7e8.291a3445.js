(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e7e8"],{b037:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vmark"},[a("h1",[t._v("Tabs Bar")]),a("p",[t._v("The component is a styled button/link list for multiple purposes. You can use it with your framework router to ensure your window location updates on tab click, use it for hash routing and displaying content accordingly to the hash, to change the state of another element and therefore change the appearance of your content or as skip navigation to move on a longer page.")]),t._m(0),t._m(1),t._m(2),a("hr"),a("h2",[t._v("Basic example")]),t._m(3),a("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.theme;return[a("p-tabs-bar",{attrs:{theme:n}},[a("button",{attrs:{type:"button"}},[t._v("Tab One")]),a("button",{attrs:{type:"button"}},[t._v("Tab Two")]),a("button",{attrs:{type:"button"}},[t._v("Tab Three")])])]}}])}),a("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.theme;return[a("p-tabs-bar",{attrs:{theme:n}},[a("a",{attrs:{href:"#"}},[t._v("Tab One")]),a("a",{attrs:{href:"#"}},[t._v("Tab Two")]),a("a",{attrs:{href:"#"}},[t._v("Tab Three")])])]}}])}),a("h2",[t._v("Accessibility")]),t._m(4),t._m(5),t._m(6),a("hr"),a("h2",[t._v("Size")]),a("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.size=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[t._v("Select size")]),a("option",{attrs:{selected:"",value:"small"}},[t._v("Small")]),a("option",{attrs:{value:"medium"}},[t._v("Medium")])])]},proxy:!0},{key:"default",fn:function(e){var n=e.theme;return[a("p-tabs-bar",{attrs:{theme:n,size:t.size}},[a("button",{attrs:{type:"button"}},[t._v("Tab One")]),a("button",{attrs:{type:"button"}},[t._v("Tab Two")]),a("button",{attrs:{type:"button"}},[t._v("Tab Three")])])]}}])}),a("h2",[t._v("Weight")]),a("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.weight=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[t._v("Select weight")]),a("option",{attrs:{selected:"",value:"regular"}},[t._v("Regular")]),a("option",{attrs:{value:"semibold"}},[t._v("SemiBold")])])]},proxy:!0},{key:"default",fn:function(e){var n=e.theme;return[a("p-tabs-bar",{attrs:{theme:n,weight:t.weight}},[a("button",{attrs:{type:"button"}},[t._v("Tab One")]),a("button",{attrs:{type:"button"}},[t._v("Tab Two")]),a("button",{attrs:{type:"button"}},[t._v("Tab Three")])])]}}])}),a("h2",[t._v("Gradient Color Scheme")]),a("p",[t._v("If the amount of tabs exceeds the viewport, the component renders arrow-buttons to help with horizontal scrolling. The background and gradient has to align to your chosen background.")]),a("Playground",{attrs:{themeable:!0,"color-scheme":t.gradientColorScheme},scopedSlots:t._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:t.gradientColorScheme,expression:"gradientColorScheme"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.gradientColorScheme=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[t._v("Select gradient-color-scheme")]),a("option",{attrs:{selected:"",value:"default"}},[t._v("Default")]),a("option",{attrs:{value:"surface"}},[t._v("Surface")])])]},proxy:!0},{key:"default",fn:function(e){var n=e.theme;return[a("p-tabs-bar",{attrs:{theme:n,"gradient-color-scheme":t.gradientColorScheme}},[a("button",{attrs:{type:"button"}},[t._v("Tab One")]),a("button",{attrs:{type:"button"}},[t._v("Tab Two")]),a("button",{attrs:{type:"button"}},[t._v("Tab Three")]),a("button",{attrs:{type:"button"}},[t._v("Tab Four")]),a("button",{attrs:{type:"button"}},[t._v("Tab Five")]),a("button",{attrs:{type:"button"}},[t._v("Tab Six")]),a("button",{attrs:{type:"button"}},[t._v("Tab Seven")]),a("button",{attrs:{type:"button"}},[t._v("Tab Eight")]),a("button",{attrs:{type:"button"}},[t._v("Tab Nine")]),a("button",{attrs:{type:"button"}},[t._v("Tab Ten")]),a("button",{attrs:{type:"button"}},[t._v("Tab Eleven")]),a("button",{attrs:{type:"button"}},[t._v("Tab Twelve")]),a("button",{attrs:{type:"button"}},[t._v("Tab Thirteen")]),a("button",{attrs:{type:"button"}},[t._v("Tab Fourteen")]),a("button",{attrs:{type:"button"}},[t._v("Tab Fifteen")]),a("button",{attrs:{type:"button"}},[t._v("Tab Sixteen")]),a("button",{attrs:{type:"button"}},[t._v("Tab Seventeen")]),a("button",{attrs:{type:"button"}},[t._v("Tab Eighteen")]),a("button",{attrs:{type:"button"}},[t._v("Tab Nineteen")]),a("button",{attrs:{type:"button"}},[t._v("Tab Twenty")])])]}}])}),a("h2",[t._v("Active Tab")]),t._m(7),a("Playground",{attrs:{themeable:!0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.theme;return[a("p-tabs-bar",{attrs:{theme:n,"active-tab-index":"1"}},[a("button",{attrs:{type:"button"}},[t._v("Tab One")]),a("button",{attrs:{type:"button"}},[t._v("Tab Two")]),a("button",{attrs:{type:"button"}},[t._v("Tab Three")])])]}}])})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The component does not handle the display of your content. If you use the component you have to manually care for the content to be rendered beneath. To help with this task the component triggers an event called "),a("code",[t._v("tabChange")]),t._v(" with the index of the active tab.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If you intend to only change content on tab-click without location changes and you are fine that the content needs to be pre-rendered then we prepared a component which also handles the correct display of content according to the active tab. Have a look at the "),a("a",{attrs:{href:"#/components/tabs"}},[t._v("Tabs")]),t._v(" component.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Note")]),t._v(": We use "),a("code",[t._v("<button>")]),t._v(" tags in the examples below because you have to use anchor tags with "),a("code",[t._v("href")]),t._v(" in your application! Therefore, we avoid messing with the window location.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Basic implementation is a tab bar with tabs to switch between the content. Just put "),a("code",[t._v("<button>")]),t._v(" tags if you need to change e.g. the state on tab-click or "),a("code",[t._v("<a>")]),t._v(" tags, if you also have to manipulate the window location, inside the "),a("code",[t._v("<p-tabs-bar>")]),t._v(" component and it will handle all styling behaviors.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The "),a("code",[t._v("<p-tabs-bar")]),t._v(" component is detached from the content which belongs to the active tab. We provide the necessary "),a("code",[t._v('role="tab"')]),t._v(", "),a("code",[t._v("tab-index")]),t._v(" and "),a("code",[t._v("aria-selected")]),t._v(" on the tabs inside the component.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("To be truly accessible you need to provide some more information because every tab needs an "),a("code",[t._v("aria-controls")]),t._v(" attribute with a unique id. The content placeholder needs the "),a("code",[t._v('role="tabpanel"')]),t._v(" and the attribute "),a("code",[t._v("aria-labelledby")]),t._v(" which gets the same unique id as the according tab ("),a("code",[t._v("aria-controls")]),t._v(").")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",{staticClass:"language-html"},[t._v('<p-tabs-bar>\n  <button type="button" aria-controls="tab-panel-1">Tab One</button>\n  <button type="button" aria-controls="tab-panel-2">Tab Two</button>\n  <button type="button" aria-controls="tab-panel-3">Tab Three</button>\n</p-tabs-bar>\n\n<div role="tabpanel" aria-labelledby="tab-panel-1">\n  <p-text>Your content of Tab 1</p-text> \n</div>\n<div role="tabpanel" aria-labelledby="tab-panel-2">\n  <p-text>Your content of Tab 2</p-text>\n</div>\n<div role="tabpanel" aria-labelledby="tab-panel-3">\n  <p-text>Your content of Tab 3</p-text>\n</div>\n')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Note:")]),t._v(" Keep in mind that the property "),a("code",[t._v("active-tab-index")]),t._v(" uses zero-based numbering.")])}],r=a("d4ec"),u=a("262e"),i=a("2caf"),s=a("0f9e"),b=a("2b0e"),l=a("2fe1"),c=function(t){Object(u["a"])(a,t);var e=Object(i["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.theme="light",t.weight="semibold",t.size="medium",t.gradientColorScheme="surface",t.activeTabIndex=0,t}return a}(b["a"]);c=Object(s["b"])([l["b"]],c);var v=c,h=v,p=a("2877"),d=Object(p["a"])(h,n,o,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20e7e8.291a3445.js.map