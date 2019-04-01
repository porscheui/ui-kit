(window.webpackJsonp=window.webpackJsonp||[]).push([[9,13],{271:function(e,a,t){"use strict";t.d(a,"a",function(){return y});var n=t(43),l=t(21),r=t(0),m=t.n(r),c=t(1),o=t.n(c),i=t(273),s=t(299),p=t(274),d=t.n(p),u=t(262),g=t(2),h=t(275),E=t.n(h),b=t(272),f=t.n(b);s.a.registerLanguage("xml",d.a);var y=function(e){var a=Object(r.useState)("default"),t=Object(l.a)(a,2),c=t[0],p=t[1],d=Object(r.useState)(!1),h=Object(l.a)(d,2),b=h[0],y=h[1],C=Object(r.useState)(!1),D=Object(l.a)(C,2),v=D[0],M=D[1],X=o()(f.a.render,Object(n.a)({},f.a.light,"default"===c),Object(n.a)({},f.a.dark,"inverted"===c)),k=function(e){"html"===e?(y(!b),M(!1)):"scss"===e&&(M(!v),y(!1))},z=function(e){"default"===e?p("default"):"inverted"===e&&p("inverted")},w=[{menuItem:"Light",key:"Tab1",active:"default"===c,onClick:function(){return z("default")}},{menuItem:"Inverted",key:"Tab2",active:"inverted"===c,onClick:function(){return z("inverted")}}];return m.a.createElement(m.a.Fragment,null,m.a.createElement(g.d,{marginTop:12},m.a.createElement("div",{className:f.a.example},!0!==e.noTheme&&m.a.createElement(u.a,{panes:w,alignment:"left",mini:!0,divider:!1}),m.a.createElement("div",{className:X},T(e.children,c)),(!e.noHTML||!e.noSCSS)&&m.a.createElement(m.a.Fragment,null,m.a.createElement(g.a,{justifyContent:"end"},!e.noHTML&&m.a.createElement("button",{className:o()(f.a.toggle,Object(n.a)({},f.a.open,b)),onClick:function(){return k("html")}},b?"- HTML":"+ HTML"),!e.noSCSS&&m.a.createElement("button",{className:o()(f.a.toggle,Object(n.a)({},f.a.open,v)),onClick:function(){return k("scss")}},v?"- SCSS":"+ SCSS")),b&&m.a.createElement("div",{className:f.a.codeblock},m.a.createElement(s.a,{language:"xml",style:E.a},function(e,a){return function(e){var a="";e=e.replace(/(>)(<)(\/*)/g,"$1\r\n$2$3");var t=0;return e.split("\r\n").forEach(function(e,n){var l=0;e.match(/.+<\/\w[^>]*>$/)?l=0:e.match(/^<\/\w/)?0!==t&&(t-=1):l=e.match(/^<\w[^>]*[^\/]>.*$/)?1:0;for(var r="",m=0;m<t;m++)r+="  ";a+=r+e+"\r\n",t+=l}),a}(Object(i.renderToStaticMarkup)(T(e,a)))}(e.children,c))),v&&m.a.createElement("div",{className:f.a.codeblock},m.a.createElement(s.a,{language:"scss",style:E.a},"# SCSS paths go here"))))))};function T(e,a){return"function"===typeof e?e(a):e}},272:function(e,a,t){e.exports={example:"example_example__1Nagt",codeblock:"example_codeblock__3-_qV","hljs-tag":"example_hljs-tag__NY2w4",render:"example_render__mfsjh",light:"example_light__3OW-k",dark:"example_dark__Nsu00",toggle:"example_toggle__1pB1a",open:"example_open__2AjqQ"}},294:function(e,a,t){"use strict";t.r(a);var n=t(268),l=t(0),r=t.n(l),m=t(267),c=t(271),o=t(2);a.default=function(e){var a=e.components;Object(n.a)(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:a},r.a.createElement(m.MDXTag,{name:"h1",components:a},"Grid"),r.a.createElement(m.MDXTag,{name:"h2",components:a},"Introduction"),r.a.createElement(m.MDXTag,{name:"p",components:a},"The Porsche UI Kit grid system is based upon a standard 12 column responsive grid. Its main purpose is to provide a solid and flexible grid system for defining layout areas. Breakpoint specific behaviour (width, offset, etc.) can easily be set by adding breakpoint specific classnames. Also decent nestings are supported."),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Grid standard"),r.a.createElement(m.MDXTag,{name:"p",components:a},"For standard grid implementation, it is recommended to use this pattern. The class ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid")," on the parent and ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid__child")," on the children are mandatory. With ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid__child--size-(1-12)")," it is possible to define column widths."),r.a.createElement(c.a,{noTheme:!0},function(e){var a={marginBottom:"8px"},t=function(e){return{height:"20px",backgroundColor:e}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{style:a},r.a.createElement(o.b.Child,{size:12},r.a.createElement("div",{style:t("deepskyblue")}))),Array.apply(0,Array(11)).map(function(e,n){return r.a.createElement(o.b,{key:n,style:a},r.a.createElement(o.b.Child,{size:n+1},r.a.createElement("div",{style:t("deepskyblue")})),r.a.createElement(o.b.Child,{size:11-n},r.a.createElement("div",{style:t("deepskyblue")})))}))}),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Grid offset"),r.a.createElement(m.MDXTag,{name:"p",components:a},"In some cases it can be neccessary to indent columns. The grid gives basic indentions based on grid sizings. The child column has an offset of 1 column on the left and due to its length of 10 columns an offset of 1 column to the right. With ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid__child--offset-(0-11)")," it is possible to define offsets."),r.a.createElement(c.a,{noTheme:!0},function(e){var a={marginBottom:"8px"};return r.a.createElement(r.a.Fragment,null,Array.apply(0,Array(11)).map(function(e,t){return r.a.createElement(o.b,{key:t,style:a},r.a.createElement(o.b.Child,{offset:t+1,size:11-t},r.a.createElement("div",{style:(n="deepskyblue",{height:"20px",backgroundColor:n})})));var n}))}),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Grid direction"),r.a.createElement(m.MDXTag,{name:"p",components:a},"In some cases it might be neccessary to define or change direction of the columns/rows. Default is ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"row"),". But ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"column")," is also possible to set the columns vertically underneath each other. Changing optical order can be achieved by setting ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"reverse"),"."),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Direction - row (default)"),r.a.createElement(c.a,{noTheme:!0},function(e){var a={height:"20px",width:"100%",backgroundColor:"deepskyblue",color:"white"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{direction:"row"},r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"1")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"2")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"3"))))}),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Direction - row reverse"),r.a.createElement(c.a,{noTheme:!0},function(e){var a={height:"20px",width:"100%",backgroundColor:"deepskyblue",color:"white"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{direction:"row-reverse"},r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"1")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"2")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"3"))))}),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Direction - column"),r.a.createElement(c.a,{noTheme:!0},function(e){var a={height:"20px",width:"100%",backgroundColor:"deepskyblue",color:"white"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{direction:"column"},r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"1")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"2")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"3"))))}),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Direction - column reverse"),r.a.createElement(c.a,{noTheme:!0},function(e){var a={height:"20px",width:"100%",backgroundColor:"deepskyblue",color:"white"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{direction:"column-reverse"},r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"1")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"2")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"3"))))}),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Grid gap"),r.a.createElement(m.MDXTag,{name:"p",components:a},"In some cases it might be useful to adapt the gap of the grid. Default is ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"normal"),". But ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"zero")," is also possible to place elements besides each other without spacings."),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Gap - normal (default)"),r.a.createElement(c.a,{noTheme:!0},function(e){var a={height:"20px",width:"100%",backgroundColor:"deepskyblue",color:"white"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{gap:"normal"},r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"1")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"2")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"3"))))}),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Gap - zero"),r.a.createElement(c.a,{noTheme:!0},function(e){var a={height:"20px",width:"100%",backgroundColor:"deepskyblue",color:"white"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{gap:"zero"},r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"1")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"2")),r.a.createElement(o.b.Child,{size:4},r.a.createElement(o.e,{align:"center",style:a},"3"))))}),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Grid nesting"),r.a.createElement(m.MDXTag,{name:"p",components:a},'Basic nesting of grids is supported. "Basic" because of percentage value of width and gaps which couldn\'t be calculated for each column width. Here are some examples of "dos" and "don\'ts":'),r.a.createElement(m.MDXTag,{name:"h4",components:a},'Possible nesting by keeping columns in "the grid"'),r.a.createElement(m.MDXTag,{name:"p",components:a},"Only columns with the following widths could be nested:"),r.a.createElement(m.MDXTag,{name:"ul",components:a},r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 8"),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 6"),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 4")),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Forbidden nesting"),r.a.createElement(m.MDXTag,{name:"p",components:a},'Nesting inside columns with the following widths should be prevented, because all children widths won\'t be in "the grid" anymore:'),r.a.createElement(m.MDXTag,{name:"ul",components:a},r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 11"),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 10"),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 9"),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 7"),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 5"),r.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"total width of 3")),r.a.createElement(c.a,{noTheme:!0},function(e){var a=function(e){return{height:"20px",backgroundColor:e}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,null,r.a.createElement(o.b.Child,{size:6},r.a.createElement("div",{style:a("lightskyblue")},r.a.createElement(o.b,null,r.a.createElement(o.b.Child,{size:6},r.a.createElement("div",{style:a("deepskyblue")})),r.a.createElement(o.b.Child,{size:6},r.a.createElement("div",{style:a("deepskyblue")}))))),r.a.createElement(o.b.Child,{size:6},r.a.createElement("div",{style:a("lightskyblue")},r.a.createElement(o.b,null,r.a.createElement(o.b.Child,{size:4},r.a.createElement("div",{style:a("deepskyblue")})),r.a.createElement(o.b.Child,{size:8},r.a.createElement("div",{style:a("deepskyblue")})))))))}),r.a.createElement(m.MDXTag,{name:"hr",components:a}),r.a.createElement(m.MDXTag,{name:"h3",components:a},"Grid responsive"),r.a.createElement(m.MDXTag,{name:"p",components:a},"The grid system is fluid/responsive by itself by using percentages for every value (widths, gaps, offsets). But it can also provide breakpoint specific values to fit the needs of certain viewports:"),r.a.createElement(c.a,{noTheme:!0},function(e){var a=function(e,a){return{minHeight:"20px",backgroundColor:e,marginTop:"12px",color:"white",padding:a}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{gap:{base:"normal",s:"zero",m:"normal"}},r.a.createElement(o.b.Child,{className:"pui-flex",size:{base:12,m:4,l:3},offset:{base:0,m:2,l:0}},r.a.createElement("div",{className:"pui-flex__child pui-flex__child--auto",style:a("deepskyblue","12px")},r.a.createElement(o.e,{type:"4-thin"},"Column 1"),r.a.createElement(o.e,null,"xxs -- size: 12 ",r.a.createElement("br",null),"s -- gap: zero ",r.a.createElement("br",null),"m -- gap: normal, size: 4, offset: 2",r.a.createElement("br",null),"l -- size: 3, offset: 0"))),r.a.createElement(o.b.Child,{className:"pui-flex",size:{base:12,s:6,m:4,l:3},offset:{base:0,s:3,m:0}},r.a.createElement("div",{className:"pui-flex__child pui-flex__child--auto",style:a("deepskyblue","12px")},r.a.createElement(o.e,{type:"4-thin"},"Column 2"),r.a.createElement(o.e,null,"xxs -- size: 12 ",r.a.createElement("br",null),"s -- gap: zero, size: 6, offset: 3",r.a.createElement("br",null),"m -- gap: normal, size: 4, offset: 0",r.a.createElement("br",null),"l -- size: 3"))),r.a.createElement(o.b.Child,{className:"pui-flex",size:{base:12,s:6,l:3}},r.a.createElement("div",{className:"pui-flex__child pui-flex__child--auto",style:a("deepskyblue","12px")},r.a.createElement(o.e,{type:"4-thin"},"Column 3"),r.a.createElement(o.e,null,"xxs -- size: 12 ",r.a.createElement("br",null),"s -- gap: zero, size: 6",r.a.createElement("br",null),"m -- gap: normal",r.a.createElement("br",null),"l -- size: 3"))),r.a.createElement(o.b.Child,{className:"pui-flex",size:{base:12,s:6,l:3}},r.a.createElement("div",{className:"pui-flex__child pui-flex__child--auto",style:a("deepskyblue","12px")},r.a.createElement(o.e,{type:"4-thin"},"Column 4"),r.a.createElement(o.e,null,"xxs -- size: 12 ",r.a.createElement("br",null),"s -- gap: zero, size: 6",r.a.createElement("br",null),"m -- gap: normal",r.a.createElement("br",null),"l -- size: 3")))))}),r.a.createElement(m.MDXTag,{name:"h4",components:a},"Following values can be set by using breakpoints classes"),r.a.createElement(m.MDXTag,{name:"p",components:a},"Size: ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid__child--size-(size)-(breakpoint)")),r.a.createElement(m.MDXTag,{name:"p",components:a},"Offset: ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid__child--offset-(offset)-(breakpoint)")),r.a.createElement(m.MDXTag,{name:"p",components:a},"Direction: ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid--direction-column-(breakpoint)")," ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid--direction-column-reverse-(breakpoint)")," ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid--direction-row-(breakpoint)")," ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid--direction-row-reverse-(breakpoint)")),r.a.createElement(m.MDXTag,{name:"p",components:a},"Gaps: ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid--gap-normal-(breakpoint)")," ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"grid--gap-zero-(breakpoint)")))}}}]);
//# sourceMappingURL=9.ec72b7c8.chunk.js.map