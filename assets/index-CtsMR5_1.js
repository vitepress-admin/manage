import{d as Ge,a as Ct,aa as Ie,r as u,dC as Be,D as J,ab as G,k as Pt,b as It,E as Fe,as as Bt,ah as Ft,o as v,c as C,p as l,q as i,w as V,m as N,e as s,I as X,F as ge,z as he,A as $,y as c,t as m,U as Se,ag as St,i as w,dD as Ut,aj as qt,a1 as Dt,dE as Ue,n as qe,S as Lt,P as Gt,Q as zt,x as Yt,ac as Kt,R as Ht,at as Ot,B as Qt,v as Zt,_ as Mt}from"./index-DLoZ2oNR.js";import{E as Wt}from"./el-checkbox-BXZtPLec.js";import{E as Jt,a as Xt}from"./el-descriptions-item-Bz3z5c-M.js";/* empty css                  *//* empty css                       *//* empty css                 */import{E as xt}from"./el-link-BuxHJxit.js";import{_ as el}from"./index-CYdbGZLj.js";import{E as tl,a as ll}from"./el-table-column-v7LDEIEJ.js";import{_ as al}from"./index-BSL_7-HU.js";/* empty css               */import{_ as ol}from"./index-CVGS1L8l.js";/* empty css               *//* empty css                */import{E as il,a as nl}from"./el-form-item-BDJlCK8S.js";import{l as sl,a as rl,g as dl,d as De,u as ul,b as ml}from"./index-CxyXhi7p.js";import{B as pl,U as cl,R as Le}from"./RepositoryBindButtons-DITNtLV1.js";import{E as vl}from"./index-BzhshleO.js";import{E as fl}from"./index-BwxKYZfG.js";import{E as bl}from"./index-CS-j3xFw.js";import{E as gl,a as hl}from"./index-0kwvPmsy.js";import"./_initCloneObject-BylirTEW.js";/* empty css                */import"./index-C-ccPOi5.js";import"./_baseClone-Cf51ivNu.js";import"./DeployDetailDialog-DwgHyZjY.js";import"./index-Bexs3d3K.js";import"./PaymentByGiftcard-DzVAa1lY.js";/* empty css                          */import"./index-BkbXXaQQ.js";import"./auth-BdbSIhoi.js";const $l={class:"p-2"},yl={class:"mb-[10px]"},_l={class:"action-button-group"},wl={class:"theme-selection-container"},Nl={class:"theme-option"},Tl={class:"theme-name"},jl={key:0,class:"theme-tags"},Vl={class:"dialog-footer"},kl={key:0},Al={class:"dialog-footer"},El={class:"text-red-500 long-text"},Rl={class:"dialog-footer"},Cl=Ge({name:"Project"}),Pl=Ge({...Cl,setup(Il){const x=Ct(),{proxy:t}=Dt(),{vpa_repo_type:z,sys_yes_no:Y,vpa_theme_tags:ze}=Ie(t==null?void 0:t.useDict("vpa_repo_type","sys_yes_no","vpa_theme_tags")),ee=u([]),T=u(!1),te=u(!0),le=u(!0),$e=u([]),Ye=u(!0),Ke=u(!0),ae=u(0),oe=u(!1),K=u(null),P=u(!1),ye=u(),A=u(),He=/^(https?:\/\/)([a-zA-Z0-9.-]+)(:[0-9]+)?$/,_e=u(!0);u([]);const H=u(!1),I=u(t==null?void 0:t.$t("bindGitHub")),B=u(t==null?void 0:t.$t("bindGitLab")),ie=u(!0),ne=u(!0),F=u([]),se=u(),Oe=u(Be),S=u(null),O=u([]),we=e=>{const a=re(e.tags);return`${e.themeName}${a.length?` - [${a.join(",")}]`:""}`},Qe=()=>{P.value=!1},Ze=()=>{P.value=!1},re=e=>e?e.split(",").map(a=>{var d;const r=(d=ze.value)==null?void 0:d.find(R=>R.value===a);return(r==null?void 0:r.label)||a}).filter(Boolean):[];J(()=>Oe.value,e=>{e&&K.value&&K.value.id===e.projectId.toString()&&(S.value=e)}),J(()=>F.value,e=>{O.value=[...e]},{immediate:!0});const Ne=e=>{e?O.value=F.value.filter(a=>we(a).toLowerCase().includes(e.toLowerCase())):O.value=F.value},Me=async()=>{try{const e=await sl();e.code===200&&(F.value=e.data)}catch(e){console.error("Failed to fetch theme list:",e)}},de=e=>{const a=F.value.find(r=>r.themeId===e);return a?a.themeName:""},We=(e,a,r)=>{if(!a)r(new Error(t==null?void 0:t.$t("repositoryAddressRequired")));else{const d=/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;if(!d.test(a))r(new Error(t==null?void 0:t.$t("invalidRepositoryAddress")));else{const R=/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\.git$/,M=/^https:\/\/gitlab\.com\/[\w.-]+\/[\w.-]+\.git$/;switch(n.value.repType){case"1":R.test(a)||r(new Error(t==null?void 0:t.$t("githubRepositoryFormatError")));break;case"2":M.test(a)||r(new Error(t==null?void 0:t.$t("gitlabRepositoryFormatError")));break;case"3":d.test(a)||r(new Error(t==null?void 0:t.$t("invalidRepositoryAddress")));break;default:d.test(a)||r(new Error(t==null?void 0:t.$t("invalidRepositoryAddress")))}r()}}},Q=(e,a,r)=>{n.value.isAdmin==="Y"&&!a?r(new Error(t==null?void 0:t.$t("domainRequired"))):a&&!He.test(a)?r(new Error(t==null?void 0:t.$t("domainFormatError"))):r()},E=G({visible:!1,title:t==null?void 0:t.$t("editProjectConfiguration")}),p=u({id:"",projectName:"",repType:"",userName:"",repositoryAddress:"",isAdmin:"",domain:"",themeId:""}),Je={domain:[{validator:Q,trigger:"blur"}]},Te=u(),f=G({visible:!1,data:{}}),h=G({visible:!1,isEdit:!1,title:""}),b=G({visible:!1,ids:"",deleteRemote:!1,buttonLoading:!1,projectData:null}),ue=Pt(()=>{var e;return((e=b.projectData)==null?void 0:e.isFullControl)==="Y"}),Z={id:void 0,projectName:void 0,repType:void 0,userName:void 0,repositoryAddress:void 0,isFullControl:"Y",isAdmin:"N",domain:void 0,themeId:"436efb388d684aadab73ef3cbba8f287",planExpired:!0},Xe=G({form:{...Z},queryParams:{pageNum:1,pageSize:10,projectName:void 0,deptId:void 0,userId:void 0,repType:void 0,userName:void 0,repositoryAddress:void 0,domain:void 0,params:{}},rules:{id:[{required:!0,message:t==null?void 0:t.$t("primaryKeyRequired"),trigger:"blur"}],projectName:[{required:!0,message:t==null?void 0:t.$t("projectNameRequired"),trigger:"blur"}],repType:[{required:!0,message:t==null?void 0:t.$t("repositoryTypeRequired"),trigger:"change"}],themeId:[{required:!0,message:t==null?void 0:t.$t("themeTypeRequired"),trigger:"change"}],userName:[{required:!0,message:t==null?void 0:t.$t("usernameRequired"),trigger:"blur"}],repositoryAddress:[{required:!0,message:t==null?void 0:t.$t("repositoryAddressRequired"),trigger:"blur"},{validator:We,trigger:"blur"}],isFullControl:[{required:!0,message:t==null?void 0:t.$t("fullControlRequired"),trigger:"change"}],isAdmin:[{required:!0,message:t==null?void 0:t.$t("adminBackendRequired"),trigger:"change"}],domain:[{validator:Q,trigger:"blur"}]}}),{queryParams:g,form:n,rules:me}=Ie(Xe),pe=e=>{e==="Y"?(n.value.domain||(n.value.domain="http://localhost"),me.value.domain=[{validator:Q,trigger:"blur"}]):me.value.domain=[{validator:Q,trigger:"blur"}]};J(()=>n.value.isAdmin,e=>{pe(e)});const ce=async()=>{te.value=!0;try{const e=await rl(g.value);ee.value=e.rows,ae.value=e.total}finally{te.value=!1}},k=async()=>{await ce(),xe()},xe=async()=>{const e=await dl();e.code===200&&e.data?(K.value=e.data,Ue("https://api.vpadmin.org/prod-api/resource/sse"),oe.value=!0,P.value=!0,Be.value=K.value.projectProgress):(oe.value=!1,P.value=!1)};It(async()=>{await Promise.all([k(),Me()]),x.query.action==="add"&&Ve()});const je=()=>{n.value.id&&De(n.value.id,!1),tt(),h.visible=!1},et=()=>T.value?!1:(je(),!0),tt=()=>{var e;n.value={...Z},(e=A.value)==null||e.resetFields(),_e.value=!0,h.isEdit=!1,pe(n.value.isAdmin),n.value.themeId=Z.themeId},U=()=>{g.value.pageNum=1,k()},lt=()=>{var e;(e=ye.value)==null||e.resetFields(),k()},at=e=>{$e.value=e.map(a=>a.id),Ye.value=e.length!=1,Ke.value=!e.length},Ve=()=>{if(P.value){Fe.warning(t==null?void 0:t.$t("waitForThePublication"));return}h.visible=!0,h.title=t==null?void 0:t.$t("addProjectConfiguration"),h.isEdit=!1,n.value={...Z},_e.value=!0,H.value=!1,I.value=t==null?void 0:t.$t("bindGitHub"),B.value=t==null?void 0:t.$t("bindGitLab"),ie.value=!0,ne.value=!0,x.query.theme_id&&(n.value.themeId=x.query.theme_id.toString())},ot=e=>{E.visible=!0,p.value={...e},h.isEdit=!0,I.value=t==null?void 0:t.$t("rebindGitHub"),B.value=t==null?void 0:t.$t("rebindGitLab")},ke=()=>{E.visible=!1,h.isEdit=!1,p.value={id:"",projectName:"",repType:"",userName:"",repositoryAddress:"",isFullControl:"",domain:"",themeId:""}},it=()=>{var e;(e=Te.value)==null||e.validate(async a=>{if(a){T.value=!0;try{await ul(p.value),t==null||t.$modal.msgSuccess(t==null?void 0:t.$t("modificationSuccessful")),E.visible=!1,k()}catch{t==null||t.$modal.msgError(t==null?void 0:t.$t("operationFailed"))}finally{T.value=!1}}})},nt=e=>{const a=z.value.find(r=>r.value===e);return a?a.label:t==null?void 0:t.$t("unknownType")},st=e=>{f.data={...e},f.visible=!0},rt=()=>{var e;(e=A.value)==null||e.validate(async a=>{if(a){T.value=!0,Ue("https://api.vpadmin.org/prod-api/resource/sse");try{await ml(n.value),t==null||t.$modal.msgSuccess(t==null?void 0:t.$t("operationSuccess")),h.visible=!1,k()}catch{}finally{T.value=!1}}})},dt=async e=>{const a=(e==null?void 0:e.id)||$e.value;b.ids=a.toString(),b.projectData=e||ee.value.find(r=>r.id===a),b.visible=!0},ut=()=>{b.deleteRemote=!1,b.buttonLoading=!1,ue.value||(b.deleteRemote=!1)},mt=async()=>{try{b.buttonLoading=!0;const e=ue.value?b.deleteRemote:!1;await De(b.ids,e),t==null||t.$modal.msgSuccess(t==null?void 0:t.$t("deletionSuccessful")),b.visible=!1,k()}catch{t==null||t.$modal.msgError(t==null?void 0:t.$t("operationFailed"))}finally{b.buttonLoading=!1}},Ae=()=>{if(n.value.projectName&&n.value.userName&&n.value.repType){const e=n.value.repType==="1"?"https://github.com":"https://gitlab.com";n.value.repositoryAddress=`${e}/${n.value.userName}/${n.value.projectName}.git`}};J(()=>[n.value.projectName,n.value.userName,n.value.repType],()=>{h.isEdit||Ae()},{deep:!0});const pt=()=>{ce()},ct=()=>{},vt=e=>{console.log(`Binding initiated for ${e}`)},ft=e=>{console.log(`Rebinding initiated for ${e}`)},bt=e=>{e&&e.trim()!==""?window.open(e,"_blank"):Fe.warning(t==null?void 0:t.$t("noValidLinkProvided"))},gt=e=>{e?Ae():n.value.repositoryAddress="",qe(()=>{var a,r;(a=A.value)==null||a.validateField("projectName"),(r=A.value)==null||r.validateField("repositoryAddress")})},Ee=e=>{e&&(H.value=!0,n.value.id=e.projectId,n.value.userName=e.userName,n.value.repType=e.repType,n.value.isFullControl=e.isFullControl,ie.value=e.repType==="1",ne.value=e.repType==="2",e.repType==="1"?I.value=t==null?void 0:t.$t("connectedGitHub"):e.repType==="2"&&(B.value=t==null?void 0:t.$t("connectedGitLab")),n.value.projectName="",n.value.repositoryAddress="",h.isEdit&&ke(),qe(()=>{var a;if((a=A.value)==null||a.clearValidate(),se.value){const r=se.value.$el.querySelector("input");r&&r.focus()}}))},ht=()=>{window.open("/themes","_blank")};return Bt(()=>{}),(e,a)=>{var Ce,Pe;const r=Lt,d=il,R=Gt,M=zt,y=Yt,ve=nl,Re=vl,fe=fl,$t=ol,yt=bl,j=tl,q=al,D=Kt,_t=ll,wt=el,Nt=Ht,Tt=xt,jt=Ot,Vt=gl,kt=hl,W=Qt,_=Jt,At=Xt,Et=Wt,L=Ft("hasPermi"),Rt=Zt;return v(),C("div",$l,[l(St,{"enter-active-class":(Ce=s(t))==null?void 0:Ce.animate.searchAnimate.enter,"leave-active-class":(Pe=s(t))==null?void 0:Pe.animate.searchAnimate.leave},{default:i(()=>[V(N("div",yl,[l(Re,{shadow:"hover"},{default:i(()=>[l(ve,{ref_key:"queryFormRef",ref:ye,model:s(g),inline:!0,"label-width":"auto"},{default:i(()=>[l(d,{label:e.$t("projectName"),prop:"projectName"},{default:i(()=>[l(r,{modelValue:s(g).projectName,"onUpdate:modelValue":a[0]||(a[0]=o=>s(g).projectName=o),placeholder:e.$t("enterProjectName"),clearable:"",onKeyup:X(U,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:e.$t("repositoryType"),prop:"repType"},{default:i(()=>[l(M,{modelValue:s(g).repType,"onUpdate:modelValue":a[1]||(a[1]=o=>s(g).repType=o),placeholder:e.$t("selectRepositoryType"),clearable:""},{default:i(()=>[(v(!0),C(ge,null,he(s(z),o=>(v(),$(R,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:e.$t("username"),prop:"userName"},{default:i(()=>[l(r,{modelValue:s(g).userName,"onUpdate:modelValue":a[2]||(a[2]=o=>s(g).userName=o),placeholder:e.$t("enterUsername"),clearable:"",onKeyup:X(U,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:e.$t("repositoryAddress"),prop:"repositoryAddress"},{default:i(()=>[l(r,{modelValue:s(g).repositoryAddress,"onUpdate:modelValue":a[3]||(a[3]=o=>s(g).repositoryAddress=o),placeholder:e.$t("enterRepositoryAddress"),clearable:"",onKeyup:X(U,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:e.$t("domain"),prop:"domain"},{default:i(()=>[l(r,{modelValue:s(g).domain,"onUpdate:modelValue":a[4]||(a[4]=o=>s(g).domain=o),placeholder:e.$t("enterDomain"),clearable:"",onKeyup:X(U,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,null,{default:i(()=>[l(y,{type:"primary",icon:"Search",onClick:U},{default:i(()=>[c(m(e.$t("search")),1)]),_:1}),l(y,{icon:"Refresh",onClick:lt},{default:i(()=>[c(m(e.$t("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[Se,le.value]])]),_:1},8,["enter-active-class","leave-active-class"]),l(Re,{shadow:"never"},{header:i(()=>[l(yt,{gutter:10,class:"mb8"},{default:i(()=>[l(fe,{span:1.5},{default:i(()=>[V((v(),$(y,{type:"primary",plain:"",icon:"Plus",onClick:Ve},{default:i(()=>[c(m(e.$t("addSite")),1)]),_:1})),[[L,["vpadmin:project:add"]]])]),_:1}),l(fe,{span:1}),l(fe,{span:12},{default:i(()=>[oe.value&&S.value?(v(),$(pl,{key:0,percent:S.value.percent,message:S.value.message,"deploy-history-id":S.value.deployHistoryId,onBuildFailed:Ze,onBuildSuccess:Qe},null,8,["percent","message","deploy-history-id"])):w("",!0)]),_:1}),l($t,{showSearch:le.value,"onUpdate:showSearch":a[5]||(a[5]=o=>le.value=o),onQueryTable:k},null,8,["showSearch"])]),_:1})]),default:i(()=>[V((v(),$(_t,{data:ee.value,onSelectionChange:at},{default:i(()=>[l(j,{label:e.$t("projectName"),align:"center",prop:"projectName"},null,8,["label"]),l(j,{label:e.$t("repositoryType"),align:"center",prop:"repType"},{default:i(o=>[l(q,{options:s(z),value:o.row.repType},null,8,["options","value"])]),_:1},8,["label"]),l(j,{label:e.$t("themeType"),align:"center",prop:"themeId"},{default:i(o=>[c(m(de(o.row.themeId)),1)]),_:1},8,["label"]),l(j,{label:e.$t("username"),align:"center",prop:"userName"},null,8,["label"]),l(j,{label:e.$t("repositoryAddress"),align:"center",prop:"repositoryAddress"},null,8,["label"]),l(j,{label:e.$t("adminBackend"),align:"center",prop:"isAdmin"},{default:i(o=>[l(q,{options:s(Y),value:o.row.isAdmin},null,8,["options","value"])]),_:1},8,["label"]),l(j,{label:e.$t("domain"),align:"center",prop:"domain"},null,8,["label"]),l(j,{label:e.$t("operations"),align:"center","class-name":"small-padding fixed-width action-cell",width:"180px"},{default:i(o=>[N("div",_l,[l(D,{content:e.$t("details"),placement:"top"},{default:i(()=>[V(l(y,{link:"",type:"primary",icon:"View",onClick:be=>st(o.row)},null,8,["onClick"]),[[L,["vpadmin:project:query"]]])]),_:2},1032,["content"]),l(D,{content:e.$t("edit"),placement:"top"},{default:i(()=>[V(l(y,{link:"",type:"primary",icon:"Edit",onClick:be=>ot(o.row)},null,8,["onClick"]),[[L,["vpadmin:project:edit"]]])]),_:2},1032,["content"]),o.row.remark?(v(),$(D,{key:0,content:o.row.remark,placement:"top"},{default:i(()=>[l(y,{link:"",type:"primary",icon:"Link",onClick:be=>bt(o.row.remark)},null,8,["onClick"])]),_:2},1032,["content"])):w("",!0),l(D,{content:e.$t("delete"),placement:"top"},{default:i(()=>[V(l(y,{link:"",type:"primary",icon:"Delete",onClick:be=>dt(o.row)},null,8,["onClick"]),[[L,["vpadmin:project:remove"]]])]),_:2},1032,["content"]),V(l(cl,{"payment-platform":"ko-fi","payment-type":"donation","iframe-url":"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true","payment-name":o.row.projectName,"project-id":o.row.id,size:"small","plan-expired":o.row.planExpired,style:{"margin-left":"5px"},onPaymentSuccess:pt,onPaymentCancelled:ct},null,8,["payment-name","project-id","plan-expired"]),[[L,["vpadmin:paymentLog:add"]]])])]),_:1},8,["label"])]),_:1},8,["data"])),[[Rt,te.value]]),V(l(wt,{page:s(g).pageNum,"onUpdate:page":a[6]||(a[6]=o=>s(g).pageNum=o),limit:s(g).pageSize,"onUpdate:limit":a[7]||(a[7]=o=>s(g).pageSize=o),total:ae.value,onPagination:ce},null,8,["page","limit","total"]),[[Se,ae.value>0]])]),_:1}),h.visible?(v(),$(W,{key:0,modelValue:h.visible,"onUpdate:modelValue":a[14]||(a[14]=o=>h.visible=o),title:h.title,width:"600px","append-to-body":"","before-close":et},{footer:i(()=>[N("div",Vl,[l(y,{loading:T.value,type:"primary",onClick:rt},{default:i(()=>[c(m(e.$t("confirm")),1)]),_:1},8,["loading"]),l(y,{disabled:T.value,onClick:je},{default:i(()=>[c(m(e.$t("cancel")),1)]),_:1},8,["disabled"])])]),default:i(()=>[l(ve,{ref_key:"projectFormRef",ref:A,model:s(n),rules:s(me),"label-width":"150px"},{default:i(()=>[l(d,{label:e.$t("repositoryType"),prop:"repType"},{default:i(()=>[l(Le,{"show-github-button":ie.value,"show-gitlab-button":ne.value,"is-binding-disabled":H.value,"is-edit":!1,"github-button-text":I.value,"gitlab-button-text":B.value,"project-id":s(n).id,"is-full-control":s(n).isFullControl,onBindInitiated:vt,onBindResult:Ee},null,8,["show-github-button","show-gitlab-button","is-binding-disabled","github-button-text","gitlab-button-text","project-id","is-full-control"])]),_:1},8,["label"]),l(d,{label:e.$t("projectName"),prop:"projectName"},{default:i(()=>[l(r,{ref_key:"projectNameInput",ref:se,modelValue:s(n).projectName,"onUpdate:modelValue":a[8]||(a[8]=o=>s(n).projectName=o),placeholder:e.$t("enterProjectName"),disabled:!H.value,onInput:gt},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),l(d,{label:e.$t("themeType"),prop:"themeId"},{default:i(()=>[N("div",wl,[l(M,{modelValue:s(n).themeId,"onUpdate:modelValue":a[9]||(a[9]=o=>s(n).themeId=o),placeholder:e.$t("pleaseSelectThemeType"),filterable:"","filter-method":Ne,"remote-method":Ne},{default:i(()=>[(v(!0),C(ge,null,he(O.value,o=>(v(),$(R,{key:o.themeId,label:we(o),value:o.themeId},{default:i(()=>[N("span",Nl,[N("span",Tl,m(o.themeName),1),re(o.tags).length?(v(),C("span",jl," ["+m(re(o.tags).join(","))+"] ",1)):w("",!0),o.demoUrl?(v(),$(Tt,{key:1,type:"primary",href:o.demoUrl,target:"_blank",class:"theme-demo-link"},{default:i(()=>[l(Nt,null,{default:i(()=>[l(s(Ut))]),_:1})]),_:2},1032,["href"])):w("",!0)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),l(D,{content:e.$t("navbar.themes"),effect:"dark",placement:"bottom"},{default:i(()=>[l(jt,{"icon-class":"theme",onClick:ht})]),_:1},8,["content"])])]),_:1},8,["label"]),l(d,{label:e.$t("username"),prop:"userName"},{default:i(()=>[l(r,{modelValue:s(n).userName,"onUpdate:modelValue":a[10]||(a[10]=o=>s(n).userName=o),placeholder:e.$t("enterUsername"),disabled:!0},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:e.$t("repositoryAddress"),prop:"repositoryAddress"},{default:i(()=>[l(r,{modelValue:s(n).repositoryAddress,"onUpdate:modelValue":a[11]||(a[11]=o=>s(n).repositoryAddress=o),placeholder:e.$t("enterRepositoryAddress"),disabled:!0},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(d,{label:e.$t("adminBackend"),prop:"isAdmin"},{default:i(()=>[l(kt,{modelValue:s(n).isAdmin,"onUpdate:modelValue":a[12]||(a[12]=o=>s(n).isAdmin=o),onChange:pe},{default:i(()=>[(v(!0),C(ge,null,he(s(Y),o=>(v(),$(Vt,{key:o.value,value:o.value},{default:i(()=>[c(m(o.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(d,{label:e.$t("domain"),prop:"domain",class:qt({"required-field":s(n).isAdmin==="Y","optional-field":s(n).isAdmin==="N"})},{default:i(()=>[l(r,{modelValue:s(n).domain,"onUpdate:modelValue":a[13]||(a[13]=o=>s(n).domain=o),placeholder:s(n).isAdmin==="Y"?e.$t("domainPlaceholderRequired"):e.$t("domainPlaceholderOptional")},null,8,["modelValue","placeholder"])]),_:1},8,["label","class"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])):w("",!0),l(W,{modelValue:f.visible,"onUpdate:modelValue":a[15]||(a[15]=o=>f.visible=o),title:e.$t("projectDetails"),width:"600px","append-to-body":""},{default:i(()=>[l(At,{column:1,border:""},{default:i(()=>[l(_,{label:e.$t("projectName")},{default:i(()=>[c(m(f.data.projectName),1)]),_:1},8,["label"]),l(_,{label:e.$t("repositoryType")},{default:i(()=>[l(q,{options:s(z),value:f.data.repType},null,8,["options","value"])]),_:1},8,["label"]),l(_,{label:e.$t("themeType")},{default:i(()=>[c(m(de(f.data.themeId)),1)]),_:1},8,["label"]),l(_,{label:e.$t("username")},{default:i(()=>[c(m(f.data.userName),1)]),_:1},8,["label"]),l(_,{label:e.$t("repositoryAddress")},{default:i(()=>[c(m(f.data.repositoryAddress),1)]),_:1},8,["label"]),l(_,{label:e.$t("adminBackend")},{default:i(()=>[l(q,{options:s(Y),value:f.data.isAdmin},null,8,["options","value"])]),_:1},8,["label"]),l(_,{label:e.$t("domain")},{default:i(()=>[c(m(f.data.domain),1)]),_:1},8,["label"]),f.data.clientId?(v(),$(_,{key:0,label:e.$t("clientId")},{default:i(()=>[c(m(f.data.clientId),1)]),_:1},8,["label"])):w("",!0),f.data.planType?(v(),$(_,{key:1,label:e.$t("planType")},{default:i(()=>[c(m(f.data.planType),1)]),_:1},8,["label"])):w("",!0),f.data.startTime?(v(),$(_,{key:2,label:e.$t("startTime")},{default:i(()=>[c(m(f.data.startTime),1)]),_:1},8,["label"])):w("",!0),f.data.endTime?(v(),$(_,{key:3,label:e.$t("endTime")},{default:i(()=>[c(m(f.data.endTime),1)]),_:1},8,["label"])):w("",!0)]),_:1})]),_:1},8,["modelValue","title"]),l(W,{modelValue:E.visible,"onUpdate:modelValue":a[20]||(a[20]=o=>E.visible=o),title:E.title,width:"600px","append-to-body":""},{footer:i(()=>[N("div",Al,[l(y,{loading:T.value,type:"primary",onClick:it},{default:i(()=>[c(m(e.$t("confirm")),1)]),_:1},8,["loading"]),l(y,{onClick:ke},{default:i(()=>[c(m(e.$t("cancel")),1)]),_:1})])]),default:i(()=>[l(ve,{ref_key:"editFormRef",ref:Te,model:p.value,rules:Je,"label-width":"150px"},{default:i(()=>[l(d,{label:e.$t("repositoryType"),prop:"repType"},{default:i(()=>[l(Le,{"show-github-button":p.value.repType==="1","show-gitlab-button":p.value.repType==="2","is-binding-disabled":!1,"is-edit":!0,"github-button-text":I.value,"gitlab-button-text":B.value,"project-id":p.value.id,"is-full-control":p.value.isFullControl,onBindInitiated:ft,onBindResult:Ee},null,8,["show-github-button","show-gitlab-button","github-button-text","gitlab-button-text","project-id","is-full-control"]),p.value.repType!=="1"&&p.value.repType!=="2"?(v(),C("span",kl,m(nt(p.value.repType)),1)):w("",!0)]),_:1},8,["label"]),l(d,{label:e.$t("projectName"),prop:"projectName"},{default:i(()=>[l(r,{modelValue:p.value.projectName,"onUpdate:modelValue":a[16]||(a[16]=o=>p.value.projectName=o),disabled:""},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:e.$t("themeType"),prop:"themeId"},{default:i(()=>[c(m(de(p.value.themeId)),1)]),_:1},8,["label"]),l(d,{label:e.$t("username"),prop:"userName"},{default:i(()=>[l(r,{modelValue:p.value.userName,"onUpdate:modelValue":a[17]||(a[17]=o=>p.value.userName=o),disabled:""},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:e.$t("repositoryAddress"),prop:"repositoryAddress"},{default:i(()=>[l(r,{modelValue:p.value.repositoryAddress,"onUpdate:modelValue":a[18]||(a[18]=o=>p.value.repositoryAddress=o),disabled:""},null,8,["modelValue"])]),_:1},8,["label"]),l(d,{label:e.$t("adminBackend")},{default:i(()=>[l(q,{options:s(Y),value:p.value.isAdmin,disabled:""},null,8,["options","value"])]),_:1},8,["label"]),l(d,{label:e.$t("domain"),prop:"domain"},{default:i(()=>[l(r,{modelValue:p.value.domain,"onUpdate:modelValue":a[19]||(a[19]=o=>p.value.domain=o),placeholder:s(n).isAdmin==="Y"?e.$t("domainPlaceholderRequired"):e.$t("domainPlaceholderOptional")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(W,{modelValue:b.visible,"onUpdate:modelValue":a[23]||(a[23]=o=>b.visible=o),title:e.$t("confirmDelete"),width:"300px",onOpen:ut},{footer:i(()=>[N("div",Rl,[l(y,{onClick:a[22]||(a[22]=o=>b.visible=!1)},{default:i(()=>[c(m(e.$t("cancel")),1)]),_:1}),l(y,{loading:b.buttonLoading,type:"primary",onClick:mt},{default:i(()=>[c(m(e.$t("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[N("div",null,m(e.$t("confirmDeleteProject",{name:b.projectData.projectName})),1),s(ue)?(v(),$(Et,{key:0,modelValue:b.deleteRemote,"onUpdate:modelValue":a[21]||(a[21]=o=>b.deleteRemote=o),class:"mt-3"},{default:i(()=>[N("span",El,m(e.$t("deleteRemoteRepositoryAndWebsite")),1)]),_:1},8,["modelValue"])):w("",!0)]),_:1},8,["modelValue","title"])])}}}),ma=Mt(Pl,[["__scopeId","data-v-ff3736fb"]]);export{ma as default};
