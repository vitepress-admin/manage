import{d as q,aq as y,k as N,r as _,o as C,A as R,q as o,p as l,e as t,y as s,S as U,x as v,a1 as I}from"./index-m2T4SZVn.js";import{E as w,a as B}from"./el-form-item-DLokr9el.js";/* empty css                       *//* empty css                 */import{f as F}from"./index-gF_rGgTl.js";import{E as $,a as P}from"./index-BJYcatjA.js";const H=q({__name:"userInfo",props:{user:y.any.isRequired},setup(b){const p=b,a=N(()=>p.user),{proxy:n}=I(),i=_(),V=_({nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}),c=()=>{var m;(m=i.value)==null||m.validate(async e=>{e&&(await F(p.user),n==null||n.$modal.msgSuccess("修改成功"))})},k=()=>{n==null||n.$tab.closePage()};return(m,e)=>{const d=U,u=w,f=$,x=P,g=v,E=B;return C(),R(E,{ref_key:"userRef",ref:i,model:t(a),rules:t(V),"label-width":"80px"},{default:o(()=>[l(u,{label:"用户昵称",prop:"nickName"},{default:o(()=>[l(d,{modelValue:t(a).nickName,"onUpdate:modelValue":e[0]||(e[0]=r=>t(a).nickName=r),maxlength:"30"},null,8,["modelValue"])]),_:1}),l(u,{label:"手机号码",prop:"phonenumber"},{default:o(()=>[l(d,{modelValue:t(a).phonenumber,"onUpdate:modelValue":e[1]||(e[1]=r=>t(a).phonenumber=r),maxlength:"11"},null,8,["modelValue"])]),_:1}),l(u,{label:"邮箱",prop:"email"},{default:o(()=>[l(d,{modelValue:t(a).email,"onUpdate:modelValue":e[2]||(e[2]=r=>t(a).email=r),maxlength:"50"},null,8,["modelValue"])]),_:1}),l(u,{label:"性别"},{default:o(()=>[l(x,{modelValue:t(a).sex,"onUpdate:modelValue":e[3]||(e[3]=r=>t(a).sex=r)},{default:o(()=>[l(f,{value:"0"},{default:o(()=>e[4]||(e[4]=[s("男")])),_:1}),l(f,{value:"1"},{default:o(()=>e[5]||(e[5]=[s("女")])),_:1})]),_:1},8,["modelValue"])]),_:1}),l(u,null,{default:o(()=>[l(g,{type:"primary",onClick:c},{default:o(()=>e[6]||(e[6]=[s("保存")])),_:1}),l(g,{type:"danger",onClick:k},{default:o(()=>e[7]||(e[7]=[s("关闭")])),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{H as _};
