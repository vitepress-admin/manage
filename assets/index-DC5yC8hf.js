import{d as C,aa as K,r as p,b as R,ah as $,o as N,c as x,m as g,p as e,q as n,e as o,I as E,y as k,w,A as P,t as S,U as Q,a1 as A,T as M,S as O,x as j,ac as G,v as H}from"./index-DLoZ2oNR.js";import{_ as J}from"./index-CYdbGZLj.js";import{E as W,a as X}from"./el-table-column-v7LDEIEJ.js";import"./el-checkbox-BXZtPLec.js";import{_ as Y}from"./index-BSL_7-HU.js";/* empty css                */import{E as Z,a as ee}from"./el-form-item-BDJlCK8S.js";import{l as oe,f as te}from"./index-BHXeTTmf.js";import{E as le}from"./index-BzhshleO.js";import"./_initCloneObject-BylirTEW.js";import"./_baseClone-Cf51ivNu.js";const ae={class:"p-2"},ne={class:"mb-[10px]"},re=C({name:"Online"}),he=C({...re,setup(se){const{proxy:i}=A(),{sys_device_type:T}=K(i==null?void 0:i.useDict("sys_device_type")),v=p([]),m=p(!0),c=p(0),b=p(),t=p({pageNum:1,pageSize:10,ipaddr:"",userName:""}),d=async()=>{m.value=!0;const s=await oe(t.value);v.value=s.rows,c.value=s.total,m.value=!1},u=()=>{t.value.pageNum=1,d()},V=()=>{var s;(s=b.value)==null||s.resetFields(),u()},L=async s=>{const[a]=await M(i==null?void 0:i.$modal.confirm('是否确认强退名称为"'+s.userName+'"的用户?'));a||(await te(s.tokenId),await d(),i==null||i.$modal.msgSuccess("删除成功"))};return R(()=>{d()}),(s,a)=>{const h=O,_=Z,f=j,z=ee,y=le,r=W,F=Y,I=G,B=X,D=J,U=$("hasPermi"),q=H;return N(),x("div",ae,[g("div",ne,[e(y,{shadow:"hover"},{default:n(()=>[e(z,{ref_key:"queryFormRef",ref:b,model:o(t),inline:!0},{default:n(()=>[e(_,{label:"登录地址",prop:"ipaddr"},{default:n(()=>[e(h,{modelValue:o(t).ipaddr,"onUpdate:modelValue":a[0]||(a[0]=l=>o(t).ipaddr=l),placeholder:"请输入登录地址",clearable:"",onKeyup:E(u,["enter"])},null,8,["modelValue"])]),_:1}),e(_,{label:"用户名称",prop:"userName"},{default:n(()=>[e(h,{modelValue:o(t).userName,"onUpdate:modelValue":a[1]||(a[1]=l=>o(t).userName=l),placeholder:"请输入用户名称",clearable:"",onKeyup:E(u,["enter"])},null,8,["modelValue"])]),_:1}),e(_,null,{default:n(()=>[e(f,{type:"primary",icon:"Search",onClick:u},{default:n(()=>a[4]||(a[4]=[k("搜索")])),_:1}),e(f,{icon:"Refresh",onClick:V},{default:n(()=>a[5]||(a[5]=[k("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),e(y,{shadow:"hover"},{default:n(()=>[w((N(),P(B,{data:o(v).slice((o(t).pageNum-1)*o(t).pageSize,o(t).pageNum*o(t).pageSize),style:{width:"100%"}},{default:n(()=>[e(r,{label:"序号",width:"50",type:"index",align:"center"},{default:n(l=>[g("span",null,S((o(t).pageNum-1)*o(t).pageSize+l.$index+1),1)]),_:1}),e(r,{label:"会话编号",align:"center",prop:"tokenId","show-overflow-tooltip":!0}),e(r,{label:"登录名称",align:"center",prop:"userName","show-overflow-tooltip":!0}),e(r,{label:"客户端",align:"center",prop:"clientKey","show-overflow-tooltip":!0}),e(r,{label:"设备类型",align:"center"},{default:n(l=>[e(F,{options:o(T),value:l.row.deviceType},null,8,["options","value"])]),_:1}),e(r,{label:"所属部门",align:"center",prop:"deptName","show-overflow-tooltip":!0}),e(r,{label:"主机",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),e(r,{label:"登录地点",align:"center",prop:"loginLocation","show-overflow-tooltip":!0}),e(r,{label:"操作系统",align:"center",prop:"os","show-overflow-tooltip":!0}),e(r,{label:"浏览器",align:"center",prop:"browser","show-overflow-tooltip":!0}),e(r,{label:"登录时间",align:"center",prop:"loginTime",width:"180"},{default:n(l=>[g("span",null,S(s.parseTime(l.row.loginTime)),1)]),_:1}),e(r,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:n(l=>[e(I,{content:"强退",placement:"top"},{default:n(()=>[w(e(f,{link:"",type:"primary",icon:"Delete",onClick:ie=>L(l.row)},null,8,["onClick"]),[[U,["monitor:online:forceLogout"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[q,o(m)]]),w(e(D,{page:o(t).pageNum,"onUpdate:page":a[2]||(a[2]=l=>o(t).pageNum=l),limit:o(t).pageSize,"onUpdate:limit":a[3]||(a[3]=l=>o(t).pageSize=l),total:o(c)},null,8,["page","limit","total"]),[[Q,o(c)>0]])]),_:1})])}}});export{he as default};
