var ih=Object.defineProperty,sh=Object.defineProperties;var lh=Object.getOwnPropertyDescriptors;var Bi=Object.getOwnPropertySymbols;var fu=Object.prototype.hasOwnProperty,vu=Object.prototype.propertyIsEnumerable;var Lr=(t,n,o)=>n in t?ih(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,b=(t,n)=>{for(var o in n||(n={}))fu.call(n,o)&&Lr(t,o,n[o]);if(Bi)for(var o of Bi(n))vu.call(n,o)&&Lr(t,o,n[o]);return t},_=(t,n)=>sh(t,lh(n));var J=(t,n)=>{var o={};for(var i in t)fu.call(t,i)&&n.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&Bi)for(var i of Bi(t))n.indexOf(i)<0&&vu.call(t,i)&&(o[i]=t[i]);return o};var vt=(t,n,o)=>(Lr(t,typeof n!="symbol"?n+"":n,o),o);import{c as rh,a as yp,b as ch,w as uh,d as M,u as ue,e as p,o as s,f as A,g as y,h as C,i as a,j as L,k as S,l as d,r as f,F as G,m as oe,t as U,n as c,p as dh,q as Se,s as gt,v as Kt,x as ph,y as ji,z as ns,A as ic,B as k,C as Ge,D as Jt,E as me,G as $,H as ve,I as Ee,J as gp,K as Oe,L as Le,M as Fe,N as Ze,O as _t,P as be,Q as Ue,R as sc,S as xu,T as Et,U as os,V as ao,W as zi,X as mh,Y as yh,Z as hp,_ as Bo,$ as gh,a0 as hh,a1 as lc,a2 as No,a3 as ca,a4 as bh,a5 as fh,a6 as vh,a7 as xh,a8 as Wi,a9 as bp,aa as Th,ab as fp,ac as Sh,ad as Ch,ae as vp,af as Tu,ag as Ah,ah as kh,ai as Nh,aj as Hr,ak as Gi,al as Ur,am as Lh,an as wh,ao as Oo,ap as e,aq as ee,ar as te,as as P,at as V,au as H,av as se,aw as Xi,ax as jr,ay as Ph,az as Su,aA as xp,aB as zr,aC as Mh,aD as Cu,aE as _h,aF as Tp,aG as Sp,aH as Dh,aI as Cp,aJ as Ih,aK as Bh,aL as $h,aM as Fh,aN as Eh,aO as Oh,aP as qh,aQ as Rh,aR as Vh,aS as Au,aT as Hh,aU as Uh,aV as jh,aW as zh,aX as Wh,aY as Gh,aZ as Xh,a_ as Kh,a$ as Yh,b0 as Zh,b1 as Qh,b2 as Jh,b3 as eb,b4 as tb,b5 as ab,b6 as nb,b7 as ob}from"./vendor.3573b633.js";const ib=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=o(l);fetch(l.href,r)}};ib();const Ap=rh({page:"preview"});yp.setChannel(Ap);window.__STORYBOOK_ADDONS_CHANNEL__=Ap;const{SERVER_CHANNEL_URL:ku}=uh;if(ku){const t=ch({url:ku});yp.setServerChannel(t),window.__STORYBOOK_SERVER_CHANNEL__=t}function ye(t){if(!t)return!1;if(t&&t()[0].children){if(typeof t()[0].children=="string")return t()[0].children!=="v-if";if(Array.isArray(t()[0].children))return t()[0].children.length>0}return!0}const sb="Polaris-AccountConnection__TermsOfService",lb="Polaris-AccountConnection__Content";var Nu={TermsOfService:sb,Content:lb};const rb={key:0},cb={key:1},ub={key:2},is=M({props:{title:null,details:null,termsOfService:null,accountName:{default:""},avatarUrl:null,connected:{type:Boolean,default:!1},action:null},setup(t){const n=t,o=ue(),i=p(()=>n.accountName?n.accountName.split(/\s+/).map(l=>l[0]).join(""):void 0);return(l,r)=>(s(),A(a(Ye),{sectioned:""},{default:y(()=>[C(a(kc),null,{action:y(()=>[t.action?(s(),A(a(Xe),{key:0,action:t.action,overrides:{primary:!t.connected}},null,8,["action","overrides"])):L("",!0)]),setting:y(()=>[C(a(qe),null,{default:y(()=>[t.connected?(s(),A(a(oo),{key:0,accessibilityLabel:"",name:t.accountName,initials:a(i),source:t.avatarUrl},null,8,["name","initials","source"])):L("",!0),C(a(Ct),{fill:""},{default:y(()=>[S("div",{class:c(a(Nu).Content)},[t.title||a(ye)(a(o).title)?(s(),d("div",rb,[a(ye)(a(o).title)?f(l.$slots,"title",{key:0}):(s(),d(G,{key:1},[oe(U(t.title),1)],64))])):t.accountName?(s(),d("div",cb,U(t.accountName),1)):L("",!0),t.details||a(ye)(a(o).details)?(s(),d("div",ub,[C(a(ct),{variation:"subdued"},{default:y(()=>[a(ye)(a(o).details)?f(l.$slots,"details",{key:0}):(s(),d(G,{key:1},[oe(U(t.details),1)],64))]),_:3})])):L("",!0)],2)]),_:3})]),_:3})]),_:3}),t.termsOfService||a(ye)(a(o).termsOfService)?(s(),d("div",{key:0,class:c(a(Nu).TermsOfService)},[a(ye)(a(o).termsOfService)?f(l.$slots,"termsOfService",{key:0}):(s(),d(G,{key:1},[oe(U(t.termsOfService),1)],64))],2)):L("",!0)]),_:3}))}});is.__docgenInfo={exportName:"default",displayName:"AccountConnection",description:"",tags:{},props:[{name:"title",description:"Content to display as title",required:!1,type:{name:"string"}},{name:"details",description:"Content to display as additional details",required:!1,type:{name:"string"}},{name:"termsOfService",description:"Content to display as terms of service",required:!1,type:{name:"string"}},{name:"accountName",description:"The name of the service",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarUrl",description:"URL for the user\u2019s avatar image",required:!1,type:{name:"string"}},{name:"connected",description:"Set if the account is connected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"action",description:"Action for account connection",required:!1,type:{name:"Action"}}],slots:[{name:"title"},{name:"details"},{name:"termsOfService"}]};const Ki='a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]:not([tabindex="-1"])',Wr="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",db='a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';function ss(t,n){if(t.matches)return t.matches(n);const o=(t.ownerDocument||document).querySelectorAll(n);let i=o.length;for(;i>=0&&o.item(i)!==t;)return i-=1,i>-1}function wr(t){const n="a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";return ss(t,n)?t:t.querySelector(n)}function pb(t,n){const o=[...document.querySelectorAll(Wr)],i=o.indexOf(t)+1,l=o.slice(i);for(const r of l)if(dh(r)&&(!n||n&&n(r)))return r;return null}function mb(t,n){const o=pb(t,n);return o&&o instanceof HTMLElement?(o.focus(),!0):!1}function rc(t,n=!0){return!n&&ss(t,Wr)?t:t.querySelector(Wr)}function kp(t){return t.querySelectorAll(db)}function Np(t,n){let o=0;for(const i of t){if(i===n)break;o+=1}return o===t.length?-1:o}function yb(t,n){const o=kp(t),i=Np(o,n);i===-1?o[0].focus():o[(i-1+o.length)%o.length].focus()}function gb(t,n){const o=kp(t),i=Np(o,n);i===-1?o[0].focus():o[(i+1)%o.length].focus()}const kt=t=>{t.currentTarget.blur()};function qo(t,n=!0){var o;(o=rc(t,n))==null||o.focus()}function Lp(t,n=!0){return!n&&ss(t,Ki)?t:t.querySelector(Ki)}function wp(t,n=!0){if(!n&&ss(t,Ki))return t;const o=t.querySelectorAll(Ki);return o[o.length-1]}function hb(t,n=!0){const o=Lp(t,n);return o?(o.focus(),!0):!1}function bb(t,n=!0){const o=wp(t,n);return o?(o.focus(),!0):!1}const fb={inheritAttrs:!1,render(){return null}},St=M(_(b({},fb),{props:{keyCode:{type:String,required:!0},keyEvent:{type:String,default:"keyup"},handler:{type:Function,required:!0},useCapture:{type:Boolean},options:{type:Object}},setup(t){const n=t;function o(i){i.key===n.keyCode&&n.handler(i)}return Se(()=>document.addEventListener(n.keyEvent,o,n.useCapture||n.options)),gt(()=>document.removeEventListener(n.keyEvent,o,n.useCapture||n.options)),()=>{}}}));St.__docgenInfo={exportName:"default",displayName:"KeypressListener",description:"",tags:{},props:[{name:"keyCode",type:{name:"String as () => Key"},required:!0},{name:"keyEvent",type:{name:"String as () => KeyEvent"},defaultValue:{func:!1,value:"'keyup'"}},{name:"handler",type:{name:"func"},required:!0},{name:"useCapture",type:{name:"boolean"}},{name:"options",type:{name:"Object as () => AddEventListenerOptions"}}]};var We=(t=>(t.Backspace="Backspace",t.Tab="Tab",t.Enter="Enter",t.Shift="Shift",t.Ctrl="Ctrl",t.Alt="Alt",t.Pause="Pause",t.CapsLock="CapsLock",t.Escape="Escape",t.Space="Space",t.PageUp="PageUp",t.PageDown="PageDown",t.End="End",t.Home="Home",t.ArrowRight="ArrowRight",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowDown="ArrowDown",t.Insert="Insert",t.Delete="Delete",t.Key0="Key0",t.Key1="Key1",t.Key2="Key2",t.Key3="Key3",t.Key4="Key4",t.Key5="Key5",t.Key6="Key6",t.Key7="Key7",t.Key8="Key8",t.Key9="Key9",t.KeyA="KeyA",t.KeyB="KeyB",t.KeyC="KeyC",t.KeyD="KeyD",t.KeyE="KeyE",t.KeyF="KeyF",t.KeyG="KeyG",t.KeyH="KeyH",t.KeyI="KeyI",t.KeyJ="KeyJ",t.KeyK="KeyK",t.KeyL="KeyL",t.KeyM="KeyM",t.KeyN="KeyN",t.KeyO="KeyO",t.KeyP="KeyP",t.KeyQ="KeyQ",t.KeyR="KeyR",t.KeyS="KeyS",t.KeyT="KeyT",t.KeyU="KeyU",t.KeyV="KeyV",t.KeyW="KeyW",t.KeyX="KeyX",t.KeyY="KeyY",t.KeyZ="KeyZ",t.LeftMeta="LeftMeta",t.RightMeta="RightMeta",t.Select="Select",t.Numpad0="Numpad0",t.Numpad1="Numpad1",t.Numpad2="Numpad2",t.Numpad3="Numpad3",t.Numpad4="Numpad4",t.Numpad5="Numpad5",t.Numpad6="Numpad6",t.Numpad7="Numpad7",t.Numpad8="Numpad8",t.Numpad9="Numpad9",t.Multiply="Multiply",t.Add="Add",t.Subtract="Subtract",t.Decimal="Decimal",t.Divide="Divide",t.F1="F1",t.F2="F2",t.F3="F3",t.F4="F4",t.F5="F5",t.F6="F6",t.F7="F7",t.F8="F8",t.F9="F9",t.F10="F10",t.F11="F11",t.F12="F12",t.NumLock="NumLock",t.ScrollLock="ScrollLock",t.Semicolon="Semicolon",t.Equals="Equals",t.Comma="Comma",t.Dash="Dash",t.Period="Period",t.ForwardSlash="ForwardSlash",t.GraveAccent="GraveAccent",t.OpenBracket="OpenBracket",t.BackSlash="BackSlash",t.CloseBracket="CloseBracket",t.SingleQuote="SingleQuote",t))(We||{});const vb="Polaris-ActionList",xb="Polaris-ActionList__Actions",Tb="Polaris-ActionList__Section",Sb="Polaris-ActionList__Title",Cb="Polaris-ActionList__Item",Ab="Polaris-ActionList--active",kb="Polaris-ActionList--destructive",Nb="Polaris-ActionList--disabled",Lb="Polaris-ActionList__Prefix",wb="Polaris-ActionList__Suffix",Pb="Polaris-ActionList__Content",Mb="Polaris-ActionList__ContentBlock",_b="Polaris-ActionList__ContentBlockInner",Db="Polaris-ActionList__Text";var ot={ActionList:vb,"Section-withoutTitle":"Polaris-ActionList__Section--withoutTitle",Actions:xb,Section:Tb,Title:Sb,Item:Cb,active:Ab,destructive:kb,disabled:Nb,Prefix:Lb,Suffix:wb,Content:Pb,ContentBlock:Mb,ContentBlockInner:_b,Text:Db};class wa{constructor({top:n=0,left:o=0,width:i=0,height:l=0}={}){vt(this,"top");vt(this,"left");vt(this,"width");vt(this,"height");this.top=n,this.left=o,this.width=i,this.height=l}static get zero(){return new wa}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}}function Gt(t){if(!(t instanceof Element))return new wa({width:window.innerWidth,height:window.innerHeight});const n=t.getBoundingClientRect();return new wa({top:n.top,left:n.left,width:n.width,height:n.height})}const $i=1e3/60;function Pp(t){return t===document}function Ib(t){return Pp(t)?document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop}function Bb(t,n){const o=t.left,i=t.left+t.width,l=n.left;return n.left+n.width<o||i<l}class $b{constructor(n){vt(this,"stickyItems",[]);vt(this,"stuckItems",[]);vt(this,"container",null);vt(this,"topBarOffset",0);vt(this,"handleResize",Kt(()=>{this.manageStickyItems()},$i,{leading:!0,trailing:!0,maxWait:$i}));vt(this,"handleScroll",Kt(()=>{this.manageStickyItems()},$i,{leading:!0,trailing:!0,maxWait:$i}));n&&this.setContainer(n)}registerStickyItem(n){this.stickyItems.push(n)}unregisterStickyItem(n){const o=this.stickyItems.findIndex(({stickyNode:i})=>n===i);this.stickyItems.splice(o,1)}setContainer(n){this.container=n,Pp(n)&&this.setTopBarOffset(n),this.container.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.manageStickyItems()}removeScrollListener(){this.container&&(this.container.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize))}manageStickyItems(){if(this.stickyItems.length<=0)return;const n=this.container?Ib(this.container):0,o=Gt(this.container).top+this.topBarOffset;this.stickyItems.forEach(i=>{const{handlePositioning:l}=i,{sticky:r,top:u,left:m,width:x}=this.evaluateStickyItem(i,n,o);this.updateStuckItems(i,r),l(r,u,m,x)})}evaluateStickyItem(n,o,i){var B;const{stickyNode:l,placeHolderNode:r,boundingElement:u,offset:m,disableWhenStacked:x}=n;if(x&&ph().matches)return{sticky:!1,top:0,left:0,width:"auto"};const v=m?this.getOffset(l)+parseInt(ji.spacing["5"].value,10):this.getOffset(l),g=o+v,h=r.getBoundingClientRect().top-i+o,T=i+v,{width:N}=r.getBoundingClientRect(),{left:w}=r.getBoundingClientRect();let D;if(u==null)D=g>=h;else{const E=l.getBoundingClientRect().height||((B=l.firstElementChild)==null?void 0:B.getBoundingClientRect().height)||0,R=u.getBoundingClientRect().bottom-E+o-i;D=g>=h&&g<R}return{sticky:D,top:T,left:w,width:N}}updateStuckItems(n,o){const{stickyNode:i}=n;o&&!this.isNodeStuck(i)?this.addStuckItem(n):!o&&this.isNodeStuck(i)&&this.removeStuckItem(n)}addStuckItem(n){this.stuckItems.push(n)}removeStuckItem(n){const{stickyNode:o}=n,i=this.stuckItems.findIndex(({stickyNode:l})=>o===l);this.stuckItems.splice(i,1)}getOffset(n){if(this.stuckItems.length===0)return 0;let o=0,i=0;const l=this.stuckItems.length,r=Gt(n);for(;i<l;){const u=this.stuckItems[i].stickyNode;if(u!==n){const m=Gt(u);Bb(r,m)||(o+=Gt(u).height)}else break;i+=1}return o}isNodeStuck(n){return this.stuckItems.findIndex(({stickyNode:i})=>n===i)>=0}setTopBarOffset(n){const o=n.querySelector(`:not(${ns.selector}) ${ic.selector}`);this.topBarOffset=o?o.clientHeight:0}}const Fb="Polaris-Scrollable",Eb="Polaris-Scrollable--horizontal",Ob="Polaris-Scrollable--vertical",qb="Polaris-Scrollable--verticalHasScrolling",Rb="Polaris-Scrollable--hasTopShadow",Vb="Polaris-Scrollable--hasBottomShadow";var $a={Scrollable:Fb,horizontal:Eb,vertical:Ob,verticalHasScrolling:qb,hasTopShadow:Rb,hasBottomShadow:Vb};const Hb=["tabindex"],Ot=M({props:{vertical:{type:Boolean,default:!0},horizontal:{type:Boolean},shadow:{type:Boolean},hint:{type:Boolean},focusable:{type:Boolean}},emits:["scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=j=>{j.preventDefault()},l=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},r=100,u=.2,m=.2,x=["scroll","touchmove","wheel"],v=l(),g=2,h=k(null),T=k(!1),N=k(!1),w=k(0),D=k(!1),B=new $b,E=j=>{w.value=j};Ge("stickyManagerContext",B),Ge("scrollToPositionContext",E);const R=p(()=>$($a.Scrollable,o.vertical&&$a.vertical,o.horizontal&&$a.horizontal,T.value&&$a.hasTopShadow,N.value&&$a.hasBottomShadow,o.vertical&&D.value&&$a.verticalHasScrolling)),z=()=>{if(!h.value)return;const{scrollTop:j,scrollHeight:le,clientHeight:fe}=h.value,ae=Boolean(o.shadow&&!(j+fe>=le)),Me=Boolean(o.shadow&&j>0&&w.value>0),O=le>fe,X=le-j<=fe+g;O&&X&&n("scrolled-to-bottom"),T.value=Me,N.value=ae,w.value=j,D.value=O},Z=Kt(()=>{z()},50,{trailing:!0}),F=(j=!0)=>{var le,fe;if(!!h.value)for(const ae of x)j?(le=h.value)==null||le.addEventListener(ae,i):(fe=h.value)==null||fe.removeEventListener(ae,i)},W=()=>{const j=w.value*m;w.value=j<u?0:w.value-j,w.value>0?window.requestAnimationFrame(W):F(!1)},q=()=>{if(!h.value)return;const{clientHeight:j,scrollHeight:le}=h.value;if(v||w.value>0||le<=j)return;const fe=le-j;F(),w.value=fe>r?r:fe,window.requestAnimationFrame(W)};return Se(()=>{!h.value||(B.setContainer(h.value),h.value.scrollTop=w.value,h.value.addEventListener("scroll",()=>{window.requestAnimationFrame(z)}),window.addEventListener("resize",Z),window.requestAnimationFrame(()=>{z(),o.hint&&q()}))}),Jt(()=>{h.value&&w.value>0&&(h.value.scrollTop=w.value)}),gt(()=>{!h.value||(h.value.removeEventListener("scroll",z),window.removeEventListener("resize",Z),B.removeScrollListener())}),(j,le)=>(s(),d("div",me({ref_key:"scrollArea",ref:h},a(ns).props,{class:a(R),tabindex:t.focusable?0:void 0}),[f(j.$slots,"default")],16,Hb))}});Ot.__docgenInfo={exportName:"default",displayName:"Scrollable",description:"",tags:{},props:[{name:"vertical",description:"Scroll content vertically",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"horizontal",description:"Scroll content horizontally",required:!1,type:{name:"boolean"}},{name:"shadow",description:"Add a shadow when content is scrollable",required:!1,type:{name:"boolean"}},{name:"hint",description:"Slightly hints content upon mounting when scrollable",required:!1,type:{name:"boolean"}},{name:"focusable",description:"Adds a tabIndex to scrollable when children are not focusable",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};class cc extends Error{constructor(n=""){super(`${n&&`${n} `}Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-app-provider for implementation instructions.`);this.name="MissingAppProviderError"}}class Ub extends Error{constructor(n=""){super(`${n&&`${n} `}Your component must be wrapped in a <Frame> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-frame--page for implementation instructions.`);this.name="MissingFrameError"}}function Be(){const t=ve("uniqueIdFactory"),n=k("");function o(i="",l=""){if(!t)throw new cc("No UniqueIdFactory was provided.");return l||(n.value||(n.value=t.nextId(i)),n.value)}return{uniqueIdRef:n,useUniqueId:o}}function jb(t){const n=ve("focusManager"),{useUniqueId:o,uniqueIdRef:i}=Be();Ee([()=>t.trapping],()=>{t.trapping&&i&&n.add(i.value)});const l=p(()=>n.trapFocusList[0]===i.value);return gp(()=>{if(!n)throw new cc("No FocusManager was provided.")}),Se(()=>{const r=o();t.trapping&&n.add(r)}),gt(()=>{i.value&&n.remove(i.value)}),{canSafelyFocus:l}}const zb=["id"],ls=M({setup(t){const n=ve("scrollToPositionContext",()=>!1),o=k(null),{useUniqueId:i}=Be(),l=i("ScrollTo");return Se(()=>{!n||!o.value||n(o.value.offsetTop)}),(r,u)=>(s(),d("a",{id:a(l),ref_key:"anchorNode",ref:o},null,8,zb))}});ls.__docgenInfo={exportName:"default",displayName:"ScrollTo",description:"",tags:{}};const yt=M({props:{to:null,url:null,external:{type:Boolean}},setup(t){return(n,o)=>(s(),A(Oe(t.to?"router-link":"a"),{href:t.url,to:t.to,target:t.to?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["href","to","target","rel"]))}});yt.__docgenInfo={exportName:"default",displayName:"UnstyledLink",description:"",tags:{},props:[{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Wb="Polaris-TextStyle--variationPositive",Gb="Polaris-TextStyle--variationNegative",Xb="Polaris-TextStyle--variationWarning",Kb="Polaris-TextStyle--variationCode",Yb="Polaris-TextStyle--variationStrong",Zb="Polaris-TextStyle--variationSubdued";var Qb={variationPositive:Wb,variationNegative:Gb,variationWarning:Xb,variationCode:Kb,variationStrong:Yb,variationSubdued:Zb};const ct=M({props:{variation:{type:String,default:null}},setup(t){const n=t,o={positive:"positive",negative:"negative",warning:"warning",strong:"strong",subdued:"subdued",code:"code"};function i(u){return u===o.code?"code":"span"}const l=k(i(n.variation)),r=p(()=>{const u=n.variation&&Le("variation",n.variation);return $(u&&Qb[u])});return(u,m)=>(s(),A(Oe(l.value),{class:c(a(r))},{default:y(()=>[f(u.$slots,"default")]),_:3},8,["class"]))}});ct.__docgenInfo={exportName:"default",displayName:"TextStyle",description:"",tags:{},props:[{name:"variation",description:"Give text additional visual meaning",tags:{},values:["positive | negative | strong | subdued | code"],type:{name:"String as () => Variation"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]};const Jb="Polaris-Icon",ef="Polaris-Icon--applyColor",tf="Polaris-Icon--hasBackdrop",af="Polaris-Icon--colorBase",nf="Polaris-Icon--colorSubdued",of="Polaris-Icon--colorCritical",sf="Polaris-Icon--colorInteractive",lf="Polaris-Icon--colorWarning",rf="Polaris-Icon--colorHighlight",cf="Polaris-Icon--colorSuccess",uf="Polaris-Icon--colorPrimary",df="Polaris-Icon__Svg",pf="Polaris-Icon__Img",mf="Polaris-Icon__Placeholder";var ha={Icon:Jb,applyColor:ef,hasBackdrop:tf,colorBase:af,colorSubdued:nf,colorCritical:of,colorInteractive:sf,colorWarning:lf,colorHighlight:rf,colorSuccess:cf,colorPrimary:uf,Svg:df,Img:pf,Placeholder:mf},Lu={env:"production"};const yf="Polaris-VisuallyHidden";var gf={VisuallyHidden:yf};const lt=M({setup(t){return(n,o)=>(s(),d("span",{class:c(a(gf).VisuallyHidden)},[f(n.$slots,"default")],2))}});lt.__docgenInfo={exportName:"default",displayName:"VisuallyHidden",description:"",tags:{},slots:[{name:"default"}]};const hf=["src"],re=M({props:{source:null,color:null,backdrop:{type:Boolean},accessibilityLabel:null},setup(t){const n=t,o=["base","critical","highlight","success","warning"],i=p(()=>n.color&&ha[Le("color",n.color)]),l=p(()=>$(ha.Icon,i.value,n.color&&ha.applyColor,n.backdrop&&ha.hasBackdrop)),r=p(()=>typeof n.source=="object"?"icon":n.source==="placeholder"?"placeholder":"external"),u=p(()=>r.value==="external"?encodeURIComponent(String(n.source)):""),m=()=>{n.color&&r.value==="external"&&Lu.env==="development"&&console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.")},x=()=>{n.backdrop&&n.color&&!o.includes(n.color)&&Lu.env==="development"&&console.warn(`The ${n.color} variant does not have a supported backdrop color`)};return Se(()=>{m(),x()}),(v,g)=>(s(),d("span",{class:c(a(l))},[C(a(lt),null,{default:y(()=>[S("span",null,U(t.accessibilityLabel),1)]),_:1}),a(r)==="icon"?(s(),A(Oe(t.source),{key:0,class:c(a(ha).Svg)},null,8,["class"])):a(r)==="placeholder"?(s(),d("div",{key:1,class:c(a(ha).Placeholder)},null,2)):(s(),d("img",{key:2,class:c(a(ha).Img),src:`data:image/svg+xml;utf8,${a(u)}`,alt:"","aria-hidden":"true"},null,10,hf))],2))}});re.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"source",description:"The contents to display in the icon",required:!0,type:{name:"IconSource"}},{name:"color",description:"Set the color for the icon",required:!1,type:{name:"Color"}},{name:"backdrop",description:"Show a backdrop behind the icon",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}]};const bf="Polaris-Badge",ff="Polaris-Badge--sizeSmall",vf="Polaris-Badge--statusSuccess",xf="Polaris-Badge--statusInfo",Tf="Polaris-Badge--statusAttention",Sf="Polaris-Badge--statusWarning",Cf="Polaris-Badge--statusCritical",Af="Polaris-Badge--statusNew",kf="Polaris-Badge--withinFilter",Nf="Polaris-Badge__Icon",Lf="Polaris-Badge__PipContainer";var Fa={Badge:bf,sizeSmall:ff,statusSuccess:vf,statusInfo:xf,statusAttention:Tf,statusWarning:Sf,statusCritical:Cf,statusNew:Af,withinFilter:kf,Icon:Nf,PipContainer:Lf};function Mp(t,n){let o="",i="";if(!t&&!n)return"";switch(t){case"incomplete":o="Incomplete";break;case"partiallyComplete":o="Partially complete";break;case"complete":o="Complete";break}switch(n){case"info":i="Info";break;case"success":i="Success";break;case"warning":i="Warning";break;case"critical":i="Critical";break;case"attention":i="Attention";break;case"new":i="New";break}return`${i} ${o}`}const wf="Polaris-Badge-Pip",Pf="Polaris-Badge-Pip--statusInfo",Mf="Polaris-Badge-Pip--statusSuccess",_f="Polaris-Badge-Pip--statusNew",Df="Polaris-Badge-Pip--statusAttention",If="Polaris-Badge-Pip--statusWarning",Bf="Polaris-Badge-Pip--statusCritical",$f="Polaris-Badge-Pip--progressIncomplete",Ff="Polaris-Badge-Pip--progressPartiallyComplete",Ef="Polaris-Badge-Pip--progressComplete";var Pr={Pip:wf,statusInfo:Pf,statusSuccess:Mf,statusNew:_f,statusAttention:Df,statusWarning:If,statusCritical:Bf,progressIncomplete:$f,progressPartiallyComplete:Ff,progressComplete:Ef};const _p=M({props:{status:null,progress:null,accessibilityLabelOverride:null},setup(t){const n=t,o=p(()=>$(Pr.Pip,n.status&&Pr[Le("status",n.status)],n.progress&&Pr[Le("progress",n.progress)]));return(i,l)=>(s(),d("span",{class:c(a(o))},[C(a(lt),null,{default:y(()=>[t.accessibilityLabelOverride?(s(),d(G,{key:0},[oe(U(t.accessibilityLabelOverride),1)],64)):(s(),d(G,{key:1},[oe(U(a(Mp)(t.progress,t.status)),1)],64))]),_:1})],2))}});_p.__docgenInfo={exportName:"default",displayName:"Pip",description:"",tags:{},props:[{name:"status",required:!1,type:{name:"Status"}},{name:"progress",required:!1,type:{name:"Progress"}},{name:"accessibilityLabelOverride",required:!1,type:{name:"string"}}]};const Of={key:3},st=M({props:{status:null,progress:null,size:{default:"medium"},statusAndProgressLabelOverride:null,icon:null},setup(t){const n=t,o=ve("withinFilterContext",!1),i="medium",l=k(""),r=k(""),u=p(()=>$(Fa.Badge,n.status&&Fa[Le("status",n.status)],n.size&&n.size!==i&&Fa[Le("size",n.size)],o&&Fa.withinFilter)),m=p(()=>n.statusAndProgressLabelOverride||r.value||l.value),x=p(()=>n.statusAndProgressLabelOverride?n.statusAndProgressLabelOverride:Mp(n.progress,n.status));return(v,g)=>(s(),d("span",{class:c(a(u))},[t.progress&&!t.icon?(s(),d("span",{key:0,class:c(a(Fa).PipContainer)},[C(a(_p),{progress:t.progress,status:t.status,accessibilityLabelOverride:a(x)},null,8,["progress","status","accessibilityLabelOverride"])],2)):L("",!0),a(m)?(s(),A(a(lt),{key:1},{default:y(()=>[oe(U(a(x)),1)]),_:1})):L("",!0),t.icon?(s(),d("span",{key:2,class:c(a(Fa).Icon)},[C(a(re),{source:t.icon},null,8,["source"])],2)):L("",!0),v.$slots.default?(s(),d("span",Of,[f(v.$slots,"default")])):L("",!0)],2))}});st.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"status",description:"Colors and labels the badge with the given status.",required:!1,type:{name:"Status"}},{name:"progress",description:"Render a pip showing the progress of a given task.",required:!1,type:{name:"Progress"}},{name:"size",description:"Medium or small size.",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"statusAndProgressLabelOverride",description:"Pass a custom accessibilityLabel",required:!1,type:{name:"string"}},{name:"icon",description:"Icon to display to the left of the badge\u2019s content.",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const qf={inheritAttrs:!1},Gr=M(_(b({},qf),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},setup(t){const n=t,o=p(()=>n.ellipsis&&n.content?`${n.content}\u2026`:n.content);return(i,l)=>(s(),d("span",{class:c(a(ot).Content)},[t.prefixId?(s(),d("span",{key:0,class:c(a(ot).Prefix)},[f(i.$slots,"prefix")],2)):t.icon?(s(),d("span",{key:1,class:c(a(ot).Prefix)},[C(a(re),{source:t.icon},null,8,["source"])],2)):t.image?(s(),d("span",{key:2,class:c(a(ot).Prefix),role:"presentation",style:Fe({backgroundImage:`url(${t.image}`})},null,6)):L("",!0),S("span",{class:c(a(ot).Text)},[t.helpText?(s(),d("span",{key:0,class:c(a(ot).ContentBlock)},[S("span",{class:c(a(ot).ContentBlockInner)},U(a(o)),3),C(a(ct),{variation:"subdued"},{default:y(()=>[oe(U(t.helpText),1)]),_:1})],2)):(s(),d(G,{key:1},[oe(U(a(o)),1)],64))],2),t.badge?(s(),d("span",{key:3,class:c(a(ot).Suffix)},[C(a(st),{status:t.badge.status},{default:y(()=>[oe(U(t.badge.content),1)]),_:1},8,["status"])],2)):L("",!0),t.suffixId?(s(),d("span",{key:4,class:c(a(ot).Suffix)},[f(i.$slots,"suffix")],2)):L("",!0)],2))}}));Gr.__docgenInfo={exportName:"default",displayName:"ContentElement",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],slots:[{name:"prefix"},{name:"suffix"}]};const Rf=["role"],Vf=["id","disabled","aria-label","role"],Hf={inheritAttrs:!1},Dp=M(_(b({},Hf),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},emits:["action"],setup(t,{emit:n}){const o=t,i=p(()=>$(ot.Item,o.disabled&&ot.disabled,o.destructive&&ot.destructive,o.active&&ot.active)),l=p(()=>({badge:o.badge,content:o.content,helpText:o.helpText,icon:o.icon,prefixId:o.prefixId,suffixId:o.suffixId,image:o.image,disabled:o.disabled,ellipsis:o.ellipsis,role:o.role})),r=p(()=>o.role==="menuitem"?"presentation":void 0),u=()=>{o.disabled||n("action")};return(m,x)=>(s(),d("li",{role:a(r)},[t.active?(s(),A(a(ls),{key:0})):L("",!0),t.url?(s(),A(a(yt),{key:1,id:t.id,url:t.disabled?void 0:t.url,class:c(a(i)),external:t.external,"aria-label":t.accessibilityLabel,role:t.role,onClick:u},{default:y(()=>[C(Gr,Ze(_t(a(l))),{suffix:y(()=>[f(m.$slots,"suffix")]),prefix:y(()=>[f(m.$slots,"prefix")]),_:3},16)]),_:3},8,["id","url","class","external","aria-label","role"])):(s(),d("button",{key:2,id:t.id,type:"button",class:c(a(i)),disabled:t.disabled,"aria-label":t.accessibilityLabel,role:t.role,onClick:u,onMouseup:x[0]||(x[0]=(...v)=>a(kt)&&a(kt)(...v))},[C(Gr,Ze(_t(a(l))),{suffix:y(()=>[f(m.$slots,"suffix")]),prefix:y(()=>[f(m.$slots,"prefix")]),_:3},16)],42,Vf))],8,Rf))}}));Dp.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"action"}],slots:[{name:"suffix"},{name:"prefix"}]};const Uf=["role","tabIndex"],jf={inheritAttrs:!1},Xr=M(_(b({},jf),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(t,{emit:n}){const o=t,i=p(()=>o.section.title?void 0:ot["Section-withoutTitle"]),l=p(()=>$(ot.Title)),r=p(()=>{let m;switch(o.actionRole){case"option":m="presentation";break;case"menuitem":m=o.hasMultipleSections?"presentation":"menu";break;default:m=void 0;break}return m}),u=m=>{m&&m(),n("action-any-item")};return(m,x)=>(s(),d("div",{class:c(a(i))},[t.section.title?(s(),d("p",{key:0,class:c(a(l))},U(t.section.title),3)):L("",!0),S("ul",{class:c(a(ot).Actions),role:a(r),tabIndex:t.hasMultipleSections?void 0:-1},[(s(!0),d(G,null,be(t.section.items,(w,N)=>{var D=w,{content:v,helpText:g,onAction:h}=D,T=J(D,["content","helpText","onAction"]);return s(),A(a(Dp),me({key:`${v}-${N}`,content:v,helpText:g,role:t.actionRole},b({},T),{onAction:B=>u(h)}),Ue({_:2},[T.prefixId?{name:"prefix",fn:y(()=>[f(m.$slots,`prefix-${T.prefixId}`)])}:void 0,T.suffixId?{name:"suffix",fn:y(()=>[f(m.$slots,`suffix-${T.suffixId}`)])}:void 0]),1040,["content","helpText","role","onAction"])}),128))],10,Uf)],2))}}));Xr.__docgenInfo={exportName:"default",displayName:"SectionMarkup",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const zf={inheritAttrs:!1},Ip=M(_(b({},zf),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(t,{emit:n}){const o=t,i=p(()=>{const{section:l,hasMultipleSections:r,actionRole:u,firstSection:m}=o;return{section:l,hasMultipleSections:r,actionRole:u,firstSection:m}});return(l,r)=>t.hasMultipleSections?(s(),d("li",{key:0,class:c(a(ot).Section),role:"presentation"},[C(Xr,me(a(i),{onActionAnyItem:r[0]||(r[0]=u=>n("action-any-item"))}),Ue({_:2},[be(t.section.items,({prefixId:u})=>({name:`prefix-${u}`,fn:y(()=>[f(l.$slots,`prefix-${u}`)])})),be(t.section.items,({suffixId:u})=>({name:`suffix-${u}`,fn:y(()=>[f(l.$slots,`suffix-${u}`)])}))]),1040)],2)):(s(),A(Xr,me({key:1},a(i),{onActionAnyItem:r[1]||(r[1]=u=>n("action-any-item"))}),Ue({_:2},[be(t.section.items,({prefixId:u})=>({name:`prefix-${u}`,fn:y(()=>[f(l.$slots,`prefix-${u}`)])})),be(t.section.items,({suffixId:u})=>({name:`suffix-${u}`,fn:y(()=>[f(l.$slots,`suffix-${u}`)])}))]),1040))}}));Ip.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Wf={inheritAttrs:!1},Je=M(_(b({},Wf),{props:{items:{default:void 0},sections:{default:()=>[]},actionRole:{default:void 0}},emits:["action-any-item"],setup(t,{emit:n}){const o=t,i=k(null),l=p(()=>o.items?[{items:o.items},...o.sections]:o.sections?o.sections:[]),r=p(()=>l.value.length>1),u=p(()=>r.value?"ul":"div"),m=p(()=>r.value&&o.actionRole==="menuitem"?"menu":void 0),x=p(()=>r.value&&o.actionRole==="menuitem"?-1:void 0),v=h=>{h.preventDefault();const T=h.target;i.value&&T&&i.value.contains(T)&&yb(i.value,T)},g=h=>{h.preventDefault();const T=h.target;i.value&&T&&i.value.contains(T)&&gb(i.value,T)};return(h,T)=>(s(),A(Oe(a(u)),{ref_key:"actionListRef",ref:i,role:a(m),class:c(a($)(a(ot).ActionList)),tabIndex:a(x)},{default:y(()=>[(s(!0),d(G,null,be(a(l),(N,w)=>(s(),d(G,null,[N.items&&N.items.length>0?(s(),A(a(Ip),{key:N.title||w,firstSection:w===0,section:N,hasMultipleSections:a(r),actionRole:t.actionRole,onActionAnyItem:T[0]||(T[0]=D=>n("action-any-item"))},Ue({_:2},[be(N.items,({prefixId:D})=>({name:`prefix-${D}`,fn:y(()=>[f(h.$slots,`prefix-${D}`)])})),be(N.items,({suffixId:D})=>({name:`suffix-${D}`,fn:y(()=>[f(h.$slots,`suffix-${D}`)])}))]),1032,["firstSection","section","hasMultipleSections","actionRole"])):L("",!0)],64))),256)),t.actionRole==="menuitem"?(s(),d(G,{key:0},[C(a(St),{keyEvent:"keydown",keyCode:a(We).ArrowDown,handler:g},null,8,["keyCode"]),C(a(St),{keyEvent:"keydown",keyCode:a(We).ArrowUp,handler:v},null,8,["keyCode"])],64)):L("",!0)]),_:3},8,["role","class","tabIndex"]))}}));Je.__docgenInfo={exportName:"default",displayName:"ActionList",description:"",tags:{},props:[{name:"items",description:"Collection of actions for list",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"undefined"}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"menuitem"'}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Gf="Polaris-ActionMenu";var Xf={ActionMenu:Gf};const Kf="Polaris-ActionMenu-Actions__ActionsLayout";var Yf={ActionsLayout:Kf};const Zf="Polaris-ActionMenu-MenuGroup__Details";var Qf={Details:Zf};const Jf="Polaris-ActionMenu-SecondaryAction",ev="Polaris-ActionMenu-SecondaryAction--destructive";var wu={SecondaryAction:Jf,destructive:ev};const Yi=M({props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:null,textAlign:null,outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean]},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},emits:["click","get-offset-width"],setup(t,{emit:n}){const o=t,i=k(null),l=p(()=>$(wu.SecondaryAction,o.destructive&&wu.destructive));Se(()=>{var u;r(((u=i.value)==null?void 0:u.offsetWidth)||0)});const r=u=>{i.value&&n("get-offset-width",u)};return(u,m)=>(s(),d("span",{class:c(a(l)),ref_key:"secondaryActionsRef",ref:i},[C(a(ge),me({onClick:m[0]||(m[0]=x=>u.$emit("click"))},o),{default:y(()=>[f(u.$slots,"default")]),_:3},16)],2))}});Yi.__docgenInfo={exportName:"default",displayName:"SecondaryAction",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"primary",required:!1,type:{name:"boolean"}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]}},{name:"textAlign",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]}},{name:"plain",required:!1,type:{name:"boolean"}},{name:"monochrome",required:!1,type:{name:"boolean"}},{name:"removeUnderline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",required:!1,type:{name:"ConnectedDisclosure"}}],events:[{name:"click"},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const tv={inheritAttrs:!1},Bp=M(_(b({},tv),{props:{badge:null,title:null,actions:null,icon:null,index:null,accessibilityLabel:null,active:{type:Boolean}},emits:["click","open","close","get-offset-width"],setup(t,{emit:n}){const o=t,i=ue(),l=()=>{n("close",o.title)},r=()=>{n("click"),n("open",o.title)},u=m=>{n("get-offset-width",m)};return(m,x)=>t.actions.length?(s(),A(a(et),{key:0,active:Boolean(t.active),"preferred-alignment":"left",hideOnPrint:"",onClose:l},{activator:y(()=>[C(a(Yi),{disclosure:!0,icon:t.icon,accessibilityLabel:t.accessibilityLabel,onClick:r,onGetOffsetWidth:u},{default:y(()=>[oe(U(t.title),1)]),_:1},8,["icon","accessibilityLabel"])]),content:y(()=>[C(a(Je),{items:t.actions,onActionAnyItem:l},null,8,["items"]),a(i).default?(s(),d("div",{key:0,class:c(a(Qf).Details)},[f(m.$slots,"default")],2)):L("",!0)]),_:3},8,["active"])):L("",!0)}}));Bp.__docgenInfo={exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"title",description:"Menu group title",required:!0,type:{name:"string"}},{name:"actions",description:"List of actions",required:!0,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"icon",description:"Icon to display",required:!1,type:{name:"TSIndexedAccessType"}},{name:"index",description:"Zero-indexed numerical position. Overrides the group's order in the menu.",required:!1,type:{name:"number"}},{name:"accessibilityLabel",description:"Visually hidden menu description for screen readers",required:!1,type:{name:"string"}},{name:"active",description:"Whether or not the menu is open",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"open",type:{names:["string"]}},{name:"close",type:{names:["string"]}},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const $p=M({props:{actions:null,groups:null},setup(t){const n=t,o=8,i=ve("lang"),l=k(null),r=k(0),u=k(0),m=k(0),x=k(0),v=k([]),g=k(null),h=k({showable:[],rolledUp:[]}),T=k({title:i.Polaris.ActionMenu.Actions.moreActions,actions:[]}),N=p(()=>n.groups&&n.groups.length?[...n.groups].pop():[]),w=p(()=>[...v.value].pop()||0),D=O=>{v.value=[...v.value,O]},B=O=>{g.value?g.value=null:g.value=O},E=()=>{g.value=null},R=p(()=>n.groups?[...n.groups,T.value]:[T.value]),z=p(()=>R.value.filter(O=>n.groups&&n.groups.length===0?O:O===N.value||!h.value.rolledUp.some(X=>Me(X)&&X.title===O.title))),Z=O=>O===T.value,F=O=>O===N.value,W=p(()=>h.value.rolledUp.reduce((O,X)=>(O.push(...Me(X)?X.actions:[X]),O),[])),q=O=>{const ce=O,{actions:X}=ce,Y=J(ce,["actions"]);return _(b({},Y),{active:g.value===O.title})},j=O=>!Z(O)&&!F(O)?O.actions:!Z(O)&&F(O)?[...W.value,...O.actions]:Z(O)&&(!n.groups||n.groups.length===0)&&W.value.length?W.value:[],le=()=>{let O=[...n.actions||[],...n.groups||[]];n.groups&&n.groups.length>0&&(O=[...O].slice(0,O.length-1));const X=O.slice(0,h.value.showable.length),Y=O.slice(h.value.showable.length,O.length);h.value={showable:X,rolledUp:Y}};Jt(()=>{if(le(),!!l.value){if(u.value=l.value.offsetWidth,x.value>=2&&[...n.actions||[],...n.groups||[]].length===m.value){le();return}fe()}});const fe=()=>{if(v.value.length===0||u.value===0)return;const O=[...n.actions||[],...n.groups||[]];if(O.length===1){h.value={showable:O,rolledUp:[]};return}let X=u.value,Y=[],ce=[];O.forEach((de,$e)=>{if(v.value[$e]+r.value+o+w.value<=X)X-=v.value[$e]+o*2,Y=[...Y,de];else{if(X=0,de===N.value)return;ce=[...ce,de]}}),h.value={showable:Y,rolledUp:ce},x.value+=1,m.value=O.length},ae=()=>{Kt(()=>{!l.value||(u.value=l.value.offsetWidth,x.value=0,fe())},50,{leading:!1,trailing:!0})};function Me(O){return"title"in O}return(O,X)=>(s(),d("div",{ref_key:"actionsLayoutRef",ref:l,class:c(a(Yf).ActionsLayout)},[C(a(tt),{spacing:"extraTight"},{default:y(()=>[h.value.showable.length>0?(s(!0),d(G,{key:0},be(h.value.showable,Y=>(s(),d(G,{key:Y.content},[Y.content?(s(),A(a(Yi),me({key:0},Y,{onGetOffsetWidth:D}),{default:y(()=>[oe(U(Y.content),1)]),_:2},1040)):L("",!0)],64))),128)):L("",!0),(s(!0),d(G,null,be(t.actions,Y=>(s(),d(G,{key:Y.content},[!h.value.showable.length&&!h.value.rolledUp.includes(Y)?(s(),A(a(Yi),me({key:0},Y,{onClick:ce=>Y.onAction?Y.onAction():void 0,onGetOffsetWidth:D}),{default:y(()=>[oe(U(Y.content),1)]),_:2},1040,["onClick"])):L("",!0)],64))),128)),(s(!0),d(G,null,be(a(z),Y=>(s(),A(a(Bp),me({key:Y.title},q(Y),{actions:j(Y),onOpen:B,onClose:E,onGetOffsetWidth:D}),null,16,["actions"]))),128))]),_:1}),C(a(it),{event:"resize",handler:ae})],2))}});$p.__docgenInfo={exportName:"default",displayName:"Actions",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}]};const av={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},nv=S("path",{d:"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z"},null,-1),ov=[nv];function iv(t,n){return s(),d("svg",av,ov)}var Ca={render:iv};const sv="Polaris-ActionMenu-RollupActions__RollupActivator";var lv={RollupActivator:sv};const Fp=M({props:{accessibilityLabel:null,items:null,sections:null},setup(t){const n=ve("lang"),o=k(!1),i=()=>{o.value=!o.value};return(l,r)=>{var u,m;return((u=t.items)==null?void 0:u.length)||((m=t.sections)==null?void 0:m.length)?(s(),A(a(et),{key:0,active:o.value,preferredAlignment:"right",onClose:i,hideOnPrint:""},{activator:y(()=>[S("div",{class:c(a(lv).RollupActivator)},[C(a(ge),{outline:"",icon:a(Ca),accessibilityLabel:t.accessibilityLabel||a(n).Polaris.ActionMenu.RollupActions.rollupButton,onClick:i},null,8,["icon","accessibilityLabel"])],2)]),content:y(()=>[C(a(Je),{items:t.items,sections:t.sections,onActionAnyItem:i},null,8,["items","sections"])]),_:1},8,["active"])):L("",!0)}}});Fp.__docgenInfo={exportName:"default",displayName:"RollupActions",description:"",tags:{},props:[{name:"accessibilityLabel",description:"Accessibilty label",required:!1,type:{name:"string"}},{name:"items",description:"Collection of actions for the list",required:!1,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"Array",elements:[{name:"ActionListSection"}]}}]};const rv={inheritAttrs:!1},Ep=M(_(b({},rv),{props:{actions:null,groups:null,rollup:{type:Boolean},rollupActionsLabel:null},setup(t){const n=t,o=p(()=>$(Xf.ActionMenu)),i=p(()=>(n.groups||[]).map(r=>l(r)));function l({title:r,actions:u,disabled:m}){return{title:r,items:m?[]:u}}return(r,u)=>t.actions&&t.actions.length||t.groups&&t.groups.length?(s(),d("div",{key:0,class:c(a(o))},[t.rollup?(s(),A(a(Fp),{key:0,accessibilityLabel:t.rollupActionsLabel,items:t.actions,sections:a(i)},null,8,["accessibilityLabel","items","sections"])):(s(),A(a($p),{key:1,actions:t.actions,groups:t.groups},null,8,["actions","groups"]))],2)):L("",!0)}}));Ep.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"rollup",description:"Roll up all actions into a Popover > ActionList",required:!1,type:{name:"boolean"}},{name:"rollupActionsLabel",description:"Label for rolled up actions activator",required:!1,type:{name:"string"}}]};const Pu="data-lock-scrolling",Mu="data-lock-scrolling-wrapper";let Fi=0;class cv{constructor(){this.scrollLocks=0,this.locked=!1}registerScrollLock(){this.scrollLocks+=1,this.handleScrollLocking()}unregisterScrollLock(){this.scrollLocks-=1,this.handleScrollLocking()}handleScrollLocking(){if(sc)return;const{scrollLocks:n}=this,{body:o}=document,i=o.firstElementChild;n===0?(o.removeAttribute(Pu),i&&i.removeAttribute(Mu),window.scroll(0,Fi),this.locked=!1):n>0&&!this.locked&&(Fi=window.pageYOffset,o.setAttribute(Pu,""),i&&(i.setAttribute(Mu,""),i.scrollTop=Fi),this.locked=!0)}resetScrollPosition(){Fi=0}}class uv{constructor(n){this.idGenerators={},this.idGeneratorFactory=n}nextId(n){return this.idGenerators[n]||(this.idGenerators[n]=this.idGeneratorFactory(n)),this.idGenerators[n]()}}function Op(t=""){let n=1;return()=>`Polaris${t}${n++}`}const dv={ActionMenu:{Actions:{moreActions:"More actions"},RollupActions:{rollupButton:"View actions"}},Avatar:{label:"Avatar",labelWithInitials:"Avatar with initials {initials}"},Autocomplete:{spinnerAccessibilityLabel:"Loading",ellipsis:"{content}\u2026"},Badge:{PROGRESS_LABELS:{incomplete:"Incomplete",partiallyComplete:"Partially complete",complete:"Complete"},STATUS_LABELS:{info:"Info",success:"Success",warning:"Warning",critical:"Critical",attention:"Attention",new:"New"},progressAndStatus:"{statusLabel} {progressLabel}"},Button:{spinnerAccessibilityLabel:"Loading",connectedDisclosureAccessibilityLabel:"Related actions"},Common:{checkbox:"checkbox",undo:"Undo",cancel:"Cancel",newWindowAccessibilityHint:"(opens a new window)",clear:"Clear",close:"Close",submit:"Submit",more:"More"},ContextualSaveBar:{save:"Save",discard:"Discard"},DataTable:{sortAccessibilityLabel:"sort {direction} by",navAccessibilityLabel:"Scroll table {direction} one column",totalsRowHeading:"Totals",totalRowHeading:"Total"},DatePicker:{previousMonth:"Show previous month, {previousMonthName} {showPreviousYear}",nextMonth:"Show next month, {nextMonth} {nextYear}",today:"Today ",start:"Start of range",end:"End of range",months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}},DiscardConfirmationModal:{title:"Discard all unsaved changes",message:"If you discard changes, you\u2019ll delete any edits you made since you last saved.",primaryAction:"Discard changes",secondaryAction:"Continue editing"},DropZone:{single:{overlayTextFile:"Drop file to upload",overlayTextImage:"Drop image to upload",overlayTextVideo:"Drop video to upload",actionTitleFile:"Add file",actionTitleImage:"Add image",actionTitleVideo:"Add video",actionHintFile:"or drop file to upload",actionHintImage:"or drop image to upload",actionHintVideo:"or drop video to upload",labelFile:"Upload file",labelImage:"Upload image",labelVideo:"Upload video"},allowMultiple:{overlayTextFile:"Drop files to upload",overlayTextImage:"Drop images to upload",overlayTextVideo:"Drop videos to upload",actionTitleFile:"Add files",actionTitleImage:"Add images",actionTitleVideo:"Add videos",actionHintFile:"or drop files to upload",actionHintImage:"or drop images to upload",actionHintVideo:"or drop videos to upload",labelFile:"Upload files",labelImage:"Upload images",labelVideo:"Upload videos"},errorOverlayTextFile:"File type is not valid",errorOverlayTextImage:"Image type is not valid",errorOverlayTextVideo:"Video type is not valid"},EmptySearchResult:{altText:"Empty search results"},Frame:{skipToContent:"Skip to content",navigationLabel:"Navigation",Navigation:{closeMobileNavigationLabel:"Close navigation"}},FullscreenBar:{back:"Back",accessibilityLabel:"Exit fullscreen mode"},Filters:{moreFilters:"More filters",moreFiltersWithCount:"More filters ({count})",filter:"Filter {resourceName}",noFiltersApplied:"No filters applied",cancel:"Cancel",done:"Done",clearAllFilters:"Clear all filters",clear:"Clear",clearLabel:"Clear {filterName}"},IndexProvider:{defaultItemSingular:"Item",defaultItemPlural:"Items",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} are selected.",selected:"{selectedItemsCount} selected",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}"},IndexTable:{emptySearchTitle:"No {resourceNamePlural} found",emptySearchDescription:"Try changing the filters or search term",onboardingBadgeText:"New",resourceLoadingAccessibilityLabel:"Loading {resourceNamePlural}\u2026",selectAllLabel:"Select all {resourceNamePlural}",selected:"{selectedItemsCount} selected",undo:"Undo",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural}",selectItem:"Select {resourceName}",selectButtonText:"Select"},Loading:{label:"Page loading bar"},Modal:{iFrameTitle:"body markup",modalWarning:"These required properties are missing from Modal: {missingProps}"},Page:{Header:{rollupActionsLabel:"View actions for {title}"}},Pagination:{previous:"Previous",next:"Next",pagination:"Pagination"},ProgressBar:{negativeWarningMessage:"Values passed to the progress prop shouldn\u2019t be negative. Resetting {progress} to 0.",exceedWarningMessage:"Values passed to the progress prop shouldn\u2019t exceed 100. Setting {progress} to 100."},ResourceList:{sortingLabel:"Sort by",defaultItemSingular:"item",defaultItemPlural:"items",showing:"Showing {itemsCount} {resource}",showingTotalCount:"Showing {itemsCount} of {totalItemsCount} {resource}",loading:"Loading {resource}",selected:"{selectedItemsCount} selected",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} in your store are selected.",allFilteredItemsSelected:"All {itemsLength}+ {resourceNamePlural} in this filter are selected.",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural} in your store",selectAllFilteredItems:"Select all {itemsLength}+ {resourceNamePlural} in this filter",emptySearchResultTitle:"No {resourceNamePlural} found",emptySearchResultDescription:"Try changing the filters or search term",selectButtonText:"Select",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}",ariaLiveSingular:"{itemsLength} item",ariaLivePlural:"{itemsLength} items",Item:{actionsDropdownLabel:"Actions for {accessibilityLabel}",actionsDropdown:"Actions dropdown",viewItem:"View details for {itemName}"},BulkActions:{actionsActivatorLabel:"Actions",moreActionsActivatorLabel:"More actions",warningMessage:"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions."}},SkeletonPage:{loadingLabel:"Page loading"},Tabs:{toggleTabsLabel:"More tabs"},Tag:{ariaLabel:"Remove {children}"},TextField:{characterCount:"{count} characters",characterCountWithMaxLength:"{count} of {limit} characters used"},TooltipOverlay:{accessibilityLabel:"Tooltip: {label}"},TopBar:{toggleMenuLabel:"Toggle menu",SearchField:{clearButtonLabel:"Clear",search:"Search"}},MediaCard:{popoverButton:"Actions"},VideoThumbnail:{playButtonA11yLabel:{default:"Play video",defaultWithDuration:"Play video of length {duration}",duration:{hours:{other:{only:"{hourCount} hours",andMinutes:"{hourCount} hours and {minuteCount} minutes",andMinute:"{hourCount} hours and {minuteCount} minute",minutesAndSeconds:"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hours, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hours, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hours and {secondCount} seconds",andSecond:"{hourCount} hours and {secondCount} second"},one:{only:"{hourCount} hour",andMinutes:"{hourCount} hour and {minuteCount} minutes",andMinute:"{hourCount} hour and {minuteCount} minute",minutesAndSeconds:"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hour, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hour, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hour and {secondCount} seconds",andSecond:"{hourCount} hour and {secondCount} second"}},minutes:{other:{only:"{minuteCount} minutes",andSeconds:"{minuteCount} minutes and {secondCount} seconds",andSecond:"{minuteCount} minutes and {secondCount} second"},one:{only:"{minuteCount} minute",andSeconds:"{minuteCount} minute and {secondCount} seconds",andSecond:"{minuteCount} minute and {secondCount} second"}},seconds:{other:"{secondCount} seconds",one:"{secondCount} second"}}}}};var pv={Polaris:dv};class qp{constructor(){vt(this,"portalIds",[])}register(n){this.portalIds.includes(n)||this.portalIds.push(n)}hasContainer(){return this.portalIds.length}}class mv{constructor(){vt(this,"trapFocusList",[])}add(n){this.trapFocusList=[...this.trapFocusList,n]}remove(n){const o=this.trapFocusList.indexOf(n);return o>-1&&(this.trapFocusList=this.trapFocusList.splice(o,1)),o>-1}}const Kr="light";const yv=S("div",{id:"PolarisPortalsContainer"},null,-1),Ro=M({props:{colorScheme:{type:String,default:Kr}},setup(t){const n=t,o=new cv,i=new qp,l=k(new uv(Op)),r=new mv,u=k(xu().matches),m=()=>{document.body.setAttribute("p-color-scheme",n.colorScheme||Kr),document.body.style.backgroundColor="var(--p-background)",document.body.style.color="var(--p-text)"},x=Kt(()=>{u.value!==xu().matches&&(u.value=!u.value)},40,{trailing:!0,leading:!0,maxWait:40});return Ee(()=>n.colorScheme,(v,g)=>{v!==g&&m()}),Se(()=>{document!==null&&m()}),Ge("mediaQueryContext",{isNavigationCollapsed:u.value}),Ge("scrollLockManager",o),Ge("portalManager",i),Ge("uniqueIdFactory",l.value),Ge("focusManager",r),Ge("lang",pv),(v,g)=>(s(),A(a(ea),{"color-scheme":t.colorScheme},{default:y(()=>[C(a(it),{event:"resize",handler:a(x)},null,8,["handler"]),f(v.$slots,"default"),yv]),_:3},8,["color-scheme"]))}});Ro.__docgenInfo={exportName:"default",displayName:"AppProvider",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}}],slots:[{name:"default"}]};const gv="Polaris-Avatar",hv="Polaris-Avatar--hidden",bv="Polaris-Avatar--sizeExtraSmall",fv="Polaris-Avatar--sizeSmall",vv="Polaris-Avatar--sizeMedium",xv="Polaris-Avatar--sizeLarge",Tv="Polaris-Avatar--styleOne",Sv="Polaris-Avatar--styleTwo",Cv="Polaris-Avatar--styleThree",Av="Polaris-Avatar--styleFour",kv="Polaris-Avatar--styleFive",Nv="Polaris-Avatar--hasImage",Lv="Polaris-Avatar__Image",wv="Polaris-Avatar__Initials",Pv="Polaris-Avatar__Svg";var na={Avatar:gv,hidden:hv,sizeExtraSmall:bv,sizeSmall:fv,sizeMedium:vv,sizeLarge:xv,styleOne:Tv,styleTwo:Sv,styleThree:Cv,styleFour:Av,styleFive:kv,hasImage:Nv,Image:Lv,Initials:wv,Svg:Pv};const Mr=["one","two","three","four","five"];function Mv(t){return t?Mr[t.charCodeAt(0)%Mr.length]:Mr[0]}const _v=["src","srcSet","crossOrigin"],Dv=["src","crossOrigin"],Yt=M({props:{source:null,crossOrigin:null,sourceSet:null},setup(t){const n=t,o=p(()=>n.sourceSet?n.sourceSet.map(({source:i,descriptor:l})=>`${i} ${l}`).join(","):null);return(i,l)=>a(o)?(s(),d("img",{key:0,src:t.source,srcSet:t.sourceSet,crossOrigin:t.crossOrigin},null,8,_v)):(s(),d("img",{key:1,src:t.source,crossOrigin:t.crossOrigin},null,8,Dv))}});Yt.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"source",required:!0,type:{name:"string"}},{name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},{name:"sourceSet",required:!1,type:{name:"Array",elements:[{name:"SourceSet"}]}}]};const Iv=["aria-label"],oo=M({props:{size:{default:"medium"},name:{default:void 0},initials:{default:void 0},customer:{type:Boolean,default:void 0},source:{default:void 0},accessibilityLabel:{default:void 0}},emits:["error"],setup(t,{emit:n}){const o=t,i=k("PENDING"),l="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z",r="0.35em",u=p(()=>o.source&&i.value!=="ERRORED"),m=p(()=>{const h=Le("size",o.size),T=Le("style",Mv(o.name||o.initials));return $(na.Avatar,h&&na[h],!o.customer&&na[T],(u.value||o.initials&&o.initials.length===0)&&i.value!=="LOADED"&&na.hidden,u.value&&na.hasImage)}),x=p(()=>o.accessibilityLabel?o.accessibilityLabel:o.name?o.name:o.initials?`Avatar with initials ${o.initials.split("").join(" ")}`:"Avatar"),v=()=>{i.value="LOADED"},g=()=>{i.value="ERRORED",n("error")};return(h,T)=>(s(),d("span",{"aria-label":a(x),role:"img",class:c(a(m))},[a(u)?L("",!0):(s(),d("span",{key:0,class:c(a(na).Initials)},[(s(),d("svg",{class:c(a(na).Svg),viewBox:"0 0 40 40"},[t.customer||!t.initials?(s(),d("path",{key:0,fill:"currentColor",d:l})):(s(),d("text",{key:1,x:"50%",y:"50%",dy:r,fill:"currentColor","font-size":"20","text-anchor":"middle"},U(t.initials),1))],2))],2)),t.source&&i.value!==h.Status.Errored?(s(),A(a(Yt),{key:1,class:c(a(na).Image),source:t.source,alt:"",role:"presentation",onLoad:v,onError:g},null,8,["class","source"])):L("",!0)],10,Iv))}});oo.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",description:"Size of avatar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"name",description:"The name of the person",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"initials",description:"Initials of person to display",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"customer",description:"Whether the avatar is for a customer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"source",description:"URL of the avatar image which falls back to initials if the image fails to load",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"accessibilityLabel",description:"Accessible label for the avatar image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"error"}]};const Bv="Polaris-Backdrop",$v="Polaris-Backdrop--transparent",Fv="Polaris-Backdrop--belowNavigation";var _r={Backdrop:Bv,transparent:$v,belowNavigation:Fv};const Ev={inheritAttrs:!1,render(){return null}},uc=M(_(b({},Ev),{setup(t){const n=ve("scrollLockManager");return Se(()=>{n.registerScrollLock()}),gt(()=>{n.unregisterScrollLock()}),()=>{}}}));uc.__docgenInfo={exportName:"default",displayName:"ScrollLock",description:"",tags:{}};const dc=M({props:{belowNavigation:{type:Boolean},transparent:{type:Boolean}},setup(t){const n=t,o=p(()=>$(_r.Backdrop,n.belowNavigation&&_r.belowNavigation,n.transparent&&_r.transparent));return(i,l)=>(s(),d("div",{class:c(a(o))},[C(a(uc))],2))}});dc.__docgenInfo={exportName:"default",displayName:"Backdrop",description:"",tags:{},props:[{name:"belowNavigation",required:!1,type:{name:"boolean"}},{name:"transparent",required:!1,type:{name:"boolean"}}]};const Ov={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},qv=S("path",{"fill-rule":"evenodd",d:"M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4L9 11.6 6.7 9.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z"},null,-1),Rv=[qv];function Vv(t,n){return s(),d("svg",Ov,Rv)}var Hv={render:Vv};const Uv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},jv=S("path",{"fill-rule":"evenodd",d:"M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},null,-1),zv=[jv];function Wv(t,n){return s(),d("svg",Uv,zv)}var _u={render:Wv};const Gv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Xv=S("path",{"fill-rule":"evenodd",d:"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),Kv=[Xv];function Yv(t,n){return s(),d("svg",Gv,Kv)}var Rp={render:Yv};const Zv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Qv=S("path",{d:"M11.768.768a2.5 2.5 0 0 0-3.536 0L.768 8.232a2.5 2.5 0 0 0 0 3.536l7.464 7.464a2.5 2.5 0 0 0 3.536 0l7.464-7.464a2.5 2.5 0 0 0 0-3.536L11.768.768zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},null,-1),Jv=[Qv];function ex(t,n){return s(),d("svg",Zv,Jv)}var tx={render:ex};const ax="Polaris-Banner",nx="Polaris-Banner--statusCritical",ox="Polaris-Banner__PrimaryAction",ix="Polaris-Banner__Button",sx="Polaris-Banner--statusWarning",lx="Polaris-Banner--statusInfo",rx="Polaris-Banner--statusSuccess",cx="Polaris-Banner__ContentWrapper",ux="Polaris-Banner--withinContentContainer",dx="Polaris-Banner__Dismiss",px="Polaris-Banner__Ribbon",mx="Polaris-Banner--keyFocused",yx="Polaris-Banner__Actions",gx="Polaris-Banner--withinPage",hx="Polaris-Banner--hasDismiss",bx="Polaris-Banner__Heading",fx="Polaris-Banner__Content",vx="Polaris-Banner__SecondaryAction",xx="Polaris-Banner__Text",Tx="Polaris-Banner--pressed",Sx="Polaris-Banner--loading",Cx="Polaris-Banner__Spinner";var Ke={Banner:ax,statusCritical:nx,PrimaryAction:ox,Button:ix,statusWarning:sx,statusInfo:lx,statusSuccess:rx,ContentWrapper:cx,withinContentContainer:ux,Dismiss:dx,Ribbon:px,keyFocused:mx,Actions:yx,withinPage:gx,hasDismiss:hx,Heading:bx,Content:fx,SecondaryAction:vx,Text:xx,pressed:Tx,loading:Sx,Spinner:Cx};const Ax=["role","aria-live","aria-labelledby","aria-describedby"],kx=["id"],Nx=["id"],rs=M({props:{title:null,icon:null,status:null,action:null,secondaryAction:null,stopAnnouncements:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=ve("WithinContentContext",!1);Ge("BannerContext",!1);const{useUniqueId:l}=Be(),r=l("Banner"),u=p(()=>`${r}Heading`),m=p(()=>`${r}Content`),x=Et(),v=ue(),g=k(null),h=k(!1),{defaultIcon:T,iconColor:N,ariaRoleType:w}=F(n.status),D=p(()=>n.icon||T),B=p(()=>{const W=!!x.onDismiss;return $(Ke.Banner,n.status&&Ke[Le("status",n.status)],W&&Ke.hasDismiss,h.value&&Ke.keyFocused,i?Ke.withinContentContainer:Ke.withinPage)}),E=p(()=>$(Ke.Button,Ke.loading)),R=W=>{W.target===g.value&&(h.value=!0)},z=()=>{h.value=!1},Z=W=>{W.currentTarget.blur(),h.value=!1};function F(W){switch(W){case"success":return{defaultIcon:Hv,iconColor:"success",ariaRoleType:"status"};case"info":return{defaultIcon:_u,iconColor:"highlight",ariaRoleType:"status"};case"warning":return{defaultIcon:Rp,iconColor:"warning",ariaRoleType:"alert"};case"critical":return{defaultIcon:tx,iconColor:"critical",ariaRoleType:"alert"};default:return{defaultIcon:_u,iconColor:"base",ariaRoleType:"status"}}}return(W,q)=>(s(),d("div",{class:c(a(B)),tabIndex:"0",ref_key:"wrapperRef",ref:g,role:a(w),"aria-live":t.stopAnnouncements?"off":"polite",onMouseup:Z,onKeyup:R,onBlur:z,"aria-labelledby":a(u),"aria-describedby":a(m)},[a(x).onDismiss?(s(),d("div",{key:0,class:c(a(Ke).Dismiss)},[C(a(ge),{plain:"",icon:a(os),onClick:q[0]||(q[0]=j=>W.$emit("dismiss")),accessibilityLabel:"Dismiss notification"},null,8,["icon"])],2)):L("",!0),S("div",{class:c(a(Ke).Ribbon)},[C(a(re),{source:a(D),color:a(N)},null,8,["source","color"])],2),S("div",{class:c(a(Ke).ContentWrapper)},[S("div",{class:c(a(Ke).Heading),id:a(u)},[C(a(It),{element:"p"},{default:y(()=>[oe(U(t.title),1)]),_:1})],10,kx),a(ye)(a(v).default)||t.action||t.secondaryAction?(s(),d("div",{key:0,class:c(a(Ke).Content),id:a(m)},[f(W.$slots,"default"),t.action||t.secondaryAction?(s(),d("div",{key:0,class:c(a(Ke).Actions)},[C(a(tt),null,{default:y(()=>[t.action?(s(),d("div",{key:0,class:c(a(Ke).PrimaryAction)},[t.action.loading?(s(),d("button",{key:0,disabled:"","aria-busy":"",class:c(a(E))},[S("span",{class:c(a(Ke).Spinner)},[C(a(Zt),{size:"small",accessibilityLabel:a(o).Polaris.Button.spinnerAccessibilityLabel},null,8,["accessibilityLabel"])],2),oe(U(t.action.content),1)],2)):(s(),A(a(Wp),{key:1,action:t.action,class:c(a(Ke).Button)},null,8,["action","class"]))],2)):L("",!0),t.secondaryAction?(s(),d(G,{key:1},[t.secondaryAction.url?(s(),A(a(yt),{key:0,class:c(a(Ke).SecondaryAction),url:t.secondaryAction.url,external:t.secondaryAction.external},{default:y(()=>[S("span",{class:c(a(Ke).Text)},U(t.secondaryAction.content),3)]),_:1},8,["class","url","external"])):(s(),A(a(us),{key:1,class:c(a(Ke).SecondaryAction),onClick:t.secondaryAction.onAction},{default:y(()=>[S("span",{class:c(a(Ke).Text)},U(t.secondaryAction.content),3)]),_:1},8,["class","onClick"]))],64)):L("",!0)]),_:1})],2)):L("",!0)],10,Nx)):L("",!0)],2)],42,Ax))}});rs.__docgenInfo={exportName:"default",displayName:"Banner",description:"",tags:{},props:[{name:"title",description:"Title content for the banner.",required:!1,type:{name:"string"}},{name:"icon",description:"Icon to display in the banner. Use only major, duotone icons",required:!1,type:{name:"TSIndexedAccessType"}},{name:"status",description:"Sets the status of the banner.",required:!1,type:{name:"BannerStatus"}},{name:"action",description:"Action for banner",required:!1,type:{name:"intersection",elements:[{name:"DisableableAction"},{name:"LoadableAction"}]}},{name:"secondaryAction",description:"Action | Displays a secondary action",required:!1,type:{name:"Action"}},{name:"stopAnnouncements",description:"Disables screen reader announcements when changing the content of the banner",required:!1,type:{name:"boolean"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const Lx="Polaris-Breadcrumbs__Breadcrumb",wx="Polaris-Breadcrumbs__Icon",Px="Polaris-Breadcrumbs__Content";var Ei={Breadcrumb:Lx,Icon:wx,Content:Px};const Mx={key:0,role:"navigation"},_x=["aria-label"],Vp=M({props:{breadcrumbs:null},setup(t){const n=t,o=k(n.breadcrumbs[n.breadcrumbs.length-1]),i=p(()=>{const{url:r}=o.value;return r}),l=p(()=>{const{onAction:r}=o.value;return r});return(r,u)=>o.value?(s(),d("nav",Mx,[a(i)?(s(),A(a(yt),{key:o.value.content,url:a(i),class:c(a(Ei).Breadcrumb),"aria-label":o.value.accessibilityLabel,onMouseup:a(kt)},{default:y(()=>[S("span",{class:c(a(Ei).Icon)},[C(a(re),{source:a(ao)},null,8,["source"])],2),C(a(lt),null,{default:y(()=>[oe(U(o.value.content),1)]),_:1})]),_:1},8,["url","class","aria-label","onMouseup"])):(s(),d("button",{type:"button",key:o.value.content,class:c(a(Ei).Breadcrumb),"aria-label":o.value.accessibilityLabel,onMouseup:u[0]||(u[0]=(...m)=>a(kt)&&a(kt)(...m)),onClick:u[1]||(u[1]=(...m)=>a(l)&&a(l)(...m))},[S("span",{class:c(a(Ei).Icon)},[C(a(re),{source:a(ao)},null,8,["source"])],2),C(a(lt),null,{default:y(()=>[oe(U(o.value.content),1)]),_:1})],42,_x))])):L("",!0)}});Vp.__docgenInfo={exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const Dx={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Ix=S("path",{d:"M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8z"},null,-1),Bx=[Ix];function $x(t,n){return s(),d("svg",Dx,Bx)}var Aa={render:$x};function pc(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Fx="Polaris-Button",Ex="Polaris-Button--pressed",Ox="Polaris-Button--disabled",qx="Polaris-Button--connectedDisclosure",Rx="Polaris-Button__Content",Vx="Polaris-Button--plain",Hx="Polaris-Button--textAlignLeft",Ux="Polaris-Button--textAlignCenter",jx="Polaris-Button--textAlignRight",zx="Polaris-Button__Icon",Wx="Polaris-Button--fullWidth",Gx="Polaris-Button--hidden",Xx="Polaris-Button__Spinner",Kx="Polaris-Button--primary",Yx="Polaris-Button--destructive",Zx="Polaris-Button--outline",Qx="Polaris-Button--loading",Jx="Polaris-Button--removeUnderline",eT="Polaris-Button--iconOnly",tT="Polaris-Button--sizeSlim",aT="Polaris-Button--sizeLarge",nT="Polaris-Button--monochrome",oT="Polaris-Button__Text",iT="Polaris-Button__ConnectedDisclosureWrapper",sT="Polaris-Button__ConnectedDisclosure";var Ae={Button:Fx,pressed:Ex,disabled:Ox,connectedDisclosure:qx,Content:Rx,plain:Vx,textAlignLeft:Hx,textAlignCenter:Ux,textAlignRight:jx,Icon:zx,fullWidth:Wx,hidden:Gx,Spinner:Xx,primary:Kx,destructive:Yx,outline:Zx,loading:Qx,removeUnderline:Jx,iconOnly:eT,sizeSlim:tT,sizeLarge:aT,monochrome:nT,Text:oT,ConnectedDisclosureWrapper:iT,ConnectedDisclosure:sT},la=(t=>(t[t.Click=0]="Click",t[t.EscapeKeypress=1]="EscapeKeypress",t[t.FocusOut=2]="FocusOut",t[t.ScrollOut=3]="ScrollOut",t))(la||{}),Pt=(t=>(t.Entering="entering",t.Entered="entered",t.Exiting="exiting",t.Exited="exited",t))(Pt||{});function Du(t,n){if(t===n)return!0;let o=n.parentNode;for(;o!=null;){if(o===t)return!0;o=o.parentNode}return!1}function lT(t,{id:n,active:o=!1,ariaHaspopup:i,activatorDisabled:l=!1}){l||(t.tabIndex=t.tabIndex||0),t.setAttribute("aria-controls",n),t.setAttribute("aria-owns",n),t.setAttribute("aria-expanded",String(o)),i!=null&&t.setAttribute("aria-haspopup",String(i))}const rT="Polaris-PositionedOverlay",cT="Polaris-PositionedOverlay--fixed",uT="Polaris-PositionedOverlay--calculating",dT="Polaris-PositionedOverlay--preventInteraction";var Dr={PositionedOverlay:rT,fixed:cT,calculating:uT,preventInteraction:dT};const pT="Polaris-Popover",mT="Polaris-Popover__PopoverOverlay",yT="Polaris-Popover--measuring",gT="Polaris-Popover--fullWidth",hT="Polaris-Popover__Content",bT="Polaris-Popover--positionedAbove",fT="Polaris-Popover__Wrapper",vT="Polaris-Popover__Pane",xT="Polaris-Popover__Section",TT="Polaris-Popover__FocusTracker";var nt={Popover:pT,PopoverOverlay:mT,"PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",measuring:yT,fullWidth:gT,Content:hT,positionedAbove:bT,Wrapper:fT,"Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:vT,"Pane-fixed":"Polaris-Popover__Pane--fixed",Section:xT,FocusTracker:TT,"PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"};const ST="Polaris-Tooltip-TooltipOverlay",CT="Polaris-Tooltip-TooltipOverlay--measuring",AT="Polaris-Tooltip-TooltipOverlay--positionedAbove",kT="Polaris-Tooltip-TooltipOverlay__Content";var Vi={TooltipOverlay:ST,measuring:CT,positionedAbove:AT,Content:kT};function NT(t,n,o,i,l,r,u,m=0){const x=t.top,v=x+t.height,g=t.top-m,h=l.height-t.top-t.height,T=n.height,N=o.activator+o.container,w=o.container,D=t.top-Math.max(i.top,0),B=l.top+Math.min(l.height,i.top+i.height)-(t.top+t.height),E=D>=w,R=B>=w,z=Math.min(h,T),Z=Math.min(g,T),F=u?0:l.top,W={height:Z-N,top:x+F-Z,positioning:"above"},q={height:z-N,top:v+F,positioning:"below"};return r==="above"?(E||D>=B&&!R)&&(g>T||g>h)?W:q:r==="below"?(R||B>=D&&!E)&&(h>T||h>g)?q:W:E&&R?g>h?W:q:D>w?W:q}function LT(t,n,o,i,l){const r=o.width-n.width;if(l==="left")return Math.min(r,Math.max(0,t.left-i.horizontal));if(l==="right"){const u=o.width-(t.left+t.width);return Math.min(r,Math.max(0,u-i.horizontal))}return Math.min(r,Math.max(0,t.center.x-n.width/2))}function wT(t,n){const{center:o}=t;return o.y<n.top||o.y>n.top+n.height}function Hp(){return new wa({top:window.scrollY,left:window.scrollX,height:window.innerHeight,width:document.body.clientWidth})}function PT(t,n=Hp()){const o=Math.max(t.top,0),i=Math.max(t.left,0),l=Math.min(t.top+t.height,n.height),r=Math.min(t.left+t.width,n.width);return new wa({top:o,left:i,height:l-o,width:r-i})}function MT(t){return t===document}function _T(t){const n=window.getComputedStyle(t);return{activator:parseFloat(n.marginTop||"0"),container:parseFloat(n.marginBottom||"0"),horizontal:parseFloat(n.marginLeft||"0")}}function DT(t){const n=t.closest(zi.selector)||document.body,o=n===document.body?"auto":parseInt(window.getComputedStyle(n).zIndex||"0",10);return o==="auto"||Number.isNaN(o)?null:o}const IT={inheritAttrs:!1,render(){return null}},it=M(_(b({},IT),{props:{event:{type:String,required:!0},capture:{type:Boolean},passive:{type:Boolean},handler:{type:Function,required:!0}},setup(t){const n=t;function o(){const{event:l,capture:r,passive:u,handler:m}=n;window.addEventListener(l,m,{capture:r,passive:u})}function i(l){const{event:r,handler:u,capture:m}=l||n;window.removeEventListener(r,u,m)}return Ee(()=>b({},n),(l,r)=>{l!==r&&(i(r),o())}),Se(()=>o()),gt(()=>i()),()=>{}}}));it.__docgenInfo={exportName:"default",displayName:"EventListener",description:"",tags:{},props:[{name:"event",type:{name:"string"},required:!0},{name:"capture",type:{name:"boolean"}},{name:"passive",type:{name:"boolean"}},{name:"handler",type:{name:"Function as unknown as () => BaseEventProps['handler']"},required:!0}]};function BT(t){const n=t.closest(ns.selector);return n instanceof HTMLElement?n:document}const $T={inheritAttrs:!1},mc=M(_(b({},$T),{props:{active:{type:Boolean},activator:null,preferInputActivator:{type:Boolean},preferredPosition:null,preferredAlignment:null,fullWidth:{type:Boolean},fixed:{type:Boolean},preventInteraction:{type:Boolean},classNames:null,zIndexOverride:null,hideOnPrint:{type:Boolean},layout:null},emits:["change-content-styles","scroll-out"],setup(t,{emit:n}){const o=t,i={childList:!0,subtree:!0,characterData:!0},l=k(null),r=k(null),u=k(null),m=k(0),x=k(0),v=k(null),g=k(null),h=k(!0),T=k("below"),N=k(Gt(o.activator)),w=k(!1),D=k(!1),B=k(null),E=k(null),R=p(()=>{const q=o.classNames;return $(Dr.PositionedOverlay,o.fixed&&Dr.fixed,o.preventInteraction&&Dr.preventInteraction,q)}),z=p(()=>$(nt.Popover,T.value==="above"&&nt.positionedAbove,o.fullWidth&&nt.fullWidth,h.value&&nt.measuring,o.hideOnPrint&&nt["PopoverOverlay-hideOnPrint"])),Z=p(()=>$(Vi.TooltipOverlay,h.value&&Vi.measuring,T.value==="above"&&Vi.positionedAbove)),F=p(()=>({top:m.value==null||Number.isNaN(m.value)?void 0:`${m.value}px`,left:u.value==null||Number.isNaN(u.value)?void 0:`${u.value}px`,right:r.value==null||Number.isNaN(r.value)?void 0:`${r.value}px`,width:v.value==null||Number.isNaN(v.value)?void 0:`${v.value}px`,zIndex:o.zIndexOverride||g.value||void 0})),W=()=>{if(E.value&&E.value.disconnect(),x.value=0,T.value="below",h.value=!0,l.value&&B.value){const{activator:q,preferredPosition:j="below",preferredAlignment:le="center",fullWidth:fe,fixed:ae,preferInputActivator:Me=!0}=o,O=Me&&q.querySelector("input")||q,X=Gt(O),Y=Gt(l.value),ce=MT(B.value)?document.body:B.value,de=Gt(ce),$e=fe?new wa(_(b({},Y),{width:X.width})):Y;ce===document.body&&(de.height=document.body.scrollHeight);let he=0;const Ce=ce.querySelector(`${ic.selector}`);Ce&&(he=Ce.clientHeight);const ie=l.value.firstElementChild&&l.value.firstChild?_T(l.value.firstElementChild):{activator:0,container:0,horizontal:0},Te=Hp(),Ie=DT(q),Re=Ie==null?Ie:Ie+1,_e=NT(X,$e,ie,de,Te,j,ae,he),dt=LT(X,$e,Te,ie,le);h.value=!1,N.value=Gt(q),u.value=le!=="right"?dt:null,r.value=le==="right"?dt:null,m.value=w.value?m.value:_e.top,w.value=Boolean(ae),x.value=_e.height||0,v.value=fe?$e.width:null,T.value=_e.positioning,D.value=wT(X,PT(de)),g.value=Re,n("change-content-styles",{desiredHeight:x.value}),E.value&&(E.value.observe(l.value,i),E.value.observe(q,i))}};return gp(()=>{E.value=new MutationObserver(W)}),Jt(()=>{o.active&&m.value!==0&&D.value&&n("scroll-out")}),Se(()=>{B.value=BT(o.activator),B.value&&!o.fixed&&B.value.addEventListener("scroll",W),W()}),gt(()=>{B.value&&!o.fixed&&B.value.removeEventListener("scroll",W)}),(q,j)=>(s(),d("div",{class:c(a(R)),style:Fe(a(F)),ref_key:"overlayRef",ref:l},[t.layout==="tooltip"?(s(),d("div",me({key:0,class:a(Z)},b({},a(zi).props)),[f(q.$slots,"default")],16)):(s(),d("div",me({key:1,class:a(z)},b({},a(mh).props)),[f(q.$slots,"default")],16)),C(a(it),{event:"resize",handler:W})],6))}}));mc.__docgenInfo={exportName:"default",displayName:"PositionedOverlay",description:"",tags:{},props:[{name:"active",required:!0,type:{name:"boolean"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}},{name:"preferredAlignment",required:!1,type:{name:"PreferredAlignment"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"boolean"}},{name:"classNames",required:!1,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"layout",required:!1,type:{name:"string"}}],events:[{name:"change-content-styles",type:{names:["Record"]}},{name:"scroll-out"}],slots:[{name:"default"}]};var FT="";const ea=M({props:{colorScheme:{type:String,default:Kr},as:{type:String,default:"div"}},setup(t){return(n,o)=>(s(),d(G,null,[(s(),A(Oe("style"),{"data-polaris-custom-properties":"",innerHTML:a(FT)},null,8,["innerHTML"])),(s(),A(Oe(t.as),me(n.$attrs,{"p-color-scheme":t.colorScheme,style:{color:"var(--p-text)"}}),{default:y(()=>[f(n.$slots,"default")]),_:3},16,["p-color-scheme","style"]))],64))}});ea.__docgenInfo={exportName:"default",displayName:"CustomProperties",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}},{name:"as",type:{name:"String as () => CustomPropertiesProps['as']"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}]};const $o=M({setup(t){return(n,o)=>(s(),d("div",{class:c(a(nt).Section)},[f(n.$slots,"default")],2))}});$o.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},slots:[{name:"default"}]};const cs=M({props:{fixed:{type:Boolean},sectioned:{type:Boolean},height:null},emits:["scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=o.height?{height:o.height,maxHeight:o.height,minHeight:o.height}:void 0,l=p(()=>$(nt.Pane,o.fixed&&nt["Pane-fixed"]));return(r,u)=>t.fixed?(s(),d("div",{key:0,style:Fe(a(i)),class:c(a(l))},[t.sectioned?(s(),A(a($o),{key:0},{default:y(()=>[f(r.$slots,"default")]),_:3})):f(r.$slots,"default",{key:1})],6)):(s(),A(a(Ot),{key:1,shadow:"",style:Fe(a(i)),class:c(a(l)),onScrolledToBottom:u[0]||(u[0]=m=>n("scrolled-to-bottom"))},{default:y(()=>[t.sectioned?(s(),A(a($o),{key:0},{default:y(()=>[f(r.$slots,"default")]),_:3})):f(r.$slots,"default",{key:1})]),_:3},8,["style","class"]))}});cs.__docgenInfo={exportName:"default",displayName:"Pane",description:"",tags:{},props:[{name:"fixed",required:!1,type:{name:"boolean"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"height",description:"Sets a fixed height and max-height on the Scrollable",required:!1,type:{name:"string"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};const ET=["id","tabIndex"],OT={inheritAttrs:!1},Up=M(_(b({},OT),{props:{fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},preferredPosition:{default:"below"},preferredAlignment:{default:"center"},active:{type:Boolean},id:null,zIndexOverride:{default:void 0},activator:null,preferInputActivator:{default:!0},sectioned:{type:Boolean},fixed:{type:Boolean},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=k(Pt.Exited),l=k(null),r=k(null),u=k(null),m=k({}),x=z=>{i.value=z,l.value&&l.value.getBoundingClientRect()},v=()=>{r.value&&window.clearTimeout(r.value),u.value&&window.clearTimeout(u.value)};Ee(()=>o.active,()=>{const z=o.active?Pt.Entering:Pt.Exiting,Z=o.active?Pt.Entered:Pt.Exited;x(z),v();const F=window.setTimeout(()=>{i.value=Z},parseInt(ji.motion["duration-100"].value,10));o.active?r.value=F:u.value=F});const g=p(()=>$(nt.PopoverOverlay,i.value===Pt.Entering&&nt["PopoverOverlay-entering"],i.value===Pt.Entered&&nt["PopoverOverlay-open"],i.value===Pt.Exiting&&nt["PopoverOverlay-exiting"])),h=p(()=>$(nt.Content,o.fullHeight&&nt["Content-fullHeight"],o.fluidContent&&nt["Content-fluidContent"])),T=()=>{n("close",la.ScrollOut)},N=()=>{n("close",la.EscapeKeypress)},w=z=>{const Z=z.target,F=l.value&&Du(l.value,Z),W=Du(o.activator,Z);F||W||i.value!==Pt.Entered||n("close",la.Click)},D=()=>{n("close",la.FocusOut)},B=()=>{n("close",la.FocusOut)},E=z=>{m.value={desiredHeight:`${z.height}px`}},R=()=>{o.autofocusTarget==="none"||!l.value||requestAnimationFrame(()=>{if(l.value){const z=rc(l.value);z&&o.autofocusTarget==="first-node"?z.focus():l.value.focus()}})};return Se(()=>{o.active&&(R(),x(Pt.Entered))}),gt(()=>{v()}),(z,Z)=>(s(),A(a(mc),{id:t.id,fullWidth:t.fullWidth,active:t.active,activator:t.activator,classNames:a(g),preferInputActivator:t.preferInputActivator,fixed:t.fixed,preferredPosition:t.preferredPosition,preferredAlignment:t.preferredAlignment,zIndexOverride:t.zIndexOverride,onScrollOut:T,onChangeContentStyles:E},{default:y(()=>[S("div",{class:c(a(nt).FocusTracker),tabIndex:"0",onFocus:D},null,34),C(a(ea),{"color-scheme":t.colorScheme},{default:y(()=>[S("div",{class:c(a(nt).Wrapper)},[S("div",{id:t.id,tabIndex:t.autofocusTarget==="none"?void 0:-1,style:Fe(m.value),class:c(a(h)),ref_key:"contentRef",ref:l},[f(z.$slots,"extra-content"),C(a(cs),{sectioned:t.sectioned,fixed:t.fixed,onScrolledToBottom:Z[0]||(Z[0]=F=>z.$emit("scrolled-to-bottom"))},{default:y(()=>[f(z.$slots,"overlay")]),_:3},8,["sectioned","fixed"])],14,ET)],2),S("div",{class:c(a(nt).FocusTracker),tabIndex:"0",onFocus:B},null,34),C(a(it),{event:"click",handler:w}),C(a(it),{event:"touchstart",handler:w}),C(a(St),{keyCode:a(We).Escape,handler:N},null,8,["keyCode"])]),_:3},8,["color-scheme"])]),_:3},8,["id","fullWidth","active","activator","classNames","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride"]))}}));Up.__docgenInfo={exportName:"default",displayName:"PopoverOverlay",description:"",tags:{},props:[{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"fluidContent",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"preferredAlignment",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'center'"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"colorScheme",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"scrolled-to-bottom"},{name:"close",type:{names:["PopoverCloseSource"]}}],slots:[{name:"extra-content"},{name:"overlay"}]};const qT=["data-portal-id"],RT={inheritAttrs:!1},Vo=M(_(b({},RT),{props:{idPrefix:{type:String,default:""}},setup(t){const n=t,o=ve("portalManager",new qp),i=k(""),{useUniqueId:l}=Be();return Se(()=>{const r=l("portal");i.value=n.idPrefix?`${n.idPrefix}-${r}`:r,o&&o.register(i.value)}),(r,u)=>a(o)?(s(),A(yh,{key:0,to:"#PolarisPortalsContainer"},[S("div",{"data-portal-id":i.value},[f(r.$slots,"default")],8,qT)])):L("",!0)}}));Vo.__docgenInfo={exportName:"default",displayName:"Portal",description:"",tags:{},props:[{name:"idPrefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}]};const VT={inheritAttrs:!1},et=M(_(b({},VT),{props:{preferredPosition:{default:void 0},preferredAlignment:{default:void 0},active:{type:Boolean},preferInputActivator:{default:!0},activatorWrapper:{default:"div"},zIndexOverride:{default:void 0},preventFocusOnClose:{type:Boolean},sectioned:{type:Boolean},fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},fixed:{type:Boolean},ariaHaspopup:{default:void 0},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=k(null),l=k(null),{useUniqueId:r}=Be();Et();const u=k(r("popover")),m=()=>{if(i.value){const g=i.value,T=wr(g)||g,N="disabled"in T&&Boolean(T.disabled);lT(T,{id:u.value,active:o.active,ariaHaspopup:o.ariaHaspopup,activatorDisabled:N})}};Ee(()=>o.active,()=>m());const x=g=>{let{parentElement:h}=g;for(;h;){if(h.matches(hp.selector))return!1;h=h.parentElement}return!0},v=g=>{if(n("close",g),!(!i.value||o.preventFocusOnClose)&&(g===la.FocusOut||g===la.EscapeKeypress)&&l.value){const h=wr(l.value)||wr(i.value)||i.value;mb(h,x)||h.focus()}};return Se(()=>{if(i.value){const g=i.value.firstElementChild;g&&(l.value=g),m()}}),(g,h)=>(s(),A(Oe(t.activatorWrapper),{ref_key:"container",ref:i},{default:y(()=>[f(g.$slots,"activator"),l.value&&t.active?(s(),A(a(Vo),{key:0,idPrefix:"popover"},{default:y(()=>[C(a(Up),{id:u.value,activator:l.value,fullWidth:t.fullWidth,active:t.active,preferInputActivator:t.preferInputActivator,fixed:t.fixed,preferredPosition:t.preferredPosition,preferredAlignment:t.preferredAlignment,zIndexOverride:t.zIndexOverride,autofocusTarget:t.autofocusTarget,sectioned:t.sectioned,colorScheme:t.colorScheme,onClose:v,onScrolledToBottom:h[0]||(h[0]=T=>n("scrolled-to-bottom"))},{overlay:y(T=>[f(g.$slots,"content")]),"extra-content":y(()=>[f(g.$slots,"extra-content")]),_:3},8,["id","activator","fullWidth","active","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride","autofocusTarget","sectioned","colorScheme"])]),_:3})):L("",!0)]),_:3},512))}}));et.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"preferredPosition",description:"The preferred direction to open the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Show or hide the Popover",required:!0,type:{name:"boolean"}},{name:"preferInputActivator",description:"Use the activator's input element to calculate the Popover position",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"activatorWrapper",description:"The element type to wrap the activator with",tags:{default:[{description:"'div'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"zIndexOverride",description:"Override on the default z-index of 400",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"preventFocusOnClose",description:`Prevents focusing the activator or the next focusable element
when the popover is deactivated`,required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically add wrap content in a section",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow popover to stretch to the full width of its activator",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Allow popover to stretch to fit content vertically",required:!1,type:{name:"boolean"}},{name:"fluidContent",description:"Allow popover content to determine the overlay width and height",required:!1,type:{name:"boolean"}},{name:"fixed",description:"Remains in a fixed position",required:!1,type:{name:"boolean"}},{name:"ariaHaspopup",description:"Used to illustrate the type of popover element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnPrint",description:"Allow the popover overlay to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",tags:{default:[{description:"'container'",title:"default"}]},required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"close",type:{names:["PopoverCloseSource"]}},{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"content"},{name:"extra-content"}]};const HT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},UT=S("path",{d:"M7.676 9h4.648c.563 0 .879-.603.53-1.014L10.531 5.24a.708.708 0 0 0-1.062 0L7.145 7.986C6.798 8.397 7.113 9 7.676 9zm4.648 2H7.676c-.563 0-.878.603-.53 1.014l2.323 2.746c.27.32.792.32 1.062 0l2.323-2.746c.349-.411.033-1.014-.53-1.014z"},null,-1),jT=[UT];function zT(t,n){return s(),d("svg",HT,jT)}var jp={render:zT};const WT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},GT=S("path",{d:"M6.902 12h6.196c.751 0 1.172-.754.708-1.268L10.708 7.3c-.36-.399-1.055-.399-1.416 0l-3.098 3.433C5.73 11.246 6.151 12 6.902 12z"},null,-1),XT=[GT];function KT(t,n){return s(),d("svg",WT,XT)}var zp={render:KT};const YT=["role","type","disabled","aria-busy","aria-controls","aria-expanded","aria-describedby","aria-checked","aria-pressed"],ZT={inheritAttrs:!1},us=M(_(b({},ZT),{props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,ariaChecked:{type:Boolean},others:null},setup(t){const n=t,o=Et(),i=x=>{const v={mouseup:kt};for(const g of x){const h=`on${pc(g)}`;o[h]&&(v[g]=o[h])}return v},l=i(["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"]),r=i(["blur","click","focus","mouseover","touchstart"]),u=p(()=>({id:n.id,class:o.class,"aria-label":n.accessibilityLabel})),m=p(()=>_(b(b({},u.value),n.others),{role:n.role}));return(x,v)=>t.url&&t.disabled?(s(),d("a",Ze(me({key:0},a(u))),[f(x.$slots,"default")],16)):t.url&&!t.disabled?(s(),A(a(yt),me({key:1},a(m),{url:t.url,external:t.external,download:t.download},Bo(a(r))),{default:y(()=>[f(x.$slots,"default")]),_:3},16,["url","external","download"])):(s(),d("button",me({key:2},a(u),{role:t.role,type:t.submit?"submit":"button",disabled:t.disabled,"aria-busy":t.loading?!0:void 0,"aria-controls":t.ariaControls,"aria-expanded":t.ariaExpanded,"aria-describedby":t.ariaDescribedBy,"aria-checked":t.ariaChecked,"aria-pressed":t.pressed},Bo(a(l))),[f(x.$slots,"default")],16,YT))}}));us.__docgenInfo={exportName:"default",displayName:"UnstyledButton",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"ariaChecked",required:!1,type:{name:"boolean"}},{name:"others",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"default"}]};const Wp=M({props:{action:null,overrides:null,keyProp:null},setup(t){const n=t,o=p(()=>{const u=n.action,{content:i,onAction:l}=u,r=J(u,["content","onAction"]);return b(b({},r),n.overrides)});return(i,l)=>(s(),A(us,me({key:t.keyProp},a(o),{onClick:t.action.onAction}),{default:y(()=>[oe(U(t.action.content),1)]),_:1},16,["onClick"]))}});Wp.__docgenInfo={exportName:"default",displayName:"UnstyledButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"UnstyledButtonProps"}]}},{name:"keyProp",required:!1,type:{name:"any"}}]};const QT={viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},JT=S("path",{d:"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"},null,-1),eS=[JT];function tS(t,n){return s(),d("svg",QT,eS)}var aS={render:tS};const nS={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},oS=S("path",{d:"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"},null,-1),iS=[oS];function sS(t,n){return s(),d("svg",nS,iS)}var lS={render:sS};const rS="Polaris-Spinner",cS="Polaris-Spinner--sizeSmall",uS="Polaris-Spinner--sizeLarge";var Iu={Spinner:rS,sizeSmall:cS,sizeLarge:uS};const Zt=M({props:{size:{type:String,default:"large"},accessibilityLabel:{type:String,default:null},hasFocusableParent:{type:Boolean}},setup(t){const n=t,o=k(b({},!n.hasFocusableParent&&{role:"status"})),i=p(()=>{const l=Le("size",n.size);return $(Iu.Spinner,n.size&&Iu[l])});return(l,r)=>(s(),d("div",null,[S("span",{class:c(a(i))},[t.size==="large"?(s(),A(a(aS),{key:0})):(s(),A(a(lS),{key:1}))],2),S("span",Ze(_t(o.value)),[C(a(lt),null,{default:y(()=>[S("span",null,U(t.accessibilityLabel),1)]),_:1})],16)]))}});Zt.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size of the spinner",tags:{},values:["small | large"],type:{name:"String as () => Size"},defaultValue:{func:!1,value:"'large'"}},{name:"accessibilityLabel",description:"Accessible label for the spinner",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasFocusableParent",description:"Allows the component to apply the correct accessibility roles based on focus",type:{name:"boolean"}}]};const dS={inheritAttrs:!1},Yr=M(_(b({},dS),{props:{commonProps:null,linkProps:null,actionProps:null,removeUnderline:null,children:{type:Boolean},disclosure:null,loading:null,icon:null},setup(t){const n=t,o=Et(),i=p(()=>{const m=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],x={};for(const v of m){const g=`on${pc(v)}`;o[g]&&(x[v]=o[g])}return x}),l=p(()=>$(Ae.Icon,n.loading&&Ae.hidden)),r=p(()=>$(Ae.Text,n.removeUnderline&&Ae.removeUnderline)),u=p(()=>n.disclosure==="select"?jp:n.disclosure==="up"?zp:Aa);return(m,x)=>(s(),A(a(us),me(b(b(b({},t.commonProps),t.linkProps),t.actionProps),Bo(a(i))),{default:y(()=>[S("span",{class:c(a(Ae).Content)},[t.loading?(s(),d("span",{key:0,class:c(a(Ae).Spinner)},[C(a(Zt),{size:"small",accessibilityLabel:"Loading"})],2)):L("",!0),t.icon?(s(),d("span",{key:1,class:c(a(l))},[C(a(re),{source:t.loading?"placeholder":t.icon},null,8,["source"])],2)):L("",!0),t.children?(s(),d("span",{class:c(a(r)),key:t.actionProps&&t.actionProps.disabled?"text-disabled":"text"},[f(m.$slots,"default")],2)):L("",!0),t.disclosure?(s(),d("span",{key:3,class:c(a(Ae).Icon)},[S("div",null,[C(a(re),{source:t.loading?"placeholder":a(u)},null,8,["source"])])],2)):L("",!0)],2)]),_:3},16))}}));Yr.__docgenInfo={exportName:"default",displayName:"ButtonMarkup",description:"",tags:{},props:[{name:"commonProps",required:!1,type:{name:"CommonButtonProps"}},{name:"linkProps",required:!1,type:{name:"LinkButtonProps"}},{name:"actionProps",required:!1,type:{name:"ActionButtonProps"}},{name:"removeUnderline",required:!1,type:{name:"TSIndexedAccessType"}},{name:"children",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"TSIndexedAccessType"}},{name:"loading",required:!1,type:{name:"TSIndexedAccessType"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}]};const pS=["disabled","aria-label","aria-describedby","aria-checked"],mS={inheritAttrs:!1},ge=M(_(b({},mS),{props:{id:null,url:{default:""},external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,ariaChecked:{type:Boolean},primary:{type:Boolean},destructive:{type:Boolean},size:{default:"medium"},textAlign:{default:void 0},outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean],default:void 0},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},setup(t){const n=t,o=ue(),i=Et(),l=p(()=>{const B=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],E={};for(const R of B){const z=`on${pc(R)}`;i[z]&&(E[R]=i[z])}return E}),r=!!o.default,u=k(!1),m=p(()=>n.disabled||n.loading),x=p(()=>{const B=n.textAlign&&Le("textAlign",n.textAlign),E=n.size&&Le("size",n.size);return $(Ae.Button,n.primary&&Ae.primary,n.outline&&Ae.outline,n.destructive&&Ae.destructive,m.value&&Ae.disabled,n.loading&&Ae.loading,n.plain&&Ae.plain,n.pressed&&!n.disabled&&!n.url&&Ae.pressed,n.monochrome&&Ae.monochrome,n.size!=="medium"&&E&&Ae[E],B&&Ae[B],n.fullWidth&&Ae.fullWidth,n.icon&&!r&&Ae.iconOnly,n.connectedDisclosure&&Ae.connectedDisclosure,n.removeUnderline&&Ae.removeUnderline)}),v=p(()=>{const B=n.textAlign&&Le("textAlign",n.textAlign),E=n.size&&Le("size",n.size);return $(Ae.Button,n.primary&&Ae.primary,n.outline&&Ae.outline,n.size!=="medium"&&E&&Ae[E],B&&Ae[B],n.destructive&&Ae.destructive,n.connectedDisclosure&&n.connectedDisclosure.disabled&&Ae.disabled,Ae.iconOnly,Ae.ConnectedDisclosure,n.monochrome&&Ae.monochrome)}),g=p(()=>{const{id:B,accessibilityLabel:E,role:R,ariaDescribedBy:z}=n;return{id:B,class:x.value,accessibilityLabel:E,role:R,ariaDescribedBy:z}}),h=p(()=>{const{url:B,external:E,download:R}=n;return{url:B,external:E,download:R}}),T=p(()=>{const{submit:B,loading:E,pressed:R}=n;return{submit:B,loading:E,pressed:R,disabled:m.value}}),N=p(()=>{const{removeUnderline:B,disclosure:E,loading:R,icon:z}=n;return{commonProps:g.value,linkProps:h.value,actionProps:T.value,removeUnderline:B,children:r,disclosure:E,loading:R,icon:z}}),w=p(()=>{if(n.connectedDisclosure){const{disabled:B,accessibilityLabel:E="Related actions"}=n.connectedDisclosure;return{disabled:B,disclosureLabel:E}}return{}}),D=()=>{u.value=!u.value};return(B,E)=>t.connectedDisclosure?(s(),d("div",{key:0,class:c(a(Ae).ConnectedDisclosureWrapper)},[C(Yr,me(a(N),Bo(a(l))),{default:y(()=>[f(B.$slots,"default")]),_:3},16),C(a(et),{active:u.value,preferredAlignment:"right",onClose:D},{activator:y(()=>[S("button",{type:"button",class:c(a(v)),disabled:a(w).disabled,"aria-label":a(w).disclosureLabel,"aria-describedby":t.ariaDescribedBy,"aria-checked":t.ariaChecked,onClick:D,onMouseup:E[0]||(E[0]=(...R)=>a(kt)&&a(kt)(...R))},[S("span",null,[C(a(re),{source:a(Aa)},null,8,["source"])])],42,pS)]),content:y(()=>[C(a(Je),{items:t.connectedDisclosure.actions,onActionAnyItem:D},Ue({_:2},[be(t.connectedDisclosure.actions,({prefixId:R})=>({name:`prefix-${R}`,fn:y(()=>[f(B.$slots,`prefix-${R}`)])})),be(t.connectedDisclosure.actions,({suffixId:R})=>({name:`suffix-${R}`,fn:y(()=>[f(B.$slots,`suffix-${R}`)])}))]),1032,["items"])]),_:3},8,["active"])],2)):(s(),A(Yr,me({key:1},a(N),Bo(a(l))),{default:y(()=>[f(B.$slots,"default")]),_:3},16))}}));ge.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the button",required:!1,type:{name:"string"}},{name:"url",description:"A destination to link to, rendered in the href attribute of a link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"external",description:"Forces url to open in a new tab",required:!1,type:{name:"boolean"}},{name:"download",description:`Tells the browser to download the url instead of opening it.
Provides a hint for the downloaded filename if it is a string value`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",description:"Allows the button to submit a form",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables the button, disallowing merchant interaction",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces button text with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"pressed",description:"Sets the button in a pressed state",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to define the semantic value of this element",required:!1,type:{name:"string"}},{name:"ariaControls",description:"Id of the element the button controls",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Tells screen reader the controlled element is expanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the button",required:!1,type:{name:"string"}},{name:"ariaChecked",description:"Indicates the current checked state of the button when acting as a toggle or switch",required:!1,type:{name:"boolean"}},{name:"primary",description:"Provides extra visual weight and identifies the primary action in a set of buttons",required:!1,type:{name:"boolean"}},{name:"destructive",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"size",description:"Changes the size of the button, giving it more or less padding",tags:{values:[{description:"slim | medium | large",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textAlign",description:"Changes the inner text alignment of the button",tags:{values:[{description:"left | center | right",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:`Gives the button a subtle alternative to the default button styling,
appropriate for certain backdrops`,required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"disclosure",description:"Displays the button with a disclosure icon. Defaults to `down` when set to true",tags:{values:[{description:"down | up | select | boolean",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Renders a button that looks like a link",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes plain and outline Button colors (text, borders, icons) the same as the current text color\nAlso adds an underline to `plain` Buttons",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes underline from button text (including on interaction)when monochrome and plain are true",required:!1,type:{name:"boolean"}},{name:"icon",description:"Icon to display to the left of the button content.",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",description:"Disclosure button connected right of the button. Toggles a popover action list.",required:!1,type:{name:"ConnectedDisclosure"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const yS={inheritAttrs:!1},Xe=M(_(b({},yS),{props:{action:null,overrides:{default:()=>({})}},setup(t){const n=t,o=()=>{n.action&&n.action.onAction&&n.action.onAction()},i=p(()=>{if(!n.action)return{};const m=n.action,{onAction:l,content:r}=m,u=J(m,["onAction","content"]);return b(b({},u),n.overrides)});return(l,r)=>t.action?(s(),A(a(ge),me({key:0},a(i),{onClick:o}),{default:y(()=>[oe(U(t.action.content),1)]),_:1},16)):L("",!0)}}));Xe.__docgenInfo={exportName:"default",displayName:"ButtonFrom",description:"",tags:{},props:[{name:"action",required:!1,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"ButtonProps"}]},defaultValue:{func:!1,value:"() => ({})"}}]};const gS="Polaris-ButtonGroup",hS="Polaris-ButtonGroup__Item",bS="Polaris-ButtonGroup--segmented",fS="Polaris-ButtonGroup--fullWidth",vS="Polaris-ButtonGroup--extraTight",xS="Polaris-ButtonGroup--tight",TS="Polaris-ButtonGroup--loose";var ka={ButtonGroup:gS,Item:hS,"Item-plain":"Polaris-ButtonGroup__Item--plain",segmented:bS,"Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:fS,extraTight:vS,tight:xS,loose:TS};const SS={inheritAttrs:!1},Gp=M(_(b({},SS),{setup(t){const n=k(!1),o=ue(),i=p(()=>o.default&&o.default()[0].props),l=p(()=>{const m=i.value&&(i.value.plain===""||i.value.plain);return $(ka.Item,n.value&&ka["Item-focused"],m&&ka["Item-plain"])}),r=()=>{n.value=!0},u=()=>{n.value=!1};return(m,x)=>(s(),d("div",{class:c(a(l)),onFocus:r,onBlur:u},[f(m.$slots,"default")],34))}}));Gp.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const CS=["data-buttongroup-segmented","data-buttongroup-connected-top","data-buttongroup-full-width"],AS={inheritAttrs:!1},tt=M(_(b({},AS),{props:{spacing:null,segmented:{type:Boolean},fullWidth:{type:Boolean},connectedTop:{type:Boolean}},setup(t){const n=t,o=ue(),i=p(()=>{const r=[];return o.default&&o.default().map(u=>{const m=u.children;if(!(typeof m=="string"&&m==="v-if"))if(u.type.toString()==="Symbol(Fragment)"||u.type.toString()==="Symbol()")for(const x of m)r.push(x);else r.push(u)}),r}),l=p(()=>$(ka.ButtonGroup,n.spacing&&ka[n.spacing],n.segmented&&ka.segmented,n.fullWidth&&ka.fullWidth));return(r,u)=>(s(),d("div",{class:c(a(l)),"data-buttongroup-segmented":t.segmented,"data-buttongroup-connected-top":t.connectedTop,"data-buttongroup-full-width":t.fullWidth},[(s(!0),d(G,null,be(a(i),(m,x)=>(s(),A(a(Gp),{key:x},{default:y(()=>[(s(),A(Oe(m)))]),_:2},1024))),128))],10,CS))}}));tt.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"spacing",description:"Determines the space between button group items",required:!1,type:{name:"Spacing"}},{name:"segmented",description:"Join buttons as segmented group",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Buttons will stretch/shrink to occupy the full width",required:!1,type:{name:"boolean"}},{name:"connectedTop",description:"Remove top left and right border radius",required:!1,type:{name:"boolean"}}]};const kS="Polaris-CalloutCard",NS="Polaris-CalloutCard__Image",LS="Polaris-CalloutCard__DismissImage",wS="Polaris-CalloutCard__Content",PS="Polaris-CalloutCard__Title",MS="Polaris-CalloutCard__Buttons",_S="Polaris-CalloutCard__Container",DS="Polaris-CalloutCard__Dismiss",IS="Polaris-CalloutCard--hasDismiss";var jt={CalloutCard:kS,Image:NS,DismissImage:LS,Content:wS,Title:PS,Buttons:MS,Container:_S,Dismiss:DS,hasDismiss:IS};const ds=M({props:{title:null,illustration:null,primaryAction:null,secondaryAction:null},setup(t){const n=Et(),o=p(()=>$(jt.Image,!!n.onDismiss&&jt.DismissImage)),i=p(()=>$(jt.Container,!!n.onDismiss&&jt.hasDismiss)),l=()=>{const r=n.onDismiss;n.onDismiss&&r()};return(r,u)=>(s(),A(a(Ye),null,{default:y(()=>[S("div",{class:c(a(i))},[a(n).onDismiss?(s(),d("div",{key:0,class:c(a(jt).Dismiss)},[C(a(ge),{plain:"",icon:a(os),accessibilityLabel:"Dismiss card",onClick:l},null,8,["icon"])],2)):L("",!0),C(a(pa),null,{default:y(()=>[S("div",{class:c(a(jt).CalloutCard)},[S("div",{class:c(a(jt).Content)},[S("div",{class:c(a(jt).Title)},[C(a(It),null,{default:y(()=>[oe(U(t.title),1)]),_:1})],2),C(a(ut),null,{default:y(()=>[f(r.$slots,"default")]),_:3}),S("div",{class:c(a(jt).Buttons)},[t.secondaryAction?(s(),A(a(tt),{key:0},{default:y(()=>[C(a(Xe),{action:t.primaryAction},null,8,["action"]),C(a(Xe),{action:t.secondaryAction,overrides:{plain:!0}},null,8,["action"])]),_:1})):(s(),A(a(Xe),{key:1,action:t.primaryAction},null,8,["action"]))],2)],2),C(a(Yt),{alt:"",class:c(a(o)),source:t.illustration},null,8,["class","source"])],2)]),_:3})],2)]),_:3}))}});ds.__docgenInfo={exportName:"default",displayName:"CalloutCard",description:"",tags:{},props:[{name:"title",description:"The title of the card",required:!0,type:{name:"string"}},{name:"illustration",description:"URL to the card illustration",required:!0,type:{name:"string"}},{name:"primaryAction",description:"Primary action for the card",required:!0,type:{name:"Action"}},{name:"secondaryAction",description:"Secondary action for the card",required:!1,type:{name:"Action"}}],slots:[{name:"default"}]};const BS="Polaris-Caption";var $S={Caption:BS};const ua=M({setup(t){return(n,o)=>(s(),d("p",{class:c(a($S).Caption)},[f(n.$slots,"default")],2))}});ua.__docgenInfo={exportName:"default",displayName:"Caption",description:"",tags:{},slots:[{name:"default"}]};const FS="Polaris-Card",ES="Polaris-Card--subdued",OS="Polaris-Card--hideOnPrint",qS="Polaris-Card__Header",RS="Polaris-Card__Section",VS="Polaris-Card__SectionHeader",HS="Polaris-Card__Subsection",US="Polaris-Card__Footer",jS="Polaris-Card__LeftJustified";var Tt={Card:FS,subdued:ES,"Section-hideOnPrint":"Polaris-Card__Section--hideOnPrint",hideOnPrint:OS,Header:qS,Section:RS,"Section-fullWidth":"Polaris-Card__Section--fullWidth","Section-flush":"Polaris-Card__Section--flush","Section-subdued":"Polaris-Card__Section--subdued",SectionHeader:VS,Subsection:HS,Footer:US,LeftJustified:jS};const ps=M({props:{actions:null},setup(t){const n=ue(),o=p(()=>{var i,l,r,u,m;return n.title&&n.title().length===1?((i=n.title()[0])==null?void 0:i.type.toString())==="Symbol(Text)"||((l=n.title()[0])==null?void 0:l.type.toString())==="Symbol()"?!0:n.title()[0].children&&((r=n.title()[0].children)==null?void 0:r.length)===1&&(((u=n.title()[0].children)==null?void 0:u[0].type.toString())==="Symbol(Text)"||((m=n.title()[0].children)==null?void 0:m[0].type.toString())==="Symbol()"):!1});return(i,l)=>(s(),d("div",{class:c(a(Tt).Header)},[a(n).default||t.actions?(s(),A(a(qe),{key:0,alignment:"baseline",noItemWrap:""},{default:y(()=>[C(a(Ct),{fill:!0},{default:y(()=>[a(o)?(s(),A(a(It),{key:1},{default:y(()=>[f(i.$slots,"title")]),_:3})):f(i.$slots,"title",{key:0})]),_:3}),t.actions?(s(),A(a(Ct),{key:0},{default:y(()=>[C(a(tt),null,{default:y(()=>[(s(!0),d(G,null,be(t.actions,(r,u)=>(s(),A(a(Xe),{key:u,action:r,overrides:{plain:!0}},null,8,["action"]))),128))]),_:1})]),_:1})):L("",!0),a(n).default?(s(),A(a(Ct),{key:1},{default:y(()=>[f(i.$slots,"default")]),_:3})):L("",!0)]),_:3})):(s(),d(G,{key:1},[a(o)?(s(),A(a(It),{key:1},{default:y(()=>[f(i.$slots,"title")]),_:3})):f(i.$slots,"title",{key:0})],64))],2))}});ps.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}}],slots:[{name:"title"},{name:"default"}]};const pa=M({props:{title:null,subdued:{type:Boolean},flush:{type:Boolean},fullWidth:{type:Boolean},hideOnPrint:{type:Boolean},actions:null},setup(t){const n=t,o=ue(),i=p(()=>$(Tt.Section,n.flush&&Tt["Section-flush"],n.subdued&&Tt["Section-subdued"],n.fullWidth&&Tt["Section-fullWidth"],n.hideOnPrint&&Tt["Section-hideOnPrint"])),l=p(()=>{var r,u,m,x,v;return o.title&&o.title().length===1?((r=o.title()[0])==null?void 0:r.type.toString())==="Symbol(Text)"||((u=o.title()[0])==null?void 0:u.type.toString())==="Symbol()"?!0:o.title()[0].children&&((m=o.title()[0].children)==null?void 0:m.length)===1&&(((x=o.title()[0].children)==null?void 0:x[0].type.toString())==="Symbol(Text)"||((v=o.title()[0].children)==null?void 0:v[0].type.toString())==="Symbol()"):!0});return(r,u)=>(s(),d("div",{class:c(a(i))},[t.title||a(ye)(a(o).title)||t.actions?(s(),d("div",{key:0,class:c(a(Tt).SectionHeader)},[t.actions?(s(),A(a(qe),{key:0,noItemWrap:"",alignment:"baseline"},{default:y(()=>[C(a(Ct),{fill:""},{default:y(()=>[a(l)?(s(),A(a(da),{key:1},{default:y(()=>[a(ye)(a(o).title)?f(r.$slots,"title",{key:0}):(s(),d(G,{key:1},[oe(U(t.title),1)],64))]),_:3})):f(r.$slots,"title",{key:0})]),_:3}),C(a(tt),null,{default:y(()=>[(s(!0),d(G,null,be(t.actions,(m,x)=>(s(),A(a(Xe),{key:x,index:x,action:m,overrides:{plain:!0}},null,8,["index","action"]))),128))]),_:1})]),_:3})):(s(),d(G,{key:1},[a(l)?(s(),A(a(da),{key:1},{default:y(()=>[a(ye)(a(o).title)?f(r.$slots,"title",{key:0}):(s(),d(G,{key:1},[oe(U(t.title),1)],64))]),_:3})):f(r.$slots,"title",{key:0})],64))],2)):L("",!0),f(r.$slots,"default")],2))}});pa.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subdued",required:!1,type:{name:"boolean"}},{name:"flush",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"title"},{name:"default"}]};const Xp=M({setup(t){return(n,o)=>(s(),d("div",{class:c(a(Tt).Subsection)},[f(n.$slots,"default")],2))}});Xp.__docgenInfo={exportName:"default",displayName:"Subsection",description:"",tags:{},slots:[{name:"default"}]};const Ye=M({props:{title:null,subdued:{type:Boolean},sectioned:{type:Boolean},actions:null,primaryFooterAction:null,secondaryFooterActions:null,secondaryFooterActionsDisclosureText:null,footerActionAlignment:{default:"right"},hideOnPrint:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=ue(),l=k(!1),r=()=>{l.value=!l.value},u=p(()=>$(Tt.Card,n.subdued&&Tt.subdued,n.hideOnPrint&&Tt.hideOnPrint)),m=p(()=>$(Tt.Footer,n.footerActionAlignment==="left"&&Tt.LeftJustified));return Ge("WithinContentContext",!0),(x,v)=>(s(),d("div",{class:c(a(u))},[t.title||a(ye)(a(i).title)||t.actions?(s(),A(a(ps),{key:0,actions:t.actions},{title:y(()=>[a(ye)(a(i).title)?f(x.$slots,"title",{key:0}):(s(),d(G,{key:1},[oe(U(t.title),1)],64))]),_:3},8,["actions"])):L("",!0),t.sectioned?(s(),A(a(pa),{key:1},{default:y(()=>[f(x.$slots,"default")]),_:3})):f(x.$slots,"default",{key:2}),t.primaryFooterAction||t.secondaryFooterActions&&t.secondaryFooterActions.length?(s(),d("div",{key:3,class:c(a(m))},[t.footerActionAlignment==="right"?(s(),A(a(tt),{key:0},{default:y(()=>[t.secondaryFooterActions&&t.secondaryFooterActions.length===1?(s(),A(a(Xe),{key:0,action:t.secondaryFooterActions[0]},null,8,["action"])):t.secondaryFooterActions&&t.secondaryFooterActions.length>1?(s(),A(a(et),{key:1,active:l.value,onClose:r},{activator:y(()=>[C(a(ge),{disclosure:!0,onClick:r},{default:y(()=>[oe(U(t.secondaryFooterActionsDisclosureText||a(o).Polaris.Common.more),1)]),_:1})]),content:y(()=>[C(a(Je),{items:t.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):L("",!0),t.primaryFooterAction?(s(),A(a(Xe),{key:2,action:t.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):L("",!0)]),_:1})):(s(),A(a(tt),{key:1},{default:y(()=>[t.primaryFooterAction?(s(),A(a(Xe),{key:0,action:t.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):L("",!0),t.secondaryFooterActions&&t.secondaryFooterActions.length===1?(s(),A(a(Xe),{key:1,action:t.secondaryFooterActions[0]},null,8,["action"])):t.secondaryFooterActions&&t.secondaryFooterActions.length>1?(s(),A(a(et),{key:2,active:l.value,onClose:r},{activator:y(()=>[C(a(ge),{disclosure:"",onClick:r},{default:y(()=>[oe(U(t.secondaryFooterActionsDisclosureText||a(o).Polaris.Common.more),1)]),_:1})]),content:y(()=>[C(a(Je),{items:t.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):L("",!0)]),_:1}))],2)):L("",!0)],2))}});Ye.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",description:"Title content for the card *",required:!1,type:{name:"string"}},{name:"subdued",description:"A less prominent card",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Auto wrap content in section",required:!1,type:{name:"boolean"}},{name:"actions",description:"Card header actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}},{name:"primaryFooterAction",description:"Primary action in the card footer",required:!1,type:{name:"ComplexAction"}},{name:"secondaryFooterActions",description:"Secondary actions in the card footer",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}},{name:"secondaryFooterActionsDisclosureText",description:"The content of the disclosure button rendered when there is more than one secondary footer action",required:!1,type:{name:"string"}},{name:"footerActionAlignment",description:"Alignment of the footer actions on the card, defaults to right",required:!1,type:{name:"union",elements:[{name:'"right"'},{name:'"left"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const zS="Polaris-Checkbox",WS="Polaris-Checkbox__Input",GS="Polaris-Checkbox--keyFocused",XS="Polaris-Checkbox__Backdrop",KS="Polaris-Checkbox__Icon",YS="Polaris-Checkbox--hover",ZS="Polaris-Checkbox--error";var oa={Checkbox:zS,Input:WS,keyFocused:GS,Backdrop:XS,"Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:KS,hover:YS,error:ZS};const yc=t=>`${t}Error`,QS="Polaris-Choice",JS="Polaris-Choice--labelHidden",eC="Polaris-Choice__Label",tC="Polaris-Choice__Control",aC="Polaris-Choice--disabled",nC="Polaris-Choice__Descriptions",oC="Polaris-Choice__HelpText";var zt={Choice:QS,labelHidden:JS,Label:eC,Control:tC,disabled:aC,Descriptions:nC,HelpText:oC};const gc=t=>`${t}HelpText`,iC="Polaris-InlineError",sC="Polaris-InlineError__Icon";var Bu={InlineError:iC,Icon:sC};const lC=["id"],rC={key:1},Pa=M({props:{message:null,fieldID:null},setup(t){return(n,o)=>t.message?(s(),d("div",{key:0,id:a(yc)(t.fieldID),class:c(a(Bu).InlineError)},[S("div",{class:c(a(Bu).Icon)},[C(a(re),{source:a(gh)},null,8,["source"])],2),typeof t.message=="object"?(s(),A(Oe(t.message),{key:0})):(s(),d("div",rC,U(t.message),1))],10,lC)):L("",!0)}});Pa.__docgenInfo={exportName:"default",displayName:"InlineError",description:"",tags:{},props:[{name:"message",description:"Content briefly explaining how to resolve the invalid form field input.",required:!0,type:{name:"ErrorType"}},{name:"fieldID",description:"Unique identifier of the invalid form field that the message describes",required:!0,type:{name:"string"}}]};const cC={key:0},uC=["id"],hc=M({props:{id:null,disabled:{type:Boolean},error:null,labelHidden:{type:Boolean}},setup(t){const n=t,o=p(()=>$(zt.Choice,n.labelHidden&&zt.labelHidden,n.disabled&&zt.disabled));return(i,l)=>t.error&&typeof t.error!="boolean"||i.$slots["help-text"]?(s(),d("div",cC,[S("label",{class:c(a(o)),onClick:l[0]||(l[0]=r=>i.$emit("click")),onMouseover:l[1]||(l[1]=r=>i.$emit("mouseover")),onMouseout:l[2]||(l[2]=r=>i.$emit("mouseout"))},[S("span",{class:c(a(zt).Control)},[f(i.$slots,"default")],2),S("span",{class:c(a(zt).Label)},[f(i.$slots,"label")],2)],34),S("div",{class:c(a(zt).Descriptions)},[i.$slots["help-text"]?(s(),d("div",{key:0,id:a(gc)(t.id),class:c(a(zt).HelpText)},[f(i.$slots,"help-text")],10,uC)):L("",!0),t.error&&typeof t.error!="boolean"?(s(),A(a(Pa),{key:1,fieldID:t.id,message:t.error},null,8,["fieldID","message"])):L("",!0)],2)])):(s(),d("label",{key:1,class:c(a(o)),onClick:l[3]||(l[3]=r=>i.$emit("click")),onMouseover:l[4]||(l[4]=r=>i.$emit("mouseover")),onMouseout:l[5]||(l[5]=r=>i.$emit("mouseout"))},[S("span",{class:c(a(zt).Control)},[f(i.$slots,"default")],2),S("span",{class:c(a(zt).Label)},[f(i.$slots,"label")],2)],34))}});hc.__docgenInfo={exportName:"default",displayName:"Choice",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the choice",required:!0,type:{name:"string"}},{name:"disabled",description:"Whether the associated form control is disabled",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"mouseover"},{name:"mouseout"}],slots:[{name:"default"},{name:"label"},{name:"help-text"}]};const dC=["id","role","name","value","checked","disabled","aria-invalid","aria-controls","aria-describedby"],Ma=M({props:{ariaControls:null,ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},id:null,name:null,value:{type:[String,Boolean]},modelValue:{type:[String,Boolean]},error:null},emits:["focus","change","update:modelValue","blur"],setup(t,{emit:n}){const o=t,i=ve("withinListboxContext",!1),l=k(!1),r=k(!1),u=ue(),m=p(()=>{var q;return(q=u["help-text"])==null?void 0:q.call(u)}),{useUniqueId:x}=Be(),v=p(()=>x("Checkbox",o.id)),g=p(()=>o.checked==="indeterminate"),h=p(()=>!g.value&&Boolean(o.checked)||typeof o.modelValue=="boolean"&&o.modelValue===!0),T=p(()=>g.value?hh:lc),N=p(()=>$(oa.Checkbox,o.error&&oa.error)),w=p(()=>$(oa.Backdrop,l.value&&oa.hover)),D=p(()=>$(oa.Input,g.value&&oa["Input-indeterminate"],r.value&&oa.keyFocused)),B=p(()=>g.value?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":h.value}),E=p(()=>{const q=[];return o.ariaDescribedBy&&q.push(o.ariaDescribedBy),o.error&&typeof o.error!="boolean"&&q.push(yc(v.value)),m.value&&q.push(gc(v.value)),q.length?q.join(" "):void 0}),R=()=>{r.value=!0,n("focus")},z=q=>{const j=q.target;n("change",q),n("update:modelValue",j.checked)},Z=()=>{r.value=!1,n("blur")},F=q=>{const{key:j}=q;(j===We.Space||j===We.Tab)&&(r.value||(r.value=!0))};function W(q){q.stopPropagation()}return(q,j)=>(s(),A(a(hc),{id:a(v),error:t.error,disabled:t.disabled,labelHidden:t.labelHidden,onMouseover:j[0]||(j[0]=le=>l.value=!0),onMouseout:j[1]||(j[1]=le=>l.value=!1)},Ue({default:y(()=>[S("span",{class:c(a(N))},[S("input",me({id:a(v),role:a(i)?"presentation":"checkbox",name:t.name,value:t.value||t.modelValue,type:"checkbox",checked:a(h),disabled:t.disabled,class:a(D),"aria-invalid":t.error!==null,"aria-controls":t.ariaControls,"aria-describedby":a(E),onFocus:R,onChange:z,onBlur:Z,onKeyup:F},a(B)),null,16,dC),S("span",{class:c(a(w)),onClick:W,onMouseup:W},null,34),S("span",{class:c(a(oa).Icon)},[C(a(re),{source:a(T)},null,8,["source"])],2)],2)]),_:2},[a(u).label?{name:"label",fn:y(()=>[f(q.$slots,"label")])}:void 0,a(u)["help-text"]?{name:"help-text",fn:y(()=>[f(q.$slots,"help-text")])}:void 0]),1032,["id","error","disabled","labelHidden"]))}});Ma.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"ariaControls",description:"Indicates the ID of the element that is controlled by the checkbox",required:!1,type:{name:"string"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the checkbox",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"indeterminate"'}]}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const pC="Polaris-ChoiceList",mC="Polaris-ChoiceList--titleHidden",yC="Polaris-ChoiceList__Title",gC="Polaris-ChoiceList__Choices",hC="Polaris-ChoiceList__ChoiceChildren",bC="Polaris-ChoiceList__ChoiceError";var ba={ChoiceList:pC,titleHidden:mC,Title:yC,Choices:gC,ChoiceChildren:hC,ChoiceError:bC};const fC="Polaris-RadioButton",vC="Polaris-RadioButton__Input",xC="Polaris-RadioButton--keyFocused",TC="Polaris-RadioButton__Backdrop",SC="Polaris-RadioButton--hover";var Lo={RadioButton:fC,Input:vC,keyFocused:xC,Backdrop:TC,hover:SC};const CC=["id","name","value","checked","disabled","aria-describedby"],Ho=M({props:{ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},id:null,name:null,value:null,modelValue:null},emits:["focus","change","update:modelValue","blur"],setup(t,{emit:n}){const o=t,i=k(!1),l=k(!1),r=ue(),u=p(()=>{var B;return(B=r["help-text"])==null?void 0:B.call(r)}),{useUniqueId:m}=Be(),x=p(()=>m("RadioButton",o.id)),v=p(()=>o.checked||o.modelValue===o.value),g=p(()=>$(Lo.Backdrop,l.value&&Lo.hover)),h=p(()=>$(Lo.Input,i.value&&Lo.keyFocused)),T=p(()=>{const B=[];return o.ariaDescribedBy&&B.push(o.ariaDescribedBy),u.value&&B.push(gc(x.value)),B.length?B.join(" "):void 0}),N=B=>{const E=B.target;n("change",B),n("update:modelValue",E.value)},w=()=>{n("blur"),i.value=!1},D=()=>{i.value||(i.value=!0)};return(B,E)=>(s(),A(a(hc),{id:a(x),disabled:t.disabled,labelHidden:t.labelHidden,onMouseover:E[1]||(E[1]=R=>l.value=!0),onMouseout:E[2]||(E[2]=R=>l.value=!1)},Ue({default:y(()=>[S("span",{class:c(a(Lo).RadioButton)},[S("input",{id:a(x),name:t.name||a(x),value:t.value,type:"radio",checked:a(v),disabled:t.disabled,class:c(a(h)),"aria-describedby":a(T),onFocus:E[0]||(E[0]=R=>B.$emit("focus")),onChange:N,onBlur:w,onKeyup:D},null,42,CC),S("span",{class:c(a(g))},null,2)],2)]),_:2},[a(r).label?{name:"label",fn:y(()=>[f(B.$slots,"label")])}:void 0,a(r)["help-text"]?{name:"help-text",fn:y(()=>[f(B.$slots,"help-text")])}:void 0]),1032,["id","disabled","labelHidden"]))}});Ho.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the the radio button",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Radio button is selected",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const AC=["id","aria-invalid"],kC=["innerHTML"],qt=M({props:{choices:null,modelValue:null,name:null,allowMultiple:{type:Boolean},titleHidden:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(t,{emit:n}){const o=t,{useUniqueId:i}=Be(),l=p(()=>i("ChoiceList",o.name)),r=p(()=>o.allowMultiple?`${l.value}Multiple`:l.value),u=p(()=>$(ba.ChoiceList,o.titleHidden&&ba.titleHidden)),m=g=>o.allowMultiple?o.modelValue.includes(g.value):o.modelValue===g.value,x=g=>{const h=g.target;return h.checked?o.allowMultiple?[...o.modelValue,h.value]:h.value:Array.isArray(o.modelValue)?o.modelValue.filter(T=>T!==h.value):[]},v=g=>{n("update:modelValue",x(g)),n("change",g)};return(g,h)=>(s(),d("fieldset",{id:a(r),class:c(a(u)),"aria-invalid":t.error!==null},[S("legend",{class:c(a(ba).Title)},[f(g.$slots,"default")],2),S("ul",{class:c(a(ba).Choices)},[(s(!0),d(G,null,be(t.choices,(T,N)=>(s(),d("li",{key:N},[(s(),A(Oe(t.allowMultiple?a(Ma):a(Ho)),{name:a(r),value:T.value,checked:m(T),disabled:T.disabled||t.disabled,ariaDescribedBy:t.error&&T.describedByError?a(yc)(a(r)):null,onChange:v},Ue({_:2},[T.label?{name:"label",fn:y(()=>[S("span",null,U(T.label),1)])}:void 0,T.helpText?{name:"help-text",fn:y(()=>[S("span",null,U(T.helpText),1)])}:void 0]),1032,["name","value","checked","disabled","ariaDescribedBy"])),typeof T.renderChildren=="string"?(s(),d("div",{key:0,innerHTML:T.renderChildren,class:c(a(ba).ChoiceChildren)},null,10,kC)):(s(),A(Oe(T.renderChildren),{key:1,class:c(a(ba).ChoiceChildren)},null,8,["class"]))]))),128))],2),t.error?(s(),d("div",{key:0,class:c(a(ba).ChoiceError)},[C(a(Pa),{fieldID:a(r),message:t.error},null,8,["fieldID","message"])],2)):L("",!0)],10,AC))}});qt.__docgenInfo={exportName:"default",displayName:"ChoiceList",description:"",tags:{},props:[{name:"choices",description:"Collection of choices",required:!0,type:{name:"Array",elements:[{name:"Choice"}]}},{name:"modelValue",description:"V-model will automatically bind to this prop",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allow merchants to select multiple options at once",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Toggles display of the title",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable all choices",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}}],slots:[{name:"default"}]};const NC="Polaris-Collapsible",LC="Polaris-Collapsible--isFullyClosed",wC="Polaris-Collapsible--expandOnPrint";var Ir={Collapsible:NC,isFullyClosed:LC,expandOnPrint:wC};const PC=["id","aria-hidden"],io=M({props:{id:null,expandOnPrint:{type:Boolean},open:{type:Boolean},transition:null},setup(t){const n=t,o=k(0),i=k("idle"),l=k(null),r=k(n.open),u=p(()=>i.value==="idle"&&n.open&&r.value),m=p(()=>i.value==="idle"&&!n.open&&!r.value),x=p(()=>$(Ir.Collapsible,m.value&&Ir.isFullyClosed,n.expandOnPrint&&Ir.expandOnPrint)),v=p(()=>_(b({},n.transition&&{transitionDuration:`${n.transition.duration}`,transitionTimingFunction:`${n.transition.timingFunction}`}),{maxHeight:u.value?"none":`${o.value}px`,overflow:u.value?"visible":"hidden"})),g=({target:h})=>{h===l.value&&(i.value="idle",r.value=n.open)};return Ee(()=>[n.open,r.value],()=>{n.open!==r.value&&(i.value="measuring")}),Jt(()=>{if(!!l.value)switch(i.value){case"idle":break;case"measuring":o.value=l.value.scrollHeight,i.value="animating";break;case"animating":o.value=n.open?l.value.scrollHeight:0}}),Se(()=>{!open||!l.value||(o.value=l.value.scrollHeight)}),(h,T)=>(s(),d("div",{id:t.id,style:Fe(a(v)),ref_key:"collapsibleContainerRef",ref:l,class:c(a(x)),onTransitionend:g,"aria-hidden":!t.open},[t.expandOnPrint||!a(m)?f(h.$slots,"default",{key:0}):L("",!0)],46,PC))}});io.__docgenInfo={exportName:"default",displayName:"Collapsible",description:"",tags:{},props:[{name:"id",description:"Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component\u2019s aria-controls prop.",required:!0,type:{name:"string"}},{name:"expandOnPrint",description:"Option to show collapsible content when printing",required:!1,type:{name:"boolean"}},{name:"open",description:"Toggle whether the collapsible is expanded or not.",required:!0,type:{name:"boolean"}},{name:"transition",description:"Assign transition properties to the collapsible",required:!1,type:{name:"Transition"}}],slots:[{name:"default"}]};function Br(t){const n=t.toString(16);return n.length===1?`0${n}`:n}function MC(t,n){const o=t/60,i=1-Math.abs(o%2-1),l=n*i;let r=0,u=0,m=0;return o>=0&&o<=1&&(r=n,u=l,m=0),o>=1&&o<=2&&(r=l,u=n,m=0),o>=2&&o<=3&&(r=0,u=n,m=l),o>=3&&o<=4&&(r=0,u=l,m=n),o>=4&&o<=5&&(r=l,u=0,m=n),o>=5&&o<=6&&(r=n,u=0,m=l),{red:r,green:u,blue:m}}function _C(t,n="b"){const{alpha:o=1}=t,i=t.red/255,l=t.green/255,r=t.blue/255,u=Math.max(i,l,r),m=Math.min(i,l,r),x=u-m,v=(u+m)/2;let g=0;if(u===0)g=0;else if(n==="b")g=x/u;else if(n==="l"){const w=v>.5?x/(2-u-m):x/(u+m);g=Number.isNaN(w)?0:w}let h=0;switch(u){case i:h=(l-r)/x+(l<r?6:0);break;case l:h=(r-i)/x+2;break;case r:h=(i-l)/x+4;break}const T=h/6*360,N=ca(T,0,360);return{hue:N?No(N,2):0,saturation:No(ca(g,0,1),4),brightness:No(ca(u,0,1),4),lightness:No(v,4),alpha:No(o,4)}}function DC(t){if(t.length===4){const l=(x,v)=>t.slice(x,v).repeat(2),r=parseInt(l(1,2),16),u=parseInt(l(2,3),16),m=parseInt(l(3,4),16);return{red:r,green:u,blue:m}}const n=parseInt(t.slice(1,3),16),o=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return{red:n,green:o,blue:i}}function IC({red:t,green:n,blue:o}){return`#${Br(t)}${Br(n)}${Br(o)}`}function Zi(t){const{hue:n,saturation:o,brightness:i}=t,r=t.alpha||1,u=i*o;let{red:m,green:x,blue:v}=MC(n,u);const g=i-u;return m+=g,x+=g,v+=g,{red:Math.round(m*255),green:Math.round(x*255),blue:Math.round(v*255),alpha:r}}function BC(t){return IC(Zi(_(b({},t),{alpha:1})))}function $C(t){const{hue:n,saturation:o,brightness:i,alpha:l=1}=_C(t,"b");return{hue:n,saturation:o,brightness:i,alpha:l}}const FC="Polaris-ColorPicker",EC="Polaris-ColorPicker__MainColor",OC="Polaris-ColorPicker--fullWidth",qC="Polaris-ColorPicker__Dragger",RC="Polaris-ColorPicker__ColorLayer",VC="Polaris-ColorPicker__HuePicker",HC="Polaris-ColorPicker__AlphaPicker",UC="Polaris-ColorPicker__Slidable";var Xt={ColorPicker:FC,MainColor:EC,fullWidth:OC,Dragger:qC,ColorLayer:RC,HuePicker:VC,AlphaPicker:HC,Slidable:UC};const jC=["data-dragging"],ms=M({props:{draggerX:{default:0},draggerY:{default:0}},emits:["change","dragger-height"],setup(t,{emit:n}){const o=t,i=k(!1),l=k(null),r=k(null),u=k(0),m=k(0),x=p(()=>({transform:`translate3d(${u.value||o.draggerX}px, ${m.value||o.draggerY}px, 0)`}));sc||window.addEventListener("touchmove",D=>{i.value&&D.preventDefault()},{passive:!1}),Se(()=>{r.value&&n("dragger-height",r.value.clientWidth)});const v=D=>{if(w(D)){const{clientX:B,clientY:E}=D;T(B,E)}i.value=!0},g=()=>{i.value=!1},h=D=>{if(D.stopImmediatePropagation(),D.stopPropagation(),D.cancelable&&D.preventDefault(),N(D)){const E=D;T(E.clientX,E.clientY);return}const B=D;T(B.touches[0].clientX,B.touches[0].clientY)},T=(D,B)=>{if(l.value){const E=l.value.getBoundingClientRect(),R=D-E.left,z=B-E.top;n("change",{x:R,y:z})}};function N(D){return D.type==="mousemove"}function w(D){return D.type==="mousedown"}return(D,B)=>(s(),d("div",{ref_key:"slidableRef",ref:l,class:c(a(Xt).Slidable),"data-dragging":i.value,onMousedown:v,onTouchstart:v},[i.value?(s(),A(a(it),{key:0,event:"mouseup",handler:g})):L("",!0),i.value?(s(),A(a(it),{key:1,event:"mousemove",handler:h,passive:!1})):L("",!0),i.value?(s(),A(a(it),{key:2,event:"touchmove",handler:h,passive:!1})):L("",!0),i.value?(s(),A(a(it),{key:3,event:"touchend",handler:g})):L("",!0),i.value?(s(),A(a(it),{key:4,event:"touchcancel",handler:g})):L("",!0),S("div",{style:Fe(a(x)),class:c(a(Xt).Dragger),ref_key:"draggerRef",ref:r},null,6)],42,jC))}});ms.__docgenInfo={exportName:"default",displayName:"Slidable",description:"",tags:{},props:[{name:"draggerX",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"draggerY",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"change",type:{names:["{ x: number; y: number; }"]}},{name:"dragger-height",type:{names:["number"]}}]};const Kp=M({props:{color:null,alpha:null},emits:["change"],setup(t,{emit:n}){const o=t,i=k(null),l=k(0),r=k(0),u=p(()=>bh(o.alpha,l.value,r.value)),m=p(()=>{const{red:h,green:T,blue:N}=Zi(o.color),w=`${h}, ${T}, ${N}`;return`linear-gradient(to top, rgba(${w}, 0) 18px, rgba(${w}, 1) calc(100% - 18px))`});Se(()=>{x()});const x=()=>{i.value&&(l.value=i.value.clientHeight)},v=h=>{r.value=h},g=({y:h})=>{const T=fh(h,l.value);n("change",T)};return(h,T)=>(s(),d("div",{class:c(a(Xt).AlphaPicker),ref_key:"alphaPickerRef",ref:i},[S("div",{class:c(a(Xt).ColorLayer),style:Fe({background:a(m)})},"\xA0",6),C(a(ms),{draggerY:a(u),draggerX:0,onChange:g,onDraggerHeight:v},null,8,["draggerY"])],2))}});Kp.__docgenInfo={exportName:"default",displayName:"AlphaPicker",description:"",tags:{},props:[{name:"color",required:!0,type:{name:"HSBColor"}},{name:"alpha",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const Yp=M({props:{hue:null},emits:["change"],setup(t,{emit:n}){const o=t,i=k(null),l=k(0),r=k(0),u=p(()=>vh(o.hue,l.value,r.value));Se(()=>{m()});const m=()=>{i.value&&(l.value=i.value.clientHeight)},x=g=>{r.value=g},v=({y:g})=>{const h=xh(g,l.value);n("change",h)};return(g,h)=>(s(),d("div",{class:c(a(Xt).HuePicker),ref_key:"huePickerRef",ref:i},[C(a(ms),{draggerY:a(u),draggerX:0,onChange:v,onDraggerHeight:x},null,8,["draggerY"])],2))}});Yp.__docgenInfo={exportName:"default",displayName:"HuePicker",description:"",tags:{},props:[{name:"hue",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const zC=["id","onMousedown"],ys=M({props:{id:null,modelValue:null,allowAlpha:{type:Boolean},fullWidth:{type:Boolean},outputType:null},emits:["change","update:modelValue"],setup(t,{emit:n}){const o=t,i=200,l=k(null),r=Wi({hue:0,saturation:0,brightness:0,alpha:1}),u=Wi({width:0,height:0}),m=R=>{R.preventDefault()},x=p(()=>$(Xt.ColorPicker,o.fullWidth&&Xt.fullWidth)),v=p(()=>r.alpha!==void 0&&o.allowAlpha?r.alpha:1),g=p(()=>{const{red:R,green:z,blue:Z}=Zi({hue:r.hue,saturation:1,brightness:1});return`rgba(${R}, ${z}, ${Z}, ${v.value})`}),h=p(()=>ca(r.saturation*u.width,0,u.width)),T=p(()=>ca(u.height-r.brightness*u.height,0,u.height)),N=p(()=>{if(o.outputType==="hex")return BC(r);if(o.outputType==="rgb"){const R=Zi(r);return`rgba(${R.red}, ${R.green}, ${R.blue}, ${v.value})`}return r}),w=Kt(()=>{l.value&&(u.width=l.value.clientWidth,u.height=l.value.clientHeight)},i,{leading:!0,trailing:!0,maxWait:i});if(typeof o.modelValue=="object"&&Object.assign(r,o.modelValue),typeof o.modelValue=="string"){let R;if(/#[0-9abcdef]{3,6}/.test(o.modelValue))R=_(b({},DC(o.modelValue)),{alpha:1});else{const z=o.modelValue.replace(/^rgba?\(|\s+|\)$/g,"").split(",");R={red:parseInt(z[0],10),green:parseInt(z[1],10),blue:parseInt(z[2],10),alpha:z[2]?parseFloat(z[3]):1}}Object.assign(r,_(b({},$C(R)),{alpha:R.alpha}))}Se(()=>{l.value&&(u.width=l.value.clientWidth,u.height=l.value.clientHeight)});const D=R=>{r.hue=R,n("change",N.value),n("update:modelValue",N.value)},B=R=>{r.alpha=R,n("change",N.value),n("update:modelValue",N.value)},E=({x:R,y:z})=>{r.saturation=ca(R/u.width,0,1),r.brightness=ca(1-z/u.height,0,1),n("change",N.value),n("update:modelValue",N.value)};return(R,z)=>(s(),d("div",{id:t.id,class:c(a(x)),onMousedown:bp(m,["prevent"])},[S("div",{ref_key:"mainColorRef",ref:l,class:c(a(Xt).MainColor)},[S("div",{class:c(a(Xt).ColorLayer),style:Fe({backgroundColor:a(g)})},"\xA0",6),C(a(ms),{draggerX:a(h),draggerY:a(T),onChange:E},null,8,["draggerX","draggerY"])],2),C(a(Yp),{hue:a(r).hue,onChange:D},null,8,["hue"]),t.allowAlpha?(s(),A(a(Kp),{key:0,alpha:a(v),color:a(r),onChange:B},null,8,["alpha","color"])):L("",!0),C(a(it),{event:"resize",handler:a(w)},null,8,["handler"])],42,zC))}});ys.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:`The currently selected color.
The color can be HSB object (same with Shopify) or RGB, Hex string`,required:!0,type:{name:"union",elements:[{name:"Color"},{name:"string"}]}},{name:"allowAlpha",description:"Allow user to select an alpha value",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow HuePicker to take the full width",required:!1,type:{name:"boolean"}},{name:"outputType",description:"Color output format",required:!1,type:{name:"union",elements:[{name:'"hsb"'},{name:'"rgb"'},{name:'"hex"'}]}}],events:[{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const WC="Polaris-Combobox__Listbox";var GC={Listbox:WC};const _a=M({props:{allowMultiple:{type:Boolean},preferredPosition:{default:"below"},willLoadMoreOptions:{type:Boolean},height:null},emits:["close","scrolled-to-bottom"],setup(t,{emit:n}){const o=t;Ge("comboboxListboxOptionContext",{allowMultiple:o.allowMultiple});const i=k(!1),l=k(""),r=k(""),u=k(""),m=k(!1),x=k(!1),v=k(null),g=ue(),h=p(()=>{var F;return(F=g.default)==null?void 0:F.call(g)}),T=p(()=>!i.value&&h),N=()=>{x.value||(i.value=!1,n("close")),l.value=""},w=()=>{i.value=!0,l.value=""},D=()=>{if(o.allowMultiple)x.value=!0;else{N(),l.value="";return}},B=()=>{T.value&&w()},E=()=>{T.value&&w()},R=()=>{x.value=!1,i.value&&N()},z={activeOptionId:l.value,expanded:i.value,listboxId:u.value,setTextFieldFocused:F=>{m.value=F},setTextFieldLabelId:F=>{r.value=F},onTextFieldFocus:B,onTextFieldChange:E,onTextFieldBlur:R};Ge("comboboxTextFieldContext",z);const Z={listboxId:u.value,textFieldLabelId:r.value,textFieldFocused:m.value,willLoadMoreOptions:o.willLoadMoreOptions,onOptionSelected:D,setActiveOptionId:F=>{l.value=F},setListboxId:F=>{u.value=F},onKeyToBottom:()=>{n("scrolled-to-bottom")}};return Ge("comboboxListboxContext",Z),(F,W)=>(s(),A(a(et),{ref_key:"popoverRef",ref:v,active:i.value,onClose:N,autofocusTarget:"none",preventFocusOnClose:"",fullWidth:"",preferInputActivator:!1,preferredPosition:t.preferredPosition},Ue({_:2},[a(g).activator?{name:"activator",fn:y(()=>[f(F.$slots,"activator")])}:void 0,a(g).default?{name:"content",fn:y(()=>[C(a(cs),{onScrolledToBottom:W[0]||(W[0]=q=>F.$emit("scrolled-to-bottom")),height:t.height},{default:y(()=>[S("div",{class:c(a(GC).Listbox)},[f(F.$slots,"default")],2)]),_:3},8,["height"])])}:void 0]),1032,["active","preferredPosition"]))}});_a.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"},defaultValue:{func:!1,value:"'below'"}},{name:"willLoadMoreOptions",required:!1,type:{name:"boolean"}},{name:"height",required:!1,type:{name:"string"}}],events:[{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"default"}]};function Fo(t){return`${t}Label`}const XC="Polaris-TextField",KC="Polaris-TextField--multiline",YC="Polaris-TextField__Input",ZC="Polaris-TextField--hasValue",QC="Polaris-TextField--focus",JC="Polaris-TextField__VerticalContent",eA="Polaris-TextField__Backdrop",tA="Polaris-TextField--error",aA="Polaris-TextField--readOnly",nA="Polaris-TextField--disabled",oA="Polaris-TextField__Prefix",iA="Polaris-TextField--suggestion",sA="Polaris-TextField__Suffix",lA="Polaris-TextField__CharacterCount",rA="Polaris-TextField__AlignFieldBottom",cA="Polaris-TextField__ClearButton",uA="Polaris-TextField__Hidden",dA="Polaris-TextField__Spinner",pA="Polaris-TextField__SpinnerIcon",mA="Polaris-TextField__Resizer",yA="Polaris-TextField__DummyInput",gA="Polaris-TextField__Segment",hA="Polaris-TextField--monospaced";var we={TextField:XC,multiline:KC,Input:YC,hasValue:ZC,focus:QC,VerticalContent:JC,Backdrop:eA,error:tA,readOnly:aA,disabled:nA,Prefix:oA,suggestion:iA,"Input-hasClearButton":"Polaris-TextField__Input--hasClearButton","Input-suffixed":"Polaris-TextField__Input--suffixed","Input-alignRight":"Polaris-TextField__Input--alignRight","Input-alignLeft":"Polaris-TextField__Input--alignLeft","Input-alignCenter":"Polaris-TextField__Input--alignCenter",Suffix:sA,CharacterCount:lA,AlignFieldBottom:rA,ClearButton:cA,Hidden:uA,Spinner:dA,SpinnerIcon:pA,Resizer:mA,DummyInput:yA,Segment:gA,monospaced:hA};const bA={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},fA=S("path",{"fill-rule":"evenodd",d:"M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 1 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293z"},null,-1),vA=[fA];function xA(t,n){return s(),d("svg",bA,vA)}var Zp={render:xA};function TA(t){return`${t}Error`}function gs(t){return`${t}HelpText`}const Qp=M({emits:["click","change","mouseup","mousedown"],setup(t,{emit:n}){const o=i=>{n("click"),n("change",i)};return(i,l)=>(s(),d("div",{"aria-hidden":"true",class:c(a(we).Spinner)},[S("div",{role:"button",tabindex:"-1",class:c(a(we).Segment),onClick:l[0]||(l[0]=r=>o(1)),onMousedown:l[1]||(l[1]=r=>i.$emit("mousedown")),onMouseup:l[2]||(l[2]=r=>i.$emit("mouseup"))},[S("div",{class:c(a(we).SpinnerIcon)},[C(a(re),{source:a(zp)},null,8,["source"])],2)],34),S("div",{role:"button",tabindex:"-1",class:c(a(we).Segment),onClick:l[3]||(l[3]=r=>o(-1)),onMousedown:l[4]||(l[4]=r=>i.$emit("mousedown")),onMouseup:l[5]||(l[5]=r=>i.$emit("mouseup"))},[S("div",{class:c(a(we).SpinnerIcon)},[C(a(re),{source:a(Aa)},null,8,["source"])],2)],34)],2))}});Qp.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},events:[{name:"mousedown"},{name:"mouseup"},{name:"click"},{name:"change",type:{names:["number"]}}]};const SA=["innerHTML"],CA=["innerHTML"],Jp=M({props:{contents:null,currentHeight:null,minimumLines:null},emits:["height-change"],setup(t,{emit:n}){const o=t,i={"&":"&amp;","<":"&lt;",">":"&gt;","\n":"<br>","\r":""},l=new RegExp(`[${Object.keys(i).join()}]`,"g"),r=k(null),u=k(null),m=k(),x=k(o.currentHeight),v=N=>i[N],g=N=>N?`${N.replace(l,v)}<br>`:"<br>",h=N=>{let w="";for(let D=0;D<N;D++)w+="<br>";return w},T=()=>{m.value&&cancelAnimationFrame(m.value),m.value=requestAnimationFrame(()=>{if(!r.value||!u.value)return;const N=Math.max(r.value.offsetHeight,u.value.offsetHeight);N!==x.value&&n("height-change",N)})};return Se(()=>{m.value&&cancelAnimationFrame(m.value)}),Jt(()=>{T()}),(N,w)=>(s(),d("div",{"aria-hidden":"true",class:c(a(we).Resizer)},[C(a(it),{event:"resize",handler:T}),S("div",{ref_key:"contentNode",ref:r,class:c(a(we).DummyInput),innerHTML:g(t.contents)},null,10,SA),t.minimumLines?(s(),d("div",{key:0,ref_key:"minimumLinesNode",ref:u,class:c(a(we).DummyInput),innerHTML:h(t.minimumLines)},null,10,CA)):L("",!0)],2))}});Jp.__docgenInfo={exportName:"default",displayName:"Resizer",description:"",tags:{},props:[{name:"contents",required:!1,type:{name:"string"}},{name:"currentHeight",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"minimumLines",required:!1,type:{name:"number"}}],events:[{name:"height-change",type:{names:["number"]}}]};const AA="Polaris-Connected",kA="Polaris-Connected__Item";var Hi={Connected:AA,Item:kA,"Item-primary":"Polaris-Connected__Item--primary","Item-focused":"Polaris-Connected__Item--focused"};const Ui=M({props:{position:null},emits:["focus","blur"],setup(t,{emit:n}){const o=t,i=k(!1),l=p(()=>$(Hi.Item,i.value&&Hi["Item-focused"],o.position==="primary"&&Hi["Item-primary"])),r=()=>{i.value=!0,n("focus")},u=()=>{i.value=!1,n("blur")};return(m,x)=>(s(),d("div",{class:c(a(l)),onFocus:r,onBlur:u},[f(m.$slots,"default")],34))}});Ui.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"position",required:!0,type:{name:"ItemPosition"}}],events:[{name:"focus"},{name:"blur"}],slots:[{name:"default"}]};const em=M({setup(t){return(n,o)=>(s(),d("div",{class:c(a(Hi).Connected)},[n.$slots.left?(s(),A(a(Ui),{key:0,position:"left"},{default:y(()=>[f(n.$slots,"left")]),_:3})):L("",!0),n.$slots.default?(s(),A(a(Ui),{key:1,position:"primary"},{default:y(()=>[f(n.$slots,"default")]),_:3})):L("",!0),n.$slots.right?(s(),A(a(Ui),{key:2,position:"right"},{default:y(()=>[f(n.$slots,"right")]),_:3})):L("",!0)],2))}});em.__docgenInfo={exportName:"default",displayName:"Connected",description:"",tags:{},slots:[{name:"left"},{name:"default"},{name:"right"}]};const NA="Polaris-Labelled--hidden",LA="Polaris-Labelled__LabelWrapper",wA="Polaris-Labelled__HelpText",PA="Polaris-Labelled__Action";var wo={hidden:NA,LabelWrapper:LA,HelpText:wA,Error:"Polaris-Labelled__Error",Action:PA};const MA="Polaris-Label",_A="Polaris-Label--hidden",DA="Polaris-Label__Text",IA="Polaris-Label__RequiredIndicator";var Oi={Label:MA,hidden:_A,Text:DA,RequiredIndicator:IA};const BA=["id","for"],tm=M({props:{id:null,hidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(t){const n=t,o=p(()=>$(Oi.Label,n.hidden&&Oi.hidden)),i=p(()=>$(Oi.Text,n.requiredIndicator&&Oi.RequiredIndicator));return(l,r)=>(s(),d("div",{class:c(a(o))},[S("label",{id:a(Fo)(t.id),for:t.id,class:c(a(i))},[f(l.$slots,"default")],10,BA)],2))}});tm.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"string"}},{name:"hidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const $A=["id"],so=M({props:{id:null,error:null,action:null,labelHidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(t){const n=t,o=p(()=>n.error&&typeof n.error!="boolean"),i=p(()=>$(n.labelHidden&&wo.hidden));return(l,r)=>(s(),d("div",{class:c(a(i))},[l.$slots.label?(s(),d("div",{key:0,class:c(a(wo).LabelWrapper)},[C(a(tm),me({id:t.id,requiredIndicator:t.requiredIndicator,hidden:!1},l.$attrs),{default:y(()=>[f(l.$slots,"label")]),_:3},16,["id","requiredIndicator"]),t.action?(s(),d("div",{key:0,class:c(a(wo).Action)},[C(a(Xe),{action:t.action,overrides:{plain:!0}},null,8,["action"])],2)):L("",!0)],2)):L("",!0),f(l.$slots,"default"),a(o)?(s(),d("div",{key:1,class:c(a(wo).Error)},[typeof t.error=="string"?(s(),A(a(Pa),{key:0,message:t.error,fieldID:a(TA)(t.id)},null,8,["message","fieldID"])):(s(),A(Oe(t.error),{key:1}))],2)):L("",!0),l.$slots["help-text"]?(s(),d("div",{key:2,class:c(a(wo).HelpText),id:a(gs)(t.id)},[f(l.$slots,"help-text")],10,$A)):L("",!0)],2))}});so.__docgenInfo={exportName:"default",displayName:"Labelled",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"TSIndexedAccessType"}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"Error"}},{name:"action",description:"An action",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"label"},{name:"default"},{name:"help-text"}]};const FA=["id"],EA=["id"],OA=["id"],qA=["aria-live"],RA=["disabled"],VA=S("p",null,"Clear button",-1),Pe=M({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:null,type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue","clear-button-click"],setup(t,{emit:n}){const o=t,i=ve("lang"),l=k(null),r=k(null),u=k(null),m=k(null),x=k(null),v=ue(),g=p(()=>{var I;return(I=v["connected-left"])==null?void 0:I.call(v)}),h=p(()=>{var I;return(I=v["connected-right"])==null?void 0:I.call(v)}),T=p(()=>{var I;return(I=v["help-text"])==null?void 0:I.call(v)}),N=p(()=>{var I;return(I=v.prefix)==null?void 0:I.call(v)}),w=p(()=>{var I;return(I=v.suffix)==null?void 0:I.call(v)}),D=p(()=>{var I;return(I=v.verticalContent)==null?void 0:I.call(v)}),B=k(),E=k(),R=k();Ee(()=>o.focused,()=>{!l.value||o.focused===void 0||(o.focused?l.value.focus():l.value.blur())}),Ee([()=>E.value,()=>o.modelValue,()=>o.type,()=>o.suggestion],()=>{const I=o.type==="text"||o.type==="tel"||o.type==="search"||o.type==="url"||o.type==="password";!l.value||!I||!o.suggestion||l.value.setSelectionRange(o.modelValue.length,o.suggestion.length)});const{useUniqueId:z}=Be(),Z=p(()=>z("TextField",o.id)),F=p(()=>o.type==="currency"?"text":o.type),W=p(()=>{if(!!o.multiline)return typeof o.multiline=="number"?o.multiline:1}),q=p(()=>X.value!==""),j=p(()=>o.multiline&&B.value?{height:`${B.value}px`}:{}),le=p(()=>$(we.TextField,Boolean(X.value)&&we.hasValue,o.disabled&&we.disabled,o.readOnly&&we.readOnly,o.error&&we.error,o.multiline&&we.multiline,E.value&&we.focus)),fe=p(()=>{const I=o.align&&we[Le("Input-align",o.align)];return $(we.Input,I,w.value&&we["Input-suffixed"],o.clearButton&&we["Input-hasClearButton"],o.monospaced&&we.monospaced)}),ae=p(()=>$(we.CharacterCount,o.multiline&&we.AlignFieldBottom)),Me=p(()=>$(we.Backdrop,g.value&&we["Backdrop-connectedLeft"],h.value&&we["Backdrop-connectedRight"])),O=p(()=>$(we.ClearButton,!q.value&&we.AlignFieldBottom)),X=p(()=>o.suggestion?o.suggestion:o.modelValue),Y=p(()=>o.step?o.step:1),ce=p(()=>o.max?o.max:1/0),de=p(()=>o.min?o.min:-1/0),$e=p(()=>{if(!!o.multiline)return Boolean(o.multiline)||o.multiline>0?{"aria-multiline":!0}:void 0}),he=p(()=>X.value.length);p(()=>o.maxLength?i.Polaris.TextField.characterCountWithMaxLength({count:he.value,limit:o.maxLength}):i.Polaris.TextField.characterCount({count:he}));const Ce=p(()=>o.maxLength?`${he.value}/${o.maxLength}`:he.value),ie=p(()=>{const I=[];return o.error&&I.push(`${Z.value}Error`),T.value&&I.push(gs(Z.value)),o.showCharacterCount&&I.push(`${Z.value}-CharacterCounter`),I.length?I.join(" "):""}),Te=p(()=>{const I=[];return N.value&&I.push(`${Z.value}-Prefix`),w.value&&I.push(`${Z.value}-Suffix`),D.value&&I.push(`${Z.value}-VerticalContent`),I.unshift(Fo(Z.value)),I.join(" ")}),Ie=I=>{B.value=I},Re=I=>I instanceof HTMLElement&&(u.value&&u.value.contains(I)||m.value&&m.value.contains(I)),_e=I=>{const K=I.target;Re(K)||(E.value=!0)},dt=I=>{var Q;const K=I.target;Re(K)||E.value||(Q=l.value)==null||Q.focus()},Ht=I=>{const K=I.target;n("update:modelValue",K.value),n("change",I)},ht=I=>{const K=He=>(He.toString().split(".")[1]||[]).length,Q=o.modelValue?parseFloat(o.modelValue):0;if(typeof Q!="number")return;const xe=Math.max(K(Q),K(Y.value)),Ve=Math.min(Number(ce.value),Math.max(Q+I*Y.value,Number(de.value)));n("update:modelValue",String(Ve.toFixed(xe)))},bt=()=>{clearTimeout(R.value)},ne=()=>{let Q=200;const xe=()=>{Q>50&&(Q-=10),ht(0),R.value=window.setTimeout(xe,Q)};R.value=window.setTimeout(xe,Q),document.addEventListener("mouseup",bt,{once:!0})},ke=I=>{const{key:K,which:Q}=b({},I),xe=/[\d.eE+-]$/;o.type!=="number"||Q!==13||xe.test(K)||I.preventDefault()},je=I=>{var K;o.selectTextOnFocus&&!o.suggestion&&((K=(o.multiline?r:l).value)==null||K.select()),n("focus",I)};return(I,K)=>(s(),A(a(so),{id:a(Z),error:t.error,action:t.labelAction,labelHidden:t.labelHidden,requiredIndicator:t.requiredIndicator},Ue({default:y(()=>[C(a(em),null,Ue({default:y(()=>[S("div",{class:c(a(le)),onFocus:_e,onClick:dt,onBlur:K[3]||(K[3]=Q=>E.value=!1)},[a(v).prefix?(s(),d("div",{key:0,id:`${a(Z)}Prefix`,class:c(a(we).Prefix),ref_key:"prefixRef",ref:u},[f(I.$slots,"prefix")],10,FA)):L("",!0),a(v)["vertical-content"]?(s(),d("div",{key:1,class:c(a(we).VerticalContent),id:`${a(Z)}-VerticalContent`,ref_key:"verticalContentRef",ref:x},[f(I.$slots,"vertical-content"),(s(),A(Oe(t.multiline?"textarea":"input"),me({id:a(Z),name:t.name,disabled:t.disabled,readonly:t.readOnly,role:t.role,autofocus:t.autoFocus,value:t.modelValue,placeholder:t.placeholder,style:a(j),autocomplete:t.autoComplete,class:a(fe),ref:t.multiline?"textareaRef":"inputRef",min:t.min,max:t.max,step:t.step,minlength:t.minLength,maxlength:t.maxLength,spellcheck:t.spellCheck,pattern:t.pattern,inputMode:t.inputMode,rows:a(W),type:a(F),"aria-describedby":a(ie),"aria-labelledby":a(Te),"aria-invalid":Boolean(t.error),"aria-owns":t.ariaOwns,"aria-activedescendant":t.ariaActiveDescendant,"aria-autocomplete":t.ariaAutocomplete,"aria-controls":t.ariaControls,"aria-expanded":t.ariaExpanded,"aria-required":t.requiredIndicator},a($e),{onInput:Ht,onKeydown:ke,onFocus:je,onBlur:K[0]||(K[0]=Q=>I.$emit("blur"))}),{default:y(()=>[t.multiline?(s(),d(G,{key:0},[oe(U(t.modelValue),1)],64)):L("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"]))],10,EA)):(s(),A(Oe(t.multiline?"textarea":"input"),me({key:2,id:a(Z),name:t.name,disabled:t.disabled,readonly:t.readOnly,role:t.role,autofocus:t.autoFocus,value:t.modelValue,placeholder:t.placeholder,style:a(j),autocomplete:t.autoComplete,class:a(fe),ref:t.multiline?"textareaRef":"inputRef",min:t.min,max:t.max,step:t.step,minlength:t.minLength,maxlength:t.maxLength,spellcheck:t.spellCheck,pattern:t.pattern,inputMode:t.inputMode,rows:a(W),type:a(F),"aria-describedby":a(ie),"aria-labelledby":a(Te),"aria-invalid":Boolean(t.error),"aria-owns":t.ariaOwns,"aria-activedescendant":t.ariaActiveDescendant,"aria-autocomplete":t.ariaAutocomplete,"aria-controls":t.ariaControls,"aria-expanded":t.ariaExpanded,"aria-required":t.requiredIndicator},a($e),{onInput:Ht,onKeydown:ke,onFocus:je,onBlur:K[1]||(K[1]=Q=>I.$emit("blur"))}),{default:y(()=>[t.multiline?(s(),d(G,{key:0},[oe(U(t.modelValue),1)],64)):L("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"])),a(v).suffix?(s(),d("div",{key:3,id:`${a(Z)}Suffix`,class:c(a(we).Suffix),ref_key:"suffixRef",ref:m},[f(I.$slots,"suffix")],10,OA)):L("",!0),t.showCharacterCount?(s(),d("div",{key:4,class:c(a(ae)),"aria-live":E.value?"polite":"off","aria-atomic":"true"},[S("p",null,U(a(Ce)),1)],10,qA)):L("",!0),a(q)&&t.clearButton?(s(),d("button",{key:5,class:c(a(O)),disabled:t.disabled,onClick:K[2]||(K[2]=Q=>I.$emit("clear-button-click",a(Z)))},[C(a(lt),null,{default:y(()=>[VA]),_:1}),C(a(re),{source:a(Zp),color:"base"},null,8,["source"])],10,RA)):L("",!0),t.type==="number"&&t.step!==0&&!t.disabled&&!t.readOnly?(s(),A(a(Qp),{key:6,onChange:ht,onMousedown:ne,onMouseup:bt})):L("",!0),S("div",{class:c(a(Me))},null,2),t.multiline?(s(),A(a(Jp),{key:7,contents:a(X)||t.placeholder,currentHeight:B.value,minimumLines:typeof t.multiline=="number"?t.multiline:1,onHeightChange:Ie},null,8,["contents","currentHeight","minimumLines"])):L("",!0)],34)]),_:2},[a(v)["connected-left"]?{name:"left",fn:y(()=>[f(I.$slots,"connected-left")])}:void 0,a(v)["connected-right"]?{name:"right",fn:y(()=>[f(I.$slots,"connected-right")])}:void 0]),1024)]),_:2},[a(v).label?{name:"label",fn:y(()=>[f(I.$slots,"label")])}:void 0,a(v)["help-text"]?{name:"help-text",fn:y(()=>[f(I.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden","requiredIndicator"]))}});Pe.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"Error"}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"blur"},{name:"clear-button-click",type:{names:["string"]}},{name:"focus",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"connected-left"},{name:"connected-right"},{name:"prefix"},{name:"vertical-content"},{name:"suffix"}]};const Uo=M({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:null,type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:{default:"list"},showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue"],setup(t,{emit:n}){const o=t,{activeOptionId:i,listboxId:l,expanded:r,setTextFieldFocused:u,setTextFieldLabelId:m,onTextFieldFocus:x,onTextFieldChange:v,onTextFieldBlur:g}=ve("comboboxTextFieldContext",{}),{useUniqueId:h}=Be(),T=h("ComboboxTextField"),N=p(()=>o.id||T),w=p(()=>Fo(o.id||T));Ee(()=>w.value,()=>{m&&m(w.value)});const D=()=>{n("focus"),x&&x(),u&&u(!0)},B=()=>{n("blur"),g&&g(),u&&u(!1)},E=R=>{const z=R.target;n("update:modelValue",z.value),n("change",R),v&&v()};return(R,z)=>(s(),A(a(Pe),me(o,{modelValue:t.modelValue,id:a(N),type:t.type,ariaAutoComplete:t.ariaAutocomplete,"aria-haspopup":"listbox",ariaActiveDescendant:a(i),ariaControls:a(l),ariaExpanded:a(r),onFocus:D,onBlur:B,onChange:E}),Ue({_:2},[R.$slots.label?{name:"label",fn:y(()=>[f(R.$slots,"label")])}:void 0,R.$slots["help-text"]?{name:"help-text",fn:y(()=>[f(R.$slots,"help-text")])}:void 0,R.$slots.prefix?{name:"prefix",fn:y(()=>[f(R.$slots,"prefix")])}:void 0,R.$slots.suffix?{name:"suffix",fn:y(()=>[f(R.$slots,"suffix")])}:void 0,R.$slots["connected-left"]?{name:"connected-left",fn:y(()=>[f(R.$slots,"connected-left")])}:void 0,R.$slots["connected-right"]?{name:"connected-right",fn:y(()=>[f(R.$slots,"connected-right")])}:void 0,R.$slots["vertical-content"]?{name:"vertical-content",fn:y(()=>[f(R.$slots,"vertical-content")])}:void 0]),1040,["modelValue","id","type","ariaAutoComplete","ariaActiveDescendant","ariaControls","ariaExpanded"]))}});Uo.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"Error"}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'list'"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"},{name:"connected-left"},{name:"connected-right"},{name:"vertical-content"}]};function lo(){const t=ve("frameContext",{});function n(){if(!t)throw new Ub("No frame context was provided.");return t}return{useFrame:n}}const jo=M({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean},contextControl:null,secondaryMenu:null},setup(t){const n=t,{useFrame:o}=lo(),{setContextualSaveBar:i,removeContextualSaveBar:l}=o(),r=ue();return Se(()=>{const{message:u,saveAction:m,discardAction:x,alignContentFlush:v,fullWidth:g}=n;i({message:u,saveAction:m,discardAction:x,alignContentFlush:v,fullWidth:g,contextControl:r.contextControl&&r.contextControl(),secondaryMenu:r.secondaryMenu&&r.secondaryMenu()})}),gt(()=>{l()}),(u,m)=>null}});jo.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}},{name:"contextControl",description:"Accepts a component that is used to help users switch between different contexts",required:!1,type:{name:"any"}},{name:"secondaryMenu",description:"Accepts a node that is rendered to the left of the discard and save actions",required:!1,type:{name:"any"}}]};const HA=7;function UA(t,n,o=0){const i=new Date(n,t,1),l=i.getDay(),r=[[]];let u=r[0],m=i;const x=am(o);for(let v=0;v<x.indexOf(l);v++)u.push(null);for(;m.getMonth()===t;)u.length===HA&&(u=[],r.push(u)),u.push(m),m=new Date(n,t,m.getDate()+1);for(;u.length<7;)u.push(null);return r}function jA(t,n){if(t==null)return!1;const{start:o,end:i}=n;return Boolean(o&&t>o&&i&&t<i)}function zA(t,n){if(t==null)return!1;const{start:o,end:i}=n;return Boolean(o&&Mt(o,t)||i&&Mt(i,t))}function Mt(t,n){return t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear()}function WA(t,n){if(t==null)return{start:n,end:n};const{start:o,end:i}=t;return i&&(Eo(o,i)||Na(o,i))?{start:n,end:n}:o?Na(n,o)?{start:n,end:n}:{start:o,end:n}:i?Na(n,i)?{start:n,end:i}:{start:o||i,end:n}:{start:n,end:n}}function $u(t){return t===11?0:t+1}function Fu(t,n){return t===11?n+1:n}function GA(t){return t===0?11:t-1}function XA(t,n){return t===0?n-1:n}function Eo(t,n){return t.getTime()>n.getTime()}function Na(t,n){return t.getTime()<n.getTime()}function Do(t,n){return n.some(o=>t.getTime()===o.getTime())}const KA=[0,1,2,3,4,5,6];function am(t){const n=[...KA];return[...n.splice(t),...n]}const YA={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ZA=S("path",{d:"m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"},null,-1),QA=[ZA];function JA(t,n){return s(),d("svg",YA,QA)}var ek={render:JA};const tk="Polaris-DatePicker",ak="Polaris-DatePicker__MonthLayout",nk="Polaris-DatePicker__MonthContainer",ok="Polaris-DatePicker__Month",ik="Polaris-DatePicker__DayCell",sk="Polaris-DatePicker__Day",lk="Polaris-DatePicker__EmptyDayCell",rk="Polaris-DatePicker__Weekday",ck="Polaris-DatePicker__Header",uk="Polaris-DatePicker__Title",dk="Polaris-DatePicker__Week";var De={DatePicker:tk,MonthLayout:ak,MonthContainer:nk,Month:ok,"Month-current":"Polaris-DatePicker__Month--current",DayCell:ik,"DayCell-inRange":"Polaris-DatePicker__DayCell--inRange",Day:sk,"Day-today":"Polaris-DatePicker__Day--today","Day-inRange":"Polaris-DatePicker__Day--inRange","Day-selected":"Polaris-DatePicker__Day--selected","Day-disabled":"Polaris-DatePicker__Day--disabled",EmptyDayCell:lk,Weekday:rk,"Weekday-current":"Polaris-DatePicker__Weekday--current",Header:ck,Title:uk,"Day-firstInRange":"Polaris-DatePicker__Day--firstInRange","Day-hasRange":"Polaris-DatePicker__Day--hasRange","Day-hoverRight":"Polaris-DatePicker__Day--hoverRight","Day-lastInRange":"Polaris-DatePicker__Day--lastInRange",Week:dk};const La={months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}};function Io(t){switch(t){case 0:return"january";case 1:return"february";case 2:return"march";case 3:return"april";case 4:return"may";case 5:return"june";case 6:return"july";case 7:return"august";case 8:return"september";case 9:return"october";case 10:return"november";case 11:return"december"}}function Eu(t){switch(t){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}const pk=["tabIndex","aria-label","aria-disabled","aria-pressed"],Zr=M({props:{focused:{type:Boolean},day:null,selected:{type:Boolean},inRange:{type:Boolean},inHoveringRange:{type:Boolean},disabled:{type:Boolean},lastDayOfMonth:null,isLastSelectedDay:{type:Boolean},isFirstSelectedDay:{type:Boolean},isHoveringRight:{type:Boolean},rangeIsDifferent:{type:Boolean},weekday:null,selectedAccessibilityLabelPrefix:null},emits:["focus","hover","click"],setup(t,{emit:n}){const o=t,i=k(null),l=p(()=>o.lastDayOfMonth||o.day),r=p(()=>o.day?Mt(new Date,o.day):null),u=p(()=>o.day?o.day.getDate():null),m=p(()=>(o.focused||o.selected||r.value||u.value===1)&&!o.disabled?0:-1),x=p(()=>$(De.DayCell,o.selected&&De["DayCell-selected"],(o.inRange||o.inHoveringRange)&&!o.disabled&&De["DayCell-inRange"],o.isLastSelectedDay&&De["DayCell-lastInRange"],o.isFirstSelectedDay&&De["DayCell-firstInRange"],o.isHoveringRight&&De["DayCell-hoverRight"],o.rangeIsDifferent&&De["DayCell-hasRange"])),v=p(()=>$(De.Day,o.selected&&De["Day-selected"],o.disabled&&De["Day-disabled"],r.value&&De["Day-today"],(o.inRange||o.inHoveringRange)&&!o.disabled&&De["Day-inRange"],o.isLastSelectedDay&&De["Day-lastInRange"],o.isFirstSelectedDay&&De["Day-firstInRange"],o.isHoveringRight&&De["Day-hoverRight"],o.rangeIsDifferent&&De["Day-hasRange"])),g=p(()=>{if(!o.day)return null;const D=Io(o.day.getMonth());return D?La.months[D]:""}),h=p(()=>[o.selected&&o.selectedAccessibilityLabelPrefix?`${o.selectedAccessibilityLabelPrefix} `:"",`${r.value?"Today ":""}`,`${o.weekday?o.weekday:""} `,`${g.value} `,`${u.value} `,`${o.day?o.day.getFullYear():new Date().getFullYear()}`].join(""));Jt(()=>{o.focused&&i.value&&setTimeout(()=>{i.value.focus()},10)});const T=()=>{n("focus",o.day)},N=()=>{n("hover",l.value)},w=()=>{!o.disabled&&o.day&&n("click",o.day)};return(D,B)=>t.day?(s(),d("td",{key:0,class:c(a(x))},[S("button",{type:"button",ref_key:"dayRef",ref:i,tabIndex:a(m),class:c(a(v)),"aria-label":a(h),"aria-disabled":t.disabled,"aria-pressed":t.selected,onFocus:T,onMouseover:N,onClick:w},U(a(u)),43,pk)],2)):(s(),d("td",{key:1,class:c(a(De).EmptyDayCell),onMouseover:N},null,34))}});Zr.__docgenInfo={exportName:"default",displayName:"Day",description:"",tags:{},props:[{name:"focused",required:!1,type:{name:"boolean"}},{name:"day",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"inRange",required:!1,type:{name:"boolean"}},{name:"inHoveringRange",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"lastDayOfMonth",required:!1,type:{name:"any"}},{name:"isLastSelectedDay",required:!1,type:{name:"boolean"}},{name:"isFirstSelectedDay",required:!1,type:{name:"boolean"}},{name:"isHoveringRight",required:!1,type:{name:"boolean"}},{name:"rangeIsDifferent",required:!1,type:{name:"boolean"}},{name:"weekday",required:!1,type:{name:"string"}},{name:"selectedAccessibilityLabelPrefix",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["union"]}},{name:"hover",type:{names:["union"]}},{name:"click",type:{names:["Date"]}}]};const mk=["aria-label"],nm=M({props:{label:null,title:null,current:{type:Boolean}},setup(t){const n=t,o=p(()=>$(De.Weekday,n.current&&De["Weekday-current"]));return(i,l)=>(s(),d("th",{"aria-label":t.label,scope:"col",class:c(a(o))},U(t.title),11,mk))}});nm.__docgenInfo={exportName:"default",displayName:"Weekday",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"current",required:!0,type:{name:"boolean"}}]};const Qr=M({props:{focusedDate:null,selected:null,hoverDate:null,month:null,year:null,disableDatesBefore:null,disableDatesAfter:null,disableSpecificDates:null,allowRange:{type:Boolean},weekStartsOn:null,accessibilityLabelPrefixes:null},emits:["focus","hover","click","change"],setup(t,{emit:n}){const o=t,i=new Date,l=p(()=>i.getMonth()===o.month&&i.getFullYear()===o.year),r=p(()=>$(De.Title,l.value&&De["Month-current"])),u="Polaris-DatePicker__WeekHeadings",m=p(()=>UA(o.month,o.year,o.weekStartsOn)),x=p(()=>{const q=Io(o.month);return q?La.months[q]:""}),v=p(()=>am(o.weekStartsOn)),g=p(()=>new Date(o.year,o.month+1,0)),h=p(()=>!(o.selected&&Mt(o.selected.start,o.selected.end))),T=q=>{const j=WA(o.allowRange?o.selected:void 0,q);n("change",j)},N=q=>o.disableDatesBefore&&Na(q,o.disableDatesBefore)||o.disableDatesAfter&&Eo(q,o.disableDatesAfter)||o.disableSpecificDates&&Do(q,o.disableSpecificDates),w=q=>o.allowRange&&o.selected&&W(q,o.selected),D=q=>o.allowRange&&o.selected&&(!Mt(o.selected.start,o.selected.end)&&F(q,o.selected)||o.hoverDate&&Mt(o.selected.start,o.selected.end)&&Eo(o.hoverDate,o.selected.start)&&Mt(q,o.hoverDate)&&!w(q)),B=q=>o.hoverDate&&Na(q,o.hoverDate),E=q=>{if(!o.accessibilityLabelPrefixes)return"";const[j,le]=o.accessibilityLabelPrefixes;if(o.allowRange&&w(q)||!o.allowRange&&j)return j;if(o.allowRange&&D(q))return le},R=(q,j,le)=>{if(!o.allowRange||!j||!le||q==null)return!1;const{start:fe,end:ae}=j;return Boolean(Mt(fe,ae)&&q>fe&&q<=le)};function z(q){const j=Eu(q);return j?La.daysAbbreviated[j]:""}function Z(q){const j=Eu(q);return j?La.days[j]:""}function F(q,j){if(q==null)return!1;const{end:le}=j;return Boolean(le&&Mt(le,q))}function W(q,j){if(q==null)return!1;const{start:le}=j;return Boolean(le&&Mt(le,q))}return(q,j)=>(s(),d("div",{class:c(a(De).MonthContainer)},[S("table",{role:"grid",class:c(a(De).Month)},[S("caption",{class:c(a(r))},U(a(x))+" "+U(t.year),3),S("thead",null,[S("tr",{class:c(u)},[(s(!0),d(G,null,be(a(v),le=>(s(),A(a(nm),{key:le,title:z(le),label:Z(le),current:a(l)&&new Date().getDay()===le},null,8,["title","label","current"]))),128))])]),S("tbody",null,[(s(!0),d(G,null,be(a(m),(le,fe)=>(s(),d("tr",{key:fe,class:c(a(De).Week)},[(s(!0),d(G,null,be(le,(ae,Me)=>(s(),d(G,{key:Me},[ae?(s(),A(a(Zr),{key:1,selectedAccessibilityLabelPrefix:E(ae),weekday:Z(Me),focused:t.focusedDate&&a(Mt)(ae,t.focusedDate),day:ae,selected:t.selected&&a(zA)(ae,t.selected),inRange:t.selected&&a(jA)(ae,t.selected),disabled:N(ae),inHoveringRange:R(ae,t.selected,t.hoverDate),isLastSelectedDay:D(ae),isFirstSelectedDay:w(ae),isHoveringRight:B(ae),rangeIsDifferent:a(h),onFocus:O=>q.$emit("focus",ae),onClick:T,onHover:O=>q.$emit("hover",ae)},null,8,["selectedAccessibilityLabelPrefix","weekday","focused","day","selected","inRange","disabled","inHoveringRange","isLastSelectedDay","isFirstSelectedDay","isHoveringRight","rangeIsDifferent","onFocus","onHover"])):(s(),A(a(Zr),{key:0,lastDayOfMonth:a(g),onHover:j[0]||(j[0]=O=>q.$emit("hover",null))},null,8,["lastDayOfMonth"]))],64))),128))],2))),128))])],2)],2))}});Qr.__docgenInfo={exportName:"default",displayName:"Month",description:"",tags:{},props:[{name:"focusedDate",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"Range"}},{name:"hoverDate",required:!1,type:{name:"Date"}},{name:"month",required:!0,type:{name:"number"}},{name:"year",required:!0,type:{name:"number"}},{name:"disableDatesBefore",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",required:!1,type:{name:"Date"}},{name:"disableSpecificDates",required:!1,type:{name:"Array",elements:[{name:"Date"}]}},{name:"allowRange",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",required:!0,type:{name:"number"}},{name:"accessibilityLabelPrefixes",required:!1,type:{name:"TSTupleType"}}],events:[{name:"hover",type:{names:["union"]}},{name:"focus",type:{names:["union"]}},{name:"click",type:{names:["Date"]}},{name:"change",type:{names:["union"]}}]};const yk=["id"],hs=M({props:{id:null,modelValue:null,month:null,year:null,allowRange:{type:Boolean},disableDatesBefore:null,disableDatesAfter:null,disableSpecificDates:null,multiMonth:{type:Boolean},weekStartsOn:{default:0},dayAccessibilityLabelPrefix:null},emits:["month-change","change","update:modelValue"],setup(t,{emit:n}){const o=t,i=k(),l=k(),r=p(()=>Fu(o.month,o.year)),u=p(()=>$u(o.month)),m=p(()=>Fu(u.value,r.value)),x=p(()=>$u(u.value)),v=p(()=>XA(o.month,o.year)),g=p(()=>GA(o.month)),h=p(()=>{const O=Io(g.value);return O?La.months[O]:""}),T=p(()=>{if(o.multiMonth){const X=Io(x.value);return X?La.months[X]:""}const O=Io(u.value);return O?La.months[O]:""}),N=p(()=>o.multiMonth?m.value:r.value),w=p(()=>Me(o.modelValue)),D=p(()=>o.allowRange?"Start of range":o.dayAccessibilityLabelPrefix),B="End of range",E=p(()=>[D.value,B]),R=p(()=>`Show previous month, ${h.value} ${v.value}`),z=p(()=>`Show next month, ${T.value} ${N.value}`),Z=(O,X)=>{n("month-change",{month:O,year:X})},F=(O,X)=>{i.value=void 0,Z(O,X)},W=O=>{i.value=O||void 0},q=O=>{l.value=O||void 0},j=O=>{Z(O.getMonth(),O.getFullYear()),l.value=O,i.value=O},le=O=>{if(O){const{end:X}=O;l.value=X,i.value=new Date(X),n("update:modelValue",O)}n("change",O)},fe=O=>{const{key:X}=O,Y=Me(o.modelValue),ce=i.value||Y&&Y.start;if(!!ce){if(X==="ArrowUp"){const de=new Date(ce);de.setDate(ce.getDate()-7),o.disableDatesBefore&&Na(de,o.disableDatesBefore)||o.disableSpecificDates&&Do(de,o.disableSpecificDates)||j(de)}if(X==="ArrowDown"){const de=new Date(ce);de.setDate(ce.getDate()+7),o.disableDatesAfter&&Eo(de,o.disableDatesAfter)||o.disableSpecificDates&&Do(de,o.disableSpecificDates)||j(de)}if(X==="ArrowRight"){const de=new Date(ce);de.setDate(ce.getDate()+1),o.disableDatesAfter&&Eo(de,o.disableDatesAfter)||o.disableSpecificDates&&Do(de,o.disableSpecificDates)||j(de)}if(X==="ArrowLeft"){const de=new Date(ce);de.setDate(ce.getDate()-1),o.disableDatesBefore&&Na(de,o.disableDatesBefore)||o.disableSpecificDates&&Do(de,o.disableSpecificDates)||j(de)}}},ae=O=>{const{key:X}=O;(X==="ArrowUp"||X==="ArrowDown"||X==="ArrowLeft"||X==="ArrowRight")&&(O.preventDefault(),O.stopPropagation())};function Me(O){return O instanceof Date?{start:O,end:O}:O}return(O,X)=>(s(),d("div",{id:t.id,class:c(a(De).DatePicker),onKeydown:ae,onKeyup:fe},[S("div",{class:c(a(De).Header)},[C(a(ge),{plain:"",icon:a(ao),accessibilityLabel:a(R),onClick:X[0]||(X[0]=Y=>F(a(g),a(v)))},null,8,["icon","accessibilityLabel"]),C(a(ge),{plain:"",icon:a(ek),accessibilityLabel:a(z),onClick:X[1]||(X[1]=Y=>F(a(u),a(r)))},null,8,["icon","accessibilityLabel"])],2),S("div",{class:c(a(De).MonthLayout)},[C(a(Qr),{focusedDate:i.value,month:t.month,year:t.year,selected:Me(t.modelValue),hoverDate:l.value,disableDatesBefore:t.disableDatesBefore,disableDatesAfter:t.disableDatesAfter,disableSpecificDates:t.disableSpecificDates,allowRange:t.allowRange,weekStartsOn:t.weekStartsOn,accessibilityLabelPrefixes:a(E),onChange:le,onHover:q,onFocus:W},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","disableSpecificDates","allowRange","weekStartsOn","accessibilityLabelPrefixes"]),t.multiMonth?(s(),A(a(Qr),{key:0,focusedDate:i.value,month:a(u),year:a(r),selected:a(w),hoverDate:l.value,disableDatesBefore:t.disableDatesBefore,disableDatesAfter:t.disableDatesAfter,disableSpecificDates:t.disableSpecificDates,allowRange:t.allowRange,weekStartsOn:t.weekStartsOn,accessibilityLabelPrefixes:a(E),onChange:le,onHover:q,onFocus:W},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","disableSpecificDates","allowRange","weekStartsOn","accessibilityLabelPrefixes"])):L("",!0)],2)],42,yk))}});hs.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:"The selected date or range of dates",required:!1,type:{name:"Range"}},{name:"month",description:"The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December",required:!0,type:{name:"number"}},{name:"year",description:"The year to show",required:!0,type:{name:"number"}},{name:"allowRange",description:"Allow a range of dates to be selected",required:!1,type:{name:"boolean"}},{name:"disableDatesBefore",description:"Disable selecting dates before this.",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",description:"Disable selecting dates after this.",required:!1,type:{name:"Date"}},{name:"disableSpecificDates",description:"Disable specific dates.",required:!1,type:{name:"Array",elements:[{name:"Date"}]}},{name:"multiMonth",description:"The selection can span multiple months",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",description:"First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"dayAccessibilityLabelPrefix",description:"Visually hidden prefix text for selected days on single selection date pickers",required:!1,type:{name:"string"}}],events:[{name:"month-change",type:{names:["{ month: number, year: number }"]}},{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const gk="Polaris-DescriptionList",hk="Polaris-DescriptionList__Term",bk="Polaris-DescriptionList--spacingTight",fk="Polaris-DescriptionList__Description";var Qi={DescriptionList:gk,Term:hk,spacingTight:bk,Description:fk};const bs=M({props:{spacing:{default:"loose"}},setup(t){const n=t,o=p(()=>$(Qi.DescriptionList,n.spacing==="tight"&&Qi.spacingTight));return(i,l)=>(s(),d("dl",{class:c(a(o))},[f(i.$slots,"default")],2))}});bs.__docgenInfo={exportName:"default",displayName:"DescriptionList",description:"",tags:{},props:[{name:"spacing",description:"Determines the spacing between list items",tags:{default:[{description:"'loose'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"loose"'},{name:'"tight"'}]},defaultValue:{func:!1,value:"'loose'"}}],slots:[{name:"default"}]};const om=M({setup(t){const n=$(Qi.Term);return(o,i)=>(s(),d("dt",{class:c(a(n))},[f(o.$slots,"default")],2))}});om.__docgenInfo={exportName:"default",displayName:"DescriptionListTerm",description:"",tags:{},slots:[{name:"default"}]};const im=M({setup(t){const n=$(Qi.Description);return(o,i)=>(s(),d("dd",{class:c(a(n))},[f(o.$slots,"default")],2))}});im.__docgenInfo={exportName:"default",displayName:"DescriptionListDesc",description:"",tags:{},slots:[{name:"default"}]};const vk="Polaris-DisplayText",xk="Polaris-DisplayText--sizeSmall",Tk="Polaris-DisplayText--sizeMedium",Sk="Polaris-DisplayText--sizeLarge",Ck="Polaris-DisplayText--sizeExtraLarge";var Ou={DisplayText:vk,sizeSmall:xk,sizeMedium:Tk,sizeLarge:Sk,sizeExtraLarge:Ck};const ro=M({props:{element:{default:"p"},size:{default:"medium"}},setup(t){const n=t,o=p(()=>$(Ou.DisplayText,n.size&&Ou[Le("size",n.size)]));return(i,l)=>(s(),A(Oe(t.element),{class:c(a(o))},{default:y(()=>[f(i.$slots,"default")]),_:3},8,["class"]))}});ro.__docgenInfo={exportName:"default",displayName:"DisplayText",description:"",tags:{},props:[{name:"element",description:"Name of element to use for text",tags:{default:[{description:"'p'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'p'"}},{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}]};const Ak={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},kk=S("path",{"fill-rule":"evenodd",d:"M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM5.293 8.293l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 7.414V15a1 1 0 1 1-2 0V7.414L6.707 9.707a1 1 0 0 1-1.414-1.414z"},null,-1),Nk=[kk];function Lk(t,n){return s(),d("svg",Ak,Nk)}var wk={render:Lk};function sm(t=""){const n=t.toLowerCase();return n.charAt(0).toUpperCase()+n.slice(1)}const Pk="Polaris-DropZone",Mk="Polaris-DropZone--focused",_k="Polaris-DropZone--hasOutline",Dk="Polaris-DropZone--isDisabled",Ik="Polaris-DropZone--isDragging",Bk="Polaris-DropZone--sizeLarge",$k="Polaris-DropZone--sizeMedium",Fk="Polaris-DropZone--sizeSmall",Ek="Polaris-DropZone--measuring",Ok="Polaris-DropZone__Container",qk="Polaris-DropZone__Overlay",Rk="Polaris-DropZone--hasError";var Lt={DropZone:Pk,focused:Mk,hasOutline:_k,isDisabled:Dk,isDragging:Ik,sizeLarge:Bk,sizeMedium:$k,sizeSmall:Fk,measuring:Ek,Container:Ok,Overlay:qk,hasError:Rk};const lm=M({props:{id:null,accept:null,disabled:{type:Boolean},type:null,multiple:{type:Boolean},openFileDialog:{type:Boolean}},emits:["focus","blur","input","file-dialog-close"],setup(t,{emit:n}){const o=t,i=k();Se(()=>{o.openFileDialog&&l()}),Jt(()=>{o.openFileDialog&&l()});const l=()=>{r(),n("file-dialog-close")},r=()=>{!i.value||i.value.click()},u=v=>{!v.target.files||n("input",v)},m=()=>{n("focus")},x=()=>{n("blur")};return(v,g)=>(s(),d("input",me(o,{ref_key:"fileInputNode",ref:i,autoComplete:"off",onChange:u,onFocus:m,onBlur:x}),null,16))}});lm.__docgenInfo={exportName:"default",displayName:"DropZoneInput",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"accept",required:!1,type:{name:"string"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"DropZoneFileType"}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"openFileDialog",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["Event"]}},{name:"file-dialog-close"}]};const Vk=["dragover","dragenter","drop"];function Hk(t,n){return t.type==="application/x-moz-file"||Uk(t,n)}function qu(t){if(jk(t)&&t.dataTransfer){const n=t.dataTransfer;if(n.files&&n.files.length)return Array.from(n.files);if(n.items&&n.items.length)return Array.from(n.items)}else if(zk(t)&&t.target.files){const n=t.target;return Array.from(n.files||[])}return[]}function Uk(t,n){if(t&&n){const o=t.name||"",i=t.type||"",l=i.replace(/\/.*$/,"");return(Array.isArray(n)?n:n.split(",")).some(u=>{const m=u.trim();return m.startsWith(".")?o.toLowerCase().endsWith(m.toLowerCase()):m.endsWith("/*")?l===m.replace(/\/.*$/,""):i===m})}return!0}function jk(t){return Vk.indexOf(t.type)>0}function zk(t){return t.type==="change"}const Wk=!0;function rm(t){return t?"allowMultiple":"single"}const Gk=["aria-disabled"],fs=M({props:{label:null,labelAction:null,labelHidden:{type:Boolean},id:null,accept:null,type:{default:"file"},active:{type:Boolean},error:{type:Boolean},outline:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},overlayText:null,errorOverlayText:null,allowMultiple:{type:Boolean,default:Wk},disabled:{type:Boolean,default:!1},dropOnPage:{type:Boolean},openFileDialog:{type:Boolean},variableHeight:{type:Boolean},customValidator:null},emits:["drop","drop-accepted","drop-rejected","dragover","dragenter","dragleave","file-dialog-close"],setup(t,{emit:n}){const o=t,i=ve("lang"),l=ue(),r=Et(),{useUniqueId:u}=Be(),m=u("DropZone",o.id),x=sm(o.type),v=rm(o.allowMultiple||!1),g=k(null),h=k([]),T=k(!0),N=k("large"),w=k(!1),D=k(!1),B=k(!1),E=o.overlayText?o.overlayText:i.Polaris.DropZone[v][`overlayText${x}`],R=o.errorOverlayText?o.errorOverlayText:i.Polaris.DropZone[`errorOverlayText${x}`],z=i.Polaris.DropZone[v][`label${x}`],Z=p(()=>l.label||o.label?o.labelHidden:!0),F=p(()=>$(Lt.DropZone,o.outline&&Lt.hasOutline,B.value&&Lt.focused,(o.active||w.value)&&Lt.isDragging,o.disabled&&Lt.isDisabled,(D.value||o.error)&&Lt.hasError,!o.variableHeight&&Lt[Le("size",N.value)],T.value&&Lt.measuring)),W=p(()=>(o.active||w.value)&&!D.value&&!o.error&&o.overlay),q=p(()=>w.value&&(D.value||o.error));Se(()=>{j();const ie=o.dropOnPage?document:g.value;!ie||(ie.addEventListener("drop",O),ie.addEventListener("dragover",Y),ie.addEventListener("dragenter",X),ie.addEventListener("dragleave",ce),window.addEventListener("resize",j))}),gt(()=>{const ie=o.dropOnPage?document:g.value;!ie||(ie.removeEventListener("drop",O),ie.removeEventListener("dragover",Y),ie.removeEventListener("dragenter",X),ie.removeEventListener("dragleave",ce),window.removeEventListener("resize",j))});const j=Kt(()=>{if(!g.value)return;if(o.variableHeight){T.value=!1;return}const ie=g.value.getBoundingClientRect().width;N.value="large",ie<100?N.value="small":ie<160&&(N.value="medium"),T.value&&(T.value=!1)},50,{trailing:!0}),le=()=>{B.value=!0},fe=()=>{B.value=!1},ae=()=>{n("file-dialog-close")},Me=ie=>{const Te=[],Ie=[];return Array.from(ie).forEach(Re=>{!Hk(Re,o.accept)||o.customValidator&&!o.customValidator(Re)?Ie.push(Re):Te.push(Re)}),o.allowMultiple||(Te.splice(1,Te.length),Ie.push(...Te.slice(1))),{files:ie,acceptedFiles:Te,rejectedFiles:Ie}},O=ie=>{if(he(ie),o.disabled)return;const Te=qu(ie),{files:Ie,acceptedFiles:Re,rejectedFiles:_e}=Me(Te);h.value=[],w.value=!1,D.value=_e.length>0,n("drop",Ie,Re,_e),Re.length>0&&n("drop-accepted",Re),_e.length>0&&n("drop-rejected",_e),ie.target.value=""},X=ie=>{if(he(ie),o.disabled)return;const Te=qu(ie);if(ie.target&&!h.value.includes(ie.target)&&h.value.push(ie.target),w.value)return;const{rejectedFiles:Ie}=Me(Te);w.value=!0,D.value=Ie.length>0,n("dragenter")},Y=ie=>{he(ie),!o.disabled&&n("dragover")},ce=ie=>{ie.preventDefault(),!o.disabled&&(h.value=h.value.filter(Te=>{const Ie=o.dropOnPage&&!sc?document.body:Te;return Te!==ie.target&&Ie&&Ie.contains(Te)}),!(h.value.length>0)&&(w.value=!1,D.value=!1,n("dragleave")))},de=()=>{const ie=g.value&&g.value.querySelector(`#${m}`);ie&&ie instanceof HTMLElement&&ie.click()};function $e(ie){if(!o.disabled)return r.onClick?r.onClick(ie):de()}const he=ie=>{ie.preventDefault(),ie.stopPropagation()},Ce=Wi({disabled:o.disabled,focused:B,size:N,type:o.type,measuring:T,allowMultiple:o.allowMultiple});return Ge("dropZoneContext",Ce),(ie,Te)=>(s(),A(a(so),{id:a(m),action:t.labelAction,labelHidden:a(Z)},{label:y(()=>[a(l).label?f(ie.$slots,"label",{key:0}):t.label?(s(),d(G,{key:1},[oe(U(t.label),1)],64)):(s(),d(G,{key:2},[oe(U(a(z)),1)],64))]),default:y(()=>[S("div",{ref_key:"dropZoneRef",ref:g,class:c(a(F)),"aria-disabled":t.disabled,onClick:$e,onDragstart:he},[a(W)?(s(),d("div",{key:0,class:c(a(Lt).Overlay)},[C(a(qe),{vertical:"",spacing:"tight"},{default:y(()=>[N.value==="small"?(s(),A(a(re),{key:0,source:a(wk),color:"interactive"},null,8,["source"])):(s(),A(a(ua),{key:1},{default:y(()=>[C(a(ct),{variation:"strong"},{default:y(()=>[oe(U(a(E)),1)]),_:1})]),_:1}))]),_:1})],2)):L("",!0),a(q)?(s(),d("div",{key:1,class:c(a(Lt).Overlay)},[C(a(qe),{vertical:"",spacing:"tight"},{default:y(()=>[N.value==="small"?(s(),A(a(re),{key:0,source:a(Rp),color:"critical"},null,8,["source"])):(s(),A(a(ua),{key:1},{default:y(()=>[C(a(ct),{variation:"strong"},{default:y(()=>[oe(U(a(R)),1)]),_:1})]),_:1}))]),_:1})],2)):L("",!0),C(a(lt),null,{default:y(()=>[C(lm,{type:"file",id:a(m),accept:t.accept,disabled:t.disabled,multiple:t.allowMultiple||!1,openFileDialog:t.openFileDialog,onInput:O,onFocus:le,onBlur:fe,onFileDialogClose:ae},null,8,["id","accept","disabled","multiple","openFileDialog"])]),_:1}),S("div",{class:c(a(Lt).Container)},[f(ie.$slots,"default")],2)],42,Gk)]),_:3},8,["id","action","labelHidden"]))}});fs.__docgenInfo={exportName:"default",displayName:"DropZone",description:"",tags:{},props:[{name:"label",description:"Label for the file input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for file input",required:!1,type:{name:"string"}},{name:"accept",description:"Allowed file types",required:!1,type:{name:"string"}},{name:"type",description:"Whether is a file or an image",tags:{default:[{description:"'file'",title:"default"}]},required:!1,type:{name:"DropZoneFileType"},defaultValue:{func:!1,value:"'file'"}},{name:"active",description:"Sets an active state",required:!1,type:{name:"boolean"}},{name:"error",description:"Sets an error state",required:!1,type:{name:"boolean"}},{name:"outline",description:"Displays an outline border",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlay",description:"Displays an overlay on hover",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlayText",description:"Text that appears in the overlay",required:!1,type:{name:"string"}},{name:"errorOverlayText",description:"Text that appears in the overlay when set in error state",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allows multiple files to be uploaded at once",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"defaultAllowMultiple"}},{name:"disabled",description:"Sets a disabled state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropOnPage",description:"Allows a file to be dropped anywhere on the page",required:!1,type:{name:"boolean"}},{name:"openFileDialog",description:"Sets the default file dialog state",required:!1,type:{name:"boolean"}},{name:"variableHeight",description:"Allows child content to adjust height",required:!1,type:{name:"boolean"}}],events:[{name:"drop",type:{names:["Array"]}},{name:"drop-accepted",type:{names:["Array"]}},{name:"drop-rejected",type:{names:["Array"]}},{name:"dragover"},{name:"dragenter"},{name:"dragleave"},{name:"file-dialog-close"}],slots:[{name:"label"},{name:"default"}]};const Xk={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Kk=S("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM5.3 8.3l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L11 7.4V15a1 1 0 1 1-2 0V7.4L6.7 9.7a1 1 0 0 1-1.4-1.4z",fill:"#5C5F62"},null,-1),Yk=[Kk];function Zk(t,n){return s(),d("svg",Xk,Yk)}var Qk={render:Zk};const Jk="Polaris-DropZone-FileUpload",eN="Polaris-DropZone-FileUpload--large",tN="Polaris-DropZone-FileUpload--small",aN="Polaris-DropZone-FileUpload__Action",nN="Polaris-DropZone-FileUpload--disabled",oN="Polaris-DropZone-FileUpload__ActionTitle";var Po={FileUpload:Jk,large:eN,small:tN,Action:aN,disabled:nN,ActionTitle:oN,"ActionTitle-disabled":"Polaris-DropZone-FileUpload__ActionTitle--disabled","ActionTitle-focused":"Polaris-DropZone-FileUpload__ActionTitle--focused"};const cm=M({props:{actionTitle:null,actionHint:null},setup(t){const n=t,o=ve("lang"),{size:i,measuring:l,type:r,disabled:u,allowMultiple:m}=Th(ve("dropZoneContext")),x=sm(r.value),v=rm(m.value),g=p(()=>n.actionTitle||o.Polaris.DropZone[v][`actionTitle${x}`]),h=$(Po.Action,u.value&&Po.disabled),T=p(()=>$(Po.FileUpload,i.value==="large"&&Po.large,i.value==="small"&&Po.small));return(N,w)=>(s(),d("div",{class:c(a(T))},[a(i)==="large"||a(i)==="medium"?(s(),A(a(qe),{key:0,vertical:"",spacing:"tight"},{default:y(()=>[S("div",{class:c(a(h))},U(a(g)),3),t.actionHint?(s(),A(a(ua),{key:0},{default:y(()=>[C(a(ct),{variation:"subdued"},{default:y(()=>[oe(U(t.actionHint),1)]),_:1})]),_:1})):L("",!0)]),_:1})):(s(),A(a(Qk),{key:1,width:"20"}))],2))}});cm.__docgenInfo={exportName:"default",displayName:"FileUpload",description:"",tags:{},props:[{name:"actionTitle",required:!1,type:{name:"string"}},{name:"actionHint",required:!1,type:{name:"string"}}]};const iN="Polaris-EmptyState",sN="Polaris-EmptyState__Section",lN="Polaris-EmptyState__Details",rN="Polaris-EmptyState__Image",cN="Polaris-EmptyState__ImageContainer",uN="Polaris-EmptyState__DetailsContainer",dN="Polaris-EmptyState--withinContentContainer",pN="Polaris-EmptyState__Content",mN="Polaris-EmptyState--imageContained",yN="Polaris-EmptyState--fullWidth",gN="Polaris-EmptyState__Actions",hN="Polaris-EmptyState__FooterContent";var pt={EmptyState:iN,Section:sN,Details:lN,Image:rN,ImageContainer:cN,DetailsContainer:uN,withinContentContainer:dN,Content:pN,imageContained:mN,fullWidth:yN,Actions:gN,FooterContent:hN};const vs=M({props:{heading:null,image:null,largeImage:null,imageContained:{type:Boolean},fullWidth:{type:Boolean,default:!1},action:null,secondaryAction:null},setup(t){const n=t,o=ve("WithinContentContext",!1),i=ue(),l=p(()=>$(pt.EmptyState,n.fullWidth&&pt.fullWidth,n.imageContained&&pt.imageContained,o&&pt.withinContentContainer)),r=p(()=>o?"small":"medium"),u=p(()=>n.heading||ye(i.default)||n.action||n.secondaryAction||ye(i.footerContent));return(m,x)=>(s(),d("div",{class:c(a(l))},[S("div",{class:c(a(pt).Section)},[a(u)?(s(),d("div",{key:0,class:c(a(pt).DetailsContainer)},[S("div",{class:c(a(pt).Details)},[t.heading||a(ye)(a(i).default)?(s(),A(a(ut),{key:0},{default:y(()=>[t.heading?(s(),A(a(ro),{key:0,size:a(r)},{default:y(()=>[oe(U(t.heading),1)]),_:1},8,["size"])):L("",!0),a(ye)(a(i).default)?(s(),d("div",{key:1,class:c(a(pt).Content)},[f(m.$slots,"default")],2)):L("",!0)]),_:3})):L("",!0),t.action||t.secondaryAction?(s(),d("div",{key:1,class:c(a(pt).Actions)},[C(a(qe),{alignment:"center",distribution:"center",spacing:"tight"},{default:y(()=>[t.action?(s(),A(a(Xe),{key:0,action:t.action,overrides:{primary:!0,size:"medium"}},null,8,["action"])):L("",!0),t.secondaryAction?(s(),A(a(Xe),{key:1,action:t.secondaryAction},null,8,["action"])):L("",!0)]),_:1})],2)):L("",!0),a(ye)(a(i).footerContent)?(s(),d("div",{key:2,class:c(a(pt).FooterContent)},[C(a(ut),null,{default:y(()=>[f(m.$slots,"footerContent")]),_:3})],2)):L("",!0)],2)],2)):(s(),d("div",{key:1,class:c(a(pt).DetailsContainer)},null,2)),S("div",{class:c(a(pt).ImageContainer)},[t.largeImage?(s(),A(a(Yt),{key:0,alt:"",role:"presentation",class:c(a(pt).Image),source:t.largeImage,sourceSet:[{source:t.image,descriptor:"568w"},{source:t.largeImage,descriptor:"1136w"}],sizes:"(max-width: 568px) 60vw"},null,8,["class","source","sourceSet"])):(s(),A(a(Yt),{key:1,role:"presentation",alt:"",class:c(a(pt).Image),source:t.image},null,8,["class","source"]))],2)],2)],2))}});vs.__docgenInfo={exportName:"default",displayName:"EmptyState",description:"",tags:{},props:[{name:"heading",description:"The empty state heading",required:!1,type:{name:"string"}},{name:"image",description:`The path to the image to display.
The image should have ~40px of white space above when empty state is used within a card, modal, or navigation component`,required:!0,type:{name:"string"}},{name:"largeImage",description:"The path to the image to display on large screens",required:!1,type:{name:"string"}},{name:"imageContained",description:"Whether or not to limit the image to the size of its container on large screens",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Whether or not the content should span the full width of its container",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"action",description:"Primary action for empty state",required:!1,type:{name:"ComplexAction"}},{name:"secondaryAction",description:"Secondary action for empty state",required:!1,type:{name:"ComplexAction"}}],slots:[{name:"default"},{name:"footerContent"}]};const bN="Polaris-ExceptionList",fN="Polaris-ExceptionList__Item",vN="Polaris-ExceptionList__Icon",xN="Polaris-ExceptionList--statusWarning",TN="Polaris-ExceptionList--statusCritical",SN="Polaris-ExceptionList__Bullet",CN="Polaris-ExceptionList__Title",AN="Polaris-ExceptionList__Description";var Wt={ExceptionList:bN,Item:fN,Icon:vN,statusWarning:xN,statusCritical:TN,Bullet:SN,Title:CN,Description:AN};const um=M({setup(t){return(n,o)=>(s(),d("ul",{class:c(a(Wt).ExceptionList)},[f(n.$slots,"default")],2))}});um.__docgenInfo={exportName:"default",displayName:"ExceptionList",description:"",tags:{},slots:[{name:"default"}]};const kN="Polaris-Truncate";var NN={Truncate:kN};const dm=M({setup(t){return(n,o)=>{const i=fp("component");return s(),A(i,{class:c(a(NN).Truncate)},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["class"])}}});dm.__docgenInfo={exportName:"default",displayName:"Truncate",description:"",tags:{},slots:[{name:"default"}]};const xs=M({props:{status:null,icon:null,title:null,truncate:{type:Boolean}},setup(t){const n=t,o=ue(),i=p(()=>$(Wt.Item,n.status&&Wt[Le("status",n.status)]));return(l,r)=>(s(),d("li",{class:c(a(i))},[S("span",{class:c(a(Wt).Icon)},[t.icon?(s(),A(a(re),{key:0,source:t.icon},null,8,["source"])):(s(),d("span",{key:1,class:c(a(Wt).Bullet)},null,2))],2),t.truncate?(s(),A(a(dm),{key:0},{default:y(()=>[t.title?(s(),d("span",{key:0,class:c(a(Wt).Title)},U(t.title),3)):L("",!0),a(o).default?(s(),d("span",{key:1,class:c(a(Wt).Description)},[f(l.$slots,"default")],2)):L("",!0)]),_:3})):(s(),d(G,{key:1},[t.title?(s(),d("span",{key:0,class:c(a(Wt).Title)},U(t.title),3)):L("",!0),a(o).default?(s(),d("span",{key:1,class:c(a(Wt).Description)},[f(l.$slots,"default")],2)):L("",!0)],64))],2))}});xs.__docgenInfo={exportName:"default",displayName:"ExceptionListItem",description:"",tags:{},props:[{name:"status",description:"Set the color of the icon and title for the given item.",required:!1,type:{name:"union",elements:[{name:'"critical"'},{name:'"warning"'}]}},{name:"icon",description:"Icon displayed by the list item",required:!1,type:{name:"IconSource"}},{name:"title",description:"Text displayed beside the icon",required:!1,type:{name:"string"}},{name:"truncate",description:"Should the description be truncated at end of line",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const LN={inheritAttrs:!1,render(){return null}},pm=M(_(b({},LN),{props:{disabled:{type:Boolean},root:null},setup(t){const n=t,o=()=>{!n.disabled&&n.root&&!n.root.querySelector("[autofocus]")&&qo(n.root,!1)};return Ee([()=>n.disabled,()=>n.root],()=>o()),Se(()=>{o()}),()=>{}}}));pm.__docgenInfo={exportName:"default",displayName:"Focus",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"root",required:!0,type:{name:"union",elements:[{name:"HTMLElement"},{name:"null"}]}}]};const wN="Polaris-FooterHelp",PN="Polaris-FooterHelp__Text";var Ru={FooterHelp:wN,Text:PN};const Ts=M({setup(t){return(n,o)=>(s(),d("div",{class:c(a(Ru).FooterHelp)},[S("div",{class:c(a(Ru).Text)},[f(n.$slots,"default")],2)],2))}});Ts.__docgenInfo={exportName:"default",displayName:"FooterHelp",description:"",tags:{},slots:[{name:"default"}]};const MN=["acceptCharset","action","encType","method","name","noValidate","target","autocomplete"],_N=S("button",{type:"submit","aria-hidden":"true",tabIndex:"-1"},"Submit",-1),Ss=M({props:{acceptCharset:null,action:null,autoComplete:{type:Boolean},encType:null,implicitSubmit:{type:Boolean,default:!0},method:{default:"post"},name:null,noValidate:{type:Boolean},preventDefault:{type:Boolean,default:!0},target:null},emits:["submit"],setup(t,{emit:n}){const o=t,i=p(()=>{if(typeof o.autoComplete!="undefined")return o.autoComplete?"on":"off"}),l=r=>{o.preventDefault&&r.preventDefault(),n("submit",r)};return(r,u)=>(s(),d("form",{acceptCharset:t.acceptCharset||void 0,action:t.action,encType:t.encType,method:t.method,name:t.name,noValidate:t.noValidate,target:t.target,autocomplete:a(i),onSubmit:l},[t.implicitSubmit?(s(),A(a(lt),{key:0},{default:y(()=>[_N]),_:1})):L("",!0),f(r.$slots,"default")],40,MN))}});Ss.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"acceptCharset",description:"Space separated list of character encodings",required:!1,type:{name:"string"}},{name:"action",description:"Where to send form-data on submittal",required:!1,type:{name:"string"}},{name:"autoComplete",description:"Grants the browser the ability to autocomplete input elements",required:!1,type:{name:"boolean"}},{name:"encType",description:"Media type when submitting content to server",required:!1,type:{name:"Enctype"}},{name:"implicitSubmit",description:"Toggles if form submits on Enter keypress. Defaults to true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"method",description:"Method used to submit form",required:!1,type:{name:"Method"},defaultValue:{func:!1,value:"'post'"}},{name:"name",description:"A unique name for the form",required:!1,type:{name:"string"}},{name:"noValidate",description:"Whether or not form is validated when submitting",required:!1,type:{name:"boolean"}},{name:"preventDefault",description:"Blocks the default form action",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"target",description:"Where to display response after form submittal",required:!1,type:{name:"Target"}}],events:[{name:"submit",type:{names:["Event"]}}],slots:[{name:"default"}]};const DN="Polaris-FormLayout",IN="Polaris-FormLayout__Title",BN="Polaris-FormLayout__Items",$N="Polaris-FormLayout__HelpText",FN="Polaris-FormLayout__Item",EN="Polaris-FormLayout--grouped",ON="Polaris-FormLayout--condensed";var ra={FormLayout:DN,Title:IN,Items:BN,HelpText:$N,Item:FN,grouped:EN,condensed:ON};const bc=M({setup(t){return(n,o)=>(s(),d("div",{class:c(a(ra).Item)},[f(n.$slots,"default")],2))}});bc.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const fc=M({props:{condensed:{type:Boolean}},setup(t,{expose:n}){const o=t,i=ue(),{useUniqueId:l}=Be(),r=l("FormLayoutGroup"),u=`${r}HelpText`,m=`${r}Title`;n({name:"FormGroup"});const x=p(()=>$(o.condensed?ra.condensed:ra.grouped));return(v,g)=>(s(),d("div",{role:"group",class:c(a(x)),"aria-labelledby":m,"aria-describedby":u},[a(i).title?(s(),d("div",{key:0,id:m,class:c(a(ra).Title)},[f(v.$slots,"title")],2)):L("",!0),S("div",{class:c(a(ra).Items)},[a(i).default?(s(!0),d(G,{key:0},be(a(i).default(),(h,T)=>(s(),A(a(bc),{key:T},{default:y(()=>[(s(),A(Oe(h)))]),_:2},1024))),128)):f(v.$slots,"default",{key:1})],2),a(i)["help-text"]?(s(),d("div",{key:1,id:u,class:c(a(ra).HelpText)},[f(v.$slots,"help-text")],2)):L("",!0)],2))}});fc.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"condensed",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"},{name:"help-text"}]};const Rt=M({setup(t){const n=k([]),o=k([]),i=ue(),l=p(()=>{const r=[];return i.default&&i.default().map(u=>{const m=u.children;if(!(typeof m=="string"&&m==="v-if"))if(u.type.toString()==="Symbol(Fragment)"||u.type.toString()==="Symbol()")for(const x of m)r.push(x);else r.push(u)}),r});return Sh(()=>{n.value=[]}),Se(()=>{n.value.forEach(r=>{o.value.push(r.name==="FormGroup")})}),(r,u)=>(s(),d("div",{class:c(a(ra).FormLayout)},[a(l).length?(s(!0),d(G,{key:0},be(a(l),(m,x)=>(s(),d(G,null,[o.value[x]?(s(),A(Oe(m),{key:1,ref_for:!0,ref:v=>{n.value[x]=v}},null,512)):(s(),A(a(bc),{key:x,class:c(a(ra).Item)},{default:y(()=>[(s(),A(Oe(m),{ref_for:!0,ref:v=>{n.value[x]=v}},null,512))]),_:2},1032,["class"]))],64))),256)):f(r.$slots,"default",{key:1})],2))}});Rt.__docgenInfo={exportName:"default",displayName:"FormLayout",description:"",tags:{},slots:[{name:"default"}]};function Vu(t,n,o){if(!document)return;(o||document.documentElement).style.setProperty(t,n)}const qN="Polaris-Frame",RN="Polaris-Frame__Navigation",VN="Polaris-Frame--hasTopBar",HN="Polaris-Frame__NavigationDismiss",UN="Polaris-Frame__TopBar",jN="Polaris-Frame__ContextualSaveBar",zN="Polaris-Frame__Main",WN="Polaris-Frame--hasNav",GN="Polaris-Frame__Content",XN="Polaris-Frame__GlobalRibbonContainer",KN="Polaris-Frame__LoadingBar",YN="Polaris-Frame__Skip",ZN="Polaris-Frame--focused",QN="Polaris-Frame--pressed";var Qe={Frame:qN,Navigation:RN,hasTopBar:VN,"Navigation-enter":"Polaris-Frame__Navigation--enter","Navigation-enterActive":"Polaris-Frame__Navigation--enterActive","Navigation-exit":"Polaris-Frame__Navigation--exit","Navigation-exitActive":"Polaris-Frame__Navigation--exitActive",NavigationDismiss:HN,"Navigation-visible":"Polaris-Frame__Navigation--visible",TopBar:UN,ContextualSaveBar:jN,Main:zN,hasNav:WN,Content:GN,GlobalRibbonContainer:XN,LoadingBar:KN,Skip:YN,focused:ZN,pressed:QN};const JN={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},eL=S("path",{d:"m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"},null,-1),tL=[eL];function aL(t,n){return s(),d("svg",JN,tL)}var vc={render:aL};const nL="Polaris-Frame-CssAnimation--startFade",oL="Polaris-Frame-CssAnimation--endFade";var Hu={startFade:nL,endFade:oL};const mm=M({props:{in:{type:Boolean},type:null},setup(t){const n=t,o={Entering:"entering",Entered:"entered",Exiting:"exiting",Exited:"exited"},i=k(null),l=k(n.in?o.Entering:o.Exited),r=p(()=>$(Hu[Le("start",n.type)],n.in&&Hu[Le("end",n.type)]));Ee(()=>l.value,()=>{l.value===o.Entering&&m(o.Entered)}),Ee(()=>n.in,()=>{n.in&&m(o.Entering),!n.in&&m(o.Exiting)});const u=()=>{l.value===o.Exiting&&m(o.Exited)},m=x=>{l.value=x,x===o.Entering&&i.value&&i.value.getBoundingClientRect()};return(x,v)=>(s(),d("div",{class:c(a(r)),ref_key:"frameCssAnimationRef",ref:i,onTransitionend:u},[l.value!==o.Exited||n.in?f(x.$slots,"default",{key:0}):L("",!0)],34))}});mm.__docgenInfo={exportName:"default",displayName:"CssAnimation",description:"",tags:{},props:[{name:"in",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"AnimationType"}}],slots:[{name:"default"}]};function iL(t){const n=typeof t;return t!=null&&(n==="object"||n==="function")}function ym(t,n){if(!t)return null;const o=Object.keys(t);for(const i of o){if(i===n)return t[n];if(iL(t[i])){const l=ym(t[i],n);if(l)return l}}return null}function xc(t={},n=0,o="width"){const i=typeof t=="number"?t:ym(t,o);return i?`${i}px`:`${n}px`}const sL="Polaris-Frame-ContextualSaveBar",lL="Polaris-Frame-ContextualSaveBar__LogoContainer",rL="Polaris-Frame-ContextualSaveBar__ContextControl",cL="Polaris-Frame-ContextualSaveBar__Message",uL="Polaris-Frame-ContextualSaveBar__Contents",dL="Polaris-Frame-ContextualSaveBar--fullWidth",pL="Polaris-Frame-ContextualSaveBar__ActionContainer",mL="Polaris-Frame-ContextualSaveBar__Action";var fa={ContextualSaveBar:sL,LogoContainer:lL,ContextControl:rL,Message:cL,Contents:uL,fullWidth:dL,ActionContainer:pL,Action:mL};const gm=M({props:{open:{type:Boolean}},emits:["discard","cancel"],setup(t,{emit:n}){const o=ve("lang"),i=o.Polaris.DiscardConfirmationModal.message,l=o.Polaris.DiscardConfirmationModal.title,r=o.Polaris.DiscardConfirmationModal.primaryAction,u=o.Polaris.DiscardConfirmationModal.secondaryAction,m=()=>{n("discard")},x=()=>{n("cancel")};return(v,g)=>(s(),A(a(Ia),{open:t.open,onClose:x,primaryAction:{content:a(r),destructive:!0,onAction:m},secondaryActions:[{content:a(u),onAction:x}],sectioned:""},{title:y(()=>[oe(U(a(l)),1)]),content:y(()=>[oe(U(a(i)),1)]),_:1},8,["open","primaryAction","secondaryActions"]))}});gm.__docgenInfo={exportName:"default",displayName:"DiscardConfirmationModal",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}}],events:[{name:"discard"},{name:"cancel"}]};const hm=M({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=ue(),l=p(()=>$(fa.Contents,n.fullWidth&&fa.fullWidth)),r=o.Polaris.ContextualSaveBar.save,u=o.Polaris.ContextualSaveBar.discard,{useFrame:m}=lo(),{logo:x}=m(),v=xc(x,104),g=k(!1),h=()=>{g.value=!g.value},T=()=>{g.value=!1},N=()=>{n.discardAction&&(n.discardAction.discardConfirmationModal?h():n.discardAction.onAction&&n.discardAction.onAction())},w=()=>{n.discardAction&&n.discardAction.onAction&&n.discardAction.onAction(),T()};return(D,B)=>(s(),d(G,null,[C(a(ea),{"color-scheme":"dark"},{default:y(()=>[S("div",{class:c(a(fa).ContextualSaveBar)},[a(i).contextControl?(s(),d("div",{key:0,class:c(a(fa).ContextControl)},[f(D.$slots,"contextControl")],2)):L("",!0),!t.alignContentFlush&&!a(i).contextControl?(s(),d("div",{key:1,class:c(a(fa).LogoContainer),style:Fe(a(v))},[a(x)?(s(),A(a(Yt),{key:0,style:Fe({width:a(v)}),source:a(x).contextualSaveBarSource||"",alt:""},null,8,["style","source"])):L("",!0)],6)):L("",!0),S("div",{class:c(a(l))},[S("h2",{class:c(a(fa).Message)},U(t.message),3),S("div",{class:c(a(fa).ActionContainer)},[C(a(qe),{spacing:"tight",wrap:!1},{default:y(()=>[f(D.$slots,"secondaryMenu"),t.discardAction?(s(),A(a(ge),{key:0,url:t.discardAction.url,loading:t.discardAction.loading,disabled:t.discardAction.disabled,accessibilityLabel:t.discardAction.content,onClick:N},{default:y(()=>[t.discardAction.content?(s(),d(G,{key:0},[oe(U(t.discardAction.content),1)],64)):(s(),d(G,{key:1},[oe(U(a(u)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel"])):L("",!0),t.saveAction?(s(),A(a(ge),{key:1,primary:"",url:t.saveAction.url,loading:t.saveAction.loading,disabled:t.saveAction.disabled,accessibilityLabel:t.saveAction.content,onClick:t.saveAction.onAction},{default:y(()=>[t.saveAction.content?(s(),d(G,{key:0},[oe(U(t.saveAction.content),1)],64)):(s(),d(G,{key:1},[oe(U(a(r)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel","onClick"])):L("",!0)]),_:3})],2)],2)],2)]),_:3}),t.discardAction&&t.discardAction.onAction&&t.discardAction.discardConfirmationModal?(s(),A(a(gm),{key:0,open:g.value,onCancel:h,onDiscard:w},null,8,["open"])):L("",!0)],64))}});hm.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}}],slots:[{name:"contextControl"},{name:"secondaryMenu"}]};const yL="Polaris-Frame-Loading",gL="Polaris-Frame-Loading__Level";var Uu={Loading:yL,Level:gL};const hL=["aria-valuenow","aria-label"],bm=M({setup(t){const o=ve("lang"),i=k(0),l=k(!1),r=p(()=>({transform:`scaleX(${Math.floor(i.value)/100})`}));Se(()=>{u()}),Ee(()=>[l.value,i.value],()=>{u()});const u=()=>{i.value>=99||l.value||requestAnimationFrame(()=>{const x=Math.max((99-i.value)/10,1);l.value=!0,i.value=i.value+x})},m=()=>{l.value=!1};return(x,v)=>(s(),d("div",{class:c(a(Uu).Loading),"aria-valuenow":i.value,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar","aria-label":a(o).Polaris.Loading.label},[S("div",{class:c(a(Uu).Level),style:Fe(a(r)),onTransitionend:m},null,38)],10,hL))}});bm.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const bL="Polaris-Frame-Toast",fL="Polaris-Frame-Toast__Action",vL="Polaris-Frame-Toast--error",xL="Polaris-Frame-Toast__CloseButton";var qi={Toast:bL,Action:fL,error:vL,CloseButton:xL};const fm=M({props:{content:null,duration:null,error:{type:Boolean},action:null},emits:["dismiss"],setup(t,{emit:n}){const o=t,i=5e3,l=1e4,r=k(),u=p(()=>$(qi.Toast,o.error&&qi.error));Se(()=>{let x=o.duration||i;o.action&&!o.duration?x=l:o.action&&o.duration&&o.duration<l&&console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it."),r.value=setTimeout(m,x)}),gt(()=>{clearTimeout(r.value)});const m=()=>{n("dismiss")};return(x,v)=>(s(),A(a(ea),{"color-scheme":"dark"},{default:y(()=>[S("div",{class:c(a(u))},[C(a(St),{keyCode:a(We).Escape,handler:m},null,8,["keyCode"]),oe(U(t.content),1),f(x.$slots,"default"),t.action?(s(),d("div",{key:0,class:c(a(qi).Action)},[C(a(ge),{plain:"",monochrome:"",onClick:t.action.onAction},{default:y(()=>[oe(U(t.action.content),1)]),_:1},8,["onClick"])],2)):L("",!0),S("button",{type:"button",class:c(a(qi).CloseButton),onClick:m},[C(a(re),{source:a(vc)},null,8,["source"])],2)],2)]),_:3}))}});fm.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const TL="Polaris-Frame-ToastManager",SL="Polaris-Frame-ToastManager__ToastWrapper";var Mo={ToastManager:TL,ToastWrapper:SL,"ToastWrapper-enter":"Polaris-Frame-ToastManager__ToastWrapper--enter","ToastWrapper-exit":"Polaris-Frame-ToastManager__ToastWrapper--exit","ToastWrapper-enter-done":"Polaris-Frame-ToastManager--toastWrapperEnterDone"};const vm=M({props:{toastMessages:null},setup(t){const n=t,o=400,i=k([]),l=k(!1),r=()=>{let h=0;n.toastMessages.forEach((T,N)=>{const w=i.value[N];!w||(h+=w.clientHeight,w.style.setProperty("--pc-toast-manager-translate-y-in",`-${h}px`),w.style.setProperty("--pc-toast-manager-translate-y-out",`${-h+150}px`))})},u=h=>{h.classList.add(g.enterDone)},m=h=>{h.classList.add(g.enter)},x=(h,T)=>{h.classList.remove(g.enter),h.classList.add(g.enterDone),setTimeout(T,o)},v=(h,T)=>{h.classList.remove(g.enterDone),h.classList.add(g.exit),setTimeout(T,o)};Ee(()=>n.toastMessages,()=>{setTimeout(r,0)}),Se(()=>{l.value=!0});const g={enter:$(Mo["ToastWrapper-enter"]),enterDone:$(Mo["ToastWrapper-enter-done"]),exit:$(Mo["ToastWrapper-exit"])};return(h,T)=>l.value?(s(),A(a(Vo),{key:0},{default:y(()=>[C(a(it),{event:"resize",handler:r}),S("div",{class:c(a(Mo).ToastManager),"aria-live":"assertive"},[C(Ch,{name:"custom-classes",onAfterEnter:u,onBeforeEnter:m,onEnter:x,onLeave:v},{default:y(()=>[t.toastMessages.length>0?(s(!0),d(G,{key:0},be(t.toastMessages,(N,w)=>(s(),d("div",{key:N.id,ref_for:!0,ref:D=>{i.value[w]=D},class:c(a(Mo).ToastWrapper)},[C(a(fm),Ze(_t(N)),null,16)],2))),128)):L("",!0)]),_:1})],2)]),_:1})):L("",!0)}});vm.__docgenInfo={exportName:"default",displayName:"ToastManager",description:"",tags:{},props:[{name:"toastMessages",required:!0,type:{name:"Array",elements:[{name:"ToastPropsWithID"}]}}]};function ma(){const t=ve("mediaQueryContext",{});function n(){if(!t)throw new cc("No mediaQuery was provided.");return t}return{useMediaQuery:n}}const CL=["data-has-navigation"],AL=["href"],kL=["aria-label","hidden"],NL=["aria-hidden","aria-label","tabIndex"],LL=["data-has-global-ribbon"],ta=M({props:{logo:null,offset:null,showMobileNavigation:{type:Boolean},skipToContentTarget:null},emits:["navigation-dismiss"],setup(t,{emit:n}){const o=t,i="AppFrameMain",l="AppFrameNav",r="AppFrameTopBar",u="AppFrameLoadingBar",m=400,x=300,v=ue(),g=ve("lang"),h=k(!1),T=k(0),N=k(0),w=k([]),D=k(!1),B=k(null),E=k({}),R=k(null),{useMediaQuery:z}=ma(),{isNavigationCollapsed:Z}=z(),F=k(null),W=()=>{F.value&&(T.value=F.value.offsetHeight,Te())},q=p(()=>$(Qe.Navigation,o.showMobileNavigation&&Qe["Navigation-visible"])),j={enter:$(Qe["Navigation-enter"]),enterActive:$(Qe["Navigation-enterActive"]),enterDone:$(Qe["Navigation-enterActive"]),exit:$(Qe["Navigation-exit"]),exitActive:$(Qe["Navigation-exitActive"])},le=Q=>{Q.classList.add(j.enterDone)},fe=Q=>{Q.classList.add(j.enter)},ae=(Q,xe)=>{Q.classList.remove(j.enter),Q.classList.add(j.enterDone),setTimeout(xe,x)},Me=Q=>{Q.classList.remove(j.enterActive),Q.classList.add(j.exitActive)},O=(Q,xe)=>{Q.classList.add(j.exit),setTimeout(xe,x)},X=p(()=>Z&&!o.showMobileNavigation),Y=p(()=>Z&&o.showMobileNavigation),ce=Y.value?0:-1,de=b({},Y.value&&{"aria-modal":!0,role:"dialog"}),$e=p(()=>$(Qe.Frame,v.navigation&&Qe.hasNav,v.topBar&&Qe.hasTopBar)),he=p(()=>$(Qe.Skip,h.value&&Qe.focused)),Ce=p(()=>o.skipToContentTarget?o.skipToContentTarget.id:i);Se(()=>{bt(),!v.globalRibbon&&(Te(),ie())}),Ee(()=>v.globalRibbon,()=>{W(),ie()});const ie=()=>{Vu("--pc-frame-offset",o.offset||"0px")},Te=()=>{Vu("--pc-frame-global-ribbon-height",`${T.value}px`)},Ie=Q=>{const xe=w.value.find(({id:Ve})=>Ve===Q.id)!=null;w.value=xe?w.value:[...w.value,Q]},Re=({id:Q})=>{w.value=w.value.filter(({id:xe})=>Q!==xe)},_e=Q=>{const ft=Q,{contextControl:xe,secondaryMenu:Ve}=ft,He=J(ft,["contextControl","secondaryMenu"]);B.value=He,E.value={contextControl:xe,secondaryMenu:Ve},D.value||(D.value=!0)},dt=()=>{D.value=!1,setTimeout(()=>{B.value=null},m)},Ht=()=>{N.value=N.value+1},ht=()=>{N.value=Math.max(0,N.value-1)},bt=()=>{v.globalRibbon&&W()},ne=()=>{h.value=!0},ke=()=>{h.value=!1},je=Q=>{o.skipToContentTarget&&(o.skipToContentTarget.focus(),Q.preventDefault())},I=()=>{n("navigation-dismiss")},K=Q=>{const{key:xe}=Q;Z&&o.showMobileNavigation&&xe==="Escape"&&I()};return Ge("frameContext",{logo:o.logo,showToast:Ie,hideToast:Re,startLoading:Ht,stopLoading:ht,setContextualSaveBar:_e,removeContextualSaveBar:dt}),(Q,xe)=>(s(),d("div",me({class:a($e)},a(zi).props,{"data-has-navigation":a(v).navigation?!0:void 0}),[S("div",{class:c(a(he))},[S("a",{href:`#${a(Ce)}`,onFocus:ne,onBlur:ke,onClick:je},U(a(g).Polaris.Frame.skipToContent),41,AL)],2),a(v).topBar?(s(),d("div",me({key:0,class:a(Qe).TopBar},b(b({},a(zi).props),a(ic).props),{id:r}),[f(Q.$slots,"topBar")],16)):L("",!0),a(v).navigation?(s(),A(a(es),{key:1,trapping:a(Y)},{default:y(()=>[C(vp,{name:"custom-classes",onAfterEnter:le,onBeforeEnter:fe,onEnter:ae,onBeforeLeave:Me,onLeave:O},{default:y(()=>[t.showMobileNavigation||!a(Z)?(s(),d("div",me({key:0},de,{key:"NavContent",id:l,"aria-label":a(g).Polaris.Frame.navigationLabel,class:a(q),ref_key:"navigationRef",ref:R,onKeydown:K,hidden:a(X)}),[f(Q.$slots,"navigation"),S("button",{type:"button",class:c(a(Qe).NavigationDismiss),onClick:I,"aria-hidden":a(X)||!a(Z)&&!t.showMobileNavigation,"aria-label":a(g).Polaris.Frame.Navigation.closeMobileNavigationLabel,tabIndex:a(ce)},[C(a(re),{source:a(vc)},null,8,["source"])],10,NL)],16,kL)):L("",!0)]),_:3})]),_:3},8,["trapping"])):L("",!0),C(a(mm),{in:D.value,class:c(a(Qe).ContextualSaveBar),type:"fade"},{default:y(()=>[B.value?(s(),A(a(hm),Ze(me({key:0},B.value)),Ue({_:2},[E.value.contextControl?{name:"contextControl",fn:y(()=>[(s(!0),d(G,null,be(E.value.contextControl,(Ve,He)=>(s(),A(Oe(Ve),{key:He}))),128))])}:void 0,E.value.secondaryMenu?{name:"secondaryMenu",fn:y(()=>[(s(!0),d(G,null,be(E.value.secondaryMenu,(Ve,He)=>(s(),A(Oe(Ve),{key:He}))),128))])}:void 0]),1040)):L("",!0)]),_:1},8,["in","class"]),N.value>0?(s(),d("div",{key:2,class:c(a(Qe).LoadingBar),id:u},[C(a(bm))],2)):L("",!0),t.showMobileNavigation&&a(Z)?(s(),A(a(dc),{key:3,belowNavigation:"",onClick:I,onTouchstart:I})):L("",!0),S("main",{class:c(a(Qe).Main),id:i,"data-has-global-ribbon":!!a(v).globalRibbon},[S("div",{class:c(a(Qe).Content)},[f(Q.$slots,"default")],2)],10,LL),C(a(vm),{"toast-messages":w.value},null,8,["toast-messages"]),a(v).globalRibbon?(s(),d("div",{key:4,class:c(a(Qe).GlobalRibbonContainer),ref_key:"globalRibbonContainerRef",ref:F},[f(Q.$slots,"globalRibbon")],2)):L("",!0),C(a(it),{event:"resize",handler:bt})],16,CL))}});ta.__docgenInfo={exportName:"default",displayName:"Frame",description:"",tags:{},props:[{name:"logo",description:"Sets the logo for the TopBar, Navigation, and ContextualSaveBar components",required:!1,type:{name:"Logo"}},{name:"offset",description:"A horizontal offset that pushes the frame to the right, leaving empty space on the left",required:!1,type:{name:"string"}},{name:"showMobileNavigation",description:"A boolean property indicating whether the mobile navigation is currently visible",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"skipToContentTarget",description:"Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link",required:!1,type:{name:"HTMLAnchorElement"}}],events:[{name:"navigation-dismiss"}],slots:[{name:"topBar"},{name:"navigation"},{name:"default"},{name:"globalRibbon"}]};const wL="Polaris-Heading";var PL={Heading:wL};const It=M({props:{element:{default:"h2"},id:null},setup(t){return(n,o)=>(s(),A(Oe(t.element),{id:t.id,class:c(a(PL).Heading)},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["id","class"]))}});It.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the heading",tags:{default:[{description:"'h2'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h2'"}},{name:"id",description:`A unique identifier for the heading,
used for reference in anchor links`,required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const ML="Polaris-Indicator",_L="Polaris-Indicator--pulseIndicator";var ju={Indicator:ML,pulseIndicator:_L};const Jr=M({props:{pulse:{type:Boolean,default:!1}},setup(t){const n=t,o=p(()=>$(ju.Indicator,n.pulse&&ju.pulseIndicator));return(i,l)=>(s(),d("span",{class:c(a(o))},null,2))}});Jr.__docgenInfo={exportName:"default",displayName:"Indicator",description:"",tags:{},props:[{name:"pulse",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const DL="Polaris-KeyboardKey";var IL={KeyboardKey:DL};const Cs=M({setup(t){const n=ue(),o=p(()=>{const i=n.default&&n.default()[0].children?n.default()[0].children:"";return typeof i=="string"?i.length>1?i.toLowerCase():i.toUpperCase():i});return(i,l)=>(s(),d("kbd",{class:c(a(IL).KeyboardKey)},U(a(o)),3))}});Cs.__docgenInfo={exportName:"default",displayName:"KeyboardKey",description:"",tags:{}};const BL="Polaris-Layout",$L="Polaris-Layout__Section",FL="Polaris-Layout__AnnotatedSection",EL="Polaris-Layout__AnnotationWrapper",OL="Polaris-Layout__AnnotationContent",qL="Polaris-Layout__Annotation",RL="Polaris-Layout__AnnotationDescription";var Dt={Layout:BL,Section:$L,"Section-secondary":"Polaris-Layout__Section--secondary","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:FL,AnnotationWrapper:EL,AnnotationContent:OL,Annotation:qL,AnnotationDescription:RL};const aa=M({props:{secondary:{type:Boolean},fullWidth:{type:Boolean},oneHalf:{type:Boolean},oneThird:{type:Boolean}},setup(t){const n=t,o=p(()=>$(Dt.Section,n.secondary&&Dt["Section-secondary"],n.fullWidth&&Dt["Section-fullWidth"],n.oneHalf&&Dt["Section-oneHalf"],n.oneThird&&Dt["Section-oneThird"]));return(i,l)=>(s(),d("div",{class:c(a(o))},[f(i.$slots,"default")],2))}});aa.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"secondary",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"oneHalf",required:!1,type:{name:"boolean"}},{name:"oneThird",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const VL="Polaris-TextContainer",HL="Polaris-TextContainer--spacingTight",UL="Polaris-TextContainer--spacingLoose";var zu={TextContainer:VL,spacingTight:HL,spacingLoose:UL};const ut=M({props:{spacing:null},setup(t){const n=t,o=p(()=>n.spacing&&zu[Le("spacing",n.spacing)]),i=p(()=>$(zu.TextContainer,o.value));return(l,r)=>(s(),d("div",{class:c(a(i))},[f(l.$slots,"default")],2))}});ut.__docgenInfo={exportName:"default",displayName:"TextContainer",description:"",tags:{},props:[{name:"spacing",description:"The amount of vertical spacing children will get between them",required:!1,type:{name:"Spacing"}}],slots:[{name:"default"}]};const ya=M({props:{id:null},setup(t){const n=ue(),o=p(()=>{var l;return(l=n.description)==null?void 0:l.call(n)}),i=p(()=>Boolean(o.value&&(o.value.length>=2||o.value[0]&&(o.value[0].type.toString()!=="Symbol(Text)"||o.value[0].type.toString()!=="Symbol()"))));return(l,r)=>(s(),d("div",{class:c(a(Dt).AnnotatedSection)},[S("div",{class:c(a(Dt).AnnotationWrapper)},[S("div",{class:c(a(Dt).Annotation)},[C(a(ut),null,{default:y(()=>[C(a(It),{id:t.id},{default:y(()=>[f(l.$slots,"title")]),_:3},8,["id"]),a(i)?f(l.$slots,"description",{key:1}):(s(),d("div",{key:0,class:c(a(Dt).AnnotationDescription)},[f(l.$slots,"description")],2))]),_:3})],2),S("div",{class:c(a(Dt).AnnotationContent)},[f(l.$slots,"default")],2)],2)],2))}});ya.__docgenInfo={exportName:"default",displayName:"AnnotatedSection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"description"},{name:"default"}]};const Vt=M({props:{sectioned:{type:Boolean}},setup(t){return(n,o)=>(s(),d("div",{class:c(a(Dt).Layout)},[t.sectioned?(s(),A(a(aa),{key:0},{default:y(()=>[f(n.$slots,"default")]),_:3})):f(n.$slots,"default",{key:1})],2))}});Vt.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"sectioned",description:"Automatically adds sections to layout",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const jL="Polaris-Link",zL="Polaris-Link__IconLockup",WL="Polaris-Link__IconLayout",GL="Polaris-Link--monochrome",XL="Polaris-Link--removeUnderline";var va={Link:jL,IconLockup:zL,IconLayout:WL,monochrome:GL,removeUnderline:XL};const KL=["id","aria-label"],ga=M({props:{id:null,url:null,to:null,external:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},accessibilityLabel:null},setup(t){const n=t,o=p(()=>$(va.Link,n.monochrome&&va.monochrome,n.removeUnderline&&va.removeUnderline));return(i,l)=>t.url||t.to?(s(),A(a(yt),{key:0,id:t.id,to:t.to,url:t.url,class:c(a(o)),external:t.external,"aria-label":t.accessibilityLabel},{default:y(()=>[f(i.$slots,"default"),S("span",{class:c(a(va).IconLockup)},[S("span",{class:c(a(va).IconLayout)},[C(a(re),{source:a(Tu)},null,8,["source"])],2)],2)]),_:3},8,["id","to","url","class","external","aria-label"])):(s(),d("button",{key:1,id:t.id,type:"button",class:c(a(o)),"aria-label":t.accessibilityLabel,onClick:l[0]||(l[0]=r=>i.$emit("click"))},[f(i.$slots,"default"),S("span",{class:c(a(va).IconLockup)},[S("span",{class:c(a(va).IconLayout)},[C(a(re),{source:a(Tu)},null,8,["source"])],2)],2)],10,KL))}});ga.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"id",description:"ID for the link",required:!1,type:{name:"string"}},{name:"url",description:"The url to link to",required:!1,type:{name:"string"}},{name:"to",description:"Using with vue-router",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"external",description:"Makes the link open in a new tab",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes the link color the same as the current text color and adds an underline",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes text decoration underline to the link",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const YL="Polaris-List",ZL="Polaris-List--typeNumber",QL="Polaris-List__Item";var ec={List:YL,typeNumber:ZL,Item:QL};const Da=M({props:{type:{default:"bullet"}},setup(t){const n=t,o=p(()=>{const l=Le("type",n.type);return $(ec.List,n.type&&ec[l])}),i=n.type==="bullet"?"ul":"ol";return(l,r)=>(s(),A(Oe(a(i)),{class:c(a(o))},{default:y(()=>[f(l.$slots,"default")]),_:3},8,["class"]))}});Da.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"type",description:"Type of list to display",tags:{values:[{description:"bullet | number",title:"values"}],default:[{description:"bullet",title:"default"}]},required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'bullet'"}}],slots:[{name:"default"}]};const zo=M({setup(t){return(n,o)=>(s(),d("li",{class:c(a(ec).Item)},[f(n.$slots,"default")],2))}});zo.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const JL="Polaris-Listbox";var ew={Listbox:JL},tc=(t=>(t.FirstSelected="FIRST_SELECTED",t.First="FIRST",t))(tc||{});const tw={"aria-live":"polite"},aw=["aria-label","aria-labelledby","aria-busy","asia-activedescendant","id"],Nt=M({props:{autoSelection:{default:tc.FirstSelected},enableKeyboardControl:{type:Boolean},accessibilityLabel:null,customListId:null},emits:["select","on-active-option-change"],setup(t,{emit:n}){const o=t,i="[data-listbox-option]",l="data-listbox-option-value",r="data-listbox-option-action",u="data-focused";Ge("withinListboxContext",!0);const m=ve("comboboxListboxContext",{}),{listboxId:x,textFieldLabelId:v,textFieldFocused:g,willLoadMoreOptions:h,setActiveOptionId:T,setListboxId:N,onOptionSelected:w,onKeyToBottom:D}=m,B=ue(),{useUniqueId:E}=Be(),R=o.customListId||E("Listbox"),z=p(()=>Boolean(T)),Z=p(()=>x||""),F=k(null),W=k(null),q=k(""),j=k(!1),le=k([]),fe=k(Boolean(o.enableKeyboardControl));let ae;Ee([()=>R,()=>Z],()=>{N&&!x&&N(R)}),Ee([()=>ae,()=>q],()=>{!q.value&&B.default&&B.default().length>0&&he()}),Ee([()=>o.enableKeyboardControl,()=>fe],()=>{o.enableKeyboardControl&&!fe.value&&(fe.value=!0)});const Me=()=>F.value?[...new Set(F.value.querySelectorAll(i))]:[],O=ne=>{const ke=ne.some(K=>K.getAttribute("aria-selected")==="true");let je=0;const I=ne.find((K,Q)=>{const xe=K.getAttribute("aria-disabled")!=="true";let Ve;return ke&&o.autoSelection===tc.FirstSelected?Ve=K.getAttribute("aria-selected")==="true"&&xe:Ve=xe,Ve&&(je=Q),Ve});if(!!I)return{element:I,index:je}},Y=Kt(ne=>{W.value&&Ah(ne.element,W.value)},50),ce=()=>{if(D)return j.value=!0,Promise.resolve(D())},de=ne=>{ne?(ae==null||ae.element.removeAttribute(u),ne==null||ne.element.setAttribute(u,"true"),Y(ne),ae=ne,T==null||T(ne.domId),n("on-active-option-change",ne.value)):ae=void 0},$e=(ne,ke)=>({element:ne,index:ke,domId:ne.id,value:ne.getAttribute(l)||"",disabled:ne.getAttribute("aria-disabled")==="true",isAction:ne.getAttribute(r)==="true"}),he=()=>{let ne;const ke=Me(),je=O(ke);if(ke.length===0&&le.value.length>0){le.value=ke,de();return}if(je){const{element:He,index:ft}=je;ne=$e(He,ft)}const I=ae!==void 0&&(ne==null?void 0:ne.domId)===(ae==null?void 0:ae.domId),K=(ae==null?void 0:ae.isAction)&&(ne==null?void 0:ne.isAction)&&(ne==null?void 0:ne.value)!==(ae==null?void 0:ae.value),Q=le.value.map(He=>He.getAttribute(l)),xe=ke.map(He=>He.getAttribute(l));if(xe.length===Q.length&&xe.every((He,ft)=>Q[ft]===He)){I&&K&&(le.value=ke,de(ne));return}if(le.value=ke,j.value){j.value=!1;return}de(ne)},Ce=async ne=>{const ke=le.value.length-1;let je=(ae==null?void 0:ae.index)||0,I=0,K=ae==null?void 0:ae.element,Q=-1;for(;Q++<ke;){I=ht(je,ke,ne),K=le[I];const xe=I>=ke,Ve=(K==null?void 0:K.getAttribute("aria-disabled"))==="true";if(xe&&h&&await ce(),Ve){je=I,K=void 0;continue}break}return{element:K,nextIndex:I}},ie=async(ne,ke)=>{ke.preventDefault();const{element:je,nextIndex:I}=await Ce(ne);if(!je)return;const K=$e(je,I);de(K)},Te=ne=>{ie("down",ne)},Ie=ne=>{ie("up",ne)},Re=ne=>{ne.preventDefault(),ne.stopPropagation(),ae&&bt(ae)},_e=()=>{o.enableKeyboardControl||(fe.value=!0)},dt=ne=>{if(ne.stopPropagation(),fe.value){const ke=O(le.value);if(ke){const{element:je,index:I}=ke,K=$e(je,I);de(K)}}o.enableKeyboardControl||(fe.value=!1)},Ht=ne=>{q.value=ne},ht=(ne,ke,je)=>{let I;return je==="down"?ne===ke?I=h?ne+1:0:I=ne+1:I=ne===0?ke:ne-1,I},bt=ne=>{de(ne),w&&w(),n("select",ne.value)};return Ge("listboxContext",{onOptionSelect:bt,setLoading:Ht}),Jt(()=>{F.value&&(W.value=F.value.closest(ns.selector))}),(ne,ke)=>(s(),d(G,null,[fe.value||a(g)?(s(),d(G,{key:0},[C(a(St),{keyEvent:"keydown",keyCode:a(We).ArrowDown,handler:Te},null,8,["keyCode"]),C(a(St),{keyEvent:"keydown",keyCode:a(We).ArrowUp,handler:Ie},null,8,["keyCode"]),C(a(St),{keyEvent:"keydown",keyCode:a(We).Enter,handler:Re},null,8,["keyCode"])],64)):L("",!0),C(a(lt),null,{default:y(()=>[S("div",tw,U(q.value?q.value:null),1)]),_:1}),ne.$slots.default?(s(),d("ul",{key:1,tabindex:"0",role:"listbox",class:c(a($)(a(ew).Listbox)),"aria-label":a(z)?void 0:t.accessibilityLabel,"aria-labelledby":a(v)||void 0,"aria-busy":Boolean(q.value),"asia-activedescendant":a(ae)&&a(ae).domId,id:a(R),onFocus:_e,onBlur:dt,ref_key:"listboxRef",ref:F},[f(ne.$slots,"default")],42,aw)):L("",!0)],64))}});Nt.__docgenInfo={exportName:"default",displayName:"Listbox",description:"",tags:{},props:[{name:"autoSelection",required:!1,type:{name:"AutoSelection"},defaultValue:{func:!1,value:"AutoSelection.FirstSelected"}},{name:"enableKeyboardControl",description:"Explicitly enable keyboard control",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"customListId",description:"Provide a custom ID for the list element",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["string"]}},{name:"on-active-option-change",type:{names:["string"]}}],slots:[{name:"default"}]};const nw="Polaris-Listbox-Action",ow="Polaris-Listbox-Action__ActionDivider",iw="Polaris-Listbox-Action__Icon";var $r={Action:nw,ActionDivider:ow,Icon:iw};const sw="Polaris-Listbox-Option",lw="Polaris-Listbox-Option--divider";var Wu={Option:sw,divider:lw};const rw="Polaris-Listbox-TextOption",cw="Polaris-Listbox-TextOption--allowMultiple",uw="Polaris-Listbox-TextOption--isAction",dw="Polaris-Listbox-TextOption--selected",pw="Polaris-Listbox-TextOption--disabled",mw="Polaris-Listbox-TextOption__Content",yw="Polaris-Listbox-TextOption__Checkbox";var xa={TextOption:rw,allowMultiple:cw,isAction:uw,selected:dw,disabled:pw,Content:mw,Checkbox:yw};const Ji=M({props:{selected:{type:Boolean},disabled:{type:Boolean}},setup(t){const n=t,{allowMultiple:o}=ve("comboboxListboxOptionContext",{}),i=ve("actionContext",!1),l=p(()=>$(xa.TextOption,n.selected&&!o&&xa.selected,n.disabled&&xa.disabled,o&&xa.allowMultiple,i&&xa.isAction));return(r,u)=>(s(),d("div",{class:c(a(l))},[S("div",{class:c(a(xa).Content)},[a(o)&&!a(i)?(s(),d("div",{key:0,class:c(a(xa).Checkbox)},[C(a(Ma),{disabled:t.disabled,checked:t.selected},{label:y(()=>[f(r.$slots,"default")]),_:3},8,["disabled","checked"])],2)):f(r.$slots,"default",{key:1})],2)],2))}});Ji.__docgenInfo={exportName:"default",displayName:"TextOption",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const gw=["id","role","data-within-section","data-listbox-option-value","data-listbox-option-action","data-listbox-option-destructive","aria-disabled","aria-label","aria-selected"],Bt=M({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean}},setup(t){const n=t,o=ve("mappedActionContext",{}),i=ve("sectionContext",""),l=ve("listboxContext",{onOptionSelect(W){},setLoading(W){}}),r=ve("isAction",!1),{role:u,url:m,external:x,onAction:v,destructive:g}=o,{onOptionSelect:h}=l,T=ue(),N=k(null),{useUniqueId:w}=Be(),D=w("ListboxOption"),B=p(()=>Boolean(i)),E={[kh.attribute]:B.value},R=p(()=>Boolean(T.default&&(T.default().length>=2||T.default()[0]&&T.default()[0].type.toString()!=="Symbol(Text)"&&T.default()[0].type.toString()!=="Symbol()"))),z=p(()=>u||"option"),Z=p(()=>$(Wu.Option,n.divider&&Wu.divider)),F=W=>{W.preventDefault(),v&&v(),N.value&&!v&&h({domId:D,value:n.value,element:N.value,disabled:n.disabled||!1})};return(W,q)=>(s(),d("li",me(E,{id:a(D),class:a(Z),ref_key:"listItemRef",ref:N,role:a(z),"data-within-section":a(B),"data-listbox-option-value":t.value,"data-listbox-option-action":a(r),"data-listbox-option-destructive":a(g),"aria-disabled":t.disabled,"aria-label":t.accessibilityLabel,"aria-selected":t.selected,onClick:q[0]||(q[0]=j=>t.disabled?void 0:F),onKeydown:q[1]||(q[1]=j=>t.disabled?void 0:F),onMousedown:F,tabindex:"-1","data-listbox-option":""}),[a(m)?(s(),A(a(yt),{key:0,url:a(m),external:a(x)},{default:y(()=>[a(R)?f(W.$slots,"default",{key:1}):(s(),A(a(Ji),{key:0,selected:t.selected,disabled:t.disabled},{default:y(()=>[f(W.$slots,"default")]),_:3},8,["selected","disabled"]))]),_:3},8,["url","external"])):(s(),d(G,{key:1},[a(R)?f(W.$slots,"default",{key:1}):(s(),A(a(Ji),{key:0,selected:t.selected,disabled:t.disabled},{default:y(()=>[f(W.$slots,"default")]),_:3},8,["selected","disabled"]))],64))],16,gw))}});Bt.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const As=M({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean},icon:null},setup(t){const n=t;Ge("actionContext",!0);const o=p(()=>$($r.Action,n.divider&&$r.ActionDivider));return(i,l)=>(s(),A(a(Bt),Ze(_t(n)),{default:y(()=>[S("div",{class:c(a(o))},[C(a(Ji),{selected:t.selected,disabled:t.disabled},{default:y(()=>[t.icon?(s(),d("div",{key:0,class:c(a($r).Icon)},[C(a(re),{color:"subdued",source:t.icon},null,8,["source"])],2)):L("",!0),f(i.$slots,"default")]),_:3},8,["selected","disabled"])],2)]),_:3},16))}});As.__docgenInfo={exportName:"default",displayName:"Action",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const hw="Polaris-Listbox-Header";var bw={Header:hw};const fw=["id"],vw=M({setup(t){const n=ve("sectionContext",""),o=ue(),i=p(()=>{var r;return(r=o.default)==null?void 0:r.call(o)}),l=p(()=>Boolean(i.value&&(i.value.length>=2||i.value[0]&&(i.value[0].type.toString()!=="Symbol(Text)"||i.value[0].type.toString()!=="Symbol()"))));return(r,u)=>(s(),d("div",{id:a(n),"aria-hidden":""},[a(l)?f(r.$slots,"default",{key:1}):(s(),d("div",{key:0,class:c(a(bw).Header)},[f(r.$slots,"default")],2))],8,fw))}});vw.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},slots:[{name:"default"}]};const xw="Polaris-Listbox-Loading__ListItem",Tw="Polaris-Listbox-Loading";var Gu={ListItem:xw,Loading:Tw};const Wo=M({props:{accessibilityLabel:null},setup(t){const n=t,o=ve("listboxContext",{onOptionSelect(l){},setLoading(l){}}),{setLoading:i}=o;return Ee(()=>n.accessibilityLabel,()=>(i(n.accessibilityLabel),()=>i(void 0))),(l,r)=>(s(),d("li",{class:c(a(Gu).ListItem),role:"presentation"},[l.$slots.default?f(l.$slots,"default",{key:0}):(s(),d("div",{key:1,class:c(a(Gu).Loading)},[C(a(Zt),{size:"small",accessibilityLabel:t.accessibilityLabel},null,8,["accessibilityLabel"])],2))],2))}});Wo.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"accessibilityLabel",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const Sw="Polaris-Listbox-Section__SectionGroup",Cw="Polaris-Listbox-Section--noDivider";var Xu={SectionGroup:Sw,noDivider:Cw};const Aw=["aria-labelledby"],kw=M({props:{divider:{type:Boolean}},setup(t){const n=t,{useUniqueId:o}=Be(),i=o("ListboxSection");Ge("sectionContext",i);const l=p(()=>$(Xu.SectionGroup,!n.divider&&Xu.noDivider));return(r,u)=>(s(),d("li",me({role:"presentation"},a(Nh)),[f(r.$slots,"title"),S("ul",{role:"group","aria-labelledby":a(i),class:c(a(l))},[f(r.$slots,"default")],10,Aw)],16))}});kw.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const Go=M({setup(t){const{useFrame:n}=lo(),{startLoading:o,stopLoading:i}=n();return Se(()=>{o()}),gt(()=>{i()}),(l,r)=>null}});Go.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const Nw="Polaris-MediaCard",Lw="Polaris-MediaCard--portrait",ww="Polaris-MediaCard__MediaContainer",Pw="Polaris-MediaCard--sizeSmall",Mw="Polaris-MediaCard__InfoContainer",_w="Polaris-MediaCard__Popover",Dw="Polaris-MediaCard__Heading",Iw="Polaris-MediaCard__PrimaryAction",Bw="Polaris-MediaCard__SecondaryAction",$w="Polaris-MediaCard__ActionContainer";var mt={MediaCard:Nw,portrait:Lw,MediaContainer:ww,sizeSmall:Pw,InfoContainer:Mw,Popover:_w,Heading:Dw,PrimaryAction:Iw,SecondaryAction:Bw,ActionContainer:$w};const ks=M({props:{title:null,description:null,primaryAction:null,secondaryAction:null,popoverActions:{default:()=>[]},portrait:{type:Boolean,default:!1},size:{default:"medium"}},setup(t){const n=t,o=k(!1),i=ve("lang"),l=ue(),r=p(()=>$(mt.ActionContainer,n.portrait&&mt.portrait)),u=p(()=>$(mt.MediaCard,n.portrait&&mt.portrait)),m=p(()=>$(mt.MediaContainer,n.portrait&&mt.portrait,n.size==="small"&&mt.sizeSmall)),x=p(()=>$(mt.InfoContainer,n.portrait&&mt.portrait,n.size==="small"&&mt.sizeSmall)),v=()=>{o.value=!o.value};return(g,h)=>(s(),A(a(Ye),null,{default:y(()=>[S("div",{class:c(a(u))},[S("div",{class:c(a(m))},[f(g.$slots,"default")],2),S("div",{class:c(a(x))},[C(a(pa),null,{default:y(()=>[t.popoverActions.length>0?(s(),d("div",{key:0,class:c(a(mt).Popover)},[C(a(et),{active:o.value,preferredAlignment:"left",preferredPosition:"below",onClose:v},{content:y(()=>[C(a(Je),{items:t.popoverActions,onActionAnyItem:v},Ue({_:2},[be(t.popoverActions,({prefixId:T})=>({name:`prefix-${T}`,fn:y(()=>[f(g.$slots,`prefix-${T}`)])})),be(t.popoverActions,({suffixId:T})=>({name:`suffix-${T}`,fn:y(()=>[f(g.$slots,`suffix-${T}`)])}))]),1032,["items"])]),activator:y(()=>[C(a(ge),{icon:a(Ca),size:"slim",plain:!0,accessibilityLabel:a(i).Polaris.MediaCard.popoverActivatorLabel,onClick:v},null,8,["icon","accessibilityLabel"])]),_:3},8,["active"])],2)):L("",!0),C(a(qe),{vertical:!0,spacing:"tight"},{default:y(()=>[S("div",{class:c(a(mt).Heading)},[a(ye)(a(l).title)?f(g.$slots,"title",{key:0}):(s(),A(a(It),{key:1},{default:y(()=>[oe(U(t.title),1)]),_:1}))],2),S("p",null,U(t.description),1),t.primaryAction||t.secondaryAction?(s(),d("div",{key:0,class:c(a(r))},[C(a(tt),null,{default:y(()=>[t.primaryAction?(s(),d("div",{key:0,class:c(a(mt).PrimaryAction)},[C(a(Xe),{action:t.primaryAction},null,8,["action"])],2)):L("",!0),t.secondaryAction?(s(),d("div",{key:1,class:c(a(mt).SecondaryAction)},[C(a(Xe),{action:t.secondaryAction},null,8,["action"])],2)):L("",!0)]),_:1})],2)):L("",!0)]),_:3})]),_:3})],2)],2)]),_:3}))}});ks.__docgenInfo={exportName:"default",displayName:"MediaCard",description:"",tags:{},props:[{name:"title",description:"Heading content",required:!0,type:{name:"string"}},{name:"description",description:"Body content",required:!0,type:{name:"string"}},{name:"primaryAction",description:"Main call to action, rendered as a basic button",required:!1,type:{name:"ComplexAction"}},{name:"secondaryAction",description:"Secondary call to action, rendered as a plain button",required:!1,type:{name:"ComplexAction"}},{name:"popoverActions",description:"Action list items to render in ellipsis popover",required:!1,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]},defaultValue:{func:!1,value:"() => []"}},{name:"portrait",description:"Whether or not card content should be laid out vertically",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Size of the visual media in the card",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"title"}]};const Fw="Polaris-MessageIndicator__MessageIndicatorWrapper",Ew="Polaris-MessageIndicator";var Ku={MessageIndicatorWrapper:Fw,MessageIndicator:Ew};const xm=M({props:{active:{type:Boolean}},setup(t){return(n,o)=>(s(),d("div",{class:c(a(Ku).MessageIndicatorWrapper)},[t.active?(s(),d("div",{key:0,class:c(a(Ku).MessageIndicator)},null,2)):L("",!0),f(n.$slots,"default")],2))}});xm.__docgenInfo={exportName:"default",displayName:"MessageIndicator",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Ow="Polaris-Modal__BodyWrapper",qw="Polaris-Modal__Body",Rw="Polaris-Modal__IFrame",Vw="Polaris-Modal__Spinner";var Ea={BodyWrapper:Ow,Body:qw,IFrame:Rw,Spinner:Vw};const Hw="Polaris-Modal-Dialog__Container",Uw="Polaris-Modal-Dialog",jw="Polaris-Modal-Dialog__Modal",zw="Polaris-Modal-Dialog--limitHeight",Ww="Polaris-Modal-Dialog--sizeSmall",Gw="Polaris-Modal-Dialog--sizeLarge",Xw="Polaris-Modal-Dialog--animateFadeUp",Kw="Polaris-Modal-Dialog--entering",Yw="Polaris-Modal-Dialog--exiting",Zw="Polaris-Modal-Dialog--exited",Qw="Polaris-Modal-Dialog--entered";var ia={Container:Hw,Dialog:Uw,Modal:jw,limitHeight:zw,sizeSmall:Ww,sizeLarge:Gw,animateFadeUp:Xw,entering:Kw,exiting:Yw,exited:Zw,entered:Qw};const es=M({props:{trapping:{type:Boolean,default:!0}},setup(t){const n=t,{canSafelyFocus:o}=jb(n),i=k(null),l=k(!0);Ee([()=>n.trapping],()=>{l.value=o.value&&!(i.value&&i.value.contains(document.activeElement))?!n.trapping:!0});const r=m=>{!n.trapping||!i.value||i.value.contains(document.activeElement)||m.target instanceof Element&&m.target.matches(`${hp.selector} *`)||o.value&&m.target instanceof HTMLElement&&i.value!==m.target&&i.value.contains(m.target)&&qo(i.value)},u=m=>{if(!n.trapping||!i.value)return;const x=Lp(i.value),v=wp(i.value);m.target===v&&!m.shiftKey&&(m.preventDefault(),hb(i.value)),m.target===x&&m.shiftKey&&(m.preventDefault(),bb(i.value))};return(m,x)=>(s(),d("div",{ref_key:"wrapperNode",ref:i},[C(a(pm),{disabled:l.value,root:i.value},null,8,["disabled","root"]),C(a(it),{event:"focusin",handler:r}),C(a(St),{keyCode:a(We).Tab,keyEvent:"keydown",handler:u},null,8,["keyCode"]),f(m.$slots,"default")],512))}});es.__docgenInfo={exportName:"default",displayName:"TrapFocus",description:"",tags:{},props:[{name:"trapping",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}]};const Jw=["aria-labelledby"],eP=["aria-labelledby"],Tm=M({props:{labelledBy:null,instant:{type:Boolean},limitHeight:{type:Boolean},large:{type:Boolean},small:{type:Boolean}},emits:["close","entered","exited"],setup(t,{emit:n}){const o=t,i=k(null),l=p(()=>$(ia.Modal,o.small&&ia.sizeSmall,o.large&&ia.sizeLarge,o.limitHeight&&ia.limitHeight));return Se(()=>{i.value&&i.value.contains(document.activeElement)&&qo(i.value),n("entered")}),gt(()=>{n("exited")}),(r,u)=>t.instant?(s(),d("div",{key:0,class:c(a(ia).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref_key:"dialogNode",ref:i},[C(a(es),null,{default:y(()=>[S("div",{role:"dialog","aria-modal":"","aria-labelledby":t.labelledBy,tabindex:"-1",class:c(a(ia).Dialog)},[S("div",{class:c(a(l))},[C(a(St),{keyCode:a(We).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),f(r.$slots,"default")],2)],10,Jw)]),_:3})],2)):(s(),d("div",{key:1,class:c(a(ia).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref:"dialog"},[C(a(es),null,{default:y(()=>[S("div",{role:"dialog","aria-modal":"","aria-labelledby":t.labelledBy,tabindex:"-1",class:c(a(ia).Dialog)},[S("div",{class:c(a(l))},[C(a(St),{keyCode:a(We).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),f(r.$slots,"default")],2)],10,eP)]),_:3})],2))}});Tm.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"labelledBy",required:!1,type:{name:"string"}},{name:"instant",required:!1,type:{name:"boolean"}},{name:"limitHeight",required:!1,type:{name:"boolean"}},{name:"large",required:!1,type:{name:"boolean"}},{name:"small",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"entered"},{name:"exited"}],slots:[{name:"default"}]};const tP="Polaris-Modal-Header",aP="Polaris-Modal-Header--titleHidden",nP="Polaris-Modal-Header__Title";var Fr={Header:tP,titleHidden:aP,Title:nP};const oP="Polaris-Modal-CloseButton";var iP={CloseButton:oP};const Sm=M({emits:["click"],setup(t,{emit:n}){return(o,i)=>(s(),d("button",{class:c(a(iP).CloseButton),"aria-label":"Close",onClick:i[0]||(i[0]=l=>n("click"))},[C(a(re),{source:a(vc),color:"base"},null,8,["source"])],2))}});Sm.__docgenInfo={exportName:"default",displayName:"CloseButton",description:"",tags:{},events:[{name:"click"}]};const sP=["id"],Cm=M({props:{id:null,titleHidden:{type:Boolean}},emits:["close"],setup(t,{emit:n}){const o=t,i=ue(),l=p(()=>o.titleHidden||!i.default?Fr.titleHidden:Fr.Header);return(r,u)=>(s(),d("div",{class:c(a(l))},[S("div",{id:t.id,class:c(a(Fr).Title)},[C(a(ro),{element:"h2",size:"small"},{default:y(()=>[f(r.$slots,"default")]),_:3})],10,sP),C(a(Sm),{onClick:u[0]||(u[0]=m=>n("close"))})],2))}});Cm.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"titleHidden",required:!1,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"default"}]};const lP="Polaris-Modal-Footer",rP="Polaris-Modal-Footer__FooterContent";var Yu={Footer:lP,FooterContent:rP};const cP="Polaris-Stack",uP="Polaris-Stack__Item",dP="Polaris-Stack--noWrap",pP="Polaris-Stack--spacingNone",mP="Polaris-Stack--spacingExtraTight",yP="Polaris-Stack--spacingTight",gP="Polaris-Stack--spacingBaseTight",hP="Polaris-Stack--spacingLoose",bP="Polaris-Stack--spacingExtraLoose",fP="Polaris-Stack--distributionLeading",vP="Polaris-Stack--distributionTrailing",xP="Polaris-Stack--distributionCenter",TP="Polaris-Stack--distributionEqualSpacing",SP="Polaris-Stack--distributionFill",CP="Polaris-Stack--distributionFillEvenly",AP="Polaris-Stack--alignmentLeading",kP="Polaris-Stack--alignmentTrailing",NP="Polaris-Stack--alignmentCenter",LP="Polaris-Stack--alignmentFill",wP="Polaris-Stack--alignmentBaseline",PP="Polaris-Stack--vertical";var sa={Stack:cP,Item:uP,noWrap:dP,spacingNone:pP,spacingExtraTight:mP,spacingTight:yP,spacingBaseTight:gP,spacingLoose:hP,spacingExtraLoose:bP,distributionLeading:fP,distributionTrailing:vP,distributionCenter:xP,distributionEqualSpacing:TP,distributionFill:SP,distributionFillEvenly:CP,alignmentLeading:AP,alignmentTrailing:kP,alignmentCenter:NP,alignmentFill:LP,alignmentBaseline:wP,vertical:PP,"Item-fill":"Polaris-Stack__Item--fill"};const Ct=M({props:{fill:{type:Boolean,default:!1}},setup(t){const n=t,o=p(()=>$(sa.Item,n.fill&&sa["Item-fill"]));return(i,l)=>(s(),d("div",{class:c(a(o))},[f(i.$slots,"default")],2))}});Ct.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"fill",description:"Fill the remaining horizontal space in the stack with the item",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const qe=M({props:{wrap:{type:Boolean,default:!0},vertical:{type:Boolean},spacing:null,alignment:null,distribution:null,noItemWrap:{type:Boolean,default:!1}},setup(t){const n=t,o=ue(),i=p(()=>{const l=n.spacing&&Le("spacing",n.spacing),r=n.distribution&&Le("distribution",n.distribution),u=n.alignment&&Le("alignment",n.alignment);return $(sa.Stack,n.vertical&&sa.vertical,l&&sa[l],r&&sa[r],u&&sa[u],n.wrap===!1&&sa.noWrap)});return(l,r)=>(s(),d("div",{class:c(a(i))},[!t.noItemWrap&&a(o).default&&a(ye)(a(o).default)?(s(!0),d(G,{key:0},be(a(o).default(),(u,m)=>(s(),A(a(Ct),{key:m},{default:y(()=>[(s(),A(Oe(u)))]),_:2},1024))),128)):f(l.$slots,"default",{key:1})],2))}});qe.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"wrap",description:"Wrap stack elements to additional rows as needed on small screens (Defaults to true)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"vertical",description:"Stack the elements vertically",required:!1,type:{name:"boolean"}},{name:"spacing",description:"Adjust spacing between elements",required:!1,type:{name:"Spacing"}},{name:"alignment",description:"Adjust vertical alignment of elements",required:!1,type:{name:"Alignment"}},{name:"distribution",description:"Adjust horizontal alignment of elements",required:!1,type:{name:"Distribution"}},{name:"noItemWrap",description:"No wrap all stack elements with StackItem",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const Am=M({props:{primaryAction:null,secondaryActions:null},setup(t){return(n,o)=>(s(),d("div",{class:c(a(Yu).Footer)},[S("div",{class:c(a(Yu).FooterContent)},[C(a(qe),{alignment:"center","no-item-wrap":""},{default:y(()=>[C(a(Ct),{fill:!0},{default:y(()=>[f(n.$slots,"default")]),_:3}),t.primaryAction||t.secondaryActions?(s(),A(a(Ct),{key:0},{default:y(()=>[C(a(tt),null,{default:y(()=>[t.secondaryActions?(s(!0),d(G,{key:0},be(t.secondaryActions,(i,l)=>(s(),A(a(Xe),{key:l,action:i},null,8,["action"]))),128)):L("",!0),C(a(Xe),{action:t.primaryAction,overrides:{primary:!0}},null,8,["action"])]),_:1})]),_:1})):L("",!0)]),_:3})],2)],2))}});Am.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"primaryAction",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"default"}]};const MP="Polaris-Modal-Section",_P="Polaris-Modal-Section--subdued",DP="Polaris-Modal-Section--flush";var Er={Section:MP,subdued:_P,flush:DP};const no=M({props:{flush:{type:Boolean},subdued:{type:Boolean}},setup(t){const n=t,o=p(()=>$(Er.Section,n.flush&&Er.flush,n.subdued&&Er.subdued));return(i,l)=>(s(),d("section",{class:c(a(o))},[f(i.$slots,"default")],2))}});no.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"flush",required:!1,type:{name:"boolean"}},{name:"subdued",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const IP=["name","src"],Ia=M({props:{open:{type:Boolean},src:null,iFrameName:null,titleHidden:{type:Boolean},instant:{type:Boolean},sectioned:{type:Boolean},large:{type:Boolean},small:{type:Boolean},limitHeight:{type:Boolean},loading:{type:Boolean},noScroll:{type:Boolean},primaryAction:null,secondaryActions:null},emits:["iframe-load","transition-end","scrolled-to-bottom","close"],setup(t,{emit:n}){const l=ue(),r=k(null),{useUniqueId:u}=Be(),m=u("modal-header"),x=k(200),v=k(!1),g=N=>{const w=N.target;if(w&&w.contentWindow)try{x.value=w.contentWindow.document.body.scrollHeight}catch{x.value=400}n("iframe-load",N)},h=()=>{n("transition-end")},T=()=>{x.value=200;const N=r.value;N&&requestAnimationFrame(()=>qo(N))};return Se(()=>{v.value=!0}),Ge("WithinContentContext",!0),(N,w)=>(s(),d("div",null,[a(l).activator?(s(),d("div",{key:0,ref_key:"activatorNode",ref:r},[f(N.$slots,"activator")],512)):L("",!0),v.value&&t.open?(s(),A(a(Vo),{key:1,idPrefix:"modal"},{default:y(()=>[C(a(Tm),{instant:t.instant,labelledBy:a(m),large:t.large,small:t.small,limitHeight:t.limitHeight,onClose:w[2]||(w[2]=D=>n("close")),onEntered:h,onExited:T},{default:y(()=>[C(a(Cm),{titleHidden:t.titleHidden,id:a(m),onClose:w[0]||(w[0]=D=>n("close")),key:"header"},{default:y(()=>[f(N.$slots,"title")]),_:3},8,["titleHidden","id"]),S("div",{class:c(a(Ea).BodyWrapper),key:"body"},[t.src?(s(),d("iframe",{key:0,name:t.iFrameName,title:"body markup",src:t.src,class:c(a(Ea).IFrame),onLoad:g,style:Fe({height:`${x.value}px`})},null,46,IP)):t.noScroll?(s(),d("div",{key:1,class:c(a(Ea).Body)},[t.loading?(s(),d("div",{key:0,class:c(a(Ea).Spinner)},[C(a(Zt))],2)):(s(),d(G,{key:1},[t.sectioned?(s(),A(a(no),{key:0},{default:y(()=>[f(N.$slots,"content")]),_:3})):f(N.$slots,"content",{key:1})],64))],2)):(s(),A(a(Ot),{key:2,shadow:!0,class:c(a(Ea).Body),onScrolledToBottom:w[1]||(w[1]=D=>n("scrolled-to-bottom"))},{default:y(()=>[t.loading?(s(),d("div",{key:0,class:c(a(Ea).Spinner)},[C(a(Zt))],2)):(s(),d(G,{key:1},[t.sectioned?(s(),A(a(no),{key:0},{default:y(()=>[f(N.$slots,"content")]),_:3})):f(N.$slots,"content",{key:1})],64))]),_:3},8,["class"]))],2),a(l).footer||t.primaryAction||t.secondaryActions?(s(),A(a(Am),{primaryAction:t.primaryAction,secondaryActions:t.secondaryActions,key:"footer"},{default:y(()=>[f(N.$slots,"footer")]),_:3},8,["primaryAction","secondaryActions"])):L("",!0)]),_:3},8,["instant","labelledBy","large","small","limitHeight"]),C(a(dc))]),_:3})):L("",!0)]))}});Ia.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",description:"Whether the modal is open or not",required:!0,type:{name:"boolean"}},{name:"src",description:"The url that will be loaded as the content of the modal",required:!1,type:{name:"string"}},{name:"iFrameName",description:"The name of the modal content iframe",required:!1,type:{name:"string"}},{name:"titleHidden",description:"Hide the title in the modal",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"instant",description:"Disable animations and open modal instantly",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically adds sections to modal",required:!1,type:{name:"boolean"}},{name:"large",description:"Increases the modal width",required:!1,type:{name:"boolean"}},{name:"small",description:"Decreases the modal width",required:!1,type:{name:"boolean"}},{name:"limitHeight",description:"Limits modal height on large sceens with scrolling",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces modal content with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"noScroll",description:"Removes Scrollable container from the modal content",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary action",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",description:"Collection of secondary actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],events:[{name:"iframe-load",type:{names:["Event"]}},{name:"transition-end"},{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"title"},{name:"content"},{name:"footer"}]};const BP="Polaris-Navigation",$P="Polaris-Navigation__UserMenu",FP="Polaris-Navigation__ContextControl",EP="Polaris-Navigation__PrimaryNavigation",OP="Polaris-Navigation__LogoContainer",qP="Polaris-Navigation__Logo",RP="Polaris-Navigation__LogoLink",VP="Polaris-Navigation__Item",HP="Polaris-Navigation--keyFocused",UP="Polaris-Navigation__Icon",jP="Polaris-Navigation__Badge",zP="Polaris-Navigation--subNavigationActive",WP="Polaris-Navigation__ExternalIcon",GP="Polaris-Navigation__ListItem",XP="Polaris-Navigation__RollupSection",KP="Polaris-Navigation__SecondaryNavigation",YP="Polaris-Navigation__ItemWrapper",ZP="Polaris-Navigation__Text",QP="Polaris-Navigation__SecondaryAction",JP="Polaris-Navigation--isExpanded",eM="Polaris-Navigation__List",tM="Polaris-Navigation__Section",aM="Polaris-Navigation__SectionHeading",nM="Polaris-Navigation__Action",oM="Polaris-Navigation__RollupToggle",iM="Polaris-Navigation__Indicator";var pe={Navigation:BP,UserMenu:$P,ContextControl:FP,PrimaryNavigation:EP,LogoContainer:OP,Logo:qP,LogoLink:RP,Item:VP,keyFocused:HP,"Icon-resized":"Polaris-Navigation__Icon--resized","Item-selected":"Polaris-Navigation__Item--selected","Item-disabled":"Polaris-Navigation__Item--disabled",Icon:UP,Badge:jP,subNavigationActive:zP,"Item-child-active":"Polaris-Navigation--itemChildActive",ExternalIcon:WP,ListItem:GP,RollupSection:XP,SecondaryNavigation:KP,"ListItem-hasAction":"Polaris-Navigation__ListItem--hasAction",ItemWrapper:YP,Text:ZP,SecondaryAction:QP,isExpanded:JP,List:eM,"SecondaryNavigation-noIcon":"Polaris-Navigation__SecondaryNavigation--noIcon",Section:tM,"Section-fill":"Polaris-Navigation__Section--fill","Section-withSeparator":"Polaris-Navigation__Section--withSeparator",SectionHeading:aM,Action:nM,RollupToggle:oM,Indicator:iM};const sM=["aria-labelledby"],Xo=M({props:{location:null,onDismiss:null,ariaLabelledBy:null},setup(t){const n=t,{useFrame:o}=lo(),{logo:i}=o(),l=xc(i,104),r=ue();return Ge("NavigationContext",{location:n.location,onNavigationDismiss:n.onDismiss,withinContentContainer:!1}),Ge("WithinContentContext",!0),(u,m)=>(s(),d("nav",{class:c(a(pe).Navigation),"aria-labelledby":t.ariaLabelledBy},[a(r).contextControl?(s(),d("div",{key:0,class:c(a(pe).ContextControl)},[f(u.$slots,"contextControl")],2)):a(i)?(s(),d("div",{key:1,class:c(a(pe).LogoContainer)},[C(a(yt),{url:a(i).url||"",class:c(a(pe).LogoLink),style:Fe({width:a(l)})},{default:y(()=>[C(a(Yt),{source:a(i).topBarSource||"",alt:a(i).accessibilityLabel||"",class:c(a(pe).Logo),style:Fe({width:a(l)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):L("",!0),C(a(Ot),{class:c(a(pe).PrimaryNavigation)},{default:y(()=>[f(u.$slots,"default")]),_:3},8,["class"])],10,sM))}});Xo.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"location",required:!0,type:{name:"string"}},{name:"ariaLabelledBy",description:"id of the element used as aria-labelledby",required:!1,type:{name:"string"}}],slots:[{name:"contextControl"},{name:"default"}]};const lM={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},rM=S("path",{d:"M11 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 5H12a1 1 0 0 1-1-1zM3 6.5A1.5 1.5 0 0 1 4.5 5H8a1 1 0 0 1 0 2H5v8h8v-3a1 1 0 1 1 2 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.5v-9z"},null,-1),cM=[rM];function uM(t,n){return s(),d("svg",lM,cM)}var dM={render:uM};function pM(){const t=ve("NavigationContext",{location:""});function n(){return t}return{useNavigationContext:n}}const km=M({props:{expanded:{type:Boolean},id:null},setup(t){const{useUniqueId:n}=Be(),o=n("SecondaryNavigation");return(i,l)=>(s(),A(a(io),{id:t.id||a(o),open:t.expanded,transition:{duration:"0ms",timingFunction:"linear"}},{default:y(()=>[S("ul",{class:c(a(pe).List)},[f(i.$slots,"default")],2)]),_:3},8,["id","open"]))}});km.__docgenInfo={exportName:"default",displayName:"Secondary",description:"",tags:{},props:[{name:"expanded",required:!0,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const mM=["disabled","aria-disabled","aria-label","onKeyup"],ac=M({props:{url:null,matches:{type:Boolean},matchPaths:null,excludePaths:null,external:{type:Boolean},icon:null,badge:null,label:null,disabled:{type:Boolean},accessibilityLabel:null,selected:{type:Boolean},exactMatch:{type:Boolean},new:{type:Boolean},subNavigationItems:null,secondaryAction:null,expanded:{type:Boolean},shouldResizeIcon:{type:Boolean}},emits:["toggle-expanded-state","click"],setup(t,{emit:n}){const o=t,{useMediaQuery:i}=ma(),{isNavigationCollapsed:l}=i(),{useUniqueId:r}=Be(),u=r("SecondaryNavigation"),{useNavigationContext:m}=pM(),{location:x,onNavigationDismiss:v}=m(),g=ve("lang"),h=k(!1);Jt(()=>{!l&&o.expanded&&T()});const T=()=>{n("toggle-expanded-state")},N=he=>{h.value||(h.value=!0)},w=()=>{h.value&&(h.value=!1)},D=p(()=>o.disabled?-1:0),B=p(()=>o.subNavigationItems?o.subNavigationItems.filter(he=>he.new).length>0:!1),E=p(()=>$(pe.Item,o.disabled&&pe["Item-disabled"],h.value&&pe.keyFocused,o.selected&&pe["Item-selected"])),R=p(()=>$(pe.ListItem,o.secondaryAction&&pe["ListItem-hasAction"])),z=p(()=>$(pe.Icon,o.shouldResizeIcon&&pe["Icon-resized"])),Z=de({url:o.url,matches:o.matches,exactMatch:o.exactMatch,matchPaths:o.matchPaths,excludePaths:o.excludePaths},x),F=p(()=>o.subNavigationItems&&o.subNavigationItems.filter(he=>{const Ce=de(he,x);return Ce===0||Ce===1||Ce===2})),W=p(()=>F.value&&F.value.length>0),q=p(()=>o.selected==null?Z===0||Z===1||Z===2:o.selected),j=p(()=>q.value||o.expanded||W.value),le=!o.subNavigationItems||o.subNavigationItems.length===0||!W.value,fe=p(()=>$(pe.Item,o.disabled&&pe["Item-disabled"],q.value&&le&&pe["Item-selected"],j.value&&pe.subNavigationActive,W.value&&pe["Item-child-active"],h.value&&pe.keyFocused)),ae=p(()=>F.value?F.value.sort(({url:he},{url:Ce})=>Ce.length-he.length)[0]:null),Me=p(()=>$(pe.SecondaryNavigation,j.value&&pe.isExpanded,!o.icon&&pe["SecondaryNavigation-noIcon"])),O=he=>{if(he.currentTarget.getAttribute("href")===x&&he.preventDefault(),o.subNavigationItems&&o.subNavigationItems.length>0&&l)he.preventDefault(),T();else if(v){v(),n("click");return}n("click")};function X(he){const Ce=he.split("?")[0].split("#")[0];return Ce.endsWith("/")?Ce:`${Ce}/`}function Y(he,Ce){return X(he)===X(Ce)}function ce(he,Ce){return X(he).startsWith(X(Ce))}function de({url:he,matches:Ce,exactMatch:ie,matchPaths:Te,excludePaths:Ie},Re){return he==null?4:Ce?0:Ce===!1||Ie&&Ie.some(dt=>ce(Re,dt))?3:Te&&Te.some(dt=>ce(Re,dt))?2:(ie?Y(Re,he):ce(Re,he))?1:4}function $e(he,Ce,ie){return Ce?{"aria-expanded":ie,"aria-controls":he}:void 0}return(he,Ce)=>{const ie=fp("Item",!0);return t.url?(s(),d("li",{key:1,class:c(a(R))},[S("div",{class:c(a(pe).ItemWrapper)},[C(a(yt),me({url:t.url,class:a(fe),external:t.external,tabIndex:a(D),"aria-disabled":t.disabled,"aria-label":t.accessibilityLabel,onClick:O,onKeyup:Hr(N,["tab"]),onBlur:w},b({},$e(a(u),!!t.subNavigationItems&&t.subNavigationItems.length>0,!!a(j)))),{default:y(()=>[t.icon?(s(),d("div",{key:0,class:c(a(z))},[C(a(re),{source:t.icon},null,8,["source"])],2)):L("",!0),S("span",{class:c(a(pe).Text)},[oe(U(t.label),1),a(B)?(s(),d("span",{key:0,class:c(a(pe).Indicator)},[C(a(Jr),{pulse:""})],2)):L("",!0)],2),o.new||t.badge?(s(),d("div",{key:1,class:c(a(pe).Badge)},[o.new?(s(),A(a(st),{key:0,status:"new",size:"small"},{default:y(()=>[oe(U(a(g).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof t.badge=="string"?(s(),A(a(st),{key:1,status:"new",size:"small"},{default:y(()=>[oe(U(t.badge),1)]),_:1})):typeof t.badge=="object"?(s(),A(a(st),Ze(me({key:2},t.badge)),{default:y(()=>[oe(U(t.badge.content),1)]),_:1},16)):L("",!0)],2)):L("",!0),t.external?(s(),d("div",{key:2,class:c(a(pe).ExternalIcon)},[C(a(re),{color:"base",accessibilityLabel:a(g).Polaris.Common.newWindowAccessibilityHint,source:a(dM)},null,8,["accessibilityLabel","source"])],2)):L("",!0)]),_:1},16,["url","class","external","tabIndex","aria-disabled","aria-label","onKeyup"]),t.secondaryAction?(s(),d(G,{key:0},[t.secondaryAction.tooltip?(s(),A(a(Qt),Ze(me({key:0},t.secondaryAction.tooltip)),{default:y(()=>[t.secondaryAction?(s(),A(a(yt),{key:0,external:"",url:t.secondaryAction.url,class:c(a(pe).SecondaryAction),tabIndex:a(D),"aria-disabled":t.disabled,"aria-label":t.secondaryAction.accessibilityLabel,onClick:t.secondaryAction.onClick},{default:y(()=>[C(a(re),{source:t.secondaryAction.icon},null,8,["source"])]),_:1},8,["url","class","tabIndex","aria-disabled","aria-label","onClick"])):L("",!0)]),_:1},16)):(s(),A(a(yt),{key:1,external:"",url:t.secondaryAction.url,class:c(a(pe).SecondaryAction),tabIndex:a(D),"aria-disabled":t.disabled,"aria-label":t.secondaryAction.accessibilityLabel,onClick:t.secondaryAction.onClick},{default:y(()=>[C(a(re),{source:t.secondaryAction.icon},null,8,["source"])]),_:1},8,["url","class","tabIndex","aria-disabled","aria-label","onClick"]))],64)):L("",!0)],2),t.subNavigationItems&&t.subNavigationItems.length>0?(s(),d("div",{key:0,class:c(a(Me))},[C(a(km),{expanded:!!a(j),id:a(u)},{default:y(()=>[(s(!0),d(G,null,be(t.subNavigationItems,Te=>(s(),A(ie,me({key:Te.label},Te,{matches:Te===a(ae),onClick:()=>{a(v)&&a(v)(),Te.onClick&&Te.onClick()}}),null,16,["matches","onClick"]))),128))]),_:1},8,["expanded","id"])],2)):L("",!0)],2)):(s(),d("li",{key:0,class:c(a(pe).ListItem)},[S("button",{type:"button",class:c(a(E)),disabled:t.disabled,"aria-disabled":t.disabled,"aria-label":t.accessibilityLabel,onClick:O,onKeyup:Hr(N,["tab"]),onBlur:w},[t.icon?(s(),d("div",{key:0,class:c(a(z))},[C(a(re),{source:t.icon},null,8,["source"])],2)):L("",!0),S("span",{class:c(a(pe).Text)},[oe(U(t.label),1),a(B)?(s(),d("span",{key:0,class:c(a(pe).Indicator)},[C(a(Jr),{pulse:""})],2)):L("",!0)],2),o.new||t.badge?(s(),d("div",{key:1,class:c(a(pe).Badge)},[o.new?(s(),A(a(st),{key:0,status:"new",size:"small"},{default:y(()=>[oe(U(a(g).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof t.badge=="string"?(s(),A(a(st),{key:1,status:"new",size:"small"},{default:y(()=>[oe(U(t.badge),1)]),_:1})):typeof t.badge=="object"?(s(),A(a(st),Ze(me({key:2},t.badge)),{default:y(()=>[oe(U(t.badge.content),1)]),_:1},16)):L("",!0)],2)):L("",!0)],42,mM)],2))}}});ac.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"url",required:!1,type:{name:"string"}},{name:"matches",required:!1,type:{name:"boolean"}},{name:"matchPaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"excludePaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"external",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"badge",required:!1,type:{name:"union",elements:[{name:"string"},{name:"BadgeItemProps"}]}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"exactMatch",required:!1,type:{name:"boolean"}},{name:"new",required:!1,type:{name:"boolean"}},{name:"subNavigationItems",required:!1,type:{name:"Array",elements:[{name:"SubNavigationItem"}]}},{name:"secondaryAction",required:!1,type:{name:"SecondaryAction"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"shouldResizeIcon",required:!1,type:{name:"boolean"}}],events:[{name:"toggle-expanded-state"},{name:"click"}]};const yM=["aria-label"],gM=["aria-label"],hM=["aria-label"],Tc=M({props:{items:null,icon:null,title:null,fill:{type:Boolean},rollup:null,action:null,separator:{type:Boolean}},emits:["click"],setup(t,{emit:n}){const o=t,i=k(!1),l=()=>{i.value=!i.value},r=()=>{i.value=!1},u=k(null),m=k(),{useMediaQuery:x}=ma(),{isNavigationCollapsed:v}=x(),{useUniqueId:g}=Be(),h=g("AdditionalItems"),T=z=>{n("click"),u.value&&cancelAnimationFrame(u.value),(!z||!v)&&(u.value=requestAnimationFrame(r))};Se(()=>{u.value&&cancelAnimationFrame(u.value)});const N=p(()=>$(pe.Section,o.separator&&pe["Section-withSeparator"],o.fill&&pe["Section-fill"])),w=$(pe.Item,pe.RollupToggle),D=p(()=>o.rollup&&(i.value?o.rollup.hide:o.rollup.view)),B=p(()=>o.items.findIndex(z=>o.rollup?o.rollup.activePath===z.url||z.url&&o.rollup.activePath.startsWith(z.url)||(z.subNavigationItems?z.subNavigationItems.some(({url:Z})=>o.rollup&&o.rollup.activePath.startsWith(Z)):!1):!1)),E=z=>{m.value===z?m.value=-1:m.value=z},R=p(()=>{let z=[];if(z=o.rollup?o.items.slice(0,o.rollup.after):o.items,o.rollup&&B.value!==-1&&B.value>o.rollup.after-1){const Z=o.items.slice(o.rollup.after);z.push(...Z.splice(B.value-o.rollup.after,1))}return z});return(z,Z)=>(s(),d("ul",{class:c(a(N))},[t.title?(s(),d("li",{key:0,class:c(a(pe).SectionHeading)},[S("span",{class:c(a(pe).Text)},U(t.title),3),t.action?(s(),d(G,{key:0},[t.action.tooltip?(s(),A(a(Qt),Ze(me({key:0},t.action.tooltip)),{default:y(()=>[S("button",{type:"button",class:c(a(pe).Action),"aria-label":t.action.accessibilityLabel,onClick:Z[0]||(Z[0]=(...F)=>t.action.onClick&&t.action.onClick(...F))},[C(a(re),{source:t.action.icon},null,8,["source"])],10,yM)]),_:1},16)):(s(),d("button",{key:1,type:"button",class:c(a(pe).Action),"aria-label":t.action.accessibilityLabel,onClick:Z[1]||(Z[1]=(...F)=>t.action.onClick&&t.action.onClick(...F))},[C(a(re),{source:t.action.icon},null,8,["source"])],10,gM))],64)):L("",!0)],2)):L("",!0),a(R).length>0?(s(!0),d(G,{key:1},be(a(R),(F,W)=>(s(),A(a(ac),me({key:F.label},b({},F),{label:F.label,subNavigationItems:F.subNavigationItems,expanded:m.value===W,onClick:q=>T(F.subNavigationItems!=null&&F.subNavigationItems.length>0),onToggleExpandedState:q=>E(W)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128)):L("",!0),t.rollup&&t.items.slice(t.rollup.after).length>0?(s(),d("li",{key:2,class:c(a(pe).RollupSection)},[C(a(io),{id:a(h),open:i.value},{default:y(()=>[S("ul",{class:c(a(pe).List)},[(s(!0),d(G,null,be(t.items.slice(t.rollup.after),(F,W)=>(s(),A(a(ac),me({key:F.label},F,{label:F.label,subNavigationItems:F.subNavigationItems,expanded:m.value===W,onClick:q=>T(F.subNavigationItems!=null&&F.subNavigationItems.length>0),onToggleExpandedState:q=>E(W)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128))],2)]),_:1},8,["id","open"]),t.rollup&&t.items.length>t.rollup.after?(s(),d("div",{class:c(a(pe).ListItem),key:"List Item"},[S("button",{type:"button",class:c(a(w)),"aria-label":a(D),onClick:l},[S("span",{class:c(a(pe).Icon)},[C(a(re),{source:a(Ca)},null,8,["source"])],2)],10,hM)],2)):L("",!0)],2)):L("",!0)],2))}});Tc.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"items",description:"A collection of navigation items to be rendered inside the section",required:!0,type:{name:"Array",elements:[{name:"ItemProps"}]}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"title",required:!1,type:{name:"string"}},{name:"fill",required:!1,type:{name:"boolean"}},{name:"rollup",required:!1,type:{name:`{
  after: number;
  view: string;
  hide: string;
  activePath: string;
}`}},{name:"action",required:!1,type:{name:`{
  icon: IconProps['source'];
  accessibilityLabel: string;
  tooltip?: TooltipProps;
  onClick(): void;
}`}},{name:"separator",required:!1,type:{name:"boolean"}}],events:[{name:"click"}]};const bM="Polaris-OptionList",fM="Polaris-OptionList__Options",vM="Polaris-OptionList__Title";var Or={OptionList:bM,Options:fM,Title:vM};const xM="Polaris-OptionList-Option",TM="Polaris-OptionList-Option__SingleSelectOption",SM="Polaris-OptionList-Option--focused",CM="Polaris-OptionList-Option--active",AM="Polaris-OptionList-Option--select",kM="Polaris-OptionList-Option--disabled",NM="Polaris-OptionList-Option__Media",LM="Polaris-OptionList-Option__Label",wM="Polaris-OptionList-Option__Checkbox",PM="Polaris-OptionList-Option--verticalAlignTop",MM="Polaris-OptionList-Option--verticalAlignCenter",_M="Polaris-OptionList-Option--verticalAlignBottom";var rt={Option:xM,SingleSelectOption:TM,focused:SM,active:CM,select:AM,disabled:kM,Media:NM,Label:LM,Checkbox:wM,verticalAlignTop:PM,verticalAlignCenter:MM,verticalAlignBottom:_M};const DM="Polaris-OptionList-Checkbox",IM="Polaris-OptionList-Checkbox--active",BM="Polaris-OptionList-Checkbox__Backdrop",$M="Polaris-OptionList-Checkbox__Input",FM="Polaris-OptionList-Checkbox--keyFocused",EM="Polaris-OptionList-Checkbox__Icon",OM="Polaris-OptionList-Checkbox--hover";var Oa={Checkbox:DM,active:IM,Backdrop:BM,Input:$M,keyFocused:FM,"Input-indeterminate":"Polaris-OptionList-Checkbox__Input--indeterminate",Icon:EM,hover:OM};const qM=["id","name","value","checked","disabled","aria-checked","role"],Nm=M({props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean},active:{type:Boolean},id:null,name:null,modelValue:null,role:null},emits:["change","update:modelValue"],setup(t,{emit:n}){const o=t,{useUniqueId:i}=Be(),l=i("Checkbox",o.id),r=k(!1),u=p(()=>$(Oa.Checkbox,o.active&&Oa.active)),m=p(()=>$(Oa.Input,r.value&&Oa.keyFocused)),x=()=>{r.value=!1},v=()=>{r.value||(r.value=!0)},g=h=>{const T=h.target;n("update:modelValue",T.value),n("change",T.value)};return(h,T)=>(s(),d("div",{class:c(a(u))},[S("input",{type:"checkbox",id:a(l),name:t.name,value:t.modelValue,checked:t.checked,disabled:t.disabled,class:c(a(m)),"aria-checked":t.checked,onChange:g,onBlur:x,onKeyup:v,role:t.role},null,42,qM),S("div",{class:c(a(Oa).Backdrop)},null,2),S("div",{class:c(a(Oa).Icon)},[C(a(re),{source:a(lc)},null,8,["source"])],2)],2))}});Nm.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"checked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["string"]}},{name:"update:modelValue",type:{names:["string"]}}]};const RM=["for"],VM=["id","disabled","aria-pressed"],Lm=M({props:{id:null,value:null,section:null,index:null,disabled:{type:Boolean},active:{type:Boolean},select:{type:Boolean},allowMultiple:{type:Boolean},verticalAlign:null,role:null},emits:["click"],setup(t,{emit:n}){const o=t,i=ue(),l=k(!1),r=()=>{l.value=!l.value},u=p(()=>$(rt.SingleSelectOption,l.value&&rt.focused,o.disabled&&rt.disabled,o.select&&rt.select,o.active&&rt.active,o.verticalAlign&&rt[Le("verticalAlign",o.verticalAlign)])),m=p(()=>$(rt.Label,o.disabled&&rt.disabled,o.active&&rt.active,o.select&&rt.select,o.verticalAlign&&rt[Le("verticalAlign",o.verticalAlign)])),x=p(()=>o.role==="option"?"presentation":void 0),v=()=>{o.disabled||n("click",o.section,o.index)};return(g,h)=>(s(),d("li",{key:t.id,class:c(a(rt).Option),tabIndex:"-1"},[t.active?(s(),A(a(ls),{key:0})):L("",!0),t.allowMultiple?(s(),d("label",{key:1,for:t.id,class:c(a(m))},[S("div",{class:c(a(rt).Checkbox)},[C(a(Nm),{id:t.id,modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=T=>Gi(value)?value.value=T:null),checked:t.select,active:t.active,disabled:t.disabled,role:a(x),onChange:v},null,8,["id","modelValue","checked","active","disabled","role"])],2),a(i).media?(s(),d("div",{key:0,class:c(a(rt).Media)},[f(g.$slots,"media")],2)):L("",!0),f(g.$slots,"label")],10,RM)):(s(),d("button",{key:2,type:"button",id:t.id,class:c(a(u)),disabled:t.disabled,"aria-pressed":t.active,onClick:v,onFocus:r,onBlur:r},[a(i).media?(s(),d("div",{key:0,class:c(a(rt).Media)},[f(g.$slots,"media")],2)):L("",!0),f(g.$slots,"label")],42,VM))],2))}});Lm.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"string"}},{name:"section",required:!0,type:{name:"number"}},{name:"index",required:!0,type:{name:"number"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"select",required:!1,type:{name:"boolean"}},{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"verticalAlign",required:!1,type:{name:"Alignment"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],slots:[{name:"media"},{name:"label"}]};const HM=["role"],UM=["id","role"],Ko=M({props:{id:null,title:null,options:null,role:null,optionRole:null,sections:null,modelValue:null,allowMultiple:{type:Boolean},verticalAlign:null},emits:["update:modelValue","change"],setup(t,{emit:n}){const o=t,i=ue(),l=k(v(o.options,o.sections,o.title)),{useUniqueId:r}=Be(),u=r("OptionList",o.id),m=(g,h)=>{const T=l.value[g].options[h].value,N=o.modelValue.indexOf(T);if(o.allowMultiple){const w=N===-1?[T,...o.modelValue]:[...o.modelValue.slice(0,N),...o.modelValue.slice(N+1,o.modelValue.length)];n("update:modelValue",w),n("change",w);return}n("update:modelValue",[T]),n("change",[T])},x=p(()=>l.value.length>0);Ee(()=>[o.options,o.sections,o.title],(g,h)=>{g!==h&&(l.value=v(o.options||[],o.sections||[],o.title))});function v(g,h,T){if(!g||!g.length){const N=T?[{options:[],title:T}]:[];return!h||!h.length?[]:[...N,...h]}return!h||!h.length?[{title:T,options:g}]:[{title:T,options:g},...h]}return(g,h)=>(s(),d("ul",{class:c(a(Or).OptionList),role:t.role},[a(x)?(s(!0),d(G,{key:0},be(l.value,(T,N)=>(s(),d("li",{key:T.title||`noTitle-${N}`},[T.title?(s(),d("p",{key:0,class:c(a(Or).Title)},U(T.title),3)):L("",!0),S("ul",{class:c(a(Or).Options),id:`${a(u)}-${N}`,role:t.role},[T.options?(s(!0),d(G,{key:0},be(T.options,(w,D)=>(s(),A(a(Lm),me({key:w.id||`${a(u)}-${N}-${D}`,id:w.id||`${a(u)}-${N}-${D}`,section:N,index:D},w,{select:t.modelValue.includes(w.value),allowMultiple:t.allowMultiple,verticalAlign:t.verticalAlign,role:t.optionRole,onClick:m}),Ue({label:y(()=>[a(i)[`option-label-${w.id}`]?f(g.$slots,`option-label-${w.id}`,{key:0}):(s(),d(G,{key:1},[oe(U(w.label),1)],64))]),_:2},[a(i)[`option-media-${w.id}`]?{name:"media",fn:y(()=>[f(g.$slots,`option-media-${w.id}`)])}:void 0]),1040,["id","section","index","select","allowMultiple","verticalAlign","role"]))),128)):L("",!0)],10,UM)]))),128)):L("",!0)],10,HM))}});Ko.__docgenInfo={exportName:"default",displayName:"OptionList",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the option list",required:!1,type:{name:"string"}},{name:"title",description:"List title",required:!1,type:{name:"string"}},{name:"options",description:"Collection of options to be listed",required:!1,type:{name:"Array",elements:[{name:"OptionDescriptor"}]}},{name:"role",description:"Defines a specific role attribute for the list itself",required:!1,type:{name:"union",elements:[{name:'"listbox"'},{name:'"combobox"'},{name:"string"}]}},{name:"optionRole",description:"Defines a specific role attribute for each option in the list",required:!1,type:{name:"string"}},{name:"sections",description:"Sections containing a header and related options",required:!1,type:{name:"Array",elements:[{name:"SectionDescriptor"}]}},{name:"modelValue",description:"The selected options",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"allowMultiple",description:"Allow more than one option to be selected",required:!1,type:{name:"boolean"}},{name:"verticalAlign",description:"Vertically align child content to the center, top, or bottom.",required:!1,type:{name:"Alignment"}}],events:[{name:"update:modelValue",type:{names:["Array"]}},{name:"change",type:{names:["Array"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const jM="Polaris-Page",zM="Polaris-Page--fullWidth",WM="Polaris-Page--narrowWidth",GM="Polaris-Page__Content",XM="Polaris-Page--divider";var _o={Page:jM,fullWidth:zM,narrowWidth:WM,Content:GM,divider:XM};const wm=M({props:{title:null,secondaryActions:null,actionGroups:null},setup(t){const n=ue(),{useMediaQuery:o}=ma(),{isNavigationCollapsed:i}=o();function l(r=[]){return r.length===0?!1:r.some(u=>u.actions.length>0)}return(r,u)=>a(ye)(a(n).default)?f(r.$slots,"default",{key:0}):t.secondaryActions&&t.secondaryActions.length>0||l(t.actionGroups)?(s(),A(a(Ep),{key:1,actions:t.secondaryActions,groups:t.actionGroups,rollup:a(i),rollupActionsLabel:t.title?`View actions for ${t.title}`:void 0},null,8,["actions","groups","rollup","rollupActionsLabel"])):L("",!0)}});wm.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}],slots:[{name:"default"}]};const KM="Polaris-Page-Header",YM="Polaris-Page-Header--titleHidden",ZM="Polaris-Page-Header__TitleWrapper",QM="Polaris-Page-Header__Navigation",JM="Polaris-Page-Header--hasActionMenu",e_="Polaris-Page-Header--mobileView",t_="Polaris-Page-Header__BreadcrumbWrapper",a_="Polaris-Page-Header__PaginationWrapper",n_="Polaris-Page-Header__AdditionalNavigationWrapper",o_="Polaris-Page-Header__MainContent",i_="Polaris-Page-Header__TitleActionMenuWrapper",s_="Polaris-Page-Header--hasNavigation",l_="Polaris-Page-Header__PrimaryActionWrapper",r_="Polaris-Page-Header__ActionMenuWrapper",c_="Polaris-Page-Header__Row",u_="Polaris-Page-Header__RightAlign",d_="Polaris-Page-Header__LeftAlign",p_="Polaris-Page-Header--noBreadcrumbs",m_="Polaris-Page-Header__AdditionalMetaData",y_="Polaris-Page-Header__Actions",g_="Polaris-Page-Header--longTitle",h_="Polaris-Page-Header--mediumTitle",b_="Polaris-Page-Header--isSingleRow";var ze={Header:KM,titleHidden:YM,TitleWrapper:ZM,Navigation:QM,hasActionMenu:JM,mobileView:e_,BreadcrumbWrapper:t_,PaginationWrapper:a_,AdditionalNavigationWrapper:n_,MainContent:o_,TitleActionMenuWrapper:i_,hasNavigation:s_,PrimaryActionWrapper:l_,ActionMenuWrapper:r_,Row:c_,RightAlign:u_,LeftAlign:d_,noBreadcrumbs:p_,AdditionalMetaData:m_,Actions:y_,longTitle:g_,mediumTitle:h_,isSingleRow:b_};const Pm=M({props:{additionalMetadata:null},setup(t){const n=ue();return(o,i)=>(s(),d("div",{class:c(a(ze).AdditionalMetaData)},[C(a(ct),{variation:"subdued"},{default:y(()=>[a(n).default?f(o.$slots,"default",{key:0}):t.additionalMetadata?(s(),d(G,{key:1},[oe(U(t.additionalMetadata),1)],64)):L("",!0)]),_:3})],2))}});Pm.__docgenInfo={exportName:"default",displayName:"AdditionalMetadata",description:"",tags:{},props:[{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const Sc=M({setup(t){return(n,o)=>(s(),d("div",{class:c(a(ze).AdditionalNavigationWrapper)},[f(n.$slots,"default")],2))}});Sc.__docgenInfo={exportName:"default",displayName:"AdditionalNavigation",description:"",tags:{},slots:[{name:"default"}]};const Cc=M({props:{breadcrumbs:null},setup(t){return(n,o)=>t.breadcrumbs.length>0?(s(),d("div",{key:0,class:c(a(ze).BreadcrumbWrapper)},[C(a(Vp),{breadcrumbs:t.breadcrumbs},null,8,["breadcrumbs"])],2)):L("",!0)}});Cc.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const Ac=M({props:{pagination:null},setup(t){const n=ue(),{useMediaQuery:o}=ma(),{isNavigationCollapsed:i}=o();return(l,r)=>t.pagination&&!a(i)?(s(),d("div",{key:0,class:c(a(ze).PaginationWrapper)},[C(a(Yo),Ze(_t(t.pagination)),{default:y(()=>[a(ye)(a(n).default)?f(l.$slots,"default",{key:0}):L("",!0)]),_:3},16)],2)):L("",!0)}});Ac.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pagination",required:!1,type:{name:"PaginationProps"}}],slots:[{name:"default"}]};const f_=M({props:{pagination:null,breadcrumbs:null},setup(t){return(n,o)=>(s(),d("div",{class:c(a(ze).Navigation)},[C(Cc,{breadcrumbs:t.breadcrumbs},null,8,["breadcrumbs"]),C(Sc,null,{default:y(()=>[f(n.$slots,"default")]),_:3}),C(Ac,{pagination:t.pagination},null,8,["pagination"])],2))}});f_.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"pagination",required:!0,type:{name:"PaginationProps"}},{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}],slots:[{name:"default"}]};const v_="Polaris-Header-Title",x_="Polaris-Header-Title__TitleWithSubtitle",T_="Polaris-Header-Title__SubTitle",S_="Polaris-Header-Title__SubtitleCompact",C_="Polaris-Header-Title__TitleWithMetadataWrapper",A_="Polaris-Header-Title__TitleMetadata";var qa={Title:v_,TitleWithSubtitle:x_,SubTitle:T_,SubtitleCompact:S_,TitleWithMetadataWrapper:C_,TitleMetadata:A_};const Mm=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(t){const n=t,o=p(()=>$(qa.Title,n.subtitle&&qa.TitleWithSubtitle)),i=p(()=>$(qa.SubTitle,n.compactTitle&&qa.SubtitleCompact)),l=ue();return(r,u)=>(s(),d(G,null,[a(ye)(a(l).default)?(s(),d("div",{key:0,class:c(a(qa).TitleWithMetadataWrapper)},[t.title?(s(),d("h1",{key:0,class:c(a(o))},U(t.title),3)):L("",!0),S("div",{class:c(a(qa).TitleMetadata)},[f(r.$slots,"default")],2)],2)):(s(),d(G,{key:1},[t.title?(s(),d("h1",{key:0,class:c(a(o))},U(t.title),3)):L("",!0)],64)),t.subtitle?(s(),d("div",{key:2,class:c(a(i))},[S("p",null,U(t.subtitle),1)],2)):L("",!0)],64))}});Mm.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const _m=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(t){return(n,o)=>(s(),d("div",{class:c(a(ze).TitleWrapper)},[C(a(Mm),{title:t.title,subtitle:t.subtitle,compactTitle:t.compactTitle},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["title","subtitle","compactTitle"])],2))}});_m.__docgenInfo={exportName:"default",displayName:"PageTitle",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const nc=M({props:{id:null,content:null,accessibilityLabel:null,url:null,external:{type:Boolean},destructive:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},icon:null,primary:{type:Boolean},onAction:null,onMouseEnter:null,onTouchStart:null},setup(t){const n=t,o=ue(),{useMediaQuery:i}=ma(),{isNavigationCollapsed:l}=i(),r=p(()=>n.primary?n.primary:!0),u=p(()=>m(l,n));function m(x,v){let{content:g,accessibilityLabel:h,icon:T}=v;return T==null?_(b({},v),{icon:void 0}):(x?(h=h||g,g=void 0):T=void 0,_(b({},v),{content:g,accessibilityLabel:h,icon:T}))}return(x,v)=>(s(),d("div",{class:c(a(ze).PrimaryActionWrapper)},[a(ye)(a(o).default)?f(x.$slots,"default",{key:0}):(s(),A(a(Xe),{key:1,action:a(u),overrides:{primary:a(r)},onAction:v[0]||(v[0]=()=>{t.onAction&&t.onAction()}),onMouseenter:v[1]||(v[1]=()=>{t.onMouseEnter&&t.onMouseEnter()}),onTouchstart:v[2]||(v[2]=()=>{t.onTouchStart&&t.onTouchStart()})},null,8,["action","overrides"]))],2))}});nc.__docgenInfo={exportName:"default",displayName:"PrimaryAction",description:"",tags:{},slots:[{name:"default"}]};const Dm=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(t){const n=t,o=ue(),{useMediaQuery:i}=ma(),{isNavigationCollapsed:l}=i(),r=20,u=8,m=p(()=>({breadcrumbs:n.breadcrumbs||[]})),x=p(()=>({title:n.title,subtitle:n.subtitle,compactTitle:n.compactTitle})),v=p(()=>({title:n.title,secondaryActions:n.secondaryActions,actionGroups:n.actionGroups})),g=p(()=>b({},n.primaryAction)),h=p(()=>({additionalMetadata:n.additionalMetadata})),T=p(()=>l&&(!n.breadcrumbs||!n.breadcrumbs.length)&&n.title&&n.title.length<=u),N=p(()=>!l&&!n.pagination&&!n.secondaryActions&&!o.secondaryActions&&n.title!=null&&n.title.length<=r),w=p(()=>(l||N.value)&&g.value||!l&&!N.value&&n.pagination);return(D,B)=>(s(),A(a(Im),Ze(_t(n)),Ue({slot2:y(()=>[C(a(_m),Ze(_t(a(x))),{default:y(()=>[f(D.$slots,"pageTitle")]),_:3},16)]),slot3:y(()=>[C(a(wm),Ze(_t(a(v))),{default:y(()=>[f(D.$slots,"secondaryActions")]),_:3},16),(a(o).primaryAction||n.primaryAction)&&!a(l)&&!a(N)?(s(),A(a(nc),Ze(me({key:0},a(g))),{default:y(()=>[f(D.$slots,"primaryAction")]),_:3},16)):L("",!0)]),slot5:y(()=>[C(a(Pm),Ze(_t(a(h))),{default:y(()=>[f(D.$slots,"additionalMetadata")]),_:3},16)]),slot6:y(()=>[C(a(Sc),null,{default:y(()=>[f(D.$slots,"additionalNavigation")]),_:3})]),_:2},[a(T)?void 0:{name:"slot1",fn:y(()=>[C(a(Cc),Ze(_t(a(m))),null,16)])},a(w)?{name:"slot4",fn:y(()=>[(a(o).primaryAction||n.primaryAction)&&(a(l)||a(N))?(s(),A(a(nc),Ze(me({key:0},a(g))),{default:y(()=>[f(D.$slots,"primaryAction")]),_:3},16)):L("",!0),!a(l)&&!a(N)?(s(),A(a(Ac),{key:1,pagination:t.pagination},{default:y(()=>[a(ye)(a(o).pagination)?f(D.$slots,"pagination",{key:0}):L("",!0)]),_:3},8,["pagination"])):L("",!0)])}:void 0]),1040))}});Dm.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"pagination"},{name:"additionalMetadata"},{name:"additionalNavigation"}]};const Im=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(t){const n=t,o=34,i=ue(),{useMediaQuery:l}=ma(),{isNavigationCollapsed:r}=l(),u=p(()=>!n.primaryAction&&i.primaryAction&&!n.pagination&&(n.secondaryActions&&!i.secondaryActions&&!n.secondaryActions.length||i.secondaryActions)&&(!n.actionGroups||!n.actionGroups.length)),m=p(()=>n.breadcrumbs&&n.breadcrumbs.length>0||n.pagination&&!r||i.additionalNavigation),x=p(()=>!i.default||n.secondaryActions&&n.secondaryActions.length>0||B(n.actionGroups)),v=p(()=>$(ze.Header,u.value&&ze.isSingleRow,n.titleHidden&&ze.titleHidden,m.value&&ze.hasNavigation,x.value&&ze.hasActionMenu,r&&ze.mobileView,(!n.breadcrumbs||!n.breadcrumbs.length)&&ze.noBreadcrumbs,n.title&&n.title.length<o&&ze.mediumTitle,n.title&&n.title.length>o&&ze.longTitle)),g=p(()=>ye(i.slot1)),h=p(()=>ye(i.slot2)),T=p(()=>ye(i.slot3)),N=p(()=>ye(i.slot4)),w=p(()=>ye(i.slot5)),D=p(()=>ye(i.slot6));function B(E=[]){return E.length===0?!1:E.some(R=>R.actions.length>0)}return(E,R)=>(s(),d("div",{class:c(a(v))},[a(g)||a(h)||a(T)||a(N)?(s(),d("div",{key:0,class:c(a(ze).Row)},[f(E.$slots,"slot1"),f(E.$slots,"slot2"),a(T)||a(N)?(s(),d("div",{key:0,class:c(a(ze).RightAlign)},[a(T)&&a(N)?(s(),d("div",{key:0,class:c(a(ze).Actions)},[f(E.$slots,"slot3"),f(E.$slots,"slot4")],2)):(s(),d(G,{key:1},[f(E.$slots,"slot3"),f(E.$slots,"slot4")],64))],2)):L("",!0)],2)):L("",!0),a(w)||a(D)?(s(),d("div",{key:1,class:c(a(ze).Row)},[S("div",{class:c(a(ze).LeftAlign)},[f(E.$slots,"slot5")],2),a(D)?(s(),d("div",{key:0,class:c(a(ze).RightAlign)},[f(E.$slots,"slot6")],2)):L("",!0)],2)):L("",!0)],2))}});Im.__docgenInfo={exportName:"default",displayName:"HeaderWrapper",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryAction"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"slot1"},{name:"slot2"},{name:"slot3"},{name:"slot4"},{name:"slot5"},{name:"slot6"}]};const Ns=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},divider:{type:Boolean}},setup(t){const n=t,o=ue(),i=p(()=>n.title||n.primaryAction||o.primaryAction||(n.secondaryActions||o.secondaryActions)&&(n.secondaryActions&&!o.secondaryActions&&n.secondaryActions.length>0||o.secondaryActions&&!n.secondaryActions&&!o.secondaryActions.length)||n.actionGroups&&n.actionGroups.length>0||o.actionGroups||n.breadcrumbs&&n.breadcrumbs.length>0||o.breadcrumbs),l=p(()=>{const h=n,{fullWidth:m,narrowWidth:x,divider:v}=h,g=J(h,["fullWidth","narrowWidth","divider"]);return b({},g)}),r=p(()=>$(_o.Page,n.fullWidth&&_o.fullWidth,n.narrowWidth&&_o.narrowWidth)),u=p(()=>$(!i.value&&_o.Content,n.divider&&i&&_o.divider));return(m,x)=>(s(),d("div",{class:c(a(r))},[a(i)?(s(),A(a(Dm),Ze(me({key:0},a(l))),Ue({_:2},[a(ye)(a(o).pageTitle)?{name:"pageTitle",fn:y(()=>[f(m.$slots,"pageTitle")])}:void 0,a(o).secondaryActions?{name:"secondaryActions",fn:y(()=>[f(m.$slots,"secondaryActions")])}:void 0,a(o).primaryAction?{name:"primaryAction",fn:y(()=>[f(m.$slots,"primaryAction")])}:void 0,a(o).additionalMetadata?{name:"additionalMetadata",fn:y(()=>[f(m.$slots,"additionalMetadata")])}:void 0,a(o).additionalNavigation?{name:"additionalNavigation",fn:y(()=>[f(m.$slots,"additionalNavigation")])}:void 0,a(ye)(a(o).pagination)?{name:"pagination",fn:y(()=>[f(m.$slots,"pagination")])}:void 0]),1040)):L("",!0),S("div",{class:c(a(u))},[f(m.$slots,"default")],2)],2))}});Ns.__docgenInfo={exportName:"default",displayName:"Page",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"divider",description:"Displays a divider between the page header and the page content",required:!1,type:{name:"boolean"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"additionalMetadata"},{name:"additionalNavigation"},{name:"pagination"},{name:"default"}]};const k_="Polaris-PageActions";var N_={PageActions:k_};const Ls=M({props:{primaryAction:null,secondaryActions:null},setup(t){const n=t,o=p(()=>n.secondaryActions&&n.secondaryActions.length>0?"equalSpacing":"trailing");return(i,l)=>(s(),d("div",{class:c(a(N_).PageActions)},[C(a(qe),{distribution:a(o),spacing:"tight"},{default:y(()=>[t.secondaryActions&&t.secondaryActions.length>0?(s(),A(a(tt),{key:0},{default:y(()=>[(s(!0),d(G,null,be(t.secondaryActions,r=>(s(),A(a(Xe),{key:r.id,action:r},null,8,["action"]))),128))]),_:1})):L("",!0),t.primaryAction?(s(),A(a(Xe),{key:1,action:t.primaryAction,overrides:{primary:!0}},null,8,["action"])):L("",!0)]),_:1},8,["distribution"])],2))}});Ls.__docgenInfo={exportName:"default",displayName:"PageActions",description:"",tags:{},props:[{name:"primaryAction",description:"The primary action for the page",required:!1,type:{name:"intersection",elements:[{name:"DisableableAction"},{name:"LoadableAction"}]}},{name:"secondaryActions",description:"The secondary actions for the page",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}]};function L_(){if(document==null||document.activeElement==null)return!1;const{tagName:t}=document.activeElement;return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||document.activeElement.hasAttribute("contenteditable")}const w_={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},P_=S("path",{d:"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z"},null,-1),M_=[P_];function __(t,n){return s(),d("svg",w_,M_)}var Zu={render:__};const D_=["aria-label"],I_={key:2,"aria-live":"polite"},Yo=M({props:{nextKeys:null,previousKeys:null,nextTooltip:null,previousTooltip:null,nextURL:null,previousURL:null,hasNext:{type:Boolean},hasPrevious:{type:Boolean},accessibilityLabel:null,accessibilityLabels:null},setup(t){const n=t,o=ve("lang"),i=k(null),l=ue(),r=Et(),u=n.accessibilityLabel||o.Polaris.Pagination.pagination,m=n.accessibilityLabels&&n.accessibilityLabels.previous||o.Polaris.Pagination.previous,x=n.accessibilityLabels&&n.accessibilityLabels.next||o.Polaris.Pagination.next,v=p(()=>n.previousKeys&&(n.previousURL||r.onPrevious)&&n.hasPrevious),g=p(()=>n.nextKeys&&(n.nextURL||r.onNext)&&n.hasNext),h=()=>{n.previousURL;const w=r.onPrevious;N(w())},T=()=>{n.nextURL;const w=r.onNext;N(w())},N=w=>()=>{L_()||w()};return(w,D)=>(s(),d("nav",{ref_key:"paginationRef",ref:i,"aria-label":a(u)},[a(v)?(s(!0),d(G,{key:0},be(t.previousKeys,B=>(s(),A(a(St),{key:B,"key-code":B,handler:h},null,8,["key-code"]))),128)):L("",!0),a(g)?(s(!0),d(G,{key:1},be(t.nextKeys,B=>(s(),A(a(St),{key:B,"key-code":B,handler:T},null,8,["key-code"]))),128)):L("",!0),C(a(tt),{segmented:!a(ye)(a(l).default)},{default:y(()=>[t.previousTooltip&&t.hasPrevious?(s(),A(a(Qt),{key:0,"activator-wrapper":"span",content:t.previousTooltip},{default:y(()=>[C(a(ge),{id:"previousURL",outline:"",icon:a(Zu),accessibilityLabel:a(m),url:t.previousURL,disabled:!t.hasPrevious,onClick:D[0]||(D[0]=B=>w.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(s(),A(a(ge),{key:1,id:"previousURL",outline:"",icon:a(Zu),accessibilityLabel:a(m),url:t.previousURL,disabled:!t.hasPrevious,onClick:D[1]||(D[1]=B=>w.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])),a(ye)(a(l).default)?(s(),d("div",I_,[t.hasNext&&t.hasPrevious?(s(),A(a(ct),{key:0},{default:y(()=>[f(w.$slots,"default")]),_:3})):(s(),A(a(ct),{key:1,variation:"subdued"},{default:y(()=>[f(w.$slots,"default")]),_:3}))])):L("",!0),t.nextTooltip&&t.hasNext?(s(),A(a(Qt),{key:3,"activator-wrapper":"span",content:t.nextTooltip},{default:y(()=>[C(a(ge),{id:"nextURL",outline:"",icon:a(Ur),accessibilityLabel:a(x),url:t.nextURL,onClick:D[2]||(D[2]=B=>w.$emit("next")),disabled:!t.hasNext},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(s(),A(a(ge),{key:4,id:"nextURL",outline:"",icon:a(Ur),accessibilityLabel:a(x),url:t.nextURL,onClick:D[3]||(D[3]=B=>w.$emit("next")),disabled:!t.hasNext},null,8,["icon","accessibilityLabel","url","disabled"]))]),_:3},8,["segmented"])],8,D_))}});Yo.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"nextKeys",description:"Keyboard shortcuts for the next button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"previousKeys",description:"Keyboard shortcuts for the previous button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"nextTooltip",description:"Tooltip for the next button",required:!1,type:{name:"string"}},{name:"previousTooltip",description:"Tooltip for the previous button",required:!1,type:{name:"string"}},{name:"nextURL",description:"The URL of the next page",required:!1,type:{name:"string"}},{name:"previousURL",description:"The URL of the previous page",required:!1,type:{name:"string"}},{name:"hasNext",description:"Whether there is a next page to show",required:!1,type:{name:"boolean"}},{name:"hasPrevious",description:"Whether there is a previous page to show",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Accessible label for the pagination",required:!1,type:{name:"string"}},{name:"accessibilityLabels",description:"Accessible labels for the buttons and UnstyledLinks",required:!1,type:{name:"AccessibilityLabels"}}],events:[{name:"previous"},{name:"next"}],slots:[{name:"default"}]};const B_="Polaris-ProgressBar",$_="Polaris-ProgressBar--sizeSmall",F_="Polaris-ProgressBar--sizeMedium",E_="Polaris-ProgressBar--sizeLarge",O_="Polaris-ProgressBar--colorHighlight",q_="Polaris-ProgressBar--colorPrimary",R_="Polaris-ProgressBar--colorSuccess",V_="Polaris-ProgressBar--colorCritical",H_="Polaris-ProgressBar__Indicator",U_="Polaris-ProgressBar__IndicatorAppearActive",j_="Polaris-ProgressBar__IndicatorAppearDone",z_="Polaris-ProgressBar__Progress",W_="Polaris-ProgressBar__Label";var Ta={ProgressBar:B_,sizeSmall:$_,sizeMedium:F_,sizeLarge:E_,colorHighlight:O_,colorPrimary:q_,colorSuccess:R_,colorCritical:V_,Indicator:H_,IndicatorAppearActive:U_,IndicatorAppearDone:j_,Progress:z_,Label:W_};const G_=["value"],ws=M({props:{progress:{default:0},size:{default:"medium"},color:{default:"highlight"},animated:{type:Boolean,default:!0}},setup(t){const n=t,o=ve("lang"),i=p(()=>$(Ta.ProgressBar,n.size&&Ta[Le("size",n.size)],n.color&&Ta[Le("color",n.color)])),l=p(()=>n.progress<0?o.Polaris.ProgressBar.negativeWarningMessage.replace("{progress}",n.progress):o.Polaris.ProgressBar.exceedWarningMessage.replace("{progress}",n.progress)),r=(g,h)=>{let T;return g<0?T=0:g>100?T=100:T=g,T},u=p(()=>n.animated?ji.motion["duration-500"].value:ji.motion["duration-0"].value),m=p(()=>({"--pc-progress-bar-duration":u.value,"--pc-progress-bar-percent":x.value/100})),x=p(()=>r(n.progress,l.value)),v=(g,h)=>{setTimeout(()=>{g.classList.add(Ta.IndicatorAppearDone),h()},1)};return(g,h)=>(s(),d("div",{class:c(a(i))},[S("progress",{class:c(a(Ta).Progress),value:a(x),max:"100"},null,10,G_),C(vp,{appear:"",duration:parseInt(a(u),10),onEnter:v},{default:y(()=>[S("div",{class:c(a($)(a(Ta).Indicator)),style:Fe(a(m))},[S("span",{class:c(a(Ta).Label)},U(a(x))+"%",3)],6)]),_:1},8,["duration"])],2))}});ws.__docgenInfo={exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"progress",description:"The progression of certain tasks",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",description:"Size of progressbar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"color",description:"Color of progressbar",tags:{default:[{description:"'highlight'",title:"default"}]},required:!1,type:{name:"Color"},defaultValue:{func:!1,value:"'highlight'"}},{name:"animated",description:"Whether the fill animation is triggered",tags:{default:[{description:"'true'",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]};function X_(t){return Math.sign(t)===1?-Math.abs(t):Math.sign(t)===-1?Math.abs(t):0}const K_="Polaris-RangeSlider-SingleThumb__RangeSlider",Y_="Polaris-RangeSlider-SingleThumb",Z_="Polaris-RangeSlider-SingleThumb--disabled",Q_="Polaris-RangeSlider-SingleThumb__InputWrapper",J_="Polaris-RangeSlider-SingleThumb__Prefix",eD="Polaris-RangeSlider-SingleThumb__Suffix",tD="Polaris-RangeSlider-SingleThumb__Input",aD="Polaris-RangeSlider-SingleThumb--error",nD="Polaris-RangeSlider-SingleThumb__Output",oD="Polaris-RangeSlider-SingleThumb__OutputBubble",iD="Polaris-RangeSlider-SingleThumb__OutputText";var $t={RangeSlider:K_,SingleThumb:Y_,disabled:Z_,InputWrapper:Q_,Prefix:J_,Suffix:eD,Input:tD,error:aD,Output:nD,OutputBubble:oD,OutputText:iD};const sD="Polaris-RangeSlider";var Bm={RangeSlider:sD};const lD=["id","name","min","max","step","value","disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby"],rD=["for"],$m=M({props:{labelAction:null,labelHidden:{type:Boolean},id:null,modelValue:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","focus","blur"],setup(t,{emit:n}){const o=t,i=ue(),l=p(()=>ca(o.modelValue,o.min,o.max)),r=k([]);o.error&&r.value.push(`${o.id}Error`),i["help-text"]&&r.value.push(gs(o.id));const u=p(()=>r.value.length?r.value.join(" "):void 0),m=p(()=>(l.value-o.min)*100/(o.max-o.min)),x=p(()=>X_((m.value-50)/100)),v=p(()=>({"--pc-range-slider-min":o.min,"--pc-range-slider-max":o.max,"--pc-range-slider-current":l.value,"--pc-range-slider-progress":`${m.value}%`,"--pc-range-slider-output-factor":`${x.value}`})),g=p(()=>$($t.SingleThumb,Bm.RangeSlider,o.error&&$t.error,o.disabled&&$t.disabled)),h=T=>{n("input",parseFloat(T.target.value),o.id)};return(T,N)=>(s(),A(a(so),{id:t.id,action:t.labelAction,labelHidden:t.labelHidden},Ue({default:y(()=>[S("div",{class:c(a(g)),style:Fe(a(v))},[a(ye)(a(i).prefix)?(s(),d("div",{key:0,class:c(a($t).Prefix)},[f(T.$slots,"prefix")],2)):L("",!0),S("div",{class:c(a($t).InputWrapper)},[S("input",{type:"range",class:c(a($t).Input),id:t.id,name:t.id,min:t.min,max:t.max,step:t.step,value:a(l),disabled:t.disabled,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":a(l),"aria-invalid":Boolean(t.error),"aria-describedby":a(u),onInput:h,onFocus:N[0]||(N[0]=w=>T.$emit("focus")),onBlur:N[1]||(N[1]=w=>T.$emit("blur"))},null,42,lD),!t.disabled&&t.output?(s(),d("output",{key:0,for:t.id,class:c(a($t).Output)},[S("div",{class:c(a($t).OutputBubble)},[S("span",{class:c(a($t).OutputText)},U(a(l)),3)],2)],10,rD)):L("",!0)],2),a(ye)(a(i).suffix)?(s(),d("div",{key:1,class:c(a($t).Suffix)},[f(T.$slots,"suffix")],2)):L("",!0)],6)]),_:2},[a(ye)(a(i).label)?{name:"label",fn:y(()=>[f(T.$slots,"label")])}:void 0,a(ye)(a(i)["help-text"])?{name:"help-text",fn:y(()=>[f(T.$slots,"help-text")])}:void 0]),1032,["id","action","labelHidden"]))}});$m.__docgenInfo={exportName:"default",displayName:"SingleThumb",description:"",tags:{},props:[{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"number"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["number"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const cD="Polaris-RangeSlider-DualThumb__RangeSlider",uD="Polaris-RangeSlider-DualThumb",dD="Polaris-RangeSlider-DualThumb__TrackWrapper",pD="Polaris-RangeSlider-DualThumb--disabled",mD="Polaris-RangeSlider-DualThumb__Track",yD="Polaris-RangeSlider-DualThumb--error",gD="Polaris-RangeSlider-DualThumb__Thumbs",hD="Polaris-RangeSlider-DualThumb__Prefix",bD="Polaris-RangeSlider-DualThumb__Suffix",fD="Polaris-RangeSlider-DualThumb__Output",vD="Polaris-RangeSlider-DualThumb__OutputBubble",xD="Polaris-RangeSlider-DualThumb__OutputText";var at={RangeSlider:cD,DualThumb:uD,TrackWrapper:dD,disabled:pD,Track:mD,error:yD,"Track--dashed":"Polaris-RangeSlider-DualThumb--trackDashed",Thumbs:gD,Prefix:hD,Suffix:bD,Output:fD,OutputBubble:vD,OutputText:xD};const TD=["id","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],SD=["for"],CD=["id","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],AD=["for"],Fm=M({props:{modelValue:null,labelAction:null,labelHidden:{type:Boolean},id:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","update:modelValue","focus","blur"],setup(t,{emit:n}){const o=t,i=ue(),l=k(ke(o.modelValue,o.min,o.max,o.step)),r=k(0),u=k(0),m=k(null),x=k(null),v=k(null),g=k(null),h=Kt(()=>{if(m.value){const{width:K,left:Q}=m.value.getBoundingClientRect(),xe=K-16,Ve=Q+16/2,He=o.max-o.min,ft=o.min/He*xe;r.value=xe,u.value=Ve-ft}},40,{leading:!0,trailing:!0,maxWait:40}),T=p(()=>o.id),N=p(()=>`${o.id}Upper`),w=k([]);o.error&&w.value.push(`${o.id}Error`);const D=p(()=>w.value.length?w.value.join(" "):void 0),B=p(()=>$(at.TrackWrapper,o.error&&at.error,o.disabled&&at.disabled)),E=p(()=>$(at.Thumbs,o.disabled&&at.disabled)),R=p(()=>$(at.Thumbs,o.disabled&&at.disabled)),z=p(()=>o.max-o.min),Z=p(()=>o.min/z.value*r.value),F=p(()=>l.value[0]/z.value*r.value-Z.value),W=p(()=>l.value[1]/z.value*r.value-Z.value),q=p(()=>$(at.Output)),j=p(()=>$(at.Output)),le=p(()=>({"--pc-range-slider-progress-lower":`${F.value}px`,"--pc-range-slider-progress-upper":`${W.value}px`}));Se(()=>{h(),x.value&&x.value.addEventListener("touchstart",Ht,{passive:!1})}),gt(()=>{x.value&&x.value.removeEventListener("touchstart",Ht)});const fe=I=>{I.button!==0||o.disabled||(bt(ae),I.stopPropagation())},ae=I=>{const K=l.value[1];_e([ht(I.clientX),K],"Upper")},Me=I=>{o.disabled||(ne(O),I.stopPropagation())},O=I=>{I.preventDefault();const K=l.value[1];_e([ht(I.touches[0].clientX),K],"Upper")},X=I=>{I.button!==0||o.disabled||(bt(Y),I.stopPropagation())},Y=I=>{const K=l.value[0];_e([K,ht(I.clientX)],"Lower")},ce=I=>{o.disabled||(ne(de),I.stopPropagation())},de=I=>{I.preventDefault();const K=l.value[0];_e([K,ht(I.touches[0].clientX)],"Lower")},$e=I=>{if(o.disabled)return;const Q={[We.ArrowUp]:Ce,[We.ArrowRight]:Ce,[We.ArrowDown]:ie,[We.ArrowLeft]:ie}[I.key];Q!=null&&(I.preventDefault(),I.stopPropagation(),Q())},he=I=>{if(o.disabled)return;const Q={[We.ArrowUp]:Te,[We.ArrowRight]:Te,[We.ArrowDown]:Ie,[We.ArrowLeft]:Ie}[I.key];Q!=null&&(I.preventDefault(),I.stopPropagation(),Q())},Ce=()=>{_e([l.value[0]+o.step,l.value[1]],"Upper")},ie=()=>{_e([l.value[0]-o.step,l.value[1]],"Upper")},Te=()=>{_e([l.value[0],l.value[1]+o.step],"Lower")},Ie=()=>{_e([l.value[0],l.value[1]-o.step],"Lower")},Re=()=>{n("input",l.value,o.id),n("update:modelValue",l.value,o.id)},_e=(I,K)=>{const Q=ke(I,o.min,o.max,o.step,K);je(Q,l.value)||(l.value=Q,Re())},dt=I=>{if(I.button!==0||o.disabled)return;I.preventDefault();const K=ht(I.clientX),Q=Math.abs(l.value[0]-K),xe=Math.abs(l.value[1]-K);Q<=xe?(_e([K,l.value[1]],"Upper"),bt(ae),v.value&&v.value.focus()):(_e([l.value[0],K],"Lower"),bt(Y),g.value&&g.value.focus())},Ht=I=>{if(o.disabled)return;I.preventDefault();const K=ht(I.touches[0].clientX),Q=Math.abs(l.value[0]-K),xe=Math.abs(l.value[1]-K);Q<=xe?(_e([K,l.value[1]],"Upper"),ne(O),v.value&&v.value.focus()):(_e([l.value[0],K],"Lower"),ne(de),g.value&&g.value.focus())},ht=I=>{if(m.value){const{min:K,max:Q}=o;return(I-u.value)/r.value*(Q-K)}else return 0};function bt(I){document.addEventListener("mousemove",I),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",I)},{once:!0})}function ne(I){const K=()=>{document.removeEventListener("touchmove",I),document.removeEventListener("touchend",K),document.removeEventListener("touchcancel",K)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",K,{once:!0}),document.addEventListener("touchcancel",K,{once:!0})}function ke(I,K,Q,xe,Ve="Upper"){let He=nh(bu(I[1])),ft=oh(bu(I[0]));const gu=He-xe,hu=ft+xe;return Ve==="Upper"&&ft>gu?ft=gu:Ve==="Lower"&&He<hu&&(He=hu),[ft,He];function nh(Ut){const ko=K+xe;return Ut<ko?ko:Ut>Q?Q:Ut}function oh(Ut){const ko=Q-xe;return Ut<K?K:Ut>ko?ko:Ut}function bu(Ut){return Math.round(Ut/xe)*xe}}function je(I,K){return I==null||K==null?!1:I[0]===K[0]&&I[1]===K[1]}return(I,K)=>(s(),d(G,null,[C(a(so),{id:t.id,error:t.error,action:t.labelAction,labelHidden:t.labelHidden},Ue({default:y(()=>[S("div",{class:c(a($)(a(at).DualThumb,a(Bm).RangeSlider))},[a(i).prefix?(s(),d("div",{key:0,class:c(a(at).Prefix)},[f(I.$slots,"prefix")],2)):L("",!0),S("div",{class:c(a(B)),ref_key:"trackWrapper",ref:x,onMousedown:dt},[S("div",{class:c(a(at).Track),style:Fe(a(le)),ref_key:"track",ref:m},null,6),S("div",{class:c(a(at)["Track--dashed"])},null,2),S("div",{id:a(T),class:c(a(E)),style:Fe({left:`${a(F)}px`}),ref_key:"thumbLower",ref:v,role:"slider","aria-disabled":t.disabled,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":l.value[0],"aria-invalid":Boolean(t.error),"aria-describedby":a(D),"aria-labelledby":a(Fo)(t.id),tabIndex:"0",onFocus:K[0]||(K[0]=Q=>I.$emit("focus")),onBlur:K[1]||(K[1]=Q=>I.$emit("blur")),onKeydown:$e,onMousedown:fe,onTouchstart:Me},null,46,TD),!t.disabled&&t.output?(s(),d("output",{key:0,for:a(N),class:c(a(q)),style:Fe({left:`${a(F)}px`})},[S("div",{class:c(a(at).OutputBubble)},[S("span",{class:c(a(at).OutputText)},U(l.value[0]),3)],2)],14,SD)):L("",!0),S("div",{id:a(N),class:c(a(R)),style:Fe({left:`${a(W)}px`}),role:"slider",tabIndex:"0",ref_key:"thumbUpper",ref:g,"aria-disabled":t.disabled,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":l.value[1],"aria-invalid":Boolean(t.error),"aria-describedby":a(D),"aria-labelledby":a(Fo)(t.id),onFocus:K[2]||(K[2]=Q=>I.$emit("focus")),onBlur:K[3]||(K[3]=Q=>I.$emit("blur")),onKeydown:he,onMousedown:X,onTouchstart:ce},null,46,CD),!t.disabled&&t.output?(s(),d("output",{key:1,for:a(N),class:c(a(j)),style:Fe({left:`${a(W)}px`})},[S("div",{class:c(a(at).OutputBubble)},[S("span",{class:c(a(at).OutputText)},U(l.value[1]),3)],2)],14,AD)):L("",!0)],34),a(i).suffix?(s(),d("div",{key:1,class:c(a(at).Suffix)},[f(I.$slots,"suffix")],2)):L("",!0)],2)]),_:2},[a(ye)(a(i).label)?{name:"label",fn:y(()=>[f(I.$slots,"label")])}:void 0,a(ye)(a(i)["help-text"])?{name:"help-text",fn:y(()=>[f(I.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden"]),C(a(it),{event:"resize",handler:a(h)},null,8,["handler"])],64))}});Fm.__docgenInfo={exportName:"default",displayName:"DualThumb",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"DualValue"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["DualValue"]}},{name:"update:modelValue",type:{names:["DualValue"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const Ba=M({props:{label:null,labelAction:null,labelHidden:{type:Boolean},modelValue:null,min:{default:0},max:{default:100},step:{default:1},output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue","focus","blur"],setup(t,{emit:n}){const o=t,i=ue(),{useUniqueId:l}=Be(),r=l("RangeSlider"),u=p(()=>Array.isArray(o.modelValue)),m=p(()=>u.value?o.modelValue[0]:o.modelValue),x=p(()=>u.value?o.modelValue:[o.modelValue,o.modelValue+1]),v=p(()=>{const w=o,{label:h,modelValue:T}=w,N=J(w,["label","modelValue"]);return b({id:r},N)}),g=(h,T)=>{n("change",h,T),n("update:modelValue",h,T)};return(h,T)=>a(u)?(s(),A(a(Fm),me({key:0,modelValue:a(x),"onUpdate:modelValue":T[0]||(T[0]=N=>Gi(x)?x.value=N:null)},a(v),{onInput:g,onFocus:T[1]||(T[1]=N=>n("focus")),onBlur:T[2]||(T[2]=N=>n("blur"))}),Ue({_:2},[a(i).label||t.label?{name:"label",fn:y(()=>[a(i).label?f(h.$slots,"label",{key:0}):(s(),d(G,{key:1},[oe(U(t.label),1)],64))])}:void 0,a(i)["help-text"]?{name:"help-text",fn:y(()=>[f(h.$slots,"help-text")])}:void 0,a(i).prefix?{name:"prefix",fn:y(()=>[f(h.$slots,"prefix")])}:void 0,a(i).suffix?{name:"suffix",fn:y(()=>[f(h.$slots,"suffix")])}:void 0]),1040,["modelValue"])):(s(),A(a($m),me({key:1,modelValue:a(m),"onUpdate:modelValue":T[3]||(T[3]=N=>Gi(m)?m.value=N:null)},a(v),{onInput:g,onFocus:T[4]||(T[4]=N=>n("focus")),onBlur:T[5]||(T[5]=N=>n("blur"))}),Ue({_:2},[a(i).label||t.label?{name:"label",fn:y(()=>[a(i).label?f(h.$slots,"label",{key:0}):(s(),d(G,{key:1},[oe(U(t.label),1)],64))])}:void 0,a(i)["help-text"]?{name:"help-text",fn:y(()=>[f(h.$slots,"help-text")])}:void 0,a(i).prefix?{name:"prefix",fn:y(()=>[f(h.$slots,"prefix")])}:void 0,a(i).suffix?{name:"suffix",fn:y(()=>[f(h.$slots,"suffix")])}:void 0]),1040,["modelValue"]))}});Ba.__docgenInfo={exportName:"default",displayName:"RangeSlider",description:"",tags:{},props:[{name:"label",description:"Label for the range input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"RangeSliderValue"}},{name:"min",description:"Minimum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",description:"Maximum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",description:"Increment value for range input changes",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["RangeSliderValue"]}},{name:"update:modelValue",type:{names:["RangeSliderValue"]}},{name:"focus"},{name:"blur"}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const kD="Polaris-Select",ND="Polaris-Select--disabled",LD="Polaris-Select__Content",wD="Polaris-Select__InlineLabel",PD="Polaris-Select__Icon",MD="Polaris-Select__Backdrop",_D="Polaris-Select__SelectedOption",DD="Polaris-Select__Prefix",ID="Polaris-Select__Input",BD="Polaris-Select--error",$D="Polaris-Select--hover";var Ft={Select:kD,disabled:ND,Content:LD,InlineLabel:wD,Icon:PD,Backdrop:MD,SelectedOption:_D,Prefix:DD,Input:ID,error:BD,hover:$D};const FD=["id","name","disabled","value","aria-invalid","aria-describedby","aria-required"],ED=["label"],OD=["value","disabled"],qD=["value","disabled"],RD=["aria-disabled"],co=M({props:{options:null,labelAction:null,labelHidden:{type:Boolean},labelInline:{type:Boolean},disabled:{type:Boolean},placeholder:null,id:null,name:null,value:null,error:null,requiredIndicator:{type:Boolean},modelValue:null},emits:["focus","blur","change","update:modelValue"],setup(t,{emit:n}){const o=t,i=ue(),{useUniqueId:l}=Be(),r=[],u=p(()=>l("Select",o.id)),m=p(()=>o.labelInline?!0:o.labelHidden),x=p(()=>$(Ft.Select,o.error&&Ft.error,o.disabled&&Ft.disabled)),v=p(()=>{let F=[];return T.value.forEach(W=>{if(w(W)){const q=W;F=F.concat(q.options)}else F.push(W)}),F}),g=p(()=>{let F=v.value.find(W=>o.modelValue===W.value);return F===void 0&&(F=v.value.find(W=>!W.hidden)),F||{value:"",label:""}}),h=p(()=>T.value.map(F=>Z(F))),T=p(()=>{let F=o.options.map(Z);return o.placeholder&&F.unshift({label:o.placeholder,value:"",disabled:!0}),F});i["help-text"]&&r.push(gs(o.id||"")),o.error&&r.push(`${o.id}Error`);const N=F=>typeof F=="string",w=F=>typeof F=="object"&&"options"in F&&F.options!=null,D=F=>{n("update:modelValue",F.target.value),n("change",F.target.value)},B=F=>w(F)?F.title:F.label,E=F=>w(F)?{label:F.title,value:"",disabled:!0,hidden:!0}:F,R=F=>w(F)?F.options:[];function z(F){return{label:F,value:F}}function Z(F){if(N(F))return z(F);if(w(F)){const{title:W,options:q}=F;return{title:W,options:q.map(j=>N(j)?z(j):j)}}return F}return(F,W)=>(s(),A(a(so),{id:a(u),error:t.error,action:t.labelAction,"label-hidden":a(m),"required-indicator":t.requiredIndicator},Ue({default:y(()=>[S("div",{class:c(a(x))},[S("select",{id:a(u),name:t.name,class:c(a(Ft).Input),disabled:t.disabled,value:t.modelValue,"aria-invalid":!!t.error,"aria-describedby":r.join(" ")||void 0,"aria-required":t.requiredIndicator,onFocus:W[0]||(W[0]=q=>F.$emit("focus")),onBlur:W[1]||(W[1]=q=>F.$emit("blur")),onChange:D},[(s(!0),d(G,null,be(a(h),q=>(s(),d(G,null,[w(q)?(s(),d("optgroup",{label:B(q),key:B(q)},[(s(!0),d(G,null,be(R(q),j=>(s(),d("option",{key:j.value,value:j.value,disabled:j.disabled},U(j.label),9,OD))),128))],8,ED)):(s(),d("option",{key:E(q).value,value:E(q).value,disabled:E(q).disabled},U(E(q).label),9,qD))],64))),256))],42,FD),S("div",{class:c(a(Ft).Content),"aria-hidden":"","aria-disabled":t.disabled},[t.labelInline?(s(),d("span",{key:0,class:c(a(Ft).InlineLabel)},[f(F.$slots,"label")],2)):L("",!0),F.$slots[`prefix-${a(g).id}`]?(s(),d("div",{key:1,class:c(a(Ft).Prefix)},[f(F.$slots,`prefix-${a(g).id}`)],2)):L("",!0),S("span",{class:c(a(Ft).SelectedOption)},[F.$slots[`label-${a(g).id}`]?f(F.$slots,`label-${a(g).id}`,{key:0}):(s(),d(G,{key:1},[oe(U(a(g).label),1)],64))],2),S("span",{class:c(a(Ft).Icon)},[C(a(re),{source:a(jp)},null,8,["source"])],2)],10,RD),S("div",{class:c(a(Ft).Backdrop)},null,2)],2)]),_:2},[!t.labelInline&&a(i).label?{name:"label",fn:y(()=>[f(F.$slots,"label")])}:void 0,a(i)["help-text"]?{name:"help-text",fn:y(()=>[f(F.$slots,"help-text")])}:void 0]),1032,["id","error","action","label-hidden","required-indicator"]))}});co.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",description:"List of options or option groups to choose from",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"labelInline",description:"Show the label to the left of the value, inside the control",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Example text to display as placeholder",required:!1,type:{name:"string"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"error",description:"Display an error state",required:!1,type:{name:"Error"}},{name:"requiredIndicator",description:"Visual required indicator, add an asterisk to label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["TSIndexedAccessType"]}},{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],slots:[{name:"label"},{name:"help-text"},{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const VD="Polaris-SettingAction",HD="Polaris-SettingAction__Setting",UD="Polaris-SettingAction__Action";var qr={SettingAction:VD,Setting:HD,Action:UD};const kc=M({setup(t){return(n,o)=>(s(),d("div",{class:c(a(qr).SettingAction)},[S("div",{class:c(a(qr).Setting)},[f(n.$slots,"setting")],2),S("div",{class:c(a(qr).Action)},[f(n.$slots,"action")],2)],2))}});kc.__docgenInfo={exportName:"default",displayName:"SettingAction",description:"",tags:{},slots:[{name:"setting"},{name:"action"}]};const jD=["for"],Ps=M({props:{action:null,enabled:{type:Boolean}},setup(t){const o=Op("SettingToggle")();return(i,l)=>(s(),A(a(Ye),{sectioned:""},{default:y(()=>[C(a(kc),null,{action:y(()=>[t.action?(s(),A(a(Xe),{key:0,action:t.action,overrides:{primary:!t.enabled,role:"switch",id:a(o),ariaChecked:!!t.enabled}},null,8,["action","overrides"])):L("",!0)]),setting:y(()=>[S("label",{for:a(o)},[f(i.$slots,"default")],8,jD)]),_:3})]),_:3}))}});Ps.__docgenInfo={exportName:"default",displayName:"SettingToggle",description:"",tags:{},props:[{name:"action",description:"Card header actions",required:!1,type:{name:"ComplexAction"}},{name:"enabled",description:"Sets toggle state to activated or deactivated",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const zD="Polaris-SkeletonBodyText";var WD={SkeletonBodyText:zD};const Zo=M({props:{lines:{default:3}},setup(t){return(n,o)=>(s(!0),d(G,null,be(t.lines,i=>(s(),d("div",{key:i,class:c(a(WD).SkeletonBodyText)},null,2))),128))}});Zo.__docgenInfo={exportName:"default",displayName:"SkeletonBodyText",description:"",tags:{},props:[{name:"lines",description:"Number of lines to display",tags:{default:[{description:"3",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}]};const GD="Polaris-SkeletonDisplayText__DisplayText",XD="Polaris-SkeletonDisplayText--sizeSmall",KD="Polaris-SkeletonDisplayText--sizeMedium",YD="Polaris-SkeletonDisplayText--sizeLarge",ZD="Polaris-SkeletonDisplayText--sizeExtraLarge";var Qu={DisplayText:GD,sizeSmall:XD,sizeMedium:KD,sizeLarge:YD,sizeExtraLarge:ZD};const Qo=M({props:{size:{default:"medium"}},setup(t){const n=t,o=$(Qu.DisplayText,n.size&&Qu[Le("size",n.size)]);return(i,l)=>(s(),d("div",{class:c(a(o))},null,2))}});Qo.__docgenInfo={exportName:"default",displayName:"SkeletonDisplayText",description:"",tags:{},props:[{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}]};const QD="Polaris-SkeletonPage__Page",JD="Polaris-SkeletonPage--fullWidth",e0="Polaris-SkeletonPage--narrowWidth",t0="Polaris-SkeletonPage__Content",a0="Polaris-SkeletonPage__Header",n0="Polaris-SkeletonPage__BreadcrumbAction",o0="Polaris-SkeletonPage__TitleAndPrimaryAction",i0="Polaris-SkeletonPage__TitleWrapper",s0="Polaris-SkeletonPage__Title",l0="Polaris-SkeletonPage__SkeletonTitle",r0="Polaris-SkeletonPage__PrimaryAction",c0="Polaris-SkeletonPage__Actions",u0="Polaris-SkeletonPage__Action";var wt={Page:QD,fullWidth:JD,narrowWidth:e0,Content:t0,Header:a0,BreadcrumbAction:n0,TitleAndPrimaryAction:o0,TitleWrapper:i0,Title:s0,SkeletonTitle:l0,PrimaryAction:r0,Actions:c0,Action:u0};const d0=["aria-label"],p0=M({props:{title:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},primaryAction:{type:Boolean},breadcrumbs:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=p(()=>$(wt.Page,n.fullWidth&&wt.fullWidth,n.narrowWidth&&wt.narrowWidth));return(l,r)=>(s(),d("div",{class:c(a(i)),role:"status","aria-label":a(o).Polaris.SkeletonPage.loadingLabel},[S("div",{class:c(a(wt).Header)},[t.breadcrumbs?(s(),d("div",{key:0,class:c(a(wt).BreadcrumbAction),style:{width:"60px"}},[C(a(Zo),{lines:1})],2)):L("",!0),S("div",{class:c(a(wt).TitleAndPrimaryAction)},[S("div",{class:c(a(wt).TitleWrapper)},[t.title?(s(),d("h1",{key:0,class:c(a(wt).Title)},U(t.title),3)):(s(),d("div",{key:1,class:c(a(wt).SkeletonTitle)},null,2))],2),t.primaryAction?(s(),d("div",{key:0,class:c(a(wt).PrimaryAction)},[C(a(Qo),{size:"large"})],2)):L("",!0)],2)],2),S("div",{class:c(a(wt).Content)},[f(l.$slots,"default")],2)],10,d0))}});p0.__docgenInfo={exportName:"default",displayName:"SkeletonPage",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Shows a skeleton over the primary action",required:!1,type:{name:"boolean"}},{name:"breadcrumbs",description:"Shows a skeleton over the breadcrumb",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const m0="Polaris-Subheading";var y0={Subheading:m0};const da=M({props:{element:{default:"h3"}},setup(t){const n=ue(),i=p(()=>{var l,r;return n.default&&(((l=n.default()[0])==null?void 0:l.type.toString())==="Symbol(Text)"||((r=n.default()[0])==null?void 0:r.type.toString())==="Symbol()")}).value?n.default&&n.default()[0].children:void 0;return(l,r)=>(s(),A(Oe(t.element),{"aria-label":a(i),class:c(a(y0).Subheading)},{default:y(()=>[f(l.$slots,"default")]),_:3},8,["aria-label","class"]))}});da.__docgenInfo={exportName:"default",displayName:"Subheading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the subheading",tags:{default:[{description:"'h3'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"default"}]};function Ju(t,n,o,i,l){const r=i.reduce((v,g)=>v+g,0),u=t.map((v,g)=>g),m=[],x=[];if(l>r)m.push(...u);else{m.push(n);let v=i[n];u.forEach(g=>{if(g!==n){const h=i[g];if(v+h>=l-o){x.push(g);return}m.push(g),v+=h}})}return{visibleTabs:m,hiddenTabs:x}}const g0="Polaris-Tabs",h0="Polaris-Tabs__Wrapper",b0="Polaris-Tabs--fitted",f0="Polaris-Tabs__TabContainer",v0="Polaris-Tabs__Title",x0="Polaris-Tabs--fillSpace",T0="Polaris-Tabs__Tab",S0="Polaris-Tabs--titleWithIcon",C0="Polaris-Tabs__Panel",A0="Polaris-Tabs__List",k0="Polaris-Tabs__Item",N0="Polaris-Tabs__DisclosureTab",L0="Polaris-Tabs__DisclosureActivator",w0="Polaris-Tabs__TabMeasurer";var Ne={Tabs:g0,Wrapper:h0,fitted:b0,TabContainer:f0,Title:v0,fillSpace:x0,Tab:T0,"Tab-selected":"Polaris-Tabs__Tab--selected",titleWithIcon:S0,Panel:C0,"Panel-hidden":"Polaris-Tabs__Panel--hidden",List:A0,Item:k0,DisclosureTab:N0,"DisclosureTab-visible":"Polaris-Tabs__DisclosureTab--visible",DisclosureActivator:L0,TabMeasurer:w0};const Em=M({props:{id:null,focused:{type:Boolean},panelID:null,url:null,accessibilityLabel:null},setup(t){const n=t,o=k(null),i=$(Ne.Item),l=p(()=>({id:n.id,class:i,"aria-controls":n.panelID,"aria-selected":!1,"aria-label":n.accessibilityLabel}));return(r,u)=>(s(),d("li",null,[t.url?(s(),A(a(yt),me({key:0,ref_key:"focusedNode",ref:o},a(l),{onClick:u[0]||(u[0]=m=>r.$emit("click"))}),{default:y(()=>[f(r.$slots,"default")]),_:3},16)):(s(),d("button",me({key:1,type:"button",ref_key:"focusedNode",ref:o},a(l),{onClick:u[1]||(u[1]=m=>r.$emit("click"))}),[f(r.$slots,"default")],16))]))}});Em.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"focused",required:!0,type:{name:"boolean"}},{name:"panelID",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const Om=M({props:{focusIndex:null,disclosureTabs:null},emits:["click","keypress"],setup(t,{emit:n}){const o=ue(),i=l=>{const{key:r}=l;(r==="ArrowLeft"||r==="ArrowRight")&&(l.preventDefault(),l.stopPropagation())};return(l,r)=>(s(),d("ul",{class:c(a(Ne).List),onKeydown:i,onKeyup:r[0]||(r[0]=u=>n("keypress",u))},[(s(!0),d(G,null,be(t.disclosureTabs,(u,m)=>(s(),A(a(Em),{key:u.id,id:u.id,url:u.url,panelID:u.panelID,accessibilityLabel:u.accessibilityLabel,focused:m===t.focusIndex,onClick:x=>n("click",u.id)},{default:y(()=>[a(ye)(a(o)[u.id])?f(l.$slots,u.id,{key:0}):(s(),d(G,{key:1},[oe(U(u.content),1)],64))]),_:2},1032,["id","url","panelID","accessibilityLabel","focused","onClick"]))),128))],34))}});Om.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"focusIndex",required:!0,type:{name:"number"}},{name:"disclosureTabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}}],events:[{name:"click",type:{names:["string"]}},{name:"keypress",type:{names:["KeyboardEvent"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const P0=["id","aria-labelledby"],oc=M({props:{hidden:{type:Boolean},id:null,tabID:null},setup(t){const n=t,o=p(()=>$(Ne.Panel,n.hidden&&Ne["Panel--hidden"]));return(i,l)=>(s(),d("div",{class:c(a(o)),id:t.id,role:"tabpanel","aria-labelledby":t.tabID,tabIndex:"-1"},[f(i.$slots,"default")],10,P0))}});oc.__docgenInfo={exportName:"default",displayName:"Panel",description:"",tags:{},props:[{name:"hidden",required:!1,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"tabID",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const M0=["id","tabIndex","aria-selected","aria-controls","aria-label"],Nc=M({props:{id:null,focused:{type:Boolean},siblingTabHasFocus:{type:Boolean},selected:{type:Boolean},panelID:null,url:null,measuring:{type:Boolean},accessibilityLabel:null},emits:["click"],setup(t,{emit:n}){const o=t;ue();const i=k(o.selected),l=k(!1),r=k(null),u=p(()=>o.selected&&!o.siblingTabHasFocus&&!o.measuring||o.focused&&!o.measuring?0:-1),m=()=>{n("click",o.id)};Se(()=>{x()}),Ee(()=>[o.focused,o.id,o.measuring,o.panelID,o.selected],()=>{x()});const x=()=>{if(o.measuring)return;(o.focused||document.activeElement&&document.activeElement.id===o.id)&&o.selected&&o.panelID&&!l.value&&(h(o.panelID),l.value=!0),o.selected&&!i.value&&o.panelID?h(o.panelID):o.focused&&r.value&&qo(r.value),i.value=o.selected},v=p(()=>$(Ne.Tab,o.selected&&Ne["Tab-selected"])),g=p(()=>$(Ne.TabContainer)),h=T=>{const N=document.getElementById(T);N&&N.focus({preventScroll:!0})};return(T,N)=>(s(),d("li",{class:c(a(g)),ref_key:"tabNode",ref:r,role:"presentation"},[t.url?(s(),A(a(yt),{key:0,id:t.id,url:t.url,role:"tab",tabIndex:a(u),class:c(a(v)),"aria-selected":t.selected,"aria-controls":t.panelID,"aria-label":t.accessibilityLabel,onClick:m,onMouseup:a(kt)},{default:y(()=>[S("span",{class:c(a(Ne).Title)},[f(T.$slots,"default")],2)]),_:3},8,["id","url","tabIndex","class","aria-selected","aria-controls","aria-label","onMouseup"])):(s(),d("button",{key:1,id:t.id,role:"tab",type:"button",tabIndex:a(u),class:c(a(v)),"aria-selected":t.selected,"aria-controls":t.panelID,"aria-label":t.accessibilityLabel,onClick:m,onMouseup:N[0]||(N[0]=(...w)=>a(kt)&&a(kt)(...w))},[S("span",{class:c(a(Ne).Title)},[f(T.$slots,"default")],2)],42,M0))],2))}});Nc.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"focused",required:!1,type:{name:"boolean"}},{name:"siblingTabHasFocus",required:!1,type:{name:"boolean"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"panelID",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"measuring",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["string"]}}],slots:[{name:"default"}]};const qm=M({props:{tabToFocus:null,siblingTabHasFocus:{type:Boolean},selected:null,tabs:null},emits:["measurement"],setup(t,{emit:n}){const o=t,i=ue(),l=k(null),r=k(null),u=()=>{r.value&&cancelAnimationFrame(r.value),r.value=requestAnimationFrame(()=>{if(!l.value)return;const x=l.value.offsetWidth,v=l.value.children,h=Array.from(v).map(N=>Math.ceil(N.getBoundingClientRect().width)),T=h.pop()||0;n("measurement",{containerWidth:x,disclosureWidth:T,hiddenTabWidths:h})})};Ee(()=>o.tabs,()=>{u()});const m=$(Ne.Tabs,Ne.TabMeasurer);return(x,v)=>(s(),d("div",{class:c(a(m)),ref_key:"containerNode",ref:l},[C(a(it),{event:"resize",handler:u}),(s(!0),d(G,null,be(t.tabs,(g,h)=>(s(),A(a(Nc),{measuring:"",key:`${h}${g.id}Hidden`,id:`${g.id}Measurer`,siblingTabHasFocus:t.siblingTabHasFocus,focused:h===t.tabToFocus,selected:h===t.selected,url:g.url},{default:y(()=>[a(ye)(a(i)[g.id])?f(x.$slots,g.id,{key:0}):(s(),d(G,{key:1},[oe(U(g.content),1)],64))]),_:2},1032,["id","siblingTabHasFocus","focused","selected","url"]))),128)),f(x.$slots,"activator")],2))}});qm.__docgenInfo={exportName:"default",displayName:"TabMeasurer",description:"",tags:{},props:[{name:"tabToFocus",required:!0,type:{name:"number"}},{name:"siblingTabHasFocus",required:!0,type:{name:"boolean"}},{name:"selected",required:!0,type:{name:"number"}},{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}}],events:[{name:"measurement",type:{names:["TabMeasurements"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"activator"}]};const _0=["aria-label"],D0=["aria-label"],I0=["aria-label"],B0=["aria-label"],Ms=M({props:{selected:null,tabs:null,fitted:{type:Boolean},disclosureText:null},emits:["select"],setup(t,{emit:n}){const o=t,i=ve("lang"),l=ue(),r=(O,X)=>{const{disclosureWidth:Y,tabWidths:ce,containerWidth:de}=X,{visibleTabs:$e,hiddenTabs:he}=Ju(O.tabs,O.selected,Y,ce,de);v.value=$e,g.value=he};Se(()=>{r({tabs:o.tabs,selected:o.selected},{disclosureWidth:u.value,tabWidths:x.value,containerWidth:m.value})});const u=k(0),m=k(1/0),x=k([]),v=k([]),g=k([]),h=k(!1),T=k(-1),N=p(()=>v.value.length<o.tabs.length),w=p(()=>!!o.disclosureText),D=p(()=>$(Ne.Tabs,o.fitted&&Ne.fitted,N.value&&Ne.fillSpace)),B=p(()=>$(Ne.DisclosureTab,N.value&&Ne["DisclosureTab-visible"])),E=p(()=>$(Ne.DisclosureActivator,w.value&&Ne.Tab)),R=p(()=>$(Ne.Title,w.value&&Ne.titleWithIcon)),z=p(()=>[...v.value].sort((X,Y)=>X-Y)),Z=p(()=>g.value.map(O=>o.tabs[O])),F=O=>{const X=O.key,Y=h.value?v.value.concat(g.value):[...v.value];let ce=Y.indexOf(T.value);X==="ArrowRight"&&(ce+=1,ce===Y.length&&(ce=0)),X==="ArrowLeft"&&(ce===-1||ce===0?ce=Y.length-1:ce-=1),T.value=Y[ce]},W=O=>{const X=O.target;if(X.classList.contains(Ne.Tab)||X.classList.contains(Ne.Item)){let ce=-1;o.tabs.some((de,$e)=>de.id===X.id?(ce=$e,!0):!1),T.value=ce;return}if(X.classList.contains(Ne.DisclosureActivator))return;if(!O.relatedTarget){T.value=o.selected;return}const Y=O.relatedTarget;Y instanceof HTMLElement&&!Y.classList.contains(Ne.Tab)&&!Y.classList.contains(Ne.Item)&&!Y.classList.contains(Ne.DisclosureActivator)&&(T.value=o.selected)},q=O=>{if(O.relatedTarget==null){T.value=-1;return}const X=O.relatedTarget;X instanceof HTMLElement&&!X.classList.contains(Ne.Tab)&&!X.classList.contains(Ne.Item)&&(T.value=-1)},j=()=>{h.value=!h.value},le=()=>{h.value=!1},fe=O=>{const X=Ju(o.tabs,o.selected,O.disclosureWidth,O.hiddenTabWidths,O.containerWidth);T.value=T.value===-1?-1:o.selected,v.value=X.visibleTabs,g.value=X.hiddenTabs,u.value=O.disclosureWidth,m.value=O.containerWidth,x.value=O.hiddenTabWidths},ae=O=>{const X=o.tabs.findIndex(Y=>Y.id===O);X!==-1&&n("select",X)};function Me(O){const{key:X}=O;(X==="ArrowLeft"||X==="ArrowRight")&&(O.preventDefault(),O.stopPropagation())}return(O,X)=>(s(),d("div",null,[S("div",{class:c(a(Ne).Wrapper)},[C(a(qm),{tabToFocus:T.value,selected:t.selected,tabs:t.tabs,siblingTabHasFocus:T.value>-1,onMeasurement:fe},Ue({activator:y(()=>[t.disclosureText?(s(),d("div",{key:0,class:c(a(Ne).TabContainer)},[S("button",{type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(w)?(s(),d(G,{key:0},[oe(U(t.disclosureText),1),C(a(re),{source:a(Aa),color:"subdued"},null,8,["source"])],64)):(s(),A(a(re),{key:1,source:a(Ca),color:"subdued"},null,8,["source"]))],2)],10,_0)],2)):(s(),d("button",{key:1,type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(w)?(s(),d(G,{key:0},[oe(U(t.disclosureText),1),C(a(re),{source:a(Aa),color:"subdued"},null,8,["source"])],64)):(s(),A(a(re),{key:1,source:a(Ca),color:"subdued"},null,8,["source"]))],2)],10,D0))]),_:2},[be(t.tabs,(Y,ce)=>({name:"{#[tab.id]}",fn:y(()=>[a(ye)(a(l)[Y.id])?f(O.$slots,Y.id,{key:0}):(s(),d(G,{key:1},[oe(U(Y.content),1)],64))])}))]),1032,["tabToFocus","selected","tabs","siblingTabHasFocus"]),S("ul",{role:"tablist",class:c(a(D)),onFocus:W,onBlur:q,onKeydown:Me,onKeyup:F},[(s(!0),d(G,null,be(a(z),(Y,ce)=>(s(),A(a(Nc),{key:`${ce}-${t.tabs[Y].id}`,id:t.tabs[Y].id,siblingTabHasFocus:T.value>-1,focused:ce===T.value,selected:ce===t.selected,panelID:a(ye)(a(l).default)?t.tabs[Y].panelID||`${t.tabs[Y].id}-panel`:void 0,accessibilityLabel:t.tabs[Y].accessibilityLabel,url:t.tabs[Y].url,onClick:ae},{default:y(()=>[a(ye)(a(l)[t.tabs[Y].id])?f(O.$slots,t.tabs[Y].id,{key:0}):(s(),d(G,{key:1},[oe(U(t.tabs[Y].content),1)],64))]),_:2},1032,["id","siblingTabHasFocus","focused","selected","panelID","accessibilityLabel","url"]))),128)),S("li",{class:c(a(B)),role:"presentation"},[C(a(et),{preferredPosition:"below",active:a(N)&&h.value,onClose:le,autofocusTarget:"first-node"},{activator:y(()=>[t.disclosureText?(s(),d("div",{key:0,class:c(a(Ne).TabContainer)},[S("button",{type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(w)?(s(),d(G,{key:0},[oe(U(t.disclosureText),1),C(a(re),{source:a(Aa),color:"subdued"},null,8,["source"])],64)):(s(),A(a(re),{key:1,source:a(Ca),color:"subdued"},null,8,["source"]))],2)],10,I0)],2)):(s(),d("button",{key:1,type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(w)?(s(),d(G,{key:0},[oe(U(t.disclosureText),1),C(a(re),{source:a(Aa),color:"subdued"},null,8,["source"])],64)):(s(),A(a(re),{key:1,source:a(Ca),color:"subdued"},null,8,["source"]))],2)],10,B0))]),content:y(()=>[C(a(Om),{focusIndex:g.value.indexOf(T.value),disclosureTabs:a(Z),onClick:ae,onKeypress:F},null,8,["focusIndex","disclosureTabs"])]),_:1},8,["active"])],2)],34)],2),a(ye)(a(l).default)?(s(!0),d(G,{key:0},be(t.tabs,(Y,ce)=>(s(),d(G,{key:Y.id},[t.selected===ce?(s(),A(a(oc),{key:0,id:Y.panelID||`${Y.id}-panel`,tabID:Y.id},{default:y(()=>[f(O.$slots,"default")]),_:2},1032,["id","tabID"])):L("",!0),C(a(oc),{id:Y.panelID||`${Y.id}-panel`,tabID:Y.id,hidden:""},null,8,["id","tabID"])],64))),128)):L("",!0)]))}});Ms.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"selected",description:"Index of selected tab",required:!0,type:{name:"number"}},{name:"tabs",description:"List of tabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}},{name:"fitted",description:"Fit tabs to container",required:!1,type:{name:"boolean"}},{name:"disclosureText",description:"Text to replace disclosures horizontal dots",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["number"]},description:"Callback when tab is selected"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Jo=M({props:{content:null,duration:null,error:{type:Boolean},action:null},setup(t){const n=t,o=Et(),{useUniqueId:i}=Be(),{useFrame:l}=lo(),{showToast:r,hideToast:u}=l(),m=i("Toast");return Se(()=>{r(b(b({id:m},n),o))}),gt(()=>{u({id:m})}),(x,v)=>null}});Jo.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}]};const $0=["id","aria-label"],Rm=M({props:{id:null,active:{type:Boolean},preventInteraction:null,preferredPosition:{default:"below"},activator:null,accessibilityLabel:null},setup(t){const n=t,o=ve("lang"),i=k({}),l=p(()=>n.accessibilityLabel?o.Polaris.TooltipOverlay.accessibilityLabel.replace("{label}",n.accessibilityLabel):void 0),r=u=>{i.value={minHeight:`${u.desiredHeight}px`}};return(u,m)=>t.active?(s(),A(a(mc),{key:0,layout:"tooltip",active:t.active,activator:t.activator,preferredPosition:t.preferredPosition,preventInteraction:t.preventInteraction,onChangeContentStyles:r},{default:y(()=>[S("div",{id:t.id,role:"tooltip",class:c(a(Vi).Content),style:Fe(i.value),"aria-label":a(l)},[f(u.$slots,"default")],14,$0)]),_:3},8,["active","activator","preferredPosition","preventInteraction"])):L("",!0)}});Rm.__docgenInfo={exportName:"default",displayName:"TooltipOverlay",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const F0={inheritAttrs:!1},Qt=M(_(b({},F0),{props:{active:{type:Boolean,default:!1},content:null,dismissOnMouseOut:null,preferredPosition:{default:"below"},activatorWrapper:{default:"span"},accessibilityLabel:null},setup(t){const n=t,o=ue(),i=k(n.active),l=k(!1),r=k(null),u=k(null),{useUniqueId:m,uniqueIdRef:x}=Be(),v=m("TooltipContent");Ee(()=>x.value,()=>{const E=(u.value?rc(u.value):null)||u.value;!E||(E.tabIndex=0,E.setAttribute("aria-describedby",v),E.setAttribute("data-polaris-tooltip-activator","true"))}),Ee(()=>u.value,()=>{const B=u.value;B==null?r.value=null:B.firstElementChild instanceof HTMLElement&&(r.value=B.firstElementChild)});const g=()=>{i.value=!1},h=()=>{i.value=!0},T=B=>{B.key===We.Escape&&g()};function N(){l.value=!0,h()}function w(){l.value=!1,g()}function D(){!l.value&&N()}return(B,E)=>(s(),A(Oe(t.activatorWrapper),{ref_key:"activatorContainer",ref:u,onFocus:h,onBlur:g,onMouseleave:w,onMouseover:D,onClick:E[0]||(E[0]=R=>R.stopPropagation()),onKeyup:T},{default:y(()=>[f(B.$slots,"default"),r.value?(s(),A(a(Vo),{key:0,idPrefix:"tooltip"},{default:y(()=>[C(a(Rm),{id:a(v),preferredPosition:t.preferredPosition,preventInteraction:t.dismissOnMouseOut,activator:r.value,active:i.value,accessibilityLabel:t.accessibilityLabel},{default:y(()=>[a(o).content?f(B.$slots,"content",{key:0}):(s(),d(G,{key:1},[oe(U(t.content),1)],64))]),_:3},8,["id","preferredPosition","preventInteraction","activator","active","accessibilityLabel"])]),_:3})):L("",!0)]),_:3},512))}}));Qt.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"active",description:"Toggle whether the tooltip is visible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"content",description:"The content to display within the tooltip",required:!1,type:{name:"string"}},{name:"dismissOnMouseOut",description:"Dismiss tooltip when not interacting with its children",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",description:"The direction the tooltip tries to display",tags:{default:[{description:"'below'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activatorWrapper",description:"The element type to wrap the activator in",tags:{default:[{description:"'span'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"content"}]};const E0="Polaris-Tag",O0="Polaris-Tag--disabled",q0="Polaris-Tag--clickable",R0="Polaris-Tag--removable",V0="Polaris-Tag--linkable",H0="Polaris-Tag__TagText",U0="Polaris-Tag__Button",j0="Polaris-Tag--segmented",z0="Polaris-Tag__Link",W0="Polaris-Tag__LinkText";var At={Tag:E0,disabled:O0,clickable:q0,removable:R0,linkable:V0,TagText:H0,Button:U0,segmented:j0,Link:z0,LinkText:W0};const G0=["disabled"],X0=["href"],K0=["title"],Y0=["title"],Z0=["aria-label","disabled"],ei=M({props:{disabled:{type:Boolean},accessibilityLabel:null,url:null},setup(t){const n=t,o=Et(),i=ue(),l=p(()=>Boolean(o.onClick)),r=p(()=>Boolean(o.onRemove)),u=p(()=>l.value&&n.url),m=p(()=>$(At.Tag,n.disabled&&At.disabled,l.value&&At.clickable,r.value&&At.removable,n.url&&!n.disabled&&At.linkable,u.value&&At.segmented)),x=p(()=>$(At.Link,u.value&&At.segmented)),v=p(()=>$(At.Button,u.value&&At.segmented)),g=p(()=>n.accessibilityLabel?n.accessibilityLabel:i.default&&i.default()[0].children?i.default()[0].children:""),h=p(()=>`Remove ${g.value||""}`),T=kt;return(N,w)=>a(l)?(s(),d("button",{key:0,type:"button",disabled:t.disabled,class:c(a(m))},[f(N.$slots,"default")],10,G0)):(s(),d("span",{key:1,class:c(a(m))},[t.url&&!t.disabled?(s(),d("a",{key:0,class:c(a(x)),href:t.url},[S("span",{title:a(g),class:c(a(At).LinkText)},[f(N.$slots,"default")],10,K0)],10,X0)):(s(),d("span",{key:1,title:a(g),class:c(a(At).TagText)},[f(N.$slots,"default")],10,Y0)),a(r)?(s(),d("button",{key:2,type:"button","aria-label":a(h),class:c(a(v)),disabled:t.disabled,onClick:w[0]||(w[0]=D=>N.$emit("remove")),onMouseup:w[1]||(w[1]=(...D)=>a(T)&&a(T)(...D))},[C(a(re),{source:a(os)},null,8,["source"])],42,Z0)):L("",!0)],2))}});ei.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"disabled",description:"Disables the tag",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"A string to use when tag has more than textual content",required:!1,type:{name:"string"}},{name:"url",description:"Url to navigate to when tag is clicked or keypressed.",required:!1,type:{name:"string"}}],events:[{name:"remove"}],slots:[{name:"default"}]};const Q0="Polaris-Thumbnail",J0="Polaris-Thumbnail--sizeExtraSmall",eI="Polaris-Thumbnail--sizeSmall",tI="Polaris-Thumbnail--sizeMedium",aI="Polaris-Thumbnail--sizeLarge",nI="Polaris-Thumbnail--transparent";var Rr={Thumbnail:Q0,sizeExtraSmall:J0,sizeSmall:eI,sizeMedium:tI,sizeLarge:aI,transparent:nI};const ti=M({props:{size:{default:"medium"},source:null,alt:null,transparent:{type:Boolean}},setup(t){const n=t,o=p(()=>{const i=Le("size",n.size);return $(Rr.Thumbnail,i&&Rr[i],n.transparent&&Rr.transparent)});return(i,l)=>(s(),d("span",{class:c(a(o))},[typeof t.source=="string"?(s(),A(a(Yt),{key:0,alt:t.alt,source:t.source},null,8,["alt","source"])):(s(),A(a(re),{key:1,accessibilityLabel:t.alt,source:t.source},null,8,["accessibilityLabel","source"]))],2))}});ti.__docgenInfo={exportName:"default",displayName:"Thumbnail",description:"",tags:{},props:[{name:"size",description:"Size of thumbnail",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"source",description:"URL for the image",required:!0,type:{name:"union",elements:[{name:"string"},{name:"IconSource"}]}},{name:"alt",description:"Alt text for the thumbnail image",required:!0,type:{name:"string"}},{name:"transparent",description:"Transparent background",required:!1,type:{name:"boolean"}}]};const oI={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},iI=S("path",{d:"M19 11H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14H1a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"},null,-1),sI=[iI];function lI(t,n){return s(),d("svg",oI,sI)}var rI={render:lI};const cI="Polaris-TopBar",uI="Polaris-TopBar__LogoDisplayControl",dI="Polaris-TopBar__LogoDisplayContainer",pI="Polaris-TopBar__LogoContainer",mI="Polaris-TopBar__Logo",yI="Polaris-TopBar__LogoLink",gI="Polaris-TopBar__ContextControl",hI="Polaris-TopBar__NavigationIcon",bI="Polaris-TopBar--focused",fI="Polaris-TopBar__IconWrapper",vI="Polaris-TopBar__Contents",xI="Polaris-TopBar__SearchField",TI="Polaris-TopBar__SecondaryMenu";var xt={TopBar:cI,LogoDisplayControl:uI,LogoDisplayContainer:dI,LogoContainer:pI,Logo:mI,LogoLink:yI,ContextControl:gI,NavigationIcon:hI,focused:bI,IconWrapper:fI,Contents:vI,SearchField:xI,SecondaryMenu:TI};const SI="Polaris-TopBar-Menu__ActivatorWrapper",CI="Polaris-TopBar-Menu__Activator",AI="Polaris-TopBar-Menu__Section";var ed={ActivatorWrapper:SI,Activator:CI,Section:AI};const kI="Polaris-Menu-Message__Section";var NI={Section:kI};const Vm=M({props:{title:null,description:null,action:null,link:null,badge:null},setup(t){return(n,o)=>(s(),d("div",{class:c(a(NI).Section)},[C(a($o),null,{default:y(()=>[C(a(qe),{vertical:"",spacing:"tight"},{default:y(()=>[C(a(ut),null,{default:y(()=>[C(a(It),null,{default:y(()=>[oe(U(t.title),1),t.badge?(s(),A(a(st),{key:0,status:t.badge.status},{default:y(()=>[oe(U(t.badge.content),1)]),_:1},8,["status"])):L("",!0)]),_:1}),S("p",null,U(t.description),1)]),_:1}),C(a(ga),{url:t.link.to},{default:y(()=>[oe(U(t.link.content),1)]),_:1},8,["url"]),C(a(ge),{plain:"",onClick:t.action.onClick},{default:y(()=>[oe(U(t.action.content),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],2))}});Vm.__docgenInfo={exportName:"default",displayName:"Message",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}},{name:"action",required:!0,type:{name:"{ onClick(): void; content: string }"}},{name:"link",required:!0,type:{name:"{ to: string; content: string }"}},{name:"badge",required:!1,type:{name:"{ content: string; status: BadgeProps['status'] }"}}]};const LI=["aria-label"],wI={inheritAttrs:!1},_s=M(_(b({},wI),{props:{actions:null,message:null,open:{type:Boolean},colorScheme:null,accessibilityLabel:null},setup(t){const n=t,o=p(()=>!!n.message),i=n.message&&n.message.badge&&{content:n.message.badge.content,status:n.message.badge.status};return(l,r)=>(s(),A(a(et),{fixed:"",active:t.open,"full-height":a(o),preferredAlignment:"right","color-scheme":t.colorScheme,onClose:r[2]||(r[2]=u=>l.$emit("close"))},{activator:y(()=>[S("div",{class:c(a(ed).ActivatorWrapper)},[S("button",{type:"button",class:c(a(ed).Activator),"aria-label":t.accessibilityLabel,onClick:r[0]||(r[0]=u=>l.$emit("open"))},[f(l.$slots,"activatorContent")],10,LI)],2)]),content:y(()=>[C(a(Je),{sections:t.actions,onActionAnyItem:r[1]||(r[1]=u=>l.$emit("close"))},null,8,["sections"]),t.message&&t.message.action&&t.message.link?(s(),A(a(Vm),{key:0,title:t.message.title,description:t.message.description,action:{onClick:t.message.action.onClick,content:t.message.action.content},link:{to:t.message.link.to,content:t.message.link.content},badge:a(i)},null,8,["title","description","action","link","badge"])):L("",!0)]),_:3},8,["active","full-height","color-scheme"]))}}));_s.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"TSIndexedAccessType"}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the menu",required:!1,type:{name:"MessageProps"}},{name:"open",description:"A boolean property indicating whether the menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}}],events:[{name:"close"},{name:"open"}],slots:[{name:"activatorContent"}]};const PI="Polaris-TopBar-Search",MI="Polaris-TopBar-Search__SearchContent",_I="Polaris-TopBar-Search--visible",DI="Polaris-TopBar-Search__Results";var Ri={Search:PI,SearchContent:MI,visible:_I,Results:DI};const II="Polaris-TopBar-SearchDismissOverlay",BI="Polaris-TopBar-SearchDismissOverlay--visible";var td={SearchDismissOverlay:II,visible:BI};const Hm=M({props:{visible:{type:Boolean}},emits:["dismiss"],setup(t,{emit:n}){const o=t,i=k(null),l=p(()=>$(td.SearchDismissOverlay,o.visible&&td.visible)),r=u=>{u.target===i.value&&n("dismiss")};return(u,m)=>(s(),d(G,null,[t.visible?(s(),A(a(uc),{key:0})):L("",!0),S("div",me(u.$attrs,{ref_key:"nodeRef",ref:i,class:a(l),onClick:r}),null,16)],64))}});Hm.__docgenInfo={exportName:"default",displayName:"SearchDismissOverlay",description:"",tags:{},props:[{name:"visible",description:"Determines whether the overlay should be visible",required:!0,type:{name:"boolean"}}],events:[{name:"dismiss"}]};const Um=M({props:{visible:{type:Boolean},overlayVisible:{type:Boolean,default:!1}},emits:["dismiss"],setup(t,{emit:n}){const o=t,i=ue(),l=p(()=>$(Ri.Search,o.visible&&Ri.visible));return(r,u)=>(s(),d(G,null,[t.visible&&a(i).default?(s(),A(a(Hm),{key:0,visible:t.overlayVisible,onDismiss:u[0]||(u[0]=m=>r.$emit("dismiss"))},null,8,["visible"])):L("",!0),a(i).default?(s(),d("div",{key:1,class:c(a(l))},[C(a(ea),null,{default:y(()=>[S("div",{class:c(a(Ri).SearchContent)},[S("div",{class:c(a(Ri).Results)},[f(r.$slots,"default")],2)],2)]),_:3})],2)):L("",!0)],64))}});Um.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"visible",description:"Toggles whether or not the search is visible",required:!1,type:{name:"boolean"}},{name:"overlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const $I="Polaris-TopBar-SearchField",FI="Polaris-TopBar-SearchField--focused",EI="Polaris-TopBar-SearchField__Input",OI="Polaris-TopBar-SearchField__Backdrop",qI="Polaris-TopBar-SearchField__BackdropShowFocusBorder",RI="Polaris-TopBar-SearchField__Icon",VI="Polaris-TopBar-SearchField__Clear";var Sa={SearchField:$I,focused:FI,Input:EI,Backdrop:OI,BackdropShowFocusBorder:qI,Icon:RI,Clear:VI};const HI=["for"],UI=["id","placeholder"],jI=["aria-label"],Lc=M({props:{modelValue:null,placeholder:null,focused:{type:Boolean},active:{type:Boolean},showFocusBorder:{type:Boolean}},emits:["change","focus","blur","cancel","update:modelValue"],setup(t,{emit:n}){const o=t,i=ve("lang"),l=k(!1),r=k(null),{useUniqueId:u}=Be(),m=u("SearchField"),x=B=>{const E=B.target;n("change",E.value),n("update:modelValue",E.value)},v=()=>{n("focus")},g=()=>{n("blur")},h=()=>{n("cancel"),n("update:modelValue",""),n("change",""),r.value&&r.value.focus()},T=()=>{l.value=!1},N=()=>{v(),l.value=!0},w=p(()=>$(Sa.SearchField,(o.focused||o.active||l.value)&&Sa.focused)),D=p(()=>$(Sa.Backdrop,o.showFocusBorder&&Sa.BackdropShowFocusBorder));return Se(()=>{!r.value||(o.focused?r.value.focus():r.value.blur())}),(B,E)=>(s(),d("div",{class:c(a(w)),onFocus:v,onBlur:g},[C(a(lt),null,{default:y(()=>[S("label",{for:a(m)},U(a(i).Polaris.TopBar.SearchField.search),9,HI)]),_:1}),Lh(S("input",{id:a(m),class:c(a(Sa).Input),placeholder:t.placeholder,ref_key:"inputRef",ref:r,type:"search",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off","onUpdate:modelValue":E[0]||(E[0]=R=>Gi(modelValue)?modelValue.value=R:null),onInput:x,onKeydown:E[1]||(E[1]=Hr(bp(()=>!1,["prevent"]),["enter"]))},null,42,UI),[[wh,t.modelValue]]),S("span",{class:c(a(Sa).Icon)},[C(a(re),{source:a(Oo)},null,8,["source"])],2),t.modelValue.length>0?(s(),d("button",{key:0,type:"button","aria-label":a(i).Polaris.TopBar.SearchField.clearButtonLabel,class:c(a(Sa).Clear),onClick:h,onBlur:T,onFocus:N},[C(a(re),{source:a(Zp)},null,8,["source"])],42,jI)):L("",!0),S("div",{class:c(a(D))},null,2)],34))}});Lc.__docgenInfo={exportName:"default",displayName:"SearchField",description:"",tags:{},props:[{name:"modelValue",description:"Initial value for the input",required:!0,type:{name:"string"}},{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"active",description:"Force a state where search is active but the text field component is not focused",required:!1,type:{name:"boolean"}},{name:"showFocusBorder",description:"Show a border when the search field is focused",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["string"]}},{name:"focus"},{name:"blur"},{name:"cancel"},{name:"update:modelValue",type:{names:["string"]}}]};const zI="Polaris-TopBar-UserMenu__Details",WI="Polaris-TopBar-UserMenu__Name",GI="Polaris-TopBar-UserMenu__Detail";var Vr={Details:zI,Name:WI,Detail:GI};const wc=M({props:{actions:null,message:null,name:null,detail:null,accessibilityLabel:null,initials:null,avatar:null,open:{type:Boolean},colorScheme:null},setup(t){const o=k(!!t.message);return(i,l)=>(s(),A(a(_s),{open:t.open,actions:t.actions,message:t.message,"color-scheme":t.colorScheme,accessibilityLabel:t.accessibilityLabel,onOpen:l[0]||(l[0]=r=>i.$emit("toggle")),onClose:l[1]||(l[1]=r=>i.$emit("toggle"))},{activatorContent:y(()=>[C(a(xm),{active:o.value},{default:y(()=>[C(a(oo),{size:"small",source:t.avatar,initials:t.initials?t.initials.replace(" ",""):void 0},null,8,["source","initials"])]),_:1},8,["active"]),S("span",{class:c(a(Vr).Details)},[S("p",{class:c(a(Vr).Name)},U(t.name),3),S("p",{class:c(a(Vr).Detail)},U(t.detail),3)],2)]),_:1},8,["open","actions","message","color-scheme","accessibilityLabel"]))}});wc.__docgenInfo={exportName:"default",displayName:"UserMenu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"Array",elements:[{name:"{items: IconableAction[]}"}]}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"name",description:"A string detailing the merchant\u2019s full name to be displayed in the user menu",required:!0,type:{name:"string"}},{name:"detail",description:"A string allowing further detail on the merchant\u2019s name displayed in the user menu",required:!1,type:{name:"string"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}},{name:"initials",description:"The merchant\u2019s initials, rendered in place of an avatar image when not provided",required:!0,type:{name:"TSIndexedAccessType"}},{name:"avatar",description:"An avatar image representing the merchant",required:!1,type:{name:"TSIndexedAccessType"}},{name:"open",description:"A boolean property indicating whether the user menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the user menu",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"toggle"}]};const XI=["aria-label"],ai=M({props:{showNavigationToggle:{type:Boolean},searchResultsVisible:{type:Boolean},searchResultsOverlayVisible:{type:Boolean,default:!1}},emits:["search-result-dismiss","navigation-toggle"],setup(t,{emit:n}){const o=t,i=ve("lang"),{useFrame:l}=lo(),{logo:r}=l(),u=ue(),m=k(!1),x=()=>{m.value=!0},v=()=>{m.value=!1},g=p(()=>$(xt.NavigationIcon,m.value&&xt.focused)),h=p(()=>$(xt.LogoContainer,o.showNavigationToggle||u.searchField?xt.LogoDisplayControl:xt.LogoDisplayContainer)),T=xc(r,104);return(N,w)=>(s(),d("div",{class:c(a(xt).TopBar)},[t.showNavigationToggle?(s(),d("button",{key:0,type:"button",class:c(a(g)),onClick:w[0]||(w[0]=D=>N.$emit("navigation-toggle")),onFocus:x,onBlur:v,"aria-label":a(i).Polaris.TopBar.toggleMenuLabel},[S("div",{class:c(a(xt).IconWrapper)},[C(a(re),{source:a(rI)},null,8,["source"])],2)],42,XI)):L("",!0),a(u).contextControl?(s(),d("div",{key:1,class:c(a(xt).ContextControl)},[f(N.$slots,"contextControl")],2)):a(r)?(s(),d("div",{key:2,class:c(a(h))},[C(a(yt),{url:a(r).url||"",class:c(a(xt).LogoLink),style:Fe({width:a(T)})},{default:y(()=>[C(a(Yt),{source:a(r).topBarSource||"",alt:a(r).accessibilityLabel||"",class:c(a(xt).Logo),style:Fe({width:a(T)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):L("",!0),S("div",{class:c(a(xt).Contents)},[S("div",{class:c(a(xt).SearchField)},[a(u).searchField?(s(),d(G,{key:0},[f(N.$slots,"searchField"),C(a(Um),{visible:t.searchResultsVisible,overlayVisible:t.searchResultsOverlayVisible,onDismiss:w[1]||(w[1]=D=>N.$emit("search-result-dismiss"))},{default:y(()=>[f(N.$slots,"searchResults")]),_:3},8,["visible","overlayVisible"])],64)):L("",!0)],2),S("div",{class:c(a(xt).SecondaryMenu)},[f(N.$slots,"secondaryMenu")],2),f(N.$slots,"userMenu")],2)],2))}});ai.__docgenInfo={exportName:"default",displayName:"TopBar",description:"",tags:{},props:[{name:"showNavigationToggle",description:"Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button",required:!1,type:{name:"boolean"}},{name:"searchResultsVisible",description:"A boolean property indicating whether search results are currently visible.",required:!1,type:{name:"boolean"}},{name:"searchResultsOverlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"navigation-toggle"},{name:"search-result-dismiss"}],slots:[{name:"contextControl"},{name:"searchField"},{name:"searchResults"},{name:"secondaryMenu"},{name:"userMenu"}]};const KI=[t=>({components:{AppProvider:Ro,story:t},template:"<AppProvider><story /></AppProvider>"})],YI={viewMode:"docs",docs:{transformSource:t=>{const n=/<template>(.*)<\/template>/g;return`${t.replace(n,"$1")}`},source:{state:"open"}},controls:{matchers:{color:/(background|color|backgroundColor)$/i,date:/Date$/},sort:"alpha"},options:{showPanel:!0,storySort:{order:["Get Started","Polaris Icons","FAQs","Components",["Actions","Structure","Forms","Images and icons","Feedback indicators","Titles and text","Behavior","Lists and tables","Navigation","Overlays"]]}}};var ZI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:KI,parameters:YI});const QI={},JI="wrapper";function jm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(JI,_(b(b({},QI),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e("h1",null,"FAQs"),e("hr",null),e("br",null),e("h4",null,e("strong",{parentName:"h4"},"Issue: Missing declaration types")),e("p",null,"At this moment, you should add the property ",e("inlineCode",{parentName:"p"},"skipLibCheck: true")," to ",e("strong",{parentName:"p"},"tsconfig.json"),` file.
This will skip the check for missing declaration types.
We will try to fix this issue in the future.`),e("br",null),e("h4",null,e("strong",{parentName:"h4"},"CSS Variables & Polaris Tokens")),e("p",null,"All tokens & variables are following the ",e("a",{parentName:"p",href:"https://polaris.shopify.com/tokens/all-tokens"},"Polaris Design Tokens"),`.
Feel free to change the variables, based on your project scheme.`))}jm.isMDXComponent=!0;const zm=()=>{throw new Error("Docs-only story")};zm.parameters={docsOnly:!0};const Ra={title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},e1={};Ra.parameters=Ra.parameters||{};Ra.parameters.docs=_(b({},Ra.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:e1,mdxComponentAnnotations:Ra},e(jm,null))});var t1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:zm,default:Ra});const a1={},n1="wrapper";function Wm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(n1,_(b(b({},a1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e("img",{src:"https://github.com/qikify/polaris-vue/blob/master/public/images/banner.jpg?raw=true",alt:"Shopify Polaris Vue",width:"1000",height:"376"}),e("br",null),e("br",null),e("h1",null,"Get Started"),e("br",null),e("p",null,"Polaris Vue by Qikify is a component library for ",e("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," based on ",e("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris style guide"),". We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library)."),e("p",null,"Polaris Vue by qikify only supports ",e("strong",{parentName:"p"},"Vue 3.0+"),"."),e("p",null,e("strong",{parentName:"p"},"Follow Polaris React version:")," ",e("a",{parentName:"p",href:"https://github.com/Shopify/polaris/releases/tag/v9.8.0"},"9.8.0")," - Migrated date: ",e("em",{parentName:"p"},"May 20th, 2022"),"."),e("br",null),e("br",null),e("h2",null,"Installation"),e("p",null,"Using NPM"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`npm install @qikify/polaris-vue
`)),e("p",null,"Using Yarn"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`yarn add @qikify/polaris-vue
`)),e("br",null),e("h2",null,"Usage"),e("p",null,"Use as a Vue plugin (globally registers all components):"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`//main.js
import { createApp } from 'vue'
import PolarisVue from '@qikify/polaris-vue' // (\u2713)
import '@qikify/polaris-vue/dist/style.css' // (\u2713) This will be deprecated in the future, right after Vue 3 supports css injections.
import App from './App.vue'

//...
const app = createApp(App)
app.use(PolarisVue) // (\u2713)
...
`)),e("p",null,"OR use individual component (for better bundle size):"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { List, Icon } from '@qikify/polaris-vue';
`)),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"AppProvider")),e("p",null,"The AppProvider component is ",e("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  ...
</AppProvider>
</template>

<script><\/script>
`)),e("br",null),e("h2",null,"De-duplicating Vue version"),e("p",null,e("inlineCode",{parentName:"p"},"PolarisVue"),", other packages and your project may require access to the global Vue reference. So sometimes, you may get the runtime error message like:"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`TypeError: Cannot read properties of null (reading 'isCE')
renderSlot(...)
...
`)),e("p",null,"To avoid this, simply add ",e("inlineCode",{parentName:"p"},"dedupe: ['vue']")," to your ",e("inlineCode",{parentName:"p"},"vite.config.ts")," file, like below:"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`export default defineConfig({
  resolve: {
    ...
    dedupe: ['vue'],
  },
  ...
});
`)),e("br",null),e("h2",null,"Issues & Contributions"),e("p",null,"Polaris Vue by qikify is an open source project and we are very happy to accept community contributions."),e("p",null,"If you notice any bugs, please create issues under ",e("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/issues"},"Issues"),"."),e("br",null),e("br",null),e("h2",null,"License"),e("p",null,"Code released under the  ",e("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/LICENSE"},"MIT License"),"."),e("p",null,"Copyright (c) 2021 Qikify"))}Wm.isMDXComponent=!0;const Gm=()=>{throw new Error("Docs-only story")};Gm.parameters={docsOnly:!0};const Va={title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},o1={};Va.parameters=Va.parameters||{};Va.parameters.docs=_(b({},Va.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:o1,mdxComponentAnnotations:Va},e(Wm,null))});var i1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Gm,default:Va});const s1={},l1="wrapper";function Xm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(l1,_(b(b({},s1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e("h1",null,"Polaris Icons"),e("p",null,"You can use all icons from ",e("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"Shopify Polaris Icons")," Library or any SVG files."),e("p",null,e("inlineCode",{parentName:"p"},"vite-svg-loader")," & ",e("inlineCode",{parentName:"p"},"polaris-icons")," are already included in Polaris Vue package."),e("p",null,"So you don't have to install any additional packages."),e("br",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Setup:")),e("p",null,"You have to use ",e("inlineCode",{parentName:"p"},"vite-svg-loader")," in your project. See ",e("a",{parentName:"p",href:"?path=/docs/components-images-and-icons-icon"},"Icon Component")," for more details."),e("p",null,"Config in ",e("inlineCode",{parentName:"p"},"vite.config.ts")," if you are using ",e("inlineCode",{parentName:"p"},"vite")," to compile your project:"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// vite.config.js
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    ...
    svgLoader(),
  ],
  ...
});
`)),e("h3",null,e("strong",{parentName:"h3"},"Usage:")),e("p",null,"Composition API:"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`// *.vue
<script setup>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
<\/script>

<template>
  <Icon :source="CirclePlusMinor">
</template>
`)),e("p",null,"Options API:"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`<script>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';

export default {
  setup() {
    return { CirclePlusMinor };
  },
}
<\/script>

<template>
  <Icon :source="CirclePlusMinor">
</template>
`)))}Xm.isMDXComponent=!0;const Km=()=>{throw new Error("Docs-only story")};Km.parameters={docsOnly:!0};const Ha={title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},r1={};Ha.parameters=Ha.parameters||{};Ha.parameters.docs=_(b({},Ha.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:r1,mdxComponentAnnotations:Ha},e(Xm,null))});var c1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Km,default:Ha}),ad=Object.freeze,u1=Object.defineProperty,Ym=(t,n)=>ad(u1(t,"raw",{value:ad(n||t.slice())})),nd,od;const Ds=t=>({components:{AccountConnection:is,Link:ga},setup(){const n=()=>{o.value=!o.value},o=k(!1);return{args:t,connected:o,handleAccountConnect:n}},template:`<AccountConnection
    :accountName="connected ? 'Jane Appleseed' : ''"
    :connected="connected"
    title="Example App"
    :action="{ content: connected ? 'Disconnect' : 'Connect', onAction: handleAccountConnect }"
    :details="connected ? 'Account connected' : 'No account connected'"
  >
    <template #termsOfService v-if="!connected">
      <p>
        By clicking <strong>Connect</strong>, you agree to accept Sample App's
        <Link url="Example App">terms and conditions</Link>. You'll pay a
        commission rate of 15% on sales made through Sample App.
      </p>
    </template>
  </AccountConnection>`}),d1={Template:Ds},p1="wrapper";function Zm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(p1,_(b(b({},d1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Actions / Account connection",component:is,argTypes:{details:{description:"Content to display as title. This will override the `details` prop",table:{type:{summary:null}},control:{disable:!0}},title:{description:"Content to display as terms of service. This will override the `title` prop",table:{type:{summary:null}},control:{disable:!0}},termsOfService:{description:"Content to display as terms of service. This will override the `termOfService` prop",table:{type:{summary:null}},control:{disable:!0}},propDetails:{name:"details",description:"Content to display as additional details.",table:{category:"props",type:{summary:"string"}}},propTitle:{name:"title",description:"Content to display as title.",table:{category:"props",type:{summary:"string"}}},propTermsOfService:{name:"termsOfService",description:"Content to display as terms of service.",table:{category:"props",type:{summary:"string"}}},action:{control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Account connection"),e("p",null,"The account connection component is used so merchants can connect or disconnect their store to various accounts. For example, if merchants want to use the Facebook sales channel, they need to connect their Facebook account to their Shopify store."),e(V,{mdxType:"Canvas"},e(H,{name:"Account connection",height:"200px",parameters:{docs:{source:{code:P(nd||(nd=Ym([`
            <AccountConnection
              :accountName="connected ? 'Jane Appleseed' : ''"
              :connected="connected"
              title="Example App"
              :action="{ content: connected ? 'Disconnect' : 'Connect', onAction: handleAccountConnect }"
              :details="connected ? 'Account connected' : 'No account connected'"
            >
              <template #termsOfService v-if="!connected">
                <p>
                  By clicking <strong>Connect</strong>, you agree to accept Sample App's
                  <Link url="Example App">terms and conditions</Link>. You'll pay a
                  commission rate of 15% on sales made through Sample App.
                </p>
              </template>
            </AccountConnection>

            <script setup>
              const handleAccountConnect = () => {
                connected.value = !connected.value;
              }
              const connected = ref(false);
            <\/script>
            `],[`
            <AccountConnection
              :accountName="connected ? 'Jane Appleseed' : ''"
              :connected="connected"
              title="Example App"
              :action="{ content: connected ? 'Disconnect' : 'Connect', onAction: handleAccountConnect }"
              :details="connected ? 'Account connected' : 'No account connected'"
            >
              <template #termsOfService v-if="!connected">
                <p>
                  By clicking <strong>Connect</strong>, you agree to accept Sample App's
                  <Link url="Example App">terms and conditions</Link>. You'll pay a
                  commission rate of 15% on sales made through Sample App.
                </p>
              </template>
            </AccountConnection>\\n
            <script setup>
              const handleAccountConnect = () => {
                connected.value = !connected.value;
              }
              const connected = ref(false);
            <\/script>
            `])))}}},mdxType:"Story"},Ds.bind({}))),e(se,{story:"Account connection",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Action Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}Zm.isMDXComponent=!0;const Pc=Ds.bind({});Pc.storyName="Account connection";Pc.parameters={storySource:{source:`args => ({
  components: {
    AccountConnection,
    Link
  },

  setup() {
    const handleAccountConnect = () => {
      connected.value = !connected.value;
    };

    const connected = ref(false);
    return {
      args,
      connected,
      handleAccountConnect
    };
  },

  template: \`<AccountConnection
    :accountName="connected ? 'Jane Appleseed' : ''"
    :connected="connected"
    title="Example App"
    :action="{ content: connected ? 'Disconnect' : 'Connect', onAction: handleAccountConnect }"
    :details="connected ? 'Account connected' : 'No account connected'"
  >
    <template #termsOfService v-if="!connected">
      <p>
        By clicking <strong>Connect</strong>, you agree to accept Sample App's
        <Link url="Example App">terms and conditions</Link>. You'll pay a
        commission rate of 15% on sales made through Sample App.
      </p>
    </template>
  </AccountConnection>\`
})`},docs:{source:{code:P(od||(od=Ym([`
            <AccountConnection
              :accountName="connected ? 'Jane Appleseed' : ''"
              :connected="connected"
              title="Example App"
              :action="{ content: connected ? 'Disconnect' : 'Connect', onAction: handleAccountConnect }"
              :details="connected ? 'Account connected' : 'No account connected'"
            >
              <template #termsOfService v-if="!connected">
                <p>
                  By clicking <strong>Connect</strong>, you agree to accept Sample App's
                  <Link url="Example App">terms and conditions</Link>. You'll pay a
                  commission rate of 15% on sales made through Sample App.
                </p>
              </template>
            </AccountConnection>

            <script setup>
              const handleAccountConnect = () => {
                connected.value = !connected.value;
              }
              const connected = ref(false);
            <\/script>
            `],[`
            <AccountConnection
              :accountName="connected ? 'Jane Appleseed' : ''"
              :connected="connected"
              title="Example App"
              :action="{ content: connected ? 'Disconnect' : 'Connect', onAction: handleAccountConnect }"
              :details="connected ? 'Account connected' : 'No account connected'"
            >
              <template #termsOfService v-if="!connected">
                <p>
                  By clicking <strong>Connect</strong>, you agree to accept Sample App's
                  <Link url="Example App">terms and conditions</Link>. You'll pay a
                  commission rate of 15% on sales made through Sample App.
                </p>
              </template>
            </AccountConnection>\\n
            <script setup>
              const handleAccountConnect = () => {
                connected.value = !connected.value;
              }
              const connected = ref(false);
            <\/script>
            `])))}}};const Ua={title:"Components / Actions / Account connection",component:is,argTypes:{details:{description:"Content to display as title. This will override the `details` prop",table:{type:{summary:null}},control:{disable:!0}},title:{description:"Content to display as terms of service. This will override the `title` prop",table:{type:{summary:null}},control:{disable:!0}},termsOfService:{description:"Content to display as terms of service. This will override the `termOfService` prop",table:{type:{summary:null}},control:{disable:!0}},propDetails:{name:"details",description:"Content to display as additional details.",table:{category:"props",type:{summary:"string"}}},propTitle:{name:"title",description:"Content to display as title.",table:{category:"props",type:{summary:"string"}}},propTermsOfService:{name:"termsOfService",description:"Content to display as terms of service.",table:{category:"props",type:{summary:"string"}}},action:{control:{disable:!0}}},includeStories:["accountConnection"]},m1={"Account connection":"accountConnection"};Ua.parameters=Ua.parameters||{};Ua.parameters.docs=_(b({},Ua.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:m1,mdxComponentAnnotations:Ua},e(Zm,null))});var y1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ds,accountConnection:Pc,default:Ua}),id=Object.freeze,g1=Object.defineProperty,Qm=(t,n)=>id(g1(t,"raw",{value:id(n||t.slice())})),sd,ld;const Is=t=>({components:{ActionList:Je},setup(){return{args:t}},template:`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>`}),uo=(t,{argTypes:n})=>({components:{ActionList:Je,Button:ge,Popover:et,Icon:re},data(){return{active:!1,iconTickSmallMinor:lc,iconChevronRightMinor:Ur,inAPopoverItems:[{content:"Import file",onAction:this.handleImportedAction},{content:"Export file",onAction:this.handleExportedAction}],iconsOrImagesItems:[{content:"Import file",image:"https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"},{content:"Export file",icon:Xi}],iconAndSuffixItems:[{active:!0,content:"Import file",icon:jr,suffixId:"import"},{content:"Export file",icon:Xi}],suffixAndPrefixItems:[{content:"Go here",prefixId:"here",suffixId:"here"},{content:"Or there",suffixId:"there"}]}},methods:{toggle(){this.active=!this.active},handleImportedAction(){alert("Imported!")},handleExportedAction(){alert("Exported!")}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center'}">
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @click="toggle"
    >
      <template #activator>
        <Button :disclosure="true" @click="toggle">
          In a Popover
        </Button>
      </template>
      <template #content>
        <ActionList :items="inAPopoverItems"/>
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button :disclosure="true"> With Icons or image </Button>
      </template>
      <template #content>
        <ActionList :items="iconsOrImagesItems"/>
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button :disclosure="true"> With an icon and a suffix </Button>
      </template>
      <template #content>
        <ActionList :items="iconAndSuffixItems">
          <template #suffix-import>
            <Icon :source="iconTickSmallMinor" />
          </template>
        </ActionList>
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button :disclosure="true"> With suffix and prefix </Button>
      </template>
      <template #content>
        <ActionList :items="suffixAndPrefixItems">
          <template #prefix-here>
            <img width="30" height="30" src="https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"/>
          </template>
          <template #suffix-here>
            <Icon :source="iconChevronRightMinor" />
          </template>
          <template #suffix-there>
            <Icon :source="iconChevronRightMinor" />
          </template>
        </ActionList>
      </template>
    </Popover>
  </div>`});uo.storyName="Items";uo.parameters={docs:{source:{code:P(sd||(sd=Qm([`
        <template>
          <Popover
            :active="active"
            autofocusTarget="first-node"
            @click="toggle"
          >
            <template #activator>
              <Button :disclosure="true" @click="toggle">
                In a Popover
              </Button>
            </template>
            <template #content>
              <ActionList :items="inAPopoverItems"/>
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button :disclosure="true"> With Icons or image </Button>
            </template>
            <template #content>
              <ActionList :items="iconsOrImagesItems"/>
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button :disclosure="true"> With an icon and a suffix </Button>
            </template>
            <template #content>
              <ActionList :items="iconAndSuffixItems">
                <template #suffix-import>
                  <Icon :source="iconTickSmallMinor" />
                </template>
              </ActionList>
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button :disclosure="true"> With suffix and prefix </Button>
            </template>
            <template #content>
              <ActionList :items="suffixAndPrefixItems">
                <template #prefix-here>
                  <img width="30" height="30" src="https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"/>
                </template>
                <template #suffix-here>
                  <Icon :source="iconChevronRightMinor" />
                </template>
                <template #suffix-there>
                  <Icon :source="iconChevronRightMinor" />
                </template>
              </ActionList>
            </template>
          </Popover>
        </template>
        <script>
          import ExportMinor from '@shopify/polaris-icons/dist/svg/ExportMinor.svg';
          import ImportMinor from '@shopify/polaris-icons/dist/svg/ImportMinor.svg';
          import TickSmallMinor from '@shopify/polaris-icons/dist/svg/TickSmallMinor.svg';
          import ChevronRightMinor from '@shopify/polaris-icons/dist/svg/ChevronRightMinor.svg';
          components: { ActionList, Button, Popover, Icon },
          data() {
            return {
              active: false,
              iconTickSmallMinor: TickSmallMinor,
              iconChevronRightMinor: ChevronRightMinor,
              inAPopoverItems: [
                {
                  content: "Import file",
                  onAction: this.handleImportedAction,
                },
                {
                  content: "Export file",
                  onAction: this.handleExportedAction,
                },
              ],
              iconsOrImagesItems: [
                {
                  content: "Import file",
                  image:
                    "https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png",
                },
                {
                  content: "Export file",
                  icon: ExportMinor,
                },
              ],
              iconAndSuffixItems: [
                {
                  active: true,
                  content: "Import file",
                  icon: ImportMinor,
                  suffixId: "import",
                },
                { content: "Export file", icon: ExportMinor },
              ],
              suffixAndPrefixItems: [
                {
                  content: "Go here",
                  prefixId: "here",
                  suffixId: "here",
                },
                {
                  content: "Or there",
                  suffixId: "there",
                },
              ],
            };
          },
          methods: {
            toggle() {
              this.active = !this.active;
            },
            handleImportedAction() {
              alert("Imported!");
            },
            handleExportedAction() {
              alert("Exported!");
            },
          },
        <\/script>
        `])))}}};const po=(t,{argTypes:n})=>({components:{ActionList:Je,Button:ge,Popover:et,Icon:re},data(){return{sections:[{title:"File options",items:[{content:"Import file",icon:jr},{content:"Export file",icon:Xi}]},{title:"Bulk actions",items:[{content:"Edit",icon:Ph},{content:"Delete",icon:Su}]}],destructiveItemSections:[{title:"File options",items:[{active:!0,content:"Import file",icon:jr},{content:"Export file",icon:Xi},{destructive:!0,content:"Delete file",icon:Su}]}],helpTextSections:[{items:[{content:"Blog posts",helpText:"Manage your blog articles"},{content:"Blogs",helpText:"Manage blogs published to your Online Store"}]}]}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '120px', justifyContent: 'center'}">
    <Popover active>
      <template #activator>
        <Button :disclosure="true"> Sections </Button>
      </template>
      <template #content>
        <ActionList :sections="sections" />
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button :disclosure="true"> With Destructive Item </Button>
      </template>
      <template #content>
        <ActionList :sections="destructiveItemSections"/>
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button slot="activator" :disclosure="true"> With Help Text </Button>
      </template>
      <template #content>
        <ActionList :sections="helpTextSections"/>
      </template>
    </Popover>
  </div>`});po.storyName="Sections";po.parameters={docs:{source:{code:P(ld||(ld=Qm([`
        <template>
          <Popover active>
            <template #activator>
              <Button :disclosure="true"> Sections </Button>
            </template>
            <template #content>
              <ActionList :sections="sections" />
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button :disclosure="true"> With Destructive Item </Button>
            </template>
            <template #content>
              <ActionList :sections="destructiveItemSections"/>
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button slot="activator" :disclosure="true"> With Help Text </Button>
            </template>
            <template #content>
              <ActionList :sections="helpTextSections"/>
            </template>
          </Popover>
        </template>
        <script>
          import ExportMinor from '@shopify/polaris-icons/dist/svg/ExportMinor.svg';
          import ImportMinor from '@shopify/polaris-icons/dist/svg/ImportMinor.svg';
          import EditMinor from '@shopify/polaris-icons/dist/svg/EditMinor.svg';
          import DeleteMinor from '@shopify/polaris-icons/dist/svg/DeleteMinor.svg';
          data() {
            return {
              sections: [
                {
                  title: 'File options',
                  items: [
                    {content: 'Import file', icon: ImportMinor},
                    {content: 'Export file', icon: ExportMinor},
                  ],
                },
                {
                  title: 'Bulk actions',
                  items: [
                    {content: 'Edit', icon: EditMinor},
                    {content: 'Delete', icon: DeleteMinor},
                  ],
                },
              ],
              destructiveItemSections: [
                {
                  title: 'File options',
                  items: [
                    {
                      active: true,
                      content: 'Import file',
                      icon: ImportMinor,
                    },
                    {content: 'Export file', icon: ExportMinor},
                    {
                      destructive: true,
                      content: 'Delete file',
                      icon: DeleteMinor,
                    },
                  ],
                },
              ],
              helpTextSections: [
                {
                  items: [
                    {
                      content: 'Blog posts',
                      helpText: 'Manage your blog articles',
                    },
                    {
                      content: 'Blogs',
                      helpText: 'Manage blogs published to your Online Store',
                    },
                  ],
                },
              ],
            }
          },
        <\/script>
        `])))}}};const h1={Template:Is,itemExamples:uo,sectionExamples:po},b1="wrapper";function Jm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(b1,_(b(b({},h1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Actions / Action List",component:Je,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:"ActionListItemDescriptor[]"}}},sections:{table:{type:{summary:"ActionListSection[]"},defaultValue:{summary:null}},control:{disable:!0}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"ActionList"),e("p",null,"Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let merchants select from a list of options."),e("p",null,"For Icon usages, use the ",e("a",{parentName:"p",href:"/docs/components-images-and-icons-icon--icon"},"Icon component.")),e("br",null),e("br",null),e("h3",null,"Items"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:uo,height:"250px",inline:!1,name:"_itemExamples_",mdxType:"Story"})),e("h3",null,"Sections"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:po,height:"300px",inline:!1,name:"_sectionExamples_",mdxType:"Story"})),e("h3",null,"ActionList"),e(V,{mdxType:"Canvas"},e(H,{name:"Action List",height:"40px",args:{default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}},parameters:{docs:{source:{code:P`
            <ActionList v-bind="props"></ActionList>
          `}}},mdxType:"Story"},Is.bind({}))),e(se,{story:"Action List",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ActionListItemDescriptor type")),e("p",null,"Array of type: ",e("inlineCode",{parentName:"p"},"ActionListItemDescriptor[]")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether the action is active or not.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge?"),e("td",{parentName:"tr",align:null},'{content: string, status: "new"}'),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"ellipsis?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Add an ellipsis suffix to action content.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"helpText?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Additional hint text to display with item.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"image?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Image source.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"prefixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Prefix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"role?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Defines a role for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"suffixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Suffix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ActionListSection type")),e("p",null,"Array of type: ",e("inlineCode",{parentName:"p"},"ActionListSection[]")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Section title.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"items?"),e("td",{parentName:"tr",align:null},"ActionListItemDescriptor[]"),e("td",{parentName:"tr",align:null},"Collection of action items for the list.")))))}Jm.isMDXComponent=!0;const f1=uo,v1=po,Bs=Is.bind({});Bs.storyName="Action List";Bs.args={default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}};Bs.parameters={storySource:{source:`args => ({
  components: {
    ActionList
  },

  setup() {
    return {
      args
    };
  },

  template: \`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>\`
})`},docs:{source:{code:P`
            <ActionList v-bind="props"></ActionList>
          `}}};const ja={title:"Components / Actions / Action List",component:Je,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:"ActionListItemDescriptor[]"}}},sections:{table:{type:{summary:"ActionListSection[]"},defaultValue:{summary:null}},control:{disable:!0}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_itemExamples_","_sectionExamples_","actionList"]},x1={_itemExamples_:"_itemExamples_",_sectionExamples_:"_sectionExamples_","Action List":"actionList"};ja.parameters=ja.parameters||{};ja.parameters.docs=_(b({},ja.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:x1,mdxComponentAnnotations:ja},e(Jm,null))});var T1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Is,itemExamples:uo,sectionExamples:po,_itemExamples_:f1,_sectionExamples_:v1,actionList:Bs,default:ja});const S1={},C1="wrapper";function ey(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(C1,_(b(b({},S1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / App Provider",component:Ro,mdxType:"Meta"}),e("h1",null,"AppProvider"),e("p",null,"App provider is a required component that enables sharing global settings throughout the hierarchy of your application."),e("br",null),e("h2",null,"Best practices"),e("p",null,"The AppProvider component is ",e("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  <div>
  </div>
</AppProvider>
</template>

<script><\/script>
`)))}ey.isMDXComponent=!0;const ty=()=>{throw new Error("Docs-only story")};ty.parameters={docsOnly:!0};const za={title:"Components / Structure / App Provider",component:Ro,includeStories:["__page"]},A1={};za.parameters=za.parameters||{};za.parameters.docs=_(b({},za.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:A1,mdxComponentAnnotations:za},e(ey,null))});var k1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:ty,default:za});const $s=(t,{argTypes:n})=>({components:{Avatar:oo},setup(){return{args:t}},template:'<Avatar v-bind="args"/>'}),N1={Template:$s},L1="wrapper";function ay(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(L1,_(b(b({},N1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Images and Icons / Avatar",component:oo,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Avatar"),e("p",null,"Avatars are used to show a thumbnail representation of an individual or business in the interface."),e(V,{mdxType:"Canvas"},e(H,{name:"Avatar",height:"60px",parameters:{docs:{source:{code:P`
            <Avatar v-bind="props"/>
          `}}},mdxType:"Story"},$s.bind({}))),e(se,{story:"Avatar",mdxType:"ArgsTable"}))}ay.isMDXComponent=!0;const Mc=$s.bind({});Mc.storyName="Avatar";Mc.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    Avatar
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Avatar v-bind="args"/>\`
})`},docs:{source:{code:P`
            <Avatar v-bind="props"/>
          `}}};const Wa={title:"Components / Images and Icons / Avatar",component:oo,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["avatar"]},w1={Avatar:"avatar"};Wa.parameters=Wa.parameters||{};Wa.parameters.docs=_(b({},Wa.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:w1,mdxComponentAnnotations:Wa},e(ay,null))});var P1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:$s,avatar:Mc,default:Wa});const Fs=t=>({components:{Badge:st},setup(){return{args:t}},template:'<Badge v-bind="args">Fulfilled</Badge>'}),mo=(t,{argTypes:n})=>({components:{Badge:st},template:P`<div>
  <Badge>Fulfilled</Badge>&nbsp;
  <Badge status="info">Published</Badge>&nbsp;
  <Badge status="success">Funds recovered</Badge>&nbsp;
  <Badge status="attention">Inactive</Badge>&nbsp;
  <Badge status="warning">Expired</Badge>&nbsp;
  <Badge status="critical">Action required</Badge>&nbsp;
  <br/><br/>
  <Badge progress="incomplete" status="warning">Unfulfilled</Badge>&nbsp;
  <Badge progress="partiallyComplete">Partially fulfilled</Badge>&nbsp;
  <Badge progress="complete">Fulfilled</Badge>&nbsp;
  <Badge
    status="success"
    progress="complete"
    statusAndProgressLabelOverride="Status: Published. Your online store is visible."
  >Published</Badge>
  </div>`});mo.storyName="Variants";mo.parameters={docs:{source:{state:"close",code:P`
      <Badge>Fulfilled</Badge>
      <Badge status="info">Published</Badge>
      <Badge status="success">Funds recovered</Badge>
      <Badge status="attention">Inactive</Badge>
      <Badge status="warning">Expired</Badge>
      <Badge status="critical">Action required</Badge>
      <Badge progress="incomplete" status="warning">Unfulfilled</Badge>
      <Badge progress="partiallyComplete">Partially fulfilled</Badge>
      <Badge progress="complete">Fulfilled</Badge>
      <Badge
        status="success"
        progress="complete"
        statusAndProgressLabelOverride="Status: Published. Your online store is visible."
      >Published</Badge>
      `}}};const M1={Template:Fs,Variants:mo},_1="wrapper";function ny(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(_1,_(b(b({},M1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Images and icons / Badge",component:st,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Badge"),e("p",null,"Badges are used to inform merchants of the status of an object or of an action that's been taken."),e(V,{mdxType:"Canvas"},e(H,{story:mo,height:"65px",name:"_Variants_",mdxType:"Story"})),e(V,{mdxType:"Canvas"},e(H,{name:"Badge",height:"30px",parameters:{docs:{source:{code:P`
          `}}},mdxType:"Story"},Fs.bind({}))),e(se,{story:"Badge",mdxType:"ArgsTable"}))}ny.isMDXComponent=!0;const D1=mo,_c=Fs.bind({});_c.storyName="Badge";_c.parameters={storySource:{source:`args => ({
  components: {
    Badge
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Badge v-bind="args">Fulfilled</Badge>\`
})`},docs:{source:{code:P`
          `}}};const Ga={title:"Components / Images and icons / Badge",component:st,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Variants_","badge"]},I1={_Variants_:"_Variants_",Badge:"badge"};Ga.parameters=Ga.parameters||{};Ga.parameters.docs=_(b({},Ga.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:I1,mdxComponentAnnotations:Ga},e(ny,null))});var B1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Fs,Variants:mo,_Variants_:D1,badge:_c,default:Ga});const Es=t=>({components:{Banner:rs},setup(){return{args:t}},template:`<Banner
    v-bind="args"
    :action="{ content: 'Edit variant weights', url:'https://google.com' }"
    :secondaryAction="{ content: 'View all variants', url:'https://google.com' }"
    @dismiss="dismissHandler"
  >
    <p>Add weights to show accurate rates at checkout and when buying shipping labels in Shopify.</p>
  </Banner>`}),$1={Template:Es},F1="wrapper";function oy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(F1,_(b(b({},$1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Feedback indicators / Banner",component:rs,argTypes:{default:{table:{disable:!0}},icon:{table:{type:{summary:"IconSource"}}},status:{control:{type:"select",options:["info","success","warning","critical"]},table:{type:{summary:"success | info | warning | critical"}}},action:{table:{type:{summary:"DisableableAction & LoadableAction"}}},dismiss:{description:"Callback when banner is dismissed",control:{disable:!0},table:{type:{summary:"() => void"}}}},mdxType:"Meta"}),e("h1",null,"Banner"),e("p",null,"Informs merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way. Banners are placed at the top of the page or section they apply to, and below the page or section header."),e(V,{mdxType:"Canvas"},e(H,{name:"Banner",height:"200px",args:{status:"warning",title:"Some of your product varisants are missing weights"},parameters:{docs:{source:{code:P`<Banner
            title="Some of your product variants are missing weights"
            status="warning"
            :action="{ content: 'Edit variant weights', url:'https://google.com' }"
            :secondaryAction="{ content: 'View all variants', url:'https://google.com' }"
            @dismiss="dismissHandler"
          >
            <p>Add weights to show accurate rates at checkout and when buying shipping labels in Shopify.</p>
          </Banner>`}}},mdxType:"Story"},Es.bind({}))),e(se,{story:"Banner",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Action Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"DisableableAction & LoadableAction")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}oy.isMDXComponent=!0;const Os=Es.bind({});Os.storyName="Banner";Os.args={status:"warning",title:"Some of your product varisants are missing weights"};Os.parameters={storySource:{source:`args => ({
  components: {
    Banner
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Banner
    v-bind="args"
    :action="{ content: 'Edit variant weights', url:'https://google.com' }"
    :secondaryAction="{ content: 'View all variants', url:'https://google.com' }"
    @dismiss="dismissHandler"
  >
    <p>Add weights to show accurate rates at checkout and when buying shipping labels in Shopify.</p>
  </Banner>\`
})`},docs:{source:{code:P`<Banner
            title="Some of your product variants are missing weights"
            status="warning"
            :action="{ content: 'Edit variant weights', url:'https://google.com' }"
            :secondaryAction="{ content: 'View all variants', url:'https://google.com' }"
            @dismiss="dismissHandler"
          >
            <p>Add weights to show accurate rates at checkout and when buying shipping labels in Shopify.</p>
          </Banner>`}}};const Xa={title:"Components / Feedback indicators / Banner",component:rs,argTypes:{default:{table:{disable:!0}},icon:{table:{type:{summary:"IconSource"}}},status:{control:{type:"select",options:["info","success","warning","critical"]},table:{type:{summary:"success | info | warning | critical"}}},action:{table:{type:{summary:"DisableableAction & LoadableAction"}}},dismiss:{description:"Callback when banner is dismissed",control:{disable:!0},table:{type:{summary:"() => void"}}}},includeStories:["banner"]},E1={Banner:"banner"};Xa.parameters=Xa.parameters||{};Xa.parameters.docs=_(b({},Xa.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:E1,mdxComponentAnnotations:Xa},e(oy,null))});var O1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Es,banner:Os,default:Xa}),rd=Object.freeze,q1=Object.defineProperty,Dc=(t,n)=>rd(q1(t,"raw",{value:rd(n||t.slice())})),cd,ud,dd;const qs=(t,{argTypes:n})=>({components:{Button:ge},setup(){return{args:t}},template:'<Button v-bind="args">Add Product</Button>'}),yo=(t,{argTypes:n})=>({components:{Button:ge},template:` <div style="margin: 0 auto; width: 97%">
  <Button>Basic</Button>
  <Button :outline="true">Outline</Button>
  <span data-style="{color: '#bf0711'}" style="color: #bf0711;">
    <Button :monochrome="true" :outline="true">Outline monochrome</Button>
  </span>
  <Button :primary="true">Primary</Button>
  <Button :destructive="true">Destructive</Button>
  <Button size="slim">Size slim</Button>
  <Button size="large">Size large</Button>
  <Button :loading="true">Loading</Button>
  <Button :disabled="true">Disabled</Button>
  <br/>
  <br/>
  <Button :fullWidth="true">Fullwidth</Button>
  <br/>
  <Button :plain="true">View shipping settings</Button>
  <br/>
  <span>
    Could not retrieve data. <Button :plain="true" :monochrome="true"> Try again </Button>
  </span>
  <br/>
  <Button :plain="true" :destructive="true">Remove</Button>
  <Button :plain="true" textAlign="left">
    This is a really long string of text that overflows onto the next line we need
    to put in a lot of words now you can see the alignment. It is very long but a
    customer could potentially name something this long.
  </Button>
  </div>`});yo.storyName="Variants";yo.parameters={docs:{source:{code:P`
        <template>
          <Button>Basic</Button>
          <Button outline>Outline</Button>
          <span style="color: #bf0711;">
            <Button monochrome outline>Outline monochrome</Button>
          </span>
          <Button primary>Primary</Button>
          <Button destructive>Destructive</Button>
          <Button size="slim">Size slim</Button>
          <Button size="large">Size large</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <br/>
          <br/>
          <Button fullWidth>Fullwidth</Button>
          <br/>
          <Button plain>View shipping settings</Button>
          <br/>
          <span>
            Could not retrieve data. <Button plain monochrome=> Try again </Button>
          </span>
          <br/>
          <Button plain destructive>Remove</Button>
          <Button plain textAlign="left">
            This is a really long string of text that overflows onto the next line we need
            to put in a lot of words now you can see the alignment. It is very long but a
            customer could potentially name something this long.
          </Button>
        </template>
        `}}};const go=(t,{argTypes:n})=>({components:{Button:ge},data(){return{expanded:!1}},computed:{disclosure(){return this.expanded?"up":"down"},disclosureText(){return this.expanded?"Show less":"Show more"}},template:`<div>
    <Button
      :plain="true"
      :disclosure="disclosure"
      v-on:click="expanded = !expanded"
    >
      {{disclosureText}}
    </Button>
    <br/>
    <br/>
    <div :style="{width: '200px'}">
      <Button
        :fullWidth="true"
        textAlign="left"
        :disclosure="disclosure"
        v-on:click="expanded = !expanded"
      >
        {{disclosureText}}
      </Button>
    </div>
    <br/>
    <Button disclosure="select">Disclosure select</Button>
  </div>`});go.storyName="Disclosure";go.parameters={docs:{source:{code:P(cd||(cd=Dc([`
        <template>
          <Button
            plain
            disclosure="disclosure"
            @click="expanded = !expanded"
          >
            {{disclosureText}}
          </Button>
          <div :style="{width: '200px'}">
            <Button
              fullWidth
              textAlign="left"
              :disclosure="disclosure"
              @click="expanded = !expanded"
            >
              {{disclosureText}}
            </Button>
          </div>
          <br/>
          <Button disclosure="select">Disclosure select</Button>
        </template>
        <script>
          components: { Button },
          data() {
            return {
              expanded: false,
            };
          },
          computed: {
            disclosure() {
              return this.expanded ? "up" : "down";
            },
            disclosureText() {
              return this.expanded ? "Show less" : "Show more";
            },
          },
        <\/script>
        `])))}}};const ho=(t,{argTypes:n})=>({components:{Button:ge},data(){return{connectedDisclosure:{accessibilityLabel:"Other save actions",actions:[{content:"Save as draft"}]}}},template:'<Button :connectedDisclosure="connectedDisclosure" :primary="true"> Save </Button>'});ho.storyName="Split Button";ho.parameters={docs:{source:{code:P(ud||(ud=Dc([`
        <template>
          <Button primary :connectedDisclosure="connectedDisclosure">Save</Button>
        </template>
        <script>
          data() {
            return {
              connectedDisclosure: {
                accessibilityLabel: 'Other save actions',
                actions: [
                  { content: 'Save as draft' },
                ],
              },
            };
          }
        <\/script>
        `])))}}};const bo=(t,{argTypes:n})=>({components:{ButtonGroup:tt,Button:ge},data(){return{isFirstButtonActive:!0}},methods:{handleFirstButtonActive(){this.isFirstButtonActive||(this.isFirstButtonActive=!0)},handleSecondButtonActive(){!this.isFirstButtonActive||(this.isFirstButtonActive=!1)}},template:`<ButtonGroup :segmented="true">
    <Button
      :pressed="isFirstButtonActive"
      @click="handleFirstButtonActive"
    >
      First button
    </Button>
    <Button
      @click="handleSecondButtonActive"
      :pressed="!isFirstButtonActive"
    >
      Second button
    </Button>
  </ButtonGroup>`});bo.storyName="Pressed Button";bo.parameters={docs:{source:{code:P(dd||(dd=Dc([`
        <template>
          <ButtonGroup segmented>
            <Button
              :pressed="isFirstButtonActive"
              @click="handleFirstButtonActive"
            >
              First button
            </Button>
            <Button
              @click="handleSecondButtonActive"
              :pressed="!isFirstButtonActive"
            >
              Second button
            </Button>
          </ButtonGroup>
        </template>
        <script>
          components: { ButtonGroup, Button },
          data() {
            return {
              isFirstButtonActive: true,
            };
          },
          methods: {
            handleFirstButtonActive() {
              if (this.isFirstButtonActive) return;
              this.isFirstButtonActive = true;
            },
            handleSecondButtonActive() {
              if (!this.isFirstButtonActive) return;
              this.isFirstButtonActive = false;
            },
          },
        <\/script>
        `])))}}};const R1={Template:qs,Variants:yo,Disclosure:go,SplitButton:ho,PressedButton:bo},V1="wrapper";function iy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(V1,_(b(b({},R1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Actions / Button",component:ge,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"Button"),e("p",null,"Buttons are used primarily for actions, such as \u201CAdd\u201D, \u201CClose\u201D, \u201CCancel\u201D, or \u201CSave\u201D. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as \u201Cview shipping settings\u201D."),e("p",null,"For navigational actions that appear within or directly following a sentence, use the ",e("a",{parentName:"p",href:"/docs/components-navigation-link--link"},"link component.")),e("p",null,"For connectedDisclosure actions, use the ",e("a",{parentName:"p",href:"/docs/components-actions-actionlist--actionlist"},"ActionList component.")),e("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",e("b",null,"button")," element in html."),e("br",null),e("br",null),e("h3",null,"Button Variants"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:yo,height:"280px",name:"_Variants_",mdxType:"Story"})),e("h3",null,"Pressed Button"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:bo,height:"60px",name:"_PressedButton_",mdxType:"Story"})),e("h3",null,"Disclosure Button"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:go,height:"140px",name:"_Disclosure_",mdxType:"Story"})),e("h3",null,"Split Button"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:ho,height:"120px",inline:!1,name:"_SplitButton_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},e(H,{name:"Button",height:"40px",parameters:{docs:{source:{code:P`
            <Button>Add Product</Button>
          `}}},mdxType:"Story"},qs.bind({}))),e(se,{story:"Button",mdxType:"ArgsTable"}))}iy.isMDXComponent=!0;const H1=yo,U1=bo,j1=go,z1=ho,Ic=qs.bind({});Ic.storyName="Button";Ic.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    Button
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Button v-bind="args">Add Product</Button>\`
})`},docs:{source:{code:P`
            <Button>Add Product</Button>
          `}}};const Ka={title:"Components / Actions / Button",component:ge,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_Variants_","_PressedButton_","_Disclosure_","_SplitButton_","button"]},W1={_Variants_:"_Variants_",_PressedButton_:"_PressedButton_",_Disclosure_:"_Disclosure_",_SplitButton_:"_SplitButton_",Button:"button"};Ka.parameters=Ka.parameters||{};Ka.parameters.docs=_(b({},Ka.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:W1,mdxComponentAnnotations:Ka},e(iy,null))});var G1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:qs,Variants:yo,Disclosure:go,SplitButton:ho,PressedButton:bo,_Variants_:H1,_PressedButton_:U1,_Disclosure_:j1,_SplitButton_:z1,button:Ic,default:Ka});const Rs=(t,{argTypes:n})=>({components:{ButtonGroup:tt,Button:ge},setup(){return{args:t}},template:`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>`}),fo=(t,{argTypes:n})=>({components:{ButtonGroup:tt,Button:ge},template:`<ButtonGroup segmented>
    <Button> Bold </Button>
    <Button> Italic </Button>
    <Button> Underline </Button>
  </ButtonGroup>`});fo.storyName="With segmented buttons";fo.parameters={docs:{source:{code:P`
        <ButtonGroup segmented>
          <Button> Bold </Button>
          <Button> Italic </Button>
          <Button> Underline </Button>
        </ButtonGroup>
      `}}};const X1={Template:Rs,SegmentedButtons:fo},K1="wrapper";function sy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(K1,_(b(b({},X1),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Actions / Button Group",component:tt,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"ButtonGroup"),e("p",null,"Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing."),e("br",null),e("h3",null,"With segmented buttons"),e(V,{mdxType:"Canvas"},e(H,{story:fo,height:"65px",name:"_SegmentedButtons_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{name:"Button Group",height:"60px",parameters:{docs:{source:{code:P`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}},mdxType:"Story"},Rs.bind({}))),e(se,{story:"Button Group",mdxType:"ArgsTable"}))}sy.isMDXComponent=!0;const Y1=fo,Bc=Rs.bind({});Bc.storyName="Button Group";Bc.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    ButtonGroup,
    Button
  },

  setup() {
    return {
      args
    };
  },

  template: \`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>\`
})`},docs:{source:{code:P`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}};const Ya={title:"Components / Actions / Button Group",component:tt,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SegmentedButtons_","buttonGroup"]},Z1={_SegmentedButtons_:"_SegmentedButtons_","Button Group":"buttonGroup"};Ya.parameters=Ya.parameters||{};Ya.parameters.docs=_(b({},Ya.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:Z1,mdxComponentAnnotations:Ya},e(sy,null))});var Q1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Rs,SegmentedButtons:fo,_SegmentedButtons_:Y1,buttonGroup:Bc,default:Ya}),pd=Object.freeze,J1=Object.defineProperty,ly=(t,n)=>pd(J1(t,"raw",{value:pd(n||t.slice())})),md,yd;const Vs=t=>({components:{CalloutCard:ds},setup(){return{args:t,onDismiss:()=>{console.log("dismissed")}}},template:`<CalloutCard
    v-bind="args"
    @dismiss="onDismiss"
  >
    <p>Upload your store's logo, change colors and fonts, and more.</p>
  </CalloutCard>`}),eB={Template:Vs},tB="wrapper";function ry(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(tB,_(b(b({},eB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Callout card",component:ds,argTypes:{default:{table:{disable:!0}},primaryAction:{control:{type:"object"}},dismiss:{description:"Callback when banner is dismissed",table:{category:"events",type:{summary:"() => void"}}}},mdxType:"Meta"}),e("h1",null,"Callout card"),e("p",null,"Callout cards are used to encourage merchants to take an action related to a new feature or opportunity. They are most commonly displayed in the sales channels section of Shopify."),e(V,{mdxType:"Canvas"},e(H,{name:"Callout card",height:"200px",args:{title:"Customize the style of your checkout",illustration:"https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg",primaryAction:{content:"Customize checkout"},secondaryAction:{content:"Learn more about customizing checkout"}},parameters:{docs:{source:{code:P(md||(md=ly([`
            <CalloutCard
              title="Customize the style of your checkout"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
              :primaryAction="{content: 'Customize checkout'}"
              :secondaryAction="{content: 'Learn more about customizing checkout'}"
              @dismiss="onDismiss"
            >
              <p>Upload your store's logo, change colors and fonts, and more.</p>
            </CalloutCard>

            <script setup>
              const onDismiss = () => {
                console.log('dismissed');
              };
            <\/script>
          `],[`
            <CalloutCard
              title="Customize the style of your checkout"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
              :primaryAction="{content: 'Customize checkout'}"
              :secondaryAction="{content: 'Learn more about customizing checkout'}"
              @dismiss="onDismiss"
            >
              <p>Upload your store's logo, change colors and fonts, and more.</p>
            </CalloutCard>\\n
            <script setup>
              const onDismiss = () => {
                console.log('dismissed');
              };
            <\/script>
          `])))}}},mdxType:"Story"},Vs.bind({}))),e(se,{story:"Callout card",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Action Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}ry.isMDXComponent=!0;const Hs=Vs.bind({});Hs.storyName="Callout card";Hs.args={title:"Customize the style of your checkout",illustration:"https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg",primaryAction:{content:"Customize checkout"},secondaryAction:{content:"Learn more about customizing checkout"}};Hs.parameters={storySource:{source:`args => ({
  components: {
    CalloutCard
  },

  setup() {
    const onDismiss = () => {
      console.log('dismissed');
    };

    return {
      args,
      onDismiss
    };
  },

  template: \`<CalloutCard
    v-bind="args"
    @dismiss="onDismiss"
  >
    <p>Upload your store's logo, change colors and fonts, and more.</p>
  </CalloutCard>\`
})`},docs:{source:{code:P(yd||(yd=ly([`
            <CalloutCard
              title="Customize the style of your checkout"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
              :primaryAction="{content: 'Customize checkout'}"
              :secondaryAction="{content: 'Learn more about customizing checkout'}"
              @dismiss="onDismiss"
            >
              <p>Upload your store's logo, change colors and fonts, and more.</p>
            </CalloutCard>

            <script setup>
              const onDismiss = () => {
                console.log('dismissed');
              };
            <\/script>
          `],[`
            <CalloutCard
              title="Customize the style of your checkout"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
              :primaryAction="{content: 'Customize checkout'}"
              :secondaryAction="{content: 'Learn more about customizing checkout'}"
              @dismiss="onDismiss"
            >
              <p>Upload your store's logo, change colors and fonts, and more.</p>
            </CalloutCard>\\n
            <script setup>
              const onDismiss = () => {
                console.log('dismissed');
              };
            <\/script>
          `])))}}};const Za={title:"Components / Structure / Callout card",component:ds,argTypes:{default:{table:{disable:!0}},primaryAction:{control:{type:"object"}},dismiss:{description:"Callback when banner is dismissed",table:{category:"events",type:{summary:"() => void"}}}},includeStories:["calloutCard"]},aB={"Callout card":"calloutCard"};Za.parameters=Za.parameters||{};Za.parameters.docs=_(b({},Za.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:aB,mdxComponentAnnotations:Za},e(ry,null))});var nB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vs,calloutCard:Hs,default:Za});const Us=t=>({components:{List:Da,ListItem:zo,Caption:ua},setup(){return{args:t}},template:`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>`}),oB={Template:Us},iB="wrapper";function cy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(iB,_(b(b({},oB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Titles and text  / Caption",component:ua,mdxType:"Meta"}),e("h1",null,"Caption"),e("p",null,`Caption text size is smaller than the recommended size for general reading.
On web, it should be used only in a graph or as a timestamp for a list item.
On Android and iOS, it can also be used as help text or as other kinds of secondary text for list items.`),e(V,{mdxType:"Canvas"},e(H,{name:"Caption",height:"100px",parameters:{docs:{source:{code:P`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}},mdxType:"Story"},Us.bind({}))))}cy.isMDXComponent=!0;const $c=Us.bind({});$c.storyName="Caption";$c.parameters={storySource:{source:`args => ({
  components: {
    List,
    ListItem,
    Caption
  },

  setup() {
    return {
      args
    };
  },

  template: \`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>\`
})`},docs:{source:{code:P`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}};const Qa={title:"Components / Titles and text  / Caption",component:ua,includeStories:["caption"]},sB={Caption:"caption"};Qa.parameters=Qa.parameters||{};Qa.parameters.docs=_(b({},Qa.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:sB,mdxComponentAnnotations:Qa},e(cy,null))});var lB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Us,caption:$c,default:Qa});const js=t=>({components:{Card:Ye},setup(){return{args:t}},template:`
    <Card sectioned :actions="[{content: 'Add variant'}]">
      <template #title>Variants</template>
      <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
    </Card>
  `}),zs=t=>({components:{Card:Ye,CardSection:pa,CardHeader:ps,CardSubsection:Xp,Icon:re,Subheading:da,Popover:et,Button:ge,ActionList:Je,Stack:qe,Subheading:da,List:Da,ListItem:zo},setup(){const n=k(!1);return{args:t,OrdersMinor:xp,addAccountActive:n,toggleClick:()=>{console.log("clicked")},toggleAccountActive:()=>{n.value=!n.value}}},template:`
    <Card
      :secondaryFooterActions="[{ content: 'Cancel shipment', destructive: true }, { content: 'Add another shipment', disabled: true }]"
      :primaryFooterAction="{ content: 'Add tracking number' }"
    >
      <template #title>Shipment</template>
      <CardHeader :actions="[{ content: 'Preview' }]">
        <template #title>Item Orders</template>
        <Popover :active="addAccountActive" @close="toggleClick">
          <template #activator>
            <Button :plain="true" :disclosure="true" @click="toggleAccountActive">Add account</Button>
          </template>
          <template #content>
            <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]"></ActionList>
          </template>
        </Popover>
      </CardHeader>
      <CardSection>
        <template #title>Items</template>
        <List>
          <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
          <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
        </List>
      </CardSection>
      <CardSection>
        <template #title>Addresses</template>
        <CardSubsection>123 First St<br/>Somewhere<br/>The Universe</CardSubsection>
        <CardSubsection>123 Second St<br/>Somewhere<br/>The Universe</CardSubsection>
      </CardSection>
      <CardSection subdued="subdued" :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]">
        <template #title>Contact Information</template>
        <p>john.smith@example.com</p>
      </CardSection>
      <CardSection>
        <template>
          <Stack>
            <Icon :source="OrdersMinor"></Icon>
            <Subheading>New Products</Subheading>
          </Stack>
        </template>
        <CardSubsection>A single subsection without a sibling has no visual appearance</CardSubsection>
      </CardSection>
    </Card>
  `}),Ws=t=>({components:{Card:Ye,CardHeader:ps,Stack:qe,ButtonGroup:tt,Button:ge,CardSection:pa,ActionList:Je,Popover:et},setup(){const n=k(!1);return{args:t,addAccountActive:n}},template:`
    <Card>
      <template #title>Secure your account with 2-step authentication</template>
      <CardHeader :actions="[{ content: 'Preview' }]">
        <template #title>Staff accounts</template>
        <Popover
          :active="addAccountActive"
          @close="() => {}"
        >
          <template #activator>
            <Button @click="() => addAccountActive = !addAccountActive" :disclosure="true" plain>Add account</Button>
          </template>
          <template #content>
            <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]" />
          </template>
        </Popover>
      </CardHeader>
      <CardSection>
        <Stack spacing="loose" vertical>
          <p>
          Two-step authentication adds an extra layer of security when logging in to your account. A special code will be required each time you log in,
          ensuring only you can access your account.
          </p>
          <Stack distribution="trailing">
            <ButtonGroup>
              <Button>Enable two-step authentication</Button>
              <Button plain>Learn more</Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </CardSection>
      <CardSection
        subdued
        :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]"
      >
        <template #title>Contact Information</template>
        <p>john.smith@example.com</p>
      </CardSection>
    </Card>
  `}),rB={TemplateSimple:js,TemplateFull:zs,Template:Ws},cB="wrapper";function uy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(cB,_(b(b({},rB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Card",component:Ye,argTypes:{propTitle:{name:"title",description:"Title content for the card.",table:{category:"props",type:{summary:"string"}}},title:{description:"Title content for the card. This will overwrite the `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Card"),e("p",null,"Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done."),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Simple Card")),e(V,{mdxType:"Canvas"},e(H,{name:"Card - Simple",height:"150px",parameters:{docs:{source:{state:"close",code:P`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}},mdxType:"Story"},js.bind({}))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Card with all of its elements")),e(V,{mdxType:"Canvas"},e(H,{name:"Card - Full",height:"700px",inline:!1,parameters:{docs:{source:{state:"close",code:P`
            <Card
              :secondaryFooterActions="[{ content: 'Cancel shipment', destructive: true }, { content: 'Add another shipment', disabled: true }]"
              :primaryFooterAction="{ content: 'Add tracking number' }"
            >
              <template #title>Shipment</template>
              <CardHeader :actions="[{ content: 'Preview' }]">
                <template #title>Item Orders</template>
                <Popover :active="addAccountActive" @close="() => {}">
                  <template #activator>
                    <Button
                      plain,
                      :disclosure="true"
                      @click="() => addAccountActive = !addAccountActive">Add account</Button>
                  </template>
                  <template #content>
                    <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]"></ActionList>
                  </template>
                </Popover>
              </CardHeader>
              <CardSection>
                <template #title>Items</template>
                <List>
                  <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
                  <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
                </List>
              </CardSection>
              <CardSection>
                <template #title>Addresses</template>
                <CardSubsection>123 First St<br/>Somewhere<br/>The Universe</CardSubsection>
                <CardSubsection>123 Second St<br/>Somewhere<br/>The Universe</CardSubsection>
              </CardSection>
              <CardSection subdued="subdued" :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]">
                <template #title>Contact Information</template>
                <p>john.smith@example.com</p>
              </CardSection>
              <CardSection>
                <template>
                  <Stack>
                    <Icon :source="OrdersMinor"></Icon>
                    <Subheading>New Products</Subheading>
                  </Stack>
                </template>
                <CardSubsection>A single subsection without a sibling has no visual appearance</CardSubsection>
              </CardSection>
            </Card>
          `}}},mdxType:"Story"},zs.bind({}))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Example")),e(V,{mdxType:"Canvas"},e(H,{name:"Card",height:"360px",inline:!1,parameters:{docs:{source:{state:"close",code:P`
            <Card>
              <template #title>Secure your account with 2-step authentication</template>
              <CardHeader :actions="[{ content: 'Preview' }]">
                <template #title>Staff accounts</template>
                <Popover
                  :active="addAccountActive"
                  @close="() => {}"
                >
                  <template #activator>
                    <Button @click="() => addAccountActive = !addAccountActive" :disclosure="true" plain>Add account</Button>
                  </template>
                  <template #content>
                    <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]" />
                  </template>
              </CardHeader>
              <CardSection>
                <Stack spacing="loose" vertical>
                  <p>
                  Two-step authentication adds an extra layer of security when logging in to your account. A special code will be required each time you log in,
                  ensuring only you can access your account.
                  </p>
                  <Stack distribution="trailing">
                    <ButtonGroup>
                      <Button>Enable two-step authentication</Button>
                      <Button plain>Learn more</Button>
                    </ButtonGroup>
                  </Stack>
                </Stack>
              </CardSection>
              <CardSection
                subdued
                :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]"
              >
                <template #title>Contact Information</template>
                <p>john.smith@example.com</p>
              </CardSection>
            </Card>`}}},mdxType:"Story"},Ws.bind({}))),e(se,{story:"Card",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"CardSection Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"The title of the section.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"subdued?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"A less prominent card.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"flush?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"fullWidth?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hideOnPrint?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Allow the card to be hidden when printing.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actions?"),e("td",{parentName:"tr",align:null},"ComplexAction[]"),e("td",{parentName:"tr",align:null})))),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Slots"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"#title"),e("td",{parentName:"tr",align:null},"The title of the section. This will overwrite the prop ",e("inlineCode",{parentName:"td"},"title")," if existed.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ComplexAction types")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"outline?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as an outlined button.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"plain?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as a plain link.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}uy.isMDXComponent=!0;const Fc=js.bind({});Fc.storyName="Card - Simple";Fc.parameters={storySource:{source:`args => ({
  components: {
    Card
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <Card sectioned :actions="[{content: 'Add variant'}]">
      <template #title>Variants</template>
      <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}};const Ec=zs.bind({});Ec.storyName="Card - Full";Ec.parameters={storySource:{source:`args => ({
  components: {
    Card,
    CardSection,
    CardHeader,
    CardSubsection,
    Icon,
    Subheading,
    Popover,
    Button,
    ActionList,
    Stack,
    Subheading,
    List,
    ListItem
  },

  setup() {
    const addAccountActive = ref(false);

    const toggleClick = () => {
      console.log('clicked');
    };

    const toggleAccountActive = () => {
      addAccountActive.value = !addAccountActive.value;
    };

    return {
      args,
      OrdersMinor,
      addAccountActive,
      toggleClick,
      toggleAccountActive
    };
  },

  template: \`
    <Card
      :secondaryFooterActions="[{ content: 'Cancel shipment', destructive: true }, { content: 'Add another shipment', disabled: true }]"
      :primaryFooterAction="{ content: 'Add tracking number' }"
    >
      <template #title>Shipment</template>
      <CardHeader :actions="[{ content: 'Preview' }]">
        <template #title>Item Orders</template>
        <Popover :active="addAccountActive" @close="toggleClick">
          <template #activator>
            <Button :plain="true" :disclosure="true" @click="toggleAccountActive">Add account</Button>
          </template>
          <template #content>
            <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]"></ActionList>
          </template>
        </Popover>
      </CardHeader>
      <CardSection>
        <template #title>Items</template>
        <List>
          <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
          <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
        </List>
      </CardSection>
      <CardSection>
        <template #title>Addresses</template>
        <CardSubsection>123 First St<br/>Somewhere<br/>The Universe</CardSubsection>
        <CardSubsection>123 Second St<br/>Somewhere<br/>The Universe</CardSubsection>
      </CardSection>
      <CardSection subdued="subdued" :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]">
        <template #title>Contact Information</template>
        <p>john.smith@example.com</p>
      </CardSection>
      <CardSection>
        <template>
          <Stack>
            <Icon :source="OrdersMinor"></Icon>
            <Subheading>New Products</Subheading>
          </Stack>
        </template>
        <CardSubsection>A single subsection without a sibling has no visual appearance</CardSubsection>
      </CardSection>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P`
            <Card
              :secondaryFooterActions="[{ content: 'Cancel shipment', destructive: true }, { content: 'Add another shipment', disabled: true }]"
              :primaryFooterAction="{ content: 'Add tracking number' }"
            >
              <template #title>Shipment</template>
              <CardHeader :actions="[{ content: 'Preview' }]">
                <template #title>Item Orders</template>
                <Popover :active="addAccountActive" @close="() => {}">
                  <template #activator>
                    <Button
                      plain,
                      :disclosure="true"
                      @click="() => addAccountActive = !addAccountActive">Add account</Button>
                  </template>
                  <template #content>
                    <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]"></ActionList>
                  </template>
                </Popover>
              </CardHeader>
              <CardSection>
                <template #title>Items</template>
                <List>
                  <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
                  <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
                </List>
              </CardSection>
              <CardSection>
                <template #title>Addresses</template>
                <CardSubsection>123 First St<br/>Somewhere<br/>The Universe</CardSubsection>
                <CardSubsection>123 Second St<br/>Somewhere<br/>The Universe</CardSubsection>
              </CardSection>
              <CardSection subdued="subdued" :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]">
                <template #title>Contact Information</template>
                <p>john.smith@example.com</p>
              </CardSection>
              <CardSection>
                <template>
                  <Stack>
                    <Icon :source="OrdersMinor"></Icon>
                    <Subheading>New Products</Subheading>
                  </Stack>
                </template>
                <CardSubsection>A single subsection without a sibling has no visual appearance</CardSubsection>
              </CardSection>
            </Card>
          `}}};const Oc=Ws.bind({});Oc.storyName="Card";Oc.parameters={storySource:{source:`args => ({
  components: {
    Card,
    CardHeader,
    Stack,
    ButtonGroup,
    Button,
    CardSection,
    ActionList,
    Popover
  },

  setup() {
    const addAccountActive = ref(false);
    return {
      args,
      addAccountActive
    };
  },

  template: \`
    <Card>
      <template #title>Secure your account with 2-step authentication</template>
      <CardHeader :actions="[{ content: 'Preview' }]">
        <template #title>Staff accounts</template>
        <Popover
          :active="addAccountActive"
          @close="() => {}"
        >
          <template #activator>
            <Button @click="() => addAccountActive = !addAccountActive" :disclosure="true" plain>Add account</Button>
          </template>
          <template #content>
            <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]" />
          </template>
        </Popover>
      </CardHeader>
      <CardSection>
        <Stack spacing="loose" vertical>
          <p>
          Two-step authentication adds an extra layer of security when logging in to your account. A special code will be required each time you log in,
          ensuring only you can access your account.
          </p>
          <Stack distribution="trailing">
            <ButtonGroup>
              <Button>Enable two-step authentication</Button>
              <Button plain>Learn more</Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </CardSection>
      <CardSection
        subdued
        :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]"
      >
        <template #title>Contact Information</template>
        <p>john.smith@example.com</p>
      </CardSection>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P`
            <Card>
              <template #title>Secure your account with 2-step authentication</template>
              <CardHeader :actions="[{ content: 'Preview' }]">
                <template #title>Staff accounts</template>
                <Popover
                  :active="addAccountActive"
                  @close="() => {}"
                >
                  <template #activator>
                    <Button @click="() => addAccountActive = !addAccountActive" :disclosure="true" plain>Add account</Button>
                  </template>
                  <template #content>
                    <ActionList :items="[{content: 'Member'}, {content: 'Admin'}]" />
                  </template>
              </CardHeader>
              <CardSection>
                <Stack spacing="loose" vertical>
                  <p>
                  Two-step authentication adds an extra layer of security when logging in to your account. A special code will be required each time you log in,
                  ensuring only you can access your account.
                  </p>
                  <Stack distribution="trailing">
                    <ButtonGroup>
                      <Button>Enable two-step authentication</Button>
                      <Button plain>Learn more</Button>
                    </ButtonGroup>
                  </Stack>
                </Stack>
              </CardSection>
              <CardSection
                subdued
                :actions="[{ content: 'Delete', destructive: true }, { content: 'Edit' }]"
              >
                <template #title>Contact Information</template>
                <p>john.smith@example.com</p>
              </CardSection>
            </Card>`}}};const Ja={title:"Components / Structure / Card",component:Ye,argTypes:{propTitle:{name:"title",description:"Title content for the card.",table:{category:"props",type:{summary:"string"}}},title:{description:"Title content for the card. This will overwrite the `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["cardSimple","cardFull","card"]},uB={"Card - Simple":"cardSimple","Card - Full":"cardFull",Card:"card"};Ja.parameters=Ja.parameters||{};Ja.parameters.docs=_(b({},Ja.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:uB,mdxComponentAnnotations:Ja},e(uy,null))});var dB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",TemplateSimple:js,TemplateFull:zs,Template:Ws,cardSimple:Fc,cardFull:Ec,card:Oc,default:Ja});const ni=t=>({components:{Checkbox:Ma},setup(){return{args:t}},template:`
  <div>
    <Checkbox v-bind="args" v-model="isChecked">
      <template #label>Checkbox label</template>
      <template #help-text>Basic help text</template>
    </Checkbox>
    <p style="margin-top: 30px">Checked: {{ isChecked }} </p>
  </div>`,data(){return{isChecked:!1}}});ni.parameters={docs:{source:{code:P`
        <div>
          <Checkbox v-model="isChecked">
            <template #label>Checkbox label</template>
            <template #help-text>Basic help text</template>
          </Checkbox>
          <p>Checked: {{ isChecked }} </p>
        </div>
      `}}};const pB={Template:ni},mB="wrapper";function dy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(mB,_(b(b({},pB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Checkbox",component:Ma,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Checkbox"),e("p",null,`Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
They may also be used as a way to have merchants indicate they agree to specific terms and services.`),e(V,{mdxType:"Canvas"},e(H,{story:ni,name:"Checkbox",mdxType:"Story"})),e(se,{story:"Checkbox",mdxType:"ArgsTable"}))}dy.isMDXComponent=!0;const py=ni;py.storyName="Checkbox";const en={title:"Components / Forms / Checkbox",component:Ma,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Template_"]},yB={Checkbox:"_Template_"};en.parameters=en.parameters||{};en.parameters.docs=_(b({},en.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:yB,mdxComponentAnnotations:en},e(dy,null))});var gB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ni,_Template_:py,default:en});const oi=t=>({components:{ChoiceList:qt},template:`
  <div>
    <ChoiceList
      name="singleChoiceList"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
    <p style="margin-top: 30px"> Value: {{ value }} </p>
  </div>
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});oi.parameters={docs:{source:{state:"close",code:P`
        <div>
          <ChoiceList
            name="singleChoiceList"
            v-model="value"
            :choices="choices"
          >
            Company name
          </ChoiceList>
          <p style="margin-top: 30px"> Value: {{ value }} </p>
        </div>\n
        data() {
          return {
            value: 'hidden',
            choices: [
              {label: 'Hidden', value: 'hidden'},
              {label: 'Optional', value: 'optional'},
              {label: 'Required', value: 'required'},
            ]
          };
        },
      `}}};const ii=t=>({components:{ChoiceList:qt},template:`
   <div>
    <ChoiceList
      name="errSingleChoiceList"
      v-model="value"
      error="Company name cannot be hidden at this time"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});ii.parameters={docs:{source:{state:"close",code:P`
      <div>
        <ChoiceList
          name="errSingleChoiceList"
          v-model="value"
          error="Company name cannot be hidden at this time"
          :choices="choices"
        >
          Company name
        </ChoiceList>
      </div>\n
      data() {
        return {
          value: 'hidden',
          choices: [
            {label: 'Hidden', value: 'hidden'},
            {label: 'Optional', value: 'optional'},
            {label: 'Required', value: 'required'},
          ],
        };
      },
      `}}};const si=t=>({components:{ChoiceList:qt},template:`
  <div>
    <ChoiceList
      name="multi"
      v-model="value"
      :allowMultiple="true"
      :choices="choices"
    >
      Company name
    </ChoiceList>
    <p style="margin-top: 30px"> Value: {{ value }} </p>
  </div>
  `,data(){return{value:["shipping"],choices:[{label:"Use the shipping address as the billing address by default",helpText:"Reduces the number of fields required to check out. The billing address can still be edited.",value:"shipping"},{label:"Require a confirmation step",helpText:"Customers must review their order details before purchasing.",value:"confirmation"}]}}});si.parameters={docs:{source:{state:"close",code:P`
        <div>
          <ChoiceList
            name="multi"
            v-model="value"
            :allowMultiple="true"
            :choices="choices"
          >
            Company name
          </ChoiceList>
          <p style="margin-top: 30px"> Value: {{ value }} </p>
        </div>\n
        data() {
          return {
            value: ['shipping'],
            choices: [
              {
                label: 'Use the shipping address as the billing address by default',
                helpText: 'Reduces the number of fields required to check out. The billing address can still be edited.',
                value: 'shipping',
              },
              {
                label: 'Require a confirmation step',
                helpText: 'Customers must review their order details before purchasing.',
                value: 'confirmation',
              },
            ]
          };
        },
      `}}};const li=(t,{argTypes:n})=>({components:{ChoiceList:qt},template:`
  <div>
    <ChoiceList
      name="singleChild"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:"<p>This is child content of Minimum quantity option</p>"}]}}});li.parameters={docs:{source:{state:"close",code:P`
      <div>
        <ChoiceList
          name="singleChild"
          v-model="value"
          :choices="choices"
        >
          Company name
        </ChoiceList>
      </div>\n
      data() {
        return {
          value: 'none',
          choices: [
            {label: 'None', value: 'none'},
            {label: 'Minimum purchase', value: 'minimum_purchase'},
            {
              label: 'Minimum quantity',
              value: 'minimum_quantity',
              renderChildren: '<p>This is child content of Minimum quantity option</p>',
            },
          ],
        };
      },
      `}}};const ri=(t,{argTypes:n})=>({components:{ChoiceList:qt},template:`
  <div>
    <ChoiceList
      name="renderChildWithConditional"
      v-model="selected"
      :choices="choices"
      @change="handleChange"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{selected:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:""}]}},methods:{handleChange(){this.choices[2].renderChildren=this.selected==="minimum_quantity"?"<p>This is child content of Minimum quantity option</p>":""}}});ri.parameters={docs:{source:{state:"close",code:P`
        <div>
          <ChoiceList
            name="renderChildWithConditional"
            v-model="selected"
            :choices="choices"
            @change="handleChange"
          >
            Company name
          </ChoiceList>
        </div>\n
        data() {
          return {
            selected: 'none',
            choices: [
              {label: 'None', value: 'none'},
              {label: 'Minimum purchase', value: 'minimum_purchase'},
              {
                label: 'Minimum quantity',
                value: 'minimum_quantity',
                renderChildren: '',
              },
            ],
          };
        },
        methods: {
          handleChange() {
            this.choices[2].renderChildren = this.selected === 'minimum_quantity'
              ? '<p>This is child content of Minimum quantity option</p>'
              : '';
          }
        },
      `}}};const ci=t=>({components:{ChoiceList:qt},setup(){return{args:t}},template:`
  <ChoiceList
    v-bind="args"
    v-model="selected"
    :choices="options"
  >
    Example choice list
  </ChoiceList>
  `,data(){return{selected:"hidden",options:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});ci.parameters={docs:{source:{code:P`
      <ChoiceList
        v-model="selected"
        :choices="options"
      >
        Example choice list
      </ChoiceList>\n
      data() {
        return {
          selected: 'hidden',
          options: [
            {label: 'Hidden', value: 'hidden'},
            {label: 'Optional', value: 'optional'},
            {label: 'Required', value: 'required'},
          ]
        };
      },
      `}}};const hB={singleChoiceList:oi,errorSingleChoiceList:ii,multiChoiceList:si,renderChildChoiceList:li,renderChildWithConditional:ri,Example:ci},bB="wrapper";function my(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(bB,_(b(b({},hB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Choice List",component:qt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Choice list"),e("p",null,`A choice list lets you create a list of grouped radio buttons or checkboxes.
Use this component if you need to group together a related list of interactive choices.`),e("br",null),e("br",null),e("h3",null,"Single choice list"),e("p",null,"Allows merchants to select one option from a list."),e("ul",null,e("li",{parentName:"ul"},"Make sure all options are an either/or choice.")),e(V,{mdxType:"Canvas"},e(H,{story:oi,name:"Single choice list",mdxType:"Story"})),e("h3",null,"Single choice list with error"),e("p",null,"Allows for accessible error handling by connecting the error message to the field with the error."),e(V,{mdxType:"Canvas"},e(H,{story:ii,name:"Single choice list with error",mdxType:"Story"})),e("h3",null,"Multi-choice list"),e("p",null,"Allows merchants to select multiple options from a list."),e("ul",null,e("li",{parentName:"ul"},"Avoid options that are an either/or choice.")),e(V,{mdxType:"Canvas"},e(H,{story:si,name:"Multi-choice list",mdxType:"Story"})),e("h3",null,"Single-choice or multi-choice list with children content (always rendered)"),e("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content will always be rendered. Works for both single-choice and multi-choice list.`),e(V,{mdxType:"Canvas"},e(H,{story:li,name:"Single-choice or multi-choice list with children content (always rendered)",mdxType:"Story"})),e("h3",null,"Single-choice or multi-choice list with children content (rendered only when selected)"),e("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list.`),e(V,{mdxType:"Canvas"},e(H,{story:ri,name:"Single-choice or multi-choice list with children content (rendered only when selected)",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{story:ci,name:"Example",height:"160px",mdxType:"Story"})),e(se,{story:"Example",mdxType:"ArgsTable"}))}my.isMDXComponent=!0;const yy=oi;yy.storyName="Single choice list";const gy=ii;gy.storyName="Single choice list with error";const hy=si;hy.storyName="Multi-choice list";const by=li;by.storyName="Single-choice or multi-choice list with children content (always rendered)";const fy=ri;fy.storyName="Single-choice or multi-choice list with children content (rendered only when selected)";const vy=ci;vy.storyName="Example";const tn={title:"Components / Forms / Choice List",component:qt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_singleChoiceList_","_errorSingleChoiceList_","_multiChoiceList_","_renderChildChoiceList_","_renderChildWithConditional_","_Example_"]},fB={"Single choice list":"_singleChoiceList_","Single choice list with error":"_errorSingleChoiceList_","Multi-choice list":"_multiChoiceList_","Single-choice or multi-choice list with children content (always rendered)":"_renderChildChoiceList_","Single-choice or multi-choice list with children content (rendered only when selected)":"_renderChildWithConditional_",Example:"_Example_"};tn.parameters=tn.parameters||{};tn.parameters.docs=_(b({},tn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:fB,mdxComponentAnnotations:tn},e(my,null))});var vB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",singleChoiceList:oi,errorSingleChoiceList:ii,multiChoiceList:si,renderChildChoiceList:li,renderChildWithConditional:ri,Example:ci,_singleChoiceList_:yy,_errorSingleChoiceList_:gy,_multiChoiceList_:hy,_renderChildChoiceList_:by,_renderChildWithConditional_:fy,_Example_:vy,default:tn}),gd=Object.freeze,xB=Object.defineProperty,xy=(t,n)=>gd(xB(t,"raw",{value:gd(n||t.slice())})),hd,bd;const Gs=t=>({components:{Card:Ye,Collapsible:io,Stack:qe,Button:ge,TextContainer:ut,Link:ga},setup(){const n=k(!0);return{args:t,open:n,handleToggle:()=>{n.value=!n.value}}},template:`
    <Card sectioned>
      <Stack vertical>
        <Button
          @click="handleToggle"
          :ariaExpanded="open"
          ariaControls="basic-collapsible"
        >
          Toggle
        </Button>
        <Collapsible
          v-bind="args"
          :open="open"
          id="basic-collapsible"
          :transition="{duration: '500ms', timingFunction: 'ease-in-out'}"
          expandOnPrint
        >
          <TextContainer>
            <p>
              Your mailing list lets you contact customers or visitors who
              have shown an interest in your store. Reach out to them with
              exclusive offers or updates about your products.
            </p>
            <Link url="#">Test link</Link>
          </TextContainer>
        </Collapsible>
      </Stack>
    </Card>
  `}),TB={Template:Gs},SB="wrapper";function Ty(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(SB,_(b(b({},TB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Behavior / Collapsible",component:io,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},mdxType:"Meta"}),e("h1",null,"Collapsible"),e("p",null,"The collapsible component is used to put long sections of information under a block that merchants can expand or collapse."),e(V,{mdxType:"Canvas"},e(H,{name:"Collapsible",height:"200px",parameters:{docs:{source:{state:"close",code:P(hd||(hd=xy([`
            <Card sectioned>
              <Stack vertical>
                <Button
                  @click="handleToggle"
                  :ariaExpanded="open"
                  ariaControls="basic-collapsible"
                >
                  Toggle
                </Button>
                <Collapsible
                  :open="open"
                  id="basic-collapsible"
                  :transition="{duration: '500ms', timingFunction: 'ease-in-out'}"
                  expandOnPrint
                >
                  <TextContainer>
                    <p>
                      Your mailing list lets you contact customers or visitors who
                      have shown an interest in your store. Reach out to them with
                      exclusive offers or updates about your products.
                    </p>
                    <Link url="#">Test link</Link>
                  </TextContainer>
                </Collapsible>
              </Stack>
            </Card>

            <script setup>
              // import...
              const open = ref(true);
              const handleToggle = () => {
                open.value = !open.value;
              };
            <\/script>
          `],[`
            <Card sectioned>
              <Stack vertical>
                <Button
                  @click="handleToggle"
                  :ariaExpanded="open"
                  ariaControls="basic-collapsible"
                >
                  Toggle
                </Button>
                <Collapsible
                  :open="open"
                  id="basic-collapsible"
                  :transition="{duration: '500ms', timingFunction: 'ease-in-out'}"
                  expandOnPrint
                >
                  <TextContainer>
                    <p>
                      Your mailing list lets you contact customers or visitors who
                      have shown an interest in your store. Reach out to them with
                      exclusive offers or updates about your products.
                    </p>
                    <Link url="#">Test link</Link>
                  </TextContainer>
                </Collapsible>
              </Stack>
            </Card>\\n
            <script setup>
              // import...
              const open = ref(true);
              const handleToggle = () => {
                open.value = !open.value;
              };
            <\/script>
          `])))}}},mdxType:"Story"},Gs.bind({}))),e(se,{story:"Collapsible",mdxType:"ArgsTable"}))}Ty.isMDXComponent=!0;const qc=Gs.bind({});qc.storyName="Collapsible";qc.parameters={storySource:{source:`args => ({
  components: {
    Card,
    Collapsible,
    Stack,
    Button,
    TextContainer,
    Link
  },

  setup() {
    const open = ref(true);

    const handleToggle = () => {
      open.value = !open.value;
    };

    return {
      args,
      open,
      handleToggle
    };
  },

  template: \`
    <Card sectioned>
      <Stack vertical>
        <Button
          @click="handleToggle"
          :ariaExpanded="open"
          ariaControls="basic-collapsible"
        >
          Toggle
        </Button>
        <Collapsible
          v-bind="args"
          :open="open"
          id="basic-collapsible"
          :transition="{duration: '500ms', timingFunction: 'ease-in-out'}"
          expandOnPrint
        >
          <TextContainer>
            <p>
              Your mailing list lets you contact customers or visitors who
              have shown an interest in your store. Reach out to them with
              exclusive offers or updates about your products.
            </p>
            <Link url="#">Test link</Link>
          </TextContainer>
        </Collapsible>
      </Stack>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P(bd||(bd=xy([`
            <Card sectioned>
              <Stack vertical>
                <Button
                  @click="handleToggle"
                  :ariaExpanded="open"
                  ariaControls="basic-collapsible"
                >
                  Toggle
                </Button>
                <Collapsible
                  :open="open"
                  id="basic-collapsible"
                  :transition="{duration: '500ms', timingFunction: 'ease-in-out'}"
                  expandOnPrint
                >
                  <TextContainer>
                    <p>
                      Your mailing list lets you contact customers or visitors who
                      have shown an interest in your store. Reach out to them with
                      exclusive offers or updates about your products.
                    </p>
                    <Link url="#">Test link</Link>
                  </TextContainer>
                </Collapsible>
              </Stack>
            </Card>

            <script setup>
              // import...
              const open = ref(true);
              const handleToggle = () => {
                open.value = !open.value;
              };
            <\/script>
          `],[`
            <Card sectioned>
              <Stack vertical>
                <Button
                  @click="handleToggle"
                  :ariaExpanded="open"
                  ariaControls="basic-collapsible"
                >
                  Toggle
                </Button>
                <Collapsible
                  :open="open"
                  id="basic-collapsible"
                  :transition="{duration: '500ms', timingFunction: 'ease-in-out'}"
                  expandOnPrint
                >
                  <TextContainer>
                    <p>
                      Your mailing list lets you contact customers or visitors who
                      have shown an interest in your store. Reach out to them with
                      exclusive offers or updates about your products.
                    </p>
                    <Link url="#">Test link</Link>
                  </TextContainer>
                </Collapsible>
              </Stack>
            </Card>\\n
            <script setup>
              // import...
              const open = ref(true);
              const handleToggle = () => {
                open.value = !open.value;
              };
            <\/script>
          `])))}}};const an={title:"Components / Behavior / Collapsible",component:io,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},includeStories:["collapsible"]},CB={Collapsible:"collapsible"};an.parameters=an.parameters||{};an.parameters.docs=_(b({},an.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:CB,mdxComponentAnnotations:an},e(Ty,null))});var AB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Gs,collapsible:qc,default:an});const Xs=t=>({components:{ColorPicker:ys},setup(){return{color:k("#000000"),args:t}},template:P`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>`}),kB={Template:Xs},NB="wrapper";function Sy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(NB,_(b(b({},kB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Color Picker",component:ys,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Color picker"),e("p",null,`The color picker is used to let merchants select a color visually.
For example, merchants use the color picker to customize the accent color of the email templates for their shop.`),e(V,{mdxType:"Canvas"},e(H,{name:"Color Picker",height:"210px",parameters:{docs:{source:{code:P`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}},mdxType:"Story"},Xs.bind({}))),e(se,{story:"Color Picker",mdxType:"ArgsTable"}))}Sy.isMDXComponent=!0;const Rc=Xs.bind({});Rc.storyName="Color Picker";Rc.parameters={storySource:{source:`args => ({
  components: {
    ColorPicker
  },

  setup() {
    const color = ref('#000000');
    return {
      color,
      args
    };
  },

  template: dedent\`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>\`
})`},docs:{source:{code:P`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}};const nn={title:"Components / Forms / Color Picker",component:ys,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},includeStories:["colorPicker"]},LB={"Color Picker":"colorPicker"};nn.parameters=nn.parameters||{};nn.parameters.docs=_(b({},nn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:LB,mdxComponentAnnotations:nn},e(Sy,null))});var wB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Xs,colorPicker:Rc,default:nn});const ui=t=>({components:{Combobox:_a,Listbox:Nt,ListboxOption:Bt,ComboboxTextField:Uo,Icon:re,Scrollable:Ot},template:`
  <Combobox>
    <template #activator>
      <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
        <template slot="prefix">
          <Icon :source="searchIcon" color="inkLighter"></Icon>
        </template>
      </ComboboxTextField>
    </template>
    <Listbox @select="handleOptionSelected">
      <ListboxOption
        v-for="option, index in filteredOptions"
        :key="index"
        :value="option.value"
        :selected="isOptionSelected(option, index)"
      >
        {{ option.label }}
      </ListboxOption>
    </Listbox>
  </Combobox>`,data(){return{searchIcon:Oo,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"},{value:"polaris",label:"Polaris"},{value:"custom",label:"Custom"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(n=>n.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(n){this.searchValue=n},isOptionSelected(n,o){return this.searchValue?this.searchValue===n.value:o===0}}});ui.parameters={docs:{source:{state:"close",code:P`
        <Combobox>
          <template #activator>
            <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
              <template #prefix>
                <Icon :source="searchIcon" color="inkLighter"></Icon>
              </template>
            </ComboboxTextField>
          </template>
          <Listbox @select="handleOptionSelected">
            <ListboxOption
              v-for="option, index in filteredOptions"
              :key="index"
              :value="option.value"
              :selected="isOptionSelected(option, index)"
            >
              {{ option.label }}
            </ListboxOption>
          </Listbox>
        </Combobox>,\n
        data() {
          return {
            searchIcon: SearchMinor,
            options: [
              {value: 'rustic', label: 'Rustic'},
              {value: 'antique', label: 'Antique'},
              {value: 'vinyl', label: 'Vinyl'},
              {value: 'vintage', label: 'Vintage'},
              {value: 'refurbished', label: 'Refurbished'},
              {value: 'polaris', label: 'Polaris'},
              {value: 'custom', label: 'Custom'},
            ],
            searchValue: '',
          };
        },
        computed: {
          filteredOptions() {
            return this.searchValue
              ? this.options
                .filter(el => el.value.includes(this.searchValue))
              : this.options;
          }
        },
        methods: {
          handleOptionSelected(option) {
            this.searchValue = option;
          },
          isOptionSelected(option, index) {
            if (this.searchValue) return this.searchValue === option.value;
            return index === 0;
          }
        },
      `}}};const di=t=>({components:{Combobox:_a,Listbox:Nt,ListboxOption:Bt,ComboboxTextField:Uo,Icon:re,TextContainer:ut,Tag:ei,Stack:qe},template:`
  <Combobox :allowMultiple="true">
    <template #activator>
      <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
        <template #prefix>
          <Icon :source="searchIcon" color="inkLighter"></Icon>
        </template>
      </ComboboxTextField>
    </template>
    <Listbox @select="handleOptionSelected">
      <ListboxOption
        v-for="option, index in filteredOptions"
        :key="index"
        :value="option.value"
        :selected="selectedOptions.includes(option.value)"
      >
        {{ option.label }}
      </ListboxOption>
    </Listbox>
  </Combobox>
  <TextContainer>
    <p> Tag component display options in selectedOptions</p>
    <Stack>
      <Tag
        :style="{marginRight: '10px'}"
        v-for="option, index in selectedOptions"
        :key="index"
        @remove="handleRemoveTag(option)"
      >
        {{ option }}
      </Tag>
    </Stack>
  </TextContainer>
  `,data(){return{searchIcon:Oo,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"},{value:"polaris",label:"Polaris"},{value:"custom",label:"Custom"}],searchValue:"",selectedOptions:["rustic","antique"]}},computed:{filteredOptions(){return this.searchValue?this.options.filter(n=>n.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(n){this.selectedOptions.includes(n)?this.selectedOptions=this.selectedOptions.filter(o=>o!==n):this.selectedOptions.push(n)},handleRemoveTag(n){this.selectedOptions=this.selectedOptions.filter(o=>o!==n)}}});di.parameters={docs:{source:{state:"close",code:P`
      <Combobox :allowMultiple="true">
        <template #activator>
          <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
            <template #prefix>
              <Icon :source="searchIcon" color="inkLighter"></Icon>
            </template>
          </ComboboxTextField>
        </template>
        <Listbox @select="handleOptionSelected">
          <ListboxOption
            v-for="option, index in filteredOptions"
            :key="index"
            :value="option.value"
            :selected="selectedOptions.includes(option.value)"
          >
            {{ option.label }}
          </ListboxOption>
        </Listbox>
      </Combobox>
      <TextContainer>
        <p> Tag component display options in selectedOptions</p>
        <Stack>
          <Tag
            v-for="option, index in selectedOptions"
            :key="index"
            @remove="handleRemoveTag(option)"
          >
            {{ option }}
          </Tag>
        </Stack>
      </TextContainer>\n
      data() {
        return {
          searchIcon: SearchMinor,
          options: [
            {value: 'rustic', label: 'Rustic'},
            {value: 'antique', label: 'Antique'},
            {value: 'vinyl', label: 'Vinyl'},
            {value: 'vintage', label: 'Vintage'},
            {value: 'refurbished', label: 'Refurbished'},
            {value: 'polaris', label: 'Polaris'},
            {value: 'custom', label: 'Custom'},
          ],
          searchValue: '',
          selectedOptions: ['rustic', 'antique'],
        };
      },
      computed: {
        filteredOptions() {
          return this.searchValue
            ? this.options
              .filter(el => el.value.includes(this.searchValue))
            : this.options;
        }
      },
      methods: {
        handleOptionSelected(option) {
          if (this.selectedOptions.includes(option)) {
            this.selectedOptions = this.selectedOptions.filter(el => el !== option);
          }
          else {
            this.selectedOptions.push(option);
          }
        },
        handleRemoveTag(optionVal) {
          this.selectedOptions = this.selectedOptions.filter(el => el !== optionVal);
        }
      },
      `}}};const pi=t=>({components:{Combobox:_a,Listbox:Nt,ListboxOption:Bt,ComboboxTextField:Uo,Icon:re,ListboxLoading:Wo},template:`
  <Combobox>
    <template #activator>
      <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
        <template #prefix>
          <Icon :source="searchIcon" color="inkLighter"></Icon>
        </template>
      </ComboboxTextField>
    </template>
    <Listbox>
      <ListboxLoading accessibilityLabel="Loading listbox"/>
    </Listbox>
  </Combobox>
  `,data(){return{searchIcon:Oo,searchValue:""}}});pi.parameters={docs:{source:{state:"close",code:P`
        <Combobox>
          <template #activator>
            <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
              <template #prefix>
                <Icon :source="searchIcon" color="inkLighter"></Icon>
              </template>
            </ComboboxTextField>
          </template>
          <Listbox>
            <ListboxLoading accessibilityLabel="Loading listbox"/>
          </Listbox>
        </Combobox>\n
        data() {
          return {
            searchIcon: SearchMinor,
            searchValue: '',
          };
        },
      `}}};const mi=t=>({components:{Combobox:_a,Listbox:Nt,ListboxOption:Bt,ComboboxTextField:Uo,Icon:re},template:`
  <Combobox>
    <template #activator>
      <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
        <template #prefix>
          <Icon :source="searchIcon" color="inkLighter"></Icon>
        </template>
      </ComboboxTextField>
    </template>
    <Listbox @select="handleOptionSelected">
      <ListboxOption
        v-for="option, index in filteredOptions"
        :key="index"
        :value="option.value"
        :selected="isOptionSelected(option, index)"
      >
        {{ option.label }}
      </ListboxOption>
    </Listbox>
  </Combobox>`,data(){return{searchIcon:Oo,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"},{value:"polaris",label:"Polaris"},{value:"custom",label:"Custom"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(n=>n.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(n){this.searchValue=n},isOptionSelected(n,o){return this.searchValue?this.searchValue===n.value:o===0}}});mi.parameters={docs:{source:{code:P`
        <Combobox>
          <template #activator>
            <ComboboxTextField autoComplete="off" :labelHidden="true" v-model="searchValue" placeholder="Search customer">
              <template #prefix>
                <Icon :source="searchIcon" color="inkLighter"></Icon>
              </template>
            </ComboboxTextField>
          </template>
          <Listbox @select="handleOptionSelected">
            <ListboxOption
              v-for="option, index in filteredOptions"
              :key="index"
              :value="option.value"
              :selected="isOptionSelected(option, index)"
            >
              {{ option.label }}
            </ListboxOption>
          </Listbox>
        </Combobox>\n
        import {
          Combobox,
          Listbox,
          ListboxOption,
          ComboboxTextField,
          Icon,
        } from '@/polaris-vue';
        import SearchMinor from '@icons/SearchMinor.svg';\n
        components: {
          Combobox,
          Listbox,
          ListboxOption,
          ComboboxTextField,
          Icon,
        },
        data() {
            return {
              searchIcon: SearchMinor,
              options: [
                {value: 'rustic', label: 'Rustic'},
                {value: 'antique', label: 'Antique'},
                {value: 'vinyl', label: 'Vinyl'},
                {value: 'vintage', label: 'Vintage'},
                {value: 'refurbished', label: 'Refurbished'},
                {value: 'polaris', label: 'Polaris'},
                {value: 'custom', label: 'Custom'},
              ],
              searchValue: '',
            };
          },
          computed: {
            filteredOptions() {
              return this.searchValue
                ? this.options
                  .filter(el => el.value.includes(this.searchValue))
                : this.options;
            }
          },
          methods: {
            handleOptionSelected(option) {
              this.searchValue = option;
            },
            isOptionSelected(option, index) {
              if (this.searchValue) return this.searchValue === option.value;
              return index === 0;
            }
          },
      `}}};const PB={BasicAutocomplete:ui,MultiTagAutocomplete:di,LoadingAutoComplete:pi,ExampleAutoComplete:mi},MB="wrapper";function Cy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(MB,_(b(b({},PB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Combobox",component:_a,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"Combobox"),e("p",null,"The Combobox component implements part of the ",e("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"},"Aria 1.2 combobox"),` specs on a TextField and a popover containing a Listbox.
Like Autocomplete, Combobox allows merchants to quickly search through and select from large collections of options.`),e("br",null),e("br",null),e("h3",null,"Basic autocomplete"),e("p",null,"Use to help merchants complete text input quickly from a list of options."),e(V,{mdxType:"Canvas"},e(H,{story:ui,name:"Basic Autocomplete",height:"400px",inline:!1,mdxType:"Story"})),e("h3",null,"Multiple tags autocomplete"),e("p",null,"Use to help merchants select multiple options from a list curated by the text input."),e(V,{mdxType:"Canvas"},e(H,{story:di,name:"Multiple tags autocomplete",height:"400px",inline:!1,mdxType:"Story"})),e("h3",null,"Autocomplete with loading"),e("p",null,"Use to indicate loading state to merchants while option data is processing."),e(V,{mdxType:"Canvas"},e(H,{story:pi,name:"Autocomplete with loading",height:"200px",inline:!1,mdxType:"Story"})),e("h3",null,"Example"),e("font",{color:"red"}," Can not test props on this component due to inline Story. Try it on your own project. "),e(V,{mdxType:"Canvas"},e(H,{story:mi,name:"Example",height:"400px",inline:!1,mdxType:"Story"})),e(se,{story:"Example",mdxType:"ArgsTable"}))}Cy.isMDXComponent=!0;const Ay=ui;Ay.storyName="Basic Autocomplete";const ky=di;ky.storyName="Multiple tags autocomplete";const Ny=pi;Ny.storyName="Autocomplete with loading";const Ly=mi;Ly.storyName="Example";const on={title:"Components / Forms / Combobox",component:_a,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_BasicAutocomplete_","_MultiTagAutocomplete_","_LoadingAutoComplete_","_ExampleAutoComplete_"]},_B={"Basic Autocomplete":"_BasicAutocomplete_","Multiple tags autocomplete":"_MultiTagAutocomplete_","Autocomplete with loading":"_LoadingAutoComplete_",Example:"_ExampleAutoComplete_"};on.parameters=on.parameters||{};on.parameters.docs=_(b({},on.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:_B,mdxComponentAnnotations:on},e(Cy,null))});var DB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicAutocomplete:ui,MultiTagAutocomplete:di,LoadingAutoComplete:pi,ExampleAutoComplete:mi,_BasicAutocomplete_:Ay,_MultiTagAutocomplete_:ky,_LoadingAutoComplete_:Ny,_ExampleAutoComplete_:Ly,default:on});const Ks=t=>({components:{Frame:ta,ContextualSaveBar:jo,Button:ge},setup(){return{discardHandle:()=>{console.log("nothing saved")},saveForm:()=>{alert("Saved")},CancelSmallMinor:os}},template:`
    <Frame>
      <ContextualSaveBar
        alignContentFlush
        message="Unsaved changes"
        :saveAction="{ onAction: saveForm }"
        :discardAction="{ onAction: discardHandle, discardConfirmationModal: true }"
      >
        <template #secondaryMenu>
          <Button :icon="CancelSmallMinor">Clear</Button>
        </template>
      </ContextualSaveBar>
    </Frame>
  `}),IB={Template:Ks},BB="wrapper";function wy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(BB,_(b(b({},IB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Contextual save bar",component:jo,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Contextual save bar"),e("p",null,"The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work."),e(V,{mdxType:"Canvas"},e(H,{name:"Contextual save bar",inline:!1,height:"300px",parameters:{docs:{source:{code:P`
            <Frame>
              <ContextualSaveBar
                alignContentFlush
                message="Unsaved changes"
                :saveAction="{ onAction: saveForm }"
                :discardAction="{ onAction: discardHandle, discardConfirmationModal: true }"
              >
                <template #secondaryMenu>
                  <Button :icon="CancelSmallMinor">Clear</Button>
                </template>
              </ContextualSaveBar>
            </Frame>\n
            setup() {
              const discardHandle = () => {
                console.log('nothing saved');
              }
              const saveForm = () => {
                alert('Saved');
              }
              return { discardHandle, saveForm, CancelSmallMinor };
            }
          `}}},mdxType:"Story"},Ks.bind({}))),e(se,{story:"Contextual save bar",mdxType:"ArgsTable"}))}wy.isMDXComponent=!0;const Vc=Ks.bind({});Vc.storyName="Contextual save bar";Vc.parameters={storySource:{source:`args => ({
  components: {
    Frame,
    ContextualSaveBar,
    Button
  },

  setup() {
    const discardHandle = () => {
      console.log('nothing saved');
    };

    const saveForm = () => {
      alert('Saved');
    };

    return {
      discardHandle,
      saveForm,
      CancelSmallMinor
    };
  },

  template: \`
    <Frame>
      <ContextualSaveBar
        alignContentFlush
        message="Unsaved changes"
        :saveAction="{ onAction: saveForm }"
        :discardAction="{ onAction: discardHandle, discardConfirmationModal: true }"
      >
        <template #secondaryMenu>
          <Button :icon="CancelSmallMinor">Clear</Button>
        </template>
      </ContextualSaveBar>
    </Frame>
  \`
})`},docs:{source:{code:P`
            <Frame>
              <ContextualSaveBar
                alignContentFlush
                message="Unsaved changes"
                :saveAction="{ onAction: saveForm }"
                :discardAction="{ onAction: discardHandle, discardConfirmationModal: true }"
              >
                <template #secondaryMenu>
                  <Button :icon="CancelSmallMinor">Clear</Button>
                </template>
              </ContextualSaveBar>
            </Frame>\n
            setup() {
              const discardHandle = () => {
                console.log('nothing saved');
              }
              const saveForm = () => {
                alert('Saved');
              }
              return { discardHandle, saveForm, CancelSmallMinor };
            }
          `}}};const sn={title:"Components / Forms / Contextual save bar",component:jo,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},includeStories:["contextualSaveBar"]},$B={"Contextual save bar":"contextualSaveBar"};sn.parameters=sn.parameters||{};sn.parameters.docs=_(b({},sn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:$B,mdxComponentAnnotations:sn},e(wy,null))});var FB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ks,contextualSaveBar:Vc,default:sn});const Ys=t=>({components:{AppProvider:Ro,CustomProperties:ea,Card:Ye,TextContainer:ut,CardSection:pa,List:Da,ListItem:zo},setup(){return{args:t}},template:P`
  <AppProvider>
    <TextContainer>
      <Card
        title="Shipment 1234"
        :secondaryFooterActions="[{content: 'Edit shipment'}]"
        :primaryFooterAction="{content: 'Add tracking number'}"
      >
        <CardSection title="Items">
          <List>
            <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
            <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
          </List>
        </CardSection>
      </Card>
      <CustomProperties color-scheme="dark">
        <Card
          title="Shipment 1234"
          :secondaryFooterActions="[{content: 'Edit shipment'}]"
          :primaryFooterAction="{content: 'Add tracking number'}"
        >
          <CardSection title="Items">
            <List>
              <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
              <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
            </List>
          </CardSection>
        </Card>
      </CustomProperties>
    </TextContainer>
  </AppProvider>
  `}),EB={Template:Ys},OB="wrapper";function Py(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(OB,_(b(b({},EB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / CustomProperties",component:ea,argTypes:{default:{table:{disable:!0}},as:{description:"Element used for the root node.",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Determines what color scheme is applied to child content.",table:{type:{summary:"light | dark"},defaultValue:{summary:"light"}},control:{type:"select",options:["light","dark"]}}},mdxType:"Meta"}),e("h1",null,"CustomProperties"),e("p",null,"Use the custom properties component to share global theme settings throughout the hierarchy of your application. Custom properties is included by default as a child of the ",e("a",{parentName:"p",href:"?path=/docs/components-structure-app-provider"},"app provider component")," but can be used independently to apply a base color scheme to its children."),e(V,{mdxType:"Canvas"},e(H,{name:"CustomProperties",height:"500px",inline:!1,parameters:{docs:{source:{code:P`
          <AppProvider>
            <TextContainer>
              <Card
                title="Shipment 1234"
                :secondaryFooterActions="[{content: 'Edit shipment'}]"
                :primaryFooterAction="{content: 'Add tracking number'}"
              >
                <CardSection title="Items">
                  <List>
                    <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
                    <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
                  </List>
                </CardSection>
              </Card>
              <CustomProperties color-scheme="dark">
                <Card
                  title="Shipment 1234"
                  :secondaryFooterActions="[{content: 'Edit shipment'}]"
                  :primaryFooterAction="{content: 'Add tracking number'}"
                >
                  <CardSection title="Items">
                    <List>
                      <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
                      <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
                    </List>
                  </CardSection>
                </Card>
              </CustomProperties>
            </TextContainer>
          </AppProvider>
            `}}},mdxType:"Story"},Ys.bind({}))),e(se,{story:"CustomProperties",mdxType:"ArgsTable"}))}Py.isMDXComponent=!0;const Hc=Ys.bind({});Hc.storyName="CustomProperties";Hc.parameters={storySource:{source:`args => ({
  components: {
    AppProvider,
    CustomProperties,
    Card,
    TextContainer,
    CardSection,
    List,
    ListItem
  },

  setup() {
    return {
      args
    };
  },

  template: dedent\`
  <AppProvider>
    <TextContainer>
      <Card
        title="Shipment 1234"
        :secondaryFooterActions="[{content: 'Edit shipment'}]"
        :primaryFooterAction="{content: 'Add tracking number'}"
      >
        <CardSection title="Items">
          <List>
            <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
            <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
          </List>
        </CardSection>
      </Card>
      <CustomProperties color-scheme="dark">
        <Card
          title="Shipment 1234"
          :secondaryFooterActions="[{content: 'Edit shipment'}]"
          :primaryFooterAction="{content: 'Add tracking number'}"
        >
          <CardSection title="Items">
            <List>
              <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
              <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
            </List>
          </CardSection>
        </Card>
      </CustomProperties>
    </TextContainer>
  </AppProvider>
  \`
})`},docs:{source:{code:P`
          <AppProvider>
            <TextContainer>
              <Card
                title="Shipment 1234"
                :secondaryFooterActions="[{content: 'Edit shipment'}]"
                :primaryFooterAction="{content: 'Add tracking number'}"
              >
                <CardSection title="Items">
                  <List>
                    <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
                    <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
                  </List>
                </CardSection>
              </Card>
              <CustomProperties color-scheme="dark">
                <Card
                  title="Shipment 1234"
                  :secondaryFooterActions="[{content: 'Edit shipment'}]"
                  :primaryFooterAction="{content: 'Add tracking number'}"
                >
                  <CardSection title="Items">
                    <List>
                      <ListItem>1 &times; Oasis Glass, 4-Pack</ListItem>
                      <ListItem>1 &times; Anubis Cup, 2-Pack</ListItem>
                    </List>
                  </CardSection>
                </Card>
              </CustomProperties>
            </TextContainer>
          </AppProvider>
            `}}};const ln={title:"Components / Structure / CustomProperties",component:ea,argTypes:{default:{table:{disable:!0}},as:{description:"Element used for the root node.",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Determines what color scheme is applied to child content.",table:{type:{summary:"light | dark"},defaultValue:{summary:"light"}},control:{type:"select",options:["light","dark"]}}},includeStories:["customProperties"]},qB={CustomProperties:"customProperties"};ln.parameters=ln.parameters||{};ln.parameters.docs=_(b({},ln.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:qB,mdxComponentAnnotations:ln},e(Py,null))});var RB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ys,customProperties:Hc,default:ln});const Zs=t=>({components:{DatePicker:hs},setup(){const n=k(t.selectedDate),o=Wi({month:t.month,year:t.year});return{args:t,selectedDate:n,pickerView:o,handleChange:r=>{console.log(r)},handleMonthChange:({month:r,year:u})=>{o.month=r,o.year=u}}},template:P`<div>
  <DatePicker
    v-bind="args"
    :disableDatesBefore="new Date(args.disableDatesBefore)"
    :disableDatesAfter="new Date(args.disableDatesAfter)"
    @change="handleChange"
    @month-change="handleMonthChange"
    :month="pickerView.month"
    :year="pickerView.year"
    v-model="selectedDate"
  />
  <br/>
  <span><strong>Output:</strong> {{ selectedDate }}</span>
  </div>`}),VB={Template:Zs},HB="wrapper";function My(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(HB,_(b(b({},VB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Date Picker",component:hs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{table:{defaultValue:{summary:!1}}},multiMonth:{table:{defaultValue:{summary:!1}}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},mdxType:"Meta"}),e("h1",null,"Date picker"),e("p",null,"Date pickers let merchants choose dates from a visual calendar that's consistently applied wherever dates need to be selected across Shopify."),e(V,{mdxType:"Canvas"},e(H,{name:"Date Picker",height:"320px",args:{selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0},parameters:{docs:{source:{code:P`
            <DatePicker
              v-model="selectedDate"
              :month="pickerView.month"
              :year="pickerView.year"
              @change="handleChange"
              @month-change="handleMonthChange"
            />\n
            setup() {
              const selectedDate = ref({
                start: new Date('2022/01/16'),
                end: new Date('2022/01/19'),
              });
              const pickerView = reactive({
                month: 0,
                year: 2022,
              });
              const handleChange = (date) => {
                console.log(date);
              };
              const handleMonthChange = ({ month, year }) => {
                pickerView.month = month;
                pickerView.year = year;
              };
              return { selectedDate, pickerView, handleChange, handleMonthChange };
            },
          `}}},mdxType:"Story"},Zs.bind({}))),e(se,{story:"Date Picker",mdxType:"ArgsTable"}))}My.isMDXComponent=!0;const Qs=Zs.bind({});Qs.storyName="Date Picker";Qs.args={selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0};Qs.parameters={storySource:{source:`args => ({
  components: {
    DatePicker
  },

  setup() {
    const selectedDate = ref(args.selectedDate);
    const pickerView = reactive({
      month: args.month,
      year: args.year
    });

    const handleChange = date => {
      console.log(date);
    };

    const handleMonthChange = ({
      month,
      year
    }) => {
      pickerView.month = month;
      pickerView.year = year;
    };

    return {
      args,
      selectedDate,
      pickerView,
      handleChange,
      handleMonthChange
    };
  },

  template: dedent\`<div>
  <DatePicker
    v-bind="args"
    :disableDatesBefore="new Date(args.disableDatesBefore)"
    :disableDatesAfter="new Date(args.disableDatesAfter)"
    @change="handleChange"
    @month-change="handleMonthChange"
    :month="pickerView.month"
    :year="pickerView.year"
    v-model="selectedDate"
  />
  <br/>
  <span><strong>Output:</strong> {{ selectedDate }}</span>
  </div>\`
})`},docs:{source:{code:P`
            <DatePicker
              v-model="selectedDate"
              :month="pickerView.month"
              :year="pickerView.year"
              @change="handleChange"
              @month-change="handleMonthChange"
            />\n
            setup() {
              const selectedDate = ref({
                start: new Date('2022/01/16'),
                end: new Date('2022/01/19'),
              });
              const pickerView = reactive({
                month: 0,
                year: 2022,
              });
              const handleChange = (date) => {
                console.log(date);
              };
              const handleMonthChange = ({ month, year }) => {
                pickerView.month = month;
                pickerView.year = year;
              };
              return { selectedDate, pickerView, handleChange, handleMonthChange };
            },
          `}}};const rn={title:"Components / Forms / Date Picker",component:hs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{table:{defaultValue:{summary:!1}}},multiMonth:{table:{defaultValue:{summary:!1}}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},includeStories:["datePicker"]},UB={"Date Picker":"datePicker"};rn.parameters=rn.parameters||{};rn.parameters.docs=_(b({},rn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:UB,mdxComponentAnnotations:rn},e(My,null))});var jB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zs,datePicker:Qs,default:rn});const Js=t=>({components:{DescriptionList:bs,Dt:om,Dd:im},setup(){return{args:t}},template:`<DescriptionList v-bind="args">
    <Dt>Logistics</Dt>
    <Dd>
      The management of products or other resources as they travel between a point of origin and a destination.
    </Dd>
    <Dt>Sole proprietorship</Dt>
    <Dd>
      A business structure where a single individual both owns and runs the company.
    </Dd>
    <Dt>Discount code</Dt>
    <Dd>
      A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.
    </Dd>
  </DescriptionList>`}),zB={Template:Js},WB="wrapper";function _y(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(WB,_(b(b({},zB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Lists and tables  / Description List",component:bs,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Description List"),e("p",null,`Description lists are a way to organize and explain related information.
They're particularly useful when you need to list and define terms such as in a glossary.`),e("font",{color:"#FF7900"},e("strong",null,"Warning:"))," Use component name as case-sensitive (",e("code",null,"<Dt>")," & ",e("code",null,"<Dd>"),") to prevent conflict with ",e("code",null,"<dt>")," ",e("code",null,"<dd>")," HTML element.",e(V,{mdxType:"Canvas"},e(H,{name:"Description List",height:"60px",parameters:{docs:{source:{code:P`
            <DescriptionList>
              <Dt>Logistics</Dt>
              <Dd>
                The management of products or other resources as they travel between a point of origin and a destination.
              </Dd>
              <Dt>Sole proprietorship</Dt>
              <Dd>
                A business structure where a single individual both owns and runs the company.
              </Dd>
              <Dt>Discount code</Dt>
              <Dd>
                A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.
              </Dd>
            </DescriptionList>
          `}}},mdxType:"Story"},Js.bind({}))),e(se,{story:"Description List",mdxType:"ArgsTable"}))}_y.isMDXComponent=!0;const Uc=Js.bind({});Uc.storyName="Description List";Uc.parameters={storySource:{source:`args => ({
  components: {
    DescriptionList,
    Dt,
    Dd
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DescriptionList v-bind="args">
    <Dt>Logistics</Dt>
    <Dd>
      The management of products or other resources as they travel between a point of origin and a destination.
    </Dd>
    <Dt>Sole proprietorship</Dt>
    <Dd>
      A business structure where a single individual both owns and runs the company.
    </Dd>
    <Dt>Discount code</Dt>
    <Dd>
      A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.
    </Dd>
  </DescriptionList>\`
})`},docs:{source:{code:P`
            <DescriptionList>
              <Dt>Logistics</Dt>
              <Dd>
                The management of products or other resources as they travel between a point of origin and a destination.
              </Dd>
              <Dt>Sole proprietorship</Dt>
              <Dd>
                A business structure where a single individual both owns and runs the company.
              </Dd>
              <Dt>Discount code</Dt>
              <Dd>
                A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.
              </Dd>
            </DescriptionList>
          `}}};const cn={title:"Components / Lists and tables  / Description List",component:bs,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["descriptionList"]},GB={"Description List":"descriptionList"};cn.parameters=cn.parameters||{};cn.parameters.docs=_(b({},cn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:GB,mdxComponentAnnotations:cn},e(_y,null))});var XB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Js,descriptionList:Uc,default:cn});const el=t=>({components:{DisplayText:ro},setup(){return{args:t}},template:'<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>'}),KB={Template:el},YB="wrapper";function Dy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(YB,_(b(b({},KB),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Titles and text  / Display text",component:ro,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},mdxType:"Meta"}),e("h1",null,"Display Text"),e("p",null,`Display styles make a bold visual statement.
Use them to create impact when the main goal is visual storytelling.
For example, use display text to convince or reassure merchants such as in marketing content or to capture attention during onboarding.`),e(V,{mdxType:"Canvas"},e(H,{name:"Display text",height:"60px",args:{element:"p"},parameters:{docs:{source:{code:P`<DisplayText>Good evening, Dominic.</DisplayText>`}}},mdxType:"Story"},el.bind({}))),e(se,{story:"Display text",mdxType:"ArgsTable"}))}Dy.isMDXComponent=!0;const tl=el.bind({});tl.storyName="Display text";tl.args={element:"p"};tl.parameters={storySource:{source:`args => ({
  components: {
    DisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>\`
})`},docs:{source:{code:P`<DisplayText>Good evening, Dominic.</DisplayText>`}}};const un={title:"Components / Titles and text  / Display text",component:ro,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},includeStories:["displayText"]},ZB={"Display text":"displayText"};un.parameters=un.parameters||{};un.parameters.docs=_(b({},un.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:ZB,mdxComponentAnnotations:un},e(Dy,null))});var QB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:el,displayText:tl,default:un}),fd=Object.freeze,JB=Object.defineProperty,Iy=(t,n)=>fd(JB(t,"raw",{value:fd(n||t.slice())})),vd,xd;const al=t=>({components:{DropZone:fs,DropZoneFileUpload:cm,Stack:qe,Thumbnail:ti,Caption:ua},setup(){const n=k([]),o=(r,u,m)=>{n.value=[...n.value,...u]},i=["image/gif","image/jpeg","image/png"];return{files:n,handleDrop:o,validImageTypes:i,thumbnailSource:r=>i.includes(r.type)?window.URL.createObjectURL(r):zr}},template:`
    <DropZone @drop="handleDrop">
      <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
      <Stack v-else>
        <Stack v-for="file, index in files" :key="index">
          <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
          <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
        </Stack>
      </Stack>
    </DropZone>
  `}),e$={Template:al},t$="wrapper";function By(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(t$,_(b(b({},e$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Actions / Drop zone",component:fs,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Drop Zone"),e("br",null),e("p",null,"The drop zone component lets users upload files by dragging and dropping the files into an area on a page, or activating a button."),e(V,{mdxType:"Canvas"},e(H,{name:"Drop zone",height:"160px",parameters:{docs:{source:{code:P(vd||(vd=Iy([`
            <DropZone @drop="handleDrop">
              <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
              <Stack v-else>
                <Stack v-for="file, index in files" :key="index">
                  <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
                  <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
                </Stack>
              </Stack>
            </DropZone>

            <script setup>
              const files = ref([]);
              const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
              const thumbnailSource = (file) => {
                return validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : NoteMinor;
              };
              const handleDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
                files.value = [...files.value, ...acceptedFiles];
              }
            <\/script>
          `],[`
            <DropZone @drop="handleDrop">
              <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
              <Stack v-else>
                <Stack v-for="file, index in files" :key="index">
                  <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
                  <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
                </Stack>
              </Stack>
            </DropZone>\\n
            <script setup>
              const files = ref([]);
              const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
              const thumbnailSource = (file) => {
                return validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : NoteMinor;
              };
              const handleDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
                files.value = [...files.value, ...acceptedFiles];
              }
            <\/script>
          `])))}}},mdxType:"Story"},al.bind({}))),e(se,{story:"Drop zone",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"File Upload component")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actionTitle"),e("td",{parentName:"tr",align:null},"String")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actionHint"),e("td",{parentName:"tr",align:null},"String")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Action Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}By.isMDXComponent=!0;const jc=al.bind({});jc.storyName="Drop zone";jc.parameters={storySource:{source:`args => ({
  components: {
    DropZone,
    DropZoneFileUpload,
    Stack,
    Thumbnail,
    Caption
  },

  setup() {
    const files = ref([]);

    const handleDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
      files.value = [...files.value, ...acceptedFiles];
    };

    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

    const thumbnailSource = file => {
      return validImageTypes.includes(file.type) ? window.URL.createObjectURL(file) : NoteMinor;
    };

    return {
      files,
      handleDrop,
      validImageTypes,
      thumbnailSource
    };
  },

  template: \`
    <DropZone @drop="handleDrop">
      <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
      <Stack v-else>
        <Stack v-for="file, index in files" :key="index">
          <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
          <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
        </Stack>
      </Stack>
    </DropZone>
  \`
})`},docs:{source:{code:P(xd||(xd=Iy([`
            <DropZone @drop="handleDrop">
              <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
              <Stack v-else>
                <Stack v-for="file, index in files" :key="index">
                  <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
                  <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
                </Stack>
              </Stack>
            </DropZone>

            <script setup>
              const files = ref([]);
              const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
              const thumbnailSource = (file) => {
                return validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : NoteMinor;
              };
              const handleDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
                files.value = [...files.value, ...acceptedFiles];
              }
            <\/script>
          `],[`
            <DropZone @drop="handleDrop">
              <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
              <Stack v-else>
                <Stack v-for="file, index in files" :key="index">
                  <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
                  <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
                </Stack>
              </Stack>
            </DropZone>\\n
            <script setup>
              const files = ref([]);
              const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
              const thumbnailSource = (file) => {
                return validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : NoteMinor;
              };
              const handleDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
                files.value = [...files.value, ...acceptedFiles];
              }
            <\/script>
          `])))}}};const dn={title:"Components / Actions / Drop zone",component:fs,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},includeStories:["dropZone"]},a$={"Drop zone":"dropZone"};dn.parameters=dn.parameters||{};dn.parameters.docs=_(b({},dn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:a$,mdxComponentAnnotations:dn},e(By,null))});var n$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:al,dropZone:jc,default:dn});const nl=t=>({components:{EmptyState:vs,Card:Ye,Link:ga},setup(){return{args:t}},template:`<Card>
    <EmptyState v-bind="args">
      <p>Track and receive your incoming inventory from suppliers.</p>
      <template #footerContent>
        <p>
          If you don't want to add a transfer, you can import your inventory from
          <Link monochrome url="/settings"> settings</Link>.
        </p>
      </template>
    </EmptyState>
  </Card>`}),o$={Template:nl},i$="wrapper";function $y(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(i$,_(b(b({},o$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Empty state",component:vs,argTypes:{default:{table:{disable:!0}},footerContent:{description:"Secondary elements to display below empty state actions",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Empty state"),e("p",null,"Empty states are used when a list, table, or chart has no items or data to show. This is an opportunity to provide explanation or guidance to help merchants progress. The empty state component is intended for use when a full page in the admin is empty, and not for individual elements or areas in the interface."),e(V,{mdxType:"Canvas"},e(H,{name:"Empty state",height:"300px",args:{heading:"Manage your inventory transfers",action:{content:"Add transfer"},secondaryAction:{content:"Learn more",url:"https://help.shopify.com"},image:"https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"},parameters:{docs:{source:{code:P`
            <Card>
              <EmptyState v-bind="args">
                <p>Track and receive your incoming inventory from suppliers.</p>
                <template #footerContent>
                  <p>
                    If you don't want to add a transfer, you can import your inventory from
                    <Link monochrome url="/settings"> settings</Link>.
                  </p>
                </template>
              </EmptyState>
            </Card>
          `}}},mdxType:"Story"},nl.bind({}))),e(se,{story:"Empty state",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ComplexAction types")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"outline?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as an outlined button.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"plain?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as a plain link.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}$y.isMDXComponent=!0;const ol=nl.bind({});ol.storyName="Empty state";ol.args={heading:"Manage your inventory transfers",action:{content:"Add transfer"},secondaryAction:{content:"Learn more",url:"https://help.shopify.com"},image:"https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"};ol.parameters={storySource:{source:`args => ({
  components: {
    EmptyState,
    Card,
    Link
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Card>
    <EmptyState v-bind="args">
      <p>Track and receive your incoming inventory from suppliers.</p>
      <template #footerContent>
        <p>
          If you don't want to add a transfer, you can import your inventory from
          <Link monochrome url="/settings"> settings</Link>.
        </p>
      </template>
    </EmptyState>
  </Card>\`
})`},docs:{source:{code:P`
            <Card>
              <EmptyState v-bind="args">
                <p>Track and receive your incoming inventory from suppliers.</p>
                <template #footerContent>
                  <p>
                    If you don't want to add a transfer, you can import your inventory from
                    <Link monochrome url="/settings"> settings</Link>.
                  </p>
                </template>
              </EmptyState>
            </Card>
          `}}};const pn={title:"Components / Structure / Empty state",component:vs,argTypes:{default:{table:{disable:!0}},footerContent:{description:"Secondary elements to display below empty state actions",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["emptyState"]},s$={"Empty state":"emptyState"};pn.parameters=pn.parameters||{};pn.parameters.docs=_(b({},pn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:s$,mdxComponentAnnotations:pn},e($y,null))});var l$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:nl,emptyState:ol,default:pn}),Td=Object.freeze,r$=Object.defineProperty,Fy=(t,n)=>Td(r$(t,"raw",{value:Td(n||t.slice())})),Sd,Cd;const il=t=>({components:{NoteMinor:zr,ExceptionList:um,ExceptionListItem:xs},setup(){return{args:t,NoteMinor:zr,DiscountsMajor:Mh}},template:`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>`}),c$={Template:il},u$="wrapper";function Ey(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(u$,_(b(b({},c$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Lists and tables / Exception List",component:xs,argTypes:{default:{table:{disable:!0}},status:{options:["critical","warning"],table:{type:{summary:"critical | warning"}}}},mdxType:"Meta"}),e("h1",null,"Exception List"),e("p",null,"Use exception lists to help merchants notice important, standout information that adds extra context to a task. Exception lists often consist of a title and description. Each item in the list either has a bullet or icon at the front."),e(V,{mdxType:"Canvas"},e(H,{name:"Exception List",height:"120px",parameters:{docs:{source:{code:P(Sd||(Sd=Fy([`
            <ExceptionList>
              <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
              <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
              <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
              <ExceptionListItem>Example Exception List Item</ExceptionListItem>
            </ExceptionList>

            <script setup>
            import NoteMinor from '@shopify/polaris-icons/dist/svg/NoteMinor.svg';
            import DiscountsMajor from '@shopify/polaris-icons/dist/svg/DiscountsMajor.svg';
            <\/script>
          `],[`
            <ExceptionList>
              <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
              <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
              <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
              <ExceptionListItem>Example Exception List Item</ExceptionListItem>
            </ExceptionList>\\n
            <script setup>
            import NoteMinor from '@shopify/polaris-icons/dist/svg/NoteMinor.svg';
            import DiscountsMajor from '@shopify/polaris-icons/dist/svg/DiscountsMajor.svg';
            <\/script>
          `])))}}},mdxType:"Story"},il.bind({}))),e(se,{story:"Exception List",mdxType:"ArgsTable"}))}Ey.isMDXComponent=!0;const zc=il.bind({});zc.storyName="Exception List";zc.parameters={storySource:{source:`args => ({
  components: {
    NoteMinor,
    ExceptionList,
    ExceptionListItem
  },

  setup() {
    return {
      args,
      NoteMinor,
      DiscountsMajor
    };
  },

  template: \`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>\`
})`},docs:{source:{code:P(Cd||(Cd=Fy([`
            <ExceptionList>
              <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
              <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
              <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
              <ExceptionListItem>Example Exception List Item</ExceptionListItem>
            </ExceptionList>

            <script setup>
            import NoteMinor from '@shopify/polaris-icons/dist/svg/NoteMinor.svg';
            import DiscountsMajor from '@shopify/polaris-icons/dist/svg/DiscountsMajor.svg';
            <\/script>
          `],[`
            <ExceptionList>
              <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
              <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
              <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
              <ExceptionListItem>Example Exception List Item</ExceptionListItem>
            </ExceptionList>\\n
            <script setup>
            import NoteMinor from '@shopify/polaris-icons/dist/svg/NoteMinor.svg';
            import DiscountsMajor from '@shopify/polaris-icons/dist/svg/DiscountsMajor.svg';
            <\/script>
          `])))}}};const mn={title:"Components / Lists and tables / Exception List",component:xs,argTypes:{default:{table:{disable:!0}},status:{options:["critical","warning"],table:{type:{summary:"critical | warning"}}}},includeStories:["exceptionList"]},d$={"Exception List":"exceptionList"};mn.parameters=mn.parameters||{};mn.parameters.docs=_(b({},mn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:d$,mdxComponentAnnotations:mn},e(Ey,null))});var p$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:il,exceptionList:zc,default:mn});const sl=(t,{argTypes:n})=>({props:Object.keys(n),components:{FooterHelp:Ts},template:`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>`}),m$={Template:sl},y$="wrapper";function Oy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(y$,_(b(b({},m$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Navigation / Footer help",component:Ts,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),e("h1",null,"Footer help"),e("p",null,"Footer help is used to refer merchants to more information related to the product or feature they're using."),e(V,{mdxType:"Canvas"},e(H,{name:"Footer help",parameters:{docs:{source:{code:P`
            <FooterHelp>Footer help content</FooterHelp>
          `}}},mdxType:"Story"},sl.bind({}))),e(se,{story:"Footer help",mdxType:"ArgsTable"}))}Oy.isMDXComponent=!0;const Wc=sl.bind({});Wc.storyName="Footer help";Wc.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    FooterHelp
  },
  template: \`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>\`
})`},docs:{source:{code:P`
            <FooterHelp>Footer help content</FooterHelp>
          `}}};const yn={title:"Components / Navigation / Footer help",component:Ts,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},includeStories:["footerHelp"]},g$={"Footer help":"footerHelp"};yn.parameters=yn.parameters||{};yn.parameters.docs=_(b({},yn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:g$,mdxComponentAnnotations:yn},e(Oy,null))});var h$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:sl,footerHelp:Wc,default:yn}),Ad=Object.freeze,b$=Object.defineProperty,qy=(t,n)=>Ad(b$(t,"raw",{value:Ad(n||t.slice())})),kd,Nd;const ll=t=>({components:{Form:Ss,FormLayout:Rt,Checkbox:Ma,Button:ge,TextField:Pe},data(){return{checkbox:!1,textField:""}},setup(){return{args:t}},methods:{handleSubmit(n){n.preventDefault(),alert(`Form submitted - Checkbox: ${this.checkbox} - email: ${this.textField}`),this.checkbox=!1,this.textField=""}},template:`<Form @submit="handleSubmit">
    <FormLayout>
      <Checkbox id="signUpCheckbox" v-model="checkbox">
        <template #label>Sign up for the Polaris newsletter</template>
      </Checkbox>
      <TextField v-model="textField" type="email" autoComplete="email">
        <template #label>Email</template>
        <template #help-text>
          <span>
            We'll use this email address to inform you on future changes to
            Polaris.
          </span>
        </template>
      </TextField>
      <Button primary submit>Submit</Button>
    </FormLayout>
  </Form>`}),f$={Template:ll},v$="wrapper";function Ry(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(v$,_(b(b({},f$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Form",component:Ss,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Form"),e("p",null,"A wrapper component that handles the submission of forms."),e(V,{mdxType:"Canvas"},e(H,{name:"Form",height:"200px",parameters:{docs:{source:{code:P(kd||(kd=qy([`
            <Form @submit="handleSubmit" data-submit="handleSubmit">
              <FormLayout>
                <Checkbox id="signUpCheckbox" v-model="checkbox">
                  <template #label>Sign up for the Polaris newsletter</template>
                </Checkbox>
                <TextField v-model="textField" type="email" autoComplete="email">
                  <template #label>Email</template>
                  <template #help-text>
                    <span>
                      We'll use this email address to inform you on future changes to
                      Polaris.
                    </span>
                  </template>
                </TextField>
                <Button primary submit>Submit</Button>
              </FormLayout>
            </Form>

            <script>
              data() {
                return {
                  checkbox: false,
                  textField: '',
                };
              },
              methods: {
                handleSubmit(event) {
                  event.preventDefault();
                  alert(\`Form submitted - Checkbox: \${this.checkbox} - email: \${this.textField}\`);
                  this.checkbox = false;
                  this.textField = '';
                },
              },
            <\/script>
          `],[`
            <Form @submit="handleSubmit" data-submit="handleSubmit">
              <FormLayout>
                <Checkbox id="signUpCheckbox" v-model="checkbox">
                  <template #label>Sign up for the Polaris newsletter</template>
                </Checkbox>
                <TextField v-model="textField" type="email" autoComplete="email">
                  <template #label>Email</template>
                  <template #help-text>
                    <span>
                      We'll use this email address to inform you on future changes to
                      Polaris.
                    </span>
                  </template>
                </TextField>
                <Button primary submit>Submit</Button>
              </FormLayout>
            </Form>\\n
            <script>
              data() {
                return {
                  checkbox: false,
                  textField: '',
                };
              },
              methods: {
                handleSubmit(event) {
                  event.preventDefault();
                  alert(\\\`Form submitted - Checkbox: \\\${this.checkbox} - email: \\\${this.textField}\\\`);
                  this.checkbox = false;
                  this.textField = '';
                },
              },
            <\/script>
          `])))}}},mdxType:"Story"},ll.bind({}))),e(se,{story:"Form",mdxType:"ArgsTable"}))}Ry.isMDXComponent=!0;const Gc=ll.bind({});Gc.storyName="Form";Gc.parameters={storySource:{source:`args => ({
  components: {
    Form,
    FormLayout,
    Checkbox,
    Button,
    TextField
  },

  data() {
    return {
      checkbox: false,
      textField: ''
    };
  },

  setup() {
    return {
      args
    };
  },

  methods: {
    handleSubmit(event) {
      event.preventDefault();
      alert(\`Form submitted - Checkbox: \${this.checkbox} - email: \${this.textField}\`);
      this.checkbox = false;
      this.textField = '';
    }

  },
  template: \`<Form @submit="handleSubmit">
    <FormLayout>
      <Checkbox id="signUpCheckbox" v-model="checkbox">
        <template #label>Sign up for the Polaris newsletter</template>
      </Checkbox>
      <TextField v-model="textField" type="email" autoComplete="email">
        <template #label>Email</template>
        <template #help-text>
          <span>
            We'll use this email address to inform you on future changes to
            Polaris.
          </span>
        </template>
      </TextField>
      <Button primary submit>Submit</Button>
    </FormLayout>
  </Form>\`
})`},docs:{source:{code:P(Nd||(Nd=qy([`
            <Form @submit="handleSubmit" data-submit="handleSubmit">
              <FormLayout>
                <Checkbox id="signUpCheckbox" v-model="checkbox">
                  <template #label>Sign up for the Polaris newsletter</template>
                </Checkbox>
                <TextField v-model="textField" type="email" autoComplete="email">
                  <template #label>Email</template>
                  <template #help-text>
                    <span>
                      We'll use this email address to inform you on future changes to
                      Polaris.
                    </span>
                  </template>
                </TextField>
                <Button primary submit>Submit</Button>
              </FormLayout>
            </Form>

            <script>
              data() {
                return {
                  checkbox: false,
                  textField: '',
                };
              },
              methods: {
                handleSubmit(event) {
                  event.preventDefault();
                  alert(\`Form submitted - Checkbox: \${this.checkbox} - email: \${this.textField}\`);
                  this.checkbox = false;
                  this.textField = '';
                },
              },
            <\/script>
          `],[`
            <Form @submit="handleSubmit" data-submit="handleSubmit">
              <FormLayout>
                <Checkbox id="signUpCheckbox" v-model="checkbox">
                  <template #label>Sign up for the Polaris newsletter</template>
                </Checkbox>
                <TextField v-model="textField" type="email" autoComplete="email">
                  <template #label>Email</template>
                  <template #help-text>
                    <span>
                      We'll use this email address to inform you on future changes to
                      Polaris.
                    </span>
                  </template>
                </TextField>
                <Button primary submit>Submit</Button>
              </FormLayout>
            </Form>\\n
            <script>
              data() {
                return {
                  checkbox: false,
                  textField: '',
                };
              },
              methods: {
                handleSubmit(event) {
                  event.preventDefault();
                  alert(\\\`Form submitted - Checkbox: \\\${this.checkbox} - email: \\\${this.textField}\\\`);
                  this.checkbox = false;
                  this.textField = '';
                },
              },
            <\/script>
          `])))}}};const gn={title:"Components / Forms / Form",component:Ss,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},includeStories:["form"]},x$={Form:"form"};gn.parameters=gn.parameters||{};gn.parameters.docs=_(b({},gn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:x$,mdxComponentAnnotations:gn},e(Ry,null))});var T$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ll,form:Gc,default:gn});const rl=t=>({components:{FormLayout:Rt,TextField:Pe},data(){return{textField:"",emailField:""}},template:`
  <FormLayout>
    <TextField v-model="textField" autoComplete="off">
      <template #label>Store name</template>
    </TextField>
    <TextField v-model="emailField" type="email" autoComplete="email">
      <template #label>Account email</template>
    </TextField>
  </FormLayout>`}),cl=(t,{argTypes:n})=>({components:{FormLayout:Rt,FormGroup:fc,TextField:Pe},data(){return{min:"",max:""}},template:`<FormLayout>
    <FormGroup>
      <TextField v-model="min" type="number">
        <template #label>Minimum order</template>
      </TextField>
      <TextField v-model="max" type="number">
        <template #label>Maximum order</template>
      </TextField>
    </FormGroup>
  </FormLayout>`}),ul=t=>({components:{FormLayout:Rt,FormGroup:fc,TextField:Pe},data(){return{textField:"",emailField:""}},template:`<FormLayout>
    <FormGroup condensed>
      <TextField>
        <template #label>Length</template>
      </TextField>
      <TextField>
        <template #label>Width</template>
      </TextField>
      <TextField>
        <template #label>Height</template>
      </TextField>
      <TextField>
        <template #label>Unit</template>
      </TextField>
    </FormGroup>
  </FormLayout>`}),S$={Template:rl,FormLayoutGroup:cl,FormGroupCondensed:ul},C$="wrapper";function Vy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(C$,_(b(b({},S$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Form Layout",component:Rt,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Form Layout"),e("p",null,`Use form layout to arrange fields within a form using standard spacing.
By default it stacks fields vertically but also supports horizontal groups of fields.`),e(V,{mdxType:"Canvas"},e(H,{name:"Default Form Layout",height:"160px",parameters:{docs:{source:{state:"close",code:P`
            <FormLayout>
              <TextField v-model="textField" autoComplete="off">
                <template #label>Store name</template>
              </TextField>
              <TextField v-model="emailField" type="email" autoComplete="email">
                <template #label>Account email</template>
              </TextField>
            </FormLayout>
          `}}},mdxType:"Story"},rl.bind({}))),e("h3",null,"Field group"),e(V,{mdxType:"Canvas"},e(H,{name:"Field Group",height:"80px",parameters:{docs:{source:{state:"close",code:P`
            <FormLayout>
              <FormGroup>
                <TextField v-model="min" type="number">
                  <template #label>Minimum order</template>
                </TextField>
                <TextField v-model="max" type="number">
                  <template #label>Maximum order</template>
                </TextField>
              </FormGroup>
            </FormLayout>
          `}}},mdxType:"Story"},cl.bind({}))),e("h3",null,"Condensed field group"),e(V,{mdxType:"Canvas"},e(H,{name:"Condensed field group",height:"80px",parameters:{docs:{source:{code:P`
          <FormLayout>
            <FormGroup condensed>
              <TextField>
                <template #label>Length</template>
              </TextField>
              <TextField>
                <template #label>Width</template>
              </TextField>
              <TextField>
                <template #label>Height</template>
              </TextField>
              <TextField>
                <template #label>Unit</template>
              </TextField>
            </FormGroup>
          </FormLayout>
          `}}},mdxType:"Story"},ul.bind({}))))}Vy.isMDXComponent=!0;const Xc=rl.bind({});Xc.storyName="Default Form Layout";Xc.parameters={storySource:{source:`args => ({
  components: {
    FormLayout,
    TextField
  },

  data() {
    return {
      textField: '',
      emailField: ''
    };
  },

  template: \`
  <FormLayout>
    <TextField v-model="textField" autoComplete="off">
      <template #label>Store name</template>
    </TextField>
    <TextField v-model="emailField" type="email" autoComplete="email">
      <template #label>Account email</template>
    </TextField>
  </FormLayout>\`
})`},docs:{source:{state:"close",code:P`
            <FormLayout>
              <TextField v-model="textField" autoComplete="off">
                <template #label>Store name</template>
              </TextField>
              <TextField v-model="emailField" type="email" autoComplete="email">
                <template #label>Account email</template>
              </TextField>
            </FormLayout>
          `}}};const Kc=cl.bind({});Kc.storyName="Field Group";Kc.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    FormLayout,
    FormGroup,
    TextField
  },

  data() {
    return {
      min: '',
      max: ''
    };
  },

  template: \`<FormLayout>
    <FormGroup>
      <TextField v-model="min" type="number">
        <template #label>Minimum order</template>
      </TextField>
      <TextField v-model="max" type="number">
        <template #label>Maximum order</template>
      </TextField>
    </FormGroup>
  </FormLayout>\`
})`},docs:{source:{state:"close",code:P`
            <FormLayout>
              <FormGroup>
                <TextField v-model="min" type="number">
                  <template #label>Minimum order</template>
                </TextField>
                <TextField v-model="max" type="number">
                  <template #label>Maximum order</template>
                </TextField>
              </FormGroup>
            </FormLayout>
          `}}};const Yc=ul.bind({});Yc.storyName="Condensed field group";Yc.parameters={storySource:{source:`args => ({
  components: {
    FormLayout,
    FormGroup,
    TextField
  },

  data() {
    return {
      textField: '',
      emailField: ''
    };
  },

  template: \`<FormLayout>
    <FormGroup condensed>
      <TextField>
        <template #label>Length</template>
      </TextField>
      <TextField>
        <template #label>Width</template>
      </TextField>
      <TextField>
        <template #label>Height</template>
      </TextField>
      <TextField>
        <template #label>Unit</template>
      </TextField>
    </FormGroup>
  </FormLayout>\`
})`},docs:{source:{code:P`
          <FormLayout>
            <FormGroup condensed>
              <TextField>
                <template #label>Length</template>
              </TextField>
              <TextField>
                <template #label>Width</template>
              </TextField>
              <TextField>
                <template #label>Height</template>
              </TextField>
              <TextField>
                <template #label>Unit</template>
              </TextField>
            </FormGroup>
          </FormLayout>
          `}}};const hn={title:"Components / Forms / Form Layout",component:Rt,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},includeStories:["defaultFormLayout","fieldGroup","condensedFieldGroup"]},A$={"Default Form Layout":"defaultFormLayout","Field Group":"fieldGroup","Condensed field group":"condensedFieldGroup"};hn.parameters=hn.parameters||{};hn.parameters.docs=_(b({},hn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:A$,mdxComponentAnnotations:hn},e(Vy,null))});var k$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:rl,FormLayoutGroup:cl,FormGroupCondensed:ul,defaultFormLayout:Xc,fieldGroup:Kc,condensedFieldGroup:Yc,default:hn}),Ld=Object.freeze,N$=Object.defineProperty,Hy=(t,n)=>Ld(N$(t,"raw",{value:Ld(n||t.slice())})),wd,Pd;const dl=t=>({components:{Frame:ta,TopBar:ai,TopBarUserMenu:wc,TopBarMenu:_s,Icon:re,TopBarSearchField:Lc,VisuallyHidden:lt,ActionList:Je,NavigationSection:Tc,Navigation:Xo,Loading:Go,ContextualSaveBar:jo,Button:ge,Toast:Jo},data(){return{isUserMenuOpen:!1,isSecondaryMenuOpen:!1,isSearchActive:!1,searchValue:"",isCollapsed:!1,isLoading:!1,isDirty:!1,toastActive:!1,userMenuAction:[{items:[{content:"Back to Shopify",icon:ao}]},{items:[{content:"Community forums"}]}],userMenuMessage:{title:"Another Message",description:"This is a description of message",action:{onClick:this.clickHandle,content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}},navItems2:[{label:"Dashboard",icon:Cu(Dh),onClick:this.toggleIsLoading},{label:"Qikify Orders",icon:Cu(_h),onClick:this.toggleIsLoading}]}},methods:{handleSearchChange(n){this.isSearchActive=n.length>0},handleSearchResultsDismiss(){this.searchValue="",this.isSearchActive=!1},toggleUserMenu(){this.isUserMenuOpen=!this.isUserMenuOpen},toggleIsSecondaryMenuOpen(){this.isSecondaryMenuOpen=!this.isSecondaryMenuOpen},clickHandle(){alert("clicked")},toggleCollapsed(){this.isCollapsed=!this.isCollapsed},toggleToastActive(){this.toastActive=!this.toastActive},toggleIsLoading(){this.isLoading=!this.isLoading},toggleIsDirty(){this.isDirty=!this.isDirty}},setup(){return{logo:{width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},navItems:[{label:"Back to Shopify",icon:ao}],QuestionMarkMajor:Tp,CirclePlusOutlineMinor:Sp}},template:`
    <Frame
      :logo="logo"
      :showMobileNavigation="isCollapsed"
      @navigation-dismiss="toggleCollapsed"
    >
      <template #navigation>
        <Navigation location="/">
          <NavigationSection
            :items="navItems"
            :rollup="{ after: 7, view: 'view', hide: 'hide', activePath: '/' }"
          />
          <NavigationSection
            separator
            title="Sales channels"
            :items="navItems2"
            :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
          />
        </Navigation>
      </template>
      <template #topBar>
        <TopBar showNavigationToggle
          :searchResultsVisible="isSearchActive"
          @search-result-dismiss="handleSearchResultsDismiss"
        >
          <template #userMenu>
            <TopBarUserMenu
              :actions="userMenuAction"
              name="Polaris"
              detail="qikify"
              initials="P"
              :message="userMenuMessage"
              :open="isUserMenuOpen"
              @toggle="toggleUserMenu"
            />
          </template>
          <template #secondaryMenu>
            <TopBarMenu
              :open="isSecondaryMenuOpen"
              @open="toggleIsSecondaryMenuOpen"
              @close="toggleIsSecondaryMenuOpen"
              :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
            >
              <template #activatorContent>
                <span>
                  <Icon :source="QuestionMarkMajor" />
                  <VisuallyHidden>Secondary menu</VisuallyHidden>
                </span>
              </template>
            </TopBarMenu>
          </template>
          <template #searchField>
            <TopBarSearchField
              placeholder="Search"
              v-model="searchValue"
              :showFocusBorder="true"
              @change="handleSearchChange"
            />
          </template>
          <template #searchResults>
            <ActionList
              :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
            />
          </template>
        </TopBar>
      </template>
      <Loading v-if="isLoading" />
      <ContextualSaveBar
        v-if="isDirty"
        message="Unsaved changes"
        :saveAction="{ onAction: () => { toggleToastActive(); toggleIsDirty() } }"
        :discardAction="{ onAction: toggleIsDirty, discardConfirmationModal: true }"
      />
      <Toast
        v-if="toastActive"
        content="Saved changes!"
        :duration="5000"
        @dismiss="toggleToastActive"
      />
      <Button @click="toggleIsLoading">Start/Stop Loading</Button>
      <Button @click="toggleToastActive">Toggle Toast</Button>
      <Button @click="toggleIsDirty">Form change</Button>
    </Frame>
  `}),L$={Template:dl},w$="wrapper";function Uy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(w$,_(b(b({},L$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Frame",component:ta,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Frame"),e("p",null,"The frame component, while not visible in the user interface itself, provides the structure for an application. It wraps the main elements and houses the primary ",e("a",{parentName:"p",href:"?path=/docs/components-navigation-navigation--navigation"},"navigation"),", ",e("a",{parentName:"p",href:"?path=/docs/components-navigation-top-bar--top-bar"},"top bar"),", ",e("a",{parentName:"p",href:"?path=/docs/components-feedback-indicators-toast--toast"},"toast"),", and ",e("a",{parentName:"p",href:"?path=/docs/components-forms-contextual-save-bar--contextual-save-bar"},"contextual save bar")," components."),e(V,{mdxType:"Canvas"},e(H,{name:"Frame",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:P(wd||(wd=Hy([`
            <template>
            <Frame :logo="logo" :showMobileNavigation="isCollapsed" @navigation-dismiss="toggleCollapsed">
              <template #navigation>
                <Navigation location="/">
                  <NavigationSection
                    :items="navItems"
                    :rollup="{ after: 7, view: 'view', hide: 'hide', activePath: '/' }"
                  />
                  <NavigationSection
                    separator
                    title="Sales channels"
                    :items="navItems2"
                    :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
                  />
                </Navigation>
              </template>

              <template #topBar>
                <TopBar showNavigationToggle
                  :searchResultsVisible="isSearchActive"
                  @search-result-dismiss="handleSearchResultsDismiss"
                >

                  <template #userMenu>
                    <TopBarUserMenu
                      :actions="userMenuAction"
                      name="Polaris"
                      detail="qikify"
                      initials="P"
                      :message="userMenuMessage"
                      :open="isUserMenuOpen"
                      @toggle="toggleUserMenu"
                    />
                  </template>

                  <template #secondaryMenu>
                    <TopBarMenu
                      :open="isSecondaryMenuOpen"
                      @open="toggleIsSecondaryMenuOpen"
                      @close="toggleIsSecondaryMenuOpen"
                      :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
                    >
                      <template #activatorContent>
                        <span>
                          <Icon :source="QuestionMarkMajor" />
                          <VisuallyHidden>Secondary menu</VisuallyHidden>
                        </span>
                      </template>
                    </TopBarMenu>
                  </template>

                  <template #searchField>
                    <TopBarSearchField
                      placeholder="Search"
                      v-model="searchValue"
                      :showFocusBorder="true"
                      @change="handleSearchChange"
                    />
                  </template>

                  <template #searchResults>
                    <ActionList
                      :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
                    />
                  </template>

                </TopBar>
              </template>

              <Loading v-if="isLoading" />
              <ContextualSaveBar
                v-if="isDirty"
                message="Unsaved changes"
                :saveAction="{ onAction: () => { toggleToastActive(); toggleIsDirty() } }"
                :discardAction="{ onAction: toggleIsDirty, discardConfirmationModal: true }"
              />
              <Toast
                v-if="toastActive"
                content="Saved changes!"
                :duration="5000"
                @dismiss="toggleToastActive"
              />
            </Frame>
            <template>

            <script>
              export default {
                components: {
                  Frame, TopBar, TopBarUserMenu, TopBarMenu, Icon, TopBarSearchField, VisuallyHidden,
                  ActionList, NavigationSection, Navigation, Loading, ContextualSaveBar, Button, Toast
                },
                data() {
                  return {
                    isUserMenuOpen: false,
                    isSecondaryMenuOpen: false,
                    isSearchActive: false,
                    searchValue: '',
                    isCollapsed: false,
                    isLoading: false,
                    isDirty: false,
                    toastActive: false,
                    userMenuAction: [
                      { items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }] },
                      { items: [{ content: 'Community forums' }] },
                    ],
                    userMenuMessage: {
                      title: 'Another Message',
                      description:'This is a description of message',
                      action: { onClick: this.clickHandle, content: 'This is a action' },
                      link: { to: 'https://google.com', content: 'Google Homepage' }
                    },
                    navItems2: [
                      { label: 'Dashboard', icon: markRaw(HomeMajor), onClick: this.toggleIsLoading },
                      { label: 'Qikify Orders', icon: markRaw(OrdersMajor), onClick: this.toggleIsLoading },
                    ],
                  };
                },
                methods: {
                  handleSearchChange(value) {
                    this.isSearchActive = value.length > 0;
                  },
                  handleSearchResultsDismiss() {
                    this.searchValue = '';
                    this.isSearchActive = false;
                  },
                  toggleUserMenu() {
                    this.isUserMenuOpen = !this.isUserMenuOpen;
                  },
                  toggleIsSecondaryMenuOpen() {
                    this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen;
                  },
                  clickHandle() {
                    alert('clicked');
                  },
                  toggleCollapsed() {
                    this.isCollapsed = !this.isCollapsed;
                  },
                  toggleToastActive() {
                    this.toastActive = !this.toastActive;
                  },
                  toggleIsLoading() {
                    this.isLoading = !this.isLoading;
                  },
                },
                setup() {
                  const logo = {
                    width: 30,
                    topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                    contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                  }
                  const navItems = [
                    { label: 'Back to Shopify', icon: ArrowLeftMinor },
                  ];
                  return { logo, navItems, QuestionMarkMajor, CirclePlusOutlineMinor };
                },
              }
            <\/script>
          `],[`
            <template>
            <Frame :logo="logo" :showMobileNavigation="isCollapsed" @navigation-dismiss="toggleCollapsed">
              <template #navigation>
                <Navigation location="/">
                  <NavigationSection
                    :items="navItems"
                    :rollup="{ after: 7, view: 'view', hide: 'hide', activePath: '/' }"
                  />
                  <NavigationSection
                    separator
                    title="Sales channels"
                    :items="navItems2"
                    :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
                  />
                </Navigation>
              </template>\\n
              <template #topBar>
                <TopBar showNavigationToggle
                  :searchResultsVisible="isSearchActive"
                  @search-result-dismiss="handleSearchResultsDismiss"
                >\\n
                  <template #userMenu>
                    <TopBarUserMenu
                      :actions="userMenuAction"
                      name="Polaris"
                      detail="qikify"
                      initials="P"
                      :message="userMenuMessage"
                      :open="isUserMenuOpen"
                      @toggle="toggleUserMenu"
                    />
                  </template>\\n
                  <template #secondaryMenu>
                    <TopBarMenu
                      :open="isSecondaryMenuOpen"
                      @open="toggleIsSecondaryMenuOpen"
                      @close="toggleIsSecondaryMenuOpen"
                      :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
                    >
                      <template #activatorContent>
                        <span>
                          <Icon :source="QuestionMarkMajor" />
                          <VisuallyHidden>Secondary menu</VisuallyHidden>
                        </span>
                      </template>
                    </TopBarMenu>
                  </template>\\n
                  <template #searchField>
                    <TopBarSearchField
                      placeholder="Search"
                      v-model="searchValue"
                      :showFocusBorder="true"
                      @change="handleSearchChange"
                    />
                  </template>\\n
                  <template #searchResults>
                    <ActionList
                      :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
                    />
                  </template>\\n
                </TopBar>
              </template>\\n
              <Loading v-if="isLoading" />
              <ContextualSaveBar
                v-if="isDirty"
                message="Unsaved changes"
                :saveAction="{ onAction: () => { toggleToastActive(); toggleIsDirty() } }"
                :discardAction="{ onAction: toggleIsDirty, discardConfirmationModal: true }"
              />
              <Toast
                v-if="toastActive"
                content="Saved changes!"
                :duration="5000"
                @dismiss="toggleToastActive"
              />
            </Frame>
            <template>\\n
            <script>
              export default {
                components: {
                  Frame, TopBar, TopBarUserMenu, TopBarMenu, Icon, TopBarSearchField, VisuallyHidden,
                  ActionList, NavigationSection, Navigation, Loading, ContextualSaveBar, Button, Toast
                },
                data() {
                  return {
                    isUserMenuOpen: false,
                    isSecondaryMenuOpen: false,
                    isSearchActive: false,
                    searchValue: '',
                    isCollapsed: false,
                    isLoading: false,
                    isDirty: false,
                    toastActive: false,
                    userMenuAction: [
                      { items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }] },
                      { items: [{ content: 'Community forums' }] },
                    ],
                    userMenuMessage: {
                      title: 'Another Message',
                      description:'This is a description of message',
                      action: { onClick: this.clickHandle, content: 'This is a action' },
                      link: { to: 'https://google.com', content: 'Google Homepage' }
                    },
                    navItems2: [
                      { label: 'Dashboard', icon: markRaw(HomeMajor), onClick: this.toggleIsLoading },
                      { label: 'Qikify Orders', icon: markRaw(OrdersMajor), onClick: this.toggleIsLoading },
                    ],
                  };
                },
                methods: {
                  handleSearchChange(value) {
                    this.isSearchActive = value.length > 0;
                  },
                  handleSearchResultsDismiss() {
                    this.searchValue = '';
                    this.isSearchActive = false;
                  },
                  toggleUserMenu() {
                    this.isUserMenuOpen = !this.isUserMenuOpen;
                  },
                  toggleIsSecondaryMenuOpen() {
                    this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen;
                  },
                  clickHandle() {
                    alert('clicked');
                  },
                  toggleCollapsed() {
                    this.isCollapsed = !this.isCollapsed;
                  },
                  toggleToastActive() {
                    this.toastActive = !this.toastActive;
                  },
                  toggleIsLoading() {
                    this.isLoading = !this.isLoading;
                  },
                },
                setup() {
                  const logo = {
                    width: 30,
                    topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                    contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                  }
                  const navItems = [
                    { label: 'Back to Shopify', icon: ArrowLeftMinor },
                  ];
                  return { logo, navItems, QuestionMarkMajor, CirclePlusOutlineMinor };
                },
              }
            <\/script>
          `])))}}},mdxType:"Story"},dl.bind({}))),e(se,{story:"Frame",mdxType:"ArgsTable"}))}Uy.isMDXComponent=!0;const Zc=dl.bind({});Zc.storyName="Frame";Zc.parameters={storySource:{source:`args => ({
  components: {
    Frame,
    TopBar,
    TopBarUserMenu,
    TopBarMenu,
    Icon,
    TopBarSearchField,
    VisuallyHidden,
    ActionList,
    NavigationSection,
    Navigation,
    Loading,
    ContextualSaveBar,
    Button,
    Toast
  },

  data() {
    return {
      isUserMenuOpen: false,
      isSecondaryMenuOpen: false,
      isSearchActive: false,
      searchValue: '',
      isCollapsed: false,
      isLoading: false,
      isDirty: false,
      toastActive: false,
      userMenuAction: [{
        items: [{
          content: 'Back to Shopify',
          icon: ArrowLeftMinor
        }]
      }, {
        items: [{
          content: 'Community forums'
        }]
      }],
      userMenuMessage: {
        title: 'Another Message',
        description: 'This is a description of message',
        action: {
          onClick: this.clickHandle,
          content: 'This is a action'
        },
        link: {
          to: 'https://google.com',
          content: 'Google Homepage'
        }
      },
      navItems2: [{
        label: 'Dashboard',
        icon: markRaw(HomeMajor),
        onClick: this.toggleIsLoading
      }, {
        label: 'Qikify Orders',
        icon: markRaw(OrdersMajor),
        onClick: this.toggleIsLoading
      }]
    };
  },

  methods: {
    handleSearchChange(value) {
      this.isSearchActive = value.length > 0;
    },

    handleSearchResultsDismiss() {
      this.searchValue = '';
      this.isSearchActive = false;
    },

    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    },

    toggleIsSecondaryMenuOpen() {
      this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen;
    },

    clickHandle() {
      alert('clicked');
    },

    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
    },

    toggleToastActive() {
      this.toastActive = !this.toastActive;
    },

    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },

    toggleIsDirty() {
      this.isDirty = !this.isDirty;
    }

  },

  setup() {
    const logo = {
      width: 30,
      topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
      contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png'
    };
    const navItems = [{
      label: 'Back to Shopify',
      icon: ArrowLeftMinor
    }];
    return {
      logo,
      navItems,
      QuestionMarkMajor,
      CirclePlusOutlineMinor
    };
  },

  template: \`
    <Frame
      :logo="logo"
      :showMobileNavigation="isCollapsed"
      @navigation-dismiss="toggleCollapsed"
    >
      <template #navigation>
        <Navigation location="/">
          <NavigationSection
            :items="navItems"
            :rollup="{ after: 7, view: 'view', hide: 'hide', activePath: '/' }"
          />
          <NavigationSection
            separator
            title="Sales channels"
            :items="navItems2"
            :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
          />
        </Navigation>
      </template>
      <template #topBar>
        <TopBar showNavigationToggle
          :searchResultsVisible="isSearchActive"
          @search-result-dismiss="handleSearchResultsDismiss"
        >
          <template #userMenu>
            <TopBarUserMenu
              :actions="userMenuAction"
              name="Polaris"
              detail="qikify"
              initials="P"
              :message="userMenuMessage"
              :open="isUserMenuOpen"
              @toggle="toggleUserMenu"
            />
          </template>
          <template #secondaryMenu>
            <TopBarMenu
              :open="isSecondaryMenuOpen"
              @open="toggleIsSecondaryMenuOpen"
              @close="toggleIsSecondaryMenuOpen"
              :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
            >
              <template #activatorContent>
                <span>
                  <Icon :source="QuestionMarkMajor" />
                  <VisuallyHidden>Secondary menu</VisuallyHidden>
                </span>
              </template>
            </TopBarMenu>
          </template>
          <template #searchField>
            <TopBarSearchField
              placeholder="Search"
              v-model="searchValue"
              :showFocusBorder="true"
              @change="handleSearchChange"
            />
          </template>
          <template #searchResults>
            <ActionList
              :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
            />
          </template>
        </TopBar>
      </template>
      <Loading v-if="isLoading" />
      <ContextualSaveBar
        v-if="isDirty"
        message="Unsaved changes"
        :saveAction="{ onAction: () => { toggleToastActive(); toggleIsDirty() } }"
        :discardAction="{ onAction: toggleIsDirty, discardConfirmationModal: true }"
      />
      <Toast
        v-if="toastActive"
        content="Saved changes!"
        :duration="5000"
        @dismiss="toggleToastActive"
      />
      <Button @click="toggleIsLoading">Start/Stop Loading</Button>
      <Button @click="toggleToastActive">Toggle Toast</Button>
      <Button @click="toggleIsDirty">Form change</Button>
    </Frame>
  \`
})`},docs:{source:{state:"close",code:P(Pd||(Pd=Hy([`
            <template>
            <Frame :logo="logo" :showMobileNavigation="isCollapsed" @navigation-dismiss="toggleCollapsed">
              <template #navigation>
                <Navigation location="/">
                  <NavigationSection
                    :items="navItems"
                    :rollup="{ after: 7, view: 'view', hide: 'hide', activePath: '/' }"
                  />
                  <NavigationSection
                    separator
                    title="Sales channels"
                    :items="navItems2"
                    :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
                  />
                </Navigation>
              </template>

              <template #topBar>
                <TopBar showNavigationToggle
                  :searchResultsVisible="isSearchActive"
                  @search-result-dismiss="handleSearchResultsDismiss"
                >

                  <template #userMenu>
                    <TopBarUserMenu
                      :actions="userMenuAction"
                      name="Polaris"
                      detail="qikify"
                      initials="P"
                      :message="userMenuMessage"
                      :open="isUserMenuOpen"
                      @toggle="toggleUserMenu"
                    />
                  </template>

                  <template #secondaryMenu>
                    <TopBarMenu
                      :open="isSecondaryMenuOpen"
                      @open="toggleIsSecondaryMenuOpen"
                      @close="toggleIsSecondaryMenuOpen"
                      :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
                    >
                      <template #activatorContent>
                        <span>
                          <Icon :source="QuestionMarkMajor" />
                          <VisuallyHidden>Secondary menu</VisuallyHidden>
                        </span>
                      </template>
                    </TopBarMenu>
                  </template>

                  <template #searchField>
                    <TopBarSearchField
                      placeholder="Search"
                      v-model="searchValue"
                      :showFocusBorder="true"
                      @change="handleSearchChange"
                    />
                  </template>

                  <template #searchResults>
                    <ActionList
                      :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
                    />
                  </template>

                </TopBar>
              </template>

              <Loading v-if="isLoading" />
              <ContextualSaveBar
                v-if="isDirty"
                message="Unsaved changes"
                :saveAction="{ onAction: () => { toggleToastActive(); toggleIsDirty() } }"
                :discardAction="{ onAction: toggleIsDirty, discardConfirmationModal: true }"
              />
              <Toast
                v-if="toastActive"
                content="Saved changes!"
                :duration="5000"
                @dismiss="toggleToastActive"
              />
            </Frame>
            <template>

            <script>
              export default {
                components: {
                  Frame, TopBar, TopBarUserMenu, TopBarMenu, Icon, TopBarSearchField, VisuallyHidden,
                  ActionList, NavigationSection, Navigation, Loading, ContextualSaveBar, Button, Toast
                },
                data() {
                  return {
                    isUserMenuOpen: false,
                    isSecondaryMenuOpen: false,
                    isSearchActive: false,
                    searchValue: '',
                    isCollapsed: false,
                    isLoading: false,
                    isDirty: false,
                    toastActive: false,
                    userMenuAction: [
                      { items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }] },
                      { items: [{ content: 'Community forums' }] },
                    ],
                    userMenuMessage: {
                      title: 'Another Message',
                      description:'This is a description of message',
                      action: { onClick: this.clickHandle, content: 'This is a action' },
                      link: { to: 'https://google.com', content: 'Google Homepage' }
                    },
                    navItems2: [
                      { label: 'Dashboard', icon: markRaw(HomeMajor), onClick: this.toggleIsLoading },
                      { label: 'Qikify Orders', icon: markRaw(OrdersMajor), onClick: this.toggleIsLoading },
                    ],
                  };
                },
                methods: {
                  handleSearchChange(value) {
                    this.isSearchActive = value.length > 0;
                  },
                  handleSearchResultsDismiss() {
                    this.searchValue = '';
                    this.isSearchActive = false;
                  },
                  toggleUserMenu() {
                    this.isUserMenuOpen = !this.isUserMenuOpen;
                  },
                  toggleIsSecondaryMenuOpen() {
                    this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen;
                  },
                  clickHandle() {
                    alert('clicked');
                  },
                  toggleCollapsed() {
                    this.isCollapsed = !this.isCollapsed;
                  },
                  toggleToastActive() {
                    this.toastActive = !this.toastActive;
                  },
                  toggleIsLoading() {
                    this.isLoading = !this.isLoading;
                  },
                },
                setup() {
                  const logo = {
                    width: 30,
                    topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                    contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                  }
                  const navItems = [
                    { label: 'Back to Shopify', icon: ArrowLeftMinor },
                  ];
                  return { logo, navItems, QuestionMarkMajor, CirclePlusOutlineMinor };
                },
              }
            <\/script>
          `],[`
            <template>
            <Frame :logo="logo" :showMobileNavigation="isCollapsed" @navigation-dismiss="toggleCollapsed">
              <template #navigation>
                <Navigation location="/">
                  <NavigationSection
                    :items="navItems"
                    :rollup="{ after: 7, view: 'view', hide: 'hide', activePath: '/' }"
                  />
                  <NavigationSection
                    separator
                    title="Sales channels"
                    :items="navItems2"
                    :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
                  />
                </Navigation>
              </template>\\n
              <template #topBar>
                <TopBar showNavigationToggle
                  :searchResultsVisible="isSearchActive"
                  @search-result-dismiss="handleSearchResultsDismiss"
                >\\n
                  <template #userMenu>
                    <TopBarUserMenu
                      :actions="userMenuAction"
                      name="Polaris"
                      detail="qikify"
                      initials="P"
                      :message="userMenuMessage"
                      :open="isUserMenuOpen"
                      @toggle="toggleUserMenu"
                    />
                  </template>\\n
                  <template #secondaryMenu>
                    <TopBarMenu
                      :open="isSecondaryMenuOpen"
                      @open="toggleIsSecondaryMenuOpen"
                      @close="toggleIsSecondaryMenuOpen"
                      :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
                    >
                      <template #activatorContent>
                        <span>
                          <Icon :source="QuestionMarkMajor" />
                          <VisuallyHidden>Secondary menu</VisuallyHidden>
                        </span>
                      </template>
                    </TopBarMenu>
                  </template>\\n
                  <template #searchField>
                    <TopBarSearchField
                      placeholder="Search"
                      v-model="searchValue"
                      :showFocusBorder="true"
                      @change="handleSearchChange"
                    />
                  </template>\\n
                  <template #searchResults>
                    <ActionList
                      :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
                    />
                  </template>\\n
                </TopBar>
              </template>\\n
              <Loading v-if="isLoading" />
              <ContextualSaveBar
                v-if="isDirty"
                message="Unsaved changes"
                :saveAction="{ onAction: () => { toggleToastActive(); toggleIsDirty() } }"
                :discardAction="{ onAction: toggleIsDirty, discardConfirmationModal: true }"
              />
              <Toast
                v-if="toastActive"
                content="Saved changes!"
                :duration="5000"
                @dismiss="toggleToastActive"
              />
            </Frame>
            <template>\\n
            <script>
              export default {
                components: {
                  Frame, TopBar, TopBarUserMenu, TopBarMenu, Icon, TopBarSearchField, VisuallyHidden,
                  ActionList, NavigationSection, Navigation, Loading, ContextualSaveBar, Button, Toast
                },
                data() {
                  return {
                    isUserMenuOpen: false,
                    isSecondaryMenuOpen: false,
                    isSearchActive: false,
                    searchValue: '',
                    isCollapsed: false,
                    isLoading: false,
                    isDirty: false,
                    toastActive: false,
                    userMenuAction: [
                      { items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }] },
                      { items: [{ content: 'Community forums' }] },
                    ],
                    userMenuMessage: {
                      title: 'Another Message',
                      description:'This is a description of message',
                      action: { onClick: this.clickHandle, content: 'This is a action' },
                      link: { to: 'https://google.com', content: 'Google Homepage' }
                    },
                    navItems2: [
                      { label: 'Dashboard', icon: markRaw(HomeMajor), onClick: this.toggleIsLoading },
                      { label: 'Qikify Orders', icon: markRaw(OrdersMajor), onClick: this.toggleIsLoading },
                    ],
                  };
                },
                methods: {
                  handleSearchChange(value) {
                    this.isSearchActive = value.length > 0;
                  },
                  handleSearchResultsDismiss() {
                    this.searchValue = '';
                    this.isSearchActive = false;
                  },
                  toggleUserMenu() {
                    this.isUserMenuOpen = !this.isUserMenuOpen;
                  },
                  toggleIsSecondaryMenuOpen() {
                    this.isSecondaryMenuOpen = !this.isSecondaryMenuOpen;
                  },
                  clickHandle() {
                    alert('clicked');
                  },
                  toggleCollapsed() {
                    this.isCollapsed = !this.isCollapsed;
                  },
                  toggleToastActive() {
                    this.toastActive = !this.toastActive;
                  },
                  toggleIsLoading() {
                    this.isLoading = !this.isLoading;
                  },
                },
                setup() {
                  const logo = {
                    width: 30,
                    topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                    contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                  }
                  const navItems = [
                    { label: 'Back to Shopify', icon: ArrowLeftMinor },
                  ];
                  return { logo, navItems, QuestionMarkMajor, CirclePlusOutlineMinor };
                },
              }
            <\/script>
          `])))}}};const bn={title:"Components / Structure / Frame",component:ta,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["frame"]},P$={Frame:"frame"};bn.parameters=bn.parameters||{};bn.parameters.docs=_(b({},bn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:P$,mdxComponentAnnotations:bn},e(Uy,null))});var M$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:dl,frame:Zc,default:bn});const pl=t=>({components:{Heading:It},setup(){return{args:t}},template:`
    <Heading v-bind="args">
      Online store dashboard
    </Heading>
  `}),_$={Template:pl},D$="wrapper";function jy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(D$,_(b(b({},_$),n),{components:t,mdxType:"MDXLayout"}),e("h1",null,"Heading"),e("p",null,`Headings are used as the titles of each major section of a page in the interface.
For example, card components generally use headings as their title.`),e(te,{title:"Components / Titles and text / Heading",component:It,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e(V,{mdxType:"Canvas"},e(H,{name:"Heading",height:"50px",parameters:{docs:{source:{code:P`
            <Heading>Online store dashboard</Heading>
          `}}},mdxType:"Story"},pl.bind({}))),e(se,{story:"Heading",mdxType:"ArgsTable"}))}jy.isMDXComponent=!0;const Qc=pl.bind({});Qc.storyName="Heading";Qc.parameters={storySource:{source:`args => ({
  components: {
    Heading
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <Heading v-bind="args">
      Online store dashboard
    </Heading>
  \`
})`},docs:{source:{code:P`
            <Heading>Online store dashboard</Heading>
          `}}};const fn={title:"Components / Titles and text / Heading",component:It,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},includeStories:["heading"]},I$={Heading:"heading"};fn.parameters=fn.parameters||{};fn.parameters.docs=_(b({},fn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:I$,mdxComponentAnnotations:fn},e(jy,null))});var B$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:pl,heading:Qc,default:fn}),Md=Object.freeze,$$=Object.defineProperty,zy=(t,n)=>Md($$(t,"raw",{value:Md(n||t.slice())})),_d,Dd;const ml=t=>({components:{Icon:re},setup(){if(t.source==="CirclePlusMinor")return{args:t,source:Cp};if(t.source==="BehaviorMajor")return{args:t,source:Ih};if(t.source==="placeholder")return{args:t,source:"placeholder"}},template:'<Icon :source="source" :color="args.color" :backdrop="args.backdrop" :accessibility-label="args.accessibilityLabel" />'}),F$={Template:ml},E$="wrapper";function Wy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(E$,_(b(b({},F$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Images and icons / Icon",component:re,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Icon"),e("p",null,`Icons are used to visually communicate core parts of the product and available actions.
They can act as wayfinding tools to help merchants more easily understand where they are in the product,
and common interaction patterns that are available.`),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Usage:")),e("p",null,"To use icons, you need to import svg icon as Vue component by using Vite plugin ",e("inlineCode",{parentName:"p"},"vite-svg-loader"),". Follow ",e("a",{parentName:"p",href:"?path=/docs/polaris-icons--page"},"this instruction"),".",e("br",null)),e("p",null,"You can find icon list from ",e("strong",{parentName:"p"},"Shopify Icon Library"),": ",e("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"here"),"."),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Example:")),e("p",null,"With Composition API:"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`<template>
  <Icon :source="CirclePlusMinor" />
</template>

<script setup>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
<\/script>
`)),e("p",null,"With Options API:"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`<script>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';

export default {
  setup() {
    return { CirclePlusMinor };
  },
}
<\/script>

<template>
  <Icon :source="CirclePlusMinor">
</template>
`)),e("h3",null,e("strong",{parentName:"h3"},"Demo & Properties")),e(V,{mdxType:"Canvas"},e(H,{name:"Icon",height:"30px",args:{source:"CirclePlusMinor"},parameters:{docs:{source:{code:P(_d||(_d=zy([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}},mdxType:"Story"},ml.bind({}))),e(se,{story:"Icon",mdxType:"ArgsTable"}))}Wy.isMDXComponent=!0;const yl=ml.bind({});yl.storyName="Icon";yl.args={source:"CirclePlusMinor"};yl.parameters={storySource:{source:`args => ({
  components: {
    Icon
  },

  setup() {
    if (args.source === 'CirclePlusMinor') {
      return {
        args,
        source: CirclePlusMinor
      };
    } else if (args.source === 'BehaviorMajor') {
      return {
        args,
        source: BehaviorMajor
      };
    } else if (args.source === 'placeholder') {
      return {
        args,
        source: 'placeholder'
      };
    }
  },

  template: \`<Icon :source="source" :color="args.color" :backdrop="args.backdrop" :accessibility-label="args.accessibilityLabel" />\`
})`},docs:{source:{code:P(Dd||(Dd=zy([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}};const vn={title:"Components / Images and icons / Icon",component:re,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["icon"]},O$={Icon:"icon"};vn.parameters=vn.parameters||{};vn.parameters.docs=_(b({},vn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:O$,mdxComponentAnnotations:vn},e(Wy,null))});var q$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ml,icon:yl,default:vn});const gl=t=>({components:{InlineError:Pa},setup(){return{args:t}},template:'<InlineError v-bind="args"/>'}),R$={Template:gl},V$="wrapper";function Gy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(V$,_(b(b({},R$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / InlineError",component:Pa,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Inline error"),e("p",null,`Inline errors are brief, in-context messages that tell merchants something went wrong with a single or group of inputs in a form
Use inline errors to help merchants understand why a form input may not be valid and how to fix it.`),e(V,{mdxType:"Canvas"},e(H,{name:"InlineError",args:{message:"Store name is required",fieldID:"myFieldID"},parameters:{docs:{source:{code:P`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}},mdxType:"Story"},gl.bind({}))),e(se,{story:"InlineError",mdxType:"ArgsTable"}))}Gy.isMDXComponent=!0;const hl=gl.bind({});hl.storyName="InlineError";hl.args={message:"Store name is required",fieldID:"myFieldID"};hl.parameters={storySource:{source:`args => ({
  components: {
    InlineError
  },

  setup() {
    return {
      args
    };
  },

  template: \`<InlineError v-bind="args"/>\`
})`},docs:{source:{code:P`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}};const xn={title:"Components / Forms / InlineError",component:Pa,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},includeStories:["inlineError"]},H$={InlineError:"inlineError"};xn.parameters=xn.parameters||{};xn.parameters.docs=_(b({},xn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:H$,mdxComponentAnnotations:xn},e(Gy,null))});var U$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:gl,inlineError:hl,default:xn});const bl=t=>({components:{KeyboardKey:Cs},setup(){return{args:t}},template:"<KeyboardKey>{{ args.default }}</KeyboardKey>"}),j$={Template:bl},z$="wrapper";function Xy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(z$,_(b(b({},j$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Images and icons / Keyboard key",component:Cs,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Keyboard Key"),e("p",null,"Keyboard key is used to educate merchants about keyboard shortcuts."),e(V,{mdxType:"Canvas"},e(H,{name:"Keyboard key",height:"50px",args:{default:"Ctrl"},parameters:{docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}},mdxType:"Story"},bl.bind({}))),e(se,{story:"Keyboard key",mdxType:"ArgsTable"}))}Xy.isMDXComponent=!0;const fl=bl.bind({});fl.storyName="Keyboard key";fl.args={default:"Ctrl"};fl.parameters={storySource:{source:`args => ({
  components: {
    KeyboardKey
  },

  setup() {
    return {
      args
    };
  },

  template: '<KeyboardKey>{{ args.default }}</KeyboardKey>'
})`},docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}};const Tn={title:"Components / Images and icons / Keyboard key",component:Cs,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},includeStories:["keyboardKey"]},W$={"Keyboard key":"keyboardKey"};Tn.parameters=Tn.parameters||{};Tn.parameters.docs=_(b({},Tn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:W$,mdxComponentAnnotations:Tn},e(Xy,null))});var G$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:bl,keyboardKey:fl,default:Tn});const vl=t=>({components:{Layout:Vt,LayoutSection:aa,AnnotatedSection:ya,TextField:Pe},template:`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),xl=t=>({components:{Layout:Vt,LayoutSection:aa,AnnotatedSection:ya,TextField:Pe},template:`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection secondary="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),Tl=t=>({components:{Layout:Vt,LayoutSection:aa,AnnotatedSection:ya,TextField:Pe},template:`
  <Layout>
    <LayoutSection oneHalf="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection oneHalf="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),Sl=t=>({components:{Layout:Vt,LayoutSection:aa,AnnotatedSection:ya,TextField:Pe},template:`
  <Layout>
    <LayoutSection oneThird="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection oneThird="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection oneThird="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),yi=t=>({components:{Layout:Vt,LayoutSection:aa,AnnotatedSection:ya,TextField:Pe,FormLayout:Rt},template:`
  <Layout>
    <AnnotatedSection>
      <template #title>Store details</template>
      <template #description>
        Shopify and your customers will use this information to contact you.
      </template>
      <FormLayout>
        <TextField autoComplete="off">
          <template #label>
            Store name
          </template>
        </TextField>
        <TextField type="email" autoComplete="email">
          <template #label>
            Account email
          </template>
        </TextField>
      </FormLayout>
    </AnnotatedSection>
  </Layout>`});yi.parameters={docs:{source:{state:"close",code:P`
        <Layout>
          <AnnotatedSection>
            <template #title>Store details</template>
            <template #description>
              Shopify and your customers will use this information to contact you.
            </template>
            <FormLayout>
              <TextField autoComplete="off">
                <template #label>
                  Store name
                </template>
              </TextField>
              <TextField type="email" autoComplete="email">
                <template #label>
                  Account email
                </template>
              </TextField>
            </FormLayout>
          </AnnotatedSection>
        </Layout>\n
        import { Layout, AnnotatedSection, FormLayout, TextField } from '@/polaris-vue';
      `}}};const gi=t=>({components:{Layout:Vt,LayoutSection:aa,AnnotatedSection:ya,TextField:Pe,FormLayout:Rt},template:`
  <Layout>
    <LayoutSection>
      Banner content
    </LayoutSection>
    <AnnotatedSection>
      <template #title>Store details</template>
      <template #description>
        Shopify and your customers will use this information to contact you.
      </template>
      <FormLayout>
        <TextField autoComplete="off">
          <template #label>
            Store name
          </template>
        </TextField>
        <TextField type="email" autoComplete="email">
          <template #label>
            Account email
          </template>
        </TextField>
      </FormLayout>
    </AnnotatedSection>
  </Layout>`});gi.parameters={docs:{source:{state:"close",code:P`
      <Layout>
        <LayoutSection>
          Banner content
        </LayoutSection>
        <AnnotatedSection>
          <template #title>Store details</template>
          <template #description>
            Shopify and your customers will use this information to contact you.
          </template>
          <FormLayout>
            <TextField autoComplete="off">
              <template #label>
                Store name
              </template>
            </TextField>
            <TextField type="email" autoComplete="email">
              <template #label>
                Account email
              </template>
            </TextField>
          </FormLayout>
        </AnnotatedSection>
      </Layout>\n
      import { Layout, AnnotatedSection, FormLayout, TextField } from '@/polaris-vue'
      `}}};const Cl=t=>({components:{Layout:Vt,LayoutSection:aa,AnnotatedSection:ya,TextField:Pe},setup(){return{args:t}},template:`
  <Layout v-bind="args">
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),X$={OneColLayout:vl,TwoColLayoutDW:xl,TwoColLayoutSW:Tl,ThreeColLayoutSW:Sl,AnnotatedLayout:yi,AnnotatedBannerLayout:gi,Example:Cl},K$="wrapper";function Ky(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(K$,_(b(b({},X$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Layout",component:Vt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},mdxType:"Meta"}),e("h1",null,"Layout"),e("p",null,`The layout component is used to create the main layout on a page.
Layouts sections come in three main configurations: one-column, two-column, and annotated.
One and two column layouts can be combined in the same page.
Annotated layouts should be used on their own and only on settings pages.`),e("br",null),e("br",null),e("h3",null,"One-column layout"),e("p",null,`Use to have a single section on its own in a full-width container.
Use for simple pages and as a container for banners and other full-width content.`),e(V,{mdxType:"Canvas"},e(H,{name:"One column layout",parameters:{docs:{source:{state:"close",code:P`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},vl.bind({}))),e("h3",null,"Two columns with primary and secondary widths"),e("p",null,`Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual product or order pages).
Can also be used on any page that needs to structure a lot of content. This layout stacks the columns on small screens.`),e(V,{mdxType:"Canvas"},e(H,{name:"Two columns (different width)",parameters:{docs:{source:{state:"close",code:P`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
              <LayoutSection secondary="true">
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},xl.bind({}))),e("h3",null,"Two columns with equal width"),e("p",null,`Use to create a \xBD + \xBD layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),e(V,{mdxType:"Canvas"},e(H,{name:"Two columns (same width)",parameters:{docs:{source:{state:"close",code:P`
          <Layout>
            <LayoutSection oneHalf="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
            <LayoutSection oneHalf="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},Tl.bind({}))),e("h3",null,"Three columns with equal width"),e("p",null,`Use to create a \u2153 + \u2153 + \u2153 layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),e(V,{mdxType:"Canvas"},e(H,{name:"Three columns (same width)",parameters:{docs:{source:{state:"close",code:P`
          <Layout>
            <LayoutSection oneThird="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
            <LayoutSection oneThird="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
            <LayoutSection oneThird="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>
          `}}},mdxType:"Story"},Sl.bind({}))),e("h3",null,"Annotated layout"),e("p",null,`Use for settings pages. When settings are grouped thematically in annotated sections,
the title and description on each section helps merchants quickly find the setting they're looking for.`),e(V,{mdxType:"Canvas"},e(H,{story:yi,name:"Annotated layout",mdxType:"Story"})),e("h3",null,"Annotated layout with Banner at the top"),e("p",null,"Use for settings pages that need a banner or other content at the top."),e(V,{mdxType:"Canvas"},e(H,{story:gi,name:"Annotated layout (with Banner)",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{name:"Example",height:"100px",parameters:{docs:{source:{code:P`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},Cl.bind({}))),e(se,{story:"Example",mdxType:"ArgsTable"}))}Ky.isMDXComponent=!0;const Jc=vl.bind({});Jc.storyName="One column layout";Jc.parameters={storySource:{source:`args => ({
  components: {
    Layout,
    LayoutSection,
    AnnotatedSection,
    TextField
  },
  template: \`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>\`
})`},docs:{source:{state:"close",code:P`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const eu=xl.bind({});eu.storyName="Two columns (different width)";eu.parameters={storySource:{source:`args => ({
  components: {
    Layout,
    LayoutSection,
    AnnotatedSection,
    TextField
  },
  template: \`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection secondary="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>\`
})`},docs:{source:{state:"close",code:P`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
              <LayoutSection secondary="true">
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const tu=Tl.bind({});tu.storyName="Two columns (same width)";tu.parameters={storySource:{source:`args => ({
  components: {
    Layout,
    LayoutSection,
    AnnotatedSection,
    TextField
  },
  template: \`
  <Layout>
    <LayoutSection oneHalf="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection oneHalf="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>\`
})`},docs:{source:{state:"close",code:P`
          <Layout>
            <LayoutSection oneHalf="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
            <LayoutSection oneHalf="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const au=Sl.bind({});au.storyName="Three columns (same width)";au.parameters={storySource:{source:`args => ({
  components: {
    Layout,
    LayoutSection,
    AnnotatedSection,
    TextField
  },
  template: \`
  <Layout>
    <LayoutSection oneThird="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection oneThird="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
    <LayoutSection oneThird="true">
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>\`
})`},docs:{source:{state:"close",code:P`
          <Layout>
            <LayoutSection oneThird="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
            <LayoutSection oneThird="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
            <LayoutSection oneThird="true">
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>
          `}}};const Yy=yi;Yy.storyName="Annotated layout";const Zy=gi;Zy.storyName="Annotated layout (with Banner)";const nu=Cl.bind({});nu.storyName="Example";nu.parameters={storySource:{source:`args => ({
  components: {
    Layout,
    LayoutSection,
    AnnotatedSection,
    TextField
  },

  setup() {
    return {
      args
    };
  },

  template: \`
  <Layout v-bind="args">
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>\`
})`},docs:{source:{code:P`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const Sn={title:"Components / Structure / Layout",component:Vt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},includeStories:["oneColumnLayout","twoColumnsDifferentWidth","twoColumnsSameWidth","threeColumnsSameWidth","_AnnotatedLayout_","_AnnotatedBannerLayout_","example"]},Y$={"One column layout":"oneColumnLayout","Two columns (different width)":"twoColumnsDifferentWidth","Two columns (same width)":"twoColumnsSameWidth","Three columns (same width)":"threeColumnsSameWidth","Annotated layout":"_AnnotatedLayout_","Annotated layout (with Banner)":"_AnnotatedBannerLayout_",Example:"example"};Sn.parameters=Sn.parameters||{};Sn.parameters.docs=_(b({},Sn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:Y$,mdxComponentAnnotations:Sn},e(Ky,null))});var Z$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",OneColLayout:vl,TwoColLayoutDW:xl,TwoColLayoutSW:Tl,ThreeColLayoutSW:Sl,AnnotatedLayout:yi,AnnotatedBannerLayout:gi,Example:Cl,oneColumnLayout:Jc,twoColumnsDifferentWidth:eu,twoColumnsSameWidth:tu,threeColumnsSameWidth:au,_AnnotatedLayout_:Yy,_AnnotatedBannerLayout_:Zy,example:nu,default:Sn});const Al=t=>({components:{Link:ga},setup(){return{args:t}},template:'<Link v-bind="args">Fulfilling orders</Link>'}),Q$={Template:Al},J$="wrapper";function Qy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(J$,_(b(b({},Q$),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Navigation / Link",component:ga,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Link"),e("p",null,"Links take users to another place, and usually appear within or directly following a sentence."),e("p",null,"For actions that aren't related to navigation, use the ",e("a",{parentName:"p",href:"/docs/components-actions-button--button"},"button component.")),e(V,{mdxType:"Canvas"},e(H,{name:"Link",parameters:{docs:{source:{code:P`
            <Link>Fulfilling orders</Link>
          `}}},mdxType:"Story"},Al.bind({}))),e(se,{story:"Link",mdxType:"ArgsTable"}))}Qy.isMDXComponent=!0;const ou=Al.bind({});ou.storyName="Link";ou.parameters={storySource:{source:`args => ({
  components: {
    Link
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Link v-bind="args">Fulfilling orders</Link>\`
})`},docs:{source:{code:P`
            <Link>Fulfilling orders</Link>
          `}}};const Cn={title:"Components / Navigation / Link",component:ga,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},includeStories:["link"]},eF={Link:"link"};Cn.parameters=Cn.parameters||{};Cn.parameters.docs=_(b({},Cn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:eF,mdxComponentAnnotations:Cn},e(Qy,null))});var tF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Al,link:ou,default:Cn});const kl=t=>({components:{List:Da,ListItem:zo},setup(){return{args:t}},template:`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>`}),aF={Template:kl},nF="wrapper";function Jy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(nF,_(b(b({},aF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Lists and tables / List",component:Da,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"List"),e("p",null,"Lists display a set of related text-only content. Each list item begins with a bullet or a number."),e(V,{mdxType:"Canvas"},e(H,{name:"List",height:"80px",args:{type:"bullet"},parameters:{docs:{source:{code:P`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}},mdxType:"Story"},kl.bind({}))),e(se,{story:"List",mdxType:"ArgsTable"}))}Jy.isMDXComponent=!0;const Nl=kl.bind({});Nl.storyName="List";Nl.args={type:"bullet"};Nl.parameters={storySource:{source:`args => ({
  components: {
    List,
    ListItem
  },

  setup() {
    return {
      args
    };
  },

  template: \`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>\`
})`},docs:{source:{code:P`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}};const An={title:"Components / Lists and tables / List",component:Da,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["list"]},oF={List:"list"};An.parameters=An.parameters||{};An.parameters.docs=_(b({},An.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:oF,mdxComponentAnnotations:An},e(Jy,null))});var iF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:kl,list:Nl,default:An});const hi=t=>({components:{Listbox:Nt,ListboxOption:Bt},template:`
  <Listbox accessibilityLabel="Basic Listbox example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});hi.parameters={docs:{source:{state:"close",code:P`
      <Listbox accessibilityLabel="Basic Listbox example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const bi=t=>({components:{Listbox:Nt,ListboxOption:Bt,ListboxLoading:Wo},template:`
  <Listbox accessibilityLabel="Listbox with loading example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});bi.parameters={docs:{source:{state:"close",code:P`
      <Listbox accessibilityLabel="Listbox with loading example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const fi=t=>({components:{Listbox:Nt,ListboxOption:Bt,ListboxAction:As},template:`
  <Listbox accessibilityLabel="Listbox with Action example">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});fi.parameters={docs:{source:{state:"close",code:P`
      <Listbox accessibilityLabel="Listbox with Action example">
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const vi=t=>({components:{Listbox:Nt,ListboxOption:Bt,ListboxLoading:Wo,ListboxAction:As},template:`
  <Listbox accessibilityLabel="Listbox with custom element example">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">
      <div>
        Option 1
      </div>
    </ListboxOption>
    <ListboxOption value="2">
      <div>
        Option 2
      </div>
    </ListboxOption>
    <ListboxOption value="3">
      <div>
        Option 3
      </div>
    </ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});vi.parameters={docs:{source:{state:"close",code:P`
      <Listbox accessibilityLabel="Listbox with custom element example">
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">
          <div>
            Option 1
          </div>
        </ListboxOption>
        <ListboxOption value="2">
          <div>
            Option 2
          </div>
        </ListboxOption>
        <ListboxOption value="3">
          <div>
            Option 3
          </div>
        </ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const xi=t=>({components:{Listbox:Nt,ListboxOption:Bt,ListboxLoading:Wo,ListboxAction:As},setup(){return{args:t}},template:`
  <Listbox v-bind="args">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});xi.parameters={docs:{source:{code:P`
      <Listbox>
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const sF={BasicListbox:hi,LoadingListbox:bi,ActionListbox:fi,CustomListbox:vi,ExampleListbox:xi},lF="wrapper";function eg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(lF,_(b(b({},sF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Lists and tables / Listbox",component:Nt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{table:{defaultValue:"Listbox example"}},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},mdxType:"Meta"}),e("h1",null,"Listbox"),e("p",null,"The Listbox component is a list component that implements part of ",e("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"},"the Aria 1.2 Listbox specs."),`
It presents a list of options and allows users to select one or more of them.
If you need more structure than the standard component offers, use composition to customize the presentation of these lists by using headers or custom elements.`),e("br",null),e("br",null),e("h3",null,"Basic Listbox"),e("p",null,"Basic implementation of a control element used to let merchants select options"),e(V,{mdxType:"Canvas"},e(H,{story:hi,name:"Basic Listbox",mdxType:"Story"})),e("h3",null,"Listbox with Loading"),e("p",null,"Implementation of a control element showing a loading indicator to let merchants know more options are being loaded"),e(V,{mdxType:"Canvas"},e(H,{story:bi,name:"Listbox with Loading",mdxType:"Story"})),e("h3",null,"Listbox with Action"),e("p",null,"Implementation of a control element used to let merchants take an action"),e(V,{mdxType:"Canvas"},e(H,{story:fi,name:"Listbox with Action",mdxType:"Story"})),e("h3",null,"Listbox with custom element"),e("p",null,"Implementation of a control with custom rendering of options"),e(V,{mdxType:"Canvas"},e(H,{story:vi,name:"Listbox with custom element",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{story:xi,name:"Example",height:"180px",mdxType:"Story"})),e(se,{story:"Example",mdxType:"ArgsTable"}))}eg.isMDXComponent=!0;const tg=hi;tg.storyName="Basic Listbox";const ag=bi;ag.storyName="Listbox with Loading";const ng=fi;ng.storyName="Listbox with Action";const og=vi;og.storyName="Listbox with custom element";const ig=xi;ig.storyName="Example";const kn={title:"Components / Lists and tables / Listbox",component:Nt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{table:{defaultValue:"Listbox example"}},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},includeStories:["_BasicListbox_","_LoadingListbox_","_ActionListbox_","_CustomListbox_","_ExampleListbox_"]},rF={"Basic Listbox":"_BasicListbox_","Listbox with Loading":"_LoadingListbox_","Listbox with Action":"_ActionListbox_","Listbox with custom element":"_CustomListbox_",Example:"_ExampleListbox_"};kn.parameters=kn.parameters||{};kn.parameters.docs=_(b({},kn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:rF,mdxComponentAnnotations:kn},e(eg,null))});var cF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicListbox:hi,LoadingListbox:bi,ActionListbox:fi,CustomListbox:vi,ExampleListbox:xi,_BasicListbox_:tg,_LoadingListbox_:ag,_ActionListbox_:ng,_CustomListbox_:og,_ExampleListbox_:ig,default:kn});const Ll=t=>({components:{Loading:Go,Frame:ta,Button:ge},data(){return{isActive:!1}},setup(){return{args:t}},template:`<Frame>
    <Loading v-if="isActive" />
    <br/>
    <Button @click="isActive = !isActive">Toggle loading</Button>
  </Frame>`}),uF={Template:Ll},dF="wrapper";function sg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(dF,_(b(b({},uF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Feedback indicators / Loading",component:Go,argTypes:{disabled:{table:{type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Loading"),e("p",null,"The loading component is used to indicate to merchants that a page is loading or an upload is processing."),e(V,{mdxType:"Canvas"},e(H,{name:"Loading",inline:!1,height:"100px",parameters:{docs:{source:{code:P`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}},mdxType:"Story"},Ll.bind({}))),e(se,{story:"Loading",mdxType:"ArgsTable"}))}sg.isMDXComponent=!0;const iu=Ll.bind({});iu.storyName="Loading";iu.parameters={storySource:{source:`args => ({
  components: {
    Loading,
    Frame,
    Button
  },

  data() {
    return {
      isActive: false
    };
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Frame>
    <Loading v-if="isActive" />
    <br/>
    <Button @click="isActive = !isActive">Toggle loading</Button>
  </Frame>\`
})`},docs:{source:{code:P`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}};const Nn={title:"Components / Feedback indicators / Loading",component:Go,argTypes:{disabled:{table:{type:{summary:null}}}},includeStories:["loading"]},pF={Loading:"loading"};Nn.parameters=Nn.parameters||{};Nn.parameters.docs=_(b({},Nn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:pF,mdxComponentAnnotations:Nn},e(sg,null))});var mF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ll,loading:iu,default:Nn});const wl=t=>({components:{MediaCard:ks},setup(){return{args:t}},template:`
    <MediaCard
      v-bind="args"
      :title="args.propTitle"
      :primaryAction="{ content: 'Add a product', onAction: () => { } }"
      :secondaryAction="{ content: 'Learn more', plain: true, onAction: () => { } }"
      :popoverActions="[{content: 'Dismiss', onAction: () => {}}]"
    >
      <img
        :style="{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }"
        src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
      />
    </MediaCard>
  `}),yF={Template:wl},gF="wrapper";function lg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(gF,_(b(b({},yF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Media card",component:ks,argTypes:{title:{description:"Heading content. This slot will override `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},propTitle:{name:"title",description:"Heading content.",table:{category:"props",type:{summary:"string"}}},description:{table:{type:{summary:"string"}}},popoverActions:{control:{disable:!0},table:{defaultValue:{summary:null},type:{summary:"ActionListItemDescriptor[]"}}},primaryAction:{control:{disable:!0}},secondaryAction:{control:{disable:!0}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:"small | medium"}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Media card"),e("p",null,"Media cards provide a consistent layout to present visual information to merchants. Visual media is used to provide additional context to the written information it's paired with."),e(V,{mdxType:"Canvas"},e(H,{name:"Media card",height:"300px",inline:!1,args:{size:"medium",portrait:!1,propTitle:"Get closer to launching your store",description:"Start your business with eye-catching inventory."},parameters:{docs:{source:{code:P`
            <MediaCard
              title="Get closer to launching your store",
              :primaryAction="{ content: 'Add a product', onAction: () => { } }",
              :secondaryAction="{ content: 'Learn more', plain: true, onAction: () => { } }"
              description="Start your business with eye-catching inventory."
              :popoverActions="[{content: 'Dismiss', onAction: () => {}}]"
            >
              <img
                :style="{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }"
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          `}}},mdxType:"Story"},wl.bind({}))),e(se,{story:"Media card",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Complex Action")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"outline?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as an outlined button.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"plain?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as a plain link.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ActionListItemDescriptor")),e("p",null,"Array of type: ",e("inlineCode",{parentName:"p"},"ActionListItemDescriptor[]")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether the action is active or not.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge?"),e("td",{parentName:"tr",align:null},'{content: string, status: "new"}'),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"ellipsis?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Add an ellipsis suffix to action content.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"helpText?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Additional hint text to display with item.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"image?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Image source.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"prefixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Prefix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"role?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Defines a role for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"suffixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Suffix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}lg.isMDXComponent=!0;const Pl=wl.bind({});Pl.storyName="Media card";Pl.args={size:"medium",portrait:!1,propTitle:"Get closer to launching your store",description:"Start your business with eye-catching inventory."};Pl.parameters={storySource:{source:`args => ({
  components: {
    MediaCard
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <MediaCard
      v-bind="args"
      :title="args.propTitle"
      :primaryAction="{ content: 'Add a product', onAction: () => { } }"
      :secondaryAction="{ content: 'Learn more', plain: true, onAction: () => { } }"
      :popoverActions="[{content: 'Dismiss', onAction: () => {}}]"
    >
      <img
        :style="{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }"
        src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
      />
    </MediaCard>
  \`
})`},docs:{source:{code:P`
            <MediaCard
              title="Get closer to launching your store",
              :primaryAction="{ content: 'Add a product', onAction: () => { } }",
              :secondaryAction="{ content: 'Learn more', plain: true, onAction: () => { } }"
              description="Start your business with eye-catching inventory."
              :popoverActions="[{content: 'Dismiss', onAction: () => {}}]"
            >
              <img
                :style="{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }"
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
              />
            </MediaCard>
          `}}};const Ln={title:"Components / Structure / Media card",component:ks,argTypes:{title:{description:"Heading content. This slot will override `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},propTitle:{name:"title",description:"Heading content.",table:{category:"props",type:{summary:"string"}}},description:{table:{type:{summary:"string"}}},popoverActions:{control:{disable:!0},table:{defaultValue:{summary:null},type:{summary:"ActionListItemDescriptor[]"}}},primaryAction:{control:{disable:!0}},secondaryAction:{control:{disable:!0}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:"small | medium"}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}}},includeStories:["mediaCard"]},hF={"Media card":"mediaCard"};Ln.parameters=Ln.parameters||{};Ln.parameters.docs=_(b({},Ln.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:hF,mdxComponentAnnotations:Ln},e(lg,null))});var bF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:wl,mediaCard:Pl,default:Ln}),Id=Object.freeze,fF=Object.defineProperty,Ml=(t,n)=>Id(fF(t,"raw",{value:Id(n||t.slice())})),Bd,$d,Fd,Ed;const _l=t=>({components:{ModalSection:no,TextContainer:ut,Button:ge,Modal:Ia},data(){return{active:!0}},methods:{toggleActive(){this.active=!this.active}},template:`
    <Modal
      :open="active"
      @close="toggleActive"
      :primaryAction="{ content:'Add Instagram', onAction: toggleActive }"
      :secondaryActions="[{ content:'Learn more', onAction: toggleActive }]"
    >
      <template #activator>
        <Button @click="toggleActive"> Open </Button>
      </template>
      <template #title> Reach more shoppers with Instagram product tags </template>
      <template #content>
        <ModalSection>
          <TextContainer>
            <p> Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without leaving Instagram.</p>
          </TextContainer>
        </ModalSection>
      </template>
    </Modal>`}),vo=t=>({components:{Modal:Ia,Button:ge,ModalSection:no,TextContainer:ut},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleScrolledToBottom(){alert("Scrolled to bottom")}},template:`
    <Modal
      :open="active"
      :primary-action="{ content:'Close', onAction: toggle }"
      @close="toggle"
      @scrolled-to-bottom="handleScrolledToBottom"
    >
      <template #activator>
        <Button @click="toggle">
          Open
        </Button>
      </template>
      <template #title>
        Scrollable content
      </template>
      <template #content>
        <ModalSection
          v-for="index in 50"
          :key="index"
        >
          <TextContainer>
            <p>
              Item <a href="#"> #{{ index }} </a>
            </p>
          </TextContainer>
        </ModalSection>
      </template>
    </Modal>
  `});vo.storyName="With scroll listener";vo.parameters={docs:{source:{code:P(Bd||(Bd=Ml([`
        <template>
          <Modal
            :open="active"
            :primary-action="{ content:'Close', onAction: toggle }"
            @close="toggle"
            @scrolled-to-bottom="handleScrolledToBottom"
          >
            <template #activator>
              <Button @click="toggle">
                Open
              </Button>
            </template>
            <template #title>
              Scrollable content
            </template>
            <template #content>
              <ModalSection
                v-for="index in 50"
                :key="index"
              >
                <TextContainer>
                  <p>
                    Item <a href="#"> #{{ index }} </a>
                  </p>
                </TextContainer>
              </ModalSection>
            </template>
          </Modal>
        </template>
        <script>
          components: { Modal, Button, ModalSection, TextContainer },
          data() {
            return {
              active: true,
            };
          },
          methods: {
            toggle() {
              this.active = !this.active;
            },
            handleScrolledToBottom() {
              alert("Scrolled to bottom");
            },
          },
        <\/script>
        `])))}}};const xo=t=>({components:{Modal:Ia,Button:ge,Stack:qe,StackItem:Ct,TextField:Pe,TextContainer:ut,ModalSection:no},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleClick(){alert("Copy to clipboard successful")}},template:`
    <Modal :open="active" :primary-action="{ content:'Close', onAction: toggle }" @close="toggle">
      <template #activator>
        <Button @click="toggle">Open</Button>
      </template>
      <template #title>Get a shareable link</template>
      <template #content>
        <ModalSection>
          <Stack vertical no-item-wrap>
            <StackItem>
              <TextContainer>
                <p> Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without leaving Instagram.</p>
              </TextContainer>
            </StackItem>
            <StackItem fill>
              <TextField
                ref="node"
                model-value="https://polaris.shopify.com/"
                label="Discount link"
                auto-complete="off"
              >
                <template #connected-right>
                  <Button primary @click="handleClick">Copy link</Button>
                </template>
              </TextField>
            </StackItem>
          </Stack>
        </ModalSection>
      </template>
    </Modal>`});xo.storyName="With primary action";xo.parameters={docs:{source:{code:P($d||($d=Ml([`
        <template>
          <Modal :open="active" :primary-action="{ content:'Close', onAction: toggle }" @close="toggle">
            <template #activator>
              <Button @click="toggle">Open</Button>
            </template>
            <template #title>Get a shareable link</template>
            <template #content>
              <ModalSection>
                <Stack vertical no-item-wrap>
                  <StackItem>
                    <TextContainer>
                      <p> Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without leaving Instagram.</p>
                    </TextContainer>
                  </StackItem>
                  <StackItem fill>
                    <TextField
                      model-value="https://polaris.shopify.com/"
                      label="Discount link"
                      auto-complete="off"
                    >
                      <template #connected-right>
                        <Button primary @click="handleClick">Copy link</Button>
                      </template>
                    </TextField>
                  </StackItem>
                </Stack>
              </ModalSection>
            </template>
          </Modal>
        </template>
        <script>
          components: { Modal, Button, Stack, StackItem, TextField, TextContainer, ModalSection },
          data() {
            return {
              active: true,
            };
          },
          methods: {
            toggle() {
              this.active = !this.active;
            },
            handleClick() {
              alert("Copy to clipboard successful");
            },
          },
        <\/script>
      `])))}}};const vF={Template:_l,scrollExample:vo,primaryActionExample:xo},xF="wrapper";function rg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(xF,_(b(b({},vF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Overlays / Modal",component:Ia,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Modal"),e("p",null,"Modals are overlays that require merchants to take an action before they can continue interacting with the rest of Shopify. They can be disruptive and should be used thoughtfully and sparingly."),e("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),e("br",null),e("br",null),e("br",null),e("h3",null,"With primary action"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:xo,height:"500px",inline:!1,name:"_primaryActionExample_",mdxType:"Story"})),e("h3",null,"With scroll listener"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:vo,height:"500px",inline:!1,name:"_scrollExample_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},e(H,{name:"Modal",inline:!1,height:"500px",args:{colorScheme:"light"},parameters:{docs:{source:{code:P(Fd||(Fd=Ml([`
            <template>
              <Modal
                :open="active"
                @close="toggleActive"
                :primaryAction="{ content:'Add Instagram', onAction: toggleActive }"
                :secondaryActions="[{ content:'Learn more', onAction: toggleActive }]"
              >
                <template #activator>
                  <Button @click="toggleActive"> Open </Button>
                </template>
                <template #title> Reach more shoppers with Instagram product tags </template>
                <template #content>
                  <ModalSection>
                    <TextContainer>
                      <p> Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without leaving Instagram.</p>
                    </TextContainer>
                  </ModalSection>
                </template>
              </Modal>
            </template>
            <script>
              components: { ModalSection, TextContainer, Button, Modal },
              data() {
                return {
                  active: true,
                };
              },
              methods: {
                toggleActive() {
                  this.active = !this.active;
                },
              },
            <\/script>
            `])))}}},mdxType:"Story"},_l.bind({}))),e(se,{story:"Modal",mdxType:"ArgsTable"}))}rg.isMDXComponent=!0;const TF=xo,SF=vo,Dl=_l.bind({});Dl.storyName="Modal";Dl.args={colorScheme:"light"};Dl.parameters={storySource:{source:`args => ({
  components: {
    ModalSection,
    TextContainer,
    Button,
    Modal
  },

  data() {
    return {
      active: true
    };
  },

  methods: {
    toggleActive() {
      this.active = !this.active;
    }

  },
  template: \`
    <Modal
      :open="active"
      @close="toggleActive"
      :primaryAction="{ content:'Add Instagram', onAction: toggleActive }"
      :secondaryActions="[{ content:'Learn more', onAction: toggleActive }]"
    >
      <template #activator>
        <Button @click="toggleActive"> Open </Button>
      </template>
      <template #title> Reach more shoppers with Instagram product tags </template>
      <template #content>
        <ModalSection>
          <TextContainer>
            <p> Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without leaving Instagram.</p>
          </TextContainer>
        </ModalSection>
      </template>
    </Modal>\`
})`},docs:{source:{code:P(Ed||(Ed=Ml([`
            <template>
              <Modal
                :open="active"
                @close="toggleActive"
                :primaryAction="{ content:'Add Instagram', onAction: toggleActive }"
                :secondaryActions="[{ content:'Learn more', onAction: toggleActive }]"
              >
                <template #activator>
                  <Button @click="toggleActive"> Open </Button>
                </template>
                <template #title> Reach more shoppers with Instagram product tags </template>
                <template #content>
                  <ModalSection>
                    <TextContainer>
                      <p> Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without leaving Instagram.</p>
                    </TextContainer>
                  </ModalSection>
                </template>
              </Modal>
            </template>
            <script>
              components: { ModalSection, TextContainer, Button, Modal },
              data() {
                return {
                  active: true,
                };
              },
              methods: {
                toggleActive() {
                  this.active = !this.active;
                },
              },
            <\/script>
            `])))}}};const wn={title:"Components / Overlays / Modal",component:Ia,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_primaryActionExample_","_scrollExample_","modal"]},CF={_primaryActionExample_:"_primaryActionExample_",_scrollExample_:"_scrollExample_",Modal:"modal"};wn.parameters=wn.parameters||{};wn.parameters.docs=_(b({},wn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:CF,mdxComponentAnnotations:wn},e(rg,null))});var AF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:_l,scrollExample:vo,primaryActionExample:xo,_primaryActionExample_:TF,_scrollExample_:SF,modal:Dl,default:wn});const Il=t=>({components:{Frame:ta,Navigation:Xo,NavigationSection:Tc},setup(){return{navItems:[{url:"#",label:"Home",icon:Bh},{url:"#",label:"Orders",icon:xp},{url:"#",label:"Products",icon:$h,selected:!0,subNavigationItems:[{url:"#",new:!0,label:"New item"},{url:"#",label:"Active Item",selected:!0},{url:"#",disabled:!0,label:"New item"}]},{url:"#",label:"Marketing",icon:Fh,badge:{content:"Warn",status:"warning"}}],navItems2:[{url:"#",label:"Online Store",icon:Eh},{url:"/path/to/place",label:"Secondary action",secondaryAction:{url:"#",accessibilityLabel:"View your online store",icon:Oh}}],CirclePlusOutlineMinor:Sp}},template:`
    <Frame>
      <template #navigation>
        <Navigation location="/">
          <NavigationSection
            :items="navItems"
            :rollup="{ after: 3, view: 'view', hide: 'hide', activePath: '/' }"
          />
          <NavigationSection
            separator
            title="Sales channels"
            :items="navItems2"
            :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
          />
        </Navigation>
      </template>
    </Frame>
  `}),kF={Template:Il},NF="wrapper";function cg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(NF,_(b(b({},kF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Navigation / Navigation",component:Xo,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Navigation"),e("p",null,"The navigation component is used to display the primary navigation in the sidebar of the ",e("a",{parentName:"p",href:"?path=/docs/components-structure-frame--frame"},"frame")," of an application. Navigation includes a list of links that merchants use to move between sections of the application."),e(V,{mdxType:"Canvas"},e(H,{name:"Navigation",inline:!1,height:"500px",parameters:{docs:{source:{code:P`
             <Frame>
              <template #navigation>
                <Navigation location="/">
                  <NavigationSection
                    :items="navItems"
                    :rollup="{ after: 3, view: 'view', hide: 'hide', activePath: '/' }"
                  />
                  <NavigationSection
                    separator
                    title="Sales channels"
                    :items="navItems2"
                    :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
                  />
                </Navigation>
              </template>
            </Frame>\n
            setup() {
              const navItems = [
                { url: '#', label: 'Home', icon: HomeMinor },
                { url: '#', label: 'Orders', icon: OrdersMinor },
                { url: '#', label: 'Products', icon: ProductsMinor, selected: true,
                  subNavigationItems: [
                    { url: '#', new: true, label: 'New item' },
                    { url: '#', label: 'Active Item', selected: true},
                    { url: '#', disabled: true, label: 'New item' },
                  ],
                },
                { url: '#', label: 'Marketing', icon: MarketingMinor, badge: { content: 'Warn', status: 'warning' }},
              ];
              const navItems2 = [
                { url: '#', label: 'Online Store', icon: OnlineStoreMinor },
                { url: '/path/to/place', label: 'Secondary action',
                  secondaryAction: { url: '#', accessibilityLabel: 'View your online store', icon: ViewMinor },
                },
              ];
              return { navItems, navItems2, CirclePlusOutlineMinor };
            },
          `}}},mdxType:"Story"},Il.bind({}))),e(se,{story:"Navigation",mdxType:"ArgsTable"}),e("h3",null,e("strong",{parentName:"h3"},"Navigation Section")),e("p",null,"A navigation section groups together related navigation items. Navigation sections can be clarified by a heading. Merchants can use a section to easily find navigation items within a specific category."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"items"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-item"},"Item[]")),e("td",{parentName:"tr",align:null},"A collection of navigation items to be rendered inside the section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon"),e("td",{parentName:"tr",align:null},"IconProps","['source']"),e("td",{parentName:"tr",align:null},"An icon to be displayed next to the section title")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property providing a title for the navigation section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"fill"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should take up all vertical space available")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"rollup"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-rollup"},"Rollup[]")),e("td",{parentName:"tr",align:null},"An object determining the collapsing behavior of the navigation section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"action"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-action"},"Action[]")),e("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to the section title")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"separator"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should have a visual separator")))),e("a",{name:"type-item"}),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Navigation section item")),e("p",null,"The content of the navigation component consists of navigation items. Each item is a link or action a merchant can take."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A location for the navigation item to navigate to when clicked")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"matches"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to a closely matching location property")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"exactMatch"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to an exactly matching location property")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"matchPaths"),e("td",{parentName:"tr",align:null},"string[]"),e("td",{parentName:"tr",align:null},"A string property providing a collection of additional paths for the navigation item to respond to")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"excludePaths"),e("td",{parentName:"tr",align:null},"string[]"),e("td",{parentName:"tr",align:null},"A string property providing an explicit collection of paths the navigation item should not respond to")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon"),e("td",{parentName:"tr",align:null},"IconProps","['source']"),e("td",{parentName:"tr",align:null},"An icon to be displayed next to the navigation. Please prefer minor icons here. If a major icon has to be used, set the ",e("inlineCode",{parentName:"td"},"shouldResizeIcon")," prop to true")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge"),e("td",{parentName:"tr",align:null},"string ","|"," null"),e("td",{parentName:"tr",align:null},"A string property allowing content to be displayed in a badge next to the navigation item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"label"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property allowing content to be displayed as link text in the navigation item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is disabled")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"new"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Indicate whether the navigation item is new by adding an indicator dot to the parent and badge to the item (overwritten by the badge prop)")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of a navigation item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"selected"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is the currently-selected item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"shouldResizeIcon"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Will allow for major icons to be displayed at the same size as minor icons")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"subNavigationItems"),e("td",{parentName:"tr",align:null},"SubNavigationItem[]"),e("td",{parentName:"tr",align:null},"A collection of navigation items rendered as nested secondary navigation items")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"secondaryAction"),e("td",{parentName:"tr",align:null},"SecondaryAction"),e("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to a navigation item")))),e("br",null),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Events"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@click"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle clicking on a navigation item")))),e("br",null),e("a",{name:"type-rollup"}),e("h3",null,e("strong",{parentName:"h3"},"Navigation section rollup")),e("p",null,"Rollup allows items in a navigation section to roll up and be revealed when they are of use to the merchant."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"after"),e("td",{parentName:"tr",align:null},"number"),e("td",{parentName:"tr",align:null},"A number of items after which the navigation section should be collapsed")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"view"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property providing content for the section view action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hide"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property providing content for the section hide action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"activePath"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property representing the current URL of your application")))),e("br",null),e("a",{name:"type-action"}),e("h3",null,e("strong",{parentName:"h3"},"Navigation section action")),e("p",null,"Action allows a complementary icon-only action to render next to the section title."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon"),e("td",{parentName:"tr",align:null},"IconProps","['source']"),e("td",{parentName:"tr",align:null},"An icon to be displayed as the content of the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onClick()"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle clicking on the action")))))}cg.isMDXComponent=!0;const su=Il.bind({});su.storyName="Navigation";su.parameters={storySource:{source:`args => ({
  components: {
    Frame,
    Navigation,
    NavigationSection
  },

  setup() {
    const navItems = [{
      url: '#',
      label: 'Home',
      icon: HomeMinor
    }, {
      url: '#',
      label: 'Orders',
      icon: OrdersMinor
    }, {
      url: '#',
      label: 'Products',
      icon: ProductsMinor,
      selected: true,
      subNavigationItems: [{
        url: '#',
        new: true,
        label: 'New item'
      }, {
        url: '#',
        label: 'Active Item',
        selected: true
      }, {
        url: '#',
        disabled: true,
        label: 'New item'
      }]
    }, {
      url: '#',
      label: 'Marketing',
      icon: MarketingMinor,
      badge: {
        content: 'Warn',
        status: 'warning'
      }
    }];
    const navItems2 = [{
      url: '#',
      label: 'Online Store',
      icon: OnlineStoreMinor
    }, {
      url: '/path/to/place',
      label: 'Secondary action',
      secondaryAction: {
        url: '#',
        accessibilityLabel: 'View your online store',
        icon: ViewMinor
      }
    }];
    return {
      navItems,
      navItems2,
      CirclePlusOutlineMinor
    };
  },

  template: \`
    <Frame>
      <template #navigation>
        <Navigation location="/">
          <NavigationSection
            :items="navItems"
            :rollup="{ after: 3, view: 'view', hide: 'hide', activePath: '/' }"
          />
          <NavigationSection
            separator
            title="Sales channels"
            :items="navItems2"
            :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
          />
        </Navigation>
      </template>
    </Frame>
  \`
})`},docs:{source:{code:P`
             <Frame>
              <template #navigation>
                <Navigation location="/">
                  <NavigationSection
                    :items="navItems"
                    :rollup="{ after: 3, view: 'view', hide: 'hide', activePath: '/' }"
                  />
                  <NavigationSection
                    separator
                    title="Sales channels"
                    :items="navItems2"
                    :action="{ accessibilityLabel: 'Add sales channel', icon: CirclePlusOutlineMinor, onClick: () => {}}"
                  />
                </Navigation>
              </template>
            </Frame>\n
            setup() {
              const navItems = [
                { url: '#', label: 'Home', icon: HomeMinor },
                { url: '#', label: 'Orders', icon: OrdersMinor },
                { url: '#', label: 'Products', icon: ProductsMinor, selected: true,
                  subNavigationItems: [
                    { url: '#', new: true, label: 'New item' },
                    { url: '#', label: 'Active Item', selected: true},
                    { url: '#', disabled: true, label: 'New item' },
                  ],
                },
                { url: '#', label: 'Marketing', icon: MarketingMinor, badge: { content: 'Warn', status: 'warning' }},
              ];
              const navItems2 = [
                { url: '#', label: 'Online Store', icon: OnlineStoreMinor },
                { url: '/path/to/place', label: 'Secondary action',
                  secondaryAction: { url: '#', accessibilityLabel: 'View your online store', icon: ViewMinor },
                },
              ];
              return { navItems, navItems2, CirclePlusOutlineMinor };
            },
          `}}};const Pn={title:"Components / Navigation / Navigation",component:Xo,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},includeStories:["navigation"]},LF={Navigation:"navigation"};Pn.parameters=Pn.parameters||{};Pn.parameters.docs=_(b({},Pn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:LF,mdxComponentAnnotations:Pn},e(cg,null))});var wF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Il,navigation:su,default:Pn}),Od=Object.freeze,PF=Object.defineProperty,ts=(t,n)=>Od(PF(t,"raw",{value:Od(n||t.slice())})),qd,Rd,Vd,Hd;const Bl=t=>({components:{Card:Ye,OptionList:Ko,TextStyle:ct,Icon:re},setup(){const n=k([]);return{changeSelected:l=>{console.log("changeSelected",l)},selected:n,options:[{value:"byward_market",label:"Byward Market"},{id:"centre",value:"centretown",label:"Centretown"},{value:"hintonburg",label:"Hintonburg"},{value:"westboro",label:"Westboro"},{value:"downtown",label:"Downtown"}],FoodMajor:qh}},template:`
    <Card>
      <OptionList
        id="option-list-1"
        title="Inventory Location"
        v-model="selected"
        :options="options"
        @change="changeSelected"
      >
        <template #option-label-centre>
          <TextStyle variation="positive">Centretown</TextStyle>
        </template>
        <template #option-media-centre>
          <Icon :source="FoodMajor"/>
        </template>
      </OptionList>
    </Card>
    <br/>
    <p><strong>Value:</strong> {{ selected }}</p>
  `}),$l=t=>({components:{Card:Ye,OptionList:Ko},setup(){const n=k([]);return{args:t,changeSelectedvalue:l=>{console.log("changeSelectedvalue",l)},selectedValue:n,sections:[{options:[{value:"type",label:"Sale item type"},{value:"kind",label:"Sale kind"}]},{title:"Traffic",options:[{value:"source",label:"Traffic referrer source"},{value:"host",label:"Traffic referrer host"},{value:"path",label:"Traffic referrer path"}]}]}},template:`
    <Card>
      <OptionList
        v-bind="args"
        v-model="selectedValue"
        :sections="sections"
        @change="changeSelectedvalue"
      />
    </Card>
    <br/><p><strong>Value:</strong> {{ selectedValue }}</p>
  `}),MF={Template1:Bl,Template:$l},_F="wrapper";function ug(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(_F,_(b(b({},MF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Lists and tables / Option List",component:Ko,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},mdxType:"Meta"}),e("h1",null,"Option List"),e("br",null),e("p",null,"The option list component lets you create a list of grouped items that merchants can pick from. This can include single selection or multiple selection of options. Option list usually appears in a popover, and sometimes in a modal or a sidebar. Option lists are styled differently than ",e("a",{parentName:"p",href:"?path=/docs/components-forms-choice-list"},"choice lists")," and should not be used within a form, but as a standalone menu."),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Simple option list")),e("p",null,"Use sections when you have multiple groups of similar selectable items."),e(V,{mdxType:"Canvas"},e(H,{name:"Option list",parameters:{docs:{source:{state:"close",code:P(qd||(qd=ts([`
            <Card>
              <OptionList
                v-model="selected"
                :options="options"
                @change="changeSelected"
              >
                <template #option-label-centre>
                  <TextStyle variation="positive">Centretown</TextStyle>
                </template>
                <template #option-media-centre>
                  <Icon :source="FoodMajor"/>
                </template>
              </OptionList>
            </Card>

            <script setup>
              const options = [
                {value: 'byward_market', label: 'Byward Market'},
                {id: 'centre', value: 'centretown', label: 'Centretown'},
                {value: 'hintonburg', label: 'Hintonburg'},
                {value: 'westboro', label: 'Westboro'},
                {value: 'downtown', label: 'Downtown'},
              ];

              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `],[`
            <Card>
              <OptionList
                v-model="selected"
                :options="options"
                @change="changeSelected"
              >
                <template #option-label-centre>
                  <TextStyle variation="positive">Centretown</TextStyle>
                </template>
                <template #option-media-centre>
                  <Icon :source="FoodMajor"/>
                </template>
              </OptionList>
            </Card>\\n
            <script setup>
              const options = [
                {value: 'byward_market', label: 'Byward Market'},
                {id: 'centre', value: 'centretown', label: 'Centretown'},
                {value: 'hintonburg', label: 'Hintonburg'},
                {value: 'westboro', label: 'Westboro'},
                {value: 'downtown', label: 'Downtown'},
              ];\\n
              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `])))}}},mdxType:"Story"},Bl.bind({}))),e("h3",null,e("strong",{parentName:"h3"},"Option list with sections")),e("p",null,"Use sections when you have multiple groups of similar selectable items."),e(V,{mdxType:"Canvas"},e(H,{name:"Option list with sections",args:{allowMultiple:!0},parameters:{docs:{source:{code:P(Rd||(Rd=ts([`
            <Card>
              <OptionList
                v-model="selectedValue"
                :sections="sections"
                allow-multiple
                @change="changeSelectedvalue"
              />
            </Card>

            <script setup>
              const sections = [
                {
                  options: [
                    { value: 'type', label: 'Sale item type' },
                    { value: 'kind', label: 'Sale kind' },
                  ],
                }, {
                  title: 'Traffic',
                  options: [
                    { value: 'source', label: 'Traffic referrer source' },
                    { value: 'host', label: 'Traffic referrer host' },
                    { value: 'path', label: 'Traffic referrer path' },
                  ],
                }];

              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `],[`
            <Card>
              <OptionList
                v-model="selectedValue"
                :sections="sections"
                allow-multiple
                @change="changeSelectedvalue"
              />
            </Card>\\n
            <script setup>
              const sections = [
                {
                  options: [
                    { value: 'type', label: 'Sale item type' },
                    { value: 'kind', label: 'Sale kind' },
                  ],
                }, {
                  title: 'Traffic',
                  options: [
                    { value: 'source', label: 'Traffic referrer source' },
                    { value: 'host', label: 'Traffic referrer host' },
                    { value: 'path', label: 'Traffic referrer path' },
                  ],
                }];\\n
              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `])))}}},mdxType:"Story"},$l.bind({}))),e(se,{story:"Option list with sections",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"OptionDescriptor Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"value"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Value of the option")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"label"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Display label for the option")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether the option is disabled or not")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Whether the option is active or not")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Unique identifier for the option")))),e("br",null),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"SectionDescriptor Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"options"),e("td",{parentName:"tr",align:null},"OptionDescriptor[]"),e("td",{parentName:"tr",align:null},"Collection of options within the section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Section title")))))}ug.isMDXComponent=!0;const lu=Bl.bind({});lu.storyName="Option list";lu.parameters={storySource:{source:`args => ({
  components: {
    Card,
    OptionList,
    TextStyle,
    Icon
  },

  setup() {
    const selected = ref([]);

    const changeSelected = value => {
      console.log('changeSelected', value);
    };

    const options = [{
      value: 'byward_market',
      label: 'Byward Market'
    }, {
      id: 'centre',
      value: 'centretown',
      label: 'Centretown'
    }, {
      value: 'hintonburg',
      label: 'Hintonburg'
    }, {
      value: 'westboro',
      label: 'Westboro'
    }, {
      value: 'downtown',
      label: 'Downtown'
    }];
    return {
      changeSelected,
      selected,
      options,
      FoodMajor
    };
  },

  template: \`
    <Card>
      <OptionList
        id="option-list-1"
        title="Inventory Location"
        v-model="selected"
        :options="options"
        @change="changeSelected"
      >
        <template #option-label-centre>
          <TextStyle variation="positive">Centretown</TextStyle>
        </template>
        <template #option-media-centre>
          <Icon :source="FoodMajor"/>
        </template>
      </OptionList>
    </Card>
    <br/>
    <p><strong>Value:</strong> {{ selected }}</p>
  \`
})`},docs:{source:{state:"close",code:P(Vd||(Vd=ts([`
            <Card>
              <OptionList
                v-model="selected"
                :options="options"
                @change="changeSelected"
              >
                <template #option-label-centre>
                  <TextStyle variation="positive">Centretown</TextStyle>
                </template>
                <template #option-media-centre>
                  <Icon :source="FoodMajor"/>
                </template>
              </OptionList>
            </Card>

            <script setup>
              const options = [
                {value: 'byward_market', label: 'Byward Market'},
                {id: 'centre', value: 'centretown', label: 'Centretown'},
                {value: 'hintonburg', label: 'Hintonburg'},
                {value: 'westboro', label: 'Westboro'},
                {value: 'downtown', label: 'Downtown'},
              ];

              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `],[`
            <Card>
              <OptionList
                v-model="selected"
                :options="options"
                @change="changeSelected"
              >
                <template #option-label-centre>
                  <TextStyle variation="positive">Centretown</TextStyle>
                </template>
                <template #option-media-centre>
                  <Icon :source="FoodMajor"/>
                </template>
              </OptionList>
            </Card>\\n
            <script setup>
              const options = [
                {value: 'byward_market', label: 'Byward Market'},
                {id: 'centre', value: 'centretown', label: 'Centretown'},
                {value: 'hintonburg', label: 'Hintonburg'},
                {value: 'westboro', label: 'Westboro'},
                {value: 'downtown', label: 'Downtown'},
              ];\\n
              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `])))}}};const Fl=$l.bind({});Fl.storyName="Option list with sections";Fl.args={allowMultiple:!0};Fl.parameters={storySource:{source:`args => ({
  components: {
    Card,
    OptionList
  },

  setup() {
    const selectedValue = ref([]);

    const changeSelectedvalue = value => {
      console.log('changeSelectedvalue', value);
    };

    const sections = [{
      options: [{
        value: 'type',
        label: 'Sale item type'
      }, {
        value: 'kind',
        label: 'Sale kind'
      }]
    }, {
      title: 'Traffic',
      options: [{
        value: 'source',
        label: 'Traffic referrer source'
      }, {
        value: 'host',
        label: 'Traffic referrer host'
      }, {
        value: 'path',
        label: 'Traffic referrer path'
      }]
    }];
    return {
      args,
      changeSelectedvalue,
      selectedValue,
      sections
    };
  },

  template: \`
    <Card>
      <OptionList
        v-bind="args"
        v-model="selectedValue"
        :sections="sections"
        @change="changeSelectedvalue"
      />
    </Card>
    <br/><p><strong>Value:</strong> {{ selectedValue }}</p>
  \`
})`},docs:{source:{code:P(Hd||(Hd=ts([`
            <Card>
              <OptionList
                v-model="selectedValue"
                :sections="sections"
                allow-multiple
                @change="changeSelectedvalue"
              />
            </Card>

            <script setup>
              const sections = [
                {
                  options: [
                    { value: 'type', label: 'Sale item type' },
                    { value: 'kind', label: 'Sale kind' },
                  ],
                }, {
                  title: 'Traffic',
                  options: [
                    { value: 'source', label: 'Traffic referrer source' },
                    { value: 'host', label: 'Traffic referrer host' },
                    { value: 'path', label: 'Traffic referrer path' },
                  ],
                }];

              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `],[`
            <Card>
              <OptionList
                v-model="selectedValue"
                :sections="sections"
                allow-multiple
                @change="changeSelectedvalue"
              />
            </Card>\\n
            <script setup>
              const sections = [
                {
                  options: [
                    { value: 'type', label: 'Sale item type' },
                    { value: 'kind', label: 'Sale kind' },
                  ],
                }, {
                  title: 'Traffic',
                  options: [
                    { value: 'source', label: 'Traffic referrer source' },
                    { value: 'host', label: 'Traffic referrer host' },
                    { value: 'path', label: 'Traffic referrer path' },
                  ],
                }];\\n
              const selected = ref([]);
              const changeSelected = (value) => { console.log('changeSelected', value) };
            <\/script>
          `])))}}};const Mn={title:"Components / Lists and tables / Option List",component:Ko,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},includeStories:["optionList","optionListWithSections"]},DF={"Option list":"optionList","Option list with sections":"optionListWithSections"};Mn.parameters=Mn.parameters||{};Mn.parameters.docs=_(b({},Mn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:DF,mdxComponentAnnotations:Mn},e(ug,null))});var IF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template1:Bl,Template:$l,optionList:lu,optionListWithSections:Fl,default:Mn});const El=t=>({components:{Page:Ns,Badge:st,Card:Ye,Button:ge},setup(){const n=()=>{console.log("click")},x=t,{breadcrumbs:o,primaryAction:i,secondaryActions:l,actionGroups:r,pagination:u}=x;return{rest:J(x,["breadcrumbs","primaryAction","secondaryActions","actionGroups","pagination"]),handleClick:n}},template:`
    <Page
      v-bind="rest"
      :breadcrumbs="[{content: 'Products', url: '/products'}]"
      :primaryAction="{ content: 'Save', disabled: true }"
      :secondaryActions="[{ content: 'Duplicate', onAction: handleClick }]"
      :actionGroups="[{ title: 'Promote', actions: [{ content: 'Share on Facebook', onAction: handleClick }] }]"
      :pagination="{ hasPrevious: true, hasNext: true }"
    >
      <template #pageTitle>
        <Badge status="success">Paid</Badge>
      </template>
      <template #primaryAction>
        <Button primary :connectedDisclosure="{ accessibilityLabel: 'Other save actions', actions: [{content: 'Save as new'}] }">
          Save
        </Button>
      </template>
      <Card sectioned>
        <template #title>Credit card</template>
        <p>Credit card information</p>
      </Card>
    </Page>
  `}),BF={Template:El},$F="wrapper";function dg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e($F,_(b(b({},BF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Page",component:Ns,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Page"),e("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),e("h4",null,e("strong",{parentName:"h4"},"Related components")),e("ul",null,e("li",{parentName:"ul"},"To lay out the content within a page, use the ",e("a",{parentName:"li",href:"?path=/docs/components-structure-layout"},"layout component"),"."),e("li",{parentName:"ul"},"To add pagination within the context of a list or other page content, use the ",e("a",{parentName:"li",href:"?path=/docs/components-navigation-pagination"},"pagination component"),"."),e("li",{parentName:"ul"},"To add primary and secondary calls to action at the bottom of a page, see the ",e("a",{parentName:"li",href:"?path=/docs/components-structure-page-actions"},"page actions component"),".")),e(V,{mdxType:"Canvas"},e(H,{name:"Page",inline:!1,height:"250px",args:{fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1},parameters:{docs:{source:{code:P`
            <Page
              :fullWidth="true"
              title="3/4 inch Leather pet collar",
              subtitle="Perfect for any pet",
              :breadcrumbs="[{content: 'Products', url: '/products'}]"
              :primaryAction="{ content: 'Save', disabled: true }"
              :secondaryActions="[{ content: 'Duplicate', onAction: handleClick }]"
              :actionGroups="[{ title: 'Promote', actions: [{ content: 'Share on Facebook', onAction: handleClick }] }]"
              :pagination="{ hasPrevious: true, hasNext: true }"
            >
              <template #pageTitle>
                <Badge status="success">Paid</Badge>
              </template>
              <template #primaryAction>
                <Button primary :connectedDisclosure="{ accessibilityLabel: 'Other save actions', actions: [{content: 'Save as new'}] }">
                  Save
                </Button>
              </template>\n
              <Card sectioned>
                <template #title>Credit card</template>
                <p>Credit card information</p>
              </Card>
            </Page>
          `}}},mdxType:"Story"},El.bind({}))),e(se,{story:"Page",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Breadcrumbs Props")),e("p",null,e("strong",{parentName:"p"},"Example: ")),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// CallbackAction
<Page :breadcrumbs="[{ content: 'Order', onAction: handleAction }]"></Page>

// LinkAction
<Page :breadcrumbs="[{ content: 'Products', url: '/products' }]"></Page>
`)),e("p",null,e("inlineCode",{parentName:"p"},"CallbackAction")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction()"),e("td",{parentName:"tr",align:null},"Function"),e("td",{parentName:"tr",align:null},"Callback when an action takes place")))),e("br",null),e("p",null,e("inlineCode",{parentName:"p"},"LinkAction")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to")))),e("br",null),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Pagination Props")),e("p",null,"See the ",e("a",{parentName:"p",href:"?path=/docs/components-navigation-pagination"},"pagination component")," for more details."),e("p",null,e("strong",{parentName:"p"},"Example: ")),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`<Page :pagination="{ hasPrevious: true, hasNext: true, onPrevious: handlePrevious, onNext: handleNext }"></Page>
`)),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"nextKeys"),e("td",{parentName:"tr",align:null},"Key[]"),e("td",{parentName:"tr",align:null},"Keyboard shortcuts for the next button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"previousKeys"),e("td",{parentName:"tr",align:null},"Key[]"),e("td",{parentName:"tr",align:null},"Keyboard shortcuts for the previous button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"nextTooltip"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Tooltip for the next button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"previousTooltip"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Tooltip for the previous button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"nextURL"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"The URL of the next page")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"previousURL"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"The URL of the previous page")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hasNext"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether there is a next page to show")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hasPrevious"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether there is a previous page to show")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Accessible label for the pagination")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabels"),e("td",{parentName:"tr",align:null},"AccessibilityLabels"),e("td",{parentName:"tr",align:null},"Accessible labels for the buttons and UnstyledLinks")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onNext()"),e("td",{parentName:"tr",align:null},"Function"),e("td",{parentName:"tr",align:null},"Callback when next button is clicked")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onPrevious()"),e("td",{parentName:"tr",align:null},"Function"),e("td",{parentName:"tr",align:null},"Callback when previous button is clicked")))))}dg.isMDXComponent=!0;const Ol=El.bind({});Ol.storyName="Page";Ol.args={fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1};Ol.parameters={storySource:{source:`args => ({
  components: {
    Page,
    Badge,
    Card,
    Button
  },

  setup() {
    const handleClick = () => {
      console.log('click');
    };

    const {
      breadcrumbs,
      primaryAction,
      secondaryActions,
      actionGroups,
      pagination,
      ...rest
    } = args;
    return {
      rest,
      handleClick
    };
  },

  template: \`
    <Page
      v-bind="rest"
      :breadcrumbs="[{content: 'Products', url: '/products'}]"
      :primaryAction="{ content: 'Save', disabled: true }"
      :secondaryActions="[{ content: 'Duplicate', onAction: handleClick }]"
      :actionGroups="[{ title: 'Promote', actions: [{ content: 'Share on Facebook', onAction: handleClick }] }]"
      :pagination="{ hasPrevious: true, hasNext: true }"
    >
      <template #pageTitle>
        <Badge status="success">Paid</Badge>
      </template>
      <template #primaryAction>
        <Button primary :connectedDisclosure="{ accessibilityLabel: 'Other save actions', actions: [{content: 'Save as new'}] }">
          Save
        </Button>
      </template>
      <Card sectioned>
        <template #title>Credit card</template>
        <p>Credit card information</p>
      </Card>
    </Page>
  \`
})`},docs:{source:{code:P`
            <Page
              :fullWidth="true"
              title="3/4 inch Leather pet collar",
              subtitle="Perfect for any pet",
              :breadcrumbs="[{content: 'Products', url: '/products'}]"
              :primaryAction="{ content: 'Save', disabled: true }"
              :secondaryActions="[{ content: 'Duplicate', onAction: handleClick }]"
              :actionGroups="[{ title: 'Promote', actions: [{ content: 'Share on Facebook', onAction: handleClick }] }]"
              :pagination="{ hasPrevious: true, hasNext: true }"
            >
              <template #pageTitle>
                <Badge status="success">Paid</Badge>
              </template>
              <template #primaryAction>
                <Button primary :connectedDisclosure="{ accessibilityLabel: 'Other save actions', actions: [{content: 'Save as new'}] }">
                  Save
                </Button>
              </template>\n
              <Card sectioned>
                <template #title>Credit card</template>
                <p>Credit card information</p>
              </Card>
            </Page>
          `}}};const _n={title:"Components / Structure / Page",component:Ns,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["page"]},FF={Page:"page"};_n.parameters=_n.parameters||{};_n.parameters.docs=_(b({},_n.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:FF,mdxComponentAnnotations:_n},e(dg,null))});var EF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:El,page:Ol,default:_n}),Ud=Object.freeze,OF=Object.defineProperty,pg=(t,n)=>Ud(OF(t,"raw",{value:Ud(n||t.slice())})),jd,zd;const ql=t=>({components:{PageActions:Ls},setup(){return{args:t,handleClick:()=>{console.log("click")}}},template:`
    <PageActions
      :primaryAction="{ content: 'Save', onClick: handleClick }"
      :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
    />
  `}),qF={Template:ql},RF="wrapper";function mg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(RF,_(b(b({},qF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Page actions",component:Ls,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Page Actions"),e("p",null,"Page actions let merchants take key actions at the bottom of specific pages in the interface. This is important because sometimes the primary call to action is hard to access when merchants are at the bottom of a page."),e(V,{mdxType:"Canvas"},e(H,{name:"Page actions",height:"100px",parameters:{docs:{source:{code:P(jd||(jd=pg([`
            <PageActions
              :primaryAction="{ content: 'Save', onClick: handleClick }"
              :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
            />

            <script setup>
              const handleClick = () => {
                console.log('click');
              };
            <\/script>
          `],[`
            <PageActions
              :primaryAction="{ content: 'Save', onClick: handleClick }"
              :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
            />\\n
            <script setup>
              const handleClick = () => {
                console.log('click');
              };
            <\/script>
          `])))}}},mdxType:"Story"},ql.bind({}))),e(se,{story:"Page actions",mdxType:"ArgsTable"}))}mg.isMDXComponent=!0;const ru=ql.bind({});ru.storyName="Page actions";ru.parameters={storySource:{source:`args => ({
  components: {
    PageActions
  },

  setup() {
    const handleClick = () => {
      console.log('click');
    };

    return {
      args,
      handleClick
    };
  },

  template: \`
    <PageActions
      :primaryAction="{ content: 'Save', onClick: handleClick }"
      :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
    />
  \`
})`},docs:{source:{code:P(zd||(zd=pg([`
            <PageActions
              :primaryAction="{ content: 'Save', onClick: handleClick }"
              :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
            />

            <script setup>
              const handleClick = () => {
                console.log('click');
              };
            <\/script>
          `],[`
            <PageActions
              :primaryAction="{ content: 'Save', onClick: handleClick }"
              :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
            />\\n
            <script setup>
              const handleClick = () => {
                console.log('click');
              };
            <\/script>
          `])))}}};const Dn={title:"Components / Structure / Page actions",component:Ls,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},includeStories:["pageActions"]},VF={"Page actions":"pageActions"};Dn.parameters=Dn.parameters||{};Dn.parameters.docs=_(b({},Dn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:VF,mdxComponentAnnotations:Dn},e(mg,null))});var HF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ql,pageActions:ru,default:Dn}),Wd=Object.freeze,UF=Object.defineProperty,yg=(t,n)=>Wd(UF(t,"raw",{value:Wd(n||t.slice())})),Gd,Xd;const Rl=t=>({components:{Pagination:Yo},setup(){return{args:t,handlePrevious:()=>{console.log("previous")},handleNext:()=>{console.log("next")}}},template:`
    <Pagination
      v-bind="args"
      @previous="handlePrevious"
      @next="handleNext"
    >
      Results
    </Pagination>
  `}),jF={Template:Rl},zF="wrapper";function gg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(zF,_(b(b({},jF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Navigation / Pagination",component:Yo,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Pagination"),e("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),e(V,{mdxType:"Canvas"},e(H,{name:"Pagination",inline:!1,height:"100px",args:{hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"},parameters:{docs:{source:{code:P(Gd||(Gd=yg([`
            <Pagination
              has-previous
              has-next
              :nextKeys="['k']"
              :previousKeys="['j']"
              nextTooltip="Press K"
              previousTooltip="Press J"
              @previous="handlePrevious"
              @next="handleNext"
            >
              Results
            </Pagination>

            <script setup>
              const handleNext = () => {
                console.log('next');
              };
              const handlePrevious = () => {
                console.log('previous');
              };
            <\/script>
          `],[`
            <Pagination
              has-previous
              has-next
              :nextKeys="['k']"
              :previousKeys="['j']"
              nextTooltip="Press K"
              previousTooltip="Press J"
              @previous="handlePrevious"
              @next="handleNext"
            >
              Results
            </Pagination>\\n
            <script setup>
              const handleNext = () => {
                console.log('next');
              };
              const handlePrevious = () => {
                console.log('previous');
              };
            <\/script>
          `])))}}},mdxType:"Story"},Rl.bind({}))),e(se,{story:"Pagination",mdxType:"ArgsTable"}))}gg.isMDXComponent=!0;const Vl=Rl.bind({});Vl.storyName="Pagination";Vl.args={hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"};Vl.parameters={storySource:{source:`args => ({
  components: {
    Pagination
  },

  setup() {
    const handleNext = () => {
      console.log('next');
    };

    const handlePrevious = () => {
      console.log('previous');
    };

    return {
      args,
      handlePrevious,
      handleNext
    };
  },

  template: \`
    <Pagination
      v-bind="args"
      @previous="handlePrevious"
      @next="handleNext"
    >
      Results
    </Pagination>
  \`
})`},docs:{source:{code:P(Xd||(Xd=yg([`
            <Pagination
              has-previous
              has-next
              :nextKeys="['k']"
              :previousKeys="['j']"
              nextTooltip="Press K"
              previousTooltip="Press J"
              @previous="handlePrevious"
              @next="handleNext"
            >
              Results
            </Pagination>

            <script setup>
              const handleNext = () => {
                console.log('next');
              };
              const handlePrevious = () => {
                console.log('previous');
              };
            <\/script>
          `],[`
            <Pagination
              has-previous
              has-next
              :nextKeys="['k']"
              :previousKeys="['j']"
              nextTooltip="Press K"
              previousTooltip="Press J"
              @previous="handlePrevious"
              @next="handleNext"
            >
              Results
            </Pagination>\\n
            <script setup>
              const handleNext = () => {
                console.log('next');
              };
              const handlePrevious = () => {
                console.log('previous');
              };
            <\/script>
          `])))}}};const In={title:"Components / Navigation / Pagination",component:Yo,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["pagination"]},WF={Pagination:"pagination"};In.parameters=In.parameters||{};In.parameters.docs=_(b({},In.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:WF,mdxComponentAnnotations:In},e(gg,null))});var GF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Rl,pagination:Vl,default:In}),Kd=Object.freeze,XF=Object.defineProperty,Hl=(t,n)=>Kd(XF(t,"raw",{value:Kd(n||t.slice())})),Yd,Zd,Qd,Jd;const Ul=(t,{argTypes:n})=>({components:{ActionList:Je,Button:ge,Popover:et},data(){return{active:!0,items:[{content:"Import file"},{content:"Export file"}]}},methods:{toggleActive(){this.active=!this.active}},template:`
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @close="toggleActive"
      :colorScheme="'${t.colorScheme}'"
    >
      <template #activator>
        <Button :disclosure="true" @click="toggleActive"> More actions </Button>
      </template>
      <template #content> <ActionList :items="items"/> </template>
    </Popover>`}),To=(t,{argTypes:n})=>({components:{ActionList:Je,Button:ge,Popover:et,Pane:cs,PopoverSection:$o},data(){return{active:!0,items:[{content:"Online store"},{content:"Facebook"},{content:"Shopify POS"}]}},methods:{toggleActive(){this.active=!this.active}},template:` <div>
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @close="toggleActive"
    >
      <template #activator>
        <Button :disclosure="true" @click="toggleActive"> Sales channels </Button>
      </template>
      <template #extra-content>
        <Pane fixed> <PopoverSection> <p>Available sales channels</p> </PopoverSection> </Pane>
      </template>
      <template #content>
        <ActionList actionRole="menuitem" :items="items" />
      </template>
    </Popover>
  </div>`});To.storyName="With content and actions";To.parameters={docs:{source:{code:P(Yd||(Yd=Hl([`
        <template>
          <Popover
            :active="active"
            autofocusTarget="first-node"
            @close="toggleActive"
          >
            <template #activator>
              <Button :disclosure="true" @click="toggleActive"> Sales channels </Button>
            </template>
            <template #extra-content>
              <Pane fixed> <PopoverSection> <p>Available sales channels</p> </PopoverSection> </Pane>
            </template>
            <template #content>
              <ActionList actionRole="menuitem" :items="items" />
            </template>
          </Popover>
        </template>
        <script>
          components: { ActionList, Button, Popover, Pane, PopoverSection },
          data() {
            return {
              active: true,
              items: [
                {content: 'Online store'},
                {content: 'Facebook'},
                {content: 'Shopify POS'},
              ]
            };
          },
          methods: {
            toggleActive() {
              this.active = !this.active;
            },
          },
        <\/script>
        `])))}}};const So=(t,{argTypes:n})=>({components:{Button:ge,Popover:et,FormLayout:Rt,TextField:Pe,Select:co},data(){return{active:!0,options:[{label:"Tagged with",value:"Tagged with"}],selectedValue:"Tagged with",tagValue:""}},methods:{toggleActive(){this.active=!this.active},handleTagValueChange(o){this.tagValue=o}},template:` <div>
    <Popover
      :active="active"
      aria-haspopup="false"
      sectioned
      @close="toggleActive"
    >
      <template #activator>
        <Button :disclosure="true" @click="toggleActive"> Filter </Button>
      </template>
      <template #content>
        <FormLayout>
          <Select :options="options" v-model="selectedValue">
            <template #label>Show all customers where:</template>
          </Select>
          <TextField :value="tagValue" @change="handleTagValueChange" autoComplete="off">
            <template #label>Tags</template>
          </TextField>
          <Button size="slim">Add filter</Button>
        </FormLayout>
      </template>
    </Popover>
  </div>`});So.storyName="With form components";So.parameters={docs:{source:{code:P(Zd||(Zd=Hl([`
        <template>
          <Popover
            :active="active"
            aria-haspopup="false"
            sectioned
            @close="toggleActive"
          >
            <template #activator>
              <Button :disclosure="true" @click="toggleActive"> Filter </Button>
            </template>
            <template #content>
              <FormLayout>
                <Select :options="options" v-model="selectedValue">
                  <template #label>Show all customers where:</template>
                </Select>
                <TextField :value="tagValue" @change="handleTagValueChange" autoComplete="off">
                  <template #label>Tags</template>
                </TextField>
                <Button size="slim">Add filter</Button>
              </FormLayout>
            </template>
          </Popover>
        </template>
        <script>
          components: { Button, Popover, FormLayout, TextField, Select },
          data() {
            return {
              active: true,
              options: [{label: 'Tagged with', value: 'Tagged with'}],
              selectedValue: 'Tagged with',
              tagValue: '',
            };
          },
          methods: {
            toggleActive() {
              this.active = !this.active;
            },
            handleTagValueChange(value) {
              this.tagValue = value;
            },
          },
        <\/script>
        `])))}}};const KF={Template:Ul,ContentAndActions:To,FormComponents:So},YF="wrapper";function hg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(YF,_(b(b({},KF),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Overlays / Popover",component:et,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Popover"),e("p",null,"Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page."),e("p",null,"For ActionList usages, use the ",e("a",{parentName:"p",href:"/docs/components-actions-actionlist--action-list"},"ActionList component.")),e("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),e("br",null),e("br",null),e("br",null),e("h3",null,"With Content and Actions"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:To,height:"280px",inline:!1,name:"_ContentAndActions_",mdxType:"Story"})),e("h3",null,"With Form Components"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:So,height:"280px",inline:!1,name:"_FormComponents_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},e(H,{name:"Popover",inline:!1,height:"300px",args:{colorScheme:"light"},parameters:{docs:{source:{code:P(Qd||(Qd=Hl([`
            <template>
              <Popover
                :active="active"
                autofocusTarget="first-node"
                @close="toggleActive"
              >
                <template #activator>
                  <Button :disclosure="true" @click="toggleActive"> More actions </Button>
                </template>
                <template #content> <ActionList :items="items"/> </template>
              </Popover>
            </template>
            <script>
              data() {
                return {
                  active: true,
                  items: [
                    { content: 'Import file' },
                    { content: 'Export file' },
                  ]
                };
              },
              methods: {
                toggleActive() {
                  this.active = !this.active;
                },
              },
            <\/script>
          `])))}}},mdxType:"Story"},Ul.bind({}))),e(se,{story:"Popover",mdxType:"ArgsTable"}))}hg.isMDXComponent=!0;const ZF=To,QF=So,jl=Ul.bind({});jl.storyName="Popover";jl.args={colorScheme:"light"};jl.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    ActionList,
    Button,
    Popover
  },

  data() {
    return {
      active: true,
      items: [{
        content: "Import file"
      }, {
        content: "Export file"
      }]
    };
  },

  methods: {
    toggleActive() {
      this.active = !this.active;
    }

  },
  template: \`
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @close="toggleActive"
      :colorScheme="'\${args.colorScheme}'"
    >
      <template #activator>
        <Button :disclosure="true" @click="toggleActive"> More actions </Button>
      </template>
      <template #content> <ActionList :items="items"/> </template>
    </Popover>\`
})`},docs:{source:{code:P(Jd||(Jd=Hl([`
            <template>
              <Popover
                :active="active"
                autofocusTarget="first-node"
                @close="toggleActive"
              >
                <template #activator>
                  <Button :disclosure="true" @click="toggleActive"> More actions </Button>
                </template>
                <template #content> <ActionList :items="items"/> </template>
              </Popover>
            </template>
            <script>
              data() {
                return {
                  active: true,
                  items: [
                    { content: 'Import file' },
                    { content: 'Export file' },
                  ]
                };
              },
              methods: {
                toggleActive() {
                  this.active = !this.active;
                },
              },
            <\/script>
          `])))}}};const Bn={title:"Components / Overlays / Popover",component:et,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_ContentAndActions_","_FormComponents_","popover"]},JF={_ContentAndActions_:"_ContentAndActions_",_FormComponents_:"_FormComponents_",Popover:"popover"};Bn.parameters=Bn.parameters||{};Bn.parameters.docs=_(b({},Bn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:JF,mdxComponentAnnotations:Bn},e(hg,null))});var eE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ul,ContentAndActions:To,FormComponents:So,_ContentAndActions_:ZF,_FormComponents_:QF,popover:jl,default:Bn});const zl=t=>({components:{ProgressBar:ws},setup(){return{args:t}},template:'<ProgressBar v-bind="args"/>'}),tE={Template:zl},aE="wrapper";function bg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(aE,_(b(b({},tE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Feedback indicators / Progress bar",component:ws,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Progress bar"),e("p",null,"The progress bar component is used to visually represent the completion of a task or operation. It shows how much of the task has been completed and how much is still left."),e("br",null),e("br",null),e(V,{mdxType:"Canvas"},e(H,{name:"Progress bar",height:"60px",args:{progress:75},parameters:{docs:{source:{code:P`
            <ProgressBar v-bind="props"/>
          `}}},mdxType:"Story"},zl.bind({}))),e(se,{story:"Progress bar",mdxType:"ArgsTable"}))}bg.isMDXComponent=!0;const Wl=zl.bind({});Wl.storyName="Progress bar";Wl.args={progress:75};Wl.parameters={storySource:{source:`args => ({
  components: {
    ProgressBar
  },

  setup() {
    return {
      args
    };
  },

  template: \`<ProgressBar v-bind="args"/>\`
})`},docs:{source:{code:P`
            <ProgressBar v-bind="props"/>
          `}}};const $n={title:"Components / Feedback indicators / Progress bar",component:ws,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["progressBar"]},nE={"Progress bar":"progressBar"};$n.parameters=$n.parameters||{};$n.parameters.docs=_(b({},$n.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:nE,mdxComponentAnnotations:$n},e(bg,null))});var oE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:zl,progressBar:Wl,default:$n});const Ti=t=>({components:{RadioButton:Ho},setup(){return{args:t}},template:`
  <div>
    <RadioButton
      name="demoRadioButton"
      value="disabled"
      v-model="demoValue"
    >
      <template #label>Accounts are disabled</template>
      <template #help-text>Customers will only be able to check out as guests.</template>
    </RadioButton>
    <RadioButton
      v-bind="args"
      name="demoRadioButton"
      value="optional"
      v-model="demoValue"
    >
      <template #label>Accounts are optional</template>
      <template #help-text>Customers will be able to check out with a customer account or as a guests.</template>
    </RadioButton>
    <p style="margin-top: 30px"> Selected: {{ demoValue }} </p>
  </div>`,data(){return{demoValue:"disabled"}}});Ti.parameters={docs:{source:{code:P`
        <div>
          <RadioButton
            name="demoRadioButton"
            value="disabled"
            v-model="demoValue"
          >
            <template #label>Accounts are disabled</template>
            <template #help-text>Customers will only be able to check out as guests.</template>
          </RadioButton>
          <RadioButton
            name="demoRadioButton"
            value="optional"
            v-model="demoValue"
          >
            <template #label>Accounts are optional</template>
            <template #help-text>Customers will be able to check out with a customer account or as a guests.</template>
          </RadioButton>
          <p> Selected: {{ demoValue }} </p>
        </div>
      `}}};const iE={Template:Ti},sE="wrapper";function fg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(sE,_(b(b({},iE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Radio Button",component:Ho,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Radio button"),e("p",null,"Use radio buttons to present each item in a list of options where merchants must make a single selection."),e(V,{mdxType:"Canvas"},e(H,{story:Ti,name:"Radio Button",mdxType:"Story"})),e(se,{story:"Radio Button",mdxType:"ArgsTable"}))}fg.isMDXComponent=!0;const vg=Ti;vg.storyName="Radio Button";const Fn={title:"Components / Forms / Radio Button",component:Ho,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_Template_"]},lE={"Radio Button":"_Template_"};Fn.parameters=Fn.parameters||{};Fn.parameters.docs=_(b({},Fn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:lE,mdxComponentAnnotations:Fn},e(fg,null))});var rE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ti,_Template_:vg,default:Fn}),ep=Object.freeze,cE=Object.defineProperty,as=(t,n)=>ep(cE(t,"raw",{value:ep(n||t.slice())})),tp,ap,np,op;const Gl=t=>({components:{RangeSlider:Ba,Card:Ye},setup(){const n=k(30);return{args:t,rangeValue:n}},template:`
    <Card sectioned>
      <template #title>Text color</template>
      <RangeSlider v-model="rangeValue" v-bind="args">
        <template #prefix>Hue</template>
        <template #suffix>{{ rangeValue }}</template>
      </RangeSlider>
    </Card>
  `}),Xl=t=>({components:{RangeSlider:Ba,Card:Ye},setup(){const n=k(0);return{args:t,rangeValue:n}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <br/><p>Value: {{ rangeValue }}</p>
    </Card>
  `}),Kl=t=>({components:{RangeSlider:Ba,Card:Ye,Stack:qe,TextField:Pe},setup(){const n=k([900,1e3]),o=k("900"),i=k("1000");return{args:t,rangeValue:n,minValue:o,maxValue:i,handleMinChange:m=>{m.target.value<n.value[1]&&(n.value[0]=parseInt(m.target.value))},handleMaxChange:m=>{m.target.value>n.value[0]&&(n.value[1]=parseInt(m.target.value))},handleRangeChange:m=>{o.value=`${m[0]}`,i.value=`${m[1]}`}}},template:`
    <Card sectioned>
      <template #title>Minimum requirements</template>
      <RangeSlider v-model="rangeValue" @change="handleRangeChange" v-bind="args" />
      <Stack distribution="equalSpacing" spacing="extraLoose">
        <TextField v-model="minValue" type="number" min="0" max="rangeValue[1]" :step="10" autoComplete="off" @change="handleMinChange">
          <template #label>Min money spent</template>
          <template #prefix>$</template>
        </TextField>
        <TextField v-model="maxValue" type="number" min="rangeValue[0]" max="2000" :step="10" autoComplete="off" @change="handleMaxChange">
          <template #label>Max money spent</template>
          <template #prefix>$</template>
        </TextField>
      </Stack>
    </Card>
  `}),Yl=t=>({components:{RangeSlider:Ba,Card:Ye},setup(){const n=k(10);return{args:t,rangeValue:n}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <p>Value: {{ rangeValue }}</p>
    </Card>
  `}),uE={SlotTemplate:Gl,StepTemplate:Xl,DualTemplate:Kl,Template:Yl},dE="wrapper";function xg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(dE,_(b(b({},uE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Range Slider",component:Ba,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Range slider"),e("p",null,"A range slider is an input field that merchants can use to select a numeric value within a given range (minimum and maximum values)."),e("font",{color:"#FF7900"},e("strong",null,"Note:"))," The ",e("code",null,"output")," tooltip position is displayed incorrectly on demo because of the scss from Shopify.",e("br",null),e(V,{mdxType:"Canvas"},e(H,{name:"Prefix and suffix elements",height:"150px",args:{min:0,max:360,label:"Hue color mix",output:!0},parameters:{docs:{source:{state:"close",code:P(tp||(tp=as([`
            <Card sectioned>
              <template #title>Text color</template>
              <RangeSlider v-model="rangeValue" :min="0" :max="360" label="Hue color mix" output>
                <template #prefix>Hue</template>
                <template #suffix>{{ rangeValue }}</template>
              </RangeSlider>
            </Card>

            <script setup>
              const rangeValue = ref(30);
            <\/script>
          `],[`
            <Card sectioned>
              <template #title>Text color</template>
              <RangeSlider v-model="rangeValue" :min="0" :max="360" label="Hue color mix" output>
                <template #prefix>Hue</template>
                <template #suffix>{{ rangeValue }}</template>
              </RangeSlider>
            </Card>\\n
            <script setup>
              const rangeValue = ref(30);
            <\/script>
          `])))}}},mdxType:"Story"},Gl.bind({}))),e("h3",null,e("strong",{parentName:"h3"},"Step increamented range control")),e(V,{mdxType:"Canvas"},e(H,{name:"Range slider with steps",height:"150px",args:{min:-20,max:20,step:4,label:"Logo offset",output:!0},parameters:{docs:{source:{state:"close",code:P`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" :min="-20" :max="20" :step="4" label="Logo offset" output />
            </Card>
          `}}},mdxType:"Story"},Xl.bind({}))),e("h3",null,e("strong",{parentName:"h3"},"Dual thumb range slider")),e(V,{mdxType:"Canvas"},e(H,{name:"Dual thumb range slider",height:"150px",args:{min:0,max:2e3,step:10,label:"Money spent is between",output:!0},parameters:{docs:{source:{state:"close",code:P(ap||(ap=as([`
            <Card sectioned>
              <template #title>Minimum requirements</template>
              <RangeSlider v-model="rangeValue" @change="handleRangeChange" v-bind="args" />
              <Stack distribution="equalSpacing" spacing="extraLoose">
                <TextField v-model="minValue" type="number" min="0" max="rangeValue[1]" :step="10" autoComplete="off" @change="handleMinChange">
                  <template #label>Min money spent</template>
                  <template #prefix>$</template>
                </TextField>
                <TextField v-model="maxValue" type="number" min="rangeValue[0]" max="2000" :step="10" autoComplete="off" @change="handleMaxChange">
                  <template #label>Max money spent</template>
                  <template #prefix>$</template>
                </TextField>
              </Stack>
            </Card>

            <script setup>
                const rangeValue = ref([900, 1000]);
                const minValue = ref('900');
                const maxValue = ref('1000');
                const handleMinChange = (event) => {
                  if (event.target.value < rangeValue.value[1]) {
                    rangeValue.value[0] = parseInt(event.target.value);
                  }
                };
                const handleMaxChange = (event) => {
                  if (event.target.value > rangeValue.value[0]) {
                    rangeValue.value[1] = parseInt(event.target.value);
                  }
                };
                const handleRangeChange = (value) => {
                  minValue.value = \`\${value[0]}\`;
                  maxValue.value = \`\${value[1]}\`;
                };
            <\/script>
          `],[`
            <Card sectioned>
              <template #title>Minimum requirements</template>
              <RangeSlider v-model="rangeValue" @change="handleRangeChange" v-bind="args" />
              <Stack distribution="equalSpacing" spacing="extraLoose">
                <TextField v-model="minValue" type="number" min="0" max="rangeValue[1]" :step="10" autoComplete="off" @change="handleMinChange">
                  <template #label>Min money spent</template>
                  <template #prefix>$</template>
                </TextField>
                <TextField v-model="maxValue" type="number" min="rangeValue[0]" max="2000" :step="10" autoComplete="off" @change="handleMaxChange">
                  <template #label>Max money spent</template>
                  <template #prefix>$</template>
                </TextField>
              </Stack>
            </Card>\\n
            <script setup>
                const rangeValue = ref([900, 1000]);
                const minValue = ref('900');
                const maxValue = ref('1000');
                const handleMinChange = (event) => {
                  if (event.target.value < rangeValue.value[1]) {
                    rangeValue.value[0] = parseInt(event.target.value);
                  }
                };
                const handleMaxChange = (event) => {
                  if (event.target.value > rangeValue.value[0]) {
                    rangeValue.value[1] = parseInt(event.target.value);
                  }
                };
                const handleRangeChange = (value) => {
                  minValue.value = \\\`\\\${value[0]}\\\`;
                  maxValue.value = \\\`\\\${value[1]}\\\`;
                };
            <\/script>
          `])))}}},mdxType:"Story"},Kl.bind({}))),e(V,{mdxType:"Canvas"},e(H,{name:"Range slider",height:"150px",args:{label:"Opacity percentage",output:!1},parameters:{docs:{source:{code:P`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" label="Opacity percentage" />
            </Card>
          `}}},mdxType:"Story"},Yl.bind({}))),e(se,{story:"Range slider",mdxType:"ArgsTable"}))}xg.isMDXComponent=!0;const Zl=Gl.bind({});Zl.storyName="Prefix and suffix elements";Zl.args={min:0,max:360,label:"Hue color mix",output:!0};Zl.parameters={storySource:{source:`args => ({
  components: {
    RangeSlider,
    Card
  },

  setup() {
    const rangeValue = ref(30);
    return {
      args,
      rangeValue
    };
  },

  template: \`
    <Card sectioned>
      <template #title>Text color</template>
      <RangeSlider v-model="rangeValue" v-bind="args">
        <template #prefix>Hue</template>
        <template #suffix>{{ rangeValue }}</template>
      </RangeSlider>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P(np||(np=as([`
            <Card sectioned>
              <template #title>Text color</template>
              <RangeSlider v-model="rangeValue" :min="0" :max="360" label="Hue color mix" output>
                <template #prefix>Hue</template>
                <template #suffix>{{ rangeValue }}</template>
              </RangeSlider>
            </Card>

            <script setup>
              const rangeValue = ref(30);
            <\/script>
          `],[`
            <Card sectioned>
              <template #title>Text color</template>
              <RangeSlider v-model="rangeValue" :min="0" :max="360" label="Hue color mix" output>
                <template #prefix>Hue</template>
                <template #suffix>{{ rangeValue }}</template>
              </RangeSlider>
            </Card>\\n
            <script setup>
              const rangeValue = ref(30);
            <\/script>
          `])))}}};const Ql=Xl.bind({});Ql.storyName="Range slider with steps";Ql.args={min:-20,max:20,step:4,label:"Logo offset",output:!0};Ql.parameters={storySource:{source:`args => ({
  components: {
    RangeSlider,
    Card
  },

  setup() {
    const rangeValue = ref(0);
    return {
      args,
      rangeValue
    };
  },

  template: \`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <br/><p>Value: {{ rangeValue }}</p>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" :min="-20" :max="20" :step="4" label="Logo offset" output />
            </Card>
          `}}};const Jl=Kl.bind({});Jl.storyName="Dual thumb range slider";Jl.args={min:0,max:2e3,step:10,label:"Money spent is between",output:!0};Jl.parameters={storySource:{source:`args => ({
  components: {
    RangeSlider,
    Card,
    Stack,
    TextField
  },

  setup() {
    const rangeValue = ref([900, 1000]);
    const minValue = ref('900');
    const maxValue = ref('1000');

    const handleMinChange = event => {
      if (event.target.value < rangeValue.value[1]) {
        rangeValue.value[0] = parseInt(event.target.value);
      }
    };

    const handleMaxChange = event => {
      if (event.target.value > rangeValue.value[0]) {
        rangeValue.value[1] = parseInt(event.target.value);
      }
    };

    const handleRangeChange = value => {
      minValue.value = \`\${value[0]}\`;
      maxValue.value = \`\${value[1]}\`;
    };

    return {
      args,
      rangeValue,
      minValue,
      maxValue,
      handleMinChange,
      handleMaxChange,
      handleRangeChange
    };
  },

  template: \`
    <Card sectioned>
      <template #title>Minimum requirements</template>
      <RangeSlider v-model="rangeValue" @change="handleRangeChange" v-bind="args" />
      <Stack distribution="equalSpacing" spacing="extraLoose">
        <TextField v-model="minValue" type="number" min="0" max="rangeValue[1]" :step="10" autoComplete="off" @change="handleMinChange">
          <template #label>Min money spent</template>
          <template #prefix>$</template>
        </TextField>
        <TextField v-model="maxValue" type="number" min="rangeValue[0]" max="2000" :step="10" autoComplete="off" @change="handleMaxChange">
          <template #label>Max money spent</template>
          <template #prefix>$</template>
        </TextField>
      </Stack>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P(op||(op=as([`
            <Card sectioned>
              <template #title>Minimum requirements</template>
              <RangeSlider v-model="rangeValue" @change="handleRangeChange" v-bind="args" />
              <Stack distribution="equalSpacing" spacing="extraLoose">
                <TextField v-model="minValue" type="number" min="0" max="rangeValue[1]" :step="10" autoComplete="off" @change="handleMinChange">
                  <template #label>Min money spent</template>
                  <template #prefix>$</template>
                </TextField>
                <TextField v-model="maxValue" type="number" min="rangeValue[0]" max="2000" :step="10" autoComplete="off" @change="handleMaxChange">
                  <template #label>Max money spent</template>
                  <template #prefix>$</template>
                </TextField>
              </Stack>
            </Card>

            <script setup>
                const rangeValue = ref([900, 1000]);
                const minValue = ref('900');
                const maxValue = ref('1000');
                const handleMinChange = (event) => {
                  if (event.target.value < rangeValue.value[1]) {
                    rangeValue.value[0] = parseInt(event.target.value);
                  }
                };
                const handleMaxChange = (event) => {
                  if (event.target.value > rangeValue.value[0]) {
                    rangeValue.value[1] = parseInt(event.target.value);
                  }
                };
                const handleRangeChange = (value) => {
                  minValue.value = \`\${value[0]}\`;
                  maxValue.value = \`\${value[1]}\`;
                };
            <\/script>
          `],[`
            <Card sectioned>
              <template #title>Minimum requirements</template>
              <RangeSlider v-model="rangeValue" @change="handleRangeChange" v-bind="args" />
              <Stack distribution="equalSpacing" spacing="extraLoose">
                <TextField v-model="minValue" type="number" min="0" max="rangeValue[1]" :step="10" autoComplete="off" @change="handleMinChange">
                  <template #label>Min money spent</template>
                  <template #prefix>$</template>
                </TextField>
                <TextField v-model="maxValue" type="number" min="rangeValue[0]" max="2000" :step="10" autoComplete="off" @change="handleMaxChange">
                  <template #label>Max money spent</template>
                  <template #prefix>$</template>
                </TextField>
              </Stack>
            </Card>\\n
            <script setup>
                const rangeValue = ref([900, 1000]);
                const minValue = ref('900');
                const maxValue = ref('1000');
                const handleMinChange = (event) => {
                  if (event.target.value < rangeValue.value[1]) {
                    rangeValue.value[0] = parseInt(event.target.value);
                  }
                };
                const handleMaxChange = (event) => {
                  if (event.target.value > rangeValue.value[0]) {
                    rangeValue.value[1] = parseInt(event.target.value);
                  }
                };
                const handleRangeChange = (value) => {
                  minValue.value = \\\`\\\${value[0]}\\\`;
                  maxValue.value = \\\`\\\${value[1]}\\\`;
                };
            <\/script>
          `])))}}};const er=Yl.bind({});er.storyName="Range slider";er.args={label:"Opacity percentage",output:!1};er.parameters={storySource:{source:`args => ({
  components: {
    RangeSlider,
    Card
  },

  setup() {
    const rangeValue = ref(10);
    return {
      args,
      rangeValue
    };
  },

  template: \`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <p>Value: {{ rangeValue }}</p>
    </Card>
  \`
})`},docs:{source:{code:P`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" label="Opacity percentage" />
            </Card>
          `}}};const En={title:"Components / Forms / Range Slider",component:Ba,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},includeStories:["prefixAndSuffixElements","rangeSliderWithSteps","dualThumbRangeSlider","rangeSlider"]},pE={"Prefix and suffix elements":"prefixAndSuffixElements","Range slider with steps":"rangeSliderWithSteps","Dual thumb range slider":"dualThumbRangeSlider","Range slider":"rangeSlider"};En.parameters=En.parameters||{};En.parameters.docs=_(b({},En.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:pE,mdxComponentAnnotations:En},e(xg,null))});var mE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SlotTemplate:Gl,StepTemplate:Xl,DualTemplate:Kl,Template:Yl,prefixAndSuffixElements:Zl,rangeSliderWithSteps:Ql,dualThumbRangeSlider:Jl,rangeSlider:er,default:En});const tr=t=>({components:{Scrollable:Ot},template:`
  <Scrollable :shadow="true" :focusable="true" :style="{height: '100px'}">
    <p>
      You must be 18 years or older or at least the age of majority in the
      jurisdiction where you reside or from which you use this Service.
    </p>
    <p>
      To access and use the Services, you must register for a Shopify account
      (\u201CAccount\u201D) by providing your full legal name, current address, phone
      number, a valid email address, and any other information indicated as
      required. Shopify may reject your application for an Account, or cancel an
      existing Account, for any reason, in our sole discretion.
    </p>
    <p>
      You acknowledge that Shopify will use the email address you provide as the
      primary method for communication.
    </p>
    <p>
      You are responsible for keeping your password secure. Shopify cannot and
      will not be liable for any loss or damage from your failure to maintain
      the security of your Account and password.
    </p>
    <p>
      You are responsible for all activity and content such as photos, images,
      videos, graphics, written content, audio files, code, information, or data
      uploaded, collected, generated, stored, displayed, distributed,
      transmitted or exhibited on or in connection with your Account
      (\u201CMaterials\u201D).
    </p>
    <p>
      A breach or violation of any term in the Terms of Service, including the
      AUP, as determined in the sole discretion of Shopify will result in an
      immediate termination of your services.
    </p>
    <p>Which means</p>
    <p>
      You are responsible for your Account and any Materials you upload to the
      Shopify Service. Remember that with any violation of these terms we will
      cancel your service.
    </p>
    <p>If we need to reach you, we will send you an email.</p>
    <ol>
      <li>Account Activation</li>
    </ol>
    <p>
      <p>2.1 Shopify Account</p>
    </p>
    <p>
      Subject to section 2.1.2, the person signing up for the Service will be
      the contracting party (\u201CAccount Owner\u201D) for the purposes of our Terms of
      Service and will be the person who is authorized to use any corresponding
      account we may provide to the Account Owner in connection with the
      Service.
    </p>
    <p>
      If you are signing up for the Service on behalf of your employer, your
      employer shall be the Account Owner. If you are signing up for the Service
      on behalf of your employer, then you represent and warrant that you have
      the authority to bind your employer to our Terms of Service.
    </p>
    <p>2.2 PayPal Express Checkout and Shopify Payments Accounts</p>
    <p>
      Upon completion of sign up for the Service, Shopify will create a PayPal
      Express Checkout account on your behalf, using your email address.
      Depending on your location, Shopify may also create a Shopify Payments
      account on your behalf.
    </p>
    <p>
      You acknowledge that PayPal Express Checkout and/or Shopify Payments will
      be your default payments gateway(s) and that it is your sole
      responsibility as the Account Owner to activate and maintain these
      accounts. If you do not wish to keep either of the payment accounts
      active, it is your responsibility to deactivate them. For the avoidance of
      doubt, PayPal Express Checkout is a Third Party Service, as defined in
      Section 15 of these Terms of Service.
    </p>
    <p>2.3 Apple Pay for Safari Account</p>
    <p>
      Upon completion of sign up for the Service, Shopify will create an Apple
      Pay for Safari (\u201CApple Pay\u201D) account on your behalf, using the URL(s) and
      business name associated with your Account. Depending on your location,
      Shopify may activate your Apple Pay account on your behalf, otherwise you
      will be required to activate your Apple Pay account within your Account
      admin. If you do not wish to keep your Apple Pay account active, it is
      your responsibility to deactivate it. For the avoidance of doubt, Apple
      Pay is a Third Party Service, as defined in Section 15 of these Terms of
      Service.
    </p>
    <p>
      If you use an Apple Pay supported payment gateway and your customers have
      enabled Apple Pay on their device, customers may purchase goods and
      services from your store using Apple Pay.
    </p>
    <p>
      By using Apple Pay on your store, you are agreeing to be bound by the
      Apple Pay Platform Web Merchant Terms and Conditions, as they may be
      amended by Apple from time to time. If Apple amends the Apple Pay Platform
      Web Merchant Terms and Conditions, the amended and restated version will
      be posted here:{' '}
      <a href="https://www.shopify.com/legal/apple-pay">
        https://www.shopify.com/legal/apple-pay
      </a>
      . Such amendments to the Apple Pay Platform Web Merchant Terms are effective
      as of the date of posting. Your continued use of Apple Pay on your store after
      the amended Apple Pay Platform Web Merchant Terms are posted constitutes your
      agreement to, and acceptance of, the amended Apple Pay Platform Web Merchant
      Terms. If you do not agree to any changes to the Apple Pay Platform Web Merchant
      Terms, de-activate your Apple Pay account and do not continue to use Apple
      Pay on your store.
    </p>
    <p>2.4 Google Payment</p>
    <p>
      Upon completion of sign up for the Service, if you have been enrolled in
      Shopify Payments, Shopify will also create a Google Payment account on
      your behalf. If you do not wish to keep your Google Payment account
      active, it is your responsibility to deactivate it. For the avoidance of
      doubt, Google Payment is a Third Party Service, as defined in Section 15
      of these Terms of Service.
    </p>
    <p>
      If you use a Google Payment supported payment gateway and your customers
      have enabled Google Payment, customers may purchase goods and services
      from your store using Google Payment.
    </p>
    <p>
      By using Google Payment on your store, you are agreeing to be bound by the
      Google Payment API Terms of Service, as they may be amended by Google from
      time to time. If Google amends the Google Payment API Terms of Service,
      the amended and restated version will be posted here:{' '}
      <a href="https://payments.developers.google.com/terms/sellertos">
        https://payments.developers.google.com/terms/sellertos
      </a>
      . Such amendments to the Google Payment API Terms of Service are effective
      as of the date of posting. Your continued use of Google Payment on your store
      after the amended Google Payment API Terms of Service are posted constitutes
      your agreement to, and acceptance of, the amended Google Payment API Terms
      of Service. If you do not agree to any changes to the Google Payment API Terms
      of Service, de-activate your Google Payment account and do not continue to
      use Google Payment on your store.
    </p>
    <p>2.5 Domain Names</p>
    <p>
      Upon purchasing a domain name through Shopify, domain registration will be
      preset to automatically renew each year so long as your Shopify Account
      remains active. You acknowledge that it is your sole responsibility to
      deactivate the auto-renewal function should you choose to do so.
    </p>
    <p>Which means</p>
    <p>
      The person signing up for the Shopify Service is responsible for the
      account and is bound by these Terms of Service. If you signup on behalf of
      your employer, your employer owns the account and is also bound by our
      Terms of Service.
    </p>
    <p>
      We automatically create accounts for you to accept payments. You are
      responsible for activating and deactivating these accounts.
    </p>
    <p>
      Any domain you purchase through us will automatically renew unless you opt
      out.
    </p>
    <ol>
      <li>General Conditions</li>
    </ol>
    <p>
      You must read, agree with and accept all of the terms and conditions
      contained in these Terms of Service, including the AUP and the Privacy
      Policy before you may become a member of Shopify.
    </p>
    <p>
      Technical support is only provided to paying Account holders and is only
      available via email.
    </p>
    <p>
      The Terms of Service shall be governed by and interpreted in accordance
      with the laws of the Province of Ontario and the laws of Canada applicable
      therein, without regard to principles of conflicts of laws. The parties
      irrevocably and unconditionally submit to the exclusive jurisdiction of
      the courts of the Province of Ontario with respect to any dispute or claim
      arising out of or in connection with the Terms of Service. The United
      Nations Convention on Contracts for the International Sale of Goods will
      not apply to these Terms of Service and is hereby expressly excluded.
    </p>
    <p>
      You acknowledge and agree that Shopify may amend these Terms of Service at
      any time by posting the relevant amended and restated Terms of Service on
      Shopify's website, available at{' '}
      <a href="https://www.shopify.com/legal/terms">
        https://www.shopify.com/legal/terms
      </a>{' '}
      and such amendments to the Terms of Service are effective as of the date
      of posting. Your continued use of the Services after the amended Terms of
      Service are posted to Shopify's website constitutes your agreement to, and
      acceptance of, the amended Terms of Service. If you do not agree to any
      changes to the Terms of Service, do not continue to use the Service.
    </p>
    <p>
      You may not use the Shopify service for any illegal or unauthorized
      purpose nor may you, in the use of the Service, violate any laws in your
      jurisdiction (including but not limited to copyright laws), the laws
      applicable to you in your customer's jurisdiction, or the laws of Canada
      and the Province of Ontario. You will comply with all applicable laws,
      rules and regulations in your use of the Service.
    </p>
    <p>
      You agree not to reproduce, duplicate, copy, sell, resell or exploit any
      portion of the Service, use of the Service, or access to the Service
      without the express written permission by Shopify.
    </p>
    <p>
      You shall not purchase search engine or other pay per click keywords (such
      as Google AdWords), or domain names that use Shopify or Shopify trademarks
      and/or variations and misspellings thereof.
    </p>
    <p>
      Questions about the Terms of Service should be sent to{' '}
      <a href="mailto:support@shopify.com">support@shopify.com</a>.
    </p>
    <p>
      You understand that your Materials (not including credit card
      information), may be transferred unencrypted and involve (a) transmissions
      over various networks; and (b) changes to conform and adapt to technical
      requirements of connecting networks or devices. Credit Card information is
      always encrypted during transfer over networks.
    </p>
    <p>
      You acknowledge and agree that your use of the Service, including
      information transmitted to or stored by Shopify, is governed by its
      privacy policy at{' '}
      <a href="https://www.shopify.com/legal/privacy">
        https://www.shopify.com/legal/privacy
      </a>
    </p>
    <p>
      The Terms of Service may be available in languages other than English. To
      the extent of any inconsistencies or conflicts between these English Terms
      of Service and Shopify's Terms of Service available in another language,
      the most current English version of the Terms of Service at{' '}
      <a href="https://www.shopify.com/legal/terms">
        https://www.shopify.com/legal/terms
      </a>{' '}
      will prevail.
    </p>
    <p>Which means</p>
    <p>
      The Shopify service belongs to us. You are not allowed to rip it off or
      use it for any illegal or sketchy purpose.
    </p>
    <p>
      If a dispute arises the issue will be dealt with in the Province of
      Ontario.
    </p>
    <p>
      Your Materials may be transferred unencrypted and may be altered, but
      credit card information is always encrypted.
    </p>
  </Scrollable>`}),Si=t=>({components:{Scrollable:Ot,ScrollTo:ls},template:`
  <Scrollable :shadow="true" :style="{height: '100px'}">
    <p>
      You must be 18 years or older or at least the age of majority in the
      jurisdiction where you reside or from which you use this Service.
    </p>
    <p>
      To access and use the Services, you must register for a Shopify account
      (\u201CAccount\u201D) by providing your full legal name, current address, phone
      number, a valid email address, and any other information indicated as
      required. Shopify may reject your application for an Account, or cancel an
      existing Account, for any reason, in our sole discretion.
    </p>
    <p>
      You acknowledge that Shopify will use the email address you provide as the
      primary method for communication.
    </p>
    <p>
      You are responsible for keeping your password secure. Shopify cannot and
      will not be liable for any loss or damage from your failure to maintain
      the security of your Account and password.
    </p>
    <p>
      You are responsible for all activity and content such as photos, images,
      videos, graphics, written content, audio files, code, information, or data
      uploaded, collected, generated, stored, displayed, distributed,
      transmitted or exhibited on or in connection with your Account
      (\u201CMaterials\u201D).
    </p>
    <p>
      A breach or violation of any term in the Terms of Service, including the
      AUP, as determined in the sole discretion of Shopify will result in an
      immediate termination of your services.
    </p>
    <p>Which means</p>
    <p>
      You are responsible for your Account and any Materials you upload to the
      Shopify Service. Remember that with any violation of these terms we will
      cancel your service.
    </p>
    <p>If we need to reach you, we will send you an email.</p>
    <ol>
      <li>Account Activation</li>
    </ol>
    <ScrollTo>
      <p>2.1 Shopify Account</p>
    </ScrollTo>
    <p>
      Subject to section 2.1.2, the person signing up for the Service will be
      the contracting party (\u201CAccount Owner\u201D) for the purposes of our Terms of
      Service and will be the person who is authorized to use any corresponding
      account we may provide to the Account Owner in connection with the
      Service.
    </p>
    <p>
      If you are signing up for the Service on behalf of your employer, your
      employer shall be the Account Owner. If you are signing up for the Service
      on behalf of your employer, then you represent and warrant that you have
      the authority to bind your employer to our Terms of Service.
    </p>
    <p>2.2 PayPal Express Checkout and Shopify Payments Accounts</p>
    <p>
      Upon completion of sign up for the Service, Shopify will create a PayPal
      Express Checkout account on your behalf, using your email address.
      Depending on your location, Shopify may also create a Shopify Payments
      account on your behalf.
    </p>
    <p>
      You acknowledge that PayPal Express Checkout and/or Shopify Payments will
      be your default payments gateway(s) and that it is your sole
      responsibility as the Account Owner to activate and maintain these
      accounts. If you do not wish to keep either of the payment accounts
      active, it is your responsibility to deactivate them. For the avoidance of
      doubt, PayPal Express Checkout is a Third Party Service, as defined in
      Section 15 of these Terms of Service.
    </p>
    <p>2.3 Apple Pay for Safari Account</p>
    <p>
      Upon completion of sign up for the Service, Shopify will create an Apple
      Pay for Safari (\u201CApple Pay\u201D) account on your behalf, using the URL(s) and
      business name associated with your Account. Depending on your location,
      Shopify may activate your Apple Pay account on your behalf, otherwise you
      will be required to activate your Apple Pay account within your Account
      admin. If you do not wish to keep your Apple Pay account active, it is
      your responsibility to deactivate it. For the avoidance of doubt, Apple
      Pay is a Third Party Service, as defined in Section 15 of these Terms of
      Service.
    </p>
    <p>
      If you use an Apple Pay supported payment gateway and your customers have
      enabled Apple Pay on their device, customers may purchase goods and
      services from your store using Apple Pay.
    </p>
    <p>
      By using Apple Pay on your store, you are agreeing to be bound by the
      Apple Pay Platform Web Merchant Terms and Conditions, as they may be
      amended by Apple from time to time. If Apple amends the Apple Pay Platform
      Web Merchant Terms and Conditions, the amended and restated version will
      be posted here:{' '}
      <a href="https://www.shopify.com/legal/apple-pay">
        https://www.shopify.com/legal/apple-pay
      </a>
      . Such amendments to the Apple Pay Platform Web Merchant Terms are effective
      as of the date of posting. Your continued use of Apple Pay on your store after
      the amended Apple Pay Platform Web Merchant Terms are posted constitutes your
      agreement to, and acceptance of, the amended Apple Pay Platform Web Merchant
      Terms. If you do not agree to any changes to the Apple Pay Platform Web Merchant
      Terms, de-activate your Apple Pay account and do not continue to use Apple
      Pay on your store.
    </p>
    <p>2.4 Google Payment</p>
    <p>
      Upon completion of sign up for the Service, if you have been enrolled in
      Shopify Payments, Shopify will also create a Google Payment account on
      your behalf. If you do not wish to keep your Google Payment account
      active, it is your responsibility to deactivate it. For the avoidance of
      doubt, Google Payment is a Third Party Service, as defined in Section 15
      of these Terms of Service.
    </p>
    <p>
      If you use a Google Payment supported payment gateway and your customers
      have enabled Google Payment, customers may purchase goods and services
      from your store using Google Payment.
    </p>
    <p>
      By using Google Payment on your store, you are agreeing to be bound by the
      Google Payment API Terms of Service, as they may be amended by Google from
      time to time. If Google amends the Google Payment API Terms of Service,
      the amended and restated version will be posted here:{' '}
      <a href="https://payments.developers.google.com/terms/sellertos">
        https://payments.developers.google.com/terms/sellertos
      </a>
      . Such amendments to the Google Payment API Terms of Service are effective
      as of the date of posting. Your continued use of Google Payment on your store
      after the amended Google Payment API Terms of Service are posted constitutes
      your agreement to, and acceptance of, the amended Google Payment API Terms
      of Service. If you do not agree to any changes to the Google Payment API Terms
      of Service, de-activate your Google Payment account and do not continue to
      use Google Payment on your store.
    </p>
    <p>2.5 Domain Names</p>
    <p>
      Upon purchasing a domain name through Shopify, domain registration will be
      preset to automatically renew each year so long as your Shopify Account
      remains active. You acknowledge that it is your sole responsibility to
      deactivate the auto-renewal function should you choose to do so.
    </p>
    <p>Which means</p>
    <p>
      The person signing up for the Shopify Service is responsible for the
      account and is bound by these Terms of Service. If you signup on behalf of
      your employer, your employer owns the account and is also bound by our
      Terms of Service.
    </p>
    <p>
      We automatically create accounts for you to accept payments. You are
      responsible for activating and deactivating these accounts.
    </p>
    <p>
      Any domain you purchase through us will automatically renew unless you opt
      out.
    </p>
    <ol>
      <li>General Conditions</li>
    </ol>
    <p>
      You must read, agree with and accept all of the terms and conditions
      contained in these Terms of Service, including the AUP and the Privacy
      Policy before you may become a member of Shopify.
    </p>
    <p>
      Technical support is only provided to paying Account holders and is only
      available via email.
    </p>
    <p>
      The Terms of Service shall be governed by and interpreted in accordance
      with the laws of the Province of Ontario and the laws of Canada applicable
      therein, without regard to principles of conflicts of laws. The parties
      irrevocably and unconditionally submit to the exclusive jurisdiction of
      the courts of the Province of Ontario with respect to any dispute or claim
      arising out of or in connection with the Terms of Service. The United
      Nations Convention on Contracts for the International Sale of Goods will
      not apply to these Terms of Service and is hereby expressly excluded.
    </p>
    <p>
      You acknowledge and agree that Shopify may amend these Terms of Service at
      any time by posting the relevant amended and restated Terms of Service on
      Shopify's website, available at{' '}
      <a href="https://www.shopify.com/legal/terms">
        https://www.shopify.com/legal/terms
      </a>{' '}
      and such amendments to the Terms of Service are effective as of the date
      of posting. Your continued use of the Services after the amended Terms of
      Service are posted to Shopify's website constitutes your agreement to, and
      acceptance of, the amended Terms of Service. If you do not agree to any
      changes to the Terms of Service, do not continue to use the Service.
    </p>
    <p>
      You may not use the Shopify service for any illegal or unauthorized
      purpose nor may you, in the use of the Service, violate any laws in your
      jurisdiction (including but not limited to copyright laws), the laws
      applicable to you in your customer's jurisdiction, or the laws of Canada
      and the Province of Ontario. You will comply with all applicable laws,
      rules and regulations in your use of the Service.
    </p>
    <p>
      You agree not to reproduce, duplicate, copy, sell, resell or exploit any
      portion of the Service, use of the Service, or access to the Service
      without the express written permission by Shopify.
    </p>
    <p>
      You shall not purchase search engine or other pay per click keywords (such
      as Google AdWords), or domain names that use Shopify or Shopify trademarks
      and/or variations and misspellings thereof.
    </p>
    <p>
      Questions about the Terms of Service should be sent to{' '}
      <a href="mailto:support@shopify.com">support@shopify.com</a>.
    </p>
    <p>
      You understand that your Materials (not including credit card
      information), may be transferred unencrypted and involve (a) transmissions
      over various networks; and (b) changes to conform and adapt to technical
      requirements of connecting networks or devices. Credit Card information is
      always encrypted during transfer over networks.
    </p>
    <p>
      You acknowledge and agree that your use of the Service, including
      information transmitted to or stored by Shopify, is governed by its
      privacy policy at{' '}
      <a href="https://www.shopify.com/legal/privacy">
        https://www.shopify.com/legal/privacy
      </a>
    </p>
    <p>
      The Terms of Service may be available in languages other than English. To
      the extent of any inconsistencies or conflicts between these English Terms
      of Service and Shopify's Terms of Service available in another language,
      the most current English version of the Terms of Service at{' '}
      <a href="https://www.shopify.com/legal/terms">
        https://www.shopify.com/legal/terms
      </a>{' '}
      will prevail.
    </p>
    <p>Which means</p>
    <p>
      The Shopify service belongs to us. You are not allowed to rip it off or
      use it for any illegal or sketchy purpose.
    </p>
    <p>
      If a dispute arises the issue will be dealt with in the Province of
      Ontario.
    </p>
    <p>
      Your Materials may be transferred unencrypted and may be altered, but
      credit card information is always encrypted.
    </p>
  </Scrollable>`});Si.parameters={docs:{source:{state:"close",code:P`
        <Scrollable :shadow="true" :style="{height: '100px'}">
          <p>
            You must be 18 years or older or at least the age of majority in the
            jurisdiction where you reside or from which you use this Service.
          </p>
          <p>
            To access and use the Services, you must register for a Shopify account
            (“Account”) by providing your full legal name, current address, phone
            number, a valid email address, and any other information indicated as
            required. Shopify may reject your application for an Account, or cancel an
            existing Account, for any reason, in our sole discretion.
          </p>
          <p>
            You acknowledge that Shopify will use the email address you provide as the
            primary method for communication.
          </p>
          <p>
            You are responsible for keeping your password secure. Shopify cannot and
            will not be liable for any loss or damage from your failure to maintain
            the security of your Account and password.
          </p>
          <p>
            You are responsible for all activity and content such as photos, images,
            videos, graphics, written content, audio files, code, information, or data
            uploaded, collected, generated, stored, displayed, distributed,
            transmitted or exhibited on or in connection with your Account
            (“Materials”).
          </p>
          <p>
            A breaDefaultScrollable.parameters = {
  docs: {
    source: false,
  },
};ch or violation of any term in the Terms of Service, including the
            AUP, as determined in the sole discretion of Shopify will result in an
            immediate termination of your services.
          </p>
          <p>Which means</p>
          <p>
            You are responsible for your Account and any Materials you upload to the
            Shopify Service. Remember that with any violation of these terms we will
            cancel your service.
          </p>
          <p>If we need to reach you, we will send you an email.</p>
          <ol>
            <li>Account Activation</li>
          </ol>
          <ScrollTo>
            <p>2.1 Shopify Account</p>
          </ScrollTo>
          <p>
            Subject to section 2.1.2, the person signing up for the Service will be
            the contracting party (“Account Owner”) for the purposes of our Terms of
            Service and will be the person who is authorized to use any corresponding
            account we may provide to the Account Owner in connection with the
            Service.
          </p>
          <p>
            If you are signing up for the Service on behalf of your employer, your
            employer shall be the Account Owner. If you are signing up for the Service
            on behalf of your employer, then you represent and warrant that you have
            the authority to bind your employer to our Terms of Service.
          </p>
          <p>2.2 PayPal Express Checkout and Shopify Payments Accounts</p>
          <p>
            Upon completion of sign up for the Service, Shopify will create a PayPal
            Express Checkout account on your behalf, using your email address.
            Depending on your location, Shopify may also create a Shopify Payments
            account on your behalf.
          </p>
        </Scrollable>
      `}}};const Ci=t=>({components:{Scrollable:Ot},setup(){return{args:t}},template:`
  <Scrollable :style="{height: '100px'}" v-bind="args">
    <p>
      You must be 18 years or older or at least the age of majority in the
      jurisdiction where you reside or from which you use this Service.
    </p>
    <p>
      To access and use the Services, you must register for a Shopify account
      (\u201CAccount\u201D) by providing your full legal name, current address, phone
      number, a valid email address, and any other information indicated as
      required. Shopify may reject your application for an Account, or cancel an
      existing Account, for any reason, in our sole discretion.
    </p>
    <p>
      You acknowledge that Shopify will use the email address you provide as the
      primary method for communication.
    </p>
    <p>
      You are responsible for keeping your password secure. Shopify cannot and
      will not be liable for any loss or damage from your failure to maintain
      the security of your Account and password.
    </p>
    <p>
      You are responsible for all activity and content such as photos, images,
      videos, graphics, written content, audio files, code, information, or data
      uploaded, collected, generated, stored, displayed, distributed,
      transmitted or exhibited on or in connection with your Account
      (\u201CMaterials\u201D).
    </p>
    <p>
      A breach or violation of any term in the Terms of Service, including the
      AUP, as determined in the sole discretion of Shopify will result in an
      immediate termination of your services.
    </p>
    <p>Which means</p>
    <p>
      You are responsible for your Account and any Materials you upload to the
      Shopify Service. Remember that with any violation of these terms we will
      cancel your service.
    </p>
    <p>If we need to reach you, we will send you an email.</p>
  </Scrollable>`});Ci.parameters={docs:{source:{code:P`
        <Scrollable :style="{height: '100px'}" v-bind="args">
          <p>
            You must be 18 years or older or at least the age of majority in the
            jurisdiction where you reside or from which you use this Service.
          </p>
          <p>
            To access and use the Services, you must register for a Shopify account
            (“Account”) by providing your full legal name, current address, phone
            number, a valid email address, and any other information indicated as
            required. Shopify may reject your application for an Account, or cancel an
            existing Account, for any reason, in our sole discretion.
          </p>
          <p>
            You acknowledge that Shopify will use the email address you provide as the
            primary method for communication.
          </p>
          <p>
            You are responsible for keeping your password secure. Shopify cannot and
            will not be liable for any loss or damage from your failure to maintain
            the security of your Account and password.
          </p>
          <p>
            You are responsible for all activity and content such as photos, images,
            videos, graphics, written content, audio files, code, information, or data
            uploaded, collected, generated, stored, displayed, distributed,
            transmitted or exhibited on or in connection with your Account
            (“Materials”).
          </p>
          <p>
            A breach or violation of any term in the Terms of Service, including the
            AUP, as determined in the sole discretion of Shopify will result in an
            immediate termination of your services.
          </p>
          <p>Which means</p>
          <p>
            You are responsible for your Account and any Materials you upload to the
            Shopify Service. Remember that with any violation of these terms we will
            cancel your service.
          </p>
          <p>If we need to reach you, we will send you an email.</p>  <p>
            You must be 18 years or older or at least the age of majority in the
            jurisdiction where you reside or from which you use this Service.
          </p>
          <p>
            To access and use the Services, you must register for a Shopify account
            (“Account”) by providing your full legal name, current address, phone
            number, a valid email address, and any other information indicated as
            required. Shopify may reject your application for an Account, or cancel an
            existing Account, for any reason, in our sole discretion.
          </p>
          <p>
            You acknowledge that Shopify will use the email address you provide as the
            primary method for communication.
          </p>
          <p>
            You are responsible for keeping your password secure. Shopify cannot and
            will not be liable for any loss or damage from your failure to maintain
            the security of your Account and password.
          </p>
          <p>
            You are responsible for all activity and content such as photos, images,
            videos, graphics, written content, audio files, code, information, or data
            uploaded, collected, generated, stored, displayed, distributed,
            transmitted or exhibited on or in connection with your Account
            (“Materials”).
          </p>
          <p>
            A breach or violation of any term in the Terms of Service, including the
            AUP, as determined in the sole discretion of Shopify will result in an
            immediate termination of your services.
          </p>
          <p>Which means</p>
          <p>
            You are responsible for your Account and any Materials you upload to the
            Shopify Service. Remember that with any violation of these terms we will
            cancel your service.
          </p>
          <p>If we need to reach you, we will send you an email.</p>
        </Scrollable>
      `}}};const yE={DefaultScrollable:tr,ScrollToExample:Si,Example:Ci},gE="wrapper";function Tg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(gE,_(b(b({},yE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Behavior / Scrollable",component:Ot,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},mdxType:"Meta"}),e("h1",null,"Scrollable"),e("p",null,`The scrollable component is a container for long form content,
such as terms of service, that allows for scrolling so merchants can expose more text as they read.`),e("br",null),e("br",null),e("h3",null,"Default scrollable container"),e("p",null,`Use when you need to make a region within the page independently scrollable.
It's often used in modals and other panes where it's helpful to provide an extra visual cue that content exists below or above the fold.`),e(V,{mdxType:"Canvas"},e(H,{story:tr,name:"Default scrollable container",mdxType:"Story"})),e("h3",null,"Scroll to child component"),e("p",null,"Use when you need to programmatically scroll a child component into view in the scrollable container."),e(V,{mdxType:"Canvas"},e(H,{story:Si,name:"Scroll to child component",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#fff"},mdxType:"Canvas"},e(H,{story:Ci,name:"Example",height:"150px",mdxType:"Story"})),e(se,{story:"Example",mdxType:"ArgsTable"}))}Tg.isMDXComponent=!0;const Sg=tr;Sg.storyName="Default scrollable container";const Cg=Si;Cg.storyName="Scroll to child component";const Ag=Ci;Ag.storyName="Example";const On={title:"Components / Behavior / Scrollable",component:Ot,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},includeStories:["_DefaultScrollable_","_ScrollToExample_","_Example_"]},hE={"Default scrollable container":"_DefaultScrollable_","Scroll to child component":"_ScrollToExample_",Example:"_Example_"};On.parameters=On.parameters||{};On.parameters.docs=_(b({},On.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:hE,mdxComponentAnnotations:On},e(Tg,null))});var bE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultScrollable:tr,ScrollToExample:Si,Example:Ci,_DefaultScrollable_:Sg,_ScrollToExample_:Cg,_Example_:Ag,default:On});const ar=t=>({components:{Select:co,Icon:re},setup(){const n=Rh,o=k("");return{args:t,selectValue:o,iconHintMajor:n}},template:`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}`}),fE={Template:ar},vE="wrapper";function kg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(vE,_(b(b({},fE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Select",component:co,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Select"),e("p",null,"Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface."),e("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",e("b",null,"select")," element in html."),e(V,{mdxType:"Canvas"},e(H,{name:"Select",args:{placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"},parameters:{docs:{source:{code:P`<Select placeholder="Select an option" v-model="selectValue" :options="options">
              <template #label>Date Range</template>
              <template #help-text>This is some help text</template>
              <template #prefix-hint>
                <Icon :source="iconHintMajor" />
              </template>
            </Select>\n
            setup() {
              const options: [
                { "label": "Today", "value": "today" },
                { "label": "Yesterday", "value": "yesterday" },
                { "label": "Last 7 days", "value": "lastWeek" },
                { "id": "hint", "label": "Option with icon", "value": "hint" },
                { "label": "Option disabled", "value": "disabled", "disabled": true },
              ],
              const selectValue = ref('');
              return { options, selectValue };
            }
          `}}},mdxType:"Story"},ar.bind({}))),e(se,{story:"Select",mdxType:"ArgsTable"}))}kg.isMDXComponent=!0;const nr=ar.bind({});nr.storyName="Select";nr.args={placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"};nr.parameters={storySource:{source:`args => ({
  components: {
    Select,
    Icon
  },

  setup() {
    const iconHintMajor = HintMajor;
    const selectValue = ref('');
    return {
      args,
      selectValue,
      iconHintMajor
    };
  },

  template: \`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}\`
})`},docs:{source:{code:P`<Select placeholder="Select an option" v-model="selectValue" :options="options">
              <template #label>Date Range</template>
              <template #help-text>This is some help text</template>
              <template #prefix-hint>
                <Icon :source="iconHintMajor" />
              </template>
            </Select>\n
            setup() {
              const options: [
                { "label": "Today", "value": "today" },
                { "label": "Yesterday", "value": "yesterday" },
                { "label": "Last 7 days", "value": "lastWeek" },
                { "id": "hint", "label": "Option with icon", "value": "hint" },
                { "label": "Option disabled", "value": "disabled", "disabled": true },
              ],
              const selectValue = ref('');
              return { options, selectValue };
            }
          `}}};const qn={title:"Components / Forms / Select",component:co,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},includeStories:["select"]},xE={Select:"select"};qn.parameters=qn.parameters||{};qn.parameters.docs=_(b({},qn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:xE,mdxComponentAnnotations:qn},e(kg,null))});var TE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ar,select:nr,default:qn}),ip=Object.freeze,SE=Object.defineProperty,Ng=(t,n)=>ip(SE(t,"raw",{value:ip(n||t.slice())})),sp,lp;const or=t=>({components:{SettingToggle:Ps,TextStyle:ct},setup(){const n=()=>{o.value=!o.value},o=k(!1);return{args:t,active:o,toggleSetting:n}},template:`<SettingToggle
    :action="{ content: active ? 'Deactivate' : 'Activate', onAction: toggleSetting }"
    :enabled="active"
  >
    This setting is <TextStyle variation="strong">{{ active ? 'activated' : 'deactivated' }}</TextStyle>.
  </SettingToggle>`}),CE={Template:or},AE="wrapper";function Lg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(AE,_(b(b({},CE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Actions / Setting toggle",component:Ps,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Setting toggle"),e("p",null,"Use to give merchants control over a feature or option that can be turned on or off."),e(V,{mdxType:"Canvas"},e(H,{name:"Setting toggle",height:"120px",parameters:{docs:{source:{code:P(sp||(sp=Ng([`
            <SettingToggle
              :action="{ content: active ? 'Deactivate' : 'Activate', onAction: toggleSetting }"
              :enabled="active"
            >
              This setting is <TextStyle variation="strong">{{ active ? 'activated' : 'deactivated' }}</TextStyle>.
            </SettingToggle>

            <script setup>
              const toggleSetting = () => {
                active.value = !active.value;
              }
              const active = ref(false);
            <\/script>
            `],[`
            <SettingToggle
              :action="{ content: active ? 'Deactivate' : 'Activate', onAction: toggleSetting }"
              :enabled="active"
            >
              This setting is <TextStyle variation="strong">{{ active ? 'activated' : 'deactivated' }}</TextStyle>.
            </SettingToggle>\\n
            <script setup>
              const toggleSetting = () => {
                active.value = !active.value;
              }
              const active = ref(false);
            <\/script>
            `])))}}},mdxType:"Story"},or.bind({}))),e(se,{story:"Setting toggle",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Complex Action")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"outline?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as an outlined button.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"plain?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as a plain link.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}Lg.isMDXComponent=!0;const cu=or.bind({});cu.storyName="Setting toggle";cu.parameters={storySource:{source:`args => ({
  components: {
    SettingToggle,
    TextStyle
  },

  setup() {
    const toggleSetting = () => {
      active.value = !active.value;
    };

    const active = ref(false);
    return {
      args,
      active,
      toggleSetting
    };
  },

  template: \`<SettingToggle
    :action="{ content: active ? 'Deactivate' : 'Activate', onAction: toggleSetting }"
    :enabled="active"
  >
    This setting is <TextStyle variation="strong">{{ active ? 'activated' : 'deactivated' }}</TextStyle>.
  </SettingToggle>\`
})`},docs:{source:{code:P(lp||(lp=Ng([`
            <SettingToggle
              :action="{ content: active ? 'Deactivate' : 'Activate', onAction: toggleSetting }"
              :enabled="active"
            >
              This setting is <TextStyle variation="strong">{{ active ? 'activated' : 'deactivated' }}</TextStyle>.
            </SettingToggle>

            <script setup>
              const toggleSetting = () => {
                active.value = !active.value;
              }
              const active = ref(false);
            <\/script>
            `],[`
            <SettingToggle
              :action="{ content: active ? 'Deactivate' : 'Activate', onAction: toggleSetting }"
              :enabled="active"
            >
              This setting is <TextStyle variation="strong">{{ active ? 'activated' : 'deactivated' }}</TextStyle>.
            </SettingToggle>\\n
            <script setup>
              const toggleSetting = () => {
                active.value = !active.value;
              }
              const active = ref(false);
            <\/script>
            `])))}}};const Rn={title:"Components / Actions / Setting toggle",component:Ps,argTypes:{default:{table:{disable:!0}}},includeStories:["settingToggle"]},kE={"Setting toggle":"settingToggle"};Rn.parameters=Rn.parameters||{};Rn.parameters.docs=_(b({},Rn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:kE,mdxComponentAnnotations:Rn},e(Lg,null))});var NE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:or,settingToggle:cu,default:Rn});const ir=t=>({components:{SkeletonBodyText:Zo},setup(){return{args:t}},template:`
    <SkeletonBodyText v-bind:="args"/>
  `}),LE={Template:ir},wE="wrapper";function wg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(wE,_(b(b({},LE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Feedback indicators / Skeleton body text",component:Zo,mdxType:"Meta"}),e("h1",null,"Skeleton body text"),e("p",null,"Skeleton body text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),e(V,{mdxType:"Canvas"},e(H,{name:"Skeleton body text",args:{lines:3},parameters:{docs:{source:{code:P`
            <SkeletonBodyText :lines="3"/>
          `}}},mdxType:"Story"},ir.bind({}))),e(se,{story:"Skeleton body text",mdxType:"ArgsTable"}))}wg.isMDXComponent=!0;const sr=ir.bind({});sr.storyName="Skeleton body text";sr.args={lines:3};sr.parameters={storySource:{source:`args => ({
  components: {
    SkeletonBodyText
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <SkeletonBodyText v-bind:="args"/>
  \`
})`},docs:{source:{code:P`
            <SkeletonBodyText :lines="3"/>
          `}}};const Vn={title:"Components / Feedback indicators / Skeleton body text",component:Zo,includeStories:["skeletonBodyText"]},PE={"Skeleton body text":"skeletonBodyText"};Vn.parameters=Vn.parameters||{};Vn.parameters.docs=_(b({},Vn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:PE,mdxComponentAnnotations:Vn},e(wg,null))});var ME=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ir,skeletonBodyText:sr,default:Vn});const lr=t=>({components:{SkeletonDisplayText:Qo},setup(){return{args:t}},template:`
    <SkeletonDisplayText v-bind="args"/>
  `}),_E={Template:lr},DE="wrapper";function Pg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(DE,_(b(b({},_E),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Feedback indicators / Skeleton display text",component:Qo,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Skeleton display text"),e("p",null,"Skeleton display text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),e(V,{mdxType:"Canvas"},e(H,{name:"Skeleton display text",args:{size:"medium"},parameters:{docs:{source:{code:P`
            <SkeletonDisplayText size="medium"/>
          `}}},mdxType:"Story"},lr.bind({}))),e(se,{story:"Skeleton display text",mdxType:"ArgsTable"}))}Pg.isMDXComponent=!0;const rr=lr.bind({});rr.storyName="Skeleton display text";rr.args={size:"medium"};rr.parameters={storySource:{source:`args => ({
  components: {
    SkeletonDisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <SkeletonDisplayText v-bind="args"/>
  \`
})`},docs:{source:{code:P`
            <SkeletonDisplayText size="medium"/>
          `}}};const Hn={title:"Components / Feedback indicators / Skeleton display text",component:Qo,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},includeStories:["skeletonDisplayText"]},IE={"Skeleton display text":"skeletonDisplayText"};Hn.parameters=Hn.parameters||{};Hn.parameters.docs=_(b({},Hn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:IE,mdxComponentAnnotations:Hn},e(Pg,null))});var BE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:lr,skeletonDisplayText:rr,default:Hn});const cr=(t,{argTypes:n})=>({components:{Spinner:Zt},setup(){return{args:t}},template:'<Spinner v-bind="args"/>'}),$E={Template:cr},FE="wrapper";function Mg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(FE,_(b(b({},$E),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Feedback indicators / Spinner",component:Zt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Spinner"),e("p",null,"Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can\u2019t be represented with skeleton loading components, like for data charts."),e(V,{mdxType:"Canvas"},e(H,{name:"Spinner",height:"60px",args:{accessibilityLabel:"Spinner example",size:"large"},parameters:{docs:{source:{code:P`
            <Spinner v-bind="props"/>
          `}}},mdxType:"Story"},cr.bind({}))),e(se,{story:"Spinner",mdxType:"ArgsTable"}))}Mg.isMDXComponent=!0;const ur=cr.bind({});ur.storyName="Spinner";ur.args={accessibilityLabel:"Spinner example",size:"large"};ur.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    Spinner
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Spinner v-bind="args"/>\`
})`},docs:{source:{code:P`
            <Spinner v-bind="props"/>
          `}}};const Un={title:"Components / Feedback indicators / Spinner",component:Zt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["spinner"]},EE={Spinner:"spinner"};Un.parameters=Un.parameters||{};Un.parameters.docs=_(b({},Un.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:EE,mdxComponentAnnotations:Un},e(Mg,null))});var OE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:cr,spinner:ur,default:Un});const dr=(t,{argTypes:n})=>({components:{Stack:qe,StackItem:Ct,Badge:st},setup(){return{args:t}},template:`<Stack v-bind="args">
    <Badge> Paid </Badge>
    <Badge> Processing </Badge>
    <Badge> Fulfilled </Badge>
    <Badge> Completed </Badge>
  </Stack>`}),Co=(t,{argTypes:n})=>({components:{Stack:qe,StackItem:Ct,Badge:st},template:`<Stack noItemWrap>
    <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
    <StackItem> <Badge> Processing </Badge> </StackItem>
    <StackItem> <Badge> Completed </Badge> </StackItem>
  </Stack>`});Co.storyName="Fill the remaining space";Co.parameters={docs:{source:{code:P`
        <Stack noItemWrap>
          <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
          <StackItem> <Badge> Processing </Badge> </StackItem>
          <StackItem> <Badge> Completed </Badge> </StackItem>
        </Stack>
      `}}};const qE={Template:dr,SingleFillItem:Co},RE="wrapper";function _g(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(RE,_(b(b({},qE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Structure / Stack",component:qe,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Stack"),e("p",null,"Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack\u2019s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack."),e("br",null),e("br",null),e("h3",null,"A single item fills the remaining space"),e(V,{mdxType:"Canvas"},e(H,{story:Co,height:"65px",name:"_SingleFillItem_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{name:"Stack",height:"60px",parameters:{docs:{source:{code:P`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}},mdxType:"Story"},dr.bind({}))),e(se,{story:"Stack",mdxType:"ArgsTable"}))}_g.isMDXComponent=!0;const VE=Co,uu=dr.bind({});uu.storyName="Stack";uu.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    Stack,
    StackItem,
    Badge
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Stack v-bind="args">
    <Badge> Paid </Badge>
    <Badge> Processing </Badge>
    <Badge> Fulfilled </Badge>
    <Badge> Completed </Badge>
  </Stack>\`
})`},docs:{source:{code:P`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}};const jn={title:"Components / Structure / Stack",component:qe,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SingleFillItem_","stack"]},HE={_SingleFillItem_:"_SingleFillItem_",Stack:"stack"};jn.parameters=jn.parameters||{};jn.parameters.docs=_(b({},jn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:HE,mdxComponentAnnotations:jn},e(_g,null))});var UE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:dr,SingleFillItem:Co,_SingleFillItem_:VE,stack:uu,default:jn});const pr=t=>({components:{Subheading:da},setup(){return{args:t}},template:'<Subheading v-bind="args">Accounts</Subheading>'}),jE={Template:pr},zE="wrapper";function Dg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(zE,_(b(b({},jE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Titles and text  / Subheading",component:da,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Subheading"),e("p",null,"Subheadings are used for the title of any sub-sections in top-level page sections."),e(V,{mdxType:"Canvas"},e(H,{name:"Subheading",inline:!1,height:"30px",args:{element:"h3"},parameters:{docs:{source:{code:P`
            <Subheading>Accounts</Subheading>
          `}}},mdxType:"Story"},pr.bind({}))),e(se,{story:"Subheading",mdxType:"ArgsTable"}))}Dg.isMDXComponent=!0;const mr=pr.bind({});mr.storyName="Subheading";mr.args={element:"h3"};mr.parameters={storySource:{source:`args => ({
  components: {
    Subheading
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Subheading v-bind="args">Accounts</Subheading>\`
})`},docs:{source:{code:P`
            <Subheading>Accounts</Subheading>
          `}}};const zn={title:"Components / Titles and text  / Subheading",component:da,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},includeStories:["subheading"]},WE={Subheading:"subheading"};zn.parameters=zn.parameters||{};zn.parameters.docs=_(b({},zn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:WE,mdxComponentAnnotations:zn},e(Dg,null))});var GE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:pr,subheading:mr,default:zn}),rp=Object.freeze,XE=Object.defineProperty,Ig=(t,n)=>rp(XE(t,"raw",{value:rp(n||t.slice())})),cp,up;const yr=t=>({components:{Tabs:Ms,CardSection:pa,Badge:st,Card:Ye},setup(){const n=k(0);return{args:t,selectedTab:n,handleTabChange:l=>{n.value=l},tabs:[{id:"all-customers-1",content:"All",accessibilityLabel:"All customers",panelID:"all-customers-content-1"},{id:"accepts-marketing-1",content:"Accepts marketing",panelID:"accepts-marketing-content-1"},{id:"repeat-customers-1",content:"Repeat customers",panelID:"repeat-customers-content-1"}]}},template:`
    <Card>
      <Tabs :tabs="tabs" :selected="selectedTab" @select="handleTabChange" v-bind="args">
        <template #all-customers-1>
          <span>All <Badge status="new">10+</Badge></span>
        </template>
        <CardSection :title="tabs[selectedTab].content">
          <p v-if="selectedTab === 1">This is specific content of second tab</p>
          <p v-else>Tab {{ selectedTab }} selected</p>
        </CardSection>
      </Tabs>
    </Card>
  `}),KE={Template:yr},YE="wrapper";function Bg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(YE,_(b(b({},KE),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Navigation / Tabs",component:Ms,argTypes:{default:{table:{disable:!0}},selected:{control:{disable:!0}},tabs:{table:{type:{summary:"TabDescriptor[]"}},control:{disable:!0}},select:{table:{type:{summary:"(selectedTabIndex: number) => void"}}},"#tab-id":{description:"Slot to show content of the tab. This slot will override the `content` prop of tab.",table:{category:"slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Tabs"),e("p",null,"Use to alternate among related views within the same context."),e("br",null),e(V,{mdxType:"Canvas"},e(H,{name:"Tabs",height:"200px",args:{fitted:!1},parameters:{docs:{source:{state:"close",code:P(cp||(cp=Ig([`
            <Card>
              <Tabs :tabs="tabs" :selected="selectedTab" @select="handleTabChange">
                <template #all-customers-1>
                  <span>All <Badge status="new">10+</Badge></span>
                </template>
                <CardSection :title="tabs[selectedTab].content">
                  <p v-if="selectedTab === 1">This is specific content of second tab</p>
                  <p v-else>Tab {{ selectedTab }} selected</p>
                </CardSection>
              </Tabs>
            </Card>

            <script setup>
              const selectedTab = ref(0);
              const handleTabChange = (selectedTabIndex) => {
                selectedTab.value = selectedTabIndex;
              };
              const tabs = [
                {
                  id: 'all-customers-1',
                  content: 'All',
                  accessibilityLabel: 'All customers',
                  panelID: 'all-customers-content-1',
                },
                {
                  id: 'accepts-marketing-1',
                  content: 'Accepts marketing',
                  panelID: 'accepts-marketing-content-1',
                },
                {
                  id: 'repeat-customers-1',
                  content: 'Repeat customers',
                  panelID: 'repeat-customers-content-1',
                },
              ];
            <\/script>
          `],[`
            <Card>
              <Tabs :tabs="tabs" :selected="selectedTab" @select="handleTabChange">
                <template #all-customers-1>
                  <span>All <Badge status="new">10+</Badge></span>
                </template>
                <CardSection :title="tabs[selectedTab].content">
                  <p v-if="selectedTab === 1">This is specific content of second tab</p>
                  <p v-else>Tab {{ selectedTab }} selected</p>
                </CardSection>
              </Tabs>
            </Card>\\n
            <script setup>
              const selectedTab = ref(0);
              const handleTabChange = (selectedTabIndex) => {
                selectedTab.value = selectedTabIndex;
              };
              const tabs = [
                {
                  id: 'all-customers-1',
                  content: 'All',
                  accessibilityLabel: 'All customers',
                  panelID: 'all-customers-content-1',
                },
                {
                  id: 'accepts-marketing-1',
                  content: 'Accepts marketing',
                  panelID: 'accepts-marketing-content-1',
                },
                {
                  id: 'repeat-customers-1',
                  content: 'Repeat customers',
                  panelID: 'repeat-customers-content-1',
                },
              ];
            <\/script>
          `])))}}},mdxType:"Story"},yr.bind({}))),e(se,{story:"Tabs",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"TabDescriptor Props")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`/** A unique identifier for the tab */
id: string;
/** A destination to link to */
url?: string;
/** Content for the tab */
content: string;
/** A unique identifier for the panel */
panelID?: string;
/** Visually hidden text for screen readers */
accessibilityLabel?: string;
`)))}Bg.isMDXComponent=!0;const gr=yr.bind({});gr.storyName="Tabs";gr.args={fitted:!1};gr.parameters={storySource:{source:`args => ({
  components: {
    Tabs,
    CardSection,
    Badge,
    Card
  },

  setup() {
    const selectedTab = ref(0);

    const handleTabChange = selectedTabIndex => {
      selectedTab.value = selectedTabIndex;
    };

    const tabs = [{
      id: 'all-customers-1',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1'
    }, {
      id: 'accepts-marketing-1',
      content: 'Accepts marketing',
      panelID: 'accepts-marketing-content-1'
    }, {
      id: 'repeat-customers-1',
      content: 'Repeat customers',
      panelID: 'repeat-customers-content-1'
    }];
    return {
      args,
      selectedTab,
      handleTabChange,
      tabs
    };
  },

  template: \`
    <Card>
      <Tabs :tabs="tabs" :selected="selectedTab" @select="handleTabChange" v-bind="args">
        <template #all-customers-1>
          <span>All <Badge status="new">10+</Badge></span>
        </template>
        <CardSection :title="tabs[selectedTab].content">
          <p v-if="selectedTab === 1">This is specific content of second tab</p>
          <p v-else>Tab {{ selectedTab }} selected</p>
        </CardSection>
      </Tabs>
    </Card>
  \`
})`},docs:{source:{state:"close",code:P(up||(up=Ig([`
            <Card>
              <Tabs :tabs="tabs" :selected="selectedTab" @select="handleTabChange">
                <template #all-customers-1>
                  <span>All <Badge status="new">10+</Badge></span>
                </template>
                <CardSection :title="tabs[selectedTab].content">
                  <p v-if="selectedTab === 1">This is specific content of second tab</p>
                  <p v-else>Tab {{ selectedTab }} selected</p>
                </CardSection>
              </Tabs>
            </Card>

            <script setup>
              const selectedTab = ref(0);
              const handleTabChange = (selectedTabIndex) => {
                selectedTab.value = selectedTabIndex;
              };
              const tabs = [
                {
                  id: 'all-customers-1',
                  content: 'All',
                  accessibilityLabel: 'All customers',
                  panelID: 'all-customers-content-1',
                },
                {
                  id: 'accepts-marketing-1',
                  content: 'Accepts marketing',
                  panelID: 'accepts-marketing-content-1',
                },
                {
                  id: 'repeat-customers-1',
                  content: 'Repeat customers',
                  panelID: 'repeat-customers-content-1',
                },
              ];
            <\/script>
          `],[`
            <Card>
              <Tabs :tabs="tabs" :selected="selectedTab" @select="handleTabChange">
                <template #all-customers-1>
                  <span>All <Badge status="new">10+</Badge></span>
                </template>
                <CardSection :title="tabs[selectedTab].content">
                  <p v-if="selectedTab === 1">This is specific content of second tab</p>
                  <p v-else>Tab {{ selectedTab }} selected</p>
                </CardSection>
              </Tabs>
            </Card>\\n
            <script setup>
              const selectedTab = ref(0);
              const handleTabChange = (selectedTabIndex) => {
                selectedTab.value = selectedTabIndex;
              };
              const tabs = [
                {
                  id: 'all-customers-1',
                  content: 'All',
                  accessibilityLabel: 'All customers',
                  panelID: 'all-customers-content-1',
                },
                {
                  id: 'accepts-marketing-1',
                  content: 'Accepts marketing',
                  panelID: 'accepts-marketing-content-1',
                },
                {
                  id: 'repeat-customers-1',
                  content: 'Repeat customers',
                  panelID: 'repeat-customers-content-1',
                },
              ];
            <\/script>
          `])))}}};const Wn={title:"Components / Navigation / Tabs",component:Ms,argTypes:{default:{table:{disable:!0}},selected:{control:{disable:!0}},tabs:{table:{type:{summary:"TabDescriptor[]"}},control:{disable:!0}},select:{table:{type:{summary:"(selectedTabIndex: number) => void"}}},"#tab-id":{description:"Slot to show content of the tab. This slot will override the `content` prop of tab.",table:{category:"slots",type:{summary:null}}}},includeStories:["tabs"]},ZE={Tabs:"tabs"};Wn.parameters=Wn.parameters||{};Wn.parameters.docs=_(b({},Wn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:ZE,mdxComponentAnnotations:Wn},e(Bg,null))});var QE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:yr,tabs:gr,default:Wn}),dp=Object.freeze,JE=Object.defineProperty,$g=(t,n)=>dp(JE(t,"raw",{value:dp(n||t.slice())})),pp,mp;const hr=t=>({components:{Tag:ei},setup(){return{args:t}},methods:{removeHandle(){alert("Removed")},clickHandle(){alert("Clicked")}},template:`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>`}),e2={Template:hr},t2="wrapper";function Fg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(t2,_(b(b({},e2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Tag",component:ei,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Tag"),e("p",null,"Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants."),e(V,{mdxType:"Canvas"},e(H,{name:"Tag",height:"30px",args:{disabled:!1},parameters:{docs:{source:{code:P(pp||(pp=$g([`
            <Tag>Wholesale</Tag>
            <Tag v-on:remove="removeHandle">Removable</Tag>
            <Tag v-on:click="clickHandle">Clickable</Tag>
            <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>

            <script setup>
              const removeHandle = () => {
                alert('Removed');
              };
              const clickHandle = () => {
                alert('Clicked');
              };
            <\/script>
          `],[`
            <Tag>Wholesale</Tag>
            <Tag v-on:remove="removeHandle">Removable</Tag>
            <Tag v-on:click="clickHandle">Clickable</Tag>
            <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>\\n
            <script setup>
              const removeHandle = () => {
                alert('Removed');
              };
              const clickHandle = () => {
                alert('Clicked');
              };
            <\/script>
          `])))}}},mdxType:"Story"},hr.bind({}))),e(se,{story:"Tag",mdxType:"ArgsTable"}))}Fg.isMDXComponent=!0;const br=hr.bind({});br.storyName="Tag";br.args={disabled:!1};br.parameters={storySource:{source:`args => ({
  components: {
    Tag
  },

  setup() {
    return {
      args
    };
  },

  methods: {
    removeHandle() {
      alert('Removed');
    },

    clickHandle() {
      alert('Clicked');
    }

  },
  template: \`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>\`
})`},docs:{source:{code:P(mp||(mp=$g([`
            <Tag>Wholesale</Tag>
            <Tag v-on:remove="removeHandle">Removable</Tag>
            <Tag v-on:click="clickHandle">Clickable</Tag>
            <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>

            <script setup>
              const removeHandle = () => {
                alert('Removed');
              };
              const clickHandle = () => {
                alert('Clicked');
              };
            <\/script>
          `],[`
            <Tag>Wholesale</Tag>
            <Tag v-on:remove="removeHandle">Removable</Tag>
            <Tag v-on:click="clickHandle">Clickable</Tag>
            <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>\\n
            <script setup>
              const removeHandle = () => {
                alert('Removed');
              };
              const clickHandle = () => {
                alert('Clicked');
              };
            <\/script>
          `])))}}};const Gn={title:"Components / Forms / Tag",component:ei,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["tag"]},a2={Tag:"tag"};Gn.parameters=Gn.parameters||{};Gn.parameters.docs=_(b({},Gn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:a2,mdxComponentAnnotations:Gn},e(Fg,null))});var n2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:hr,tag:br,default:Gn});const Ai=t=>({components:{TextContainer:ut},setup(){return{args:t}},template:`
    <TextContainer v-bind="args">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.
      </p>
      <h2>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.
      </p>
      <ul>
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </ul>
    </TextContainer>
  `});Ai.parameters={docs:{source:{code:P`
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.
          </p>
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.
          </p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </TextContainer>
      `}}};const o2={Template:Ai},i2="wrapper";function Eg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(i2,_(b(b({},o2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Titles and text / Text container",component:ut,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"Text container"),e("p",null,"A text container is used to wrap text elements such as paragraphs, headings, and lists to give them vertical spacing."),e(V,{mdxType:"Canvas"},e(H,{story:Ai,name:"Text container",height:"250px",mdxType:"Story"})),e(se,{story:"Text container",mdxType:"ArgsTable"}))}Eg.isMDXComponent=!0;const Og=Ai;Og.storyName="Text container";const Xn={title:"Components / Titles and text / Text container",component:ut,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},s2={"Text container":"_Template_"};Xn.parameters=Xn.parameters||{};Xn.parameters.docs=_(b({},Xn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:s2,mdxComponentAnnotations:Xn},e(Eg,null))});var l2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ai,_Template_:Og,default:Xn});const ki=t=>({components:{TextField:Pe},template:`
  <div>
    <TextField
      v-model="name"
      autoComplete="off"
    >
      <template slot="label">
        Your store name
      </template>
    </TextField>
    <p style="margin-top: 20px">Name: {{ name }}</p>
  </div>
  `,data(){return{name:"Polaris"}}});ki.parameters={docs:{source:{state:"close",code:P`
      <div>
        <TextField
          v-model="name"
          autoComplete="off"
        >
          <template slot="label">
            Your store name
          </template>
        </TextField>
        <p>Name: {{ name }}</p>
      </div>\n
      data() {
        return {
          name: 'Polaris',
        };
      },
      `}}};const Ni=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
  <div>
    <TextField
      type="number"
      v-model="numberData"
      autoComplete="off"
    >
      <template slot="label">
        Quantity
      </template>
    </TextField>
    <p style="margin-top: 20px">Number: {{ numberData }}</p>
  </div>`,data(){return{numberData:"1"}}});Ni.parameters={docs:{source:{state:"close",code:P`
      <div>
        <TextField
          type="number"
          v-model="numberData"
          autoComplete="off"
        >
          <template slot="label">
            Quantity
          </template>
        </TextField>
        <p>Number: {{ numberData }}</p>
      </div>\n
      data() {
        return {
          numberData: '1',
        };
      },
      `}}};const Li=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
  <div>
    <TextField
      v-model="address"
      autoComplete="off"
      :multiline="4"
    >
      <template slot="label">
        Address
      </template>
    </TextField>
    <p style="margin-top: 20px">Address: {{ address }}</p>
  </div>`,data(){return{address:"156 Xa Dan 2"}}});Li.parameters={docs:{source:{state:"close",code:P`
      <div>
        <TextField
          v-model="address"
          autoComplete="off"
          :multiline="4"
        >
          <template slot="label">
            Address
          </template>
        </TextField>
        <p style="margin-top: 20px">Address: {{ address }}</p>
      </div>\n
      data() {
        return {
          address: '156 Xa Dan 2',
        };
      },
      `}}};const wi=(t,{argTypes:n})=>({components:{TextField:Pe,ChoiceList:qt},template:`
  <div>
    <ChoiceList :choices="choices" v-model="selected">
      Gift card auto-expiration
    </ChoiceList>
    <TextField
      type="number"
      v-model="months"
      autoComplete="off"
      :disabled="selected === 'no'"
      :labelHidden="true"
    >
    </TextField>
  </div>`,data(){return{months:"12",choices:[{label:"Gift cards never expire",value:"no"},{label:"Gift cards expire",value:"yes"}],selected:"yes"}}});wi.parameters={docs:{source:{state:"close",code:P`
        <div>
          <ChoiceList :choices="choices" v-model="selected">
            Gift card auto-expiration
          </ChoiceList>
          <TextField
            type="number"
            v-model="months"
            autoComplete="off"
            :disabled="selected === 'no'"
            :labelHidden="true"
          >
          </TextField>
        </div>\n
        import { choiceList } from '@/polaris-vue';\n
        data() {
          return {
            months: '12',
            choices: [
              {label: 'Gift cards never expire', value: 'no'},
              {label: 'Gift cards expire', value: 'yes'},
            ],
            selected: 'yes',
          };
        },
      `}}};const Pi=(t,{argTypes:n})=>({components:{TextField:Pe,Stack:qe,StackItem:Ct},template:`
  <Stack alignment="center">
    <StackItem :fill="true">
      Price
    </StackItem>
    <TextField
      v-model="price"
      autoComplete="off"
      align="right"
      :labelHidden="true"
    >
      <template #label>
        Price label
      </template>
    </TextField>
  </Stack>`,data(){return{price:"1"}}});Pi.parameters={docs:{source:{state:"close",code:P`
      <Stack alignment="center">
        <StackItem :fill="true">
          Price
        </StackItem>
        <TextField
          v-model="price"
          autoComplete="off"
          align="right"
          :labelHidden="true"
        >
          <template #label>
            Price label
          </template>
        </TextField>
      </Stack>\n
      import { Stack, StackItem } from '@/polaris-vue';\n
      data() {
        return {
          price: '1',
        };
      },
      `}}};const Mi=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
  <div>
    <TextField
      type="email"
      autoComplete="email"
    >
      <template #label>
        Account email
      </template>
      <template #help-text>
        We'll use this address if we need to contact you about your account.
      </template>
    </TextField>
  </div>
  `});Mi.parameters={docs:{source:{state:"close",code:P`
      <div>
        <TextField
          type="email"
          autoComplete="email"
        >
          <template #label>
            Account email
          </template>
          <template #help-text>
            We'll use this address if we need to contact you about your account.
          </template>
        </TextField>
      </div>
      `}}};const _i=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
  <div>
    <TextField
      v-model="price"
      type="number"
      autoComplete="off"
    >
      <template #label>
        Price
      </template>
      <template #prefix>
        $
      </template>
    </TextField>
  </div>
  `,data(){return{price:"10"}}});_i.parameters={docs:{source:{state:"close",code:P`
      <div>
        <TextField
          v-model="price"
          type="number"
          autoComplete="off"
        >
          <template #label>
            Price
          </template>
          <template #prefix>
            $
          </template>
        </TextField>
      </div>
      `}}};const Di=(t,{argTypes:n})=>({components:{TextField:Pe,Select:co},template:`
  <TextField
    v-model="weight"
    type="number"
    autoComplete="off"
  >
    <template #label>Weight</template>
    <template #connected-left>
      <Select
        v-model="unit"
        :options="['kg', 'lb']"
        :labelHidden="true"
      >
      </Select>
    </template>
  </TextField>
  `,data(){return{weight:"10",unit:"kg"}}});Di.parameters={docs:{source:{state:"close",code:P`
        <TextField
          v-model="weight"
          type="number"
          autoComplete="off"
        >
          <template #label>Weight</template>
          <template #connected-left>
            <Select
              v-model="unit"
              :options="['kg', 'lb']"
              :labelHidden="true"
            >
            </Select>
          </template>
        </TextField>
      `}}};const Ii=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
  <div>
    <TextField
      v-model="storeName"
      autoComplete="off"
      :clearButton="true"
      @clear-button-click="storeName = ''"
    >
      <template slot="label">
        Store name
      </template>
    </TextField>
  </div>
  `,data(){return{storeName:"Jaded Pixel"}}});Ii.parameters={docs:{source:{state:"close",code:P`
      <div>
        <TextField
          v-model="storeName"
          autoComplete="off"
          :clearButton="true"
          @clear-button-click="storeName = ''"
        >
          <template slot="label">
            Store name
          </template>
        </TextField>
      </div>\n
      data() {
        return {
          storeName: 'Jaded Pixel',
        };
      },
      `}}};const fr=t=>({components:{TextField:Pe},setup(){return{args:t}},template:`
    <TextField v-bind="args" autoComplete="off">
      <template #label>Example text field</template>
    </TextField>
  `}),r2={DefaultTextField:ki,NumberField:Ni,MultiLineField:Li,HiddenLabelField:wi,RightAlignedField:Pi,HelpTextField:Mi,PrefixSuffixField:_i,ConnectedField:Di,ClearBtnField:Ii,ExampleField:fr},c2="wrapper";function qg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(c2,_(b(b({},r2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Forms / Text Field",component:Pe,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),e("h1",null,"Text field"),e("p",null,"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."),e("br",null),e("br",null),e("h3",null,"Default text field"),e("p",null,"Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options."),e(V,{mdxType:"Canvas"},e(H,{story:ki,name:"Default text field",mdxType:"Story"})),e("h3",null,"Number field"),e("p",null,"Use when input text should be a number."),e(V,{mdxType:"Canvas"},e(H,{story:Ni,name:"Number field",mdxType:"Story"})),e("h3",null,"Multiline text field"),e("p",null,`Use when the expected input could be more than one line.
The field will automatically grow to accommodate additional text.`),e(V,{mdxType:"Canvas"},e(H,{story:Li,name:"Multiline text field",height:"150px",mdxType:"Story"})),e("h3",null,"Text field with hidden label"),e("p",null,`Use to visually hide the label when the text field's purpose is clear from context.
The label will remain available to screen readers. Use this option with care. In almost all cases, show the label.`),e(V,{mdxType:"Canvas"},e(H,{story:wi,name:"Text field with hidden label",mdxType:"Story"})),e("h3",null,"Text field with right aligned text"),e("p",null,"Use when input text should be aligned right."),e(V,{mdxType:"Canvas"},e(H,{story:Pi,name:"Text field with right aligned text",mdxType:"Story"})),e("h3",null,"Text field with help text"),e("p",null,`Use to show short instructional content below the text field.
Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements).
If more explanation is needed, link to the Shopify Help Center.`),e(V,{mdxType:"Canvas"},e(H,{story:Mi,name:"Text field with help text",mdxType:"Story"})),e("h3",null,"Text field with prefix or suffix"),e("p",null,"Use as a special form of help text that works best inline."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},"Use a prefix for things like currency symbols (\u201C$\u201D, \u201C\xA5\u201D, \u201C\xA3\u201D).")),e("li",{parentName:"ul"},e("p",{parentName:"li"},"Use suffix for things like units of measure (\u201Cin\u201D, \u201Ccm\u201D)."))),e(V,{mdxType:"Canvas"},e(H,{story:_i,name:"Text field with prefix or suffix",mdxType:"Story"})),e("h3",null,"Text field with connected fields"),e("p",null,"Use when a text field and several related fields make up a logical unit."),e("p",null,`If inputting weight as a number and a separate unit of measurement,
use a text field with a select dropdown menu (for example \u201Ckg\u201D, \u201Clb\u201D) as a connected field.`),e(V,{mdxType:"Canvas"},e(H,{story:Di,name:"Text field with connected fields",mdxType:"Story"})),e("h3",null,"Text field with clear button"),e("p",null,"Use to allow merchants to clear the content from a text field."),e(V,{mdxType:"Canvas"},e(H,{story:Ii,name:"Text field with clear button",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{story:fr,name:"Example",parameters:{docs:{source:{code:P`
          <TextField v-bind="args" autoComplete="off">
            <template #label>Example text field</template>
          </TextField>
          `}}},mdxType:"Story"})),e(se,{story:"Example",mdxType:"ArgsTable"}))}qg.isMDXComponent=!0;const Rg=ki;Rg.storyName="Default text field";const Vg=Ni;Vg.storyName="Number field";const Hg=Li;Hg.storyName="Multiline text field";const Ug=wi;Ug.storyName="Text field with hidden label";const jg=Pi;jg.storyName="Text field with right aligned text";const zg=Mi;zg.storyName="Text field with help text";const Wg=_i;Wg.storyName="Text field with prefix or suffix";const Gg=Di;Gg.storyName="Text field with connected fields";const Xg=Ii;Xg.storyName="Text field with clear button";const Kg=fr;Kg.storyName="Example";const Kn={title:"Components / Forms / Text Field",component:Pe,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},includeStories:["_DefaultTextField_","_NumberField_","_MultiLineField_","_HiddenLabelField_","_RightAlignedField_","_HelpTextField_","_PrefixSuffixField_","_ConnectedField_","_ClearBtnField_","_ExampleField_"]},u2={"Default text field":"_DefaultTextField_","Number field":"_NumberField_","Multiline text field":"_MultiLineField_","Text field with hidden label":"_HiddenLabelField_","Text field with right aligned text":"_RightAlignedField_","Text field with help text":"_HelpTextField_","Text field with prefix or suffix":"_PrefixSuffixField_","Text field with connected fields":"_ConnectedField_","Text field with clear button":"_ClearBtnField_",Example:"_ExampleField_"};Kn.parameters=Kn.parameters||{};Kn.parameters.docs=_(b({},Kn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:u2,mdxComponentAnnotations:Kn},e(qg,null))});var d2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultTextField:ki,NumberField:Ni,MultiLineField:Li,HiddenLabelField:wi,RightAlignedField:Pi,HelpTextField:Mi,PrefixSuffixField:_i,ConnectedField:Di,ClearBtnField:Ii,ExampleField:fr,_DefaultTextField_:Rg,_NumberField_:Vg,_MultiLineField_:Hg,_HiddenLabelField_:Ug,_RightAlignedField_:jg,_HelpTextField_:zg,_PrefixSuffixField_:Wg,_ConnectedField_:Gg,_ClearBtnField_:Xg,_ExampleField_:Kg,default:Kn});const vr=(t,{argTypes:n})=>({components:{TextStyle:ct},setup(){return{args:t}},template:'<TextStyle v-bind="args"> Hello </TextStyle>'}),p2={Template:vr},m2="wrapper";function Yg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(m2,_(b(b({},p2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Titles and text / Text Style",component:ct,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Text Style"),e("p",null,"Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text."),e(V,{mdxType:"Canvas"},e(H,{name:"Text Style",height:"60px",parameters:{docs:{source:{code:P`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}},mdxType:"Story"},vr.bind({}))),e(se,{story:"Text Style",mdxType:"ArgsTable"}))}Yg.isMDXComponent=!0;const du=vr.bind({});du.storyName="Text Style";du.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    TextStyle
  },

  setup() {
    return {
      args
    };
  },

  template: \`<TextStyle v-bind="args"> Hello </TextStyle>\`
})`},docs:{source:{code:P`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}};const Yn={title:"Components / Titles and text / Text Style",component:ct,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["textStyle"]},y2={"Text Style":"textStyle"};Yn.parameters=Yn.parameters||{};Yn.parameters.docs=_(b({},Yn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:y2,mdxComponentAnnotations:Yn},e(Yg,null))});var g2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:vr,textStyle:du,default:Yn});const xr=(t,{argTypes:n})=>({components:{Thumbnail:ti},setup(){return{args:t}},computed:{thumbnailSource(){return t.source==="CirclePlusMinor"?Cp:t.source},bindProps(){return{size:t.size,source:this.thumbnailSource,alt:t.alt}}},template:'<Thumbnail v-bind="bindProps" />'}),h2={Template:xr},b2="wrapper";function Zg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(b2,_(b(b({},h2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Images and icons / Thumbnail",component:ti,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Thumbnail"),e("p",null,"Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context."),e(V,{mdxType:"Canvas"},e(H,{name:"Thumbnail",height:"60px",args:{alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"},parameters:{docs:{source:{code:P`
            <Thumbnail v-bind="props" />
          `}}},mdxType:"Story"},xr.bind({}))),e(se,{story:"Thumbnail",mdxType:"ArgsTable"}))}Zg.isMDXComponent=!0;const Tr=xr.bind({});Tr.storyName="Thumbnail";Tr.args={alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"};Tr.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  components: {
    Thumbnail
  },

  setup() {
    return {
      args
    };
  },

  computed: {
    thumbnailSource() {
      if (args.source === "CirclePlusMinor") {
        return CirclePlusMinor;
      }

      return args.source;
    },

    bindProps() {
      return {
        size: args.size,
        source: this.thumbnailSource,
        alt: args.alt
      };
    }

  },
  template: \`<Thumbnail v-bind="bindProps" />\`
})`},docs:{source:{code:P`
            <Thumbnail v-bind="props" />
          `}}};const Zn={title:"Components / Images and icons / Thumbnail",component:ti,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},includeStories:["thumbnail"]},f2={Thumbnail:"thumbnail"};Zn.parameters=Zn.parameters||{};Zn.parameters.docs=_(b({},Zn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:f2,mdxComponentAnnotations:Zn},e(Zg,null))});var v2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:xr,thumbnail:Tr,default:Zn});const Sr=t=>({components:{Frame:ta,Toast:Jo,Button:ge},setup(){const n=k(!1),o=k(!1),i=k(!1);return{toastActive1:n,toggleToast1:()=>{n.value=!n.value},toastActive2:o,toggleToast2:()=>{o.value=!o.value},toastActive3:i,toggleToast3:()=>{i.value=!i.value},undoHandler:()=>{alert("Undo clicked")}}},template:`
    <Frame>
      <Button @click="toggleToast1">Toast 1</Button>&nbsp;
      <Button @click="toggleToast2">Toast 2</Button>&nbsp;
      <Button destructive @click="toggleToast3">Toast Error</Button>
      <Toast
        v-if="toastActive1"
        content="Message sent"
        :duration="5000"
        :action="{ content: 'Undo', onAction: undoHandler }"
        @dismiss="toggleToast1"
      />
      <Toast
        v-if="toastActive2"
        content="Image Uploaded"
        @dismiss="toggleToast2"
      />
      <Toast
        v-if="toastActive3"
        error
        content="Server Error"
        @dismiss="toggleToast3"
      />
    </Frame>
  `}),x2={Template:Sr},T2="wrapper";function Qg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(T2,_(b(b({},x2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Feedback indicators / Toast",component:Jo,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},mdxType:"Meta"}),e("h1",null,"Toast"),e("p",null,"The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action."),e(V,{mdxType:"Canvas"},e(H,{name:"Toast",inline:!1,height:"300px",parameters:{docs:{source:{code:P`
            <Frame>
              <Button @click="toggleToast">Toggle Toast</Button>\n
              <Toast
                v-if="toastActive"
                content="Message sent"
                :duration="5000"
                :action="{ content: 'Undo', onAction: undoHandler }"
                @dismiss="toggleToast"
              />
            </Frame>\n
            setup() {
              const toastActive = ref(false);
              const toggleToast = () => {
                toastActive.value = !toastActive.value;
              };
              const undoHandler = () => {
                alert('Undo clicked');
              }
              return { toastActive, toggleToast, undoHandler };
            },
          `}}},mdxType:"Story"},Sr.bind({}))),e(se,{story:"Toast",mdxType:"ArgsTable"}))}Qg.isMDXComponent=!0;const pu=Sr.bind({});pu.storyName="Toast";pu.parameters={storySource:{source:`args => ({
  components: {
    Frame,
    Toast,
    Button
  },

  setup() {
    const toastActive1 = ref(false);
    const toastActive2 = ref(false);
    const toastActive3 = ref(false);

    const toggleToast1 = () => {
      toastActive1.value = !toastActive1.value;
    };

    const toggleToast2 = () => {
      toastActive2.value = !toastActive2.value;
    };

    const toggleToast3 = () => {
      toastActive3.value = !toastActive3.value;
    };

    const undoHandler = () => {
      alert('Undo clicked');
    };

    return {
      toastActive1,
      toggleToast1,
      toastActive2,
      toggleToast2,
      toastActive3,
      toggleToast3,
      undoHandler
    };
  },

  template: \`
    <Frame>
      <Button @click="toggleToast1">Toast 1</Button>&nbsp;
      <Button @click="toggleToast2">Toast 2</Button>&nbsp;
      <Button destructive @click="toggleToast3">Toast Error</Button>
      <Toast
        v-if="toastActive1"
        content="Message sent"
        :duration="5000"
        :action="{ content: 'Undo', onAction: undoHandler }"
        @dismiss="toggleToast1"
      />
      <Toast
        v-if="toastActive2"
        content="Image Uploaded"
        @dismiss="toggleToast2"
      />
      <Toast
        v-if="toastActive3"
        error
        content="Server Error"
        @dismiss="toggleToast3"
      />
    </Frame>
  \`
})`},docs:{source:{code:P`
            <Frame>
              <Button @click="toggleToast">Toggle Toast</Button>\n
              <Toast
                v-if="toastActive"
                content="Message sent"
                :duration="5000"
                :action="{ content: 'Undo', onAction: undoHandler }"
                @dismiss="toggleToast"
              />
            </Frame>\n
            setup() {
              const toastActive = ref(false);
              const toggleToast = () => {
                toastActive.value = !toastActive.value;
              };
              const undoHandler = () => {
                alert('Undo clicked');
              }
              return { toastActive, toggleToast, undoHandler };
            },
          `}}};const Qn={title:"Components / Feedback indicators / Toast",component:Jo,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},includeStories:["toast"]},S2={Toast:"toast"};Qn.parameters=Qn.parameters||{};Qn.parameters.docs=_(b({},Qn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:S2,mdxComponentAnnotations:Qn},e(Qg,null))});var C2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Sr,toast:pu,default:Qn});const Cr=t=>({components:{Tooltip:Qt,TextStyle:ct},setup(){return{args:t}},template:`<Tooltip v-bind="args" :content="args.content1">
    <TextStyle variation="strong">Order #1001</TextStyle>
  </Tooltip>`}),Ao=t=>({components:{Button:ge,ButtonGroup:tt,Tooltip:Qt,TextField:Pe},template:`
    <div style="width: 200px">
      <ButtonGroup segmented fullWidth>
        <Tooltip dismissOnMouseOut>
          <template #content>Bold Slot</template>
          <Button>B</Button>
        </Tooltip>
        <Tooltip content="Italic" dismissOnMouseOut>
          <Button>I</Button>
        </Tooltip>
        <Tooltip content="Underline" dismissOnMouseOut>
          <Button>U</Button>
        </Tooltip>
        <Tooltip content="Strikethrough" dismissOnMouseOut>
          <Button>S</Button>
        </Tooltip>
      </ButtonGroup>
      <TextField autoComplete="off" labelHidden multiline>
        <template #label>Product title</template>
      </TextField>
    </div>
  `});Ao.storyName="Tooltip visible only with child interaction";Ao.parameters={docs:{source:{code:P`
        <div style="width: 200px">
          <ButtonGroup segmented fullWidth>
            <Tooltip dismissOnMouseOut>
              <template #content>Bold Slot</template>
              <Button>B</Button>
            </Tooltip>
            <Tooltip content="Italic" dismissOnMouseOut>
              <Button>I</Button>
            </Tooltip>
            <Tooltip content="Underline" dismissOnMouseOut>
              <Button>U</Button>
            </Tooltip>
            <Tooltip content="Strikethrough" dismissOnMouseOut>
              <Button>S</Button>
            </Tooltip>
          </ButtonGroup>
          <TextField autoComplete="off" labelHidden multiline>
            <template #label>Product title</template>
          </TextField>
        </div>
      `}}};const A2={Template:Cr,childInteraction:Ao},k2="wrapper";function Jg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(k2,_(b(b({},A2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Overlays / Tooltip",component:Qt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Tooltip"),e("p",null,"Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when merchants hover, focus, tap, or click."),e("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),e("br",null),e("br",null),e("h3",null,"A single item fills the remaining space"),e(V,{withSource:"close",mdxType:"Canvas"},e(H,{story:Ao,height:"150px",inline:!1,name:"_childInteraction_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{inline:!1,name:"Tooltip",height:"100px",args:{active:!0,content1:"This order has shipping labels."},parameters:{docs:{source:{code:P`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}},mdxType:"Story"},Cr.bind({}))),e(se,{story:"Tooltip",mdxType:"ArgsTable"}))}Jg.isMDXComponent=!0;const N2=Ao,Ar=Cr.bind({});Ar.storyName="Tooltip";Ar.args={active:!0,content1:"This order has shipping labels."};Ar.parameters={storySource:{source:`args => ({
  components: {
    Tooltip,
    TextStyle
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Tooltip v-bind="args" :content="args.content1">
    <TextStyle variation="strong">Order #1001</TextStyle>
  </Tooltip>\`
})`},docs:{source:{code:P`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}};const Jn={title:"Components / Overlays / Tooltip",component:Qt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_childInteraction_","tooltip"]},L2={_childInteraction_:"_childInteraction_",Tooltip:"tooltip"};Jn.parameters=Jn.parameters||{};Jn.parameters.docs=_(b({},Jn.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:L2,mdxComponentAnnotations:Jn},e(Jg,null))});var w2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Cr,childInteraction:Ao,_childInteraction_:N2,tooltip:Ar,default:Jn});const kr=t=>({components:{Frame:ta,TopBar:ai,TopBarUserMenu:wc,TopBarMenu:_s,Icon:re,VisuallyHidden:lt,TopBarSearchField:Lc,ActionList:Je},setup(){const n={width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},o=k(!1),i=k(!1),l=k(!1),r=k(""),u=N=>{l.value=N.length>0},m=()=>{r.value="",l.value=!1},x=()=>{o.value=!o.value},v=()=>{i.value=!i.value},g=k([{items:[{content:"Back to Shopify",icon:ao}]},{items:[{content:"Community forums"}]}]),T=k({title:"Another Message",description:"This is a description of message",action:{onClick:()=>{alert("clicked")},content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}});return{logo:n,isSearchActive:l,searchValue:r,handleSearchChange:u,toggleIsSecondaryMenuOpen:v,userMenuAction:g,userMenuMessage:T,toggleUserMenu:x,isUserMenuOpen:o,isSecondaryMenuOpen:i,handleSearchResultsDismiss:m,QuestionMarkMajor:Tp}},template:`
    <Frame :logo="logo">
      <template #topBar>
        <TopBar showNavigationToggle
          :searchResultsVisible="isSearchActive"
          @search-result-dismiss="handleSearchResultsDismiss"
        >
          <template #userMenu>
            <TopBarUserMenu
              :actions="userMenuAction"
              name="Polaris"
              detail="qikify"
              initials="P"
              :message="userMenuMessage"
              :open="isUserMenuOpen"
              @toggle="toggleUserMenu"
            />
          </template>
          <template #secondaryMenu>
            <TopBarMenu
              :open="isSecondaryMenuOpen"
              @open="toggleIsSecondaryMenuOpen"
              @close="toggleIsSecondaryMenuOpen"
              :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
            >
              <template #activatorContent>
                <span>
                  <Icon :source="QuestionMarkMajor" />
                  <VisuallyHidden>Secondary menu</VisuallyHidden>
                </span>
              </template>
            </TopBarMenu>
          </template>
          <template #searchField>
            <TopBarSearchField
              placeholder="Search"
              v-model="searchValue"
              :showFocusBorder="true"
              @change="handleSearchChange"
            />
          </template>
          <template #searchResults>
            <ActionList
              :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
            />
          </template>
        </TopBar>
      </template>
    </Frame>
  `}),P2={Template:kr},M2="wrapper";function eh(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(M2,_(b(b({},P2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Navigation / Top Bar",component:ai,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Top Bar"),e("p",null,"The top bar is a header component that allows merchants to search, access menus, and navigate by clicking on the logo. It's always visible at the top of interfaces like Shopify or Shopify Plus. Third-party apps that use the top bar can customize the color to match their brand using the ",e("a",{parentName:"p",href:"?path=/docs/components-structure-app-provider"},"app provider")," component and are required to use their own logo."),e(V,{mdxType:"Canvas"},e(H,{name:"Top Bar",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:P`
            <Frame :logo="logo">
              <template #topBar>
                <TopBar showNavigationToggle
                  :searchResultsVisible="isSearchActive"
                  @search-result-dismiss="handleSearchResultsDismiss"
                >\n
                  <template #userMenu>
                    <TopBarUserMenu
                      :actions="userMenuAction"
                      name="Polaris"
                      detail="qikify"
                      initials="P"
                      :message="userMenuMessage"
                      :open="isUserMenuOpen"
                      @toggle="toggleUserMenu"
                    />
                  </template>\n
                  <template #secondaryMenu>
                    <TopBarMenu
                      :open="isSecondaryMenuOpen"
                      @open="toggleIsSecondaryMenuOpen"
                      @close="toggleIsSecondaryMenuOpen"
                      :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
                    >
                      <template #activatorContent>
                        <span>
                          <Icon :source="QuestionMarkMajor" />
                          <VisuallyHidden>Secondary menu</VisuallyHidden>
                        </span>
                      </template>
                    </TopBarMenu>
                  </template>\n
                  <template #searchField>
                    <TopBarSearchField
                      placeholder="Search"
                      v-model="searchValue"
                      :showFocusBorder="true"
                      @change="handleSearchChange"
                    />
                  </template>\n
                  <template #searchResults>
                    <ActionList
                      :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
                    />
                  </template>\n
                </TopBar>
              </template>
            </Frame>\n\n
            setup() {
              const logo = {
                width: 30,
                topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
              }
              const isUserMenuOpen = ref(false);
              const isSecondaryMenuOpen = ref(false);
              const isSearchActive = ref(false);
              const searchValue = ref('');\n
              const handleSearchChange = (value) => {
                isSearchActive.value = value.length > 0;
              }
              const handleSearchResultsDismiss = () => {
                searchValue.value = '';
                isSearchActive.value = false;
              }
              const toggleUserMenu = () => {
                isUserMenuOpen.value = !isUserMenuOpen.value;
              };
              const toggleIsSecondaryMenuOpen = () => {
                isSecondaryMenuOpen.value = !isSecondaryMenuOpen.value;
              };
              const userMenuAction = ref([
                { items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }] },
                { items: [{ content: 'Community forums' }] }]
              );
              const clickHandle = () => { alert('clicked'); };
              const userMenuMessage = ref({
                title: 'Another Message',
                description:'This is a description of message',
                action: { onClick: clickHandle, content: 'This is a action' },
                link: { to: 'https://google.com', content: 'Google Homepage' }
              });
              return { logo, isSearchActive, searchValue, handleSearchChange, toggleIsSecondaryMenuOpen, userMenuAction, userMenuMessage, toggleUserMenu, isUserMenuOpen, isSecondaryMenuOpen, handleSearchResultsDismiss, QuestionMarkMajor };
            },
          `}}},mdxType:"Story"},kr.bind({}))),e(se,{story:"Top Bar",mdxType:"ArgsTable"}),e("a",{name:"subcomponent-menu"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar menu")),e("p",null,"A component that composes together an activator and a popover containing an action list to create a dropdown menu."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actions"),e("td",{parentName:"tr",align:null},"ActionListProps","['sections']"),e("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu. Follow Action List component props")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"message"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-message"},"MessageProps")),e("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"open"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the menu is currently open")))),e("br",null),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Events"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@open"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle opening the menu popover")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@close"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle closing the menu popover")))),e("br",null),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Slots"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"#activatorContent"),e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"Accepts an activator component that renders inside of a button that opens the menu")))),e("br",null),e("a",{name:"subcomponent-user-menu"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar user menu")),e("p",null,"A specialized menu component that is activated by a user avatar."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actions"),e("td",{parentName:"tr",align:null},"{items: IconableAction[]}[]"),e("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"message"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-message"},"MessageProps")),e("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"name"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string detailing the merchant's full name to be displayed in the user menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"detail"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string allowing further details on the merchant's name displayed in the user menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"initials"),e("td",{parentName:"tr",align:null},"AvatarProps","['initials']"),e("td",{parentName:"tr",align:null},"The merchant's initials, rendered in place of an avatar image when not provided")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"avatar"),e("td",{parentName:"tr",align:null},"AvatarProps","['source']"),e("td",{parentName:"tr",align:null},"An avatar image representing the merchant")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"open"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the user menu is currently open")))),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Event"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@toggle"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle opening and closing the user menu")))),e("br",null),e("a",{name:"type-message"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar menu message")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A title for the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"description"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A description for the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"action"),e("td",{parentName:"tr",align:null},"{onClick(): void; content: string}"),e("td",{parentName:"tr",align:null},"An action to render near the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"link"),e("td",{parentName:"tr",align:null},"{to: string; content: string}"),e("td",{parentName:"tr",align:null},"A link to view the content of the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge"),e("td",{parentName:"tr",align:null},"{content: string; status: BadgeProps","['status']","}"),e("td",{parentName:"tr",align:null},"A badge to render near the message")))),e("br",null),e("a",{name:"subcomponent-search-field"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar search field")),e("p",null,"A text field component that is tailor-made for a search use-case."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"value"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"Initial value for the input")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"placeholder"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"Hint text to display")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"focused"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Force the focus state on the input")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Force a state where search is active but the text field component is not focused")))),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Events"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@change(value: string)"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"Callback when value is changed")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@focus"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"Callback when input is focused")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@blur"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"Callback when focus is removed")))))}eh.isMDXComponent=!0;const mu=kr.bind({});mu.storyName="Top Bar";mu.parameters={storySource:{source:`args => ({
  components: {
    Frame,
    TopBar,
    TopBarUserMenu,
    TopBarMenu,
    Icon,
    VisuallyHidden,
    TopBarSearchField,
    ActionList
  },

  setup() {
    const logo = {
      width: 30,
      topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
      contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png'
    };
    const isUserMenuOpen = ref(false);
    const isSecondaryMenuOpen = ref(false);
    const isSearchActive = ref(false);
    const searchValue = ref('');

    const handleSearchChange = value => {
      isSearchActive.value = value.length > 0;
    };

    const handleSearchResultsDismiss = () => {
      searchValue.value = '';
      isSearchActive.value = false;
    };

    const toggleUserMenu = () => {
      isUserMenuOpen.value = !isUserMenuOpen.value;
    };

    const toggleIsSecondaryMenuOpen = () => {
      isSecondaryMenuOpen.value = !isSecondaryMenuOpen.value;
    };

    const userMenuAction = ref([{
      items: [{
        content: 'Back to Shopify',
        icon: ArrowLeftMinor
      }]
    }, {
      items: [{
        content: 'Community forums'
      }]
    }]);

    const clickHandle = () => {
      alert('clicked');
    };

    const userMenuMessage = ref({
      title: 'Another Message',
      description: 'This is a description of message',
      action: {
        onClick: clickHandle,
        content: 'This is a action'
      },
      link: {
        to: 'https://google.com',
        content: 'Google Homepage'
      }
    });
    return {
      logo,
      isSearchActive,
      searchValue,
      handleSearchChange,
      toggleIsSecondaryMenuOpen,
      userMenuAction,
      userMenuMessage,
      toggleUserMenu,
      isUserMenuOpen,
      isSecondaryMenuOpen,
      handleSearchResultsDismiss,
      QuestionMarkMajor
    };
  },

  template: \`
    <Frame :logo="logo">
      <template #topBar>
        <TopBar showNavigationToggle
          :searchResultsVisible="isSearchActive"
          @search-result-dismiss="handleSearchResultsDismiss"
        >
          <template #userMenu>
            <TopBarUserMenu
              :actions="userMenuAction"
              name="Polaris"
              detail="qikify"
              initials="P"
              :message="userMenuMessage"
              :open="isUserMenuOpen"
              @toggle="toggleUserMenu"
            />
          </template>
          <template #secondaryMenu>
            <TopBarMenu
              :open="isSecondaryMenuOpen"
              @open="toggleIsSecondaryMenuOpen"
              @close="toggleIsSecondaryMenuOpen"
              :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
            >
              <template #activatorContent>
                <span>
                  <Icon :source="QuestionMarkMajor" />
                  <VisuallyHidden>Secondary menu</VisuallyHidden>
                </span>
              </template>
            </TopBarMenu>
          </template>
          <template #searchField>
            <TopBarSearchField
              placeholder="Search"
              v-model="searchValue"
              :showFocusBorder="true"
              @change="handleSearchChange"
            />
          </template>
          <template #searchResults>
            <ActionList
              :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
            />
          </template>
        </TopBar>
      </template>
    </Frame>
  \`
})`},docs:{source:{state:"close",code:P`
            <Frame :logo="logo">
              <template #topBar>
                <TopBar showNavigationToggle
                  :searchResultsVisible="isSearchActive"
                  @search-result-dismiss="handleSearchResultsDismiss"
                >\n
                  <template #userMenu>
                    <TopBarUserMenu
                      :actions="userMenuAction"
                      name="Polaris"
                      detail="qikify"
                      initials="P"
                      :message="userMenuMessage"
                      :open="isUserMenuOpen"
                      @toggle="toggleUserMenu"
                    />
                  </template>\n
                  <template #secondaryMenu>
                    <TopBarMenu
                      :open="isSecondaryMenuOpen"
                      @open="toggleIsSecondaryMenuOpen"
                      @close="toggleIsSecondaryMenuOpen"
                      :actions="[{ items: [{content: 'Community forums'}] }, { items: [{content: 'Blog'}] }]"
                    >
                      <template #activatorContent>
                        <span>
                          <Icon :source="QuestionMarkMajor" />
                          <VisuallyHidden>Secondary menu</VisuallyHidden>
                        </span>
                      </template>
                    </TopBarMenu>
                  </template>\n
                  <template #searchField>
                    <TopBarSearchField
                      placeholder="Search"
                      v-model="searchValue"
                      :showFocusBorder="true"
                      @change="handleSearchChange"
                    />
                  </template>\n
                  <template #searchResults>
                    <ActionList
                      :items="[{content: 'Shopify help center', onAction: () => alert('ok')}, {content: 'Community forums'}]"
                    />
                  </template>\n
                </TopBar>
              </template>
            </Frame>\n\n
            setup() {
              const logo = {
                width: 30,
                topBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
                contextualSaveBarSource: 'https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png',
              }
              const isUserMenuOpen = ref(false);
              const isSecondaryMenuOpen = ref(false);
              const isSearchActive = ref(false);
              const searchValue = ref('');\n
              const handleSearchChange = (value) => {
                isSearchActive.value = value.length > 0;
              }
              const handleSearchResultsDismiss = () => {
                searchValue.value = '';
                isSearchActive.value = false;
              }
              const toggleUserMenu = () => {
                isUserMenuOpen.value = !isUserMenuOpen.value;
              };
              const toggleIsSecondaryMenuOpen = () => {
                isSecondaryMenuOpen.value = !isSecondaryMenuOpen.value;
              };
              const userMenuAction = ref([
                { items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }] },
                { items: [{ content: 'Community forums' }] }]
              );
              const clickHandle = () => { alert('clicked'); };
              const userMenuMessage = ref({
                title: 'Another Message',
                description:'This is a description of message',
                action: { onClick: clickHandle, content: 'This is a action' },
                link: { to: 'https://google.com', content: 'Google Homepage' }
              });
              return { logo, isSearchActive, searchValue, handleSearchChange, toggleIsSecondaryMenuOpen, userMenuAction, userMenuMessage, toggleUserMenu, isUserMenuOpen, isSecondaryMenuOpen, handleSearchResultsDismiss, QuestionMarkMajor };
            },
          `}}};const eo={title:"Components / Navigation / Top Bar",component:ai,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},includeStories:["topBar"]},_2={"Top Bar":"topBar"};eo.parameters=eo.parameters||{};eo.parameters.docs=_(b({},eo.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:_2,mdxComponentAnnotations:eo},e(eh,null))});var D2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:kr,topBar:mu,default:eo});const Nr=t=>({components:{VisuallyHidden:lt},template:`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  `}),I2={Template:Nr},B2="wrapper";function th(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(B2,_(b(b({},I2),n),{components:t,mdxType:"MDXLayout"}),e(te,{title:"Components / Titles and text / Visually Hidden",component:lt,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Visually hidden"),e("p",null,"Use when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden."),e(V,{mdxType:"Canvas"},e(H,{name:"Visually Hidden",parameters:{docs:{source:{code:P`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}},mdxType:"Story"},Nr.bind({}))),e(se,{story:"Visually Hidden",mdxType:"ArgsTable"}))}th.isMDXComponent=!0;const yu=Nr.bind({});yu.storyName="Visually Hidden";yu.parameters={storySource:{source:`args => ({
  components: {
    VisuallyHidden
  },
  template: \`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  \`
})`},docs:{source:{code:P`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}};const to={title:"Components / Titles and text / Visually Hidden",component:lt,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},includeStories:["visuallyHidden"]},$2={"Visually Hidden":"visuallyHidden"};to.parameters=to.parameters||{};to.parameters.docs=_(b({},to.parameters.docs||{}),{page:()=>e(ee,{mdxStoryNameToKey:$2,mdxComponentAnnotations:to},e(th,null))});var F2=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Nr,visuallyHidden:yu,default:to});function ah(t){return{"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":t1,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":i1,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":c1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AccountConnection/README.stories.mdx":y1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":T1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":k1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":P1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":B1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Banner/README.stories.mdx":O1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":G1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":Q1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CalloutCard/README.stories.mdx":nB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":lB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":dB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":gB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":vB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":AB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":wB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":DB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":FB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CustomProperties/README.stories.mdx":RB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":jB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":XB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":QB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":n$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/EmptyState/README.stories.mdx":l$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":p$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":h$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":T$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":k$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":M$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":B$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":q$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":U$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":G$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":Z$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":tF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":iF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":cF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":mF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/MediaCard/README.stories.mdx":bF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":AF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":wF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":IF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":EF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":HF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":GF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":eE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":oE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":rE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":mE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":bE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":TE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SettingToggle/README.stories.mdx":NE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":ME,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":BE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":OE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":UE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":GE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx":QE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":n2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":l2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":d2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":g2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":v2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":C2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":w2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":D2,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":F2}[t]}Object.assign(ah,{keys:()=>["/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AccountConnection/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Banner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CalloutCard/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CustomProperties/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/EmptyState/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/MediaCard/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SettingToggle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx"],resolve:t=>({"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":"./.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":"./.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":"./.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AccountConnection/README.stories.mdx":"./src/components/AccountConnection/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":"./src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":"./src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":"./src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":"./src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Banner/README.stories.mdx":"./src/components/Banner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":"./src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":"./src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CalloutCard/README.stories.mdx":"./src/components/CalloutCard/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":"./src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":"./src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":"./src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":"./src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":"./src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":"./src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":"./src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":"./src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CustomProperties/README.stories.mdx":"./src/components/CustomProperties/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":"./src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":"./src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":"./src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":"./src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/EmptyState/README.stories.mdx":"./src/components/EmptyState/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":"./src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":"./src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":"./src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":"./src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":"./src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":"./src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":"./src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":"./src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":"./src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":"./src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":"./src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":"./src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":"./src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":"./src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/MediaCard/README.stories.mdx":"./src/components/MediaCard/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":"./src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":"./src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":"./src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":"./src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":"./src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":"./src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":"./src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":"./src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":"./src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":"./src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":"./src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":"./src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SettingToggle/README.stories.mdx":"./src/components/SettingToggle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":"./src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":"./src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":"./src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":"./src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":"./src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx":"./src/components/Tabs/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":"./src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":"./src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":"./src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":"./src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":"./src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":"./src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":"./src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":"./src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":"./src/components/VisuallyHidden/README.stories.mdx"})[t]});function E2(){Vh(ah,{hot:!1},!1)}const O2=[Gh,Xh,Kh,Yh,Zh,Qh,Jh,eb,tb,ab,nb,ob,ZI].filter(Boolean);O2.forEach(t=>{Object.keys(t).forEach(n=>{const o=t[n];switch(n){case"args":case"argTypes":return Wh.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(i=>zh(i,!1));case"loaders":return o.forEach(i=>jh(i,!1));case"parameters":return Au(b({},o),!1);case"argTypesEnhancers":return o.forEach(i=>Uh(i));case"argsEnhancers":return o.forEach(i=>Hh(i));case"globals":case"globalTypes":{const i={};return i[n]=o,Au(i,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(n+" was not supported :( !")}})});E2();
//# sourceMappingURL=iframe.98b7aeef.js.map
