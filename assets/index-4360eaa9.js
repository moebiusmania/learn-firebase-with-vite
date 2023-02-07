(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var $n,C,po,Zt,Lt,ti,go,vn={},mo=[],eu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Et(e,t){for(var n in t)e[n]=t[n];return e}function yo(e){var t=e.parentNode;t&&t.removeChild(e)}function nu(e,t,n){var s,r,i,o={};for(i in t)i=="key"?s=t[i]:i=="ref"?r=t[i]:o[i]=t[i];if(arguments.length>2&&(o.children=arguments.length>3?$n.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return hn(e,o,s,r,null)}function hn(e,t,n,s,r){var i={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++po};return r==null&&C.vnode!=null&&C.vnode(i),i}function Bn(e){return e.children}function su(e,t,n,s,r){var i;for(i in n)i==="children"||i==="key"||i in t||_n(e,i,null,n[i],s);for(i in t)r&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||_n(e,i,t[i],n[i],s)}function ei(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||eu.test(t)?n:n+"px"}function _n(e,t,n,s,r){var i;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||ei(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||ei(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?s||e.addEventListener(t,i?si:ni,i):e.removeEventListener(t,i?si:ni,i);else if(t!=="dangerouslySetInnerHTML"){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function ni(e){Zt=!0;try{return this.l[e.type+!1](C.event?C.event(e):e)}finally{Zt=!1}}function si(e){Zt=!0;try{return this.l[e.type+!0](C.event?C.event(e):e)}finally{Zt=!1}}function ln(e,t){this.props=e,this.context=t}function Ae(e,t){if(t==null)return e.__?Ae(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ae(e):null}function vo(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return vo(e)}}function ru(e){Zt?setTimeout(e):go(e)}function ri(e){(!e.__d&&(e.__d=!0)&&Lt.push(e)&&!wn.__r++||ti!==C.debounceRendering)&&((ti=C.debounceRendering)||ru)(wn)}function wn(){var e,t,n,s,r,i,o,a;for(Lt.sort(function(c,h){return c.__v.__b-h.__v.__b});e=Lt.shift();)e.__d&&(t=Lt.length,s=void 0,r=void 0,o=(i=(n=e).__v).__e,(a=n.__P)&&(s=[],(r=Et({},i)).__v=i.__v+1,cr(a,i,r,n.__n,a.ownerSVGElement!==void 0,i.__h!=null?[o]:null,s,o??Ae(i),i.__h),bo(s,i),i.__e!=o&&vo(i)),Lt.length>t&&Lt.sort(function(c,h){return c.__v.__b-h.__v.__b}));wn.__r=0}function _o(e,t,n,s,r,i,o,a,c,h){var u,l,d,f,m,b,w,N=s&&s.__k||mo,L=N.length;for(n.__k=[],u=0;u<t.length;u++)if((f=n.__k[u]=(f=t[u])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?hn(null,f,null,null,f):Array.isArray(f)?hn(Bn,{children:f},null,null,null):f.__b>0?hn(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=N[u])===null||d&&f.key==d.key&&f.type===d.type)N[u]=void 0;else for(l=0;l<L;l++){if((d=N[l])&&f.key==d.key&&f.type===d.type){N[l]=void 0;break}d=null}cr(e,f,d=d||vn,r,i,o,a,c,h),m=f.__e,(l=f.ref)&&d.ref!=l&&(w||(w=[]),d.ref&&w.push(d.ref,null,f),w.push(l,f.__c||m,f)),m!=null?(b==null&&(b=m),typeof f.type=="function"&&f.__k===d.__k?f.__d=c=wo(f,c,e):c=Eo(e,f,d,N,m,c),typeof n.type=="function"&&(n.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=Ae(d))}for(n.__e=b,u=L;u--;)N[u]!=null&&(typeof n.type=="function"&&N[u].__e!=null&&N[u].__e==n.__d&&(n.__d=To(s).nextSibling),So(N[u],N[u]));if(w)for(u=0;u<w.length;u++)Io(w[u],w[++u],w[++u])}function wo(e,t,n){for(var s,r=e.__k,i=0;r&&i<r.length;i++)(s=r[i])&&(s.__=e,t=typeof s.type=="function"?wo(s,t,n):Eo(n,s,s,r,s.__e,t));return t}function Eo(e,t,n,s,r,i){var o,a,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||r!=i||r.parentNode==null)t:if(i==null||i.parentNode!==e)e.appendChild(r),o=null;else{for(a=i,c=0;(a=a.nextSibling)&&c<s.length;c+=1)if(a==r)break t;e.insertBefore(r,i),o=i}return o!==void 0?o:r.nextSibling}function To(e){var t,n,s;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(s=To(n)))return s}return null}function cr(e,t,n,s,r,i,o,a,c){var h,u,l,d,f,m,b,w,N,L,pt,it,Nt,zt,xt,ot=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,a=t.__e=n.__e,t.__h=null,i=[a]),(h=C.__b)&&h(t);try{t:if(typeof ot=="function"){if(w=t.props,N=(h=ot.contextType)&&s[h.__c],L=h?N?N.props.value:h.__:s,n.__c?b=(u=t.__c=n.__c).__=u.__E:("prototype"in ot&&ot.prototype.render?t.__c=u=new ot(w,L):(t.__c=u=new ln(w,L),u.constructor=ot,u.render=ou),N&&N.sub(u),u.props=w,u.state||(u.state={}),u.context=L,u.__n=s,l=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),ot.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Et({},u.__s)),Et(u.__s,ot.getDerivedStateFromProps(w,u.__s))),d=u.props,f=u.state,u.__v=t,l)ot.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(ot.getDerivedStateFromProps==null&&w!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(w,L),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(w,u.__s,L)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(u.props=w,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(nn){nn&&(nn.__=t)}),pt=0;pt<u._sb.length;pt++)u.__h.push(u._sb[pt]);u._sb=[],u.__h.length&&o.push(u);break t}u.componentWillUpdate!=null&&u.componentWillUpdate(w,u.__s,L),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,f,m)})}if(u.context=L,u.props=w,u.__P=e,it=C.__r,Nt=0,"prototype"in ot&&ot.prototype.render){for(u.state=u.__s,u.__d=!1,it&&it(t),h=u.render(u.props,u.state,u.context),zt=0;zt<u._sb.length;zt++)u.__h.push(u._sb[zt]);u._sb=[]}else do u.__d=!1,it&&it(t),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++Nt<25);u.state=u.__s,u.getChildContext!=null&&(s=Et(Et({},s),u.getChildContext())),l||u.getSnapshotBeforeUpdate==null||(m=u.getSnapshotBeforeUpdate(d,f)),xt=h!=null&&h.type===Bn&&h.key==null?h.props.children:h,_o(e,Array.isArray(xt)?xt:[xt],t,n,s,r,i,o,a,c),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),b&&(u.__E=u.__=null),u.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=iu(n.__e,t,n,s,r,i,o,c);(h=C.diffed)&&h(t)}catch(nn){t.__v=null,(c||i!=null)&&(t.__e=a,t.__h=!!c,i[i.indexOf(a)]=null),C.__e(nn,t,n)}}function bo(e,t){C.__c&&C.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){C.__e(s,n.__v)}})}function iu(e,t,n,s,r,i,o,a){var c,h,u,l=n.props,d=t.props,f=t.type,m=0;if(f==="svg"&&(r=!0),i!=null){for(;m<i.length;m++)if((c=i[m])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){e=c,i[m]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=r?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),i=null,a=!1}if(f===null)l===d||a&&e.data===d||(e.data=d);else{if(i=i&&$n.call(e.childNodes),h=(l=n.props||vn).dangerouslySetInnerHTML,u=d.dangerouslySetInnerHTML,!a){if(i!=null)for(l={},m=0;m<e.attributes.length;m++)l[e.attributes[m].name]=e.attributes[m].value;(u||h)&&(u&&(h&&u.__html==h.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(su(e,d,l,r,a),u)t.__k=[];else if(m=t.props.children,_o(e,Array.isArray(m)?m:[m],t,n,s,r&&f!=="foreignObject",i,o,i?i[0]:n.__k&&Ae(n,0),a),i!=null)for(m=i.length;m--;)i[m]!=null&&yo(i[m]);a||("value"in d&&(m=d.value)!==void 0&&(m!==e.value||f==="progress"&&!m||f==="option"&&m!==l.value)&&_n(e,"value",m,l.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==e.checked&&_n(e,"checked",m,l.checked,!1))}return e}function Io(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){C.__e(s,n)}}function So(e,t,n){var s,r;if(C.unmount&&C.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||Io(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(i){C.__e(i,t)}s.base=s.__P=null,e.__c=void 0}if(s=e.__k)for(r=0;r<s.length;r++)s[r]&&So(s[r],t,n||typeof e.type!="function");n||e.__e==null||yo(e.__e),e.__=e.__e=e.__d=void 0}function ou(e,t,n){return this.constructor(e,n)}function au(e,t,n){var s,r,i;C.__&&C.__(e,t),r=(s=typeof n=="function")?null:n&&n.__k||t.__k,i=[],cr(t,e=(!s&&n||t).__k=nu(Bn,null,[e]),r||vn,vn,t.ownerSVGElement!==void 0,!s&&n?[n]:r?null:t.firstChild?$n.call(t.childNodes):null,i,!s&&n?n:r?r.__e:t.firstChild,s),bo(i,e)}$n=mo.slice,C={__e:function(e,t,n,s){for(var r,i,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,s||{}),o=r.__d),o)return r.__E=r}catch(a){e=a}throw e}},po=0,Zt=!1,ln.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Et({},this.state),typeof e=="function"&&(e=e(Et({},n),this.props)),e&&Et(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ri(this))},ln.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ri(this))},ln.prototype.render=Bn,Lt=[],go=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,wn.__r=0;var ur,$,gs,ii,xs=0,Co=[],dn=[],oi=C.__b,ai=C.__r,ci=C.diffed,ui=C.__c,hi=C.unmount;function Ao(e,t){C.__h&&C.__h($,e,xs||t),xs=0;var n=$.__H||($.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:dn}),n.__[e]}function ms(e){return xs=1,cu(Do,e)}function cu(e,t,n){var s=Ao(ur++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):Do(void 0,t),function(i){var o=s.__N?s.__N[0]:s.__[0],a=s.t(o,i);o!==a&&(s.__N=[a,s.__[1]],s.__c.setState({}))}],s.__c=$,!$.u)){$.u=!0;var r=$.shouldComponentUpdate;$.shouldComponentUpdate=function(i,o,a){if(!s.__c.__H)return!0;var c=s.__c.__H.__.filter(function(u){return u.__c});if(c.every(function(u){return!u.__N}))return!r||r.call(this,i,o,a);var h=!1;return c.forEach(function(u){if(u.__N){var l=u.__[0];u.__=u.__N,u.__N=void 0,l!==u.__[0]&&(h=!0)}}),!(!h&&s.__c.props===i)&&(!r||r.call(this,i,o,a))}}return s.__N||s.__}function uu(e,t){var n=Ao(ur++,3);!C.__s&&du(n.__H,t)&&(n.__=e,n.i=t,$.__H.__h.push(n))}function hu(){for(var e;e=Co.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(fn),e.__H.__h.forEach(Rs),e.__H.__h=[]}catch(t){e.__H.__h=[],C.__e(t,e.__v)}}C.__b=function(e){$=null,oi&&oi(e)},C.__r=function(e){ai&&ai(e),ur=0;var t=($=e.__c).__H;t&&(gs===$?(t.__h=[],$.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=dn,n.__N=n.i=void 0})):(t.__h.forEach(fn),t.__h.forEach(Rs),t.__h=[])),gs=$},C.diffed=function(e){ci&&ci(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Co.push(t)!==1&&ii===C.requestAnimationFrame||((ii=C.requestAnimationFrame)||lu)(hu)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==dn&&(n.__=n.__V),n.i=void 0,n.__V=dn})),gs=$=null},C.__c=function(e,t){t.some(function(n){try{n.__h.forEach(fn),n.__h=n.__h.filter(function(s){return!s.__||Rs(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],C.__e(s,n.__v)}}),ui&&ui(e,t)},C.unmount=function(e){hi&&hi(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{fn(s)}catch(r){t=r}}),n.__H=void 0,t&&C.__e(t,n.__v))};var li=typeof requestAnimationFrame=="function";function lu(e){var t,n=function(){clearTimeout(s),li&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,100);li&&(t=requestAnimationFrame(n))}function fn(e){var t=$,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),$=t}function Rs(e){var t=$;e.__c=e.__(),$=t}function du(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function Do(e,t){return typeof t=="function"?t(e):t}var fu=0;function st(e,t,n,s,r,i){var o,a,c={};for(a in t)a=="ref"?o=t[a]:c[a]=t[a];var h={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--fu,__source:r,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)c[a]===void 0&&(c[a]=o[a]);return C.vnode&&C.vnode(h),h}const pu=({parentSubmit:e,parentChange:t,user:n,text:s})=>{const r=({currentTarget:o})=>t(o.value);return st("form",{onSubmit:o=>{o.preventDefault(),e({user:n,text:s})},children:[st("label",{children:["logged in as ",st("strong",{class:"font-extrabold",children:n})]}),st("input",{placeholder:"type and press enter to chat",class:"rounded-md border border-slate-500 p-2 outline-blue-500 w-full mb-2",type:"text",value:s,onChange:r})]})},gu=({messages:e})=>st("ul",{children:e.map((t,n)=>st("li",{class:"rounded-md bg-blue-100 my-3 p-2",children:[st("h2",{class:"text-sm",children:[st("strong",{class:"font-extrabold",children:t.user})," says:"]}),st("p",{children:t.text})]},n))});/**
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
 */const ko=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},mu=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,h=c?e[r+2]:0,u=i>>2,l=(i&3)<<4|a>>4;let d=(a&15)<<2|h>>6,f=h&63;c||(f=64,o||(d=64)),s.push(n[u],n[l],n[d],n[f])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ko(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):mu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const h=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||h==null||l==null)throw Error();const d=i<<2|a>>4;if(s.push(d),h!==64){const f=a<<4&240|h>>2;if(s.push(f),l!==64){const m=h<<6&192|l;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},yu=function(e){const t=ko(e);return No.encodeByteArray(t,!0)},En=function(e){return yu(e).replace(/\./g,"")},vu=function(e){try{return No.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function _u(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const wu=()=>_u().__FIREBASE_DEFAULTS__,Eu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Tu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vu(e[1]);return t&&JSON.parse(t)},xo=()=>{try{return wu()||Eu()||Tu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},bu=e=>{var t,n;return(n=(t=xo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Iu=e=>{const t=bu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Su=()=>{var e;return(e=xo())===null||e===void 0?void 0:e.config};/**
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
 */class Cu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Au(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[En(JSON.stringify(n)),En(JSON.stringify(o)),a].join(".")}function Du(){try{return typeof indexedDB=="object"}catch{return!1}}function ku(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Nu="FirebaseError";class ue extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Nu,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?xu(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ue(r,a,s)}}function xu(e,t){return e.replace(Ru,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Ru=/\{\$([^}]+)}/g;function Ls(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(di(i)&&di(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function di(e){return e!==null&&typeof e=="object"}/**
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
 */function te(e){return e&&e._delegate?e._delegate:e}class De{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class Lu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Cu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ou(t))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Rt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rt){return this.instances.has(t)}getOptions(t=Rt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mu(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rt){return this.component?this.component.multipleInstances?t:Rt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mu(e){return e===Rt?void 0:e}function Ou(e){return e.instantiationMode==="EAGER"}/**
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
 */class Pu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Lu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));const Fu={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Vu=x.INFO,Uu={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},$u=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Uu[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lo{constructor(t){this.name=t,this._logLevel=Vu,this._logHandler=$u,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const Bu=(e,t)=>t.some(n=>e instanceof n);let fi,pi;function qu(){return fi||(fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ju(){return pi||(pi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mo=new WeakMap,Ms=new WeakMap,Oo=new WeakMap,ys=new WeakMap,hr=new WeakMap;function Hu(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Tt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mo.set(n,e)}).catch(()=>{}),hr.set(t,e),t}function Ku(e){if(Ms.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ms.set(e,t)}let Os={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ms.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Oo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function zu(e){Os=e(Os)}function Gu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(vs(this),t,...n);return Oo.set(s,t.sort?t.sort():[t]),Tt(s)}:ju().includes(e)?function(...t){return e.apply(vs(this),t),Tt(Mo.get(this))}:function(...t){return Tt(e.apply(vs(this),t))}}function Wu(e){return typeof e=="function"?Gu(e):(e instanceof IDBTransaction&&Ku(e),Bu(e,qu())?new Proxy(e,Os):e)}function Tt(e){if(e instanceof IDBRequest)return Hu(e);if(ys.has(e))return ys.get(e);const t=Wu(e);return t!==e&&(ys.set(e,t),hr.set(t,e)),t}const vs=e=>hr.get(e);function Qu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Xu=["get","getKey","getAll","getAllKeys","count"],Yu=["put","add","delete","clear"],_s=new Map;function gi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_s.get(t))return _s.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Yu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),r&&c.done]))[0]};return _s.set(t,i),i}zu(e=>({...e,get:(t,n,s)=>gi(t,n)||e.get(t,n,s),has:(t,n)=>!!gi(t,n)||e.has(t,n)}));/**
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
 */class Ju{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ps="@firebase/app",mi="0.9.3";/**
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
 */const $t=new Lo("@firebase/app"),th="@firebase/app-compat",eh="@firebase/analytics-compat",nh="@firebase/analytics",sh="@firebase/app-check-compat",rh="@firebase/app-check",ih="@firebase/auth",oh="@firebase/auth-compat",ah="@firebase/database",ch="@firebase/database-compat",uh="@firebase/functions",hh="@firebase/functions-compat",lh="@firebase/installations",dh="@firebase/installations-compat",fh="@firebase/messaging",ph="@firebase/messaging-compat",gh="@firebase/performance",mh="@firebase/performance-compat",yh="@firebase/remote-config",vh="@firebase/remote-config-compat",_h="@firebase/storage",wh="@firebase/storage-compat",Eh="@firebase/firestore",Th="@firebase/firestore-compat",bh="firebase",Ih="9.17.1";/**
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
 */const Fs="[DEFAULT]",Sh={[Ps]:"fire-core",[th]:"fire-core-compat",[nh]:"fire-analytics",[eh]:"fire-analytics-compat",[rh]:"fire-app-check",[sh]:"fire-app-check-compat",[ih]:"fire-auth",[oh]:"fire-auth-compat",[ah]:"fire-rtdb",[ch]:"fire-rtdb-compat",[uh]:"fire-fn",[hh]:"fire-fn-compat",[lh]:"fire-iid",[dh]:"fire-iid-compat",[fh]:"fire-fcm",[ph]:"fire-fcm-compat",[gh]:"fire-perf",[mh]:"fire-perf-compat",[yh]:"fire-rc",[vh]:"fire-rc-compat",[_h]:"fire-gcs",[wh]:"fire-gcs-compat",[Eh]:"fire-fst",[Th]:"fire-fst-compat","fire-js":"fire-js",[bh]:"fire-js-all"};/**
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
 */const Tn=new Map,Vs=new Map;function Ch(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function bn(e){const t=e.name;if(Vs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Vs.set(t,e);for(const n of Tn.values())Ch(n,e);return!0}function Ah(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Dh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Ro("app","Firebase",Dh);/**
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
 */class kh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nh=Ih;function Po(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Fs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw bt.create("bad-app-name",{appName:String(r)});if(n||(n=Su()),!n)throw bt.create("no-options");const i=Tn.get(r);if(i){if(Ls(n,i.options)&&Ls(s,i.config))return i;throw bt.create("duplicate-app",{appName:r})}const o=new Pu(r);for(const c of Vs.values())o.addComponent(c);const a=new kh(n,s,o);return Tn.set(r,a),a}function xh(e=Fs){const t=Tn.get(e);if(!t&&e===Fs)return Po();if(!t)throw bt.create("no-app",{appName:e});return t}function Xt(e,t,n){var s;let r=(s=Sh[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}bn(new De(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Rh="firebase-heartbeat-database",Lh=1,ke="firebase-heartbeat-store";let ws=null;function Fo(){return ws||(ws=Qu(Rh,Lh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ke)}}}).catch(e=>{throw bt.create("idb-open",{originalErrorMessage:e.message})})),ws}async function Mh(e){try{return(await Fo()).transaction(ke).objectStore(ke).get(Vo(e))}catch(t){if(t instanceof ue)$t.warn(t.message);else{const n=bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function yi(e,t){try{const s=(await Fo()).transaction(ke,"readwrite");return await s.objectStore(ke).put(t,Vo(e)),s.done}catch(n){if(n instanceof ue)$t.warn(n.message);else{const s=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(s.message)}}}function Vo(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Oh=1024,Ph=30*24*60*60*1e3;class Fh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ph}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vi(),{heartbeatsToSend:n,unsentEntries:s}=Vh(this._heartbeatsCache.heartbeats),r=En(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vi(){return new Date().toISOString().substring(0,10)}function Vh(e,t=Oh){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),_i(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_i(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Uh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Du()?ku().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function _i(e){return En(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function $h(e){bn(new De("platform-logger",t=>new Ju(t),"PRIVATE")),bn(new De("heartbeat",t=>new Fh(t),"PRIVATE")),Xt(Ps,mi,e),Xt(Ps,mi,"esm2017"),Xt("fire-js","")}$h("");var Bh="firebase",qh="9.17.1";/**
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
 */Xt(Bh,qh,"app");var jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,lr=lr||{},I=jh||self;function In(){}function qn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Be(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Hh(e){return Object.prototype.hasOwnProperty.call(e,Es)&&e[Es]||(e[Es]=++Kh)}var Es="closure_uid_"+(1e9*Math.random()>>>0),Kh=0;function zh(e,t,n){return e.call.apply(e.bind,arguments)}function Gh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=zh:Z=Gh,Z.apply(null,arguments)}function sn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Dt(){this.s=this.s,this.o=this.o}var Wh=0;Dt.prototype.s=!1;Dt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Wh!=0)&&Hh(this)};Dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Uo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function dr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function wi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Qh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",In,t),I.removeEventListener("test",In,t)}catch{}return e}();function Sn(e){return/^[\s\xa0]*$/.test(e)}var Ei=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ts(e,t){return e<t?-1:e>t?1:0}function jn(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function ht(e){return jn().indexOf(e)!=-1}function fr(e){return fr[" "](e),e}fr[" "]=In;function Xh(e){var t=Zh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Yh=ht("Opera"),ee=ht("Trident")||ht("MSIE"),$o=ht("Edge"),Us=$o||ee,Bo=ht("Gecko")&&!(jn().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge"))&&!(ht("Trident")||ht("MSIE"))&&!ht("Edge"),Jh=jn().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge");function qo(){var e=I.document;return e?e.documentMode:void 0}var Cn;t:{var bs="",Is=function(){var e=jn();if(Bo)return/rv:([^\);]+)(\)|;)/.exec(e);if($o)return/Edge\/([\d\.]+)/.exec(e);if(ee)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Jh)return/WebKit\/(\S+)/.exec(e);if(Yh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Is&&(bs=Is?Is[1]:""),ee){var Ss=qo();if(Ss!=null&&Ss>parseFloat(bs)){Cn=String(Ss);break t}}Cn=bs}var Zh={};function tl(){return Xh(function(){let e=0;const t=Ei(String(Cn)).split("."),n=Ei("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Ts(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ts(r[2].length==0,i[2].length==0)||Ts(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var $s;if(I.document&&ee){var Ti=qo();$s=Ti||parseInt(Cn,10)||void 0}else $s=void 0;var el=$s;function Ne(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Bo){t:{try{fr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:nl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ne.X.h.call(this)}}Q(Ne,tt);var nl={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var qe="closure_listenable_"+(1e6*Math.random()|0),sl=0;function rl(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++sl,this.ba=this.ea=!1}function Hn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function pr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function jo(e){const t={};for(const n in e)t[n]=e[n];return t}const bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ho(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<bi.length;i++)n=bi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Kn(e){this.src=e,this.g={},this.h=0}Kn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=qs(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new rl(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Bs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Uo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Hn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function qs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),Cs={};function Ko(e,t,n,s,r){if(s&&s.once)return Go(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ko(e,t[i],n,s,r);return null}return n=vr(n),e&&e[qe]?e.N(t,n,Be(s)?!!s.capture:!!s,r):zo(e,t,n,!1,s,r)}function zo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Be(r)?!!r.capture:!!r,a=yr(e);if(a||(e[gr]=a=new Kn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=il(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Qh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Qo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function il(){function e(n){return t.call(e.src,e.listener,n)}const t=ol;return e}function Go(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Go(e,t[i],n,s,r);return null}return n=vr(n),e&&e[qe]?e.O(t,n,Be(s)?!!s.capture:!!s,r):zo(e,t,n,!0,s,r)}function Wo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Wo(e,t[i],n,s,r);else s=Be(s)?!!s.capture:!!s,n=vr(n),e&&e[qe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=qs(i,n,s,r),-1<n&&(Hn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=yr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qs(t,n,s,r)),(n=-1<e?t[e]:null)&&mr(n))}function mr(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[qe])Bs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Qo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=yr(t))?(Bs(n,e),n.h==0&&(n.src=null,t[gr]=null)):Hn(e)}}}function Qo(e){return e in Cs?Cs[e]:Cs[e]="on"+e}function ol(e,t){if(e.ba)e=!0;else{t=new Ne(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&mr(e),e=n.call(s,t)}return e}function yr(e){return e=e[gr],e instanceof Kn?e:null}var As="__closure_events_fn_"+(1e9*Math.random()>>>0);function vr(e){return typeof e=="function"?e:(e[As]||(e[As]=function(t){return e.handleEvent(t)}),e[As])}function z(){Dt.call(this),this.i=new Kn(this),this.P=this,this.I=null}Q(z,Dt);z.prototype[qe]=!0;z.prototype.removeEventListener=function(e,t,n,s){Wo(this,e,t,n,s)};function W(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var r=t;t=new tt(s,e),Ho(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=rn(o,s,!0,t)&&r}if(o=t.g=e,r=rn(o,s,!0,t)&&r,r=rn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=rn(o,s,!1,t)&&r}z.prototype.M=function(){if(z.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Hn(n[s]);delete e.g[t],e.h--}}this.I=null};z.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};z.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function rn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Bs(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var _r=I.JSON.stringify;function al(){var e=Jo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class cl{constructor(){this.h=this.g=null}add(t,n){const s=Xo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Xo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ul,e=>e.reset());class ul{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hl(e){I.setTimeout(()=>{throw e},0)}function Yo(e,t){js||ll(),Hs||(js(),Hs=!0),Jo.add(e,t)}var js;function ll(){var e=I.Promise.resolve(void 0);js=function(){e.then(dl)}}var Hs=!1,Jo=new cl;function dl(){for(var e;e=al();){try{e.h.call(e.g)}catch(n){hl(n)}var t=Xo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Hs=!1}function zn(e,t){z.call(this),this.h=e||1,this.g=t||I,this.j=Z(this.lb,this),this.l=Date.now()}Q(zn,z);y=zn.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),W(this,"tick"),this.ca&&(wr(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wr(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){zn.X.M.call(this),wr(this),delete this.g};function Er(e,t,n){if(typeof e=="function")n&&(e=Z(e,n));else if(e&&typeof e.handleEvent=="function")e=Z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Zo(e){e.g=Er(()=>{e.g=null,e.i&&(e.i=!1,Zo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class fl extends Dt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Zo(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(e){Dt.call(this),this.h=e,this.g={}}Q(xe,Dt);var Ii=[];function ta(e,t,n,s){Array.isArray(n)||(n&&(Ii[0]=n.toString()),n=Ii);for(var r=0;r<n.length;r++){var i=Ko(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ea(e){pr(e.g,function(t,n){this.g.hasOwnProperty(n)&&mr(t)},e),e.g={}}xe.prototype.M=function(){xe.X.M.call(this),ea(this)};xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gn(){this.g=!0}Gn.prototype.Aa=function(){this.g=!1};function pl(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function gl(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Qt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+yl(e,n)+(s?" "+s:"")})}function ml(e,t){e.info(function(){return"TIMEOUT: "+t})}Gn.prototype.info=function(){};function yl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _r(n)}catch{return t}}var jt={},Si=null;function Wn(){return Si=Si||new z}jt.Pa="serverreachability";function na(e){tt.call(this,jt.Pa,e)}Q(na,tt);function Re(e){const t=Wn();W(t,new na(t))}jt.STAT_EVENT="statevent";function sa(e,t){tt.call(this,jt.STAT_EVENT,e),this.stat=t}Q(sa,tt);function nt(e){const t=Wn();W(t,new sa(t,e))}jt.Qa="timingevent";function ra(e,t){tt.call(this,jt.Qa,e),this.size=t}Q(ra,tt);function je(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Qn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ia={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Tr(){}Tr.prototype.h=null;function Ci(e){return e.h||(e.h=e.i())}function oa(){}var He={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function br(){tt.call(this,"d")}Q(br,tt);function Ir(){tt.call(this,"c")}Q(Ir,tt);var Ks;function Xn(){}Q(Xn,Tr);Xn.prototype.g=function(){return new XMLHttpRequest};Xn.prototype.i=function(){return{}};Ks=new Xn;function Ke(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new xe(this),this.O=vl,e=Us?125:void 0,this.T=new zn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new aa}function aa(){this.i=null,this.g="",this.h=!1}var vl=45e3,zs={},An={};y=Ke.prototype;y.setTimeout=function(e){this.O=e};function Gs(e,t,n){e.K=1,e.v=Jn(yt(t)),e.s=n,e.P=!0,ca(e,null)}function ca(e,t){e.F=Date.now(),ze(e),e.A=yt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),ma(n.i,"t",s),e.C=0,n=e.l.H,e.h=new aa,e.g=Fa(e.l,n?t:null,!e.s),0<e.N&&(e.L=new fl(Z(e.La,e,e.g),e.N)),ta(e.S,e.g,"readystatechange",e.ib),t=e.H?jo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Re(),pl(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&gt(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)t:{const u=gt(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>u)&&(u!=3||Us||this.g&&(this.h.h||this.g.fa()||Ni(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?Re(3):Re(2)),Yn(this);var n=this.g.aa();this.Y=n;e:if(ua(this)){var s=Ni(this.g);e="";var r=s.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Ee(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,gl(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Sn(a)){var h=a;break e}}h=null}if(n=h)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ws(this,n);else{this.i=!1,this.o=3,nt(12),Mt(this),Ee(this);break t}}this.P?(ha(this,u,o),Us&&this.i&&u==3&&(ta(this.S,this.T,"tick",this.hb),this.T.start())):(Qt(this.j,this.m,o,null),Ws(this,o)),u==4&&Mt(this),this.i&&!this.I&&(u==4?La(this.l,this):(this.i=!1,ze(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Mt(this),Ee(this)}}}catch{}finally{}};function ua(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function ha(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=_l(e,n),r==An){t==4&&(e.o=4,nt(14),s=!1),Qt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==zs){e.o=4,nt(15),Qt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Qt(e.j,e.m,r,null),Ws(e,r);ua(e)&&r!=An&&r!=zs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,nt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xr(t),t.K=!0,nt(11))):(Qt(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Ee(e))}y.hb=function(){if(this.g){var e=gt(this.g),t=this.g.fa();this.C<t.length&&(Yn(this),ha(this,e,t),this.i&&e!=4&&ze(this))}};function _l(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?An:(n=Number(t.substring(n,s)),isNaN(n)?zs:(s+=1,s+n>t.length?An:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,Mt(this)};function ze(e){e.V=Date.now()+e.O,la(e,e.O)}function la(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=je(Z(e.gb,e),t)}function Yn(e){e.B&&(I.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(ml(this.j,this.A),this.K!=2&&(Re(),nt(17)),Mt(this),this.o=2,Ee(this)):la(this,this.V-e)};function Ee(e){e.l.G==0||e.I||La(e.l,e)}function Mt(e){Yn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,wr(e.T),ea(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ws(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Qs(n.h,e))){if(!e.J&&Qs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Nn(n),es(n);else break t;Nr(n),nt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=je(Z(n.cb,n),6e3));if(1>=_a(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ot(n,11)}else if((e.J||n.g==e)&&Nn(n),!Sn(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let h=r[t];if(n.T=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.I=h[1],n.ka=h[2];const u=h[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const l=h[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=e.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sr(i,i.h),i.h=null))}if(s.D){const b=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,O(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Pa(s,s.H?s.ka:null,s.V),o.J){wa(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Yn(a),ze(a)),s.g=o}else xa(s);0<n.i.length&&ns(n)}else h[0]!="stop"&&h[0]!="close"||Ot(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Ot(n,7):kr(n):h[0]!="noop"&&n.l&&n.l.wa(h),n.A=0)}}Re(4)}catch{}}function wl(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(qn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function El(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(qn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function da(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(qn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=El(e),s=wl(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ft(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=t!==void 0?t:e.h,Dn(this,e.j),this.s=e.s,this.g=e.g,kn(this,e.m),this.l=e.l,t=e.i;var n=new Le;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ai(this,n),this.o=e.o}else e&&(n=String(e).match(fa))?(this.h=!!t,Dn(this,n[1]||"",!0),this.s=ye(n[2]||""),this.g=ye(n[3]||"",!0),kn(this,n[4]),this.l=ye(n[5]||"",!0),Ai(this,n[6]||"",!0),this.o=ye(n[7]||"")):(this.h=!!t,this.i=new Le(null,this.h))}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ve(t,Di,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ve(t,Di,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ve(n,n.charAt(0)=="/"?Sl:Il,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ve(n,Al)),e.join("")};function yt(e){return new Ft(e)}function Dn(e,t,n){e.j=n?ye(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function kn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ai(e,t,n){t instanceof Le?(e.i=t,Dl(e.i,e.h)):(n||(t=ve(t,Cl)),e.i=new Le(t,e.h))}function O(e,t,n){e.i.set(t,n)}function Jn(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ye(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,bl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function bl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Di=/[#\/\?@]/g,Il=/[#\?:]/g,Sl=/[#\?]/g,Cl=/[#\?@]/g,Al=/#/g;function Le(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Tl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Le.prototype;y.add=function(e,t){kt(this),this.i=null,e=he(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function pa(e,t){kt(e),t=he(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ga(e,t){return kt(e),t=he(e,t),e.g.has(t)}y.forEach=function(e,t){kt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};y.oa=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};y.W=function(e){kt(this);let t=[];if(typeof e=="string")ga(this,e)&&(t=t.concat(this.g.get(he(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return kt(this),this.i=null,e=he(this,e),ga(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ma(e,t,n){pa(e,t),0<n.length&&(e.i=null,e.g.set(he(e,t),dr(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function he(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Dl(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(pa(this,s),ma(this,r,n))},e)),e.j=t}var kl=class{constructor(t,n){this.h=t,this.g=n}};function ya(e){this.l=e||Nl,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Nl=10;function va(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function _a(e){return e.h?1:e.g?e.g.size:0}function Qs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Sr(e,t){e.g?e.g.add(t):e.h=t}function wa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ya.prototype.cancel=function(){if(this.i=Ea(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ea(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return dr(e.i)}function Cr(){}Cr.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};Cr.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function xl(){this.g=new Cr}function Rl(e,t,n){const s=n||"";try{da(e,function(r,i){let o=r;Be(r)&&(o=_r(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ll(e,t){const n=new Gn;if(I.Image){const s=new Image;s.onload=sn(on,n,s,"TestLoadImage: loaded",!0,t),s.onerror=sn(on,n,s,"TestLoadImage: error",!1,t),s.onabort=sn(on,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=sn(on,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function on(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Ge(e){this.l=e.ac||null,this.j=e.jb||!1}Q(Ge,Tr);Ge.prototype.g=function(){return new Zn(this.l,this.j)};Ge.prototype.i=function(e){return function(){return e}}({});function Zn(e,t){z.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ar,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(Zn,z);var Ar=0;y=Zn.prototype;y.open=function(e,t){if(this.readyState!=Ar)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Me(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=Ar};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ta(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Ta(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?We(this):Me(this),this.readyState==3&&Ta(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,We(this))};y.Ua=function(e){this.g&&(this.response=e,We(this))};y.ga=function(){this.g&&We(this)};function We(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Me(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Me(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ml=I.JSON.parse;function F(e){z.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ba,this.K=this.L=!1}Q(F,z);var ba="",Ol=/^https?$/i,Pl=["POST","PUT"];y=F.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ks.g(),this.C=this.u?Ci(this.u):Ci(Ks),this.g.onreadystatechange=Z(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){ki(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=I.FormData&&e instanceof I.FormData,!(0<=Uo(Pl,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ca(this),0<this.B&&((this.K=Fl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.qa,this)):this.A=Er(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){ki(this,i)}};function Fl(e){return ee&&tl()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof lr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function ki(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ia(e),ts(e)}function Ia(e){e.D||(e.D=!0,W(e,"complete"),W(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),ts(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ts(this,!0)),F.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?Sa(this):this.fb())};y.fb=function(){Sa(this)};function Sa(e){if(e.h&&typeof lr<"u"&&(!e.C[1]||gt(e)!=4||e.aa()!=2)){if(e.v&&gt(e)==4)Er(e.Ha,0,e);else if(W(e,"readystatechange"),gt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(fa)[1]||null;if(!r&&I.self&&I.self.location){var i=I.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ol.test(r?r.toLowerCase():"")}n=s}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var o=2<gt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Ia(e)}}finally{ts(e)}}}}function ts(e,t){if(e.g){Ca(e);const n=e.g,s=e.C[0]?In:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ca(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function gt(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ml(t)}};function Ni(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ba:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Aa(e){let t="";return pr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Dr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Aa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function me(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Da(e){this.Ca=0,this.i=[],this.j=new Gn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=me("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=me("baseRetryDelayMs",5e3,e),this.bb=me("retryDelaySeedMs",1e4,e),this.$a=me("forwardChannelMaxRetries",2,e),this.ta=me("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new ya(e&&e.concurrentRequestLimit),this.Fa=new xl,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Da.prototype;y.ma=8;y.G=1;function kr(e){if(ka(e),e.G==3){var t=e.U++,n=yt(e.F);O(n,"SID",e.I),O(n,"RID",t),O(n,"TYPE","terminate"),Qe(e,n),t=new Ke(e,e.j,t,void 0),t.K=2,t.v=Jn(yt(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=Fa(t.l,null),t.g.da(t.v)),t.F=Date.now(),ze(t)}Oa(e)}function es(e){e.g&&(xr(e),e.g.cancel(),e.g=null)}function ka(e){es(e),e.u&&(I.clearTimeout(e.u),e.u=null),Nn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function ns(e){va(e.h)||e.m||(e.m=!0,Yo(e.Ja,e),e.C=0)}function Vl(e,t){return _a(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=je(Z(e.Ja,e,t),Ma(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Ke(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=jo(i),Ho(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Na(this,r,t),n=yt(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),Qe(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Aa(i)))+"&"+t:this.o&&Dr(n,this.o,i)),Sr(this.h,r),this.Ya&&O(n,"TYPE","init"),this.O?(O(n,"$req",t),O(n,"SID","null"),r.Z=!0,Gs(r,n,null)):Gs(r,n,t),this.G=2}}else this.G==3&&(e?xi(this,e):this.i.length==0||va(this.h)||xi(this))};function xi(e,t){var n;t?n=t.m:n=e.U++;const s=yt(e.F);O(s,"SID",e.I),O(s,"RID",n),O(s,"AID",e.T),Qe(e,s),e.o&&e.s&&Dr(s,e.o,e.s),n=new Ke(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Na(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Sr(e.h,n),Gs(n,s,t)}function Qe(e,t){e.ia&&pr(e.ia,function(n,s){O(t,s,n)}),e.l&&da({},function(n,s){O(t,s,n)})}function Na(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Z(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let h=r[c].h;const u=r[c].g;if(h-=i,0>h)i=Math.max(0,r[c].h-100),a=!1;else try{Rl(u,o,"req"+h+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function xa(e){e.g||e.u||(e.Z=1,Yo(e.Ia,e),e.A=0)}function Nr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=je(Z(e.Ia,e),Ma(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,Ra(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=je(Z(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),es(this),Ra(this))};function xr(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Ra(e){e.g=new Ke(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=yt(e.sa);O(t,"RID","rpc"),O(t,"SID",e.I),O(t,"CI",e.L?"0":"1"),O(t,"AID",e.T),O(t,"TYPE","xmlhttp"),Qe(e,t),e.o&&e.s&&Dr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Jn(yt(t)),n.s=null,n.P=!0,ca(n,e)}y.cb=function(){this.v!=null&&(this.v=null,es(this),Nr(this),nt(19))};function Nn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function La(e,t){var n=null;if(e.g==t){Nn(e),xr(e),e.g=null;var s=2}else if(Qs(e.h,t))n=t.D,wa(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Wn(),W(s,new ra(s,n)),ns(e)}else xa(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Vl(e,t)||s==2&&Nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Ot(e,5);break;case 4:Ot(e,10);break;case 3:Ot(e,6);break;default:Ot(e,2)}}}function Ma(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ot(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Z(e.kb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Dn(n,"https"),Jn(n)),Ll(n.toString(),s)}else nt(2);e.G=0,e.l&&e.l.va(t),Oa(e),ka(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Oa(e){if(e.G=0,e.la=[],e.l){const t=Ea(e.h);(t.length!=0||e.i.length!=0)&&(wi(e.la,t),wi(e.la,e.i),e.h.i.length=0,dr(e.i),e.i.length=0),e.l.ua()}}function Pa(e,t,n){var s=n instanceof Ft?yt(n):new Ft(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),kn(s,s.m);else{var r=I.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Ft(null,void 0);s&&Dn(i,s),t&&(i.g=t),r&&kn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&O(s,n,t),O(s,"VER",e.ma),Qe(e,s),s}function Fa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new F(new Ge({jb:!0})):new F(e.ra),t.Ka(e.H),t}function Va(){}y=Va.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function xn(){if(ee&&!(10<=Number(el)))throw Error("Environmental error: no available transport.")}xn.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){z.call(this),this.g=new Da(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Sn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Sn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new le(this)}Q(rt,z);rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;nt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Pa(e,null,e.V),ns(e)};rt.prototype.close=function(){kr(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=_r(e),e=n);t.i.push(new kl(t.ab++,e)),t.G==3&&ns(t)};rt.prototype.M=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,rt.X.M.call(this)};function Ua(e){br.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(Ua,br);function $a(){Ir.call(this),this.status=1}Q($a,Ir);function le(e){this.g=e}Q(le,Va);le.prototype.xa=function(){W(this.g,"a")};le.prototype.wa=function(e){W(this.g,new Ua(e))};le.prototype.va=function(e){W(this.g,new $a)};le.prototype.ua=function(){W(this.g,"b")};xn.prototype.createWebChannel=xn.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Qn.NO_ERROR=0;Qn.TIMEOUT=8;Qn.HTTP_ERROR=6;ia.COMPLETE="complete";oa.EventType=He;He.OPEN="a";He.CLOSE="b";He.ERROR="c";He.MESSAGE="d";z.prototype.listen=z.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.Oa;F.prototype.getLastErrorCode=F.prototype.Ea;F.prototype.getStatus=F.prototype.aa;F.prototype.getResponseJson=F.prototype.Sa;F.prototype.getResponseText=F.prototype.fa;F.prototype.send=F.prototype.da;F.prototype.setWithCredentials=F.prototype.Ka;var Ul=function(){return new xn},$l=function(){return Wn()},Ds=Qn,Bl=ia,ql=jt,Ri={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},jl=Ge,an=oa,Hl=F;const Li="@firebase/firestore";/**
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
 */class X{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
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
 */let de="9.17.1";/**
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
 */const Bt=new Lo("@firebase/firestore");function Mi(){return Bt.logLevel}function v(e,...t){if(Bt.logLevel<=x.DEBUG){const n=t.map(Rr);Bt.debug(`Firestore (${de}): ${e}`,...n)}}function vt(e,...t){if(Bt.logLevel<=x.ERROR){const n=t.map(Rr);Bt.error(`Firestore (${de}): ${e}`,...n)}}function Xs(e,...t){if(Bt.logLevel<=x.WARN){const n=t.map(Rr);Bt.warn(`Firestore (${de}): ${e}`,...n)}}function Rr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function T(e="Unexpected state"){const t=`FIRESTORE (${de}) INTERNAL ASSERTION FAILED: `+e;throw vt(t),new Error(t)}function M(e,t){e||T()}function A(e,t){return e}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ue{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Ba{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class zl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gl{constructor(t){this.t=t,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Ba(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new X(t)}}class Wl{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(M(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ql{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Wl(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yl{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.A=n.token,new Xl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Jl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class qa{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Jl(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function R(e,t){return e<t?-1:e>t?1:0}function ne(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new q(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new q(0,0))}static max(){return new S(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oe{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class P extends Oe{construct(t,n,s){return new P(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(g.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new P(n)}static emptyPath(){return new P([])}}const Zl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Oe{construct(t,n,s){return new J(t,n,s)}static isValidIdentifier(t){return Zl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new E(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
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
 */class _{constructor(t){this.path=t}static fromPath(t){return new _(P.fromString(t))}static fromName(t){return new _(P.fromString(t).popFirst(5))}static empty(){return new _(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&P.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return P.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _(new P(t.slice()))}}function td(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=S.fromTimestamp(s===1e9?new q(n+1,0):new q(n,s));return new St(r,_.empty(),t)}function ed(e){return new St(e.readTime,e.key,-1)}class St{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new St(S.min(),_.empty(),-1)}static max(){return new St(S.max(),_.empty(),-1)}}function nd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=_.comparator(e.documentKey,t.documentKey),n!==0?n:R(e.largestBatchId,t.largestBatchId))}/**
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
 */const sd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Xe(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==sd)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(r=>r?p.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new p((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(u=>{o[h]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new p((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Ye(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Lr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Lr.at=-1;/**
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
 */class id{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Pe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Pe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Pe&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function Oi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ja(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */function ss(e){return e==null}function Rn(e){return e===0&&1/e==-1/0}function od(e){return typeof e=="number"&&Number.isInteger(e)&&!Rn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class et{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new et(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new et(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}et.EMPTY_BYTE_STRING=new et("");const ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(e){if(M(!!e),typeof e=="string"){let t=0;const n=ad.exec(e);if(M(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function se(e){return typeof e=="string"?et.fromBase64String(e):et.fromUint8Array(e)}/**
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
 */function Ha(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ka(e){const t=e.mapValue.fields.__previous_value__;return Ha(t)?Ka(t):t}function Fe(e){const t=Ct(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
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
 */const cn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ha(e)?4:cd(e)?9007199254740991:10:T()}function dt(e,t){if(e===t)return!0;const n=qt(e);if(n!==qt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fe(e).isEqual(Fe(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ct(s.timestampValue),o=Ct(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return se(s.bytesValue).isEqual(se(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return U(s.geoPointValue.latitude)===U(r.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return U(s.integerValue)===U(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=U(s.doubleValue),o=U(r.doubleValue);return i===o?Rn(i)===Rn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ne(e.arrayValue.values||[],t.arrayValue.values||[],dt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Oi(i)!==Oi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!dt(i[a],o[a])))return!1;return!0}(e,t);default:return T()}}function Ve(e,t){return(e.values||[]).find(n=>dt(n,t))!==void 0}function re(e,t){if(e===t)return 0;const n=qt(e),s=qt(t);if(n!==s)return R(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=U(r.integerValue||r.doubleValue),a=U(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Pi(e.timestampValue,t.timestampValue);case 4:return Pi(Fe(e),Fe(t));case 5:return R(e.stringValue,t.stringValue);case 6:return function(r,i){const o=se(r),a=se(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=R(o[c],a[c]);if(h!==0)return h}return R(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=R(U(r.latitude),U(i.latitude));return o!==0?o:R(U(r.longitude),U(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=re(o[c],a[c]);if(h)return h}return R(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===cn.mapValue&&i===cn.mapValue)return 0;if(r===cn.mapValue)return 1;if(i===cn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let u=0;u<a.length&&u<h.length;++u){const l=R(a[u],h[u]);if(l!==0)return l;const d=re(o[a[u]],c[h[u]]);if(d!==0)return d}return R(a.length,h.length)}(e.mapValue,t.mapValue);default:throw T()}}function Pi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return R(e,t);const n=Ct(e),s=Ct(t),r=R(n.seconds,s.seconds);return r!==0?r:R(n.nanos,s.nanos)}function ie(e){return Ys(e)}function Ys(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Ct(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?se(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,_.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ys(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ys(s.fields[a])}`;return i+"}"}(e.mapValue):T();var t,n}function Js(e){return!!e&&"integerValue"in e}function Mr(e){return!!e&&"arrayValue"in e}function Fi(e){return!!e&&"nullValue"in e}function Vi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pn(e){return!!e&&"mapValue"in e}function Te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fe(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Te(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function cd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ln{constructor(t,n){this.position=t,this.inclusive=n}}function Ui(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=re(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $i(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!dt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class za{}class B extends za{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new hd(t,n,s):n==="array-contains"?new fd(t,s):n==="in"?new pd(t,s):n==="not-in"?new gd(t,s):n==="array-contains-any"?new md(t,s):new B(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new ld(t,s):new dd(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(re(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.matchesComparison(re(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ft extends za{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new ft(t,n)}matches(t){return Ga(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Ga(e){return e.op==="and"}function Wa(e){return ud(e)&&Ga(e)}function ud(e){for(const t of e.filters)if(t instanceof ft)return!1;return!0}function Zs(e){if(e instanceof B)return e.field.canonicalString()+e.op.toString()+ie(e.value);if(Wa(e))return e.filters.map(t=>Zs(t)).join(",");{const t=e.filters.map(n=>Zs(n)).join(",");return`${e.op}(${t})`}}function Qa(e,t){return e instanceof B?function(n,s){return s instanceof B&&n.op===s.op&&n.field.isEqual(s.field)&&dt(n.value,s.value)}(e,t):e instanceof ft?function(n,s){return s instanceof ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Qa(i,s.filters[o]),!0):!1}(e,t):void T()}function Xa(e){return e instanceof B?function(t){return`${t.field.canonicalString()} ${t.op} ${ie(t.value)}`}(e):e instanceof ft?function(t){return t.op.toString()+" {"+t.getFilters().map(Xa).join(" ,")+"}"}(e):"Filter"}class hd extends B{constructor(t,n,s){super(t,n,s),this.key=_.fromName(s.referenceValue)}matches(t){const n=_.comparator(t.key,this.key);return this.matchesComparison(n)}}class ld extends B{constructor(t,n){super(t,"in",n),this.keys=Ya("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class dd extends B{constructor(t,n){super(t,"not-in",n),this.keys=Ya("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ya(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class fd extends B{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Mr(n)&&Ve(n.arrayValue,this.value)}}class pd extends B{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ve(this.value.arrayValue,n)}}class gd extends B{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ve(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ve(this.value.arrayValue,n)}}class md extends B{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Mr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ve(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class be{constructor(t,n="asc"){this.field=t,this.dir=n}}function yd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class H{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new H(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new H(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new un(this.root,t,this.comparator,!1)}getReverseIterator(){return new un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new un(this.root,t,this.comparator,!0)}}class un{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??G.RED,this.left=r??G.EMPTY,this.right=i??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new G(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return G.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,r){return this}insert(e,t,n){return new G(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class j{constructor(t){this.comparator=t,this.data=new H(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bi(this.data.getIterator())}getIteratorFrom(t){return new Bi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new j(this.comparator);return n.data=t,n}}class Bi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new ut([])}unionWith(t){let n=new j(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ne(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!pn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Te(n)}setAll(t){let n=J.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Te(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());pn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return dt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];pn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){fe(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new at(Te(this.value))}}function Ja(e){const t=[];return fe(e.fields,(n,s)=>{const r=new J([n]);if(pn(s)){const i=Ja(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new ut(t)}/**
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
 */class Y{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,S.min(),S.min(),S.min(),at.empty(),0)}static newFoundDocument(t,n,s,r){return new Y(t,1,n,S.min(),s,r,0)}static newNoDocument(t,n){return new Y(t,2,n,S.min(),S.min(),at.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,S.min(),S.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vd{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function qi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new vd(e,t,n,s,r,i,o)}function Or(e){const t=A(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Zs(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ss(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ie(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ie(s)).join(",")),t.ft=n}return t.ft}function Pr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!yd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Qa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$i(e.startAt,t.startAt)&&$i(e.endAt,t.endAt)}function tr(e){return _.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class rs{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function _d(e,t,n,s,r,i,o,a){return new rs(e,t,n,s,r,i,o,a)}function Fr(e){return new rs(e)}function ji(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function wd(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ed(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Td(e){return e.collectionGroup!==null}function Yt(e){const t=A(e);if(t.dt===null){t.dt=[];const n=Ed(t),s=wd(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new be(n)),t.dt.push(new be(J.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new be(J.keyField(),i))}}}return t.dt}function _t(e){const t=A(e);if(!t._t)if(t.limitType==="F")t._t=qi(t.path,t.collectionGroup,Yt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Yt(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new be(i.field,o))}const s=t.endAt?new Ln(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ln(t.startAt.position,t.startAt.inclusive):null;t._t=qi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function er(e,t,n){return new rs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function is(e,t){return Pr(_t(e),_t(t))&&e.limitType===t.limitType}function Za(e){return`${Or(_t(e))}|lt:${e.limitType}`}function nr(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Xa(s)).join(", ")}]`),ss(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ie(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ie(s)).join(",")),`Target(${n})`}(_t(e))}; limitType=${e.limitType})`}function os(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):_.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Yt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ui(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Yt(n),s)||n.endAt&&!function(r,i,o){const a=Ui(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Yt(n),s))}(e,t)}function bd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tc(e){return(t,n)=>{let s=!1;for(const r of Yt(e)){const i=Id(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Id(e,t,n){const s=e.field.isKeyField()?_.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?re(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
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
 */function ec(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rn(t)?"-0":t}}function nc(e){return{integerValue:""+e}}function Sd(e,t){return od(t)?nc(t):ec(e,t)}/**
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
 */class as{constructor(){this._=void 0}}function Cd(e,t,n){return e instanceof Mn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ue?rc(e,t):e instanceof $e?ic(e,t):function(s,r){const i=sc(s,r),o=Hi(i)+Hi(s.gt);return Js(i)&&Js(s.gt)?nc(o):ec(s.yt,o)}(e,t)}function Ad(e,t,n){return e instanceof Ue?rc(e,t):e instanceof $e?ic(e,t):n}function sc(e,t){return e instanceof On?Js(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Mn extends as{}class Ue extends as{constructor(t){super(),this.elements=t}}function rc(e,t){const n=oc(t);for(const s of e.elements)n.some(r=>dt(r,s))||n.push(s);return{arrayValue:{values:n}}}class $e extends as{constructor(t){super(),this.elements=t}}function ic(e,t){let n=oc(t);for(const s of e.elements)n=n.filter(r=>!dt(r,s));return{arrayValue:{values:n}}}class On extends as{constructor(t,n){super(),this.yt=t,this.gt=n}}function Hi(e){return U(e.integerValue||e.doubleValue)}function oc(e){return Mr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Dd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ue&&s instanceof Ue||n instanceof $e&&s instanceof $e?ne(n.elements,s.elements,dt):n instanceof On&&s instanceof On?dt(n.gt,s.gt):n instanceof Mn&&s instanceof Mn}(e.transform,t.transform)}class kd{constructor(t,n){this.version=t,this.transformResults=n}}class mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mt}static exists(t){return new mt(void 0,t)}static updateTime(t){return new mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class cs{}function ac(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new uc(e.key,mt.none()):new Je(e.key,e.data,mt.none());{const n=e.data,s=at.empty();let r=new j(J.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ht(e.key,s,new ut(r.toArray()),mt.none())}}function Nd(e,t,n){e instanceof Je?function(s,r,i){const o=s.value.clone(),a=zi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ht?function(s,r,i){if(!gn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(cc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Ie(e,t,n,s){return e instanceof Je?function(r,i,o,a){if(!gn(r.precondition,i))return o;const c=r.value.clone(),h=Gi(r.fieldTransforms,a,i);return c.setAll(h),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ht?function(r,i,o,a){if(!gn(r.precondition,i))return o;const c=Gi(r.fieldTransforms,a,i),h=i.data;return h.setAll(cc(r)),h.setAll(c),i.convertToFoundDocument(i.version,h).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return gn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function xd(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=sc(s.transform,r||null);i!=null&&(n===null&&(n=at.empty()),n.set(s.field,i))}return n||null}function Ki(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ne(n,s,(r,i)=>Dd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Je extends cs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ht extends cs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function zi(e,t,n){const s=new Map;M(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Ad(o,a,n[r]))}return s}function Gi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Cd(i,o,t))}return s}class uc extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rd extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ld{constructor(t){this.count=t}}/**
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
 */var V,k;function Md(e){switch(e){default:return T();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function hc(e){if(e===void 0)return vt("GRPC error has no .code"),g.UNKNOWN;switch(e){case V.OK:return g.OK;case V.CANCELLED:return g.CANCELLED;case V.UNKNOWN:return g.UNKNOWN;case V.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case V.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case V.INTERNAL:return g.INTERNAL;case V.UNAVAILABLE:return g.UNAVAILABLE;case V.UNAUTHENTICATED:return g.UNAUTHENTICATED;case V.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case V.NOT_FOUND:return g.NOT_FOUND;case V.ALREADY_EXISTS:return g.ALREADY_EXISTS;case V.PERMISSION_DENIED:return g.PERMISSION_DENIED;case V.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case V.ABORTED:return g.ABORTED;case V.OUT_OF_RANGE:return g.OUT_OF_RANGE;case V.UNIMPLEMENTED:return g.UNIMPLEMENTED;case V.DATA_LOSS:return g.DATA_LOSS;default:return T()}}(k=V||(V={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){fe(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return ja(this.inner)}size(){return this.innerSize}}/**
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
 */const Od=new H(_.comparator);function wt(){return Od}const lc=new H(_.comparator);function _e(...e){let t=lc;for(const n of e)t=t.insert(n.key,n);return t}function dc(e){let t=lc;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Pt(){return Se()}function fc(){return Se()}function Se(){return new pe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Pd=new H(_.comparator),Fd=new j(_.comparator);function D(...e){let t=Fd;for(const n of e)t=t.add(n);return t}const Vd=new j(R);function pc(){return Vd}/**
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
 */class us{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,Ze.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new us(S.min(),r,pc(),wt(),D())}}class Ze{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Ze(s,n,D(),D(),D())}}/**
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
 */class mn{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class gc{constructor(t,n){this.targetId=t,this.Et=n}}class mc{constructor(t,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Wi{constructor(){this.At=0,this.Rt=Xi(),this.bt=et.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=D(),n=D(),s=D();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:T()}}),new Ze(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=Xi()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Ud{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=wt(),this.qt=Qi(),this.Ut=new j(R)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(tr(i))if(s===0){const o=new _(i.path);this.Qt(n,o,Y.newNoDocument(o,S.min()))}else M(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&tr(a.target)){const c=new _(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Y.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=D();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const h=this.Yt(c);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new us(t,n,this.Ut,this.Lt,s);return this.Lt=wt(),this.qt=Qi(),this.Ut=new j(R),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new Wi,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new j(R),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Wi),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Qi(){return new H(_.comparator)}function Xi(){return new H(_.comparator)}/**
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
 */const $d=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qd=(()=>({and:"AND",or:"OR"}))();class jd{constructor(t,n){this.databaseId=t,this.wt=n}}function Pn(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yc(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Hd(e,t){return Pn(e,t.toTimestamp())}function lt(e){return M(!!e),S.fromTimestamp(function(t){const n=Ct(t);return new q(n.seconds,n.nanos)}(e))}function Vr(e,t){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function vc(e){const t=P.fromString(e);return M(Tc(t)),t}function sr(e,t){return Vr(e.databaseId,t.path)}function ks(e,t){const n=vc(t);if(n.get(1)!==e.databaseId.projectId)throw new E(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new _(_c(n))}function rr(e,t){return Vr(e.databaseId,t)}function Kd(e){const t=vc(e);return t.length===4?P.emptyPath():_c(t)}function ir(e){return new P(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _c(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Yi(e,t,n){return{name:sr(e,t),fields:n.value.mapValue.fields}}function zd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,h){return c.wt?(M(h===void 0||typeof h=="string"),et.fromBase64String(h||"")):(M(h===void 0||h instanceof Uint8Array),et.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?g.UNKNOWN:hc(c.code);return new E(h,c.message||"")}(o);n=new mc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=ks(e,s.document.name),i=lt(s.document.updateTime),o=s.document.createTime?lt(s.document.createTime):S.min(),a=new at({mapValue:{fields:s.document.fields}}),c=Y.newFoundDocument(r,i,o,a),h=s.targetIds||[],u=s.removedTargetIds||[];n=new mn(h,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=ks(e,s.document),i=s.readTime?lt(s.readTime):S.min(),o=Y.newNoDocument(r,i),a=s.removedTargetIds||[];n=new mn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=ks(e,s.document),i=s.removedTargetIds||[];n=new mn([],i,r,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Ld(r),o=s.targetId;n=new gc(o,i)}}return n}function Gd(e,t){let n;if(t instanceof Je)n={update:Yi(e,t.key,t.value)};else if(t instanceof uc)n={delete:sr(e,t.key)};else if(t instanceof Ht)n={update:Yi(e,t.key,t.data),updateMask:nf(t.fieldMask)};else{if(!(t instanceof Rd))return T();n={verify:sr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Mn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ue)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $e)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof On)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Hd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(e,t.precondition)),n}function Wd(e,t){return e&&e.length>0?(M(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?lt(s.updateTime):lt(r);return i.isEqual(S.min())&&(i=lt(r)),new kd(i,s.transformResults||[])}(n,t))):[]}function Qd(e,t){return{documents:[rr(e,t.path)]}}function Xd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=rr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=rr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Ec(ft.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(h=>function(u){return{field:Gt(u.field),direction:Zd(u.dir)}}(h))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,h){return c.wt||ss(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Yd(e){let t=Kd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){M(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(u){const l=wc(u);return l instanceof ft&&Wa(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new be(Wt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,ss(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(u){const l=!!u.before,d=u.values||[];return new Ln(d,l)}(n.startAt));let h=null;return n.endAt&&(h=function(u){const l=!u.before,d=u.values||[];return new Ln(d,l)}(n.endAt)),_d(t,r,o,i,a,"F",c,h)}function Jd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function wc(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Wt(t.unaryFilter.field);return B.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Wt(t.unaryFilter.field);return B.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wt(t.unaryFilter.field);return B.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wt(t.unaryFilter.field);return B.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return B.create(Wt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ft.create(t.compositeFilter.filters.map(n=>wc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function Zd(e){return $d[e]}function tf(e){return Bd[e]}function ef(e){return qd[e]}function Gt(e){return{fieldPath:e.canonicalString()}}function Wt(e){return J.fromServerFormat(e.fieldPath)}function Ec(e){return e instanceof B?function(t){if(t.op==="=="){if(Vi(t.value))return{unaryFilter:{field:Gt(t.field),op:"IS_NAN"}};if(Fi(t.value))return{unaryFilter:{field:Gt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vi(t.value))return{unaryFilter:{field:Gt(t.field),op:"IS_NOT_NAN"}};if(Fi(t.value))return{unaryFilter:{field:Gt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gt(t.field),op:tf(t.op),value:t.value}}}(e):e instanceof ft?function(t){const n=t.getFilters().map(s=>Ec(s));return n.length===1?n[0]:{compositeFilter:{op:ef(t.op),filters:n}}}(e):T()}function nf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Tc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class sf{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Nd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ie(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ie(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=fc();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=ac(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&ne(this.mutations,t.mutations,(n,s)=>Ki(n,s))&&ne(this.baseMutations,t.baseMutations,(n,s)=>Ki(n,s))}}class Ur{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){M(t.mutations.length===s.length);let r=Pd;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ur(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class rf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ut{constructor(t,n,s,r,i=S.min(),o=S.min(),a=et.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Ut(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class of{constructor(t){this.ie=t}}function af(e){const t=Yd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?er(t,t.limit,"L"):t}/**
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
 */class cf{constructor(){this.Je=new uf}addToCollectionParentIndex(t,n){return this.Je.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(St.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(St.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class uf{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new j(P.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new j(P.comparator)).toArray()}}/**
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
 */class oe{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new oe(0)}static vn(){return new oe(-1)}}/**
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
 */class hf{constructor(){this.changes=new pe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 * Copyright 2022 Google LLC
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
 */class lf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class df{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Ie(s.mutation,r,ut.empty(),q.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const r=Pt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=_e();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Pt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=wt();const o=Se(),a=Se();return n.forEach((c,h)=>{const u=s.get(h.key);r.has(h.key)&&(u===void 0||u.mutation instanceof Ht)?i=i.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),Ie(u.mutation,h,u.mutation.getFieldMask(),q.now())):o.set(h.key,ut.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>{var l;return a.set(h,new lf(u,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Se();let r=new H((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let u=s.get(c)||ut.empty();u=a.applyToLocalView(h,u),s.set(c,u);const l=(r.get(a.batchId)||D()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),h=c.key,u=c.value,l=fc();u.forEach(d=>{if(!i.has(d)){const f=ac(n.get(d),s.get(d));f!==null&&l.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,l))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return _.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Td(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):p.resolve(Pt());let a=-1,c=i;return o.next(h=>p.forEach(h,(u,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(u)?p.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,D())).next(u=>({batchId:a,changes:dc(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new _(n)).next(s=>{let r=_e();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=_e();return this.indexManager.getCollectionParents(t,r).next(o=>p.forEach(o,a=>{const c=function(h,u){return new rs(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(h=>{h.forEach((u,l)=>{i=i.insert(u,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const h=c.getKey();i.get(h)===null&&(i=i.insert(h,Y.newInvalidDocument(h)))});let o=_e();return i.forEach((a,c)=>{const h=r.get(a);h!==void 0&&Ie(h.mutation,c,ut.empty(),q.now()),os(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class ff{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return p.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:lt(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:af(s.bundledQuery),readTime:lt(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class pf{constructor(){this.overlays=new H(_.comparator),this.es=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Pt();return p.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const r=Pt(),i=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new H((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let u=i.get(h.largestBatchId);u===null&&(u=Pt(),i=i.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=Pt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>a.set(h,u)),!(a.size()>=r)););return p.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new rf(n,s));let i=this.es.get(n);i===void 0&&(i=D(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class $r{constructor(){this.ns=new j(K.ss),this.rs=new j(K.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new K(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new K(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new _(new P([])),s=new K(n,t),r=new K(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new _(new P([])),s=new K(n,t),r=new K(n,t+1);let i=D();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new K(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class K{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return _.comparator(t.key,n.key)||R(t._s,n._s)}static os(t,n){return R(t._s,n._s)||_.comparator(t.key,n.key)}}/**
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
 */class gf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new j(K.ss)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sf(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new K(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new K(n,0),r=new K(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new j(R);return n.forEach(r=>{const i=new K(r,0),o=new K(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),p.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;_.isDocumentKey(i)||(i=i.child(""));const o=new K(new _(i),0);let a=new j(R);return this.gs.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(a=a.add(c._s)),!0)},o),p.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){M(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return p.forEach(n.mutations,r=>{const i=new K(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new K(n,0),r=this.gs.firstAfterOrEqual(s);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mf{constructor(t){this.Es=t,this.docs=new H(_.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let s=wt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Y.newInvalidDocument(r))}),p.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=wt();const o=n.path,a=new _(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:h,value:{document:u}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||nd(ed(u),s)<=0||(r.has(u.key)||os(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,s,r){T()}As(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new yf(this)}getSize(t){return p.resolve(this.size)}}class yf extends hf{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class vf{constructor(t){this.persistence=t,this.Rs=new pe(n=>Or(n),Pr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $r,this.targetCount=0,this.vs=oe.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),p.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new oe(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Dn(n),p.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Ps.containsKey(n))}}/**
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
 */class _f{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Lr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new vf(this),this.indexManager=new cf,this.remoteDocumentCache=function(s){return new mf(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new of(n),this.Ns=new ff(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new pf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new gf(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new wf(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return p.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class wf extends rd{constructor(t){super(),this.currentSequenceNumber=t}}class Br{constructor(t){this.persistence=t,this.Fs=new $r,this.$s=null}static Bs(t){return new Br(t)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),p.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Ls,s=>{const r=_.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,S.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return p.or([()=>p.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class qr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=D(),r=D();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new qr(t,n.fromCache,s,r)}}/**
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
 */class Ef{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(ji(n))return p.resolve(null);let s=_t(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=er(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=D(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const h=this.Fi(n,a);return this.$i(n,h,o,c.readTime)?this.ki(t,er(n,null,"F")):this.Bi(t,h,n,c)}))})))}Oi(t,n,s,r){return ji(n)||r.isEqual(S.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(Mi()<=x.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nr(n)),this.Bi(t,o,n,td(r,-1)))})}Fi(t,n){let s=new j(tc(t));return n.forEach((r,i)=>{os(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return Mi()<=x.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",nr(n)),this.Ni.getDocumentsMatchingQuery(t,n,St.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Tf{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new H(R),this.Ui=new pe(i=>Or(i),Pr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new df(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function bf(e,t,n,s){return new Tf(e,t,n,s)}async function bc(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=D();for(const h of r){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of i){a.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(h=>({ji:h,removedBatchIds:o,addedBatchIds:a}))})})}function If(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,h){const u=c.batch,l=u.keys();let d=p.resolve();return l.forEach(f=>{d=d.next(()=>h.getEntry(a,f)).next(m=>{const b=c.docVersions.get(f);M(b!==null),m.version.compareTo(b)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),h.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=D();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ic(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Sf(e,t){const n=A(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((u,l)=>{const d=r.get(l);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,l)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?f=f.withResumeToken(et.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(l,f),function(m,b,w){return m.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Cs.updateTargetData(i,f))});let c=wt(),h=D();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Cf(i,o,t.documentUpdates).next(u=>{c=u.Wi,h=u.zi})),!s.isEqual(S.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(l=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.qi=r,i))}function Cf(e,t,n){let s=D(),r=D();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=wt();return n.forEach((a,c)=>{const h=i.get(a);c.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Af(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Df(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,p.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Ut(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function or(e,t,n){const s=A(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ye(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function Ji(e,t,n){const s=A(e);let r=S.min(),i=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,h){const u=A(a),l=u.Ui.get(h);return l!==void 0?p.resolve(u.qi.get(l)):u.Cs.getTargetData(c,h)}(s,o,_t(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:S.min(),n?i:D())).next(a=>(kf(s,bd(t),a),{documents:a,Hi:i})))}function kf(e,t,n){let s=e.Ki.get(t)||S.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class Zi{constructor(){this.activeTargetIds=pc()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nf{constructor(){this.Lr=new Zi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Zi,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class xf{Ur(t){}shutdown(){}}/**
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
 */class to{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Rf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Lf{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class Mf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Xs("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+de,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=Rf[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new Hl;a.setWithCredentials(!0),a.listenOnce(Bl.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ds.NO_ERROR:const h=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(h)),i(h);break;case Ds.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new E(g.DEADLINE_EXCEEDED,"Request time out"));break;case Ds.HTTP_ERROR:const u=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let l=a.getResponseJson();Array.isArray(l)&&(l=l[0]);const d=l==null?void 0:l.error;if(d&&d.status&&d.message){const f=function(m){const b=m.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(b)>=0?b:g.UNKNOWN}(d.status);o(new E(f,d.message))}else o(new E(g.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(g.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ul(),o=$l(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new jl({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");v("Connection","Creating WebChannel: "+c,a);const h=i.createWebChannel(c,a);let u=!1,l=!1;const d=new Lf({Hr:m=>{l?v("Connection","Not sending because WebChannel is closed:",m):(u||(v("Connection","Opening WebChannel transport."),h.open(),u=!0),v("Connection","WebChannel sending:",m),h.send(m))},Jr:()=>h.close()}),f=(m,b,w)=>{m.listen(b,N=>{try{w(N)}catch(L){setTimeout(()=>{throw L},0)}})};return f(h,an.EventType.OPEN,()=>{l||v("Connection","WebChannel transport opened.")}),f(h,an.EventType.CLOSE,()=>{l||(l=!0,v("Connection","WebChannel transport closed"),d.io())}),f(h,an.EventType.ERROR,m=>{l||(l=!0,Xs("Connection","WebChannel transport errored:",m),d.io(new E(g.UNAVAILABLE,"The operation could not be completed")))}),f(h,an.EventType.MESSAGE,m=>{var b;if(!l){const w=m.data[0];M(!!w);const N=w,L=N.error||((b=N[0])===null||b===void 0?void 0:b.error);if(L){v("Connection","WebChannel received error:",L);const pt=L.status;let it=function(zt){const xt=V[zt];if(xt!==void 0)return hc(xt)}(pt),Nt=L.message;it===void 0&&(it=g.INTERNAL,Nt="Unknown error status: "+pt+" with message "+L.message),l=!0,d.io(new E(it,Nt)),h.close()}else v("Connection","WebChannel received:",w),d.ro(w)}}),f(o,ql.STAT_EVENT,m=>{m.stat===Ri.PROXY?v("Connection","Detected buffering proxy"):m.stat===Ri.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ns(){return typeof document<"u"?document:null}/**
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
 */function hs(e){return new jd(e,!0)}class Sc{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Cc{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Sc(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new E(g.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Of extends Cc{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=zd(this.yt,t),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?lt(i.readTime):S.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=ir(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=tr(a)?{documents:Qd(r,a)}:{query:Xd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=yc(r,i.resumeToken):i.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Pn(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=Jd(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=ir(this.yt),n.removeTarget=t,this.Bo(n)}}class Pf extends Cc{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Wd(t.writeResults,t.commitTime),s=lt(t.commitTime);return this.listener.Zo(s,n)}return M(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ir(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Gd(this.yt,s))};this.Bo(n)}}/**
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
 */class Ff extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new E(g.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(g.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(g.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Vf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(vt(n),this.ou=!1):v("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class Uf{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Kt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c._u.add(4),await tn(c),c.gu.set("Unknown"),c._u.delete(4),await ls(c)}(this))})}),this.gu=new Vf(s,r)}}async function ls(e){if(Kt(e))for(const t of e.wu)await t(!0)}async function tn(e){for(const t of e.wu)await t(!1)}function Ac(e,t){const n=A(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Kr(n)?Hr(n):ge(n).ko()&&jr(n,t))}function Dc(e,t){const n=A(e),s=ge(n);n.du.delete(t),s.ko()&&kc(n,t),n.du.size===0&&(s.ko()?s.Fo():Kt(n)&&n.gu.set("Unknown"))}function jr(e,t){e.yu.Ot(t.targetId),ge(e).zo(t)}function kc(e,t){e.yu.Ot(t),ge(e).Ho(t)}function Hr(e){e.yu=new Ud({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),ge(e).start(),e.gu.uu()}function Kr(e){return Kt(e)&&!ge(e).No()&&e.du.size>0}function Kt(e){return A(e)._u.size===0}function Nc(e){e.yu=void 0}async function $f(e){e.du.forEach((t,n)=>{jr(e,t)})}async function Bf(e,t){Nc(e),Kr(e)?(e.gu.hu(t),Hr(e)):e.gu.set("Unknown")}async function qf(e,t,n){if(e.gu.set("Online"),t instanceof mc&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Fn(e,s)}else if(t instanceof mn?e.yu.Kt(t):t instanceof gc?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(S.min()))try{const s=await Ic(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const h=r.du.get(c);h&&r.du.set(c,h.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),kc(r,a);const h=new Ut(c.target,a,1,c.sequenceNumber);jr(r,h)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Fn(e,s)}}async function Fn(e,t,n){if(!Ye(t))throw t;e._u.add(1),await tn(e),e.gu.set("Offline"),n||(n=()=>Ic(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await ls(e)})}function xc(e,t){return t().catch(n=>Fn(e,n,t))}async function ds(e){const t=A(e),n=At(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;jf(t);)try{const r=await Af(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,Hf(t,r)}catch(r){await Fn(t,r)}Rc(t)&&Lc(t)}function jf(e){return Kt(e)&&e.fu.length<10}function Hf(e,t){e.fu.push(t);const n=At(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Rc(e){return Kt(e)&&!At(e).No()&&e.fu.length>0}function Lc(e){At(e).start()}async function Kf(e){At(e).eu()}async function zf(e){const t=At(e);for(const n of e.fu)t.Xo(n.mutations)}async function Gf(e,t,n){const s=e.fu.shift(),r=Ur.from(s,t,n);await xc(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ds(e)}async function Wf(e,t){t&&At(e).Yo&&await async function(n,s){if(r=s.code,Md(r)&&r!==g.ABORTED){const i=n.fu.shift();At(n).Mo(),await xc(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ds(n)}var r}(e,t),Rc(e)&&Lc(e)}async function eo(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Kt(n);n._u.add(3),await tn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await ls(n)}async function Qf(e,t){const n=A(e);t?(n._u.delete(2),await ls(n)):t||(n._u.add(2),await tn(n),n.gu.set("Unknown"))}function ge(e){return e.pu||(e.pu=function(t,n,s){const r=A(t);return r.su(),new Of(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:$f.bind(null,e),Zr:Bf.bind(null,e),Wo:qf.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Kr(e)?Hr(e):e.gu.set("Unknown")):(await e.pu.stop(),Nc(e))})),e.pu}function At(e){return e.Iu||(e.Iu=function(t,n,s){const r=A(t);return r.su(),new Pf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:Kf.bind(null,e),Zr:Wf.bind(null,e),tu:zf.bind(null,e),Zo:Gf.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await ds(e)):(await e.Iu.stop(),e.fu.length>0&&(v("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class zr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new zr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gr(e,t){if(vt("AsyncQueue",`${t}: ${e}`),Ye(e))return new E(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Jt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=_e(),this.sortedSet=new H(this.comparator)}static emptySet(t){return new Jt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Jt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class no{constructor(){this.Tu=new H(_.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):T():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ae{constructor(t,n,s,r,i,o,a,c,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ae(t,n,Jt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&is(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Xf{constructor(){this.Au=void 0,this.listeners=[]}}class Yf{constructor(){this.queries=new pe(t=>Za(t),is),this.onlineState="Unknown",this.Ru=new Set}}async function Jf(e,t){const n=A(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Xf),r)try{i.Au=await n.onListen(s)}catch(o){const a=Gr(o,`Initialization of query '${nr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Wr(n)}async function Zf(e,t){const n=A(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function tp(e,t){const n=A(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Wr(n)}function ep(e,t,n){const s=A(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Wr(e){e.Ru.forEach(t=>{t.next()})}class np{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new ae(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
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
 */class Mc{constructor(t){this.key=t}}class Oc{constructor(t){this.key=t}}class sp{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=D(),this.mutatedKeys=D(),this.Gu=tc(t),this.Qu=new Jt(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new no,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,l)=>{const d=r.get(u),f=os(this.query,l)?l:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?m!==b&&(s.track({type:3,doc:f}),w=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),w=!0,(c&&this.Gu(f,c)>0||h&&this.Gu(f,h)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),w=!0):d&&!f&&(s.track({type:1,doc:d}),w=!0,(c||h)&&(a=!0)),w&&(f?(o=o.add(f),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((h,u)=>function(l,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return f(l)-f(d)}(h.type,u.type)||this.Gu(h.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new ae(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new no,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=D(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Oc(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new Mc(s))}),n}tc(t){this.qu=t.Hi,this.Ku=D();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return ae.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class rp{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ip{constructor(t){this.key=t,this.nc=!1}}class op{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new pe(a=>Za(a),is),this.rc=new Map,this.oc=new Set,this.uc=new H(_.comparator),this.cc=new Map,this.ac=new $r,this.hc={},this.lc=new Map,this.fc=oe.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ap(e,t){const n=yp(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Df(n.localStore,_t(t));n.isPrimaryClient&&Ac(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await cp(n,t,s,a==="current",o.resumeToken)}return r}async function cp(e,t,n,s,r){e._c=(l,d,f)=>async function(m,b,w,N){let L=b.view.Wu(w);L.$i&&(L=await Ji(m.localStore,b.query,!1).then(({documents:Nt})=>b.view.Wu(Nt,L)));const pt=N&&N.targetChanges.get(b.targetId),it=b.view.applyChanges(L,m.isPrimaryClient,pt);return ro(m,b.targetId,it.Xu),it.snapshot}(e,l,d,f);const i=await Ji(e.localStore,t,!0),o=new sp(t,i.Hi),a=o.Wu(i.documents),c=Ze.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),h=o.applyChanges(a,e.isPrimaryClient,c);ro(e,n,h.Xu);const u=new rp(t,n,o);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),h.snapshot}async function up(e,t){const n=A(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!is(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await or(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Dc(n.remoteStore,s.targetId),ar(n,s.targetId)}).catch(Xe)):(ar(n,s.targetId),await or(n.localStore,s.targetId,!0))}async function hp(e,t,n){const s=vp(e);try{const r=await function(i,o){const a=A(i),c=q.now(),h=o.reduce((d,f)=>d.add(f.key),D());let u,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=wt(),m=D();return a.Gi.getEntries(d,h).next(b=>{f=b,f.forEach((w,N)=>{N.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(b=>{u=b;const w=[];for(const N of o){const L=xd(N,u.get(N.key).overlayedDocument);L!=null&&w.push(new Ht(N.key,L,Ja(L.value.mapValue),mt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(b=>{l=b;const w=b.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,b.batchId,w)})}).then(()=>({batchId:l.batchId,changes:dc(u)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new H(R)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await en(s,r.changes),await ds(s.remoteStore)}catch(r){const i=Gr(r,"Failed to persist write");n.reject(i)}}async function Pc(e,t){const n=A(e);try{const s=await Sf(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(M(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?M(o.nc):r.removedDocuments.size>0&&(M(o.nc),o.nc=!1))}),await en(n,s,t)}catch(s){await Xe(s)}}function so(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=A(i);a.onlineState=o;let c=!1;a.queries.forEach((h,u)=>{for(const l of u.listeners)l.bu(o)&&(c=!0)}),c&&Wr(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function lp(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new H(_.comparator);o=o.insert(i,Y.newNoDocument(i,S.min()));const a=D().add(i),c=new us(S.min(),new Map,new j(R),o,a);await Pc(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),Qr(s)}else await or(s.localStore,t,!1).then(()=>ar(s,t,n)).catch(Xe)}async function dp(e,t){const n=A(e),s=t.batch.batchId;try{const r=await If(n.localStore,t);Vc(n,s,null),Fc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await en(n,r)}catch(r){await Xe(r)}}async function fp(e,t,n){const s=A(e);try{const r=await function(i,o){const a=A(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(M(u!==null),h=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>a.localDocuments.getDocuments(c,h))})}(s.localStore,t);Vc(s,t,n),Fc(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await en(s,r)}catch(r){await Xe(r)}}function Fc(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function Vc(e,t,n){const s=A(e);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.hc[s.currentUser.toKey()]=r}}function ar(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||Uc(e,s)})}function Uc(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Dc(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Qr(e))}function ro(e,t,n){for(const s of n)s instanceof Mc?(e.ac.addReference(s.key,t),pp(e,s)):s instanceof Oc?(v("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||Uc(e,s.key)):T()}function pp(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.oc.add(s),Qr(e))}function Qr(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new _(P.fromString(t)),s=e.fc.next();e.cc.set(s,new ip(n)),e.uc=e.uc.insert(n,s),Ac(e.remoteStore,new Ut(_t(Fr(n.path)),s,2,Lr.at))}}async function en(e,t,n){const s=A(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(h=>{if((h||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,h!=null&&h.fromCache?"not-current":"current"),h){r.push(h);const u=qr.Ci(c.targetId,h);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const h=A(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>p.forEach(c,l=>p.forEach(l.Si,d=>h.persistence.referenceDelegate.addReference(u,l.targetId,d)).next(()=>p.forEach(l.Di,d=>h.persistence.referenceDelegate.removeReference(u,l.targetId,d)))))}catch(u){if(!Ye(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const l=u.targetId;if(!u.fromCache){const d=h.qi.get(l),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);h.qi=h.qi.insert(l,m)}}}(s.localStore,i))}async function gp(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await bc(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new E(g.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await en(n,s.ji)}}function mp(e,t){const n=A(e),s=n.cc.get(t);if(s&&s.nc)return D().add(s.key);{let r=D();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function yp(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Pc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lp.bind(null,t),t.sc.Wo=tp.bind(null,t.eventManager),t.sc.wc=ep.bind(null,t.eventManager),t}function vp(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fp.bind(null,t),t}class _p{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=hs(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return bf(this.persistence,new Ef,t.initialUser,this.yt)}yc(t){return new _f(Br.Bs,this.yt)}gc(t){return new Nf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>so(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gp.bind(null,this.syncEngine),await Qf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Yf}createDatastore(t){const n=hs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Mf(r));var r;return function(i,o,a,c){return new Ff(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>so(this.syncEngine,a,0),o=to.C()?new to:new xf,new Uf(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,h){const u=new op(s,r,i,o,a,c);return h&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);v("RemoteStore","RemoteStore shutting down."),n._u.add(5),await tn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function $c(e,t,n){if(!n)throw new E(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ep(e,t,n,s){if(t===!0&&s===!0)throw new E(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function io(e){if(!_.isDocumentKey(e))throw new E(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oo(e){if(_.isDocumentKey(e))throw new E(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Ce(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xr(e);throw new E(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const ao=new Map;class co{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ep("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class fs{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new co({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new co(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kl;switch(n.type){case"gapi":const s=n.client;return new Ql(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ao.get(t);n&&(v("ComponentProvider","Removing Datastore"),ao.delete(t),n.terminate())}(this),Promise.resolve()}}function Tp(e,t,n,s={}){var r;const i=(e=Ce(e,fs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Xs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=X.MOCK_USER;else{o=Au(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new E(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new X(c)}e._authCredentials=new zl(new Ba(o,a))}}/**
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
 */class ct{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class ps{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ps(this.firestore,t,this._query)}}class It extends ps{constructor(t,n,s){super(t,n,Fr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new _(t))}withConverter(t){return new It(this.firestore,t,this._path)}}function uo(e,t,...n){if(e=te(e),$c("collection","path",t),e instanceof fs){const s=P.fromString(t,...n);return oo(s),new It(e,null,s)}{if(!(e instanceof ct||e instanceof It))throw new E(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return oo(s),new It(e.firestore,null,s)}}function bp(e,t,...n){if(e=te(e),arguments.length===1&&(t=qa.R()),$c("doc","path",t),e instanceof fs){const s=P.fromString(t,...n);return io(s),new ct(e,null,new _(s))}{if(!(e instanceof ct||e instanceof It))throw new E(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return io(s),new ct(e.firestore,e instanceof It?e.converter:null,new _(s))}}/**
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
 */class Ip{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):vt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Sp{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=X.UNAUTHENTICATED,this.clientId=qa.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Gr(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Cp(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await bc(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Ap(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Dp(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>eo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>eo(t.remoteStore,i)),e.onlineComponents=t}async function Dp(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Cp(e,new _p)),e.offlineComponents}async function Bc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Ap(e,new wp)),e.onlineComponents}function kp(e){return Bc(e).then(t=>t.syncEngine)}async function ho(e){const t=await Bc(e),n=t.eventManager;return n.onListen=ap.bind(null,t.syncEngine),n.onUnlisten=up.bind(null,t.syncEngine),n}class Np{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Sc(this,"async_queue_retry"),this.Wc=()=>{const n=Ns();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Ns();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Ns();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Vt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Ye(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=zr.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function lo(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class Vn extends fs{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Np,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jc(this),this._firestoreClient.terminate()}}function xp(e,t){const n=typeof e=="object"?e:xh(),s=typeof e=="string"?e:t||"(default)",r=Ah(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Iu("firestore");i&&Tp(r,...i)}return r}function qc(e){return e._firestoreClient||jc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function jc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new id(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Sp(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class ce{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ce(et.fromBase64String(t))}catch(n){throw new E(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ce(et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Yr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Hc{constructor(t){this._methodName=t}}/**
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
 */class Jr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}/**
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
 */const Rp=/^__.*__$/;class Lp{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ht(t,this.data,this.fieldMask,n,this.fieldTransforms):new Je(t,this.data,n,this.fieldTransforms)}}function Kc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Zr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Zr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Un(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(Kc(this.sa)&&Rp.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Mp{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||hs(t)}da(t,n,s,r=!1){return new Zr({sa:t,methodName:n,fa:s,path:J.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Op(e){const t=e._freezeSettings(),n=hs(e._databaseId);return new Mp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pp(e,t,n,s,r,i={}){const o=e.da(i.merge||i.mergeFields?2:0,t,n,r);Qc("Data must be an object, but it was:",o,s);const a=Gc(s,o);let c,h;if(i.merge)c=new ut(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const l of i.mergeFields){const d=Fp(t,l,n);if(!o.contains(d))throw new E(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Up(u,d)||u.push(d)}c=new ut(u),h=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,h=o.fieldTransforms;return new Lp(new at(a),c,h)}function zc(e,t){if(Wc(e=te(e)))return Qc("Unsupported field value:",t,e),Gc(e,t);if(e instanceof Hc)return function(n,s){if(!Kc(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=zc(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Sd(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=q.fromDate(n);return{timestampValue:Pn(s.yt,r)}}if(n instanceof q){const r=new q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pn(s.yt,r)}}if(n instanceof Jr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ce)return{bytesValue:yc(s.yt,n._byteString)};if(n instanceof ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Vr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Xr(n)}`)}(e,t)}function Gc(e,t){const n={};return ja(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fe(e,(s,r)=>{const i=zc(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Wc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof Jr||e instanceof ce||e instanceof ct||e instanceof Hc)}function Qc(e,t,n){if(!Wc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Xr(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Fp(e,t,n){if((t=te(t))instanceof Yr)return t._internalPath;if(typeof t=="string")return Xc(e,t);throw Un("Field path arguments must be of type string or ",e,!1,void 0,n)}const Vp=new RegExp("[~\\*/\\[\\]]");function Xc(e,t,n){if(t.search(Vp)>=0)throw Un(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Yr(...t.split("."))._internalPath}catch{throw Un(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Un(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new E(g.INVALID_ARGUMENT,a+e+c)}function Up(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Yc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $p(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Jc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $p extends Yc{data(){return super.data()}}function Jc(e,t){return typeof t=="string"?Xc(e,t):t instanceof Yr?t._internalPath:t._delegate._internalPath}/**
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
 */function Bp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new E(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qp{convertValue(t,n="none"){switch(qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(se(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return fe(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Jr(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ka(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Fe(t));default:return null}}convertTimestamp(t){const n=Ct(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=P.fromString(t);M(Tc(s));const r=new Pe(s.get(1),s.get(3)),i=new _(s.popFirst(5));return r.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function jp(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */class we{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zc extends Yc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new yn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Jc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class yn extends Zc{data(t={}){return super.data(t)}}class Hp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new we(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new yn(this._firestore,this._userDataWriter,s.key,s,new we(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new yn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new we(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new yn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new we(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),h=i.indexOf(o.doc.key)),{type:Kp(o.type),doc:a,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Kp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class tu extends qp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ce(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function zp(e,t){const n=Ce(e.firestore,Vn),s=bp(e),r=jp(e.converter,t);return Wp(n,[Pp(Op(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,mt.exists(!1))]).then(()=>s)}function Gp(e,...t){var n,s,r;e=te(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||lo(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(lo(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,h,u;if(e instanceof ct)h=Ce(e.firestore,Vn),u=Fr(e._key.path),c={next:l=>{t[o]&&t[o](Qp(h,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Ce(e,ps);h=Ce(l.firestore,Vn),u=l._query;const d=new tu(h);c={next:f=>{t[o]&&t[o](new Hp(h,d,l,f))},error:t[o+1],complete:t[o+2]},Bp(e._query)}return function(l,d,f,m){const b=new Ip(m),w=new np(d,b,f);return l.asyncQueue.enqueueAndForget(async()=>Jf(await ho(l),w)),()=>{b.bc(),l.asyncQueue.enqueueAndForget(async()=>Zf(await ho(l),w))}}(qc(h),u,a,c)}function Wp(e,t){return function(n,s){const r=new Vt;return n.asyncQueue.enqueueAndForget(async()=>hp(await kp(n),s,r)),r.promise}(qc(e),t)}function Qp(e,t,n){const s=n.docs.get(t._key),r=new tu(e);return new Zc(e,r,t._key,s,new we(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){de=n})(Nh),bn(new De("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Vn(new Gl(n.getProvider("auth-internal")),new Yl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pe(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Xt(Li,"3.8.3",e),Xt(Li,"3.8.3","esm2017")})();const Xp={projectId:"learn-firebase-with-reac-7777c",appId:"1:928038530199:web:d320a556bf18bd73fa8dd2"};Po(Xp);const fo=xp(),Yp=()=>"User "+Math.floor(Math.random()*100),Jp=()=>{const[e,t]=ms([]),[n,s]=ms(""),[r]=ms(Yp()),i=a=>s(a),o=a=>{zp(uo(fo,"messages"),a),s("")};return uu(()=>{Gp(uo(fo,"messages"),a=>{const c=a.docs.map(h=>({id:h.id,...h.data()}));t(c)})},[]),st("main",{class:"bg-white my-4 mt-10 drop-shadow-lg p-6 w-full lg:w-3/4 rounded-md",children:[st("h1",{class:"font-extrabold text-2xl mb-2",children:"Learning firebase"}),st(pu,{parentChange:i,parentSubmit:o,user:r,text:n}),st(gu,{messages:e})]})};au(st(Jp,{}),document.getElementById("app"));
