import{a2 as F,d as Q,h as ve,aa as H,r as i,ab as $,k as _e,b as ge,ah as be,o as E,c as he,p as a,q as n,w,m as d,e as o,I as T,af as K,y as D,t as u,U as Y,ag as we,A as O,i as z,a1 as ke,S as $e,x as Ee,ac as De,bW as ye,B as Ne,v as Ve,_ as Se}from"./index-DdehfsnW.js";/* empty css                  */import{_ as Ce}from"./index-r7vyikP2.js";import{E as Re,a as je}from"./el-table-column-Dsg5Vp_i.js";import"./el-checkbox-JZxDgh9t.js";import{_ as Te}from"./index-CPRATAM3.js";/* empty css               */import{_ as Oe}from"./index-BJTIDbFn.js";/* empty css                */import{E as Fe,a as Ue}from"./el-form-item-CzPNEZO6.js";import{E as Be}from"./el-date-picker-ylNojNZO.js";import{E as Le}from"./index-B-VYpg7K.js";import{E as Me}from"./index-CqdJzk-9.js";import"./_initCloneObject-Dt0k-slT.js";/* empty css                */import"./index-DqNpsSnp.js";import"./_baseClone-386GwhBl.js";import"./index-Bk63umjT.js";const Pe=p=>F({url:"/vpadmin/orders/list",method:"get",params:p}),qe=p=>F({url:`/vpadmin/orders/detail/${p}`,method:"get"}),Ie=p=>F({url:"/vpadmin/orders/resend",method:"put",data:p}),Ae={class:"p-2"},He={class:"mb-[10px]"},Ke={class:"json-content"},Ye=Q({name:"Orders"}),ze=Q({...Ye,setup(p){const{t:c}=ve(),{proxy:r}=ke(),{vpa_order_send_email_status:G}=H(r==null?void 0:r.useDict("vpa_order_send_email_status")),U=i([]);i(!1);const y=i(!0),k=i(!0),J=i([]),W=i(!0),X=i(!0),N=i(0),v=i(["",""]),B=i();i();const V=$({visible:!1,title:"订单详情",isEdit:!1}),_=$({visible:!1,title:"确认重新发送邮件",isEdit:!1}),S=i(!1),C=i(null),R=i(""),Z=_e(()=>{try{return JSON.stringify(JSON.parse(R.value),null,2)}catch{return R.value}}),x=async e=>{try{const t=await qe(e.id);t.data&&t.data.rawData?(R.value=t.data.rawData,V.visible=!0):r==null||r.$modal.msgError(c("failedToGetOrderDetails"))}catch(t){console.error(c("errorFetchingOrderDetails"),t),r==null||r.$modal.msgError(c("errorOccurredWhileGettingOrderDetails"))}},ee=e=>{C.value=e,_.visible=!0},ae=async()=>{if(C.value){S.value=!0;try{await Ie({id:C.value.id}),r==null||r.$modal.msgSuccess(c("emailResendSuccess")),_.visible=!1,g()}catch(e){console.error(c("emailResendFailed"),e),r==null||r.$modal.msgError(c("emailResendFailed"))}finally{S.value=!1}}};$({visible:!1,title:"",isEdit:!1});const te=$({form:{...{}},queryParams:{pageNum:1,pageSize:10,id:void 0,orderNo:void 0,email:void 0,projectName:void 0,params:{timestamp:void 0}},rules:{}}),{queryParams:s,form:Ge,rules:Je}=H(te),g=async()=>{y.value=!0,s.value.params={},r==null||r.addDateRange(s.value,v.value,"Timestamp");const e=await Pe(s.value);U.value=e.rows,N.value=e.total,y.value=!1},b=()=>{s.value.pageNum=1,g()},le=()=>{var e;v.value=["",""],(e=B.value)==null||e.resetFields(),b()},oe=e=>{J.value=e.map(t=>t.id),W.value=e.length!=1,X.value=!e.length};return ge(()=>{g()}),(e,t)=>{var I,A;const j=$e,h=Fe,ne=Be,f=Ee,re=Ue,L=Le,se=Oe,ie=Me,m=Re,de=Te,M=De,me=je,ue=Ce,pe=ye,P=Ne,q=be("hasPermi"),ce=Ve;return E(),he("div",Ae,[a(we,{"enter-active-class":(I=o(r))==null?void 0:I.animate.searchAnimate.enter,"leave-active-class":(A=o(r))==null?void 0:A.animate.searchAnimate.leave},{default:n(()=>[w(d("div",He,[a(L,{shadow:"hover"},{default:n(()=>[a(re,{ref_key:"queryFormRef",ref:B,model:o(s),inline:!0,"label-width":"auto"},{default:n(()=>[a(h,{label:e.$t("projectName"),prop:"projectName"},{default:n(()=>[a(j,{modelValue:o(s).projectName,"onUpdate:modelValue":t[0]||(t[0]=l=>o(s).projectName=l),placeholder:e.$t("enterProjectName"),clearable:"",onKeyup:T(b,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,{label:e.$t("orderNo"),prop:"orderNo"},{default:n(()=>[a(j,{modelValue:o(s).orderNo,"onUpdate:modelValue":t[1]||(t[1]=l=>o(s).orderNo=l),placeholder:e.$t("enterOrderNo"),clearable:"",onKeyup:T(b,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,{label:e.$t("orderCreationTime"),style:{width:"380px"}},{default:n(()=>[a(ne,{modelValue:o(v),"onUpdate:modelValue":t[2]||(t[2]=l=>K(v)?v.value=l:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":e.$t("startDate"),"end-placeholder":e.$t("endDate"),"default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","start-placeholder","end-placeholder","default-time"])]),_:1},8,["label"]),a(h,{label:e.$t("customerEmail"),prop:"email"},{default:n(()=>[a(j,{modelValue:o(s).email,"onUpdate:modelValue":t[3]||(t[3]=l=>o(s).email=l),placeholder:e.$t("enterCustomerEmail"),clearable:"",onKeyup:T(b,["enter"])},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,null,{default:n(()=>[a(f,{type:"primary",icon:"Search",onClick:b},{default:n(()=>[D(u(e.$t("search")),1)]),_:1}),a(f,{icon:"Refresh",onClick:le},{default:n(()=>[D(u(e.$t("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[Y,o(k)]])]),_:1},8,["enter-active-class","leave-active-class"]),a(L,{shadow:"never"},{header:n(()=>[a(ie,{gutter:10,class:"mb8"},{default:n(()=>[a(se,{showSearch:o(k),"onUpdate:showSearch":t[4]||(t[4]=l=>K(k)?k.value=l:null),onQueryTable:g},null,8,["showSearch"])]),_:1})]),default:n(()=>[w((E(),O(me,{data:o(U),onSelectionChange:oe},{default:n(()=>[z("",!0),a(m,{label:e.$t("projectName"),align:"center",prop:"projectName"},null,8,["label"]),a(m,{label:e.$t("orderNo"),align:"center",prop:"orderNo"},null,8,["label"]),a(m,{label:e.$t("orderCreationTime"),align:"center",prop:"timestamp",width:"180"},{default:n(l=>[d("span",null,u(e.parseTime(l.row.timestamp)),1)]),_:1},8,["label"]),a(m,{label:e.$t("type"),align:"center",prop:"type"},null,8,["label"]),a(m,{label:e.$t("orderAmount"),align:"center",prop:"amount"},{default:n(l=>[d("span",null,u(l.row.amount)+u(l.row.currency),1)]),_:1},8,["label"]),a(m,{label:e.$t("customerEmail"),align:"center",prop:"email"},null,8,["label"]),a(m,{label:e.$t("emailSendStatus"),align:"center",prop:"status"},{default:n(l=>[a(de,{options:o(G),value:l.row.emailSendStatus},null,8,["options","value"])]),_:1},8,["label"]),a(m,{label:e.$t("orderAdditionalMessage"),align:"center",prop:"message"},null,8,["label"]),a(m,{label:e.$t("operations"),align:"center","class-name":"small-padding fixed-width"},{default:n(l=>[a(M,{content:e.$t("details"),placement:"top"},{default:n(()=>[w(a(f,{link:"",type:"primary",icon:"Document",onClick:fe=>x(l.row)},null,8,["onClick"]),[[q,["vpadmin:orders:query"]]])]),_:2},1032,["content"]),l.row.emailSendStatus!=="1"?(E(),O(M,{key:0,content:e.$t("resendEmail"),placement:"top"},{default:n(()=>[w((E(),O(f,{link:"",type:"warning",onClick:fe=>ee(l.row)},{icon:n(()=>t[10]||(t[10]=[d("svg",{width:"24",height:"24",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M44 24V9H24H4V24V39H24",stroke:"#f5a623","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),d("path",{d:"M44 34L30 34",stroke:"#f5a623","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),d("path",{d:"M39 29L44 34L39 39",stroke:"#f5a623","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),d("path",{d:"M4 9L24 24L44 9",stroke:"#f5a623","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),_:2},1032,["onClick"])),[[q,["vpadmin:orders:edit"]]])]),_:2},1032,["content"])):z("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[ce,o(y)]]),w(a(ue,{page:o(s).pageNum,"onUpdate:page":t[5]||(t[5]=l=>o(s).pageNum=l),limit:o(s).pageSize,"onUpdate:limit":t[6]||(t[6]=l=>o(s).pageSize=l),total:o(N),onPagination:g},null,8,["page","limit","total"]),[[Y,o(N)>0]])]),_:1}),a(P,{modelValue:o(V).visible,"onUpdate:modelValue":t[7]||(t[7]=l=>o(V).visible=l),title:e.$t("orderDetails"),width:"50%"},{default:n(()=>[a(pe,{height:"400px"},{default:n(()=>[d("pre",Ke,u(o(Z)),1)]),_:1})]),_:1},8,["modelValue","title"]),a(P,{modelValue:o(_).visible,"onUpdate:modelValue":t[9]||(t[9]=l=>o(_).visible=l),title:e.$t("confirmResendEmail"),width:"30%"},{footer:n(()=>[a(f,{onClick:t[8]||(t[8]=l=>o(_).visible=!1)},{default:n(()=>[D(u(e.$t("cancel")),1)]),_:1}),a(f,{type:"primary",loading:o(S),onClick:ae},{default:n(()=>[D(u(e.$t("confirm")),1)]),_:1},8,["loading"])]),default:n(()=>[d("span",null,u(e.$t("resendEmailConfirmMessage")),1)]),_:1},8,["modelValue","title"])])}}}),fa=Se(ze,[["__scopeId","data-v-fd6078bf"]]);export{fa as default};
