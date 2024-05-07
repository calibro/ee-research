import{b as Xe}from"../chunks/entry.COMrkacz.js";import{g as Ye,c as Je,l as Ve}from"../chunks/index.BWSmiydm.js";import{s as xe,q as me,r as Ke,H as We,v as et,b as z,w as tt,f as w,x as be,i as K,n as ne,y as _e,e as P,a as N,F as pe,c as U,g as F,p as y,A as we,h as x,B as Ue,T as it,z as ut,S as ft,k as Ie,E as ct,Q as mt,U as Se,V as nt}from"../chunks/scheduler.DjmlZpBi.js";import{S as Me,i as $e,c as O,b as Z,m as G,t as M,g as ve,f as ye,a as E,d as R}from"../chunks/index.D5mPgV2_.js";import{g as ht}from"../chunks/globals.D0QH3NT1.js";import{e as ke,u as gt,o as dt}from"../chunks/each.K9NGHkqs.js";import{L as bt,S as _t,q as Te,a as pt,g as wt,c as vt,b as yt}from"../chunks/sidebar.DvQq3ExQ.js";import{l as kt,c as Ct}from"../chunks/lockscroll.BhoOIQDF.js";import{g as rt}from"../chunks/spread.CN4WR7uZ.js";import{P as xt,L as Mt}from"../chunks/play.C8UkVpoY.js";import{c as Ae}from"../chunks/link.cl7uhYL1.js";import{M as $t}from"../chunks/modal.MynopvKR.js";import{T as ce}from"../chunks/text.DH_QAwnB.js";function qt(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ce(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function Et(t){return t=Ce(Math.abs(t)),t?t[1]:NaN}function It(t,e){return function(n,r){for(var o=n.length,s=[],a=0,l=t[0],u=0;o>0&&l>0&&(u+l+1>r&&(l=Math.max(1,r-u)),s.push(n.substring(o-=l,o+l)),!((u+=l+1)>r));)l=t[a=(a+1)%t.length];return s.reverse().join(e)}}function St(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var Tt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function De(t){if(!(e=Tt.exec(t)))throw new Error("invalid format: "+t);var e;return new Le({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}De.prototype=Le.prototype;function Le(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}Le.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Vt(t){e:for(var e=t.length,n=1,r=-1,o;n<e;++n)switch(t[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+t[n])break e;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(o+1):t}var st;function At(t,e){var n=Ce(t,e);if(!n)return t+"";var r=n[0],o=n[1],s=o-(st=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,a=r.length;return s===a?r:s>a?r+new Array(s-a+1).join("0"):s>0?r.slice(0,s)+"."+r.slice(s):"0."+new Array(1-s).join("0")+Ce(t,Math.max(0,e+s-1))[0]}function je(t,e){var n=Ce(t,e);if(!n)return t+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const ze={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:qt,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>je(t*100,e),r:je,s:At,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function He(t){return t}var Be=Array.prototype.map,Ne=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Dt(t){var e=t.grouping===void 0||t.thousands===void 0?He:It(Be.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",o=t.decimal===void 0?".":t.decimal+"",s=t.numerals===void 0?He:St(Be.call(t.numerals,String)),a=t.percent===void 0?"%":t.percent+"",l=t.minus===void 0?"−":t.minus+"",u=t.nan===void 0?"NaN":t.nan+"";function b(g){g=De(g);var k=g.fill,c=g.align,f=g.sign,v=g.symbol,S=g.zero,d=g.width,H=g.comma,Q=g.precision,X=g.trim,m=g.type;m==="n"?(H=!0,m="g"):ze[m]||(Q===void 0&&(Q=12),X=!0,m="g"),(S||k==="0"&&c==="=")&&(S=!0,k="0",c="=");var B=v==="$"?n:v==="#"&&/[boxX]/.test(m)?"0"+m.toLowerCase():"",L=v==="$"?r:/[%p]/.test(m)?a:"",W=ze[m],$=/[defgprs%]/.test(m);Q=Q===void 0?6:/[gprs]/.test(m)?Math.max(1,Math.min(21,Q)):Math.max(0,Math.min(20,Q));function _(h){var A=B,q=L,D,te,se;if(m==="c")q=W(h)+q,h="";else{h=+h;var Y=h<0||1/h<0;if(h=isNaN(h)?u:W(Math.abs(h),Q),X&&(h=Vt(h)),Y&&+h==0&&f!=="+"&&(Y=!1),A=(Y?f==="("?f:l:f==="-"||f==="("?"":f)+A,q=(m==="s"?Ne[8+st/3]:"")+q+(Y&&f==="("?")":""),$){for(D=-1,te=h.length;++D<te;)if(se=h.charCodeAt(D),48>se||se>57){q=(se===46?o+h.slice(D+1):h.slice(D))+q,h=h.slice(0,D);break}}}H&&!S&&(h=e(h,1/0));var re=A.length+h.length+q.length,j=re<d?new Array(d-re+1).join(k):"";switch(H&&S&&(h=e(j+h,j.length?d-q.length:1/0),j=""),c){case"<":h=A+h+q+j;break;case"=":h=A+j+h+q;break;case"^":h=j.slice(0,re=j.length>>1)+A+h+q+j.slice(re);break;default:h=j+A+h+q;break}return s(h)}return _.toString=function(){return g+""},_}function I(g,k){var c=b((g=De(g),g.type="f",g)),f=Math.max(-8,Math.min(8,Math.floor(Et(k)/3)))*3,v=Math.pow(10,-f),S=Ne[8+f/3];return function(d){return c(v*d)+S}}return{format:b,formatPrefix:I}}var de,at;Lt({thousands:",",grouping:[3],currency:["$",""]});function Lt(t){return de=Dt(t),at=de.format,de.formatPrefix,de}const Pt=!1,Ut=!0,jt=!1;async function zt({params:t,fetch:e}){const n=`${Xe}/assets/youtube/queries.csv`,{data:r,error:o}=await Ye({key:"youtube-queries",url:n,type:"text"},e);if(!r||o)return console.error("error",o),o(404,"Not found");const s=Je(r);return s.sort((a,l)=>a.queryLabel.localeCompare(l.queryLabel)),{queries:s}}const bn=Object.freeze(Object.defineProperty({__proto__:null,csr:Ut,load:zt,prerender:Pt,ssr:jt},Symbol.toStringTag,{value:"Module"}));function Ht(t){let e,n,r='<path d="M1.75 0C0.784766 0 0 0.784799 0 1.75008V9.62541C0 10.5907 0.784766 11.3755 1.75 11.3755H4.375V13.5631C4.375 13.7299 4.46797 13.8803 4.61562 13.9541C4.76328 14.0279 4.94102 14.0115 5.075 13.9131L8.45742 11.3755H12.25C13.2152 11.3755 14 10.5907 14 9.62541V1.75008C14 0.784799 13.2152 0 12.25 0H1.75Z" fill="black"/>',o=[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],s={};for(let a=0;a<o.length;a+=1)s=me(s,o[a]);return{c(){e=Ke("svg"),n=new We(!0),this.h()},l(a){e=et(a,"svg",{viewBox:!0,fill:!0,xmlns:!0});var l=z(e);n=tt(l,!0),l.forEach(w),this.h()},h(){n.a=null,be(e,s)},m(a,l){K(a,e,l),n.m(r,e)},p(a,[l]){be(e,s=rt(o,[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l&1&&a[0]]))},i:ne,o:ne,d(a){a&&w(e)}}}function Bt(t,e,n){return t.$$set=r=>{n(0,e=me(me({},e),_e(r)))},e=_e(e),[e]}class Nt extends Me{constructor(e){super(),$e(this,e,Bt,Ht,xe,{})}}function Ft(t){let e,n,r='<path d="M7 0C3.13306 0 0 3.13306 0 7C0 10.8669 3.13306 14 7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0ZM9.6106 8.83468L9.04609 9.54032C9.00904 9.58664 8.96323 9.62521 8.91128 9.65382C8.85933 9.68243 8.80225 9.70053 8.74331 9.70708C8.68436 9.71364 8.6247 9.70851 8.56773 9.69201C8.51076 9.6755 8.4576 9.64794 8.41129 9.61089L6.52016 8.2075C6.38802 8.10171 6.28137 7.96755 6.20808 7.81497C6.13479 7.66239 6.09675 7.49528 6.09677 7.32601V2.93548C6.09677 2.81571 6.14435 2.70084 6.22905 2.61615C6.31374 2.53145 6.42861 2.48387 6.54839 2.48387H7.45161C7.57139 2.48387 7.68626 2.53145 7.77095 2.61615C7.85565 2.70084 7.90323 2.81571 7.90323 2.93548V7L9.54032 8.1996C9.58666 8.23667 9.62524 8.2825 9.65385 8.33449C9.68246 8.38648 9.70055 8.44359 9.70708 8.50257C9.7136 8.56155 9.70844 8.62124 9.69189 8.67822C9.67534 8.73521 9.64771 8.78837 9.6106 8.83468Z" fill="black"/>',o=[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],s={};for(let a=0;a<o.length;a+=1)s=me(s,o[a]);return{c(){e=Ke("svg"),n=new We(!0),this.h()},l(a){e=et(a,"svg",{viewBox:!0,fill:!0,xmlns:!0});var l=z(e);n=tt(l,!0),l.forEach(w),this.h()},h(){n.a=null,be(e,s)},m(a,l){K(a,e,l),n.m(r,e)},p(a,[l]){be(e,s=rt(o,[{viewBox:"0 0 14 14"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l&1&&a[0]]))},i:ne,o:ne,d(a){a&&w(e)}}}function Ot(t,e,n){return t.$$set=r=>{n(0,e=me(me({},e),_e(r)))},e=_e(e),[e]}class Zt extends Me{constructor(e){super(),$e(this,e,Ot,Ft,xe,{})}}function Fe(t,e,n){const r=t.slice();return r[14]=e[n],r}function Oe(t){let e,n;return e=new bt({props:{label:t[14],color:Ve[t[14].toLowerCase()].color}}),{c(){O(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,o){G(e,r,o),n=!0},p(r,o){const s={};o&16&&(s.label=r[14]),o&16&&(s.color=Ve[r[14].toLowerCase()].color),e.$set(s)},i(r){n||(M(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function Ze(t){let e,n;return e=new $t({props:{theme:"no-bg",fn:t[13],$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,o){G(e,r,o),n=!0},p(r,o){const s={};o&513&&(s.fn=r[13]),o&131073&&(s.$$scope={dirty:o,ctx:r}),e.$set(s)},i(r){n||(M(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function Gt(t){let e,n,r;return{c(){e=P("div"),n=P("iframe"),this.h()},l(o){e=U(o,"DIV",{class:!0});var s=z(e);n=U(s,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),z(n).forEach(w),s.forEach(w),this.h()},h(){we(n.src,r="https://www.youtube.com/embed/"+t[0])||y(n,"src",r),y(n,"title",""),y(n,"frameborder","0"),y(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,y(n,"class","svelte-b5tcgb"),y(e,"class","youtube-iframe svelte-b5tcgb")},m(o,s){K(o,e,s),x(e,n)},p(o,s){s&1&&!we(n.src,r="https://www.youtube.com/embed/"+o[0])&&y(n,"src",r)},d(o){o&&w(e)}}}function Rt(t){let e,n,r,o,s,a,l,u,b,I,g,k,c,f,v,S,d,H,Q,X,m,B,L,W,$,_,h,A,q,D,te,se,Y,re,j,fe,qe,Pe,ae=ke(t[4]),C=[];for(let i=0;i<ae.length;i+=1)C[i]=Oe(Fe(t,ae,i));const lt=i=>E(C[i],1,1,()=>{C[i]=null});I=new ce({props:{content:t[2],typo:"p"}}),k=new ce({props:{content:t[3],typo:"p"}}),S=new xt({props:{width:"14"}}),H=new ce({props:{content:t[10](t[5]),typo:"xs"}}),m=new Mt({props:{width:"14"}}),L=new ce({props:{content:t[10](t[6]),typo:"xs"}}),_=new Nt({props:{width:"14"}}),A=new ce({props:{content:t[10](t[7])||0,typo:"xs"}}),te=new Zt({props:{width:"14"}}),Y=new ce({props:{content:Ae(t[8]),typo:"xs"}});let T=t[9]&&Ze(t);return{c(){e=P("button"),n=P("div"),r=P("img"),s=N(),a=P("div");for(let i=0;i<C.length;i+=1)C[i].c();l=N(),u=P("div"),b=P("div"),O(I.$$.fragment),g=N(),O(k.$$.fragment),c=N(),f=P("div"),v=P("div"),O(S.$$.fragment),d=N(),O(H.$$.fragment),Q=N(),X=P("div"),O(m.$$.fragment),B=N(),O(L.$$.fragment),W=N(),$=P("div"),O(_.$$.fragment),h=N(),O(A.$$.fragment),q=N(),D=P("div"),O(te.$$.fragment),se=N(),O(Y.$$.fragment),re=N(),T&&T.c(),j=pe(),this.h()},l(i){e=U(i,"BUTTON",{class:!0});var p=z(e);n=U(p,"DIV",{class:!0});var J=z(n);r=U(J,"IMG",{class:!0,src:!0,alt:!0}),s=F(J),a=U(J,"DIV",{class:!0});var he=z(a);for(let Ee=0;Ee<C.length;Ee+=1)C[Ee].l(he);he.forEach(w),J.forEach(w),l=F(p),u=U(p,"DIV",{class:!0});var oe=z(u);b=U(oe,"DIV",{class:!0});var le=z(b);Z(I.$$.fragment,le),g=F(le),Z(k.$$.fragment,le),le.forEach(w),c=F(oe),f=U(oe,"DIV",{class:!0});var ee=z(f);v=U(ee,"DIV",{class:!0});var ie=z(v);Z(S.$$.fragment,ie),d=F(ie),Z(H.$$.fragment,ie),ie.forEach(w),Q=F(ee),X=U(ee,"DIV",{class:!0});var V=z(X);Z(m.$$.fragment,V),B=F(V),Z(L.$$.fragment,V),V.forEach(w),W=F(ee),$=U(ee,"DIV",{class:!0});var ue=z($);Z(_.$$.fragment,ue),h=F(ue),Z(A.$$.fragment,ue),ue.forEach(w),q=F(ee),D=U(ee,"DIV",{class:!0});var ge=z(D);Z(te.$$.fragment,ge),se=F(ge),Z(Y.$$.fragment,ge),ge.forEach(w),ee.forEach(w),oe.forEach(w),p.forEach(w),re=F(i),T&&T.l(i),j=pe(),this.h()},h(){y(r,"class","thumb svelte-b5tcgb"),we(r.src,o=t[1])||y(r,"src",o),y(r,"alt",t[2]),y(a,"class","langs flex gap-xs svelte-b5tcgb"),y(n,"class","relative img-container svelte-b5tcgb"),y(b,"class","title py-s svelte-b5tcgb"),y(v,"class","flex gap-xxs"),y(X,"class","flex gap-xxs"),y($,"class","flex gap-xxs"),y(D,"class","flex gap-xxs"),y(f,"class","interactions svelte-b5tcgb"),y(u,"class","info svelte-b5tcgb"),y(e,"class","youtube-thumb text-left svelte-b5tcgb")},m(i,p){K(i,e,p),x(e,n),x(n,r),x(n,s),x(n,a);for(let J=0;J<C.length;J+=1)C[J]&&C[J].m(a,null);x(e,l),x(e,u),x(u,b),G(I,b,null),x(b,g),G(k,b,null),x(u,c),x(u,f),x(f,v),G(S,v,null),x(v,d),G(H,v,null),x(f,Q),x(f,X),G(m,X,null),x(X,B),G(L,X,null),x(f,W),x(f,$),G(_,$,null),x($,h),G(A,$,null),x(f,q),x(f,D),G(te,D,null),x(D,se),G(Y,D,null),K(i,re,p),T&&T.m(i,p),K(i,j,p),fe=!0,qe||(Pe=[Ue(e,"click",t[11]),Ue(e,"keydown",t[12])],qe=!0)},p(i,[p]){if((!fe||p&2&&!we(r.src,o=i[1]))&&y(r,"src",o),(!fe||p&4)&&y(r,"alt",i[2]),p&16){ae=ke(i[4]);let V;for(V=0;V<ae.length;V+=1){const ue=Fe(i,ae,V);C[V]?(C[V].p(ue,p),M(C[V],1)):(C[V]=Oe(ue),C[V].c(),M(C[V],1),C[V].m(a,null))}for(ve(),V=ae.length;V<C.length;V+=1)lt(V);ye()}const J={};p&4&&(J.content=i[2]),I.$set(J);const he={};p&8&&(he.content=i[3]),k.$set(he);const oe={};p&32&&(oe.content=i[10](i[5])),H.$set(oe);const le={};p&64&&(le.content=i[10](i[6])),L.$set(le);const ee={};p&128&&(ee.content=i[10](i[7])||0),A.$set(ee);const ie={};p&256&&(ie.content=Ae(i[8])),Y.$set(ie),i[9]?T?(T.p(i,p),p&512&&M(T,1)):(T=Ze(i),T.c(),M(T,1),T.m(j.parentNode,j)):T&&(ve(),E(T,1,1,()=>{T=null}),ye())},i(i){if(!fe){for(let p=0;p<ae.length;p+=1)M(C[p]);M(I.$$.fragment,i),M(k.$$.fragment,i),M(S.$$.fragment,i),M(H.$$.fragment,i),M(m.$$.fragment,i),M(L.$$.fragment,i),M(_.$$.fragment,i),M(A.$$.fragment,i),M(te.$$.fragment,i),M(Y.$$.fragment,i),M(T),fe=!0}},o(i){C=C.filter(Boolean);for(let p=0;p<C.length;p+=1)E(C[p]);E(I.$$.fragment,i),E(k.$$.fragment,i),E(S.$$.fragment,i),E(H.$$.fragment,i),E(m.$$.fragment,i),E(L.$$.fragment,i),E(_.$$.fragment,i),E(A.$$.fragment,i),E(te.$$.fragment,i),E(Y.$$.fragment,i),E(T),fe=!1},d(i){i&&(w(e),w(re),w(j)),it(C,i),R(I),R(k),R(S),R(H),R(m),R(L),R(_),R(A),R(te),R(Y),T&&T.d(i),qe=!1,ut(Pe)}}}function Qt(t,e,n){let{thumb:r}=e,{title:o}=e,{tubeId:s}=e,{channel:a}=e,{langs:l}=e,{views:u}=e,{likes:b}=e,{comments:I}=e,{date:g}=e,k=!1;const c=d=>at(".0s")(d),f=()=>n(9,k=!0),v=d=>{d.key==="Enter"&&n(9,k=!0)},S=()=>{n(9,k=!1),n(0,s=!1)};return t.$$set=d=>{"thumb"in d&&n(1,r=d.thumb),"title"in d&&n(2,o=d.title),"tubeId"in d&&n(0,s=d.tubeId),"channel"in d&&n(3,a=d.channel),"langs"in d&&n(4,l=d.langs),"views"in d&&n(5,u=d.views),"likes"in d&&n(6,b=d.likes),"comments"in d&&n(7,I=d.comments),"date"in d&&n(8,g=d.date)},[s,r,o,a,l,u,b,I,g,k,c,f,v,S]}class Xt extends Me{constructor(e){super(),$e(this,e,Qt,Rt,xe,{thumb:1,title:2,tubeId:0,channel:3,langs:4,views:5,likes:6,comments:7,date:8})}}const{document:Yt}=ht;function Ge(t,e,n){const r=t.slice();return r[19]=e[n],r[21]=n,r}function Jt(t){let e,n=[],r=new Map,o,s=ke(t[1]);const a=l=>`${l[19][0]}-${l[21]}`;for(let l=0;l<s.length;l+=1){let u=Ge(t,s,l),b=a(u);r.set(b,n[l]=Re(b,u))}return{c(){e=P("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=U(l,"DIV",{class:!0});var u=z(e);for(let b=0;b<n.length;b+=1)n[b].l(u);u.forEach(w),this.h()},h(){y(e,"class","container p-s grid-1-s s:grid-2-s xl:grid-3-s xxl:grid-4-s svelte-15scxqn")},m(l,u){K(l,e,u);for(let b=0;b<n.length;b+=1)n[b]&&n[b].m(e,null);o=!0},p(l,u){u&2&&(s=ke(l[1]),ve(),n=gt(n,u,a,1,l,s,r,e,dt,Re,null,Ge),ye())},i(l){if(!o){for(let u=0;u<s.length;u+=1)M(n[u]);o=!0}},o(l){for(let u=0;u<n.length;u+=1)E(n[u]);o=!1},d(l){l&&w(e);for(let u=0;u<n.length;u+=1)n[u].d()}}}function Kt(t){let e,n="<p>No data available</p>";return{c(){e=P("div"),e.innerHTML=n,this.h()},l(r){e=U(r,"DIV",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-kunnt3"&&(e.innerHTML=n),this.h()},h(){y(e,"class","container flex-center-center svelte-15scxqn")},m(r,o){K(r,e,o)},p:ne,i:ne,o:ne,d(r){r&&w(e)}}}function Wt(t){let e,n="<p>Loading...</p>";return{c(){e=P("div"),e.innerHTML=n,this.h()},l(r){e=U(r,"DIV",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-qdph03"&&(e.innerHTML=n),this.h()},h(){y(e,"class","container flex-center-center svelte-15scxqn")},m(r,o){K(r,e,o)},p:ne,i:ne,o:ne,d(r){r&&w(e)}}}function Re(t,e){let n,r,o;return r=new Xt({props:{tubeId:e[19][0],title:e[19][1][0].label,thumb:e[19][1][0].thumb,langs:e[19][1].map(Qe),channel:e[19][1][0].channelTitle,views:e[19][1][0].viewCount,likes:e[19][1][0].likeCount,comments:e[19][1][0].commentCount,date:e[19][1][0].publishedAtUnix}}),{key:t,first:null,c(){n=pe(),O(r.$$.fragment),this.h()},l(s){n=pe(),Z(r.$$.fragment,s),this.h()},h(){this.first=n},m(s,a){K(s,n,a),G(r,s,a),o=!0},p(s,a){e=s;const l={};a&2&&(l.tubeId=e[19][0]),a&2&&(l.title=e[19][1][0].label),a&2&&(l.thumb=e[19][1][0].thumb),a&2&&(l.langs=e[19][1].map(Qe)),a&2&&(l.channel=e[19][1][0].channelTitle),a&2&&(l.views=e[19][1][0].viewCount),a&2&&(l.likes=e[19][1][0].likeCount),a&2&&(l.comments=e[19][1][0].commentCount),a&2&&(l.date=e[19][1][0].publishedAtUnix),r.$set(l)},i(s){o||(M(r.$$.fragment,s),o=!0)},o(s){E(r.$$.fragment,s),o=!1},d(s){s&&w(n),R(r,s)}}}function en(t){let e,n,r,o,s,a,l,u,b;r=new _t({props:{queries:t[2],checkbox:!0,order:!0,description:t[4]("description"),question:t[4]("research_question"),topic:ot,download:t[8]}});const I=[Wt,Kt,Jt],g=[];function k(c,f){var v;return c[0]?0:(v=c[1])!=null&&v.length?2:1}return s=k(t),a=g[s]=I[s](t),{c(){e=N(),n=P("div"),O(r.$$.fragment),o=N(),a.c(),this.h()},l(c){e=F(c),n=U(c,"DIV",{class:!0});var f=z(n);Z(r.$$.fragment,f),o=F(f),a.l(f),f.forEach(w),this.h()},h(){y(n,"class","page xl:flex-start-start")},m(c,f){K(c,e,f),K(c,n,f),G(r,n,null),x(n,o),g[s].m(n,null),l=!0,u||(b=ft(kt.call(null,Yt.body,t[3])),u=!0)},p(c,[f]){let v=s;s=k(c),s===v?g[s].p(c,f):(ve(),E(g[v],1,1,()=>{g[v]=null}),ye(),a=g[s],a?a.p(c,f):(a=g[s]=I[s](c),a.c()),M(a,1),a.m(n,null))},i(c){l||(M(r.$$.fragment,c),M(a),l=!0)},o(c){E(r.$$.fragment,c),E(a),l=!1},d(c){c&&(w(e),w(n)),R(r),g[s].d(),u=!1,b()}}}const ot="youtube_language",Qe=t=>t.language;function tn(t,e,n){let r,o,s,a,l,u,{data:b}=e;const{queries:I}=b,g=Ct(),k=wt(ot);let c,f=!1,v=Te("query");Ie(t,v,m=>n(13,a=m));let S=Te("lang");Ie(t,S,m=>n(15,u=m));let d=Te("order");Ie(t,d,m=>n(14,l=m)),ct(async()=>{var m;await mt(),a||Se(v,a=(m=I[0])==null?void 0:m.query,a),u||Se(S,u="en fr nl ph",u),l||Se(d,l="views",l)});const H=`${Xe}/assets/youtube`,Q=async()=>{if(f||!yt||!o)return;if(n(0,f=!0),!a){n(0,f=!1),n(10,c=null);return}const{data:m,error:B}=await Ye({key:"youtube-comparison-data",url:o,type:"text"});m?n(10,c=vt(Je(m),L=>L.language)):n(10,c=null),n(0,f=!1)},X=()=>{if(s!=null&&s.length){const L=s.map(_=>{const h=_[1].length>1?_[1].map(A=>{var q,D;return(D=(q=A.language)==null?void 0:q.split)==null?void 0:D.call(q,"|")}).join("|"):_[1][0].language;return{..._[1][0],languages:h}}),W=[["title","author","link","views","comments","likes","date","query","languages"],...L.map(_=>[_.label,_.channelTitle,`https://www.youtube.com/v/${_.name}`,_.viewCount||"---",_.commentCount||"---",_.likeCount||"---",Ae(_.publishedAtUnix)||"---",I.find(h=>h.query===a).queryLabel||"---",_.languages||"---"])].map(_=>_.join(",")).join(`
`);var m="data:text/csv;charset=utf-8,"+encodeURIComponent(W),B=document.createElement("a");B.setAttribute("href",m),B.setAttribute("download","my_data.csv"),document.body.appendChild(B),B.click()}};return t.$$set=m=>{"data"in m&&n(9,b=m.data)},t.$$.update=()=>{var m,B,L,W;t.$$.dirty&32768&&n(11,r=u?(L=(m=u==null?void 0:u.split)==null?void 0:(B=m.call(u," ")).map)==null?void 0:L.call(B,$=>Ve[$]):[]),t.$$.dirty&10240&&n(12,o=r!=null&&r.length?`${H}/data/${a}.csv`:void 0),t.$$.dirty&4096&&Q(),t.$$.dirty&19456&&n(1,s=r!=null&&r.length&&(c!=null&&c.size)?pt((W=r==null?void 0:r.map)==null?void 0:W.call(r,$=>c.get($.code.toUpperCase())).flat(),$=>$.name).sort(($,_)=>{switch(l){case"views":return _[1][0].viewCount-$[1][0].viewCount;case"likes":return _[1][0].likeCount-$[1][0].likeCount;case"comments":return _[1][0].commentCount-$[1][0].commentCount;case"date":return _[1][0].publishedAtUnix-$[1][0].publishedAtUnix;default:return 0}}):void 0)},[f,s,I,g,k,v,S,d,X,b,c,r,o,a,l,u]}class _n extends Me{constructor(e){super(),$e(this,e,tn,en,xe,{data:9})}}export{_n as component,bn as universal};