import{d as S,h as U,r as m,D as P,o as r,A as D,q as l,m as o,p as n,y as f,t as a,E as Y,x as A,B as F,_ as L,aa as Z,k as G,b as x,c as _,i as N,w as ee,F as E,z as ae,e as te,a1 as oe,S as le,v as se}from"./index-W4JQoyRu.js";/* empty css                  *//* empty css                          *//* empty css               *//* empty css               *//* empty css                */import{E as ne,a as ie}from"./el-checkbox-DUug-yfp.js";import{_ as de}from"./index-BqDVXIhu.js";import{l as ce}from"./index-Cb9LB9XU.js";import{E as re}from"./index-CNaJdHAJ.js";import{E as ue}from"./index-DEX55MHv.js";import{E as me}from"./index-bYLJxVRV.js";const pe={class:"dialog-footer"},fe=S({__name:"PaymentConfirmDialog",props:{visible:{type:Boolean},userEmail:{},paymentName:{}},emits:["update:visible","confirm","cancel"],setup(w,{emit:B}){const{t:y}=U(),b=w,p=B,g=m(""),i=m(b.visible),h=()=>{p("confirm",g.value),i.value=!1},k=()=>{p("cancel"),i.value=!1},v=t=>{Y.warning(y("pleaseSelectPaymentStatus"))};return P(()=>b.visible,t=>{i.value=t}),P(i,t=>{p("update:visible",t)}),(t,u)=>{const c=A,C=F;return r(),D(C,{modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=$=>i.value=$),title:t.$t("confirmation"),width:"30%","before-close":v,class:"payment-confirm-dialog","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,"append-to-body":""},{footer:l(()=>[o("div",pe,[n(c,{type:"primary",class:"confirm-button",onClick:h},{default:l(()=>[f(a(t.$t("paymentSuccessful")),1)]),_:1}),n(c,{class:"cancel-button",onClick:k},{default:l(()=>[f(a(t.$t("paymentNotCompleted")),1)]),_:1})])]),default:l(()=>[o("p",null,a(t.$t("confirmPaymentStatus")),1)]),_:1},8,["modelValue","title"])}}}),Oe=L(fe,[["__scopeId","data-v-f2af86c3"]]),ve={key:0,class:"no-cards"},_e={class:"cards-container"},ye={class:"card-content"},ge={class:"card-info"},he={class:"card-header"},be={class:"card-name"},ke={class:"card-denomination"},Ce={class:"card-validity"},$e={class:"remark-section"},Ve={class:"total-section"},we={class:"total-amount"},Be={class:"amount"},Ee={class:"dialog-footer"},Pe={class:"confirm-content"},De={key:0},Ie={class:"dialog-footer"},Ge=S({__name:"PaymentByGiftcard",props:{visible:{type:Boolean},showBackButton:{type:Boolean}},emits:["update:visible","back","confirm"],setup(w,{emit:B}){U();const{proxy:y}=oe(),{vpa_giftcard_status:b}=Z(y==null?void 0:y.useDict("vpa_giftcard_status")),p=w,g=B,i=G({get:()=>p.visible,set:e=>g("update:visible",e)}),h=m(!1),k=m(!1),v=m([]),t=m([]),u=m(!1),c=m(""),C=G(()=>v.value.filter(e=>t.value.includes(e.cardId)).reduce((e,d)=>e+d.denomination,0)),$=async()=>{h.value=!0;try{const e=await ce();v.value=e.data}catch(e){console.error("Failed to load gift cards:",e)}finally{h.value=!1}},R=e=>{t.value=e},M=()=>{g("back"),i.value=!1},T=()=>{i.value=!1},j=()=>{t.value.length>0&&(u.value=!0)},q=()=>{const e=t.value.join(",");k.value=!0,g("confirm",e,c.value)};return P(()=>p.visible,e=>{e?($(),t.value=[],c.value=""):(u.value=!1,i.value=!1)}),x(()=>{p.visible&&$()}),(e,d)=>{const z=de,O=ne,H=re,J=ue,K=me,Q=ie,W=le,V=A,I=F,X=se;return r(),_(E,null,[n(I,{modelValue:i.value,"onUpdate:modelValue":d[2]||(d[2]=s=>i.value=s),title:e.$t("payByGiftcard"),width:"800px",class:"giftcard-payment-dialog","before-close":T,"append-to-body":""},{footer:l(()=>[o("div",Ee,[e.showBackButton?(r(),D(V,{key:0,onClick:M},{default:l(()=>[f(a(e.$t("backToOriginalPayment")),1)]),_:1})):N("",!0),n(V,{type:"primary",disabled:t.value.length===0,onClick:j},{default:l(()=>[f(a(e.$t("confirmPayment")),1)]),_:1},8,["disabled"])])]),default:l(()=>[ee((r(),_("div",null,[v.value.length===0?(r(),_("div",ve,a(e.$t("noAvailableGiftcards")),1)):(r(),_(E,{key:1},[o("div",_e,[n(Q,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=s=>t.value=s),onChange:R},{default:l(()=>[n(K,{gutter:16},{default:l(()=>[(r(!0),_(E,null,ae(v.value,s=>(r(),D(J,{key:s.cardId,span:12},{default:l(()=>[n(H,{class:"gift-card"},{default:l(()=>[o("div",ye,[n(O,{value:s.cardId,class:"card-checkbox",disabled:s.status!=="0"},{default:l(()=>[o("div",ge,[o("div",he,[o("span",be,a(s.cardName),1),n(z,{options:te(b),value:s.status},null,8,["options","value"])]),o("div",ke,a(e.$t("denomination"))+": $"+a(s.denomination),1),o("div",Ce,a(e.$t("validDays"))+": "+a(s.validDays)+" "+a(e.$t("days")),1)])]),_:2},1032,["value","disabled"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),o("div",$e,[n(W,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=s=>c.value=s),type:"textarea",rows:2,placeholder:e.$t("optionalRemark"),maxlength:"200","show-word-limit":""},null,8,["modelValue","placeholder"])]),o("div",Ve,[o("div",we,[f(a(e.$t("selectedAmount"))+": ",1),o("span",Be,"$"+a(C.value),1)])])],64))])),[[X,h.value]])]),_:1},8,["modelValue","title"]),n(I,{modelValue:u.value,"onUpdate:modelValue":d[4]||(d[4]=s=>u.value=s),title:e.$t("confirmPayment"),width:"30%","append-to-body":""},{footer:l(()=>[o("div",Ie,[n(V,{onClick:d[3]||(d[3]=s=>u.value=!1)},{default:l(()=>[f(a(e.$t("cancel")),1)]),_:1}),n(V,{loading:k.value,type:"primary",onClick:q},{default:l(()=>[f(a(e.$t("confirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[o("div",Pe,[o("p",null,a(e.$t("confirmUseGiftcards")),1),o("p",null,a(e.$t("selectedCards"))+": "+a(t.value.length),1),o("p",null,a(e.$t("totalAmount"))+": $"+a(C.value),1),c.value?(r(),_("p",De,a(e.$t("remark"))+": "+a(c.value),1)):N("",!0)])]),_:1},8,["modelValue","title"])],64)}}}),He=L(Ge,[["__scopeId","data-v-e818538e"]]);export{Oe as P,He as a};
