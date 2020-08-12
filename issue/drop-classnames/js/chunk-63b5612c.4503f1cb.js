(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63b5612c"],{"254e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Typography")]),a("h2",[e._v("Headline")]),e._m(0),a("h2",[e._v("Variant")]),e._m(1),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[a("p-headline",{attrs:{theme:n,variant:"large-title"}},[e._v("The quick brown fox jumps over the lazy dog")]),a("p-headline",{attrs:{theme:n,variant:"headline-1"}},[e._v("The quick brown fox jumps over the lazy dog")]),a("p-headline",{attrs:{theme:n,variant:"headline-2"}},[e._v("The quick brown fox jumps over the lazy dog")]),a("p-headline",{attrs:{theme:n,variant:"headline-3"}},[e._v("The quick brown fox jumps over the lazy dog")]),a("p-headline",{attrs:{theme:n,variant:"headline-4"}},[e._v("The quick brown fox jumps over the lazy dog")]),a("p-headline",{attrs:{theme:n,variant:"headline-5"}},[e._v("The quick brown fox jumps over the lazy dog")])]}}])}),a("hr"),a("h2",[e._v("Custom tag hierarchy")]),e._m(2),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[a("p-headline",{attrs:{theme:n,variant:"headline-1",tag:"h3"}},[e._v("The quick brown fox jumps over the lazy dog")]),a("p-headline",{attrs:{theme:n,variant:"headline-3",tag:"h1"}},[e._v("The quick brown fox jumps over the lazy dog")]),a("p-headline",{attrs:{theme:n,variant:"headline-1"}},[a("h3",[e._v("The quick brown fox jumps over the lazy dog")])]),a("p-headline",{attrs:{theme:n,variant:"headline-3"}},[a("h1",[e._v("The quick brown fox jumps over the lazy dog")])])]}}])}),a("hr"),a("h2",[e._v("Color")]),a("p",[e._v("A predefined default color associated with its theme is available but also inherit mode can be used to define a custom color.")]),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{on:{change:function(t){e.color=t.target.value}}},[a("option",{attrs:{disabled:""}},[e._v("Select a color")]),a("option",{attrs:{value:"default",selected:""}},[e._v("Default")]),a("option",{attrs:{value:"inherit"}},[e._v("Inherit")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[a("p-headline",{style:e.isInheritColor,attrs:{theme:n,variant:"headline-3",color:e.color}},[e._v("The quick brown fox jumps over the lazy dog")])]}}])}),a("hr"),a("h2",[e._v("Alignment")]),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{on:{change:function(t){e.align=t.target.value}}},[a("option",{attrs:{disabled:""}},[e._v("Select an alignment")]),a("option",{attrs:{value:"left"}},[e._v("Left")]),a("option",{attrs:{value:"center",selected:""}},[e._v("Center")]),a("option",{attrs:{value:"right"}},[e._v("Right")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[a("p-headline",{attrs:{theme:n,variant:"headline-3",align:e.align}},[e._v("The quick brown fox jumps over the lazy dog")])]}}])}),a("hr"),a("h2",[e._v("Ellipsis mode")]),a("p",[e._v("This will force any text to never wrap into a new line and in case it's too long for a single line then dots (…) at the end are used to visualize it.")]),a("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[a("p-headline",{attrs:{theme:n,variant:"headline-3",ellipsis:"true"}},[e._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.")])]}}])})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("Headline component")]),e._v(" for predefined headlines with automated responsive sizing to fit into all major breakpoints.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("There are multiple predefined styling variants available. Default semantic tag hierarchy equals to headline type (e.g. "),a("code",[e._v("headline-1")]),e._v(" or "),a("code",[e._v("large-title")]),e._v(" is compiled to "),a("code",[e._v("<h1>")]),e._v(" and "),a("code",[e._v("headline-3")]),e._v(" is compiled to "),a("code",[e._v("<h3>")]),e._v(").")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("If a custom tag hierarchy is needed, individual headline tags can be set from "),a("code",[e._v("h1")]),e._v(" to "),a("code",[e._v("h6")]),e._v(" either by referencing the corresponding "),a("code",[e._v("tag")]),e._v(" property or setting the HTML headline tags directly as slots.")])}],o=(a("75a4"),a("276c")),i=a("e954"),l=a("920b"),h=a("92a6"),s=a("0122"),d=a("60a3"),c=function(e,t,a,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===("undefined"===typeof Reflect?"undefined":Object(s["a"])(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,a,i):r(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i},u=function(e){Object(l["a"])(a,e);var t=Object(h["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.color="default",e.align="center",e}return Object(i["a"])(a,[{key:"isInheritColor",get:function(){return"inherit"===this.color?"color: deeppink":void 0}}]),a}(d["c"]);u=c([d["a"]],u);var v=u,f=v,p=a("2877"),m=Object(p["a"])(f,n,r,!1,null,null,null);t["default"]=m.exports},"75a4":function(e,t,a){var n=a("6b1d"),r=a("72df"),o=a("378c"),i=a("185a").f,l=a("d4cb"),h=r((function(){i(1)})),s=!l||h;n({target:"Object",stat:!0,forced:s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})}}]);
//# sourceMappingURL=chunk-63b5612c.4503f1cb.js.map