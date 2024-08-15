(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc818"],{"4de7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"vmark"},[e("h1",[t._v("Angular")]),e("TableOfContents"),e("h2",[t._v("Testing with Jest")]),t._m(0),t._m(1),t._m(2),e("Notification",{attrs:{heading:"Attention","heading-tag":"h2",state:"warning"}},[t._v(" Certain modern browser APIs are not supported in the jsdom environment. See "),e("a",{attrs:{href:"developing/react/testing#unsupported-ap-is"}},[t._v("Unsupported APIs")]),t._v(" for more information. ")]),e("h3",[t._v("Setup file")]),t._m(3),e("h3",[t._v("Example component")]),t._m(4),e("h3",[t._v("Test example component")]),t._m(5),t._m(6),e("h2",[t._v("Testing with Karma")]),e("h3",[t._v("Config")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),e("h2",[t._v("Unsupported APIs")]),e("p",[t._v("Certain modern browser APIs are not supported in the jsdom environment.")]),e("h3",[t._v("Dialog API")]),t._m(12),t._m(13),e("h3",[t._v("Element Internals API")]),t._m(14),e("p",[t._v("Current polyfills for the Element Internals API are incompatible with Stencil. Therefore, the API must be mocked within the test setup.")]),t._m(15)],1)},o=[function(){var t=this,e=t._self._c;return e("p",[e("strong",[t._v("Jest")]),t._v(" uses "),e("strong",[t._v("jsdom")]),t._v(" and supports ShadowDOM since Version 12.2.0."),e("br"),t._v(" However, it doesn't support JavaScript modules as described in this "),e("a",{attrs:{href:"https://github.com/jsdom/jsdom/issues/2475"}},[t._v("issue")]),t._v("."),e("br"),t._v(" Also, it doesn't support "),e("code",[t._v("CSSStyleSheet.replace()")]),t._v(", "),e("code",[t._v("Intersection Observer")]),t._v(", "),e("code",[t._v("Element.prototype.scrollTo")]),t._v(" and others.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("As a workaround we provide a polyfill as part of the "),e("code",[t._v("@porsche-design-system/components-angular")]),t._v(" package.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("To apply the polyfill, simply import it in your "),e("strong",[t._v("setupTest.{js|ts}")]),t._v(" file.")])},function(){var t=this,e=t._self._c;return e("pre",[e("code",{staticClass:"language-tsx"},[t._v("// setupTest.{js|ts}\n\nimport '@porsche-design-system/components-angular/jsdom-polyfill';\n")])])},function(){var t=this,e=t._self._c;return e("pre",[e("code",{staticClass:"language-tsx"},[t._v('// single-component.ts\n\nimport { ChangeDetectionStrategy, Component } from \'@angular/core\';\nimport type { TabsBarUpdateEventDetail } from \'@porsche-design-system/components-angular\';\n\n@Component({\n  selector: \'single-component\',\n  template: `\n    <p-tabs-bar [activeTabIndex]="tabIndex" (update)="onUpdate($event)">\n      <button data-testid="button1" type="button">Tab One</button>\n      <button data-testid="button2" type="button">Tab Two</button>\n      <button data-testid="button3" type="button">Tab Three</button>\n    </p-tabs-bar>\n    <div data-testid="debug">Active Tab: { tabIndex + 1 }</div>\n  `,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SingleComponent {\n  tabIndex: number = 0;\n\n  onUpdate(e: CustomEvent<TabsBarUpdateEventDetail>) {\n    this.tabIndex = e.detail.activeTabIndex;\n  }\n}\n')])])},function(){var t=this,e=t._self._c;return e("pre",[e("code",{staticClass:"language-tsx"},[t._v("// single-component.test.ts\n\nimport { componentsReady } from '@porsche-design-system/components-angular';\nimport { render } from '@testing-library/angular';\nimport userEvent from '@testing-library/user-event';\nimport '@porsche-design-system/components-angular/jsdom-polyfill';\n\nit('should render Tabs Bar from Porsche Design System and use its events', async () => {\n  const { getByTestId } = await render(SingleComponent);\n  await componentsReady();\n\n  const debug = getByTestId('debug');\n  const button1 = getByTestId('button1');\n  const button2 = getByTestId('button2');\n  const button3 = getByTestId('button3');\n\n  expect(debug.innerHTML).toBe('Active Tab: 1');\n\n  await userEvent.click(button2);\n  expect(debug.innerHTML).toBe('Active Tab: 2');\n\n  await userEvent.click(button3);\n  expect(debug.innerHTML).toBe('Active Tab: 3');\n\n  await userEvent.click(button1);\n  expect(debug.innerHTML).toBe('Active Tab: 1');\n});\n")])])},function(){var t=this,e=t._self._c;return e("p",[t._v("More test examples can be found at the "),e("a",{attrs:{href:"developing/components-ready#testing"}},[t._v("componentsReady() documentation")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("p",[t._v("Since the "),e("a",{attrs:{href:"partials/initial-styles"}},[t._v("getInitialStyles()")]),t._v(" partial is mandatory for using Porsche Design System, the partial needs to be included within test environments. With help of "),e("code",[t._v("@angular-builders/custom-webpack")]),t._v(" and its "),e("code",[t._v("indexTransform")]),t._v(" option, the partial can be injected into the "),e("code",[t._v("index.html")]),t._v(". See "),e("a",{attrs:{href:"partials/initial-styles"}},[t._v("getInitialStyles()")]),t._v(" for a manual how to integrate the partial within "),e("code",[t._v("build")]),t._v(" and "),e("code",[t._v("serve")]),t._v(" environment."),e("br"),t._v(" Since Karma does not use the "),e("code",[t._v("index.html")]),t._v(", but instead relies on "),e("code",[t._v("karma-context.html")]),t._v(" the transformation of "),e("code",[t._v("index.html")]),t._v(" is not applicable for testing with "),e("code",[t._v("Karma")]),t._v("."),e("br"),t._v(" There are different approaches to inject the partial into "),e("code",[t._v("karma-context.html")]),t._v(":")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("code",[t._v("karma.conf.js")]),t._v(" option "),e("a",{attrs:{href:"https://karma-runner.github.io/6.4/config/configuration-file.html#customcontextfile"}},[t._v("customContextFile")]),t._v(" would be easiest, but this is overridden by "),e("code",[t._v("@angular-devkit/build-angular/plugins/karma")])]),e("li",[e("code",[t._v("karma.conf.js")]),t._v(" custom middleware which injects the "),e("code",[t._v("getInitialStyles()")]),t._v(" partial on the fly")]),e("li",[t._v("manipulation of "),e("code",[t._v("karma-context.html")]),t._v(" via "),e("code",[t._v("post-install")]),t._v(" or within "),e("code",[t._v("karma.conf.js")])])])},function(){var t=this,e=t._self._c;return e("pre",[e("code",{staticClass:"language-tsx"},[t._v("// yarn add --dev glob\n\n\x3c!-- karma.conf.js --\x3e\nconst path = require('path');\nconst fs = require('fs');\nconst { globSync } = require('glob');\nconst injectPartials = require('./scripts/injectPartials'); // script referenced by injectPartials for `build` and `serve`\n\nconst injectPartialsIntoKarmaContextHtml = () => {\n  const packagePath = path.resolve(require.resolve('@angular-devkit/build-angular'), '..');\n  const [filePath] = globSync(packagePath + '/**/karma-context.html');\n  const backupFilePath = filePath.replace(/\\.html$/, '-original$&');\n\n  // restore backup\n  if (fs.existsSync(backupFilePath)) {\n    fs.copyFileSync(backupFilePath, filePath);\n    fs.rmSync(backupFilePath);\n  }\n\n  fs.copyFileSync(filePath, backupFilePath); // create backup\n  const fileContent = fs.readFileSync(filePath, 'utf8');\n  const modifiedFileContent = injectPartials({}, fileContent);\n  fs.writeFileSync(filePath, modifiedFileContent);\n};\n\ninjectPartialsIntoKarmaContextHtml();\n\nmodule.exports = function (config) {\n  config.set({\n    basePath: '',\n    frameworks: ['jasmine', '@angular-devkit/build-angular'],\n    // ... rest of config\n  });\n}\n")])])},function(){var t=this,e=t._self._c;return e("p",[t._v("More test examples can be found at the "),e("a",{attrs:{href:"developing/components-ready#testing"}},[t._v("componentsReady() documentation")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("p",[t._v("We also provide test examples in our "),e("a",{attrs:{href:"https://github.com/porsche-design-system/sample-integration-angular/tree/master/src/app/pages"}},[t._v("sample integration project")]),t._v(".")])},function(){var t=this,e=t._self._c;return e("p",[t._v("Affected Components: "),e("code",[t._v("p-modal")]),t._v(", "),e("code",[t._v("p-flyout")])])},function(){var t=this,e=t._self._c;return e("p",[t._v("Due to the lack of native support in jsdom, the Dialog API needs to be either manually polyfilled or mocked. You can use the available "),e("a",{attrs:{href:"https://npmjs.com/package/dialog-polyfill"}},[t._v("dialog-polyfill package")]),t._v(" or create a custom mock implementation.")])},function(){var t=this,e=t._self._c;return e("p",[t._v("Affected Components: "),e("code",[t._v("p-textarea")])])},function(){var t=this,e=t._self._c;return e("pre",[e("code",[t._v("HTMLElement.prototype.attachInternals = () =>\n    ({\n      setFormValue: () => {},\n      setValidity: () => {},\n    }) as any;\n")])])}],s=n("2877"),i={},r=Object(s["a"])(i,a,o,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0cc818.c2ff471c.js.map