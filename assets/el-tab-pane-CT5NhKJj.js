import{a3 as _e,bE as ge,cq as Ce,aX as U,aY as Z,a$ as oe,d as M,aI as Q,b5 as ee,ax as K,r as N,D as L,n as te,b7 as G,a4 as Ne,o as re,c as ie,aj as ce,e as O,au as Te,az as ue,a1 as ae,cr as A,cs as we,ct as Pe,k as V,b as de,b6 as Ee,p as d,R as D,ch as $e,c6 as Se,cu as xe,cb as z,aZ as Be,ay as J,a5 as ke,aE as be,aJ as se,aF as Oe,aG as Re,aw as ze,cv as ne,ab as Ae,as as Fe,w as Le,U as Me,i as Ve,aA as Ie,aB as De}from"./index-W4JQoyRu.js";const Ue=(e,l,b)=>ge(e.subTree).filter(s=>{var u;return Ce(s)&&((u=s.type)==null?void 0:u.name)===l&&!!s.component}).map(s=>s.component.uid).map(s=>b[s]).filter(s=>!!s),Ke=(e,l)=>{const b={},v=_e([]);return{children:v,addChild:u=>{b[u.uid]=u,v.value=Ue(e,l,b)},removeChild:u=>{delete b[u],v.value=v.value.filter(f=>f.uid!==u)}}},q=Symbol("tabsRootContextKey"),qe=U({tabs:{type:Z(Array),default:()=>oe([])}}),ve="ElTabBar",We=M({name:ve}),je=M({...We,props:qe,setup(e,{expose:l}){const b=e,v=ae(),t=Q(q);t||ee(ve,"<el-tabs><el-tab-bar /></el-tabs>");const s=K("tabs"),u=N(),f=N(),y=()=>{let o=0,_=0;const m=["top","bottom"].includes(t.props.tabPosition)?"width":"height",k=m==="width"?"x":"y",n=k==="x"?"left":"top";return b.tabs.every(E=>{var $,S;const T=(S=($=v.parent)==null?void 0:$.refs)==null?void 0:S[`tab-${E.uid}`];if(!T)return!1;if(!E.active)return!0;o=T[`offset${A(n)}`],_=T[`client${A(m)}`];const x=window.getComputedStyle(T);return m==="width"&&(_-=Number.parseFloat(x.paddingLeft)+Number.parseFloat(x.paddingRight),o+=Number.parseFloat(x.paddingLeft)),!1}),{[m]:`${_}px`,transform:`translate${A(k)}(${o}px)`}},C=()=>f.value=y(),g=[],i=()=>{var o;g.forEach(m=>m.stop()),g.length=0;const _=(o=v.parent)==null?void 0:o.refs;if(_){for(const m in _)if(m.startsWith("tab-")){const k=_[m];k&&g.push(G(k,C))}}};L(()=>b.tabs,async()=>{await te(),C(),i()},{immediate:!0});const p=G(u,()=>C());return Ne(()=>{g.forEach(o=>o.stop()),g.length=0,p.stop()}),l({ref:u,update:C}),(o,_)=>(re(),ie("div",{ref_key:"barRef",ref:u,class:ce([O(s).e("active-bar"),O(s).is(O(t).props.tabPosition)]),style:Te(f.value)},null,6))}});var He=ue(je,[["__file","tab-bar.vue"]]);const Xe=U({panes:{type:Z(Array),default:()=>oe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Ye={tabClick:(e,l,b)=>b instanceof Event,tabRemove:(e,l)=>l instanceof Event},le="ElTabNav",Ge=M({name:le,props:Xe,emits:Ye,setup(e,{expose:l,emit:b}){const v=Q(q);v||ee(le,"<el-tabs><tab-nav /></el-tabs>");const t=K("tabs"),s=we(),u=Pe(),f=N(),y=N(),C=N(),g=N(),i=N(!1),p=N(0),o=N(!1),_=N(!0),m=V(()=>["top","bottom"].includes(v.props.tabPosition)?"width":"height"),k=V(()=>({transform:`translate${m.value==="width"?"X":"Y"}(-${p.value}px)`})),n=()=>{if(!f.value)return;const r=f.value[`offset${A(m.value)}`],c=p.value;if(!c)return;const a=c>r?c-r:0;p.value=a},E=()=>{if(!f.value||!y.value)return;const r=y.value[`offset${A(m.value)}`],c=f.value[`offset${A(m.value)}`],a=p.value;if(r-a<=c)return;const w=r-a>c*2?a+c:r-c;p.value=w},$=async()=>{const r=y.value;if(!i.value||!C.value||!f.value||!r)return;await te();const c=C.value.querySelector(".is-active");if(!c)return;const a=f.value,w=["top","bottom"].includes(v.props.tabPosition),h=c.getBoundingClientRect(),P=a.getBoundingClientRect(),I=w?r.offsetWidth-P.width:r.offsetHeight-P.height,R=p.value;let B=R;w?(h.left<P.left&&(B=R-(P.left-h.left)),h.right>P.right&&(B=R+h.right-P.right)):(h.top<P.top&&(B=R-(P.top-h.top)),h.bottom>P.bottom&&(B=R+(h.bottom-P.bottom))),B=Math.max(B,0),p.value=Math.min(B,I)},S=()=>{var r;if(!y.value||!f.value)return;e.stretch&&((r=g.value)==null||r.update());const c=y.value[`offset${A(m.value)}`],a=f.value[`offset${A(m.value)}`],w=p.value;a<c?(i.value=i.value||{},i.value.prev=w,i.value.next=w+a<c,c-w<a&&(p.value=c-a)):(i.value=!1,w>0&&(p.value=0))},T=r=>{let c=0;switch(r.code){case z.left:case z.up:c=-1;break;case z.right:case z.down:c=1;break;default:return}const a=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));let h=a.indexOf(r.target)+c;h<0?h=a.length-1:h>=a.length&&(h=0),a[h].focus({preventScroll:!0}),a[h].click(),x()},x=()=>{_.value&&(o.value=!0)},W=()=>o.value=!1;return L(s,r=>{r==="hidden"?_.value=!1:r==="visible"&&setTimeout(()=>_.value=!0,50)}),L(u,r=>{r?setTimeout(()=>_.value=!0,50):_.value=!1}),G(C,S),de(()=>setTimeout(()=>$(),0)),Ee(()=>S()),l({scrollToActiveTab:$,removeFocus:W}),()=>{const r=i.value?[d("span",{class:[t.e("nav-prev"),t.is("disabled",!i.value.prev)],onClick:n},[d(D,null,{default:()=>[d($e,null,null)]})]),d("span",{class:[t.e("nav-next"),t.is("disabled",!i.value.next)],onClick:E},[d(D,null,{default:()=>[d(Se,null,null)]})])]:null,c=e.panes.map((a,w)=>{var h,P,I,R;const B=a.uid,j=a.props.disabled,H=(P=(h=a.props.name)!=null?h:a.index)!=null?P:`${w}`,X=!j&&(a.isClosable||e.editable);a.index=`${w}`;const me=X?d(D,{class:"is-icon-close",onClick:F=>b("tabRemove",a,F)},{default:()=>[d(xe,null,null)]}):null,he=((R=(I=a.slots).label)==null?void 0:R.call(I))||a.props.label,ye=!j&&a.active?0:-1;return d("div",{ref:`tab-${B}`,class:[t.e("item"),t.is(v.props.tabPosition),t.is("active",a.active),t.is("disabled",j),t.is("closable",X),t.is("focus",o.value)],id:`tab-${H}`,key:`tab-${B}`,"aria-controls":`pane-${H}`,role:"tab","aria-selected":a.active,tabindex:ye,onFocus:()=>x(),onBlur:()=>W(),onClick:F=>{W(),b("tabClick",a,H,F)},onKeydown:F=>{X&&(F.code===z.delete||F.code===z.backspace)&&b("tabRemove",a,F)}},[he,me])});return d("div",{ref:C,class:[t.e("nav-wrap"),t.is("scrollable",!!i.value),t.is(v.props.tabPosition)]},[r,d("div",{class:t.e("nav-scroll"),ref:f},[d("div",{class:[t.e("nav"),t.is(v.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(v.props.tabPosition))],ref:y,style:k.value,role:"tablist",onKeydown:T},[e.type?null:d(He,{ref:g,tabs:[...e.panes]},null),c])])])}}}),Je=U({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Z(Function),default:()=>!0},stretch:Boolean}),Y=e=>Oe(e)||Re(e),Ze={[be]:e=>Y(e),tabClick:(e,l)=>l instanceof Event,tabChange:e=>Y(e),edit:(e,l)=>["remove","add"].includes(l),tabRemove:e=>Y(e),tabAdd:()=>!0},Qe=M({name:"ElTabs",props:Je,emits:Ze,setup(e,{emit:l,slots:b,expose:v}){var t;const s=K("tabs"),u=V(()=>["left","right"].includes(e.tabPosition)),{children:f,addChild:y,removeChild:C}=Ke(ae(),"ElTabPane"),g=N(),i=N((t=e.modelValue)!=null?t:"0"),p=async(n,E=!1)=>{var $,S,T;if(!(i.value===n||se(n)))try{await(($=e.beforeLeave)==null?void 0:$.call(e,n,i.value))!==!1&&(i.value=n,E&&(l(be,n),l("tabChange",n)),(T=(S=g.value)==null?void 0:S.removeFocus)==null||T.call(S))}catch{}},o=(n,E,$)=>{n.props.disabled||(p(E,!0),l("tabClick",n,$))},_=(n,E)=>{n.props.disabled||se(n.props.name)||(E.stopPropagation(),l("edit",n.props.name,"remove"),l("tabRemove",n.props.name))},m=()=>{l("edit",void 0,"add"),l("tabAdd")};L(()=>e.modelValue,n=>p(n)),L(i,async()=>{var n;await te(),(n=g.value)==null||n.scrollToActiveTab()}),Be(q,{props:e,currentName:i,registerPane:n=>{f.value.push(n)},sortPane:y,unregisterPane:C}),v({currentName:i});const k=({render:n})=>n();return()=>{const n=b["add-icon"],E=e.editable||e.addable?d("div",{class:[s.e("new-tab"),u.value&&s.e("new-tab-vertical")],tabindex:"0",onClick:m,onKeydown:T=>{[z.enter,z.numpadEnter].includes(T.code)&&m()}},[n?J(b,"add-icon"):d(D,{class:s.is("icon-plus")},{default:()=>[d(ke,null,null)]})]):null,$=d("div",{class:[s.e("header"),u.value&&s.e("header-vertical"),s.is(e.tabPosition)]},[d(k,{render:()=>{const T=f.value.some(x=>x.slots.label);return d(Ge,{ref:g,currentName:i.value,editable:e.editable,type:e.type,panes:f.value,stretch:e.stretch,onTabClick:o,onTabRemove:_},{$stable:!T})}},null),E]),S=d("div",{class:s.e("content")},[J(b,"default")]);return d("div",{class:[s.b(),s.m(e.tabPosition),{[s.m("card")]:e.type==="card",[s.m("border-card")]:e.type==="border-card"}]},[S,$])}}});var et=Qe;const tt=U({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),fe="ElTabPane",at=M({name:fe}),st=M({...at,props:tt,setup(e){const l=e,b=ae(),v=ze(),t=Q(q);t||ee(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const s=K("tab-pane"),u=N(),f=V(()=>l.closable||t.props.closable),y=ne(()=>{var o;return t.currentName.value===((o=l.name)!=null?o:u.value)}),C=N(y.value),g=V(()=>{var o;return(o=l.name)!=null?o:u.value}),i=ne(()=>!l.lazy||C.value||y.value);L(y,o=>{o&&(C.value=!0)});const p=Ae({uid:b.uid,slots:v,props:l,paneName:g,active:y,index:u,isClosable:f});return t.registerPane(p),de(()=>{t.sortPane(p)}),Fe(()=>{t.unregisterPane(p.uid)}),(o,_)=>O(i)?Le((re(),ie("div",{key:0,id:`pane-${O(g)}`,class:ce(O(s).b()),role:"tabpanel","aria-hidden":!O(y),"aria-labelledby":`tab-${O(g)}`},[J(o.$slots,"default")],10,["id","aria-hidden","aria-labelledby"])),[[Me,O(y)]]):Ve("v-if",!0)}});var pe=ue(st,[["__file","tab-pane.vue"]]);const lt=Ie(et,{TabPane:pe}),ot=De(pe);export{ot as E,lt as a};
