var R=Object.defineProperty;var G=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function H(){}const mt=t=>t;function F(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function pt(){return Object.create(null)}function J(t){t.forEach(U)}function K(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function gt(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function bt(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null){for(const i of e)i(void 0);return H}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function xt(t,e,n,i){if(t){const s=O(t,e,n,i);return t[0](s)}}function O(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Et(t,e,n,i,s,c){if(s){const r=O(e,n,i,c);t.p(r,s)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function At(t){const e={};for(const n in t)e[n]=!0;return e}function Lt(t){return t??""}function Mt(t,e,n){return t.set(n),e}function jt(t){return t&&K(t.destroy)?t.destroy:H}let b=!1;function Ct(){b=!0}function St(){b=!1}function V(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:V(1,s,I=>e[n[I]].claim_order,a))-1;i[o]=n[u]+1;const M=u+1;n[M]=o,s=Math.max(M,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[o],u)}}function P(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ht(t){const e=w("style");return e.textContent="/* empty */",Z(Y(t),e),e.sheet}function Z(t,e){return P(t.head||t,e),e.sheet}function $(t,e){if(b){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function tt(t,e,n){t.insertBefore(e,n||null)}function et(t,e,n){b&&!n?$(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function Ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function D(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function Pt(){return A(" ")}function Dt(){return A("")}function j(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const nt=["width","height"];function it(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&nt.indexOf(i)===-1?t[i]=e[i]:L(t,i,e[i])}function zt(t,e){for(const n in e)L(t,n,e[n])}function st(t,e){Object.keys(e).forEach(n=>{rt(t,n,e[n])})}function rt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:L(t,e,n)}function qt(t){return/-/.test(t)?st:it}function Bt(t){return t.dataset.svelteH}function Wt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function It(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,s=!1){z(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function B(t,e,n,i){return q(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Rt(t,e,n){return B(t,e,n,w)}function Gt(t,e,n){return B(t,e,n,D)}function ct(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Ft(t){return ct(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ut(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new v(e);z(t);const s=t.splice(n,i-n+1);y(s[0]),y(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new v(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new v(e,c)}function Jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Kt(t,e){t.value=e??""}function Qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let p;function ot(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function Vt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=w("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=ot();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=j(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=j(i.contentWindow,"resize",e),e()}),P(t,i),()=>{(s||c&&i.contentWindow)&&c(),y(i)}}function Xt(t,e,n){t.classList.toggle(e,!!n)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class at{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=D(n.nodeName):this.e=w(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class v extends at{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)et(this.t,this.n[i],n)}}function Yt(t,e){return new t(e)}let g;function E(t){g=t}function x(){if(!g)throw new Error("Function called outside component initialization");return g}function Zt(t){x().$$.on_mount.push(t)}function $t(t){x().$$.after_update.push(t)}function te(t){x().$$.on_destroy.push(t)}function ee(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=lt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}const h=[],S=[];let d=[];const T=[],W=Promise.resolve();let k=!1;function ut(){k||(k=!0,W.then(_t))}function ne(){return ut(),W}function ft(t){d.push(t)}function ie(t){T.push(t)}const N=new Set;let _=0;function _t(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,E(e),dt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(E(null),h.length=0,_=0;S.length;)S.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];N.has(n)||(N.add(n),n())}d.length=0}while(h.length);for(;T.length;)T.pop()();k=!1,N.clear(),E(t)}function dt(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ft)}}function se(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{bt as $,Gt as A,Ut as B,zt as C,Tt as D,mt as E,Dt as F,kt as G,v as H,At as I,Lt as J,qt as K,$t as L,Zt as M,Qt as N,S as O,Yt as P,ne as Q,Xt as R,ft as S,Vt as T,jt as U,Ot as V,Y as W,Ht as X,lt as Y,pt as Z,_t as _,Pt as a,se as a0,g as a1,E as a2,U as a3,h as a4,ut as a5,Ct as a6,St as a7,Bt as a8,ee as a9,Mt as aa,te as ab,Wt as ac,Kt as ad,ie as ae,It as b,Rt as c,ct as d,w as e,y as f,Ft as g,$ as h,et as i,Jt as j,wt as k,xt as l,Nt as m,H as n,vt as o,L as p,Q as q,J as r,yt as s,A as t,Et as u,K as v,gt as w,j as x,F as y,D as z};
