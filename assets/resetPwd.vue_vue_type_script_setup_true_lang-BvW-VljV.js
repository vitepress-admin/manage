import{d as c,r as m,o as b,A as V,q as a,p as o,e as r,y as i,S as q,x as v,a1 as y}from"./index-DLoZ2oNR.js";import{E,a as C}from"./el-form-item-BDJlCK8S.js";import{h as k}from"./index-nFnsnSmf.js";const $=c({__name:"resetPwd",setup(x){const{proxy:l}=y(),w=m(),s=m({oldPassword:"",newPassword:"",confirmPassword:""}),f=m({oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"},{pattern:/^[^<>"'|\\]+$/,message:`不能包含非法字符：< > " ' \\ |`,trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:(n,e,t)=>{s.value.newPassword!==e?t(new Error("两次输入的密码不一致")):t()},trigger:"blur"}]}),P=()=>{var n;(n=w.value)==null||n.validate(async e=>{e&&(await k(s.value.oldPassword,s.value.newPassword),l==null||l.$modal.msgSuccess("修改成功"))})},g=()=>{l==null||l.$tab.closePage()};return(n,e)=>{const t=q,u=E,p=v,_=C;return b(),V(_,{ref_key:"pwdRef",ref:w,model:r(s),rules:r(f),"label-width":"80px"},{default:a(()=>[o(u,{label:"旧密码",prop:"oldPassword"},{default:a(()=>[o(t,{modelValue:r(s).oldPassword,"onUpdate:modelValue":e[0]||(e[0]=d=>r(s).oldPassword=d),placeholder:"请输入旧密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),o(u,{label:"新密码",prop:"newPassword"},{default:a(()=>[o(t,{modelValue:r(s).newPassword,"onUpdate:modelValue":e[1]||(e[1]=d=>r(s).newPassword=d),placeholder:"请输入新密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),o(u,{label:"确认密码",prop:"confirmPassword"},{default:a(()=>[o(t,{modelValue:r(s).confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=d=>r(s).confirmPassword=d),placeholder:"请确认新密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),o(u,null,{default:a(()=>[o(p,{type:"primary",onClick:P},{default:a(()=>e[3]||(e[3]=[i("保存")])),_:1}),o(p,{type:"danger",onClick:g},{default:a(()=>e[4]||(e[4]=[i("关闭")])),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{$ as _};
