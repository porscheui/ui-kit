(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8529baa"],{c702:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("ef14");var r=i("53ca"),s=i("b36d"),n=Object(s["d"])((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function i(){for(var t=[],s=0;s<arguments.length;s++){var n=arguments[s];if(n){var o=Object(r["a"])(n);if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var c=i.apply(null,n);c&&t.push(c)}else if("object"===o)for(var l in n)e.call(n,l)&&n[l]&&t.push(l)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):window.classNames=i})()}))},ca93:function(t,e,i){"use strict";i.r(e),i.d(e,"p_text_list",(function(){return o}));var r=i("b36d"),s=i("c702"),n=':host{display:block;counter-reset:section !important}.p-text-list{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:400;display:block;padding:0;margin:0}.p-text-list--theme-light{color:#000}.p-text-list--theme-dark{color:#fff}',o=function(){function t(t){Object(r["q"])(this,t),this.listType="unordered",this.orderType="numbered",this.theme="light"}return t.prototype.render=function(){var t="unordered"===this.listType?"ul":"ol",e=Object(s["a"])(Object(r["e"])("text-list"),Object(r["e"])("text-list--"+this.listType),Object(r["e"])("text-list--theme-"+this.theme),this.isNestedList&&Object(r["e"])("text-list--nested"));return Object(r["i"])(r["a"],{nested:this.isNestedList},Object(r["i"])(t,{role:"list",class:e},Object(r["i"])("slot",null)))},Object.defineProperty(t.prototype,"isNestedList",{get:function(){return!!this.host.closest(Object(r["e"])("text-list-item"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"host",{get:function(){return Object(r["h"])(this)},enumerable:!0,configurable:!0}),t}();o.style=n}}]);
//# sourceMappingURL=chunk-e8529baa.16e3d306.js.map