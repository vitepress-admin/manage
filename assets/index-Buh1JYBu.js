import{d as ue,a as We,$ as ae,r as c,a0 as Y,au as Ze,b5 as Je,b as Xe,a1 as el,o as d,c as N,j as e,k as a,a2 as ll,e as l,w as E,x as y,t as z,F as T,p as F,m as _,Z as te,y as b,Y as oe,q as g,R as se,T as al,M as ne,P as re,G as tl,C as ol,D as sl,I as nl,ad as rl,a3 as ul,W as dl,ah as il,v as pl}from"./index-CHPWXQMS.js";import{E as ml}from"./el-upload-BSi3-28f.js";/* empty css                    */import{E as cl}from"./el-link-65nqHwgu.js";import{E as _l}from"./el-checkbox-Bs44zGAi.js";import{_ as fl}from"./upload-filled-CJWtoD7h.js";/* empty css                       *//* empty css                 *//* empty css                */import{E as vl}from"./el-tree-select-lb76Ej-W.js";import{_ as gl}from"./index-B-gTLope.js";import{E as bl,a as hl}from"./el-table-column-RcY-Zu97.js";/* empty css               */import{_ as yl}from"./index-CZUrYdTm.js";/* empty css               *//* empty css                */import{E as Vl,a as kl}from"./el-form-item-DYrO0bwr.js";import{E as wl}from"./el-date-picker-JU97UpPL.js";import{b as U}from"./index-CvNpfgIQ.js";import{o as Il}from"./index-D4YmNcPj.js";import{E as El}from"./index-BM49ysDq.js";import{E as Ul}from"./index-CKs9yFWR.js";import{E as Cl}from"./index-Cn5-TJFO.js";import{E as Nl,a as xl}from"./index-O50uHt8T.js";import"./index-CLn6eIrx.js";import"./_baseClone-fGdeM2Wz.js";import"./_initCloneObject-CAq2WuN8.js";import"./index-gMlI-fR7.js";import"./index-DV3YrQ4g.js";const Sl={class:"p-2"},Dl={class:"mb-[10px]"},Rl={class:"dialog-footer"},Tl=y("div",{class:"el-upload__text"},[b("将文件拖到此处，或"),y("em",null,"点击上传")],-1),Fl={class:"text-center el-upload__tip"},$l={class:"el-upload__tip"},Pl=y("span",null,"仅允许导入xls、xlsx格式文件。",-1),ql={class:"dialog-footer"},Bl=ue({name:"User"}),fa=ue({...Bl,setup(Ml){const de=We(),{proxy:n}=al(),{sys_normal_disable:H,sys_user_sex:ie}=ae(n==null?void 0:n.useDict("sys_normal_disable","sys_user_sex")),A=c(),M=c(!0),$=c(!0),pe=c([]);c(!0),c(!0);const K=c(0),x=c(["",""]),me=c(""),Q=c([]),ce=c(""),j=c([]),_e=c([]),f=Y({open:!1,title:"",isUploading:!1,updateSupport:0,headers:Ze(),url:"https://api.leadcodingway.com/prod-api/system/user/importData"}),w=c([{key:0,label:"用户编号",visible:!0,children:[]},{key:1,label:"用户名称",visible:!0,children:[]},{key:2,label:"用户昵称",visible:!0,children:[]},{key:3,label:"部门",visible:!0,children:[]},{key:4,label:"手机号码",visible:!0,children:[]},{key:5,label:"状态",visible:!0,children:[]},{key:6,label:"创建时间",visible:!0,children:[]}]),G=c(),W=c(),S=c(),L=c(),fe=c(),C=Y({visible:!1,title:""}),Z={userId:void 0,deptId:void 0,userName:"",nickName:void 0,password:"",phonenumber:void 0,email:void 0,sex:void 0,status:"0",remark:"",postIds:[],roleIds:[]},ve={form:{...Z},queryParams:{pageNum:1,pageSize:10,userName:"",phonenumber:"",status:"",deptId:"",roleId:""},rules:{userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"},{min:2,max:20,message:"用户名称长度必须介于 2 和 20 之间",trigger:"blur"}],nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"},{min:5,max:20,message:"用户密码长度必须介于 5 和 20 之间",trigger:"blur"},{pattern:/^[^<>"'|\\]+$/,message:`不能包含非法字符：< > " ' \\ |`,trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}],roleIds:[{required:!0,message:"用户角色不能为空",trigger:"blur"}]}},ge=Y(ve),{queryParams:i,form:r,rules:be}=ae(ge);Je(()=>{var s;(s=G.value)==null||s.filter(me.value)},{flush:"post"});const he=async()=>{const s=await U.deptTreeSelect();Q.value=s.data},I=async()=>{M.value=!0;const s=await U.listVpadminUser(n==null?void 0:n.addDateRange(i.value,x.value));M.value=!1,A.value=s.rows,K.value=s.total},D=()=>{i.value.pageNum=1,I()},ye=()=>{var s,t;x.value=["",""],(s=W.value)==null||s.resetFields(),i.value.pageNum=1,i.value.deptId=void 0,i.value.email="",(t=G.value)==null||t.setCurrentKey(void 0),D()},Ve=async s=>{const t=(s==null?void 0:s.userId)||pe.value,[p]=await ne(n==null?void 0:n.$modal.confirm('是否确认删除用户编号为"'+t+'"的数据项？'));p||(await U.delUser(t),await I(),n==null||n.$modal.msgSuccess("删除成功"))},ke=async s=>{let t=s.status==="0"?"启用":"停用";try{await(n==null?void 0:n.$modal.confirm('确认要"'+t+'""'+s.userName+'"用户吗?')),await U.changeUserStatus(s.userId,s.status),n==null||n.$modal.msgSuccess(t+"成功")}catch{s.status=s.status==="0"?"1":"0"}},we=s=>{const t=s.userId;de.push("/system/user-auth/role/"+t)},Ie=async s=>{const[t,p]=await ne(re.prompt('请输入"'+s.userName+'"的新密码',"提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,inputPattern:/^.{5,20}$/,inputErrorMessage:"用户密码长度必须介于 5 和 20 之间",inputValidator:m=>{if(/<|>|"|'|\||\\/.test(m))return`不能包含非法字符：< > " ' \\ |`}}));!t&&p&&(await U.resetUserPwd(s.userId,p.value),n==null||n.$modal.msgSuccess("修改成功，新密码是："+p.value))},Ee=()=>{n==null||n.download("system/user/exportVpadmin",{...i.value},`user_${new Date().getTime()}.xlsx`)},Ue=()=>{n==null||n.download("system/user/importTemplate",{},`user_template_${new Date().getTime()}.xlsx`)},Ce=()=>{f.isUploading=!0},Ne=(s,t)=>{var p;f.open=!1,f.isUploading=!1,(p=L.value)==null||p.handleRemove(t),re.alert("<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>"+s.msg+"</div>","导入结果",{dangerouslyUseHTMLString:!0}),I()};function xe(){var s;(s=L.value)==null||s.submit()}const Se=()=>{var s;r.value={...Z},(s=S.value)==null||s.resetFields()},De=()=>{C.visible=!1,Se()},Re=()=>{var s;(s=S.value)==null||s.validate(async t=>{t&&(r.value.userId?await U.updateUser(r.value):await U.addUser(r.value),n==null||n.$modal.msgSuccess("操作成功"),C.visible=!1,await I())})},Te=()=>{C.visible=!1,Fe()},Fe=()=>{var s,t;(s=S.value)==null||s.resetFields(),(t=S.value)==null||t.clearValidate(),r.value.id=void 0,r.value.status="1"};Xe(()=>{he(),I(),n==null||n.getConfigKey("sys.user.initPassword").then(s=>{ce.value=s.data})});async function $e(s){const t=await Il(s);j.value=t.data,r.value.postIds=[]}return(s,t)=>{const p=tl,m=Vl,P=ol,q=sl,Pe=wl,h=nl,J=kl,X=El,v=Ul,qe=yl,V=Cl,k=bl,Be=rl,O=ul,Me=hl,Ke=gl,Le=vl,Oe=Nl,Ye=xl,ee=dl,ze=fl,He=il,Ae=_l,Qe=cl,je=ml,B=el("hasPermi"),Ge=pl;return d(),N("div",Sl,[e(V,{gutter:20},{default:a(()=>[e(v,{lg:24,xs:24},{default:a(()=>{var o,le;return[e(ll,{"enter-active-class":(o=l(n))==null?void 0:o.animate.searchAnimate.enter,"leave-active-class":(le=l(n))==null?void 0:le.animate.searchAnimate.leave},{default:a(()=>[E(y("div",Dl,[e(X,{shadow:"hover"},{default:a(()=>[e(J,{ref_key:"queryFormRef",ref:W,model:l(i),inline:!0},{default:a(()=>[e(m,{label:"用户名称",prop:"userName"},{default:a(()=>[e(p,{modelValue:l(i).userName,"onUpdate:modelValue":t[0]||(t[0]=u=>l(i).userName=u),placeholder:"请输入用户名称",clearable:"",onKeyup:z(D,["enter"])},null,8,["modelValue"])]),_:1}),e(m,{label:"邮箱",prop:"email"},{default:a(()=>[e(p,{modelValue:l(i).email,"onUpdate:modelValue":t[1]||(t[1]=u=>l(i).email=u),placeholder:"请输入用户名称",clearable:"",onKeyup:z(D,["enter"])},null,8,["modelValue"])]),_:1}),e(m,{label:"Source",prop:"source"},{default:a(()=>[e(p,{modelValue:l(i).source,"onUpdate:modelValue":t[2]||(t[2]=u=>l(i).source=u),placeholder:"请输入用户名称",clearable:"",onKeyup:z(D,["enter"])},null,8,["modelValue"])]),_:1}),e(m,{label:"状态",prop:"status"},{default:a(()=>[e(q,{modelValue:l(i).status,"onUpdate:modelValue":t[3]||(t[3]=u=>l(i).status=u),placeholder:"用户状态",clearable:""},{default:a(()=>[(d(!0),N(T,null,F(l(H),u=>(d(),_(P,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"创建时间",style:{width:"308px"}},{default:a(()=>[e(Pe,{modelValue:l(x),"onUpdate:modelValue":t[4]||(t[4]=u=>te(x)?x.value=u:null),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]},null,8,["modelValue","default-time"])]),_:1}),e(m,null,{default:a(()=>[e(h,{type:"primary",icon:"Search",onClick:D},{default:a(()=>[b("搜索")]),_:1}),e(h,{icon:"Refresh",onClick:ye},{default:a(()=>[b("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[oe,l($)]])]),_:1},8,["enter-active-class","leave-active-class"]),e(X,{shadow:"hover"},{header:a(()=>[e(V,{gutter:10},{default:a(()=>[e(v,{span:1.5},{default:a(()=>[E((d(),_(h,{type:"primary",plain:"",icon:"Download",onClick:Ee},{default:a(()=>[b("导出")]),_:1})),[[B,["vpadmin:project:export"]]])]),_:1}),e(qe,{showSearch:l($),"onUpdate:showSearch":t[5]||(t[5]=u=>te($)?$.value=u:null),onQueryTable:I},null,8,["showSearch"])]),_:1})]),default:a(()=>[E((d(),_(Me,{data:l(A)},{default:a(()=>[l(w)[0].visible?(d(),_(k,{key:"userId",label:"用户编号",align:"center",prop:"userId"})):g("",!0),l(w)[1].visible?(d(),_(k,{key:"userName",label:"用户名称",align:"center",prop:"userName","show-overflow-tooltip":!0})):g("",!0),l(w)[3].visible?(d(),_(k,{key:"deptName",label:"部门",align:"center",prop:"deptName","show-overflow-tooltip":!0})):g("",!0),l(w)[4].visible?(d(),_(k,{key:"email",label:"邮箱",align:"center",prop:"email",width:"200"})):g("",!0),l(w)[5].visible?(d(),_(k,{key:"source",label:"Source",align:"center",prop:"source",width:"100"})):g("",!0),l(w)[6].visible?(d(),_(k,{key:"status",label:"状态",align:"center",width:"80"},{default:a(u=>[e(Be,{modelValue:u.row.status,"onUpdate:modelValue":R=>u.row.status=R,"active-value":"0","inactive-value":"1",onChange:R=>ke(u.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})):g("",!0),l(w)[6].visible?(d(),_(k,{key:6,label:"创建时间",align:"center",prop:"createTime",width:"160"},{default:a(u=>[y("span",null,se(u.row.createTime),1)]),_:1})):g("",!0),e(k,{label:"操作",fixed:"right",width:"120","class-name":"small-padding fixed-width"},{default:a(u=>[u.row.userId!==1?(d(),_(O,{key:0,content:"删除",placement:"top"},{default:a(()=>[E(e(h,{link:"",type:"primary",icon:"Delete",onClick:R=>Ve(u.row)},null,8,["onClick"]),[[B,["system:user:remove"]]])]),_:2},1024)):g("",!0),u.row.userId!==1?(d(),_(O,{key:1,content:"重置密码",placement:"top"},{default:a(()=>[E(e(h,{link:"",type:"primary",icon:"Key",onClick:R=>Ie(u.row)},null,8,["onClick"]),[[B,["system:user:resetPwd"]]])]),_:2},1024)):g("",!0),u.row.userId!==1?(d(),_(O,{key:2,content:"分配角色",placement:"top"},{default:a(()=>[E(e(h,{link:"",type:"primary",icon:"CircleCheck",onClick:R=>we(u.row)},null,8,["onClick"]),[[B,["system:user:edit"]]])]),_:2},1024)):g("",!0)]),_:1})]),_:1},8,["data"])),[[Ge,l(M)]]),E(e(Ke,{page:l(i).pageNum,"onUpdate:page":t[6]||(t[6]=u=>l(i).pageNum=u),limit:l(i).pageSize,"onUpdate:limit":t[7]||(t[7]=u=>l(i).pageSize=u),total:l(K),onPagination:I},null,8,["page","limit","total"]),[[oe,l(K)>0]])]),_:1})]}),_:1})]),_:1}),e(ee,{ref_key:"formDialogRef",ref:fe,modelValue:l(C).visible,"onUpdate:modelValue":t[20]||(t[20]=o=>l(C).visible=o),title:l(C).title,width:"600px","append-to-body":"",onClose:Te},{footer:a(()=>[y("div",Rl,[e(h,{type:"primary",onClick:Re},{default:a(()=>[b("确 定")]),_:1}),e(h,{onClick:t[19]||(t[19]=o=>De())},{default:a(()=>[b("取 消")]),_:1})])]),default:a(()=>[e(J,{ref_key:"userFormRef",ref:S,model:l(r),rules:l(be),"label-width":"80px"},{default:a(()=>[e(V,null,{default:a(()=>[e(v,{span:12},{default:a(()=>[e(m,{label:"用户昵称",prop:"nickName"},{default:a(()=>[e(p,{modelValue:l(r).nickName,"onUpdate:modelValue":t[8]||(t[8]=o=>l(r).nickName=o),placeholder:"请输入用户昵称",maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:12},{default:a(()=>[e(m,{label:"归属部门",prop:"deptId"},{default:a(()=>[e(Le,{modelValue:l(r).deptId,"onUpdate:modelValue":t[9]||(t[9]=o=>l(r).deptId=o),data:l(Q),props:{value:"id",label:"label",children:"children"},"value-key":"id",placeholder:"请选择归属部门","check-strictly":"",onChange:$e},null,8,["modelValue","data"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:a(()=>[e(v,{span:12},{default:a(()=>[e(m,{label:"手机号码",prop:"phonenumber"},{default:a(()=>[e(p,{modelValue:l(r).phonenumber,"onUpdate:modelValue":t[10]||(t[10]=o=>l(r).phonenumber=o),placeholder:"请输入手机号码",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),e(v,{span:12},{default:a(()=>[e(m,{label:"邮箱",prop:"email"},{default:a(()=>[e(p,{modelValue:l(r).email,"onUpdate:modelValue":t[11]||(t[11]=o=>l(r).email=o),placeholder:"请输入邮箱",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:a(()=>[e(v,{span:12},{default:a(()=>[l(r).userId==null?(d(),_(m,{key:0,label:"用户名称",prop:"userName"},{default:a(()=>[e(p,{modelValue:l(r).userName,"onUpdate:modelValue":t[12]||(t[12]=o=>l(r).userName=o),placeholder:"请输入用户名称",maxlength:"30"},null,8,["modelValue"])]),_:1})):g("",!0)]),_:1}),e(v,{span:12},{default:a(()=>[l(r).userId==null?(d(),_(m,{key:0,label:"用户密码",prop:"password"},{default:a(()=>[e(p,{modelValue:l(r).password,"onUpdate:modelValue":t[13]||(t[13]=o=>l(r).password=o),placeholder:"请输入用户密码",type:"password",maxlength:"20","show-password":""},null,8,["modelValue"])]),_:1})):g("",!0)]),_:1})]),_:1}),e(V,null,{default:a(()=>[e(v,{span:12},{default:a(()=>[e(m,{label:"用户性别"},{default:a(()=>[e(q,{modelValue:l(r).sex,"onUpdate:modelValue":t[14]||(t[14]=o=>l(r).sex=o),placeholder:"请选择"},{default:a(()=>[(d(!0),N(T,null,F(l(ie),o=>(d(),_(P,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(v,{span:12},{default:a(()=>[e(m,{label:"状态"},{default:a(()=>[e(Ye,{modelValue:l(r).status,"onUpdate:modelValue":t[15]||(t[15]=o=>l(r).status=o)},{default:a(()=>[(d(!0),N(T,null,F(l(H),o=>(d(),_(Oe,{key:o.value,value:o.value},{default:a(()=>[b(se(o.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:a(()=>[e(v,{span:12},{default:a(()=>[e(m,{label:"岗位"},{default:a(()=>[e(q,{modelValue:l(r).postIds,"onUpdate:modelValue":t[16]||(t[16]=o=>l(r).postIds=o),multiple:"",placeholder:"请选择"},{default:a(()=>[(d(!0),N(T,null,F(l(j),o=>(d(),_(P,{key:o.postId,label:o.postName,value:o.postId,disabled:o.status=="1"},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(v,{span:12},{default:a(()=>[e(m,{label:"角色",prop:"roleIds"},{default:a(()=>[e(q,{modelValue:l(r).roleIds,"onUpdate:modelValue":t[17]||(t[17]=o=>l(r).roleIds=o),filterable:"",multiple:"",placeholder:"请选择"},{default:a(()=>[(d(!0),N(T,null,F(l(_e),o=>(d(),_(P,{key:o.roleId,label:o.roleName,value:o.roleId,disabled:o.status=="1"},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:a(()=>[e(v,{span:24},{default:a(()=>[e(m,{label:"备注"},{default:a(()=>[e(p,{modelValue:l(r).remark,"onUpdate:modelValue":t[18]||(t[18]=o=>l(r).remark=o),type:"textarea",placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(ee,{modelValue:l(f).open,"onUpdate:modelValue":t[23]||(t[23]=o=>l(f).open=o),title:l(f).title,width:"400px","append-to-body":""},{footer:a(()=>[y("div",ql,[e(h,{type:"primary",onClick:xe},{default:a(()=>[b("确 定")]),_:1}),e(h,{onClick:t[22]||(t[22]=o=>l(f).open=!1)},{default:a(()=>[b("取 消")]),_:1})])]),default:a(()=>[e(je,{ref_key:"uploadRef",ref:L,limit:1,accept:".xlsx, .xls",headers:l(f).headers,action:l(f).url+"?updateSupport="+l(f).updateSupport,disabled:l(f).isUploading,"on-progress":Ce,"on-success":Ne,"auto-upload":!1,drag:""},{tip:a(()=>[y("div",Fl,[y("div",$l,[e(Ae,{modelValue:l(f).updateSupport,"onUpdate:modelValue":t[21]||(t[21]=o=>l(f).updateSupport=o)},null,8,["modelValue"]),b("是否更新已经存在的用户数据")]),Pl,e(Qe,{type:"primary",underline:!1,style:{"font-size":"12px","vertical-align":"baseline"},onClick:Ue},{default:a(()=>[b("下载模板")]),_:1})])]),default:a(()=>[e(He,{class:"el-icon--upload"},{default:a(()=>[e(ze)]),_:1}),Tl]),_:1},8,["headers","action","disabled"])]),_:1},8,["modelValue","title"])])}}});export{fa as default};
