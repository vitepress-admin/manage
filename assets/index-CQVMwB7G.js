import{a4 as N,d as A,h as R,C as te,r as g,k as le,D as oe,b as M,at as ne,o as d,c as D,p as t,q as l,A as k,ak as j,m as u,t as h,e as T,dz as se,y as $,dA as ie,dB as re,i as I,w as z,E as c,x as q,P as O,T as me,B as de,v as ce,_ as pe,aq as ue}from"./index-Dz1U06Ul.js";import{E as fe,a as ye}from"./el-form-item-BRz6LH5v.js";/* empty css                  */import{a as x}from"./index-CaaBa0x8.js";import{P as ve,a as ge}from"./PaymentByGiftcard-Kg-XZ-0M.js";import"./_baseClone-CTTMyzww.js";import"./_initCloneObject-bMWQ6BhU.js";/* empty css                          *//* empty css               *//* empty css               *//* empty css                */import"./el-checkbox-BP8O_R-g.js";import"./index-BpJW1tsl.js";import"./index-DumkRSul.js";import"./index-z7a3Kden.js";import"./index-B8hIDeR1.js";import"./index-D4RdGC6H.js";const he=()=>N({url:"/vpadmin/globalSettings",method:"get"}),_e=C=>N({url:"/vpadmin/globalSettings",method:"post",data:C}),be=C=>N({url:"/vpadmin/globalSettings",method:"put",data:C}),Ce={class:"pro-text-small"},ke={class:"pro-text"},we={id:"user-guide",class:"user-guide"},Se={class:"user-guide-email"},Ee=["element-loading-text"],Te=["src"],Pe=["element-loading-text"],Ie=A({__name:"ThemeOrderDialog",props:{paymentPlatform:{},paymentType:{},iframeUrl:{},paymentName:{},projectId:{},size:{default:"default"},text:{default:"Support Me"},planExpired:{type:Boolean,default:!0}},emits:["payment-success","payment-cancelled"],setup(C,{emit:f}){const{t:o}=R(),w="436efb388d684aadab73ef3cbba8f287",y=te(),e=C,S=f,r=g(!1),n=g(!1),i=g(!0),V=g(null),E=g(e.iframeUrl),v=g(!1),m=g(!1),_=le(()=>e.paymentType==="giftcard"),P=()=>{E.value=`${e.iframeUrl}${e.iframeUrl.includes("?")?"&":"?"}timestamp=${Date.now()}`,i.value=!0},B=()=>{_.value?m.value=!0:(r.value=!0,P())},H=()=>{_.value?m.value=!1:v.value=!0},J=a=>{const s={paymentType:e.paymentType,paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"1",paymentLink:e.iframeUrl,userEmail:a||y.email,projectId:e.projectId,clientId:w};x(s).then(()=>{c.success(o("paymentConfirmRecordAdded")),S("payment-success"),r.value=!1}).catch(p=>{console.error(o("addPaymentConfirmRecordFailed"),p),c.error(o("addPaymentConfirmRecordFailedTryAgain"))})},K=()=>{const a={paymentType:e.paymentType,paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"0",paymentLink:e.iframeUrl,userEmail:y.email,projectId:e.projectId,clientId:w};x(a).then(()=>{S("payment-cancelled")}).catch(s=>{}).finally(()=>{r.value=!1,v.value=!1})},Q=()=>{i.value=!1},W=()=>{i.value=!1,c.error(o("loadUpgradePageFailed"))},X=()=>{navigator.clipboard.writeText(y.email).then(()=>{c.success(o("emailCopiedToClipboard"))}).catch(()=>{c.error(o("copyFailedPleaseManualCopy"))})},Y=()=>{n.value=!0},Z=()=>{r.value=!1,m.value=!0},ee=()=>{_.value||(r.value=!0,P()),m.value=!1},ae=(a,s)=>{i.value=!0;const p={paymentType:"giftcard",paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"1",paymentLink:e.iframeUrl,userEmail:y.email,projectId:e.projectId,clientId:w,giftCardIds:a,remark:s};x(p).then(()=>{c.success(o("paymentGiftCardSuccess")),S("payment-success")}).catch(G=>{console.error(o("paymentGiftCardFailed"),G),c.error(o("paymentGiftCardFailed"))}).finally(()=>{i.value=!1,r.value=!1,m.value=!1,v.value=!1})};return oe(()=>e.paymentType,a=>{a==="giftcard"&&(r.value=!1)}),M(()=>{}),ne(()=>{}),(a,s)=>{const p=q,G=O,U=me,F=de,L=ce;return d(),D("div",null,[t(G,{content:e.paymentName,placement:"top","show-after":300,effect:"light"},{default:l(()=>[a.size==="small"?(d(),k(p,{key:0,class:j(["pro-button-small",{"pro-button-active":!a.planExpired}]),onClick:B},{default:l(()=>[u("span",Ce,h(e.text),1)]),_:1},8,["class"])):(d(),k(p,{key:1,class:j(["pro-button",{"pro-button-active":!a.planExpired}]),onClick:B},{default:l(()=>[u("span",ke,h(e.text),1)]),_:1},8,["class"]))]),_:1},8,["content"]),_.value?I("",!0):(d(),k(F,{key:0,modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=b=>r.value=b),title:e.paymentName,width:"80%","before-close":H,"append-to-body":""},{default:l(()=>[u("div",we,[u("span",null,h(a.$t("enterEmailGuide")),1),u("span",Se,h(T(y).email),1),t(p,{size:"small",class:"copy-button",onClick:X},{default:l(()=>[t(U,null,{default:l(()=>[t(T(se))]),_:1}),$(" "+h(a.$t("copy")),1)]),_:1}),t(p,{size:"small",class:"help-button",onClick:Y},{default:l(()=>[t(U,null,{default:l(()=>[t(T(ie))]),_:1}),$(" "+h(a.$t("help")),1)]),_:1}),a.paymentType==="donation"?(d(),k(p,{key:0,size:"small",type:"success",class:"giftcard-button",onClick:Z},{default:l(()=>[t(U,null,{default:l(()=>[t(T(re))]),_:1}),$(" "+h(a.$t("payByGiftcard")),1)]),_:1})):I("",!0)]),z((d(),D("div",{class:"iframe-container","element-loading-text":a.$t("loading")},[u("iframe",{id:"kofiframe",ref_key:"iframeRef",ref:V,src:E.value,frameborder:"0",class:"pro-iframe",style:{border:"none",width:"100%",padding:"4px",background:"#f9f9f9"},onLoad:Q,onError:W},null,40,Te)],8,Ee)),[[L,i.value]])]),_:1},8,["modelValue","title"])),t(F,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=b=>n.value=b),title:a.$t("upgradeStepsDescription"),width:"70%",class:"help-dialog","append-to-body":""},{default:l(()=>[z((d(),D("div",{class:"iframe-container","element-loading-text":a.$t("loading")},s[4]||(s[4]=[u("iframe",{src:"https://www.vpadmin.org/prices/prices",frameborder:"0",style:{height:"100%"}},null,-1)]),8,Pe)),[[L,i.value]])]),_:1},8,["modelValue","title"]),_.value?I("",!0):(d(),k(ve,{key:1,visible:v.value,"onUpdate:visible":s[2]||(s[2]=b=>v.value=b),"user-email":T(y).email,"payment-name":e.paymentName,onConfirm:J,onCancel:K},null,8,["visible","user-email","payment-name"])),m.value?(d(),k(ge,{key:2,visible:m.value,"onUpdate:visible":s[3]||(s[3]=b=>m.value=b),"show-back-button":a.paymentType==="donation",onBack:ee,onConfirm:ae},null,8,["visible","show-back-button"])):I("",!0)])}}}),De=pe(Ie,[["__scopeId","data-v-9f1ce9a5"]]),Ve={class:"p-2"},Ge={style:{width:"300px"}},Qe=A({__name:"index",setup(C){const{t:f}=R(),o=g({autoSendEmail:"0"});M(async()=>{try{const n=await he();n.data&&(o.value=n.data)}catch(n){console.error(f("failedToFetchGlobalSettings"),n),c.error(f("failedToFetchGlobalSettings"))}});const w=n=>{console.log(f("autoSendEmailChangedTo",{value:n})),y()},y=async()=>{try{o.value.id?await be(o.value):await _e({...o.value}),c.success(f("settingsSavedSuccessfully"))}catch(n){console.error(f("failedToSaveSettings"),n),c.error(f("failedToSaveSettings"))}},e=()=>{},S=()=>{},r=()=>{window.open("http://www.vpadmin.org/prices/prices#purchasing-integrated-private-or-shared-themes","_blank")};return(n,i)=>{const V=ue,E=q,v=O,m=fe,_=ye;return d(),D("div",Ve,[t(_,{model:o.value,"label-width":"180px"},{default:l(()=>[t(m,{label:n.$t("autoSendEmail")},{default:l(()=>[t(V,{modelValue:o.value.autoSendEmail,"onUpdate:modelValue":i[0]||(i[0]=P=>o.value.autoSendEmail=P),"active-value":"1","inactive-value":"0",onChange:w},null,8,["modelValue"]),t(v,{effect:"light"},{content:l(()=>[u("div",Ge,h(n.$t("emailNotification")),1)]),default:l(()=>[t(E,{type:"info",link:"",icon:"InfoFilled",style:{"margin-left":"10px"}})]),_:1})]),_:1},8,["label"]),t(m,{label:n.$t("orderThemeIntegration")},{default:l(()=>[t(De,{"payment-platform":"ko-fi","payment-type":"donation","iframe-url":"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true","payment-name":"Order Theme Integration","project-id":"1",size:"default",text:"Theme","plan-expired":!0,style:{"margin-left":"5px"},onPaymentSuccess:e,onPaymentCancelled:S}),t(v,{effect:"light"},{content:l(()=>i[1]||(i[1]=[u("div",{style:{width:"300px"}},'Goto "Purchasing Integrated Private or Shared Themes" user guide.',-1)])),default:l(()=>[t(E,{type:"primary",link:"",icon:"link",style:{"margin-left":"10px"},onClick:r})]),_:1})]),_:1},8,["label"])]),_:1},8,["model"])])}}});export{Qe as default};
