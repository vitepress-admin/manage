import{aX as oe,aC as ce,aG as p,aD as de,ck as Z,cl as P,bD as y,aE as N,d as ee,b_ as me,ax as pe,r as fe,ab as be,aL as ve,k as h,aJ as E,aS as Ne,aK as Ve,D as he,b as ye,b6 as Ie,o as b,c as $,w as j,e as t,aj as z,I as S,ay as _,p as K,q as A,A as F,bX as ge,cm as we,R as q,i as H,bY as Ee,a5 as Se,cn as _e,L,S as Ae,b5 as Fe,aF as Pe,aM as J,co as ke,az as xe,aA as Ce}from"./index-W4JQoyRu.js";import{v as Q}from"./index-BujmTTTX.js";const De=oe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ce,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0},...de(["ariaLabel"])}),Be={[Z]:(l,k)=>k!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[P]:l=>p(l)||y(l),[N]:l=>p(l)||y(l)},Te=ee({name:"ElInputNumber"}),Me=ee({...Te,props:De,emits:Be,setup(l,{expose:k,emit:c}){const r=l,{t:O}=me(),d=pe("input-number"),f=fe(),u=be({currentValue:r.modelValue,userInput:null}),{formItem:v}=ve(),U=h(()=>p(r.modelValue)&&r.modelValue<=r.min),G=h(()=>p(r.modelValue)&&r.modelValue>=r.max),ne=h(()=>{const e=Y(r.step);return E(r.precision)?Math.max(Y(r.modelValue),e):(e>r.precision,r.precision)}),x=h(()=>r.controls&&r.controlsPosition==="right"),R=Ne(),V=Ve(),C=h(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),D=(e,n)=>{if(E(n)&&(n=ne.value),n===0)return Math.round(e);let a=String(e);const s=a.indexOf(".");if(s===-1||!a.replace(".","").split("")[s+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},Y=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let s=0;return a!==-1&&(s=n.length-a-1),s},W=(e,n=1)=>p(e)?D(e+r.step*n):u.currentValue,B=()=>{if(r.readonly||V.value||G.value)return;const e=Number(C.value)||0,n=W(e);I(n),c(P,u.currentValue),M()},T=()=>{if(r.readonly||V.value||U.value)return;const e=Number(C.value)||0,n=W(e,-1);I(n),c(P,u.currentValue),M()},X=(e,n)=>{const{max:a,min:s,step:i,precision:m,stepStrictly:g,valueOnClear:w}=r;a<s&&Fe("InputNumber","min should not be greater than max.");let o=Number(e);if(y(e)||Number.isNaN(o))return null;if(e===""){if(w===null)return null;o=Pe(w)?{min:s,max:a}[w]:w}return g&&(o=D(Math.round(o/i)*i,m),o!==e&&n&&c(N,o)),E(m)||(o=D(o,m)),(o>a||o<s)&&(o=o>a?a:s,n&&c(N,o)),o},I=(e,n=!0)=>{var a;const s=u.currentValue,i=X(e);if(!n){c(N,i);return}s===i&&e||(u.userInput=null,c(N,i),s!==i&&c(Z,i,s),r.validateEvent&&((a=v==null?void 0:v.validate)==null||a.call(v,"change").catch(m=>J())),u.currentValue=i)},ae=e=>{u.userInput=e;const n=e===""?null:Number(e);c(P,n),I(n,!1)},te=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&I(n),M(),u.userInput=null},re=()=>{var e,n;(n=(e=f.value)==null?void 0:e.focus)==null||n.call(e)},le=()=>{var e,n;(n=(e=f.value)==null?void 0:e.blur)==null||n.call(e)},ue=e=>{c("focus",e)},se=e=>{var n,a;u.userInput=null,ke()&&u.currentValue===null&&((n=f.value)!=null&&n.input)&&(f.value.input.value=""),c("blur",e),r.validateEvent&&((a=v==null?void 0:v.validate)==null||a.call(v,"blur").catch(s=>J()))},M=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)},ie=e=>{document.activeElement===e.target&&e.preventDefault()};return he(()=>r.modelValue,(e,n)=>{const a=X(e,!0);u.userInput===null&&a!==n&&(u.currentValue=a)},{immediate:!0}),ye(()=>{var e;const{min:n,max:a,modelValue:s}=r,i=(e=f.value)==null?void 0:e.input;if(i.setAttribute("role","spinbutton"),Number.isFinite(a)?i.setAttribute("aria-valuemax",String(a)):i.removeAttribute("aria-valuemax"),Number.isFinite(n)?i.setAttribute("aria-valuemin",String(n)):i.removeAttribute("aria-valuemin"),i.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),i.setAttribute("aria-disabled",String(V.value)),!p(s)&&s!=null){let m=Number(s);Number.isNaN(m)&&(m=null),c(N,m)}i.addEventListener("wheel",ie,{passive:!1})}),Ie(()=>{var e,n;const a=(e=f.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),k({focus:re,blur:le}),(e,n)=>(b(),$("div",{class:z([t(d).b(),t(d).m(t(R)),t(d).is("disabled",t(V)),t(d).is("without-controls",!e.controls),t(d).is("controls-right",t(x))]),onDragstart:L(()=>{},["prevent"])},[e.controls?j((b(),$("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:z([t(d).e("decrease"),t(d).is("disabled",t(U))]),onKeydown:S(T,["enter"])},[_(e.$slots,"decrease-icon",{},()=>[K(t(q),null,{default:A(()=>[t(x)?(b(),F(t(ge),{key:0})):(b(),F(t(we),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[t(Q),T]]):H("v-if",!0),e.controls?j((b(),$("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:z([t(d).e("increase"),t(d).is("disabled",t(G))]),onKeydown:S(B,["enter"])},[_(e.$slots,"increase-icon",{},()=>[K(t(q),null,{default:A(()=>[t(x)?(b(),F(t(Ee),{key:0})):(b(),F(t(Se),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[t(Q),B]]):H("v-if",!0),K(t(Ae),{id:e.id,ref_key:"input",ref:f,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(V),size:t(R),max:e.max,min:e.min,name:e.name,"aria-label":e.ariaLabel,"validate-event":!1,onKeydown:[S(L(B,["prevent"]),["up"]),S(L(T,["prevent"]),["down"])],onBlur:se,onFocus:ue,onInput:ae,onChange:te},_e({_:2},[e.$slots.prefix?{name:"prefix",fn:A(()=>[_(e.$slots,"prefix")])}:void 0,e.$slots.suffix?{name:"suffix",fn:A(()=>[_(e.$slots,"suffix")])}:void 0]),1032,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],42,["onDragstart"]))}});var $e=xe(Me,[["__file","input-number.vue"]]);const Le=Ce($e);export{Le as E};
