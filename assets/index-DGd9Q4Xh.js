import{d as be,aa as ke,r as u,ab as M,c4 as he,b as Ce,o as f,c as Ve,p as t,q as n,e as a,af as T,m as x,y as d,ag as Ee,w as C,I as j,U as P,A as g,t as I,i as z,a1 as Se,S as De,x as Ne,ae as Re,ar as Ke,B as $e,v as Te}from"./index-lTSpdEk7.js";/* empty css                  */import{_ as xe}from"./index-DETqQ1Eq.js";import{E as Ie,a as ze}from"./el-table-column-CeYldEjN.js";import"./el-checkbox-CFsK3DwU.js";import{_ as Ue}from"./index-ClTgqZp_.js";/* empty css               */import{_ as Be}from"./index-C6_4eamO.js";import{E as Le,a as Fe}from"./el-form-item-BTSOXWOj.js";/* empty css                       *//* empty css                        *//* empty css               *//* empty css                *//* empty css                */import{g as Pe,a as Ae,d as qe,b as He,e as Qe}from"./index-C-fBAate.js";import{m as Ye}from"./index-CrLjxYJj.js";import{l as Je}from"./index-DZiPAqvm.js";import{w as Oe}from"./index-BWlz0r_B.js";import{E as Ge}from"./index-AUwpezVY.js";import{E as Me}from"./index-Bd31tYrb.js";import{E as je}from"./index-CN3IM4O3.js";import{b as We,a as Xe}from"./index-BFZwnNmW.js";import{E as Ze}from"./index-Bwxu3ZT6.js";import"./_initCloneObject-BdRsYCvt.js";import"./_baseClone-Dll4RBGg.js";const et={class:"p-2"},tt={class:"mb-[10px]"},nt={class:"mb-[10px]"},lt={style:{"text-align":"right",margin:"5px 0px 0px 0px"}},Kt=be({__name:"index",setup(at){const{proxy:o}=Se(),{wf_business_status:W}=ke(o==null?void 0:o.useDict("wf_business_status")),A=u(),q=u(),m=u(!0),X=u([]),H=u([]),Z=u(!0),Q=u(!0),b=u(!0),V=u(0),ee=u(""),E=u([]),te=u([]),U=u([]),S=u(""),k=M({visible:!1,title:"流程定义"}),c=u("running"),D=u(""),s=u({pageNum:1,pageSize:10,name:void 0,key:void 0,categoryCode:void 0}),ne=l=>{s.value.categoryCode=l.categoryCode,l.categoryCode==="ALL"&&(s.value.categoryCode=""),_()},le=(l,e)=>l?e.categoryName.indexOf(l)!==-1:!0;he(()=>{q.value.filter(S.value)},{flush:"post"});const ae=async()=>{const l=await Je();U.value=[];const e={categoryCode:"ALL",categoryName:"顶级节点",children:[]};e.children=o==null?void 0:o.handleTree(l.data,"id","parentId"),U.value.push(e)},_=()=>{c.value==="running"?y():B()},oe=()=>{var l;(l=A.value)==null||l.resetFields(),s.value.categoryCode="",s.value.pageNum=1,s.value.pageSize=10,_()},ie=l=>{X.value=l.map(e=>e.id),H.value=l.map(e=>e.businessKey),Z.value=l.length!==1,Q.value=!l.length},y=()=>{m.value=!0,Pe(s.value).then(l=>{E.value=l.rows,V.value=l.total,m.value=!1})},B=()=>{m.value=!0,Ae(s.value).then(l=>{E.value=l.rows,V.value=l.total,m.value=!1})},Y=async l=>{const e=l.businessKey||H.value;await(o==null?void 0:o.$modal.confirm("是否确认删除业务id为【"+e+"】的数据项？")),m.value=!0,c.value==="running"?(await qe(e).finally(()=>m.value=!1),y()):(await He(e).finally(()=>m.value=!1),B()),o==null||o.$modal.msgSuccess("删除成功")},se=async l=>{E.value=[],s.value.pageNum=1,l==="running"?y():B()},re=async l=>{if(await(o==null?void 0:o.$modal.confirm("是否确认作废业务id为【"+l.businessKey+"】的数据项？")),m.value=!0,c.value==="running"){let e={businessKey:l.businessKey,deleteReason:D.value};await Qe(e).finally(()=>m.value=!1),y(),o==null||o.$modal.msgSuccess("操作成功")}},ue=async l=>{(o==null?void 0:o.$refs[`popoverRef${l}`]).hide()},de=async l=>{await(o==null?void 0:o.$modal.confirm("是否确认切换？")),m.value=!0,Ye(ee.value,l).then(e=>{o==null||o.$modal.msgSuccess("操作成功"),y(),k.visible=!1,m.value=!1})},me=l=>{const e=M({wfDefinitionConfigVo:l.wfDefinitionConfigVo,wfNodeConfigVo:l.wfNodeConfigVo,businessKey:l.businessKey,taskId:l.id,type:"view"});Oe.routerJump(e,o)};return Ce(()=>{y(),ae()}),(l,e)=>{const N=De,pe=Ge,R=Me,w=je,J=We,fe=Xe,L=Le,v=Ne,ce=Fe,ge=Be,K=Ze,r=Ie,$=Re,ve=Ue,_e=Ke,O=ze,ye=xe,we=$e,G=Te;return f(),Ve("div",et,[t(K,{gutter:20},{default:n(()=>[t(w,{lg:4,xs:24,style:{}},{default:n(()=>[t(R,{shadow:"hover"},{default:n(()=>[t(N,{modelValue:a(S),"onUpdate:modelValue":e[0]||(e[0]=p=>T(S)?S.value=p:null),placeholder:"请输入流程分类名","prefix-icon":"Search",clearable:""},null,8,["modelValue"]),t(pe,{ref_key:"categoryTreeRef",ref:q,class:"mt-2","node-key":"id",data:a(U),props:{label:"categoryName",children:"children"},"expand-on-click-node":!1,"filter-node-method":le,"highlight-current":"","default-expand-all":"",onNodeClick:ne},null,8,["data"])]),_:1})]),_:1}),t(w,{lg:20,xs:24},{default:n(()=>{var p,F;return[x("div",tt,[t(R,{shadow:"hover",class:"text-center"},{default:n(()=>[t(fe,{modelValue:a(c),"onUpdate:modelValue":e[1]||(e[1]=i=>T(c)?c.value=i:null),onChange:e[2]||(e[2]=i=>se(a(c)))},{default:n(()=>[t(J,{value:"running"},{default:n(()=>e[10]||(e[10]=[d("运行中")])),_:1}),t(J,{value:"finish"},{default:n(()=>e[11]||(e[11]=[d("已完成")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),t(Ee,{"enter-active-class":(p=a(o))==null?void 0:p.animate.searchAnimate.enter,"leave-active-class":(F=a(o))==null?void 0:F.animate.searchAnimate.leave},{default:n(()=>[C(x("div",nt,[t(R,{shadow:"hover"},{default:n(()=>[C(t(ce,{ref_key:"queryFormRef",ref:A,model:a(s),inline:!0,"label-width":"120px"},{default:n(()=>[t(L,{label:"流程定义名称",prop:"name"},{default:n(()=>[t(N,{modelValue:a(s).name,"onUpdate:modelValue":e[3]||(e[3]=i=>a(s).name=i),placeholder:"请输入流程定义名称",onKeyup:j(_,["enter"])},null,8,["modelValue"])]),_:1}),t(L,{label:"流程定义KEY",prop:"key"},{default:n(()=>[t(N,{modelValue:a(s).key,"onUpdate:modelValue":e[4]||(e[4]=i=>a(s).key=i),placeholder:"请输入流程定义KEY",onKeyup:j(_,["enter"])},null,8,["modelValue"])]),_:1}),t(L,null,{default:n(()=>[t(v,{type:"primary",icon:"Search",onClick:_},{default:n(()=>e[12]||(e[12]=[d("搜索")])),_:1}),t(v,{icon:"Refresh",onClick:oe},{default:n(()=>e[13]||(e[13]=[d("重置")])),_:1})]),_:1})]),_:1},8,["model"]),[[P,a(b)]])]),_:1})],512),[[P,a(b)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(R,{shadow:"hover"},{header:n(()=>[t(K,{gutter:10,class:"mb8"},{default:n(()=>[t(w,{span:1.5},{default:n(()=>[t(v,{type:"danger",plain:"",icon:"Delete",disabled:a(Q),onClick:Y},{default:n(()=>e[14]||(e[14]=[d("删除")])),_:1},8,["disabled"])]),_:1}),t(ge,{showSearch:a(b),"onUpdate:showSearch":e[5]||(e[5]=i=>T(b)?b.value=i:null),onQueryTable:_},null,8,["showSearch"])]),_:1})]),default:n(()=>[C((f(),g(O,{border:"",data:a(E),onSelectionChange:ie},{default:n(()=>[t(r,{type:"selection",width:"55",align:"center"}),t(r,{align:"center",type:"index",label:"序号",width:"60"}),t(r,{"show-overflow-tooltip":!0,align:"center",label:"流程定义名称"},{default:n(i=>[x("span",null,I(i.row.processDefinitionName)+"v"+I(i.row.processDefinitionVersion)+".0",1)]),_:1}),t(r,{align:"center",prop:"processDefinitionKey",label:"流程定义KEY"}),t(r,{align:"center",prop:"processDefinitionVersion",label:"版本号",width:"90"},{default:n(i=>[d(" v"+I(i.row.processDefinitionVersion)+".0",1)]),_:1}),a(c)==="running"?(f(),g(r,{key:0,align:"center",prop:"isSuspended",label:"状态","min-width":"70"},{default:n(i=>[i.row.isSuspended?(f(),g($,{key:1,type:"danger"},{default:n(()=>e[16]||(e[16]=[d("挂起")])),_:1})):(f(),g($,{key:0,type:"success"},{default:n(()=>e[15]||(e[15]=[d("激活")])),_:1}))]),_:1})):z("",!0),t(r,{align:"center",label:"流程状态","min-width":"70"},{default:n(i=>[t(ve,{options:a(W),value:i.row.businessStatus},null,8,["options","value"])]),_:1}),t(r,{align:"center",prop:"startTime",label:"启动时间",width:"160"}),a(c)==="finish"?(f(),g(r,{key:1,align:"center",prop:"endTime",label:"结束时间",width:"160"})):z("",!0),t(r,{label:"操作",align:"center",width:130},{default:n(i=>[a(c)==="running"?(f(),g(K,{key:0,gutter:10,class:"mb8"},{default:n(()=>[t(w,{span:1.5},{default:n(()=>[t(_e,{ref:`popoverRef${i.$index}`,trigger:"click",placement:"left",width:300},{reference:n(()=>[t(v,{link:"",type:"primary",size:"small",icon:"CircleClose"},{default:n(()=>e[19]||(e[19]=[d("作废")])),_:1})]),default:n(()=>[t(N,{modelValue:a(D),"onUpdate:modelValue":e[6]||(e[6]=h=>T(D)?D.value=h:null),resize:"none",rows:3,type:"textarea",placeholder:"请输入作废原因"},null,8,["modelValue"]),x("div",lt,[t(v,{size:"small",text:"",onClick:h=>ue(i.$index)},{default:n(()=>e[17]||(e[17]=[d("取消")])),_:2},1032,["onClick"]),t(v,{size:"small",type:"primary",onClick:h=>re(i.row)},{default:n(()=>e[18]||(e[18]=[d("确认")])),_:2},1032,["onClick"])])]),_:2},1536)]),_:2},1024),t(w,{span:1.5},{default:n(()=>[t(v,{link:"",type:"primary",size:"small",icon:"Delete",onClick:h=>Y(i.row)},{default:n(()=>e[20]||(e[20]=[d("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)):z("",!0),t(K,{gutter:10,class:"mb8"},{default:n(()=>[t(w,{span:1.5},{default:n(()=>[t(v,{link:"",type:"primary",size:"small",icon:"View",onClick:h=>me(i.row)},{default:n(()=>e[21]||(e[21]=[d("查看")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[G,a(m)]]),C(t(ye,{page:a(s).pageNum,"onUpdate:page":e[7]||(e[7]=i=>a(s).pageNum=i),limit:a(s).pageSize,"onUpdate:limit":e[8]||(e[8]=i=>a(s).pageSize=i),total:a(V),onPagination:_},null,8,["page","limit","total"]),[[P,a(V)>0]])]),_:1})]}),_:1})]),_:1}),a(k).visible?(f(),g(we,{key:0,modelValue:a(k).visible,"onUpdate:modelValue":e[9]||(e[9]=p=>a(k).visible=p),title:a(k).title,width:"70%"},{default:n(()=>[C((f(),g(O,{data:a(te)},{default:n(()=>[t(r,{fixed:"",align:"center",type:"index",label:"序号",width:"60"}),t(r,{fixed:"",align:"center",prop:"name",label:"流程定义名称"}),t(r,{align:"center",prop:"key",label:"标识Key"}),t(r,{align:"center",prop:"version",label:"版本号",width:"90"},{default:n(p=>[d(" v"+I(p.row.version)+".0",1)]),_:1}),t(r,{align:"center",prop:"suspensionState",label:"状态","min-width":"70"},{default:n(p=>[p.row.suspensionState==1?(f(),g($,{key:0,type:"success"},{default:n(()=>e[22]||(e[22]=[d("激活")])),_:1})):(f(),g($,{key:1,type:"danger"},{default:n(()=>e[23]||(e[23]=[d("挂起")])),_:1}))]),_:1}),t(r,{align:"center",prop:"deploymentTime",label:"部署时间","show-overflow-tooltip":!0}),t(r,{fixed:"right",label:"操作",align:"center",width:"200","class-name":"small-padding fixed-width"},{default:n(p=>[t(v,{link:"",type:"primary",size:"small",icon:"Sort",onClick:F=>de(p.row.id)},{default:n(()=>e[24]||(e[24]=[d("切换")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[G,a(m)]])]),_:1},8,["modelValue","title"])):z("",!0)])}}});export{Kt as default};
