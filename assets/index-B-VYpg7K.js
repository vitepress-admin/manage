import{aX as f,aY as p,d as y,ax as u,o as r,c as t,aj as o,e as s,ay as d,y as l,t as n,i,m as c,au as h,az as m,aA as v}from"./index-DdehfsnW.js";const S=f({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=y({name:"ElCard"}),C=y({...b,props:S,setup(w){const a=u("card");return(e,$)=>(r(),t("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(s(a).e("header"))},[d(e.$slots,"header",{},()=>[l(n(e.header),1)])],2)):i("v-if",!0),c("div",{class:o([s(a).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[l(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var g=m(C,[["__file","card.vue"]]);const E=v(g);export{E};
