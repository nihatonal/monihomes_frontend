"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[606],{2606:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(2791),r=n(9508),i=n(3108),a=n(7698),s=n.n(a),l=n(184);const c=function(e){const t=(0,o.useContext)(i.V),{isLoading:n,sendRequest:a}=(0,r.x)();return(0,l.jsx)("div",{className:"signup_wrapper",children:(0,l.jsx)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await a("https://monihomesbackend.onrender.com/api/signup","POST",JSON.stringify({username:"nihatonal",email:"nihatonal@outlook.com",password:"nihat2575"}),{"Content-Type":"application/json"});t.login(e.userId,e.token),console.log(e)}catch(n){}},children:(0,l.jsx)("button",{type:"submit",className:"signup_button",children:n?(0,l.jsx)(s(),{color:"white",loading:!0,cssOverride:"",size:30,"aria-label":"Loading Spinner","data-testid":"loader"}):"Sign Up"})})})}},7698:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},s=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(2791)),c=n(8945),u=(0,n(7074).createAnimation)("BounceLoader","0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}","bounce");t.default=function(e){var t=e.loading,n=void 0===t||t,r=e.color,i=void 0===r?"#000000":r,a=e.speedMultiplier,d=void 0===a?1:a,p=e.cssOverride,f=void 0===p?{}:p,h=e.size,b=void 0===h?60:h,v=s(e,["loading","color","speedMultiplier","cssOverride","size"]),y=function(e){var t=1===e?"".concat(1/d,"s"):"0s";return{position:"absolute",height:(0,c.cssValue)(b),width:(0,c.cssValue)(b),backgroundColor:i,borderRadius:"100%",opacity:.6,top:0,left:0,animationFillMode:"both",animation:"".concat(u," ").concat(2.1/d,"s ").concat(t," infinite ease-in-out")}},g=o({display:"inherit",position:"relative",width:(0,c.cssValue)(b),height:(0,c.cssValue)(b)},f);return n?l.createElement("span",o({style:g},v),l.createElement("span",{style:y(1)}),l.createElement("span",{style:y(2)})):null}}}]);
//# sourceMappingURL=606.b06aae47.chunk.js.map