import{d as k,k as p,o as r,c as u,F as t,z as C,e as c,aj as y,t as d,A as m,q as A,y as i,i as v,ae as x,_ as b}from"./index-CugbkTRb.js";const w=["index"],B=k({__name:"index",props:{options:{},value:{},showValue:{type:Boolean,default:!0},separator:{default:","}},setup(g){const a=g,o=p(()=>a.value===""||a.value===null||typeof a.value>"u"?[]:Array.isArray(a.value)?a.value.map(l=>""+l):String(a.value).split(a.separator)),T=p(()=>{var n;if(((n=a.options)==null?void 0:n.length)==0||a.value===""||a.value===null||typeof a.value>"u")return!1;let l=!1;return o.value.forEach(s=>{a.options.some(e=>e.value===s)||(l=!0)}),l}),_=p(()=>{const l=[];return a.value!==""&&a.value!==null&&typeof a.value<"u"&&o.value.forEach(n=>{a.options.some(s=>s.value===n)||l.push(n)}),h(l)}),h=l=>l.length===0?"":l.reduce((n,s)=>n+" "+s);return(l,n)=>{const s=x;return r(),u("div",null,[(r(!0),u(t,null,C(l.options,(e,f)=>(r(),u(t,null,[c(o).includes(e.value)?(r(),u(t,{key:0},[(e.elTagType==="default"||e.elTagType==="")&&(e.elTagClass===""||e.elTagClass==null)?(r(),u("span",{key:e.value,index:f,class:y(e.elTagClass)},d(e.label+" "),11,w)):(r(),m(s,{key:e.value+"","disable-transitions":!0,index:f,type:e.elTagType==="primary"||e.elTagType==="success"||e.elTagType==="info"||e.elTagType==="warning"||e.elTagType==="danger"?e.elTagType:"primary",class:y(e.elTagClass)},{default:A(()=>[i(d(e.label+" "),1)]),_:2},1032,["index","type","class"]))],64)):v("",!0)],64))),256)),c(T)&&l.showValue?(r(),u(t,{key:0},[i(d(c(_)),1)],64)):v("",!0)])}}}),V=b(B,[["__scopeId","data-v-17bda7c9"]]);export{V as _};
