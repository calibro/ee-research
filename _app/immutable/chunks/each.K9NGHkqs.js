import{a as q,t as B}from"./index.D5mPgV2_.js";import{z as C}from"./scheduler.DjmlZpBi.js";function F(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function G(n,f){n.d(1),f.delete(n.key)}function H(n,f){q(n,1,1,()=>{f.delete(n.key)})}function I(n,f,k,x,z,g,h,A,p,_,w,j){let i=n.length,d=g.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const l=[],a=new Map,m=new Map,M=[];for(c=d;c--;){const e=j(z,g,c),s=k(e);let t=h.get(s);t?x&&M.push(()=>t.p(e,f)):(t=_(s,e),t.c()),a.set(s,l[c]=t),s in u&&m.set(s,Math.abs(c-u[s]))}const v=new Set,S=new Set;function y(e){B(e,1),e.m(A,w),h.set(e.key,e),w=e.first,d--}for(;i&&d;){const e=l[d-1],s=n[i-1],t=e.key,o=s.key;e===s?(w=e.first,i--,d--):a.has(o)?!h.has(t)||v.has(t)?y(e):S.has(o)?i--:m.get(t)>m.get(o)?(S.add(t),y(e)):(v.add(o),i--):(p(s,h),i--)}for(;i--;){const e=n[i];a.has(e.key)||p(e,h)}for(;d;)y(l[d-1]);return C(M),l}export{G as d,F as e,H as o,I as u};