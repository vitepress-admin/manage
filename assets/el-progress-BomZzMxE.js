import{b5 as Z,aN as ue,bD as ce,aX as A,aY as v,a$ as G,cO as b,d as T,b_ as ke,ax as q,aK as M,r as de,k as W,o as g,A as U,q as $,c as S,F as Ee,z as $e,aj as m,e as t,I as pe,ay as E,i as h,m as N,L as B,p as P,R as D,cV as Ce,t as Q,au as Re,cW as Fe,cX as Le,cu as Pe,cY as Se,cZ as we,bc as Ue,az as K,aI as Te,a3 as Y,c_ as x,aR as _e,c$ as Oe,b3 as De,d0 as Be,D as ee,aM as je,a4 as Ne,aZ as qe,cT as Ae,cn as te,cJ as se,aA as Me}from"./index-C_bMx7Sy.js";import{E as Ke}from"./index-ClN3Hdzs.js";import{b as ze}from"./_baseClone-DnTw8x3F.js";var He=1,Ie=4;function ae(o){return ze(o,He|Ie)}const fe=Symbol("uploadContextKey"),Xe="ElUpload";class Ve extends Error{constructor(r,s,d,i){super(r),this.name="UploadAjaxError",this.status=s,this.method=d,this.url=i}}function oe(o,r,s){let d;return s.response?d=`${s.response.error||s.response}`:s.responseText?d=`${s.responseText}`:d=`fail to ${r.method} ${o} ${s.status}`,new Ve(d,s.status,r.method,o)}function Ge(o){const r=o.responseText||o.response;if(!r)return r;try{return JSON.parse(r)}catch{return r}}const We=o=>{typeof XMLHttpRequest>"u"&&Z(Xe,"XMLHttpRequest is undefined");const r=new XMLHttpRequest,s=o.action;r.upload&&r.upload.addEventListener("progress",u=>{const p=u;p.percent=u.total>0?u.loaded/u.total*100:0,o.onProgress(p)});const d=new FormData;if(o.data)for(const[u,p]of Object.entries(o.data))ue(p)&&p.length?d.append(u,...p):d.append(u,p);d.append(o.filename,o.file,o.file.name),r.addEventListener("error",()=>{o.onError(oe(s,o,r))}),r.addEventListener("load",()=>{if(r.status<200||r.status>=300)return o.onError(oe(s,o,r));o.onSuccess(Ge(r))}),r.open(o.method,s,!0),o.withCredentials&&"withCredentials"in r&&(r.withCredentials=!0);const i=o.headers||{};if(i instanceof Headers)i.forEach((u,p)=>r.setRequestHeader(p,u));else for(const[u,p]of Object.entries(i))ce(p)||r.setRequestHeader(u,String(p));return r.send(d),r},ve=["text","picture","picture-card"];let Ye=1;const J=()=>Date.now()+Ye++,me=A({action:{type:String,default:"#"},headers:{type:v(Object)},method:{type:String,default:"post"},data:{type:v([Object,Function,Promise]),default:()=>G({})},multiple:Boolean,name:{type:String,default:"file"},drag:Boolean,withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:v(Array),default:()=>G([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ve,default:"text"},httpRequest:{type:v(Function),default:We},disabled:Boolean,limit:Number}),Je=A({...me,beforeUpload:{type:v(Function),default:b},beforeRemove:{type:v(Function)},onRemove:{type:v(Function),default:b},onChange:{type:v(Function),default:b},onPreview:{type:v(Function),default:b},onSuccess:{type:v(Function),default:b},onProgress:{type:v(Function),default:b},onError:{type:v(Function),default:b},onExceed:{type:v(Function),default:b},crossorigin:{type:v(String)}}),Ze=A({files:{type:v(Array),default:()=>G([])},disabled:{type:Boolean,default:!1},handlePreview:{type:v(Function),default:b},listType:{type:String,values:ve,default:"text"},crossorigin:{type:v(String)}}),Qe={remove:o=>!!o},xe=T({name:"ElUploadList"}),et=T({...xe,props:Ze,emits:Qe,setup(o,{emit:r}){const s=o,{t:d}=ke(),i=q("upload"),u=q("icon"),p=q("list"),k=M(),y=de(!1),R=W(()=>[i.b("list"),i.bm("list",s.listType),i.is("disabled",s.disabled)]),F=f=>{r("remove",f)};return(f,_)=>(g(),U(Ue,{tag:"ul",class:m(t(R)),name:t(p).b()},{default:$(()=>[(g(!0),S(Ee,null,$e(f.files,(a,n)=>(g(),S("li",{key:a.uid||a.name,class:m([t(i).be("list","item"),t(i).is(a.status),{focusing:y.value}]),tabindex:"0",onKeydown:pe(e=>!t(k)&&F(a),["delete"]),onFocus:e=>y.value=!0,onBlur:e=>y.value=!1,onClick:e=>y.value=!1},[E(f.$slots,"default",{file:a,index:n},()=>[f.listType==="picture"||a.status!=="uploading"&&f.listType==="picture-card"?(g(),S("img",{key:0,class:m(t(i).be("list","item-thumbnail")),src:a.url,crossorigin:f.crossorigin,alt:""},null,10,["src","crossorigin"])):h("v-if",!0),a.status==="uploading"||f.listType!=="picture-card"?(g(),S("div",{key:1,class:m(t(i).be("list","item-info"))},[N("a",{class:m(t(i).be("list","item-name")),onClick:B(e=>f.handlePreview(a),["prevent"])},[P(t(D),{class:m(t(u).m("document"))},{default:$(()=>[P(t(Ce))]),_:1},8,["class"]),N("span",{class:m(t(i).be("list","item-file-name")),title:a.name},Q(a.name),11,["title"])],10,["onClick"]),a.status==="uploading"?(g(),U(t(Ke),{key:0,type:f.listType==="picture-card"?"circle":"line","stroke-width":f.listType==="picture-card"?6:2,percentage:Number(a.percentage),style:Re(f.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):h("v-if",!0)],2)):h("v-if",!0),N("label",{class:m(t(i).be("list","item-status-label"))},[f.listType==="text"?(g(),U(t(D),{key:0,class:m([t(u).m("upload-success"),t(u).m("circle-check")])},{default:$(()=>[P(t(Fe))]),_:1},8,["class"])):["picture-card","picture"].includes(f.listType)?(g(),U(t(D),{key:1,class:m([t(u).m("upload-success"),t(u).m("check")])},{default:$(()=>[P(t(Le))]),_:1},8,["class"])):h("v-if",!0)],2),t(k)?h("v-if",!0):(g(),U(t(D),{key:2,class:m(t(u).m("close")),onClick:e=>F(a)},{default:$(()=>[P(t(Pe))]),_:2},1032,["class","onClick"])),h(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),h(" This is a bug which needs to be fixed "),h(" TODO: Fix the incorrect navigation interaction "),t(k)?h("v-if",!0):(g(),S("i",{key:3,class:m(t(u).m("close-tip"))},Q(t(d)("el.upload.deleteTip")),3)),f.listType==="picture-card"?(g(),S("span",{key:4,class:m(t(i).be("list","item-actions"))},[N("span",{class:m(t(i).be("list","item-preview")),onClick:e=>f.handlePreview(a)},[P(t(D),{class:m(t(u).m("zoom-in"))},{default:$(()=>[P(t(Se))]),_:1},8,["class"])],10,["onClick"]),t(k)?h("v-if",!0):(g(),S("span",{key:0,class:m(t(i).be("list","item-delete")),onClick:e=>F(a)},[P(t(D),{class:m(t(u).m("delete"))},{default:$(()=>[P(t(we))]),_:1},8,["class"])],10,["onClick"]))],2)):h("v-if",!0)])],42,["onKeydown","onFocus","onBlur","onClick"]))),128)),E(f.$slots,"append")]),_:3},8,["class","name"]))}});var ne=K(et,[["__file","upload-list.vue"]]);const tt=A({disabled:{type:Boolean,default:!1}}),st={file:o=>ue(o)},ye="ElUploadDrag",at=T({name:ye}),ot=T({...at,props:tt,emits:st,setup(o,{emit:r}){Te(fe)||Z(ye,"usage: <el-upload><el-upload-dragger /></el-upload>");const d=q("upload"),i=de(!1),u=M(),p=y=>{if(u.value)return;i.value=!1,y.stopPropagation();const R=Array.from(y.dataTransfer.files);r("file",R)},k=()=>{u.value||(i.value=!0)};return(y,R)=>(g(),S("div",{class:m([t(d).b("dragger"),t(d).is("dragover",i.value)]),onDrop:B(p,["prevent"]),onDragover:B(k,["prevent"]),onDragleave:B(F=>i.value=!1,["prevent"])},[E(y.$slots,"default")],42,["onDrop","onDragover","onDragleave"]))}});var nt=K(ot,[["__file","upload-dragger.vue"]]);const lt=A({...me,beforeUpload:{type:v(Function),default:b},onRemove:{type:v(Function),default:b},onStart:{type:v(Function),default:b},onSuccess:{type:v(Function),default:b},onProgress:{type:v(Function),default:b},onError:{type:v(Function),default:b},onExceed:{type:v(Function),default:b}}),rt=T({name:"ElUploadContent",inheritAttrs:!1}),it=T({...rt,props:lt,setup(o,{expose:r}){const s=o,d=q("upload"),i=M(),u=Y({}),p=Y(),k=e=>{if(e.length===0)return;const{autoUpload:c,limit:l,fileList:C,multiple:L,onStart:w,onExceed:z}=s;if(l&&C.length+e.length>l){z(e,C);return}L||(e=e.slice(0,1));for(const H of e){const j=H;j.uid=J(),w(j),c&&y(j)}},y=async e=>{if(p.value.value="",!s.beforeUpload)return F(e);let c,l={};try{const L=s.data,w=s.beforeUpload(e);l=x(s.data)?ae(s.data):s.data,c=await w,x(s.data)&&_e(L,l)&&(l=ae(s.data))}catch{c=!1}if(c===!1){s.onRemove(e);return}let C=e;c instanceof Blob&&(c instanceof File?C=c:C=new File([c],e.name,{type:e.type})),F(Object.assign(C,{uid:e.uid}),l)},R=async(e,c)=>De(e)?e(c):e,F=async(e,c)=>{const{headers:l,data:C,method:L,withCredentials:w,name:z,action:H,onProgress:j,onSuccess:ge,onError:he,httpRequest:be}=s;try{c=await R(c??C,e)}catch{s.onRemove(e);return}const{uid:I}=e,X={headers:l||{},withCredentials:w,file:e,data:c,method:L,filename:z,action:H,onProgress:O=>{j(O,e)},onSuccess:O=>{ge(O,e),delete u.value[I]},onError:O=>{he(O,e),delete u.value[I]}},V=be(X);u.value[I]=V,V instanceof Promise&&V.then(X.onSuccess,X.onError)},f=e=>{const c=e.target.files;c&&k(Array.from(c))},_=()=>{i.value||(p.value.value="",p.value.click())},a=()=>{_()};return r({abort:e=>{Oe(u.value).filter(e?([l])=>String(e.uid)===l:()=>!0).forEach(([l,C])=>{C instanceof XMLHttpRequest&&C.abort(),delete u.value[l]})},upload:y}),(e,c)=>(g(),S("div",{class:m([t(d).b(),t(d).m(e.listType),t(d).is("drag",e.drag),t(d).is("disabled",t(i))]),tabindex:t(i)?"-1":"0",onClick:_,onKeydown:pe(B(a,["self"]),["enter","space"])},[e.drag?(g(),U(nt,{key:0,disabled:t(i),onFile:k},{default:$(()=>[E(e.$slots,"default")]),_:3},8,["disabled"])):E(e.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:p,class:m(t(d).e("input")),name:e.name,disabled:t(i),multiple:e.multiple,accept:e.accept,type:"file",onChange:f,onClick:B(()=>{},["stop"])},null,42,["name","disabled","multiple","accept","onClick"])],42,["tabindex","onKeydown"]))}});var le=K(it,[["__file","upload-content.vue"]]);const re="ElUpload",ie=o=>{var r;(r=o.url)!=null&&r.startsWith("blob:")&&URL.revokeObjectURL(o.url)},ut=(o,r)=>{const s=Be(o,"fileList",void 0,{passive:!0}),d=a=>s.value.find(n=>n.uid===a.uid);function i(a){var n;(n=r.value)==null||n.abort(a)}function u(a=["ready","uploading","success","fail"]){s.value=s.value.filter(n=>!a.includes(n.status))}function p(a){s.value=s.value.filter(n=>n!==a)}const k=(a,n)=>{const e=d(n);e&&(console.error(a),e.status="fail",p(e),o.onError(a,e,s.value),o.onChange(e,s.value))},y=(a,n)=>{const e=d(n);e&&(o.onProgress(a,e,s.value),e.status="uploading",e.percentage=Math.round(a.percent))},R=(a,n)=>{const e=d(n);e&&(e.status="success",e.response=a,o.onSuccess(a,e,s.value),o.onChange(e,s.value))},F=a=>{ce(a.uid)&&(a.uid=J());const n={name:a.name,percentage:0,status:"ready",size:a.size,raw:a,uid:a.uid};if(o.listType==="picture-card"||o.listType==="picture")try{n.url=URL.createObjectURL(a)}catch(e){je(re,e.message),o.onError(e,n,s.value)}s.value=[...s.value,n],o.onChange(n,s.value)},f=async a=>{const n=a instanceof File?d(a):a;n||Z(re,"file to be removed not found");const e=c=>{i(c),p(c),o.onRemove(c,s.value),ie(c)};o.beforeRemove?await o.beforeRemove(n,s.value)!==!1&&e(n):e(n)};function _(){s.value.filter(({status:a})=>a==="ready").forEach(({raw:a})=>{var n;return a&&((n=r.value)==null?void 0:n.upload(a))})}return ee(()=>o.listType,a=>{a!=="picture-card"&&a!=="picture"||(s.value=s.value.map(n=>{const{raw:e,url:c}=n;if(!c&&e)try{n.url=URL.createObjectURL(e)}catch(l){o.onError(l,n,s.value)}return n}))}),ee(s,a=>{for(const n of a)n.uid||(n.uid=J()),n.status||(n.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:i,clearFiles:u,handleError:k,handleProgress:y,handleStart:F,handleSuccess:R,handleRemove:f,submit:_,revokeFileObjectURL:ie}},ct=T({name:"ElUpload"}),dt=T({...ct,props:Je,setup(o,{expose:r}){const s=o,d=M(),i=Y(),{abort:u,submit:p,clearFiles:k,uploadFiles:y,handleStart:R,handleError:F,handleRemove:f,handleSuccess:_,handleProgress:a,revokeFileObjectURL:n}=ut(s,i),e=W(()=>s.listType==="picture-card"),c=W(()=>({...s,fileList:y.value,onStart:R,onProgress:a,onSuccess:_,onError:F,onRemove:f}));return Ne(()=>{y.value.forEach(n)}),qe(fe,{accept:Ae(s,"accept")}),r({abort:u,submit:p,clearFiles:k,handleStart:R,handleRemove:f}),(l,C)=>(g(),S("div",null,[t(e)&&l.showFileList?(g(),U(ne,{key:0,disabled:t(d),"list-type":l.listType,files:t(y),crossorigin:l.crossorigin,"handle-preview":l.onPreview,onRemove:t(f)},te({append:$(()=>[P(le,se({ref_key:"uploadRef",ref:i},t(c)),{default:$(()=>[l.$slots.trigger?E(l.$slots,"trigger",{key:0}):h("v-if",!0),!l.$slots.trigger&&l.$slots.default?E(l.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)]),_:2},[l.$slots.file?{name:"default",fn:$(({file:L,index:w})=>[E(l.$slots,"file",{file:L,index:w})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):h("v-if",!0),!t(e)||t(e)&&!l.showFileList?(g(),U(le,se({key:1,ref_key:"uploadRef",ref:i},t(c)),{default:$(()=>[l.$slots.trigger?E(l.$slots,"trigger",{key:0}):h("v-if",!0),!l.$slots.trigger&&l.$slots.default?E(l.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)):h("v-if",!0),l.$slots.trigger?E(l.$slots,"default",{key:2}):h("v-if",!0),E(l.$slots,"tip"),!t(e)&&l.showFileList?(g(),U(ne,{key:3,disabled:t(d),"list-type":l.listType,files:t(y),crossorigin:l.crossorigin,"handle-preview":l.onPreview,onRemove:t(f)},te({_:2},[l.$slots.file?{name:"default",fn:$(({file:L,index:w})=>[E(l.$slots,"file",{file:L,index:w})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):h("v-if",!0)]))}});var pt=K(dt,[["__file","upload.vue"]]);const yt=Me(pt);export{yt as E};
