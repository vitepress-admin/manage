import{d as A,o as Y,c as M,w as k,U as T,m,au as S,i as E,aj as R,t as N,C as D,r as I,ab as F,a0 as V,e as y,p as C,q as x,A as j,y as $,af as q,R as G,x as Z,B as J,a1 as K,_ as Q}from"./index-DceX8DY-.js";/* empty css                  */import{E as tt}from"./el-progress-BD9Zbjab.js";/* empty css               *//* empty css               *//* empty css              */import{e as et}from"./index-DlnhpJNR.js";import{E as it}from"./index-Dbbuwijp.js";import{E as st}from"./index-CJCiAumQ.js";import"./index-SIlZbU2E.js";import"./_baseClone-_LOkloOv.js";import"./_initCloneObject-DQLonlhK.js";const z={};z.getData=t=>new Promise((e,i)=>{let s={};ot(t).then(o=>{s.arrayBuffer=o;try{s.orientation=ct(o)}catch{s.orientation=-1}e(s)}).catch(o=>{i(o)})});function ot(t){let e=null;return new Promise((i,s)=>{if(t.src)if(/^data\:/i.test(t.src))e=rt(t.src),i(e);else if(/^blob\:/i.test(t.src)){var o=new FileReader;o.onload=function(r){e=r.target.result,i(e)},ht(t.src,function(r){o.readAsArrayBuffer(r)})}else{var h=new XMLHttpRequest;h.onload=function(){if(this.status==200||this.status===0)e=h.response,i(e);else throw"Could not load image";h=null},h.open("GET",t.src,!0),h.responseType="arraybuffer",h.send(null)}else s("img error")})}function ht(t,e){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="blob",i.onload=function(s){(this.status==200||this.status===0)&&e(this.response)},i.send()}function rt(t,e){e=e||t.match(/^data\:([^\;]+)\;base64,/mi)[1]||"",t=t.replace(/^data\:([^\;]+)\;base64,/gmi,"");for(var i=atob(t),s=i.length%2==0?i.length:i.length+1,o=new ArrayBuffer(s),h=new Uint16Array(o),r=0;r<s;r++)h[r]=i.charCodeAt(r);return o}function at(t,e,i){var s="",o;for(o=e,i+=e;o<i;o++)s+=String.fromCharCode(t.getUint8(o));return s}function ct(t){var e=new DataView(t),i=e.byteLength,s,o,h,r,a,p,n,c,l,u;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(l=2;l<i;){if(e.getUint8(l)===255&&e.getUint8(l+1)===225){n=l;break}l++}if(n&&(o=n+4,h=n+10,at(e,o,4)==="Exif"&&(p=e.getUint16(h),a=p===18761,(a||p===19789)&&e.getUint16(h+2,a)===42&&(r=e.getUint32(h+4,a),r>=8&&(c=h+r)))),c){for(i=e.getUint16(c,a),u=0;u<i;u++)if(l=c+u*12+2,e.getUint16(l,a)===274){l+=8,s=e.getUint16(l,a);break}}return s}const nt=(t,e)=>{const i=t.__vccOpts||t;for(const[s,o]of e)i[s]=o;return i},pt=A({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:()=>[1,1]},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:()=>10,validator:function(t){return Array.isArray(t)?Number(t[0])>=0&&Number(t[1])>=0:Number(t)>=0}},fillColor:{type:String,default:""}},computed:{cropInfo(){let t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){let e=1;this.high&&!this.full&&(e=window.devicePixelRatio),this.enlarge!==1&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE(){return!!window.ActiveXObject||"ActiveXObject"in window},passive(){return this.isIE?null:{passive:!1}}},watch:{img(){this.checkedImg()},imgs(t){t!==""&&this.reload()},cropW(){this.showPreview()},cropH(){this.showPreview()},cropOffsertX(){this.showPreview()},cropOffsertY(){this.showPreview()},scale(t,e){this.showPreview()},x(){this.showPreview()},y(){this.showPreview()},autoCrop(t){t&&this.goAutoCrop()},autoCropWidth(){this.autoCrop&&this.goAutoCrop()},autoCropHeight(){this.autoCrop&&this.goAutoCrop()},mode(){this.checkedImg()},rotate(){this.showPreview(),this.autoCrop?this.goAutoCrop(this.cropW,this.cropH):(this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion(t){var e=navigator.userAgent.split(" "),i="";let s=0;const o=new RegExp(t,"i");for(var h=0;h<e.length;h++)o.test(e[h])&&(i=e[h]);return i?s=i.split("/")[1].split("."):s=["0","0","0"],s},checkOrientationImage(t,e,i,s){if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){const r=this.getVersion("version");r[0]>13&&r[1]>1&&(e=-1)}else{const r=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(r){let a=r[1];a=a.split("_"),(a[0]>13||a[0]>=13&&a[1]>=4)&&(e=-1)}}let o=document.createElement("canvas"),h=o.getContext("2d");switch(h.save(),e){case 2:o.width=i,o.height=s,h.translate(i,0),h.scale(-1,1);break;case 3:o.width=i,o.height=s,h.translate(i/2,s/2),h.rotate(180*Math.PI/180),h.translate(-i/2,-s/2);break;case 4:o.width=i,o.height=s,h.translate(0,s),h.scale(1,-1);break;case 5:o.height=i,o.width=s,h.rotate(.5*Math.PI),h.scale(1,-1);break;case 6:o.width=s,o.height=i,h.translate(s/2,i/2),h.rotate(90*Math.PI/180),h.translate(-i/2,-s/2);break;case 7:o.height=i,o.width=s,h.rotate(.5*Math.PI),h.translate(i,-s),h.scale(-1,1);break;case 8:o.height=i,o.width=s,h.translate(s/2,i/2),h.rotate(-90*Math.PI/180),h.translate(-i/2,-s/2);break;default:o.width=i,o.height=s}h.drawImage(t,0,0,i,s),h.restore(),o.toBlob(r=>{let a=URL.createObjectURL(r);URL.revokeObjectURL(this.imgs),this.imgs=a},"image/"+this.outputType,1)},checkedImg(){if(this.img===null||this.img===""){this.imgs="",this.clearCrop();return}this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();let t=new Image;if(t.onload=()=>{if(this.img==="")return this.$emit("img-load",new Error("图片不能为空")),!1;let i=t.width,s=t.height;z.getData(t).then(o=>{this.orientation=o.orientation||1;let h=Number(this.maxImgSize);if(!this.orientation&&i<h&s<h){this.imgs=this.img;return}i>h&&(s=s/i*h,i=h),s>h&&(i=i/s*h,s=h),this.checkOrientationImage(t,this.orientation,i,s)}).catch(o=>{this.$emit("img-load","error"),this.$emit("img-load-error",o)})},t.onerror=i=>{this.$emit("img-load","error"),this.$emit("img-load-error",i)},this.img.substr(0,4)!=="data"&&(t.crossOrigin=""),this.isIE){var e=new XMLHttpRequest;e.onload=function(){var i=URL.createObjectURL(this.response);t.src=i},e.open("GET",this.img,!0),e.responseType="blob",e.send()}else t.src=this.img},startMove(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),t.touches.length==2&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale(t){t.preventDefault();let e=this.scale;var i={x:this.touches[0].clientX,y:this.touches[0].clientY},s={x:t.touches[0].clientX,y:t.touches[0].clientY},o={x:this.touches[1].clientX,y:this.touches[1].clientY},h={x:t.touches[1].clientX,y:t.touches[1].clientY},r=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),a=Math.sqrt(Math.pow(s.x-h.x,2)+Math.pow(s.y-h.y,2)),p=a-r,n=1;n=n/this.trueWidth>n/this.trueHeight?n/this.trueHeight:n/this.trueWidth,n=n>.1?.1:n;var c=n*p;if(!this.touchNow){if(this.touchNow=!0,p>0?e+=Math.abs(c):p<0&&e>Math.abs(c)&&(e-=Math.abs(c)),this.touches=t.touches,setTimeout(()=>{this.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e}},cancelTouchScale(t){window.removeEventListener("touchmove",this.touchScale)},moveImg(t){if(t.preventDefault(),t.touches&&t.touches.length===2)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;let e="clientX"in t?t.clientX:t.touches[0].clientX,i="clientY"in t?t.clientY:t.touches[0].clientY,s,o;s=e-this.moveX,o=i-this.moveY,this.$nextTick(()=>{if(this.centerBox){let h=this.getImgAxis(s,o,this.scale),r=this.getCropAxis(),a=this.trueHeight*this.scale,p=this.trueWidth*this.scale,n,c,l,u;switch(this.rotate){case 1:case-1:case 3:case-3:n=this.cropOffsertX-this.trueWidth*(1-this.scale)/2+(a-p)/2,c=this.cropOffsertY-this.trueHeight*(1-this.scale)/2+(p-a)/2,l=n-a+this.cropW,u=c-p+this.cropH;break;default:n=this.cropOffsertX-this.trueWidth*(1-this.scale)/2,c=this.cropOffsertY-this.trueHeight*(1-this.scale)/2,l=n-p+this.cropW,u=c-a+this.cropH;break}h.x1>=r.x1&&(s=n),h.y1>=r.y1&&(o=c),h.x2<=r.x2&&(s=l),h.y2<=r.y2&&(o=u)}this.x=s,this.y=o,this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})})},leaveImg(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize(t){t.preventDefault();let e=this.scale;var i=t.deltaY||t.wheelDelta,s=navigator.userAgent.indexOf("Firefox");i=s>0?i*30:i,this.isIE&&(i=-i);var o=this.coe;o=o/this.trueWidth>o/this.trueHeight?o/this.trueHeight:o/this.trueWidth;var h=o*i;h<0?e+=Math.abs(h):e>Math.abs(h)&&(e-=Math.abs(h));let r=h<0?"add":"reduce";if(r!==this.coeStatus&&(this.coeStatus=r,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(()=>{this.scaling=!1,this.coe=this.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},changeScale(t){let e=this.scale;t=t||1;var i=20;if(i=i/this.trueWidth>i/this.trueHeight?i/this.trueHeight:i/this.trueWidth,t=t*i,t>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(()=>{var s=e-this.cropX,o=i-this.cropY;if(s>0?(this.cropW=s+this.cropChangeX>this.w?this.w-this.cropChangeX:s,this.cropOffsertX=this.cropChangeX):(this.cropW=this.w-this.cropChangeX+Math.abs(s)>this.w?this.cropChangeX:Math.abs(s),this.cropOffsertX=this.cropChangeX+s>0?this.cropChangeX+s:0),!this.fixed)o>0?(this.cropH=o+this.cropChangeY>this.h?this.h-this.cropChangeY:o,this.cropOffsertY=this.cropChangeY):(this.cropH=this.h-this.cropChangeY+Math.abs(o)>this.h?this.cropChangeY:Math.abs(o),this.cropOffsertY=this.cropChangeY+o>0?this.cropChangeY+o:0);else{var h=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];h+this.cropOffsertY>this.h?(this.cropH=this.h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],s>0?this.cropOffsertX=this.cropChangeX:this.cropOffsertX=this.cropChangeX-this.cropW):this.cropH=h,this.cropOffsertY=this.cropOffsertY}})},changeCropSize(t,e,i,s,o){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=i,this.changeCropTypeX=s,this.changeCropTypeY=o,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;let s=this.w,o=this.h,h=0,r=0;if(this.centerBox){let n=this.getImgAxis(),c=n.x2,l=n.y2;h=n.x1>0?n.x1:0,r=n.y1>0?n.y1:0,s>c&&(s=c),o>l&&(o=l)}const[a,p]=this.checkCropLimitSize();this.$nextTick(()=>{var n=e-this.cropX,c=i-this.cropY;if(this.canChangeX&&(this.changeCropTypeX===1?this.cropOldW-n<a?(this.cropW=a,this.cropOffsertX=this.cropOldW+this.cropChangeX-h-a):this.cropOldW-n>0?(this.cropW=s-this.cropChangeX-n<=s-h?this.cropOldW-n:this.cropOldW+this.cropChangeX-h,this.cropOffsertX=s-this.cropChangeX-n<=s-h?this.cropChangeX+n:h):(this.cropW=Math.abs(n)+this.cropChangeX<=s?Math.abs(n)-this.cropOldW:s-this.cropOldW-this.cropChangeX,this.cropOffsertX=this.cropChangeX+this.cropOldW):this.changeCropTypeX===2&&(this.cropOldW+n<a?this.cropW=a:this.cropOldW+n>0?(this.cropW=this.cropOldW+n+this.cropOffsertX<=s?this.cropOldW+n:s-this.cropOffsertX,this.cropOffsertX=this.cropChangeX):(this.cropW=s-this.cropChangeX+Math.abs(n+this.cropOldW)<=s-h?Math.abs(n+this.cropOldW):this.cropChangeX-h,this.cropOffsertX=s-this.cropChangeX+Math.abs(n+this.cropOldW)<=s-h?this.cropChangeX-Math.abs(n+this.cropOldW):h))),this.canChangeY&&(this.changeCropTypeY===1?this.cropOldH-c<p?(this.cropH=p,this.cropOffsertY=this.cropOldH+this.cropChangeY-r-p):this.cropOldH-c>0?(this.cropH=o-this.cropChangeY-c<=o-r?this.cropOldH-c:this.cropOldH+this.cropChangeY-r,this.cropOffsertY=o-this.cropChangeY-c<=o-r?this.cropChangeY+c:r):(this.cropH=Math.abs(c)+this.cropChangeY<=o?Math.abs(c)-this.cropOldH:o-this.cropOldH-this.cropChangeY,this.cropOffsertY=this.cropChangeY+this.cropOldH):this.changeCropTypeY===2&&(this.cropOldH+c<p?this.cropH=p:this.cropOldH+c>0?(this.cropH=this.cropOldH+c+this.cropOffsertY<=o?this.cropOldH+c:o-this.cropOffsertY,this.cropOffsertY=this.cropChangeY):(this.cropH=o-this.cropChangeY+Math.abs(c+this.cropOldH)<=o-r?Math.abs(c+this.cropOldH):this.cropChangeY-r,this.cropOffsertY=o-this.cropChangeY+Math.abs(c+this.cropOldH)<=o-r?this.cropChangeY-Math.abs(c+this.cropOldH):r))),this.canChangeX&&this.fixed){var l=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];l<p?(this.cropH=p,this.cropW=this.fixedNumber[0]*p/this.fixedNumber[1],this.changeCropTypeX===1&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):l+this.cropOffsertY>o?(this.cropH=o-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],this.changeCropTypeX===1&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):this.cropH=l}if(this.canChangeY&&this.fixed){var u=this.cropH/this.fixedNumber[1]*this.fixedNumber[0];u<a?(this.cropW=a,this.cropH=this.fixedNumber[1]*a/this.fixedNumber[0],this.cropOffsertY=this.cropOldH+this.cropChangeY-this.cropH):u+this.cropOffsertX>s?(this.cropW=s-this.cropOffsertX,this.cropH=this.cropW/this.fixedNumber[0]*this.fixedNumber[1]):this.cropW=u}})},checkCropLimitSize(){let{cropW:t,cropH:e,limitMinSize:i}=this,s=new Array;return Array.isArray(i)?s=i:s=[i,i],t=parseFloat(s[0]),e=parseFloat(s[1]),[t,e]},changeCropEnd(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},calculateSize(t,e,i,s,o,h){const r=t/e;let a=o,p=h;return a<i&&(a=i,p=Math.ceil(a/r)),p<s&&(p=s,a=Math.ceil(p*r),a<i&&(a=i,p=Math.ceil(a/r))),a<o&&(a=o,p=Math.ceil(a/r)),p<h&&(p=h,a=Math.ceil(p*r)),{width:a,height:p}},endCrop(){this.cropW===0&&this.cropH===0&&(this.cropping=!1);let[t,e]=this.checkCropLimitSize();const{width:i,height:s}=this.fixed?this.calculateSize(this.fixedNumber[0],this.fixedNumber[1],t,e,this.cropW,this.cropH):{width:t,height:e};i>this.cropW&&(this.cropW=i,this.cropOffsertX+i>this.w&&(this.cropOffsertX=this.w-i)),s>this.cropH&&(this.cropH=s,this.cropOffsertY+s>this.h&&(this.cropOffsertY=this.h-s)),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop(){this.crop=!0},stopCrop(){this.crop=!1},clearCrop(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&t.touches.length===2)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);let e="clientX"in t?t.clientX:t.touches[0].clientX,i="clientY"in t?t.clientY:t.touches[0].clientY,s,o;s=e-this.cropOffsertX,o=i-this.cropOffsertY,this.cropX=s,this.cropY=o,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop(t,e){let i=0,s=0;t&&(t.preventDefault(),i="clientX"in t?t.clientX:t.touches[0].clientX,s="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick(()=>{let o,h,r=i-this.cropX,a=s-this.cropY;if(e&&(r=this.cropOffsertX,a=this.cropOffsertY),r<=0?o=0:r+this.cropW>this.w?o=this.w-this.cropW:o=r,a<=0?h=0:a+this.cropH>this.h?h=this.h-this.cropH:h=a,this.centerBox){let p=this.getImgAxis();o<=p.x1&&(o=p.x1),o+this.cropW>p.x2&&(o=p.x2-this.cropW),h<=p.y1&&(h=p.y1),h+this.cropH>p.y2&&(h=p.y2-this.cropH)}this.cropOffsertX=o,this.cropOffsertY=h,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})})},getImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s={x1:0,x2:0,y1:0,y2:0},o=this.trueWidth*i,h=this.trueHeight*i;switch(this.rotate){case 0:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break;case 1:case-1:case 3:case-3:s.x1=t+this.trueWidth*(1-i)/2+(o-h)/2,s.x2=s.x1+this.trueHeight*i,s.y1=e+this.trueHeight*(1-i)/2+(h-o)/2,s.y2=s.y1+this.trueWidth*i;break;default:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break}return s},getCropAxis(){let t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked(t){let e=document.createElement("canvas"),i=new Image,s=this.rotate,o=this.trueWidth,h=this.trueHeight,r=this.cropOffsertX,a=this.cropOffsertY;i.onload=()=>{if(this.cropW!==0){let c=e.getContext("2d"),l=1;this.high&!this.full&&(l=window.devicePixelRatio),this.enlarge!==1&!this.full&&(l=Math.abs(Number(this.enlarge)));let u=this.cropW*l,X=this.cropH*l,g=o*this.scale*l,f=h*this.scale*l,v=(this.x-r+this.trueWidth*(1-this.scale)/2)*l,w=(this.y-a+this.trueHeight*(1-this.scale)/2)*l;switch(n(u,X),c.save(),this.fillColor&&(c.fillStyle=this.fillColor,c.fillRect(0,0,e.width,e.height)),s){case 0:this.full?(n(u/this.scale,X/this.scale),c.drawImage(i,v/this.scale,w/this.scale,g/this.scale,f/this.scale)):c.drawImage(i,v,w,g,f);break;case 1:case-3:this.full?(n(u/this.scale,X/this.scale),v=v/this.scale+(g/this.scale-f/this.scale)/2,w=w/this.scale+(f/this.scale-g/this.scale)/2,c.rotate(s*90*Math.PI/180),c.drawImage(i,w,-v-f/this.scale,g/this.scale,f/this.scale)):(v=v+(g-f)/2,w=w+(f-g)/2,c.rotate(s*90*Math.PI/180),c.drawImage(i,w,-v-f,g,f));break;case 2:case-2:this.full?(n(u/this.scale,X/this.scale),c.rotate(s*90*Math.PI/180),v=v/this.scale,w=w/this.scale,c.drawImage(i,-v-g/this.scale,-w-f/this.scale,g/this.scale,f/this.scale)):(c.rotate(s*90*Math.PI/180),c.drawImage(i,-v-g,-w-f,g,f));break;case 3:case-1:this.full?(n(u/this.scale,X/this.scale),v=v/this.scale+(g/this.scale-f/this.scale)/2,w=w/this.scale+(f/this.scale-g/this.scale)/2,c.rotate(s*90*Math.PI/180),c.drawImage(i,-w-g/this.scale,v,g/this.scale,f/this.scale)):(v=v+(g-f)/2,w=w+(f-g)/2,c.rotate(s*90*Math.PI/180),c.drawImage(i,-w-g,v,g,f));break;default:this.full?(n(u/this.scale,X/this.scale),c.drawImage(i,v/this.scale,w/this.scale,g/this.scale,f/this.scale)):c.drawImage(i,v,w,g,f)}c.restore()}else{let c=o*this.scale,l=h*this.scale,u=e.getContext("2d");switch(u.save(),this.fillColor&&(u.fillStyle=this.fillColor,u.fillRect(0,0,e.width,e.height)),s){case 0:n(c,l),u.drawImage(i,0,0,c,l);break;case 1:case-3:n(l,c),u.rotate(s*90*Math.PI/180),u.drawImage(i,0,-l,c,l);break;case 2:case-2:n(c,l),u.rotate(s*90*Math.PI/180),u.drawImage(i,-c,-l,c,l);break;case 3:case-1:n(l,c),u.rotate(s*90*Math.PI/180),u.drawImage(i,-c,0,c,l);break;default:n(c,l),u.drawImage(i,0,0,c,l)}u.restore()}t(e)};var p=this.img.substr(0,4);p!=="data"&&(i.crossOrigin="Anonymous"),i.src=this.imgs;function n(c,l){e.width=Math.round(c),e.height=Math.round(l)}},getCropData(t){this.getCropChecked(e=>{t(e.toDataURL("image/"+this.outputType,this.outputSize))})},getCropBlob(t){this.getCropChecked(e=>{e.toBlob(i=>t(i),"image/"+this.outputType,this.outputSize)})},showPreview(){if(this.isCanShow)this.isCanShow=!1,setTimeout(()=>{this.isCanShow=!0},16);else return!1;let t=this.cropW,e=this.cropH,i=this.scale;var s={};s.div={width:`${t}px`,height:`${e}px`};let o=(this.x-this.cropOffsertX)/i,h=(this.y-this.cropOffsertY)/i,r=0;s.w=t,s.h=e,s.url=this.imgs,s.img={width:`${this.trueWidth}px`,height:`${this.trueHeight}px`,transform:`scale(${i})translate3d(${o}px, ${h}px, ${r}px)rotateZ(${this.rotate*90}deg)`},s.html=`
      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">
        <div style="width: ${t}px; height: ${e}px">
          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:
          scale(${i})translate3d(${o}px, ${h}px, ${r}px)rotateZ(${this.rotate*90}deg)">
        </div>
      </div>`,this.$emit("real-time",s)},reload(){let t=new Image;t.onload=()=>{this.w=parseFloat(window.getComputedStyle(this.$refs.cropper).width),this.h=parseFloat(window.getComputedStyle(this.$refs.cropper).height),this.trueWidth=t.width,this.trueHeight=t.height,this.original?this.scale=1:this.scale=this.checkedMode(),this.$nextTick(()=>{this.x=-(this.trueWidth-this.trueWidth*this.scale)/2+(this.w-this.trueWidth*this.scale)/2,this.y=-(this.trueHeight-this.trueHeight*this.scale)/2+(this.h-this.trueHeight*this.scale)/2,this.loading=!1,this.autoCrop&&this.goAutoCrop(),this.$emit("img-load","success"),setTimeout(()=>{this.showPreview()},20)})},t.onerror=()=>{this.$emit("img-load","error")},t.src=this.imgs},checkedMode(){let t=1,e=this.trueWidth,i=this.trueHeight;const s=this.mode.split(" ");switch(s[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":e=this.w,t=e/this.trueWidth,i=i*t,i<this.h&&(i=this.h,t=i/this.trueHeight);break;default:try{let o=s[0];if(o.search("px")!==-1){o=o.replace("px",""),e=parseFloat(o);const h=e/this.trueWidth;let r=1,a=s[1];a.search("px")!==-1&&(a=a.replace("px",""),i=parseFloat(a),r=i/this.trueHeight),t=Math.min(h,r)}if(o.search("%")!==-1&&(o=o.replace("%",""),e=parseFloat(o)/100*this.w,t=e/this.trueWidth),s.length===2&&o==="auto"){let h=s[1];h.search("px")!==-1&&(h=h.replace("px",""),i=parseFloat(h),t=i/this.trueHeight),h.search("%")!==-1&&(h=h.replace("%",""),i=parseFloat(h)/100*this.h,t=i/this.trueHeight)}}catch{t=1}}return t},goAutoCrop(t,e){if(this.imgs===""||this.imgs===null)return;this.clearCrop(),this.cropping=!0;let i=this.w,s=this.h;if(this.centerBox){const r=Math.abs(this.rotate)%2>0;let a=(r?this.trueHeight:this.trueWidth)*this.scale,p=(r?this.trueWidth:this.trueHeight)*this.scale;i=a<i?a:i,s=p<s?p:s}var o=t||parseFloat(this.autoCropWidth),h=e||parseFloat(this.autoCropHeight);(o===0||h===0)&&(o=i*.8,h=s*.8),o=o>i?i:o,h=h>s?s:h,this.fixed&&(h=o/this.fixedNumber[0]*this.fixedNumber[1]),h>this.h&&(h=this.h,o=h/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(o,h)},changeCrop(t,e){if(this.centerBox){let i=this.getImgAxis();t>i.x2-i.x1&&(t=i.x2-i.x1,e=t/this.fixedNumber[0]*this.fixedNumber[1]),e>i.y2-i.y1&&(e=i.y2-i.y1,t=e/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick(()=>{this.cropOffsertX=(this.w-this.cropW)/2,this.cropOffsertY=(this.h-this.cropH)/2,this.centerBox&&this.moveCrop(null,!0)})},refresh(){this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(()=>{this.checkedImg()})},rotateLeft(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear(){this.rotate=0},checkoutImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s=!0;if(this.centerBox){let o=this.getImgAxis(t,e,i),h=this.getCropAxis();o.x1>=h.x1&&(s=!1),o.x2<=h.x2&&(s=!1),o.y1>=h.y1&&(s=!1),o.y2<=h.y2&&(s=!1)}return s}},mounted(){this.support="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";let t=this;var e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(i,s,o){for(var h=atob(this.toDataURL(s,o).split(",")[1]),r=h.length,a=new Uint8Array(r),p=0;p<r;p++)a[p]=h.charCodeAt(p);i(new Blob([a],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},unmounted(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}}),lt={key:0,class:"cropper-box"},ut=["src"],dt={class:"cropper-view-box"},gt=["src"],ft={key:1};function mt(t,e,i,s,o,h){return Y(),M("div",{class:"vue-cropper",ref:"cropper",onMouseover:e[28]||(e[28]=(...r)=>t.scaleImg&&t.scaleImg(...r)),onMouseout:e[29]||(e[29]=(...r)=>t.cancelScale&&t.cancelScale(...r))},[t.imgs?(Y(),M("div",lt,[k(m("div",{class:"cropper-box-canvas",style:S({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+t.rotate*90+"deg)"})},[m("img",{src:t.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,ut)],4),[[T,!t.loading]])])):E("",!0),m("div",{class:R(["cropper-drag-box",{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping}]),onMousedown:e[0]||(e[0]=(...r)=>t.startMove&&t.startMove(...r)),onTouchstart:e[1]||(e[1]=(...r)=>t.startMove&&t.startMove(...r))},null,34),k(m("div",{class:"cropper-crop-box",style:S({width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"})},[m("span",dt,[m("img",{style:S({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+t.rotate*90+"deg)"}),src:t.imgs,alt:"cropper-img"},null,12,gt)]),m("span",{class:"cropper-face cropper-move",onMousedown:e[2]||(e[2]=(...r)=>t.cropMove&&t.cropMove(...r)),onTouchstart:e[3]||(e[3]=(...r)=>t.cropMove&&t.cropMove(...r))},null,32),t.info?(Y(),M("span",{key:0,class:"crop-info",style:S({top:t.cropInfo.top})},N(t.cropInfo.width)+" × "+N(t.cropInfo.height),5)):E("",!0),t.fixedBox?E("",!0):(Y(),M("span",ft,[m("span",{class:"crop-line line-w",onMousedown:e[4]||(e[4]=r=>t.changeCropSize(r,!1,!0,0,1)),onTouchstart:e[5]||(e[5]=r=>t.changeCropSize(r,!1,!0,0,1))},null,32),m("span",{class:"crop-line line-a",onMousedown:e[6]||(e[6]=r=>t.changeCropSize(r,!0,!1,1,0)),onTouchstart:e[7]||(e[7]=r=>t.changeCropSize(r,!0,!1,1,0))},null,32),m("span",{class:"crop-line line-s",onMousedown:e[8]||(e[8]=r=>t.changeCropSize(r,!1,!0,0,2)),onTouchstart:e[9]||(e[9]=r=>t.changeCropSize(r,!1,!0,0,2))},null,32),m("span",{class:"crop-line line-d",onMousedown:e[10]||(e[10]=r=>t.changeCropSize(r,!0,!1,2,0)),onTouchstart:e[11]||(e[11]=r=>t.changeCropSize(r,!0,!1,2,0))},null,32),m("span",{class:"crop-point point1",onMousedown:e[12]||(e[12]=r=>t.changeCropSize(r,!0,!0,1,1)),onTouchstart:e[13]||(e[13]=r=>t.changeCropSize(r,!0,!0,1,1))},null,32),m("span",{class:"crop-point point2",onMousedown:e[14]||(e[14]=r=>t.changeCropSize(r,!1,!0,0,1)),onTouchstart:e[15]||(e[15]=r=>t.changeCropSize(r,!1,!0,0,1))},null,32),m("span",{class:"crop-point point3",onMousedown:e[16]||(e[16]=r=>t.changeCropSize(r,!0,!0,2,1)),onTouchstart:e[17]||(e[17]=r=>t.changeCropSize(r,!0,!0,2,1))},null,32),m("span",{class:"crop-point point4",onMousedown:e[18]||(e[18]=r=>t.changeCropSize(r,!0,!1,1,0)),onTouchstart:e[19]||(e[19]=r=>t.changeCropSize(r,!0,!1,1,0))},null,32),m("span",{class:"crop-point point5",onMousedown:e[20]||(e[20]=r=>t.changeCropSize(r,!0,!1,2,0)),onTouchstart:e[21]||(e[21]=r=>t.changeCropSize(r,!0,!1,2,0))},null,32),m("span",{class:"crop-point point6",onMousedown:e[22]||(e[22]=r=>t.changeCropSize(r,!0,!0,1,2)),onTouchstart:e[23]||(e[23]=r=>t.changeCropSize(r,!0,!0,1,2))},null,32),m("span",{class:"crop-point point7",onMousedown:e[24]||(e[24]=r=>t.changeCropSize(r,!1,!0,0,2)),onTouchstart:e[25]||(e[25]=r=>t.changeCropSize(r,!1,!0,0,2))},null,32),m("span",{class:"crop-point point8",onMousedown:e[26]||(e[26]=r=>t.changeCropSize(r,!0,!0,2,2)),onTouchstart:e[27]||(e[27]=r=>t.changeCropSize(r,!0,!0,2,2))},null,32)]))],4),[[T,t.cropping]])],544)}const vt=nt(pt,[["render",mt],["__scopeId","data-v-69939069"]]),wt=["src"],Ct={class:"avatar-upload-preview"},xt=["src"],yt=A({__name:"userAvatar",setup(t){const e=D(),{proxy:i}=K(),s=I(!1),o=I(!1),h=I("修改头像"),r=I({}),a=F({img:e.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0,outputType:"png",fileName:"",previews:{},visible:!1}),p=()=>{s.value=!0},n=()=>{o.value=!0},c=()=>{},l=()=>{r.value.rotateLeft()},u=()=>{r.value.rotateRight()},X=b=>{b=b||1,r.value.changeScale(b)},g=b=>{if(b.type.indexOf("image/")==-1)i==null||i.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{const d=new FileReader;d.readAsDataURL(b),d.onload=()=>{a.img=d.result,a.fileName=b.name}}},f=async()=>{r.value.getCropBlob(async b=>{let d=new FormData;d.append("avatarfile",b,a.fileName);const O=await et(d);s.value=!1,a.img=O.data.imgUrl,e.setAvatar(a.img),i==null||i.$modal.msgSuccess("修改成功"),o.value=!1})},v=b=>{a.previews=b},w=()=>{a.img=e.avatar,a.visible=!1};return(b,d)=>{const O=it,L=st,B=V("Upload"),_=G,W=Z,P=tt,U=J;return Y(),M("div",{class:"user-info-head",onClick:d[6]||(d[6]=H=>p())},[m("img",{src:y(a).img,title:"点击上传头像",class:"img-circle img-lg"},null,8,wt),C(U,{modelValue:y(s),"onUpdate:modelValue":d[5]||(d[5]=H=>q(s)?s.value=H:null),title:y(h),width:"800px","append-to-body":"",onOpened:n,onClose:w},{default:x(()=>[C(L,null,{default:x(()=>[C(O,{xs:24,md:12,style:{height:"350px"}},{default:x(()=>[y(o)?(Y(),j(y(vt),{key:0,ref_key:"cropper",ref:r,img:y(a).img,info:!0,"auto-crop":y(a).autoCrop,"auto-crop-width":y(a).autoCropWidth,"auto-crop-height":y(a).autoCropHeight,"fixed-box":y(a).fixedBox,"output-type":y(a).outputType,onRealTime:v},null,8,["img","auto-crop","auto-crop-width","auto-crop-height","fixed-box","output-type"])):E("",!0)]),_:1}),C(O,{xs:24,md:12,style:{height:"350px"}},{default:x(()=>[m("div",Ct,[m("img",{src:y(a).previews.url,style:S(y(a).previews.img)},null,12,xt)])]),_:1})]),_:1}),d[9]||(d[9]=m("br",null,null,-1)),C(L,null,{default:x(()=>[C(O,{lg:2,md:2},{default:x(()=>[C(P,{action:"#","http-request":c,"show-file-list":!1,"before-upload":g},{default:x(()=>[C(W,null,{default:x(()=>[d[7]||(d[7]=$(" 选择 ")),C(_,{class:"el-icon--right"},{default:x(()=>[C(B)]),_:1})]),_:1})]),_:1})]),_:1}),C(O,{lg:{span:1,offset:2},md:2},{default:x(()=>[C(W,{icon:"Plus",onClick:d[0]||(d[0]=H=>X(1))})]),_:1}),C(O,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(W,{icon:"Minus",onClick:d[1]||(d[1]=H=>X(-1))})]),_:1}),C(O,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(W,{icon:"RefreshLeft",onClick:d[2]||(d[2]=H=>l())})]),_:1}),C(O,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(W,{icon:"RefreshRight",onClick:d[3]||(d[3]=H=>u())})]),_:1}),C(O,{lg:{span:2,offset:6},md:2},{default:x(()=>[C(W,{type:"primary",onClick:d[4]||(d[4]=H=>f())},{default:x(()=>d[8]||(d[8]=[$("提 交")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Tt=Q(yt,[["__scopeId","data-v-81db23e8"]]);export{Tt as default};
