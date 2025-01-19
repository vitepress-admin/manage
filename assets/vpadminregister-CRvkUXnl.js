import{d as J,h as Q,r as d,b as W,o as u,c as w,m as n,G as X,p as a,q as s,y as R,t as p,w as Y,F as Z,z as j,A as k,e as h,H as x,J as F,I as T,K as ee,i as L,L as te,u as ae,M as se,N as oe,x as le,P as re,Q as ne,R as ie,S as de,T as ue,U as ce,W as pe,V as me,X as fe,E as ge,_ as _e}from"./index-Dz1U06Ul.js";/* empty css                */import{E as ve,a as we}from"./el-form-item-BRz6LH5v.js";import he from"./RegistrationSuccess-URNOco5S.js";import{E as ye}from"./index-z7a3Kden.js";import"./_baseClone-CTTMyzww.js";import"./_initCloneObject-bMWQ6BhU.js";const Ee={class:"register-container"},be={class:"top-bar"},Ve={class:"right-buttons"},ke={class:"hover-effect"},Ce={class:"register"},Ie={class:"title"},$e=["src"],Pe={key:0},Re={key:1},Fe={class:"text-center"},Te={class:"el-register-footer"},Le=J({__name:"vpadminregister",setup(Ne){const{t:i}=Q(),C=ae(),y=d(!1),o=d({tenantId:"000001",username:"",password:"",confirmPassword:"",code:"",uuid:"",userType:"vpadmin_user"}),I=d(!1),E=d([]),N=(t,e,l)=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?l():l(new Error(i("invalidEmailFormat")))},q=(t,e,l)=>{/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(e)?l():l(new Error(i("passwordRequirements")))},U=(t,e,l)=>{e!==o.value.password?l(new Error(i("passwordsDoNotMatch"))):l()},M={username:[{required:!0,trigger:"blur",message:i("pleaseEnterEmail")},{validator:N,trigger:"blur"}],password:[{required:!0,trigger:"blur",message:i("pleaseEnterPassword")},{validator:q,trigger:"blur"}],confirmPassword:[{required:!0,trigger:"blur",message:i("pleaseConfirmPassword")},{validator:U,trigger:"blur"}],code:[{required:!0,trigger:"change",message:i("pleaseEnterVerificationCode")}]},$=d(""),m=d(!1),f=d(!0),P=d(),b=()=>{var t;(t=P.value)==null||t.validate(async e=>{if(e){m.value=!0;const[l]=await me(fe(o.value));l?(m.value=!1,f.value&&V(),ge.error(i("registrationFailed"))):y.value=!0}})},S=()=>{y.value=!1,C.push({path:"/login",query:{showEmail:"true"}})},V=async()=>{const t=await se(),{data:e}=t;f.value=e.captchaEnabled===void 0?!0:e.captchaEnabled,f.value&&($.value="data:image/gif;base64,"+e.img,o.value.uuid=e.uuid)},B=async()=>{const{data:t}=await oe();if(I.value=t.tenantEnabled===void 0?!0:t.tenantEnabled,I.value){E.value=t.voList;const e=E.value.find(l=>l.tenantId==="000001");e&&(o.value.tenantId=e.tenantId)}},A=()=>{window.open("https://www.vpadmin.org","_blank")},D=()=>{C.push("/login")};return W(()=>{V(),B()}),(t,e)=>{const l=le,g=re,K=ne,z=ie,G=de,c=ve,_=ue,v=ce,H=we,O=ye;return u(),w("div",Ee,[n("div",be,[e[5]||(e[5]=n("a",{href:"https://www.vpadmin.org",target:"_blank",class:"logo-link"},[n("img",{src:X,alt:"Vpadmin Logo",class:"logo"})],-1)),n("div",Ve,[a(g,{content:t.$t("navbar.themes"),effect:"light",placement:"bottom"},{default:s(()=>[a(l,{link:"",type:"primary",onClick:A},{default:s(()=>[R(p(t.$t("guide")),1)]),_:1})]),_:1},8,["content"]),a(g,{content:t.$t("navbar.themes"),effect:"light",placement:"bottom"},{default:s(()=>[n("div",ke,[a(K,{"icon-class":"theme",onClick:t.freeThemes},null,8,["onClick"])])]),_:1},8,["content"])])]),n("div",Ce,[a(O,{class:"register-card"},{default:s(()=>[n("h2",Ie,p(t.$t("createVpadminAccount")),1),a(H,{ref_key:"registerRef",ref:P,model:o.value,rules:M,class:"register-form"},{default:s(()=>[Y(a(c,{prop:"tenantId"},{default:s(()=>[a(G,{modelValue:o.value.tenantId,"onUpdate:modelValue":e[0]||(e[0]=r=>o.value.tenantId=r),filterable:"",placeholder:t.$t("selectOrEnterCompanyName"),style:{width:"100%"}},{default:s(()=>[(u(!0),w(Z,null,j(E.value,r=>(u(),k(z,{key:r.tenantId,label:r.companyName,value:r.tenantId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},512),[[pe,!1]]),a(c,{prop:"username"},{default:s(()=>[a(v,{modelValue:o.value.username,"onUpdate:modelValue":e[1]||(e[1]=r=>o.value.username=r),type:"text",placeholder:t.$t("email")},{prefix:s(()=>[a(_,null,{default:s(()=>[a(h(x))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),a(c,{id:"password-item",prop:"password"},{default:s(()=>[a(v,{modelValue:o.value.password,"onUpdate:modelValue":e[2]||(e[2]=r=>o.value.password=r),type:"password",placeholder:t.$t("password")},{prefix:s(()=>[a(_,null,{default:s(()=>[a(h(F))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),a(c,{prop:"confirmPassword"},{default:s(()=>[a(v,{modelValue:o.value.confirmPassword,"onUpdate:modelValue":e[3]||(e[3]=r=>o.value.confirmPassword=r),type:"password",placeholder:t.$t("confirmPassword"),onKeyup:T(b,["enter"])},{prefix:s(()=>[a(_,null,{default:s(()=>[a(h(F))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),f.value?(u(),k(c,{key:0,prop:"code",class:"verify-code-item"},{default:s(()=>[a(v,{modelValue:o.value.code,"onUpdate:modelValue":e[4]||(e[4]=r=>o.value.code=r),"auto-complete":"off",placeholder:t.$t("verificationCode"),onKeyup:T(b,["enter"])},{prefix:s(()=>[a(_,null,{default:s(()=>[a(h(ee))]),_:1})]),_:1},8,["modelValue","placeholder"]),n("img",{src:$.value,class:"register-code-img",onClick:V},null,8,$e)]),_:1})):L("",!0),a(c,null,{default:s(()=>[a(l,{loading:m.value,type:"primary",class:"register-button",onClick:te(b,["prevent"])},{default:s(()=>[m.value?(u(),w("span",Re,p(t.$t("registering")),1)):(u(),w("span",Pe,p(t.$t("register")),1))]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),n("div",Fe,[a(l,{class:"link-button",onClick:D},{default:s(()=>[R(p(t.$t("alreadyHaveAccount")),1)]),_:1})])]),_:1})]),n("div",Te,[n("span",null,p(t.$t("copyright",{year:new Date().getFullYear()})),1)]),y.value?(u(),k(he,{key:0,username:o.value.username,onCountdownFinished:S},null,8,["username"])):L("",!0)])}}}),Ke=_e(Le,[["__scopeId","data-v-30ec4943"]]);export{Ke as default};
