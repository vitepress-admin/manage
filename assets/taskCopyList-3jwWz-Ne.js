import{d as H,r as i,aa as O,b as W,o as d,c as U,p as e,q as n,w as f,m as x,e as a,I as h,y as c,U as V,ag as X,af as Z,A as C,t as g,F as ee,z as te,a1 as oe,ab as ae,S as ne,x as le,ae as se,v as ie}from"./index-CugbkTRb.js";import{_ as re}from"./index-D66dgKhw.js";import{E as pe,a as ue}from"./el-table-column-CYOFES-h.js";import"./el-checkbox-D31n4qie.js";import{_ as me}from"./index-CBZVGJ-Y.js";/* empty css               */import{_ as de}from"./index-Dnw_Avi1.js";/* empty css                */import{E as ce,a as _e}from"./el-form-item-CWEjCh-K.js";import{n as fe}from"./index-D1G0YWnl.js";import{w as ge}from"./index-BWlz0r_B.js";import{E as we}from"./index-DTP9h-10.js";import{E as ve}from"./index-BpvivScb.js";import"./_initCloneObject-JWc1PBUL.js";/* empty css                */import"./index-CDXgOwR2.js";import"./_baseClone-BZTxFeHo.js";const ye={class:"p-2"},be={class:"mb-[10px]"},qe=H({__name:"taskCopyList",setup(he){const k=i(),{proxy:u}=oe(),{wf_business_status:z}=O(u==null?void 0:u.useDict("wf_business_status")),w=i(!0),B=i([]),R=i(!0),I=i(!0),m=i(!0),v=i(0),E=i([]),s=i({pageNum:1,pageSize:10,name:void 0,processDefinitionName:void 0,processDefinitionKey:void 0}),p=()=>{N()},L=()=>{var l;(l=k.value)==null||l.resetFields(),s.value.pageNum=1,s.value.pageSize=10,p()},q=l=>{B.value=l.map(o=>o.id),R.value=l.length!==1,I.value=!l.length},N=()=>{w.value=!0,fe(s.value).then(l=>{E.value=l.rows,v.value=l.total,w.value=!1})},A=l=>{const o=ae({wfDefinitionConfigVo:l.wfDefinitionConfigVo,wfNodeConfigVo:l.wfNodeConfigVo,businessKey:l.businessKey,taskId:l.id,type:"view"});ge.routerJump(o,u)};return W(()=>{N()}),(l,o)=>{var K,T;const y=ne,_=ce,b=le,P=_e,D=we,Q=de,Y=ve,r=pe,S=se,J=me,M=ue,$=re,j=ie;return d(),U("div",ye,[e(X,{"enter-active-class":(K=a(u))==null?void 0:K.animate.searchAnimate.enter,"leave-active-class":(T=a(u))==null?void 0:T.animate.searchAnimate.leave},{default:n(()=>[f(x("div",be,[e(D,{shadow:"hover"},{default:n(()=>[f(e(P,{ref_key:"queryFormRef",ref:k,model:a(s),inline:!0},{default:n(()=>[e(_,{label:"任务名称",prop:"name"},{default:n(()=>[e(y,{modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=t=>a(s).name=t),placeholder:"请输入任务名称",onKeyup:h(p,["enter"])},null,8,["modelValue"])]),_:1}),e(_,{label:"流程定义名称","label-width":"100",prop:"processDefinitionName"},{default:n(()=>[e(y,{modelValue:a(s).processDefinitionName,"onUpdate:modelValue":o[1]||(o[1]=t=>a(s).processDefinitionName=t),placeholder:"请输入流程定义名称",onKeyup:h(p,["enter"])},null,8,["modelValue"])]),_:1}),e(_,{label:"流程定义KEY","label-width":"100",prop:"processDefinitionKey"},{default:n(()=>[e(y,{modelValue:a(s).processDefinitionKey,"onUpdate:modelValue":o[2]||(o[2]=t=>a(s).processDefinitionKey=t),placeholder:"请输入流程定义KEY",onKeyup:h(p,["enter"])},null,8,["modelValue"])]),_:1}),e(_,null,{default:n(()=>[e(b,{type:"primary",icon:"Search",onClick:p},{default:n(()=>o[6]||(o[6]=[c("搜索")])),_:1}),e(b,{icon:"Refresh",onClick:L},{default:n(()=>o[7]||(o[7]=[c("重置")])),_:1})]),_:1})]),_:1},8,["model"]),[[V,a(m)]])]),_:1})],512),[[V,a(m)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(D,{shadow:"hover"},{header:n(()=>[e(Y,{gutter:10,class:"mb8"},{default:n(()=>[e(Q,{showSearch:a(m),"onUpdate:showSearch":o[3]||(o[3]=t=>Z(m)?m.value=t:null),onQueryTable:p},null,8,["showSearch"])]),_:1})]),default:n(()=>[f((d(),C(M,{border:"",data:a(E),onSelectionChange:q},{default:n(()=>[e(r,{type:"selection",width:"55",align:"center"}),e(r,{align:"center",type:"index",label:"序号",width:"60"}),e(r,{"show-overflow-tooltip":!0,align:"center",label:"流程定义名称"},{default:n(t=>[x("span",null,g(t.row.processDefinitionName)+"v"+g(t.row.processDefinitionVersion)+".0",1)]),_:1}),e(r,{align:"center",prop:"processDefinitionKey",label:"流程定义KEY"}),e(r,{align:"center",prop:"name",label:"任务名称"}),e(r,{align:"center",prop:"assigneeName",label:"办理人"},{default:n(t=>[t.row.participantVo&&t.row.assignee===null?(d(!0),U(ee,{key:0},te(t.row.participantVo.candidateName,(F,G)=>(d(),C(S,{key:G,type:"success"},{default:n(()=>[c(g(F),1)]),_:2},1024))),128)):(d(),C(S,{key:1,type:"success"},{default:n(()=>[c(g(t.row.assigneeName||"无"),1)]),_:2},1024))]),_:1}),e(r,{align:"center",label:"流程状态","min-width":"70"},{default:n(t=>[e(J,{options:a(z),value:t.row.businessStatus},null,8,["options","value"])]),_:1}),e(r,{label:"操作",align:"center",width:"200"},{default:n(t=>[e(b,{type:"primary",size:"small",icon:"View",onClick:F=>A(t.row)},{default:n(()=>o[8]||(o[8]=[c("查看")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[j,a(w)]]),f(e($,{page:a(s).pageNum,"onUpdate:page":o[4]||(o[4]=t=>a(s).pageNum=t),limit:a(s).pageSize,"onUpdate:limit":o[5]||(o[5]=t=>a(s).pageSize=t),total:a(v),onPagination:p},null,8,["page","limit","total"]),[[V,a(v)>0]])]),_:1})])}}});export{qe as default};
