function B(){}function en(n,t){for(const e in t)n[e]=t[e];return n}function T(n){return n()}function S(){return Object.create(null)}function m(n){n.forEach(T)}function O(n){return typeof n=="function"}function rn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let y;function cn(n,t){return y||(y=document.createElement("a")),y.href=t,n===y.href}function P(n){return Object.keys(n).length===0}function ln(n){const t={};for(const e in n)e[0]!=="$"&&(t[e]=n[e]);return t}let b=!1;function D(){b=!0}function z(){b=!1}function F(n,t,e,c){for(;n<t;){const l=n+(t-n>>1);e(l)<=c?n=l+1:t=l}return n}function H(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const i=[];for(let o=0;o<t.length;o++){const s=t[o];s.claim_order!==void 0&&i.push(s)}t=i}const e=new Int32Array(t.length+1),c=new Int32Array(t.length);e[0]=-1;let l=0;for(let i=0;i<t.length;i++){const o=t[i].claim_order,s=(l>0&&t[e[l]].claim_order<=o?l+1:F(1,l,p=>t[e[p]].claim_order,o))-1;c[i]=e[s]+1;const a=s+1;e[a]=i,l=Math.max(a,l)}const u=[],r=[];let f=t.length-1;for(let i=e[l]+1;i!=0;i=c[i-1]){for(u.push(t[i-1]);f>=i;f--)r.push(t[f]);f--}for(;f>=0;f--)r.push(t[f]);u.reverse(),r.sort((i,o)=>i.claim_order-o.claim_order);for(let i=0,o=0;i<r.length;i++){for(;o<u.length&&r[i].claim_order>=u[o].claim_order;)o++;const s=o<u.length?u[o]:null;n.insertBefore(r[i],s)}}function I(n,t){if(b){for(H(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function on(n,t,e){b&&!e?I(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function W(n){n.parentNode.removeChild(n)}function fn(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function G(n){return document.createElement(n)}function v(n){return document.createTextNode(n)}function un(){return v(" ")}function an(){return v("")}function sn(n,t,e,c){return n.addEventListener(t,e,c),()=>n.removeEventListener(t,e,c)}function dn(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function J(n){return Array.from(n.childNodes)}function K(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function L(n,t,e,c,l=!1){K(n);const u=(()=>{for(let r=n.claim_info.last_index;r<n.length;r++){const f=n[r];if(t(f)){const i=e(f);return i===void 0?n.splice(r,1):n[r]=i,l||(n.claim_info.last_index=r),f}}for(let r=n.claim_info.last_index-1;r>=0;r--){const f=n[r];if(t(f)){const i=e(f);return i===void 0?n.splice(r,1):n[r]=i,l?i===void 0&&n.claim_info.last_index--:n.claim_info.last_index=r,f}}return c()})();return u.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,u}function Q(n,t,e,c){return L(n,l=>l.nodeName===t,l=>{const u=[];for(let r=0;r<l.attributes.length;r++){const f=l.attributes[r];e[f.name]||u.push(f.name)}u.forEach(r=>l.removeAttribute(r))},()=>c(t))}function _n(n,t,e){return Q(n,t,e,G)}function R(n,t){return L(n,e=>e.nodeType===3,e=>{const c=""+t;if(e.data.startsWith(c)){if(e.data.length!==c.length)return e.splitText(c.length)}else e.data=c},()=>v(t),!0)}function hn(n){return R(n," ")}function mn(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function pn(n,t,e,c){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,c?"important":"")}let j;function h(n){j=n}const _=[],C=[],x=[],q=[],V=Promise.resolve();let E=!1;function X(){E||(E=!0,V.then(M))}function k(n){x.push(n)}const w=new Set;let g=0;function M(){const n=j;do{for(;g<_.length;){const t=_[g];g++,h(t),Y(t.$$)}for(h(null),_.length=0,g=0;C.length;)C.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];w.has(e)||(w.add(e),e())}x.length=0}while(_.length);for(;q.length;)q.pop()();E=!1,w.clear(),h(n)}function Y(n){if(n.fragment!==null){n.update(),m(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(k)}}const $=new Set;let d;function yn(){d={r:0,c:[],p:d}}function gn(){d.r||m(d.c),d=d.p}function Z(n,t){n&&n.i&&($.delete(n),n.i(t))}function xn(n,t,e,c){if(n&&n.o){if($.has(n))return;$.add(n),d.c.push(()=>{$.delete(n),c&&(e&&n.d(1),c())}),n.o(t)}}function $n(n,t){const e={},c={},l={$$scope:1};let u=n.length;for(;u--;){const r=n[u],f=t[u];if(f){for(const i in r)i in f||(c[i]=1);for(const i in f)l[i]||(e[i]=f[i],l[i]=1);n[u]=f}else for(const i in r)l[i]=1}for(const r in c)r in e||(e[r]=void 0);return e}function bn(n){return typeof n=="object"&&n!==null?n:{}}function wn(n){n&&n.c()}function En(n,t){n&&n.l(t)}function U(n,t,e,c){const{fragment:l,on_mount:u,on_destroy:r,after_update:f}=n.$$;l&&l.m(t,e),c||k(()=>{const i=u.map(T).filter(O);r?r.push(...i):m(i),n.$$.on_mount=[]}),f.forEach(k)}function nn(n,t){const e=n.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function tn(n,t){n.$$.dirty[0]===-1&&(_.push(n),X(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function kn(n,t,e,c,l,u,r,f=[-1]){const i=j;h(n);const o=n.$$={fragment:null,ctx:null,props:u,update:B,not_equal:l,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:S(),dirty:f,skip_bound:!1,root:t.target||i.$$.root};r&&r(o.root);let s=!1;if(o.ctx=e?e(n,t.props||{},(a,p,...A)=>{const N=A.length?A[0]:p;return o.ctx&&l(o.ctx[a],o.ctx[a]=N)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](N),s&&tn(n,a)),p}):[],o.update(),s=!0,m(o.before_update),o.fragment=c?c(o.ctx):!1,t.target){if(t.hydrate){D();const a=J(t.target);o.fragment&&o.fragment.l(a),a.forEach(W)}else o.fragment&&o.fragment.c();t.intro&&Z(n.$$.fragment),U(n,t.target,t.anchor,t.customElement),z(),M()}h(i)}class vn{$destroy(){nn(this,1),this.$destroy=B}$on(t,e){const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(e),()=>{const l=c.indexOf(e);l!==-1&&c.splice(l,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{fn as A,yn as B,$n as C,bn as D,en as E,ln as F,vn as S,un as a,J as b,_n as c,R as d,G as e,W as f,hn as g,dn as h,kn as i,pn as j,cn as k,on as l,I as m,mn as n,B as o,sn as p,an as q,Z as r,rn as s,v as t,wn as u,En as v,U as w,xn as x,nn as y,gn as z};
