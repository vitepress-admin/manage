import{d as oe,aa as W,r as i,ab as X,c4 as he,b as Ue,ah as Te,o as c,c as R,p as t,q as a,e as l,af as Y,ag as De,w as v,m as q,I as B,F as Z,z as ee,A as b,y as g,U as te,i as Pe,t as le,a1 as xe,S as Fe,P as Re,Q as qe,x as Be,ac as $e,B as Ke,v as ze}from"./index-C_bMx7Sy.js";/* empty css                  *//* empty css                       *//* empty css                 */import{E as Ae}from"./el-input-number-BOtMBXZJ.js";import{_ as Le}from"./index-B3SXiZrc.js";import{E as Oe,a as Qe}from"./el-table-column-DTEsLnWC.js";import"./el-checkbox-DWmO-xWx.js";import{_ as je}from"./index-C0LjHb4J.js";/* empty css               */import{_ as Ge}from"./index-DOXSA2U9.js";import{E as Me,a as He}from"./el-form-item-xEvDSTA9.js";/* empty css                */import{E as Je}from"./el-tree-select-BQjZWHxO.js";/* empty css               *//* empty css                */import{l as We,g as Xe,u as Ye,a as Ze,d as et}from"./index-DDxDzIsS.js";import{b as tt}from"./index-BAugWTfW.js";import{E as lt}from"./index-C5rERorU.js";import{E as ot}from"./index-BJJBupNT.js";import{E as at}from"./index-CXLPzEIx.js";import{E as st}from"./index-C8Rj31z0.js";import{E as nt,a as dt}from"./index-CgJl-CYT.js";import"./index-CcUhCbJL.js";import"./_initCloneObject-CAn0gXB7.js";import"./_baseClone-DnTw8x3F.js";const rt={class:"p-2"},pt={class:"mb-[10px]"},it={class:"dialog-footer"},ut=oe({name:"Post"}),Kt=oe({...ut,setup(mt){const{proxy:r}=xe(),{sys_normal_disable:N}=W(r==null?void 0:r.useDict("sys_normal_disable")),$=i([]),h=i(!0),w=i(!0),U=i([]),K=i(!0),z=i(!0),T=i(0),E=i(""),I=i([]),D=i(),P=i(),A=i(),f=X({visible:!1,title:""}),L={postId:void 0,deptId:void 0,postCode:"",postName:"",postCategory:"",postSort:0,status:"0",remark:""},ae=X({form:{...L},queryParams:{pageNum:1,pageSize:10,postCode:"",postName:"",postCategory:"",status:""},rules:{postName:[{required:!0,message:"岗位名称不能为空",trigger:"blur"}],postCode:[{required:!0,message:"岗位编码不能为空",trigger:"blur"}],deptId:[{required:!0,message:"部门不能为空",trigger:"blur"}],postSort:[{required:!0,message:"岗位顺序不能为空",trigger:"blur"}]}}),{queryParams:n,form:d,rules:se}=W(ae),ne=(s,e)=>s?e.label.indexOf(s)!==-1:!0;he(()=>{var s;(s=D.value)==null||s.filter(E.value)},{flush:"post"});const de=async()=>{const s=await tt.deptTreeSelect();I.value=s.data},re=s=>{n.value.belongDeptId=s.id,n.value.deptId=void 0,V()},y=async()=>{h.value=!0;const s=await We(n.value);$.value=s.rows,T.value=s.total,h.value=!1},pe=()=>{x(),f.visible=!1},x=()=>{var s;d.value={...L},(s=P.value)==null||s.resetFields()},V=()=>{n.value.pageNum=1,n.value.deptId&&(n.value.belongDeptId=void 0),y()},ie=()=>{var s,e;(s=A.value)==null||s.resetFields(),n.value.pageNum=1,n.value.deptId=void 0,(e=D.value)==null||e.setCurrentKey(void 0),n.value.belongDeptId=void 0,V()},ue=s=>{U.value=s.map(e=>e.postId),K.value=s.length!=1,z.value=!s.length},me=()=>{x(),f.visible=!0,f.title="添加岗位"},O=async s=>{x();const e=(s==null?void 0:s.postId)||U.value[0],u=await Xe(e);Object.assign(d.value,u.data),f.visible=!0,f.title="修改岗位"},ce=()=>{var s;(s=P.value)==null||s.validate(async e=>{e&&(d.value.postId?await Ye(d.value):await Ze(d.value),r==null||r.$modal.msgSuccess("操作成功"),f.visible=!1,await y())})},Q=async s=>{const e=(s==null?void 0:s.postId)||U.value;await(r==null?void 0:r.$modal.confirm('是否确认删除岗位编号为"'+e+'"的数据项？')),await et(e),await y(),r==null||r.$modal.msgSuccess("删除成功")},fe=()=>{r==null||r.download("system/post/export",{...n.value},`post_${new Date().getTime()}.xlsx`)};return Ue(()=>{de(),y()}),(s,e)=>{const u=Fe,_e=lt,F=ot,C=at,p=Me,j=Je,ve=Re,ge=qe,m=Be,G=He,be=Ge,M=st,_=Oe,ye=je,H=$e,Ve=Qe,Ce=Le,ke=Ae,we=nt,Ee=dt,Ie=Ke,k=Te("hasPermi"),Se=ze;return c(),R("div",rt,[t(M,{gutter:20},{default:a(()=>[t(C,{lg:4,xs:24,style:{}},{default:a(()=>[t(F,{shadow:"hover"},{default:a(()=>[t(u,{modelValue:l(E),"onUpdate:modelValue":e[0]||(e[0]=S=>Y(E)?E.value=S:null),placeholder:"请输入部门名称","prefix-icon":"Search",clearable:""},null,8,["modelValue"]),t(_e,{ref_key:"deptTreeRef",ref:D,class:"mt-2","node-key":"id",data:l(I),props:{label:"label",children:"children"},"expand-on-click-node":!1,"filter-node-method":ne,"highlight-current":"","default-expand-all":"",onNodeClick:re},null,8,["data"])]),_:1})]),_:1}),t(C,{lg:20,xs:24},{default:a(()=>{var S,J;return[t(De,{"enter-active-class":(S=l(r))==null?void 0:S.animate.searchAnimate.enter,"leave-active-class":(J=l(r))==null?void 0:J.animate.searchAnimate.leave},{default:a(()=>[v(q("div",pt,[t(F,{shadow:"hover"},{default:a(()=>[t(G,{ref_key:"queryFormRef",ref:A,model:l(n),inline:!0},{default:a(()=>[t(p,{label:"岗位编码",prop:"postCode"},{default:a(()=>[t(u,{modelValue:l(n).postCode,"onUpdate:modelValue":e[1]||(e[1]=o=>l(n).postCode=o),placeholder:"请输入岗位编码",clearable:"",onKeyup:B(V,["enter"])},null,8,["modelValue"])]),_:1}),t(p,{label:"类别编码",prop:"postCategory"},{default:a(()=>[t(u,{modelValue:l(n).postCategory,"onUpdate:modelValue":e[2]||(e[2]=o=>l(n).postCategory=o),placeholder:"请输入类别编码",clearable:"",style:{width:"200px"},onKeyup:B(V,["enter"])},null,8,["modelValue"])]),_:1}),t(p,{label:"岗位名称",prop:"postName"},{default:a(()=>[t(u,{modelValue:l(n).postName,"onUpdate:modelValue":e[3]||(e[3]=o=>l(n).postName=o),placeholder:"请输入岗位名称",clearable:"",onKeyup:B(V,["enter"])},null,8,["modelValue"])]),_:1}),t(p,{label:"部门",prop:"deptId"},{default:a(()=>[t(j,{modelValue:l(n).deptId,"onUpdate:modelValue":e[4]||(e[4]=o=>l(n).deptId=o),data:l(I),props:{value:"id",label:"label",children:"children"},"value-key":"id",placeholder:"请选择部门","check-strictly":""},null,8,["modelValue","data"])]),_:1}),t(p,{label:"状态",prop:"status"},{default:a(()=>[t(ge,{modelValue:l(n).status,"onUpdate:modelValue":e[5]||(e[5]=o=>l(n).status=o),placeholder:"岗位状态",clearable:""},{default:a(()=>[(c(!0),R(Z,null,ee(l(N),o=>(c(),b(ve,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(p,null,{default:a(()=>[t(m,{type:"primary",icon:"Search",onClick:V},{default:a(()=>e[19]||(e[19]=[g("搜索")])),_:1}),t(m,{icon:"Refresh",onClick:ie},{default:a(()=>e[20]||(e[20]=[g("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[te,l(w)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(F,{shadow:"hover"},{header:a(()=>[t(M,{gutter:10,class:"mb8"},{default:a(()=>[t(C,{span:1.5},{default:a(()=>[v((c(),b(m,{type:"primary",plain:"",icon:"Plus",onClick:me},{default:a(()=>e[21]||(e[21]=[g("新增")])),_:1})),[[k,["system:post:add"]]])]),_:1}),t(C,{span:1.5},{default:a(()=>[v((c(),b(m,{type:"success",plain:"",icon:"Edit",disabled:l(K),onClick:e[6]||(e[6]=o=>O())},{default:a(()=>e[22]||(e[22]=[g("修改")])),_:1},8,["disabled"])),[[k,["system:post:edit"]]])]),_:1}),t(C,{span:1.5},{default:a(()=>[v((c(),b(m,{type:"danger",plain:"",icon:"Delete",disabled:l(z),onClick:e[7]||(e[7]=o=>Q())},{default:a(()=>e[23]||(e[23]=[g(" 删除 ")])),_:1},8,["disabled"])),[[k,["system:post:remove"]]])]),_:1}),t(C,{span:1.5},{default:a(()=>[v((c(),b(m,{type:"warning",plain:"",icon:"Download",onClick:fe},{default:a(()=>e[24]||(e[24]=[g("导出")])),_:1})),[[k,["system:post:export"]]])]),_:1}),t(be,{showSearch:l(w),"onUpdate:showSearch":e[8]||(e[8]=o=>Y(w)?w.value=o:null),onQueryTable:y},null,8,["showSearch"])]),_:1})]),default:a(()=>[v((c(),b(Ve,{data:l($),onSelectionChange:ue},{default:a(()=>[t(_,{type:"selection",width:"55",align:"center"}),Pe("",!0),t(_,{label:"岗位编码",align:"center",prop:"postCode"}),t(_,{label:"类别编码",align:"center",prop:"postCategory"}),t(_,{label:"岗位名称",align:"center",prop:"postName"}),t(_,{label:"部门",align:"center",prop:"deptName"}),t(_,{label:"排序",align:"center",prop:"postSort"}),t(_,{label:"状态",align:"center",prop:"status"},{default:a(o=>[t(ye,{options:l(N),value:o.row.status},null,8,["options","value"])]),_:1}),t(_,{label:"创建时间",align:"center",prop:"createTime",width:"180"},{default:a(o=>[q("span",null,le(s.parseTime(o.row.createTime)),1)]),_:1}),t(_,{label:"操作",width:"180",align:"center","class-name":"small-padding fixed-width"},{default:a(o=>[t(H,{content:"修改",placement:"top"},{default:a(()=>[v(t(m,{link:"",type:"primary",icon:"Edit",onClick:Ne=>O(o.row)},null,8,["onClick"]),[[k,["system:post:edit"]]])]),_:2},1024),t(H,{content:"删除",placement:"top"},{default:a(()=>[v(t(m,{link:"",type:"primary",icon:"Delete",onClick:Ne=>Q(o.row)},null,8,["onClick"]),[[k,["system:post:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[Se,l(h)]]),v(t(Ce,{page:l(n).pageNum,"onUpdate:page":e[9]||(e[9]=o=>l(n).pageNum=o),limit:l(n).pageSize,"onUpdate:limit":e[10]||(e[10]=o=>l(n).pageSize=o),total:l(T),onPagination:y},null,8,["page","limit","total"]),[[te,l(T)>0]])]),_:1}),t(Ie,{modelValue:l(f).visible,"onUpdate:modelValue":e[18]||(e[18]=o=>l(f).visible=o),title:l(f).title,width:"500px","append-to-body":""},{footer:a(()=>[q("div",it,[t(m,{type:"primary",onClick:ce},{default:a(()=>e[25]||(e[25]=[g("确 定")])),_:1}),t(m,{onClick:pe},{default:a(()=>e[26]||(e[26]=[g("取 消")])),_:1})])]),default:a(()=>[t(G,{ref_key:"postFormRef",ref:P,model:l(d),rules:l(se),"label-width":"80px"},{default:a(()=>[t(p,{label:"岗位名称",prop:"postName"},{default:a(()=>[t(u,{modelValue:l(d).postName,"onUpdate:modelValue":e[11]||(e[11]=o=>l(d).postName=o),placeholder:"请输入岗位名称"},null,8,["modelValue"])]),_:1}),t(p,{label:"部门",prop:"deptId"},{default:a(()=>[t(j,{modelValue:l(d).deptId,"onUpdate:modelValue":e[12]||(e[12]=o=>l(d).deptId=o),data:l(I),props:{value:"id",label:"label",children:"children"},"value-key":"id",placeholder:"请选择部门","check-strictly":""},null,8,["modelValue","data"])]),_:1}),t(p,{label:"岗位编码",prop:"postCode"},{default:a(()=>[t(u,{modelValue:l(d).postCode,"onUpdate:modelValue":e[13]||(e[13]=o=>l(d).postCode=o),placeholder:"请输入编码名称"},null,8,["modelValue"])]),_:1}),t(p,{label:"类别编码",prop:"postCategory"},{default:a(()=>[t(u,{modelValue:l(d).postCategory,"onUpdate:modelValue":e[14]||(e[14]=o=>l(d).postCategory=o),placeholder:"请输入类别编码"},null,8,["modelValue"])]),_:1}),t(p,{label:"岗位顺序",prop:"postSort"},{default:a(()=>[t(ke,{modelValue:l(d).postSort,"onUpdate:modelValue":e[15]||(e[15]=o=>l(d).postSort=o),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1}),t(p,{label:"岗位状态",prop:"status"},{default:a(()=>[t(Ee,{modelValue:l(d).status,"onUpdate:modelValue":e[16]||(e[16]=o=>l(d).status=o)},{default:a(()=>[(c(!0),R(Z,null,ee(l(N),o=>(c(),b(we,{key:o.value,value:o.value},{default:a(()=>[g(le(o.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(p,{label:"备注",prop:"remark"},{default:a(()=>[t(u,{modelValue:l(d).remark,"onUpdate:modelValue":e[17]||(e[17]=o=>l(d).remark=o),type:"textarea",placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])]}),_:1})]),_:1})])}}});export{Kt as default};
