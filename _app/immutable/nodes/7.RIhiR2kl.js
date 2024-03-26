import{g as Ie,c as ye,l as Fe,f as Te,D as We}from"../chunks/download.DT210bqd.js";import{H as Xe}from"../chunks/control.CYgJF_JY.js";import{b as de}from"../chunks/paths.DmMS3xDm.js";import{s as ae,d as le,n as W,e as ge,a as Ye,u as et,g as tt,b as st,m as nt,D as be}from"../chunks/scheduler.DhL_NTdI.js";import{S as oe,i as ie,r as je,H as Ae,u as Ue,a as C,v as Ze,d as $,w as pe,g as K,e as E,m as y,s as S,c as D,n as T,f as M,o as g,h as u,p as L,k as w,I as Le,l as b,q,B as ze,x as qe,y as Ge,z as Re,t as we,b as ke,J as rt,C as He,j as Be,G as lt}from"../chunks/index.BoqPf9FP.js";import{e as Se}from"../chunks/each.DcgF7d6a.js";import{T as J}from"../chunks/text.D9PalPgM.js";import{C as Je}from"../chunks/close.Cmipe8Nf.js";import{L as xe,g as at}from"../chunks/link.9JVQBn7S.js";import{g as Ke}from"../chunks/spread.CN4WR7uZ.js";function Me(r,e){let s=0;if(e===void 0)for(let t of r)(t=+t)&&(s+=t);else{let t=-1;for(let l of r)(l=+e(l,++t,r))&&(s+=l)}return s}function $e(r,e){throw new Xe(r,e)}new TextEncoder;const ot=!1,it=!0,ft=!1;async function ct({params:r,fetch:e}){var Z,v,V,j,p,c,k;const{lang:s,query:t,slug:l}=r,n=Fe[s];if(!n)return $e(404,"Not found");const o=`${`${de}/tiktokAssets/${n.code}`}/clusters_${n.code}.csv`,{data:x,error:d}=await Ie({key:`tiktok-${n.code}-data`,url:o,type:"text"},e);if(!x||d)return console.error("error",d),$e(404,"Not found");let i=[];const m=ye(x),_=(Z=m==null?void 0:m.filter)==null?void 0:Z.call(m,N=>(N==null?void 0:N.querySlug)===t&&(N==null?void 0:N.cluster)===l),H={label:(v=_[0])==null?void 0:v.clusterLabel,slug:(V=_[0])==null?void 0:V.cluster};if(i=(p=(j=_==null?void 0:_.map(N=>N.ids))==null?void 0:j.join("|"))==null?void 0:p.split("|"),!(i!=null&&i.length))return $e(404,"Not found");const B=`${de}/tiktokAssets/videos.csv`,{data:G,error:h}=await Ie({key:"tiktok-videos",url:B,type:"text"},e);return!G||h?(console.error("error",h),$e(404,"Not found")):{videos:(k=(c=ye(G))==null?void 0:c.filter)==null?void 0:k.call(c,N=>i.includes(N.id)),cluster:H,lang:s,query:t}}const Ut=Object.freeze(Object.defineProperty({__proto__:null,csr:it,load:ct,prerender:ot,ssr:ft},Symbol.toStringTag,{value:"Module"}));function ut(r){let e,s,t='<path d="M0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7ZM5.14883 4.02227C4.94102 4.13711 4.8125 4.35859 4.8125 4.59375V9.40625C4.8125 9.64414 4.94102 9.86289 5.14883 9.97773C5.35664 10.0926 5.6082 10.0898 5.81328 9.96406L9.75078 7.55781C9.94492 7.4375 10.0652 7.22695 10.0652 6.99727C10.0652 6.76758 9.94492 6.55703 9.75078 6.43672L5.81328 4.03047C5.61094 3.90742 5.35664 3.90195 5.14883 4.0168V4.02227Z" fill="currentColor"/>',l=[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},r[0]],n={};for(let a=0;a<l.length;a+=1)n=le(n,l[a]);return{c(){e=je("svg"),s=new Ae(!0),this.h()},l(a){e=Ue(a,"svg",{viewBox:!0,fill:!0,xmlns:!0});var o=C(e);s=Ze(o,!0),o.forEach($),this.h()},h(){s.a=null,pe(e,n)},m(a,o){K(a,e,o),s.m(t,e)},p(a,[o]){pe(e,n=Ke(l,[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},o&1&&a[0]]))},i:W,o:W,d(a){a&&$(e)}}}function mt(r,e,s){return r.$$set=t=>{s(0,e=le(le({},e),ge(t)))},e=ge(e),[e]}class $t extends oe{constructor(e){super(),ie(this,e,mt,ut,ae,{})}}function dt(r){let e,s,t='<path d="M10.2834 0.0293723C11.1366 0.191858 11.6911 0.982412 11.5205 1.79484L11.445 2.15106C11.2711 2.98536 10.9495 3.77904 10.5 4.50085H15.225C16.0945 4.50085 16.8 5.17266 16.8 6.00071C16.8 6.57879 16.4555 7.08187 15.9502 7.33185C16.3078 7.60682 16.5375 8.02866 16.5375 8.50049C16.5375 9.23168 15.9863 9.841 15.2611 9.97223C15.4055 10.2003 15.4875 10.4659 15.4875 10.7503C15.4875 11.4159 15.0314 11.9814 14.4014 12.1752C14.4244 12.2783 14.4375 12.3876 14.4375 12.5001C14.4375 13.3282 13.732 14 12.8625 14H9.66328C9.03984 14 8.43281 13.825 7.91438 13.4969L6.65109 12.6939C5.775 12.1377 5.25 11.2002 5.25 10.1972V9.00045V7.50058V6.72252C5.25 5.81011 5.68641 4.95081 6.43125 4.37898L6.67406 4.19462C7.54359 3.53218 8.1375 2.60102 8.35406 1.56361L8.42953 1.20739C8.60016 0.394965 9.43031 -0.133113 10.2834 0.0293723ZM1.05 5.0008H3.15C3.73078 5.0008 4.2 5.44764 4.2 6.00071V13.0001C4.2 13.5532 3.73078 14 3.15 14H1.05C0.469219 14 0 13.5532 0 13.0001V6.00071C0 5.44764 0.469219 5.0008 1.05 5.0008Z" fill="currentColor"/>',l=[{viewBox:"0 0 17 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},r[0]],n={};for(let a=0;a<l.length;a+=1)n=le(n,l[a]);return{c(){e=je("svg"),s=new Ae(!0),this.h()},l(a){e=Ue(a,"svg",{viewBox:!0,fill:!0,xmlns:!0});var o=C(e);s=Ze(o,!0),o.forEach($),this.h()},h(){s.a=null,pe(e,n)},m(a,o){K(a,e,o),s.m(t,e)},p(a,[o]){pe(e,n=Ke(l,[{viewBox:"0 0 17 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},o&1&&a[0]]))},i:W,o:W,d(a){a&&$(e)}}}function gt(r,e,s){return r.$$set=t=>{s(0,e=le(le({},e),ge(t)))},e=ge(e),[e]}class pt extends oe{constructor(e){super(),ie(this,e,gt,dt,ae,{})}}function vt(r){let e,s;return e=new Je({props:{width:"24"}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p:W,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function _t(r){let e,s,t,l,n,a,o;l=new xe({props:{fn:r[0],$$slots:{default:[vt]},$$scope:{ctx:r}}});const x=r[1].default,d=Ye(x,r,r[2],null);return{c(){e=E("div"),s=E("div"),t=E("div"),y(l.$$.fragment),n=S(),d&&d.c(),this.h()},l(i){e=D(i,"DIV",{class:!0});var m=C(e);s=D(m,"DIV",{class:!0});var _=C(s);t=D(_,"DIV",{class:!0});var H=C(t);T(l.$$.fragment,H),H.forEach($),n=M(_),d&&d.l(_),_.forEach($),m.forEach($),this.h()},h(){g(t,"class","close svelte-s65neq"),g(s,"class","relative modal-content flex-center-center svelte-s65neq"),g(e,"class","modal flex-center-center svelte-s65neq")},m(i,m){K(i,e,m),u(e,s),u(s,t),L(l,t,null),u(s,n),d&&d.m(s,null),o=!0},p(i,[m]){const _={};m&1&&(_.fn=i[0]),m&4&&(_.$$scope={dirty:m,ctx:i}),l.$set(_),d&&d.p&&(!o||m&4)&&et(d,x,i,i[2],o?st(x,i[2],m,null):tt(i[2]),null)},i(i){o||(w(l.$$.fragment,i),w(d,i),i&&nt(()=>{o&&(a||(a=Le(e,Te,{duration:300},!0)),a.run(1))}),o=!0)},o(i){b(l.$$.fragment,i),b(d,i),i&&(a||(a=Le(e,Te,{duration:300},!1)),a.run(0)),o=!1},d(i){i&&$(e),q(l),d&&d.d(i),i&&a&&a.end()}}}function ht(r,e,s){let{$$slots:t={},$$scope:l}=e,{fn:n=()=>{}}=e;return r.$$set=a=>{"fn"in a&&s(0,n=a.fn),"$$scope"in a&&s(2,l=a.$$scope)},[n,t,l]}class wt extends oe{constructor(e){super(),ie(this,e,ht,_t,ae,{fn:0})}}function kt(r){let e,s,t,l;return{c(){e=E("img"),this.h()},l(n){e=D(n,"IMG",{src:!0,alt:!0}),this.h()},h(){be(e.src,s=r[0])||g(e,"src",s),g(e,"alt",r[1])},m(n,a){K(n,e,a),t||(l=ze(e,"error",r[2]),t=!0)},p(n,[a]){a&1&&!be(e.src,s=n[0])&&g(e,"src",s),a&2&&g(e,"alt",n[1])},i:W,o:W,d(n){n&&$(e),t=!1,l()}}}function bt(r,e,s){let{src:t,alt:l}=e;const n=a=>{a.target.src=at()};return r.$$set=a=>{"src"in a&&s(0,t=a.src),"alt"in a&&s(1,l=a.alt)},[t,l,n]}class xt extends oe{constructor(e){super(),ie(this,e,bt,kt,ae,{src:0,alt:1})}}function Ne(r){let e,s;return e=new wt({props:{fn:r[3],$$slots:{default:[Ct]},$$scope:{ctx:r}}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p(t,l){const n={};l&2&&(n.fn=t[3]),l&17&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function Ct(r){let e,s,t,l,n=r[0].username+"",a,o,x,d,i,m=r[0].video_description+"",_,H,B,G,h,U="",Z;return{c(){e=E("blockquote"),s=E("section"),t=E("a"),l=we("@"),a=we(n),d=S(),i=E("p"),_=we(m),G=S(),h=E("script"),h.innerHTML=U,this.h()},l(v){e=D(v,"BLOCKQUOTE",{class:!0,cite:!0,"data-video-id":!0,"data-embed-from":!0,style:!0});var V=C(e);s=D(V,"SECTION",{});var j=C(s);t=D(j,"A",{target:!0,title:!0,href:!0});var p=C(t);l=ke(p,"@"),a=ke(p,n),p.forEach($),d=M(j),i=D(j,"P",{});var c=C(i);_=ke(c,m),c.forEach($),j.forEach($),V.forEach($),G=M(v),h=D(v,"SCRIPT",{src:!0,"data-svelte-h":!0}),rt(h)!=="svelte-lbz9tt"&&(h.innerHTML=U),this.h()},h(){g(t,"target","_blank"),g(t,"title",o="@"+r[0].username),g(t,"href",x="https://www.tiktok.com/@"+r[0].username+"?refer=embed"),g(e,"class","tiktok-embed"),g(e,"cite",H=r[0].link),g(e,"data-video-id",B=r[0].id),g(e,"data-embed-from","embed_page"),He(e,"max-width","325px"),He(e,"min-width","325px"),h.async=!0,be(h.src,Z="https://www.tiktok.com/embed.js")||g(h,"src",Z)},m(v,V){K(v,e,V),u(e,s),u(s,t),u(t,l),u(t,a),u(s,d),u(s,i),u(i,_),K(v,G,V),K(v,h,V)},p(v,V){V&1&&n!==(n=v[0].username+"")&&Be(a,n),V&1&&o!==(o="@"+v[0].username)&&g(t,"title",o),V&1&&x!==(x="https://www.tiktok.com/@"+v[0].username+"?refer=embed")&&g(t,"href",x),V&1&&m!==(m=v[0].video_description+"")&&Be(_,m),V&1&&H!==(H=v[0].link)&&g(e,"cite",H),V&1&&B!==(B=v[0].id)&&g(e,"data-video-id",B)},d(v){v&&($(e),$(G),$(h))}}}function Et(r){let e,s,t,l,n,a,o,x,d,i,m,_,H,B,G,h,U,Z,v,V,j;t=new xt({props:{src:de+"/tiktokAssets/thumbs/"+r[0].id+".webp",alt:r[0].title}}),n=new J({props:{tag:"p",typo:"p",content:r[0].video_description,class:"max-lines mb-xs"}}),d=new $t({props:{width:"14"}}),m=new J({props:{tag:"p",typo:"p",content:r[0].view_count}}),B=new pt({props:{width:"14"}}),h=new J({props:{tag:"p",typo:"p",content:r[0].like_count}});let p=r[1]&&Ne(r);return{c(){e=E("button"),s=E("div"),y(t.$$.fragment),l=S(),y(n.$$.fragment),a=S(),o=E("div"),x=E("div"),y(d.$$.fragment),i=S(),y(m.$$.fragment),_=S(),H=E("div"),y(B.$$.fragment),G=S(),y(h.$$.fragment),U=S(),p&&p.c(),Z=qe(),this.h()},l(c){e=D(c,"BUTTON",{class:!0});var k=C(e);s=D(k,"DIV",{class:!0});var N=C(s);T(t.$$.fragment,N),N.forEach($),l=M(k),T(n.$$.fragment,k),a=M(k),o=D(k,"DIV",{class:!0});var z=C(o);x=D(z,"DIV",{class:!0});var R=C(x);T(d.$$.fragment,R),i=M(R),T(m.$$.fragment,R),R.forEach($),_=M(z),H=D(z,"DIV",{class:!0});var Q=C(H);T(B.$$.fragment,Q),G=M(Q),T(h.$$.fragment,Q),Q.forEach($),z.forEach($),k.forEach($),U=M(c),p&&p.l(c),Z=qe(),this.h()},h(){g(s,"class","img svelte-ymgh9g"),g(x,"class","flex gap-xs"),g(H,"class","flex gap-xs"),g(o,"class","grid-3-xs"),g(e,"class","thumb p-s flex-col-start-stretch gap-s text-left svelte-ymgh9g")},m(c,k){K(c,e,k),u(e,s),L(t,s,null),u(e,l),L(n,e,null),u(e,a),u(e,o),u(o,x),L(d,x,null),u(x,i),L(m,x,null),u(o,_),u(o,H),L(B,H,null),u(H,G),L(h,H,null),K(c,U,k),p&&p.m(c,k),K(c,Z,k),v=!0,V||(j=ze(e,"click",r[2]),V=!0)},p(c,[k]){const N={};k&1&&(N.src=de+"/tiktokAssets/thumbs/"+c[0].id+".webp"),k&1&&(N.alt=c[0].title),t.$set(N);const z={};k&1&&(z.content=c[0].video_description),n.$set(z);const R={};k&1&&(R.content=c[0].view_count),m.$set(R);const Q={};k&1&&(Q.content=c[0].like_count),h.$set(Q),c[1]?p?(p.p(c,k),k&2&&w(p,1)):(p=Ne(c),p.c(),w(p,1),p.m(Z.parentNode,Z)):p&&(Ge(),b(p,1,1,()=>{p=null}),Re())},i(c){v||(w(t.$$.fragment,c),w(n.$$.fragment,c),w(d.$$.fragment,c),w(m.$$.fragment,c),w(B.$$.fragment,c),w(h.$$.fragment,c),w(p),v=!0)},o(c){b(t.$$.fragment,c),b(n.$$.fragment,c),b(d.$$.fragment,c),b(m.$$.fragment,c),b(B.$$.fragment,c),b(h.$$.fragment,c),b(p),v=!1},d(c){c&&($(e),$(U),$(Z)),q(t),q(n),q(d),q(m),q(B),q(h),p&&p.d(c),V=!1,j()}}}function Dt(r,e,s){let{video:t={}}=e,l=!1;const n=()=>s(1,l=!0),a=()=>s(1,l=!1);return r.$$set=o=>{"video"in o&&s(0,t=o.video)},[t,l,n,a]}class Vt extends oe{constructor(e){super(),ie(this,e,Dt,Et,ae,{video:0})}}function Pe(r,e,s){const t=r.slice();return t[7]=e[s],t}function It(r){let e,s,t,l;return e=new J({props:{typo:"1",content:"download data"}}),t=new We({props:{width:"8"}}),{c(){y(e.$$.fragment),s=S(),y(t.$$.fragment)},l(n){T(e.$$.fragment,n),s=M(n),T(t.$$.fragment,n)},m(n,a){L(e,n,a),K(n,s,a),L(t,n,a),l=!0},p:W,i(n){l||(w(e.$$.fragment,n),w(t.$$.fragment,n),l=!0)},o(n){b(e.$$.fragment,n),b(t.$$.fragment,n),l=!1},d(n){n&&$(s),q(e,n),q(t,n)}}}function yt(r){let e,s;return e=new Je({props:{width:"26"}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p:W,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function Oe(r){let e,s;return e=new Vt({props:{video:r[7]}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){L(e,t,l),s=!0},p:W,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function Tt(r){var Ce;let e,s,t,l,n,a,o,x,d,i,m,_,H,B,G,h,U,Z,v,V,j,p,c,k,N,z,R,Q,X,ve,ne,Y,_e,re,ee,fe;n=new J({props:{content:"Topic",typo:"label",class:"case-upper"}}),o=new J({props:{tag:"h3",typo:"h3",content:r[1].label,ellipsis:!0}}),_=new J({props:{content:"Tiktoks",typo:"label",class:"case-upper"}}),B=new J({props:{tag:"h3",typo:"h3",content:(Ce=r[0])==null?void 0:Ce.length}}),U=new J({props:{content:"Total Plays",typo:"label",class:"case-upper"}}),v=new J({props:{tag:"h3",typo:"h3",content:r[4]}}),p=new J({props:{content:"Total Likes",typo:"label",class:"case-upper"}}),k=new J({props:{tag:"h3",typo:"h3",content:r[5]}}),R=new J({props:{content:"Resources",typo:"label",class:"case-upper pb-xxs"}}),X=new xe({props:{theme:"download",class:"flex gap-xxs items-center",$$slots:{default:[It]},$$scope:{ctx:r}}}),Y=new xe({props:{url:"/tiktok/?lang="+r[3]+"&query="+r[2],class:"flex-center-center",$$slots:{default:[yt]},$$scope:{ctx:r}}});let te=Se(r[0]),I=[];for(let f=0;f<te.length;f+=1)I[f]=Oe(Pe(r,te,f));const Qe=f=>b(I[f],1,1,()=>{I[f]=null});return{c(){e=E("div"),s=E("div"),t=E("div"),l=E("div"),y(n.$$.fragment),a=S(),y(o.$$.fragment),x=S(),d=E("div"),i=S(),m=E("div"),y(_.$$.fragment),H=S(),y(B.$$.fragment),G=S(),h=E("div"),y(U.$$.fragment),Z=S(),y(v.$$.fragment),V=S(),j=E("div"),y(p.$$.fragment),c=S(),y(k.$$.fragment),N=S(),z=E("div"),y(R.$$.fragment),Q=S(),y(X.$$.fragment),ve=S(),ne=E("div"),y(Y.$$.fragment),_e=S(),re=E("div"),ee=E("div");for(let f=0;f<I.length;f+=1)I[f].c();this.h()},l(f){e=D(f,"DIV",{class:!0});var P=C(e);s=D(P,"DIV",{class:!0});var F=C(s);t=D(F,"DIV",{class:!0});var A=C(t);l=D(A,"DIV",{class:!0});var O=C(l);T(n.$$.fragment,O),a=M(O),T(o.$$.fragment,O),O.forEach($),x=M(A),d=D(A,"DIV",{class:!0}),C(d).forEach($),i=M(A),m=D(A,"DIV",{class:!0});var se=C(m);T(_.$$.fragment,se),H=M(se),T(B.$$.fragment,se),se.forEach($),G=M(A),h=D(A,"DIV",{class:!0});var ce=C(h);T(U.$$.fragment,ce),Z=M(ce),T(v.$$.fragment,ce),ce.forEach($),V=M(A),j=D(A,"DIV",{class:!0});var ue=C(j);T(p.$$.fragment,ue),c=M(ue),T(k.$$.fragment,ue),ue.forEach($),N=M(A),z=D(A,"DIV",{class:!0});var me=C(z);T(R.$$.fragment,me),Q=M(me),T(X.$$.fragment,me),me.forEach($),ve=M(A),ne=D(A,"DIV",{class:!0});var Ee=C(ne);T(Y.$$.fragment,Ee),Ee.forEach($),A.forEach($),F.forEach($),_e=M(P),re=D(P,"DIV",{class:!0});var De=C(re);ee=D(De,"DIV",{class:!0});var Ve=C(ee);for(let he=0;he<I.length;he+=1)I[he].l(Ve);Ve.forEach($),De.forEach($),P.forEach($),this.h()},h(){g(l,"class","title col-[span-3] py-s px-s svelte-1r21eyn"),g(d,"class","line col-[span-4] xl:hidden svelte-1r21eyn"),g(m,"class","col-[span-2] xl:col-6 py-s px-s xl:px-0"),g(h,"class","col-[span-2] xl:col-[7/span-2] py-s px-s xl:px-0"),g(j,"class","col-[span-2] xl:col-9 py-s px-s xl:px-0"),g(z,"class","col-[span-2] xl:col-[10/span-2] py-s px-s xl:px-0"),g(ne,"class","col-4 xl:col-12 self-center justify-self-end px-s"),g(t,"class","content grid-4-0 xl:grid-12-gap svelte-1r21eyn"),g(s,"class","navbar svelte-1r21eyn"),g(ee,"class","p-s grid-1-s s:grid-2-s l:grid-3-s l:grid-4-s xl:grid-5-s xxl:grid-6-s"),g(re,"class","container"),g(e,"class","page")},m(f,P){K(f,e,P),u(e,s),u(s,t),u(t,l),L(n,l,null),u(l,a),L(o,l,null),u(t,x),u(t,d),u(t,i),u(t,m),L(_,m,null),u(m,H),L(B,m,null),u(t,G),u(t,h),L(U,h,null),u(h,Z),L(v,h,null),u(t,V),u(t,j),L(p,j,null),u(j,c),L(k,j,null),u(t,N),u(t,z),L(R,z,null),u(z,Q),L(X,z,null),u(t,ve),u(t,ne),L(Y,ne,null),u(e,_e),u(e,re),u(re,ee);for(let F=0;F<I.length;F+=1)I[F]&&I[F].m(ee,null);fe=!0},p(f,[P]){const F={};P&1024&&(F.$$scope={dirty:P,ctx:f}),X.$set(F);const A={};if(P&1024&&(A.$$scope={dirty:P,ctx:f}),Y.$set(A),P&1){te=Se(f[0]);let O;for(O=0;O<te.length;O+=1){const se=Pe(f,te,O);I[O]?(I[O].p(se,P),w(I[O],1)):(I[O]=Oe(se),I[O].c(),w(I[O],1),I[O].m(ee,null))}for(Ge(),O=te.length;O<I.length;O+=1)Qe(O);Re()}},i(f){if(!fe){w(n.$$.fragment,f),w(o.$$.fragment,f),w(_.$$.fragment,f),w(B.$$.fragment,f),w(U.$$.fragment,f),w(v.$$.fragment,f),w(p.$$.fragment,f),w(k.$$.fragment,f),w(R.$$.fragment,f),w(X.$$.fragment,f),w(Y.$$.fragment,f);for(let P=0;P<te.length;P+=1)w(I[P]);fe=!0}},o(f){b(n.$$.fragment,f),b(o.$$.fragment,f),b(_.$$.fragment,f),b(B.$$.fragment,f),b(U.$$.fragment,f),b(v.$$.fragment,f),b(p.$$.fragment,f),b(k.$$.fragment,f),b(R.$$.fragment,f),b(X.$$.fragment,f),b(Y.$$.fragment,f),I=I.filter(Boolean);for(let P=0;P<I.length;P+=1)b(I[P]);fe=!1},d(f){f&&$(e),q(n),q(o),q(_),q(B),q(U),q(v),q(p),q(k),q(R),q(X),q(Y),lt(I,f)}}}function Lt(r,e,s){let{data:t}=e;const{videos:l,cluster:n,query:a,lang:o}=t,x=Number(Me(l,i=>i.view_count)).toLocaleString(),d=Number(Me(l,i=>i.like_count)).toLocaleString();return r.$$set=i=>{"data"in i&&s(6,t=i.data)},[l,n,a,o,x,d,t]}class Zt extends oe{constructor(e){super(),ie(this,e,Lt,Tt,ae,{data:6})}}export{Zt as component,Ut as universal};