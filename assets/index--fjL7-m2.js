import{a2 as t,bA as u}from"./index-lTSpdEk7.js";const a=e=>t({url:"/system/user/list",method:"get",params:e}),o=e=>t({url:"/system/user/listVpadminUser",method:"get",params:e}),d=e=>t({url:"/system/user/optionselect?userIds="+e,method:"get"}),n=e=>t({url:"/system/user/"+u(e),method:"get"}),m=e=>t({url:"/system/user",method:"post",data:e}),p=e=>t({url:"/system/user",method:"put",data:e}),l=e=>t({url:"/vpadmin/user",method:"post",data:e}),c=e=>t({url:"/vpadmin/user",method:"put",data:e}),h=e=>t({url:"/system/user/"+e,method:"delete"}),i=(e,s)=>t({url:"/system/user/resetPwd",method:"put",headers:{isEncrypt:!0,repeatSubmit:!1},data:{userId:e,password:s}}),y=(e,s)=>t({url:"/system/user/changeStatus",method:"put",data:{userId:e,status:s}}),U=()=>t({url:"/system/user/profile",method:"get"}),g=e=>t({url:"/system/user/profile",method:"put",data:e}),f=(e,s)=>t({url:"/system/user/profile/updatePwd",method:"put",headers:{isEncrypt:!0,repeatSubmit:!1},data:{oldPassword:e,newPassword:s}}),S=e=>t({url:"/system/user/profile/avatar",method:"post",data:e}),P=e=>t({url:"/system/user/authRole/"+e,method:"get"}),v=e=>t({url:"/system/user/authRole",method:"put",params:e}),b=e=>t({url:"/system/user/list/dept/"+e,method:"get"}),w=()=>t({url:"/system/user/deptTree",method:"get"}),R={listUser:a,listVpadminUser:o,getUser:n,optionSelect:d,addUser:m,updateUser:p,addVpadminUser:l,updateVpadminUser:c,delUser:h,resetUserPwd:i,changeUserStatus:y,getUserProfile:U,updateUserProfile:g,updateUserPwd:f,uploadAvatar:S,getAuthRole:P,updateAuthRole:v,deptTreeSelect:w,listUserByDeptId:b};export{P as a,R as b,b as c,w as d,S as e,g as f,U as g,f as h,a as l,d as o,v as u};
