var hd=Object.defineProperty,gd=Object.defineProperties;var fd=Object.getOwnPropertyDescriptors;var hn=Object.getOwnPropertySymbols;var Sl=Object.prototype.hasOwnProperty,Cl=Object.prototype.propertyIsEnumerable;var ti=(e,o,a)=>o in e?hd(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,y=(e,o)=>{for(var a in o||(o={}))Sl.call(o,a)&&ti(e,a,o[a]);if(hn)for(var a of hn(o))Cl.call(o,a)&&ti(e,a,o[a]);return e},w=(e,o)=>gd(e,fd(o));var K=(e,o)=>{var a={};for(var s in e)Sl.call(e,s)&&o.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&hn)for(var s of hn(e))o.indexOf(s)<0&&Cl.call(e,s)&&(a[s]=e[s]);return a};var je=(e,o,a)=>(ti(e,typeof o!="symbol"?o+"":o,a),a);import{i as bd,d as L,o as se,a as Ke,b as jo,s as vd,t as Ir,c as Dn,e as ki,r as A,f as Cn,p as Fe,g as d,h as Xo,j as p,k as h,m as pe,u as n,l as O,n as r,q as Be,w as De,v as Br,x as P,y as v,z as Le,A as u,B as Ce,C as _,D as S,E as X,F as te,G as $,H as ye,I as Oe,J as _t,K as An,L as fe,M as Ve,N as Pr,O as xd,P as Al,Q as mi,R as Td,T as Sd,S as Mt,U as Nr,V as xa,W as wi,X as Dr,Y as $r,Z as Mi,_ as Te,$ as Cd,a0 as Ad,a1 as Fr,a2 as ha,a3 as qt,a4 as Ld,a5 as _d,a6 as kd,a7 as wd,a8 as Er,a9 as Or,aa as ut,ab as Md,ac as Id,ad as Bd,ae as Pd,af as Ln,ag as _n,ah as Nd,ai as kn,aj as Dd,ak as Ll,al as _l,am as $d,an as Fd,ao as qr,ap as Ed,aq as Od,ar as qd,as as kl,at as Rd,au as Rr,av as Hd,aw as Vd,ax as yi,ay as Hr,az as Ud,aA as jd,aB as zd,aC as Sa,aD as t,aE as Y,aF as Q,aG as k,aH as Wd,aI as wn,aJ as hi,aK as Xd,aL as wl,aM as R,aN as H,aO as oe,aP as Ml,aQ as Gd,aR as Il,aS as Kd,aT as Vr,aU as Ur,aV as Yd,aW as jr,aX as Qd,aY as Jd,aZ as Zd,a_ as ep,a$ as tp,b0 as op,b1 as ap,b2 as np,b3 as Bl,b4 as sp,b5 as ip,b6 as lp,b7 as rp,b8 as cp,b9 as up,ba as dp,bb as pp,bc as mp,bd as yp,be as hp,bf as gp,bg as fp,bh as bp,bi as vp,bj as xp,bk as Tp,bl as Sp}from"./vendor.09cee13b.js";const Cp=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}};Cp();const Mn='a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]:not([tabindex="-1"])',gi="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",Ap='a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';function $n(e,o){if(e.matches)return e.matches(o);const a=(e.ownerDocument||document).querySelectorAll(o);let s=a.length;for(;s>=0&&a.item(s)!==e;)return s-=1,s>-1}function oi(e){const o="a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";return $n(e,o)?e:e.querySelector(o)}function Lp(e,o){const a=[...document.querySelectorAll(gi)],s=a.indexOf(e)+1,i=a.slice(s);for(const l of i)if(bd(l)&&(!o||o&&o(l)))return l;return null}function _p(e,o){const a=Lp(e,o);return a&&a instanceof HTMLElement?(a.focus(),!0):!1}function zr(e,o=!0){return!o&&$n(e,gi)?e:e.querySelector(gi)}function Wr(e){return e.querySelectorAll(Ap)}function Xr(e,o){let a=0;for(const s of e){if(s===o)break;a+=1}return a===e.length?-1:a}function kp(e,o){const a=Wr(e),s=Xr(a,o);s===-1?a[0].focus():a[(s-1+a.length)%a.length].focus()}function wp(e,o){const a=Wr(e),s=Xr(a,o);s===-1?a[0].focus():a[(s+1)%a.length].focus()}const zo=e=>{e.currentTarget.blur()};function Fn(e,o=!0){var a;(a=zr(e,o))==null||a.focus()}function Gr(e,o=!0){return!o&&$n(e,Mn)?e:e.querySelector(Mn)}function Kr(e,o=!0){if(!o&&$n(e,Mn))return e;const a=e.querySelectorAll(Mn);return a[a.length-1]}function Mp(e,o=!0){const a=Gr(e,o);return a?(a.focus(),!0):!1}function Ip(e,o=!0){const a=Kr(e,o);return a?(a.focus(),!0):!1}const Bp={inheritAttrs:!1,render(){return null}},et=L(w(y({},Bp),{props:{keyCode:{type:String,required:!0},keyEvent:{type:String,default:"keyup"},handler:{type:Function,required:!0}},setup(e){const o=e;function a(s){s.key===o.keyCode&&o.handler(s)}return se(()=>document.addEventListener(o.keyEvent,a)),Ke(()=>document.removeEventListener(o.keyEvent,a)),()=>{}}}));et.__docgenInfo={exportName:"default",displayName:"KeypressListener",description:"",tags:{},props:[{name:"keyCode",type:{name:"String as () => Key"},required:!0},{name:"keyEvent",type:{name:"String as () => KeyEvent"},defaultValue:{func:!1,value:"'keyup'"}},{name:"handler",type:{name:"func"},required:!0}]};var We=(e=>(e.Backspace="Backspace",e.Tab="Tab",e.Enter="Enter",e.Shift="Shift",e.Ctrl="Ctrl",e.Alt="Alt",e.Pause="Pause",e.CapsLock="CapsLock",e.Escape="Escape",e.Space="Space",e.PageUp="PageUp",e.PageDown="PageDown",e.End="End",e.Home="Home",e.ArrowRight="ArrowRight",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.Insert="Insert",e.Delete="Delete",e.Key0="Key0",e.Key1="Key1",e.Key2="Key2",e.Key3="Key3",e.Key4="Key4",e.Key5="Key5",e.Key6="Key6",e.Key7="Key7",e.Key8="Key8",e.Key9="Key9",e.KeyA="KeyA",e.KeyB="KeyB",e.KeyC="KeyC",e.KeyD="KeyD",e.KeyE="KeyE",e.KeyF="KeyF",e.KeyG="KeyG",e.KeyH="KeyH",e.KeyI="KeyI",e.KeyJ="KeyJ",e.KeyK="KeyK",e.KeyL="KeyL",e.KeyM="KeyM",e.KeyN="KeyN",e.KeyO="KeyO",e.KeyP="KeyP",e.KeyQ="KeyQ",e.KeyR="KeyR",e.KeyS="KeyS",e.KeyT="KeyT",e.KeyU="KeyU",e.KeyV="KeyV",e.KeyW="KeyW",e.KeyX="KeyX",e.KeyY="KeyY",e.KeyZ="KeyZ",e.LeftMeta="LeftMeta",e.RightMeta="RightMeta",e.Select="Select",e.Numpad0="Numpad0",e.Numpad1="Numpad1",e.Numpad2="Numpad2",e.Numpad3="Numpad3",e.Numpad4="Numpad4",e.Numpad5="Numpad5",e.Numpad6="Numpad6",e.Numpad7="Numpad7",e.Numpad8="Numpad8",e.Numpad9="Numpad9",e.Multiply="Multiply",e.Add="Add",e.Subtract="Subtract",e.Decimal="Decimal",e.Divide="Divide",e.F1="F1",e.F2="F2",e.F3="F3",e.F4="F4",e.F5="F5",e.F6="F6",e.F7="F7",e.F8="F8",e.F9="F9",e.F10="F10",e.F11="F11",e.F12="F12",e.NumLock="NumLock",e.ScrollLock="ScrollLock",e.Semicolon="Semicolon",e.Equals="Equals",e.Comma="Comma",e.Dash="Dash",e.Period="Period",e.ForwardSlash="ForwardSlash",e.GraveAccent="GraveAccent",e.OpenBracket="OpenBracket",e.BackSlash="BackSlash",e.CloseBracket="CloseBracket",e.SingleQuote="SingleQuote",e))(We||{});const Pp="Polaris-ActionList",Np="Polaris-ActionList__Actions",Dp="Polaris-ActionList__Section",$p="Polaris-ActionList__Title",Fp="Polaris-ActionList--firstSectionWithTitle",Ep="Polaris-ActionList__Item",Op="Polaris-ActionList--active",qp="Polaris-ActionList--destructive",Rp="Polaris-ActionList--disabled",Hp="Polaris-ActionList__Prefix",Vp="Polaris-ActionList__Suffix",Up="Polaris-ActionList__Content",jp="Polaris-ActionList__ContentBlock",zp="Polaris-ActionList__ContentBlockInner",Wp="Polaris-ActionList__Text";var Ie={ActionList:Pp,"Section-withoutTitle":"Polaris-ActionList__Section--withoutTitle",Actions:Np,Section:Dp,Title:$p,firstSectionWithTitle:Fp,Item:Ep,active:Op,destructive:qp,disabled:Rp,Prefix:Hp,Suffix:Vp,Content:Up,ContentBlock:jp,ContentBlockInner:zp,Text:Wp};class Vt{constructor({top:o=0,left:a=0,width:s=0,height:i=0}={}){je(this,"top");je(this,"left");je(this,"width");je(this,"height");this.top=o,this.left=a,this.width=s,this.height=i}static get zero(){return new Vt}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}}function pt(e){if(!(e instanceof Element))return new Vt({width:window.innerWidth,height:window.innerHeight});const o=e.getBoundingClientRect();return new Vt({top:o.top,left:o.left,width:o.width,height:o.height})}const gn=1e3/60;function Yr(e){return e===document}function Xp(e){return Yr(e)?document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop}function Gp(e,o){const a=e.left,s=e.left+e.width,i=o.left;return o.left+o.width<a||s<i}class Kp{constructor(o){je(this,"stickyItems",[]);je(this,"stuckItems",[]);je(this,"container",null);je(this,"topBarOffset",0);je(this,"handleResize",jo(()=>{this.manageStickyItems()},gn,{leading:!0,trailing:!0,maxWait:gn}));je(this,"handleScroll",jo(()=>{this.manageStickyItems()},gn,{leading:!0,trailing:!0,maxWait:gn}));o&&this.setContainer(o)}registerStickyItem(o){this.stickyItems.push(o)}unregisterStickyItem(o){const a=this.stickyItems.findIndex(({stickyNode:s})=>o===s);this.stickyItems.splice(a,1)}setContainer(o){this.container=o,Yr(o)&&this.setTopBarOffset(o),this.container.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.manageStickyItems()}removeScrollListener(){this.container&&(this.container.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize))}manageStickyItems(){if(this.stickyItems.length<=0)return;const o=this.container?Xp(this.container):0,a=pt(this.container).top+this.topBarOffset;this.stickyItems.forEach(s=>{const{handlePositioning:i}=s,{sticky:l,top:c,left:m,width:b}=this.evaluateStickyItem(s,o,a);this.updateStuckItems(s,l),i(l,c,m,b)})}evaluateStickyItem(o,a,s){var I;const{stickyNode:i,placeHolderNode:l,boundingElement:c,offset:m,disableWhenStacked:b}=o;if(b&&vd().matches)return{sticky:!1,top:0,left:0,width:"auto"};const T=m?this.getOffset(i)+parseInt(Ir.spacing["5"],10):this.getOffset(i),f=a+T,g=l.getBoundingClientRect().top-s+a,x=s+T,{width:C}=l.getBoundingClientRect(),{left:B}=l.getBoundingClientRect();let N;if(c==null)N=f>=g;else{const q=i.getBoundingClientRect().height||((I=i.firstElementChild)==null?void 0:I.getBoundingClientRect().height)||0,E=c.getBoundingClientRect().bottom-q+a-s;N=f>=g&&f<E}return{sticky:N,top:x,left:B,width:C}}updateStuckItems(o,a){const{stickyNode:s}=o;a&&!this.isNodeStuck(s)?this.addStuckItem(o):!a&&this.isNodeStuck(s)&&this.removeStuckItem(o)}addStuckItem(o){this.stuckItems.push(o)}removeStuckItem(o){const{stickyNode:a}=o,s=this.stuckItems.findIndex(({stickyNode:i})=>a===i);this.stuckItems.splice(s,1)}getOffset(o){if(this.stuckItems.length===0)return 0;let a=0,s=0;const i=this.stuckItems.length,l=pt(o);for(;s<i;){const c=this.stuckItems[s].stickyNode;if(c!==o){const m=pt(c);Gp(l,m)||(a+=pt(c).height)}else break;s+=1}return a}isNodeStuck(o){return this.stuckItems.findIndex(({stickyNode:s})=>o===s)>=0}setTopBarOffset(o){const a=o.querySelector(`:not(${Dn.selector}) ${ki.selector}`);this.topBarOffset=a?a.clientHeight:0}}const Yp="Polaris-Scrollable",Qp="Polaris-Scrollable--horizontal",Jp="Polaris-Scrollable--vertical",Zp="Polaris-Scrollable--verticalHasScrolling",em="Polaris-Scrollable--hasTopShadow",tm="Polaris-Scrollable--hasBottomShadow";var Xt={Scrollable:Yp,horizontal:Qp,vertical:Jp,verticalHasScrolling:Zp,hasTopShadow:em,hasBottomShadow:tm};const om=["tabindex"],ht=L({props:{vertical:{type:Boolean,default:!0},horizontal:{type:Boolean},shadow:{type:Boolean},hint:{type:Boolean},focusable:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const a=e,s=V=>{V.preventDefault()},i=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},l=100,c=.2,m=.2,b=["scroll","touchmove","wheel"],T=i(),f=2,g=A(null),x=A(!1),C=A(!1),B=A(0),N=A(!1),I=Cn({stickyManager:new Kp}),q=V=>{B.value=V};Fe("stickyManagerContext",I.stickyManager),Fe("scrollToPositionContext",q);const E=d(()=>O(Xt.Scrollable,a.vertical&&Xt.vertical,a.horizontal&&Xt.horizontal,x.value&&Xt.hasTopShadow,C.value&&Xt.hasBottomShadow,a.vertical&&N.value&&Xt.verticalHasScrolling)),F=()=>{if(!g.value)return;const{scrollTop:V,scrollHeight:Z,clientHeight:re}=g.value,ie=Boolean(a.shadow&&!(V+re>=Z)),_e=Boolean(a.shadow&&V>0&&B.value>0),z=Z>re,ne=Z-V<=re+f;z&&ne&&o("scrolled-to-bottom"),x.value=_e,C.value=ie,B.value=V,N.value=z},W=jo(()=>{F()},50,{trailing:!0}),D=(V=!0)=>{!g.value||b.forEach(Z=>{var re,ie;V?(re=g.value)==null||re.addEventListener(Z,s):(ie=g.value)==null||ie.removeEventListener(Z,s)})},U=()=>{const V=B.value*m;B.value=V<c?0:B.value-V,B.value>0?window.requestAnimationFrame(U):D(!1)},M=()=>{if(!g.value)return;const{clientHeight:V,scrollHeight:Z}=g.value;if(T||B.value>0||Z<=V)return;const re=Z-V;D(),B.value=re>l?l:re,window.requestAnimationFrame(U)};return se(()=>{!g.value||(I.stickyManager.setContainer(g.value),g.value.scrollTop=B.value,g.value.addEventListener("scroll",()=>{window.requestAnimationFrame(F)}),window.addEventListener("resize",W),window.requestAnimationFrame(()=>{F(),a.hint&&M()}))}),Xo(()=>{g.value&&B.value>0&&(g.value.scrollTop=B.value)}),Ke(()=>{!g.value||(g.value.removeEventListener("scroll",F),window.removeEventListener("resize",W),I.stickyManager.removeScrollListener())}),(V,Z)=>(r(),p("div",pe({ref_key:"scrollArea",ref:g},n(Dn).props,{class:n(E),tabindex:e.focusable?0:void 0}),[h(V.$slots,"default")],16,om))}});ht.__docgenInfo={exportName:"default",displayName:"Scrollable",description:"",tags:{},props:[{name:"vertical",description:"Scroll content vertically",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"horizontal",description:"Scroll content horizontally",required:!1,type:{name:"boolean"}},{name:"shadow",description:"Add a shadow when content is scrollable",required:!1,type:{name:"boolean"}},{name:"hint",description:"Slightly hints content upon mounting when scrollable",required:!1,type:{name:"boolean"}},{name:"focusable",description:"Adds a tabIndex to scrollable when children are not focusable",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};class Ii extends Error{constructor(o=""){super(`${o&&`${o} `}Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-appprovider--page for implementation instructions.`);this.name="MissingAppProviderError"}}class am extends Error{constructor(o=""){super(`${o&&`${o} `}Your component must be wrapped in a <Frame> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-frame--page for implementation instructions.`);this.name="MissingFrameError"}}function we(){const e=Be("uniqueIdFactory"),o=A("");function a(s="",i=""){if(!e)throw new Ii("No UniqueIdFactory was provided.");return i||(o.value||(o.value=e.nextId(s)),o.value)}return{uniqueIdRef:o,useUniqueId:a}}function nm(e){const o=Be("focusManager"),{useUniqueId:a,uniqueIdRef:s}=we();De([()=>e.trapping],()=>{e.trapping&&s&&o.add(s.value)});const i=d(()=>o.trapFocusList[0]===s.value);return Br(()=>{if(!o)throw new Ii("No FocusManager was provided.")}),se(()=>{const l=a();e.trapping&&o.add(l)}),Ke(()=>{s.value&&o.remove(s.value)}),{canSafelyFocus:i}}const sm=["id"],Bi=L({setup(e){const o=Be("scrollToPositionContext",()=>!1),a=A(null),{useUniqueId:s}=we(),i=s("ScrollTo");return se(()=>{!o||!a.value||o(a.value.offsetTop)}),(l,c)=>(r(),p("a",{id:n(i),ref_key:"anchorNode",ref:a},null,8,sm))}});Bi.__docgenInfo={exportName:"default",displayName:"ScrollTo",description:"",tags:{}};const yt=L({props:{to:null,url:null,external:{type:Boolean}},setup(e){return(o,a)=>(r(),P(Le(e.to?"router-link":"a"),{href:e.url,to:e.to,target:e.to?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0},{default:v(()=>[h(o.$slots,"default")]),_:3},8,["href","to","target","rel"]))}});yt.__docgenInfo={exportName:"default",displayName:"UnstyledLink",description:"",tags:{},props:[{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const im="Polaris-TextStyle--variationPositive",lm="Polaris-TextStyle--variationNegative",rm="Polaris-TextStyle--variationWarning",cm="Polaris-TextStyle--variationCode",um="Polaris-TextStyle--variationStrong",dm="Polaris-TextStyle--variationSubdued";var pm={variationPositive:im,variationNegative:lm,variationWarning:rm,variationCode:cm,variationStrong:um,variationSubdued:dm};const Ca=L({props:{variation:{type:String,default:null}},setup(e){const o=e;function a(l){return l==="code"?"code":"span"}const s=A(a(o.variation)),i=d(()=>{const l=o.variation&&Ce("variation",o.variation);return O(l&&pm[l])});return(l,c)=>(r(),P(Le(s.value),{class:u(n(i))},{default:v(()=>[h(l.$slots,"default")]),_:3},8,["class"]))}});Ca.__docgenInfo={exportName:"default",displayName:"TextStyle",description:"",tags:{},props:[{name:"variation",description:"Give text additional visual meaning",tags:{},values:["positive | negative | strong | subdued | code"],type:{name:"String as () => Variation"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]};const mm="Polaris-Icon",ym="Polaris-Icon--applyColor",hm="Polaris-Icon--hasBackdrop",gm="Polaris-Icon--colorBase",fm="Polaris-Icon--colorSubdued",bm="Polaris-Icon--colorCritical",vm="Polaris-Icon--colorInteractive",xm="Polaris-Icon--colorWarning",Tm="Polaris-Icon--colorHighlight",Sm="Polaris-Icon--colorSuccess",Cm="Polaris-Icon--colorPrimary",Am="Polaris-Icon__Svg",Lm="Polaris-Icon__Img",_m="Polaris-Icon__Placeholder";var Nt={Icon:mm,applyColor:ym,hasBackdrop:hm,colorBase:gm,colorSubdued:fm,colorCritical:bm,colorInteractive:vm,colorWarning:xm,colorHighlight:Tm,colorSuccess:Sm,colorPrimary:Cm,Svg:Am,Img:Lm,Placeholder:_m},Pl={env:"production"};const km="Polaris-VisuallyHidden";var wm={VisuallyHidden:km};const Ue=L({setup(e){return(o,a)=>(r(),p("span",{class:u(n(wm).VisuallyHidden)},[h(o.$slots,"default")],2))}});Ue.__docgenInfo={exportName:"default",displayName:"VisuallyHidden",description:"",tags:{},slots:[{name:"default"}]};const Mm=["src"],ae=L({props:{source:null,color:null,backdrop:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,a=["base","critical","highlight","success","warning"],s=d(()=>o.color&&Nt[Ce("color",o.color)]),i=d(()=>O(Nt.Icon,s.value,o.color&&Nt.applyColor,o.backdrop&&Nt.hasBackdrop)),l=d(()=>typeof o.source=="object"?"icon":o.source==="placeholder"?"placeholder":"external"),c=d(()=>l.value==="external"?encodeURIComponent(String(o.source)):""),m=()=>{o.color&&l.value==="external"&&Pl.env==="development"&&console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.")},b=()=>{o.backdrop&&o.color&&!a.includes(o.color)&&Pl.env==="development"&&console.warn(`The ${o.color} variant does not have a supported backdrop color`)};return se(()=>{m(),b()}),(T,f)=>(r(),p("span",{class:u(n(i))},[_(n(Ue),null,{default:v(()=>[S("span",null,X(e.accessibilityLabel),1)]),_:1}),n(l)==="icon"?(r(),P(Le(e.source),{key:0,class:u(n(Nt).Svg)},null,8,["class"])):n(l)==="placeholder"?(r(),p("div",{key:1,class:u(n(Nt).Placeholder)},null,2)):(r(),p("img",{key:2,class:u(n(Nt).Img),src:`data:image/svg+xml;utf8,${n(c)}`,alt:"","aria-hidden":"true"},null,10,Mm))],2))}});ae.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"source",description:"The contents to display in the icon",required:!0,type:{name:"IconSource"}},{name:"color",description:"Set the color for the icon",required:!1,type:{name:"Color"}},{name:"backdrop",description:"Show a backdrop behind the icon",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}]};const Im="Polaris-Badge",Bm="Polaris-Badge--sizeSmall",Pm="Polaris-Badge--statusSuccess",Nm="Polaris-Badge--statusInfo",Dm="Polaris-Badge--statusAttention",$m="Polaris-Badge--statusWarning",Fm="Polaris-Badge--statusCritical",Em="Polaris-Badge--statusNew",Om="Polaris-Badge__Pip",qm="Polaris-Badge--progressIncomplete",Rm="Polaris-Badge--progressPartiallyComplete",Hm="Polaris-Badge--progressComplete",Vm="Polaris-Badge--withinFilter";var Gt={Badge:Im,sizeSmall:Bm,statusSuccess:Pm,statusInfo:Nm,statusAttention:Dm,statusWarning:$m,statusCritical:Fm,statusNew:Em,Pip:Om,progressIncomplete:qm,progressPartiallyComplete:Rm,progressComplete:Hm,withinFilter:Vm};const Re=L({props:{status:null,progress:null,size:{default:"medium"},statusAndProgressLabelOverride:null},setup(e){const o=e,a=Be("withinFilterContext",!1),s="medium",i=A(""),l=A(""),c=d(()=>O(Gt.Badge,o.status&&Gt[Ce("status",o.status)],o.progress&&Gt[Ce("progress",o.progress)],o.size&&o.size!==s&&Gt[Ce("size",o.size)],a&&Gt.withinFilter)),m=d(()=>o.statusAndProgressLabelOverride||l.value||i.value),b=d(()=>o.statusAndProgressLabelOverride||`${l.value} ${i.value}`);return se(()=>{switch(o.progress){case"incomplete":i.value="incomplete";break;case"partiallyComplete":i.value="partiallyComplete";break;case"complete":i.value="complete";break}switch(o.status){case"info":l.value="info";break;case"success":l.value="success";break;case"warning":l.value="warning";break;case"critical":l.value="critical";break;case"attention":l.value="attention";break;case"new":l.value="new";break}}),(T,f)=>(r(),p("span",{class:u(n(c))},[n(m)?(r(),p(te,{key:0},[i.value?(r(),p("span",{key:0,class:u(n(Gt).Pip)},[_(n(Ue),null,{default:v(()=>[ye(X(n(b)),1)]),_:1})],2)):(r(),P(n(Ue),{key:1},{default:v(()=>[ye(X(n(b)),1)]),_:1}))],64)):$("",!0),h(T.$slots,"default")],2))}});Re.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"status",description:"Colors and labels the badge with the given status.",required:!1,type:{name:"Status"}},{name:"progress",description:"Render a pip showing the progress of a given task.",required:!1,type:{name:"Progress"}},{name:"size",description:"Medium or small size.",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"statusAndProgressLabelOverride",description:"Pass a custom accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const Um={inheritAttrs:!1},fi=L(w(y({},Um),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const o=e,a=d(()=>o.ellipsis&&o.content?`${o.content}\u2026`:o.content);return(s,i)=>(r(),p("span",{class:u(n(Ie).Content)},[e.prefixId?(r(),p("span",{key:0,class:u(n(Ie).Prefix)},[h(s.$slots,"prefix")],2)):e.icon?(r(),p("span",{key:1,class:u(n(Ie).Prefix)},[_(n(ae),{source:e.icon},null,8,["source"])],2)):e.image?(r(),p("span",{key:2,class:u(n(Ie).Prefix),role:"presentation",style:Oe({backgroundImage:`url(${e.image}`})},null,6)):$("",!0),S("span",{class:u(n(Ie).Text)},[e.helpText?(r(),p("span",{key:0,class:u(n(Ie).ContentBlock)},[S("span",{class:u(n(Ie).ContentBlockInner)},X(n(a)),3),_(n(Ca),{variation:"subdued"},{default:v(()=>[ye(X(e.helpText),1)]),_:1})],2)):(r(),p(te,{key:1},[ye(X(n(a)),1)],64))],2),e.badge?(r(),p("span",{key:3,class:u(n(Ie).Suffix)},[_(n(Re),{status:e.badge.status},{default:v(()=>[ye(X(e.badge.content),1)]),_:1},8,["status"])],2)):$("",!0),e.suffixId?(r(),p("span",{key:4,class:u(n(Ie).Suffix)},[h(s.$slots,"suffix")],2)):$("",!0)],2))}}));fi.__docgenInfo={exportName:"default",displayName:"ContentElement",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],slots:[{name:"prefix"},{name:"suffix"}]};const jm=["role"],zm=["id","disabled","aria-label","role"],Wm={inheritAttrs:!1},Qr=L(w(y({},Wm),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},emits:["action"],setup(e,{emit:o}){const a=e,s=d(()=>O(Ie.Item,a.disabled&&Ie.disabled,a.destructive&&Ie.destructive,a.active&&Ie.active)),i=d(()=>({badge:a.badge,content:a.content,helpText:a.helpText,icon:a.icon,prefixId:a.prefixId,suffixId:a.suffixId,image:a.image,disabled:a.disabled,ellipsis:a.ellipsis,role:a.role})),l=d(()=>a.role==="menuitem"?"presentation":void 0),c=()=>{a.disabled||o("action")};return(m,b)=>(r(),p("li",{role:n(l)},[e.active?(r(),P(n(Bi),{key:0})):$("",!0),e.url?(r(),P(n(yt),{key:1,id:e.id,url:e.disabled?void 0:e.url,class:u(n(s)),external:e.external,"aria-label":e.accessibilityLabel,role:e.role,onClick:c},{default:v(()=>[_(fi,_t(An(n(i))),{suffix:v(()=>[h(m.$slots,"suffix")]),prefix:v(()=>[h(m.$slots,"prefix")]),_:3},16)]),_:3},8,["id","url","class","external","aria-label","role"])):(r(),p("button",{key:2,id:e.id,type:"button",class:u(n(s)),disabled:e.disabled,"aria-label":e.accessibilityLabel,role:e.role,onClick:c,onMouseup:b[0]||(b[0]=(...T)=>n(zo)&&n(zo)(...T))},[_(fi,_t(An(n(i))),{suffix:v(()=>[h(m.$slots,"suffix")]),prefix:v(()=>[h(m.$slots,"prefix")]),_:3},16)],42,zm))],8,jm))}}));Qr.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"action"}],slots:[{name:"suffix"},{name:"prefix"}]};const Xm=["role","tabIndex"],Gm={inheritAttrs:!1},bi=L(w(y({},Gm),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const a=e,s=d(()=>a.section.title?void 0:Ie["Section-withoutTitle"]),i=d(()=>O(Ie.Title,a.firstSection&&Ie.firstSectionWithTitle)),l=d(()=>{let m;switch(a.actionRole){case"option":m="presentation";break;case"menuitem":m=a.hasMultipleSections?"presentation":"menu";break;default:m=void 0;break}return m}),c=m=>{m&&m(),o("action-any-item")};return(m,b)=>(r(),p("div",{class:u(n(s))},[e.section.title?(r(),p("p",{key:0,class:u(n(i))},X(e.section.title),3)):$("",!0),S("ul",{class:u(n(Ie).Actions),role:n(l),tabIndex:e.hasMultipleSections?void 0:-1},[(r(!0),p(te,null,fe(e.section.items,(B,C)=>{var N=B,{content:T,helpText:f,onAction:g}=N,x=K(N,["content","helpText","onAction"]);return r(),P(n(Qr),pe({key:`${T}-${C}`,content:T,helpText:f,role:e.actionRole},y({},x),{onAction:I=>c(g)}),Ve({_:2},[x.prefixId?{name:"prefix",fn:v(()=>[h(m.$slots,`prefix-${x.prefixId}`)])}:void 0,x.suffixId?{name:"suffix",fn:v(()=>[h(m.$slots,`suffix-${x.suffixId}`)])}:void 0]),1040,["content","helpText","role","onAction"])}),128))],10,Xm)],2))}}));bi.__docgenInfo={exportName:"default",displayName:"SectionMarkup",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Km={inheritAttrs:!1},Jr=L(w(y({},Km),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const a=e,s=d(()=>{const{section:i,hasMultipleSections:l,actionRole:c,firstSection:m}=a;return{section:i,hasMultipleSections:l,actionRole:c,firstSection:m}});return(i,l)=>e.hasMultipleSections?(r(),p("li",{key:0,class:u(n(Ie).Section),role:"presentation"},[_(bi,pe(n(s),{onActionAnyItem:l[0]||(l[0]=c=>o("action-any-item"))}),Ve({_:2},[fe(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:v(()=>[h(i.$slots,`prefix-${c}`)])})),fe(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:v(()=>[h(i.$slots,`suffix-${c}`)])}))]),1040)],2)):(r(),P(bi,pe({key:1},n(s),{onActionAnyItem:l[1]||(l[1]=c=>o("action-any-item"))}),Ve({_:2},[fe(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:v(()=>[h(i.$slots,`prefix-${c}`)])})),fe(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:v(()=>[h(i.$slots,`suffix-${c}`)])}))]),1040))}}));Jr.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Ym={inheritAttrs:!1},Ye=L(w(y({},Ym),{props:{items:{default:void 0},sections:{default:()=>[]},actionRole:{default:void 0}},emits:["action-any-item"],setup(e,{emit:o}){const a=e,s=A(null),i=d(()=>a.items?[{items:a.items},...a.sections]:a.sections?a.sections:[]),l=d(()=>i.value.length>1),c=d(()=>l.value?"ul":"div"),m=d(()=>l.value&&a.actionRole==="menuitem"?"menu":void 0),b=d(()=>l.value&&a.actionRole==="menuitem"?-1:void 0),T=g=>{g.preventDefault();const x=g.target;s.value&&x&&s.value.contains(x)&&kp(s.value,x)},f=g=>{g.preventDefault();const x=g.target;s.value&&x&&s.value.contains(x)&&wp(s.value,x)};return(g,x)=>(r(),P(Le(n(c)),{ref_key:"actionListRef",ref:s,role:n(m),class:u(n(O)(n(Ie).ActionList)),tabIndex:n(b)},{default:v(()=>[(r(!0),p(te,null,fe(n(i),(C,B)=>(r(),p(te,null,[C.items.length>0?(r(),P(n(Jr),{key:C.title||B,firstSection:B===0,section:C,hasMultipleSections:n(l),actionRole:e.actionRole,onActionAnyItem:x[0]||(x[0]=N=>o("action-any-item"))},Ve({_:2},[fe(C.items,({prefixId:N})=>({name:`prefix-${N}`,fn:v(()=>[h(g.$slots,`prefix-${N}`)])})),fe(C.items,({suffixId:N})=>({name:`suffix-${N}`,fn:v(()=>[h(g.$slots,`suffix-${N}`)])}))]),1032,["firstSection","section","hasMultipleSections","actionRole"])):$("",!0)],64))),256)),e.actionRole==="menuitem"?(r(),p(te,{key:0},[_(n(et),{keyEvent:"keydown",keyCode:n(We).ArrowDown,handler:f},null,8,["keyCode"]),_(n(et),{keyEvent:"keydown",keyCode:n(We).ArrowUp,handler:T},null,8,["keyCode"])],64)):$("",!0)]),_:3},8,["role","class","tabIndex"]))}}));Ye.__docgenInfo={exportName:"default",displayName:"ActionList",description:"",tags:{},props:[{name:"items",description:"Collection of actions for list",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"undefined"}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"menuitem"'}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Nl="data-lock-scrolling",Dl="data-lock-scrolling-wrapper";let fn=0;class Qm{constructor(){this.scrollLocks=0,this.locked=!1}registerScrollLock(){this.scrollLocks+=1,this.handleScrollLocking()}unregisterScrollLock(){this.scrollLocks-=1,this.handleScrollLocking()}handleScrollLocking(){if(Pr)return;const{scrollLocks:o}=this,{body:a}=document,s=a.firstElementChild;o===0?(a.removeAttribute(Nl),s&&s.removeAttribute(Dl),window.scroll(0,fn),this.locked=!1):o>0&&!this.locked&&(fn=window.pageYOffset,a.setAttribute(Nl,""),s&&(s.setAttribute(Dl,""),s.scrollTop=fn),this.locked=!0)}resetScrollPosition(){fn=0}}class Jm{constructor(o){this.idGenerators={},this.idGeneratorFactory=o}nextId(o){return this.idGenerators[o]||(this.idGenerators[o]=this.idGeneratorFactory(o)),this.idGenerators[o]()}}function Zm(e=""){let o=1;return()=>`Polaris${e}${o++}`}class Zr{constructor(){je(this,"portalIds",[])}register(o){this.portalIds.includes(o)||this.portalIds.push(o)}hasContainer(){return this.portalIds.length}}class ey{constructor(){je(this,"trapFocusList",[])}add(o){this.trapFocusList=[...this.trapFocusList,o]}remove(o){const a=this.trapFocusList.indexOf(o);return a>-1&&(this.trapFocusList=this.trapFocusList.splice(a,1)),a>-1}}const vi="light",$l="polaris-custom-properties",Go=L({props:{colorScheme:{type:String,default:vi},as:{type:String,default:"div"}},setup(e){return se(()=>{let o=document.getElementById($l);o||(o=document.createElement("style"),o.id=$l,o.textContent=xd,document.head.appendChild(o))}),(o,a)=>(r(),P(Le(e.as),{"p-color-scheme":e.colorScheme,style:Oe({color:"var(--p-text-color)"})},{default:v(()=>[h(o.$slots,"default")]),_:3},8,["p-color-scheme","style"]))}});Go.__docgenInfo={exportName:"default",displayName:"CustomProperties",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}},{name:"as",type:{name:"String as () => CustomPropertiesProps['as']"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}]};const ty=S("div",{id:"PolarisPortalsContainer"},null,-1),En=L({props:{colorScheme:{type:String,default:vi}},setup(e){const o=e,a=new Qm,s=new Zr,i=A(new Jm(Zm)),l=new ey,c=A(Al().matches),m=()=>{document.body.setAttribute("p-color-scheme",o.colorScheme||vi),document.body.style.backgroundColor="var(--p-background)",document.body.style.color="var(--p-text)"},b=jo(()=>{c.value!==Al().matches&&(c.value=!c.value)},40,{trailing:!0,leading:!0,maxWait:40});return De(()=>o.colorScheme,(T,f)=>{T!==f&&m()}),se(()=>{document!==null&&m()}),Fe("mediaQueryContext",{isNavigationCollapsed:c.value}),Fe("scrollLockManager",a),Fe("portalManager",s),Fe("uniqueIdFactory",i.value),Fe("focusManager",l),(T,f)=>(r(),P(n(Go),{"color-scheme":e.colorScheme},{default:v(()=>[_(n(He),{event:"resize",handler:n(b)},null,8,["handler"]),h(T.$slots,"default"),ty]),_:3},8,["color-scheme"]))}});En.__docgenInfo={exportName:"default",displayName:"AppProvider",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}}],slots:[{name:"default"}]};const oy="Polaris-Avatar",ay="Polaris-Avatar--hidden",ny="Polaris-Avatar--sizeExtraSmall",sy="Polaris-Avatar--sizeSmall",iy="Polaris-Avatar--sizeMedium",ly="Polaris-Avatar--sizeLarge",ry="Polaris-Avatar--styleOne",cy="Polaris-Avatar--styleTwo",uy="Polaris-Avatar--styleThree",dy="Polaris-Avatar--styleFour",py="Polaris-Avatar--styleFive",my="Polaris-Avatar--hasImage",yy="Polaris-Avatar__Image",hy="Polaris-Avatar__Initials",gy="Polaris-Avatar__Svg";var xt={Avatar:oy,hidden:ay,sizeExtraSmall:ny,sizeSmall:sy,sizeMedium:iy,sizeLarge:ly,styleOne:ry,styleTwo:cy,styleThree:uy,styleFour:dy,styleFive:py,hasImage:my,Image:yy,Initials:hy,Svg:gy};const ai=["one","two","three","four","five"];function fy(e){return e?ai[e.charCodeAt(0)%ai.length]:ai[0]}const by=["src","srcSet","crossOrigin"],vy=["src","crossOrigin"],Ko=L({props:{source:null,crossOrigin:null,sourceSet:null},setup(e){const o=e,a=d(()=>o.sourceSet?o.sourceSet.map(({source:s,descriptor:i})=>`${s} ${i}`).join(","):null);return(s,i)=>n(a)?(r(),p("img",{key:0,src:e.source,srcSet:e.sourceSet,crossOrigin:e.crossOrigin},null,8,by)):(r(),p("img",{key:1,src:e.source,crossOrigin:e.crossOrigin},null,8,vy))}});Ko.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"source",required:!0,type:{name:"string"}},{name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},{name:"sourceSet",required:!1,type:{name:"Array",elements:[{name:"SourceSet"}]}}]};const xy=["aria-label"],Aa=L({props:{size:{default:"medium"},name:{default:void 0},initials:{default:void 0},customer:{type:Boolean,default:void 0},source:{default:void 0},accessibilityLabel:{default:void 0}},emits:["error"],setup(e,{emit:o}){const a=e,s=A("PENDING"),i="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z",l="0.35em",c=d(()=>a.source&&s.value!=="ERRORED"),m=d(()=>{const g=Ce("size",a.size),x=Ce("style",fy(a.name||a.initials));return O(xt.Avatar,g&&xt[g],!a.customer&&xt[x],(c.value||a.initials&&a.initials.length===0)&&s.value!=="LOADED"&&xt.hidden,c.value&&xt.hasImage)}),b=d(()=>a.accessibilityLabel?a.accessibilityLabel:a.name?a.name:a.initials?`Avatar with initials ${a.initials.split("").join(" ")}`:"Avatar"),T=()=>{s.value="LOADED"},f=()=>{s.value="ERRORED",o("error")};return(g,x)=>(r(),p("span",{"aria-label":n(b),role:"img",class:u(n(m))},[n(c)?$("",!0):(r(),p("span",{key:0,class:u(n(xt).Initials)},[(r(),p("svg",{class:u(n(xt).Svg),viewBox:"0 0 40 40"},[e.customer||!e.initials?(r(),p("path",{key:0,fill:"currentColor",d:i})):(r(),p("text",{key:1,x:"50%",y:"50%",dy:l,fill:"currentColor","font-size":"20","text-anchor":"middle"},X(e.initials),1))],2))],2)),e.source&&s.value!=="ERRORED"?(r(),P(n(Ko),{key:1,class:u(n(xt).Image),source:e.source,alt:"",role:"presentation",onLoad:T,onError:f},null,8,["class","source"])):$("",!0)],10,xy))}});Aa.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",description:"Size of avatar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"name",description:"The name of the person",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"initials",description:"Initials of person to display",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"customer",description:"Whether the avatar is for a customer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"source",description:"URL of the avatar image which falls back to initials if the image fails to load",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"accessibilityLabel",description:"Accessible label for the avatar image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"error"}]};const Ty="Polaris-Backdrop",Sy="Polaris-Backdrop--transparent",Cy="Polaris-Backdrop--belowNavigation";var ni={Backdrop:Ty,"fade-in":"Polaris-Backdrop__fade--in",transparent:Sy,belowNavigation:Cy};const Ay={inheritAttrs:!1,render(){return null}},Pi=L(w(y({},Ay),{setup(e){const o=Be("scrollLockManager");return se(()=>{o.registerScrollLock()}),Ke(()=>{o.unregisterScrollLock()}),()=>{}}}));Pi.__docgenInfo={exportName:"default",displayName:"ScrollLock",description:"",tags:{}};const Ni=L({props:{belowNavigation:{type:Boolean},transparent:{type:Boolean}},setup(e){const o=e,a=d(()=>O(ni.Backdrop,o.belowNavigation&&ni.belowNavigation,o.transparent&&ni.transparent));return(s,i)=>(r(),p("div",{class:u(n(a))},[_(n(Pi))],2))}});Ni.__docgenInfo={exportName:"default",displayName:"Backdrop",description:"",tags:{},props:[{name:"belowNavigation",required:!1,type:{name:"boolean"}},{name:"transparent",required:!1,type:{name:"boolean"}}]};const Ly="Polaris-Button",_y="Polaris-Button--pressed",ky="Polaris-Button--disabled",wy="Polaris-Button--connectedDisclosure",My="Polaris-Button__Content",Iy="Polaris-Button--plain",By="Polaris-Button--textAlignLeft",Py="Polaris-Button--textAlignCenter",Ny="Polaris-Button--textAlignRight",Dy="Polaris-Button__Icon",$y="Polaris-Button--fullWidth",Fy="Polaris-Button--hidden",Ey="Polaris-Button__Spinner",Oy="Polaris-Button--primary",qy="Polaris-Button--destructive",Ry="Polaris-Button--outline",Hy="Polaris-Button--loading",Vy="Polaris-Button--removeUnderline",Uy="Polaris-Button--iconOnly",jy="Polaris-Button--sizeSlim",zy="Polaris-Button--sizeLarge",Wy="Polaris-Button--monochrome",Xy="Polaris-Button__Text",Gy="Polaris-Button__ConnectedDisclosureWrapper",Ky="Polaris-Button__ConnectedDisclosure";var le={Button:Ly,pressed:_y,disabled:ky,connectedDisclosure:wy,Content:My,plain:Iy,textAlignLeft:By,textAlignCenter:Py,textAlignRight:Ny,Icon:Dy,fullWidth:$y,hidden:Fy,Spinner:Ey,primary:Oy,destructive:qy,outline:Ry,loading:Hy,removeUnderline:Vy,iconOnly:Uy,sizeSlim:jy,sizeLarge:zy,monochrome:Wy,Text:Xy,ConnectedDisclosureWrapper:Gy,ConnectedDisclosure:Ky},At=(e=>(e[e.Click=0]="Click",e[e.EscapeKeypress=1]="EscapeKeypress",e[e.FocusOut=2]="FocusOut",e[e.ScrollOut=3]="ScrollOut",e))(At||{}),Je=(e=>(e.Entering="entering",e.Entered="entered",e.Exiting="exiting",e.Exited="exited",e))(Je||{});function Fl(e,o){if(e===o)return!0;let a=o.parentNode;for(;a!=null;){if(a===e)return!0;a=a.parentNode}return!1}function Yy(e,{id:o,active:a=!1,ariaHaspopup:s,activatorDisabled:i=!1}){i||(e.tabIndex=e.tabIndex||0),e.setAttribute("aria-controls",o),e.setAttribute("aria-owns",o),e.setAttribute("aria-expanded",String(a)),s!=null&&e.setAttribute("aria-haspopup",String(s))}const Qy="Polaris-PositionedOverlay",Jy="Polaris-PositionedOverlay--fixed",Zy="Polaris-PositionedOverlay--calculating",eh="Polaris-PositionedOverlay--preventInteraction";var si={PositionedOverlay:Qy,fixed:Jy,calculating:Zy,preventInteraction:eh};const th="Polaris-Popover",oh="Polaris-Popover__PopoverOverlay",ah="Polaris-Popover--measuring",nh="Polaris-Popover--fullWidth",sh="Polaris-Popover__Content",ih="Polaris-Popover--positionedAbove",lh="Polaris-Popover__Wrapper",rh="Polaris-Popover__Pane",ch="Polaris-Popover__Section",uh="Polaris-Popover__FocusTracker";var Ne={Popover:th,PopoverOverlay:oh,"PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",measuring:ah,fullWidth:nh,Content:sh,positionedAbove:ih,Wrapper:lh,"Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:rh,"Pane-fixed":"Polaris-Popover__Pane--fixed",Section:ch,FocusTracker:uh,"PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"};function dh(e,o,a,s,i,l,c,m=0){const b=e.top,T=b+e.height,f=e.top-m,g=i.height-e.top-e.height,x=o.height,C=a.activator+a.container,B=a.container,N=e.top-Math.max(s.top,0),I=i.top+Math.min(i.height,s.top+s.height)-(e.top+e.height),q=N>=B,E=I>=B,F=Math.min(g,x),W=Math.min(f,x),D=c?0:i.top,U={height:W-C,top:b+D-W,positioning:"above"},M={height:F-C,top:T+D,positioning:"below"};return l==="above"?(q||N>=I&&!E)&&(f>x||f>g)?U:M:l==="below"?(E||I>=N&&!q)&&(g>x||g>f)?M:U:q&&E?f>g?U:M:N>B?U:M}function ph(e,o,a,s,i){const l=a.width-o.width;if(i==="left")return Math.min(l,Math.max(0,e.left-s.horizontal));if(i==="right"){const c=a.width-(e.left+e.width);return Math.min(l,Math.max(0,c-s.horizontal))}return Math.min(l,Math.max(0,e.center.x-o.width/2))}function mh(e,o){const{center:a}=e;return a.y<o.top||a.y>o.top+o.height}function ec(){return new Vt({top:window.scrollY,left:window.scrollX,height:window.innerHeight,width:document.body.clientWidth})}function yh(e,o=ec()){const a=Math.max(e.top,0),s=Math.max(e.left,0),i=Math.min(e.top+e.height,o.height),l=Math.min(e.left+e.width,o.width);return new Vt({top:a,left:s,height:i-a,width:l-s})}function hh(e){return e===document}function gh(e){const o=window.getComputedStyle(e);return{activator:parseFloat(o.marginTop||"0"),container:parseFloat(o.marginBottom||"0"),horizontal:parseFloat(o.marginLeft||"0")}}function fh(e){const o=e.closest(mi.selector)||document.body,a=o===document.body?"auto":parseInt(window.getComputedStyle(o).zIndex||"0",10);return a==="auto"||Number.isNaN(a)?null:a}const bh={inheritAttrs:!1,render(){return null}},He=L(w(y({},bh),{props:{event:{type:String,required:!0},capture:{type:Boolean},passive:{type:Boolean},handler:{type:Function,required:!0}},setup(e){const o=e;function a(){const{event:i,capture:l,passive:c,handler:m}=o;window.addEventListener(i,m,{capture:l,passive:c})}function s(i){const{event:l,handler:c,capture:m}=i||o;window.removeEventListener(l,c,m)}return De(()=>y({},o),(i,l)=>{i!==l&&(s(l),a())}),se(()=>a()),Ke(()=>s()),()=>{}}}));He.__docgenInfo={exportName:"default",displayName:"EventListener",description:"",tags:{},props:[{name:"event",type:{name:"string"},required:!0},{name:"capture",type:{name:"boolean"}},{name:"passive",type:{name:"boolean"}},{name:"handler",type:{name:"Function as unknown as () => BaseEventProps['handler']"},required:!0}]};function vh(e){const o=e.closest(Dn.selector);return o instanceof HTMLElement?o:document}const xh={inheritAttrs:!1},tc=L(w(y({},xh),{props:{active:{type:Boolean},activator:null,preferInputActivator:{type:Boolean},preferredPosition:null,preferredAlignment:null,fullWidth:{type:Boolean},fixed:{type:Boolean},preventInteraction:{type:Boolean},classNames:null,zIndexOverride:null,hideOnPrint:{type:Boolean}},emits:["change-content-styles","scroll-out"],setup(e,{emit:o}){const a=e,s={childList:!0,subtree:!0,characterData:!0},i=A(null),l=A(null),c=A(null),m=A(0),b=A(0),T=A(null),f=A(null),g=A(!0),x=A("below"),C=A(pt(a.activator)),B=A(!1),N=A(!1),I=A(null),q=A(null),E=d(()=>{const U=a.classNames;return O(si.PositionedOverlay,a.fixed&&si.fixed,a.preventInteraction&&si.preventInteraction,U)}),F=d(()=>O(Ne.Popover,x.value==="above"&&Ne.positionedAbove,a.fullWidth&&Ne.fullWidth,g.value&&Ne.measuring,a.hideOnPrint&&Ne["PopoverOverlay-hideOnPrint"])),W=d(()=>({top:m.value==null||Number.isNaN(m.value)?void 0:`${m.value}px`,left:c.value==null||Number.isNaN(c.value)?void 0:`${c.value}px`,right:l.value==null||Number.isNaN(l.value)?void 0:`${l.value}px`,width:T.value==null||Number.isNaN(T.value)?void 0:`${T.value}px`,zIndex:a.zIndexOverride||f.value||void 0})),D=()=>{if(q.value&&q.value.disconnect(),b.value=0,x.value="below",g.value=!0,i.value&&I.value){const{activator:U,preferredPosition:M="below",preferredAlignment:V="center",fullWidth:Z,fixed:re,preferInputActivator:ie=!0}=a,_e=ie&&U.querySelector("input")||U,z=pt(_e),ne=pt(i.value),Pe=hh(I.value)?document.body:I.value,Se=pt(Pe),be=Z?new Vt(w(y({},ne),{width:z.width})):ne;Pe===document.body&&(Se.height=document.body.scrollHeight);let ce=0;const de=Pe.querySelector(`${ki.selector}`);de&&(ce=de.clientHeight);const qe=i.value.firstElementChild&&i.value.firstChild?gh(i.value.firstElementChild):{activator:0,container:0,horizontal:0},G=ec(),ve=fh(U),ue=ve==null?ve:ve+1,xe=dh(z,be,qe,Se,G,M,re,ce),Xe=ph(z,be,G,qe,V);g.value=!1,C.value=pt(U),c.value=V!=="right"?Xe:null,l.value=V==="right"?Xe:null,m.value=B.value?m.value:xe.top,B.value=Boolean(re),b.value=xe.height||0,T.value=Z?be.width:null,x.value=xe.positioning,N.value=mh(z,yh(Se)),f.value=ue,o("change-content-styles",{height:`${b.value}px`}),q.value&&(q.value.observe(i.value,s),q.value.observe(U,s))}};return Br(()=>{q.value=new MutationObserver(D)}),Xo(()=>{a.active&&m.value!==0&&N.value&&o("scroll-out")}),se(()=>{I.value=vh(a.activator),I.value&&!a.fixed&&I.value.addEventListener("scroll",D),D()}),Ke(()=>{I.value&&!a.fixed&&I.value.removeEventListener("scroll",D)}),(U,M)=>(r(),p("div",{class:u(n(E)),style:Oe(n(W)),ref_key:"overlayRef",ref:i},[S("div",pe({class:n(F)},y({},n(Td).props)),[h(U.$slots,"default",{measuring:g.value,left:c.value,right:l.value,desiredHeight:b.value,positioning:x.value,activatorRect:C.value})],16),_(n(He),{event:"resize",handler:D})],6))}}));tc.__docgenInfo={exportName:"default",displayName:"PositionedOverlay",description:"",tags:{},props:[{name:"active",required:!0,type:{name:"boolean"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}},{name:"preferredAlignment",required:!1,type:{name:"PreferredAlignment"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"boolean"}},{name:"classNames",required:!1,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}}],events:[{name:"change-content-styles",type:{names:["Record"]}},{name:"scroll-out"}],slots:[{name:"default",scoped:!0,bindings:[{name:"measuring",title:"binding"},{name:"left",title:"binding"},{name:"right",title:"binding"},{name:"desired-height",title:"binding"},{name:"positioning",title:"binding"},{name:"activator-rect",title:"binding"}]}]};const Ta=L({setup(e){return(o,a)=>(r(),p("div",{class:u(n(Ne).Section)},[h(o.$slots,"default")],2))}});Ta.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},slots:[{name:"default"}]};const On=L({props:{fixed:{type:Boolean},sectioned:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const a=e,s=d(()=>O(Ne.Pane,a.fixed&&Ne["Pane-fixed"]));return(i,l)=>e.fixed?(r(),p("div",{key:0,class:u(n(s))},[e.sectioned?(r(),P(n(Ta),{key:0},{default:v(()=>[h(i.$slots,"default")]),_:3})):h(i.$slots,"default",{key:1})],2)):(r(),P(n(ht),{key:1,shadow:"",class:u(n(s)),onScrolledToBottom:l[0]||(l[0]=c=>o("scrolled-to-bottom"))},{default:v(()=>[e.sectioned?(r(),P(n(Ta),{key:0},{default:v(()=>[h(i.$slots,"default")]),_:3})):h(i.$slots,"default",{key:1})]),_:3},8,["class"]))}});On.__docgenInfo={exportName:"default",displayName:"Pane",description:"",tags:{},props:[{name:"fixed",required:!1,type:{name:"boolean"}},{name:"sectioned",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};const Th=["id","tabIndex"],Sh={inheritAttrs:!1},oc=L(w(y({},Sh),{props:{fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},preferredPosition:{default:"below"},preferredAlignment:{default:"center"},active:{type:Boolean},id:null,zIndexOverride:{default:void 0},activator:null,preferInputActivator:{default:!0},sectioned:{type:Boolean},fixed:{type:Boolean},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const a=e,s=A(Je.Exited),i=A(null),l=A(null),c=A(null),m=A({}),b=F=>{s.value=F,i.value&&i.value.getBoundingClientRect()},T=()=>{l.value&&window.clearTimeout(l.value),c.value&&window.clearTimeout(c.value)};De(()=>a.active,()=>{const F=a.active?Je.Entering:Je.Exiting,W=a.active?Je.Entered:Je.Exited;b(F),T();const D=window.setTimeout(()=>{s.value=W},parseInt(Ir.motion["duration-100"],10));a.active?l.value=D:c.value=D});const f=d(()=>O(Ne.PopoverOverlay,s.value===Je.Entering&&Ne["PopoverOverlay-entering"],s.value===Je.Entered&&Ne["PopoverOverlay-open"],s.value===Je.Exiting&&Ne["PopoverOverlay-exiting"])),g=d(()=>O(Ne.Content,a.fullHeight&&Ne["Content-fullHeight"],a.fluidContent&&Ne["Content-fluidContent"])),x=()=>{o("close",At.ScrollOut)},C=()=>{o("close",At.EscapeKeypress)},B=F=>{const W=F.target,D=i.value&&Fl(i.value,W),U=Fl(a.activator,W);D||U||s.value!==Je.Entered||o("close",At.Click)},N=()=>{o("close",At.FocusOut)},I=()=>{o("close",At.FocusOut)},q=F=>{m.value=F},E=()=>{a.autofocusTarget==="none"||!i.value||requestAnimationFrame(()=>{if(i.value){const F=zr(i.value);F&&a.autofocusTarget==="first-node"?F.focus():i.value.focus()}})};return se(()=>{a.active&&(E(),b(Je.Entered))}),Ke(()=>{T()}),(F,W)=>(r(),P(n(tc),{id:e.id,fullWidth:e.fullWidth,active:e.active,activator:e.activator,classNames:n(f),preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,onScrollOut:x,onChangeContentStyles:q},{default:v(()=>[S("div",{class:u(n(Ne).FocusTracker),tabIndex:"0",onFocus:N},null,34),_(n(Go),{"color-scheme":e.colorScheme},{default:v(()=>[S("div",{class:u(n(Ne).Wrapper)},[S("div",{id:e.id,tabIndex:e.autofocusTarget==="none"?void 0:-1,style:Oe(m.value),class:u(n(g)),ref_key:"contentRef",ref:i},[h(F.$slots,"extra-content"),_(n(On),{sectioned:e.sectioned,fixed:e.fixed,onScrolledToBottom:W[0]||(W[0]=D=>F.$emit("scrolled-to-bottom"))},{default:v(()=>[h(F.$slots,"overlay")]),_:3},8,["sectioned","fixed"])],14,Th)],2),S("div",{class:u(n(Ne).FocusTracker),tabIndex:"0",onFocus:I},null,34),_(n(He),{event:"click",handler:B}),_(n(He),{event:"touchstart",handler:B}),_(n(et),{keyCode:n(We).Escape,handler:C},null,8,["keyCode"])]),_:3},8,["color-scheme"])]),_:3},8,["id","fullWidth","active","activator","classNames","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride"]))}}));oc.__docgenInfo={exportName:"default",displayName:"PopoverOverlay",description:"",tags:{},props:[{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"fluidContent",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"preferredAlignment",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'center'"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"colorScheme",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"scrolled-to-bottom"},{name:"close",type:{names:["PopoverCloseSource"]}}],slots:[{name:"extra-content"},{name:"overlay"}]};const Ch=["data-portal-id"],Ah={inheritAttrs:!1},qn=L(w(y({},Ah),{props:{idPrefix:{type:String,default:""}},setup(e){const o=e,a=Be("portalManager",new Zr),s=A(""),{useUniqueId:i}=we();return se(()=>{const l=i("portal");s.value=o.idPrefix?`${o.idPrefix}-${l}`:l,a&&a.register(s.value)}),(l,c)=>n(a)?(r(),P(Sd,{key:0,to:"#PolarisPortalsContainer"},[S("div",{"data-portal-id":s.value},[h(l.$slots,"default")],8,Ch)])):$("",!0)}}));qn.__docgenInfo={exportName:"default",displayName:"Portal",description:"",tags:{},props:[{name:"idPrefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}]};const Lh={inheritAttrs:!1},tt=L(w(y({},Lh),{props:{preferredPosition:{default:void 0},preferredAlignment:{default:void 0},active:{type:Boolean},preferInputActivator:{default:!0},activatorWrapper:{default:"div"},zIndexOverride:{default:void 0},preventFocusOnClose:{type:Boolean},sectioned:{type:Boolean},fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},fixed:{type:Boolean},ariaHaspopup:{default:void 0},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const a=e,s=A(null),i=A(null),{useUniqueId:l}=we();Mt();const c=A(l("popover")),m=()=>{if(s.value){const f=s.value,x=oi(f)||f,C="disabled"in x&&Boolean(x.disabled);Yy(x,{id:c.value,active:a.active,ariaHaspopup:a.ariaHaspopup,activatorDisabled:C})}};De(()=>a.active,()=>m());const b=f=>{let{parentElement:g}=f;for(;g;){if(g.matches(Nr.selector))return!1;g=g.parentElement}return!0},T=f=>{if(o("close",f),!(!s.value||a.preventFocusOnClose)&&(f===At.FocusOut||f===At.EscapeKeypress)&&i.value){const g=oi(i.value)||oi(s.value)||s.value;_p(g,b)||g.focus()}};return se(()=>{if(s.value){const f=s.value.firstElementChild;f&&(i.value=f),m()}}),(f,g)=>(r(),P(Le(e.activatorWrapper),{ref_key:"container",ref:s},{default:v(()=>[h(f.$slots,"activator"),i.value&&e.active?(r(),P(n(qn),{key:0,idPrefix:"popover"},{default:v(()=>[_(n(oc),{id:c.value,activator:i.value,fullWidth:e.fullWidth,active:e.active,preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,autofocusTarget:e.autofocusTarget,sectioned:e.sectioned,colorScheme:e.colorScheme,onClose:T,onScrolledToBottom:g[0]||(g[0]=x=>o("scrolled-to-bottom"))},{overlay:v(x=>[h(f.$slots,"content")]),"extra-content":v(()=>[h(f.$slots,"extra-content")]),_:3},8,["id","activator","fullWidth","active","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride","autofocusTarget","sectioned","colorScheme"])]),_:3})):$("",!0)]),_:3},512))}}));tt.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"preferredPosition",description:"The preferred direction to open the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Show or hide the Popover",required:!0,type:{name:"boolean"}},{name:"preferInputActivator",description:"Use the activator's input element to calculate the Popover position",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"activatorWrapper",description:"The element type to wrap the activator with",tags:{default:[{description:"'div'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"zIndexOverride",description:"Override on the default z-index of 400",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"preventFocusOnClose",description:`Prevents focusing the activator or the next focusable element
when the popover is deactivated`,required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically add wrap content in a section",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow popover to stretch to the full width of its activator",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Allow popover to stretch to fit content vertically",required:!1,type:{name:"boolean"}},{name:"fluidContent",description:"Allow popover content to determine the overlay width and height",required:!1,type:{name:"boolean"}},{name:"fixed",description:"Remains in a fixed position",required:!1,type:{name:"boolean"}},{name:"ariaHaspopup",description:"Used to illustrate the type of popover element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnPrint",description:"Allow the popover overlay to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",tags:{default:[{description:"'container'",title:"default"}]},required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"close",type:{names:["PopoverCloseSource"]}},{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"content"},{name:"extra-content"}]};const _h=["role","type","disabled","aria-busy","aria-controls","aria-expanded","aria-describedby","aria-pressed"],kh={inheritAttrs:!1},Di=L(w(y({},kh),{props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,className:null,others:null},setup(e){const o=e,a=Mt(),s=b=>{const T={mouseup:zo};return b.forEach(f=>{const g=`on${wi.exports.capitalize(f)}`;a[g]&&(T[f]=a[g])}),T},i=s(["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"]),l=s(["blur","click","focus","mouseover","touchstart"]),c=d(()=>({id:o.id,class:o.className,"aria-label":o.accessibilityLabel})),m=d(()=>w(y(y({},c),o.others),{role:o.role}));return(b,T)=>e.url&&e.disabled?(r(),p("a",_t(pe({key:0},n(c))),[h(b.$slots,"default")],16)):e.url&&!e.disabled?(r(),P(n(yt),pe({key:1},n(m),{url:e.url,external:e.external,download:e.download},xa(n(l))),{default:v(()=>[h(b.$slots,"default")]),_:3},16,["url","external","download"])):(r(),p("button",pe({key:2},n(c),{role:e.role,type:e.submit?"submit":"button",disabled:e.disabled,"aria-busy":e.loading?!0:void 0,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-describedby":e.ariaDescribedBy,"aria-pressed":e.pressed},xa(n(i))),[h(b.$slots,"default")],16,_h))}}));Di.__docgenInfo={exportName:"default",displayName:"UnstyledButton",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"className",required:!1,type:{name:"string"}},{name:"others",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"default"}]};const wh=L({props:{action:null,overrides:null,keyProp:null},setup(e){const o=e,a=d(()=>{const c=o.action,{content:s,onAction:i}=c,l=K(c,["content","onAction"]);return y(y({},l),o.overrides)});return(s,i)=>(r(),P(Di,pe({key:e.keyProp},n(a),{onClick:e.action.onAction}),{default:v(()=>[ye(X(e.action.content),1)]),_:1},16,["onClick"]))}});wh.__docgenInfo={exportName:"default",displayName:"UnstyledButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"UnstyledButtonProps"}]}},{name:"keyProp",required:!1,type:{name:"any"}}]};const Mh={viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},Ih=S("path",{d:"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"},null,-1),Bh=[Ih];function Ph(e,o){return r(),p("svg",Mh,Bh)}var Nh={render:Ph};const Dh={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},$h=S("path",{d:"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"},null,-1),Fh=[$h];function Eh(e,o){return r(),p("svg",Dh,Fh)}var Oh={render:Eh};const qh="Polaris-Spinner",Rh="Polaris-Spinner--loading",Hh="Polaris-Spinner--sizeSmall",Vh="Polaris-Spinner--sizeLarge";var El={Spinner:qh,loading:Rh,sizeSmall:Hh,sizeLarge:Vh};const kt=L({props:{size:{type:String,default:"large"},accessibilityLabel:{type:String,default:null},hasFocusableParent:{type:Boolean}},setup(e){const o=e,a=A(y({},!o.hasFocusableParent&&{role:"status"})),s=d(()=>{const i=Ce("size",o.size);return O(El.Spinner,o.size&&El[i])});return(i,l)=>(r(),p("div",null,[S("span",{class:u(n(s))},[e.size==="large"?(r(),P(n(Nh),{key:0})):(r(),P(n(Oh),{key:1}))],2),S("span",_t(An(a.value)),[_(n(Ue),null,{default:v(()=>[S("span",null,X(e.accessibilityLabel),1)]),_:1})],16)]))}});kt.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size of the spinner",tags:{},values:["small | large"],type:{name:"String as () => Size"},defaultValue:{func:!1,value:"'large'"}},{name:"accessibilityLabel",description:"Accessible label for the spinner",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasFocusableParent",description:"Allows the component to apply the correct accessibility roles based on focus",type:{name:"boolean"}}]};const Uh={inheritAttrs:!1},xi=L(w(y({},Uh),{props:{commonProps:null,linkProps:null,actionProps:null,removeUnderline:null,children:{type:Boolean},disclosure:null,loading:null,icon:null},setup(e){const o=e,a=Mt(),s=d(()=>{const m=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],b={};return m.forEach(T=>{const f=`on${wi.exports.capitalize(T)}`;a[f]&&(b[T]=a[f])}),b}),i=d(()=>O(le.Icon,o.loading&&le.hidden)),l=d(()=>O(le.Text,o.removeUnderline&&le.removeUnderline)),c=d(()=>o.disclosure==="select"?Dr:o.disclosure==="up"?$r:Mi);return(m,b)=>(r(),P(n(Di),pe(y(y(y({},e.commonProps),e.linkProps),e.actionProps),xa(n(s))),{default:v(()=>[S("span",{class:u(n(le).Content)},[e.loading?(r(),p("span",{key:0,class:u(n(le).Spinner)},[_(n(kt),{size:"small",accessibilityLabel:"Loading"})],2)):$("",!0),e.icon?(r(),p("span",{key:1,class:u(n(i))},[_(n(ae),{source:e.loading?"placeholder":e.icon},null,8,["source"])],2)):$("",!0),e.children?(r(),p("span",{class:u(n(l)),key:e.actionProps&&e.actionProps.disabled?"text-disabled":"text"},[h(m.$slots,"default")],2)):$("",!0),e.disclosure?(r(),p("span",{key:3,class:u(n(le).Icon)},[S("div",null,[_(n(ae),{source:e.loading?"placeholder":n(c)},null,8,["source"])])],2)):$("",!0)],2)]),_:3},16))}}));xi.__docgenInfo={exportName:"default",displayName:"ButtonMarkup",description:"",tags:{},props:[{name:"commonProps",required:!1,type:{name:"CommonButtonProps"}},{name:"linkProps",required:!1,type:{name:"LinkButtonProps"}},{name:"actionProps",required:!1,type:{name:"ActionButtonProps"}},{name:"removeUnderline",required:!1,type:{name:"TSIndexedAccessType"}},{name:"children",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"TSIndexedAccessType"}},{name:"loading",required:!1,type:{name:"TSIndexedAccessType"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}]};const jh=["disabled","aria-label","aria-describedby"],zh={inheritAttrs:!1},he=L(w(y({},zh),{props:{id:null,url:{default:""},external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:{default:"medium"},textAlign:{default:void 0},outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean],default:void 0},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},setup(e){const o=e,a=Te(),s=Mt(),i=d(()=>{const I=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],q={};return I.forEach(E=>{const F=`on${wi.exports.capitalize(E)}`;s[F]&&(q[E]=s[F])}),q}),l=!!a.default,c=A(!1),m=d(()=>o.disabled||o.loading),b=d(()=>{const I=o.textAlign&&Ce("textAlign",o.textAlign),q=o.size&&Ce("size",o.size);return O(le.Button,o.primary&&le.primary,o.outline&&le.outline,o.destructive&&le.destructive,m.value&&le.disabled,o.loading&&le.loading,o.plain&&le.plain,o.pressed&&!o.disabled&&!o.url&&le.pressed,o.monochrome&&le.monochrome,o.size!=="medium"&&q&&le[q],I&&le[I],o.fullWidth&&le.fullWidth,o.icon&&!l&&le.iconOnly,o.connectedDisclosure&&le.connectedDisclosure,o.removeUnderline&&le.removeUnderline)}),T=d(()=>{const I=o.textAlign&&Ce("textAlign",o.textAlign),q=o.size&&Ce("size",o.size);return O(le.Button,o.primary&&le.primary,o.outline&&le.outline,o.size!=="medium"&&q&&le[q],I&&le[I],o.destructive&&le.destructive,o.connectedDisclosure&&o.connectedDisclosure.disabled&&le.disabled,le.iconOnly,le.ConnectedDisclosure,o.monochrome&&le.monochrome)}),f=d(()=>{const{id:I,accessibilityLabel:q,role:E,ariaDescribedBy:F}=o;return{id:I,className:b.value,accessibilityLabel:q,role:E,ariaDescribedBy:F}}),g=d(()=>{const{url:I,external:q,download:E}=o;return{url:I,external:q,download:E}}),x=d(()=>{const{submit:I,loading:q,pressed:E}=o;return{submit:I,loading:q,pressed:E,disabled:m.value}}),C=d(()=>{const{removeUnderline:I,disclosure:q,loading:E,icon:F}=o;return{commonProps:f.value,linkProps:g.value,actionProps:x.value,removeUnderline:I,children:l,disclosure:q,loading:E,icon:F}}),B=d(()=>{if(o.connectedDisclosure){const{disabled:I,accessibilityLabel:q="Related actions"}=o.connectedDisclosure;return{disabled:I,disclosureLabel:q}}return{}}),N=()=>{c.value=!c.value};return(I,q)=>e.connectedDisclosure?(r(),p("div",{key:0,class:u(n(le).ConnectedDisclosureWrapper)},[_(xi,pe(n(C),xa(n(i))),{default:v(()=>[h(I.$slots,"default")]),_:3},16),_(n(tt),{active:c.value,preferredAlignment:"right",onClose:N},{activator:v(()=>[S("button",{type:"button",class:u(n(T)),disabled:n(B).disabled,"aria-label":n(B).disclosureLabel,"aria-describedby":e.ariaDescribedBy,onClick:N,onMouseup:q[0]||(q[0]=(...E)=>n(zo)&&n(zo)(...E))},[S("span",null,[_(n(ae),{source:n(Mi)},null,8,["source"])])],42,jh)]),content:v(()=>[_(n(Ye),{items:e.connectedDisclosure.actions,onActionAnyItem:N},Ve({_:2},[fe(e.connectedDisclosure.actions,({prefixId:E})=>({name:`prefix-${E}`,fn:v(()=>[h(I.$slots,`prefix-${E}`)])})),fe(e.connectedDisclosure.actions,({suffixId:E})=>({name:`suffix-${E}`,fn:v(()=>[h(I.$slots,`suffix-${E}`)])}))]),1032,["items"])]),_:3},8,["active"])],2)):(r(),P(xi,pe({key:1},n(C),xa(n(i))),{default:v(()=>[h(I.$slots,"default")]),_:3},16))}}));he.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the button",required:!1,type:{name:"string"}},{name:"url",description:"A destination to link to, rendered in the href attribute of a link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"external",description:"Forces url to open in a new tab",required:!1,type:{name:"boolean"}},{name:"download",description:`Tells the browser to download the url instead of opening it.
Provides a hint for the downloaded filename if it is a string value`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",description:"Allows the button to submit a form",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables the button, disallowing merchant interaction",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces button text with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"pressed",description:"Sets the button in a pressed state",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to define the semantic value of this element",required:!1,type:{name:"string"}},{name:"ariaControls",description:"Id of the element the button controls",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Tells screen reader the controlled element is expanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the button",required:!1,type:{name:"string"}},{name:"primary",description:"Provides extra visual weight and identifies the primary action in a set of buttons",required:!1,type:{name:"boolean"}},{name:"destructive",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"size",description:"Changes the size of the button, giving it more or less padding",tags:{values:[{description:"slim | medium | large",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textAlign",description:"Changes the inner text alignment of the button",tags:{values:[{description:"left | center | right",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:`Gives the button a subtle alternative to the default button styling,
appropriate for certain backdrops`,required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"disclosure",description:"Displays the button with a disclosure icon. Defaults to `down` when set to true",tags:{values:[{description:"down | up | select | boolean",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Renders a button that looks like a link",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes plain and outline Button colors (text, borders, icons) the same as the current text color\nAlso adds an underline to `plain` Buttons",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes underline from button text (including on interaction)when monochrome and plain are true",required:!1,type:{name:"boolean"}},{name:"icon",description:"Icon to display to the left of the button content.",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",description:"Disclosure button connected right of the button. Toggles a popover action list.",required:!1,type:{name:"ConnectedDisclosure"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Wh={inheritAttrs:!1},Ti=L(w(y({},Wh),{props:{action:null,overrides:{default:()=>({})}},setup(e){const o=e,a=()=>{o.action&&o.action.onAction&&o.action.onAction()},s=d(()=>{if(!o.action)return{};const m=o.action,{onAction:i,content:l}=m,c=K(m,["onAction","content"]);return y(y({},c),o.overrides)});return(i,l)=>e.action?(r(),P(n(he),pe({key:0},n(s),{onClick:a}),{default:v(()=>[ye(X(e.action.content),1)]),_:1},16)):$("",!0)}}));Ti.__docgenInfo={exportName:"default",displayName:"ButtonFrom",description:"",tags:{},props:[{name:"action",required:!1,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"ButtonProps"}]},defaultValue:{func:!1,value:"() => ({})"}}]};const Xh="Polaris-ButtonGroup",Gh="Polaris-ButtonGroup__Item",Kh="Polaris-ButtonGroup--segmented",Yh="Polaris-ButtonGroup--fullWidth",Qh="Polaris-ButtonGroup--extraTight",Jh="Polaris-ButtonGroup--tight",Zh="Polaris-ButtonGroup--loose";var Rt={ButtonGroup:Xh,Item:Gh,"Item-plain":"Polaris-ButtonGroup__Item--plain",segmented:Kh,"Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:Yh,extraTight:Qh,tight:Jh,loose:Zh};const eg={inheritAttrs:!1},ac=L(w(y({},eg),{setup(e){const o=A(!1),a=Te(),s=d(()=>a.default&&a.default()[0].props),i=d(()=>{const m=s.value&&(s.value.plain===""||s.value.plain);return O(Rt.Item,o.value&&Rt["Item-focused"],m&&Rt["Item-plain"])}),l=()=>{o.value=!0},c=()=>{o.value=!1};return(m,b)=>(r(),p("div",{class:u(n(i)),onFocus:l,onBlur:c},[h(m.$slots,"default")],34))}}));ac.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const tg=["data-buttongroup-segmented","data-buttongroup-connected-top","data-buttongroup-full-width"],og={inheritAttrs:!1},Ut=L(w(y({},og),{props:{spacing:null,segmented:{type:Boolean},fullWidth:{type:Boolean},connectedTop:{type:Boolean}},setup(e){const o=e,a=Te(),s=d(()=>O(Rt.ButtonGroup,o.spacing&&Rt[o.spacing],o.segmented&&Rt.segmented,o.fullWidth&&Rt.fullWidth));return(i,l)=>(r(),p("div",{class:u(n(s)),"data-buttongroup-segmented":e.segmented,"data-buttongroup-connected-top":e.connectedTop,"data-buttongroup-full-width":e.fullWidth},[n(a).default?(r(!0),p(te,{key:0},fe(n(a).default(),(c,m)=>(r(),P(n(ac),{key:m},{default:v(()=>[(r(),P(Le(c)))]),_:2},1024))),128)):$("",!0)],10,tg))}}));Ut.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"spacing",description:"Determines the space between button group items",required:!1,type:{name:"Spacing"}},{name:"segmented",description:"Join buttons as segmented group",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Buttons will stretch/shrink to occupy the full width",required:!1,type:{name:"boolean"}},{name:"connectedTop",description:"Remove top left and right border radius",required:!1,type:{name:"boolean"}}]};const ag="Polaris-Caption";var ng={Caption:ag};const Rn=L({setup(e){return(o,a)=>(r(),p("p",{class:u(n(ng).Caption)},[h(o.$slots,"default")],2))}});Rn.__docgenInfo={exportName:"default",displayName:"Caption",description:"",tags:{},slots:[{name:"default"}]};const sg=L({setup(e){return(o,a)=>null}});sg.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{}};const ig="Polaris-Checkbox",lg="Polaris-Checkbox__Input",rg="Polaris-Checkbox--keyFocused",cg="Polaris-Checkbox__Backdrop",ug="Polaris-Checkbox__Icon",dg="Polaris-Checkbox--hover",pg="Polaris-Checkbox--error";var Tt={Checkbox:ig,Input:lg,keyFocused:rg,Backdrop:cg,"Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:ug,hover:dg,error:pg};const $i=e=>`${e}Error`,mg="Polaris-Choice",yg="Polaris-Choice--labelHidden",hg="Polaris-Choice__Label",gg="Polaris-Choice__Control",fg="Polaris-Choice--disabled",bg="Polaris-Choice__Descriptions",vg="Polaris-Choice__HelpText";var ct={Choice:mg,labelHidden:yg,Label:hg,Control:gg,disabled:fg,Descriptions:bg,HelpText:vg};const Fi=e=>`${e}HelpText`,xg="Polaris-InlineError",Tg="Polaris-InlineError__Icon";var Ol={InlineError:xg,Icon:Tg};const Sg=["id"],Cg={key:1},jt=L({props:{message:null,fieldID:null},setup(e){return(o,a)=>e.message?(r(),p("div",{key:0,id:n($i)(e.fieldID),class:u(n(Ol).InlineError)},[S("div",{class:u(n(Ol).Icon)},[_(n(ae),{source:n(Cd)},null,8,["source"])],2),typeof e.message=="object"?(r(),P(Le(e.message),{key:0})):(r(),p("div",Cg,X(e.message),1))],10,Sg)):$("",!0)}});jt.__docgenInfo={exportName:"default",displayName:"InlineError",description:"",tags:{},props:[{name:"message",description:"Content briefly explaining how to resolve the invalid form field input.",required:!0,type:{name:"Error"}},{name:"fieldID",description:"Unique identifier of the invalid form field that the message describes",required:!0,type:{name:"string"}}]};const Ag={key:0},Lg=["id"],Ei=L({props:{id:null,disabled:{type:Boolean},error:{type:[null,Boolean]},labelHidden:{type:Boolean}},setup(e){const o=e,a=d(()=>O(ct.Choice,o.labelHidden&&ct.labelHidden,o.disabled&&ct.disabled));return(s,i)=>e.error&&typeof e.error!="boolean"||s.$slots["help-text"]?(r(),p("div",Ag,[S("label",{class:u(n(a)),onClick:i[0]||(i[0]=l=>s.$emit("click")),onMouseover:i[1]||(i[1]=l=>s.$emit("mouseover")),onMouseout:i[2]||(i[2]=l=>s.$emit("mouseout"))},[S("span",{class:u(n(ct).Control)},[h(s.$slots,"default")],2),S("span",{class:u(n(ct).Label)},[h(s.$slots,"label")],2)],34),S("div",{class:u(n(ct).Descriptions)},[s.$slots["help-text"]?(r(),p("div",{key:0,id:n(Fi)(e.id),class:u(n(ct).HelpText)},[h(s.$slots,"help-text")],10,Lg)):$("",!0),e.error&&typeof e.error!="boolean"?(r(),P(n(jt),{key:1,fieldID:e.id,message:e.error},null,8,["fieldID","message"])):$("",!0)],2)])):(r(),p("label",{key:1,class:u(n(a)),onClick:i[3]||(i[3]=l=>s.$emit("click")),onMouseover:i[4]||(i[4]=l=>s.$emit("mouseover")),onMouseout:i[5]||(i[5]=l=>s.$emit("mouseout"))},[S("span",{class:u(n(ct).Control)},[h(s.$slots,"default")],2),S("span",{class:u(n(ct).Label)},[h(s.$slots,"label")],2)],34))}});Ei.__docgenInfo={exportName:"default",displayName:"Choice",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the choice",required:!0,type:{name:"string"}},{name:"disabled",description:"Whether the associated form control is disabled",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"mouseover"},{name:"mouseout"}],slots:[{name:"default"},{name:"label"},{name:"help-text"}]};const _g=["id","role","name","value","checked","disabled","aria-invalid","aria-controls","aria-describedby"],Yo=L({props:{ariaControls:null,ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},id:null,name:null,value:{type:[String,Boolean]},modelValue:{type:[String,Boolean]},error:{type:[null,Boolean]}},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const a=e,s=Be("withinListboxContext",!1),i=A(!1),l=A(!1),c=Te(),m=d(()=>{var M;return(M=c["help-text"])==null?void 0:M.call(c)}),{useUniqueId:b}=we(),T=d(()=>b("Checkbox",a.id)),f=d(()=>a.checked==="indeterminate"),g=d(()=>!f.value&&Boolean(a.checked)||typeof a.modelValue=="boolean"&&a.modelValue===!0),x=d(()=>f.value?Ad:Fr),C=d(()=>O(Tt.Checkbox,a.error&&Tt.error)),B=d(()=>O(Tt.Backdrop,i.value&&Tt.hover)),N=d(()=>O(Tt.Input,f.value&&Tt["Input-indeterminate"],l.value&&Tt.keyFocused)),I=d(()=>f.value?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":g.value}),q=d(()=>{const M=[];return a.ariaDescribedBy&&M.push(a.ariaDescribedBy),a.error&&typeof a.error!="boolean"&&M.push($i(T.value)),m.value&&M.push(Fi(T.value)),M.length?M.join(" "):void 0}),E=()=>{l.value=!0,o("focus")},F=M=>{const V=M.target;o("change",M),o("update:modelValue",V.checked)},W=()=>{l.value=!1,o("blur")},D=M=>{const{key:V}=M;(V===We.Space||V===We.Tab)&&(l.value||(l.value=!0))};function U(M){M.stopPropagation()}return(M,V)=>(r(),P(n(Ei),{id:n(T),error:e.error,disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:V[0]||(V[0]=Z=>i.value=!0),onMouseout:V[1]||(V[1]=Z=>i.value=!1)},Ve({default:v(()=>[S("span",{class:u(n(C))},[S("input",pe({id:n(T),role:n(s)?"presentation":"checkbox",name:e.name,value:e.value||e.modelValue,type:"checkbox",checked:n(g),disabled:e.disabled,class:n(N),"aria-invalid":e.error!==null,"aria-controls":e.ariaControls,"aria-describedby":n(q),onFocus:E,onChange:F,onBlur:W,onKeyup:D},n(I)),null,16,_g),S("span",{class:u(n(B)),onClick:U,onMouseup:U},null,34),S("span",{class:u(n(Tt).Icon)},[_(n(ae),{source:n(x)},null,8,["source"])],2)],2)]),_:2},[n(c).label?{name:"label",fn:v(()=>[h(M.$slots,"label")])}:void 0,n(c)["help-text"]?{name:"help-text",fn:v(()=>[h(M.$slots,"help-text")])}:void 0]),1032,["id","error","disabled","labelHidden"]))}});Yo.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"ariaControls",description:"Indicates the ID of the element that is controlled by the checkbox",required:!1,type:{name:"string"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the checkbox",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"indeterminate"'}]}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const kg="Polaris-ChoiceList",wg="Polaris-ChoiceList--titleHidden",Mg="Polaris-ChoiceList__Title",Ig="Polaris-ChoiceList__Choices",Bg="Polaris-ChoiceList__ChoiceChildren",Pg="Polaris-ChoiceList__ChoiceError";var Dt={ChoiceList:kg,titleHidden:wg,Title:Mg,Choices:Ig,ChoiceChildren:Bg,ChoiceError:Pg};const Ng="Polaris-RadioButton",Dg="Polaris-RadioButton__Input",$g="Polaris-RadioButton--keyFocused",Fg="Polaris-RadioButton__Backdrop",Eg="Polaris-RadioButton--hover";var ga={RadioButton:Ng,Input:Dg,keyFocused:$g,Backdrop:Fg,hover:Eg};const Og=["id","name","value","checked","disabled","aria-describedby"],La=L({props:{ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},id:null,name:null,value:null,modelValue:null},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const a=e,s=A(!1),i=A(!1),l=Te(),c=d(()=>{var I;return(I=l["help-text"])==null?void 0:I.call(l)}),{useUniqueId:m}=we(),b=d(()=>m("RadioButton",a.id)),T=d(()=>a.checked||a.modelValue===a.value),f=d(()=>O(ga.Backdrop,i.value&&ga.hover)),g=d(()=>O(ga.Input,s.value&&ga.keyFocused)),x=d(()=>{const I=[];return a.ariaDescribedBy&&I.push(a.ariaDescribedBy),c.value&&I.push(Fi(b.value)),I.length?I.join(" "):void 0}),C=I=>{const q=I.target;o("change",I),o("update:modelValue",q.value)},B=()=>{o("blur"),s.value=!1},N=()=>{s.value||(s.value=!0)};return(I,q)=>(r(),P(n(Ei),{id:n(b),disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:q[1]||(q[1]=E=>i.value=!0),onMouseout:q[2]||(q[2]=E=>i.value=!1)},Ve({default:v(()=>[S("span",{class:u(n(ga).RadioButton)},[S("input",{id:n(b),name:e.name||n(b),value:e.value,type:"radio",checked:n(T),disabled:e.disabled,class:u(n(g)),"aria-describedby":n(x),onFocus:q[0]||(q[0]=E=>I.$emit("focus")),onChange:C,onBlur:B,onKeyup:N},null,42,Og),S("span",{class:u(n(f))},null,2)],2)]),_:2},[n(l).label?{name:"label",fn:v(()=>[h(I.$slots,"label")])}:void 0,n(l)["help-text"]?{name:"help-text",fn:v(()=>[h(I.$slots,"help-text")])}:void 0]),1032,["id","disabled","labelHidden"]))}});La.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the the radio button",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Radio button is selected",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const qg=["id","aria-invalid"],Rg=["innerHTML"],st=L({props:{choices:null,modelValue:null,name:null,allowMultiple:{type:Boolean},titleHidden:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(e,{emit:o}){const a=e,{useUniqueId:s}=we(),i=d(()=>s("ChoiceList",a.name)),l=d(()=>a.allowMultiple?`${i.value}Multiple`:i.value),c=d(()=>O(Dt.ChoiceList,a.titleHidden&&Dt.titleHidden)),m=f=>a.allowMultiple?a.modelValue.includes(f.value):a.modelValue===f.value,b=f=>{const g=f.target;return g.checked?a.allowMultiple?[...a.modelValue,g.value]:g.value:Array.isArray(a.modelValue)?a.modelValue.filter(x=>x!==g.value):[]},T=f=>{o("update:modelValue",b(f)),o("change",f)};return(f,g)=>(r(),p("fieldset",{id:n(l),class:u(n(c)),"aria-invalid":e.error!==null},[S("legend",{class:u(n(Dt).Title)},[h(f.$slots,"default")],2),S("ul",{class:u(n(Dt).Choices)},[(r(!0),p(te,null,fe(e.choices,(x,C)=>(r(),p("li",{key:C},[(r(),P(Le(e.allowMultiple?n(Yo):n(La)),{name:n(l),value:x.value,checked:m(x),disabled:x.disabled||e.disabled,ariaDescribedBy:e.error&&x.describedByError?n($i)(n(l)):null,onChange:T},Ve({_:2},[x.label?{name:"label",fn:v(()=>[S("span",null,X(x.label),1)])}:void 0,x.helpText?{name:"help-text",fn:v(()=>[S("span",null,X(x.helpText),1)])}:void 0]),1032,["name","value","checked","disabled","ariaDescribedBy"])),typeof x.renderChildren=="string"?(r(),p("div",{key:0,innerHTML:x.renderChildren,class:u(n(Dt).ChoiceChildren)},null,10,Rg)):(r(),P(Le(x.renderChildren),{key:1,class:u(n(Dt).ChoiceChildren)},null,8,["class"]))]))),128))],2),e.error?(r(),p("div",{key:0,class:u(n(Dt).ChoiceError)},[_(n(jt),{fieldID:n(l),message:e.error},null,8,["fieldID","message"])],2)):$("",!0)],10,qg))}});st.__docgenInfo={exportName:"default",displayName:"ChoiceList",description:"",tags:{},props:[{name:"choices",description:"Collection of choices",required:!0,type:{name:"Array",elements:[{name:"Choice"}]}},{name:"modelValue",description:"V-model will automatically bind to this prop",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allow merchants to select multiple options at once",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Toggles display of the title",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"disabled",description:"Disable all choices",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}}],slots:[{name:"default"}]};const Hg="Polaris-Collapsible",Vg="Polaris-Collapsible--isFullyClosed",Ug="Polaris-Collapsible--expandOnPrint";var ii={Collapsible:Hg,isFullyClosed:Vg,expandOnPrint:Ug};const jg=["id","aria-expanded"],Oi=L({props:{id:null,expandOnPrint:{type:Boolean},open:{type:Boolean},transition:null},setup(e){const o=e,a=A(0),s=A("idle"),i=A(null),l=A(o.open),c=d(()=>s.value==="idle"&&o.open&&l.value),m=d(()=>s.value==="idle"&&!o.open&&!l.value),b=d(()=>O(ii.Collapsible,m.value&&ii.isFullyClosed,o.expandOnPrint&&ii.expandOnPrint)),T=d(()=>w(y({},o.transition&&{transitionDuration:`${o.transition.duration}`,transitionTimingFunction:`${o.transition.timingFunction}`}),{maxHeight:c.value?"none":`${a.value}px`,overflow:c.value?"visible":"hidden"})),f=({target:g})=>{g===i.value&&(s.value="idle",l.value=o.open)};return De(()=>[o.open,l.value],()=>{o.open!==l.value&&(s.value="measuring")}),Xo(()=>{if(!!i.value)switch(s.value){case"idle":break;case"measuring":a.value=i.value.scrollHeight,s.value="animating";break;case"animating":a.value=o.open?i.value.scrollHeight:0}}),se(()=>{!open||!i.value||(a.value=i.value.scrollHeight)}),(g,x)=>(r(),p("div",{id:e.id,style:Oe(n(T)),ref_key:"collapsibleContainerRef",ref:i,class:u(n(b)),onTransitionend:f,"aria-expanded":e.open},[e.expandOnPrint||!n(m)?h(g.$slots,"default",{key:0}):$("",!0)],46,jg))}});Oi.__docgenInfo={exportName:"default",displayName:"Collapsible",description:"",tags:{},props:[{name:"id",description:"Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component\u2019s aria-controls prop.",required:!0,type:{name:"string"}},{name:"expandOnPrint",description:"Option to show collapsible content when printing",required:!1,type:{name:"boolean"}},{name:"open",description:"Toggle whether the collapsible is expanded or not.",required:!0,type:{name:"boolean"}},{name:"transition",description:"Assign transition properties to the collapsible",required:!1,type:{name:"Transition"}}],slots:[{name:"default"}]};function li(e){const o=e.toString(16);return o.length===1?`0${o}`:o}function zg(e,o){const a=e/60,s=1-Math.abs(a%2-1),i=o*s;let l=0,c=0,m=0;return a>=0&&a<=1&&(l=o,c=i,m=0),a>=1&&a<=2&&(l=i,c=o,m=0),a>=2&&a<=3&&(l=0,c=o,m=i),a>=3&&a<=4&&(l=0,c=i,m=o),a>=4&&a<=5&&(l=i,c=0,m=o),a>=5&&a<=6&&(l=o,c=0,m=i),{red:l,green:c,blue:m}}function Wg(e,o="b"){const{alpha:a=1}=e,s=e.red/255,i=e.green/255,l=e.blue/255,c=Math.max(s,i,l),m=Math.min(s,i,l),b=c-m,T=(c+m)/2;let f=0;if(c===0)f=0;else if(o==="b")f=b/c;else if(o==="l"){const B=T>.5?b/(2-c-m):b/(c+m);f=Number.isNaN(B)?0:B}let g=0;switch(c){case s:g=(i-l)/b+(i<l?6:0);break;case i:g=(l-s)/b+2;break;case l:g=(s-i)/b+4;break}const x=g/6*360,C=qt(x,0,360);return{hue:C?ha(C,2):0,saturation:ha(qt(f,0,1),4),brightness:ha(qt(c,0,1),4),lightness:ha(T,4),alpha:ha(a,4)}}function Xg(e){if(e.length===4){const i=(b,T)=>e.slice(b,T).repeat(2),l=parseInt(i(1,2),16),c=parseInt(i(2,3),16),m=parseInt(i(3,4),16);return{red:l,green:c,blue:m}}const o=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return{red:o,green:a,blue:s}}function Gg({red:e,green:o,blue:a}){return`#${li(e)}${li(o)}${li(a)}`}function In(e){const{hue:o,saturation:a,brightness:s}=e,l=e.alpha||1,c=s*a;let{red:m,green:b,blue:T}=zg(o,c);const f=s-c;return m+=f,b+=f,T+=f,{red:Math.round(m*255),green:Math.round(b*255),blue:Math.round(T*255),alpha:l}}function Kg(e){return Gg(In(w(y({},e),{alpha:1})))}function Yg(e){const{hue:o,saturation:a,brightness:s,alpha:i=1}=Wg(e,"b");return{hue:o,saturation:a,brightness:s,alpha:i}}const Qg="Polaris-ColorPicker",Jg="Polaris-ColorPicker__MainColor",Zg="Polaris-ColorPicker--fullWidth",ef="Polaris-ColorPicker__Dragger",tf="Polaris-ColorPicker__ColorLayer",of="Polaris-ColorPicker__HuePicker",af="Polaris-ColorPicker__AlphaPicker",nf="Polaris-ColorPicker__Slidable";var mt={ColorPicker:Qg,MainColor:Jg,fullWidth:Zg,Dragger:ef,ColorLayer:tf,HuePicker:of,AlphaPicker:af,Slidable:nf};const sf=["data-dragging"],Hn=L({props:{draggerX:{default:0},draggerY:{default:0}},emits:["change","dragger-height"],setup(e,{emit:o}){const a=e;Mt();const s=A(!1),i=A(null),l=A(null),c=A(0),m=A(0),b=d(()=>({transform:`translate3d(${c.value||a.draggerX}px, ${m.value||a.draggerY}px, 0)`}));Pr||window.addEventListener("touchmove",N=>{s.value&&N.preventDefault()},{passive:!1}),se(()=>{l.value&&o("dragger-height",l.value.clientWidth)});const T=N=>{if(B(N)){const{clientX:I,clientY:q}=N;x(I,q)}s.value=!0},f=()=>{s.value=!1},g=N=>{if(N.stopImmediatePropagation(),N.stopPropagation(),N.cancelable&&N.preventDefault(),C(N)){const q=N;x(q.clientX,q.clientY);return}const I=N;x(I.touches[0].clientX,I.touches[0].clientY)},x=(N,I)=>{if(i.value){const q=i.value.getBoundingClientRect(),E=N-q.left,F=I-q.top;o("change",{x:E,y:F})}};function C(N){return N.type==="mousemove"}function B(N){return N.type==="mousedown"}return(N,I)=>(r(),p("div",{ref_key:"slidableRef",ref:i,class:u(n(mt).Slidable),"data-dragging":s.value,onMousedown:T,onTouchstart:T},[s.value?(r(),P(n(He),{key:0,event:"mouseup",handler:f})):$("",!0),s.value?(r(),P(n(He),{key:1,event:"mousemove",handler:g,passive:!1})):$("",!0),s.value?(r(),P(n(He),{key:2,event:"touchmove",handler:g,passive:!1})):$("",!0),s.value?(r(),P(n(He),{key:3,event:"touchend",handler:f})):$("",!0),s.value?(r(),P(n(He),{key:4,event:"touchcancel",handler:f})):$("",!0),S("div",{style:Oe(n(b)),class:u(n(mt).Dragger),ref_key:"draggerRef",ref:l},null,6)],42,sf))}});Hn.__docgenInfo={exportName:"default",displayName:"Slidable",description:"",tags:{},props:[{name:"draggerX",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"draggerY",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"change",type:{names:["{ x: number; y: number; }"]}},{name:"dragger-height",type:{names:["number"]}}]};const nc=L({props:{color:null,alpha:null},emits:["change"],setup(e,{emit:o}){const a=e,s=A(null),i=A(0),l=A(0),c=d(()=>Ld(a.alpha,i.value,l.value)),m=d(()=>{const{red:g,green:x,blue:C}=In(a.color),B=`${g}, ${x}, ${C}`;return`linear-gradient(to top, rgba(${B}, 0) 18px, rgba(${B}, 1) calc(100% - 18px))`});se(()=>{b()});const b=()=>{s.value&&(i.value=s.value.clientHeight)},T=g=>{l.value=g},f=({y:g})=>{const x=_d(g,i.value);o("change",x)};return(g,x)=>(r(),p("div",{class:u(n(mt).AlphaPicker),ref_key:"alphaPickerRef",ref:s},[S("div",{class:u(n(mt).ColorLayer),style:Oe({background:n(m)})},"\xA0",6),_(n(Hn),{draggerY:n(c),draggerX:0,onChange:f,onDraggerHeight:T},null,8,["draggerY"])],2))}});nc.__docgenInfo={exportName:"default",displayName:"AlphaPicker",description:"",tags:{},props:[{name:"color",required:!0,type:{name:"HSBColor"}},{name:"alpha",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const sc=L({props:{hue:null},emits:["change"],setup(e,{emit:o}){const a=e,s=A(null),i=A(0),l=A(0),c=d(()=>kd(a.hue,i.value,l.value));se(()=>{m()});const m=()=>{s.value&&(i.value=s.value.clientHeight)},b=f=>{l.value=f},T=({y:f})=>{const g=wd(f,i.value);o("change",g)};return(f,g)=>(r(),p("div",{class:u(n(mt).HuePicker),ref_key:"huePickerRef",ref:s},[_(n(Hn),{draggerY:n(c),draggerX:0,onChange:T,onDraggerHeight:b},null,8,["draggerY"])],2))}});sc.__docgenInfo={exportName:"default",displayName:"HuePicker",description:"",tags:{},props:[{name:"hue",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const lf=["id","onMousedown"],Vn=L({props:{id:null,modelValue:null,allowAlpha:{type:Boolean},fullWidth:{type:Boolean},outputType:null},emits:["change","update:modelValue"],setup(e,{emit:o}){const a=e,s=200,i=A(null),l=Cn({hue:0,saturation:0,brightness:0,alpha:1}),c=Cn({width:0,height:0}),m=E=>{E.preventDefault()},b=d(()=>O(mt.ColorPicker,a.fullWidth&&mt.fullWidth)),T=d(()=>l.alpha!==void 0&&a.allowAlpha?l.alpha:1),f=d(()=>{const{red:E,green:F,blue:W}=In({hue:l.hue,saturation:1,brightness:1});return`rgba(${E}, ${F}, ${W}, ${T.value})`}),g=d(()=>qt(l.saturation*c.width,0,c.width)),x=d(()=>qt(c.height-l.brightness*c.height,0,c.height)),C=d(()=>{if(a.outputType==="hex")return Kg(l);if(a.outputType==="rgb"){const E=In(l);return`rgba(${E.red}, ${E.green}, ${E.blue}, ${T.value})`}return l}),B=jo(()=>{i.value&&(c.width=i.value.clientWidth,c.height=i.value.clientHeight)},s,{leading:!0,trailing:!0,maxWait:s});if(typeof a.modelValue=="object"&&Object.assign(l,a.modelValue),typeof a.modelValue=="string"){let E;if(/#[0-9abcdef]{3,6}/.test(a.modelValue))E=w(y({},Xg(a.modelValue)),{alpha:1});else{const F=a.modelValue.replace(/^rgba?\(|\s+|\)$/g,"").split(",");E={red:parseInt(F[0],10),green:parseInt(F[1],10),blue:parseInt(F[2],10),alpha:F[2]?parseFloat(F[3]):1}}Object.assign(l,w(y({},Yg(E)),{alpha:E.alpha}))}se(()=>{i.value&&(c.width=i.value.clientWidth,c.height=i.value.clientHeight)});const N=E=>{l.hue=E,o("change",C.value),o("update:modelValue",C.value)},I=E=>{l.alpha=E,o("change",C.value),o("update:modelValue",C.value)},q=({x:E,y:F})=>{l.saturation=qt(E/c.width,0,1),l.brightness=qt(1-F/c.height,0,1),o("change",C.value),o("update:modelValue",C.value)};return(E,F)=>(r(),p("div",{id:e.id,class:u(n(b)),onMousedown:Er(m,["prevent"])},[S("div",{ref_key:"mainColorRef",ref:i,class:u(n(mt).MainColor)},[S("div",{class:u(n(mt).ColorLayer),style:Oe({backgroundColor:n(f)})},"\xA0",6),_(n(Hn),{draggerX:n(g),draggerY:n(x),onChange:q},null,8,["draggerX","draggerY"])],2),_(n(sc),{hue:n(l).hue,onChange:N},null,8,["hue"]),e.allowAlpha?(r(),P(n(nc),{key:0,alpha:n(T),color:n(l),onChange:I},null,8,["alpha","color"])):$("",!0),_(n(He),{event:"resize",handler:n(B)},null,8,["handler"])],42,lf))}});Vn.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:`The currently selected color.
The color can be HSB object (same with Shopify) or RGB, Hex string`,required:!0,type:{name:"union",elements:[{name:"Color"},{name:"string"}]}},{name:"allowAlpha",description:"Allow user to select an alpha value",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow HuePicker to take the full width",required:!1,type:{name:"boolean"}},{name:"outputType",description:"Color output format",required:!1,type:{name:"union",elements:[{name:'"hsb"'},{name:'"rgb"'},{name:'"hex"'}]}}],events:[{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const rf="Polaris-Combobox__Listbox";var cf={Listbox:rf};const zt=L({props:{allowMultiple:{type:Boolean},preferredPosition:null},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const a=e;Fe("comboboxListboxOptionContext",{allowMultiple:a.allowMultiple});const s=A(!1),i=A(""),l=A(""),c=A(!1),m=A(""),b=Te(),T=d(()=>{var E;return(E=b.default)==null?void 0:E.call(b)}),f=d(()=>!s.value&&T),g=()=>{a.allowMultiple||(s.value=!1,i.value="")},x=()=>{s.value=!1,i.value=""},C=()=>{f.value&&(s.value=!0)},B=()=>{f.value&&(s.value=!0)},N=()=>{s.value&&(s.value=!1,i.value="")},I={activeOptionId:i.value,expanded:s.value,listboxId:l.value,setTextFieldFocused:E=>{c.value=E},setTextFieldLabelId:E=>{m.value=E},onTextFieldFocus:C,onTextFieldChange:B,onTextFieldBlur:N};Fe("comboboxTextFieldContext",I);const q={setActiveOptionId:E=>{i.value=E},setListboxId:E=>{l.value=E},listboxId:l.value,textFieldLabelId:m.value,onOptionSelected:g,textFieldFocused:c.value,onKeyToBottom:()=>{o("scrolled-to-bottom")}};return Fe("comboboxListboxContext",q),(E,F)=>(r(),P(n(tt),{active:s.value,autofocusTarget:"none",preventFocusOnClose:!0,fullWidth:!0,preferInputActivator:!1,preferredPosition:e.preferredPosition,onClose:x},Ve({_:2},[n(b).activator?{name:"activator",fn:v(()=>[h(E.$slots,"activator")])}:void 0,n(b).default?{name:"content",fn:v(()=>[_(n(On),{onScrolledToBottom:F[0]||(F[0]=W=>E.$emit("scrolled-to-bottom"))},{default:v(()=>[S("div",{class:u(n(cf).Listbox)},[h(E.$slots,"default")],2)]),_:3})])}:void 0]),1032,["active","preferredPosition"]))}});zt.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"default"}]};function qi(e){return`${e}Label`}const uf="Polaris-TextField",df="Polaris-TextField--multiline",pf="Polaris-TextField__Input",mf="Polaris-TextField--hasValue",yf="Polaris-TextField--focus",hf="Polaris-TextField__Backdrop",gf="Polaris-TextField--error",ff="Polaris-TextField--readOnly",bf="Polaris-TextField--disabled",vf="Polaris-TextField__Prefix",xf="Polaris-TextField__Suffix",Tf="Polaris-TextField__CharacterCount",Sf="Polaris-TextField__AlignFieldBottom",Cf="Polaris-TextField__ClearButton",Af="Polaris-TextField__Hidden",Lf="Polaris-TextField__Spinner",_f="Polaris-TextField__SpinnerIcon",kf="Polaris-TextField__Resizer",wf="Polaris-TextField__DummyInput",Mf="Polaris-TextField__Segment",If="Polaris-TextField--monospaced";var me={TextField:uf,multiline:df,Input:pf,hasValue:mf,focus:yf,Backdrop:hf,error:gf,readOnly:ff,disabled:bf,Prefix:vf,"Input-hasClearButton":"Polaris-TextField__Input--hasClearButton","Input-suffixed":"Polaris-TextField__Input--suffixed","Input-alignRight":"Polaris-TextField__Input--alignRight","Input-alignLeft":"Polaris-TextField__Input--alignLeft","Input-alignCenter":"Polaris-TextField__Input--alignCenter",Suffix:xf,CharacterCount:Tf,AlignFieldBottom:Sf,ClearButton:Cf,Hidden:Af,Spinner:Lf,SpinnerIcon:_f,Resizer:kf,DummyInput:wf,Segment:Mf,monospaced:If};function Bf(e){return`${e}Error`}function Ri(e){return`${e}HelpText`}const ic=L({emits:["click","change","mouseup","mousedown"],setup(e,{emit:o}){const a=s=>{o("click"),o("change",s)};return(s,i)=>(r(),p("div",{"aria-hidden":"true",class:u(n(me).Spinner)},[S("div",{role:"button",tabindex:"-1",class:u(n(me).Segment),onClick:i[0]||(i[0]=l=>a(1)),onMousedown:i[1]||(i[1]=l=>s.$emit("mousedown")),onMouseup:i[2]||(i[2]=l=>s.$emit("mouseup"))},[S("div",{class:u(n(me).SpinnerIcon)},[_(n(ae),{source:n($r)},null,8,["source"])],2)],34),S("div",{role:"button",tabindex:"-1",class:u(n(me).Segment),onClick:i[3]||(i[3]=l=>a(-1)),onMousedown:i[4]||(i[4]=l=>s.$emit("mousedown")),onMouseup:i[5]||(i[5]=l=>s.$emit("mouseup"))},[S("div",{class:u(n(me).SpinnerIcon)},[_(n(ae),{source:n(Mi)},null,8,["source"])],2)],34)],2))}});ic.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},events:[{name:"mousedown"},{name:"mouseup"},{name:"click"},{name:"change",type:{names:["number"]}}]};const Pf=["innerHTML"],Nf=["innerHTML"],lc=L({props:{contents:null,currentHeight:null,minimumLines:null},emits:["height-change"],setup(e,{emit:o}){const a=e,s={"&":"&amp;","<":"&lt;",">":"&gt;","\n":"<br>","\r":""},i=new RegExp(`[${Object.keys(s).join()}]`,"g"),l=A(null),c=A(null),m=A(),b=A(a.currentHeight),T=C=>s[C],f=C=>C?`${C.replace(i,T)}<br>`:"<br>",g=C=>{let B="";for(let N=0;N<C;N++)B+="<br>";return B},x=()=>{m.value&&cancelAnimationFrame(m.value),m.value=requestAnimationFrame(()=>{if(!l.value||!c.value)return;const C=Math.max(l.value.offsetHeight,c.value.offsetHeight);C!==b.value&&o("height-change",C)})};return se(()=>{m.value&&cancelAnimationFrame(m.value)}),Xo(()=>{x()}),(C,B)=>(r(),p("div",{"aria-hidden":"true",class:u(n(me).Resizer)},[_(n(He),{event:"resize",handler:x}),S("div",{ref_key:"contentNode",ref:l,class:u(n(me).DummyInput),innerHTML:f(e.contents)},null,10,Pf),e.minimumLines?(r(),p("div",{key:0,ref_key:"minimumLinesNode",ref:c,class:u(n(me).DummyInput),innerHTML:g(e.minimumLines)},null,10,Nf)):$("",!0)],2))}});lc.__docgenInfo={exportName:"default",displayName:"Resizer",description:"",tags:{},props:[{name:"contents",required:!1,type:{name:"string"}},{name:"currentHeight",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"minimumLines",required:!1,type:{name:"number"}}],events:[{name:"height-change",type:{names:["number"]}}]};const Df="Polaris-Connected",$f="Polaris-Connected__Item";var Tn={Connected:Df,Item:$f,"Item-primary":"Polaris-Connected__Item--primary","Item-focused":"Polaris-Connected__Item--focused"};const Sn=L({props:{position:null},emits:["focus","blur"],setup(e,{emit:o}){const a=e,s=A(!1),i=d(()=>O(Tn.Item,s.value&&Tn["Item-focused"],a.position==="primary"&&Tn["Item-primary"])),l=()=>{s.value=!0,o("focus")},c=()=>{s.value=!1,o("blur")};return(m,b)=>(r(),p("div",{class:u(n(i)),onFocus:l,onBlur:c},[h(m.$slots,"default")],34))}});Sn.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"position",required:!0,type:{name:"ItemPosition"}}],events:[{name:"focus"},{name:"blur"}],slots:[{name:"default"}]};const rc=L({setup(e){return(o,a)=>(r(),p("div",{class:u(n(Tn).Connected)},[o.$slots.left?(r(),P(n(Sn),{key:0,position:"left"},{default:v(()=>[h(o.$slots,"left")]),_:3})):$("",!0),o.$slots.default?(r(),P(n(Sn),{key:1,position:"primary"},{default:v(()=>[h(o.$slots,"default")]),_:3})):$("",!0),o.$slots.right?(r(),P(n(Sn),{key:2,position:"right"},{default:v(()=>[h(o.$slots,"right")]),_:3})):$("",!0)],2))}});rc.__docgenInfo={exportName:"default",displayName:"Connected",description:"",tags:{},slots:[{name:"left"},{name:"default"},{name:"right"}]};const Ff="Polaris-Labelled--hidden",Ef="Polaris-Labelled__LabelWrapper",Of="Polaris-Labelled__HelpText",qf="Polaris-Labelled__Action";var fa={hidden:Ff,LabelWrapper:Ef,HelpText:Of,Error:"Polaris-Labelled__Error",Action:qf};const Rf="Polaris-Label",Hf="Polaris-Label--hidden",Vf="Polaris-Label__Text",Uf="Polaris-Label__RequiredIndicator";var bn={Label:Rf,hidden:Hf,Text:Vf,RequiredIndicator:Uf};const jf=["id","for"],cc=L({props:{id:null,hidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,a=d(()=>O(bn.Label,o.hidden&&bn.hidden)),s=d(()=>O(bn.Text,o.requiredIndicator&&bn.RequiredIndicator));return(i,l)=>(r(),p("div",{class:u(n(a))},[S("label",{id:n(qi)(e.id),for:e.id,class:u(n(s))},[h(i.$slots,"default")],10,jf)],2))}});cc.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"string"}},{name:"hidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const zf=["id"],Hi=L({props:{id:null,error:{type:[null,Boolean]},action:null,labelHidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,a=d(()=>o.error&&typeof o.error!="boolean"),s=d(()=>O(o.labelHidden&&fa.hidden));return(i,l)=>(r(),p("div",{class:u(n(s))},[i.$slots.label?(r(),p("div",{key:0,class:u(n(fa).LabelWrapper)},[_(n(cc),pe({id:e.id,requiredIndicator:e.requiredIndicator,hidden:!1},i.$attrs),{default:v(()=>[h(i.$slots,"label")]),_:3},16,["id","requiredIndicator"]),e.action?(r(),p("div",{key:0,class:u(n(fa).Action)},null,2)):$("",!0)],2)):$("",!0),h(i.$slots,"default"),n(a)?(r(),p("div",{key:1,class:u(n(fa).Error)},[typeof e.error=="string"?(r(),P(n(jt),{key:0,message:e.error,fieldID:n(Bf)(e.id)},null,8,["message","fieldID"])):(r(),P(Le(e.error),{key:1}))],2)):$("",!0),i.$slots["help-text"]?(r(),p("div",{key:2,class:u(n(fa).HelpText),id:n(Ri)(e.id)},[h(i.$slots,"help-text")],10,zf)):$("",!0)],2))}});Hi.__docgenInfo={exportName:"default",displayName:"Labelled",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"TSIndexedAccessType"}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"action",description:"An action",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"label"},{name:"default"},{name:"help-text"}]};const Wf=["id"],Xf=["id"],Gf=["aria-live"],Kf=["disabled"],Yf=S("p",null,"Clear button",-1),Ae=L({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:null,name:null,id:null,role:null,step:null,autoComplete:{type:[String,Boolean]},max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue","clear-button-click"],setup(e,{emit:o}){const a=e,s=A(null),i=A(null),l=A(null),c=Te(),m=d(()=>{var j;return(j=c["connected-left"])==null?void 0:j.call(c)}),b=d(()=>{var j;return(j=c["connected-right"])==null?void 0:j.call(c)}),T=d(()=>{var j;return(j=c["help-text"])==null?void 0:j.call(c)}),f=d(()=>{var j;return(j=c.prefix)==null?void 0:j.call(c)}),g=d(()=>{var j;return(j=c.suffix)==null?void 0:j.call(c)}),x=A(),C=A(),B=A();De(()=>a.focused,()=>{!l.value||!a.focused===void 0||(a.focused?l.value.focus():l.value.blur())});const{useUniqueId:N}=we(),I=d(()=>N("TextField",a.id)),q=d(()=>a.type==="currency"?"text":a.type),E=d(()=>{if(!!a.multiline)return typeof a.multiline=="number"?a.multiline:1}),F=d(()=>re.value!==""),W=d(()=>a.multiline&&x.value?{height:`${x.value}px`}:{}),D=d(()=>O(me.TextField,Boolean(re.value)&&me.hasValue,a.disabled&&me.disabled,a.readOnly&&me.readOnly,a.error&&me.error,a.multiline&&me.multiline,C.value&&me.focus)),U=d(()=>{const j=a.align&&me[Ce("Input-align",a.align)];return O(me.Input,j,g.value&&me["Input-suffixed"],a.clearButton&&me["Input-hasClearButton"],a.monospaced&&me.monospaced)}),M=d(()=>O(me.CharacterCount,a.multiline&&me.AlignFieldBottom)),V=d(()=>O(me.Backdrop,m.value&&me["Backdrop-connectedLeft"],b.value&&me["Backdrop-connectedRight"])),Z=d(()=>O(me.ClearButton,!F.value&&me.AlignFieldBottom)),re=d(()=>typeof a.modelValue=="string"?a.modelValue:""),ie=d(()=>a.step?a.step:1),_e=d(()=>a.max?a.max:1/0),z=d(()=>a.min?a.min:-1/0),ne=d(()=>{if(!!a.multiline)return Boolean(a.multiline)||a.multiline>0?{"aria-multiline":!0}:void 0}),Pe=d(()=>a.autoComplete===!0?"on":a.autoComplete===!1?"off":a.autoComplete),Se=d(()=>re.value.length),be=d(()=>a.maxLength?Se.value:`${Se.value}/${a.maxLength}`),ce=d(()=>{const j=[];return a.error&&j.push(`${I.value}Error`),T.value&&j.push(Ri(I.value)),a.showCharacterCount&&j.push(`${I.value}CharacterCounter`),j.length?j.join(" "):void 0}),de=d(()=>{const j=[];return f.value&&j.push(`${I.value}Prefix`),g.value&&j.push(`${I.value}Suffix`),j.unshift(qi(I.value)),j.join(" ")}),qe=j=>{x.value=j},G=j=>j instanceof HTMLElement&&(s.value&&s.value.contains(j)||i.value&&i.value.contains(j)),ve=j=>{var ee;const ke=j.target;G(ke)||C.value||(ee=l.value)==null||ee.focus()},ue=j=>{const ke=j.target;G(ke)||(C.value=!0)},xe=j=>{const ke=j.target;G(ke)||(C.value=!1)},Xe=j=>{const ke=j.target;o("update:modelValue",ke.value),o("change",j)},rt=j=>{a.selectTextOnFocus&&l.value&&l.value.select(),o("focus",j)},Bt=j=>{const ke=ya=>(ya.toString().split(".")[1]||[]).length,ee=a.modelValue?parseFloat(a.modelValue):0;if(typeof ee!="number")return;const $e=Math.max(ke(ee),ke(ie.value)),vt=Math.min(Number(_e.value),Math.max(ee+j*ie.value,Number(z.value)));o("update:modelValue",String(vt.toFixed($e)))},bt=()=>{clearTimeout(B.value)},Pt=()=>{let ee=200;const $e=()=>{ee>50&&(ee-=10),Bt(0),B.value=window.setTimeout($e,ee)};B.value=window.setTimeout($e,ee),document.addEventListener("mouseup",bt,{once:!0})},ma=j=>{const{key:ke,which:ee}=y({},j),$e=/[\d.eE+-]$/;a.type!=="number"||ee!==13||$e.test(ke)||j.preventDefault()};return(j,ke)=>(r(),P(n(Hi),{id:n(I),error:e.error,action:e.labelAction,labelHidden:e.labelHidden,requiredIndicator:e.requiredIndicator},Ve({default:v(()=>[_(n(rc),null,Ve({default:v(()=>[S("div",{class:u(n(D)),onFocus:ue,onClick:ve,onBlur:xe},[n(c).prefix?(r(),p("div",{key:0,id:`${n(I)}Prefix`,class:u(n(me).Prefix),ref_key:"prefixRef",ref:s},[h(j.$slots,"prefix")],10,Wf)):$("",!0),(r(),P(Le(e.multiline?"textarea":"input"),pe({id:n(I),name:e.name,disabled:e.disabled,readonly:e.readOnly,role:e.role,autofocus:e.autoFocus,value:e.modelValue,placeholder:e.placeholder,style:n(W),autocomplete:n(Pe),class:n(U),ref_key:"inputRef",ref:l,min:e.min,max:e.max,step:e.step,minlength:e.minLength,maxlength:e.maxLength,spellcheck:e.spellCheck,pattern:e.pattern,inputMode:e.inputMode,rows:n(E),type:n(q),"aria-describedby":n(ce),"aria-labelledby":n(de),"aria-invalid":Boolean(e.error),"aria-owns":e.ariaOwns,"aria-activedescendant":e.ariaActiveDescendant,"aria-autocomplete":e.ariaAutocomplete,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-required":e.requiredIndicator},n(ne),{onInput:Xe,onKeydown:ma,onFocus:rt,onBlur:ke[0]||(ke[0]=ee=>j.$emit("blur"))}),{default:v(()=>[e.multiline?(r(),p(te,{key:0},[ye(X(e.modelValue),1)],64)):$("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"])),n(c).suffix?(r(),p("div",{key:1,id:`${n(I)}Suffix`,class:u(n(me).Suffix),ref_key:"suffixRef",ref:i},[h(j.$slots,"suffix")],10,Xf)):$("",!0),e.showCharacterCount?(r(),p("div",{key:2,class:u(n(M)),"aria-live":C.value?"polite":"off","aria-atomic":"true"},[S("p",null,X(n(be)),1)],10,Gf)):$("",!0),n(F)&&e.clearButton?(r(),p("button",{key:3,class:u(n(Z)),disabled:e.disabled,onClick:ke[1]||(ke[1]=ee=>j.$emit("clear-button-click",e.id))},[_(n(Ue),null,{default:v(()=>[Yf]),_:1}),_(n(ae),{source:n(Or),color:"base"},null,8,["source"])],10,Kf)):$("",!0),e.type==="number"&&e.step!==0&&!e.disabled&&!e.readOnly?(r(),P(n(ic),{key:4,onChange:Bt,onMousedown:Pt,onMouseup:bt})):$("",!0),S("div",{class:u(n(V))},null,2),e.multiline?(r(),P(n(lc),{key:5,contents:n(re)||e.placeholder,currentHeight:x.value,minimumLines:typeof e.multiline=="number"?e.multiline:1,onHeightChange:qe},null,8,["contents","currentHeight","minimumLines"])):$("",!0)],34)]),_:2},[n(c)["connected-left"]?{name:"left",fn:v(()=>[h(j.$slots,"connected-left")])}:void 0,n(c)["connected-right"]?{name:"right",fn:v(()=>[h(j.$slots,"connected-right")])}:void 0]),1024)]),_:2},[n(c).label?{name:"label",fn:v(()=>[h(j.$slots,"label")])}:void 0,n(c)["help-text"]?{name:"help-text",fn:v(()=>[h(j.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden","requiredIndicator"]))}});Ae.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"blur"},{name:"clear-button-click",type:{names:["string"]}},{name:"focus",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"connected-left"},{name:"connected-right"},{name:"prefix"},{name:"suffix"}]};const _a=L({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:null,name:null,id:null,role:null,step:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const a=e,s=Be("comboboxTextFieldContext",{}),{activeOptionId:i,listboxId:l,expanded:c,setTextFieldFocused:m,setTextFieldLabelId:b,onTextFieldFocus:T,onTextFieldChange:f,onTextFieldBlur:g}=s,{useUniqueId:x}=we(),C=x("ComboboxTextField"),B=d(()=>a.id||C),N=d(()=>qi(a.id||C));De([()=>N.value,()=>b],()=>{b&&b(N.value)});const I=()=>{o("focus"),T&&T(),m&&m(!0)},q=()=>{o("blur"),g&&g(),m&&m(!1)},E=F=>{const W=F.target;o("update:modelValue",W.value),o("change",F),f&&f()};return(F,W)=>(r(),P(n(Ae),pe(a,{id:n(B),autoComplete:"list","aria-haspopup":"listbox",ariaActiveDescendant:n(i),ariaControls:n(l),ariaExpanded:n(c),modelValue:e.modelValue,onFocus:I,onBlur:q,onChange:E}),Ve({_:2},[F.$slots.label?{name:"label",fn:v(()=>[h(F.$slots,"label")])}:void 0,F.$slots["help-text"]?{name:"help-text",fn:v(()=>[h(F.$slots,"help-text")])}:void 0,F.$slots.prefix?{name:"prefix",fn:v(()=>[h(F.$slots,"prefix")])}:void 0,F.$slots.suffix?{name:"suffix",fn:v(()=>[h(F.$slots,"suffix")])}:void 0,F.$slots["connected-left"]?{name:"connected-left",fn:v(()=>[h(F.$slots,"connected-left")])}:void 0,F.$slots["connected-right"]?{name:"connected-right",fn:v(()=>[h(F.$slots,"connected-right")])}:void 0]),1040,["id","ariaActiveDescendant","ariaControls","ariaExpanded","modelValue"]))}});_a.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"},{name:"connected-left"},{name:"connected-right"}]};function Qo(){const e=Be("frameContext",{});function o(){if(!e)throw new am("No frame context was provided.");return e}return{useFrame:o}}const ka=L({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean},contextControl:null,secondaryMenu:null},setup(e){const o=e;Mt();const{useFrame:a}=Qo(),{setContextualSaveBar:s,removeContextualSaveBar:i}=a(),l=Te();return se(()=>{const{message:c,saveAction:m,discardAction:b,alignContentFlush:T,fullWidth:f}=o;s({message:c,saveAction:m,discardAction:b,alignContentFlush:T,fullWidth:f,contextControl:l.contextControl&&l.contextControl(),secondaryMenu:l.secondaryMenu&&l.secondaryMenu()})}),Ke(()=>{i()}),(c,m)=>null}});ka.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}},{name:"contextControl",description:"Accepts a component that is used to help users switch between different contexts",required:!1,type:{name:"any"}},{name:"secondaryMenu",description:"Accepts a node that is rendered to the left of the discard and save actions",required:!1,type:{name:"any"}}]};const Qf="Polaris-DatePicker",Jf="Polaris-DatePicker__MonthLayout",Zf="Polaris-DatePicker__MonthContainer",eb="Polaris-DatePicker__Month",tb="Polaris-DatePicker__DayCell",ob="Polaris-DatePicker__Day",ab="Polaris-DatePicker__EmptyDayCell",nb="Polaris-DatePicker__Weekday",sb="Polaris-DatePicker__Header",ib="Polaris-DatePicker__Title",lb="Polaris-DatePicker__Week";var ge={DatePicker:Qf,MonthLayout:Jf,MonthContainer:Zf,Month:eb,"Month-current":"Polaris-DatePicker__Month--current",DayCell:tb,"DayCell-inRange":"Polaris-DatePicker__DayCell--inRange",Day:ob,"Day-today":"Polaris-DatePicker__Day--today","Day-inRange":"Polaris-DatePicker__Day--inRange","Day-selected":"Polaris-DatePicker__Day--selected","Day-disabled":"Polaris-DatePicker__Day--disabled",EmptyDayCell:ab,Weekday:nb,"Weekday-current":"Polaris-DatePicker__Weekday--current",Header:sb,Title:ib,"Day-firstInRange":"Polaris-DatePicker__Day--firstInRange","Day-hasRange":"Polaris-DatePicker__Day--hasRange","Day-hoverRight":"Polaris-DatePicker__Day--hoverRight","Day-lastInRange":"Polaris-DatePicker__Day--lastInRange",Week:lb};const Ht={months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}};function va(e){switch(e){case 0:return"january";case 1:return"february";case 2:return"march";case 3:return"april";case 4:return"may";case 5:return"june";case 6:return"july";case 7:return"august";case 8:return"september";case 9:return"october";case 10:return"november";case 11:return"december"}}function ql(e){switch(e){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}const rb=["tabIndex","aria-label","aria-disabled","aria-pressed"],Si=L({props:{focused:{type:Boolean},day:null,selected:{type:Boolean},inRange:{type:Boolean},inHoveringRange:{type:Boolean},disabled:{type:Boolean},lastDayOfMonth:null,isLastSelectedDay:{type:Boolean},isFirstSelectedDay:{type:Boolean},isHoveringRight:{type:Boolean},rangeIsDifferent:{type:Boolean},weekday:null,selectedAccessibilityLabelPrefix:null},emits:["focus","hover","click"],setup(e,{emit:o}){const a=e,s=A(null),i=d(()=>a.lastDayOfMonth||a.day),l=d(()=>a.day?ut(new Date,a.day):null),c=d(()=>a.day?a.day.getDate():null),m=d(()=>(a.focused||a.selected||l.value||c.value===1)&&!a.disabled?0:-1),b=d(()=>O(ge.DayCell,a.selected&&ge["DayCell-selected"],(a.inRange||a.inHoveringRange)&&!a.disabled&&ge["DayCell-inRange"],a.isLastSelectedDay&&ge["DayCell-lastInRange"],a.isFirstSelectedDay&&ge["DayCell-firstInRange"],a.isHoveringRight&&ge["DayCell-hoverRight"],a.rangeIsDifferent&&ge["DayCell-hasRange"])),T=d(()=>O(ge.Day,a.selected&&ge["Day-selected"],a.disabled&&ge["Day-disabled"],l.value&&ge["Day-today"],(a.inRange||a.inHoveringRange)&&!a.disabled&&ge["Day-inRange"],a.isLastSelectedDay&&ge["Day-lastInRange"],a.isFirstSelectedDay&&ge["Day-firstInRange"],a.isHoveringRight&&ge["Day-hoverRight"],a.rangeIsDifferent&&ge["Day-hasRange"])),f=d(()=>{if(!a.day)return null;const N=va(a.day.getMonth());return N?Ht.months[N]:""}),g=d(()=>[a.selected&&a.selectedAccessibilityLabelPrefix?`${a.selectedAccessibilityLabelPrefix} `:"",`${l.value?"Today ":""}`,`${a.weekday?a.weekday:""} `,`${f.value} `,`${c.value} `,`${a.day?a.day.getFullYear():new Date().getFullYear()}`].join(""));Xo(()=>{a.focused&&s.value&&setTimeout(()=>{s.value.focus()},10)});const x=()=>{o("focus",a.day)},C=()=>{o("hover",i.value)},B=()=>{!a.disabled&&a.day&&o("click",a.day)};return(N,I)=>e.day?(r(),p("td",{key:0,class:u(n(b))},[S("button",{type:"button",ref_key:"dayRef",ref:s,tabIndex:n(m),class:u(n(T)),"aria-label":n(g),"aria-disabled":e.disabled,"aria-pressed":e.selected,onFocus:x,onMouseover:C,onClick:B},X(n(c)),43,rb)],2)):(r(),p("td",{key:1,class:u(n(ge).EmptyDayCell),onMouseover:C},null,34))}});Si.__docgenInfo={exportName:"default",displayName:"Day",description:"",tags:{},props:[{name:"focused",required:!1,type:{name:"boolean"}},{name:"day",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"inRange",required:!1,type:{name:"boolean"}},{name:"inHoveringRange",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"lastDayOfMonth",required:!1,type:{name:"any"}},{name:"isLastSelectedDay",required:!1,type:{name:"boolean"}},{name:"isFirstSelectedDay",required:!1,type:{name:"boolean"}},{name:"isHoveringRight",required:!1,type:{name:"boolean"}},{name:"rangeIsDifferent",required:!1,type:{name:"boolean"}},{name:"weekday",required:!1,type:{name:"string"}},{name:"selectedAccessibilityLabelPrefix",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["union"]}},{name:"hover",type:{names:["union"]}},{name:"click",type:{names:["Date"]}}]};const cb=["aria-label"],uc=L({props:{label:null,title:null,current:{type:Boolean}},setup(e){const o=e,a=d(()=>O(ge.Weekday,o.current&&ge["Weekday-current"]));return(s,i)=>(r(),p("th",{"aria-label":e.label,scope:"col",class:u(n(a))},X(e.title),11,cb))}});uc.__docgenInfo={exportName:"default",displayName:"Weekday",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"current",required:!0,type:{name:"boolean"}}]};const Ci=L({props:{focusedDate:null,selected:null,hoverDate:null,month:null,year:null,disableDatesBefore:null,disableDatesAfter:null,allowRange:{type:Boolean},weekStartsOn:null,accessibilityLabelPrefixes:null},emits:["focus","hover","click","change"],setup(e,{emit:o}){const a=e,s=new Date,i=d(()=>s.getMonth()===a.month&&s.getFullYear()===a.year),l=d(()=>O(ge.Title,i.value&&ge["Month-current"])),c="Polaris-DatePicker__WeekHeadings",m=d(()=>Md(a.month,a.year,a.weekStartsOn)),b=d(()=>{const M=va(a.month);return M?Ht.months[M]:""}),T=d(()=>Id(a.weekStartsOn)),f=d(()=>new Date(a.year,a.month+1,0)),g=d(()=>!(a.selected&&ut(a.selected.start,a.selected.end))),x=M=>{const V=Nd(a.allowRange?a.selected:void 0,M);o("change",V)},C=M=>a.disableDatesBefore&&Ln(M,a.disableDatesBefore)||a.disableDatesAfter&&_n(M,a.disableDatesAfter),B=M=>a.allowRange&&a.selected&&U(M,a.selected),N=M=>a.allowRange&&a.selected&&(!ut(a.selected.start,a.selected.end)&&D(M,a.selected)||a.hoverDate&&ut(a.selected.start,a.selected.end)&&_n(a.hoverDate,a.selected.start)&&ut(M,a.hoverDate)&&!B(M)),I=M=>a.hoverDate&&Ln(M,a.hoverDate),q=M=>{if(!a.accessibilityLabelPrefixes)return"";const[V,Z]=a.accessibilityLabelPrefixes;if(a.allowRange&&B(M)||!a.allowRange&&V)return V;if(a.allowRange&&N(M))return Z},E=(M,V,Z)=>{if(!a.allowRange||!V||!Z||M==null)return!1;const{start:re,end:ie}=V;return Boolean(ut(re,ie)&&M>re&&M<=Z)};function F(M){const V=ql(M);return V?Ht.daysAbbreviated[V]:""}function W(M){const V=ql(M);return V?Ht.days[V]:""}function D(M,V){if(M==null)return!1;const{end:Z}=V;return Boolean(Z&&ut(Z,M))}function U(M,V){if(M==null)return!1;const{start:Z}=V;return Boolean(Z&&ut(Z,M))}return(M,V)=>(r(),p("div",{class:u(n(ge).MonthContainer)},[S("table",{role:"grid",class:u(n(ge).Month)},[S("caption",{class:u(n(l))},X(n(b))+" "+X(e.year),3),S("thead",null,[S("tr",{class:u(c)},[(r(!0),p(te,null,fe(n(T),Z=>(r(),P(n(uc),{key:Z,title:F(Z),label:W(Z),current:n(i)&&new Date().getDay()===Z},null,8,["title","label","current"]))),128))])]),S("tbody",null,[(r(!0),p(te,null,fe(n(m),(Z,re)=>(r(),p("tr",{key:re,class:u(n(ge).Week)},[(r(!0),p(te,null,fe(Z,(ie,_e)=>(r(),p(te,{key:_e},[ie?(r(),P(n(Si),{key:1,selectedAccessibilityLabelPrefix:q(ie),weekday:W(_e),focused:e.focusedDate&&n(ut)(ie,e.focusedDate),day:ie,selected:e.selected&&n(Bd)(ie,e.selected),inRange:e.selected&&n(Pd)(ie,e.selected),disabled:C(ie),inHoveringRange:E(ie,e.selected,e.hoverDate),isLastSelectedDay:N(ie),isFirstSelectedDay:B(ie),isHoveringRight:I(ie),rangeIsDifferent:n(g),onFocus:z=>M.$emit("focus",ie),onClick:x,onHover:z=>M.$emit("hover",ie)},null,8,["selectedAccessibilityLabelPrefix","weekday","focused","day","selected","inRange","disabled","inHoveringRange","isLastSelectedDay","isFirstSelectedDay","isHoveringRight","rangeIsDifferent","onFocus","onHover"])):(r(),P(n(Si),{key:0,lastDayOfMonth:n(f),onHover:V[0]||(V[0]=z=>M.$emit("hover",null))},null,8,["lastDayOfMonth"]))],64))),128))],2))),128))])],2)],2))}});Ci.__docgenInfo={exportName:"default",displayName:"Month",description:"",tags:{},props:[{name:"focusedDate",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"Range"}},{name:"hoverDate",required:!1,type:{name:"Date"}},{name:"month",required:!0,type:{name:"number"}},{name:"year",required:!0,type:{name:"number"}},{name:"disableDatesBefore",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",required:!1,type:{name:"Date"}},{name:"allowRange",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",required:!0,type:{name:"number"}},{name:"accessibilityLabelPrefixes",required:!1,type:{name:"TSTupleType"}}],events:[{name:"hover",type:{names:["union"]}},{name:"focus",type:{names:["union"]}},{name:"click",type:{names:["Date"]}},{name:"change",type:{names:["union"]}}]};const ub=["id"],Un=L({props:{id:null,modelValue:null,month:null,year:null,allowRange:{type:Boolean},disableDatesBefore:null,disableDatesAfter:null,multiMonth:{type:Boolean},weekStartsOn:{default:0},dayAccessibilityLabelPrefix:null},emits:["month-change","change","update:modelValue"],setup(e,{emit:o}){const a=e,s=A(),i=A(),l=d(()=>Ll(a.month,a.year)),c=d(()=>_l(a.month)),m=d(()=>Ll(c.value,l.value)),b=d(()=>_l(c.value)),T=d(()=>$d(a.month,a.year)),f=d(()=>Fd(a.month)),g=d(()=>{const z=va(f.value);return z?Ht.months[z]:""}),x=d(()=>{if(a.multiMonth){const ne=va(b.value);return ne?Ht.months[ne]:""}const z=va(c.value);return z?Ht.months[z]:""}),C=d(()=>a.multiMonth?m.value:l.value),B=d(()=>_e(a.modelValue)),N=d(()=>a.allowRange?"Start of range":a.dayAccessibilityLabelPrefix),I="End of range",q=d(()=>[N.value,I]),E=d(()=>`Show previous month, ${g.value} ${T.value}`),F=d(()=>`Show next month, ${x.value} ${C.value}`),W=(z,ne)=>{o("month-change",{month:z,year:ne})},D=(z,ne)=>{s.value=void 0,W(z,ne)},U=z=>{s.value=z||void 0},M=z=>{i.value=z||void 0},V=z=>{W(z.getMonth(),z.getFullYear()),i.value=z,s.value=z},Z=z=>{if(z){const{end:ne}=z;i.value=ne,s.value=new Date(ne),o("update:modelValue",z)}o("change",z)},re=z=>{const{key:ne}=z,Pe=_e(a.modelValue),Se=s.value||Pe&&Pe.start;if(!!Se){if(ne==="ArrowUp"){const be=new Date(Se);be.setDate(Se.getDate()-7),a.disableDatesBefore&&Ln(be,a.disableDatesBefore)||V(be)}if(ne==="ArrowDown"){const be=new Date(Se);be.setDate(Se.getDate()+7),a.disableDatesAfter&&_n(be,a.disableDatesAfter)||V(be)}if(ne==="ArrowRight"){const be=new Date(Se);be.setDate(Se.getDate()+1),a.disableDatesAfter&&_n(be,a.disableDatesAfter)||V(be)}if(ne==="ArrowLeft"){const be=new Date(Se);be.setDate(Se.getDate()-1),a.disableDatesBefore&&Ln(be,a.disableDatesBefore)||V(be)}}},ie=z=>{const{key:ne}=z;(ne==="ArrowUp"||ne==="ArrowDown"||ne==="ArrowLeft"||ne==="ArrowRight")&&(z.preventDefault(),z.stopPropagation())};function _e(z){return z instanceof Date?{start:z,end:z}:z}return(z,ne)=>(r(),p("div",{id:e.id,class:u(n(ge).DatePicker),onKeydown:ie,onKeyup:re},[S("div",{class:u(n(ge).Header)},[_(n(he),{plain:"",icon:n(kn),accessibilityLabel:n(E),onClick:ne[0]||(ne[0]=Pe=>D(n(f),n(T)))},null,8,["icon","accessibilityLabel"]),_(n(he),{plain:"",icon:n(Dd),accessibilityLabel:n(F),onClick:ne[1]||(ne[1]=Pe=>D(n(c),n(l)))},null,8,["icon","accessibilityLabel"])],2),S("div",{class:u(n(ge).MonthLayout)},[_(n(Ci),{focusedDate:s.value,month:e.month,year:e.year,selected:_e(e.modelValue),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:n(q),onChange:Z,onHover:M,onFocus:U},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"]),e.multiMonth?(r(),P(n(Ci),{key:0,focusedDate:s.value,month:n(c),year:n(l),selected:n(B),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:n(q),onChange:Z,onHover:M,onFocus:U},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"])):$("",!0)],2)],42,ub))}});Un.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:"The selected date or range of dates",required:!1,type:{name:"Range"}},{name:"month",description:"The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December",required:!0,type:{name:"number"}},{name:"year",description:"The year to show",required:!0,type:{name:"number"}},{name:"allowRange",description:"Allow a range of dates to be selected",required:!1,type:{name:"boolean"}},{name:"disableDatesBefore",description:"Disable selecting dates before this.",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",description:"Disable selecting dates after this.",required:!1,type:{name:"Date"}},{name:"multiMonth",description:"The selection can span multiple months",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",description:"First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"dayAccessibilityLabelPrefix",description:"Visually hidden prefix text for selected days on single selection date pickers",required:!1,type:{name:"string"}}],events:[{name:"month-change",type:{names:["{ month: number, year: number }"]}},{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const db="Polaris-DescriptionList",pb="Polaris-DescriptionList__Term",mb="Polaris-DescriptionList--spacingTight",yb="Polaris-DescriptionList__Description";var Bn={DescriptionList:db,Term:pb,spacingTight:mb,Description:yb};const jn=L({props:{spacing:{default:"loose"}},setup(e){const o=e,a=d(()=>O(Bn.DescriptionList,o.spacing==="tight"&&Bn.spacingTight));return(s,i)=>(r(),p("dl",{class:u(n(a))},[h(s.$slots,"default")],2))}});jn.__docgenInfo={exportName:"default",displayName:"DescriptionList",description:"",tags:{},props:[{name:"spacing",description:"Determines the spacing between list items",tags:{default:[{description:"'loose'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"loose"'},{name:'"tight"'}]},defaultValue:{func:!1,value:"'loose'"}}],slots:[{name:"default"}]};const dc=L({setup(e){const o=O(Bn.Term);return(a,s)=>(r(),p("dt",{class:u(n(o))},[h(a.$slots,"default")],2))}});dc.__docgenInfo={exportName:"default",displayName:"DescriptionListTerm",description:"",tags:{},slots:[{name:"default"}]};const pc=L({setup(e){const o=O(Bn.Description);return(a,s)=>(r(),p("dd",{class:u(n(o))},[h(a.$slots,"default")],2))}});pc.__docgenInfo={exportName:"default",displayName:"DescriptionListDesc",description:"",tags:{},slots:[{name:"default"}]};const hb="Polaris-DisplayText",gb="Polaris-DisplayText--sizeSmall",fb="Polaris-DisplayText--sizeMedium",bb="Polaris-DisplayText--sizeLarge",vb="Polaris-DisplayText--sizeExtraLarge";var Rl={DisplayText:hb,sizeSmall:gb,sizeMedium:fb,sizeLarge:bb,sizeExtraLarge:vb};const wa=L({props:{element:{default:"p"},size:{default:"medium"}},setup(e){const o=e,a=d(()=>O(Rl.DisplayText,o.size&&Rl[Ce("size",o.size)]));return(s,i)=>(r(),P(Le(e.element),{class:u(n(a))},{default:v(()=>[h(s.$slots,"default")]),_:3},8,["class"]))}});wa.__docgenInfo={exportName:"default",displayName:"DisplayText",description:"",tags:{},props:[{name:"element",description:"Name of element to use for text",tags:{default:[{description:"'p'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'p'"}},{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}]};const xb="Polaris-ExceptionList",Tb="Polaris-ExceptionList__Item",Sb="Polaris-ExceptionList__Icon",Cb="Polaris-ExceptionList--statusWarning",Ab="Polaris-ExceptionList--statusCritical",Lb="Polaris-ExceptionList__Bullet",_b="Polaris-ExceptionList__Title",kb="Polaris-ExceptionList__Description";var dt={ExceptionList:xb,Item:Tb,Icon:Sb,statusWarning:Cb,statusCritical:Ab,Bullet:Lb,Title:_b,Description:kb};const mc=L({setup(e){return(o,a)=>(r(),p("ul",{class:u(n(dt).ExceptionList)},[h(o.$slots,"default")],2))}});mc.__docgenInfo={exportName:"default",displayName:"ExceptionList",description:"",tags:{},slots:[{name:"default"}]};const wb="Polaris-Truncate";var Mb={Truncate:wb};const yc=L({setup(e){return(o,a)=>{const s=qr("component");return r(),P(s,{class:u(n(Mb).Truncate)},{default:v(()=>[h(o.$slots,"default")]),_:3},8,["class"])}}});yc.__docgenInfo={exportName:"default",displayName:"Truncate",description:"",tags:{},slots:[{name:"default"}]};const zn=L({props:{status:null,icon:null,title:null,truncate:{type:Boolean}},setup(e){const o=e,a=Te(),s=d(()=>O(dt.Item,o.status&&dt[Ce("status",o.status)]));return(i,l)=>(r(),p("li",{class:u(n(s))},[S("span",{class:u(n(dt).Icon)},[e.icon?(r(),P(n(ae),{key:0,source:e.icon},null,8,["source"])):(r(),p("span",{key:1,class:u(n(dt).Bullet)},null,2))],2),e.truncate?(r(),P(n(yc),{key:0},{default:v(()=>[e.title?(r(),p("span",{key:0,class:u(n(dt).Title)},X(e.title),3)):$("",!0),n(a).default?(r(),p("span",{key:1,class:u(n(dt).Description)},[h(i.$slots,"default")],2)):$("",!0)]),_:3})):(r(),p(te,{key:1},[e.title?(r(),p("span",{key:0,class:u(n(dt).Title)},X(e.title),3)):$("",!0),n(a).default?(r(),p("span",{key:1,class:u(n(dt).Description)},[h(i.$slots,"default")],2)):$("",!0)],64))],2))}});zn.__docgenInfo={exportName:"default",displayName:"ExceptionListItem",description:"",tags:{},props:[{name:"status",description:"Set the color of the icon and title for the given item.",required:!1,type:{name:"union",elements:[{name:'"critical"'},{name:'"warning"'}]}},{name:"icon",description:"Icon displayed by the list item",required:!1,type:{name:"IconSource"}},{name:"title",description:"Text displayed beside the icon",required:!1,type:{name:"string"}},{name:"truncate",description:"Should the description be truncated at end of line",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Ib={inheritAttrs:!1,render(){return null}},hc=L(w(y({},Ib),{props:{disabled:{type:Boolean},root:null},setup(e){const o=e,a=()=>{!o.disabled&&o.root&&!o.root.querySelector("[autofocus]")&&Fn(o.root,!1)};return De([()=>o.disabled,()=>o.root],()=>a()),se(()=>{a()}),()=>{}}}));hc.__docgenInfo={exportName:"default",displayName:"Focus",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"root",required:!0,type:{name:"union",elements:[{name:"HTMLElement"},{name:"null"}]}}]};const Bb="Polaris-FooterHelp",Pb="Polaris-FooterHelp__Text";var Hl={FooterHelp:Bb,Text:Pb};const Wn=L({setup(e){return(o,a)=>(r(),p("div",{class:u(n(Hl).FooterHelp)},[S("div",{class:u(n(Hl).Text)},[h(o.$slots,"default")],2)],2))}});Wn.__docgenInfo={exportName:"default",displayName:"FooterHelp",description:"",tags:{},slots:[{name:"default"}]};const Nb=S("button",{type:"submit","aria-hidden":"true",tabIndex:"-1"},"Submit",-1),Db=L({props:{implicitSubmit:{type:Boolean,default:!0},preventDefault:{type:Boolean}},emits:["submit"],setup(e,{emit:o}){const a=e,s=i=>{a.preventDefault&&i.preventDefault(),o("submit",i)};return(i,l)=>(r(),p("form",{onSubmit:s},[e.implicitSubmit?(r(),P(n(Ue),{key:0},{default:v(()=>[Nb]),_:1})):$("",!0),h(i.$slots,"default")],32))}});Db.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"implicitSubmit",description:"Toggles if form submits on Enter keypress. Defaults to true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"preventDefault",description:"Blocks the default form action",required:!1,type:{name:"boolean"}}],events:[{name:"submit",type:{names:["Event"]}}],slots:[{name:"default"}]};const $b="Polaris-FormLayout",Fb="Polaris-FormLayout__Title",Eb="Polaris-FormLayout__Items",Ob="Polaris-FormLayout__HelpText",qb="Polaris-FormLayout__Item",Rb="Polaris-FormLayout--grouped",Hb="Polaris-FormLayout--condensed";var Lt={FormLayout:$b,Title:Fb,Items:Eb,HelpText:Ob,Item:qb,grouped:Rb,condensed:Hb};const Vi=L({setup(e){return(o,a)=>(r(),p("div",{class:u(n(Lt).Item)},[h(o.$slots,"default")],2))}});Vi.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const Vb=L({props:{condensed:{type:Boolean}},setup(e,{expose:o}){const a=e,s=Te(),{useUniqueId:i}=we(),l=i("FormLayoutGroup"),c=`${l}HelpText`,m=`${l}Title`;o({name:"FormGroup"});const b=d(()=>O(a.condensed?Lt.condensed:Lt.grouped));return(T,f)=>(r(),p("div",{role:"group",class:u(n(b)),"aria-labelledby":m,"aria-describedby":c},[n(s).title?(r(),p("div",{key:0,id:m,class:u(n(Lt).Title)},[h(T.$slots,"title")],2)):$("",!0),S("div",{class:u(n(Lt).Items)},[n(s).default?(r(!0),p(te,{key:0},fe(n(s).default(),(g,x)=>(r(),P(n(Vi),{key:x},{default:v(()=>[(r(),P(Le(g)))]),_:2},1024))),128)):h(T.$slots,"default",{key:1})],2),n(s)["help-text"]?(r(),p("div",{key:1,id:c,class:u(n(Lt).HelpText)},[h(T.$slots,"help-text")],2)):$("",!0)],2))}});Vb.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"condensed",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"},{name:"help-text"}]};const Xn=L({setup(e){const o=A([]),a=A([]),s=Te();return Ed(()=>{o.value=[]}),se(()=>{o.value.forEach(i=>{a.value.push(i.name==="FormGroup")})}),(i,l)=>(r(),p("div",{class:u(n(Lt).FormLayout)},[n(s).default?(r(!0),p(te,{key:0},fe(n(s).default(),(c,m)=>(r(),p(te,null,[a.value[m]?(r(),P(Le(c),{key:1,ref_for:!0,ref:b=>{o.value[m]=b}},null,512)):(r(),P(n(Vi),{key:m,class:u(n(Lt).Item)},{default:v(()=>[(r(),P(Le(c),{ref_for:!0,ref:b=>{o.value[m]=b}},null,512))]),_:2},1032,["class"]))],64))),256)):h(i.$slots,"default",{key:1})],2))}});Xn.__docgenInfo={exportName:"default",displayName:"FormLayout",description:"",tags:{},slots:[{name:"default"}]};const Ub={ActionMenu:{Actions:{moreActions:"More actions"},RollupActions:{rollupButton:"View actions"}},Avatar:{label:"Avatar",labelWithInitials:"Avatar with initials {initials}"},Autocomplete:{spinnerAccessibilityLabel:"Loading",ellipsis:"{content}\u2026"},Badge:{PROGRESS_LABELS:{incomplete:"Incomplete",partiallyComplete:"Partially complete",complete:"Complete"},STATUS_LABELS:{info:"Info",success:"Success",warning:"Warning",critical:"Critical",attention:"Attention",new:"New"},progressAndStatus:"{statusLabel} {progressLabel}"},Button:{spinnerAccessibilityLabel:"Loading",connectedDisclosureAccessibilityLabel:"Related actions"},Common:{checkbox:"checkbox",undo:"Undo",cancel:"Cancel",newWindowAccessibilityHint:"(opens a new window)",clear:"Clear",close:"Close",submit:"Submit",more:"More"},ContextualSaveBar:{save:"Save",discard:"Discard"},DataTable:{sortAccessibilityLabel:"sort {direction} by",navAccessibilityLabel:"Scroll table {direction} one column",totalsRowHeading:"Totals",totalRowHeading:"Total"},DatePicker:{previousMonth:"Show previous month, {previousMonthName} {showPreviousYear}",nextMonth:"Show next month, {nextMonth} {nextYear}",today:"Today ",start:"Start of range",end:"End of range",months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}},DiscardConfirmationModal:{title:"Discard all unsaved changes",message:"If you discard changes, you\u2019ll delete any edits you made since you last saved.",primaryAction:"Discard changes",secondaryAction:"Continue editing"},DropZone:{single:{overlayTextFile:"Drop file to upload",overlayTextImage:"Drop image to upload",actionTitleFile:"Add file",actionTitleImage:"Add image",actionHintFile:"or drop file to upload",actionHintImage:"or drop image to upload",labelFile:"Upload file",labelImage:"Upload image"},allowMultiple:{overlayTextFile:"Drop files to upload",overlayTextImage:"Drop images to upload",actionTitleFile:"Add files",actionTitleImage:"Add images",actionHintFile:"or drop files to upload",actionHintImage:"or drop images to upload",labelFile:"Upload files",labelImage:"Upload images"},errorOverlayTextFile:"File type is not valid",errorOverlayTextImage:"Image type is not valid"},EmptySearchResult:{altText:"Empty search results"},Frame:{skipToContent:"Skip to content",navigationLabel:"Navigation",Navigation:{closeMobileNavigationLabel:"Close navigation"}},Filters:{moreFilters:"More filters",moreFiltersWithCount:"More filters ({count})",filter:"Filter {resourceName}",noFiltersApplied:"No filters applied",cancel:"Cancel",done:"Done",clearAllFilters:"Clear all filters",clear:"Clear",clearLabel:"Clear {filterName}"},IndexProvider:{defaultItemSingular:"Item",defaultItemPlural:"Items",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} are selected.",selected:"{selectedItemsCount} selected",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}"},IndexTable:{emptySearchTitle:"No {resourceNamePlural} found",emptySearchDescription:"Try changing the filters or search term",onboardingBadgeText:"New",resourceLoadingAccessibilityLabel:"Loading {resourceNamePlural}\u2026",selectAllLabel:"Select all {resourceNamePlural}",selected:"{selectedItemsCount} selected",undo:"Undo",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural}",selectItem:"Select {resourceName}",selectButtonText:"Select"},Loading:{label:"Page loading bar"},Modal:{iFrameTitle:"body markup",modalWarning:"These required properties are missing from Modal: {missingProps}"},Page:{Header:{rollupActionsLabel:"View actions for {title}"}},Pagination:{previous:"Previous",next:"Next",pagination:"Pagination"},ProgressBar:{negativeWarningMessage:"Values passed to the progress prop shouldn\u2019t be negative. Resetting {progress} to 0.",exceedWarningMessage:"Values passed to the progress prop shouldn\u2019t exceed 100. Setting {progress} to 100."},ResourceList:{sortingLabel:"Sort by",defaultItemSingular:"item",defaultItemPlural:"items",showing:"Showing {itemsCount} {resource}",showingTotalCount:"Showing {itemsCount} of {totalItemsCount} {resource}",loading:"Loading {resource}",selected:"{selectedItemsCount} selected",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} in your store are selected.",allFilteredItemsSelected:"All {itemsLength}+ {resourceNamePlural} in this filter are selected.",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural} in your store",selectAllFilteredItems:"Select all {itemsLength}+ {resourceNamePlural} in this filter",emptySearchResultTitle:"No {resourceNamePlural} found",emptySearchResultDescription:"Try changing the filters or search term",selectButtonText:"Select",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}",ariaLiveSingular:"{itemsLength} item",ariaLivePlural:"{itemsLength} items",Item:{actionsDropdownLabel:"Actions for {accessibilityLabel}",actionsDropdown:"Actions dropdown",viewItem:"View details for {itemName}"},BulkActions:{actionsActivatorLabel:"Actions",moreActionsActivatorLabel:"More actions",warningMessage:"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions."}},SkeletonPage:{loadingLabel:"Page loading"},Tabs:{toggleTabsLabel:"More tabs"},Tag:{ariaLabel:"Remove {children}"},TextField:{characterCount:"{count} characters",characterCountWithMaxLength:"{count} of {limit} characters used"},TooltipOverlay:{accessibilityLabel:"Tooltip: {label}"},TopBar:{toggleMenuLabel:"Toggle menu",SearchField:{clearButtonLabel:"Clear",search:"Search"}},MediaCard:{popoverButton:"Actions"},VideoThumbnail:{playButtonA11yLabel:{default:"Play video",defaultWithDuration:"Play video of length {duration}",duration:{hours:{other:{only:"{hourCount} hours",andMinutes:"{hourCount} hours and {minuteCount} minutes",andMinute:"{hourCount} hours and {minuteCount} minute",minutesAndSeconds:"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hours, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hours, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hours and {secondCount} seconds",andSecond:"{hourCount} hours and {secondCount} second"},one:{only:"{hourCount} hour",andMinutes:"{hourCount} hour and {minuteCount} minutes",andMinute:"{hourCount} hour and {minuteCount} minute",minutesAndSeconds:"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hour, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hour, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hour and {secondCount} seconds",andSecond:"{hourCount} hour and {secondCount} second"}},minutes:{other:{only:"{minuteCount} minutes",andSeconds:"{minuteCount} minutes and {secondCount} seconds",andSecond:"{minuteCount} minutes and {secondCount} second"},one:{only:"{minuteCount} minute",andSeconds:"{minuteCount} minute and {secondCount} seconds",andSecond:"{minuteCount} minute and {secondCount} second"}},seconds:{other:"{secondCount} seconds",one:"{secondCount} second"}}}}};var Ee={Polaris:Ub};function Vl(e,o,a){if(!document)return;(a||document.documentElement).style.setProperty(e,o)}const jb="Polaris-Frame",zb="Polaris-Frame__Navigation",Wb="Polaris-Frame--hasTopBar",Xb="Polaris-Frame__NavigationDismiss",Gb="Polaris-Frame__TopBar",Kb="Polaris-Frame__ContextualSaveBar",Yb="Polaris-Frame__Main",Qb="Polaris-Frame--hasNav",Jb="Polaris-Frame__Content",Zb="Polaris-Frame__GlobalRibbonContainer",ev="Polaris-Frame__LoadingBar",tv="Polaris-Frame__Skip",ov="Polaris-Frame--focused",av="Polaris-Frame--pressed";var Me={Frame:jb,Navigation:zb,hasTopBar:Wb,"Navigation-enter":"Polaris-Frame__Navigation--enter","Navigation-enterActive":"Polaris-Frame__Navigation--enterActive","Navigation-exit":"Polaris-Frame__Navigation--exit","Navigation-exitActive":"Polaris-Frame__Navigation--exitActive",NavigationDismiss:Xb,"Navigation-visible":"Polaris-Frame__Navigation--visible",TopBar:Gb,ContextualSaveBar:Kb,Main:Yb,hasNav:Qb,Content:Jb,GlobalRibbonContainer:Zb,LoadingBar:ev,Skip:tv,focused:ov,pressed:av};const nv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},sv=S("path",{d:"m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"},null,-1),iv=[sv];function lv(e,o){return r(),p("svg",nv,iv)}var Ui={render:lv};const rv="Polaris-Frame-CssAnimation--startFade",cv="Polaris-Frame-CssAnimation--endFade";var Ul={startFade:rv,endFade:cv};const gc=L({props:{in:{type:Boolean},type:null},setup(e){const o=e,a=A(null),s=A(o.in?"entering":"exited"),i=d(()=>O(Ul[Ce("start",o.type)],o.in&&Ul[Ce("end",o.type)]));De(()=>s.value,()=>{s.value==="entering"&&c("entered")}),De(()=>o.in,()=>{o.in&&c("entering"),!o.in&&c("exiting")});const l=()=>{s.value==="exiting"&&c("exited")},c=m=>{s.value=m,m==="entering"&&a.value&&a.value.getBoundingClientRect()};return(m,b)=>(r(),p("div",{class:u(n(i)),ref_key:"frameCssAnimationRef",ref:a,onTransitionend:l},[s.value!=="exited"||o.in?h(m.$slots,"default",{key:0}):$("",!0)],34))}});gc.__docgenInfo={exportName:"default",displayName:"CssAnimation",description:"",tags:{},props:[{name:"in",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"AnimationType"}}],slots:[{name:"default"}]};function uv(e){const o=typeof e;return e!=null&&(o==="object"||o==="function")}function fc(e,o){if(!e)return null;const a=Object.keys(e);for(const s of a){if(s===o)return e[o];if(uv(e[s])){const i=fc(e[s],o);if(i)return i}}return null}function ji(e={},o=0,a="width"){const s=typeof e=="number"?e:fc(e,a);return s?`${s}px`:`${o}px`}const dv="Polaris-Frame-ContextualSaveBar",pv="Polaris-Frame-ContextualSaveBar__LogoContainer",mv="Polaris-Frame-ContextualSaveBar__ContextControl",yv="Polaris-Frame-ContextualSaveBar__Message",hv="Polaris-Frame-ContextualSaveBar__Contents",gv="Polaris-Frame-ContextualSaveBar--fullWidth",fv="Polaris-Frame-ContextualSaveBar__ActionContainer",bv="Polaris-Frame-ContextualSaveBar__Action";var $t={ContextualSaveBar:dv,LogoContainer:pv,ContextControl:mv,Message:yv,Contents:hv,fullWidth:gv,ActionContainer:fv,Action:bv};const bc=L({props:{open:{type:Boolean}},emits:["discard","cancel"],setup(e,{emit:o}){const a=Ee.Polaris.DiscardConfirmationModal.message,s=Ee.Polaris.DiscardConfirmationModal.title,i=Ee.Polaris.DiscardConfirmationModal.primaryAction,l=Ee.Polaris.DiscardConfirmationModal.secondaryAction,c=()=>{o("discard")},m=()=>{o("cancel")};return(b,T)=>(r(),P(n(Wt),{open:e.open,onClose:m,primaryAction:{content:n(i),destructive:!0,onAction:c},secondaryActions:[{content:n(l),onAction:m}],sectioned:""},{title:v(()=>[ye(X(n(s)),1)]),content:v(()=>[ye(X(n(a)),1)]),_:1},8,["open","primaryAction","secondaryActions"]))}});bc.__docgenInfo={exportName:"default",displayName:"DiscardConfirmationModal",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}}],events:[{name:"discard"},{name:"cancel"}]};const vc=L({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean},contextControl:null,secondaryMenu:null},setup(e){const o=e,a=Te(),s=d(()=>O($t.Contents,o.fullWidth&&$t.fullWidth)),i=Ee.Polaris.ContextualSaveBar.save,l=Ee.Polaris.ContextualSaveBar.discard,{useFrame:c}=Qo(),{logo:m}=c(),b=ji(m,104),T=A(!1),f=()=>{T.value=!T.value},g=()=>{T.value=!1},x=()=>{o.discardAction&&(o.discardAction.discardConfirmationModal?f():o.discardAction.onAction&&o.discardAction.onAction())},C=()=>{o.discardAction&&o.discardAction.onAction&&o.discardAction.onAction(),g()};return(B,N)=>(r(),p(te,null,[_(n(Go),{"color-scheme":"dark"},{default:v(()=>[S("div",{class:u(n($t).ContextualSaveBar)},[n(a).contextControl?(r(),p("div",{key:0,class:u(n($t).ContextControl)},[h(B.$slots,"contextControl")],2)):$("",!0),!e.alignContentFlush&&!n(a).contextControl?(r(),p("div",{key:1,class:u(n($t).LogoContainer),style:Oe(n(b))},[n(m)?(r(),P(n(Ko),{key:0,style:Oe({width:n(b)}),source:n(m).contextualSaveBarSource||"",alt:""},null,8,["style","source"])):$("",!0)],6)):$("",!0),S("div",{class:u(n(s))},[S("h2",{class:u(n($t).Message)},X(e.message),3),S("div",{class:u(n($t).ActionContainer)},[_(n(at),{spacing:"tight",wrap:!1},{default:v(()=>[h(B.$slots,"secondaryMenu"),e.discardAction?(r(),P(n(he),{key:0,url:e.discardAction.url,loading:e.discardAction.loading,disabled:e.discardAction.disabled,accessibilityLabel:e.discardAction.content,onClick:x},{default:v(()=>[e.discardAction.content?(r(),p(te,{key:0},[ye(X(e.discardAction.content),1)],64)):(r(),p(te,{key:1},[ye(X(n(l)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel"])):$("",!0),e.saveAction?(r(),P(n(he),{key:1,primary:"",url:e.saveAction.url,loading:e.saveAction.loading,disabled:e.saveAction.disabled,accessibilityLabel:e.saveAction.content,onClick:e.saveAction.onAction},{default:v(()=>[e.saveAction.content?(r(),p(te,{key:0},[ye(X(e.saveAction.content),1)],64)):(r(),p(te,{key:1},[ye(X(n(i)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel","onClick"])):$("",!0)]),_:3})],2)],2)],2)]),_:3}),e.discardAction&&e.discardAction.onAction&&e.discardAction.discardConfirmationModal?(r(),P(n(bc),{key:0,open:T.value,onCancel:f,onDiscard:C},null,8,["open"])):$("",!0)],64))}});vc.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}},{name:"contextControl",description:"Accepts a component that is used to help users switch between different contexts",required:!1,type:{name:"any"}},{name:"secondaryMenu",description:"Accepts a node that is rendered to the left of the discard and save actions",required:!1,type:{name:"any"}}],slots:[{name:"contextControl"},{name:"secondaryMenu"}]};const vv="Polaris-Frame-Loading",xv="Polaris-Frame-Loading__Level";var jl={Loading:vv,Level:xv};const Tv=["aria-valuenow","aria-label"],xc=L({setup(e){const a=A(0),s=A(!1),i=d(()=>({transform:`scaleX(${Math.floor(a.value)/100})`}));se(()=>{l()}),De(()=>[s.value,a.value],()=>{l()});const l=()=>{a.value>=99||s.value||requestAnimationFrame(()=>{const m=Math.max((99-a.value)/10,1);s.value=!0,a.value=a.value+m})},c=()=>{s.value=!1};return(m,b)=>(r(),p("div",{class:u(n(jl).Loading),"aria-valuenow":a.value,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar","aria-label":n(Ee).Polaris.Loading.label},[S("div",{class:u(n(jl).Level),style:Oe(n(i)),onTransitionend:c},null,38)],10,Tv))}});xc.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const Sv="Polaris-Frame-Toast",Cv="Polaris-Frame-Toast__Action",Av="Polaris-Frame-Toast--error",Lv="Polaris-Frame-Toast__CloseButton";var vn={Toast:Sv,Action:Cv,error:Av,CloseButton:Lv};const Tc=L({props:{content:null,duration:null,error:{type:Boolean},action:null},emits:["dismiss"],setup(e,{emit:o}){const a=e,s=5e3,i=1e4,l=A(),c=d(()=>O(vn.Toast,a.error&&vn.error));se(()=>{let b=a.duration||s;a.action&&!a.duration?b=i:a.action&&a.duration&&a.duration<i&&console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it."),l.value=setTimeout(m,b)}),Ke(()=>{clearTimeout(l.value)});const m=()=>{o("dismiss")};return(b,T)=>(r(),P(n(Go),{"color-scheme":"dark"},{default:v(()=>[S("div",{class:u(n(c))},[_(n(et),{keyCode:n(We).Escape,handler:m},null,8,["keyCode"]),ye(X(e.content),1),h(b.$slots,"default"),e.action?(r(),p("div",{key:0,class:u(n(vn).Action)},[_(n(he),{plain:"",monochrome:"",onClick:e.action.onAction},{default:v(()=>[ye(X(e.action.content),1)]),_:1},8,["onClick"])],2)):$("",!0),S("button",{type:"button",class:u(n(vn).CloseButton),onClick:m},[_(n(ae),{source:n(Ui)},null,8,["source"])],2)],2)]),_:3}))}});Tc.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const _v="Polaris-Frame-ToastManager",kv="Polaris-Frame-ToastManager__ToastWrapper";var ba={ToastManager:_v,ToastWrapper:kv,"ToastWrapper-enter":"Polaris-Frame-ToastManager__ToastWrapper--enter","ToastWrapper-exit":"Polaris-Frame-ToastManager__ToastWrapper--exit","ToastWrapper-enter-done":"Polaris-Frame-ToastManager--toastWrapperEnterDone"};const Sc=L({props:{toastMessages:null},setup(e){const o=e,a=400,s=A([]),i=A(!1),l=()=>{let g=0;o.toastMessages.forEach((x,C)=>{const B=s.value[C];!B||(g+=B.clientHeight,B.style.setProperty("--pc-toast-manager-translate-y-in",`-${g}px`),B.style.setProperty("--pc-toast-manager-translate-y-out",`${-g+150}px`))})},c=g=>{g.classList.add(f.enterDone)},m=g=>{g.classList.add(f.enter)},b=(g,x)=>{g.classList.remove(f.enter),g.classList.add(f.enterDone),setTimeout(x,a)},T=(g,x)=>{g.classList.remove(f.enterDone),g.classList.add(f.exit),setTimeout(x,a)};De(()=>o.toastMessages,()=>{setTimeout(l,0)}),se(()=>{i.value=!0});const f={enter:O(ba["ToastWrapper-enter"]),enterDone:O(ba["ToastWrapper-enter-done"]),exit:O(ba["ToastWrapper-exit"])};return(g,x)=>i.value?(r(),P(n(qn),{key:0},{default:v(()=>[_(n(He),{event:"resize",handler:l}),S("div",{class:u(n(ba).ToastManager),"aria-live":"assertive"},[_(Od,{name:"custom-classes",onAfterEnter:c,onBeforeEnter:m,onEnter:b,onLeave:T},{default:v(()=>[e.toastMessages.length>0?(r(!0),p(te,{key:0},fe(e.toastMessages,(C,B)=>(r(),p("div",{key:C.id,ref_for:!0,ref:N=>{s.value[B]=N},class:u(n(ba).ToastWrapper)},[_(n(Tc),_t(An(C)),null,16)],2))),128)):$("",!0)]),_:1})],2)]),_:1})):$("",!0)}});Sc.__docgenInfo={exportName:"default",displayName:"ToastManager",description:"",tags:{},props:[{name:"toastMessages",required:!0,type:{name:"Array",elements:[{name:"ToastPropsWithID"}]}}]};function zi(){const e=Be("mediaQueryContext",{});function o(){if(!e)throw new Ii("No mediaQuery was provided.");return e}return{useMediaQuery:o}}const wv=["data-has-navigation"],Mv=["href"],Iv=["aria-label","hidden"],Bv=["aria-hidden","aria-label","tabIndex"],Pv=["data-has-global-ribbon"],gt=L({props:{logo:null,offset:null,showMobileNavigation:{type:Boolean},skipToContentTarget:null},emits:["navigation-dismiss"],setup(e,{emit:o}){const a=e,s="AppFrameMain",i="AppFrameNav",l="AppFrameTopBar",c="AppFrameLoadingBar",m=400,b=300,T=Te(),f=A(!1),g=A(0),x=A(0),C=A([]),B=A(!1),N=A(null),I=A(null),{useMediaQuery:q}=zi(),{isNavigationCollapsed:E}=q(),F=A(null),W=()=>{F.value&&(g.value=F.value.offsetHeight,qe())},D=d(()=>O(Me.Navigation,a.showMobileNavigation&&Me["Navigation-visible"])),U={enter:O(Me["Navigation-enter"]),enterActive:O(Me["Navigation-enterActive"]),enterDone:O(Me["Navigation-enterActive"]),exit:O(Me["Navigation-exit"]),exitActive:O(Me["Navigation-exitActive"])},M=ee=>{ee.classList.add(U.enterDone)},V=ee=>{ee.classList.add(U.enter)},Z=(ee,$e)=>{ee.classList.remove(U.enter),ee.classList.add(U.enterDone),setTimeout($e,b)},re=ee=>{ee.classList.remove(U.enterActive),ee.classList.add(U.exitActive)},ie=(ee,$e)=>{ee.classList.add(U.exit),setTimeout($e,b)},_e=d(()=>E&&!a.showMobileNavigation),z=d(()=>E&&a.showMobileNavigation),ne=z.value?0:-1,Pe=y({},z.value&&{"aria-modal":!0,role:"dialog"}),Se=d(()=>O(Me.Frame,T.navigation&&Me.hasNav,T.topBar&&Me.hasTopBar)),be=d(()=>O(Me.Skip,f.value&&Me.focused)),ce=d(()=>a.skipToContentTarget?a.skipToContentTarget.id:s);se(()=>{Bt(),!T.globalRibbon&&(qe(),de())}),De(()=>T.globalRibbon,()=>{W(),de()});const de=()=>{Vl("--pc-frame-offset",a.offset||"0px")},qe=()=>{Vl("--pc-frame-global-ribbon-height",`${g.value}px`)},G=ee=>{const $e=C.value.find(({id:vt})=>vt===ee.id)!=null;C.value=$e?C.value:[...C.value,ee]},ve=({id:ee})=>{C.value=C.value.filter(({id:$e})=>ee!==$e)},ue=ee=>{N.value=y({},ee),B.value||(B.value=!0)},xe=()=>{B.value=!1,setTimeout(()=>{N.value=null},m)},Xe=()=>{x.value=x.value+1},rt=()=>{x.value=Math.max(0,x.value-1)},Bt=()=>{T.globalRibbon&&W()},bt=()=>{f.value=!0},Pt=()=>{f.value=!1},ma=ee=>{a.skipToContentTarget&&(a.skipToContentTarget.focus(),ee.preventDefault())},j=()=>{o("navigation-dismiss")},ke=ee=>{const{key:$e}=ee;E&&a.showMobileNavigation&&$e==="Escape"&&j()};return Fe("frameContext",{logo:a.logo,showToast:G,hideToast:ve,startLoading:Xe,stopLoading:rt,setContextualSaveBar:ue,removeContextualSaveBar:xe}),(ee,$e)=>(r(),p("div",pe({class:n(Se)},n(mi).props,{"data-has-navigation":n(T).navigation?!0:void 0}),[S("div",{class:u(n(be))},[S("a",{href:`#${n(ce)}`,onFocus:bt,onBlur:Pt,onClick:ma},X(n(Ee).Polaris.Frame.skipToContent),41,Mv)],2),n(T).topBar?(r(),p("div",pe({key:0,class:n(Me).TopBar},y(y({},n(mi).props),n(ki).props),{id:l}),[h(ee.$slots,"topBar")],16)):$("",!0),n(T).navigation?(r(),P(n(Nn),{key:1,trapping:n(z)},{default:v(()=>[_(qd,{name:"custom-classes",onAfterEnter:M,onBeforeEnter:V,onEnter:Z,onBeforeLeave:re,onLeave:ie},{default:v(()=>[e.showMobileNavigation||!n(E)?(r(),p("div",pe({key:0},Pe,{key:"NavContent",id:i,"aria-label":n(Ee).Polaris.Frame.navigationLabel,class:n(D),ref_key:"navigationRef",ref:I,onKeydown:ke,hidden:n(_e)}),[h(ee.$slots,"navigation"),S("button",{type:"button",class:u(n(Me).NavigationDismiss),onClick:j,"aria-hidden":n(_e)||!n(E)&&!e.showMobileNavigation,"aria-label":n(Ee).Polaris.Frame.Navigation.closeMobileNavigationLabel,tabIndex:n(ne)},[_(n(ae),{source:n(Ui)},null,8,["source"])],10,Bv)],16,Iv)):$("",!0)]),_:3})]),_:3},8,["trapping"])):$("",!0),_(n(gc),{in:B.value,class:u(n(Me).ContextualSaveBar),type:"fade"},{default:v(()=>[N.value?(r(),P(n(vc),_t(pe({key:0},N.value)),Ve({_:2},[N.value.contextControl?{name:"contextControl",fn:v(()=>[(r(!0),p(te,null,fe(N.value.contextControl,(vt,ya)=>(r(),P(Le(vt),{key:ya}))),128))])}:void 0,N.value.secondaryMenu?{name:"secondaryMenu",fn:v(()=>[(r(!0),p(te,null,fe(N.value.secondaryMenu,(vt,ya)=>(r(),P(Le(vt),{key:ya}))),128))])}:void 0]),1040)):$("",!0)]),_:1},8,["in","class"]),x.value>0?(r(),p("div",{key:2,class:u(n(Me).LoadingBar),id:c},[_(n(xc))],2)):$("",!0),e.showMobileNavigation&&n(E)?(r(),P(n(Ni),{key:3,belowNavigation:"",onClick:j,onTouchstart:j})):$("",!0),S("main",{class:u(n(Me).Main),id:s,"data-has-global-ribbon":!!n(T).globalRibbon},[S("div",{class:u(n(Me).Content)},[h(ee.$slots,"default")],2)],10,Pv),_(n(Sc),{"toast-messages":C.value},null,8,["toast-messages"]),n(T).globalRibbon?(r(),p("div",{key:4,class:u(n(Me).GlobalRibbonContainer),ref_key:"globalRibbonContainerRef",ref:F},[h(ee.$slots,"globalRibbon")],2)):$("",!0),_(n(He),{event:"resize",handler:Bt})],16,wv))}});gt.__docgenInfo={exportName:"default",displayName:"Frame",description:"",tags:{},props:[{name:"logo",description:"Sets the logo for the TopBar, Navigation, and ContextualSaveBar components",required:!1,type:{name:"Logo"}},{name:"offset",description:"A horizontal offset that pushes the frame to the right, leaving empty space on the left",required:!1,type:{name:"string"}},{name:"showMobileNavigation",description:"A boolean property indicating whether the mobile navigation is currently visible",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"skipToContentTarget",description:"Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link",required:!1,type:{name:"HTMLAnchorElement"}}],events:[{name:"navigation-dismiss"}],slots:[{name:"topBar"},{name:"navigation"},{name:"default"},{name:"globalRibbon"}]};const Nv="Polaris-Heading";var Dv={Heading:Nv};const Jo=L({props:{element:{default:"h2"},id:null},setup(e){return(o,a)=>(r(),P(Le(e.element),{id:e.id,class:u(n(Dv).Heading)},{default:v(()=>[h(o.$slots,"default")]),_:3},8,["id","class"]))}});Jo.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the heading",tags:{default:[{description:"'h2'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h2'"}},{name:"id",description:`A unique identifier for the heading,
used for reference in anchor links`,required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const $v="Polaris-Indicator",Fv="Polaris-Indicator--pulseIndicator",Ev="Polaris-Indicator--bounce",Ov="Polaris-Indicator--pulse";var zl={Indicator:$v,pulseIndicator:Fv,bounce:Ev,pulse:Ov};const Ai=L({props:{pulse:{type:Boolean,default:!1}},setup(e){const o=e,a=d(()=>O(zl.Indicator,o.pulse&&zl.pulseIndicator));return(s,i)=>(r(),p("span",{class:u(n(a))},null,2))}});Ai.__docgenInfo={exportName:"default",displayName:"Indicator",description:"",tags:{},props:[{name:"pulse",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const qv="Polaris-KeyboardKey";var Rv={KeyboardKey:qv};const Gn=L({setup(e){const o=Te(),a=d(()=>{const s=o.default&&o.default()[0].children?o.default()[0].children:"";return typeof s=="string"?s.length>1?s.toLowerCase():s.toUpperCase():s});return(s,i)=>(r(),p("kbd",{class:u(n(Rv).KeyboardKey)},X(n(a)),3))}});Gn.__docgenInfo={exportName:"default",displayName:"KeyboardKey",description:"",tags:{}};const Hv="Polaris-Layout",Vv="Polaris-Layout__Section",Uv="Polaris-Layout__AnnotatedSection",jv="Polaris-Layout__AnnotationWrapper",zv="Polaris-Layout__AnnotationContent",Wv="Polaris-Layout__Annotation",Xv="Polaris-Layout__AnnotationDescription";var Ze={Layout:Hv,Section:Vv,"Section-secondary":"Polaris-Layout__Section--secondary","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:Uv,AnnotationWrapper:jv,AnnotationContent:zv,Annotation:Wv,AnnotationDescription:Xv};const ft=L({props:{secondary:{type:Boolean},fullWidth:{type:Boolean},oneHalf:{type:Boolean},oneThird:{type:Boolean}},setup(e){const o=e,a=d(()=>O(Ze.Section,o.secondary&&Ze["Section-secondary"],o.fullWidth&&Ze["Section-fullWidth"],o.oneHalf&&Ze["Section-oneHalf"],o.oneThird&&Ze["Section-oneThird"]));return(s,i)=>(r(),p("div",{class:u(n(a))},[h(s.$slots,"default")],2))}});ft.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"secondary",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"oneHalf",required:!1,type:{name:"boolean"}},{name:"oneThird",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Gv="Polaris-TextContainer",Kv="Polaris-TextContainer--spacingTight",Yv="Polaris-TextContainer--spacingLoose";var Wl={TextContainer:Gv,spacingTight:Kv,spacingLoose:Yv};const it=L({props:{spacing:null},setup(e){const o=e,a=d(()=>o.spacing&&Wl[Ce("spacing",o.spacing)]),s=d(()=>O(Wl.TextContainer,a.value));return(i,l)=>(r(),p("div",{class:u(n(s))},[h(i.$slots,"default")],2))}});it.__docgenInfo={exportName:"default",displayName:"TextContainer",description:"",tags:{},props:[{name:"spacing",description:"The amount of vertical spacing children will get between them",required:!1,type:{name:"Spacing"}}],slots:[{name:"default"}]};const It=L({props:{id:null},setup(e){const o=Te(),a=d(()=>{var i;return(i=o.description)==null?void 0:i.call(o)}),s=d(()=>Boolean(a.value&&(a.value.length>=2||a.value[0]&&a.value[0].type.toString()!=="Symbol(Text)")));return(i,l)=>(r(),p("div",{class:u(n(Ze).AnnotatedSection)},[S("div",{class:u(n(Ze).AnnotationWrapper)},[S("div",{class:u(n(Ze).Annotation)},[_(n(it),null,{default:v(()=>[_(n(Jo),{id:e.id},{default:v(()=>[h(i.$slots,"title")]),_:3},8,["id"]),n(s)?h(i.$slots,"description",{key:1}):(r(),p("div",{key:0,class:u(n(Ze).AnnotationDescription)},[h(i.$slots,"description")],2))]),_:3})],2),S("div",{class:u(n(Ze).AnnotationContent)},[h(i.$slots,"default")],2)],2)],2))}});It.__docgenInfo={exportName:"default",displayName:"AnnotatedSection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"description"},{name:"default"}]};const lt=L({props:{sectioned:{type:Boolean}},setup(e){return(o,a)=>(r(),p("div",{class:u(n(Ze).Layout)},[e.sectioned?(r(),P(n(ft),{key:0},{default:v(()=>[h(o.$slots,"default")]),_:3})):h(o.$slots,"default",{key:1})],2))}});lt.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"sectioned",description:"Automatically adds sections to layout",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Qv="Polaris-Link",Jv="Polaris-Link__IconLockup",Zv="Polaris-Link__IconLayout",ex="Polaris-Link--monochrome",tx="Polaris-Link--removeUnderline";var Ft={Link:Qv,IconLockup:Jv,IconLayout:Zv,monochrome:ex,removeUnderline:tx};const ox=["id","aria-label"],Ma=L({props:{id:null,url:null,to:null,external:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,a=d(()=>O(Ft.Link,o.monochrome&&Ft.monochrome,o.removeUnderline&&Ft.removeUnderline));return(s,i)=>e.url||e.to?(r(),P(n(yt),{key:0,id:e.id,to:e.to,url:e.url,class:u(n(a)),external:e.external,"aria-label":e.accessibilityLabel},{default:v(()=>[h(s.$slots,"default"),S("span",{class:u(n(Ft).IconLockup)},[S("span",{class:u(n(Ft).IconLayout)},[_(n(ae),{source:n(kl)},null,8,["source"])],2)],2)]),_:3},8,["id","to","url","class","external","aria-label"])):(r(),p("button",{key:1,id:e.id,type:"button",class:u(n(a)),"aria-label":e.accessibilityLabel,onClick:i[0]||(i[0]=l=>s.$emit("click"))},[h(s.$slots,"default"),S("span",{class:u(n(Ft).IconLockup)},[S("span",{class:u(n(Ft).IconLayout)},[_(n(ae),{source:n(kl)},null,8,["source"])],2)],2)],10,ox))}});Ma.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"id",description:"ID for the link",required:!1,type:{name:"string"}},{name:"url",description:"The url to link to",required:!1,type:{name:"string"}},{name:"to",description:"Using with vue-router",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"external",description:"Makes the link open in a new tab",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes the link color the same as the current text color and adds an underline",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes text decoration underline to the link",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const ax="Polaris-List",nx="Polaris-List--typeNumber",sx="Polaris-List__Item";var Li={List:ax,typeNumber:nx,Item:sx};const Ia=L({props:{type:{default:"bullet"}},setup(e){const o=e,a=d(()=>{const i=Ce("type",o.type);return O(Li.List,o.type&&Li[i])}),s=o.type==="bullet"?"ul":"ol";return(i,l)=>(r(),P(Le(n(s)),{class:u(n(a))},{default:v(()=>[h(i.$slots,"default")]),_:3},8,["class"]))}});Ia.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"type",description:"Type of list to display",tags:{values:[{description:"bullet | number",title:"values"}],default:[{description:"bullet",title:"default"}]},required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'bullet'"}}],slots:[{name:"default"}]};const Wi=L({setup(e){return(o,a)=>(r(),p("li",{class:u(n(Li).Item)},[h(o.$slots,"default")],2))}});Wi.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const ix="Polaris-Listbox";var lx={Listbox:ix};const rx={"aria-live":"polite"},cx=["aria-label","aria-labelledby","aria-busy","id"],Qe=L({props:{enableKeyboardControl:{type:Boolean},accessibilityLabel:null},emits:["select"],setup(e,{emit:o}){const a=e,s="[data-listbox-option]",i="data-listbox-option-value",l="data-focused",c="aria-activedescendant";Fe("withinListboxContext",!0);const m=Be("comboboxListboxContext",{}),{setActiveOptionId:b,setListboxId:T,listboxId:f,textFieldLabelId:g,onOptionSelected:x,onKeyToBottom:C,textFieldFocused:B}=m,{useUniqueId:N}=we(),I=N("Listbox"),q=d(()=>Boolean(b)),E=d(()=>f||""),F=A(null),W=A(null),D=A(""),U=A(a.enableKeyboardControl);let M;De([()=>I,()=>E],()=>{T&&!f&&T(I)}),De(()=>M,()=>{b&&b(M.domId)});const V=()=>{var ve;const G=(ve=F.value)==null?void 0:ve.querySelectorAll(s);return G?[...new Set(Array.from(G))]:[]},Z=(G,ve)=>{jo(()=>{if(W.value){const{element:ue}=G,xe=ve&&Rd(ue,Rr.selector)||ue;Hd(xe,W.value)}},15)},re=G=>{var ve;if(M&&M.element&&M.element.removeAttribute(l),G){if(G.element.setAttribute(l,"true"),(ve=F.value)==null||ve.setAttribute(c,G.domId),W.value){const ue=V().findIndex(xe=>xe.id===G.element.id)===0;Z(G,ue)}M=G}},ie=G=>{const ve=G==="up",ue=V();let xe=M.element,Xe=-1;for(;Xe++<ue.length;){let rt;if(xe){const Bt=xe==null?void 0:xe.id,bt=ue.findIndex(ma=>ma.id===Bt);let Pt=ve?-1:1;bt===0&&ve?Pt=ue.length-1:bt===ue.length-1&&!ve&&(Pt=-(ue.length-1)),rt=bt+Pt,xe=ue[rt]}else rt=ve?ue.length-1:0,xe=ue[rt];if((xe==null?void 0:xe.getAttribute("aria-disabled"))!=="true")return rt===ue.length-1&&C&&C(),xe}return null},_e=(G,ve)=>{ve.preventDefault();const ue=ie(G);if(!ue)return;const xe={domId:ue.id,value:ue.getAttribute(i)||"",element:ue,disabled:ue.getAttribute("aria-disabled")==="true"};re(xe)},z=G=>{_e("down",G)},ne=G=>{_e("up",G)},Pe=G=>{o("select",G)},Se=G=>{re(G),x&&x(),Pe(G.value)};Fe("listboxContext",{onOptionSelect:Se,setLoading:G=>{D.value=G}});const ce=G=>{G.preventDefault(),G.stopPropagation(),Se(M)},de=()=>{a.enableKeyboardControl||(U.value=!0)},qe=G=>{G.stopPropagation(),a.enableKeyboardControl&&re(),!(a.enableKeyboardControl||q)&&(U.value=!1)};return se(()=>{F.value&&(W.value=F.value.closest(Dn.selector))}),(G,ve)=>(r(),p(te,null,[U.value||n(B)?(r(),p(te,{key:0},[_(n(et),{keyEvent:"keydown",keyCode:n(We).ArrowDown,handler:z},null,8,["keyCode"]),_(n(et),{keyEvent:"keydown",keyCode:n(We).ArrowUp,handler:ne},null,8,["keyCode"]),_(n(et),{keyEvent:"keydown",keyCode:n(We).Enter,handler:ce},null,8,["keyCode"])],64)):$("",!0),_(n(Ue),null,{default:v(()=>[S("div",rx,X(D.value?D.value:null),1)]),_:1}),G.$slots.default?(r(),p("ul",{key:1,tabindex:"0",role:"listbox",class:u(n(O)(n(lx).Listbox)),"aria-label":n(q)?void 0:e.accessibilityLabel,"aria-labelledby":n(g)||void 0,"aria-busy":Boolean(D.value),id:n(I),onFocus:de,onBlur:qe,ref_key:"listboxRef",ref:F},[h(G.$slots,"default")],42,cx)):$("",!0)],64))}});Qe.__docgenInfo={exportName:"default",displayName:"Listbox",description:"",tags:{},props:[{name:"enableKeyboardControl",description:"Explicitly enable keyboard control",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["string"]}}],slots:[{name:"default"}]};const ux="Polaris-Listbox-Action",dx="Polaris-Listbox-Action__ActionDivider",px="Polaris-Listbox-Action__Icon";var ri={Action:ux,ActionDivider:dx,Icon:px};const mx="Polaris-Listbox-Option",yx="Polaris-Listbox-Option--divider";var Xl={Option:mx,divider:yx};const hx="Polaris-Listbox-TextOption",gx="Polaris-Listbox-TextOption--allowMultiple",fx="Polaris-Listbox-TextOption--isAction",bx="Polaris-Listbox-TextOption--disabled",vx="Polaris-Listbox-TextOption--selected",xx="Polaris-Listbox-TextOption__Content",Tx="Polaris-Listbox-TextOption__Checkbox";var Et={TextOption:hx,allowMultiple:gx,isAction:fx,disabled:bx,selected:vx,Content:xx,Checkbox:Tx};const Pn=L({props:{selected:{type:Boolean},disabled:{type:Boolean}},setup(e){const o=e,a=Be("comboboxListboxOptionContext",{}),s=Be("actionContext",!1),i=d(()=>Boolean(a.allowMultiple)),l=d(()=>s),c=d(()=>O(Et.TextOption,o.selected&&!i.value&&Et.selected,o.disabled&&Et.disabled,i.value&&Et.allowMultiple,l.value&&Et.isAction));return(m,b)=>(r(),p("div",{class:u(n(c))},[S("div",{class:u(n(Et).Content)},[n(i)&&!n(l)?(r(),p("div",{key:0,class:u(n(Et).Checkbox)},[_(n(Yo),{checked:e.selected},{label:v(()=>[h(m.$slots,"default")]),_:3},8,["checked"])],2)):h(m.$slots,"default",{key:1})],2)],2))}});Pn.__docgenInfo={exportName:"default",displayName:"TextOption",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Sx=["id","role","data-within-section","data-listbox-option-value","data-listbox-option-destructive","aria-disabled","aria-label","aria-selected"],ot=L({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean}},setup(e){const o=e,a=Be("mappedActionContext",{}),s=Be("sectionContext",""),i=Be("listboxContext",{onOptionSelect(M){},setLoading(M){}}),{role:l,url:c,external:m,onAction:b,destructive:T}=a,{onOptionSelect:f}=i,g=Te(),x=d(()=>{var M;return(M=g.default)==null?void 0:M.call(g)}),C=A(null),{useUniqueId:B}=we(),N=B("ListboxOption"),I=d(()=>Boolean(s)),q={[Vd.attribute]:I.value},E=d(()=>Boolean(x.value&&(x.value.length>=2||x.value[0]&&x.value[0].type.toString()!=="Symbol(Text)"))),F=d(()=>l||"option"),W=d(()=>O(Xl.Option,o.divider&&Xl.divider)),D=M=>{if(M.preventDefault(),!o.disabled&&(b&&b(),C.value&&!b)){const V={domId:N,value:o.value,element:C.value,disabled:o.disabled||!1};f(V)}},U=M=>{M.preventDefault()};return(M,V)=>(r(),p("li",pe(q,{id:n(N),class:n(W),ref_key:"listItemRef",ref:C,role:n(F),"data-within-section":n(I),"data-listbox-option-value":e.value,"data-listbox-option-destructive":n(T),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,"aria-selected":e.selected,onClick:D,onMousedown:U,tabindex:"-1","data-listbox-option":""}),[n(c)?(r(),P(n(yt),{key:0,url:n(c),external:n(m)},{default:v(()=>[n(E)?h(M.$slots,"default",{key:1}):(r(),P(n(Pn),{key:0,selected:e.selected,disabled:e.disabled},{default:v(()=>[h(M.$slots,"default")]),_:3},8,["selected","disabled"]))]),_:3},8,["url","external"])):(r(),p(te,{key:1},[n(E)?h(M.$slots,"default",{key:1}):(r(),P(n(Pn),{key:0,selected:e.selected,disabled:e.disabled},{default:v(()=>[h(M.$slots,"default")]),_:3},8,["selected","disabled"]))],64))],16,Sx))}});ot.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Kn=L({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean},icon:null},setup(e){const o=e;Fe("actionContext",!0);const a=d(()=>O(ri.Action,o.divider&&ri.ActionDivider));return(s,i)=>(r(),P(n(ot),{value:e.value,selected:e.selected,disabled:e.disabled,divider:e.divider},{default:v(()=>[S("div",{class:u(n(a))},[_(n(Pn),{selected:e.selected,disabled:e.disabled},{default:v(()=>[e.icon?(r(),p("div",{key:0,class:u(n(ri).Icon)},[_(n(ae),{color:"subdued",source:e.icon},null,8,["source"])],2)):$("",!0),h(s.$slots,"default")]),_:3},8,["selected","disabled"])],2)]),_:3},8,["value","selected","disabled","divider"]))}});Kn.__docgenInfo={exportName:"default",displayName:"Action",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const Cx="Polaris-Listbox-Header";var Ax={Header:Cx};const Lx=["id"],_x=L({setup(e){const o=Be("sectionContext",""),a=Te(),s=d(()=>{var l;return(l=a.default)==null?void 0:l.call(a)}),i=d(()=>Boolean(s.value&&(s.value.length>=2||s.value[0]&&s.value[0].type.toString()!=="Symbol(Text)")));return(l,c)=>(r(),p("div",{id:n(o),"aria-hidden":""},[n(i)?h(l.$slots,"default",{key:1}):(r(),p("div",{key:0,class:u(n(Ax).Header)},[h(l.$slots,"default")],2))],8,Lx))}});_x.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},slots:[{name:"default"}]};const kx="Polaris-Listbox-Loading__ListItem",wx="Polaris-Listbox-Loading";var Gl={ListItem:kx,Loading:wx};const Ba=L({props:{accessibilityLabel:null},setup(e){const o=e,a=Be("listboxContext",{onOptionSelect(i){},setLoading(i){}}),{setLoading:s}=a;return De(()=>o.accessibilityLabel,()=>(s(o.accessibilityLabel),()=>s(void 0))),(i,l)=>(r(),p("li",{class:u(n(Gl).ListItem),role:"presentation"},[i.$slots.default?h(i.$slots,"default",{key:0}):(r(),p("div",{key:1,class:u(n(Gl).Loading)},[_(n(kt),{size:"small",accessibilityLabel:e.accessibilityLabel},null,8,["accessibilityLabel"])],2))],2))}});Ba.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"accessibilityLabel",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const Mx="Polaris-Listbox-Section__SectionGroup",Ix="Polaris-Listbox-Section--noDivider";var Kl={SectionGroup:Mx,noDivider:Ix};const Bx=["aria-labelledby"],Px=L({props:{divider:{type:Boolean}},setup(e){const o=e,{useUniqueId:a}=we(),s=a("ListboxSection");Fe("sectionContext",s);const i=d(()=>O(Kl.SectionGroup,!o.divider&&Kl.noDivider));return(l,c)=>(r(),p("li",pe({role:"presentation"},n(Rr)),[h(l.$slots,"title"),S("ul",{role:"group","aria-labelledby":n(s),class:u(n(i))},[h(l.$slots,"default")],10,Bx)],16))}});Px.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const Pa=L({setup(e){const{useFrame:o}=Qo(),{startLoading:a,stopLoading:s}=o();return se(()=>{a()}),Ke(()=>{s()}),(i,l)=>null}});Pa.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const Nx="Polaris-MessageIndicator__MessageIndicatorWrapper",Dx="Polaris-MessageIndicator";var Yl={MessageIndicatorWrapper:Nx,MessageIndicator:Dx};const Cc=L({props:{active:{type:Boolean}},setup(e){return(o,a)=>(r(),p("div",{class:u(n(Yl).MessageIndicatorWrapper)},[e.active?(r(),p("div",{key:0,class:u(n(Yl).MessageIndicator)},null,2)):$("",!0),h(o.$slots,"default")],2))}});Cc.__docgenInfo={exportName:"default",displayName:"MessageIndicator",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const $x="Polaris-Modal__BodyWrapper",Fx="Polaris-Modal__Body",Ex="Polaris-Modal__IFrame",Ox="Polaris-Modal__Spinner";var Kt={BodyWrapper:$x,Body:Fx,IFrame:Ex,Spinner:Ox};const qx="Polaris-Modal-Dialog__Container",Rx="Polaris-Modal-Dialog",Hx="Polaris-Modal-Dialog__Modal",Vx="Polaris-Modal-Dialog--limitHeight",Ux="Polaris-Modal-Dialog--sizeSmall",jx="Polaris-Modal-Dialog--sizeLarge",zx="Polaris-Modal-Dialog--animateFadeUp",Wx="Polaris-Modal-Dialog--entering",Xx="Polaris-Modal-Dialog--exiting",Gx="Polaris-Modal-Dialog--exited",Kx="Polaris-Modal-Dialog--entered";var St={Container:qx,Dialog:Rx,Modal:Hx,limitHeight:Vx,sizeSmall:Ux,sizeLarge:jx,animateFadeUp:zx,entering:Wx,exiting:Xx,exited:Gx,entered:Kx};const Nn=L({props:{trapping:{type:Boolean,default:!0}},setup(e){const o=e,{canSafelyFocus:a}=nm(o),s=A(null),i=A(!0);De([()=>o.trapping],()=>{i.value=a.value&&!(s.value&&s.value.contains(document.activeElement))?!o.trapping:!0});const l=m=>{!o.trapping||!s.value||s.value.contains(document.activeElement)||m.target instanceof Element&&m.target.matches(`${Nr.selector} *`)||a.value&&m.target instanceof HTMLElement&&s.value!==m.target&&s.value.contains(m.target)&&Fn(s.value)},c=m=>{if(!o.trapping||!s.value)return;const b=Gr(s.value),T=Kr(s.value);m.target===T&&!m.shiftKey&&(m.preventDefault(),Mp(s.value)),m.target===b&&m.shiftKey&&(m.preventDefault(),Ip(s.value))};return(m,b)=>(r(),p("div",{ref_key:"wrapperNode",ref:s},[_(n(hc),{disabled:i.value,root:s.value},null,8,["disabled","root"]),_(n(He),{event:"focusin",handler:l}),_(n(et),{keyCode:n(We).Tab,keyEvent:"keydown",handler:c},null,8,["keyCode"]),h(m.$slots,"default")],512))}});Nn.__docgenInfo={exportName:"default",displayName:"TrapFocus",description:"",tags:{},props:[{name:"trapping",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}]};const Yx=["aria-labelledby"],Qx=["aria-labelledby"],Ac=L({props:{labelledBy:null,instant:{type:Boolean},limitHeight:{type:Boolean},large:{type:Boolean},small:{type:Boolean}},emits:["close","entered","exited"],setup(e,{emit:o}){const a=e,s=A(null),i=d(()=>O(St.Modal,a.small&&St.sizeSmall,a.large&&St.sizeLarge,a.limitHeight&&St.limitHeight));return se(()=>{s.value&&s.value.contains(document.activeElement)&&Fn(s.value),o("entered")}),Ke(()=>{o("exited")}),(l,c)=>e.instant?(r(),p("div",{key:0,class:u(n(St).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref_key:"dialogNode",ref:s},[_(n(Nn),null,{default:v(()=>[S("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:u(n(St).Dialog)},[S("div",{class:u(n(i))},[_(n(et),{keyCode:n(We).Escape,handler:()=>l.$emit("close")},null,8,["keyCode","handler"]),h(l.$slots,"default")],2)],10,Yx)]),_:3})],2)):(r(),p("div",{key:1,class:u(n(St).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref:"dialog"},[_(n(Nn),null,{default:v(()=>[S("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:u(n(St).Dialog)},[S("div",{class:u(n(i))},[_(n(et),{keyCode:n(We).Escape,handler:()=>l.$emit("close")},null,8,["keyCode","handler"]),h(l.$slots,"default")],2)],10,Qx)]),_:3})],2))}});Ac.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"labelledBy",required:!1,type:{name:"string"}},{name:"instant",required:!1,type:{name:"boolean"}},{name:"limitHeight",required:!1,type:{name:"boolean"}},{name:"large",required:!1,type:{name:"boolean"}},{name:"small",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"entered"},{name:"exited"}],slots:[{name:"default"}]};const Jx="Polaris-Modal-Header",Zx="Polaris-Modal-Header--titleHidden",eT="Polaris-Modal-Header__Title";var ci={Header:Jx,titleHidden:Zx,Title:eT};const tT="Polaris-Modal-CloseButton";var oT={CloseButton:tT};const Lc=L({emits:["click"],setup(e,{emit:o}){return(a,s)=>(r(),p("button",{class:u(n(oT).CloseButton),"aria-label":"Close",onClick:s[0]||(s[0]=i=>o("click"))},[_(n(ae),{source:n(Ui),color:"base"},null,8,["source"])],2))}});Lc.__docgenInfo={exportName:"default",displayName:"CloseButton",description:"",tags:{},events:[{name:"click"}]};const aT=["id"],_c=L({props:{id:null,titleHidden:{type:Boolean}},emits:["close"],setup(e,{emit:o}){const a=e,s=Te(),i=d(()=>a.titleHidden||!s.default?ci.titleHidden:ci.Header);return(l,c)=>(r(),p("div",{class:u(n(i))},[S("div",{id:e.id,class:u(n(ci).Title)},[_(n(wa),{element:"h2",size:"small"},{default:v(()=>[h(l.$slots,"default")]),_:3})],10,aT),_(n(Lc),{onClick:c[0]||(c[0]=m=>o("close"))})],2))}});_c.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"titleHidden",required:!1,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"default"}]};const nT="Polaris-Modal-Footer",sT="Polaris-Modal-Footer__FooterContent";var Ql={Footer:nT,FooterContent:sT};const iT="Polaris-Stack",lT="Polaris-Stack__Item",rT="Polaris-Stack--noWrap",cT="Polaris-Stack--spacingNone",uT="Polaris-Stack--spacingExtraTight",dT="Polaris-Stack--spacingTight",pT="Polaris-Stack--spacingBaseTight",mT="Polaris-Stack--spacingLoose",yT="Polaris-Stack--spacingExtraLoose",hT="Polaris-Stack--distributionLeading",gT="Polaris-Stack--distributionTrailing",fT="Polaris-Stack--distributionCenter",bT="Polaris-Stack--distributionEqualSpacing",vT="Polaris-Stack--distributionFill",xT="Polaris-Stack--distributionFillEvenly",TT="Polaris-Stack--alignmentLeading",ST="Polaris-Stack--alignmentTrailing",CT="Polaris-Stack--alignmentCenter",AT="Polaris-Stack--alignmentFill",LT="Polaris-Stack--alignmentBaseline",_T="Polaris-Stack--vertical";var Ct={Stack:iT,Item:lT,noWrap:rT,spacingNone:cT,spacingExtraTight:uT,spacingTight:dT,spacingBaseTight:pT,spacingLoose:mT,spacingExtraLoose:yT,distributionLeading:hT,distributionTrailing:gT,distributionCenter:fT,distributionEqualSpacing:bT,distributionFill:vT,distributionFillEvenly:xT,alignmentLeading:TT,alignmentTrailing:ST,alignmentCenter:CT,alignmentFill:AT,alignmentBaseline:LT,vertical:_T,"Item-fill":"Polaris-Stack__Item--fill"};const wt=L({props:{fill:{type:Boolean,default:!1}},setup(e){const o=e,a=d(()=>O(Ct.Item,o.fill&&Ct["Item-fill"]));return(s,i)=>(r(),p("div",{class:u(n(a))},[h(s.$slots,"default")],2))}});wt.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"fill",description:"Fill the remaining horizontal space in the stack with the item",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const at=L({props:{wrap:{type:Boolean,default:!0},vertical:{type:Boolean},spacing:null,alignment:null,distribution:null,noItemWrap:{type:Boolean,default:!1}},setup(e){const o=e,a=Te(),s=d(()=>{const i=o.spacing&&Ce("spacing",o.spacing),l=o.distribution&&Ce("distribution",o.distribution),c=o.alignment&&Ce("alignment",o.alignment);return O(Ct.Stack,o.vertical&&Ct.vertical,i&&Ct[i],l&&Ct[l],c&&Ct[c],o.wrap===!1&&Ct.noWrap)});return(i,l)=>(r(),p("div",{class:u(n(s))},[!e.noItemWrap&&n(a).default?(r(!0),p(te,{key:0},fe(n(a).default(),(c,m)=>(r(),P(n(wt),{key:m},{default:v(()=>[(r(),P(Le(c)))]),_:2},1024))),128)):h(i.$slots,"default",{key:1})],2))}});at.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"wrap",description:"Wrap stack elements to additional rows as needed on small screens (Defaults to true)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"vertical",description:"Stack the elements vertically",required:!1,type:{name:"boolean"}},{name:"spacing",description:"Adjust spacing between elements",required:!1,type:{name:"Spacing"}},{name:"alignment",description:"Adjust vertical alignment of elements",required:!1,type:{name:"Alignment"}},{name:"distribution",description:"Adjust horizontal alignment of elements",required:!1,type:{name:"Distribution"}},{name:"noItemWrap",description:"No wrap all stack elements with StackItem",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const kc=L({props:{primaryAction:null,secondaryActions:null},setup(e){return(o,a)=>(r(),p("div",{class:u(n(Ql).Footer)},[S("div",{class:u(n(Ql).FooterContent)},[_(n(at),{alignment:"center","no-item-wrap":""},{default:v(()=>[_(n(wt),{fill:!0},{default:v(()=>[h(o.$slots,"default")]),_:3}),e.primaryAction||e.secondaryActions?(r(),P(n(wt),{key:0},{default:v(()=>[_(n(Ut),null,{default:v(()=>[e.secondaryActions?(r(!0),p(te,{key:0},fe(e.secondaryActions,(s,i)=>(r(),P(n(Ti),{key:i,action:s},null,8,["action"]))),128)):$("",!0),_(n(Ti),{action:e.primaryAction,overrides:{primary:!0}},null,8,["action"])]),_:1})]),_:1})):$("",!0)]),_:3})],2)],2))}});kc.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"primaryAction",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"default"}]};const kT="Polaris-Modal-Section",wT="Polaris-Modal-Section--subdued",MT="Polaris-Modal-Section--flush";var ui={Section:kT,subdued:wT,flush:MT};const Wo=L({props:{flush:{type:Boolean},subdued:{type:Boolean}},setup(e){const o=e,a=d(()=>O(ui.Section,o.flush&&ui.flush,o.subdued&&ui.subdued));return(s,i)=>(r(),p("section",{class:u(n(a))},[h(s.$slots,"default")],2))}});Wo.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"flush",required:!1,type:{name:"boolean"}},{name:"subdued",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const IT=["name","src"],Wt=L({props:{open:{type:Boolean},src:null,iFrameName:null,titleHidden:{type:Boolean},instant:{type:Boolean},sectioned:{type:Boolean},large:{type:Boolean},small:{type:Boolean},limitHeight:{type:Boolean},loading:{type:Boolean},noScroll:{type:Boolean},primaryAction:null,secondaryActions:null},emits:["iframe-load","transition-end","scrolled-to-bottom","close"],setup(e,{emit:o}){const i=Te(),l=A(null),{useUniqueId:c}=we(),m=c("modal-header"),b=A(200),T=A(!1),f=C=>{const B=C.target;if(B&&B.contentWindow)try{b.value=B.contentWindow.document.body.scrollHeight}catch{b.value=400}o("iframe-load",C)},g=()=>{o("transition-end")},x=()=>{b.value=200;const C=l.value;C&&requestAnimationFrame(()=>Fn(C))};return se(()=>{T.value=!0}),(C,B)=>(r(),p("div",null,[n(i).activator?(r(),p("div",{key:0,ref_key:"activatorNode",ref:l},[h(C.$slots,"activator")],512)):$("",!0),T.value&&e.open?(r(),P(n(qn),{key:1,idPrefix:"modal"},{default:v(()=>[_(n(Ac),{instant:e.instant,labelledBy:n(m),large:e.large,small:e.small,limitHeight:e.limitHeight,onClose:B[2]||(B[2]=N=>o("close")),onEntered:g,onExited:x},{default:v(()=>[_(n(_c),{titleHidden:e.titleHidden,id:n(m),onClose:B[0]||(B[0]=N=>o("close")),key:"header"},{default:v(()=>[h(C.$slots,"title")]),_:3},8,["titleHidden","id"]),S("div",{class:u(n(Kt).BodyWrapper),key:"body"},[e.src?(r(),p("iframe",{key:0,name:e.iFrameName,title:"body markup",src:e.src,class:u(n(Kt).IFrame),onLoad:f,style:Oe({height:`${b.value}px`})},null,46,IT)):e.noScroll?(r(),p("div",{key:1,class:u(n(Kt).Body)},[e.loading?(r(),p("div",{key:0,class:u(n(Kt).Spinner)},[_(n(kt))],2)):(r(),p(te,{key:1},[e.sectioned?(r(),P(n(Wo),{key:0},{default:v(()=>[h(C.$slots,"content")]),_:3})):h(C.$slots,"content",{key:1})],64))],2)):(r(),P(n(ht),{key:2,shadow:!0,class:u(n(Kt).Body),onScrolledToBottom:B[1]||(B[1]=N=>o("scrolled-to-bottom"))},{default:v(()=>[e.loading?(r(),p("div",{key:0,class:u(n(Kt).Spinner)},[_(n(kt))],2)):(r(),p(te,{key:1},[e.sectioned?(r(),P(n(Wo),{key:0},{default:v(()=>[h(C.$slots,"content")]),_:3})):h(C.$slots,"content",{key:1})],64))]),_:3},8,["class"]))],2),n(i).footer||e.primaryAction||e.secondaryActions?(r(),P(n(kc),{primaryAction:e.primaryAction,secondaryActions:e.secondaryActions,key:"footer"},{default:v(()=>[h(C.$slots,"footer")]),_:3},8,["primaryAction","secondaryActions"])):$("",!0)]),_:3},8,["instant","labelledBy","large","small","limitHeight"]),_(n(Ni))]),_:3})):$("",!0)]))}});Wt.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",description:"Whether the modal is open or not",required:!0,type:{name:"boolean"}},{name:"src",description:"The url that will be loaded as the content of the modal",required:!1,type:{name:"string"}},{name:"iFrameName",description:"The name of the modal content iframe",required:!1,type:{name:"string"}},{name:"titleHidden",description:"Hide the title in the modal",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"instant",description:"Disable animations and open modal instantly",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically adds sections to modal",required:!1,type:{name:"boolean"}},{name:"large",description:"Increases the modal width",required:!1,type:{name:"boolean"}},{name:"small",description:"Decreases the modal width",required:!1,type:{name:"boolean"}},{name:"limitHeight",description:"Limits modal height on large sceens with scrolling",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces modal content with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"noScroll",description:"Removes Scrollable container from the modal content",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary action",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",description:"Collection of secondary actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],events:[{name:"iframe-load",type:{names:["Event"]}},{name:"transition-end"},{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"title"},{name:"content"},{name:"footer"}]};const BT="Polaris-Navigation",PT="Polaris-Navigation__UserMenu",NT="Polaris-Navigation__ContextControl",DT="Polaris-Navigation__PrimaryNavigation",$T="Polaris-Navigation__LogoContainer",FT="Polaris-Navigation__Logo",ET="Polaris-Navigation__LogoLink",OT="Polaris-Navigation__Item",qT="Polaris-Navigation--keyFocused",RT="Polaris-Navigation__Icon",HT="Polaris-Navigation__Badge",VT="Polaris-Navigation--subNavigationActive",UT="Polaris-Navigation__ExternalIcon",jT="Polaris-Navigation__ListItem",zT="Polaris-Navigation__RollupSection",WT="Polaris-Navigation__SecondaryNavigation",XT="Polaris-Navigation__ItemWrapper",GT="Polaris-Navigation__Text",KT="Polaris-Navigation__SecondaryAction",YT="Polaris-Navigation--isExpanded",QT="Polaris-Navigation__List",JT="Polaris-Navigation__Section",ZT="Polaris-Navigation__SectionHeading",eS="Polaris-Navigation__Action",tS="Polaris-Navigation__RollupToggle",oS="Polaris-Navigation__Indicator";var J={Navigation:BT,UserMenu:PT,ContextControl:NT,PrimaryNavigation:DT,LogoContainer:$T,Logo:FT,LogoLink:ET,Item:OT,keyFocused:qT,"Icon-resized":"Polaris-Navigation__Icon--resized","Item-selected":"Polaris-Navigation__Item--selected","Item-disabled":"Polaris-Navigation__Item--disabled",Icon:RT,Badge:HT,subNavigationActive:VT,"Item-child-active":"Polaris-Navigation--itemChildActive",ExternalIcon:UT,ListItem:jT,RollupSection:zT,SecondaryNavigation:WT,"ListItem-hasAction":"Polaris-Navigation__ListItem--hasAction",ItemWrapper:XT,Text:GT,SecondaryAction:KT,isExpanded:YT,List:QT,"SecondaryNavigation-noIcon":"Polaris-Navigation__SecondaryNavigation--noIcon",Section:JT,"Section-fill":"Polaris-Navigation__Section--fill","Section-withSeparator":"Polaris-Navigation__Section--withSeparator",SectionHeading:ZT,Action:eS,RollupToggle:tS,Indicator:oS,"fade-in":"Polaris-Navigation__fade--in"};const aS=["aria-labelledby"],Na=L({props:{location:null,onDismiss:null,ariaLabelledBy:null},setup(e){const o=e,{useFrame:a}=Qo(),{logo:s}=a(),i=ji(s,104),l=Te();return Fe("NavigationContext",{location:o.location,onNavigationDismiss:o.onDismiss,withinContentContainer:!1}),Fe("WithinContentContext",!1),(c,m)=>(r(),p("nav",{class:u(n(J).Navigation),"aria-labelledby":e.ariaLabelledBy},[n(l).contextControl?(r(),p("div",{key:0,class:u(n(J).ContextControl)},[h(c.$slots,"contextControl")],2)):n(s)?(r(),p("div",{key:1,class:u(n(J).LogoContainer)},[_(n(yt),{url:n(s).url||"",class:u(n(J).LogoLink),style:Oe({width:n(i)})},{default:v(()=>[_(n(Ko),{source:n(s).topBarSource||"",alt:n(s).accessibilityLabel||"",class:u(n(J).Logo),style:Oe({width:n(i)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):$("",!0),_(n(ht),{class:u(n(J).PrimaryNavigation)},{default:v(()=>[h(c.$slots,"default")]),_:3},8,["class"])],10,aS))}});Na.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"location",required:!0,type:{name:"string"}},{name:"ariaLabelledBy",description:"id of the element used as aria-labelledby",required:!1,type:{name:"string"}}],slots:[{name:"contextControl"},{name:"default"}]};const nS={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},sS=S("path",{d:"M11 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 5H12a1 1 0 0 1-1-1zM3 6.5A1.5 1.5 0 0 1 4.5 5H8a1 1 0 0 1 0 2H5v8h8v-3a1 1 0 1 1 2 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.5v-9z"},null,-1),iS=[sS];function lS(e,o){return r(),p("svg",nS,iS)}var rS={render:lS};function cS(){const e=Be("NavigationContext",{location:""});function o(){return e}return{useNavigationContext:o}}const wc=L({props:{expanded:{type:Boolean},id:null},setup(e){const{useUniqueId:o}=we(),a=o("SecondaryNavigation");return(s,i)=>(r(),P(n(Oi),{id:e.id||n(a),open:e.expanded,transition:{duration:"0ms",timingFunction:"linear"}},{default:v(()=>[S("ul",{class:u(n(J).List)},[h(s.$slots,"default")],2)]),_:3},8,["id","open"]))}});wc.__docgenInfo={exportName:"default",displayName:"Secondary",description:"",tags:{},props:[{name:"expanded",required:!0,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const uS=["disabled","aria-disabled","aria-label","onKeyup"],_i=L({props:{url:null,matches:{type:Boolean},matchPaths:null,excludePaths:null,external:{type:Boolean},icon:null,badge:null,label:null,disabled:{type:Boolean},accessibilityLabel:null,selected:{type:Boolean},exactMatch:{type:Boolean},new:{type:Boolean},subNavigationItems:null,secondaryAction:null,expanded:{type:Boolean},shouldResizeIcon:{type:Boolean}},emits:["toggle-expanded-state","click"],setup(e,{emit:o}){const a=e,{useMediaQuery:s}=zi(),{isNavigationCollapsed:i}=s(),{useUniqueId:l}=we(),c=l("SecondaryNavigation"),{useNavigationContext:m}=cS(),{location:b,onNavigationDismiss:T}=m(),f=A(!1);Xo(()=>{!i&&a.expanded&&g()});const g=()=>{o("toggle-expanded-state")},x=ce=>{f.value||(f.value=!0)},C=()=>{f.value&&(f.value=!1)},B=d(()=>a.disabled?-1:0),N=d(()=>a.subNavigationItems?a.subNavigationItems.filter(ce=>ce.new).length>0:!1),I=d(()=>O(J.Item,a.disabled&&J["Item-disabled"],f.value&&J.keyFocused,a.selected&&J["Item-selected"])),q=d(()=>O(J.ListItem,a.secondaryAction&&J["ListItem-hasAction"])),E=d(()=>O(J.Icon,a.shouldResizeIcon&&J["Icon-resized"])),F=Se({url:a.url,matches:a.matches,exactMatch:a.exactMatch,matchPaths:a.matchPaths,excludePaths:a.excludePaths},b),W=d(()=>a.subNavigationItems&&a.subNavigationItems.filter(ce=>{const de=Se(ce,b);return de===0||de===1||de===2})),D=d(()=>W.value&&W.value.length>0),U=d(()=>a.selected==null?F===0||F===1||F===2:a.selected),M=d(()=>U.value||a.expanded||D.value),V=!a.subNavigationItems||a.subNavigationItems.length===0||!D.value,Z=d(()=>O(J.Item,a.disabled&&J["Item-disabled"],U.value&&V&&J["Item-selected"],M.value&&J.subNavigationActive,D.value&&J["Item-child-active"],f.value&&J.keyFocused)),re=d(()=>W.value?W.value.sort(({url:ce},{url:de})=>de.length-ce.length)[0]:null),ie=d(()=>O(J.SecondaryNavigation,M.value&&J.isExpanded,!a.icon&&J["SecondaryNavigation-noIcon"])),_e=ce=>{if(ce.currentTarget.getAttribute("href")===b&&ce.preventDefault(),a.subNavigationItems&&a.subNavigationItems.length>0&&i)ce.preventDefault(),g();else if(T){T(),o("click");return}o("click")};function z(ce){const de=ce.split("?")[0].split("#")[0];return de.endsWith("/")?de:`${de}/`}function ne(ce,de){return z(ce)===z(de)}function Pe(ce,de){return z(ce).startsWith(z(de))}function Se({url:ce,matches:de,exactMatch:qe,matchPaths:G,excludePaths:ve},ue){return ce==null?4:de?0:de===!1||ve&&ve.some(Xe=>Pe(ue,Xe))?3:G&&G.some(Xe=>Pe(ue,Xe))?2:(qe?ne(ue,ce):Pe(ue,ce))?1:4}function be(ce,de,qe){return de?{"aria-expanded":qe,"aria-controls":ce}:void 0}return(ce,de)=>{const qe=qr("Item",!0);return e.url?(r(),p("li",{key:1,class:u(n(q))},[S("div",{class:u(n(J).ItemWrapper)},[_(n(yt),pe({url:e.url,class:n(Z),external:e.external,tabIndex:n(B),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:_e,onKeyup:yi(x,["tab"]),onBlur:C},y({},be(n(c),!!e.subNavigationItems&&e.subNavigationItems.length>0,!!n(M)))),{default:v(()=>[e.icon?(r(),p("div",{key:0,class:u(n(E))},[_(n(ae),{source:e.icon},null,8,["source"])],2)):$("",!0),S("span",{class:u(n(J).Text)},[ye(X(e.label),1),n(N)?(r(),p("span",{key:0,class:u(n(J).Indicator)},[_(n(Ai),{pulse:""})],2)):$("",!0)],2),a.new||e.badge?(r(),p("div",{key:1,class:u(n(J).Badge)},[a.new?(r(),P(n(Re),{key:0,status:"new",size:"small"},{default:v(()=>[ye(X(n(Ee).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(r(),P(n(Re),{key:1,status:"new",size:"small"},{default:v(()=>[ye(X(e.badge),1)]),_:1})):typeof e.badge=="object"?(r(),P(n(Re),_t(pe({key:2},e.badge)),{default:v(()=>[ye(X(e.badge.content),1)]),_:1},16)):$("",!0)],2)):$("",!0),e.external?(r(),p("div",{key:2,class:u(n(J).ExternalIcon)},[_(n(ae),{color:"base",accessibilityLabel:n(Ee).Polaris.Common.newWindowAccessibilityHint,source:n(rS)},null,8,["accessibilityLabel","source"])],2)):$("",!0)]),_:1},16,["url","class","external","tabIndex","aria-disabled","aria-label","onKeyup"]),e.secondaryAction?(r(),P(n(yt),{key:0,external:"",url:e.secondaryAction.url,class:u(n(J).SecondaryAction),tabIndex:n(B),"aria-disabled":e.disabled,"aria-label":e.secondaryAction.accessibilityLabel,onClick:e.secondaryAction.onClick},{default:v(()=>[_(n(ae),{source:e.secondaryAction.icon},null,8,["source"])]),_:1},8,["url","class","tabIndex","aria-disabled","aria-label","onClick"])):$("",!0)],2),e.subNavigationItems&&e.subNavigationItems.length>0?(r(),p("div",{key:0,class:u(n(ie))},[_(n(wc),{expanded:!!n(M),id:n(c)},{default:v(()=>[(r(!0),p(te,null,fe(e.subNavigationItems,G=>(r(),P(qe,pe({key:G.label},G,{matches:G===n(re),onClick:()=>{n(T)&&n(T)(),G.onClick&&G.onClick()}}),null,16,["matches","onClick"]))),128))]),_:1},8,["expanded","id"])],2)):$("",!0)],2)):(r(),p("li",{key:0,class:u(n(J).ListItem)},[S("button",{type:"button",class:u(n(I)),disabled:e.disabled,"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:_e,onKeyup:yi(x,["tab"]),onBlur:C},[e.icon?(r(),p("div",{key:0,class:u(n(E))},[_(n(ae),{source:e.icon},null,8,["source"])],2)):$("",!0),S("span",{class:u(n(J).Text)},[ye(X(e.label),1),n(N)?(r(),p("span",{key:0,class:u(n(J).Indicator)},[_(n(Ai),{pulse:""})],2)):$("",!0)],2),a.new||e.badge?(r(),p("div",{key:1,class:u(n(J).Badge)},[a.new?(r(),P(n(Re),{key:0,status:"new",size:"small"},{default:v(()=>[ye(X(n(Ee).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(r(),P(n(Re),{key:1,status:"new",size:"small"},{default:v(()=>[ye(X(e.badge),1)]),_:1})):typeof e.badge=="object"?(r(),P(n(Re),_t(pe({key:2},e.badge)),{default:v(()=>[ye(X(e.badge.content),1)]),_:1},16)):$("",!0)],2)):$("",!0)],42,uS)],2))}}});_i.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"url",required:!1,type:{name:"string"}},{name:"matches",required:!1,type:{name:"boolean"}},{name:"matchPaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"excludePaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"external",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"badge",required:!1,type:{name:"union",elements:[{name:"string"},{name:"BadgeItemProps"}]}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"exactMatch",required:!1,type:{name:"boolean"}},{name:"new",required:!1,type:{name:"boolean"}},{name:"subNavigationItems",required:!1,type:{name:"Array",elements:[{name:"SubNavigationItem"}]}},{name:"secondaryAction",required:!1,type:{name:"SecondaryAction"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"shouldResizeIcon",required:!1,type:{name:"boolean"}}],events:[{name:"toggle-expanded-state"},{name:"click"}]};const dS={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},pS=S("path",{d:"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z"},null,-1),mS=[pS];function yS(e,o){return r(),p("svg",dS,mS)}var hS={render:yS};const gS=["aria-label"],fS=["aria-label"],Xi=L({props:{items:null,icon:null,title:null,fill:{type:Boolean},rollup:null,action:null,separator:{type:Boolean}},emits:["click"],setup(e,{emit:o}){const a=e,s=A(!1),i=()=>{s.value=!s.value},l=()=>{s.value=!1},c=A(null),m=A(),{useMediaQuery:b}=zi(),{isNavigationCollapsed:T}=b(),{useUniqueId:f}=we(),g=f("AdditionalItems"),x=F=>{o("click"),c.value&&cancelAnimationFrame(c.value),(!F||!T)&&(c.value=requestAnimationFrame(l))};se(()=>{c.value&&cancelAnimationFrame(c.value)});const C=d(()=>O(J.Section,a.separator&&J["Section-withSeparator"],a.fill&&J["Section-fill"])),B=O(J.Item,J.RollupToggle),N=d(()=>a.rollup&&(s.value?a.rollup.hide:a.rollup.view)),I=d(()=>a.items.findIndex(F=>a.rollup?a.rollup.activePath===F.url||F.url&&a.rollup.activePath.startsWith(F.url)||(F.subNavigationItems?F.subNavigationItems.some(({url:W})=>a.rollup&&a.rollup.activePath.startsWith(W)):!1):!1)),q=F=>{m.value===F?m.value=-1:m.value=F},E=d(()=>{let F=[];if(F=a.rollup?a.items.slice(0,a.rollup.after):a.items,a.rollup&&I.value!==-1&&I.value>a.rollup.after-1){const W=a.items.slice(a.rollup.after);F.push(...W.splice(I.value-a.rollup.after,1))}return F});return(F,W)=>(r(),p("ul",{class:u(n(C))},[e.title?(r(),p("li",{key:0,class:u(n(J).SectionHeading)},[S("span",{class:u(n(J).Text)},X(e.title),3),e.action?(r(),p("button",{key:0,type:"button",class:u(n(J).Action),"aria-label":e.action.accessibilityLabel,onClick:W[0]||(W[0]=(...D)=>e.action.onClick&&e.action.onClick(...D))},[_(n(ae),{source:e.action.icon},null,8,["source"])],10,gS)):$("",!0)],2)):$("",!0),n(E).length>0?(r(!0),p(te,{key:1},fe(n(E),(D,U)=>(r(),P(n(_i),pe({key:D.label},y({},D),{label:D.label,subNavigationItems:D.subNavigationItems,expanded:m.value===U,onClick:M=>x(D.subNavigationItems!=null&&D.subNavigationItems.length>0),onToggleExpandedState:M=>q(U)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128)):$("",!0),e.rollup&&e.items.slice(e.rollup.after).length>0?(r(),p("li",{key:2,class:u(n(J).RollupSection)},[_(n(Oi),{id:n(g),open:s.value},{default:v(()=>[S("ul",{class:u(n(J).List)},[(r(!0),p(te,null,fe(e.items.slice(e.rollup.after),(D,U)=>(r(),P(n(_i),pe({key:D.label},D,{label:D.label,subNavigationItems:D.subNavigationItems,expanded:m.value===U,onClick:M=>x(D.subNavigationItems!=null&&D.subNavigationItems.length>0),onToggleExpandedState:M=>q(U)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128))],2)]),_:1},8,["id","open"]),e.rollup&&e.items.length>e.rollup.after?(r(),p("div",{class:u(n(J).ListItem),key:"List Item"},[S("button",{type:"button",class:u(n(B)),"aria-label":n(N),onClick:i},[S("span",{class:u(n(J).Icon)},[_(n(ae),{source:n(hS)},null,8,["source"])],2)],10,fS)],2)):$("",!0)],2)):$("",!0)],2))}});Xi.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"items",description:"A collection of navigation items to be rendered inside the section",required:!0,type:{name:"Array",elements:[{name:"ItemProps"}]}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"title",required:!1,type:{name:"string"}},{name:"fill",required:!1,type:{name:"boolean"}},{name:"rollup",required:!1,type:{name:`{
  after: number;
  view: string;
  hide: string;
  activePath: string;
}`}},{name:"action",required:!1,type:{name:`{
  icon: IconProps['source'];
  accessibilityLabel: string;
  onClick(): void;
}`}},{name:"separator",required:!1,type:{name:"boolean"}}],events:[{name:"click"}]};const bS="Polaris-Select",vS="Polaris-Select--disabled",xS="Polaris-Select__Content",TS="Polaris-Select__InlineLabel",SS="Polaris-Select__Icon",CS="Polaris-Select__Backdrop",AS="Polaris-Select__SelectedOption",LS="Polaris-Select__Prefix",_S="Polaris-Select__Input",kS="Polaris-Select--error",wS="Polaris-Select--hover";var nt={Select:bS,disabled:vS,Content:xS,InlineLabel:TS,Icon:SS,Backdrop:CS,SelectedOption:AS,Prefix:LS,Input:_S,error:kS,hover:wS};const MS=["id","name","disabled","value","aria-invalid","aria-describedby","aria-required"],IS=["label"],BS=["value","disabled"],PS=["value","disabled"],NS=["aria-disabled"],Zo=L({props:{options:null,labelAction:null,labelHidden:{type:Boolean},labelInline:{type:Boolean},disabled:{type:Boolean},placeholder:null,id:null,name:null,value:null,error:{type:[null,Boolean]},requiredIndicator:{type:Boolean},modelValue:null},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const a=e,s=Te(),{useUniqueId:i}=we(),l=[],c=d(()=>i("Select",a.id)),m=d(()=>a.labelInline?!0:a.labelHidden),b=d(()=>O(nt.Select,a.error&&nt.error,a.disabled&&nt.disabled)),T=d(()=>{let D=[];return x.value.forEach(U=>{if(B(U)){const M=U;D=D.concat(M.options)}else D.push(U)}),D}),f=d(()=>{let D=T.value.find(U=>a.modelValue===U.value);return D===void 0&&(D=T.value.find(U=>!U.hidden)),D||{value:"",label:""}}),g=d(()=>x.value.map(D=>W(D))),x=d(()=>{let D=a.options.map(W);return a.placeholder&&D.unshift({label:a.placeholder,value:"",disabled:!0}),D});s["help-text"]&&l.push(Ri(a.id||"")),a.error&&l.push(`${a.id}Error`);const C=D=>typeof D=="string",B=D=>typeof D=="object"&&"options"in D&&D.options!=null,N=D=>{o("update:modelValue",D.target.value),o("change",D.target.value)},I=D=>B(D)?D.title:D.label,q=D=>B(D)?{label:D.title,value:"",disabled:!0,hidden:!0}:D,E=D=>B(D)?D.options:[];function F(D){return{label:D,value:D}}function W(D){if(C(D))return F(D);if(B(D)){const{title:U,options:M}=D;return{title:U,options:M.map(V=>C(V)?F(V):V)}}return D}return(D,U)=>(r(),P(n(Hi),{id:n(c),error:e.error,action:e.labelAction,"label-hidden":n(m),"required-indicator":e.requiredIndicator},Ve({default:v(()=>[S("div",{class:u(n(b))},[S("select",{id:n(c),name:e.name,class:u(n(nt).Input),disabled:e.disabled,value:e.modelValue,"aria-invalid":!!e.error,"aria-describedby":l.join(" ")||void 0,"aria-required":e.requiredIndicator,onFocus:U[0]||(U[0]=M=>D.$emit("focus")),onBlur:U[1]||(U[1]=M=>D.$emit("blur")),onChange:N},[(r(!0),p(te,null,fe(n(g),M=>(r(),p(te,null,[B(M)?(r(),p("optgroup",{label:I(M),key:I(M)},[(r(!0),p(te,null,fe(E(M),V=>(r(),p("option",{key:V.value,value:V.value,disabled:V.disabled},X(V.label),9,BS))),128))],8,IS)):(r(),p("option",{key:q(M).value,value:q(M).value,disabled:q(M).disabled},X(q(M).label),9,PS))],64))),256))],42,MS),S("div",{class:u(n(nt).Content),"aria-hidden":"","aria-disabled":e.disabled},[e.labelInline?(r(),p("span",{key:0,class:u(n(nt).InlineLabel)},[h(D.$slots,"label")],2)):$("",!0),D.$slots[`prefix-${n(f).id}`]?(r(),p("div",{key:1,class:u(n(nt).Prefix)},[h(D.$slots,`prefix-${n(f).id}`)],2)):$("",!0),S("span",{class:u(n(nt).SelectedOption)},[D.$slots[`label-${n(f).id}`]?h(D.$slots,`label-${n(f).id}`,{key:0}):(r(),p(te,{key:1},[ye(X(n(f).label),1)],64))],2),S("span",{class:u(n(nt).Icon)},[_(n(ae),{source:n(Dr)},null,8,["source"])],2)],10,NS),S("div",{class:u(n(nt).Backdrop)},null,2)],2)]),_:2},[!e.labelInline&&n(s).label?{name:"label",fn:v(()=>[h(D.$slots,"label")])}:void 0,n(s)["help-text"]?{name:"help-text",fn:v(()=>[h(D.$slots,"help-text")])}:void 0]),1032,["id","error","action","label-hidden","required-indicator"]))}});Zo.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",description:"List of options or option groups to choose from",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"labelInline",description:"Show the label to the left of the value, inside the control",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Example text to display as placeholder",required:!1,type:{name:"string"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"error",description:"Display an error state",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"requiredIndicator",description:"Visual required indicator, add an asterisk to label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["TSIndexedAccessType"]}},{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],slots:[{name:"label"},{name:"help-text"},{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const DS="Polaris-SettingAction",$S="Polaris-SettingAction__Setting",FS="Polaris-SettingAction__Action";var di={SettingAction:DS,Setting:$S,Action:FS};const ES=L({setup(e){return(o,a)=>(r(),p("div",{class:u(n(di).SettingAction)},[S("div",{class:u(n(di).Setting)},[h(o.$slots,"setting")],2),S("div",{class:u(n(di).Action)},[h(o.$slots,"action")],2)],2))}});ES.__docgenInfo={exportName:"default",displayName:"SettingAction",description:"",tags:{},slots:[{name:"setting"},{name:"action"}]};const OS="Polaris-Subheading";var qS={Subheading:OS};const Yn=L({props:{element:{default:"h3"}},setup(e){return(o,a)=>(r(),P(Le(e.element),{class:u(n(qS).Subheading)},{default:v(()=>[h(o.$slots,"default")]),_:3},8,["class"]))}});Yn.__docgenInfo={exportName:"default",displayName:"Subheading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the subheading",tags:{default:[{description:"'h3'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"default"}]};const Da=L({props:{content:null,duration:null,error:{type:Boolean},action:null},setup(e){const o=e,a=Mt(),{useUniqueId:s}=we(),{useFrame:i}=Qo(),{showToast:l,hideToast:c}=i(),m=s("Toast");return se(()=>{l(y(y({id:m},o),a))}),Ke(()=>{c({id:m})}),(b,T)=>null}});Da.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}]};const RS="Polaris-Tag",HS="Polaris-Tag--disabled",VS="Polaris-Tag--clickable",US="Polaris-Tag--removable",jS="Polaris-Tag--linkable",zS="Polaris-Tag__TagText",WS="Polaris-Tag__Button",XS="Polaris-Tag--segmented",GS="Polaris-Tag__Link",KS="Polaris-Tag__LinkText";var Ge={Tag:RS,disabled:HS,clickable:VS,removable:US,linkable:jS,TagText:zS,Button:WS,segmented:XS,Link:GS,LinkText:KS};const YS=["disabled"],QS=["href"],JS=["title"],ZS=["title"],eC=["aria-label","disabled"],$a=L({props:{disabled:{type:Boolean},accessibilityLabel:null,url:null},setup(e){const o=e,a=Mt(),s=Te(),i=d(()=>Boolean(a.onClick)),l=d(()=>Boolean(a.onRemove)),c=d(()=>i.value&&o.url),m=d(()=>O(Ge.Tag,o.disabled&&Ge.disabled,i.value&&Ge.clickable,l.value&&Ge.removable,o.url&&!o.disabled&&Ge.linkable,c.value&&Ge.segmented)),b=d(()=>O(Ge.Link,c.value&&Ge.segmented)),T=d(()=>O(Ge.Button,c.value&&Ge.segmented)),f=d(()=>o.accessibilityLabel?o.accessibilityLabel:s.default&&s.default()[0].children?s.default()[0].children:""),g=d(()=>`Remove ${f.value||""}`),x=zo;return(C,B)=>n(i)?(r(),p("button",{key:0,type:"button",disabled:e.disabled,class:u(n(m))},[h(C.$slots,"default")],10,YS)):(r(),p("span",{key:1,class:u(n(m))},[e.url&&!e.disabled?(r(),p("a",{key:0,class:u(n(b)),href:e.url},[S("span",{title:n(f),class:u(n(Ge).LinkText)},[h(C.$slots,"default")],10,JS)],10,QS)):(r(),p("span",{key:1,title:n(f),class:u(n(Ge).TagText)},[h(C.$slots,"default")],10,ZS)),n(l)?(r(),p("button",{key:2,type:"button","aria-label":n(g),class:u(n(T)),disabled:e.disabled,onClick:B[0]||(B[0]=N=>C.$emit("remove")),onMouseup:B[1]||(B[1]=(...N)=>n(x)&&n(x)(...N))},[_(n(ae),{source:n(Hr)},null,8,["source"])],42,eC)):$("",!0)],2))}});$a.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"disabled",description:"Disables the tag",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"A string to use when tag has more than textual content",required:!1,type:{name:"string"}},{name:"url",description:"Url to navigate to when tag is clicked or keypressed.",required:!1,type:{name:"string"}}],events:[{name:"remove"}],slots:[{name:"default"}]};const tC="Polaris-Thumbnail",oC="Polaris-Thumbnail--sizeSmall",aC="Polaris-Thumbnail--sizeMedium",nC="Polaris-Thumbnail--sizeLarge";var Jl={Thumbnail:tC,sizeSmall:oC,sizeMedium:aC,sizeLarge:nC};const Qn=L({props:{size:{default:"medium"},source:null,alt:null},setup(e){const o=e,a=d(()=>{const s=Ce("size",o.size);return O(Jl.Thumbnail,s&&Jl[s])});return(s,i)=>(r(),p("span",{class:u(n(a))},[typeof e.source=="string"?(r(),P(n(Ko),{key:0,alt:e.alt,source:e.source},null,8,["alt","source"])):(r(),P(n(ae),{key:1,accessibilityLabel:e.alt,source:e.source},null,8,["accessibilityLabel","source"]))],2))}});Qn.__docgenInfo={exportName:"default",displayName:"Thumbnail",description:"",tags:{},props:[{name:"size",description:"Size of thumbnail",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"source",description:"URL for the image",required:!0,type:{name:"union",elements:[{name:"string"},{name:"IconSource"}]}},{name:"alt",description:"Alt text for the thumbnail image",required:!0,type:{name:"string"}}]};const sC={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},iC=S("path",{d:"M19 11H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14H1a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"},null,-1),lC=[iC];function rC(e,o){return r(),p("svg",sC,lC)}var cC={render:rC};const uC="Polaris-TopBar",dC="Polaris-TopBar__LogoDisplayControl",pC="Polaris-TopBar__LogoDisplayContainer",mC="Polaris-TopBar__LogoContainer",yC="Polaris-TopBar__Logo",hC="Polaris-TopBar__LogoLink",gC="Polaris-TopBar__ContextControl",fC="Polaris-TopBar__NavigationIcon",bC="Polaris-TopBar--focused",vC="Polaris-TopBar__IconWrapper",xC="Polaris-TopBar__Contents",TC="Polaris-TopBar__SearchField",SC="Polaris-TopBar__SecondaryMenu";var ze={TopBar:uC,LogoDisplayControl:dC,LogoDisplayContainer:pC,LogoContainer:mC,Logo:yC,LogoLink:hC,ContextControl:gC,NavigationIcon:fC,focused:bC,IconWrapper:vC,Contents:xC,SearchField:TC,SecondaryMenu:SC};const CC="Polaris-TopBar-Menu__ActivatorWrapper",AC="Polaris-TopBar-Menu__Activator",LC="Polaris-TopBar-Menu__Section";var Zl={ActivatorWrapper:CC,Activator:AC,Section:LC};const _C="Polaris-Menu-Message__Section";var kC={Section:_C};const Mc=L({props:{title:null,description:null,action:null,link:null,badge:null},setup(e){return(o,a)=>(r(),p("div",{class:u(n(kC).Section)},[_(n(Ta),null,{default:v(()=>[_(n(at),{vertical:"",spacing:"tight"},{default:v(()=>[_(n(it),null,{default:v(()=>[_(n(Jo),null,{default:v(()=>[ye(X(e.title),1),e.badge?(r(),P(n(Re),{key:0,status:e.badge.status},{default:v(()=>[ye(X(e.badge.content),1)]),_:1},8,["status"])):$("",!0)]),_:1}),S("p",null,X(e.description),1)]),_:1}),_(n(Ma),{url:e.link.to},{default:v(()=>[ye(X(e.link.content),1)]),_:1},8,["url"]),_(n(he),{plain:"",onClick:e.action.onClick},{default:v(()=>[ye(X(e.action.content),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],2))}});Mc.__docgenInfo={exportName:"default",displayName:"Message",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}},{name:"action",required:!0,type:{name:"{ onClick(): void; content: string }"}},{name:"link",required:!0,type:{name:"{ to: string; content: string }"}},{name:"badge",required:!1,type:{name:"{ content: string; status: BadgeProps['status'] }"}}]};const wC=["aria-label"],Jn=L({props:{actions:null,message:null,open:{type:Boolean},colorScheme:null,accessibilityLabel:null},setup(e){const o=e,a=d(()=>!!o.message),s=o.message&&o.message.badge&&{content:o.message.badge.content,status:o.message.badge.status};return(i,l)=>(r(),P(n(tt),{fixed:"",active:e.open,"full-height":n(a),preferredAlignment:"right","color-scheme":e.colorScheme,onClose:l[2]||(l[2]=c=>i.$emit("close"))},{activator:v(()=>[S("div",{class:u(n(Zl).ActivatorWrapper)},[S("button",{type:"button",class:u(n(Zl).Activator),"aria-label":e.accessibilityLabel,onClick:l[0]||(l[0]=c=>i.$emit("open"))},[h(i.$slots,"activatorContent")],10,wC)],2)]),content:v(()=>[_(n(Ye),{sections:e.actions,onActionAnyItem:l[1]||(l[1]=c=>i.$emit("close"))},null,8,["sections"]),e.message&&e.message.action&&e.message.link?(r(),P(n(Mc),{key:0,title:e.message.title,description:e.message.description,action:{onClick:e.message.action.onClick,content:e.message.action.content},link:{to:e.message.link.to,content:e.message.link.content},badge:n(s)},null,8,["title","description","action","link","badge"])):$("",!0)]),_:3},8,["active","full-height","color-scheme"]))}});Jn.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"TSIndexedAccessType"}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the menu",required:!1,type:{name:"MessageProps"}},{name:"open",description:"A boolean property indicating whether the menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}}],events:[{name:"close"},{name:"open"}],slots:[{name:"activatorContent"}]};const MC="Polaris-TopBar-Search",IC="Polaris-TopBar-Search__SearchContent",BC="Polaris-TopBar-Search--visible",PC="Polaris-TopBar-Search__Results";var xn={Search:MC,SearchContent:IC,visible:BC,Results:PC};const NC="Polaris-TopBar-SearchDismissOverlay",DC="Polaris-TopBar-SearchDismissOverlay--visible";var er={SearchDismissOverlay:NC,visible:DC,"fade-in":"Polaris-TopBar-SearchDismissOverlay__fade--in"};const Ic=L({props:{visible:{type:Boolean}},emits:["dismiss"],setup(e,{emit:o}){const a=e,s=A(null),i=d(()=>O(er.SearchDismissOverlay,a.visible&&er.visible)),l=c=>{c.target===s.value&&o("dismiss")};return(c,m)=>(r(),p(te,null,[e.visible?(r(),P(n(Pi),{key:0})):$("",!0),S("div",pe(c.$attrs,{ref_key:"nodeRef",ref:s,class:n(i),onClick:l}),null,16)],64))}});Ic.__docgenInfo={exportName:"default",displayName:"SearchDismissOverlay",description:"",tags:{},props:[{name:"visible",description:"Determines whether the overlay should be visible",required:!0,type:{name:"boolean"}}],events:[{name:"dismiss"}]};const Bc=L({props:{visible:{type:Boolean},overlayVisible:{type:Boolean,default:!1}},emits:["dismiss"],setup(e,{emit:o}){const a=e,s=Te(),i=d(()=>O(xn.Search,a.visible&&xn.visible));return(l,c)=>(r(),p(te,null,[e.visible&&n(s).default?(r(),P(n(Ic),{key:0,visible:e.overlayVisible,onDismiss:c[0]||(c[0]=m=>l.$emit("dismiss"))},null,8,["visible"])):$("",!0),n(s).default?(r(),p("div",{key:1,class:u(n(i))},[_(n(Go),null,{default:v(()=>[S("div",{class:u(n(xn).SearchContent)},[S("div",{class:u(n(xn).Results)},[h(l.$slots,"default")],2)],2)]),_:3})],2)):$("",!0)],64))}});Bc.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"visible",description:"Toggles whether or not the search is visible",required:!1,type:{name:"boolean"}},{name:"overlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const $C="Polaris-TopBar-SearchField",FC="Polaris-TopBar-SearchField--focused",EC="Polaris-TopBar-SearchField__Input",OC="Polaris-TopBar-SearchField__Backdrop",qC="Polaris-TopBar-SearchField__BackdropShowFocusBorder",RC="Polaris-TopBar-SearchField__Icon",HC="Polaris-TopBar-SearchField__Clear",VC="Polaris-TopBar-SearchField--toLightBackground";var Ot={SearchField:$C,focused:FC,Input:EC,Backdrop:OC,BackdropShowFocusBorder:qC,Icon:RC,Clear:HC,toLightBackground:VC};const UC=["for"],jC=["id","placeholder"],zC=["aria-label"],Gi=L({props:{modelValue:null,placeholder:null,focused:{type:Boolean},active:{type:Boolean},showFocusBorder:{type:Boolean}},emits:["change","focus","blur","cancel","update:modelValue"],setup(e,{emit:o}){const a=e,s=A(!1),i=A(null),{useUniqueId:l}=we(),c=l("SearchField"),m=N=>{const I=N.target;o("change",I.value),o("update:modelValue",I.value)},b=()=>{o("focus")},T=()=>{o("blur")},f=()=>{o("cancel"),o("update:modelValue",""),o("change",""),i.value&&i.value.focus()},g=()=>{s.value=!1},x=()=>{b(),s.value=!0},C=d(()=>O(Ot.SearchField,(a.focused||a.active||s.value)&&Ot.focused)),B=d(()=>O(Ot.Backdrop,a.showFocusBorder&&Ot.BackdropShowFocusBorder));return se(()=>{!i.value||(a.focused?i.value.focus():i.value.blur())}),(N,I)=>(r(),p("div",{class:u(n(C)),onFocus:b,onBlur:T},[_(n(Ue),null,{default:v(()=>[S("label",{for:n(c)},X(n(Ee).Polaris.TopBar.SearchField.search),9,UC)]),_:1}),Ud(S("input",{id:n(c),class:u(n(Ot).Input),placeholder:e.placeholder,ref_key:"inputRef",ref:i,type:"search",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off","onUpdate:modelValue":I[0]||(I[0]=q=>zd(modelValue)?modelValue.value=q:null),onInput:m,onKeydown:I[1]||(I[1]=yi(Er(()=>!1,["prevent"]),["enter"]))},null,42,jC),[[jd,e.modelValue]]),S("span",{class:u(n(Ot).Icon)},[_(n(ae),{source:n(Sa)},null,8,["source"])],2),e.modelValue.length>0?(r(),p("button",{key:0,type:"button","aria-label":n(Ee).Polaris.TopBar.SearchField.clearButtonLabel,class:u(n(Ot).Clear),onClick:f,onBlur:g,onFocus:x},[_(n(ae),{source:n(Or)},null,8,["source"])],42,zC)):$("",!0),S("div",{class:u(n(B))},null,2)],34))}});Gi.__docgenInfo={exportName:"default",displayName:"SearchField",description:"",tags:{},props:[{name:"modelValue",description:"Initial value for the input",required:!0,type:{name:"string"}},{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"active",description:"Force a state where search is active but the text field component is not focused",required:!1,type:{name:"boolean"}},{name:"showFocusBorder",description:"Show a border when the search field is focused",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["string"]}},{name:"focus"},{name:"blur"},{name:"cancel"},{name:"update:modelValue",type:{names:["string"]}}]};const WC="Polaris-TopBar-UserMenu__Details",XC="Polaris-TopBar-UserMenu__Name",GC="Polaris-TopBar-UserMenu__Detail";var pi={Details:WC,Name:XC,Detail:GC};const Ki=L({props:{actions:null,message:null,name:null,detail:null,accessibilityLabel:null,initials:null,avatar:null,open:{type:Boolean},colorScheme:null},setup(e){const a=A(!!e.message);return(s,i)=>(r(),P(n(Jn),{open:e.open,actions:e.actions,message:e.message,"color-scheme":e.colorScheme,accessibilityLabel:e.accessibilityLabel,onOpen:i[0]||(i[0]=l=>s.$emit("toggle")),onClose:i[1]||(i[1]=l=>s.$emit("toggle"))},{activatorContent:v(()=>[_(n(Cc),{active:a.value},{default:v(()=>[_(n(Aa),{size:"small",source:e.avatar,initials:e.initials?e.initials.replace(" ",""):void 0},null,8,["source","initials"])]),_:1},8,["active"]),S("span",{class:u(n(pi).Details)},[S("p",{class:u(n(pi).Name)},X(e.name),3),S("p",{class:u(n(pi).Detail)},X(e.detail),3)],2)]),_:1},8,["open","actions","message","color-scheme","accessibilityLabel"]))}});Ki.__docgenInfo={exportName:"default",displayName:"UserMenu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"Array",elements:[{name:"{items: IconableAction[]}"}]}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"name",description:"A string detailing the merchant\u2019s full name to be displayed in the user menu",required:!0,type:{name:"string"}},{name:"detail",description:"A string allowing further detail on the merchant\u2019s name displayed in the user menu",required:!1,type:{name:"string"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}},{name:"initials",description:"The merchant\u2019s initials, rendered in place of an avatar image when not provided",required:!0,type:{name:"TSIndexedAccessType"}},{name:"avatar",description:"An avatar image representing the merchant",required:!1,type:{name:"TSIndexedAccessType"}},{name:"open",description:"A boolean property indicating whether the user menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the user menu",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"toggle"}]};const KC=["aria-label"],Fa=L({props:{showNavigationToggle:{type:Boolean},searchResultsVisible:{type:Boolean},searchResultsOverlayVisible:{type:Boolean,default:!1}},emits:["search-result-dismiss","navigation-toggle"],setup(e,{emit:o}){const a=e,{useFrame:s}=Qo(),{logo:i}=s(),l=Te(),c=A(!1),m=()=>{c.value=!0},b=()=>{c.value=!1},T=d(()=>O(ze.NavigationIcon,c.value&&ze.focused)),f=d(()=>O(ze.LogoContainer,a.showNavigationToggle||l.searchField?ze.LogoDisplayControl:ze.LogoDisplayContainer)),g=ji(i,104);return(x,C)=>(r(),p("div",{class:u(n(ze).TopBar)},[e.showNavigationToggle?(r(),p("button",{key:0,type:"button",class:u(n(T)),onClick:C[0]||(C[0]=B=>x.$emit("navigation-toggle")),onFocus:m,onBlur:b,"aria-label":n(Ee).Polaris.TopBar.toggleMenuLabel},[S("div",{class:u(n(ze).IconWrapper)},[_(n(ae),{source:n(cC)},null,8,["source"])],2)],42,KC)):$("",!0),n(l).contextControl?(r(),p("div",{key:1,class:u(n(ze).ContextControl)},[h(x.$slots,"contextControl")],2)):n(i)?(r(),p("div",{key:2,class:u(n(f))},[_(n(yt),{url:n(i).url||"",class:u(n(ze).LogoLink),style:Oe({width:n(g)})},{default:v(()=>[_(n(Ko),{source:n(i).topBarSource||"",alt:n(i).accessibilityLabel||"",class:u(n(ze).Logo),style:Oe({width:n(g)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):$("",!0),S("div",{class:u(n(ze).Contents)},[S("div",{class:u(n(ze).SearchField)},[n(l).searchField?(r(),p(te,{key:0},[h(x.$slots,"searchField"),_(n(Bc),{visible:e.searchResultsVisible,overlayVisible:e.searchResultsOverlayVisible,onDismiss:C[1]||(C[1]=B=>x.$emit("search-result-dismiss"))},{default:v(()=>[h(x.$slots,"searchResults")]),_:3},8,["visible","overlayVisible"])],64)):$("",!0)],2),S("div",{class:u(n(ze).SecondaryMenu)},[h(x.$slots,"secondaryMenu")],2),h(x.$slots,"userMenu")],2)],2))}});Fa.__docgenInfo={exportName:"default",displayName:"TopBar",description:"",tags:{},props:[{name:"showNavigationToggle",description:"Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button",required:!1,type:{name:"boolean"}},{name:"searchResultsVisible",description:"A boolean property indicating whether search results are currently visible.",required:!1,type:{name:"boolean"}},{name:"searchResultsOverlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"navigation-toggle"},{name:"search-result-dismiss"}],slots:[{name:"contextControl"},{name:"searchField"},{name:"searchResults"},{name:"secondaryMenu"},{name:"userMenu"}]};const YC=[e=>({components:{AppProvider:En,story:e},template:"<AppProvider><story /></AppProvider>"})],QC={viewMode:"docs",docs:{transformSource:e=>{const o=/<template>(.*)<\/template>/g;return`${e.replace(o,"$1")}`},source:{state:"open"}},controls:{matchers:{color:/(background|color|backgroundColor)$/i,date:/Date$/},sort:"alpha"},options:{showPanel:!0,storySort:{order:["Get Started","Polaris Icons","Component Status","Components",["Actions","Structure","Forms","Images and icons","Feedback indicators","Titles and text","Behavior","Lists and tables","Navigation","Overlays"]]}}};var JC=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:YC,parameters:QC});const ZC={},eA="wrapper";function Pc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(eA,w(y(y({},ZC),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Component Status",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h2",null,"Components List"),t("p",null,"Here are all the Working in Progress components. If you want to contribute, all pull requests are welcome."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Component"),t("th",{parentName:"tr",align:null},"Status"),t("th",{parentName:"tr",align:null},"Category"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"Autocomplete"),t("td",{parentName:"tr",align:null},t("em",{parentName:"td"},"WIP")),t("td",{parentName:"tr",align:null},"Structure")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"Card"),t("td",{parentName:"tr",align:null},t("em",{parentName:"td"},"WIP")),t("td",{parentName:"tr",align:null},"Forms")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"Range Slider"),t("td",{parentName:"tr",align:null},t("em",{parentName:"td"},"WIP")),t("td",{parentName:"tr",align:null},"Forms")))))}Pc.isMDXComponent=!0;const Nc=()=>{throw new Error("Docs-only story")};Nc.parameters={docsOnly:!0};const Yt={title:"Component Status",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},tA={};Yt.parameters=Yt.parameters||{};Yt.parameters.docs=w(y({},Yt.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:tA,mdxComponentAnnotations:Yt},t(Pc,null))});var oA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Nc,default:Yt});const aA={},nA="wrapper";function Dc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(nA,w(y(y({},aA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("img",{src:"https://github.com/qikify/polaris-vue/blob/master/public/images/banner.jpg?raw=true",alt:"Shopify Polaris Vue",width:"1000",height:"376"}),t("br",null),t("br",null),t("h1",null,"Get Started"),t("br",null),t("p",null,"Polaris Vue by Qikify is a component library for ",t("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," based on ",t("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris style guide"),". We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library)."),t("p",null,"Polaris Vue by qikify only supports ",t("strong",{parentName:"p"},"Vue 3.0+"),"."),t("p",null,t("strong",{parentName:"p"},"Follow Polaris React version:")," ",t("a",{parentName:"p",href:"https://github.com/Shopify/polaris-react/releases/tag/v9.2.2"},"9.2.2")," - Release date: ",t("em",{parentName:"p"},"Mar 12th, 2022"),"."),t("br",null),t("br",null),t("h2",null,"Installation"),t("p",null,"Using NPM"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`npm install @qikify/polaris-vue
`)),t("p",null,"Using Yarn"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`yarn add @qikify/polaris-vue
`)),t("br",null),t("h2",null,"Usage"),t("p",null,"Use as a Vue plugin (globally registers all components):"),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`//main.js
import { createApp } from 'vue'
import PolarisVue from '@qikify/polaris-vue' // (\u2713)
import '@qikify/polaris-vue/dist/style.css' // (\u2713) This will be deprecated in the future, right after Vue 3 supports css injections.
import App from './App.vue'

//...
const app = createApp(App)
app.use(PolarisVue) // (\u2713)
...
`)),t("p",null,"OR use individual component (for better bundle size):"),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`import { List, Icon } from '@qikify/polaris-vue';
`)),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"AppProvider")),t("p",null,"The AppProvider component is ",t("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  ...
</AppProvider>
</template>

<script><\/script>
`)),t("br",null),t("h2",null,"De-duplicating Vue version"),t("p",null,t("inlineCode",{parentName:"p"},"PolarisVue"),", other packages and your project may require access to the global Vue reference. So sometimes, you may get the runtime error message like:"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`TypeError: Cannot read properties of null (reading 'isCE')
renderSlot(...)
...
`)),t("p",null,"To avoid this, simply add ",t("inlineCode",{parentName:"p"},"dedupe: ['vue']")," to your ",t("inlineCode",{parentName:"p"},"vite.config.ts")," file, like below:"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`export default defineConfig({
  resolve: {
    ...
    dedupe: ['vue'],
  },
  ...
});
`)),t("br",null),t("h2",null,"Issues & Contributions"),t("p",null,"Polaris Vue by qikify is an open source project and we are very happy to accept community contributions."),t("p",null,"If you notice any bugs, please create issues under ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/issues"},"Issues"),"."),t("br",null),t("br",null),t("h2",null,"License"),t("p",null,"Code released under the  ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/LICENSE"},"MIT License"),"."),t("p",null,"Copyright (c) 2021 Qikify"))}Dc.isMDXComponent=!0;const $c=()=>{throw new Error("Docs-only story")};$c.parameters={docsOnly:!0};const Qt={title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},sA={};Qt.parameters=Qt.parameters||{};Qt.parameters.docs=w(y({},Qt.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:sA,mdxComponentAnnotations:Qt},t(Dc,null))});var iA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:$c,default:Qt});const lA={},rA="wrapper";function Fc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(rA,w(y(y({},lA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h1",null,"Polaris Icons"),t("p",null,"You can use all icons from ",t("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"Shopify Polaris Icons")," Library or any SVG files."),t("p",null,t("inlineCode",{parentName:"p"},"vite-svg-loader")," & ",t("inlineCode",{parentName:"p"},"polaris-icons")," are already included in Polaris Vue package."),t("p",null,"So you don't have to install any additional packages."),t("br",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Setup:")),t("p",null,"You have to use ",t("inlineCode",{parentName:"p"},"vite-svg-loader")," in your project. See ",t("a",{parentName:"p",href:"?path=/docs/components-images-and-icons-icon--icon"},"Icon Component")," for more details."),t("p",null,"Config in ",t("inlineCode",{parentName:"p"},"vite.config.ts")," if you are using ",t("inlineCode",{parentName:"p"},"vite")," to compile your project:"),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// vite.config.js
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    ...
    svgLoader(),
  ],
  ...
});
`)),t("h3",null,t("strong",{parentName:"h3"},"Usage:")),t("p",null,"Composition API:"),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`// *.vue
<script setup>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
<\/script>

<template>
  <Icon :source="CirclePlusMinor">
</template>
`)),t("p",null,"Options API:"),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`<script>
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
`)))}Fc.isMDXComponent=!0;const Ec=()=>{throw new Error("Docs-only story")};Ec.parameters={docsOnly:!0};const Jt={title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},cA={};Jt.parameters=Jt.parameters||{};Jt.parameters.docs=w(y({},Jt.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:cA,mdxComponentAnnotations:Jt},t(Fc,null))});var uA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Ec,default:Jt}),tr=Object.freeze,dA=Object.defineProperty,Oc=(e,o)=>tr(dA(e,"raw",{value:tr(o||e.slice())})),or,ar;const Zn=e=>({components:{ActionList:Ye},setup(){return{args:e}},template:`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>`}),ea=(e,{argTypes:o})=>({components:{ActionList:Ye,Button:he,Popover:tt,Icon:ae},data(){return{active:!1,iconTickSmallMinor:Fr,iconChevronRightMinor:Wd,inAPopoverItems:[{content:"Import file",onAction:this.handleImportedAction},{content:"Export file",onAction:this.handleExportedAction}],iconsOrImagesItems:[{content:"Import file",image:"https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"},{content:"Export file",icon:wn}],iconAndSuffixItems:[{active:!0,content:"Import file",icon:hi,suffixId:"import"},{content:"Export file",icon:wn}],suffixAndPrefixItems:[{content:"Go here",prefixId:"here",suffixId:"here"},{content:"Or there",suffixId:"there"}]}},methods:{toggle(){this.active=!this.active},handleImportedAction(){alert("Imported!")},handleExportedAction(){alert("Exported!")}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center'}">
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @click="toggle"
    >
      <template #activator>
        <Button disclosure @click="toggle">
          In a Popover
        </Button>
      </template>
      <template #content>
        <ActionList :items="inAPopoverItems"/>
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button disclosure> With Icons or image </Button>
      </template>
      <template #content>
        <ActionList :items="iconsOrImagesItems"/>
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button disclosure> With an icon and a suffix </Button>
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
        <Button disclosure> With suffix and prefix </Button>
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
  </div>`});ea.storyName="Items";ea.parameters={docs:{source:{code:k(or||(or=Oc([`
        <template>
          <Popover
            :active="active"
            autofocusTarget="first-node"
            @click="toggle"
          >
            <template #activator>
              <Button disclosure @click="toggle">
                In a Popover
              </Button>
            </template>
            <template #content>
              <ActionList :items="inAPopoverItems"/>
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button disclosure> With Icons or image </Button>
            </template>
            <template #content>
              <ActionList :items="iconsOrImagesItems"/>
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button disclosure> With an icon and a suffix </Button>
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
              <Button disclosure> With suffix and prefix </Button>
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
        `])))}}};const ta=(e,{argTypes:o})=>({components:{ActionList:Ye,Button:he,Popover:tt,Icon:ae},data(){return{sections:[{title:"File options",items:[{content:"Import file",icon:hi},{content:"Export file",icon:wn}]},{title:"Bulk actions",items:[{content:"Edit",icon:Xd},{content:"Delete",icon:wl}]}],destructiveItemSections:[{title:"File options",items:[{active:!0,content:"Import file",icon:hi},{content:"Export file",icon:wn},{destructive:!0,content:"Delete file",icon:wl}]}],helpTextSections:[{items:[{content:"Blog posts",helpText:"Manage your blog articles"},{content:"Blogs",helpText:"Manage blogs published to your Online Store"}]}]}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '120px', justifyContent: 'center'}">
    <Popover active>
      <template #activator>
        <Button disclosure> Sections </Button>
      </template>
      <template #content>
        <ActionList :sections="sections" />
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button disclosure> With Destructive Item </Button>
      </template>
      <template #content>
        <ActionList :sections="destructiveItemSections"/>
      </template>
    </Popover>
    <Popover active>
      <template #activator>
        <Button slot="activator" disclosure> With Help Text </Button>
      </template>
      <template #content>
        <ActionList :sections="helpTextSections"/>
      </template>
    </Popover>
  </div>`});ta.storyName="Sections";ta.parameters={docs:{source:{code:k(ar||(ar=Oc([`
        <template>
          <Popover active>
            <template #activator>
              <Button disclosure> Sections </Button>
            </template>
            <template #content>
              <ActionList :sections="sections" />
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button disclosure> With Destructive Item </Button>
            </template>
            <template #content>
              <ActionList :sections="destructiveItemSections"/>
            </template>
          </Popover>
          <Popover active>
            <template #activator>
              <Button slot="activator" disclosure> With Help Text </Button>
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
        `])))}}};const pA={Template:Zn,itemExamples:ea,sectionExamples:ta},mA="wrapper";function qc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(mA,w(y(y({},pA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Actions / ActionList",component:Ye,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"ActionList"),t("p",null,"Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let merchants select from a list of options."),t("p",null,"For Icon usages, use the ",t("a",{parentName:"p",href:"/docs/components-images-and-icons-icon--icon"},"Icon component.")),t("br",null),t("br",null),t("h3",null,"Items"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ea,height:"250px",inline:!1,name:"_itemExamples_",mdxType:"Story"})),t("h3",null,"Sections"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ta,height:"300px",inline:!1,name:"_sectionExamples_",mdxType:"Story"})),t("h3",null,"ActionList"),t(R,{mdxType:"Canvas"},t(H,{name:"ActionList",height:"40px",args:{default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}},parameters:{docs:{source:{code:k`
            <ActionList v-bind="props"></ActionList>
          `}}},mdxType:"Story"},Zn.bind({}))),t(oe,{story:"ActionList",mdxType:"ArgsTable"}))}qc.isMDXComponent=!0;const yA=ea,hA=ta,es=Zn.bind({});es.storyName="ActionList";es.args={default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}};es.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
            <ActionList v-bind="props"></ActionList>
          `}}};const Zt={title:"Components / Actions / ActionList",component:Ye,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_itemExamples_","_sectionExamples_","actionList"]},gA={_itemExamples_:"_itemExamples_",_sectionExamples_:"_sectionExamples_",ActionList:"actionList"};Zt.parameters=Zt.parameters||{};Zt.parameters.docs=w(y({},Zt.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:gA,mdxComponentAnnotations:Zt},t(qc,null))});var fA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zn,itemExamples:ea,sectionExamples:ta,_itemExamples_:yA,_sectionExamples_:hA,actionList:es,default:Zt});const bA={},vA="wrapper";function Rc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(vA,w(y(y({},bA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Structure / AppProvider",component:En,mdxType:"Meta"}),t("h1",null,"AppProvider"),t("p",null,"App provider is a required component that enables sharing global settings throughout the hierarchy of your application."),t("br",null),t("h2",null,"Best practices"),t("p",null,"The AppProvider component is ",t("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  <div>
  </div>
</AppProvider>
</template>

<script><\/script>
`)))}Rc.isMDXComponent=!0;const Hc=()=>{throw new Error("Docs-only story")};Hc.parameters={docsOnly:!0};const eo={title:"Components / Structure / AppProvider",component:En,includeStories:["__page"]},xA={};eo.parameters=eo.parameters||{};eo.parameters.docs=w(y({},eo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:xA,mdxComponentAnnotations:eo},t(Rc,null))});var TA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Hc,default:eo});const ts=(e,{argTypes:o})=>({components:{Avatar:Aa},setup(){return{args:e}},template:'<Avatar v-bind="args"/>'}),SA={Template:ts},CA="wrapper";function Vc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(CA,w(y(y({},SA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Images and Icons / Avatar",component:Aa,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Avatar"),t("p",null,"Avatars are used to show a thumbnail representation of an individual or business in the interface."),t(R,{mdxType:"Canvas"},t(H,{name:"Avatar",height:"60px",parameters:{docs:{source:{code:k`
            <Avatar v-bind="props"/>
          `}}},mdxType:"Story"},ts.bind({}))),t(oe,{story:"Avatar",mdxType:"ArgsTable"}))}Vc.isMDXComponent=!0;const Yi=ts.bind({});Yi.storyName="Avatar";Yi.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <Avatar v-bind="props"/>
          `}}};const to={title:"Components / Images and Icons / Avatar",component:Aa,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["avatar"]},AA={Avatar:"avatar"};to.parameters=to.parameters||{};to.parameters.docs=w(y({},to.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:AA,mdxComponentAnnotations:to},t(Vc,null))});var LA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ts,avatar:Yi,default:to});const os=e=>({components:{Badge:Re},setup(){return{args:e}},template:'<Badge v-bind="args">Fulfilled</Badge>'}),oa=(e,{argTypes:o})=>({components:{Badge:Re},template:k`<div>
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
  </div>`});oa.storyName="Variants";oa.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const _A={Template:os,Variants:oa},kA="wrapper";function Uc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(kA,w(y(y({},_A),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Images and icons / Badge",component:Re,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Badge"),t("p",null,"Badges are used to inform merchants of the status of an object or of an action that's been taken."),t(R,{mdxType:"Canvas"},t(H,{story:oa,height:"65px",name:"_Variants_",mdxType:"Story"})),t(R,{mdxType:"Canvas"},t(H,{name:"Badge",height:"30px",parameters:{docs:{source:{code:k`
          `}}},mdxType:"Story"},os.bind({}))),t(oe,{story:"Badge",mdxType:"ArgsTable"}))}Uc.isMDXComponent=!0;const wA=oa,Qi=os.bind({});Qi.storyName="Badge";Qi.parameters={storySource:{source:`args => ({
  components: {
    Badge
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Badge v-bind="args">Fulfilled</Badge>\`
})`},docs:{source:{code:k`
          `}}};const oo={title:"Components / Images and icons / Badge",component:Re,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Variants_","badge"]},MA={_Variants_:"_Variants_",Badge:"badge"};oo.parameters=oo.parameters||{};oo.parameters.docs=w(y({},oo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:MA,mdxComponentAnnotations:oo},t(Uc,null))});var IA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:os,Variants:oa,_Variants_:wA,badge:Qi,default:oo}),nr=Object.freeze,BA=Object.defineProperty,Ji=(e,o)=>nr(BA(e,"raw",{value:nr(o||e.slice())})),sr,ir,lr;const as=(e,{argTypes:o})=>({components:{Button:he},setup(){return{args:e}},template:'<Button v-bind="args">Add Product</Button>'}),aa=(e,{argTypes:o})=>({components:{Button:he},template:` <div style="margin: 0 auto; width: 97%">
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
  </div>`});aa.storyName="Variants";aa.parameters={docs:{source:{code:k`
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
        `}}};const na=(e,{argTypes:o})=>({components:{Button:he},data(){return{expanded:!1}},computed:{disclosure(){return this.expanded?"up":"down"},disclosureText(){return this.expanded?"Show less":"Show more"}},template:`<div>
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
  </div>`});na.storyName="Disclosure";na.parameters={docs:{source:{code:k(sr||(sr=Ji([`
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
        `])))}}};const sa=(e,{argTypes:o})=>({components:{Button:he},data(){return{connectedDisclosure:{accessibilityLabel:"Other save actions",actions:[{content:"Save as draft"}]}}},template:'<Button :connectedDisclosure="connectedDisclosure" :primary="true"> Save </Button>'});sa.storyName="Split Button";sa.parameters={docs:{source:{code:k(ir||(ir=Ji([`
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
        `])))}}};const ia=(e,{argTypes:o})=>({components:{ButtonGroup:Ut,Button:he},data(){return{isFirstButtonActive:!0}},methods:{handleFirstButtonActive(){this.isFirstButtonActive||(this.isFirstButtonActive=!0)},handleSecondButtonActive(){!this.isFirstButtonActive||(this.isFirstButtonActive=!1)}},template:`<ButtonGroup :segmented="true">
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
  </ButtonGroup>`});ia.storyName="Pressed Button";ia.parameters={docs:{source:{code:k(lr||(lr=Ji([`
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
        `])))}}};const PA={Template:as,Variants:aa,Disclosure:na,SplitButton:sa,PressedButton:ia},NA="wrapper";function jc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(NA,w(y(y({},PA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Actions / Button",component:he,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Button"),t("p",null,"Buttons are used primarily for actions, such as \u201CAdd\u201D, \u201CClose\u201D, \u201CCancel\u201D, or \u201CSave\u201D. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as \u201Cview shipping settings\u201D."),t("p",null,"For navigational actions that appear within or directly following a sentence, use the ",t("a",{parentName:"p",href:"/docs/components-navigation-link--link"},"link component.")),t("p",null,"For connectedDisclosure actions, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--actionlist"},"ActionList component.")),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"button")," element in html."),t("br",null),t("br",null),t("h3",null,"Button Variants"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:aa,height:"280px",name:"_Variants_",mdxType:"Story"})),t("h3",null,"Pressed Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ia,height:"60px",name:"_PressedButton_",mdxType:"Story"})),t("h3",null,"Disclosure Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:na,height:"140px",name:"_Disclosure_",mdxType:"Story"})),t("h3",null,"Split Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:sa,height:"120px",inline:!1,name:"_SplitButton_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Button",height:"40px",parameters:{docs:{source:{code:k`
            <Button>Add Product</Button>
          `}}},mdxType:"Story"},as.bind({}))),t(oe,{story:"Button",mdxType:"ArgsTable"}))}jc.isMDXComponent=!0;const DA=aa,$A=ia,FA=na,EA=sa,Zi=as.bind({});Zi.storyName="Button";Zi.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <Button>Add Product</Button>
          `}}};const ao={title:"Components / Actions / Button",component:he,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_Variants_","_PressedButton_","_Disclosure_","_SplitButton_","button"]},OA={_Variants_:"_Variants_",_PressedButton_:"_PressedButton_",_Disclosure_:"_Disclosure_",_SplitButton_:"_SplitButton_",Button:"button"};ao.parameters=ao.parameters||{};ao.parameters.docs=w(y({},ao.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:OA,mdxComponentAnnotations:ao},t(jc,null))});var qA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:as,Variants:aa,Disclosure:na,SplitButton:sa,PressedButton:ia,_Variants_:DA,_PressedButton_:$A,_Disclosure_:FA,_SplitButton_:EA,button:Zi,default:ao});const ns=(e,{argTypes:o})=>({components:{ButtonGroup:Ut,Button:he},setup(){return{args:e}},template:`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>`}),la=(e,{argTypes:o})=>({components:{ButtonGroup:Ut,Button:he},template:`<ButtonGroup segmented>
    <Button> Bold </Button>
    <Button> Italic </Button>
    <Button> Underline </Button>
  </ButtonGroup>`});la.storyName="With segmented buttons";la.parameters={docs:{source:{code:k`
        <ButtonGroup segmented>
          <Button> Bold </Button>
          <Button> Italic </Button>
          <Button> Underline </Button>
        </ButtonGroup>
      `}}};const RA={Template:ns,SegmentedButtons:la},HA="wrapper";function zc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(HA,w(y(y({},RA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Actions / ButtonGroup",component:Ut,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"ButtonGroup"),t("p",null,"Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing."),t("br",null),t("h3",null,"With segmented buttons"),t(R,{mdxType:"Canvas"},t(H,{story:la,height:"65px",name:"_SegmentedButtons_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{name:"ButtonGroup",height:"60px",parameters:{docs:{source:{code:k`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}},mdxType:"Story"},ns.bind({}))),t(oe,{story:"ButtonGroup",mdxType:"ArgsTable"}))}zc.isMDXComponent=!0;const VA=la,el=ns.bind({});el.storyName="ButtonGroup";el.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}};const no={title:"Components / Actions / ButtonGroup",component:Ut,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SegmentedButtons_","buttonGroup"]},UA={_SegmentedButtons_:"_SegmentedButtons_",ButtonGroup:"buttonGroup"};no.parameters=no.parameters||{};no.parameters.docs=w(y({},no.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:UA,mdxComponentAnnotations:no},t(zc,null))});var jA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ns,SegmentedButtons:la,_SegmentedButtons_:VA,buttonGroup:el,default:no});const ss=e=>({components:{List:Ia,ListItem:Wi,Caption:Rn},setup(){return{args:e}},template:`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>`}),zA={Template:ss},WA="wrapper";function Wc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(WA,w(y(y({},zA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Titles and text  / Caption",component:Rn,mdxType:"Meta"}),t("h1",null,"Caption"),t("p",null,`Caption text size is smaller than the recommended size for general reading.
On web, it should be used only in a graph or as a timestamp for a list item.
On Android and iOS, it can also be used as help text or as other kinds of secondary text for list items.`),t(R,{mdxType:"Canvas"},t(H,{name:"Caption",height:"100px",parameters:{docs:{source:{code:k`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}},mdxType:"Story"},ss.bind({}))))}Wc.isMDXComponent=!0;const tl=ss.bind({});tl.storyName="Caption";tl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}};const so={title:"Components / Titles and text  / Caption",component:Rn,includeStories:["caption"]},XA={Caption:"caption"};so.parameters=so.parameters||{};so.parameters.docs=w(y({},so.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:XA,mdxComponentAnnotations:so},t(Wc,null))});var GA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ss,caption:tl,default:so});const Ea=e=>({components:{Checkbox:Yo},setup(){return{args:e}},template:`
  <div>
    <Checkbox v-bind="args" v-model="isChecked">
      <template #label>Checkbox label</template>
      <template #help-text>Basic help text</template>
    </Checkbox>
    <p style="margin-top: 30px">Checked: {{ isChecked }} </p>
  </div>`,data(){return{isChecked:!1}}});Ea.parameters={docs:{source:{code:k`
        <div>
          <Checkbox v-model="isChecked">
            <template #label>Checkbox label</template>
            <template #help-text>Basic help text</template>
          </Checkbox>
          <p>Checked: {{ isChecked }} </p>
        </div>
      `}}};const KA={Template:Ea},YA="wrapper";function Xc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(YA,w(y(y({},KA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / Checkbox",component:Yo,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Checkbox"),t("p",null,`Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
They may also be used as a way to have merchants indicate they agree to specific terms and services.`),t(R,{mdxType:"Canvas"},t(H,{story:Ea,name:"Checkbox",mdxType:"Story"})),t(oe,{story:"Checkbox",mdxType:"ArgsTable"}))}Xc.isMDXComponent=!0;const Gc=Ea;Gc.storyName="Checkbox";const io={title:"Components / Forms / Checkbox",component:Yo,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Template_"]},QA={Checkbox:"_Template_"};io.parameters=io.parameters||{};io.parameters.docs=w(y({},io.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:QA,mdxComponentAnnotations:io},t(Xc,null))});var JA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ea,_Template_:Gc,default:io});const Oa=e=>({components:{ChoiceList:st},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Oa.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const qa=e=>({components:{ChoiceList:st},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});qa.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const Ra=e=>({components:{ChoiceList:st},template:`
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
  `,data(){return{value:["shipping"],choices:[{label:"Use the shipping address as the billing address by default",helpText:"Reduces the number of fields required to check out. The billing address can still be edited.",value:"shipping"},{label:"Require a confirmation step",helpText:"Customers must review their order details before purchasing.",value:"confirmation"}]}}});Ra.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const Ha=(e,{argTypes:o})=>({components:{ChoiceList:st},template:`
  <div>
    <ChoiceList
      name="singleChild"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:"<p>This is child content of Minimum quantity option</p>"}]}}});Ha.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const Va=(e,{argTypes:o})=>({components:{ChoiceList:st},template:`
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
  `,data(){return{selected:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:""}]}},methods:{handleChange(){this.choices[2].renderChildren=this.selected==="minimum_quantity"?"<p>This is child content of Minimum quantity option</p>":""}}});Va.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const Ua=e=>({components:{ChoiceList:st},setup(){return{args:e}},template:`
  <ChoiceList
    v-bind="args"
    v-model="selected"
    :choices="options"
  >
    Example choice list
  </ChoiceList>
  `,data(){return{selected:"hidden",options:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Ua.parameters={docs:{source:{code:k`
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
      `}}};const ZA={singleChoiceList:Oa,errorSingleChoiceList:qa,multiChoiceList:Ra,renderChildChoiceList:Ha,renderChildWithConditional:Va,Example:Ua},eL="wrapper";function Kc(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(eL,w(y(y({},ZA),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / ChoiceList",component:st,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Choice list"),t("p",null,`A choice list lets you create a list of grouped radio buttons or checkboxes.
Use this component if you need to group together a related list of interactive choices.`),t("br",null),t("br",null),t("h3",null,"Single choice list"),t("p",null,"Allows merchants to select one option from a list."),t("ul",null,t("li",{parentName:"ul"},"Make sure all options are an either/or choice.")),t(R,{mdxType:"Canvas"},t(H,{story:Oa,name:"Single choice list",mdxType:"Story"})),t("h3",null,"Single choice list with error"),t("p",null,"Allows for accessible error handling by connecting the error message to the field with the error."),t(R,{mdxType:"Canvas"},t(H,{story:qa,name:"Single choice list with error",mdxType:"Story"})),t("h3",null,"Multi-choice list"),t("p",null,"Allows merchants to select multiple options from a list."),t("ul",null,t("li",{parentName:"ul"},"Avoid options that are an either/or choice.")),t(R,{mdxType:"Canvas"},t(H,{story:Ra,name:"Multi-choice list",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (always rendered)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content will always be rendered. Works for both single-choice and multi-choice list.`),t(R,{mdxType:"Canvas"},t(H,{story:Ha,name:"Single-choice or multi-choice list with children content (always rendered)",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (rendered only when selected)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list.`),t(R,{mdxType:"Canvas"},t(H,{story:Va,name:"Single-choice or multi-choice list with children content (rendered only when selected)",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{story:Ua,name:"Example",height:"160px",mdxType:"Story"})),t(oe,{story:"Example",mdxType:"ArgsTable"}))}Kc.isMDXComponent=!0;const Yc=Oa;Yc.storyName="Single choice list";const Qc=qa;Qc.storyName="Single choice list with error";const Jc=Ra;Jc.storyName="Multi-choice list";const Zc=Ha;Zc.storyName="Single-choice or multi-choice list with children content (always rendered)";const eu=Va;eu.storyName="Single-choice or multi-choice list with children content (rendered only when selected)";const tu=Ua;tu.storyName="Example";const lo={title:"Components / Forms / ChoiceList",component:st,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_singleChoiceList_","_errorSingleChoiceList_","_multiChoiceList_","_renderChildChoiceList_","_renderChildWithConditional_","_Example_"]},tL={"Single choice list":"_singleChoiceList_","Single choice list with error":"_errorSingleChoiceList_","Multi-choice list":"_multiChoiceList_","Single-choice or multi-choice list with children content (always rendered)":"_renderChildChoiceList_","Single-choice or multi-choice list with children content (rendered only when selected)":"_renderChildWithConditional_",Example:"_Example_"};lo.parameters=lo.parameters||{};lo.parameters.docs=w(y({},lo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:tL,mdxComponentAnnotations:lo},t(Kc,null))});var oL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",singleChoiceList:Oa,errorSingleChoiceList:qa,multiChoiceList:Ra,renderChildChoiceList:Ha,renderChildWithConditional:Va,Example:Ua,_singleChoiceList_:Yc,_errorSingleChoiceList_:Qc,_multiChoiceList_:Jc,_renderChildChoiceList_:Zc,_renderChildWithConditional_:eu,_Example_:tu,default:lo});const is=e=>({components:{ColorPicker:Vn},setup(){return{color:A("#000000"),args:e}},template:k`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>`}),aL={Template:is},nL="wrapper";function ou(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(nL,w(y(y({},aL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / Color Picker",component:Vn,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Color picker"),t("p",null,`The color picker is used to let merchants select a color visually.
For example, merchants use the color picker to customize the accent color of the email templates for their shop.`),t(R,{mdxType:"Canvas"},t(H,{name:"Color Picker",height:"210px",parameters:{docs:{source:{code:k`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}},mdxType:"Story"},is.bind({}))),t(oe,{story:"Color Picker",mdxType:"ArgsTable"}))}ou.isMDXComponent=!0;const ol=is.bind({});ol.storyName="Color Picker";ol.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}};const ro={title:"Components / Forms / Color Picker",component:Vn,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},includeStories:["colorPicker"]},sL={"Color Picker":"colorPicker"};ro.parameters=ro.parameters||{};ro.parameters.docs=w(y({},ro.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:sL,mdxComponentAnnotations:ro},t(ou,null))});var iL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:is,colorPicker:ol,default:ro});const ja=e=>({components:{Combobox:zt,Listbox:Qe,ListboxOption:ot,ComboboxTextField:_a,Icon:ae},template:`
  <Combobox>
    <template #activator>
      <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
        <template slot="prefix">
          <Icon :source="searchIcon" color="inkLighter"></Icon>
        </template>
      </ComboboxTextField>
    </template>
    <Listbox @select="handleOptionSelected" onSelect="">
      <ListboxOption value="" :disabled="true">
        ListboxOptions rendered with v-for in filteredOptions
      </ListboxOption>
      <ListboxOption
        v-for="option, index in filteredOptions"
        :key="index"
        :value="option.value"
        :selected="isOptionSelected(option, index)"
      >
        {{ option.label }}
      </ListboxOption>
    </Listbox>
  </Combobox>`,data(){return{searchIcon:Sa,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,a){return this.searchValue?this.searchValue===o.value:a===0}}});ja.parameters={docs:{source:{state:"close",code:k`
        <Combobox>
          <template #activator>
            <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
              <template #prefix>
                <Icon :source="searchIcon" color="inkLighter"></Icon>
              </template>
            </ComboboxTextField>
          </template>
          <Listbox @select="handleOptionSelected" onSelect="">
            <ListboxOption value="" :disabled="true">
              ListboxOptions rendered with v-for in filteredOptions
            </ListboxOption>
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
      `}}};const za=e=>({components:{Combobox:zt,Listbox:Qe,ListboxOption:ot,ComboboxTextField:_a,Icon:ae,TextContainer:it,Tag:$a,Stack:at},template:`
  <Combobox :allowMultiple="true">
    <template #activator>
      <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
        <template #prefix>
          <Icon :source="searchIcon" color="inkLighter"></Icon>
        </template>
      </ComboboxTextField>
    </template>
    <Listbox @select="handleOptionSelected">
      <ListboxOption value="" :disabled="true">
        ListboxOptions rendered with v-for in filteredOptions
      </ListboxOption>
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
  </TextContainer>
  `,data(){return{searchIcon:Sa,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:"",selectedOptions:["rustic","antique"]}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.selectedOptions.includes(o)?this.selectedOptions=this.selectedOptions.filter(a=>a!==o):this.selectedOptions.push(o)},handleRemoveTag(o){this.selectedOptions=this.selectedOptions.filter(a=>a!==o)}}});za.parameters={docs:{source:{state:"close",code:k`
      <Combobox :allowMultiple="true">
        <template #activator>
          <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
            <template #prefix>
              <Icon :source="searchIcon" color="inkLighter"></Icon>
            </template>
          </ComboboxTextField>
        </template>
        <Listbox @select="handleOptionSelected">
          <ListboxOption value="" :disabled="true">
            ListboxOptions rendered with v-for in filteredOptions
          </ListboxOption>
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
      `}}};const Wa=e=>({components:{Combobox:zt,Listbox:Qe,ListboxOption:ot,ComboboxTextField:_a,Icon:ae,ListboxLoading:Ba},template:`
  <Combobox>
    <template #activator>
      <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
        <template #prefix>
          <Icon :source="searchIcon" color="inkLighter"></Icon>
        </template>
      </ComboboxTextField>
    </template>
    <Listbox>
      <ListboxLoading accessibilityLabel="Loading listbox"/>
    </Listbox>
  </Combobox>
  `,data(){return{searchIcon:Sa,searchValue:""}}});Wa.parameters={docs:{source:{state:"close",code:k`
        <Combobox>
          <template #activator>
            <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
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
      `}}};const Xa=e=>({components:{Combobox:zt,Listbox:Qe,ListboxOption:ot,ComboboxTextField:_a,Icon:ae},template:`
  <Combobox>
    <template #activator>
      <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
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
  </Combobox>`,data(){return{searchIcon:Sa,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,a){return this.searchValue?this.searchValue===o.value:a===0}}});Xa.parameters={docs:{source:{code:k`
        <Combobox>
          <template #activator>
            <ComboboxTextField  :labelHidden="true" v-model="searchValue" placeholder="Search customer">
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
      `}}};const lL={BasicAutocomplete:ja,MultiTagAutocomplete:za,LoadingAutoComplete:Wa,ExampleAutoComplete:Xa},rL="wrapper";function au(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(rL,w(y(y({},lL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / Combobox",component:zt,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Combobox"),t("p",null,"The Combobox component implements part of the ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"},"Aria 1.2 combobox"),` specs on a TextField and a popover containing a Listbox.
Like Autocomplete, Combobox allows merchants to quickly search through and select from large collections of options.`),t("br",null),t("br",null),t("h3",null,"Basic autocomplete"),t("p",null,"Use to help merchants complete text input quickly from a list of options."),t(R,{mdxType:"Canvas"},t(H,{story:ja,name:"Basic Autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Multiple tags autocomplete"),t("p",null,"Use to help merchants select multiple options from a list curated by the text input."),t(R,{mdxType:"Canvas"},t(H,{story:za,name:"Multiple tags autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Autocomplete with loading"),t("p",null,"Use to indicate loading state to merchants while option data is processing."),t(R,{mdxType:"Canvas"},t(H,{story:Wa,name:"Autocomplete with loading",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Example"),t("font",{color:"red"}," Can not test props on this component due to inline Story. Try it on your own project. "),t(R,{mdxType:"Canvas"},t(H,{story:Xa,name:"Example",height:"180px",inline:!1,mdxType:"Story"})),t(oe,{story:"Example",mdxType:"ArgsTable"}))}au.isMDXComponent=!0;const nu=ja;nu.storyName="Basic Autocomplete";const su=za;su.storyName="Multiple tags autocomplete";const iu=Wa;iu.storyName="Autocomplete with loading";const lu=Xa;lu.storyName="Example";const co={title:"Components / Forms / Combobox",component:zt,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_BasicAutocomplete_","_MultiTagAutocomplete_","_LoadingAutoComplete_","_ExampleAutoComplete_"]},cL={"Basic Autocomplete":"_BasicAutocomplete_","Multiple tags autocomplete":"_MultiTagAutocomplete_","Autocomplete with loading":"_LoadingAutoComplete_",Example:"_ExampleAutoComplete_"};co.parameters=co.parameters||{};co.parameters.docs=w(y({},co.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:cL,mdxComponentAnnotations:co},t(au,null))});var uL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicAutocomplete:ja,MultiTagAutocomplete:za,LoadingAutoComplete:Wa,ExampleAutoComplete:Xa,_BasicAutocomplete_:nu,_MultiTagAutocomplete_:su,_LoadingAutoComplete_:iu,_ExampleAutoComplete_:lu,default:co});const ls=e=>({components:{Frame:gt,ContextualSaveBar:ka,Button:he},setup(){return{discardHandle:()=>{console.log("nothing saved")},saveForm:()=>{alert("Saved")},CancelSmallMinor:Hr}},template:`
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
  `}),dL={Template:ls},pL="wrapper";function ru(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(pL,w(y(y({},dL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / Contextual save bar",component:ka,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Contextual save bar"),t("p",null,"The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work."),t(R,{mdxType:"Canvas"},t(H,{name:"Contextual save bar",inline:!1,height:"300px",parameters:{docs:{source:{code:k`
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
          `}}},mdxType:"Story"},ls.bind({}))),t(oe,{story:"Contextual save bar",mdxType:"ArgsTable"}))}ru.isMDXComponent=!0;const al=ls.bind({});al.storyName="Contextual save bar";al.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
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
          `}}};const uo={title:"Components / Forms / Contextual save bar",component:ka,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},includeStories:["contextualSaveBar"]},mL={"Contextual save bar":"contextualSaveBar"};uo.parameters=uo.parameters||{};uo.parameters.docs=w(y({},uo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:mL,mdxComponentAnnotations:uo},t(ru,null))});var yL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ls,contextualSaveBar:al,default:uo});const rs=e=>({components:{DatePicker:Un},setup(){const o=A(e.selectedDate),a=Cn({month:e.month,year:e.year});return{args:e,selectedDate:o,pickerView:a,handleChange:l=>{console.log(l)},handleMonthChange:({month:l,year:c})=>{a.month=l,a.year=c}}},template:k`<div>
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
  </div>`}),hL={Template:rs},gL="wrapper";function cu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(gL,w(y(y({},hL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / Date Picker",component:Un,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},mdxType:"Meta"}),t("h1",null,"Date picker"),t("p",null,"Date pickers let merchants choose dates from a visual calendar that's consistently applied wherever dates need to be selected across Shopify."),t(R,{mdxType:"Canvas"},t(H,{name:"Date Picker",height:"320px",args:{selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0},parameters:{docs:{source:{code:k`
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
          `}}},mdxType:"Story"},rs.bind({}))),t(oe,{story:"Date Picker",mdxType:"ArgsTable"}))}cu.isMDXComponent=!0;const cs=rs.bind({});cs.storyName="Date Picker";cs.args={selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0};cs.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
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
          `}}};const po={title:"Components / Forms / Date Picker",component:Un,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},includeStories:["datePicker"]},fL={"Date Picker":"datePicker"};po.parameters=po.parameters||{};po.parameters.docs=w(y({},po.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:fL,mdxComponentAnnotations:po},t(cu,null))});var bL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:rs,datePicker:cs,default:po});const us=e=>({components:{DescriptionList:jn,Dt:dc,Dd:pc},setup(){return{args:e}},template:`<DescriptionList v-bind="args">
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
  </DescriptionList>`}),vL={Template:us},xL="wrapper";function uu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(xL,w(y(y({},vL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Lists and tables  / Description List",component:jn,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Description List"),t("p",null,`Description lists are a way to organize and explain related information.
They're particularly useful when you need to list and define terms such as in a glossary.`),t("font",{color:"#FF7900"},t("strong",null,"Warning:"))," Use component name as case-sensitive (",t("code",null,"<Dt>")," & ",t("code",null,"<Dd>"),") to prevent conflict with ",t("code",null,"<dt>")," ",t("code",null,"<dd>")," HTML element.",t(R,{mdxType:"Canvas"},t(H,{name:"Description List",height:"60px",parameters:{docs:{source:{code:k`
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
          `}}},mdxType:"Story"},us.bind({}))),t(oe,{story:"Description List",mdxType:"ArgsTable"}))}uu.isMDXComponent=!0;const nl=us.bind({});nl.storyName="Description List";nl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
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
          `}}};const mo={title:"Components / Lists and tables  / Description List",component:jn,argTypes:{default:{table:{disable:!0}}},includeStories:["descriptionList"]},TL={"Description List":"descriptionList"};mo.parameters=mo.parameters||{};mo.parameters.docs=w(y({},mo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:TL,mdxComponentAnnotations:mo},t(uu,null))});var SL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:us,descriptionList:nl,default:mo});const ds=e=>({components:{DisplayText:wa},setup(){return{args:e}},template:'<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>'}),CL={Template:ds},AL="wrapper";function du(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(AL,w(y(y({},CL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Titles and text  / Display text",component:wa,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},mdxType:"Meta"}),t("h1",null,"Display Text"),t("p",null,`Display styles make a bold visual statement.
Use them to create impact when the main goal is visual storytelling.
For example, use display text to convince or reassure merchants such as in marketing content or to capture attention during onboarding.`),t(R,{mdxType:"Canvas"},t(H,{name:"Display text",height:"60px",args:{element:"p"},parameters:{docs:{source:{code:k`<DisplayText>Good evening, Dominic.</DisplayText>`}}},mdxType:"Story"},ds.bind({}))),t(oe,{story:"Display text",mdxType:"ArgsTable"}))}du.isMDXComponent=!0;const ps=ds.bind({});ps.storyName="Display text";ps.args={element:"p"};ps.parameters={storySource:{source:`args => ({
  components: {
    DisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>\`
})`},docs:{source:{code:k`<DisplayText>Good evening, Dominic.</DisplayText>`}}};const yo={title:"Components / Titles and text  / Display text",component:wa,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},includeStories:["displayText"]},LL={"Display text":"displayText"};yo.parameters=yo.parameters||{};yo.parameters.docs=w(y({},yo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:LL,mdxComponentAnnotations:yo},t(du,null))});var _L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ds,displayText:ps,default:yo}),rr=Object.freeze,kL=Object.defineProperty,pu=(e,o)=>rr(kL(e,"raw",{value:rr(o||e.slice())})),cr,ur;const ms=e=>({components:{NoteMinor:Ml,ExceptionList:mc,ExceptionListItem:zn},setup(){return{args:e,NoteMinor:Ml,DiscountsMajor:Gd}},template:`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>`}),wL={Template:ms},ML="wrapper";function mu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(ML,w(y(y({},wL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Lists and tables / Exception List",component:zn,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Exception List"),t("p",null,"Use exception lists to help merchants notice important, standout information that adds extra context to a task. Exception lists often consist of a title and description. Each item in the list either has a bullet or icon at the front."),t(R,{mdxType:"Canvas"},t(H,{name:"Exception List",height:"120px",parameters:{docs:{source:{code:k(cr||(cr=pu([`
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
          `])))}}},mdxType:"Story"},ms.bind({}))),t(oe,{story:"Exception List",mdxType:"ArgsTable"}))}mu.isMDXComponent=!0;const sl=ms.bind({});sl.storyName="Exception List";sl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k(ur||(ur=pu([`
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
          `])))}}};const ho={title:"Components / Lists and tables / Exception List",component:zn,argTypes:{default:{table:{disable:!0}}},includeStories:["exceptionList"]},IL={"Exception List":"exceptionList"};ho.parameters=ho.parameters||{};ho.parameters.docs=w(y({},ho.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:IL,mdxComponentAnnotations:ho},t(mu,null))});var BL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ms,exceptionList:sl,default:ho});const ys=(e,{argTypes:o})=>({props:Object.keys(o),components:{FooterHelp:Wn},template:`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>`}),PL={Template:ys},NL="wrapper";function yu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(NL,w(y(y({},PL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Navigation / Footer help",component:Wn,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Footer help"),t("p",null,"Footer help is used to refer merchants to more information related to the product or feature they're using."),t(R,{mdxType:"Canvas"},t(H,{name:"Footer help",parameters:{docs:{source:{code:k`
            <FooterHelp>Footer help content</FooterHelp>
          `}}},mdxType:"Story"},ys.bind({}))),t(oe,{story:"Footer help",mdxType:"ArgsTable"}))}yu.isMDXComponent=!0;const il=ys.bind({});il.storyName="Footer help";il.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <FooterHelp>Footer help content</FooterHelp>
          `}}};const go={title:"Components / Navigation / Footer help",component:Wn,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},includeStories:["footerHelp"]},DL={"Footer help":"footerHelp"};go.parameters=go.parameters||{};go.parameters.docs=w(y({},go.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:DL,mdxComponentAnnotations:go},t(yu,null))});var $L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ys,footerHelp:il,default:go}),dr=Object.freeze,FL=Object.defineProperty,hu=(e,o)=>dr(FL(e,"raw",{value:dr(o||e.slice())})),pr,mr;const hs=e=>({components:{Frame:gt,TopBar:Fa,TopBarUserMenu:Ki,TopBarMenu:Jn,Icon:ae,TopBarSearchField:Gi,VisuallyHidden:Ue,ActionList:Ye,NavigationSection:Xi,Navigation:Na,Loading:Pa,ContextualSaveBar:ka,Button:he,Toast:Da},data(){return{isUserMenuOpen:!1,isSecondaryMenuOpen:!1,isSearchActive:!1,searchValue:"",isCollapsed:!1,isLoading:!1,isDirty:!1,toastActive:!1,userMenuAction:[{items:[{content:"Back to Shopify",icon:kn}]},{items:[{content:"Community forums"}]}],userMenuMessage:{title:"Another Message",description:"This is a description of message",action:{onClick:this.clickHandle,content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}},navItems2:[{label:"Dashboard",icon:Il(Yd),onClick:this.toggleIsLoading},{label:"Qikify Orders",icon:Il(Kd),onClick:this.toggleIsLoading}]}},methods:{handleSearchChange(o){this.isSearchActive=o.length>0},handleSearchResultsDismiss(){this.searchValue="",this.isSearchActive=!1},toggleUserMenu(){this.isUserMenuOpen=!this.isUserMenuOpen},toggleIsSecondaryMenuOpen(){this.isSecondaryMenuOpen=!this.isSecondaryMenuOpen},clickHandle(){alert("clicked")},toggleCollapsed(){this.isCollapsed=!this.isCollapsed},toggleToastActive(){this.toastActive=!this.toastActive},toggleIsLoading(){this.isLoading=!this.isLoading},toggleIsDirty(){this.isDirty=!this.isDirty}},setup(){return{logo:{width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},navItems:[{label:"Back to Shopify",icon:kn}],QuestionMarkMajor:Vr,CirclePlusOutlineMinor:Ur}},template:`
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
  `}),EL={Template:hs},OL="wrapper";function gu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(OL,w(y(y({},EL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Structure / Frame",component:gt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Frame"),t("p",null,"The frame component, while not visible in the user interface itself, provides the structure for an application. It wraps the main elements and houses the primary ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-navigation--navigation"},"navigation"),", ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-top-bar--top-bar"},"top bar"),", ",t("a",{parentName:"p",href:"?path=/docs/components-feedback-indicators-toast--toast"},"toast"),", and ",t("a",{parentName:"p",href:"?path=/docs/components-forms-contextual-save-bar--contextual-save-bar"},"contextual save bar")," components."),t(R,{mdxType:"Canvas"},t(H,{name:"Frame",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:k(pr||(pr=hu([`
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
          `])))}}},mdxType:"Story"},hs.bind({}))),t(oe,{story:"Frame",mdxType:"ArgsTable"}))}gu.isMDXComponent=!0;const ll=hs.bind({});ll.storyName="Frame";ll.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:k(mr||(mr=hu([`
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
          `])))}}};const fo={title:"Components / Structure / Frame",component:gt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["frame"]},qL={Frame:"frame"};fo.parameters=fo.parameters||{};fo.parameters.docs=w(y({},fo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:qL,mdxComponentAnnotations:fo},t(gu,null))});var RL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:hs,frame:ll,default:fo});const gs=e=>({components:{Heading:Jo},setup(){return{args:e}},template:`
    <Heading v-bind="args">
      Online store dashboard
    </Heading>
  `}),HL={Template:gs},VL="wrapper";function fu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(VL,w(y(y({},HL),o),{components:e,mdxType:"MDXLayout"}),t("h1",null,"Heading"),t("p",null,`Headings are used as the titles of each major section of a page in the interface.
For example, card components generally use headings as their title.`),t(Q,{title:"Components / Titles and text / Heading",component:Jo,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t(R,{mdxType:"Canvas"},t(H,{story:gs,name:"Heading",height:"50px",mdxType:"Story"})),t(oe,{story:"Heading",mdxType:"ArgsTable"}))}fu.isMDXComponent=!0;const bu=gs;bu.storyName="Heading";const bo={title:"Components / Titles and text / Heading",component:Jo,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},UL={Heading:"_Template_"};bo.parameters=bo.parameters||{};bo.parameters.docs=w(y({},bo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:UL,mdxComponentAnnotations:bo},t(fu,null))});var jL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:gs,_Template_:bu,default:bo}),yr=Object.freeze,zL=Object.defineProperty,vu=(e,o)=>yr(zL(e,"raw",{value:yr(o||e.slice())})),hr,gr;const fs=e=>({components:{Icon:ae},setup(){if(e.source==="CirclePlusMinor")return{args:e,source:jr};if(e.source==="BehaviorMajor")return{args:e,source:Qd};if(e.source==="placeholder")return{args:e,source:"placeholder"}},template:'<Icon :source="source" :color="args.color" :backdrop="args.backdrop" :accessibility-label="args.accessibilityLabel" />'}),WL={Template:fs},XL="wrapper";function xu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(XL,w(y(y({},WL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Images and icons / Icon",component:ae,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Icon"),t("p",null,`Icons are used to visually communicate core parts of the product and available actions.
They can act as wayfinding tools to help merchants more easily understand where they are in the product,
and common interaction patterns that are available.`),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Usage:")),t("p",null,"To use icons, you need to import svg icon as Vue component by using Vite plugin ",t("inlineCode",{parentName:"p"},"vite-svg-loader"),". Follow ",t("a",{parentName:"p",href:"?path=/docs/polaris-icons--page"},"this instruction"),".",t("br",null)),t("p",null,"You can find icon list from ",t("strong",{parentName:"p"},"Shopify Icon Library"),": ",t("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"here"),"."),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Example:")),t("p",null,"With Composition API:"),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`<template>
  <Icon :source="CirclePlusMinor" />
</template>

<script setup>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
<\/script>
`)),t("p",null,"With Options API:"),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`<script>
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
`)),t("h3",null,t("strong",{parentName:"h3"},"Demo & Properties")),t(R,{mdxType:"Canvas"},t(H,{name:"Icon",height:"30px",args:{source:"CirclePlusMinor"},parameters:{docs:{source:{code:k(hr||(hr=vu([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}},mdxType:"Story"},fs.bind({}))),t(oe,{story:"Icon",mdxType:"ArgsTable"}))}xu.isMDXComponent=!0;const bs=fs.bind({});bs.storyName="Icon";bs.args={source:"CirclePlusMinor"};bs.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k(gr||(gr=vu([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}};const vo={title:"Components / Images and icons / Icon",component:ae,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["icon"]},GL={Icon:"icon"};vo.parameters=vo.parameters||{};vo.parameters.docs=w(y({},vo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:GL,mdxComponentAnnotations:vo},t(xu,null))});var KL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:fs,icon:bs,default:vo});const vs=e=>({components:{InlineError:jt},setup(){return{args:e}},template:'<InlineError v-bind="args"/>'}),YL={Template:vs},QL="wrapper";function Tu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(QL,w(y(y({},YL),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / InlineError",component:jt,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Inline error"),t("p",null,`Inline errors are brief, in-context messages that tell merchants something went wrong with a single or group of inputs in a form
Use inline errors to help merchants understand why a form input may not be valid and how to fix it.`),t(R,{mdxType:"Canvas"},t(H,{name:"InlineError",args:{message:"Store name is required",fieldID:"myFieldID"},parameters:{docs:{source:{code:k`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}},mdxType:"Story"},vs.bind({}))),t(oe,{story:"InlineError",mdxType:"ArgsTable"}))}Tu.isMDXComponent=!0;const xs=vs.bind({});xs.storyName="InlineError";xs.args={message:"Store name is required",fieldID:"myFieldID"};xs.parameters={storySource:{source:`args => ({
  components: {
    InlineError
  },

  setup() {
    return {
      args
    };
  },

  template: \`<InlineError v-bind="args"/>\`
})`},docs:{source:{code:k`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}};const xo={title:"Components / Forms / InlineError",component:jt,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},includeStories:["inlineError"]},JL={InlineError:"inlineError"};xo.parameters=xo.parameters||{};xo.parameters.docs=w(y({},xo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:JL,mdxComponentAnnotations:xo},t(Tu,null))});var ZL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:vs,inlineError:xs,default:xo});const Ts=e=>({components:{KeyboardKey:Gn},setup(){return{args:e}},template:"<KeyboardKey>{{ args.default }}</KeyboardKey>"}),e_={Template:Ts},t_="wrapper";function Su(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(t_,w(y(y({},e_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Images and icons / Keyboard Key",component:Gn,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Keyboard Key"),t("p",null,"Keyboard key is used to educate merchants about keyboard shortcuts."),t(R,{mdxType:"Canvas"},t(H,{name:"Keyboard Key",height:"50px",args:{default:"Ctrl"},parameters:{docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}},mdxType:"Story"},Ts.bind({}))),t(oe,{story:"Keyboard Key",mdxType:"ArgsTable"}))}Su.isMDXComponent=!0;const Ss=Ts.bind({});Ss.storyName="Keyboard Key";Ss.args={default:"Ctrl"};Ss.parameters={storySource:{source:`args => ({
  components: {
    KeyboardKey
  },

  setup() {
    return {
      args
    };
  },

  template: '<KeyboardKey>{{ args.default }}</KeyboardKey>'
})`},docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}};const To={title:"Components / Images and icons / Keyboard Key",component:Gn,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},includeStories:["keyboardKey"]},o_={"Keyboard Key":"keyboardKey"};To.parameters=To.parameters||{};To.parameters.docs=w(y({},To.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:o_,mdxComponentAnnotations:To},t(Su,null))});var a_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ts,keyboardKey:Ss,default:To});const Cs=e=>({components:{Layout:lt,LayoutSection:ft,AnnotatedSection:It,TextField:Ae},template:`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),As=e=>({components:{Layout:lt,LayoutSection:ft,AnnotatedSection:It,TextField:Ae},template:`
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
  </Layout>`}),Ls=e=>({components:{Layout:lt,LayoutSection:ft,AnnotatedSection:It,TextField:Ae},template:`
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
  </Layout>`}),_s=e=>({components:{Layout:lt,LayoutSection:ft,AnnotatedSection:It,TextField:Ae},template:`
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
  </Layout>`}),Ga=e=>({components:{Layout:lt,LayoutSection:ft,AnnotatedSection:It,TextField:Ae,FormLayout:Xn},template:`
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
  </Layout>`});Ga.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const Ka=e=>({components:{Layout:lt,LayoutSection:ft,AnnotatedSection:It,TextField:Ae,FormLayout:Xn},template:`
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
  </Layout>`});Ka.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const ks=e=>({components:{Layout:lt,LayoutSection:ft,AnnotatedSection:It,TextField:Ae},setup(){return{args:e}},template:`
  <Layout v-bind="args">
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),n_={OneColLayout:Cs,TwoColLayoutDW:As,TwoColLayoutSW:Ls,ThreeColLayoutSW:_s,AnnotatedLayout:Ga,AnnotatedBannerLayout:Ka,Example:ks},s_="wrapper";function Cu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(s_,w(y(y({},n_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Structure / Layout",component:lt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},mdxType:"Meta"}),t("h1",null,"Layout"),t("p",null,`The layout component is used to create the main layout on a page.
Layouts sections come in three main configurations: one-column, two-column, and annotated.
One and two column layouts can be combined in the same page.
Annotated layouts should be used on their own and only on settings pages.`),t("br",null),t("br",null),t("h3",null,"One-column layout"),t("p",null,`Use to have a single section on its own in a full-width container.
Use for simple pages and as a container for banners and other full-width content.`),t(R,{mdxType:"Canvas"},t(H,{name:"One column layout",parameters:{docs:{source:{state:"close",code:k`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},Cs.bind({}))),t("h3",null,"Two columns with primary and secondary widths"),t("p",null,`Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual product or order pages).
Can also be used on any page that needs to structure a lot of content. This layout stacks the columns on small screens.`),t(R,{mdxType:"Canvas"},t(H,{name:"Two columns (different width)",parameters:{docs:{source:{state:"close",code:k`
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
          `}}},mdxType:"Story"},As.bind({}))),t("h3",null,"Two columns with equal width"),t("p",null,`Use to create a \xBD + \xBD layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(R,{mdxType:"Canvas"},t(H,{name:"Two columns (same width)",parameters:{docs:{source:{state:"close",code:k`
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
          `}}},mdxType:"Story"},Ls.bind({}))),t("h3",null,"Three columns with equal width"),t("p",null,`Use to create a \u2153 + \u2153 + \u2153 layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(R,{mdxType:"Canvas"},t(H,{name:"Three columns (same width)",parameters:{docs:{source:{state:"close",code:k`
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
          `}}},mdxType:"Story"},_s.bind({}))),t("h3",null,"Annotated layout"),t("p",null,`Use for settings pages. When settings are grouped thematically in annotated sections,
the title and description on each section helps merchants quickly find the setting they're looking for.`),t(R,{mdxType:"Canvas"},t(H,{story:Ga,name:"Annotated layout",mdxType:"Story"})),t("h3",null,"Annotated layout with Banner at the top"),t("p",null,"Use for settings pages that need a banner or other content at the top."),t(R,{mdxType:"Canvas"},t(H,{story:Ka,name:"Annotated layout (with Banner)",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{name:"Example",height:"100px",parameters:{docs:{source:{code:k`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},ks.bind({}))),t(oe,{story:"Example",mdxType:"ArgsTable"}))}Cu.isMDXComponent=!0;const rl=Cs.bind({});rl.storyName="One column layout";rl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:k`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const cl=As.bind({});cl.storyName="Two columns (different width)";cl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:k`
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
          `}}};const ul=Ls.bind({});ul.storyName="Two columns (same width)";ul.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:k`
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
          `}}};const dl=_s.bind({});dl.storyName="Three columns (same width)";dl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:k`
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
          `}}};const Au=Ga;Au.storyName="Annotated layout";const Lu=Ka;Lu.storyName="Annotated layout (with Banner)";const pl=ks.bind({});pl.storyName="Example";pl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const So={title:"Components / Structure / Layout",component:lt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},includeStories:["oneColumnLayout","twoColumnsDifferentWidth","twoColumnsSameWidth","threeColumnsSameWidth","_AnnotatedLayout_","_AnnotatedBannerLayout_","example"]},i_={"One column layout":"oneColumnLayout","Two columns (different width)":"twoColumnsDifferentWidth","Two columns (same width)":"twoColumnsSameWidth","Three columns (same width)":"threeColumnsSameWidth","Annotated layout":"_AnnotatedLayout_","Annotated layout (with Banner)":"_AnnotatedBannerLayout_",Example:"example"};So.parameters=So.parameters||{};So.parameters.docs=w(y({},So.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:i_,mdxComponentAnnotations:So},t(Cu,null))});var l_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",OneColLayout:Cs,TwoColLayoutDW:As,TwoColLayoutSW:Ls,ThreeColLayoutSW:_s,AnnotatedLayout:Ga,AnnotatedBannerLayout:Ka,Example:ks,oneColumnLayout:rl,twoColumnsDifferentWidth:cl,twoColumnsSameWidth:ul,threeColumnsSameWidth:dl,_AnnotatedLayout_:Au,_AnnotatedBannerLayout_:Lu,example:pl,default:So});const ws=e=>({components:{Link:Ma},setup(){return{args:e}},template:'<Link v-bind="args">Fulfilling orders</Link>'}),r_={Template:ws},c_="wrapper";function _u(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(c_,w(y(y({},r_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Navigation / Link",component:Ma,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Link"),t("p",null,"Links take users to another place, and usually appear within or directly following a sentence."),t("p",null,"For actions that aren't related to navigation, use the ",t("a",{parentName:"p",href:"/docs/components-actions-button--button"},"button component.")),t(R,{mdxType:"Canvas"},t(H,{name:"Link",parameters:{docs:{source:{code:k`
            <Link>Fulfilling orders</Link>
          `}}},mdxType:"Story"},ws.bind({}))),t(oe,{story:"Link",mdxType:"ArgsTable"}))}_u.isMDXComponent=!0;const ml=ws.bind({});ml.storyName="Link";ml.parameters={storySource:{source:`args => ({
  components: {
    Link
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Link v-bind="args">Fulfilling orders</Link>\`
})`},docs:{source:{code:k`
            <Link>Fulfilling orders</Link>
          `}}};const Co={title:"Components / Navigation / Link",component:Ma,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},includeStories:["link"]},u_={Link:"link"};Co.parameters=Co.parameters||{};Co.parameters.docs=w(y({},Co.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:u_,mdxComponentAnnotations:Co},t(_u,null))});var d_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ws,link:ml,default:Co});const Ms=e=>({components:{List:Ia,ListItem:Wi},setup(){return{args:e}},template:`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>`}),p_={Template:Ms},m_="wrapper";function ku(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(m_,w(y(y({},p_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Lists and tables / List",component:Ia,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"List"),t("p",null,"Lists display a set of related text-only content. Each list item begins with a bullet or a number."),t(R,{mdxType:"Canvas"},t(H,{name:"List",height:"80px",parameters:{docs:{source:{code:k`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}},mdxType:"Story"},Ms.bind({}))),t(oe,{story:"List",mdxType:"ArgsTable"}))}ku.isMDXComponent=!0;const yl=Ms.bind({});yl.storyName="List";yl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}};const Ao={title:"Components / Lists and tables / List",component:Ia,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},includeStories:["list"]},y_={List:"list"};Ao.parameters=Ao.parameters||{};Ao.parameters.docs=w(y({},Ao.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:y_,mdxComponentAnnotations:Ao},t(ku,null))});var h_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ms,list:yl,default:Ao});const Ya=e=>({components:{Listbox:Qe,ListboxOption:ot},template:`
  <Listbox accessibilityLabel="Basic Listbox example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});Ya.parameters={docs:{source:{state:"close",code:k`
      <Listbox accessibilityLabel="Basic Listbox example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const Qa=e=>({components:{Listbox:Qe,ListboxOption:ot,ListboxLoading:Ba},template:`
  <Listbox accessibilityLabel="Listbox with loading example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});Qa.parameters={docs:{source:{state:"close",code:k`
      <Listbox accessibilityLabel="Listbox with loading example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const Ja=e=>({components:{Listbox:Qe,ListboxOption:ot,ListboxAction:Kn},template:`
  <Listbox accessibilityLabel="Listbox with Action example">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});Ja.parameters={docs:{source:{state:"close",code:k`
      <Listbox accessibilityLabel="Listbox with Action example">
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const Za=e=>({components:{Listbox:Qe,ListboxOption:ot,ListboxLoading:Ba,ListboxAction:Kn},template:`
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
  </Listbox>`});Za.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const en=e=>({components:{Listbox:Qe,ListboxOption:ot,ListboxLoading:Ba,ListboxAction:Kn},setup(){return{args:e}},template:`
  <Listbox v-bind="args">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});en.parameters={docs:{source:{code:k`
      <Listbox>
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const g_={BasicListbox:Ya,LoadingListbox:Qa,ActionListbox:Ja,CustomListbox:Za,ExampleListbox:en},f_="wrapper";function wu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(f_,w(y(y({},g_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Lists and tables / Listbox",component:Qe,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},mdxType:"Meta"}),t("h1",null,"Listbox"),t("p",null,"The Listbox component is a list component that implements part of ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"},"the Aria 1.2 Listbox specs."),`
It presents a list of options and allows users to select one or more of them.
If you need more structure than the standard component offers, use composition to customize the presentation of these lists by using headers or custom elements.`),t("br",null),t("br",null),t("h3",null,"Basic Listbox"),t("p",null,"Basic implementation of a control element used to let merchants select options"),t(R,{mdxType:"Canvas"},t(H,{story:Ya,name:"Basic Listbox",mdxType:"Story"})),t("h3",null,"Listbox with Loading"),t("p",null,"Implementation of a control element showing a loading indicator to let merchants know more options are being loaded"),t(R,{mdxType:"Canvas"},t(H,{story:Qa,name:"Listbox with Loading",mdxType:"Story"})),t("h3",null,"Listbox with Action"),t("p",null,"Implementation of a control element used to let merchants take an action"),t(R,{mdxType:"Canvas"},t(H,{story:Ja,name:"Listbox with Action",mdxType:"Story"})),t("h3",null,"Listbox with custom element"),t("p",null,"Implementation of a control with custom rendering of options"),t(R,{mdxType:"Canvas"},t(H,{story:Za,name:"Listbox with custom element",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{story:en,name:"Example",height:"180px",mdxType:"Story"})),t(oe,{story:"Example",mdxType:"ArgsTable"}))}wu.isMDXComponent=!0;const Mu=Ya;Mu.storyName="Basic Listbox";const Iu=Qa;Iu.storyName="Listbox with Loading";const Bu=Ja;Bu.storyName="Listbox with Action";const Pu=Za;Pu.storyName="Listbox with custom element";const Nu=en;Nu.storyName="Example";const Lo={title:"Components / Lists and tables / Listbox",component:Qe,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},includeStories:["_BasicListbox_","_LoadingListbox_","_ActionListbox_","_CustomListbox_","_ExampleListbox_"]},b_={"Basic Listbox":"_BasicListbox_","Listbox with Loading":"_LoadingListbox_","Listbox with Action":"_ActionListbox_","Listbox with custom element":"_CustomListbox_",Example:"_ExampleListbox_"};Lo.parameters=Lo.parameters||{};Lo.parameters.docs=w(y({},Lo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:b_,mdxComponentAnnotations:Lo},t(wu,null))});var v_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicListbox:Ya,LoadingListbox:Qa,ActionListbox:Ja,CustomListbox:Za,ExampleListbox:en,_BasicListbox_:Mu,_LoadingListbox_:Iu,_ActionListbox_:Bu,_CustomListbox_:Pu,_ExampleListbox_:Nu,default:Lo});const Is=e=>({components:{Loading:Pa,Frame:gt,Button:he},data(){return{isActive:!1}},setup(){return{args:e}},template:`<Frame>
    <Loading v-if="isActive" />
    <br/>
    <Button @click="isActive = !isActive">Toggle loading</Button>
  </Frame>`}),x_={Template:Is},T_="wrapper";function Du(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(T_,w(y(y({},x_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Feedback indicators / Loading",component:Pa,argTypes:{disabled:{table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Loading"),t("p",null,"The loading component is used to indicate to merchants that a page is loading or an upload is processing."),t(R,{mdxType:"Canvas"},t(H,{name:"Loading",inline:!1,height:"100px",parameters:{docs:{source:{code:k`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}},mdxType:"Story"},Is.bind({}))),t(oe,{story:"Loading",mdxType:"ArgsTable"}))}Du.isMDXComponent=!0;const hl=Is.bind({});hl.storyName="Loading";hl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}};const _o={title:"Components / Feedback indicators / Loading",component:Pa,argTypes:{disabled:{table:{type:{summary:null}}}},includeStories:["loading"]},S_={Loading:"loading"};_o.parameters=_o.parameters||{};_o.parameters.docs=w(y({},_o.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:S_,mdxComponentAnnotations:_o},t(Du,null))});var C_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Is,loading:hl,default:_o}),fr=Object.freeze,A_=Object.defineProperty,Bs=(e,o)=>fr(A_(e,"raw",{value:fr(o||e.slice())})),br,vr,xr,Tr;const Ps=(e,{argTypes:o})=>({components:{ModalSection:Wo,TextContainer:it,Button:he,Modal:Wt},data(){return{active:!0}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Modal>`}),ra=e=>({components:{Modal:Wt,Button:he,ModalSection:Wo,TextContainer:it},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleScrolledToBottom(){alert("Scrolled to bottom")}},template:`
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
  `});ra.storyName="With scroll listener";ra.parameters={docs:{source:{code:k(br||(br=Bs([`
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
        `])))}}};const ca=e=>({components:{Modal:Wt,Button:he,Stack:at,StackItem:wt,TextField:Ae,TextContainer:it,ModalSection:Wo},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleClick(){alert("Copy to clipboard successful")}},template:`
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
    </Modal>`});ca.storyName="With primary action";ca.parameters={docs:{source:{code:k(vr||(vr=Bs([`
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
      `])))}}};const L_={Template:Ps,scrollExample:ra,primaryActionExample:ca},__="wrapper";function $u(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(__,w(y(y({},L_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Overlays / Modal",component:Wt,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Modal"),t("p",null,"Modals are overlays that require merchants to take an action before they can continue interacting with the rest of Shopify. They can be disruptive and should be used thoughtfully and sparingly."),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With primary action"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ca,height:"500px",inline:!1,name:"_primaryActionExample_",mdxType:"Story"})),t("h3",null,"With scroll listener"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ra,height:"500px",inline:!1,name:"_scrollExample_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Modal",inline:!1,height:"500px",args:{colorScheme:"light"},parameters:{docs:{source:{code:k(xr||(xr=Bs([`
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
            `])))}}},mdxType:"Story"},Ps.bind({}))),t(oe,{story:"Modal",mdxType:"ArgsTable"}))}$u.isMDXComponent=!0;const k_=ca,w_=ra,Ns=Ps.bind({});Ns.storyName="Modal";Ns.args={colorScheme:"light"};Ns.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
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
})`},docs:{source:{code:k(Tr||(Tr=Bs([`
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
            `])))}}};const ko={title:"Components / Overlays / Modal",component:Wt,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_primaryActionExample_","_scrollExample_","modal"]},M_={_primaryActionExample_:"_primaryActionExample_",_scrollExample_:"_scrollExample_",Modal:"modal"};ko.parameters=ko.parameters||{};ko.parameters.docs=w(y({},ko.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:M_,mdxComponentAnnotations:ko},t($u,null))});var I_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ps,scrollExample:ra,primaryActionExample:ca,_primaryActionExample_:k_,_scrollExample_:w_,modal:Ns,default:ko});const Ds=e=>({components:{Frame:gt,Navigation:Na,NavigationSection:Xi},setup(){return{navItems:[{url:"#",label:"Home",icon:Jd},{url:"#",label:"Orders",icon:Zd},{url:"#",label:"Products",icon:ep,selected:!0,subNavigationItems:[{url:"#",new:!0,label:"New item"},{url:"#",label:"Active Item",selected:!0},{url:"#",disabled:!0,label:"New item"}]},{url:"#",label:"Marketing",icon:tp,badge:{content:"Warn",status:"warning"}}],navItems2:[{url:"#",label:"Online Store",icon:op},{url:"/path/to/place",label:"Secondary action",secondaryAction:{url:"#",accessibilityLabel:"View your online store",icon:ap}}],CirclePlusOutlineMinor:Ur}},template:`
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
  `}),B_={Template:Ds},P_="wrapper";function Fu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(P_,w(y(y({},B_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Navigation / Navigation",component:Na,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Navigation"),t("p",null,"The navigation component is used to display the primary navigation in the sidebar of the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-frame--frame"},"frame")," of an application. Navigation includes a list of links that merchants use to move between sections of the application."),t(R,{mdxType:"Canvas"},t(H,{name:"Navigation",inline:!1,height:"500px",parameters:{docs:{source:{code:k`
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
          `}}},mdxType:"Story"},Ds.bind({}))),t(oe,{story:"Navigation",mdxType:"ArgsTable"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation Section")),t("p",null,"A navigation section groups together related navigation items. Navigation sections can be clarified by a heading. Merchants can use a section to easily find navigation items within a specific category."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"items"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-item"},"Item[]")),t("td",{parentName:"tr",align:null},"A collection of navigation items to be rendered inside the section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing a title for the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"fill"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should take up all vertical space available")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"rollup"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-rollup"},"Rollup[]")),t("td",{parentName:"tr",align:null},"An object determining the collapsing behavior of the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-action"},"Action[]")),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"separator"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should have a visual separator")))),t("a",{name:"type-item"}),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Navigation section item")),t("p",null,"The content of the navigation component consists of navigation items. Each item is a link or action a merchant can take."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A location for the navigation item to navigate to when clicked")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matches"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to a closely matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"exactMatch"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to an exactly matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matchPaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing a collection of additional paths for the navigation item to respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"excludePaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing an explicit collection of paths the navigation item should not respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the navigation. Please prefer minor icons here. If a major icon has to be used, set the ",t("inlineCode",{parentName:"td"},"shouldResizeIcon")," prop to true")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"string ","|"," null"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed in a badge next to the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"label"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed as link text in the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"disabled"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is disabled")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"new"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Indicate whether the navigation item is new by adding an indicator dot to the parent and badge to the item (overwritten by the badge prop)")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of a navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"selected"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is the currently-selected item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"shouldResizeIcon"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Will allow for major icons to be displayed at the same size as minor icons")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"subNavigationItems"),t("td",{parentName:"tr",align:null},"SubNavigationItem[]"),t("td",{parentName:"tr",align:null},"A collection of navigation items rendered as nested secondary navigation items")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"secondaryAction"),t("td",{parentName:"tr",align:null},"SecondaryAction"),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to a navigation item")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@click"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on a navigation item")))),t("br",null),t("a",{name:"type-rollup"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section rollup")),t("p",null,"Rollup allows items in a navigation section to roll up and be revealed when they are of use to the merchant."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"after"),t("td",{parentName:"tr",align:null},"number"),t("td",{parentName:"tr",align:null},"A number of items after which the navigation section should be collapsed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"view"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section view action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hide"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section hide action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"activePath"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property representing the current URL of your application")))),t("br",null),t("a",{name:"type-action"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section action")),t("p",null,"Action allows a complementary icon-only action to render next to the section title."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed as the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onClick()"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on the action")))))}Fu.isMDXComponent=!0;const gl=Ds.bind({});gl.storyName="Navigation";gl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
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
          `}}};const wo={title:"Components / Navigation / Navigation",component:Na,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},includeStories:["navigation"]},N_={Navigation:"navigation"};wo.parameters=wo.parameters||{};wo.parameters.docs=w(y({},wo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:N_,mdxComponentAnnotations:wo},t(Fu,null))});var D_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ds,navigation:gl,default:wo}),Sr=Object.freeze,$_=Object.defineProperty,$s=(e,o)=>Sr($_(e,"raw",{value:Sr(o||e.slice())})),Cr,Ar,Lr,_r;const Fs=(e,{argTypes:o})=>({components:{ActionList:Ye,Button:he,Popover:tt},data(){return{active:!0,items:[{content:"Import file"},{content:"Export file"}]}},methods:{toggleActive(){this.active=!this.active}},template:`
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @close="toggleActive"
      :colorScheme="'${e.colorScheme}'"
    >
      <template #activator>
        <Button disclosure @click="toggleActive"> More actions </Button>
      </template>
      <template #content> <ActionList :items="items"/> </template>
    </Popover>`}),ua=(e,{argTypes:o})=>({components:{ActionList:Ye,Button:he,Popover:tt,Pane:On,PopoverSection:Ta},data(){return{active:!0,items:[{content:"Online store"},{content:"Facebook"},{content:"Shopify POS"}]}},methods:{toggleActive(){this.active=!this.active}},template:` <div>
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @close="toggleActive"
    >
      <template #activator>
        <Button disclosure @click="toggleActive"> Sales channels </Button>
      </template>
      <template #extra-content>
        <Pane fixed> <PopoverSection> <p>Available sales channels</p> </PopoverSection> </Pane>
      </template>
      <template #content>
        <ActionList actionRole="menuitem" :items="items" />
      </template>
    </Popover>
  </div>`});ua.storyName="With content and actions";ua.parameters={docs:{source:{code:k(Cr||(Cr=$s([`
        <template>
          <Popover
            :active="active"
            autofocusTarget="first-node"
            @close="toggleActive"
          >
            <template #activator>
              <Button disclosure @click="toggleActive"> Sales channels </Button>
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
        `])))}}};const da=(e,{argTypes:o})=>({components:{Button:he,Popover:tt,FormLayout:Xn,TextField:Ae,Select:Zo},data(){return{active:!0,options:[{label:"Tagged with",value:"Tagged with"}],selectedValue:"Tagged with",tagValue:""}},methods:{toggleActive(){this.active=!this.active},handleTagValueChange(a){this.tagValue=a}},template:` <div>
    <Popover
      :active="active"
      aria-haspopup="false"
      sectioned
      @close="toggleActive"
    >
      <template #activator>
        <Button disclosure @click="toggleActive"> Filter </Button>
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
  </div>`});da.storyName="With form components";da.parameters={docs:{source:{code:k(Ar||(Ar=$s([`
        <template>
          <Popover
            :active="active"
            aria-haspopup="false"
            sectioned
            @close="toggleActive"
          >
            <template #activator>
              <Button disclosure @click="toggleActive"> Filter </Button>
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
        `])))}}};const F_={Template:Fs,ContentAndActions:ua,FormComponents:da},E_="wrapper";function Eu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(E_,w(y(y({},F_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Overlays / Popover",component:tt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Popover"),t("p",null,"Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page."),t("p",null,"For ActionList usages, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--action-list"},"ActionList component.")),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With Content and Actions"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ua,height:"280px",inline:!1,name:"_ContentAndActions_",mdxType:"Story"})),t("h3",null,"With Form Components"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:da,height:"280px",inline:!1,name:"_FormComponents_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Popover",inline:!1,height:"300px",args:{colorScheme:"light"},parameters:{docs:{source:{code:k(Lr||(Lr=$s([`
            <template>
              <Popover
                :active="active"
                autofocusTarget="first-node"
                @close="toggleActive"
              >
                <template #activator>
                  <Button disclosure @click="toggleActive"> More actions </Button>
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
          `])))}}},mdxType:"Story"},Fs.bind({}))),t(oe,{story:"Popover",mdxType:"ArgsTable"}))}Eu.isMDXComponent=!0;const O_=ua,q_=da,Es=Fs.bind({});Es.storyName="Popover";Es.args={colorScheme:"light"};Es.parameters={storySource:{source:`(args, {
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
        <Button disclosure @click="toggleActive"> More actions </Button>
      </template>
      <template #content> <ActionList :items="items"/> </template>
    </Popover>\`
})`},docs:{source:{code:k(_r||(_r=$s([`
            <template>
              <Popover
                :active="active"
                autofocusTarget="first-node"
                @close="toggleActive"
              >
                <template #activator>
                  <Button disclosure @click="toggleActive"> More actions </Button>
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
          `])))}}};const Mo={title:"Components / Overlays / Popover",component:tt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_ContentAndActions_","_FormComponents_","popover"]},R_={_ContentAndActions_:"_ContentAndActions_",_FormComponents_:"_FormComponents_",Popover:"popover"};Mo.parameters=Mo.parameters||{};Mo.parameters.docs=w(y({},Mo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:R_,mdxComponentAnnotations:Mo},t(Eu,null))});var H_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Fs,ContentAndActions:ua,FormComponents:da,_ContentAndActions_:O_,_FormComponents_:q_,popover:Es,default:Mo});const tn=e=>({components:{RadioButton:La},setup(){return{args:e}},template:`
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
  </div>`,data(){return{demoValue:"disabled"}}});tn.parameters={docs:{source:{code:k`
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
      `}}};const V_={Template:tn},U_="wrapper";function Ou(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(U_,w(y(y({},V_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / RadioButton",component:La,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Radio button"),t("p",null,"Use radio buttons to present each item in a list of options where merchants must make a single selection."),t(R,{mdxType:"Canvas"},t(H,{story:tn,name:"RadioButton",mdxType:"Story"})),t(oe,{story:"RadioButton",mdxType:"ArgsTable"}))}Ou.isMDXComponent=!0;const qu=tn;qu.storyName="RadioButton";const Io={title:"Components / Forms / RadioButton",component:La,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_Template_"]},j_={RadioButton:"_Template_"};Io.parameters=Io.parameters||{};Io.parameters.docs=w(y({},Io.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:j_,mdxComponentAnnotations:Io},t(Ou,null))});var z_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:tn,_Template_:qu,default:Io});const Os=e=>({components:{Scrollable:ht},template:`
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
  </Scrollable>`}),on=e=>({components:{Scrollable:ht,ScrollTo:Bi},template:`
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
  </Scrollable>`});on.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const an=e=>({components:{Scrollable:ht},setup(){return{args:e}},template:`
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
  </Scrollable>`});an.parameters={docs:{source:{code:k`
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
      `}}};const W_={DefaultScrollable:Os,ScrollToExample:on,Example:an},X_="wrapper";function Ru(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(X_,w(y(y({},W_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Behavior / Scrollable",component:ht,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},mdxType:"Meta"}),t("h1",null,"Scrollable"),t("p",null,`The scrollable component is a container for long form content,
such as terms of service, that allows for scrolling so merchants can expose more text as they read.`),t("br",null),t("br",null),t("h3",null,"Default scrollable container"),t("p",null,`Use when you need to make a region within the page independently scrollable.
It's often used in modals and other panes where it's helpful to provide an extra visual cue that content exists below or above the fold.`),t(R,{mdxType:"Canvas"},t(H,{story:Os,name:"Default scrollable container",mdxType:"Story"})),t("h3",null,"Scroll to child component"),t("p",null,"Use when you need to programmatically scroll a child component into view in the scrollable container."),t(R,{mdxType:"Canvas"},t(H,{story:on,name:"Scroll to child component",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#fff"},mdxType:"Canvas"},t(H,{story:an,name:"Example",height:"150px",mdxType:"Story"})),t(oe,{story:"Example",mdxType:"ArgsTable"}))}Ru.isMDXComponent=!0;const Hu=Os;Hu.storyName="Default scrollable container";const Vu=on;Vu.storyName="Scroll to child component";const Uu=an;Uu.storyName="Example";const Bo={title:"Components / Behavior / Scrollable",component:ht,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},includeStories:["_DefaultScrollable_","_ScrollToExample_","_Example_"]},G_={"Default scrollable container":"_DefaultScrollable_","Scroll to child component":"_ScrollToExample_",Example:"_Example_"};Bo.parameters=Bo.parameters||{};Bo.parameters.docs=w(y({},Bo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:G_,mdxComponentAnnotations:Bo},t(Ru,null))});var K_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultScrollable:Os,ScrollToExample:on,Example:an,_DefaultScrollable_:Hu,_ScrollToExample_:Vu,_Example_:Uu,default:Bo});const qs=e=>({components:{Select:Zo,Icon:ae},setup(){const o=np,a=A("");return{args:e,selectValue:a,iconHintMajor:o}},template:`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}`}),Y_={Template:qs},Q_="wrapper";function ju(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(Q_,w(y(y({},Y_),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / Select",component:Zo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Select"),t("p",null,"Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface."),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"select")," element in html."),t(R,{mdxType:"Canvas"},t(H,{name:"Select",args:{placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"},parameters:{docs:{source:{code:k`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}},mdxType:"Story"},qs.bind({}))),t(oe,{story:"Select",mdxType:"ArgsTable"}))}ju.isMDXComponent=!0;const Rs=qs.bind({});Rs.storyName="Select";Rs.args={placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"};Rs.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}};const Po={title:"Components / Forms / Select",component:Zo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},includeStories:["select"]},J_={Select:"select"};Po.parameters=Po.parameters||{};Po.parameters.docs=w(y({},Po.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:J_,mdxComponentAnnotations:Po},t(ju,null))});var Z_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:qs,select:Rs,default:Po});const Hs=(e,{argTypes:o})=>({components:{Spinner:kt},setup(){return{args:e}},template:'<Spinner v-bind="args"/>'}),ek={Template:Hs},tk="wrapper";function zu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(tk,w(y(y({},ek),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Feedback indicators / Spinner",component:kt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Spinner"),t("p",null,"Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can\u2019t be represented with skeleton loading components, like for data charts."),t(R,{mdxType:"Canvas"},t(H,{name:"Spinner",height:"60px",args:{accessibilityLabel:"Spinner example",size:"large"},parameters:{docs:{source:{code:k`
            <Spinner v-bind="props"/>
          `}}},mdxType:"Story"},Hs.bind({}))),t(oe,{story:"Spinner",mdxType:"ArgsTable"}))}zu.isMDXComponent=!0;const Vs=Hs.bind({});Vs.storyName="Spinner";Vs.args={accessibilityLabel:"Spinner example",size:"large"};Vs.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <Spinner v-bind="props"/>
          `}}};const No={title:"Components / Feedback indicators / Spinner",component:kt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["spinner"]},ok={Spinner:"spinner"};No.parameters=No.parameters||{};No.parameters.docs=w(y({},No.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:ok,mdxComponentAnnotations:No},t(zu,null))});var ak=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Hs,spinner:Vs,default:No});const Us=(e,{argTypes:o})=>({components:{Stack:at,StackItem:wt,Badge:Re},setup(){return{args:e}},template:`<Stack v-bind="args">
    <Badge> Paid </Badge>
    <Badge> Processing </Badge>
    <Badge> Fulfilled </Badge>
    <Badge> Completed </Badge>
  </Stack>`}),pa=(e,{argTypes:o})=>({components:{Stack:at,StackItem:wt,Badge:Re},template:`<Stack noItemWrap>
    <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
    <StackItem> <Badge> Processing </Badge> </StackItem>
    <StackItem> <Badge> Completed </Badge> </StackItem>
  </Stack>`});pa.storyName="Fill the remaining space";pa.parameters={docs:{source:{code:k`
        <Stack noItemWrap>
          <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
          <StackItem> <Badge> Processing </Badge> </StackItem>
          <StackItem> <Badge> Completed </Badge> </StackItem>
        </Stack>
      `}}};const nk={Template:Us,SingleFillItem:pa},sk="wrapper";function Wu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(sk,w(y(y({},nk),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Structure / Stack",component:at,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Stack"),t("p",null,"Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack\u2019s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack."),t("br",null),t("br",null),t("h3",null,"A single item fills the remaining space"),t(R,{mdxType:"Canvas"},t(H,{story:pa,height:"65px",name:"_SingleFillItem_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{name:"Stack",height:"60px",parameters:{docs:{source:{code:k`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}},mdxType:"Story"},Us.bind({}))),t(oe,{story:"Stack",mdxType:"ArgsTable"}))}Wu.isMDXComponent=!0;const ik=pa,fl=Us.bind({});fl.storyName="Stack";fl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}};const Do={title:"Components / Structure / Stack",component:at,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SingleFillItem_","stack"]},lk={_SingleFillItem_:"_SingleFillItem_",Stack:"stack"};Do.parameters=Do.parameters||{};Do.parameters.docs=w(y({},Do.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:lk,mdxComponentAnnotations:Do},t(Wu,null))});var rk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Us,SingleFillItem:pa,_SingleFillItem_:ik,stack:fl,default:Do});const js=e=>({components:{Subheading:Yn},setup(){return{args:e}},template:'<Subheading v-bind="args">Accounts</Subheading>'}),ck={Template:js},uk="wrapper";function Xu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(uk,w(y(y({},ck),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Titles and text  / Subheading",component:Yn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Subheading"),t("p",null,"Subheadings are used for the title of any sub-sections in top-level page sections."),t(R,{mdxType:"Canvas"},t(H,{name:"Subheading",height:"30px",args:{element:"h3"},parameters:{docs:{source:{code:k`
            <Subheading>Accounts</Subheading>
          `}}},mdxType:"Story"},js.bind({}))),t(oe,{story:"Subheading",mdxType:"ArgsTable"}))}Xu.isMDXComponent=!0;const zs=js.bind({});zs.storyName="Subheading";zs.args={element:"h3"};zs.parameters={storySource:{source:`args => ({
  components: {
    Subheading
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Subheading v-bind="args">Accounts</Subheading>\`
})`},docs:{source:{code:k`
            <Subheading>Accounts</Subheading>
          `}}};const $o={title:"Components / Titles and text  / Subheading",component:Yn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},includeStories:["subheading"]},dk={Subheading:"subheading"};$o.parameters=$o.parameters||{};$o.parameters.docs=w(y({},$o.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:dk,mdxComponentAnnotations:$o},t(Xu,null))});var pk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:js,subheading:zs,default:$o}),kr=Object.freeze,mk=Object.defineProperty,Gu=(e,o)=>kr(mk(e,"raw",{value:kr(o||e.slice())})),wr,Mr;const Ws=e=>({components:{Tag:$a},setup(){return{args:e}},methods:{removeHandle(){alert("Removed")},clickHandle(){alert("Clicked")}},template:`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>`}),yk={Template:Ws},hk="wrapper";function Ku(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(hk,w(y(y({},yk),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / Tag",component:$a,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Tag"),t("p",null,"Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants."),t(R,{mdxType:"Canvas"},t(H,{name:"Tag",height:"30px",args:{disabled:!1},parameters:{docs:{source:{code:k(wr||(wr=Gu([`
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
          `])))}}},mdxType:"Story"},Ws.bind({}))),t(oe,{story:"Tag",mdxType:"ArgsTable"}))}Ku.isMDXComponent=!0;const Xs=Ws.bind({});Xs.storyName="Tag";Xs.args={disabled:!1};Xs.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k(Mr||(Mr=Gu([`
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
          `])))}}};const Fo={title:"Components / Forms / Tag",component:$a,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["tag"]},gk={Tag:"tag"};Fo.parameters=Fo.parameters||{};Fo.parameters.docs=w(y({},Fo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:gk,mdxComponentAnnotations:Fo},t(Ku,null))});var fk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ws,tag:Xs,default:Fo});const nn=e=>({components:{TextContainer:it},setup(){return{args:e}},template:`
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
  `});nn.parameters={docs:{source:{code:k`
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
      `}}};const bk={Template:nn},vk="wrapper";function Yu(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(vk,w(y(y({},bk),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Titles and text / Text container",component:it,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Text container"),t("p",null,"A text container is used to wrap text elements such as paragraphs, headings, and lists to give them vertical spacing."),t(R,{mdxType:"Canvas"},t(H,{story:nn,name:"Text container",height:"250px",mdxType:"Story"})),t(oe,{story:"Text container",mdxType:"ArgsTable"}))}Yu.isMDXComponent=!0;const Qu=nn;Qu.storyName="Text container";const Eo={title:"Components / Titles and text / Text container",component:it,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},xk={"Text container":"_Template_"};Eo.parameters=Eo.parameters||{};Eo.parameters.docs=w(y({},Eo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:xk,mdxComponentAnnotations:Eo},t(Yu,null))});var Tk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:nn,_Template_:Qu,default:Eo});const sn=e=>({components:{TextField:Ae},template:`
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
  `,data(){return{name:"Polaris"}}});sn.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const ln=(e,{argTypes:o})=>({components:{TextField:Ae},template:`
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
  </div>`,data(){return{numberData:"1"}}});ln.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const rn=(e,{argTypes:o})=>({components:{TextField:Ae},template:`
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
  </div>`,data(){return{address:"156 Xa Dan 2"}}});rn.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const cn=(e,{argTypes:o})=>({components:{TextField:Ae,ChoiceList:st},template:`
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
  </div>`,data(){return{months:"12",choices:[{label:"Gift cards never expire",value:"no"},{label:"Gift cards expire",value:"yes"}],selected:"yes"}}});cn.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const un=(e,{argTypes:o})=>({components:{TextField:Ae,Stack:at,StackItem:wt},template:`
  <Stack>
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
  </Stack>`,data(){return{price:"1"}}});un.parameters={docs:{source:{state:"close",code:k`
      <Stack>
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
      `}}};const dn=(e,{argTypes:o})=>({components:{TextField:Ae},template:`
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
  `});dn.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const pn=(e,{argTypes:o})=>({components:{TextField:Ae},template:`
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
  `,data(){return{price:"10"}}});pn.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const mn=(e,{argTypes:o})=>({components:{TextField:Ae,Select:Zo},template:`
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
  `,data(){return{weight:"10",unit:"kg"}}});mn.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const yn=(e,{argTypes:o})=>({components:{TextField:Ae},template:`
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
  `,data(){return{storeName:"Jaded Pixel"}}});yn.parameters={docs:{source:{state:"close",code:k`
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
      `}}};const Gs=e=>({components:{TextField:Ae},setup(){return{args:e}},template:`
    <TextField v-bind="args" autoComplete="off">
      <template #label>Example text field</template>
    </TextField>
  `}),Sk={DefaultTextField:sn,NumberField:ln,MultiLineField:rn,HiddenLabelField:cn,RightAlignedField:un,HelpTextField:dn,PrefixSuffixField:pn,ConnectedField:mn,ClearBtnField:yn,ExampleField:Gs},Ck="wrapper";function Ju(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(Ck,w(y(y({},Sk),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Forms / TextField",component:Ae,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Text field"),t("p",null,"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."),t("br",null),t("br",null),t("h3",null,"Default text field"),t("p",null,"Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options."),t(R,{mdxType:"Canvas"},t(H,{story:sn,name:"Default text field",mdxType:"Story"})),t("h3",null,"Number field"),t("p",null,"Use when input text should be a number."),t(R,{mdxType:"Canvas"},t(H,{story:ln,name:"Number field",mdxType:"Story"})),t("h3",null,"Multiline text field"),t("p",null,`Use when the expected input could be more than one line.
The field will automatically grow to accommodate additional text.`),t(R,{mdxType:"Canvas"},t(H,{story:rn,name:"Multiline text field",height:"150px",mdxType:"Story"})),t("h3",null,"Text field with hidden label"),t("p",null,`Use to visually hide the label when the text field's purpose is clear from context.
The label will remain available to screen readers. Use this option with care. In almost all cases, show the label.`),t(R,{mdxType:"Canvas"},t(H,{story:cn,name:"Text field with hidden label",mdxType:"Story"})),t("h3",null,"Text field with right aligned text"),t("p",null,"Use when input text should be aligned right."),t(R,{mdxType:"Canvas"},t(H,{story:un,name:"Text field with right aligned text",mdxType:"Story"})),t("h3",null,"Text field with help text"),t("p",null,`Use to show short instructional content below the text field.
Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements).
If more explanation is needed, link to the Shopify Help Center.`),t(R,{mdxType:"Canvas"},t(H,{story:dn,name:"Text field with help text",mdxType:"Story"})),t("h3",null,"Text field with prefix or suffix"),t("p",null,"Use as a special form of help text that works best inline."),t("ul",null,t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use a prefix for things like currency symbols (\u201C$\u201D, \u201C\xA5\u201D, \u201C\xA3\u201D).")),t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use suffix for things like units of measure (\u201Cin\u201D, \u201Ccm\u201D)."))),t(R,{mdxType:"Canvas"},t(H,{story:pn,name:"Text field with prefix or suffix",mdxType:"Story"})),t("h3",null,"Text field with connected fields"),t("p",null,"Use when a text field and several related fields make up a logical unit."),t("p",null,`If inputting weight as a number and a separate unit of measurement,
use a text field with a select dropdown menu (for example \u201Ckg\u201D, \u201Clb\u201D) as a connected field.`),t(R,{mdxType:"Canvas"},t(H,{story:mn,name:"Text field with connected fields",mdxType:"Story"})),t("h3",null,"Text field with clear button"),t("p",null,"Use to allow merchants to clear the content from a text field."),t(R,{mdxType:"Canvas"},t(H,{story:yn,name:"Text field with clear button",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{story:Gs,name:"Example",parameters:{docs:{source:{code:k`
          <TextField v-bind="args" autoComplete="off">
            <template #label>Example text field</template>
          </TextField>
          `}}},mdxType:"Story"})),t(oe,{story:"Example",mdxType:"ArgsTable"}))}Ju.isMDXComponent=!0;const Zu=sn;Zu.storyName="Default text field";const ed=ln;ed.storyName="Number field";const td=rn;td.storyName="Multiline text field";const od=cn;od.storyName="Text field with hidden label";const ad=un;ad.storyName="Text field with right aligned text";const nd=dn;nd.storyName="Text field with help text";const sd=pn;sd.storyName="Text field with prefix or suffix";const id=mn;id.storyName="Text field with connected fields";const ld=yn;ld.storyName="Text field with clear button";const rd=Gs;rd.storyName="Example";const Oo={title:"Components / Forms / TextField",component:Ae,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},includeStories:["_DefaultTextField_","_NumberField_","_MultiLineField_","_HiddenLabelField_","_RightAlignedField_","_HelpTextField_","_PrefixSuffixField_","_ConnectedField_","_ClearBtnField_","_ExampleField_"]},Ak={"Default text field":"_DefaultTextField_","Number field":"_NumberField_","Multiline text field":"_MultiLineField_","Text field with hidden label":"_HiddenLabelField_","Text field with right aligned text":"_RightAlignedField_","Text field with help text":"_HelpTextField_","Text field with prefix or suffix":"_PrefixSuffixField_","Text field with connected fields":"_ConnectedField_","Text field with clear button":"_ClearBtnField_",Example:"_ExampleField_"};Oo.parameters=Oo.parameters||{};Oo.parameters.docs=w(y({},Oo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:Ak,mdxComponentAnnotations:Oo},t(Ju,null))});var Lk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultTextField:sn,NumberField:ln,MultiLineField:rn,HiddenLabelField:cn,RightAlignedField:un,HelpTextField:dn,PrefixSuffixField:pn,ConnectedField:mn,ClearBtnField:yn,ExampleField:Gs,_DefaultTextField_:Zu,_NumberField_:ed,_MultiLineField_:td,_HiddenLabelField_:od,_RightAlignedField_:ad,_HelpTextField_:nd,_PrefixSuffixField_:sd,_ConnectedField_:id,_ClearBtnField_:ld,_ExampleField_:rd,default:Oo});const Ks=(e,{argTypes:o})=>({components:{TextStyle:Ca},setup(){return{args:e}},template:'<TextStyle v-bind="args"> Hello </TextStyle>'}),_k={Template:Ks},kk="wrapper";function cd(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(kk,w(y(y({},_k),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Titles and text / TextStyle",component:Ca,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"TextStyle"),t("p",null,"Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text."),t(R,{mdxType:"Canvas"},t(H,{name:"TextStyle",height:"60px",parameters:{docs:{source:{code:k`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}},mdxType:"Story"},Ks.bind({}))),t(oe,{story:"TextStyle",mdxType:"ArgsTable"}))}cd.isMDXComponent=!0;const bl=Ks.bind({});bl.storyName="TextStyle";bl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}};const qo={title:"Components / Titles and text / TextStyle",component:Ca,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["textStyle"]},wk={TextStyle:"textStyle"};qo.parameters=qo.parameters||{};qo.parameters.docs=w(y({},qo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:wk,mdxComponentAnnotations:qo},t(cd,null))});var Mk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ks,textStyle:bl,default:qo});const Ys=(e,{argTypes:o})=>({components:{Thumbnail:Qn},setup(){return{args:e}},computed:{thumbnailSource(){return e.source==="CirclePlusMinor"?jr:e.source},bindProps(){return{size:e.size,source:this.thumbnailSource,alt:e.alt}}},template:'<Thumbnail v-bind="bindProps" />'}),Ik={Template:Ys},Bk="wrapper";function ud(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(Bk,w(y(y({},Ik),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Images and Icons / Thumbnail",component:Qn,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Thumbnail"),t("p",null,"Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context."),t(R,{mdxType:"Canvas"},t(H,{name:"Thumbnail",height:"60px",args:{alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"},parameters:{docs:{source:{code:k`
            <Thumbnail v-bind="props" />
          `}}},mdxType:"Story"},Ys.bind({}))),t(oe,{story:"Thumbnail",mdxType:"ArgsTable"}))}ud.isMDXComponent=!0;const Qs=Ys.bind({});Qs.storyName="Thumbnail";Qs.args={alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"};Qs.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:k`
            <Thumbnail v-bind="props" />
          `}}};const Ro={title:"Components / Images and Icons / Thumbnail",component:Qn,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},includeStories:["thumbnail"]},Pk={Thumbnail:"thumbnail"};Ro.parameters=Ro.parameters||{};Ro.parameters.docs=w(y({},Ro.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:Pk,mdxComponentAnnotations:Ro},t(ud,null))});var Nk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ys,thumbnail:Qs,default:Ro});const Js=e=>({components:{Frame:gt,Toast:Da,Button:he},setup(){const o=A(!1),a=A(!1),s=A(!1);return{toastActive1:o,toggleToast1:()=>{o.value=!o.value},toastActive2:a,toggleToast2:()=>{a.value=!a.value},toastActive3:s,toggleToast3:()=>{s.value=!s.value},undoHandler:()=>{alert("Undo clicked")}}},template:`
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
  `}),Dk={Template:Js},$k="wrapper";function dd(a){var s=a,{components:e}=s,o=K(s,["components"]);return t($k,w(y(y({},Dk),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Feedback indicators / Toast",component:Da,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},mdxType:"Meta"}),t("h1",null,"Toast"),t("p",null,"The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action."),t(R,{mdxType:"Canvas"},t(H,{name:"Toast",inline:!1,height:"300px",parameters:{docs:{source:{code:k`
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
          `}}},mdxType:"Story"},Js.bind({}))),t(oe,{story:"Toast",mdxType:"ArgsTable"}))}dd.isMDXComponent=!0;const vl=Js.bind({});vl.storyName="Toast";vl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:k`
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
          `}}};const Ho={title:"Components / Feedback indicators / Toast",component:Da,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},includeStories:["toast"]},Fk={Toast:"toast"};Ho.parameters=Ho.parameters||{};Ho.parameters.docs=w(y({},Ho.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:Fk,mdxComponentAnnotations:Ho},t(dd,null))});var Ek=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Js,toast:vl,default:Ho});const Zs=e=>({components:{Frame:gt,TopBar:Fa,TopBarUserMenu:Ki,TopBarMenu:Jn,Icon:ae,VisuallyHidden:Ue,TopBarSearchField:Gi,ActionList:Ye},setup(){const o={width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},a=A(!1),s=A(!1),i=A(!1),l=A(""),c=C=>{i.value=C.length>0},m=()=>{l.value="",i.value=!1},b=()=>{a.value=!a.value},T=()=>{s.value=!s.value},f=A([{items:[{content:"Back to Shopify",icon:kn}]},{items:[{content:"Community forums"}]}]),x=A({title:"Another Message",description:"This is a description of message",action:{onClick:()=>{alert("clicked")},content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}});return{logo:o,isSearchActive:i,searchValue:l,handleSearchChange:c,toggleIsSecondaryMenuOpen:T,userMenuAction:f,userMenuMessage:x,toggleUserMenu:b,isUserMenuOpen:a,isSecondaryMenuOpen:s,handleSearchResultsDismiss:m,QuestionMarkMajor:Vr}},template:`
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
  `}),Ok={Template:Zs},qk="wrapper";function pd(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(qk,w(y(y({},Ok),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Navigation / Top Bar",component:Fa,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Top Bar"),t("p",null,"The top bar is a header component that allows merchants to search, access menus, and navigate by clicking on the logo. It's always visible at the top of interfaces like Shopify or Shopify Plus. Third-party apps that use the top bar can customize the color to match their brand using the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-appprovider--page"},"app provider")," component and are required to use their own logo."),t(R,{mdxType:"Canvas"},t(H,{name:"Top Bar",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:k`
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
          `}}},mdxType:"Story"},Zs.bind({}))),t(oe,{story:"Top Bar",mdxType:"ArgsTable"}),t("a",{name:"subcomponent-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu")),t("p",null,"A component that composes together an activator and a popover containing an action list to create a dropdown menu."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"ActionListProps","['sections']"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu. Follow Action List component props")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the menu is currently open")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@open"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening the menu popover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@close"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle closing the menu popover")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Slots"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"#activatorContent"),t("td",{parentName:"tr",align:null}),t("td",{parentName:"tr",align:null},"Accepts an activator component that renders inside of a button that opens the menu")))),t("br",null),t("a",{name:"subcomponent-user-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar user menu")),t("p",null,"A specialized menu component that is activated by a user avatar."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"{items: IconableAction[]}[]"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"name"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string detailing the merchant's full name to be displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"detail"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string allowing further details on the merchant's name displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"initials"),t("td",{parentName:"tr",align:null},"AvatarProps","['initials']"),t("td",{parentName:"tr",align:null},"The merchant's initials, rendered in place of an avatar image when not provided")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"avatar"),t("td",{parentName:"tr",align:null},"AvatarProps","['source']"),t("td",{parentName:"tr",align:null},"An avatar image representing the merchant")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the user menu is currently open")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Event"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@toggle"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening and closing the user menu")))),t("br",null),t("a",{name:"type-message"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu message")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A title for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"description"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A description for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},"{onClick(): void; content: string}"),t("td",{parentName:"tr",align:null},"An action to render near the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"link"),t("td",{parentName:"tr",align:null},"{to: string; content: string}"),t("td",{parentName:"tr",align:null},"A link to view the content of the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"{content: string; status: BadgeProps","['status']","}"),t("td",{parentName:"tr",align:null},"A badge to render near the message")))),t("br",null),t("a",{name:"subcomponent-search-field"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar search field")),t("p",null,"A text field component that is tailor-made for a search use-case."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"value"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Initial value for the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"placeholder"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Hint text to display")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"focused"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force the focus state on the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"active"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force a state where search is active but the text field component is not focused")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@change(value: string)"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when value is changed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@focus"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when input is focused")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@blur"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when focus is removed")))))}pd.isMDXComponent=!0;const xl=Zs.bind({});xl.storyName="Top Bar";xl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:k`
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
          `}}};const Vo={title:"Components / Navigation / Top Bar",component:Fa,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},includeStories:["topBar"]},Rk={"Top Bar":"topBar"};Vo.parameters=Vo.parameters||{};Vo.parameters.docs=w(y({},Vo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:Rk,mdxComponentAnnotations:Vo},t(pd,null))});var Hk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zs,topBar:xl,default:Vo});const ei=e=>({components:{VisuallyHidden:Ue},template:`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  `}),Vk={Template:ei},Uk="wrapper";function md(a){var s=a,{components:e}=s,o=K(s,["components"]);return t(Uk,w(y(y({},Vk),o),{components:e,mdxType:"MDXLayout"}),t(Q,{title:"Components / Titles and text / Visually Hidden",component:Ue,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Visually hidden"),t("p",null,"Use when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden."),t(R,{mdxType:"Canvas"},t(H,{name:"Visually Hidden",parameters:{docs:{source:{code:k`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}},mdxType:"Story"},ei.bind({}))),t(oe,{story:"Visually Hidden",mdxType:"ArgsTable"}))}md.isMDXComponent=!0;const Tl=ei.bind({});Tl.storyName="Visually Hidden";Tl.parameters={storySource:{source:`args => ({
  components: {
    VisuallyHidden
  },
  template: \`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  \`
})`},docs:{source:{code:k`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}};const Uo={title:"Components / Titles and text / Visually Hidden",component:Ue,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},includeStories:["visuallyHidden"]},jk={"Visually Hidden":"visuallyHidden"};Uo.parameters=Uo.parameters||{};Uo.parameters.docs=w(y({},Uo.parameters.docs||{}),{page:()=>t(Y,{mdxStoryNameToKey:jk,mdxComponentAnnotations:Uo},t(md,null))});var zk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ei,visuallyHidden:Tl,default:Uo});function yd(e){return{"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx":oA,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":iA,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":uA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":fA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":TA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":LA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":IA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":qA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":jA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":GA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":JA,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":oL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":iL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":uL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":yL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":bL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":SL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":_L,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":BL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":$L,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":RL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":jL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":KL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":ZL,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":a_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":l_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":d_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":h_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":v_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":C_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":I_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":D_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":H_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":z_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":K_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":Z_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":ak,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":rk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":pk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":fk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":Tk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":Lk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":Mk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":Nk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":Ek,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":Hk,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":zk}[e]}Object.assign(yd,{keys:()=>["/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx"],resolve:e=>({"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx":"./.storybook/stories/ComponentStatus.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":"./.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":"./.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":"./src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":"./src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":"./src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":"./src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":"./src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":"./src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":"./src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":"./src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":"./src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":"./src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":"./src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":"./src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":"./src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":"./src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":"./src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":"./src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":"./src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":"./src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":"./src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":"./src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":"./src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":"./src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":"./src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":"./src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":"./src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":"./src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":"./src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":"./src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":"./src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":"./src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":"./src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":"./src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":"./src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":"./src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":"./src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":"./src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":"./src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":"./src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":"./src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":"./src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":"./src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":"./src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":"./src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":"./src/components/VisuallyHidden/README.stories.mdx"})[e]});function Wk(e){e(yd,{hot:!1},!1)}const Xk=[up,dp,pp,mp,yp,hp,gp,fp,bp,vp,xp,Tp,JC].filter(Boolean);Xk.forEach(e=>{Object.keys(e).forEach(o=>{const a=e[o];switch(o){case"args":case"argTypes":return cp.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(a));case"decorators":return a.forEach(s=>rp(s,!1));case"loaders":return a.forEach(s=>lp(s,!1));case"parameters":return Bl(y({},a),!1);case"argTypesEnhancers":return a.forEach(s=>ip(s));case"argsEnhancers":return a.forEach(s=>sp(s));case"globals":case"globalTypes":{const s={};return s[o]=a,Bl(s,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});Wk(Sp);
//# sourceMappingURL=iframe.9f6b13fa.js.map
