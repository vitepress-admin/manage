import{d as E,aa as j,r as p,ab as G,A as S,q as t,a1 as H,o as I,p as o,m as V,y as c,e as a,I as C,t as J,i as M,af as O,S as W,x as X,B as Y}from"./index-CvOCUbz8.js";/* empty css                  *//* empty css               */import{_ as Z}from"./index-C7BmbIHG.js";import{E as ee,a as oe}from"./el-table-column-DcjqO3jE.js";import"./el-checkbox-CUJrHLxp.js";import{_ as te}from"./index-BpDn-YxV.js";import{E as le,a as ae}from"./el-form-item-CC3-843t.js";import{u as ne,d as se}from"./index-B7fknBf3.js";import{E as re}from"./index-BrYv1yqp.js";const ue={class:"dialog-footer"},ie=E({name:"SelectUser"}),ye=E({...ie,props:{roleId:{type:[Number,String],required:!0}},emits:["ok"],setup(R,{expose:h,emit:U}){const T=R,{proxy:r}=H(),{sys_normal_disable:q}=j(r==null?void 0:r.useDict("sys_normal_disable")),b=p([]),i=p(!1),f=p(0),v=p([]),n=G({pageNum:1,pageSize:10,roleId:void 0,userName:void 0,phonenumber:void 0}),w=p(),y=p(),B=()=>{n.roleId=T.roleId,m(),i.value=!0},F=s=>{var e;(e=w.value)==null||e.toggleRowSelection(s,!1)},z=s=>{v.value=s.map(e=>e.userId)},m=async()=>{const s=await ne(n);b.value=s.rows,f.value=s.total},_=()=>{n.pageNum=1,m()},D=()=>{var s;(s=y.value)==null||s.resetFields(),m()},K=U,L=async()=>{const s=n.roleId,e=v.value.join(",");if(e==""){r==null||r.$modal.msgError("请选择要分配的用户");return}await se({roleId:s,userIds:e}),r==null||r.$modal.msgSuccess("分配成功"),K("ok"),i.value=!1};return h({show:B}),(s,e)=>{const N=W,g=le,d=X,$=ae,u=ee,x=te,A=oe,P=Z,k=re,Q=Y;return I(),S(k,null,{default:t(()=>[o(Q,{modelValue:a(i),"onUpdate:modelValue":e[5]||(e[5]=l=>O(i)?i.value=l:null),title:"选择用户",width:"800px",top:"5vh","append-to-body":""},{footer:t(()=>[V("div",ue,[o(d,{type:"primary",onClick:L},{default:t(()=>e[8]||(e[8]=[c("确 定")])),_:1}),o(d,{onClick:e[4]||(e[4]=l=>i.value=!1)},{default:t(()=>e[9]||(e[9]=[c("取 消")])),_:1})])]),default:t(()=>[o($,{ref_key:"queryFormRef",ref:y,model:a(n),inline:!0},{default:t(()=>[o(g,{label:"用户名称",prop:"userName"},{default:t(()=>[o(N,{modelValue:a(n).userName,"onUpdate:modelValue":e[0]||(e[0]=l=>a(n).userName=l),placeholder:"请输入用户名称",clearable:"",onKeyup:C(_,["enter"])},null,8,["modelValue"])]),_:1}),o(g,{label:"手机号码",prop:"phonenumber"},{default:t(()=>[o(N,{modelValue:a(n).phonenumber,"onUpdate:modelValue":e[1]||(e[1]=l=>a(n).phonenumber=l),placeholder:"请输入手机号码",clearable:"",onKeyup:C(_,["enter"])},null,8,["modelValue"])]),_:1}),o(g,null,{default:t(()=>[o(d,{type:"primary",icon:"Search",onClick:_},{default:t(()=>e[6]||(e[6]=[c("搜索")])),_:1}),o(d,{icon:"Refresh",onClick:D},{default:t(()=>e[7]||(e[7]=[c("重置")])),_:1})]),_:1})]),_:1},8,["model"]),o(k,null,{default:t(()=>[o(A,{ref_key:"tableRef",ref:w,data:a(b),height:"260px",onRowClick:F,onSelectionChange:z},{default:t(()=>[o(u,{type:"selection",width:"55"}),o(u,{label:"用户名称",prop:"userName","show-overflow-tooltip":!0}),o(u,{label:"用户昵称",prop:"nickName","show-overflow-tooltip":!0}),o(u,{label:"邮箱",prop:"email","show-overflow-tooltip":!0}),o(u,{label:"手机",prop:"phonenumber","show-overflow-tooltip":!0}),o(u,{label:"状态",align:"center",prop:"status"},{default:t(l=>[o(x,{options:a(q),value:l.row.status},null,8,["options","value"])]),_:1}),o(u,{label:"创建时间",align:"center",prop:"createTime",width:"180"},{default:t(l=>[V("span",null,J(s.parseTime(l.row.createTime)),1)]),_:1})]),_:1},8,["data"]),a(f)>0?(I(),S(P,{key:0,page:a(n).pageNum,"onUpdate:page":e[2]||(e[2]=l=>a(n).pageNum=l),limit:a(n).pageSize,"onUpdate:limit":e[3]||(e[3]=l=>a(n).pageSize=l),total:a(f),onPagination:m},null,8,["page","limit","total"])):M("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{ye as _};
