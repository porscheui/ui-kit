(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eff1cad"],{"8aac":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("h1",[t._v("Notifications")]),e("p",[t._v("Notifications are an important method of communicating with users and providing feedback.")]),t._m(0),t._m(1),e("TableOfContents"),e("h2",[t._v("When to use")]),e("p",[t._v("In order to find the right notification type for your use case, we have defined some decision-making rules for you:")]),e("p",[e("p-link",{attrs:{theme:this.$store.getters.storefrontTheme,href:"patterns/notifications/decision-tree",variant:"primary"}},[t._v("Go to the Decision Tree")])],1),e("hr"),e("h2",[t._v("Types/Behavior")]),t._m(2),e("h2",[t._v("z-index in descending order")]),t._m(3),e("table",[t._m(4),e("tbody",[e("tr",[e("td",[t._v("Toast")]),e("td",[t._v(t._s(t.zIndexes.toast)+" / top-layer")])]),e("tr",[e("td",[t._v("Modal")]),e("td",[t._v(t._s(t.zIndexes.modal)+" / top-layer")])]),e("tr",[e("td",[t._v("Flyout")]),e("td",[t._v(t._s(t.zIndexes.flyout)+" / top-layer")])]),e("tr",[e("td",[t._v("Popover "),e("p-popover",{ref:"popover",attrs:{theme:this.$store.getters.storefrontTheme}},[t._v("Start the live demo to see it in action")])],1),e("td",[t._v(t._s(t.zIndexes.popover))])]),e("tr",[e("td",[t._v("Banner")]),e("td",[t._v(t._s(t.zIndexes.banner)+" / top-layer")])])])]),e("p",[e("p-button",{attrs:{theme:this.$store.getters.storefrontTheme},on:{click:function(e){return t.startDemo()}}},[t._v("Start Live Demo")])],1),e("p",[e("p-toast",{ref:"toast",attrs:{theme:this.$store.getters.storefrontTheme}})],1),e("div",[e("p-modal",{ref:"modal",attrs:{theme:this.$store.getters.storefrontTheme,heading:"Some Heading",open:t.isModalOpen}},[e("p-text",{attrs:{theme:this.$store.getters.storefrontTheme}},[t._v("Some Content")])],1)],1),e("div",[e("p-flyout",{ref:"flyout",attrs:{theme:this.$store.getters.storefrontTheme,open:t.isFlyoutOpen}},[e("p-text",{attrs:{theme:this.$store.getters.storefrontTheme}},[t._v("Some Content")])],1)],1),e("h2",[t._v("References")]),t._m(5)],1)},n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Their main aim should be to help users perform a task and not necessarily interfere or get in the way of users while using your product. Ensure your "),e("strong",[t._v("notifications are relevant, timely, and informative.")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("strong",[t._v("Keep in Mind:")]),t._v(" Highly frequented or disruptive Notifications can have a "),e("strong",[t._v("negative impact")]),t._v(" on the user's experience.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("table",[e("thead",[e("tr",[e("th",[t._v("Components")]),e("th",[t._v("Placement")]),e("th",[t._v("Follow-up Action")]),e("th",[t._v("Hide")]),e("th",[t._v("Criticality")]),e("th",[t._v("States")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Form elements (Inline Validation)")])]),e("td",[t._v("Below form element")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved")]),e("td",[t._v("Low")]),e("td",[t._v("Success, Error")])]),e("tr",[e("td",[e("strong",[t._v("Toast")])]),e("td",[t._v("Bottom, Left")]),e("td",[t._v("No")]),e("td",[t._v("Automatically (6s)")]),e("td",[t._v("Low/Medium")]),e("td",[t._v("Neutral, Success")])]),e("tr",[e("td",[e("strong",[t._v("Inline Notification")])]),e("td",[t._v("Before/After Content")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved/Dismiss")]),e("td",[t._v("Medium")]),e("td",[t._v("Neutral, Success, Warning, Error")])]),e("tr",[e("td",[e("strong",[t._v("Banner")])]),e("td",[t._v("Top, Center")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved/Dismiss")]),e("td",[t._v("Medium/High")]),e("td",[t._v("Neutral, Warning, Error")])]),e("tr",[e("td",[e("strong",[t._v("Modal")])]),e("td",[t._v("Center")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved/Dismiss")]),e("td",[t._v("High")]),e("td",[t._v("Neutral, Warning, Error")])])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("strong",[t._v("Important: In the future, all elements will be rendered on the browsers top-layer so a manual ordering of z-index will not work anymore. As we are progressing with the refactoring this might already be the case for some components.")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th",[t._v("Component")]),e("th",[t._v("z-index")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[t._v("Duncan P. Brumby, Christian P. Janssen, and Gloria Mark, "),e("a",{attrs:{href:"https://link.springer.com/chapter/10.1007/978-1-4842-4221-6_9"}},[t._v("How Do Interruptions Affect Productivity?")]),t._v(" (Rethinking Productivity in Software Engineering, 2019)")]),e("li",[t._v("Kim Flaherty, "),e("a",{attrs:{href:"https://nngroup.com/articles/indicators-validations-notifications"}},[t._v("Indicators, Validations, and Notifications")]),t._v("s (Nielsen Norman Group, 2015)")]),e("li",[t._v("Aurora Harley, "),e("a",{attrs:{href:"https://nngroup.com/articles/visibility-system-status"}},[t._v("Visibility of System Status")]),t._v(" (Nielsen Norman Group, 2018)")]),e("li",[t._v("Jakob Nielsen, "),e("a",{attrs:{href:"https://nngroup.com/articles/ten-usability-heuristics"}},[t._v("10 Usability Heuristics for User Interface Design")]),t._v(" (Nielsen Norman Group, 1994)")]),e("li",[e("a",{attrs:{href:"https://w3.org/WAI/standards-guidelines/wcag"}},[t._v("Web Content Accessibility Guidelines")])])])}],o=r("ade3"),i=(r("f8c9"),r("2b0e")),a=r("2fe1"),d=r("cc07"),l=function(t,e,r,s){var n,o=arguments.length,i=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,r):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(i=(o<3?n(i):o>3?n(e,r,i):n(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let c=class extends i["a"]{constructor(...t){super(...t),Object(o["a"])(this,"isModalOpen",!1),Object(o["a"])(this,"isFlyoutOpen",!1),Object(o["a"])(this,"isBannerOpen",!1),Object(o["a"])(this,"toastCounter",1),Object(o["a"])(this,"zIndexes",{toast:d["e"],modal:d["c"],flyout:d["b"],popover:d["d"],banner:d["a"]})}mounted(){this.$refs.modal.addEventListener("dismiss",()=>this.isModalOpen=!1),this.$refs.flyout.addEventListener("dismiss",()=>this.isFlyoutOpen=!1)}startDemo(){this.$refs.popover.shadowRoot.querySelector("button").click(),this.$refs.toast.addMessage({text:"Some message "+this.toastCounter}),this.toastCounter++,this.isModalOpen=!0,this.isFlyoutOpen=!0,this.isBannerOpen||this.openBanner()}openBanner(){const t=document.createElement("p-banner");t.innerHTML='\n      <span slot="title">Some banner title</span>\n      <span slot="description">Some banner description.</span>\n    ',document.getElementById("app").append(t),this.isBannerOpen=!0,t.theme=this.$store.getters.storefrontTheme,t.open=!0,t.addEventListener("dismiss",()=>{this.isBannerOpen=!1,t.open=!1})}};c=l([a["b"]],c);var v=c,u=v,_=r("2877"),h=Object(_["a"])(u,s,n,!1,null,null,null);e["default"]=h.exports},cc07:function(t,e,r){"use strict";r.d(e,"e",(function(){return s})),r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"a",(function(){return a}));const s=999999,n=99999,o=99998,i=9999,a=99}}]);
//# sourceMappingURL=chunk-6eff1cad.b0928d34.js.map