import{d as g,h as _,r,k as u,b as f,as as w,o as h,c as I,m as s,t as o,_ as S}from"./index-BoZ_NHcV.js";const M={class:"registration-success-overlay"},b={class:"registration-success-modal"},k={class:"message"},y={class:"congrats"},B=g({__name:"RegistrationSuccess",props:{username:{}},emits:["countdown-finished"],setup(c,{emit:l}){const i=c,d=l,{t:a}=_(),t=r(6),e=r(null),m=u(()=>a("registrationSuccessCongrats",{username:i.username})),v=u(()=>a("registrationSuccessCountdown",{countdown:t.value}));return f(()=>{e.value=setInterval(()=>{t.value--,t.value<=0&&(e.value&&clearInterval(e.value),d("countdown-finished"))},1e3)}),w(()=>{e.value&&clearInterval(e.value)}),(p,n)=>(h(),I("div",M,[s("div",b,[s("h3",null,o(p.$t("systemMessage")),1),s("div",k,[s("span",y,o(m.value),1),n[0]||(n[0]=s("br",null,null,-1)),n[1]||(n[1]=s("br",null,null,-1)),s("span",null,o(v.value),1)])])]))}}),x=S(B,[["__scopeId","data-v-207d69e9"]]);export{x as default};
