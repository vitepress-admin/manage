import{d as pe,r as o,ab as be,b as ke,o as v,A as f,q as l,m as j,p as t,y as u,i as I,w as x,e as C,c as K,z as O,t as ge,F as W,n as ye,x as Ie,ae as Ce,S as _e,P as Ve,Q as we,B as Te,v as Se,a1 as Ue}from"./index-C_bMx7Sy.js";/* empty css                  */import{_ as De}from"./index-CF_tnKPu.js";import{a as q,E as Ne}from"./el-form-item-xEvDSTA9.js";/* empty css                          */import{E as $e,a as Be}from"./el-checkbox-DWmO-xWx.js";import{g as Ee,c as Le,a as Re,b as Ae,t as ze,d as Fe,e as Me}from"./index-DWnYfpbu.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-bPDidZY_.js";import{_ as Pe}from"./multiInstanceUser.vue_vue_type_script_setup_true_name_User_lang-ZnmXds4A.js";const je={class:"dialog-footer"},xe={class:"dialog-footer",style:{float:"right","padding-bottom":"20px"}},Ze=pe({__name:"submitVerify",props:{taskVariables:{type:Object,default:()=>{}}},emits:["submitCallback","cancelCallback"],setup(G,{expose:Q,emit:H}){const{proxy:a}=Ue(),L=o(),R=o(),A=o(),S=o(),J=G,r=o(!0),n=o(!0),y=o(""),k=o([]),D=o(void 0),N=o(!1),U=o(!0),V=o(!0),$=o([]),m=o({id:void 0,name:void 0,description:void 0,priority:void 0,owner:void 0,assignee:void 0,assigneeName:void 0,processInstanceId:void 0,executionId:void 0,taskDefinitionId:void 0,processDefinitionId:void 0,endTime:void 0,taskDefinitionKey:void 0,dueDate:void 0,category:void 0,parentTaskId:void 0,tenantId:void 0,claimTime:void 0,businessStatus:void 0,businessStatusName:void 0,processDefinitionName:void 0,processDefinitionKey:void 0,participantVo:void 0,multiInstance:void 0,businessKey:void 0,wfNodeConfigVo:void 0}),B=o(""),p=be({visible:!1,title:"提示"}),d=o({taskId:void 0,message:void 0,variables:{},messageType:["1"],wfCopyList:[]}),c=o({taskId:void 0,targetActivityId:void 0,message:void 0,variables:{},messageType:["1"]}),X=()=>{p.visible=!1},Y=i=>{D.value=void 0,k.value=[],d.value.fileId=void 0,y.value=i,d.value.message=void 0,p.visible=!0,r.value=!0,n.value=!0,ye(()=>{Ee(y.value).then(e=>{m.value=e.data,r.value=!1,n.value=!1})})};ke(()=>{});const w=H,Z=async()=>{if(d.value.taskId=y.value,d.value.taskVariables=J.taskVariables,k.value&&k.value.length>0){let i=[];k.value.forEach(e=>{let g={userId:e.userId,userName:e.nickName};i.push(g)}),d.value.wfCopyList=i}await(a==null?void 0:a.$modal.confirm("是否确认提交？")),r.value=!0,n.value=!0;try{await Le(d.value),p.visible=!1,w("submitCallback"),a==null||a.$modal.msgSuccess("操作成功")}finally{r.value=!1,n.value=!1}},h=async()=>{c.value={},c.value.messageType=["1"],N.value=!0,U.value=!0,V.value=!0;let i=await Re(m.value.processInstanceId);$.value=i.data,U.value=!1,V.value=!1,c.value.targetActivityId=$.value[0].nodeId},ee=async()=>{c.value.taskId=y.value,await(a==null?void 0:a.$modal.confirm("是否确认驳回到申请人？")),r.value=!0,U.value=!0,V.value=!0,await Ae(c.value).finally(()=>r.value=!1),p.visible=!1,U.value=!1,V.value=!1,w("submitCallback"),a==null||a.$modal.msgSuccess("操作成功")},z=async()=>{p.visible=!1,n.value=!1,w("cancelCallback")},ae=()=>{L.value.open()},le=i=>{i&&i.length>0&&(k.value=i,D.value=k.value.map(e=>e.userId).join(","))},te=i=>{const e=i.userId,g=k.value.findIndex(T=>T.userId===e);k.value.splice(g,1),D.value=k.value.map(T=>T.userId).join(",")},se=()=>{S.value&&(B.value="加签人员",S.value.getAddMultiInstanceList(y.value,[]))},ie=()=>{S.value&&(B.value="减签人员",S.value.getDeleteMultiInstanceList(y.value))},oe=()=>{R.value.open()},ue=async i=>{if(i&&i.length>0){let e={taskId:y.value,userId:i[0].userId,comment:d.value.message};await(a==null?void 0:a.$modal.confirm("是否确认提交？")),r.value=!0,n.value=!0,await ze(e).finally(()=>r.value=!1),p.visible=!1,w("submitCallback"),a==null||a.$modal.msgSuccess("操作成功")}else a==null||a.$modal.msgWarning("请选择用户！")},ne=()=>{A.value.open()},de=async i=>{if(i&&i.length>0){let e={taskId:y.value,userId:i[0].userId,nickName:i[0].nickName};await(a==null?void 0:a.$modal.confirm("是否确认提交？")),r.value=!0,n.value=!0,await Fe(e).finally(()=>r.value=!1),p.visible=!1,w("submitCallback"),a==null||a.$modal.msgSuccess("操作成功")}else a==null||a.$modal.msgWarning("请选择用户！")},ve=async i=>{let e={taskId:y.value,comment:d.value.message};await(a==null?void 0:a.$modal.confirm("是否确认终止？")),r.value=!0,n.value=!0,await Me(e).finally(()=>r.value=!1),p.visible=!1,w("submitCallback"),a==null||a.$modal.msgSuccess("操作成功")};return Q({openDialog:Y}),(i,e)=>{const g=$e,T=Be,_=Ne,re=De,b=Ie,me=Ce,F=_e,fe=Ve,ce=we,M=Te,P=Se;return v(),f(M,{modelValue:C(p).visible,"onUpdate:modelValue":e[8]||(e[8]=s=>C(p).visible=s),title:C(p).title,width:"50%",draggable:"","before-close":z,center:"","close-on-click-modal":!1},{footer:l(()=>[j("span",je,[t(b,{disabled:n.value,type:"primary",onClick:Z},{default:l(()=>e[12]||(e[12]=[u(" 提交 ")])),_:1},8,["disabled"]),m.value.businessStatus==="waiting"?(v(),f(b,{key:0,disabled:n.value,type:"primary",onClick:ne},{default:l(()=>e[13]||(e[13]=[u(" 委托 ")])),_:1},8,["disabled"])):I("",!0),m.value.businessStatus==="waiting"?(v(),f(b,{key:1,disabled:n.value,type:"primary",onClick:oe},{default:l(()=>e[14]||(e[14]=[u(" 转办 ")])),_:1},8,["disabled"])):I("",!0),m.value.businessStatus==="waiting"&&m.value.multiInstance?(v(),f(b,{key:2,disabled:n.value,type:"primary",onClick:se},{default:l(()=>e[15]||(e[15]=[u(" 加签 ")])),_:1},8,["disabled"])):I("",!0),m.value.businessStatus==="waiting"&&m.value.multiInstance?(v(),f(b,{key:3,disabled:n.value,type:"primary",onClick:ie},{default:l(()=>e[16]||(e[16]=[u(" 减签 ")])),_:1},8,["disabled"])):I("",!0),m.value.businessStatus==="waiting"?(v(),f(b,{key:4,disabled:n.value,type:"danger",onClick:ve},{default:l(()=>e[17]||(e[17]=[u(" 终止 ")])),_:1},8,["disabled"])):I("",!0),m.value.businessStatus==="waiting"?(v(),f(b,{key:5,disabled:n.value,type:"danger",onClick:h},{default:l(()=>e[18]||(e[18]=[u(" 退回 ")])),_:1},8,["disabled"])):I("",!0),t(b,{disabled:n.value,onClick:z},{default:l(()=>e[19]||(e[19]=[u("取消")])),_:1},8,["disabled"])])]),default:l(()=>[x((v(),f(C(q),{model:d.value,"label-width":"120px"},{default:l(()=>[t(_,{label:"消息提醒"},{default:l(()=>[t(T,{modelValue:d.value.messageType,"onUpdate:modelValue":e[0]||(e[0]=s=>d.value.messageType=s)},{default:l(()=>[t(g,{label:"1",name:"type",disabled:""},{default:l(()=>e[9]||(e[9]=[u("站内信")])),_:1}),t(g,{label:"2",name:"type"},{default:l(()=>e[10]||(e[10]=[u("邮件")])),_:1}),t(g,{label:"3",name:"type"},{default:l(()=>e[11]||(e[11]=[u("短信")])),_:1})]),_:1},8,["modelValue"])]),_:1}),m.value.businessStatus==="waiting"?(v(),f(_,{key:0,label:"附件"},{default:l(()=>[t(re,{modelValue:d.value.fileId,"onUpdate:modelValue":e[1]||(e[1]=s=>d.value.fileId=s),"file-type":["doc","xls","ppt","txt","pdf","xlsx","docx","zip"],"file-size":"20"},null,8,["modelValue"])]),_:1})):I("",!0),t(_,{label:"抄送"},{default:l(()=>[t(b,{type:"primary",icon:"Plus",circle:"",onClick:ae}),(v(!0),K(W,null,O(k.value,s=>(v(),f(me,{key:s.userId,closable:"",style:{margin:"2px"},onClose:Ke=>te(s)},{default:l(()=>[u(ge(s.userName),1)]),_:2},1032,["onClose"]))),128))]),_:1}),m.value.businessStatus==="waiting"?(v(),f(_,{key:1,label:"审批意见"},{default:l(()=>[t(F,{modelValue:d.value.message,"onUpdate:modelValue":e[2]||(e[2]=s=>d.value.message=s),type:"textarea",resize:"none"},null,8,["modelValue"])]),_:1})):I("",!0)]),_:1},8,["model"])),[[P,r.value]]),t(C(E),{ref_key:"userSelectCopyRef",ref:L,multiple:!0,data:D.value,onConfirmCallBack:le},null,8,["data"]),t(C(E),{ref_key:"transferTaskRef",ref:R,multiple:!1,onConfirmCallBack:ue},null,512),t(C(E),{ref_key:"delegateTaskRef",ref:A,multiple:!1,onConfirmCallBack:de},null,512),t(Pe,{ref_key:"multiInstanceUserRef",ref:S,title:B.value,onSubmitCallback:X},null,8,["title"]),t(M,{modelValue:N.value,"onUpdate:modelValue":e[7]||(e[7]=s=>N.value=s),draggable:"",title:"驳回",width:"40%","close-on-click-modal":!1},{footer:l(()=>[j("div",xe,[t(b,{disabled:V.value,type:"primary",onClick:ee},{default:l(()=>e[23]||(e[23]=[u("确认")])),_:1},8,["disabled"]),t(b,{disabled:V.value,onClick:e[6]||(e[6]=s=>N.value=!1)},{default:l(()=>e[24]||(e[24]=[u("取消")])),_:1},8,["disabled"])])]),default:l(()=>[m.value.businessStatus==="waiting"?x((v(),f(C(q),{key:0,model:c.value,"label-width":"120px"},{default:l(()=>[t(_,{label:"驳回节点"},{default:l(()=>[t(ce,{modelValue:c.value.targetActivityId,"onUpdate:modelValue":e[3]||(e[3]=s=>c.value.targetActivityId=s),clearable:"",placeholder:"请选择",style:{width:"300px"}},{default:l(()=>[(v(!0),K(W,null,O($.value,s=>(v(),f(fe,{key:s.nodeId,label:s.nodeName,value:s.nodeId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"消息提醒"},{default:l(()=>[t(T,{modelValue:c.value.messageType,"onUpdate:modelValue":e[4]||(e[4]=s=>c.value.messageType=s)},{default:l(()=>[t(g,{label:"1",name:"type",disabled:""},{default:l(()=>e[20]||(e[20]=[u("站内信")])),_:1}),t(g,{label:"2",name:"type"},{default:l(()=>e[21]||(e[21]=[u("邮件")])),_:1}),t(g,{label:"3",name:"type"},{default:l(()=>e[22]||(e[22]=[u("短信")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"审批意见"},{default:l(()=>[t(F,{modelValue:c.value.message,"onUpdate:modelValue":e[5]||(e[5]=s=>c.value.message=s),type:"textarea",resize:"none"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[P,U.value]]):I("",!0)]),_:1},8,["modelValue"])]),_:1},8,["modelValue","title"])}}});export{Ze as _};
