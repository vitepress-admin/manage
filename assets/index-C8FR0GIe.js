import{d as $e,u as rl,aa as pe,r as p,ab as X,cU as nl,k as ce,c4 as dl,b as ul,ah as fe,o as i,c as q,p as s,q as o,ag as il,e as t,w as N,m as w,I as A,F as K,z as M,A as f,af as ve,y as _,t as g,U as ge,i as h,C as O,a1 as ml,n as be,T as _e,av as he,S as pl,P as cl,Q as fl,x as vl,ap as gl,ac as bl,B as _l,R as hl,v as $l}from"./index-CdPu8FRl.js";import{E as wl}from"./el-progress-CXqpuEJn.js";import{E as Il}from"./el-link-DJR0DUkW.js";import{E as Vl}from"./el-checkbox-C5ut494c.js";import{_ as kl}from"./upload-filled-CwHpGSpt.js";/* empty css                  *//* empty css                       *//* empty css                 */import{_ as yl}from"./index-BhGqHtUp.js";import{E as El,a as Ul}from"./el-table-column-CPT9Ic5A.js";/* empty css               */import{_ as Nl}from"./index-ZPFBMm7s.js";/* empty css               *//* empty css                */import{E as Rl,a as jl}from"./el-form-item-BqG-UiNm.js";import{E as Cl}from"./el-date-picker-DLbxE37V.js";import{b as R}from"./index-C7Txu8LR.js";import{g as Sl}from"./edit-bQK0r1Rx.js";import{E as Pl}from"./index-BQG-09Wq.js";import{E as Dl}from"./index-DtY0sIVM.js";import{E as Tl}from"./index-Djjey7LB.js";import{E as Fl,a as ql}from"./index-YmoUQ20O.js";import"./index-HmPJLMBi.js";import"./_baseClone-BdiPk6Ag.js";import"./_initCloneObject-C9ul_ggi.js";/* empty css                */import"./index-CsPv2Jh3.js";import"./index-CGqgAbOP.js";const Ll={class:"p-2"},Bl={class:"mb-[10px]"},Al={class:"text-gray-400 text-sm ml-2"},Kl={class:"dialog-footer"},Ml={class:"el-upload__text"},Ol={class:"text-center el-upload__tip"},zl={class:"el-upload__tip"},Hl={class:"dialog-footer"},Ql=$e({name:"User"}),Va=$e({...Ql,setup(Yl){rl();const{proxy:l}=ml(),{sys_normal_disable:x,sys_user_sex:Zl}=pe(l==null?void 0:l.useDict("sys_normal_disable","sys_user_sex")),ee=p(),z=p(!0),L=p(!0),le=p([]);p(!0),p(!0);const H=p(0),T=p(["",""]),we=p("");p([]);const ae=p(""),te=p([]),Q=p([]),I=p([]),V=p(!1),b=X({open:!1,title:"",isUploading:!1,updateSupport:0,headers:nl(),url:"https://api.vpadmin.org/prod-api/system/user/importData"}),S=p([{key:0,label:"userId",visible:!0,children:[]},{key:1,label:"username",visible:!0,children:[]},{key:2,label:"nickname",visible:!0,children:[]},{key:3,label:"department",visible:!0,children:[]},{key:4,label:"phoneNumber",visible:!0,children:[]},{key:5,label:"status",visible:!0,children:[]},{key:6,label:"creationTime",visible:!0,children:[]}]),se=p(),oe=p(),U=p(),Y=p(),Ie=p(),k=X({visible:!1,title:"",isEdit:!1}),re={userId:void 0,deptId:void 0,userName:"",nickName:void 0,password:"",phonenumber:void 0,email:void 0,sex:void 0,status:"0",remark:"",postIds:[],roleIds:[],projectIds:[]},Ve=ce(()=>r.value.roleIds.includes(6)?I.value.filter(e=>e.clientId):I.value),ke=e=>!!e&&e!=="null"&&e!=="undefined",Z=e=>e.filter(a=>ke(a.clientId)),ye=ce(()=>!r.value.roleIds.includes(7)||r.value.roleIds.length>1),Ee=async e=>{var a;(a=U.value)==null||a.clearValidate("projectIds"),e.length===1&&e[0]===7?(V.value=!0,await be(),r.value.projectIds=[],r.value.clientIds=[]):e.includes(6)?V.value=!1:(V.value=!1,r.value.projectIds.length===I.value.length&&(r.value.projectIds=[],r.value.clientIds=[]))},Ue=e=>{V.value||(r.value.clientIds=I.value.filter(a=>e.includes(a.id)&&a.clientId&&a.clientId!=="null"&&a.clientId!=="undefined").map(a=>a.clientId))},Ne=(e,a,u)=>{/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(a)?u():u(new Error(l==null?void 0:l.$t("passwordRequirements")))},Re={form:{...re},queryParams:{pageNum:1,pageSize:10,userName:"",status:"",deptId:"",roleId:""},rules:{userName:[{required:!0,message:l==null?void 0:l.$t("usernameRequired"),trigger:"blur"},{min:2,max:20,message:l==null?void 0:l.$t("usernameLengthError"),trigger:"blur"}],nickName:[{required:!0,message:l==null?void 0:l.$t("nicknameRequired"),trigger:"blur"}],password:[{required:!0,message:l==null?void 0:l.$t("passwordRequired"),trigger:"blur"},{validator:Ne,trigger:"blur"}],email:[{required:!0,message:l==null?void 0:l.$t("emailRequired"),trigger:"blur"},{type:"email",message:l==null?void 0:l.$t("invalidEmail"),trigger:["blur","change"]}],phonenumber:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:l==null?void 0:l.$t("invalidPhoneNumber"),trigger:"blur"}],roleIds:[{required:!0,message:l==null?void 0:l.$t("userRoleRequired"),trigger:"change",validator:(e,a,u)=>{!a||a.length===0?u(new Error(l==null?void 0:l.$t("userRoleRequired"))):u()}}],projectIds:[{required:!0,message:l==null?void 0:l.$t("projectRequired"),trigger:"change",validator:(e,a,u)=>{!a||a.length===0?u(new Error(l==null?void 0:l.$t("projectRequired"))):u()}}]}},je=X(Re),{queryParams:m,form:r,rules:Ce}=pe(je);dl(()=>{var e;(e=se.value)==null||e.filter(we.value)},{flush:"post"});const j=async()=>{z.value=!0;const e=await R.listVpadminUser(l==null?void 0:l.addDateRange(m.value,T.value));z.value=!1,ee.value=e.rows,H.value=e.total},P=()=>{m.value.pageNum=1,j()},Se=()=>{var e,a;T.value=["",""],(e=oe.value)==null||e.resetFields(),m.value.pageNum=1,m.value.deptId=void 0,m.value.email="",(a=se.value)==null||a.setCurrentKey(void 0),P()},Pe=async e=>{const a=(e==null?void 0:e.userId)||le.value,[u]=await _e(l==null?void 0:l.$modal.confirm(l.$t("confirmDeleteUser")+a+l.$t("dataItem")));u||(await R.delUser(a),await j(),l==null||l.$modal.msgSuccess(l.$t("deleteSuccess")))},De=async e=>{let a=e.status==="0"?l.$t("enable"):l.$t("disable");try{await(l==null?void 0:l.$modal.confirm(l.$t("confirmAction")+a+' "'+e.userName+'" '+l.$t("userConfirmation"))),await R.changeUserStatus(e.userId,e.status),l==null||l.$modal.msgSuccess(a+l.$t("success"))}catch{e.status=e.status==="0"?"1":"0"}},Te=async e=>{const a=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,u=l.$t("passwordRequirements"),[c,v]=await _e(he.prompt(l.$t("pleaseEnter")+e.userName+l.$t("newPasswordFor"),l.$t("prompt"),{confirmButtonText:l.$t("confirm"),cancelButtonText:l.$t("cancel"),closeOnClickModal:!1,inputPattern:a,inputErrorMessage:u}));!c&&v&&(await R.resetUserPwd(e.userId,v.value),l==null||l.$modal.msgSuccess(l.$t("modifySuccessNewPassword")+v.value))},Fe=()=>{l==null||l.download("system/user/exportVpadmin",{...m.value},`user_${new Date().getTime()}.xlsx`)},qe=()=>{l==null||l.download("system/user/importTemplate",{},`user_template_${new Date().getTime()}.xlsx`)},Le=()=>{b.isUploading=!0},Be=(e,a)=>{var u;b.open=!1,b.isUploading=!1,(u=Y.value)==null||u.handleRemove(a),he.alert("<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>"+e.msg+"</div>","导入结果",{dangerouslyUseHTMLString:!0}),j()};function Ae(){var e;(e=Y.value)==null||e.submit()}const G=()=>{var e,a;r.value={...re},V.value=!1,(e=U.value)==null||e.resetFields(),(a=U.value)==null||a.clearValidate()},Ke=()=>{k.visible=!1,G()},Me=async()=>{G();const{data:e}=await R.getUser();await ne(),k.visible=!0,k.title=l.$t("addUser"),te.value=e.posts,Q.value=e.roles,r.value.password=ae.value.toString(),r.value.projectIds=[],r.value.roleIds=[],V.value=!1},Oe=async e=>{var c;G();const a=(e==null?void 0:e.userId)||le.value[0],{data:u}=await R.getUser(a);if(await ne(),(c=U.value)==null||c.clearValidate(),k.visible=!0,k.title=l.$t("editUser"),Object.assign(r.value,u.user),te.value=u.posts,Q.value=u.roles,r.value.postIds=u.postIds,r.value.roleIds=u.roleIds,r.value.clientIds=u.clientIds||[],r.value.password="",V.value=r.value.roleIds.includes(7),await be(),V.value&&(r.value.projectIds=I.value.map(v=>v.id),r.value.clientIds=Z(I.value).map(v=>v.clientId)),r.value.roleIds.includes(6)){const v=Z(I.value);r.value.projectIds=u.projectIds.filter(E=>v.some(J=>J.id===E)),r.value.clientIds=v.filter(E=>r.value.projectIds.includes(E.id)).map(E=>E.clientId)}else r.value.projectIds=u.projectIds,r.value.clientIds=Z(I.value).filter(v=>r.value.projectIds.includes(v.id)).map(v=>v.clientId)},ne=async()=>{const e=await Sl();e.code===200&&(I.value=e.data)},ze=()=>{var e;(e=U.value)==null||e.validate(async a=>{if(I.value.filter(u=>!u.planExpired).length<=0){l==null||l.$modal.msgSuccess(l.$t("noPermissionForPlan"));return}a&&(r.value.userId?await R.updateVpadminUser(r.value):await R.addVpadminUser(r.value),l==null||l.$modal.msgSuccess(l.$t("operationSuccess")),k.visible=!1,await j())})},He=()=>{k.visible=!1,Qe(),V.value=!1},Qe=()=>{var e,a;(e=U.value)==null||e.resetFields(),(a=U.value)==null||a.clearValidate(),r.value.id=void 0,r.value.status="1"};return ul(()=>{j(),l==null||l.getConfigKey("sys.user.initPassword").then(e=>{ae.value=e.data})}),(e,a)=>{const u=pl,c=Rl,v=cl,E=fl,J=Cl,$=vl,de=jl,ue=Pl,y=Dl,Ye=Nl,D=Tl,C=El,Ze=gl,W=bl,Ge=Ul,Je=yl,We=Fl,Xe=ql,ie=_l,xe=kl,el=hl,ll=Vl,al=Il,tl=wl,sl=fe("has-permi"),B=fe("hasPermi"),ol=$l;return i(),q("div",Ll,[s(D,{gutter:20},{default:o(()=>[s(y,{lg:24,xs:24},{default:o(()=>{var n,me;return[s(il,{"enter-active-class":(n=t(l))==null?void 0:n.animate.searchAnimate.enter,"leave-active-class":(me=t(l))==null?void 0:me.animate.searchAnimate.leave},{default:o(()=>[N(w("div",Bl,[s(ue,{shadow:"hover"},{default:o(()=>[s(de,{ref_key:"queryFormRef",ref:oe,model:t(m),inline:!0,"label-width":"auto"},{default:o(()=>[s(c,{label:e.$t("username"),prop:"userName"},{default:o(()=>[s(u,{modelValue:t(m).userName,"onUpdate:modelValue":a[0]||(a[0]=d=>t(m).userName=d),placeholder:e.$t("enterUsername"),clearable:"",onKeyup:A(P,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:e.$t("projectName"),prop:"projectName"},{default:o(()=>[s(u,{modelValue:t(m).projectName,"onUpdate:modelValue":a[1]||(a[1]=d=>t(m).projectName=d),placeholder:e.$t("enterProjectName"),clearable:"",onKeyup:A(P,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:e.$t("email"),prop:"email"},{default:o(()=>[s(u,{modelValue:t(m).email,"onUpdate:modelValue":a[2]||(a[2]=d=>t(m).email=d),placeholder:e.$t("enterEmail"),clearable:"",onKeyup:A(P,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:e.$t("source"),prop:"source"},{default:o(()=>[s(u,{modelValue:t(m).source,"onUpdate:modelValue":a[3]||(a[3]=d=>t(m).source=d),placeholder:e.$t("pleaseEnter"),clearable:"",onKeyup:A(P,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:e.$t("status"),prop:"status"},{default:o(()=>[s(E,{modelValue:t(m).status,"onUpdate:modelValue":a[4]||(a[4]=d=>t(m).status=d),placeholder:e.$t("userStatus"),clearable:""},{default:o(()=>[(i(!0),q(K,null,M(t(x),d=>(i(),f(v,{key:d.value,label:d.label,value:d.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:e.$t("creationTime"),style:{width:"350px"}},{default:o(()=>[s(J,{modelValue:t(T),"onUpdate:modelValue":a[5]||(a[5]=d=>ve(T)?T.value=d:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":e.$t("startDate"),"end-placeholder":e.$t("endDate"),"default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","start-placeholder","end-placeholder","default-time"])]),_:1},8,["label"]),s(c,null,{default:o(()=>[s($,{type:"primary",icon:"Search",onClick:P},{default:o(()=>[_(g(e.$t("search")),1)]),_:1}),s($,{icon:"Refresh",onClick:Se},{default:o(()=>[_(g(e.$t("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[ge,t(L)]])]),_:1},8,["enter-active-class","leave-active-class"]),s(ue,{shadow:"hover"},{header:o(()=>[s(D,{gutter:10},{default:o(()=>[s(y,{span:1.5},{default:o(()=>[N((i(),f($,{type:"primary",plain:"",icon:"Plus",onClick:a[6]||(a[6]=d=>Me())},{default:o(()=>[_(g(e.$t("add")),1)]),_:1})),[[sl,["system:user:add"]]])]),_:1}),s(y,{span:1.5},{default:o(()=>[N((i(),f($,{type:"primary",plain:"",icon:"Download",onClick:Fe},{default:o(()=>[_(g(e.$t("export")),1)]),_:1})),[[B,["vpadmin:project:export"]]])]),_:1}),s(Ye,{showSearch:t(L),"onUpdate:showSearch":a[7]||(a[7]=d=>ve(L)?L.value=d:null),onQueryTable:j},null,8,["showSearch"])]),_:1})]),default:o(()=>[N((i(),f(Ge,{data:t(ee)},{default:o(()=>[t(S)[1].visible?(i(),f(C,{key:"userName",label:e.$t("username"),align:"center",prop:"userName","show-overflow-tooltip":!0},null,8,["label"])):h("",!0),t(S)[3].visible?(i(),f(C,{key:"projectName",label:e.$t("projectName"),align:"center",prop:"projectName","show-overflow-tooltip":!0},null,8,["label"])):h("",!0),t(S)[4].visible?(i(),f(C,{key:"email",label:e.$t("email"),align:"center",prop:"email",width:"200"},null,8,["label"])):h("",!0),t(S)[5].visible?(i(),f(C,{key:"source",label:e.$t("source"),align:"center",prop:"source",width:"100"},null,8,["label"])):h("",!0),t(S)[6].visible?(i(),f(C,{key:"status",label:e.$t("status"),align:"center",width:"90"},{default:o(d=>[s(Ze,{modelValue:d.row.status,"onUpdate:modelValue":F=>d.row.status=F,"active-value":"0","inactive-value":"1",disabled:d.row.source==="vpadmin_user",onChange:F=>De(d.row)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"])):h("",!0),t(S)[6].visible?(i(),f(C,{key:5,label:e.$t("creationTime"),align:"center",prop:"createTime",width:"160"},{default:o(d=>[w("span",null,g(d.row.createTime),1)]),_:1},8,["label"])):h("",!0),s(C,{label:e.$t("operations"),fixed:"right",width:"150","class-name":"small-padding fixed-width"},{default:o(d=>[d.row.userId!==1&&d.row.source==="sys_user"&&(!d.row.roleIds.includes(7)||t(O)().isLeader)?(i(),f(W,{key:0,content:e.$t("edit"),placement:"top"},{default:o(()=>[N(s($,{link:"",type:"primary",icon:"Edit",onClick:F=>Oe(d.row)},null,8,["onClick"]),[[B,["system:user:edit"]]])]),_:2},1032,["content"])):h("",!0),d.row.userId!==1&&(d.row.source==="portal_user"||d.row.source==="sys_user"||t(O)().isLeader)?(i(),f(W,{key:1,content:e.$t("resetPassword"),placement:"top"},{default:o(()=>[N(s($,{link:"",type:"primary",icon:"Key",onClick:F=>Te(d.row)},null,8,["onClick"]),[[B,["system:user:resetPwd"]]])]),_:2},1032,["content"])):h("",!0),d.row.userId!==1&&d.row.source!=="vpadmin_user"?(i(),f(W,{key:2,content:e.$t("delete"),placement:"top"},{default:o(()=>[N(s($,{link:"",type:"primary",icon:"Delete",onClick:F=>Pe(d.row)},null,8,["onClick"]),[[B,["system:user:remove"]]])]),_:2},1032,["content"])):h("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[ol,t(z)]]),N(s(Je,{page:t(m).pageNum,"onUpdate:page":a[8]||(a[8]=d=>t(m).pageNum=d),limit:t(m).pageSize,"onUpdate:limit":a[9]||(a[9]=d=>t(m).pageSize=d),total:t(H),onPagination:j},null,8,["page","limit","total"]),[[ge,t(H)>0]])]),_:1})]}),_:1})]),_:1}),s(ie,{ref_key:"formDialogRef",ref:Ie,modelValue:t(k).visible,"onUpdate:modelValue":a[18]||(a[18]=n=>t(k).visible=n),title:t(k).title,width:"800px","append-to-body":"",onClose:He},{footer:o(()=>[w("div",Kl,[s($,{type:"primary",onClick:ze},{default:o(()=>[_(g(e.$t("confirm")),1)]),_:1}),s($,{onClick:a[17]||(a[17]=n=>Ke())},{default:o(()=>[_(g(e.$t("cancel")),1)]),_:1})])]),default:o(()=>[s(de,{ref_key:"userFormRef",ref:U,model:t(r),rules:t(Ce),"label-width":"100px"},{default:o(()=>[s(D,null,{default:o(()=>[s(y,{span:12},{default:o(()=>[s(c,{label:e.$t("nickname"),prop:"nickName"},{default:o(()=>[s(u,{modelValue:t(r).nickName,"onUpdate:modelValue":a[10]||(a[10]=n=>t(r).nickName=n),placeholder:e.$t("enterNickname"),maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),s(y,{span:12},{default:o(()=>[s(c,{label:e.$t("email"),prop:"email"},{default:o(()=>[s(u,{modelValue:t(r).email,"onUpdate:modelValue":a[11]||(a[11]=n=>t(r).email=n),placeholder:e.$t("enterEmail"),maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),s(D,null,{default:o(()=>[s(y,{span:12},{default:o(()=>[t(r).userId==null?(i(),f(c,{key:0,label:e.$t("username"),prop:"userName"},{default:o(()=>[s(u,{modelValue:t(r).userName,"onUpdate:modelValue":a[12]||(a[12]=n=>t(r).userName=n),placeholder:e.$t("enterUsername"),maxlength:"30",autocomplete:"off","auto-complete":"off",readonly:!1,"data-form-type":"other"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):h("",!0)]),_:1}),s(y,{span:12},{default:o(()=>[t(r).userId==null?(i(),f(c,{key:0,label:e.$t("password"),prop:"password"},{default:o(()=>[s(u,{modelValue:t(r).password,"onUpdate:modelValue":a[13]||(a[13]=n=>t(r).password=n),placeholder:e.$t("enterPassword"),type:"password",maxlength:"20","show-password":"",autocomplete:"new-password","auto-complete":"off",readonly:!1,"data-form-type":"other"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):h("",!0)]),_:1})]),_:1}),s(D,null,{default:o(()=>[s(y,{span:12},{default:o(()=>[s(c,{label:e.$t("status")},{default:o(()=>[s(Xe,{modelValue:t(r).status,"onUpdate:modelValue":a[14]||(a[14]=n=>t(r).status=n)},{default:o(()=>[(i(!0),q(K,null,M(t(x),n=>(i(),f(We,{key:n.value,value:n.value},{default:o(()=>[_(g(n.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),s(y,{span:12},{default:o(()=>[s(c,{label:e.$t("role"),prop:"roleIds"},{default:o(()=>[s(E,{modelValue:t(r).roleIds,"onUpdate:modelValue":a[15]||(a[15]=n=>t(r).roleIds=n),multiple:"",filterable:"",placeholder:e.$t("pleaseSelect"),onChange:Ee},{default:o(()=>[(i(!0),q(K,null,M(t(Q),n=>(i(),f(v,{key:n.roleId,label:n.roleName,value:n.roleId,disabled:n.status=="1"||!t(O)().isLeader&&n.roleId===7},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),s(D,null,{default:o(()=>[s(y,{span:24},{default:o(()=>[t(ye)?(i(),f(c,{key:0,label:e.$t("project"),prop:"projectIds"},{default:o(()=>[s(E,{modelValue:t(r).projectIds,"onUpdate:modelValue":a[16]||(a[16]=n=>t(r).projectIds=n),filterable:"",multiple:"",placeholder:e.$t("pleaseSelect"),disabled:t(V)&&!t(O)().isLeader,class:"w-full",onChange:Ue},{default:o(()=>[(i(!0),q(K,null,M(t(Ve),n=>(i(),f(v,{key:n.id,label:n.projectName,value:n.id,disabled:n.planExpired},{default:o(()=>[w("span",null,g(n.projectName),1),w("span",Al,"("+g(n.planType)+")",1)]),_:2},1032,["label","value","disabled"]))),128))]),_:1},8,["modelValue","placeholder","disabled"])]),_:1},8,["label"])):h("",!0)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),s(ie,{modelValue:t(b).open,"onUpdate:modelValue":a[21]||(a[21]=n=>t(b).open=n),title:t(b).title,width:"400px","append-to-body":""},{footer:o(()=>[w("div",Hl,[s($,{type:"primary",onClick:Ae},{default:o(()=>[_(g(e.$t("confirm")),1)]),_:1}),s($,{onClick:a[20]||(a[20]=n=>t(b).open=!1)},{default:o(()=>[_(g(e.$t("cancel")),1)]),_:1})])]),default:o(()=>[s(tl,{ref_key:"uploadRef",ref:Y,limit:1,accept:".xlsx, .xls",headers:t(b).headers,action:t(b).url+"?updateSupport="+t(b).updateSupport,disabled:t(b).isUploading,"on-progress":Le,"on-success":Be,"auto-upload":!1,drag:""},{tip:o(()=>[w("div",Ol,[w("div",zl,[s(ll,{modelValue:t(b).updateSupport,"onUpdate:modelValue":a[19]||(a[19]=n=>t(b).updateSupport=n)},null,8,["modelValue"]),_(g(e.$t("updateExistingUsers")),1)]),w("span",null,g(e.$t("importFileTypes")),1),s(al,{type:"primary",underline:!1,style:{"font-size":"12px","vertical-align":"baseline"},onClick:qe},{default:o(()=>[_(g(e.$t("downloadTemplate")),1)]),_:1})])]),default:o(()=>[s(el,{class:"el-icon--upload"},{default:o(()=>[s(xe)]),_:1}),w("div",Ml,[_(g(e.$t("dragFileHere")),1),w("em",null,g(e.$t("clickToUpload")),1)])]),_:1},8,["headers","action","disabled"])]),_:1},8,["modelValue","title"])])}}});export{Va as default};
