(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-280b08a9"],{"0b7e":function(e,n,t){var c={"./about/introduction.md":["62a1","chunk-2d0cf4a2"],"./accessibility/compliance.md":["79ec","chunk-2d0d83f6"],"./accessibility/guidelines.md":["43b2","chunk-2d0c0fc5"],"./accessibility/introduction.md":["0b3e","chunk-2d0ae93a"],"./assets/fonts.md":["5820","chunk-2d0c9117"],"./assets/icons.md":["087e","chunk-2d0a4c0c"],"./assets/introduction.md":["ca28","chunk-2d22141a"],"./assets/marque.md":["04ea","chunk-2d0a4296"],"./assets/meta-icons.md":["e48f","chunk-2d2254d3"],"./basics/browser-compatibility.md":["8a54","chunk-2d0e887e"],"./basics/quality-criteria.md":["ffb4","chunk-2d2389c8"],"./chinese.md":["a141","chunk-2d207763"],"./cyril.md":["6e38","chunk-2d0dae8a"],"./general/blur-on-focus.md":["a48f","chunk-2d208357"],"./general/components-ready.md":["14e7","chunk-2d0ab6cb"],"./general/slotted-content.md":["ef2a","chunk-2d230fc6"],"./general/testing.md":["aec2","chunk-2d214049"],"./greek.md":["cea3","chunk-2d2228ca"],"./help/faq.md":["5e25","chunk-2d0d3a09"],"./help/support.md":["3f6e","chunk-2d0c55b8"],"./help/troubleshooting.md":["ab3a","chunk-2d212f65"],"./icons.md":["8b84","chunk-2d0e8c9c"],"./japanese.md":["0d7f","chunk-2d0af139"],"./korean.md":["df7a","chunk-2d229c02"],"./latin.md":["77f0","chunk-2d0d7c60"],"./license.md":["e883","chunk-2d2263a4"],"./markdown.md":["74da","chunk-7b855d42"],"./news/roadmap.md":["e5c3","chunk-2d225d96"],"./news/versioning.md":["452d","chunk-2d0c11a9"],"./patterns/buttons/guidelines.md":["3c13","chunk-947a1f2c"],"./patterns/buttons/resources.md":["8b50","chunk-0ffe4b5c"],"./patterns/forms/guidelines.md":["f1e7","chunk-b9dbf8cc"],"./patterns/forms/resources.md":["ae42","chunk-2d213a98"],"./performance/cdn.md":["5eeb","chunk-2d0d4063"],"./performance/loading-behaviour.md":["9ce0","chunk-45a4c399","chunk-ecdf8fe4"],"./start-coding/angular.md":["b6be","chunk-2d21044d"],"./start-coding/gatsby.md":["5bda","chunk-2d0d3500"],"./start-coding/introduction.md":["f9fc","chunk-2d22e186"],"./start-coding/next-js.md":["112e","chunk-2d0aa589"],"./start-coding/react.md":["5e43","chunk-2d0d3a45"],"./start-designing/design-workflow.md":["7ead","chunk-0781b4fc"],"./start-designing/introduction.md":["5777","chunk-2d0c8df8"],"./start-designing/sketch-plugins.md":["6f8a","chunk-2d0db30f"],"./utilities/introduction.md":["7f32","chunk-2d0e26a4"],"./utilities/js/functions.md":["59cb","chunk-2d0c9af9"],"./utilities/js/helper.md":["ec6d","chunk-2d230502"],"./utilities/js/variables.md":["d7ad","chunk-2d21f0ac"],"./utilities/scss/functions.md":["1e71","chunk-2d0b6924"],"./utilities/scss/helper.md":["d188","chunk-2d21d503"],"./utilities/scss/variables.md":["7a10","chunk-2d0e139f"]};function a(e){if(!t.o(c,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=c[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(c)},a.id="0b7e",e.exports=a},"5e6f":function(e,n,t){"use strict";t.r(n);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Markdown",[e.component?t(e.component,{tag:"component"}):e._e()],1)},a=[],r=(t("d3b7"),t("ac1f"),t("5319"),t("96cf"),t("1da1")),d=t("d4ec"),u=t("bee2"),i=t("262e"),s=t("2caf"),o=t("9ab4"),h=t("2b0e"),m=t("2fe1"),f=t("60a3"),l=t("e6e0"),k=t("963d"),p=function(e){Object(i["a"])(c,e);var n=Object(s["a"])(c);function c(){var e;return Object(d["a"])(this,c),e=n.apply(this,arguments),e.component=null,e}return Object(u["a"])(c,[{key:"onRouteChange",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadComponent();case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()},{key:"mounted",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadComponent();case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()},{key:"loadComponent",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.component=null,e.next=3,this.$store.dispatch("toggleLoadingAsync",!0);case 3:return e.prev=3,e.next=6,function(){return t("0b7e")("./".concat(n.page,".md"))}();case 6:this.component=e.sent.default,e.next=13;break;case 9:return e.prev=9,e.t0=e["catch"](3),e.next=13,this.redirect();case 13:return e.next=15,this.$store.dispatch("toggleLoadingAsync",!1);case 15:case"end":return e.stop()}}),e,this,[[3,9]])})));function n(){return e.apply(this,arguments)}return n}()},{key:"redirect",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$router.replace({name:"404"});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()},{key:"page",get:function(){return Object(k["a"])(this.$route.params.page)}}]),c}(h["a"]);Object(o["a"])([Object(f["b"])("$route")],p.prototype,"onRouteChange",null),p=Object(o["a"])([Object(m["b"])({components:{Markdown:l["a"]}})],p);var b=p,g=b,v=t("2877"),w=Object(v["a"])(g,c,a,!1,null,null,null);n["default"]=w.exports}}]);
//# sourceMappingURL=chunk-280b08a9.f51eaf43.js.map