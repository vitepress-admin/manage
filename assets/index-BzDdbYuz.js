import{a2 as t}from"./index-W4JQoyRu.js";const s=e=>t({url:"/workflow/processInstance/getPageByRunning",method:"get",params:e}),n=e=>t({url:"/workflow/processInstance/getPageByFinish",method:"get",params:e}),r=e=>t({url:`/workflow/processInstance/getHistoryImage/${e}?t`+Math.random(),method:"get"}),o=e=>t({url:`/workflow/processInstance/getHistoryList/${e}?t`+Math.random(),method:"get"}),c=e=>t({url:`/workflow/processInstance/getHistoryRecord/${e}`,method:"get"}),a=e=>t({url:"/workflow/processInstance/deleteRunInstance",method:"post",data:e}),l=e=>t({url:`/workflow/processInstance/deleteRunAndHisInstance/${e}`,method:"delete"}),g=e=>t({url:`/workflow/processInstance/deleteFinishAndHisInstance/${e}`,method:"delete"}),u=e=>t({url:"/workflow/processInstance/getPageByCurrent",method:"get",params:e}),d=e=>t({url:`/workflow/processInstance/cancelProcessApply/${e}`,method:"post"}),p={getPageByRunning:s,getPageByFinish:n,getHistoryImage:r,getHistoryList:o,getHistoryRecord:c,deleteRunInstance:a,deleteRunAndHisInstance:l,deleteFinishAndHisInstance:g,getPageByCurrent:u,cancelProcessApply:d};export{n as a,g as b,d as c,l as d,a as e,u as f,s as g,p};
