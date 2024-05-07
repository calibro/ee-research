import{s as R,q as K,r as Se,H as Be,v as Ve,b as B,w as xe,f as v,x as Z,i as C,n as H,y as ee,e as V,t as Ue,c as x,d as ze,p as $,h as S,j as He,T as ne,ab as je,a as j,g as A,ac as te,B as he,ad as Fe,E as Ae,K as z,O as X,ae as re,k as oe,U as Je,F as de,D as We}from"./scheduler.DjmlZpBi.js";import{S as Y,i as U,t as d,g as N,f as G,a as m,c as D,b as I,m as E,d as L,h as le,e as ge}from"./index.D5mPgV2_.js";import{l as Pe,s as me,D as Ke}from"./index.BWSmiydm.js";import{L as se,e as Qe}from"./link.cl7uhYL1.js";import{T as P}from"./text.DH_QAwnB.js";import{d as Xe,w as Ze,g as et}from"./entry.COMrkacz.js";import{p as tt}from"./stores.CiofdzlK.js";import{g as Ne}from"./spread.CN4WR7uZ.js";import{b as nt}from"./tokens.DVXvbK2-.js";import{e as F}from"./each.K9NGHkqs.js";const rt=!0,Dn=rt;class lt extends Map{constructor(e,t=it){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[l,r]of e)this.set(l,r)}get(e){return super.get(_e(this,e))}has(e){return super.has(_e(this,e))}set(e,t){return super.set(st(this,e),t)}delete(e){return super.delete(ot(this,e))}}function _e({_intern:s,_key:e},t){const l=e(t);return s.has(l)?s.get(l):t}function st({_intern:s,_key:e},t){const l=e(t);return s.has(l)?s.get(l):(s.set(l,t),t)}function ot({_intern:s,_key:e},t){const l=e(t);return s.has(l)&&(t=s.get(t),s.delete(l)),t}function it(s){return s!==null&&typeof s=="object"?s.valueOf():s}function fe(s){return s}function In(s,...e){return Ge(s,fe,fe,e)}function En(s,...e){return Ge(s,Array.from,fe,e)}function Ge(s,e,t,l){return function r(i,n){if(n>=l.length)return t(i);const a=new lt,o=l[n++];let c=-1;for(const h of i){const u=o(h,++c,i),f=a.get(u);f?f.push(h):a.set(u,[h])}for(const[h,u]of a)a.set(h,r(u,n));return e(a)}(s,0)}let Me;Me=tt;const at={keepFocus:!0,noScroll:!0,replaceState:!0},ct={keepFocus:!0,noScroll:!0,replaceState:!1};function ie(s,e,t=(l,r)=>JSON.stringify(l)===JSON.stringify(r)){return typeof s=="object"&&typeof e=="object"&&t(s,e)}const ae=new Set;let pe;const ve=new Map,ce={encode:s=>s.toString(),decode:s=>s?s.toString():null};function ue(s,{encode:e=ce.encode,decode:t=ce.decode,defaultValue:l}=ce,{debounceHistory:r=0,pushHistory:i=!0,sort:n=!0,showDefaults:a=!0,equalityFn:o}={}){const c=Ze(null);let h=!0,u;function f(b,w){h=!1;const T=window.location.hash,_=k=>{if(b==null)k.delete(s);else{const p=e(b);p==null?k.delete(s):k.set(s,p)}};ae.add(_),clearTimeout(pe);const y=new URLSearchParams(window.location.search);pe=setTimeout(async()=>{ae.forEach(k=>{k(y)}),clearTimeout(ve.get(s));{c.set(b);async function k(){n&&y.sort(),await et(`?${y}${T}`,i?ct:at),c.set(null)}w||r===0?k():ve.set(s,setTimeout(k,r))}ae.clear()})}const{subscribe:g}=Xe([Me,c],([b,w],T)=>{var k,p,O;if(w!=null)return ie(u,w,o)?void 0:(u=structuredClone(w),T(w));const _=(O=(p=(k=b==null?void 0:b.url)==null?void 0:k.searchParams)==null?void 0:p.get)==null?void 0:O.call(p,s);if(_==null&&l!=null)return a&&f(l,h),ie(u,l,o)?void 0:(u=structuredClone(l),T(l));const y=t(_);if(!ie(u,y,o))return u=structuredClone(y),T(y)});return{set(b){f(b)},subscribe:g,update:b=>{const w=b(u);f(w)}}}function ut(s){let e,t,l='<path d="M2 2H32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M6 11H28" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M11 20H23" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',r=[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s[0]],i={};for(let n=0;n<r.length;n+=1)i=K(i,r[n]);return{c(){e=Se("svg"),t=new Be(!0),this.h()},l(n){e=Ve(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=B(e);t=xe(a,!0),a.forEach(v),this.h()},h(){t.a=null,Z(e,i)},m(n,a){C(n,e,a),t.m(l,e)},p(n,[a]){Z(e,i=Ne(r,[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:H,o:H,d(n){n&&v(e)}}}function ft(s,e,t){return s.$$set=l=>{t(0,e=K(K({},e),ee(l)))},e=ee(e),[e]}class ht extends Y{constructor(e){super(),U(this,e,ft,ut,R,{})}}function dt(s){let e,t,l,r;return{c(){e=V("label"),t=Ue(s[0]),this.h()},l(i){e=x(i,"LABEL",{class:!0,for:!0,style:!0});var n=B(e);t=ze(n,s[0]),n.forEach(v),this.h()},h(){$(e,"class",l="typo-"+s[3]+" svelte-idnrzj"),$(e,"for",s[1]),$(e,"style",r=`--background: var(--color-${s[2]})`)},m(i,n){C(i,e,n),S(e,t)},p(i,[n]){n&1&&He(t,i[0]),n&8&&l!==(l="typo-"+i[3]+" svelte-idnrzj")&&$(e,"class",l),n&2&&$(e,"for",i[1]),n&4&&r!==(r=`--background: var(--color-${i[2]})`)&&$(e,"style",r)},i:H,o:H,d(i){i&&v(e)}}}function gt(s,e,t){let{label:l}=e,{rel:r=void 0}=e,{color:i="white"}=e,{typo:n="small"}=e;return s.$$set=a=>{"label"in a&&t(0,l=a.label),"rel"in a&&t(1,r=a.rel),"color"in a&&t(2,i=a.color),"typo"in a&&t(3,n=a.typo)},[l,r,i,n]}class Re extends Y{constructor(e){super(),U(this,e,gt,dt,R,{label:0,rel:1,color:2,typo:3})}}function be(s,e,t){const l=s.slice();return l[5]=e[t].label,l[6]=e[t].code,l[7]=e[t].color,l}function we(s){let e,t,l,r=!1,i,n,a,o,c,h,u;return a=new Re({props:{label:s[5],rel:s[6],color:s[7]}}),c=je(s[4][0]),{c(){e=V("input"),n=j(),D(a.$$.fragment),this.h()},l(f){e=x(f,"INPUT",{class:!0,type:!0,id:!0,"aria-checked":!0}),n=A(f),I(a.$$.fragment,f),this.h()},h(){$(e,"class","sr-only svelte-1nwrcna"),$(e,"type","checkbox"),$(e,"id",t=s[6]),e.__value=l=s[6],te(e,e.__value),$(e,"aria-checked",i=s[0]===s[6]),c.p(e)},m(f,g){C(f,e,g),e.checked=~(s[0]||[]).indexOf(e.__value),C(f,n,g),E(a,f,g),o=!0,h||(u=he(e,"change",s[3]),h=!0)},p(f,g){(!o||g&2&&t!==(t=f[6]))&&$(e,"id",t),(!o||g&2&&l!==(l=f[6]))&&(e.__value=l,te(e,e.__value),r=!0),(!o||g&3&&i!==(i=f[0]===f[6]))&&$(e,"aria-checked",i),(r||g&3)&&(e.checked=~(f[0]||[]).indexOf(e.__value));const b={};g&2&&(b.label=f[5]),g&2&&(b.rel=f[6]),g&2&&(b.color=f[7]),a.$set(b)},i(f){o||(d(a.$$.fragment,f),o=!0)},o(f){m(a.$$.fragment,f),o=!1},d(f){f&&(v(e),v(n)),L(a,f),c.r(),h=!1,u()}}}function mt(s){let e,t,l=F(s[1]),r=[];for(let n=0;n<l.length;n+=1)r[n]=we(be(s,l,n));const i=n=>m(r[n],1,1,()=>{r[n]=null});return{c(){e=V("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=x(n,"DIV",{role:!0,class:!0});var a=B(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){$(e,"role","checkbox"),$(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){C(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&3){l=F(n[1]);let o;for(o=0;o<l.length;o+=1){const c=be(n,l,o);r[o]?(r[o].p(c,a),d(r[o],1)):(r[o]=we(c),r[o].c(),d(r[o],1),r[o].m(e,null))}for(N(),o=l.length;o<r.length;o+=1)i(o);G()}},i(n){if(!t){for(let a=0;a<l.length;a+=1)d(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)m(r[a]);t=!1},d(n){n&&v(e),ne(r,n)}}}function _t(s,e,t){let l,{items:r}=e,{value:i=null}=e;const n=[[]];function a(){i=Fe(n[0],this.__value,this.checked),t(0,i)}return s.$$set=o=>{"items"in o&&t(2,r=o.items),"value"in o&&t(0,i=o.value)},s.$$.update=()=>{s.$$.dirty&4&&t(1,l=Array.isArray(r)?r:Object.values(r))},[i,l,r,a,n]}class pt extends Y{constructor(e){super(),U(this,e,_t,mt,R,{items:2,value:0})}}function vt(s){let e,t,l='<path d="M13 1L7 7L1 0.999999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r=[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s[0]],i={};for(let n=0;n<r.length;n+=1)i=K(i,r[n]);return{c(){e=Se("svg"),t=new Be(!0),this.h()},l(n){e=Ve(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=B(e);t=xe(a,!0),a.forEach(v),this.h()},h(){t.a=null,Z(e,i)},m(n,a){C(n,e,a),t.m(l,e)},p(n,[a]){Z(e,i=Ne(r,[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:H,o:H,d(n){n&&v(e)}}}function bt(s,e,t){return s.$$set=l=>{t(0,e=K(K({},e),ee(l)))},e=ee(e),[e]}class wt extends Y{constructor(e){super(),U(this,e,bt,vt,R,{})}}function ke(s,e,t){const l=s.slice();return l[9]=e[t],l}function kt(s){var i,n,a;let e,t,l,r;return e=new P({props:{class:s[3]?"":"opacity-50",content:(i=s[1])!=null&&i.length?((n=s[3])==null?void 0:n.title)||((a=s[3])==null?void 0:a.queryLabel)||"Select":"Loading...",typo:"p"}}),l=new wt({props:{width:12}}),{c(){D(e.$$.fragment),t=j(),D(l.$$.fragment)},l(o){I(e.$$.fragment,o),t=A(o),I(l.$$.fragment,o)},m(o,c){E(e,o,c),C(o,t,c),E(l,o,c),r=!0},p(o,c){var u,f,g;const h={};c&8&&(h.class=o[3]?"":"opacity-50"),c&10&&(h.content=(u=o[1])!=null&&u.length?((f=o[3])==null?void 0:f.title)||((g=o[3])==null?void 0:g.queryLabel)||"Select":"Loading..."),e.$set(h)},i(o){r||(d(e.$$.fragment,o),d(l.$$.fragment,o),r=!0)},o(o){m(e.$$.fragment,o),m(l.$$.fragment,o),r=!1},d(o){o&&v(t),L(e,o),L(l,o)}}}function $e(s){let e,t,l=F(s[1]),r=[];for(let n=0;n<l.length;n+=1)r[n]=ye(ke(s,l,n));const i=n=>m(r[n],1,1,()=>{r[n]=null});return{c(){e=V("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=x(n,"DIV",{class:!0});var a=B(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){$(e,"class","list scrollbar-hide svelte-rjfnlc"),z(e,"show",s[2])},m(n,a){C(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,a){if(a&19){l=F(n[1]);let o;for(o=0;o<l.length;o+=1){const c=ke(n,l,o);r[o]?(r[o].p(c,a),d(r[o],1)):(r[o]=ye(c),r[o].c(),d(r[o],1),r[o].m(e,null))}for(N(),o=l.length;o<r.length;o+=1)i(o);G()}(!t||a&4)&&z(e,"show",n[2])},i(n){if(!t){for(let a=0;a<l.length;a+=1)d(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)m(r[a]);t=!1},d(n){n&&v(e),ne(r,n)}}}function ye(s){let e,t;function l(){return s[7](s[9])}return e=new se({props:{class:`button p-xs ${s[9].slug===s[0]?"selected":""}`,text:s[9].title||s[9].queryLabel,fn:l}}),{c(){D(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,i){E(e,r,i),t=!0},p(r,i){s=r;const n={};i&3&&(n.class=`button p-xs ${s[9].slug===s[0]?"selected":""}`),i&2&&(n.text=s[9].title||s[9].queryLabel),i&2&&(n.fn=l),e.$set(n)},i(r){t||(d(e.$$.fragment,r),t=!0)},o(r){m(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function $t(s){var n;let e,t,l,r;t=new se({props:{class:`dropdown-btn flex-btw-center p-xs ${s[2]?"active":""}`,fn:s[6],$$slots:{default:[kt]},$$scope:{ctx:s}}});let i=((n=s[1])==null?void 0:n.length)&&$e(s);return{c(){e=V("div"),D(t.$$.fragment),l=j(),i&&i.c(),this.h()},l(a){e=x(a,"DIV",{class:!0,ref:!0});var o=B(e);I(t.$$.fragment,o),l=A(o),i&&i.l(o),o.forEach(v),this.h()},h(){$(e,"class","dropdown svelte-rjfnlc"),$(e,"ref",s[5])},m(a,o){C(a,e,o),E(t,e,null),S(e,l),i&&i.m(e,null),r=!0},p(a,[o]){var h;const c={};o&4&&(c.class=`dropdown-btn flex-btw-center p-xs ${a[2]?"active":""}`),o&4&&(c.fn=a[6]),o&4106&&(c.$$scope={dirty:o,ctx:a}),t.$set(c),(h=a[1])!=null&&h.length?i?(i.p(a,o),o&2&&d(i,1)):(i=$e(a),i.c(),d(i,1),i.m(e,null)):i&&(N(),m(i,1,1,()=>{i=null}),G())},i(a){r||(d(t.$$.fragment,a),d(i),r=!0)},o(a){m(t.$$.fragment,a),m(i),r=!1},d(a){a&&v(e),L(t),i&&i.d()}}}function yt(s,e,t){let l,{items:r}=e,{value:i=null}=e,n=!1;const a=f=>{t(0,i=f),t(2,n=!1)};let o;Ae(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}));const c=f=>{f.target.closest(".dropdown")||t(2,n=!1)},h=()=>t(2,n=!n),u=f=>a(f.slug||f.query);return s.$$set=f=>{"items"in f&&t(1,r=f.items),"value"in f&&t(0,i=f.value)},s.$$.update=()=>{var f;s.$$.dirty&3&&t(3,l=(f=r==null?void 0:r.find)==null?void 0:f.call(r,g=>(g.slug||g.query)===i))},[i,r,n,l,a,o,h,u]}class qt extends Y{constructor(e){super(),U(this,e,yt,$t,R,{items:1,value:0})}}function qe(s,e,t){const l=s.slice();return l[6]=e[t].label,l[7]=e[t].code,l[8]=e[t].color,l}function Te(s){let e,t,l,r=!1,i,n,a,o,c,h;return n=new Re({props:{label:s[6],rel:s[7],color:s[8]}}),o=je(s[5][0]),{c(){e=V("input"),i=j(),D(n.$$.fragment),this.h()},l(u){e=x(u,"INPUT",{class:!0,type:!0,id:!0}),i=A(u),I(n.$$.fragment,u),this.h()},h(){$(e,"class","sr-only svelte-64kelq"),$(e,"type","radio"),$(e,"id",t=s[7]),e.__value=l=s[7],te(e,e.__value),z(e,"noDot",s[1]),o.p(e)},m(u,f){C(u,e,f),e.checked=e.__value===s[0],C(u,i,f),E(n,u,f),a=!0,c||(h=he(e,"change",s[4]),c=!0)},p(u,f){(!a||f&4&&t!==(t=u[7]))&&$(e,"id",t),(!a||f&4&&l!==(l=u[7]))&&(e.__value=l,te(e,e.__value),r=!0),(r||f&5)&&(e.checked=e.__value===u[0]),(!a||f&2)&&z(e,"noDot",u[1]);const g={};f&4&&(g.label=u[6]),f&4&&(g.rel=u[7]),f&4&&(g.color=u[8]),n.$set(g)},i(u){a||(d(n.$$.fragment,u),a=!0)},o(u){m(n.$$.fragment,u),a=!1},d(u){u&&(v(e),v(i)),L(n,u),o.r(),c=!1,h()}}}function Tt(s){let e,t,l=F(s[2]),r=[];for(let n=0;n<l.length;n+=1)r[n]=Te(qe(s,l,n));const i=n=>m(r[n],1,1,()=>{r[n]=null});return{c(){e=V("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=x(n,"DIV",{role:!0,class:!0});var a=B(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){$(e,"role","radiogroup"),$(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){C(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&7){l=F(n[2]);let o;for(o=0;o<l.length;o+=1){const c=qe(n,l,o);r[o]?(r[o].p(c,a),d(r[o],1)):(r[o]=Te(c),r[o].c(),d(r[o],1),r[o].m(e,null))}for(N(),o=l.length;o<r.length;o+=1)i(o);G()}},i(n){if(!t){for(let a=0;a<l.length;a+=1)d(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)m(r[a]);t=!1},d(n){n&&v(e),ne(r,n)}}}function Dt(s,e,t){let l,{items:r}=e,{value:i=null}=e,{noDot:n=!1}=e;const a=[[]];function o(){i=this.__value,t(0,i)}return s.$$set=c=>{"items"in c&&t(3,r=c.items),"value"in c&&t(0,i=c.value),"noDot"in c&&t(1,n=c.noDot)},s.$$.update=()=>{s.$$.dirty&8&&t(2,l=Array.isArray(r)?r:Object.values(r))},[i,n,l,r,o,a]}class Ye extends Y{constructor(e){super(),U(this,e,Dt,Tt,R,{items:3,value:0,noDot:1})}}function De(s){let e,t,l,r,i,n;t=new P({props:{typo:"label",content:"Language",class:"case-upper"}});const a=[Et,It],o=[];function c(h,u){return h[2]?0:1}return r=c(s),i=o[r]=a[r](s),{c(){e=V("div"),D(t.$$.fragment),l=j(),i.c(),this.h()},l(h){e=x(h,"DIV",{class:!0});var u=B(e);I(t.$$.fragment,u),l=A(u),i.l(u),u.forEach(v),this.h()},h(){$(e,"class","group flex flex-col gap-xs")},m(h,u){C(h,e,u),E(t,e,null),S(e,l),o[r].m(e,null),n=!0},p(h,u){let f=r;r=c(h),r===f?o[r].p(h,u):(N(),m(o[f],1,1,()=>{o[f]=null}),G(),i=o[r],i?i.p(h,u):(i=o[r]=a[r](h),i.c()),d(i,1),i.m(e,null))},i(h){n||(d(t.$$.fragment,h),d(i),n=!0)},o(h){m(t.$$.fragment,h),m(i),n=!1},d(h){h&&v(e),L(t),o[r].d()}}}function It(s){let e,t,l;function r(n){s[14](n)}let i={items:Pe};return s[5]!==void 0&&(i.value=s[5]),e=new Ye({props:i}),X.push(()=>le(e,"value",r)),{c(){D(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,a){E(e,n,a),l=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],re(()=>t=!1)),e.$set(o)},i(n){l||(d(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Et(s){let e,t,l;function r(n){s[13](n)}let i={items:Pe};return s[5]!==void 0&&(i.value=s[5]),e=new pt({props:i}),X.push(()=>le(e,"value",r)),{c(){D(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,a){E(e,n,a),l=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],re(()=>t=!1)),e.$set(o)},i(n){l||(d(e.$$.fragment,n),l=!0)},o(n){m(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Ie(s){let e,t,l,r,i,n;t=new P({props:{typo:"label",content:"Order",class:"case-upper"}});function a(c){s[15](c)}let o={items:s[11],noDot:!0};return s[7]!==void 0&&(o.value=s[7]),r=new Ye({props:o}),X.push(()=>le(r,"value",a)),{c(){e=V("div"),D(t.$$.fragment),l=j(),D(r.$$.fragment),this.h()},l(c){e=x(c,"DIV",{class:!0});var h=B(e);I(t.$$.fragment,h),l=A(h),I(r.$$.fragment,h),h.forEach(v),this.h()},h(){$(e,"class","group flex flex-col gap-xs")},m(c,h){C(c,e,h),E(t,e,null),S(e,l),E(r,e,null),n=!0},p(c,h){const u={};!i&&h&128&&(i=!0,u.value=c[7],re(()=>i=!1)),r.$set(u)},i(c){n||(d(t.$$.fragment,c),d(r.$$.fragment,c),n=!0)},o(c){m(t.$$.fragment,c),m(r.$$.fragment,c),n=!1},d(c){c&&v(e),L(t),L(r)}}}function Lt(s){let e,t;return e=new ht({props:{height:"16"}}),{c(){D(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,r){E(e,l,r),t=!0},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){m(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Ot(s){let e,t;return e=new P({props:{content:"Confirm",typo:"small"}}),{c(){D(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,r){E(e,l,r),t=!0},i(l){t||(d(e.$$.fragment,l),t=!0)},o(l){m(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Ct(s){let e,t,l,r;const i=[Ot,Lt],n=[];function a(o,c){return o[4]?0:1}return e=a(s),t=n[e]=i[e](s),{c(){t.c(),l=de()},l(o){t.l(o),l=de()},m(o,c){n[e].m(o,c),C(o,l,c),r=!0},p(o,c){let h=e;e=a(o),e!==h&&(N(),m(n[h],1,1,()=>{n[h]=null}),G(),t=n[e],t||(t=n[e]=i[e](o),t.c()),d(t,1),t.m(l.parentNode,l))},i(o){r||(d(t),r=!0)},o(o){m(t),r=!1},d(o){o&&v(l),n[e].d(o)}}}function St(s){let e,t,l,r,i,n,a,o,c,h,u,f;l=new P({props:{typo:"label",content:"Query",class:"case-upper"}});function g(_){s[12](_)}let b={items:s[1]};s[6]!==void 0&&(b.value=s[6]),i=new qt({props:b}),X.push(()=>le(i,"value",g));let w=s[0]&&De(s),T=s[3]&&Ie(s);return u=new se({props:{class:"button pointer-events-initial",fn:s[16],theme:"cta",$$slots:{default:[Ct]},$$scope:{ctx:s}}}),{c(){e=V("div"),t=V("div"),D(l.$$.fragment),r=j(),D(i.$$.fragment),a=j(),w&&w.c(),o=j(),T&&T.c(),c=j(),h=V("div"),D(u.$$.fragment),this.h()},l(_){e=x(_,"DIV",{class:!0});var y=B(e);t=x(y,"DIV",{class:!0});var k=B(t);I(l.$$.fragment,k),r=A(k),I(i.$$.fragment,k),k.forEach(v),a=A(y),w&&w.l(y),o=A(y),T&&T.l(y),y.forEach(v),c=A(_),h=x(_,"DIV",{class:!0});var p=B(h);I(u.$$.fragment,p),p.forEach(v),this.h()},h(){$(t,"class","group flex flex-col gap-xs"),$(e,"class","filters px-s py-m xl:p-0 svelte-1v2kozf"),z(e,"show",s[4]),$(h,"class","cta pointer-events-none xl:hidden svelte-1v2kozf"),z(h,"open",s[4])},m(_,y){C(_,e,y),S(e,t),E(l,t,null),S(t,r),E(i,t,null),S(e,a),w&&w.m(e,null),S(e,o),T&&T.m(e,null),C(_,c,y),C(_,h,y),E(u,h,null),f=!0},p(_,[y]){const k={};y&2&&(k.items=_[1]),!n&&y&64&&(n=!0,k.value=_[6],re(()=>n=!1)),i.$set(k),_[0]?w?(w.p(_,y),y&1&&d(w,1)):(w=De(_),w.c(),d(w,1),w.m(e,o)):w&&(N(),m(w,1,1,()=>{w=null}),G()),_[3]?T?(T.p(_,y),y&8&&d(T,1)):(T=Ie(_),T.c(),d(T,1),T.m(e,null)):T&&(N(),m(T,1,1,()=>{T=null}),G()),(!f||y&16)&&z(e,"show",_[4]);const p={};y&16&&(p.fn=_[16]),y&262160&&(p.$$scope={dirty:y,ctx:_}),u.$set(p),(!f||y&16)&&z(h,"open",_[4])},i(_){f||(d(l.$$.fragment,_),d(i.$$.fragment,_),d(w),d(T),d(u.$$.fragment,_),f=!0)},o(_){m(l.$$.fragment,_),m(i.$$.fragment,_),m(w),m(T),m(u.$$.fragment,_),f=!1},d(_){_&&(v(e),v(c),v(h)),L(l),L(i),w&&w.d(),T&&T.d(),L(u)}}}function Bt(s,e,t){var O;let l,r,i,{showLang:n=!0}=e,{queries:a}=e,{checkbox:o=!1}=e,{order:c=!1}=e,h=ue("query"),u=ue("lang"),f=ue("order");oe(s,h,q=>t(6,r=q)),oe(s,u,q=>t(17,l=q)),oe(s,f,q=>t(7,i=q));let g=!1,b=l?o?(O=l==null?void 0:l.split)==null?void 0:O.call(l," "):l:[];Ae(async()=>{setTimeout(()=>{var q;t(5,b=o?((q=l==null?void 0:l.split)==null?void 0:q.call(l," "))||[]:l)},100)});const w=[{label:"Views",code:"views"},{label:"Comments",code:"comments"},{label:"Likes",code:"likes"},{label:"Date",code:"date"}];function T(q){r=q,h.set(r)}function _(q){b=q,t(5,b)}function y(q){b=q,t(5,b)}function k(q){i=q,f.set(i)}const p=()=>t(4,g=!g);return s.$$set=q=>{"showLang"in q&&t(0,n=q.showLang),"queries"in q&&t(1,a=q.queries),"checkbox"in q&&t(2,o=q.checkbox),"order"in q&&t(3,c=q.order)},s.$$.update=()=>{var q;s.$$.dirty&16&&document.body.classList.toggle("scroll-lock",g),s.$$.dirty&32&&Je(u,l=((q=b==null?void 0:b.join)==null?void 0:q.call(b," "))||b,l)},innerWidth>Qe(nt.l)&&t(4,g=!1),[n,a,o,c,g,b,r,i,h,u,f,w,T,_,y,k,p]}class Vt extends Y{constructor(e){super(),U(this,e,Bt,St,R,{showLang:0,queries:1,checkbox:2,order:3})}}const xt="Getty Images circulation",jt="By which web pages are the most significant stock photos used?",At="As stock images circulate online, their meanings evolve. This page highlights the contextual usage of commonly encountered visual stereotypes sourced from Getty Images for each query. By selecting an image, you can explore a list of websites where the image is featured. Data collected in January 2024.",Pt=["For each stereotype, collect the 3 highest ranked images","Reverse search images on Google Image Search","Collect top 20 web pages hosting the images","Collect URL and Title for each web page","Delete unrelated results"],Nt={title:xt,research_question:jt,description:At,protocol:Pt},Gt="Getty Images stereotypes",Mt="Which visual tropes emerge in connection to different pollution routes, practices and substances?",Rt="GettyImages provides insight into the visual repertoire associated with toxicities. This page displays images retrieved from Getty Images for each query (in English). Images are organized using a visual similarity algorithm and then manually grouped into stereotypes. Stereotype clusters are arranged alphabetically from top to bottom. By clicking on a thumbnail, you can explore images along with their metadata, including location tags. Data collected in January 2024.",Yt=["Search term on Getty Images","Collect top 1000 images per search term using a custom script","Cluster images in each dataset based on visual similarity","Identify most recurrent visual stereotypes and name clusters of similar images"],Ut={title:Gt,research_question:Mt,description:Rt,protocol:Yt},zt={},Ht="TikTok topics",Ft="Which topics are connected to different substances, practices and devices?",Jt="On TikTok, users share fears, practices, and information regarding toxicities. Each term is searched in different languages on the platform to collect a list of videos and associated hashtags. This page displays clusters of similar hashtags, resized according to their frequency of use. You can explore videos shared with those hashtags by clicking on a hashtag cluster. Data collected in Junuary 2024.",Wt=["Search terms on TikTok in the local language","Collect top videos per query","Collect hashtags for each video","Clusters similar hashtags using clustering sentence embeddings","Delete unrelated clusters of hashtags","Fine tune and name identified clusters of videos"],Kt={title:Ht,research_question:Ft,description:Jt,protocol:Wt},Qt="Youtube clusters",Xt="What topics are each substance related to through the recommendation algorithm?",Zt="YouTube's algorithm suggests videos to users through the autoplay feature and its interface. Networks of suggested videos offer a window into the thematic areas that connect substances, practices, and formats. This page displays thematic clusters of videos identified among those recommended by YouTube for each substance. Clusters are ordered alphabetically. Data collected in August 2023.",en=["Search terms on YouTube (with language and country filter activated)","Collect the top 50 results for each query term using YouTube Data Tools","Collect recommended videos to the top 50 results per language and substance","Identify clusters of similar videos in each dataset using clustering sentence embeddings","Fine tune and name identified clusters of videos"],tn={title:Qt,research_question:Xt,description:Zt,protocol:en},nn="Youtube language comparison",rn="How do video results about substances change according to the language of the query?",ln="Video results on YouTube vary depending on the language of the query. This page displays the top 50 videos for each query across different languages, merged together. Videos can be filtered by language and ordered by time and engagement metrics. Ordering by the number of likes or views emphasizes the popularity of videos. Ordering by the number of comments emphasizes controversial videos that might generate discussion in the comment section. Data collected in January 2024.",sn=["Search term on YouTube (with language and country filter activated)","Collect the top 50 results for each query term using YouTube Data Tools","Delete unrelated results from the list","Collect metadata (likes, views, and timestamps)","Compile results from different languages in one list per query"],on={title:nn,research_question:rn,description:ln,protocol:sn},Q={getty_circulation:Nt,getty_stereotypes:Ut,tiktok:Kt,youtube_language:on,youtube_clusters:tn,globals:zt},an=(s="globals",e,t)=>Q[s]&&Q[s][e]?t?Q[s][e][t]:Q[s][e]:null,Ln=s=>(e,t)=>an(s,e,t),cn=s=>{var e;return(e=Q[s])==null?void 0:e.protocol};function Ee(s,e,t){const l=s.slice();return l[6]=e[t],l}function Le(s){let e,t,l,r=F(s[2]),i=[];for(let a=0;a<r.length;a+=1)i[a]=Oe(Ee(s,r,a));const n=a=>m(i[a],1,1,()=>{i[a]=null});return{c(){e=V("ol");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=x(a,"OL",{class:!0});var o=B(e);for(let c=0;c<i.length;c+=1)i[c].l(o);o.forEach(v),this.h()},h(){$(e,"class","details svelte-x5x5bq")},m(a,o){C(a,e,o);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);l=!0},p(a,o){if(o&4){r=F(a[2]);let c;for(c=0;c<r.length;c+=1){const h=Ee(a,r,c);i[c]?(i[c].p(h,o),d(i[c],1)):(i[c]=Oe(h),i[c].c(),d(i[c],1),i[c].m(e,null))}for(N(),c=r.length;c<i.length;c+=1)n(c);G()}},i(a){if(!l){for(let o=0;o<r.length;o+=1)d(i[o]);a&&We(()=>{l&&(t||(t=ge(e,me,{},!0)),t.run(1))}),l=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)m(i[o]);a&&(t||(t=ge(e,me,{},!1)),t.run(0)),l=!1},d(a){a&&v(e),ne(i,a),a&&t&&t.end()}}}function Oe(s){let e,t,l,r;return t=new P({props:{content:s[6]}}),{c(){e=V("li"),D(t.$$.fragment),l=j(),this.h()},l(i){e=x(i,"LI",{class:!0});var n=B(e);I(t.$$.fragment,n),l=A(n),n.forEach(v),this.h()},h(){$(e,"class","svelte-x5x5bq")},m(i,n){C(i,e,n),E(t,e,null),S(e,l),r=!0},p:H,i(i){r||(d(t.$$.fragment,i),r=!0)},o(i){m(t.$$.fragment,i),r=!1},d(i){i&&v(e),L(t)}}}function un(s){let e,t,l,r,i,n,a,o,c,h;r=new P({props:{content:"Protocol"}}),n=new P({props:{content:s[0]?"–":"+"}});let u=s[0]&&Le(s);return{c(){e=V("div"),t=V("button"),l=V("div"),D(r.$$.fragment),i=j(),D(n.$$.fragment),a=j(),u&&u.c(),this.h()},l(f){e=x(f,"DIV",{class:!0});var g=B(e);t=x(g,"BUTTON",{class:!0});var b=B(t);l=x(b,"DIV",{class:!0});var w=B(l);I(r.$$.fragment,w),w.forEach(v),i=A(b),I(n.$$.fragment,b),b.forEach(v),a=A(g),u&&u.l(g),g.forEach(v),this.h()},h(){$(l,"class","text svelte-x5x5bq"),$(t,"class","header text-left svelte-x5x5bq"),$(e,"class","accordion p-xs svelte-x5x5bq")},m(f,g){C(f,e,g),S(e,t),S(t,l),E(r,l,null),S(t,i),E(n,t,null),S(e,a),u&&u.m(e,null),s[5](e),o=!0,c||(h=he(t,"click",s[3]),c=!0)},p(f,[g]){const b={};g&1&&(b.content=f[0]?"–":"+"),n.$set(b),f[0]?u?(u.p(f,g),g&1&&d(u,1)):(u=Le(f),u.c(),d(u,1),u.m(e,null)):u&&(N(),m(u,1,1,()=>{u=null}),G())},i(f){o||(d(r.$$.fragment,f),d(n.$$.fragment,f),d(u),o=!0)},o(f){m(r.$$.fragment,f),m(n.$$.fragment,f),m(u),o=!1},d(f){f&&v(e),L(r),L(n),u&&u.d(),s[5](null),c=!1,h()}}}function fn(s,e,t){let{open:l=!1}=e,{topic:r}=e;const i=cn(r);let n;const a=()=>{t(0,l=!l)};function o(c){X[c?"unshift":"push"](()=>{n=c,t(1,n)})}return s.$$set=c=>{"open"in c&&t(0,l=c.open),"topic"in c&&t(4,r=c.topic)},[l,n,i,a,r,o]}class hn extends Y{constructor(e){super(),U(this,e,fn,un,R,{open:0,topic:4})}}function Ce(s){let e,t,l;return t=new se({props:{url:"#",theme:"download",class:"flex gap-xxs items-center",fn:s[7],$$slots:{default:[dn]},$$scope:{ctx:s}}}),{c(){e=V("div"),D(t.$$.fragment),this.h()},l(r){e=x(r,"DIV",{class:!0});var i=B(e);I(t.$$.fragment,i),i.forEach(v),this.h()},h(){$(e,"class","flex gap-xs pb-s")},m(r,i){C(r,e,i),E(t,e,null),l=!0},p(r,i){const n={};i&128&&(n.fn=r[7]),i&256&&(n.$$scope={dirty:i,ctx:r}),t.$set(n)},i(r){l||(d(t.$$.fragment,r),l=!0)},o(r){m(t.$$.fragment,r),l=!1},d(r){r&&v(e),L(t)}}}function dn(s){let e,t,l,r;return e=new P({props:{typo:"small",content:"download data"}}),l=new Ke({props:{width:"8"}}),{c(){D(e.$$.fragment),t=j(),D(l.$$.fragment)},l(i){I(e.$$.fragment,i),t=A(i),I(l.$$.fragment,i)},m(i,n){E(e,i,n),C(i,t,n),E(l,i,n),r=!0},p:H,i(i){r||(d(e.$$.fragment,i),d(l.$$.fragment,i),r=!0)},o(i){m(e.$$.fragment,i),m(l.$$.fragment,i),r=!1},d(i){i&&v(t),L(e,i),L(l,i)}}}function gn(s){let e,t,l,r,i,n,a,o,c,h,u,f,g,b,w,T,_,y;l=new P({props:{typo:"h2",content:s[4]}}),n=new P({props:{typo:"label",content:"WHAT AM I LOOKING AT?"}}),o=new P({props:{typo:"p",content:s[5]}}),h=new Vt({props:{queries:s[2],showLang:s[3],checkbox:s[0],order:s[1]}}),g=new P({props:{typo:"label",content:"Resources",class:"case-upper"}});let k=s[7]&&Ce(s);return _=new hn({props:{topic:s[6]}}),{c(){e=V("div"),t=V("div"),D(l.$$.fragment),r=j(),i=V("div"),D(n.$$.fragment),a=j(),D(o.$$.fragment),c=j(),D(h.$$.fragment),u=j(),f=V("div"),D(g.$$.fragment),b=j(),w=V("div"),k&&k.c(),T=j(),D(_.$$.fragment),this.h()},l(p){e=x(p,"DIV",{class:!0});var O=B(e);t=x(O,"DIV",{class:!0});var q=B(t);I(l.$$.fragment,q),q.forEach(v),r=A(O),i=x(O,"DIV",{class:!0});var J=B(i);I(n.$$.fragment,J),a=A(J),I(o.$$.fragment,J),J.forEach(v),c=A(O),I(h.$$.fragment,O),u=A(O),f=x(O,"DIV",{class:!0});var M=B(f);I(g.$$.fragment,M),b=A(M),w=x(M,"DIV",{});var W=B(w);k&&k.l(W),T=A(W),I(_.$$.fragment,W),W.forEach(v),M.forEach(v),O.forEach(v),this.h()},h(){$(t,"class","group"),$(i,"class","group flex flex-col gap-xs"),$(f,"class","group flex flex-col gap-xs"),$(e,"class","sidebar flex flex-col gap-l py-m px-s scrollbar-hide svelte-1i17fy9")},m(p,O){C(p,e,O),S(e,t),E(l,t,null),S(e,r),S(e,i),E(n,i,null),S(i,a),E(o,i,null),S(e,c),E(h,e,null),S(e,u),S(e,f),E(g,f,null),S(f,b),S(f,w),k&&k.m(w,null),S(w,T),E(_,w,null),y=!0},p(p,[O]){const q={};O&16&&(q.content=p[4]),l.$set(q);const J={};O&32&&(J.content=p[5]),o.$set(J);const M={};O&4&&(M.queries=p[2]),O&8&&(M.showLang=p[3]),O&1&&(M.checkbox=p[0]),O&2&&(M.order=p[1]),h.$set(M),p[7]?k?(k.p(p,O),O&128&&d(k,1)):(k=Ce(p),k.c(),d(k,1),k.m(w,T)):k&&(N(),m(k,1,1,()=>{k=null}),G());const W={};O&64&&(W.topic=p[6]),_.$set(W)},i(p){y||(d(l.$$.fragment,p),d(n.$$.fragment,p),d(o.$$.fragment,p),d(h.$$.fragment,p),d(g.$$.fragment,p),d(k),d(_.$$.fragment,p),y=!0)},o(p){m(l.$$.fragment,p),m(n.$$.fragment,p),m(o.$$.fragment,p),m(h.$$.fragment,p),m(g.$$.fragment,p),m(k),m(_.$$.fragment,p),y=!1},d(p){p&&v(e),L(l),L(n),L(o),L(h),L(g),k&&k.d(),L(_)}}}function mn(s,e,t){let{checkbox:l=!1}=e,{order:r=!1}=e,{queries:i}=e,{showLang:n=!0}=e,{question:a}=e,{description:o}=e,{topic:c}=e,{download:h}=e;return s.$$set=u=>{"checkbox"in u&&t(0,l=u.checkbox),"order"in u&&t(1,r=u.order),"queries"in u&&t(2,i=u.queries),"showLang"in u&&t(3,n=u.showLang),"question"in u&&t(4,a=u.question),"description"in u&&t(5,o=u.description),"topic"in u&&t(6,c=u.topic),"download"in u&&t(7,h=u.download)},[l,r,i,n,a,o,c,h]}class On extends Y{constructor(e){super(),U(this,e,mn,gn,R,{checkbox:0,order:1,queries:2,showLang:3,question:4,description:5,topic:6,download:7})}}export{Re as L,On as S,En as a,Dn as b,In as c,Ln as g,ue as q};