import{d as Y,r,ab as J,aa as he,b as we,ah as Ve,o as y,c as Ee,p as t,q as n,w as f,m as W,e as o,I as Pe,y as c,U as X,ag as Te,A as V,af as B,i as Se,a1 as Ne,T as Ie,n as Ue,S as xe,x as $e,ap as Fe,ac as Re,B as De,v as Be}from"./index-m2T4SZVn.js";/* empty css                  *//* empty css                */import{E as qe}from"./el-checkbox-Di_0n5g6.js";import{_ as Ae}from"./index-BhbZE42J.js";import{E as Ke,a as Me}from"./el-table-column-Ct10N-EN.js";/* empty css               */import{_ as Le}from"./index-BD8u3RiJ.js";/* empty css               *//* empty css                */import{E as ze,a as Qe}from"./el-form-item-DLokr9el.js";import{l as He,c as Oe,g as je,u as Ge,a as Je,d as We}from"./index-s1TTiYe-.js";import{t as Xe,b as Ye}from"./index-8n6F1i-T.js";import{E as Ze}from"./index-BO4v6Fvb.js";import{E as ea}from"./index-DS-S05OM.js";import{E as aa}from"./index-DoUHKWWw.js";import{E as ta}from"./index-B0J4ZlR2.js";import"./_initCloneObject-Dp4qRBHy.js";import"./_baseClone-K_h7d9tC.js";const la={class:"p-2"},na={class:"mb-[10px]"},oa={class:"dialog-footer"},sa=Y({name:"TenantPackage"}),Ta=Y({...sa,setup(ia){const{proxy:s}=Ne(),q=r([]),E=r(!1),b=r(!0),P=r(!0),U=r([]),A=r(!0),K=r(!0),x=r(0),T=r(!1),S=r(!1),C=r([]),k=r(),M=r(),$=r(),g=J({visible:!1,title:""}),L={packageId:void 0,packageName:"",menuIds:"",remark:"",menuCheckStrictly:!0},Z=J({form:{...L},queryParams:{pageNum:1,pageSize:10,packageName:""},rules:{packageId:[{required:!0,message:"租户套餐id不能为空",trigger:"blur"}],packageName:[{required:!0,message:"套餐名称不能为空",trigger:"blur"}]}}),{queryParams:p,form:u,rules:ee}=he(Z),ae=async()=>{const{data:a}=await Xe();C.value=a},te=()=>{var i,d;let a=(i=k.value)==null?void 0:i.getCheckedKeys(),e=(d=k.value)==null?void 0:d.getHalfCheckedKeys();return e&&(a==null||a.unshift.apply(a,e)),a},le=async a=>{const e=await Ye(a);return C.value=e.data.menus,Promise.resolve(e)},v=async()=>{b.value=!0;const a=await He(p.value);q.value=a.rows,x.value=a.total,b.value=!1},ne=async a=>{let e=a.status==="0"?"启用":"停用";const[i]=await Ie(s==null?void 0:s.$modal.confirm('确认要"'+e+'""'+a.packageName+'"套餐吗？'));i?a.status=a.status==="0"?"1":"0":(await Oe(a.packageId,a.status),s==null||s.$modal.msgSuccess(e+"成功"))},oe=()=>{F(),g.visible=!1},F=()=>{var a,e;(a=k.value)==null||a.setCheckedKeys([]),T.value=!1,S.value=!1,u.value={...L},(e=$.value)==null||e.resetFields()},R=()=>{p.value.pageNum=1,v()},se=()=>{var a;(a=M.value)==null||a.resetFields(),R()},ie=a=>{U.value=a.map(e=>e.packageId),A.value=a.length!=1,K.value=!a.length},ue=(a,e)=>{{let i=C.value;for(let d=0;d<i.length;d++)k.value&&(k.value.store.nodesMap[i[d].id].expanded=a)}},de=(a,e)=>{var i;(i=k.value)==null||i.setCheckedNodes(a?C.value:[])},re=(a,e)=>{u.value.menuCheckStrictly=a},me=()=>{F(),ae(),g.visible=!0,g.title="添加租户套餐"},z=async a=>{F();const e=(a==null?void 0:a.packageId)||U.value[0],i=await je(e);u.value=i.data;const d=await le(e);g.visible=!0,g.title="修改租户套餐",d.data.checkedKeys.forEach(m=>{Ue(()=>{var h;(h=k.value)==null||h.setChecked(m,!0,!1)})})},ce=()=>{var a;(a=$.value)==null||a.validate(async e=>{e&&(E.value=!0,u.value.menuIds=te(),u.value.packageId!=null?await Ge(u.value).finally(()=>E.value=!1):await Je(u.value).finally(()=>E.value=!1),s==null||s.$modal.msgSuccess("操作成功"),g.visible=!1,await v())})},Q=async a=>{const e=(a==null?void 0:a.packageId)||U.value;await(s==null?void 0:s.$modal.confirm('是否确认删除租户套餐编号为"'+e+'"的数据项？').finally(()=>{b.value=!1})),await We(e),b.value=!0,await v(),s==null||s.$modal.msgSuccess("删除成功")},pe=()=>{s==null||s.download("system/tenant/package/export",{...p.value},`tenantPackage_${new Date().getTime()}.xlsx`)};return we(()=>{v()}),(a,e)=>{var j,G;const i=xe,d=ze,m=$e,h=Qe,H=Ze,N=ea,ge=Le,fe=aa,w=Ke,ke=Fe,O=Re,ve=Me,_e=Ae,D=qe,ye=ta,be=De,_=Ve("hasPermi"),Ce=Be;return y(),Ee("div",la,[t(Te,{"enter-active-class":(j=o(s))==null?void 0:j.animate.searchAnimate.enter,"leave-active-class":(G=o(s))==null?void 0:G.animate.searchAnimate.leave},{default:n(()=>[f(W("div",na,[t(H,{shadow:"hover"},{default:n(()=>[t(h,{ref_key:"queryFormRef",ref:M,model:o(p),inline:!0},{default:n(()=>[t(d,{label:"套餐名称",prop:"packageName"},{default:n(()=>[t(i,{modelValue:o(p).packageName,"onUpdate:modelValue":e[0]||(e[0]=l=>o(p).packageName=l),placeholder:"请输入套餐名称",clearable:"",onKeyup:Pe(R,["enter"])},null,8,["modelValue"])]),_:1}),t(d,null,{default:n(()=>[t(m,{type:"primary",icon:"Search",onClick:R},{default:n(()=>e[15]||(e[15]=[c("搜索")])),_:1}),t(m,{icon:"Refresh",onClick:se},{default:n(()=>e[16]||(e[16]=[c("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[X,o(P)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(H,{shadow:"hover"},{header:n(()=>[t(fe,{gutter:10,class:"mb8"},{default:n(()=>[t(N,{span:1.5},{default:n(()=>[f((y(),V(m,{type:"primary",plain:"",icon:"Plus",onClick:me},{default:n(()=>e[17]||(e[17]=[c(" 新增 ")])),_:1})),[[_,["system:tenantPackage:add"]]])]),_:1}),t(N,{span:1.5},{default:n(()=>[f((y(),V(m,{type:"success",plain:"",icon:"Edit",disabled:o(A),onClick:e[1]||(e[1]=l=>z())},{default:n(()=>e[18]||(e[18]=[c(" 修改 ")])),_:1},8,["disabled"])),[[_,["system:tenantPackage:edit"]]])]),_:1}),t(N,{span:1.5},{default:n(()=>[f((y(),V(m,{type:"danger",plain:"",icon:"Delete",disabled:o(K),onClick:e[2]||(e[2]=l=>Q())},{default:n(()=>e[19]||(e[19]=[c(" 删除 ")])),_:1},8,["disabled"])),[[_,["system:tenantPackage:remove"]]])]),_:1}),t(N,{span:1.5},{default:n(()=>[f((y(),V(m,{type:"warning",plain:"",icon:"Download",onClick:pe},{default:n(()=>e[20]||(e[20]=[c("导出 ")])),_:1})),[[_,["system:tenantPackage:export"]]])]),_:1}),t(ge,{showSearch:o(P),"onUpdate:showSearch":e[3]||(e[3]=l=>B(P)?P.value=l:null),onQueryTable:v},null,8,["showSearch"])]),_:1})]),default:n(()=>[f((y(),V(ve,{data:o(q),onSelectionChange:ie},{default:n(()=>[t(w,{type:"selection",width:"55",align:"center"}),Se("",!0),t(w,{label:"套餐名称",align:"center",prop:"packageName"}),t(w,{label:"备注",align:"center",prop:"remark"}),t(w,{label:"状态",align:"center",prop:"status"},{default:n(l=>[t(ke,{modelValue:l.row.status,"onUpdate:modelValue":I=>l.row.status=I,"active-value":"0","inactive-value":"1",onClick:I=>ne(l.row)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1}),t(w,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:n(l=>[t(O,{content:"修改",placement:"top"},{default:n(()=>[f(t(m,{link:"",type:"primary",icon:"Edit",onClick:I=>z(l.row)},null,8,["onClick"]),[[_,["system:tenantPackage:edit"]]])]),_:2},1024),t(O,{content:"删除",placement:"top"},{default:n(()=>[f(t(m,{link:"",type:"primary",icon:"Delete",onClick:I=>Q(l.row)},null,8,["onClick"]),[[_,["system:tenantPackage:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[Ce,o(b)]]),f(t(_e,{page:o(p).pageNum,"onUpdate:page":e[4]||(e[4]=l=>o(p).pageNum=l),limit:o(p).pageSize,"onUpdate:limit":e[5]||(e[5]=l=>o(p).pageSize=l),total:o(x),onPagination:v},null,8,["page","limit","total"]),[[X,o(x)>0]])]),_:1}),t(be,{modelValue:o(g).visible,"onUpdate:modelValue":e[14]||(e[14]=l=>o(g).visible=l),title:o(g).title,width:"500px","append-to-body":""},{footer:n(()=>[W("div",oa,[t(m,{loading:o(E),type:"primary",onClick:ce},{default:n(()=>e[24]||(e[24]=[c("确 定")])),_:1},8,["loading"]),t(m,{onClick:oe},{default:n(()=>e[25]||(e[25]=[c("取 消")])),_:1})])]),default:n(()=>[t(h,{ref_key:"tenantPackageFormRef",ref:$,model:o(u),rules:o(ee),"label-width":"80px"},{default:n(()=>[t(d,{label:"套餐名称",prop:"packageName"},{default:n(()=>[t(i,{modelValue:o(u).packageName,"onUpdate:modelValue":e[6]||(e[6]=l=>o(u).packageName=l),placeholder:"请输入套餐名称"},null,8,["modelValue"])]),_:1}),t(d,{label:"关联菜单"},{default:n(()=>[t(D,{modelValue:o(T),"onUpdate:modelValue":e[7]||(e[7]=l=>B(T)?T.value=l:null),onChange:e[8]||(e[8]=l=>ue(l,"menu"))},{default:n(()=>e[21]||(e[21]=[c("展开/折叠")])),_:1},8,["modelValue"]),t(D,{modelValue:o(S),"onUpdate:modelValue":e[9]||(e[9]=l=>B(S)?S.value=l:null),onChange:e[10]||(e[10]=l=>de(l,"menu"))},{default:n(()=>e[22]||(e[22]=[c("全选/全不选 ")])),_:1},8,["modelValue"]),t(D,{modelValue:o(u).menuCheckStrictly,"onUpdate:modelValue":e[11]||(e[11]=l=>o(u).menuCheckStrictly=l),onChange:e[12]||(e[12]=l=>re(l,"menu"))},{default:n(()=>e[23]||(e[23]=[c("父子联动 ")])),_:1},8,["modelValue"]),t(ye,{ref_key:"menuTreeRef",ref:k,class:"tree-border",data:o(C),"show-checkbox":"","node-key":"id","check-strictly":!o(u).menuCheckStrictly,"empty-text":"加载中，请稍候",props:{label:"label",children:"children"}},null,8,["data","check-strictly"])]),_:1}),t(d,{label:"备注",prop:"remark"},{default:n(()=>[t(i,{modelValue:o(u).remark,"onUpdate:modelValue":e[13]||(e[13]=l=>o(u).remark=l),placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{Ta as default};
