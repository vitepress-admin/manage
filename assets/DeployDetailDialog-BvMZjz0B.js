import{a4 as f,d as V,r as h,k,D as u,o as $,A as E,q as o,p as t,y as d,t as c,m,x as B,B as H,_ as M}from"./index-Dz1U06Ul.js";/* empty css                  */import{E as T,a as j}from"./el-descriptions-item-CqTFXE9J.js";const K=l=>f({url:"/vpadmin/deployHistory/list",method:"get",params:l}),A=l=>f({url:"/vpadmin/deployHistory/"+l,method:"get"}),C={class:"resizable-textarea-container"},L=["innerHTML"],N=V({__name:"DeployDetailDialog",props:{modelValue:{type:Boolean},title:{},data:{}},emits:["update:modelValue"],setup(l,{emit:_}){const n=l,g=_,s=h(n.modelValue),y=["error","failed","failure","fatal","exception","crash","invalid","abort","denied","reject","rejected","exit","killed","terminated","unknown","undefined","null","could not","warning","warn","timeout","not found","permission denied","unauthorized","forbidden","bad request","conflict","connection refused","network error","unreachable","out of memory","disk full","no space","build failed","deploy failed","compilation failed","install failed","test failed"],b=k(()=>n.data.errorMessage?n.data.errorMessage.split(`
`).map(r=>{const a=y.some(p=>r.toLowerCase().includes(p.toLowerCase())),i=r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");return a?`<div class="error-line">${i}</div>`:`<div>${i}</div>`}).join(""):"");u(()=>n.modelValue,e=>{s.value=e}),u(s,e=>{g("update:modelValue",e)});const v=()=>{s.value=!1};return(e,r)=>{const a=T,i=j,p=B,D=H;return $(),E(D,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=w=>s.value=w),title:e.$t("deployDetails"),width:"80%","close-on-click-modal":!1,class:"resizable-dialog"},{footer:o(()=>[t(p,{onClick:v},{default:o(()=>[d(c(e.$t("close")),1)]),_:1})]),default:o(()=>[t(i,{column:1,border:""},{default:o(()=>[t(a,{label:e.$t("projectName")},{default:o(()=>[d(c(e.data.projectName),1)]),_:1},8,["label"]),t(a,{label:e.$t("deployDescription")},{default:o(()=>[d(c(e.data.deployDescription),1)]),_:1},8,["label"]),t(a,{label:e.$t("startTime")},{default:o(()=>[d(c(e.parseTime(e.data.startTime)),1)]),_:1},8,["label"]),t(a,{label:e.$t("errorMessage")},{default:o(()=>[m("div",C,[m("div",{class:"error-message-container",innerHTML:b.value},null,8,L)])]),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"])}}}),S=M(N,[["__scopeId","data-v-164f39da"]]);export{S as _,A as g,K as l};
