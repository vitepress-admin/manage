import{d as le,aa as W,r as f,ab as X,b as Ve,ah as Ee,o as i,c as N,p as e,q as t,w as b,m as q,e as o,I as Y,F as A,z as $,A as y,y as v,U as Ce,ag as we,af as ke,t as Z,i as Ie,a1 as Ne,S as De,P as Ue,Q as Te,x as Re,ac as Se,B as Fe,v as qe}from"./index-BoZ_NHcV.js";/* empty css                  *//* empty css                       *//* empty css                 */import{E as Ae}from"./el-input-number-CKOLg6fg.js";/* empty css                */import"./el-checkbox-P4CsStjC.js";import{E as $e}from"./el-tree-select-DYgSK5K4.js";import{E as Be,a as Pe}from"./el-table-column-D7OTia2S.js";import{_ as xe}from"./index-C6Yq9PJ4.js";/* empty css               */import{_ as Le}from"./index-CYBAydvN.js";/* empty css               *//* empty css                */import{E as Qe,a as Ke}from"./el-form-item-B1jFSTUI.js";import{l as ee,g as Oe,a as ze,u as Ge,b as Me,d as je}from"./index-DbV7ARQJ.js";import{c as He}from"./index-CxCt6o8t.js";import{E as Je}from"./index-CvM3PS3t.js";import{E as We}from"./index-7Tbabexq.js";import{E as Xe}from"./index-C68px2O7.js";import{E as Ye,a as Ze}from"./index-BWi2n354.js";import"./index-CRSvFekG.js";import"./index-sR6EW1xb.js";import"./_initCloneObject-CC3WSgFr.js";import"./_baseClone-tnMM97Jv.js";const el={class:"p-2"},ll={class:"mb-[10px]"},tl={class:"dialog-footer"},al=le({name:"Dept"}),Tl=le({...al,setup(ol){const{proxy:s}=Ne(),{sys_normal_disable:D}=W(s==null?void 0:s.useDict("sys_normal_disable")),U=f([]),T=f(!0),V=f(!0),E=f([]),C=f(!0),B=f([]),m=X({visible:!1,title:""}),P=f(),x=f(),R=f(),L={deptId:void 0,parentId:void 0,deptName:void 0,deptCategory:void 0,orderNum:0,leader:void 0,phone:void 0,email:void 0,status:"0"},te={form:{...L},queryParams:{pageNum:1,pageSize:10,deptName:void 0,deptCategory:void 0,status:void 0},rules:{parentId:[{required:!0,message:"上级部门不能为空",trigger:"blur"}],deptName:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"显示排序不能为空",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}},ae=X(te),{queryParams:_,form:d,rules:oe}=W(ae),h=async()=>{T.value=!0;const n=await ee(_.value),l=s==null?void 0:s.handleTree(n.data,"deptId");l&&(U.value=l),T.value=!1};async function ne(n){if(n!==null&&n!==""&&n!==void 0){const l=await He(n);B.value=l.data}}const de=()=>{S(),m.visible=!1},S=()=>{var n;d.value={...L},(n=R.value)==null||n.resetFields()},w=()=>{h()},se=()=>{var n;(n=x.value)==null||n.resetFields(),w()},re=()=>{C.value=!C.value,Q(U.value,C.value)},Q=(n,l)=>{n.forEach(u=>{var r;(r=P.value)==null||r.toggleRowExpansion(u,l),u.children&&u.children.length>0&&Q(u.children,l)})},K=async n=>{S();const l=await ee(),u=s==null?void 0:s.handleTree(l.data,"deptId");u&&(E.value=u,n&&n.deptId&&(d.value.parentId=n==null?void 0:n.deptId),m.visible=!0,m.title="添加部门")},ue=async n=>{S(),ne(n.deptId);const l=await Oe(n.deptId);d.value=l.data;const u=await ze(n.deptId),r=s==null?void 0:s.handleTree(u.data,"deptId");if(r&&(E.value=r,r.length===0)){const k={deptId:l.data.parentId,deptName:l.data.parentName,children:[]};E.value.push(k)}m.visible=!0,m.title="修改部门"},pe=()=>{var n;(n=R.value)==null||n.validate(async l=>{l&&(d.value.deptId?await Ge(d.value):await Me(d.value),s==null||s.$modal.msgSuccess("操作成功"),m.visible=!1,await h())})},ie=async n=>{await(s==null?void 0:s.$modal.confirm('是否确认删除名称为"'+n.deptName+'"的数据项?')),await je(n.deptId),await h(),s==null||s.$modal.msgSuccess("删除成功")};return Ve(()=>{h()}),(n,l)=>{var j,H;const u=De,r=Qe,k=Ue,O=Te,c=Re,z=Ke,G=Je,p=We,me=Le,M=Xe,g=Be,ce=xe,F=Se,fe=Pe,_e=$e,ve=Ae,ge=Ye,be=Ze,ye=Fe,I=Ee("hasPermi"),he=qe;return i(),N("div",el,[e(we,{"enter-active-class":(j=o(s))==null?void 0:j.animate.searchAnimate.enter,"leave-active-class":(H=o(s))==null?void 0:H.animate.searchAnimate.leave},{default:t(()=>[b(q("div",ll,[e(G,{shadow:"hover"},{default:t(()=>[e(z,{ref_key:"queryFormRef",ref:x,model:o(_),inline:!0},{default:t(()=>[e(r,{label:"部门名称",prop:"deptName"},{default:t(()=>[e(u,{modelValue:o(_).deptName,"onUpdate:modelValue":l[0]||(l[0]=a=>o(_).deptName=a),placeholder:"请输入部门名称",clearable:"",onKeyup:Y(w,["enter"])},null,8,["modelValue"])]),_:1}),e(r,{label:"类别编码",prop:"deptCategory"},{default:t(()=>[e(u,{modelValue:o(_).deptCategory,"onUpdate:modelValue":l[1]||(l[1]=a=>o(_).deptCategory=a),placeholder:"请输入类别编码",clearable:"",style:{width:"240px"},onKeyup:Y(w,["enter"])},null,8,["modelValue"])]),_:1}),e(r,{label:"状态",prop:"status"},{default:t(()=>[e(O,{modelValue:o(_).status,"onUpdate:modelValue":l[2]||(l[2]=a=>o(_).status=a),placeholder:"部门状态",clearable:""},{default:t(()=>[(i(!0),N(A,null,$(o(D),a=>(i(),y(k,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(c,{type:"primary",icon:"Search",onClick:w},{default:t(()=>l[14]||(l[14]=[v("搜索")])),_:1}),e(c,{icon:"Refresh",onClick:se},{default:t(()=>l[15]||(l[15]=[v("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[Ce,o(V)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(G,{shadow:"hover"},{header:t(()=>[e(M,{gutter:10},{default:t(()=>[e(p,{span:1.5},{default:t(()=>[b((i(),y(c,{type:"primary",plain:"",icon:"Plus",onClick:l[3]||(l[3]=a=>K())},{default:t(()=>l[16]||(l[16]=[v("新增 ")])),_:1})),[[I,["system:dept:add"]]])]),_:1}),e(p,{span:1.5},{default:t(()=>[e(c,{type:"info",plain:"",icon:"Sort",onClick:re},{default:t(()=>l[17]||(l[17]=[v("展开/折叠")])),_:1})]),_:1}),e(me,{showSearch:o(V),"onUpdate:showSearch":l[4]||(l[4]=a=>ke(V)?V.value=a:null),onQueryTable:h},null,8,["showSearch"])]),_:1})]),default:t(()=>[b((i(),y(fe,{ref_key:"deptTableRef",ref:P,data:o(U),"row-key":"deptId","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":o(C)},{default:t(()=>[e(g,{prop:"deptName",label:"部门名称",width:"260"}),e(g,{prop:"deptCategory",align:"center",label:"类别编码",width:"200"}),e(g,{prop:"orderNum",align:"center",label:"排序",width:"200"}),e(g,{prop:"status",align:"center",label:"状态",width:"100"},{default:t(a=>[e(ce,{options:o(D),value:a.row.status},null,8,["options","value"])]),_:1}),e(g,{label:"创建时间",align:"center",prop:"createTime",width:"200"},{default:t(a=>[q("span",null,Z(n.parseTime(a.row.createTime)),1)]),_:1}),e(g,{fixed:"right",align:"center",label:"操作"},{default:t(a=>[e(F,{content:"修改",placement:"top"},{default:t(()=>[b(e(c,{link:"",type:"primary",icon:"Edit",onClick:J=>ue(a.row)},null,8,["onClick"]),[[I,["system:dept:edit"]]])]),_:2},1024),e(F,{content:"新增",placement:"top"},{default:t(()=>[b(e(c,{link:"",type:"primary",icon:"Plus",onClick:J=>K(a.row)},null,8,["onClick"]),[[I,["system:dept:add"]]])]),_:2},1024),e(F,{content:"删除",placement:"top"},{default:t(()=>[b(e(c,{link:"",type:"primary",icon:"Delete",onClick:J=>ie(a.row)},null,8,["onClick"]),[[I,["system:dept:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data","default-expand-all"])),[[he,o(T)]])]),_:1}),e(ye,{modelValue:o(m).visible,"onUpdate:modelValue":l[13]||(l[13]=a=>o(m).visible=a),title:o(m).title,"destroy-on-close":"","append-to-body":"",width:"600px"},{footer:t(()=>[q("div",tl,[e(c,{type:"primary",onClick:pe},{default:t(()=>l[18]||(l[18]=[v("确 定")])),_:1}),e(c,{onClick:de},{default:t(()=>l[19]||(l[19]=[v("取 消")])),_:1})])]),default:t(()=>[e(z,{ref_key:"deptFormRef",ref:R,model:o(d),rules:o(oe),"label-width":"80px"},{default:t(()=>[e(M,null,{default:t(()=>[o(d).parentId!==0?(i(),y(p,{key:0,span:24},{default:t(()=>[e(r,{label:"上级部门",prop:"parentId"},{default:t(()=>[e(_e,{modelValue:o(d).parentId,"onUpdate:modelValue":l[5]||(l[5]=a=>o(d).parentId=a),data:o(E),props:{value:"deptId",label:"deptName",children:"children"},"value-key":"deptId",placeholder:"选择上级部门","check-strictly":""},null,8,["modelValue","data"])]),_:1})]),_:1})):Ie("",!0),e(p,{span:12},{default:t(()=>[e(r,{label:"部门名称",prop:"deptName"},{default:t(()=>[e(u,{modelValue:o(d).deptName,"onUpdate:modelValue":l[6]||(l[6]=a=>o(d).deptName=a),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:t(()=>[e(r,{label:"类别编码",prop:"deptCategory"},{default:t(()=>[e(u,{modelValue:o(d).deptCategory,"onUpdate:modelValue":l[7]||(l[7]=a=>o(d).deptCategory=a),placeholder:"请输入类别编码"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:t(()=>[e(r,{label:"显示排序",prop:"orderNum"},{default:t(()=>[e(ve,{modelValue:o(d).orderNum,"onUpdate:modelValue":l[8]||(l[8]=a=>o(d).orderNum=a),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:t(()=>[e(r,{label:"负责人",prop:"leader"},{default:t(()=>[e(O,{modelValue:o(d).leader,"onUpdate:modelValue":l[9]||(l[9]=a=>o(d).leader=a),placeholder:"请选择负责人"},{default:t(()=>[(i(!0),N(A,null,$(o(B),a=>(i(),y(k,{key:a.userId,label:a.userName,value:a.userId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:t(()=>[e(r,{label:"联系电话",prop:"phone"},{default:t(()=>[e(u,{modelValue:o(d).phone,"onUpdate:modelValue":l[10]||(l[10]=a=>o(d).phone=a),placeholder:"请输入联系电话",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:t(()=>[e(r,{label:"邮箱",prop:"email"},{default:t(()=>[e(u,{modelValue:o(d).email,"onUpdate:modelValue":l[11]||(l[11]=a=>o(d).email=a),placeholder:"请输入邮箱",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{span:12},{default:t(()=>[e(r,{label:"部门状态"},{default:t(()=>[e(be,{modelValue:o(d).status,"onUpdate:modelValue":l[12]||(l[12]=a=>o(d).status=a)},{default:t(()=>[(i(!0),N(A,null,$(o(D),a=>(i(),y(ge,{key:a.value,value:a.value},{default:t(()=>[v(Z(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{Tl as default};
