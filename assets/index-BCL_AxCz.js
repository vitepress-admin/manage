import{a2 as I,d as ae,aa as Z,r as c,ab as ee,b as Ve,ah as Ce,o as m,c as E,p as l,q as o,w as _,m as le,e as a,I as T,F as x,z as R,A as b,y as h,U as te,ag as Ie,af as Ue,t as we,a1 as Se,S as ke,P as Ee,Q as Te,x as De,ac as Ne,B as Pe,v as Fe}from"./index-m2T4SZVn.js";/* empty css                  *//* empty css                          */import{E as qe,a as xe}from"./el-checkbox-Di_0n5g6.js";import{_ as Re}from"./index-BhbZE42J.js";import{E as $e,a as Ge}from"./el-table-column-Ct10N-EN.js";import{_ as Ae}from"./index-DRQCxnTZ.js";/* empty css               */import{_ as Be}from"./index-BD8u3RiJ.js";/* empty css               *//* empty css                */import{E as Ke,a as Le}from"./el-form-item-DLokr9el.js";import{E as ze}from"./index-BO4v6Fvb.js";import{E as Qe}from"./index-DS-S05OM.js";import{E as je}from"./index-DoUHKWWw.js";import"./_initCloneObject-Dp4qRBHy.js";/* empty css                */import"./index-B0J4ZlR2.js";import"./_baseClone-K_h7d9tC.js";const Oe=g=>I({url:"/vpadmin/themesConfig/list",method:"get",params:g}),Me=g=>I({url:"/vpadmin/themesConfig/"+g,method:"get"}),He=g=>I({url:"/vpadmin/themesConfig",method:"post",data:g}),Je=g=>I({url:"/vpadmin/themesConfig",method:"put",data:g}),We=g=>I({url:"/vpadmin/themesConfig/"+g,method:"delete"}),Xe={class:"p-2"},Ye={class:"mb-[10px]"},Ze={class:"dialog-footer"},el=ae({name:"ThemesConfig"}),yl=ae({...el,setup(g){const{proxy:u}=Se(),{vpa_theme_tags:$,sys_yes_no:D}=Z(u==null?void 0:u.useDict("vpa_theme_tags","sys_yes_no")),G=c([]),U=c(!1),w=c(!0),S=c(!0),N=c([]),A=c(!0),B=c(!0),P=c(0),K=c(),F=c(),v=ee({visible:!1,title:"",isEdit:!1}),L={id:void 0,themeId:void 0,themeName:void 0,ssgType:void 0,tags:void 0,isPublic:void 0,demoUrl:void 0,sourceUrl:void 0,deptId:void 0,userId:void 0},oe=ee({form:{...L},queryParams:{pageNum:1,pageSize:10,themeId:void 0,themeName:void 0,ssgType:void 0,isPublic:void 0,userId:void 0,params:{}},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],themeId:[{required:!0,message:"模板ID不能为空",trigger:"blur"}],themeName:[{required:!0,message:"模板名称不能为空",trigger:"blur"}],ssgType:[{required:!0,message:"SSG类型不能为空",trigger:"blur"}],tags:[{required:!0,message:"模板标签不能为空",trigger:"blur"}],isPublic:[{required:!0,message:"是否公有不能为空",trigger:"change"}]}}),{queryParams:r,form:s,rules:ne}=Z(oe),y=async()=>{w.value=!0;const n=await Oe(r.value);G.value=n.rows,P.value=n.total,w.value=!1},se=()=>{q(),v.visible=!1},q=()=>{var n;s.value={...L},(n=F.value)==null||n.resetFields()},V=()=>{r.value.pageNum=1,y()},ie=()=>{var n;(n=K.value)==null||n.resetFields(),V()},de=n=>{N.value=n.map(e=>e.id),A.value=n.length!=1,B.value=!n.length},re=()=>{q(),v.visible=!0,v.title="添加模板信息"},z=async n=>{q();const e=(n==null?void 0:n.id)||N.value[0],i={...(await Me(e)).data};typeof i.tags=="string"&&(i.tags=i.tags.split(",")),i.tags===null&&(i.tags=[]),Object.assign(s.value,i),v.visible=!0,v.title="修改模板信息"},ue=()=>{var n;(n=F.value)==null||n.validate(async e=>{if(e){U.value=!0;const d={...s.value};d.tags=Array.isArray(d.tags)?d.tags.join(","):d.tags,d.id?await Je(d).finally(()=>U.value=!1):await He(d).finally(()=>U.value=!1),u==null||u.$modal.msgSuccess("操作成功"),v.visible=!1,await y()}})},Q=async n=>{const e=(n==null?void 0:n.id)||N.value;await(u==null?void 0:u.$modal.confirm('是否确认删除模板信息编号为"'+e+'"的数据项？').finally(()=>w.value=!1)),await We(e),u==null||u.$modal.msgSuccess("删除成功"),await y()},me=()=>{u==null||u.download("vpadmin/themesConfig/export",{...r.value},`themesConfig_${new Date().getTime()}.xlsx`)};return Ve(()=>{y()}),(n,e)=>{var X,Y;const d=ke,i=Ke,j=Ee,O=Te,f=De,M=Le,H=ze,k=Qe,pe=Be,ge=je,p=$e,J=Ae,W=Ne,fe=Ge,ce=Re,ve=qe,_e=xe,be=Pe,C=Ce("hasPermi"),he=Fe;return m(),E("div",Xe,[l(Ie,{"enter-active-class":(X=a(u))==null?void 0:X.animate.searchAnimate.enter,"leave-active-class":(Y=a(u))==null?void 0:Y.animate.searchAnimate.leave},{default:o(()=>[_(le("div",Ye,[l(H,{shadow:"hover"},{default:o(()=>[l(M,{ref_key:"queryFormRef",ref:K,model:a(r),inline:!0,"label-width":"auto"},{default:o(()=>[l(i,{label:"模板ID",prop:"themeId"},{default:o(()=>[l(d,{modelValue:a(r).themeId,"onUpdate:modelValue":e[0]||(e[0]=t=>a(r).themeId=t),placeholder:"请输入模板ID",clearable:"",onKeyup:T(V,["enter"])},null,8,["modelValue"])]),_:1}),l(i,{label:"模板名称",prop:"themeName"},{default:o(()=>[l(d,{modelValue:a(r).themeName,"onUpdate:modelValue":e[1]||(e[1]=t=>a(r).themeName=t),placeholder:"请输入模板名称",clearable:"",onKeyup:T(V,["enter"])},null,8,["modelValue"])]),_:1}),l(i,{label:"SSG类型",prop:"ssgType"},{default:o(()=>[l(d,{modelValue:a(r).ssgType,"onUpdate:modelValue":e[2]||(e[2]=t=>a(r).ssgType=t),placeholder:"请输入SSG类型",clearable:"",onKeyup:T(V,["enter"])},null,8,["modelValue"])]),_:1}),l(i,{label:"是否公有",prop:"isPublic"},{default:o(()=>[l(O,{modelValue:a(r).isPublic,"onUpdate:modelValue":e[3]||(e[3]=t=>a(r).isPublic=t),placeholder:"请选择是否公有",clearable:""},{default:o(()=>[(m(!0),E(x,null,R(a(D),t=>(m(),b(j,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"用户id",prop:"userId"},{default:o(()=>[l(d,{modelValue:a(r).userId,"onUpdate:modelValue":e[4]||(e[4]=t=>a(r).userId=t),placeholder:"请输入用户id",clearable:"",onKeyup:T(V,["enter"])},null,8,["modelValue"])]),_:1}),l(i,null,{default:o(()=>[l(f,{type:"primary",icon:"Search",onClick:V},{default:o(()=>e[20]||(e[20]=[h("搜索")])),_:1}),l(f,{icon:"Refresh",onClick:ie},{default:o(()=>e[21]||(e[21]=[h("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[te,a(S)]])]),_:1},8,["enter-active-class","leave-active-class"]),l(H,{shadow:"never"},{header:o(()=>[l(ge,{gutter:10,class:"mb8"},{default:o(()=>[l(k,{span:1.5},{default:o(()=>[_((m(),b(f,{type:"primary",plain:"",icon:"Plus",onClick:re},{default:o(()=>e[22]||(e[22]=[h("新增")])),_:1})),[[C,["vpadmin:themesConfig:add"]]])]),_:1}),l(k,{span:1.5},{default:o(()=>[_((m(),b(f,{type:"success",plain:"",icon:"Edit",disabled:a(A),onClick:e[5]||(e[5]=t=>z())},{default:o(()=>e[23]||(e[23]=[h("修改")])),_:1},8,["disabled"])),[[C,["vpadmin:themesConfig:edit"]]])]),_:1}),l(k,{span:1.5},{default:o(()=>[_((m(),b(f,{type:"danger",plain:"",icon:"Delete",disabled:a(B),onClick:e[6]||(e[6]=t=>Q())},{default:o(()=>e[24]||(e[24]=[h("删除")])),_:1},8,["disabled"])),[[C,["vpadmin:themesConfig:remove"]]])]),_:1}),l(k,{span:1.5},{default:o(()=>[_((m(),b(f,{type:"warning",plain:"",icon:"Download",onClick:me},{default:o(()=>e[25]||(e[25]=[h("导出")])),_:1})),[[C,["vpadmin:themesConfig:export"]]])]),_:1}),l(pe,{showSearch:a(S),"onUpdate:showSearch":e[7]||(e[7]=t=>Ue(S)?S.value=t:null),onQueryTable:y},null,8,["showSearch"])]),_:1})]),default:o(()=>[_((m(),b(fe,{data:a(G),onSelectionChange:de},{default:o(()=>[l(p,{type:"selection",width:"55",align:"center"}),(m(),b(p,{key:0,label:"主键",align:"center",prop:"id"})),l(p,{label:"模板ID",align:"center",prop:"themeId"}),l(p,{label:"模板名称",align:"center",prop:"themeName"}),l(p,{label:"模板标签",align:"center",prop:"tags"},{default:o(t=>[l(J,{options:a($),value:t.row.tags?t.row.tags.split(","):[]},null,8,["options","value"])]),_:1}),l(p,{label:"是否公有",align:"center",prop:"isPublic"},{default:o(t=>[l(J,{options:a(D),value:t.row.isPublic},null,8,["options","value"])]),_:1}),l(p,{label:"demo链接",align:"center",prop:"demoUrl"}),l(p,{label:"来源链接",align:"center",prop:"sourceUrl"}),l(p,{label:"SSG类型",align:"center",prop:"ssgType"}),l(p,{label:"部门id",align:"center",prop:"deptId"}),l(p,{label:"用户id",align:"center",prop:"userId"}),l(p,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:o(t=>[l(W,{content:"修改",placement:"top"},{default:o(()=>[_(l(f,{link:"",type:"primary",icon:"Edit",onClick:ye=>z(t.row)},null,8,["onClick"]),[[C,["vpadmin:themesConfig:edit"]]])]),_:2},1024),l(W,{content:"删除",placement:"top"},{default:o(()=>[_(l(f,{link:"",type:"primary",icon:"Delete",onClick:ye=>Q(t.row)},null,8,["onClick"]),[[C,["vpadmin:themesConfig:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[he,a(w)]]),_(l(ce,{page:a(r).pageNum,"onUpdate:page":e[8]||(e[8]=t=>a(r).pageNum=t),limit:a(r).pageSize,"onUpdate:limit":e[9]||(e[9]=t=>a(r).pageSize=t),total:a(P),onPagination:y},null,8,["page","limit","total"]),[[te,a(P)>0]])]),_:1}),l(be,{modelValue:a(v).visible,"onUpdate:modelValue":e[19]||(e[19]=t=>a(v).visible=t),title:a(v).title,width:"500px","append-to-body":""},{footer:o(()=>[le("div",Ze,[l(f,{loading:a(U),type:"primary",onClick:ue},{default:o(()=>e[26]||(e[26]=[h("确 定")])),_:1},8,["loading"]),l(f,{onClick:se},{default:o(()=>e[27]||(e[27]=[h("取 消")])),_:1})])]),default:o(()=>[l(M,{ref_key:"themesConfigFormRef",ref:F,model:a(s),rules:a(ne),"label-width":"80px"},{default:o(()=>[l(i,{label:"模板ID",prop:"themeId"},{default:o(()=>[l(d,{modelValue:a(s).themeId,"onUpdate:modelValue":e[10]||(e[10]=t=>a(s).themeId=t),placeholder:"请输入模板ID"},null,8,["modelValue"])]),_:1}),l(i,{label:"模板名称",prop:"themeName"},{default:o(()=>[l(d,{modelValue:a(s).themeName,"onUpdate:modelValue":e[11]||(e[11]=t=>a(s).themeName=t),placeholder:"请输入模板名称"},null,8,["modelValue"])]),_:1}),l(i,{label:"SSG类型",prop:"ssgType"},{default:o(()=>[l(d,{modelValue:a(s).ssgType,"onUpdate:modelValue":e[12]||(e[12]=t=>a(s).ssgType=t),placeholder:"请输入SSG类型"},null,8,["modelValue"])]),_:1}),l(i,{label:"模板标签",prop:"tags"},{default:o(()=>[l(_e,{modelValue:a(s).tags,"onUpdate:modelValue":e[13]||(e[13]=t=>a(s).tags=t)},{default:o(()=>[(m(!0),E(x,null,R(a($),t=>(m(),b(ve,{key:t.value,value:t.value},{default:o(()=>[h(we(t.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"是否公有",prop:"isPublic"},{default:o(()=>[l(O,{modelValue:a(s).isPublic,"onUpdate:modelValue":e[14]||(e[14]=t=>a(s).isPublic=t),placeholder:"请选择是否公有"},{default:o(()=>[(m(!0),E(x,null,R(a(D),t=>(m(),b(j,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"demo链接",prop:"demoUrl"},{default:o(()=>[l(d,{modelValue:a(s).demoUrl,"onUpdate:modelValue":e[15]||(e[15]=t=>a(s).demoUrl=t),placeholder:"请输入demo链接"},null,8,["modelValue"])]),_:1}),l(i,{label:"来源链接",prop:"sourceUrl"},{default:o(()=>[l(d,{modelValue:a(s).sourceUrl,"onUpdate:modelValue":e[16]||(e[16]=t=>a(s).sourceUrl=t),placeholder:"请输入来源链接"},null,8,["modelValue"])]),_:1}),l(i,{label:"部门id",prop:"deptId"},{default:o(()=>[l(d,{modelValue:a(s).deptId,"onUpdate:modelValue":e[17]||(e[17]=t=>a(s).deptId=t),placeholder:"请输入部门id"},null,8,["modelValue"])]),_:1}),l(i,{label:"用户id",prop:"userId"},{default:o(()=>[l(d,{modelValue:a(s).userId,"onUpdate:modelValue":e[18]||(e[18]=t=>a(s).userId=t),placeholder:"请输入用户id"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{yl as default};
