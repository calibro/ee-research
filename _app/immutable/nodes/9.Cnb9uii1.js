import{b as be}from"../chunks/entry.jtA1YJKr.js";import{e as ke,I as Ye}from"../chunks/image.CwBOrOXO.js";import{g as Ae,c as Me,b as Ze,l as et,D as Je,a as tt}from"../chunks/index.CBBoqgA3.js";import{s as Se,e as N,a as V,F as Re,c as S,b as P,f as v,g as T,p as y,i as G,h as u,B as nt,t as Te,d as Le,V as st,N as Be,A as rt,j as ze,n as xe,T as at}from"../chunks/scheduler.DjmlZpBi.js";import{S as Pe,i as Ue,c as w,b as k,m as b,t as g,g as We,a as p,f as Xe,d as x}from"../chunks/index.D5mPgV2_.js";import{e as Fe}from"../chunks/each.K9NGHkqs.js";import{P as lt,L as ot}from"../chunks/play.C8UkVpoY.js";import{M as it}from"../chunks/modal.ByOd_Z39.js";import{T as j}from"../chunks/text.DH_QAwnB.js";import{C as ft}from"../chunks/close.DhimUgka.js";import{L as Ne}from"../chunks/link.C90oDbZ7.js";function He(r,e){let n=0;if(e===void 0)for(let t of r)(t=+t)&&(n+=t);else{let t=-1;for(let o of r)(o=+e(o,++t,r))&&(n+=o)}return n}const ct=!1,$t=!0,ut=!1;async function mt({params:r,fetch:e}){var E,U,M,C,$,I,K;const{lang:n,query:t,slug:o}=r,s=et[n];if(!s)return ke(404,"Not found");const d=`${`${be}/assets/tiktok/${s.code}`}/clusters_${s.code}.csv`,{data:i,error:q}=await Ae({key:`tiktok-${s.code}-data`,url:d,type:"text"},e);if(!i||q)return console.error("error",q),ke(404,"Not found");let l=[];const c=Me(i),f=(E=c==null?void 0:c.filter)==null?void 0:E.call(c,h=>(h==null?void 0:h.querySlug)===t&&(h==null?void 0:h.cluster)===o),D={label:(U=f[0])==null?void 0:U.clusterLabel,slug:(M=f[0])==null?void 0:M.cluster};if(l=($=(C=f==null?void 0:f.map(h=>h.ids))==null?void 0:C.join("|"))==null?void 0:$.split("|"),!(l!=null&&l.length))return ke(404,"Not found");const L=`${be}/assets/tiktok/videos.csv`,{data:R,error:_}=await Ae({key:"tiktok-videos",url:L,type:"text"},e);if(!R||_)return console.error("error",_),ke(404,"Not found");const B=(K=(I=Me(R))==null?void 0:I.filter)==null?void 0:K.call(I,h=>l.includes(h.id)),A=Ze(f,h=>h.cluster).map(h=>(h[2]=[...new Set(h[1].map(z=>z.ids.split("|")).flat())].length,h)).sort((h,z)=>descending(h[2],z[2]));return{videos:B,cluster:D,lang:n,query:t,downloadData:A}}const Ot=Object.freeze(Object.defineProperty({__proto__:null,csr:$t,load:mt,prerender:ct,ssr:ut},Symbol.toStringTag,{value:"Module"}));function Ke(r){let e,n;return e=new it({props:{fn:r[3],$$slots:{default:[gt]},$$scope:{ctx:r}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),n=!0},p(t,o){const s={};o&2&&(s.fn=t[3]),o&17&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function gt(r){let e,n,t,o,s=r[0].username+"",m,d,i,q,l,c=r[0].video_description+"",f,D,L,R,_,B="",A;return{c(){e=N("blockquote"),n=N("section"),t=N("a"),o=Te("@"),m=Te(s),q=V(),l=N("p"),f=Te(c),R=V(),_=N("script"),_.innerHTML=B,this.h()},l(E){e=S(E,"BLOCKQUOTE",{class:!0,cite:!0,"data-video-id":!0,"data-embed-from":!0,style:!0});var U=P(e);n=S(U,"SECTION",{});var M=P(n);t=S(M,"A",{target:!0,title:!0,href:!0});var C=P(t);o=Le(C,"@"),m=Le(C,s),C.forEach(v),q=T(M),l=S(M,"P",{});var $=P(l);f=Le($,c),$.forEach(v),M.forEach(v),U.forEach(v),R=T(E),_=S(E,"SCRIPT",{src:!0,"data-svelte-h":!0}),st(_)!=="svelte-lbz9tt"&&(_.innerHTML=B),this.h()},h(){y(t,"target","_blank"),y(t,"title",d="@"+r[0].username),y(t,"href",i="https://www.tiktok.com/@"+r[0].username+"?refer=embed"),y(e,"class","tiktok-embed"),y(e,"cite",D=r[0].link),y(e,"data-video-id",L=r[0].id),y(e,"data-embed-from","embed_page"),Be(e,"max-width","325px"),Be(e,"min-width","325px"),_.async=!0,rt(_.src,A="https://www.tiktok.com/embed.js")||y(_,"src",A)},m(E,U){G(E,e,U),u(e,n),u(n,t),u(t,o),u(t,m),u(n,q),u(n,l),u(l,f),G(E,R,U),G(E,_,U)},p(E,U){U&1&&s!==(s=E[0].username+"")&&ze(m,s),U&1&&d!==(d="@"+E[0].username)&&y(t,"title",d),U&1&&i!==(i="https://www.tiktok.com/@"+E[0].username+"?refer=embed")&&y(t,"href",i),U&1&&c!==(c=E[0].video_description+"")&&ze(f,c),U&1&&D!==(D=E[0].link)&&y(e,"cite",D),U&1&&L!==(L=E[0].id)&&y(e,"data-video-id",L)},d(E){E&&(v(e),v(R),v(_))}}}function dt(r){let e,n,t,o,s,m,d,i,q,l,c,f,D,L,R,_,B,A,E,U,M;t=new Ye({props:{src:be+"/assets/tiktok/thumbs/"+r[0].id+".webp",alt:r[0].title}}),s=new j({props:{tag:"p",typo:"p",content:r[0].video_description,class:"max-lines mb-xs"}}),q=new lt({props:{width:"14"}}),c=new j({props:{tag:"p",typo:"p",content:r[0].view_count}}),L=new ot({props:{width:"14"}}),_=new j({props:{tag:"p",typo:"p",content:r[0].like_count}});let C=r[1]&&Ke(r);return{c(){e=N("button"),n=N("div"),w(t.$$.fragment),o=V(),w(s.$$.fragment),m=V(),d=N("div"),i=N("div"),w(q.$$.fragment),l=V(),w(c.$$.fragment),f=V(),D=N("div"),w(L.$$.fragment),R=V(),w(_.$$.fragment),B=V(),C&&C.c(),A=Re(),this.h()},l($){e=S($,"BUTTON",{class:!0});var I=P(e);n=S(I,"DIV",{class:!0});var K=P(n);k(t.$$.fragment,K),K.forEach(v),o=T(I),k(s.$$.fragment,I),m=T(I),d=S(I,"DIV",{class:!0});var h=P(d);i=S(h,"DIV",{class:!0});var z=P(i);k(q.$$.fragment,z),l=T(z),k(c.$$.fragment,z),z.forEach(v),f=T(h),D=S(h,"DIV",{class:!0});var H=P(D);k(L.$$.fragment,H),R=T(H),k(_.$$.fragment,H),H.forEach(v),h.forEach(v),I.forEach(v),B=T($),C&&C.l($),A=Re(),this.h()},h(){y(n,"class","img svelte-11w1air"),y(i,"class","flex gap-xs"),y(D,"class","flex gap-xs"),y(d,"class","grid-3-xs"),y(e,"class","thumb p-s flex-col-start-stretch gap-s text-left svelte-11w1air")},m($,I){G($,e,I),u(e,n),b(t,n,null),u(e,o),b(s,e,null),u(e,m),u(e,d),u(d,i),b(q,i,null),u(i,l),b(c,i,null),u(d,f),u(d,D),b(L,D,null),u(D,R),b(_,D,null),G($,B,I),C&&C.m($,I),G($,A,I),E=!0,U||(M=nt(e,"click",r[2]),U=!0)},p($,[I]){const K={};I&1&&(K.src=be+"/assets/tiktok/thumbs/"+$[0].id+".webp"),I&1&&(K.alt=$[0].title),t.$set(K);const h={};I&1&&(h.content=$[0].video_description),s.$set(h);const z={};I&1&&(z.content=$[0].view_count),c.$set(z);const H={};I&1&&(H.content=$[0].like_count),_.$set(H),$[1]?C?(C.p($,I),I&2&&g(C,1)):(C=Ke($),C.c(),g(C,1),C.m(A.parentNode,A)):C&&(We(),p(C,1,1,()=>{C=null}),Xe())},i($){E||(g(t.$$.fragment,$),g(s.$$.fragment,$),g(q.$$.fragment,$),g(c.$$.fragment,$),g(L.$$.fragment,$),g(_.$$.fragment,$),g(C),E=!0)},o($){p(t.$$.fragment,$),p(s.$$.fragment,$),p(q.$$.fragment,$),p(c.$$.fragment,$),p(L.$$.fragment,$),p(_.$$.fragment,$),p(C),E=!1},d($){$&&(v(e),v(B),v(A)),x(t),x(s),x(q),x(c),x(L),x(_),C&&C.d($),U=!1,M()}}}function pt(r,e,n){let{video:t={}}=e,o=!1;const s=()=>n(1,o=!0),m=()=>n(1,o=!1);return r.$$set=d=>{"video"in d&&n(0,t=d.video)},[t,o,s,m]}class vt extends Pe{constructor(e){super(),Ue(this,e,pt,dt,Se,{video:0})}}function _t(r){let e,n,t,o;return e=new j({props:{typo:"1",content:"download data"}}),t=new Je({props:{width:"8"}}),{c(){w(e.$$.fragment),n=V(),w(t.$$.fragment)},l(s){k(e.$$.fragment,s),n=T(s),k(t.$$.fragment,s)},m(s,m){b(e,s,m),G(s,n,m),b(t,s,m),o=!0},p:xe,i(s){o||(g(e.$$.fragment,s),g(t.$$.fragment,s),o=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),o=!1},d(s){s&&v(n),x(e,s),x(t,s)}}}function ht(r){let e,n;return e=new ft({props:{width:"26"}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),n=!0},p:xe,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function wt(r){let e,n,t,o;return e=new j({props:{typo:"1",content:"download data"}}),t=new Je({props:{width:"8"}}),{c(){w(e.$$.fragment),n=V(),w(t.$$.fragment)},l(s){k(e.$$.fragment,s),n=T(s),k(t.$$.fragment,s)},m(s,m){b(e,s,m),G(s,n,m),b(t,s,m),o=!0},p:xe,i(s){o||(g(e.$$.fragment,s),g(t.$$.fragment,s),o=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),o=!1},d(s){s&&v(n),x(e,s),x(t,s)}}}function kt(r){var Oe,je;let e,n,t,o,s,m,d,i,q,l,c,f,D,L,R,_,B,A,E,U,M,C,$,I,K,h,z,H,W,he,Q,X,oe,ye,Y,De,Z,ie,Ee,ee,Ie,te,fe,Ce,ne,qe,se,ce,Ve,re,we;return o=new j({props:{content:"Topic",typo:"label",class:"case-upper"}}),m=new j({props:{tag:"h3",typo:"h3",content:r[2].label,ellipsis:!0}}),q=new j({props:{content:"Tiktoks",typo:"label",class:"case-upper"}}),c=new j({props:{tag:"h3",typo:"h3",content:(Oe=r[3])==null?void 0:Oe.length}}),L=new j({props:{content:"Total Plays",typo:"label",class:"case-upper"}}),_=new j({props:{tag:"h3",typo:"h3",content:r[0]}}),E=new j({props:{content:"Total Likes",typo:"label",class:"case-upper"}}),M=new j({props:{tag:"h3",typo:"h3",content:r[1]}}),I=new j({props:{content:"Resources",typo:"label",class:"case-upper pb-xxs"}}),h=new Ne({props:{theme:"download",class:"flex gap-xxs items-center",fn:r[6],$$slots:{default:[_t]},$$scope:{ctx:r}}}),W=new Ne({props:{url:"/tiktok/?lang="+r[5]+"&query="+r[4],class:"flex-center-center",$$slots:{default:[ht]},$$scope:{ctx:r}}}),oe=new j({props:{content:"Tiktoks",typo:"label",class:"case-upper"}}),Y=new j({props:{tag:"h3",typo:"h3",content:(je=r[3])==null?void 0:je.length}}),ie=new j({props:{content:"Total Plays",typo:"label",class:"case-upper"}}),ee=new j({props:{tag:"h3",typo:"h3",content:r[0]}}),fe=new j({props:{content:"Total Likes",typo:"label",class:"case-upper"}}),ne=new j({props:{tag:"h3",typo:"h3",content:r[1]}}),ce=new j({props:{content:"Resources",typo:"label",class:"case-upper pb-xxs"}}),re=new Ne({props:{theme:"download",class:"flex gap-xxs items-center",$$slots:{default:[wt]},$$scope:{ctx:r}}}),{c(){e=N("div"),n=N("div"),t=N("div"),w(o.$$.fragment),s=V(),w(m.$$.fragment),d=V(),i=N("div"),w(q.$$.fragment),l=V(),w(c.$$.fragment),f=V(),D=N("div"),w(L.$$.fragment),R=V(),w(_.$$.fragment),B=V(),A=N("div"),w(E.$$.fragment),U=V(),w(M.$$.fragment),C=V(),$=N("div"),w(I.$$.fragment),K=V(),w(h.$$.fragment),z=V(),H=N("div"),w(W.$$.fragment),he=V(),Q=N("div"),X=N("div"),w(oe.$$.fragment),ye=V(),w(Y.$$.fragment),De=V(),Z=N("div"),w(ie.$$.fragment),Ee=V(),w(ee.$$.fragment),Ie=V(),te=N("div"),w(fe.$$.fragment),Ce=V(),w(ne.$$.fragment),qe=V(),se=N("div"),w(ce.$$.fragment),Ve=V(),w(re.$$.fragment),this.h()},l(a){e=S(a,"DIV",{class:!0});var O=P(e);n=S(O,"DIV",{class:!0});var F=P(n);t=S(F,"DIV",{class:!0});var $e=P(t);k(o.$$.fragment,$e),s=T($e),k(m.$$.fragment,$e),$e.forEach(v),d=T(F),i=S(F,"DIV",{class:!0});var ue=P(i);k(q.$$.fragment,ue),l=T(ue),k(c.$$.fragment,ue),ue.forEach(v),f=T(F),D=S(F,"DIV",{class:!0});var me=P(D);k(L.$$.fragment,me),R=T(me),k(_.$$.fragment,me),me.forEach(v),B=T(F),A=S(F,"DIV",{class:!0});var ae=P(A);k(E.$$.fragment,ae),U=T(ae),k(M.$$.fragment,ae),ae.forEach(v),C=T(F),$=S(F,"DIV",{class:!0});var le=P($);k(I.$$.fragment,le),K=T(le),k(h.$$.fragment,le),le.forEach(v),z=T(F),H=S(F,"DIV",{class:!0});var _e=P(H);k(W.$$.fragment,_e),_e.forEach(v),F.forEach(v),O.forEach(v),he=T(a),Q=S(a,"DIV",{class:!0});var J=P(Q);X=S(J,"DIV",{class:!0});var ge=P(X);k(oe.$$.fragment,ge),ye=T(ge),k(Y.$$.fragment,ge),ge.forEach(v),De=T(J),Z=S(J,"DIV",{class:!0});var de=P(Z);k(ie.$$.fragment,de),Ee=T(de),k(ee.$$.fragment,de),de.forEach(v),Ie=T(J),te=S(J,"DIV",{class:!0});var pe=P(te);k(fe.$$.fragment,pe),Ce=T(pe),k(ne.$$.fragment,pe),pe.forEach(v),qe=T(J),se=S(J,"DIV",{class:!0});var ve=P(se);k(ce.$$.fragment,ve),Ve=T(ve),k(re.$$.fragment,ve),ve.forEach(v),J.forEach(v),this.h()},h(){y(t,"class","title col-[span-3] py-s px-s svelte-1cq55h0"),y(i,"class","hidden xl:block xl:col-6 py-s px-s xl:px-0"),y(D,"class","hidden xl:block xl:col-[7/span-2] py-s px-s xl:px-0"),y(A,"class","hidden xl:block xl:col-9 py-s px-s xl:px-0"),y($,"class","hidden xl:block xl:col-[10/span-2] py-s px-s xl:px-0"),y(H,"class","col-4 xl:col-12 self-center justify-self-end px-s"),y(n,"class","content grid-4-0 xl:grid-12-gap svelte-1cq55h0"),y(e,"class","navbar svelte-1cq55h0"),y(X,"class","col-[span-2] xl:col-6 py-s px-s xl:px-0"),y(Z,"class","col-[span-2] xl:col-[7/span-2] py-s px-s xl:px-0"),y(te,"class","col-[span-2] xl:col-9 py-s px-s xl:px-0"),y(se,"class","col-[span-2] xl:col-[10/span-2] py-s px-s xl:px-0"),y(Q,"class","mobile-only grid-4-0 xl:hidden bg-white svelte-1cq55h0")},m(a,O){G(a,e,O),u(e,n),u(n,t),b(o,t,null),u(t,s),b(m,t,null),u(n,d),u(n,i),b(q,i,null),u(i,l),b(c,i,null),u(n,f),u(n,D),b(L,D,null),u(D,R),b(_,D,null),u(n,B),u(n,A),b(E,A,null),u(A,U),b(M,A,null),u(n,C),u(n,$),b(I,$,null),u($,K),b(h,$,null),u(n,z),u(n,H),b(W,H,null),G(a,he,O),G(a,Q,O),u(Q,X),b(oe,X,null),u(X,ye),b(Y,X,null),u(Q,De),u(Q,Z),b(ie,Z,null),u(Z,Ee),b(ee,Z,null),u(Q,Ie),u(Q,te),b(fe,te,null),u(te,Ce),b(ne,te,null),u(Q,qe),u(Q,se),b(ce,se,null),u(se,Ve),b(re,se,null),we=!0},p(a,[O]){var pe,ve;const F={};O&4&&(F.content=a[2].label),m.$set(F);const $e={};O&8&&($e.content=(pe=a[3])==null?void 0:pe.length),c.$set($e);const ue={};O&1&&(ue.content=a[0]),_.$set(ue);const me={};O&2&&(me.content=a[1]),M.$set(me);const ae={};O&64&&(ae.fn=a[6]),O&128&&(ae.$$scope={dirty:O,ctx:a}),h.$set(ae);const le={};O&48&&(le.url="/tiktok/?lang="+a[5]+"&query="+a[4]),O&128&&(le.$$scope={dirty:O,ctx:a}),W.$set(le);const _e={};O&8&&(_e.content=(ve=a[3])==null?void 0:ve.length),Y.$set(_e);const J={};O&1&&(J.content=a[0]),ee.$set(J);const ge={};O&2&&(ge.content=a[1]),ne.$set(ge);const de={};O&128&&(de.$$scope={dirty:O,ctx:a}),re.$set(de)},i(a){we||(g(o.$$.fragment,a),g(m.$$.fragment,a),g(q.$$.fragment,a),g(c.$$.fragment,a),g(L.$$.fragment,a),g(_.$$.fragment,a),g(E.$$.fragment,a),g(M.$$.fragment,a),g(I.$$.fragment,a),g(h.$$.fragment,a),g(W.$$.fragment,a),g(oe.$$.fragment,a),g(Y.$$.fragment,a),g(ie.$$.fragment,a),g(ee.$$.fragment,a),g(fe.$$.fragment,a),g(ne.$$.fragment,a),g(ce.$$.fragment,a),g(re.$$.fragment,a),we=!0)},o(a){p(o.$$.fragment,a),p(m.$$.fragment,a),p(q.$$.fragment,a),p(c.$$.fragment,a),p(L.$$.fragment,a),p(_.$$.fragment,a),p(E.$$.fragment,a),p(M.$$.fragment,a),p(I.$$.fragment,a),p(h.$$.fragment,a),p(W.$$.fragment,a),p(oe.$$.fragment,a),p(Y.$$.fragment,a),p(ie.$$.fragment,a),p(ee.$$.fragment,a),p(fe.$$.fragment,a),p(ne.$$.fragment,a),p(ce.$$.fragment,a),p(re.$$.fragment,a),we=!1},d(a){a&&(v(e),v(he),v(Q)),x(o),x(m),x(q),x(c),x(L),x(_),x(E),x(M),x(I),x(h),x(W),x(oe),x(Y),x(ie),x(ee),x(fe),x(ne),x(ce),x(re)}}}function bt(r,e,n){let{viewCount:t,likeCount:o,cluster:s,videos:m,query:d,lang:i,download:q=()=>{}}=e;return r.$$set=l=>{"viewCount"in l&&n(0,t=l.viewCount),"likeCount"in l&&n(1,o=l.likeCount),"cluster"in l&&n(2,s=l.cluster),"videos"in l&&n(3,m=l.videos),"query"in l&&n(4,d=l.query),"lang"in l&&n(5,i=l.lang),"download"in l&&n(6,q=l.download)},[t,o,s,m,d,i,q]}class xt extends Pe{constructor(e){super(),Ue(this,e,bt,kt,Se,{viewCount:0,likeCount:1,cluster:2,videos:3,query:4,lang:5,download:6})}}function Qe(r,e,n){const t=r.slice();return t[9]=e[n],t}function Ge(r){let e,n;return e=new vt({props:{video:r[9]}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){b(e,t,o),n=!0},p:xe,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function yt(r){let e,n,t,o,s,m;n=new xt({props:{viewCount:r[4],likeCount:r[5],cluster:r[1],videos:r[0],query:r[2],lang:r[3],download:r[6]}});let d=Fe(r[0]),i=[];for(let l=0;l<d.length;l+=1)i[l]=Ge(Qe(r,d,l));const q=l=>p(i[l],1,1,()=>{i[l]=null});return{c(){e=N("div"),w(n.$$.fragment),t=V(),o=N("div"),s=N("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=S(l,"DIV",{class:!0});var c=P(e);k(n.$$.fragment,c),t=T(c),o=S(c,"DIV",{class:!0});var f=P(o);s=S(f,"DIV",{class:!0});var D=P(s);for(let L=0;L<i.length;L+=1)i[L].l(D);D.forEach(v),f.forEach(v),c.forEach(v),this.h()},h(){y(s,"class","p-s grid-1-s s:grid-2-s l:grid-3-s xl:grid-4-s xl:grid-5-s xxl:grid-6-s"),y(o,"class","container"),y(e,"class","page")},m(l,c){G(l,e,c),b(n,e,null),u(e,t),u(e,o),u(o,s);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(s,null);m=!0},p(l,[c]){if(c&1){d=Fe(l[0]);let f;for(f=0;f<d.length;f+=1){const D=Qe(l,d,f);i[f]?(i[f].p(D,c),g(i[f],1)):(i[f]=Ge(D),i[f].c(),g(i[f],1),i[f].m(s,null))}for(We(),f=d.length;f<i.length;f+=1)q(f);Xe()}},i(l){if(!m){g(n.$$.fragment,l);for(let c=0;c<d.length;c+=1)g(i[c]);m=!0}},o(l){p(n.$$.fragment,l),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)p(i[c]);m=!1},d(l){l&&v(e),x(n),at(i,l)}}}function Dt(r,e,n){let{data:t}=e;const{videos:o,cluster:s,query:m,lang:d,downloadData:i}=t,q=Number(He(o,f=>f.view_count)).toLocaleString(),l=Number(He(o,f=>f.like_count)).toLocaleString(),c=()=>{const f=i[0][1],D=tt([["query","cluster","number_of_videos","hashtag","language"]].concat(f.map(B=>[m,s.label,B.videosNumber,B.text,d])));var R="data:text/csv;charset=utf-8,"+encodeURIComponent(D),_=document.createElement("a");_.setAttribute("href",R),_.setAttribute("download",`tiktok-topics-hashtags_${m}_${d}.csv`),document.body.appendChild(_),_.click()};return r.$$set=f=>{"data"in f&&n(7,t=f.data)},[o,s,m,d,q,l,c,t]}class jt extends Pe{constructor(e){super(),Ue(this,e,Dt,yt,Se,{data:7})}}export{jt as component,Ot as universal};
