import{a2 as e}from"./index-B3LzELiE.js";function c(t){return e({url:"/system/tenant/package/list",method:"get",params:t})}function u(){return e({url:"/system/tenant/package/selectList",method:"get"})}function r(t){return e({url:"/system/tenant/package/"+t,method:"get"})}function g(t){return e({url:"/system/tenant/package",method:"post",data:t})}function o(t){return e({url:"/system/tenant/package",method:"put",data:t})}function m(t,a){return e({url:"/system/tenant/package/changeStatus",method:"put",data:{packageId:t,status:a}})}function d(t){return e({url:"/system/tenant/package/"+t,method:"delete"})}export{g as a,m as c,d,r as g,c as l,u as s,o as u};
