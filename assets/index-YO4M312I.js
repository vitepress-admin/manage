import{d as G,r as m,ad as O,ac as ue,b as ce,ai as me,o as E,c as pe,p as a,q as l,w as f,m as j,e as t,I as z,y as v,W as fe,ah as ge,A as S,ag as ve,a3 as _e,n as M,U as ye,x as be,P as Ce,B as we,v as he}from"./index-Dz1U06Ul.js";/* empty css                  */import{E as ke}from"./el-input-number-DNkWJe8g.js";/* empty css                */import"./el-checkbox-BP8O_R-g.js";import{E as Ee}from"./el-tree-select-135qo1HR.js";/* empty css                */import{E as Ve,a as Ne}from"./el-table-column-BtdUDimX.js";/* empty css               */import{_ as Ie}from"./index-31S5Zo5y.js";/* empty css               */import{E as Te,a as Re}from"./el-form-item-BRz6LH5v.js";import{l as W,g as Se,u as Fe,a as Ue,d as qe}from"./index-BiMe9sce.js";import{E as Ae}from"./index-B8hIDeR1.js";import{E as Pe}from"./index-D4RdGC6H.js";import{E as $e}from"./index-z7a3Kden.js";import"./index-DZR_92b_.js";import"./index-Bhatseor.js";import"./_initCloneObject-bMWQ6BhU.js";import"./_baseClone-CTTMyzww.js";const xe={class:"p-2"},Be={class:"search"},De={class:"dialog-footer"},Le=G({name:"Category"}),ia=G({...Le,setup(Ke){const{proxy:r}=_e(),V=m([]),N=m([]),y=m(!1),b=m(!0),C=m(!0),p=m(!1),F=m(),I=m(),U=m(),d=O({visible:!1,title:""}),q={id:void 0,categoryName:void 0,categoryCode:void 0,parentId:void 0,sortNum:0},H=O({form:{...q},queryParams:{pageNum:1,pageSize:10,categoryName:void 0,categoryCode:void 0},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],categoryName:[{required:!0,message:"分类名称不能为空",trigger:"blur"}],categoryCode:[{required:!0,message:"分类编码不能为空",trigger:"blur"}],parentId:[{required:!0,message:"父级id不能为空",trigger:"blur"}]}}),{queryParams:g,form:s,rules:J}=ue(H),_=async()=>{p.value=!0;const o=await W(g.value),e=r==null?void 0:r.handleTree(o.data,"id","parentId");e&&(V.value=e,p.value=!1)},A=async()=>{const o=await W();N.value=[];const e={id:0,categoryName:"顶级节点",children:[]};e.children=r==null?void 0:r.handleTree(o.data,"id","parentId"),N.value.push(e)},X=()=>{T(),d.visible=!1},T=()=>{var o;s.value={...q},(o=I.value)==null||o.resetFields()},w=()=>{_()},Y=()=>{var o;(o=F.value)==null||o.resetFields(),w()},P=o=>{d.visible=!0,d.title="添加流程分类",M(()=>{T(),A(),o!=null&&o.id?s.value.parentId=o.id:s.value.parentId=0})},Z=()=>{C.value=!C.value,$(V.value,C.value)},$=(o,e)=>{o.forEach(u=>{var i;(i=U.value)==null||i.toggleRowExpansion(u,e),u.children&&u.children.length>0&&$(u.children,e)})},ee=o=>{p.value=!0,d.visible=!0,d.title="修改流程分类",M(async()=>{T(),await A(),o!=null&&(s.value.parentId=o.id);const e=await Se(o.id);p.value=!1,Object.assign(s.value,e.data)})},ae=()=>{I.value.validate(async o=>{o&&(y.value=!0,s.value.id?await Fe(s.value).finally(()=>y.value=!1):await Ue(s.value).finally(()=>y.value=!1),r==null||r.$modal.msgSuccess("操作成功"),d.visible=!1,await _())})},le=async o=>{await(r==null?void 0:r.$modal.confirm('是否确认删除流程分类编号为"'+o.id+'"的数据项？')),p.value=!0,await qe(o.id).finally(()=>p.value=!1),await _(),r==null||r.$modal.msgSuccess("删除成功")};return ce(()=>{_()}),(o,e)=>{var L,K;const u=ye,i=Te,c=be,x=Re,B=Ae,te=Ie,oe=Pe,h=Ve,R=Ce,ne=Ne,re=$e,se=Ee,ie=ke,de=we,k=me("hasPermi"),D=he;return E(),pe("div",xe,[a(ge,{"enter-active-class":(L=t(r))==null?void 0:L.animate.searchAnimate.enter,"leave-active-class":(K=t(r))==null?void 0:K.animate.searchAnimate.leave},{default:l(()=>[f(j("div",Be,[a(x,{ref_key:"queryFormRef",ref:F,model:t(g),inline:!0},{default:l(()=>[a(i,{label:"分类名称",prop:"categoryName"},{default:l(()=>[a(u,{modelValue:t(g).categoryName,"onUpdate:modelValue":e[0]||(e[0]=n=>t(g).categoryName=n),placeholder:"请输入分类名称",clearable:"",onKeyup:z(w,["enter"])},null,8,["modelValue"])]),_:1}),a(i,{label:"分类编码",prop:"categoryCode"},{default:l(()=>[a(u,{modelValue:t(g).categoryCode,"onUpdate:modelValue":e[1]||(e[1]=n=>t(g).categoryCode=n),placeholder:"请输入分类编码",clearable:"",onKeyup:z(w,["enter"])},null,8,["modelValue"])]),_:1}),a(i,null,{default:l(()=>[a(c,{type:"primary",icon:"Search",onClick:w},{default:l(()=>e[9]||(e[9]=[v("搜索")])),_:1}),a(c,{icon:"Refresh",onClick:Y},{default:l(()=>e[10]||(e[10]=[v("重置")])),_:1})]),_:1})]),_:1},8,["model"])],512),[[fe,t(b)]])]),_:1},8,["enter-active-class","leave-active-class"]),a(re,{shadow:"never"},{header:l(()=>[a(oe,{gutter:10,class:"mb8"},{default:l(()=>[a(B,{span:1.5},{default:l(()=>[f((E(),S(c,{type:"primary",plain:"",icon:"Plus",onClick:e[2]||(e[2]=n=>P())},{default:l(()=>e[11]||(e[11]=[v("新增")])),_:1})),[[k,["workflow:category:add"]]])]),_:1}),a(B,{span:1.5},{default:l(()=>[a(c,{type:"info",plain:"",icon:"Sort",onClick:Z},{default:l(()=>e[12]||(e[12]=[v("展开/折叠")])),_:1})]),_:1}),a(te,{showSearch:t(b),"onUpdate:showSearch":e[3]||(e[3]=n=>ve(b)?b.value=n:null),onQueryTable:_},null,8,["showSearch"])]),_:1})]),default:l(()=>[f((E(),S(ne,{ref_key:"categoryTableRef",ref:U,data:t(V),"row-key":"id","default-expand-all":t(C),"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:l(()=>[a(h,{label:"分类名称",prop:"categoryName"}),a(h,{label:"分类编码",align:"center",prop:"categoryCode"}),a(h,{label:"排序",align:"center",prop:"sortNum"}),a(h,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:l(n=>[a(R,{content:"修改",placement:"top"},{default:l(()=>[f(a(c,{link:"",type:"primary",icon:"Edit",onClick:Q=>ee(n.row)},null,8,["onClick"]),[[k,["workflow:category:edit"]]])]),_:2},1024),a(R,{content:"新增",placement:"top"},{default:l(()=>[f(a(c,{link:"",type:"primary",icon:"Plus",onClick:Q=>P(n.row)},null,8,["onClick"]),[[k,["workflow:category:add"]]])]),_:2},1024),a(R,{content:"删除",placement:"top"},{default:l(()=>[f(a(c,{link:"",type:"primary",icon:"Delete",onClick:Q=>le(n.row)},null,8,["onClick"]),[[k,["workflow:category:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data","default-expand-all"])),[[D,t(p)]])]),_:1}),a(de,{modelValue:t(d).visible,"onUpdate:modelValue":e[8]||(e[8]=n=>t(d).visible=n),title:t(d).title,width:"500px","append-to-body":""},{footer:l(()=>[j("div",De,[a(c,{loading:t(y),type:"primary",onClick:ae},{default:l(()=>e[13]||(e[13]=[v("确 定")])),_:1},8,["loading"]),a(c,{onClick:X},{default:l(()=>e[14]||(e[14]=[v("取 消")])),_:1})])]),default:l(()=>[f((E(),S(x,{ref_key:"categoryFormRef",ref:I,model:t(s),rules:t(J),"label-width":"80px"},{default:l(()=>[a(i,{label:"父级分类",prop:"parentId"},{default:l(()=>[a(se,{modelValue:t(s).parentId,"onUpdate:modelValue":e[4]||(e[4]=n=>t(s).parentId=n),data:t(N),props:{value:"id",label:"categoryName",children:"children"},"value-key":"id",placeholder:"请选择父级id","check-strictly":""},null,8,["modelValue","data"])]),_:1}),a(i,{label:"分类名称",prop:"categoryName"},{default:l(()=>[a(u,{modelValue:t(s).categoryName,"onUpdate:modelValue":e[5]||(e[5]=n=>t(s).categoryName=n),placeholder:"请输入分类名称"},null,8,["modelValue"])]),_:1}),a(i,{label:"分类编码",prop:"categoryCode"},{default:l(()=>[a(u,{modelValue:t(s).categoryCode,"onUpdate:modelValue":e[6]||(e[6]=n=>t(s).categoryCode=n),placeholder:"请输入分类编码"},null,8,["modelValue"])]),_:1}),a(i,{label:"排序",prop:"sortNum"},{default:l(()=>[a(ie,{modelValue:t(s).sortNum,"onUpdate:modelValue":e[7]||(e[7]=n=>t(s).sortNum=n),placeholder:"请输入排序","controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[D,t(p)]])]),_:1},8,["modelValue","title"])])}}});export{ia as default};
