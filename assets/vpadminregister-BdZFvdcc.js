import{d as G,h as H,r as i,b as O,o as u,c as _,m as n,G as J,p as t,q as s,y as R,t as c,w as Q,F as Y,z as Z,A as k,e as w,H as j,J as F,I as L,K as W,i as N,L as X,u as ee,M as ae,N as te,x as se,P as oe,Q as re,R as le,S as ne,U as de,T as ie,V as ue,E as pe,_ as ce}from"./index-CvOCUbz8.js";/* empty css                */import{E as me,a as fe}from"./el-form-item-CC3-843t.js";import ge from"./RegistrationSuccess-D7PJ_cOw.js";import{E as ve}from"./index-zyKbbzCE.js";import"./_baseClone-DKr7qPQy.js";import"./_initCloneObject-5G3QkxmA.js";const _e={class:"register-container"},we={class:"top-bar"},he={class:"register"},ye={class:"title"},Ee=["src"],Ve={key:0},be={key:1},ke={class:"text-center"},Ce={class:"el-register-footer"},Ie=G({__name:"vpadminregister",setup($e){const{t:d}=H(),C=ee(),h=i(!1),o=i({tenantId:"000001",username:"",password:"",confirmPassword:"",code:"",uuid:"",userType:"vpadmin_user"}),I=i(!1),y=i([]),q=(a,e,r)=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?r():r(new Error(d("invalidEmailFormat")))},T=(a,e,r)=>{/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(e)?r():r(new Error(d("passwordRequirements")))},U=(a,e,r)=>{e!==o.value.password?r(new Error(d("passwordsDoNotMatch"))):r()},M={username:[{required:!0,trigger:"blur",message:d("pleaseEnterEmail")},{validator:q,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:d("pleaseEnterPassword")},{validator:T,trigger:"blur"}],confirmPassword:[{required:!0,trigger:"blur",message:d("pleaseConfirmPassword")},{validator:U,trigger:"blur"}],code:[{required:!0,trigger:"change",message:d("pleaseEnterVerificationCode")}]},$=i(""),m=i(!1),f=i(!0),P=i(),E=()=>{var a;(a=P.value)==null||a.validate(async e=>{if(e){m.value=!0;const[r]=await ie(ue(o.value));r?(m.value=!1,f.value&&V(),pe.error(d("registrationFailed"))):h.value=!0}})},S=()=>{h.value=!1,C.push({path:"/login",query:{showEmail:"true"}})},V=async()=>{const a=await ae(),{data:e}=a;f.value=e.captchaEnabled===void 0?!0:e.captchaEnabled,f.value&&($.value="data:image/gif;base64,"+e.img,o.value.uuid=e.uuid)},B=async()=>{const{data:a}=await te();if(I.value=a.tenantEnabled===void 0?!0:a.tenantEnabled,I.value){y.value=a.voList;const e=y.value.find(r=>r.tenantId==="000001");e&&(o.value.tenantId=e.tenantId)}},A=()=>{window.open("https://www.vpadmin.org","_blank")},D=()=>{C.push("/login")};return O(()=>{V(),B()}),(a,e)=>{const r=se,b=oe,K=re,p=me,g=le,v=ne,x=fe,z=ve;return u(),_("div",_e,[n("div",we,[e[5]||(e[5]=n("a",{href:"https://www.vpadmin.org",target:"_blank",class:"logo-link"},[n("img",{src:J,alt:"Vpadmin Logo",class:"logo"})],-1)),t(r,{link:"",type:"primary",onClick:A},{default:s(()=>[R(c(a.$t("guide")),1)]),_:1})]),n("div",he,[t(z,{class:"register-card"},{default:s(()=>[n("h2",ye,c(a.$t("createVpadminAccount")),1),t(x,{ref_key:"registerRef",ref:P,model:o.value,rules:M,class:"register-form"},{default:s(()=>[Q(t(p,{prop:"tenantId"},{default:s(()=>[t(K,{modelValue:o.value.tenantId,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.tenantId=l),filterable:"",placeholder:a.$t("selectOrEnterCompanyName"),style:{width:"100%"}},{default:s(()=>[(u(!0),_(Y,null,Z(y.value,l=>(u(),k(b,{key:l.tenantId,label:l.companyName,value:l.tenantId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},512),[[de,!1]]),t(p,{prop:"username"},{default:s(()=>[t(v,{modelValue:o.value.username,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.username=l),type:"text",placeholder:a.$t("email")},{prefix:s(()=>[t(g,null,{default:s(()=>[t(w(j))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),t(p,{id:"password-item",prop:"password"},{default:s(()=>[t(v,{modelValue:o.value.password,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.password=l),type:"password",placeholder:a.$t("password")},{prefix:s(()=>[t(g,null,{default:s(()=>[t(w(F))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),t(p,{prop:"confirmPassword"},{default:s(()=>[t(v,{modelValue:o.value.confirmPassword,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.confirmPassword=l),type:"password",placeholder:a.$t("confirmPassword"),onKeyup:L(E,["enter"])},{prefix:s(()=>[t(g,null,{default:s(()=>[t(w(F))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),f.value?(u(),k(p,{key:0,prop:"code",class:"verify-code-item"},{default:s(()=>[t(v,{modelValue:o.value.code,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.code=l),"auto-complete":"off",placeholder:a.$t("verificationCode"),onKeyup:L(E,["enter"])},{prefix:s(()=>[t(g,null,{default:s(()=>[t(w(W))]),_:1})]),_:1},8,["modelValue","placeholder"]),n("img",{src:$.value,class:"register-code-img",onClick:V},null,8,Ee)]),_:1})):N("",!0),t(p,null,{default:s(()=>[t(r,{loading:m.value,type:"primary",class:"register-button",onClick:X(E,["prevent"])},{default:s(()=>[m.value?(u(),_("span",be,c(a.$t("registering")),1)):(u(),_("span",Ve,c(a.$t("register")),1))]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),n("div",ke,[t(r,{class:"link-button",onClick:D},{default:s(()=>[R(c(a.$t("alreadyHaveAccount")),1)]),_:1})])]),_:1})]),n("div",Ce,[n("span",null,c(a.$t("copyright",{year:new Date().getFullYear()})),1)]),h.value?(u(),k(ge,{key:0,username:o.value.username,onCountdownFinished:S},null,8,["username"])):N("",!0)])}}}),Ue=ce(Ie,[["__scopeId","data-v-f8831ed4"]]);export{Ue as default};
