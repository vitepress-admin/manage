import{a2 as W,d as ne,aa as ee,r as p,ab as le,b as Ee,ah as Se,o as d,c as D,p as a,q as o,w as b,m as te,e as l,I as P,F as T,z,A as u,y as _,U as ae,ag as Ce,af as We,i as S,t as Ue,a1 as Ie,S as qe,P as Fe,Q as De,x as $e,ac as Re,B as Ne,v as Be}from"./index-BoZ_NHcV.js";/* empty css                  */import{_ as Pe}from"./index-L-2-CD8s.js";import{E as Te,a as ze}from"./el-table-column-D7OTia2S.js";import"./el-checkbox-P4CsStjC.js";/* empty css                       *//* empty css                        */import{_ as Le}from"./index-C6Yq9PJ4.js";/* empty css               */import{_ as Ae}from"./index-CYBAydvN.js";/* empty css               *//* empty css                */import{E as Ke,a as Qe}from"./el-form-item-B1jFSTUI.js";import{E as Oe}from"./index-CvM3PS3t.js";import{E as je}from"./index-7Tbabexq.js";import{E as xe}from"./index-C68px2O7.js";import{b as Ge,a as Me}from"./index-BWi2n354.js";import"./_initCloneObject-CC3WSgFr.js";/* empty css                */import"./index-sR6EW1xb.js";import"./_baseClone-tnMM97Jv.js";const He=v=>W({url:"/vpadmin/enWord/list",method:"get",params:v}),Je=v=>W({url:"/vpadmin/enWord/"+v,method:"get"}),Xe=v=>W({url:"/vpadmin/enWord",method:"post",data:v}),oe=v=>W({url:"/vpadmin/enWord",method:"put",data:v}),Ye=v=>W({url:"/vpadmin/enWord/"+v,method:"delete"}),Ze={class:"p-2"},el={class:"mb-[10px]"},ll={class:"dialog-footer"},tl=ne({name:"EnWord"}),El=ne({...tl,setup(v){const{proxy:s}=Ie(),{vpa_word_status:U}=ee(s==null?void 0:s.useDict("vpa_word_status")),L=p([]),I=p(!1),k=p(!0),q=p(!0),$=p([]),A=p(!0),K=p(!0),R=p(0),Q=p(),N=p(),g=le({visible:!1,title:"",isEdit:!1}),se=async n=>{try{k.value=!0,await oe({id:n.id,status:n.status}),s==null||s.$modal.msgSuccess("状态更新成功")}catch{s==null||s.$modal.msgError("状态更新失败"),await h()}finally{k.value=!1}},V=p([{key:0,label:"编号",visible:!1,children:[]},{key:1,label:"单词",visible:!0,children:[]},{key:2,label:"词义",visible:!0,children:[]},{key:3,label:"音标",visible:!0,children:[]},{key:4,label:"背诵状态",visible:!0,children:[]},{key:5,label:"状态修改",visible:!1,children:[]}]),O={id:void 0,word:void 0,meaning:void 0,phoneticSymbols:void 0,status:void 0,deptId:void 0,userId:void 0},ie=le({form:{...O},queryParams:{pageNum:1,pageSize:10,word:void 0,meaning:void 0,phoneticSymbols:void 0,status:void 0,deptId:void 0,userId:void 0,params:{}},rules:{id:[{required:!0,message:"主键不能为空",trigger:"blur"}],word:[{required:!0,message:"项目名称不能为空",trigger:"blur"}],meaning:[{required:!0,message:"发布描述不能为空",trigger:"blur"}],phoneticSymbols:[{required:!0,message:"发布描述不能为空",trigger:"blur"}],status:[{required:!0,message:"发布状态不能为空",trigger:"change"}],deptId:[{required:!0,message:"部门id不能为空",trigger:"blur"}],userId:[{required:!0,message:"用户id不能为空",trigger:"blur"}]}}),{queryParams:r,form:i,rules:de}=ee(ie),h=async()=>{k.value=!0;const n=await He(r.value);L.value=n.rows,R.value=n.total,k.value=!1},re=()=>{B(),g.visible=!1},B=()=>{var n;i.value={...O},(n=N.value)==null||n.resetFields()},C=()=>{r.value.pageNum=1,h()},ue=()=>{var n;(n=Q.value)==null||n.resetFields(),C()},me=n=>{$.value=n.map(e=>e.id),A.value=n.length!=1,K.value=!n.length},pe=()=>{B(),g.visible=!0,g.title="添加初中单词"},j=async n=>{B();const e=(n==null?void 0:n.id)||$.value[0],c=await Je(e);Object.assign(i.value,c.data),g.visible=!0,g.title="修改初中单词"},ve=()=>{var n;(n=N.value)==null||n.validate(async e=>{e&&(I.value=!0,i.value.id?await oe(i.value).finally(()=>I.value=!1):await Xe(i.value).finally(()=>I.value=!1),s==null||s.$modal.msgSuccess("操作成功"),g.visible=!1,await h())})},x=async n=>{const e=(n==null?void 0:n.id)||$.value;await(s==null?void 0:s.$modal.confirm('是否确认删除初中单词编号为"'+e+'"的数据项？').finally(()=>k.value=!1)),await Ye(e),s==null||s.$modal.msgSuccess("删除成功"),await h()},ce=()=>{s==null||s.download("vpadmin/enWord/export",{...r.value},`enWord_${new Date().getTime()}.xlsx`)};return Ee(()=>{h()}),(n,e)=>{var Y,Z;const c=qe,m=Ke,G=Fe,M=De,f=$e,H=Qe,J=Oe,F=je,fe=Ae,ge=xe,y=Te,be=Le,_e=Ge,ye=Me,X=Re,we=ze,Ve=Pe,he=Ne,E=Se("hasPermi"),ke=Be;return d(),D("div",Ze,[a(Ce,{"enter-active-class":(Y=l(s))==null?void 0:Y.animate.searchAnimate.enter,"leave-active-class":(Z=l(s))==null?void 0:Z.animate.searchAnimate.leave},{default:o(()=>[b(te("div",el,[a(J,{shadow:"hover"},{default:o(()=>[a(H,{ref_key:"queryFormRef",ref:Q,model:l(r),inline:!0},{default:o(()=>[a(m,{label:"单词",prop:"word"},{default:o(()=>[a(c,{modelValue:l(r).word,"onUpdate:modelValue":e[0]||(e[0]=t=>l(r).word=t),placeholder:"请输入项目名称",clearable:"",onKeyup:P(C,["enter"])},null,8,["modelValue"])]),_:1}),a(m,{label:"词义",prop:"meaning"},{default:o(()=>[a(c,{modelValue:l(r).meaning,"onUpdate:modelValue":e[1]||(e[1]=t=>l(r).meaning=t),placeholder:"请输入发布描述",clearable:"",onKeyup:P(C,["enter"])},null,8,["modelValue"])]),_:1}),a(m,{label:"音标",prop:"phoneticSymbols"},{default:o(()=>[a(c,{modelValue:l(r).phoneticSymbols,"onUpdate:modelValue":e[2]||(e[2]=t=>l(r).phoneticSymbols=t),placeholder:"请输入发布描述",clearable:"",onKeyup:P(C,["enter"])},null,8,["modelValue"])]),_:1}),a(m,{label:"背诵状态",prop:"status"},{default:o(()=>[a(M,{modelValue:l(r).status,"onUpdate:modelValue":e[3]||(e[3]=t=>l(r).status=t),placeholder:"请选择发布状态",clearable:""},{default:o(()=>[(d(!0),D(T,null,z(l(U),t=>(d(),u(G,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:o(()=>[a(f,{type:"primary",icon:"Search",onClick:C},{default:o(()=>e[16]||(e[16]=[_("搜索")])),_:1}),a(f,{icon:"Refresh",onClick:ue},{default:o(()=>e[17]||(e[17]=[_("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[ae,l(q)]])]),_:1},8,["enter-active-class","leave-active-class"]),a(J,{shadow:"never"},{header:o(()=>[a(ge,{gutter:10,class:"mb8"},{default:o(()=>[a(F,{span:1.5},{default:o(()=>[b((d(),u(f,{type:"primary",plain:"",icon:"Plus",onClick:pe},{default:o(()=>e[18]||(e[18]=[_("新增")])),_:1})),[[E,["vpadmin:enWord:add"]]])]),_:1}),a(F,{span:1.5},{default:o(()=>[b((d(),u(f,{type:"success",plain:"",icon:"Edit",disabled:l(A),onClick:e[4]||(e[4]=t=>j())},{default:o(()=>e[19]||(e[19]=[_("修改")])),_:1},8,["disabled"])),[[E,["vpadmin:enWord:edit"]]])]),_:1}),a(F,{span:1.5},{default:o(()=>[b((d(),u(f,{type:"danger",plain:"",icon:"Delete",disabled:l(K),onClick:e[5]||(e[5]=t=>x())},{default:o(()=>e[20]||(e[20]=[_("删除")])),_:1},8,["disabled"])),[[E,["vpadmin:enWord:remove"]]])]),_:1}),a(F,{span:1.5},{default:o(()=>[b((d(),u(f,{type:"warning",plain:"",icon:"Download",onClick:ce},{default:o(()=>e[21]||(e[21]=[_("导出")])),_:1})),[[E,["vpadmin:enWord:export"]]])]),_:1}),a(fe,{showSearch:l(q),"onUpdate:showSearch":e[6]||(e[6]=t=>We(q)?q.value=t:null),columns:l(V),onQueryTable:h},null,8,["showSearch","columns"])]),_:1})]),default:o(()=>[b((d(),u(we,{data:l(L),onSelectionChange:me},{default:o(()=>[a(y,{type:"selection",width:"55",align:"center"}),l(V)[0].visible?(d(),u(y,{key:0,label:"编号",align:"center",prop:"id"})):S("",!0),l(V)[1].visible?(d(),u(y,{key:1,label:"单词",width:"150",align:"center",prop:"word"})):S("",!0),l(V)[2].visible?(d(),u(y,{key:2,label:"词义",width:"400",align:"center",prop:"meaning"})):S("",!0),l(V)[3].visible?(d(),u(y,{key:3,label:"音标",align:"center",prop:"phoneticSymbols"})):S("",!0),l(V)[4].visible?(d(),u(y,{key:4,label:"背诵状态",width:"100",align:"center",prop:"status"},{default:o(t=>[a(be,{options:l(U),value:t.row.status},null,8,["options","value"])]),_:1})):S("",!0),l(V)[5].visible?(d(),u(y,{key:5,label:"状态修改",width:"250",align:"center",prop:"status"},{default:o(t=>[a(ye,{modelValue:t.row.status,"onUpdate:modelValue":w=>t.row.status=w,onChange:w=>se(t.row),size:"small"},{default:o(()=>[(d(!0),D(T,null,z(l(U),w=>(d(),u(_e,{key:w.value,label:w.value},{default:o(()=>[_(Ue(w.label),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:1})):S("",!0),a(y,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:o(t=>[a(X,{content:"修改",placement:"top"},{default:o(()=>[b(a(f,{link:"",type:"primary",icon:"Edit",onClick:w=>j(t.row)},null,8,["onClick"]),[[E,["vpadmin:enWord:edit"]]])]),_:2},1024),a(X,{content:"删除",placement:"top"},{default:o(()=>[b(a(f,{link:"",type:"primary",icon:"Delete",onClick:w=>x(t.row)},null,8,["onClick"]),[[E,["vpadmin:enWord:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[ke,l(k)]]),b(a(Ve,{page:l(r).pageNum,"onUpdate:page":e[7]||(e[7]=t=>l(r).pageNum=t),limit:l(r).pageSize,"onUpdate:limit":e[8]||(e[8]=t=>l(r).pageSize=t),total:l(R),onPagination:h},null,8,["page","limit","total"]),[[ae,l(R)>0]])]),_:1}),a(he,{modelValue:l(g).visible,"onUpdate:modelValue":e[15]||(e[15]=t=>l(g).visible=t),title:l(g).title,width:"500px","append-to-body":""},{footer:o(()=>[te("div",ll,[a(f,{loading:l(I),type:"primary",onClick:ve},{default:o(()=>e[22]||(e[22]=[_("确 定")])),_:1},8,["loading"]),a(f,{onClick:re},{default:o(()=>e[23]||(e[23]=[_("取 消")])),_:1})])]),default:o(()=>[a(H,{ref_key:"enWordFormRef",ref:N,model:l(i),rules:l(de),"label-width":"80px"},{default:o(()=>[a(m,{label:"项目名称",prop:"word"},{default:o(()=>[a(c,{modelValue:l(i).word,"onUpdate:modelValue":e[9]||(e[9]=t=>l(i).word=t),placeholder:"请输入项目名称"},null,8,["modelValue"])]),_:1}),a(m,{label:"发布描述",prop:"meaning"},{default:o(()=>[a(c,{modelValue:l(i).meaning,"onUpdate:modelValue":e[10]||(e[10]=t=>l(i).meaning=t),placeholder:"请输入发布描述"},null,8,["modelValue"])]),_:1}),a(m,{label:"发布描述",prop:"phoneticSymbols"},{default:o(()=>[a(c,{modelValue:l(i).phoneticSymbols,"onUpdate:modelValue":e[11]||(e[11]=t=>l(i).phoneticSymbols=t),placeholder:"请输入发布描述"},null,8,["modelValue"])]),_:1}),a(m,{label:"发布状态",prop:"status"},{default:o(()=>[a(M,{modelValue:l(i).status,"onUpdate:modelValue":e[12]||(e[12]=t=>l(i).status=t),placeholder:"请选择发布状态"},{default:o(()=>[(d(!0),D(T,null,z(l(U),t=>(d(),u(G,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"部门id",prop:"deptId"},{default:o(()=>[a(c,{modelValue:l(i).deptId,"onUpdate:modelValue":e[13]||(e[13]=t=>l(i).deptId=t),placeholder:"请输入部门id"},null,8,["modelValue"])]),_:1}),a(m,{label:"用户id",prop:"userId"},{default:o(()=>[a(c,{modelValue:l(i).userId,"onUpdate:modelValue":e[14]||(e[14]=t=>l(i).userId=t),placeholder:"请输入用户id"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{El as default};
