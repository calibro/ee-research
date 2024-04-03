import{g as Qe,c as ze}from"../chunks/download.cGC7sJ1C.js";import"../chunks/index.CzR0xuCU.js";import{b as qe}from"../chunks/paths.CJFN_glQ.js";import{s as ue,y as Ce,z as Ye,H as et,A as tt,b as E,B as st,f as b,C as Se,i as R,n as G,D as Be,e as I,a as M,c as D,g as T,p as y,h as $,w as ie,a9 as nt,v as rt,x as Ze,V as Fe,k as Je,F as He,U as lt,M as at,aa as ot,a8 as We}from"../chunks/scheduler.Q8VTVPGx.js";import{S as ge,i as me,c as x,b as V,m as L,t as k,a as q,d as C,g as he,e as $e}from"../chunks/index.BzUwEaKY.js";import{e as fe,u as ct,o as it}from"../chunks/each.DtfOkQZr.js";import{l as ft,c as ut}from"../chunks/lockscroll.CRhFNHFi.js";import{L as gt,S as mt,q as dt,g as pt,a as ht,b as $t}from"../chunks/index.CGFytsXH.js";import{n as _t}from"../chunks/stores.B2PgHhdQ.js";import{g as vt}from"../chunks/spread.CN4WR7uZ.js";import{T as O}from"../chunks/text.CSSh2ltr.js";import{L as Xe}from"../chunks/link.BHJd-Vzt.js";import{C as wt}from"../chunks/close.ByqdTTeY.js";const bt=!1,yt=!0,kt=!1;async function qt({params:l,fetch:e}){const s=`${qe}/assets/gettyimages/queries.csv`,{data:t,error:n}=await Qe({key:"gettyimages-queries",url:s,type:"text"},e);if(!t||n)return console.error("error",n),n(404,"Not found");const f=ze(t);return f.sort((r,u)=>r.queryLabel.localeCompare(u.queryLabel)),{queries:f}}const as=Object.freeze(Object.defineProperty({__proto__:null,csr:yt,load:qt,prerender:bt,ssr:kt},Symbol.toStringTag,{value:"Module"}));function It(l){let e,s,t='<path d="M31.8536 21.3536C32.0488 21.1583 32.0488 20.8417 31.8536 20.6464L28.6716 17.4645C28.4763 17.2692 28.1597 17.2692 27.9645 17.4645C27.7692 17.6597 27.7692 17.9763 27.9645 18.1716L30.7929 21L27.9645 23.8284C27.7692 24.0237 27.7692 24.3403 27.9645 24.5355C28.1597 24.7308 28.4763 24.7308 28.6716 24.5355L31.8536 21.3536ZM10.5 21.5L31.5 21.5L31.5 20.5L10.5 20.5L10.5 21.5Z" fill="black"/><circle cx="21" cy="21" r="20.5" stroke="black"/>',n=[{viewBox:"0 0 42 42"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l[0]],f={};for(let r=0;r<n.length;r+=1)f=Ce(f,n[r]);return{c(){e=Ye("svg"),s=new et(!0),this.h()},l(r){e=tt(r,"svg",{viewBox:!0,fill:!0,xmlns:!0});var u=E(e);s=st(u,!0),u.forEach(b),this.h()},h(){s.a=null,Se(e,f)},m(r,u){R(r,e,u),s.m(t,e)},p(r,[u]){Se(e,f=vt(n,[{viewBox:"0 0 42 42"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},u&1&&r[0]]))},i:G,o:G,d(r){r&&b(e)}}}function Dt(l,e,s){return l.$$set=t=>{s(0,e=Ce(Ce({},e),Be(t)))},e=Be(e),[e]}class Et extends ge{constructor(e){super(),me(this,e,Dt,It,ue,{})}}function xt(l){let e,s;return e=new Et({props:{width:"26"}}),{c(){x(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){L(e,t,n),s=!0},p:G,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Vt(l){var p;let e,s,t,n,f,r,u,o,a,_,m,h,d,c,i;return n=new O({props:{typo:"label",content:"Title",class:"case-upper"}}),r=new O({props:{typo:"h3",content:l[0].title}}),_=new O({props:{typo:"label",content:"Domain",class:"case-upper"}}),h=new O({props:{typo:"h3",content:(p=l[0].host)==null?void 0:p.replace("www.","")}}),c=new Xe({props:{url:l[0].link,class:"col-[span-12] xl:col-[span-1] flex-center-center",external:!0,$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){e=I("div"),s=I("div"),t=I("div"),x(n.$$.fragment),f=M(),x(r.$$.fragment),u=M(),o=I("div"),a=I("div"),x(_.$$.fragment),m=M(),x(h.$$.fragment),d=M(),x(c.$$.fragment),this.h()},l(g){e=D(g,"DIV",{class:!0});var w=E(e);s=D(w,"DIV",{class:!0});var N=E(s);t=D(N,"DIV",{});var A=E(t);V(n.$$.fragment,A),f=T(A),V(r.$$.fragment,A),A.forEach(b),N.forEach(b),u=T(w),o=D(w,"DIV",{class:!0});var B=E(o);a=D(B,"DIV",{});var H=E(a);V(_.$$.fragment,H),m=T(H),V(h.$$.fragment,H),H.forEach(b),B.forEach(b),d=T(w),V(c.$$.fragment,w),w.forEach(b),this.h()},h(){y(s,"class","col-[span-12] xl:col-[span-7] pb-s xl:pb-0"),y(o,"class","col-[span-12] xl:col-[span-4] pb-s xl:pb-0"),y(e,"class","getty grid-12-gap p-s svelte-1fqo2ur")},m(g,w){R(g,e,w),$(e,s),$(s,t),L(n,t,null),$(t,f),L(r,t,null),$(e,u),$(e,o),$(o,a),L(_,a,null),$(a,m),L(h,a,null),$(e,d),L(c,e,null),i=!0},p(g,[w]){var H;const N={};w&1&&(N.content=g[0].title),r.$set(N);const A={};w&1&&(A.content=(H=g[0].host)==null?void 0:H.replace("www.","")),h.$set(A);const B={};w&1&&(B.url=g[0].link),w&2&&(B.$$scope={dirty:w,ctx:g}),c.$set(B)},i(g){i||(k(n.$$.fragment,g),k(r.$$.fragment,g),k(_.$$.fragment,g),k(h.$$.fragment,g),k(c.$$.fragment,g),i=!0)},o(g){q(n.$$.fragment,g),q(r.$$.fragment,g),q(_.$$.fragment,g),q(h.$$.fragment,g),q(c.$$.fragment,g),i=!1},d(g){g&&b(e),C(n),C(r),C(_),C(h),C(c)}}}function Lt(l,e,s){let{data:t}=e;return l.$$set=n=>{"data"in n&&s(0,t=n.data)},[t]}let Ct=class extends ge{constructor(e){super(),me(this,e,Lt,Vt,ue,{data:0})}};function Mt(l){let e,s;return e=new wt({props:{width:"26"}}),{c(){x(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){L(e,t,n),s=!0},p:G,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Tt(l){var Me,Te;let e,s,t,n,f,r,u,o,a,_,m,h,d,c,i,p,g,w,N,A,B,H,Ie,K,De,X,ae,Q,_e,P,oe,U,ve,Ee,z,Z,Y,xe,F,Ve,J,ee,Le,W,ce;return f=new O({props:{content:"Query",typo:"label",class:"case-upper"}}),u=new O({props:{tag:"h3",typo:"h3",content:l[0][0].clusterLabel,ellipsis:!0}}),_=new O({props:{content:"Image",typo:"label",class:"case-upper"}}),g=new O({props:{content:"Rank",typo:"label",class:"case-upper"}}),N=new O({props:{content:l[1]}}),H=new O({props:{content:"Results",typo:"label",class:"case-upper"}}),K=new O({props:{content:(Me=l[0])==null?void 0:Me.length}}),Q=new Xe({props:{fn:l[2],class:"p-xs",$$slots:{default:[Mt]},$$scope:{ctx:l}}}),Y=new O({props:{content:"Rank",typo:"label",class:"case-upper"}}),F=new O({props:{content:l[1]}}),ee=new O({props:{content:"Results",typo:"label",class:"case-upper"}}),W=new O({props:{content:(Te=l[0])==null?void 0:Te.length}}),{c(){e=I("div"),s=I("div"),t=I("div"),n=I("div"),x(f.$$.fragment),r=M(),x(u.$$.fragment),o=M(),a=I("div"),x(_.$$.fragment),m=M(),h=I("div"),d=I("img"),i=M(),p=I("div"),x(g.$$.fragment),w=M(),x(N.$$.fragment),A=M(),B=I("div"),x(H.$$.fragment),Ie=M(),x(K.$$.fragment),De=M(),X=I("div"),ae=I("div"),x(Q.$$.fragment),_e=M(),P=I("div"),oe=I("div"),U=I("img"),Ee=M(),z=I("div"),Z=I("div"),x(Y.$$.fragment),xe=M(),x(F.$$.fragment),Ve=M(),J=I("div"),x(ee.$$.fragment),Le=M(),x(W.$$.fragment),this.h()},l(v){e=D(v,"DIV",{class:!0});var S=E(e);s=D(S,"DIV",{class:!0});var j=E(s);t=D(j,"DIV",{class:!0});var te=E(t);n=D(te,"DIV",{class:!0});var se=E(n);V(f.$$.fragment,se),r=T(se),V(u.$$.fragment,se),se.forEach(b),o=T(te),a=D(te,"DIV",{class:!0});var ne=E(a);V(_.$$.fragment,ne),m=T(ne),h=D(ne,"DIV",{class:!0});var de=E(h);d=D(de,"IMG",{src:!0,alt:!0,class:!0}),de.forEach(b),ne.forEach(b),te.forEach(b),i=T(j),p=D(j,"DIV",{class:!0});var re=E(p);V(g.$$.fragment,re),w=T(re),V(N.$$.fragment,re),re.forEach(b),A=T(j),B=D(j,"DIV",{class:!0});var le=E(B);V(H.$$.fragment,le),Ie=T(le),V(K.$$.fragment,le),le.forEach(b),De=T(j),X=D(j,"DIV",{class:!0,role:!0});var pe=E(X);ae=D(pe,"DIV",{class:!0});var Ne=E(ae);V(Q.$$.fragment,Ne),Ne.forEach(b),pe.forEach(b),j.forEach(b),S.forEach(b),_e=T(v),P=D(v,"DIV",{class:!0});var we=E(P);oe=D(we,"DIV",{class:!0});var Oe=E(oe);U=D(Oe,"IMG",{src:!0,alt:!0,class:!0}),Oe.forEach(b),Ee=T(we),z=D(we,"DIV",{class:!0});var be=E(z);Z=D(be,"DIV",{class:!0});var ye=E(Z);V(Y.$$.fragment,ye),xe=T(ye),V(F.$$.fragment,ye),ye.forEach(b),Ve=T(be),J=D(be,"DIV",{class:!0});var ke=E(J);V(ee.$$.fragment,ke),Le=T(ke),V(W.$$.fragment,ke),ke.forEach(b),be.forEach(b),we.forEach(b),this.h()},h(){y(n,"class","xl:col-[span-3]"),ie(d.src,c=l[3](l[0][0].image_id))||y(d,"src",c),y(d,"alt",""),y(d,"class","svelte-1umfua"),y(h,"class","img ratio-[4/3] svelte-1umfua"),y(a,"class","hidden xl:block xl:col-[span-2]"),y(t,"class","title xl:col-[span-5] py-s px-s xl:grid-5-gap svelte-1umfua"),y(p,"class","hidden xl:block xl:col-[8/span-2] py-s px-s xl:px-0"),y(B,"class","hidden xl:block xl:col-[10/span-2] py-s px-s xl:px-0"),y(ae,"class","flex-end p-s"),y(X,"class","close xl:col-12"),y(X,"role","button"),y(s,"class","content grid-2-0 auto-flow-dense xl:grid-12-gap"),y(e,"class","navbar bg-white sticky top-0 svelte-1umfua"),ie(U.src,ve=l[3](l[0][0].image_id))||y(U,"src",ve),y(U,"alt",""),y(U,"class","svelte-1umfua"),y(oe,"class","img ratio-[16/9] svelte-1umfua"),y(Z,"class","col-[span-2]"),y(J,"class","col-[span-2]"),y(z,"class","grid-4-0 p-s info svelte-1umfua"),y(P,"class","xl:hidden")},m(v,S){R(v,e,S),$(e,s),$(s,t),$(t,n),L(f,n,null),$(n,r),L(u,n,null),$(t,o),$(t,a),L(_,a,null),$(a,m),$(a,h),$(h,d),$(s,i),$(s,p),L(g,p,null),$(p,w),L(N,p,null),$(s,A),$(s,B),L(H,B,null),$(B,Ie),L(K,B,null),$(s,De),$(s,X),$(X,ae),L(Q,ae,null),R(v,_e,S),R(v,P,S),$(P,oe),$(oe,U),$(P,Ee),$(P,z),$(z,Z),L(Y,Z,null),$(Z,xe),L(F,Z,null),$(z,Ve),$(z,J),L(ee,J,null),$(J,Le),L(W,J,null),ce=!0},p(v,[S]){var le,pe;const j={};S&1&&(j.content=v[0][0].clusterLabel),u.$set(j),(!ce||S&1&&!ie(d.src,c=v[3](v[0][0].image_id)))&&y(d,"src",c);const te={};S&2&&(te.content=v[1]),N.$set(te);const se={};S&1&&(se.content=(le=v[0])==null?void 0:le.length),K.$set(se);const ne={};S&64&&(ne.$$scope={dirty:S,ctx:v}),Q.$set(ne),(!ce||S&1&&!ie(U.src,ve=v[3](v[0][0].image_id)))&&y(U,"src",ve);const de={};S&2&&(de.content=v[1]),F.$set(de);const re={};S&1&&(re.content=(pe=v[0])==null?void 0:pe.length),W.$set(re)},i(v){ce||(k(f.$$.fragment,v),k(u.$$.fragment,v),k(_.$$.fragment,v),k(g.$$.fragment,v),k(N.$$.fragment,v),k(H.$$.fragment,v),k(K.$$.fragment,v),k(Q.$$.fragment,v),k(Y.$$.fragment,v),k(F.$$.fragment,v),k(ee.$$.fragment,v),k(W.$$.fragment,v),ce=!0)},o(v){q(f.$$.fragment,v),q(u.$$.fragment,v),q(_.$$.fragment,v),q(g.$$.fragment,v),q(N.$$.fragment,v),q(H.$$.fragment,v),q(K.$$.fragment,v),q(Q.$$.fragment,v),q(Y.$$.fragment,v),q(F.$$.fragment,v),q(ee.$$.fragment,v),q(W.$$.fragment,v),ce=!1},d(v){v&&(b(e),b(_e),b(P)),C(f),C(u),C(_),C(g),C(N),C(H),C(K),C(Q),C(Y),C(F),C(ee),C(W)}}}function Nt(l,e,s){const t=nt();let{cluster:n,rank:f,query:r}=e;const u=()=>{t("close")},o=a=>`${qe}/assets/gettyimages/${r}/images/${a}.jpg`;return l.$$set=a=>{"cluster"in a&&s(0,n=a.cluster),"rank"in a&&s(1,f=a.rank),"query"in a&&s(4,r=a.query)},[n,f,u,o,r]}class Ot extends ge{constructor(e){super(),me(this,e,Nt,Tt,ue,{cluster:0,rank:1,query:4})}}function Re(l,e,s){const t=l.slice();return t[7]=e[s],t[9]=s,t}function Ae(l){let e,s;return e=new Ct({props:{data:l[7]}}),{c(){x(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){L(e,t,n),s=!0},p:G,i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function St(l){let e,s,t,n,f,r,u;s=new Ot({props:{cluster:l[2],rank:l[3],query:l[0]}}),s.$on("close",function(){rt(l[1])&&l[1].apply(this,arguments)});let o=fe(l[2]),a=[];for(let m=0;m<o.length;m+=1)a[m]=Ae(Re(l,o,m));const _=m=>q(a[m],1,1,()=>{a[m]=null});return{c(){e=I("div"),x(s.$$.fragment),t=M(),n=I("div");for(let m=0;m<a.length;m+=1)a[m].c();this.h()},l(m){e=D(m,"DIV",{class:!0});var h=E(e);V(s.$$.fragment,h),t=T(h),n=D(h,"DIV",{class:!0});var d=E(n);for(let c=0;c<a.length;c+=1)a[c].l(d);d.forEach(b),h.forEach(b),this.h()},h(){y(n,"class","container p-s flex flex-col gap-s svelte-1lvxush"),y(e,"class","news svelte-1lvxush")},m(m,h){R(m,e,h),L(s,e,null),$(e,t),$(e,n);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(n,null);f=!0,r||(u=Ze(window,"keydown",l[4]),r=!0)},p(m,[h]){l=m;const d={};if(h&1&&(d.query=l[0]),s.$set(d),h&4){o=fe(l[2]);let c;for(c=0;c<o.length;c+=1){const i=Re(l,o,c);a[c]?(a[c].p(i,h),k(a[c],1)):(a[c]=Ae(i),a[c].c(),k(a[c],1),a[c].m(n,null))}for(he(),c=o.length;c<a.length;c+=1)_(c);$e()}},i(m){if(!f){k(s.$$.fragment,m);for(let h=0;h<o.length;h+=1)k(a[h]);f=!0}},o(m){q(s.$$.fragment,m),a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)q(a[h]);f=!1},d(m){m&&b(e),C(s),Fe(a,m),r=!1,u()}}}function Bt(l,e,s){let t;Je(l,_t,_=>s(6,t=_));let{query:n}=e,{news:f}=e,{close:r=()=>{}}=e;const{cluster:u,rank:o}=f,a=_=>{_.key==="Escape"&&r()};return l.$$set=_=>{"query"in _&&s(0,n=_.query),"news"in _&&s(5,f=_.news),"close"in _&&s(1,r=_.close)},l.$$.update=()=>{l.$$.dirty&66&&t&&r()},[n,r,u,o,a,f,t]}class Ht extends ge{constructor(e){super(),me(this,e,Bt,St,ue,{query:0,news:5,close:1})}}function je(l,e,s){const t=l.slice();return t[5]=e[s][0],t[6]=e[s][1],t[8]=s,t}function Ge(l,e){let s,t,n,f,r,u,o,a,_,m;n=new gt({props:{label:"RANK #"+(e[8]+1),typo:"label"}});function h(){return e[4](e[6],e[8])}return{key:l,first:null,c(){s=I("button"),t=I("div"),x(n.$$.fragment),f=M(),r=I("img"),o=M(),this.h()},l(d){s=D(d,"BUTTON",{class:!0});var c=E(s);t=D(c,"DIV",{class:!0});var i=E(t);V(n.$$.fragment,i),i.forEach(b),f=T(c),r=D(c,"IMG",{src:!0,alt:!0,class:!0}),o=T(c),c.forEach(b),this.h()},h(){y(t,"class","hidden m:block absolute top-0 left-0 p-xs xl:p-s"),ie(r.src,u=e[3](e[5]))||y(r,"src",u),y(r,"alt",""),y(r,"class","svelte-5ya1ec"),y(s,"class","img relative svelte-5ya1ec"),this.first=s},m(d,c){R(d,s,c),$(s,t),L(n,t,null),$(s,f),$(s,r),$(s,o),a=!0,_||(m=Ze(s,"click",h),_=!0)},p(d,c){e=d;const i={};c&1&&(i.label="RANK #"+(e[8]+1)),n.$set(i),(!a||c&1&&!ie(r.src,u=e[3](e[5])))&&y(r,"src",u)},i(d){a||(k(n.$$.fragment,d),a=!0)},o(d){q(n.$$.fragment,d),a=!1},d(d){d&&b(s),C(n),_=!1,m()}}}function Rt(l){let e,s,t,n,f,r,u,o,a=[],_=new Map,m;n=new O({props:{typo:"label",content:"Query",class:"case-upper"}}),r=new O({props:{typo:"h3",content:l[0][1][0][1][0].clusterLabel,class:"mb-xs"}});let h=fe(l[0][1]);const d=c=>`${c[5]}-${c[0][0]}-${c[1]}`;for(let c=0;c<h.length;c+=1){let i=je(l,h,c),p=d(i);_.set(p,a[c]=Ge(p,i))}return{c(){e=I("div"),s=I("div"),t=I("div"),x(n.$$.fragment),f=M(),x(r.$$.fragment),u=M(),o=I("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=D(c,"DIV",{class:!0});var i=E(e);s=D(i,"DIV",{class:!0});var p=E(s);t=D(p,"DIV",{});var g=E(t);V(n.$$.fragment,g),f=T(g),V(r.$$.fragment,g),g.forEach(b),p.forEach(b),u=T(i),o=D(i,"DIV",{class:!0});var w=E(o);for(let N=0;N<a.length;N+=1)a[N].l(w);w.forEach(b),i.forEach(b),this.h()},h(){y(s,"class","h-full overflow-hidden col-[span-9] xl:col-[span-2] flex-btw-start xl:flex-col-btw-start p-s"),y(o,"class","h-full overflow-hidden col-[span-9] xl:col-[span-7] grid-3-0"),y(e,"class","getty grid-9-gap svelte-5ya1ec")},m(c,i){R(c,e,i),$(e,s),$(s,t),L(n,t,null),$(t,f),L(r,t,null),$(e,u),$(e,o);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(o,null);m=!0},p(c,[i]){const p={};i&1&&(p.content=c[0][1][0][1][0].clusterLabel),r.$set(p),i&15&&(h=fe(c[0][1]),he(),a=ct(a,i,d,1,c,h,_,o,it,Ge,null,je),$e())},i(c){if(!m){k(n.$$.fragment,c),k(r.$$.fragment,c);for(let i=0;i<h.length;i+=1)k(a[i]);m=!0}},o(c){q(n.$$.fragment,c),q(r.$$.fragment,c);for(let i=0;i<a.length;i+=1)q(a[i]);m=!1},d(c){c&&b(e),C(n),C(r);for(let i=0;i<a.length;i+=1)a[i].d()}}}function At(l,e,s){let{cluster:t}=e,{query:n}=e,{open:f=(o,a)=>{}}=e;const r=o=>`${qe}/assets/gettyimages/${n}/images/${o}.jpg`,u=(o,a)=>f(o,a+1);return l.$$set=o=>{"cluster"in o&&s(0,t=o.cluster),"query"in o&&s(1,n=o.query),"open"in o&&s(2,f=o.open)},[t,n,f,r,u]}class jt extends ge{constructor(e){super(),me(this,e,At,Rt,ue,{cluster:0,query:1,open:2})}}function Pe(l,e,s){const t=l.slice();return t[15]=e[s],t}function Gt(l){let e,s,t=fe(l[4]),n=[];for(let r=0;r<t.length;r+=1)n[r]=Ue(Pe(l,t,r));const f=r=>q(n[r],1,1,()=>{n[r]=null});return{c(){e=I("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=D(r,"DIV",{class:!0});var u=E(e);for(let o=0;o<n.length;o+=1)n[o].l(u);u.forEach(b),this.h()},h(){y(e,"class","container p-s grid-1-s svelte-fr0d3y")},m(r,u){R(r,e,u);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null);s=!0},p(r,u){if(u&1044){t=fe(r[4]);let o;for(o=0;o<t.length;o+=1){const a=Pe(r,t,o);n[o]?(n[o].p(a,u),k(n[o],1)):(n[o]=Ue(a),n[o].c(),k(n[o],1),n[o].m(e,null))}for(he(),o=t.length;o<n.length;o+=1)f(o);$e()}},i(r){if(!s){for(let u=0;u<t.length;u+=1)k(n[u]);s=!0}},o(r){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)q(n[u]);s=!1},d(r){r&&b(e),Fe(n,r)}}}function Pt(l){let e,s="<p>No data available</p>";return{c(){e=I("div"),e.innerHTML=s,this.h()},l(t){e=D(t,"DIV",{class:!0,"data-svelte-h":!0}),We(e)!=="svelte-kunnt3"&&(e.innerHTML=s),this.h()},h(){y(e,"class","container flex-center-center svelte-fr0d3y")},m(t,n){R(t,e,n)},p:G,i:G,o:G,d(t){t&&b(e)}}}function Ut(l){let e,s="<p>Loading...</p>";return{c(){e=I("div"),e.innerHTML=s,this.h()},l(t){e=D(t,"DIV",{class:!0,"data-svelte-h":!0}),We(e)!=="svelte-qdph03"&&(e.innerHTML=s),this.h()},h(){y(e,"class","container flex-center-center svelte-fr0d3y")},m(t,n){R(t,e,n)},p:G,i:G,o:G,d(t){t&&b(e)}}}function Ue(l){let e,s;return e=new jt({props:{cluster:l[15],query:l[2],open:l[10]}}),{c(){x(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){L(e,t,n),s=!0},p(t,n){const f={};n&16&&(f.cluster=t[15]),n&4&&(f.query=t[2]),e.$set(f)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Ke(l){let e,s;return e=new Ht({props:{news:l[3],close:l[9],query:l[2]}}),{c(){x(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,n){L(e,t,n),s=!0},p(t,n){const f={};n&8&&(f.news=t[3]),n&4&&(f.query=t[2]),e.$set(f)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function Kt(l){let e,s,t,n,f,r,u,o,a,_,m;t=new mt({props:{queries:l[5],showLang:!1,description:l[7]("description"),question:l[7]("research_question")}});const h=[Ut,Pt,Gt],d=[];function c(p,g){var w;return p[1]?0:(w=p[0])!=null&&w.length?2:1}f=c(l),r=d[f]=h[f](l);let i=l[3].isOpen&&Ke(l);return{c(){e=M(),s=I("div"),x(t.$$.fragment),n=M(),r.c(),u=M(),i&&i.c(),o=He(),this.h()},l(p){e=T(p),s=D(p,"DIV",{class:!0});var g=E(s);V(t.$$.fragment,g),n=T(g),r.l(g),u=T(g),i&&i.l(g),o=He(),g.forEach(b),this.h()},h(){y(s,"class","page xl:flex-start-start")},m(p,g){R(p,e,g),R(p,s,g),L(t,s,null),$(s,n),d[f].m(s,null),$(s,u),i&&i.m(s,null),$(s,o),a=!0,_||(m=lt(ft.call(null,document.body,l[6])),_=!0)},p(p,[g]){let w=f;f=c(p),f===w?d[f].p(p,g):(he(),q(d[w],1,1,()=>{d[w]=null}),$e(),r=d[f],r?r.p(p,g):(r=d[f]=h[f](p),r.c()),k(r,1),r.m(s,u)),p[3].isOpen?i?(i.p(p,g),g&8&&k(i,1)):(i=Ke(p),i.c(),k(i,1),i.m(o.parentNode,o)):i&&(he(),q(i,1,1,()=>{i=null}),$e())},i(p){a||(k(t.$$.fragment,p),k(r),k(i),a=!0)},o(p){q(t.$$.fragment,p),q(r),q(i),a=!1},d(p){p&&(b(e),b(s)),C(t),d[f].d(),i&&i.d(),_=!1,m()}}}function Qt(l,e,s){let t,n,f,{data:r}=e;const{queries:u}=r,o=ut(),a=pt("getty_circulation");let _,m=!1,h=dt("query");Je(l,h,w=>s(2,f=w)),at(()=>{var w;f||ot(h,f=(w=u[0])==null?void 0:w.query,f)});const d=`${qe}/assets/gettyimages`,c=async()=>{if(m||!$t)return;if(s(1,m=!0),!f){s(1,m=!1),s(0,_=null);return}const{data:w,error:N}=await Qe({key:"getty-stereotypes-data",url:t,type:"text"});w?s(0,_=ze(w)):s(0,_=null),s(1,m=!1)},i={isOpen:!1,cluster:[]},p=()=>{s(3,i.isOpen=!1,i),s(3,i.cluster=[],i),s(3,i.rank=null,i),o.toggle(!1)},g=(w,N)=>{s(3,i.isOpen=!0,i),s(3,i.cluster=w,i),s(3,i.rank=N,i),o.toggle(!0)};return l.$$set=w=>{"data"in w&&s(11,r=w.data)},l.$$.update=()=>{l.$$.dirty&4&&s(12,t=`${d}/${f}/reverse_image_search/${f}.csv`),l.$$.dirty&3&&s(4,n=_!=null&&_.length&&!m?ht(_,w=>w.cluster,w=>w.image_id):[]),l.$$.dirty&4096&&c()},[_,m,f,i,n,u,o,a,h,p,g,r,t]}class cs extends ge{constructor(e){super(),me(this,e,Qt,Kt,ue,{data:11})}}export{cs as component,as as universal};
