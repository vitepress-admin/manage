import{d as Z,r as i,c4 as we,A as U,q as n,e as l,af as F,B as Ie,o as y,m as A,p as t,y as C,c as M,ag as ke,w as L,U as P,I as j,t as G,F as ye,z as be,i as H,a1 as Ne,S as Se,x as Ee,ae as Ce,v as Te}from"./index-CvOCUbz8.js";/* empty css                  */import{_ as xe}from"./index-C7BmbIHG.js";import{a as D,E as Ve}from"./el-table-column-DcjqO3jE.js";import"./el-checkbox-CUJrHLxp.js";/* empty css               */import{_ as Re}from"./index-D4IXAjRi.js";import{E as Ue,a as Le}from"./el-form-item-CC3-843t.js";/* empty css               *//* empty css                */import{l as J,o as W,d as Be}from"./index-DNPnWet1.js";import{f as X,h as Fe,i as Ae,j as Me}from"./index-ZBsg4KGM.js";import{E as Y}from"./index-D8P39wcU.js";import{E as De}from"./index-zyKbbzCE.js";import{E as ze}from"./index-Cn-jhugM.js";import{E as Ke}from"./index-BrYv1yqp.js";const $e={key:0,class:"p-2"},qe={class:"search"},Qe={key:1,class:"p-2"},Oe={class:"dialog-footer"},Pe=Z({name:"User"}),ia=Z({...Pe,props:{width:{type:String,default:"70%"},height:{type:String,default:"100%"},title:{type:String,default:"加签人员"},multiple:{type:Boolean,default:!0},userIdList:{type:Array,default:()=>[]}},emits:["submitCallback"],setup(T,{expose:ee,emit:ae}){const{proxy:_}=Ne(),te=T,B=i(Y),f=i(D),w=i(),z=i(),p=i(!0),x=i(!0),I=i(),g=i(!1),V=i(0),R=i(""),b=i([]),r=i(i()),v=i([]),E=i(""),o=i({pageNum:1,pageSize:10,userName:"",nickName:"",taskId:""}),K=async(a,e)=>{b.value=[],re(),E.value="add",v.value=e,g.value=!0,o.value.taskId=a,p.value=!0;const s=await X(a);o.value.excludeUserIds=s.data;const u=await J(o.value);if(p.value=!1,w.value=u.rows,V.value=u.total,w.value&&v.value.length>0){const c=await W(v.value);c.data&&c.data.length>0&&(r.value=c.data,c.data.forEach(m=>{f.value.toggleRowSelection(w.value.find(S=>S.userId==m.userId),!0)}))}},le=async()=>{p.value=!0;const a=await X(o.value.taskId);o.value.excludeUserIds=a.data;const e=await J(o.value);if(p.value=!1,w.value=e.rows,V.value=e.total,w.value&&v.value.length>0){const s=await W(v.value);s.data&&s.data.length>0&&(r.value=s.data,s.data.forEach(u=>{f.value.toggleRowSelection(w.value.find(c=>c.userId==u.userId),!0)}))}},oe=async a=>{b.value=[],p.value=!0,o.value.taskId=a,E.value="delete",g.value=!0;const e=await Fe(a);z.value=e.data,p.value=!1},N=()=>{o.value.pageNum=1,K(o.value.taskId,v.value)},ne=()=>{o.value.pageNum=1,o.value.deptId=void 0,o.value.userName=void 0,o.value.nickName=void 0,B.value.setCurrentKey(null),N()},se=a=>{if(te.multiple)r.value=a.filter((e,s,u)=>u.findIndex(c=>c.userId===e.userId)===s),a.forEach(e=>{r.value&&!r.value.includes(e)&&f.value.toggleRowSelection(e,void 0)}),v.value=r.value.map(e=>e.userId);else{if(r.value=a,a.length>1){let e=a.shift();f.value.toggleRowSelection(e,void 0)}a.length===0&&(r.value=[])}},ue=a=>{I.value=a},re=async()=>{const a=await Be();b.value=a.data},ie=(a,e)=>a?e.label.indexOf(a)!==-1:!0;we(()=>{g.value&&b.value&&b.value.length>0&&B.value.filter(R.value)},{flush:"post"});const de=a=>{o.value.deptId=a.id,le()},ce=(a,e)=>{f.value.selection&&f.value.selection.length>0&&f.value.selection.forEach((s,u)=>{a.userId===s.userId&&f.value.selection.splice(u,1)}),r.value&&r.value.length>0&&r.value.splice(e,1),f.value.toggleRowSelection(a,void 0),v.value&&v.value.length>0&&v.value.forEach((s,u)=>{s===a.userId&&v.value.splice(u,1)})},me=async()=>{if(E.value==="add"){if(r.value&&r.value.length>0){p.value=!0;let a=r.value.map(u=>u.userId),e=r.value.map(u=>u.nickName),s={taskId:o.value.taskId,assignees:a,assigneeNames:e};await Ae(s),$("submitCallback"),p.value=!1,_==null||_.$modal.msgSuccess("操作成功"),g.value=!1}}else if(I.value&&I.value.length>0){p.value=!0;let a=I.value.map(m=>m.id),e=I.value.map(m=>m.executionId),s=I.value.map(m=>m.assignee),u=I.value.map(m=>m.assigneeName),c={taskId:o.value.taskId,taskIds:a,executionIds:e,assigneeIds:s,assigneeNames:u};await Me(c),$("submitCallback"),p.value=!1,_==null||_.$modal.msgSuccess("操作成功"),g.value=!1}},$=ae;return ee({getAddMultiInstanceList:K,getDeleteMultiInstanceList:oe}),(a,e)=>{const s=Se,u=De,c=ze,m=Ue,S=Ee,pe=Le,ve=Re,q=Ke,h=Ve,fe=xe,ge=Ce,he=Ie,Q=Te;return y(),U(he,{modelValue:l(g),"onUpdate:modelValue":e[7]||(e[7]=k=>F(g)?g.value=k:null),draggable:"",title:T.title,width:T.width,height:T.height,"append-to-body":"","close-on-click-modal":!1},{footer:n(()=>[A("div",Oe,[t(S,{type:"primary",onClick:me},{default:n(()=>e[10]||(e[10]=[C("确 定")])),_:1}),t(S,{onClick:e[6]||(e[6]=k=>g.value=!1)},{default:n(()=>e[11]||(e[11]=[C("取 消")])),_:1})])]),default:n(()=>[l(E)==="add"?(y(),M("div",$e,[t(q,{gutter:20},{default:n(()=>[t(c,{lg:4,xs:24,style:{}},{default:n(()=>[t(u,{shadow:"hover"},{default:n(()=>[t(s,{modelValue:l(R),"onUpdate:modelValue":e[0]||(e[0]=k=>F(R)?R.value=k:null),placeholder:"请输入部门名称","prefix-icon":"Search",clearable:""},null,8,["modelValue"]),t(l(Y),{ref_key:"deptTreeRef",ref:B,class:"mt-2","node-key":"id",data:l(b),props:{label:"label",children:"children"},"expand-on-click-node":!1,"filter-node-method":ie,"highlight-current":"","default-expand-all":"",onNodeClick:de},null,8,["data"])]),_:1})]),_:1}),t(c,{lg:20,xs:24},{default:n(()=>{var k,O;return[t(ke,{"enter-active-class":(k=l(_))==null?void 0:k.animate.searchAnimate.enter,"leave-active-class":(O=l(_))==null?void 0:O.animate.searchAnimate.leave},{default:n(()=>[L(A("div",qe,[t(pe,{ref:"queryFormRef",model:l(o),inline:!0},{default:n(()=>[t(m,{label:"用户名称",prop:"userName"},{default:n(()=>[t(s,{modelValue:l(o).userName,"onUpdate:modelValue":e[1]||(e[1]=d=>l(o).userName=d),placeholder:"请输入用户名称",clearable:"",onKeyup:j(N,["enter"])},null,8,["modelValue"])]),_:1}),t(m,{label:"手机号码",prop:"phonenumber"},{default:n(()=>[t(s,{modelValue:l(o).phonenumber,"onUpdate:modelValue":e[2]||(e[2]=d=>l(o).phonenumber=d),placeholder:"请输入手机号码",clearable:"",onKeyup:j(N,["enter"])},null,8,["modelValue"])]),_:1}),t(m,null,{default:n(()=>[t(S,{type:"primary",icon:"Search",onClick:N},{default:n(()=>e[8]||(e[8]=[C("搜索")])),_:1}),t(S,{icon:"Refresh",onClick:ne},{default:n(()=>e[9]||(e[9]=[C("重置")])),_:1})]),_:1})]),_:1},8,["model"])],512),[[P,l(x)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(u,{shadow:"hover"},{header:n(()=>[t(q,{gutter:10},{default:n(()=>[t(ve,{showSearch:l(x),"onUpdate:showSearch":e[3]||(e[3]=d=>F(x)?x.value=d:null),search:!0,onQueryTable:N},null,8,["showSearch"])]),_:1})]),default:n(()=>[L((y(),U(l(D),{ref_key:"multipleTableRef",ref:f,data:l(w),"row-key":"userId",onSelectionChange:se},{default:n(()=>[t(h,{type:"selection",width:"50",align:"center"}),t(h,{key:"userId",label:"用户编号",align:"center",prop:"userId"}),t(h,{key:"userName",label:"用户名称",align:"center",prop:"userName","show-overflow-tooltip":!0}),t(h,{key:"nickName",label:"用户昵称",align:"center",prop:"nickName","show-overflow-tooltip":!0}),t(h,{key:"phonenumber",label:"手机号码",align:"center",prop:"phonenumber",width:"120"}),t(h,{label:"创建时间",align:"center",prop:"createTime",width:"160"},{default:n(d=>[A("span",null,G(d.row.createTime),1)]),_:1})]),_:1},8,["data"])),[[Q,l(p)]]),L(t(fe,{page:l(o).pageNum,"onUpdate:page":e[4]||(e[4]=d=>l(o).pageNum=d),limit:l(o).pageSize,"onUpdate:limit":e[5]||(e[5]=d=>l(o).pageSize=d),total:l(V),onPagination:N},null,8,["page","limit","total"]),[[P,l(V)>0]])]),_:1}),t(u,{shadow:"hover"},{default:n(()=>[(y(!0),M(ye,null,be(l(r),(d,_e)=>(y(),U(ge,{key:d.userId,style:{margin:"2px"},closable:"",onClose:je=>ce(d,_e)},{default:n(()=>[C(G(d.userName),1)]),_:2},1032,["onClose"]))),128))]),_:1})]}),_:1})]),_:1})])):H("",!0),l(E)==="delete"?(y(),M("div",Qe,[L((y(),U(l(D),{data:l(z),onSelectionChange:ue},{default:n(()=>[t(h,{type:"selection",width:"55"}),t(h,{prop:"name",label:"任务名称"}),t(h,{prop:"assigneeName",label:"办理人"})]),_:1},8,["data"])),[[Q,l(p)]])])):H("",!0)]),_:1},8,["modelValue","title","width","height"])}}});export{ia as _};
