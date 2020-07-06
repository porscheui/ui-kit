(window.webpackJsonpPorscheDesignSystem_1_5_0_rc_0=window.webpackJsonpPorscheDesignSystem_1_5_0_rc_0||[]).push([[5],{32:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var o=i(0),a=Object(o.d)((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var p=i.apply(null,a);p&&e.push(p)}else if("object"===r)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i}()}))},9:function(e,t,i){"use strict";i.r(t),i.d(t,"p_checkbox_wrapper",(function(){return r}));var o=i(0),a=i(32);const r=class{constructor(e){Object(o.r)(this,e),this.label="",this.state="none",this.message="",this.hideLabel=!1,this.labelClick=e=>{var t;(null===(t=this.host.shadowRoot)||void 0===t?void 0:t.host)&&null===e.target.closest("a")&&this.input.click()},this.setState=()=>{this.checked=this.input.checked,this.disabled=this.input.disabled,this.indeterminate=this.input.indeterminate}}componentWillLoad(){this.setInput(),this.setAriaAttributes(),this.setState(),this.bindStateListener(),this.addSlottedStyles()}componentDidUpdate(){this.setAriaAttributes()}render(){const e=Object(a.a)(Object(o.f)("checkbox-wrapper__label")),t=Object(a.a)(Object(o.f)("checkbox-wrapper__fake-checkbox"),(this.checked||this.indeterminate)&&Object(o.f)("checkbox-wrapper__fake-checkbox--checked"),this.disabled&&Object(o.f)("checkbox-wrapper__fake-checkbox--disabled"),"none"!==this.state&&Object(o.f)("checkbox-wrapper__fake-checkbox--"+this.state)),i=Object(a.a)(Object(o.f)("checkbox-wrapper__icon"),(this.checked||this.indeterminate)&&Object(o.f)("checkbox-wrapper__icon--checked")),r=Object(a.a)(Object(o.f)("checkbox-wrapper__label-text"),Object(o.n)("checkbox-wrapper__label-text-",this.hideLabel,["hidden","visible"]),this.disabled&&Object(o.f)("checkbox-wrapper__label-text--disabled")),p=Object(a.a)(Object(o.f)("checkbox-wrapper__message"),"none"!==this.state&&Object(o.f)("checkbox-wrapper__message--"+this.state)),s=Object(o.h)(this.host,["p-icon","p-text"]);return Object(o.i)(o.a,null,Object(o.i)("label",{class:e},this.isLabelVisible&&Object(o.i)(s.pText,{class:r,tag:"span",color:"inherit",onClick:this.labelClick},this.label||Object(o.i)("span",null,Object(o.i)("slot",{name:"label"}))),Object(o.i)("span",{class:t},Object(o.i)(s.pIcon,{class:i,name:this.indeterminate?"minus":"check",theme:"dark",size:"inherit","aria-hidden":"true"}),Object(o.i)("slot",null))),this.isMessageVisible&&Object(o.i)(s.pText,{class:p,color:"inherit",role:"error"===this.state&&"alert"},this.message||Object(o.i)("span",null,Object(o.i)("slot",{name:"message"}))))}get isLabelVisible(){return!!this.label||!!this.host.querySelector('[slot="label"]')}get isMessageDefined(){return!!this.message||!!this.host.querySelector('[slot="message"]')}get isMessageVisible(){return["success","error"].includes(this.state)&&this.isMessageDefined}setInput(){this.input=this.host.querySelector('input[type="checkbox"]')}setAriaAttributes(){this.label&&this.message?this.input.setAttribute("aria-label",`${this.label}. ${this.message}`):this.label&&this.input.setAttribute("aria-label",this.label),"error"===this.state?this.input.setAttribute("aria-invalid","true"):this.input.removeAttribute("aria-invalid")}bindStateListener(){Object(o.t)(this.input,"border-top-color",this.setState)}addSlottedStyles(){const e=this.host.tagName.toLowerCase(),t=`${e} a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    ${e} a:hover {\n      color: #d5001c;\n    }\n\n    ${e} a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }`;Object(o.l)(this.host,t)}get host(){return Object(o.g)(this)}};r.style=":host{display:block}::slotted(input){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;margin:0 !important;padding:0 !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;border:0 !important;border-top-color:rgba(255, 255, 255, 0) !important;background-color:transparent !important;opacity:1 !important;outline:transparent solid 2px !important;outline-offset:1px !important;cursor:pointer !important;-webkit-transition:outline-color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, border-top-color 1ms linear !important}::slotted(input::-ms-check){display:none !important}::slotted(input:focus){outline-color:#00d5b9 !important}::slotted(input:checked){border-top-color:rgba(255, 255, 255, 0.01) !important}::slotted(input:disabled){cursor:not-allowed !important;border-top-color:rgba(255, 255, 255, 0.02) !important}::slotted(input:indeterminate){border-top-color:rgba(255, 255, 255, 0.03) !important}::slotted(input:disabled:checked){border-top-color:rgba(255, 255, 255, 0.04) !important}::slotted(input:disabled:indeterminate){border-top-color:rgba(255, 255, 255, 0.05) !important}::slotted(input:checked:indeterminate){border-top-color:rgba(255, 255, 255, 0.06) !important}::slotted(input:disabled:checked:indeterminate){border-top-color:rgba(255, 255, 255, 0.07) !important}.p-checkbox-wrapper__label{position:relative;display:-ms-flexbox;display:flex}.p-checkbox-wrapper__label-text{-ms-flex-order:1;order:1;display:inline-block;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-checkbox-wrapper__label-text--disabled{color:#96989a;cursor:default}.p-checkbox-wrapper__label-text--visible{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-checkbox-wrapper__label-text--visible-xs{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-checkbox-wrapper__label-text--visible-s{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-checkbox-wrapper__label-text--visible-m{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-checkbox-wrapper__label-text--visible-l{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-checkbox-wrapper__label-text--visible-xl{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-checkbox-wrapper__fake-checkbox{position:relative;width:1.5rem;height:1.5rem;display:block;-ms-flex-negative:0;flex-shrink:0;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-checkbox-wrapper__fake-checkbox:hover:not(.p-checkbox-wrapper__fake-checkbox--disabled):not(.p-checkbox-wrapper__fake-checkbox--success):not(.p-checkbox-wrapper__fake-checkbox--error),.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox:not(.p-checkbox-wrapper__fake-checkbox--disabled):not(.p-checkbox-wrapper__fake-checkbox--success):not(.p-checkbox-wrapper__fake-checkbox--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-checkbox-wrapper__fake-checkbox--checked{-webkit-box-shadow:inset 0 0 0 1px #323639;box-shadow:inset 0 0 0 1px #323639;background-color:#323639}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--disabled{background-color:#96989a}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--error{background-color:#e00000}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--success{background-color:#018a16}.p-checkbox-wrapper__fake-checkbox--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a}.p-checkbox-wrapper__fake-checkbox--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-checkbox-wrapper__fake-checkbox--error:hover,.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-checkbox-wrapper__fake-checkbox--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-checkbox-wrapper__fake-checkbox--success:hover,.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-checkbox-wrapper__icon{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-transition:opacity 0.24s ease;transition:opacity 0.24s ease}.p-checkbox-wrapper__icon--checked{opacity:1}.p-checkbox-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-checkbox-wrapper__message--success{color:#018a16}.p-checkbox-wrapper__message--error{color:#e00000}"}}]);