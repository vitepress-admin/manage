import{d as G,C as T,u as K,r as d,D,b as O,a0 as H,o as c,c as v,p as t,q as a,m as _,e as s,A as C,F as P,z as Q,i as V,I as U,y as $,L as j,T as J,M as W,N as X,O as Y,E as Z,P as ee,at as te,Q as oe,S as ae,x as le,_ as ne}from"./index-BoZ_NHcV.js";import{E as se,a as re}from"./el-form-item-B1jFSTUI.js";import{E as ie}from"./el-checkbox-P4CsStjC.js";import{a as ue}from"./auth-C2kfAooB.js";import"./_baseClone-tnMM97Jv.js";import"./_initCloneObject-CC3WSgFr.js";const de={class:"login"},ce={class:"login-code"},me=["src"],pe={key:0},ge={key:1},fe={key:0,style:{float:"right"}},ve=G({__name:"login",setup(_e){const q=T(),E=K(),o=d({tenantId:"000001",username:"",password:"",rememberMe:!1,code:"",uuid:""}),B={tenantId:[{required:!0,trigger:"blur",message:"请输入您的租户编号"}],username:[{required:!0,trigger:"blur",message:"请输入您的账号"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"}],code:[{required:!0,trigger:"change",message:"请输入验证码"}]},x=d(""),g=d(!1),b=d(!0),I=d(!0),F=d(!1),M=d("/"),L=d(),f=d([]);D(()=>E.currentRoute.value,r=>{M.value=r.query&&decodeURIComponent(r.query.redirect)},{immediate:!0});const y=()=>{var r;(r=L.value)==null||r.validate(async(e,m)=>{if(e){g.value=!0,o.value.rememberMe?(localStorage.setItem("tenantId",String(o.value.tenantId)),localStorage.setItem("username",String(o.value.username)),localStorage.setItem("password",String(o.value.password)),localStorage.setItem("rememberMe",String(o.value.rememberMe))):(localStorage.removeItem("tenantId"),localStorage.removeItem("username"),localStorage.removeItem("password"),localStorage.removeItem("rememberMe"));const[n]=await J(q.login(o.value));if(n)g.value=!1,b.value&&await S();else{const k=M.value||"/";await E.push(k),g.value=!1}}else console.log("error submit!",m)})},S=async()=>{const r=await W(),{data:e}=r;b.value=e.captchaEnabled===void 0?!0:e.captchaEnabled,b.value&&(x.value="data:image/gif;base64,"+e.img,o.value.uuid=e.uuid)},N=()=>{const r=localStorage.getItem("tenantId"),e=localStorage.getItem("username"),m=localStorage.getItem("password"),n=localStorage.getItem("rememberMe");o.value={tenantId:r===null?String(o.value.tenantId):r,username:e===null?String(o.value.username):e,password:String(m===null?o.value.password:m),rememberMe:n===null?!1:!!n}},R=async()=>{const{data:r}=await X();I.value=r.tenantEnabled===void 0?!0:r.tenantEnabled,I.value&&(f.value=r.voList,f.value!=null&&f.value.length!==0&&(o.value.tenantId=f.value[0].tenantId))},u=r=>{ue(r,o.value.tenantId).then(e=>{e.code===Y.SUCCESS?window.location.href=e.data:Z.error(e.msg)})};return O(()=>{S(),R(),N()}),(r,e)=>{const m=ee,n=te,k=oe,p=se,w=ae,A=ie,i=le,h=H("router-link"),z=re;return c(),v("div",de,[t(z,{ref_key:"loginRef",ref:L,model:s(o),rules:B,class:"login-form"},{default:a(()=>[e[16]||(e[16]=_("h3",{class:"title"},"VpAdmin SSG Sites Administrator Management System",-1)),s(I)?(c(),C(p,{key:0,prop:"tenantId"},{default:a(()=>[t(k,{modelValue:s(o).tenantId,"onUpdate:modelValue":e[0]||(e[0]=l=>s(o).tenantId=l),filterable:"",placeholder:"请选择/输入公司名称",style:{width:"100%"}},{prefix:a(()=>[t(n,{"icon-class":"company",class:"el-input__icon input-icon"})]),default:a(()=>[(c(!0),v(P,null,Q(s(f),l=>(c(),C(m,{key:l.tenantId,label:l.companyName,value:l.tenantId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):V("",!0),t(p,{prop:"username"},{default:a(()=>[t(w,{modelValue:s(o).username,"onUpdate:modelValue":e[1]||(e[1]=l=>s(o).username=l),type:"text",size:"large","auto-complete":"off",placeholder:"账号"},{prefix:a(()=>[t(n,{"icon-class":"user",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"])]),_:1}),t(p,{prop:"password"},{default:a(()=>[t(w,{modelValue:s(o).password,"onUpdate:modelValue":e[2]||(e[2]=l=>s(o).password=l),type:"password",size:"large","auto-complete":"off",placeholder:"密码",onKeyup:U(y,["enter"])},{prefix:a(()=>[t(n,{"icon-class":"password",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"])]),_:1}),s(b)?(c(),C(p,{key:1,prop:"code"},{default:a(()=>[t(w,{modelValue:s(o).code,"onUpdate:modelValue":e[3]||(e[3]=l=>s(o).code=l),size:"large","auto-complete":"off",placeholder:"验证码",style:{width:"63%"},onKeyup:U(y,["enter"])},{prefix:a(()=>[t(n,{"icon-class":"validCode",class:"el-input__icon input-icon"})]),_:1},8,["modelValue"]),_("div",ce,[_("img",{src:s(x),class:"login-code-img",onClick:S},null,8,me)])]),_:1})):V("",!0),t(A,{modelValue:s(o).rememberMe,"onUpdate:modelValue":e[4]||(e[4]=l=>s(o).rememberMe=l),style:{margin:"0 0 25px 0"}},{default:a(()=>e[14]||(e[14]=[$("记住密码")])),_:1},8,["modelValue"]),t(p,{style:{float:"right"}},{default:a(()=>[t(i,{circle:"",title:"微信登录",onClick:e[5]||(e[5]=l=>u("wechat_open"))},{default:a(()=>[t(n,{"icon-class":"wechat"})]),_:1}),t(i,{circle:"",title:"MaxKey登录",onClick:e[6]||(e[6]=l=>u("maxkey"))},{default:a(()=>[t(n,{"icon-class":"maxkey"})]),_:1}),t(i,{circle:"",title:"TopIam登录",onClick:e[7]||(e[7]=l=>u("topiam"))},{default:a(()=>[t(n,{"icon-class":"topiam"})]),_:1}),t(i,{circle:"",title:"Gitee登录",onClick:e[8]||(e[8]=l=>u("gitee"))},{default:a(()=>[t(n,{"icon-class":"gitee"})]),_:1}),t(i,{circle:"",title:"Github登录",onClick:e[9]||(e[9]=l=>u("github"))},{default:a(()=>[t(n,{"icon-class":"github"})]),_:1}),t(i,{circle:"",title:"Gitlab登录",onClick:e[10]||(e[10]=l=>u("gitlab"))},{default:a(()=>[t(n,{"icon-class":"gitlab"})]),_:1}),t(i,{circle:"",title:"AFDIAN登录",onClick:e[11]||(e[11]=l=>u("afdian"))},{default:a(()=>[t(n,{"icon-class":"afdian"})]),_:1}),t(i,{circle:"",title:"Google登录",onClick:e[12]||(e[12]=l=>u("google"))},{default:a(()=>[t(n,{"icon-class":"google"})]),_:1}),t(i,{circle:"",title:"Facebook登录",onClick:e[13]||(e[13]=l=>u("facebook"))},{default:a(()=>[t(n,{"icon-class":"facebook"})]),_:1})]),_:1}),t(p,{style:{width:"100%"}},{default:a(()=>[t(i,{loading:s(g),size:"large",type:"primary",style:{width:"100%"},onClick:j(y,["prevent"])},{default:a(()=>[s(g)?(c(),v("span",ge,"登 录 中...")):(c(),v("span",pe,"登 录"))]),_:1},8,["loading"]),s(F)?(c(),v("div",fe,[t(h,{class:"link-type",to:"/register"},{default:a(()=>e[15]||(e[15]=[$("立即注册")])),_:1})])):V("",!0)]),_:1})]),_:1},8,["model"]),e[17]||(e[17]=_("div",{class:"el-login-footer"},[_("span",null,"Copyright © 2018-2024 疯狂的狮子Li All Rights Reserved.")],-1))])}}}),Ce=ne(ve,[["__scopeId","data-v-5d13ffcf"]]);export{Ce as default};
