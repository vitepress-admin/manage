import{d as Se,h as Ee,ac as Y,r as m,ad as U,b as Ne,ai as ke,o as h,c as F,p as t,q as a,w as j,m as C,e as l,I as P,F as M,z as Q,A as R,ag as le,y as p,t as r,W as ae,ah as Re,a3 as De,U as qe,R as Le,S as Ue,x as Fe,P as je,B as Pe,v as Te}from"./index-BAuvOH7U.js";/* empty css                  */import{E as Ie,a as Be}from"./el-descriptions-item-1hReguq3.js";import{_ as Ke}from"./index-DhWSmCN8.js";import{E as ze,a as Ae}from"./el-table-column-BxuOrZRB.js";import"./el-checkbox-CJO2Nzt4.js";import{_ as Ye}from"./index-BXNun8fK.js";/* empty css               */import{_ as Me}from"./index-7ap4Krm6.js";/* empty css               *//* empty css                */import{E as Qe,a as He}from"./el-form-item-CrUaNreY.js";import{E as Oe}from"./el-date-picker-BCquT2J_.js";import{b as We,u as Ge,c as Je}from"./index-DabxsUy0.js";import{E as Xe}from"./index-BoDGaK97.js";import{E as Ze}from"./index-DqZK7Cst.js";import{E as xe}from"./index-D0kpylGG.js";import"./_initCloneObject-B1WjiVDp.js";/* empty css                */import"./index-mIx5X0h3.js";import"./_baseClone-ClgyB-Pi.js";import"./index-BWxeplpW.js";const et={class:"p-2"},tt={class:"mb-[10px]"},lt={style:{"white-space":"pre-wrap"}},at={class:"dialog-footer"},ot={class:"dialog-footer"},nt={class:"dialog-footer"},Lt=Se({__name:"index",setup(st){const{t:u}=Ee(),{proxy:s}=De(),{vpa_payment_confirm_type:oe}=Y(s==null?void 0:s.useDict("vpa_payment_confirm_type")),{vpa_order_status:V}=Y(s==null?void 0:s.useDict("vpa_order_status")),H=m([]),T=m(!0),D=m(!0),q=m([]),O=m(!0),W=m(!0),I=m(0),N=m(["",""]),G=m(),g=U({visible:!1,title:u("batchUpdateStatus"),submitLoading:!1}),$=m({}),ne={status:[{required:!0,message:u("statusRequired"),trigger:"change"}]},J=m();m();const X=m(),k=U({visible:!1,title:u("viewDetails"),isEdit:!1}),y=U({visible:!1,title:u("updateStatus"),submitLoading:!1}),c=m({}),se={status:[{required:!0,message:u("statusRequired"),trigger:"change"}]},f=m({}),ie=U({form:{...{id:void 0,projectId:void 0,projectName:void 0,paymentName:void 0,paymentConfirm:void 0,paymentLink:void 0,userEmail:void 0,clientId:void 0,deptId:void 0,userId:void 0,status:void 0}},queryParams:{pageNum:1,pageSize:10,id:void 0,projectName:void 0,paymentName:void 0,paymentConfirm:void 0,userEmail:void 0,status:void 0,params:{createTime:void 0}},rules:{id:[{required:!0,message:u("primaryKeyRequired"),trigger:"blur"}],projectName:[{required:!0,message:u("projectNameRequired"),trigger:"blur"}],paymentName:[{required:!0,message:u("paymentNameRequired"),trigger:"blur"}],paymentConfirm:[{required:!0,message:u("confirmationRequired"),trigger:"change"}],userEmail:[{required:!0,message:u("emailRequired"),trigger:"blur"}],clientId:[{required:!0,message:u("clientIdRequired"),trigger:"blur"}],status:[{required:!0,message:u("statusRequired"),trigger:"change"}]}}),{queryParams:i,form:rt,rules:ut}=Y(ie),re=e=>{f.value={...e},k.visible=!0},S=async()=>{T.value=!0,i.value.params={},s==null||s.addDateRange(i.value,N.value,"CreateTime");try{const e=await We(i.value);H.value=e.rows,I.value=e.total}finally{T.value=!1}},E=()=>{i.value.pageNum=1,S()},ue=()=>{var e;N.value=["",""],(e=J.value)==null||e.resetFields(),E()},de=e=>{q.value=e.map(n=>n.id),O.value=e.length!=1,W.value=!e.length},me=e=>{c.value={id:e.id,status:e.status,oldStatus:e.status,replyContent:e.replyContent},y.visible=!0},pe=()=>{var e;(e=X.value)==null||e.validate(async n=>{if(n)try{y.submitLoading=!0,await Ge({id:c.value.id,status:c.value.status,replyContent:c.value.replyContent}),s==null||s.$modal.msgSuccess(u("updateSuccess")),y.visible=!1,await S()}finally{y.submitLoading=!1}})},ce=async()=>{if(q.value.length===0){s==null||s.$modal.msgError(u("pleaseSelectAtLeastOneRecord"));return}$.value={},g.visible=!0},fe=()=>{var e;(e=G.value)==null||e.validate(async n=>{if(n)try{g.submitLoading=!0;const b=q.value.map(d=>({id:d,status:$.value.status,replyContent:$.value.replyContent}));await Je(b),s==null||s.$modal.msgSuccess(u("updateSuccess")),g.visible=!1,await S()}catch(b){console.error("Batch update failed:",b),s==null||s.$modal.msgError(u("updateFailed"))}finally{g.submitLoading=!1}})};return Ne(()=>{S()}),(e,n)=>{var ee,te;const b=qe,d=Qe,B=Le,K=Ue,be=Oe,v=Fe,z=He,Z=Xe,ve=Ze,ge=Me,ye=xe,w=ze,L=Ye,x=je,_e=Ae,he=Ke,_=Ie,$e=Be,A=Pe,we=ke("hasPermi"),Ce=Te;return h(),F("div",et,[t(Re,{"enter-active-class":(ee=l(s))==null?void 0:ee.animate.searchAnimate.enter,"leave-active-class":(te=l(s))==null?void 0:te.animate.searchAnimate.leave},{default:a(()=>[j(C("div",tt,[t(Z,{shadow:"hover"},{default:a(()=>[t(z,{ref_key:"queryFormRef",ref:J,model:l(i),inline:!0,"label-width":"auto"},{default:a(()=>[t(d,{label:e.$t("id"),prop:"id"},{default:a(()=>[t(b,{modelValue:l(i).id,"onUpdate:modelValue":n[0]||(n[0]=o=>l(i).id=o),placeholder:e.$t("enterID"),clearable:"",onKeyup:P(E,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e.$t("projectName"),prop:"projectName"},{default:a(()=>[t(b,{modelValue:l(i).projectName,"onUpdate:modelValue":n[1]||(n[1]=o=>l(i).projectName=o),placeholder:e.$t("enterProjectName"),clearable:"",onKeyup:P(E,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e.$t("paymentName"),prop:"paymentName"},{default:a(()=>[t(b,{modelValue:l(i).paymentName,"onUpdate:modelValue":n[2]||(n[2]=o=>l(i).paymentName=o),placeholder:e.$t("enterPaymentName"),clearable:"",onKeyup:P(E,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e.$t("email"),prop:"userEmail"},{default:a(()=>[t(b,{modelValue:l(i).userEmail,"onUpdate:modelValue":n[3]||(n[3]=o=>l(i).userEmail=o),placeholder:e.$t("enterEmail"),clearable:"",onKeyup:P(E,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e.$t("status"),prop:"status"},{default:a(()=>[t(K,{modelValue:l(i).status,"onUpdate:modelValue":n[4]||(n[4]=o=>l(i).status=o),placeholder:e.$t("selectStatus"),clearable:""},{default:a(()=>[(h(!0),F(M,null,Q(l(V),o=>(h(),R(B,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e.$t("time"),style:{width:"350px"}},{default:a(()=>[t(be,{modelValue:l(N),"onUpdate:modelValue":n[5]||(n[5]=o=>le(N)?N.value=o:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":e.$t("startDate"),"end-placeholder":e.$t("endDate"),"default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","start-placeholder","end-placeholder","default-time"])]),_:1},8,["label"]),t(d,null,{default:a(()=>[t(v,{type:"primary",icon:"Search",onClick:E},{default:a(()=>[p(r(e.$t("search")),1)]),_:1}),t(v,{icon:"Refresh",onClick:ue},{default:a(()=>[p(r(e.$t("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[ae,l(D)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(Z,{shadow:"never"},{header:a(()=>[t(ye,{gutter:10,class:"mb8"},{default:a(()=>[t(ve,{span:1.5},{default:a(()=>[j((h(),R(v,{type:"success",plain:"",icon:"Edit",disabled:l(O)&&l(W),onClick:n[6]||(n[6]=o=>ce())},{default:a(()=>[p(r(e.$t("edit")),1)]),_:1},8,["disabled"])),[[we,["vpadmin:paymentLog:edit"]]])]),_:1}),t(ge,{showSearch:l(D),"onUpdate:showSearch":n[7]||(n[7]=o=>le(D)?D.value=o:null),onQueryTable:S},null,8,["showSearch"])]),_:1})]),default:a(()=>[j((h(),R(_e,{data:l(H),onSelectionChange:de},{default:a(()=>[t(w,{type:"selection",width:"55",align:"center"}),t(w,{label:e.$t("id"),align:"center",prop:"id"},null,8,["label"]),t(w,{label:e.$t("projectName"),align:"center",prop:"projectName"},null,8,["label"]),t(w,{label:e.$t("paymentName"),align:"center",prop:"paymentName"},null,8,["label"]),t(w,{label:e.$t("email"),align:"center",prop:"userEmail"},null,8,["label"]),t(w,{label:e.$t("status"),align:"center",prop:"status"},{default:a(o=>[t(L,{options:l(V),value:o.row.status},null,8,["options","value"])]),_:1},8,["label"]),t(w,{label:e.$t("time"),align:"center",prop:"createTime",width:"180"},{default:a(o=>[C("span",null,r(e.parseTime(o.row.createTime,"{y}-{m}-{d} {h}:{i}:{s}")),1)]),_:1},8,["label"]),t(w,{label:e.$t("operations"),align:"center","class-name":"small-padding fixed-width"},{default:a(o=>[t(x,{content:e.$t("viewDetails"),placement:"top"},{default:a(()=>[t(v,{link:"",type:"primary",icon:"View",onClick:Ve=>re(o.row)},null,8,["onClick"])]),_:2},1032,["content"]),t(x,{content:e.$t("updateStatus"),placement:"top"},{default:a(()=>[t(v,{link:"",type:"primary",icon:"Edit",onClick:Ve=>me(o.row)},null,8,["onClick"])]),_:2},1032,["content"])]),_:1},8,["label"])]),_:1},8,["data"])),[[Ce,l(T)]]),j(t(he,{page:l(i).pageNum,"onUpdate:page":n[8]||(n[8]=o=>l(i).pageNum=o),limit:l(i).pageSize,"onUpdate:limit":n[9]||(n[9]=o=>l(i).pageSize=o),total:l(I),onPagination:S},null,8,["page","limit","total"]),[[ae,l(I)>0]])]),_:1}),t(A,{modelValue:l(k).visible,"onUpdate:modelValue":n[11]||(n[11]=o=>l(k).visible=o),title:l(k).title,"append-to-body":""},{footer:a(()=>[C("div",at,[t(v,{onClick:n[10]||(n[10]=o=>l(k).visible=!1)},{default:a(()=>[p(r(e.$t("close")),1)]),_:1})])]),default:a(()=>[t($e,{column:1,border:""},{default:a(()=>[t(_,{label:e.$t("projectName")},{default:a(()=>[p(r(l(f).projectName),1)]),_:1},8,["label"]),t(_,{label:e.$t("paymentPlatform")},{default:a(()=>[p(r(l(f).paymentPlatform),1)]),_:1},8,["label"]),t(_,{label:e.$t("paymentType")},{default:a(()=>[p(r(l(f).paymentType),1)]),_:1},8,["label"]),t(_,{label:e.$t("paymentName")},{default:a(()=>[p(r(l(f).paymentName),1)]),_:1},8,["label"]),t(_,{label:e.$t("confirmation")},{default:a(()=>[t(L,{options:l(oe),value:l(f).paymentConfirm},null,8,["options","value"])]),_:1},8,["label"]),t(_,{label:e.$t("paymentLink")},{default:a(()=>[p(r(l(f).paymentLink),1)]),_:1},8,["label"]),t(_,{label:e.$t("email")},{default:a(()=>[p(r(l(f).userEmail),1)]),_:1},8,["label"]),t(_,{label:e.$t("status")},{default:a(()=>[t(L,{options:l(V),value:l(f).status},null,8,["options","value"])]),_:1},8,["label"]),t(_,{label:e.$t("replyContent")},{default:a(()=>[C("div",lt,r(l(f).replyContent||"-"),1)]),_:1},8,["label"])]),_:1})]),_:1},8,["modelValue","title"]),t(A,{modelValue:l(y).visible,"onUpdate:modelValue":n[15]||(n[15]=o=>l(y).visible=o),title:l(y).title,width:"500px","append-to-body":""},{footer:a(()=>[C("div",ot,[t(v,{type:"primary",loading:l(y).submitLoading,onClick:pe},{default:a(()=>[p(r(e.$t("confirm")),1)]),_:1},8,["loading"]),t(v,{onClick:n[14]||(n[14]=o=>l(y).visible=!1)},{default:a(()=>[p(r(e.$t("cancel")),1)]),_:1})])]),default:a(()=>[t(z,{ref_key:"statusFormRef",ref:X,model:l(c),rules:se,"label-width":"120px"},{default:a(()=>[t(d,{label:e.$t("currentStatus")},{default:a(()=>[t(L,{options:l(V),value:l(c).oldStatus},null,8,["options","value"])]),_:1},8,["label"]),t(d,{label:e.$t("newStatus"),prop:"status"},{default:a(()=>[t(K,{modelValue:l(c).status,"onUpdate:modelValue":n[12]||(n[12]=o=>l(c).status=o),placeholder:e.$t("selectStatus"),style:{width:"100%"}},{default:a(()=>[(h(!0),F(M,null,Q(l(V),o=>(h(),R(B,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e.$t("replyContent"),prop:"replyContent"},{default:a(()=>[t(b,{modelValue:l(c).replyContent,"onUpdate:modelValue":n[13]||(n[13]=o=>l(c).replyContent=o),type:"textarea",rows:10,placeholder:e.$t("enterReplyContent"),maxlength:"500","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),t(A,{modelValue:l(g).visible,"onUpdate:modelValue":n[19]||(n[19]=o=>l(g).visible=o),title:l(g).title,width:"500px","append-to-body":""},{footer:a(()=>[C("div",nt,[t(v,{type:"primary",loading:l(g).submitLoading,onClick:fe},{default:a(()=>[p(r(e.$t("confirm")),1)]),_:1},8,["loading"]),t(v,{onClick:n[18]||(n[18]=o=>l(g).visible=!1)},{default:a(()=>[p(r(e.$t("cancel")),1)]),_:1})])]),default:a(()=>[t(z,{ref_key:"batchStatusFormRef",ref:G,model:l($),rules:ne,"label-width":"100px"},{default:a(()=>[t(d,{label:e.$t("selectedCount")},{default:a(()=>[C("span",null,r(l(q).length),1)]),_:1},8,["label"]),t(d,{label:e.$t("newStatus"),prop:"status"},{default:a(()=>[t(K,{modelValue:l($).status,"onUpdate:modelValue":n[16]||(n[16]=o=>l($).status=o),placeholder:e.$t("selectStatus"),style:{width:"100%"}},{default:a(()=>[(h(!0),F(M,null,Q(l(V),o=>(h(),R(B,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e.$t("replyContent"),prop:"replyContent"},{default:a(()=>[t(b,{modelValue:l($).replyContent,"onUpdate:modelValue":n[17]||(n[17]=o=>l($).replyContent=o),type:"textarea",rows:10,placeholder:e.$t("enterReplyContent"),maxlength:"500","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{Lt as default};
