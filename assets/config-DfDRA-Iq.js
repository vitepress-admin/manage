import{a4 as K,d as oe,ac as Y,r as b,ad as Z,b as Ve,c as ee,p as t,q as o,e as l,ah as Ce,a3 as Ke,B as we,o as r,w as V,W as le,m as te,I as ae,y as m,A as u,ag as Ee,i as g,F as Se,z as Ue,t as Ne,U as Pe,R as Ie,S as qe,x as Fe,af as Re,aq as Oe,P as $e,ai as xe,v as De}from"./index-Dz1U06Ul.js";/* empty css                  *//* empty css                       *//* empty css                 */import{_ as Te}from"./index-CfRSGlQf.js";import{E as he,a as Be}from"./el-table-column-BtdUDimX.js";import"./el-checkbox-BP8O_R-g.js";/* empty css               */import{_ as Le}from"./index-31S5Zo5y.js";/* empty css               *//* empty css                */import{E as ze,a as Ae}from"./el-form-item-BRz6LH5v.js";import{E as He}from"./index-z7a3Kden.js";import{E as Qe}from"./index-B8hIDeR1.js";import{E as je}from"./index-D4RdGC6H.js";import{E as Ge,a as Me}from"./index-CXxb8z4z.js";import"./_initCloneObject-bMWQ6BhU.js";/* empty css                */import"./index-Bhatseor.js";import"./_baseClone-CTTMyzww.js";function We(f){return K({url:"/resource/oss/config/list",method:"get",params:f})}function Je(f){return K({url:"/resource/oss/config/"+f,method:"get"})}function Xe(f){return K({url:"/resource/oss/config",method:"post",data:f})}function Ye(f){return K({url:"/resource/oss/config",method:"put",data:f})}function Ze(f){return K({url:"/resource/oss/config/"+f,method:"delete"})}function el(f,i,q){return K({url:"/resource/oss/config/changeStatus",method:"put",data:{ossConfigId:f,status:i,configKey:q}})}const ll={class:"p-2"},tl={class:"mb-[10px]"},al={class:"dialog-footer"},ol=oe({name:"OssConfig"}),El=oe({...ol,setup(f){const{proxy:i}=Ke(),{sys_yes_no:q}=Y(i==null?void 0:i.useDict("sys_yes_no")),F=b([]),S=b(!1),w=b(!0),U=b(!0),R=b([]),h=b(!0),B=b(!0),O=b(0),L=b(),$=b(),v=Z({visible:!1,title:""}),_=b([{key:0,label:"主建",visible:!0},{key:1,label:"配置key",visible:!1},{key:2,label:"访问站点",visible:!0},{key:3,label:"自定义域名",visible:!0},{key:4,label:"桶名称",visible:!0},{key:5,label:"前缀",visible:!0},{key:6,label:"域",visible:!0},{key:7,label:"桶权限类型",visible:!0},{key:8,label:"状态",visible:!0}]),z={ossConfigId:void 0,configKey:"",accessKey:"",secretKey:"",bucketName:"",prefix:"",endpoint:"",domain:"",isHttps:"N",accessPolicy:"1",region:"",status:"1",remark:""},se=Z({form:{...z},queryParams:{pageNum:1,pageSize:10,configKey:"",bucketName:"",status:""},rules:{configKey:[{required:!0,message:"configKey不能为空",trigger:"blur"}],accessKey:[{required:!0,message:"accessKey不能为空",trigger:"blur"},{min:2,max:200,message:"accessKey长度必须介于 2 和 100 之间",trigger:"blur"}],secretKey:[{required:!0,message:"secretKey不能为空",trigger:"blur"},{min:2,max:100,message:"secretKey长度必须介于 2 和 100 之间",trigger:"blur"}],bucketName:[{required:!0,message:"bucketName不能为空",trigger:"blur"},{min:2,max:100,message:"bucketName长度必须介于 2 和 100 之间",trigger:"blur"}],endpoint:[{required:!0,message:"endpoint不能为空",trigger:"blur"},{min:2,max:100,message:"endpoint名称长度必须介于 2 和 100 之间",trigger:"blur"}],accessPolicy:[{required:!0,message:"accessPolicy不能为空",trigger:"blur"}]}}),{queryParams:p,form:n,rules:ne}=Y(se),C=async()=>{w.value=!0;const s=await We(p.value);F.value=s.rows,O.value=s.total,w.value=!1},ie=()=>{v.visible=!1,x()},x=()=>{var s;n.value={...z},(s=$.value)==null||s.resetFields()},N=()=>{p.value.pageNum=1,C()},re=()=>{var s;(s=L.value)==null||s.resetFields(),N()},ue=s=>{R.value=s.map(e=>e.ossConfigId),h.value=s.length!=1,B.value=!s.length},de=()=>{x(),v.visible=!0,v.title="添加对象存储配置"},A=async s=>{x();const e=(s==null?void 0:s.ossConfigId)||R.value[0],c=await Je(e);Object.assign(n.value,c.data),v.visible=!0,v.title="修改对象存储配置"},me=()=>{var s;(s=$.value)==null||s.validate(async e=>{e&&(S.value=!0,n.value.ossConfigId?await Ye(n.value).finally(()=>S.value=!1):await Xe(n.value).finally(()=>S.value=!1),i==null||i.$modal.msgSuccess("新增成功"),v.visible=!1,await C())})},pe=async s=>{let e=s.status==="0"?"启用":"停用";try{await(i==null?void 0:i.$modal.confirm('确认要"'+e+'""'+s.configKey+'"配置吗?')),await el(s.ossConfigId,s.status,s.configKey),await C(),i==null||i.$modal.msgSuccess(e+"成功")}catch{return}finally{s.status=s.status==="0"?"1":"0"}},H=async s=>{const e=(s==null?void 0:s.ossConfigId)||R.value;await(i==null?void 0:i.$modal.confirm('是否确认删除OSS配置编号为"'+e+'"的数据项?')),w.value=!0,await Ze(e).finally(()=>w.value=!1),await C(),i==null||i.$modal.msgSuccess("删除成功")};return Ve(()=>{C()}),(s,e)=>{var J,X;const c=Pe,d=ze,Q=Ie,ce=qe,k=Fe,j=Ae,G=He,D=Qe,fe=Le,ge=je,y=he,T=Re,ye=Oe,M=$e,be=Be,ve=Te,P=Ge,W=Me,_e=we,E=xe("hasPermi"),ke=De;return r(),ee("div",ll,[t(Ce,{"enter-active-class":(J=l(i))==null?void 0:J.animate.searchAnimate.enter,"leave-active-class":(X=l(i))==null?void 0:X.animate.searchAnimate.leave},{default:o(()=>[V(te("div",tl,[t(G,{shadow:"hover"},{default:o(()=>[t(j,{ref_key:"queryFormRef",ref:L,model:l(p),inline:!0},{default:o(()=>[t(d,{label:"配置key",prop:"configKey"},{default:o(()=>[t(c,{modelValue:l(p).configKey,"onUpdate:modelValue":e[0]||(e[0]=a=>l(p).configKey=a),placeholder:"配置key",clearable:"",onKeyup:ae(N,["enter"])},null,8,["modelValue"])]),_:1}),t(d,{label:"桶名称",prop:"bucketName"},{default:o(()=>[t(c,{modelValue:l(p).bucketName,"onUpdate:modelValue":e[1]||(e[1]=a=>l(p).bucketName=a),placeholder:"请输入桶名称",clearable:"",onKeyup:ae(N,["enter"])},null,8,["modelValue"])]),_:1}),t(d,{label:"是否默认",prop:"status"},{default:o(()=>[t(ce,{modelValue:l(p).status,"onUpdate:modelValue":e[2]||(e[2]=a=>l(p).status=a),placeholder:"请选择状态",clearable:""},{default:o(()=>[t(Q,{key:"0",label:"是",value:"0"}),t(Q,{key:"1",label:"否",value:"1"})]),_:1},8,["modelValue"])]),_:1}),t(d,null,{default:o(()=>[t(k,{type:"primary",icon:"search",onClick:N},{default:o(()=>e[20]||(e[20]=[m("搜索")])),_:1}),t(k,{icon:"Refresh",onClick:re},{default:o(()=>e[21]||(e[21]=[m("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],512),[[le,l(U)]])]),_:1},8,["enter-active-class","leave-active-class"]),t(G,{shadow:"hover"},{header:o(()=>[t(ge,{gutter:10,class:"mb8"},{default:o(()=>[t(D,{span:1.5},{default:o(()=>[V((r(),u(k,{type:"primary",plain:"",icon:"Plus",onClick:de},{default:o(()=>e[22]||(e[22]=[m("新增")])),_:1})),[[E,["system:ossConfig:add"]]])]),_:1}),t(D,{span:1.5},{default:o(()=>[V((r(),u(k,{type:"success",plain:"",icon:"Edit",disabled:l(h),onClick:e[3]||(e[3]=a=>A())},{default:o(()=>e[23]||(e[23]=[m("修改")])),_:1},8,["disabled"])),[[E,["system:ossConfig:edit"]]])]),_:1}),t(D,{span:1.5},{default:o(()=>[V((r(),u(k,{type:"danger",plain:"",icon:"Delete",disabled:l(B),onClick:e[4]||(e[4]=a=>H())},{default:o(()=>e[24]||(e[24]=[m(" 删除 ")])),_:1},8,["disabled"])),[[E,["system:ossConfig:remove"]]])]),_:1}),t(fe,{showSearch:l(U),"onUpdate:showSearch":e[5]||(e[5]=a=>Ee(U)?U.value=a:null),onQueryTable:C},null,8,["showSearch"])]),_:1})]),default:o(()=>[V((r(),u(be,{data:l(F),onSelectionChange:ue},{default:o(()=>[t(y,{type:"selection",width:"55",align:"center"}),l(_)[0].visible?(r(),u(y,{key:0,label:"主建",align:"center",prop:"ossConfigId"})):g("",!0),l(_)[1].visible?(r(),u(y,{key:1,label:"配置key",align:"center",prop:"configKey"})):g("",!0),l(_)[2].visible?(r(),u(y,{key:2,label:"访问站点",align:"center",prop:"endpoint",width:"200"})):g("",!0),l(_)[3].visible?(r(),u(y,{key:3,label:"自定义域名",align:"center",prop:"domain",width:"200"})):g("",!0),l(_)[4].visible?(r(),u(y,{key:4,label:"桶名称",align:"center",prop:"bucketName"})):g("",!0),l(_)[5].visible?(r(),u(y,{key:5,label:"前缀",align:"center",prop:"prefix"})):g("",!0),l(_)[6].visible?(r(),u(y,{key:6,label:"域",align:"center",prop:"region"})):g("",!0),l(_)[7].visible?(r(),u(y,{key:7,label:"桶权限类型",align:"center",prop:"accessPolicy"},{default:o(a=>[a.row.accessPolicy==="0"?(r(),u(T,{key:0,type:"warning"},{default:o(()=>e[25]||(e[25]=[m("private")])),_:1})):g("",!0),a.row.accessPolicy==="1"?(r(),u(T,{key:1,type:"success"},{default:o(()=>e[26]||(e[26]=[m("public")])),_:1})):g("",!0),a.row.accessPolicy==="2"?(r(),u(T,{key:2,type:"info"},{default:o(()=>e[27]||(e[27]=[m("custom")])),_:1})):g("",!0)]),_:1})):g("",!0),l(_)[8].visible?(r(),u(y,{key:8,label:"是否默认",align:"center",prop:"status"},{default:o(a=>[t(ye,{modelValue:a.row.status,"onUpdate:modelValue":I=>a.row.status=I,"active-value":"0","inactive-value":"1",onChange:I=>pe(a.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})):g("",!0),t(y,{label:"操作",fixed:"right",align:"center",width:"150","class-name":"small-padding"},{default:o(a=>[t(M,{content:"修改",placement:"top"},{default:o(()=>[V(t(k,{link:"",type:"primary",icon:"Edit",onClick:I=>A(a.row)},null,8,["onClick"]),[[E,["system:ossConfig:edit"]]])]),_:2},1024),t(M,{content:"删除",placement:"top"},{default:o(()=>[V(t(k,{link:"",type:"primary",icon:"Delete",onClick:I=>H(a.row)},null,8,["onClick"]),[[E,["system:ossConfig:remove"]]])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[ke,l(w)]]),V(t(ve,{page:l(p).pageNum,"onUpdate:page":e[6]||(e[6]=a=>l(p).pageNum=a),limit:l(p).pageSize,"onUpdate:limit":e[7]||(e[7]=a=>l(p).pageSize=a),total:l(O),onPagination:C},null,8,["page","limit","total"]),[[le,l(O)>0]])]),_:1}),t(_e,{modelValue:l(v).visible,"onUpdate:modelValue":e[19]||(e[19]=a=>l(v).visible=a),title:l(v).title,width:"800px","append-to-body":""},{footer:o(()=>[te("div",al,[t(k,{loading:l(S),type:"primary",onClick:me},{default:o(()=>e[31]||(e[31]=[m("确 定")])),_:1},8,["loading"]),t(k,{onClick:ie},{default:o(()=>e[32]||(e[32]=[m("取 消")])),_:1})])]),default:o(()=>[t(j,{ref_key:"ossConfigFormRef",ref:$,model:l(n),rules:l(ne),"label-width":"120px"},{default:o(()=>[t(d,{label:"配置key",prop:"configKey"},{default:o(()=>[t(c,{modelValue:l(n).configKey,"onUpdate:modelValue":e[8]||(e[8]=a=>l(n).configKey=a),placeholder:"请输入配置key"},null,8,["modelValue"])]),_:1}),t(d,{label:"访问站点",prop:"endpoint"},{default:o(()=>[t(c,{modelValue:l(n).endpoint,"onUpdate:modelValue":e[9]||(e[9]=a=>l(n).endpoint=a),placeholder:"请输入访问站点"},null,8,["modelValue"])]),_:1}),t(d,{label:"自定义域名",prop:"domain"},{default:o(()=>[t(c,{modelValue:l(n).domain,"onUpdate:modelValue":e[10]||(e[10]=a=>l(n).domain=a),placeholder:"请输入自定义域名"},null,8,["modelValue"])]),_:1}),t(d,{label:"accessKey",prop:"accessKey"},{default:o(()=>[t(c,{modelValue:l(n).accessKey,"onUpdate:modelValue":e[11]||(e[11]=a=>l(n).accessKey=a),placeholder:"请输入accessKey"},null,8,["modelValue"])]),_:1}),t(d,{label:"secretKey",prop:"secretKey"},{default:o(()=>[t(c,{modelValue:l(n).secretKey,"onUpdate:modelValue":e[12]||(e[12]=a=>l(n).secretKey=a),placeholder:"请输入秘钥","show-password":""},null,8,["modelValue"])]),_:1}),t(d,{label:"桶名称",prop:"bucketName"},{default:o(()=>[t(c,{modelValue:l(n).bucketName,"onUpdate:modelValue":e[13]||(e[13]=a=>l(n).bucketName=a),placeholder:"请输入桶名称"},null,8,["modelValue"])]),_:1}),t(d,{label:"前缀",prop:"prefix"},{default:o(()=>[t(c,{modelValue:l(n).prefix,"onUpdate:modelValue":e[14]||(e[14]=a=>l(n).prefix=a),placeholder:"请输入前缀"},null,8,["modelValue"])]),_:1}),t(d,{label:"是否HTTPS"},{default:o(()=>[t(W,{modelValue:l(n).isHttps,"onUpdate:modelValue":e[15]||(e[15]=a=>l(n).isHttps=a)},{default:o(()=>[(r(!0),ee(Se,null,Ue(l(q),a=>(r(),u(P,{key:a.value,value:a.value},{default:o(()=>[m(Ne(a.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"桶权限类型"},{default:o(()=>[t(W,{modelValue:l(n).accessPolicy,"onUpdate:modelValue":e[16]||(e[16]=a=>l(n).accessPolicy=a)},{default:o(()=>[t(P,{value:"0"},{default:o(()=>e[28]||(e[28]=[m("private")])),_:1}),t(P,{value:"1"},{default:o(()=>e[29]||(e[29]=[m("public")])),_:1}),t(P,{value:"2"},{default:o(()=>e[30]||(e[30]=[m("custom")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"域",prop:"region"},{default:o(()=>[t(c,{modelValue:l(n).region,"onUpdate:modelValue":e[17]||(e[17]=a=>l(n).region=a),placeholder:"请输入域"},null,8,["modelValue"])]),_:1}),t(d,{label:"备注",prop:"remark"},{default:o(()=>[t(c,{modelValue:l(n).remark,"onUpdate:modelValue":e[18]||(e[18]=a=>l(n).remark=a),type:"textarea",placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{El as default};
