import{ac as E,d as D,ae as v,r as d,au as M,Q as q,i as G,o as r,c as u,j as p,k as _,y as c,e as h,F as y,x as T,R as I,q as k,p as H,bp as Q,I as x,T as J,N as K}from"./index-CHPWXQMS.js";import{E as P}from"./el-link-65nqHwgu.js";import{E as W}from"./el-upload-BSi3-28f.js";/* empty css                    */function fe(o){return E({url:"/resource/oss/list",method:"get",params:o})}function X(o){return E({url:"/resource/oss/listByIds/"+o,method:"get"})}function Y(o){return E({url:"/resource/oss/"+o,method:"delete"})}const Z={class:"upload-file"},ee={key:0,class:"el-upload__tip"},le={style:{color:"#f56c6c"}},te={style:{color:"#f56c6c"}},se={class:"el-icon-document"},ae={class:"ele-upload-list__item-content-action"},oe=D({__name:"index",props:{modelValue:{type:[String,Object,Array],default:()=>[]},limit:v.number.def(5),fileSize:v.number.def(5),fileType:v.array.def(["doc","xls","ppt","txt","pdf"]),isShowTip:v.bool.def(!0)},emits:["update:modelValue"],setup(o,{emit:N}){const i=o,{proxy:l}=J(),S=N,f=d(0),g=d([]),U=d("https://api.leadcodingway.com/prod-api"+"/resource/oss/upload"),V=d(M()),n=d([]),z=q(()=>i.isShowTip&&(i.fileType||i.fileSize)),$=d();G(()=>i.modelValue,async e=>{if(e){let s=1,t=[];Array.isArray(e)?t=e:t=(await X(e)).data.map(m=>({name:m.originalName,url:m.url,ossId:m.ossId})),n.value=t.map(a=>(a={name:a.name,url:a.url,ossId:a.ossId},a.uid=a.uid||new Date().getTime()+s++,a))}else return n.value=[],[]},{deep:!0,immediate:!0});const L=e=>{if(i.fileType.length){const s=e.name.split("."),t=s[s.length-1];if(!(i.fileType.indexOf(t)>=0))return l==null||l.$modal.msgError(`文件格式不正确, 请上传${i.fileType.join("/")}格式文件!`),!1}return i.fileSize&&!(e.size/1024/1024<i.fileSize)?(l==null||l.$modal.msgError(`上传文件大小不能超过 ${i.fileSize} MB!`),!1):(l==null||l.$modal.loading("正在上传文件，请稍候..."),f.value++,!0)},O=()=>{l==null||l.$modal.msgError(`上传文件数量不能超过 ${i.limit} 个!`)},C=()=>{l==null||l.$modal.msgError("上传文件失败")},j=(e,s)=>{var t;e.code===200?(g.value.push({name:e.data.fileName,url:e.data.url,ossId:e.data.ossId}),w()):(f.value--,l==null||l.$modal.closeLoading(),l==null||l.$modal.msgError(e.msg),(t=$.value)==null||t.handleRemove(s),w())},F=e=>{let s=n.value[e].ossId;Y(s),n.value.splice(e,1),S("update:modelValue",B(n.value))},w=()=>{f.value>0&&g.value.length===f.value&&(n.value=n.value.filter(e=>e.url!==void 0).concat(g.value),g.value=[],f.value=0,S("update:modelValue",B(n.value)),l==null||l.$modal.closeLoading())},R=e=>e.lastIndexOf("/")>-1?e.slice(e.lastIndexOf("/")+1):e,B=(e,s)=>{let t="";return s=s||",",e.forEach(a=>{a.ossId&&(t+=a.ossId+s)}),t!=""?t.substring(0,t.length-1):""};return(e,s)=>{const t=x,a=W,m=P;return r(),u("div",Z,[p(a,{ref_key:"fileUploadRef",ref:$,multiple:"",action:h(U),"before-upload":L,"file-list":h(n),limit:o.limit,"on-error":C,"on-exceed":O,"on-success":j,"show-file-list":!1,headers:h(V),class:"upload-file-uploader"},{default:_(()=>[p(t,{type:"primary"},{default:_(()=>[c("选取文件")]),_:1})]),_:1},8,["action","file-list","limit","headers"]),h(z)?(r(),u("div",ee,[c(" 请上传 "),o.fileSize?(r(),u(y,{key:0},[c(" 大小不超过 "),T("b",le,I(o.fileSize)+"MB",1)],64)):k("",!0),o.fileType?(r(),u(y,{key:1},[c(" 格式为 "),T("b",te,I(o.fileType.join("/")),1)],64)):k("",!0),c(" 的文件 ")])):k("",!0),p(Q,{class:"upload-file-list el-upload-list el-upload-list--text",name:"el-fade-in-linear",tag:"ul"},{default:_(()=>[(r(!0),u(y,null,H(h(n),(b,A)=>(r(),u("li",{key:b.uid,class:"el-upload-list__item ele-upload-list__item-content"},[p(m,{href:`${b.url}`,underline:!1,target:"_blank"},{default:_(()=>[T("span",se,I(R(b.name)),1)]),_:2},1032,["href"]),T("div",ae,[p(t,{type:"danger",link:"",onClick:ne=>F(A)},{default:_(()=>[c("删除")]),_:2},1032,["onClick"])])]))),128))]),_:1})])}}}),me=K(oe,[["__scopeId","data-v-bcbe3161"]]);export{me as _,fe as a,Y as d,X as l};
