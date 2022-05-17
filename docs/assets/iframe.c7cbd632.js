var Hg=Object.defineProperty,Ug=Object.defineProperties;var jg=Object.getOwnPropertyDescriptors;var Mi=Object.getOwnPropertySymbols;var ru=Object.prototype.hasOwnProperty,cu=Object.prototype.propertyIsEnumerable;var gr=(t,n,o)=>n in t?Hg(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,v=(t,n)=>{for(var o in n||(n={}))ru.call(n,o)&&gr(t,o,n[o]);if(Mi)for(var o of Mi(n))cu.call(n,o)&&gr(t,o,n[o]);return t},_=(t,n)=>Ug(t,jg(n));var J=(t,n)=>{var o={};for(var i in t)ru.call(t,i)&&n.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&Mi)for(var i of Mi(t))n.indexOf(i)<0&&cu.call(t,i)&&(o[i]=t[i]);return o};var ht=(t,n,o)=>(gr(t,typeof n!="symbol"?n+"":n,o),o);import{c as Wg,a as tp,b as zg,w as Gg,d as M,u as ue,e as p,o as l,f as L,g as y,h as A,i as a,j as w,k as S,l as d,r as f,F as K,m as ie,t as U,n as c,p as Xg,q as Se,s as pt,v as zt,x as Kg,y as Ri,z as Ji,A as Gr,B as C,C as Xe,D as Xt,E as me,G as F,H as ve,I as Ee,J as ap,K as Oe,L as Ne,M as Fe,N as at,O as Mt,P as ge,Q as Ue,R as Xr,S as uu,T as Kt,U as Kr,V as Zn,W as Vi,X as Yg,Y as Zg,Z as Qg,_ as np,$ as Po,a0 as Jg,a1 as eh,a2 as Yr,a3 as To,a4 as ia,a5 as th,a6 as ah,a7 as nh,a8 as oh,a9 as Hi,aa as op,ab as ih,ac as ip,ad as sh,ae as lh,af as sp,ag as du,ah as rh,ai as ch,aj as uh,ak as Mr,al as Ui,am as _r,an as dh,ao as ph,ap as Bo,aq as e,ar as ae,as as ne,at as P,au as V,av as H,aw as le,ax as ji,ay as Ir,az as mh,aA as pu,aB as lp,aC as Br,aD as yh,aE as mu,aF as gh,aG as rp,aH as cp,aI as hh,aJ as up,aK as bh,aL as fh,aM as vh,aN as xh,aO as Th,aP as Sh,aQ as Ch,aR as Ah,aS as kh,aT as yu,aU as Lh,aV as Nh,aW as wh,aX as Ph,aY as Mh,aZ as _h,a_ as Ih,a$ as Bh,b0 as Dh,b1 as $h,b2 as Fh,b3 as Eh,b4 as Oh,b5 as qh,b6 as Rh,b7 as Vh,b8 as Hh}from"./vendor.bed44741.js";const Uh=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Uh();const dp=Wg({page:"preview"});tp.setChannel(dp);window.__STORYBOOK_ADDONS_CHANNEL__=dp;const{SERVER_CHANNEL_URL:gu}=Gg;if(gu){const t=zg({url:gu});tp.setServerChannel(t),window.__STORYBOOK_SERVER_CHANNEL__=t}function xe(t){if(!t)return!1;if(t&&t()[0].children){if(typeof t()[0].children=="string")return t()[0].children!=="v-if";if(Array.isArray(t()[0].children))return t()[0].children.length>0}return!0}const jh="Polaris-AccountConnection__TermsOfService",Wh="Polaris-AccountConnection__Content";var hu={TermsOfService:jh,Content:Wh};const zh={key:0},Gh={key:1},Xh={key:2},es=M({props:{title:null,details:null,termsOfService:null,accountName:{default:""},avatarUrl:null,connected:{type:Boolean,default:!1},action:null},setup(t){const n=t,o=ue(),i=p(()=>n.accountName?n.accountName.split(/\s+/).map(s=>s[0]).join(""):void 0);return(s,r)=>(l(),L(a(Je),{sectioned:""},{default:y(()=>[A(a(yc),null,{action:y(()=>[t.action?(l(),L(a(st),{key:0,action:t.action,overrides:{primary:!t.connected}},null,8,["action","overrides"])):w("",!0)]),setting:y(()=>[A(a(Ve),null,{default:y(()=>[t.connected?(l(),L(a(eo),{key:0,accessibilityLabel:"",name:t.accountName,initials:a(i),source:t.avatarUrl},null,8,["name","initials","source"])):w("",!0),A(a(xt),{fill:""},{default:y(()=>[S("div",{class:c(a(hu).Content)},[t.title||a(xe)(a(o).title)?(l(),d("div",zh,[a(xe)(a(o).title)?f(s.$slots,"title",{key:0}):(l(),d(K,{key:1},[ie(U(t.title),1)],64))])):t.accountName?(l(),d("div",Gh,U(t.accountName),1)):w("",!0),t.details||a(xe)(a(o).details)?(l(),d("div",Xh,[A(a(ct),{variation:"subdued"},{default:y(()=>[a(xe)(a(o).details)?f(s.$slots,"details",{key:0}):(l(),d(K,{key:1},[ie(U(t.details),1)],64))]),_:3})])):w("",!0)],2)]),_:3})]),_:3})]),_:3}),t.termsOfService||a(xe)(a(o).termsOfService)?(l(),d("div",{key:0,class:c(a(hu).TermsOfService)},[a(xe)(a(o).termsOfService)?f(s.$slots,"termsOfService",{key:0}):(l(),d(K,{key:1},[ie(U(t.termsOfService),1)],64))],2)):w("",!0)]),_:3}))}});es.__docgenInfo={exportName:"default",displayName:"AccountConnection",description:"",tags:{},props:[{name:"title",description:"Content to display as title",required:!1,type:{name:"string"}},{name:"details",description:"Content to display as additional details",required:!1,type:{name:"string"}},{name:"termsOfService",description:"Content to display as terms of service",required:!1,type:{name:"string"}},{name:"accountName",description:"The name of the service",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"avatarUrl",description:"URL for the user\u2019s avatar image",required:!1,type:{name:"string"}},{name:"connected",description:"Set if the account is connected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"action",description:"Action for account connection",required:!1,type:{name:"Action"}}],slots:[{name:"title"},{name:"details"},{name:"termsOfService"}]};const Wi='a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]:not([tabindex="-1"])',Dr="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",Kh='a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';function ts(t,n){if(t.matches)return t.matches(n);const o=(t.ownerDocument||document).querySelectorAll(n);let i=o.length;for(;i>=0&&o.item(i)!==t;)return i-=1,i>-1}function hr(t){const n="a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";return ts(t,n)?t:t.querySelector(n)}function Yh(t,n){const o=[...document.querySelectorAll(Dr)],i=o.indexOf(t)+1,s=o.slice(i);for(const r of s)if(Xg(r)&&(!n||n&&n(r)))return r;return null}function Zh(t,n){const o=Yh(t,n);return o&&o instanceof HTMLElement?(o.focus(),!0):!1}function Zr(t,n=!0){return!n&&ts(t,Dr)?t:t.querySelector(Dr)}function pp(t){return t.querySelectorAll(Kh)}function mp(t,n){let o=0;for(const i of t){if(i===n)break;o+=1}return o===t.length?-1:o}function Qh(t,n){const o=pp(t),i=mp(o,n);i===-1?o[0].focus():o[(i-1+o.length)%o.length].focus()}function Jh(t,n){const o=pp(t),i=mp(o,n);i===-1?o[0].focus():o[(i+1)%o.length].focus()}const Ct=t=>{t.currentTarget.blur()};function Do(t,n=!0){var o;(o=Zr(t,n))==null||o.focus()}function yp(t,n=!0){return!n&&ts(t,Wi)?t:t.querySelector(Wi)}function gp(t,n=!0){if(!n&&ts(t,Wi))return t;const o=t.querySelectorAll(Wi);return o[o.length-1]}function eb(t,n=!0){const o=yp(t,n);return o?(o.focus(),!0):!1}function tb(t,n=!0){const o=gp(t,n);return o?(o.focus(),!0):!1}const ab={inheritAttrs:!1,render(){return null}},vt=M(_(v({},ab),{props:{keyCode:{type:String,required:!0},keyEvent:{type:String,default:"keyup"},handler:{type:Function,required:!0},useCapture:{type:Boolean},options:{type:Object}},setup(t){const n=t;function o(i){i.key===n.keyCode&&n.handler(i)}return Se(()=>document.addEventListener(n.keyEvent,o,n.useCapture||n.options)),pt(()=>document.removeEventListener(n.keyEvent,o,n.useCapture||n.options)),()=>{}}}));vt.__docgenInfo={exportName:"default",displayName:"KeypressListener",description:"",tags:{},props:[{name:"keyCode",type:{name:"String as () => Key"},required:!0},{name:"keyEvent",type:{name:"String as () => KeyEvent"},defaultValue:{func:!1,value:"'keyup'"}},{name:"handler",type:{name:"func"},required:!0},{name:"useCapture",type:{name:"boolean"}},{name:"options",type:{name:"Object as () => AddEventListenerOptions"}}]};var ze=(t=>(t.Backspace="Backspace",t.Tab="Tab",t.Enter="Enter",t.Shift="Shift",t.Ctrl="Ctrl",t.Alt="Alt",t.Pause="Pause",t.CapsLock="CapsLock",t.Escape="Escape",t.Space="Space",t.PageUp="PageUp",t.PageDown="PageDown",t.End="End",t.Home="Home",t.ArrowRight="ArrowRight",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowDown="ArrowDown",t.Insert="Insert",t.Delete="Delete",t.Key0="Key0",t.Key1="Key1",t.Key2="Key2",t.Key3="Key3",t.Key4="Key4",t.Key5="Key5",t.Key6="Key6",t.Key7="Key7",t.Key8="Key8",t.Key9="Key9",t.KeyA="KeyA",t.KeyB="KeyB",t.KeyC="KeyC",t.KeyD="KeyD",t.KeyE="KeyE",t.KeyF="KeyF",t.KeyG="KeyG",t.KeyH="KeyH",t.KeyI="KeyI",t.KeyJ="KeyJ",t.KeyK="KeyK",t.KeyL="KeyL",t.KeyM="KeyM",t.KeyN="KeyN",t.KeyO="KeyO",t.KeyP="KeyP",t.KeyQ="KeyQ",t.KeyR="KeyR",t.KeyS="KeyS",t.KeyT="KeyT",t.KeyU="KeyU",t.KeyV="KeyV",t.KeyW="KeyW",t.KeyX="KeyX",t.KeyY="KeyY",t.KeyZ="KeyZ",t.LeftMeta="LeftMeta",t.RightMeta="RightMeta",t.Select="Select",t.Numpad0="Numpad0",t.Numpad1="Numpad1",t.Numpad2="Numpad2",t.Numpad3="Numpad3",t.Numpad4="Numpad4",t.Numpad5="Numpad5",t.Numpad6="Numpad6",t.Numpad7="Numpad7",t.Numpad8="Numpad8",t.Numpad9="Numpad9",t.Multiply="Multiply",t.Add="Add",t.Subtract="Subtract",t.Decimal="Decimal",t.Divide="Divide",t.F1="F1",t.F2="F2",t.F3="F3",t.F4="F4",t.F5="F5",t.F6="F6",t.F7="F7",t.F8="F8",t.F9="F9",t.F10="F10",t.F11="F11",t.F12="F12",t.NumLock="NumLock",t.ScrollLock="ScrollLock",t.Semicolon="Semicolon",t.Equals="Equals",t.Comma="Comma",t.Dash="Dash",t.Period="Period",t.ForwardSlash="ForwardSlash",t.GraveAccent="GraveAccent",t.OpenBracket="OpenBracket",t.BackSlash="BackSlash",t.CloseBracket="CloseBracket",t.SingleQuote="SingleQuote",t))(ze||{});const nb="Polaris-ActionList",ob="Polaris-ActionList__Actions",ib="Polaris-ActionList__Section",sb="Polaris-ActionList__Title",lb="Polaris-ActionList--firstSectionWithTitle",rb="Polaris-ActionList__Item",cb="Polaris-ActionList--active",ub="Polaris-ActionList--destructive",db="Polaris-ActionList--disabled",pb="Polaris-ActionList__Prefix",mb="Polaris-ActionList__Suffix",yb="Polaris-ActionList__Content",gb="Polaris-ActionList__ContentBlock",hb="Polaris-ActionList__ContentBlockInner",bb="Polaris-ActionList__Text";var Ye={ActionList:nb,"Section-withoutTitle":"Polaris-ActionList__Section--withoutTitle",Actions:ob,Section:ib,Title:sb,firstSectionWithTitle:lb,Item:rb,active:cb,destructive:ub,disabled:db,Prefix:pb,Suffix:mb,Content:yb,ContentBlock:gb,ContentBlockInner:hb,Text:bb};class Sa{constructor({top:n=0,left:o=0,width:i=0,height:s=0}={}){ht(this,"top");ht(this,"left");ht(this,"width");ht(this,"height");this.top=n,this.left=o,this.width=i,this.height=s}static get zero(){return new Sa}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}}function jt(t){if(!(t instanceof Element))return new Sa({width:window.innerWidth,height:window.innerHeight});const n=t.getBoundingClientRect();return new Sa({top:n.top,left:n.left,width:n.width,height:n.height})}const _i=1e3/60;function hp(t){return t===document}function fb(t){return hp(t)?document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop}function vb(t,n){const o=t.left,i=t.left+t.width,s=n.left;return n.left+n.width<o||i<s}class xb{constructor(n){ht(this,"stickyItems",[]);ht(this,"stuckItems",[]);ht(this,"container",null);ht(this,"topBarOffset",0);ht(this,"handleResize",zt(()=>{this.manageStickyItems()},_i,{leading:!0,trailing:!0,maxWait:_i}));ht(this,"handleScroll",zt(()=>{this.manageStickyItems()},_i,{leading:!0,trailing:!0,maxWait:_i}));n&&this.setContainer(n)}registerStickyItem(n){this.stickyItems.push(n)}unregisterStickyItem(n){const o=this.stickyItems.findIndex(({stickyNode:i})=>n===i);this.stickyItems.splice(o,1)}setContainer(n){this.container=n,hp(n)&&this.setTopBarOffset(n),this.container.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.manageStickyItems()}removeScrollListener(){this.container&&(this.container.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize))}manageStickyItems(){if(this.stickyItems.length<=0)return;const n=this.container?fb(this.container):0,o=jt(this.container).top+this.topBarOffset;this.stickyItems.forEach(i=>{const{handlePositioning:s}=i,{sticky:r,top:u,left:m,width:x}=this.evaluateStickyItem(i,n,o);this.updateStuckItems(i,r),s(r,u,m,x)})}evaluateStickyItem(n,o,i){var D;const{stickyNode:s,placeHolderNode:r,boundingElement:u,offset:m,disableWhenStacked:x}=n;if(x&&Kg().matches)return{sticky:!1,top:0,left:0,width:"auto"};const b=m?this.getOffset(s)+parseInt(Ri.spacing["5"],10):this.getOffset(s),g=o+b,h=r.getBoundingClientRect().top-i+o,T=i+b,{width:k}=r.getBoundingClientRect(),{left:N}=r.getBoundingClientRect();let I;if(u==null)I=g>=h;else{const E=s.getBoundingClientRect().height||((D=s.firstElementChild)==null?void 0:D.getBoundingClientRect().height)||0,R=u.getBoundingClientRect().bottom-E+o-i;I=g>=h&&g<R}return{sticky:I,top:T,left:N,width:k}}updateStuckItems(n,o){const{stickyNode:i}=n;o&&!this.isNodeStuck(i)?this.addStuckItem(n):!o&&this.isNodeStuck(i)&&this.removeStuckItem(n)}addStuckItem(n){this.stuckItems.push(n)}removeStuckItem(n){const{stickyNode:o}=n,i=this.stuckItems.findIndex(({stickyNode:s})=>o===s);this.stuckItems.splice(i,1)}getOffset(n){if(this.stuckItems.length===0)return 0;let o=0,i=0;const s=this.stuckItems.length,r=jt(n);for(;i<s;){const u=this.stuckItems[i].stickyNode;if(u!==n){const m=jt(u);vb(r,m)||(o+=jt(u).height)}else break;i+=1}return o}isNodeStuck(n){return this.stuckItems.findIndex(({stickyNode:i})=>n===i)>=0}setTopBarOffset(n){const o=n.querySelector(`:not(${Ji.selector}) ${Gr.selector}`);this.topBarOffset=o?o.clientHeight:0}}const Tb="Polaris-Scrollable",Sb="Polaris-Scrollable--horizontal",Cb="Polaris-Scrollable--vertical",Ab="Polaris-Scrollable--verticalHasScrolling",kb="Polaris-Scrollable--hasTopShadow",Lb="Polaris-Scrollable--hasBottomShadow";var Ia={Scrollable:Tb,horizontal:Sb,vertical:Cb,verticalHasScrolling:Ab,hasTopShadow:kb,hasBottomShadow:Lb};const Nb=["tabindex"],Ft=M({props:{vertical:{type:Boolean,default:!0},horizontal:{type:Boolean},shadow:{type:Boolean},hint:{type:Boolean},focusable:{type:Boolean}},emits:["scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=j=>{j.preventDefault()},s=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},r=100,u=.2,m=.2,x=["scroll","touchmove","wheel"],b=s(),g=2,h=C(null),T=C(!1),k=C(!1),N=C(0),I=C(!1),D=new xb,E=j=>{N.value=j};Xe("stickyManagerContext",D),Xe("scrollToPositionContext",E);const R=p(()=>F(Ia.Scrollable,o.vertical&&Ia.vertical,o.horizontal&&Ia.horizontal,T.value&&Ia.hasTopShadow,k.value&&Ia.hasBottomShadow,o.vertical&&I.value&&Ia.verticalHasScrolling)),W=()=>{if(!h.value)return;const{scrollTop:j,scrollHeight:se,clientHeight:be}=h.value,ee=Boolean(o.shadow&&!(j+be>=se)),Me=Boolean(o.shadow&&j>0&&N.value>0),O=se>be,G=se-j<=be+g;O&&G&&n("scrolled-to-bottom"),T.value=Me,k.value=ee,N.value=j,I.value=O},Z=zt(()=>{W()},50,{trailing:!0}),$=(j=!0)=>{var se,be;if(!!h.value)for(const ee of x)j?(se=h.value)==null||se.addEventListener(ee,i):(be=h.value)==null||be.removeEventListener(ee,i)},z=()=>{const j=N.value*m;N.value=j<u?0:N.value-j,N.value>0?window.requestAnimationFrame(z):$(!1)},q=()=>{if(!h.value)return;const{clientHeight:j,scrollHeight:se}=h.value;if(b||N.value>0||se<=j)return;const be=se-j;$(),N.value=be>r?r:be,window.requestAnimationFrame(z)};return Se(()=>{!h.value||(D.setContainer(h.value),h.value.scrollTop=N.value,h.value.addEventListener("scroll",()=>{window.requestAnimationFrame(W)}),window.addEventListener("resize",Z),window.requestAnimationFrame(()=>{W(),o.hint&&q()}))}),Xt(()=>{h.value&&N.value>0&&(h.value.scrollTop=N.value)}),pt(()=>{!h.value||(h.value.removeEventListener("scroll",W),window.removeEventListener("resize",Z),D.removeScrollListener())}),(j,se)=>(l(),d("div",me({ref_key:"scrollArea",ref:h},a(Ji).props,{class:a(R),tabindex:t.focusable?0:void 0}),[f(j.$slots,"default")],16,Nb))}});Ft.__docgenInfo={exportName:"default",displayName:"Scrollable",description:"",tags:{},props:[{name:"vertical",description:"Scroll content vertically",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"horizontal",description:"Scroll content horizontally",required:!1,type:{name:"boolean"}},{name:"shadow",description:"Add a shadow when content is scrollable",required:!1,type:{name:"boolean"}},{name:"hint",description:"Slightly hints content upon mounting when scrollable",required:!1,type:{name:"boolean"}},{name:"focusable",description:"Adds a tabIndex to scrollable when children are not focusable",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};class Qr extends Error{constructor(n=""){super(`${n&&`${n} `}Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-app-provider for implementation instructions.`);this.name="MissingAppProviderError"}}class wb extends Error{constructor(n=""){super(`${n&&`${n} `}Your component must be wrapped in a <Frame> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-frame--page for implementation instructions.`);this.name="MissingFrameError"}}function De(){const t=ve("uniqueIdFactory"),n=C("");function o(i="",s=""){if(!t)throw new Qr("No UniqueIdFactory was provided.");return s||(n.value||(n.value=t.nextId(i)),n.value)}return{uniqueIdRef:n,useUniqueId:o}}function Pb(t){const n=ve("focusManager"),{useUniqueId:o,uniqueIdRef:i}=De();Ee([()=>t.trapping],()=>{t.trapping&&i&&n.add(i.value)});const s=p(()=>n.trapFocusList[0]===i.value);return ap(()=>{if(!n)throw new Qr("No FocusManager was provided.")}),Se(()=>{const r=o();t.trapping&&n.add(r)}),pt(()=>{i.value&&n.remove(i.value)}),{canSafelyFocus:s}}const Mb=["id"],as=M({setup(t){const n=ve("scrollToPositionContext",()=>!1),o=C(null),{useUniqueId:i}=De(),s=i("ScrollTo");return Se(()=>{!n||!o.value||n(o.value.offsetTop)}),(r,u)=>(l(),d("a",{id:a(s),ref_key:"anchorNode",ref:o},null,8,Mb))}});as.__docgenInfo={exportName:"default",displayName:"ScrollTo",description:"",tags:{}};const Tt=M({props:{to:null,url:null,external:{type:Boolean}},setup(t){return(n,o)=>(l(),L(Oe(t.to?"router-link":"a"),{href:t.url,to:t.to,target:t.to?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["href","to","target","rel"]))}});Tt.__docgenInfo={exportName:"default",displayName:"UnstyledLink",description:"",tags:{},props:[{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const _b="Polaris-TextStyle--variationPositive",Ib="Polaris-TextStyle--variationNegative",Bb="Polaris-TextStyle--variationWarning",Db="Polaris-TextStyle--variationCode",$b="Polaris-TextStyle--variationStrong",Fb="Polaris-TextStyle--variationSubdued";var Eb={variationPositive:_b,variationNegative:Ib,variationWarning:Bb,variationCode:Db,variationStrong:$b,variationSubdued:Fb};const ct=M({props:{variation:{type:String,default:null}},setup(t){const n=t,o={positive:"positive",negative:"negative",warning:"warning",strong:"strong",subdued:"subdued",code:"code"};function i(u){return u===o.code?"code":"span"}const s=C(i(n.variation)),r=p(()=>{const u=n.variation&&Ne("variation",n.variation);return F(u&&Eb[u])});return(u,m)=>(l(),L(Oe(s.value),{class:c(a(r))},{default:y(()=>[f(u.$slots,"default")]),_:3},8,["class"]))}});ct.__docgenInfo={exportName:"default",displayName:"TextStyle",description:"",tags:{},props:[{name:"variation",description:"Give text additional visual meaning",tags:{},values:["positive | negative | strong | subdued | code"],type:{name:"String as () => Variation"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]};const Ob="Polaris-Icon",qb="Polaris-Icon--applyColor",Rb="Polaris-Icon--hasBackdrop",Vb="Polaris-Icon--colorBase",Hb="Polaris-Icon--colorSubdued",Ub="Polaris-Icon--colorCritical",jb="Polaris-Icon--colorInteractive",Wb="Polaris-Icon--colorWarning",zb="Polaris-Icon--colorHighlight",Gb="Polaris-Icon--colorSuccess",Xb="Polaris-Icon--colorPrimary",Kb="Polaris-Icon__Svg",Yb="Polaris-Icon__Img",Zb="Polaris-Icon__Placeholder";var ua={Icon:Ob,applyColor:qb,hasBackdrop:Rb,colorBase:Vb,colorSubdued:Hb,colorCritical:Ub,colorInteractive:jb,colorWarning:Wb,colorHighlight:zb,colorSuccess:Gb,colorPrimary:Xb,Svg:Kb,Img:Yb,Placeholder:Zb},bu={env:"production"};const Qb="Polaris-VisuallyHidden";var Jb={VisuallyHidden:Qb};const lt=M({setup(t){return(n,o)=>(l(),d("span",{class:c(a(Jb).VisuallyHidden)},[f(n.$slots,"default")],2))}});lt.__docgenInfo={exportName:"default",displayName:"VisuallyHidden",description:"",tags:{},slots:[{name:"default"}]};const ef=["src"],re=M({props:{source:null,color:null,backdrop:{type:Boolean},accessibilityLabel:null},setup(t){const n=t,o=["base","critical","highlight","success","warning"],i=p(()=>n.color&&ua[Ne("color",n.color)]),s=p(()=>F(ua.Icon,i.value,n.color&&ua.applyColor,n.backdrop&&ua.hasBackdrop)),r=p(()=>typeof n.source=="object"?"icon":n.source==="placeholder"?"placeholder":"external"),u=p(()=>r.value==="external"?encodeURIComponent(String(n.source)):""),m=()=>{n.color&&r.value==="external"&&bu.env==="development"&&console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.")},x=()=>{n.backdrop&&n.color&&!o.includes(n.color)&&bu.env==="development"&&console.warn(`The ${n.color} variant does not have a supported backdrop color`)};return Se(()=>{m(),x()}),(b,g)=>(l(),d("span",{class:c(a(s))},[A(a(lt),null,{default:y(()=>[S("span",null,U(t.accessibilityLabel),1)]),_:1}),a(r)==="icon"?(l(),L(Oe(t.source),{key:0,class:c(a(ua).Svg)},null,8,["class"])):a(r)==="placeholder"?(l(),d("div",{key:1,class:c(a(ua).Placeholder)},null,2)):(l(),d("img",{key:2,class:c(a(ua).Img),src:`data:image/svg+xml;utf8,${a(u)}`,alt:"","aria-hidden":"true"},null,10,ef))],2))}});re.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"source",description:"The contents to display in the icon",required:!0,type:{name:"IconSource"}},{name:"color",description:"Set the color for the icon",required:!1,type:{name:"Color"}},{name:"backdrop",description:"Show a backdrop behind the icon",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}]};const tf="Polaris-Badge",af="Polaris-Badge--sizeSmall",nf="Polaris-Badge--statusSuccess",of="Polaris-Badge--statusInfo",sf="Polaris-Badge--statusAttention",lf="Polaris-Badge--statusWarning",rf="Polaris-Badge--statusCritical",cf="Polaris-Badge--statusNew",uf="Polaris-Badge--withinFilter",df="Polaris-Badge__Icon",pf="Polaris-Badge__PipContainer";var Ba={Badge:tf,sizeSmall:af,statusSuccess:nf,statusInfo:of,statusAttention:sf,statusWarning:lf,statusCritical:rf,statusNew:cf,withinFilter:uf,Icon:df,PipContainer:pf};function bp(t,n){let o="",i="";if(!t&&!n)return"";switch(t){case"incomplete":o="Incomplete";break;case"partiallyComplete":o="Partially complete";break;case"complete":o="Complete";break}switch(n){case"info":i="Info";break;case"success":i="Success";break;case"warning":i="Warning";break;case"critical":i="Critical";break;case"attention":i="Attention";break;case"new":i="New";break}return`${i} ${o}`}const mf="Polaris-Badge-Pip",yf="Polaris-Badge-Pip--statusSuccess",gf="Polaris-Badge-Pip--statusInfo",hf="Polaris-Badge-Pip--statusAttention",bf="Polaris-Badge-Pip--statusWarning",ff="Polaris-Badge-Pip--statusCritical",vf="Polaris-Badge-Pip--progressIncomplete",xf="Polaris-Badge-Pip--progressPartiallyComplete",Tf="Polaris-Badge-Pip--progressComplete";var br={Pip:mf,statusSuccess:yf,statusInfo:gf,statusAttention:hf,statusWarning:bf,statusCritical:ff,progressIncomplete:vf,progressPartiallyComplete:xf,progressComplete:Tf};const fp=M({props:{status:null,progress:null,accessibilityLabelOverride:null},setup(t){const n=t,o=p(()=>F(br.Pip,n.status&&br[Ne("status",n.status)],n.progress&&br[Ne("progress",n.progress)]));return(i,s)=>(l(),d("span",{class:c(a(o))},[A(a(lt),null,{default:y(()=>[t.accessibilityLabelOverride?(l(),d(K,{key:0},[ie(U(t.accessibilityLabelOverride),1)],64)):(l(),d(K,{key:1},[ie(U(a(bp)(t.progress,t.status)),1)],64))]),_:1})],2))}});fp.__docgenInfo={exportName:"default",displayName:"Pip",description:"",tags:{},props:[{name:"status",required:!1,type:{name:"Status"}},{name:"progress",required:!1,type:{name:"Progress"}},{name:"accessibilityLabelOverride",required:!1,type:{name:"string"}}]};const Sf={key:3},it=M({props:{status:null,progress:null,size:{default:"medium"},statusAndProgressLabelOverride:null,icon:null},setup(t){const n=t,o=ve("withinFilterContext",!1),i="medium",s=C(""),r=C(""),u=p(()=>F(Ba.Badge,n.status&&Ba[Ne("status",n.status)],n.size&&n.size!==i&&Ba[Ne("size",n.size)],o&&Ba.withinFilter)),m=p(()=>n.statusAndProgressLabelOverride||r.value||s.value),x=p(()=>n.statusAndProgressLabelOverride?n.statusAndProgressLabelOverride:bp(n.progress,n.status));return(b,g)=>(l(),d("span",{class:c(a(u))},[t.progress&&!t.icon?(l(),d("span",{key:0,class:c(a(Ba).PipContainer)},[A(a(fp),{progress:t.progress,status:t.status,accessibilityLabelOverride:a(x)},null,8,["progress","status","accessibilityLabelOverride"])],2)):w("",!0),a(m)?(l(),L(a(lt),{key:1},{default:y(()=>[ie(U(a(x)),1)]),_:1})):w("",!0),t.icon?(l(),d("span",{key:2,class:c(a(Ba).Icon)},[A(a(re),{source:t.icon},null,8,["source"])],2)):w("",!0),b.$slots.default?(l(),d("span",Sf,[f(b.$slots,"default")])):w("",!0)],2))}});it.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"status",description:"Colors and labels the badge with the given status.",required:!1,type:{name:"Status"}},{name:"progress",description:"Render a pip showing the progress of a given task.",required:!1,type:{name:"Progress"}},{name:"size",description:"Medium or small size.",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"statusAndProgressLabelOverride",description:"Pass a custom accessibilityLabel",required:!1,type:{name:"string"}},{name:"icon",description:"Icon to display to the left of the badge\u2019s content.",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const Cf={inheritAttrs:!1},$r=M(_(v({},Cf),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},setup(t){const n=t,o=p(()=>n.ellipsis&&n.content?`${n.content}\u2026`:n.content);return(i,s)=>(l(),d("span",{class:c(a(Ye).Content)},[t.prefixId?(l(),d("span",{key:0,class:c(a(Ye).Prefix)},[f(i.$slots,"prefix")],2)):t.icon?(l(),d("span",{key:1,class:c(a(Ye).Prefix)},[A(a(re),{source:t.icon},null,8,["source"])],2)):t.image?(l(),d("span",{key:2,class:c(a(Ye).Prefix),role:"presentation",style:Fe({backgroundImage:`url(${t.image}`})},null,6)):w("",!0),S("span",{class:c(a(Ye).Text)},[t.helpText?(l(),d("span",{key:0,class:c(a(Ye).ContentBlock)},[S("span",{class:c(a(Ye).ContentBlockInner)},U(a(o)),3),A(a(ct),{variation:"subdued"},{default:y(()=>[ie(U(t.helpText),1)]),_:1})],2)):(l(),d(K,{key:1},[ie(U(a(o)),1)],64))],2),t.badge?(l(),d("span",{key:3,class:c(a(Ye).Suffix)},[A(a(it),{status:t.badge.status},{default:y(()=>[ie(U(t.badge.content),1)]),_:1},8,["status"])],2)):w("",!0),t.suffixId?(l(),d("span",{key:4,class:c(a(Ye).Suffix)},[f(i.$slots,"suffix")],2)):w("",!0)],2))}}));$r.__docgenInfo={exportName:"default",displayName:"ContentElement",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],slots:[{name:"prefix"},{name:"suffix"}]};const Af=["role"],kf=["id","disabled","aria-label","role"],Lf={inheritAttrs:!1},vp=M(_(v({},Lf),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},emits:["action"],setup(t,{emit:n}){const o=t,i=p(()=>F(Ye.Item,o.disabled&&Ye.disabled,o.destructive&&Ye.destructive,o.active&&Ye.active)),s=p(()=>({badge:o.badge,content:o.content,helpText:o.helpText,icon:o.icon,prefixId:o.prefixId,suffixId:o.suffixId,image:o.image,disabled:o.disabled,ellipsis:o.ellipsis,role:o.role})),r=p(()=>o.role==="menuitem"?"presentation":void 0),u=()=>{o.disabled||n("action")};return(m,x)=>(l(),d("li",{role:a(r)},[t.active?(l(),L(a(as),{key:0})):w("",!0),t.url?(l(),L(a(Tt),{key:1,id:t.id,url:t.disabled?void 0:t.url,class:c(a(i)),external:t.external,"aria-label":t.accessibilityLabel,role:t.role,onClick:u},{default:y(()=>[A($r,at(Mt(a(s))),{suffix:y(()=>[f(m.$slots,"suffix")]),prefix:y(()=>[f(m.$slots,"prefix")]),_:3},16)]),_:3},8,["id","url","class","external","aria-label","role"])):(l(),d("button",{key:2,id:t.id,type:"button",class:c(a(i)),disabled:t.disabled,"aria-label":t.accessibilityLabel,role:t.role,onClick:u,onMouseup:x[0]||(x[0]=(...b)=>a(Ct)&&a(Ct)(...b))},[A($r,at(Mt(a(s))),{suffix:y(()=>[f(m.$slots,"suffix")]),prefix:y(()=>[f(m.$slots,"prefix")]),_:3},16)],42,kf))],8,Af))}}));vp.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"action"}],slots:[{name:"suffix"},{name:"prefix"}]};const Nf=["role","tabIndex"],wf={inheritAttrs:!1},Fr=M(_(v({},wf),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(t,{emit:n}){const o=t,i=p(()=>o.section.title?void 0:Ye["Section-withoutTitle"]),s=p(()=>F(Ye.Title,o.firstSection&&Ye.firstSectionWithTitle)),r=p(()=>{let m;switch(o.actionRole){case"option":m="presentation";break;case"menuitem":m=o.hasMultipleSections?"presentation":"menu";break;default:m=void 0;break}return m}),u=m=>{m&&m(),n("action-any-item")};return(m,x)=>(l(),d("div",{class:c(a(i))},[t.section.title?(l(),d("p",{key:0,class:c(a(s))},U(t.section.title),3)):w("",!0),S("ul",{class:c(a(Ye).Actions),role:a(r),tabIndex:t.hasMultipleSections?void 0:-1},[(l(!0),d(K,null,ge(t.section.items,(N,k)=>{var I=N,{content:b,helpText:g,onAction:h}=I,T=J(I,["content","helpText","onAction"]);return l(),L(a(vp),me({key:`${b}-${k}`,content:b,helpText:g,role:t.actionRole},v({},T),{onAction:D=>u(h)}),Ue({_:2},[T.prefixId?{name:"prefix",fn:y(()=>[f(m.$slots,`prefix-${T.prefixId}`)])}:void 0,T.suffixId?{name:"suffix",fn:y(()=>[f(m.$slots,`suffix-${T.suffixId}`)])}:void 0]),1040,["content","helpText","role","onAction"])}),128))],10,Nf)],2))}}));Fr.__docgenInfo={exportName:"default",displayName:"SectionMarkup",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Pf={inheritAttrs:!1},xp=M(_(v({},Pf),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(t,{emit:n}){const o=t,i=p(()=>{const{section:s,hasMultipleSections:r,actionRole:u,firstSection:m}=o;return{section:s,hasMultipleSections:r,actionRole:u,firstSection:m}});return(s,r)=>t.hasMultipleSections?(l(),d("li",{key:0,class:c(a(Ye).Section),role:"presentation"},[A(Fr,me(a(i),{onActionAnyItem:r[0]||(r[0]=u=>n("action-any-item"))}),Ue({_:2},[ge(t.section.items,({prefixId:u})=>({name:`prefix-${u}`,fn:y(()=>[f(s.$slots,`prefix-${u}`)])})),ge(t.section.items,({suffixId:u})=>({name:`suffix-${u}`,fn:y(()=>[f(s.$slots,`suffix-${u}`)])}))]),1040)],2)):(l(),L(Fr,me({key:1},a(i),{onActionAnyItem:r[1]||(r[1]=u=>n("action-any-item"))}),Ue({_:2},[ge(t.section.items,({prefixId:u})=>({name:`prefix-${u}`,fn:y(()=>[f(s.$slots,`prefix-${u}`)])})),ge(t.section.items,({suffixId:u})=>({name:`suffix-${u}`,fn:y(()=>[f(s.$slots,`suffix-${u}`)])}))]),1040))}}));xp.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Mf={inheritAttrs:!1},Ze=M(_(v({},Mf),{props:{items:{default:void 0},sections:{default:()=>[]},actionRole:{default:void 0}},emits:["action-any-item"],setup(t,{emit:n}){const o=t,i=C(null),s=p(()=>o.items?[{items:o.items},...o.sections]:o.sections?o.sections:[]),r=p(()=>s.value.length>1),u=p(()=>r.value?"ul":"div"),m=p(()=>r.value&&o.actionRole==="menuitem"?"menu":void 0),x=p(()=>r.value&&o.actionRole==="menuitem"?-1:void 0),b=h=>{h.preventDefault();const T=h.target;i.value&&T&&i.value.contains(T)&&Qh(i.value,T)},g=h=>{h.preventDefault();const T=h.target;i.value&&T&&i.value.contains(T)&&Jh(i.value,T)};return(h,T)=>(l(),L(Oe(a(u)),{ref_key:"actionListRef",ref:i,role:a(m),class:c(a(F)(a(Ye).ActionList)),tabIndex:a(x)},{default:y(()=>[(l(!0),d(K,null,ge(a(s),(k,N)=>(l(),d(K,null,[k.items&&k.items.length>0?(l(),L(a(xp),{key:k.title||N,firstSection:N===0,section:k,hasMultipleSections:a(r),actionRole:t.actionRole,onActionAnyItem:T[0]||(T[0]=I=>n("action-any-item"))},Ue({_:2},[ge(k.items,({prefixId:I})=>({name:`prefix-${I}`,fn:y(()=>[f(h.$slots,`prefix-${I}`)])})),ge(k.items,({suffixId:I})=>({name:`suffix-${I}`,fn:y(()=>[f(h.$slots,`suffix-${I}`)])}))]),1032,["firstSection","section","hasMultipleSections","actionRole"])):w("",!0)],64))),256)),t.actionRole==="menuitem"?(l(),d(K,{key:0},[A(a(vt),{keyEvent:"keydown",keyCode:a(ze).ArrowDown,handler:g},null,8,["keyCode"]),A(a(vt),{keyEvent:"keydown",keyCode:a(ze).ArrowUp,handler:b},null,8,["keyCode"])],64)):w("",!0)]),_:3},8,["role","class","tabIndex"]))}}));Ze.__docgenInfo={exportName:"default",displayName:"ActionList",description:"",tags:{},props:[{name:"items",description:"Collection of actions for list",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"undefined"}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"menuitem"'}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const _f="Polaris-ActionMenu";var If={ActionMenu:_f};const Bf="Polaris-ActionMenu-Actions__ActionsLayout";var Df={ActionsLayout:Bf};const $f="Polaris-ActionMenu-MenuGroup__Details";var Ff={Details:$f};const Ef="Polaris-ActionMenu-SecondaryAction",Of="Polaris-ActionMenu-SecondaryAction--destructive";var fu={SecondaryAction:Ef,destructive:Of};const zi=M({props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:null,textAlign:null,outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean]},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},emits:["click","get-offset-width"],setup(t,{emit:n}){const o=t,i=C(null),s=p(()=>F(fu.SecondaryAction,o.destructive&&fu.destructive));Se(()=>{var u;r(((u=i.value)==null?void 0:u.offsetWidth)||0)});const r=u=>{i.value&&n("get-offset-width",u)};return(u,m)=>(l(),d("span",{class:c(a(s)),ref_key:"secondaryActionsRef",ref:i},[A(a(he),me({onClick:m[0]||(m[0]=x=>u.$emit("click"))},o),{default:y(()=>[f(u.$slots,"default")]),_:3},16)],2))}});zi.__docgenInfo={exportName:"default",displayName:"SecondaryAction",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"primary",required:!1,type:{name:"boolean"}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]}},{name:"textAlign",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]}},{name:"plain",required:!1,type:{name:"boolean"}},{name:"monochrome",required:!1,type:{name:"boolean"}},{name:"removeUnderline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",required:!1,type:{name:"ConnectedDisclosure"}}],events:[{name:"click"},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const qf={inheritAttrs:!1},Tp=M(_(v({},qf),{props:{badge:null,title:null,actions:null,icon:null,index:null,accessibilityLabel:null,active:{type:Boolean}},emits:["open","close","get-offset-width"],setup(t,{emit:n}){const o=t,i=ue(),s=()=>{n("close",o.title)},r=()=>{n("open",o.title)},u=m=>{n("get-offset-width",m)};return(m,x)=>t.actions.length?(l(),L(a(Qe),{key:0,active:Boolean(t.active),"preferred-alignment":"left",hideOnPrint:"",onClose:s},{activator:y(()=>[A(a(zi),{disclosure:!0,icon:t.icon,accessibilityLabel:t.accessibilityLabel,onClick:r,onGetOffsetWidth:u},{default:y(()=>[ie(U(t.title),1)]),_:1},8,["icon","accessibilityLabel"])]),content:y(()=>[A(a(Ze),{items:t.actions,onActionAnyItem:s},null,8,["items"]),a(i).default?(l(),d("div",{key:0,class:c(a(Ff).Details)},[f(m.$slots,"default")],2)):w("",!0)]),_:3},8,["active"])):w("",!0)}}));Tp.__docgenInfo={exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"title",description:"Menu group title",required:!0,type:{name:"string"}},{name:"actions",description:"List of actions",required:!0,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"icon",description:"Icon to display",required:!1,type:{name:"TSIndexedAccessType"}},{name:"index",description:"Zero-indexed numerical position. Overrides the group's order in the menu.",required:!1,type:{name:"number"}},{name:"accessibilityLabel",description:"Visually hidden menu description for screen readers",required:!1,type:{name:"string"}},{name:"active",description:"Whether or not the menu is open",required:!1,type:{name:"boolean"}}],events:[{name:"open",type:{names:["string"]}},{name:"close",type:{names:["string"]}},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const Sp=M({props:{actions:null,groups:null},setup(t){const n=t,o=8,i=ve("lang"),s=C(null),r=C(0),u=C(0),m=C(0),x=C(0),b=C([]),g=C(null),h=C({showable:[],rolledUp:[]}),T=C({title:i.Polaris.ActionMenu.Actions.moreActions,actions:[]}),k=p(()=>n.groups&&n.groups.length?[...n.groups].pop():[]),N=p(()=>[...b.value].pop()||0),I=O=>{b.value=[...b.value,O]},D=O=>{g.value?g.value=null:g.value=O},E=()=>{g.value=null},R=p(()=>n.groups?[...n.groups,T.value]:[T.value]),W=p(()=>R.value.filter(O=>n.groups&&n.groups.length===0?O:O===k.value||!h.value.rolledUp.some(G=>Me(G)&&G.title===O.title))),Z=O=>O===T.value,$=O=>O===k.value,z=p(()=>h.value.rolledUp.reduce((O,G)=>(O.push(...Me(G)?G.actions:[G]),O),[])),q=O=>{const ce=O,{actions:G}=ce,Y=J(ce,["actions"]);return _(v({},Y),{active:g.value===O.title})},j=O=>!Z(O)&&!$(O)?O.actions:!Z(O)&&$(O)?[...z.value,...O.actions]:Z(O)&&(!n.groups||n.groups.length===0)&&z.value.length?z.value:[],se=()=>{let O=[...n.actions||[],...n.groups||[]];n.groups&&n.groups.length>0&&(O=[...O].slice(0,O.length-1));const G=O.slice(0,h.value.showable.length),Y=O.slice(h.value.showable.length,O.length);h.value={showable:G,rolledUp:Y}};Xt(()=>{if(se(),!!s.value){if(u.value=s.value.offsetWidth,x.value>=2&&[...n.actions||[],...n.groups||[]].length===m.value){se();return}be()}});const be=()=>{if(b.value.length===0||u.value===0)return;const O=[...n.actions||[],...n.groups||[]];if(O.length===1){h.value={showable:O,rolledUp:[]};return}let G=u.value,Y=[],ce=[];O.forEach((de,$e)=>{if(b.value[$e]+r.value+o+N.value<=G)G-=b.value[$e]+o*2,Y=[...Y,de];else{if(G=0,de===k.value)return;ce=[...ce,de]}}),h.value={showable:Y,rolledUp:ce},x.value+=1,m.value=O.length},ee=()=>{zt(()=>{!s.value||(u.value=s.value.offsetWidth,x.value=0,be())},50,{leading:!1,trailing:!0})};function Me(O){return"title"in O}return(O,G)=>(l(),d("div",{ref_key:"actionsLayoutRef",ref:s,class:c(a(Df).ActionsLayout)},[A(a(ot),{spacing:"extraTight"},{default:y(()=>[h.value.showable.length>0?(l(!0),d(K,{key:0},ge(h.value.showable,Y=>(l(),d(K,{key:Y.content},[Y.content?(l(),L(a(zi),me({key:0},Y,{onGetOffsetWidth:I}),{default:y(()=>[ie(U(Y.content),1)]),_:2},1040)):w("",!0)],64))),128)):w("",!0),(l(!0),d(K,null,ge(t.actions,Y=>(l(),d(K,{key:Y.content},[!h.value.showable.length&&!h.value.rolledUp.includes(Y)?(l(),L(a(zi),me({key:0},Y,{onClick:ce=>Y.onAction?Y.onAction():void 0,onGetOffsetWidth:I}),{default:y(()=>[ie(U(Y.content),1)]),_:2},1040,["onClick"])):w("",!0)],64))),128)),(l(!0),d(K,null,ge(a(W),Y=>(l(),L(a(Tp),me({key:Y.title},q(Y),{actions:j(Y),onOpen:D,onClose:E,onGetOffsetWidth:I}),null,16,["actions"]))),128))]),_:1}),A(a(nt),{event:"resize",handler:ee})],2))}});Sp.__docgenInfo={exportName:"default",displayName:"Actions",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}]};const Rf={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Vf=S("path",{d:"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z"},null,-1),Hf=[Vf];function Uf(t,n){return l(),d("svg",Rf,Hf)}var ba={render:Uf};const jf="Polaris-ActionMenu-RollupActions__RollupActivator";var Wf={RollupActivator:jf};const Cp=M({props:{accessibilityLabel:null,items:null,sections:null},setup(t){const n=ve("lang"),o=C(!1),i=()=>{o.value=!o.value};return(s,r)=>{var u,m;return((u=t.items)==null?void 0:u.length)||((m=t.sections)==null?void 0:m.length)?(l(),L(a(Qe),{key:0,active:o.value,preferredAlignment:"right",onClose:i,hideOnPrint:""},{activator:y(()=>[S("div",{class:c(a(Wf).RollupActivator)},[A(a(he),{outline:"",icon:a(ba),accessibilityLabel:t.accessibilityLabel||a(n).Polaris.ActionMenu.RollupActions.rollupButton,onClick:i},null,8,["icon","accessibilityLabel"])],2)]),content:y(()=>[A(a(Ze),{items:t.items,sections:t.sections,onActionAnyItem:i},null,8,["items","sections"])]),_:1},8,["active"])):w("",!0)}}});Cp.__docgenInfo={exportName:"default",displayName:"RollupActions",description:"",tags:{},props:[{name:"accessibilityLabel",description:"Accessibilty label",required:!1,type:{name:"string"}},{name:"items",description:"Collection of actions for the list",required:!1,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"Array",elements:[{name:"ActionListSection"}]}}]};const zf={inheritAttrs:!1},Ap=M(_(v({},zf),{props:{actions:null,groups:null,rollup:{type:Boolean},rollupActionsLabel:null},setup(t){const n=t,o=p(()=>F(If.ActionMenu)),i=p(()=>(n.groups||[]).map(r=>s(r)));function s({title:r,actions:u}){return{title:r,items:u}}return(r,u)=>t.actions&&t.actions.length||t.groups&&t.groups.length?(l(),d("div",{key:0,class:c(a(o))},[t.rollup?(l(),L(a(Cp),{key:0,accessibilityLabel:t.rollupActionsLabel,items:t.actions,sections:a(i)},null,8,["accessibilityLabel","items","sections"])):(l(),L(a(Sp),{key:1,actions:t.actions,groups:t.groups},null,8,["actions","groups"]))],2)):w("",!0)}}));Ap.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"rollup",description:"Roll up all actions into a Popover > ActionList",required:!1,type:{name:"boolean"}},{name:"rollupActionsLabel",description:"Label for rolled up actions activator",required:!1,type:{name:"string"}}]};const vu="data-lock-scrolling",xu="data-lock-scrolling-wrapper";let Ii=0;class Gf{constructor(){this.scrollLocks=0,this.locked=!1}registerScrollLock(){this.scrollLocks+=1,this.handleScrollLocking()}unregisterScrollLock(){this.scrollLocks-=1,this.handleScrollLocking()}handleScrollLocking(){if(Xr)return;const{scrollLocks:n}=this,{body:o}=document,i=o.firstElementChild;n===0?(o.removeAttribute(vu),i&&i.removeAttribute(xu),window.scroll(0,Ii),this.locked=!1):n>0&&!this.locked&&(Ii=window.pageYOffset,o.setAttribute(vu,""),i&&(i.setAttribute(xu,""),i.scrollTop=Ii),this.locked=!0)}resetScrollPosition(){Ii=0}}class Xf{constructor(n){this.idGenerators={},this.idGeneratorFactory=n}nextId(n){return this.idGenerators[n]||(this.idGenerators[n]=this.idGeneratorFactory(n)),this.idGenerators[n]()}}function Kf(t=""){let n=1;return()=>`Polaris${t}${n++}`}const Yf={ActionMenu:{Actions:{moreActions:"More actions"},RollupActions:{rollupButton:"View actions"}},Avatar:{label:"Avatar",labelWithInitials:"Avatar with initials {initials}"},Autocomplete:{spinnerAccessibilityLabel:"Loading",ellipsis:"{content}\u2026"},Badge:{PROGRESS_LABELS:{incomplete:"Incomplete",partiallyComplete:"Partially complete",complete:"Complete"},STATUS_LABELS:{info:"Info",success:"Success",warning:"Warning",critical:"Critical",attention:"Attention",new:"New"},progressAndStatus:"{statusLabel} {progressLabel}"},Button:{spinnerAccessibilityLabel:"Loading",connectedDisclosureAccessibilityLabel:"Related actions"},Common:{checkbox:"checkbox",undo:"Undo",cancel:"Cancel",newWindowAccessibilityHint:"(opens a new window)",clear:"Clear",close:"Close",submit:"Submit",more:"More"},ContextualSaveBar:{save:"Save",discard:"Discard"},DataTable:{sortAccessibilityLabel:"sort {direction} by",navAccessibilityLabel:"Scroll table {direction} one column",totalsRowHeading:"Totals",totalRowHeading:"Total"},DatePicker:{previousMonth:"Show previous month, {previousMonthName} {showPreviousYear}",nextMonth:"Show next month, {nextMonth} {nextYear}",today:"Today ",start:"Start of range",end:"End of range",months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}},DiscardConfirmationModal:{title:"Discard all unsaved changes",message:"If you discard changes, you\u2019ll delete any edits you made since you last saved.",primaryAction:"Discard changes",secondaryAction:"Continue editing"},DropZone:{single:{overlayTextFile:"Drop file to upload",overlayTextImage:"Drop image to upload",overlayTextVideo:"Drop video to upload",actionTitleFile:"Add file",actionTitleImage:"Add image",actionTitleVideo:"Add video",actionHintFile:"or drop file to upload",actionHintImage:"or drop image to upload",actionHintVideo:"or drop video to upload",labelFile:"Upload file",labelImage:"Upload image",labelVideo:"Upload video"},allowMultiple:{overlayTextFile:"Drop files to upload",overlayTextImage:"Drop images to upload",overlayTextVideo:"Drop videos to upload",actionTitleFile:"Add files",actionTitleImage:"Add images",actionTitleVideo:"Add videos",actionHintFile:"or drop files to upload",actionHintImage:"or drop images to upload",actionHintVideo:"or drop videos to upload",labelFile:"Upload files",labelImage:"Upload images",labelVideo:"Upload videos"},errorOverlayTextFile:"File type is not valid",errorOverlayTextImage:"Image type is not valid",errorOverlayTextVideo:"Video type is not valid"},EmptySearchResult:{altText:"Empty search results"},Frame:{skipToContent:"Skip to content",navigationLabel:"Navigation",Navigation:{closeMobileNavigationLabel:"Close navigation"}},Filters:{moreFilters:"More filters",moreFiltersWithCount:"More filters ({count})",filter:"Filter {resourceName}",noFiltersApplied:"No filters applied",cancel:"Cancel",done:"Done",clearAllFilters:"Clear all filters",clear:"Clear",clearLabel:"Clear {filterName}"},IndexProvider:{defaultItemSingular:"Item",defaultItemPlural:"Items",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} are selected.",selected:"{selectedItemsCount} selected",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}"},IndexTable:{emptySearchTitle:"No {resourceNamePlural} found",emptySearchDescription:"Try changing the filters or search term",onboardingBadgeText:"New",resourceLoadingAccessibilityLabel:"Loading {resourceNamePlural}\u2026",selectAllLabel:"Select all {resourceNamePlural}",selected:"{selectedItemsCount} selected",undo:"Undo",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural}",selectItem:"Select {resourceName}",selectButtonText:"Select"},Loading:{label:"Page loading bar"},Modal:{iFrameTitle:"body markup",modalWarning:"These required properties are missing from Modal: {missingProps}"},Page:{Header:{rollupActionsLabel:"View actions for {title}"}},Pagination:{previous:"Previous",next:"Next",pagination:"Pagination"},ProgressBar:{negativeWarningMessage:"Values passed to the progress prop shouldn\u2019t be negative. Resetting {progress} to 0.",exceedWarningMessage:"Values passed to the progress prop shouldn\u2019t exceed 100. Setting {progress} to 100."},ResourceList:{sortingLabel:"Sort by",defaultItemSingular:"item",defaultItemPlural:"items",showing:"Showing {itemsCount} {resource}",showingTotalCount:"Showing {itemsCount} of {totalItemsCount} {resource}",loading:"Loading {resource}",selected:"{selectedItemsCount} selected",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} in your store are selected.",allFilteredItemsSelected:"All {itemsLength}+ {resourceNamePlural} in this filter are selected.",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural} in your store",selectAllFilteredItems:"Select all {itemsLength}+ {resourceNamePlural} in this filter",emptySearchResultTitle:"No {resourceNamePlural} found",emptySearchResultDescription:"Try changing the filters or search term",selectButtonText:"Select",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}",ariaLiveSingular:"{itemsLength} item",ariaLivePlural:"{itemsLength} items",Item:{actionsDropdownLabel:"Actions for {accessibilityLabel}",actionsDropdown:"Actions dropdown",viewItem:"View details for {itemName}"},BulkActions:{actionsActivatorLabel:"Actions",moreActionsActivatorLabel:"More actions",warningMessage:"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions."}},SkeletonPage:{loadingLabel:"Page loading"},Tabs:{toggleTabsLabel:"More tabs"},Tag:{ariaLabel:"Remove {children}"},TextField:{characterCount:"{count} characters",characterCountWithMaxLength:"{count} of {limit} characters used"},TooltipOverlay:{accessibilityLabel:"Tooltip: {label}"},TopBar:{toggleMenuLabel:"Toggle menu",SearchField:{clearButtonLabel:"Clear",search:"Search"}},MediaCard:{popoverButton:"Actions"},VideoThumbnail:{playButtonA11yLabel:{default:"Play video",defaultWithDuration:"Play video of length {duration}",duration:{hours:{other:{only:"{hourCount} hours",andMinutes:"{hourCount} hours and {minuteCount} minutes",andMinute:"{hourCount} hours and {minuteCount} minute",minutesAndSeconds:"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hours, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hours, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hours and {secondCount} seconds",andSecond:"{hourCount} hours and {secondCount} second"},one:{only:"{hourCount} hour",andMinutes:"{hourCount} hour and {minuteCount} minutes",andMinute:"{hourCount} hour and {minuteCount} minute",minutesAndSeconds:"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hour, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hour, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hour and {secondCount} seconds",andSecond:"{hourCount} hour and {secondCount} second"}},minutes:{other:{only:"{minuteCount} minutes",andSeconds:"{minuteCount} minutes and {secondCount} seconds",andSecond:"{minuteCount} minutes and {secondCount} second"},one:{only:"{minuteCount} minute",andSeconds:"{minuteCount} minute and {secondCount} seconds",andSecond:"{minuteCount} minute and {secondCount} second"}},seconds:{other:"{secondCount} seconds",one:"{secondCount} second"}}}}};var Zf={Polaris:Yf};class kp{constructor(){ht(this,"portalIds",[])}register(n){this.portalIds.includes(n)||this.portalIds.push(n)}hasContainer(){return this.portalIds.length}}class Qf{constructor(){ht(this,"trapFocusList",[])}add(n){this.trapFocusList=[...this.trapFocusList,n]}remove(n){const o=this.trapFocusList.indexOf(n);return o>-1&&(this.trapFocusList=this.trapFocusList.splice(o,1)),o>-1}}const Er="light";const Jf=S("div",{id:"PolarisPortalsContainer"},null,-1),$o=M({props:{colorScheme:{type:String,default:Er}},setup(t){const n=t,o=new Gf,i=new kp,s=C(new Xf(Kf)),r=new Qf,u=C(uu().matches),m=()=>{document.body.setAttribute("p-color-scheme",n.colorScheme||Er),document.body.style.backgroundColor="var(--p-background)",document.body.style.color="var(--p-text)"},x=zt(()=>{u.value!==uu().matches&&(u.value=!u.value)},40,{trailing:!0,leading:!0,maxWait:40});return Ee(()=>n.colorScheme,(b,g)=>{b!==g&&m()}),Se(()=>{document!==null&&m()}),Xe("mediaQueryContext",{isNavigationCollapsed:u.value}),Xe("scrollLockManager",o),Xe("portalManager",i),Xe("uniqueIdFactory",s.value),Xe("focusManager",r),Xe("lang",Zf),(b,g)=>(l(),L(a(Yt),{"color-scheme":t.colorScheme},{default:y(()=>[A(a(nt),{event:"resize",handler:a(x)},null,8,["handler"]),f(b.$slots,"default"),Jf]),_:3},8,["color-scheme"]))}});$o.__docgenInfo={exportName:"default",displayName:"AppProvider",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}}],slots:[{name:"default"}]};const ev="Polaris-Avatar",tv="Polaris-Avatar--hidden",av="Polaris-Avatar--sizeExtraSmall",nv="Polaris-Avatar--sizeSmall",ov="Polaris-Avatar--sizeMedium",iv="Polaris-Avatar--sizeLarge",sv="Polaris-Avatar--styleOne",lv="Polaris-Avatar--styleTwo",rv="Polaris-Avatar--styleThree",cv="Polaris-Avatar--styleFour",uv="Polaris-Avatar--styleFive",dv="Polaris-Avatar--hasImage",pv="Polaris-Avatar__Image",mv="Polaris-Avatar__Initials",yv="Polaris-Avatar__Svg";var Jt={Avatar:ev,hidden:tv,sizeExtraSmall:av,sizeSmall:nv,sizeMedium:ov,sizeLarge:iv,styleOne:sv,styleTwo:lv,styleThree:rv,styleFour:cv,styleFive:uv,hasImage:dv,Image:pv,Initials:mv,Svg:yv};const fr=["one","two","three","four","five"];function gv(t){return t?fr[t.charCodeAt(0)%fr.length]:fr[0]}const hv=["src","srcSet","crossOrigin"],bv=["src","crossOrigin"],Jn=M({props:{source:null,crossOrigin:null,sourceSet:null},setup(t){const n=t,o=p(()=>n.sourceSet?n.sourceSet.map(({source:i,descriptor:s})=>`${i} ${s}`).join(","):null);return(i,s)=>a(o)?(l(),d("img",{key:0,src:t.source,srcSet:t.sourceSet,crossOrigin:t.crossOrigin},null,8,hv)):(l(),d("img",{key:1,src:t.source,crossOrigin:t.crossOrigin},null,8,bv))}});Jn.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"source",required:!0,type:{name:"string"}},{name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},{name:"sourceSet",required:!1,type:{name:"Array",elements:[{name:"SourceSet"}]}}]};const fv=["aria-label"],eo=M({props:{size:{default:"medium"},name:{default:void 0},initials:{default:void 0},customer:{type:Boolean,default:void 0},source:{default:void 0},accessibilityLabel:{default:void 0}},emits:["error"],setup(t,{emit:n}){const o=t,i=C("PENDING"),s="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z",r="0.35em",u=p(()=>o.source&&i.value!=="ERRORED"),m=p(()=>{const h=Ne("size",o.size),T=Ne("style",gv(o.name||o.initials));return F(Jt.Avatar,h&&Jt[h],!o.customer&&Jt[T],(u.value||o.initials&&o.initials.length===0)&&i.value!=="LOADED"&&Jt.hidden,u.value&&Jt.hasImage)}),x=p(()=>o.accessibilityLabel?o.accessibilityLabel:o.name?o.name:o.initials?`Avatar with initials ${o.initials.split("").join(" ")}`:"Avatar"),b=()=>{i.value="LOADED"},g=()=>{i.value="ERRORED",n("error")};return(h,T)=>(l(),d("span",{"aria-label":a(x),role:"img",class:c(a(m))},[a(u)?w("",!0):(l(),d("span",{key:0,class:c(a(Jt).Initials)},[(l(),d("svg",{class:c(a(Jt).Svg),viewBox:"0 0 40 40"},[t.customer||!t.initials?(l(),d("path",{key:0,fill:"currentColor",d:s})):(l(),d("text",{key:1,x:"50%",y:"50%",dy:r,fill:"currentColor","font-size":"20","text-anchor":"middle"},U(t.initials),1))],2))],2)),t.source&&i.value!==h.Status.Errored?(l(),L(a(Jn),{key:1,class:c(a(Jt).Image),source:t.source,alt:"",role:"presentation",onLoad:b,onError:g},null,8,["class","source"])):w("",!0)],10,fv))}});eo.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",description:"Size of avatar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"name",description:"The name of the person",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"initials",description:"Initials of person to display",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"customer",description:"Whether the avatar is for a customer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"source",description:"URL of the avatar image which falls back to initials if the image fails to load",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"accessibilityLabel",description:"Accessible label for the avatar image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"error"}]};const vv="Polaris-Backdrop",xv="Polaris-Backdrop--transparent",Tv="Polaris-Backdrop--belowNavigation";var vr={Backdrop:vv,transparent:xv,belowNavigation:Tv};const Sv={inheritAttrs:!1,render(){return null}},Jr=M(_(v({},Sv),{setup(t){const n=ve("scrollLockManager");return Se(()=>{n.registerScrollLock()}),pt(()=>{n.unregisterScrollLock()}),()=>{}}}));Jr.__docgenInfo={exportName:"default",displayName:"ScrollLock",description:"",tags:{}};const ec=M({props:{belowNavigation:{type:Boolean},transparent:{type:Boolean}},setup(t){const n=t,o=p(()=>F(vr.Backdrop,n.belowNavigation&&vr.belowNavigation,n.transparent&&vr.transparent));return(i,s)=>(l(),d("div",{class:c(a(o))},[A(a(Jr))],2))}});ec.__docgenInfo={exportName:"default",displayName:"Backdrop",description:"",tags:{},props:[{name:"belowNavigation",required:!1,type:{name:"boolean"}},{name:"transparent",required:!1,type:{name:"boolean"}}]};const Cv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Av=S("path",{"fill-rule":"evenodd",d:"M0 10a10 10 0 1 0 20 0 10 10 0 0 0-20 0zm15.2-1.8a1 1 0 0 0-1.4-1.4L9 11.6 6.7 9.3a1 1 0 0 0-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z"},null,-1),kv=[Av];function Lv(t,n){return l(),d("svg",Cv,kv)}var Nv={render:Lv};const wv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Pv=S("path",{"fill-rule":"evenodd",d:"M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm-1-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},null,-1),Mv=[Pv];function _v(t,n){return l(),d("svg",wv,Mv)}var Tu={render:_v};const Iv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Bv=S("path",{"fill-rule":"evenodd",d:"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),Dv=[Bv];function $v(t,n){return l(),d("svg",Iv,Dv)}var Lp={render:$v};const Fv={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Ev=S("path",{d:"M11.768.768a2.5 2.5 0 0 0-3.536 0L.768 8.232a2.5 2.5 0 0 0 0 3.536l7.464 7.464a2.5 2.5 0 0 0 3.536 0l7.464-7.464a2.5 2.5 0 0 0 0-3.536L11.768.768zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},null,-1),Ov=[Ev];function qv(t,n){return l(),d("svg",Fv,Ov)}var Rv={render:qv};const Vv="Polaris-Banner",Hv="Polaris-Banner--statusCritical",Uv="Polaris-Banner__PrimaryAction",jv="Polaris-Banner__Button",Wv="Polaris-Banner--statusWarning",zv="Polaris-Banner--statusInfo",Gv="Polaris-Banner--statusSuccess",Xv="Polaris-Banner__ContentWrapper",Kv="Polaris-Banner--withinContentContainer",Yv="Polaris-Banner__Dismiss",Zv="Polaris-Banner__Ribbon",Qv="Polaris-Banner--keyFocused",Jv="Polaris-Banner__Actions",ex="Polaris-Banner--withinPage",tx="Polaris-Banner--hasDismiss",ax="Polaris-Banner__Heading",nx="Polaris-Banner__Content",ox="Polaris-Banner__SecondaryAction",ix="Polaris-Banner__Text",sx="Polaris-Banner--pressed",lx="Polaris-Banner--loading",rx="Polaris-Banner__Spinner";var Ge={Banner:Vv,statusCritical:Hv,PrimaryAction:Uv,Button:jv,statusWarning:Wv,statusInfo:zv,statusSuccess:Gv,ContentWrapper:Xv,withinContentContainer:Kv,Dismiss:Yv,Ribbon:Zv,keyFocused:Qv,Actions:Jv,withinPage:ex,hasDismiss:tx,Heading:ax,Content:nx,SecondaryAction:ox,Text:ix,pressed:sx,loading:lx,Spinner:rx};const cx=["role","aria-live","aria-labelledby","aria-describedby"],ux=["id"],dx=["id"],ns=M({props:{title:null,icon:null,status:null,action:null,secondaryAction:null,stopAnnouncements:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=ve("WithinContentContext",!1);Xe("BannerContext",!1);const{useUniqueId:s}=De(),r=s("Banner"),u=p(()=>`${r}Heading`),m=p(()=>`${r}Content`),x=Kt(),b=ue(),g=C(null),h=C(!1),{defaultIcon:T,iconColor:k,ariaRoleType:N}=$(n.status),I=p(()=>n.icon||T),D=p(()=>{const z=!!x.onDismiss;return F(Ge.Banner,n.status&&Ge[Ne("status",n.status)],z&&Ge.hasDismiss,h.value&&Ge.keyFocused,i?Ge.withinContentContainer:Ge.withinPage)}),E=p(()=>F(Ge.Button,Ge.loading)),R=z=>{z.target===g.value&&(h.value=!0)},W=()=>{h.value=!1},Z=z=>{z.currentTarget.blur(),h.value=!1};function $(z){switch(z){case"success":return{defaultIcon:Nv,iconColor:"success",ariaRoleType:"status"};case"info":return{defaultIcon:Tu,iconColor:"highlight",ariaRoleType:"status"};case"warning":return{defaultIcon:Lp,iconColor:"warning",ariaRoleType:"alert"};case"critical":return{defaultIcon:Rv,iconColor:"critical",ariaRoleType:"alert"};default:return{defaultIcon:Tu,iconColor:"base",ariaRoleType:"status"}}}return(z,q)=>(l(),d("div",{class:c(a(D)),tabIndex:"0",ref_key:"wrapperRef",ref:g,role:a(N),"aria-live":t.stopAnnouncements?"off":"polite",onMouseup:Z,onKeyup:R,onBlur:W,"aria-labelledby":a(u),"aria-describedby":a(m)},[a(x).onDismiss?(l(),d("div",{key:0,class:c(a(Ge).Dismiss)},[A(a(he),{plain:"",icon:a(Kr),onClick:q[0]||(q[0]=j=>z.$emit("dismiss")),accessibilityLabel:"Dismiss notification"},null,8,["icon"])],2)):w("",!0),S("div",{class:c(a(Ge).Ribbon)},[A(a(re),{source:a(I),color:a(k)},null,8,["source","color"])],2),S("div",{class:c(a(Ge).ContentWrapper)},[S("div",{class:c(a(Ge).Heading),id:a(u)},[A(a($t),{element:"p"},{default:y(()=>[ie(U(t.title),1)]),_:1})],10,ux),a(xe)(a(b).default)||t.action||t.secondaryAction?(l(),d("div",{key:0,class:c(a(Ge).Content),id:a(m)},[f(z.$slots,"default"),t.action||t.secondaryAction?(l(),d("div",{key:0,class:c(a(Ge).Actions)},[A(a(ot),null,{default:y(()=>[t.action?(l(),d("div",{key:0,class:c(a(Ge).PrimaryAction)},[t.action.loading?(l(),d("button",{key:0,disabled:"","aria-busy":"",class:c(a(E))},[S("span",{class:c(a(Ge).Spinner)},[A(a(Gt),{size:"small",accessibilityLabel:a(o).Polaris.Button.spinnerAccessibilityLabel},null,8,["accessibilityLabel"])],2),ie(U(t.action.content),1)],2)):(l(),L(a(Ip),{key:1,action:t.action,class:c(a(Ge).Button)},null,8,["action","class"]))],2)):w("",!0),t.secondaryAction?(l(),d(K,{key:1},[t.secondaryAction.url?(l(),L(a(Tt),{key:0,class:c(a(Ge).SecondaryAction),url:t.secondaryAction.url,external:t.secondaryAction.external},{default:y(()=>[S("span",{class:c(a(Ge).Text)},U(t.secondaryAction.content),3)]),_:1},8,["class","url","external"])):(l(),L(a(is),{key:1,class:c(a(Ge).SecondaryAction),onClick:t.secondaryAction.onAction},{default:y(()=>[S("span",{class:c(a(Ge).Text)},U(t.secondaryAction.content),3)]),_:1},8,["class","onClick"]))],64)):w("",!0)]),_:1})],2)):w("",!0)],10,dx)):w("",!0)],2)],42,cx))}});ns.__docgenInfo={exportName:"default",displayName:"Banner",description:"",tags:{},props:[{name:"title",description:"Title content for the banner.",required:!1,type:{name:"string"}},{name:"icon",description:"Icon to display in the banner. Use only major, duotone icons",required:!1,type:{name:"TSIndexedAccessType"}},{name:"status",description:"Sets the status of the banner.",required:!1,type:{name:"BannerStatus"}},{name:"action",description:"Action for banner",required:!1,type:{name:"intersection",elements:[{name:"DisableableAction"},{name:"LoadableAction"}]}},{name:"secondaryAction",description:"Action | Displays a secondary action",required:!1,type:{name:"Action"}},{name:"stopAnnouncements",description:"Disables screen reader announcements when changing the content of the banner",required:!1,type:{name:"boolean"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const px="Polaris-Breadcrumbs__Breadcrumb",mx="Polaris-Breadcrumbs__Icon",yx="Polaris-Breadcrumbs__Content";var Bi={Breadcrumb:px,Icon:mx,Content:yx};const gx={key:0,role:"navigation"},hx=["aria-label"],Np=M({props:{breadcrumbs:null},setup(t){const n=t,o=C(n.breadcrumbs[n.breadcrumbs.length-1]),i=p(()=>{const{url:r}=o.value;return r}),s=p(()=>{const{onAction:r}=o.value;return r});return(r,u)=>o.value?(l(),d("nav",gx,[a(i)?(l(),L(a(Tt),{key:o.value.content,url:a(i),class:c(a(Bi).Breadcrumb),"aria-label":o.value.accessibilityLabel,onMouseup:a(Ct)},{default:y(()=>[S("span",{class:c(a(Bi).Icon)},[A(a(re),{source:a(Zn)},null,8,["source"])],2),A(a(lt),null,{default:y(()=>[ie(U(o.value.content),1)]),_:1})]),_:1},8,["url","class","aria-label","onMouseup"])):(l(),d("button",{type:"button",key:o.value.content,class:c(a(Bi).Breadcrumb),"aria-label":o.value.accessibilityLabel,onMouseup:u[0]||(u[0]=(...m)=>a(Ct)&&a(Ct)(...m)),onClick:u[1]||(u[1]=(...m)=>a(s)&&a(s)(...m))},[S("span",{class:c(a(Bi).Icon)},[A(a(re),{source:a(Zn)},null,8,["source"])],2),A(a(lt),null,{default:y(()=>[ie(U(o.value.content),1)]),_:1})],42,hx))])):w("",!0)}});Np.__docgenInfo={exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const bx={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},fx=S("path",{d:"M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8z"},null,-1),vx=[fx];function xx(t,n){return l(),d("svg",bx,vx)}var fa={render:xx};function tc(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Tx="Polaris-Button",Sx="Polaris-Button--pressed",Cx="Polaris-Button--disabled",Ax="Polaris-Button--connectedDisclosure",kx="Polaris-Button__Content",Lx="Polaris-Button--plain",Nx="Polaris-Button--textAlignLeft",wx="Polaris-Button--textAlignCenter",Px="Polaris-Button--textAlignRight",Mx="Polaris-Button__Icon",_x="Polaris-Button--fullWidth",Ix="Polaris-Button--hidden",Bx="Polaris-Button__Spinner",Dx="Polaris-Button--primary",$x="Polaris-Button--destructive",Fx="Polaris-Button--outline",Ex="Polaris-Button--loading",Ox="Polaris-Button--removeUnderline",qx="Polaris-Button--iconOnly",Rx="Polaris-Button--sizeSlim",Vx="Polaris-Button--sizeLarge",Hx="Polaris-Button--monochrome",Ux="Polaris-Button__Text",jx="Polaris-Button__ConnectedDisclosureWrapper",Wx="Polaris-Button__ConnectedDisclosure";var Ae={Button:Tx,pressed:Sx,disabled:Cx,connectedDisclosure:Ax,Content:kx,plain:Lx,textAlignLeft:Nx,textAlignCenter:wx,textAlignRight:Px,Icon:Mx,fullWidth:_x,hidden:Ix,Spinner:Bx,primary:Dx,destructive:$x,outline:Fx,loading:Ex,removeUnderline:Ox,iconOnly:qx,sizeSlim:Rx,sizeLarge:Vx,monochrome:Hx,Text:Ux,ConnectedDisclosureWrapper:jx,ConnectedDisclosure:Wx},na=(t=>(t[t.Click=0]="Click",t[t.EscapeKeypress=1]="EscapeKeypress",t[t.FocusOut=2]="FocusOut",t[t.ScrollOut=3]="ScrollOut",t))(na||{}),wt=(t=>(t.Entering="entering",t.Entered="entered",t.Exiting="exiting",t.Exited="exited",t))(wt||{});function Su(t,n){if(t===n)return!0;let o=n.parentNode;for(;o!=null;){if(o===t)return!0;o=o.parentNode}return!1}function zx(t,{id:n,active:o=!1,ariaHaspopup:i,activatorDisabled:s=!1}){s||(t.tabIndex=t.tabIndex||0),t.setAttribute("aria-controls",n),t.setAttribute("aria-owns",n),t.setAttribute("aria-expanded",String(o)),i!=null&&t.setAttribute("aria-haspopup",String(i))}const Gx="Polaris-PositionedOverlay",Xx="Polaris-PositionedOverlay--fixed",Kx="Polaris-PositionedOverlay--calculating",Yx="Polaris-PositionedOverlay--preventInteraction";var xr={PositionedOverlay:Gx,fixed:Xx,calculating:Kx,preventInteraction:Yx};const Zx="Polaris-Popover",Qx="Polaris-Popover__PopoverOverlay",Jx="Polaris-Popover--measuring",eT="Polaris-Popover--fullWidth",tT="Polaris-Popover__Content",aT="Polaris-Popover--positionedAbove",nT="Polaris-Popover__Wrapper",oT="Polaris-Popover__Pane",iT="Polaris-Popover__Section",sT="Polaris-Popover__FocusTracker";var tt={Popover:Zx,PopoverOverlay:Qx,"PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",measuring:Jx,fullWidth:eT,Content:tT,positionedAbove:aT,Wrapper:nT,"Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:oT,"Pane-fixed":"Polaris-Popover__Pane--fixed",Section:iT,FocusTracker:sT,"PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"};const lT="Polaris-Tooltip-TooltipOverlay",rT="Polaris-Tooltip-TooltipOverlay--measuring",cT="Polaris-Tooltip-TooltipOverlay--positionedAbove",uT="Polaris-Tooltip-TooltipOverlay__Content";var Ei={TooltipOverlay:lT,measuring:rT,positionedAbove:cT,Content:uT};function dT(t,n,o,i,s,r,u,m=0){const x=t.top,b=x+t.height,g=t.top-m,h=s.height-t.top-t.height,T=n.height,k=o.activator+o.container,N=o.container,I=t.top-Math.max(i.top,0),D=s.top+Math.min(s.height,i.top+i.height)-(t.top+t.height),E=I>=N,R=D>=N,W=Math.min(h,T),Z=Math.min(g,T),$=u?0:s.top,z={height:Z-k,top:x+$-Z,positioning:"above"},q={height:W-k,top:b+$,positioning:"below"};return r==="above"?(E||I>=D&&!R)&&(g>T||g>h)?z:q:r==="below"?(R||D>=I&&!E)&&(h>T||h>g)?q:z:E&&R?g>h?z:q:I>N?z:q}function pT(t,n,o,i,s){const r=o.width-n.width;if(s==="left")return Math.min(r,Math.max(0,t.left-i.horizontal));if(s==="right"){const u=o.width-(t.left+t.width);return Math.min(r,Math.max(0,u-i.horizontal))}return Math.min(r,Math.max(0,t.center.x-n.width/2))}function mT(t,n){const{center:o}=t;return o.y<n.top||o.y>n.top+n.height}function wp(){return new Sa({top:window.scrollY,left:window.scrollX,height:window.innerHeight,width:document.body.clientWidth})}function yT(t,n=wp()){const o=Math.max(t.top,0),i=Math.max(t.left,0),s=Math.min(t.top+t.height,n.height),r=Math.min(t.left+t.width,n.width);return new Sa({top:o,left:i,height:s-o,width:r-i})}function gT(t){return t===document}function hT(t){const n=window.getComputedStyle(t);return{activator:parseFloat(n.marginTop||"0"),container:parseFloat(n.marginBottom||"0"),horizontal:parseFloat(n.marginLeft||"0")}}function bT(t){const n=t.closest(Vi.selector)||document.body,o=n===document.body?"auto":parseInt(window.getComputedStyle(n).zIndex||"0",10);return o==="auto"||Number.isNaN(o)?null:o}const fT={inheritAttrs:!1,render(){return null}},nt=M(_(v({},fT),{props:{event:{type:String,required:!0},capture:{type:Boolean},passive:{type:Boolean},handler:{type:Function,required:!0}},setup(t){const n=t;function o(){const{event:s,capture:r,passive:u,handler:m}=n;window.addEventListener(s,m,{capture:r,passive:u})}function i(s){const{event:r,handler:u,capture:m}=s||n;window.removeEventListener(r,u,m)}return Ee(()=>v({},n),(s,r)=>{s!==r&&(i(r),o())}),Se(()=>o()),pt(()=>i()),()=>{}}}));nt.__docgenInfo={exportName:"default",displayName:"EventListener",description:"",tags:{},props:[{name:"event",type:{name:"string"},required:!0},{name:"capture",type:{name:"boolean"}},{name:"passive",type:{name:"boolean"}},{name:"handler",type:{name:"Function as unknown as () => BaseEventProps['handler']"},required:!0}]};function vT(t){const n=t.closest(Ji.selector);return n instanceof HTMLElement?n:document}const xT={inheritAttrs:!1},ac=M(_(v({},xT),{props:{active:{type:Boolean},activator:null,preferInputActivator:{type:Boolean},preferredPosition:null,preferredAlignment:null,fullWidth:{type:Boolean},fixed:{type:Boolean},preventInteraction:{type:Boolean},classNames:null,zIndexOverride:null,hideOnPrint:{type:Boolean},layout:null},emits:["change-content-styles","scroll-out"],setup(t,{emit:n}){const o=t,i={childList:!0,subtree:!0,characterData:!0},s=C(null),r=C(null),u=C(null),m=C(0),x=C(0),b=C(null),g=C(null),h=C(!0),T=C("below"),k=C(jt(o.activator)),N=C(!1),I=C(!1),D=C(null),E=C(null),R=p(()=>{const q=o.classNames;return F(xr.PositionedOverlay,o.fixed&&xr.fixed,o.preventInteraction&&xr.preventInteraction,q)}),W=p(()=>F(tt.Popover,T.value==="above"&&tt.positionedAbove,o.fullWidth&&tt.fullWidth,h.value&&tt.measuring,o.hideOnPrint&&tt["PopoverOverlay-hideOnPrint"])),Z=p(()=>F(Ei.TooltipOverlay,h.value&&Ei.measuring,T.value==="above"&&Ei.positionedAbove)),$=p(()=>({top:m.value==null||Number.isNaN(m.value)?void 0:`${m.value}px`,left:u.value==null||Number.isNaN(u.value)?void 0:`${u.value}px`,right:r.value==null||Number.isNaN(r.value)?void 0:`${r.value}px`,width:b.value==null||Number.isNaN(b.value)?void 0:`${b.value}px`,zIndex:o.zIndexOverride||g.value||void 0})),z=()=>{if(E.value&&E.value.disconnect(),x.value=0,T.value="below",h.value=!0,s.value&&D.value){const{activator:q,preferredPosition:j="below",preferredAlignment:se="center",fullWidth:be,fixed:ee,preferInputActivator:Me=!0}=o,O=Me&&q.querySelector("input")||q,G=jt(O),Y=jt(s.value),ce=gT(D.value)?document.body:D.value,de=jt(ce),$e=be?new Sa(_(v({},Y),{width:G.width})):Y;ce===document.body&&(de.height=document.body.scrollHeight);let ye=0;const Ce=ce.querySelector(`${Gr.selector}`);Ce&&(ye=Ce.clientHeight);const oe=s.value.firstElementChild&&s.value.firstChild?hT(s.value.firstElementChild):{activator:0,container:0,horizontal:0},Te=wp(),Be=bT(q),qe=Be==null?Be:Be+1,_e=dT(G,$e,oe,de,Te,j,ee,ye),ut=pT(G,$e,Te,oe,se);h.value=!1,k.value=jt(q),u.value=se!=="right"?ut:null,r.value=se==="right"?ut:null,m.value=N.value?m.value:_e.top,N.value=Boolean(ee),x.value=_e.height||0,b.value=be?$e.width:null,T.value=_e.positioning,I.value=mT(G,yT(de)),g.value=qe,n("change-content-styles",{desiredHeight:x.value}),E.value&&(E.value.observe(s.value,i),E.value.observe(q,i))}};return ap(()=>{E.value=new MutationObserver(z)}),Xt(()=>{o.active&&m.value!==0&&I.value&&n("scroll-out")}),Se(()=>{D.value=vT(o.activator),D.value&&!o.fixed&&D.value.addEventListener("scroll",z),z()}),pt(()=>{D.value&&!o.fixed&&D.value.removeEventListener("scroll",z)}),(q,j)=>(l(),d("div",{class:c(a(R)),style:Fe(a($)),ref_key:"overlayRef",ref:s},[t.layout==="tooltip"?(l(),d("div",me({key:0,class:a(Z)},v({},a(Vi).props)),[f(q.$slots,"default")],16)):(l(),d("div",me({key:1,class:a(W)},v({},a(Yg).props)),[f(q.$slots,"default")],16)),A(a(nt),{event:"resize",handler:z})],6))}}));ac.__docgenInfo={exportName:"default",displayName:"PositionedOverlay",description:"",tags:{},props:[{name:"active",required:!0,type:{name:"boolean"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}},{name:"preferredAlignment",required:!1,type:{name:"PreferredAlignment"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"boolean"}},{name:"classNames",required:!1,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"layout",required:!1,type:{name:"string"}}],events:[{name:"change-content-styles",type:{names:["Record"]}},{name:"scroll-out"}],slots:[{name:"default"}]};const Yt=M({props:{colorScheme:{type:String,default:Er},as:{type:String,default:"div"}},setup(t){return(n,o)=>(l(),d(K,null,[(l(),L(Oe("style"),{"data-polaris-custom-properties":"",innerHTML:a(Zg)},null,8,["innerHTML"])),(l(),L(Oe(t.as),me(n.$attrs,{"p-color-scheme":t.colorScheme,style:{color:"var(--p-text)"}}),{default:y(()=>[f(n.$slots,"default")]),_:3},16,["p-color-scheme","style"]))],64))}});Yt.__docgenInfo={exportName:"default",displayName:"CustomProperties",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}},{name:"as",type:{name:"String as () => CustomPropertiesProps['as']"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}]};const Mo=M({setup(t){return(n,o)=>(l(),d("div",{class:c(a(tt).Section)},[f(n.$slots,"default")],2))}});Mo.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},slots:[{name:"default"}]};const os=M({props:{fixed:{type:Boolean},sectioned:{type:Boolean},height:null},emits:["scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=o.height?{height:o.height,maxHeight:o.height}:void 0,s=p(()=>F(tt.Pane,o.fixed&&tt["Pane-fixed"]));return(r,u)=>t.fixed?(l(),d("div",{key:0,style:Fe(a(i)),class:c(a(s))},[t.sectioned?(l(),L(a(Mo),{key:0},{default:y(()=>[f(r.$slots,"default")]),_:3})):f(r.$slots,"default",{key:1})],6)):(l(),L(a(Ft),{key:1,shadow:"",style:Fe(a(i)),class:c(a(s)),onScrolledToBottom:u[0]||(u[0]=m=>n("scrolled-to-bottom"))},{default:y(()=>[t.sectioned?(l(),L(a(Mo),{key:0},{default:y(()=>[f(r.$slots,"default")]),_:3})):f(r.$slots,"default",{key:1})]),_:3},8,["style","class"]))}});os.__docgenInfo={exportName:"default",displayName:"Pane",description:"",tags:{},props:[{name:"fixed",required:!1,type:{name:"boolean"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"height",description:"Sets a fixed height and max-height on the Scrollable",required:!1,type:{name:"string"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};const TT=["id","tabIndex"],ST={inheritAttrs:!1},Pp=M(_(v({},ST),{props:{fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},preferredPosition:{default:"below"},preferredAlignment:{default:"center"},active:{type:Boolean},id:null,zIndexOverride:{default:void 0},activator:null,preferInputActivator:{default:!0},sectioned:{type:Boolean},fixed:{type:Boolean},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=C(wt.Exited),s=C(null),r=C(null),u=C(null),m=C({}),x=W=>{i.value=W,s.value&&s.value.getBoundingClientRect()},b=()=>{r.value&&window.clearTimeout(r.value),u.value&&window.clearTimeout(u.value)};Ee(()=>o.active,()=>{const W=o.active?wt.Entering:wt.Exiting,Z=o.active?wt.Entered:wt.Exited;x(W),b();const $=window.setTimeout(()=>{i.value=Z},parseInt(Ri.motion["duration-100"],10));o.active?r.value=$:u.value=$});const g=p(()=>F(tt.PopoverOverlay,i.value===wt.Entering&&tt["PopoverOverlay-entering"],i.value===wt.Entered&&tt["PopoverOverlay-open"],i.value===wt.Exiting&&tt["PopoverOverlay-exiting"])),h=p(()=>F(tt.Content,o.fullHeight&&tt["Content-fullHeight"],o.fluidContent&&tt["Content-fluidContent"])),T=()=>{n("close",na.ScrollOut)},k=()=>{n("close",na.EscapeKeypress)},N=W=>{const Z=W.target,$=s.value&&Su(s.value,Z),z=Su(o.activator,Z);$||z||i.value!==wt.Entered||n("close",na.Click)},I=()=>{n("close",na.FocusOut)},D=()=>{n("close",na.FocusOut)},E=W=>{m.value={desiredHeight:`${W.height}px`}},R=()=>{o.autofocusTarget==="none"||!s.value||requestAnimationFrame(()=>{if(s.value){const W=Zr(s.value);W&&o.autofocusTarget==="first-node"?W.focus():s.value.focus()}})};return Se(()=>{o.active&&(R(),x(wt.Entered))}),pt(()=>{b()}),(W,Z)=>(l(),L(a(ac),{id:t.id,fullWidth:t.fullWidth,active:t.active,activator:t.activator,classNames:a(g),preferInputActivator:t.preferInputActivator,fixed:t.fixed,preferredPosition:t.preferredPosition,preferredAlignment:t.preferredAlignment,zIndexOverride:t.zIndexOverride,onScrollOut:T,onChangeContentStyles:E},{default:y(()=>[S("div",{class:c(a(tt).FocusTracker),tabIndex:"0",onFocus:I},null,34),A(a(Yt),{"color-scheme":t.colorScheme},{default:y(()=>[S("div",{class:c(a(tt).Wrapper)},[S("div",{id:t.id,tabIndex:t.autofocusTarget==="none"?void 0:-1,style:Fe(m.value),class:c(a(h)),ref_key:"contentRef",ref:s},[f(W.$slots,"extra-content"),A(a(os),{sectioned:t.sectioned,fixed:t.fixed,onScrolledToBottom:Z[0]||(Z[0]=$=>W.$emit("scrolled-to-bottom"))},{default:y(()=>[f(W.$slots,"overlay")]),_:3},8,["sectioned","fixed"])],14,TT)],2),S("div",{class:c(a(tt).FocusTracker),tabIndex:"0",onFocus:D},null,34),A(a(nt),{event:"click",handler:N}),A(a(nt),{event:"touchstart",handler:N}),A(a(vt),{keyCode:a(ze).Escape,handler:k},null,8,["keyCode"])]),_:3},8,["color-scheme"])]),_:3},8,["id","fullWidth","active","activator","classNames","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride"]))}}));Pp.__docgenInfo={exportName:"default",displayName:"PopoverOverlay",description:"",tags:{},props:[{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"fluidContent",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"preferredAlignment",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'center'"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"colorScheme",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"scrolled-to-bottom"},{name:"close",type:{names:["PopoverCloseSource"]}}],slots:[{name:"extra-content"},{name:"overlay"}]};const CT=["data-portal-id"],AT={inheritAttrs:!1},Fo=M(_(v({},AT),{props:{idPrefix:{type:String,default:""}},setup(t){const n=t,o=ve("portalManager",new kp),i=C(""),{useUniqueId:s}=De();return Se(()=>{const r=s("portal");i.value=n.idPrefix?`${n.idPrefix}-${r}`:r,o&&o.register(i.value)}),(r,u)=>a(o)?(l(),L(Qg,{key:0,to:"#PolarisPortalsContainer"},[S("div",{"data-portal-id":i.value},[f(r.$slots,"default")],8,CT)])):w("",!0)}}));Fo.__docgenInfo={exportName:"default",displayName:"Portal",description:"",tags:{},props:[{name:"idPrefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}]};const kT={inheritAttrs:!1},Qe=M(_(v({},kT),{props:{preferredPosition:{default:void 0},preferredAlignment:{default:void 0},active:{type:Boolean},preferInputActivator:{default:!0},activatorWrapper:{default:"div"},zIndexOverride:{default:void 0},preventFocusOnClose:{type:Boolean},sectioned:{type:Boolean},fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},fixed:{type:Boolean},ariaHaspopup:{default:void 0},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(t,{emit:n}){const o=t,i=C(null),s=C(null),{useUniqueId:r}=De();Kt();const u=C(r("popover")),m=()=>{if(i.value){const g=i.value,T=hr(g)||g,k="disabled"in T&&Boolean(T.disabled);zx(T,{id:u.value,active:o.active,ariaHaspopup:o.ariaHaspopup,activatorDisabled:k})}};Ee(()=>o.active,()=>m());const x=g=>{let{parentElement:h}=g;for(;h;){if(h.matches(np.selector))return!1;h=h.parentElement}return!0},b=g=>{if(n("close",g),!(!i.value||o.preventFocusOnClose)&&(g===na.FocusOut||g===na.EscapeKeypress)&&s.value){const h=hr(s.value)||hr(i.value)||i.value;Zh(h,x)||h.focus()}};return Se(()=>{if(i.value){const g=i.value.firstElementChild;g&&(s.value=g),m()}}),(g,h)=>(l(),L(Oe(t.activatorWrapper),{ref_key:"container",ref:i},{default:y(()=>[f(g.$slots,"activator"),s.value&&t.active?(l(),L(a(Fo),{key:0,idPrefix:"popover"},{default:y(()=>[A(a(Pp),{id:u.value,activator:s.value,fullWidth:t.fullWidth,active:t.active,preferInputActivator:t.preferInputActivator,fixed:t.fixed,preferredPosition:t.preferredPosition,preferredAlignment:t.preferredAlignment,zIndexOverride:t.zIndexOverride,autofocusTarget:t.autofocusTarget,sectioned:t.sectioned,colorScheme:t.colorScheme,onClose:b,onScrolledToBottom:h[0]||(h[0]=T=>n("scrolled-to-bottom"))},{overlay:y(T=>[f(g.$slots,"content")]),"extra-content":y(()=>[f(g.$slots,"extra-content")]),_:3},8,["id","activator","fullWidth","active","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride","autofocusTarget","sectioned","colorScheme"])]),_:3})):w("",!0)]),_:3},512))}}));Qe.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"preferredPosition",description:"The preferred direction to open the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Show or hide the Popover",required:!0,type:{name:"boolean"}},{name:"preferInputActivator",description:"Use the activator's input element to calculate the Popover position",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"activatorWrapper",description:"The element type to wrap the activator with",tags:{default:[{description:"'div'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"zIndexOverride",description:"Override on the default z-index of 400",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"preventFocusOnClose",description:`Prevents focusing the activator or the next focusable element
when the popover is deactivated`,required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically add wrap content in a section",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow popover to stretch to the full width of its activator",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Allow popover to stretch to fit content vertically",required:!1,type:{name:"boolean"}},{name:"fluidContent",description:"Allow popover content to determine the overlay width and height",required:!1,type:{name:"boolean"}},{name:"fixed",description:"Remains in a fixed position",required:!1,type:{name:"boolean"}},{name:"ariaHaspopup",description:"Used to illustrate the type of popover element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnPrint",description:"Allow the popover overlay to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",tags:{default:[{description:"'container'",title:"default"}]},required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"close",type:{names:["PopoverCloseSource"]}},{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"content"},{name:"extra-content"}]};const LT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},NT=S("path",{d:"M7.676 9h4.648c.563 0 .879-.603.53-1.014L10.531 5.24a.708.708 0 0 0-1.062 0L7.145 7.986C6.798 8.397 7.113 9 7.676 9zm4.648 2H7.676c-.563 0-.878.603-.53 1.014l2.323 2.746c.27.32.792.32 1.062 0l2.323-2.746c.349-.411.033-1.014-.53-1.014z"},null,-1),wT=[NT];function PT(t,n){return l(),d("svg",LT,wT)}var Mp={render:PT};const MT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},_T=S("path",{d:"M6.902 12h6.196c.751 0 1.172-.754.708-1.268L10.708 7.3c-.36-.399-1.055-.399-1.416 0l-3.098 3.433C5.73 11.246 6.151 12 6.902 12z"},null,-1),IT=[_T];function BT(t,n){return l(),d("svg",MT,IT)}var _p={render:BT};const DT=["role","type","disabled","aria-busy","aria-controls","aria-expanded","aria-describedby","aria-pressed"],$T={inheritAttrs:!1},is=M(_(v({},$T),{props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,others:null},setup(t){const n=t,o=Kt(),i=x=>{const b={mouseup:Ct};for(const g of x){const h=`on${tc(g)}`;o[h]&&(b[g]=o[h])}return b},s=i(["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"]),r=i(["blur","click","focus","mouseover","touchstart"]),u=p(()=>({id:n.id,class:o.class,"aria-label":n.accessibilityLabel})),m=p(()=>_(v(v({},u.value),n.others),{role:n.role}));return(x,b)=>t.url&&t.disabled?(l(),d("a",at(me({key:0},a(u))),[f(x.$slots,"default")],16)):t.url&&!t.disabled?(l(),L(a(Tt),me({key:1},a(m),{url:t.url,external:t.external,download:t.download},Po(a(r))),{default:y(()=>[f(x.$slots,"default")]),_:3},16,["url","external","download"])):(l(),d("button",me({key:2},a(u),{role:t.role,type:t.submit?"submit":"button",disabled:t.disabled,"aria-busy":t.loading?!0:void 0,"aria-controls":t.ariaControls,"aria-expanded":t.ariaExpanded,"aria-describedby":t.ariaDescribedBy,"aria-pressed":t.pressed},Po(a(s))),[f(x.$slots,"default")],16,DT))}}));is.__docgenInfo={exportName:"default",displayName:"UnstyledButton",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"others",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"default"}]};const Ip=M({props:{action:null,overrides:null,keyProp:null},setup(t){const n=t,o=p(()=>{const u=n.action,{content:i,onAction:s}=u,r=J(u,["content","onAction"]);return v(v({},r),n.overrides)});return(i,s)=>(l(),L(is,me({key:t.keyProp},a(o),{onClick:t.action.onAction}),{default:y(()=>[ie(U(t.action.content),1)]),_:1},16,["onClick"]))}});Ip.__docgenInfo={exportName:"default",displayName:"UnstyledButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"UnstyledButtonProps"}]}},{name:"keyProp",required:!1,type:{name:"any"}}]};const FT={viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},ET=S("path",{d:"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"},null,-1),OT=[ET];function qT(t,n){return l(),d("svg",FT,OT)}var RT={render:qT};const VT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},HT=S("path",{d:"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"},null,-1),UT=[HT];function jT(t,n){return l(),d("svg",VT,UT)}var WT={render:jT};const zT="Polaris-Spinner",GT="Polaris-Spinner--sizeSmall",XT="Polaris-Spinner--sizeLarge";var Cu={Spinner:zT,sizeSmall:GT,sizeLarge:XT};const Gt=M({props:{size:{type:String,default:"large"},accessibilityLabel:{type:String,default:null},hasFocusableParent:{type:Boolean}},setup(t){const n=t,o=C(v({},!n.hasFocusableParent&&{role:"status"})),i=p(()=>{const s=Ne("size",n.size);return F(Cu.Spinner,n.size&&Cu[s])});return(s,r)=>(l(),d("div",null,[S("span",{class:c(a(i))},[t.size==="large"?(l(),L(a(RT),{key:0})):(l(),L(a(WT),{key:1}))],2),S("span",at(Mt(o.value)),[A(a(lt),null,{default:y(()=>[S("span",null,U(t.accessibilityLabel),1)]),_:1})],16)]))}});Gt.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size of the spinner",tags:{},values:["small | large"],type:{name:"String as () => Size"},defaultValue:{func:!1,value:"'large'"}},{name:"accessibilityLabel",description:"Accessible label for the spinner",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasFocusableParent",description:"Allows the component to apply the correct accessibility roles based on focus",type:{name:"boolean"}}]};const KT={inheritAttrs:!1},Or=M(_(v({},KT),{props:{commonProps:null,linkProps:null,actionProps:null,removeUnderline:null,children:{type:Boolean},disclosure:null,loading:null,icon:null},setup(t){const n=t,o=Kt(),i=p(()=>{const m=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],x={};for(const b of m){const g=`on${tc(b)}`;o[g]&&(x[b]=o[g])}return x}),s=p(()=>F(Ae.Icon,n.loading&&Ae.hidden)),r=p(()=>F(Ae.Text,n.removeUnderline&&Ae.removeUnderline)),u=p(()=>n.disclosure==="select"?Mp:n.disclosure==="up"?_p:fa);return(m,x)=>(l(),L(a(is),me(v(v(v({},t.commonProps),t.linkProps),t.actionProps),Po(a(i))),{default:y(()=>[S("span",{class:c(a(Ae).Content)},[t.loading?(l(),d("span",{key:0,class:c(a(Ae).Spinner)},[A(a(Gt),{size:"small",accessibilityLabel:"Loading"})],2)):w("",!0),t.icon?(l(),d("span",{key:1,class:c(a(s))},[A(a(re),{source:t.loading?"placeholder":t.icon},null,8,["source"])],2)):w("",!0),t.children?(l(),d("span",{class:c(a(r)),key:t.actionProps&&t.actionProps.disabled?"text-disabled":"text"},[f(m.$slots,"default")],2)):w("",!0),t.disclosure?(l(),d("span",{key:3,class:c(a(Ae).Icon)},[S("div",null,[A(a(re),{source:t.loading?"placeholder":a(u)},null,8,["source"])])],2)):w("",!0)],2)]),_:3},16))}}));Or.__docgenInfo={exportName:"default",displayName:"ButtonMarkup",description:"",tags:{},props:[{name:"commonProps",required:!1,type:{name:"CommonButtonProps"}},{name:"linkProps",required:!1,type:{name:"LinkButtonProps"}},{name:"actionProps",required:!1,type:{name:"ActionButtonProps"}},{name:"removeUnderline",required:!1,type:{name:"TSIndexedAccessType"}},{name:"children",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"TSIndexedAccessType"}},{name:"loading",required:!1,type:{name:"TSIndexedAccessType"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}]};const YT=["disabled","aria-label","aria-describedby"],ZT={inheritAttrs:!1},he=M(_(v({},ZT),{props:{id:null,url:{default:""},external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:{default:"medium"},textAlign:{default:void 0},outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean],default:void 0},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},setup(t){const n=t,o=ue(),i=Kt(),s=p(()=>{const D=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],E={};for(const R of D){const W=`on${tc(R)}`;i[W]&&(E[R]=i[W])}return E}),r=!!o.default,u=C(!1),m=p(()=>n.disabled||n.loading),x=p(()=>{const D=n.textAlign&&Ne("textAlign",n.textAlign),E=n.size&&Ne("size",n.size);return F(Ae.Button,n.primary&&Ae.primary,n.outline&&Ae.outline,n.destructive&&Ae.destructive,m.value&&Ae.disabled,n.loading&&Ae.loading,n.plain&&Ae.plain,n.pressed&&!n.disabled&&!n.url&&Ae.pressed,n.monochrome&&Ae.monochrome,n.size!=="medium"&&E&&Ae[E],D&&Ae[D],n.fullWidth&&Ae.fullWidth,n.icon&&!r&&Ae.iconOnly,n.connectedDisclosure&&Ae.connectedDisclosure,n.removeUnderline&&Ae.removeUnderline)}),b=p(()=>{const D=n.textAlign&&Ne("textAlign",n.textAlign),E=n.size&&Ne("size",n.size);return F(Ae.Button,n.primary&&Ae.primary,n.outline&&Ae.outline,n.size!=="medium"&&E&&Ae[E],D&&Ae[D],n.destructive&&Ae.destructive,n.connectedDisclosure&&n.connectedDisclosure.disabled&&Ae.disabled,Ae.iconOnly,Ae.ConnectedDisclosure,n.monochrome&&Ae.monochrome)}),g=p(()=>{const{id:D,accessibilityLabel:E,role:R,ariaDescribedBy:W}=n;return{id:D,class:x.value,accessibilityLabel:E,role:R,ariaDescribedBy:W}}),h=p(()=>{const{url:D,external:E,download:R}=n;return{url:D,external:E,download:R}}),T=p(()=>{const{submit:D,loading:E,pressed:R}=n;return{submit:D,loading:E,pressed:R,disabled:m.value}}),k=p(()=>{const{removeUnderline:D,disclosure:E,loading:R,icon:W}=n;return{commonProps:g.value,linkProps:h.value,actionProps:T.value,removeUnderline:D,children:r,disclosure:E,loading:R,icon:W}}),N=p(()=>{if(n.connectedDisclosure){const{disabled:D,accessibilityLabel:E="Related actions"}=n.connectedDisclosure;return{disabled:D,disclosureLabel:E}}return{}}),I=()=>{u.value=!u.value};return(D,E)=>t.connectedDisclosure?(l(),d("div",{key:0,class:c(a(Ae).ConnectedDisclosureWrapper)},[A(Or,me(a(k),Po(a(s))),{default:y(()=>[f(D.$slots,"default")]),_:3},16),A(a(Qe),{active:u.value,preferredAlignment:"right",onClose:I},{activator:y(()=>[S("button",{type:"button",class:c(a(b)),disabled:a(N).disabled,"aria-label":a(N).disclosureLabel,"aria-describedby":t.ariaDescribedBy,onClick:I,onMouseup:E[0]||(E[0]=(...R)=>a(Ct)&&a(Ct)(...R))},[S("span",null,[A(a(re),{source:a(fa)},null,8,["source"])])],42,YT)]),content:y(()=>[A(a(Ze),{items:t.connectedDisclosure.actions,onActionAnyItem:I},Ue({_:2},[ge(t.connectedDisclosure.actions,({prefixId:R})=>({name:`prefix-${R}`,fn:y(()=>[f(D.$slots,`prefix-${R}`)])})),ge(t.connectedDisclosure.actions,({suffixId:R})=>({name:`suffix-${R}`,fn:y(()=>[f(D.$slots,`suffix-${R}`)])}))]),1032,["items"])]),_:3},8,["active"])],2)):(l(),L(Or,me({key:1},a(k),Po(a(s))),{default:y(()=>[f(D.$slots,"default")]),_:3},16))}}));he.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the button",required:!1,type:{name:"string"}},{name:"url",description:"A destination to link to, rendered in the href attribute of a link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"external",description:"Forces url to open in a new tab",required:!1,type:{name:"boolean"}},{name:"download",description:`Tells the browser to download the url instead of opening it.
Provides a hint for the downloaded filename if it is a string value`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",description:"Allows the button to submit a form",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables the button, disallowing merchant interaction",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces button text with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"pressed",description:"Sets the button in a pressed state",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to define the semantic value of this element",required:!1,type:{name:"string"}},{name:"ariaControls",description:"Id of the element the button controls",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Tells screen reader the controlled element is expanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the button",required:!1,type:{name:"string"}},{name:"primary",description:"Provides extra visual weight and identifies the primary action in a set of buttons",required:!1,type:{name:"boolean"}},{name:"destructive",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"size",description:"Changes the size of the button, giving it more or less padding",tags:{values:[{description:"slim | medium | large",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textAlign",description:"Changes the inner text alignment of the button",tags:{values:[{description:"left | center | right",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:`Gives the button a subtle alternative to the default button styling,
appropriate for certain backdrops`,required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"disclosure",description:"Displays the button with a disclosure icon. Defaults to `down` when set to true",tags:{values:[{description:"down | up | select | boolean",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Renders a button that looks like a link",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes plain and outline Button colors (text, borders, icons) the same as the current text color\nAlso adds an underline to `plain` Buttons",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes underline from button text (including on interaction)when monochrome and plain are true",required:!1,type:{name:"boolean"}},{name:"icon",description:"Icon to display to the left of the button content.",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",description:"Disclosure button connected right of the button. Toggles a popover action list.",required:!1,type:{name:"ConnectedDisclosure"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const QT={inheritAttrs:!1},st=M(_(v({},QT),{props:{action:null,overrides:{default:()=>({})}},setup(t){const n=t,o=()=>{n.action&&n.action.onAction&&n.action.onAction()},i=p(()=>{if(!n.action)return{};const m=n.action,{onAction:s,content:r}=m,u=J(m,["onAction","content"]);return v(v({},u),n.overrides)});return(s,r)=>t.action?(l(),L(a(he),me({key:0},a(i),{onClick:o}),{default:y(()=>[ie(U(t.action.content),1)]),_:1},16)):w("",!0)}}));st.__docgenInfo={exportName:"default",displayName:"ButtonFrom",description:"",tags:{},props:[{name:"action",required:!1,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"ButtonProps"}]},defaultValue:{func:!1,value:"() => ({})"}}]};const JT="Polaris-ButtonGroup",eS="Polaris-ButtonGroup__Item",tS="Polaris-ButtonGroup--segmented",aS="Polaris-ButtonGroup--fullWidth",nS="Polaris-ButtonGroup--extraTight",oS="Polaris-ButtonGroup--tight",iS="Polaris-ButtonGroup--loose";var va={ButtonGroup:JT,Item:eS,"Item-plain":"Polaris-ButtonGroup__Item--plain",segmented:tS,"Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:aS,extraTight:nS,tight:oS,loose:iS};const sS={inheritAttrs:!1},Bp=M(_(v({},sS),{setup(t){const n=C(!1),o=ue(),i=p(()=>o.default&&o.default()[0].props),s=p(()=>{const m=i.value&&(i.value.plain===""||i.value.plain);return F(va.Item,n.value&&va["Item-focused"],m&&va["Item-plain"])}),r=()=>{n.value=!0},u=()=>{n.value=!1};return(m,x)=>(l(),d("div",{class:c(a(s)),onFocus:r,onBlur:u},[f(m.$slots,"default")],34))}}));Bp.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const lS=["data-buttongroup-segmented","data-buttongroup-connected-top","data-buttongroup-full-width"],rS={inheritAttrs:!1},ot=M(_(v({},rS),{props:{spacing:null,segmented:{type:Boolean},fullWidth:{type:Boolean},connectedTop:{type:Boolean}},setup(t){const n=t,o=ue(),i=p(()=>{const r=[];return o.default&&o.default().map(u=>{const m=u.children;typeof m=="string"&&m==="v-if"||(u.type.toString()==="Symbol(Fragment)"||u.type.toString()==="Symbol()"?m.forEach(x=>{r.push(x)}):r.push(u))}),r}),s=p(()=>F(va.ButtonGroup,n.spacing&&va[n.spacing],n.segmented&&va.segmented,n.fullWidth&&va.fullWidth));return(r,u)=>(l(),d("div",{class:c(a(s)),"data-buttongroup-segmented":t.segmented,"data-buttongroup-connected-top":t.connectedTop,"data-buttongroup-full-width":t.fullWidth},[(l(!0),d(K,null,ge(a(i),(m,x)=>(l(),L(a(Bp),{key:x},{default:y(()=>[(l(),L(Oe(m)))]),_:2},1024))),128))],10,lS))}}));ot.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"spacing",description:"Determines the space between button group items",required:!1,type:{name:"Spacing"}},{name:"segmented",description:"Join buttons as segmented group",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Buttons will stretch/shrink to occupy the full width",required:!1,type:{name:"boolean"}},{name:"connectedTop",description:"Remove top left and right border radius",required:!1,type:{name:"boolean"}}]};const cS="Polaris-Caption";var uS={Caption:cS};const sa=M({setup(t){return(n,o)=>(l(),d("p",{class:c(a(uS).Caption)},[f(n.$slots,"default")],2))}});sa.__docgenInfo={exportName:"default",displayName:"Caption",description:"",tags:{},slots:[{name:"default"}]};const dS="Polaris-Card",pS="Polaris-Card--subdued",mS="Polaris-Card--hideOnPrint",yS="Polaris-Card__Header",gS="Polaris-Card__Section",hS="Polaris-Card__SectionHeader",bS="Polaris-Card__Subsection",fS="Polaris-Card__Footer",vS="Polaris-Card__LeftJustified";var ft={Card:dS,subdued:pS,"Section-hideOnPrint":"Polaris-Card__Section--hideOnPrint",hideOnPrint:mS,Header:yS,Section:gS,"Section-fullWidth":"Polaris-Card__Section--fullWidth","Section-flush":"Polaris-Card__Section--flush","Section-subdued":"Polaris-Card__Section--subdued",SectionHeader:hS,Subsection:bS,Footer:fS,LeftJustified:vS};const ss=M({props:{actions:null},setup(t){const n=ue(),o=p(()=>{var i,s,r,u,m;return n.title&&n.title().length===1?((i=n.title()[0])==null?void 0:i.type.toString())==="Symbol(Text)"||((s=n.title()[0])==null?void 0:s.type.toString())==="Symbol()"?!0:n.title()[0].children&&((r=n.title()[0].children)==null?void 0:r.length)===1&&(((u=n.title()[0].children)==null?void 0:u[0].type.toString())==="Symbol(Text)"||((m=n.title()[0].children)==null?void 0:m[0].type.toString())==="Symbol()"):!1});return(i,s)=>(l(),d("div",{class:c(a(ft).Header)},[a(n).default||t.actions?(l(),L(a(Ve),{key:0,alignment:"baseline",noItemWrap:""},{default:y(()=>[A(a(xt),{fill:!0},{default:y(()=>[a(o)?(l(),L(a($t),{key:1},{default:y(()=>[f(i.$slots,"title")]),_:3})):f(i.$slots,"title",{key:0})]),_:3}),t.actions?(l(),L(a(xt),{key:0},{default:y(()=>[A(a(ot),null,{default:y(()=>[(l(!0),d(K,null,ge(t.actions,(r,u)=>(l(),L(a(st),{key:u,action:r,overrides:{plain:!0}},null,8,["action"]))),128))]),_:1})]),_:1})):w("",!0),a(n).default?(l(),L(a(xt),{key:1},{default:y(()=>[f(i.$slots,"default")]),_:3})):w("",!0)]),_:3})):(l(),d(K,{key:1},[a(o)?(l(),L(a($t),{key:1},{default:y(()=>[f(i.$slots,"title")]),_:3})):f(i.$slots,"title",{key:0})],64))],2))}});ss.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}}],slots:[{name:"title"},{name:"default"}]};const Aa=M({props:{title:null,subdued:{type:Boolean},flush:{type:Boolean},fullWidth:{type:Boolean},hideOnPrint:{type:Boolean},actions:null},setup(t){const n=t,o=ue(),i=p(()=>F(ft.Section,n.flush&&ft["Section-flush"],n.subdued&&ft["Section-subdued"],n.fullWidth&&ft["Section-fullWidth"],n.hideOnPrint&&ft["Section-hideOnPrint"])),s=p(()=>{var r,u,m,x,b;return o.title&&o.title().length===1?((r=o.title()[0])==null?void 0:r.type.toString())==="Symbol(Text)"||((u=o.title()[0])==null?void 0:u.type.toString())==="Symbol()"?!0:o.title()[0].children&&((m=o.title()[0].children)==null?void 0:m.length)===1&&(((x=o.title()[0].children)==null?void 0:x[0].type.toString())==="Symbol(Text)"||((b=o.title()[0].children)==null?void 0:b[0].type.toString())==="Symbol()"):!0});return(r,u)=>(l(),d("div",{class:c(a(i))},[t.title||a(xe)(a(o).title)||t.actions?(l(),d("div",{key:0,class:c(a(ft).SectionHeader)},[t.actions?(l(),L(a(Ve),{key:0,noItemWrap:"",alignment:"baseline"},{default:y(()=>[A(a(xt),{fill:""},{default:y(()=>[a(s)?(l(),L(a(la),{key:1},{default:y(()=>[a(xe)(a(o).title)?f(r.$slots,"title",{key:0}):(l(),d(K,{key:1},[ie(U(t.title),1)],64))]),_:3})):f(r.$slots,"title",{key:0})]),_:3}),A(a(ot),null,{default:y(()=>[(l(!0),d(K,null,ge(t.actions,(m,x)=>(l(),L(a(st),{key:x,index:x,action:m,overrides:{plain:!0}},null,8,["index","action"]))),128))]),_:1})]),_:3})):(l(),d(K,{key:1},[a(s)?(l(),L(a(la),{key:1},{default:y(()=>[a(xe)(a(o).title)?f(r.$slots,"title",{key:0}):(l(),d(K,{key:1},[ie(U(t.title),1)],64))]),_:3})):f(r.$slots,"title",{key:0})],64))],2)):w("",!0),f(r.$slots,"default")],2))}});Aa.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subdued",required:!1,type:{name:"boolean"}},{name:"flush",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"title"},{name:"default"}]};const Dp=M({setup(t){return(n,o)=>(l(),d("div",{class:c(a(ft).Subsection)},[f(n.$slots,"default")],2))}});Dp.__docgenInfo={exportName:"default",displayName:"Subsection",description:"",tags:{},slots:[{name:"default"}]};const Je=M({props:{title:null,subdued:{type:Boolean},sectioned:{type:Boolean},actions:null,primaryFooterAction:null,secondaryFooterActions:null,secondaryFooterActionsDisclosureText:null,footerActionAlignment:{default:"right"},hideOnPrint:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=ue(),s=C(!1),r=()=>{s.value=!s.value},u=p(()=>F(ft.Card,n.subdued&&ft.subdued,n.hideOnPrint&&ft.hideOnPrint)),m=p(()=>F(ft.Footer,n.footerActionAlignment==="left"&&ft.LeftJustified));return Xe("WithinContentContext",!1),(x,b)=>(l(),d("div",{class:c(a(u))},[t.title||a(xe)(a(i).title)||t.actions?(l(),L(a(ss),{key:0,actions:t.actions},{title:y(()=>[a(xe)(a(i).title)?f(x.$slots,"title",{key:0}):(l(),d(K,{key:1},[ie(U(t.title),1)],64))]),_:3},8,["actions"])):w("",!0),t.sectioned?(l(),L(a(Aa),{key:1},{default:y(()=>[f(x.$slots,"default")]),_:3})):f(x.$slots,"default",{key:2}),t.primaryFooterAction||t.secondaryFooterActions&&t.secondaryFooterActions.length?(l(),d("div",{key:3,class:c(a(m))},[t.footerActionAlignment==="right"?(l(),L(a(ot),{key:0},{default:y(()=>[t.secondaryFooterActions&&t.secondaryFooterActions.length===1?(l(),L(a(st),{key:0,action:t.secondaryFooterActions[0]},null,8,["action"])):t.secondaryFooterActions&&t.secondaryFooterActions.length>1?(l(),L(a(Qe),{key:1,active:s.value,onClose:r},{activator:y(()=>[A(a(he),{disclosure:!0,onClick:r},{default:y(()=>[ie(U(t.secondaryFooterActionsDisclosureText||a(o).Polaris.Common.more),1)]),_:1})]),content:y(()=>[A(a(Ze),{items:t.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):w("",!0),t.primaryFooterAction?(l(),L(a(st),{key:2,action:t.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):w("",!0)]),_:1})):(l(),L(a(ot),{key:1},{default:y(()=>[t.primaryFooterAction?(l(),L(a(st),{key:0,action:t.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):w("",!0),t.secondaryFooterActions&&t.secondaryFooterActions.length===1?(l(),L(a(st),{key:1,action:t.secondaryFooterActions[0]},null,8,["action"])):t.secondaryFooterActions&&t.secondaryFooterActions.length>1?(l(),L(a(Qe),{key:2,active:s.value,onClose:r},{activator:y(()=>[A(a(he),{disclosure:"",onClick:r},{default:y(()=>[ie(U(t.secondaryFooterActionsDisclosureText||a(o).Polaris.Common.more),1)]),_:1})]),content:y(()=>[A(a(Ze),{items:t.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):w("",!0)]),_:1}))],2)):w("",!0)],2))}});Je.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",description:"Title content for the card *",required:!1,type:{name:"string"}},{name:"subdued",description:"A less prominent card",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Auto wrap content in section",required:!1,type:{name:"boolean"}},{name:"actions",description:"Card header actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}},{name:"primaryFooterAction",description:"Primary action in the card footer",required:!1,type:{name:"ComplexAction"}},{name:"secondaryFooterActions",description:"Secondary actions in the card footer",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}},{name:"secondaryFooterActionsDisclosureText",description:"The content of the disclosure button rendered when there is more than one secondary footer action",required:!1,type:{name:"string"}},{name:"footerActionAlignment",description:"Alignment of the footer actions on the card, defaults to right",required:!1,type:{name:"union",elements:[{name:'"right"'},{name:'"left"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const xS="Polaris-Checkbox",TS="Polaris-Checkbox__Input",SS="Polaris-Checkbox--keyFocused",CS="Polaris-Checkbox__Backdrop",AS="Polaris-Checkbox__Icon",kS="Polaris-Checkbox--hover",LS="Polaris-Checkbox--error";var ea={Checkbox:xS,Input:TS,keyFocused:SS,Backdrop:CS,"Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:AS,hover:kS,error:LS};const nc=t=>`${t}Error`,NS="Polaris-Choice",wS="Polaris-Choice--labelHidden",PS="Polaris-Choice__Label",MS="Polaris-Choice__Control",_S="Polaris-Choice--disabled",IS="Polaris-Choice__Descriptions",BS="Polaris-Choice__HelpText";var Ht={Choice:NS,labelHidden:wS,Label:PS,Control:MS,disabled:_S,Descriptions:IS,HelpText:BS};const oc=t=>`${t}HelpText`,DS="Polaris-InlineError",$S="Polaris-InlineError__Icon";var Au={InlineError:DS,Icon:$S};const FS=["id"],ES={key:1},ka=M({props:{message:null,fieldID:null},setup(t){return(n,o)=>t.message?(l(),d("div",{key:0,id:a(nc)(t.fieldID),class:c(a(Au).InlineError)},[S("div",{class:c(a(Au).Icon)},[A(a(re),{source:a(Jg)},null,8,["source"])],2),typeof t.message=="object"?(l(),L(Oe(t.message),{key:0})):(l(),d("div",ES,U(t.message),1))],10,FS)):w("",!0)}});ka.__docgenInfo={exportName:"default",displayName:"InlineError",description:"",tags:{},props:[{name:"message",description:"Content briefly explaining how to resolve the invalid form field input.",required:!0,type:{name:"ErrorType"}},{name:"fieldID",description:"Unique identifier of the invalid form field that the message describes",required:!0,type:{name:"string"}}]};const OS={key:0},qS=["id"],ic=M({props:{id:null,disabled:{type:Boolean},error:null,labelHidden:{type:Boolean}},setup(t){const n=t,o=p(()=>F(Ht.Choice,n.labelHidden&&Ht.labelHidden,n.disabled&&Ht.disabled));return(i,s)=>t.error&&typeof t.error!="boolean"||i.$slots["help-text"]?(l(),d("div",OS,[S("label",{class:c(a(o)),onClick:s[0]||(s[0]=r=>i.$emit("click")),onMouseover:s[1]||(s[1]=r=>i.$emit("mouseover")),onMouseout:s[2]||(s[2]=r=>i.$emit("mouseout"))},[S("span",{class:c(a(Ht).Control)},[f(i.$slots,"default")],2),S("span",{class:c(a(Ht).Label)},[f(i.$slots,"label")],2)],34),S("div",{class:c(a(Ht).Descriptions)},[i.$slots["help-text"]?(l(),d("div",{key:0,id:a(oc)(t.id),class:c(a(Ht).HelpText)},[f(i.$slots,"help-text")],10,qS)):w("",!0),t.error&&typeof t.error!="boolean"?(l(),L(a(ka),{key:1,fieldID:t.id,message:t.error},null,8,["fieldID","message"])):w("",!0)],2)])):(l(),d("label",{key:1,class:c(a(o)),onClick:s[3]||(s[3]=r=>i.$emit("click")),onMouseover:s[4]||(s[4]=r=>i.$emit("mouseover")),onMouseout:s[5]||(s[5]=r=>i.$emit("mouseout"))},[S("span",{class:c(a(Ht).Control)},[f(i.$slots,"default")],2),S("span",{class:c(a(Ht).Label)},[f(i.$slots,"label")],2)],34))}});ic.__docgenInfo={exportName:"default",displayName:"Choice",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the choice",required:!0,type:{name:"string"}},{name:"disabled",description:"Whether the associated form control is disabled",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"mouseover"},{name:"mouseout"}],slots:[{name:"default"},{name:"label"},{name:"help-text"}]};const RS=["id","role","name","value","checked","disabled","aria-invalid","aria-controls","aria-describedby"],La=M({props:{ariaControls:null,ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},id:null,name:null,value:{type:[String,Boolean]},modelValue:{type:[String,Boolean]},error:null},emits:["focus","change","update:modelValue","blur"],setup(t,{emit:n}){const o=t,i=ve("withinListboxContext",!1),s=C(!1),r=C(!1),u=ue(),m=p(()=>{var q;return(q=u["help-text"])==null?void 0:q.call(u)}),{useUniqueId:x}=De(),b=p(()=>x("Checkbox",o.id)),g=p(()=>o.checked==="indeterminate"),h=p(()=>!g.value&&Boolean(o.checked)||typeof o.modelValue=="boolean"&&o.modelValue===!0),T=p(()=>g.value?eh:Yr),k=p(()=>F(ea.Checkbox,o.error&&ea.error)),N=p(()=>F(ea.Backdrop,s.value&&ea.hover)),I=p(()=>F(ea.Input,g.value&&ea["Input-indeterminate"],r.value&&ea.keyFocused)),D=p(()=>g.value?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":h.value}),E=p(()=>{const q=[];return o.ariaDescribedBy&&q.push(o.ariaDescribedBy),o.error&&typeof o.error!="boolean"&&q.push(nc(b.value)),m.value&&q.push(oc(b.value)),q.length?q.join(" "):void 0}),R=()=>{r.value=!0,n("focus")},W=q=>{const j=q.target;n("change",q),n("update:modelValue",j.checked)},Z=()=>{r.value=!1,n("blur")},$=q=>{const{key:j}=q;(j===ze.Space||j===ze.Tab)&&(r.value||(r.value=!0))};function z(q){q.stopPropagation()}return(q,j)=>(l(),L(a(ic),{id:a(b),error:t.error,disabled:t.disabled,labelHidden:t.labelHidden,onMouseover:j[0]||(j[0]=se=>s.value=!0),onMouseout:j[1]||(j[1]=se=>s.value=!1)},Ue({default:y(()=>[S("span",{class:c(a(k))},[S("input",me({id:a(b),role:a(i)?"presentation":"checkbox",name:t.name,value:t.value||t.modelValue,type:"checkbox",checked:a(h),disabled:t.disabled,class:a(I),"aria-invalid":t.error!==null,"aria-controls":t.ariaControls,"aria-describedby":a(E),onFocus:R,onChange:W,onBlur:Z,onKeyup:$},a(D)),null,16,RS),S("span",{class:c(a(N)),onClick:z,onMouseup:z},null,34),S("span",{class:c(a(ea).Icon)},[A(a(re),{source:a(T)},null,8,["source"])],2)],2)]),_:2},[a(u).label?{name:"label",fn:y(()=>[f(q.$slots,"label")])}:void 0,a(u)["help-text"]?{name:"help-text",fn:y(()=>[f(q.$slots,"help-text")])}:void 0]),1032,["id","error","disabled","labelHidden"]))}});La.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"ariaControls",description:"Indicates the ID of the element that is controlled by the checkbox",required:!1,type:{name:"string"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the checkbox",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"indeterminate"'}]}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const VS="Polaris-ChoiceList",HS="Polaris-ChoiceList--titleHidden",US="Polaris-ChoiceList__Title",jS="Polaris-ChoiceList__Choices",WS="Polaris-ChoiceList__ChoiceChildren",zS="Polaris-ChoiceList__ChoiceError";var da={ChoiceList:VS,titleHidden:HS,Title:US,Choices:jS,ChoiceChildren:WS,ChoiceError:zS};const GS="Polaris-RadioButton",XS="Polaris-RadioButton__Input",KS="Polaris-RadioButton--keyFocused",YS="Polaris-RadioButton__Backdrop",ZS="Polaris-RadioButton--hover";var So={RadioButton:GS,Input:XS,keyFocused:KS,Backdrop:YS,hover:ZS};const QS=["id","name","value","checked","disabled","aria-describedby"],Eo=M({props:{ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},id:null,name:null,value:null,modelValue:null},emits:["focus","change","update:modelValue","blur"],setup(t,{emit:n}){const o=t,i=C(!1),s=C(!1),r=ue(),u=p(()=>{var D;return(D=r["help-text"])==null?void 0:D.call(r)}),{useUniqueId:m}=De(),x=p(()=>m("RadioButton",o.id)),b=p(()=>o.checked||o.modelValue===o.value),g=p(()=>F(So.Backdrop,s.value&&So.hover)),h=p(()=>F(So.Input,i.value&&So.keyFocused)),T=p(()=>{const D=[];return o.ariaDescribedBy&&D.push(o.ariaDescribedBy),u.value&&D.push(oc(x.value)),D.length?D.join(" "):void 0}),k=D=>{const E=D.target;n("change",D),n("update:modelValue",E.value)},N=()=>{n("blur"),i.value=!1},I=()=>{i.value||(i.value=!0)};return(D,E)=>(l(),L(a(ic),{id:a(x),disabled:t.disabled,labelHidden:t.labelHidden,onMouseover:E[1]||(E[1]=R=>s.value=!0),onMouseout:E[2]||(E[2]=R=>s.value=!1)},Ue({default:y(()=>[S("span",{class:c(a(So).RadioButton)},[S("input",{id:a(x),name:t.name||a(x),value:t.value,type:"radio",checked:a(b),disabled:t.disabled,class:c(a(h)),"aria-describedby":a(T),onFocus:E[0]||(E[0]=R=>D.$emit("focus")),onChange:k,onBlur:N,onKeyup:I},null,42,QS),S("span",{class:c(a(g))},null,2)],2)]),_:2},[a(r).label?{name:"label",fn:y(()=>[f(D.$slots,"label")])}:void 0,a(r)["help-text"]?{name:"help-text",fn:y(()=>[f(D.$slots,"help-text")])}:void 0]),1032,["id","disabled","labelHidden"]))}});Eo.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the the radio button",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Radio button is selected",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const JS=["id","aria-invalid"],eC=["innerHTML"],Et=M({props:{choices:null,modelValue:null,name:null,allowMultiple:{type:Boolean},titleHidden:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(t,{emit:n}){const o=t,{useUniqueId:i}=De(),s=p(()=>i("ChoiceList",o.name)),r=p(()=>o.allowMultiple?`${s.value}Multiple`:s.value),u=p(()=>F(da.ChoiceList,o.titleHidden&&da.titleHidden)),m=g=>o.allowMultiple?o.modelValue.includes(g.value):o.modelValue===g.value,x=g=>{const h=g.target;return h.checked?o.allowMultiple?[...o.modelValue,h.value]:h.value:Array.isArray(o.modelValue)?o.modelValue.filter(T=>T!==h.value):[]},b=g=>{n("update:modelValue",x(g)),n("change",g)};return(g,h)=>(l(),d("fieldset",{id:a(r),class:c(a(u)),"aria-invalid":t.error!==null},[S("legend",{class:c(a(da).Title)},[f(g.$slots,"default")],2),S("ul",{class:c(a(da).Choices)},[(l(!0),d(K,null,ge(t.choices,(T,k)=>(l(),d("li",{key:k},[(l(),L(Oe(t.allowMultiple?a(La):a(Eo)),{name:a(r),value:T.value,checked:m(T),disabled:T.disabled||t.disabled,ariaDescribedBy:t.error&&T.describedByError?a(nc)(a(r)):null,onChange:b},Ue({_:2},[T.label?{name:"label",fn:y(()=>[S("span",null,U(T.label),1)])}:void 0,T.helpText?{name:"help-text",fn:y(()=>[S("span",null,U(T.helpText),1)])}:void 0]),1032,["name","value","checked","disabled","ariaDescribedBy"])),typeof T.renderChildren=="string"?(l(),d("div",{key:0,innerHTML:T.renderChildren,class:c(a(da).ChoiceChildren)},null,10,eC)):(l(),L(Oe(T.renderChildren),{key:1,class:c(a(da).ChoiceChildren)},null,8,["class"]))]))),128))],2),t.error?(l(),d("div",{key:0,class:c(a(da).ChoiceError)},[A(a(ka),{fieldID:a(r),message:t.error},null,8,["fieldID","message"])],2)):w("",!0)],10,JS))}});Et.__docgenInfo={exportName:"default",displayName:"ChoiceList",description:"",tags:{},props:[{name:"choices",description:"Collection of choices",required:!0,type:{name:"Array",elements:[{name:"Choice"}]}},{name:"modelValue",description:"V-model will automatically bind to this prop",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allow merchants to select multiple options at once",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Toggles display of the title",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable all choices",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}}],slots:[{name:"default"}]};const tC="Polaris-Collapsible",aC="Polaris-Collapsible--isFullyClosed",nC="Polaris-Collapsible--expandOnPrint";var Tr={Collapsible:tC,isFullyClosed:aC,expandOnPrint:nC};const oC=["id","aria-expanded"],to=M({props:{id:null,expandOnPrint:{type:Boolean},open:{type:Boolean},transition:null},setup(t){const n=t,o=C(0),i=C("idle"),s=C(null),r=C(n.open),u=p(()=>i.value==="idle"&&n.open&&r.value),m=p(()=>i.value==="idle"&&!n.open&&!r.value),x=p(()=>F(Tr.Collapsible,m.value&&Tr.isFullyClosed,n.expandOnPrint&&Tr.expandOnPrint)),b=p(()=>_(v({},n.transition&&{transitionDuration:`${n.transition.duration}`,transitionTimingFunction:`${n.transition.timingFunction}`}),{maxHeight:u.value?"none":`${o.value}px`,overflow:u.value?"visible":"hidden"})),g=({target:h})=>{h===s.value&&(i.value="idle",r.value=n.open)};return Ee(()=>[n.open,r.value],()=>{n.open!==r.value&&(i.value="measuring")}),Xt(()=>{if(!!s.value)switch(i.value){case"idle":break;case"measuring":o.value=s.value.scrollHeight,i.value="animating";break;case"animating":o.value=n.open?s.value.scrollHeight:0}}),Se(()=>{!open||!s.value||(o.value=s.value.scrollHeight)}),(h,T)=>(l(),d("div",{id:t.id,style:Fe(a(b)),ref_key:"collapsibleContainerRef",ref:s,class:c(a(x)),onTransitionend:g,"aria-expanded":t.open},[t.expandOnPrint||!a(m)?f(h.$slots,"default",{key:0}):w("",!0)],46,oC))}});to.__docgenInfo={exportName:"default",displayName:"Collapsible",description:"",tags:{},props:[{name:"id",description:"Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component\u2019s aria-controls prop.",required:!0,type:{name:"string"}},{name:"expandOnPrint",description:"Option to show collapsible content when printing",required:!1,type:{name:"boolean"}},{name:"open",description:"Toggle whether the collapsible is expanded or not.",required:!0,type:{name:"boolean"}},{name:"transition",description:"Assign transition properties to the collapsible",required:!1,type:{name:"Transition"}}],slots:[{name:"default"}]};function Sr(t){const n=t.toString(16);return n.length===1?`0${n}`:n}function iC(t,n){const o=t/60,i=1-Math.abs(o%2-1),s=n*i;let r=0,u=0,m=0;return o>=0&&o<=1&&(r=n,u=s,m=0),o>=1&&o<=2&&(r=s,u=n,m=0),o>=2&&o<=3&&(r=0,u=n,m=s),o>=3&&o<=4&&(r=0,u=s,m=n),o>=4&&o<=5&&(r=s,u=0,m=n),o>=5&&o<=6&&(r=n,u=0,m=s),{red:r,green:u,blue:m}}function sC(t,n="b"){const{alpha:o=1}=t,i=t.red/255,s=t.green/255,r=t.blue/255,u=Math.max(i,s,r),m=Math.min(i,s,r),x=u-m,b=(u+m)/2;let g=0;if(u===0)g=0;else if(n==="b")g=x/u;else if(n==="l"){const N=b>.5?x/(2-u-m):x/(u+m);g=Number.isNaN(N)?0:N}let h=0;switch(u){case i:h=(s-r)/x+(s<r?6:0);break;case s:h=(r-i)/x+2;break;case r:h=(i-s)/x+4;break}const T=h/6*360,k=ia(T,0,360);return{hue:k?To(k,2):0,saturation:To(ia(g,0,1),4),brightness:To(ia(u,0,1),4),lightness:To(b,4),alpha:To(o,4)}}function lC(t){if(t.length===4){const s=(x,b)=>t.slice(x,b).repeat(2),r=parseInt(s(1,2),16),u=parseInt(s(2,3),16),m=parseInt(s(3,4),16);return{red:r,green:u,blue:m}}const n=parseInt(t.slice(1,3),16),o=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return{red:n,green:o,blue:i}}function rC({red:t,green:n,blue:o}){return`#${Sr(t)}${Sr(n)}${Sr(o)}`}function Gi(t){const{hue:n,saturation:o,brightness:i}=t,r=t.alpha||1,u=i*o;let{red:m,green:x,blue:b}=iC(n,u);const g=i-u;return m+=g,x+=g,b+=g,{red:Math.round(m*255),green:Math.round(x*255),blue:Math.round(b*255),alpha:r}}function cC(t){return rC(Gi(_(v({},t),{alpha:1})))}function uC(t){const{hue:n,saturation:o,brightness:i,alpha:s=1}=sC(t,"b");return{hue:n,saturation:o,brightness:i,alpha:s}}const dC="Polaris-ColorPicker",pC="Polaris-ColorPicker__MainColor",mC="Polaris-ColorPicker--fullWidth",yC="Polaris-ColorPicker__Dragger",gC="Polaris-ColorPicker__ColorLayer",hC="Polaris-ColorPicker__HuePicker",bC="Polaris-ColorPicker__AlphaPicker",fC="Polaris-ColorPicker__Slidable";var Wt={ColorPicker:dC,MainColor:pC,fullWidth:mC,Dragger:yC,ColorLayer:gC,HuePicker:hC,AlphaPicker:bC,Slidable:fC};const vC=["data-dragging"],ls=M({props:{draggerX:{default:0},draggerY:{default:0}},emits:["change","dragger-height"],setup(t,{emit:n}){const o=t,i=C(!1),s=C(null),r=C(null),u=C(0),m=C(0),x=p(()=>({transform:`translate3d(${u.value||o.draggerX}px, ${m.value||o.draggerY}px, 0)`}));Xr||window.addEventListener("touchmove",I=>{i.value&&I.preventDefault()},{passive:!1}),Se(()=>{r.value&&n("dragger-height",r.value.clientWidth)});const b=I=>{if(N(I)){const{clientX:D,clientY:E}=I;T(D,E)}i.value=!0},g=()=>{i.value=!1},h=I=>{if(I.stopImmediatePropagation(),I.stopPropagation(),I.cancelable&&I.preventDefault(),k(I)){const E=I;T(E.clientX,E.clientY);return}const D=I;T(D.touches[0].clientX,D.touches[0].clientY)},T=(I,D)=>{if(s.value){const E=s.value.getBoundingClientRect(),R=I-E.left,W=D-E.top;n("change",{x:R,y:W})}};function k(I){return I.type==="mousemove"}function N(I){return I.type==="mousedown"}return(I,D)=>(l(),d("div",{ref_key:"slidableRef",ref:s,class:c(a(Wt).Slidable),"data-dragging":i.value,onMousedown:b,onTouchstart:b},[i.value?(l(),L(a(nt),{key:0,event:"mouseup",handler:g})):w("",!0),i.value?(l(),L(a(nt),{key:1,event:"mousemove",handler:h,passive:!1})):w("",!0),i.value?(l(),L(a(nt),{key:2,event:"touchmove",handler:h,passive:!1})):w("",!0),i.value?(l(),L(a(nt),{key:3,event:"touchend",handler:g})):w("",!0),i.value?(l(),L(a(nt),{key:4,event:"touchcancel",handler:g})):w("",!0),S("div",{style:Fe(a(x)),class:c(a(Wt).Dragger),ref_key:"draggerRef",ref:r},null,6)],42,vC))}});ls.__docgenInfo={exportName:"default",displayName:"Slidable",description:"",tags:{},props:[{name:"draggerX",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"draggerY",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"change",type:{names:["{ x: number; y: number; }"]}},{name:"dragger-height",type:{names:["number"]}}]};const $p=M({props:{color:null,alpha:null},emits:["change"],setup(t,{emit:n}){const o=t,i=C(null),s=C(0),r=C(0),u=p(()=>th(o.alpha,s.value,r.value)),m=p(()=>{const{red:h,green:T,blue:k}=Gi(o.color),N=`${h}, ${T}, ${k}`;return`linear-gradient(to top, rgba(${N}, 0) 18px, rgba(${N}, 1) calc(100% - 18px))`});Se(()=>{x()});const x=()=>{i.value&&(s.value=i.value.clientHeight)},b=h=>{r.value=h},g=({y:h})=>{const T=ah(h,s.value);n("change",T)};return(h,T)=>(l(),d("div",{class:c(a(Wt).AlphaPicker),ref_key:"alphaPickerRef",ref:i},[S("div",{class:c(a(Wt).ColorLayer),style:Fe({background:a(m)})},"\xA0",6),A(a(ls),{draggerY:a(u),draggerX:0,onChange:g,onDraggerHeight:b},null,8,["draggerY"])],2))}});$p.__docgenInfo={exportName:"default",displayName:"AlphaPicker",description:"",tags:{},props:[{name:"color",required:!0,type:{name:"HSBColor"}},{name:"alpha",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const Fp=M({props:{hue:null},emits:["change"],setup(t,{emit:n}){const o=t,i=C(null),s=C(0),r=C(0),u=p(()=>nh(o.hue,s.value,r.value));Se(()=>{m()});const m=()=>{i.value&&(s.value=i.value.clientHeight)},x=g=>{r.value=g},b=({y:g})=>{const h=oh(g,s.value);n("change",h)};return(g,h)=>(l(),d("div",{class:c(a(Wt).HuePicker),ref_key:"huePickerRef",ref:i},[A(a(ls),{draggerY:a(u),draggerX:0,onChange:b,onDraggerHeight:x},null,8,["draggerY"])],2))}});Fp.__docgenInfo={exportName:"default",displayName:"HuePicker",description:"",tags:{},props:[{name:"hue",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const xC=["id","onMousedown"],rs=M({props:{id:null,modelValue:null,allowAlpha:{type:Boolean},fullWidth:{type:Boolean},outputType:null},emits:["change","update:modelValue"],setup(t,{emit:n}){const o=t,i=200,s=C(null),r=Hi({hue:0,saturation:0,brightness:0,alpha:1}),u=Hi({width:0,height:0}),m=R=>{R.preventDefault()},x=p(()=>F(Wt.ColorPicker,o.fullWidth&&Wt.fullWidth)),b=p(()=>r.alpha!==void 0&&o.allowAlpha?r.alpha:1),g=p(()=>{const{red:R,green:W,blue:Z}=Gi({hue:r.hue,saturation:1,brightness:1});return`rgba(${R}, ${W}, ${Z}, ${b.value})`}),h=p(()=>ia(r.saturation*u.width,0,u.width)),T=p(()=>ia(u.height-r.brightness*u.height,0,u.height)),k=p(()=>{if(o.outputType==="hex")return cC(r);if(o.outputType==="rgb"){const R=Gi(r);return`rgba(${R.red}, ${R.green}, ${R.blue}, ${b.value})`}return r}),N=zt(()=>{s.value&&(u.width=s.value.clientWidth,u.height=s.value.clientHeight)},i,{leading:!0,trailing:!0,maxWait:i});if(typeof o.modelValue=="object"&&Object.assign(r,o.modelValue),typeof o.modelValue=="string"){let R;if(/#[0-9abcdef]{3,6}/.test(o.modelValue))R=_(v({},lC(o.modelValue)),{alpha:1});else{const W=o.modelValue.replace(/^rgba?\(|\s+|\)$/g,"").split(",");R={red:parseInt(W[0],10),green:parseInt(W[1],10),blue:parseInt(W[2],10),alpha:W[2]?parseFloat(W[3]):1}}Object.assign(r,_(v({},uC(R)),{alpha:R.alpha}))}Se(()=>{s.value&&(u.width=s.value.clientWidth,u.height=s.value.clientHeight)});const I=R=>{r.hue=R,n("change",k.value),n("update:modelValue",k.value)},D=R=>{r.alpha=R,n("change",k.value),n("update:modelValue",k.value)},E=({x:R,y:W})=>{r.saturation=ia(R/u.width,0,1),r.brightness=ia(1-W/u.height,0,1),n("change",k.value),n("update:modelValue",k.value)};return(R,W)=>(l(),d("div",{id:t.id,class:c(a(x)),onMousedown:op(m,["prevent"])},[S("div",{ref_key:"mainColorRef",ref:s,class:c(a(Wt).MainColor)},[S("div",{class:c(a(Wt).ColorLayer),style:Fe({backgroundColor:a(g)})},"\xA0",6),A(a(ls),{draggerX:a(h),draggerY:a(T),onChange:E},null,8,["draggerX","draggerY"])],2),A(a(Fp),{hue:a(r).hue,onChange:I},null,8,["hue"]),t.allowAlpha?(l(),L(a($p),{key:0,alpha:a(b),color:a(r),onChange:D},null,8,["alpha","color"])):w("",!0),A(a(nt),{event:"resize",handler:a(N)},null,8,["handler"])],42,xC))}});rs.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:`The currently selected color.
The color can be HSB object (same with Shopify) or RGB, Hex string`,required:!0,type:{name:"union",elements:[{name:"Color"},{name:"string"}]}},{name:"allowAlpha",description:"Allow user to select an alpha value",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow HuePicker to take the full width",required:!1,type:{name:"boolean"}},{name:"outputType",description:"Color output format",required:!1,type:{name:"union",elements:[{name:'"hsb"'},{name:'"rgb"'},{name:'"hex"'}]}}],events:[{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const TC="Polaris-Combobox__Listbox";var SC={Listbox:TC};const Na=M({props:{allowMultiple:{type:Boolean},preferredPosition:{default:"below"},willLoadMoreOptions:{type:Boolean},height:null},emits:["close","scrolled-to-bottom"],setup(t,{emit:n}){const o=t;Xe("comboboxListboxOptionContext",{allowMultiple:o.allowMultiple});const i=C(!1),s=C(""),r=C(""),u=C(""),m=C(!1),x=C(!1),b=C(null),g=ue(),h=p(()=>{var $;return($=g.default)==null?void 0:$.call(g)}),T=p(()=>!i.value&&h),k=()=>{x.value||(i.value=!1,n("close")),s.value=""},N=()=>{i.value=!0,s.value=""},I=()=>{if(o.allowMultiple)x.value=!0;else{k(),s.value="";return}},D=()=>{T.value&&N()},E=()=>{T.value&&N()},R=()=>{x.value=!1,i.value&&k()},W={activeOptionId:s.value,expanded:i.value,listboxId:u.value,setTextFieldFocused:$=>{m.value=$},setTextFieldLabelId:$=>{r.value=$},onTextFieldFocus:D,onTextFieldChange:E,onTextFieldBlur:R};Xe("comboboxTextFieldContext",W);const Z={listboxId:u.value,textFieldLabelId:r.value,textFieldFocused:m.value,willLoadMoreOptions:o.willLoadMoreOptions,onOptionSelected:I,setActiveOptionId:$=>{s.value=$},setListboxId:$=>{u.value=$},onKeyToBottom:()=>{n("scrolled-to-bottom")}};return Xe("comboboxListboxContext",Z),($,z)=>(l(),L(a(Qe),{ref_key:"popoverRef",ref:b,active:i.value,onClose:k,autofocusTarget:"none",preventFocusOnClose:"",fullWidth:"",preferInputActivator:!1,preferredPosition:t.preferredPosition},Ue({_:2},[a(g).activator?{name:"activator",fn:y(()=>[f($.$slots,"activator")])}:void 0,a(g).default?{name:"content",fn:y(()=>[A(a(os),{onScrolledToBottom:z[0]||(z[0]=q=>$.$emit("scrolled-to-bottom")),height:t.height},{default:y(()=>[S("div",{class:c(a(SC).Listbox)},[f($.$slots,"default")],2)]),_:3},8,["height"])])}:void 0]),1032,["active","preferredPosition"]))}});Na.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"},defaultValue:{func:!1,value:"'below'"}},{name:"willLoadMoreOptions",required:!1,type:{name:"boolean"}},{name:"height",required:!1,type:{name:"string"}}],events:[{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"default"}]};function _o(t){return`${t}Label`}const CC="Polaris-TextField",AC="Polaris-TextField--multiline",kC="Polaris-TextField__Input",LC="Polaris-TextField--hasValue",NC="Polaris-TextField--focus",wC="Polaris-TextField__VerticalContent",PC="Polaris-TextField__Backdrop",MC="Polaris-TextField--error",_C="Polaris-TextField--readOnly",IC="Polaris-TextField--disabled",BC="Polaris-TextField__Prefix",DC="Polaris-TextField--suggestion",$C="Polaris-TextField__Suffix",FC="Polaris-TextField__CharacterCount",EC="Polaris-TextField__AlignFieldBottom",OC="Polaris-TextField__ClearButton",qC="Polaris-TextField__Hidden",RC="Polaris-TextField__Spinner",VC="Polaris-TextField__SpinnerIcon",HC="Polaris-TextField__Resizer",UC="Polaris-TextField__DummyInput",jC="Polaris-TextField__Segment",WC="Polaris-TextField--monospaced";var we={TextField:CC,multiline:AC,Input:kC,hasValue:LC,focus:NC,VerticalContent:wC,Backdrop:PC,error:MC,readOnly:_C,disabled:IC,Prefix:BC,suggestion:DC,"Input-hasClearButton":"Polaris-TextField__Input--hasClearButton","Input-suffixed":"Polaris-TextField__Input--suffixed","Input-alignRight":"Polaris-TextField__Input--alignRight","Input-alignLeft":"Polaris-TextField__Input--alignLeft","Input-alignCenter":"Polaris-TextField__Input--alignCenter",Suffix:$C,CharacterCount:FC,AlignFieldBottom:EC,ClearButton:OC,Hidden:qC,Spinner:RC,SpinnerIcon:VC,Resizer:HC,DummyInput:UC,Segment:jC,monospaced:WC};const zC={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},GC=S("path",{"fill-rule":"evenodd",d:"M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 1 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293z"},null,-1),XC=[GC];function KC(t,n){return l(),d("svg",zC,XC)}var Ep={render:KC};function YC(t){return`${t}Error`}function cs(t){return`${t}HelpText`}const Op=M({emits:["click","change","mouseup","mousedown"],setup(t,{emit:n}){const o=i=>{n("click"),n("change",i)};return(i,s)=>(l(),d("div",{"aria-hidden":"true",class:c(a(we).Spinner)},[S("div",{role:"button",tabindex:"-1",class:c(a(we).Segment),onClick:s[0]||(s[0]=r=>o(1)),onMousedown:s[1]||(s[1]=r=>i.$emit("mousedown")),onMouseup:s[2]||(s[2]=r=>i.$emit("mouseup"))},[S("div",{class:c(a(we).SpinnerIcon)},[A(a(re),{source:a(_p)},null,8,["source"])],2)],34),S("div",{role:"button",tabindex:"-1",class:c(a(we).Segment),onClick:s[3]||(s[3]=r=>o(-1)),onMousedown:s[4]||(s[4]=r=>i.$emit("mousedown")),onMouseup:s[5]||(s[5]=r=>i.$emit("mouseup"))},[S("div",{class:c(a(we).SpinnerIcon)},[A(a(re),{source:a(fa)},null,8,["source"])],2)],34)],2))}});Op.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},events:[{name:"mousedown"},{name:"mouseup"},{name:"click"},{name:"change",type:{names:["number"]}}]};const ZC=["innerHTML"],QC=["innerHTML"],qp=M({props:{contents:null,currentHeight:null,minimumLines:null},emits:["height-change"],setup(t,{emit:n}){const o=t,i={"&":"&amp;","<":"&lt;",">":"&gt;","\n":"<br>","\r":""},s=new RegExp(`[${Object.keys(i).join()}]`,"g"),r=C(null),u=C(null),m=C(),x=C(o.currentHeight),b=k=>i[k],g=k=>k?`${k.replace(s,b)}<br>`:"<br>",h=k=>{let N="";for(let I=0;I<k;I++)N+="<br>";return N},T=()=>{m.value&&cancelAnimationFrame(m.value),m.value=requestAnimationFrame(()=>{if(!r.value||!u.value)return;const k=Math.max(r.value.offsetHeight,u.value.offsetHeight);k!==x.value&&n("height-change",k)})};return Se(()=>{m.value&&cancelAnimationFrame(m.value)}),Xt(()=>{T()}),(k,N)=>(l(),d("div",{"aria-hidden":"true",class:c(a(we).Resizer)},[A(a(nt),{event:"resize",handler:T}),S("div",{ref_key:"contentNode",ref:r,class:c(a(we).DummyInput),innerHTML:g(t.contents)},null,10,ZC),t.minimumLines?(l(),d("div",{key:0,ref_key:"minimumLinesNode",ref:u,class:c(a(we).DummyInput),innerHTML:h(t.minimumLines)},null,10,QC)):w("",!0)],2))}});qp.__docgenInfo={exportName:"default",displayName:"Resizer",description:"",tags:{},props:[{name:"contents",required:!1,type:{name:"string"}},{name:"currentHeight",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"minimumLines",required:!1,type:{name:"number"}}],events:[{name:"height-change",type:{names:["number"]}}]};const JC="Polaris-Connected",eA="Polaris-Connected__Item";var Oi={Connected:JC,Item:eA,"Item-primary":"Polaris-Connected__Item--primary","Item-focused":"Polaris-Connected__Item--focused"};const qi=M({props:{position:null},emits:["focus","blur"],setup(t,{emit:n}){const o=t,i=C(!1),s=p(()=>F(Oi.Item,i.value&&Oi["Item-focused"],o.position==="primary"&&Oi["Item-primary"])),r=()=>{i.value=!0,n("focus")},u=()=>{i.value=!1,n("blur")};return(m,x)=>(l(),d("div",{class:c(a(s)),onFocus:r,onBlur:u},[f(m.$slots,"default")],34))}});qi.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"position",required:!0,type:{name:"ItemPosition"}}],events:[{name:"focus"},{name:"blur"}],slots:[{name:"default"}]};const Rp=M({setup(t){return(n,o)=>(l(),d("div",{class:c(a(Oi).Connected)},[n.$slots.left?(l(),L(a(qi),{key:0,position:"left"},{default:y(()=>[f(n.$slots,"left")]),_:3})):w("",!0),n.$slots.default?(l(),L(a(qi),{key:1,position:"primary"},{default:y(()=>[f(n.$slots,"default")]),_:3})):w("",!0),n.$slots.right?(l(),L(a(qi),{key:2,position:"right"},{default:y(()=>[f(n.$slots,"right")]),_:3})):w("",!0)],2))}});Rp.__docgenInfo={exportName:"default",displayName:"Connected",description:"",tags:{},slots:[{name:"left"},{name:"default"},{name:"right"}]};const tA="Polaris-Labelled--hidden",aA="Polaris-Labelled__LabelWrapper",nA="Polaris-Labelled__HelpText",oA="Polaris-Labelled__Action";var Co={hidden:tA,LabelWrapper:aA,HelpText:nA,Error:"Polaris-Labelled__Error",Action:oA};const iA="Polaris-Label",sA="Polaris-Label--hidden",lA="Polaris-Label__Text",rA="Polaris-Label__RequiredIndicator";var Di={Label:iA,hidden:sA,Text:lA,RequiredIndicator:rA};const cA=["id","for"],Vp=M({props:{id:null,hidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(t){const n=t,o=p(()=>F(Di.Label,n.hidden&&Di.hidden)),i=p(()=>F(Di.Text,n.requiredIndicator&&Di.RequiredIndicator));return(s,r)=>(l(),d("div",{class:c(a(o))},[S("label",{id:a(_o)(t.id),for:t.id,class:c(a(i))},[f(s.$slots,"default")],10,cA)],2))}});Vp.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"string"}},{name:"hidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const uA=["id"],ao=M({props:{id:null,error:null,action:null,labelHidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(t){const n=t,o=p(()=>n.error&&typeof n.error!="boolean"),i=p(()=>F(n.labelHidden&&Co.hidden));return(s,r)=>(l(),d("div",{class:c(a(i))},[s.$slots.label?(l(),d("div",{key:0,class:c(a(Co).LabelWrapper)},[A(a(Vp),me({id:t.id,requiredIndicator:t.requiredIndicator,hidden:!1},s.$attrs),{default:y(()=>[f(s.$slots,"label")]),_:3},16,["id","requiredIndicator"]),t.action?(l(),d("div",{key:0,class:c(a(Co).Action)},[A(a(st),{action:t.action,overrides:{plain:!0}},null,8,["action"])],2)):w("",!0)],2)):w("",!0),f(s.$slots,"default"),a(o)?(l(),d("div",{key:1,class:c(a(Co).Error)},[typeof t.error=="string"?(l(),L(a(ka),{key:0,message:t.error,fieldID:a(YC)(t.id)},null,8,["message","fieldID"])):(l(),L(Oe(t.error),{key:1}))],2)):w("",!0),s.$slots["help-text"]?(l(),d("div",{key:2,class:c(a(Co).HelpText),id:a(cs)(t.id)},[f(s.$slots,"help-text")],10,uA)):w("",!0)],2))}});ao.__docgenInfo={exportName:"default",displayName:"Labelled",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"TSIndexedAccessType"}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"Error"}},{name:"action",description:"An action",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"label"},{name:"default"},{name:"help-text"}]};const dA=["id"],pA=["id"],mA=["id"],yA=["aria-live"],gA=["disabled"],hA=S("p",null,"Clear button",-1),Pe=M({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:null,type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue","clear-button-click"],setup(t,{emit:n}){const o=t,i=ve("lang"),s=C(null),r=C(null),u=C(null),m=C(null),x=C(null),b=ue(),g=p(()=>{var B;return(B=b["connected-left"])==null?void 0:B.call(b)}),h=p(()=>{var B;return(B=b["connected-right"])==null?void 0:B.call(b)}),T=p(()=>{var B;return(B=b["help-text"])==null?void 0:B.call(b)}),k=p(()=>{var B;return(B=b.prefix)==null?void 0:B.call(b)}),N=p(()=>{var B;return(B=b.suffix)==null?void 0:B.call(b)}),I=p(()=>{var B;return(B=b.verticalContent)==null?void 0:B.call(b)}),D=C(),E=C(),R=C();Ee(()=>o.focused,()=>{!s.value||o.focused===void 0||(o.focused?s.value.focus():s.value.blur())}),Ee([()=>E.value,()=>o.modelValue,()=>o.type,()=>o.suggestion],()=>{const B=o.type==="text"||o.type==="tel"||o.type==="search"||o.type==="url"||o.type==="password";!s.value||!B||!o.suggestion||s.value.setSelectionRange(o.modelValue.length,o.suggestion.length)});const{useUniqueId:W}=De(),Z=p(()=>W("TextField",o.id)),$=p(()=>o.type==="currency"?"text":o.type),z=p(()=>{if(!!o.multiline)return typeof o.multiline=="number"?o.multiline:1}),q=p(()=>G.value!==""),j=p(()=>o.multiline&&D.value?{height:`${D.value}px`}:{}),se=p(()=>F(we.TextField,Boolean(G.value)&&we.hasValue,o.disabled&&we.disabled,o.readOnly&&we.readOnly,o.error&&we.error,o.multiline&&we.multiline,E.value&&we.focus)),be=p(()=>{const B=o.align&&we[Ne("Input-align",o.align)];return F(we.Input,B,N.value&&we["Input-suffixed"],o.clearButton&&we["Input-hasClearButton"],o.monospaced&&we.monospaced)}),ee=p(()=>F(we.CharacterCount,o.multiline&&we.AlignFieldBottom)),Me=p(()=>F(we.Backdrop,g.value&&we["Backdrop-connectedLeft"],h.value&&we["Backdrop-connectedRight"])),O=p(()=>F(we.ClearButton,!q.value&&we.AlignFieldBottom)),G=p(()=>o.suggestion?o.suggestion:o.modelValue),Y=p(()=>o.step?o.step:1),ce=p(()=>o.max?o.max:1/0),de=p(()=>o.min?o.min:-1/0),$e=p(()=>{if(!!o.multiline)return Boolean(o.multiline)||o.multiline>0?{"aria-multiline":!0}:void 0}),ye=p(()=>G.value.length);p(()=>o.maxLength?i.Polaris.TextField.characterCountWithMaxLength({count:ye.value,limit:o.maxLength}):i.Polaris.TextField.characterCount({count:ye}));const Ce=p(()=>o.maxLength?`${ye.value}/${o.maxLength}`:ye.value),oe=p(()=>{const B=[];return o.error&&B.push(`${Z.value}Error`),T.value&&B.push(cs(Z.value)),o.showCharacterCount&&B.push(`${Z.value}-CharacterCounter`),B.length?B.join(" "):""}),Te=p(()=>{const B=[];return k.value&&B.push(`${Z.value}-Prefix`),N.value&&B.push(`${Z.value}-Suffix`),I.value&&B.push(`${Z.value}-VerticalContent`),B.unshift(_o(Z.value)),B.join(" ")}),Be=B=>{D.value=B},qe=B=>B instanceof HTMLElement&&(u.value&&u.value.contains(B)||m.value&&m.value.contains(B)),_e=B=>{const X=B.target;qe(X)||(E.value=!0)},ut=B=>{var Q;const X=B.target;qe(X)||E.value||(Q=s.value)==null||Q.focus()},Rt=B=>{const X=B.target;n("update:modelValue",X.value),n("change",B)},mt=B=>{const X=He=>(He.toString().split(".")[1]||[]).length,Q=o.modelValue?parseFloat(o.modelValue):0;if(typeof Q!="number")return;const fe=Math.max(X(Q),X(Y.value)),Re=Math.min(Number(ce.value),Math.max(Q+B*Y.value,Number(de.value)));n("update:modelValue",String(Re.toFixed(fe)))},yt=()=>{clearTimeout(R.value)},te=()=>{let Q=200;const fe=()=>{Q>50&&(Q-=10),mt(0),R.value=window.setTimeout(fe,Q)};R.value=window.setTimeout(fe,Q),document.addEventListener("mouseup",yt,{once:!0})},ke=B=>{const{key:X,which:Q}=v({},B),fe=/[\d.eE+-]$/;o.type!=="number"||Q!==13||fe.test(X)||B.preventDefault()},je=B=>{var X;o.selectTextOnFocus&&!o.suggestion&&((X=(o.multiline?r:s).value)==null||X.select()),n("focus",B)};return(B,X)=>(l(),L(a(ao),{id:a(Z),error:t.error,action:t.labelAction,labelHidden:t.labelHidden,requiredIndicator:t.requiredIndicator},Ue({default:y(()=>[A(a(Rp),null,Ue({default:y(()=>[S("div",{class:c(a(se)),onFocus:_e,onClick:ut,onBlur:X[3]||(X[3]=Q=>E.value=!1)},[a(b).prefix?(l(),d("div",{key:0,id:`${a(Z)}Prefix`,class:c(a(we).Prefix),ref_key:"prefixRef",ref:u},[f(B.$slots,"prefix")],10,dA)):w("",!0),a(b)["vertical-content"]?(l(),d("div",{key:1,class:c(a(we).VerticalContent),id:`${a(Z)}-VerticalContent`,ref_key:"verticalContentRef",ref:x},[f(B.$slots,"vertical-content"),(l(),L(Oe(t.multiline?"textarea":"input"),me({id:a(Z),name:t.name,disabled:t.disabled,readonly:t.readOnly,role:t.role,autofocus:t.autoFocus,value:t.modelValue,placeholder:t.placeholder,style:a(j),autocomplete:t.autoComplete,class:a(be),ref:t.multiline?"textareaRef":"inputRef",min:t.min,max:t.max,step:t.step,minlength:t.minLength,maxlength:t.maxLength,spellcheck:t.spellCheck,pattern:t.pattern,inputMode:t.inputMode,rows:a(z),type:a($),"aria-describedby":a(oe),"aria-labelledby":a(Te),"aria-invalid":Boolean(t.error),"aria-owns":t.ariaOwns,"aria-activedescendant":t.ariaActiveDescendant,"aria-autocomplete":t.ariaAutocomplete,"aria-controls":t.ariaControls,"aria-expanded":t.ariaExpanded,"aria-required":t.requiredIndicator},a($e),{onInput:Rt,onKeydown:ke,onFocus:je,onBlur:X[0]||(X[0]=Q=>B.$emit("blur"))}),{default:y(()=>[t.multiline?(l(),d(K,{key:0},[ie(U(t.modelValue),1)],64)):w("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"]))],10,pA)):(l(),L(Oe(t.multiline?"textarea":"input"),me({key:2,id:a(Z),name:t.name,disabled:t.disabled,readonly:t.readOnly,role:t.role,autofocus:t.autoFocus,value:t.modelValue,placeholder:t.placeholder,style:a(j),autocomplete:t.autoComplete,class:a(be),ref:t.multiline?"textareaRef":"inputRef",min:t.min,max:t.max,step:t.step,minlength:t.minLength,maxlength:t.maxLength,spellcheck:t.spellCheck,pattern:t.pattern,inputMode:t.inputMode,rows:a(z),type:a($),"aria-describedby":a(oe),"aria-labelledby":a(Te),"aria-invalid":Boolean(t.error),"aria-owns":t.ariaOwns,"aria-activedescendant":t.ariaActiveDescendant,"aria-autocomplete":t.ariaAutocomplete,"aria-controls":t.ariaControls,"aria-expanded":t.ariaExpanded,"aria-required":t.requiredIndicator},a($e),{onInput:Rt,onKeydown:ke,onFocus:je,onBlur:X[1]||(X[1]=Q=>B.$emit("blur"))}),{default:y(()=>[t.multiline?(l(),d(K,{key:0},[ie(U(t.modelValue),1)],64)):w("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"])),a(b).suffix?(l(),d("div",{key:3,id:`${a(Z)}Suffix`,class:c(a(we).Suffix),ref_key:"suffixRef",ref:m},[f(B.$slots,"suffix")],10,mA)):w("",!0),t.showCharacterCount?(l(),d("div",{key:4,class:c(a(ee)),"aria-live":E.value?"polite":"off","aria-atomic":"true"},[S("p",null,U(a(Ce)),1)],10,yA)):w("",!0),a(q)&&t.clearButton?(l(),d("button",{key:5,class:c(a(O)),disabled:t.disabled,onClick:X[2]||(X[2]=Q=>B.$emit("clear-button-click",a(Z)))},[A(a(lt),null,{default:y(()=>[hA]),_:1}),A(a(re),{source:a(Ep),color:"base"},null,8,["source"])],10,gA)):w("",!0),t.type==="number"&&t.step!==0&&!t.disabled&&!t.readOnly?(l(),L(a(Op),{key:6,onChange:mt,onMousedown:te,onMouseup:yt})):w("",!0),S("div",{class:c(a(Me))},null,2),t.multiline?(l(),L(a(qp),{key:7,contents:a(G)||t.placeholder,currentHeight:D.value,minimumLines:typeof t.multiline=="number"?t.multiline:1,onHeightChange:Be},null,8,["contents","currentHeight","minimumLines"])):w("",!0)],34)]),_:2},[a(b)["connected-left"]?{name:"left",fn:y(()=>[f(B.$slots,"connected-left")])}:void 0,a(b)["connected-right"]?{name:"right",fn:y(()=>[f(B.$slots,"connected-right")])}:void 0]),1024)]),_:2},[a(b).label?{name:"label",fn:y(()=>[f(B.$slots,"label")])}:void 0,a(b)["help-text"]?{name:"help-text",fn:y(()=>[f(B.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden","requiredIndicator"]))}});Pe.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"Error"}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"blur"},{name:"clear-button-click",type:{names:["string"]}},{name:"focus",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"connected-left"},{name:"connected-right"},{name:"prefix"},{name:"vertical-content"},{name:"suffix"}]};const Oo=M({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:null,type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:{default:"list"},showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue"],setup(t,{emit:n}){const o=t,{activeOptionId:i,listboxId:s,expanded:r,setTextFieldFocused:u,setTextFieldLabelId:m,onTextFieldFocus:x,onTextFieldChange:b,onTextFieldBlur:g}=ve("comboboxTextFieldContext",{}),{useUniqueId:h}=De(),T=h("ComboboxTextField"),k=p(()=>o.id||T),N=p(()=>_o(o.id||T));Ee(()=>N.value,()=>{m&&m(N.value)});const I=()=>{n("focus"),x&&x(),u&&u(!0)},D=()=>{n("blur"),g&&g(),u&&u(!1)},E=R=>{const W=R.target;n("update:modelValue",W.value),n("change",R),b&&b()};return(R,W)=>(l(),L(a(Pe),me(o,{modelValue:t.modelValue,id:a(k),type:t.type,ariaAutoComplete:t.ariaAutocomplete,"aria-haspopup":"listbox",ariaActiveDescendant:a(i),ariaControls:a(s),ariaExpanded:a(r),onFocus:I,onBlur:D,onChange:E}),Ue({_:2},[R.$slots.label?{name:"label",fn:y(()=>[f(R.$slots,"label")])}:void 0,R.$slots["help-text"]?{name:"help-text",fn:y(()=>[f(R.$slots,"help-text")])}:void 0,R.$slots.prefix?{name:"prefix",fn:y(()=>[f(R.$slots,"prefix")])}:void 0,R.$slots.suffix?{name:"suffix",fn:y(()=>[f(R.$slots,"suffix")])}:void 0,R.$slots["connected-left"]?{name:"connected-left",fn:y(()=>[f(R.$slots,"connected-left")])}:void 0,R.$slots["connected-right"]?{name:"connected-right",fn:y(()=>[f(R.$slots,"connected-right")])}:void 0,R.$slots["vertical-content"]?{name:"vertical-content",fn:y(()=>[f(R.$slots,"vertical-content")])}:void 0]),1040,["modelValue","id","type","ariaAutoComplete","ariaActiveDescendant","ariaControls","ariaExpanded"]))}});Oo.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"Error"}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'list'"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"},{name:"connected-left"},{name:"connected-right"},{name:"vertical-content"}]};function no(){const t=ve("frameContext",{});function n(){if(!t)throw new wb("No frame context was provided.");return t}return{useFrame:n}}const qo=M({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean},contextControl:null,secondaryMenu:null},setup(t){const n=t,{useFrame:o}=no(),{setContextualSaveBar:i,removeContextualSaveBar:s}=o(),r=ue();return Se(()=>{const{message:u,saveAction:m,discardAction:x,alignContentFlush:b,fullWidth:g}=n;i({message:u,saveAction:m,discardAction:x,alignContentFlush:b,fullWidth:g,contextControl:r.contextControl&&r.contextControl(),secondaryMenu:r.secondaryMenu&&r.secondaryMenu()})}),pt(()=>{s()}),(u,m)=>null}});qo.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}},{name:"contextControl",description:"Accepts a component that is used to help users switch between different contexts",required:!1,type:{name:"any"}},{name:"secondaryMenu",description:"Accepts a node that is rendered to the left of the discard and save actions",required:!1,type:{name:"any"}}]};const bA=7;function fA(t,n,o=0){const i=new Date(n,t,1),s=i.getDay(),r=[[]];let u=r[0],m=i;const x=Hp(o);for(let b=0;b<x.indexOf(s);b++)u.push(null);for(;m.getMonth()===t;)u.length===bA&&(u=[],r.push(u)),u.push(m),m=new Date(n,t,m.getDate()+1);for(;u.length<7;)u.push(null);return r}function vA(t,n){if(t==null)return!1;const{start:o,end:i}=n;return Boolean(o&&t>o&&i&&t<i)}function xA(t,n){if(t==null)return!1;const{start:o,end:i}=n;return Boolean(o&&Pt(o,t)||i&&Pt(i,t))}function Pt(t,n){return t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear()}function TA(t,n){if(t==null)return{start:n,end:n};const{start:o,end:i}=t;return i&&(Io(o,i)||xa(o,i))?{start:n,end:n}:o?xa(n,o)?{start:n,end:n}:{start:o,end:n}:i?xa(n,i)?{start:n,end:i}:{start:o||i,end:n}:{start:n,end:n}}function ku(t){return t===11?0:t+1}function Lu(t,n){return t===11?n+1:n}function SA(t){return t===0?11:t-1}function CA(t,n){return t===0?n-1:n}function Io(t,n){return t.getTime()>n.getTime()}function xa(t,n){return t.getTime()<n.getTime()}function No(t,n){return n.some(o=>t.getTime()===o.getTime())}const AA=[0,1,2,3,4,5,6];function Hp(t){const n=[...AA];return[...n.splice(t),...n]}const kA={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},LA=S("path",{d:"m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"},null,-1),NA=[LA];function wA(t,n){return l(),d("svg",kA,NA)}var PA={render:wA};const MA="Polaris-DatePicker",_A="Polaris-DatePicker__MonthLayout",IA="Polaris-DatePicker__MonthContainer",BA="Polaris-DatePicker__Month",DA="Polaris-DatePicker__DayCell",$A="Polaris-DatePicker__Day",FA="Polaris-DatePicker__EmptyDayCell",EA="Polaris-DatePicker__Weekday",OA="Polaris-DatePicker__Header",qA="Polaris-DatePicker__Title",RA="Polaris-DatePicker__Week";var Ie={DatePicker:MA,MonthLayout:_A,MonthContainer:IA,Month:BA,"Month-current":"Polaris-DatePicker__Month--current",DayCell:DA,"DayCell-inRange":"Polaris-DatePicker__DayCell--inRange",Day:$A,"Day-today":"Polaris-DatePicker__Day--today","Day-inRange":"Polaris-DatePicker__Day--inRange","Day-selected":"Polaris-DatePicker__Day--selected","Day-disabled":"Polaris-DatePicker__Day--disabled",EmptyDayCell:FA,Weekday:EA,"Weekday-current":"Polaris-DatePicker__Weekday--current",Header:OA,Title:qA,"Day-firstInRange":"Polaris-DatePicker__Day--firstInRange","Day-hasRange":"Polaris-DatePicker__Day--hasRange","Day-hoverRight":"Polaris-DatePicker__Day--hoverRight","Day-lastInRange":"Polaris-DatePicker__Day--lastInRange",Week:RA};const Ta={months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}};function wo(t){switch(t){case 0:return"january";case 1:return"february";case 2:return"march";case 3:return"april";case 4:return"may";case 5:return"june";case 6:return"july";case 7:return"august";case 8:return"september";case 9:return"october";case 10:return"november";case 11:return"december"}}function Nu(t){switch(t){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}const VA=["tabIndex","aria-label","aria-disabled","aria-pressed"],qr=M({props:{focused:{type:Boolean},day:null,selected:{type:Boolean},inRange:{type:Boolean},inHoveringRange:{type:Boolean},disabled:{type:Boolean},lastDayOfMonth:null,isLastSelectedDay:{type:Boolean},isFirstSelectedDay:{type:Boolean},isHoveringRight:{type:Boolean},rangeIsDifferent:{type:Boolean},weekday:null,selectedAccessibilityLabelPrefix:null},emits:["focus","hover","click"],setup(t,{emit:n}){const o=t,i=C(null),s=p(()=>o.lastDayOfMonth||o.day),r=p(()=>o.day?Pt(new Date,o.day):null),u=p(()=>o.day?o.day.getDate():null),m=p(()=>(o.focused||o.selected||r.value||u.value===1)&&!o.disabled?0:-1),x=p(()=>F(Ie.DayCell,o.selected&&Ie["DayCell-selected"],(o.inRange||o.inHoveringRange)&&!o.disabled&&Ie["DayCell-inRange"],o.isLastSelectedDay&&Ie["DayCell-lastInRange"],o.isFirstSelectedDay&&Ie["DayCell-firstInRange"],o.isHoveringRight&&Ie["DayCell-hoverRight"],o.rangeIsDifferent&&Ie["DayCell-hasRange"])),b=p(()=>F(Ie.Day,o.selected&&Ie["Day-selected"],o.disabled&&Ie["Day-disabled"],r.value&&Ie["Day-today"],(o.inRange||o.inHoveringRange)&&!o.disabled&&Ie["Day-inRange"],o.isLastSelectedDay&&Ie["Day-lastInRange"],o.isFirstSelectedDay&&Ie["Day-firstInRange"],o.isHoveringRight&&Ie["Day-hoverRight"],o.rangeIsDifferent&&Ie["Day-hasRange"])),g=p(()=>{if(!o.day)return null;const I=wo(o.day.getMonth());return I?Ta.months[I]:""}),h=p(()=>[o.selected&&o.selectedAccessibilityLabelPrefix?`${o.selectedAccessibilityLabelPrefix} `:"",`${r.value?"Today ":""}`,`${o.weekday?o.weekday:""} `,`${g.value} `,`${u.value} `,`${o.day?o.day.getFullYear():new Date().getFullYear()}`].join(""));Xt(()=>{o.focused&&i.value&&setTimeout(()=>{i.value.focus()},10)});const T=()=>{n("focus",o.day)},k=()=>{n("hover",s.value)},N=()=>{!o.disabled&&o.day&&n("click",o.day)};return(I,D)=>t.day?(l(),d("td",{key:0,class:c(a(x))},[S("button",{type:"button",ref_key:"dayRef",ref:i,tabIndex:a(m),class:c(a(b)),"aria-label":a(h),"aria-disabled":t.disabled,"aria-pressed":t.selected,onFocus:T,onMouseover:k,onClick:N},U(a(u)),43,VA)],2)):(l(),d("td",{key:1,class:c(a(Ie).EmptyDayCell),onMouseover:k},null,34))}});qr.__docgenInfo={exportName:"default",displayName:"Day",description:"",tags:{},props:[{name:"focused",required:!1,type:{name:"boolean"}},{name:"day",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"inRange",required:!1,type:{name:"boolean"}},{name:"inHoveringRange",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"lastDayOfMonth",required:!1,type:{name:"any"}},{name:"isLastSelectedDay",required:!1,type:{name:"boolean"}},{name:"isFirstSelectedDay",required:!1,type:{name:"boolean"}},{name:"isHoveringRight",required:!1,type:{name:"boolean"}},{name:"rangeIsDifferent",required:!1,type:{name:"boolean"}},{name:"weekday",required:!1,type:{name:"string"}},{name:"selectedAccessibilityLabelPrefix",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["union"]}},{name:"hover",type:{names:["union"]}},{name:"click",type:{names:["Date"]}}]};const HA=["aria-label"],Up=M({props:{label:null,title:null,current:{type:Boolean}},setup(t){const n=t,o=p(()=>F(Ie.Weekday,n.current&&Ie["Weekday-current"]));return(i,s)=>(l(),d("th",{"aria-label":t.label,scope:"col",class:c(a(o))},U(t.title),11,HA))}});Up.__docgenInfo={exportName:"default",displayName:"Weekday",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"current",required:!0,type:{name:"boolean"}}]};const Rr=M({props:{focusedDate:null,selected:null,hoverDate:null,month:null,year:null,disableDatesBefore:null,disableDatesAfter:null,disableSpecificDates:null,allowRange:{type:Boolean},weekStartsOn:null,accessibilityLabelPrefixes:null},emits:["focus","hover","click","change"],setup(t,{emit:n}){const o=t,i=new Date,s=p(()=>i.getMonth()===o.month&&i.getFullYear()===o.year),r=p(()=>F(Ie.Title,s.value&&Ie["Month-current"])),u="Polaris-DatePicker__WeekHeadings",m=p(()=>fA(o.month,o.year,o.weekStartsOn)),x=p(()=>{const q=wo(o.month);return q?Ta.months[q]:""}),b=p(()=>Hp(o.weekStartsOn)),g=p(()=>new Date(o.year,o.month+1,0)),h=p(()=>!(o.selected&&Pt(o.selected.start,o.selected.end))),T=q=>{const j=TA(o.allowRange?o.selected:void 0,q);n("change",j)},k=q=>o.disableDatesBefore&&xa(q,o.disableDatesBefore)||o.disableDatesAfter&&Io(q,o.disableDatesAfter)||o.disableSpecificDates&&No(q,o.disableSpecificDates),N=q=>o.allowRange&&o.selected&&z(q,o.selected),I=q=>o.allowRange&&o.selected&&(!Pt(o.selected.start,o.selected.end)&&$(q,o.selected)||o.hoverDate&&Pt(o.selected.start,o.selected.end)&&Io(o.hoverDate,o.selected.start)&&Pt(q,o.hoverDate)&&!N(q)),D=q=>o.hoverDate&&xa(q,o.hoverDate),E=q=>{if(!o.accessibilityLabelPrefixes)return"";const[j,se]=o.accessibilityLabelPrefixes;if(o.allowRange&&N(q)||!o.allowRange&&j)return j;if(o.allowRange&&I(q))return se},R=(q,j,se)=>{if(!o.allowRange||!j||!se||q==null)return!1;const{start:be,end:ee}=j;return Boolean(Pt(be,ee)&&q>be&&q<=se)};function W(q){const j=Nu(q);return j?Ta.daysAbbreviated[j]:""}function Z(q){const j=Nu(q);return j?Ta.days[j]:""}function $(q,j){if(q==null)return!1;const{end:se}=j;return Boolean(se&&Pt(se,q))}function z(q,j){if(q==null)return!1;const{start:se}=j;return Boolean(se&&Pt(se,q))}return(q,j)=>(l(),d("div",{class:c(a(Ie).MonthContainer)},[S("table",{role:"grid",class:c(a(Ie).Month)},[S("caption",{class:c(a(r))},U(a(x))+" "+U(t.year),3),S("thead",null,[S("tr",{class:c(u)},[(l(!0),d(K,null,ge(a(b),se=>(l(),L(a(Up),{key:se,title:W(se),label:Z(se),current:a(s)&&new Date().getDay()===se},null,8,["title","label","current"]))),128))])]),S("tbody",null,[(l(!0),d(K,null,ge(a(m),(se,be)=>(l(),d("tr",{key:be,class:c(a(Ie).Week)},[(l(!0),d(K,null,ge(se,(ee,Me)=>(l(),d(K,{key:Me},[ee?(l(),L(a(qr),{key:1,selectedAccessibilityLabelPrefix:E(ee),weekday:Z(Me),focused:t.focusedDate&&a(Pt)(ee,t.focusedDate),day:ee,selected:t.selected&&a(xA)(ee,t.selected),inRange:t.selected&&a(vA)(ee,t.selected),disabled:k(ee),inHoveringRange:R(ee,t.selected,t.hoverDate),isLastSelectedDay:I(ee),isFirstSelectedDay:N(ee),isHoveringRight:D(ee),rangeIsDifferent:a(h),onFocus:O=>q.$emit("focus",ee),onClick:T,onHover:O=>q.$emit("hover",ee)},null,8,["selectedAccessibilityLabelPrefix","weekday","focused","day","selected","inRange","disabled","inHoveringRange","isLastSelectedDay","isFirstSelectedDay","isHoveringRight","rangeIsDifferent","onFocus","onHover"])):(l(),L(a(qr),{key:0,lastDayOfMonth:a(g),onHover:j[0]||(j[0]=O=>q.$emit("hover",null))},null,8,["lastDayOfMonth"]))],64))),128))],2))),128))])],2)],2))}});Rr.__docgenInfo={exportName:"default",displayName:"Month",description:"",tags:{},props:[{name:"focusedDate",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"Range"}},{name:"hoverDate",required:!1,type:{name:"Date"}},{name:"month",required:!0,type:{name:"number"}},{name:"year",required:!0,type:{name:"number"}},{name:"disableDatesBefore",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",required:!1,type:{name:"Date"}},{name:"disableSpecificDates",required:!1,type:{name:"Array",elements:[{name:"Date"}]}},{name:"allowRange",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",required:!0,type:{name:"number"}},{name:"accessibilityLabelPrefixes",required:!1,type:{name:"TSTupleType"}}],events:[{name:"hover",type:{names:["union"]}},{name:"focus",type:{names:["union"]}},{name:"click",type:{names:["Date"]}},{name:"change",type:{names:["union"]}}]};const UA=["id"],us=M({props:{id:null,modelValue:null,month:null,year:null,allowRange:{type:Boolean},disableDatesBefore:null,disableDatesAfter:null,disableSpecificDates:null,multiMonth:{type:Boolean},weekStartsOn:{default:0},dayAccessibilityLabelPrefix:null},emits:["month-change","change","update:modelValue"],setup(t,{emit:n}){const o=t,i=C(),s=C(),r=p(()=>Lu(o.month,o.year)),u=p(()=>ku(o.month)),m=p(()=>Lu(u.value,r.value)),x=p(()=>ku(u.value)),b=p(()=>CA(o.month,o.year)),g=p(()=>SA(o.month)),h=p(()=>{const O=wo(g.value);return O?Ta.months[O]:""}),T=p(()=>{if(o.multiMonth){const G=wo(x.value);return G?Ta.months[G]:""}const O=wo(u.value);return O?Ta.months[O]:""}),k=p(()=>o.multiMonth?m.value:r.value),N=p(()=>Me(o.modelValue)),I=p(()=>o.allowRange?"Start of range":o.dayAccessibilityLabelPrefix),D="End of range",E=p(()=>[I.value,D]),R=p(()=>`Show previous month, ${h.value} ${b.value}`),W=p(()=>`Show next month, ${T.value} ${k.value}`),Z=(O,G)=>{n("month-change",{month:O,year:G})},$=(O,G)=>{i.value=void 0,Z(O,G)},z=O=>{i.value=O||void 0},q=O=>{s.value=O||void 0},j=O=>{Z(O.getMonth(),O.getFullYear()),s.value=O,i.value=O},se=O=>{if(O){const{end:G}=O;s.value=G,i.value=new Date(G),n("update:modelValue",O)}n("change",O)},be=O=>{const{key:G}=O,Y=Me(o.modelValue),ce=i.value||Y&&Y.start;if(!!ce){if(G==="ArrowUp"){const de=new Date(ce);de.setDate(ce.getDate()-7),o.disableDatesBefore&&xa(de,o.disableDatesBefore)||o.disableSpecificDates&&No(de,o.disableSpecificDates)||j(de)}if(G==="ArrowDown"){const de=new Date(ce);de.setDate(ce.getDate()+7),o.disableDatesAfter&&Io(de,o.disableDatesAfter)||o.disableSpecificDates&&No(de,o.disableSpecificDates)||j(de)}if(G==="ArrowRight"){const de=new Date(ce);de.setDate(ce.getDate()+1),o.disableDatesAfter&&Io(de,o.disableDatesAfter)||o.disableSpecificDates&&No(de,o.disableSpecificDates)||j(de)}if(G==="ArrowLeft"){const de=new Date(ce);de.setDate(ce.getDate()-1),o.disableDatesBefore&&xa(de,o.disableDatesBefore)||o.disableSpecificDates&&No(de,o.disableSpecificDates)||j(de)}}},ee=O=>{const{key:G}=O;(G==="ArrowUp"||G==="ArrowDown"||G==="ArrowLeft"||G==="ArrowRight")&&(O.preventDefault(),O.stopPropagation())};function Me(O){return O instanceof Date?{start:O,end:O}:O}return(O,G)=>(l(),d("div",{id:t.id,class:c(a(Ie).DatePicker),onKeydown:ee,onKeyup:be},[S("div",{class:c(a(Ie).Header)},[A(a(he),{plain:"",icon:a(Zn),accessibilityLabel:a(R),onClick:G[0]||(G[0]=Y=>$(a(g),a(b)))},null,8,["icon","accessibilityLabel"]),A(a(he),{plain:"",icon:a(PA),accessibilityLabel:a(W),onClick:G[1]||(G[1]=Y=>$(a(u),a(r)))},null,8,["icon","accessibilityLabel"])],2),S("div",{class:c(a(Ie).MonthLayout)},[A(a(Rr),{focusedDate:i.value,month:t.month,year:t.year,selected:Me(t.modelValue),hoverDate:s.value,disableDatesBefore:t.disableDatesBefore,disableDatesAfter:t.disableDatesAfter,disableSpecificDates:t.disableSpecificDates,allowRange:t.allowRange,weekStartsOn:t.weekStartsOn,accessibilityLabelPrefixes:a(E),onChange:se,onHover:q,onFocus:z},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","disableSpecificDates","allowRange","weekStartsOn","accessibilityLabelPrefixes"]),t.multiMonth?(l(),L(a(Rr),{key:0,focusedDate:i.value,month:a(u),year:a(r),selected:a(N),hoverDate:s.value,disableDatesBefore:t.disableDatesBefore,disableDatesAfter:t.disableDatesAfter,disableSpecificDates:t.disableSpecificDates,allowRange:t.allowRange,weekStartsOn:t.weekStartsOn,accessibilityLabelPrefixes:a(E),onChange:se,onHover:q,onFocus:z},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","disableSpecificDates","allowRange","weekStartsOn","accessibilityLabelPrefixes"])):w("",!0)],2)],42,UA))}});us.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:"The selected date or range of dates",required:!1,type:{name:"Range"}},{name:"month",description:"The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December",required:!0,type:{name:"number"}},{name:"year",description:"The year to show",required:!0,type:{name:"number"}},{name:"allowRange",description:"Allow a range of dates to be selected",required:!1,type:{name:"boolean"}},{name:"disableDatesBefore",description:"Disable selecting dates before this.",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",description:"Disable selecting dates after this.",required:!1,type:{name:"Date"}},{name:"disableSpecificDates",description:"Disable specific dates.",required:!1,type:{name:"Array",elements:[{name:"Date"}]}},{name:"multiMonth",description:"The selection can span multiple months",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",description:"First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"dayAccessibilityLabelPrefix",description:"Visually hidden prefix text for selected days on single selection date pickers",required:!1,type:{name:"string"}}],events:[{name:"month-change",type:{names:["{ month: number, year: number }"]}},{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const jA="Polaris-DescriptionList",WA="Polaris-DescriptionList__Term",zA="Polaris-DescriptionList--spacingTight",GA="Polaris-DescriptionList__Description";var Xi={DescriptionList:jA,Term:WA,spacingTight:zA,Description:GA};const ds=M({props:{spacing:{default:"loose"}},setup(t){const n=t,o=p(()=>F(Xi.DescriptionList,n.spacing==="tight"&&Xi.spacingTight));return(i,s)=>(l(),d("dl",{class:c(a(o))},[f(i.$slots,"default")],2))}});ds.__docgenInfo={exportName:"default",displayName:"DescriptionList",description:"",tags:{},props:[{name:"spacing",description:"Determines the spacing between list items",tags:{default:[{description:"'loose'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"loose"'},{name:'"tight"'}]},defaultValue:{func:!1,value:"'loose'"}}],slots:[{name:"default"}]};const jp=M({setup(t){const n=F(Xi.Term);return(o,i)=>(l(),d("dt",{class:c(a(n))},[f(o.$slots,"default")],2))}});jp.__docgenInfo={exportName:"default",displayName:"DescriptionListTerm",description:"",tags:{},slots:[{name:"default"}]};const Wp=M({setup(t){const n=F(Xi.Description);return(o,i)=>(l(),d("dd",{class:c(a(n))},[f(o.$slots,"default")],2))}});Wp.__docgenInfo={exportName:"default",displayName:"DescriptionListDesc",description:"",tags:{},slots:[{name:"default"}]};const XA="Polaris-DisplayText",KA="Polaris-DisplayText--sizeSmall",YA="Polaris-DisplayText--sizeMedium",ZA="Polaris-DisplayText--sizeLarge",QA="Polaris-DisplayText--sizeExtraLarge";var wu={DisplayText:XA,sizeSmall:KA,sizeMedium:YA,sizeLarge:ZA,sizeExtraLarge:QA};const Ro=M({props:{element:{default:"p"},size:{default:"medium"}},setup(t){const n=t,o=p(()=>F(wu.DisplayText,n.size&&wu[Ne("size",n.size)]));return(i,s)=>(l(),L(Oe(t.element),{class:c(a(o))},{default:y(()=>[f(i.$slots,"default")]),_:3},8,["class"]))}});Ro.__docgenInfo={exportName:"default",displayName:"DisplayText",description:"",tags:{},props:[{name:"element",description:"Name of element to use for text",tags:{default:[{description:"'p'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'p'"}},{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}]};const JA={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ek=S("path",{"fill-rule":"evenodd",d:"M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM5.293 8.293l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 7.414V15a1 1 0 1 1-2 0V7.414L6.707 9.707a1 1 0 0 1-1.414-1.414z"},null,-1),tk=[ek];function ak(t,n){return l(),d("svg",JA,tk)}var nk={render:ak};function zp(t=""){const n=t.toLowerCase();return n.charAt(0).toUpperCase()+n.slice(1)}const ok="Polaris-DropZone",ik="Polaris-DropZone--focused",sk="Polaris-DropZone--hasOutline",lk="Polaris-DropZone--isDisabled",rk="Polaris-DropZone--isDragging",ck="Polaris-DropZone--sizeLarge",uk="Polaris-DropZone--sizeMedium",dk="Polaris-DropZone--sizeSmall",pk="Polaris-DropZone--measuring",mk="Polaris-DropZone__Container",yk="Polaris-DropZone__Overlay",gk="Polaris-DropZone--hasError";var Lt={DropZone:ok,focused:ik,hasOutline:sk,isDisabled:lk,isDragging:rk,sizeLarge:ck,sizeMedium:uk,sizeSmall:dk,measuring:pk,Container:mk,Overlay:yk,hasError:gk};const Gp=M({props:{id:null,accept:null,disabled:{type:Boolean},type:null,multiple:{type:Boolean},openFileDialog:{type:Boolean}},emits:["focus","blur","input","file-dialog-close"],setup(t,{emit:n}){const o=t,i=C();Se(()=>{o.openFileDialog&&s()}),Xt(()=>{o.openFileDialog&&s()});const s=()=>{r(),n("file-dialog-close")},r=()=>{!i.value||i.value.click()},u=b=>{!b.target.files||n("input",b)},m=()=>{n("focus")},x=()=>{n("blur")};return(b,g)=>(l(),d("input",me(o,{ref_key:"fileInputNode",ref:i,autoComplete:"off",onChange:u,onFocus:m,onBlur:x}),null,16))}});Gp.__docgenInfo={exportName:"default",displayName:"DropZoneInput",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"accept",required:!1,type:{name:"string"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"DropZoneFileType"}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"openFileDialog",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["Event"]}},{name:"file-dialog-close"}]};const hk=["dragover","dragenter","drop"];function bk(t,n){return t.type==="application/x-moz-file"||fk(t,n)}function Pu(t){if(vk(t)&&t.dataTransfer){const n=t.dataTransfer;if(n.files&&n.files.length)return Array.from(n.files);if(n.items&&n.items.length)return Array.from(n.items)}else if(xk(t)&&t.target.files){const n=t.target;return Array.from(n.files||[])}return[]}function fk(t,n){if(t&&n){const o=t.name||"",i=t.type||"",s=i.replace(/\/.*$/,"");return(Array.isArray(n)?n:n.split(",")).some(u=>{const m=u.trim();return m.startsWith(".")?o.toLowerCase().endsWith(m.toLowerCase()):m.endsWith("/*")?s===m.replace(/\/.*$/,""):i===m})}return!0}function vk(t){return hk.indexOf(t.type)>0}function xk(t){return t.type==="change"}const Tk=!0;function Xp(t){return t?"allowMultiple":"single"}const Sk=["aria-disabled"],ps=M({props:{label:null,labelAction:null,labelHidden:{type:Boolean},id:null,accept:null,type:{default:"file"},active:{type:Boolean},error:{type:Boolean},outline:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},overlayText:null,errorOverlayText:null,allowMultiple:{type:Boolean,default:Tk},disabled:{type:Boolean,default:!1},dropOnPage:{type:Boolean},openFileDialog:{type:Boolean},variableHeight:{type:Boolean},customValidator:null},emits:["drop","drop-accepted","drop-rejected","dragover","dragenter","dragleave","file-dialog-close"],setup(t,{emit:n}){const o=t,i=ve("lang"),s=ue(),r=Kt(),{useUniqueId:u}=De(),m=u("DropZone",o.id),x=zp(o.type),b=Xp(o.allowMultiple||!1),g=C(null),h=C([]),T=C(!0),k=C("large"),N=C(!1),I=C(!1),D=C(!1),E=o.overlayText?o.overlayText:i.Polaris.DropZone[b][`overlayText${x}`],R=o.errorOverlayText?o.errorOverlayText:i.Polaris.DropZone[`errorOverlayText${x}`],W=i.Polaris.DropZone[b][`label${x}`],Z=p(()=>s.label||o.label?o.labelHidden:!0),$=p(()=>F(Lt.DropZone,o.outline&&Lt.hasOutline,D.value&&Lt.focused,(o.active||N.value)&&Lt.isDragging,o.disabled&&Lt.isDisabled,(I.value||o.error)&&Lt.hasError,!o.variableHeight&&Lt[Ne("size",k.value)],T.value&&Lt.measuring)),z=p(()=>(o.active||N.value)&&!I.value&&!o.error&&o.overlay),q=p(()=>N.value&&(I.value||o.error));Se(()=>{j();const oe=o.dropOnPage?document:g.value;!oe||(oe.addEventListener("drop",O),oe.addEventListener("dragover",Y),oe.addEventListener("dragenter",G),oe.addEventListener("dragleave",ce),window.addEventListener("resize",j))}),pt(()=>{const oe=o.dropOnPage?document:g.value;!oe||(oe.removeEventListener("drop",O),oe.removeEventListener("dragover",Y),oe.removeEventListener("dragenter",G),oe.removeEventListener("dragleave",ce),window.removeEventListener("resize",j))});const j=zt(()=>{if(!g.value)return;if(o.variableHeight){T.value=!1;return}const oe=g.value.getBoundingClientRect().width;k.value="large",oe<100?k.value="small":oe<160&&(k.value="medium"),T.value&&(T.value=!1)},50,{trailing:!0}),se=()=>{D.value=!0},be=()=>{D.value=!1},ee=()=>{n("file-dialog-close")},Me=oe=>{const Te=[],Be=[];return Array.from(oe).forEach(qe=>{!bk(qe,o.accept)||o.customValidator&&!o.customValidator(qe)?Be.push(qe):Te.push(qe)}),o.allowMultiple||(Te.splice(1,Te.length),Be.push(...Te.slice(1))),{files:oe,acceptedFiles:Te,rejectedFiles:Be}},O=oe=>{if(ye(oe),o.disabled)return;const Te=Pu(oe),{files:Be,acceptedFiles:qe,rejectedFiles:_e}=Me(Te);h.value=[],N.value=!1,I.value=_e.length>0,n("drop",Be,qe,_e),qe.length>0&&n("drop-accepted",qe),_e.length>0&&n("drop-rejected",_e),oe.target.value=""},G=oe=>{if(ye(oe),o.disabled)return;const Te=Pu(oe);if(oe.target&&!h.value.includes(oe.target)&&h.value.push(oe.target),N.value)return;const{rejectedFiles:Be}=Me(Te);N.value=!0,I.value=Be.length>0,n("dragenter")},Y=oe=>{ye(oe),!o.disabled&&n("dragover")},ce=oe=>{oe.preventDefault(),!o.disabled&&(h.value=h.value.filter(Te=>{const Be=o.dropOnPage&&!Xr?document.body:Te;return Te!==oe.target&&Be&&Be.contains(Te)}),!(h.value.length>0)&&(N.value=!1,I.value=!1,n("dragleave")))},de=()=>{const oe=g.value&&g.value.querySelector(`#${m}`);oe&&oe instanceof HTMLElement&&oe.click()};function $e(oe){if(!o.disabled)return r.onClick?r.onClick(oe):de()}const ye=oe=>{oe.preventDefault(),oe.stopPropagation()},Ce=Hi({disabled:o.disabled,focused:D,size:k,type:o.type,measuring:T,allowMultiple:o.allowMultiple});return Xe("dropZoneContext",Ce),(oe,Te)=>(l(),L(a(ao),{id:a(m),action:t.labelAction,labelHidden:a(Z)},{label:y(()=>[a(s).label?f(oe.$slots,"label",{key:0}):t.label?(l(),d(K,{key:1},[ie(U(t.label),1)],64)):(l(),d(K,{key:2},[ie(U(a(W)),1)],64))]),default:y(()=>[S("div",{ref_key:"dropZoneRef",ref:g,class:c(a($)),"aria-disabled":t.disabled,onClick:$e,onDragstart:ye},[a(z)?(l(),d("div",{key:0,class:c(a(Lt).Overlay)},[A(a(Ve),{vertical:"",spacing:"tight"},{default:y(()=>[k.value==="small"?(l(),L(a(re),{key:0,source:a(nk),color:"interactive"},null,8,["source"])):(l(),L(a(sa),{key:1},{default:y(()=>[A(a(ct),{variation:"strong"},{default:y(()=>[ie(U(a(E)),1)]),_:1})]),_:1}))]),_:1})],2)):w("",!0),a(q)?(l(),d("div",{key:1,class:c(a(Lt).Overlay)},[A(a(Ve),{vertical:"",spacing:"tight"},{default:y(()=>[k.value==="small"?(l(),L(a(re),{key:0,source:a(Lp),color:"critical"},null,8,["source"])):(l(),L(a(sa),{key:1},{default:y(()=>[A(a(ct),{variation:"strong"},{default:y(()=>[ie(U(a(R)),1)]),_:1})]),_:1}))]),_:1})],2)):w("",!0),A(a(lt),null,{default:y(()=>[A(Gp,{type:"file",id:a(m),accept:t.accept,disabled:t.disabled,multiple:t.allowMultiple||!1,openFileDialog:t.openFileDialog,onInput:O,onFocus:se,onBlur:be,onFileDialogClose:ee},null,8,["id","accept","disabled","multiple","openFileDialog"])]),_:1}),S("div",{class:c(a(Lt).Container)},[f(oe.$slots,"default")],2)],42,Sk)]),_:3},8,["id","action","labelHidden"]))}});ps.__docgenInfo={exportName:"default",displayName:"DropZone",description:"",tags:{},props:[{name:"label",description:"Label for the file input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for file input",required:!1,type:{name:"string"}},{name:"accept",description:"Allowed file types",required:!1,type:{name:"string"}},{name:"type",description:"Whether is a file or an image",tags:{default:[{description:"'file'",title:"default"}]},required:!1,type:{name:"DropZoneFileType"},defaultValue:{func:!1,value:"'file'"}},{name:"active",description:"Sets an active state",required:!1,type:{name:"boolean"}},{name:"error",description:"Sets an error state",required:!1,type:{name:"boolean"}},{name:"outline",description:"Displays an outline border",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlay",description:"Displays an overlay on hover",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlayText",description:"Text that appears in the overlay",required:!1,type:{name:"string"}},{name:"errorOverlayText",description:"Text that appears in the overlay when set in error state",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allows multiple files to be uploaded at once",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"defaultAllowMultiple"}},{name:"disabled",description:"Sets a disabled state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropOnPage",description:"Allows a file to be dropped anywhere on the page",required:!1,type:{name:"boolean"}},{name:"openFileDialog",description:"Sets the default file dialog state",required:!1,type:{name:"boolean"}},{name:"variableHeight",description:"Allows child content to adjust height",required:!1,type:{name:"boolean"}}],events:[{name:"drop",type:{names:["Array"]}},{name:"drop-accepted",type:{names:["Array"]}},{name:"drop-rejected",type:{names:["Array"]}},{name:"dragover"},{name:"dragenter"},{name:"dragleave"},{name:"file-dialog-close"}],slots:[{name:"label"},{name:"default"}]};const Ck={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Ak=S("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM5.3 8.3l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L11 7.4V15a1 1 0 1 1-2 0V7.4L6.7 9.7a1 1 0 0 1-1.4-1.4z",fill:"#5C5F62"},null,-1),kk=[Ak];function Lk(t,n){return l(),d("svg",Ck,kk)}var Nk={render:Lk};const wk="Polaris-DropZone-FileUpload",Pk="Polaris-DropZone-FileUpload--large",Mk="Polaris-DropZone-FileUpload--small",_k="Polaris-DropZone-FileUpload__Action",Ik="Polaris-DropZone-FileUpload--disabled",Bk="Polaris-DropZone-FileUpload__ActionTitle";var Ao={FileUpload:wk,large:Pk,small:Mk,Action:_k,disabled:Ik,ActionTitle:Bk,"ActionTitle-disabled":"Polaris-DropZone-FileUpload__ActionTitle--disabled","ActionTitle-focused":"Polaris-DropZone-FileUpload__ActionTitle--focused"};const Kp=M({props:{actionTitle:null,actionHint:null},setup(t){const n=t,o=ve("lang"),{size:i,measuring:s,type:r,disabled:u,allowMultiple:m}=ih(ve("dropZoneContext")),x=zp(r.value),b=Xp(m.value),g=p(()=>n.actionTitle||o.Polaris.DropZone[b][`actionTitle${x}`]),h=F(Ao.Action,u.value&&Ao.disabled),T=p(()=>F(Ao.FileUpload,i.value==="large"&&Ao.large,i.value==="small"&&Ao.small));return(k,N)=>(l(),d("div",{class:c(a(T))},[a(i)==="large"||a(i)==="medium"?(l(),L(a(Ve),{key:0,vertical:"",spacing:"tight"},{default:y(()=>[S("div",{class:c(a(h))},U(a(g)),3),t.actionHint?(l(),L(a(sa),{key:0},{default:y(()=>[A(a(ct),{variation:"subdued"},{default:y(()=>[ie(U(t.actionHint),1)]),_:1})]),_:1})):w("",!0)]),_:1})):(l(),L(a(Nk),{key:1,width:"20"}))],2))}});Kp.__docgenInfo={exportName:"default",displayName:"FileUpload",description:"",tags:{},props:[{name:"actionTitle",required:!1,type:{name:"string"}},{name:"actionHint",required:!1,type:{name:"string"}}]};const Dk="Polaris-ExceptionList",$k="Polaris-ExceptionList__Item",Fk="Polaris-ExceptionList__Icon",Ek="Polaris-ExceptionList--statusWarning",Ok="Polaris-ExceptionList--statusCritical",qk="Polaris-ExceptionList__Bullet",Rk="Polaris-ExceptionList__Title",Vk="Polaris-ExceptionList__Description";var Ut={ExceptionList:Dk,Item:$k,Icon:Fk,statusWarning:Ek,statusCritical:Ok,Bullet:qk,Title:Rk,Description:Vk};const Yp=M({setup(t){return(n,o)=>(l(),d("ul",{class:c(a(Ut).ExceptionList)},[f(n.$slots,"default")],2))}});Yp.__docgenInfo={exportName:"default",displayName:"ExceptionList",description:"",tags:{},slots:[{name:"default"}]};const Hk="Polaris-Truncate";var Uk={Truncate:Hk};const Zp=M({setup(t){return(n,o)=>{const i=ip("component");return l(),L(i,{class:c(a(Uk).Truncate)},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["class"])}}});Zp.__docgenInfo={exportName:"default",displayName:"Truncate",description:"",tags:{},slots:[{name:"default"}]};const ms=M({props:{status:null,icon:null,title:null,truncate:{type:Boolean}},setup(t){const n=t,o=ue(),i=p(()=>F(Ut.Item,n.status&&Ut[Ne("status",n.status)]));return(s,r)=>(l(),d("li",{class:c(a(i))},[S("span",{class:c(a(Ut).Icon)},[t.icon?(l(),L(a(re),{key:0,source:t.icon},null,8,["source"])):(l(),d("span",{key:1,class:c(a(Ut).Bullet)},null,2))],2),t.truncate?(l(),L(a(Zp),{key:0},{default:y(()=>[t.title?(l(),d("span",{key:0,class:c(a(Ut).Title)},U(t.title),3)):w("",!0),a(o).default?(l(),d("span",{key:1,class:c(a(Ut).Description)},[f(s.$slots,"default")],2)):w("",!0)]),_:3})):(l(),d(K,{key:1},[t.title?(l(),d("span",{key:0,class:c(a(Ut).Title)},U(t.title),3)):w("",!0),a(o).default?(l(),d("span",{key:1,class:c(a(Ut).Description)},[f(s.$slots,"default")],2)):w("",!0)],64))],2))}});ms.__docgenInfo={exportName:"default",displayName:"ExceptionListItem",description:"",tags:{},props:[{name:"status",description:"Set the color of the icon and title for the given item.",required:!1,type:{name:"union",elements:[{name:'"critical"'},{name:'"warning"'}]}},{name:"icon",description:"Icon displayed by the list item",required:!1,type:{name:"IconSource"}},{name:"title",description:"Text displayed beside the icon",required:!1,type:{name:"string"}},{name:"truncate",description:"Should the description be truncated at end of line",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const jk={inheritAttrs:!1,render(){return null}},Qp=M(_(v({},jk),{props:{disabled:{type:Boolean},root:null},setup(t){const n=t,o=()=>{!n.disabled&&n.root&&!n.root.querySelector("[autofocus]")&&Do(n.root,!1)};return Ee([()=>n.disabled,()=>n.root],()=>o()),Se(()=>{o()}),()=>{}}}));Qp.__docgenInfo={exportName:"default",displayName:"Focus",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"root",required:!0,type:{name:"union",elements:[{name:"HTMLElement"},{name:"null"}]}}]};const Wk="Polaris-FooterHelp",zk="Polaris-FooterHelp__Text";var Mu={FooterHelp:Wk,Text:zk};const ys=M({setup(t){return(n,o)=>(l(),d("div",{class:c(a(Mu).FooterHelp)},[S("div",{class:c(a(Mu).Text)},[f(n.$slots,"default")],2)],2))}});ys.__docgenInfo={exportName:"default",displayName:"FooterHelp",description:"",tags:{},slots:[{name:"default"}]};const Gk=["acceptCharset","action","encType","method","name","noValidate","target","autocomplete"],Xk=S("button",{type:"submit","aria-hidden":"true",tabIndex:"-1"},"Submit",-1),gs=M({props:{acceptCharset:null,action:null,autoComplete:{type:Boolean},encType:null,implicitSubmit:{type:Boolean,default:!0},method:{default:"post"},name:null,noValidate:{type:Boolean},preventDefault:{type:Boolean,default:!0},target:null},emits:["submit"],setup(t,{emit:n}){const o=t,i=p(()=>{if(typeof o.autoComplete!="undefined")return o.autoComplete?"on":"off"}),s=r=>{o.preventDefault&&r.preventDefault(),n("submit",r)};return(r,u)=>(l(),d("form",{acceptCharset:t.acceptCharset||void 0,action:t.action,encType:t.encType,method:t.method,name:t.name,noValidate:t.noValidate,target:t.target,autocomplete:a(i),onSubmit:s},[t.implicitSubmit?(l(),L(a(lt),{key:0},{default:y(()=>[Xk]),_:1})):w("",!0),f(r.$slots,"default")],40,Gk))}});gs.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"acceptCharset",description:"Space separated list of character encodings",required:!1,type:{name:"string"}},{name:"action",description:"Where to send form-data on submittal",required:!1,type:{name:"string"}},{name:"autoComplete",description:"Grants the browser the ability to autocomplete input elements",required:!1,type:{name:"boolean"}},{name:"encType",description:"Media type when submitting content to server",required:!1,type:{name:"Enctype"}},{name:"implicitSubmit",description:"Toggles if form submits on Enter keypress. Defaults to true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"method",description:"Method used to submit form",required:!1,type:{name:"Method"},defaultValue:{func:!1,value:"'post'"}},{name:"name",description:"A unique name for the form",required:!1,type:{name:"string"}},{name:"noValidate",description:"Whether or not form is validated when submitting",required:!1,type:{name:"boolean"}},{name:"preventDefault",description:"Blocks the default form action",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"target",description:"Where to display response after form submittal",required:!1,type:{name:"Target"}}],events:[{name:"submit",type:{names:["Event"]}}],slots:[{name:"default"}]};const Kk="Polaris-FormLayout",Yk="Polaris-FormLayout__Title",Zk="Polaris-FormLayout__Items",Qk="Polaris-FormLayout__HelpText",Jk="Polaris-FormLayout__Item",eL="Polaris-FormLayout--grouped",tL="Polaris-FormLayout--condensed";var oa={FormLayout:Kk,Title:Yk,Items:Zk,HelpText:Qk,Item:Jk,grouped:eL,condensed:tL};const sc=M({setup(t){return(n,o)=>(l(),d("div",{class:c(a(oa).Item)},[f(n.$slots,"default")],2))}});sc.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const lc=M({props:{condensed:{type:Boolean}},setup(t,{expose:n}){const o=t,i=ue(),{useUniqueId:s}=De(),r=s("FormLayoutGroup"),u=`${r}HelpText`,m=`${r}Title`;n({name:"FormGroup"});const x=p(()=>F(o.condensed?oa.condensed:oa.grouped));return(b,g)=>(l(),d("div",{role:"group",class:c(a(x)),"aria-labelledby":m,"aria-describedby":u},[a(i).title?(l(),d("div",{key:0,id:m,class:c(a(oa).Title)},[f(b.$slots,"title")],2)):w("",!0),S("div",{class:c(a(oa).Items)},[a(i).default?(l(!0),d(K,{key:0},ge(a(i).default(),(h,T)=>(l(),L(a(sc),{key:T},{default:y(()=>[(l(),L(Oe(h)))]),_:2},1024))),128)):f(b.$slots,"default",{key:1})],2),a(i)["help-text"]?(l(),d("div",{key:1,id:u,class:c(a(oa).HelpText)},[f(b.$slots,"help-text")],2)):w("",!0)],2))}});lc.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"condensed",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"},{name:"help-text"}]};const Ot=M({setup(t){const n=C([]),o=C([]),i=ue(),s=p(()=>{const r=[];return i.default&&i.default().map(u=>{const m=u.children;typeof m=="string"&&m==="v-if"||(u.type.toString()==="Symbol(Fragment)"||u.type.toString()==="Symbol()"?m.forEach(x=>{r.push(x)}):r.push(u))}),r});return sh(()=>{n.value=[]}),Se(()=>{n.value.forEach(r=>{o.value.push(r.name==="FormGroup")})}),(r,u)=>(l(),d("div",{class:c(a(oa).FormLayout)},[a(s).length?(l(!0),d(K,{key:0},ge(a(s),(m,x)=>(l(),d(K,null,[o.value[x]?(l(),L(Oe(m),{key:1,ref_for:!0,ref:b=>{n.value[x]=b}},null,512)):(l(),L(a(sc),{key:x,class:c(a(oa).Item)},{default:y(()=>[(l(),L(Oe(m),{ref_for:!0,ref:b=>{n.value[x]=b}},null,512))]),_:2},1032,["class"]))],64))),256)):f(r.$slots,"default",{key:1})],2))}});Ot.__docgenInfo={exportName:"default",displayName:"FormLayout",description:"",tags:{},slots:[{name:"default"}]};function _u(t,n,o){if(!document)return;(o||document.documentElement).style.setProperty(t,n)}const aL="Polaris-Frame",nL="Polaris-Frame__Navigation",oL="Polaris-Frame--hasTopBar",iL="Polaris-Frame__NavigationDismiss",sL="Polaris-Frame__TopBar",lL="Polaris-Frame__ContextualSaveBar",rL="Polaris-Frame__Main",cL="Polaris-Frame--hasNav",uL="Polaris-Frame__Content",dL="Polaris-Frame__GlobalRibbonContainer",pL="Polaris-Frame__LoadingBar",mL="Polaris-Frame__Skip",yL="Polaris-Frame--focused",gL="Polaris-Frame--pressed";var Ke={Frame:aL,Navigation:nL,hasTopBar:oL,"Navigation-enter":"Polaris-Frame__Navigation--enter","Navigation-enterActive":"Polaris-Frame__Navigation--enterActive","Navigation-exit":"Polaris-Frame__Navigation--exit","Navigation-exitActive":"Polaris-Frame__Navigation--exitActive",NavigationDismiss:iL,"Navigation-visible":"Polaris-Frame__Navigation--visible",TopBar:sL,ContextualSaveBar:lL,Main:rL,hasNav:cL,Content:uL,GlobalRibbonContainer:dL,LoadingBar:pL,Skip:mL,focused:yL,pressed:gL};const hL={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},bL=S("path",{d:"m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"},null,-1),fL=[bL];function vL(t,n){return l(),d("svg",hL,fL)}var rc={render:vL};const xL="Polaris-Frame-CssAnimation--startFade",TL="Polaris-Frame-CssAnimation--endFade";var Iu={startFade:xL,endFade:TL};const Jp=M({props:{in:{type:Boolean},type:null},setup(t){const n=t,o={Entering:"entering",Entered:"entered",Exiting:"exiting",Exited:"exited"},i=C(null),s=C(n.in?o.Entering:o.Exited),r=p(()=>F(Iu[Ne("start",n.type)],n.in&&Iu[Ne("end",n.type)]));Ee(()=>s.value,()=>{s.value===o.Entering&&m(o.Entered)}),Ee(()=>n.in,()=>{n.in&&m(o.Entering),!n.in&&m(o.Exiting)});const u=()=>{s.value===o.Exiting&&m(o.Exited)},m=x=>{s.value=x,x===o.Entering&&i.value&&i.value.getBoundingClientRect()};return(x,b)=>(l(),d("div",{class:c(a(r)),ref_key:"frameCssAnimationRef",ref:i,onTransitionend:u},[s.value!==o.Exited||n.in?f(x.$slots,"default",{key:0}):w("",!0)],34))}});Jp.__docgenInfo={exportName:"default",displayName:"CssAnimation",description:"",tags:{},props:[{name:"in",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"AnimationType"}}],slots:[{name:"default"}]};function SL(t){const n=typeof t;return t!=null&&(n==="object"||n==="function")}function em(t,n){if(!t)return null;const o=Object.keys(t);for(const i of o){if(i===n)return t[n];if(SL(t[i])){const s=em(t[i],n);if(s)return s}}return null}function cc(t={},n=0,o="width"){const i=typeof t=="number"?t:em(t,o);return i?`${i}px`:`${n}px`}const CL="Polaris-Frame-ContextualSaveBar",AL="Polaris-Frame-ContextualSaveBar__LogoContainer",kL="Polaris-Frame-ContextualSaveBar__ContextControl",LL="Polaris-Frame-ContextualSaveBar__Message",NL="Polaris-Frame-ContextualSaveBar__Contents",wL="Polaris-Frame-ContextualSaveBar--fullWidth",PL="Polaris-Frame-ContextualSaveBar__ActionContainer",ML="Polaris-Frame-ContextualSaveBar__Action";var pa={ContextualSaveBar:CL,LogoContainer:AL,ContextControl:kL,Message:LL,Contents:NL,fullWidth:wL,ActionContainer:PL,Action:ML};const tm=M({props:{open:{type:Boolean}},emits:["discard","cancel"],setup(t,{emit:n}){const o=ve("lang"),i=o.Polaris.DiscardConfirmationModal.message,s=o.Polaris.DiscardConfirmationModal.title,r=o.Polaris.DiscardConfirmationModal.primaryAction,u=o.Polaris.DiscardConfirmationModal.secondaryAction,m=()=>{n("discard")},x=()=>{n("cancel")};return(b,g)=>(l(),L(a(Ma),{open:t.open,onClose:x,primaryAction:{content:a(r),destructive:!0,onAction:m},secondaryActions:[{content:a(u),onAction:x}],sectioned:""},{title:y(()=>[ie(U(a(s)),1)]),content:y(()=>[ie(U(a(i)),1)]),_:1},8,["open","primaryAction","secondaryActions"]))}});tm.__docgenInfo={exportName:"default",displayName:"DiscardConfirmationModal",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}}],events:[{name:"discard"},{name:"cancel"}]};const am=M({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=ue(),s=p(()=>F(pa.Contents,n.fullWidth&&pa.fullWidth)),r=o.Polaris.ContextualSaveBar.save,u=o.Polaris.ContextualSaveBar.discard,{useFrame:m}=no(),{logo:x}=m(),b=cc(x,104),g=C(!1),h=()=>{g.value=!g.value},T=()=>{g.value=!1},k=()=>{n.discardAction&&(n.discardAction.discardConfirmationModal?h():n.discardAction.onAction&&n.discardAction.onAction())},N=()=>{n.discardAction&&n.discardAction.onAction&&n.discardAction.onAction(),T()};return(I,D)=>(l(),d(K,null,[A(a(Yt),{"color-scheme":"dark"},{default:y(()=>[S("div",{class:c(a(pa).ContextualSaveBar)},[a(i).contextControl?(l(),d("div",{key:0,class:c(a(pa).ContextControl)},[f(I.$slots,"contextControl")],2)):w("",!0),!t.alignContentFlush&&!a(i).contextControl?(l(),d("div",{key:1,class:c(a(pa).LogoContainer),style:Fe(a(b))},[a(x)?(l(),L(a(Jn),{key:0,style:Fe({width:a(b)}),source:a(x).contextualSaveBarSource||"",alt:""},null,8,["style","source"])):w("",!0)],6)):w("",!0),S("div",{class:c(a(s))},[S("h2",{class:c(a(pa).Message)},U(t.message),3),S("div",{class:c(a(pa).ActionContainer)},[A(a(Ve),{spacing:"tight",wrap:!1},{default:y(()=>[f(I.$slots,"secondaryMenu"),t.discardAction?(l(),L(a(he),{key:0,url:t.discardAction.url,loading:t.discardAction.loading,disabled:t.discardAction.disabled,accessibilityLabel:t.discardAction.content,onClick:k},{default:y(()=>[t.discardAction.content?(l(),d(K,{key:0},[ie(U(t.discardAction.content),1)],64)):(l(),d(K,{key:1},[ie(U(a(u)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel"])):w("",!0),t.saveAction?(l(),L(a(he),{key:1,primary:"",url:t.saveAction.url,loading:t.saveAction.loading,disabled:t.saveAction.disabled,accessibilityLabel:t.saveAction.content,onClick:t.saveAction.onAction},{default:y(()=>[t.saveAction.content?(l(),d(K,{key:0},[ie(U(t.saveAction.content),1)],64)):(l(),d(K,{key:1},[ie(U(a(r)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel","onClick"])):w("",!0)]),_:3})],2)],2)],2)]),_:3}),t.discardAction&&t.discardAction.onAction&&t.discardAction.discardConfirmationModal?(l(),L(a(tm),{key:0,open:g.value,onCancel:h,onDiscard:N},null,8,["open"])):w("",!0)],64))}});am.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}}],slots:[{name:"contextControl"},{name:"secondaryMenu"}]};const _L="Polaris-Frame-Loading",IL="Polaris-Frame-Loading__Level";var Bu={Loading:_L,Level:IL};const BL=["aria-valuenow","aria-label"],nm=M({setup(t){const o=ve("lang"),i=C(0),s=C(!1),r=p(()=>({transform:`scaleX(${Math.floor(i.value)/100})`}));Se(()=>{u()}),Ee(()=>[s.value,i.value],()=>{u()});const u=()=>{i.value>=99||s.value||requestAnimationFrame(()=>{const x=Math.max((99-i.value)/10,1);s.value=!0,i.value=i.value+x})},m=()=>{s.value=!1};return(x,b)=>(l(),d("div",{class:c(a(Bu).Loading),"aria-valuenow":i.value,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar","aria-label":a(o).Polaris.Loading.label},[S("div",{class:c(a(Bu).Level),style:Fe(a(r)),onTransitionend:m},null,38)],10,BL))}});nm.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const DL="Polaris-Frame-Toast",$L="Polaris-Frame-Toast__Action",FL="Polaris-Frame-Toast--error",EL="Polaris-Frame-Toast__CloseButton";var $i={Toast:DL,Action:$L,error:FL,CloseButton:EL};const om=M({props:{content:null,duration:null,error:{type:Boolean},action:null},emits:["dismiss"],setup(t,{emit:n}){const o=t,i=5e3,s=1e4,r=C(),u=p(()=>F($i.Toast,o.error&&$i.error));Se(()=>{let x=o.duration||i;o.action&&!o.duration?x=s:o.action&&o.duration&&o.duration<s&&console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it."),r.value=setTimeout(m,x)}),pt(()=>{clearTimeout(r.value)});const m=()=>{n("dismiss")};return(x,b)=>(l(),L(a(Yt),{"color-scheme":"dark"},{default:y(()=>[S("div",{class:c(a(u))},[A(a(vt),{keyCode:a(ze).Escape,handler:m},null,8,["keyCode"]),ie(U(t.content),1),f(x.$slots,"default"),t.action?(l(),d("div",{key:0,class:c(a($i).Action)},[A(a(he),{plain:"",monochrome:"",onClick:t.action.onAction},{default:y(()=>[ie(U(t.action.content),1)]),_:1},8,["onClick"])],2)):w("",!0),S("button",{type:"button",class:c(a($i).CloseButton),onClick:m},[A(a(re),{source:a(rc)},null,8,["source"])],2)],2)]),_:3}))}});om.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const OL="Polaris-Frame-ToastManager",qL="Polaris-Frame-ToastManager__ToastWrapper";var ko={ToastManager:OL,ToastWrapper:qL,"ToastWrapper-enter":"Polaris-Frame-ToastManager__ToastWrapper--enter","ToastWrapper-exit":"Polaris-Frame-ToastManager__ToastWrapper--exit","ToastWrapper-enter-done":"Polaris-Frame-ToastManager--toastWrapperEnterDone"};const im=M({props:{toastMessages:null},setup(t){const n=t,o=400,i=C([]),s=C(!1),r=()=>{let h=0;n.toastMessages.forEach((T,k)=>{const N=i.value[k];!N||(h+=N.clientHeight,N.style.setProperty("--pc-toast-manager-translate-y-in",`-${h}px`),N.style.setProperty("--pc-toast-manager-translate-y-out",`${-h+150}px`))})},u=h=>{h.classList.add(g.enterDone)},m=h=>{h.classList.add(g.enter)},x=(h,T)=>{h.classList.remove(g.enter),h.classList.add(g.enterDone),setTimeout(T,o)},b=(h,T)=>{h.classList.remove(g.enterDone),h.classList.add(g.exit),setTimeout(T,o)};Ee(()=>n.toastMessages,()=>{setTimeout(r,0)}),Se(()=>{s.value=!0});const g={enter:F(ko["ToastWrapper-enter"]),enterDone:F(ko["ToastWrapper-enter-done"]),exit:F(ko["ToastWrapper-exit"])};return(h,T)=>s.value?(l(),L(a(Fo),{key:0},{default:y(()=>[A(a(nt),{event:"resize",handler:r}),S("div",{class:c(a(ko).ToastManager),"aria-live":"assertive"},[A(lh,{name:"custom-classes",onAfterEnter:u,onBeforeEnter:m,onEnter:x,onLeave:b},{default:y(()=>[t.toastMessages.length>0?(l(!0),d(K,{key:0},ge(t.toastMessages,(k,N)=>(l(),d("div",{key:k.id,ref_for:!0,ref:I=>{i.value[N]=I},class:c(a(ko).ToastWrapper)},[A(a(om),at(Mt(k)),null,16)],2))),128)):w("",!0)]),_:1})],2)]),_:1})):w("",!0)}});im.__docgenInfo={exportName:"default",displayName:"ToastManager",description:"",tags:{},props:[{name:"toastMessages",required:!0,type:{name:"Array",elements:[{name:"ToastPropsWithID"}]}}]};function ra(){const t=ve("mediaQueryContext",{});function n(){if(!t)throw new Qr("No mediaQuery was provided.");return t}return{useMediaQuery:n}}const RL=["data-has-navigation"],VL=["href"],HL=["aria-label","hidden"],UL=["aria-hidden","aria-label","tabIndex"],jL=["data-has-global-ribbon"],Zt=M({props:{logo:null,offset:null,showMobileNavigation:{type:Boolean},skipToContentTarget:null},emits:["navigation-dismiss"],setup(t,{emit:n}){const o=t,i="AppFrameMain",s="AppFrameNav",r="AppFrameTopBar",u="AppFrameLoadingBar",m=400,x=300,b=ue(),g=ve("lang"),h=C(!1),T=C(0),k=C(0),N=C([]),I=C(!1),D=C(null),E=C({}),R=C(null),{useMediaQuery:W}=ra(),{isNavigationCollapsed:Z}=W(),$=C(null),z=()=>{$.value&&(T.value=$.value.offsetHeight,Te())},q=p(()=>F(Ke.Navigation,o.showMobileNavigation&&Ke["Navigation-visible"])),j={enter:F(Ke["Navigation-enter"]),enterActive:F(Ke["Navigation-enterActive"]),enterDone:F(Ke["Navigation-enterActive"]),exit:F(Ke["Navigation-exit"]),exitActive:F(Ke["Navigation-exitActive"])},se=Q=>{Q.classList.add(j.enterDone)},be=Q=>{Q.classList.add(j.enter)},ee=(Q,fe)=>{Q.classList.remove(j.enter),Q.classList.add(j.enterDone),setTimeout(fe,x)},Me=Q=>{Q.classList.remove(j.enterActive),Q.classList.add(j.exitActive)},O=(Q,fe)=>{Q.classList.add(j.exit),setTimeout(fe,x)},G=p(()=>Z&&!o.showMobileNavigation),Y=p(()=>Z&&o.showMobileNavigation),ce=Y.value?0:-1,de=v({},Y.value&&{"aria-modal":!0,role:"dialog"}),$e=p(()=>F(Ke.Frame,b.navigation&&Ke.hasNav,b.topBar&&Ke.hasTopBar)),ye=p(()=>F(Ke.Skip,h.value&&Ke.focused)),Ce=p(()=>o.skipToContentTarget?o.skipToContentTarget.id:i);Se(()=>{yt(),!b.globalRibbon&&(Te(),oe())}),Ee(()=>b.globalRibbon,()=>{z(),oe()});const oe=()=>{_u("--pc-frame-offset",o.offset||"0px")},Te=()=>{_u("--pc-frame-global-ribbon-height",`${T.value}px`)},Be=Q=>{const fe=N.value.find(({id:Re})=>Re===Q.id)!=null;N.value=fe?N.value:[...N.value,Q]},qe=({id:Q})=>{N.value=N.value.filter(({id:fe})=>Q!==fe)},_e=Q=>{const gt=Q,{contextControl:fe,secondaryMenu:Re}=gt,He=J(gt,["contextControl","secondaryMenu"]);D.value=He,E.value={contextControl:fe,secondaryMenu:Re},I.value||(I.value=!0)},ut=()=>{I.value=!1,setTimeout(()=>{D.value=null},m)},Rt=()=>{k.value=k.value+1},mt=()=>{k.value=Math.max(0,k.value-1)},yt=()=>{b.globalRibbon&&z()},te=()=>{h.value=!0},ke=()=>{h.value=!1},je=Q=>{o.skipToContentTarget&&(o.skipToContentTarget.focus(),Q.preventDefault())},B=()=>{n("navigation-dismiss")},X=Q=>{const{key:fe}=Q;Z&&o.showMobileNavigation&&fe==="Escape"&&B()};return Xe("frameContext",{logo:o.logo,showToast:Be,hideToast:qe,startLoading:Rt,stopLoading:mt,setContextualSaveBar:_e,removeContextualSaveBar:ut}),(Q,fe)=>(l(),d("div",me({class:a($e)},a(Vi).props,{"data-has-navigation":a(b).navigation?!0:void 0}),[S("div",{class:c(a(ye))},[S("a",{href:`#${a(Ce)}`,onFocus:te,onBlur:ke,onClick:je},U(a(g).Polaris.Frame.skipToContent),41,VL)],2),a(b).topBar?(l(),d("div",me({key:0,class:a(Ke).TopBar},v(v({},a(Vi).props),a(Gr).props),{id:r}),[f(Q.$slots,"topBar")],16)):w("",!0),a(b).navigation?(l(),L(a(Yi),{key:1,trapping:a(Y)},{default:y(()=>[A(sp,{name:"custom-classes",onAfterEnter:se,onBeforeEnter:be,onEnter:ee,onBeforeLeave:Me,onLeave:O},{default:y(()=>[t.showMobileNavigation||!a(Z)?(l(),d("div",me({key:0},de,{key:"NavContent",id:s,"aria-label":a(g).Polaris.Frame.navigationLabel,class:a(q),ref_key:"navigationRef",ref:R,onKeydown:X,hidden:a(G)}),[f(Q.$slots,"navigation"),S("button",{type:"button",class:c(a(Ke).NavigationDismiss),onClick:B,"aria-hidden":a(G)||!a(Z)&&!t.showMobileNavigation,"aria-label":a(g).Polaris.Frame.Navigation.closeMobileNavigationLabel,tabIndex:a(ce)},[A(a(re),{source:a(rc)},null,8,["source"])],10,UL)],16,HL)):w("",!0)]),_:3})]),_:3},8,["trapping"])):w("",!0),A(a(Jp),{in:I.value,class:c(a(Ke).ContextualSaveBar),type:"fade"},{default:y(()=>[D.value?(l(),L(a(am),at(me({key:0},D.value)),Ue({_:2},[E.value.contextControl?{name:"contextControl",fn:y(()=>[(l(!0),d(K,null,ge(E.value.contextControl,(Re,He)=>(l(),L(Oe(Re),{key:He}))),128))])}:void 0,E.value.secondaryMenu?{name:"secondaryMenu",fn:y(()=>[(l(!0),d(K,null,ge(E.value.secondaryMenu,(Re,He)=>(l(),L(Oe(Re),{key:He}))),128))])}:void 0]),1040)):w("",!0)]),_:1},8,["in","class"]),k.value>0?(l(),d("div",{key:2,class:c(a(Ke).LoadingBar),id:u},[A(a(nm))],2)):w("",!0),t.showMobileNavigation&&a(Z)?(l(),L(a(ec),{key:3,belowNavigation:"",onClick:B,onTouchstart:B})):w("",!0),S("main",{class:c(a(Ke).Main),id:i,"data-has-global-ribbon":!!a(b).globalRibbon},[S("div",{class:c(a(Ke).Content)},[f(Q.$slots,"default")],2)],10,jL),A(a(im),{"toast-messages":N.value},null,8,["toast-messages"]),a(b).globalRibbon?(l(),d("div",{key:4,class:c(a(Ke).GlobalRibbonContainer),ref_key:"globalRibbonContainerRef",ref:$},[f(Q.$slots,"globalRibbon")],2)):w("",!0),A(a(nt),{event:"resize",handler:yt})],16,RL))}});Zt.__docgenInfo={exportName:"default",displayName:"Frame",description:"",tags:{},props:[{name:"logo",description:"Sets the logo for the TopBar, Navigation, and ContextualSaveBar components",required:!1,type:{name:"Logo"}},{name:"offset",description:"A horizontal offset that pushes the frame to the right, leaving empty space on the left",required:!1,type:{name:"string"}},{name:"showMobileNavigation",description:"A boolean property indicating whether the mobile navigation is currently visible",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"skipToContentTarget",description:"Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link",required:!1,type:{name:"HTMLAnchorElement"}}],events:[{name:"navigation-dismiss"}],slots:[{name:"topBar"},{name:"navigation"},{name:"default"},{name:"globalRibbon"}]};const WL="Polaris-Heading";var zL={Heading:WL};const $t=M({props:{element:{default:"h2"},id:null},setup(t){return(n,o)=>(l(),L(Oe(t.element),{id:t.id,class:c(a(zL).Heading)},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["id","class"]))}});$t.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the heading",tags:{default:[{description:"'h2'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h2'"}},{name:"id",description:`A unique identifier for the heading,
used for reference in anchor links`,required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const GL="Polaris-Indicator",XL="Polaris-Indicator--pulseIndicator";var Du={Indicator:GL,pulseIndicator:XL};const Vr=M({props:{pulse:{type:Boolean,default:!1}},setup(t){const n=t,o=p(()=>F(Du.Indicator,n.pulse&&Du.pulseIndicator));return(i,s)=>(l(),d("span",{class:c(a(o))},null,2))}});Vr.__docgenInfo={exportName:"default",displayName:"Indicator",description:"",tags:{},props:[{name:"pulse",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const KL="Polaris-KeyboardKey";var YL={KeyboardKey:KL};const hs=M({setup(t){const n=ue(),o=p(()=>{const i=n.default&&n.default()[0].children?n.default()[0].children:"";return typeof i=="string"?i.length>1?i.toLowerCase():i.toUpperCase():i});return(i,s)=>(l(),d("kbd",{class:c(a(YL).KeyboardKey)},U(a(o)),3))}});hs.__docgenInfo={exportName:"default",displayName:"KeyboardKey",description:"",tags:{}};const ZL="Polaris-Layout",QL="Polaris-Layout__Section",JL="Polaris-Layout__AnnotatedSection",eN="Polaris-Layout__AnnotationWrapper",tN="Polaris-Layout__AnnotationContent",aN="Polaris-Layout__Annotation",nN="Polaris-Layout__AnnotationDescription";var _t={Layout:ZL,Section:QL,"Section-secondary":"Polaris-Layout__Section--secondary","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:JL,AnnotationWrapper:eN,AnnotationContent:tN,Annotation:aN,AnnotationDescription:nN};const Qt=M({props:{secondary:{type:Boolean},fullWidth:{type:Boolean},oneHalf:{type:Boolean},oneThird:{type:Boolean}},setup(t){const n=t,o=p(()=>F(_t.Section,n.secondary&&_t["Section-secondary"],n.fullWidth&&_t["Section-fullWidth"],n.oneHalf&&_t["Section-oneHalf"],n.oneThird&&_t["Section-oneThird"]));return(i,s)=>(l(),d("div",{class:c(a(o))},[f(i.$slots,"default")],2))}});Qt.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"secondary",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"oneHalf",required:!1,type:{name:"boolean"}},{name:"oneThird",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const oN="Polaris-TextContainer",iN="Polaris-TextContainer--spacingTight",sN="Polaris-TextContainer--spacingLoose";var $u={TextContainer:oN,spacingTight:iN,spacingLoose:sN};const At=M({props:{spacing:null},setup(t){const n=t,o=p(()=>n.spacing&&$u[Ne("spacing",n.spacing)]),i=p(()=>F($u.TextContainer,o.value));return(s,r)=>(l(),d("div",{class:c(a(i))},[f(s.$slots,"default")],2))}});At.__docgenInfo={exportName:"default",displayName:"TextContainer",description:"",tags:{},props:[{name:"spacing",description:"The amount of vertical spacing children will get between them",required:!1,type:{name:"Spacing"}}],slots:[{name:"default"}]};const ca=M({props:{id:null},setup(t){const n=ue(),o=p(()=>{var s;return(s=n.description)==null?void 0:s.call(n)}),i=p(()=>Boolean(o.value&&(o.value.length>=2||o.value[0]&&(o.value[0].type.toString()!=="Symbol(Text)"||o.value[0].type.toString()!=="Symbol()"))));return(s,r)=>(l(),d("div",{class:c(a(_t).AnnotatedSection)},[S("div",{class:c(a(_t).AnnotationWrapper)},[S("div",{class:c(a(_t).Annotation)},[A(a(At),null,{default:y(()=>[A(a($t),{id:t.id},{default:y(()=>[f(s.$slots,"title")]),_:3},8,["id"]),a(i)?f(s.$slots,"description",{key:1}):(l(),d("div",{key:0,class:c(a(_t).AnnotationDescription)},[f(s.$slots,"description")],2))]),_:3})],2),S("div",{class:c(a(_t).AnnotationContent)},[f(s.$slots,"default")],2)],2)],2))}});ca.__docgenInfo={exportName:"default",displayName:"AnnotatedSection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"description"},{name:"default"}]};const qt=M({props:{sectioned:{type:Boolean}},setup(t){return(n,o)=>(l(),d("div",{class:c(a(_t).Layout)},[t.sectioned?(l(),L(a(Qt),{key:0},{default:y(()=>[f(n.$slots,"default")]),_:3})):f(n.$slots,"default",{key:1})],2))}});qt.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"sectioned",description:"Automatically adds sections to layout",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const lN="Polaris-Link",rN="Polaris-Link__IconLockup",cN="Polaris-Link__IconLayout",uN="Polaris-Link--monochrome",dN="Polaris-Link--removeUnderline";var ma={Link:lN,IconLockup:rN,IconLayout:cN,monochrome:uN,removeUnderline:dN};const pN=["id","aria-label"],wa=M({props:{id:null,url:null,to:null,external:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},accessibilityLabel:null},setup(t){const n=t,o=p(()=>F(ma.Link,n.monochrome&&ma.monochrome,n.removeUnderline&&ma.removeUnderline));return(i,s)=>t.url||t.to?(l(),L(a(Tt),{key:0,id:t.id,to:t.to,url:t.url,class:c(a(o)),external:t.external,"aria-label":t.accessibilityLabel},{default:y(()=>[f(i.$slots,"default"),S("span",{class:c(a(ma).IconLockup)},[S("span",{class:c(a(ma).IconLayout)},[A(a(re),{source:a(du)},null,8,["source"])],2)],2)]),_:3},8,["id","to","url","class","external","aria-label"])):(l(),d("button",{key:1,id:t.id,type:"button",class:c(a(o)),"aria-label":t.accessibilityLabel,onClick:s[0]||(s[0]=r=>i.$emit("click"))},[f(i.$slots,"default"),S("span",{class:c(a(ma).IconLockup)},[S("span",{class:c(a(ma).IconLayout)},[A(a(re),{source:a(du)},null,8,["source"])],2)],2)],10,pN))}});wa.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"id",description:"ID for the link",required:!1,type:{name:"string"}},{name:"url",description:"The url to link to",required:!1,type:{name:"string"}},{name:"to",description:"Using with vue-router",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"external",description:"Makes the link open in a new tab",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes the link color the same as the current text color and adds an underline",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes text decoration underline to the link",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const mN="Polaris-List",yN="Polaris-List--typeNumber",gN="Polaris-List__Item";var Hr={List:mN,typeNumber:yN,Item:gN};const Pa=M({props:{type:{default:"bullet"}},setup(t){const n=t,o=p(()=>{const s=Ne("type",n.type);return F(Hr.List,n.type&&Hr[s])}),i=n.type==="bullet"?"ul":"ol";return(s,r)=>(l(),L(Oe(a(i)),{class:c(a(o))},{default:y(()=>[f(s.$slots,"default")]),_:3},8,["class"]))}});Pa.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"type",description:"Type of list to display",tags:{values:[{description:"bullet | number",title:"values"}],default:[{description:"bullet",title:"default"}]},required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'bullet'"}}],slots:[{name:"default"}]};const Vo=M({setup(t){return(n,o)=>(l(),d("li",{class:c(a(Hr).Item)},[f(n.$slots,"default")],2))}});Vo.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const hN="Polaris-Listbox";var bN={Listbox:hN},Ur=(t=>(t.FirstSelected="FIRST_SELECTED",t.First="FIRST",t))(Ur||{});const fN={"aria-live":"polite"},vN=["aria-label","aria-labelledby","aria-busy","asia-activedescendant","id"],kt=M({props:{autoSelection:{default:Ur.FirstSelected},enableKeyboardControl:{type:Boolean},accessibilityLabel:null,customListId:null},emits:["select","on-active-option-change"],setup(t,{emit:n}){const o=t,i="[data-listbox-option]",s="data-listbox-option-value",r="data-listbox-option-action",u="data-focused";Xe("withinListboxContext",!0);const m=ve("comboboxListboxContext",{}),{listboxId:x,textFieldLabelId:b,textFieldFocused:g,willLoadMoreOptions:h,setActiveOptionId:T,setListboxId:k,onOptionSelected:N,onKeyToBottom:I}=m,D=ue(),{useUniqueId:E}=De(),R=o.customListId||E("Listbox"),W=p(()=>Boolean(T)),Z=p(()=>x||""),$=C(null),z=C(null),q=C(""),j=C(!1),se=C([]),be=C(Boolean(o.enableKeyboardControl));let ee;Ee([()=>R,()=>Z],()=>{k&&!x&&k(R)}),Ee([()=>ee,()=>q],()=>{!q.value&&D.default&&D.default().length>0&&ye()}),Ee([()=>o.enableKeyboardControl,()=>be],()=>{o.enableKeyboardControl&&!be.value&&(be.value=!0)});const Me=()=>$.value?[...new Set($.value.querySelectorAll(i))]:[],O=te=>{const ke=te.some(X=>X.getAttribute("aria-selected")==="true");let je=0;const B=te.find((X,Q)=>{const fe=X.getAttribute("aria-disabled")!=="true";let Re;return ke&&o.autoSelection===Ur.FirstSelected?Re=X.getAttribute("aria-selected")==="true"&&fe:Re=fe,Re&&(je=Q),Re});if(!!B)return{element:B,index:je}},Y=zt(te=>{z.value&&rh(te.element,z.value)},50),ce=()=>{if(I)return j.value=!0,Promise.resolve(I())},de=te=>{te?(ee==null||ee.element.removeAttribute(u),te==null||te.element.setAttribute(u,"true"),Y(te),ee=te,T==null||T(te.domId),n("on-active-option-change",te.value)):ee=void 0},$e=(te,ke)=>({element:te,index:ke,domId:te.id,value:te.getAttribute(s)||"",disabled:te.getAttribute("aria-disabled")==="true",isAction:te.getAttribute(r)==="true"}),ye=()=>{let te;const ke=Me(),je=O(ke);if(ke.length===0&&se.value.length>0){se.value=ke,de();return}if(je){const{element:He,index:gt}=je;te=$e(He,gt)}const B=ee!==void 0&&(te==null?void 0:te.domId)===(ee==null?void 0:ee.domId),X=(ee==null?void 0:ee.isAction)&&(te==null?void 0:te.isAction)&&(te==null?void 0:te.value)!==(ee==null?void 0:ee.value),Q=se.value.map(He=>He.getAttribute(s)),fe=ke.map(He=>He.getAttribute(s));if(fe.length===Q.length&&fe.every((He,gt)=>Q[gt]===He)){B&&X&&(se.value=ke,de(te));return}if(se.value=ke,j.value){j.value=!1;return}de(te)},Ce=async te=>{const ke=se.value.length-1;let je=(ee==null?void 0:ee.index)||0,B=0,X=ee==null?void 0:ee.element,Q=-1;for(;Q++<ke;){B=mt(je,ke,te),X=se[B];const fe=B>=ke,Re=(X==null?void 0:X.getAttribute("aria-disabled"))==="true";if(fe&&h&&await ce(),Re){je=B,X=void 0;continue}break}return{element:X,nextIndex:B}},oe=async(te,ke)=>{ke.preventDefault();const{element:je,nextIndex:B}=await Ce(te);if(!je)return;const X=$e(je,B);de(X)},Te=te=>{oe("down",te)},Be=te=>{oe("up",te)},qe=te=>{te.preventDefault(),te.stopPropagation(),ee&&yt(ee)},_e=()=>{o.enableKeyboardControl||(be.value=!0)},ut=te=>{if(te.stopPropagation(),be.value){const ke=O(se.value);if(ke){const{element:je,index:B}=ke,X=$e(je,B);de(X)}}o.enableKeyboardControl||(be.value=!1)},Rt=te=>{q.value=te},mt=(te,ke,je)=>{let B;return je==="down"?te===ke?B=h?te+1:0:B=te+1:B=te===0?ke:te-1,B},yt=te=>{de(te),N&&N(),n("select",te.value)};return Xe("listboxContext",{onOptionSelect:yt,setLoading:Rt}),Xt(()=>{$.value&&(z.value=$.value.closest(Ji.selector))}),(te,ke)=>(l(),d(K,null,[be.value||a(g)?(l(),d(K,{key:0},[A(a(vt),{keyEvent:"keydown",keyCode:a(ze).ArrowDown,handler:Te},null,8,["keyCode"]),A(a(vt),{keyEvent:"keydown",keyCode:a(ze).ArrowUp,handler:Be},null,8,["keyCode"]),A(a(vt),{keyEvent:"keydown",keyCode:a(ze).Enter,handler:qe},null,8,["keyCode"])],64)):w("",!0),A(a(lt),null,{default:y(()=>[S("div",fN,U(q.value?q.value:null),1)]),_:1}),te.$slots.default?(l(),d("ul",{key:1,tabindex:"0",role:"listbox",class:c(a(F)(a(bN).Listbox)),"aria-label":a(W)?void 0:t.accessibilityLabel,"aria-labelledby":a(b)||void 0,"aria-busy":Boolean(q.value),"asia-activedescendant":a(ee)&&a(ee).domId,id:a(R),onFocus:_e,onBlur:ut,ref_key:"listboxRef",ref:$},[f(te.$slots,"default")],42,vN)):w("",!0)],64))}});kt.__docgenInfo={exportName:"default",displayName:"Listbox",description:"",tags:{},props:[{name:"autoSelection",required:!1,type:{name:"AutoSelection"},defaultValue:{func:!1,value:"AutoSelection.FirstSelected"}},{name:"enableKeyboardControl",description:"Explicitly enable keyboard control",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"customListId",description:"Provide a custom ID for the list element",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["string"]}},{name:"on-active-option-change",type:{names:["string"]}}],slots:[{name:"default"}]};const xN="Polaris-Listbox-Action",TN="Polaris-Listbox-Action__ActionDivider",SN="Polaris-Listbox-Action__Icon";var Cr={Action:xN,ActionDivider:TN,Icon:SN};const CN="Polaris-Listbox-Option",AN="Polaris-Listbox-Option--divider";var Fu={Option:CN,divider:AN};const kN="Polaris-Listbox-TextOption",LN="Polaris-Listbox-TextOption--allowMultiple",NN="Polaris-Listbox-TextOption--isAction",wN="Polaris-Listbox-TextOption--selected",PN="Polaris-Listbox-TextOption--disabled",MN="Polaris-Listbox-TextOption__Content",_N="Polaris-Listbox-TextOption__Checkbox";var ya={TextOption:kN,allowMultiple:LN,isAction:NN,selected:wN,disabled:PN,Content:MN,Checkbox:_N};const Ki=M({props:{selected:{type:Boolean},disabled:{type:Boolean}},setup(t){const n=t,{allowMultiple:o}=ve("comboboxListboxOptionContext",{}),i=ve("actionContext",!1),s=p(()=>F(ya.TextOption,n.selected&&!o&&ya.selected,n.disabled&&ya.disabled,o&&ya.allowMultiple,i&&ya.isAction));return(r,u)=>(l(),d("div",{class:c(a(s))},[S("div",{class:c(a(ya).Content)},[a(o)&&!a(i)?(l(),d("div",{key:0,class:c(a(ya).Checkbox)},[A(a(La),{disabled:t.disabled,checked:t.selected},{label:y(()=>[f(r.$slots,"default")]),_:3},8,["disabled","checked"])],2)):f(r.$slots,"default",{key:1})],2)],2))}});Ki.__docgenInfo={exportName:"default",displayName:"TextOption",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const IN=["id","role","data-within-section","data-listbox-option-value","data-listbox-option-action","data-listbox-option-destructive","aria-disabled","aria-label","aria-selected"],It=M({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean}},setup(t){const n=t,o=ve("mappedActionContext",{}),i=ve("sectionContext",""),s=ve("listboxContext",{onOptionSelect(z){},setLoading(z){}}),r=ve("isAction",!1),{role:u,url:m,external:x,onAction:b,destructive:g}=o,{onOptionSelect:h}=s,T=ue(),k=C(null),{useUniqueId:N}=De(),I=N("ListboxOption"),D=p(()=>Boolean(i)),E={[ch.attribute]:D.value},R=p(()=>Boolean(T.default&&(T.default().length>=2||T.default()[0]&&T.default()[0].type.toString()!=="Symbol(Text)"&&T.default()[0].type.toString()!=="Symbol()"))),W=p(()=>u||"option"),Z=p(()=>F(Fu.Option,n.divider&&Fu.divider)),$=z=>{z.preventDefault(),b&&b(),k.value&&!b&&h({domId:I,value:n.value,element:k.value,disabled:n.disabled||!1})};return(z,q)=>(l(),d("li",me(E,{id:a(I),class:a(Z),ref_key:"listItemRef",ref:k,role:a(W),"data-within-section":a(D),"data-listbox-option-value":t.value,"data-listbox-option-action":a(r),"data-listbox-option-destructive":a(g),"aria-disabled":t.disabled,"aria-label":t.accessibilityLabel,"aria-selected":t.selected,onClick:q[0]||(q[0]=j=>t.disabled?void 0:$),onKeydown:q[1]||(q[1]=j=>t.disabled?void 0:$),onMousedown:$,tabindex:"-1","data-listbox-option":""}),[a(m)?(l(),L(a(Tt),{key:0,url:a(m),external:a(x)},{default:y(()=>[a(R)?f(z.$slots,"default",{key:1}):(l(),L(a(Ki),{key:0,selected:t.selected,disabled:t.disabled},{default:y(()=>[f(z.$slots,"default")]),_:3},8,["selected","disabled"]))]),_:3},8,["url","external"])):(l(),d(K,{key:1},[a(R)?f(z.$slots,"default",{key:1}):(l(),L(a(Ki),{key:0,selected:t.selected,disabled:t.disabled},{default:y(()=>[f(z.$slots,"default")]),_:3},8,["selected","disabled"]))],64))],16,IN))}});It.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const bs=M({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean},icon:null},setup(t){const n=t;Xe("actionContext",!0);const o=p(()=>F(Cr.Action,n.divider&&Cr.ActionDivider));return(i,s)=>(l(),L(a(It),at(Mt(n)),{default:y(()=>[S("div",{class:c(a(o))},[A(a(Ki),{selected:t.selected,disabled:t.disabled},{default:y(()=>[t.icon?(l(),d("div",{key:0,class:c(a(Cr).Icon)},[A(a(re),{color:"subdued",source:t.icon},null,8,["source"])],2)):w("",!0),f(i.$slots,"default")]),_:3},8,["selected","disabled"])],2)]),_:3},16))}});bs.__docgenInfo={exportName:"default",displayName:"Action",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const BN="Polaris-Listbox-Header";var DN={Header:BN};const $N=["id"],FN=M({setup(t){const n=ve("sectionContext",""),o=ue(),i=p(()=>{var r;return(r=o.default)==null?void 0:r.call(o)}),s=p(()=>Boolean(i.value&&(i.value.length>=2||i.value[0]&&(i.value[0].type.toString()!=="Symbol(Text)"||i.value[0].type.toString()!=="Symbol()"))));return(r,u)=>(l(),d("div",{id:a(n),"aria-hidden":""},[a(s)?f(r.$slots,"default",{key:1}):(l(),d("div",{key:0,class:c(a(DN).Header)},[f(r.$slots,"default")],2))],8,$N))}});FN.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},slots:[{name:"default"}]};const EN="Polaris-Listbox-Loading__ListItem",ON="Polaris-Listbox-Loading";var Eu={ListItem:EN,Loading:ON};const Ho=M({props:{accessibilityLabel:null},setup(t){const n=t,o=ve("listboxContext",{onOptionSelect(s){},setLoading(s){}}),{setLoading:i}=o;return Ee(()=>n.accessibilityLabel,()=>(i(n.accessibilityLabel),()=>i(void 0))),(s,r)=>(l(),d("li",{class:c(a(Eu).ListItem),role:"presentation"},[s.$slots.default?f(s.$slots,"default",{key:0}):(l(),d("div",{key:1,class:c(a(Eu).Loading)},[A(a(Gt),{size:"small",accessibilityLabel:t.accessibilityLabel},null,8,["accessibilityLabel"])],2))],2))}});Ho.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"accessibilityLabel",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const qN="Polaris-Listbox-Section__SectionGroup",RN="Polaris-Listbox-Section--noDivider";var Ou={SectionGroup:qN,noDivider:RN};const VN=["aria-labelledby"],HN=M({props:{divider:{type:Boolean}},setup(t){const n=t,{useUniqueId:o}=De(),i=o("ListboxSection");Xe("sectionContext",i);const s=p(()=>F(Ou.SectionGroup,!n.divider&&Ou.noDivider));return(r,u)=>(l(),d("li",me({role:"presentation"},a(uh)),[f(r.$slots,"title"),S("ul",{role:"group","aria-labelledby":a(i),class:c(a(s))},[f(r.$slots,"default")],10,VN)],16))}});HN.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const Uo=M({setup(t){const{useFrame:n}=no(),{startLoading:o,stopLoading:i}=n();return Se(()=>{o()}),pt(()=>{i()}),(s,r)=>null}});Uo.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const UN="Polaris-MediaCard",jN="Polaris-MediaCard--portrait",WN="Polaris-MediaCard__MediaContainer",zN="Polaris-MediaCard--sizeSmall",GN="Polaris-MediaCard__InfoContainer",XN="Polaris-MediaCard__Popover",KN="Polaris-MediaCard__Heading",YN="Polaris-MediaCard__PrimaryAction",ZN="Polaris-MediaCard__SecondaryAction",QN="Polaris-MediaCard__ActionContainer";var dt={MediaCard:UN,portrait:jN,MediaContainer:WN,sizeSmall:zN,InfoContainer:GN,Popover:XN,Heading:KN,PrimaryAction:YN,SecondaryAction:ZN,ActionContainer:QN};const fs=M({props:{title:null,description:null,primaryAction:null,secondaryAction:null,popoverActions:{default:()=>[]},portrait:{type:Boolean,default:!1},size:{default:"medium"}},setup(t){const n=t,o=C(!1),i=ve("lang"),s=ue(),r=p(()=>F(dt.ActionContainer,n.portrait&&dt.portrait)),u=p(()=>F(dt.MediaCard,n.portrait&&dt.portrait)),m=p(()=>F(dt.MediaContainer,n.portrait&&dt.portrait,n.size==="small"&&dt.sizeSmall)),x=p(()=>F(dt.InfoContainer,n.portrait&&dt.portrait,n.size==="small"&&dt.sizeSmall)),b=()=>{o.value=!o.value};return(g,h)=>(l(),L(a(Je),null,{default:y(()=>[S("div",{class:c(a(u))},[S("div",{class:c(a(m))},[f(g.$slots,"default")],2),S("div",{class:c(a(x))},[A(a(Aa),null,{default:y(()=>[t.popoverActions.length>0?(l(),d("div",{key:0,class:c(a(dt).Popover)},[A(a(Qe),{active:o.value,preferredAlignment:"left",preferredPosition:"below",onClose:b},{content:y(()=>[A(a(Ze),{items:t.popoverActions,onActionAnyItem:b},Ue({_:2},[ge(t.popoverActions,({prefixId:T})=>({name:`prefix-${T}`,fn:y(()=>[f(g.$slots,`prefix-${T}`)])})),ge(t.popoverActions,({suffixId:T})=>({name:`suffix-${T}`,fn:y(()=>[f(g.$slots,`suffix-${T}`)])}))]),1032,["items"])]),activator:y(()=>[A(a(he),{icon:a(ba),size:"slim",plain:!0,accessibilityLabel:a(i).Polaris.MediaCard.popoverActivatorLabel,onClick:b},null,8,["icon","accessibilityLabel"])]),_:3},8,["active"])],2)):w("",!0),A(a(Ve),{vertical:!0,spacing:"tight"},{default:y(()=>[S("div",{class:c(a(dt).Heading)},[a(xe)(a(s).title)?f(g.$slots,"title",{key:0}):(l(),L(a($t),{key:1},{default:y(()=>[ie(U(t.title),1)]),_:1}))],2),S("p",null,U(t.description),1),t.primaryAction||t.secondaryAction?(l(),d("div",{key:0,class:c(a(r))},[A(a(ot),null,{default:y(()=>[t.primaryAction?(l(),d("div",{key:0,class:c(a(dt).PrimaryAction)},[A(a(st),{action:t.primaryAction},null,8,["action"])],2)):w("",!0),t.secondaryAction?(l(),d("div",{key:1,class:c(a(dt).SecondaryAction)},[A(a(st),{action:t.secondaryAction},null,8,["action"])],2)):w("",!0)]),_:1})],2)):w("",!0)]),_:3})]),_:3})],2)],2)]),_:3}))}});fs.__docgenInfo={exportName:"default",displayName:"MediaCard",description:"",tags:{},props:[{name:"title",description:"Heading content",required:!0,type:{name:"string"}},{name:"description",description:"Body content",required:!0,type:{name:"string"}},{name:"primaryAction",description:"Main call to action, rendered as a basic button",required:!1,type:{name:"ComplexAction"}},{name:"secondaryAction",description:"Secondary call to action, rendered as a plain button",required:!1,type:{name:"ComplexAction"}},{name:"popoverActions",description:"Action list items to render in ellipsis popover",required:!1,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]},defaultValue:{func:!1,value:"() => []"}},{name:"portrait",description:"Whether or not card content should be laid out vertically",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Size of the visual media in the card",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"title"}]};const JN="Polaris-MessageIndicator__MessageIndicatorWrapper",ew="Polaris-MessageIndicator";var qu={MessageIndicatorWrapper:JN,MessageIndicator:ew};const sm=M({props:{active:{type:Boolean}},setup(t){return(n,o)=>(l(),d("div",{class:c(a(qu).MessageIndicatorWrapper)},[t.active?(l(),d("div",{key:0,class:c(a(qu).MessageIndicator)},null,2)):w("",!0),f(n.$slots,"default")],2))}});sm.__docgenInfo={exportName:"default",displayName:"MessageIndicator",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const tw="Polaris-Modal__BodyWrapper",aw="Polaris-Modal__Body",nw="Polaris-Modal__IFrame",ow="Polaris-Modal__Spinner";var Da={BodyWrapper:tw,Body:aw,IFrame:nw,Spinner:ow};const iw="Polaris-Modal-Dialog__Container",sw="Polaris-Modal-Dialog",lw="Polaris-Modal-Dialog__Modal",rw="Polaris-Modal-Dialog--limitHeight",cw="Polaris-Modal-Dialog--sizeSmall",uw="Polaris-Modal-Dialog--sizeLarge",dw="Polaris-Modal-Dialog--animateFadeUp",pw="Polaris-Modal-Dialog--entering",mw="Polaris-Modal-Dialog--exiting",yw="Polaris-Modal-Dialog--exited",gw="Polaris-Modal-Dialog--entered";var ta={Container:iw,Dialog:sw,Modal:lw,limitHeight:rw,sizeSmall:cw,sizeLarge:uw,animateFadeUp:dw,entering:pw,exiting:mw,exited:yw,entered:gw};const Yi=M({props:{trapping:{type:Boolean,default:!0}},setup(t){const n=t,{canSafelyFocus:o}=Pb(n),i=C(null),s=C(!0);Ee([()=>n.trapping],()=>{s.value=o.value&&!(i.value&&i.value.contains(document.activeElement))?!n.trapping:!0});const r=m=>{!n.trapping||!i.value||i.value.contains(document.activeElement)||m.target instanceof Element&&m.target.matches(`${np.selector} *`)||o.value&&m.target instanceof HTMLElement&&i.value!==m.target&&i.value.contains(m.target)&&Do(i.value)},u=m=>{if(!n.trapping||!i.value)return;const x=yp(i.value),b=gp(i.value);m.target===b&&!m.shiftKey&&(m.preventDefault(),eb(i.value)),m.target===x&&m.shiftKey&&(m.preventDefault(),tb(i.value))};return(m,x)=>(l(),d("div",{ref_key:"wrapperNode",ref:i},[A(a(Qp),{disabled:s.value,root:i.value},null,8,["disabled","root"]),A(a(nt),{event:"focusin",handler:r}),A(a(vt),{keyCode:a(ze).Tab,keyEvent:"keydown",handler:u},null,8,["keyCode"]),f(m.$slots,"default")],512))}});Yi.__docgenInfo={exportName:"default",displayName:"TrapFocus",description:"",tags:{},props:[{name:"trapping",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}]};const hw=["aria-labelledby"],bw=["aria-labelledby"],lm=M({props:{labelledBy:null,instant:{type:Boolean},limitHeight:{type:Boolean},large:{type:Boolean},small:{type:Boolean}},emits:["close","entered","exited"],setup(t,{emit:n}){const o=t,i=C(null),s=p(()=>F(ta.Modal,o.small&&ta.sizeSmall,o.large&&ta.sizeLarge,o.limitHeight&&ta.limitHeight));return Se(()=>{i.value&&i.value.contains(document.activeElement)&&Do(i.value),n("entered")}),pt(()=>{n("exited")}),(r,u)=>t.instant?(l(),d("div",{key:0,class:c(a(ta).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref_key:"dialogNode",ref:i},[A(a(Yi),null,{default:y(()=>[S("div",{role:"dialog","aria-modal":"","aria-labelledby":t.labelledBy,tabindex:"-1",class:c(a(ta).Dialog)},[S("div",{class:c(a(s))},[A(a(vt),{keyCode:a(ze).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),f(r.$slots,"default")],2)],10,hw)]),_:3})],2)):(l(),d("div",{key:1,class:c(a(ta).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref:"dialog"},[A(a(Yi),null,{default:y(()=>[S("div",{role:"dialog","aria-modal":"","aria-labelledby":t.labelledBy,tabindex:"-1",class:c(a(ta).Dialog)},[S("div",{class:c(a(s))},[A(a(vt),{keyCode:a(ze).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),f(r.$slots,"default")],2)],10,bw)]),_:3})],2))}});lm.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"labelledBy",required:!1,type:{name:"string"}},{name:"instant",required:!1,type:{name:"boolean"}},{name:"limitHeight",required:!1,type:{name:"boolean"}},{name:"large",required:!1,type:{name:"boolean"}},{name:"small",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"entered"},{name:"exited"}],slots:[{name:"default"}]};const fw="Polaris-Modal-Header",vw="Polaris-Modal-Header--titleHidden",xw="Polaris-Modal-Header__Title";var Ar={Header:fw,titleHidden:vw,Title:xw};const Tw="Polaris-Modal-CloseButton";var Sw={CloseButton:Tw};const rm=M({emits:["click"],setup(t,{emit:n}){return(o,i)=>(l(),d("button",{class:c(a(Sw).CloseButton),"aria-label":"Close",onClick:i[0]||(i[0]=s=>n("click"))},[A(a(re),{source:a(rc),color:"base"},null,8,["source"])],2))}});rm.__docgenInfo={exportName:"default",displayName:"CloseButton",description:"",tags:{},events:[{name:"click"}]};const Cw=["id"],cm=M({props:{id:null,titleHidden:{type:Boolean}},emits:["close"],setup(t,{emit:n}){const o=t,i=ue(),s=p(()=>o.titleHidden||!i.default?Ar.titleHidden:Ar.Header);return(r,u)=>(l(),d("div",{class:c(a(s))},[S("div",{id:t.id,class:c(a(Ar).Title)},[A(a(Ro),{element:"h2",size:"small"},{default:y(()=>[f(r.$slots,"default")]),_:3})],10,Cw),A(a(rm),{onClick:u[0]||(u[0]=m=>n("close"))})],2))}});cm.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"titleHidden",required:!1,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"default"}]};const Aw="Polaris-Modal-Footer",kw="Polaris-Modal-Footer__FooterContent";var Ru={Footer:Aw,FooterContent:kw};const Lw="Polaris-Stack",Nw="Polaris-Stack__Item",ww="Polaris-Stack--noWrap",Pw="Polaris-Stack--spacingNone",Mw="Polaris-Stack--spacingExtraTight",_w="Polaris-Stack--spacingTight",Iw="Polaris-Stack--spacingBaseTight",Bw="Polaris-Stack--spacingLoose",Dw="Polaris-Stack--spacingExtraLoose",$w="Polaris-Stack--distributionLeading",Fw="Polaris-Stack--distributionTrailing",Ew="Polaris-Stack--distributionCenter",Ow="Polaris-Stack--distributionEqualSpacing",qw="Polaris-Stack--distributionFill",Rw="Polaris-Stack--distributionFillEvenly",Vw="Polaris-Stack--alignmentLeading",Hw="Polaris-Stack--alignmentTrailing",Uw="Polaris-Stack--alignmentCenter",jw="Polaris-Stack--alignmentFill",Ww="Polaris-Stack--alignmentBaseline",zw="Polaris-Stack--vertical";var aa={Stack:Lw,Item:Nw,noWrap:ww,spacingNone:Pw,spacingExtraTight:Mw,spacingTight:_w,spacingBaseTight:Iw,spacingLoose:Bw,spacingExtraLoose:Dw,distributionLeading:$w,distributionTrailing:Fw,distributionCenter:Ew,distributionEqualSpacing:Ow,distributionFill:qw,distributionFillEvenly:Rw,alignmentLeading:Vw,alignmentTrailing:Hw,alignmentCenter:Uw,alignmentFill:jw,alignmentBaseline:Ww,vertical:zw,"Item-fill":"Polaris-Stack__Item--fill"};const xt=M({props:{fill:{type:Boolean,default:!1}},setup(t){const n=t,o=p(()=>F(aa.Item,n.fill&&aa["Item-fill"]));return(i,s)=>(l(),d("div",{class:c(a(o))},[f(i.$slots,"default")],2))}});xt.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"fill",description:"Fill the remaining horizontal space in the stack with the item",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const Ve=M({props:{wrap:{type:Boolean,default:!0},vertical:{type:Boolean},spacing:null,alignment:null,distribution:null,noItemWrap:{type:Boolean,default:!1}},setup(t){const n=t,o=ue(),i=p(()=>{const s=n.spacing&&Ne("spacing",n.spacing),r=n.distribution&&Ne("distribution",n.distribution),u=n.alignment&&Ne("alignment",n.alignment);return F(aa.Stack,n.vertical&&aa.vertical,s&&aa[s],r&&aa[r],u&&aa[u],n.wrap===!1&&aa.noWrap)});return(s,r)=>(l(),d("div",{class:c(a(i))},[!t.noItemWrap&&a(o).default&&a(xe)(a(o).default)?(l(!0),d(K,{key:0},ge(a(o).default(),(u,m)=>(l(),L(a(xt),{key:m},{default:y(()=>[(l(),L(Oe(u)))]),_:2},1024))),128)):f(s.$slots,"default",{key:1})],2))}});Ve.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"wrap",description:"Wrap stack elements to additional rows as needed on small screens (Defaults to true)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"vertical",description:"Stack the elements vertically",required:!1,type:{name:"boolean"}},{name:"spacing",description:"Adjust spacing between elements",required:!1,type:{name:"Spacing"}},{name:"alignment",description:"Adjust vertical alignment of elements",required:!1,type:{name:"Alignment"}},{name:"distribution",description:"Adjust horizontal alignment of elements",required:!1,type:{name:"Distribution"}},{name:"noItemWrap",description:"No wrap all stack elements with StackItem",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const um=M({props:{primaryAction:null,secondaryActions:null},setup(t){return(n,o)=>(l(),d("div",{class:c(a(Ru).Footer)},[S("div",{class:c(a(Ru).FooterContent)},[A(a(Ve),{alignment:"center","no-item-wrap":""},{default:y(()=>[A(a(xt),{fill:!0},{default:y(()=>[f(n.$slots,"default")]),_:3}),t.primaryAction||t.secondaryActions?(l(),L(a(xt),{key:0},{default:y(()=>[A(a(ot),null,{default:y(()=>[t.secondaryActions?(l(!0),d(K,{key:0},ge(t.secondaryActions,(i,s)=>(l(),L(a(st),{key:s,action:i},null,8,["action"]))),128)):w("",!0),A(a(st),{action:t.primaryAction,overrides:{primary:!0}},null,8,["action"])]),_:1})]),_:1})):w("",!0)]),_:3})],2)],2))}});um.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"primaryAction",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"default"}]};const Gw="Polaris-Modal-Section",Xw="Polaris-Modal-Section--subdued",Kw="Polaris-Modal-Section--flush";var kr={Section:Gw,subdued:Xw,flush:Kw};const Qn=M({props:{flush:{type:Boolean},subdued:{type:Boolean}},setup(t){const n=t,o=p(()=>F(kr.Section,n.flush&&kr.flush,n.subdued&&kr.subdued));return(i,s)=>(l(),d("section",{class:c(a(o))},[f(i.$slots,"default")],2))}});Qn.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"flush",required:!1,type:{name:"boolean"}},{name:"subdued",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Yw=["name","src"],Ma=M({props:{open:{type:Boolean},src:null,iFrameName:null,titleHidden:{type:Boolean},instant:{type:Boolean},sectioned:{type:Boolean},large:{type:Boolean},small:{type:Boolean},limitHeight:{type:Boolean},loading:{type:Boolean},noScroll:{type:Boolean},primaryAction:null,secondaryActions:null},emits:["iframe-load","transition-end","scrolled-to-bottom","close"],setup(t,{emit:n}){const s=ue(),r=C(null),{useUniqueId:u}=De(),m=u("modal-header"),x=C(200),b=C(!1),g=k=>{const N=k.target;if(N&&N.contentWindow)try{x.value=N.contentWindow.document.body.scrollHeight}catch{x.value=400}n("iframe-load",k)},h=()=>{n("transition-end")},T=()=>{x.value=200;const k=r.value;k&&requestAnimationFrame(()=>Do(k))};return Se(()=>{b.value=!0}),(k,N)=>(l(),d("div",null,[a(s).activator?(l(),d("div",{key:0,ref_key:"activatorNode",ref:r},[f(k.$slots,"activator")],512)):w("",!0),b.value&&t.open?(l(),L(a(Fo),{key:1,idPrefix:"modal"},{default:y(()=>[A(a(lm),{instant:t.instant,labelledBy:a(m),large:t.large,small:t.small,limitHeight:t.limitHeight,onClose:N[2]||(N[2]=I=>n("close")),onEntered:h,onExited:T},{default:y(()=>[A(a(cm),{titleHidden:t.titleHidden,id:a(m),onClose:N[0]||(N[0]=I=>n("close")),key:"header"},{default:y(()=>[f(k.$slots,"title")]),_:3},8,["titleHidden","id"]),S("div",{class:c(a(Da).BodyWrapper),key:"body"},[t.src?(l(),d("iframe",{key:0,name:t.iFrameName,title:"body markup",src:t.src,class:c(a(Da).IFrame),onLoad:g,style:Fe({height:`${x.value}px`})},null,46,Yw)):t.noScroll?(l(),d("div",{key:1,class:c(a(Da).Body)},[t.loading?(l(),d("div",{key:0,class:c(a(Da).Spinner)},[A(a(Gt))],2)):(l(),d(K,{key:1},[t.sectioned?(l(),L(a(Qn),{key:0},{default:y(()=>[f(k.$slots,"content")]),_:3})):f(k.$slots,"content",{key:1})],64))],2)):(l(),L(a(Ft),{key:2,shadow:!0,class:c(a(Da).Body),onScrolledToBottom:N[1]||(N[1]=I=>n("scrolled-to-bottom"))},{default:y(()=>[t.loading?(l(),d("div",{key:0,class:c(a(Da).Spinner)},[A(a(Gt))],2)):(l(),d(K,{key:1},[t.sectioned?(l(),L(a(Qn),{key:0},{default:y(()=>[f(k.$slots,"content")]),_:3})):f(k.$slots,"content",{key:1})],64))]),_:3},8,["class"]))],2),a(s).footer||t.primaryAction||t.secondaryActions?(l(),L(a(um),{primaryAction:t.primaryAction,secondaryActions:t.secondaryActions,key:"footer"},{default:y(()=>[f(k.$slots,"footer")]),_:3},8,["primaryAction","secondaryActions"])):w("",!0)]),_:3},8,["instant","labelledBy","large","small","limitHeight"]),A(a(ec))]),_:3})):w("",!0)]))}});Ma.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",description:"Whether the modal is open or not",required:!0,type:{name:"boolean"}},{name:"src",description:"The url that will be loaded as the content of the modal",required:!1,type:{name:"string"}},{name:"iFrameName",description:"The name of the modal content iframe",required:!1,type:{name:"string"}},{name:"titleHidden",description:"Hide the title in the modal",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"instant",description:"Disable animations and open modal instantly",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically adds sections to modal",required:!1,type:{name:"boolean"}},{name:"large",description:"Increases the modal width",required:!1,type:{name:"boolean"}},{name:"small",description:"Decreases the modal width",required:!1,type:{name:"boolean"}},{name:"limitHeight",description:"Limits modal height on large sceens with scrolling",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces modal content with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"noScroll",description:"Removes Scrollable container from the modal content",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary action",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",description:"Collection of secondary actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],events:[{name:"iframe-load",type:{names:["Event"]}},{name:"transition-end"},{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"title"},{name:"content"},{name:"footer"}]};const Zw="Polaris-Navigation",Qw="Polaris-Navigation__UserMenu",Jw="Polaris-Navigation__ContextControl",eP="Polaris-Navigation__PrimaryNavigation",tP="Polaris-Navigation__LogoContainer",aP="Polaris-Navigation__Logo",nP="Polaris-Navigation__LogoLink",oP="Polaris-Navigation__Item",iP="Polaris-Navigation--keyFocused",sP="Polaris-Navigation__Icon",lP="Polaris-Navigation__Badge",rP="Polaris-Navigation--subNavigationActive",cP="Polaris-Navigation__ExternalIcon",uP="Polaris-Navigation__ListItem",dP="Polaris-Navigation__RollupSection",pP="Polaris-Navigation__SecondaryNavigation",mP="Polaris-Navigation__ItemWrapper",yP="Polaris-Navigation__Text",gP="Polaris-Navigation__SecondaryAction",hP="Polaris-Navigation--isExpanded",bP="Polaris-Navigation__List",fP="Polaris-Navigation__Section",vP="Polaris-Navigation__SectionHeading",xP="Polaris-Navigation__Action",TP="Polaris-Navigation__RollupToggle",SP="Polaris-Navigation__Indicator";var pe={Navigation:Zw,UserMenu:Qw,ContextControl:Jw,PrimaryNavigation:eP,LogoContainer:tP,Logo:aP,LogoLink:nP,Item:oP,keyFocused:iP,"Icon-resized":"Polaris-Navigation__Icon--resized","Item-selected":"Polaris-Navigation__Item--selected","Item-disabled":"Polaris-Navigation__Item--disabled",Icon:sP,Badge:lP,subNavigationActive:rP,"Item-child-active":"Polaris-Navigation--itemChildActive",ExternalIcon:cP,ListItem:uP,RollupSection:dP,SecondaryNavigation:pP,"ListItem-hasAction":"Polaris-Navigation__ListItem--hasAction",ItemWrapper:mP,Text:yP,SecondaryAction:gP,isExpanded:hP,List:bP,"SecondaryNavigation-noIcon":"Polaris-Navigation__SecondaryNavigation--noIcon",Section:fP,"Section-fill":"Polaris-Navigation__Section--fill","Section-withSeparator":"Polaris-Navigation__Section--withSeparator",SectionHeading:vP,Action:xP,RollupToggle:TP,Indicator:SP};const CP=["aria-labelledby"],jo=M({props:{location:null,onDismiss:null,ariaLabelledBy:null},setup(t){const n=t,{useFrame:o}=no(),{logo:i}=o(),s=cc(i,104),r=ue();return Xe("NavigationContext",{location:n.location,onNavigationDismiss:n.onDismiss,withinContentContainer:!1}),Xe("WithinContentContext",!1),(u,m)=>(l(),d("nav",{class:c(a(pe).Navigation),"aria-labelledby":t.ariaLabelledBy},[a(r).contextControl?(l(),d("div",{key:0,class:c(a(pe).ContextControl)},[f(u.$slots,"contextControl")],2)):a(i)?(l(),d("div",{key:1,class:c(a(pe).LogoContainer)},[A(a(Tt),{url:a(i).url||"",class:c(a(pe).LogoLink),style:Fe({width:a(s)})},{default:y(()=>[A(a(Jn),{source:a(i).topBarSource||"",alt:a(i).accessibilityLabel||"",class:c(a(pe).Logo),style:Fe({width:a(s)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):w("",!0),A(a(Ft),{class:c(a(pe).PrimaryNavigation)},{default:y(()=>[f(u.$slots,"default")]),_:3},8,["class"])],10,CP))}});jo.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"location",required:!0,type:{name:"string"}},{name:"ariaLabelledBy",description:"id of the element used as aria-labelledby",required:!1,type:{name:"string"}}],slots:[{name:"contextControl"},{name:"default"}]};const AP={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},kP=S("path",{d:"M11 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 5H12a1 1 0 0 1-1-1zM3 6.5A1.5 1.5 0 0 1 4.5 5H8a1 1 0 0 1 0 2H5v8h8v-3a1 1 0 1 1 2 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.5v-9z"},null,-1),LP=[kP];function NP(t,n){return l(),d("svg",AP,LP)}var wP={render:NP};function PP(){const t=ve("NavigationContext",{location:""});function n(){return t}return{useNavigationContext:n}}const dm=M({props:{expanded:{type:Boolean},id:null},setup(t){const{useUniqueId:n}=De(),o=n("SecondaryNavigation");return(i,s)=>(l(),L(a(to),{id:t.id||a(o),open:t.expanded,transition:{duration:"0ms",timingFunction:"linear"}},{default:y(()=>[S("ul",{class:c(a(pe).List)},[f(i.$slots,"default")],2)]),_:3},8,["id","open"]))}});dm.__docgenInfo={exportName:"default",displayName:"Secondary",description:"",tags:{},props:[{name:"expanded",required:!0,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const MP=["disabled","aria-disabled","aria-label","onKeyup"],jr=M({props:{url:null,matches:{type:Boolean},matchPaths:null,excludePaths:null,external:{type:Boolean},icon:null,badge:null,label:null,disabled:{type:Boolean},accessibilityLabel:null,selected:{type:Boolean},exactMatch:{type:Boolean},new:{type:Boolean},subNavigationItems:null,secondaryAction:null,expanded:{type:Boolean},shouldResizeIcon:{type:Boolean}},emits:["toggle-expanded-state","click"],setup(t,{emit:n}){const o=t,{useMediaQuery:i}=ra(),{isNavigationCollapsed:s}=i(),{useUniqueId:r}=De(),u=r("SecondaryNavigation"),{useNavigationContext:m}=PP(),{location:x,onNavigationDismiss:b}=m(),g=ve("lang"),h=C(!1);Xt(()=>{!s&&o.expanded&&T()});const T=()=>{n("toggle-expanded-state")},k=ye=>{h.value||(h.value=!0)},N=()=>{h.value&&(h.value=!1)},I=p(()=>o.disabled?-1:0),D=p(()=>o.subNavigationItems?o.subNavigationItems.filter(ye=>ye.new).length>0:!1),E=p(()=>F(pe.Item,o.disabled&&pe["Item-disabled"],h.value&&pe.keyFocused,o.selected&&pe["Item-selected"])),R=p(()=>F(pe.ListItem,o.secondaryAction&&pe["ListItem-hasAction"])),W=p(()=>F(pe.Icon,o.shouldResizeIcon&&pe["Icon-resized"])),Z=de({url:o.url,matches:o.matches,exactMatch:o.exactMatch,matchPaths:o.matchPaths,excludePaths:o.excludePaths},x),$=p(()=>o.subNavigationItems&&o.subNavigationItems.filter(ye=>{const Ce=de(ye,x);return Ce===0||Ce===1||Ce===2})),z=p(()=>$.value&&$.value.length>0),q=p(()=>o.selected==null?Z===0||Z===1||Z===2:o.selected),j=p(()=>q.value||o.expanded||z.value),se=!o.subNavigationItems||o.subNavigationItems.length===0||!z.value,be=p(()=>F(pe.Item,o.disabled&&pe["Item-disabled"],q.value&&se&&pe["Item-selected"],j.value&&pe.subNavigationActive,z.value&&pe["Item-child-active"],h.value&&pe.keyFocused)),ee=p(()=>$.value?$.value.sort(({url:ye},{url:Ce})=>Ce.length-ye.length)[0]:null),Me=p(()=>F(pe.SecondaryNavigation,j.value&&pe.isExpanded,!o.icon&&pe["SecondaryNavigation-noIcon"])),O=ye=>{if(ye.currentTarget.getAttribute("href")===x&&ye.preventDefault(),o.subNavigationItems&&o.subNavigationItems.length>0&&s)ye.preventDefault(),T();else if(b){b(),n("click");return}n("click")};function G(ye){const Ce=ye.split("?")[0].split("#")[0];return Ce.endsWith("/")?Ce:`${Ce}/`}function Y(ye,Ce){return G(ye)===G(Ce)}function ce(ye,Ce){return G(ye).startsWith(G(Ce))}function de({url:ye,matches:Ce,exactMatch:oe,matchPaths:Te,excludePaths:Be},qe){return ye==null?4:Ce?0:Ce===!1||Be&&Be.some(ut=>ce(qe,ut))?3:Te&&Te.some(ut=>ce(qe,ut))?2:(oe?Y(qe,ye):ce(qe,ye))?1:4}function $e(ye,Ce,oe){return Ce?{"aria-expanded":oe,"aria-controls":ye}:void 0}return(ye,Ce)=>{const oe=ip("Item",!0);return t.url?(l(),d("li",{key:1,class:c(a(R))},[S("div",{class:c(a(pe).ItemWrapper)},[A(a(Tt),me({url:t.url,class:a(be),external:t.external,tabIndex:a(I),"aria-disabled":t.disabled,"aria-label":t.accessibilityLabel,onClick:O,onKeyup:Mr(k,["tab"]),onBlur:N},v({},$e(a(u),!!t.subNavigationItems&&t.subNavigationItems.length>0,!!a(j)))),{default:y(()=>[t.icon?(l(),d("div",{key:0,class:c(a(W))},[A(a(re),{source:t.icon},null,8,["source"])],2)):w("",!0),S("span",{class:c(a(pe).Text)},[ie(U(t.label),1),a(D)?(l(),d("span",{key:0,class:c(a(pe).Indicator)},[A(a(Vr),{pulse:""})],2)):w("",!0)],2),o.new||t.badge?(l(),d("div",{key:1,class:c(a(pe).Badge)},[o.new?(l(),L(a(it),{key:0,status:"new",size:"small"},{default:y(()=>[ie(U(a(g).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof t.badge=="string"?(l(),L(a(it),{key:1,status:"new",size:"small"},{default:y(()=>[ie(U(t.badge),1)]),_:1})):typeof t.badge=="object"?(l(),L(a(it),at(me({key:2},t.badge)),{default:y(()=>[ie(U(t.badge.content),1)]),_:1},16)):w("",!0)],2)):w("",!0),t.external?(l(),d("div",{key:2,class:c(a(pe).ExternalIcon)},[A(a(re),{color:"base",accessibilityLabel:a(g).Polaris.Common.newWindowAccessibilityHint,source:a(wP)},null,8,["accessibilityLabel","source"])],2)):w("",!0)]),_:1},16,["url","class","external","tabIndex","aria-disabled","aria-label","onKeyup"]),t.secondaryAction?(l(),L(a(Tt),{key:0,external:"",url:t.secondaryAction.url,class:c(a(pe).SecondaryAction),tabIndex:a(I),"aria-disabled":t.disabled,"aria-label":t.secondaryAction.accessibilityLabel,onClick:t.secondaryAction.onClick},{default:y(()=>[A(a(re),{source:t.secondaryAction.icon},null,8,["source"])]),_:1},8,["url","class","tabIndex","aria-disabled","aria-label","onClick"])):w("",!0)],2),t.subNavigationItems&&t.subNavigationItems.length>0?(l(),d("div",{key:0,class:c(a(Me))},[A(a(dm),{expanded:!!a(j),id:a(u)},{default:y(()=>[(l(!0),d(K,null,ge(t.subNavigationItems,Te=>(l(),L(oe,me({key:Te.label},Te,{matches:Te===a(ee),onClick:()=>{a(b)&&a(b)(),Te.onClick&&Te.onClick()}}),null,16,["matches","onClick"]))),128))]),_:1},8,["expanded","id"])],2)):w("",!0)],2)):(l(),d("li",{key:0,class:c(a(pe).ListItem)},[S("button",{type:"button",class:c(a(E)),disabled:t.disabled,"aria-disabled":t.disabled,"aria-label":t.accessibilityLabel,onClick:O,onKeyup:Mr(k,["tab"]),onBlur:N},[t.icon?(l(),d("div",{key:0,class:c(a(W))},[A(a(re),{source:t.icon},null,8,["source"])],2)):w("",!0),S("span",{class:c(a(pe).Text)},[ie(U(t.label),1),a(D)?(l(),d("span",{key:0,class:c(a(pe).Indicator)},[A(a(Vr),{pulse:""})],2)):w("",!0)],2),o.new||t.badge?(l(),d("div",{key:1,class:c(a(pe).Badge)},[o.new?(l(),L(a(it),{key:0,status:"new",size:"small"},{default:y(()=>[ie(U(a(g).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof t.badge=="string"?(l(),L(a(it),{key:1,status:"new",size:"small"},{default:y(()=>[ie(U(t.badge),1)]),_:1})):typeof t.badge=="object"?(l(),L(a(it),at(me({key:2},t.badge)),{default:y(()=>[ie(U(t.badge.content),1)]),_:1},16)):w("",!0)],2)):w("",!0)],42,MP)],2))}}});jr.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"url",required:!1,type:{name:"string"}},{name:"matches",required:!1,type:{name:"boolean"}},{name:"matchPaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"excludePaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"external",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"badge",required:!1,type:{name:"union",elements:[{name:"string"},{name:"BadgeItemProps"}]}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"exactMatch",required:!1,type:{name:"boolean"}},{name:"new",required:!1,type:{name:"boolean"}},{name:"subNavigationItems",required:!1,type:{name:"Array",elements:[{name:"SubNavigationItem"}]}},{name:"secondaryAction",required:!1,type:{name:"SecondaryAction"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"shouldResizeIcon",required:!1,type:{name:"boolean"}}],events:[{name:"toggle-expanded-state"},{name:"click"}]};const _P=["aria-label"],IP=["aria-label"],uc=M({props:{items:null,icon:null,title:null,fill:{type:Boolean},rollup:null,action:null,separator:{type:Boolean}},emits:["click"],setup(t,{emit:n}){const o=t,i=C(!1),s=()=>{i.value=!i.value},r=()=>{i.value=!1},u=C(null),m=C(),{useMediaQuery:x}=ra(),{isNavigationCollapsed:b}=x(),{useUniqueId:g}=De(),h=g("AdditionalItems"),T=W=>{n("click"),u.value&&cancelAnimationFrame(u.value),(!W||!b)&&(u.value=requestAnimationFrame(r))};Se(()=>{u.value&&cancelAnimationFrame(u.value)});const k=p(()=>F(pe.Section,o.separator&&pe["Section-withSeparator"],o.fill&&pe["Section-fill"])),N=F(pe.Item,pe.RollupToggle),I=p(()=>o.rollup&&(i.value?o.rollup.hide:o.rollup.view)),D=p(()=>o.items.findIndex(W=>o.rollup?o.rollup.activePath===W.url||W.url&&o.rollup.activePath.startsWith(W.url)||(W.subNavigationItems?W.subNavigationItems.some(({url:Z})=>o.rollup&&o.rollup.activePath.startsWith(Z)):!1):!1)),E=W=>{m.value===W?m.value=-1:m.value=W},R=p(()=>{let W=[];if(W=o.rollup?o.items.slice(0,o.rollup.after):o.items,o.rollup&&D.value!==-1&&D.value>o.rollup.after-1){const Z=o.items.slice(o.rollup.after);W.push(...Z.splice(D.value-o.rollup.after,1))}return W});return(W,Z)=>(l(),d("ul",{class:c(a(k))},[t.title?(l(),d("li",{key:0,class:c(a(pe).SectionHeading)},[S("span",{class:c(a(pe).Text)},U(t.title),3),t.action?(l(),d("button",{key:0,type:"button",class:c(a(pe).Action),"aria-label":t.action.accessibilityLabel,onClick:Z[0]||(Z[0]=(...$)=>t.action.onClick&&t.action.onClick(...$))},[A(a(re),{source:t.action.icon},null,8,["source"])],10,_P)):w("",!0)],2)):w("",!0),a(R).length>0?(l(!0),d(K,{key:1},ge(a(R),($,z)=>(l(),L(a(jr),me({key:$.label},v({},$),{label:$.label,subNavigationItems:$.subNavigationItems,expanded:m.value===z,onClick:q=>T($.subNavigationItems!=null&&$.subNavigationItems.length>0),onToggleExpandedState:q=>E(z)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128)):w("",!0),t.rollup&&t.items.slice(t.rollup.after).length>0?(l(),d("li",{key:2,class:c(a(pe).RollupSection)},[A(a(to),{id:a(h),open:i.value},{default:y(()=>[S("ul",{class:c(a(pe).List)},[(l(!0),d(K,null,ge(t.items.slice(t.rollup.after),($,z)=>(l(),L(a(jr),me({key:$.label},$,{label:$.label,subNavigationItems:$.subNavigationItems,expanded:m.value===z,onClick:q=>T($.subNavigationItems!=null&&$.subNavigationItems.length>0),onToggleExpandedState:q=>E(z)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128))],2)]),_:1},8,["id","open"]),t.rollup&&t.items.length>t.rollup.after?(l(),d("div",{class:c(a(pe).ListItem),key:"List Item"},[S("button",{type:"button",class:c(a(N)),"aria-label":a(I),onClick:s},[S("span",{class:c(a(pe).Icon)},[A(a(re),{source:a(ba)},null,8,["source"])],2)],10,IP)],2)):w("",!0)],2)):w("",!0)],2))}});uc.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"items",description:"A collection of navigation items to be rendered inside the section",required:!0,type:{name:"Array",elements:[{name:"ItemProps"}]}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"title",required:!1,type:{name:"string"}},{name:"fill",required:!1,type:{name:"boolean"}},{name:"rollup",required:!1,type:{name:`{
  after: number;
  view: string;
  hide: string;
  activePath: string;
}`}},{name:"action",required:!1,type:{name:`{
  icon: IconProps['source'];
  accessibilityLabel: string;
  onClick(): void;
}`}},{name:"separator",required:!1,type:{name:"boolean"}}],events:[{name:"click"}]};const BP="Polaris-OptionList",DP="Polaris-OptionList__Options",$P="Polaris-OptionList__Title";var Lr={OptionList:BP,Options:DP,Title:$P};const FP="Polaris-OptionList-Option",EP="Polaris-OptionList-Option__SingleSelectOption",OP="Polaris-OptionList-Option--focused",qP="Polaris-OptionList-Option--active",RP="Polaris-OptionList-Option--select",VP="Polaris-OptionList-Option--disabled",HP="Polaris-OptionList-Option__Media",UP="Polaris-OptionList-Option__Label",jP="Polaris-OptionList-Option__Checkbox",WP="Polaris-OptionList-Option--verticalAlignTop",zP="Polaris-OptionList-Option--verticalAlignCenter",GP="Polaris-OptionList-Option--verticalAlignBottom";var rt={Option:FP,SingleSelectOption:EP,focused:OP,active:qP,select:RP,disabled:VP,Media:HP,Label:UP,Checkbox:jP,verticalAlignTop:WP,verticalAlignCenter:zP,verticalAlignBottom:GP};const XP="Polaris-OptionList-Checkbox",KP="Polaris-OptionList-Checkbox--active",YP="Polaris-OptionList-Checkbox__Backdrop",ZP="Polaris-OptionList-Checkbox__Input",QP="Polaris-OptionList-Checkbox--keyFocused",JP="Polaris-OptionList-Checkbox__Icon",eM="Polaris-OptionList-Checkbox--hover";var $a={Checkbox:XP,active:KP,Backdrop:YP,Input:ZP,keyFocused:QP,"Input-indeterminate":"Polaris-OptionList-Checkbox__Input--indeterminate",Icon:JP,hover:eM};const tM=["id","name","value","checked","disabled","aria-checked","role"],pm=M({props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean},active:{type:Boolean},id:null,name:null,modelValue:null,role:null},emits:["change","update:modelValue"],setup(t,{emit:n}){const o=t,{useUniqueId:i}=De(),s=i("Checkbox",o.id),r=C(!1),u=p(()=>F($a.Checkbox,o.active&&$a.active)),m=p(()=>F($a.Input,r.value&&$a.keyFocused)),x=()=>{r.value=!1},b=()=>{r.value||(r.value=!0)},g=h=>{const T=h.target;n("update:modelValue",T.value),n("change",T.value)};return(h,T)=>(l(),d("div",{class:c(a(u))},[S("input",{type:"checkbox",id:a(s),name:t.name,value:t.modelValue,checked:t.checked,disabled:t.disabled,class:c(a(m)),"aria-checked":t.checked,onChange:g,onBlur:x,onKeyup:b,role:t.role},null,42,tM),S("div",{class:c(a($a).Backdrop)},null,2),S("div",{class:c(a($a).Icon)},[A(a(re),{source:a(Yr)},null,8,["source"])],2)],2))}});pm.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"checked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["string"]}},{name:"update:modelValue",type:{names:["string"]}}]};const aM=["for"],nM=["id","disabled","aria-pressed"],mm=M({props:{id:null,value:null,section:null,index:null,disabled:{type:Boolean},active:{type:Boolean},select:{type:Boolean},allowMultiple:{type:Boolean},verticalAlign:null,role:null},emits:["click"],setup(t,{emit:n}){const o=t,i=ue(),s=C(!1),r=()=>{s.value=!s.value},u=p(()=>F(rt.SingleSelectOption,s.value&&rt.focused,o.disabled&&rt.disabled,o.select&&rt.select,o.active&&rt.active,o.verticalAlign&&rt[Ne("verticalAlign",o.verticalAlign)])),m=p(()=>F(rt.Label,o.disabled&&rt.disabled,o.active&&rt.active,o.select&&rt.select,o.verticalAlign&&rt[Ne("verticalAlign",o.verticalAlign)])),x=p(()=>o.role==="option"?"presentation":void 0),b=()=>{o.disabled||n("click",o.section,o.index)};return(g,h)=>(l(),d("li",{key:t.id,class:c(a(rt).Option),tabIndex:"-1"},[t.active?(l(),L(a(as),{key:0})):w("",!0),t.allowMultiple?(l(),d("label",{key:1,for:t.id,class:c(a(m))},[S("div",{class:c(a(rt).Checkbox)},[A(a(pm),{id:t.id,modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=T=>Ui(value)?value.value=T:null),checked:t.select,active:t.active,disabled:t.disabled,role:a(x),onChange:b},null,8,["id","modelValue","checked","active","disabled","role"])],2),a(i).media?(l(),d("div",{key:0,class:c(a(rt).Media)},[f(g.$slots,"media")],2)):w("",!0),f(g.$slots,"label")],10,aM)):(l(),d("button",{key:2,type:"button",id:t.id,class:c(a(u)),disabled:t.disabled,"aria-pressed":t.active,onClick:b,onFocus:r,onBlur:r},[a(i).media?(l(),d("div",{key:0,class:c(a(rt).Media)},[f(g.$slots,"media")],2)):w("",!0),f(g.$slots,"label")],42,nM))],2))}});mm.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"string"}},{name:"section",required:!0,type:{name:"number"}},{name:"index",required:!0,type:{name:"number"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"select",required:!1,type:{name:"boolean"}},{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"verticalAlign",required:!1,type:{name:"Alignment"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],slots:[{name:"media"},{name:"label"}]};const oM=["role"],iM=["id","role"],Wo=M({props:{id:null,title:null,options:null,role:null,optionRole:null,sections:null,modelValue:null,allowMultiple:{type:Boolean},verticalAlign:null},emits:["update:modelValue","change"],setup(t,{emit:n}){const o=t,i=ue(),s=C(b(o.options,o.sections,o.title)),{useUniqueId:r}=De(),u=r("OptionList",o.id),m=(g,h)=>{const T=s.value[g].options[h].value,k=o.modelValue.indexOf(T);if(o.allowMultiple){const N=k===-1?[T,...o.modelValue]:[...o.modelValue.slice(0,k),...o.modelValue.slice(k+1,o.modelValue.length)];n("update:modelValue",N),n("change",N);return}n("update:modelValue",[T]),n("change",[T])},x=p(()=>s.value.length>0);Ee(()=>[o.options,o.sections,o.title],(g,h)=>{g!==h&&(s.value=b(o.options||[],o.sections||[],o.title))});function b(g,h,T){if(!g||!g.length){const k=T?[{options:[],title:T}]:[];return!h||!h.length?[]:[...k,...h]}return!h||!h.length?[{title:T,options:g}]:[{title:T,options:g},...h]}return(g,h)=>(l(),d("ul",{class:c(a(Lr).OptionList),role:t.role},[a(x)?(l(!0),d(K,{key:0},ge(s.value,(T,k)=>(l(),d("li",{key:T.title||`noTitle-${k}`},[T.title?(l(),d("p",{key:0,class:c(a(Lr).Title)},U(T.title),3)):w("",!0),S("ul",{class:c(a(Lr).Options),id:`${a(u)}-${k}`,role:t.role},[T.options?(l(!0),d(K,{key:0},ge(T.options,(N,I)=>(l(),L(a(mm),me({key:N.id||`${a(u)}-${k}-${I}`,id:N.id||`${a(u)}-${k}-${I}`,section:k,index:I},N,{select:t.modelValue.includes(N.value),allowMultiple:t.allowMultiple,verticalAlign:t.verticalAlign,role:t.optionRole,onClick:m}),Ue({label:y(()=>[a(i)[`option-label-${N.id}`]?f(g.$slots,`option-label-${N.id}`,{key:0}):(l(),d(K,{key:1},[ie(U(N.label),1)],64))]),_:2},[a(i)[`option-media-${N.id}`]?{name:"media",fn:y(()=>[f(g.$slots,`option-media-${N.id}`)])}:void 0]),1040,["id","section","index","select","allowMultiple","verticalAlign","role"]))),128)):w("",!0)],10,iM)]))),128)):w("",!0)],10,oM))}});Wo.__docgenInfo={exportName:"default",displayName:"OptionList",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the option list",required:!1,type:{name:"string"}},{name:"title",description:"List title",required:!1,type:{name:"string"}},{name:"options",description:"Collection of options to be listed",required:!1,type:{name:"Array",elements:[{name:"OptionDescriptor"}]}},{name:"role",description:"Defines a specific role attribute for the list itself",required:!1,type:{name:"union",elements:[{name:'"listbox"'},{name:'"combobox"'},{name:"string"}]}},{name:"optionRole",description:"Defines a specific role attribute for each option in the list",required:!1,type:{name:"string"}},{name:"sections",description:"Sections containing a header and related options",required:!1,type:{name:"Array",elements:[{name:"SectionDescriptor"}]}},{name:"modelValue",description:"The selected options",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"allowMultiple",description:"Allow more than one option to be selected",required:!1,type:{name:"boolean"}},{name:"verticalAlign",description:"Vertically align child content to the center, top, or bottom.",required:!1,type:{name:"Alignment"}}],events:[{name:"update:modelValue",type:{names:["Array"]}},{name:"change",type:{names:["Array"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const sM="Polaris-Page",lM="Polaris-Page--fullWidth",rM="Polaris-Page--narrowWidth",cM="Polaris-Page__Content",uM="Polaris-Page--divider";var Lo={Page:sM,fullWidth:lM,narrowWidth:rM,Content:cM,divider:uM};const ym=M({props:{title:null,secondaryActions:null,actionGroups:null},setup(t){const n=ue(),{useMediaQuery:o}=ra(),{isNavigationCollapsed:i}=o();function s(r=[]){return r.length===0?!1:r.some(u=>u.actions.length>0)}return(r,u)=>a(xe)(a(n).default)?f(r.$slots,"default",{key:0}):t.secondaryActions&&t.secondaryActions.length>0||s(t.actionGroups)?(l(),L(a(Ap),{key:1,actions:t.secondaryActions,groups:t.actionGroups,rollup:a(i),rollupActionsLabel:t.title?`View actions for ${t.title}`:void 0},null,8,["actions","groups","rollup","rollupActionsLabel"])):w("",!0)}});ym.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}],slots:[{name:"default"}]};const dM="Polaris-Page-Header",pM="Polaris-Page-Header--titleHidden",mM="Polaris-Page-Header__TitleWrapper",yM="Polaris-Page-Header__Navigation",gM="Polaris-Page-Header--hasActionMenu",hM="Polaris-Page-Header--mobileView",bM="Polaris-Page-Header__BreadcrumbWrapper",fM="Polaris-Page-Header__PaginationWrapper",vM="Polaris-Page-Header__AdditionalNavigationWrapper",xM="Polaris-Page-Header__MainContent",TM="Polaris-Page-Header__TitleActionMenuWrapper",SM="Polaris-Page-Header--hasNavigation",CM="Polaris-Page-Header__PrimaryActionWrapper",AM="Polaris-Page-Header__ActionMenuWrapper",kM="Polaris-Page-Header__Row",LM="Polaris-Page-Header__RightAlign",NM="Polaris-Page-Header__LeftAlign",wM="Polaris-Page-Header--noBreadcrumbs",PM="Polaris-Page-Header__AdditionalMetaData",MM="Polaris-Page-Header__Actions",_M="Polaris-Page-Header--longTitle",IM="Polaris-Page-Header--mediumTitle",BM="Polaris-Page-Header--isSingleRow";var We={Header:dM,titleHidden:pM,TitleWrapper:mM,Navigation:yM,hasActionMenu:gM,mobileView:hM,BreadcrumbWrapper:bM,PaginationWrapper:fM,AdditionalNavigationWrapper:vM,MainContent:xM,TitleActionMenuWrapper:TM,hasNavigation:SM,PrimaryActionWrapper:CM,ActionMenuWrapper:AM,Row:kM,RightAlign:LM,LeftAlign:NM,noBreadcrumbs:wM,AdditionalMetaData:PM,Actions:MM,longTitle:_M,mediumTitle:IM,isSingleRow:BM};const gm=M({props:{additionalMetadata:null},setup(t){const n=ue();return(o,i)=>(l(),d("div",{class:c(a(We).AdditionalMetaData)},[A(a(ct),{variation:"subdued"},{default:y(()=>[a(n).default?f(o.$slots,"default",{key:0}):t.additionalMetadata?(l(),d(K,{key:1},[ie(U(t.additionalMetadata),1)],64)):w("",!0)]),_:3})],2))}});gm.__docgenInfo={exportName:"default",displayName:"AdditionalMetadata",description:"",tags:{},props:[{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const dc=M({setup(t){return(n,o)=>(l(),d("div",{class:c(a(We).AdditionalNavigationWrapper)},[f(n.$slots,"default")],2))}});dc.__docgenInfo={exportName:"default",displayName:"AdditionalNavigation",description:"",tags:{},slots:[{name:"default"}]};const pc=M({props:{breadcrumbs:null},setup(t){return(n,o)=>t.breadcrumbs.length>0?(l(),d("div",{key:0,class:c(a(We).BreadcrumbWrapper)},[A(a(Np),{breadcrumbs:t.breadcrumbs},null,8,["breadcrumbs"])],2)):w("",!0)}});pc.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const mc=M({props:{pagination:null},setup(t){const n=ue(),{useMediaQuery:o}=ra(),{isNavigationCollapsed:i}=o();return(s,r)=>t.pagination&&!a(i)?(l(),d("div",{key:0,class:c(a(We).PaginationWrapper)},[A(a(zo),at(Mt(t.pagination)),{default:y(()=>[a(xe)(a(n).default)?f(s.$slots,"default",{key:0}):w("",!0)]),_:3},16)],2)):w("",!0)}});mc.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pagination",required:!1,type:{name:"PaginationProps"}}],slots:[{name:"default"}]};const DM=M({props:{pagination:null,breadcrumbs:null},setup(t){return(n,o)=>(l(),d("div",{class:c(a(We).Navigation)},[A(pc,{breadcrumbs:t.breadcrumbs},null,8,["breadcrumbs"]),A(dc,null,{default:y(()=>[f(n.$slots,"default")]),_:3}),A(mc,{pagination:t.pagination},null,8,["pagination"])],2))}});DM.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"pagination",required:!0,type:{name:"PaginationProps"}},{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}],slots:[{name:"default"}]};const $M="Polaris-Header-Title",FM="Polaris-Header-Title__TitleWithSubtitle",EM="Polaris-Header-Title__SubTitle",OM="Polaris-Header-Title__SubtitleCompact",qM="Polaris-Header-Title__TitleWithMetadataWrapper",RM="Polaris-Header-Title__TitleMetadata";var Fa={Title:$M,TitleWithSubtitle:FM,SubTitle:EM,SubtitleCompact:OM,TitleWithMetadataWrapper:qM,TitleMetadata:RM};const hm=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(t){const n=t,o=p(()=>F(Fa.Title,n.subtitle&&Fa.TitleWithSubtitle)),i=p(()=>F(Fa.SubTitle,n.compactTitle&&Fa.SubtitleCompact)),s=ue();return(r,u)=>(l(),d(K,null,[a(xe)(a(s).default)?(l(),d("div",{key:0,class:c(a(Fa).TitleWithMetadataWrapper)},[t.title?(l(),d("h1",{key:0,class:c(a(o))},U(t.title),3)):w("",!0),S("div",{class:c(a(Fa).TitleMetadata)},[f(r.$slots,"default")],2)],2)):(l(),d(K,{key:1},[t.title?(l(),d("h1",{key:0,class:c(a(o))},U(t.title),3)):w("",!0)],64)),t.subtitle?(l(),d("div",{key:2,class:c(a(i))},[S("p",null,U(t.subtitle),1)],2)):w("",!0)],64))}});hm.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const bm=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(t){return(n,o)=>(l(),d("div",{class:c(a(We).TitleWrapper)},[A(a(hm),{title:t.title,subtitle:t.subtitle,compactTitle:t.compactTitle},{default:y(()=>[f(n.$slots,"default")]),_:3},8,["title","subtitle","compactTitle"])],2))}});bm.__docgenInfo={exportName:"default",displayName:"PageTitle",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Wr=M({props:{id:null,content:null,accessibilityLabel:null,url:null,external:{type:Boolean},destructive:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},icon:null,primary:{type:Boolean},onAction:null,onMouseEnter:null,onTouchStart:null},setup(t){const n=t,o=ue(),{useMediaQuery:i}=ra(),{isNavigationCollapsed:s}=i(),r=p(()=>n.primary?n.primary:!0),u=p(()=>m(s,n));function m(x,b){let{content:g,accessibilityLabel:h,icon:T}=b;return T==null?_(v({},b),{icon:void 0}):(x?(h=h||g,g=void 0):T=void 0,_(v({},b),{content:g,accessibilityLabel:h,icon:T}))}return(x,b)=>(l(),d("div",{class:c(a(We).PrimaryActionWrapper)},[a(xe)(a(o).default)?f(x.$slots,"default",{key:0}):(l(),L(a(st),{key:1,action:a(u),overrides:{primary:a(r)},onAction:b[0]||(b[0]=()=>{t.onAction&&t.onAction()}),onMouseenter:b[1]||(b[1]=()=>{t.onMouseEnter&&t.onMouseEnter()}),onTouchstart:b[2]||(b[2]=()=>{t.onTouchStart&&t.onTouchStart()})},null,8,["action","overrides"]))],2))}});Wr.__docgenInfo={exportName:"default",displayName:"PrimaryAction",description:"",tags:{},slots:[{name:"default"}]};const fm=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(t){const n=t,o=ue(),{useMediaQuery:i}=ra(),{isNavigationCollapsed:s}=i(),r=20,u=8,m=p(()=>({breadcrumbs:n.breadcrumbs||[]})),x=p(()=>({title:n.title,subtitle:n.subtitle,compactTitle:n.compactTitle})),b=p(()=>({title:n.title,secondaryActions:n.secondaryActions,actionGroups:n.actionGroups})),g=p(()=>v({},n.primaryAction)),h=p(()=>({additionalMetadata:n.additionalMetadata})),T=p(()=>s&&(!n.breadcrumbs||!n.breadcrumbs.length)&&n.title&&n.title.length<=u),k=p(()=>!s&&!n.pagination&&!n.secondaryActions&&!o.secondaryActions&&n.title!=null&&n.title.length<=r),N=p(()=>(s||k.value)&&g.value||!s&&!k.value&&n.pagination);return(I,D)=>(l(),L(a(vm),at(Mt(n)),Ue({slot2:y(()=>[A(a(bm),at(Mt(a(x))),{default:y(()=>[f(I.$slots,"pageTitle")]),_:3},16)]),slot3:y(()=>[A(a(ym),at(Mt(a(b))),{default:y(()=>[f(I.$slots,"secondaryActions")]),_:3},16),(a(o).primaryAction||n.primaryAction)&&!a(s)&&!a(k)?(l(),L(a(Wr),at(me({key:0},a(g))),{default:y(()=>[f(I.$slots,"primaryAction")]),_:3},16)):w("",!0)]),slot5:y(()=>[A(a(gm),at(Mt(a(h))),{default:y(()=>[f(I.$slots,"additionalMetadata")]),_:3},16)]),slot6:y(()=>[A(a(dc),null,{default:y(()=>[f(I.$slots,"additionalNavigation")]),_:3})]),_:2},[a(T)?void 0:{name:"slot1",fn:y(()=>[A(a(pc),at(Mt(a(m))),null,16)])},a(N)?{name:"slot4",fn:y(()=>[(a(o).primaryAction||n.primaryAction)&&(a(s)||a(k))?(l(),L(a(Wr),at(me({key:0},a(g))),{default:y(()=>[f(I.$slots,"primaryAction")]),_:3},16)):w("",!0),!a(s)&&!a(k)?(l(),L(a(mc),{key:1,pagination:t.pagination},{default:y(()=>[a(xe)(a(o).pagination)?f(I.$slots,"pagination",{key:0}):w("",!0)]),_:3},8,["pagination"])):w("",!0)])}:void 0]),1040))}});fm.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"pagination"},{name:"additionalMetadata"},{name:"additionalNavigation"}]};const vm=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(t){const n=t,o=34,i=ue(),{useMediaQuery:s}=ra(),{isNavigationCollapsed:r}=s(),u=p(()=>!n.primaryAction&&i.primaryAction&&!n.pagination&&(n.secondaryActions&&!i.secondaryActions&&!n.secondaryActions.length||i.secondaryActions)&&(!n.actionGroups||!n.actionGroups.length)),m=p(()=>n.breadcrumbs&&n.breadcrumbs.length>0||n.pagination&&!r||i.additionalNavigation),x=p(()=>!i.default||n.secondaryActions&&n.secondaryActions.length>0||D(n.actionGroups)),b=p(()=>F(We.Header,u.value&&We.isSingleRow,n.titleHidden&&We.titleHidden,m.value&&We.hasNavigation,x.value&&We.hasActionMenu,r&&We.mobileView,(!n.breadcrumbs||!n.breadcrumbs.length)&&We.noBreadcrumbs,n.title&&n.title.length<o&&We.mediumTitle,n.title&&n.title.length>o&&We.longTitle)),g=p(()=>xe(i.slot1)),h=p(()=>xe(i.slot2)),T=p(()=>xe(i.slot3)),k=p(()=>xe(i.slot4)),N=p(()=>xe(i.slot5)),I=p(()=>xe(i.slot6));function D(E=[]){return E.length===0?!1:E.some(R=>R.actions.length>0)}return(E,R)=>(l(),d("div",{class:c(a(b))},[a(g)||a(h)||a(T)||a(k)?(l(),d("div",{key:0,class:c(a(We).Row)},[f(E.$slots,"slot1"),f(E.$slots,"slot2"),a(T)||a(k)?(l(),d("div",{key:0,class:c(a(We).RightAlign)},[a(T)&&a(k)?(l(),d("div",{key:0,class:c(a(We).Actions)},[f(E.$slots,"slot3"),f(E.$slots,"slot4")],2)):(l(),d(K,{key:1},[f(E.$slots,"slot3"),f(E.$slots,"slot4")],64))],2)):w("",!0)],2)):w("",!0),a(N)||a(I)?(l(),d("div",{key:1,class:c(a(We).Row)},[S("div",{class:c(a(We).LeftAlign)},[f(E.$slots,"slot5")],2),a(I)?(l(),d("div",{key:0,class:c(a(We).RightAlign)},[f(E.$slots,"slot6")],2)):w("",!0)],2)):w("",!0)],2))}});vm.__docgenInfo={exportName:"default",displayName:"HeaderWrapper",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryAction"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"slot1"},{name:"slot2"},{name:"slot3"},{name:"slot4"},{name:"slot5"},{name:"slot6"}]};const vs=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},divider:{type:Boolean}},setup(t){const n=t,o=ue(),i=p(()=>n.title||n.primaryAction||o.primaryAction||(n.secondaryActions||o.secondaryActions)&&(n.secondaryActions&&!o.secondaryActions&&n.secondaryActions.length>0||o.secondaryActions&&!n.secondaryActions&&!o.secondaryActions.length)||n.actionGroups&&n.actionGroups.length>0||o.actionGroups||n.breadcrumbs&&n.breadcrumbs.length>0||o.breadcrumbs),s=p(()=>{const h=n,{fullWidth:m,narrowWidth:x,divider:b}=h,g=J(h,["fullWidth","narrowWidth","divider"]);return v({},g)}),r=p(()=>F(Lo.Page,n.fullWidth&&Lo.fullWidth,n.narrowWidth&&Lo.narrowWidth)),u=p(()=>F(!i.value&&Lo.Content,n.divider&&i&&Lo.divider));return(m,x)=>(l(),d("div",{class:c(a(r))},[a(i)?(l(),L(a(fm),at(me({key:0},a(s))),Ue({_:2},[a(xe)(a(o).pageTitle)?{name:"pageTitle",fn:y(()=>[f(m.$slots,"pageTitle")])}:void 0,a(o).secondaryActions?{name:"secondaryActions",fn:y(()=>[f(m.$slots,"secondaryActions")])}:void 0,a(o).primaryAction?{name:"primaryAction",fn:y(()=>[f(m.$slots,"primaryAction")])}:void 0,a(o).additionalMetadata?{name:"additionalMetadata",fn:y(()=>[f(m.$slots,"additionalMetadata")])}:void 0,a(o).additionalNavigation?{name:"additionalNavigation",fn:y(()=>[f(m.$slots,"additionalNavigation")])}:void 0,a(xe)(a(o).pagination)?{name:"pagination",fn:y(()=>[f(m.$slots,"pagination")])}:void 0]),1040)):w("",!0),S("div",{class:c(a(u))},[f(m.$slots,"default")],2)],2))}});vs.__docgenInfo={exportName:"default",displayName:"Page",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"divider",description:"Displays a divider between the page header and the page content",required:!1,type:{name:"boolean"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"additionalMetadata"},{name:"additionalNavigation"},{name:"pagination"},{name:"default"}]};const VM="Polaris-PageActions";var HM={PageActions:VM};const xs=M({props:{primaryAction:null,secondaryActions:null},setup(t){const n=t,o=p(()=>n.secondaryActions&&n.secondaryActions.length>0?"equalSpacing":"trailing");return(i,s)=>(l(),d("div",{class:c(a(HM).PageActions)},[A(a(Ve),{distribution:a(o),spacing:"tight"},{default:y(()=>[t.secondaryActions&&t.secondaryActions.length>0?(l(),L(a(ot),{key:0},{default:y(()=>[(l(!0),d(K,null,ge(t.secondaryActions,r=>(l(),L(a(st),{key:r.id,action:r},null,8,["action"]))),128))]),_:1})):w("",!0),t.primaryAction?(l(),L(a(st),{key:1,action:t.primaryAction,overrides:{primary:!0}},null,8,["action"])):w("",!0)]),_:1},8,["distribution"])],2))}});xs.__docgenInfo={exportName:"default",displayName:"PageActions",description:"",tags:{},props:[{name:"primaryAction",description:"The primary action for the page",required:!1,type:{name:"intersection",elements:[{name:"DisableableAction"},{name:"LoadableAction"}]}},{name:"secondaryActions",description:"The secondary actions for the page",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}]};function UM(){if(document==null||document.activeElement==null)return!1;const{tagName:t}=document.activeElement;return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||document.activeElement.hasAttribute("contenteditable")}const jM={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},WM=S("path",{d:"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z"},null,-1),zM=[WM];function GM(t,n){return l(),d("svg",jM,zM)}var Vu={render:GM};const XM=["aria-label"],KM={key:2,"aria-live":"polite"},zo=M({props:{nextKeys:null,previousKeys:null,nextTooltip:null,previousTooltip:null,nextURL:null,previousURL:null,hasNext:{type:Boolean},hasPrevious:{type:Boolean},accessibilityLabel:null,accessibilityLabels:null},setup(t){const n=t,o=ve("lang"),i=C(null),s=ue(),r=Kt(),u=n.accessibilityLabel||o.Polaris.Pagination.pagination,m=n.accessibilityLabels&&n.accessibilityLabels.previous||o.Polaris.Pagination.previous,x=n.accessibilityLabels&&n.accessibilityLabels.next||o.Polaris.Pagination.next,b=p(()=>n.previousKeys&&(n.previousURL||r.onPrevious)&&n.hasPrevious),g=p(()=>n.nextKeys&&(n.nextURL||r.onNext)&&n.hasNext),h=()=>{n.previousURL;const N=r.onPrevious;k(N())},T=()=>{n.nextURL;const N=r.onNext;k(N())},k=N=>()=>{UM()||N()};return(N,I)=>(l(),d("nav",{ref_key:"paginationRef",ref:i,"aria-label":a(u)},[a(b)?(l(!0),d(K,{key:0},ge(t.previousKeys,D=>(l(),L(a(vt),{key:D,"key-code":D,handler:h},null,8,["key-code"]))),128)):w("",!0),a(g)?(l(!0),d(K,{key:1},ge(t.nextKeys,D=>(l(),L(a(vt),{key:D,"key-code":D,handler:T},null,8,["key-code"]))),128)):w("",!0),A(a(ot),{segmented:!a(xe)(a(s).default)},{default:y(()=>[t.previousTooltip&&t.hasPrevious?(l(),L(a(Ca),{key:0,"activator-wrapper":"span",content:t.previousTooltip},{default:y(()=>[A(a(he),{id:"previousURL",outline:"",icon:a(Vu),accessibilityLabel:a(m),url:t.previousURL,disabled:!t.hasPrevious,onClick:I[0]||(I[0]=D=>N.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),L(a(he),{key:1,id:"previousURL",outline:"",icon:a(Vu),accessibilityLabel:a(m),url:t.previousURL,disabled:!t.hasPrevious,onClick:I[1]||(I[1]=D=>N.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])),a(xe)(a(s).default)?(l(),d("div",KM,[t.hasNext&&t.hasPrevious?(l(),L(a(ct),{key:0},{default:y(()=>[f(N.$slots,"default")]),_:3})):(l(),L(a(ct),{key:1,variation:"subdued"},{default:y(()=>[f(N.$slots,"default")]),_:3}))])):w("",!0),t.nextTooltip&&t.hasNext?(l(),L(a(Ca),{key:3,"activator-wrapper":"span",content:t.nextTooltip},{default:y(()=>[A(a(he),{id:"nextURL",outline:"",icon:a(_r),accessibilityLabel:a(x),url:t.nextURL,onClick:I[2]||(I[2]=D=>N.$emit("next")),disabled:!t.hasNext},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),L(a(he),{key:4,id:"nextURL",outline:"",icon:a(_r),accessibilityLabel:a(x),url:t.nextURL,onClick:I[3]||(I[3]=D=>N.$emit("next")),disabled:!t.hasNext},null,8,["icon","accessibilityLabel","url","disabled"]))]),_:3},8,["segmented"])],8,XM))}});zo.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"nextKeys",description:"Keyboard shortcuts for the next button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"previousKeys",description:"Keyboard shortcuts for the previous button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"nextTooltip",description:"Tooltip for the next button",required:!1,type:{name:"string"}},{name:"previousTooltip",description:"Tooltip for the previous button",required:!1,type:{name:"string"}},{name:"nextURL",description:"The URL of the next page",required:!1,type:{name:"string"}},{name:"previousURL",description:"The URL of the previous page",required:!1,type:{name:"string"}},{name:"hasNext",description:"Whether there is a next page to show",required:!1,type:{name:"boolean"}},{name:"hasPrevious",description:"Whether there is a previous page to show",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Accessible label for the pagination",required:!1,type:{name:"string"}},{name:"accessibilityLabels",description:"Accessible labels for the buttons and UnstyledLinks",required:!1,type:{name:"AccessibilityLabels"}}],events:[{name:"previous"},{name:"next"}],slots:[{name:"default"}]};const YM="Polaris-ProgressBar",ZM="Polaris-ProgressBar--sizeSmall",QM="Polaris-ProgressBar--sizeMedium",JM="Polaris-ProgressBar--sizeLarge",e_="Polaris-ProgressBar--colorHighlight",t_="Polaris-ProgressBar--colorPrimary",a_="Polaris-ProgressBar--colorSuccess",n_="Polaris-ProgressBar--colorCritical",o_="Polaris-ProgressBar__Indicator",i_="Polaris-ProgressBar__IndicatorAppearActive",s_="Polaris-ProgressBar__IndicatorAppearDone",l_="Polaris-ProgressBar__Progress",r_="Polaris-ProgressBar__Label";var ga={ProgressBar:YM,sizeSmall:ZM,sizeMedium:QM,sizeLarge:JM,colorHighlight:e_,colorPrimary:t_,colorSuccess:a_,colorCritical:n_,Indicator:o_,IndicatorAppearActive:i_,IndicatorAppearDone:s_,Progress:l_,Label:r_};const c_=["value"],Ts=M({props:{progress:{default:0},size:{default:"medium"},color:{default:"highlight"},animated:{type:Boolean,default:!0}},setup(t){const n=t,o=ve("lang"),i=p(()=>F(ga.ProgressBar,n.size&&ga[Ne("size",n.size)],n.color&&ga[Ne("color",n.color)])),s=p(()=>n.progress<0?o.Polaris.ProgressBar.negativeWarningMessage.replace("{progress}",n.progress):o.Polaris.ProgressBar.exceedWarningMessage.replace("{progress}",n.progress)),r=(g,h)=>{let T;return g<0?T=0:g>100?T=100:T=g,T},u=p(()=>n.animated?Ri.motion["duration-500"]:Ri.motion["duration-0"]),m=p(()=>({"--pc-progress-bar-duration":u.value,"--pc-progress-bar-percent":x.value/100})),x=p(()=>r(n.progress,s.value)),b=(g,h)=>{setTimeout(()=>{g.classList.add(ga.IndicatorAppearDone),h()},1)};return(g,h)=>(l(),d("div",{class:c(a(i))},[S("progress",{class:c(a(ga).Progress),value:a(x),max:"100"},null,10,c_),A(sp,{appear:"",duration:parseInt(a(u),10),onEnter:b},{default:y(()=>[S("div",{class:c(a(F)(a(ga).Indicator)),style:Fe(a(m))},[S("span",{class:c(a(ga).Label)},U(a(x))+"%",3)],6)]),_:1},8,["duration"])],2))}});Ts.__docgenInfo={exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"progress",description:"The progression of certain tasks",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",description:"Size of progressbar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"color",description:"Color of progressbar",tags:{default:[{description:"'highlight'",title:"default"}]},required:!1,type:{name:"Color"},defaultValue:{func:!1,value:"'highlight'"}},{name:"animated",description:"Whether the fill animation is triggered",tags:{default:[{description:"'true'",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]};function u_(t){return Math.sign(t)===1?-Math.abs(t):Math.sign(t)===-1?Math.abs(t):0}const d_="Polaris-RangeSlider-SingleThumb__RangeSlider",p_="Polaris-RangeSlider-SingleThumb",m_="Polaris-RangeSlider-SingleThumb--disabled",y_="Polaris-RangeSlider-SingleThumb__InputWrapper",g_="Polaris-RangeSlider-SingleThumb__Prefix",h_="Polaris-RangeSlider-SingleThumb__Suffix",b_="Polaris-RangeSlider-SingleThumb__Input",f_="Polaris-RangeSlider-SingleThumb--error",v_="Polaris-RangeSlider-SingleThumb__Output",x_="Polaris-RangeSlider-SingleThumb__OutputBubble",T_="Polaris-RangeSlider-SingleThumb__OutputText";var Bt={RangeSlider:d_,SingleThumb:p_,disabled:m_,InputWrapper:y_,Prefix:g_,Suffix:h_,Input:b_,error:f_,Output:v_,OutputBubble:x_,OutputText:T_};const S_="Polaris-RangeSlider";var xm={RangeSlider:S_};const C_=["id","name","min","max","step","value","disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby"],A_=["for"],Tm=M({props:{labelAction:null,labelHidden:{type:Boolean},id:null,modelValue:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","focus","blur"],setup(t,{emit:n}){const o=t,i=ue(),s=p(()=>ia(o.modelValue,o.min,o.max)),r=C([]);o.error&&r.value.push(`${o.id}Error`),i["help-text"]&&r.value.push(cs(o.id));const u=p(()=>r.value.length?r.value.join(" "):void 0),m=p(()=>(s.value-o.min)*100/(o.max-o.min)),x=p(()=>u_((m.value-50)/100)),b=p(()=>({"--pc-range-slider-min":o.min,"--pc-range-slider-max":o.max,"--pc-range-slider-current":s.value,"--pc-range-slider-progress":`${m.value}%`,"--pc-range-slider-output-factor":`${x.value}`})),g=p(()=>F(Bt.SingleThumb,xm.RangeSlider,o.error&&Bt.error,o.disabled&&Bt.disabled)),h=T=>{n("input",parseFloat(T.target.value),o.id)};return(T,k)=>(l(),L(a(ao),{id:t.id,action:t.labelAction,labelHidden:t.labelHidden},Ue({default:y(()=>[S("div",{class:c(a(g)),style:Fe(a(b))},[a(xe)(a(i).prefix)?(l(),d("div",{key:0,class:c(a(Bt).Prefix)},[f(T.$slots,"prefix")],2)):w("",!0),S("div",{class:c(a(Bt).InputWrapper)},[S("input",{type:"range",class:c(a(Bt).Input),id:t.id,name:t.id,min:t.min,max:t.max,step:t.step,value:a(s),disabled:t.disabled,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":a(s),"aria-invalid":Boolean(t.error),"aria-describedby":a(u),onInput:h,onFocus:k[0]||(k[0]=N=>T.$emit("focus")),onBlur:k[1]||(k[1]=N=>T.$emit("blur"))},null,42,C_),!t.disabled&&t.output?(l(),d("output",{key:0,for:t.id,class:c(a(Bt).Output)},[S("div",{class:c(a(Bt).OutputBubble)},[S("span",{class:c(a(Bt).OutputText)},U(a(s)),3)],2)],10,A_)):w("",!0)],2),a(xe)(a(i).suffix)?(l(),d("div",{key:1,class:c(a(Bt).Suffix)},[f(T.$slots,"suffix")],2)):w("",!0)],6)]),_:2},[a(xe)(a(i).label)?{name:"label",fn:y(()=>[f(T.$slots,"label")])}:void 0,a(xe)(a(i)["help-text"])?{name:"help-text",fn:y(()=>[f(T.$slots,"help-text")])}:void 0]),1032,["id","action","labelHidden"]))}});Tm.__docgenInfo={exportName:"default",displayName:"SingleThumb",description:"",tags:{},props:[{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"number"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["number"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const k_="Polaris-RangeSlider-DualThumb__RangeSlider",L_="Polaris-RangeSlider-DualThumb",N_="Polaris-RangeSlider-DualThumb__TrackWrapper",w_="Polaris-RangeSlider-DualThumb--disabled",P_="Polaris-RangeSlider-DualThumb__Track",M_="Polaris-RangeSlider-DualThumb--error",__="Polaris-RangeSlider-DualThumb__Thumbs",I_="Polaris-RangeSlider-DualThumb__Prefix",B_="Polaris-RangeSlider-DualThumb__Suffix",D_="Polaris-RangeSlider-DualThumb__Output",$_="Polaris-RangeSlider-DualThumb__OutputBubble",F_="Polaris-RangeSlider-DualThumb__OutputText";var et={RangeSlider:k_,DualThumb:L_,TrackWrapper:N_,disabled:w_,Track:P_,error:M_,"Track--dashed":"Polaris-RangeSlider-DualThumb--trackDashed",Thumbs:__,Prefix:I_,Suffix:B_,Output:D_,OutputBubble:$_,OutputText:F_};const E_=["id","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],O_=["for"],q_=["id","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],R_=["for"],Sm=M({props:{modelValue:null,labelAction:null,labelHidden:{type:Boolean},id:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","update:modelValue","focus","blur"],setup(t,{emit:n}){const o=t,i=ue(),s=C(ke(o.modelValue,o.min,o.max,o.step)),r=C(0),u=C(0),m=C(null),x=C(null),b=C(null),g=C(null),h=zt(()=>{if(m.value){const{width:X,left:Q}=m.value.getBoundingClientRect(),fe=X-16,Re=Q+16/2,He=o.max-o.min,gt=o.min/He*fe;r.value=fe,u.value=Re-gt}},40,{leading:!0,trailing:!0,maxWait:40}),T=p(()=>o.id),k=p(()=>`${o.id}Upper`),N=C([]);o.error&&N.value.push(`${o.id}Error`);const I=p(()=>N.value.length?N.value.join(" "):void 0),D=p(()=>F(et.TrackWrapper,o.error&&et.error,o.disabled&&et.disabled)),E=p(()=>F(et.Thumbs,o.disabled&&et.disabled)),R=p(()=>F(et.Thumbs,o.disabled&&et.disabled)),W=p(()=>o.max-o.min),Z=p(()=>o.min/W.value*r.value),$=p(()=>s.value[0]/W.value*r.value-Z.value),z=p(()=>s.value[1]/W.value*r.value-Z.value),q=p(()=>F(et.Output)),j=p(()=>F(et.Output)),se=p(()=>({"--pc-range-slider-progress-lower":`${$.value}px`,"--pc-range-slider-progress-upper":`${z.value}px`}));Se(()=>{h(),x.value&&x.value.addEventListener("touchstart",Rt,{passive:!1})}),pt(()=>{x.value&&x.value.removeEventListener("touchstart",Rt)});const be=B=>{B.button!==0||o.disabled||(yt(ee),B.stopPropagation())},ee=B=>{const X=s.value[1];_e([mt(B.clientX),X],"Upper")},Me=B=>{o.disabled||(te(O),B.stopPropagation())},O=B=>{B.preventDefault();const X=s.value[1];_e([mt(B.touches[0].clientX),X],"Upper")},G=B=>{B.button!==0||o.disabled||(yt(Y),B.stopPropagation())},Y=B=>{const X=s.value[0];_e([X,mt(B.clientX)],"Lower")},ce=B=>{o.disabled||(te(de),B.stopPropagation())},de=B=>{B.preventDefault();const X=s.value[0];_e([X,mt(B.touches[0].clientX)],"Lower")},$e=B=>{if(o.disabled)return;const Q={[ze.ArrowUp]:Ce,[ze.ArrowRight]:Ce,[ze.ArrowDown]:oe,[ze.ArrowLeft]:oe}[B.key];Q!=null&&(B.preventDefault(),B.stopPropagation(),Q())},ye=B=>{if(o.disabled)return;const Q={[ze.ArrowUp]:Te,[ze.ArrowRight]:Te,[ze.ArrowDown]:Be,[ze.ArrowLeft]:Be}[B.key];Q!=null&&(B.preventDefault(),B.stopPropagation(),Q())},Ce=()=>{_e([s.value[0]+o.step,s.value[1]],"Upper")},oe=()=>{_e([s.value[0]-o.step,s.value[1]],"Upper")},Te=()=>{_e([s.value[0],s.value[1]+o.step],"Lower")},Be=()=>{_e([s.value[0],s.value[1]-o.step],"Lower")},qe=()=>{n("input",s.value,o.id),n("update:modelValue",s.value,o.id)},_e=(B,X)=>{const Q=ke(B,o.min,o.max,o.step,X);je(Q,s.value)||(s.value=Q,qe())},ut=B=>{if(B.button!==0||o.disabled)return;B.preventDefault();const X=mt(B.clientX),Q=Math.abs(s.value[0]-X),fe=Math.abs(s.value[1]-X);Q<=fe?(_e([X,s.value[1]],"Upper"),yt(ee),b.value&&b.value.focus()):(_e([s.value[0],X],"Lower"),yt(Y),g.value&&g.value.focus())},Rt=B=>{if(o.disabled)return;B.preventDefault();const X=mt(B.touches[0].clientX),Q=Math.abs(s.value[0]-X),fe=Math.abs(s.value[1]-X);Q<=fe?(_e([X,s.value[1]],"Upper"),te(O),b.value&&b.value.focus()):(_e([s.value[0],X],"Lower"),te(de),g.value&&g.value.focus())},mt=B=>{if(m.value){const{min:X,max:Q}=o;return(B-u.value)/r.value*(Q-X)}else return 0};function yt(B){document.addEventListener("mousemove",B),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",B)},{once:!0})}function te(B){const X=()=>{document.removeEventListener("touchmove",B),document.removeEventListener("touchend",X),document.removeEventListener("touchcancel",X)};document.addEventListener("touchmove",B,{passive:!1}),document.addEventListener("touchend",X,{once:!0}),document.addEventListener("touchcancel",X,{once:!0})}function ke(B,X,Q,fe,Re="Upper"){let He=Rg(lu(B[1])),gt=Vg(lu(B[0]));const iu=He-fe,su=gt+fe;return Re==="Upper"&&gt>iu?gt=iu:Re==="Lower"&&He<su&&(He=su),[gt,He];function Rg(Vt){const xo=X+fe;return Vt<xo?xo:Vt>Q?Q:Vt}function Vg(Vt){const xo=Q-fe;return Vt<X?X:Vt>xo?xo:Vt}function lu(Vt){return Math.round(Vt/fe)*fe}}function je(B,X){return B==null||X==null?!1:B[0]===X[0]&&B[1]===X[1]}return(B,X)=>(l(),d(K,null,[A(a(ao),{id:t.id,error:t.error,action:t.labelAction,labelHidden:t.labelHidden},Ue({default:y(()=>[S("div",{class:c(a(F)(a(et).DualThumb,a(xm).RangeSlider))},[a(i).prefix?(l(),d("div",{key:0,class:c(a(et).Prefix)},[f(B.$slots,"prefix")],2)):w("",!0),S("div",{class:c(a(D)),ref_key:"trackWrapper",ref:x,onMousedown:ut},[S("div",{class:c(a(et).Track),style:Fe(a(se)),ref_key:"track",ref:m},null,6),S("div",{class:c(a(et)["Track--dashed"])},null,2),S("div",{id:a(T),class:c(a(E)),style:Fe({left:`${a($)}px`}),ref_key:"thumbLower",ref:b,role:"slider","aria-disabled":t.disabled,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":s.value[0],"aria-invalid":Boolean(t.error),"aria-describedby":a(I),"aria-labelledby":a(_o)(t.id),tabIndex:"0",onFocus:X[0]||(X[0]=Q=>B.$emit("focus")),onBlur:X[1]||(X[1]=Q=>B.$emit("blur")),onKeydown:$e,onMousedown:be,onTouchstart:Me},null,46,E_),!t.disabled&&t.output?(l(),d("output",{key:0,for:a(k),class:c(a(q)),style:Fe({left:`${a($)}px`})},[S("div",{class:c(a(et).OutputBubble)},[S("span",{class:c(a(et).OutputText)},U(s.value[0]),3)],2)],14,O_)):w("",!0),S("div",{id:a(k),class:c(a(R)),style:Fe({left:`${a(z)}px`}),role:"slider",tabIndex:"0",ref_key:"thumbUpper",ref:g,"aria-disabled":t.disabled,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":s.value[1],"aria-invalid":Boolean(t.error),"aria-describedby":a(I),"aria-labelledby":a(_o)(t.id),onFocus:X[2]||(X[2]=Q=>B.$emit("focus")),onBlur:X[3]||(X[3]=Q=>B.$emit("blur")),onKeydown:ye,onMousedown:G,onTouchstart:ce},null,46,q_),!t.disabled&&t.output?(l(),d("output",{key:1,for:a(k),class:c(a(j)),style:Fe({left:`${a(z)}px`})},[S("div",{class:c(a(et).OutputBubble)},[S("span",{class:c(a(et).OutputText)},U(s.value[1]),3)],2)],14,R_)):w("",!0)],34),a(i).suffix?(l(),d("div",{key:1,class:c(a(et).Suffix)},[f(B.$slots,"suffix")],2)):w("",!0)],2)]),_:2},[a(xe)(a(i).label)?{name:"label",fn:y(()=>[f(B.$slots,"label")])}:void 0,a(xe)(a(i)["help-text"])?{name:"help-text",fn:y(()=>[f(B.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden"]),A(a(nt),{event:"resize",handler:a(h)},null,8,["handler"])],64))}});Sm.__docgenInfo={exportName:"default",displayName:"DualThumb",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"DualValue"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["DualValue"]}},{name:"update:modelValue",type:{names:["DualValue"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const _a=M({props:{label:null,labelAction:null,labelHidden:{type:Boolean},modelValue:null,min:{default:0},max:{default:100},step:{default:1},output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue","focus","blur"],setup(t,{emit:n}){const o=t,i=ue(),{useUniqueId:s}=De(),r=s("RangeSlider"),u=p(()=>Array.isArray(o.modelValue)),m=p(()=>u.value?o.modelValue[0]:o.modelValue),x=p(()=>u.value?o.modelValue:[o.modelValue,o.modelValue+1]),b=p(()=>{const N=o,{label:h,modelValue:T}=N,k=J(N,["label","modelValue"]);return v({id:r},k)}),g=(h,T)=>{n("change",h,T),n("update:modelValue",h,T)};return(h,T)=>a(u)?(l(),L(a(Sm),me({key:0,modelValue:a(x),"onUpdate:modelValue":T[0]||(T[0]=k=>Ui(x)?x.value=k:null)},a(b),{onInput:g,onFocus:T[1]||(T[1]=k=>n("focus")),onBlur:T[2]||(T[2]=k=>n("blur"))}),Ue({_:2},[a(i).label||t.label?{name:"label",fn:y(()=>[a(i).label?f(h.$slots,"label",{key:0}):(l(),d(K,{key:1},[ie(U(t.label),1)],64))])}:void 0,a(i)["help-text"]?{name:"help-text",fn:y(()=>[f(h.$slots,"help-text")])}:void 0,a(i).prefix?{name:"prefix",fn:y(()=>[f(h.$slots,"prefix")])}:void 0,a(i).suffix?{name:"suffix",fn:y(()=>[f(h.$slots,"suffix")])}:void 0]),1040,["modelValue"])):(l(),L(a(Tm),me({key:1,modelValue:a(m),"onUpdate:modelValue":T[3]||(T[3]=k=>Ui(m)?m.value=k:null)},a(b),{onInput:g,onFocus:T[4]||(T[4]=k=>n("focus")),onBlur:T[5]||(T[5]=k=>n("blur"))}),Ue({_:2},[a(i).label||t.label?{name:"label",fn:y(()=>[a(i).label?f(h.$slots,"label",{key:0}):(l(),d(K,{key:1},[ie(U(t.label),1)],64))])}:void 0,a(i)["help-text"]?{name:"help-text",fn:y(()=>[f(h.$slots,"help-text")])}:void 0,a(i).prefix?{name:"prefix",fn:y(()=>[f(h.$slots,"prefix")])}:void 0,a(i).suffix?{name:"suffix",fn:y(()=>[f(h.$slots,"suffix")])}:void 0]),1040,["modelValue"]))}});_a.__docgenInfo={exportName:"default",displayName:"RangeSlider",description:"",tags:{},props:[{name:"label",description:"Label for the range input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"RangeSliderValue"}},{name:"min",description:"Minimum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",description:"Maximum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",description:"Increment value for range input changes",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["RangeSliderValue"]}},{name:"update:modelValue",type:{names:["RangeSliderValue"]}},{name:"focus"},{name:"blur"}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const V_="Polaris-Select",H_="Polaris-Select--disabled",U_="Polaris-Select__Content",j_="Polaris-Select__InlineLabel",W_="Polaris-Select__Icon",z_="Polaris-Select__Backdrop",G_="Polaris-Select__SelectedOption",X_="Polaris-Select__Prefix",K_="Polaris-Select__Input",Y_="Polaris-Select--error",Z_="Polaris-Select--hover";var Dt={Select:V_,disabled:H_,Content:U_,InlineLabel:j_,Icon:W_,Backdrop:z_,SelectedOption:G_,Prefix:X_,Input:K_,error:Y_,hover:Z_};const Q_=["id","name","disabled","value","aria-invalid","aria-describedby","aria-required"],J_=["label"],eI=["value","disabled"],tI=["value","disabled"],aI=["aria-disabled"],oo=M({props:{options:null,labelAction:null,labelHidden:{type:Boolean},labelInline:{type:Boolean},disabled:{type:Boolean},placeholder:null,id:null,name:null,value:null,error:null,requiredIndicator:{type:Boolean},modelValue:null},emits:["focus","blur","change","update:modelValue"],setup(t,{emit:n}){const o=t,i=ue(),{useUniqueId:s}=De(),r=[],u=p(()=>s("Select",o.id)),m=p(()=>o.labelInline?!0:o.labelHidden),x=p(()=>F(Dt.Select,o.error&&Dt.error,o.disabled&&Dt.disabled)),b=p(()=>{let $=[];return T.value.forEach(z=>{if(N(z)){const q=z;$=$.concat(q.options)}else $.push(z)}),$}),g=p(()=>{let $=b.value.find(z=>o.modelValue===z.value);return $===void 0&&($=b.value.find(z=>!z.hidden)),$||{value:"",label:""}}),h=p(()=>T.value.map($=>Z($))),T=p(()=>{let $=o.options.map(Z);return o.placeholder&&$.unshift({label:o.placeholder,value:"",disabled:!0}),$});i["help-text"]&&r.push(cs(o.id||"")),o.error&&r.push(`${o.id}Error`);const k=$=>typeof $=="string",N=$=>typeof $=="object"&&"options"in $&&$.options!=null,I=$=>{n("update:modelValue",$.target.value),n("change",$.target.value)},D=$=>N($)?$.title:$.label,E=$=>N($)?{label:$.title,value:"",disabled:!0,hidden:!0}:$,R=$=>N($)?$.options:[];function W($){return{label:$,value:$}}function Z($){if(k($))return W($);if(N($)){const{title:z,options:q}=$;return{title:z,options:q.map(j=>k(j)?W(j):j)}}return $}return($,z)=>(l(),L(a(ao),{id:a(u),error:t.error,action:t.labelAction,"label-hidden":a(m),"required-indicator":t.requiredIndicator},Ue({default:y(()=>[S("div",{class:c(a(x))},[S("select",{id:a(u),name:t.name,class:c(a(Dt).Input),disabled:t.disabled,value:t.modelValue,"aria-invalid":!!t.error,"aria-describedby":r.join(" ")||void 0,"aria-required":t.requiredIndicator,onFocus:z[0]||(z[0]=q=>$.$emit("focus")),onBlur:z[1]||(z[1]=q=>$.$emit("blur")),onChange:I},[(l(!0),d(K,null,ge(a(h),q=>(l(),d(K,null,[N(q)?(l(),d("optgroup",{label:D(q),key:D(q)},[(l(!0),d(K,null,ge(R(q),j=>(l(),d("option",{key:j.value,value:j.value,disabled:j.disabled},U(j.label),9,eI))),128))],8,J_)):(l(),d("option",{key:E(q).value,value:E(q).value,disabled:E(q).disabled},U(E(q).label),9,tI))],64))),256))],42,Q_),S("div",{class:c(a(Dt).Content),"aria-hidden":"","aria-disabled":t.disabled},[t.labelInline?(l(),d("span",{key:0,class:c(a(Dt).InlineLabel)},[f($.$slots,"label")],2)):w("",!0),$.$slots[`prefix-${a(g).id}`]?(l(),d("div",{key:1,class:c(a(Dt).Prefix)},[f($.$slots,`prefix-${a(g).id}`)],2)):w("",!0),S("span",{class:c(a(Dt).SelectedOption)},[$.$slots[`label-${a(g).id}`]?f($.$slots,`label-${a(g).id}`,{key:0}):(l(),d(K,{key:1},[ie(U(a(g).label),1)],64))],2),S("span",{class:c(a(Dt).Icon)},[A(a(re),{source:a(Mp)},null,8,["source"])],2)],10,aI),S("div",{class:c(a(Dt).Backdrop)},null,2)],2)]),_:2},[!t.labelInline&&a(i).label?{name:"label",fn:y(()=>[f($.$slots,"label")])}:void 0,a(i)["help-text"]?{name:"help-text",fn:y(()=>[f($.$slots,"help-text")])}:void 0]),1032,["id","error","action","label-hidden","required-indicator"]))}});oo.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",description:"List of options or option groups to choose from",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"labelInline",description:"Show the label to the left of the value, inside the control",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Example text to display as placeholder",required:!1,type:{name:"string"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"error",description:"Display an error state",required:!1,type:{name:"Error"}},{name:"requiredIndicator",description:"Visual required indicator, add an asterisk to label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["TSIndexedAccessType"]}},{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],slots:[{name:"label"},{name:"help-text"},{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const nI="Polaris-SettingAction",oI="Polaris-SettingAction__Setting",iI="Polaris-SettingAction__Action";var Nr={SettingAction:nI,Setting:oI,Action:iI};const yc=M({setup(t){return(n,o)=>(l(),d("div",{class:c(a(Nr).SettingAction)},[S("div",{class:c(a(Nr).Setting)},[f(n.$slots,"setting")],2),S("div",{class:c(a(Nr).Action)},[f(n.$slots,"action")],2)],2))}});yc.__docgenInfo={exportName:"default",displayName:"SettingAction",description:"",tags:{},slots:[{name:"setting"},{name:"action"}]};const Ss=M({props:{action:null,enabled:{type:Boolean}},setup(t){return(n,o)=>(l(),L(a(Je),{sectioned:""},{default:y(()=>[A(a(yc),null,{action:y(()=>[t.action?(l(),L(a(st),{key:0,action:t.action,overrides:{primary:!t.enabled}},null,8,["action","overrides"])):w("",!0)]),setting:y(()=>[f(n.$slots,"default")]),_:3})]),_:3}))}});Ss.__docgenInfo={exportName:"default",displayName:"SettingToggle",description:"",tags:{},props:[{name:"action",description:"Card header actions",required:!1,type:{name:"ComplexAction"}},{name:"enabled",description:"Sets toggle state to activated or deactivated",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const sI="Polaris-SkeletonBodyText";var lI={SkeletonBodyText:sI};const Go=M({props:{lines:{default:3}},setup(t){return(n,o)=>(l(!0),d(K,null,ge(t.lines,i=>(l(),d("div",{key:i,class:c(a(lI).SkeletonBodyText)},null,2))),128))}});Go.__docgenInfo={exportName:"default",displayName:"SkeletonBodyText",description:"",tags:{},props:[{name:"lines",description:"Number of lines to display",tags:{default:[{description:"3",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}]};const rI="Polaris-SkeletonDisplayText__DisplayText",cI="Polaris-SkeletonDisplayText--sizeSmall",uI="Polaris-SkeletonDisplayText--sizeMedium",dI="Polaris-SkeletonDisplayText--sizeLarge",pI="Polaris-SkeletonDisplayText--sizeExtraLarge";var Hu={DisplayText:rI,sizeSmall:cI,sizeMedium:uI,sizeLarge:dI,sizeExtraLarge:pI};const Xo=M({props:{size:{default:"medium"}},setup(t){const n=t,o=F(Hu.DisplayText,n.size&&Hu[Ne("size",n.size)]);return(i,s)=>(l(),d("div",{class:c(a(o))},null,2))}});Xo.__docgenInfo={exportName:"default",displayName:"SkeletonDisplayText",description:"",tags:{},props:[{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}]};const mI="Polaris-SkeletonPage__Page",yI="Polaris-SkeletonPage--fullWidth",gI="Polaris-SkeletonPage--narrowWidth",hI="Polaris-SkeletonPage__Content",bI="Polaris-SkeletonPage__Header",fI="Polaris-SkeletonPage__BreadcrumbAction",vI="Polaris-SkeletonPage__TitleAndPrimaryAction",xI="Polaris-SkeletonPage__TitleWrapper",TI="Polaris-SkeletonPage__Title",SI="Polaris-SkeletonPage__SkeletonTitle",CI="Polaris-SkeletonPage__PrimaryAction",AI="Polaris-SkeletonPage__Actions",kI="Polaris-SkeletonPage__Action";var Nt={Page:mI,fullWidth:yI,narrowWidth:gI,Content:hI,Header:bI,BreadcrumbAction:fI,TitleAndPrimaryAction:vI,TitleWrapper:xI,Title:TI,SkeletonTitle:SI,PrimaryAction:CI,Actions:AI,Action:kI};const LI=["aria-label"],NI=M({props:{title:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},primaryAction:{type:Boolean},breadcrumbs:{type:Boolean}},setup(t){const n=t,o=ve("lang"),i=p(()=>F(Nt.Page,n.fullWidth&&Nt.fullWidth,n.narrowWidth&&Nt.narrowWidth));return(s,r)=>(l(),d("div",{class:c(a(i)),role:"status","aria-label":a(o).Polaris.SkeletonPage.loadingLabel},[S("div",{class:c(a(Nt).Header)},[t.breadcrumbs?(l(),d("div",{key:0,class:c(a(Nt).BreadcrumbAction),style:{width:"60px"}},[A(a(Go),{lines:1})],2)):w("",!0),S("div",{class:c(a(Nt).TitleAndPrimaryAction)},[S("div",{class:c(a(Nt).TitleWrapper)},[t.title?(l(),d("h1",{key:0,class:c(a(Nt).Title)},U(t.title),3)):(l(),d("div",{key:1,class:c(a(Nt).SkeletonTitle)},null,2))],2),t.primaryAction?(l(),d("div",{key:0,class:c(a(Nt).PrimaryAction)},[A(a(Xo),{size:"large"})],2)):w("",!0)],2)],2),S("div",{class:c(a(Nt).Content)},[f(s.$slots,"default")],2)],10,LI))}});NI.__docgenInfo={exportName:"default",displayName:"SkeletonPage",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Shows a skeleton over the primary action",required:!1,type:{name:"boolean"}},{name:"breadcrumbs",description:"Shows a skeleton over the breadcrumb",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const wI="Polaris-Subheading";var PI={Subheading:wI};const la=M({props:{element:{default:"h3"}},setup(t){const n=ue(),i=p(()=>{var s,r;return n.default&&(((s=n.default()[0])==null?void 0:s.type.toString())==="Symbol(Text)"||((r=n.default()[0])==null?void 0:r.type.toString())==="Symbol()")}).value?n.default&&n.default()[0].children:void 0;return(s,r)=>(l(),L(Oe(t.element),{"aria-label":a(i),class:c(a(PI).Subheading)},{default:y(()=>[f(s.$slots,"default")]),_:3},8,["aria-label","class"]))}});la.__docgenInfo={exportName:"default",displayName:"Subheading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the subheading",tags:{default:[{description:"'h3'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"default"}]};function Uu(t,n,o,i,s){const r=i.reduce((b,g)=>b+g,0),u=t.map((b,g)=>g),m=[],x=[];if(s>r)m.push(...u);else{m.push(n);let b=i[n];u.forEach(g=>{if(g!==n){const h=i[g];if(b+h>=s-o){x.push(g);return}m.push(g),b+=h}})}return{visibleTabs:m,hiddenTabs:x}}const MI="Polaris-Tabs",_I="Polaris-Tabs__Wrapper",II="Polaris-Tabs--fitted",BI="Polaris-Tabs__TabContainer",DI="Polaris-Tabs__Title",$I="Polaris-Tabs--fillSpace",FI="Polaris-Tabs__Tab",EI="Polaris-Tabs--titleWithIcon",OI="Polaris-Tabs__Panel",qI="Polaris-Tabs__List",RI="Polaris-Tabs__Item",VI="Polaris-Tabs__DisclosureTab",HI="Polaris-Tabs__DisclosureActivator",UI="Polaris-Tabs__TabMeasurer";var Le={Tabs:MI,Wrapper:_I,fitted:II,TabContainer:BI,Title:DI,fillSpace:$I,Tab:FI,"Tab-selected":"Polaris-Tabs__Tab--selected",titleWithIcon:EI,Panel:OI,"Panel-hidden":"Polaris-Tabs__Panel--hidden",List:qI,Item:RI,DisclosureTab:VI,"DisclosureTab-visible":"Polaris-Tabs__DisclosureTab--visible",DisclosureActivator:HI,TabMeasurer:UI};const Cm=M({props:{id:null,focused:{type:Boolean},panelID:null,url:null,accessibilityLabel:null},setup(t){const n=t,o=C(null),i=F(Le.Item),s=p(()=>({id:n.id,class:i,"aria-controls":n.panelID,"aria-selected":!1,"aria-label":n.accessibilityLabel}));return(r,u)=>(l(),d("li",null,[t.url?(l(),L(a(Tt),me({key:0,ref_key:"focusedNode",ref:o},a(s),{onClick:u[0]||(u[0]=m=>r.$emit("click"))}),{default:y(()=>[f(r.$slots,"default")]),_:3},16)):(l(),d("button",me({key:1,type:"button",ref_key:"focusedNode",ref:o},a(s),{onClick:u[1]||(u[1]=m=>r.$emit("click"))}),[f(r.$slots,"default")],16))]))}});Cm.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"focused",required:!0,type:{name:"boolean"}},{name:"panelID",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const Am=M({props:{focusIndex:null,disclosureTabs:null},emits:["click","keypress"],setup(t,{emit:n}){const o=ue(),i=s=>{const{key:r}=s;(r==="ArrowLeft"||r==="ArrowRight")&&(s.preventDefault(),s.stopPropagation())};return(s,r)=>(l(),d("ul",{class:c(a(Le).List),onKeydown:i,onKeyup:r[0]||(r[0]=u=>n("keypress",u))},[(l(!0),d(K,null,ge(t.disclosureTabs,(u,m)=>(l(),L(a(Cm),{key:u.id,id:u.id,url:u.url,panelID:u.panelID,accessibilityLabel:u.accessibilityLabel,focused:m===t.focusIndex,onClick:x=>n("click",u.id)},{default:y(()=>[a(xe)(a(o)[u.id])?f(s.$slots,u.id,{key:0}):(l(),d(K,{key:1},[ie(U(u.content),1)],64))]),_:2},1032,["id","url","panelID","accessibilityLabel","focused","onClick"]))),128))],34))}});Am.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"focusIndex",required:!0,type:{name:"number"}},{name:"disclosureTabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}}],events:[{name:"click",type:{names:["string"]}},{name:"keypress",type:{names:["KeyboardEvent"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const jI=["id","aria-labelledby"],zr=M({props:{hidden:{type:Boolean},id:null,tabID:null},setup(t){const n=t,o=p(()=>F(Le.Panel,n.hidden&&Le["Panel--hidden"]));return(i,s)=>(l(),d("div",{class:c(a(o)),id:t.id,role:"tabpanel","aria-labelledby":t.tabID,tabIndex:"-1"},[f(i.$slots,"default")],10,jI))}});zr.__docgenInfo={exportName:"default",displayName:"Panel",description:"",tags:{},props:[{name:"hidden",required:!1,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"tabID",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const WI=["id","tabIndex","aria-selected","aria-controls","aria-label"],gc=M({props:{id:null,focused:{type:Boolean},siblingTabHasFocus:{type:Boolean},selected:{type:Boolean},panelID:null,url:null,measuring:{type:Boolean},accessibilityLabel:null},emits:["click"],setup(t,{emit:n}){const o=t;ue();const i=C(o.selected),s=C(!1),r=C(null),u=p(()=>o.selected&&!o.siblingTabHasFocus&&!o.measuring||o.focused&&!o.measuring?0:-1),m=()=>{n("click",o.id)};Se(()=>{x()}),Ee(()=>[o.focused,o.id,o.measuring,o.panelID,o.selected],()=>{x()});const x=()=>{if(o.measuring)return;(o.focused||document.activeElement&&document.activeElement.id===o.id)&&o.selected&&o.panelID&&!s.value&&(h(o.panelID),s.value=!0),o.selected&&!i.value&&o.panelID?h(o.panelID):o.focused&&r.value&&Do(r.value),i.value=o.selected},b=p(()=>F(Le.Tab,o.selected&&Le["Tab-selected"])),g=p(()=>F(Le.TabContainer)),h=T=>{const k=document.getElementById(T);k&&k.focus({preventScroll:!0})};return(T,k)=>(l(),d("li",{class:c(a(g)),ref_key:"tabNode",ref:r,role:"presentation"},[t.url?(l(),L(a(Tt),{key:0,id:t.id,url:t.url,role:"tab",tabIndex:a(u),class:c(a(b)),"aria-selected":t.selected,"aria-controls":t.panelID,"aria-label":t.accessibilityLabel,onClick:m,onMouseup:a(Ct)},{default:y(()=>[S("span",{class:c(a(Le).Title)},[f(T.$slots,"default")],2)]),_:3},8,["id","url","tabIndex","class","aria-selected","aria-controls","aria-label","onMouseup"])):(l(),d("button",{key:1,id:t.id,role:"tab",type:"button",tabIndex:a(u),class:c(a(b)),"aria-selected":t.selected,"aria-controls":t.panelID,"aria-label":t.accessibilityLabel,onClick:m,onMouseup:k[0]||(k[0]=(...N)=>a(Ct)&&a(Ct)(...N))},[S("span",{class:c(a(Le).Title)},[f(T.$slots,"default")],2)],42,WI))],2))}});gc.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"focused",required:!1,type:{name:"boolean"}},{name:"siblingTabHasFocus",required:!1,type:{name:"boolean"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"panelID",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"measuring",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["string"]}}],slots:[{name:"default"}]};const km=M({props:{tabToFocus:null,siblingTabHasFocus:{type:Boolean},selected:null,tabs:null},emits:["measurement"],setup(t,{emit:n}){const o=t,i=ue(),s=C(null),r=C(null),u=()=>{r.value&&cancelAnimationFrame(r.value),r.value=requestAnimationFrame(()=>{if(!s.value)return;const x=s.value.offsetWidth,b=s.value.children,h=Array.from(b).map(k=>Math.ceil(k.getBoundingClientRect().width)),T=h.pop()||0;n("measurement",{containerWidth:x,disclosureWidth:T,hiddenTabWidths:h})})};Ee(()=>o.tabs,()=>{u()});const m=F(Le.Tabs,Le.TabMeasurer);return(x,b)=>(l(),d("div",{class:c(a(m)),ref_key:"containerNode",ref:s},[A(a(nt),{event:"resize",handler:u}),(l(!0),d(K,null,ge(t.tabs,(g,h)=>(l(),L(a(gc),{measuring:"",key:`${h}${g.id}Hidden`,id:`${g.id}Measurer`,siblingTabHasFocus:t.siblingTabHasFocus,focused:h===t.tabToFocus,selected:h===t.selected,url:g.url},{default:y(()=>[a(xe)(a(i)[g.id])?f(x.$slots,g.id,{key:0}):(l(),d(K,{key:1},[ie(U(g.content),1)],64))]),_:2},1032,["id","siblingTabHasFocus","focused","selected","url"]))),128)),f(x.$slots,"activator")],2))}});km.__docgenInfo={exportName:"default",displayName:"TabMeasurer",description:"",tags:{},props:[{name:"tabToFocus",required:!0,type:{name:"number"}},{name:"siblingTabHasFocus",required:!0,type:{name:"boolean"}},{name:"selected",required:!0,type:{name:"number"}},{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}}],events:[{name:"measurement",type:{names:["TabMeasurements"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"activator"}]};const zI=["aria-label"],GI=["aria-label"],XI=["aria-label"],KI=["aria-label"],Cs=M({props:{selected:null,tabs:null,fitted:{type:Boolean},disclosureText:null},emits:["select"],setup(t,{emit:n}){const o=t,i=ve("lang"),s=ue(),r=(O,G)=>{const{disclosureWidth:Y,tabWidths:ce,containerWidth:de}=G,{visibleTabs:$e,hiddenTabs:ye}=Uu(O.tabs,O.selected,Y,ce,de);b.value=$e,g.value=ye};Se(()=>{r({tabs:o.tabs,selected:o.selected},{disclosureWidth:u.value,tabWidths:x.value,containerWidth:m.value})});const u=C(0),m=C(1/0),x=C([]),b=C([]),g=C([]),h=C(!1),T=C(-1),k=p(()=>b.value.length<o.tabs.length),N=p(()=>!!o.disclosureText),I=p(()=>F(Le.Tabs,o.fitted&&Le.fitted,k.value&&Le.fillSpace)),D=p(()=>F(Le.DisclosureTab,k.value&&Le["DisclosureTab-visible"])),E=p(()=>F(Le.DisclosureActivator,N.value&&Le.Tab)),R=p(()=>F(Le.Title,N.value&&Le.titleWithIcon)),W=p(()=>[...b.value].sort((G,Y)=>G-Y)),Z=p(()=>g.value.map(O=>o.tabs[O])),$=O=>{const G=O.key,Y=h.value?b.value.concat(g.value):[...b.value];let ce=Y.indexOf(T.value);G==="ArrowRight"&&(ce+=1,ce===Y.length&&(ce=0)),G==="ArrowLeft"&&(ce===-1||ce===0?ce=Y.length-1:ce-=1),T.value=Y[ce]},z=O=>{const G=O.target;if(G.classList.contains(Le.Tab)||G.classList.contains(Le.Item)){let ce=-1;o.tabs.some((de,$e)=>de.id===G.id?(ce=$e,!0):!1),T.value=ce;return}if(G.classList.contains(Le.DisclosureActivator))return;if(!O.relatedTarget){T.value=o.selected;return}const Y=O.relatedTarget;Y instanceof HTMLElement&&!Y.classList.contains(Le.Tab)&&!Y.classList.contains(Le.Item)&&!Y.classList.contains(Le.DisclosureActivator)&&(T.value=o.selected)},q=O=>{if(O.relatedTarget==null){T.value=-1;return}const G=O.relatedTarget;G instanceof HTMLElement&&!G.classList.contains(Le.Tab)&&!G.classList.contains(Le.Item)&&(T.value=-1)},j=()=>{h.value=!h.value},se=()=>{h.value=!1},be=O=>{const G=Uu(o.tabs,o.selected,O.disclosureWidth,O.hiddenTabWidths,O.containerWidth);T.value=T.value===-1?-1:o.selected,b.value=G.visibleTabs,g.value=G.hiddenTabs,u.value=O.disclosureWidth,m.value=O.containerWidth,x.value=O.hiddenTabWidths},ee=O=>{const G=o.tabs.findIndex(Y=>Y.id===O);G!==-1&&n("select",G)};function Me(O){const{key:G}=O;(G==="ArrowLeft"||G==="ArrowRight")&&(O.preventDefault(),O.stopPropagation())}return(O,G)=>(l(),d("div",null,[S("div",{class:c(a(Le).Wrapper)},[A(a(km),{tabToFocus:T.value,selected:t.selected,tabs:t.tabs,siblingTabHasFocus:T.value>-1,onMeasurement:be},Ue({activator:y(()=>[t.disclosureText?(l(),d("div",{key:0,class:c(a(Le).TabContainer)},[S("button",{type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(N)?(l(),d(K,{key:0},[ie(U(t.disclosureText),1),A(a(re),{source:a(fa),color:"subdued"},null,8,["source"])],64)):(l(),L(a(re),{key:1,source:a(ba),color:"subdued"},null,8,["source"]))],2)],10,zI)],2)):(l(),d("button",{key:1,type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(N)?(l(),d(K,{key:0},[ie(U(t.disclosureText),1),A(a(re),{source:a(fa),color:"subdued"},null,8,["source"])],64)):(l(),L(a(re),{key:1,source:a(ba),color:"subdued"},null,8,["source"]))],2)],10,GI))]),_:2},[ge(t.tabs,(Y,ce)=>({name:"{#[tab.id]}",fn:y(()=>[a(xe)(a(s)[Y.id])?f(O.$slots,Y.id,{key:0}):(l(),d(K,{key:1},[ie(U(Y.content),1)],64))])}))]),1032,["tabToFocus","selected","tabs","siblingTabHasFocus"]),S("ul",{role:"tablist",class:c(a(I)),onFocus:z,onBlur:q,onKeydown:Me,onKeyup:$},[(l(!0),d(K,null,ge(a(W),(Y,ce)=>(l(),L(a(gc),{key:`${ce}-${t.tabs[Y].id}`,id:t.tabs[Y].id,siblingTabHasFocus:T.value>-1,focused:ce===T.value,selected:ce===t.selected,panelID:a(xe)(a(s).default)?t.tabs[Y].panelID||`${t.tabs[Y].id}-panel`:void 0,accessibilityLabel:t.tabs[Y].accessibilityLabel,url:t.tabs[Y].url,onClick:ee},{default:y(()=>[a(xe)(a(s)[t.tabs[Y].id])?f(O.$slots,t.tabs[Y].id,{key:0}):(l(),d(K,{key:1},[ie(U(t.tabs[Y].content),1)],64))]),_:2},1032,["id","siblingTabHasFocus","focused","selected","panelID","accessibilityLabel","url"]))),128)),S("li",{class:c(a(D)),role:"presentation"},[A(a(Qe),{preferredPosition:"below",active:a(k)&&h.value,onClose:se,autofocusTarget:"first-node"},{activator:y(()=>[t.disclosureText?(l(),d("div",{key:0,class:c(a(Le).TabContainer)},[S("button",{type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(N)?(l(),d(K,{key:0},[ie(U(t.disclosureText),1),A(a(re),{source:a(fa),color:"subdued"},null,8,["source"])],64)):(l(),L(a(re),{key:1,source:a(ba),color:"subdued"},null,8,["source"]))],2)],10,XI)],2)):(l(),d("button",{key:1,type:"button",class:c(a(E)),"aria-label":a(i).Polaris.Tabs.toggleTabsLabel,onClick:j},[S("span",{class:c(a(R))},[a(N)?(l(),d(K,{key:0},[ie(U(t.disclosureText),1),A(a(re),{source:a(fa),color:"subdued"},null,8,["source"])],64)):(l(),L(a(re),{key:1,source:a(ba),color:"subdued"},null,8,["source"]))],2)],10,KI))]),content:y(()=>[A(a(Am),{focusIndex:g.value.indexOf(T.value),disclosureTabs:a(Z),onClick:ee,onKeypress:$},null,8,["focusIndex","disclosureTabs"])]),_:1},8,["active"])],2)],34)],2),a(xe)(a(s).default)?(l(!0),d(K,{key:0},ge(t.tabs,(Y,ce)=>(l(),d(K,{key:Y.id},[t.selected===ce?(l(),L(a(zr),{key:0,id:Y.panelID||`${Y.id}-panel`,tabID:Y.id},{default:y(()=>[f(O.$slots,"default")]),_:2},1032,["id","tabID"])):w("",!0),A(a(zr),{id:Y.panelID||`${Y.id}-panel`,tabID:Y.id,hidden:""},null,8,["id","tabID"])],64))),128)):w("",!0)]))}});Cs.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"selected",description:"Index of selected tab",required:!0,type:{name:"number"}},{name:"tabs",description:"List of tabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}},{name:"fitted",description:"Fit tabs to container",required:!1,type:{name:"boolean"}},{name:"disclosureText",description:"Text to replace disclosures horizontal dots",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["number"]},description:"Callback when tab is selected"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Ko=M({props:{content:null,duration:null,error:{type:Boolean},action:null},setup(t){const n=t,o=Kt(),{useUniqueId:i}=De(),{useFrame:s}=no(),{showToast:r,hideToast:u}=s(),m=i("Toast");return Se(()=>{r(v(v({id:m},n),o))}),pt(()=>{u({id:m})}),(x,b)=>null}});Ko.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}]};const YI=["id","aria-label"],Lm=M({props:{id:null,active:{type:Boolean},preventInteraction:null,preferredPosition:{default:"below"},activator:null,accessibilityLabel:null},setup(t){const n=t,o=ve("lang"),i=C({}),s=p(()=>n.accessibilityLabel?o.Polaris.TooltipOverlay.accessibilityLabel.replace("{label}",n.accessibilityLabel):void 0),r=u=>{i.value={minHeight:`${u.desiredHeight}px`}};return(u,m)=>t.active?(l(),L(a(ac),{key:0,layout:"tooltip",active:t.active,activator:t.activator,preferredPosition:t.preferredPosition,preventInteraction:t.preventInteraction,onChangeContentStyles:r},{default:y(()=>[S("div",{id:t.id,role:"tooltip",class:c(a(Ei).Content),style:Fe(i.value),"aria-label":a(s)},[f(u.$slots,"default")],14,YI)]),_:3},8,["active","activator","preferredPosition","preventInteraction"])):w("",!0)}});Lm.__docgenInfo={exportName:"default",displayName:"TooltipOverlay",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const ZI={inheritAttrs:!1},Ca=M(_(v({},ZI),{props:{active:{type:Boolean,default:!1},content:null,dismissOnMouseOut:null,preferredPosition:{default:"below"},activatorWrapper:{default:"span"},accessibilityLabel:null},setup(t){const n=t,o=ue(),i=C(n.active),s=C(!1),r=C(null),u=C(null),{useUniqueId:m,uniqueIdRef:x}=De(),b=m("TooltipContent");Ee(()=>x.value,()=>{const E=(u.value?Zr(u.value):null)||u.value;!E||(E.tabIndex=0,E.setAttribute("aria-describedby",b),E.setAttribute("data-polaris-tooltip-activator","true"))}),Ee(()=>u.value,()=>{const D=u.value;D==null?r.value=null:D.firstElementChild instanceof HTMLElement&&(r.value=D.firstElementChild)});const g=()=>{i.value=!1},h=()=>{i.value=!0},T=D=>{D.key===ze.Escape&&g()};function k(){s.value=!0,h()}function N(){s.value=!1,g()}function I(){!s.value&&k()}return(D,E)=>(l(),L(Oe(t.activatorWrapper),{ref_key:"activatorContainer",ref:u,onFocus:h,onBlur:g,onMouseleave:N,onMouseover:I,onClick:E[0]||(E[0]=R=>R.stopPropagation()),onKeyup:T},{default:y(()=>[f(D.$slots,"default"),r.value?(l(),L(a(Fo),{key:0,idPrefix:"tooltip"},{default:y(()=>[A(a(Lm),{id:a(b),preferredPosition:t.preferredPosition,preventInteraction:t.dismissOnMouseOut,activator:r.value,active:i.value,accessibilityLabel:t.accessibilityLabel},{default:y(()=>[a(o).content?f(D.$slots,"content",{key:0}):(l(),d(K,{key:1},[ie(U(t.content),1)],64))]),_:3},8,["id","preferredPosition","preventInteraction","activator","active","accessibilityLabel"])]),_:3})):w("",!0)]),_:3},512))}}));Ca.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"active",description:"Toggle whether the tooltip is visible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"content",description:"The content to display within the tooltip",required:!1,type:{name:"string"}},{name:"dismissOnMouseOut",description:"Dismiss tooltip when not interacting with its children",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",description:"The direction the tooltip tries to display",tags:{default:[{description:"'below'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activatorWrapper",description:"The element type to wrap the activator in",tags:{default:[{description:"'span'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"content"}]};const QI="Polaris-Tag",JI="Polaris-Tag--disabled",eB="Polaris-Tag--clickable",tB="Polaris-Tag--removable",aB="Polaris-Tag--linkable",nB="Polaris-Tag__TagText",oB="Polaris-Tag__Button",iB="Polaris-Tag--segmented",sB="Polaris-Tag__Link",lB="Polaris-Tag__LinkText";var St={Tag:QI,disabled:JI,clickable:eB,removable:tB,linkable:aB,TagText:nB,Button:oB,segmented:iB,Link:sB,LinkText:lB};const rB=["disabled"],cB=["href"],uB=["title"],dB=["title"],pB=["aria-label","disabled"],Yo=M({props:{disabled:{type:Boolean},accessibilityLabel:null,url:null},setup(t){const n=t,o=Kt(),i=ue(),s=p(()=>Boolean(o.onClick)),r=p(()=>Boolean(o.onRemove)),u=p(()=>s.value&&n.url),m=p(()=>F(St.Tag,n.disabled&&St.disabled,s.value&&St.clickable,r.value&&St.removable,n.url&&!n.disabled&&St.linkable,u.value&&St.segmented)),x=p(()=>F(St.Link,u.value&&St.segmented)),b=p(()=>F(St.Button,u.value&&St.segmented)),g=p(()=>n.accessibilityLabel?n.accessibilityLabel:i.default&&i.default()[0].children?i.default()[0].children:""),h=p(()=>`Remove ${g.value||""}`),T=Ct;return(k,N)=>a(s)?(l(),d("button",{key:0,type:"button",disabled:t.disabled,class:c(a(m))},[f(k.$slots,"default")],10,rB)):(l(),d("span",{key:1,class:c(a(m))},[t.url&&!t.disabled?(l(),d("a",{key:0,class:c(a(x)),href:t.url},[S("span",{title:a(g),class:c(a(St).LinkText)},[f(k.$slots,"default")],10,uB)],10,cB)):(l(),d("span",{key:1,title:a(g),class:c(a(St).TagText)},[f(k.$slots,"default")],10,dB)),a(r)?(l(),d("button",{key:2,type:"button","aria-label":a(h),class:c(a(b)),disabled:t.disabled,onClick:N[0]||(N[0]=I=>k.$emit("remove")),onMouseup:N[1]||(N[1]=(...I)=>a(T)&&a(T)(...I))},[A(a(re),{source:a(Kr)},null,8,["source"])],42,pB)):w("",!0)],2))}});Yo.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"disabled",description:"Disables the tag",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"A string to use when tag has more than textual content",required:!1,type:{name:"string"}},{name:"url",description:"Url to navigate to when tag is clicked or keypressed.",required:!1,type:{name:"string"}}],events:[{name:"remove"}],slots:[{name:"default"}]};const mB="Polaris-Thumbnail",yB="Polaris-Thumbnail--sizeSmall",gB="Polaris-Thumbnail--sizeMedium",hB="Polaris-Thumbnail--sizeLarge",bB="Polaris-Thumbnail--transparent";var wr={Thumbnail:mB,sizeSmall:yB,sizeMedium:gB,sizeLarge:hB,transparent:bB};const Zo=M({props:{size:{default:"medium"},source:null,alt:null,transparent:{type:Boolean}},setup(t){const n=t,o=p(()=>{const i=Ne("size",n.size);return F(wr.Thumbnail,i&&wr[i],n.transparent&&wr.transparent)});return(i,s)=>(l(),d("span",{class:c(a(o))},[typeof t.source=="string"?(l(),L(a(Jn),{key:0,alt:t.alt,source:t.source},null,8,["alt","source"])):(l(),L(a(re),{key:1,accessibilityLabel:t.alt,source:t.source},null,8,["accessibilityLabel","source"]))],2))}});Zo.__docgenInfo={exportName:"default",displayName:"Thumbnail",description:"",tags:{},props:[{name:"size",description:"Size of thumbnail",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"source",description:"URL for the image",required:!0,type:{name:"union",elements:[{name:"string"},{name:"IconSource"}]}},{name:"alt",description:"Alt text for the thumbnail image",required:!0,type:{name:"string"}},{name:"transparent",description:"Transparent background",required:!1,type:{name:"boolean"}}]};const fB={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},vB=S("path",{d:"M19 11H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14H1a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"},null,-1),xB=[vB];function TB(t,n){return l(),d("svg",fB,xB)}var SB={render:TB};const CB="Polaris-TopBar",AB="Polaris-TopBar__LogoDisplayControl",kB="Polaris-TopBar__LogoDisplayContainer",LB="Polaris-TopBar__LogoContainer",NB="Polaris-TopBar__Logo",wB="Polaris-TopBar__LogoLink",PB="Polaris-TopBar__ContextControl",MB="Polaris-TopBar__NavigationIcon",_B="Polaris-TopBar--focused",IB="Polaris-TopBar__IconWrapper",BB="Polaris-TopBar__Contents",DB="Polaris-TopBar__SearchField",$B="Polaris-TopBar__SecondaryMenu";var bt={TopBar:CB,LogoDisplayControl:AB,LogoDisplayContainer:kB,LogoContainer:LB,Logo:NB,LogoLink:wB,ContextControl:PB,NavigationIcon:MB,focused:_B,IconWrapper:IB,Contents:BB,SearchField:DB,SecondaryMenu:$B};const FB="Polaris-TopBar-Menu__ActivatorWrapper",EB="Polaris-TopBar-Menu__Activator",OB="Polaris-TopBar-Menu__Section";var ju={ActivatorWrapper:FB,Activator:EB,Section:OB};const qB="Polaris-Menu-Message__Section";var RB={Section:qB};const Nm=M({props:{title:null,description:null,action:null,link:null,badge:null},setup(t){return(n,o)=>(l(),d("div",{class:c(a(RB).Section)},[A(a(Mo),null,{default:y(()=>[A(a(Ve),{vertical:"",spacing:"tight"},{default:y(()=>[A(a(At),null,{default:y(()=>[A(a($t),null,{default:y(()=>[ie(U(t.title),1),t.badge?(l(),L(a(it),{key:0,status:t.badge.status},{default:y(()=>[ie(U(t.badge.content),1)]),_:1},8,["status"])):w("",!0)]),_:1}),S("p",null,U(t.description),1)]),_:1}),A(a(wa),{url:t.link.to},{default:y(()=>[ie(U(t.link.content),1)]),_:1},8,["url"]),A(a(he),{plain:"",onClick:t.action.onClick},{default:y(()=>[ie(U(t.action.content),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],2))}});Nm.__docgenInfo={exportName:"default",displayName:"Message",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}},{name:"action",required:!0,type:{name:"{ onClick(): void; content: string }"}},{name:"link",required:!0,type:{name:"{ to: string; content: string }"}},{name:"badge",required:!1,type:{name:"{ content: string; status: BadgeProps['status'] }"}}]};const VB=["aria-label"],HB={inheritAttrs:!1},As=M(_(v({},HB),{props:{actions:null,message:null,open:{type:Boolean},colorScheme:null,accessibilityLabel:null},setup(t){const n=t,o=p(()=>!!n.message),i=n.message&&n.message.badge&&{content:n.message.badge.content,status:n.message.badge.status};return(s,r)=>(l(),L(a(Qe),{fixed:"",active:t.open,"full-height":a(o),preferredAlignment:"right","color-scheme":t.colorScheme,onClose:r[2]||(r[2]=u=>s.$emit("close"))},{activator:y(()=>[S("div",{class:c(a(ju).ActivatorWrapper)},[S("button",{type:"button",class:c(a(ju).Activator),"aria-label":t.accessibilityLabel,onClick:r[0]||(r[0]=u=>s.$emit("open"))},[f(s.$slots,"activatorContent")],10,VB)],2)]),content:y(()=>[A(a(Ze),{sections:t.actions,onActionAnyItem:r[1]||(r[1]=u=>s.$emit("close"))},null,8,["sections"]),t.message&&t.message.action&&t.message.link?(l(),L(a(Nm),{key:0,title:t.message.title,description:t.message.description,action:{onClick:t.message.action.onClick,content:t.message.action.content},link:{to:t.message.link.to,content:t.message.link.content},badge:a(i)},null,8,["title","description","action","link","badge"])):w("",!0)]),_:3},8,["active","full-height","color-scheme"]))}}));As.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"TSIndexedAccessType"}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the menu",required:!1,type:{name:"MessageProps"}},{name:"open",description:"A boolean property indicating whether the menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}}],events:[{name:"close"},{name:"open"}],slots:[{name:"activatorContent"}]};const UB="Polaris-TopBar-Search",jB="Polaris-TopBar-Search__SearchContent",WB="Polaris-TopBar-Search--visible",zB="Polaris-TopBar-Search__Results";var Fi={Search:UB,SearchContent:jB,visible:WB,Results:zB};const GB="Polaris-TopBar-SearchDismissOverlay",XB="Polaris-TopBar-SearchDismissOverlay--visible";var Wu={SearchDismissOverlay:GB,visible:XB};const wm=M({props:{visible:{type:Boolean}},emits:["dismiss"],setup(t,{emit:n}){const o=t,i=C(null),s=p(()=>F(Wu.SearchDismissOverlay,o.visible&&Wu.visible)),r=u=>{u.target===i.value&&n("dismiss")};return(u,m)=>(l(),d(K,null,[t.visible?(l(),L(a(Jr),{key:0})):w("",!0),S("div",me(u.$attrs,{ref_key:"nodeRef",ref:i,class:a(s),onClick:r}),null,16)],64))}});wm.__docgenInfo={exportName:"default",displayName:"SearchDismissOverlay",description:"",tags:{},props:[{name:"visible",description:"Determines whether the overlay should be visible",required:!0,type:{name:"boolean"}}],events:[{name:"dismiss"}]};const Pm=M({props:{visible:{type:Boolean},overlayVisible:{type:Boolean,default:!1}},emits:["dismiss"],setup(t,{emit:n}){const o=t,i=ue(),s=p(()=>F(Fi.Search,o.visible&&Fi.visible));return(r,u)=>(l(),d(K,null,[t.visible&&a(i).default?(l(),L(a(wm),{key:0,visible:t.overlayVisible,onDismiss:u[0]||(u[0]=m=>r.$emit("dismiss"))},null,8,["visible"])):w("",!0),a(i).default?(l(),d("div",{key:1,class:c(a(s))},[A(a(Yt),null,{default:y(()=>[S("div",{class:c(a(Fi).SearchContent)},[S("div",{class:c(a(Fi).Results)},[f(r.$slots,"default")],2)],2)]),_:3})],2)):w("",!0)],64))}});Pm.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"visible",description:"Toggles whether or not the search is visible",required:!1,type:{name:"boolean"}},{name:"overlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const KB="Polaris-TopBar-SearchField",YB="Polaris-TopBar-SearchField--focused",ZB="Polaris-TopBar-SearchField__Input",QB="Polaris-TopBar-SearchField__Backdrop",JB="Polaris-TopBar-SearchField__BackdropShowFocusBorder",eD="Polaris-TopBar-SearchField__Icon",tD="Polaris-TopBar-SearchField__Clear";var ha={SearchField:KB,focused:YB,Input:ZB,Backdrop:QB,BackdropShowFocusBorder:JB,Icon:eD,Clear:tD};const aD=["for"],nD=["id","placeholder"],oD=["aria-label"],hc=M({props:{modelValue:null,placeholder:null,focused:{type:Boolean},active:{type:Boolean},showFocusBorder:{type:Boolean}},emits:["change","focus","blur","cancel","update:modelValue"],setup(t,{emit:n}){const o=t,i=ve("lang"),s=C(!1),r=C(null),{useUniqueId:u}=De(),m=u("SearchField"),x=D=>{const E=D.target;n("change",E.value),n("update:modelValue",E.value)},b=()=>{n("focus")},g=()=>{n("blur")},h=()=>{n("cancel"),n("update:modelValue",""),n("change",""),r.value&&r.value.focus()},T=()=>{s.value=!1},k=()=>{b(),s.value=!0},N=p(()=>F(ha.SearchField,(o.focused||o.active||s.value)&&ha.focused)),I=p(()=>F(ha.Backdrop,o.showFocusBorder&&ha.BackdropShowFocusBorder));return Se(()=>{!r.value||(o.focused?r.value.focus():r.value.blur())}),(D,E)=>(l(),d("div",{class:c(a(N)),onFocus:b,onBlur:g},[A(a(lt),null,{default:y(()=>[S("label",{for:a(m)},U(a(i).Polaris.TopBar.SearchField.search),9,aD)]),_:1}),dh(S("input",{id:a(m),class:c(a(ha).Input),placeholder:t.placeholder,ref_key:"inputRef",ref:r,type:"search",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off","onUpdate:modelValue":E[0]||(E[0]=R=>Ui(modelValue)?modelValue.value=R:null),onInput:x,onKeydown:E[1]||(E[1]=Mr(op(()=>!1,["prevent"]),["enter"]))},null,42,nD),[[ph,t.modelValue]]),S("span",{class:c(a(ha).Icon)},[A(a(re),{source:a(Bo)},null,8,["source"])],2),t.modelValue.length>0?(l(),d("button",{key:0,type:"button","aria-label":a(i).Polaris.TopBar.SearchField.clearButtonLabel,class:c(a(ha).Clear),onClick:h,onBlur:T,onFocus:k},[A(a(re),{source:a(Ep)},null,8,["source"])],42,oD)):w("",!0),S("div",{class:c(a(I))},null,2)],34))}});hc.__docgenInfo={exportName:"default",displayName:"SearchField",description:"",tags:{},props:[{name:"modelValue",description:"Initial value for the input",required:!0,type:{name:"string"}},{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"active",description:"Force a state where search is active but the text field component is not focused",required:!1,type:{name:"boolean"}},{name:"showFocusBorder",description:"Show a border when the search field is focused",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["string"]}},{name:"focus"},{name:"blur"},{name:"cancel"},{name:"update:modelValue",type:{names:["string"]}}]};const iD="Polaris-TopBar-UserMenu__Details",sD="Polaris-TopBar-UserMenu__Name",lD="Polaris-TopBar-UserMenu__Detail";var Pr={Details:iD,Name:sD,Detail:lD};const bc=M({props:{actions:null,message:null,name:null,detail:null,accessibilityLabel:null,initials:null,avatar:null,open:{type:Boolean},colorScheme:null},setup(t){const o=C(!!t.message);return(i,s)=>(l(),L(a(As),{open:t.open,actions:t.actions,message:t.message,"color-scheme":t.colorScheme,accessibilityLabel:t.accessibilityLabel,onOpen:s[0]||(s[0]=r=>i.$emit("toggle")),onClose:s[1]||(s[1]=r=>i.$emit("toggle"))},{activatorContent:y(()=>[A(a(sm),{active:o.value},{default:y(()=>[A(a(eo),{size:"small",source:t.avatar,initials:t.initials?t.initials.replace(" ",""):void 0},null,8,["source","initials"])]),_:1},8,["active"]),S("span",{class:c(a(Pr).Details)},[S("p",{class:c(a(Pr).Name)},U(t.name),3),S("p",{class:c(a(Pr).Detail)},U(t.detail),3)],2)]),_:1},8,["open","actions","message","color-scheme","accessibilityLabel"]))}});bc.__docgenInfo={exportName:"default",displayName:"UserMenu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"Array",elements:[{name:"{items: IconableAction[]}"}]}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"name",description:"A string detailing the merchant\u2019s full name to be displayed in the user menu",required:!0,type:{name:"string"}},{name:"detail",description:"A string allowing further detail on the merchant\u2019s name displayed in the user menu",required:!1,type:{name:"string"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}},{name:"initials",description:"The merchant\u2019s initials, rendered in place of an avatar image when not provided",required:!0,type:{name:"TSIndexedAccessType"}},{name:"avatar",description:"An avatar image representing the merchant",required:!1,type:{name:"TSIndexedAccessType"}},{name:"open",description:"A boolean property indicating whether the user menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the user menu",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"toggle"}]};const rD=["aria-label"],Qo=M({props:{showNavigationToggle:{type:Boolean},searchResultsVisible:{type:Boolean},searchResultsOverlayVisible:{type:Boolean,default:!1}},emits:["search-result-dismiss","navigation-toggle"],setup(t,{emit:n}){const o=t,i=ve("lang"),{useFrame:s}=no(),{logo:r}=s(),u=ue(),m=C(!1),x=()=>{m.value=!0},b=()=>{m.value=!1},g=p(()=>F(bt.NavigationIcon,m.value&&bt.focused)),h=p(()=>F(bt.LogoContainer,o.showNavigationToggle||u.searchField?bt.LogoDisplayControl:bt.LogoDisplayContainer)),T=cc(r,104);return(k,N)=>(l(),d("div",{class:c(a(bt).TopBar)},[t.showNavigationToggle?(l(),d("button",{key:0,type:"button",class:c(a(g)),onClick:N[0]||(N[0]=I=>k.$emit("navigation-toggle")),onFocus:x,onBlur:b,"aria-label":a(i).Polaris.TopBar.toggleMenuLabel},[S("div",{class:c(a(bt).IconWrapper)},[A(a(re),{source:a(SB)},null,8,["source"])],2)],42,rD)):w("",!0),a(u).contextControl?(l(),d("div",{key:1,class:c(a(bt).ContextControl)},[f(k.$slots,"contextControl")],2)):a(r)?(l(),d("div",{key:2,class:c(a(h))},[A(a(Tt),{url:a(r).url||"",class:c(a(bt).LogoLink),style:Fe({width:a(T)})},{default:y(()=>[A(a(Jn),{source:a(r).topBarSource||"",alt:a(r).accessibilityLabel||"",class:c(a(bt).Logo),style:Fe({width:a(T)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):w("",!0),S("div",{class:c(a(bt).Contents)},[S("div",{class:c(a(bt).SearchField)},[a(u).searchField?(l(),d(K,{key:0},[f(k.$slots,"searchField"),A(a(Pm),{visible:t.searchResultsVisible,overlayVisible:t.searchResultsOverlayVisible,onDismiss:N[1]||(N[1]=I=>k.$emit("search-result-dismiss"))},{default:y(()=>[f(k.$slots,"searchResults")]),_:3},8,["visible","overlayVisible"])],64)):w("",!0)],2),S("div",{class:c(a(bt).SecondaryMenu)},[f(k.$slots,"secondaryMenu")],2),f(k.$slots,"userMenu")],2)],2))}});Qo.__docgenInfo={exportName:"default",displayName:"TopBar",description:"",tags:{},props:[{name:"showNavigationToggle",description:"Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button",required:!1,type:{name:"boolean"}},{name:"searchResultsVisible",description:"A boolean property indicating whether search results are currently visible.",required:!1,type:{name:"boolean"}},{name:"searchResultsOverlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"navigation-toggle"},{name:"search-result-dismiss"}],slots:[{name:"contextControl"},{name:"searchField"},{name:"searchResults"},{name:"secondaryMenu"},{name:"userMenu"}]};const cD=[t=>({components:{AppProvider:$o,story:t},template:"<AppProvider><story /></AppProvider>"})],uD={viewMode:"docs",docs:{transformSource:t=>{const n=/<template>(.*)<\/template>/g;return`${t.replace(n,"$1")}`},source:{state:"open"}},controls:{matchers:{color:/(background|color|backgroundColor)$/i,date:/Date$/},sort:"alpha"},options:{showPanel:!0,storySort:{order:["Get Started","Polaris Icons","FAQs","Components",["Actions","Structure","Forms","Images and icons","Feedback indicators","Titles and text","Behavior","Lists and tables","Navigation","Overlays"]]}}};var dD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:cD,parameters:uD});const pD={},mD="wrapper";function Mm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(mD,_(v(v({},pD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e("h1",null,"FAQs"),e("hr",null),e("br",null),e("h4",null,e("strong",{parentName:"h4"},"Issue: Missing declaration types")),e("p",null,"At this moment, you should add the property ",e("inlineCode",{parentName:"p"},"skipLibCheck: true")," to ",e("strong",{parentName:"p"},"tsconfig.json"),` file.
This will skip the check for missing declaration types.
We will try to fix this issue in the future.`),e("br",null),e("h4",null,e("strong",{parentName:"h4"},"CSS Variables & Polaris Tokens")),e("p",null,"All tokens & variables are following the ",e("a",{parentName:"p",href:"https://polaris.shopify.com/tokens/all-tokens"},"Polaris Design Tokens"),`.
Feel free to change the variables, based on your project scheme.`))}Mm.isMDXComponent=!0;const _m=()=>{throw new Error("Docs-only story")};_m.parameters={docsOnly:!0};const Ea={title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},yD={};Ea.parameters=Ea.parameters||{};Ea.parameters.docs=_(v({},Ea.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:yD,mdxComponentAnnotations:Ea},e(Mm,null))});var gD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:_m,default:Ea});const hD={},bD="wrapper";function Im(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(bD,_(v(v({},hD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e("img",{src:"https://github.com/qikify/polaris-vue/blob/master/public/images/banner.jpg?raw=true",alt:"Shopify Polaris Vue",width:"1000",height:"376"}),e("br",null),e("br",null),e("h1",null,"Get Started"),e("br",null),e("p",null,"Polaris Vue by Qikify is a component library for ",e("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," based on ",e("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris style guide"),". We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library)."),e("p",null,"Polaris Vue by qikify only supports ",e("strong",{parentName:"p"},"Vue 3.0+"),"."),e("p",null,e("strong",{parentName:"p"},"Follow Polaris React version:")," ",e("a",{parentName:"p",href:"https://github.com/Shopify/polaris/releases/tag/v9.5.0"},"9.5.0")," - Migrated date: ",e("em",{parentName:"p"},"Apr 23rd, 2022"),"."),e("br",null),e("br",null),e("h2",null,"Installation"),e("p",null,"Using NPM"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`npm install @qikify/polaris-vue
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
`)),e("br",null),e("h2",null,"Issues & Contributions"),e("p",null,"Polaris Vue by qikify is an open source project and we are very happy to accept community contributions."),e("p",null,"If you notice any bugs, please create issues under ",e("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/issues"},"Issues"),"."),e("br",null),e("br",null),e("h2",null,"License"),e("p",null,"Code released under the  ",e("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/LICENSE"},"MIT License"),"."),e("p",null,"Copyright (c) 2021 Qikify"))}Im.isMDXComponent=!0;const Bm=()=>{throw new Error("Docs-only story")};Bm.parameters={docsOnly:!0};const Oa={title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},fD={};Oa.parameters=Oa.parameters||{};Oa.parameters.docs=_(v({},Oa.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:fD,mdxComponentAnnotations:Oa},e(Im,null))});var vD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Bm,default:Oa});const xD={},TD="wrapper";function Dm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(TD,_(v(v({},xD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e("h1",null,"Polaris Icons"),e("p",null,"You can use all icons from ",e("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"Shopify Polaris Icons")," Library or any SVG files."),e("p",null,e("inlineCode",{parentName:"p"},"vite-svg-loader")," & ",e("inlineCode",{parentName:"p"},"polaris-icons")," are already included in Polaris Vue package."),e("p",null,"So you don't have to install any additional packages."),e("br",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Setup:")),e("p",null,"You have to use ",e("inlineCode",{parentName:"p"},"vite-svg-loader")," in your project. See ",e("a",{parentName:"p",href:"?path=/docs/components-images-and-icons-icon"},"Icon Component")," for more details."),e("p",null,"Config in ",e("inlineCode",{parentName:"p"},"vite.config.ts")," if you are using ",e("inlineCode",{parentName:"p"},"vite")," to compile your project:"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// vite.config.js
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
`)))}Dm.isMDXComponent=!0;const $m=()=>{throw new Error("Docs-only story")};$m.parameters={docsOnly:!0};const qa={title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},SD={};qa.parameters=qa.parameters||{};qa.parameters.docs=_(v({},qa.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:SD,mdxComponentAnnotations:qa},e(Dm,null))});var CD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:$m,default:qa}),zu=Object.freeze,AD=Object.defineProperty,Fm=(t,n)=>zu(AD(t,"raw",{value:zu(n||t.slice())})),Gu,Xu;const ks=t=>({components:{AccountConnection:es,Link:wa},setup(){const n=()=>{o.value=!o.value},o=C(!1);return{args:t,connected:o,handleAccountConnect:n}},template:`<AccountConnection
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
  </AccountConnection>`}),kD={Template:ks},LD="wrapper";function Em(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(LD,_(v(v({},kD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Actions / Account connection",component:es,argTypes:{details:{description:"Content to display as title. This will override the `details` prop",table:{type:{summary:null}},control:{disable:!0}},title:{description:"Content to display as terms of service. This will override the `title` prop",table:{type:{summary:null}},control:{disable:!0}},termsOfService:{description:"Content to display as terms of service. This will override the `termOfService` prop",table:{type:{summary:null}},control:{disable:!0}},propDetails:{name:"details",description:"Content to display as additional details.",table:{category:"props",type:{summary:"string"}}},propTitle:{name:"title",description:"Content to display as title.",table:{category:"props",type:{summary:"string"}}},propTermsOfService:{name:"termsOfService",description:"Content to display as terms of service.",table:{category:"props",type:{summary:"string"}}},action:{control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Account connection"),e("p",null,"The account connection component is used so merchants can connect or disconnect their store to various accounts. For example, if merchants want to use the Facebook sales channel, they need to connect their Facebook account to their Shopify store."),e(V,{mdxType:"Canvas"},e(H,{name:"Account connection",height:"200px",parameters:{docs:{source:{code:P(Gu||(Gu=Fm([`
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
            `])))}}},mdxType:"Story"},ks.bind({}))),e(le,{story:"Account connection",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Action Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}Em.isMDXComponent=!0;const fc=ks.bind({});fc.storyName="Account connection";fc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(Xu||(Xu=Fm([`
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
            `])))}}};const Ra={title:"Components / Actions / Account connection",component:es,argTypes:{details:{description:"Content to display as title. This will override the `details` prop",table:{type:{summary:null}},control:{disable:!0}},title:{description:"Content to display as terms of service. This will override the `title` prop",table:{type:{summary:null}},control:{disable:!0}},termsOfService:{description:"Content to display as terms of service. This will override the `termOfService` prop",table:{type:{summary:null}},control:{disable:!0}},propDetails:{name:"details",description:"Content to display as additional details.",table:{category:"props",type:{summary:"string"}}},propTitle:{name:"title",description:"Content to display as title.",table:{category:"props",type:{summary:"string"}}},propTermsOfService:{name:"termsOfService",description:"Content to display as terms of service.",table:{category:"props",type:{summary:"string"}}},action:{control:{disable:!0}}},includeStories:["accountConnection"]},ND={"Account connection":"accountConnection"};Ra.parameters=Ra.parameters||{};Ra.parameters.docs=_(v({},Ra.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:ND,mdxComponentAnnotations:Ra},e(Em,null))});var wD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ks,accountConnection:fc,default:Ra}),Ku=Object.freeze,PD=Object.defineProperty,Om=(t,n)=>Ku(PD(t,"raw",{value:Ku(n||t.slice())})),Yu,Zu;const Ls=t=>({components:{ActionList:Ze},setup(){return{args:t}},template:`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>`}),io=(t,{argTypes:n})=>({components:{ActionList:Ze,Button:he,Popover:Qe,Icon:re},data(){return{active:!1,iconTickSmallMinor:Yr,iconChevronRightMinor:_r,inAPopoverItems:[{content:"Import file",onAction:this.handleImportedAction},{content:"Export file",onAction:this.handleExportedAction}],iconsOrImagesItems:[{content:"Import file",image:"https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"},{content:"Export file",icon:ji}],iconAndSuffixItems:[{active:!0,content:"Import file",icon:Ir,suffixId:"import"},{content:"Export file",icon:ji}],suffixAndPrefixItems:[{content:"Go here",prefixId:"here",suffixId:"here"},{content:"Or there",suffixId:"there"}]}},methods:{toggle(){this.active=!this.active},handleImportedAction(){alert("Imported!")},handleExportedAction(){alert("Exported!")}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center'}">
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
  </div>`});io.storyName="Items";io.parameters={docs:{source:{code:P(Yu||(Yu=Om([`
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
        `])))}}};const so=(t,{argTypes:n})=>({components:{ActionList:Ze,Button:he,Popover:Qe,Icon:re},data(){return{sections:[{title:"File options",items:[{content:"Import file",icon:Ir},{content:"Export file",icon:ji}]},{title:"Bulk actions",items:[{content:"Edit",icon:mh},{content:"Delete",icon:pu}]}],destructiveItemSections:[{title:"File options",items:[{active:!0,content:"Import file",icon:Ir},{content:"Export file",icon:ji},{destructive:!0,content:"Delete file",icon:pu}]}],helpTextSections:[{items:[{content:"Blog posts",helpText:"Manage your blog articles"},{content:"Blogs",helpText:"Manage blogs published to your Online Store"}]}]}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '120px', justifyContent: 'center'}">
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
  </div>`});so.storyName="Sections";so.parameters={docs:{source:{code:P(Zu||(Zu=Om([`
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
        `])))}}};const MD={Template:Ls,itemExamples:io,sectionExamples:so},_D="wrapper";function qm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(_D,_(v(v({},MD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Actions / Action List",component:Ze,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:"ActionListItemDescriptor[]"}}},sections:{table:{type:{summary:"ActionListSection[]"},defaultValue:{summary:null}},control:{disable:!0}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"ActionList"),e("p",null,"Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let merchants select from a list of options."),e("p",null,"For Icon usages, use the ",e("a",{parentName:"p",href:"/docs/components-images-and-icons-icon--icon"},"Icon component.")),e("br",null),e("br",null),e("h3",null,"Items"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:io,height:"250px",inline:!1,name:"_itemExamples_",mdxType:"Story"})),e("h3",null,"Sections"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:so,height:"300px",inline:!1,name:"_sectionExamples_",mdxType:"Story"})),e("h3",null,"ActionList"),e(V,{mdxType:"Canvas"},e(H,{name:"Action List",height:"40px",args:{default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}},parameters:{docs:{source:{code:P`
            <ActionList v-bind="props"></ActionList>
          `}}},mdxType:"Story"},Ls.bind({}))),e(le,{story:"Action List",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ActionListItemDescriptor type")),e("p",null,"Array of type: ",e("inlineCode",{parentName:"p"},"ActionListItemDescriptor[]")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether the action is active or not.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge?"),e("td",{parentName:"tr",align:null},'{content: string, status: "new"}'),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"ellipsis?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Add an ellipsis suffix to action content.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"helpText?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Additional hint text to display with item.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"image?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Image source.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"prefixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Prefix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"role?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Defines a role for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"suffixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Suffix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ActionListSection type")),e("p",null,"Array of type: ",e("inlineCode",{parentName:"p"},"ActionListSection[]")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Section title.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"items?"),e("td",{parentName:"tr",align:null},"ActionListItemDescriptor[]"),e("td",{parentName:"tr",align:null},"Collection of action items for the list.")))))}qm.isMDXComponent=!0;const ID=io,BD=so,Ns=Ls.bind({});Ns.storyName="Action List";Ns.args={default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}};Ns.parameters={storySource:{source:`args => ({
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
          `}}};const Va={title:"Components / Actions / Action List",component:Ze,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:"ActionListItemDescriptor[]"}}},sections:{table:{type:{summary:"ActionListSection[]"},defaultValue:{summary:null}},control:{disable:!0}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_itemExamples_","_sectionExamples_","actionList"]},DD={_itemExamples_:"_itemExamples_",_sectionExamples_:"_sectionExamples_","Action List":"actionList"};Va.parameters=Va.parameters||{};Va.parameters.docs=_(v({},Va.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:DD,mdxComponentAnnotations:Va},e(qm,null))});var $D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ls,itemExamples:io,sectionExamples:so,_itemExamples_:ID,_sectionExamples_:BD,actionList:Ns,default:Va});const FD={},ED="wrapper";function Rm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(ED,_(v(v({},FD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / App Provider",component:$o,mdxType:"Meta"}),e("h1",null,"AppProvider"),e("p",null,"App provider is a required component that enables sharing global settings throughout the hierarchy of your application."),e("br",null),e("h2",null,"Best practices"),e("p",null,"The AppProvider component is ",e("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  <div>
  </div>
</AppProvider>
</template>

<script><\/script>
`)))}Rm.isMDXComponent=!0;const Vm=()=>{throw new Error("Docs-only story")};Vm.parameters={docsOnly:!0};const Ha={title:"Components / Structure / App Provider",component:$o,includeStories:["__page"]},OD={};Ha.parameters=Ha.parameters||{};Ha.parameters.docs=_(v({},Ha.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:OD,mdxComponentAnnotations:Ha},e(Rm,null))});var qD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Vm,default:Ha});const ws=(t,{argTypes:n})=>({components:{Avatar:eo},setup(){return{args:t}},template:'<Avatar v-bind="args"/>'}),RD={Template:ws},VD="wrapper";function Hm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(VD,_(v(v({},RD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Images and Icons / Avatar",component:eo,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Avatar"),e("p",null,"Avatars are used to show a thumbnail representation of an individual or business in the interface."),e(V,{mdxType:"Canvas"},e(H,{name:"Avatar",height:"60px",parameters:{docs:{source:{code:P`
            <Avatar v-bind="props"/>
          `}}},mdxType:"Story"},ws.bind({}))),e(le,{story:"Avatar",mdxType:"ArgsTable"}))}Hm.isMDXComponent=!0;const vc=ws.bind({});vc.storyName="Avatar";vc.parameters={storySource:{source:`(args, {
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
          `}}};const Ua={title:"Components / Images and Icons / Avatar",component:eo,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["avatar"]},HD={Avatar:"avatar"};Ua.parameters=Ua.parameters||{};Ua.parameters.docs=_(v({},Ua.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:HD,mdxComponentAnnotations:Ua},e(Hm,null))});var UD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ws,avatar:vc,default:Ua});const Ps=t=>({components:{Badge:it},setup(){return{args:t}},template:'<Badge v-bind="args">Fulfilled</Badge>'}),lo=(t,{argTypes:n})=>({components:{Badge:it},template:P`<div>
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
  </div>`});lo.storyName="Variants";lo.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const jD={Template:Ps,Variants:lo},WD="wrapper";function Um(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(WD,_(v(v({},jD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Images and icons / Badge",component:it,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Badge"),e("p",null,"Badges are used to inform merchants of the status of an object or of an action that's been taken."),e(V,{mdxType:"Canvas"},e(H,{story:lo,height:"65px",name:"_Variants_",mdxType:"Story"})),e(V,{mdxType:"Canvas"},e(H,{name:"Badge",height:"30px",parameters:{docs:{source:{code:P`
          `}}},mdxType:"Story"},Ps.bind({}))),e(le,{story:"Badge",mdxType:"ArgsTable"}))}Um.isMDXComponent=!0;const zD=lo,xc=Ps.bind({});xc.storyName="Badge";xc.parameters={storySource:{source:`args => ({
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
          `}}};const ja={title:"Components / Images and icons / Badge",component:it,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Variants_","badge"]},GD={_Variants_:"_Variants_",Badge:"badge"};ja.parameters=ja.parameters||{};ja.parameters.docs=_(v({},ja.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:GD,mdxComponentAnnotations:ja},e(Um,null))});var XD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ps,Variants:lo,_Variants_:zD,badge:xc,default:ja});const Ms=t=>({components:{Banner:ns},setup(){return{args:t}},template:`<Banner
    v-bind="args"
    :action="{ content: 'Edit variant weights', url:'https://google.com' }"
    :secondaryAction="{ content: 'View all variants', url:'https://google.com' }"
    @dismiss="dismissHandler"
  >
    <p>Add weights to show accurate rates at checkout and when buying shipping labels in Shopify.</p>
  </Banner>`}),KD={Template:Ms},YD="wrapper";function jm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(YD,_(v(v({},KD),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Feedback indicators / Banner",component:ns,argTypes:{default:{table:{disable:!0}},icon:{table:{type:{summary:"IconSource"}}},status:{control:{type:"select",options:["info","success","warning","critical"]},table:{type:{summary:"success | info | warning | critical"}}},action:{table:{type:{summary:"DisableableAction & LoadableAction"}}},dismiss:{description:"Callback when banner is dismissed",control:{disable:!0},table:{type:{summary:"() => void"}}}},mdxType:"Meta"}),e("h1",null,"Banner"),e("p",null,"Informs merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way. Banners are placed at the top of the page or section they apply to, and below the page or section header."),e(V,{mdxType:"Canvas"},e(H,{name:"Banner",height:"200px",args:{status:"warning",title:"Some of your product varisants are missing weights"},parameters:{docs:{source:{code:P`<Banner
            title="Some of your product variants are missing weights"
            status="warning"
            :action="{ content: 'Edit variant weights', url:'https://google.com' }"
            :secondaryAction="{ content: 'View all variants', url:'https://google.com' }"
            @dismiss="dismissHandler"
          >
            <p>Add weights to show accurate rates at checkout and when buying shipping labels in Shopify.</p>
          </Banner>`}}},mdxType:"Story"},Ms.bind({}))),e(le,{story:"Banner",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Action Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"DisableableAction & LoadableAction")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}jm.isMDXComponent=!0;const _s=Ms.bind({});_s.storyName="Banner";_s.args={status:"warning",title:"Some of your product varisants are missing weights"};_s.parameters={storySource:{source:`args => ({
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
          </Banner>`}}};const Wa={title:"Components / Feedback indicators / Banner",component:ns,argTypes:{default:{table:{disable:!0}},icon:{table:{type:{summary:"IconSource"}}},status:{control:{type:"select",options:["info","success","warning","critical"]},table:{type:{summary:"success | info | warning | critical"}}},action:{table:{type:{summary:"DisableableAction & LoadableAction"}}},dismiss:{description:"Callback when banner is dismissed",control:{disable:!0},table:{type:{summary:"() => void"}}}},includeStories:["banner"]},ZD={Banner:"banner"};Wa.parameters=Wa.parameters||{};Wa.parameters.docs=_(v({},Wa.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:ZD,mdxComponentAnnotations:Wa},e(jm,null))});var QD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ms,banner:_s,default:Wa}),Qu=Object.freeze,JD=Object.defineProperty,Tc=(t,n)=>Qu(JD(t,"raw",{value:Qu(n||t.slice())})),Ju,ed,td;const Is=(t,{argTypes:n})=>({components:{Button:he},setup(){return{args:t}},template:'<Button v-bind="args">Add Product</Button>'}),ro=(t,{argTypes:n})=>({components:{Button:he},template:` <div style="margin: 0 auto; width: 97%">
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
  </div>`});ro.storyName="Variants";ro.parameters={docs:{source:{code:P`
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
        `}}};const co=(t,{argTypes:n})=>({components:{Button:he},data(){return{expanded:!1}},computed:{disclosure(){return this.expanded?"up":"down"},disclosureText(){return this.expanded?"Show less":"Show more"}},template:`<div>
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
  </div>`});co.storyName="Disclosure";co.parameters={docs:{source:{code:P(Ju||(Ju=Tc([`
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
        `])))}}};const uo=(t,{argTypes:n})=>({components:{Button:he},data(){return{connectedDisclosure:{accessibilityLabel:"Other save actions",actions:[{content:"Save as draft"}]}}},template:'<Button :connectedDisclosure="connectedDisclosure" :primary="true"> Save </Button>'});uo.storyName="Split Button";uo.parameters={docs:{source:{code:P(ed||(ed=Tc([`
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
        `])))}}};const po=(t,{argTypes:n})=>({components:{ButtonGroup:ot,Button:he},data(){return{isFirstButtonActive:!0}},methods:{handleFirstButtonActive(){this.isFirstButtonActive||(this.isFirstButtonActive=!0)},handleSecondButtonActive(){!this.isFirstButtonActive||(this.isFirstButtonActive=!1)}},template:`<ButtonGroup :segmented="true">
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
  </ButtonGroup>`});po.storyName="Pressed Button";po.parameters={docs:{source:{code:P(td||(td=Tc([`
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
        `])))}}};const e1={Template:Is,Variants:ro,Disclosure:co,SplitButton:uo,PressedButton:po},t1="wrapper";function Wm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(t1,_(v(v({},e1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Actions / Button",component:he,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"Button"),e("p",null,"Buttons are used primarily for actions, such as \u201CAdd\u201D, \u201CClose\u201D, \u201CCancel\u201D, or \u201CSave\u201D. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as \u201Cview shipping settings\u201D."),e("p",null,"For navigational actions that appear within or directly following a sentence, use the ",e("a",{parentName:"p",href:"/docs/components-navigation-link--link"},"link component.")),e("p",null,"For connectedDisclosure actions, use the ",e("a",{parentName:"p",href:"/docs/components-actions-actionlist--actionlist"},"ActionList component.")),e("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",e("b",null,"button")," element in html."),e("br",null),e("br",null),e("h3",null,"Button Variants"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:ro,height:"280px",name:"_Variants_",mdxType:"Story"})),e("h3",null,"Pressed Button"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:po,height:"60px",name:"_PressedButton_",mdxType:"Story"})),e("h3",null,"Disclosure Button"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:co,height:"140px",name:"_Disclosure_",mdxType:"Story"})),e("h3",null,"Split Button"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:uo,height:"120px",inline:!1,name:"_SplitButton_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},e(H,{name:"Button",height:"40px",parameters:{docs:{source:{code:P`
            <Button>Add Product</Button>
          `}}},mdxType:"Story"},Is.bind({}))),e(le,{story:"Button",mdxType:"ArgsTable"}))}Wm.isMDXComponent=!0;const a1=ro,n1=po,o1=co,i1=uo,Sc=Is.bind({});Sc.storyName="Button";Sc.parameters={storySource:{source:`(args, {
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
          `}}};const za={title:"Components / Actions / Button",component:he,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_Variants_","_PressedButton_","_Disclosure_","_SplitButton_","button"]},s1={_Variants_:"_Variants_",_PressedButton_:"_PressedButton_",_Disclosure_:"_Disclosure_",_SplitButton_:"_SplitButton_",Button:"button"};za.parameters=za.parameters||{};za.parameters.docs=_(v({},za.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:s1,mdxComponentAnnotations:za},e(Wm,null))});var l1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Is,Variants:ro,Disclosure:co,SplitButton:uo,PressedButton:po,_Variants_:a1,_PressedButton_:n1,_Disclosure_:o1,_SplitButton_:i1,button:Sc,default:za});const Bs=(t,{argTypes:n})=>({components:{ButtonGroup:ot,Button:he},setup(){return{args:t}},template:`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>`}),mo=(t,{argTypes:n})=>({components:{ButtonGroup:ot,Button:he},template:`<ButtonGroup segmented>
    <Button> Bold </Button>
    <Button> Italic </Button>
    <Button> Underline </Button>
  </ButtonGroup>`});mo.storyName="With segmented buttons";mo.parameters={docs:{source:{code:P`
        <ButtonGroup segmented>
          <Button> Bold </Button>
          <Button> Italic </Button>
          <Button> Underline </Button>
        </ButtonGroup>
      `}}};const r1={Template:Bs,SegmentedButtons:mo},c1="wrapper";function zm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(c1,_(v(v({},r1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Actions / Button Group",component:ot,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"ButtonGroup"),e("p",null,"Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing."),e("br",null),e("h3",null,"With segmented buttons"),e(V,{mdxType:"Canvas"},e(H,{story:mo,height:"65px",name:"_SegmentedButtons_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{name:"Button Group",height:"60px",parameters:{docs:{source:{code:P`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}},mdxType:"Story"},Bs.bind({}))),e(le,{story:"Button Group",mdxType:"ArgsTable"}))}zm.isMDXComponent=!0;const u1=mo,Cc=Bs.bind({});Cc.storyName="Button Group";Cc.parameters={storySource:{source:`(args, {
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
          `}}};const Ga={title:"Components / Actions / Button Group",component:ot,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SegmentedButtons_","buttonGroup"]},d1={_SegmentedButtons_:"_SegmentedButtons_","Button Group":"buttonGroup"};Ga.parameters=Ga.parameters||{};Ga.parameters.docs=_(v({},Ga.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:d1,mdxComponentAnnotations:Ga},e(zm,null))});var p1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Bs,SegmentedButtons:mo,_SegmentedButtons_:u1,buttonGroup:Cc,default:Ga});const Ds=t=>({components:{List:Pa,ListItem:Vo,Caption:sa},setup(){return{args:t}},template:`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>`}),m1={Template:Ds},y1="wrapper";function Gm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(y1,_(v(v({},m1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Titles and text  / Caption",component:sa,mdxType:"Meta"}),e("h1",null,"Caption"),e("p",null,`Caption text size is smaller than the recommended size for general reading.
On web, it should be used only in a graph or as a timestamp for a list item.
On Android and iOS, it can also be used as help text or as other kinds of secondary text for list items.`),e(V,{mdxType:"Canvas"},e(H,{name:"Caption",height:"100px",parameters:{docs:{source:{code:P`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}},mdxType:"Story"},Ds.bind({}))))}Gm.isMDXComponent=!0;const Ac=Ds.bind({});Ac.storyName="Caption";Ac.parameters={storySource:{source:`args => ({
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
          `}}};const Xa={title:"Components / Titles and text  / Caption",component:sa,includeStories:["caption"]},g1={Caption:"caption"};Xa.parameters=Xa.parameters||{};Xa.parameters.docs=_(v({},Xa.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:g1,mdxComponentAnnotations:Xa},e(Gm,null))});var h1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ds,caption:Ac,default:Xa});const $s=t=>({components:{Card:Je},setup(){return{args:t}},template:`
    <Card sectioned :actions="[{content: 'Add variant'}]">
      <template #title>Variants</template>
      <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
    </Card>
  `}),Fs=t=>({components:{Card:Je,CardSection:Aa,CardHeader:ss,CardSubsection:Dp,Icon:re,Subheading:la,Popover:Qe,Button:he,ActionList:Ze,Stack:Ve,Subheading:la,List:Pa,ListItem:Vo},setup(){const n=C(!1);return{args:t,OrdersMinor:lp,addAccountActive:n,toggleClick:()=>{console.log("clicked")},toggleAccountActive:()=>{n.value=!n.value}}},template:`
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
  `}),Es=t=>({components:{Card:Je,CardHeader:ss,Stack:Ve,ButtonGroup:ot,Button:he,CardSection:Aa,ActionList:Ze,Popover:Qe},setup(){const n=C(!1);return{args:t,addAccountActive:n}},template:`
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
  `}),b1={TemplateSimple:$s,TemplateFull:Fs,Template:Es},f1="wrapper";function Xm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(f1,_(v(v({},b1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / Card",component:Je,argTypes:{propTitle:{name:"title",description:"Title content for the card.",table:{category:"props",type:{summary:"string"}}},title:{description:"Title content for the card. This will overwrite the `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Card"),e("p",null,"Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done."),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Simple Card")),e(V,{mdxType:"Canvas"},e(H,{name:"Card - Simple",height:"150px",parameters:{docs:{source:{state:"close",code:P`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}},mdxType:"Story"},$s.bind({}))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Card with all of its elements")),e(V,{mdxType:"Canvas"},e(H,{name:"Card - Full",height:"700px",inline:!1,parameters:{docs:{source:{state:"close",code:P`
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
          `}}},mdxType:"Story"},Fs.bind({}))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Example")),e(V,{mdxType:"Canvas"},e(H,{name:"Card",height:"360px",inline:!1,parameters:{docs:{source:{state:"close",code:P`
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
            </Card>`}}},mdxType:"Story"},Es.bind({}))),e(le,{story:"Card",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"CardSection Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"The title of the section.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"subdued?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"A less prominent card.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"flush?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"fullWidth?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hideOnPrint?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Allow the card to be hidden when printing.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actions?"),e("td",{parentName:"tr",align:null},"ComplexAction[]"),e("td",{parentName:"tr",align:null})))),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Slots"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"#title"),e("td",{parentName:"tr",align:null},"The title of the section. This will overwrite the prop ",e("inlineCode",{parentName:"td"},"title")," if existed.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ComplexAction types")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"outline?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as an outlined button.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"plain?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as a plain link.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}Xm.isMDXComponent=!0;const kc=$s.bind({});kc.storyName="Card - Simple";kc.parameters={storySource:{source:`args => ({
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
            </Card>`}}};const Lc=Fs.bind({});Lc.storyName="Card - Full";Lc.parameters={storySource:{source:`args => ({
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
          `}}};const Nc=Es.bind({});Nc.storyName="Card";Nc.parameters={storySource:{source:`args => ({
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
            </Card>`}}};const Ka={title:"Components / Structure / Card",component:Je,argTypes:{propTitle:{name:"title",description:"Title content for the card.",table:{category:"props",type:{summary:"string"}}},title:{description:"Title content for the card. This will overwrite the `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["cardSimple","cardFull","card"]},v1={"Card - Simple":"cardSimple","Card - Full":"cardFull",Card:"card"};Ka.parameters=Ka.parameters||{};Ka.parameters.docs=_(v({},Ka.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:v1,mdxComponentAnnotations:Ka},e(Xm,null))});var x1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",TemplateSimple:$s,TemplateFull:Fs,Template:Es,cardSimple:kc,cardFull:Lc,card:Nc,default:Ka});const Jo=t=>({components:{Checkbox:La},setup(){return{args:t}},template:`
  <div>
    <Checkbox v-bind="args" v-model="isChecked">
      <template #label>Checkbox label</template>
      <template #help-text>Basic help text</template>
    </Checkbox>
    <p style="margin-top: 30px">Checked: {{ isChecked }} </p>
  </div>`,data(){return{isChecked:!1}}});Jo.parameters={docs:{source:{code:P`
        <div>
          <Checkbox v-model="isChecked">
            <template #label>Checkbox label</template>
            <template #help-text>Basic help text</template>
          </Checkbox>
          <p>Checked: {{ isChecked }} </p>
        </div>
      `}}};const T1={Template:Jo},S1="wrapper";function Km(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(S1,_(v(v({},T1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Checkbox",component:La,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Checkbox"),e("p",null,`Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
They may also be used as a way to have merchants indicate they agree to specific terms and services.`),e(V,{mdxType:"Canvas"},e(H,{story:Jo,name:"Checkbox",mdxType:"Story"})),e(le,{story:"Checkbox",mdxType:"ArgsTable"}))}Km.isMDXComponent=!0;const Ym=Jo;Ym.storyName="Checkbox";const Ya={title:"Components / Forms / Checkbox",component:La,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Template_"]},C1={Checkbox:"_Template_"};Ya.parameters=Ya.parameters||{};Ya.parameters.docs=_(v({},Ya.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:C1,mdxComponentAnnotations:Ya},e(Km,null))});var A1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Jo,_Template_:Ym,default:Ya});const ei=t=>({components:{ChoiceList:Et},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});ei.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const ti=t=>({components:{ChoiceList:Et},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});ti.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const ai=t=>({components:{ChoiceList:Et},template:`
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
  `,data(){return{value:["shipping"],choices:[{label:"Use the shipping address as the billing address by default",helpText:"Reduces the number of fields required to check out. The billing address can still be edited.",value:"shipping"},{label:"Require a confirmation step",helpText:"Customers must review their order details before purchasing.",value:"confirmation"}]}}});ai.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const ni=(t,{argTypes:n})=>({components:{ChoiceList:Et},template:`
  <div>
    <ChoiceList
      name="singleChild"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:"<p>This is child content of Minimum quantity option</p>"}]}}});ni.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const oi=(t,{argTypes:n})=>({components:{ChoiceList:Et},template:`
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
  `,data(){return{selected:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:""}]}},methods:{handleChange(){this.choices[2].renderChildren=this.selected==="minimum_quantity"?"<p>This is child content of Minimum quantity option</p>":""}}});oi.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const ii=t=>({components:{ChoiceList:Et},setup(){return{args:t}},template:`
  <ChoiceList
    v-bind="args"
    v-model="selected"
    :choices="options"
  >
    Example choice list
  </ChoiceList>
  `,data(){return{selected:"hidden",options:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});ii.parameters={docs:{source:{code:P`
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
      `}}};const k1={singleChoiceList:ei,errorSingleChoiceList:ti,multiChoiceList:ai,renderChildChoiceList:ni,renderChildWithConditional:oi,Example:ii},L1="wrapper";function Zm(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(L1,_(v(v({},k1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Choice List",component:Et,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Choice list"),e("p",null,`A choice list lets you create a list of grouped radio buttons or checkboxes.
Use this component if you need to group together a related list of interactive choices.`),e("br",null),e("br",null),e("h3",null,"Single choice list"),e("p",null,"Allows merchants to select one option from a list."),e("ul",null,e("li",{parentName:"ul"},"Make sure all options are an either/or choice.")),e(V,{mdxType:"Canvas"},e(H,{story:ei,name:"Single choice list",mdxType:"Story"})),e("h3",null,"Single choice list with error"),e("p",null,"Allows for accessible error handling by connecting the error message to the field with the error."),e(V,{mdxType:"Canvas"},e(H,{story:ti,name:"Single choice list with error",mdxType:"Story"})),e("h3",null,"Multi-choice list"),e("p",null,"Allows merchants to select multiple options from a list."),e("ul",null,e("li",{parentName:"ul"},"Avoid options that are an either/or choice.")),e(V,{mdxType:"Canvas"},e(H,{story:ai,name:"Multi-choice list",mdxType:"Story"})),e("h3",null,"Single-choice or multi-choice list with children content (always rendered)"),e("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content will always be rendered. Works for both single-choice and multi-choice list.`),e(V,{mdxType:"Canvas"},e(H,{story:ni,name:"Single-choice or multi-choice list with children content (always rendered)",mdxType:"Story"})),e("h3",null,"Single-choice or multi-choice list with children content (rendered only when selected)"),e("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list.`),e(V,{mdxType:"Canvas"},e(H,{story:oi,name:"Single-choice or multi-choice list with children content (rendered only when selected)",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{story:ii,name:"Example",height:"160px",mdxType:"Story"})),e(le,{story:"Example",mdxType:"ArgsTable"}))}Zm.isMDXComponent=!0;const Qm=ei;Qm.storyName="Single choice list";const Jm=ti;Jm.storyName="Single choice list with error";const ey=ai;ey.storyName="Multi-choice list";const ty=ni;ty.storyName="Single-choice or multi-choice list with children content (always rendered)";const ay=oi;ay.storyName="Single-choice or multi-choice list with children content (rendered only when selected)";const ny=ii;ny.storyName="Example";const Za={title:"Components / Forms / Choice List",component:Et,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_singleChoiceList_","_errorSingleChoiceList_","_multiChoiceList_","_renderChildChoiceList_","_renderChildWithConditional_","_Example_"]},N1={"Single choice list":"_singleChoiceList_","Single choice list with error":"_errorSingleChoiceList_","Multi-choice list":"_multiChoiceList_","Single-choice or multi-choice list with children content (always rendered)":"_renderChildChoiceList_","Single-choice or multi-choice list with children content (rendered only when selected)":"_renderChildWithConditional_",Example:"_Example_"};Za.parameters=Za.parameters||{};Za.parameters.docs=_(v({},Za.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:N1,mdxComponentAnnotations:Za},e(Zm,null))});var w1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",singleChoiceList:ei,errorSingleChoiceList:ti,multiChoiceList:ai,renderChildChoiceList:ni,renderChildWithConditional:oi,Example:ii,_singleChoiceList_:Qm,_errorSingleChoiceList_:Jm,_multiChoiceList_:ey,_renderChildChoiceList_:ty,_renderChildWithConditional_:ay,_Example_:ny,default:Za}),ad=Object.freeze,P1=Object.defineProperty,oy=(t,n)=>ad(P1(t,"raw",{value:ad(n||t.slice())})),nd,od;const Os=t=>({components:{Card:Je,Collapsible:to,Stack:Ve,Button:he,TextContainer:At,Link:wa},setup(){const n=C(!0);return{args:t,open:n,handleToggle:()=>{n.value=!n.value}}},template:`
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
  `}),M1={Template:Os},_1="wrapper";function iy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(_1,_(v(v({},M1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Behavior / Collapsible",component:to,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},mdxType:"Meta"}),e("h1",null,"Collapsible"),e("p",null,"The collapsible component is used to put long sections of information under a block that merchants can expand or collapse."),e(V,{mdxType:"Canvas"},e(H,{name:"Collapsible",height:"200px",parameters:{docs:{source:{state:"close",code:P(nd||(nd=oy([`
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
          `])))}}},mdxType:"Story"},Os.bind({}))),e(le,{story:"Collapsible",mdxType:"ArgsTable"}))}iy.isMDXComponent=!0;const wc=Os.bind({});wc.storyName="Collapsible";wc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:P(od||(od=oy([`
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
          `])))}}};const Qa={title:"Components / Behavior / Collapsible",component:to,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},includeStories:["collapsible"]},I1={Collapsible:"collapsible"};Qa.parameters=Qa.parameters||{};Qa.parameters.docs=_(v({},Qa.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:I1,mdxComponentAnnotations:Qa},e(iy,null))});var B1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Os,collapsible:wc,default:Qa});const qs=t=>({components:{ColorPicker:rs},setup(){return{color:C("#000000"),args:t}},template:P`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>`}),D1={Template:qs},$1="wrapper";function sy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e($1,_(v(v({},D1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Color Picker",component:rs,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Color picker"),e("p",null,`The color picker is used to let merchants select a color visually.
For example, merchants use the color picker to customize the accent color of the email templates for their shop.`),e(V,{mdxType:"Canvas"},e(H,{name:"Color Picker",height:"210px",parameters:{docs:{source:{code:P`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}},mdxType:"Story"},qs.bind({}))),e(le,{story:"Color Picker",mdxType:"ArgsTable"}))}sy.isMDXComponent=!0;const Pc=qs.bind({});Pc.storyName="Color Picker";Pc.parameters={storySource:{source:`args => ({
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
          `}}};const Ja={title:"Components / Forms / Color Picker",component:rs,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},includeStories:["colorPicker"]},F1={"Color Picker":"colorPicker"};Ja.parameters=Ja.parameters||{};Ja.parameters.docs=_(v({},Ja.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:F1,mdxComponentAnnotations:Ja},e(sy,null))});var E1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:qs,colorPicker:Pc,default:Ja});const si=t=>({components:{Combobox:Na,Listbox:kt,ListboxOption:It,ComboboxTextField:Oo,Icon:re,Scrollable:Ft},template:`
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
  </Combobox>`,data(){return{searchIcon:Bo,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"},{value:"polaris",label:"Polaris"},{value:"custom",label:"Custom"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(n=>n.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(n){this.searchValue=n},isOptionSelected(n,o){return this.searchValue?this.searchValue===n.value:o===0}}});si.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const li=t=>({components:{Combobox:Na,Listbox:kt,ListboxOption:It,ComboboxTextField:Oo,Icon:re,TextContainer:At,Tag:Yo,Stack:Ve},template:`
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
  `,data(){return{searchIcon:Bo,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"},{value:"polaris",label:"Polaris"},{value:"custom",label:"Custom"}],searchValue:"",selectedOptions:["rustic","antique"]}},computed:{filteredOptions(){return this.searchValue?this.options.filter(n=>n.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(n){this.selectedOptions.includes(n)?this.selectedOptions=this.selectedOptions.filter(o=>o!==n):this.selectedOptions.push(n)},handleRemoveTag(n){this.selectedOptions=this.selectedOptions.filter(o=>o!==n)}}});li.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const ri=t=>({components:{Combobox:Na,Listbox:kt,ListboxOption:It,ComboboxTextField:Oo,Icon:re,ListboxLoading:Ho},template:`
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
  `,data(){return{searchIcon:Bo,searchValue:""}}});ri.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const ci=t=>({components:{Combobox:Na,Listbox:kt,ListboxOption:It,ComboboxTextField:Oo,Icon:re},template:`
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
  </Combobox>`,data(){return{searchIcon:Bo,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"},{value:"polaris",label:"Polaris"},{value:"custom",label:"Custom"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(n=>n.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(n){this.searchValue=n},isOptionSelected(n,o){return this.searchValue?this.searchValue===n.value:o===0}}});ci.parameters={docs:{source:{code:P`
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
      `}}};const O1={BasicAutocomplete:si,MultiTagAutocomplete:li,LoadingAutoComplete:ri,ExampleAutoComplete:ci},q1="wrapper";function ly(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(q1,_(v(v({},O1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Combobox",component:Na,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"Combobox"),e("p",null,"The Combobox component implements part of the ",e("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"},"Aria 1.2 combobox"),` specs on a TextField and a popover containing a Listbox.
Like Autocomplete, Combobox allows merchants to quickly search through and select from large collections of options.`),e("br",null),e("br",null),e("h3",null,"Basic autocomplete"),e("p",null,"Use to help merchants complete text input quickly from a list of options."),e(V,{mdxType:"Canvas"},e(H,{story:si,name:"Basic Autocomplete",height:"400px",inline:!1,mdxType:"Story"})),e("h3",null,"Multiple tags autocomplete"),e("p",null,"Use to help merchants select multiple options from a list curated by the text input."),e(V,{mdxType:"Canvas"},e(H,{story:li,name:"Multiple tags autocomplete",height:"400px",inline:!1,mdxType:"Story"})),e("h3",null,"Autocomplete with loading"),e("p",null,"Use to indicate loading state to merchants while option data is processing."),e(V,{mdxType:"Canvas"},e(H,{story:ri,name:"Autocomplete with loading",height:"200px",inline:!1,mdxType:"Story"})),e("h3",null,"Example"),e("font",{color:"red"}," Can not test props on this component due to inline Story. Try it on your own project. "),e(V,{mdxType:"Canvas"},e(H,{story:ci,name:"Example",height:"400px",inline:!1,mdxType:"Story"})),e(le,{story:"Example",mdxType:"ArgsTable"}))}ly.isMDXComponent=!0;const ry=si;ry.storyName="Basic Autocomplete";const cy=li;cy.storyName="Multiple tags autocomplete";const uy=ri;uy.storyName="Autocomplete with loading";const dy=ci;dy.storyName="Example";const en={title:"Components / Forms / Combobox",component:Na,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_BasicAutocomplete_","_MultiTagAutocomplete_","_LoadingAutoComplete_","_ExampleAutoComplete_"]},R1={"Basic Autocomplete":"_BasicAutocomplete_","Multiple tags autocomplete":"_MultiTagAutocomplete_","Autocomplete with loading":"_LoadingAutoComplete_",Example:"_ExampleAutoComplete_"};en.parameters=en.parameters||{};en.parameters.docs=_(v({},en.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:R1,mdxComponentAnnotations:en},e(ly,null))});var V1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicAutocomplete:si,MultiTagAutocomplete:li,LoadingAutoComplete:ri,ExampleAutoComplete:ci,_BasicAutocomplete_:ry,_MultiTagAutocomplete_:cy,_LoadingAutoComplete_:uy,_ExampleAutoComplete_:dy,default:en});const Rs=t=>({components:{Frame:Zt,ContextualSaveBar:qo,Button:he},setup(){return{discardHandle:()=>{console.log("nothing saved")},saveForm:()=>{alert("Saved")},CancelSmallMinor:Kr}},template:`
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
  `}),H1={Template:Rs},U1="wrapper";function py(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(U1,_(v(v({},H1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Contextual save bar",component:qo,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Contextual save bar"),e("p",null,"The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work."),e(V,{mdxType:"Canvas"},e(H,{name:"Contextual save bar",inline:!1,height:"300px",parameters:{docs:{source:{code:P`
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
          `}}},mdxType:"Story"},Rs.bind({}))),e(le,{story:"Contextual save bar",mdxType:"ArgsTable"}))}py.isMDXComponent=!0;const Mc=Rs.bind({});Mc.storyName="Contextual save bar";Mc.parameters={storySource:{source:`args => ({
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
          `}}};const tn={title:"Components / Forms / Contextual save bar",component:qo,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},includeStories:["contextualSaveBar"]},j1={"Contextual save bar":"contextualSaveBar"};tn.parameters=tn.parameters||{};tn.parameters.docs=_(v({},tn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:j1,mdxComponentAnnotations:tn},e(py,null))});var W1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Rs,contextualSaveBar:Mc,default:tn});const Vs=t=>({components:{AppProvider:$o,CustomProperties:Yt,Card:Je,TextContainer:At,CardSection:Aa,List:Pa,ListItem:Vo},setup(){return{args:t}},template:P`
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
  `}),z1={Template:Vs},G1="wrapper";function my(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(G1,_(v(v({},z1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / CustomProperties",component:Yt,argTypes:{default:{table:{disable:!0}},as:{description:"Element used for the root node.",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Determines what color scheme is applied to child content.",table:{type:{summary:"light | dark"},defaultValue:{summary:"light"}},control:{type:"select",options:["light","dark"]}}},mdxType:"Meta"}),e("h1",null,"CustomProperties"),e("p",null,"Use the custom properties component to share global theme settings throughout the hierarchy of your application. Custom properties is included by default as a child of the ",e("a",{parentName:"p",href:"?path=/docs/components-structure-app-provider"},"app provider component")," but can be used independently to apply a base color scheme to its children."),e(V,{mdxType:"Canvas"},e(H,{name:"CustomProperties",height:"500px",inline:!1,parameters:{docs:{source:{code:P`
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
            `}}},mdxType:"Story"},Vs.bind({}))),e(le,{story:"CustomProperties",mdxType:"ArgsTable"}))}my.isMDXComponent=!0;const _c=Vs.bind({});_c.storyName="CustomProperties";_c.parameters={storySource:{source:`args => ({
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
            `}}};const an={title:"Components / Structure / CustomProperties",component:Yt,argTypes:{default:{table:{disable:!0}},as:{description:"Element used for the root node.",table:{type:{summary:"string"}},control:{type:"text"}},colorScheme:{description:"Determines what color scheme is applied to child content.",table:{type:{summary:"light | dark"},defaultValue:{summary:"light"}},control:{type:"select",options:["light","dark"]}}},includeStories:["customProperties"]},X1={CustomProperties:"customProperties"};an.parameters=an.parameters||{};an.parameters.docs=_(v({},an.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:X1,mdxComponentAnnotations:an},e(my,null))});var K1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vs,customProperties:_c,default:an});const Hs=t=>({components:{DatePicker:us},setup(){const n=C(t.selectedDate),o=Hi({month:t.month,year:t.year});return{args:t,selectedDate:n,pickerView:o,handleChange:r=>{console.log(r)},handleMonthChange:({month:r,year:u})=>{o.month=r,o.year=u}}},template:P`<div>
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
  </div>`}),Y1={Template:Hs},Z1="wrapper";function yy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(Z1,_(v(v({},Y1),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Date Picker",component:us,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},mdxType:"Meta"}),e("h1",null,"Date picker"),e("p",null,"Date pickers let merchants choose dates from a visual calendar that's consistently applied wherever dates need to be selected across Shopify."),e(V,{mdxType:"Canvas"},e(H,{name:"Date Picker",height:"320px",args:{selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0},parameters:{docs:{source:{code:P`
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
          `}}},mdxType:"Story"},Hs.bind({}))),e(le,{story:"Date Picker",mdxType:"ArgsTable"}))}yy.isMDXComponent=!0;const Us=Hs.bind({});Us.storyName="Date Picker";Us.args={selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0};Us.parameters={storySource:{source:`args => ({
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
          `}}};const nn={title:"Components / Forms / Date Picker",component:us,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},includeStories:["datePicker"]},Q1={"Date Picker":"datePicker"};nn.parameters=nn.parameters||{};nn.parameters.docs=_(v({},nn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:Q1,mdxComponentAnnotations:nn},e(yy,null))});var J1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Hs,datePicker:Us,default:nn});const js=t=>({components:{DescriptionList:ds,Dt:jp,Dd:Wp},setup(){return{args:t}},template:`<DescriptionList v-bind="args">
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
  </DescriptionList>`}),e0={Template:js},t0="wrapper";function gy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(t0,_(v(v({},e0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Lists and tables  / Description List",component:ds,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Description List"),e("p",null,`Description lists are a way to organize and explain related information.
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
          `}}},mdxType:"Story"},js.bind({}))),e(le,{story:"Description List",mdxType:"ArgsTable"}))}gy.isMDXComponent=!0;const Ic=js.bind({});Ic.storyName="Description List";Ic.parameters={storySource:{source:`args => ({
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
          `}}};const on={title:"Components / Lists and tables  / Description List",component:ds,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["descriptionList"]},a0={"Description List":"descriptionList"};on.parameters=on.parameters||{};on.parameters.docs=_(v({},on.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:a0,mdxComponentAnnotations:on},e(gy,null))});var n0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:js,descriptionList:Ic,default:on});const Ws=t=>({components:{DisplayText:Ro},setup(){return{args:t}},template:'<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>'}),o0={Template:Ws},i0="wrapper";function hy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(i0,_(v(v({},o0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Titles and text  / Display text",component:Ro,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},mdxType:"Meta"}),e("h1",null,"Display Text"),e("p",null,`Display styles make a bold visual statement.
Use them to create impact when the main goal is visual storytelling.
For example, use display text to convince or reassure merchants such as in marketing content or to capture attention during onboarding.`),e(V,{mdxType:"Canvas"},e(H,{name:"Display text",height:"60px",args:{element:"p"},parameters:{docs:{source:{code:P`<DisplayText>Good evening, Dominic.</DisplayText>`}}},mdxType:"Story"},Ws.bind({}))),e(le,{story:"Display text",mdxType:"ArgsTable"}))}hy.isMDXComponent=!0;const zs=Ws.bind({});zs.storyName="Display text";zs.args={element:"p"};zs.parameters={storySource:{source:`args => ({
  components: {
    DisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>\`
})`},docs:{source:{code:P`<DisplayText>Good evening, Dominic.</DisplayText>`}}};const sn={title:"Components / Titles and text  / Display text",component:Ro,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},includeStories:["displayText"]},s0={"Display text":"displayText"};sn.parameters=sn.parameters||{};sn.parameters.docs=_(v({},sn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:s0,mdxComponentAnnotations:sn},e(hy,null))});var l0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ws,displayText:zs,default:sn}),id=Object.freeze,r0=Object.defineProperty,by=(t,n)=>id(r0(t,"raw",{value:id(n||t.slice())})),sd,ld;const Gs=t=>({components:{DropZone:ps,DropZoneFileUpload:Kp,Stack:Ve,Thumbnail:Zo,Caption:sa},setup(){const n=C([]),o=(r,u,m)=>{n.value=[...n.value,...u]},i=["image/gif","image/jpeg","image/png"];return{files:n,handleDrop:o,validImageTypes:i,thumbnailSource:r=>i.includes(r.type)?window.URL.createObjectURL(r):Br}},template:`
    <DropZone @drop="handleDrop">
      <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
      <Stack v-else>
        <Stack v-for="file, index in files" :key="index">
          <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
          <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
        </Stack>
      </Stack>
    </DropZone>
  `}),c0={Template:Gs},u0="wrapper";function fy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(u0,_(v(v({},c0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Actions / Drop zone",component:ps,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Drop Zone"),e("br",null),e("p",null,"The drop zone component lets users upload files by dragging and dropping the files into an area on a page, or activating a button."),e(V,{mdxType:"Canvas"},e(H,{name:"Drop zone",height:"160px",parameters:{docs:{source:{code:P(sd||(sd=by([`
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
          `])))}}},mdxType:"Story"},Gs.bind({}))),e(le,{story:"Drop zone",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"File Upload component")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actionTitle"),e("td",{parentName:"tr",align:null},"String")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actionHint"),e("td",{parentName:"tr",align:null},"String")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Action Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}fy.isMDXComponent=!0;const Bc=Gs.bind({});Bc.storyName="Drop zone";Bc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(ld||(ld=by([`
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
          `])))}}};const ln={title:"Components / Actions / Drop zone",component:ps,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},includeStories:["dropZone"]},d0={"Drop zone":"dropZone"};ln.parameters=ln.parameters||{};ln.parameters.docs=_(v({},ln.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:d0,mdxComponentAnnotations:ln},e(fy,null))});var p0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Gs,dropZone:Bc,default:ln}),rd=Object.freeze,m0=Object.defineProperty,vy=(t,n)=>rd(m0(t,"raw",{value:rd(n||t.slice())})),cd,ud;const Xs=t=>({components:{NoteMinor:Br,ExceptionList:Yp,ExceptionListItem:ms},setup(){return{args:t,NoteMinor:Br,DiscountsMajor:yh}},template:`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>`}),y0={Template:Xs},g0="wrapper";function xy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(g0,_(v(v({},y0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Lists and tables / Exception List",component:ms,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Exception List"),e("p",null,"Use exception lists to help merchants notice important, standout information that adds extra context to a task. Exception lists often consist of a title and description. Each item in the list either has a bullet or icon at the front."),e(V,{mdxType:"Canvas"},e(H,{name:"Exception List",height:"120px",parameters:{docs:{source:{code:P(cd||(cd=vy([`
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
          `])))}}},mdxType:"Story"},Xs.bind({}))),e(le,{story:"Exception List",mdxType:"ArgsTable"}))}xy.isMDXComponent=!0;const Dc=Xs.bind({});Dc.storyName="Exception List";Dc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(ud||(ud=vy([`
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
          `])))}}};const rn={title:"Components / Lists and tables / Exception List",component:ms,argTypes:{default:{table:{disable:!0}}},includeStories:["exceptionList"]},h0={"Exception List":"exceptionList"};rn.parameters=rn.parameters||{};rn.parameters.docs=_(v({},rn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:h0,mdxComponentAnnotations:rn},e(xy,null))});var b0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Xs,exceptionList:Dc,default:rn});const Ks=(t,{argTypes:n})=>({props:Object.keys(n),components:{FooterHelp:ys},template:`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>`}),f0={Template:Ks},v0="wrapper";function Ty(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(v0,_(v(v({},f0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Navigation / Footer help",component:ys,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),e("h1",null,"Footer help"),e("p",null,"Footer help is used to refer merchants to more information related to the product or feature they're using."),e(V,{mdxType:"Canvas"},e(H,{name:"Footer help",parameters:{docs:{source:{code:P`
            <FooterHelp>Footer help content</FooterHelp>
          `}}},mdxType:"Story"},Ks.bind({}))),e(le,{story:"Footer help",mdxType:"ArgsTable"}))}Ty.isMDXComponent=!0;const $c=Ks.bind({});$c.storyName="Footer help";$c.parameters={storySource:{source:`(args, {
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
          `}}};const cn={title:"Components / Navigation / Footer help",component:ys,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},includeStories:["footerHelp"]},x0={"Footer help":"footerHelp"};cn.parameters=cn.parameters||{};cn.parameters.docs=_(v({},cn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:x0,mdxComponentAnnotations:cn},e(Ty,null))});var T0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ks,footerHelp:$c,default:cn}),dd=Object.freeze,S0=Object.defineProperty,Sy=(t,n)=>dd(S0(t,"raw",{value:dd(n||t.slice())})),pd,md;const Ys=t=>({components:{Form:gs,FormLayout:Ot,Checkbox:La,Button:he,TextField:Pe},data(){return{checkbox:!1,textField:""}},setup(){return{args:t}},methods:{handleSubmit(n){n.preventDefault(),alert(`Form submitted - Checkbox: ${this.checkbox} - email: ${this.textField}`),this.checkbox=!1,this.textField=""}},template:`<Form @submit="handleSubmit">
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
  </Form>`}),C0={Template:Ys},A0="wrapper";function Cy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(A0,_(v(v({},C0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Form",component:gs,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Form"),e("p",null,"A wrapper component that handles the submission of forms."),e(V,{mdxType:"Canvas"},e(H,{name:"Form",height:"200px",parameters:{docs:{source:{code:P(pd||(pd=Sy([`
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
          `])))}}},mdxType:"Story"},Ys.bind({}))),e(le,{story:"Form",mdxType:"ArgsTable"}))}Cy.isMDXComponent=!0;const Fc=Ys.bind({});Fc.storyName="Form";Fc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(md||(md=Sy([`
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
          `])))}}};const un={title:"Components / Forms / Form",component:gs,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},includeStories:["form"]},k0={Form:"form"};un.parameters=un.parameters||{};un.parameters.docs=_(v({},un.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:k0,mdxComponentAnnotations:un},e(Cy,null))});var L0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ys,form:Fc,default:un});const Zs=t=>({components:{FormLayout:Ot,TextField:Pe},data(){return{textField:"",emailField:""}},template:`
  <FormLayout>
    <TextField v-model="textField" autoComplete="off">
      <template #label>Store name</template>
    </TextField>
    <TextField v-model="emailField" type="email" autoComplete="email">
      <template #label>Account email</template>
    </TextField>
  </FormLayout>`}),Qs=(t,{argTypes:n})=>({components:{FormLayout:Ot,FormGroup:lc,TextField:Pe},data(){return{min:"",max:""}},template:`<FormLayout>
    <FormGroup>
      <TextField v-model="min" type="number">
        <template #label>Minimum order</template>
      </TextField>
      <TextField v-model="max" type="number">
        <template #label>Maximum order</template>
      </TextField>
    </FormGroup>
  </FormLayout>`}),Js=t=>({components:{FormLayout:Ot,FormGroup:lc,TextField:Pe},data(){return{textField:"",emailField:""}},template:`<FormLayout>
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
  </FormLayout>`}),N0={Template:Zs,FormLayoutGroup:Qs,FormGroupCondensed:Js},w0="wrapper";function Ay(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(w0,_(v(v({},N0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Form Layout",component:Ot,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Form Layout"),e("p",null,`Use form layout to arrange fields within a form using standard spacing.
By default it stacks fields vertically but also supports horizontal groups of fields.`),e(V,{mdxType:"Canvas"},e(H,{name:"Default Form Layout",height:"160px",parameters:{docs:{source:{state:"close",code:P`
            <FormLayout>
              <TextField v-model="textField" autoComplete="off">
                <template #label>Store name</template>
              </TextField>
              <TextField v-model="emailField" type="email" autoComplete="email">
                <template #label>Account email</template>
              </TextField>
            </FormLayout>
          `}}},mdxType:"Story"},Zs.bind({}))),e("h3",null,"Field group"),e(V,{mdxType:"Canvas"},e(H,{name:"Field Group",height:"80px",parameters:{docs:{source:{state:"close",code:P`
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
          `}}},mdxType:"Story"},Qs.bind({}))),e("h3",null,"Condensed field group"),e(V,{mdxType:"Canvas"},e(H,{name:"Condensed field group",height:"80px",parameters:{docs:{source:{code:P`
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
          `}}},mdxType:"Story"},Js.bind({}))))}Ay.isMDXComponent=!0;const Ec=Zs.bind({});Ec.storyName="Default Form Layout";Ec.parameters={storySource:{source:`args => ({
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
          `}}};const Oc=Qs.bind({});Oc.storyName="Field Group";Oc.parameters={storySource:{source:`(args, {
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
          `}}};const qc=Js.bind({});qc.storyName="Condensed field group";qc.parameters={storySource:{source:`args => ({
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
          `}}};const dn={title:"Components / Forms / Form Layout",component:Ot,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},includeStories:["defaultFormLayout","fieldGroup","condensedFieldGroup"]},P0={"Default Form Layout":"defaultFormLayout","Field Group":"fieldGroup","Condensed field group":"condensedFieldGroup"};dn.parameters=dn.parameters||{};dn.parameters.docs=_(v({},dn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:P0,mdxComponentAnnotations:dn},e(Ay,null))});var M0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zs,FormLayoutGroup:Qs,FormGroupCondensed:Js,defaultFormLayout:Ec,fieldGroup:Oc,condensedFieldGroup:qc,default:dn}),yd=Object.freeze,_0=Object.defineProperty,ky=(t,n)=>yd(_0(t,"raw",{value:yd(n||t.slice())})),gd,hd;const el=t=>({components:{Frame:Zt,TopBar:Qo,TopBarUserMenu:bc,TopBarMenu:As,Icon:re,TopBarSearchField:hc,VisuallyHidden:lt,ActionList:Ze,NavigationSection:uc,Navigation:jo,Loading:Uo,ContextualSaveBar:qo,Button:he,Toast:Ko},data(){return{isUserMenuOpen:!1,isSecondaryMenuOpen:!1,isSearchActive:!1,searchValue:"",isCollapsed:!1,isLoading:!1,isDirty:!1,toastActive:!1,userMenuAction:[{items:[{content:"Back to Shopify",icon:Zn}]},{items:[{content:"Community forums"}]}],userMenuMessage:{title:"Another Message",description:"This is a description of message",action:{onClick:this.clickHandle,content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}},navItems2:[{label:"Dashboard",icon:mu(hh),onClick:this.toggleIsLoading},{label:"Qikify Orders",icon:mu(gh),onClick:this.toggleIsLoading}]}},methods:{handleSearchChange(n){this.isSearchActive=n.length>0},handleSearchResultsDismiss(){this.searchValue="",this.isSearchActive=!1},toggleUserMenu(){this.isUserMenuOpen=!this.isUserMenuOpen},toggleIsSecondaryMenuOpen(){this.isSecondaryMenuOpen=!this.isSecondaryMenuOpen},clickHandle(){alert("clicked")},toggleCollapsed(){this.isCollapsed=!this.isCollapsed},toggleToastActive(){this.toastActive=!this.toastActive},toggleIsLoading(){this.isLoading=!this.isLoading},toggleIsDirty(){this.isDirty=!this.isDirty}},setup(){return{logo:{width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},navItems:[{label:"Back to Shopify",icon:Zn}],QuestionMarkMajor:rp,CirclePlusOutlineMinor:cp}},template:`
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
  `}),I0={Template:el},B0="wrapper";function Ly(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(B0,_(v(v({},I0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / Frame",component:Zt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Frame"),e("p",null,"The frame component, while not visible in the user interface itself, provides the structure for an application. It wraps the main elements and houses the primary ",e("a",{parentName:"p",href:"?path=/docs/components-navigation-navigation--navigation"},"navigation"),", ",e("a",{parentName:"p",href:"?path=/docs/components-navigation-top-bar--top-bar"},"top bar"),", ",e("a",{parentName:"p",href:"?path=/docs/components-feedback-indicators-toast--toast"},"toast"),", and ",e("a",{parentName:"p",href:"?path=/docs/components-forms-contextual-save-bar--contextual-save-bar"},"contextual save bar")," components."),e(V,{mdxType:"Canvas"},e(H,{name:"Frame",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:P(gd||(gd=ky([`
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
          `])))}}},mdxType:"Story"},el.bind({}))),e(le,{story:"Frame",mdxType:"ArgsTable"}))}Ly.isMDXComponent=!0;const Rc=el.bind({});Rc.storyName="Frame";Rc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:P(hd||(hd=ky([`
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
          `])))}}};const pn={title:"Components / Structure / Frame",component:Zt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["frame"]},D0={Frame:"frame"};pn.parameters=pn.parameters||{};pn.parameters.docs=_(v({},pn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:D0,mdxComponentAnnotations:pn},e(Ly,null))});var $0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:el,frame:Rc,default:pn});const tl=t=>({components:{Heading:$t},setup(){return{args:t}},template:`
    <Heading v-bind="args">
      Online store dashboard
    </Heading>
  `}),F0={Template:tl},E0="wrapper";function Ny(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(E0,_(v(v({},F0),n),{components:t,mdxType:"MDXLayout"}),e("h1",null,"Heading"),e("p",null,`Headings are used as the titles of each major section of a page in the interface.
For example, card components generally use headings as their title.`),e(ne,{title:"Components / Titles and text / Heading",component:$t,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e(V,{mdxType:"Canvas"},e(H,{name:"Heading",height:"50px",parameters:{docs:{source:{code:P`
            <Heading>Online store dashboard</Heading>
          `}}},mdxType:"Story"},tl.bind({}))),e(le,{story:"Heading",mdxType:"ArgsTable"}))}Ny.isMDXComponent=!0;const Vc=tl.bind({});Vc.storyName="Heading";Vc.parameters={storySource:{source:`args => ({
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
          `}}};const mn={title:"Components / Titles and text / Heading",component:$t,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},includeStories:["heading"]},O0={Heading:"heading"};mn.parameters=mn.parameters||{};mn.parameters.docs=_(v({},mn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:O0,mdxComponentAnnotations:mn},e(Ny,null))});var q0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:tl,heading:Vc,default:mn}),bd=Object.freeze,R0=Object.defineProperty,wy=(t,n)=>bd(R0(t,"raw",{value:bd(n||t.slice())})),fd,vd;const al=t=>({components:{Icon:re},setup(){if(t.source==="CirclePlusMinor")return{args:t,source:up};if(t.source==="BehaviorMajor")return{args:t,source:bh};if(t.source==="placeholder")return{args:t,source:"placeholder"}},template:'<Icon :source="source" :color="args.color" :backdrop="args.backdrop" :accessibility-label="args.accessibilityLabel" />'}),V0={Template:al},H0="wrapper";function Py(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(H0,_(v(v({},V0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Images and icons / Icon",component:re,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Icon"),e("p",null,`Icons are used to visually communicate core parts of the product and available actions.
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
`)),e("h3",null,e("strong",{parentName:"h3"},"Demo & Properties")),e(V,{mdxType:"Canvas"},e(H,{name:"Icon",height:"30px",args:{source:"CirclePlusMinor"},parameters:{docs:{source:{code:P(fd||(fd=wy([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}},mdxType:"Story"},al.bind({}))),e(le,{story:"Icon",mdxType:"ArgsTable"}))}Py.isMDXComponent=!0;const nl=al.bind({});nl.storyName="Icon";nl.args={source:"CirclePlusMinor"};nl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(vd||(vd=wy([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}};const yn={title:"Components / Images and icons / Icon",component:re,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["icon"]},U0={Icon:"icon"};yn.parameters=yn.parameters||{};yn.parameters.docs=_(v({},yn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:U0,mdxComponentAnnotations:yn},e(Py,null))});var j0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:al,icon:nl,default:yn});const ol=t=>({components:{InlineError:ka},setup(){return{args:t}},template:'<InlineError v-bind="args"/>'}),W0={Template:ol},z0="wrapper";function My(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(z0,_(v(v({},W0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / InlineError",component:ka,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Inline error"),e("p",null,`Inline errors are brief, in-context messages that tell merchants something went wrong with a single or group of inputs in a form
Use inline errors to help merchants understand why a form input may not be valid and how to fix it.`),e(V,{mdxType:"Canvas"},e(H,{name:"InlineError",args:{message:"Store name is required",fieldID:"myFieldID"},parameters:{docs:{source:{code:P`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}},mdxType:"Story"},ol.bind({}))),e(le,{story:"InlineError",mdxType:"ArgsTable"}))}My.isMDXComponent=!0;const il=ol.bind({});il.storyName="InlineError";il.args={message:"Store name is required",fieldID:"myFieldID"};il.parameters={storySource:{source:`args => ({
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
          `}}};const gn={title:"Components / Forms / InlineError",component:ka,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},includeStories:["inlineError"]},G0={InlineError:"inlineError"};gn.parameters=gn.parameters||{};gn.parameters.docs=_(v({},gn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:G0,mdxComponentAnnotations:gn},e(My,null))});var X0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ol,inlineError:il,default:gn});const sl=t=>({components:{KeyboardKey:hs},setup(){return{args:t}},template:"<KeyboardKey>{{ args.default }}</KeyboardKey>"}),K0={Template:sl},Y0="wrapper";function _y(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(Y0,_(v(v({},K0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Images and icons / Keyboard Key",component:hs,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Keyboard Key"),e("p",null,"Keyboard key is used to educate merchants about keyboard shortcuts."),e(V,{mdxType:"Canvas"},e(H,{name:"Keyboard Key",height:"50px",args:{default:"Ctrl"},parameters:{docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}},mdxType:"Story"},sl.bind({}))),e(le,{story:"Keyboard Key",mdxType:"ArgsTable"}))}_y.isMDXComponent=!0;const ll=sl.bind({});ll.storyName="Keyboard Key";ll.args={default:"Ctrl"};ll.parameters={storySource:{source:`args => ({
  components: {
    KeyboardKey
  },

  setup() {
    return {
      args
    };
  },

  template: '<KeyboardKey>{{ args.default }}</KeyboardKey>'
})`},docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}};const hn={title:"Components / Images and icons / Keyboard Key",component:hs,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},includeStories:["keyboardKey"]},Z0={"Keyboard Key":"keyboardKey"};hn.parameters=hn.parameters||{};hn.parameters.docs=_(v({},hn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:Z0,mdxComponentAnnotations:hn},e(_y,null))});var Q0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:sl,keyboardKey:ll,default:hn});const rl=t=>({components:{Layout:qt,LayoutSection:Qt,AnnotatedSection:ca,TextField:Pe},template:`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),cl=t=>({components:{Layout:qt,LayoutSection:Qt,AnnotatedSection:ca,TextField:Pe},template:`
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
  </Layout>`}),ul=t=>({components:{Layout:qt,LayoutSection:Qt,AnnotatedSection:ca,TextField:Pe},template:`
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
  </Layout>`}),dl=t=>({components:{Layout:qt,LayoutSection:Qt,AnnotatedSection:ca,TextField:Pe},template:`
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
  </Layout>`}),ui=t=>({components:{Layout:qt,LayoutSection:Qt,AnnotatedSection:ca,TextField:Pe,FormLayout:Ot},template:`
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
  </Layout>`});ui.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const di=t=>({components:{Layout:qt,LayoutSection:Qt,AnnotatedSection:ca,TextField:Pe,FormLayout:Ot},template:`
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
  </Layout>`});di.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const pl=t=>({components:{Layout:qt,LayoutSection:Qt,AnnotatedSection:ca,TextField:Pe},setup(){return{args:t}},template:`
  <Layout v-bind="args">
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),J0={OneColLayout:rl,TwoColLayoutDW:cl,TwoColLayoutSW:ul,ThreeColLayoutSW:dl,AnnotatedLayout:ui,AnnotatedBannerLayout:di,Example:pl},e$="wrapper";function Iy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(e$,_(v(v({},J0),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / Layout",component:qt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},mdxType:"Meta"}),e("h1",null,"Layout"),e("p",null,`The layout component is used to create the main layout on a page.
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
          `}}},mdxType:"Story"},rl.bind({}))),e("h3",null,"Two columns with primary and secondary widths"),e("p",null,`Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual product or order pages).
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
          `}}},mdxType:"Story"},cl.bind({}))),e("h3",null,"Two columns with equal width"),e("p",null,`Use to create a \xBD + \xBD layout. Can be used to display content of equal importance.
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
          `}}},mdxType:"Story"},ul.bind({}))),e("h3",null,"Three columns with equal width"),e("p",null,`Use to create a \u2153 + \u2153 + \u2153 layout. Can be used to display content of equal importance.
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
          `}}},mdxType:"Story"},dl.bind({}))),e("h3",null,"Annotated layout"),e("p",null,`Use for settings pages. When settings are grouped thematically in annotated sections,
the title and description on each section helps merchants quickly find the setting they're looking for.`),e(V,{mdxType:"Canvas"},e(H,{story:ui,name:"Annotated layout",mdxType:"Story"})),e("h3",null,"Annotated layout with Banner at the top"),e("p",null,"Use for settings pages that need a banner or other content at the top."),e(V,{mdxType:"Canvas"},e(H,{story:di,name:"Annotated layout (with Banner)",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{name:"Example",height:"100px",parameters:{docs:{source:{code:P`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},pl.bind({}))),e(le,{story:"Example",mdxType:"ArgsTable"}))}Iy.isMDXComponent=!0;const Hc=rl.bind({});Hc.storyName="One column layout";Hc.parameters={storySource:{source:`args => ({
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
          `}}};const Uc=cl.bind({});Uc.storyName="Two columns (different width)";Uc.parameters={storySource:{source:`args => ({
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
          `}}};const jc=ul.bind({});jc.storyName="Two columns (same width)";jc.parameters={storySource:{source:`args => ({
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
          `}}};const Wc=dl.bind({});Wc.storyName="Three columns (same width)";Wc.parameters={storySource:{source:`args => ({
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
          `}}};const By=ui;By.storyName="Annotated layout";const Dy=di;Dy.storyName="Annotated layout (with Banner)";const zc=pl.bind({});zc.storyName="Example";zc.parameters={storySource:{source:`args => ({
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
          `}}};const bn={title:"Components / Structure / Layout",component:qt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},includeStories:["oneColumnLayout","twoColumnsDifferentWidth","twoColumnsSameWidth","threeColumnsSameWidth","_AnnotatedLayout_","_AnnotatedBannerLayout_","example"]},t$={"One column layout":"oneColumnLayout","Two columns (different width)":"twoColumnsDifferentWidth","Two columns (same width)":"twoColumnsSameWidth","Three columns (same width)":"threeColumnsSameWidth","Annotated layout":"_AnnotatedLayout_","Annotated layout (with Banner)":"_AnnotatedBannerLayout_",Example:"example"};bn.parameters=bn.parameters||{};bn.parameters.docs=_(v({},bn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:t$,mdxComponentAnnotations:bn},e(Iy,null))});var a$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",OneColLayout:rl,TwoColLayoutDW:cl,TwoColLayoutSW:ul,ThreeColLayoutSW:dl,AnnotatedLayout:ui,AnnotatedBannerLayout:di,Example:pl,oneColumnLayout:Hc,twoColumnsDifferentWidth:Uc,twoColumnsSameWidth:jc,threeColumnsSameWidth:Wc,_AnnotatedLayout_:By,_AnnotatedBannerLayout_:Dy,example:zc,default:bn});const ml=t=>({components:{Link:wa},setup(){return{args:t}},template:'<Link v-bind="args">Fulfilling orders</Link>'}),n$={Template:ml},o$="wrapper";function $y(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(o$,_(v(v({},n$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Navigation / Link",component:wa,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Link"),e("p",null,"Links take users to another place, and usually appear within or directly following a sentence."),e("p",null,"For actions that aren't related to navigation, use the ",e("a",{parentName:"p",href:"/docs/components-actions-button--button"},"button component.")),e(V,{mdxType:"Canvas"},e(H,{name:"Link",parameters:{docs:{source:{code:P`
            <Link>Fulfilling orders</Link>
          `}}},mdxType:"Story"},ml.bind({}))),e(le,{story:"Link",mdxType:"ArgsTable"}))}$y.isMDXComponent=!0;const Gc=ml.bind({});Gc.storyName="Link";Gc.parameters={storySource:{source:`args => ({
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
          `}}};const fn={title:"Components / Navigation / Link",component:wa,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},includeStories:["link"]},i$={Link:"link"};fn.parameters=fn.parameters||{};fn.parameters.docs=_(v({},fn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:i$,mdxComponentAnnotations:fn},e($y,null))});var s$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ml,link:Gc,default:fn});const yl=t=>({components:{List:Pa,ListItem:Vo},setup(){return{args:t}},template:`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>`}),l$={Template:yl},r$="wrapper";function Fy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(r$,_(v(v({},l$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Lists and tables / List",component:Pa,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"List"),e("p",null,"Lists display a set of related text-only content. Each list item begins with a bullet or a number."),e(V,{mdxType:"Canvas"},e(H,{name:"List",height:"80px",parameters:{docs:{source:{code:P`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}},mdxType:"Story"},yl.bind({}))),e(le,{story:"List",mdxType:"ArgsTable"}))}Fy.isMDXComponent=!0;const Xc=yl.bind({});Xc.storyName="List";Xc.parameters={storySource:{source:`args => ({
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
          `}}};const vn={title:"Components / Lists and tables / List",component:Pa,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},includeStories:["list"]},c$={List:"list"};vn.parameters=vn.parameters||{};vn.parameters.docs=_(v({},vn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:c$,mdxComponentAnnotations:vn},e(Fy,null))});var u$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:yl,list:Xc,default:vn});const pi=t=>({components:{Listbox:kt,ListboxOption:It},template:`
  <Listbox accessibilityLabel="Basic Listbox example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});pi.parameters={docs:{source:{state:"close",code:P`
      <Listbox accessibilityLabel="Basic Listbox example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const mi=t=>({components:{Listbox:kt,ListboxOption:It,ListboxLoading:Ho},template:`
  <Listbox accessibilityLabel="Listbox with loading example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});mi.parameters={docs:{source:{state:"close",code:P`
      <Listbox accessibilityLabel="Listbox with loading example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const yi=t=>({components:{Listbox:kt,ListboxOption:It,ListboxAction:bs},template:`
  <Listbox accessibilityLabel="Listbox with Action example">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});yi.parameters={docs:{source:{state:"close",code:P`
      <Listbox accessibilityLabel="Listbox with Action example">
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const gi=t=>({components:{Listbox:kt,ListboxOption:It,ListboxLoading:Ho,ListboxAction:bs},template:`
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
  </Listbox>`});gi.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const hi=t=>({components:{Listbox:kt,ListboxOption:It,ListboxLoading:Ho,ListboxAction:bs},setup(){return{args:t}},template:`
  <Listbox v-bind="args">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});hi.parameters={docs:{source:{code:P`
      <Listbox>
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const d$={BasicListbox:pi,LoadingListbox:mi,ActionListbox:yi,CustomListbox:gi,ExampleListbox:hi},p$="wrapper";function Ey(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(p$,_(v(v({},d$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Lists and tables / Listbox",component:kt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},mdxType:"Meta"}),e("h1",null,"Listbox"),e("p",null,"The Listbox component is a list component that implements part of ",e("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"},"the Aria 1.2 Listbox specs."),`
It presents a list of options and allows users to select one or more of them.
If you need more structure than the standard component offers, use composition to customize the presentation of these lists by using headers or custom elements.`),e("br",null),e("br",null),e("h3",null,"Basic Listbox"),e("p",null,"Basic implementation of a control element used to let merchants select options"),e(V,{mdxType:"Canvas"},e(H,{story:pi,name:"Basic Listbox",mdxType:"Story"})),e("h3",null,"Listbox with Loading"),e("p",null,"Implementation of a control element showing a loading indicator to let merchants know more options are being loaded"),e(V,{mdxType:"Canvas"},e(H,{story:mi,name:"Listbox with Loading",mdxType:"Story"})),e("h3",null,"Listbox with Action"),e("p",null,"Implementation of a control element used to let merchants take an action"),e(V,{mdxType:"Canvas"},e(H,{story:yi,name:"Listbox with Action",mdxType:"Story"})),e("h3",null,"Listbox with custom element"),e("p",null,"Implementation of a control with custom rendering of options"),e(V,{mdxType:"Canvas"},e(H,{story:gi,name:"Listbox with custom element",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{story:hi,name:"Example",height:"180px",mdxType:"Story"})),e(le,{story:"Example",mdxType:"ArgsTable"}))}Ey.isMDXComponent=!0;const Oy=pi;Oy.storyName="Basic Listbox";const qy=mi;qy.storyName="Listbox with Loading";const Ry=yi;Ry.storyName="Listbox with Action";const Vy=gi;Vy.storyName="Listbox with custom element";const Hy=hi;Hy.storyName="Example";const xn={title:"Components / Lists and tables / Listbox",component:kt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},includeStories:["_BasicListbox_","_LoadingListbox_","_ActionListbox_","_CustomListbox_","_ExampleListbox_"]},m$={"Basic Listbox":"_BasicListbox_","Listbox with Loading":"_LoadingListbox_","Listbox with Action":"_ActionListbox_","Listbox with custom element":"_CustomListbox_",Example:"_ExampleListbox_"};xn.parameters=xn.parameters||{};xn.parameters.docs=_(v({},xn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:m$,mdxComponentAnnotations:xn},e(Ey,null))});var y$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicListbox:pi,LoadingListbox:mi,ActionListbox:yi,CustomListbox:gi,ExampleListbox:hi,_BasicListbox_:Oy,_LoadingListbox_:qy,_ActionListbox_:Ry,_CustomListbox_:Vy,_ExampleListbox_:Hy,default:xn});const gl=t=>({components:{Loading:Uo,Frame:Zt,Button:he},data(){return{isActive:!1}},setup(){return{args:t}},template:`<Frame>
    <Loading v-if="isActive" />
    <br/>
    <Button @click="isActive = !isActive">Toggle loading</Button>
  </Frame>`}),g$={Template:gl},h$="wrapper";function Uy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(h$,_(v(v({},g$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Feedback indicators / Loading",component:Uo,argTypes:{disabled:{table:{type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Loading"),e("p",null,"The loading component is used to indicate to merchants that a page is loading or an upload is processing."),e(V,{mdxType:"Canvas"},e(H,{name:"Loading",inline:!1,height:"100px",parameters:{docs:{source:{code:P`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}},mdxType:"Story"},gl.bind({}))),e(le,{story:"Loading",mdxType:"ArgsTable"}))}Uy.isMDXComponent=!0;const Kc=gl.bind({});Kc.storyName="Loading";Kc.parameters={storySource:{source:`args => ({
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
          `}}};const Tn={title:"Components / Feedback indicators / Loading",component:Uo,argTypes:{disabled:{table:{type:{summary:null}}}},includeStories:["loading"]},b$={Loading:"loading"};Tn.parameters=Tn.parameters||{};Tn.parameters.docs=_(v({},Tn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:b$,mdxComponentAnnotations:Tn},e(Uy,null))});var f$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:gl,loading:Kc,default:Tn});const hl=t=>({components:{MediaCard:fs},setup(){return{args:t}},template:`
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
  `}),v$={Template:hl},x$="wrapper";function jy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(x$,_(v(v({},v$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / Media card",component:fs,argTypes:{title:{description:"Heading content. This slot will override `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},propTitle:{name:"title",description:"Heading content.",table:{category:"props",type:{summary:"string"}}},description:{table:{type:{summary:"string"}}},popoverActions:{control:{disable:!0},table:{defaultValue:{summary:null},type:{summary:"ActionListItemDescriptor[]"}}},primaryAction:{control:{disable:!0}},secondaryAction:{control:{disable:!0}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:"small | medium"}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Media card"),e("p",null,"Media cards provide a consistent layout to present visual information to merchants. Visual media is used to provide additional context to the written information it's paired with."),e(V,{mdxType:"Canvas"},e(H,{name:"Media card",height:"300px",inline:!1,args:{size:"medium",portrait:!1,propTitle:"Get closer to launching your store",description:"Start your business with eye-catching inventory."},parameters:{docs:{source:{code:P`
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
          `}}},mdxType:"Story"},hl.bind({}))),e(le,{story:"Media card",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Complex Action")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"outline?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as an outlined button.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"plain?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as a plain link.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"ActionListItemDescriptor")),e("p",null,"Array of type: ",e("inlineCode",{parentName:"p"},"ActionListItemDescriptor[]")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether the action is active or not.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge?"),e("td",{parentName:"tr",align:null},'{content: string, status: "new"}'),e("td",{parentName:"tr",align:null})),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"ellipsis?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Add an ellipsis suffix to action content.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"helpText?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Additional hint text to display with item.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"image?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Image source.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"prefixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Prefix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"role?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Defines a role for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"suffixId?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Suffix ID to use in slot.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}jy.isMDXComponent=!0;const bl=hl.bind({});bl.storyName="Media card";bl.args={size:"medium",portrait:!1,propTitle:"Get closer to launching your store",description:"Start your business with eye-catching inventory."};bl.parameters={storySource:{source:`args => ({
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
          `}}};const Sn={title:"Components / Structure / Media card",component:fs,argTypes:{title:{description:"Heading content. This slot will override `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},propTitle:{name:"title",description:"Heading content.",table:{category:"props",type:{summary:"string"}}},description:{table:{type:{summary:"string"}}},popoverActions:{control:{disable:!0},table:{defaultValue:{summary:null},type:{summary:"ActionListItemDescriptor[]"}}},primaryAction:{control:{disable:!0}},secondaryAction:{control:{disable:!0}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:"small | medium"}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"slots",type:{summary:null}}}},includeStories:["mediaCard"]},T$={"Media card":"mediaCard"};Sn.parameters=Sn.parameters||{};Sn.parameters.docs=_(v({},Sn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:T$,mdxComponentAnnotations:Sn},e(jy,null))});var S$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:hl,mediaCard:bl,default:Sn}),xd=Object.freeze,C$=Object.defineProperty,fl=(t,n)=>xd(C$(t,"raw",{value:xd(n||t.slice())})),Td,Sd,Cd,Ad;const vl=t=>({components:{ModalSection:Qn,TextContainer:At,Button:he,Modal:Ma},data(){return{active:!0}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Modal>`}),yo=t=>({components:{Modal:Ma,Button:he,ModalSection:Qn,TextContainer:At},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleScrolledToBottom(){alert("Scrolled to bottom")}},template:`
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
  `});yo.storyName="With scroll listener";yo.parameters={docs:{source:{code:P(Td||(Td=fl([`
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
        `])))}}};const go=t=>({components:{Modal:Ma,Button:he,Stack:Ve,StackItem:xt,TextField:Pe,TextContainer:At,ModalSection:Qn},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleClick(){alert("Copy to clipboard successful")}},template:`
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
    </Modal>`});go.storyName="With primary action";go.parameters={docs:{source:{code:P(Sd||(Sd=fl([`
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
      `])))}}};const A$={Template:vl,scrollExample:yo,primaryActionExample:go},k$="wrapper";function Wy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(k$,_(v(v({},A$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Overlays / Modal",component:Ma,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Modal"),e("p",null,"Modals are overlays that require merchants to take an action before they can continue interacting with the rest of Shopify. They can be disruptive and should be used thoughtfully and sparingly."),e("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),e("br",null),e("br",null),e("br",null),e("h3",null,"With primary action"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:go,height:"500px",inline:!1,name:"_primaryActionExample_",mdxType:"Story"})),e("h3",null,"With scroll listener"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:yo,height:"500px",inline:!1,name:"_scrollExample_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},e(H,{name:"Modal",inline:!1,height:"500px",args:{colorScheme:"light"},parameters:{docs:{source:{code:P(Cd||(Cd=fl([`
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
            `])))}}},mdxType:"Story"},vl.bind({}))),e(le,{story:"Modal",mdxType:"ArgsTable"}))}Wy.isMDXComponent=!0;const L$=go,N$=yo,xl=vl.bind({});xl.storyName="Modal";xl.args={colorScheme:"light"};xl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(Ad||(Ad=fl([`
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
            `])))}}};const Cn={title:"Components / Overlays / Modal",component:Ma,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_primaryActionExample_","_scrollExample_","modal"]},w$={_primaryActionExample_:"_primaryActionExample_",_scrollExample_:"_scrollExample_",Modal:"modal"};Cn.parameters=Cn.parameters||{};Cn.parameters.docs=_(v({},Cn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:w$,mdxComponentAnnotations:Cn},e(Wy,null))});var P$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:vl,scrollExample:yo,primaryActionExample:go,_primaryActionExample_:L$,_scrollExample_:N$,modal:xl,default:Cn});const Tl=t=>({components:{Frame:Zt,Navigation:jo,NavigationSection:uc},setup(){return{navItems:[{url:"#",label:"Home",icon:fh},{url:"#",label:"Orders",icon:lp},{url:"#",label:"Products",icon:vh,selected:!0,subNavigationItems:[{url:"#",new:!0,label:"New item"},{url:"#",label:"Active Item",selected:!0},{url:"#",disabled:!0,label:"New item"}]},{url:"#",label:"Marketing",icon:xh,badge:{content:"Warn",status:"warning"}}],navItems2:[{url:"#",label:"Online Store",icon:Th},{url:"/path/to/place",label:"Secondary action",secondaryAction:{url:"#",accessibilityLabel:"View your online store",icon:Sh}}],CirclePlusOutlineMinor:cp}},template:`
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
  `}),M$={Template:Tl},_$="wrapper";function zy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(_$,_(v(v({},M$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Navigation / Navigation",component:jo,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Navigation"),e("p",null,"The navigation component is used to display the primary navigation in the sidebar of the ",e("a",{parentName:"p",href:"?path=/docs/components-structure-frame--frame"},"frame")," of an application. Navigation includes a list of links that merchants use to move between sections of the application."),e(V,{mdxType:"Canvas"},e(H,{name:"Navigation",inline:!1,height:"500px",parameters:{docs:{source:{code:P`
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
          `}}},mdxType:"Story"},Tl.bind({}))),e(le,{story:"Navigation",mdxType:"ArgsTable"}),e("h3",null,e("strong",{parentName:"h3"},"Navigation Section")),e("p",null,"A navigation section groups together related navigation items. Navigation sections can be clarified by a heading. Merchants can use a section to easily find navigation items within a specific category."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"items"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-item"},"Item[]")),e("td",{parentName:"tr",align:null},"A collection of navigation items to be rendered inside the section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon"),e("td",{parentName:"tr",align:null},"IconProps","['source']"),e("td",{parentName:"tr",align:null},"An icon to be displayed next to the section title")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property providing a title for the navigation section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"fill"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should take up all vertical space available")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"rollup"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-rollup"},"Rollup[]")),e("td",{parentName:"tr",align:null},"An object determining the collapsing behavior of the navigation section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"action"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-action"},"Action[]")),e("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to the section title")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"separator"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should have a visual separator")))),e("a",{name:"type-item"}),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Navigation section item")),e("p",null,"The content of the navigation component consists of navigation items. Each item is a link or action a merchant can take."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A location for the navigation item to navigate to when clicked")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"matches"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to a closely matching location property")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"exactMatch"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to an exactly matching location property")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"matchPaths"),e("td",{parentName:"tr",align:null},"string[]"),e("td",{parentName:"tr",align:null},"A string property providing a collection of additional paths for the navigation item to respond to")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"excludePaths"),e("td",{parentName:"tr",align:null},"string[]"),e("td",{parentName:"tr",align:null},"A string property providing an explicit collection of paths the navigation item should not respond to")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon"),e("td",{parentName:"tr",align:null},"IconProps","['source']"),e("td",{parentName:"tr",align:null},"An icon to be displayed next to the navigation. Please prefer minor icons here. If a major icon has to be used, set the ",e("inlineCode",{parentName:"td"},"shouldResizeIcon")," prop to true")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge"),e("td",{parentName:"tr",align:null},"string ","|"," null"),e("td",{parentName:"tr",align:null},"A string property allowing content to be displayed in a badge next to the navigation item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"label"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property allowing content to be displayed as link text in the navigation item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is disabled")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"new"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Indicate whether the navigation item is new by adding an indicator dot to the parent and badge to the item (overwritten by the badge prop)")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of a navigation item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"selected"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is the currently-selected item")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"shouldResizeIcon"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Will allow for major icons to be displayed at the same size as minor icons")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"subNavigationItems"),e("td",{parentName:"tr",align:null},"SubNavigationItem[]"),e("td",{parentName:"tr",align:null},"A collection of navigation items rendered as nested secondary navigation items")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"secondaryAction"),e("td",{parentName:"tr",align:null},"SecondaryAction"),e("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to a navigation item")))),e("br",null),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Events"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@click"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle clicking on a navigation item")))),e("br",null),e("a",{name:"type-rollup"}),e("h3",null,e("strong",{parentName:"h3"},"Navigation section rollup")),e("p",null,"Rollup allows items in a navigation section to roll up and be revealed when they are of use to the merchant."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"after"),e("td",{parentName:"tr",align:null},"number"),e("td",{parentName:"tr",align:null},"A number of items after which the navigation section should be collapsed")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"view"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property providing content for the section view action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hide"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property providing content for the section hide action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"activePath"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string property representing the current URL of your application")))),e("br",null),e("a",{name:"type-action"}),e("h3",null,e("strong",{parentName:"h3"},"Navigation section action")),e("p",null,"Action allows a complementary icon-only action to render next to the section title."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon"),e("td",{parentName:"tr",align:null},"IconProps","['source']"),e("td",{parentName:"tr",align:null},"An icon to be displayed as the content of the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onClick()"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle clicking on the action")))))}zy.isMDXComponent=!0;const Yc=Tl.bind({});Yc.storyName="Navigation";Yc.parameters={storySource:{source:`args => ({
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
          `}}};const An={title:"Components / Navigation / Navigation",component:jo,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},includeStories:["navigation"]},I$={Navigation:"navigation"};An.parameters=An.parameters||{};An.parameters.docs=_(v({},An.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:I$,mdxComponentAnnotations:An},e(zy,null))});var B$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Tl,navigation:Yc,default:An}),kd=Object.freeze,D$=Object.defineProperty,Zi=(t,n)=>kd(D$(t,"raw",{value:kd(n||t.slice())})),Ld,Nd,wd,Pd;const Sl=t=>({components:{Card:Je,OptionList:Wo,TextStyle:ct,Icon:re},setup(){const n=C([]);return{changeSelected:s=>{console.log("changeSelected",s)},selected:n,options:[{value:"byward_market",label:"Byward Market"},{id:"centre",value:"centretown",label:"Centretown"},{value:"hintonburg",label:"Hintonburg"},{value:"westboro",label:"Westboro"},{value:"downtown",label:"Downtown"}],FoodMajor:Ch}},template:`
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
  `}),Cl=t=>({components:{Card:Je,OptionList:Wo},setup(){const n=C([]);return{args:t,changeSelectedvalue:s=>{console.log("changeSelectedvalue",s)},selectedValue:n,sections:[{options:[{value:"type",label:"Sale item type"},{value:"kind",label:"Sale kind"}]},{title:"Traffic",options:[{value:"source",label:"Traffic referrer source"},{value:"host",label:"Traffic referrer host"},{value:"path",label:"Traffic referrer path"}]}]}},template:`
    <Card>
      <OptionList
        v-bind="args"
        v-model="selectedValue"
        :sections="sections"
        @change="changeSelectedvalue"
      />
    </Card>
    <br/><p><strong>Value:</strong> {{ selectedValue }}</p>
  `}),$$={Template1:Sl,Template:Cl},F$="wrapper";function Gy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(F$,_(v(v({},$$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Lists and tables / Option List",component:Wo,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},mdxType:"Meta"}),e("h1",null,"Option List"),e("br",null),e("p",null,"The option list component lets you create a list of grouped items that merchants can pick from. This can include single selection or multiple selection of options. Option list usually appears in a popover, and sometimes in a modal or a sidebar. Option lists are styled differently than ",e("a",{parentName:"p",href:"?path=/docs/components-forms-choice-list"},"choice lists")," and should not be used within a form, but as a standalone menu."),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Simple option list")),e("p",null,"Use sections when you have multiple groups of similar selectable items."),e(V,{mdxType:"Canvas"},e(H,{name:"Option list",parameters:{docs:{source:{state:"close",code:P(Ld||(Ld=Zi([`
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
          `])))}}},mdxType:"Story"},Sl.bind({}))),e("h3",null,e("strong",{parentName:"h3"},"Option list with sections")),e("p",null,"Use sections when you have multiple groups of similar selectable items."),e(V,{mdxType:"Canvas"},e(H,{name:"Option list with sections",args:{allowMultiple:!0},parameters:{docs:{source:{code:P(Nd||(Nd=Zi([`
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
          `])))}}},mdxType:"Story"},Cl.bind({}))),e(le,{story:"Option list with sections",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"OptionDescriptor Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"value"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Value of the option")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"label"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Display label for the option")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether the option is disabled or not")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Whether the option is active or not")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Unique identifier for the option")))),e("br",null),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"SectionDescriptor Props")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"options"),e("td",{parentName:"tr",align:null},"OptionDescriptor[]"),e("td",{parentName:"tr",align:null},"Collection of options within the section")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Section title")))))}Gy.isMDXComponent=!0;const Zc=Sl.bind({});Zc.storyName="Option list";Zc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:P(wd||(wd=Zi([`
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
          `])))}}};const Al=Cl.bind({});Al.storyName="Option list with sections";Al.args={allowMultiple:!0};Al.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(Pd||(Pd=Zi([`
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
          `])))}}};const kn={title:"Components / Lists and tables / Option List",component:Wo,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},includeStories:["optionList","optionListWithSections"]},E$={"Option list":"optionList","Option list with sections":"optionListWithSections"};kn.parameters=kn.parameters||{};kn.parameters.docs=_(v({},kn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:E$,mdxComponentAnnotations:kn},e(Gy,null))});var O$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template1:Sl,Template:Cl,optionList:Zc,optionListWithSections:Al,default:kn});const kl=t=>({components:{Page:vs,Badge:it,Card:Je,Button:he},setup(){const n=()=>{console.log("click")},x=t,{breadcrumbs:o,primaryAction:i,secondaryActions:s,actionGroups:r,pagination:u}=x;return{rest:J(x,["breadcrumbs","primaryAction","secondaryActions","actionGroups","pagination"]),handleClick:n}},template:`
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
  `}),q$={Template:kl},R$="wrapper";function Xy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(R$,_(v(v({},q$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / Page",component:vs,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Page"),e("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),e("h4",null,e("strong",{parentName:"h4"},"Related components")),e("ul",null,e("li",{parentName:"ul"},"To lay out the content within a page, use the ",e("a",{parentName:"li",href:"?path=/docs/components-structure-layout"},"layout component"),"."),e("li",{parentName:"ul"},"To add pagination within the context of a list or other page content, use the ",e("a",{parentName:"li",href:"?path=/docs/components-navigation-pagination"},"pagination component"),"."),e("li",{parentName:"ul"},"To add primary and secondary calls to action at the bottom of a page, see the ",e("a",{parentName:"li",href:"?path=/docs/components-structure-page-actions"},"page actions component"),".")),e(V,{mdxType:"Canvas"},e(H,{name:"Page",inline:!1,height:"250px",args:{fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1},parameters:{docs:{source:{code:P`
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
          `}}},mdxType:"Story"},kl.bind({}))),e(le,{story:"Page",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Breadcrumbs Props")),e("p",null,e("strong",{parentName:"p"},"Example: ")),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// CallbackAction
<Page :breadcrumbs="[{ content: 'Order', onAction: handleAction }]"></Page>

// LinkAction
<Page :breadcrumbs="[{ content: 'Products', url: '/products' }]"></Page>
`)),e("p",null,e("inlineCode",{parentName:"p"},"CallbackAction")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction()"),e("td",{parentName:"tr",align:null},"Function"),e("td",{parentName:"tr",align:null},"Callback when an action takes place")))),e("br",null),e("p",null,e("inlineCode",{parentName:"p"},"LinkAction")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to")))),e("br",null),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Pagination Props")),e("p",null,"See the ",e("a",{parentName:"p",href:"?path=/docs/components-navigation-pagination"},"pagination component")," for more details."),e("p",null,e("strong",{parentName:"p"},"Example: ")),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`<Page :pagination="{ hasPrevious: true, hasNext: true, onPrevious: handlePrevious, onNext: handleNext }"></Page>
`)),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"nextKeys"),e("td",{parentName:"tr",align:null},"Key[]"),e("td",{parentName:"tr",align:null},"Keyboard shortcuts for the next button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"previousKeys"),e("td",{parentName:"tr",align:null},"Key[]"),e("td",{parentName:"tr",align:null},"Keyboard shortcuts for the previous button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"nextTooltip"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Tooltip for the next button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"previousTooltip"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Tooltip for the previous button")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"nextURL"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"The URL of the next page")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"previousURL"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"The URL of the previous page")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hasNext"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether there is a next page to show")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"hasPrevious"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether there is a previous page to show")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Accessible label for the pagination")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabels"),e("td",{parentName:"tr",align:null},"AccessibilityLabels"),e("td",{parentName:"tr",align:null},"Accessible labels for the buttons and UnstyledLinks")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onNext()"),e("td",{parentName:"tr",align:null},"Function"),e("td",{parentName:"tr",align:null},"Callback when next button is clicked")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onPrevious()"),e("td",{parentName:"tr",align:null},"Function"),e("td",{parentName:"tr",align:null},"Callback when previous button is clicked")))))}Xy.isMDXComponent=!0;const Ll=kl.bind({});Ll.storyName="Page";Ll.args={fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1};Ll.parameters={storySource:{source:`args => ({
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
          `}}};const Ln={title:"Components / Structure / Page",component:vs,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["page"]},V$={Page:"page"};Ln.parameters=Ln.parameters||{};Ln.parameters.docs=_(v({},Ln.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:V$,mdxComponentAnnotations:Ln},e(Xy,null))});var H$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:kl,page:Ll,default:Ln}),Md=Object.freeze,U$=Object.defineProperty,Ky=(t,n)=>Md(U$(t,"raw",{value:Md(n||t.slice())})),_d,Id;const Nl=t=>({components:{PageActions:xs},setup(){return{args:t,handleClick:()=>{console.log("click")}}},template:`
    <PageActions
      :primaryAction="{ content: 'Save', onClick: handleClick }"
      :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
    />
  `}),j$={Template:Nl},W$="wrapper";function Yy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(W$,_(v(v({},j$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / Page actions",component:xs,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Page Actions"),e("p",null,"Page actions let merchants take key actions at the bottom of specific pages in the interface. This is important because sometimes the primary call to action is hard to access when merchants are at the bottom of a page."),e(V,{mdxType:"Canvas"},e(H,{name:"Page actions",height:"100px",parameters:{docs:{source:{code:P(_d||(_d=Ky([`
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
          `])))}}},mdxType:"Story"},Nl.bind({}))),e(le,{story:"Page actions",mdxType:"ArgsTable"}))}Yy.isMDXComponent=!0;const Qc=Nl.bind({});Qc.storyName="Page actions";Qc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(Id||(Id=Ky([`
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
          `])))}}};const Nn={title:"Components / Structure / Page actions",component:xs,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},includeStories:["pageActions"]},z$={"Page actions":"pageActions"};Nn.parameters=Nn.parameters||{};Nn.parameters.docs=_(v({},Nn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:z$,mdxComponentAnnotations:Nn},e(Yy,null))});var G$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Nl,pageActions:Qc,default:Nn}),Bd=Object.freeze,X$=Object.defineProperty,Zy=(t,n)=>Bd(X$(t,"raw",{value:Bd(n||t.slice())})),Dd,$d;const wl=t=>({components:{Pagination:zo},setup(){return{args:t,handlePrevious:()=>{console.log("previous")},handleNext:()=>{console.log("next")}}},template:`
    <Pagination
      v-bind="args"
      @previous="handlePrevious"
      @next="handleNext"
    >
      Results
    </Pagination>
  `}),K$={Template:wl},Y$="wrapper";function Qy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(Y$,_(v(v({},K$),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Navigation / Pagination",component:zo,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Pagination"),e("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),e(V,{mdxType:"Canvas"},e(H,{name:"Pagination",inline:!1,height:"100px",args:{hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"},parameters:{docs:{source:{code:P(Dd||(Dd=Zy([`
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
          `])))}}},mdxType:"Story"},wl.bind({}))),e(le,{story:"Pagination",mdxType:"ArgsTable"}))}Qy.isMDXComponent=!0;const Pl=wl.bind({});Pl.storyName="Pagination";Pl.args={hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"};Pl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P($d||($d=Zy([`
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
          `])))}}};const wn={title:"Components / Navigation / Pagination",component:zo,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["pagination"]},Z$={Pagination:"pagination"};wn.parameters=wn.parameters||{};wn.parameters.docs=_(v({},wn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:Z$,mdxComponentAnnotations:wn},e(Qy,null))});var Q$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:wl,pagination:Pl,default:wn}),Fd=Object.freeze,J$=Object.defineProperty,Ml=(t,n)=>Fd(J$(t,"raw",{value:Fd(n||t.slice())})),Ed,Od,qd,Rd;const _l=(t,{argTypes:n})=>({components:{ActionList:Ze,Button:he,Popover:Qe},data(){return{active:!0,items:[{content:"Import file"},{content:"Export file"}]}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Popover>`}),ho=(t,{argTypes:n})=>({components:{ActionList:Ze,Button:he,Popover:Qe,Pane:os,PopoverSection:Mo},data(){return{active:!0,items:[{content:"Online store"},{content:"Facebook"},{content:"Shopify POS"}]}},methods:{toggleActive(){this.active=!this.active}},template:` <div>
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
  </div>`});ho.storyName="With content and actions";ho.parameters={docs:{source:{code:P(Ed||(Ed=Ml([`
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
        `])))}}};const bo=(t,{argTypes:n})=>({components:{Button:he,Popover:Qe,FormLayout:Ot,TextField:Pe,Select:oo},data(){return{active:!0,options:[{label:"Tagged with",value:"Tagged with"}],selectedValue:"Tagged with",tagValue:""}},methods:{toggleActive(){this.active=!this.active},handleTagValueChange(o){this.tagValue=o}},template:` <div>
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
  </div>`});bo.storyName="With form components";bo.parameters={docs:{source:{code:P(Od||(Od=Ml([`
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
        `])))}}};const eF={Template:_l,ContentAndActions:ho,FormComponents:bo},tF="wrapper";function Jy(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(tF,_(v(v({},eF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Overlays / Popover",component:Qe,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Popover"),e("p",null,"Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page."),e("p",null,"For ActionList usages, use the ",e("a",{parentName:"p",href:"/docs/components-actions-actionlist--action-list"},"ActionList component.")),e("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),e("br",null),e("br",null),e("br",null),e("h3",null,"With Content and Actions"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:ho,height:"280px",inline:!1,name:"_ContentAndActions_",mdxType:"Story"})),e("h3",null,"With Form Components"),e(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},e(H,{story:bo,height:"280px",inline:!1,name:"_FormComponents_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},e(H,{name:"Popover",inline:!1,height:"300px",args:{colorScheme:"light"},parameters:{docs:{source:{code:P(qd||(qd=Ml([`
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
          `])))}}},mdxType:"Story"},_l.bind({}))),e(le,{story:"Popover",mdxType:"ArgsTable"}))}Jy.isMDXComponent=!0;const aF=ho,nF=bo,Il=_l.bind({});Il.storyName="Popover";Il.args={colorScheme:"light"};Il.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:P(Rd||(Rd=Ml([`
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
          `])))}}};const Pn={title:"Components / Overlays / Popover",component:Qe,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_ContentAndActions_","_FormComponents_","popover"]},oF={_ContentAndActions_:"_ContentAndActions_",_FormComponents_:"_FormComponents_",Popover:"popover"};Pn.parameters=Pn.parameters||{};Pn.parameters.docs=_(v({},Pn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:oF,mdxComponentAnnotations:Pn},e(Jy,null))});var iF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:_l,ContentAndActions:ho,FormComponents:bo,_ContentAndActions_:aF,_FormComponents_:nF,popover:Il,default:Pn});const Bl=t=>({components:{ProgressBar:Ts},setup(){return{args:t}},template:'<ProgressBar v-bind="args"/>'}),sF={Template:Bl},lF="wrapper";function eg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(lF,_(v(v({},sF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Feedback indicators / Progress bar",component:Ts,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Progress bar"),e("p",null,"The progress bar component is used to visually represent the completion of a task or operation. It shows how much of the task has been completed and how much is still left."),e("br",null),e("br",null),e(V,{mdxType:"Canvas"},e(H,{name:"Progress bar",height:"60px",args:{progress:75},parameters:{docs:{source:{code:P`
            <ProgressBar v-bind="props"/>
          `}}},mdxType:"Story"},Bl.bind({}))),e(le,{story:"Progress bar",mdxType:"ArgsTable"}))}eg.isMDXComponent=!0;const Dl=Bl.bind({});Dl.storyName="Progress bar";Dl.args={progress:75};Dl.parameters={storySource:{source:`args => ({
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
          `}}};const Mn={title:"Components / Feedback indicators / Progress bar",component:Ts,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["progressBar"]},rF={"Progress bar":"progressBar"};Mn.parameters=Mn.parameters||{};Mn.parameters.docs=_(v({},Mn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:rF,mdxComponentAnnotations:Mn},e(eg,null))});var cF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Bl,progressBar:Dl,default:Mn});const bi=t=>({components:{RadioButton:Eo},setup(){return{args:t}},template:`
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
  </div>`,data(){return{demoValue:"disabled"}}});bi.parameters={docs:{source:{code:P`
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
      `}}};const uF={Template:bi},dF="wrapper";function tg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(dF,_(v(v({},uF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Radio Button",component:Eo,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Radio button"),e("p",null,"Use radio buttons to present each item in a list of options where merchants must make a single selection."),e(V,{mdxType:"Canvas"},e(H,{story:bi,name:"Radio Button",mdxType:"Story"})),e(le,{story:"Radio Button",mdxType:"ArgsTable"}))}tg.isMDXComponent=!0;const ag=bi;ag.storyName="Radio Button";const _n={title:"Components / Forms / Radio Button",component:Eo,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_Template_"]},pF={"Radio Button":"_Template_"};_n.parameters=_n.parameters||{};_n.parameters.docs=_(v({},_n.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:pF,mdxComponentAnnotations:_n},e(tg,null))});var mF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:bi,_Template_:ag,default:_n}),Vd=Object.freeze,yF=Object.defineProperty,Qi=(t,n)=>Vd(yF(t,"raw",{value:Vd(n||t.slice())})),Hd,Ud,jd,Wd;const $l=t=>({components:{RangeSlider:_a,Card:Je},setup(){const n=C(30);return{args:t,rangeValue:n}},template:`
    <Card sectioned>
      <template #title>Text color</template>
      <RangeSlider v-model="rangeValue" v-bind="args">
        <template #prefix>Hue</template>
        <template #suffix>{{ rangeValue }}</template>
      </RangeSlider>
    </Card>
  `}),Fl=t=>({components:{RangeSlider:_a,Card:Je},setup(){const n=C(0);return{args:t,rangeValue:n}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <br/><p>Value: {{ rangeValue }}</p>
    </Card>
  `}),El=t=>({components:{RangeSlider:_a,Card:Je,Stack:Ve,TextField:Pe},setup(){const n=C([900,1e3]),o=C("900"),i=C("1000");return{args:t,rangeValue:n,minValue:o,maxValue:i,handleMinChange:m=>{m.target.value<n.value[1]&&(n.value[0]=parseInt(m.target.value))},handleMaxChange:m=>{m.target.value>n.value[0]&&(n.value[1]=parseInt(m.target.value))},handleRangeChange:m=>{o.value=`${m[0]}`,i.value=`${m[1]}`}}},template:`
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
  `}),Ol=t=>({components:{RangeSlider:_a,Card:Je},setup(){const n=C(10);return{args:t,rangeValue:n}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <p>Value: {{ rangeValue }}</p>
    </Card>
  `}),gF={SlotTemplate:$l,StepTemplate:Fl,DualTemplate:El,Template:Ol},hF="wrapper";function ng(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(hF,_(v(v({},gF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Range Slider",component:_a,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Range slider"),e("p",null,"A range slider is an input field that merchants can use to select a numeric value within a given range (minimum and maximum values)."),e("font",{color:"#FF7900"},e("strong",null,"Note:"))," The ",e("code",null,"output")," tooltip position is displayed incorrectly on demo because of the scss from Shopify.",e("br",null),e(V,{mdxType:"Canvas"},e(H,{name:"Prefix and suffix elements",height:"150px",args:{min:0,max:360,label:"Hue color mix",output:!0},parameters:{docs:{source:{state:"close",code:P(Hd||(Hd=Qi([`
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
          `])))}}},mdxType:"Story"},$l.bind({}))),e("h3",null,e("strong",{parentName:"h3"},"Step increamented range control")),e(V,{mdxType:"Canvas"},e(H,{name:"Range slider with steps",height:"150px",args:{min:-20,max:20,step:4,label:"Logo offset",output:!0},parameters:{docs:{source:{state:"close",code:P`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" :min="-20" :max="20" :step="4" label="Logo offset" output />
            </Card>
          `}}},mdxType:"Story"},Fl.bind({}))),e("h3",null,e("strong",{parentName:"h3"},"Dual thumb range slider")),e(V,{mdxType:"Canvas"},e(H,{name:"Dual thumb range slider",height:"150px",args:{min:0,max:2e3,step:10,label:"Money spent is between",output:!0},parameters:{docs:{source:{state:"close",code:P(Ud||(Ud=Qi([`
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
          `])))}}},mdxType:"Story"},El.bind({}))),e(V,{mdxType:"Canvas"},e(H,{name:"Range slider",height:"150px",args:{label:"Opacity percentage",output:!1},parameters:{docs:{source:{code:P`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" label="Opacity percentage" />
            </Card>
          `}}},mdxType:"Story"},Ol.bind({}))),e(le,{story:"Range slider",mdxType:"ArgsTable"}))}ng.isMDXComponent=!0;const ql=$l.bind({});ql.storyName="Prefix and suffix elements";ql.args={min:0,max:360,label:"Hue color mix",output:!0};ql.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:P(jd||(jd=Qi([`
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
          `])))}}};const Rl=Fl.bind({});Rl.storyName="Range slider with steps";Rl.args={min:-20,max:20,step:4,label:"Logo offset",output:!0};Rl.parameters={storySource:{source:`args => ({
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
          `}}};const Vl=El.bind({});Vl.storyName="Dual thumb range slider";Vl.args={min:0,max:2e3,step:10,label:"Money spent is between",output:!0};Vl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:P(Wd||(Wd=Qi([`
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
          `])))}}};const Hl=Ol.bind({});Hl.storyName="Range slider";Hl.args={label:"Opacity percentage",output:!1};Hl.parameters={storySource:{source:`args => ({
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
          `}}};const In={title:"Components / Forms / Range Slider",component:_a,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},includeStories:["prefixAndSuffixElements","rangeSliderWithSteps","dualThumbRangeSlider","rangeSlider"]},bF={"Prefix and suffix elements":"prefixAndSuffixElements","Range slider with steps":"rangeSliderWithSteps","Dual thumb range slider":"dualThumbRangeSlider","Range slider":"rangeSlider"};In.parameters=In.parameters||{};In.parameters.docs=_(v({},In.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:bF,mdxComponentAnnotations:In},e(ng,null))});var fF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SlotTemplate:$l,StepTemplate:Fl,DualTemplate:El,Template:Ol,prefixAndSuffixElements:ql,rangeSliderWithSteps:Rl,dualThumbRangeSlider:Vl,rangeSlider:Hl,default:In});const Ul=t=>({components:{Scrollable:Ft},template:`
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
  </Scrollable>`}),fi=t=>({components:{Scrollable:Ft,ScrollTo:as},template:`
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
  </Scrollable>`});fi.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const vi=t=>({components:{Scrollable:Ft},setup(){return{args:t}},template:`
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
  </Scrollable>`});vi.parameters={docs:{source:{code:P`
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
      `}}};const vF={DefaultScrollable:Ul,ScrollToExample:fi,Example:vi},xF="wrapper";function og(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(xF,_(v(v({},vF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Behavior / Scrollable",component:Ft,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},mdxType:"Meta"}),e("h1",null,"Scrollable"),e("p",null,`The scrollable component is a container for long form content,
such as terms of service, that allows for scrolling so merchants can expose more text as they read.`),e("br",null),e("br",null),e("h3",null,"Default scrollable container"),e("p",null,`Use when you need to make a region within the page independently scrollable.
It's often used in modals and other panes where it's helpful to provide an extra visual cue that content exists below or above the fold.`),e(V,{mdxType:"Canvas"},e(H,{story:Ul,name:"Default scrollable container",mdxType:"Story"})),e("h3",null,"Scroll to child component"),e("p",null,"Use when you need to programmatically scroll a child component into view in the scrollable container."),e(V,{mdxType:"Canvas"},e(H,{story:fi,name:"Scroll to child component",mdxType:"Story"})),e("h3",null,"Example"),e(V,{style:{backgroundColor:"#fff"},mdxType:"Canvas"},e(H,{story:vi,name:"Example",height:"150px",mdxType:"Story"})),e(le,{story:"Example",mdxType:"ArgsTable"}))}og.isMDXComponent=!0;const ig=Ul;ig.storyName="Default scrollable container";const sg=fi;sg.storyName="Scroll to child component";const lg=vi;lg.storyName="Example";const Bn={title:"Components / Behavior / Scrollable",component:Ft,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},includeStories:["_DefaultScrollable_","_ScrollToExample_","_Example_"]},TF={"Default scrollable container":"_DefaultScrollable_","Scroll to child component":"_ScrollToExample_",Example:"_Example_"};Bn.parameters=Bn.parameters||{};Bn.parameters.docs=_(v({},Bn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:TF,mdxComponentAnnotations:Bn},e(og,null))});var SF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultScrollable:Ul,ScrollToExample:fi,Example:vi,_DefaultScrollable_:ig,_ScrollToExample_:sg,_Example_:lg,default:Bn});const jl=t=>({components:{Select:oo,Icon:re},setup(){const n=Ah,o=C("");return{args:t,selectValue:o,iconHintMajor:n}},template:`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}`}),CF={Template:jl},AF="wrapper";function rg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(AF,_(v(v({},CF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Select",component:oo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Select"),e("p",null,"Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface."),e("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",e("b",null,"select")," element in html."),e(V,{mdxType:"Canvas"},e(H,{name:"Select",args:{placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"},parameters:{docs:{source:{code:P`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}},mdxType:"Story"},jl.bind({}))),e(le,{story:"Select",mdxType:"ArgsTable"}))}rg.isMDXComponent=!0;const Wl=jl.bind({});Wl.storyName="Select";Wl.args={placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"};Wl.parameters={storySource:{source:`args => ({
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
          `}}};const Dn={title:"Components / Forms / Select",component:oo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},includeStories:["select"]},kF={Select:"select"};Dn.parameters=Dn.parameters||{};Dn.parameters.docs=_(v({},Dn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:kF,mdxComponentAnnotations:Dn},e(rg,null))});var LF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:jl,select:Wl,default:Dn}),zd=Object.freeze,NF=Object.defineProperty,cg=(t,n)=>zd(NF(t,"raw",{value:zd(n||t.slice())})),Gd,Xd;const zl=t=>({components:{SettingToggle:Ss,TextStyle:ct},setup(){const n=()=>{o.value=!o.value},o=C(!1);return{args:t,active:o,toggleSetting:n}},template:`<SettingToggle
    :action="{ content: active ? 'Deactivate' : 'Activate', onAction: toggleSetting }"
    :enabled="active"
  >
    This setting is <TextStyle variation="strong">{{ active ? 'activated' : 'deactivated' }}</TextStyle>.
  </SettingToggle>`}),wF={Template:zl},PF="wrapper";function ug(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(PF,_(v(v({},wF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Actions / Setting toggle",component:Ss,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Setting toggle"),e("p",null,"Use to give merchants control over a feature or option that can be turned on or off."),e(V,{mdxType:"Canvas"},e(H,{name:"Setting toggle",height:"120px",parameters:{docs:{source:{code:P(Gd||(Gd=cg([`
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
            `])))}}},mdxType:"Story"},zl.bind({}))),e(le,{story:"Setting toggle",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"Complex Action")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"id?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A unique identifier for the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"content?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Content the action displays.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"accessibilityLabel?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Visually hidden text for screen readers.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"url?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"A destination to link to, rendered in the action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"external?"),e("td",{parentName:"tr",align:null},"String"),e("td",{parentName:"tr",align:null},"Forces url to open in a new tab.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"destructive?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Destructive action.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"icon?"),e("td",{parentName:"tr",align:null},"IconSource"),e("td",{parentName:"tr",align:null},"Source of the icon.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"disabled?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Whether or not the action is disabled.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"loading?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should a spinner be displayed.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"outline?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as an outlined button.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"plain?"),e("td",{parentName:"tr",align:null},"Boolean"),e("td",{parentName:"tr",align:null},"Should action be displayed as a plain link.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onAction?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when an action takes place.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onMouseEnter?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when mouse enter.")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"onTouchStart?()"),e("td",{parentName:"tr",align:null},"void"),e("td",{parentName:"tr",align:null},"Callback when element is touched.")))))}ug.isMDXComponent=!0;const Jc=zl.bind({});Jc.storyName="Setting toggle";Jc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(Xd||(Xd=cg([`
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
            `])))}}};const $n={title:"Components / Actions / Setting toggle",component:Ss,argTypes:{default:{table:{disable:!0}}},includeStories:["settingToggle"]},MF={"Setting toggle":"settingToggle"};$n.parameters=$n.parameters||{};$n.parameters.docs=_(v({},$n.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:MF,mdxComponentAnnotations:$n},e(ug,null))});var _F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:zl,settingToggle:Jc,default:$n});const Gl=t=>({components:{SkeletonBodyText:Go},setup(){return{args:t}},template:`
    <SkeletonBodyText v-bind:="args"/>
  `}),IF={Template:Gl},BF="wrapper";function dg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(BF,_(v(v({},IF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Feedback indicators / Skeleton body text",component:Go,mdxType:"Meta"}),e("h1",null,"Skeleton body text"),e("p",null,"Skeleton body text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),e(V,{mdxType:"Canvas"},e(H,{name:"Skeleton body text",args:{lines:3},parameters:{docs:{source:{code:P`
            <SkeletonBodyText :lines="3"/>
          `}}},mdxType:"Story"},Gl.bind({}))),e(le,{story:"Skeleton body text",mdxType:"ArgsTable"}))}dg.isMDXComponent=!0;const Xl=Gl.bind({});Xl.storyName="Skeleton body text";Xl.args={lines:3};Xl.parameters={storySource:{source:`args => ({
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
          `}}};const Fn={title:"Components / Feedback indicators / Skeleton body text",component:Go,includeStories:["skeletonBodyText"]},DF={"Skeleton body text":"skeletonBodyText"};Fn.parameters=Fn.parameters||{};Fn.parameters.docs=_(v({},Fn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:DF,mdxComponentAnnotations:Fn},e(dg,null))});var $F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Gl,skeletonBodyText:Xl,default:Fn});const Kl=t=>({components:{SkeletonDisplayText:Xo},setup(){return{args:t}},template:`
    <SkeletonDisplayText v-bind="args"/>
  `}),FF={Template:Kl},EF="wrapper";function pg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(EF,_(v(v({},FF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Feedback indicators / Skeleton display text",component:Xo,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Skeleton display text"),e("p",null,"Skeleton display text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),e(V,{mdxType:"Canvas"},e(H,{name:"Skeleton display text",args:{size:"medium"},parameters:{docs:{source:{code:P`
            <SkeletonDisplayText size="medium"/>
          `}}},mdxType:"Story"},Kl.bind({}))),e(le,{story:"Skeleton display text",mdxType:"ArgsTable"}))}pg.isMDXComponent=!0;const Yl=Kl.bind({});Yl.storyName="Skeleton display text";Yl.args={size:"medium"};Yl.parameters={storySource:{source:`args => ({
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
          `}}};const En={title:"Components / Feedback indicators / Skeleton display text",component:Xo,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},includeStories:["skeletonDisplayText"]},OF={"Skeleton display text":"skeletonDisplayText"};En.parameters=En.parameters||{};En.parameters.docs=_(v({},En.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:OF,mdxComponentAnnotations:En},e(pg,null))});var qF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Kl,skeletonDisplayText:Yl,default:En});const Zl=(t,{argTypes:n})=>({components:{Spinner:Gt},setup(){return{args:t}},template:'<Spinner v-bind="args"/>'}),RF={Template:Zl},VF="wrapper";function mg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(VF,_(v(v({},RF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Feedback indicators / Spinner",component:Gt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Spinner"),e("p",null,"Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can\u2019t be represented with skeleton loading components, like for data charts."),e(V,{mdxType:"Canvas"},e(H,{name:"Spinner",height:"60px",args:{accessibilityLabel:"Spinner example",size:"large"},parameters:{docs:{source:{code:P`
            <Spinner v-bind="props"/>
          `}}},mdxType:"Story"},Zl.bind({}))),e(le,{story:"Spinner",mdxType:"ArgsTable"}))}mg.isMDXComponent=!0;const Ql=Zl.bind({});Ql.storyName="Spinner";Ql.args={accessibilityLabel:"Spinner example",size:"large"};Ql.parameters={storySource:{source:`(args, {
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
          `}}};const On={title:"Components / Feedback indicators / Spinner",component:Gt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["spinner"]},HF={Spinner:"spinner"};On.parameters=On.parameters||{};On.parameters.docs=_(v({},On.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:HF,mdxComponentAnnotations:On},e(mg,null))});var UF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zl,spinner:Ql,default:On});const Jl=(t,{argTypes:n})=>({components:{Stack:Ve,StackItem:xt,Badge:it},setup(){return{args:t}},template:`<Stack v-bind="args">
    <Badge> Paid </Badge>
    <Badge> Processing </Badge>
    <Badge> Fulfilled </Badge>
    <Badge> Completed </Badge>
  </Stack>`}),fo=(t,{argTypes:n})=>({components:{Stack:Ve,StackItem:xt,Badge:it},template:`<Stack noItemWrap>
    <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
    <StackItem> <Badge> Processing </Badge> </StackItem>
    <StackItem> <Badge> Completed </Badge> </StackItem>
  </Stack>`});fo.storyName="Fill the remaining space";fo.parameters={docs:{source:{code:P`
        <Stack noItemWrap>
          <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
          <StackItem> <Badge> Processing </Badge> </StackItem>
          <StackItem> <Badge> Completed </Badge> </StackItem>
        </Stack>
      `}}};const jF={Template:Jl,SingleFillItem:fo},WF="wrapper";function yg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(WF,_(v(v({},jF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Structure / Stack",component:Ve,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Stack"),e("p",null,"Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack\u2019s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack."),e("br",null),e("br",null),e("h3",null,"A single item fills the remaining space"),e(V,{mdxType:"Canvas"},e(H,{story:fo,height:"65px",name:"_SingleFillItem_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{name:"Stack",height:"60px",parameters:{docs:{source:{code:P`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}},mdxType:"Story"},Jl.bind({}))),e(le,{story:"Stack",mdxType:"ArgsTable"}))}yg.isMDXComponent=!0;const zF=fo,eu=Jl.bind({});eu.storyName="Stack";eu.parameters={storySource:{source:`(args, {
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
          `}}};const qn={title:"Components / Structure / Stack",component:Ve,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SingleFillItem_","stack"]},GF={_SingleFillItem_:"_SingleFillItem_",Stack:"stack"};qn.parameters=qn.parameters||{};qn.parameters.docs=_(v({},qn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:GF,mdxComponentAnnotations:qn},e(yg,null))});var XF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Jl,SingleFillItem:fo,_SingleFillItem_:zF,stack:eu,default:qn});const er=t=>({components:{Subheading:la},setup(){return{args:t}},template:'<Subheading v-bind="args">Accounts</Subheading>'}),KF={Template:er},YF="wrapper";function gg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(YF,_(v(v({},KF),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Titles and text  / Subheading",component:la,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Subheading"),e("p",null,"Subheadings are used for the title of any sub-sections in top-level page sections."),e(V,{mdxType:"Canvas"},e(H,{name:"Subheading",inline:!1,height:"30px",args:{element:"h3"},parameters:{docs:{source:{code:P`
            <Subheading>Accounts</Subheading>
          `}}},mdxType:"Story"},er.bind({}))),e(le,{story:"Subheading",mdxType:"ArgsTable"}))}gg.isMDXComponent=!0;const tr=er.bind({});tr.storyName="Subheading";tr.args={element:"h3"};tr.parameters={storySource:{source:`args => ({
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
          `}}};const Rn={title:"Components / Titles and text  / Subheading",component:la,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},includeStories:["subheading"]},ZF={Subheading:"subheading"};Rn.parameters=Rn.parameters||{};Rn.parameters.docs=_(v({},Rn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:ZF,mdxComponentAnnotations:Rn},e(gg,null))});var QF=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:er,subheading:tr,default:Rn}),Kd=Object.freeze,JF=Object.defineProperty,hg=(t,n)=>Kd(JF(t,"raw",{value:Kd(n||t.slice())})),Yd,Zd;const ar=t=>({components:{Tabs:Cs,CardSection:Aa,Badge:it,Card:Je},setup(){const n=C(0);return{args:t,selectedTab:n,handleTabChange:s=>{n.value=s},tabs:[{id:"all-customers-1",content:"All",accessibilityLabel:"All customers",panelID:"all-customers-content-1"},{id:"accepts-marketing-1",content:"Accepts marketing",panelID:"accepts-marketing-content-1"},{id:"repeat-customers-1",content:"Repeat customers",panelID:"repeat-customers-content-1"}]}},template:`
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
  `}),eE={Template:ar},tE="wrapper";function bg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(tE,_(v(v({},eE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Navigation / Tabs",component:Cs,argTypes:{default:{table:{disable:!0}},selected:{control:{disable:!0}},tabs:{table:{type:{summary:"TabDescriptor[]"}},control:{disable:!0}},select:{table:{type:{summary:"(selectedTabIndex: number) => void"}}},"#tab-id":{description:"Slot to show content of the tab. This slot will override the `content` prop of tab.",table:{category:"slots",type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Tabs"),e("p",null,"Use to alternate among related views within the same context."),e("br",null),e(V,{mdxType:"Canvas"},e(H,{name:"Tabs",height:"200px",args:{fitted:!1},parameters:{docs:{source:{state:"close",code:P(Yd||(Yd=hg([`
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
          `])))}}},mdxType:"Story"},ar.bind({}))),e(le,{story:"Tabs",mdxType:"ArgsTable"}),e("hr",null),e("br",null),e("h3",null,e("strong",{parentName:"h3"},"TabDescriptor Props")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`/** A unique identifier for the tab */
id: string;
/** A destination to link to */
url?: string;
/** Content for the tab */
content: string;
/** A unique identifier for the panel */
panelID?: string;
/** Visually hidden text for screen readers */
accessibilityLabel?: string;
`)))}bg.isMDXComponent=!0;const nr=ar.bind({});nr.storyName="Tabs";nr.args={fitted:!1};nr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:P(Zd||(Zd=hg([`
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
          `])))}}};const Vn={title:"Components / Navigation / Tabs",component:Cs,argTypes:{default:{table:{disable:!0}},selected:{control:{disable:!0}},tabs:{table:{type:{summary:"TabDescriptor[]"}},control:{disable:!0}},select:{table:{type:{summary:"(selectedTabIndex: number) => void"}}},"#tab-id":{description:"Slot to show content of the tab. This slot will override the `content` prop of tab.",table:{category:"slots",type:{summary:null}}}},includeStories:["tabs"]},aE={Tabs:"tabs"};Vn.parameters=Vn.parameters||{};Vn.parameters.docs=_(v({},Vn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:aE,mdxComponentAnnotations:Vn},e(bg,null))});var nE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ar,tabs:nr,default:Vn}),Qd=Object.freeze,oE=Object.defineProperty,fg=(t,n)=>Qd(oE(t,"raw",{value:Qd(n||t.slice())})),Jd,ep;const or=t=>({components:{Tag:Yo},setup(){return{args:t}},methods:{removeHandle(){alert("Removed")},clickHandle(){alert("Clicked")}},template:`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>`}),iE={Template:or},sE="wrapper";function vg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(sE,_(v(v({},iE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Tag",component:Yo,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Tag"),e("p",null,"Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants."),e(V,{mdxType:"Canvas"},e(H,{name:"Tag",height:"30px",args:{disabled:!1},parameters:{docs:{source:{code:P(Jd||(Jd=fg([`
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
          `])))}}},mdxType:"Story"},or.bind({}))),e(le,{story:"Tag",mdxType:"ArgsTable"}))}vg.isMDXComponent=!0;const ir=or.bind({});ir.storyName="Tag";ir.args={disabled:!1};ir.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:P(ep||(ep=fg([`
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
          `])))}}};const Hn={title:"Components / Forms / Tag",component:Yo,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["tag"]},lE={Tag:"tag"};Hn.parameters=Hn.parameters||{};Hn.parameters.docs=_(v({},Hn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:lE,mdxComponentAnnotations:Hn},e(vg,null))});var rE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:or,tag:ir,default:Hn});const xi=t=>({components:{TextContainer:At},setup(){return{args:t}},template:`
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
  `});xi.parameters={docs:{source:{code:P`
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
      `}}};const cE={Template:xi},uE="wrapper";function xg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(uE,_(v(v({},cE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Titles and text / Text container",component:At,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},mdxType:"Meta"}),e("h1",null,"Text container"),e("p",null,"A text container is used to wrap text elements such as paragraphs, headings, and lists to give them vertical spacing."),e(V,{mdxType:"Canvas"},e(H,{story:xi,name:"Text container",height:"250px",mdxType:"Story"})),e(le,{story:"Text container",mdxType:"ArgsTable"}))}xg.isMDXComponent=!0;const Tg=xi;Tg.storyName="Text container";const Un={title:"Components / Titles and text / Text container",component:At,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},dE={"Text container":"_Template_"};Un.parameters=Un.parameters||{};Un.parameters.docs=_(v({},Un.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:dE,mdxComponentAnnotations:Un},e(xg,null))});var pE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:xi,_Template_:Tg,default:Un});const Ti=t=>({components:{TextField:Pe},template:`
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
  `,data(){return{name:"Polaris"}}});Ti.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const Si=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
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
  </div>`,data(){return{numberData:"1"}}});Si.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const Ci=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
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
  </div>`,data(){return{address:"156 Xa Dan 2"}}});Ci.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const Ai=(t,{argTypes:n})=>({components:{TextField:Pe,ChoiceList:Et},template:`
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
  </div>`,data(){return{months:"12",choices:[{label:"Gift cards never expire",value:"no"},{label:"Gift cards expire",value:"yes"}],selected:"yes"}}});Ai.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const ki=(t,{argTypes:n})=>({components:{TextField:Pe,Stack:Ve,StackItem:xt},template:`
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
  </Stack>`,data(){return{price:"1"}}});ki.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const Li=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
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
  `});Li.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const Ni=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
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
  `,data(){return{price:"10"}}});Ni.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const wi=(t,{argTypes:n})=>({components:{TextField:Pe,Select:oo},template:`
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
  `,data(){return{weight:"10",unit:"kg"}}});wi.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const Pi=(t,{argTypes:n})=>({components:{TextField:Pe},template:`
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
  `,data(){return{storeName:"Jaded Pixel"}}});Pi.parameters={docs:{source:{state:"close",code:P`
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
      `}}};const sr=t=>({components:{TextField:Pe},setup(){return{args:t}},template:`
    <TextField v-bind="args" autoComplete="off">
      <template #label>Example text field</template>
    </TextField>
  `}),mE={DefaultTextField:Ti,NumberField:Si,MultiLineField:Ci,HiddenLabelField:Ai,RightAlignedField:ki,HelpTextField:Li,PrefixSuffixField:Ni,ConnectedField:wi,ClearBtnField:Pi,ExampleField:sr},yE="wrapper";function Sg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(yE,_(v(v({},mE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Forms / Text Field",component:Pe,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),e("h1",null,"Text field"),e("p",null,"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."),e("br",null),e("br",null),e("h3",null,"Default text field"),e("p",null,"Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options."),e(V,{mdxType:"Canvas"},e(H,{story:Ti,name:"Default text field",mdxType:"Story"})),e("h3",null,"Number field"),e("p",null,"Use when input text should be a number."),e(V,{mdxType:"Canvas"},e(H,{story:Si,name:"Number field",mdxType:"Story"})),e("h3",null,"Multiline text field"),e("p",null,`Use when the expected input could be more than one line.
The field will automatically grow to accommodate additional text.`),e(V,{mdxType:"Canvas"},e(H,{story:Ci,name:"Multiline text field",height:"150px",mdxType:"Story"})),e("h3",null,"Text field with hidden label"),e("p",null,`Use to visually hide the label when the text field's purpose is clear from context.
The label will remain available to screen readers. Use this option with care. In almost all cases, show the label.`),e(V,{mdxType:"Canvas"},e(H,{story:Ai,name:"Text field with hidden label",mdxType:"Story"})),e("h3",null,"Text field with right aligned text"),e("p",null,"Use when input text should be aligned right."),e(V,{mdxType:"Canvas"},e(H,{story:ki,name:"Text field with right aligned text",mdxType:"Story"})),e("h3",null,"Text field with help text"),e("p",null,`Use to show short instructional content below the text field.
Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements).
If more explanation is needed, link to the Shopify Help Center.`),e(V,{mdxType:"Canvas"},e(H,{story:Li,name:"Text field with help text",mdxType:"Story"})),e("h3",null,"Text field with prefix or suffix"),e("p",null,"Use as a special form of help text that works best inline."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},"Use a prefix for things like currency symbols (\u201C$\u201D, \u201C\xA5\u201D, \u201C\xA3\u201D).")),e("li",{parentName:"ul"},e("p",{parentName:"li"},"Use suffix for things like units of measure (\u201Cin\u201D, \u201Ccm\u201D)."))),e(V,{mdxType:"Canvas"},e(H,{story:Ni,name:"Text field with prefix or suffix",mdxType:"Story"})),e("h3",null,"Text field with connected fields"),e("p",null,"Use when a text field and several related fields make up a logical unit."),e("p",null,`If inputting weight as a number and a separate unit of measurement,
use a text field with a select dropdown menu (for example \u201Ckg\u201D, \u201Clb\u201D) as a connected field.`),e(V,{mdxType:"Canvas"},e(H,{story:wi,name:"Text field with connected fields",mdxType:"Story"})),e("h3",null,"Text field with clear button"),e("p",null,"Use to allow merchants to clear the content from a text field."),e(V,{mdxType:"Canvas"},e(H,{story:Pi,name:"Text field with clear button",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{story:sr,name:"Example",parameters:{docs:{source:{code:P`
          <TextField v-bind="args" autoComplete="off">
            <template #label>Example text field</template>
          </TextField>
          `}}},mdxType:"Story"})),e(le,{story:"Example",mdxType:"ArgsTable"}))}Sg.isMDXComponent=!0;const Cg=Ti;Cg.storyName="Default text field";const Ag=Si;Ag.storyName="Number field";const kg=Ci;kg.storyName="Multiline text field";const Lg=Ai;Lg.storyName="Text field with hidden label";const Ng=ki;Ng.storyName="Text field with right aligned text";const wg=Li;wg.storyName="Text field with help text";const Pg=Ni;Pg.storyName="Text field with prefix or suffix";const Mg=wi;Mg.storyName="Text field with connected fields";const _g=Pi;_g.storyName="Text field with clear button";const Ig=sr;Ig.storyName="Example";const jn={title:"Components / Forms / Text Field",component:Pe,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},includeStories:["_DefaultTextField_","_NumberField_","_MultiLineField_","_HiddenLabelField_","_RightAlignedField_","_HelpTextField_","_PrefixSuffixField_","_ConnectedField_","_ClearBtnField_","_ExampleField_"]},gE={"Default text field":"_DefaultTextField_","Number field":"_NumberField_","Multiline text field":"_MultiLineField_","Text field with hidden label":"_HiddenLabelField_","Text field with right aligned text":"_RightAlignedField_","Text field with help text":"_HelpTextField_","Text field with prefix or suffix":"_PrefixSuffixField_","Text field with connected fields":"_ConnectedField_","Text field with clear button":"_ClearBtnField_",Example:"_ExampleField_"};jn.parameters=jn.parameters||{};jn.parameters.docs=_(v({},jn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:gE,mdxComponentAnnotations:jn},e(Sg,null))});var hE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultTextField:Ti,NumberField:Si,MultiLineField:Ci,HiddenLabelField:Ai,RightAlignedField:ki,HelpTextField:Li,PrefixSuffixField:Ni,ConnectedField:wi,ClearBtnField:Pi,ExampleField:sr,_DefaultTextField_:Cg,_NumberField_:Ag,_MultiLineField_:kg,_HiddenLabelField_:Lg,_RightAlignedField_:Ng,_HelpTextField_:wg,_PrefixSuffixField_:Pg,_ConnectedField_:Mg,_ClearBtnField_:_g,_ExampleField_:Ig,default:jn});const lr=(t,{argTypes:n})=>({components:{TextStyle:ct},setup(){return{args:t}},template:'<TextStyle v-bind="args"> Hello </TextStyle>'}),bE={Template:lr},fE="wrapper";function Bg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(fE,_(v(v({},bE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Titles and text / Text Style",component:ct,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Text Style"),e("p",null,"Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text."),e(V,{mdxType:"Canvas"},e(H,{name:"Text Style",height:"60px",parameters:{docs:{source:{code:P`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}},mdxType:"Story"},lr.bind({}))),e(le,{story:"Text Style",mdxType:"ArgsTable"}))}Bg.isMDXComponent=!0;const tu=lr.bind({});tu.storyName="Text Style";tu.parameters={storySource:{source:`(args, {
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
          `}}};const Wn={title:"Components / Titles and text / Text Style",component:ct,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["textStyle"]},vE={"Text Style":"textStyle"};Wn.parameters=Wn.parameters||{};Wn.parameters.docs=_(v({},Wn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:vE,mdxComponentAnnotations:Wn},e(Bg,null))});var xE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:lr,textStyle:tu,default:Wn});const rr=(t,{argTypes:n})=>({components:{Thumbnail:Zo},setup(){return{args:t}},computed:{thumbnailSource(){return t.source==="CirclePlusMinor"?up:t.source},bindProps(){return{size:t.size,source:this.thumbnailSource,alt:t.alt}}},template:'<Thumbnail v-bind="bindProps" />'}),TE={Template:rr},SE="wrapper";function Dg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(SE,_(v(v({},TE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Images and Icons / Thumbnail",component:Zo,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Thumbnail"),e("p",null,"Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context."),e(V,{mdxType:"Canvas"},e(H,{name:"Thumbnail",height:"60px",args:{alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"},parameters:{docs:{source:{code:P`
            <Thumbnail v-bind="props" />
          `}}},mdxType:"Story"},rr.bind({}))),e(le,{story:"Thumbnail",mdxType:"ArgsTable"}))}Dg.isMDXComponent=!0;const cr=rr.bind({});cr.storyName="Thumbnail";cr.args={alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"};cr.parameters={storySource:{source:`(args, {
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
          `}}};const zn={title:"Components / Images and Icons / Thumbnail",component:Zo,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},includeStories:["thumbnail"]},CE={Thumbnail:"thumbnail"};zn.parameters=zn.parameters||{};zn.parameters.docs=_(v({},zn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:CE,mdxComponentAnnotations:zn},e(Dg,null))});var AE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:rr,thumbnail:cr,default:zn});const ur=t=>({components:{Frame:Zt,Toast:Ko,Button:he},setup(){const n=C(!1),o=C(!1),i=C(!1);return{toastActive1:n,toggleToast1:()=>{n.value=!n.value},toastActive2:o,toggleToast2:()=>{o.value=!o.value},toastActive3:i,toggleToast3:()=>{i.value=!i.value},undoHandler:()=>{alert("Undo clicked")}}},template:`
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
  `}),kE={Template:ur},LE="wrapper";function $g(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(LE,_(v(v({},kE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Feedback indicators / Toast",component:Ko,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},mdxType:"Meta"}),e("h1",null,"Toast"),e("p",null,"The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action."),e(V,{mdxType:"Canvas"},e(H,{name:"Toast",inline:!1,height:"300px",parameters:{docs:{source:{code:P`
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
          `}}},mdxType:"Story"},ur.bind({}))),e(le,{story:"Toast",mdxType:"ArgsTable"}))}$g.isMDXComponent=!0;const au=ur.bind({});au.storyName="Toast";au.parameters={storySource:{source:`args => ({
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
          `}}};const Gn={title:"Components / Feedback indicators / Toast",component:Ko,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},includeStories:["toast"]},NE={Toast:"toast"};Gn.parameters=Gn.parameters||{};Gn.parameters.docs=_(v({},Gn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:NE,mdxComponentAnnotations:Gn},e($g,null))});var wE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ur,toast:au,default:Gn});const dr=t=>({components:{Tooltip:Ca,TextStyle:ct},setup(){return{args:t}},template:`<Tooltip v-bind="args" :content="args.content1">
    <TextStyle variation="strong">Order #1001</TextStyle>
  </Tooltip>`}),vo=t=>({components:{Button:he,ButtonGroup:ot,Tooltip:Ca,TextField:Pe},template:`
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
  `});vo.storyName="Tooltip visible only with child interaction";vo.parameters={docs:{source:{code:P`
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
      `}}};const PE={Template:dr,childInteraction:vo},ME="wrapper";function Fg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(ME,_(v(v({},PE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Overlays / Tooltip",component:Ca,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Tooltip"),e("p",null,"Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when merchants hover, focus, tap, or click."),e("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),e("br",null),e("br",null),e("h3",null,"A single item fills the remaining space"),e(V,{withSource:"close",mdxType:"Canvas"},e(H,{story:vo,height:"150px",inline:!1,name:"_childInteraction_",mdxType:"Story"})),e("h3",null,"Example"),e(V,{mdxType:"Canvas"},e(H,{inline:!1,name:"Tooltip",height:"100px",args:{active:!0,content1:"This order has shipping labels."},parameters:{docs:{source:{code:P`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}},mdxType:"Story"},dr.bind({}))),e(le,{story:"Tooltip",mdxType:"ArgsTable"}))}Fg.isMDXComponent=!0;const _E=vo,pr=dr.bind({});pr.storyName="Tooltip";pr.args={active:!0,content1:"This order has shipping labels."};pr.parameters={storySource:{source:`args => ({
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
          `}}};const Xn={title:"Components / Overlays / Tooltip",component:Ca,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_childInteraction_","tooltip"]},IE={_childInteraction_:"_childInteraction_",Tooltip:"tooltip"};Xn.parameters=Xn.parameters||{};Xn.parameters.docs=_(v({},Xn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:IE,mdxComponentAnnotations:Xn},e(Fg,null))});var BE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:dr,childInteraction:vo,_childInteraction_:_E,tooltip:pr,default:Xn});const mr=t=>({components:{Frame:Zt,TopBar:Qo,TopBarUserMenu:bc,TopBarMenu:As,Icon:re,VisuallyHidden:lt,TopBarSearchField:hc,ActionList:Ze},setup(){const n={width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},o=C(!1),i=C(!1),s=C(!1),r=C(""),u=k=>{s.value=k.length>0},m=()=>{r.value="",s.value=!1},x=()=>{o.value=!o.value},b=()=>{i.value=!i.value},g=C([{items:[{content:"Back to Shopify",icon:Zn}]},{items:[{content:"Community forums"}]}]),T=C({title:"Another Message",description:"This is a description of message",action:{onClick:()=>{alert("clicked")},content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}});return{logo:n,isSearchActive:s,searchValue:r,handleSearchChange:u,toggleIsSecondaryMenuOpen:b,userMenuAction:g,userMenuMessage:T,toggleUserMenu:x,isUserMenuOpen:o,isSecondaryMenuOpen:i,handleSearchResultsDismiss:m,QuestionMarkMajor:rp}},template:`
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
  `}),DE={Template:mr},$E="wrapper";function Eg(o){var i=o,{components:t}=i,n=J(i,["components"]);return e($E,_(v(v({},DE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Navigation / Top Bar",component:Qo,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),e("h1",null,"Top Bar"),e("p",null,"The top bar is a header component that allows merchants to search, access menus, and navigate by clicking on the logo. It's always visible at the top of interfaces like Shopify or Shopify Plus. Third-party apps that use the top bar can customize the color to match their brand using the ",e("a",{parentName:"p",href:"?path=/docs/components-structure-app-provider"},"app provider")," component and are required to use their own logo."),e(V,{mdxType:"Canvas"},e(H,{name:"Top Bar",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:P`
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
          `}}},mdxType:"Story"},mr.bind({}))),e(le,{story:"Top Bar",mdxType:"ArgsTable"}),e("a",{name:"subcomponent-menu"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar menu")),e("p",null,"A component that composes together an activator and a popover containing an action list to create a dropdown menu."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actions"),e("td",{parentName:"tr",align:null},"ActionListProps","['sections']"),e("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu. Follow Action List component props")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"message"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-message"},"MessageProps")),e("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"open"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the menu is currently open")))),e("br",null),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Events"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@open"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle opening the menu popover")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@close"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle closing the menu popover")))),e("br",null),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Slots"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"#activatorContent"),e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"Accepts an activator component that renders inside of a button that opens the menu")))),e("br",null),e("a",{name:"subcomponent-user-menu"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar user menu")),e("p",null,"A specialized menu component that is activated by a user avatar."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"actions"),e("td",{parentName:"tr",align:null},"{items: IconableAction[]}[]"),e("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"message"),e("td",{parentName:"tr",align:null},e("a",{parentName:"td",href:"#type-message"},"MessageProps")),e("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"name"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string detailing the merchant's full name to be displayed in the user menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"detail"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A string allowing further details on the merchant's name displayed in the user menu")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"initials"),e("td",{parentName:"tr",align:null},"AvatarProps","['initials']"),e("td",{parentName:"tr",align:null},"The merchant's initials, rendered in place of an avatar image when not provided")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"avatar"),e("td",{parentName:"tr",align:null},"AvatarProps","['source']"),e("td",{parentName:"tr",align:null},"An avatar image representing the merchant")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"open"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"A boolean property indicating whether the user menu is currently open")))),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Event"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@toggle"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"A callback function to handle opening and closing the user menu")))),e("br",null),e("a",{name:"type-message"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar menu message")),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"title"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A title for the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"description"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"A description for the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"action"),e("td",{parentName:"tr",align:null},"{onClick(): void; content: string}"),e("td",{parentName:"tr",align:null},"An action to render near the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"link"),e("td",{parentName:"tr",align:null},"{to: string; content: string}"),e("td",{parentName:"tr",align:null},"A link to view the content of the message")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"badge"),e("td",{parentName:"tr",align:null},"{content: string; status: BadgeProps","['status']","}"),e("td",{parentName:"tr",align:null},"A badge to render near the message")))),e("br",null),e("a",{name:"subcomponent-search-field"}),e("h3",null,e("strong",{parentName:"h3"},"Top bar search field")),e("p",null,"A text field component that is tailor-made for a search use-case."),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Prop"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"value"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"Initial value for the input")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"placeholder"),e("td",{parentName:"tr",align:null},"string"),e("td",{parentName:"tr",align:null},"Hint text to display")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"focused"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Force the focus state on the input")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"active"),e("td",{parentName:"tr",align:null},"boolean"),e("td",{parentName:"tr",align:null},"Force a state where search is active but the text field component is not focused")))),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Events"),e("th",{parentName:"tr",align:null},"Type"),e("th",{parentName:"tr",align:null},"Description"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@change(value: string)"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"Callback when value is changed")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@focus"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"Callback when input is focused")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"@blur"),e("td",{parentName:"tr",align:null},"function"),e("td",{parentName:"tr",align:null},"Callback when focus is removed")))))}Eg.isMDXComponent=!0;const nu=mr.bind({});nu.storyName="Top Bar";nu.parameters={storySource:{source:`args => ({
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
          `}}};const Kn={title:"Components / Navigation / Top Bar",component:Qo,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},includeStories:["topBar"]},FE={"Top Bar":"topBar"};Kn.parameters=Kn.parameters||{};Kn.parameters.docs=_(v({},Kn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:FE,mdxComponentAnnotations:Kn},e(Eg,null))});var EE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:mr,topBar:nu,default:Kn});const yr=t=>({components:{VisuallyHidden:lt},template:`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  `}),OE={Template:yr},qE="wrapper";function Og(o){var i=o,{components:t}=i,n=J(i,["components"]);return e(qE,_(v(v({},OE),n),{components:t,mdxType:"MDXLayout"}),e(ne,{title:"Components / Titles and text / Visually Hidden",component:lt,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),e("h1",null,"Visually hidden"),e("p",null,"Use when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden."),e(V,{mdxType:"Canvas"},e(H,{name:"Visually Hidden",parameters:{docs:{source:{code:P`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}},mdxType:"Story"},yr.bind({}))),e(le,{story:"Visually Hidden",mdxType:"ArgsTable"}))}Og.isMDXComponent=!0;const ou=yr.bind({});ou.storyName="Visually Hidden";ou.parameters={storySource:{source:`args => ({
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
          `}}};const Yn={title:"Components / Titles and text / Visually Hidden",component:lt,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},includeStories:["visuallyHidden"]},RE={"Visually Hidden":"visuallyHidden"};Yn.parameters=Yn.parameters||{};Yn.parameters.docs=_(v({},Yn.parameters.docs||{}),{page:()=>e(ae,{mdxStoryNameToKey:RE,mdxComponentAnnotations:Yn},e(Og,null))});var VE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:yr,visuallyHidden:ou,default:Yn});function qg(t){return{"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":gD,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":vD,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":CD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AccountConnection/README.stories.mdx":wD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":$D,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":qD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":UD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":XD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Banner/README.stories.mdx":QD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":l1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":p1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":h1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":x1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":A1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":w1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":B1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":E1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":V1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":W1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CustomProperties/README.stories.mdx":K1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":J1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":n0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":l0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":p0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":b0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":T0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":L0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":M0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":$0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":q0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":j0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":X0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":Q0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":a$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":s$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":u$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":y$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":f$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/MediaCard/README.stories.mdx":S$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":P$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":B$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":O$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":H$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":G$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":Q$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":iF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":cF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":mF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":fF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":SF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":LF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SettingToggle/README.stories.mdx":_F,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":$F,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":qF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":UF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":XF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":QF,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx":nE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":rE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":pE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":hE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":xE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":AE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":wE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":BE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":EE,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":VE}[t]}Object.assign(qg,{keys:()=>["/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AccountConnection/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Banner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CustomProperties/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/MediaCard/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SettingToggle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx"],resolve:t=>({"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":"./.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":"./.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":"./.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AccountConnection/README.stories.mdx":"./src/components/AccountConnection/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":"./src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":"./src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":"./src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":"./src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Banner/README.stories.mdx":"./src/components/Banner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":"./src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":"./src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":"./src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":"./src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":"./src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":"./src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":"./src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":"./src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":"./src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":"./src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/CustomProperties/README.stories.mdx":"./src/components/CustomProperties/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":"./src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":"./src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":"./src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":"./src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":"./src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":"./src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":"./src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":"./src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":"./src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":"./src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":"./src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":"./src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":"./src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":"./src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":"./src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":"./src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":"./src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":"./src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/MediaCard/README.stories.mdx":"./src/components/MediaCard/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":"./src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":"./src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":"./src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":"./src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":"./src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":"./src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":"./src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":"./src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":"./src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":"./src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":"./src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":"./src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SettingToggle/README.stories.mdx":"./src/components/SettingToggle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":"./src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":"./src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":"./src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":"./src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":"./src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx":"./src/components/Tabs/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":"./src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":"./src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":"./src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":"./src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":"./src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":"./src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":"./src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":"./src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":"./src/components/VisuallyHidden/README.stories.mdx"})[t]});function HE(){kh(qg,{hot:!1},!1)}const UE=[_h,Ih,Bh,Dh,$h,Fh,Eh,Oh,qh,Rh,Vh,Hh,dD].filter(Boolean);UE.forEach(t=>{Object.keys(t).forEach(n=>{const o=t[n];switch(n){case"args":case"argTypes":return Mh.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(i=>Ph(i,!1));case"loaders":return o.forEach(i=>wh(i,!1));case"parameters":return yu(v({},o),!1);case"argTypesEnhancers":return o.forEach(i=>Nh(i));case"argsEnhancers":return o.forEach(i=>Lh(i));case"globals":case"globalTypes":{const i={};return i[n]=o,yu(i,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(n+" was not supported :( !")}})});HE();
//# sourceMappingURL=iframe.c7cbd632.js.map
