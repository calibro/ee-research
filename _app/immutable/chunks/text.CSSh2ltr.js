import{s as N,F as p,i as c,f as u,G as E,I as D,y as d,D as F,n as S,J as v,e as T,t as G,c as U,b as j,d as I,K as y,h as J,j as K,l as P,u as z,m as A,o as B}from"./scheduler.Q8VTVPGx.js";import{S as H,i as L,g as M,a as h,e as O,t as b}from"./index.BzUwEaKY.js";import{g as q}from"./spread.CN4WR7uZ.js";function Q(o){let e=o[0],s,i=o[0]&&g(o);return{c(){i&&i.c(),s=p()},l(l){i&&i.l(l),s=p()},m(l,t){i&&i.m(l,t),c(l,s,t)},p(l,t){l[0]?e?N(e,l[0])?(i.d(1),i=g(l),e=l[0],i.c(),i.m(s.parentNode,s)):i.p(l,t):(i=g(l),e=l[0],i.c(),i.m(s.parentNode,s)):e&&(i.d(1),i=null,e=l[0])},i:S,o:S,d(l){l&&u(s),i&&i.d(l)}}}function R(o){let e=o[0],s,i,l=o[0]&&k(o);return{c(){l&&l.c(),s=p()},l(t){l&&l.l(t),s=p()},m(t,a){l&&l.m(t,a),c(t,s,a),i=!0},p(t,a){t[0]?e?N(e,t[0])?(l.d(1),l=k(t),e=t[0],l.c(),l.m(s.parentNode,s)):l.p(t,a):(l=k(t),e=t[0],l.c(),l.m(s.parentNode,s)):e&&(l.d(1),l=null,e=t[0])},i(t){i||(b(l,t),i=!0)},o(t){h(l,t),i=!1},d(t){t&&u(s),l&&l.d(t)}}}function g(o){let e,s,i,l=[{class:i=v(`typo-${o[2]} ${o[5].class||""} ${o[3]?"ellipsis":""}`)+" svelte-1wpoiyl"}],t={};for(let a=0;a<l.length;a+=1)t=d(t,l[a]);return{c(){e=T(o[0]),s=G(o[1]),this.h()},l(a){e=U(a,(o[0]||"null").toUpperCase(),{class:!0});var f=j(e);s=I(f,o[1]),f.forEach(u),this.h()},h(){y(o[0])(e,t)},m(a,f){c(a,e,f),J(e,s)},p(a,f){f&2&&K(s,a[1]),y(a[0])(e,t=q(l,[f&44&&i!==(i=v(`typo-${a[2]} ${a[5].class||""} ${a[3]?"ellipsis":""}`)+" svelte-1wpoiyl")&&{class:i}]))},d(a){a&&u(e)}}}function k(o){let e,s,i;const l=o[7].default,t=P(l,o,o[6],null);let a=[{class:s=v(`typo-${o[2]} ${o[5].class||""} ${o[3]?"ellipsis":""}`)+" svelte-1wpoiyl"}],f={};for(let n=0;n<a.length;n+=1)f=d(f,a[n]);return{c(){e=T(o[0]),t&&t.c(),this.h()},l(n){e=U(n,(o[0]||"null").toUpperCase(),{class:!0});var _=j(e);t&&t.l(_),_.forEach(u),this.h()},h(){y(o[0])(e,f)},m(n,_){c(n,e,_),t&&t.m(e,null),i=!0},p(n,_){t&&t.p&&(!i||_&64)&&z(t,l,n,n[6],i?B(l,n[6],_,null):A(n[6]),null),y(n[0])(e,f=q(a,[(!i||_&44&&s!==(s=v(`typo-${n[2]} ${n[5].class||""} ${n[3]?"ellipsis":""}`)+" svelte-1wpoiyl"))&&{class:s}]))},i(n){i||(b(t,n),i=!0)},o(n){h(t,n),i=!1},d(n){n&&u(e),t&&t.d(n)}}}function V(o){let e,s,i,l;const t=[R,Q],a=[];function f(n,_){return n[4].default?0:1}return e=f(o),s=a[e]=t[e](o),{c(){s.c(),i=p()},l(n){s.l(n),i=p()},m(n,_){a[e].m(n,_),c(n,i,_),l=!0},p(n,[_]){let m=e;e=f(n),e===m?a[e].p(n,_):(M(),h(a[m],1,1,()=>{a[m]=null}),O(),s=a[e],s?s.p(n,_):(s=a[e]=t[e](n),s.c()),b(s,1),s.m(i.parentNode,i))},i(n){l||(b(s),l=!0)},o(n){h(s),l=!1},d(n){n&&u(i),a[e].d(n)}}}function W(o,e,s){const i=["tag","content","typo","ellipsis"];let l=E(e,i),{$$slots:t={},$$scope:a}=e;const f=D(t);let{tag:n="p"}=e,{content:_=""}=e,{typo:m="p"}=e,{ellipsis:C=!1}=e;return o.$$set=r=>{e=d(d({},e),F(r)),s(5,l=E(e,i)),"tag"in r&&s(0,n=r.tag),"content"in r&&s(1,_=r.content),"typo"in r&&s(2,m=r.typo),"ellipsis"in r&&s(3,C=r.ellipsis),"$$scope"in r&&s(6,a=r.$$scope)},[n,_,m,C,f,l,a,t]}class w extends H{constructor(e){super(),L(this,e,W,V,N,{tag:0,content:1,typo:2,ellipsis:3})}}export{w as T};
