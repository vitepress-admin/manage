import{a2 as T,d as ie,aa as K,r as _,ab as ae,b as Ee,a0 as Ue,ah as he,o as u,c as C,p as t,q as a,w as b,m as F,e as n,I as ne,F as L,z as R,A as f,y as c,U as oe,ag as qe,af as De,t as Ke,a1 as Fe,S as Le,P as Re,Q as $e,x as Ie,ap as Ne,ac as Pe,R as Be,B as ze,v as Ae}from"./index-CvOCUbz8.js";/* empty css                  *//* empty css                       *//* empty css                 *//* empty css                */import{_ as Qe}from"./index-C7BmbIHG.js";import{E as Oe,a as je}from"./el-table-column-DcjqO3jE.js";import"./el-checkbox-CUJrHLxp.js";import{_ as Ge}from"./index-BpDn-YxV.js";/* empty css               */import{_ as Me}from"./index-D4IXAjRi.js";/* empty css               */import{E as He,a as Je}from"./el-form-item-CC3-843t.js";import{E as We}from"./index-Cn-jhugM.js";import{E as Xe}from"./index-BrYv1yqp.js";import{E as Ye}from"./index-zyKbbzCE.js";import{E as Ze,a as xe}from"./index-C0Krdv9p.js";import"./_initCloneObject-5G3QkxmA.js";/* empty css                */import"./index-D8P39wcU.js";import"./_baseClone-DKr7qPQy.js";const et=r=>T({url:"/system/client/list",method:"get",params:r}),tt=r=>T({url:"/system/client/"+r,method:"get"}),lt=r=>T({url:"/system/client",method:"post",data:r}),at=r=>T({url:"/system/client",method:"put",data:r}),nt=r=>T({url:"/system/client/"+r,method:"delete"});function ot(r,o){return T({url:"/system/client/changeStatus",method:"put",data:{clientId:r,status:o}})}const it={class:"p-2"},st={class:"search"},ut={class:"dialog-footer"},dt=ie({name:"Client"}),Kt=ie({...dt,setup(r){const{proxy:o}=Fe(),{sys_normal_disable:$}=K(o==null?void 0:o.useDict("sys_normal_disable")),{sys_grant_type:Q}=K(o==null?void 0:o.useDict("sys_grant_type")),{sys_device_type:O}=K(o==null?void 0:o.useDict("sys_device_type")),j=_([]),S=_(!1),w=_(!0),E=_(!0),I=_([]),G=_(!0),M=_(!0),N=_(0),H=_(),P=_(),g=ae({visible:!1,title:""}),J={id:void 0,clientId:void 0,clientKey:void 0,clientSecret:void 0,grantTypeList:void 0,deviceType:void 0,activeTimeout:void 0,timeout:void 0,status:void 0},se=ae({form:{...J},queryParams:{pageNum:1,pageSize:10,clientId:void 0,clientKey:void 0,clientSecret:void 0,grantType:void 0,deviceType:void 0,activeTimeout:void 0,timeout:void 0,status:void 0},rules:{id:[{required:!0,message:"id不能为空",trigger:"blur"}],clientId:[{required:!0,message:"客户端id不能为空",trigger:"blur"}],clientKey:[{required:!0,message:"客户端key不能为空",trigger:"blur"}],clientSecret:[{required:!0,message:"客户端秘钥不能为空",trigger:"blur"}],grantTypeList:[{required:!0,message:"授权类型不能为空",trigger:"change"}],deviceType:[{required:!0,message:"设备类型不能为空",trigger:"change"}]}}),{queryParams:d,form:s,rules:ue}=K(se),V=async()=>{w.value=!0;const i=await et(d.value);j.value=i.rows,N.value=i.total,w.value=!1},de=()=>{B(),g.visible=!1},B=()=>{var i;s.value={...J},(i=P.value)==null||i.resetFields()},U=()=>{d.value.pageNum=1,V()},re=()=>{var i;(i=H.value)==null||i.resetFields(),U()},me=i=>{I.value=i.map(e=>e.id),G.value=i.length!=1,M.value=!i.length},pe=()=>{B(),g.visible=!0,g.title="添加客户端管理"},W=async i=>{B();const e=(i==null?void 0:i.id)||I.value[0],y=await tt(e);Object.assign(s.value,y.data),g.visible=!0,g.title="修改客户端管理"},ce=()=>{var i;(i=P.value)==null||i.validate(async e=>{e&&(S.value=!0,s.value.id?await at(s.value).finally(()=>S.value=!1):await lt(s.value).finally(()=>S.value=!1),o==null||o.$modal.msgSuccess("修改成功"),g.visible=!1,await V())})},X=async i=>{const e=(i==null?void 0:i.id)||I.value;await(o==null?void 0:o.$modal.confirm('是否确认删除客户端管理编号为"'+e+'"的数据项？').finally(()=>w.value=!1)),await nt(e),o==null||o.$modal.msgSuccess("删除成功"),await V()},ve=()=>{o==null||o.download("system/client/export",{...d.value},`client_${new Date().getTime()}.xlsx`)},_e=async i=>{let e=i.status==="0"?"启用":"停用";try{await(o==null?void 0:o.$modal.confirm('确认要"'+e+'"吗?')),await ot(i.clientId,i.status),o==null||o.$modal.msgSuccess(e+"成功")}catch{i.status=i.status==="0"?"1":"0"}};return Ee(()=>{V()}),(i,e)=>{var te,le;const y=Le,m=He,z=Re,A=$e,v=Ie,Y=Je,h=We,fe=Me,ge=Xe,p=Oe,Z=Ge,ye=Ne,q=Pe,be=je,Ve=Qe,ke=Ye,x=Ue("question-filled"),ee=Be,Te=Ze,Ce=xe,Se=ze,k=he("hasPermi"),we=Ae;return u(),C("div",it,[t(qe,{"enter-active-class":(te=n(o))==null?void 0:te.animate.searchAnimate.enter,"leave-active-class":(le=n(o))==null?void 0:le.animate.searchAnimate.leave},{default:a(()=>[b(F("div",st,[t(Y,{ref_key:"queryFormRef",ref:H,model:n(d),inline:!0},{default:a(()=>[t(m,{label:"客户端key",prop:"clientKey"},{default:a(()=>[t(y,{modelValue:n(d).clientKey,"onUpdate:modelValue":e[0]||(e[0]=l=>n(d).clientKey=l),placeholder:"请输入客户端key",clearable:"",onKeyup:ne(U,["enter"])},null,8,["modelValue"])]),_:1}),t(m,{label:"客户端秘钥",prop:"clientSecret"},{default:a(()=>[t(y,{modelValue:n(d).clientSecret,"onUpdate:modelValue":e[1]||(e[1]=l=>n(d).clientSecret=l),placeholder:"请输入客户端秘钥",clearable:"",onKeyup:ne(U,["enter"])},null,8,["modelValue"])]),_:1}),t(m,{label:"状态",prop:"status"},{default:a(()=>[t(A,{modelValue:n(d).status,"onUpdate:modelValue":e[2]||(e[2]=l=>n(d).status=l),placeholder:"状态",clearable:""},{default:a(()=>[(u(!0),C(L,null,R(n($),l=>(u(),f(z,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,null,{default:a(()=>[t(v,{type:"primary",icon:"Search",onClick:U},{default:a(()=>e[16]||(e[16]=[c("搜索")])),_:1}),t(v,{icon:"Refresh",onClick:re},{default:a(()=>e[17]||(e[17]=[c("重置")])),_:1})]),_:1})]),_:1},8,["model"])],512),[[oe,n(E)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(ke,{shadow:"never"},{header:a(()=>[t(ge,{gutter:10,class:"mb8"},{default:a(()=>[t(h,{span:1.5},{default:a(()=>[b((u(),f(v,{type:"primary",plain:"",icon:"Plus",onClick:pe},{default:a(()=>e[18]||(e[18]=[c("新增")])),_:1})),[[k,["system:client:add"]]])]),_:1}),t(h,{span:1.5},{default:a(()=>[b((u(),f(v,{type:"success",plain:"",icon:"Edit",disabled:n(G),onClick:e[3]||(e[3]=l=>W())},{default:a(()=>e[19]||(e[19]=[c(" 修改 ")])),_:1},8,["disabled"])),[[k,["system:client:edit"]]])]),_:1}),t(h,{span:1.5},{default:a(()=>[b((u(),f(v,{type:"danger",plain:"",icon:"Delete",disabled:n(M),onClick:e[4]||(e[4]=l=>X())},{default:a(()=>e[20]||(e[20]=[c(" 删除 ")])),_:1},8,["disabled"])),[[k,["system:client:remove"]]])]),_:1}),t(h,{span:1.5},{default:a(()=>[b((u(),f(v,{type:"warning",plain:"",icon:"Download",onClick:ve},{default:a(()=>e[21]||(e[21]=[c("导出")])),_:1})),[[k,["system:client:export"]]])]),_:1}),t(fe,{showSearch:n(E),"onUpdate:showSearch":e[5]||(e[5]=l=>De(E)?E.value=l:null),onQueryTable:V},null,8,["showSearch"])]),_:1})]),default:a(()=>[b((u(),f(be,{data:n(j),onSelectionChange:me},{default:a(()=>[t(p,{type:"selection",width:"55",align:"center"}),(u(),f(p,{key:0,label:"id",align:"center",prop:"id"})),t(p,{label:"客户端id",align:"center",prop:"clientId"}),t(p,{label:"客户端key",align:"center",prop:"clientKey"}),t(p,{label:"客户端秘钥",align:"center",prop:"clientSecret"}),t(p,{label:"授权类型",align:"center"},{default:a(l=>[t(Z,{options:n(Q),value:l.row.grantTypeList},null,8,["options","value"])]),_:1}),t(p,{label:"设备类型",align:"center"},{default:a(l=>[t(Z,{options:n(O),value:l.row.deviceType},null,8,["options","value"])]),_:1}),t(p,{label:"Token活跃超时时间",align:"center",prop:"activeTimeout"}),t(p,{label:"Token固定超时时间",align:"center",prop:"timeout"}),t(p,{key:"status",label:"状态",align:"center"},{default:a(l=>[t(ye,{modelValue:l.row.status,"onUpdate:modelValue":D=>l.row.status=D,"active-value":"0","inactive-value":"1",onChange:D=>_e(l.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(p,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:a(l=>[t(q,{content:"修改",placement:"top"},{default:a(()=>[b(t(v,{link:"",type:"primary",icon:"Edit",onClick:D=>W(l.row)},null,8,["onClick"]),[[k,["system:client:edit"]]])]),_:2},1024),t(q,{content:"删除",placement:"top"},{default:a(()=>[b(t(v,{link:"",type:"primary",icon:"Delete",onClick:D=>X(l.row)},null,8,["onClick"]),[[k,["system:client:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[we,n(w)]]),b(t(Ve,{page:n(d).pageNum,"onUpdate:page":e[6]||(e[6]=l=>n(d).pageNum=l),limit:n(d).pageSize,"onUpdate:limit":e[7]||(e[7]=l=>n(d).pageSize=l),total:n(N),onPagination:V},null,8,["page","limit","total"]),[[oe,n(N)>0]])]),_:1}),t(Se,{modelValue:n(g).visible,"onUpdate:modelValue":e[15]||(e[15]=l=>n(g).visible=l),title:n(g).title,width:"500px","append-to-body":""},{footer:a(()=>[F("div",ut,[t(v,{loading:n(S),type:"primary",onClick:ce},{default:a(()=>e[24]||(e[24]=[c("确 定")])),_:1},8,["loading"]),t(v,{onClick:de},{default:a(()=>e[25]||(e[25]=[c("取 消")])),_:1})])]),default:a(()=>[t(Y,{ref_key:"clientFormRef",ref:P,model:n(s),rules:n(ue),"label-width":"100px"},{default:a(()=>[t(m,{label:"客户端key",prop:"clientKey"},{default:a(()=>[t(y,{modelValue:n(s).clientKey,"onUpdate:modelValue":e[8]||(e[8]=l=>n(s).clientKey=l),disabled:n(s).id!=null,placeholder:"请输入客户端key"},null,8,["modelValue","disabled"])]),_:1}),t(m,{label:"客户端秘钥",prop:"clientSecret"},{default:a(()=>[t(y,{modelValue:n(s).clientSecret,"onUpdate:modelValue":e[9]||(e[9]=l=>n(s).clientSecret=l),disabled:n(s).id!=null,placeholder:"请输入客户端秘钥"},null,8,["modelValue","disabled"])]),_:1}),t(m,{label:"授权类型",prop:"grantTypeList"},{default:a(()=>[t(A,{modelValue:n(s).grantTypeList,"onUpdate:modelValue":e[10]||(e[10]=l=>n(s).grantTypeList=l),multiple:"",placeholder:"请输入授权类型"},{default:a(()=>[(u(!0),C(L,null,R(n(Q),l=>(u(),f(z,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"设备类型",prop:"deviceType"},{default:a(()=>[t(A,{modelValue:n(s).deviceType,"onUpdate:modelValue":e[11]||(e[11]=l=>n(s).deviceType=l),placeholder:"请输入设备类型"},{default:a(()=>[(u(!0),C(L,null,R(n(O),l=>(u(),f(z,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{prop:"activeTimeout","label-width":"auto"},{label:a(()=>[F("span",null,[t(q,{content:"指定时间无操作则过期（单位：秒），默认30分钟（1800秒）",placement:"top"},{default:a(()=>[t(ee,null,{default:a(()=>[t(x)]),_:1})]),_:1}),e[22]||(e[22]=c(" Token活跃超时时间 "))])]),default:a(()=>[t(y,{modelValue:n(s).activeTimeout,"onUpdate:modelValue":e[12]||(e[12]=l=>n(s).activeTimeout=l),placeholder:"请输入Token活跃超时时间"},null,8,["modelValue"])]),_:1}),t(m,{prop:"timeout","label-width":"auto"},{label:a(()=>[F("span",null,[t(q,{content:"指定时间必定过期（单位：秒），默认七天（604800秒）",placement:"top"},{default:a(()=>[t(ee,null,{default:a(()=>[t(x)]),_:1})]),_:1}),e[23]||(e[23]=c(" Token固定超时时间 "))])]),default:a(()=>[t(y,{modelValue:n(s).timeout,"onUpdate:modelValue":e[13]||(e[13]=l=>n(s).timeout=l),placeholder:"请输入Token固定超时时间"},null,8,["modelValue"])]),_:1}),t(m,{label:"状态"},{default:a(()=>[t(Ce,{modelValue:n(s).status,"onUpdate:modelValue":e[14]||(e[14]=l=>n(s).status=l)},{default:a(()=>[(u(!0),C(L,null,R(n($),l=>(u(),f(Te,{key:l.value,value:l.value},{default:a(()=>[c(Ke(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{Kt as default};
