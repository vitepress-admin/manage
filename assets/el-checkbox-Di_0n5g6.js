import{aC as Z,aD as ee,aE as G,aF as H,aG as J,aH as U,aI as F,k as f,aJ as P,aK as pe,aL as M,D as ae,aM as le,n as ne,a1 as te,r as T,aN as I,aO as A,aP as ge,aQ as Q,aR as Ce,aS as X,aT as oe,aU as w,d as E,aw as ue,ax as R,o as x,A as se,q as ie,m as Y,aj as C,e as n,w as N,c as S,af as $,L as z,aV as D,ay as K,F as xe,y as re,t as ce,i as O,aW as de,az as j,au as Ve,aX as ye,aY as Se,aZ as Le,a_ as Be,aa as Ee,aA as _e,aB as be}from"./index-m2T4SZVn.js";const ve={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:Z,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ee(["ariaControls"])},me={[G]:e=>H(e)||J(e)||U(e),change:e=>H(e)||J(e)||U(e)},_=Symbol("checkboxGroupContextKey"),Ie=({model:e,isChecked:c})=>{const i=F(_,void 0),l=f(()=>{var r,d;const t=(r=i==null?void 0:i.max)==null?void 0:r.value,v=(d=i==null?void 0:i.min)==null?void 0:d.value;return!P(t)&&e.value.length>=t&&!c.value||!P(v)&&e.value.length<=v&&c.value});return{isDisabled:pe(f(()=>(i==null?void 0:i.disabled.value)||l.value)),isLimitDisabled:l}},Fe=(e,{model:c,isLimitExceeded:i,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:r})=>{const d=F(_,void 0),{formItem:t}=M(),{emit:v}=te();function s(a){var h,k,u,p;return[!0,e.trueValue,e.trueLabel].includes(a)?(k=(h=e.trueValue)!=null?h:e.trueLabel)!=null?k:!0:(p=(u=e.falseValue)!=null?u:e.falseLabel)!=null?p:!1}function o(a,h){v("change",s(a),h)}function m(a){if(i.value)return;const h=a.target;v("change",s(h.checked),a)}async function V(a){i.value||!l.value&&!b.value&&r.value&&(a.composedPath().some(u=>u.tagName==="LABEL")||(c.value=s([!1,e.falseValue,e.falseLabel].includes(c.value)),await ne(),o(c.value,a)))}const L=f(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return ae(()=>e.modelValue,()=>{L.value&&(t==null||t.validate("change").catch(a=>le()))}),{handleChange:m,onClickRoot:V}},Ne=e=>{const c=T(!1),{emit:i}=te(),l=F(_,void 0),b=f(()=>P(l)===!1),r=T(!1),d=f({get(){var t,v;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:c.value},set(t){var v,s;b.value&&I(t)?(r.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,r.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,t))):(i(G,t),c.value=t)}});return{model:d,isGroup:b,isLimitExceeded:r}},$e=(e,c,{model:i})=>{const l=F(_,void 0),b=T(!1),r=f(()=>A(e.value)?e.label:e.value),d=f(()=>{const o=i.value;return U(o)?o:I(o)?ge(r.value)?o.map(Q).some(m=>Ce(m,r.value)):o.map(Q).includes(r.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),t=X(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),v=X(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),s=f(()=>!!c.default||!A(r.value));return{checkboxButtonSize:t,isChecked:d,isFocused:b,checkboxSize:v,hasOwnLabel:s,actualValue:r}},fe=(e,c)=>{const{formItem:i}=M(),{model:l,isGroup:b,isLimitExceeded:r}=Ne(e),{isFocused:d,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,actualValue:m}=$e(e,c,{model:l}),{isDisabled:V}=Ie({model:l,isChecked:t}),{inputId:L,isLabeledByFormItem:a}=oe(e,{formItemContext:i,disableIdGeneration:o,disableIdManagement:b}),{handleChange:h,onClickRoot:k}=Fe(e,{model:l,isLimitExceeded:r,hasOwnLabel:o,isDisabled:V,isLabeledByFormItem:a});return(()=>{function p(){var y,g;I(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(g=(y=e.trueValue)!=null?y:e.trueLabel)!=null?g:!0}e.checked&&p()})(),w({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>b.value&&A(e.value))),w({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.trueLabel)),w({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.falseLabel)),{inputId:L,isLabeledByFormItem:a,isChecked:t,isDisabled:V,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,model:l,actualValue:m,handleChange:h,onClickRoot:k}},ze=E({name:"ElCheckbox"}),De=E({...ze,props:ve,emits:me,setup(e){const c=e,i=ue(),{inputId:l,isLabeledByFormItem:b,isChecked:r,isDisabled:d,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:o,actualValue:m,handleChange:V,onClickRoot:L}=fe(c,i),a=R("checkbox"),h=f(()=>[a.b(),a.m(v.value),a.is("disabled",d.value),a.is("bordered",c.border),a.is("checked",r.value)]),k=f(()=>[a.e("input"),a.is("disabled",d.value),a.is("checked",r.value),a.is("indeterminate",c.indeterminate),a.is("focus",t.value)]);return(u,p)=>(x(),se(de(!n(s)&&n(b)?"span":"label"),{class:C(n(h)),"aria-controls":u.indeterminate?u.ariaControls:null,onClick:n(L)},{default:ie(()=>{var y,g,q,W;return[Y("span",{class:C(n(k))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?N((x(),S("input",{key:0,id:n(l),"onUpdate:modelValue":B=>$(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,name:u.name,tabindex:u.tabindex,disabled:n(d),"true-value":(g=(y=u.trueValue)!=null?y:u.trueLabel)!=null?g:!0,"false-value":(W=(q=u.falseValue)!=null?q:u.falseLabel)!=null?W:!1,onChange:n(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[D,n(o)]]):N((x(),S("input",{key:1,id:n(l),"onUpdate:modelValue":B=>$(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,disabled:n(d),value:n(m),name:u.name,tabindex:u.tabindex,onChange:n(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[D,n(o)]]),Y("span",{class:C(n(a).e("inner"))},null,2)],2),n(s)?(x(),S("span",{key:0,class:C(n(a).e("label"))},[K(u.$slots,"default"),u.$slots.default?O("v-if",!0):(x(),S(xe,{key:0},[re(ce(u.label),1)],64))],2)):O("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var Ge=j(De,[["__file","checkbox.vue"]]);const we=E({name:"ElCheckboxButton"}),Ue=E({...we,props:ve,emits:me,setup(e){const c=e,i=ue(),{isFocused:l,isChecked:b,isDisabled:r,checkboxButtonSize:d,model:t,actualValue:v,handleChange:s}=fe(c,i),o=F(_,void 0),m=R("checkbox"),V=f(()=>{var a,h,k,u;const p=(h=(a=o==null?void 0:o.fill)==null?void 0:a.value)!=null?h:"";return{backgroundColor:p,borderColor:p,color:(u=(k=o==null?void 0:o.textColor)==null?void 0:k.value)!=null?u:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}}),L=f(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",r.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,h)=>{var k,u,p,y;return x(),S("label",{class:C(n(L))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?N((x(),S("input",{key:0,"onUpdate:modelValue":g=>$(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),"true-value":(u=(k=a.trueValue)!=null?k:a.trueLabel)!=null?u:!0,"false-value":(y=(p=a.falseValue)!=null?p:a.falseLabel)!=null?y:!1,onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[D,n(t)]]):N((x(),S("input",{key:1,"onUpdate:modelValue":g=>$(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),value:n(v),onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[D,n(t)]]),a.$slots.default||a.label?(x(),S("span",{key:2,class:C(n(m).be("button","inner")),style:Ve(n(b)?n(V):void 0)},[K(a.$slots,"default",{},()=>[re(ce(a.label),1)])],6)):O("v-if",!0)],2)}}});var he=j(Ue,[["__file","checkbox-button.vue"]]);const Pe=ye({modelValue:{type:Se(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Z,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ee(["ariaLabel"])}),Te={[G]:e=>I(e),change:e=>I(e)},Ae=E({name:"ElCheckboxGroup"}),Oe=E({...Ae,props:Pe,emits:Te,setup(e,{emit:c}){const i=e,l=R("checkbox"),{formItem:b}=M(),{inputId:r,isLabeledByFormItem:d}=oe(i,{formItemContext:b}),t=async s=>{c(G,s),await ne(),c("change",s)},v=f({get(){return i.modelValue},set(s){t(s)}});return Le(_,{...Be(Ee(i),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),ae(()=>i.modelValue,()=>{i.validateEvent&&(b==null||b.validate("change").catch(s=>le()))}),(s,o)=>{var m;return x(),se(de(s.tag),{id:n(r),class:C(n(l).b("group")),role:"group","aria-label":n(d)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":n(d)?(m=n(b))==null?void 0:m.labelId:void 0},{default:ie(()=>[K(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ke=j(Oe,[["__file","checkbox-group.vue"]]);const Re=_e(Ge,{CheckboxButton:he,CheckboxGroup:ke});be(he);const Ke=be(ke);export{Re as E,Ke as a};
