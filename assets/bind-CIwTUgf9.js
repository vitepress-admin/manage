import{d as C,h as k,r as u,b as I,n as R,w as S,o as w,c as p,t as T,i as x,a as F,g as j,v as q,j as B,_ as E}from"./index-CugbkTRb.js";const L={class:"social-callback"},M={key:0},D=C({__name:"bind",setup(J){const{t:a}=k(),i=F(),c=u(!0),n=u(""),g=i.query.code,r=i.query.state,f=i.query.source,t=JSON.parse(atob(r)),_=t.tenantId?t.tenantId:"000001",l=t.domain,b=t.isFullControl,m=t.projectId,y=async e=>{if(e.code!==200)throw new Error(e.msg);const o=e.data;n.value=a("bindingSuccessClosing"),window.opener&&!window.opener.closed&&window.opener.postMessage({type:"bindingResult",data:o},"*"),setTimeout(()=>{window.close()},2e3)},d=e=>{n.value=a("errorClosing",{error:e.message}),window.opener&&!window.opener.closed&&window.opener.postMessage({type:"bindingResult",data:null},"*"),setTimeout(()=>{window.close()},2e3)},h=async e=>{try{const o=await B(e);await y(o)}catch(o){d(o)}finally{c.value=!1}},v=async()=>{let e=window.location.origin;if(l!==e){let s=new URL(window.location.href);s.host=l,window.location.href=s.toString();return}const o={socialCode:g,socialState:r,tenantId:_,source:f,clientId:"436efb388d684aadab73ef3cbba8f287",grantType:"socialPortal",redirect:window.location.href,isFullControl:b,projectId:m};j()?await h(o):d({message:a("pleaseLoginFirst")})};return I(()=>{R(()=>{v()})}),(e,o)=>{const s=q;return S((w(),p("div",L,[n.value?(w(),p("p",M,T(n.value),1)):x("",!0)])),[[s,c.value]])}}}),V=E(D,[["__scopeId","data-v-803710e3"]]);export{V as default};
