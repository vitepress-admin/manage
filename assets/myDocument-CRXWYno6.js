import{d as ie,aa as re,r,b as ue,c4 as ce,o as c,c as me,p as e,q as o,e as s,af as x,ag as de,w as S,m as z,I as pe,y as w,U as D,A as m,i as _,t as K,a1 as fe,ab as _e,S as ge,x as ye,ae as we,ac as ve,v as be}from"./index-CvOCUbz8.js";import{_ as he}from"./submitVerify.vue_vue_type_script_setup_true_lang-dqj2FBtX.js";import{_ as ke}from"./index-C7BmbIHG.js";import{E as Ce,a as Se}from"./el-table-column-DcjqO3jE.js";import"./el-checkbox-CUJrHLxp.js";import{_ as Ee}from"./index-BpDn-YxV.js";/* empty css               */import{_ as Ve}from"./index-D4IXAjRi.js";import{E as Ne,a as Te}from"./el-form-item-CC3-843t.js";/* empty css               *//* empty css                *//* empty css                */import{f as De,d as Ke,c as Re}from"./index-DaCmI7Pd.js";import{l as $e}from"./index-DtDOTtJx.js";import{w as Ae}from"./index-BWlz0r_B.js";import{E as Be}from"./index-D8P39wcU.js";import{E as Ie}from"./index-zyKbbzCE.js";import{E as Le}from"./index-Cn-jhugM.js";import{E as Ue}from"./index-BrYv1yqp.js";/* empty css                  */import"./index-wSg0NWSV.js";import"./el-link-ChG06MYy.js";import"./el-progress-fx6g8fsr.js";import"./index-BDS6UGlV.js";import"./_baseClone-DKr7qPQy.js";import"./_initCloneObject-5G3QkxmA.js";/* empty css                          */import"./index-ZBsg4KGM.js";import"./index.vue_vue_type_script_setup_true_lang-DbnddVvW.js";import"./index-DNPnWet1.js";import"./multiInstanceUser.vue_vue_type_script_setup_true_name_User_lang-BUxgq4Bi.js";const Fe={class:"p-2"},Pe={class:"mb-[10px]"},wt=ie({__name:"myDocument",setup(qe){const{proxy:l}=fe(),{wf_business_status:O}=re(l==null?void 0:l.useDict("wf_business_status")),R=r(),$=r(),d=r(!0),A=r([]),Q=r(!0),J=r(!0),g=r(!0),E=r(0),B=r([]),V=r([]),v=r(""),b=r("running"),i=r({pageNum:1,pageSize:10,name:void 0,categoryCode:void 0});ue(()=>{p(),Y()});const H=a=>{i.value.categoryCode=a.categoryCode,a.categoryCode==="ALL"&&(i.value.categoryCode=""),y()},M=(a,t)=>a?t.categoryName.indexOf(a)!==-1:!0;ce(()=>{$.value.filter(v.value)},{flush:"post"});const Y=async()=>{const a=await $e();V.value=[];const t={categoryCode:"ALL",categoryName:"顶级节点",children:[]};t.children=l==null?void 0:l.handleTree(a.data,"id","parentId"),V.value.push(t)},y=()=>{p()},j=()=>{var a;(a=R.value)==null||a.resetFields(),i.value.categoryCode="",i.value.pageNum=1,i.value.pageSize=10,y()},G=a=>{A.value=a.map(t=>t.businessKey),Q.value=a.length!==1,J.value=!a.length},p=()=>{d.value=!0,De(i.value).then(a=>{B.value=a.rows,E.value=a.total,d.value=!1})},W=async a=>{const t=a.businessKey||A.value;await(l==null?void 0:l.$modal.confirm("是否确认删除业务id为【"+t+"】的数据项？")),d.value=!0,b.value==="running"&&(await Ke(t).finally(()=>d.value=!1),p()),l==null||l.$modal.msgSuccess("删除成功")},X=async a=>{await(l==null?void 0:l.$modal.confirm("是否确认撤销当前单据？")),d.value=!0,b.value==="running"&&(await Re(a).finally(()=>d.value=!1),p()),l==null||l.$modal.msgSuccess("撤销成功")},I=async(a,t)=>{const h=_e({wfDefinitionConfigVo:a.wfDefinitionConfigVo,wfNodeConfigVo:a.wfNodeConfigVo,businessKey:a.businessKey,taskId:a.id,type:t});Ae.routerJump(h,l)};return(a,t)=>{const h=ge,Z=Be,N=Ie,L=Le,U=Ne,f=ye,ee=Te,te=Ve,F=Ue,u=Ce,P=we,ne=Ee,k=ve,ae=Se,oe=ke,le=he,se=be;return c(),me("div",Fe,[e(F,{gutter:20},{default:o(()=>[e(L,{lg:4,xs:24,style:{}},{default:o(()=>[e(N,{shadow:"hover"},{default:o(()=>[e(h,{modelValue:s(v),"onUpdate:modelValue":t[0]||(t[0]=C=>x(v)?v.value=C:null),placeholder:"请输入流程分类名","prefix-icon":"Search",clearable:""},null,8,["modelValue"]),e(Z,{ref_key:"categoryTreeRef",ref:$,class:"mt-2","node-key":"id",data:s(V),props:{label:"categoryName",children:"children"},"expand-on-click-node":!1,"filter-node-method":M,"highlight-current":"","default-expand-all":"",onNodeClick:H},null,8,["data"])]),_:1})]),_:1}),e(L,{lg:20,xs:24},{default:o(()=>{var C,q;return[e(de,{"enter-active-class":(C=s(l))==null?void 0:C.animate.searchAnimate.enter,"leave-active-class":(q=s(l))==null?void 0:q.animate.searchAnimate.leave},{default:o(()=>[S(z("div",Pe,[e(N,{shadow:"hover"},{default:o(()=>[S(e(ee,{ref_key:"queryFormRef",ref:R,model:s(i),inline:!0,"label-width":"120px"},{default:o(()=>[e(U,{label:"流程定义名称",prop:"name"},{default:o(()=>[e(h,{modelValue:s(i).name,"onUpdate:modelValue":t[1]||(t[1]=n=>s(i).name=n),placeholder:"请输入流程定义名称",onKeyup:pe(y,["enter"])},null,8,["modelValue"])]),_:1}),e(U,null,{default:o(()=>[e(f,{type:"primary",icon:"Search",onClick:y},{default:o(()=>t[5]||(t[5]=[w("搜索")])),_:1}),e(f,{icon:"Refresh",onClick:j},{default:o(()=>t[6]||(t[6]=[w("重置")])),_:1})]),_:1})]),_:1},8,["model"]),[[D,s(g)]])]),_:1})],512),[[D,s(g)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(N,{shadow:"hover"},{header:o(()=>[e(F,{gutter:10,class:"mb8"},{default:o(()=>[e(te,{showSearch:s(g),"onUpdate:showSearch":t[2]||(t[2]=n=>x(g)?g.value=n:null),onQueryTable:y},null,8,["showSearch"])]),_:1})]),default:o(()=>[S((c(),m(ae,{border:"",data:s(B),onSelectionChange:G},{default:o(()=>[e(u,{type:"selection",width:"55",align:"center"}),e(u,{align:"center",type:"index",label:"序号",width:"60"}),_("",!0),e(u,{"show-overflow-tooltip":!0,align:"center",label:"流程定义名称"},{default:o(n=>[z("span",null,K(n.row.processDefinitionName)+"v"+K(n.row.processDefinitionVersion)+".0",1)]),_:1}),e(u,{align:"center",prop:"processDefinitionKey",label:"流程定义KEY"}),e(u,{align:"center",prop:"processDefinitionVersion",label:"版本号",width:"90"},{default:o(n=>[w(" v"+K(n.row.processDefinitionVersion)+".0",1)]),_:1}),s(b)==="running"?(c(),m(u,{key:1,align:"center",prop:"isSuspended",label:"状态","min-width":"70"},{default:o(n=>[n.row.isSuspended?(c(),m(P,{key:1,type:"danger"},{default:o(()=>t[8]||(t[8]=[w("挂起")])),_:1})):(c(),m(P,{key:0,type:"success"},{default:o(()=>t[7]||(t[7]=[w("激活")])),_:1}))]),_:1})):_("",!0),e(u,{align:"center",label:"流程状态","min-width":"70"},{default:o(n=>[e(ne,{options:s(O),value:n.row.businessStatus},null,8,["options","value"])]),_:1}),e(u,{align:"center",prop:"startTime",label:"启动时间",width:"160"}),s(b)==="finish"?(c(),m(u,{key:2,align:"center",prop:"endTime",label:"结束时间",width:"160"})):_("",!0),e(u,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:o(n=>[n.row.businessStatus==="draft"||n.row.businessStatus==="cancel"||n.row.businessStatus==="back"?(c(),m(k,{key:0,content:"修改",placement:"top"},{default:o(()=>[e(f,{link:"",type:"primary",icon:"Edit",onClick:T=>I(n.row,"update")},null,8,["onClick"])]),_:2},1024)):_("",!0),n.row.businessStatus==="draft"||n.row.businessStatus==="cancel"||n.row.businessStatus==="back"?(c(),m(k,{key:1,content:"删除",placement:"top"},{default:o(()=>[e(f,{link:"",type:"primary",icon:"Delete",onClick:T=>W(n.row)},null,8,["onClick"])]),_:2},1024)):_("",!0),e(k,{placement:"top",content:"查看"},{default:o(()=>[e(f,{link:"",type:"primary",icon:"View",onClick:T=>I(n.row,"view")},null,8,["onClick"])]),_:2},1024),n.row.businessStatus==="waiting"?(c(),m(k,{key:2,content:"撤销",placement:"top"},{default:o(()=>[e(f,{link:"",type:"primary",icon:"Notification",onClick:T=>X(n.row.businessKey)},null,8,["onClick"])]),_:2},1024)):_("",!0)]),_:1})]),_:1},8,["data"])),[[se,s(d)]]),S(e(oe,{page:s(i).pageNum,"onUpdate:page":t[3]||(t[3]=n=>s(i).pageNum=n),limit:s(i).pageSize,"onUpdate:limit":t[4]||(t[4]=n=>s(i).pageSize=n),total:s(E),onPagination:p},null,8,["page","limit","total"]),[[D,s(E)>0]])]),_:1})]}),_:1})]),_:1}),e(le,{ref:"submitVerifyRef",onSubmitCallback:p},null,512)])}}});export{wt as default};
