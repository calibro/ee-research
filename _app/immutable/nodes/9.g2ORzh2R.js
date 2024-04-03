import{g as De,c as Ie,l as Je,D as Qe}from"../chunks/download.HIaS9g-_.js";import{e as me}from"../chunks/index.CzR0xuCU.js";import{b as de}from"../chunks/paths.DdOS2Gdh.js";import{s as le,e as ae,n as Y,f as ge,a as Fe,u as We,g as Xe,b as Ye,q as et,d as tt}from"../chunks/scheduler.CA2uhRhB.js";import{S as oe,i as ie,u as Pe,H as je,v as Ue,a as C,w as Ze,d as m,x as pe,g as Q,e as E,m as y,s as N,c as V,n as q,f as S,o as v,h as u,p as L,k as w,K as ye,l as b,q as T,y as qe,r as st,z as ze,A as Ae,t as we,b as ke,J as nt,C as Le,j as Te,G as rt}from"../chunks/index.BXv2E_O8.js";import{e as Be}from"../chunks/each.GjWr3TkG.js";import{T as G}from"../chunks/text.DlD_m8u3.js";import{C as Ke}from"../chunks/close.CrRRmWma.js";import{L as be}from"../chunks/link.NXSYj_N5.js";import{g as Re}from"../chunks/spread.CN4WR7uZ.js";import{f as He}from"../chunks/index._kcpRFgJ.js";import{I as at}from"../chunks/image.CfINetYj.js";function Ne(r,e){let s=0;if(e===void 0)for(let t of r)(t=+t)&&(s+=t);else{let t=-1;for(let a of r)(a=+e(a,++t,r))&&(s+=a)}return s}const lt=!1,ot=!0,it=!1;async function ft({params:r,fetch:e}){var z,p,D,j,g,c,k;const{lang:s,query:t,slug:a}=r,n=Je[s];if(!n)return me(404,"Not found");const o=`${`${de}/assets/tiktok/${n.code}`}/clusters_${n.code}.csv`,{data:x,error:d}=await De({key:`tiktok-${n.code}-data`,url:o,type:"text"},e);if(!x||d)return console.error("error",d),me(404,"Not found");let i=[];const $=Ie(x),_=(z=$==null?void 0:$.filter)==null?void 0:z.call($,M=>(M==null?void 0:M.querySlug)===t&&(M==null?void 0:M.cluster)===a),B={label:(p=_[0])==null?void 0:p.clusterLabel,slug:(D=_[0])==null?void 0:D.cluster};if(i=(g=(j=_==null?void 0:_.map(M=>M.ids))==null?void 0:j.join("|"))==null?void 0:g.split("|"),!(i!=null&&i.length))return me(404,"Not found");const H=`${de}/assets/tiktok/videos.csv`,{data:K,error:h}=await De({key:"tiktok-videos",url:H,type:"text"},e);return!K||h?(console.error("error",h),me(404,"Not found")):{videos:(k=(c=Ie(K))==null?void 0:c.filter)==null?void 0:k.call(c,M=>i.includes(M.id)),cluster:B,lang:s,query:t}}const jt=Object.freeze(Object.defineProperty({__proto__:null,csr:ot,load:ft,prerender:lt,ssr:it},Symbol.toStringTag,{value:"Module"}));function ct(r){let e,s,t='<path d="M0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7ZM5.14883 4.02227C4.94102 4.13711 4.8125 4.35859 4.8125 4.59375V9.40625C4.8125 9.64414 4.94102 9.86289 5.14883 9.97773C5.35664 10.0926 5.6082 10.0898 5.81328 9.96406L9.75078 7.55781C9.94492 7.4375 10.0652 7.22695 10.0652 6.99727C10.0652 6.76758 9.94492 6.55703 9.75078 6.43672L5.81328 4.03047C5.61094 3.90742 5.35664 3.90195 5.14883 4.0168V4.02227Z" fill="currentColor"/>',a=[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},r[0]],n={};for(let l=0;l<a.length;l+=1)n=ae(n,a[l]);return{c(){e=Pe("svg"),s=new je(!0),this.h()},l(l){e=Ue(l,"svg",{viewBox:!0,fill:!0,xmlns:!0});var o=C(e);s=Ze(o,!0),o.forEach(m),this.h()},h(){s.a=null,pe(e,n)},m(l,o){Q(l,e,o),s.m(t,e)},p(l,[o]){pe(e,n=Re(a,[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},o&1&&l[0]]))},i:Y,o:Y,d(l){l&&m(e)}}}function ut(r,e,s){return r.$$set=t=>{s(0,e=ae(ae({},e),ge(t)))},e=ge(e),[e]}class $t extends oe{constructor(e){super(),ie(this,e,ut,ct,le,{})}}function mt(r){let e,s,t='<path d="M10.2834 0.0293723C11.1366 0.191858 11.6911 0.982412 11.5205 1.79484L11.445 2.15106C11.2711 2.98536 10.9495 3.77904 10.5 4.50085H15.225C16.0945 4.50085 16.8 5.17266 16.8 6.00071C16.8 6.57879 16.4555 7.08187 15.9502 7.33185C16.3078 7.60682 16.5375 8.02866 16.5375 8.50049C16.5375 9.23168 15.9863 9.841 15.2611 9.97223C15.4055 10.2003 15.4875 10.4659 15.4875 10.7503C15.4875 11.4159 15.0314 11.9814 14.4014 12.1752C14.4244 12.2783 14.4375 12.3876 14.4375 12.5001C14.4375 13.3282 13.732 14 12.8625 14H9.66328C9.03984 14 8.43281 13.825 7.91438 13.4969L6.65109 12.6939C5.775 12.1377 5.25 11.2002 5.25 10.1972V9.00045V7.50058V6.72252C5.25 5.81011 5.68641 4.95081 6.43125 4.37898L6.67406 4.19462C7.54359 3.53218 8.1375 2.60102 8.35406 1.56361L8.42953 1.20739C8.60016 0.394965 9.43031 -0.133113 10.2834 0.0293723ZM1.05 5.0008H3.15C3.73078 5.0008 4.2 5.44764 4.2 6.00071V13.0001C4.2 13.5532 3.73078 14 3.15 14H1.05C0.469219 14 0 13.5532 0 13.0001V6.00071C0 5.44764 0.469219 5.0008 1.05 5.0008Z" fill="currentColor"/>',a=[{viewBox:"0 0 17 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},r[0]],n={};for(let l=0;l<a.length;l+=1)n=ae(n,a[l]);return{c(){e=Pe("svg"),s=new je(!0),this.h()},l(l){e=Ue(l,"svg",{viewBox:!0,fill:!0,xmlns:!0});var o=C(e);s=Ze(o,!0),o.forEach(m),this.h()},h(){s.a=null,pe(e,n)},m(l,o){Q(l,e,o),s.m(t,e)},p(l,[o]){pe(e,n=Re(a,[{viewBox:"0 0 17 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},o&1&&l[0]]))},i:Y,o:Y,d(l){l&&m(e)}}}function dt(r,e,s){return r.$$set=t=>{s(0,e=ae(ae({},e),ge(t)))},e=ge(e),[e]}class gt extends oe{constructor(e){super(),ie(this,e,dt,mt,le,{})}}function pt(r){let e,s;return e=new Ke({props:{width:"24"}}),{c(){y(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){L(e,t,a),s=!0},p:Y,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function vt(r){let e,s,t,a,n,l,o;a=new be({props:{fn:r[0],$$slots:{default:[pt]},$$scope:{ctx:r}}});const x=r[1].default,d=Fe(x,r,r[2],null);return{c(){e=E("div"),s=E("div"),t=E("div"),y(a.$$.fragment),n=N(),d&&d.c(),this.h()},l(i){e=V(i,"DIV",{class:!0});var $=C(e);s=V($,"DIV",{class:!0});var _=C(s);t=V(_,"DIV",{class:!0});var B=C(t);q(a.$$.fragment,B),B.forEach(m),n=S(_),d&&d.l(_),_.forEach(m),$.forEach(m),this.h()},h(){v(t,"class","close svelte-s65neq"),v(s,"class","relative modal-content flex-center-center svelte-s65neq"),v(e,"class","modal flex-center-center svelte-s65neq")},m(i,$){Q(i,e,$),u(e,s),u(s,t),L(a,t,null),u(s,n),d&&d.m(s,null),o=!0},p(i,[$]){const _={};$&1&&(_.fn=i[0]),$&4&&(_.$$scope={dirty:$,ctx:i}),a.$set(_),d&&d.p&&(!o||$&4)&&We(d,x,i,i[2],o?Ye(x,i[2],$,null):Xe(i[2]),null)},i(i){o||(w(a.$$.fragment,i),w(d,i),i&&et(()=>{o&&(l||(l=ye(e,He,{duration:300},!0)),l.run(1))}),o=!0)},o(i){b(a.$$.fragment,i),b(d,i),i&&(l||(l=ye(e,He,{duration:300},!1)),l.run(0)),o=!1},d(i){i&&m(e),T(a),d&&d.d(i),i&&l&&l.end()}}}function _t(r,e,s){let{$$slots:t={},$$scope:a}=e,{fn:n=()=>{}}=e;return r.$$set=l=>{"fn"in l&&s(0,n=l.fn),"$$scope"in l&&s(2,a=l.$$scope)},[n,t,a]}class ht extends oe{constructor(e){super(),ie(this,e,_t,vt,le,{fn:0})}}function Se(r){let e,s;return e=new ht({props:{fn:r[3],$$slots:{default:[wt]},$$scope:{ctx:r}}}),{c(){y(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){L(e,t,a),s=!0},p(t,a){const n={};a&2&&(n.fn=t[3]),a&17&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function wt(r){let e,s,t,a,n=r[0].username+"",l,o,x,d,i,$=r[0].video_description+"",_,B,H,K,h,Z="",z;return{c(){e=E("blockquote"),s=E("section"),t=E("a"),a=we("@"),l=we(n),d=N(),i=E("p"),_=we($),K=N(),h=E("script"),h.innerHTML=Z,this.h()},l(p){e=V(p,"BLOCKQUOTE",{class:!0,cite:!0,"data-video-id":!0,"data-embed-from":!0,style:!0});var D=C(e);s=V(D,"SECTION",{});var j=C(s);t=V(j,"A",{target:!0,title:!0,href:!0});var g=C(t);a=ke(g,"@"),l=ke(g,n),g.forEach(m),d=S(j),i=V(j,"P",{});var c=C(i);_=ke(c,$),c.forEach(m),j.forEach(m),D.forEach(m),K=S(p),h=V(p,"SCRIPT",{src:!0,"data-svelte-h":!0}),nt(h)!=="svelte-lbz9tt"&&(h.innerHTML=Z),this.h()},h(){v(t,"target","_blank"),v(t,"title",o="@"+r[0].username),v(t,"href",x="https://www.tiktok.com/@"+r[0].username+"?refer=embed"),v(e,"class","tiktok-embed"),v(e,"cite",B=r[0].link),v(e,"data-video-id",H=r[0].id),v(e,"data-embed-from","embed_page"),Le(e,"max-width","325px"),Le(e,"min-width","325px"),h.async=!0,tt(h.src,z="https://www.tiktok.com/embed.js")||v(h,"src",z)},m(p,D){Q(p,e,D),u(e,s),u(s,t),u(t,a),u(t,l),u(s,d),u(s,i),u(i,_),Q(p,K,D),Q(p,h,D)},p(p,D){D&1&&n!==(n=p[0].username+"")&&Te(l,n),D&1&&o!==(o="@"+p[0].username)&&v(t,"title",o),D&1&&x!==(x="https://www.tiktok.com/@"+p[0].username+"?refer=embed")&&v(t,"href",x),D&1&&$!==($=p[0].video_description+"")&&Te(_,$),D&1&&B!==(B=p[0].link)&&v(e,"cite",B),D&1&&H!==(H=p[0].id)&&v(e,"data-video-id",H)},d(p){p&&(m(e),m(K),m(h))}}}function kt(r){let e,s,t,a,n,l,o,x,d,i,$,_,B,H,K,h,Z,z,p,D,j;t=new at({props:{src:de+"/assets/tiktok/thumbs/"+r[0].id+".webp",alt:r[0].title}}),n=new G({props:{tag:"p",typo:"p",content:r[0].video_description,class:"max-lines mb-xs"}}),d=new $t({props:{width:"14"}}),$=new G({props:{tag:"p",typo:"p",content:r[0].view_count}}),H=new gt({props:{width:"14"}}),h=new G({props:{tag:"p",typo:"p",content:r[0].like_count}});let g=r[1]&&Se(r);return{c(){e=E("button"),s=E("div"),y(t.$$.fragment),a=N(),y(n.$$.fragment),l=N(),o=E("div"),x=E("div"),y(d.$$.fragment),i=N(),y($.$$.fragment),_=N(),B=E("div"),y(H.$$.fragment),K=N(),y(h.$$.fragment),Z=N(),g&&g.c(),z=qe(),this.h()},l(c){e=V(c,"BUTTON",{class:!0});var k=C(e);s=V(k,"DIV",{class:!0});var M=C(s);q(t.$$.fragment,M),M.forEach(m),a=S(k),q(n.$$.fragment,k),l=S(k),o=V(k,"DIV",{class:!0});var A=C(o);x=V(A,"DIV",{class:!0});var R=C(x);q(d.$$.fragment,R),i=S(R),q($.$$.fragment,R),R.forEach(m),_=S(A),B=V(A,"DIV",{class:!0});var J=C(B);q(H.$$.fragment,J),K=S(J),q(h.$$.fragment,J),J.forEach(m),A.forEach(m),k.forEach(m),Z=S(c),g&&g.l(c),z=qe(),this.h()},h(){v(s,"class","img svelte-ymgh9g"),v(x,"class","flex gap-xs"),v(B,"class","flex gap-xs"),v(o,"class","grid-3-xs"),v(e,"class","thumb p-s flex-col-start-stretch gap-s text-left svelte-ymgh9g")},m(c,k){Q(c,e,k),u(e,s),L(t,s,null),u(e,a),L(n,e,null),u(e,l),u(e,o),u(o,x),L(d,x,null),u(x,i),L($,x,null),u(o,_),u(o,B),L(H,B,null),u(B,K),L(h,B,null),Q(c,Z,k),g&&g.m(c,k),Q(c,z,k),p=!0,D||(j=st(e,"click",r[2]),D=!0)},p(c,[k]){const M={};k&1&&(M.src=de+"/assets/tiktok/thumbs/"+c[0].id+".webp"),k&1&&(M.alt=c[0].title),t.$set(M);const A={};k&1&&(A.content=c[0].video_description),n.$set(A);const R={};k&1&&(R.content=c[0].view_count),$.$set(R);const J={};k&1&&(J.content=c[0].like_count),h.$set(J),c[1]?g?(g.p(c,k),k&2&&w(g,1)):(g=Se(c),g.c(),w(g,1),g.m(z.parentNode,z)):g&&(ze(),b(g,1,1,()=>{g=null}),Ae())},i(c){p||(w(t.$$.fragment,c),w(n.$$.fragment,c),w(d.$$.fragment,c),w($.$$.fragment,c),w(H.$$.fragment,c),w(h.$$.fragment,c),w(g),p=!0)},o(c){b(t.$$.fragment,c),b(n.$$.fragment,c),b(d.$$.fragment,c),b($.$$.fragment,c),b(H.$$.fragment,c),b(h.$$.fragment,c),b(g),p=!1},d(c){c&&(m(e),m(Z),m(z)),T(t),T(n),T(d),T($),T(H),T(h),g&&g.d(c),D=!1,j()}}}function bt(r,e,s){let{video:t={}}=e,a=!1;const n=()=>s(1,a=!0),l=()=>s(1,a=!1);return r.$$set=o=>{"video"in o&&s(0,t=o.video)},[t,a,n,l]}class xt extends oe{constructor(e){super(),ie(this,e,bt,kt,le,{video:0})}}function Me(r,e,s){const t=r.slice();return t[7]=e[s],t}function Ct(r){let e,s,t,a;return e=new G({props:{typo:"1",content:"download data"}}),t=new Qe({props:{width:"8"}}),{c(){y(e.$$.fragment),s=N(),y(t.$$.fragment)},l(n){q(e.$$.fragment,n),s=S(n),q(t.$$.fragment,n)},m(n,l){L(e,n,l),Q(n,s,l),L(t,n,l),a=!0},p:Y,i(n){a||(w(e.$$.fragment,n),w(t.$$.fragment,n),a=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),a=!1},d(n){n&&m(s),T(e,n),T(t,n)}}}function Et(r){let e,s;return e=new Ke({props:{width:"26"}}),{c(){y(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){L(e,t,a),s=!0},p:Y,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Oe(r){let e,s;return e=new xt({props:{video:r[7]}}),{c(){y(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){L(e,t,a),s=!0},p:Y,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function Vt(r){var xe;let e,s,t,a,n,l,o,x,d,i,$,_,B,H,K,h,Z,z,p,D,j,g,c,k,M,A,R,J,W,ve,ne,X,_e,re,ee,fe;n=new G({props:{content:"Topic",typo:"label",class:"case-upper"}}),o=new G({props:{tag:"h3",typo:"h3",content:r[1].label,ellipsis:!0}}),_=new G({props:{content:"Tiktoks",typo:"label",class:"case-upper"}}),H=new G({props:{tag:"h3",typo:"h3",content:(xe=r[0])==null?void 0:xe.length}}),Z=new G({props:{content:"Total Plays",typo:"label",class:"case-upper"}}),p=new G({props:{tag:"h3",typo:"h3",content:r[4]}}),g=new G({props:{content:"Total Likes",typo:"label",class:"case-upper"}}),k=new G({props:{tag:"h3",typo:"h3",content:r[5]}}),R=new G({props:{content:"Resources",typo:"label",class:"case-upper pb-xxs"}}),W=new be({props:{theme:"download",class:"flex gap-xxs items-center",$$slots:{default:[Ct]},$$scope:{ctx:r}}}),X=new be({props:{url:"/tiktok/?lang="+r[3]+"&query="+r[2],class:"flex-center-center",$$slots:{default:[Et]},$$scope:{ctx:r}}});let te=Be(r[0]),I=[];for(let f=0;f<te.length;f+=1)I[f]=Oe(Me(r,te,f));const Ge=f=>b(I[f],1,1,()=>{I[f]=null});return{c(){e=E("div"),s=E("div"),t=E("div"),a=E("div"),y(n.$$.fragment),l=N(),y(o.$$.fragment),x=N(),d=E("div"),i=N(),$=E("div"),y(_.$$.fragment),B=N(),y(H.$$.fragment),K=N(),h=E("div"),y(Z.$$.fragment),z=N(),y(p.$$.fragment),D=N(),j=E("div"),y(g.$$.fragment),c=N(),y(k.$$.fragment),M=N(),A=E("div"),y(R.$$.fragment),J=N(),y(W.$$.fragment),ve=N(),ne=E("div"),y(X.$$.fragment),_e=N(),re=E("div"),ee=E("div");for(let f=0;f<I.length;f+=1)I[f].c();this.h()},l(f){e=V(f,"DIV",{class:!0});var O=C(e);s=V(O,"DIV",{class:!0});var F=C(s);t=V(F,"DIV",{class:!0});var U=C(t);a=V(U,"DIV",{class:!0});var P=C(a);q(n.$$.fragment,P),l=S(P),q(o.$$.fragment,P),P.forEach(m),x=S(U),d=V(U,"DIV",{class:!0}),C(d).forEach(m),i=S(U),$=V(U,"DIV",{class:!0});var se=C($);q(_.$$.fragment,se),B=S(se),q(H.$$.fragment,se),se.forEach(m),K=S(U),h=V(U,"DIV",{class:!0});var ce=C(h);q(Z.$$.fragment,ce),z=S(ce),q(p.$$.fragment,ce),ce.forEach(m),D=S(U),j=V(U,"DIV",{class:!0});var ue=C(j);q(g.$$.fragment,ue),c=S(ue),q(k.$$.fragment,ue),ue.forEach(m),M=S(U),A=V(U,"DIV",{class:!0});var $e=C(A);q(R.$$.fragment,$e),J=S($e),q(W.$$.fragment,$e),$e.forEach(m),ve=S(U),ne=V(U,"DIV",{class:!0});var Ce=C(ne);q(X.$$.fragment,Ce),Ce.forEach(m),U.forEach(m),F.forEach(m),_e=S(O),re=V(O,"DIV",{class:!0});var Ee=C(re);ee=V(Ee,"DIV",{class:!0});var Ve=C(ee);for(let he=0;he<I.length;he+=1)I[he].l(Ve);Ve.forEach(m),Ee.forEach(m),O.forEach(m),this.h()},h(){v(a,"class","title col-[span-3] py-s px-s svelte-1r21eyn"),v(d,"class","line col-[span-4] xl:hidden svelte-1r21eyn"),v($,"class","col-[span-2] xl:col-6 py-s px-s xl:px-0"),v(h,"class","col-[span-2] xl:col-[7/span-2] py-s px-s xl:px-0"),v(j,"class","col-[span-2] xl:col-9 py-s px-s xl:px-0"),v(A,"class","col-[span-2] xl:col-[10/span-2] py-s px-s xl:px-0"),v(ne,"class","col-4 xl:col-12 self-center justify-self-end px-s"),v(t,"class","content grid-4-0 xl:grid-12-gap svelte-1r21eyn"),v(s,"class","navbar svelte-1r21eyn"),v(ee,"class","p-s grid-1-s s:grid-2-s l:grid-3-s l:grid-4-s xl:grid-5-s xxl:grid-6-s"),v(re,"class","container"),v(e,"class","page")},m(f,O){Q(f,e,O),u(e,s),u(s,t),u(t,a),L(n,a,null),u(a,l),L(o,a,null),u(t,x),u(t,d),u(t,i),u(t,$),L(_,$,null),u($,B),L(H,$,null),u(t,K),u(t,h),L(Z,h,null),u(h,z),L(p,h,null),u(t,D),u(t,j),L(g,j,null),u(j,c),L(k,j,null),u(t,M),u(t,A),L(R,A,null),u(A,J),L(W,A,null),u(t,ve),u(t,ne),L(X,ne,null),u(e,_e),u(e,re),u(re,ee);for(let F=0;F<I.length;F+=1)I[F]&&I[F].m(ee,null);fe=!0},p(f,[O]){const F={};O&1024&&(F.$$scope={dirty:O,ctx:f}),W.$set(F);const U={};if(O&1024&&(U.$$scope={dirty:O,ctx:f}),X.$set(U),O&1){te=Be(f[0]);let P;for(P=0;P<te.length;P+=1){const se=Me(f,te,P);I[P]?(I[P].p(se,O),w(I[P],1)):(I[P]=Oe(se),I[P].c(),w(I[P],1),I[P].m(ee,null))}for(ze(),P=te.length;P<I.length;P+=1)Ge(P);Ae()}},i(f){if(!fe){w(n.$$.fragment,f),w(o.$$.fragment,f),w(_.$$.fragment,f),w(H.$$.fragment,f),w(Z.$$.fragment,f),w(p.$$.fragment,f),w(g.$$.fragment,f),w(k.$$.fragment,f),w(R.$$.fragment,f),w(W.$$.fragment,f),w(X.$$.fragment,f);for(let O=0;O<te.length;O+=1)w(I[O]);fe=!0}},o(f){b(n.$$.fragment,f),b(o.$$.fragment,f),b(_.$$.fragment,f),b(H.$$.fragment,f),b(Z.$$.fragment,f),b(p.$$.fragment,f),b(g.$$.fragment,f),b(k.$$.fragment,f),b(R.$$.fragment,f),b(W.$$.fragment,f),b(X.$$.fragment,f),I=I.filter(Boolean);for(let O=0;O<I.length;O+=1)b(I[O]);fe=!1},d(f){f&&m(e),T(n),T(o),T(_),T(H),T(Z),T(p),T(g),T(k),T(R),T(W),T(X),rt(I,f)}}}function Dt(r,e,s){let{data:t}=e;const{videos:a,cluster:n,query:l,lang:o}=t,x=Number(Ne(a,i=>i.view_count)).toLocaleString(),d=Number(Ne(a,i=>i.like_count)).toLocaleString();return r.$$set=i=>{"data"in i&&s(6,t=i.data)},[a,n,l,o,x,d,t]}class Ut extends oe{constructor(e){super(),ie(this,e,Dt,Vt,le,{data:6})}}export{Ut as component,jt as universal};
