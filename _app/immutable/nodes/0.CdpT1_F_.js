import{s as c,l as d,u,m,o as h,M as p}from"../chunks/scheduler.Q8VTVPGx.js";import{S as f,i as y,t as g,a as _}from"../chunks/index.BzUwEaKY.js";const v=!0,w=!1,k=Object.freeze(Object.defineProperty({__proto__:null,prerender:v,ssr:w},Symbol.toStringTag,{value:"Module"})),a=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),r=()=>navigator.userAgent.match(/instagram/i),$=()=>{var t;const e=document.createElement("div"),o={position:"fixed",top:0,right:0,left:0,height:"-webkit-fill-available"};Object.assign(e.style,o),document.body.appendChild(e);const s=e.clientHeight;(t=e.parentNode)==null||t.removeChild(e),document.documentElement.style.setProperty("--vh",`${s}px`)},b=()=>{if(a()&&!r()){const e=window.innerHeight*.01;document.documentElement.style.setProperty("--vh-resized",`${e}px`)}else document.documentElement.style.setProperty("--vh-resized","1vh")},P=()=>{if(a()&&!r()){const e=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${e}px`);return}else{if(r())return $();document.documentElement.style.setProperty("--vh","1vh");return}},E=()=>{const e=window.getComputedStyle(document.documentElement).getPropertyValue("--vw"),o=`${(window.innerWidth-(window.innerWidth-document.body.clientWidth))/100}px`;o!==e&&document.documentElement.style.setProperty("--vw",o)},l=()=>{E(),b()};function S(e){let o;const s=e[1].default,t=d(s,e,e[0],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,i){t&&t.m(n,i),o=!0},p(n,[i]){t&&t.p&&(!o||i&1)&&u(t,s,n,n[0],o?h(s,n[0],i,null):m(n[0]),null)},i(n){o||(g(t,n),o=!0)},o(n){_(t,n),o=!1},d(n){t&&t.d(n)}}}function z(e,o,s){let{$$slots:t={},$$scope:n}=o;return p(()=>{P(),l(),window.onresize=()=>{l()},document.body.classList.add("loaded")}),e.$$set=i=>{"$$scope"in i&&s(0,n=i.$$scope)},[n,t]}class C extends f{constructor(o){super(),y(this,o,z,S,c,{})}}export{C as component,k as universal};
