import{s as R,q as K,r as Be,H as Ve,v as je,b as O,w as xe,f as v,x as te,i as V,n as F,y as ne,e as S,t as He,c as B,d as Fe,p as k,h as C,j as We,T as se,ab as Pe,a as x,g as P,ac as re,B as de,ad as ze,E as Ne,K as H,O as ee,ae as le,k as ae,U as Je,F as me,D as Ke}from"./scheduler.DjmlZpBi.js";import{S as U,i as Y,t as g,g as G,f as M,a as p,c as D,b as I,m as L,d as E,h as oe,e as _e}from"./index.D5mPgV2_.js";import{l as Ae,s as pe,D as Qe}from"./index.BWSmiydm.js";import{L as ie,e as Xe}from"./link.CABtjuFr.js";import{T as N}from"./text.DH_QAwnB.js";import{d as Ze,w as et,g as tt}from"./entry.CVIz9e79.js";import{p as nt}from"./stores.CZLy9Llw.js";import{g as Ge}from"./spread.CN4WR7uZ.js";import{b as rt}from"./tokens.DVXvbK2-.js";import{e as W}from"./each.K9NGHkqs.js";const st=!0,In=st;class lt extends Map{constructor(e,t=at){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[s,r]of e)this.set(s,r)}get(e){return super.get(ve(this,e))}has(e){return super.has(ve(this,e))}set(e,t){return super.set(ot(this,e),t)}delete(e){return super.delete(it(this,e))}}function ve({_intern:l,_key:e},t){const s=e(t);return l.has(s)?l.get(s):t}function ot({_intern:l,_key:e},t){const s=e(t);return l.has(s)?l.get(s):(l.set(s,t),t)}function it({_intern:l,_key:e},t){const s=e(t);return l.has(s)&&(t=l.get(t),l.delete(s)),t}function at(l){return l!==null&&typeof l=="object"?l.valueOf():l}function ge(l){return l}function Ln(l,...e){return Me(l,ge,ge,e)}function En(l,...e){return Me(l,Array.from,ge,e)}function Me(l,e,t,s){return function r(i,n){if(n>=s.length)return t(i);const a=new lt,o=s[n++];let u=-1;for(const f of i){const h=o(f,++u,i),c=a.get(h);c?c.push(f):a.set(h,[f])}for(const[f,h]of a)a.set(f,r(h,n));return e(a)}(l,0)}let Re;Re=nt;const ut={keepFocus:!0,noScroll:!0,replaceState:!0},ct={keepFocus:!0,noScroll:!0,replaceState:!1};function ue(l,e,t=(s,r)=>JSON.stringify(s)===JSON.stringify(r)){return typeof l=="object"&&typeof e=="object"&&t(l,e)}const ce=new Set;let be;const we=new Map,fe={encode:l=>l.toString(),decode:l=>l?l.toString():null};function he(l,{encode:e=fe.encode,decode:t=fe.decode,defaultValue:s}=fe,{debounceHistory:r=0,pushHistory:i=!0,sort:n=!0,showDefaults:a=!0,equalityFn:o}={}){const u=et(null);let f=!0,h;function c(b,w){f=!1;const q=window.location.hash,_=T=>{if(b==null)T.delete(l);else{const j=e(b);j==null?T.delete(l):T.set(l,j)}};ce.add(_),clearTimeout(be);const $=new URLSearchParams(window.location.search);be=setTimeout(async()=>{ce.forEach(T=>{T($)}),clearTimeout(we.get(l));{u.set(b);async function T(){n&&$.sort(),await tt(`?${$}${q}`,i?ct:ut),u.set(null)}w||r===0?T():we.set(l,setTimeout(T,r))}ce.clear()})}const{subscribe:d}=Ze([Re,u],([b,w],q)=>{var T,j,y;if(w!=null)return ue(h,w,o)?void 0:(h=structuredClone(w),q(w));const _=(y=(j=(T=b==null?void 0:b.url)==null?void 0:T.searchParams)==null?void 0:j.get)==null?void 0:y.call(j,l);if(_==null&&s!=null)return a&&c(s,f),ue(h,s,o)?void 0:(h=structuredClone(s),q(s));const $=t(_);if(!ue(h,$,o))return h=structuredClone($),q($)});return{set(b){c(b)},subscribe:d,update:b=>{const w=b(h);c(w)}}}function ft(l){let e,t,s='<path d="M2 2H32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M6 11H28" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M11 20H23" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',r=[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l[0]],i={};for(let n=0;n<r.length;n+=1)i=K(i,r[n]);return{c(){e=Be("svg"),t=new Ve(!0),this.h()},l(n){e=je(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=O(e);t=xe(a,!0),a.forEach(v),this.h()},h(){t.a=null,te(e,i)},m(n,a){V(n,e,a),t.m(s,e)},p(n,[a]){te(e,i=Ge(r,[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:F,o:F,d(n){n&&v(e)}}}function ht(l,e,t){return l.$$set=s=>{t(0,e=K(K({},e),ne(s)))},e=ne(e),[e]}class gt extends U{constructor(e){super(),Y(this,e,ht,ft,R,{})}}function dt(l){let e,t,s,r;return{c(){e=S("label"),t=He(l[0]),this.h()},l(i){e=B(i,"LABEL",{class:!0,for:!0,style:!0});var n=O(e);t=Fe(n,l[0]),n.forEach(v),this.h()},h(){k(e,"class",s="typo-"+l[3]+" svelte-idnrzj"),k(e,"for",l[1]),k(e,"style",r=`--background: var(--color-${l[2]})`)},m(i,n){V(i,e,n),C(e,t)},p(i,[n]){n&1&&We(t,i[0]),n&8&&s!==(s="typo-"+i[3]+" svelte-idnrzj")&&k(e,"class",s),n&2&&k(e,"for",i[1]),n&4&&r!==(r=`--background: var(--color-${i[2]})`)&&k(e,"style",r)},i:F,o:F,d(i){i&&v(e)}}}function mt(l,e,t){let{label:s}=e,{rel:r=void 0}=e,{color:i="white"}=e,{typo:n="small"}=e;return l.$$set=a=>{"label"in a&&t(0,s=a.label),"rel"in a&&t(1,r=a.rel),"color"in a&&t(2,i=a.color),"typo"in a&&t(3,n=a.typo)},[s,r,i,n]}class Ue extends U{constructor(e){super(),Y(this,e,mt,dt,R,{label:0,rel:1,color:2,typo:3})}}function ke(l,e,t){const s=l.slice();return s[5]=e[t].label,s[6]=e[t].code,s[7]=e[t].color,s}function $e(l){let e,t,s,r=!1,i,n,a,o,u,f,h;return a=new Ue({props:{label:l[5],rel:l[6],color:l[7]}}),u=Pe(l[4][0]),{c(){e=S("input"),n=x(),D(a.$$.fragment),this.h()},l(c){e=B(c,"INPUT",{class:!0,type:!0,id:!0,"aria-checked":!0}),n=P(c),I(a.$$.fragment,c),this.h()},h(){k(e,"class","sr-only svelte-1nwrcna"),k(e,"type","checkbox"),k(e,"id",t=l[6]),e.__value=s=l[6],re(e,e.__value),k(e,"aria-checked",i=l[0]===l[6]),u.p(e)},m(c,d){V(c,e,d),e.checked=~(l[0]||[]).indexOf(e.__value),V(c,n,d),L(a,c,d),o=!0,f||(h=de(e,"change",l[3]),f=!0)},p(c,d){(!o||d&2&&t!==(t=c[6]))&&k(e,"id",t),(!o||d&2&&s!==(s=c[6]))&&(e.__value=s,re(e,e.__value),r=!0),(!o||d&3&&i!==(i=c[0]===c[6]))&&k(e,"aria-checked",i),(r||d&3)&&(e.checked=~(c[0]||[]).indexOf(e.__value));const b={};d&2&&(b.label=c[5]),d&2&&(b.rel=c[6]),d&2&&(b.color=c[7]),a.$set(b)},i(c){o||(g(a.$$.fragment,c),o=!0)},o(c){p(a.$$.fragment,c),o=!1},d(c){c&&(v(e),v(n)),E(a,c),u.r(),f=!1,h()}}}function _t(l){let e,t,s=W(l[1]),r=[];for(let n=0;n<s.length;n+=1)r[n]=$e(ke(l,s,n));const i=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{role:!0,class:!0});var a=O(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){k(e,"role","checkbox"),k(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&3){s=W(n[1]);let o;for(o=0;o<s.length;o+=1){const u=ke(n,s,o);r[o]?(r[o].p(u,a),g(r[o],1)):(r[o]=$e(u),r[o].c(),g(r[o],1),r[o].m(e,null))}for(G(),o=s.length;o<r.length;o+=1)i(o);M()}},i(n){if(!t){for(let a=0;a<s.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);t=!1},d(n){n&&v(e),se(r,n)}}}function pt(l,e,t){let s,{items:r}=e,{value:i=null}=e;const n=[[]];function a(){i=ze(n[0],this.__value,this.checked),t(0,i)}return l.$$set=o=>{"items"in o&&t(2,r=o.items),"value"in o&&t(0,i=o.value)},l.$$.update=()=>{l.$$.dirty&4&&t(1,s=Array.isArray(r)?r:Object.values(r))},[i,s,r,a,n]}class vt extends U{constructor(e){super(),Y(this,e,pt,_t,R,{items:2,value:0})}}function bt(l){let e,t,s='<path d="M13 1L7 7L1 0.999999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r=[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l[0]],i={};for(let n=0;n<r.length;n+=1)i=K(i,r[n]);return{c(){e=Be("svg"),t=new Ve(!0),this.h()},l(n){e=je(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=O(e);t=xe(a,!0),a.forEach(v),this.h()},h(){t.a=null,te(e,i)},m(n,a){V(n,e,a),t.m(s,e)},p(n,[a]){te(e,i=Ge(r,[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:F,o:F,d(n){n&&v(e)}}}function wt(l,e,t){return l.$$set=s=>{t(0,e=K(K({},e),ne(s)))},e=ne(e),[e]}class kt extends U{constructor(e){super(),Y(this,e,wt,bt,R,{})}}function ye(l,e,t){const s=l.slice();return s[9]=e[t],s}function $t(l){var i,n,a;let e,t,s,r;return e=new N({props:{class:l[3]?"":"opacity-50",content:(i=l[1])!=null&&i.length?((n=l[3])==null?void 0:n.title)||((a=l[3])==null?void 0:a.queryLabel)||"Select":"Loading...",typo:"p"}}),s=new kt({props:{width:12}}),{c(){D(e.$$.fragment),t=x(),D(s.$$.fragment)},l(o){I(e.$$.fragment,o),t=P(o),I(s.$$.fragment,o)},m(o,u){L(e,o,u),V(o,t,u),L(s,o,u),r=!0},p(o,u){var h,c,d;const f={};u&8&&(f.class=o[3]?"":"opacity-50"),u&10&&(f.content=(h=o[1])!=null&&h.length?((c=o[3])==null?void 0:c.title)||((d=o[3])==null?void 0:d.queryLabel)||"Select":"Loading..."),e.$set(f)},i(o){r||(g(e.$$.fragment,o),g(s.$$.fragment,o),r=!0)},o(o){p(e.$$.fragment,o),p(s.$$.fragment,o),r=!1},d(o){o&&v(t),E(e,o),E(s,o)}}}function qe(l){let e,t,s=W(l[1]),r=[];for(let n=0;n<s.length;n+=1)r[n]=Te(ye(l,s,n));const i=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{class:!0});var a=O(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){k(e,"class","list scrollbar-hide svelte-rjfnlc"),H(e,"show",l[2])},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,a){if(a&19){s=W(n[1]);let o;for(o=0;o<s.length;o+=1){const u=ye(n,s,o);r[o]?(r[o].p(u,a),g(r[o],1)):(r[o]=Te(u),r[o].c(),g(r[o],1),r[o].m(e,null))}for(G(),o=s.length;o<r.length;o+=1)i(o);M()}(!t||a&4)&&H(e,"show",n[2])},i(n){if(!t){for(let a=0;a<s.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);t=!1},d(n){n&&v(e),se(r,n)}}}function Te(l){let e,t;function s(){return l[7](l[9])}return e=new ie({props:{class:`button p-xs ${l[9].slug===l[0]?"selected":""}`,text:l[9].title||l[9].queryLabel,fn:s}}),{c(){D(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,i){L(e,r,i),t=!0},p(r,i){l=r;const n={};i&3&&(n.class=`button p-xs ${l[9].slug===l[0]?"selected":""}`),i&2&&(n.text=l[9].title||l[9].queryLabel),i&2&&(n.fn=s),e.$set(n)},i(r){t||(g(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){E(e,r)}}}function yt(l){var n;let e,t,s,r;t=new ie({props:{class:`dropdown-btn flex-btw-center p-xs ${l[2]?"active":""}`,fn:l[6],$$slots:{default:[$t]},$$scope:{ctx:l}}});let i=((n=l[1])==null?void 0:n.length)&&qe(l);return{c(){e=S("div"),D(t.$$.fragment),s=x(),i&&i.c(),this.h()},l(a){e=B(a,"DIV",{class:!0,ref:!0});var o=O(e);I(t.$$.fragment,o),s=P(o),i&&i.l(o),o.forEach(v),this.h()},h(){k(e,"class","dropdown svelte-rjfnlc"),k(e,"ref",l[5])},m(a,o){V(a,e,o),L(t,e,null),C(e,s),i&&i.m(e,null),r=!0},p(a,[o]){var f;const u={};o&4&&(u.class=`dropdown-btn flex-btw-center p-xs ${a[2]?"active":""}`),o&4&&(u.fn=a[6]),o&4106&&(u.$$scope={dirty:o,ctx:a}),t.$set(u),(f=a[1])!=null&&f.length?i?(i.p(a,o),o&2&&g(i,1)):(i=qe(a),i.c(),g(i,1),i.m(e,null)):i&&(G(),p(i,1,1,()=>{i=null}),M())},i(a){r||(g(t.$$.fragment,a),g(i),r=!0)},o(a){p(t.$$.fragment,a),p(i),r=!1},d(a){a&&v(e),E(t),i&&i.d()}}}function qt(l,e,t){let s,{items:r}=e,{value:i=null}=e,n=!1;const a=c=>{t(0,i=c),t(2,n=!1)};let o;Ne(()=>(document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}));const u=c=>{c.target.closest(".dropdown")||t(2,n=!1)},f=()=>t(2,n=!n),h=c=>a(c.slug||c.query);return l.$$set=c=>{"items"in c&&t(1,r=c.items),"value"in c&&t(0,i=c.value)},l.$$.update=()=>{var c;l.$$.dirty&3&&t(3,s=(c=r==null?void 0:r.find)==null?void 0:c.call(r,d=>(d.slug||d.query)===i))},[i,r,n,s,a,o,f,h]}class Tt extends U{constructor(e){super(),Y(this,e,qt,yt,R,{items:1,value:0})}}function De(l,e,t){const s=l.slice();return s[6]=e[t].label,s[7]=e[t].code,s[8]=e[t].color,s}function Ie(l){let e,t,s,r=!1,i,n,a,o,u,f;return n=new Ue({props:{label:l[6],rel:l[7],color:l[8]}}),o=Pe(l[5][0]),{c(){e=S("input"),i=x(),D(n.$$.fragment),this.h()},l(h){e=B(h,"INPUT",{class:!0,type:!0,id:!0}),i=P(h),I(n.$$.fragment,h),this.h()},h(){k(e,"class","sr-only svelte-64kelq"),k(e,"type","radio"),k(e,"id",t=l[7]),e.__value=s=l[7],re(e,e.__value),H(e,"noDot",l[1]),o.p(e)},m(h,c){V(h,e,c),e.checked=e.__value===l[0],V(h,i,c),L(n,h,c),a=!0,u||(f=de(e,"change",l[4]),u=!0)},p(h,c){(!a||c&4&&t!==(t=h[7]))&&k(e,"id",t),(!a||c&4&&s!==(s=h[7]))&&(e.__value=s,re(e,e.__value),r=!0),(r||c&5)&&(e.checked=e.__value===h[0]),(!a||c&2)&&H(e,"noDot",h[1]);const d={};c&4&&(d.label=h[6]),c&4&&(d.rel=h[7]),c&4&&(d.color=h[8]),n.$set(d)},i(h){a||(g(n.$$.fragment,h),a=!0)},o(h){p(n.$$.fragment,h),a=!1},d(h){h&&(v(e),v(i)),E(n,h),o.r(),u=!1,f()}}}function Dt(l){let e,t,s=W(l[2]),r=[];for(let n=0;n<s.length;n+=1)r[n]=Ie(De(l,s,n));const i=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{role:!0,class:!0});var a=O(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){k(e,"role","radiogroup"),k(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&7){s=W(n[2]);let o;for(o=0;o<s.length;o+=1){const u=De(n,s,o);r[o]?(r[o].p(u,a),g(r[o],1)):(r[o]=Ie(u),r[o].c(),g(r[o],1),r[o].m(e,null))}for(G(),o=s.length;o<r.length;o+=1)i(o);M()}},i(n){if(!t){for(let a=0;a<s.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);t=!1},d(n){n&&v(e),se(r,n)}}}function It(l,e,t){let s,{items:r}=e,{value:i=null}=e,{noDot:n=!1}=e;const a=[[]];function o(){i=this.__value,t(0,i)}return l.$$set=u=>{"items"in u&&t(3,r=u.items),"value"in u&&t(0,i=u.value),"noDot"in u&&t(1,n=u.noDot)},l.$$.update=()=>{l.$$.dirty&8&&t(2,s=Array.isArray(r)?r:Object.values(r))},[i,n,s,r,o,a]}class Ye extends U{constructor(e){super(),Y(this,e,It,Dt,R,{items:3,value:0,noDot:1})}}function Le(l){let e,t,s,r,i,n;t=new N({props:{typo:"label",content:"Language",class:"case-upper"}});const a=[Et,Lt],o=[];function u(f,h){return f[2]?0:1}return r=u(l),i=o[r]=a[r](l),{c(){e=S("div"),D(t.$$.fragment),s=x(),i.c(),this.h()},l(f){e=B(f,"DIV",{class:!0});var h=O(e);I(t.$$.fragment,h),s=P(h),i.l(h),h.forEach(v),this.h()},h(){k(e,"class","group flex flex-col gap-xs")},m(f,h){V(f,e,h),L(t,e,null),C(e,s),o[r].m(e,null),n=!0},p(f,h){let c=r;r=u(f),r===c?o[r].p(f,h):(G(),p(o[c],1,1,()=>{o[c]=null}),M(),i=o[r],i?i.p(f,h):(i=o[r]=a[r](f),i.c()),g(i,1),i.m(e,null))},i(f){n||(g(t.$$.fragment,f),g(i),n=!0)},o(f){p(t.$$.fragment,f),p(i),n=!1},d(f){f&&v(e),E(t),o[r].d()}}}function Lt(l){let e,t,s;function r(n){l[14](n)}let i={items:Ae};return l[5]!==void 0&&(i.value=l[5]),e=new Ye({props:i}),ee.push(()=>oe(e,"value",r)),{c(){D(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,a){L(e,n,a),s=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],le(()=>t=!1)),e.$set(o)},i(n){s||(g(e.$$.fragment,n),s=!0)},o(n){p(e.$$.fragment,n),s=!1},d(n){E(e,n)}}}function Et(l){let e,t,s;function r(n){l[13](n)}let i={items:Ae};return l[5]!==void 0&&(i.value=l[5]),e=new vt({props:i}),ee.push(()=>oe(e,"value",r)),{c(){D(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,a){L(e,n,a),s=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],le(()=>t=!1)),e.$set(o)},i(n){s||(g(e.$$.fragment,n),s=!0)},o(n){p(e.$$.fragment,n),s=!1},d(n){E(e,n)}}}function Ee(l){let e,t,s,r,i,n;t=new N({props:{typo:"label",content:"Order",class:"case-upper"}});function a(u){l[15](u)}let o={items:l[11],noDot:!0};return l[7]!==void 0&&(o.value=l[7]),r=new Ye({props:o}),ee.push(()=>oe(r,"value",a)),{c(){e=S("div"),D(t.$$.fragment),s=x(),D(r.$$.fragment),this.h()},l(u){e=B(u,"DIV",{class:!0});var f=O(e);I(t.$$.fragment,f),s=P(f),I(r.$$.fragment,f),f.forEach(v),this.h()},h(){k(e,"class","group flex flex-col gap-xs")},m(u,f){V(u,e,f),L(t,e,null),C(e,s),L(r,e,null),n=!0},p(u,f){const h={};!i&&f&128&&(i=!0,h.value=u[7],le(()=>i=!1)),r.$set(h)},i(u){n||(g(t.$$.fragment,u),g(r.$$.fragment,u),n=!0)},o(u){p(t.$$.fragment,u),p(r.$$.fragment,u),n=!1},d(u){u&&v(e),E(t),E(r)}}}function Ct(l){let e,t;return e=new gt({props:{height:"16"}}),{c(){D(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,r){L(e,s,r),t=!0},i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function Ot(l){let e,t;return e=new N({props:{content:"Confirm",typo:"small"}}),{c(){D(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,r){L(e,s,r),t=!0},i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){p(e.$$.fragment,s),t=!1},d(s){E(e,s)}}}function St(l){let e,t,s,r;const i=[Ot,Ct],n=[];function a(o,u){return o[4]?0:1}return e=a(l),t=n[e]=i[e](l),{c(){t.c(),s=me()},l(o){t.l(o),s=me()},m(o,u){n[e].m(o,u),V(o,s,u),r=!0},p(o,u){let f=e;e=a(o),e!==f&&(G(),p(n[f],1,1,()=>{n[f]=null}),M(),t=n[e],t||(t=n[e]=i[e](o),t.c()),g(t,1),t.m(s.parentNode,s))},i(o){r||(g(t),r=!0)},o(o){p(t),r=!1},d(o){o&&v(s),n[e].d(o)}}}function Bt(l){let e,t,s,r,i,n,a,o,u,f,h,c;s=new N({props:{typo:"label",content:"Query",class:"case-upper"}});function d(_){l[12](_)}let b={items:l[1]};l[6]!==void 0&&(b.value=l[6]),i=new Tt({props:b}),ee.push(()=>oe(i,"value",d));let w=l[0]&&Le(l),q=l[3]&&Ee(l);return h=new ie({props:{class:"button pointer-events-initial",fn:l[16],theme:"cta",$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){e=S("div"),t=S("div"),D(s.$$.fragment),r=x(),D(i.$$.fragment),a=x(),w&&w.c(),o=x(),q&&q.c(),u=x(),f=S("div"),D(h.$$.fragment),this.h()},l(_){e=B(_,"DIV",{class:!0});var $=O(e);t=B($,"DIV",{class:!0});var T=O(t);I(s.$$.fragment,T),r=P(T),I(i.$$.fragment,T),T.forEach(v),a=P($),w&&w.l($),o=P($),q&&q.l($),$.forEach(v),u=P(_),f=B(_,"DIV",{class:!0});var j=O(f);I(h.$$.fragment,j),j.forEach(v),this.h()},h(){k(t,"class","group flex flex-col gap-xs"),k(e,"class","filters px-s py-m xl:p-0 svelte-1v2kozf"),H(e,"show",l[4]),k(f,"class","cta pointer-events-none xl:hidden svelte-1v2kozf"),H(f,"open",l[4])},m(_,$){V(_,e,$),C(e,t),L(s,t,null),C(t,r),L(i,t,null),C(e,a),w&&w.m(e,null),C(e,o),q&&q.m(e,null),V(_,u,$),V(_,f,$),L(h,f,null),c=!0},p(_,[$]){const T={};$&2&&(T.items=_[1]),!n&&$&64&&(n=!0,T.value=_[6],le(()=>n=!1)),i.$set(T),_[0]?w?(w.p(_,$),$&1&&g(w,1)):(w=Le(_),w.c(),g(w,1),w.m(e,o)):w&&(G(),p(w,1,1,()=>{w=null}),M()),_[3]?q?(q.p(_,$),$&8&&g(q,1)):(q=Ee(_),q.c(),g(q,1),q.m(e,null)):q&&(G(),p(q,1,1,()=>{q=null}),M()),(!c||$&16)&&H(e,"show",_[4]);const j={};$&16&&(j.fn=_[16]),$&262160&&(j.$$scope={dirty:$,ctx:_}),h.$set(j),(!c||$&16)&&H(f,"open",_[4])},i(_){c||(g(s.$$.fragment,_),g(i.$$.fragment,_),g(w),g(q),g(h.$$.fragment,_),c=!0)},o(_){p(s.$$.fragment,_),p(i.$$.fragment,_),p(w),p(q),p(h.$$.fragment,_),c=!1},d(_){_&&(v(e),v(u),v(f)),E(s),E(i),w&&w.d(),q&&q.d(),E(h)}}}function Vt(l,e,t){var y;let s,r,i,{showLang:n=!0}=e,{queries:a}=e,{checkbox:o=!1}=e,{order:u=!1}=e,f=he("query"),h=he("lang"),c=he("order");ae(l,f,m=>t(6,r=m)),ae(l,h,m=>t(17,s=m)),ae(l,c,m=>t(7,i=m));let d=!1,b=s?o?(y=s==null?void 0:s.split)==null?void 0:y.call(s," "):s:[];Ne(async()=>{setTimeout(()=>{var m;t(5,b=o?((m=s==null?void 0:s.split)==null?void 0:m.call(s," "))||[]:s)},100)});const w=[{label:"Views",code:"views"},{label:"Comments",code:"comments"},{label:"Likes",code:"likes"},{label:"Date",code:"date"}];function q(m){r=m,f.set(r)}function _(m){b=m,t(5,b)}function $(m){b=m,t(5,b)}function T(m){i=m,c.set(i)}const j=()=>t(4,d=!d);return l.$$set=m=>{"showLang"in m&&t(0,n=m.showLang),"queries"in m&&t(1,a=m.queries),"checkbox"in m&&t(2,o=m.checkbox),"order"in m&&t(3,u=m.order)},l.$$.update=()=>{var m;l.$$.dirty&16&&document.body.classList.toggle("scroll-lock",d),l.$$.dirty&32&&Je(h,s=((m=b==null?void 0:b.join)==null?void 0:m.call(b," "))||b,s)},innerWidth>Xe(rt.l)&&t(4,d=!1),[n,a,o,u,d,b,r,i,f,h,c,w,q,_,$,T,j]}class jt extends U{constructor(e){super(),Y(this,e,Vt,Bt,R,{showLang:0,queries:1,checkbox:2,order:3})}}const xt="Getty Images circulation",Pt="By which web pages are the most significant stock photos used?",Nt="When stock images travel online, their meaning shifts. This page showcases the contextual usage of some of the most frequently encountered visual stereotypes sourced from Getty Images for each query. By selecting an image, users can explore a list of websites where the image is hosted.",At=["For each stereotype, collect the 3 highest ranked images","Reverse search images on Google Image Search","Collect top 20 web pages hosting the images","Collect URL and Title for each web page","Delete unrelated results"],Gt={title:xt,research_question:Pt,description:Nt,protocol:At},Mt="Getty Images stereotypes",Rt="Which visual tropes emerge in connection to different pollution routes, practices and substances?",Ut="GettyImages provides insight into the visual repertoire associated with toxicities. This page shows images returned by GettyImages for each query. Images are grouped into clusters of stereotypes. Clusters of stereotypes are ordered alphabetically.",Yt=["Search term on Getty Images","Collect top 1000 images per search term using a custom script","Cluster images in each dataset based on formal similarity","Identify most recurrent visual stereotypes and name each cluster"],Ht={title:Mt,research_question:Rt,description:Ut,protocol:Yt},Ft={},Wt="TikTok topics",zt="Which topics are connected to different substances, practices and devices?",Jt="On TikTok users share fears, practices, and information about toxicities. This page collects clusters of similar hashtags, resized based on their frequency of use. By clicking on a cluster, users can explore videos associated with those hashtags.",Kt=["Search terms on TikTok in the local language","Collect top videos per query","Collect hashtags for each video","Clusters similar hashtags using clustering sentence embeddings","Delete unrelated clusters of hashtags","Fine tune and name identified clusters of videos"],Qt={title:Wt,research_question:zt,description:Jt,protocol:Kt},Xt="Youtube clusters",Zt="What topics are each substance related to through the recommendation algorithm?",en="YouTube's algorithm suggests videos to users through the autoplay feature and its interface Networks of suggested videos offer a window into the thematic areas that connect substances, practices, and formats. This page displays thematic clusters of videos identified among those recommended by YouTube for each substance. Clusters are ordered alphabetically.",tn=["Search terms on YouTube (with language and country filter activated)","Collect the top 50 results for each query term using YouTube Data Tools","Collect recommended videos to the top 50 results per language and substance","Identify clusters of similar videos in each dataset using clustering sentence embeddings","Fine tune and name identified clusters of videos"],nn={title:Xt,research_question:Zt,description:en,protocol:tn},rn="Youtube language comparison",sn="How do video results about substances change according to the language of the query?",ln="Video results on YouTube vary depending on the language of the query. This page displays the top 50 videos for each query across different languages, merged together. Videos can be filtered by language and ordered by number of views, time, and like count.",on=["Search term on YouTube (with language and country filter activated)","Collect the top 50 results for each query term using YouTube Data Tools","Delete unrelated results from the list","Collect metadata (likes, views, and timestamps)","Compile results from different languages in one list per query"],an={title:rn,research_question:sn,description:ln,protocol:on},Z={getty_circulation:Gt,getty_stereotypes:Ht,tiktok:Qt,youtube_language:an,youtube_clusters:nn,globals:Ft},un=(l="globals",e,t)=>Z[l]&&Z[l][e]?t?Z[l][e][t]:Z[l][e]:null,Cn=l=>(e,t)=>un(l,e,t),cn=l=>{var e;return(e=Z[l])==null?void 0:e.protocol};function Ce(l,e,t){const s=l.slice();return s[6]=e[t],s}function Oe(l){let e,t,s,r=W(l[2]),i=[];for(let a=0;a<r.length;a+=1)i[a]=Se(Ce(l,r,a));const n=a=>p(i[a],1,1,()=>{i[a]=null});return{c(){e=S("ol");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=B(a,"OL",{class:!0});var o=O(e);for(let u=0;u<i.length;u+=1)i[u].l(o);o.forEach(v),this.h()},h(){k(e,"class","details svelte-1qlxqyu")},m(a,o){V(a,e,o);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(e,null);s=!0},p(a,o){if(o&4){r=W(a[2]);let u;for(u=0;u<r.length;u+=1){const f=Ce(a,r,u);i[u]?(i[u].p(f,o),g(i[u],1)):(i[u]=Se(f),i[u].c(),g(i[u],1),i[u].m(e,null))}for(G(),u=r.length;u<i.length;u+=1)n(u);M()}},i(a){if(!s){for(let o=0;o<r.length;o+=1)g(i[o]);a&&Ke(()=>{s&&(t||(t=_e(e,pe,{},!0)),t.run(1))}),s=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)p(i[o]);a&&(t||(t=_e(e,pe,{},!1)),t.run(0)),s=!1},d(a){a&&v(e),se(i,a),a&&t&&t.end()}}}function Se(l){let e,t,s,r;return t=new N({props:{content:l[6]}}),{c(){e=S("li"),D(t.$$.fragment),s=x(),this.h()},l(i){e=B(i,"LI",{class:!0});var n=O(e);I(t.$$.fragment,n),s=P(n),n.forEach(v),this.h()},h(){k(e,"class","svelte-1qlxqyu")},m(i,n){V(i,e,n),L(t,e,null),C(e,s),r=!0},p:F,i(i){r||(g(t.$$.fragment,i),r=!0)},o(i){p(t.$$.fragment,i),r=!1},d(i){i&&v(e),E(t)}}}function fn(l){let e,t,s,r,i,n,a,o,u,f;r=new N({props:{content:"Protocol"}}),n=new N({props:{content:l[0]?"–":"+"}});let h=l[0]&&Oe(l);return{c(){e=S("div"),t=S("button"),s=S("div"),D(r.$$.fragment),i=x(),D(n.$$.fragment),a=x(),h&&h.c(),this.h()},l(c){e=B(c,"DIV",{class:!0});var d=O(e);t=B(d,"BUTTON",{class:!0});var b=O(t);s=B(b,"DIV",{class:!0});var w=O(s);I(r.$$.fragment,w),w.forEach(v),i=P(b),I(n.$$.fragment,b),b.forEach(v),a=P(d),h&&h.l(d),d.forEach(v),this.h()},h(){k(s,"class","text svelte-1qlxqyu"),k(t,"class","header text-left svelte-1qlxqyu"),k(e,"class","accordion p-xs svelte-1qlxqyu")},m(c,d){V(c,e,d),C(e,t),C(t,s),L(r,s,null),C(t,i),L(n,t,null),C(e,a),h&&h.m(e,null),l[5](e),o=!0,u||(f=de(t,"click",l[3]),u=!0)},p(c,[d]){const b={};d&1&&(b.content=c[0]?"–":"+"),n.$set(b),c[0]?h?(h.p(c,d),d&1&&g(h,1)):(h=Oe(c),h.c(),g(h,1),h.m(e,null)):h&&(G(),p(h,1,1,()=>{h=null}),M())},i(c){o||(g(r.$$.fragment,c),g(n.$$.fragment,c),g(h),o=!0)},o(c){p(r.$$.fragment,c),p(n.$$.fragment,c),p(h),o=!1},d(c){c&&v(e),E(r),E(n),h&&h.d(),l[5](null),u=!1,f()}}}function hn(l,e,t){let{open:s=!1}=e,{topic:r}=e;const i=cn(r);let n;const a=()=>{t(0,s=!s)};function o(u){ee[u?"unshift":"push"](()=>{n=u,t(1,n)})}return l.$$set=u=>{"open"in u&&t(0,s=u.open),"topic"in u&&t(4,r=u.topic)},[s,n,i,a,r,o]}class gn extends U{constructor(e){super(),Y(this,e,hn,fn,R,{open:0,topic:4})}}function dn(l){let e,t,s,r;return e=new N({props:{typo:"small",content:"download data"}}),s=new Qe({props:{width:"8"}}),{c(){D(e.$$.fragment),t=x(),D(s.$$.fragment)},l(i){I(e.$$.fragment,i),t=P(i),I(s.$$.fragment,i)},m(i,n){L(e,i,n),V(i,t,n),L(s,i,n),r=!0},p:F,i(i){r||(g(e.$$.fragment,i),g(s.$$.fragment,i),r=!0)},o(i){p(e.$$.fragment,i),p(s.$$.fragment,i),r=!1},d(i){i&&v(t),E(e,i),E(s,i)}}}function mn(l){let e,t,s,r,i,n,a,o,u,f,h,c,d,b,w,q,_,$,T,j;return s=new N({props:{typo:"h2",content:l[4]}}),n=new N({props:{typo:"label",content:"WHAT AM I LOOKING AT?"}}),o=new N({props:{typo:"p",content:l[5]}}),f=new jt({props:{queries:l[2],showLang:l[3],checkbox:l[0],order:l[1]}}),d=new N({props:{typo:"label",content:"Resources",class:"case-upper"}}),_=new ie({props:{url:"#",theme:"download",class:"flex gap-xxs items-center",$$slots:{default:[dn]},$$scope:{ctx:l}}}),T=new gn({props:{topic:l[6]}}),{c(){e=S("div"),t=S("div"),D(s.$$.fragment),r=x(),i=S("div"),D(n.$$.fragment),a=x(),D(o.$$.fragment),u=x(),D(f.$$.fragment),h=x(),c=S("div"),D(d.$$.fragment),b=x(),w=S("div"),q=S("div"),D(_.$$.fragment),$=x(),D(T.$$.fragment),this.h()},l(y){e=B(y,"DIV",{class:!0});var m=O(e);t=B(m,"DIV",{class:!0});var Q=O(t);I(s.$$.fragment,Q),Q.forEach(v),r=P(m),i=B(m,"DIV",{class:!0});var z=O(i);I(n.$$.fragment,z),a=P(z),I(o.$$.fragment,z),z.forEach(v),u=P(m),I(f.$$.fragment,m),h=P(m),c=B(m,"DIV",{class:!0});var A=O(c);I(d.$$.fragment,A),b=P(A),w=B(A,"DIV",{});var J=O(w);q=B(J,"DIV",{class:!0});var X=O(q);I(_.$$.fragment,X),X.forEach(v),$=P(J),I(T.$$.fragment,J),J.forEach(v),A.forEach(v),m.forEach(v),this.h()},h(){k(t,"class","group"),k(i,"class","group flex flex-col gap-xs"),k(q,"class","flex gap-xs"),k(c,"class","group flex flex-col gap-xs"),k(e,"class","sidebar flex flex-col gap-l py-m px-s scrollbar-hide svelte-1i17fy9")},m(y,m){V(y,e,m),C(e,t),L(s,t,null),C(e,r),C(e,i),L(n,i,null),C(i,a),L(o,i,null),C(e,u),L(f,e,null),C(e,h),C(e,c),L(d,c,null),C(c,b),C(c,w),C(w,q),L(_,q,null),C(w,$),L(T,w,null),j=!0},p(y,[m]){const Q={};m&16&&(Q.content=y[4]),s.$set(Q);const z={};m&32&&(z.content=y[5]),o.$set(z);const A={};m&4&&(A.queries=y[2]),m&8&&(A.showLang=y[3]),m&1&&(A.checkbox=y[0]),m&2&&(A.order=y[1]),f.$set(A);const J={};m&128&&(J.$$scope={dirty:m,ctx:y}),_.$set(J);const X={};m&64&&(X.topic=y[6]),T.$set(X)},i(y){j||(g(s.$$.fragment,y),g(n.$$.fragment,y),g(o.$$.fragment,y),g(f.$$.fragment,y),g(d.$$.fragment,y),g(_.$$.fragment,y),g(T.$$.fragment,y),j=!0)},o(y){p(s.$$.fragment,y),p(n.$$.fragment,y),p(o.$$.fragment,y),p(f.$$.fragment,y),p(d.$$.fragment,y),p(_.$$.fragment,y),p(T.$$.fragment,y),j=!1},d(y){y&&v(e),E(s),E(n),E(o),E(f),E(d),E(_),E(T)}}}function _n(l,e,t){let{checkbox:s=!1}=e,{order:r=!1}=e,{queries:i}=e,{showLang:n=!0}=e,{question:a}=e,{description:o}=e,{topic:u}=e;return l.$$set=f=>{"checkbox"in f&&t(0,s=f.checkbox),"order"in f&&t(1,r=f.order),"queries"in f&&t(2,i=f.queries),"showLang"in f&&t(3,n=f.showLang),"question"in f&&t(4,a=f.question),"description"in f&&t(5,o=f.description),"topic"in f&&t(6,u=f.topic)},[s,r,i,n,a,o,u]}class On extends U{constructor(e){super(),Y(this,e,_n,mn,R,{checkbox:0,order:1,queries:2,showLang:3,question:4,description:5,topic:6})}}export{Ue as L,On as S,En as a,In as b,Ln as c,Cn as g,he as q};
