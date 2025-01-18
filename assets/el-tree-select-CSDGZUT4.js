import{ax as F,D as S,n as x,a_ as M,aa as q,Q as P,aE as E,k as g,d as w,P as z,a1 as U,aN as B,aR as p,cz as Q,b3 as $,bD as G,cA as J,aI as W,cd as X,bR as Y,r as H,ab as L,b as Z,bC as T,az as ee,aA as te}from"./index-DdehfsnW.js";import{E as R}from"./index-DqNpsSnp.js";const le=(e,{attrs:n,emit:o},{select:r,tree:s,key:c})=>{const h=F("tree-select");return S(()=>e.data,()=>{e.filterable&&x(()=>{var t,v;(v=s.value)==null||v.filter((t=r.value)==null?void 0:t.states.inputValue)})},{flush:"post"}),{...M(q(e),Object.keys(P.props)),...n,"onUpdate:modelValue":t=>o(E,t),valueKey:c,popperClass:g(()=>{const t=[h.e("popper")];return e.popperClass&&t.push(e.popperClass),t.join(" ")}),filterMethod:(t="")=>{var v;e.filterMethod?e.filterMethod(t):e.remoteMethod?e.remoteMethod(t):(v=s.value)==null||v.filter(t)}}},ae=w({extends:z,setup(e,n){const o=z.setup(e,n);delete o.selectOptionClick;const r=U().proxy;return x(()=>{o.select.states.cachedOptions.get(r.value)||o.select.onOptionCreate(r)}),S(()=>n.attrs.visible,s=>{o.states.visible=s},{immediate:!0}),o},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function j(e){return e||e===0}function I(e){return B(e)&&e.length}function N(e){return B(e)?e:j(e)?[e]:[]}function O(e,n,o,r,s){for(let c=0;c<e.length;c++){const h=e[c];if(n(h,c,e,s))return r?r(h,c,e,s):h;{const C=o(h);if(I(C)){const t=O(C,n,o,r,h);if(t)return t}}}}function A(e,n,o,r){for(let s=0;s<e.length;s++){const c=e[s];n(c,s,e,r);const h=o(c);I(h)&&A(h,n,o,c)}}const ce=(e,{attrs:n,slots:o,emit:r},{select:s,tree:c,key:h})=>{S(()=>e.modelValue,()=>{e.showCheckbox&&x(()=>{const l=c.value;l&&!p(l.getCheckedKeys(),N(e.modelValue))&&l.setCheckedKeys(N(e.modelValue))})},{immediate:!0,deep:!0});const C=g(()=>({value:h.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),t=(l,a)=>{var d;const u=C.value[l];return $(u)?u(a,(d=c.value)==null?void 0:d.getNode(t("value",a))):a[u]},v=N(e.modelValue).map(l=>O(e.data||[],a=>t("value",a)===l,a=>t("children",a),(a,d,u,f)=>f&&t("value",f))).filter(l=>j(l)),_=g(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const l=[];return A(e.data.concat(e.cacheData),a=>{const d=t("value",a);l.push({value:d,currentLabel:t("label",a),isDisabled:t("disabled",a)})},a=>t("children",a)),l}),K=()=>{var l;return(l=c.value)==null?void 0:l.getCheckedKeys().filter(a=>{var d;const u=(d=c.value)==null?void 0:d.getNode(a);return!G(u)&&J(u.childNodes)})};return{...M(q(e),Object.keys(R.props)),...n,nodeKey:h,expandOnClickNode:g(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:g(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(v):v),renderContent:(l,{node:a,data:d,store:u})=>l(ae,{value:t("value",d),label:t("label",d),disabled:t("disabled",d),visible:a.visible},e.renderContent?()=>e.renderContent(l,{node:a,data:d,store:u}):o.default?()=>o.default({node:a,data:d,store:u}):void 0),filterNodeMethod:(l,a,d)=>e.filterNodeMethod?e.filterNodeMethod(l,a,d):l?new RegExp(Q(l),"i").test(t("label",a)||""):!0,onNodeClick:(l,a,d)=>{var u,f,k,m;if((u=n.onNodeClick)==null||u.call(n,l,a,d),!(e.showCheckbox&&e.checkOnClickNode)){if(!e.showCheckbox&&(e.checkStrictly||a.isLeaf)){if(!t("disabled",l)){const b=(f=s.value)==null?void 0:f.states.options.get(t("value",l));(k=s.value)==null||k.handleOptionSelect(b)}}else e.expandOnClickNode&&d.proxy.handleExpandIconClick();(m=s.value)==null||m.focus()}},onCheck:(l,a)=>{var d;if(!e.showCheckbox)return;const u=t("value",l),f={};A([c.value.store.root],i=>f[i.key]=i,i=>i.childNodes);const k=a.checkedKeys,m=e.multiple?N(e.modelValue).filter(i=>!(i in f)&&!k.includes(i)):[],b=m.concat(k);if(e.checkStrictly)r(E,e.multiple?b:b.includes(u)?u:void 0);else if(e.multiple){const i=K();r(E,m.concat(i))}else{const i=O([l],y=>!I(t("children",y))&&!t("disabled",y),y=>t("children",y)),V=i?t("value",i):void 0,D=j(e.modelValue)&&!!O([l],y=>t("value",y)===e.modelValue,y=>t("children",y));r(E,V===e.modelValue||D?void 0:V)}x(()=>{var i;const V=N(e.modelValue);c.value.setCheckedKeys(V),(i=n.onCheck)==null||i.call(n,l,{checkedKeys:c.value.getCheckedKeys(),checkedNodes:c.value.getCheckedNodes(),halfCheckedKeys:c.value.getHalfCheckedKeys(),halfCheckedNodes:c.value.getHalfCheckedNodes()})}),(d=s.value)==null||d.focus()},onNodeExpand:(l,a,d)=>{var u;(u=n.onNodeExpand)==null||u.call(n,l,a,d),x(()=>{if(!e.checkStrictly&&e.lazy&&e.multiple&&a.checked){const f={},k=c.value.getCheckedKeys();A([c.value.store.root],i=>f[i.key]=i,i=>i.childNodes);const m=N(e.modelValue).filter(i=>!(i in f)&&!k.includes(i)),b=K();r(E,m.concat(b))}})},cacheOptions:_}};var ne=w({props:{data:{type:Array,default:()=>[]}},setup(e){const n=W(X);return S(()=>e.data,()=>{var o;e.data.forEach(s=>{n.states.cachedOptions.has(s.value)||n.states.cachedOptions.set(s.value,s)});const r=((o=n.selectRef)==null?void 0:o.querySelectorAll("input"))||[];Y&&!Array.from(r).includes(document.activeElement)&&n.setSelected()},{flush:"post",immediate:!0}),()=>{}}});const se=w({name:"ElTreeSelect",inheritAttrs:!1,props:{...P.props,...R.props,cacheData:{type:Array,default:()=>[]}},setup(e,n){const{slots:o,expose:r}=n,s=H(),c=H(),h=g(()=>e.nodeKey||e.valueKey||"value"),C=le(e,n,{select:s,tree:c,key:h}),{cacheOptions:t,...v}=ce(e,n,{select:s,tree:c,key:h}),_=L({});return r(_),Z(()=>{Object.assign(_,{...M(c.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...M(s.value,["focus","blur","selectedLabel"])})}),()=>T(P,L({...C,ref:K=>s.value=K}),{...o,default:()=>[T(ne,{data:t.value}),T(R,L({...v,ref:K=>c.value=K}))]})}});var de=ee(se,[["__file","tree-select.vue"]]);const ue=te(de);export{ue as E};
