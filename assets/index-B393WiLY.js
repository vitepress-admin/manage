import{d as O,aa as I,r as d,ab as Q,b as fe,ah as ce,o as u,c as K,p as a,q as l,w as f,m as j,e as o,I as ge,y as c,U as G,ag as _e,A as g,af as ve,F as be,z as we,t as ye,a1 as ke,S as Ve,x as Ee,ac as Ce,B as Fe,v as Me}from"./index-lTSpdEk7.js";/* empty css                  *//* empty css                       *//* empty css                 *//* empty css                */import{_ as Ne}from"./index-DETqQ1Eq.js";import{E as Se,a as Te}from"./el-table-column-CeYldEjN.js";import"./el-checkbox-CFsK3DwU.js";import{_ as Ue}from"./index-ClTgqZp_.js";/* empty css               */import{_ as De}from"./index-C6_4eamO.js";/* empty css               */import{E as Re,a as qe}from"./el-form-item-BTSOXWOj.js";import{l as $e,g as he,u as Be,a as Pe,d as xe}from"./index-DPDBdY7W.js";import{E as Le}from"./index-CN3IM4O3.js";import{E as ze}from"./index-Bwxu3ZT6.js";import{E as Ae}from"./index-Bd31tYrb.js";import{E as Ie,a as Qe}from"./index-BFZwnNmW.js";import"./_initCloneObject-BdRsYCvt.js";/* empty css                */import"./index-AUwpezVY.js";import"./_baseClone-Dll4RBGg.js";const Ke={class:"p-2"},je={class:"search"},Ge={class:"dialog-footer"},Oe=O({name:"FormManage"}),va=O({...Oe,setup(He){const{proxy:s}=ke(),{wf_form_type:U}=I(s==null?void 0:s.useDict("wf_form_type")),D=d([]),k=d(!1),V=d(!0),E=d(!0),F=d([]),R=d(!0),q=d(!0),M=d(0),$=d(),N=d(),p=Q({visible:!1,title:""}),h={id:void 0,formName:void 0,formType:"static",remark:void 0},H=Q({form:{...h},queryParams:{pageNum:1,pageSize:10,formName:void 0,formType:void 0},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],formName:[{required:!0,message:"表单名称不能为空",trigger:"blur"}],formType:[{required:!0,message:"表单类型不能为空",trigger:"change"}],router:[{required:!0,message:"不能为空",trigger:"blur"}]}}),{queryParams:m,form:r,rules:J}=I(H),b=async()=>{V.value=!0;const n=await $e(m.value);D.value=n.rows,M.value=n.total,V.value=!1},W=()=>{S(),p.visible=!1},S=()=>{var n;r.value={...h},(n=N.value)==null||n.resetFields()},T=()=>{m.value.pageNum=1,b()},X=()=>{var n;(n=$.value)==null||n.resetFields(),T()},Y=n=>{F.value=n.map(e=>e.id),R.value=n.length!=1,q.value=!n.length},Z=()=>{S(),p.visible=!0,p.title="添加表单管理"},B=async n=>{S();const e=(n==null?void 0:n.id)||F.value[0],_=await he(e);Object.assign(r.value,_.data),p.visible=!0,p.title="修改表单管理"},ee=()=>{var n;(n=N.value)==null||n.validate(async e=>{e&&(k.value=!0,r.value.id?await Be(r.value).finally(()=>k.value=!1):await Pe(r.value).finally(()=>k.value=!1),s==null||s.$modal.msgSuccess("操作成功"),p.visible=!1,await b())})},P=async n=>{const e=(n==null?void 0:n.id)||F.value;await(s==null?void 0:s.$modal.confirm('是否确认删除表单管理编号为"'+e+'"的数据项？').finally(()=>V.value=!1)),await xe(e),s==null||s.$modal.msgSuccess("删除成功"),await b()},ae=()=>{s==null||s.download("workflow/formManage/export",{...m.value},`formManage_${new Date().getTime()}.xlsx`)};return fe(()=>{b()}),(n,e)=>{var z,A;const _=Ve,v=Re,i=Ee,x=qe,C=Le,oe=De,le=ze,w=Se,te=Ue,L=Ce,ne=Te,re=Ne,se=Ae,ie=Ie,me=Qe,de=Fe,y=ce("hasPermi"),ue=Me;return u(),K("div",Ke,[a(_e,{"enter-active-class":(z=o(s))==null?void 0:z.animate.searchAnimate.enter,"leave-active-class":(A=o(s))==null?void 0:A.animate.searchAnimate.leave},{default:l(()=>[f(j("div",je,[a(x,{ref_key:"queryFormRef",ref:$,model:o(m),inline:!0},{default:l(()=>[a(v,{label:"表单名称",prop:"formName"},{default:l(()=>[a(_,{modelValue:o(m).formName,"onUpdate:modelValue":e[0]||(e[0]=t=>o(m).formName=t),placeholder:"请输入表单名称",clearable:"",onKeyup:ge(T,["enter"])},null,8,["modelValue"])]),_:1}),a(v,null,{default:l(()=>[a(i,{type:"primary",icon:"Search",onClick:T},{default:l(()=>e[13]||(e[13]=[c("搜索")])),_:1}),a(i,{icon:"Refresh",onClick:X},{default:l(()=>e[14]||(e[14]=[c("重置")])),_:1})]),_:1})]),_:1},8,["model"])],512),[[G,o(E)]])]),_:1},8,["enter-active-class","leave-active-class"]),a(se,{shadow:"never"},{header:l(()=>[a(le,{gutter:10,class:"mb8"},{default:l(()=>[a(C,{span:1.5},{default:l(()=>[f((u(),g(i,{type:"primary",plain:"",icon:"Plus",onClick:Z},{default:l(()=>e[15]||(e[15]=[c("新增")])),_:1})),[[y,["workflow:formManage:add"]]])]),_:1}),a(C,{span:1.5},{default:l(()=>[f((u(),g(i,{type:"success",plain:"",icon:"Edit",disabled:o(R),onClick:e[1]||(e[1]=t=>B())},{default:l(()=>e[16]||(e[16]=[c("修改")])),_:1},8,["disabled"])),[[y,["workflow:formManage:edit"]]])]),_:1}),a(C,{span:1.5},{default:l(()=>[f((u(),g(i,{type:"danger",plain:"",icon:"Delete",disabled:o(q),onClick:e[2]||(e[2]=t=>P())},{default:l(()=>e[17]||(e[17]=[c("删除")])),_:1},8,["disabled"])),[[y,["workflow:formManage:remove"]]])]),_:1}),a(C,{span:1.5},{default:l(()=>[f((u(),g(i,{type:"warning",plain:"",icon:"Download",onClick:ae},{default:l(()=>e[18]||(e[18]=[c("导出")])),_:1})),[[y,["workflow:formManage:export"]]])]),_:1}),a(oe,{showSearch:o(E),"onUpdate:showSearch":e[3]||(e[3]=t=>ve(E)?E.value=t:null),onQueryTable:b},null,8,["showSearch"])]),_:1})]),default:l(()=>[f((u(),g(ne,{data:o(D),onSelectionChange:Y},{default:l(()=>[a(w,{type:"selection",width:"55",align:"center"}),a(w,{label:"表单名称",align:"center",prop:"formName"}),a(w,{label:"表单类型",align:"center"},{default:l(t=>[a(te,{options:o(U),value:t.row.formType},null,8,["options","value"])]),_:1}),a(w,{label:"地址",align:"center",prop:"router"}),a(w,{label:"备注",align:"center",prop:"remark"}),a(w,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:l(t=>[a(L,{content:"修改",placement:"top"},{default:l(()=>[f(a(i,{link:"",type:"primary",icon:"Edit",onClick:pe=>B(t.row)},null,8,["onClick"]),[[y,["workflow:formManage:edit"]]])]),_:2},1024),a(L,{content:"删除",placement:"top"},{default:l(()=>[f(a(i,{link:"",type:"primary",icon:"Delete",onClick:pe=>P(t.row)},null,8,["onClick"]),[[y,["workflow:formManage:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[ue,o(V)]]),f(a(re,{page:o(m).pageNum,"onUpdate:page":e[4]||(e[4]=t=>o(m).pageNum=t),limit:o(m).pageSize,"onUpdate:limit":e[5]||(e[5]=t=>o(m).pageSize=t),total:o(M),onPagination:b},null,8,["page","limit","total"]),[[G,o(M)>0]])]),_:1}),a(de,{modelValue:o(p).visible,"onUpdate:modelValue":e[12]||(e[12]=t=>o(p).visible=t),title:o(p).title,width:"500px","append-to-body":""},{footer:l(()=>[j("div",Ge,[a(i,{loading:o(k),type:"primary",onClick:ee},{default:l(()=>e[19]||(e[19]=[c("确 定")])),_:1},8,["loading"]),a(i,{onClick:W},{default:l(()=>e[20]||(e[20]=[c("取 消")])),_:1})])]),default:l(()=>[a(x,{ref_key:"formManageFormRef",ref:N,model:o(r),rules:o(J),"label-width":"80px"},{default:l(()=>[a(v,{label:"表单名称",prop:"formName"},{default:l(()=>[a(_,{modelValue:o(r).formName,"onUpdate:modelValue":e[6]||(e[6]=t=>o(r).formName=t),placeholder:"请输入表单名称"},null,8,["modelValue"])]),_:1}),a(v,{label:"表单类型",prop:"formType"},{default:l(()=>[a(me,{modelValue:o(r).formType,"onUpdate:modelValue":e[7]||(e[7]=t=>o(r).formType=t),onChange:e[8]||(e[8]=t=>o(r).router="")},{default:l(()=>[(u(!0),K(be,null,we(o(U),t=>(u(),g(ie,{key:t.value,border:"",value:t.value},{default:l(()=>[c(ye(t.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r).formType==="static"?(u(),g(v,{key:0,label:"路由地址",prop:"router"},{default:l(()=>[a(_,{modelValue:o(r).router,"onUpdate:modelValue":e[9]||(e[9]=t=>o(r).router=t),placeholder:"请输入路由地址"},null,8,["modelValue"])]),_:1})):(u(),g(v,{key:1,label:"表单",prop:"router"},{default:l(()=>[a(_,{modelValue:o(r).router,"onUpdate:modelValue":e[10]||(e[10]=t=>o(r).router=t),disabled:"",placeholder:"请选择表单"},{append:l(()=>[a(i,{icon:"Search"})]),_:1},8,["modelValue"])]),_:1})),a(v,{label:"备注",prop:"remark"},{default:l(()=>[a(_,{modelValue:o(r).remark,"onUpdate:modelValue":e[11]||(e[11]=t=>o(r).remark=t),type:"textarea",placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{va as default};
