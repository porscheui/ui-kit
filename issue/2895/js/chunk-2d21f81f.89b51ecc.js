(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f81f"],{d9b6:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Next Js")]),t("TableOfContents"),t("h2",[e._v("Quick start")]),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),t("p",[e._v("You are ready to start building your own application.")]),t("h2",[e._v("Integration")]),t("Notification",{attrs:{heading:"Attention","heading-tag":"h3",state:"warning"}},[e._v(" The following examples use the "),t("strong",[e._v("ssr")]),e._v(" sub-package of "),t("strong",[e._v("@porsche-design-system/components-react/ssr")]),e._v("."),t("br"),e._v(" This sub-package is a special build of the Porsche Design System Components that renders different markup on the server than in the browser. While this breaks the rule of SSR/SSG where browser markup should always be identical to server markup, this is the only way to achieve SSR/SSG with web components and Shadow DOM."),t("br"),e._v(" The two environments are detected by the "),t("strong",[e._v("process.browser")]),e._v(' flag which is replaced with a boolean value at build time. In the browser the components are essentially the "regular" React components of '),t("strong",[e._v("@porsche-design-system/components-react")]),e._v("."),t("br"),e._v(" On the server the behavior is different. Here the relevant markup and styles (e.g. no hover or focus styles) are rendered into a "),t("a",{attrs:{href:"https://web.dev/declarative-shadow-dom",target:"_blank"}},[e._v("Declarative Shadow DOM")]),e._v(" which is converted into a real Shadow DOM by modern browsers without any JavaScript. This is all we need for the initial render. Once the client code is loaded and executed, the Porsche Design System Components initialize just like normal."),t("br"),t("strong",[e._v("It is crucial that dead code elimination is active for the client build or otherwise the server code might sneak into the browser.")])]),t("p",[e._v("The following project is a standard Next.js setup with the following adaptions.")]),t("h3",[e._v("Step 1")]),e._m(7),e._m(8),t("h3",[e._v("Step 2")]),e._m(9),e._m(10),t("Notification",{attrs:{heading:"Important","heading-tag":"h4",state:"warning"}},[e._v(" Applying the "),t("a",{attrs:{href:"partials/dsr-ponyfill"}},[e._v("getDSRPonyfill()")]),e._v(" partial is "),t("strong",[e._v("crucial")]),e._v(" for the server build to work in browsers that don't "),t("a",{attrs:{href:"https://caniuse.com/declarative-shadow-dom",target:"_blank"}},[e._v("support Declarative Shadow DOM")]),e._v(", yet. ")]),t("h3",[e._v("Step 3")]),e._m(11),e._m(12),e._m(13),t("h2",[e._v("When are Porsche Design System components (re-)hydrated?")]),e._m(14),t("h2",[e._v("How do Porsche Design System components work in detail?")]),e._m(15),t("h2",[e._v("Sample integration")]),e._m(16),t("h3",[e._v("Get the project up and running")]),e._m(17)],1)},s=[function(){var e=this,t=e._self._c;return t("p",[e._v("To build your own "),t("strong",[e._v("Next.js")]),e._v(" application with the "),t("strong",[e._v("React")]),e._v(" components of the Porsche Design System, follow these steps:")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Create a new application by executing:")])])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-shell"},[e._v("// install with yarn:\nyarn create next-app\n\n// install with npm:\nnpm init next-app\n")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Follow the installation wizard to set everything up:")])])},function(){var e=this,t=e._self._c;return t("pre",[t("code",[e._v('✔ What is your project named? "my-app"\n✔ Would you like to use TypeScript with this project? "Yes"\n✔ Would you like to use ESLint with this project? "Yes"\n')])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v('Install the Porsche Design System within your project directory (e.g. "my-app"):')])])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-shell"},[e._v("// install with yarn:\ncd my-app\nyarn add @porsche-design-system/components-react\n\n// install with npm:\ncd my-app\nnpm install @porsche-design-system/components-react\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("Extend "),t("code",[e._v("_app.tsx")]),e._v(" by the necessary "),t("code",[e._v("PorscheDesignSystemProvider")]),e._v(":")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// pages/_app.tsx\n\nimport '../styles/globals.css';\nimport type { AppProps } from 'next/app';\nimport { PorscheDesignSystemProvider } from '@porsche-design-system/components-react/ssr';\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return (\n    <PorscheDesignSystemProvider>\n      <Component {...pageProps} />\n    </PorscheDesignSystemProvider>\n  );\n}\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("Create "),t("code",[e._v("_document.tsx")]),e._v(" and add necessary partials "),t("code",[e._v("getInitialStyles()")]),e._v(" and "),t("code",[e._v("getDSRPonyfill()")]),e._v(". Further details, configuration options and even more partials to improve the UX or loading performance can be found "),t("a",{attrs:{href:"partials/introduction"}},[e._v("here")]),e._v(":")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// pages/_document.tsx\n\nimport { Head, Html, Main, NextScript } from 'next/document';\nimport {\n  getInitialStyles,\n  getFontFaceStylesheet,\n  getFontLinks,\n  getComponentChunkLinks,\n  getIconLinks,\n  getMetaTagsAndIconLinks,\n  getDSRPonyfill,\n  getCookiesFallbackScript,\n  getBrowserSupportFallbackScript,\n} from '@porsche-design-system/components-react/partials';\n\nexport default function Document() {\n  return (\n    <Html lang=\"en\">\n      <Head>\n        {/* necessary for SSR support, injects stylesheet which defines visibility of pre-hydrated PDS components */}\n        {getInitialStyles({ format: 'jsx' })}\n        {/* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) */}\n        {getFontFaceStylesheet({ format: 'jsx' })}\n        {/* preloads Porsche Next font (=> minimize FOUT) */}\n        {getFontLinks({ format: 'jsx' })}\n        {/* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) */}\n        {getComponentChunkLinks({ format: 'jsx' })}\n        {/* preloads Porsche icons (=> minimize FOUC) */}\n        {getIconLinks({ format: 'jsx' })}\n        {/* injects favicon, apple touch icons, android touch icons, etc. */}\n        {getMetaTagsAndIconLinks({ appTitle: 'Sample Project Next.js', format: 'jsx' })}\n      </Head>\n      <body>\n        <Main />\n        <NextScript />\n        {/* necessary for SSR support, enables declarative shadow dom support for Safari and Firefox */}\n        {getDSRPonyfill({ format: 'jsx' })}\n        {/* shows a cookie fallback overlay and blocks the page, in case cookies are disabled */}\n        {getCookiesFallbackScript({ format: 'jsx' })}\n        {/* shows a browser fallback overlay and blocks the page, in case browser is not supported (e.g. IE11) */}\n        {getBrowserSupportFallbackScript({ format: 'jsx' })}\n      </body>\n    </Html>\n  );\n}\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("Extend "),t("code",[e._v("index.tsx")]),e._v(" and use a Porsche Design System component, e.g. "),t("code",[e._v("PHeading")]),e._v(":")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// pages/index.tsx\n\nimport { PHeading } from '@porsche-design-system/components-react/ssr';\n\nexport default function Home() {\n  return (\n    <>\n      <PHeading>Welcome to Next.js<PHeading>\n    </>\n  );\n}\n")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Run "),t("code",[e._v("yarn build")]),e._v(" or "),t("code",[e._v("npm build")])]),t("li",[e._v("Execute "),t("code",[e._v("yarn start")]),e._v(" or "),t("code",[e._v("npm start")]),e._v(" and check if the components are displayed correctly.")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("See "),t("a",{attrs:{href:"developing/components-ready"}},[e._v("componentsReady()")]),e._v(" for further information.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("See "),t("a",{attrs:{href:"must-know/initialization/introduction"}},[e._v("Initialization")]),e._v(" for further information.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("We provide a public GitHub repository with a basic sample project setup to show how it is managed in real code."),t("br"),e._v(" You can find the repository of the Next.js example project here: "),t("a",{attrs:{href:"https://github.com/porsche-design-system/sample-integration-nextjs"}},[e._v("Sample Integration NextJS")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Clone the repository by executing"),t("br"),t("code",[e._v("git clone https://github.com/porsche-design-system/sample-integration-nextjs.git")])]),t("li",[e._v("Follow the installation guidelines in the "),t("code",[e._v("README.md")]),e._v(" file")])])}],r=n("2877"),i={},a=Object(r["a"])(i,o,s,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d21f81f.89b51ecc.js.map