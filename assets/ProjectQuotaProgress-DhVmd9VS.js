import{d as h,h as E,k as i,o as v,c as b,p as o,q as r,m as s,at as d,e as c,t as a,ac as g,i as P,_ as C}from"./index-BoZ_NHcV.js";import{E as Q}from"./index-5ppAXtOs.js";const U={key:0,class:"quota-progress-container"},B={class:"progress-item"},F={class:"usage-text"},S={class:"progress-item"},T={class:"usage-text"},f=20,m=20,$=h({__name:"ProjectQuotaProgress",props:{projectQuota:{}},setup(j){E();const t=j,n=i(()=>t.projectQuota&&t.projectQuota.storageQuota>0?t.projectQuota.usedStorage/(t.projectQuota.planExpired?f:t.projectQuota.storageQuota)*100:0),u=i(()=>t.projectQuota&&t.projectQuota.buildQuota>0?t.projectQuota.usedBuild/(t.projectQuota.planExpired?m:t.projectQuota.buildQuota)*100:0),p=e=>Math.max(0,Math.min(100,Math.round(e))),l=e=>p(e)>80?"#F56C6C":"#67C23A",_=e=>e.toFixed(1);return(e,k)=>e.projectQuota?(v(),b("div",U,[o(c(g),{content:e.$t("storageUsageTooltip",{percentage:n.value.toFixed(1)}),placement:"top","show-after":300,effect:"light",enterable:!1},{default:r(()=>[s("div",B,[o(d,{class:"progress-icon","icon-class":"cloud-storage"}),o(c(Q),{percentage:p(n.value),color:l(n.value)},{default:r(()=>[s("span",F,a(_(e.projectQuota.usedStorage))+"/"+a(e.projectQuota.planExpired?f:e.projectQuota.storageQuota)+" "+a(e.$t("mbUnit")),1)]),_:1},8,["percentage","color"])])]),_:1},8,["content"]),o(c(g),{content:e.$t("buildTimeUsageTooltip",{percentage:u.value.toFixed(1)}),placement:"top","show-after":300,effect:"light",enterable:!1},{default:r(()=>[s("div",S,[o(d,{class:"progress-icon","icon-class":"stopwatch"}),o(c(Q),{percentage:p(u.value),color:l(u.value)},{default:r(()=>[s("span",T,a(e.projectQuota.usedBuild)+"/"+a(e.projectQuota.planExpired?m:e.projectQuota.buildQuota)+" "+a(e.$t("timeUnit")),1)]),_:1},8,["percentage","color"])])]),_:1},8,["content"])])):P("",!0)}}),M=C($,[["__scopeId","data-v-55a02464"]]);export{M as default};
