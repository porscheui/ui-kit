(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f0b8"],{d7c2:function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Changelog")]),t("h2",[e._v("Porsche Design System - Components")]),t("p",[e._v("All notable changes to this project will be documented in this file.")]),t("p",[e._v("The format is based on "),t("a",{attrs:{href:"https://keepachangelog.com/en/1.0.0/"}},[e._v("Keep a Changelog")]),e._v(", and this project adheres to "),t("a",{attrs:{href:"https://semver.org/spec/v2.0.0.html"}},[e._v("Semantic Versioning")]),e._v(".")]),t("h3",[e._v("[Unreleased]")]),t("h4",[e._v("Migration path from v1 to v2")]),t("p",[e._v("With our new major release "),t("code",[e._v("v2.0.0")]),e._v(" there comes some significant changes which you should take care of. To help you easily migrate from "),t("code",[e._v("v1.5.x")]),e._v(" to our latest "),t("code",[e._v("v2.0.0")]),e._v(" we provide some guidelines which should help to keep track of the (breaking) changes:")]),t("h5",[e._v("Breaking changes")]),t("ul",[t("li",[e._v("Drop support of "),t("strong",[e._v("IE11")]),e._v(" and "),t("strong",[e._v("Edge < 18")]),e._v(". If you still need to support these browsers, you have to stick on "),t("code",[e._v("v1.5.x")]),e._v(". We provide a Browser Notification Component to point out to the users that these Browsers are no longer supported. Please refer to our "),t("strong",[t("a",{attrs:{href:"#/help/browser-compatibility"}},[e._v("Browser compatibility guidelines")])]),e._v(".")]),t("li",[e._v("Color and outline of general focus styling has changed to "),t("strong",[e._v("black")]),e._v(" (on light theme) and "),t("strong",[e._v("white")]),e._v(" (on dark theme) with an outline of "),t("strong",[e._v("1px width/offset")]),e._v(". If you have build own components with the usage of our "),t("strong",[t("a",{attrs:{href:"#/utilities/introduction"}},[e._v("utilities package")])]),e._v(", update it to the latest version.")]),t("li",[e._v("Our PDS components are now loaded via an CDN which means that you need an internet connection to render the components in a Browser.")]),t("li",[e._v("Due to the new Web Components Manager we use under the hood, the implementation of the Porsche Design System scripts changed if used in a "),t("strong",[e._v("Vanilla-JS")]),e._v(" environment. Please check our updated "),t("strong",[t("a",{attrs:{href:"#/start-coding/vanilla-js"}},[e._v("sample integration guidelines")])]),e._v(".")]),t("li",[e._v("We added an automatic generated "),t("code",[e._v("*")]),e._v(" asteriks symbol to form field labels which have the "),t("code",[e._v("required")]),e._v(" attribute. This might lead to a doubled "),t("code",[e._v("*")]),e._v(" symbol if you set one by yourself.")]),t("li",[e._v("Due to the support of setting (router-)links ("),t("code",[e._v('<a href="#">')]),e._v(") inside of our "),t("code",[e._v("Link")]),e._v(", "),t("code",[e._v("LinkPure")]),e._v(" and "),t("code",[e._v("LinkSocial")]),e._v(" components, we have removed the support of styling the anchor tag ("),t("code",[e._v("<a>")]),e._v(") if it surrounds the component. So we recommend changing the position of the "),t("code",[e._v("<a>")]),e._v(" tag from wrapping the component to a direct slot (child) of the component.")])]),t("h5",[e._v("General improvements you should follow")]),t("ul",[t("li",[e._v("Now we provide "),t("strong",[e._v("prefexing")]),e._v(" support for most of our components. That means that you can build and deliver your code in a microfrontend architecture without the risk of interfering with others. Please refer to our "),t("strong",[t("a",{attrs:{href:"#/start-coding/introduction"}},[e._v("framework specific guidelines")])]),e._v(".")]),t("li",[e._v("To optimize FOUT (Flash of Unstyled Text) and FOUC (Flash of Unstyled Content) follow our "),t("strong",[t("a",{attrs:{href:"#/performance/loading-behaviour"}},[e._v("loading guidelines")])]),e._v(".")]),t("li",[e._v("We have also added support for "),t("strong",[t("a",{attrs:{href:"#/performance/cdn"}},[e._v("China CDN")])]),e._v(" to optimize loading behavior of our assets and components.")])]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Modal")]),e._v(" component")])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Focus styling")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Typing for "),t("code",[e._v("pageChange")]),e._v(" event of "),t("code",[e._v("Pagination")]),e._v(" component")])]),t("h3",[e._v("[2.0.0-alpha.4] - 2020-10-14")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("Custom filter to "),t("code",[e._v("Select Wrapper")]),e._v(" component")]),t("li",[e._v("DropDown direction property to "),t("code",[e._v("Select Wrapper")]),e._v(" component")]),t("li",[e._v("Display "),t("code",[e._v("*")]),e._v(" after label when "),t("code",[e._v("input")]),e._v(", "),t("code",[e._v("textarea")]),e._v(" or "),t("code",[e._v("select")]),e._v(" have "),t("code",[e._v("required")]),e._v(" attribute within form wrapper components")]),t("li",[t("code",[e._v("Tabs")]),e._v(" component")]),t("li",[t("code",[e._v("Tabs Bar")]),e._v(" component")]),t("li",[t("code",[e._v("Banner")]),e._v(" component")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[t("code",[e._v("Spinner")]),e._v(" zooming bug on Safari")])]),t("h3",[e._v("[2.0.0-alpha.3] - 2020-09-11")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("Support to load assets from China CDN directly via browser flag: "),t("code",[e._v("PORSCHE_DESIGN_SYSTEM_CDN = 'cn';")])])]),t("h4",[e._v("Removed")]),t("ul",[t("li",[e._v("Support for "),t("code",[e._v("<a>")]),e._v(" wrapped "),t("code",[e._v("Link")]),e._v(" and "),t("code",[e._v("LinkPure")])])]),t("h3",[e._v("[2.0.0-alpha.2] - 2020-08-20")]),t("h3",[e._v("[2.0.0-alpha.1] - 2020-08-17")]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Removed classnames dependency")]),t("li",[e._v("Stencil Core "),t("code",[e._v("taskQueue")]),e._v(" from "),t("code",[e._v("congestionAsync")]),e._v(" to "),t("code",[e._v("async")]),e._v(" for more performant component rendering")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Focus input on label click of "),t("code",[e._v("Checkbox Wrapper")]),e._v(" and "),t("code",[e._v("Radio Button Wrapper")])])]),t("h3",[e._v("[1.5.6] - 2020-10-15")]),t("h3",[e._v("[1.5.6-rc.0] - 2020-10-13")]),t("h3",[e._v("Fixed")]),t("ul",[t("li",[t("code",[e._v("Spinner")]),e._v(" zooming bug on Safari")])]),t("h3",[e._v("[1.5.5] - 2020-09-11")]),t("h3",[e._v("[1.5.5-rc.0] - 2020-09-07")]),t("h3",[e._v("Changed")]),t("ul",[t("li",[e._v("Deprecated stencil lifecycle-method "),t("code",[e._v("componentDidUnload")]),e._v(" to "),t("code",[e._v("disconnectedCallback")]),e._v(' to fix "'),t("code",[e._v("selectObserver")]),e._v(' is undefined" bug in '),t("code",[e._v("Select Wrapper")]),e._v(" and "),t("code",[e._v("Pagination")])])]),t("h3",[e._v("[1.5.4] - 2020-08-25")]),t("h3",[e._v("[1.5.4-rc.0] - 2020-08-17")]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Removed classnames dependency")]),t("li",[e._v("Stencil Core "),t("code",[e._v("taskQueue")]),e._v(" from "),t("code",[e._v("congestionAsync")]),e._v(" to "),t("code",[e._v("async")]),e._v(" for more performant component rendering")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Focus input on label click of "),t("code",[e._v("Checkbox Wrapper")]),e._v(" and "),t("code",[e._v("Radio Button Wrapper")])]),t("li",[e._v("Fix typings for "),t("code",[e._v("orientation")]),e._v(" of "),t("code",[e._v("Divider")]),e._v(" component")])]),t("h3",[e._v("[2.0.0-alpha.0] - 2020-08-06")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("strong",[e._v("Experimental:")]),e._v(" Optional web component scoping mechanism during runtime to enable micro service architecture")])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Web components get lazy loaded from central CDN to improve caching strategy across Porsche's digital eco system")])]),t("h4",[e._v("Removed")]),t("ul",[t("li",[e._v("Stop browser support for "),t("strong",[e._v("IE11")]),e._v(" and "),t("strong",[e._v("EdgeHTML")])])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Mix of "),t("code",[e._v("Optgroups")]),e._v(" and "),t("code",[e._v("Options")]),e._v(" on same level in "),t("code",[e._v("Select Wrapper")]),e._v(" component")]),t("li",[e._v("Fix typings for "),t("code",[e._v("orientation")]),e._v(" of "),t("code",[e._v("Divider")]),e._v(" component")])]),t("h3",[e._v("[1.5.3] - 2020-08-10")]),t("h3",[e._v("[1.5.3-rc.0] - 2020-08-10")]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Mix of "),t("code",[e._v("Optgroups")]),e._v(" and "),t("code",[e._v("Options")]),e._v(" on same level in "),t("code",[e._v("Select Wrapper")]),e._v(" component")])]),t("h3",[e._v("[1.5.2] - 2020-07-22")]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Dispatch change event in "),t("code",[e._v("Select Wrapper")])]),t("li",[e._v("Stencil react-output-target SSR Bug")])]),t("h3",[e._v("[1.5.1] - 2020-07-20")]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("SVGO settings for icons")]),t("li",[e._v("Angular bug which causes "),t("code",[e._v("ngcc")]),e._v(" to fail")])]),t("h3",[e._v("[1.5.0] - 2020-07-16")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("Icons (active-cabin-ventilation, battery-full, bell, bookmark, car-battery, charging-active, charging-state, climate, climate-control, garage, horn, key, map, parking-brake, parking-light, preheating, send, shopping-bag, sidelights, user-manual, wrenches)")])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Icons (arrow-first, arrow-last, battery-empty, car, card, charging-station, question)")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Porsche Marque images")])]),t("h3",[e._v("[1.5.0-rc.2] - 2020-07-06")]),t("h3",[e._v("[1.5.0-rc.1] - 2020-07-06")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("strong",[e._v("Notification Neutral")]),e._v(" color to "),t("code",[e._v("color")]),e._v(" property of "),t("code",[e._v("p-text")]),e._v(" and "),t("code",[e._v("p-icon")])])]),t("h3",[e._v("[1.5.0-rc.0] - 2020-06-25")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Fieldset Wrapper")]),e._v(" component")]),t("li",[e._v("Improved SEO of "),t("code",[e._v("p-headline")]),e._v(" and "),t("code",[e._v("p-text")]),e._v(": Added possibility to write semantic HTML tags (e.g. "),t("code",[e._v("<h1>-<h6>")]),e._v(" or "),t("code",[e._v("<p>")]),e._v(", "),t("code",[e._v("<blockquote>")]),e._v(", etc.) directly as slotted content.")]),t("li",[e._v("Possibility to include anchor tags directly as slots of "),t("code",[e._v("Link")]),e._v(", "),t("code",[e._v("Link Pure")]),e._v(" and "),t("code",[e._v("Link Social")])]),t("li",[t("code",[e._v("Text")]),e._v(" new "),t("code",[e._v("weight")]),e._v(" property "),t("code",[e._v("semibold")])]),t("li",[t("code",[e._v("Button Pure")]),e._v(" label with subline pattern as slot")]),t("li",[t("code",[e._v("Link Pure")]),e._v(" label with subline pattern as slot")])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[t("code",[e._v("Select Wrapper")]),e._v(" is now ready for the catwalk. It is dressed now with a custom drop down list box and gets naked by default on touch devices.")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Minor accessibility improvements of "),t("code",[e._v("icons")]),e._v(" and "),t("code",[e._v("Text Field")])]),t("li",[e._v("Remove native number spinner buttons of "),t("code",[e._v("Text Field")]),e._v(" with type text for Firefox")]),t("li",[e._v("An issue with "),t("code",[e._v("Button")]),e._v(" and "),t("code",[e._v("Button Pure")]),e._v(" and their "),t("code",[e._v("disabled")]),e._v(" attribute")])]),t("h3",[e._v("[1.4.0] - 2020-05-14")]),t("h3",[e._v("[1.4.0-rc.3] - 2020-05-08")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Text List")])])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Improve caching strategy for fonts by content-based hash")]),t("li",[e._v("Improve caching strategy for marque by content-based hash")]),t("li",[e._v("Dimensions and sharpness of marque")]),t("li",[e._v("Props for "),t("code",[e._v("Content Wrapper")])])]),t("h3",[e._v("[1.4.0-rc.2] - 2020-05-06")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Content Wrapper")])]),t("li",[e._v("Description property to "),t("code",[e._v("p-text-field-wrapper")]),e._v(", "),t("code",[e._v("p-textarea-wrapper")]),e._v(" and "),t("code",[e._v("p-select-wrapper")])]),t("li",[t("code",[e._v("Link Social")])])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Improve accessibility of error and success states of form elements")]),t("li",[e._v("Aria-invalid attribute of form elements if they are in error state is now managed by component")]),t("li",[e._v("Rename icon name "),t("code",[e._v("configure")]),e._v(" to "),t("code",[e._v("configurate")]),e._v(" (prevents breaking change compared to stable v1.3.0)")]),t("li",[e._v("Improve "),t("code",[e._v("p-icon")]),e._v(" loading behavior")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Display of wrong icons")])]),t("h4",[e._v("Removed")]),t("ul",[t("li",[t("code",[e._v("safe-zone")]),e._v(" property of "),t("code",[e._v("p-grid")]),e._v(" ("),t("code",[e._v("Content Wrapper")]),e._v(" should be used instead)")])]),t("h3",[e._v("[1.4.0-rc.1] - 2020-04-27")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("Add "),t("code",[e._v("safe-zone")]),e._v(" property to "),t("code",[e._v("p-grid")]),e._v(" for outer grid margin, max-width and centering")]),t("li",[e._v("Submit button with search icon to "),t("code",[e._v("p-textfield-wrapper")]),e._v(" type search")]),t("li",[e._v("Test-Projects React, Angular, Gatsby and NextJS")])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Background color of readonly state in components "),t("code",[e._v("p-textfield-wrapper")]),e._v(" and "),t("code",[e._v("p-textarea-wrapper")])]),t("li",[e._v("Visual appearance of icons")]),t("li",[e._v("Improve caching strategy for icons by content-based hash")]),t("li",[e._v("Cursor of Radio, Checkbox and Select")]),t("li",[e._v("Fixed naming of Mock from "),t("code",[e._v("p-textfield-wrapper")]),e._v(" to "),t("code",[e._v("p-text-field-wrapper")])])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Icon loading mechanism")])]),t("h3",[e._v("[1.4.0-rc.0] - 2020-04-09")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("SSR support")])]),t("h3",[e._v("[1.3.0] - 2020-04-08")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("New headline size "),t("code",[e._v("headline-5")]),e._v(" to "),t("code",[e._v("p-headline")])]),t("li",[e._v("Test Mocks")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Text styling of Select component on focus in IE11 and Chrome on Windows 10")])]),t("h3",[e._v("[1.3.0-rc.0] - 2020-04-03")]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Improve form elements")])]),t("h3",[e._v("[1.2.0] - 2020-03-25")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Divider")])]),t("li",[e._v("Hover state for form elements")])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Support label text of form elements for Screen readers")])]),t("h3",[e._v("[1.1.2] - 2020-03-17")]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Notification colors")])]),t("h3",[e._v("[1.1.1] - 2020-03-13")]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Icon of "),t("code",[e._v("Checkbox")]),e._v(" indeterminate state")])]),t("h3",[e._v("[1.1.0] - 2020-03-11")]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Minor improvements")])]),t("h3",[e._v("[1.1.0-rc.0] - 2020-03-02")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Select Wrapper")])]),t("li",[t("code",[e._v("Checkbox Wrapper")])]),t("li",[t("code",[e._v("Radio Button Wrapper")])]),t("li",[t("code",[e._v("Textarea Wrapper")])])]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[t("code",[e._v("Text Field Wrapper")]),e._v(" toggle password visibility")])]),t("h3",[e._v("[1.0.3] - 2020-02-13")]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("JS framework compatibility")])]),t("h3",[e._v("[1.1.0-0] - 2020-02-06")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Text Field Wrapper")])])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Add proper cursor for disabled state for "),t("code",[e._v("Button")]),e._v(" and "),t("code",[e._v("Button Pure")])])]),t("h3",[e._v("[1.0.2] - 2020-02-04")]),t("h4",[e._v("Fixed")]),t("ul",[t("li",[e._v("Inheritable styling of slotted content")])]),t("h3",[e._v("[1.0.1] - 2020-01-30")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("Clickable area of "),t("code",[e._v("Link Pure")]),e._v(" and "),t("code",[e._v("Button Pure")]),e._v(" is optionally configurable by defining padding on host element")])]),t("h3",[e._v("[1.0.0] - 2020-01-28")]),t("h4",[e._v("Added")]),t("ul",[t("li",[e._v("Cursor pointer on hover for "),t("code",[e._v("Button")]),e._v(" and "),t("code",[e._v("Button Pure")])]),t("li",[e._v("Line-height gets calculated based on Porsche type-scaling formula automatically for "),t("code",[e._v("Text")]),e._v(", "),t("code",[e._v("Link Pure")]),e._v(" and "),t("code",[e._v("Button Pure")])]),t("li",[e._v("Test helper function "),t("code",[e._v("componentsReady()")]),e._v(" which indicates when lazy loaded components fully have loaded")])]),t("h4",[e._v("Changed")]),t("ul",[t("li",[e._v("Update CDN asset paths")]),t("li",[e._v("Improve font-weight definitions")]),t("li",[e._v("Rename and optimize neutral colors for "),t("code",[e._v("Icon")]),e._v(" and "),t("code",[e._v("Text")])])]),t("h3",[e._v("[1.0.0-rc.1] - 2019-12-13")]),t("h4",[e._v("Added")]),t("ul",[t("li",[t("code",[e._v("Headline")])]),t("li",[t("code",[e._v("Text")])]),t("li",[t("code",[e._v("Marque")])]),t("li",[t("code",[e._v("Button")])]),t("li",[t("code",[e._v("Button Pure")])]),t("li",[t("code",[e._v("Spinner")])]),t("li",[t("code",[e._v("Icon")])]),t("li",[t("code",[e._v("Flex")])]),t("li",[t("code",[e._v("Grid")])]),t("li",[t("code",[e._v("Link")])]),t("li",[t("code",[e._v("Link Pure")])]),t("li",[t("code",[e._v("Pagination")])]),t("li",[e._v('"Blur on focus"')])])])}],v=t("2877"),r={},a=Object(v["a"])(r,i,n,!1,null,null,null);o["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d21f0b8.e79fe556.js.map