import{d as u,ab as f,r as x,a0 as g,o as l,A as b,q as m,e as t,c as n,i as a,p,n as h,B as v}from"./index-CvOCUbz8.js";/* empty css                  */import{B as y}from"./index-CuFX2LHW.js";const k={key:0},V={key:1},w={key:0,class:"dialog-footer"},E=u({__name:"processPreview",setup(B,{expose:c}){const e=f({visible:!1,type:"",xmlStr:""}),i=x();return c({openDialog:(r,o)=>{e.visible=!0,e.xmlStr=r,e.type=o,o==="bpmn"&&h(()=>{var s;(s=i.value)==null||s.initXml(e.xmlStr)})}}),(r,o)=>{const s=g("highlightjs"),d=v;return l(),b(d,{modelValue:t(e).visible,"onUpdate:modelValue":o[0]||(o[0]=_=>t(e).visible=_),title:"预览",width:"70%","append-to-body":"","destroy-on-close":""},{footer:m(()=>[t(e).type==="xml"?(l(),n("span",w)):a("",!0)]),default:m(()=>[t(e).type==="bpmn"&&t(e).xmlStr?(l(),n("div",k,[p(y,{ref_key:"bpmnViewerRef",ref:i},null,512)])):a("",!0),t(e).type==="xml"&&t(e).xmlStr?(l(),n("div",V,[p(s,{language:"xml",code:t(e).xmlStr},null,8,["code"])])):a("",!0)]),_:1},8,["modelValue"])}}});export{E as _};
