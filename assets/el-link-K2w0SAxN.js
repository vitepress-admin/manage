import{aX as m,cc as y,d as f,ax as h,k as v,o as n,c as o,A as r,q as b,aW as g,e as t,R as C,i as l,aj as d,ay as c,az as E,aA as B}from"./index-DceX8DY-.js";const S=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:y}}),$={click:i=>i instanceof MouseEvent},w=f({name:"ElLink"}),L=f({...w,props:S,emits:$,setup(i,{emit:u}){const s=i,a=h("link"),p=v(()=>[a.b(),a.m(s.type),a.is("disabled",s.disabled),a.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||u("click",e)}return(e,z)=>(n(),o("a",{class:d(t(p)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(n(),r(t(C),{key:0},{default:b(()=>[(n(),r(g(e.icon)))]),_:1})):l("v-if",!0),e.$slots.default?(n(),o("span",{key:1,class:d(t(a).e("inner"))},[c(e.$slots,"default")],2)):l("v-if",!0),e.$slots.icon?c(e.$slots,"icon",{key:2}):l("v-if",!0)],10,["href","target"]))}});var P=E(L,[["__file","link.vue"]]);const I=B(P);export{I as E};
