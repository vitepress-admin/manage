import{a4 as k,d as G,r as p,ad as M,ac as re,b as me,ai as pe,o as _,c as ce,p as l,q as o,w as g,m as O,e as a,I as N,y as v,W,ah as fe,A as V,ag as ge,a3 as ve,U as be,x as _e,P as Ce,B as Ae,v as ye}from"./index-BAuvOH7U.js";/* empty css                  */import{_ as Ve}from"./index-DhWSmCN8.js";import{E as ke,a as we}from"./el-table-column-BxuOrZRB.js";import"./el-checkbox-CJO2Nzt4.js";/* empty css               */import{_ as he}from"./index-7ap4Krm6.js";/* empty css               *//* empty css                */import{E as Ee,a as Ie}from"./el-form-item-CrUaNreY.js";import{E as Ne}from"./index-BoDGaK97.js";import{E as Te}from"./index-DqZK7Cst.js";import{E as De}from"./index-D0kpylGG.js";import"./_initCloneObject-B1WjiVDp.js";/* empty css                */import"./index-mIx5X0h3.js";import"./_baseClone-ClgyB-Pi.js";const Ue=u=>k({url:"/vpadmin/buildAccountsConfig/list",method:"get",params:u}),ze=u=>k({url:"/vpadmin/buildAccountsConfig/"+u,method:"get"}),Pe=u=>k({url:"/vpadmin/buildAccountsConfig",method:"post",data:u}),Se=u=>k({url:"/vpadmin/buildAccountsConfig",method:"put",data:u}),Be=u=>k({url:"/vpadmin/buildAccountsConfig/"+u,method:"delete"}),qe={class:"p-2"},Fe={class:"mb-[10px]"},Re={class:"dialog-footer"},$e=G({name:"BuildAccountsConfig"}),ol=G({...$e,setup(u){const{proxy:s}=ve(),P=p([]),w=p(!1),h=p(!0),E=p(!0),T=p([]),S=p(!0),B=p(!0),D=p(0),q=p(),U=p(),c=M({visible:!1,title:""}),F={id:void 0,bizId:void 0,homepage:void 0,userName:void 0,accessToken:void 0},H=M({form:{...F},queryParams:{pageNum:1,pageSize:10,bizId:void 0,homepage:void 0,userName:void 0,accessToken:void 0,params:{}},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],bizId:[{required:!0,message:"内部ID不能为空",trigger:"blur"}],homepage:[{required:!0,message:"地址不能为空",trigger:"blur"}],userName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],accessToken:[{required:!0,message:"PAC不能为空",trigger:"blur"}]}}),{queryParams:i,form:d,rules:J}=re(H),C=async()=>{h.value=!0;const n=await Ue(i.value);P.value=n.rows,D.value=n.total,h.value=!1},X=()=>{z(),c.visible=!1},z=()=>{var n;d.value={...F},(n=U.value)==null||n.resetFields()},A=()=>{i.value.pageNum=1,C()},Y=()=>{var n;(n=q.value)==null||n.resetFields(),A()},Z=n=>{T.value=n.map(e=>e.id),S.value=n.length!=1,B.value=!n.length},ee=()=>{z(),c.visible=!0,c.title="添加账号信息"},R=async n=>{z();const e=(n==null?void 0:n.id)||T.value[0],r=await ze(e);Object.assign(d.value,r.data),c.visible=!0,c.title="修改账号信息"},le=()=>{var n;(n=U.value)==null||n.validate(async e=>{e&&(w.value=!0,d.value.id?await Se(d.value).finally(()=>w.value=!1):await Pe(d.value).finally(()=>w.value=!1),s==null||s.$modal.msgSuccess("操作成功"),c.visible=!1,await C())})},$=async n=>{const e=(n==null?void 0:n.id)||T.value;await(s==null?void 0:s.$modal.confirm('是否确认删除账号信息编号为"'+e+'"的数据项？').finally(()=>h.value=!1)),await Be(e),s==null||s.$modal.msgSuccess("删除成功"),await C()},ae=()=>{s==null||s.download("vpadmin/buildAccountsConfig/export",{...i.value},`buildAccountsConfig_${new Date().getTime()}.xlsx`)};return me(()=>{C()}),(n,e)=>{var Q,j;const r=be,f=Ee,m=_e,x=Ie,K=Ne,I=Te,oe=he,te=De,b=ke,L=Ce,ne=we,ie=Ve,se=Ae,y=pe("hasPermi"),de=ye;return _(),ce("div",qe,[l(fe,{"enter-active-class":(Q=a(s))==null?void 0:Q.animate.searchAnimate.enter,"leave-active-class":(j=a(s))==null?void 0:j.animate.searchAnimate.leave},{default:o(()=>[g(O("div",Fe,[l(K,{shadow:"hover"},{default:o(()=>[l(x,{ref_key:"queryFormRef",ref:q,model:a(i),inline:!0},{default:o(()=>[l(f,{label:"内部ID",prop:"bizId"},{default:o(()=>[l(r,{modelValue:a(i).bizId,"onUpdate:modelValue":e[0]||(e[0]=t=>a(i).bizId=t),placeholder:"请输入内部ID",clearable:"",onKeyup:N(A,["enter"])},null,8,["modelValue"])]),_:1}),l(f,{label:"地址",prop:"homepage"},{default:o(()=>[l(r,{modelValue:a(i).homepage,"onUpdate:modelValue":e[1]||(e[1]=t=>a(i).homepage=t),placeholder:"请输入地址",clearable:"",onKeyup:N(A,["enter"])},null,8,["modelValue"])]),_:1}),l(f,{label:"用户名",prop:"userName"},{default:o(()=>[l(r,{modelValue:a(i).userName,"onUpdate:modelValue":e[2]||(e[2]=t=>a(i).userName=t),placeholder:"请输入用户名",clearable:"",onKeyup:N(A,["enter"])},null,8,["modelValue"])]),_:1}),l(f,{label:"PAC",prop:"accessToken"},{default:o(()=>[l(r,{modelValue:a(i).accessToken,"onUpdate:modelValue":e[3]||(e[3]=t=>a(i).accessToken=t),placeholder:"请输入PAC",clearable:"",onKeyup:N(A,["enter"])},null,8,["modelValue"])]),_:1}),l(f,null,{default:o(()=>[l(m,{type:"primary",icon:"Search",onClick:A},{default:o(()=>e[14]||(e[14]=[v("搜索")])),_:1}),l(m,{icon:"Refresh",onClick:Y},{default:o(()=>e[15]||(e[15]=[v("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[W,a(E)]])]),_:1},8,["enter-active-class","leave-active-class"]),l(K,{shadow:"never"},{header:o(()=>[l(te,{gutter:10,class:"mb8"},{default:o(()=>[l(I,{span:1.5},{default:o(()=>[g((_(),V(m,{type:"primary",plain:"",icon:"Plus",onClick:ee},{default:o(()=>e[16]||(e[16]=[v("新增")])),_:1})),[[y,["vpadmin:buildAccountsConfig:add"]]])]),_:1}),l(I,{span:1.5},{default:o(()=>[g((_(),V(m,{type:"success",plain:"",icon:"Edit",disabled:a(S),onClick:e[4]||(e[4]=t=>R())},{default:o(()=>e[17]||(e[17]=[v("修改")])),_:1},8,["disabled"])),[[y,["vpadmin:buildAccountsConfig:edit"]]])]),_:1}),l(I,{span:1.5},{default:o(()=>[g((_(),V(m,{type:"danger",plain:"",icon:"Delete",disabled:a(B),onClick:e[5]||(e[5]=t=>$())},{default:o(()=>e[18]||(e[18]=[v("删除")])),_:1},8,["disabled"])),[[y,["vpadmin:buildAccountsConfig:remove"]]])]),_:1}),l(I,{span:1.5},{default:o(()=>[g((_(),V(m,{type:"warning",plain:"",icon:"Download",onClick:ae},{default:o(()=>e[19]||(e[19]=[v("导出")])),_:1})),[[y,["vpadmin:buildAccountsConfig:export"]]])]),_:1}),l(oe,{showSearch:a(E),"onUpdate:showSearch":e[6]||(e[6]=t=>ge(E)?E.value=t:null),onQueryTable:C},null,8,["showSearch"])]),_:1})]),default:o(()=>[g((_(),V(ne,{data:a(P),onSelectionChange:Z},{default:o(()=>[l(b,{type:"selection",width:"55",align:"center"}),(_(),V(b,{key:0,label:"主键",align:"center",prop:"id"})),l(b,{label:"内部ID",align:"center",prop:"bizId"}),l(b,{label:"地址",align:"center",prop:"homepage"}),l(b,{label:"用户名",align:"center",prop:"userName"}),l(b,{label:"PAC",align:"center",prop:"accessToken"}),l(b,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:o(t=>[l(L,{content:"修改",placement:"top"},{default:o(()=>[g(l(m,{link:"",type:"primary",icon:"Edit",onClick:ue=>R(t.row)},null,8,["onClick"]),[[y,["vpadmin:buildAccountsConfig:edit"]]])]),_:2},1024),l(L,{content:"删除",placement:"top"},{default:o(()=>[g(l(m,{link:"",type:"primary",icon:"Delete",onClick:ue=>$(t.row)},null,8,["onClick"]),[[y,["vpadmin:buildAccountsConfig:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[de,a(h)]]),g(l(ie,{total:a(D),page:a(i).pageNum,"onUpdate:page":e[7]||(e[7]=t=>a(i).pageNum=t),limit:a(i).pageSize,"onUpdate:limit":e[8]||(e[8]=t=>a(i).pageSize=t),onPagination:C},null,8,["total","page","limit"]),[[W,a(D)>0]])]),_:1}),l(se,{title:a(c).title,modelValue:a(c).visible,"onUpdate:modelValue":e[13]||(e[13]=t=>a(c).visible=t),width:"500px","append-to-body":""},{footer:o(()=>[O("div",Re,[l(m,{loading:a(w),type:"primary",onClick:le},{default:o(()=>e[20]||(e[20]=[v("确 定")])),_:1},8,["loading"]),l(m,{onClick:X},{default:o(()=>e[21]||(e[21]=[v("取 消")])),_:1})])]),default:o(()=>[l(x,{ref_key:"buildAccountsConfigFormRef",ref:U,model:a(d),rules:a(J),"label-width":"80px"},{default:o(()=>[l(f,{label:"内部ID",prop:"bizId"},{default:o(()=>[l(r,{modelValue:a(d).bizId,"onUpdate:modelValue":e[9]||(e[9]=t=>a(d).bizId=t),placeholder:"请输入内部ID"},null,8,["modelValue"])]),_:1}),l(f,{label:"地址",prop:"homepage"},{default:o(()=>[l(r,{modelValue:a(d).homepage,"onUpdate:modelValue":e[10]||(e[10]=t=>a(d).homepage=t),placeholder:"请输入地址"},null,8,["modelValue"])]),_:1}),l(f,{label:"用户名",prop:"userName"},{default:o(()=>[l(r,{modelValue:a(d).userName,"onUpdate:modelValue":e[11]||(e[11]=t=>a(d).userName=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),l(f,{label:"PAC",prop:"accessToken"},{default:o(()=>[l(r,{modelValue:a(d).accessToken,"onUpdate:modelValue":e[12]||(e[12]=t=>a(d).accessToken=t),placeholder:"请输入PAC"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{ol as default};
