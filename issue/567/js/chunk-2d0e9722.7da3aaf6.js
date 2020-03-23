(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9722"],{"8e21":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"vmark"},[i("h1",[e._v("Mixins")]),i("h2",[e._v("Breakpoint / Media query")]),i("p",[e._v("Predefined breakpoints can easily be used as in the following examples.")]),i("p",[e._v("Available breakpoints:"),i("br"),i("code",[e._v("xxs | xs | s | m | l | xl | xxl")])]),i("h4",[e._v("Example")]),i("pre",[i("code",[e._v("div {\n  color: inherit;\n  \n  @include p-breakpoint('s') {\n    color: deeppink;\n  }\n}\n")])]),i("h4",[e._v("Result")]),i("pre",[i("code",[e._v("div {\n  color: inherit;\n}\n\n@media (min-width: 760px) {\n  div {\n    color: deeppink;\n  }\n}\n")])]),i("hr"),i("h4",[e._v("Example")]),i("pre",[i("code",[e._v("div {\n  color: inherit;\n  \n  @include p-breakpoint('s', 'm') {\n    color: deeppink;\n  }\n}\n")])]),i("h4",[e._v("Result")]),i("pre",[i("code",[e._v("div {\n  color: inherit;\n}\n\n@media (min-width: 760px) and (max-width: 999px) {\n  div {\n    color: deeppink;\n  }\n}\n")])]),i("hr"),i("h2",[e._v("Typography")]),i("p",[i("strong",[e._v("Note:")]),e._v(" For font-styling it's recommended to use the "),i("a",{attrs:{href:"#/components/basic/typography#code"}},[i("code",[e._v("<p-headline>")])]),e._v("/"),i("a",{attrs:{href:"#/components/basic/typography#code"}},[i("code",[e._v("<p-text>")])]),e._v(" components.")]),i("h3",[e._v("Headline")]),i("p",[e._v("Given values are:"),i("br"),i("code",[e._v("large-title | headline-1 | headline-2 | headline-3 | headline-4")])]),i("p",[e._v("Possible headline mixin for usage with SCSS (where {v} is the value):")]),i("pre",[i("code",[e._v("@include p-{v};\n")])]),i("h4",[e._v("Example")]),i("pre",[i("code",[e._v("h1 {\n  @include p-headline-1;\n}\n")])]),i("h4",[e._v("Result")]),i("pre",[i("code",[e._v('h1 {\n  font-family: "Porsche Next", "Arial Narrow", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 1.75rem;\n  line-height: 1.4285714286;\n}\n\n@media (min-width: 760px) and (max-width: 999px) {\n  h1 {\n    font-size: 2.25rem;\n    line-height: 1.2222222222;\n  }\n}\n\n@media (min-width: 1000px) and (max-width: 1299px) {\n  h1 {\n    font-size: 2.75rem;\n    line-height: 1.1818181818;\n  }\n}\n\n@media (min-width: 1300px) and (max-width: 1759px) {\n  h1 {\n    font-size: 3.25rem;\n    line-height: 1.2307692308;\n  }\n}\n\n@media (min-width: 1760px) {\n  h1 {\n    font-size: 3.75rem;\n    line-height: 1.2;\n  }\n}\n')])]),i("h3",[e._v("Text")]),i("p",[e._v("With the text mixin, it is possible to get various kinds of text variants (size and weight) by passing two parameters as variables for "),i("code",[e._v("size")]),e._v(" and "),i("code",[e._v("weight")]),e._v(". Default is "),i("code",[e._v("$p-text-size-small")]),e._v(" and "),i("code",[e._v("$p-font-weight-regular")]),e._v(".")]),i("p",[e._v("Pre defined variant values are:"),i("br"),i("code",[e._v("$p-text-size-x-small | $p-text-size-small | $p-text-size-medium | $p-text-size-large | $p-text-size-x-large")])]),i("p",[e._v("Or more generic "),i("code",[e._v("$p-font-size-{v};")]),e._v(" where "),i("code",[e._v("v")]),e._v(" is:"),i("br"),i("code",[e._v("12 | 16 | 18 | 20 | 24 | 28 | 30 | 32 | 36 | 42 | 44 | 48 | 52 | 60 | 62 | 72 | 84")])]),i("p",[e._v("Pre defined weight values are:"),i("br"),i("code",[e._v("$p-font-weight-thin | $p-font-weight-regular | $p-font-weight-bold")])]),i("h4",[e._v("Example text mixin for usage with SCSS (where {size} is the value for text size and {weight} for text weight):")]),i("pre",[i("code",[e._v("@include p-text({size}, {weight});\n")])]),i("h4",[e._v("Example with defaults")]),i("pre",[i("code",[e._v("p {\n  @include p-text;\n}\n")])]),i("h4",[e._v("Result")]),i("pre",[i("code",[e._v('p {\n  font-family: "Porsche Next", "Arial Narrow", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n')])]),i("h4",[e._v("Example with specific parameters")]),i("pre",[i("code",[e._v("p {\n  @include p-text($p-text-size-large, $p-font-weight-thin);\n}\n")])]),i("h4",[e._v("Result")]),i("pre",[i("code",[e._v('p {\n  font-family: "Porsche Next", "Arial Narrow", Arial, sans-serif;\n  font-weight: 100;\n  font-size: 2.25rem;\n  line-height: 1.33333;\n}\n')])]),i("hr"),i("h3",[e._v("p-type-scale($size)")]),i("p",[e._v("Calculates font-size and line-height to fit into Porsche Vertical Grid System. "),i("code",[e._v("$size")]),e._v(" only accepts value in rem or px, e.g. 12px or 1.5rem.")]),i("h4",[e._v("Example")]),i("pre",[i("code",[e._v("p {\n  @include p-type-scale($p-font-size-32);\n}\n")])]),i("h4",[e._v("Result")]),i("pre",[i("code",[e._v("p {\n  font-size: 2rem;\n  line-height: 1.375;\n}\n")])])])}],a=i("2877"),o={},s=Object(a["a"])(o,t,r,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0e9722.7da3aaf6.js.map