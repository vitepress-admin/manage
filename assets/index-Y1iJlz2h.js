import{i as O}from"./index-QK8Dm0L8.js";import{a4 as J,d as K,h as Q,r as m,k as X,a5 as $,b as Y,C as w,n as ee,a6 as te,o as f,c as V,m as i,p as s,q as a,F as ae,z as se,A as T,e as t,t as c,T as re,a7 as le,y as _,x,a8 as B,i as z,B as oe,u as ne,_ as ie}from"./index-Dz1U06Ul.js";import{E as b}from"./index-z7a3Kden.js";import{E as v}from"./index-B8hIDeR1.js";import{E as C}from"./index-D4RdGC6H.js";Array.from({length:30},(p,d)=>{const o=new Date;return o.setDate(o.getDate()-d),o.toISOString().split("T")[0]}).reverse(),Array.from({length:30},(p,d)=>Math.floor(1e3+d*10+Math.random()*50)),Array.from({length:30},(p,d)=>{const o=new Date;return o.setDate(o.getDate()-d),o.toISOString().split("T")[0]}).reverse(),Array.from({length:30},()=>Math.floor(Math.random()*100+50)),Array.from({length:30},(p,d)=>{const o=new Date;return o.setDate(o.getDate()-d),o.toISOString().split("T")[0]}).reverse(),Array.from({length:30},()=>Math.random()*1e4+5e3);function de(p){return J({url:"/vpadmin/dashboard/statistics",method:"get",params:p})}const ue="/assets/analytics-dashboard-DLcbszZC.png",ce={class:"dashboard"},ve={class:"dashboard-content"},pe={class:"stats-and-charts-section"},me={class:"card-header"},fe={class:"card-content"},he={class:"overlay-content"},ge={class:"overlay-content"},ye=["src","alt"],_e=K({__name:"index",setup(p){const d=ne(),{t:o}=Q(),n=m({loading:!0,statistics:{}}),A=m(!1),k=m(!1),I=X(()=>{var e,l;return[{title:"totalSites",value:n.value.statistics.totalSites||0},{title:"totalUsers",value:n.value.statistics.totalUsers||0},{title:"totalOrders",value:n.value.statistics.totalOrders||0},{title:"monthlyRevenue",value:`¥${((e=n.value.statistics.monthlyRevenue)==null?void 0:e.toFixed(2))||"0.00"}`},{title:"averageOrderAmount",value:`¥${((l=n.value.statistics.averageOrderAmount)==null?void 0:l.toFixed(2))||"0.00"}`}]}),D=m(null),E=m(null),S=m(null),h=$(null),g=$(null),y=$(null),M=()=>{D.value&&!h.value&&(h.value=O(D.value)),E.value&&!g.value&&(g.value=O(E.value)),S.value&&!y.value&&(y.value=O(S.value))},F=()=>{var e,l,r,u,L,U;return{userGrowth:{title:{text:o("userGrowthTrend")},xAxis:{type:"category",data:(e=n.value.statistics.userGrowth)==null?void 0:e.dates},yAxis:{type:"value"},series:[{data:(l=n.value.statistics.userGrowth)==null?void 0:l.values,type:"line"}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis"},responsive:!0,maintainAspectRatio:!1},orderTrend:{title:{text:o("orderTrend")},xAxis:{type:"category",data:(r=n.value.statistics.orderTrend)==null?void 0:r.dates},yAxis:{type:"value"},series:[{data:(u=n.value.statistics.orderTrend)==null?void 0:u.values,type:"bar"}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis"},responsive:!0,maintainAspectRatio:!1},revenueTrend:{title:{text:o("revenueTrend")},xAxis:{type:"category",data:(L=n.value.statistics.revenueTrend)==null?void 0:L.dates},yAxis:{type:"value"},series:[{data:(U=n.value.statistics.revenueTrend)==null?void 0:U.values,type:"line"}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis"},responsive:!0,maintainAspectRatio:!1}}},R=()=>{var l,r,u;const e=F();(l=h.value)==null||l.setOption(e.userGrowth),(r=g.value)==null||r.setOption(e.orderTrend),(u=y.value)==null||u.setOption(e.revenueTrend)},N=()=>{var e,l,r;(e=h.value)==null||e.resize(),(l=g.value)==null||l.resize(),(r=y.value)==null||r.resize()},G=((e,l)=>{let r=null;return(...u)=>{r&&clearTimeout(r),r=setTimeout(()=>{e(...u)},l)}})(()=>{N(),R()},250),j=async()=>{try{n.value.loading=!0;const{data:e}=await de();n.value.statistics=e}catch(e){console.error("Failed to fetch dashboard data:",e)}finally{n.value.loading=!1}},P=async()=>{A.value=!0;try{await j(),R()}finally{A.value=!1}},q=()=>{k.value=!0},W=()=>{d.push("/vpadmin/project/project")},Z=()=>{d.push("/vpadmin/project/project?action=add")},H=()=>{d.push("/vpadmin/project/projectEdit")};return Y(async()=>{w().roles.includes("vpadmin")&&await j(),await ee(),M(),R(),window.addEventListener("resize",G)}),te(()=>{var e,l,r;window.removeEventListener("resize",G),(e=h.value)==null||e.dispose(),(l=g.value)==null||l.dispose(),(r=y.value)==null||r.dispose()}),(e,l)=>(f(),V("div",ce,[i("div",ve,[i("div",pe,[s(t(C),{gutter:20},{default:a(()=>[(f(!0),V(ae,null,se(I.value,(r,u)=>(f(),T(t(v),{key:u,xs:24,sm:12,md:6,lg:4},{default:a(()=>[s(t(b),{class:"box-card"},{default:a(()=>[i("div",me,[i("span",null,c(e.$t(r.title)),1)]),i("div",fe,[i("h2",null,c(r.value),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),s(t(C),{gutter:20,style:{"margin-top":"20px"}},{default:a(()=>[s(t(v),{xs:24,sm:24,md:12},{default:a(()=>[s(t(b),null,{default:a(()=>[i("div",{ref_key:"userGrowthChartRef",ref:D,class:"chart-container"},null,512)]),_:1})]),_:1}),s(t(v),{xs:24,sm:24,md:12},{default:a(()=>[s(t(b),null,{default:a(()=>[i("div",{ref_key:"orderTrendChartRef",ref:E,class:"chart-container"},null,512)]),_:1})]),_:1})]),_:1}),s(t(C),{gutter:20,style:{"margin-top":"20px"}},{default:a(()=>[s(t(v),{span:24},{default:a(()=>[s(t(b),null,{default:a(()=>[i("div",{ref_key:"revenueChartRef",ref:S,class:"chart-container"},null,512)]),_:1})]),_:1})]),_:1}),n.value.statistics.totalSites===0?(f(),T(t(B),{key:0,"z-index":1e3,class:"stats-overlay"},{default:a(()=>[i("div",he,[i("p",null,c(e.$t("noWebsitesAdded")),1),s(t(x),{type:"primary",onClick:Z},{default:a(()=>[s(t(re),{class:"el-icon--left"},{default:a(()=>[s(t(le))]),_:1}),_(" "+c(e.$t("addSite")),1)]),_:1})])]),_:1})):z("",!0),t(w)().roles.includes("editor")&&!t(w)().roles.includes("vpadmin")?(f(),T(t(B),{key:1,"z-index":1e3,class:"welcome-overlay"},{default:a(()=>[i("div",ge,[i("p",null,c(e.$t("welcomeEditor")),1),s(t(x),{type:"primary",onClick:H},{default:a(()=>[_(c(e.$t("proceedToEdit")),1)]),_:1})])]),_:1})):z("",!0)]),t(w)().roles.includes("vpadmin")?(f(),T(t(C),{key:0,style:{"margin-top":"20px","justify-content":"center","align-items":"center"}},{default:a(()=>[s(t(v),{xs:24,sm:8,md:4,style:{"text-align":"center","margin-bottom":"10px"}},{default:a(()=>[s(t(x),{type:"primary",loading:A.value,onClick:P},{default:a(()=>[_(c(e.$t("refreshData")),1)]),_:1},8,["loading"])]),_:1}),s(t(v),{xs:24,sm:8,md:4,style:{"text-align":"center","margin-bottom":"10px"}},{default:a(()=>[s(t(x),{link:"",onClick:q},{default:a(()=>[_(c(e.$t("moreAnalyticsDataPreview")),1)]),_:1})]),_:1}),s(t(v),{xs:24,sm:8,md:4,style:{"text-align":"center","margin-bottom":"10px"}},{default:a(()=>[s(t(x),{link:"",style:{color:"#f56c6c"},onClick:W},{default:a(()=>[_(c(e.$t("goToUpgradeSite")),1)]),_:1})]),_:1})]),_:1})):z("",!0)]),s(t(oe),{modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=r=>k.value=r),title:e.$t("analyticsDashboard"),width:"60%"},{default:a(()=>[i("img",{src:t(ue),style:{width:"100%"},alt:e.$t("analyticsDashboard")},null,8,ye)]),_:1},8,["modelValue","title"])]))}}),ke=ie(_e,[["__scopeId","data-v-6780f119"]]);export{ke as default};
