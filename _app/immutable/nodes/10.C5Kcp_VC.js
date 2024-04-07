import{b as oe}from"../chunks/paths.BuluHMzB.js";import{g as ae,c as ie,l as X}from"../chunks/config.Deszrcni.js";import{s as R,e as $,a as V,c as w,b as M,g as C,f as g,p as y,i as q,h as E,N as ue,U as G,E as U,r as de,D as B,P as _e,v as pe,k as Y,W as J,X as ce,n as S,I as W}from"../chunks/scheduler.B6Zqv436.js";import{S as fe,i as he,c as T,b as A,m as H,t as k,g as F,a as v,f as N,d as L}from"../chunks/index.B48o20_T.js";import{e as j,u as me,d as ge,o as be}from"../chunks/each.92kz-7G_.js";import{S as ye,q as K,g as ke,a as ve,b as $e}from"../chunks/index.DB8LAQuY.js";import{l as we,c as qe}from"../chunks/lockscroll.T3HV-FPq.js";import{s as Ie,h as Me}from"../chunks/customSwipe.-5bGPq0K.js";import{M as Ee}from"../chunks/modal.CWFe_qyA.js";import{T as z}from"../chunks/text.BgFkMpSj.js";const De=!1,Ve=!0,Ce=!1;async function Se({params:a,fetch:e}){const r=`${oe}/assets/youtube/queries.csv`,{data:t,error:n}=await ae({key:"youtube-queries",url:r,type:"text"},e);if(!t||n)return console.error("error",n),n(404,"Not found");const l=ie(t);return l.sort((c,o)=>c.queryLabel.localeCompare(o.queryLabel)),{queries:l}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,csr:Ve,load:Se,prerender:De,ssr:Ce},Symbol.toStringTag,{value:"Module"}));function Z(a,e,r){const t=a.slice();return t[14]=e[r],t[16]=r,t}function x(a){let e,r=[],t=new Map,n,l,c,o,i=j(a[5]);const h=s=>`${s[14].id}-${s[0][0]}-${s[16]}`;for(let s=0;s<i.length;s+=1){let m=Z(a,i,s),u=h(m);t.set(u,r[s]=te(u,m))}let f=a[1]&&re(a);return{c(){e=$("div");for(let s=0;s<r.length;s+=1)r[s].c();n=V(),f&&f.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var m=M(e);for(let u=0;u<r.length;u+=1)r[u].l(m);n=C(m),f&&f.l(m),m.forEach(g),this.h()},h(){y(e,"class","images col-[span-9] xl:col-[span-7] scrollbar-hide scroll-container svelte-10td8ff")},m(s,m){q(s,e,m);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(e,null);E(e,n),f&&f.m(e,null),l=!0,c||(o=G(Ie.call(null,e)),c=!0)},p(s,m){m&103&&(i=j(s[5]),r=me(r,m,h,1,s,i,t,e,ge,te,n,Z)),s[1]?f?(f.p(s,m),m&2&&k(f,1)):(f=re(s),f.c(),k(f,1),f.m(e,null)):f&&(F(),v(f,1,1,()=>{f=null}),N())},i(s){l||(k(f),l=!0)},o(s){v(f),l=!1},d(s){s&&g(e);for(let m=0;m<r.length;m+=1)r[m].d();f&&f.d(),c=!1,o()}}}function ee(a){let e,r,t,n,l;function c(){return a[7](a[14])}return{c(){e=$("img"),this.h()},l(o){e=w(o,"IMG",{src:!0,alt:!0,loading:!0,draggable:!0}),this.h()},h(){B(e.src,r=a[14].thumb)||y(e,"src",r),y(e,"alt",a[14].title),y(e,"loading","lazy"),y(e,"draggable","false")},m(o,i){q(o,e,i),n||(l=G(t=Me.call(null,e,{fn:c})),n=!0)},p(o,i){a=o,t&&pe(t.update)&&i&6&&t.update.call(null,{fn:c})},d(o){o&&g(e),n=!1,l()}}}function te(a,e){let r,t=`${e[14].name}-${e[0][0]}-${e[16]}`,n,l,c=ee(e);function o(...h){return e[8](e[16],...h)}function i(...h){return e[9](e[16],...h)}return{key:a,first:null,c(){r=$("button"),c.c(),this.h()},l(h){r=w(h,"BUTTON",{class:!0,tabindex:!0});var f=M(r);c.l(f),f.forEach(g),this.h()},h(){y(r,"class","image-container svelte-10td8ff"),y(r,"tabindex","0"),this.first=r},m(h,f){q(h,r,f),c.m(r,null),n||(l=[U(r,"mouseover",o),U(r,"focus",i),U(r,"mouseout",e[10]),U(r,"blur",e[11])],n=!0)},p(h,f){e=h,f&1&&R(t,t=`${e[14].name}-${e[0][0]}-${e[16]}`)?(c.d(1),c=ee(e),c.c(),c.m(r,null)):c.p(e,f)},d(h){h&&g(r),c.d(h),n=!1,de(l)}}}function re(a){let e,r;return e=new Ee({props:{theme:"no-bg",fn:a[12],$$slots:{default:[Te]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){H(e,t,n),r=!0},p(t,n){const l={};n&6&&(l.fn=t[12]),n&131076&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){L(e,t)}}}function Te(a){let e,r,t;return{c(){e=$("div"),r=$("iframe"),this.h()},l(n){e=w(n,"DIV",{});var l=M(e);r=w(l,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),M(r).forEach(g),l.forEach(g),this.h()},h(){y(r,"width","560"),y(r,"height","315"),B(r.src,t="https://www.youtube.com/embed/"+a[2])||y(r,"src",t),y(r,"title",""),y(r,"frameborder","0"),y(r,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),r.allowFullscreen=!0},m(n,l){q(n,e,l),E(e,r)},p(n,l){l&4&&!B(r.src,t="https://www.youtube.com/embed/"+n[2])&&y(r,"src",t)},d(n){n&&g(e)}}}function Ae(a){var m;let e,r,t,n,l,c,o,i,h,f;n=new z({props:{typo:"label",content:"Stereotype",class:"case-upper"}}),c=new z({props:{typo:"h3",content:a[0][1][0].clusterLabel,class:"mb-xs"}}),i=new z({props:{typo:"label",content:"Images: "+((m=a[0][1])==null?void 0:m.length),class:"case-upper"}});let s=a[4]&&x(a);return{c(){e=$("div"),r=$("div"),t=$("div"),T(n.$$.fragment),l=V(),T(c.$$.fragment),o=V(),T(i.$$.fragment),h=V(),s&&s.c(),this.h()},l(u){e=w(u,"DIV",{class:!0});var d=M(e);r=w(d,"DIV",{class:!0});var b=M(r);t=w(b,"DIV",{});var I=M(t);A(n.$$.fragment,I),l=C(I),A(c.$$.fragment,I),I.forEach(g),o=C(b),A(i.$$.fragment,b),b.forEach(g),h=C(d),s&&s.l(d),d.forEach(g),this.h()},h(){y(r,"class","col-[span-9] xl:col-[span-2] flex-btw-start xl:flex-col-btw-start p-s"),y(e,"class","getty grid-9-gap svelte-10td8ff")},m(u,d){q(u,e,d),E(e,r),E(r,t),H(n,t,null),E(t,l),H(c,t,null),E(r,o),H(i,r,null),E(e,h),s&&s.m(e,null),a[13](e),f=!0},p(u,[d]){var _;const b={};d&1&&(b.content=u[0][1][0].clusterLabel),c.$set(b);const I={};d&1&&(I.content="Images: "+((_=u[0][1])==null?void 0:_.length)),i.$set(I),u[4]?s?(s.p(u,d),d&16&&k(s,1)):(s=x(u),s.c(),k(s,1),s.m(e,null)):s&&(F(),v(s,1,1,()=>{s=null}),N())},i(u){f||(k(n.$$.fragment,u),k(c.$$.fragment,u),k(i.$$.fragment,u),k(s),f=!0)},o(u){v(n.$$.fragment,u),v(c.$$.fragment,u),v(i.$$.fragment,u),v(s),f=!1},d(u){u&&g(e),L(n),L(c),L(i),s&&s.d(),a[13](null)}}}function He(a,e,r){let{cluster:t}=e,n=!1,l=!1;const c=t[1].sort((_,p)=>_.rank-p.rank);let o;const i=(_,p)=>{window.matchMedia("(hover: hover)").matches&&(_!=null&&_.target?_.target.closest(".image-container").style.minWidth=`${_.target.clientWidth-1}px`:o.querySelectorAll(".image-container").forEach(O=>{O.removeAttribute("style")}))};let h=!1;ue(()=>{let _;const p=()=>{const D=o.getBoundingClientRect();if(r(4,h=D.top<window.innerHeight&&D.bottom>=0),h){cancelAnimationFrame(_);return}_=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(_)}});const f=_=>{r(1,n=!0),r(2,l=_.name)},s=(_,p)=>i(p),m=(_,p)=>i(p),u=_=>i(),d=_=>i(),b=()=>{r(1,n=!1),r(2,l=!1)};function I(_){_e[_?"unshift":"push"](()=>{o=_,r(3,o)})}return a.$$set=_=>{"cluster"in _&&r(0,t=_.cluster)},[t,n,l,o,h,c,i,f,s,m,u,d,b,I]}class Le extends fe{constructor(e){super(),he(this,e,He,Ae,R,{cluster:0})}}function le(a,e,r){const t=a.slice();return t[15]=e[r],t[17]=r,t}function Fe(a){let e,r,t=a[1].length&&a[7]&&ne(a);return{c(){e=$("div"),t&&t.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var l=M(e);t&&t.l(l),l.forEach(g),this.h()},h(){y(e,"class","container p-s grid-1-s svelte-15scxqn")},m(n,l){q(n,e,l),t&&t.m(e,null),r=!0},p(n,l){n[1].length&&n[7]?t?(t.p(n,l),l&2&&k(t,1)):(t=ne(n),t.c(),k(t,1),t.m(e,null)):t&&(F(),v(t,1,1,()=>{t=null}),N())},i(n){r||(k(t),r=!0)},o(n){v(t),r=!1},d(n){n&&g(e),t&&t.d()}}}function Ne(a){let e,r="<p>No data available</p>";return{c(){e=$("div"),e.innerHTML=r,this.h()},l(t){e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),ce(e)!=="svelte-kunnt3"&&(e.innerHTML=r),this.h()},h(){y(e,"class","container flex-center-center svelte-15scxqn")},m(t,n){q(t,e,n)},p:S,i:S,o:S,d(t){t&&g(e)}}}function Oe(a){let e,r="<p>Loading...</p>";return{c(){e=$("div"),e.innerHTML=r,this.h()},l(t){e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),ce(e)!=="svelte-qdph03"&&(e.innerHTML=r),this.h()},h(){y(e,"class","container flex-center-center svelte-15scxqn")},m(t,n){q(t,e,n)},p:S,i:S,o:S,d(t){t&&g(e)}}}function ne(a){let e=[],r=new Map,t,n,l=j(a[1]);const c=o=>{var i;return`${o[17]}-${(i=o[15])==null?void 0:i[0]}`};for(let o=0;o<l.length;o+=1){let i=le(a,l,o),h=c(i);r.set(h,e[o]=se(h,i))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=W()},l(o){for(let i=0;i<e.length;i+=1)e[i].l(o);t=W()},m(o,i){for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(o,i);q(o,t,i),n=!0},p(o,i){i&10&&(l=j(o[1]),F(),e=me(e,i,c,1,o,l,r,t.parentNode,be,se,t,le),N())},i(o){if(!n){for(let i=0;i<l.length;i+=1)k(e[i]);n=!0}},o(o){for(let i=0;i<e.length;i+=1)v(e[i]);n=!1},d(o){o&&g(t);for(let i=0;i<e.length;i+=1)e[i].d(o)}}}function se(a,e){let r,t,n;return t=new Le({props:{cluster:e[15],query:e[3]}}),{key:a,first:null,c(){r=W(),T(t.$$.fragment),this.h()},l(l){r=W(),A(t.$$.fragment,l),this.h()},h(){this.first=r},m(l,c){q(l,r,c),H(t,l,c),n=!0},p(l,c){e=l;const o={};c&2&&(o.cluster=e[15]),c&8&&(o.query=e[3]),t.$set(o)},i(l){n||(k(t.$$.fragment,l),n=!0)},o(l){v(t.$$.fragment,l),n=!1},d(l){l&&g(r),L(t,l)}}}function Pe(a){let e,r,t,n,l,c,o,i,h;t=new ye({props:{queries:a[4],description:a[6]("description"),question:a[6]("research_question")}});const f=[Oe,Ne,Fe],s=[];function m(u,d){var b;return u[2]?0:(b=u[0])!=null&&b.length?2:1}return l=m(a),c=s[l]=f[l](a),{c(){e=V(),r=$("div"),T(t.$$.fragment),n=V(),c.c(),this.h()},l(u){e=C(u),r=w(u,"DIV",{class:!0});var d=M(r);A(t.$$.fragment,d),n=C(d),c.l(d),d.forEach(g),this.h()},h(){y(r,"class","page xl:flex-start-start")},m(u,d){q(u,e,d),q(u,r,d),H(t,r,null),E(r,n),s[l].m(r,null),o=!0,i||(h=G(we.call(null,document.body,a[5])),i=!0)},p(u,[d]){let b=l;l=m(u),l===b?s[l].p(u,d):(F(),v(s[b],1,1,()=>{s[b]=null}),N(),c=s[l],c?c.p(u,d):(c=s[l]=f[l](u),c.c()),k(c,1),c.m(r,null))},i(u){o||(k(t.$$.fragment,u),k(c),o=!0)},o(u){v(t.$$.fragment,u),v(c),o=!1},d(u){u&&(g(e),g(r)),L(t),s[l].d(),i=!1,h()}}}function Ue(a,e,r){let t,n,l,c,{data:o}=e;const{queries:i}=o,h=qe(),f=ke("youtube_language");let s,m,u=!1,d=K("query");Y(a,d,p=>r(3,l=p));let b=K("lang");Y(a,b,p=>r(12,c=p)),ue(()=>{var p;l||J(d,l=(p=i[0])==null?void 0:p.query,l),c||J(b,c=t==null?void 0:t.code,c)});const I=`${oe}/assets/youtube`,_=async()=>{if(u||!$e||!n)return;if(r(2,u=!0),!l){r(2,u=!1),r(0,s=null);return}const{data:p,error:D}=await ae({key:"youtube-comparison-data",url:n,type:"text"});p?r(0,s=ie(p)):r(0,s=null),r(2,u=!1)};return a.$$set=p=>{"data"in p&&r(9,o=p.data)},a.$$.update=()=>{var p,D,O;a.$$.dirty&4096&&r(11,t=((p=X)==null?void 0:p[c])||((D=X)==null?void 0:D.en)),a.$$.dirty&2056&&r(10,n=t!=null&&t.code?`${I}/clusters/${l}_${(O=t==null?void 0:t.code)==null?void 0:O.toUpperCase()}.csv`:void 0),a.$$.dirty&5&&r(1,m=s!=null&&s.length&&!u?ve(s,P=>P.cluster).sort((P,Q)=>P[0]==="other"?1:Q[0]==="other"?-1:P[0]>Q[0]?1:-1):[]),a.$$.dirty&1024&&_(),a.$$.dirty&2&&console.log(m)},[s,m,u,l,i,h,f,d,b,o,n,t,c]}class Ze extends fe{constructor(e){super(),he(this,e,Ue,Pe,R,{data:9})}}export{Ze as component,Ke as universal};
