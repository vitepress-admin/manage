import{d as a,aw as w,ax as c,k as p,o as i,c as u,ay as _,ak as d,e as s,az as f,au as m,aA as S,aB as h}from"./index-B9_8IJe0.js";const b=a({name:"ElContainer"}),B=a({...b,props:{direction:{type:String}},setup(o){const t=o,e=w(),n=c("container"),r=p(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(v=>{const g=v.type.name;return g==="ElHeader"||g==="ElFooter"}):!1);return(l,v)=>(i(),u("section",{class:d([s(n).b(),s(n).is("vertical",s(r))])},[_(l.$slots,"default")],2))}});var C=f(B,[["__file","container.vue"]]);const z=a({name:"ElAside"}),A=a({...z,props:{width:{type:String,default:null}},setup(o){const t=o,e=c("aside"),n=p(()=>t.width?e.cssVarBlock({width:t.width}):{});return(r,l)=>(i(),u("aside",{class:d(s(e).b()),style:m(s(n))},[_(r.$slots,"default")],6))}});var y=f(A,[["__file","aside.vue"]]);const H=a({name:"ElFooter"}),N=a({...H,props:{height:{type:String,default:null}},setup(o){const t=o,e=c("footer"),n=p(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(i(),u("footer",{class:d(s(e).b()),style:m(s(n))},[_(r.$slots,"default")],6))}});var E=f(N,[["__file","footer.vue"]]);const V=a({name:"ElHeader"}),x=a({...V,props:{height:{type:String,default:null}},setup(o){const t=o,e=c("header"),n=p(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,l)=>(i(),u("header",{class:d(s(e).b()),style:m(s(n))},[_(r.$slots,"default")],6))}});var $=f(x,[["__file","header.vue"]]);const F=a({name:"ElMain"}),M=a({...F,setup(o){const t=c("main");return(e,n)=>(i(),u("main",{class:d(s(t).b())},[_(e.$slots,"default")],2))}});var k=f(M,[["__file","main.vue"]]);const j=S(C,{Aside:y,Footer:E,Header:$,Main:k}),q=h(y);h(E);const D=h($),G=h(k);export{q as E,G as a,j as b,D as c};
