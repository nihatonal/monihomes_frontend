"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[606],{9508:(e,t,n)=>{n.d(t,{x:()=>o});var r=n(2791);const o=()=>{const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(),a=(0,r.useRef)([]),i=(0,r.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const s=new AbortController;a.current.push(s);try{const o=await fetch(e,{method:n,body:r,headers:i,signal:s.signal}),c=await o.json();if(a.current=a.current.filter((e=>e!==s)),!o.ok)throw new Error(c.message);return t(!1),c}catch(c){throw o(c.message),t(!1),c}}),[]);return(0,r.useEffect)((()=>()=>{a.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:n,sendRequest:i,clearError:()=>{o(null)}}}},2606:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(2791),o=n(9508),a=n(3108),i=n(7698),s=n.n(i),c=n(184);const l=function(e){const t=(0,r.useContext)(a.V),{isLoading:n,sendRequest:i}=(0,o.x)();return(0,c.jsx)("div",{className:"signup_wrapper",children:(0,c.jsx)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await i("https://monihomesbackend.onrender.com/api/signup","POST",JSON.stringify({username:"nihatonal",email:"nihatonal@outlook.com",password:"nihat2575"}),{"Content-Type":"application/json"});t.login(e.userId,e.token),console.log(e)}catch(n){}},children:(0,c.jsx)("button",{type:"submit",className:"signup_button",children:n?(0,c.jsx)(s(),{color:"white",loading:!0,cssOverride:"",size:30,"aria-label":"Loading Spinner","data-testid":"loader"}):"Sign Up"})})})}},7698:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=i(n(2791)),l=n(8945),u=(0,n(7074).createAnimation)("BounceLoader","0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}","bounce");t.default=function(e){var t=e.loading,n=void 0===t||t,o=e.color,a=void 0===o?"#000000":o,i=e.speedMultiplier,d=void 0===i?1:i,p=e.cssOverride,f=void 0===p?{}:p,h=e.size,v=void 0===h?60:h,m=s(e,["loading","color","speedMultiplier","cssOverride","size"]),b=function(e){var t=1===e?"".concat(1/d,"s"):"0s";return{position:"absolute",height:(0,l.cssValue)(v),width:(0,l.cssValue)(v),backgroundColor:a,borderRadius:"100%",opacity:.6,top:0,left:0,animationFillMode:"both",animation:"".concat(u," ").concat(2.1/d,"s ").concat(t," infinite ease-in-out")}},g=r({display:"inherit",position:"relative",width:(0,l.cssValue)(v),height:(0,l.cssValue)(v)},f);return n?c.createElement("span",r({style:g},m),c.createElement("span",{style:b(1)}),c.createElement("span",{style:b(2)})):null}},7074:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var a=o.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return a&&a.insertRule(i,0),r}},8945:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var o=(e.match(/[^0-9]*$/)||"").toString();return n[o]?{value:t,unit:o}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=606.ce9d29f4.chunk.js.map