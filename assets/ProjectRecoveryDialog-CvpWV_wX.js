import{d as W,h as X,r as c,D as V,E as d,o as g,A as B,q as a,m as i,aj as Y,t as l,p as n,e as F,a5 as Z,y as h,w as ee,c as w,F as oe,z as te,L as re,S as ae,n as se,av as ne,dG as ce,bC as le,R as ie,x as de,ae as ue,dH as pe,B as me,v as ve,_ as fe}from"./index-CZcYgHe2.js";/* empty css                  */import{E as ye,a as ge}from"./el-form-item-Cye_SJH6.js";import{a as he,b as _e,r as Re}from"./edit-19_IT000.js";import be from"./Remaining-CM1_dXsl.js";import{c as Pe}from"./index-CmwV5ea0.js";import"./_baseClone-B0npKItl.js";import"./_initCloneObject-DaI4F2zx.js";const Ce={class:"dialog-header-with-button"},je=["id"],we={class:"recovery-list"},Ee={class:"recovery-info"},ke={class:"recovery-main"},De={class:"recovery-details"},$e={class:"commit-message"},Ne={class:"author"},Ve={class:"time"},Be={class:"dialog-footer"},Fe=W({__name:"ProjectRecoveryDialog",props:{visible:{type:Boolean},projectPath:{},projectId:{},selectedProject:{}},emits:["update:visible","recovery-success"],setup(I,{emit:T}){const{t:r}=X(),u=I,E=T,m=c(!1),_=c(!1),R=c([]),b=c(null),v=c(!1),P=c(!1),C=c(),f=c({description:""}),S={description:[{required:!0,message:r("recoveryPointDescriptionRequired"),trigger:"blur"},{min:1,max:30,message:r("recoveryPointDescriptionLength"),trigger:"blur"}]},j=c(null),y=c(null),q=async e=>{try{const o=await Pe(e);o.code===200&&o.data?y.value=o.data:d.error(r("failedToGetProjectQuota"))}catch(o){console.error(r("errorFetchingProjectQuota"),o),d.error(r("errorGettingProjectQuota"))}},x=()=>{se(()=>{var e,o,p,s;(o=(e=j.value)==null?void 0:e.input)==null||o.focus(),(s=(p=j.value)==null?void 0:p.input)==null||s.select()})},L=()=>{f.value.description="",v.value=!0},M=()=>y.value.proOperationCounts[2].counts>=y.value.proOperationCounts[2].quota,O=async()=>{C.value&&await C.value.validate(async e=>{if(e){P.value=!0;try{(await _e({projectName:u.projectPath,description:f.value.description})).code===200&&(d.success(r("addRecoveryPointSuccess")),v.value=!1,await k())}catch(o){console.error("Error adding recovery point:",o),d.error(r("addRecoveryPointFailed"))}finally{P.value=!1}}})};V(()=>u.visible,e=>{m.value=e,e&&(k(),q(u.projectId))}),V(m,e=>{E("update:visible",e)});const k=async()=>{if(u.projectPath){_.value=!0;try{const e=await he(u.projectPath);e.code===200&&e.data&&(R.value=e.data)}catch(e){console.error("Error fetching recoveries:",e),d.error(r("failedToGetRecoveries"))}finally{_.value=!1}}},Q=e=>{u.projectPath&&(ne.confirm(r("confirmRecoveryMessage",{branch:e.branchName}),r("confirmRecovery"),{confirmButtonText:r("confirm"),cancelButtonText:r("cancel"),customClass:"my-recovery-message-box",type:"warning"}).then(async()=>{if(M()){d.error(r("needUpgradeMessage"));return}b.value=e.branchName;try{(await Re({projectName:u.projectPath,branchName:e.branchName})).code===200&&(d.success(r("recoverySuccessful")),E("recovery-success"),m.value=!1)}catch(o){console.error("Error during recovery:",o),d.error(r("recoveryFailed"))}finally{b.value=null}}).catch(o=>{o!=="cancel"&&console.error("Recovery confirmation error:",o)}),setTimeout(()=>{z(y.value.proOperationCounts[2].counts,y.value.proOperationCounts[2].quota)},0))},z=(e,o)=>{const p=document.querySelector(".my-recovery-message-box");if(p){const s=document.createElement("div");s.className="custom-component-container",ce({render(){return le(be,{current:e,total:o,t:r})}}).mount(s),p.appendChild(s)}},A=()=>{m.value=!1},G=e=>new Date(e).toLocaleString();return(e,o)=>{const p=ie,s=de,D=ue,U=pe,H=ye,J=ge,$=me,K=ve;return g(),B($,{modelValue:m.value,"onUpdate:modelValue":o[5]||(o[5]=t=>m.value=t),title:e.$t("projectRecoveryPoints"),width:"60%","before-close":A},{header:a(({titleId:t,titleClass:N})=>[i("div",Ce,[i("span",{id:t,class:Y(N)},l(e.$t("projectRecoveryPoints")),11,je),n(s,{type:"warning",size:"large",onClick:L},{default:a(()=>[n(p,null,{default:a(()=>[n(F(Z))]),_:1}),h(" "+l(e.$t("addRecoveryPoint")),1)]),_:1})])]),default:a(()=>[ee((g(),w("div",we,[R.value.length>0?(g(!0),w(oe,{key:0},te(R.value,t=>(g(),w("div",{key:t.branchName,class:"recovery-item"},[i("div",Ee,[i("div",ke,[n(D,{size:"small",class:"branch-name"},{default:a(()=>[h(l(t.branchName),1)]),_:2},1024)]),i("div",De,[i("span",$e,l(t.lastCommitMessage),1),i("span",Ne,l(e.$t("author"))+": "+l(t.lastCommitAuthor),1),i("span",Ve,l(G(t.lastCommitTime)),1)])]),n(s,{type:"primary",size:"small",loading:b.value===t.branchName,onClick:N=>Q(t)},{default:a(()=>[h(l(e.$t("recover")),1)]),_:2},1032,["loading","onClick"])]))),128)):(g(),B(U,{key:1,description:e.$t("noRecoveryPoints")},null,8,["description"]))])),[[K,_.value]]),n($,{modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=t=>v.value=t),title:e.$t("addRecoveryPoint"),width:"40%","append-to-body":"",onOpened:o[4]||(o[4]=t=>x())},{footer:a(()=>[i("span",Be,[n(s,{onClick:o[2]||(o[2]=t=>v.value=!1)},{default:a(()=>[h(l(e.$t("cancel")),1)]),_:1}),n(s,{type:"primary",loading:P.value,onClick:O},{default:a(()=>[h(l(e.$t("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[n(J,{ref_key:"addRecoveryFormRef",ref:C,model:f.value,rules:S,"label-width":"100px",onSubmit:o[1]||(o[1]=re(()=>{},["prevent"]))},{default:a(()=>[n(H,{label:e.$t("description"),prop:"description"},{default:a(()=>[n(F(ae),{ref_key:"recoveryInputRef",ref:j,modelValue:f.value.description,"onUpdate:modelValue":o[0]||(o[0]=t=>f.value.description=t),placeholder:e.$t("recoveryPointDescriptionPlaceholder"),maxlength:100,"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])]),_:1},8,["modelValue","title"])}}}),Qe=fe(Fe,[["__scopeId","data-v-19cca76a"]]);export{Qe as default};
