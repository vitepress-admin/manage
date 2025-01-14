import{aX as B,aC as F,aE as R,aF as N,aG as $,aH as w,ck as W,r as S,aI as X,k as m,aO as z,aS as Z,aK as J,aU as Q,d as _,ax as V,o as k,c as I,m as y,w as P,cp as D,e,af as A,aj as v,L as h,ay as C,y as K,t as L,n as U,az as G,au as Y,aD as ee,b8 as ae,aL as oe,aT as le,b as se,aZ as ne,ab as te,aa as re,D as ie,aM as de,aA as ue,aB as x}from"./index-CZcYgHe2.js";const T=B({modelValue:{type:[String,Number,Boolean],default:void 0},size:F,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),ce=B({...T,border:Boolean}),M={[R]:o=>N(o)||$(o)||w(o),[W]:o=>N(o)||$(o)||w(o)},j=Symbol("radioGroupKey"),H=(o,u)=>{const s=S(),a=X(j,void 0),i=m(()=>!!a),c=m(()=>z(o.value)?o.label:o.value),r=m({get(){return i.value?a.modelValue:o.modelValue},set(n){i.value?a.changeEvent(n):u&&u(R,n),s.value.checked=o.modelValue===c.value}}),d=Z(m(()=>a==null?void 0:a.size)),l=J(m(()=>a==null?void 0:a.disabled)),t=S(!1),p=m(()=>l.value||i.value&&r.value!==c.value?-1:0);return Q({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},m(()=>i.value&&z(o.value))),{radioRef:s,isGroup:i,radioGroup:a,focus:t,size:d,disabled:l,tabIndex:p,modelValue:r,actualValue:c}},pe=_({name:"ElRadio"}),fe=_({...pe,props:ce,emits:M,setup(o,{emit:u}){const s=o,a=V("radio"),{radioRef:i,radioGroup:c,focus:r,size:d,disabled:l,modelValue:t,actualValue:p}=H(s,u);function n(){U(()=>u("change",t.value))}return(f,g)=>{var b;return k(),I("label",{class:v([e(a).b(),e(a).is("disabled",e(l)),e(a).is("focus",e(r)),e(a).is("bordered",f.border),e(a).is("checked",e(t)===e(p)),e(a).m(e(d))])},[y("span",{class:v([e(a).e("input"),e(a).is("disabled",e(l)),e(a).is("checked",e(t)===e(p))])},[P(y("input",{ref_key:"radioRef",ref:i,"onUpdate:modelValue":E=>A(t)?t.value=E:null,class:v(e(a).e("original")),value:e(p),name:f.name||((b=e(c))==null?void 0:b.name),disabled:e(l),checked:e(t)===e(p),type:"radio",onFocus:E=>r.value=!0,onBlur:E=>r.value=!1,onChange:n,onClick:h(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[D,e(t)]]),y("span",{class:v(e(a).e("inner"))},null,2)],2),y("span",{class:v(e(a).e("label")),onKeydown:h(()=>{},["stop"])},[C(f.$slots,"default",{},()=>[K(L(f.label),1)])],42,["onKeydown"])],2)}}});var me=G(fe,[["__file","radio.vue"]]);const ve=B({...T}),be=_({name:"ElRadioButton"}),ye=_({...be,props:ve,setup(o){const u=o,s=V("radio"),{radioRef:a,focus:i,size:c,disabled:r,modelValue:d,radioGroup:l,actualValue:t}=H(u),p=m(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(n,f)=>{var g;return k(),I("label",{class:v([e(s).b("button"),e(s).is("active",e(d)===e(t)),e(s).is("disabled",e(r)),e(s).is("focus",e(i)),e(s).bm("button",e(c))])},[P(y("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":b=>A(d)?d.value=b:null,class:v(e(s).be("button","original-radio")),value:e(t),type:"radio",name:n.name||((g=e(l))==null?void 0:g.name),disabled:e(r),onFocus:b=>i.value=!0,onBlur:b=>i.value=!1,onClick:h(()=>{},["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[D,e(d)]]),y("span",{class:v(e(s).be("button","inner")),style:Y(e(d)===e(t)?e(p):{}),onKeydown:h(()=>{},["stop"])},[C(n.$slots,"default",{},()=>[K(L(n.label),1)])],46,["onKeydown"])],2)}}});var O=G(ye,[["__file","radio-button.vue"]]);const _e=B({id:{type:String,default:void 0},size:F,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...ee(["ariaLabel"])}),ge=M,he=_({name:"ElRadioGroup"}),Be=_({...he,props:_e,emits:ge,setup(o,{emit:u}){const s=o,a=V("radio"),i=ae(),c=S(),{formItem:r}=oe(),{inputId:d,isLabeledByFormItem:l}=le(s,{formItemContext:r}),t=n=>{u(R,n),U(()=>u("change",n))};se(()=>{const n=c.value.querySelectorAll("[type=radio]"),f=n[0];!Array.from(n).some(g=>g.checked)&&f&&(f.tabIndex=0)});const p=m(()=>s.name||i.value);return ne(j,te({...re(s),changeEvent:t,name:p})),ie(()=>s.modelValue,()=>{s.validateEvent&&(r==null||r.validate("change").catch(n=>de()))}),(n,f)=>(k(),I("div",{id:e(d),ref_key:"radioGroupRef",ref:c,class:v(e(a).b("group")),role:"radiogroup","aria-label":e(l)?void 0:n.ariaLabel||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[C(n.$slots,"default")],10,["id","aria-label","aria-labelledby"]))}});var q=G(Be,[["__file","radio-group.vue"]]);const Se=ue(me,{RadioButton:O,RadioGroup:q}),Re=x(q),Ve=x(O);export{Se as E,Re as a,Ve as b};
