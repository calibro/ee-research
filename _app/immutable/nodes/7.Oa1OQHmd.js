import{g as Q,c as J,f as z}from"../chunks/download.D2r-P-1V.js";import"../chunks/index.CzR0xuCU.js";import{b as U}from"../chunks/paths.DRKduh0c.js";import{s as K,o as Z,q as te,p as re,v as F,r as se,m as ne,c as oe,f as le}from"../chunks/scheduler.DNhbA_Mc.js";import{S as x,i as ee,e as q,m as L,s as I,c as w,a as k,n as M,f as S,d as _,o as g,g as E,h as $,p as T,k as p,z as X,l as b,x as Y,q as D,I as G,G as ae,B as P,y as j}from"../chunks/index._vs4WPtb.js";import{e as A,u as ie,o as ce}from"../chunks/each.D6wE_PoE.js";import{S as ue,q as fe,a as de,g as me,b as he}from"../chunks/index.eNTJs6KT.js";import{T as C}from"../chunks/text.JoT1ARhU.js";const ge=!1,_e=!0,pe=!1;async function ve({params:i,fetch:t}){const n=`${U}/assets/gettyimages/queries.csv`,{data:o,error:l}=await Q({key:"gettyimages-queries",url:n,type:"text"},t);return!o||l?(console.error("error",l),l(404,"Not found")):{queries:J(o)}}const Pe=Object.freeze(Object.defineProperty({__proto__:null,csr:_e,load:ve,prerender:ge,ssr:pe},Symbol.toStringTag,{value:"Module"})),ye=i=>{const t=a=>{const s=a.target.closest(".scroll-container");if(!s)return;const r={left:s.scrollLeft,top:s.scrollTop,x:a.clientX,y:a.clientY},e=c=>{const f=c.clientX-r.x,v=c.clientY-r.y;s.scrollTop=r.top-v,s.scrollLeft=r.left-f,o(s)},d=()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",d),l(s)};document.addEventListener("mousemove",e),document.addEventListener("mouseup",d)},n=a=>{const s=containerRef.current;if(!s)return;const r=a.touches[0],e={left:s.scrollLeft,top:s.scrollTop,x:r.clientX,y:r.clientY},d=f=>{const v=f.touches[0],m=v.clientX-e.x,u=v.clientY-e.y;s.scrollTop=e.top-u,s.scrollLeft=e.left-m,o(s)},c=()=>{document.removeEventListener("touchmove",d),document.removeEventListener("touchend",c),l(s)};document.addEventListener("touchmove",d),document.addEventListener("touchend",c)},o=a=>{a.style.cursor="grabbing",a.style.userSelect="none"},l=a=>{a.style.cursor="grab",a.style.removeProperty("user-select")};return document.addEventListener("mousedown",t,!0),document.addEventListener("touchstart",n,!0),{destroy(){document.removeEventListener("mousedown",t,!0),document.removeEventListener("touchstart",n,!0)}}};function H(i,t,n){const o=i.slice();return o[11]=t[n],o[13]=n,o}function O(i){let t,n,o,l,a,s=A(i[0][1]),r=[];for(let e=0;e<s.length;e+=1)r[e]=B(H(i,s,e));return{c(){t=q("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=w(e,"DIV",{class:!0});var d=k(t);for(let c=0;c<r.length;c+=1)r[c].l(d);d.forEach(_),this.h()},h(){g(t,"class","images col-[span-9] l:col-[span-7] scrollbar-hide scroll-container svelte-ndfj1q")},m(e,d){E(e,t,d);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(t,null);o=!0,l||(a=te(ye.call(null,t)),l=!0)},p(e,d){if(d&25){s=A(e[0][1]);let c;for(c=0;c<s.length;c+=1){const f=H(e,s,c);r[c]?r[c].p(f,d):(r[c]=B(f),r[c].c(),r[c].m(t,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=s.length}},i(e){o||(e&&re(()=>{o&&(n||(n=G(t,z,{},!0)),n.run(1))}),o=!0)},o(e){e&&(n||(n=G(t,z,{},!1)),n.run(0)),o=!1},d(e){e&&_(t),ae(r,e),e&&n&&n.end(),l=!1,a()}}}function B(i){let t,n,o,l,a,s,r;function e(...c){return i[6](i[13],...c)}function d(...c){return i[7](i[13],...c)}return{c(){t=q("div"),n=q("img"),a=I(),this.h()},l(c){t=w(c,"DIV",{class:!0,role:!0});var f=k(t);n=w(f,"IMG",{src:!0,alt:!0,loading:!0,draggable:!0}),a=S(f),f.forEach(_),this.h()},h(){F(n.src,o=i[3](i[11].id))||g(n,"src",o),g(n,"alt",l=i[11].title),g(n,"loading","lazy"),g(n,"draggable","false"),g(t,"class","image-container svelte-ndfj1q"),g(t,"role","img")},m(c,f){E(c,t,f),$(t,n),$(t,a),s||(r=[P(t,"mouseover",e),P(t,"focus",d),P(t,"mouseout",i[8]),P(t,"blur",i[9])],s=!0)},p(c,f){i=c,f&1&&!F(n.src,o=i[3](i[11].id))&&g(n,"src",o),f&1&&l!==(l=i[11].title)&&g(n,"alt",l)},d(c){c&&_(t),s=!1,se(r)}}}function be(i){var v;let t,n,o,l,a,s,r,e,d,c;l=new C({props:{typo:"label",content:"Stereotype",class:"case-upper"}}),s=new C({props:{typo:"h3",content:i[0][1][0].clusterLabel,class:"mb-xs"}}),e=new C({props:{typo:"label",content:"Images: "+((v=i[0][1])==null?void 0:v.length),class:"case-upper"}});let f=i[2]&&O(i);return{c(){t=q("div"),n=q("div"),o=q("div"),L(l.$$.fragment),a=I(),L(s.$$.fragment),r=I(),L(e.$$.fragment),d=I(),f&&f.c(),this.h()},l(m){t=w(m,"DIV",{class:!0});var u=k(t);n=w(u,"DIV",{class:!0});var h=k(n);o=w(h,"DIV",{});var y=k(o);M(l.$$.fragment,y),a=S(y),M(s.$$.fragment,y),y.forEach(_),r=S(h),M(e.$$.fragment,h),h.forEach(_),d=S(u),f&&f.l(u),u.forEach(_),this.h()},h(){g(n,"class","col-[span-9] l:col-[span-2] flex-btw-start l:flex-col-btw-start p-s"),g(t,"class","getty grid-9-gap svelte-ndfj1q")},m(m,u){E(m,t,u),$(t,n),$(n,o),T(l,o,null),$(o,a),T(s,o,null),$(n,r),T(e,n,null),$(t,d),f&&f.m(t,null),i[10](t),c=!0},p(m,[u]){var V;const h={};u&1&&(h.content=m[0][1][0].clusterLabel),s.$set(h);const y={};u&1&&(y.content="Images: "+((V=m[0][1])==null?void 0:V.length)),e.$set(y),m[2]?f?(f.p(m,u),u&4&&p(f,1)):(f=O(m),f.c(),p(f,1),f.m(t,null)):f&&(X(),b(f,1,1,()=>{f=null}),Y())},i(m){c||(p(l.$$.fragment,m),p(s.$$.fragment,m),p(e.$$.fragment,m),p(f),c=!0)},o(m){b(l.$$.fragment,m),b(s.$$.fragment,m),b(e.$$.fragment,m),b(f),c=!1},d(m){m&&_(t),D(l),D(s),D(e),f&&f.d(),i[10](null)}}}function $e(i,t,n){let{cluster:o}=t,{query:l}=t;const a=u=>`${U}/assets/gettyimages/${l}/images/${u}.jpg`;let s;const r=(u,h)=>{window.matchMedia("(hover: hover)").matches&&(u!=null&&u.target?u.target.closest(".image-container").style.minWidth=`${u.target.clientWidth}px`:s.querySelectorAll(".image-container").forEach(V=>{V.removeAttribute("style")}))};let e=!1;Z(()=>{let u;const h=()=>{const y=s.getBoundingClientRect();if(n(2,e=y.top<window.innerHeight&&y.bottom>=0),e){cancelAnimationFrame(u);return}u=requestAnimationFrame(h)};return h(),()=>{cancelAnimationFrame(u)}});const d=(u,h)=>r(h),c=(u,h)=>r(h),f=u=>r(),v=u=>r();function m(u){ne[u?"unshift":"push"](()=>{s=u,n(1,s)})}return i.$$set=u=>{"cluster"in u&&n(0,o=u.cluster),"query"in u&&n(5,l=u.query)},[o,s,e,a,r,l,d,c,f,v,m]}class qe extends x{constructor(t){super(),ee(this,t,$e,be,K,{cluster:0,query:5})}}function N(i,t,n){const o=i.slice();return o[11]=t[n],o[13]=n,o}function R(i){let t=[],n=new Map,o,l,a=A(i[1]);const s=r=>{var e;return`${r[0]}-${r[13]}-${(e=r[11])==null?void 0:e[0]}`};for(let r=0;r<a.length;r+=1){let e=N(i,a,r),d=s(e);n.set(d,t[r]=W(d,e))}return{c(){for(let r=0;r<t.length;r+=1)t[r].c();o=j()},l(r){for(let e=0;e<t.length;e+=1)t[e].l(r);o=j()},m(r,e){for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(r,e);E(r,o,e),l=!0},p(r,e){e&3&&(a=A(r[1]),X(),t=ie(t,e,s,1,r,a,n,o.parentNode,ce,W,o,N),Y())},i(r){if(!l){for(let e=0;e<a.length;e+=1)p(t[e]);l=!0}},o(r){for(let e=0;e<t.length;e+=1)b(t[e]);l=!1},d(r){r&&_(o);for(let e=0;e<t.length;e+=1)t[e].d(r)}}}function W(i,t){let n,o,l;return o=new qe({props:{cluster:t[11],query:t[0]}}),{key:i,first:null,c(){n=j(),L(o.$$.fragment),this.h()},l(a){n=j(),M(o.$$.fragment,a),this.h()},h(){this.first=n},m(a,s){E(a,n,s),T(o,a,s),l=!0},p(a,s){t=a;const r={};s&2&&(r.cluster=t[11]),s&1&&(r.query=t[0]),o.$set(r)},i(a){l||(p(o.$$.fragment,a),l=!0)},o(a){b(o.$$.fragment,a),l=!1},d(a){a&&_(n),D(o,a)}}}function we(i){let t,n,o,l,a;n=new ue({props:{queries:i[2],showLang:!1,description:i[3]("description"),question:i[3]("research_question")}});let s=i[1].length&&R(i);return{c(){t=q("div"),L(n.$$.fragment),o=I(),l=q("div"),s&&s.c(),this.h()},l(r){t=w(r,"DIV",{class:!0});var e=k(t);M(n.$$.fragment,e),o=S(e),l=w(e,"DIV",{class:!0});var d=k(l);s&&s.l(d),d.forEach(_),e.forEach(_),this.h()},h(){g(l,"class","container p-s grid-1-s svelte-1bhb5im"),g(t,"class","page l:flex-start-start")},m(r,e){E(r,t,e),T(n,t,null),$(t,o),$(t,l),s&&s.m(l,null),a=!0},p(r,[e]){r[1].length?s?(s.p(r,e),e&2&&p(s,1)):(s=R(r),s.c(),p(s,1),s.m(l,null)):s&&(X(),b(s,1,1,()=>{s=null}),Y())},i(r){a||(p(n.$$.fragment,r),p(s),a=!0)},o(r){b(n.$$.fragment,r),b(s),a=!1},d(r){r&&_(t),D(n),s&&s.d()}}}function ke(i,t,n){let o,l,{data:a}=t;const{queries:s}=a,r=de("getty_stereotypes");let e,d,c=!1,f=fe("query");oe(i,f,u=>n(0,l=u)),Z(()=>{var u;l||le(f,l=(u=s[0])==null?void 0:u.query,l)});const v=`${U}/assets/gettyimages`,m=async()=>{if(c||!he)return;if(c=!0,!l){c=!1,n(6,e=null);return}const{data:u,error:h}=await Q({key:"getty-stereotypes-data",url:o,type:"text"});u?n(6,e=J(u)):n(6,e=null),c=!1};return i.$$set=u=>{"data"in u&&n(5,a=u.data)},i.$$.update=()=>{i.$$.dirty&1&&n(7,o=`${v}/${l}/${l}.csv`),i.$$.dirty&64&&n(1,d=e!=null&&e.length?me(e,u=>u.cluster):[]),i.$$.dirty&128&&m()},[l,d,s,r,f,a,e,o]}class je extends x{constructor(t){super(),ee(this,t,ke,we,K,{data:5})}}export{je as component,Pe as universal};
