import{s as $e,v as be,n as ge,r as Ae}from"./scheduler.xAzB39Af.js";import{S as Me,i as ze,e as K,s as X,r as F,y as N,m as Q,c as U,a as z,f as Y,u as G,d as k,n as B,o as p,g as j,h as M,p as ee,A as E,k as C,z as je,l as q,x as Ce,G as se,q as te,C as L,I as oe,t as Ne,b as Ee}from"./index.B_s6da1h.js";import{e as P}from"./each.qOIVZGY4.js";import"./download.DyvU1DVF.js";import{f as le}from"./index.Bk2sqg1S.js";import{T as ne}from"./text.CCTuWGoB.js";function bt(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function qe(e){var t=0,n=e.children,r=n&&n.length;if(!r)t=1;else for(;--r>=0;)t+=n[r].value;e.value=t}function Se(){return this.eachAfter(qe)}function De(e,t){let n=-1;for(const r of this)e.call(t,r,++n,this);return this}function Ie(e,t){for(var n=this,r=[n],i,s,o=-1;n=r.pop();)if(e.call(t,n,++o,this),i=n.children)for(s=i.length-1;s>=0;--s)r.push(i[s]);return this}function Re(e,t){for(var n=this,r=[n],i=[],s,o,l,u=-1;n=r.pop();)if(i.push(n),s=n.children)for(o=0,l=s.length;o<l;++o)r.push(s[o]);for(;n=i.pop();)e.call(t,n,++u,this);return this}function Le(e,t){let n=-1;for(const r of this)if(e.call(t,r,++n,this))return r}function Pe(e){return this.eachAfter(function(t){for(var n=+e(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)n+=r[i].value;t.value=n})}function Ve(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})}function Te(e){for(var t=this,n=We(t,e),r=[t];t!==n;)t=t.parent,r.push(t);for(var i=r.length;e!==n;)r.splice(i,0,e),e=e.parent;return r}function We(e,t){if(e===t)return e;var n=e.ancestors(),r=t.ancestors(),i=null;for(e=n.pop(),t=r.pop();e===t;)i=e,e=n.pop(),t=r.pop();return i}function Fe(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t}function Ge(){return Array.from(this)}function He(){var e=[];return this.eachBefore(function(t){t.children||e.push(t)}),e}function Oe(){var e=this,t=[];return e.each(function(n){n!==e&&t.push({source:n.parent,target:n})}),t}function*Xe(){var e=this,t,n=[e],r,i,s;do for(t=n.reverse(),n=[];e=t.pop();)if(yield e,r=e.children)for(i=0,s=r.length;i<s;++i)n.push(r[i]);while(n.length)}function re(e,t){e instanceof Map?(e=[void 0,e],t===void 0&&(t=Je)):t===void 0&&(t=Ze);for(var n=new W(e),r,i=[n],s,o,l,u;r=i.pop();)if((o=t(r.data))&&(u=(o=Array.from(o)).length))for(r.children=o,l=u-1;l>=0;--l)i.push(s=o[l]=new W(o[l])),s.parent=r,s.depth=r.depth+1;return n.eachBefore(Qe)}function Ye(){return re(this).eachBefore(Ke)}function Ze(e){return e.children}function Je(e){return Array.isArray(e)?e[1]:null}function Ke(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function Qe(e){var t=0;do e.height=t;while((e=e.parent)&&e.height<++t)}function W(e){this.data=e,this.depth=this.height=0,this.parent=null}W.prototype=re.prototype={constructor:W,count:Se,each:De,eachAfter:Re,eachBefore:Ie,find:Le,sum:Pe,sort:Ve,path:Te,ancestors:Fe,descendants:Ge,leaves:He,links:Oe,copy:Ye,[Symbol.iterator]:Xe};function Ue(e){return e==null?null:Be(e)}function Be(e){if(typeof e!="function")throw new Error;return e}function ae(){return 0}function et(e){return function(){return e}}const tt=1664525,nt=1013904223,ue=4294967296;function rt(){let e=1;return()=>(e=(tt*e+nt)%ue)/ue}function it(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function st(e,t){let n=e.length,r,i;for(;n;)i=t()*n--|0,r=e[n],e[n]=e[i],e[i]=r;return e}function ot(e,t){for(var n=0,r=(e=st(Array.from(e),t)).length,i=[],s,o;n<r;)s=e[n],o&&ke(o,s)?++n:(o=at(i=lt(i,s)),n=0);return o}function lt(e,t){var n,r;if(Z(t,e))return[t];for(n=0;n<e.length;++n)if(V(t,e[n])&&Z(S(e[n],t),e))return[e[n],t];for(n=0;n<e.length-1;++n)for(r=n+1;r<e.length;++r)if(V(S(e[n],e[r]),t)&&V(S(e[n],t),e[r])&&V(S(e[r],t),e[n])&&Z(we(e[n],e[r],t),e))return[e[n],e[r],t];throw new Error}function V(e,t){var n=e.r-t.r,r=t.x-e.x,i=t.y-e.y;return n<0||n*n<r*r+i*i}function ke(e,t){var n=e.r-t.r+Math.max(e.r,t.r,1)*1e-9,r=t.x-e.x,i=t.y-e.y;return n>0&&n*n>r*r+i*i}function Z(e,t){for(var n=0;n<t.length;++n)if(!ke(e,t[n]))return!1;return!0}function at(e){switch(e.length){case 1:return ut(e[0]);case 2:return S(e[0],e[1]);case 3:return we(e[0],e[1],e[2])}}function ut(e){return{x:e.x,y:e.y,r:e.r}}function S(e,t){var n=e.x,r=e.y,i=e.r,s=t.x,o=t.y,l=t.r,u=s-n,c=o-r,_=l-i,x=Math.sqrt(u*u+c*c);return{x:(n+s+u/x*_)/2,y:(r+o+c/x*_)/2,r:(x+i+l)/2}}function we(e,t,n){var r=e.x,i=e.y,s=e.r,o=t.x,l=t.y,u=t.r,c=n.x,_=n.y,x=n.r,w=r-o,d=r-c,$=i-l,h=i-_,b=u-s,m=x-s,a=r*r+i*i-s*s,v=a-o*o-l*l+u*u,y=a-c*c-_*_+x*x,g=d*$-w*h,f=($*y-h*v)/(g*2)-r,A=(h*b-$*m)/g,D=(d*v-w*y)/(g*2)-i,I=(w*m-d*b)/g,H=A*A+I*I-1,R=2*(s+f*A+D*I),ie=f*f+D*D-s*s,O=-(Math.abs(H)>1e-6?(R+Math.sqrt(R*R-4*H*ie))/(2*H):ie/R);return{x:r+f+A*O,y:i+D+I*O,r:O}}function ce(e,t,n){var r=e.x-t.x,i,s,o=e.y-t.y,l,u,c=r*r+o*o;c?(s=t.r+n.r,s*=s,u=e.r+n.r,u*=u,s>u?(i=(c+u-s)/(2*c),l=Math.sqrt(Math.max(0,u/c-i*i)),n.x=e.x-i*r-l*o,n.y=e.y-i*o+l*r):(i=(c+s-u)/(2*c),l=Math.sqrt(Math.max(0,s/c-i*i)),n.x=t.x+i*r-l*o,n.y=t.y+i*o+l*r)):(n.x=t.x+n.r,n.y=t.y)}function fe(e,t){var n=e.r+t.r-1e-6,r=t.x-e.x,i=t.y-e.y;return n>0&&n*n>r*r+i*i}function he(e){var t=e._,n=e.next._,r=t.r+n.r,i=(t.x*n.r+n.x*t.r)/r,s=(t.y*n.r+n.y*t.r)/r;return i*i+s*s}function T(e){this._=e,this.next=null,this.previous=null}function ct(e,t){if(!(s=(e=it(e)).length))return 0;var n,r,i,s,o,l,u,c,_,x,w;if(n=e[0],n.x=0,n.y=0,!(s>1))return n.r;if(r=e[1],n.x=-r.r,r.x=n.r,r.y=0,!(s>2))return n.r+r.r;ce(r,n,i=e[2]),n=new T(n),r=new T(r),i=new T(i),n.next=i.previous=r,r.next=n.previous=i,i.next=r.previous=n;e:for(u=3;u<s;++u){ce(n._,r._,i=e[u]),i=new T(i),c=r.next,_=n.previous,x=r._.r,w=n._.r;do if(x<=w){if(fe(c._,i._)){r=c,n.next=r,r.previous=n,--u;continue e}x+=c._.r,c=c.next}else{if(fe(_._,i._)){n=_,n.next=r,r.previous=n,--u;continue e}w+=_._.r,_=_.previous}while(c!==_.next);for(i.previous=n,i.next=r,n.next=r.previous=r=i,o=he(n);(i=i.next)!==r;)(l=he(i))<o&&(n=i,o=l);r=n.next}for(n=[r._],i=r;(i=i.next)!==r;)n.push(i._);for(i=ot(n,t),u=0;u<s;++u)n=e[u],n.x-=i.x,n.y-=i.y;return i.r}function ft(e){return Math.sqrt(e.value)}function ht(){var e=null,t=1,n=1,r=ae;function i(s){const o=rt();return s.x=t/2,s.y=n/2,e?s.eachBefore(de(e)).eachAfter(J(r,.5,o)).eachBefore(pe(1)):s.eachBefore(de(ft)).eachAfter(J(ae,1,o)).eachAfter(J(r,s.r/Math.min(t,n),o)).eachBefore(pe(Math.min(t,n)/(2*s.r))),s}return i.radius=function(s){return arguments.length?(e=Ue(s),i):e},i.size=function(s){return arguments.length?(t=+s[0],n=+s[1],i):[t,n]},i.padding=function(s){return arguments.length?(r=typeof s=="function"?s:et(+s),i):r},i}function de(e){return function(t){t.children||(t.r=Math.max(0,+e(t)||0))}}function J(e,t,n){return function(r){if(i=r.children){var i,s,o=i.length,l=e(r)*t||0,u;if(l)for(s=0;s<o;++s)i[s].r+=l;if(u=ct(i,n),l)for(s=0;s<o;++s)i[s].r-=l;r.r=u+l}}}function pe(e){return function(t){var n=t.parent;t.r*=e,n&&(t.x=n.x+e*t.x,t.y=n.y+e*t.y)}}function _e(e,t,n){const r=e.slice();return r[12]=t[n],r}function me(e,t,n){const r=e.slice();return r[12]=t[n],r}function ve(e){var s;let t,n,r,i;return n=new ne({props:{typo:"small",content:(s=e[2].data)==null?void 0:s.text,class:"px-xs py-xxs",ellipsis:!0}}),{c(){t=K("div"),Q(n.$$.fragment),this.h()},l(o){t=U(o,"DIV",{class:!0,style:!0});var l=z(t);B(n.$$.fragment,l),l.forEach(k),this.h()},h(){p(t,"class","tooltip svelte-ijmvzk"),L(t,"--top",e[1].y+"px"),L(t,"--left",e[1].x+"px")},m(o,l){j(o,t,l),ee(n,t,null),i=!0},p(o,l){var c;const u={};l&4&&(u.content=(c=o[2].data)==null?void 0:c.text),n.$set(u),(!i||l&2)&&L(t,"--top",o[1].y+"px"),(!i||l&2)&&L(t,"--left",o[1].x+"px")},i(o){i||(C(n.$$.fragment,o),o&&be(()=>{i&&(r||(r=oe(t,le,{duration:150},!0)),r.run(1))}),i=!0)},o(o){q(n.$$.fragment,o),o&&(r||(r=oe(t,le,{duration:150},!1)),r.run(0)),i=!1},d(o){o&&k(t),te(n),o&&r&&r.end()}}}function dt(e){let t,n,r;function i(){return e[7](e[12])}function s(){return e[8](e[12])}return{c(){t=F("circle"),this.h()},l(o){t=G(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,role:!0,fill:!0,tabindex:!0}),z(t).forEach(k),this.h()},h(){var o;p(t,"class","tooltip-actor svelte-ijmvzk"),p(t,"cx",e[12].x),p(t,"cy",e[12].y),p(t,"r",e[12].r),p(t,"role","tooltip"),p(t,"fill",(o=e[12].data)==null?void 0:o.color),p(t,"tabindex","-1")},m(o,l){j(o,t,l),n||(r=[E(t,"mouseover",i),E(t,"focus",s),E(t,"mouseout",e[9]),E(t,"blur",e[10])],n=!0)},p(o,l){e=o},d(o){o&&k(t),n=!1,Ae(r)}}}function pt(e){let t;return{c(){t=F("circle"),this.h()},l(n){t=G(n,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),z(t).forEach(k),this.h()},h(){var n;p(t,"cx",e[12].x),p(t,"cy",e[12].y),p(t,"r",e[12].r),p(t,"fill",(n=e[12].data)==null?void 0:n.color),p(t,"class","svelte-ijmvzk")},m(n,r){j(n,t,r)},p:ge,d(n){n&&k(t)}}}function ye(e){let t;function n(s,o){return s[4](s[12].r)>6?pt:dt}let i=n(e)(e);return{c(){i.c(),t=N()},l(s){i.l(s),t=N()},m(s,o){i.m(s,o),j(s,t,o)},p(s,o){i.p(s,o)},d(s){s&&k(t),i.d(s)}}}function _t(e){var i;let t,n=((i=e[12].data)==null?void 0:i.text)+"",r;return{c(){t=F("text"),r=Ne(n),this.h()},l(s){t=G(s,"text",{x:!0,y:!0,"text-anchor":!0,"dominant-baseline":!0,"font-size":!0,class:!0});var o=z(t);r=Ee(o,n),o.forEach(k),this.h()},h(){p(t,"x",e[12].x),p(t,"y",e[12].y),p(t,"text-anchor","middle"),p(t,"dominant-baseline","middle"),p(t,"font-size",e[4](e[12].r)),p(t,"class","svelte-ijmvzk")},m(s,o){j(s,t,o),M(t,r)},p:ge,d(s){s&&k(t)}}}function xe(e){let t=e[4](e[12].r)>6,n,r=t&&_t(e);return{c(){r&&r.c(),n=N()},l(i){r&&r.l(i),n=N()},m(i,s){r&&r.m(i,s),j(i,n,s)},p(i,s){t&&r.p(i,s)},d(i){i&&k(n),r&&r.d(i)}}}function mt(e){let t,n,r,i,s,o,l,u,c,_,x,w,d=e[2]&&ve(e),$=P(e[3]),h=[];for(let a=0;a<$.length;a+=1)h[a]=ye(me(e,$,a));let b=P(e[3]),m=[];for(let a=0;a<b.length;a+=1)m[a]=xe(_e(e,b,a));return l=new ne({props:{typo:"p",content:`${e[0][1][0].clusterLabel}`,class:"px-s py-xs",ellipsis:!0}}),c=new ne({props:{typo:"p",content:`tiktoks: ${e[0][2]}`,class:"px-s py-xs",ellipsis:!1}}),{c(){t=K("div"),d&&d.c(),n=X(),r=F("svg");for(let a=0;a<h.length;a+=1)h[a].c();i=N();for(let a=0;a<m.length;a+=1)m[a].c();s=X(),o=K("div"),Q(l.$$.fragment),u=X(),Q(c.$$.fragment),this.h()},l(a){t=U(a,"DIV",{class:!0,role:!0,tabindex:!0});var v=z(t);d&&d.l(v),n=Y(v),r=G(v,"svg",{width:!0,viewBox:!0,class:!0});var y=z(r);for(let f=0;f<h.length;f+=1)h[f].l(y);i=N();for(let f=0;f<m.length;f+=1)m[f].l(y);y.forEach(k),s=Y(v),o=U(v,"DIV",{class:!0});var g=z(o);B(l.$$.fragment,g),u=Y(g),B(c.$$.fragment,g),g.forEach(k),v.forEach(k),this.h()},h(){p(r,"width","100%"),p(r,"viewBox","0 0 200 200"),p(r,"class","ratio-square svelte-ijmvzk"),p(o,"class","title svelte-ijmvzk"),p(t,"class","circle-packing flex-col-center-start svelte-ijmvzk"),p(t,"role","button"),p(t,"tabindex","0")},m(a,v){j(a,t,v),d&&d.m(t,null),M(t,n),M(t,r);for(let y=0;y<h.length;y+=1)h[y]&&h[y].m(r,null);M(r,i);for(let y=0;y<m.length;y+=1)m[y]&&m[y].m(r,null);M(t,s),M(t,o),ee(l,o,null),M(o,u),ee(c,o,null),_=!0,x||(w=E(t,"mousemove",e[5]),x=!0)},p(a,[v]){if(a[2]?d?(d.p(a,v),v&4&&C(d,1)):(d=ve(a),d.c(),C(d,1),d.m(t,n)):d&&(je(),q(d,1,1,()=>{d=null}),Ce()),v&88){$=P(a[3]);let f;for(f=0;f<$.length;f+=1){const A=me(a,$,f);h[f]?h[f].p(A,v):(h[f]=ye(A),h[f].c(),h[f].m(r,i))}for(;f<h.length;f+=1)h[f].d(1);h.length=$.length}if(v&24){b=P(a[3]);let f;for(f=0;f<b.length;f+=1){const A=_e(a,b,f);m[f]?m[f].p(A,v):(m[f]=xe(A),m[f].c(),m[f].m(r,null))}for(;f<m.length;f+=1)m[f].d(1);m.length=b.length}const y={};v&1&&(y.content=`${a[0][1][0].clusterLabel}`),l.$set(y);const g={};v&1&&(g.content=`tiktoks: ${a[0][2]}`),c.$set(g)},i(a){_||(C(d),C(l.$$.fragment,a),C(c.$$.fragment,a),_=!0)},o(a){q(d),q(l.$$.fragment,a),q(c.$$.fragment,a),_=!1},d(a){a&&k(t),d&&d.d(),se(h,a),se(m,a),te(l),te(c),x=!1,w()}}}function vt(e,t,n){let{cluster:r}=t;const s=((h,b,m)=>{const a=ht().size([b,m]).padding(5),v=re(h,g=>Array.isArray(g)?g[1]:null).sum(g=>g.videosNumber),y=a(v).descendants();return y.shift(),y})(r,200,200),o=h=>Math.min(h/3,13);let l={x:0,y:0};const u=h=>{n(1,l.x=h.clientX,l),n(1,l.y=h.clientY,l)};let c;const _=h=>{n(2,c=h)},x=h=>_(h),w=h=>_(h),d=()=>_(null),$=()=>_(null);return e.$$set=h=>{"cluster"in h&&n(0,r=h.cluster)},[r,l,c,s,o,u,_,x,w,d,$]}class At extends Me{constructor(t){super(),ze(this,t,vt,mt,$e,{cluster:0})}}export{At as C,bt as d};