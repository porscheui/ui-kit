(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d76f2"],{7795:function(e,n,s){"use strict";s.r(n);var t=function(){var e=this,n=e._self._c;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Vue")]),n("TableOfContents"),n("h2",[e._v("Global Theme")]),e._m(0),e._m(1),e._m(2),n("h2",[e._v("Prefixing")]),n("p",[e._v("In case of a micro-service architecture, multiple instances and versions of the Porsche Design System can be combined in a final application. This could cause conflicts due to the way how custom webcomponents are registered in the browser. During the bootstrap phase of the Porsche Design System, custom elements are defined. If a second application wants to register Porsche Design System again it will cause issues especially when different versions are used.")]),e._m(3),e._m(4),e._m(5),e._m(6)],1)},o=[function(){var e=this,n=e._self._c;return n("p",[n("strong",[e._v("Since v3.9.0")]),e._v(" you can set the "),n("code",[e._v("theme")]),e._v(" property for all child components by setting the prop on "),n("code",[e._v("PorscheDesignSystemProvider")]),e._v(".")])},function(){var e=this,n=e._self._c;return n("p",[e._v("Possible values for "),n("code",[e._v("theme")]),e._v(" are: "),n("code",[e._v("'auto' | 'dark' | 'light'")]),n("br"),e._v(" Local overrides on a per component basis are still possible as usual.")])},function(){var e=this,n=e._self._c;return n("pre",[n("code",{staticClass:"language-tsx"},[e._v("// pages/App.vue\n\n<script setup lang=\"ts\">\n  import AppComponent from './components/AppComponent.vue';\n  import { PorscheDesignSystemProvider } from '@porsche-design-system/components-vue';\n<\/script>\n\n<template>\n  <PorscheDesignSystemProvider theme=\"dark\">\n    <AppComponent />\n  </PorscheDesignSystemProvider>\n</template>\n")])])},function(){var e=this,n=e._self._c;return n("p",[e._v("A way of preventing those conflicts is by using a unique custom prefix for the components. Simply pass your desired prefix to the "),n("code",[e._v("prefix")]),e._v(" property of "),n("code",[e._v("PorscheDesignSystemProvider")]),e._v(".")])},function(){var e=this,n=e._self._c;return n("pre",[n("code",{staticClass:"language-tsx"},[e._v("// pages/App.vue\n\n<script setup lang=\"ts\">\n  import AppComponent from './components/AppComponent.vue';\n  import { PorscheDesignSystemProvider } from '@porsche-design-system/components-vue';\n<\/script>\n\n<template>\n  <PorscheDesignSystemProvider prefix=\"sample-prefix\">\n    <AppComponent />\n  </PorscheDesignSystemProvider>\n</template>\n")])])},function(){var e=this,n=e._self._c;return n("p",[e._v("In the following example the "),n("code",[e._v("PHeading")]),e._v(" component will render as "),n("code",[e._v("<sample-prefix-p-heading>")]),e._v(".")])},function(){var e=this,n=e._self._c;return n("pre",[n("code",{staticClass:"language-tsx"},[e._v("// AppComponent.vue\n\n<script setup lang=\"ts\">\n  import { ref } from 'vue';\n  import { PHeading } from '@porsche-design-system/components-vue';\n<\/script>\n\n<template>\n  <PHeading>Heading</PHeading>\n</template>\n")])])}],r=s("2877"),i={},p=Object(r["a"])(i,t,o,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d76f2.d1d2bc01.js.map