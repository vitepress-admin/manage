import{d as U,ac as q,r as m,ad as se,b as re,ai as ie,o as p,c as ue,p as l,q as o,w as c,m as h,e as s,I as z,y as i,W as B,ah as de,A as w,ag as me,i as C,t as E,a3 as pe,U as ce,x as _e,af as fe,v as ve}from"./index-B9_8IJe0.js";/* empty css                */import{_ as we}from"./index-KkKI-uFX.js";import{E as ge,a as ye}from"./el-table-column-Bf4nXPrj.js";import"./el-checkbox-B0xBIaBW.js";import{_ as ke}from"./index-DRqUSK_T.js";/* empty css               */import{_ as be}from"./index-DNGLl6SE.js";/* empty css               */import{E as Ce,a as De}from"./el-form-item-CTbaNcVh.js";import{l as he,d as Ee}from"./index-BwE7DAoL.js";import{c as $e}from"./index-BSRJY1jB.js";import{E as Le}from"./index-B7Ht2YQ7.js";import{E as Se}from"./index-i2vYkcqU.js";import{E as Ve}from"./index-uEHY0w0Z.js";import"./_initCloneObject-DrfOwJJW.js";/* empty css                */import"./index-DV-l4gey.js";import"./_baseClone-CY4Rh9zz.js";const Pe={class:"p-2"},Te={class:"search"},Ne=U({name:"Leave"}),Ze=U({...Ne,setup(qe){const{proxy:a}=pe(),{wf_business_status:A}=q(a==null?void 0:a.useDict("wf_business_status")),$=m([]),_=m(!0),g=m(!0),L=m([]),R=m(!0),F=m(!0),D=m(0),I=[{value:"1",label:"事假"},{value:"2",label:"调休"},{value:"3",label:"病假"},{value:"4",label:"婚假"}],S=m(),K=se({form:{},queryParams:{pageNum:1,pageSize:10,startLeaveDays:void 0,endLeaveDays:void 0},rules:{}}),{queryParams:r}=q(K),f=async()=>{_.value=!0;const n=await he(r.value);$.value=n.rows,D.value=n.total,_.value=!1},y=()=>{r.value.pageNum=1,f()},Q=()=>{var n;(n=S.value)==null||n.resetFields(),y()},x=n=>{L.value=n.map(e=>e.id),R.value=n.length!=1,F.value=!n.length},M=()=>{a.$tab.closePage(a.$route),a.$router.push({path:"/workflow/leaveEdit/index",query:{type:"add"}})},W=n=>{a.$tab.closePage(a.$route),a.$router.push({path:"/workflow/leaveEdit/index",query:{id:n.id,type:"update"}})},j=n=>{a.$tab.closePage(a.$route),a.$router.push({path:"/workflow/leaveEdit/index",query:{id:n.id,type:"view"}})},G=async n=>{const e=(n==null?void 0:n.id)||L.value;await(a==null?void 0:a.$modal.confirm('是否确认删除请假编号为"'+e+'"的数据项？').finally(()=>_.value=!1)),await Ee(e),a==null||a.$modal.msgSuccess("删除成功"),await f()},H=()=>{a==null||a.download("workflow/leave/export",{...r.value},`leave_${new Date().getTime()}.xlsx`)},J=async n=>{await(a==null?void 0:a.$modal.confirm("是否确认撤销当前单据？")),_.value=!0,await $e(n).finally(()=>_.value=!1),await f(),a==null||a.$modal.msgSuccess("撤销成功")};return re(()=>{f()}),(n,e)=>{var T,N;const V=ce,k=Ce,u=_e,O=De,P=Le,X=be,Y=Se,d=ge,Z=fe,ee=ke,ae=ye,te=we,le=Ve,b=ie("hasPermi"),oe=ve;return p(),ue("div",Pe,[l(de,{"enter-active-class":(T=s(a))==null?void 0:T.animate.searchAnimate.enter,"leave-active-class":(N=s(a))==null?void 0:N.animate.searchAnimate.leave},{default:o(()=>[c(h("div",Te,[l(O,{ref_key:"queryFormRef",ref:S,model:s(r),inline:!0},{default:o(()=>[l(k,{label:"请假天数",prop:"startLeaveDays"},{default:o(()=>[l(V,{modelValue:s(r).startLeaveDays,"onUpdate:modelValue":e[0]||(e[0]=t=>s(r).startLeaveDays=t),placeholder:"请输入请假天数",clearable:"",onKeyup:z(y,["enter"])},null,8,["modelValue"])]),_:1}),l(k,{prop:"endLeaveDays"},{default:o(()=>e[5]||(e[5]=[i(" 至 ")])),_:1}),l(k,{prop:"endLeaveDays"},{default:o(()=>[l(V,{modelValue:s(r).endLeaveDays,"onUpdate:modelValue":e[1]||(e[1]=t=>s(r).endLeaveDays=t),placeholder:"请输入请假天数",clearable:"",onKeyup:z(y,["enter"])},null,8,["modelValue"])]),_:1}),l(k,null,{default:o(()=>[l(u,{type:"primary",icon:"Search",onClick:y},{default:o(()=>e[6]||(e[6]=[i("搜索")])),_:1}),l(u,{icon:"Refresh",onClick:Q},{default:o(()=>e[7]||(e[7]=[i("重置")])),_:1})]),_:1})]),_:1},8,["model"])],512),[[B,s(g)]])]),_:1},8,["enter-active-class","leave-active-class"]),l(le,{shadow:"never"},{header:o(()=>[l(Y,{gutter:10,class:"mb8"},{default:o(()=>[l(P,{span:1.5},{default:o(()=>[c((p(),w(u,{type:"primary",plain:"",icon:"Plus",onClick:M},{default:o(()=>e[8]||(e[8]=[i("新增")])),_:1})),[[b,["workflow:leave:add"]]])]),_:1}),l(P,{span:1.5},{default:o(()=>[c((p(),w(u,{type:"warning",plain:"",icon:"Download",onClick:H},{default:o(()=>e[9]||(e[9]=[i("导出")])),_:1})),[[b,["workflow:leave:export"]]])]),_:1}),l(X,{showSearch:s(g),"onUpdate:showSearch":e[2]||(e[2]=t=>me(g)?g.value=t:null),onQueryTable:f},null,8,["showSearch"])]),_:1})]),default:o(()=>[c((p(),w(ae,{data:s($),onSelectionChange:x},{default:o(()=>[l(d,{type:"selection",width:"55",align:"center"}),C("",!0),l(d,{label:"请假类型",align:"center"},{default:o(t=>[l(Z,null,{default:o(()=>{var v;return[i(E((v=I.find(ne=>ne.value===t.row.leaveType))==null?void 0:v.label),1)]}),_:2},1024)]),_:1}),l(d,{label:"开始时间",align:"center",prop:"startDate"},{default:o(t=>[h("span",null,E(n.parseTime(t.row.startDate,"{y}-{m}-{d}")),1)]),_:1}),l(d,{label:"结束时间",align:"center",prop:"endDate"},{default:o(t=>[h("span",null,E(n.parseTime(t.row.endDate,"{y}-{m}-{d}")),1)]),_:1}),l(d,{label:"请假天数",align:"center",prop:"leaveDays"}),l(d,{label:"请假原因",align:"center",prop:"remark"}),l(d,{align:"center",label:"流程状态","min-width":"70"},{default:o(t=>[l(ee,{options:s(A),value:t.row.status},null,8,["options","value"])]),_:1}),l(d,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:o(t=>[t.row.status==="draft"||t.row.status==="cancel"||t.row.status==="back"?c((p(),w(u,{key:0,size:"small",link:"",type:"primary",icon:"Edit",onClick:v=>W(t.row)},{default:o(()=>e[10]||(e[10]=[i("修改")])),_:2},1032,["onClick"])),[[b,["workflow:leave:edit"]]]):C("",!0),t.row.status==="draft"||t.row.status==="cancel"||t.row.status==="back"?c((p(),w(u,{key:1,size:"small",link:"",type:"primary",icon:"Delete",onClick:v=>G(t.row)},{default:o(()=>e[11]||(e[11]=[i("删除")])),_:2},1032,["onClick"])),[[b,["workflow:leave:remove"]]]):C("",!0),l(u,{link:"",type:"primary",size:"small",icon:"View",onClick:v=>j(t.row)},{default:o(()=>e[12]||(e[12]=[i("查看")])),_:2},1032,["onClick"]),t.row.status==="waiting"?(p(),w(u,{key:2,link:"",size:"small",type:"primary",icon:"Notification",onClick:v=>J(t.row.id)},{default:o(()=>e[13]||(e[13]=[i("撤销")])),_:2},1032,["onClick"])):C("",!0)]),_:1})]),_:1},8,["data"])),[[oe,s(_)]]),c(l(te,{page:s(r).pageNum,"onUpdate:page":e[3]||(e[3]=t=>s(r).pageNum=t),limit:s(r).pageSize,"onUpdate:limit":e[4]||(e[4]=t=>s(r).pageSize=t),total:s(D),onPagination:f},null,8,["page","limit","total"]),[[B,s(D)>0]])]),_:1})])}}});export{Ze as default};
