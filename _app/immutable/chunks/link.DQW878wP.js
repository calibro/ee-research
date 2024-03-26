import{s as R,f as z,h as S,d as j,e as A,j as B,n as U,a as L,u as P,g as T,b as q}from"./scheduler.DhL_NTdI.js";import{S as D,i as F,k as b,l as k,e as C,c as E,a as H,d as p,A as w,g as I,B as N,y as W,z as G,H as J,v as K,o as M}from"./index.BoqPf9FP.js";import{g as O}from"./spread.CN4WR7uZ.js";import{b as Q}from"./paths.D8XUMpaa.js";const V=(l="")=>{if(!l)return;const e=l.replace("./","/");return e.startsWith("http")?e:`${Q}${e}`},ae=({width:l=150,height:e=300,bgColor:n="#ddd",dataUri:t=!0,charset:a="UTF-8",fluid:i=!1}={})=>{const f=`<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${e}" viewBox="0 0 ${l} ${e}" ${i?'preserveAspectRatio="none"':""}>
			<rect fill="${n}" width="${l}" height="${e}"/>
		</svg>`.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ").replace(/'/gim,"\\i");if(t){const o=encodeURIComponent(f).replace(/\(/g,"%28").replace(/\)/g,"%29");return`data:image/svg+xml;charset=${a},${o}`}return f},se=l=>{var e=l.replace(/[^0-9]/g,"");return parseInt(e,10)};function X(l){let e,n;return{c(){e=C("div"),n=new J(!1),this.h()},l(t){e=E(t,"DIV",{class:!0});var a=H(e);n=K(a,!1),a.forEach(p),this.h()},h(){n.a=null,M(e,"class","content svelte-zu0jc3")},m(t,a){I(t,e,a),n.m(l[2],e)},p(t,a){a&4&&n.p(t[2])},i:U,o:U,d(t){t&&p(e)}}}function Y(l){let e;const n=l[12].default,t=L(n,l,l[11],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){t&&t.p&&(!e||i&2048)&&P(t,n,a,a[11],e?q(n,a[11],i,null):T(a[11]),null)},i(a){e||(b(t,a),e=!0)},o(a){k(t,a),e=!1},d(a){t&&t.d(a)}}}function Z(l){let e,n,t,a,i,c,f,o,_,d;const h=[Y,X],u=[];function g(r,s){return r[9].default?0:1}n=g(l),t=u[n]=h[n](l);let v=[{href:l[6]},{target:a=l[3]||l[1]?"_blank":"_self"},{rel:i=l[7]?"external":void 0},{class:c="link "+l[0]+" "+(l[0]==="download"?"typo-label":"typo-p")+" "+l[8].class+" svelte-zu0jc3"},{download:f=l[3]?!0:void 0},{role:"button"},{tabindex:"0"}],m={};for(let r=0;r<v.length;r+=1)m=j(m,v[r]);return{c(){e=C(l[5]),t.c(),this.h()},l(r){e=E(r,(l[5]||"null").toUpperCase(),{href:!0,target:!0,rel:!0,class:!0,download:!0,role:!0,tabindex:!0});var s=H(e);t.l(s),s.forEach(p),this.h()},h(){w(l[5])(e,m)},m(r,s){I(r,e,s),u[n].m(e,null),o=!0,_||(d=N(e,"click",function(){B(l[4])&&l[4].apply(this,arguments)}),_=!0)},p(r,s){l=r;let y=n;n=g(l),n===y?u[n].p(l,s):(W(),k(u[y],1,1,()=>{u[y]=null}),G(),t=u[n],t?t.p(l,s):(t=u[n]=h[n](l),t.c()),b(t,1),t.m(e,null)),w(l[5])(e,m=O(v,[{href:l[6]},(!o||s&10&&a!==(a=l[3]||l[1]?"_blank":"_self"))&&{target:a},{rel:i},(!o||s&257&&c!==(c="link "+l[0]+" "+(l[0]==="download"?"typo-label":"typo-p")+" "+l[8].class+" svelte-zu0jc3"))&&{class:c},(!o||s&8&&f!==(f=l[3]?!0:void 0))&&{download:f},{role:"button"},{tabindex:"0"}]))},i(r){o||(b(t),o=!0)},o(r){k(t),o=!1},d(r){r&&p(e),u[n].d(),_=!1,d()}}}function x(l){let e,n=l[5]&&Z(l);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,a){n&&n.m(t,a),e=!0},p(t,[a]){t[5]&&n.p(t,a)},i(t){e||(b(n,t),e=!0)},o(t){k(n,t),e=!1},d(t){n&&n.d(t)}}}function $(l,e,n){const t=["url","theme","external","text","download","fn"];let a=z(e,t),{$$slots:i={},$$scope:c}=e;const f=S(i);let{url:o=null}=e,{theme:_="default"}=e,{external:d=!1}=e,{text:h=""}=e,{download:u=!1}=e,{fn:g=()=>{}}=e;const v=o?"a":"button",m=V(o),r=u||d;return l.$$set=s=>{e=j(j({},e),A(s)),n(8,a=z(e,t)),"url"in s&&n(10,o=s.url),"theme"in s&&n(0,_=s.theme),"external"in s&&n(1,d=s.external),"text"in s&&n(2,h=s.text),"download"in s&&n(3,u=s.download),"fn"in s&&n(4,g=s.fn),"$$scope"in s&&n(11,c=s.$$scope)},[_,d,h,u,g,v,m,r,a,f,o,c,i]}class re extends D{constructor(e){super(),F(this,e,$,x,R,{url:10,theme:0,external:1,text:2,download:3,fn:4})}}export{re as L,se as e,ae as g};
