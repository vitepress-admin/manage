import{a4 as L,d as te,ac as G,r as f,ad as J,b as we,ai as ye,o as c,c as T,p as e,q as l,w as b,m as S,e as t,I as F,F as X,z as Z,A as w,ag as x,y as d,W as ee,ah as he,t as u,i as le,a3 as Te,U as Ve,R as Ce,S as Ee,x as ke,P as Ne,B as Se,v as De}from"./index-B9_8IJe0.js";/* empty css                  */import{_ as Ie}from"./index-KkKI-uFX.js";import{E as Re,a as Ue}from"./el-table-column-Bf4nXPrj.js";import"./el-checkbox-B0xBIaBW.js";import{_ as Fe}from"./index-DRqUSK_T.js";/* empty css               */import{_ as Le}from"./index-DNGLl6SE.js";/* empty css               *//* empty css                */import{E as Pe,a as qe}from"./el-form-item-CTbaNcVh.js";import{E as Be}from"./el-date-picker-CAtNiNpk.js";import{E as $e}from"./index-uEHY0w0Z.js";import{E as Me}from"./index-B7Ht2YQ7.js";import{E as Ae}from"./index-i2vYkcqU.js";import"./_initCloneObject-DrfOwJJW.js";/* empty css                */import"./index-DV-l4gey.js";import"./_baseClone-CY4Rh9zz.js";import"./index-B_hFWdIW.js";function ze(V){return L({url:"/monitor/operlog/list",method:"get",params:V})}function Ke(V){return L({url:"/monitor/operlog/"+V,method:"delete"})}function Oe(){return L({url:"/monitor/operlog/clean",method:"delete"})}const Ye={class:"p-2"},Qe={class:"mb-[10px]"},je={key:0},He={key:1},We={class:"dialog-footer"},Ge=te({name:"Operlog"}),vl=te({...Ge,setup(V){const{proxy:n}=Te(),{sys_oper_type:D,sys_common_status:P}=G(n==null?void 0:n.useDict("sys_oper_type","sys_common_status")),q=f([]),I=f(!0),C=f(!0),B=f([]),$=f(!0),R=f(0),y=f(["",""]),h=f({prop:"operTime",order:"descending"}),M=f(),A=f(),E=J({visible:!1,title:""}),oe=J({form:{operId:void 0,tenantId:void 0,title:"",businessType:0,businessTypes:void 0,method:"",requestMethod:"",operatorType:0,operName:"",deptName:"",operUrl:"",operIp:"",operLocation:"",operParam:"",jsonResult:"",status:0,errorMsg:"",operTime:"",costTime:0},queryParams:{pageNum:1,pageSize:10,operIp:"",title:"",operName:"",businessType:"",status:"",orderByColumn:h.value.prop,isAsc:h.value.order},rules:{}}),{queryParams:s,form:r}=G(oe),g=async()=>{I.value=!0;const i=await ze(n==null?void 0:n.addDateRange(s.value,y.value));q.value=i.rows,R.value=i.total,I.value=!1},ae=i=>n==null?void 0:n.selectDictLabel(D.value,i.businessType),k=()=>{s.value.pageNum=1,g()},ne=()=>{var i,o;y.value=["",""],(i=A.value)==null||i.resetFields(),s.value.pageNum=1,(o=M.value)==null||o.sort(h.value.prop,h.value.order)},se=i=>{B.value=i.map(o=>o.operId),$.value=!i.length},re=i=>{s.value.orderByColumn=i.prop,s.value.isAsc=i.order,g()},ie=i=>{E.visible=!0,r.value=i},pe=async i=>{const o=B.value;await(n==null?void 0:n.$modal.confirm('是否确认删除日志编号为"'+o+'"的数据项?')),await Ke(o),await g(),n==null||n.$modal.msgSuccess("删除成功")},ue=async()=>{await(n==null?void 0:n.$modal.confirm("是否确认清空所有操作日志数据项?")),await Oe(),await g(),n==null||n.$modal.msgSuccess("清空成功")},de=()=>{n==null||n.download("monitor/operlog/export",{...s.value},`config_${new Date().getTime()}.xlsx`)};return we(()=>{g()}),(i,o)=>{var H,W;const U=Ve,p=Pe,z=Ce,K=Ee,me=Be,v=ke,O=qe,Y=$e,m=Me,ce=Le,Q=Ae,_=Re,j=Fe,_e=Ne,fe=Ue,ge=Ie,ve=Se,N=ye("hasPermi"),be=De;return c(),T("div",Ye,[e(he,{"enter-active-class":(H=t(n))==null?void 0:H.animate.searchAnimate.enter,"leave-active-class":(W=t(n))==null?void 0:W.animate.searchAnimate.leave},{default:l(()=>[b(S("div",Qe,[e(Y,{shadow:"hover"},{default:l(()=>[e(O,{ref_key:"queryFormRef",ref:A,model:t(s),inline:!0},{default:l(()=>[e(p,{label:"操作地址",prop:"operIp"},{default:l(()=>[e(U,{modelValue:t(s).operIp,"onUpdate:modelValue":o[0]||(o[0]=a=>t(s).operIp=a),placeholder:"请输入操作地址",clearable:"",onKeyup:F(k,["enter"])},null,8,["modelValue"])]),_:1}),e(p,{label:"系统模块",prop:"title"},{default:l(()=>[e(U,{modelValue:t(s).title,"onUpdate:modelValue":o[1]||(o[1]=a=>t(s).title=a),placeholder:"请输入系统模块",clearable:"",onKeyup:F(k,["enter"])},null,8,["modelValue"])]),_:1}),e(p,{label:"操作人员",prop:"operName"},{default:l(()=>[e(U,{modelValue:t(s).operName,"onUpdate:modelValue":o[2]||(o[2]=a=>t(s).operName=a),placeholder:"请输入操作人员",clearable:"",onKeyup:F(k,["enter"])},null,8,["modelValue"])]),_:1}),e(p,{label:"类型",prop:"businessType"},{default:l(()=>[e(K,{modelValue:t(s).businessType,"onUpdate:modelValue":o[3]||(o[3]=a=>t(s).businessType=a),placeholder:"操作类型",clearable:""},{default:l(()=>[(c(!0),T(X,null,Z(t(D),a=>(c(),w(z,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"状态",prop:"status"},{default:l(()=>[e(K,{modelValue:t(s).status,"onUpdate:modelValue":o[4]||(o[4]=a=>t(s).status=a),placeholder:"操作状态",clearable:""},{default:l(()=>[(c(!0),T(X,null,Z(t(P),a=>(c(),w(z,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"操作时间",style:{width:"308px"}},{default:l(()=>[e(me,{modelValue:t(y),"onUpdate:modelValue":o[5]||(o[5]=a=>x(y)?y.value=a:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","default-time"])]),_:1}),e(p,null,{default:l(()=>[e(v,{type:"primary",icon:"Search",onClick:k},{default:l(()=>o[12]||(o[12]=[d("搜索")])),_:1}),e(v,{icon:"Refresh",onClick:ne},{default:l(()=>o[13]||(o[13]=[d("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[ee,t(C)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(Y,{shadow:"hover"},{header:l(()=>[e(Q,{gutter:10,class:"mb8"},{default:l(()=>[e(m,{span:1.5},{default:l(()=>[b((c(),w(v,{type:"danger",plain:"",icon:"Delete",disabled:t($),onClick:o[6]||(o[6]=a=>pe())},{default:l(()=>o[14]||(o[14]=[d(" 删除 ")])),_:1},8,["disabled"])),[[N,["monitor:operlog:remove"]]])]),_:1}),e(m,{span:1.5},{default:l(()=>[b((c(),w(v,{type:"danger",plain:"",icon:"WarnTriangleFilled",onClick:ue},{default:l(()=>o[15]||(o[15]=[d("清空")])),_:1})),[[N,["monitor:operlog:remove"]]])]),_:1}),e(m,{span:1.5},{default:l(()=>[b((c(),w(v,{type:"warning",plain:"",icon:"Download",onClick:de},{default:l(()=>o[16]||(o[16]=[d("导出")])),_:1})),[[N,["monitor:operlog:export"]]])]),_:1}),e(ce,{showSearch:t(C),"onUpdate:showSearch":o[7]||(o[7]=a=>x(C)?C.value=a:null),onQueryTable:g},null,8,["showSearch"])]),_:1})]),default:l(()=>[b((c(),w(fe,{ref_key:"operLogTableRef",ref:M,data:t(q),"default-sort":t(h),onSelectionChange:se,onSortChange:re},{default:l(()=>[e(_,{type:"selection",width:"50",align:"center"}),e(_,{label:"日志编号",align:"center",prop:"operId"}),e(_,{label:"系统模块",align:"center",prop:"title","show-overflow-tooltip":!0}),e(_,{label:"操作类型",align:"center",prop:"businessType"},{default:l(a=>[e(j,{options:t(D),value:a.row.businessType},null,8,["options","value"])]),_:1}),e(_,{label:"操作人员",align:"center",width:"110",prop:"operName","show-overflow-tooltip":!0,sortable:"custom","sort-orders":["descending","ascending"]}),e(_,{label:"部门",align:"center",prop:"deptName",width:"130","show-overflow-tooltip":!0}),e(_,{label:"操作地址",align:"center",prop:"operIp",width:"130","show-overflow-tooltip":!0}),e(_,{label:"操作状态",align:"center",prop:"status"},{default:l(a=>[e(j,{options:t(P),value:a.row.status},null,8,["options","value"])]),_:1}),e(_,{label:"操作日期",align:"center",prop:"operTime",width:"180",sortable:"custom","sort-orders":["descending","ascending"]},{default:l(a=>[S("span",null,u(i.parseTime(a.row.operTime)),1)]),_:1}),e(_,{label:"消耗时间",align:"center",prop:"costTime",width:"110","show-overflow-tooltip":!0,sortable:"custom","sort-orders":["descending","ascending"]},{default:l(a=>[S("span",null,u(a.row.costTime)+"毫秒",1)]),_:1}),e(_,{label:"操作",fixed:"right",align:"center","class-name":"small-padding fixed-width"},{default:l(a=>[e(_e,{content:"详细",placement:"top"},{default:l(()=>[b(e(v,{link:"",type:"primary",icon:"View",onClick:Je=>ie(a.row)},null,8,["onClick"]),[[N,["monitor:operlog:query"]]])]),_:2},1024)]),_:1})]),_:1},8,["data","default-sort"])),[[be,t(I)]]),b(e(ge,{page:t(s).pageNum,"onUpdate:page":o[8]||(o[8]=a=>t(s).pageNum=a),limit:t(s).pageSize,"onUpdate:limit":o[9]||(o[9]=a=>t(s).pageSize=a),total:t(R),onPagination:g},null,8,["page","limit","total"]),[[ee,t(R)>0]])]),_:1}),e(ve,{modelValue:t(E).visible,"onUpdate:modelValue":o[11]||(o[11]=a=>t(E).visible=a),title:"操作日志详细",width:"700px","append-to-body":""},{footer:l(()=>[S("div",We,[e(v,{onClick:o[10]||(o[10]=a=>t(E).visible=!1)},{default:l(()=>o[17]||(o[17]=[d("关 闭")])),_:1})])]),default:l(()=>[e(O,{model:t(r),"label-width":"100px"},{default:l(()=>[e(Q,null,{default:l(()=>[e(m,{span:24},{default:l(()=>[e(p,{label:"登录信息："},{default:l(()=>[d(u(t(r).operName)+" / "+u(t(r).deptName)+" / "+u(t(r).operIp)+" / "+u(t(r).operLocation),1)]),_:1})]),_:1}),e(m,{span:12},{default:l(()=>[e(p,{label:"请求信息："},{default:l(()=>[d(u(t(r).requestMethod)+" "+u(t(r).operUrl),1)]),_:1})]),_:1}),e(m,{span:12},{default:l(()=>[e(p,{label:"操作模块："},{default:l(()=>[d(u(t(r).title)+" / "+u(ae(t(r))),1)]),_:1})]),_:1}),e(m,{span:24},{default:l(()=>[e(p,{label:"操作方法："},{default:l(()=>[d(u(t(r).method),1)]),_:1})]),_:1}),e(m,{span:24},{default:l(()=>[e(p,{label:"请求参数："},{default:l(()=>[d(u(t(r).operParam),1)]),_:1})]),_:1}),e(m,{span:24},{default:l(()=>[e(p,{label:"返回参数："},{default:l(()=>[d(u(t(r).jsonResult),1)]),_:1})]),_:1}),e(m,{span:6},{default:l(()=>[e(p,{label:"操作状态："},{default:l(()=>[t(r).status===0?(c(),T("div",je,"正常")):t(r).status===1?(c(),T("div",He,"失败")):le("",!0)]),_:1})]),_:1}),e(m,{span:8},{default:l(()=>[e(p,{label:"消耗时间："},{default:l(()=>[d(u(t(r).costTime)+"毫秒",1)]),_:1})]),_:1}),e(m,{span:10},{default:l(()=>[e(p,{label:"操作时间："},{default:l(()=>[d(u(i.parseTime(t(r).operTime)),1)]),_:1})]),_:1}),e(m,{span:24},{default:l(()=>[t(r).status===1?(c(),w(p,{key:0,label:"异常信息："},{default:l(()=>[d(u(t(r).errorMsg),1)]),_:1})):le("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{vl as default};
