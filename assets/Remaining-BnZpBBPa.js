import{d as o,k as a,o as l,c as r,m as c,t as i,aj as u,_ as d}from"./index-CvOCUbz8.js";const m={class:"usage-prompt-container"},p=o({__name:"Remaining",props:{current:{default:0},total:{default:10},selectedProject:{default:null},t:{default:null}},setup(s){const e=s,t=a(()=>e.total===9999),n=a(()=>t.value?`${e.t("monthlyUsage")} ${e.current} / ${e.t("unlimited")}`:`${e.t("monthlyUsage")} ${e.current} / ${e.total}`);return(_,f)=>(l(),r("div",m,[c("div",{class:u(["usage-prompt",{unlimited:t.value}])},i(n.value),3)]))}}),v=d(p,[["__scopeId","data-v-de83c541"]]);export{v as default};
