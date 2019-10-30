(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b61a3"],{"1c72":function(n,e,i){"use strict";i.r(e);var t=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"vmark"},[i("h1",[n._v("Mixins")]),i("h2",[n._v("Breakpoint / Media query")]),i("p",[n._v("Predefined breakpoints can be easily used like in following examples.")]),i("p",[n._v("Available breakpoints:"),i("br"),i("code",[n._v("xxs | xs | s | m | l | xl | xxl")])]),i("h4",[n._v("Example")]),i("pre",[i("code",[n._v("div {\n  color: inherit;\n  \n  @include p-breakpoint('s') {\n    color: deeppink;\n  }\n}\n")])]),i("h4",[n._v("Result")]),i("pre",[i("code",[n._v("div {\n  color: inherit;\n}\n\n@media (min-width: 760px) {\n  div {\n    color: deeppink;\n  }\n}\n")])]),i("hr"),i("h4",[n._v("Example")]),i("pre",[i("code",[n._v("div {\n  color: inherit;\n  \n  @include p-breakpoint('s', 'm') {\n    color: deeppink;\n  }\n}\n")])]),i("h4",[n._v("Result")]),i("pre",[i("code",[n._v("div {\n  color: inherit;\n}\n\n@media (min-width: 760px) and (max-width: 999px) {\n  div {\n    color: deeppink;\n  }\n}\n")])]),i("hr"),i("h2",[n._v("Spacing")]),i("p",[i("strong",[n._v("Note:")]),n._v(" Make sure to also check out the pre-compiled "),i("a",{attrs:{href:"#/web/components/layout/spacing#code"}},[n._v("CSS margin/padding spacing classes")]),n._v(".")]),i("p",[n._v("Given values are:"),i("br"),i("code",[n._v("a | b | c | d | e | f | g")])]),i("p",[n._v("Available optional spacing "),i("strong",[n._v("parameters")]),n._v(":"),i("br"),n._v("\n$type (default: margin): "),i("code",[n._v("'margin' | 'padding'")]),i("br"),n._v("\n$direction (default: null): "),i("code",[n._v("null | 'top' | 'right' | 'bottom' | 'left'")]),i("br"),n._v("\n$sign (default: null): "),i("code",[n._v("null | '+' | '-'")])]),i("p",[n._v("Possible spacing mixin for usage with SCSS (where {v} is the value):")]),i("pre",[i("code",[n._v("@include p-spacing-{v}($type, $direction, $sign);\n")])]),i("h4",[n._v("Example")]),i("pre",[i("code",[n._v("div {\n  @include p-spacing-a('margin', 'top');\n}\n")])]),i("h4",[n._v("Result")]),i("pre",[i("code",[n._v("div {\n  margin-top: 0.25rem;\n}\n\n@media (min-width: 760px) {\n  div {\n    margin-top: 0.5rem;\n  }\n}\n\n@media (min-width: 1000px) {\n  div {\n    margin-top: 0.75rem;\n  }\n}\n\n@media (min-width: 1300px) {\n  div {\n    margin-top: 1rem;\n  }\n}\n\n@media (min-width: 1760px) {\n  div {\n    margin-top: 1.25rem;\n  }\n}\n")])]),i("h2",[n._v("Typography")]),i("p",[i("strong",[n._v("Note:")]),n._v(" For font-styling it's recommended to use "),i("a",{attrs:{href:"#/web/components/basic/typography#code"}},[i("code",[n._v("<p-headline>")])]),n._v("/"),i("a",{attrs:{href:"#/web/components/basic/typography#code"}},[i("code",[n._v("<p-text>")])]),n._v(" component.")]),i("h3",[n._v("Headline")]),i("p",[n._v("Given values are:"),i("br"),i("code",[n._v("large-title | headline-1 | headline-2 | headline-3 | headline-4 | headline-5 | headline-6")])]),i("p",[n._v("Possible headline mixin for usage with SCSS (where {v} is the value):")]),i("pre",[i("code",[n._v("@include p-{v};\n")])]),i("h4",[n._v("Example")]),i("pre",[i("code",[n._v("h1 {\n  @include p-headline-1;\n}\n")])]),i("h4",[n._v("Result")]),i("pre",[i("code",[n._v('h1 {\n  font-family: "Porsche Next", "Arial Narrow", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 1.5rem;\n  line-height: 1.333;\n  margin-top: 4.5rem;\n}\n\n@media (min-width: 760px) and (max-width: 999px) {\n  h1 {\n    font-size: 1.875rem;\n    line-height: 1.333;\n  }\n}\n\n@media (min-width: 1000px) and (max-width: 1299px) {\n  h1 {\n    font-size: 2.25rem;\n    line-height: 1.222;\n  }\n}\n\n@media (min-width: 1300px) and (max-width: 1759px) {\n  h1 {\n    font-size: 2.625rem;\n    line-height: 1.238;\n  }\n}\n\n@media (min-width: 1760px) {\n  h1 {\n    font-size: 3rem;\n    line-height: 1.166;\n  }\n}\n')])]),i("h3",[n._v("Text")]),i("p",[n._v("Given values are:"),i("br"),i("code",[n._v("copy | small")])]),i("p",[n._v("Possible headline mixin for usage with SCSS (where {v} is the value):")]),i("pre",[i("code",[n._v("@include p-text-{v};\n")])]),i("h4",[n._v("Example")]),i("pre",[i("code",[n._v("p {\n  @include p-text-copy;\n}\n")])]),i("h4",[n._v("Result")]),i("pre",[i("code",[n._v('p {\n  font-family: "Porsche Next", "Arial Narrow", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5;\n  margin-top: 1.5rem;\n}\n')])])])}],r=i("2be6"),o={},p=Object(r["a"])(o,t,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0b61a3.5101e329.js.map