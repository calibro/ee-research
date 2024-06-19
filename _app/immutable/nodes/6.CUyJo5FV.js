import{b as de}from"../chunks/entry.CNwJifys.js";import{g as Se,c as Ne,b as Ue}from"../chunks/index.DemlbhXW.js";import{s as ne,q as _e,r as Ae,H as Qe,v as Re,b as E,w as Ze,f as $,x as qe,i as j,n as P,y as Ie,e as q,a as M,c as I,g as S,p as w,h as v,A as se,a9 as ze,L as Fe,B as Oe,T as Be,k as He,F as De,S as Ke,E as Je,U as We,V as je}from"../chunks/scheduler.DYeTGcRG.js";import{S as le,i as ae,c as x,b as L,m as T,t as k,a as D,d as C,g as ge,f as me}from"../chunks/index.C5RX2N7H.js";import{e as re,u as Xe,d as Ye}from"../chunks/each.kS4HPsoe.js";import{S as et,q as tt,g as st,b as rt}from"../chunks/sidebar.REozkBHh.js";import{l as nt,c as lt}from"../chunks/lockscroll.DqM8qm6-.js";import{n as at}from"../chunks/stores.Cq65lmPj.js";import{g as ot}from"../chunks/spread.CN4WR7uZ.js";import{L as Ge}from"../chunks/link.DDuHUsxF.js";import{T as H}from"../chunks/text.Ddg16gdd.js";import{C as ct}from"../chunks/close.BtUZoboE.js";const it=!1,ut=!0,ft=!1;async function gt({params:n,fetch:e}){const s=`${de}/assets/gettyimages/queries.csv`,{data:t,error:r}=await Se({key:"gettyimages-queries",url:s,type:"text"},e);if(!t||r)return console.error("error",r),r(404,"Not found");const c=Ne(t);return c.sort((l,f)=>l.queryLabel.localeCompare(f.queryLabel)),{queries:c}}const zt=Object.freeze(Object.defineProperty({__proto__:null,csr:ut,load:gt,prerender:it,ssr:ft},Symbol.toStringTag,{value:"Module"}));function mt(n){let e,s,t='<path d="M31.8536 21.3536C32.0488 21.1583 32.0488 20.8417 31.8536 20.6464L28.6716 17.4645C28.4763 17.2692 28.1597 17.2692 27.9645 17.4645C27.7692 17.6597 27.7692 17.9763 27.9645 18.1716L30.7929 21L27.9645 23.8284C27.7692 24.0237 27.7692 24.3403 27.9645 24.5355C28.1597 24.7308 28.4763 24.7308 28.6716 24.5355L31.8536 21.3536ZM10.5 21.5L31.5 21.5L31.5 20.5L10.5 20.5L10.5 21.5Z" fill="black"/><circle cx="21" cy="21" r="20.5" stroke="black"/>',r=[{viewBox:"0 0 42 42"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],c={};for(let l=0;l<r.length;l+=1)c=_e(c,r[l]);return{c(){e=Ae("svg"),s=new Qe(!0),this.h()},l(l){e=Re(l,"svg",{viewBox:!0,fill:!0,xmlns:!0});var f=E(e);s=Ze(f,!0),f.forEach($),this.h()},h(){s.a=null,qe(e,c)},m(l,f){j(l,e,f),s.m(t,e)},p(l,[f]){qe(e,c=ot(r,[{viewBox:"0 0 42 42"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},f&1&&l[0]]))},i:P,o:P,d(l){l&&$(e)}}}function dt(n,e,s){return n.$$set=t=>{s(0,e=_e(_e({},e),Ie(t)))},e=Ie(e),[e]}class ht extends le{constructor(e){super(),ae(this,e,dt,mt,ne,{})}}function pt(n){let e,s;return e=new ht({props:{width:"26"}}),{c(){x(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){T(e,t,r),s=!0},p:P,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function _t(n){var d;let e,s,t,r,c,l,f,a,o,m,p,_,y,i,u;return r=new H({props:{typo:"label",content:"Title",class:"case-upper"}}),l=new H({props:{typo:"h3",content:n[0].title}}),m=new H({props:{typo:"label",content:"Domain",class:"case-upper"}}),_=new H({props:{typo:"h3",content:(d=n[0].host)==null?void 0:d.replace("www.","")}}),i=new Ge({props:{url:n[0].link,class:"col-[span-12] xl:col-[span-1] flex-center-center",external:!0,$$slots:{default:[pt]},$$scope:{ctx:n}}}),{c(){e=q("div"),s=q("div"),t=q("div"),x(r.$$.fragment),c=M(),x(l.$$.fragment),f=M(),a=q("div"),o=q("div"),x(m.$$.fragment),p=M(),x(_.$$.fragment),y=M(),x(i.$$.fragment),this.h()},l(g){e=I(g,"DIV",{class:!0});var h=E(e);s=I(h,"DIV",{class:!0});var V=E(s);t=I(V,"DIV",{});var G=E(t);L(r.$$.fragment,G),c=S(G),L(l.$$.fragment,G),G.forEach($),V.forEach($),f=S(h),a=I(h,"DIV",{class:!0});var N=E(a);o=I(N,"DIV",{});var O=E(o);L(m.$$.fragment,O),p=S(O),L(_.$$.fragment,O),O.forEach($),N.forEach($),y=S(h),L(i.$$.fragment,h),h.forEach($),this.h()},h(){w(s,"class","col-[span-12] xl:col-[span-7] pb-s xl:pb-0"),w(a,"class","col-[span-12] xl:col-[span-4] pb-s xl:pb-0"),w(e,"class","getty grid-12-gap p-s svelte-1fqo2ur")},m(g,h){j(g,e,h),v(e,s),v(s,t),T(r,t,null),v(t,c),T(l,t,null),v(e,f),v(e,a),v(a,o),T(m,o,null),v(o,p),T(_,o,null),v(e,y),T(i,e,null),u=!0},p(g,[h]){var O;const V={};h&1&&(V.content=g[0].title),l.$set(V);const G={};h&1&&(G.content=(O=g[0].host)==null?void 0:O.replace("www.","")),_.$set(G);const N={};h&1&&(N.url=g[0].link),h&2&&(N.$$scope={dirty:h,ctx:g}),i.$set(N)},i(g){u||(k(r.$$.fragment,g),k(l.$$.fragment,g),k(m.$$.fragment,g),k(_.$$.fragment,g),k(i.$$.fragment,g),u=!0)},o(g){D(r.$$.fragment,g),D(l.$$.fragment,g),D(m.$$.fragment,g),D(_.$$.fragment,g),D(i.$$.fragment,g),u=!1},d(g){g&&$(e),C(r),C(l),C(m),C(_),C(i)}}}function vt(n,e,s){let{data:t}=e;return n.$$set=r=>{"data"in r&&s(0,t=r.data)},[t]}let $t=class extends le{constructor(e){super(),ae(this,e,vt,_t,ne,{data:0})}};function wt(n){let e,s;return e=new ct({props:{width:"26"}}),{c(){x(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){T(e,t,r),s=!0},p:P,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function yt(n){var ve,$e;let e,s,t,r,c,l,f,a,o,m,p,_,y,i,u,d,g,h,V,G,N,O,R,ce,U,Y,A,ie,he,ee,Z,F,pe,z,te;return c=new H({props:{content:"Query",typo:"label",class:"case-upper"}}),f=new H({props:{tag:"h3",typo:"h3",content:n[0][0].clusterLabel,ellipsis:!0}}),m=new H({props:{content:"Image",typo:"label",class:"case-upper"}}),g=new H({props:{content:"Results",typo:"label",class:"case-upper"}}),V=new H({props:{content:(ve=n[0])==null?void 0:ve.length}}),R=new Ge({props:{fn:n[1],class:"p-xs",$$slots:{default:[wt]},$$scope:{ctx:n}}}),F=new H({props:{content:"Results",typo:"label",class:"case-upper"}}),z=new H({props:{content:($e=n[0])==null?void 0:$e.length}}),{c(){e=q("div"),s=q("div"),t=q("div"),r=q("div"),x(c.$$.fragment),l=M(),x(f.$$.fragment),a=M(),o=q("div"),x(m.$$.fragment),p=M(),_=q("div"),y=q("img"),u=M(),d=q("div"),x(g.$$.fragment),h=M(),x(V.$$.fragment),G=M(),N=q("div"),O=q("div"),x(R.$$.fragment),ce=M(),U=q("div"),Y=q("div"),A=q("img"),he=M(),ee=q("div"),Z=q("div"),x(F.$$.fragment),pe=M(),x(z.$$.fragment),this.h()},l(b){e=I(b,"DIV",{class:!0});var B=E(e);s=I(B,"DIV",{class:!0});var Q=E(s);t=I(Q,"DIV",{class:!0});var K=E(t);r=I(K,"DIV",{class:!0});var J=E(r);L(c.$$.fragment,J),l=S(J),L(f.$$.fragment,J),J.forEach($),a=S(K),o=I(K,"DIV",{class:!0});var W=E(o);L(m.$$.fragment,W),p=S(W),_=I(W,"DIV",{class:!0});var oe=E(_);y=I(oe,"IMG",{src:!0,alt:!0,class:!0}),oe.forEach($),W.forEach($),K.forEach($),u=S(Q),d=I(Q,"DIV",{class:!0});var X=E(d);L(g.$$.fragment,X),h=S(X),L(V.$$.fragment,X),X.forEach($),G=S(Q),N=I(Q,"DIV",{class:!0,role:!0});var we=E(N);O=I(we,"DIV",{class:!0});var ye=E(O);L(R.$$.fragment,ye),ye.forEach($),we.forEach($),Q.forEach($),B.forEach($),ce=S(b),U=I(b,"DIV",{class:!0});var ue=E(U);Y=I(ue,"DIV",{class:!0});var be=E(Y);A=I(be,"IMG",{src:!0,alt:!0,class:!0}),be.forEach($),he=S(ue),ee=I(ue,"DIV",{class:!0});var ke=E(ee);Z=I(ke,"DIV",{class:!0});var fe=E(Z);L(F.$$.fragment,fe),pe=S(fe),L(z.$$.fragment,fe),fe.forEach($),ke.forEach($),ue.forEach($),this.h()},h(){w(r,"class","xl:col-[span-3]"),se(y.src,i=n[2](n[0][0].image_id))||w(y,"src",i),w(y,"alt",""),w(y,"class","svelte-1umfua"),w(_,"class","img ratio-[4/3] svelte-1umfua"),w(o,"class","hidden xl:block xl:col-[span-2]"),w(t,"class","title xl:col-[span-5] py-s px-s xl:grid-5-gap svelte-1umfua"),w(d,"class","hidden xl:block xl:col-[10/span-2] py-s px-s xl:px-0"),w(O,"class","flex-end p-s"),w(N,"class","close xl:col-12"),w(N,"role","button"),w(s,"class","content grid-2-0 auto-flow-dense xl:grid-12-gap"),w(e,"class","navbar bg-white sticky top-0 svelte-1umfua"),se(A.src,ie=n[2](n[0][0].image_id))||w(A,"src",ie),w(A,"alt",""),w(A,"class","svelte-1umfua"),w(Y,"class","img ratio-[16/9] svelte-1umfua"),w(Z,"class","col-[span-2]"),w(ee,"class","grid-4-0 p-s info svelte-1umfua"),w(U,"class","xl:hidden")},m(b,B){j(b,e,B),v(e,s),v(s,t),v(t,r),T(c,r,null),v(r,l),T(f,r,null),v(t,a),v(t,o),T(m,o,null),v(o,p),v(o,_),v(_,y),v(s,u),v(s,d),T(g,d,null),v(d,h),T(V,d,null),v(s,G),v(s,N),v(N,O),T(R,O,null),j(b,ce,B),j(b,U,B),v(U,Y),v(Y,A),v(U,he),v(U,ee),v(ee,Z),T(F,Z,null),v(Z,pe),T(z,Z,null),te=!0},p(b,[B]){var oe,X;const Q={};B&1&&(Q.content=b[0][0].clusterLabel),f.$set(Q),(!te||B&1&&!se(y.src,i=b[2](b[0][0].image_id)))&&w(y,"src",i);const K={};B&1&&(K.content=(oe=b[0])==null?void 0:oe.length),V.$set(K);const J={};B&32&&(J.$$scope={dirty:B,ctx:b}),R.$set(J),(!te||B&1&&!se(A.src,ie=b[2](b[0][0].image_id)))&&w(A,"src",ie);const W={};B&1&&(W.content=(X=b[0])==null?void 0:X.length),z.$set(W)},i(b){te||(k(c.$$.fragment,b),k(f.$$.fragment,b),k(m.$$.fragment,b),k(g.$$.fragment,b),k(V.$$.fragment,b),k(R.$$.fragment,b),k(F.$$.fragment,b),k(z.$$.fragment,b),te=!0)},o(b){D(c.$$.fragment,b),D(f.$$.fragment,b),D(m.$$.fragment,b),D(g.$$.fragment,b),D(V.$$.fragment,b),D(R.$$.fragment,b),D(F.$$.fragment,b),D(z.$$.fragment,b),te=!1},d(b){b&&($(e),$(ce),$(U)),C(c),C(f),C(m),C(g),C(V),C(R),C(F),C(z)}}}function bt(n,e,s){const t=ze();let{cluster:r,query:c}=e;const l=()=>{t("close")},f=a=>`${de}/assets/gettyimages/${c}/images/${a}.jpg`;return n.$$set=a=>{"cluster"in a&&s(0,r=a.cluster),"query"in a&&s(3,c=a.query)},[r,l,f,c]}class kt extends le{constructor(e){super(),ae(this,e,bt,yt,ne,{cluster:0,query:3})}}function Ee(n,e,s){const t=n.slice();return t[7]=e[s],t[9]=s,t}function Ve(n){let e,s;return e=new $t({props:{data:n[7]}}),{c(){x(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){T(e,t,r),s=!0},p:P,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function qt(n){let e,s,t,r,c,l,f;s=new kt({props:{cluster:n[2],rank:n[3],query:n[0]}}),s.$on("close",function(){Fe(n[1])&&n[1].apply(this,arguments)});let a=re(n[2]),o=[];for(let p=0;p<a.length;p+=1)o[p]=Ve(Ee(n,a,p));const m=p=>D(o[p],1,1,()=>{o[p]=null});return{c(){e=q("div"),x(s.$$.fragment),t=M(),r=q("div");for(let p=0;p<o.length;p+=1)o[p].c();this.h()},l(p){e=I(p,"DIV",{class:!0});var _=E(e);L(s.$$.fragment,_),t=S(_),r=I(_,"DIV",{class:!0});var y=E(r);for(let i=0;i<o.length;i+=1)o[i].l(y);y.forEach($),_.forEach($),this.h()},h(){w(r,"class","container p-s flex flex-col gap-s svelte-1lvxush"),w(e,"class","news svelte-1lvxush")},m(p,_){j(p,e,_),T(s,e,null),v(e,t),v(e,r);for(let y=0;y<o.length;y+=1)o[y]&&o[y].m(r,null);c=!0,l||(f=Oe(window,"keydown",n[4]),l=!0)},p(p,[_]){n=p;const y={};if(_&1&&(y.query=n[0]),s.$set(y),_&4){a=re(n[2]);let i;for(i=0;i<a.length;i+=1){const u=Ee(n,a,i);o[i]?(o[i].p(u,_),k(o[i],1)):(o[i]=Ve(u),o[i].c(),k(o[i],1),o[i].m(r,null))}for(ge(),i=a.length;i<o.length;i+=1)m(i);me()}},i(p){if(!c){k(s.$$.fragment,p);for(let _=0;_<a.length;_+=1)k(o[_]);c=!0}},o(p){D(s.$$.fragment,p),o=o.filter(Boolean);for(let _=0;_<o.length;_+=1)D(o[_]);c=!1},d(p){p&&$(e),C(s),Be(o,p),l=!1,f()}}}function It(n,e,s){let t;He(n,at,m=>s(6,t=m));let{query:r}=e,{news:c}=e,{close:l=()=>{}}=e;const{cluster:f,rank:a}=c,o=m=>{m.key==="Escape"&&l()};return n.$$set=m=>{"query"in m&&s(0,r=m.query),"news"in m&&s(5,c=m.news),"close"in m&&s(1,l=m.close)},n.$$.update=()=>{n.$$.dirty&66&&t&&l()},[r,l,f,a,o,c,t]}class Dt extends le{constructor(e){super(),ae(this,e,It,qt,ne,{query:0,news:5,close:1})}}function xe(n,e,s){const t=n.slice();return t[5]=e[s][0],t[6]=e[s][1],t[8]=s,t}function Le(n,e){let s,t,r,c,l,f;function a(){return e[4](e[6],e[8])}return{key:n,first:null,c(){s=q("button"),t=q("img"),c=M(),this.h()},l(o){s=I(o,"BUTTON",{class:!0});var m=E(s);t=I(m,"IMG",{src:!0,alt:!0,class:!0}),c=S(m),m.forEach($),this.h()},h(){se(t.src,r=e[3](e[5]))||w(t,"src",r),w(t,"alt",""),w(t,"class","svelte-4kyom8"),w(s,"class","img relative svelte-4kyom8"),this.first=s},m(o,m){j(o,s,m),v(s,t),v(s,c),l||(f=Oe(s,"click",a),l=!0)},p(o,m){e=o,m&1&&!se(t.src,r=e[3](e[5]))&&w(t,"src",r)},d(o){o&&$(s),l=!1,f()}}}function Et(n){let e,s,t,r,c,l,f,a,o=[],m=new Map,p;r=new H({props:{typo:"label",content:"Query",class:"case-upper"}}),l=new H({props:{typo:"h3",content:n[0][1][0][1][0].clusterLabel,class:"mb-xs"}});let _=re(n[0][1]);const y=i=>`${i[5]}-${i[0][0]}-${i[1]}`;for(let i=0;i<_.length;i+=1){let u=xe(n,_,i),d=y(u);m.set(d,o[i]=Le(d,u))}return{c(){e=q("div"),s=q("div"),t=q("div"),x(r.$$.fragment),c=M(),x(l.$$.fragment),f=M(),a=q("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=I(i,"DIV",{class:!0});var u=E(e);s=I(u,"DIV",{class:!0});var d=E(s);t=I(d,"DIV",{});var g=E(t);L(r.$$.fragment,g),c=S(g),L(l.$$.fragment,g),g.forEach($),d.forEach($),f=S(u),a=I(u,"DIV",{class:!0});var h=E(a);for(let V=0;V<o.length;V+=1)o[V].l(h);h.forEach($),u.forEach($),this.h()},h(){w(s,"class","h-full overflow-hidden col-[span-9] xl:col-[span-2] flex-btw-start xl:flex-col-btw-start p-s"),w(a,"class","h-full overflow-hidden col-[span-9] xl:col-[span-7] grid-3-0"),w(e,"class","getty grid-9-gap svelte-4kyom8")},m(i,u){j(i,e,u),v(e,s),v(s,t),T(r,t,null),v(t,c),T(l,t,null),v(e,f),v(e,a);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(a,null);p=!0},p(i,[u]){const d={};u&1&&(d.content=i[0][1][0][1][0].clusterLabel),l.$set(d),u&15&&(_=re(i[0][1]),o=Xe(o,u,y,1,i,_,m,a,Ye,Le,null,xe))},i(i){p||(k(r.$$.fragment,i),k(l.$$.fragment,i),p=!0)},o(i){D(r.$$.fragment,i),D(l.$$.fragment,i),p=!1},d(i){i&&$(e),C(r),C(l);for(let u=0;u<o.length;u+=1)o[u].d()}}}function Vt(n,e,s){let{cluster:t}=e,{query:r}=e,{open:c=(a,o)=>{}}=e;const l=a=>`${de}/assets/gettyimages/${r}/images/${a}.jpg`,f=(a,o)=>c(a,o+1);return n.$$set=a=>{"cluster"in a&&s(0,t=a.cluster),"query"in a&&s(1,r=a.query),"open"in a&&s(2,c=a.open)},[t,r,c,l,f]}class xt extends le{constructor(e){super(),ae(this,e,Vt,Et,ne,{cluster:0,query:1,open:2})}}function Te(n,e,s){const t=n.slice();return t[15]=e[s],t}function Lt(n){let e,s,t=re(n[4]),r=[];for(let l=0;l<t.length;l+=1)r[l]=Ce(Te(n,t,l));const c=l=>D(r[l],1,1,()=>{r[l]=null});return{c(){e=q("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=I(l,"DIV",{class:!0});var f=E(e);for(let a=0;a<r.length;a+=1)r[a].l(f);f.forEach($),this.h()},h(){w(e,"class","container p-s flex-col-start gap-s svelte-fr0d3y")},m(l,f){j(l,e,f);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);s=!0},p(l,f){if(f&1044){t=re(l[4]);let a;for(a=0;a<t.length;a+=1){const o=Te(l,t,a);r[a]?(r[a].p(o,f),k(r[a],1)):(r[a]=Ce(o),r[a].c(),k(r[a],1),r[a].m(e,null))}for(ge(),a=t.length;a<r.length;a+=1)c(a);me()}},i(l){if(!s){for(let f=0;f<t.length;f+=1)k(r[f]);s=!0}},o(l){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)D(r[f]);s=!1},d(l){l&&$(e),Be(r,l)}}}function Tt(n){let e,s="<p>No data available</p>";return{c(){e=q("div"),e.innerHTML=s,this.h()},l(t){e=I(t,"DIV",{class:!0,"data-svelte-h":!0}),je(e)!=="svelte-kunnt3"&&(e.innerHTML=s),this.h()},h(){w(e,"class","container flex-center-center svelte-fr0d3y")},m(t,r){j(t,e,r)},p:P,i:P,o:P,d(t){t&&$(e)}}}function Ct(n){let e,s="<p>Loading...</p>";return{c(){e=q("div"),e.innerHTML=s,this.h()},l(t){e=I(t,"DIV",{class:!0,"data-svelte-h":!0}),je(e)!=="svelte-qdph03"&&(e.innerHTML=s),this.h()},h(){w(e,"class","container flex-center-center svelte-fr0d3y")},m(t,r){j(t,e,r)},p:P,i:P,o:P,d(t){t&&$(e)}}}function Ce(n){let e,s;return e=new xt({props:{cluster:n[15],query:n[2],open:n[10]}}),{c(){x(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){T(e,t,r),s=!0},p(t,r){const c={};r&16&&(c.cluster=t[15]),r&4&&(c.query=t[2]),e.$set(c)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Me(n){let e,s;return e=new Dt({props:{news:n[3],close:n[9],query:n[2]}}),{c(){x(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){T(e,t,r),s=!0},p(t,r){const c={};r&8&&(c.news=t[3]),r&4&&(c.query=t[2]),e.$set(c)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Mt(n){let e,s,t,r,c,l,f,a,o,m,p;t=new et({props:{queries:n[5],showLang:!1,description:n[7]("description"),question:n[7]("research_question"),topic:Pe}});const _=[Ct,Tt,Lt],y=[];function i(d,g){var h;return d[1]?0:(h=d[0])!=null&&h.length?2:1}c=i(n),l=y[c]=_[c](n);let u=n[3].isOpen&&Me(n);return{c(){e=M(),s=q("div"),x(t.$$.fragment),r=M(),l.c(),f=M(),u&&u.c(),a=De(),this.h()},l(d){e=S(d),s=I(d,"DIV",{class:!0});var g=E(s);L(t.$$.fragment,g),r=S(g),l.l(g),f=S(g),u&&u.l(g),a=De(),g.forEach($),this.h()},h(){w(s,"class","page xl:flex-start-start")},m(d,g){j(d,e,g),j(d,s,g),T(t,s,null),v(s,r),y[c].m(s,null),v(s,f),u&&u.m(s,null),v(s,a),o=!0,m||(p=Ke(nt.call(null,document.body,n[6])),m=!0)},p(d,[g]){let h=c;c=i(d),c===h?y[c].p(d,g):(ge(),D(y[h],1,1,()=>{y[h]=null}),me(),l=y[c],l?l.p(d,g):(l=y[c]=_[c](d),l.c()),k(l,1),l.m(s,f)),d[3].isOpen?u?(u.p(d,g),g&8&&k(u,1)):(u=Me(d),u.c(),k(u,1),u.m(a.parentNode,a)):u&&(ge(),D(u,1,1,()=>{u=null}),me())},i(d){o||(k(t.$$.fragment,d),k(l),k(u),o=!0)},o(d){D(t.$$.fragment,d),D(l),D(u),o=!1},d(d){d&&($(e),$(s)),C(t),y[c].d(),u&&u.d(),m=!1,p()}}}const Pe="getty_circulation";function St(n,e,s){let t,r,c,{data:l}=e;const{queries:f}=l,a=lt(),o=st(Pe);let m,p=!1,_=tt("query");He(n,_,h=>s(2,c=h)),Je(()=>{var h;c||We(_,c=(h=f[0])==null?void 0:h.query,c)});const y=`${de}/assets/gettyimages`,i=async()=>{if(p||!rt)return;if(s(1,p=!0),!c){s(1,p=!1),s(0,m=null);return}const{data:h,error:V}=await Se({key:"getty-stereotypes-data",url:t,type:"text"});h?s(0,m=Ne(h)):s(0,m=null),s(1,p=!1)},u={isOpen:!1,cluster:[]},d=()=>{s(3,u.isOpen=!1,u),s(3,u.cluster=[],u),s(3,u.rank=null,u),a.toggle(!1)},g=(h,V)=>{s(3,u.isOpen=!0,u),s(3,u.cluster=h,u),s(3,u.rank=V,u),a.toggle(!0)};return n.$$set=h=>{"data"in h&&s(11,l=h.data)},n.$$.update=()=>{n.$$.dirty&4&&s(12,t=`${y}/${c}/reverse_image_search/${c}.csv`),n.$$.dirty&3&&s(4,r=m!=null&&m.length&&!p?Ue(m,h=>h.cluster,h=>h.image_id).sort((h,V)=>h[0]==="other"?1:V[0]==="other"?-1:h[0]>V[0]?1:-1):[]),n.$$.dirty&4096&&i()},[m,p,c,u,r,f,a,o,_,d,g,l,t]}class Kt extends le{constructor(e){super(),ae(this,e,St,Mt,ne,{data:11})}}export{Kt as component,zt as universal};