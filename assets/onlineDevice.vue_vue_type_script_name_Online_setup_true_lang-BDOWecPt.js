import{d as c,aq as w,aa as v,k as b,o as E,c as T,p as t,q as l,e as i,m as k,t as C,a1 as B,av as y,x as D,ac as $}from"./index-CZcYgHe2.js";import{E as q,a as O}from"./el-table-column-DvYjRmEU.js";import"./el-checkbox-D91-YlXj.js";import{_ as I}from"./index-B738IouD.js";import{d as N}from"./index-DGfxgtfu.js";const R=c({name:"Online"}),j=c({...R,props:{devices:w.any.isRequired},setup(r){const{proxy:e}=B(),{sys_device_type:p}=v(e==null?void 0:e.useDict("sys_device_type")),d=r,_=b(()=>d.devices),m=a=>{y.confirm("删除设备后，在该设备登录需要重新进行验证").then(()=>N(a.tokenId)).then(s=>{s.code===200?(e==null||e.$modal.msgSuccess("删除成功"),e==null||e.$tab.refreshPage()):e==null||e.$modal.msgError(s.msg)}).catch(()=>{})};return(a,s)=>{const u=I,o=q,f=D,g=$,h=O;return E(),T("div",null,[t(h,{data:i(_),style:{width:"100%",height:"100%","font-size":"14px"}},{default:l(()=>[t(o,{label:"设备类型",align:"center"},{default:l(n=>[t(u,{options:i(p),value:n.row.deviceType},null,8,["options","value"])]),_:1}),t(o,{label:"主机",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),t(o,{label:"登录地点",align:"center",prop:"loginLocation","show-overflow-tooltip":!0}),t(o,{label:"操作系统",align:"center",prop:"os","show-overflow-tooltip":!0}),t(o,{label:"浏览器",align:"center",prop:"browser","show-overflow-tooltip":!0}),t(o,{label:"登录时间",align:"center",prop:"loginTime",width:"180"},{default:l(n=>[k("span",null,C(a.parseTime(n.row.loginTime)),1)]),_:1}),t(o,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:l(n=>[t(g,{content:"删除",placement:"top"},{default:l(()=>[t(f,{link:"",type:"primary",icon:"Delete",onClick:S=>m(n.row)},null,8,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"])])}}});export{j as _};
