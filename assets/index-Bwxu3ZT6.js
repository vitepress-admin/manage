import{aX as c,d as n,ax as p,k as a,aZ as y,o as f,A as g,q as d,ay as m,aj as w,e as o,au as _,aW as v,az as b,aA as x}from"./index-lTSpdEk7.js";const C=Symbol("rowContextKey"),R=["start","center","end","space-around","space-between","space-evenly"],S=["top","middle","bottom"],j=c({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:R,default:"start"},align:{type:String,values:S}}),h=n({name:"ElRow"}),$=n({...h,props:j,setup(r){const t=r,s=p("row"),l=a(()=>t.gutter);y(C,{gutter:l});const i=a(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),u=a(()=>[s.b(),s.is(`justify-${t.justify}`,t.justify!=="start"),s.is(`align-${t.align}`,!!t.align)]);return(e,z)=>(f(),g(v(e.tag),{class:w(o(u)),style:_(o(i))},{default:d(()=>[m(e.$slots,"default")]),_:3},8,["class","style"]))}});var k=b($,[["__file","row.vue"]]);const E=x(k);export{E,C as r};
