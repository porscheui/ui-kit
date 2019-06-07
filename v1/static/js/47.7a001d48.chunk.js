(window.webpackJsonp=window.webpackJsonp||[]).push([[47,60,61],{310:function(e,t,n){},311:function(e,t,n){"use strict";n.d(t,"a",function(){return T});var a=n(48),o=n(24),c=n(0),r=n.n(c),m=n(1),l=n.n(m),i=n(316),s=n(387),u=n(317),p=n.n(u),g=n(299),h=n(2),d=n(312),E=n.n(d),b=(n(310),n(318)),f=n.n(b);s.a.registerLanguage("xml",p.a);var T=function(e){var t=e.className,n=Object(c.useState)("light"),m=Object(o.a)(n,2),u=m[0],p=m[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),T=b[0],M=b[1],k=l()(E.a.render,Object(a.a)({},E.a.light,"light"===u),Object(a.a)({},E.a.dark,"dark"===u),"sg-example-global",t),X=function(e){"light"===e?p("light"):"dark"===e&&p("dark")},_=[{menuItem:"Light theme",key:"Tab1",active:"light"===u,onClick:function(){return X("light")}},{menuItem:"Dark theme",key:"Tab2",active:"dark"===u,onClick:function(){return X("dark")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.h,{marginTop:8},r.a.createElement("div",{className:E.a.container},!0!==e.noTheme&&r.a.createElement(g.a,{panes:_,alignment:"left",mini:!0,divider:!1}),r.a.createElement("div",{className:k},v(e.children,u)),!e.noHTML&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.c,{className:E.a["toggle-container"],justifyContent:"end"},!e.noHTML&&r.a.createElement("button",{className:l()(E.a.toggle,Object(a.a)({},E.a.open,T)),onClick:function(){"html"==="html"&&M(!T)}},T?"- JavaScript":"+ JavaScript")),T&&r.a.createElement("div",{className:E.a.codeblock},r.a.createElement(s.a,{language:"xml",style:f.a},function(e,t){return function(e){var t="";e=e.replace(/(>)(<)(\/*)/g,"$1\r\n$2$3");var n=0;return e.split("\r\n").forEach(function(e,a){var o=0;e.match(/.+<\/\w[^>]*>$/)?o=0:e.match(/^<\/\w/)?0!==n&&(n-=1):o=e.match(/^<\w[^>]*[^\/]>.*$/)?1:0;for(var c="",r=0;r<n;r++)c+="  ";t+=c+e+"\r\n",n+=o}),t}(Object(i.renderToStaticMarkup)(v(e,t)))}(e.children,u)))))))};function v(e,t){return"function"===typeof e?e(t):e}T.defaultProps={noTheme:!0}},312:function(e,t,n){e.exports={container:"example_container__8KWcy",codeblock:"example_codeblock__25lok",render:"example_render__1Zlxb",light:"example_light__3X9Nl",dark:"example_dark__2VX9v","toggle-container":"example_toggle-container__16PqW",toggle:"example_toggle__1FS9N",open:"example_open__10Jrv"}},345:function(e,t,n){"use strict";n.r(t);var a=n(303),o=n(0),c=n.n(o),r=n(302),m=n(311);t.default=function(e){var t=e.components;Object(a.a)(e,["components"]);return c.a.createElement(r.MDXTag,{name:"wrapper",components:t},c.a.createElement(r.MDXTag,{name:"h1",components:t},"Button Icon"),c.a.createElement(r.MDXTag,{name:"h2",components:t},"Introduction"),c.a.createElement(r.MDXTag,{name:"p",components:t},"All button types can be generated out of the basic button by referencing properties."),c.a.createElement(r.MDXTag,{name:"h3",components:t},"Buttons as button elements"),c.a.createElement(r.MDXTag,{name:"p",components:t},"Buttons used as ",c.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<button>")," elements to trigger actions."),c.a.createElement(r.MDXTag,{name:"h3",components:t},"Basic (default)"),c.a.createElement(r.MDXTag,{name:"p",components:t},"If using basic type, no extra class/prop declaration is needed."),c.a.createElement(m.a,{noTheme:!1,className:"sg-example-button-icon"},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-button-icon",{theme:e}),c.a.createElement("p-button-icon",{theme:e,disabled:"true"}))}),c.a.createElement(r.MDXTag,{name:"h3",components:t},"Ghost"),c.a.createElement(m.a,{noTheme:!1,className:"sg-example-button-icon"},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-button-icon",{variant:"ghost",theme:e}),c.a.createElement("p-button-icon",{variant:"ghost",theme:e,disabled:"true"}))}),c.a.createElement(r.MDXTag,{name:"h3",components:t},"Regular loader state"),c.a.createElement(r.MDXTag,{name:"p",components:t},"If a button has a loading state, it must also be set in a disabled state to prevent click behaviour caused by the user.\nTo show the loader icon, the default svg icon must be replaced with the loader component"),c.a.createElement(m.a,{noTheme:!1,className:"sg-example-button-icon"},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-button-icon",{loading:"true",theme:e}),c.a.createElement("p-button-icon",{variant:"ghost",loading:"true",theme:e}))}),c.a.createElement(r.MDXTag,{name:"hr",components:t}),c.a.createElement(r.MDXTag,{name:"h3",components:t},"Button as link element"),c.a.createElement(r.MDXTag,{name:"p",components:t},"Buttons used as link elements (",c.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<a>"),"), e.g. as a navigation item."),c.a.createElement(r.MDXTag,{name:"h4",components:t},"Basic (default)"),c.a.createElement(m.a,{noTheme:!1,className:"sg-example-button-icon"},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-button-icon",{href:"/lorem/ipsum",theme:e}),c.a.createElement("p-button-icon",{href:"#",disabled:"true",theme:e}))}),c.a.createElement(r.MDXTag,{name:"h4",components:t},"Ghost"),c.a.createElement(m.a,{noTheme:!1,className:"sg-example-button-icon"},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-button-icon",{href:"/lorem/ipsum",variant:"ghost",theme:e}),c.a.createElement("p-button-icon",{href:"#",variant:"ghost",disabled:!0,theme:e}))}),c.a.createElement(r.MDXTag,{name:"h4",components:t},"Loading state"),c.a.createElement(m.a,{noTheme:!1,className:"sg-example-button-icon"},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-button-icon",{href:"#",loading:"true",theme:e}),c.a.createElement("p-button-icon",{href:"#",variant:"ghost",loading:"true",theme:e}))}),c.a.createElement(r.MDXTag,{name:"hr",components:t}),c.a.createElement(r.MDXTag,{name:"h3",components:t},"Button with specific icon"),c.a.createElement(r.MDXTag,{name:"p",components:t},"If another icon needs to be implemented, just replace the default icon with your new icon."),c.a.createElement(m.a,{noTheme:!1,className:"sg-example-button-icon"},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-button-icon",{icon:"phone",theme:e}))}))}}}]);
//# sourceMappingURL=47.7a001d48.chunk.js.map