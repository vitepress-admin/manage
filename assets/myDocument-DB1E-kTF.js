import{d as ie,ac as re,r,b as ue,c4 as ce,o as c,c as me,p as e,q as a,e as s,ag as x,ah as de,w as S,m as z,I as pe,y as w,W as D,A as m,i as _,t as K,a3 as fe,ad as _e,U as ge,x as ye,af as we,P as ve,v as be}from"./index-BAuvOH7U.js";import{_ as he}from"./submitVerify.vue_vue_type_script_setup_true_lang-BfZWw-8J.js";import{_ as ke}from"./index-DhWSmCN8.js";import{E as Ce,a as Se}from"./el-table-column-BxuOrZRB.js";import"./el-checkbox-CJO2Nzt4.js";import{_ as Ee}from"./index-BXNun8fK.js";/* empty css               */import{_ as Ve}from"./index-7ap4Krm6.js";import{E as Ne,a as Te}from"./el-form-item-CrUaNreY.js";/* empty css               *//* empty css                *//* empty css                */import{f as De,d as Ke,c as Re}from"./index-BwEUGqtA.js";import{l as $e}from"./index-CQdbO109.js";import{w as Ae}from"./index-BWlz0r_B.js";import{E as Be}from"./index-mIx5X0h3.js";import{E as Ie}from"./index-BoDGaK97.js";import{E as Le}from"./index-DqZK7Cst.js";import{E as Pe}from"./index-D0kpylGG.js";/* empty css                  */import"./index-DNA4RCIH.js";import"./el-link-Bhm6JGun.js";import"./el-progress-BQzh6_OD.js";import"./index-k61JLcv1.js";import"./_baseClone-ClgyB-Pi.js";import"./_initCloneObject-B1WjiVDp.js";/* empty css                          */import"./index-DyEG-JP5.js";import"./index.vue_vue_type_script_setup_true_lang-BGmEXVSu.js";import"./index-DklbFAUH.js";import"./multiInstanceUser.vue_vue_type_script_setup_true_name_User_lang-BzR09bkX.js";const Ue={class:"p-2"},Fe={class:"mb-[10px]"},wt=ie({__name:"myDocument",setup(qe){const{proxy:l}=fe(),{wf_business_status:O}=re(l==null?void 0:l.useDict("wf_business_status")),R=r(),$=r(),d=r(!0),A=r([]),Q=r(!0),J=r(!0),g=r(!0),E=r(0),B=r([]),V=r([]),v=r(""),b=r("running"),i=r({pageNum:1,pageSize:10,name:void 0,categoryCode:void 0});ue(()=>{p(),W()});const H=o=>{i.value.categoryCode=o.categoryCode,o.categoryCode==="ALL"&&(i.value.categoryCode=""),y()},M=(o,t)=>o?t.categoryName.indexOf(o)!==-1:!0;ce(()=>{$.value.filter(v.value)},{flush:"post"});const W=async()=>{const o=await $e();V.value=[];const t={categoryCode:"ALL",categoryName:"顶级节点",children:[]};t.children=l==null?void 0:l.handleTree(o.data,"id","parentId"),V.value.push(t)},y=()=>{p()},Y=()=>{var o;(o=R.value)==null||o.resetFields(),i.value.categoryCode="",i.value.pageNum=1,i.value.pageSize=10,y()},j=o=>{A.value=o.map(t=>t.businessKey),Q.value=o.length!==1,J.value=!o.length},p=()=>{d.value=!0,De(i.value).then(o=>{B.value=o.rows,E.value=o.total,d.value=!1})},G=async o=>{const t=o.businessKey||A.value;await(l==null?void 0:l.$modal.confirm("是否确认删除业务id为【"+t+"】的数据项？")),d.value=!0,b.value==="running"&&(await Ke(t).finally(()=>d.value=!1),p()),l==null||l.$modal.msgSuccess("删除成功")},X=async o=>{await(l==null?void 0:l.$modal.confirm("是否确认撤销当前单据？")),d.value=!0,b.value==="running"&&(await Re(o).finally(()=>d.value=!1),p()),l==null||l.$modal.msgSuccess("撤销成功")},I=async(o,t)=>{const h=_e({wfDefinitionConfigVo:o.wfDefinitionConfigVo,wfNodeConfigVo:o.wfNodeConfigVo,businessKey:o.businessKey,taskId:o.id,type:t});Ae.routerJump(h,l)};return(o,t)=>{const h=ge,Z=Be,N=Ie,L=Le,P=Ne,f=ye,ee=Te,te=Ve,U=Pe,u=Ce,F=we,ne=Ee,k=ve,oe=Se,ae=ke,le=he,se=be;return c(),me("div",Ue,[e(U,{gutter:20},{default:a(()=>[e(L,{lg:4,xs:24,style:{}},{default:a(()=>[e(N,{shadow:"hover"},{default:a(()=>[e(h,{modelValue:s(v),"onUpdate:modelValue":t[0]||(t[0]=C=>x(v)?v.value=C:null),placeholder:"请输入流程分类名","prefix-icon":"Search",clearable:""},null,8,["modelValue"]),e(Z,{ref_key:"categoryTreeRef",ref:$,class:"mt-2","node-key":"id",data:s(V),props:{label:"categoryName",children:"children"},"expand-on-click-node":!1,"filter-node-method":M,"highlight-current":"","default-expand-all":"",onNodeClick:H},null,8,["data"])]),_:1})]),_:1}),e(L,{lg:20,xs:24},{default:a(()=>{var C,q;return[e(de,{"enter-active-class":(C=s(l))==null?void 0:C.animate.searchAnimate.enter,"leave-active-class":(q=s(l))==null?void 0:q.animate.searchAnimate.leave},{default:a(()=>[S(z("div",Fe,[e(N,{shadow:"hover"},{default:a(()=>[S(e(ee,{ref_key:"queryFormRef",ref:R,model:s(i),inline:!0,"label-width":"120px"},{default:a(()=>[e(P,{label:"流程定义名称",prop:"name"},{default:a(()=>[e(h,{modelValue:s(i).name,"onUpdate:modelValue":t[1]||(t[1]=n=>s(i).name=n),placeholder:"请输入流程定义名称",onKeyup:pe(y,["enter"])},null,8,["modelValue"])]),_:1}),e(P,null,{default:a(()=>[e(f,{type:"primary",icon:"Search",onClick:y},{default:a(()=>t[5]||(t[5]=[w("搜索")])),_:1}),e(f,{icon:"Refresh",onClick:Y},{default:a(()=>t[6]||(t[6]=[w("重置")])),_:1})]),_:1})]),_:1},8,["model"]),[[D,s(g)]])]),_:1})],512),[[D,s(g)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(N,{shadow:"hover"},{header:a(()=>[e(U,{gutter:10,class:"mb8"},{default:a(()=>[e(te,{showSearch:s(g),"onUpdate:showSearch":t[2]||(t[2]=n=>x(g)?g.value=n:null),onQueryTable:y},null,8,["showSearch"])]),_:1})]),default:a(()=>[S((c(),m(oe,{border:"",data:s(B),onSelectionChange:j},{default:a(()=>[e(u,{type:"selection",width:"55",align:"center"}),e(u,{align:"center",type:"index",label:"序号",width:"60"}),_("",!0),e(u,{"show-overflow-tooltip":!0,align:"center",label:"流程定义名称"},{default:a(n=>[z("span",null,K(n.row.processDefinitionName)+"v"+K(n.row.processDefinitionVersion)+".0",1)]),_:1}),e(u,{align:"center",prop:"processDefinitionKey",label:"流程定义KEY"}),e(u,{align:"center",prop:"processDefinitionVersion",label:"版本号",width:"90"},{default:a(n=>[w(" v"+K(n.row.processDefinitionVersion)+".0",1)]),_:1}),s(b)==="running"?(c(),m(u,{key:1,align:"center",prop:"isSuspended",label:"状态","min-width":"70"},{default:a(n=>[n.row.isSuspended?(c(),m(F,{key:1,type:"danger"},{default:a(()=>t[8]||(t[8]=[w("挂起")])),_:1})):(c(),m(F,{key:0,type:"success"},{default:a(()=>t[7]||(t[7]=[w("激活")])),_:1}))]),_:1})):_("",!0),e(u,{align:"center",label:"流程状态","min-width":"70"},{default:a(n=>[e(ne,{options:s(O),value:n.row.businessStatus},null,8,["options","value"])]),_:1}),e(u,{align:"center",prop:"startTime",label:"启动时间",width:"160"}),s(b)==="finish"?(c(),m(u,{key:2,align:"center",prop:"endTime",label:"结束时间",width:"160"})):_("",!0),e(u,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:a(n=>[n.row.businessStatus==="draft"||n.row.businessStatus==="cancel"||n.row.businessStatus==="back"?(c(),m(k,{key:0,content:"修改",placement:"top"},{default:a(()=>[e(f,{link:"",type:"primary",icon:"Edit",onClick:T=>I(n.row,"update")},null,8,["onClick"])]),_:2},1024)):_("",!0),n.row.businessStatus==="draft"||n.row.businessStatus==="cancel"||n.row.businessStatus==="back"?(c(),m(k,{key:1,content:"删除",placement:"top"},{default:a(()=>[e(f,{link:"",type:"primary",icon:"Delete",onClick:T=>G(n.row)},null,8,["onClick"])]),_:2},1024)):_("",!0),e(k,{placement:"top",content:"查看"},{default:a(()=>[e(f,{link:"",type:"primary",icon:"View",onClick:T=>I(n.row,"view")},null,8,["onClick"])]),_:2},1024),n.row.businessStatus==="waiting"?(c(),m(k,{key:2,content:"撤销",placement:"top"},{default:a(()=>[e(f,{link:"",type:"primary",icon:"Notification",onClick:T=>X(n.row.businessKey)},null,8,["onClick"])]),_:2},1024)):_("",!0)]),_:1})]),_:1},8,["data"])),[[se,s(d)]]),S(e(ae,{page:s(i).pageNum,"onUpdate:page":t[3]||(t[3]=n=>s(i).pageNum=n),limit:s(i).pageSize,"onUpdate:limit":t[4]||(t[4]=n=>s(i).pageSize=n),total:s(E),onPagination:p},null,8,["page","limit","total"]),[[D,s(E)>0]])]),_:1})]}),_:1})]),_:1}),e(le,{ref:"submitVerifyRef",onSubmitCallback:p},null,512)])}}});export{wt as default};
