import{a2 as e}from"./index-CugbkTRb.js";const o=t=>e({url:"/workflow/task/getPageByTaskWait",method:"get",params:t}),r=t=>e({url:"/workflow/task/getPageByTaskFinish",method:"get",params:t}),n=t=>e({url:"/workflow/task/getPageByTaskCopy",method:"get",params:t}),k=t=>e({url:"/workflow/task/getPageByAllTaskWait",method:"get",params:t}),l=t=>e({url:"/workflow/task/getPageByAllTaskFinish",method:"get",params:t}),u=t=>e({url:"/workflow/task/startWorkFlow",method:"post",data:t}),g=t=>e({url:"/workflow/task/completeTask",method:"post",data:t}),c=t=>e({url:"/workflow/task/backProcess",method:"post",data:t}),d=t=>e({url:"/workflow/task/getTaskById/"+t,method:"get"}),w=t=>e({url:"/workflow/task/addMultiInstanceExecution",method:"post",data:t}),i=t=>e({url:"/workflow/task/deleteMultiInstanceExecution",method:"post",data:t}),m=(t,s)=>e({url:`/workflow/task/updateAssignee/${t}/${s}`,method:"put"}),h=t=>e({url:"/workflow/task/transferTask",method:"post",data:t}),T=t=>e({url:"/workflow/task/terminationTask",method:"post",data:t}),f=t=>e({url:`/workflow/task/getInstanceVariable/${t}`,method:"get"}),p=t=>e({url:`/workflow/task/getTaskNodeList/${t}`,method:"get"}),y=t=>e({url:"/workflow/task/delegateTask",method:"post",data:t}),B=t=>e({url:"/workflow/task/getTaskUserIdsByAddMultiInstance/"+t,method:"get"}),I=t=>e({url:"/workflow/task/getListByDeleteMultiInstance/"+t,method:"get"});export{p as a,c as b,g as c,y as d,T as e,B as f,d as g,I as h,w as i,i as j,k,l,f as m,n,r as o,o as p,u as s,h as t,m as u};
