import{d as S,u as T,r as i,b as z,a2 as B,o as u,c as y,p as t,q as o,m as p,e as s,A as V,F as M,z as N,i as I,I as E,L as F,y as A,V as K,X as $,av as G,M as H,N as O,R as Q,Q as X,S as j,U as D,x as J,_ as W}from"./index-BAuvOH7U.js";import{E as Y,a as Z}from"./el-form-item-CrUaNreY.js";import"./_baseClone-ClgyB-Pi.js";import"./_initCloneObject-B1WjiVDp.js";const ee={class:"register"},te={class:"register-code"},se=["src"],ae={key:0},oe={key:1},re={style:{float:"right"}},ne=S({__name:"register",setup(le){const k=T(),a=i({tenantId:"",username:"",password:"",confirmPassword:"",code:"",uuid:"",userType:"vpadmin_user"}),w=i(!0),C={tenantId:[{required:!0,trigger:"blur",message:"请输入您的租户编号"}],username:[{required:!0,trigger:"blur",message:"请输入您的账号"},{min:2,max:20,message:"用户账号长度必须介于 2 和 20 之间",trigger:"blur"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"},{min:5,max:20,message:"用户密码长度必须介于 5 和 20 之间",trigger:"blur"},{pattern:/^[^<>"'|\\]+$/,message:`不能包含非法字符：< > " ' \\ |`,trigger:"blur"}],confirmPassword:[{required:!0,trigger:"blur",message:"请再次输入您的密码"},{required:!0,validator:(n,e,d)=>{a.value.password!==e?d(new Error("两次输入的密码不一致")):d()},trigger:"blur"}],code:[{required:!0,trigger:"change",message:"请输入验证码"}]},x=i(""),g=i(!1),_=i(!0),h=i(),m=i([]),f=()=>{var n;(n=h.value)==null||n.validate(async e=>{if(e){g.value=!0;const[d]=await K($(a.value));if(d)g.value=!1,_.value&&b();else{const l=a.value.username;await G.alert("<font color='red'>恭喜你，您的账号 "+l+" 注册成功！</font>","系统提示",{dangerouslyUseHTMLString:!0,type:"success"}),await k.push("/login")}}})},b=async()=>{const n=await H(),{data:e}=n;_.value=e.captchaEnabled===void 0?!0:e.captchaEnabled,_.value&&(x.value="data:image/gif;base64,"+e.img,a.value.uuid=e.uuid)},q=async()=>{const{data:n}=await O();w.value=n.tenantEnabled===void 0?!0:n.tenantEnabled,w.value&&(m.value=n.voList,m.value!=null&&m.value.length!==0&&(a.value.tenantId=m.value[0].tenantId))};return z(()=>{b(),q()}),(n,e)=>{const d=Q,l=X,L=j,c=Y,v=D,R=J,U=B("router-link"),P=Z;return u(),y("div",ee,[t(P,{ref_key:"registerRef",ref:h,model:s(a),rules:C,class:"register-form"},{default:o(()=>[e[6]||(e[6]=p("h3",{class:"title"},"VpAdmin SSG Sites Administrator Management System",-1)),s(w)?(u(),V(c,{key:0,prop:"tenantId"},{default:o(()=>[t(L,{modelValue:s(a).tenantId,"onUpdate:modelValue":e[0]||(e[0]=r=>s(a).tenantId=r),filterable:"",placeholder:"请选择/输入公司名称",style:{width:"100%"}},{prefix:o(()=>[t(l,{"icon-class":"company",class:"el-input__icon input-icon"})]),default:o(()=>[(u(!0),y(M,null,N(s(m),r=>(u(),V(d,{key:r.tenantId,label:r.companyName,value:r.tenantId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):I("",!0),t(c,{prop:"username"},{default:o(()=>[t(v,{modelValue:s(a).username,"onUpdate:modelValue":e[1]||(e[1]=r=>s(a).username=r),type:"text",size:"large","auto-complete":"off",placeholder:"账号"},{prefix:o(()=>[t(l,{"icon-class":"user",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"])]),_:1}),t(c,{prop:"password"},{default:o(()=>[t(v,{modelValue:s(a).password,"onUpdate:modelValue":e[2]||(e[2]=r=>s(a).password=r),type:"password",size:"large","auto-complete":"off",placeholder:"密码",onKeyup:E(f,["enter"])},{prefix:o(()=>[t(l,{"icon-class":"password",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"])]),_:1}),t(c,{prop:"confirmPassword"},{default:o(()=>[t(v,{modelValue:s(a).confirmPassword,"onUpdate:modelValue":e[3]||(e[3]=r=>s(a).confirmPassword=r),type:"password",size:"large","auto-complete":"off",placeholder:"确认密码",onKeyup:E(f,["enter"])},{prefix:o(()=>[t(l,{"icon-class":"password",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"])]),_:1}),s(_)?(u(),V(c,{key:1,prop:"code"},{default:o(()=>[t(v,{modelValue:s(a).code,"onUpdate:modelValue":e[4]||(e[4]=r=>s(a).code=r),size:"large","auto-complete":"off",placeholder:"验证码",style:{width:"63%"},onKeyup:E(f,["enter"])},{prefix:o(()=>[t(l,{"icon-class":"validCode",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"]),p("div",te,[p("img",{src:s(x),class:"register-code-img",onClick:b},null,8,se)])]),_:1})):I("",!0),t(c,{style:{width:"100%"}},{default:o(()=>[t(R,{loading:s(g),size:"large",type:"primary",style:{width:"100%"},onClick:F(f,["prevent"])},{default:o(()=>[s(g)?(u(),y("span",oe,"注 册 中...")):(u(),y("span",ae,"注 册"))]),_:1},8,["loading"]),p("div",re,[t(U,{class:"link-type",to:"/login"},{default:o(()=>e[5]||(e[5]=[A("使用已有账户登录")])),_:1})])]),_:1})]),_:1},8,["model"]),e[7]||(e[7]=p("div",{class:"el-register-footer"},[p("span",null,"Copyright © 2018-2024 疯狂的狮子Li All Rights Reserved.")],-1))])}}}),me=W(ne,[["__scopeId","data-v-5ab94b36"]]);export{me as default};
