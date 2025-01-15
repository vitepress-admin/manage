import{a2 as k,d as O,aa as z,r as i,b as de,ah as me,o as d,c as K,p as o,q as l,w as p,m as Q,e as a,I as Y,F as pe,z as ce,A as _,af as M,y as g,U as H,ag as fe,t as _e,a1 as ge,S as ve,P as we,Q as be,x as he,v as Ee}from"./index-W4JQoyRu.js";import{_ as Se}from"./index-CR98URH3.js";import{E as ke,a as ye}from"./el-table-column-raMnIs1Q.js";import"./el-checkbox-DUug-yfp.js";import{_ as Ce}from"./index-BqDVXIhu.js";/* empty css               */import{_ as De}from"./index-CKDx0qb0.js";/* empty css               *//* empty css                */import{E as Ne,a as Ve}from"./el-form-item-CsrfjOy3.js";import{E as Ie}from"./el-date-picker-CmNZTSlR.js";import{E as Te}from"./index-CNaJdHAJ.js";import{E as Re}from"./index-DEX55MHv.js";import{E as Ue}from"./index-bYLJxVRV.js";import"./_initCloneObject-CEE6Jjm5.js";/* empty css                */import"./index-BPtDSs9a.js";import"./_baseClone-B6j-wkHS.js";import"./index-BujmTTTX.js";function Le(c){return k({url:"/monitor/logininfor/list",method:"get",params:c})}function $e(c){return k({url:"/monitor/logininfor/"+c,method:"delete"})}function Be(c){return k({url:"/monitor/logininfor/unlock/"+c,method:"get"})}function Fe(){return k({url:"/monitor/logininfor/clean",method:"delete"})}const Pe={class:"p-2"},Ae={class:"mb-[10px]"},qe=O({name:"Logininfor"}),no=O({...qe,setup(c){const{proxy:t}=ge(),{sys_device_type:j}=z(t==null?void 0:t.useDict("sys_device_type")),{sys_common_status:N}=z(t==null?void 0:t.useDict("sys_common_status")),V=i([]),y=i(!0),h=i(!0),I=i([]),T=i(!0),R=i(!0),U=i([]),C=i(0),v=i(["",""]),w=i({prop:"loginTime",order:"descending"}),L=i(),$=i(),r=i({pageNum:1,pageSize:10,ipaddr:"",userName:"",status:"",orderByColumn:w.value.prop,isAsc:w.value.order}),m=async()=>{y.value=!0;const s=await Le(t==null?void 0:t.addDateRange(r.value,v.value));V.value=s.rows,C.value=s.total,y.value=!1},D=()=>{r.value.pageNum=1,m()},G=()=>{var s,e;v.value=["",""],(s=L.value)==null||s.resetFields(),r.value.pageNum=1,(e=$.value)==null||e.sort(w.value.prop,w.value.order)},J=s=>{I.value=s.map(e=>e.infoId),R.value=!s.length,T.value=s.length!=1,U.value=s.map(e=>e.userName)},W=s=>{r.value.orderByColumn=s.prop,r.value.isAsc=s.order,m()},X=async s=>{const e=I.value;await(t==null?void 0:t.$modal.confirm('是否确认删除访问编号为"'+e+'"的数据项?')),await $e(e),await m(),t==null||t.$modal.msgSuccess("删除成功")},Z=async()=>{await(t==null?void 0:t.$modal.confirm("是否确认清空所有登录日志数据项?")),await Fe(),await m(),t==null||t.$modal.msgSuccess("清空成功")},x=async()=>{const s=U.value;await(t==null?void 0:t.$modal.confirm('是否确认解锁用户"'+s+'"数据项?')),await Be(s),t==null||t.$modal.msgSuccess("用户"+s+"解锁成功")},ee=()=>{t==null||t.download("monitor/logininfor/export",{...r.value},`logininfor_${new Date().getTime()}.xlsx`)};return de(()=>{m()}),(s,e)=>{var A,q;const B=ve,b=Ne,oe=we,te=be,le=Ie,f=he,ae=Ve,F=Te,E=Re,ne=De,se=Ue,u=ke,P=Ce,re=ye,ie=Se,S=me("hasPermi"),ue=Ee;return d(),K("div",Pe,[o(fe,{"enter-active-class":(A=a(t))==null?void 0:A.animate.searchAnimate.enter,"leave-active-class":(q=a(t))==null?void 0:q.animate.searchAnimate.leave},{default:l(()=>[p(Q("div",Ae,[o(F,{shadow:"hover"},{default:l(()=>[o(ae,{ref_key:"queryFormRef",ref:L,model:a(r),inline:!0},{default:l(()=>[o(b,{label:"登录地址",prop:"ipaddr"},{default:l(()=>[o(B,{modelValue:a(r).ipaddr,"onUpdate:modelValue":e[0]||(e[0]=n=>a(r).ipaddr=n),placeholder:"请输入登录地址",clearable:"",onKeyup:Y(D,["enter"])},null,8,["modelValue"])]),_:1}),o(b,{label:"用户名称",prop:"userName"},{default:l(()=>[o(B,{modelValue:a(r).userName,"onUpdate:modelValue":e[1]||(e[1]=n=>a(r).userName=n),placeholder:"请输入用户名称",clearable:"",onKeyup:Y(D,["enter"])},null,8,["modelValue"])]),_:1}),o(b,{label:"状态",prop:"status"},{default:l(()=>[o(te,{modelValue:a(r).status,"onUpdate:modelValue":e[2]||(e[2]=n=>a(r).status=n),placeholder:"登录状态",clearable:""},{default:l(()=>[(d(!0),K(pe,null,ce(a(N),n=>(d(),_(oe,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(b,{label:"登录时间",style:{width:"308px"}},{default:l(()=>[o(le,{modelValue:a(v),"onUpdate:modelValue":e[3]||(e[3]=n=>M(v)?v.value=n:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","default-time"])]),_:1}),o(b,null,{default:l(()=>[o(f,{type:"primary",icon:"Search",onClick:D},{default:l(()=>e[8]||(e[8]=[g("搜索")])),_:1}),o(f,{icon:"Refresh",onClick:G},{default:l(()=>e[9]||(e[9]=[g("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[H,a(h)]])]),_:1},8,["enter-active-class","leave-active-class"]),o(F,{shadow:"hover"},{header:l(()=>[o(se,{gutter:10,class:"mb8"},{default:l(()=>[o(E,{span:1.5},{default:l(()=>[p((d(),_(f,{type:"danger",plain:"",icon:"Delete",disabled:a(R),onClick:e[4]||(e[4]=n=>X())},{default:l(()=>e[10]||(e[10]=[g(" 删除 ")])),_:1},8,["disabled"])),[[S,["monitor:logininfor:remove"]]])]),_:1}),o(E,{span:1.5},{default:l(()=>[p((d(),_(f,{type:"danger",plain:"",icon:"Delete",onClick:Z},{default:l(()=>e[11]||(e[11]=[g("清空")])),_:1})),[[S,["monitor:logininfor:remove"]]])]),_:1}),o(E,{span:1.5},{default:l(()=>[p((d(),_(f,{type:"primary",plain:"",icon:"Unlock",disabled:a(T),onClick:x},{default:l(()=>e[12]||(e[12]=[g(" 解锁 ")])),_:1},8,["disabled"])),[[S,["monitor:logininfor:unlock"]]])]),_:1}),o(E,{span:1.5},{default:l(()=>[p((d(),_(f,{type:"warning",plain:"",icon:"Download",onClick:ee},{default:l(()=>e[13]||(e[13]=[g("导出")])),_:1})),[[S,["monitor:logininfor:export"]]])]),_:1}),o(ne,{showSearch:a(h),"onUpdate:showSearch":e[5]||(e[5]=n=>M(h)?h.value=n:null),onQueryTable:m},null,8,["showSearch"])]),_:1})]),default:l(()=>[p((d(),_(re,{ref_key:"loginInfoTableRef",ref:$,data:a(V),"default-sort":a(w),onSelectionChange:J,onSortChange:W},{default:l(()=>[o(u,{type:"selection",width:"55",align:"center"}),o(u,{label:"访问编号",align:"center",prop:"infoId"}),o(u,{label:"用户名称",align:"center",prop:"userName","show-overflow-tooltip":!0,sortable:"custom","sort-orders":["descending","ascending"]}),o(u,{label:"客户端",align:"center",prop:"clientKey","show-overflow-tooltip":!0}),o(u,{label:"设备类型",align:"center"},{default:l(n=>[o(P,{options:a(j),value:n.row.deviceType},null,8,["options","value"])]),_:1}),o(u,{label:"地址",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),o(u,{label:"登录地点",align:"center",prop:"loginLocation","show-overflow-tooltip":!0}),o(u,{label:"操作系统",align:"center",prop:"os","show-overflow-tooltip":!0}),o(u,{label:"浏览器",align:"center",prop:"browser","show-overflow-tooltip":!0}),o(u,{label:"登录状态",align:"center",prop:"status"},{default:l(n=>[o(P,{options:a(N),value:n.row.status},null,8,["options","value"])]),_:1}),o(u,{label:"描述",align:"center",prop:"msg","show-overflow-tooltip":!0}),o(u,{label:"访问时间",align:"center",prop:"loginTime",sortable:"custom","sort-orders":["descending","ascending"],width:"180"},{default:l(n=>[Q("span",null,_e(s.parseTime(n.row.loginTime)),1)]),_:1})]),_:1},8,["data","default-sort"])),[[ue,a(y)]]),p(o(ie,{page:a(r).pageNum,"onUpdate:page":e[6]||(e[6]=n=>a(r).pageNum=n),limit:a(r).pageSize,"onUpdate:limit":e[7]||(e[7]=n=>a(r).pageSize=n),total:a(C),onPagination:m},null,8,["page","limit","total"]),[[H,a(C)>0]])]),_:1})])}}});export{no as default};
