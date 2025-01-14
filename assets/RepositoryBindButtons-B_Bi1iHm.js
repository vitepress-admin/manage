import{g as ie,_ as re}from"./DeployDetailDialog-CI0ANvoE.js";import{_ as H,k as P,o as r,c as _,m as o,aj as w,au as de,t as v,i as C,d as O,h as Z,r as h,D as x,b as Y,a4 as ce,p as u,q as m,at as ue,e as b,dF as K,w as q,y as L,F as pe,x as X,U as Q,ag as me,A as I,n as fe,ac as ee,C as ge,as as te,dz as ye,dA as ve,dB as he,E as $,R as be,B as we,v as _e,a1 as Be,O as Ce}from"./index-CZcYgHe2.js";/* empty css                  */import{a as A}from"./index-CMxk7DgX.js";import{P as $e,a as ke}from"./PaymentByGiftcard-DgYzZSvp.js";import{c as Te}from"./auth-CtuV8CxC.js";const De={class:"progress-container"},Ee={class:"progress-bar"},Pe={class:"percentage-text-indicator"},Ie={key:0},Ue={class:"percentage-status-indicator"},Se={key:0},Ve={key:1},Le={__name:"VpadminProgressBar",props:{value:{type:Number,required:!0,validator:a=>a>=0&&a<=100},status:{type:String,validator:a=>["success","exception",void 0,""].includes(a)}},setup(a){const U=a,d=P(()=>Math.round(U.value)),f=P(()=>U.status?"100%":`${d.value}%`);return(s,e)=>(r(),_("div",De,[o("div",Ee,[o("div",{class:w(["progress",{"progress-success":a.status==="success","progress-exception":a.status==="exception"}]),style:de({width:f.value})},[o("div",{class:w(["percentage-indicator",{"indicator-success":a.status==="success","indicator-exception":a.status==="exception"}])},[o("div",{class:w({ripple:!a.status})},null,2),o("div",{class:w({ripple:!a.status})},null,2),o("div",{class:w({ripple:!a.status})},null,2)],2),o("div",Pe,[a.status?C("",!0):(r(),_("span",Ie,v(d.value)+"%",1))]),o("div",Ue,[a.status==="success"?(r(),_("span",Se,"✓")):a.status==="exception"?(r(),_("span",Ve,"✕")):C("",!0)])],6)])]))}},Ge=H(Le,[["__scopeId","data-v-110caa1a"]]),Fe={class:"divider-wrapper"},Ne={class:"build-progress-bar"},Me={class:"progress-content"},He={key:0},je=["href"],ze={key:0,class:"button-wrapper"},Re=O({__name:"BuildProgressBar",props:{deployHistoryId:{},percent:{},message:{},showToggle:{type:Boolean}},emits:["build-success","build-failed"],setup(a,{expose:U,emit:d}){const{t:f}=Z(),s=a,e=d,p=h(!1),g=h({id:0,projectName:"",deployDescription:"",deployStatus:"",startTime:"",duration:0,errorMessage:""}),k=h(!1),B=()=>{p.value=!p.value},G=async()=>{if(s.deployHistoryId)try{const i=await ie(s.deployHistoryId);i.data&&(g.value=i.data,k.value=!0)}catch(i){console.error(f("errorFetchingDeployHistory"),i)}};U({show:()=>p.value=!0,hide:()=>p.value=!1,toggle:B});const c=h(!1),n=h("");x(()=>s.percent,i=>{i===100?c.value=!0:(c.value=!1,n.value="")},{immediate:!0}),x(()=>s.message,i=>{if(c.value&&i.toLowerCase().includes("your site is accessible at:")){const D=i.match(/Your site is accessible at:\s*(https?:\/\/\S+)/i);n.value=D?D[1]:""}},{immediate:!0});const l=P(()=>s.percent===-1?100:s.percent),T=P(()=>s.percent===-1?(e("build-failed"),"exception"):c.value?(e("build-success"),"success"):"");P(()=>s.percent!==100&&s.percent!==-1);const F=P(()=>s.percent===-1);P(()=>s.percent!==100&&s.percent!==-1);const N=P(()=>s.percent===-1?"error-message":c.value?"success-message":""),M=()=>{document.visibilityState==="visible"&&fe(()=>{l.value})};return Y(()=>{document.addEventListener("visibilitychange",M)}),ce(()=>{document.removeEventListener("visibilitychange",M)}),(i,D)=>{const S=ee,j=re;return r(),_("div",{class:w(["progress-wrapper",{"no-toggle":!i.showToggle}])},[i.showToggle?(r(),_("div",{key:0,class:w(["toggle-header",{"header-collapsed":!p.value}])},[u(S,{content:p.value?b(f)("hideProgress"):b(f)("showProgress"),placement:"top-start",effect:"light"},{default:m(()=>[o("div",{class:"toggle-icon",onClick:B},[u(ue,{"icon-class":"plus",class:w({"is-reverse":p.value})},null,8,["class"])])]),_:1},8,["content"]),o("div",Fe,[u(b(K),{class:"toggle-divider",direction:"horizontal"})])],2)):C("",!0),u(me,{name:"fade"},{default:m(()=>[q(o("div",Ne,[o("div",Me,[u(Ge,{value:l.value,status:T.value},null,8,["value","status"]),o("div",{class:w(["message",N.value])},[c.value&&n.value?(r(),_("div",He,[L(v(b(f)("siteUrlMessage"))+" ",1),o("a",{href:n.value,target:"_blank",rel:"noopener noreferrer"},v(n.value),9,je)])):(r(),_(pe,{key:1},[L(v(i.message),1)],64))],2)]),F.value?(r(),_("div",ze,[u(b(X),{link:"",type:"danger",icon:"InfoFilled",class:"detail-button",onClick:G})])):C("",!0)],512),[[Q,i.showToggle?p.value:!0]])]),_:1}),i.showToggle?q((r(),I(b(K),{key:1,direction:"horizontal"},null,512)),[[Q,i.showToggle?p.value:!0]]):C("",!0),u(j,{modelValue:k.value,"onUpdate:modelValue":D[0]||(D[0]=z=>k.value=z),title:i.$t("deployDetails"),data:g.value},null,8,["modelValue","title","data"])],2)}}}),ot=H(Re,[["__scopeId","data-v-bae646e4"]]),We={class:"pro-text-small"},Ae={class:"pro-text"},xe={id:"user-guide",class:"user-guide"},qe={class:"user-guide-email"},Oe=["element-loading-text"],Ye=["src"],Xe=["innerHTML"],Je=O({__name:"UpgradeProDialog",props:{paymentPlatform:{},paymentType:{},iframeUrl:{},paymentName:{},projectId:{},size:{default:"default"},planExpired:{type:Boolean,default:!0}},emits:["payment-success","payment-cancelled"],setup(a,{emit:U}){const{t:d}=Z(),f="436efb388d684aadab73ef3cbba8f287",s=ge(),e=a,p=U,g=h(!1),k=h(!1),B=h(!0),G=h(null),c=h(e.iframeUrl),n=h(!1),l=h(!1),T=P(()=>e.paymentType==="giftcard"),F=()=>{c.value=`${e.iframeUrl}${e.iframeUrl.includes("?")?"&":"?"}timestamp=${Date.now()}`,B.value=!0},N=()=>{T.value?l.value=!0:(g.value=!0,F())},M=()=>{T.value?l.value=!1:n.value=!0},i=t=>{const y={paymentType:e.paymentType,paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"1",paymentLink:e.iframeUrl,userEmail:t||s.email,projectId:e.projectId,clientId:f};A(y).then(()=>{$.success(d("paymentConfirmRecordAdded")),p("payment-success"),g.value=!1}).catch(E=>{console.error(d("addPaymentConfirmRecordFailed"),E),$.error(d("addPaymentConfirmRecordFailedTryAgain"))})},D=()=>{const t={paymentType:e.paymentType,paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"0",paymentLink:e.iframeUrl,userEmail:s.email,projectId:e.projectId,clientId:f};A(t).then(()=>{p("payment-cancelled")}).catch(y=>{}).finally(()=>{g.value=!1,n.value=!1})},S=()=>{B.value=!1},j=()=>{B.value=!1,$.error(d("loadUpgradePageFailed"))},z=()=>{navigator.clipboard.writeText(s.email).then(()=>{$.success(d("emailCopiedToClipboard"))}).catch(()=>{$.error(d("copyFailedPleaseManualCopy"))})},ae=()=>{k.value=!0},se=()=>{g.value=!1,l.value=!0},ne=()=>{T.value||(g.value=!0,F()),l.value=!1},oe=(t,y)=>{B.value=!0;const E={paymentType:"giftcard",paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"1",paymentLink:e.iframeUrl,userEmail:s.email,projectId:e.projectId,clientId:f,giftCardIds:t,remark:y};A(E).then(()=>{$.success(d("paymentGiftCardSuccess")),p("payment-success")}).catch(R=>{console.error(d("paymentGiftCardFailed"),R),$.error(d("paymentGiftCardFailed"))}).finally(()=>{B.value=!1,g.value=!1,l.value=!1,n.value=!1})};return x(()=>e.paymentType,t=>{t==="giftcard"&&(g.value=!1)}),Y(()=>{}),te(()=>{}),(t,y)=>{const E=X,R=ee,W=be,J=we,le=_e;return r(),_("div",null,[u(R,{content:t.planExpired?t.$t("upgradeToPro"):t.$t("moreMonth"),placement:"top","show-after":300,effect:"light"},{default:m(()=>[t.size==="small"?(r(),I(E,{key:0,class:w(["pro-button-small",{"pro-button-active":!t.planExpired}]),onClick:N},{default:m(()=>[o("span",We,v(t.planExpired?t.$t("pro"):t.$t("more")),1)]),_:1},8,["class"])):(r(),I(E,{key:1,class:w(["pro-button",{"pro-button-active":!t.planExpired}]),onClick:N},{default:m(()=>[o("span",Ae,v(t.planExpired?t.$t("pro"):t.$t("more")),1)]),_:1},8,["class"]))]),_:1},8,["content"]),T.value?C("",!0):(r(),I(J,{key:0,modelValue:g.value,"onUpdate:modelValue":y[0]||(y[0]=V=>g.value=V),title:t.$t("upgradeToPro"),width:"80%","before-close":M,"append-to-body":""},{default:m(()=>[o("div",xe,[o("span",null,v(t.$t("enterEmailGuide")),1),o("span",qe,v(b(s).email),1),u(E,{size:"small",class:"copy-button",onClick:z},{default:m(()=>[u(W,null,{default:m(()=>[u(b(ye))]),_:1}),L(" "+v(t.$t("copy")),1)]),_:1}),u(E,{size:"small",class:"help-button",onClick:ae},{default:m(()=>[u(W,null,{default:m(()=>[u(b(ve))]),_:1}),L(" "+v(t.$t("help")),1)]),_:1}),t.paymentType==="donation"?(r(),I(E,{key:0,size:"small",type:"success",class:"giftcard-button",onClick:se},{default:m(()=>[u(W,null,{default:m(()=>[u(b(he))]),_:1}),L(" "+v(t.$t("payByGiftcard")),1)]),_:1})):C("",!0)]),q((r(),_("div",{class:"iframe-container","element-loading-text":t.$t("loading")},[o("iframe",{id:"kofiframe",ref_key:"iframeRef",ref:G,src:c.value,frameborder:"0",class:"pro-iframe",style:{border:"none",width:"100%",padding:"4px",background:"#f9f9f9"},onLoad:S,onError:j},null,40,Ye)],8,Oe)),[[le,B.value]])]),_:1},8,["modelValue","title"])),u(J,{modelValue:k.value,"onUpdate:modelValue":y[1]||(y[1]=V=>k.value=V),title:t.$t("upgradeStepsDescription"),width:"70%",class:"help-dialog","append-to-body":""},{default:m(()=>[o("div",{class:"help-content",innerHTML:t.$t("helpContent")},null,8,Xe)]),_:1},8,["modelValue","title"]),T.value?C("",!0):(r(),I($e,{key:1,visible:n.value,"onUpdate:visible":y[2]||(y[2]=V=>n.value=V),"user-email":b(s).email,"payment-name":e.paymentName,onConfirm:i,onCancel:D},null,8,["visible","user-email","payment-name"])),l.value?(r(),I(ke,{key:2,visible:l.value,"onUpdate:visible":y[3]||(y[3]=V=>l.value=V),"show-back-button":t.paymentType==="donation",onBack:ne,onConfirm:oe},null,8,["visible","show-back-button"])):C("",!0)])}}}),lt=H(Je,[["__scopeId","data-v-e9e712f5"]]),Ke={class:"repository-bind-buttons"},Qe=O({__name:"RepositoryBindButtons",props:{showGithubButton:Boolean,showGitlabButton:Boolean,isBindingDisabled:Boolean,isEdit:Boolean,githubButtonText:String,gitlabButtonText:String,projectId:[String,Number],isFullControl:String},emits:["bind-initiated","bind-result"],setup(a,{emit:U}){const d=h(!1),f=a,s=U,{proxy:e}=Be(),p=c=>{let n=g("",600,600);Te(c,"000001",f.isFullControl,f.projectId).then(l=>{l.code===Ce.SUCCESS?(n.location.href=l.data,s("bind-initiated",c)):$.error(l.msg)})},g=(c,n,l)=>{const T=window.screenX||window.screenLeft||0,F=window.screenY||window.screenTop||0,N=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,M=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=T+(N-n)/2,D=F+(M-l)/2,S=window.open(c,"OAuth2Binding",`width=${n},height=${l},top=${Math.max(0,Math.round(D))},left=${Math.max(0,Math.round(i))},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`);return S&&S.focus(),S},k=()=>p("github_binding"),B=()=>p("gitlab_binding"),G=c=>{if(c.data.type==="bindingResult"){const n=c.data.data;n?(f.isEdit||(d.value=!0),$.success(e==null?void 0:e.$t("bindingSuccessful"))):(d.value=!1,$.error(e==null?void 0:e.$t("bindingFailed"))),s("bind-result",n)}};return te(()=>{window.removeEventListener("message",G)}),Y(async()=>{window.addEventListener("message",G)}),(c,n)=>{const l=X;return r(),_("div",Ke,[a.showGithubButton?(r(),I(l,{key:0,class:w(["github-button",b(d)?"binded":""]),disabled:a.isBindingDisabled,onClick:k},{default:m(()=>[n[0]||(n[0]=o("i",{class:"fab fa-github"},null,-1)),L(" "+v(a.githubButtonText),1)]),_:1},8,["class","disabled"])):C("",!0),a.showGitlabButton?(r(),I(l,{key:1,class:w(["gitlab-button",b(d)?"binded":""]),disabled:a.isBindingDisabled,onClick:B},{default:m(()=>[n[1]||(n[1]=o("i",{class:"fab fa-gitlab"},null,-1)),L(" "+v(a.gitlabButtonText),1)]),_:1},8,["class","disabled"])):C("",!0)])}}}),it=H(Qe,[["__scopeId","data-v-b1f601fd"]]);export{ot as B,it as R,lt as U};
