import{aX as Ue,b0 as xe,d as Y,aS as Ie,ax as Le,k as Ke,aJ as Be,o as y,A as k,q as l,ay as Pe,aj as Re,e as o,au as Fe,aW as Me,az as Ye,aA as Ae,a2 as ee,r as m,ab as j,b as qe,c4 as Oe,a0 as Xe,c as J,p as t,af as W,ag as Qe,w as x,m as h,I as ce,y as r,U as G,t as w,i as Z,a1 as He,av as je,S as Je,x as We,ae as Ge,R as Ze,B as et,v as tt}from"./index-m2T4SZVn.js";/* empty css                  */import{E as lt}from"./el-progress-Di-37GGu.js";/* empty css                */import"./el-checkbox-Di_0n5g6.js";import{E as at}from"./el-tree-select-CRmJgqbh.js";import{_ as ot}from"./index-BhbZE42J.js";import{E as nt,a as it}from"./el-table-column-Ct10N-EN.js";import{E as st}from"./el-link-BBsYxYBa.js";/* empty css               */import{_ as rt}from"./index-BD8u3RiJ.js";import{E as dt,a as ut}from"./el-form-item-DLokr9el.js";/* empty css               *//* empty css                */import{l as mt,g as pt,d as ft,a as ct,u as vt,c as gt,b as yt}from"./index-C1ZPlIbe.js";import{_ as _t}from"./processPreview.vue_vue_type_script_setup_true_lang-DR0DmpWd.js";import{l as wt}from"./index-CTzqkjN-.js";import{E as kt}from"./index-B0J4ZlR2.js";import{E as bt}from"./index-BO4v6Fvb.js";import{E as Ct}from"./index-DS-S05OM.js";import{E as St}from"./index-DoUHKWWw.js";import"./index-BQb7vvp9.js";import"./_baseClone-K_h7d9tC.js";import"./_initCloneObject-Dp4qRBHy.js";import"./index-BBX18FL0.js";import"./el-main-DGBdzvrP.js";import"./Viewer-Dv6JrHHA.js";import"./index-DNdxjwja.js";const ht=Ue({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:xe,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),Et=Y({name:"ElText"}),Nt=Y({...Et,props:ht,setup(b){const n=b,I=Ie(),C=Le("text"),B=Ke(()=>[C.b(),C.m(n.type),C.m(I.value),C.is("truncated",n.truncated),C.is("line-clamp",!Be(n.lineClamp))]);return(d,c)=>(y(),k(Me(d.tag),{class:Re(o(B)),style:Fe({"-webkit-line-clamp":d.lineClamp})},{default:l(()=>[Pe(d.$slots,"default")]),_:3},8,["class","style"]))}});var Vt=Ye(Nt,[["__file","text.vue"]]);const $t=Ae(Vt),Dt=b=>ee({url:"/workflow/definitionConfig/getByDefId/"+b,method:"get"}),ve=b=>ee({url:"/workflow/definitionConfig/saveOrUpdate",method:"post",data:b}),Tt=(b,n)=>ee({url:`/workflow/definitionConfig/getByTableNameNotDefId/${b}/${n}`,method:"get"}),zt={class:"p-2"},Ut={class:"mb-[10px]"},xt={key:0},It={class:"mb5"},Lt={class:"dialog-footer"},Kt=Y({name:"processDefinition"}),ml=Y({...Kt,setup(b){const{proxy:n}=He(),I=m(),C=m(),B=m(),d=m({}),c=m(!0),te=m([]),le=m([]),ae=m([]),ge=m(!0),oe=m(!0),L=m(!0),A=m(0),q=m(!1),ne=m([]),ie=m([]),P=m([]),R=m(""),V=m(),$=j({visible:!1,title:"部署流程文件"}),K=j({visible:!1,title:"历史版本"}),E=j({visible:!1,title:"流程定义配置"}),p=m({pageNum:1,pageSize:10,name:void 0,key:void 0,categoryCode:void 0});qe(()=>{_(),we()});const ye=a=>{p.value.categoryCode=a.categoryCode,a.categoryCode==="ALL"&&(p.value.categoryCode=""),D()},_e=(a,e)=>a?e.categoryName.indexOf(a)!==-1:!0;Oe(()=>{B.value.filter(R.value)},{flush:"post"});const we=async()=>{const a=await wt();P.value=[];const e={categoryCode:"ALL",categoryName:"顶级节点",children:[]};e.children=n==null?void 0:n.handleTree(a.data,"id","parentId"),P.value.push(e)},D=()=>{p.value.pageNum=1,_()},ke=()=>{var a;(a=C.value)==null||a.resetFields(),p.value.categoryCode="",p.value.pageNum=1,p.value.pageSize=10,D()},se=a=>{te.value=a.map(e=>e.id),le.value=a.map(e=>e.deploymentId),ae.value=a.map(e=>e.key),ge.value=a.length!==1,oe.value=!a.length},_=async()=>{c.value=!0;const a=await mt(p.value);ne.value=a.rows,A.value=a.total,c.value=!1},be=async(a,e)=>{K.visible=!0,c.value=!0;const v=await pt(e);v.data&&v.data.length>0&&(ie.value=v.data.filter(N=>N.id!==a)),c.value=!1},re=async(a,e)=>{c.value=!0;const v=await ft(a);if(I.value){const N=v.data.xmlStr;c.value=!1,I.value.openDialog(N,e)}},O=async a=>{const e=(a==null?void 0:a.id)||te.value,v=(a==null?void 0:a.deploymentId)||le.value,N=(a==null?void 0:a.key)||ae.value;await(n==null?void 0:n.$modal.confirm("是否确认删除流程定义KEY为【"+N+"】的数据项？")),c.value=!0,await ct(v,e).finally(()=>c.value=!1),await _(),n==null||n.$modal.msgSuccess("删除成功")},de=async a=>{let e;a.suspensionState===1?e=`暂停后，此流程下的所有任务都不允许往后流转，您确定挂起【${a.name||a.key}】吗？`:e=`启动后，此流程下的所有任务都允许往后流转，您确定激活【${a.name||a.key}】吗？`,await(n==null?void 0:n.$modal.confirm(e)),c.value=!0,await vt(a.id).finally(()=>c.value=!1),await _(),n==null||n.$modal.msgSuccess("操作成功")},ue=async a=>{await(n==null?void 0:n.$modal.confirm("是否确认转换流程定义key为【"+a.key+"】的数据项？")),await gt(a.id).finally(()=>c.value=!1),_(),n==null||n.$modal.msgSuccess("操作成功")},Ce=()=>{if(V.value==="ALL")return n==null||n.$modal.msgError("顶级节点不可作为分类！"),!1;if(!V.value)return n==null||n.$modal.msgError("请选择左侧要上传的分类！"),!1},Se=a=>{let e=new FormData;q.value=!0,e.append("file",a.file),e.append("categoryCode",V.value),yt(e).then(()=>{$.visible=!1,n==null||n.$modal.msgSuccess("部署成功"),D()}).finally(()=>{q.value=!1})},me=async a=>{E.visible=!0,d.value.processKey=a.key,d.value.definitionId=a.id,d.value.version=a.version;const e=await Dt(a.id);e.data?d.value=e.data:(d.value.tableName=void 0,d.value.remark=void 0)},he=async()=>{Tt(d.value.tableName,d.value.definitionId).then(a=>{a.data&&a.data.length>0?je.confirm("表名已被【"+a.data[0].processKey+"】版本v"+a.data[0].version+".0绑定确认后将会删除绑定的流程KEY!","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{ve(d.value).then(e=>{e.code===200&&(n==null||n.$modal.msgSuccess("操作成功"),E.visible=!1,_())})}):ve(d.value).then(e=>{e.code===200&&(n==null||n.$modal.msgSuccess("操作成功"),E.visible=!1,_())})})};return(a,e)=>{const v=Je,N=kt,X=bt,g=Ct,T=dt,f=We,pe=ut,Ee=rt,z=St,u=nt,F=st,M=Ge,fe=it,Ne=ot,Ve=$t,$e=at,De=Xe("upload-filled"),Te=Ze,ze=lt,Q=et,H=tt;return y(),J("div",zt,[t(z,{gutter:20},{default:l(()=>[t(g,{lg:4,xs:24,style:{}},{default:l(()=>[t(X,{shadow:"hover"},{default:l(()=>[t(v,{modelValue:o(R),"onUpdate:modelValue":e[0]||(e[0]=i=>W(R)?R.value=i:null),placeholder:"请输入流程分类名","prefix-icon":"Search",clearable:""},null,8,["modelValue"]),t(N,{ref_key:"categoryTreeRef",ref:B,class:"mt-2","node-key":"id",data:o(P),props:{label:"categoryName",children:"children"},"expand-on-click-node":!1,"filter-node-method":_e,"highlight-current":"","default-expand-all":"",onNodeClick:ye},null,8,["data"])]),_:1})]),_:1}),t(g,{lg:20,xs:24},{default:l(()=>{var i,S;return[t(Qe,{"enter-active-class":(i=o(n))==null?void 0:i.animate.searchAnimate.enter,"leave-active-class":(S=o(n))==null?void 0:S.animate.searchAnimate.leave},{default:l(()=>[x(h("div",Ut,[t(X,{shadow:"hover"},{default:l(()=>[x(t(pe,{ref_key:"queryFormRef",ref:C,model:o(p),inline:!0,"label-width":"120px"},{default:l(()=>[t(T,{label:"流程定义名称",prop:"name"},{default:l(()=>[t(v,{modelValue:o(p).name,"onUpdate:modelValue":e[1]||(e[1]=s=>o(p).name=s),placeholder:"请输入流程定义名称",clearable:"",onKeyup:ce(D,["enter"])},null,8,["modelValue"])]),_:1}),t(T,{label:"流程定义KEY",prop:"key"},{default:l(()=>[t(v,{modelValue:o(p).key,"onUpdate:modelValue":e[2]||(e[2]=s=>o(p).key=s),placeholder:"请输入流程定义KEY",clearable:"",onKeyup:ce(D,["enter"])},null,8,["modelValue"])]),_:1}),t(T,null,{default:l(()=>[t(f,{type:"primary",icon:"Search",onClick:D},{default:l(()=>e[16]||(e[16]=[r("搜索")])),_:1}),t(f,{icon:"Refresh",onClick:ke},{default:l(()=>e[17]||(e[17]=[r("重置")])),_:1})]),_:1})]),_:1},8,["model"]),[[G,o(L)]])]),_:1})],512),[[G,o(L)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(X,{shadow:"hover"},{header:l(()=>[t(z,{gutter:10,class:"mb8"},{default:l(()=>[t(g,{span:1.5},{default:l(()=>[t(f,{type:"danger",icon:"Delete",disabled:o(oe),onClick:e[3]||(e[3]=s=>O())},{default:l(()=>e[18]||(e[18]=[r("删除")])),_:1},8,["disabled"])]),_:1}),t(g,{span:1.5},{default:l(()=>[t(f,{type:"primary",icon:"UploadFilled",onClick:e[4]||(e[4]=s=>o($).visible=!0)},{default:l(()=>e[19]||(e[19]=[r("部署流程文件")])),_:1})]),_:1}),t(Ee,{showSearch:o(L),"onUpdate:showSearch":e[5]||(e[5]=s=>W(L)?L.value=s:null),onQueryTable:_},null,8,["showSearch"])]),_:1})]),default:l(()=>[x((y(),k(fe,{border:"",data:o(ne),onSelectionChange:se},{default:l(()=>[t(u,{type:"selection",width:"55",align:"center"}),t(u,{align:"center",type:"index",label:"序号",width:"60"}),t(u,{align:"center",prop:"name",label:"流程定义名称","show-overflow-tooltip":!0}),t(u,{align:"center",prop:"key",label:"标识KEY",width:"80"}),t(u,{align:"center",prop:"version",label:"版本号",width:"80"},{default:l(s=>[r(" v"+w(s.row.version)+".0",1)]),_:1}),t(u,{align:"center",prop:"resourceName",label:"流程XML",width:"100","show-overflow-tooltip":!0},{default:l(s=>[t(F,{type:"primary",onClick:U=>re(s.row.id,"xml")},{default:l(()=>[r(w(s.row.resourceName),1)]),_:2},1032,["onClick"])]),_:1}),t(u,{align:"center",prop:"diagramResourceName",label:"流程图片",width:"100","show-overflow-tooltip":!0},{default:l(s=>[t(F,{type:"primary",onClick:U=>re(s.row.id,"bpmn")},{default:l(()=>[r(w(s.row.diagramResourceName),1)]),_:2},1032,["onClick"])]),_:1}),t(u,{align:"center",prop:"suspensionState",label:"状态",width:"80"},{default:l(s=>[s.row.suspensionState==1?(y(),k(M,{key:0,type:"success"},{default:l(()=>e[20]||(e[20]=[r("激活")])),_:1})):(y(),k(M,{key:1,type:"danger"},{default:l(()=>e[21]||(e[21]=[r("挂起")])),_:1}))]),_:1}),t(u,{align:"center",prop:"deploymentTime",label:"部署时间",width:"120","show-overflow-tooltip":!0}),t(u,{align:"center",label:"表名/表单KEY",width:"120","show-overflow-tooltip":!0},{default:l(s=>[s.row.wfDefinitionConfigVo?(y(),J("span",xt,w(s.row.wfDefinitionConfigVo.tableName),1)):Z("",!0)]),_:1}),t(u,{fixed:"right",label:"操作",align:"center",width:"220","class-name":"small-padding fixed-width"},{default:l(s=>[t(z,{gutter:10,class:"mb8"},{default:l(()=>[t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",size:"small",icon:s.row.suspensionState===1?"Lock":"Unlock",onClick:U=>de(s.row)},{default:l(()=>[r(w(s.row.suspensionState===1?"挂起流程":"激活流程"),1)]),_:2},1032,["icon","onClick"])]),_:2},1024),t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",size:"small",icon:"Document",onClick:U=>be(s.row.id,s.row.key)},{default:l(()=>e[22]||(e[22]=[r(" 历史版本 ")])),_:2},1032,["onClick"])]),_:2},1024),t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",size:"small",icon:"Delete",onClick:U=>O(s.row)},{default:l(()=>e[23]||(e[23]=[r("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),t(z,{gutter:10,class:"mb8"},{default:l(()=>[t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",size:"small",icon:"Sort",onClick:U=>ue(s.row)},{default:l(()=>e[24]||(e[24]=[r(" 转换模型 ")])),_:2},1032,["onClick"])]),_:2},1024),t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",size:"small",icon:"Tickets",onClick:U=>me(s.row)},{default:l(()=>e[25]||(e[25]=[r("绑定业务")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[H,o(c)]]),x(t(Ne,{page:o(p).pageNum,"onUpdate:page":e[6]||(e[6]=s=>o(p).pageNum=s),limit:o(p).pageSize,"onUpdate:limit":e[7]||(e[7]=s=>o(p).pageSize=s),total:o(A),onPagination:_},null,8,["page","limit","total"]),[[G,o(A)>0]])]),_:1})]}),_:1})]),_:1}),t(_t,{ref_key:"previewRef",ref:I},null,512),o($).visible?(y(),k(Q,{key:0,modelValue:o($).visible,"onUpdate:modelValue":e[9]||(e[9]=i=>o($).visible=i),title:o($).title,width:"30%"},{default:l(()=>[x((y(),J("div",null,[h("div",It,[t(Ve,{class:"mx-1",size:"large"},{default:l(()=>e[26]||(e[26]=[h("span",{class:"text-danger"},"*",-1),r("请选择部署流程分类：")])),_:1}),t($e,{modelValue:o(V),"onUpdate:modelValue":e[8]||(e[8]=i=>W(V)?V.value=i:null),data:o(P),props:{value:"categoryCode",label:"categoryName",children:"children"},filterable:"","value-key":"categoryCode","render-after-expand":!1,"check-strictly":"",style:{width:"240px"}},null,8,["modelValue","data"])]),t(ze,{class:"upload-demo",drag:"",multiple:"",accept:"application/zip,application/xml,.bpmn","before-upload":Ce,"http-request":Se},{default:l(()=>[t(Te,{class:"UploadFilled"},{default:l(()=>[t(De)]),_:1}),e[27]||(e[27]=h("div",{class:"el-upload__text"},[h("em",null,"点击上传，选择BPMN流程文件")],-1)),e[28]||(e[28]=h("div",{class:"el-upload__text"},"仅支持 .zip、.bpmn20.xml、bpmn 格式文件",-1)),e[29]||(e[29]=h("div",{class:"el-upload__text"},"PS:如若部署请部署从本项目模型管理导出的数据",-1))]),_:1})])),[[H,o(q)]])]),_:1},8,["modelValue","title"])):Z("",!0),o(K).visible?(y(),k(Q,{key:1,modelValue:o(K).visible,"onUpdate:modelValue":e[10]||(e[10]=i=>o(K).visible=i),title:o(K).title,width:"70%"},{default:l(()=>[x((y(),k(fe,{data:o(ie),onSelectionChange:se},{default:l(()=>[t(u,{type:"selection",width:"55",align:"center"}),t(u,{align:"center",type:"index",label:"序号",width:"60"}),t(u,{align:"center",prop:"name",label:"流程定义名称","show-overflow-tooltip":!0,"min-width":"80"}),t(u,{align:"center",prop:"key",label:"标识KEY"}),t(u,{align:"center",prop:"version",label:"版本号",width:"90"},{default:l(i=>[r(" v"+w(i.row.version)+".0",1)]),_:1}),t(u,{align:"center",prop:"resourceName",label:"流程XML","min-width":"80","show-overflow-tooltip":!0},{default:l(i=>[t(F,{type:"primary",onClick:S=>a.clickPreviewXML(i.row.id)},{default:l(()=>[r(w(i.row.resourceName),1)]),_:2},1032,["onClick"])]),_:1}),t(u,{align:"center",prop:"diagramResourceName",label:"流程图片","min-width":"80","show-overflow-tooltip":!0},{default:l(i=>[t(F,{type:"primary",onClick:S=>a.clickPreviewImg(i.row.id)},{default:l(()=>[r(w(i.row.diagramResourceName),1)]),_:2},1032,["onClick"])]),_:1}),t(u,{align:"center",prop:"suspensionState",label:"状态","min-width":"70"},{default:l(i=>[i.row.suspensionState==1?(y(),k(M,{key:0,type:"success"},{default:l(()=>e[30]||(e[30]=[r("激活")])),_:1})):(y(),k(M,{key:1,type:"danger"},{default:l(()=>e[31]||(e[31]=[r("挂起")])),_:1}))]),_:1}),t(u,{align:"center",prop:"deploymentTime",label:"部署时间","show-overflow-tooltip":!0}),t(u,{fixed:"right",label:"操作",align:"center",width:"200","class-name":"small-padding fixed-width"},{default:l(i=>[t(z,{gutter:10,class:"mb8"},{default:l(()=>[t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",size:"small",icon:i.row.suspensionState===1?"Lock":"Unlock",onClick:S=>de(i.row)},{default:l(()=>[r(w(i.row.suspensionState===1?"挂起流程":"激活流程"),1)]),_:2},1032,["icon","onClick"])]),_:2},1024),t(g,{span:1.5},{default:l(()=>[t(f,{type:"text",size:"small",icon:"Tickets",onClick:S=>me(i.row)},{default:l(()=>e[32]||(e[32]=[r("绑定业务")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),t(z,{gutter:10,class:"mb8"},{default:l(()=>[t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",icon:"Sort",size:"small",onClick:S=>ue(i.row)},{default:l(()=>e[33]||(e[33]=[r(" 转换模型 ")])),_:2},1032,["onClick"])]),_:2},1024),t(g,{span:1.5},{default:l(()=>[t(f,{link:"",type:"primary",icon:"Delete",size:"small",onClick:S=>O(i.row)},{default:l(()=>e[34]||(e[34]=[r("删除")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[H,o(c)]])]),_:1},8,["modelValue","title"])):Z("",!0),t(Q,{modelValue:o(E).visible,"onUpdate:modelValue":e[15]||(e[15]=i=>o(E).visible=i),title:o(E).title,width:"650px","append-to-body":"","close-on-click-modal":!1},{footer:l(()=>[h("div",Lt,[t(f,{onClick:e[14]||(e[14]=i=>o(E).visible=!1)},{default:l(()=>e[35]||(e[35]=[r("取消")])),_:1}),t(f,{type:"primary",onClick:he},{default:l(()=>e[36]||(e[36]=[r("保存")])),_:1})])]),default:l(()=>[t(pe,{model:o(d),"label-width":"auto"},{default:l(()=>[t(T,{label:"流程KEY"},{default:l(()=>[t(v,{modelValue:o(d).processKey,"onUpdate:modelValue":e[11]||(e[11]=i=>o(d).processKey=i),disabled:""},null,8,["modelValue"])]),_:1}),t(T,{label:"表名",prop:"formId"},{default:l(()=>[t(v,{modelValue:o(d).tableName,"onUpdate:modelValue":e[12]||(e[12]=i=>o(d).tableName=i),placeholder:"示例:test_leave"},null,8,["modelValue"])]),_:1}),t(T,{label:"备注"},{default:l(()=>[t(v,{modelValue:o(d).remark,"onUpdate:modelValue":e[13]||(e[13]=i=>o(d).remark=i),type:"textarea",resize:"none"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});export{ml as default};
