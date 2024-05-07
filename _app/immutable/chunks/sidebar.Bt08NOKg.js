import{s as R,q as K,r as Be,H as Ve,v as xe,b as C,w as je,f as v,x as te,i as V,n as H,y as ne,e as S,t as ze,c as B,d as He,p as k,h as O,j as Fe,T as le,ab as Ae,a as j,g as A,ac as re,B as de,ad as Je,E as Pe,K as z,O as ee,ae as se,k as ae,U as We,F as me,D as Ke}from"./scheduler.DjmlZpBi.js";import{S as Y,i as U,t as g,g as G,f as M,a as p,c as D,b as I,m as E,d as L,h as oe,e as _e}from"./index.D5mPgV2_.js";import{l as Ne,s as pe,D as Qe}from"./index.BWSmiydm.js";import{L as ie,e as Xe}from"./link.Dc71JU5M.js";import{T as P}from"./text.DH_QAwnB.js";import{d as Ze,w as et,g as tt}from"./entry.CPKF10K2.js";import{p as nt}from"./stores.jokVwsQx.js";import{g as Ge}from"./spread.CN4WR7uZ.js";import{b as rt}from"./tokens.DVXvbK2-.js";import{e as F}from"./each.K9NGHkqs.js";const lt=!0,In=lt;class st extends Map{constructor(e,t=at){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[l,r]of e)this.set(l,r)}get(e){return super.get(ve(this,e))}has(e){return super.has(ve(this,e))}set(e,t){return super.set(ot(this,e),t)}delete(e){return super.delete(it(this,e))}}function ve({_intern:s,_key:e},t){const l=e(t);return s.has(l)?s.get(l):t}function ot({_intern:s,_key:e},t){const l=e(t);return s.has(l)?s.get(l):(s.set(l,t),t)}function it({_intern:s,_key:e},t){const l=e(t);return s.has(l)&&(t=s.get(t),s.delete(l)),t}function at(s){return s!==null&&typeof s=="object"?s.valueOf():s}function ge(s){return s}function En(s,...e){return Me(s,ge,ge,e)}function Ln(s,...e){return Me(s,Array.from,ge,e)}function Me(s,e,t,l){return function r(i,n){if(n>=l.length)return t(i);const a=new st,o=l[n++];let c=-1;for(const f of i){const h=o(f,++c,i),u=a.get(h);u?u.push(f):a.set(h,[f])}for(const[f,h]of a)a.set(f,r(h,n));return e(a)}(s,0)}let Re;Re=nt;const ct={keepFocus:!0,noScroll:!0,replaceState:!0},ut={keepFocus:!0,noScroll:!0,replaceState:!1};function ce(s,e,t=(l,r)=>JSON.stringify(l)===JSON.stringify(r)){return typeof s=="object"&&typeof e=="object"&&t(s,e)}const ue=new Set;let be;const we=new Map,fe={encode:s=>s.toString(),decode:s=>s?s.toString():null};function he(s,{encode:e=fe.encode,decode:t=fe.decode,defaultValue:l}=fe,{debounceHistory:r=0,pushHistory:i=!0,sort:n=!0,showDefaults:a=!0,equalityFn:o}={}){const c=et(null);let f=!0,h;function u(b,w){f=!1;const q=window.location.hash,_=T=>{if(b==null)T.delete(s);else{const x=e(b);x==null?T.delete(s):T.set(s,x)}};ue.add(_),clearTimeout(be);const $=new URLSearchParams(window.location.search);be=setTimeout(async()=>{ue.forEach(T=>{T($)}),clearTimeout(we.get(s));{c.set(b);async function T(){n&&$.sort(),await tt(`?${$}${q}`,i?ut:ct),c.set(null)}w||r===0?T():we.set(s,setTimeout(T,r))}ue.clear()})}const{subscribe:d}=Ze([Re,c],([b,w],q)=>{var T,x,y;if(w!=null)return ce(h,w,o)?void 0:(h=structuredClone(w),q(w));const _=(y=(x=(T=b==null?void 0:b.url)==null?void 0:T.searchParams)==null?void 0:x.get)==null?void 0:y.call(x,s);if(_==null&&l!=null)return a&&u(l,f),ce(h,l,o)?void 0:(h=structuredClone(l),q(l));const $=t(_);if(!ce(h,$,o))return h=structuredClone($),q($)});return{set(b){u(b)},subscribe:d,update:b=>{const w=b(h);u(w)}}}function ft(s){let e,t,l='<path d="M2 2H32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M6 11H28" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M11 20H23" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',r=[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s[0]],i={};for(let n=0;n<r.length;n+=1)i=K(i,r[n]);return{c(){e=Be("svg"),t=new Ve(!0),this.h()},l(n){e=xe(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=C(e);t=je(a,!0),a.forEach(v),this.h()},h(){t.a=null,te(e,i)},m(n,a){V(n,e,a),t.m(l,e)},p(n,[a]){te(e,i=Ge(r,[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:H,o:H,d(n){n&&v(e)}}}function ht(s,e,t){return s.$$set=l=>{t(0,e=K(K({},e),ne(l)))},e=ne(e),[e]}class gt extends Y{constructor(e){super(),U(this,e,ht,ft,R,{})}}function dt(s){let e,t,l,r;return{c(){e=S("label"),t=ze(s[0]),this.h()},l(i){e=B(i,"LABEL",{class:!0,for:!0,style:!0});var n=C(e);t=He(n,s[0]),n.forEach(v),this.h()},h(){k(e,"class",l="typo-"+s[3]+" svelte-idnrzj"),k(e,"for",s[1]),k(e,"style",r=`--background: var(--color-${s[2]})`)},m(i,n){V(i,e,n),O(e,t)},p(i,[n]){n&1&&Fe(t,i[0]),n&8&&l!==(l="typo-"+i[3]+" svelte-idnrzj")&&k(e,"class",l),n&2&&k(e,"for",i[1]),n&4&&r!==(r=`--background: var(--color-${i[2]})`)&&k(e,"style",r)},i:H,o:H,d(i){i&&v(e)}}}function mt(s,e,t){let{label:l}=e,{rel:r=void 0}=e,{color:i="white"}=e,{typo:n="small"}=e;return s.$$set=a=>{"label"in a&&t(0,l=a.label),"rel"in a&&t(1,r=a.rel),"color"in a&&t(2,i=a.color),"typo"in a&&t(3,n=a.typo)},[l,r,i,n]}class Ye extends Y{constructor(e){super(),U(this,e,mt,dt,R,{label:0,rel:1,color:2,typo:3})}}function ke(s,e,t){const l=s.slice();return l[5]=e[t].label,l[6]=e[t].code,l[7]=e[t].color,l}function $e(s){let e,t,l,r=!1,i,n,a,o,c,f,h;return a=new Ye({props:{label:s[5],rel:s[6],color:s[7]}}),c=Ae(s[4][0]),{c(){e=S("input"),n=j(),D(a.$$.fragment),this.h()},l(u){e=B(u,"INPUT",{class:!0,type:!0,id:!0,"aria-checked":!0}),n=A(u),I(a.$$.fragment,u),this.h()},h(){k(e,"class","sr-only svelte-1nwrcna"),k(e,"type","checkbox"),k(e,"id",t=s[6]),e.__value=l=s[6],re(e,e.__value),k(e,"aria-checked",i=s[0]===s[6]),c.p(e)},m(u,d){V(u,e,d),e.checked=~(s[0]||[]).indexOf(e.__value),V(u,n,d),E(a,u,d),o=!0,f||(h=de(e,"change",s[3]),f=!0)},p(u,d){(!o||d&2&&t!==(t=u[6]))&&k(e,"id",t),(!o||d&2&&l!==(l=u[6]))&&(e.__value=l,re(e,e.__value),r=!0),(!o||d&3&&i!==(i=u[0]===u[6]))&&k(e,"aria-checked",i),(r||d&3)&&(e.checked=~(u[0]||[]).indexOf(e.__value));const b={};d&2&&(b.label=u[5]),d&2&&(b.rel=u[6]),d&2&&(b.color=u[7]),a.$set(b)},i(u){o||(g(a.$$.fragment,u),o=!0)},o(u){p(a.$$.fragment,u),o=!1},d(u){u&&(v(e),v(n)),L(a,u),c.r(),f=!1,h()}}}function _t(s){let e,t,l=F(s[1]),r=[];for(let n=0;n<l.length;n+=1)r[n]=$e(ke(s,l,n));const i=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{role:!0,class:!0});var a=C(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){k(e,"role","checkbox"),k(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&3){l=F(n[1]);let o;for(o=0;o<l.length;o+=1){const c=ke(n,l,o);r[o]?(r[o].p(c,a),g(r[o],1)):(r[o]=$e(c),r[o].c(),g(r[o],1),r[o].m(e,null))}for(G(),o=l.length;o<r.length;o+=1)i(o);M()}},i(n){if(!t){for(let a=0;a<l.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);t=!1},d(n){n&&v(e),le(r,n)}}}function pt(s,e,t){let l,{items:r}=e,{value:i=null}=e;const n=[[]];function a(){i=Je(n[0],this.__value,this.checked),t(0,i)}return s.$$set=o=>{"items"in o&&t(2,r=o.items),"value"in o&&t(0,i=o.value)},s.$$.update=()=>{s.$$.dirty&4&&t(1,l=Array.isArray(r)?r:Object.values(r))},[i,l,r,a,n]}class vt extends Y{constructor(e){super(),U(this,e,pt,_t,R,{items:2,value:0})}}function bt(s){let e,t,l='<path d="M13 1L7 7L1 0.999999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r=[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s[0]],i={};for(let n=0;n<r.length;n+=1)i=K(i,r[n]);return{c(){e=Be("svg"),t=new Ve(!0),this.h()},l(n){e=xe(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=C(e);t=je(a,!0),a.forEach(v),this.h()},h(){t.a=null,te(e,i)},m(n,a){V(n,e,a),t.m(l,e)},p(n,[a]){te(e,i=Ge(r,[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:H,o:H,d(n){n&&v(e)}}}function wt(s,e,t){return s.$$set=l=>{t(0,e=K(K({},e),ne(l)))},e=ne(e),[e]}class kt extends Y{constructor(e){super(),U(this,e,wt,bt,R,{})}}function ye(s,e,t){const l=s.slice();return l[9]=e[t],l}function $t(s){var i,n,a;let e,t,l,r;return e=new P({props:{class:s[3]?"":"opacity-50",content:(i=s[1])!=null&&i.length?((n=s[3])==null?void 0:n.title)||((a=s[3])==null?void 0:a.queryLabel)||"Select":"Loading...",typo:"p"}}),l=new kt({props:{width:12}}),{c(){D(e.$$.fragment),t=j(),D(l.$$.fragment)},l(o){I(e.$$.fragment,o),t=A(o),I(l.$$.fragment,o)},m(o,c){E(e,o,c),V(o,t,c),E(l,o,c),r=!0},p(o,c){var h,u,d;const f={};c&8&&(f.class=o[3]?"":"opacity-50"),c&10&&(f.content=(h=o[1])!=null&&h.length?((u=o[3])==null?void 0:u.title)||((d=o[3])==null?void 0:d.queryLabel)||"Select":"Loading..."),e.$set(f)},i(o){r||(g(e.$$.fragment,o),g(l.$$.fragment,o),r=!0)},o(o){p(e.$$.fragment,o),p(l.$$.fragment,o),r=!1},d(o){o&&v(t),L(e,o),L(l,o)}}}function qe(s){let e,t,l=F(s[1]),r=[];for(let n=0;n<l.length;n+=1)r[n]=Te(ye(s,l,n));const i=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{class:!0});var a=C(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){k(e,"class","list scrollbar-hide svelte-rjfnlc"),z(e,"show",s[2])},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,a){if(a&19){l=F(n[1]);let o;for(o=0;o<l.length;o+=1){const c=ye(n,l,o);r[o]?(r[o].p(c,a),g(r[o],1)):(r[o]=Te(c),r[o].c(),g(r[o],1),r[o].m(e,null))}for(G(),o=l.length;o<r.length;o+=1)i(o);M()}(!t||a&4)&&z(e,"show",n[2])},i(n){if(!t){for(let a=0;a<l.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);t=!1},d(n){n&&v(e),le(r,n)}}}function Te(s){let e,t;function l(){return s[7](s[9])}return e=new ie({props:{class:`button p-xs ${s[9].slug===s[0]?"selected":""}`,text:s[9].title||s[9].queryLabel,fn:l}}),{c(){D(e.$$.fragment)},l(r){I(e.$$.fragment,r)},m(r,i){E(e,r,i),t=!0},p(r,i){s=r;const n={};i&3&&(n.class=`button p-xs ${s[9].slug===s[0]?"selected":""}`),i&2&&(n.text=s[9].title||s[9].queryLabel),i&2&&(n.fn=l),e.$set(n)},i(r){t||(g(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){L(e,r)}}}function yt(s){var n;let e,t,l,r;t=new ie({props:{class:`dropdown-btn flex-btw-center p-xs ${s[2]?"active":""}`,fn:s[6],$$slots:{default:[$t]},$$scope:{ctx:s}}});let i=((n=s[1])==null?void 0:n.length)&&qe(s);return{c(){e=S("div"),D(t.$$.fragment),l=j(),i&&i.c(),this.h()},l(a){e=B(a,"DIV",{class:!0,ref:!0});var o=C(e);I(t.$$.fragment,o),l=A(o),i&&i.l(o),o.forEach(v),this.h()},h(){k(e,"class","dropdown svelte-rjfnlc"),k(e,"ref",s[5])},m(a,o){V(a,e,o),E(t,e,null),O(e,l),i&&i.m(e,null),r=!0},p(a,[o]){var f;const c={};o&4&&(c.class=`dropdown-btn flex-btw-center p-xs ${a[2]?"active":""}`),o&4&&(c.fn=a[6]),o&4106&&(c.$$scope={dirty:o,ctx:a}),t.$set(c),(f=a[1])!=null&&f.length?i?(i.p(a,o),o&2&&g(i,1)):(i=qe(a),i.c(),g(i,1),i.m(e,null)):i&&(G(),p(i,1,1,()=>{i=null}),M())},i(a){r||(g(t.$$.fragment,a),g(i),r=!0)},o(a){p(t.$$.fragment,a),p(i),r=!1},d(a){a&&v(e),L(t),i&&i.d()}}}function qt(s,e,t){let l,{items:r}=e,{value:i=null}=e,n=!1;const a=u=>{t(0,i=u),t(2,n=!1)};let o;Pe(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}));const c=u=>{u.target.closest(".dropdown")||t(2,n=!1)},f=()=>t(2,n=!n),h=u=>a(u.slug||u.query);return s.$$set=u=>{"items"in u&&t(1,r=u.items),"value"in u&&t(0,i=u.value)},s.$$.update=()=>{var u;s.$$.dirty&3&&t(3,l=(u=r==null?void 0:r.find)==null?void 0:u.call(r,d=>(d.slug||d.query)===i))},[i,r,n,l,a,o,f,h]}class Tt extends Y{constructor(e){super(),U(this,e,qt,yt,R,{items:1,value:0})}}function De(s,e,t){const l=s.slice();return l[6]=e[t].label,l[7]=e[t].code,l[8]=e[t].color,l}function Ie(s){let e,t,l,r=!1,i,n,a,o,c,f;return n=new Ye({props:{label:s[6],rel:s[7],color:s[8]}}),o=Ae(s[5][0]),{c(){e=S("input"),i=j(),D(n.$$.fragment),this.h()},l(h){e=B(h,"INPUT",{class:!0,type:!0,id:!0}),i=A(h),I(n.$$.fragment,h),this.h()},h(){k(e,"class","sr-only svelte-64kelq"),k(e,"type","radio"),k(e,"id",t=s[7]),e.__value=l=s[7],re(e,e.__value),z(e,"noDot",s[1]),o.p(e)},m(h,u){V(h,e,u),e.checked=e.__value===s[0],V(h,i,u),E(n,h,u),a=!0,c||(f=de(e,"change",s[4]),c=!0)},p(h,u){(!a||u&4&&t!==(t=h[7]))&&k(e,"id",t),(!a||u&4&&l!==(l=h[7]))&&(e.__value=l,re(e,e.__value),r=!0),(r||u&5)&&(e.checked=e.__value===h[0]),(!a||u&2)&&z(e,"noDot",h[1]);const d={};u&4&&(d.label=h[6]),u&4&&(d.rel=h[7]),u&4&&(d.color=h[8]),n.$set(d)},i(h){a||(g(n.$$.fragment,h),a=!0)},o(h){p(n.$$.fragment,h),a=!1},d(h){h&&(v(e),v(i)),L(n,h),o.r(),c=!1,f()}}}function Dt(s){let e,t,l=F(s[2]),r=[];for(let n=0;n<l.length;n+=1)r[n]=Ie(De(s,l,n));const i=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{role:!0,class:!0});var a=C(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(v),this.h()},h(){k(e,"role","radiogroup"),k(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&7){l=F(n[2]);let o;for(o=0;o<l.length;o+=1){const c=De(n,l,o);r[o]?(r[o].p(c,a),g(r[o],1)):(r[o]=Ie(c),r[o].c(),g(r[o],1),r[o].m(e,null))}for(G(),o=l.length;o<r.length;o+=1)i(o);M()}},i(n){if(!t){for(let a=0;a<l.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);t=!1},d(n){n&&v(e),le(r,n)}}}function It(s,e,t){let l,{items:r}=e,{value:i=null}=e,{noDot:n=!1}=e;const a=[[]];function o(){i=this.__value,t(0,i)}return s.$$set=c=>{"items"in c&&t(3,r=c.items),"value"in c&&t(0,i=c.value),"noDot"in c&&t(1,n=c.noDot)},s.$$.update=()=>{s.$$.dirty&8&&t(2,l=Array.isArray(r)?r:Object.values(r))},[i,n,l,r,o,a]}class Ue extends Y{constructor(e){super(),U(this,e,It,Dt,R,{items:3,value:0,noDot:1})}}function Ee(s){let e,t,l,r,i,n;t=new P({props:{typo:"label",content:"Language",class:"case-upper"}});const a=[Lt,Et],o=[];function c(f,h){return f[2]?0:1}return r=c(s),i=o[r]=a[r](s),{c(){e=S("div"),D(t.$$.fragment),l=j(),i.c(),this.h()},l(f){e=B(f,"DIV",{class:!0});var h=C(e);I(t.$$.fragment,h),l=A(h),i.l(h),h.forEach(v),this.h()},h(){k(e,"class","group flex flex-col gap-xs")},m(f,h){V(f,e,h),E(t,e,null),O(e,l),o[r].m(e,null),n=!0},p(f,h){let u=r;r=c(f),r===u?o[r].p(f,h):(G(),p(o[u],1,1,()=>{o[u]=null}),M(),i=o[r],i?i.p(f,h):(i=o[r]=a[r](f),i.c()),g(i,1),i.m(e,null))},i(f){n||(g(t.$$.fragment,f),g(i),n=!0)},o(f){p(t.$$.fragment,f),p(i),n=!1},d(f){f&&v(e),L(t),o[r].d()}}}function Et(s){let e,t,l;function r(n){s[14](n)}let i={items:Ne};return s[5]!==void 0&&(i.value=s[5]),e=new Ue({props:i}),ee.push(()=>oe(e,"value",r)),{c(){D(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,a){E(e,n,a),l=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],se(()=>t=!1)),e.$set(o)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){p(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Lt(s){let e,t,l;function r(n){s[13](n)}let i={items:Ne};return s[5]!==void 0&&(i.value=s[5]),e=new vt({props:i}),ee.push(()=>oe(e,"value",r)),{c(){D(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,a){E(e,n,a),l=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],se(()=>t=!1)),e.$set(o)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){p(e.$$.fragment,n),l=!1},d(n){L(e,n)}}}function Le(s){let e,t,l,r,i,n;t=new P({props:{typo:"label",content:"Order",class:"case-upper"}});function a(c){s[15](c)}let o={items:s[11],noDot:!0};return s[7]!==void 0&&(o.value=s[7]),r=new Ue({props:o}),ee.push(()=>oe(r,"value",a)),{c(){e=S("div"),D(t.$$.fragment),l=j(),D(r.$$.fragment),this.h()},l(c){e=B(c,"DIV",{class:!0});var f=C(e);I(t.$$.fragment,f),l=A(f),I(r.$$.fragment,f),f.forEach(v),this.h()},h(){k(e,"class","group flex flex-col gap-xs")},m(c,f){V(c,e,f),E(t,e,null),O(e,l),E(r,e,null),n=!0},p(c,f){const h={};!i&&f&128&&(i=!0,h.value=c[7],se(()=>i=!1)),r.$set(h)},i(c){n||(g(t.$$.fragment,c),g(r.$$.fragment,c),n=!0)},o(c){p(t.$$.fragment,c),p(r.$$.fragment,c),n=!1},d(c){c&&v(e),L(t),L(r)}}}function Ot(s){let e,t;return e=new gt({props:{height:"16"}}),{c(){D(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,r){E(e,l,r),t=!0},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){p(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Ct(s){let e,t;return e=new P({props:{content:"Confirm",typo:"small"}}),{c(){D(e.$$.fragment)},l(l){I(e.$$.fragment,l)},m(l,r){E(e,l,r),t=!0},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){p(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function St(s){let e,t,l,r;const i=[Ct,Ot],n=[];function a(o,c){return o[4]?0:1}return e=a(s),t=n[e]=i[e](s),{c(){t.c(),l=me()},l(o){t.l(o),l=me()},m(o,c){n[e].m(o,c),V(o,l,c),r=!0},p(o,c){let f=e;e=a(o),e!==f&&(G(),p(n[f],1,1,()=>{n[f]=null}),M(),t=n[e],t||(t=n[e]=i[e](o),t.c()),g(t,1),t.m(l.parentNode,l))},i(o){r||(g(t),r=!0)},o(o){p(t),r=!1},d(o){o&&v(l),n[e].d(o)}}}function Bt(s){let e,t,l,r,i,n,a,o,c,f,h,u;l=new P({props:{typo:"label",content:"Query",class:"case-upper"}});function d(_){s[12](_)}let b={items:s[1]};s[6]!==void 0&&(b.value=s[6]),i=new Tt({props:b}),ee.push(()=>oe(i,"value",d));let w=s[0]&&Ee(s),q=s[3]&&Le(s);return h=new ie({props:{class:"button pointer-events-initial",fn:s[16],theme:"cta",$$slots:{default:[St]},$$scope:{ctx:s}}}),{c(){e=S("div"),t=S("div"),D(l.$$.fragment),r=j(),D(i.$$.fragment),a=j(),w&&w.c(),o=j(),q&&q.c(),c=j(),f=S("div"),D(h.$$.fragment),this.h()},l(_){e=B(_,"DIV",{class:!0});var $=C(e);t=B($,"DIV",{class:!0});var T=C(t);I(l.$$.fragment,T),r=A(T),I(i.$$.fragment,T),T.forEach(v),a=A($),w&&w.l($),o=A($),q&&q.l($),$.forEach(v),c=A(_),f=B(_,"DIV",{class:!0});var x=C(f);I(h.$$.fragment,x),x.forEach(v),this.h()},h(){k(t,"class","group flex flex-col gap-xs"),k(e,"class","filters px-s py-m xl:p-0 svelte-1v2kozf"),z(e,"show",s[4]),k(f,"class","cta pointer-events-none xl:hidden svelte-1v2kozf"),z(f,"open",s[4])},m(_,$){V(_,e,$),O(e,t),E(l,t,null),O(t,r),E(i,t,null),O(e,a),w&&w.m(e,null),O(e,o),q&&q.m(e,null),V(_,c,$),V(_,f,$),E(h,f,null),u=!0},p(_,[$]){const T={};$&2&&(T.items=_[1]),!n&&$&64&&(n=!0,T.value=_[6],se(()=>n=!1)),i.$set(T),_[0]?w?(w.p(_,$),$&1&&g(w,1)):(w=Ee(_),w.c(),g(w,1),w.m(e,o)):w&&(G(),p(w,1,1,()=>{w=null}),M()),_[3]?q?(q.p(_,$),$&8&&g(q,1)):(q=Le(_),q.c(),g(q,1),q.m(e,null)):q&&(G(),p(q,1,1,()=>{q=null}),M()),(!u||$&16)&&z(e,"show",_[4]);const x={};$&16&&(x.fn=_[16]),$&262160&&(x.$$scope={dirty:$,ctx:_}),h.$set(x),(!u||$&16)&&z(f,"open",_[4])},i(_){u||(g(l.$$.fragment,_),g(i.$$.fragment,_),g(w),g(q),g(h.$$.fragment,_),u=!0)},o(_){p(l.$$.fragment,_),p(i.$$.fragment,_),p(w),p(q),p(h.$$.fragment,_),u=!1},d(_){_&&(v(e),v(c),v(f)),L(l),L(i),w&&w.d(),q&&q.d(),L(h)}}}function Vt(s,e,t){var y;let l,r,i,{showLang:n=!0}=e,{queries:a}=e,{checkbox:o=!1}=e,{order:c=!1}=e,f=he("query"),h=he("lang"),u=he("order");ae(s,f,m=>t(6,r=m)),ae(s,h,m=>t(17,l=m)),ae(s,u,m=>t(7,i=m));let d=!1,b=l?o?(y=l==null?void 0:l.split)==null?void 0:y.call(l," "):l:[];Pe(async()=>{setTimeout(()=>{var m;t(5,b=o?((m=l==null?void 0:l.split)==null?void 0:m.call(l," "))||[]:l)},100)});const w=[{label:"Views",code:"views"},{label:"Comments",code:"comments"},{label:"Likes",code:"likes"},{label:"Date",code:"date"}];function q(m){r=m,f.set(r)}function _(m){b=m,t(5,b)}function $(m){b=m,t(5,b)}function T(m){i=m,u.set(i)}const x=()=>t(4,d=!d);return s.$$set=m=>{"showLang"in m&&t(0,n=m.showLang),"queries"in m&&t(1,a=m.queries),"checkbox"in m&&t(2,o=m.checkbox),"order"in m&&t(3,c=m.order)},s.$$.update=()=>{var m;s.$$.dirty&16&&document.body.classList.toggle("scroll-lock",d),s.$$.dirty&32&&We(h,l=((m=b==null?void 0:b.join)==null?void 0:m.call(b," "))||b,l)},innerWidth>Xe(rt.l)&&t(4,d=!1),[n,a,o,c,d,b,r,i,f,h,u,w,q,_,$,T,x]}class xt extends Y{constructor(e){super(),U(this,e,Vt,Bt,R,{showLang:0,queries:1,checkbox:2,order:3})}}const jt="Getty Images circulation",At="By which web pages are the most significant stock photos used?",Pt="As stock images circulate online, their meanings evolve. This page highlights the contextual usage of commonly encountered visual stereotypes sourced from Getty Images for each query. By selecting an image, you can explore a list of websites where the image is featured. Data collected in January 2024.",Nt=["For each stereotype, collect the 3 highest ranked images","Reverse search images on Google Image Search","Collect top 20 web pages hosting the images","Collect URL and Title for each web page","Delete unrelated results"],Gt={title:jt,research_question:At,description:Pt,protocol:Nt},Mt="Getty Images stereotypes",Rt="Which visual tropes emerge in connection to different pollution routes, practices and substances?",Yt="GettyImages provides insight into the visual repertoire associated with toxicities. This page displays images retrieved from Getty Images for each query (in English). Images are organized using a visual similarity algorithm and then manually grouped into stereotypes. Stereotype clusters are arranged alphabetically from top to bottom. By clicking on a thumbnail, you can explore images along with their metadata, including location tags. Data collected in January 2024.",Ut=["Search term on Getty Images","Collect top 1000 images per search term using a custom script","Cluster images in each dataset based on visual similarity","Identify most recurrent visual stereotypes and name clusters of similar images"],zt={title:Mt,research_question:Rt,description:Yt,protocol:Ut},Ht={},Ft="TikTok topics",Jt="Which topics are connected to different substances, practices and devices?",Wt="On TikTok, users share fears, practices, and information regarding toxicities. Each term is searched in different languages on the platform to collect a list of videos and associated hashtags. This page displays clusters of similar hashtags, resized according to their frequency of use. You can explore videos shared with those hashtags by clicking on a hashtag cluster. Data collected in Junuary 2024.",Kt=["Search terms on TikTok in the local language","Collect top videos per query","Collect hashtags for each video","Clusters similar hashtags using clustering sentence embeddings","Delete unrelated clusters of hashtags","Fine tune and name identified clusters of videos"],Qt={title:Ft,research_question:Jt,description:Wt,protocol:Kt},Xt="Youtube clusters",Zt="What topics are each substance related to through the recommendation algorithm?",en="YouTube's algorithm suggests videos to users through the autoplay feature and its interface. Networks of suggested videos offer a window into the thematic areas that connect substances, practices, and formats. This page displays thematic clusters of videos identified among those recommended by YouTube for each substance. Clusters are ordered alphabetically. Data collected in August 2023.",tn=["Search terms on YouTube (with language and country filter activated)","Collect the top 50 results for each query term using YouTube Data Tools","Collect recommended videos to the top 50 results per language and substance","Identify clusters of similar videos in each dataset using clustering sentence embeddings","Fine tune and name identified clusters of videos"],nn={title:Xt,research_question:Zt,description:en,protocol:tn},rn="Youtube language comparison",ln="How do video results about substances change according to the language of the query?",sn="Video results on YouTube vary depending on the language of the query. This page displays the top 50 videos for each query across different languages, merged together. Videos can be filtered by language and ordered by time and engagement metrics. Ordering by the number of likes or views emphasizes the popularity of videos. Ordering by the number of comments emphasizes controversial videos that might generate discussion in the comment section. Data collected in January 2024.",on=["Search term on YouTube (with language and country filter activated)","Collect the top 50 results for each query term using YouTube Data Tools","Delete unrelated results from the list","Collect metadata (likes, views, and timestamps)","Compile results from different languages in one list per query"],an={title:rn,research_question:ln,description:sn,protocol:on},Z={getty_circulation:Gt,getty_stereotypes:zt,tiktok:Qt,youtube_language:an,youtube_clusters:nn,globals:Ht},cn=(s="globals",e,t)=>Z[s]&&Z[s][e]?t?Z[s][e][t]:Z[s][e]:null,On=s=>(e,t)=>cn(s,e,t),un=s=>{var e;return(e=Z[s])==null?void 0:e.protocol};function Oe(s,e,t){const l=s.slice();return l[6]=e[t],l}function Ce(s){let e,t,l,r=F(s[2]),i=[];for(let a=0;a<r.length;a+=1)i[a]=Se(Oe(s,r,a));const n=a=>p(i[a],1,1,()=>{i[a]=null});return{c(){e=S("ol");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=B(a,"OL",{class:!0});var o=C(e);for(let c=0;c<i.length;c+=1)i[c].l(o);o.forEach(v),this.h()},h(){k(e,"class","details svelte-1qlxqyu")},m(a,o){V(a,e,o);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);l=!0},p(a,o){if(o&4){r=F(a[2]);let c;for(c=0;c<r.length;c+=1){const f=Oe(a,r,c);i[c]?(i[c].p(f,o),g(i[c],1)):(i[c]=Se(f),i[c].c(),g(i[c],1),i[c].m(e,null))}for(G(),c=r.length;c<i.length;c+=1)n(c);M()}},i(a){if(!l){for(let o=0;o<r.length;o+=1)g(i[o]);a&&Ke(()=>{l&&(t||(t=_e(e,pe,{},!0)),t.run(1))}),l=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)p(i[o]);a&&(t||(t=_e(e,pe,{},!1)),t.run(0)),l=!1},d(a){a&&v(e),le(i,a),a&&t&&t.end()}}}function Se(s){let e,t,l,r;return t=new P({props:{content:s[6]}}),{c(){e=S("li"),D(t.$$.fragment),l=j(),this.h()},l(i){e=B(i,"LI",{class:!0});var n=C(e);I(t.$$.fragment,n),l=A(n),n.forEach(v),this.h()},h(){k(e,"class","svelte-1qlxqyu")},m(i,n){V(i,e,n),E(t,e,null),O(e,l),r=!0},p:H,i(i){r||(g(t.$$.fragment,i),r=!0)},o(i){p(t.$$.fragment,i),r=!1},d(i){i&&v(e),L(t)}}}function fn(s){let e,t,l,r,i,n,a,o,c,f;r=new P({props:{content:"Protocol"}}),n=new P({props:{content:s[0]?"–":"+"}});let h=s[0]&&Ce(s);return{c(){e=S("div"),t=S("button"),l=S("div"),D(r.$$.fragment),i=j(),D(n.$$.fragment),a=j(),h&&h.c(),this.h()},l(u){e=B(u,"DIV",{class:!0});var d=C(e);t=B(d,"BUTTON",{class:!0});var b=C(t);l=B(b,"DIV",{class:!0});var w=C(l);I(r.$$.fragment,w),w.forEach(v),i=A(b),I(n.$$.fragment,b),b.forEach(v),a=A(d),h&&h.l(d),d.forEach(v),this.h()},h(){k(l,"class","text svelte-1qlxqyu"),k(t,"class","header text-left svelte-1qlxqyu"),k(e,"class","accordion p-xs svelte-1qlxqyu")},m(u,d){V(u,e,d),O(e,t),O(t,l),E(r,l,null),O(t,i),E(n,t,null),O(e,a),h&&h.m(e,null),s[5](e),o=!0,c||(f=de(t,"click",s[3]),c=!0)},p(u,[d]){const b={};d&1&&(b.content=u[0]?"–":"+"),n.$set(b),u[0]?h?(h.p(u,d),d&1&&g(h,1)):(h=Ce(u),h.c(),g(h,1),h.m(e,null)):h&&(G(),p(h,1,1,()=>{h=null}),M())},i(u){o||(g(r.$$.fragment,u),g(n.$$.fragment,u),g(h),o=!0)},o(u){p(r.$$.fragment,u),p(n.$$.fragment,u),p(h),o=!1},d(u){u&&v(e),L(r),L(n),h&&h.d(),s[5](null),c=!1,f()}}}function hn(s,e,t){let{open:l=!1}=e,{topic:r}=e;const i=un(r);let n;const a=()=>{t(0,l=!l)};function o(c){ee[c?"unshift":"push"](()=>{n=c,t(1,n)})}return s.$$set=c=>{"open"in c&&t(0,l=c.open),"topic"in c&&t(4,r=c.topic)},[l,n,i,a,r,o]}class gn extends Y{constructor(e){super(),U(this,e,hn,fn,R,{open:0,topic:4})}}function dn(s){let e,t,l,r;return e=new P({props:{typo:"small",content:"download data"}}),l=new Qe({props:{width:"8"}}),{c(){D(e.$$.fragment),t=j(),D(l.$$.fragment)},l(i){I(e.$$.fragment,i),t=A(i),I(l.$$.fragment,i)},m(i,n){E(e,i,n),V(i,t,n),E(l,i,n),r=!0},p:H,i(i){r||(g(e.$$.fragment,i),g(l.$$.fragment,i),r=!0)},o(i){p(e.$$.fragment,i),p(l.$$.fragment,i),r=!1},d(i){i&&v(t),L(e,i),L(l,i)}}}function mn(s){let e,t,l,r,i,n,a,o,c,f,h,u,d,b,w,q,_,$,T,x;return l=new P({props:{typo:"h2",content:s[4]}}),n=new P({props:{typo:"label",content:"WHAT AM I LOOKING AT?"}}),o=new P({props:{typo:"p",content:s[5]}}),f=new xt({props:{queries:s[2],showLang:s[3],checkbox:s[0],order:s[1]}}),d=new P({props:{typo:"label",content:"Resources",class:"case-upper"}}),_=new ie({props:{url:"#",theme:"download",class:"flex gap-xxs items-center",$$slots:{default:[dn]},$$scope:{ctx:s}}}),T=new gn({props:{topic:s[6]}}),{c(){e=S("div"),t=S("div"),D(l.$$.fragment),r=j(),i=S("div"),D(n.$$.fragment),a=j(),D(o.$$.fragment),c=j(),D(f.$$.fragment),h=j(),u=S("div"),D(d.$$.fragment),b=j(),w=S("div"),q=S("div"),D(_.$$.fragment),$=j(),D(T.$$.fragment),this.h()},l(y){e=B(y,"DIV",{class:!0});var m=C(e);t=B(m,"DIV",{class:!0});var Q=C(t);I(l.$$.fragment,Q),Q.forEach(v),r=A(m),i=B(m,"DIV",{class:!0});var J=C(i);I(n.$$.fragment,J),a=A(J),I(o.$$.fragment,J),J.forEach(v),c=A(m),I(f.$$.fragment,m),h=A(m),u=B(m,"DIV",{class:!0});var N=C(u);I(d.$$.fragment,N),b=A(N),w=B(N,"DIV",{});var W=C(w);q=B(W,"DIV",{class:!0});var X=C(q);I(_.$$.fragment,X),X.forEach(v),$=A(W),I(T.$$.fragment,W),W.forEach(v),N.forEach(v),m.forEach(v),this.h()},h(){k(t,"class","group"),k(i,"class","group flex flex-col gap-xs"),k(q,"class","flex gap-xs"),k(u,"class","group flex flex-col gap-xs"),k(e,"class","sidebar flex flex-col gap-l py-m px-s scrollbar-hide svelte-1i17fy9")},m(y,m){V(y,e,m),O(e,t),E(l,t,null),O(e,r),O(e,i),E(n,i,null),O(i,a),E(o,i,null),O(e,c),E(f,e,null),O(e,h),O(e,u),E(d,u,null),O(u,b),O(u,w),O(w,q),E(_,q,null),O(w,$),E(T,w,null),x=!0},p(y,[m]){const Q={};m&16&&(Q.content=y[4]),l.$set(Q);const J={};m&32&&(J.content=y[5]),o.$set(J);const N={};m&4&&(N.queries=y[2]),m&8&&(N.showLang=y[3]),m&1&&(N.checkbox=y[0]),m&2&&(N.order=y[1]),f.$set(N);const W={};m&128&&(W.$$scope={dirty:m,ctx:y}),_.$set(W);const X={};m&64&&(X.topic=y[6]),T.$set(X)},i(y){x||(g(l.$$.fragment,y),g(n.$$.fragment,y),g(o.$$.fragment,y),g(f.$$.fragment,y),g(d.$$.fragment,y),g(_.$$.fragment,y),g(T.$$.fragment,y),x=!0)},o(y){p(l.$$.fragment,y),p(n.$$.fragment,y),p(o.$$.fragment,y),p(f.$$.fragment,y),p(d.$$.fragment,y),p(_.$$.fragment,y),p(T.$$.fragment,y),x=!1},d(y){y&&v(e),L(l),L(n),L(o),L(f),L(d),L(_),L(T)}}}function _n(s,e,t){let{checkbox:l=!1}=e,{order:r=!1}=e,{queries:i}=e,{showLang:n=!0}=e,{question:a}=e,{description:o}=e,{topic:c}=e;return s.$$set=f=>{"checkbox"in f&&t(0,l=f.checkbox),"order"in f&&t(1,r=f.order),"queries"in f&&t(2,i=f.queries),"showLang"in f&&t(3,n=f.showLang),"question"in f&&t(4,a=f.question),"description"in f&&t(5,o=f.description),"topic"in f&&t(6,c=f.topic)},[l,r,i,n,a,o,c]}class Cn extends Y{constructor(e){super(),U(this,e,_n,mn,R,{checkbox:0,order:1,queries:2,showLang:3,question:4,description:5,topic:6})}}export{Ye as L,Cn as S,Ln as a,In as b,En as c,On as g,he as q};
