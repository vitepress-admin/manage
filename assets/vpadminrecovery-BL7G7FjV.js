import{d as x,h as z,r as t,b as H,o as f,c as L,m as c,G as O,p as e,q as a,y as g,t as p,A as E,e as C,Y as Q,K as M,i as h,L as F,J as S,u as W,M as X,x as ee,T as ae,U as oe,Z as le,E as N,$ as re,a0 as se,_ as te}from"./index-BAuvOH7U.js";/* empty css                */import{E as de,a as ne}from"./el-form-item-CrUaNreY.js";import{E as ie}from"./index-BoDGaK97.js";import"./_baseClone-ClgyB-Pi.js";import"./_initCloneObject-B1WjiVDp.js";const ue={class:"recovery-container"},ce={class:"top-bar"},me={class:"recovery"},pe={class:"title"},fe=["src"],ve={class:"text-center"},we={class:"el-recovery-footer"},ye=x({__name:"vpadminrecovery",setup(_e){const{t:r}=z(),$=W(),v=t(1),d=t(!1),b=t(!0),k=t(""),n=t({email:"",code:"",uuid:""}),w=t({emailCode:""}),m=t({newPassword:"",confirmNewPassword:""}),T={email:[{required:!0,trigger:"blur",message:r("pleaseEnterEmail")},{type:"email",message:r("invalidEmailFormat"),trigger:"blur"}],code:[{required:!0,trigger:"change",message:r("pleaseEnterVerificationCode")}]},D={emailCode:[{required:!0,trigger:"blur",message:r("pleaseEnterEmailCode")}]},G={newPassword:[{required:!0,trigger:"blur",message:r("pleaseEnterNewPassword")},{min:6,message:r("passwordLengthRequirement"),trigger:"blur"}],confirmNewPassword:[{required:!0,trigger:"blur",message:r("pleaseConfirmNewPassword")},{validator:(l,o,s)=>{o!==m.value.newPassword?s(new Error(r("passwordsDoNotMatch"))):s()},trigger:"blur"}]},I=t(),q=t(),U=t(),P="436efb388d684aadab73ef3cbba8f287",V=t("000001"),B=async()=>{const l=await X(),{data:o}=l;b.value=o.captchaEnabled===void 0?!0:o.captchaEnabled,b.value&&(k.value="data:image/gif;base64,"+o.img,n.value.uuid=o.uuid)},Y=()=>{var l;(l=I.value)==null||l.validate(async o=>{if(o){d.value=!0;try{await le({...n.value,clientId:P,tenantId:V.value}),N.success(r("recoveryEmailSent")),v.value=2}catch{}finally{d.value=!1}}})},A=()=>{var l;(l=q.value)==null||l.validate(async o=>{if(o){d.value=!0;try{await re({email:n.value.email,code:w.value.emailCode,clientId:P,tenantId:V.value}),N.success(r("emailCodeVerified")),v.value=3}catch{}finally{d.value=!1}}})},J=()=>{var l;(l=U.value)==null||l.validate(async o=>{if(o){d.value=!0;try{await se({email:n.value.email,code:w.value.emailCode,newPassword:m.value.newPassword,clientId:P,tenantId:V.value}),N.success(r("passwordResetSuccess")),$.push("/login")}catch{}finally{d.value=!1}}})},K=()=>{window.open("https://www.vpadmin.org","_blank")},Z=()=>{$.push("/login")};return H(()=>{B()}),(l,o)=>{const s=ee,y=ae,_=oe,u=de,R=ne,j=ie;return f(),L("div",ue,[c("div",ce,[o[5]||(o[5]=c("a",{href:"https://www.vpadmin.org",target:"_blank",class:"logo-link"},[c("img",{src:O,alt:"Vpadmin Logo",class:"logo"})],-1)),e(s,{link:"",type:"primary",onClick:K},{default:a(()=>[g(p(l.$t("guide")),1)]),_:1})]),c("div",me,[e(j,{class:"recovery-card"},{default:a(()=>[c("h2",pe,p(l.$t("passwordRecovery")),1),v.value===1?(f(),E(R,{key:0,ref_key:"recoveryFormRef",ref:I,model:n.value,rules:T,class:"recovery-form"},{default:a(()=>[e(u,{prop:"email"},{default:a(()=>[e(_,{modelValue:n.value.email,"onUpdate:modelValue":o[0]||(o[0]=i=>n.value.email=i),type:"email",placeholder:l.$t("email")},{prefix:a(()=>[e(y,null,{default:a(()=>[e(C(Q))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),b.value?(f(),E(u,{key:0,prop:"code",class:"verify-code-item"},{default:a(()=>[e(_,{modelValue:n.value.code,"onUpdate:modelValue":o[1]||(o[1]=i=>n.value.code=i),"auto-complete":"off",placeholder:l.$t("verificationCode")},{prefix:a(()=>[e(y,null,{default:a(()=>[e(C(M))]),_:1})]),_:1},8,["modelValue","placeholder"]),k.value?(f(),L("img",{key:0,src:k.value,class:"recovery-code-img",onClick:B},null,8,fe)):h("",!0)]),_:1})):h("",!0),e(u,null,{default:a(()=>[e(s,{loading:d.value,type:"primary",class:"recovery-button",onClick:F(Y,["prevent"])},{default:a(()=>[g(p(l.$t("sendEmailCode")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])):h("",!0),v.value===2?(f(),E(R,{key:1,ref_key:"emailCodeFormRef",ref:q,model:w.value,rules:D,class:"recovery-form"},{default:a(()=>[e(u,{prop:"emailCode"},{default:a(()=>[e(_,{modelValue:w.value.emailCode,"onUpdate:modelValue":o[2]||(o[2]=i=>w.value.emailCode=i),placeholder:l.$t("emailCode")},{prefix:a(()=>[e(y,null,{default:a(()=>[e(C(M))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(u,null,{default:a(()=>[e(s,{loading:d.value,type:"primary",class:"recovery-button",onClick:F(A,["prevent"])},{default:a(()=>[g(p(l.$t("verifyCode")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])):h("",!0),v.value===3?(f(),E(R,{key:2,ref_key:"newPasswordFormRef",ref:U,model:m.value,rules:G,class:"recovery-form"},{default:a(()=>[e(u,{prop:"newPassword"},{default:a(()=>[e(_,{modelValue:m.value.newPassword,"onUpdate:modelValue":o[3]||(o[3]=i=>m.value.newPassword=i),type:"password",placeholder:l.$t("newPassword")},{prefix:a(()=>[e(y,null,{default:a(()=>[e(C(S))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(u,{prop:"confirmNewPassword"},{default:a(()=>[e(_,{modelValue:m.value.confirmNewPassword,"onUpdate:modelValue":o[4]||(o[4]=i=>m.value.confirmNewPassword=i),type:"password",placeholder:l.$t("confirmNewPassword")},{prefix:a(()=>[e(y,null,{default:a(()=>[e(C(S))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),e(u,null,{default:a(()=>[e(s,{loading:d.value,type:"primary",class:"recovery-button",onClick:F(J,["prevent"])},{default:a(()=>[g(p(l.$t("resetPassword")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])):h("",!0),c("div",ve,[e(s,{class:"link-button",onClick:Z},{default:a(()=>[g(" ← "+p(l.$t("backToLogin")),1)]),_:1})])]),_:1})]),c("div",we,[c("span",null,p(l.$t("copyright",{year:new Date().getFullYear()})),1)])])}}}),Pe=te(ye,[["__scopeId","data-v-d8a9f6ac"]]);export{Pe as default};
