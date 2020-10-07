(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3540"],{"5bfc":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Tabs Bar")]),a("p",[e._v("The Tabs Bar component is a styled button/link list for multiple purposes. You can use it with your framework router to ensure your window location updates on tab click, use it for hash routing and displaying content accordingly to the hash, to change the state of a component and therefore change the appearance of you content or as skip navigation to move on a longer page.")]),e._m(0),e._m(1),e._m(2),a("hr"),a("h2",[e._v("Basic example")]),e._m(3),a("Playground",[[a("p-tabs-bar",[a("button",[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")])])]],2),a("Playground",[[a("p-tabs-bar",[a("a",{attrs:{href:"#"}},[e._v("Tab One")]),a("a",{attrs:{href:"#"}},[e._v("Tab Two")]),a("a",{attrs:{href:"#"}},[e._v("Tab Three")])])]],2),a("h2",[e._v("Accessibility")]),e._m(4),e._m(5),a("Playground",[[a("p-tabs-bar",[a("button",{attrs:{"aria-controls":"tab-panel-1"}},[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")])])],a("div",{attrs:{role:"tabpanel","aria-labelledby":"tab-panel-1"}},[a("p-text",[e._v("Your content of Tab 1")])],1)],2),a("h2",[e._v("Switch size")]),e._m(6),a("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.size=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select size")]),a("option",{attrs:{selected:"",value:"small"}},[e._v("Small")]),a("option",{attrs:{value:"medium"}},[e._v("Medium")])])]},proxy:!0}])},[[a("p-tabs-bar",{attrs:{size:e.size}},[a("button",[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")])])]],2),a("h2",[e._v("Scrollable Tab buttons")]),a("p",[e._v("If the amount of tags exceeds the viewport, the tabs become horizontal scrollable.")]),a("Playground",[[a("p-tabs-bar",[a("button",[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")]),a("button",[e._v("Tab Four")]),a("button",[e._v("Tab Five")]),a("button",[e._v("Tab Long Label Six")]),a("button",[e._v("Tab Seven")]),a("button",[e._v("Tab Eight")]),a("button",[e._v("Tab Nine")])])]],2),a("h2",[e._v("Weight variants")]),e._m(7),a("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.weight=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select weight")]),a("option",{attrs:{selected:"",value:"regular"}},[e._v("Regular")]),a("option",{attrs:{value:"semibold"}},[e._v("SemiBold")])])]},proxy:!0}])},[[a("p-tabs-bar",{attrs:{weight:e.weight}},[a("button",[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")])])]],2),a("h2",[e._v("Theme variants")]),e._m(8),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[a("p-tabs-bar",{attrs:{theme:o}},[a("button",[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")])])]}}])}),a("h2",[e._v("Gradient Color Scheme variants")]),a("p",[e._v("If the amount of tabs exceeds the viewport, the component renders arrow-buttons to help with horizontal scrolling. The background and gradient has to align to your chosen background.")]),e._m(9),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.gradientColorScheme,expression:"gradientColorScheme"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.gradientColorScheme=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select gradient-color-scheme")]),a("option",{attrs:{selected:"",value:"default"}},[e._v("Default")]),a("option",{attrs:{value:"surface"}},[e._v("Surface")])])]},proxy:!0},{key:"default",fn:function(t){var o=t.theme;return[a("p-tabs-bar",{attrs:{theme:o,"gradient-color-scheme":e.gradientColorScheme}},[a("button",[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")]),a("button",[e._v("Tab Four")]),a("button",[e._v("Tab Five")]),a("button",[e._v("Tab Long Label Six")]),a("button",[e._v("Tab Seven")]),a("button",[e._v("Tab Eight")]),a("button",[e._v("Tab Nine")])])]}}])}),a("h2",[e._v("Set active Tab")]),e._m(10),e._m(11),a("Playground",[[a("p-tabs-bar",{attrs:{"active-tab-index":"1"}},[a("button",[e._v("Tab One")]),a("button",[e._v("Tab Two")]),a("button",[e._v("Tab Three")])])]],2)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The Tabs Bar component does not handle the display of your content. If you use the component you have to manually care for the content to be rendered beneath. To help with this task the Tabs Bar component triggers an event called "),a("code",[e._v("tabChange")]),e._v(" with the index of the clicked tab as data.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("If you intend to only change content on tab-click without location changes, we prepared a component which also handles the correct display of content according to the clicked tab. Have a look at the "),a("a",{attrs:{href:"#/components/tabs#code"}},[e._v("Tabs")]),e._v(" component.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("Note")]),e._v(": We use "),a("code",[e._v("<button>")]),e._v(" tags in the examples below because you have to use anchor tags with "),a("code",[e._v("href")]),e._v(" in your application! Therefore, we avoid messing with the window location.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Basic implementation is a tab bar with tabs to switch between the content. Just put "),a("code",[e._v("<button>")]),e._v(" if you need to change e.g. the state on tab-click or "),a("code",[e._v("<a>")]),e._v(" tags, if you also have to manipulate the window location, inside the "),a("code",[e._v("<p-tabs-bar>")]),e._v(" component and it will handle all styling behaviors.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("code",[e._v("<p-tabs-bar")]),e._v(" component is detached from the content which belongs to the active tab. We provide the necessary "),a("code",[e._v('role="tab"')]),e._v(", "),a("code",[e._v("tab-index")]),e._v(" and "),a("code",[e._v("aria-selected")]),e._v(" on the tabs inside the component. To be truly accessible every tab needs a "),a("code",[e._v("aria-controls")]),e._v(" attribute with a unique id. The top container of your content needs the "),a("code",[e._v('role="tabpanel"')]),e._v(" and the attribute "),a("code",[e._v("aria-labelledby")]),e._v(" which gets the same unique id as the according tab ("),a("code",[e._v("aria-controls")]),e._v(").")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("If you care about accessibility without handling it yourself, have a look at the "),a("a",{attrs:{href:"#/components/tabs#code"}},[e._v("Tabs")]),e._v(" where we handle everything for you.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You can choose between two tab sizes, "),a("code",[e._v("small")]),e._v(" or "),a("code",[e._v("medium")]),e._v(". It defaults to "),a("code",[e._v("small")]),e._v(" and can be set by selecting the property on the "),a("code",[e._v("p-tabs-bar")]),e._v(" component.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("code",[e._v("<tabs-bar>")]),e._v(" component comes with two text-weights "),a("code",[e._v("regular")]),e._v(" or "),a("code",[e._v("semibold")]),e._v(" where it defaults to "),a("code",[e._v("regular")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Choose between "),a("code",[e._v("light")]),e._v(" and "),a("code",[e._v("dark")]),e._v(" theme by using the "),a("code",[e._v("theme")]),e._v(" property. Default theme is "),a("code",[e._v("light")]),e._v(". The Theme changes the text color of the tabs.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("There are two different background types "),a("code",[e._v("default")]),e._v(" and "),a("code",[e._v("surface")]),e._v(", you can choose between them by using the "),a("code",[e._v("gradient-color-scheme")]),e._v(" property. It defaults to the value "),a("code",[e._v("default")]),e._v(". The "),a("code",[e._v("gradient-color-scheme")]),e._v(" has impact on "),a("code",[e._v("light")]),e._v(" and "),a("code",[e._v("dark")]),e._v(" theme.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You may need to change the initial active tab. To do so, use the "),a("code",[e._v("active-tab-index")]),e._v(" property on the "),a("code",[e._v("<p-tabs-bar>")]),e._v(" component. The the attribute "),a("code",[e._v("aria-selected")]),e._v(" becomes "),a("code",[e._v("true")]),e._v(" on the active tab.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("Note:")]),e._v(" Keep in mind that the "),a("code",[e._v("active-tab-index")]),e._v(" is counted like an array, so it starts with 0.")])}],r=a("d4ec"),i=a("262e"),c=a("2caf"),s=a("0f9e"),v=a("2b0e"),l=a("2fe1"),u=function(e){Object(i["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.theme="light",e.weight="regular",e.size="small",e.gradientColorScheme="default",e}return a}(v["a"]);u=Object(s["b"])([l["b"]],u);var h=u,_=h,b=a("2877"),d=Object(b["a"])(_,o,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d3540.78c0cd6e.js.map