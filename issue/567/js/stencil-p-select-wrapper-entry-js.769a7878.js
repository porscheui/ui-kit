(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stencil-p-select-wrapper-entry-js"],{"2daf":function(e,t,i){"use strict";i.r(t),i.d(t,"p_select_wrapper",(function(){return l}));i("99af"),i("caad");var a=i("d4ec"),s=i("bee2"),o=i("98b1"),p=i("5674"),r=':host{display:block}::slotted(select){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;padding:0.75rem 3rem 0.75rem 0.75rem !important;margin:0 !important;outline:transparent none !important;outline-offset:1px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;text-indent:0 !important;color:transparent !important;text-shadow:0 0 0 #000 !important;-webkit-transition:outline-color 0.24s ease, text-shadow 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, text-shadow 0.24s ease, border-top-color 1ms linear !important}::slotted(select::-ms-expand){display:none !important}::slotted(select:focus::-ms-value){background-color:transparent !important;text-shadow:0 0 0 #000 !important}::slotted(select:focus){outline:#00d5b9 solid 2px !important}::slotted(select:disabled){border-top-color:rgba(255, 255, 255, 0.01) !important;text-shadow:0 0 0 #96989a !important;cursor:not-allowed !important}.p-select-wrapper__label{display:block}.p-select-wrapper__label-text{display:inline-block;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__label-text--disabled{color:#96989a}.p-select-wrapper__label-text--visible{position:static;width:auto;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-select-wrapper__label-text--visible-xs{position:static;width:auto;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-select-wrapper__label-text--visible-s{position:static;width:auto;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-select-wrapper__label-text--visible-m{position:static;width:auto;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-select-wrapper__label-text--visible-l{position:static;width:auto;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-select-wrapper__label-text--visible-xl{position:static;width:auto;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-select-wrapper__fake-select{position:relative;width:100%;height:3rem;display:block;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-select-wrapper__fake-select:hover:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error),.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-select-wrapper__fake-select--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-select-wrapper__fake-select--success:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-select-wrapper__fake-select--error:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-select-wrapper__icon{position:absolute;top:0.75rem;right:0.75rem;color:#000}.p-select-wrapper__icon--disabled{color:#96989a}.p-select-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__message--success{color:#018a16}.p-select-wrapper__message--error{color:#e00000}',l=function(){function e(t){Object(a["a"])(this,e),Object(o["g"])(this,t),this.label="",this.state="none",this.message="",this.hideLabel=!1,this.labelId=Object(p["g"])()}return Object(s["a"])(e,[{key:"componentWillLoad",value:function(){this.setSelect(),this.setState(),this.bindStateListener(),this.addSlottedStyles()}},{key:"render",value:function(){var e=this,t=Object(p["c"])(Object(p["f"])("select-wrapper__label")),i=Object(p["c"])(Object(p["f"])("select-wrapper__label-text"),Object(p["e"])("select-wrapper__label-text-",this.hideLabel,["hidden","visible"]),this.disabled&&Object(p["f"])("select-wrapper__label-text--disabled")),a=Object(p["c"])(Object(p["f"])("select-wrapper__fake-select"),this.disabled&&Object(p["f"])("select-wrapper__fake-select--disabled"),"none"!==this.state&&Object(p["f"])("select-wrapper__fake-select--".concat(this.state))),s=Object(p["c"])(Object(p["f"])("select-wrapper__icon"),this.disabled&&Object(p["f"])("select-wrapper__icon--disabled")),r=Object(p["c"])(Object(p["f"])("select-wrapper__message"),"none"!==this.state&&Object(p["f"])("select-wrapper__message--".concat(this.state)));return Object(o["f"])(o["a"],null,Object(o["f"])("label",{class:t,id:"error"===this.state&&this.labelId},this.isLabelVisible&&Object(o["f"])("p-text",{class:i,tag:"span",color:"inherit",onClick:function(){return e.labelClick()}},this.label?this.label:Object(o["f"])("span",null,Object(o["f"])("slot",{name:"label"}))),Object(o["f"])("span",{class:a},Object(o["f"])("p-icon",{class:s,name:"arrow-head-down",color:"inherit"}),Object(o["f"])("slot",null))),this.isMessageVisible&&Object(o["f"])("p-text",{class:r,color:"inherit",role:"error"===this.state&&"alert","aria-describedby":"error"===this.state&&this.labelId},this.message?this.message:Object(o["f"])("span",null,Object(o["f"])("slot",{name:"message"}))))}},{key:"setSelect",value:function(){this.select=this.host.querySelector("select"),this.select.setAttribute("aria-label",this.label)}},{key:"setState",value:function(){this.disabled=this.select.disabled}},{key:"labelClick",value:function(){this.select.focus()}},{key:"bindStateListener",value:function(){var e=this;Object(p["h"])(this.select,"border-top-color",(function(){e.setState()}))}},{key:"addSlottedStyles",value:function(){var e=this.host.tagName.toLowerCase(),t="".concat(e," a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n    ").concat(e," a:hover {\n      color: #d5001c;\n    }\n    ").concat(e," a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }");Object(p["d"])(this.host,t)}},{key:"isLabelVisible",get:function(){return!!this.label||!!this.host.querySelector('[slot="label"]')}},{key:"isMessageDefined",get:function(){return!!this.message||!!this.host.querySelector('[slot="message"]')}},{key:"isMessageVisible",get:function(){return["success","error"].includes(this.state)&&this.isMessageDefined}},{key:"host",get:function(){return Object(o["e"])(this)}}]),e}();l.style=r}}]);
//# sourceMappingURL=stencil-p-select-wrapper-entry-js.769a7878.js.map