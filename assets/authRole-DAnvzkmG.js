import{d as x,a as D,r as i,b as K,o as y,c as L,m as s,p as l,q as n,e as t,w,A as P,t as C,ad as z,U as M,af as S,y as V,n as G,S as H,x as J,v as Q,a1 as W}from"./index-lTSpdEk7.js";import{_ as X}from"./index-DETqQ1Eq.js";import{E as Y,a as Z}from"./el-table-column-CeYldEjN.js";import"./el-checkbox-CFsK3DwU.js";import{E as ee,a as te}from"./el-form-item-BTSOXWOj.js";/* empty css               *//* empty css               */import{u as le,a as oe}from"./index--fjL7-m2.js";import{E as ae}from"./index-CN3IM4O3.js";import{E as ne}from"./index-Bwxu3ZT6.js";import"./_initCloneObject-BdRsYCvt.js";import"./_baseClone-Dll4RBGg.js";const se={class:"p-2"},ie={class:"panel"},re={class:"panel"},ue={style:{"text-align":"center","margin-left":"-120px","margin-top":"30px"}},de=x({name:"AuthRole"}),ye=x({...de,setup(me){const k=D(),{proxy:d}=W(),g=i(!0),v=i(0),m=i(1),p=i(10),E=i([]),_=i([]),r=i({nickName:void 0,userName:"",userId:void 0}),b=i(),T=o=>{var e;o.flag=!o.flag,(e=b.value)==null||e.toggleRowSelection(o,o.flag)},B=o=>{E.value=o.map(e=>e.roleId)},U=o=>String(o.roleId),I=()=>{const o={fullPath:"",hash:"",matched:[],meta:void 0,name:void 0,params:void 0,query:void 0,redirectedFrom:void 0,path:"/system/user"};d==null||d.$tab.closeOpenPage(o)},$=async()=>{const o=r.value.userId,e=E.value.join(",");await le({userId:o,roleIds:e}),d==null||d.$modal.msgSuccess("授权成功"),I()},h=async()=>{const o=k.params&&k.params.userId;if(o){g.value=!0;const e=await oe(o);Object.assign(r.value,e.data.user),Object.assign(_.value,e.data.roles),v.value=_.value.length,await G(()=>{_.value.forEach(u=>{var f;u!=null&&u.flag&&((f=b.value)==null||f.toggleRowSelection(u,!0))})}),g.value=!1}};return K(()=>{h()}),(o,e)=>{const u=H,f=ee,N=ae,j=ne,A=te,c=Y,F=Z,O=X,R=J,q=Q;return y(),L("div",se,[s("div",ie,[e[6]||(e[6]=s("h4",{class:"panel-title"},"基本信息",-1)),l(A,{model:t(r),inline:!0},{default:n(()=>[l(j,{gutter:10},{default:n(()=>[l(N,{span:2.5},{default:n(()=>[l(f,{label:"用户昵称",prop:"nickName"},{default:n(()=>[l(u,{modelValue:t(r).nickName,"onUpdate:modelValue":e[0]||(e[0]=a=>t(r).nickName=a),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),l(N,{span:2.5},{default:n(()=>[l(f,{label:"登录账号",prop:"userName"},{default:n(()=>[l(u,{modelValue:t(r).userName,"onUpdate:modelValue":e[1]||(e[1]=a=>t(r).userName=a),disabled:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),s("div",re,[e[10]||(e[10]=s("h4",{class:"panel-title"},"角色信息",-1)),s("div",null,[w((y(),P(F,{ref_key:"tableRef",ref:b,"row-key":U,data:t(_).slice((t(m)-1)*t(p),t(m)*t(p)),onRowClick:T,onSelectionChange:B},{default:n(()=>[l(c,{label:"序号",width:"55",type:"index",align:"center"},{default:n(a=>[s("span",null,C((t(m)-1)*t(p)+a.$index+1),1)]),_:1}),l(c,{type:"selection","reserve-selection":!0,width:"55"}),l(c,{label:"角色编号",align:"center",prop:"roleId"}),l(c,{label:"角色名称",align:"center",prop:"roleName"}),l(c,{label:"权限字符",align:"center",prop:"roleKey"}),l(c,{label:"创建时间",align:"center",prop:"createTime",width:"180"},{default:n(a=>[s("span",null,C(t(z)(a.row.createTime)),1)]),_:1})]),_:1},8,["data"])),[[q,t(g)]]),w(l(O,{page:t(m),"onUpdate:page":e[2]||(e[2]=a=>S(m)?m.value=a:null),limit:t(p),"onUpdate:limit":e[3]||(e[3]=a=>S(p)?p.value=a:null),total:t(v)},null,8,["page","limit","total"]),[[M,t(v)>0]]),s("div",ue,[l(R,{type:"primary",onClick:e[4]||(e[4]=a=>$())},{default:n(()=>e[7]||(e[7]=[V("提交")])),_:1}),l(R,{onClick:e[5]||(e[5]=a=>I())},{default:n(()=>e[8]||(e[8]=[V("返回")])),_:1})]),e[9]||(e[9]=s("div",null,null,-1))])])])}}});export{ye as default};
