import{bn as v,bt as h,bs as y,bu as p,bv as O,bw as x,bx as w,by as m,bz as i}from"./index-DceX8DY-.js";var a=Object.create,P=function(){function e(){}return function(r){if(!v(r))return{};if(a)return a(r);e.prototype=r;var n=new e;return e.prototype=void 0,n}}();function B(e,r){var n=-1,t=e.length;for(r||(r=Array(t));++n<t;)r[n]=e[n];return r}function E(e,r,n,t){var b=!n;n||(n={});for(var u=-1,g=r.length;++u<g;){var s=r[u],o=void 0;o===void 0&&(o=e[s]),b?h(n,s,o):y(n,s,o)}return n}function A(e){var r=[];if(e!=null)for(var n in Object(e))r.push(n);return r}var C=Object.prototype,I=C.hasOwnProperty;function K(e){if(!v(e))return A(e);var r=p(e),n=[];for(var t in e)t=="constructor"&&(r||!I.call(e,t))||n.push(t);return n}function M(e){return O(e)?x(e,!0):K(e)}var L=w(Object.getPrototypeOf,Object),d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,T=f&&f.exports===d,c=T?m.Buffer:void 0,l=c?c.allocUnsafe:void 0;function N(e,r){if(r)return e.slice();var n=e.length,t=l?l(n):new e.constructor(n);return e.copy(t),t}function U(e){var r=new e.constructor(e.byteLength);return new i(r).set(new i(e)),r}function k(e,r){var n=r?U(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function q(e){return typeof e.constructor=="function"&&!p(e)?P(L(e)):{}}export{U as a,k as b,E as c,B as d,N as e,L as g,q as i,M as k};
