import{d as F,h as C,r as g,D,o as i,A as E,q as m,c as s,F as u,m as l,t as a,y as r,p as c,z as v,i as T,B as N,_ as w}from"./index-lTSpdEk7.js";/* empty css                  */import{E as I,a as S}from"./el-tab-pane-Daoq2Hcs.js";const A={class:"commit-info"},L=F({__name:"CommitDetailDialog",props:{visible:{type:Boolean},commit:{}},emits:["update:visible"],setup(_,{emit:V}){const{t:h}=C(),p=_,y=V,d=g(p.visible),b=g("added");D(()=>p.visible,e=>{d.value=e,e&&(b.value="added")}),D(d,e=>{y("update:visible",e)});const $=e=>new Date(e).toLocaleString(h("locale")),f=e=>{var o;return((o=p.commit)==null?void 0:o.children.filter(n=>n.status===e))||[]};return(e,o)=>{const n=I,k=S,B=N;return i(),E(B,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=t=>d.value=t),title:e.$t("commitDetails"),width:"50%",class:"commit-detail-dialog"},{default:m(()=>[e.commit?(i(),s(u,{key:0},[l("div",A,[l("p",null,[l("strong",null,a(e.$t("commitId"))+":",1),r(" "+a(e.commit.id),1)]),l("p",null,[l("strong",null,a(e.$t("author"))+":",1),r(" "+a(e.commit.author),1)]),l("p",null,[l("strong",null,a(e.$t("description"))+":",1),r(" "+a(e.commit.commitDesc),1)]),l("p",null,[l("strong",null,a(e.$t("date"))+":",1),r(" "+a($(e.commit.commitTime)),1)])]),c(k,{modelValue:b.value,"onUpdate:modelValue":o[0]||(o[0]=t=>b.value=t)},{default:m(()=>[c(n,{label:e.$t("addedFiles"),name:"added"},{default:m(()=>[l("ul",null,[(i(!0),s(u,null,v(f("A"),t=>(i(),s("li",{key:t.id},a(t.path),1))),128))])]),_:1},8,["label"]),c(n,{label:e.$t("modifiedFiles"),name:"modified"},{default:m(()=>[l("ul",null,[(i(!0),s(u,null,v(f("M"),t=>(i(),s("li",{key:t.id},a(t.path),1))),128))])]),_:1},8,["label"]),c(n,{label:e.$t("deletedFiles"),name:"deleted"},{default:m(()=>[l("ul",null,[(i(!0),s(u,null,v(f("D"),t=>(i(),s("li",{key:t.id},a(t.path),1))),128))])]),_:1},8,["label"])]),_:1},8,["modelValue"])],64)):T("",!0)]),_:1},8,["modelValue","title"])}}}),M=w(L,[["__scopeId","data-v-01e4b11a"]]);export{M as default};
