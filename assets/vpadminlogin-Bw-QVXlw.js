import{d as Y,h as j,C as X,r as c,D as Z,b as x,o as u,c as m,m as s,G as ee,p as o,q as a,y as d,t as r,F as V,A as L,z as te,i as F,e as M,H as oe,I as q,J as ae,K as le,L as ne,u as se,a as re,M as ie,N as ue,O as de,E as ce,x as me,P as pe,Q as ge,R as fe,S as ve,T as be,_ as _e}from"./index-m2T4SZVn.js";/* empty css                */import{E as we,a as ke}from"./el-form-item-DLokr9el.js";import{E as ye}from"./el-checkbox-Di_0n5g6.js";import{a as he}from"./auth-B1MY9eD9.js";import{E as Ee}from"./index-BO4v6Fvb.js";import"./_baseClone-K_h7d9tC.js";import"./_initCloneObject-Dp4qRBHy.js";const Ie={class:"login-container"},Ce={class:"top-bar"},$e={class:"login"},Se={class:"title"},Ve={class:"social-buttons"},Le={class:"divider"},Fe={class:"text-center"},Me=["src"],Ue={key:0},Te={key:1},qe={class:"text-center-forgot-password"},Re={class:"text-center"},Ne={class:"el-login-footer"},Be=Y({__name:"vpadminlogin",setup(Ge){const{t:f}=j(),R=X(),v=se(),N=re(),l=c({tenantId:"000001",username:"",password:"",rememberMe:!1,code:"",uuid:"",clientId:"436efb388d684aadab73ef3cbba8f287",grantType:"vpadminPassword",redirect:window.location.href}),B={username:[{required:!0,trigger:"blur",message:f("pleaseEnterEmail")}],password:[{required:!0,trigger:"blur",message:f("pleaseEnterPassword")}],code:[{required:!0,trigger:"change",message:f("pleaseEnterVerificationCode")}]},G=!1,b=c(""),_=c(!1),w=c(!0),U=c(),y=c(!1),P=c(G),g=c([]),h=c("/");Z(()=>v.currentRoute.value,t=>{h.value=t.query&&t.query.redirect?decodeURIComponent(t.query.redirect):h.value||"/"},{immediate:!0});const W=()=>{window.open("https://www.vpadmin.org","_blank")},H=()=>{v.push("/recovery")},E=()=>{var t;(t=U.value)==null||t.validate(async e=>{if(e){_.value=!0,l.value.rememberMe?(localStorage.setItem("username",String(l.value.username)),localStorage.setItem("password",String(l.value.password)),localStorage.setItem("rememberMe",String(l.value.rememberMe))):(localStorage.removeItem("username"),localStorage.removeItem("password"),localStorage.removeItem("rememberMe"));const[i]=await be(R.login(l.value));if(i)w.value&&await I();else{const C=h.value||"/";await v.push(C)}_.value=!1}})},T=async()=>{y.value=!0,await I()},K=()=>{y.value=!1,b.value=""},I=async()=>{const t=await ie(),{data:e}=t;w.value=e.captchaEnabled===void 0?!0:e.captchaEnabled,w.value&&(b.value="data:image/gif;base64,"+e.img,l.value.uuid=e.uuid)},O=async()=>{const{data:t}=await ue();if(t.tenantEnabled&&(g.value=t.voList,g.value&&g.value.length>0)){const e=g.value.find(i=>i.tenantId==="000001");e&&(l.value.tenantId=e.tenantId)}},k=t=>{he(t,l.value.tenantId||"000001").then(e=>{e.code===de.SUCCESS?window.location.href=e.data:ce.error(f("loginFailed",{message:e.msg}))})},D=()=>{v.push("/register")};return x(()=>{N.query.showEmail==="true"&&T(),O()}),(t,e)=>{const i=me,C=pe,A=ge,p=we,$=fe,S=ve,z=ye,J=ke,Q=Ee;return u(),m("div",Ie,[s("div",Ce,[e[9]||(e[9]=s("a",{href:"https://www.vpadmin.org",target:"_blank",class:"logo-link"},[s("img",{src:ee,alt:"Vpadmin Logo",class:"logo"})],-1)),o(i,{link:"",type:"primary",onClick:W},{default:a(()=>[d(r(t.$t("guide")),1)]),_:1})]),s("div",$e,[o(Q,{class:"login-card"},{default:a(()=>[s("h2",Se,r(t.$t("loginToVpadmin")),1),y.value?(u(),m(V,{key:1},[o(J,{ref_key:"loginFormRef",ref:U,model:l.value,rules:B,class:"login-form"},{default:a(()=>[P.value?(u(),L(p,{key:0,prop:"tenantId"},{default:a(()=>[o(A,{modelValue:l.value.tenantId,"onUpdate:modelValue":e[4]||(e[4]=n=>l.value.tenantId=n),filterable:"",placeholder:t.$t("selectOrEnterCompanyName"),style:{width:"100%"}},{default:a(()=>[(u(!0),m(V,null,te(g.value,n=>(u(),L(C,{key:n.tenantId,label:n.companyName,value:n.tenantId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1})):F("",!0),o(p,{prop:"username"},{default:a(()=>[o(S,{modelValue:l.value.username,"onUpdate:modelValue":e[5]||(e[5]=n=>l.value.username=n),type:"text",placeholder:t.$t("email")},{prefix:a(()=>[o($,null,{default:a(()=>[o(M(oe))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),o(p,{prop:"password"},{default:a(()=>[o(S,{modelValue:l.value.password,"onUpdate:modelValue":e[6]||(e[6]=n=>l.value.password=n),type:"password",placeholder:t.$t("password"),onKeyup:q(E,["enter"])},{prefix:a(()=>[o($,null,{default:a(()=>[o(M(ae))]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),w.value?(u(),L(p,{key:1,prop:"code",class:"verify-code-item"},{default:a(()=>[o(S,{modelValue:l.value.code,"onUpdate:modelValue":e[7]||(e[7]=n=>l.value.code=n),"auto-complete":"off",placeholder:t.$t("verificationCode"),onKeyup:q(E,["enter"])},{prefix:a(()=>[o($,null,{default:a(()=>[o(M(le))]),_:1})]),_:1},8,["modelValue","placeholder"]),b.value?(u(),m("img",{key:0,src:b.value,class:"login-code-img",onClick:I},null,8,Me)):F("",!0)]),_:1})):F("",!0),o(p,null,{default:a(()=>[o(z,{modelValue:l.value.rememberMe,"onUpdate:modelValue":e[8]||(e[8]=n=>l.value.rememberMe=n)},{default:a(()=>[d(r(t.$t("rememberMe")),1)]),_:1},8,["modelValue"])]),_:1}),o(p,null,{default:a(()=>[o(i,{type:"primary",loading:_.value,class:"login-button",onClick:ne(E,["prevent"])},{default:a(()=>[_.value?(u(),m("span",Te,r(t.$t("loggingIn")),1)):(u(),m("span",Ue,r(t.$t("login")),1))]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"]),s("div",qe,[o(i,{class:"link-button",onClick:K},{default:a(()=>[d(" ← "+r(t.$t("otherLoginOptions")),1)]),_:1}),o(i,{class:"link-button forgot-password",onClick:H},{default:a(()=>[d(r(t.$t("forgotPassword")),1)]),_:1})])],64)):(u(),m(V,{key:0},[s("div",Ve,[o(i,{class:"social-button github",onClick:e[0]||(e[0]=n=>k("github"))},{default:a(()=>[e[10]||(e[10]=s("i",{class:"fab fa-github"},null,-1)),d(" "+r(t.$t("continueWithGitHub")),1)]),_:1}),o(i,{class:"social-button gitlab",onClick:e[1]||(e[1]=n=>k("gitlab"))},{default:a(()=>[e[11]||(e[11]=s("i",{class:"fab fa-gitlab"},null,-1)),d(" "+r(t.$t("continueWithGitLab")),1)]),_:1}),o(i,{class:"social-button google",onClick:e[2]||(e[2]=n=>k("google"))},{default:a(()=>[e[12]||(e[12]=s("i",{class:"fab fa-google"},null,-1)),d(" "+r(t.$t("continueWithGoogle")),1)]),_:1}),o(i,{class:"social-button facebook",onClick:e[3]||(e[3]=n=>k("facebook"))},{default:a(()=>[e[13]||(e[13]=s("i",{class:"fab fa-facebook-f"},null,-1)),d(" "+r(t.$t("continueWithFacebook")),1)]),_:1})]),s("div",Le,[s("span",null,r(t.$t("or")),1)]),s("div",Fe,[o(i,{class:"link-button email-button",onClick:T},{default:a(()=>[d(r(t.$t("continueWithEmail"))+" → ",1)]),_:1})])],64)),s("div",Re,[o(i,{class:"link-button signup-button",onClick:D},{default:a(()=>[d(r(t.$t("noAccountSignUp")),1)]),_:1})])]),_:1})]),s("div",Ne,[s("span",null,r(t.$t("copyright",{year:new Date().getFullYear()})),1)])])}}}),Je=_e(Be,[["__scopeId","data-v-30e540c4"]]);export{Je as default};
