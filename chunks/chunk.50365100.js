function B(){}function q(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function N(){return Object.create(null)}function m(t){t.forEach(M)}function D(t){return typeof t=="function"}function it(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function rt(t,n,e,r){if(t){const c=T(t,n,e,r);return t[0](c)}}function T(t,n,e,r){return t[1]&&r?q(e.ctx.slice(),t[1](r(n))):e.ctx}function ct(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const f=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)f[o]=n.dirty[o]|c[o];return f}return n.dirty|c}return n.dirty}function lt(t,n,e,r,c,f){if(c){const l=T(n,e,r,f);t.p(l,c)}}function ot(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function ut(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let b=!1;function z(){b=!0}function F(){b=!1}function G(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&i.push(s)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,s=(c>0&&n[e[c]].claim_order<=u?c+1:G(1,c,p=>n[e[p]].claim_order,u))-1;r[i]=e[s]+1;const a=s+1;e[a]=i,c=Math.max(a,c)}const f=[],l=[];let o=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(f.push(n[i-1]);o>=i;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);f.reverse(),l.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<l.length;i++){for(;u<f.length&&l[i].claim_order>=f[u].claim_order;)u++;const s=u<f.length?f[u]:null;t.insertBefore(l[i],s)}}function P(t,n){if(b){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ft(t,n,e){b&&!e?P(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode.removeChild(t)}function J(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function at(){return E(" ")}function st(){return E("")}function dt(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function K(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,r,c=!1){Q(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const i=e(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function R(t,n,e,r){return L(t,c=>c.nodeName===n,c=>{const f=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||f.push(o.name)}f.forEach(l=>c.removeAttribute(l))},()=>r(n))}function ht(t,n,e){return R(t,n,e,J)}function V(t,n){return L(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>E(n),!0)}function mt(t){return V(t," ")}function pt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let j;function h(t){j=t}const _=[],S=[],g=[],C=[],X=Promise.resolve();let w=!1;function Y(){w||(w=!0,X.then(O))}function k(t){g.push(t)}const $=new Set;let y=0;function O(){const t=j;do{for(;y<_.length;){const n=_[y];y++,h(n),Z(n.$$)}for(h(null),_.length=0,y=0;S.length;)S.pop()();for(let n=0;n<g.length;n+=1){const e=g[n];$.has(e)||($.add(e),e())}g.length=0}while(_.length);for(;C.length;)C.pop()();w=!1,$.clear(),h(t)}function Z(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const x=new Set;let d;function yt(){d={r:0,c:[],p:d}}function gt(){d.r||m(d.c),d=d.p}function U(t,n){t&&t.i&&(x.delete(t),t.i(n))}function xt(t,n,e,r){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function bt(t,n){const e={},r={},c={$$scope:1};let f=t.length;for(;f--;){const l=t[f],o=n[f];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(e[i]=o[i],c[i]=1);t[f]=o}else for(const i in l)c[i]=1}for(const l in r)l in e||(e[l]=void 0);return e}function $t(t){return typeof t=="object"&&t!==null?t:{}}function wt(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function tt(t,n,e,r){const{fragment:c,on_mount:f,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),r||k(()=>{const i=f.map(M).filter(D);l?l.push(...i):m(i),t.$$.on_mount=[]}),o.forEach(k)}function nt(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function et(t,n){t.$$.dirty[0]===-1&&(_.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Et(t,n,e,r,c,f,l,o=[-1]){const i=j;h(t);const u=t.$$={fragment:null,ctx:null,props:f,update:B,not_equal:c,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:N(),dirty:o,skip_bound:!1,root:n.target||i.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(a,p,...v)=>{const A=v.length?v[0]:p;return u.ctx&&c(u.ctx[a],u.ctx[a]=A)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](A),s&&et(t,a)),p}):[],u.update(),s=!0,m(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){z();const a=K(n.target);u.fragment&&u.fragment.l(a),a.forEach(W)}else u.fragment&&u.fragment.c();n.intro&&U(t.$$.fragment),tt(t,n.target,n.anchor,n.customElement),F(),O()}h(i)}class jt{$destroy(){nt(this,1),this.$destroy=B}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{bt as A,$t as B,gt as C,nt as D,q as E,ut as F,yt as G,B as H,jt as S,at as a,ht as b,rt as c,K as d,J as e,V as f,W as g,mt as h,Et as i,_t as j,ft as k,P as l,dt as m,pt as n,ot as o,ct as p,U as q,xt as r,it as s,E as t,lt as u,m as v,wt as w,st as x,kt as y,tt as z};
