import{a2 as C,d as H,r as v,ab as M,aa as ue,b as me,ah as pe,o as y,c as ve,p as l,q as o,w as c,m as O,e as t,I,y as _,U as G,ag as fe,A as w,af as ce,a1 as ge,S as _e,x as be,ac as ye,B as Ve,v as ke}from"./index-DceX8DY-.js";/* empty css                  */import{_ as we}from"./index-DhVigprN.js";import{E as Ie,a as Ce}from"./el-table-column-uEGAGvaT.js";import"./el-checkbox-CipRvbjy.js";/* empty css               */import{_ as Ee}from"./index-DMYNcxkm.js";/* empty css               *//* empty css                */import{E as Ne,a as Ke}from"./el-form-item-CxexKDRz.js";import{E as Ue}from"./index-CIei9RB5.js";import{E as De}from"./index-Dbbuwijp.js";import{E as Se}from"./index-CJCiAumQ.js";import"./_initCloneObject-DQLonlhK.js";/* empty css                */import"./index-Maa1pPoZ.js";import"./_baseClone-_LOkloOv.js";const qe=m=>C({url:"/demo/demo/list",method:"get",params:m}),he=m=>C({url:"/demo/demo/"+m,method:"get"}),Fe=m=>C({url:"/demo/demo",method:"post",data:m}),Re=m=>C({url:"/demo/demo",method:"put",data:m}),$e=m=>C({url:"/demo/demo/"+m,method:"delete"}),xe={class:"p-2"},Te={class:"mb-[10px]"},Be={class:"dialog-footer"},Pe=H({name:"Demo"}),ol=H({...Pe,setup(m){const{proxy:s}=ge(),F=v([]),E=v(!1),N=v(!0),K=v(!0),D=v([]),R=v(!0),$=v(!0),S=v(0),x=v(),q=v(),f=M({visible:!1,title:""}),T={id:void 0,deptId:void 0,userId:void 0,orderNum:void 0,testKey:void 0,value:void 0},J=M({form:{...T},queryParams:{pageNum:1,pageSize:10,deptId:void 0,userId:void 0,orderNum:void 0,testKey:void 0,value:void 0},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],deptId:[{required:!0,message:"部门id不能为空",trigger:"blur"}],userId:[{required:!0,message:"用户id不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"排序号不能为空",trigger:"blur"}],testKey:[{required:!0,message:"key键不能为空",trigger:"blur"}],value:[{required:!0,message:"值不能为空",trigger:"blur"}]}}),{queryParams:n,form:r,rules:W}=ue(J),V=async()=>{N.value=!0;const d=await qe(n.value);F.value=d.rows,S.value=d.total,N.value=!1},X=()=>{h(),f.visible=!1},h=()=>{var d;r.value={...T},(d=q.value)==null||d.resetFields()},b=()=>{n.value.pageNum=1,V()},Y=()=>{var d;(d=x.value)==null||d.resetFields(),b()},Z=d=>{D.value=d.map(e=>e.id),R.value=d.length!=1,$.value=!d.length},ee=()=>{h(),f.visible=!0,f.title="添加测试单"},B=async d=>{h();const e=(d==null?void 0:d.id)||D.value[0],i=await he(e);Object.assign(r.value,i.data),f.visible=!0,f.title="修改测试单"},le=()=>{var d;(d=q.value)==null||d.validate(async e=>{e&&(E.value=!0,r.value.id?await Re(r.value).finally(()=>E.value=!1):await Fe(r.value).finally(()=>E.value=!1),s==null||s.$modal.msgSuccess("修改成功"),f.visible=!1,await V())})},P=async d=>{const e=(d==null?void 0:d.id)||D.value;await(s==null?void 0:s.$modal.confirm('是否确认删除测试单编号为"'+e+'"的数据项？').finally(()=>N.value=!1)),await $e(e),s==null||s.$modal.msgSuccess("删除成功"),await V()},te=()=>{s==null||s.download("demo/demo/export",{...n.value},`demo_${new Date().getTime()}.xlsx`)};return me(()=>{V()}),(d,e)=>{var Q,j;const i=_e,u=Ne,p=be,A=Ke,L=Ue,U=De,oe=Ee,ae=Se,g=Ie,z=ye,de=Ce,ne=we,re=Ve,k=pe("hasPermi"),se=ke;return y(),ve("div",xe,[l(fe,{"enter-active-class":(Q=t(s))==null?void 0:Q.animate.searchAnimate.enter,"leave-active-class":(j=t(s))==null?void 0:j.animate.searchAnimate.leave},{default:o(()=>[c(O("div",Te,[l(L,{shadow:"hover"},{default:o(()=>[l(A,{ref_key:"queryFormRef",ref:x,model:t(n),inline:!0},{default:o(()=>[l(u,{label:"部门id",prop:"deptId"},{default:o(()=>[l(i,{modelValue:t(n).deptId,"onUpdate:modelValue":e[0]||(e[0]=a=>t(n).deptId=a),placeholder:"请输入部门id",clearable:"",onKeyup:I(b,["enter"])},null,8,["modelValue"])]),_:1}),l(u,{label:"用户id",prop:"userId"},{default:o(()=>[l(i,{modelValue:t(n).userId,"onUpdate:modelValue":e[1]||(e[1]=a=>t(n).userId=a),placeholder:"请输入用户id",clearable:"",onKeyup:I(b,["enter"])},null,8,["modelValue"])]),_:1}),l(u,{label:"排序号",prop:"orderNum"},{default:o(()=>[l(i,{modelValue:t(n).orderNum,"onUpdate:modelValue":e[2]||(e[2]=a=>t(n).orderNum=a),placeholder:"请输入排序号",clearable:"",onKeyup:I(b,["enter"])},null,8,["modelValue"])]),_:1}),l(u,{label:"key键",prop:"testKey"},{default:o(()=>[l(i,{modelValue:t(n).testKey,"onUpdate:modelValue":e[3]||(e[3]=a=>t(n).testKey=a),placeholder:"请输入key键",clearable:"",onKeyup:I(b,["enter"])},null,8,["modelValue"])]),_:1}),l(u,{label:"值",prop:"value"},{default:o(()=>[l(i,{modelValue:t(n).value,"onUpdate:modelValue":e[4]||(e[4]=a=>t(n).value=a),placeholder:"请输入值",clearable:"",onKeyup:I(b,["enter"])},null,8,["modelValue"])]),_:1}),l(u,null,{default:o(()=>[l(p,{type:"primary",icon:"Search",onClick:b},{default:o(()=>e[16]||(e[16]=[_("搜索")])),_:1}),l(p,{icon:"Refresh",onClick:Y},{default:o(()=>e[17]||(e[17]=[_("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[G,t(K)]])]),_:1},8,["enter-active-class","leave-active-class"]),l(L,{shadow:"hover"},{header:o(()=>[l(ae,{gutter:10,class:"mb8"},{default:o(()=>[l(U,{span:1.5},{default:o(()=>[c((y(),w(p,{type:"primary",plain:"",icon:"Plus",onClick:ee},{default:o(()=>e[18]||(e[18]=[_("新增")])),_:1})),[[k,["demo:demo:add"]]])]),_:1}),l(U,{span:1.5},{default:o(()=>[c((y(),w(p,{type:"success",plain:"",icon:"Edit",disabled:t(R),onClick:e[5]||(e[5]=a=>B())},{default:o(()=>e[19]||(e[19]=[_("修改")])),_:1},8,["disabled"])),[[k,["demo:demo:edit"]]])]),_:1}),l(U,{span:1.5},{default:o(()=>[c((y(),w(p,{type:"danger",plain:"",icon:"Delete",disabled:t($),onClick:e[6]||(e[6]=a=>P())},{default:o(()=>e[20]||(e[20]=[_("删除")])),_:1},8,["disabled"])),[[k,["demo:demo:remove"]]])]),_:1}),l(U,{span:1.5},{default:o(()=>[c((y(),w(p,{type:"warning",plain:"",icon:"Download",onClick:te},{default:o(()=>e[21]||(e[21]=[_("导出")])),_:1})),[[k,["demo:demo:export"]]])]),_:1}),l(oe,{showSearch:t(K),"onUpdate:showSearch":e[7]||(e[7]=a=>ce(K)?K.value=a:null),onQueryTable:V},null,8,["showSearch"])]),_:1})]),default:o(()=>[c((y(),w(de,{data:t(F),onSelectionChange:Z},{default:o(()=>[l(g,{type:"selection",width:"55",align:"center"}),(y(),w(g,{key:0,label:"主键",align:"center",prop:"id"})),l(g,{label:"部门id",align:"center",prop:"deptId"}),l(g,{label:"用户id",align:"center",prop:"userId"}),l(g,{label:"排序号",align:"center",prop:"orderNum"}),l(g,{label:"key键",align:"center",prop:"testKey"}),l(g,{label:"值",align:"center",prop:"value"}),l(g,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:o(a=>[l(z,{content:"修改",placement:"top"},{default:o(()=>[c(l(p,{link:"",type:"primary",icon:"Edit",onClick:ie=>B(a.row)},null,8,["onClick"]),[[k,["demo:demo:edit"]]])]),_:2},1024),l(z,{content:"删除",placement:"top"},{default:o(()=>[c(l(p,{link:"",type:"primary",icon:"Delete",onClick:ie=>P(a.row)},null,8,["onClick"]),[[k,["demo:demo:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[se,t(N)]]),c(l(ne,{page:t(n).pageNum,"onUpdate:page":e[8]||(e[8]=a=>t(n).pageNum=a),limit:t(n).pageSize,"onUpdate:limit":e[9]||(e[9]=a=>t(n).pageSize=a),total:t(S),onPagination:V},null,8,["page","limit","total"]),[[G,t(S)>0]])]),_:1}),l(re,{modelValue:t(f).visible,"onUpdate:modelValue":e[15]||(e[15]=a=>t(f).visible=a),title:t(f).title,width:"500px","append-to-body":""},{footer:o(()=>[O("div",Be,[l(p,{loading:t(E),type:"primary",onClick:le},{default:o(()=>e[22]||(e[22]=[_("确 定")])),_:1},8,["loading"]),l(p,{onClick:X},{default:o(()=>e[23]||(e[23]=[_("取 消")])),_:1})])]),default:o(()=>[l(A,{ref_key:"demoFormRef",ref:q,model:t(r),rules:t(W),"label-width":"80px"},{default:o(()=>[l(u,{label:"部门id",prop:"deptId"},{default:o(()=>[l(i,{modelValue:t(r).deptId,"onUpdate:modelValue":e[10]||(e[10]=a=>t(r).deptId=a),placeholder:"请输入部门id"},null,8,["modelValue"])]),_:1}),l(u,{label:"用户id",prop:"userId"},{default:o(()=>[l(i,{modelValue:t(r).userId,"onUpdate:modelValue":e[11]||(e[11]=a=>t(r).userId=a),placeholder:"请输入用户id"},null,8,["modelValue"])]),_:1}),l(u,{label:"排序号",prop:"orderNum"},{default:o(()=>[l(i,{modelValue:t(r).orderNum,"onUpdate:modelValue":e[12]||(e[12]=a=>t(r).orderNum=a),placeholder:"请输入排序号"},null,8,["modelValue"])]),_:1}),l(u,{label:"key键",prop:"testKey"},{default:o(()=>[l(i,{modelValue:t(r).testKey,"onUpdate:modelValue":e[13]||(e[13]=a=>t(r).testKey=a),placeholder:"请输入key键"},null,8,["modelValue"])]),_:1}),l(u,{label:"值",prop:"value"},{default:o(()=>[l(i,{modelValue:t(r).value,"onUpdate:modelValue":e[14]||(e[14]=a=>t(r).value=a),placeholder:"请输入值"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{ol as default};
