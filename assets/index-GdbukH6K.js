import{a2 as e}from"./index-CdPu8FRl.js";const o=t=>e({url:"/vpadmin/project/list",method:"get",params:t}),a=t=>e({url:"/vpadmin/project",method:"post",data:t}),s=t=>e({url:"/vpadmin/project",method:"put",data:t}),u=(t,r)=>e({url:"/vpadmin/project/"+t,method:"delete",params:{deleteRemote:r}}),c=t=>e({url:`/vpadmin/project/running/${t}`,method:"get"}),d=()=>e({url:"/vpadmin/project/runningOne",method:"get"}),m=t=>e({url:`/vpadmin/project/quota/${t}`,method:"get"});function p(){return e({url:"/vpadmin/themesConfig/listAll",method:"get"})}export{o as a,a as b,m as c,u as d,c as e,d as g,p as l,s as u};
