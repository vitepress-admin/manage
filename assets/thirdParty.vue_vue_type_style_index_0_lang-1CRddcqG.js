import{d as f,aq as v,k as b,o as w,c as _,p as e,q as d,m as s,y as k,e as C,av as $,C as x,x as E,at as T,a1 as B}from"./index-m2T4SZVn.js";import{E as I,a as N}from"./el-table-column-Ct10N-EN.js";import"./el-checkbox-Di_0n5g6.js";import{b as y,a as A}from"./auth-B1MY9eD9.js";const G=["src"],q={id:"git-user-binding"},M={id:"authlist",class:"user-bind"},U={class:"git-other-login-icon"},V={class:"git-other-login-icon"},z={class:"git-other-login-icon"},D={class:"git-other-login-icon"},F={class:"git-other-login-icon"},K={class:"git-other-login-icon"},X=f({__name:"thirdParty",props:{auths:v.any.isRequired},setup(p){const{proxy:a}=B(),c=p,m=b(()=>c.auths),u=r=>{$.confirm('您确定要解除"'+r.source+'"的账号绑定吗？').then(()=>y(r.id)).then(t=>{t.code===200?(a==null||a.$modal.msgSuccess("解绑成功"),a==null||a.$tab.refreshPage()):a==null||a.$modal.msgError(t.msg)}).catch(()=>{})},n=r=>{A(r,x().tenantId).then(t=>{t.code===200?window.location.href=t.data:a==null||a.$modal.msgError(t.msg)})};return(r,t)=>{const o=I,g=E,h=N,l=T;return w(),_("div",null,[e(h,{data:C(m),style:{width:"100%",height:"100%","font-size":"14px"}},{default:d(()=>[e(o,{label:"序号",width:"50",type:"index"}),e(o,{label:"绑定账号平台",width:"140",align:"center",prop:"source","show-overflow-tooltip":""}),e(o,{label:"头像",width:"120",align:"center",prop:"avatar"},{default:d(i=>[s("img",{src:i.row.avatar,style:{width:"45px",height:"45px"}},null,8,G)]),_:1}),e(o,{label:"系统账号",width:"180",align:"center",prop:"userName","show-overflow-tooltip":!0}),e(o,{label:"绑定时间",width:"180",align:"center",prop:"createTime"}),e(o,{label:"操作",width:"80",align:"center","class-name":"small-padding fixed-width"},{default:d(i=>[e(g,{size:"small",type:"text",onClick:P=>u(i.row)},{default:d(()=>t[6]||(t[6]=[k("解绑")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),s("div",q,[t[13]||(t[13]=s("h4",{class:"provider-desc"},"你可以绑定以下第三方帐号",-1)),s("div",M,[s("a",{class:"third-app",href:"#",title:"使用 微信 账号授权登录",onClick:t[0]||(t[0]=i=>n("wechat_open"))},[s("div",U,[e(l,{"icon-class":"wechat"})]),t[7]||(t[7]=s("span",{class:"app-name"},"WeiXin",-1))]),s("a",{class:"third-app",href:"#",title:"使用 MaxKey 账号授权登录",onClick:t[1]||(t[1]=i=>n("maxkey"))},[s("div",V,[e(l,{"icon-class":"maxkey"})]),t[8]||(t[8]=s("span",{class:"app-name"},"MaxKey",-1))]),s("a",{class:"third-app",href:"#",title:"使用 TopIam 账号授权登录",onClick:t[2]||(t[2]=i=>n("topiam"))},[s("div",z,[e(l,{"icon-class":"topiam"})]),t[9]||(t[9]=s("span",{class:"app-name"},"TopIam",-1))]),s("a",{class:"third-app",href:"#",title:"使用 Gitee 账号授权登录",onClick:t[3]||(t[3]=i=>n("gitee"))},[s("div",D,[e(l,{"icon-class":"gitee"})]),t[10]||(t[10]=s("span",{class:"app-name"},"Gitee",-1))]),s("a",{class:"third-app",href:"#",title:"使用 GitHub 账号授权登录",onClick:t[4]||(t[4]=i=>n("github"))},[s("div",F,[e(l,{"icon-class":"github"})]),t[11]||(t[11]=s("span",{class:"app-name"},"Github",-1))]),s("a",{class:"third-app",href:"#",title:"使用 AFDIAN 账号授权登录",onClick:t[5]||(t[5]=i=>n("afdian"))},[s("div",K,[e(l,{"icon-class":"afdian"})]),t[12]||(t[12]=s("span",{class:"app-name"},"AFDIAN",-1))])])])])}}});export{X as _};
