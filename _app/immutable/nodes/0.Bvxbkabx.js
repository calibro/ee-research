import{s as a,a as c,u,g as m,b as h,o as p}from"../chunks/scheduler.BvAkape9.js";import{S as f,i as g,k as y,l as w}from"../chunks/index.FHAnUYL_.js";const d=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),r=()=>navigator.userAgent.match(/instagram/i),v=()=>{var t;const e=document.createElement("div"),o={position:"fixed",top:0,right:0,left:0,height:"-webkit-fill-available"};Object.assign(e.style,o),document.body.appendChild(e);const s=e.clientHeight;(t=e.parentNode)==null||t.removeChild(e),document.documentElement.style.setProperty("--vh",`${s}px`)},_=()=>{if(d()&&!r()){const e=window.innerHeight*.01;document.documentElement.style.setProperty("--vh-resized",`${e}px`)}else document.documentElement.style.setProperty("--vh-resized","1vh")},$=()=>{if(d()&&!r()){const e=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${e}px`);return}else{if(r())return v();document.documentElement.style.setProperty("--vh","1vh");return}},P=()=>{const e=window.getComputedStyle(document.documentElement).getPropertyValue("--vw"),o=`${(window.innerWidth-(window.innerWidth-document.body.clientWidth))/100}px`;o!==e&&document.documentElement.style.setProperty("--vw",o)},l=()=>{P(),_()};function b(e){let o;const s=e[1].default,t=c(s,e,e[0],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,i){t&&t.m(n,i),o=!0},p(n,[i]){t&&t.p&&(!o||i&1)&&u(t,s,n,n[0],o?h(s,n[0],i,null):m(n[0]),null)},i(n){o||(y(t,n),o=!0)},o(n){w(t,n),o=!1},d(n){t&&t.d(n)}}}function E(e,o,s){let{$$slots:t={},$$scope:n}=o;return p(()=>{$(),l(),window.onresize=()=>{l()},document.body.classList.add("loaded"),console.log("app mounted")}),e.$$set=i=>{"$$scope"in i&&s(0,n=i.$$scope)},[n,t]}class V extends f{constructor(o){super(),g(this,o,E,b,a,{})}}export{V as component};
