import{s as R,w as J,x as Be,H as Ve,y as je,b as C,z as Ae,f as m,A as te,i as V,n as W,B as ne,e as S,t as ze,c as B,d as We,p as w,h as O,j as Ye,U as le,ac as Pe,a as A,g as P,ad as re,D as de,ae as Fe,G as Ge,R as z,O as ee,af as se,k as ae,V as Je,I as _e,F as Qe}from"./scheduler.CfczHrgZ.js";import{S as H,i as U,t as g,g as x,f as M,a as _,c as T,b as L,m as D,d as E,h as oe,e as me}from"./index.ZGSVq_s-.js";import{l as Ne,s as pe,D as Ke}from"./index.Cut6ol57.js";import{L as ie,e as Xe}from"./link.ZixhS10W.js";import{T as G}from"./text.BnvuL1Wy.js";import{g as Ze}from"./entry.C3NfB0IF.js";import{p as et}from"./stores.BGzCyJH8.js";import{d as tt,w as nt}from"./index._MKqxTfZ.js";import{g as xe}from"./spread.CN4WR7uZ.js";import{b as rt}from"./tokens.DVXvbK2-.js";import{e as Y}from"./each.Bh-FyJyd.js";const lt=!0,Dn=lt;class st extends Map{constructor(e,t=at){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[l,r]of e)this.set(l,r)}get(e){return super.get(ve(this,e))}has(e){return super.has(ve(this,e))}set(e,t){return super.set(ot(this,e),t)}delete(e){return super.delete(it(this,e))}}function ve({_intern:s,_key:e},t){const l=e(t);return s.has(l)?s.get(l):t}function ot({_intern:s,_key:e},t){const l=e(t);return s.has(l)?s.get(l):(s.set(l,t),t)}function it({_intern:s,_key:e},t){const l=e(t);return s.has(l)&&(t=s.get(t),s.delete(l)),t}function at(s){return s!==null&&typeof s=="object"?s.valueOf():s}function ge(s){return s}function En(s,...e){return Me(s,ge,ge,e)}function On(s,...e){return Me(s,Array.from,ge,e)}function Me(s,e,t,l){return function r(i,n){if(n>=l.length)return t(i);const a=new st,o=l[n++];let c=-1;for(const u of i){const h=o(u,++c,i),f=a.get(h);f?f.push(u):a.set(h,[u])}for(const[u,h]of a)a.set(u,r(h,n));return e(a)}(s,0)}let Re;Re=et;const ct={keepFocus:!0,noScroll:!0,replaceState:!0},ut={keepFocus:!0,noScroll:!0,replaceState:!1};function ce(s,e,t=(l,r)=>JSON.stringify(l)===JSON.stringify(r)){return typeof s=="object"&&typeof e=="object"&&t(s,e)}const ue=new Set;let be;const we=new Map,fe={encode:s=>s.toString(),decode:s=>s?s.toString():null};function he(s,{encode:e=fe.encode,decode:t=fe.decode,defaultValue:l}=fe,{debounceHistory:r=0,pushHistory:i=!0,sort:n=!0,showDefaults:a=!0,equalityFn:o}={}){const c=nt(null);let u=!0,h;function f(y,k){u=!1;const $=window.location.hash,v=q=>{if(y==null)q.delete(s);else{const j=e(y);j==null?q.delete(s):q.set(s,j)}};ue.add(v),clearTimeout(be);const b=new URLSearchParams(window.location.search);be=setTimeout(async()=>{ue.forEach(q=>{q(b)}),clearTimeout(we.get(s));{c.set(y);async function q(){n&&b.sort(),await Ze(`?${b}${$}`,i?ut:ct),c.set(null)}k||r===0?q():we.set(s,setTimeout(q,r))}ue.clear()})}const{subscribe:p}=tt([Re,c],([y,k],$)=>{var q,j,I;if(k!=null)return ce(h,k,o)?void 0:(h=structuredClone(k),$(k));const v=(I=(j=(q=y==null?void 0:y.url)==null?void 0:q.searchParams)==null?void 0:j.get)==null?void 0:I.call(j,s);if(v==null&&l!=null)return a&&f(l,u),ce(h,l,o)?void 0:(h=structuredClone(l),$(l));const b=t(v);if(!ce(h,b,o))return h=structuredClone(b),$(b)});return{set(y){f(y)},subscribe:p,update:y=>{const k=y(h);f(k)}}}function ft(s){let e,t,l='<path d="M2 2H32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M6 11H28" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M11 20H23" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',r=[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s[0]],i={};for(let n=0;n<r.length;n+=1)i=J(i,r[n]);return{c(){e=Be("svg"),t=new Ve(!0),this.h()},l(n){e=je(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=C(e);t=Ae(a,!0),a.forEach(m),this.h()},h(){t.a=null,te(e,i)},m(n,a){V(n,e,a),t.m(l,e)},p(n,[a]){te(e,i=xe(r,[{viewBox:"0 0 34 22"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:W,o:W,d(n){n&&m(e)}}}function ht(s,e,t){return s.$$set=l=>{t(0,e=J(J({},e),ne(l)))},e=ne(e),[e]}class gt extends H{constructor(e){super(),U(this,e,ht,ft,R,{})}}function dt(s){let e,t,l,r;return{c(){e=S("label"),t=ze(s[0]),this.h()},l(i){e=B(i,"LABEL",{class:!0,for:!0,style:!0});var n=C(e);t=We(n,s[0]),n.forEach(m),this.h()},h(){w(e,"class",l="typo-"+s[3]+" svelte-idnrzj"),w(e,"for",s[1]),w(e,"style",r=`--background: var(--color-${s[2]})`)},m(i,n){V(i,e,n),O(e,t)},p(i,[n]){n&1&&Ye(t,i[0]),n&8&&l!==(l="typo-"+i[3]+" svelte-idnrzj")&&w(e,"class",l),n&2&&w(e,"for",i[1]),n&4&&r!==(r=`--background: var(--color-${i[2]})`)&&w(e,"style",r)},i:W,o:W,d(i){i&&m(e)}}}function _t(s,e,t){let{label:l}=e,{rel:r=void 0}=e,{color:i="white"}=e,{typo:n="small"}=e;return s.$$set=a=>{"label"in a&&t(0,l=a.label),"rel"in a&&t(1,r=a.rel),"color"in a&&t(2,i=a.color),"typo"in a&&t(3,n=a.typo)},[l,r,i,n]}class He extends H{constructor(e){super(),U(this,e,_t,dt,R,{label:0,rel:1,color:2,typo:3})}}function ke(s,e,t){const l=s.slice();return l[5]=e[t].label,l[6]=e[t].code,l[7]=e[t].color,l}function $e(s){let e,t,l,r=!1,i,n,a,o,c,u,h;return a=new He({props:{label:s[5],rel:s[6],color:s[7]}}),c=Pe(s[4][0]),{c(){e=S("input"),n=A(),T(a.$$.fragment),this.h()},l(f){e=B(f,"INPUT",{class:!0,type:!0,id:!0,"aria-checked":!0}),n=P(f),L(a.$$.fragment,f),this.h()},h(){w(e,"class","sr-only svelte-1nwrcna"),w(e,"type","checkbox"),w(e,"id",t=s[6]),e.__value=l=s[6],re(e,e.__value),w(e,"aria-checked",i=s[0]===s[6]),c.p(e)},m(f,p){V(f,e,p),e.checked=~(s[0]||[]).indexOf(e.__value),V(f,n,p),D(a,f,p),o=!0,u||(h=de(e,"change",s[3]),u=!0)},p(f,p){(!o||p&2&&t!==(t=f[6]))&&w(e,"id",t),(!o||p&2&&l!==(l=f[6]))&&(e.__value=l,re(e,e.__value),r=!0),(!o||p&3&&i!==(i=f[0]===f[6]))&&w(e,"aria-checked",i),(r||p&3)&&(e.checked=~(f[0]||[]).indexOf(e.__value));const y={};p&2&&(y.label=f[5]),p&2&&(y.rel=f[6]),p&2&&(y.color=f[7]),a.$set(y)},i(f){o||(g(a.$$.fragment,f),o=!0)},o(f){_(a.$$.fragment,f),o=!1},d(f){f&&(m(e),m(n)),E(a,f),c.r(),u=!1,h()}}}function mt(s){let e,t,l=Y(s[1]),r=[];for(let n=0;n<l.length;n+=1)r[n]=$e(ke(s,l,n));const i=n=>_(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{role:!0,class:!0});var a=C(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(m),this.h()},h(){w(e,"role","checkbox"),w(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&3){l=Y(n[1]);let o;for(o=0;o<l.length;o+=1){const c=ke(n,l,o);r[o]?(r[o].p(c,a),g(r[o],1)):(r[o]=$e(c),r[o].c(),g(r[o],1),r[o].m(e,null))}for(x(),o=l.length;o<r.length;o+=1)i(o);M()}},i(n){if(!t){for(let a=0;a<l.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)_(r[a]);t=!1},d(n){n&&m(e),le(r,n)}}}function pt(s,e,t){let l,{items:r}=e,{value:i=null}=e;const n=[[]];function a(){i=Fe(n[0],this.__value,this.checked),t(0,i)}return s.$$set=o=>{"items"in o&&t(2,r=o.items),"value"in o&&t(0,i=o.value)},s.$$.update=()=>{s.$$.dirty&4&&t(1,l=Array.isArray(r)?r:Object.values(r))},[i,l,r,a,n]}class vt extends H{constructor(e){super(),U(this,e,pt,mt,R,{items:2,value:0})}}function bt(s){let e,t,l='<path d="M13 1L7 7L1 0.999999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r=[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s[0]],i={};for(let n=0;n<r.length;n+=1)i=J(i,r[n]);return{c(){e=Be("svg"),t=new Ve(!0),this.h()},l(n){e=je(n,"svg",{viewBox:!0,fill:!0,xmlns:!0});var a=C(e);t=Ae(a,!0),a.forEach(m),this.h()},h(){t.a=null,te(e,i)},m(n,a){V(n,e,a),t.m(l,e)},p(n,[a]){te(e,i=xe(r,[{viewBox:"0 0 14 8"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&1&&n[0]]))},i:W,o:W,d(n){n&&m(e)}}}function wt(s,e,t){return s.$$set=l=>{t(0,e=J(J({},e),ne(l)))},e=ne(e),[e]}class kt extends H{constructor(e){super(),U(this,e,wt,bt,R,{})}}function ye(s,e,t){const l=s.slice();return l[9]=e[t],l}function $t(s){var i,n,a;let e,t,l,r;return e=new G({props:{class:s[3]?"":"opacity-50",content:(i=s[1])!=null&&i.length?((n=s[3])==null?void 0:n.title)||((a=s[3])==null?void 0:a.queryLabel)||"Select":"Loading...",typo:"p"}}),l=new kt({props:{width:12}}),{c(){T(e.$$.fragment),t=A(),T(l.$$.fragment)},l(o){L(e.$$.fragment,o),t=P(o),L(l.$$.fragment,o)},m(o,c){D(e,o,c),V(o,t,c),D(l,o,c),r=!0},p(o,c){var h,f,p;const u={};c&8&&(u.class=o[3]?"":"opacity-50"),c&10&&(u.content=(h=o[1])!=null&&h.length?((f=o[3])==null?void 0:f.title)||((p=o[3])==null?void 0:p.queryLabel)||"Select":"Loading..."),e.$set(u)},i(o){r||(g(e.$$.fragment,o),g(l.$$.fragment,o),r=!0)},o(o){_(e.$$.fragment,o),_(l.$$.fragment,o),r=!1},d(o){o&&m(t),E(e,o),E(l,o)}}}function Ie(s){let e,t,l=Y(s[1]),r=[];for(let n=0;n<l.length;n+=1)r[n]=qe(ye(s,l,n));const i=n=>_(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{class:!0});var a=C(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(m),this.h()},h(){w(e,"class","list scrollbar-hide svelte-rjfnlc"),z(e,"show",s[2])},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,a){if(a&19){l=Y(n[1]);let o;for(o=0;o<l.length;o+=1){const c=ye(n,l,o);r[o]?(r[o].p(c,a),g(r[o],1)):(r[o]=qe(c),r[o].c(),g(r[o],1),r[o].m(e,null))}for(x(),o=l.length;o<r.length;o+=1)i(o);M()}(!t||a&4)&&z(e,"show",n[2])},i(n){if(!t){for(let a=0;a<l.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)_(r[a]);t=!1},d(n){n&&m(e),le(r,n)}}}function qe(s){let e,t;function l(){return s[7](s[9])}return e=new ie({props:{class:`button p-xs ${s[9].slug===s[0]?"selected":""}`,text:s[9].title||s[9].queryLabel,fn:l}}),{c(){T(e.$$.fragment)},l(r){L(e.$$.fragment,r)},m(r,i){D(e,r,i),t=!0},p(r,i){s=r;const n={};i&3&&(n.class=`button p-xs ${s[9].slug===s[0]?"selected":""}`),i&2&&(n.text=s[9].title||s[9].queryLabel),i&2&&(n.fn=l),e.$set(n)},i(r){t||(g(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){E(e,r)}}}function yt(s){var n;let e,t,l,r;t=new ie({props:{class:`dropdown-btn flex-btw-center p-xs ${s[2]?"active":""}`,fn:s[6],$$slots:{default:[$t]},$$scope:{ctx:s}}});let i=((n=s[1])==null?void 0:n.length)&&Ie(s);return{c(){e=S("div"),T(t.$$.fragment),l=A(),i&&i.c(),this.h()},l(a){e=B(a,"DIV",{class:!0,ref:!0});var o=C(e);L(t.$$.fragment,o),l=P(o),i&&i.l(o),o.forEach(m),this.h()},h(){w(e,"class","dropdown svelte-rjfnlc"),w(e,"ref",s[5])},m(a,o){V(a,e,o),D(t,e,null),O(e,l),i&&i.m(e,null),r=!0},p(a,[o]){var u;const c={};o&4&&(c.class=`dropdown-btn flex-btw-center p-xs ${a[2]?"active":""}`),o&4&&(c.fn=a[6]),o&4106&&(c.$$scope={dirty:o,ctx:a}),t.$set(c),(u=a[1])!=null&&u.length?i?(i.p(a,o),o&2&&g(i,1)):(i=Ie(a),i.c(),g(i,1),i.m(e,null)):i&&(x(),_(i,1,1,()=>{i=null}),M())},i(a){r||(g(t.$$.fragment,a),g(i),r=!0)},o(a){_(t.$$.fragment,a),_(i),r=!1},d(a){a&&m(e),E(t),i&&i.d()}}}function It(s,e,t){let l,{items:r}=e,{value:i=null}=e,n=!1;const a=f=>{t(0,i=f),t(2,n=!1)};let o;Ge(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}));const c=f=>{f.target.closest(".dropdown")||t(2,n=!1)},u=()=>t(2,n=!n),h=f=>a(f.slug||f.query);return s.$$set=f=>{"items"in f&&t(1,r=f.items),"value"in f&&t(0,i=f.value)},s.$$.update=()=>{var f;s.$$.dirty&3&&t(3,l=(f=r==null?void 0:r.find)==null?void 0:f.call(r,p=>(p.slug||p.query)===i))},[i,r,n,l,a,o,u,h]}class qt extends H{constructor(e){super(),U(this,e,It,yt,R,{items:1,value:0})}}function Te(s,e,t){const l=s.slice();return l[6]=e[t].label,l[7]=e[t].code,l[8]=e[t].color,l}function Le(s){let e,t,l,r=!1,i,n,a,o,c,u;return n=new He({props:{label:s[6],rel:s[7],color:s[8]}}),o=Pe(s[5][0]),{c(){e=S("input"),i=A(),T(n.$$.fragment),this.h()},l(h){e=B(h,"INPUT",{class:!0,type:!0,id:!0}),i=P(h),L(n.$$.fragment,h),this.h()},h(){w(e,"class","sr-only svelte-64kelq"),w(e,"type","radio"),w(e,"id",t=s[7]),e.__value=l=s[7],re(e,e.__value),z(e,"noDot",s[1]),o.p(e)},m(h,f){V(h,e,f),e.checked=e.__value===s[0],V(h,i,f),D(n,h,f),a=!0,c||(u=de(e,"change",s[4]),c=!0)},p(h,f){(!a||f&4&&t!==(t=h[7]))&&w(e,"id",t),(!a||f&4&&l!==(l=h[7]))&&(e.__value=l,re(e,e.__value),r=!0),(r||f&5)&&(e.checked=e.__value===h[0]),(!a||f&2)&&z(e,"noDot",h[1]);const p={};f&4&&(p.label=h[6]),f&4&&(p.rel=h[7]),f&4&&(p.color=h[8]),n.$set(p)},i(h){a||(g(n.$$.fragment,h),a=!0)},o(h){_(n.$$.fragment,h),a=!1},d(h){h&&(m(e),m(i)),E(n,h),o.r(),c=!1,u()}}}function Tt(s){let e,t,l=Y(s[2]),r=[];for(let n=0;n<l.length;n+=1)r[n]=Le(Te(s,l,n));const i=n=>_(r[n],1,1,()=>{r[n]=null});return{c(){e=S("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=B(n,"DIV",{role:!0,class:!0});var a=C(e);for(let o=0;o<r.length;o+=1)r[o].l(a);a.forEach(m),this.h()},h(){w(e,"role","radiogroup"),w(e,"class","grid-2-xs xl:flex flex-wrap items-center gap-xs")},m(n,a){V(n,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);t=!0},p(n,[a]){if(a&7){l=Y(n[2]);let o;for(o=0;o<l.length;o+=1){const c=Te(n,l,o);r[o]?(r[o].p(c,a),g(r[o],1)):(r[o]=Le(c),r[o].c(),g(r[o],1),r[o].m(e,null))}for(x(),o=l.length;o<r.length;o+=1)i(o);M()}},i(n){if(!t){for(let a=0;a<l.length;a+=1)g(r[a]);t=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)_(r[a]);t=!1},d(n){n&&m(e),le(r,n)}}}function Lt(s,e,t){let l,{items:r}=e,{value:i=null}=e,{noDot:n=!1}=e;const a=[[]];function o(){i=this.__value,t(0,i)}return s.$$set=c=>{"items"in c&&t(3,r=c.items),"value"in c&&t(0,i=c.value),"noDot"in c&&t(1,n=c.noDot)},s.$$.update=()=>{s.$$.dirty&8&&t(2,l=Array.isArray(r)?r:Object.values(r))},[i,n,l,r,o,a]}class Ue extends H{constructor(e){super(),U(this,e,Lt,Tt,R,{items:3,value:0,noDot:1})}}function De(s){let e,t,l,r,i,n;t=new G({props:{typo:"label",content:"Language",class:"case-upper"}});const a=[Et,Dt],o=[];function c(u,h){return u[2]?0:1}return r=c(s),i=o[r]=a[r](s),{c(){e=S("div"),T(t.$$.fragment),l=A(),i.c(),this.h()},l(u){e=B(u,"DIV",{class:!0});var h=C(e);L(t.$$.fragment,h),l=P(h),i.l(h),h.forEach(m),this.h()},h(){w(e,"class","group flex flex-col gap-xs")},m(u,h){V(u,e,h),D(t,e,null),O(e,l),o[r].m(e,null),n=!0},p(u,h){let f=r;r=c(u),r===f?o[r].p(u,h):(x(),_(o[f],1,1,()=>{o[f]=null}),M(),i=o[r],i?i.p(u,h):(i=o[r]=a[r](u),i.c()),g(i,1),i.m(e,null))},i(u){n||(g(t.$$.fragment,u),g(i),n=!0)},o(u){_(t.$$.fragment,u),_(i),n=!1},d(u){u&&m(e),E(t),o[r].d()}}}function Dt(s){let e,t,l;function r(n){s[14](n)}let i={items:Ne};return s[5]!==void 0&&(i.value=s[5]),e=new Ue({props:i}),ee.push(()=>oe(e,"value",r)),{c(){T(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,a){D(e,n,a),l=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],se(()=>t=!1)),e.$set(o)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){E(e,n)}}}function Et(s){let e,t,l;function r(n){s[13](n)}let i={items:Ne};return s[5]!==void 0&&(i.value=s[5]),e=new vt({props:i}),ee.push(()=>oe(e,"value",r)),{c(){T(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,a){D(e,n,a),l=!0},p(n,a){const o={};!t&&a&32&&(t=!0,o.value=n[5],se(()=>t=!1)),e.$set(o)},i(n){l||(g(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){E(e,n)}}}function Ee(s){let e,t,l,r,i,n;t=new G({props:{typo:"label",content:"Order",class:"case-upper"}});function a(c){s[15](c)}let o={items:s[11],noDot:!0};return s[7]!==void 0&&(o.value=s[7]),r=new Ue({props:o}),ee.push(()=>oe(r,"value",a)),{c(){e=S("div"),T(t.$$.fragment),l=A(),T(r.$$.fragment),this.h()},l(c){e=B(c,"DIV",{class:!0});var u=C(e);L(t.$$.fragment,u),l=P(u),L(r.$$.fragment,u),u.forEach(m),this.h()},h(){w(e,"class","group flex flex-col gap-xs")},m(c,u){V(c,e,u),D(t,e,null),O(e,l),D(r,e,null),n=!0},p(c,u){const h={};!i&&u&128&&(i=!0,h.value=c[7],se(()=>i=!1)),r.$set(h)},i(c){n||(g(t.$$.fragment,c),g(r.$$.fragment,c),n=!0)},o(c){_(t.$$.fragment,c),_(r.$$.fragment,c),n=!1},d(c){c&&m(e),E(t),E(r)}}}function Ot(s){let e,t;return e=new gt({props:{height:"16"}}),{c(){T(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,r){D(e,l,r),t=!0},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){_(e.$$.fragment,l),t=!1},d(l){E(e,l)}}}function Ct(s){let e,t;return e=new G({props:{content:"Confirm",typo:"small"}}),{c(){T(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,r){D(e,l,r),t=!0},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){_(e.$$.fragment,l),t=!1},d(l){E(e,l)}}}function St(s){let e,t,l,r;const i=[Ct,Ot],n=[];function a(o,c){return o[4]?0:1}return e=a(s),t=n[e]=i[e](s),{c(){t.c(),l=_e()},l(o){t.l(o),l=_e()},m(o,c){n[e].m(o,c),V(o,l,c),r=!0},p(o,c){let u=e;e=a(o),e!==u&&(x(),_(n[u],1,1,()=>{n[u]=null}),M(),t=n[e],t||(t=n[e]=i[e](o),t.c()),g(t,1),t.m(l.parentNode,l))},i(o){r||(g(t),r=!0)},o(o){_(t),r=!1},d(o){o&&m(l),n[e].d(o)}}}function Bt(s){let e,t,l,r,i,n,a,o,c,u,h,f;l=new G({props:{typo:"label",content:"Query",class:"case-upper"}});function p(v){s[12](v)}let y={items:s[1]};s[6]!==void 0&&(y.value=s[6]),i=new qt({props:y}),ee.push(()=>oe(i,"value",p));let k=s[0]&&De(s),$=s[3]&&Ee(s);return h=new ie({props:{class:"button pointer-events-initial",fn:s[16],theme:"cta",$$slots:{default:[St]},$$scope:{ctx:s}}}),{c(){e=S("div"),t=S("div"),T(l.$$.fragment),r=A(),T(i.$$.fragment),a=A(),k&&k.c(),o=A(),$&&$.c(),c=A(),u=S("div"),T(h.$$.fragment),this.h()},l(v){e=B(v,"DIV",{class:!0});var b=C(e);t=B(b,"DIV",{class:!0});var q=C(t);L(l.$$.fragment,q),r=P(q),L(i.$$.fragment,q),q.forEach(m),a=P(b),k&&k.l(b),o=P(b),$&&$.l(b),b.forEach(m),c=P(v),u=B(v,"DIV",{class:!0});var j=C(u);L(h.$$.fragment,j),j.forEach(m),this.h()},h(){w(t,"class","group flex flex-col gap-xs"),w(e,"class","filters px-s py-m xl:p-0 svelte-1v2kozf"),z(e,"show",s[4]),w(u,"class","cta pointer-events-none xl:hidden svelte-1v2kozf"),z(u,"open",s[4])},m(v,b){V(v,e,b),O(e,t),D(l,t,null),O(t,r),D(i,t,null),O(e,a),k&&k.m(e,null),O(e,o),$&&$.m(e,null),V(v,c,b),V(v,u,b),D(h,u,null),f=!0},p(v,[b]){const q={};b&2&&(q.items=v[1]),!n&&b&64&&(n=!0,q.value=v[6],se(()=>n=!1)),i.$set(q),v[0]?k?(k.p(v,b),b&1&&g(k,1)):(k=De(v),k.c(),g(k,1),k.m(e,o)):k&&(x(),_(k,1,1,()=>{k=null}),M()),v[3]?$?($.p(v,b),b&8&&g($,1)):($=Ee(v),$.c(),g($,1),$.m(e,null)):$&&(x(),_($,1,1,()=>{$=null}),M()),(!f||b&16)&&z(e,"show",v[4]);const j={};b&16&&(j.fn=v[16]),b&262160&&(j.$$scope={dirty:b,ctx:v}),h.$set(j),(!f||b&16)&&z(u,"open",v[4])},i(v){f||(g(l.$$.fragment,v),g(i.$$.fragment,v),g(k),g($),g(h.$$.fragment,v),f=!0)},o(v){_(l.$$.fragment,v),_(i.$$.fragment,v),_(k),_($),_(h.$$.fragment,v),f=!1},d(v){v&&(m(e),m(c),m(u)),E(l),E(i),k&&k.d(),$&&$.d(),E(h)}}}function Vt(s,e,t){var I;let l,r,i,{showLang:n=!0}=e,{queries:a}=e,{checkbox:o=!1}=e,{order:c=!1}=e,u=he("query"),h=he("lang"),f=he("order");ae(s,u,d=>t(6,r=d)),ae(s,h,d=>t(17,l=d)),ae(s,f,d=>t(7,i=d));let p=!1,y=l?o?(I=l==null?void 0:l.split)==null?void 0:I.call(l," "):l:[];Ge(async()=>{setTimeout(()=>{var d;t(5,y=o?((d=l==null?void 0:l.split)==null?void 0:d.call(l," "))||[]:l)},100)});const k=[{label:"Views",code:"views"},{label:"Comments",code:"comments"},{label:"Likes",code:"likes"},{label:"Date",code:"date"}];function $(d){r=d,u.set(r)}function v(d){y=d,t(5,y)}function b(d){y=d,t(5,y)}function q(d){i=d,f.set(i)}const j=()=>t(4,p=!p);return s.$$set=d=>{"showLang"in d&&t(0,n=d.showLang),"queries"in d&&t(1,a=d.queries),"checkbox"in d&&t(2,o=d.checkbox),"order"in d&&t(3,c=d.order)},s.$$.update=()=>{var d;s.$$.dirty&16&&document.body.classList.toggle("scroll-lock",p),s.$$.dirty&32&&Je(h,l=((d=y==null?void 0:y.join)==null?void 0:d.call(y," "))||y,l)},innerWidth>Xe(rt.l)&&t(4,p=!1),[n,a,o,c,p,y,r,i,u,h,f,k,$,v,b,q,j]}class jt extends H{constructor(e){super(),U(this,e,Vt,Bt,R,{showLang:0,queries:1,checkbox:2,order:3})}}const At="Getty Images circulation",Pt="By which web pages are the most significant stock photos used?",Gt="Getty Images provides insight into the visual repertoire associated with toxicities. This page shows images returned by GettyImages for each query. Images are grouped into clusters of stereotypes. Clusters of stereotypes are ordered from most to least common.",Nt=["Identify most significant images","Reverse search images on Google Image Search","Collect web pages hosting the images","Analyse top web pages"],xt={title:At,research_question:Pt,description:Gt,protocol:Nt},Mt="Getty Images stereotypes",Rt="Which visual tropes emerge in connection to different pollution routes, practices and substances?",Ht="Getty Images provides insight into the visual repertoire associated with toxicities. This page shows images returned by GettyImages for each query. Images are grouped into clusters of stereotypes. Clusters of stereotypes are ordered from most to least common.",Ut=["Search term on Getty Images","Collect 1000 top photos","Cluster images based on similarity","Identify most recurrent visual stereotypes"],zt={title:Mt,research_question:Rt,description:Ht,protocol:Ut},Wt={},Yt="TikTok topics",Ft="Which topics are connected to different substances, practices and devices?",Jt="On TikTok users share fears, practices, and information about toxicities. This page collects clusters of similar hashtags, resized based on their frequency of use. By clicking on a cluster, users can explore videos associated with those hashtags.",Qt=["Query term on TikTok in the local language","Collect a set of videos per each query","Collect hashtags for each video","Identify and characterise clusters of similar hashtags"],Kt={title:Yt,research_question:Ft,description:Jt,protocol:Qt},Xt="Youtube language comparison",Zt="How do video results about substances change according to the language of the query?",en="Video results on YouTube vary depending on the language of the query. This page displays the top 50 videos for each query across different languages, merged together. Videos can be filtered by language and ordered by view, time, and like count.",tn=["Search term on YouTube (with language and country filter activated)","Collect the top 50 videos from the results using YouTube Data Tools","Collect metadata (likes, views, and timestamps)"],nn={title:Xt,research_question:Zt,description:en,protocol:tn},rn="Youtube network",ln="What topics are substances connected to through the recommendation algorithm?",sn="TBD",on=["Search term on YouTube (with language and country filter activated)","Collect recommended videos to the top 50 videos","Identify and characterise clusters of similar videos in dataset"],an={title:rn,research_question:ln,description:sn,protocol:on},Z={getty_circulation:xt,getty_stereotypes:zt,tiktok:Kt,youtube_language:nn,youtube_network:an,globals:Wt},cn=(s="globals",e,t)=>Z[s]&&Z[s][e]?t?Z[s][e][t]:Z[s][e]:null,Cn=s=>(e,t)=>cn(s,e,t),un=s=>{var e;return(e=Z[s])==null?void 0:e.protocol};function Oe(s,e,t){const l=s.slice();return l[6]=e[t],l}function Ce(s){let e,t,l,r=Y(s[2]),i=[];for(let a=0;a<r.length;a+=1)i[a]=Se(Oe(s,r,a));const n=a=>_(i[a],1,1,()=>{i[a]=null});return{c(){e=S("ol");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=B(a,"OL",{class:!0});var o=C(e);for(let c=0;c<i.length;c+=1)i[c].l(o);o.forEach(m),this.h()},h(){w(e,"class","details svelte-128vag7")},m(a,o){V(a,e,o);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);l=!0},p(a,o){if(o&4){r=Y(a[2]);let c;for(c=0;c<r.length;c+=1){const u=Oe(a,r,c);i[c]?(i[c].p(u,o),g(i[c],1)):(i[c]=Se(u),i[c].c(),g(i[c],1),i[c].m(e,null))}for(x(),c=r.length;c<i.length;c+=1)n(c);M()}},i(a){if(!l){for(let o=0;o<r.length;o+=1)g(i[o]);a&&Qe(()=>{l&&(t||(t=me(e,pe,{},!0)),t.run(1))}),l=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)_(i[o]);a&&(t||(t=me(e,pe,{},!1)),t.run(0)),l=!1},d(a){a&&m(e),le(i,a),a&&t&&t.end()}}}function Se(s){let e,t,l,r;return t=new G({props:{content:s[6],typo:"small"}}),{c(){e=S("li"),T(t.$$.fragment),l=A(),this.h()},l(i){e=B(i,"LI",{class:!0});var n=C(e);L(t.$$.fragment,n),l=P(n),n.forEach(m),this.h()},h(){w(e,"class","typo-small svelte-128vag7")},m(i,n){V(i,e,n),D(t,e,null),O(e,l),r=!0},p:W,i(i){r||(g(t.$$.fragment,i),r=!0)},o(i){_(t.$$.fragment,i),r=!1},d(i){i&&m(e),E(t)}}}function fn(s){let e,t,l,r,i,n,a,o;r=new G({props:{content:"Protocol"}});let c=s[0]&&Ce(s);return{c(){e=S("div"),t=S("button"),l=S("div"),T(r.$$.fragment),i=A(),c&&c.c(),this.h()},l(u){e=B(u,"DIV",{class:!0});var h=C(e);t=B(h,"BUTTON",{class:!0});var f=C(t);l=B(f,"DIV",{class:!0});var p=C(l);L(r.$$.fragment,p),p.forEach(m),f.forEach(m),i=P(h),c&&c.l(h),h.forEach(m),this.h()},h(){w(l,"class","text svelte-128vag7"),w(t,"class","header text-left svelte-128vag7"),w(e,"class","accordion p-xs svelte-128vag7")},m(u,h){V(u,e,h),O(e,t),O(t,l),D(r,l,null),O(e,i),c&&c.m(e,null),s[5](e),n=!0,a||(o=de(t,"click",s[3]),a=!0)},p(u,[h]){u[0]?c?(c.p(u,h),h&1&&g(c,1)):(c=Ce(u),c.c(),g(c,1),c.m(e,null)):c&&(x(),_(c,1,1,()=>{c=null}),M())},i(u){n||(g(r.$$.fragment,u),g(c),n=!0)},o(u){_(r.$$.fragment,u),_(c),n=!1},d(u){u&&m(e),E(r),c&&c.d(),s[5](null),a=!1,o()}}}function hn(s,e,t){let{open:l=!1}=e,{topic:r}=e;const i=un(r);let n;const a=()=>{t(0,l=!l)};function o(c){ee[c?"unshift":"push"](()=>{n=c,t(1,n)})}return s.$$set=c=>{"open"in c&&t(0,l=c.open),"topic"in c&&t(4,r=c.topic)},[l,n,i,a,r,o]}class gn extends H{constructor(e){super(),U(this,e,hn,fn,R,{open:0,topic:4})}}function dn(s){let e,t,l,r;return e=new G({props:{typo:"small",content:"download data"}}),l=new Ke({props:{width:"8"}}),{c(){T(e.$$.fragment),t=A(),T(l.$$.fragment)},l(i){L(e.$$.fragment,i),t=P(i),L(l.$$.fragment,i)},m(i,n){D(e,i,n),V(i,t,n),D(l,i,n),r=!0},p:W,i(i){r||(g(e.$$.fragment,i),g(l.$$.fragment,i),r=!0)},o(i){_(e.$$.fragment,i),_(l.$$.fragment,i),r=!1},d(i){i&&m(t),E(e,i),E(l,i)}}}function _n(s){let e,t,l,r,i,n,a,o,c,u,h,f,p,y,k,$,v,b,q,j;return l=new G({props:{typo:"h2",content:s[4]}}),n=new G({props:{typo:"label",content:"WHAT AM I LOOKING AT?"}}),o=new G({props:{typo:"p",content:s[5]}}),u=new jt({props:{queries:s[2],showLang:s[3],checkbox:s[0],order:s[1]}}),p=new G({props:{typo:"label",content:"Resources",class:"case-upper"}}),$=new ie({props:{url:"#",theme:"download",class:"flex gap-xxs items-center",$$slots:{default:[dn]},$$scope:{ctx:s}}}),q=new gn({props:{topic:s[6]}}),{c(){e=S("div"),t=S("div"),T(l.$$.fragment),r=A(),i=S("div"),T(n.$$.fragment),a=A(),T(o.$$.fragment),c=A(),T(u.$$.fragment),h=A(),f=S("div"),T(p.$$.fragment),y=A(),k=S("div"),T($.$$.fragment),v=A(),b=S("div"),T(q.$$.fragment),this.h()},l(I){e=B(I,"DIV",{class:!0});var d=C(e);t=B(d,"DIV",{class:!0});var Q=C(t);L(l.$$.fragment,Q),Q.forEach(m),r=P(d),i=B(d,"DIV",{class:!0});var F=C(i);L(n.$$.fragment,F),a=P(F),L(o.$$.fragment,F),F.forEach(m),c=P(d),L(u.$$.fragment,d),h=P(d),f=B(d,"DIV",{class:!0});var N=C(f);L(p.$$.fragment,N),y=P(N),k=B(N,"DIV",{class:!0});var K=C(k);L($.$$.fragment,K),K.forEach(m),N.forEach(m),v=P(d),b=B(d,"DIV",{class:!0});var X=C(b);L(q.$$.fragment,X),X.forEach(m),d.forEach(m),this.h()},h(){w(t,"class","group"),w(i,"class","group flex flex-col gap-xs"),w(k,"class","flex gap-xs"),w(f,"class","group flex flex-col gap-xs"),w(b,"class","group flex flex-col gap-xs"),w(e,"class","sidebar flex flex-col gap-l py-m px-s scrollbar-hide svelte-1i17fy9")},m(I,d){V(I,e,d),O(e,t),D(l,t,null),O(e,r),O(e,i),D(n,i,null),O(i,a),D(o,i,null),O(e,c),D(u,e,null),O(e,h),O(e,f),D(p,f,null),O(f,y),O(f,k),D($,k,null),O(e,v),O(e,b),D(q,b,null),j=!0},p(I,[d]){const Q={};d&16&&(Q.content=I[4]),l.$set(Q);const F={};d&32&&(F.content=I[5]),o.$set(F);const N={};d&4&&(N.queries=I[2]),d&8&&(N.showLang=I[3]),d&1&&(N.checkbox=I[0]),d&2&&(N.order=I[1]),u.$set(N);const K={};d&128&&(K.$$scope={dirty:d,ctx:I}),$.$set(K);const X={};d&64&&(X.topic=I[6]),q.$set(X)},i(I){j||(g(l.$$.fragment,I),g(n.$$.fragment,I),g(o.$$.fragment,I),g(u.$$.fragment,I),g(p.$$.fragment,I),g($.$$.fragment,I),g(q.$$.fragment,I),j=!0)},o(I){_(l.$$.fragment,I),_(n.$$.fragment,I),_(o.$$.fragment,I),_(u.$$.fragment,I),_(p.$$.fragment,I),_($.$$.fragment,I),_(q.$$.fragment,I),j=!1},d(I){I&&m(e),E(l),E(n),E(o),E(u),E(p),E($),E(q)}}}function mn(s,e,t){let{checkbox:l=!1}=e,{order:r=!1}=e,{queries:i}=e,{showLang:n=!0}=e,{question:a}=e,{description:o}=e,{topic:c}=e;return s.$$set=u=>{"checkbox"in u&&t(0,l=u.checkbox),"order"in u&&t(1,r=u.order),"queries"in u&&t(2,i=u.queries),"showLang"in u&&t(3,n=u.showLang),"question"in u&&t(4,a=u.question),"description"in u&&t(5,o=u.description),"topic"in u&&t(6,c=u.topic)},[l,r,i,n,a,o,c]}class Sn extends H{constructor(e){super(),U(this,e,mn,_n,R,{checkbox:0,order:1,queries:2,showLang:3,question:4,description:5,topic:6})}}export{He as L,Sn as S,On as a,Dn as b,En as c,Cn as g,he as q};
