import{s as B,l as K,e as g,a as O,c as $,b as k,f as v,g as j,p as _,i as z,h as y,B as A,u as F,m as G,o as H,D as J,E as N,n as P}from"./scheduler.DjmlZpBi.js";import{S as Q,i as R,c as M,b as V,m as S,t as w,e as C,a as E,d as q}from"./index.D5mPgV2_.js";import{f as L}from"./index.BWSmiydm.js";import{C as T}from"./close.DhimUgka.js";import{L as U}from"./link.Dc71JU5M.js";const W=l=>({}),I=l=>({class:"modal-inner"});function X(l){let t,a;return t=new T({props:{width:"24"}}),{c(){M(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,o){S(t,n,o),a=!0},p:P,i(n){a||(w(t.$$.fragment,n),a=!0)},o(n){E(t.$$.fragment,n),a=!1},d(n){q(t,n)}}}function Y(l){let t,a,n,o,f,m,u,c,s,h,b;o=new U({props:{fn:l[0],$$slots:{default:[X]},$$scope:{ctx:l}}});const p=l[3].default,i=K(p,l,l[4],I);return{c(){t=g("div"),a=g("div"),n=g("div"),M(o.$$.fragment),m=O(),i&&i.c(),this.h()},l(e){t=$(e,"DIV",{class:!0});var r=k(t);a=$(r,"DIV",{class:!0});var d=k(a);n=$(d,"DIV",{class:!0});var D=k(n);V(o.$$.fragment,D),D.forEach(v),m=j(d),i&&i.l(d),d.forEach(v),r.forEach(v),this.h()},h(){_(n,"class",f="close "+l[1]+" svelte-10iy3kc"),_(a,"class",u="relative modal-content flex-center-center "+l[1]+" svelte-10iy3kc"),_(t,"class","modal flex-center-center svelte-10iy3kc")},m(e,r){z(e,t,r),y(t,a),y(a,n),S(o,n,null),y(a,m),i&&i.m(a,null),s=!0,h||(b=A(window,"keydown",l[2]),h=!0)},p(e,[r]){const d={};r&1&&(d.fn=e[0]),r&16&&(d.$$scope={dirty:r,ctx:e}),o.$set(d),(!s||r&2&&f!==(f="close "+e[1]+" svelte-10iy3kc"))&&_(n,"class",f),i&&i.p&&(!s||r&16)&&F(i,p,e,e[4],s?H(p,e[4],r,W):G(e[4]),I),(!s||r&2&&u!==(u="relative modal-content flex-center-center "+e[1]+" svelte-10iy3kc"))&&_(a,"class",u)},i(e){s||(w(o.$$.fragment,e),w(i,e),e&&J(()=>{s&&(c||(c=C(t,L,{duration:300},!0)),c.run(1))}),s=!0)},o(e){E(o.$$.fragment,e),E(i,e),e&&(c||(c=C(t,L,{duration:300},!1)),c.run(0)),s=!1},d(e){e&&v(t),q(o),i&&i.d(e),e&&c&&c.end(),h=!1,b()}}}function Z(l,t,a){let{$$slots:n={},$$scope:o}=t,{fn:f=()=>{}}=t,{theme:m="default"}=t;const u=s=>{s.key==="Escape"&&f()};N(async()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}));const c=s=>{!s.target.closest(".modal-inner")&&s.target.closest(".modal")&&f()};return l.$$set=s=>{"fn"in s&&a(0,f=s.fn),"theme"in s&&a(1,m=s.theme),"$$scope"in s&&a(4,o=s.$$scope)},[f,m,u,n,o]}class ae extends Q{constructor(t){super(),R(this,t,Z,Y,B,{fn:0,theme:1})}}export{ae as M};