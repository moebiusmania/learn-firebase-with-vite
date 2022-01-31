var re,S,jr,Br,ie,Hr,Kr,Gr,Be={},zr=[],Ic=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function lt(e,t){for(var n in t)e[n]=t[n];return e}function Wr(e){var t=e.parentNode;t&&t.removeChild(e)}function Jn(e,t,n){var s,r,i,o={};for(i in t)i=="key"?s=t[i]:i=="ref"?r=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?re.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return oe(e,o,s,r,null)}function oe(e,t,n,s,r){var i={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r==null?++jr:r};return r==null&&S.vnode!=null&&S.vnode(i),i}function Sc(){return{current:null}}function ae(e){return e.children}function ce(e,t){this.props=e,this.context=t}function Mt(e,t){if(t==null)return e.__?Mt(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Mt(e):null}function Qr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Qr(e)}}function Zn(e){(!e.__d&&(e.__d=!0)&&ie.push(e)&&!He.__r++||Kr!==S.debounceRendering)&&((Kr=S.debounceRendering)||Hr)(He)}function He(){for(var e;He.__r=ie.length;)e=ie.sort(function(t,n){return t.__v.__b-n.__v.__b}),ie=[],e.some(function(t){var n,s,r,i,o,a;t.__d&&(o=(i=(n=t).__v).__e,(a=n.__P)&&(s=[],(r=lt({},i)).__v=i.__v+1,ts(a,i,r,n.__n,a.ownerSVGElement!==void 0,i.__h!=null?[o]:null,s,o==null?Mt(i):o,i.__h),si(s,i),i.__e!=o&&Qr(i)))})}function Xr(e,t,n,s,r,i,o,a,c,u){var h,l,f,d,g,C,A,R=s&&s.__k||zr,P=R.length;for(n.__k=[],h=0;h<t.length;h++)if((d=n.__k[h]=(d=t[h])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?oe(null,d,null,null,d):Array.isArray(d)?oe(ae,{children:d},null,null,null):d.__b>0?oe(d.type,d.props,d.key,null,d.__v):d)!=null){if(d.__=n,d.__b=n.__b+1,(f=R[h])===null||f&&d.key==f.key&&d.type===f.type)R[h]=void 0;else for(l=0;l<P;l++){if((f=R[l])&&d.key==f.key&&d.type===f.type){R[l]=void 0;break}f=null}ts(e,d,f=f||Be,r,i,o,a,c,u),g=d.__e,(l=d.ref)&&f.ref!=l&&(A||(A=[]),f.ref&&A.push(f.ref,null,d),A.push(l,d.__c||g,d)),g!=null?(C==null&&(C=g),typeof d.type=="function"&&d.__k===f.__k?d.__d=c=Yr(d,c,e):c=Zr(e,d,f,R,g,c),typeof n.type=="function"&&(n.__d=c)):c&&f.__e==c&&c.parentNode!=e&&(c=Mt(f))}for(n.__e=C,h=P;h--;)R[h]!=null&&(typeof n.type=="function"&&R[h].__e!=null&&R[h].__e==n.__d&&(n.__d=Mt(s,h+1)),ii(R[h],R[h]));if(A)for(h=0;h<A.length;h++)ri(A[h],A[++h],A[++h])}function Yr(e,t,n){for(var s,r=e.__k,i=0;r&&i<r.length;i++)(s=r[i])&&(s.__=e,t=typeof s.type=="function"?Yr(s,t,n):Zr(n,s,s,r,s.__e,t));return t}function Jr(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Jr(n,t)}):t.push(e)),t}function Zr(e,t,n,s,r,i){var o,a,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||r!=i||r.parentNode==null)t:if(i==null||i.parentNode!==e)e.appendChild(r),o=null;else{for(a=i,c=0;(a=a.nextSibling)&&c<s.length;c+=2)if(a==r)break t;e.insertBefore(r,i),o=i}return o!==void 0?o:r.nextSibling}function Ac(e,t,n,s,r){var i;for(i in n)i==="children"||i==="key"||i in t||Ke(e,i,null,n[i],s);for(i in t)r&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||Ke(e,i,t[i],n[i],s)}function ti(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ic.test(t)?n:n+"px"}function Ke(e,t,n,s,r){var i;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||ti(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||ti(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?s||e.addEventListener(t,i?ni:ei,i):e.removeEventListener(t,i?ni:ei,i);else if(t!=="dangerouslySetInnerHTML"){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break t}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function ei(e){this.l[e.type+!1](S.event?S.event(e):e)}function ni(e){this.l[e.type+!0](S.event?S.event(e):e)}function ts(e,t,n,s,r,i,o,a,c){var u,h,l,f,d,g,C,A,R,P,ht,W=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,a=t.__e=n.__e,t.__h=null,i=[a]),(u=S.__b)&&u(t);try{t:if(typeof W=="function"){if(A=t.props,R=(u=W.contextType)&&s[u.__c],P=u?R?R.props.value:u.__:s,n.__c?C=(h=t.__c=n.__c).__=h.__E:("prototype"in W&&W.prototype.render?t.__c=h=new W(A,P):(t.__c=h=new ce(A,P),h.constructor=W,h.render=bc),R&&R.sub(h),h.props=A,h.state||(h.state={}),h.context=P,h.__n=s,l=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),W.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=lt({},h.__s)),lt(h.__s,W.getDerivedStateFromProps(A,h.__s))),f=h.props,d=h.state,l)W.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(W.getDerivedStateFromProps==null&&A!==f&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(A,P),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(A,h.__s,P)===!1||t.__v===n.__v){h.props=A,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Et){Et&&(Et.__=t)}),h.__h.length&&o.push(h);break t}h.componentWillUpdate!=null&&h.componentWillUpdate(A,h.__s,P),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(f,d,g)})}h.context=P,h.props=A,h.state=h.__s,(u=S.__r)&&u(t),h.__d=!1,h.__v=t,h.__P=e,u=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(s=lt(lt({},s),h.getChildContext())),l||h.getSnapshotBeforeUpdate==null||(g=h.getSnapshotBeforeUpdate(f,d)),ht=u!=null&&u.type===ae&&u.key==null?u.props.children:u,Xr(e,Array.isArray(ht)?ht:[ht],t,n,s,r,i,o,a,c),h.base=t.__e,t.__h=null,h.__h.length&&o.push(h),C&&(h.__E=h.__=null),h.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Cc(n.__e,t,n,s,r,i,o,c);(u=S.diffed)&&u(t)}catch(Et){t.__v=null,(c||i!=null)&&(t.__e=a,t.__h=!!c,i[i.indexOf(a)]=null),S.__e(Et,t,n)}}function si(e,t){S.__c&&S.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){S.__e(s,n.__v)}})}function Cc(e,t,n,s,r,i,o,a){var c,u,h,l=n.props,f=t.props,d=t.type,g=0;if(d==="svg"&&(r=!0),i!=null){for(;g<i.length;g++)if((c=i[g])&&"setAttribute"in c==!!d&&(d?c.localName===d:c.nodeType===3)){e=c,i[g]=null;break}}if(e==null){if(d===null)return document.createTextNode(f);e=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,f.is&&f),i=null,a=!1}if(d===null)l===f||a&&e.data===f||(e.data=f);else{if(i=i&&re.call(e.childNodes),u=(l=n.props||Be).dangerouslySetInnerHTML,h=f.dangerouslySetInnerHTML,!a){if(i!=null)for(l={},g=0;g<e.attributes.length;g++)l[e.attributes[g].name]=e.attributes[g].value;(h||u)&&(h&&(u&&h.__html==u.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(Ac(e,f,l,r,a),h)t.__k=[];else if(g=t.props.children,Xr(e,Array.isArray(g)?g:[g],t,n,s,r&&d!=="foreignObject",i,o,i?i[0]:n.__k&&Mt(n,0),a),i!=null)for(g=i.length;g--;)i[g]!=null&&Wr(i[g]);a||("value"in f&&(g=f.value)!==void 0&&(g!==l.value||g!==e.value||d==="progress"&&!g)&&Ke(e,"value",g,l.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==e.checked&&Ke(e,"checked",g,l.checked,!1))}return e}function ri(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){S.__e(s,n)}}function ii(e,t,n){var s,r;if(S.unmount&&S.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||ri(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(i){S.__e(i,t)}s.base=s.__P=null}if(s=e.__k)for(r=0;r<s.length;r++)s[r]&&ii(s[r],t,typeof e.type!="function");n||e.__e==null||Wr(e.__e),e.__e=e.__d=void 0}function bc(e,t,n){return this.constructor(e,n)}function oi(e,t,n){var s,r,i;S.__&&S.__(e,t),r=(s=typeof n=="function")?null:n&&n.__k||t.__k,i=[],ts(t,e=(!s&&n||t).__k=Jn(ae,null,[e]),r||Be,Be,t.ownerSVGElement!==void 0,!s&&n?[n]:r?null:t.firstChild?re.call(t.childNodes):null,i,!s&&n?n:r?r.__e:t.firstChild,s),si(i,e)}function ai(e,t){oi(e,t,ai)}function kc(e,t,n){var s,r,i,o=lt({},e.props);for(i in t)i=="key"?s=t[i]:i=="ref"?r=t[i]:o[i]=t[i];return arguments.length>2&&(o.children=arguments.length>3?re.call(arguments,2):n),oe(e.type,o,s||e.key,r||e.ref,null)}function Nc(e,t){var n={__c:t="__cC"+Gr++,__:e,Consumer:function(s,r){return s.children(r)},Provider:function(s){var r,i;return this.getChildContext||(r=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(Zn)},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),s.children}};return n.Provider.__=n.Consumer.contextType=n}re=zr.slice,S={__e:function(e,t){for(var n,s,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(e)),r=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(i){e=i}throw e}},jr=0,Br=function(e){return e!=null&&e.constructor===void 0},ce.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=lt({},this.state),typeof e=="function"&&(e=e(lt({},n),this.props)),e&&lt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Zn(this))},ce.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Zn(this))},ce.prototype.render=ae,ie=[],Hr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,He.__r=0,Gr=0;var Dc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:oi,hydrate:ai,createElement:Jn,h:Jn,Fragment:ae,createRef:Sc,get isValidElement(){return Br},Component:ce,cloneElement:kc,createContext:Nc,toChildArray:Jr,get options(){return S}}),es,ot,ci,ns=0,ss=[],hi=S.__b,ui=S.__r,li=S.diffed,fi=S.__c,di=S.unmount;function pi(e,t){S.__h&&S.__h(ot,e,ns||t),ns=0;var n=ot.__H||(ot.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Hd(e){return ns=1,Rc(mi,e)}function Rc(e,t,n){var s=pi(es++,2);return s.t=e,s.__c||(s.__=[n?n(t):mi(void 0,t),function(r){var i=s.t(s.__[0],r);s.__[0]!==i&&(s.__=[i,s.__[1]],s.__c.setState({}))}],s.__c=ot),s.__}function Kd(e,t){var n=pi(es++,3);!S.__s&&Oc(n.__H,t)&&(n.__=e,n.__H=t,ot.__H.__h.push(n))}function Lc(){var e;for(ss.sort(function(t,n){return t.__v.__b-n.__v.__b});e=ss.pop();)if(e.__P)try{e.__H.__h.forEach(Ge),e.__H.__h.forEach(rs),e.__H.__h=[]}catch(t){e.__H.__h=[],S.__e(t,e.__v)}}S.__b=function(e){ot=null,hi&&hi(e)},S.__r=function(e){ui&&ui(e),es=0;var t=(ot=e.__c).__H;t&&(t.__h.forEach(Ge),t.__h.forEach(rs),t.__h=[])},S.diffed=function(e){li&&li(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ss.push(t)!==1&&ci===S.requestAnimationFrame||((ci=S.requestAnimationFrame)||function(n){var s,r=function(){clearTimeout(i),gi&&cancelAnimationFrame(s),setTimeout(n)},i=setTimeout(r,100);gi&&(s=requestAnimationFrame(r))})(Lc)),ot=null},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ge),n.__h=n.__h.filter(function(s){return!s.__||rs(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],S.__e(s,n.__v)}}),fi&&fi(e,t)},S.unmount=function(e){di&&di(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{Ge(s)}catch(r){t=r}}),t&&S.__e(t,n.__v))};var gi=typeof requestAnimationFrame=="function";function Ge(e){var t=ot,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ot=t}function rs(e){var t=ot;e.__c=e.__(),ot=t}function Oc(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function mi(e,t){return typeof t=="function"?t(e):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Pc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Fc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vc(){return ze().indexOf("Electron/")>=0}function Uc(){const e=ze();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $c(){return ze().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="FirebaseError";class We extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=qc,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?jc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new We(r,a,s)}}function jc(e,t){return e.replace(Bc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Bc=/\{\$([^}]+)}/g;function is(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(vi(i)&&vi(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e){return e&&e._delegate?e._delegate:e}class Qe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new xc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gc(t))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Tt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tt){return this.instances.has(t)}getOptions(t=Tt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Tt){return this.component?this.component.multipleInstances?t:Tt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kc(e){return e===Tt?void 0:e}function Gc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Hc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Wc={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Qc=N.INFO,Xc={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Yc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Xc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _i{constructor(t){this.name=t,this._logLevel=Qc,this._logHandler=Yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const os="@firebase/app",wi="0.7.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new _i("@firebase/app"),th="@firebase/app-compat",eh="@firebase/analytics-compat",nh="@firebase/analytics",sh="@firebase/app-check-compat",rh="@firebase/app-check",ih="@firebase/auth",oh="@firebase/auth-compat",ah="@firebase/database",ch="@firebase/database-compat",hh="@firebase/functions",uh="@firebase/functions-compat",lh="@firebase/installations",fh="@firebase/installations-compat",dh="@firebase/messaging",ph="@firebase/messaging-compat",gh="@firebase/performance",mh="@firebase/performance-compat",yh="@firebase/remote-config",vh="@firebase/remote-config-compat",_h="@firebase/storage",wh="@firebase/storage-compat",Eh="@firebase/firestore",Th="@firebase/firestore-compat",Ih="firebase",Sh="9.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]",Ah={[os]:"fire-core",[th]:"fire-core-compat",[nh]:"fire-analytics",[eh]:"fire-analytics-compat",[rh]:"fire-app-check",[sh]:"fire-app-check-compat",[ih]:"fire-auth",[oh]:"fire-auth-compat",[ah]:"fire-rtdb",[ch]:"fire-rtdb-compat",[hh]:"fire-fn",[uh]:"fire-fn-compat",[lh]:"fire-iid",[fh]:"fire-iid-compat",[dh]:"fire-fcm",[ph]:"fire-fcm-compat",[gh]:"fire-perf",[mh]:"fire-perf-compat",[yh]:"fire-rc",[vh]:"fire-rc-compat",[_h]:"fire-gcs",[wh]:"fire-gcs-compat",[Eh]:"fire-fst",[Th]:"fire-fst-compat","fire-js":"fire-js",[Ih]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Map,cs=new Map;function Ch(e,t){try{e.container.addComponent(t)}catch(n){as.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function hs(e){const t=e.name;if(cs.has(t))return as.debug(`There were multiple attempts to register component ${t}.`),!1;cs.set(t,e);for(const n of Xe.values())Ch(n,e);return!0}function bh(e,t){return e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ye=new yi("app","Firebase",kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=Sh;function Gd(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ei,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ye.create("bad-app-name",{appName:String(s)});const r=Xe.get(s);if(r){if(is(e,r.options)&&is(n,r.config))return r;throw Ye.create("duplicate-app",{appName:s})}const i=new zc(s);for(const a of cs.values())i.addComponent(a);const o=new Nh(e,n,i);return Xe.set(s,o),o}function Rh(e=Ei){const t=Xe.get(e);if(!t)throw Ye.create("no-app",{appName:e});return t}function Ft(e,t,n){var s;let r=(s=Ah[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}hs(new Qe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(e){hs(new Qe("platform-logger",t=>new Jc(t),"PRIVATE")),Ft(os,wi,e),Ft(os,wi,"esm2017"),Ft("fire-js","")}Lh("");var Oh="firebase",xh="9.6.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(Oh,xh,"app");var Mh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,us=us||{},w=Mh||self;function Je(){}function ls(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function he(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ph(e){return Object.prototype.hasOwnProperty.call(e,fs)&&e[fs]||(e[fs]=++Fh)}var fs="closure_uid_"+(1e9*Math.random()>>>0),Fh=0;function Vh(e,t,n){return e.call.apply(e.bind,arguments)}function Uh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function j(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?j=Vh:j=Uh,j.apply(null,arguments)}function Ze(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function B(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function gt(){this.s=this.s,this.o=this.o}var $h=0,qh={};gt.prototype.s=!1;gt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),$h!=0)){var e=Ph(this);delete qh[e]}};gt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ti=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ii=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function jh(e){t:{var t=Ou;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Si(e){return Array.prototype.concat.apply([],arguments)}function ds(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function tn(e){return/^[\s\xa0]*$/.test(e)}var Ai=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function J(e,t){return e.indexOf(t)!=-1}function ps(e,t){return e<t?-1:e>t?1:0}var Z;t:{var Ci=w.navigator;if(Ci){var bi=Ci.userAgent;if(bi){Z=bi;break t}}Z=""}function gs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ki(e){const t={};for(const n in e)t[n]=e[n];return t}var Ni="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Di(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Ni.length;i++)n=Ni[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ms(e){return ms[" "](e),e}ms[" "]=Je;function Bh(e){var t=Gh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Hh=J(Z,"Opera"),Vt=J(Z,"Trident")||J(Z,"MSIE"),Ri=J(Z,"Edge"),ys=Ri||Vt,Li=J(Z,"Gecko")&&!(J(Z.toLowerCase(),"webkit")&&!J(Z,"Edge"))&&!(J(Z,"Trident")||J(Z,"MSIE"))&&!J(Z,"Edge"),Kh=J(Z.toLowerCase(),"webkit")&&!J(Z,"Edge");function Oi(){var e=w.document;return e?e.documentMode:void 0}var en;t:{var vs="",_s=function(){var e=Z;if(Li)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ri)return/Edge\/([\d\.]+)/.exec(e);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Kh)return/WebKit\/(\S+)/.exec(e);if(Hh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_s&&(vs=_s?_s[1]:""),Vt){var ws=Oi();if(ws!=null&&ws>parseFloat(vs)){en=String(ws);break t}}en=vs}var Gh={};function zh(){return Bh(function(){let e=0;const t=Ai(String(en)).split("."),n=Ai("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=ps(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ps(r[2].length==0,i[2].length==0)||ps(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Es;if(w.document&&Vt){var xi=Oi();Es=xi||parseInt(en,10)||void 0}else Es=void 0;var Wh=Es,Qh=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",Je,t),w.removeEventListener("test",Je,t)}catch{}return e}();function Q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};function ue(e,t){if(Q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Li){t:{try{ms(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Xh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.Z.h.call(this)}}B(ue,Q);var Xh={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),Yh=0;function Jh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Yh,this.ca=this.fa=!1}function nn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function sn(e){this.src=e,this.g={},this.h=0}sn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Is(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Jh(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function Ts(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Ti(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(nn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Is(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),As={};function Mi(e,t,n,s,r){if(s&&s.once)return Fi(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Mi(e,t[i],n,s,r);return null}return n=Ns(n),e&&e[le]?e.N(t,n,he(s)?!!s.capture:!!s,r):Pi(e,t,n,!1,s,r)}function Pi(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=he(r)?!!r.capture:!!r,a=bs(e);if(a||(e[Ss]=a=new sn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Zh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Qh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Ui(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Zh(){function e(n){return t.call(e.src,e.listener,n)}var t=tu;return e}function Fi(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Fi(e,t[i],n,s,r);return null}return n=Ns(n),e&&e[le]?e.O(t,n,he(s)?!!s.capture:!!s,r):Pi(e,t,n,!0,s,r)}function Vi(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Vi(e,t[i],n,s,r);else s=he(s)?!!s.capture:!!s,n=Ns(n),e&&e[le]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Is(i,n,s,r),-1<n&&(nn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=bs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Is(t,n,s,r)),(n=-1<e?t[e]:null)&&Cs(n))}function Cs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[le])Ts(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ui(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=bs(t))?(Ts(n,e),n.h==0&&(n.src=null,t[Ss]=null)):nn(e)}}}function Ui(e){return e in As?As[e]:As[e]="on"+e}function tu(e,t){if(e.ca)e=!0;else{t=new ue(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Cs(e),e=n.call(s,t)}return e}function bs(e){return e=e[Ss],e instanceof sn?e:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ns(e){return typeof e=="function"?e:(e[ks]||(e[ks]=function(t){return e.handleEvent(t)}),e[ks])}function $(){gt.call(this),this.i=new sn(this),this.P=this,this.I=null}B($,gt);$.prototype[le]=!0;$.prototype.removeEventListener=function(e,t,n,s){Vi(this,e,t,n,s)};function H(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Q(t,e);else if(t instanceof Q)t.target=t.target||e;else{var r=t;t=new Q(s,e),Di(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=rn(o,s,!0,t)&&r}if(o=t.g=e,r=rn(o,s,!0,t)&&r,r=rn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=rn(o,s,!1,t)&&r}$.prototype.M=function(){if($.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)nn(n[s]);delete e.g[t],e.h--}}this.I=null};$.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};$.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function rn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ts(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ds=w.JSON.stringify;function eu(){var e=qi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class nu{constructor(){this.h=this.g=null}add(t,n){const s=$i.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var $i=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new su,e=>e.reset());class su{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ru(e){w.setTimeout(()=>{throw e},0)}function Rs(e,t){Ls||iu(),Os||(Ls(),Os=!0),qi.add(e,t)}var Ls;function iu(){var e=w.Promise.resolve(void 0);Ls=function(){e.then(ou)}}var Os=!1,qi=new nu;function ou(){for(var e;e=eu();){try{e.h.call(e.g)}catch(n){ru(n)}var t=$i;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Os=!1}function on(e,t){$.call(this),this.h=e||1,this.g=t||w,this.j=j(this.kb,this),this.l=Date.now()}B(on,$);y=on.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),H(this,"tick"),this.da&&(xs(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}y.M=function(){on.Z.M.call(this),xs(this),delete this.g};function Ms(e,t,n){if(typeof e=="function")n&&(e=j(e,n));else if(e&&typeof e.handleEvent=="function")e=j(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(e,t||0)}function ji(e){e.g=Ms(()=>{e.g=null,e.i&&(e.i=!1,ji(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class au extends gt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ji(this)}M(){super.M(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fe(e){gt.call(this),this.h=e,this.g={}}B(fe,gt);var Bi=[];function Hi(e,t,n,s){Array.isArray(n)||(n&&(Bi[0]=n.toString()),n=Bi);for(var r=0;r<n.length;r++){var i=Mi(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ki(e){gs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Cs(t)},e),e.g={}}fe.prototype.M=function(){fe.Z.M.call(this),Ki(this)};fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function an(){this.g=!0}an.prototype.Aa=function(){this.g=!1};function cu(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function hu(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Ut(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+lu(e,n)+(s?" "+s:"")})}function uu(e,t){e.info(function(){return"TIMEOUT: "+t})}an.prototype.info=function(){};function lu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ds(n)}catch{return t}}var It={},Gi=null;function cn(){return Gi=Gi||new $}It.Ma="serverreachability";function zi(e){Q.call(this,It.Ma,e)}B(zi,Q);function de(e){const t=cn();H(t,new zi(t,e))}It.STAT_EVENT="statevent";function Wi(e,t){Q.call(this,It.STAT_EVENT,e),this.stat=t}B(Wi,Q);function tt(e){const t=cn();H(t,new Wi(t,e))}It.Na="timingevent";function Qi(e,t){Q.call(this,It.Na,e),this.size=t}B(Qi,Q);function pe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){e()},t)}var hn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ps(){}Ps.prototype.h=null;function Yi(e){return e.h||(e.h=e.i())}function Ji(){}var ge={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Fs(){Q.call(this,"d")}B(Fs,Q);function Vs(){Q.call(this,"c")}B(Vs,Q);var Us;function un(){}B(un,Ps);un.prototype.g=function(){return new XMLHttpRequest};un.prototype.i=function(){return{}};Us=new un;function me(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new fe(this),this.P=fu,e=ys?125:void 0,this.W=new on(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Zi}function Zi(){this.i=null,this.g="",this.h=!1}var fu=45e3,$s={},ln={};y=me.prototype;y.setTimeout=function(e){this.P=e};function qs(e,t,n){e.K=1,e.v=mn(ft(t)),e.s=n,e.U=!0,to(e,null)}function to(e,t){e.F=Date.now(),ye(e),e.A=ft(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),ho(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Zi,e.g=Oo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new au(j(e.Ia,e,e.g),e.O)),Hi(e.V,e.g,"readystatechange",e.gb),t=e.H?ki(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),de(1),cu(e.j,e.u,e.A,e.m,e.X,e.s)}y.gb=function(e){e=e.target;const t=this.L;t&&dt(e)==3?t.l():this.Ia(e)};y.Ia=function(e){try{if(e==this.g)t:{const h=dt(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||ys||this.g&&(this.h.h||this.g.ga()||To(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?de(3):de(2)),fn(this);var n=this.g.ba();this.N=n;e:if(eo(this)){var s=To(this.g);e="";var r=s.length,i=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){St(this),ve(this);var o="";break e}this.h.i=new w.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,hu(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tn(a)){var u=a;break e}}u=null}if(n=u)Ut(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,js(this,n);else{this.i=!1,this.o=3,tt(12),St(this),ve(this);break t}}this.U?(no(this,h,o),ys&&this.i&&h==3&&(Hi(this.V,this.W,"tick",this.fb),this.W.start())):(Ut(this.j,this.m,o,null),js(this,o)),h==4&&St(this),this.i&&!this.I&&(h==4?No(this.l,this):(this.i=!1,ye(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),St(this),ve(this)}}}catch{}finally{}};function eo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function no(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=du(e,n),r==ln){t==4&&(e.o=4,tt(14),s=!1),Ut(e.j,e.m,null,"[Incomplete Response]");break}else if(r==$s){e.o=4,tt(15),Ut(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Ut(e.j,e.m,r,null),js(e,r);eo(e)&&r!=ln&&r!=$s&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,tt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zs(t),t.L=!0,tt(11))):(Ut(e.j,e.m,n,"[Invalid Chunked Response]"),St(e),ve(e))}y.fb=function(){if(this.g){var e=dt(this.g),t=this.g.ga();this.C<t.length&&(fn(this),no(this,e,t),this.i&&e!=4&&ye(this))}};function du(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?ln:(n=Number(t.substring(n,s)),isNaN(n)?$s:(s+=1,s+n>t.length?ln:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,St(this)};function ye(e){e.Y=Date.now()+e.P,so(e,e.P)}function so(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=pe(j(e.eb,e),t)}function fn(e){e.B&&(w.clearTimeout(e.B),e.B=null)}y.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(uu(this.j,this.A),this.K!=2&&(de(3),tt(17)),St(this),this.o=2,ve(this)):so(this,this.Y-e)};function ve(e){e.l.G==0||e.I||No(e.l,e)}function St(e){fn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,xs(e.W),Ki(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function js(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ks(n.i,e))){if(n.I=e.N,!e.J&&Ks(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Tn(n),wn(n);else break t;Js(n),tt(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=pe(j(n.ab,n),6e3));if(1>=fo(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else bt(n,11)}else if((e.J||n.g==e)&&Tn(n),!tn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=e.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.i;!i.g&&(J(g,"spdy")||J(g,"quic")||J(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Gs(i,i.h),i.h=null))}if(s.D){const C=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.sa=C,x(s.F,s.D,C))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Lo(s,s.H?s.la:null,s.W),o.J){po(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(fn(a),ye(a)),s.g=o}else bo(s);0<n.l.length&&En(n)}else u[0]!="stop"&&u[0]!="close"||bt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?bt(n,7):Xs(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}de(4)}catch{}}function pu(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(ls(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Bs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ls(e)||typeof e=="string")Ii(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(ls(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=pu(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function $t(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof $t)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}y=$t.prototype;y.R=function(){Hs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};y.T=function(){return Hs(this),this.g.concat()};function Hs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];At(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],At(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}y.get=function(e,t){return At(this.h,e)?this.h[e]:t};y.set=function(e,t){At(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};y.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function At(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var ro=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function gu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ct(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ct){this.g=t!==void 0?t:e.g,dn(this,e.j),this.s=e.s,pn(this,e.i),gn(this,e.m),this.l=e.l,t=e.h;var n=new Ee;n.i=t.i,t.g&&(n.g=new $t(t.g),n.h=t.h),io(this,n),this.o=e.o}else e&&(n=String(e).match(ro))?(this.g=!!t,dn(this,n[1]||"",!0),this.s=_e(n[2]||""),pn(this,n[3]||"",!0),gn(this,n[4]),this.l=_e(n[5]||"",!0),io(this,n[6]||"",!0),this.o=_e(n[7]||"")):(this.g=!!t,this.h=new Ee(null,this.g))}Ct.prototype.toString=function(){var e=[],t=this.j;t&&e.push(we(t,oo,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(we(t,oo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(we(n,n.charAt(0)=="/"?wu:_u,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",we(n,Tu)),e.join("")};function ft(e){return new Ct(e)}function dn(e,t,n){e.j=n?_e(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pn(e,t,n){e.i=n?_e(t,!0):t}function gn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function io(e,t,n){t instanceof Ee?(e.h=t,Iu(e.h,e.g)):(n||(t=we(t,Eu)),e.h=new Ee(t,e.g))}function x(e,t,n){e.h.set(t,n)}function mn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function mu(e){return e instanceof Ct?ft(e):new Ct(e,void 0)}function yu(e,t,n,s){var r=new Ct(null,void 0);return e&&dn(r,e),t&&pn(r,t),n&&gn(r,n),s&&(r.l=s),r}function _e(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function we(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,vu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function vu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var oo=/[#\/\?@]/g,_u=/[#\?:]/g,wu=/[#\?]/g,Eu=/[#\?@]/g,Tu=/#/g;function Ee(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new $t,e.h=0,e.i&&gu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Ee.prototype;y.add=function(e,t){mt(this),this.i=null,e=qt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ao(e,t){mt(e),t=qt(e,t),At(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,At(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Hs(e)))}function co(e,t){return mt(e),t=qt(e,t),At(e.g.h,t)}y.forEach=function(e,t){mt(this),this.g.forEach(function(n,s){Ii(n,function(r){e.call(t,r,s,this)},this)},this)};y.T=function(){mt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};y.R=function(e){mt(this);var t=[];if(typeof e=="string")co(this,e)&&(t=Si(t,this.g.get(qt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Si(t,e[n])}return t};y.set=function(e,t){return mt(this),this.i=null,e=qt(this,e),co(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ho(e,t,n){ao(e,t),0<n.length&&(e.i=null,e.g.set(qt(e,t),ds(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function qt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Iu(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ao(this,s),ho(this,r,n))},e)),e.j=t}var Su=class{constructor(e,t){this.h=e,this.g=t}};function uo(e){this.l=e||Au,w.PerformanceNavigationTiming?(e=w.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(w.g&&w.g.Ea&&w.g.Ea()&&w.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Au=10;function lo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function fo(e){return e.h?1:e.g?e.g.size:0}function Ks(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Gs(e,t){e.g?e.g.add(t):e.h=t}function po(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}uo.prototype.cancel=function(){if(this.i=go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function go(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ds(e.i)}function zs(){}zs.prototype.stringify=function(e){return w.JSON.stringify(e,void 0)};zs.prototype.parse=function(e){return w.JSON.parse(e,void 0)};function Cu(){this.g=new zs}function bu(e,t,n){const s=n||"";try{Bs(e,function(r,i){let o=r;he(r)&&(o=Ds(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ku(e,t){const n=new an;if(w.Image){const s=new Image;s.onload=Ze(yn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ze(yn,n,s,"TestLoadImage: error",!1,t),s.onabort=Ze(yn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ze(yn,n,s,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function yn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Te(e){this.l=e.$b||null,this.j=e.ib||!1}B(Te,Ps);Te.prototype.g=function(){return new vn(this.l,this.j)};Te.prototype.i=function(e){return function(){return e}}({});function vn(e,t){$.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ws,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}B(vn,$);var Ws=0;y=vn.prototype;y.open=function(e,t){if(this.readyState!=Ws)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Se(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||w).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ie(this)),this.readyState=Ws};y.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Se(this)),this.g&&(this.readyState=3,Se(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof w.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function mo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}y.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ie(this):Se(this),this.readyState==3&&mo(this)}};y.Ua=function(e){this.g&&(this.response=this.responseText=e,Ie(this))};y.Ta=function(e){this.g&&(this.response=e,Ie(this))};y.ha=function(){this.g&&Ie(this)};function Ie(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Se(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Se(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Nu=w.JSON.parse;function F(e){$.call(this),this.headers=new $t,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=yo,this.K=this.L=!1}B(F,$);var yo="",Du=/^https?$/i,Ru=["POST","PUT"];y=F.prototype;y.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Us.g(),this.C=this.u?Yi(this.u):Yi(Us),this.g.onreadystatechange=j(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){vo(this,i);return}e=n||"";const r=new $t(this.headers);s&&Bs(s,function(i,o){r.set(o,i)}),s=jh(r.T()),n=w.FormData&&e instanceof w.FormData,!(0<=Ti(Ru,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Eo(this),0<this.B&&((this.K=Lu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=j(this.pa,this)):this.A=Ms(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){vo(this,i)}};function Lu(e){return Vt&&zh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Ou(e){return e.toLowerCase()=="content-type"}y.pa=function(){typeof us!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function vo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,_o(e),_n(e)}function _o(e){e.D||(e.D=!0,H(e,"complete"),H(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,H(this,"complete"),H(this,"abort"),_n(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_n(this,!0)),F.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?wo(this):this.cb())};y.cb=function(){wo(this)};function wo(e){if(e.h&&typeof us!="undefined"&&(!e.C[1]||dt(e)!=4||e.ba()!=2)){if(e.v&&dt(e)==4)Ms(e.Fa,0,e);else if(H(e,"readystatechange"),dt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(ro)[1]||null;if(!r&&w.self&&w.self.location){var i=w.self.location.protocol;r=i.substr(0,i.length-1)}s=!Du.test(r?r.toLowerCase():"")}n=s}if(n)H(e,"complete"),H(e,"success");else{e.m=6;try{var o=2<dt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",_o(e)}}finally{_n(e)}}}}function _n(e,t){if(e.g){Eo(e);const n=e.g,s=e.C[0]?Je:null;e.g=null,e.C=null,t||H(e,"ready");try{n.onreadystatechange=s}catch{}}}function Eo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(w.clearTimeout(e.A),e.A=null)}function dt(e){return e.g?e.g.readyState:0}y.ba=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Nu(t)}};function To(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case yo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function xu(e){let t="";return gs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Qs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=xu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function Ae(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Io(e){this.za=0,this.l=[],this.h=new an,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ae("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ae("baseRetryDelayMs",5e3,e),this.$a=Ae("retryDelaySeedMs",1e4,e),this.Ya=Ae("forwardChannelMaxRetries",2,e),this.ra=Ae("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new uo(e&&e.concurrentRequestLimit),this.Ca=new Cu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}y=Io.prototype;y.ma=8;y.G=1;function Xs(e){if(So(e),e.G==3){var t=e.V++,n=ft(e.F);x(n,"SID",e.J),x(n,"RID",t),x(n,"TYPE","terminate"),Ce(e,n),t=new me(e,e.h,t,void 0),t.K=2,t.v=mn(ft(n)),n=!1,w.navigator&&w.navigator.sendBeacon&&(n=w.navigator.sendBeacon(t.v.toString(),"")),!n&&w.Image&&(new Image().src=t.v,n=!0),n||(t.g=Oo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ye(t)}Ro(e)}y.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function wn(e){e.g&&(Zs(e),e.g.cancel(),e.g=null)}function So(e){wn(e),e.u&&(w.clearTimeout(e.u),e.u=null),Tn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&w.clearTimeout(e.m),e.m=null)}function Ys(e,t){e.l.push(new Su(e.Za++,t)),e.G==3&&En(e)}function En(e){lo(e.i)||e.m||(e.m=!0,Rs(e.Ha,e),e.C=0)}function Mu(e,t){return fo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=pe(j(e.Ha,e,t),Do(e,e.C)),e.C++,!0)}y.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new me(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=ki(i),Di(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Co(this,r,t),n=ft(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),Ce(this,n),this.o&&i&&Qs(n,this.o,i),Gs(this.i,r),this.Ra&&x(n,"TYPE","init"),this.ja?(x(n,"$req",t),x(n,"SID","null"),r.$=!0,qs(r,n,null)):qs(r,n,t),this.G=2}}else this.G==3&&(e?Ao(this,e):this.l.length==0||lo(this.i)||Ao(this))};function Ao(e,t){var n;t?n=t.m:n=e.V++;const s=ft(e.F);x(s,"SID",e.J),x(s,"RID",n),x(s,"AID",e.U),Ce(e,s),e.o&&e.s&&Qs(s,e.o,e.s),n=new me(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Co(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Gs(e.i,n),qs(n,s,t)}function Ce(e,t){e.j&&Bs({},function(n,s){x(t,s,n)})}function Co(e,t,n){n=Math.min(e.l.length,n);var s=e.j?j(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{bu(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function bo(e){e.g||e.u||(e.Y=1,Rs(e.Ga,e),e.A=0)}function Js(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=pe(j(e.Ga,e),Do(e,e.A)),e.A++,!0)}y.Ga=function(){if(this.u=null,ko(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pe(j(this.bb,this),e)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,tt(10),wn(this),ko(this))};function Zs(e){e.B!=null&&(w.clearTimeout(e.B),e.B=null)}function ko(e){e.g=new me(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ft(e.oa);x(t,"RID","rpc"),x(t,"SID",e.J),x(t,"CI",e.N?"0":"1"),x(t,"AID",e.U),Ce(e,t),x(t,"TYPE","xmlhttp"),e.o&&e.s&&Qs(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=mn(ft(t)),n.s=null,n.U=!0,to(n,e)}y.ab=function(){this.v!=null&&(this.v=null,wn(this),Js(this),tt(19))};function Tn(e){e.v!=null&&(w.clearTimeout(e.v),e.v=null)}function No(e,t){var n=null;if(e.g==t){Tn(e),Zs(e),e.g=null;var s=2}else if(Ks(e.i,t))n=t.D,po(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=cn(),H(s,new Qi(s,n,t,r)),En(e)}else bo(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&Mu(e,t)||s==2&&Js(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:bt(e,5);break;case 4:bt(e,10);break;case 3:bt(e,6);break;default:bt(e,2)}}}function Do(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function bt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=j(e.jb,e);n||(n=new Ct("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||dn(n,"https"),mn(n)),ku(n.toString(),s)}else tt(2);e.G=0,e.j&&e.j.va(t),Ro(e),So(e)}y.jb=function(e){e?(this.h.info("Successfully pinged google.com"),tt(2)):(this.h.info("Failed to ping google.com"),tt(1))};function Ro(e){e.G=0,e.I=-1,e.j&&((go(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ds(e.l),e.l.length=0),e.j.ua())}function Lo(e,t,n){let s=mu(n);if(s.i!="")t&&pn(s,t+"."+s.i),gn(s,s.m);else{const r=w.location;s=yu(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&gs(e.aa,function(r,i){x(s,i,r)}),t=e.D,n=e.sa,t&&n&&x(s,t,n),x(s,"VER",e.ma),Ce(e,s),s}function Oo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new F(new Te({ib:!0})):new F(e.qa),t.L=e.H,t}function xo(){}y=xo.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function In(){if(Vt&&!(10<=Number(Wh)))throw Error("Environmental error: no available transport.")}In.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){$.call(this),this.g=new Io(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!tn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!tn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new jt(this)}B(rt,$);rt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Rs(j(e.hb,e,t))),tt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Lo(e,null,e.W),En(e)};rt.prototype.close=function(){Xs(this.g)};rt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Ys(this.g,t)}else this.v?(t={},t.__data__=Ds(e),Ys(this.g,t)):Ys(this.g,e)};rt.prototype.M=function(){this.g.j=null,delete this.j,Xs(this.g),delete this.g,rt.Z.M.call(this)};function Mo(e){Fs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}B(Mo,Fs);function Po(){Vs.call(this),this.status=1}B(Po,Vs);function jt(e){this.g=e}B(jt,xo);jt.prototype.xa=function(){H(this.g,"a")};jt.prototype.wa=function(e){H(this.g,new Mo(e))};jt.prototype.va=function(e){H(this.g,new Po(e))};jt.prototype.ua=function(){H(this.g,"b")};In.prototype.createWebChannel=In.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;hn.NO_ERROR=0;hn.TIMEOUT=8;hn.HTTP_ERROR=6;Xi.COMPLETE="complete";Ji.EventType=ge;ge.OPEN="a";ge.CLOSE="b";ge.ERROR="c";ge.MESSAGE="d";$.prototype.listen=$.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var Pu=function(){return new In},Fu=function(){return cn()},tr=hn,Vu=Xi,Uu=It,Fo={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},$u=Te,Sn=Ji,qu=F;const Vo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt="9.6.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new _i("@firebase/firestore");function Uo(){return kt.logLevel}function v(e,...t){if(kt.logLevel<=N.DEBUG){const n=t.map(er);kt.debug(`Firestore (${Bt}): ${e}`,...n)}}function yt(e,...t){if(kt.logLevel<=N.ERROR){const n=t.map(er);kt.error(`Firestore (${Bt}): ${e}`,...n)}}function $o(e,...t){if(kt.logLevel<=N.WARN){const n=t.map(er);kt.warn(`Firestore (${Bt}): ${e}`,...n)}}function er(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${Bt}) INTERNAL ASSERTION FAILED: `+e;throw yt(t),new Error(t)}function L(e,t){e||T()}function I(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends We{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Hu{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new ju(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new et(t)}}class Ku{constructor(t,n,s){this.type="FirstParty",this.user=et.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Gu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ku(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,n){this.o=r=>{t.enqueueRetryable(()=>(i=>(i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(r))};const s=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),new zu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.p(s),this.T=s=>n.writeSequenceNumber(s))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr.I=-1;class qo{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Qu(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function D(e,t){return e<t?-1:e>t?1:0}function Ht(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new it(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new it(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Kt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Bo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return be.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof be?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends be{construct(t,n,s){return new M(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Xu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends be{construct(t,n,s){return new nt(t,n,s)}static isValidIdentifier(t){return Xu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this.fields=t,t.sort(nt.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ht(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new K(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new K(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}K.EMPTY_BYTE_STRING=new K("");const Yu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(e){if(L(!!e),typeof e=="string"){let t=0;const n=Yu.exec(e);if(L(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Gt(e){return typeof e=="string"?K.fromBase64String(e):K.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ko(e){const t=e.mapValue.fields.__previous_value__;return Ho(t)?Ko(t):t}function ke(e){const t=vt(e.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return e==null}function An(e){return e===0&&1/e==-1/0}function Ju(e){return typeof e=="number"&&Number.isInteger(e)&&!An(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(M.fromString(t))}static fromName(t){return new E(M.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new M(t.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ho(e)?4:10:T()}function ut(e,t){if(e===t)return!0;const n=Dt(e);if(n!==Dt(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ke(e).isEqual(ke(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=vt(s.timestampValue),o=vt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Gt(s.bytesValue).isEqual(Gt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return V(s.geoPointValue.latitude)===V(r.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return V(s.integerValue)===V(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=V(s.doubleValue),o=V(r.doubleValue);return i===o?An(i)===An(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Ht(e.arrayValue.values||[],t.arrayValue.values||[],ut);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(jo(i)!==jo(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ut(i[a],o[a])))return!1;return!0}(e,t);default:return T()}}function Ne(e,t){return(e.values||[]).find(n=>ut(n,t))!==void 0}function Wt(e,t){if(e===t)return 0;const n=Dt(e),s=Dt(t);if(n!==s)return D(n,s);switch(n){case 0:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=V(r.integerValue||r.doubleValue),a=V(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Go(e.timestampValue,t.timestampValue);case 4:return Go(ke(e),ke(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Gt(r),a=Gt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=D(V(r.latitude),V(i.latitude));return o!==0?o:D(V(r.longitude),V(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Wt(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=D(a[h],u[h]);if(l!==0)return l;const f=Wt(o[a[h]],c[u[h]]);if(f!==0)return f}return D(a.length,u.length)}(e.mapValue,t.mapValue);default:throw T()}}function Go(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=vt(e),s=vt(t),r=D(n.seconds,s.seconds);return r!==0?r:D(n.nanos,s.nanos)}function rr(e){return ir(e)}function ir(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=vt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Gt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ir(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ir(s.fields[a])}`;return i+"}"}(e.mapValue):T();var t,n}function or(e){return!!e&&"integerValue"in e}function ar(e){return!!e&&"arrayValue"in e}function zo(e){return!!e&&"nullValue"in e}function Wo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Cn(e){return!!e&&"mapValue"in e}function De(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Kt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=De(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=De(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.value=t}static empty(){return new ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Cn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=De(n)}setAll(t){let n=nt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=De(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Cn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Cn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Kt(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new ct(De(this.value))}}function Qo(e){const t=[];return Kt(e.fields,(n,s)=>{const r=new nt([n]);if(Cn(s)){const i=Qo(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new sr(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,n,s,r,i){this.key=t,this.documentType=n,this.version=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new X(t,0,k.min(),ct.empty(),0)}static newFoundDocument(t,n,s){return new X(t,1,n,s,0)}static newNoDocument(t,n){return new X(t,2,n,ct.empty(),0)}static newUnknownDocument(t,n){return new X(t,3,n,ct.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof X&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function Xo(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Zu(e,t,n,s,r,i,o)}function cr(e){const t=I(e);if(t.R===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>el(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),zt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=bn(t.startAt)),t.endAt&&(n+="|ub:",n+=bn(t.endAt)),t.R=n}return t.R}function tl(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${rr(s.value)}`;var s}).join(", ")}]`),zt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: "+bn(e.startAt)),e.endAt&&(t+=", endAt: "+bn(e.endAt)),`Target(${t})`}function hr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!hl(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ut(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Zo(e.startAt,t.startAt)&&Zo(e.endAt,t.endAt)}function ur(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class st extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.P(t,n,s):new nl(t,n,s):n==="array-contains"?new il(t,s):n==="in"?new ol(t,s):n==="not-in"?new al(t,s):n==="array-contains-any"?new cl(t,s):new st(t,n,s)}static P(t,n,s){return n==="in"?new sl(t,s):new rl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Wt(n,this.value)):n!==null&&Dt(this.value)===Dt(n)&&this.v(Wt(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function el(e){return e.field.canonicalString()+e.op.toString()+rr(e.value)}class nl extends st{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class sl extends st{constructor(t,n){super(t,"in",n),this.keys=Yo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class rl extends st{constructor(t,n){super(t,"not-in",n),this.keys=Yo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Yo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class il extends st{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ar(n)&&Ne(n.arrayValue,this.value)}}class ol extends st{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ne(this.value.arrayValue,n)}}class al extends st{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ne(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ne(this.value.arrayValue,n)}}class cl extends st{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ar(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ne(this.value.arrayValue,s))}}class lr{constructor(t,n){this.position=t,this.before=n}}function bn(e){return`${e.before?"b":"a"}:${e.position.map(t=>rr(t)).join(",")}`}class Re{constructor(t,n="asc"){this.field=t,this.dir=n}}function hl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Jo(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Wt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return e.before?s<=0:s<0}function Zo(e,t){if(e===null)return t===null;if(t===null||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ut(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function ul(e,t,n,s,r,i,o,a){return new kn(e,t,n,s,r,i,o,a)}function fr(e){return new kn(e)}function Nn(e){return!zt(e.limit)&&e.limitType==="F"}function Dn(e){return!zt(e.limit)&&e.limitType==="L"}function ll(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function fl(e){for(const t of e.filters)if(t.V())return t.field;return null}function dl(e){return e.collectionGroup!==null}function Le(e){const t=I(e);if(t.S===null){t.S=[];const n=fl(t),s=ll(t);if(n!==null&&s===null)n.isKeyField()||t.S.push(new Re(n)),t.S.push(new Re(nt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.S.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Re(nt.keyField(),i))}}}return t.S}function Rt(e){const t=I(e);if(!t.D)if(t.limitType==="F")t.D=Xo(t.path,t.collectionGroup,Le(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Le(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Re(i.field,o))}const s=t.endAt?new lr(t.endAt.position,!t.endAt.before):null,r=t.startAt?new lr(t.startAt.position,!t.startAt.before):null;t.D=Xo(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.D}function pl(e,t,n){return new kn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Rn(e,t){return hr(Rt(e),Rt(t))&&e.limitType===t.limitType}function ta(e){return`${cr(Rt(e))}|lt:${e.limitType}`}function dr(e){return`Query(target=${tl(Rt(e))}; limitType=${e.limitType})`}function Ln(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):E.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!Jo(n.startAt,Le(n),s)||n.endAt&&Jo(n.endAt,Le(n),s))}(e,t)}function ea(e){return(t,n)=>{let s=!1;for(const r of Le(e)){const i=gl(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function gl(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Wt(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:An(t)?"-0":t}}function sa(e){return{integerValue:""+e}}function ml(e,t){return Ju(t)?sa(t):na(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this._=void 0}}function yl(e,t,n){return e instanceof xn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Oe?ia(e,t):e instanceof xe?oa(e,t):function(s,r){const i=ra(s,r),o=aa(i)+aa(s.N);return or(i)&&or(s.N)?sa(o):na(s.k,o)}(e,t)}function vl(e,t,n){return e instanceof Oe?ia(e,t):e instanceof xe?oa(e,t):n}function ra(e,t){return e instanceof Mn?or(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class xn extends On{}class Oe extends On{constructor(t){super(),this.elements=t}}function ia(e,t){const n=ca(t);for(const s of e.elements)n.some(r=>ut(r,s))||n.push(s);return{arrayValue:{values:n}}}class xe extends On{constructor(t){super(),this.elements=t}}function oa(e,t){let n=ca(t);for(const s of e.elements)n=n.filter(r=>!ut(r,s));return{arrayValue:{values:n}}}class Mn extends On{constructor(t,n){super(),this.k=t,this.N=n}}function aa(e){return V(e.integerValue||e.doubleValue)}function ca(e){return ar(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function _l(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Oe&&s instanceof Oe||n instanceof xe&&s instanceof xe?Ht(n.elements,s.elements,ut):n instanceof Mn&&s instanceof Mn?ut(n.N,s.N):n instanceof xn&&s instanceof xn}(e.transform,t.transform)}class wl{constructor(t,n){this.version=t,this.transformResults=n}}class Qt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Qt}static exists(t){return new Qt(void 0,t)}static updateTime(t){return new Qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Fn{}function El(e,t,n){e instanceof Vn?function(s,r,i){const o=s.value.clone(),a=fa(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Xt?function(s,r,i){if(!Pn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=fa(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(la(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function pr(e,t,n){e instanceof Vn?function(s,r,i){if(!Pn(s.precondition,r))return;const o=s.value.clone(),a=da(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(ua(r),o).setHasLocalMutations()}(e,t,n):e instanceof Xt?function(s,r,i){if(!Pn(s.precondition,r))return;const o=da(s.fieldTransforms,i,r),a=r.data;a.setAll(la(s)),a.setAll(o),r.convertToFoundDocument(ua(r),a).setHasLocalMutations()}(e,t,n):function(s,r){Pn(s.precondition,r)&&r.convertToNoDocument(k.min())}(e,t)}function Tl(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=ra(s.transform,r||null);i!=null&&(n==null&&(n=ct.empty()),n.set(s.field,i))}return n||null}function ha(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ht(n,s,(r,i)=>_l(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function ua(e){return e.isFoundDocument()?e.version:k.min()}class Vn extends Fn{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Xt extends Fn{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function la(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function fa(e,t,n){const s=new Map;L(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,vl(o,a,n[r]))}return s}function da(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,yl(i,o,t))}return s}class Il extends Fn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Sl extends Fn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U,b;function Cl(e){switch(e){default:return T();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function pa(e){if(e===void 0)return yt("GRPC error has no .code"),p.UNKNOWN;switch(e){case U.OK:return p.OK;case U.CANCELLED:return p.CANCELLED;case U.UNKNOWN:return p.UNKNOWN;case U.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case U.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case U.INTERNAL:return p.INTERNAL;case U.UNAVAILABLE:return p.UNAVAILABLE;case U.UNAUTHENTICATED:return p.UNAUTHENTICATED;case U.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case U.NOT_FOUND:return p.NOT_FOUND;case U.ALREADY_EXISTS:return p.ALREADY_EXISTS;case U.PERMISSION_DENIED:return p.PERMISSION_DENIED;case U.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case U.ABORTED:return p.ABORTED;case U.OUT_OF_RANGE:return p.OUT_OF_RANGE;case U.UNIMPLEMENTED:return p.UNIMPLEMENTED;case U.DATA_LOSS:return p.DATA_LOSS;default:return T()}}(b=U||(U={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new Y(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Un(this.root,t,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Un(this.root,t,this.comparator,!0)}}class Un{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:G.RED,this.left=r!=null?r:G.EMPTY,this.right=i!=null?i:G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new G(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return G.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,r){return this}insert(e,t,n){return new G(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ga(this.data.getIterator())}getIteratorFrom(t){return new ga(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof z)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new z(this.comparator);return n.data=t,n}}class ga{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new Y(E.comparator);function Lt(){return bl}const kl=new Y(E.comparator);function gr(){return kl}const Nl=new Y(E.comparator);function Dl(){return Nl}const Rl=new z(E.comparator);function O(...e){let t=Rl;for(const n of e)t=t.add(n);return t}const Ll=new z(D);function ma(){return Ll}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Me.createSynthesizedTargetChangeForCurrentChange(t,n)),new $n(k.min(),s,ma(),Lt(),O())}}class Me{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Me(K.EMPTY_BYTE_STRING,n,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n,s,r){this.$=t,this.removedTargetIds=n,this.key=s,this.O=r}}class ya{constructor(t,n){this.targetId=t,this.M=n}}class va{constructor(t,n,s=K.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _a{constructor(){this.F=0,this.L=Ea(),this.B=K.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=O(),n=O(),s=O();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:T()}}),new Me(this.B,this.U,t,n,s)}H(){this.q=!1,this.L=Ea()}J(t,n){this.q=!0,this.L=this.L.insert(t,n)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class Ol{constructor(t){this.et=t,this.nt=new Map,this.st=Lt(),this.it=wa(),this.rt=new z(D)}ot(t){for(const n of t.$)t.O&&t.O.isFoundDocument()?this.ct(n,t.O):this.at(n,t.key,t.O);for(const n of t.removedTargetIds)this.at(n,t.key,t.O)}ut(t){this.forEachTarget(t,n=>{const s=this.ht(n);switch(t.state){case 0:this.lt(n)&&s.W(t.resumeToken);break;case 1:s.Z(),s.K||s.H(),s.W(t.resumeToken);break;case 2:s.Z(),s.K||this.removeTarget(n);break;case 3:this.lt(n)&&(s.tt(),s.W(t.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),s.W(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.nt.forEach((s,r)=>{this.lt(r)&&n(r)})}dt(t){const n=t.targetId,s=t.M.count,r=this.wt(n);if(r){const i=r.target;if(ur(i))if(s===0){const o=new E(i.path);this.at(n,o,X.newNoDocument(o,k.min()))}else L(s===1);else this._t(n)!==s&&(this.ft(n),this.rt=this.rt.add(n))}}gt(t){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ur(a.target)){const c=new E(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,X.newNoDocument(c,t))}i.j&&(n.set(o,i.G()),i.H())}});let s=O();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))});const r=new $n(t,n,this.rt,this.st,s);return this.st=Lt(),this.it=wa(),this.rt=new z(D),r}ct(t,n){if(!this.lt(t))return;const s=this.yt(t,n.key)?2:0;this.ht(t).J(n.key,s),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(t))}at(t,n,s){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,n)?r.J(n,1):r.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(t)),s&&(this.st=this.st.insert(n,s))}removeTarget(t){this.nt.delete(t)}_t(t){const n=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let n=this.nt.get(t);return n||(n=new _a,this.nt.set(t,n)),n}Tt(t){let n=this.it.get(t);return n||(n=new z(D),this.it=this.it.insert(t,n)),n}lt(t){const n=this.wt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.nt.get(t);return n&&n.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new _a),this.et.getRemoteKeysForTarget(t).forEach(n=>{this.at(t,n,null)})}yt(t,n){return this.et.getRemoteKeysForTarget(t).has(n)}}function wa(){return new Y(E.comparator)}function Ea(){return new Y(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ml=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Pl{constructor(t,n){this.databaseId=t,this.C=n}}function jn(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ta(e,t){return e.C?t.toBase64():t.toUint8Array()}function Fl(e,t){return jn(e,t.toTimestamp())}function pt(e){return L(!!e),k.fromTimestamp(function(t){const n=vt(t);return new it(n.seconds,n.nanos)}(e))}function mr(e,t){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Ia(e){const t=M.fromString(e);return L(Na(t)),t}function yr(e,t){return mr(e.databaseId,t.path)}function vr(e,t){const n=Ia(t);if(n.get(1)!==e.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Sa(n))}function _r(e,t){return mr(e.databaseId,t)}function Vl(e){const t=Ia(e);return t.length===4?M.emptyPath():Sa(t)}function wr(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Sa(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Aa(e,t,n){return{name:yr(e,t),fields:n.value.mapValue.fields}}function Ul(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.C?(L(u===void 0||typeof u=="string"),K.fromBase64String(u||"")):(L(u===void 0||u instanceof Uint8Array),K.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:pa(c.code);return new _(u,c.message||"")}(o);n=new va(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=vr(e,s.document.name),i=pt(s.document.updateTime),o=new ct({mapValue:{fields:s.document.fields}}),a=X.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new qn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=vr(e,s.document),i=s.readTime?pt(s.readTime):k.min(),o=X.newNoDocument(r,i),a=s.removedTargetIds||[];n=new qn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=vr(e,s.document),i=s.removedTargetIds||[];n=new qn([],i,r,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Al(r),o=s.targetId;n=new ya(o,i)}}return n}function $l(e,t){let n;if(t instanceof Vn)n={update:Aa(e,t.key,t.value)};else if(t instanceof Il)n={delete:yr(e,t.key)};else if(t instanceof Xt)n={update:Aa(e,t.key,t.data),updateMask:Xl(t.fieldMask)};else{if(!(t instanceof Sl))return T();n={verify:yr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof xn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Oe)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xe)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Mn)return{fieldPath:i.field.canonicalString(),increment:o.N};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Fl(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(e,t.precondition)),n}function ql(e,t){return e&&e.length>0?(L(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?pt(s.updateTime):pt(r);return i.isEqual(k.min())&&(i=pt(r)),new wl(i,s.transformResults||[])}(n,t))):[]}function jl(e,t){return{documents:[_r(e,t.path)]}}function Bl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=_r(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=_r(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(a){if(a.length===0)return;const c=a.map(u=>function(h){if(h.op==="=="){if(Wo(h.value))return{unaryFilter:{field:Yt(h.field),op:"IS_NAN"}};if(zo(h.value))return{unaryFilter:{field:Yt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Wo(h.value))return{unaryFilter:{field:Yt(h.field),op:"IS_NOT_NAN"}};if(zo(h.value))return{unaryFilter:{field:Yt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(h.field),op:zl(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:Yt(u.field),direction:Gl(u.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||zt(c)?c:{value:c}}(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=ba(t.startAt)),t.endAt&&(n.structuredQuery.endAt=ba(t.endAt)),n}function Hl(e){let t=Vl(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){L(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=Ca(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Re(Jt(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,zt(l)?null:l}(n.limit));let c=null;n.startAt&&(c=ka(n.startAt));let u=null;return n.endAt&&(u=ka(n.endAt)),ul(t,r,o,i,a,"F",c,u)}function Kl(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ca(e){return e?e.unaryFilter!==void 0?[Ql(e)]:e.fieldFilter!==void 0?[Wl(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Ca(t)).reduce((t,n)=>t.concat(n)):T():[]}function ba(e){return{before:e.before,values:e.position}}function ka(e){const t=!!e.before,n=e.values||[];return new lr(n,t)}function Gl(e){return xl[e]}function zl(e){return Ml[e]}function Yt(e){return{fieldPath:e.canonicalString()}}function Jt(e){return nt.fromServerFormat(e.fieldPath)}function Wl(e){return st.create(Jt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}function Ql(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Jt(e.unaryFilter.field);return st.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Jt(e.unaryFilter.field);return st.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jt(e.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Jt(e.unaryFilter.field);return st.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function Xl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Na(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}const Yl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,s)=>{n(t)})}static reject(t){return new m((n,s)=>{s(t)})}static waitFor(t){return new m((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=m.resolve(!1);for(const s of t)n=n.next(r=>r?m.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Pe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&El(i,t,s[r])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&pr(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&pr(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(k.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),O())}isEqual(t){return this.batchId===t.batchId&&Ht(this.mutations,t.mutations,(n,s)=>ha(n,s))&&Ht(this.baseMutations,t.baseMutations,(n,s)=>ha(n,s))}}class Er{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){L(t.mutations.length===s.length);let r=Dl();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Er(t,n,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,n,s,r,i=k.min(),o=k.min(),a=K.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Ot(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.Gt=t}}function ef(e){const t=Hl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?pl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.zt=new sf}addToCollectionParentIndex(t,n){return this.zt.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.zt.getEntries(n))}}class sf{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new z(M.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new z(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Zt(0)}static re(){return new Zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Yl)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n])}else this.inner[s]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(t){Kt(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Bo(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.changes=new Ve(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:k.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:X.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?m.resolve(s.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,n,s){this.Je=t,this.An=n,this.Jt=s}Rn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.bn(t,n,s))}bn(t,n,s){return this.Je.getEntry(t,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Pn(t,n){t.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}vn(t,n){return this.Je.getEntries(t,n).next(s=>this.Vn(t,s).next(()=>s))}Vn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Pn(n,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return E.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Sn(t,n.path):dl(n)?this.Dn(t,n,s):this.Cn(t,n,s)}Sn(t,n){return this.Rn(t,new E(n)).next(s=>{let r=gr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Dn(t,n,s){const r=n.collectionGroup;let i=gr();return this.Jt.getCollectionParents(t,r).next(o=>m.forEach(o,a=>{const c=function(u,h){return new kn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.Cn(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}Cn(t,n,s){let r,i;return this.Je.getDocumentsMatchingQuery(t,n,s).next(o=>(r=o,this.An.getAllMutationBatchesAffectingQuery(t,n))).next(o=>(i=o,this.Nn(t,i,r).next(a=>{r=a;for(const c of i)for(const u of c.mutations){const h=u.key;let l=r.get(h);l==null&&(l=X.newInvalidDocument(h),r=r.insert(h,l)),pr(u,l,c.localWriteTime),l.isFoundDocument()||(r=r.remove(h))}}))).next(()=>(r.forEach((o,a)=>{Ln(n,a)||(r=r.remove(o))}),r))}Nn(t,n,s){let r=O();for(const o of n)for(const a of o.mutations)a instanceof Xt&&s.get(a.key)===null&&(r=r.add(a.key));let i=s;return this.Je.getEntries(t,r).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.kn=s,this.xn=r}static $n(t,n){let s=O(),r=O();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{On(t){this.Mn=t}getDocumentsMatchingQuery(t,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(k.min())?this.Fn(t,n):this.Mn.vn(t,r).next(i=>{const o=this.Ln(n,i);return(Nn(n)||Dn(n))&&this.Bn(n.limitType,o,r,s)?this.Fn(t,n):(Uo()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dr(n)),this.Mn.getDocumentsMatchingQuery(t,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(t,n){let s=new z(ea(t));return n.forEach((r,i)=>{Ln(t,i)&&(s=s.add(i))}),s}Bn(t,n,s,r){if(s.size!==n.size)return!0;const i=t==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,n){return Uo()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",dr(n)),this.Mn.getDocumentsMatchingQuery(t,n,k.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n,s,r){this.persistence=t,this.Un=n,this.k=r,this.qn=new Y(D),this.Kn=new Ve(i=>cr(i),hr),this.jn=k.min(),this.An=t.getMutationQueue(s),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Da(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qn))}}function cf(e,t,n,s){return new af(e,t,n,s)}async function Ra(e,t){const n=I(e);let s=n.An,r=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(t),r=new Da(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const u=[],h=[];let l=O();for(const f of a){u.push(f.batchId);for(const d of f.mutations)l=l.add(d.key)}for(const f of c){h.push(f.batchId);for(const d of f.mutations)l=l.add(d.key)}return r.vn(o,l).next(f=>({Gn:f,removedBatchIds:u,addedBatchIds:h}))})});return n.An=s,n.Wn=r,n.Un.On(n.Wn),i}function hf(e,t){const n=I(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let f=m.resolve();return l.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(g=>{const C=c.docVersions.get(d);L(C!==null),g.version.compareTo(C)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&u.addEntry(g,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.An.performConsistencyCheck(s)).next(()=>n.Wn.vn(s,r))})}function La(e){const t=I(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.He.getLastRemoteSnapshotVersion(n))}function uf(e,t){const n=I(e),s=t.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const a=[];t.targetChanges.forEach((u,h)=>{const l=r.get(h);if(!l)return;a.push(n.He.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.He.addMatchingKeys(i,u.addedDocuments,h)));let f=l.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?f=f.withResumeToken(K.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(d,g,C){return d.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(l,f,u)&&a.push(n.He.updateTargetData(i,f))});let c=Lt();if(t.documentUpdates.forEach((u,h)=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(lf(i,o,t.documentUpdates,s,void 0).next(u=>{c=u})),!s.isEqual(k.min())){const u=n.He.getLastRemoteSnapshotVersion(i).next(h=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=r,i))}function lf(e,t,n,s,r){let i=O();return n.forEach(o=>i=i.add(o)),t.getEntries(e,i).next(o=>{let a=Lt();return n.forEach((c,u)=>{const h=o.get(c),l=(r==null?void 0:r.get(c))||s;u.isNoDocument()&&u.version.isEqual(k.min())?(t.removeEntry(c,l),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u,l),a=a.insert(c,u)):v("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),a})}function ff(e,t){const n=I(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.An.getNextMutationBatchAfterBatchId(s,t)))}function df(e,t){const n=I(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.He.getTargetData(s,t).next(i=>i?(r=i,m.resolve(r)):n.He.allocateTargetId(s).next(o=>(r=new Ot(t,o,0,s.currentSequenceNumber),n.He.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qn.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(s.targetId,s),n.Kn.set(t,s.targetId)),s})}async function Ir(e,t,n){const s=I(e),r=s.qn.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Pe(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qn=s.qn.remove(t),s.Kn.delete(r.target)}function Oa(e,t,n){const s=I(e);let r=k.min(),i=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=I(a),l=h.Kn.get(u);return l!==void 0?m.resolve(h.qn.get(l)):h.He.getTargetData(c,u)}(s,o,Rt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Un.getDocumentsMatchingQuery(o,t,n?r:k.min(),n?i:O())).next(a=>({documents:a,zn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,n){return m.resolve(this.Xn.get(n))}saveBundleMetadata(t,n){var s;return this.Xn.set(n.id,{id:(s=n).id,version:s.version,createTime:pt(s.createTime)}),m.resolve()}getNamedQuery(t,n){return m.resolve(this.Zn.get(n))}saveNamedQuery(t,n){return this.Zn.set(n.name,function(s){return{name:s.name,query:ef(s.bundledQuery),readTime:pt(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.ts=new z(q.es),this.ns=new z(q.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,n){const s=new q(t,n);this.ts=this.ts.add(s),this.ns=this.ns.add(s)}rs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.os(new q(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new E(new M([])),s=new q(n,t),r=new q(n,t+1),i=[];return this.ns.forEachInRange([s,r],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const n=new E(new M([])),s=new q(n,t),r=new q(n,t+1);let i=O();return this.ns.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new q(t,0),s=this.ts.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class q{constructor(t,n){this.key=t,this.fs=n}static es(t,n){return E.comparator(t.key,n.key)||D(t.fs,n.fs)}static ss(t,n){return D(t.fs,n.fs)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,n){this.Jt=t,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new z(q.es)}checkEmpty(t){return m.resolve(this.An.length===0)}addMutationBatch(t,n,s,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Zl(i,n,s,r);this.An.push(o);for(const a of r)this.ws=this.ws.add(new q(a.key,i)),this.Jt.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.gs(s),i=r<0?0:r;return m.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(t){return m.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new q(n,0),r=new q(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([s,r],o=>{const a=this._s(o.fs);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new z(D);return n.forEach(r=>{const i=new q(r,0),o=new q(r,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{s=s.add(a.fs)})}),m.resolve(this.ys(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;E.isDocumentKey(i)||(i=i.child(""));const o=new q(new E(i),0);let a=new z(D);return this.ws.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.fs)),!0)},o),m.resolve(this.ys(a))}ys(t){const n=[];return t.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){L(this.ps(n.batchId,"removed")===0),this.An.shift();let s=this.ws;return m.forEach(n.mutations,r=>{const i=new q(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=s})}ee(t){}containsKey(t,n){const s=new q(n,0),r=this.ws.firstAfterOrEqual(s);return m.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,m.resolve()}ps(t,n){return this.gs(t)}gs(t){return this.An.length===0?0:t-this.An[0].batchId}_s(t){const n=this.gs(t);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n){this.Jt=t,this.Ts=n,this.docs=new Y(E.comparator),this.size=0}addEntry(t,n,s){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a,readTime:s}),this.size+=a-o,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return m.resolve(s?s.document.mutableCopy():X.newInvalidDocument(n))}getEntries(t,n){let s=Lt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():X.newInvalidDocument(r))}),m.resolve(s)}getDocumentsMatchingQuery(t,n,s){let r=Lt();const i=new E(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(s)<=0||Ln(n,c)&&(r=r.insert(c.key,c.mutableCopy()))}return m.resolve(r)}Es(t,n){return m.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new yf(this)}getSize(t){return m.resolve(this.size)}}class yf extends rf{constructor(t){super(),this.De=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.document.isValidDocument()?n.push(this.De.addEntry(t,r.document,this.getReadTime(s))):this.De.removeEntry(s)}),m.waitFor(n)}getFromCache(t,n){return this.De.getEntry(t,n)}getAllFromCache(t,n){return this.De.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t){this.persistence=t,this.Is=new Ve(n=>cr(n),hr),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.As=0,this.Rs=new Sr,this.targetCount=0,this.bs=Zt.ie()}forEachTarget(t,n){return this.Is.forEach((s,r)=>n(r)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.As&&(this.As=n),m.resolve()}ae(t){this.Is.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Zt(n),this.highestTargetId=n),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,n){return this.ae(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.ae(n),m.resolve()}removeTargetData(t,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),m.waitFor(i).next(()=>r)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const s=this.Is.get(n)||null;return m.resolve(s)}addMatchingKeys(t,n,s){return this.Rs.rs(n,s),m.resolve()}removeMatchingKeys(t,n,s){this.Rs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Rs.us(n),m.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Rs.ls(n);return m.resolve(s)}containsKey(t,n){return m.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n){this.Ps={},this.Be=new nr(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new vf(this),this.Jt=new nf,this.Je=function(s,r){return new mf(s,r)}(this.Jt,s=>this.referenceDelegate.vs(s)),this.k=new tf(n),this.Ye=new pf(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let n=this.Ps[t.toKey()];return n||(n=new gf(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new wf(this.Be.next());return this.referenceDelegate.Vs(),s(r).next(i=>this.referenceDelegate.Ss(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ds(t,n){return m.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class wf extends Jl{constructor(t){super(),this.currentSequenceNumber=t}}class Ar{constructor(t){this.persistence=t,this.Cs=new Sr,this.Ns=null}static ks(t){return new Ar(t)}get xs(){if(this.Ns)return this.Ns;throw T()}addReference(t,n,s){return this.Cs.addReference(s,n),this.xs.delete(s.toString()),m.resolve()}removeReference(t,n,s){return this.Cs.removeReference(s,n),this.xs.add(s.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),m.resolve()}removeTarget(t,n){this.Cs.us(n.targetId).forEach(r=>this.xs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.xs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Vs(){this.Ns=new Set}Ss(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.xs,s=>{const r=E.fromPath(s);return this.$s(t,r).next(i=>{i||n.removeEntry(r)})}).next(()=>(this.Ns=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(t){return 0}$s(t,n){return m.or([()=>m.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ds(t,n)])}}class xa{constructor(){this.activeTargetIds=ma()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ef{constructor(){this.pi=new xa,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,n,s){this.Ti[t]=n}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new xa,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{Ei(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.Fi=n+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,n,s,r,i){const o=this.Ui(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.qi(a,r,i),this.Ki(t,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw $o("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}ji(t,n,s,r,i){return this.Bi(t,n,s,r,i)}qi(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Bt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}Ui(t,n){const s=If[t];return`${this.Fi}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,n,s,r){return new Promise((i,o)=>{const a=new qu;a.listenOnce(Vu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case tr.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case tr.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const f=function(d){const g=d.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(g)>=0?g:p.UNKNOWN}(l.status);o(new _(f,l.message))}else o(new _(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(p.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}Qi(t,n,s){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Pu(),o=Fu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $u({})),this.qi(a.initMessageHeaders,n,s),Mc()||Fc()||Vc()||Uc()||$c()||Pc()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const f=new Sf({Vi:g=>{l?v("Connection","Not sending because WebChannel is closed:",g):(h||(v("Connection","Opening WebChannel transport."),u.open(),h=!0),v("Connection","WebChannel sending:",g),u.send(g))},Si:()=>u.close()}),d=(g,C,A)=>{g.listen(C,R=>{try{A(R)}catch(P){setTimeout(()=>{throw P},0)}})};return d(u,Sn.EventType.OPEN,()=>{l||v("Connection","WebChannel transport opened.")}),d(u,Sn.EventType.CLOSE,()=>{l||(l=!0,v("Connection","WebChannel transport closed"),f.Oi())}),d(u,Sn.EventType.ERROR,g=>{l||(l=!0,$o("Connection","WebChannel transport errored:",g),f.Oi(new _(p.UNAVAILABLE,"The operation could not be completed")))}),d(u,Sn.EventType.MESSAGE,g=>{var C;if(!l){const A=g.data[0];L(!!A);const R=A,P=R.error||((C=R[0])===null||C===void 0?void 0:C.error);if(P){v("Connection","WebChannel received error:",P);const ht=P.status;let W=function(Tc){const qr=U[Tc];if(qr!==void 0)return pa(qr)}(ht),Et=P.message;W===void 0&&(W=p.INTERNAL,Et="Unknown error status: "+ht+" with message "+P.message),l=!0,f.Oi(new _(W,Et)),u.close()}else v("Connection","WebChannel received:",A),f.Mi(A)}}),d(o,Uu.STAT_EVENT,g=>{g.stat===Fo.PROXY?v("Connection","Detected buffering proxy"):g.stat===Fo.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Cr(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(e){return new Pl(e,!0)}class Pa{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Me=t,this.timerId=n,this.Wi=s,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const n=Math.floor(this.Hi+this.tr()),s=Math.max(0,Date.now()-this.Yi),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,n,s,r,i,o,a,c){this.Me=t,this.nr=s,this.sr=r,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Pa(t,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,t!==4?this.ur.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.rr===n&&this.Ir(s,r)},s=>{t(()=>{const r=new _(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ar(r)})})}Ir(t,n){const s=this.Er(this.rr);this.stream=this.Rr(t,n),this.stream.Di(()=>{s(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(r=>{s(()=>this.Ar(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return n=>{this.Me.enqueueAndForget(()=>this.rr===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cf extends Fa{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.k=i}Rr(t,n){return this.ir.Qi("Listen",t,n)}onMessage(t){this.ur.reset();const n=Ul(this.k,t),s=function(r){if(!("targetChange"in r))return k.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?k.min():i.readTime?pt(i.readTime):k.min()}(t);return this.listener.br(n,s)}Pr(t){const n={};n.database=wr(this.k),n.addTarget=function(r,i){let o;const a=i.target;return o=ur(a)?{documents:jl(r,a)}:{query:Bl(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ta(r,i.resumeToken):i.snapshotVersion.compareTo(k.min())>0&&(o.readTime=jn(r,i.snapshotVersion.toTimestamp())),o}(this.k,t);const s=Kl(this.k,t);s&&(n.labels=s),this.gr(n)}vr(t){const n={};n.database=wr(this.k),n.removeTarget=t,this.gr(n)}}class bf extends Fa{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,n){return this.ir.Qi("Write",t,n)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const n=ql(t.writeResults,t.commitTime),s=pt(t.commitTime);return this.listener.Cr(s,n)}return L(!t.writeResults||t.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=wr(this.k),this.gr(t)}Dr(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>$l(this.k,s))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.ir=s,this.k=r,this.$r=!1}Or(){if(this.$r)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(p.UNKNOWN,r.toString())})}ji(t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(p.UNKNOWN,r.toString())})}terminate(){this.$r=!0}}class Nf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,t==="Online"&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(yt(n),this.Lr=!1):v("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{s.enqueueAndForget(async()=>{xt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=I(a);c.Gr.add(4),await Ue(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Hn(c)}(this))})}),this.Jr=new Nf(s,r)}}async function Hn(e){if(xt(e))for(const t of e.zr)await t(!0)}async function Ue(e){for(const t of e.zr)await t(!1)}function Va(e,t){const n=I(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Nr(n)?kr(n):te(n).lr()&&br(n,t))}function Ua(e,t){const n=I(e),s=te(n);n.Wr.delete(t),s.lr()&&$a(n,t),n.Wr.size===0&&(s.lr()?s._r():xt(n)&&n.Jr.set("Unknown"))}function br(e,t){e.Yr.X(t.targetId),te(e).Pr(t)}function $a(e,t){e.Yr.X(t),te(e).vr(t)}function kr(e){e.Yr=new Ol({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),te(e).start(),e.Jr.Br()}function Nr(e){return xt(e)&&!te(e).hr()&&e.Wr.size>0}function xt(e){return I(e).Gr.size===0}function qa(e){e.Yr=void 0}async function Rf(e){e.Wr.forEach((t,n)=>{br(e,t)})}async function Lf(e,t){qa(e),Nr(e)?(e.Jr.Kr(t),kr(e)):e.Jr.set("Unknown")}async function Of(e,t,n){if(e.Jr.set("Online"),t instanceof va&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Wr.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Wr.delete(o),s.Yr.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Kn(e,s)}else if(t instanceof qn?e.Yr.ot(t):t instanceof ya?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(k.min()))try{const s=await La(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Wr.get(c);u&&r.Wr.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.Wr.get(a);if(!c)return;r.Wr.set(a,c.withResumeToken(K.EMPTY_BYTE_STRING,c.snapshotVersion)),$a(r,a);const u=new Ot(c.target,a,1,c.sequenceNumber);br(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Kn(e,s)}}async function Kn(e,t,n){if(!Pe(t))throw t;e.Gr.add(1),await Ue(e),e.Jr.set("Offline"),n||(n=()=>La(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Hn(e)})}function ja(e,t){return t().catch(n=>Kn(e,n,t))}async function Gn(e){const t=I(e),n=_t(t);let s=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;xf(t);)try{const r=await ff(t.localStore,s);if(r===null){t.Qr.length===0&&n._r();break}s=r.batchId,Mf(t,r)}catch(r){await Kn(t,r)}Ba(t)&&Ha(t)}function xf(e){return xt(e)&&e.Qr.length<10}function Mf(e,t){e.Qr.push(t);const n=_t(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function Ba(e){return xt(e)&&!_t(e).hr()&&e.Qr.length>0}function Ha(e){_t(e).start()}async function Pf(e){_t(e).kr()}async function Ff(e){const t=_t(e);for(const n of e.Qr)t.Dr(n.mutations)}async function Vf(e,t,n){const s=e.Qr.shift(),r=Er.from(s,t,n);await ja(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Gn(e)}async function Uf(e,t){t&&_t(e).Sr&&await async function(n,s){if(r=s.code,Cl(r)&&r!==p.ABORTED){const i=n.Qr.shift();_t(n).wr(),await ja(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gn(n)}var r}(e,t),Ba(e)&&Ha(e)}async function $f(e,t){const n=I(e);t?(n.Gr.delete(2),await Hn(n)):t||(n.Gr.add(2),await Ue(n),n.Jr.set("Unknown"))}function te(e){return e.Xr||(e.Xr=function(t,n,s){const r=I(t);return r.Or(),new Cf(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(e.datastore,e.asyncQueue,{Di:Rf.bind(null,e),Ni:Lf.bind(null,e),br:Of.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),Nr(e)?kr(e):e.Jr.set("Unknown")):(await e.Xr.stop(),qa(e))})),e.Xr}function _t(e){return e.Zr||(e.Zr=function(t,n,s){const r=I(t);return r.Or(),new bf(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(e.datastore,e.asyncQueue,{Di:Pf.bind(null,e),Ni:Uf.bind(null,e),Nr:Ff.bind(null,e),Cr:Vf.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await Gn(e)):(await e.Zr.stop(),e.Qr.length>0&&(v("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Dr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rr(e,t){if(yt("AsyncQueue",`${t}: ${e}`),Pe(e))return new _(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=gr(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ee)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ee;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.eo=new Y(E.comparator)}track(t){const n=t.doc.key,s=this.eo.get(n);s?t.type!==0&&s.type===3?this.eo=this.eo.insert(n,t):t.type===3&&s.type!==1?this.eo=this.eo.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.eo=this.eo.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.eo=this.eo.remove(n):t.type===1&&s.type===2?this.eo=this.eo.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):T():this.eo=this.eo.insert(n,t)}no(){const t=[];return this.eo.inorderTraversal((n,s)=>{t.push(s)}),t}}class ne{constructor(t,n,s,r,i,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ne(t,n,ee.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.so=void 0,this.listeners=[]}}class jf{constructor(){this.queries=new Ve(t=>ta(t),Rn),this.onlineState="Unknown",this.io=new Set}}async function Bf(e,t){const n=I(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new qf),r)try{i.so=await n.onListen(s)}catch(o){const a=Rr(o,`Initialization of query '${dr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.ro(n.onlineState),i.so&&t.oo(i.so)&&Lr(n)}async function Hf(e,t){const n=I(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Kf(e,t){const n=I(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(r)&&(s=!0);o.so=r}}s&&Lr(n)}function Gf(e,t,n){const s=I(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Lr(e){e.io.forEach(t=>{t.next()})}class zf{constructor(t,n,s){this.query=t,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=s||{}}oo(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new ne(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(t)&&(this.co.next(t),n=!0):this.lo(t,this.onlineState)&&(this.fo(t),n=!0),this.uo=t,n}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),n=!0),n}lo(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.wo||!s)&&(!t.docs.isEmpty()||n==="Offline")}ho(t){if(t.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(t){t=ne.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.key=t}}class za{constructor(t){this.key=t}}class Wf{constructor(t,n){this.query=t,this.To=n,this.Eo=null,this.current=!1,this.Io=O(),this.mutatedKeys=O(),this.Ao=ea(t),this.Ro=new ee(this.Ao)}get bo(){return this.To}Po(t,n){const s=n?n.vo:new Ka,r=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=Nn(this.query)&&r.size===this.query.limit?r.last():null,u=Dn(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const f=r.get(h),d=Ln(this.query,l)?l:null,g=!!f&&this.mutatedKeys.has(f.key),C=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let A=!1;f&&d?f.data.isEqual(d.data)?g!==C&&(s.track({type:3,doc:d}),A=!0):this.Vo(f,d)||(s.track({type:2,doc:d}),A=!0,(c&&this.Ao(d,c)>0||u&&this.Ao(d,u)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),A=!0):f&&!d&&(s.track({type:1,doc:f}),A=!0,(c||u)&&(a=!0)),A&&(d?(o=o.add(d),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),Nn(this.query)||Dn(this.query))for(;o.size>this.query.limit;){const h=Nn(this.query)?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Ro:o,vo:s,Bn:a,mutatedKeys:i}}Vo(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((u,h)=>function(l,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return d(l)-d(f)}(u.type,h.type)||this.Ao(u.doc,h.doc)),this.So(s);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new ne(this.query,t.Ro,r,i,t.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Ka,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(n=>this.To=this.To.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=O(),this.Ro.forEach(s=>{this.No(s.key)&&(this.Io=this.Io.add(s.key))});const n=[];return t.forEach(s=>{this.Io.has(s)||n.push(new za(s))}),this.Io.forEach(s=>{t.has(s)||n.push(new Ga(s))}),n}ko(t){this.To=t.zn,this.Io=O();const n=this.Po(t.documents);return this.applyChanges(n,!0)}xo(){return ne.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class Qf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Xf{constructor(t){this.key=t,this.$o=!1}}class Yf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new Ve(a=>ta(a),Rn),this.Fo=new Map,this.Lo=new Set,this.Bo=new Y(E.comparator),this.Uo=new Map,this.qo=new Sr,this.Ko={},this.jo=new Map,this.Qo=Zt.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Jf(e,t){const n=cd(e);let s,r;const i=n.Mo.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.xo();else{const o=await df(n.localStore,Rt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Zf(n,t,s,a==="current"),n.isPrimaryClient&&Va(n.remoteStore,o)}return r}async function Zf(e,t,n,s){e.Go=(h,l,f)=>async function(d,g,C,A){let R=g.view.Po(C);R.Bn&&(R=await Oa(d.localStore,g.query,!1).then(({documents:W})=>g.view.Po(W,R)));const P=A&&A.targetChanges.get(g.targetId),ht=g.view.applyChanges(R,d.isPrimaryClient,P);return Za(d,g.targetId,ht.Co),ht.snapshot}(e,h,l,f);const r=await Oa(e.localStore,t,!0),i=new Wf(t,r.zn),o=i.Po(r.documents),a=Me.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=i.applyChanges(o,e.isPrimaryClient,a);Za(e,n,c.Co);const u=new Qf(t,n,i);return e.Mo.set(t,u),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function td(e,t){const n=I(e),s=n.Mo.get(t),r=n.Fo.get(s.targetId);if(r.length>1)return n.Fo.set(s.targetId,r.filter(i=>!Rn(i,t))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ir(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ua(n.remoteStore,s.targetId),Or(n,s.targetId)}).catch(Fe)):(Or(n,s.targetId),await Ir(n.localStore,s.targetId,!0))}async function ed(e,t,n){const s=hd(e);try{const r=await function(i,o){const a=I(i),c=it.now(),u=o.reduce((l,f)=>l.add(f.key),O());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.Wn.vn(l,u).next(f=>{h=f;const d=[];for(const g of o){const C=Tl(g,h.get(g.key));C!=null&&d.push(new Xt(g.key,C,Qo(C.value.mapValue),Qt.exists(!0)))}return a.An.addMutationBatch(l,c,d,o)})).then(l=>(l.applyToLocalDocumentSet(h),{batchId:l.batchId,changes:h}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new Y(D)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(s,r.batchId,n),await $e(s,r.changes),await Gn(s.remoteStore)}catch(r){const i=Rr(r,"Failed to persist write");n.reject(i)}}async function Wa(e,t){const n=I(e);try{const s=await uf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.Uo.get(i);o&&(L(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.$o=!0:r.modifiedDocuments.size>0?L(o.$o):r.removedDocuments.size>0&&(L(o.$o),o.$o=!1))}),await $e(n,s,t)}catch(s){await Fe(s)}}function Qa(e,t,n){const s=I(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Mo.forEach((i,o)=>{const a=o.view.ro(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.ro(o)&&(c=!0)}),c&&Lr(a)}(s.eventManager,t),r.length&&s.Oo.br(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function nd(e,t,n){const s=I(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.Uo.get(t),i=r&&r.key;if(i){let o=new Y(E.comparator);o=o.insert(i,X.newNoDocument(i,k.min()));const a=O().add(i),c=new $n(k.min(),new Map,new z(D),o,a);await Wa(s,c),s.Bo=s.Bo.remove(i),s.Uo.delete(t),xr(s)}else await Ir(s.localStore,t,!1).then(()=>Or(s,t,n)).catch(Fe)}async function sd(e,t){const n=I(e),s=t.batch.batchId;try{const r=await hf(n.localStore,t);Ya(n,s,null),Xa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $e(n,r)}catch(r){await Fe(r)}}async function rd(e,t,n){const s=I(e);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.An.lookupMutationBatch(c,o).next(h=>(L(h!==null),u=h.keys(),a.An.removeMutationBatch(c,h))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,u))})}(s.localStore,t);Ya(s,t,n),Xa(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await $e(s,r)}catch(r){await Fe(r)}}function Xa(e,t){(e.jo.get(t)||[]).forEach(n=>{n.resolve()}),e.jo.delete(t)}function Ya(e,t,n){const s=I(e);let r=s.Ko[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.Ko[s.currentUser.toKey()]=r}}function Or(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Fo.get(t))e.Mo.delete(s),n&&e.Oo.zo(s,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(s=>{e.qo.containsKey(s)||Ja(e,s)})}function Ja(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);n!==null&&(Ua(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),xr(e))}function Za(e,t,n){for(const s of n)s instanceof Ga?(e.qo.addReference(s.key,t),id(e,s)):s instanceof za?(v("SyncEngine","Document no longer in limbo: "+s.key),e.qo.removeReference(s.key,t),e.qo.containsKey(s.key)||Ja(e,s.key)):T()}function id(e,t){const n=t.key,s=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(s)||(v("SyncEngine","New document in limbo: "+n),e.Lo.add(s),xr(e))}function xr(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new E(M.fromString(t)),s=e.Qo.next();e.Uo.set(s,new Xf(n)),e.Bo=e.Bo.insert(n,s),Va(e.remoteStore,new Ot(Rt(fr(n.path)),s,2,nr.I))}}async function $e(e,t,n){const s=I(e),r=[],i=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach((a,c)=>{o.push(s.Go(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const h=Tr.$n(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.Oo.br(r),await async function(a,c){const u=I(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(c,l=>m.forEach(l.kn,f=>u.persistence.referenceDelegate.addReference(h,l.targetId,f)).next(()=>m.forEach(l.xn,f=>u.persistence.referenceDelegate.removeReference(h,l.targetId,f)))))}catch(h){if(!Pe(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const f=u.qn.get(l),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);u.qn=u.qn.insert(l,g)}}}(s.localStore,i))}async function od(e,t){const n=I(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await Ra(n.localStore,t);n.currentUser=t,function(r,i){r.jo.forEach(o=>{o.forEach(a=>{a.reject(new _(p.CANCELLED,i))})}),r.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await $e(n,s.Gn)}}function ad(e,t){const n=I(e),s=n.Uo.get(t);if(s&&s.$o)return O().add(s.key);{let r=O();const i=n.Fo.get(t);if(!i)return r;for(const o of i){const a=n.Mo.get(o);r=r.unionWith(a.view.bo)}return r}}function cd(e){const t=I(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ad.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nd.bind(null,t),t.Oo.br=Kf.bind(null,t.eventManager),t.Oo.zo=Gf.bind(null,t.eventManager),t}function hd(e){const t=I(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rd.bind(null,t),t}class ud{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Bn(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return cf(this.persistence,new of,t.initialUser,this.k)}Yo(t){return new _f(Ar.ks,this.k)}Jo(t){return new Ef}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ld{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qa(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=od.bind(null,this.syncEngine),await $f(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new jf}createDatastore(t){const n=Bn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Af(r));var r;return function(i,o,a,c){return new kf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Qa(this.syncEngine,a,0),o=Ma.Pt()?new Ma:new Tf,new Df(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new Yf(s,r,i,o,a,c);return u&&(h.Wo=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=I(t);v("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Ue(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=qo.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Rr(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function pd(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ra(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function gd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await md(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>async function(i,o){const a=I(i);a.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const c=xt(a);a.Gr.add(3),await Ue(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Hn(a)}(t.remoteStore,r)),e.onlineComponents=t}async function md(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await pd(e,new ud)),e.offlineComponents}async function tc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await gd(e,new ld)),e.onlineComponents}function yd(e){return tc(e).then(t=>t.syncEngine)}async function ec(e){const t=await tc(e),n=t.eventManager;return n.onListen=Jf.bind(null,t.syncEngine),n.onUnlisten=td.bind(null,t.syncEngine),n}class vd{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e,t,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _d(e,t,n,s){if(t===!0&&s===!0)throw new _(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function rc(e){if(!E.isDocumentKey(e))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ic(e){if(E.isDocumentKey(e))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function zn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mr(e);throw new _(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,_d("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oc({}),this._settingsFrozen=!1,t instanceof qe?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(r.options.projectId)}(t))}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bu;switch(n.type){case"gapi":const s=n.client;return L(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Gu(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=nc.get(t);n&&(v("ComponentProvider","Removing Datastore"),nc.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new at(this.firestore,t,this._key)}}class Wn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Wn(this.firestore,t,this._query)}}class wt extends Wn{constructor(t,n,s){super(t,n,fr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new at(this.firestore,null,new E(t))}withConverter(t){return new wt(this.firestore,t,this._path)}}function zd(e,t,...n){if(e=Pt(e),sc("collection","path",t),e instanceof Pr){const s=M.fromString(t,...n);return ic(s),new wt(e,null,s)}{if(!(e instanceof at||e instanceof wt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return ic(s),new wt(e.firestore,null,s)}}function wd(e,t,...n){if(e=Pt(e),arguments.length===1&&(t=qo.A()),sc("doc","path",t),e instanceof Pr){const s=M.fromString(t,...n);return rc(s),new at(e,null,new E(s))}{if(!(e instanceof at||e instanceof wt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return rc(s),new at(e.firestore,e instanceof wt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Pa(this,"async_queue_retry"),this.bc=()=>{const n=Cr();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const t=Cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const n=Cr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new Nt;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Pe(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const n=this.mc.then(()=>(this.Ic=!0,t().catch(s=>{this.Ec=s,this.Ic=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw yt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ic=!1,s))));return this.mc=n,n}enqueueAfterDelay(t,n,s){this.Pc(),this.Rc.indexOf(t)>-1&&(n=0);const r=Dr.createAndSchedule(this,t,n,s,i=>this.Sc(i));return this.Tc.push(r),r}Pc(){this.Ec&&T()}verifyOperationInProgress(){}async Dc(){let t;do t=this.mc,await t;while(t!==this.mc)}Cc(t){for(const n of this.Tc)if(n.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const n=this.Tc.indexOf(t);this.Tc.splice(n,1)}}function ac(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Qn extends Pr{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Ed,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||hc(this),this._firestoreClient.terminate()}}function Wd(e=Rh()){return bh(e,"firestore").getImmediate()}function cc(e){return e._firestoreClient||hc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function hc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new vd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new dd(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new se(K.fromBase64String(t))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new se(K.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=/^__.*__$/;class Id{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Xt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Vn(t,this.data,n,this.fieldTransforms)}}function lc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Ur{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.k=s,this.ignoreUndefinedProperties=r,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new Ur(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Oc({path:s,Fc:!1});return r.Lc(t),r}Bc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Oc({path:s,Fc:!1});return r.xc(),r}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return Xn(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(t.length===0)throw this.qc("Document fields must not be empty");if(lc(this.$c)&&Td.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Sd{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.k=s||Bn(t)}Qc(t,n,s,r=!1){return new Ur({$c:t,methodName:n,jc:s,path:nt.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Ad(e){const t=e._freezeSettings(),n=Bn(e._databaseId);return new Sd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Cd(e,t,n,s,r,i={}){const o=e.Qc(i.merge||i.mergeFields?2:0,t,n,r);gc("Data must be an object, but it was:",o,s);const a=dc(s,o);let c,u;if(i.merge)c=new sr(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const f=bd(t,l,n);if(!o.contains(f))throw new _(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Nd(h,f)||h.push(f)}c=new sr(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Id(new ct(a),c,u)}function fc(e,t){if(pc(e=Pt(e)))return gc("Unsupported field value:",t,e),dc(e,t);if(e instanceof uc)return function(n,s){if(!lc(s.$c))throw s.qc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&t.$c!==4)throw t.qc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=fc(o,s.Uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ml(s.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=it.fromDate(n);return{timestampValue:jn(s.k,r)}}if(n instanceof it){const r=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jn(s.k,r)}}if(n instanceof Vr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof se)return{bytesValue:Ta(s.k,n._byteString)};if(n instanceof at){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:mr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.qc(`Unsupported field value: ${Mr(n)}`)}(e,t)}function dc(e,t){const n={};return Bo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kt(e,(s,r)=>{const i=fc(r,t.Mc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function pc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof it||e instanceof Vr||e instanceof se||e instanceof at||e instanceof uc)}function gc(e,t,n){if(!pc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Mr(n);throw s==="an object"?t.qc(e+" a custom object"):t.qc(e+" "+s)}}function bd(e,t,n){if((t=Pt(t))instanceof Fr)return t._internalPath;if(typeof t=="string")return mc(e,t);throw Xn("Field path arguments must be of type string or ",e,!1,void 0,n)}const kd=new RegExp("[~\\*/\\[\\]]");function mc(e,t,n){if(t.search(kd)>=0)throw Xn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Fr(...t.split("."))._internalPath}catch{throw Xn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Xn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new _(p.INVALID_ARGUMENT,a+e+c)}function Nd(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(vc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dd extends yc{data(){return super.data()}}function vc(e,t){return typeof t=="string"?mc(e,t):t instanceof Fr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _c extends yc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Yn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(vc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Yn extends _c{data(t={}){return super.data(t)}}class Rd{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new je(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Yn(this._firestore,this._userDataWriter,s.key,s,new je(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Yn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new je(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Yn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new je(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Ld(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ld(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(e){if(Dn(e)&&e.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{convertValue(t,n="none"){switch(Dt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return Kt(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Vr(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ko(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ke(t));default:return null}}convertTimestamp(t){const n=vt(t);return new it(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=M.fromString(t);L(Na(s));const r=new qe(s.get(1),s.get(3)),i=new E(s.popFirst(5));return r.isEqual(n)||yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class wc extends xd{constructor(t){super(),this.firestore=t}convertBytes(t){return new se(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new at(this.firestore,null,n)}}function Qd(e,t){const n=zn(e.firestore,Qn),s=wd(e),r=Md(e.converter,t);return Pd(n,[Cd(Ad(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Qt.exists(!1))]).then(()=>s)}function Xd(e,...t){var n,s,r;e=Pt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||ac(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ac(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(e instanceof at)u=zn(e.firestore,Qn),h=fr(e._key.path),c={next:l=>{t[o]&&t[o](Fd(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=zn(e,Wn);u=zn(l.firestore,Qn),h=l._query;const f=new wc(u);c={next:d=>{t[o]&&t[o](new Rd(u,f,l,d))},error:t[o+1],complete:t[o+2]},Od(e._query)}return function(l,f,d,g){const C=new fd(g),A=new zf(f,C,d);return l.asyncQueue.enqueueAndForget(async()=>Bf(await ec(l),A)),()=>{C.nc(),l.asyncQueue.enqueueAndForget(async()=>Hf(await ec(l),A))}}(cc(u),h,a,c)}function Pd(e,t){return function(n,s){const r=new Nt;return n.asyncQueue.enqueueAndForget(async()=>ed(await yd(n),s,r)),r.promise}(cc(e),t)}function Fd(e,t,n){const s=n.docs.get(t._key),r=new wc(e);return new _c(e,r,t._key,s,new je(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Bt=n})(Dh),hs(new Qe("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Qn(r,new Hu(n.getProvider("auth-internal")),new Wu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),Ft(Vo,"3.4.3",e),Ft(Vo,"3.4.3","esm2017")})();function Vd(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}),t}var Ud=Vd(Dc),$d,qd,jd,$r=Ud,Bd=0;function Ec(e,t,n,s,r){var i,o,a={};for(o in t)o=="ref"?i=t[o]:a[o]=t[o];var c={type:e,props:a,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Bd,__source:s,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(o in i)a[o]===void 0&&(a[o]=i[o]);return $r.options.vnode&&$r.options.vnode(c),c}jd=$r.Fragment,qd=Ec,$d=Ec;export{Wd as B,Qd as E,jd as F,Xd as I,zd as S,$d as a,oi as b,Gd as i,qd as j,Hd as l,Kd as y};
