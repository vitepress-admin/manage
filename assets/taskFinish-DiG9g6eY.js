import{d as Y,r as s,b as J,o as S,c as M,p as e,q as a,w as d,m as k,e as t,I as y,y as c,U as h,ag as $,af as j,A as G,t as b,a1 as H,ab as O,S as W,x as X,ae as Z,v as ee}from"./index-CugbkTRb.js";import{_ as oe}from"./index-D66dgKhw.js";import{E as te,a as ne}from"./el-table-column-CYOFES-h.js";import"./el-checkbox-D31n4qie.js";/* empty css               */import{_ as ae}from"./index-Dnw_Avi1.js";/* empty css                */import{E as le,a as ie}from"./el-form-item-CWEjCh-K.js";import{o as se}from"./index-D1G0YWnl.js";import{w as re}from"./index-BWlz0r_B.js";import{E as pe}from"./index-DTP9h-10.js";import{E as me}from"./index-BpvivScb.js";import"./_initCloneObject-JWc1PBUL.js";/* empty css                */import"./index-CDXgOwR2.js";import"./_baseClone-BZTxFeHo.js";const ue={class:"p-2"},de={class:"mb-[10px]"},Fe=Y({__name:"taskFinish",setup(ce){const V=s(),{proxy:f}=H(),_=s(!0),x=s([]),F=s(!0),T=s(!0),m=s(!0),g=s(0),E=s([]),i=s({pageNum:1,pageSize:10,name:void 0,processDefinitionName:void 0,processDefinitionKey:void 0}),p=()=>{C()},U=()=>{var l;(l=V.value)==null||l.resetFields(),i.value.pageNum=1,i.value.pageSize=10,p()},B=l=>{x.value=l.map(o=>o.id),F.value=l.length!==1,T.value=!l.length},C=()=>{_.value=!0,se(i.value).then(l=>{E.value=l.rows,g.value=l.total,_.value=!1})},z=l=>{const o=O({wfDefinitionConfigVo:l.wfDefinitionConfigVo,wfNodeConfigVo:l.wfNodeConfigVo,businessKey:l.businessKey,taskId:l.id,type:"view"});re.routerJump(o,f)};return J(()=>{C()}),(l,o)=>{var D,K;const v=W,u=le,w=X,I=ie,N=pe,R=ae,q=me,r=te,A=Z,L=ne,P=oe,Q=ee;return S(),M("div",ue,[e($,{"enter-active-class":(D=t(f))==null?void 0:D.animate.searchAnimate.enter,"leave-active-class":(K=t(f))==null?void 0:K.animate.searchAnimate.leave},{default:a(()=>[d(k("div",de,[e(N,{shadow:"hover"},{default:a(()=>[d(e(I,{ref_key:"queryFormRef",ref:V,model:t(i),inline:!0},{default:a(()=>[e(u,{label:"任务名称",prop:"name"},{default:a(()=>[e(v,{modelValue:t(i).name,"onUpdate:modelValue":o[0]||(o[0]=n=>t(i).name=n),placeholder:"请输入任务名称",onKeyup:y(p,["enter"])},null,8,["modelValue"])]),_:1}),e(u,{label:"流程定义名称","label-width":"100",prop:"processDefinitionName"},{default:a(()=>[e(v,{modelValue:t(i).processDefinitionName,"onUpdate:modelValue":o[1]||(o[1]=n=>t(i).processDefinitionName=n),placeholder:"请输入流程定义名称",onKeyup:y(p,["enter"])},null,8,["modelValue"])]),_:1}),e(u,{label:"流程定义KEY","label-width":"100",prop:"processDefinitionKey"},{default:a(()=>[e(v,{modelValue:t(i).processDefinitionKey,"onUpdate:modelValue":o[2]||(o[2]=n=>t(i).processDefinitionKey=n),placeholder:"请输入流程定义KEY",onKeyup:y(p,["enter"])},null,8,["modelValue"])]),_:1}),e(u,null,{default:a(()=>[e(w,{type:"primary",icon:"Search",onClick:p},{default:a(()=>o[6]||(o[6]=[c("搜索")])),_:1}),e(w,{icon:"Refresh",onClick:U},{default:a(()=>o[7]||(o[7]=[c("重置")])),_:1})]),_:1})]),_:1},8,["model"]),[[h,t(m)]])]),_:1})],512),[[h,t(m)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(N,{shadow:"hover"},{header:a(()=>[e(q,{gutter:10,class:"mb8"},{default:a(()=>[e(R,{showSearch:t(m),"onUpdate:showSearch":o[3]||(o[3]=n=>j(m)?m.value=n:null),onQueryTable:p},null,8,["showSearch"])]),_:1})]),default:a(()=>[d((S(),G(L,{border:"",data:t(E),onSelectionChange:B},{default:a(()=>[e(r,{type:"selection",width:"55",align:"center"}),e(r,{align:"center",type:"index",label:"序号",width:"60"}),e(r,{"show-overflow-tooltip":!0,align:"center",label:"流程定义名称"},{default:a(n=>[k("span",null,b(n.row.processDefinitionName)+"v"+b(n.row.processDefinitionVersion)+".0",1)]),_:1}),e(r,{align:"center",prop:"processDefinitionKey",label:"流程定义KEY"}),e(r,{align:"center",prop:"name",label:"任务名称"}),e(r,{align:"center",prop:"assigneeName",label:"办理人"},{default:a(n=>[e(A,{type:"success"},{default:a(()=>[c(b(n.row.assigneeName||"无"),1)]),_:2},1024)]),_:1}),e(r,{align:"center",prop:"startTime",label:"创建时间",width:"160"}),e(r,{label:"操作",align:"center",width:"200"},{default:a(n=>[e(w,{type:"primary",size:"small",icon:"View",onClick:fe=>z(n.row)},{default:a(()=>o[8]||(o[8]=[c("查看")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Q,t(_)]]),d(e(P,{page:t(i).pageNum,"onUpdate:page":o[4]||(o[4]=n=>t(i).pageNum=n),limit:t(i).pageSize,"onUpdate:limit":o[5]||(o[5]=n=>t(i).pageSize=n),total:t(g),onPagination:p},null,8,["page","limit","total"]),[[h,t(g)>0]])]),_:1})])}}});export{Fe as default};
