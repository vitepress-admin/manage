import{a2 as E,d as R,aq as h,r as d,cU as q,k as M,D as G,c as r,p,q as g,e as _,y as u,F as k,m as b,t as y,i as I,bc as H,o as c,z as x,a1 as J,x as K,_ as P}from"./index-lTSpdEk7.js";import{E as Q}from"./el-link-Dk4uAv7P.js";import{E as W}from"./el-progress-dYlq0ZXs.js";function ce(o){return E({url:"/resource/oss/list",method:"get",params:o})}function X(o){return E({url:"/resource/oss/listByIds/"+o,method:"get"})}function Y(o){return E({url:"/resource/oss/"+o,method:"delete"})}const Z={class:"upload-file"},ee={key:0,class:"el-upload__tip"},le={style:{color:"#f56c6c"}},te={style:{color:"#f56c6c"}},se={class:"el-icon-document"},ae={class:"ele-upload-list__item-content-action"},oe=R({__name:"index",props:{modelValue:{type:[String,Object,Array],default:()=>[]},limit:h.number.def(5),fileSize:h.number.def(5),fileType:h.array.def(["doc","xls","ppt","txt","pdf"]),isShowTip:h.bool.def(!0)},emits:["update:modelValue"],setup(o,{emit:B}){const i=o,{proxy:t}=J(),S=B,f=d(0),v=d([]),V=d("https://api.vpadmin.org/prod-api"+"/resource/oss/upload"),w=d(q()),n=d([]),L=M(()=>i.isShowTip&&(i.fileType||i.fileSize)),$=d();G(()=>i.modelValue,async e=>{if(e){let l=1,s=[];Array.isArray(e)?s=e:s=(await X(e)).data.map(m=>({name:m.originalName,url:m.url,ossId:m.ossId})),n.value=s.map(a=>(a={name:a.name,url:a.url,ossId:a.ossId},a.uid=a.uid||new Date().getTime()+l++,a))}else return n.value=[],[]},{deep:!0,immediate:!0});const N=e=>{if(i.fileType.length){const l=e.name.split("."),s=l[l.length-1];if(!(i.fileType.indexOf(s)>=0))return t==null||t.$modal.msgError(`文件格式不正确, 请上传${i.fileType.join("/")}格式文件!`),!1}return i.fileSize&&!(e.size/1024/1024<i.fileSize)?(t==null||t.$modal.msgError(`上传文件大小不能超过 ${i.fileSize} MB!`),!1):(t==null||t.$modal.loading("正在上传文件，请稍候..."),f.value++,!0)},O=()=>{t==null||t.$modal.msgError(`上传文件数量不能超过 ${i.limit} 个!`)},C=()=>{t==null||t.$modal.msgError("上传文件失败")},D=(e,l)=>{var s;e.code===200?(v.value.push({name:e.data.fileName,url:e.data.url,ossId:e.data.ossId}),U()):(f.value--,t==null||t.$modal.closeLoading(),t==null||t.$modal.msgError(e.msg),(s=$.value)==null||s.handleRemove(l),U())},F=e=>{let l=n.value[e].ossId;Y(l),n.value.splice(e,1),S("update:modelValue",z(n.value))},U=()=>{f.value>0&&v.value.length===f.value&&(n.value=n.value.filter(e=>e.url!==void 0).concat(v.value),v.value=[],f.value=0,S("update:modelValue",z(n.value)),t==null||t.$modal.closeLoading())},j=e=>e.lastIndexOf("/")>-1?e.slice(e.lastIndexOf("/")+1):e,z=(e,l)=>{let s="";return l=l||",",e.forEach(a=>{a.ossId&&(s+=a.ossId+l)}),s!=""?s.substring(0,s.length-1):""};return(e,l)=>{const s=K,a=W,m=Q;return c(),r("div",Z,[p(a,{ref_key:"fileUploadRef",ref:$,multiple:"",action:_(V),"before-upload":N,"file-list":_(n),limit:o.limit,"on-error":C,"on-exceed":O,"on-success":D,"show-file-list":!1,headers:_(w),class:"upload-file-uploader"},{default:g(()=>[p(s,{type:"primary"},{default:g(()=>l[0]||(l[0]=[u("选取文件")])),_:1})]),_:1},8,["action","file-list","limit","headers"]),_(L)?(c(),r("div",ee,[l[3]||(l[3]=u(" 请上传 ")),o.fileSize?(c(),r(k,{key:0},[l[1]||(l[1]=u(" 大小不超过 ")),b("b",le,y(o.fileSize)+"MB",1)],64)):I("",!0),o.fileType?(c(),r(k,{key:1},[l[2]||(l[2]=u(" 格式为 ")),b("b",te,y(o.fileType.join("/")),1)],64)):I("",!0),l[4]||(l[4]=u(" 的文件 "))])):I("",!0),p(H,{class:"upload-file-list el-upload-list el-upload-list--text",name:"el-fade-in-linear",tag:"ul"},{default:g(()=>[(c(!0),r(k,null,x(_(n),(T,A)=>(c(),r("li",{key:T.uid,class:"el-upload-list__item ele-upload-list__item-content"},[p(m,{href:`${T.url}`,underline:!1,target:"_blank"},{default:g(()=>[b("span",se,y(j(T.name)),1)]),_:2},1032,["href"]),b("div",ae,[p(s,{type:"danger",link:"",onClick:ne=>F(A)},{default:g(()=>l[5]||(l[5]=[u("删除")])),_:2},1032,["onClick"])])]))),128))]),_:1})])}}}),fe=P(oe,[["__scopeId","data-v-bcbe3161"]]);export{fe as _,ce as a,Y as d,X as l};
