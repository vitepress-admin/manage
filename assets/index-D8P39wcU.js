import{bS as te,aH as Se,aN as G,aJ as ne,ab as xe,b3 as X,aF as Ne,aP as Ae,aO as Ie,az as ie,d as le,ax as Y,aI as P,bC as he,ay as ge,aZ as W,r as D,c3 as V,c0 as Te,c9 as Be,R as Le,c7 as Oe,D as w,n as ue,ca as Me,a0 as L,w as oe,U as de,o as E,c as F,m as se,A as z,q as _,aW as $e,aj as S,L as B,i as H,p as ee,au as ze,F as ye,z as ke,a1 as Ce,a3 as fe,b as Fe,b6 as qe,c5 as Pe,cb as T,cc as je,b_ as Re,cd as He,k as Ue,b4 as We,t as Ye,aA as Je}from"./index-CvOCUbz8.js";import{E as Ze}from"./el-checkbox-CUJrHLxp.js";const q="$treeNodeId",pe=function(t,e){!e||e[q]||Object.defineProperty(e,q,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ce=function(t,e){return t?e[t]:e[q]},ae=(t,e,n)=>{const d=t.value.currentNode;n();const o=t.value.currentNode;d!==o&&e("current-change",o?o.data:null,o)},re=t=>{let e=!0,n=!0,d=!0;for(let o=0,s=t.length;o<s;o++){const a=t[o];(a.checked!==!0||a.indeterminate)&&(e=!1,a.disabled||(d=!1)),(a.checked!==!1||a.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:d,half:!e&&!n}},U=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:d}=re(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):d?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const o=t.parent;!o||o.level===0||t.store.checkStrictly||U(o)},Q=function(t,e){const n=t.store.props,d=t.data||{},o=n[e];if(X(o))return o(d,t);if(Ne(o))return d[o];if(ne(o)){const s=d[e];return s===void 0?"":s}};let Ge=0;class O{constructor(e){this.id=Ge++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)te(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const s=Q(this,"isLeaf");Se(s)&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&!this.isLeafByUser&&this.expand(),G(this.data)||pe(this,this.data),!this.data)return;const d=e.defaultExpandedKeys,o=e.key;o&&d&&d.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){G(e)||pe(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&G(this.data)?n=this.data:n=Q(this,"children")||[];for(let d=0,o=n.length;d<o;d++)this.insertChild({data:n[d]})}get label(){return Q(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return Q(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(d=>d===e||n&&d.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,d){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof O)){if(!d){const o=this.getChildren(!0);o.includes(e.data)||(ne(n)||n<0?o.push(e.data):o.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=xe(new O(e)),e instanceof O&&e.initialize()}e.level=this.level+1,ne(n)||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let d;n&&(d=this.childNodes.indexOf(n)),this.insertChild(e,d)}insertAfter(e,n){let d;n&&(d=this.childNodes.indexOf(n),d!==-1&&(d+=1)),this.insertChild(e,d)}removeChild(e){const n=this.getChildren()||[],d=n.indexOf(e.data);d>-1&&n.splice(d,1);const o=this.childNodes.indexOf(e);o>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let d=0;d<this.childNodes.length;d++)if(this.childNodes[d].data===e){n=this.childNodes[d];break}n&&this.removeChild(n)}expand(e,n){const d=()=>{if(n){let o=this.parent;for(;o.level>0;)o.expanded=!0,o=o.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(o=>{o.canFocus=!0})};this.shouldLoadData()?this.loadData(o=>{G(o)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||U(this),d())}):d()}doCreateChildren(e,n={}){e.forEach(d=>{this.insertChild(Object.assign({data:d},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,d,o){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:a,allWithoutDisable:i}=re(this.childNodes);!this.isLeaf&&!a&&i&&(this.checked=!1,e=!1);const f=()=>{if(n){const g=this.childNodes;for(let h=0,p=g.length;h<p;h++){const y=g[h];o=o||e!==!1;const C=y.disabled?y.checked:o;y.setChecked(C,n,!0,o)}const{half:l,all:c}=re(g);c||(this.checked=c,this.indeterminate=l)}};if(this.shouldLoadData()){this.loadData(()=>{f(),U(this)},{checked:e!==!1});return}else f()}const s=this.parent;!s||s.level===0||d||U(s)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const d=this.store.props;let o="children";return d&&(o=d.children||"children"),n[o]===void 0&&(n[o]=null),e&&!n[o]&&(n[o]=[]),n[o]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(s=>s.data),d={},o=[];e.forEach((s,a)=>{const i=s[q];!!i&&n.findIndex(g=>g[q]===i)>=0?d[i]={index:a,data:s}:o.push({index:a,data:s})}),this.store.lazy||n.forEach(s=>{d[s[q]]||this.removeChildByData(s)}),o.forEach(({index:s,data:a})=>{this.insertChild({data:a},s)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const d=s=>{this.childNodes=[],this.doCreateChildren(s,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,s)},o=()=>{this.loading=!1};this.store.load(this,d,o)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const d=n.shift();n.unshift(...d.childNodes),e(d)}}reInitChecked(){this.store.checkStrictly||U(this)}}class Qe{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)te(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new O({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,d=this.lazy,o=function(s){const a=s.root?s.root.childNodes:s.childNodes;if(a.forEach(i=>{i.visible=n.call(i,e,i.data,i),o(i)}),!s.visible&&a.length){let i=!0;i=!a.some(f=>f.visible),s.root?s.root.visible=i===!1:s.visible=i===!1}e&&s.visible&&!s.isLeaf&&(!d||s.loaded)&&s.expand()};o(this)}setData(e){e!==this.root.data?(this.nodesMap={},this.root.setData(e),this._initDefaultCheckedNodes(),this.setCurrentNodeKey(this.currentNodeKey)):this.root.updateChildren()}getNode(e){if(e instanceof O)return e;const n=Ae(e)?ce(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const d=this.getNode(n);d.parent.insertBefore({data:e},d)}insertAfter(e,n){const d=this.getNode(n);d.parent.insertAfter({data:e},d)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const d=Ie(n)?this.root:this.getNode(n);d&&d.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(d=>{const o=n[d];o&&o.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(d=>{this.deregisterNode(d)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const d=[],o=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(i=>{(i.checked||n&&i.indeterminate)&&(!e||e&&i.isLeaf)&&d.push(i.data),o(i)})};return o(this),d}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),n(s)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const d in n)te(n,d)&&e.push(n[d]);return e}updateChildren(e,n){const d=this.nodesMap[e];if(!d)return;const o=d.childNodes;for(let s=o.length-1;s>=0;s--){const a=o[s];this.remove(a.data)}for(let s=0,a=n.length;s<a;s++){const i=n[s];this.append(i,d.data)}}_setCheckedKeys(e,n=!1,d){const o=this._getAllNodes().sort((f,g)=>f.level-g.level),s=Object.create(null),a=Object.keys(d);o.forEach(f=>f.setChecked(!1,!1));const i=f=>{f.childNodes.forEach(g=>{var l;s[g.data[e]]=!0,(l=g.childNodes)!=null&&l.length&&i(g)})};for(let f=0,g=o.length;f<g;f++){const l=o[f],c=l.data[e].toString();if(!a.includes(c)){l.checked&&!s[c]&&l.setChecked(!1,!1);continue}if(l.childNodes.length&&i(l),l.isLeaf||this.checkStrictly){l.setChecked(!0,!1);continue}if(l.setChecked(!0,!0),n){l.setChecked(!1,!1);const p=function(y){y.childNodes.forEach(v=>{v.isLeaf||v.setChecked(!1,!1),p(v)})};p(l)}}}setCheckedNodes(e,n=!1){const d=this.key,o={};e.forEach(s=>{o[(s||{})[d]]=!0}),this._setCheckedKeys(d,n,o)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const d=this.key,o={};e.forEach(s=>{o[s]=!0}),this._setCheckedKeys(d,n,o)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const d=this.getNode(n);d&&d.expand(null,this.autoExpandParent)})}setChecked(e,n,d){const o=this.getNode(e);o&&o.setChecked(!!n,d)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const d=e[this.key],o=this.nodesMap[d];this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(this.currentNodeKey=e,e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const d=this.getNode(e);d&&(this.setCurrentNode(d),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const Xe=le({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=Y("tree"),n=P("NodeInstance"),d=P("RootTree");return()=>{const o=t.node,{data:s,store:a}=o;return t.renderContent?t.renderContent(he,{_self:n,node:o,data:s,store:a}):ge(d.ctx.slots,"default",{node:o,data:s},()=>[he("span",{class:e.be("node","label")},[o.label])])}}});var Ve=ie(Xe,[["__file","tree-node-content.vue"]]);function ve(t){const e=P("TreeNodeMap",null),n={treeNodeExpand:d=>{t.node!==d&&t.node.collapse()},children:[]};return e&&e.children.push(n),W("TreeNodeMap",n),{broadcastExpanded:d=>{if(t.accordion)for(const o of n.children)o.treeNodeExpand(d)}}}const me=Symbol("dragEvents");function _e({props:t,ctx:e,el$:n,dropIndicator$:d,store:o}){const s=Y("tree"),a=D({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return W(me,{treeNodeDragStart:({event:l,treeNode:c})=>{if(X(t.allowDrag)&&!t.allowDrag(c.node))return l.preventDefault(),!1;l.dataTransfer.effectAllowed="move";try{l.dataTransfer.setData("text/plain","")}catch{}a.value.draggingNode=c,e.emit("node-drag-start",c.node,l)},treeNodeDragOver:({event:l,treeNode:c})=>{const h=c,p=a.value.dropNode;p&&p.node.id!==h.node.id&&V(p.$el,s.is("drop-inner"));const y=a.value.draggingNode;if(!y||!h)return;let C=!0,v=!0,K=!0,x=!0;X(t.allowDrop)&&(C=t.allowDrop(y.node,h.node,"prev"),x=v=t.allowDrop(y.node,h.node,"inner"),K=t.allowDrop(y.node,h.node,"next")),l.dataTransfer.dropEffect=v||C||K?"move":"none",(C||v||K)&&(p==null?void 0:p.node.id)!==h.node.id&&(p&&e.emit("node-drag-leave",y.node,p.node,l),e.emit("node-drag-enter",y.node,h.node,l)),C||v||K?a.value.dropNode=h:a.value.dropNode=null,h.node.nextSibling===y.node&&(K=!1),h.node.previousSibling===y.node&&(C=!1),h.node.contains(y.node,!1)&&(v=!1),(y.node===h.node||y.node.contains(h.node))&&(C=!1,v=!1,K=!1);const A=h.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),M=n.value.getBoundingClientRect();let b;const J=C?v?.25:K?.45:1:-1,Z=K?v?.75:C?.55:0:1;let $=-9999;const u=l.clientY-A.top;u<A.height*J?b="before":u>A.height*Z?b="after":v?b="inner":b="none";const k=h.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=d.value;b==="before"?$=k.top-M.top:b==="after"&&($=k.bottom-M.top),m.style.top=`${$}px`,m.style.left=`${k.right-M.left}px`,b==="inner"?Te(h.$el,s.is("drop-inner")):V(h.$el,s.is("drop-inner")),a.value.showDropIndicator=b==="before"||b==="after",a.value.allowDrop=a.value.showDropIndicator||x,a.value.dropType=b,e.emit("node-drag-over",y.node,h.node,l)},treeNodeDragEnd:l=>{const{draggingNode:c,dropType:h,dropNode:p}=a.value;if(l.preventDefault(),l.dataTransfer&&(l.dataTransfer.dropEffect="move"),c&&p){const y={data:c.node.data};h!=="none"&&c.node.remove(),h==="before"?p.node.parent.insertBefore(y,p.node):h==="after"?p.node.parent.insertAfter(y,p.node):h==="inner"&&p.node.insertChild(y),h!=="none"&&(o.value.registerNode(y),o.value.key&&c.node.eachNode(C=>{var v;(v=o.value.nodesMap[C.data[o.value.key]])==null||v.setChecked(C.checked,!o.value.checkStrictly)})),V(p.$el,s.is("drop-inner")),e.emit("node-drag-end",c.node,p.node,h,l),h!=="none"&&e.emit("node-drop",c.node,p.node,h,l)}c&&!p&&e.emit("node-drag-end",c.node,null,h,l),a.value.showDropIndicator=!1,a.value.draggingNode=null,a.value.dropNode=null,a.value.allowDrop=!0}}),{dragState:a}}const et=le({name:"ElTreeNode",components:{ElCollapseTransition:Be,ElCheckbox:Ze,NodeContent:Ve,ElIcon:Le,Loading:Oe},props:{node:{type:O,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=Y("tree"),{broadcastExpanded:d}=ve(t),o=P("RootTree"),s=D(!1),a=D(!1),i=D(null),f=D(null),g=D(null),l=P(me),c=Ce();W("NodeInstance",c),t.node.expanded&&(s.value=!0,a.value=!0);const h=o.props.props.children||"children";w(()=>{const u=t.node.data[h];return u&&[...u]},()=>{t.node.updateChildren()}),w(()=>t.node.indeterminate,u=>{C(t.node.checked,u)}),w(()=>t.node.checked,u=>{C(u,t.node.indeterminate)}),w(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),w(()=>t.node.expanded,u=>{ue(()=>s.value=u),u&&(a.value=!0)});const p=u=>ce(o.props.nodeKey,u.data),y=u=>{const k=t.props.class;if(!k)return{};let m;if(X(k)){const{data:j}=u;m=k(j,u)}else m=k;return Ne(m)?{[m]:!0}:m},C=(u,k)=>{(i.value!==u||f.value!==k)&&o.ctx.emit("check-change",t.node.data,u,k),i.value=u,f.value=k},v=u=>{ae(o.store,o.ctx.emit,()=>{var k;if((k=o==null?void 0:o.props)==null?void 0:k.nodeKey){const j=p(t.node);o.store.value.setCurrentNodeKey(j)}else o.store.value.setCurrentNode(t.node)}),o.currentNode.value=t.node,o.props.expandOnClickNode&&x(),o.props.checkOnClickNode&&!t.node.disabled&&A(null,{target:{checked:!t.node.checked}}),o.ctx.emit("node-click",t.node.data,t.node,c,u)},K=u=>{o.instance.vnode.props.onNodeContextmenu&&(u.stopPropagation(),u.preventDefault()),o.ctx.emit("node-contextmenu",u,t.node.data,t.node,c)},x=()=>{t.node.isLeaf||(s.value?(o.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):t.node.expand(()=>{e.emit("node-expand",t.node.data,t.node,c)}))},A=(u,k)=>{t.node.setChecked(k.target.checked,!o.props.checkStrictly),ue(()=>{const m=o.store.value;o.ctx.emit("check",t.node.data,{checkedNodes:m.getCheckedNodes(),checkedKeys:m.getCheckedKeys(),halfCheckedNodes:m.getHalfCheckedNodes(),halfCheckedKeys:m.getHalfCheckedKeys()})})};return{ns:n,node$:g,tree:o,expanded:s,childNodeRendered:a,oldChecked:i,oldIndeterminate:f,getNodeKey:p,getNodeClass:y,handleSelectChange:C,handleClick:v,handleContextMenu:K,handleExpandIconClick:x,handleCheckChange:A,handleChildNodeExpand:(u,k,m)=>{d(k),o.ctx.emit("node-expand",u,k,m)},handleDragStart:u=>{o.props.draggable&&l.treeNodeDragStart({event:u,treeNode:t})},handleDragOver:u=>{u.preventDefault(),o.props.draggable&&l.treeNodeDragOver({event:u,treeNode:{$el:g.value,node:t.node}})},handleDrop:u=>{u.preventDefault()},handleDragEnd:u=>{o.props.draggable&&l.treeNodeDragEnd(u)},CaretRight:Me}}});function tt(t,e,n,d,o,s){const a=L("el-icon"),i=L("el-checkbox"),f=L("loading"),g=L("node-content"),l=L("el-tree-node"),c=L("el-collapse-transition");return oe((E(),F("div",{ref:"node$",class:S([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:B(t.handleClick,["stop"]),onContextmenu:t.handleContextMenu,onDragstart:B(t.handleDragStart,["stop"]),onDragover:B(t.handleDragOver,["stop"]),onDragend:B(t.handleDragEnd,["stop"]),onDrop:B(t.handleDrop,["stop"])},[se("div",{class:S(t.ns.be("node","content")),style:ze({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(E(),z(a,{key:0,class:S([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:B(t.handleExpandIconClick,["stop"])},{default:_(()=>[(E(),z($e(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):H("v-if",!0),t.showCheckbox?(E(),z(i,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:B(()=>{},["stop"]),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onClick","onChange"])):H("v-if",!0),t.node.loading?(E(),z(a,{key:2,class:S([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:_(()=>[ee(f)]),_:1},8,["class"])):H("v-if",!0),ee(g,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),ee(c,null,{default:_(()=>[!t.renderAfterExpand||t.childNodeRendered?oe((E(),F("div",{key:0,class:S(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(E(!0),F(ye,null,ke(t.node.childNodes,h=>(E(),z(l,{key:t.getNodeKey(h),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:h,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,["aria-expanded"])),[[de,t.expanded]]):H("v-if",!0)]),_:1})],42,["aria-expanded","aria-disabled","aria-checked","draggable","data-key","onClick","onContextmenu","onDragstart","onDragover","onDragend","onDrop"])),[[de,t.node.visible]])}var nt=ie(et,[["render",tt],["__file","tree-node.vue"]]);function ot({el$:t},e){const n=Y("tree"),d=fe([]),o=fe([]);Fe(()=>{a()}),qe(()=>{d.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),w(o,i=>{i.forEach(f=>{f.setAttribute("tabindex","-1")})}),Pe(t,"keydown",i=>{const f=i.target;if(!f.className.includes(n.b("node")))return;const g=i.code;d.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const l=d.value.indexOf(f);let c;if([T.up,T.down].includes(g)){if(i.preventDefault(),g===T.up){c=l===-1?0:l!==0?l-1:d.value.length-1;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c--,c===p){c=-1;break}c<0&&(c=d.value.length-1)}}else{c=l===-1?0:l<d.value.length-1?l+1:0;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c++,c===p){c=-1;break}c>=d.value.length&&(c=0)}}c!==-1&&d.value[c].focus()}[T.left,T.right].includes(g)&&(i.preventDefault(),f.click());const h=f.querySelector('[type="checkbox"]');[T.enter,T.numpadEnter,T.space].includes(g)&&h&&(i.preventDefault(),h.click())});const a=()=>{var i;d.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),o.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const f=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(i=d.value[0])==null||i.setAttribute("tabindex","0")}}const dt=le({name:"ElTree",components:{ElTreeNode:nt},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:je}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=Re(),d=Y("tree"),o=P(He,null),s=D(new Qe({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));s.value.initialize();const a=D(s.value.root),i=D(null),f=D(null),g=D(null),{broadcastExpanded:l}=ve(t),{dragState:c}=_e({props:t,ctx:e,el$:f,dropIndicator$:g,store:s});ot({el$:f},s);const h=Ue(()=>{const{childNodes:r}=a.value,N=o?o.hasFilteredOptions!==0:!1;return(!r||r.length===0||r.every(({visible:I})=>!I))&&!N});w(()=>t.currentNodeKey,r=>{s.value.setCurrentNodeKey(r)}),w(()=>t.defaultCheckedKeys,r=>{s.value.setDefaultCheckedKey(r)}),w(()=>t.defaultExpandedKeys,r=>{s.value.setDefaultExpandedKeys(r)}),w(()=>t.data,r=>{s.value.setData(r)},{deep:!0}),w(()=>t.checkStrictly,r=>{s.value.checkStrictly=r});const p=r=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");s.value.filter(r)},y=r=>ce(t.nodeKey,r.data),C=r=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const N=s.value.getNode(r);if(!N)return[];const I=[N.data];let R=N.parent;for(;R&&R!==a.value;)I.push(R.data),R=R.parent;return I.reverse()},v=(r,N)=>s.value.getCheckedNodes(r,N),K=r=>s.value.getCheckedKeys(r),x=()=>{const r=s.value.getCurrentNode();return r?r.data:null},A=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const r=x();return r?r[t.nodeKey]:null},M=(r,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");s.value.setCheckedNodes(r,N)},b=(r,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");s.value.setCheckedKeys(r,N)},J=(r,N,I)=>{s.value.setChecked(r,N,I)},Z=()=>s.value.getHalfCheckedNodes(),$=()=>s.value.getHalfCheckedKeys(),u=(r,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ae(s,e.emit,()=>{l(r),s.value.setUserCurrentNode(r,N)})},k=(r,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ae(s,e.emit,()=>{l(),s.value.setCurrentNodeKey(r,N)})},m=r=>s.value.getNode(r),j=r=>{s.value.remove(r)},be=(r,N)=>{s.value.append(r,N)},Ke=(r,N)=>{s.value.insertBefore(r,N)},Ee=(r,N)=>{s.value.insertAfter(r,N)},De=(r,N,I)=>{l(N),e.emit("node-expand",r,N,I)},we=(r,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");s.value.updateChildren(r,N)};return W("RootTree",{ctx:e,props:t,store:s,root:a,currentNode:i,instance:Ce()}),W(We,void 0),{ns:d,store:s,root:a,currentNode:i,dragState:c,el$:f,dropIndicator$:g,isEmpty:h,filter:p,getNodeKey:y,getNodePath:C,getCheckedNodes:v,getCheckedKeys:K,getCurrentNode:x,getCurrentKey:A,setCheckedNodes:M,setCheckedKeys:b,setChecked:J,getHalfCheckedNodes:Z,getHalfCheckedKeys:$,setCurrentNode:u,setCurrentKey:k,t:n,getNode:m,remove:j,append:be,insertBefore:Ke,insertAfter:Ee,handleNodeExpand:De,updateKeyChildren:we}}});function st(t,e,n,d,o,s){const a=L("el-tree-node");return E(),F("div",{ref:"el$",class:S([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(E(!0),F(ye,null,ke(t.root.childNodes,i=>(E(),z(a,{key:t.getNodeKey(i),node:i,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(E(),F("div",{key:0,class:S(t.ns.e("empty-block"))},[ge(t.$slots,"empty",{},()=>{var i;return[se("span",{class:S(t.ns.e("empty-text"))},Ye((i=t.emptyText)!=null?i:t.t("el.tree.emptyText")),3)]})],2)):H("v-if",!0),oe(se("div",{ref:"dropIndicator$",class:S(t.ns.e("drop-indicator"))},null,2),[[de,t.dragState.showDropIndicator]])],2)}var at=ie(dt,[["render",st],["__file","tree.vue"]]);const lt=Je(at);export{lt as E};
