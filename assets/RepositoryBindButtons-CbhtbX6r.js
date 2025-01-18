import{g as ie,_ as re}from"./DeployDetailDialog-xL31PR0X.js";import{_ as z,k as P,o as l,c as w,m as o,aj as _,au as de,t as v,i as C,d as O,h as ee,r as b,D as q,b as Y,a4 as ce,p as u,q as f,at as ue,e as h,dF as Q,w as j,y as L,F as me,x as X,U as Z,ag as pe,A as I,n as fe,ac as te,C as ge,as as ae,dz as ye,dA as ve,dB as be,E as $,R as he,B as we,v as _e,a1 as Be,O as Ce}from"./index-DdehfsnW.js";/* empty css                  */import{a as A}from"./index-Ckk7Inhd.js";import{P as $e,a as ke}from"./PaymentByGiftcard-aQGq2njr.js";import{c as De}from"./auth-BidXdwWE.js";const Te={class:"progress-container"},Ee={class:"progress-bar"},Pe={class:"percentage-text-indicator"},Ie={key:0},Ue={class:"percentage-status-indicator"},Se={key:0},Ve={key:1},Le={__name:"VpadminProgressBar",props:{value:{type:Number,required:!0,validator:a=>a>=0&&a<=100},status:{type:String,validator:a=>["success","exception",void 0,""].includes(a)}},setup(a){const U=a,d=P(()=>Math.round(U.value)),g=P(()=>U.status?"100%":`${d.value}%`);return(s,e)=>(l(),w("div",Te,[o("div",Ee,[o("div",{class:_(["progress",{"progress-success":a.status==="success","progress-exception":a.status==="exception"}]),style:de({width:g.value})},[o("div",{class:_(["percentage-indicator",{"indicator-success":a.status==="success","indicator-exception":a.status==="exception"}])},[o("div",{class:_({ripple:!a.status})},null,2),o("div",{class:_({ripple:!a.status})},null,2),o("div",{class:_({ripple:!a.status})},null,2)],2),o("div",Pe,[a.status?C("",!0):(l(),w("span",Ie,v(d.value)+"%",1))]),o("div",Ue,[a.status==="success"?(l(),w("span",Se,"✓")):a.status==="exception"?(l(),w("span",Ve,"✕")):C("",!0)])],6)])]))}},Ge=z(Le,[["__scopeId","data-v-110caa1a"]]),Fe={class:"divider-wrapper"},Ne={class:"build-progress-bar"},Me={class:"progress-content"},je={key:0},ze=["href"],He={key:0,class:"button-wrapper"},Re=O({__name:"BuildProgressBar",props:{deployHistoryId:{},percent:{},message:{},showToggle:{type:Boolean}},emits:["build-success","build-failed"],setup(a,{expose:U,emit:d}){const{t:g}=ee(),s=a,e=d,m=b(!1),y=b({id:0,projectName:"",deployDescription:"",deployStatus:"",startTime:"",duration:0,errorMessage:""}),k=b(!1),B=()=>{m.value=!m.value},G=async()=>{if(s.deployHistoryId)try{const r=await ie(s.deployHistoryId);r.data&&(y.value=r.data,k.value=!0)}catch(r){console.error(g("errorFetchingDeployHistory"),r)}};U({show:()=>m.value=!0,hide:()=>m.value=!1,toggle:B});const c=b(!1),n=b("");q(()=>s.percent,r=>{r===100?c.value=!0:(c.value=!1,n.value="")},{immediate:!0}),q(()=>s.message,r=>{if(c.value&&r.toLowerCase().includes("your site is accessible at:")){const T=r.match(/Your site is accessible at:\s*(https?:\/\/\S+)/i);n.value=T?T[1]:""}},{immediate:!0});const i=P(()=>s.percent===-1?100:s.percent),D=P(()=>s.percent===-1?(e("build-failed"),"exception"):c.value?(e("build-success"),"success"):"");P(()=>s.percent!==100&&s.percent!==-1);const F=P(()=>s.percent===-1);P(()=>s.percent!==100&&s.percent!==-1);const N=P(()=>s.percent===-1?"error-message":c.value?"success-message":""),M=()=>{document.visibilityState==="visible"&&fe(()=>{i.value})};return Y(()=>{document.addEventListener("visibilitychange",M)}),ce(()=>{document.removeEventListener("visibilitychange",M)}),(r,T)=>{const S=te,H=re;return l(),w("div",{class:_(["progress-wrapper",{"no-toggle":!r.showToggle}])},[r.showToggle?(l(),w("div",{key:0,class:_(["toggle-header",{"header-collapsed":!m.value}])},[u(S,{content:m.value?h(g)("hideProgress"):h(g)("showProgress"),placement:"top-start",effect:"light"},{default:f(()=>[o("div",{class:"toggle-icon",onClick:B},[u(ue,{"icon-class":"plus",class:_({"is-reverse":m.value})},null,8,["class"])])]),_:1},8,["content"]),o("div",Fe,[u(h(Q),{class:"toggle-divider",direction:"horizontal"})])],2)):C("",!0),u(pe,{name:"fade"},{default:f(()=>[j(o("div",Ne,[o("div",Me,[u(Ge,{value:i.value,status:D.value},null,8,["value","status"]),o("div",{class:_(["message",N.value])},[c.value&&n.value?(l(),w("div",je,[L(v(h(g)("siteUrlMessage"))+" ",1),o("a",{href:n.value,target:"_blank",rel:"noopener noreferrer"},v(n.value),9,ze)])):(l(),w(me,{key:1},[L(v(r.message),1)],64))],2)]),F.value?(l(),w("div",He,[u(h(X),{link:"",type:"danger",icon:"InfoFilled",class:"detail-button",onClick:G})])):C("",!0)],512),[[Z,r.showToggle?m.value:!0]])]),_:1}),r.showToggle?j((l(),I(h(Q),{key:1,direction:"horizontal"},null,512)),[[Z,r.showToggle?m.value:!0]]):C("",!0),u(H,{modelValue:k.value,"onUpdate:modelValue":T[0]||(T[0]=R=>k.value=R),title:r.$t("deployDetails"),data:y.value},null,8,["modelValue","title","data"])],2)}}}),ot=z(Re,[["__scopeId","data-v-bae646e4"]]),We={class:"pro-text-small"},xe={class:"pro-text"},Ae={id:"user-guide",class:"user-guide"},qe={class:"user-guide-email"},Oe=["element-loading-text"],Ye=["src"],Xe=["element-loading-text"],Je=O({__name:"UpgradeProDialog",props:{paymentPlatform:{},paymentType:{},iframeUrl:{},paymentName:{},projectId:{},size:{default:"default"},planExpired:{type:Boolean,default:!0}},emits:["payment-success","payment-cancelled"],setup(a,{emit:U}){const{t:d}=ee(),g="436efb388d684aadab73ef3cbba8f287",s=ge(),e=a,m=U,y=b(!1),k=b(!1),B=b(!0),G=b(null),c=b(e.iframeUrl),n=b(!1),i=b(!1),D=P(()=>e.paymentType==="giftcard"),F=()=>{c.value=`${e.iframeUrl}${e.iframeUrl.includes("?")?"&":"?"}timestamp=${Date.now()}`,B.value=!0},N=()=>{D.value?i.value=!0:(y.value=!0,F())},M=()=>{D.value?i.value=!1:n.value=!0},r=t=>{const p={paymentType:e.paymentType,paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"1",paymentLink:e.iframeUrl,userEmail:t||s.email,projectId:e.projectId,clientId:g};A(p).then(()=>{$.success(d("paymentConfirmRecordAdded")),m("payment-success"),y.value=!1}).catch(E=>{console.error(d("addPaymentConfirmRecordFailed"),E),$.error(d("addPaymentConfirmRecordFailedTryAgain"))})},T=()=>{const t={paymentType:e.paymentType,paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"0",paymentLink:e.iframeUrl,userEmail:s.email,projectId:e.projectId,clientId:g};A(t).then(()=>{m("payment-cancelled")}).catch(p=>{}).finally(()=>{y.value=!1,n.value=!1})},S=()=>{B.value=!1},H=()=>{B.value=!1,$.error(d("loadUpgradePageFailed"))},R=()=>{navigator.clipboard.writeText(s.email).then(()=>{$.success(d("emailCopiedToClipboard"))}).catch(()=>{$.error(d("copyFailedPleaseManualCopy"))})},se=()=>{k.value=!0},ne=()=>{y.value=!1,i.value=!0},oe=()=>{D.value||(y.value=!0,F()),i.value=!1},le=(t,p)=>{B.value=!0;const E={paymentType:"giftcard",paymentPlatform:e.paymentPlatform,paymentName:e.paymentName,paymentConfirm:"1",paymentLink:e.iframeUrl,userEmail:s.email,projectId:e.projectId,clientId:g,giftCardIds:t,remark:p};A(E).then(()=>{$.success(d("paymentGiftCardSuccess")),m("payment-success")}).catch(W=>{console.error(d("paymentGiftCardFailed"),W),$.error(d("paymentGiftCardFailed"))}).finally(()=>{B.value=!1,y.value=!1,i.value=!1,n.value=!1})};return q(()=>e.paymentType,t=>{t==="giftcard"&&(y.value=!1)}),Y(()=>{}),ae(()=>{}),(t,p)=>{const E=X,W=te,x=he,J=we,K=_e;return l(),w("div",null,[u(W,{content:t.planExpired?t.$t("upgradeToPro"):t.$t("moreMonth"),placement:"top","show-after":300,effect:"light"},{default:f(()=>[t.size==="small"?(l(),I(E,{key:0,class:_(["pro-button-small",{"pro-button-active":!t.planExpired}]),onClick:N},{default:f(()=>[o("span",We,v(t.planExpired?t.$t("pro"):t.$t("more")),1)]),_:1},8,["class"])):(l(),I(E,{key:1,class:_(["pro-button",{"pro-button-active":!t.planExpired}]),onClick:N},{default:f(()=>[o("span",xe,v(t.planExpired?t.$t("pro"):t.$t("more")),1)]),_:1},8,["class"]))]),_:1},8,["content"]),D.value?C("",!0):(l(),I(J,{key:0,modelValue:y.value,"onUpdate:modelValue":p[0]||(p[0]=V=>y.value=V),title:t.$t("upgradeToPro"),width:"80%","before-close":M,"append-to-body":""},{default:f(()=>[o("div",Ae,[o("span",null,v(t.$t("enterEmailGuide")),1),o("span",qe,v(h(s).email),1),u(E,{size:"small",class:"copy-button",onClick:R},{default:f(()=>[u(x,null,{default:f(()=>[u(h(ye))]),_:1}),L(" "+v(t.$t("copy")),1)]),_:1}),u(E,{size:"small",class:"help-button",onClick:se},{default:f(()=>[u(x,null,{default:f(()=>[u(h(ve))]),_:1}),L(" "+v(t.$t("help")),1)]),_:1}),t.paymentType==="donation"?(l(),I(E,{key:0,size:"small",type:"success",class:"giftcard-button",onClick:ne},{default:f(()=>[u(x,null,{default:f(()=>[u(h(be))]),_:1}),L(" "+v(t.$t("payByGiftcard")),1)]),_:1})):C("",!0)]),j((l(),w("div",{class:"iframe-container","element-loading-text":t.$t("loading")},[o("iframe",{id:"kofiframe",ref_key:"iframeRef",ref:G,src:c.value,frameborder:"0",class:"pro-iframe",style:{border:"none",width:"100%",padding:"4px",background:"#f9f9f9"},onLoad:S,onError:H},null,40,Ye)],8,Oe)),[[K,B.value]])]),_:1},8,["modelValue","title"])),u(J,{modelValue:k.value,"onUpdate:modelValue":p[1]||(p[1]=V=>k.value=V),title:t.$t("upgradeStepsDescription"),width:"70%",class:"help-dialog","append-to-body":""},{default:f(()=>[j((l(),w("div",{class:"iframe-container","element-loading-text":t.$t("loading")},p[4]||(p[4]=[o("iframe",{src:"https://www.vpadmin.org/prices/prices",frameborder:"0",style:{height:"100%"}},null,-1)]),8,Xe)),[[K,B.value]])]),_:1},8,["modelValue","title"]),D.value?C("",!0):(l(),I($e,{key:1,visible:n.value,"onUpdate:visible":p[2]||(p[2]=V=>n.value=V),"user-email":h(s).email,"payment-name":e.paymentName,onConfirm:r,onCancel:T},null,8,["visible","user-email","payment-name"])),i.value?(l(),I(ke,{key:2,visible:i.value,"onUpdate:visible":p[3]||(p[3]=V=>i.value=V),"show-back-button":t.paymentType==="donation",onBack:oe,onConfirm:le},null,8,["visible","show-back-button"])):C("",!0)])}}}),lt=z(Je,[["__scopeId","data-v-f42b1012"]]),Ke={class:"repository-bind-buttons"},Qe=O({__name:"RepositoryBindButtons",props:{showGithubButton:Boolean,showGitlabButton:Boolean,isBindingDisabled:Boolean,isEdit:Boolean,githubButtonText:String,gitlabButtonText:String,projectId:[String,Number],isFullControl:String},emits:["bind-initiated","bind-result"],setup(a,{emit:U}){const d=b(!1),g=a,s=U,{proxy:e}=Be(),m=c=>{let n=y("",600,600);De(c,"000001",g.isFullControl,g.projectId).then(i=>{i.code===Ce.SUCCESS?(n.location.href=i.data,s("bind-initiated",c)):$.error(i.msg)})},y=(c,n,i)=>{const D=window.screenX||window.screenLeft||0,F=window.screenY||window.screenTop||0,N=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,M=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,r=D+(N-n)/2,T=F+(M-i)/2,S=window.open(c,"OAuth2Binding",`width=${n},height=${i},top=${Math.max(0,Math.round(T))},left=${Math.max(0,Math.round(r))},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`);return S&&S.focus(),S},k=()=>m("github_binding"),B=()=>m("gitlab_binding"),G=c=>{if(c.data.type==="bindingResult"){const n=c.data.data;n?(g.isEdit||(d.value=!0),$.success(e==null?void 0:e.$t("bindingSuccessful"))):(d.value=!1,$.error(e==null?void 0:e.$t("bindingFailed"))),s("bind-result",n)}};return ae(()=>{window.removeEventListener("message",G)}),Y(async()=>{window.addEventListener("message",G)}),(c,n)=>{const i=X;return l(),w("div",Ke,[a.showGithubButton?(l(),I(i,{key:0,class:_(["github-button",h(d)?"binded":""]),disabled:a.isBindingDisabled,onClick:k},{default:f(()=>[n[0]||(n[0]=o("i",{class:"fab fa-github"},null,-1)),L(" "+v(a.githubButtonText),1)]),_:1},8,["class","disabled"])):C("",!0),a.showGitlabButton?(l(),I(i,{key:1,class:_(["gitlab-button",h(d)?"binded":""]),disabled:a.isBindingDisabled,onClick:B},{default:f(()=>[n[1]||(n[1]=o("i",{class:"fab fa-gitlab"},null,-1)),L(" "+v(a.gitlabButtonText),1)]),_:1},8,["class","disabled"])):C("",!0)])}}}),it=z(Qe,[["__scopeId","data-v-b1f601fd"]]);export{ot as B,it as R,lt as U};
