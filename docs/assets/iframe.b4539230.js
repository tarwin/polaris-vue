var $y=Object.defineProperty,Fy=Object.defineProperties;var Ey=Object.getOwnPropertyDescriptors;var ps=Object.getOwnPropertySymbols;var _c=Object.prototype.hasOwnProperty,Mc=Object.prototype.propertyIsEnumerable;var Hl=(e,o,n)=>o in e?$y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,g=(e,o)=>{for(var n in o||(o={}))_c.call(o,n)&&Hl(e,n,o[n]);if(ps)for(var n of ps(o))Mc.call(o,n)&&Hl(e,n,o[n]);return e},N=(e,o)=>Fy(e,Ey(o));var Q=(e,o)=>{var n={};for(var s in e)_c.call(e,s)&&o.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ps)for(var s of ps(e))o.indexOf(s)<0&&Mc.call(e,s)&&(n[s]=e[s]);return n};var ct=(e,o,n)=>(Hl(e,typeof o!="symbol"?o+"":o,n),n);import{c as Oy,a as cd,b as qy,w as Ry,i as Vy,d as P,o as Te,e as lt,f as Rt,s as Hy,t as Ss,g as Es,h as fr,r as C,j as p,k as Vt,l as d,m as h,n as pe,u as a,p as ze,q as O,v as l,x as fe,y as Ee,z as ud,A,B as y,C as Ie,D as c,E as Le,F as L,G as k,H as W,I as _,J as Y,K as vr,L as re,M as Fe,N as Ye,O as St,P as be,Q as Ue,R as ce,S as xr,T as Pc,U as $o,V as Cs,W as Uy,X as jy,Y as zy,Z as Ht,_ as dd,$ as yn,a0 as Tr,a1 as pd,a2 as md,a3 as Sr,a4 as Wy,a5 as Gy,a6 as Cr,a7 as ln,a8 as Qt,a9 as Xy,aa as Ky,ab as Yy,ac as Zy,ad as As,ae as yd,af as $t,ag as Qy,ah as Jy,ai as eg,aj as tg,ak as ks,al as Ls,am as ag,an as og,ao as Nc,ap as Bc,aq as ng,ar as sg,as as ig,at as lg,au as rg,av as gd,aw as Ic,ax as cg,ay as ug,az as dg,aA as ar,aB as ws,aC as or,aD as pg,aE as hd,aF as mg,aG as yg,aH as bn,aI as t,aJ as ae,aK as oe,aL as M,aM as _s,aN as nr,aO as gg,aP as Dc,aQ as R,aR as V,aS as se,aT as bd,aU as sr,aV as hg,aW as $c,aX as bg,aY as fd,aZ as vd,a_ as fg,a$ as xd,b0 as vg,b1 as xg,b2 as Tg,b3 as Sg,b4 as Cg,b5 as Ag,b6 as kg,b7 as Lg,b8 as wg,b9 as Fc,ba as _g,bb as Mg,bc as Pg,bd as Ng,be as Bg,bf as Ig,bg as Dg,bh as $g,bi as Fg,bj as Eg,bk as Og,bl as qg,bm as Rg,bn as Vg,bo as Hg,bp as Ug,bq as jg}from"./vendor.37e96df3.js";const zg=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};zg();const Td=Oy({page:"preview"});cd.setChannel(Td);window.__STORYBOOK_ADDONS_CHANNEL__=Td;const{SERVER_CHANNEL_URL:Ec}=Ry;if(Ec){const e=qy({url:Ec});cd.setServerChannel(e),window.__STORYBOOK_SERVER_CHANNEL__=e}const Ms='a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]:not([tabindex="-1"])',ir="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",Wg='a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';function Os(e,o){if(e.matches)return e.matches(o);const n=(e.ownerDocument||document).querySelectorAll(o);let s=n.length;for(;s>=0&&n.item(s)!==e;)return s-=1,s>-1}function Ul(e){const o="a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";return Os(e,o)?e:e.querySelector(o)}function Gg(e,o){const n=[...document.querySelectorAll(ir)],s=n.indexOf(e)+1,i=n.slice(s);for(const r of i)if(Vy(r)&&(!o||o&&o(r)))return r;return null}function Xg(e,o){const n=Gg(e,o);return n&&n instanceof HTMLElement?(n.focus(),!0):!1}function Ar(e,o=!0){return!o&&Os(e,ir)?e:e.querySelector(ir)}function Sd(e){return e.querySelectorAll(Wg)}function Cd(e,o){let n=0;for(const s of e){if(s===o)break;n+=1}return n===e.length?-1:n}function Kg(e,o){const n=Sd(e),s=Cd(n,o);s===-1?n[0].focus():n[(s-1+n.length)%n.length].focus()}function Yg(e,o){const n=Sd(e),s=Cd(n,o);s===-1?n[0].focus():n[(s+1)%n.length].focus()}const qt=e=>{e.currentTarget.blur()};function qs(e,o=!0){var n;(n=Ar(e,o))==null||n.focus()}function Ad(e,o=!0){return!o&&Os(e,Ms)?e:e.querySelector(Ms)}function kd(e,o=!0){if(!o&&Os(e,Ms))return e;const n=e.querySelectorAll(Ms);return n[n.length-1]}function Zg(e,o=!0){const n=Ad(e,o);return n?(n.focus(),!0):!1}function Qg(e,o=!0){const n=kd(e,o);return n?(n.focus(),!0):!1}const Jg={inheritAttrs:!1,render(){return null}},mt=P(N(g({},Jg),{props:{keyCode:{type:String,required:!0},keyEvent:{type:String,default:"keyup"},handler:{type:Function,required:!0},useCapture:{type:Boolean},options:{type:Object}},setup(e){const o=e;function n(s){s.key===o.keyCode&&o.handler(s)}return Te(()=>document.addEventListener(o.keyEvent,n,o.useCapture||o.options)),lt(()=>document.removeEventListener(o.keyEvent,n,o.useCapture||o.options)),()=>{}}}));mt.__docgenInfo={exportName:"default",displayName:"KeypressListener",description:"",tags:{},props:[{name:"keyCode",type:{name:"String as () => Key"},required:!0},{name:"keyEvent",type:{name:"String as () => KeyEvent"},defaultValue:{func:!1,value:"'keyup'"}},{name:"handler",type:{name:"func"},required:!0},{name:"useCapture",type:{name:"boolean"}},{name:"options",type:{name:"Object as () => AddEventListenerOptions"}}]};var qe=(e=>(e.Backspace="Backspace",e.Tab="Tab",e.Enter="Enter",e.Shift="Shift",e.Ctrl="Ctrl",e.Alt="Alt",e.Pause="Pause",e.CapsLock="CapsLock",e.Escape="Escape",e.Space="Space",e.PageUp="PageUp",e.PageDown="PageDown",e.End="End",e.Home="Home",e.ArrowRight="ArrowRight",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.Insert="Insert",e.Delete="Delete",e.Key0="Key0",e.Key1="Key1",e.Key2="Key2",e.Key3="Key3",e.Key4="Key4",e.Key5="Key5",e.Key6="Key6",e.Key7="Key7",e.Key8="Key8",e.Key9="Key9",e.KeyA="KeyA",e.KeyB="KeyB",e.KeyC="KeyC",e.KeyD="KeyD",e.KeyE="KeyE",e.KeyF="KeyF",e.KeyG="KeyG",e.KeyH="KeyH",e.KeyI="KeyI",e.KeyJ="KeyJ",e.KeyK="KeyK",e.KeyL="KeyL",e.KeyM="KeyM",e.KeyN="KeyN",e.KeyO="KeyO",e.KeyP="KeyP",e.KeyQ="KeyQ",e.KeyR="KeyR",e.KeyS="KeyS",e.KeyT="KeyT",e.KeyU="KeyU",e.KeyV="KeyV",e.KeyW="KeyW",e.KeyX="KeyX",e.KeyY="KeyY",e.KeyZ="KeyZ",e.LeftMeta="LeftMeta",e.RightMeta="RightMeta",e.Select="Select",e.Numpad0="Numpad0",e.Numpad1="Numpad1",e.Numpad2="Numpad2",e.Numpad3="Numpad3",e.Numpad4="Numpad4",e.Numpad5="Numpad5",e.Numpad6="Numpad6",e.Numpad7="Numpad7",e.Numpad8="Numpad8",e.Numpad9="Numpad9",e.Multiply="Multiply",e.Add="Add",e.Subtract="Subtract",e.Decimal="Decimal",e.Divide="Divide",e.F1="F1",e.F2="F2",e.F3="F3",e.F4="F4",e.F5="F5",e.F6="F6",e.F7="F7",e.F8="F8",e.F9="F9",e.F10="F10",e.F11="F11",e.F12="F12",e.NumLock="NumLock",e.ScrollLock="ScrollLock",e.Semicolon="Semicolon",e.Equals="Equals",e.Comma="Comma",e.Dash="Dash",e.Period="Period",e.ForwardSlash="ForwardSlash",e.GraveAccent="GraveAccent",e.OpenBracket="OpenBracket",e.BackSlash="BackSlash",e.CloseBracket="CloseBracket",e.SingleQuote="SingleQuote",e))(qe||{});const eh="Polaris-ActionList",th="Polaris-ActionList__Actions",ah="Polaris-ActionList__Section",oh="Polaris-ActionList__Title",nh="Polaris-ActionList--firstSectionWithTitle",sh="Polaris-ActionList__Item",ih="Polaris-ActionList--active",lh="Polaris-ActionList--destructive",rh="Polaris-ActionList--disabled",ch="Polaris-ActionList__Prefix",uh="Polaris-ActionList__Suffix",dh="Polaris-ActionList__Content",ph="Polaris-ActionList__ContentBlock",mh="Polaris-ActionList__ContentBlockInner",yh="Polaris-ActionList__Text";var Ge={ActionList:eh,"Section-withoutTitle":"Polaris-ActionList__Section--withoutTitle",Actions:th,Section:ah,Title:oh,firstSectionWithTitle:nh,Item:sh,active:ih,destructive:lh,disabled:rh,Prefix:ch,Suffix:uh,Content:dh,ContentBlock:ph,ContentBlockInner:mh,Text:yh};class ga{constructor({top:o=0,left:n=0,width:s=0,height:i=0}={}){ct(this,"top");ct(this,"left");ct(this,"width");ct(this,"height");this.top=o,this.left=n,this.width=s,this.height=i}static get zero(){return new ga}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}}function Et(e){if(!(e instanceof Element))return new ga({width:window.innerWidth,height:window.innerHeight});const o=e.getBoundingClientRect();return new ga({top:o.top,left:o.left,width:o.width,height:o.height})}const ms=1e3/60;function Ld(e){return e===document}function gh(e){return Ld(e)?document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop}function hh(e,o){const n=e.left,s=e.left+e.width,i=o.left;return o.left+o.width<n||s<i}class bh{constructor(o){ct(this,"stickyItems",[]);ct(this,"stuckItems",[]);ct(this,"container",null);ct(this,"topBarOffset",0);ct(this,"handleResize",Rt(()=>{this.manageStickyItems()},ms,{leading:!0,trailing:!0,maxWait:ms}));ct(this,"handleScroll",Rt(()=>{this.manageStickyItems()},ms,{leading:!0,trailing:!0,maxWait:ms}));o&&this.setContainer(o)}registerStickyItem(o){this.stickyItems.push(o)}unregisterStickyItem(o){const n=this.stickyItems.findIndex(({stickyNode:s})=>o===s);this.stickyItems.splice(n,1)}setContainer(o){this.container=o,Ld(o)&&this.setTopBarOffset(o),this.container.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.manageStickyItems()}removeScrollListener(){this.container&&(this.container.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize))}manageStickyItems(){if(this.stickyItems.length<=0)return;const o=this.container?gh(this.container):0,n=Et(this.container).top+this.topBarOffset;this.stickyItems.forEach(s=>{const{handlePositioning:i}=s,{sticky:r,top:u,left:m,width:x}=this.evaluateStickyItem(s,o,n);this.updateStuckItems(s,r),i(r,u,m,x)})}evaluateStickyItem(o,n,s){var I;const{stickyNode:i,placeHolderNode:r,boundingElement:u,offset:m,disableWhenStacked:x}=o;if(x&&Hy().matches)return{sticky:!1,top:0,left:0,width:"auto"};const v=m?this.getOffset(i)+parseInt(Ss.spacing["5"],10):this.getOffset(i),f=n+v,b=r.getBoundingClientRect().top-s+n,T=s+v,{width:S}=r.getBoundingClientRect(),{left:w}=r.getBoundingClientRect();let B;if(u==null)B=f>=b;else{const E=i.getBoundingClientRect().height||((I=i.firstElementChild)==null?void 0:I.getBoundingClientRect().height)||0,q=u.getBoundingClientRect().bottom-E+n-s;B=f>=b&&f<q}return{sticky:B,top:T,left:w,width:S}}updateStuckItems(o,n){const{stickyNode:s}=o;n&&!this.isNodeStuck(s)?this.addStuckItem(o):!n&&this.isNodeStuck(s)&&this.removeStuckItem(o)}addStuckItem(o){this.stuckItems.push(o)}removeStuckItem(o){const{stickyNode:n}=o,s=this.stuckItems.findIndex(({stickyNode:i})=>n===i);this.stuckItems.splice(s,1)}getOffset(o){if(this.stuckItems.length===0)return 0;let n=0,s=0;const i=this.stuckItems.length,r=Et(o);for(;s<i;){const u=this.stuckItems[s].stickyNode;if(u!==o){const m=Et(u);hh(r,m)||(n+=Et(u).height)}else break;s+=1}return n}isNodeStuck(o){return this.stuckItems.findIndex(({stickyNode:s})=>o===s)>=0}setTopBarOffset(o){const n=o.querySelector(`:not(${Es.selector}) ${fr.selector}`);this.topBarOffset=n?n.clientHeight:0}}const fh="Polaris-Scrollable",vh="Polaris-Scrollable--horizontal",xh="Polaris-Scrollable--vertical",Th="Polaris-Scrollable--verticalHasScrolling",Sh="Polaris-Scrollable--hasTopShadow",Ch="Polaris-Scrollable--hasBottomShadow";var Ca={Scrollable:fh,horizontal:vh,vertical:xh,verticalHasScrolling:Th,hasTopShadow:Sh,hasBottomShadow:Ch};const Ah=["tabindex"],Ut=P({props:{vertical:{type:Boolean,default:!0},horizontal:{type:Boolean},shadow:{type:Boolean},hint:{type:Boolean},focusable:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=z=>{z.preventDefault()},i=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},r=100,u=.2,m=.2,x=["scroll","touchmove","wheel"],v=i(),f=2,b=C(null),T=C(!1),S=C(!1),w=C(0),B=C(!1),I=new bh,E=z=>{w.value=z};ze("stickyManagerContext",I),ze("scrollToPositionContext",E);const q=p(()=>O(Ca.Scrollable,n.vertical&&Ca.vertical,n.horizontal&&Ca.horizontal,T.value&&Ca.hasTopShadow,S.value&&Ca.hasBottomShadow,n.vertical&&B.value&&Ca.verticalHasScrolling)),U=()=>{if(!b.value)return;const{scrollTop:z,scrollHeight:ne,clientHeight:he}=b.value,te=Boolean(n.shadow&&!(z+he>=ne)),Ne=Boolean(n.shadow&&z>0&&w.value>0),H=ne>he,J=ne-z<=he+f;H&&J&&o("scrolled-to-bottom"),T.value=Ne,S.value=te,w.value=z,B.value=H},K=Rt(()=>{U()},50,{trailing:!0}),D=(z=!0)=>{!b.value||x.forEach(ne=>{var he,te;z?(he=b.value)==null||he.addEventListener(ne,s):(te=b.value)==null||te.removeEventListener(ne,s)})},X=()=>{const z=w.value*m;w.value=z<u?0:w.value-z,w.value>0?window.requestAnimationFrame(X):D(!1)},F=()=>{if(!b.value)return;const{clientHeight:z,scrollHeight:ne}=b.value;if(v||w.value>0||ne<=z)return;const he=ne-z;D(),w.value=he>r?r:he,window.requestAnimationFrame(X)};return Te(()=>{!b.value||(I.setContainer(b.value),b.value.scrollTop=w.value,b.value.addEventListener("scroll",()=>{window.requestAnimationFrame(U)}),window.addEventListener("resize",K),window.requestAnimationFrame(()=>{U(),n.hint&&F()}))}),Vt(()=>{b.value&&w.value>0&&(b.value.scrollTop=w.value)}),lt(()=>{!b.value||(b.value.removeEventListener("scroll",U),window.removeEventListener("resize",K),I.removeScrollListener())}),(z,ne)=>(l(),d("div",pe({ref_key:"scrollArea",ref:b},a(Es).props,{class:a(q),tabindex:e.focusable?0:void 0}),[h(z.$slots,"default")],16,Ah))}});Ut.__docgenInfo={exportName:"default",displayName:"Scrollable",description:"",tags:{},props:[{name:"vertical",description:"Scroll content vertically",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"horizontal",description:"Scroll content horizontally",required:!1,type:{name:"boolean"}},{name:"shadow",description:"Add a shadow when content is scrollable",required:!1,type:{name:"boolean"}},{name:"hint",description:"Slightly hints content upon mounting when scrollable",required:!1,type:{name:"boolean"}},{name:"focusable",description:"Adds a tabIndex to scrollable when children are not focusable",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};class kr extends Error{constructor(o=""){super(`${o&&`${o} `}Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-app-provider for implementation instructions.`);this.name="MissingAppProviderError"}}class kh extends Error{constructor(o=""){super(`${o&&`${o} `}Your component must be wrapped in a <Frame> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-frame--page for implementation instructions.`);this.name="MissingFrameError"}}function De(){const e=fe("uniqueIdFactory"),o=C("");function n(s="",i=""){if(!e)throw new kr("No UniqueIdFactory was provided.");return i||(o.value||(o.value=e.nextId(s)),o.value)}return{uniqueIdRef:o,useUniqueId:n}}function Lh(e){const o=fe("focusManager"),{useUniqueId:n,uniqueIdRef:s}=De();Ee([()=>e.trapping],()=>{e.trapping&&s&&o.add(s.value)});const i=p(()=>o.trapFocusList[0]===s.value);return ud(()=>{if(!o)throw new kr("No FocusManager was provided.")}),Te(()=>{const r=n();e.trapping&&o.add(r)}),lt(()=>{s.value&&o.remove(s.value)}),{canSafelyFocus:i}}const wh=["id"],Rs=P({setup(e){const o=fe("scrollToPositionContext",()=>!1),n=C(null),{useUniqueId:s}=De(),i=s("ScrollTo");return Te(()=>{!o||!n.value||o(n.value.offsetTop)}),(r,u)=>(l(),d("a",{id:a(i),ref_key:"anchorNode",ref:n},null,8,wh))}});Rs.__docgenInfo={exportName:"default",displayName:"ScrollTo",description:"",tags:{}};const _t=P({props:{to:null,url:null,external:{type:Boolean}},setup(e){return(o,n)=>(l(),A(Ie(e.to?"router-link":"a"),{href:e.url,to:e.to,target:e.to?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0},{default:y(()=>[h(o.$slots,"default")]),_:3},8,["href","to","target","rel"]))}});_t.__docgenInfo={exportName:"default",displayName:"UnstyledLink",description:"",tags:{},props:[{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const _h="Polaris-TextStyle--variationPositive",Mh="Polaris-TextStyle--variationNegative",Ph="Polaris-TextStyle--variationWarning",Nh="Polaris-TextStyle--variationCode",Bh="Polaris-TextStyle--variationStrong",Ih="Polaris-TextStyle--variationSubdued";var Dh={variationPositive:_h,variationNegative:Mh,variationWarning:Ph,variationCode:Nh,variationStrong:Bh,variationSubdued:Ih};const yt=P({props:{variation:{type:String,default:null}},setup(e){const o=e,n={positive:"positive",negative:"negative",warning:"warning",strong:"strong",subdued:"subdued",code:"code"};function s(u){return u===n.code?"code":"span"}const i=C(s(o.variation)),r=p(()=>{const u=o.variation&&Le("variation",o.variation);return O(u&&Dh[u])});return(u,m)=>(l(),A(Ie(i.value),{class:c(a(r))},{default:y(()=>[h(u.$slots,"default")]),_:3},8,["class"]))}});yt.__docgenInfo={exportName:"default",displayName:"TextStyle",description:"",tags:{},props:[{name:"variation",description:"Give text additional visual meaning",tags:{},values:["positive | negative | strong | subdued | code"],type:{name:"String as () => Variation"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]};const $h="Polaris-Icon",Fh="Polaris-Icon--applyColor",Eh="Polaris-Icon--hasBackdrop",Oh="Polaris-Icon--colorBase",qh="Polaris-Icon--colorSubdued",Rh="Polaris-Icon--colorCritical",Vh="Polaris-Icon--colorInteractive",Hh="Polaris-Icon--colorWarning",Uh="Polaris-Icon--colorHighlight",jh="Polaris-Icon--colorSuccess",zh="Polaris-Icon--colorPrimary",Wh="Polaris-Icon__Svg",Gh="Polaris-Icon__Img",Xh="Polaris-Icon__Placeholder";var sa={Icon:$h,applyColor:Fh,hasBackdrop:Eh,colorBase:Oh,colorSubdued:qh,colorCritical:Rh,colorInteractive:Vh,colorWarning:Hh,colorHighlight:Uh,colorSuccess:jh,colorPrimary:zh,Svg:Wh,Img:Gh,Placeholder:Xh},Oc={env:"production"};const Kh="Polaris-VisuallyHidden";var Yh={VisuallyHidden:Kh};const et=P({setup(e){return(o,n)=>(l(),d("span",{class:c(a(Yh).VisuallyHidden)},[h(o.$slots,"default")],2))}});et.__docgenInfo={exportName:"default",displayName:"VisuallyHidden",description:"",tags:{},slots:[{name:"default"}]};const Zh=["src"],le=P({props:{source:null,color:null,backdrop:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,n=["base","critical","highlight","success","warning"],s=p(()=>o.color&&sa[Le("color",o.color)]),i=p(()=>O(sa.Icon,s.value,o.color&&sa.applyColor,o.backdrop&&sa.hasBackdrop)),r=p(()=>typeof o.source=="object"?"icon":o.source==="placeholder"?"placeholder":"external"),u=p(()=>r.value==="external"?encodeURIComponent(String(o.source)):""),m=()=>{o.color&&r.value==="external"&&Oc.env==="development"&&console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.")},x=()=>{o.backdrop&&o.color&&!n.includes(o.color)&&Oc.env==="development"&&console.warn(`The ${o.color} variant does not have a supported backdrop color`)};return Te(()=>{m(),x()}),(v,f)=>(l(),d("span",{class:c(a(i))},[L(a(et),null,{default:y(()=>[k("span",null,W(e.accessibilityLabel),1)]),_:1}),a(r)==="icon"?(l(),A(Ie(e.source),{key:0,class:c(a(sa).Svg)},null,8,["class"])):a(r)==="placeholder"?(l(),d("div",{key:1,class:c(a(sa).Placeholder)},null,2)):(l(),d("img",{key:2,class:c(a(sa).Img),src:`data:image/svg+xml;utf8,${a(u)}`,alt:"","aria-hidden":"true"},null,10,Zh))],2))}});le.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"source",description:"The contents to display in the icon",required:!0,type:{name:"IconSource"}},{name:"color",description:"Set the color for the icon",required:!1,type:{name:"Color"}},{name:"backdrop",description:"Show a backdrop behind the icon",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}]};const Qh="Polaris-Badge",Jh="Polaris-Badge--sizeSmall",eb="Polaris-Badge--statusSuccess",tb="Polaris-Badge--statusInfo",ab="Polaris-Badge--statusAttention",ob="Polaris-Badge--statusWarning",nb="Polaris-Badge--statusCritical",sb="Polaris-Badge--statusNew",ib="Polaris-Badge__Pip",lb="Polaris-Badge--progressIncomplete",rb="Polaris-Badge--progressPartiallyComplete",cb="Polaris-Badge--progressComplete",ub="Polaris-Badge--withinFilter",db="Polaris-Badge__Icon";var ia={Badge:Qh,sizeSmall:Jh,statusSuccess:eb,statusInfo:tb,statusAttention:ab,statusWarning:ob,statusCritical:nb,statusNew:sb,Pip:ib,progressIncomplete:lb,progressPartiallyComplete:rb,progressComplete:cb,withinFilter:ub,Icon:db};const pb={key:2},at=P({props:{status:null,progress:null,size:{default:"medium"},statusAndProgressLabelOverride:null,icon:null},setup(e){const o=e,n=fe("withinFilterContext",!1),s="medium",i=C(""),r=C(""),u=p(()=>O(ia.Badge,o.status&&ia[Le("status",o.status)],o.progress&&ia[Le("progress",o.progress)],o.size&&o.size!==s&&ia[Le("size",o.size)],n&&ia.withinFilter)),m=p(()=>o.statusAndProgressLabelOverride||r.value||i.value),x=p(()=>o.statusAndProgressLabelOverride||`${r.value} ${i.value}`),v=p(()=>!o.progress&&o.icon);return Te(()=>{switch(o.progress){case"incomplete":i.value="incomplete";break;case"partiallyComplete":i.value="partiallyComplete";break;case"complete":i.value="complete";break}switch(o.status){case"info":r.value="info";break;case"success":r.value="success";break;case"warning":r.value="warning";break;case"critical":r.value="critical";break;case"attention":r.value="attention";break;case"new":r.value="new";break}}),(f,b)=>{const T=vr("Icon");return l(),d("span",{class:c(a(u))},[a(v)?(l(),d("span",{key:0,class:c(a(ia).Icon)},[L(T,{source:e.icon},null,8,["source"])],2)):_("",!0),a(m)?(l(),d(Y,{key:1},[i.value?(l(),d("span",{key:0,class:c(a(ia).Pip)},[L(a(et),null,{default:y(()=>[re(W(a(x)),1)]),_:1})],2)):(l(),A(a(et),{key:1},{default:y(()=>[re(W(a(x)),1)]),_:1}))],64)):_("",!0),f.$slots.default?(l(),d("span",pb,[h(f.$slots,"default")])):_("",!0)],2)}}});at.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"status",description:"Colors and labels the badge with the given status.",required:!1,type:{name:"Status"}},{name:"progress",description:"Render a pip showing the progress of a given task.",required:!1,type:{name:"Progress"}},{name:"size",description:"Medium or small size.",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"statusAndProgressLabelOverride",description:"Pass a custom accessibilityLabel",required:!1,type:{name:"string"}},{name:"icon",description:"Icon to display to the left of the badge\u2019s content.",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const mb={inheritAttrs:!1},lr=P(N(g({},mb),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const o=e,n=p(()=>o.ellipsis&&o.content?`${o.content}\u2026`:o.content);return(s,i)=>(l(),d("span",{class:c(a(Ge).Content)},[e.prefixId?(l(),d("span",{key:0,class:c(a(Ge).Prefix)},[h(s.$slots,"prefix")],2)):e.icon?(l(),d("span",{key:1,class:c(a(Ge).Prefix)},[L(a(le),{source:e.icon},null,8,["source"])],2)):e.image?(l(),d("span",{key:2,class:c(a(Ge).Prefix),role:"presentation",style:Fe({backgroundImage:`url(${e.image}`})},null,6)):_("",!0),k("span",{class:c(a(Ge).Text)},[e.helpText?(l(),d("span",{key:0,class:c(a(Ge).ContentBlock)},[k("span",{class:c(a(Ge).ContentBlockInner)},W(a(n)),3),L(a(yt),{variation:"subdued"},{default:y(()=>[re(W(e.helpText),1)]),_:1})],2)):(l(),d(Y,{key:1},[re(W(a(n)),1)],64))],2),e.badge?(l(),d("span",{key:3,class:c(a(Ge).Suffix)},[L(a(at),{status:e.badge.status},{default:y(()=>[re(W(e.badge.content),1)]),_:1},8,["status"])],2)):_("",!0),e.suffixId?(l(),d("span",{key:4,class:c(a(Ge).Suffix)},[h(s.$slots,"suffix")],2)):_("",!0)],2))}}));lr.__docgenInfo={exportName:"default",displayName:"ContentElement",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],slots:[{name:"prefix"},{name:"suffix"}]};const yb=["role"],gb=["id","disabled","aria-label","role"],hb={inheritAttrs:!1},wd=P(N(g({},hb),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},emits:["action"],setup(e,{emit:o}){const n=e,s=p(()=>O(Ge.Item,n.disabled&&Ge.disabled,n.destructive&&Ge.destructive,n.active&&Ge.active)),i=p(()=>({badge:n.badge,content:n.content,helpText:n.helpText,icon:n.icon,prefixId:n.prefixId,suffixId:n.suffixId,image:n.image,disabled:n.disabled,ellipsis:n.ellipsis,role:n.role})),r=p(()=>n.role==="menuitem"?"presentation":void 0),u=()=>{n.disabled||o("action")};return(m,x)=>(l(),d("li",{role:a(r)},[e.active?(l(),A(a(Rs),{key:0})):_("",!0),e.url?(l(),A(a(_t),{key:1,id:e.id,url:e.disabled?void 0:e.url,class:c(a(s)),external:e.external,"aria-label":e.accessibilityLabel,role:e.role,onClick:u},{default:y(()=>[L(lr,Ye(St(a(i))),{suffix:y(()=>[h(m.$slots,"suffix")]),prefix:y(()=>[h(m.$slots,"prefix")]),_:3},16)]),_:3},8,["id","url","class","external","aria-label","role"])):(l(),d("button",{key:2,id:e.id,type:"button",class:c(a(s)),disabled:e.disabled,"aria-label":e.accessibilityLabel,role:e.role,onClick:u,onMouseup:x[0]||(x[0]=(...v)=>a(qt)&&a(qt)(...v))},[L(lr,Ye(St(a(i))),{suffix:y(()=>[h(m.$slots,"suffix")]),prefix:y(()=>[h(m.$slots,"prefix")]),_:3},16)],42,gb))],8,yb))}}));wd.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"action"}],slots:[{name:"suffix"},{name:"prefix"}]};const bb=["role","tabIndex"],fb={inheritAttrs:!1},rr=P(N(g({},fb),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=p(()=>n.section.title?void 0:Ge["Section-withoutTitle"]),i=p(()=>O(Ge.Title,n.firstSection&&Ge.firstSectionWithTitle)),r=p(()=>{let m;switch(n.actionRole){case"option":m="presentation";break;case"menuitem":m=n.hasMultipleSections?"presentation":"menu";break;default:m=void 0;break}return m}),u=m=>{m&&m(),o("action-any-item")};return(m,x)=>(l(),d("div",{class:c(a(s))},[e.section.title?(l(),d("p",{key:0,class:c(a(i))},W(e.section.title),3)):_("",!0),k("ul",{class:c(a(Ge).Actions),role:a(r),tabIndex:e.hasMultipleSections?void 0:-1},[(l(!0),d(Y,null,be(e.section.items,(w,S)=>{var B=w,{content:v,helpText:f,onAction:b}=B,T=Q(B,["content","helpText","onAction"]);return l(),A(a(wd),pe({key:`${v}-${S}`,content:v,helpText:f,role:e.actionRole},g({},T),{onAction:I=>u(b)}),Ue({_:2},[T.prefixId?{name:"prefix",fn:y(()=>[h(m.$slots,`prefix-${T.prefixId}`)])}:void 0,T.suffixId?{name:"suffix",fn:y(()=>[h(m.$slots,`suffix-${T.suffixId}`)])}:void 0]),1040,["content","helpText","role","onAction"])}),128))],10,bb)],2))}}));rr.__docgenInfo={exportName:"default",displayName:"SectionMarkup",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const vb={inheritAttrs:!1},_d=P(N(g({},vb),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=p(()=>{const{section:i,hasMultipleSections:r,actionRole:u,firstSection:m}=n;return{section:i,hasMultipleSections:r,actionRole:u,firstSection:m}});return(i,r)=>e.hasMultipleSections?(l(),d("li",{key:0,class:c(a(Ge).Section),role:"presentation"},[L(rr,pe(a(s),{onActionAnyItem:r[0]||(r[0]=u=>o("action-any-item"))}),Ue({_:2},[be(e.section.items,({prefixId:u})=>({name:`prefix-${u}`,fn:y(()=>[h(i.$slots,`prefix-${u}`)])})),be(e.section.items,({suffixId:u})=>({name:`suffix-${u}`,fn:y(()=>[h(i.$slots,`suffix-${u}`)])}))]),1040)],2)):(l(),A(rr,pe({key:1},a(s),{onActionAnyItem:r[1]||(r[1]=u=>o("action-any-item"))}),Ue({_:2},[be(e.section.items,({prefixId:u})=>({name:`prefix-${u}`,fn:y(()=>[h(i.$slots,`prefix-${u}`)])})),be(e.section.items,({suffixId:u})=>({name:`suffix-${u}`,fn:y(()=>[h(i.$slots,`suffix-${u}`)])}))]),1040))}}));_d.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const xb={inheritAttrs:!1},Ze=P(N(g({},xb),{props:{items:{default:void 0},sections:{default:()=>[]},actionRole:{default:void 0}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=C(null),i=p(()=>n.items?[{items:n.items},...n.sections]:n.sections?n.sections:[]),r=p(()=>i.value.length>1),u=p(()=>r.value?"ul":"div"),m=p(()=>r.value&&n.actionRole==="menuitem"?"menu":void 0),x=p(()=>r.value&&n.actionRole==="menuitem"?-1:void 0),v=b=>{b.preventDefault();const T=b.target;s.value&&T&&s.value.contains(T)&&Kg(s.value,T)},f=b=>{b.preventDefault();const T=b.target;s.value&&T&&s.value.contains(T)&&Yg(s.value,T)};return(b,T)=>(l(),A(Ie(a(u)),{ref_key:"actionListRef",ref:s,role:a(m),class:c(a(O)(a(Ge).ActionList)),tabIndex:a(x)},{default:y(()=>[(l(!0),d(Y,null,be(a(i),(S,w)=>(l(),d(Y,null,[S.items&&S.items.length>0?(l(),A(a(_d),{key:S.title||w,firstSection:w===0,section:S,hasMultipleSections:a(r),actionRole:e.actionRole,onActionAnyItem:T[0]||(T[0]=B=>o("action-any-item"))},Ue({_:2},[be(S.items,({prefixId:B})=>({name:`prefix-${B}`,fn:y(()=>[h(b.$slots,`prefix-${B}`)])})),be(S.items,({suffixId:B})=>({name:`suffix-${B}`,fn:y(()=>[h(b.$slots,`suffix-${B}`)])}))]),1032,["firstSection","section","hasMultipleSections","actionRole"])):_("",!0)],64))),256)),e.actionRole==="menuitem"?(l(),d(Y,{key:0},[L(a(mt),{keyEvent:"keydown",keyCode:a(qe).ArrowDown,handler:f},null,8,["keyCode"]),L(a(mt),{keyEvent:"keydown",keyCode:a(qe).ArrowUp,handler:v},null,8,["keyCode"])],64)):_("",!0)]),_:3},8,["role","class","tabIndex"]))}}));Ze.__docgenInfo={exportName:"default",displayName:"ActionList",description:"",tags:{},props:[{name:"items",description:"Collection of actions for list",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"undefined"}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"menuitem"'}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Tb="Polaris-ActionMenu";var Sb={ActionMenu:Tb};const Cb="Polaris-ActionMenu-Actions__ActionsLayout";var Ab={ActionsLayout:Cb};const kb="Polaris-ActionMenu-MenuGroup__Details";var Lb={Details:kb};const wb="Polaris-ActionMenu-SecondaryAction",_b="Polaris-ActionMenu-SecondaryAction--destructive";var qc={SecondaryAction:wb,destructive:_b};const Ps=P({props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:null,textAlign:null,outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean]},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},emits:["click","get-offset-width"],setup(e,{emit:o}){const n=e,s=C(null),i=p(()=>O(qc.SecondaryAction,n.destructive&&qc.destructive));Te(()=>{var u;r(((u=s.value)==null?void 0:u.offsetWidth)||0)});const r=u=>{s.value&&o("get-offset-width",u)};return(u,m)=>(l(),d("span",{class:c(a(i)),ref_key:"secondaryActionsRef",ref:s},[L(a(ye),pe({onClick:m[0]||(m[0]=x=>u.$emit("click"))},n),{default:y(()=>[h(u.$slots,"default")]),_:3},16)],2))}});Ps.__docgenInfo={exportName:"default",displayName:"SecondaryAction",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"primary",required:!1,type:{name:"boolean"}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]}},{name:"textAlign",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]}},{name:"plain",required:!1,type:{name:"boolean"}},{name:"monochrome",required:!1,type:{name:"boolean"}},{name:"removeUnderline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",required:!1,type:{name:"ConnectedDisclosure"}}],events:[{name:"click"},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const Mb={inheritAttrs:!1},Md=P(N(g({},Mb),{props:{badge:null,title:null,actions:null,icon:null,index:null,accessibilityLabel:null,active:{type:Boolean}},emits:["open","close","get-offset-width"],setup(e,{emit:o}){const n=e,s=ce(),i=()=>{o("close",n.title)},r=()=>{o("open",n.title)},u=m=>{o("get-offset-width",m)};return(m,x)=>e.actions.length?(l(),A(a(tt),{key:0,active:Boolean(e.active),"preferred-alignment":"left",hideOnPrint:"",onClose:i},{activator:y(()=>[L(a(Ps),{disclosure:!0,icon:e.icon,accessibilityLabel:e.accessibilityLabel,onClick:r,onGetOffsetWidth:u},{default:y(()=>[re(W(e.title),1)]),_:1},8,["icon","accessibilityLabel"])]),content:y(()=>[L(a(Ze),{items:e.actions,onActionAnyItem:i},null,8,["items"]),a(s).default?(l(),d("div",{key:0,class:c(a(Lb).Details)},[h(m.$slots,"default")],2)):_("",!0)]),_:3},8,["active"])):_("",!0)}}));Md.__docgenInfo={exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"title",description:"Menu group title",required:!0,type:{name:"string"}},{name:"actions",description:"List of actions",required:!0,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"icon",description:"Icon to display",required:!1,type:{name:"TSIndexedAccessType"}},{name:"index",description:"Zero-indexed numerical position. Overrides the group's order in the menu.",required:!1,type:{name:"number"}},{name:"accessibilityLabel",description:"Visually hidden menu description for screen readers",required:!1,type:{name:"string"}},{name:"active",description:"Whether or not the menu is open",required:!1,type:{name:"boolean"}}],events:[{name:"open",type:{names:["string"]}},{name:"close",type:{names:["string"]}},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const Pd=P({props:{actions:null,groups:null},setup(e){const o=e,n=8,s=fe("lang"),i=C(null),r=C(0),u=C(0),m=C(0),x=C(0),v=C([]),f=C(null),b=C({showable:[],rolledUp:[]}),T=C({title:s.Polaris.ActionMenu.Actions.moreActions,actions:[]}),S=p(()=>o.groups&&o.groups.length?[...o.groups].pop():[]),w=p(()=>[...v.value].pop()||0),B=H=>{v.value=[...v.value,H]},I=H=>{f.value?f.value=null:f.value=H},E=()=>{f.value=null},q=p(()=>o.groups?[...o.groups,T.value]:[T.value]),U=p(()=>q.value.filter(H=>o.groups&&o.groups.length===0?H:H===S.value||!b.value.rolledUp.some(J=>Ne(J)&&J.title===H.title))),K=H=>H===T.value,D=H=>H===S.value,X=p(()=>b.value.rolledUp.reduce((H,J)=>(H.push(...Ne(J)?J.actions:[J]),H),[])),F=H=>{const ve=H,{actions:J}=ve,ue=Q(ve,["actions"]);return N(g({},ue),{active:f.value===H.title})},z=H=>!K(H)&&!D(H)?H.actions:!K(H)&&D(H)?[...X.value,...H.actions]:K(H)&&(!o.groups||o.groups.length===0)&&X.value.length?X.value:[],ne=()=>{let H=[...o.actions||[],...o.groups||[]];o.groups&&o.groups.length>0&&(H=[...H].slice(0,H.length-1));const J=H.slice(0,b.value.showable.length),ue=H.slice(b.value.showable.length,H.length);b.value={showable:J,rolledUp:ue}};Vt(()=>{if(ne(),!!i.value){if(u.value=i.value.offsetWidth,x.value>=2&&[...o.actions||[],...o.groups||[]].length===m.value){ne();return}he()}});const he=()=>{if(v.value.length===0||u.value===0)return;const H=[...o.actions||[],...o.groups||[]];if(H.length===1){b.value={showable:H,rolledUp:[]};return}let J=u.value,ue=[],ve=[];H.forEach((ge,Ve)=>{if(v.value[Ve]+r.value+n+w.value<=J)J-=v.value[Ve]+n*2,ue=[...ue,ge];else{if(J=0,ge===S.value)return;ve=[...ve,ge]}}),b.value={showable:ue,rolledUp:ve},x.value+=1,m.value=H.length},te=()=>{Rt(()=>{!i.value||(u.value=i.value.offsetWidth,x.value=0,he())},50,{leading:!1,trailing:!0})};function Ne(H){return"title"in H}return(H,J)=>(l(),d("div",{ref_key:"actionsLayoutRef",ref:i,class:c(a(Ab).ActionsLayout)},[L(a(ot),{spacing:"extraTight"},{default:y(()=>[b.value.showable.length>0?(l(!0),d(Y,{key:0},be(b.value.showable,ue=>(l(),d(Y,{key:ue.content},[ue.content?(l(),A(a(Ps),pe({key:0},ue,{onGetOffsetWidth:B}),{default:y(()=>[re(W(ue.content),1)]),_:2},1040)):_("",!0)],64))),128)):_("",!0),(l(!0),d(Y,null,be(e.actions,ue=>(l(),d(Y,{key:ue.content},[!b.value.showable.length&&!b.value.rolledUp.includes(ue)?(l(),A(a(Ps),pe({key:0},ue,{onClick:ve=>ue.onAction?ue.onAction():void 0,onGetOffsetWidth:B}),{default:y(()=>[re(W(ue.content),1)]),_:2},1040,["onClick"])):_("",!0)],64))),128)),(l(!0),d(Y,null,be(a(U),ue=>(l(),A(a(Md),pe({key:ue.title},F(ue),{actions:z(ue),onOpen:I,onClose:E,onGetOffsetWidth:B}),null,16,["actions"]))),128))]),_:1}),L(a(Je),{event:"resize",handler:te})],2))}});Pd.__docgenInfo={exportName:"default",displayName:"Actions",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}]};const Pb={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Nb=k("path",{d:"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z"},null,-1),Bb=[Nb];function Ib(e,o){return l(),d("svg",Pb,Bb)}var Nd={render:Ib};const Db="Polaris-ActionMenu-RollupActions__RollupActivator";var $b={RollupActivator:Db};const Bd=P({props:{accessibilityLabel:null,items:null,sections:null},setup(e){const o=fe("lang"),n=C(!1),s=()=>{n.value=!n.value};return(i,r)=>{var u,m;return((u=e.items)==null?void 0:u.length)||((m=e.sections)==null?void 0:m.length)?(l(),A(a(tt),{key:0,active:n.value,preferredAlignment:"right",onClose:s,hideOnPrint:""},{activator:y(()=>[k("div",{class:c(a($b).RollupActivator)},[L(a(ye),{outline:"",icon:a(Nd),accessibilityLabel:e.accessibilityLabel||a(o).Polaris.ActionMenu.RollupActions.rollupButton,onClick:s},null,8,["icon","accessibilityLabel"])],2)]),content:y(()=>[L(a(Ze),{items:e.items,sections:e.sections,onActionAnyItem:s},null,8,["items","sections"])]),_:1},8,["active"])):_("",!0)}}});Bd.__docgenInfo={exportName:"default",displayName:"RollupActions",description:"",tags:{},props:[{name:"accessibilityLabel",description:"Accessibilty label",required:!1,type:{name:"string"}},{name:"items",description:"Collection of actions for the list",required:!1,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"Array",elements:[{name:"ActionListSection"}]}}]};const Fb={inheritAttrs:!1},Id=P(N(g({},Fb),{props:{actions:null,groups:null,rollup:{type:Boolean},rollupActionsLabel:null},setup(e){const o=e,n=p(()=>O(Sb.ActionMenu)),s=p(()=>(o.groups||[]).map(r=>i(r)));function i({title:r,actions:u}){return{title:r,items:u}}return(r,u)=>e.actions&&e.actions.length||e.groups&&e.groups.length?(l(),d("div",{key:0,class:c(a(n))},[e.rollup?(l(),A(a(Bd),{key:0,accessibilityLabel:e.rollupActionsLabel,items:e.actions,sections:a(s)},null,8,["accessibilityLabel","items","sections"])):(l(),A(a(Pd),{key:1,actions:e.actions,groups:e.groups},null,8,["actions","groups"]))],2)):_("",!0)}}));Id.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"rollup",description:"Roll up all actions into a Popover > ActionList",required:!1,type:{name:"boolean"}},{name:"rollupActionsLabel",description:"Label for rolled up actions activator",required:!1,type:{name:"string"}}]};const Rc="data-lock-scrolling",Vc="data-lock-scrolling-wrapper";let ys=0;class Eb{constructor(){this.scrollLocks=0,this.locked=!1}registerScrollLock(){this.scrollLocks+=1,this.handleScrollLocking()}unregisterScrollLock(){this.scrollLocks-=1,this.handleScrollLocking()}handleScrollLocking(){if(xr)return;const{scrollLocks:o}=this,{body:n}=document,s=n.firstElementChild;o===0?(n.removeAttribute(Rc),s&&s.removeAttribute(Vc),window.scroll(0,ys),this.locked=!1):o>0&&!this.locked&&(ys=window.pageYOffset,n.setAttribute(Rc,""),s&&(s.setAttribute(Vc,""),s.scrollTop=ys),this.locked=!0)}resetScrollPosition(){ys=0}}class Ob{constructor(o){this.idGenerators={},this.idGeneratorFactory=o}nextId(o){return this.idGenerators[o]||(this.idGenerators[o]=this.idGeneratorFactory(o)),this.idGenerators[o]()}}function qb(e=""){let o=1;return()=>`Polaris${e}${o++}`}const Rb={ActionMenu:{Actions:{moreActions:"More actions"},RollupActions:{rollupButton:"View actions"}},Avatar:{label:"Avatar",labelWithInitials:"Avatar with initials {initials}"},Autocomplete:{spinnerAccessibilityLabel:"Loading",ellipsis:"{content}\u2026"},Badge:{PROGRESS_LABELS:{incomplete:"Incomplete",partiallyComplete:"Partially complete",complete:"Complete"},STATUS_LABELS:{info:"Info",success:"Success",warning:"Warning",critical:"Critical",attention:"Attention",new:"New"},progressAndStatus:"{statusLabel} {progressLabel}"},Button:{spinnerAccessibilityLabel:"Loading",connectedDisclosureAccessibilityLabel:"Related actions"},Common:{checkbox:"checkbox",undo:"Undo",cancel:"Cancel",newWindowAccessibilityHint:"(opens a new window)",clear:"Clear",close:"Close",submit:"Submit",more:"More"},ContextualSaveBar:{save:"Save",discard:"Discard"},DataTable:{sortAccessibilityLabel:"sort {direction} by",navAccessibilityLabel:"Scroll table {direction} one column",totalsRowHeading:"Totals",totalRowHeading:"Total"},DatePicker:{previousMonth:"Show previous month, {previousMonthName} {showPreviousYear}",nextMonth:"Show next month, {nextMonth} {nextYear}",today:"Today ",start:"Start of range",end:"End of range",months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}},DiscardConfirmationModal:{title:"Discard all unsaved changes",message:"If you discard changes, you\u2019ll delete any edits you made since you last saved.",primaryAction:"Discard changes",secondaryAction:"Continue editing"},DropZone:{single:{overlayTextFile:"Drop file to upload",overlayTextImage:"Drop image to upload",actionTitleFile:"Add file",actionTitleImage:"Add image",actionHintFile:"or drop file to upload",actionHintImage:"or drop image to upload",labelFile:"Upload file",labelImage:"Upload image"},allowMultiple:{overlayTextFile:"Drop files to upload",overlayTextImage:"Drop images to upload",actionTitleFile:"Add files",actionTitleImage:"Add images",actionHintFile:"or drop files to upload",actionHintImage:"or drop images to upload",labelFile:"Upload files",labelImage:"Upload images"},errorOverlayTextFile:"File type is not valid",errorOverlayTextImage:"Image type is not valid"},EmptySearchResult:{altText:"Empty search results"},Frame:{skipToContent:"Skip to content",navigationLabel:"Navigation",Navigation:{closeMobileNavigationLabel:"Close navigation"}},Filters:{moreFilters:"More filters",moreFiltersWithCount:"More filters ({count})",filter:"Filter {resourceName}",noFiltersApplied:"No filters applied",cancel:"Cancel",done:"Done",clearAllFilters:"Clear all filters",clear:"Clear",clearLabel:"Clear {filterName}"},IndexProvider:{defaultItemSingular:"Item",defaultItemPlural:"Items",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} are selected.",selected:"{selectedItemsCount} selected",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}"},IndexTable:{emptySearchTitle:"No {resourceNamePlural} found",emptySearchDescription:"Try changing the filters or search term",onboardingBadgeText:"New",resourceLoadingAccessibilityLabel:"Loading {resourceNamePlural}\u2026",selectAllLabel:"Select all {resourceNamePlural}",selected:"{selectedItemsCount} selected",undo:"Undo",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural}",selectItem:"Select {resourceName}",selectButtonText:"Select"},Loading:{label:"Page loading bar"},Modal:{iFrameTitle:"body markup",modalWarning:"These required properties are missing from Modal: {missingProps}"},Page:{Header:{rollupActionsLabel:"View actions for {title}"}},Pagination:{previous:"Previous",next:"Next",pagination:"Pagination"},ProgressBar:{negativeWarningMessage:"Values passed to the progress prop shouldn\u2019t be negative. Resetting {progress} to 0.",exceedWarningMessage:"Values passed to the progress prop shouldn\u2019t exceed 100. Setting {progress} to 100."},ResourceList:{sortingLabel:"Sort by",defaultItemSingular:"item",defaultItemPlural:"items",showing:"Showing {itemsCount} {resource}",showingTotalCount:"Showing {itemsCount} of {totalItemsCount} {resource}",loading:"Loading {resource}",selected:"{selectedItemsCount} selected",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} in your store are selected.",allFilteredItemsSelected:"All {itemsLength}+ {resourceNamePlural} in this filter are selected.",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural} in your store",selectAllFilteredItems:"Select all {itemsLength}+ {resourceNamePlural} in this filter",emptySearchResultTitle:"No {resourceNamePlural} found",emptySearchResultDescription:"Try changing the filters or search term",selectButtonText:"Select",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}",ariaLiveSingular:"{itemsLength} item",ariaLivePlural:"{itemsLength} items",Item:{actionsDropdownLabel:"Actions for {accessibilityLabel}",actionsDropdown:"Actions dropdown",viewItem:"View details for {itemName}"},BulkActions:{actionsActivatorLabel:"Actions",moreActionsActivatorLabel:"More actions",warningMessage:"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions."}},SkeletonPage:{loadingLabel:"Page loading"},Tabs:{toggleTabsLabel:"More tabs"},Tag:{ariaLabel:"Remove {children}"},TextField:{characterCount:"{count} characters",characterCountWithMaxLength:"{count} of {limit} characters used"},TooltipOverlay:{accessibilityLabel:"Tooltip: {label}"},TopBar:{toggleMenuLabel:"Toggle menu",SearchField:{clearButtonLabel:"Clear",search:"Search"}},MediaCard:{popoverButton:"Actions"},VideoThumbnail:{playButtonA11yLabel:{default:"Play video",defaultWithDuration:"Play video of length {duration}",duration:{hours:{other:{only:"{hourCount} hours",andMinutes:"{hourCount} hours and {minuteCount} minutes",andMinute:"{hourCount} hours and {minuteCount} minute",minutesAndSeconds:"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hours, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hours, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hours and {secondCount} seconds",andSecond:"{hourCount} hours and {secondCount} second"},one:{only:"{hourCount} hour",andMinutes:"{hourCount} hour and {minuteCount} minutes",andMinute:"{hourCount} hour and {minuteCount} minute",minutesAndSeconds:"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hour, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hour, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hour and {secondCount} seconds",andSecond:"{hourCount} hour and {secondCount} second"}},minutes:{other:{only:"{minuteCount} minutes",andSeconds:"{minuteCount} minutes and {secondCount} seconds",andSecond:"{minuteCount} minutes and {secondCount} second"},one:{only:"{minuteCount} minute",andSeconds:"{minuteCount} minute and {secondCount} seconds",andSecond:"{minuteCount} minute and {secondCount} second"}},seconds:{other:"{secondCount} seconds",one:"{secondCount} second"}}}}};var cr={Polaris:Rb};class Dd{constructor(){ct(this,"portalIds",[])}register(o){this.portalIds.includes(o)||this.portalIds.push(o)}hasContainer(){return this.portalIds.length}}class Vb{constructor(){ct(this,"trapFocusList",[])}add(o){this.trapFocusList=[...this.trapFocusList,o]}remove(o){const n=this.trapFocusList.indexOf(o);return n>-1&&(this.trapFocusList=this.trapFocusList.splice(n,1)),n>-1}}const ur="light";const Hb=k("div",{id:"PolarisPortalsContainer"},null,-1),Vs=P({props:{colorScheme:{type:String,default:ur}},setup(e){const o=e,n=new Eb,s=new Dd,i=C(new Ob(qb)),r=new Vb,u=C(Pc().matches),m=()=>{document.body.setAttribute("p-color-scheme",o.colorScheme||ur),document.body.style.backgroundColor="var(--p-background)",document.body.style.color="var(--p-text)"},x=Rt(()=>{u.value!==Pc().matches&&(u.value=!u.value)},40,{trailing:!0,leading:!0,maxWait:40});return Ee(()=>o.colorScheme,(v,f)=>{v!==f&&m()}),Te(()=>{document!==null&&m()}),ze("mediaQueryContext",{isNavigationCollapsed:u.value}),ze("scrollLockManager",n),ze("portalManager",s),ze("uniqueIdFactory",i.value),ze("focusManager",r),ze("lang",cr),(v,f)=>(l(),A(a(Oo),{"color-scheme":e.colorScheme},{default:y(()=>[L(a(Je),{event:"resize",handler:a(x)},null,8,["handler"]),h(v.$slots,"default"),Hb]),_:3},8,["color-scheme"]))}});Vs.__docgenInfo={exportName:"default",displayName:"AppProvider",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}}],slots:[{name:"default"}]};const Ub="Polaris-Avatar",jb="Polaris-Avatar--hidden",zb="Polaris-Avatar--sizeExtraSmall",Wb="Polaris-Avatar--sizeSmall",Gb="Polaris-Avatar--sizeMedium",Xb="Polaris-Avatar--sizeLarge",Kb="Polaris-Avatar--styleOne",Yb="Polaris-Avatar--styleTwo",Zb="Polaris-Avatar--styleThree",Qb="Polaris-Avatar--styleFour",Jb="Polaris-Avatar--styleFive",ef="Polaris-Avatar--hasImage",tf="Polaris-Avatar__Image",af="Polaris-Avatar__Initials",of="Polaris-Avatar__Svg";var Wt={Avatar:Ub,hidden:jb,sizeExtraSmall:zb,sizeSmall:Wb,sizeMedium:Gb,sizeLarge:Xb,styleOne:Kb,styleTwo:Yb,styleThree:Zb,styleFour:Qb,styleFive:Jb,hasImage:ef,Image:tf,Initials:af,Svg:of};const jl=["one","two","three","four","five"];function nf(e){return e?jl[e.charCodeAt(0)%jl.length]:jl[0]}const sf=["src","srcSet","crossOrigin"],lf=["src","crossOrigin"],Eo=P({props:{source:null,crossOrigin:null,sourceSet:null},setup(e){const o=e,n=p(()=>o.sourceSet?o.sourceSet.map(({source:s,descriptor:i})=>`${s} ${i}`).join(","):null);return(s,i)=>a(n)?(l(),d("img",{key:0,src:e.source,srcSet:e.sourceSet,crossOrigin:e.crossOrigin},null,8,sf)):(l(),d("img",{key:1,src:e.source,crossOrigin:e.crossOrigin},null,8,lf))}});Eo.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"source",required:!0,type:{name:"string"}},{name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},{name:"sourceSet",required:!1,type:{name:"Array",elements:[{name:"SourceSet"}]}}]};const rf=["aria-label"],fn=P({props:{size:{default:"medium"},name:{default:void 0},initials:{default:void 0},customer:{type:Boolean,default:void 0},source:{default:void 0},accessibilityLabel:{default:void 0}},emits:["error"],setup(e,{emit:o}){const n=e,s=C("PENDING"),i="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z",r="0.35em",u=p(()=>n.source&&s.value!=="ERRORED"),m=p(()=>{const b=Le("size",n.size),T=Le("style",nf(n.name||n.initials));return O(Wt.Avatar,b&&Wt[b],!n.customer&&Wt[T],(u.value||n.initials&&n.initials.length===0)&&s.value!=="LOADED"&&Wt.hidden,u.value&&Wt.hasImage)}),x=p(()=>n.accessibilityLabel?n.accessibilityLabel:n.name?n.name:n.initials?`Avatar with initials ${n.initials.split("").join(" ")}`:"Avatar"),v=()=>{s.value="LOADED"},f=()=>{s.value="ERRORED",o("error")};return(b,T)=>(l(),d("span",{"aria-label":a(x),role:"img",class:c(a(m))},[a(u)?_("",!0):(l(),d("span",{key:0,class:c(a(Wt).Initials)},[(l(),d("svg",{class:c(a(Wt).Svg),viewBox:"0 0 40 40"},[e.customer||!e.initials?(l(),d("path",{key:0,fill:"currentColor",d:i})):(l(),d("text",{key:1,x:"50%",y:"50%",dy:r,fill:"currentColor","font-size":"20","text-anchor":"middle"},W(e.initials),1))],2))],2)),e.source&&s.value!=="ERRORED"?(l(),A(a(Eo),{key:1,class:c(a(Wt).Image),source:e.source,alt:"",role:"presentation",onLoad:v,onError:f},null,8,["class","source"])):_("",!0)],10,rf))}});fn.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",description:"Size of avatar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"name",description:"The name of the person",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"initials",description:"Initials of person to display",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"customer",description:"Whether the avatar is for a customer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"source",description:"URL of the avatar image which falls back to initials if the image fails to load",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"accessibilityLabel",description:"Accessible label for the avatar image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"error"}]};const cf="Polaris-Backdrop",uf="Polaris-Backdrop--transparent",df="Polaris-Backdrop--belowNavigation";var zl={Backdrop:cf,transparent:uf,belowNavigation:df};const pf={inheritAttrs:!1,render(){return null}},Lr=P(N(g({},pf),{setup(e){const o=fe("scrollLockManager");return Te(()=>{o.registerScrollLock()}),lt(()=>{o.unregisterScrollLock()}),()=>{}}}));Lr.__docgenInfo={exportName:"default",displayName:"ScrollLock",description:"",tags:{}};const wr=P({props:{belowNavigation:{type:Boolean},transparent:{type:Boolean}},setup(e){const o=e,n=p(()=>O(zl.Backdrop,o.belowNavigation&&zl.belowNavigation,o.transparent&&zl.transparent));return(s,i)=>(l(),d("div",{class:c(a(n))},[L(a(Lr))],2))}});wr.__docgenInfo={exportName:"default",displayName:"Backdrop",description:"",tags:{},props:[{name:"belowNavigation",required:!1,type:{name:"boolean"}},{name:"transparent",required:!1,type:{name:"boolean"}}]};const mf="Polaris-Breadcrumbs__Breadcrumb",yf="Polaris-Breadcrumbs__Icon",gf="Polaris-Breadcrumbs__Content";var gs={Breadcrumb:mf,Icon:yf,Content:gf};const hf={key:0,role:"navigation"},bf=["aria-label"],$d=P({props:{breadcrumbs:null},setup(e){const o=e,n=C(o.breadcrumbs[o.breadcrumbs.length-1]),s=p(()=>{const{url:r}=n.value;return r}),i=p(()=>{const{onAction:r}=n.value;return r});return(r,u)=>n.value?(l(),d("nav",hf,[a(s)?(l(),A(a(_t),{key:n.value.content,url:a(s),class:c(a(gs).Breadcrumb),"aria-label":n.value.accessibilityLabel,onMouseup:a(qt)},{default:y(()=>[k("span",{class:c(a(gs).Icon)},[L(a(le),{source:a($o)},null,8,["source"])],2),L(a(et),null,{default:y(()=>[re(W(n.value.content),1)]),_:1})]),_:1},8,["url","class","aria-label","onMouseup"])):(l(),d("button",{type:"button",key:n.value.content,class:c(a(gs).Breadcrumb),"aria-label":n.value.accessibilityLabel,onMouseup:u[0]||(u[0]=(...m)=>a(qt)&&a(qt)(...m)),onClick:u[1]||(u[1]=(...m)=>a(i)&&a(i)(...m))},[k("span",{class:c(a(gs).Icon)},[L(a(le),{source:a($o)},null,8,["source"])],2),L(a(et),null,{default:y(()=>[re(W(n.value.content),1)]),_:1})],42,bf))])):_("",!0)}});$d.__docgenInfo={exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const ff="Polaris-Button",vf="Polaris-Button--pressed",xf="Polaris-Button--disabled",Tf="Polaris-Button--connectedDisclosure",Sf="Polaris-Button__Content",Cf="Polaris-Button--plain",Af="Polaris-Button--textAlignLeft",kf="Polaris-Button--textAlignCenter",Lf="Polaris-Button--textAlignRight",wf="Polaris-Button__Icon",_f="Polaris-Button--fullWidth",Mf="Polaris-Button--hidden",Pf="Polaris-Button__Spinner",Nf="Polaris-Button--primary",Bf="Polaris-Button--destructive",If="Polaris-Button--outline",Df="Polaris-Button--loading",$f="Polaris-Button--removeUnderline",Ff="Polaris-Button--iconOnly",Ef="Polaris-Button--sizeSlim",Of="Polaris-Button--sizeLarge",qf="Polaris-Button--monochrome",Rf="Polaris-Button__Text",Vf="Polaris-Button__ConnectedDisclosureWrapper",Hf="Polaris-Button__ConnectedDisclosure";var Ce={Button:ff,pressed:vf,disabled:xf,connectedDisclosure:Tf,Content:Sf,plain:Cf,textAlignLeft:Af,textAlignCenter:kf,textAlignRight:Lf,Icon:wf,fullWidth:_f,hidden:Mf,Spinner:Pf,primary:Nf,destructive:Bf,outline:If,loading:Df,removeUnderline:$f,iconOnly:Ff,sizeSlim:Ef,sizeLarge:Of,monochrome:qf,Text:Rf,ConnectedDisclosureWrapper:Vf,ConnectedDisclosure:Hf},Yt=(e=>(e[e.Click=0]="Click",e[e.EscapeKeypress=1]="EscapeKeypress",e[e.FocusOut=2]="FocusOut",e[e.ScrollOut=3]="ScrollOut",e))(Yt||{}),Tt=(e=>(e.Entering="entering",e.Entered="entered",e.Exiting="exiting",e.Exited="exited",e))(Tt||{});function Hc(e,o){if(e===o)return!0;let n=o.parentNode;for(;n!=null;){if(n===e)return!0;n=n.parentNode}return!1}function Uf(e,{id:o,active:n=!1,ariaHaspopup:s,activatorDisabled:i=!1}){i||(e.tabIndex=e.tabIndex||0),e.setAttribute("aria-controls",o),e.setAttribute("aria-owns",o),e.setAttribute("aria-expanded",String(n)),s!=null&&e.setAttribute("aria-haspopup",String(s))}const jf="Polaris-PositionedOverlay",zf="Polaris-PositionedOverlay--fixed",Wf="Polaris-PositionedOverlay--calculating",Gf="Polaris-PositionedOverlay--preventInteraction";var Wl={PositionedOverlay:jf,fixed:zf,calculating:Wf,preventInteraction:Gf};const Xf="Polaris-Popover",Kf="Polaris-Popover__PopoverOverlay",Yf="Polaris-Popover--measuring",Zf="Polaris-Popover--fullWidth",Qf="Polaris-Popover__Content",Jf="Polaris-Popover--positionedAbove",ev="Polaris-Popover__Wrapper",tv="Polaris-Popover__Pane",av="Polaris-Popover__Section",ov="Polaris-Popover__FocusTracker";var Ke={Popover:Xf,PopoverOverlay:Kf,"PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",measuring:Yf,fullWidth:Zf,Content:Qf,positionedAbove:Jf,Wrapper:ev,"Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:tv,"Pane-fixed":"Polaris-Popover__Pane--fixed",Section:av,FocusTracker:ov,"PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"};const nv="Polaris-Tooltip-TooltipOverlay",sv="Polaris-Tooltip-TooltipOverlay--measuring",iv="Polaris-Tooltip-TooltipOverlay--positionedAbove",lv="Polaris-Tooltip-TooltipOverlay__Content";var vs={TooltipOverlay:nv,measuring:sv,positionedAbove:iv,Content:lv};function rv(e,o,n,s,i,r,u,m=0){const x=e.top,v=x+e.height,f=e.top-m,b=i.height-e.top-e.height,T=o.height,S=n.activator+n.container,w=n.container,B=e.top-Math.max(s.top,0),I=i.top+Math.min(i.height,s.top+s.height)-(e.top+e.height),E=B>=w,q=I>=w,U=Math.min(b,T),K=Math.min(f,T),D=u?0:i.top,X={height:K-S,top:x+D-K,positioning:"above"},F={height:U-S,top:v+D,positioning:"below"};return r==="above"?(E||B>=I&&!q)&&(f>T||f>b)?X:F:r==="below"?(q||I>=B&&!E)&&(b>T||b>f)?F:X:E&&q?f>b?X:F:B>w?X:F}function cv(e,o,n,s,i){const r=n.width-o.width;if(i==="left")return Math.min(r,Math.max(0,e.left-s.horizontal));if(i==="right"){const u=n.width-(e.left+e.width);return Math.min(r,Math.max(0,u-s.horizontal))}return Math.min(r,Math.max(0,e.center.x-o.width/2))}function uv(e,o){const{center:n}=e;return n.y<o.top||n.y>o.top+o.height}function Fd(){return new ga({top:window.scrollY,left:window.scrollX,height:window.innerHeight,width:document.body.clientWidth})}function dv(e,o=Fd()){const n=Math.max(e.top,0),s=Math.max(e.left,0),i=Math.min(e.top+e.height,o.height),r=Math.min(e.left+e.width,o.width);return new ga({top:n,left:s,height:i-n,width:r-s})}function pv(e){return e===document}function mv(e){const o=window.getComputedStyle(e);return{activator:parseFloat(o.marginTop||"0"),container:parseFloat(o.marginBottom||"0"),horizontal:parseFloat(o.marginLeft||"0")}}function yv(e){const o=e.closest(Cs.selector)||document.body,n=o===document.body?"auto":parseInt(window.getComputedStyle(o).zIndex||"0",10);return n==="auto"||Number.isNaN(n)?null:n}const gv={inheritAttrs:!1,render(){return null}},Je=P(N(g({},gv),{props:{event:{type:String,required:!0},capture:{type:Boolean},passive:{type:Boolean},handler:{type:Function,required:!0}},setup(e){const o=e;function n(){const{event:i,capture:r,passive:u,handler:m}=o;window.addEventListener(i,m,{capture:r,passive:u})}function s(i){const{event:r,handler:u,capture:m}=i||o;window.removeEventListener(r,u,m)}return Ee(()=>g({},o),(i,r)=>{i!==r&&(s(r),n())}),Te(()=>n()),lt(()=>s()),()=>{}}}));Je.__docgenInfo={exportName:"default",displayName:"EventListener",description:"",tags:{},props:[{name:"event",type:{name:"string"},required:!0},{name:"capture",type:{name:"boolean"}},{name:"passive",type:{name:"boolean"}},{name:"handler",type:{name:"Function as unknown as () => BaseEventProps['handler']"},required:!0}]};function hv(e){const o=e.closest(Es.selector);return o instanceof HTMLElement?o:document}const bv={inheritAttrs:!1},_r=P(N(g({},bv),{props:{active:{type:Boolean},activator:null,preferInputActivator:{type:Boolean},preferredPosition:null,preferredAlignment:null,fullWidth:{type:Boolean},fixed:{type:Boolean},preventInteraction:{type:Boolean},classNames:null,zIndexOverride:null,hideOnPrint:{type:Boolean},layout:null},emits:["change-content-styles","scroll-out"],setup(e,{emit:o}){const n=e,s={childList:!0,subtree:!0,characterData:!0},i=C(null),r=C(null),u=C(null),m=C(0),x=C(0),v=C(null),f=C(null),b=C(!0),T=C("below"),S=C(Et(n.activator)),w=C(!1),B=C(!1),I=C(null),E=C(null),q=p(()=>{const F=n.classNames;return O(Wl.PositionedOverlay,n.fixed&&Wl.fixed,n.preventInteraction&&Wl.preventInteraction,F)}),U=p(()=>O(Ke.Popover,T.value==="above"&&Ke.positionedAbove,n.fullWidth&&Ke.fullWidth,b.value&&Ke.measuring,n.hideOnPrint&&Ke["PopoverOverlay-hideOnPrint"])),K=p(()=>O(vs.TooltipOverlay,b.value&&vs.measuring,T.value==="above"&&vs.positionedAbove)),D=p(()=>({top:m.value==null||Number.isNaN(m.value)?void 0:`${m.value}px`,left:u.value==null||Number.isNaN(u.value)?void 0:`${u.value}px`,right:r.value==null||Number.isNaN(r.value)?void 0:`${r.value}px`,width:v.value==null||Number.isNaN(v.value)?void 0:`${v.value}px`,zIndex:n.zIndexOverride||f.value||void 0})),X=()=>{if(E.value&&E.value.disconnect(),x.value=0,T.value="below",b.value=!0,i.value&&I.value){const{activator:F,preferredPosition:z="below",preferredAlignment:ne="center",fullWidth:he,fixed:te,preferInputActivator:Ne=!0}=n,H=Ne&&F.querySelector("input")||F,J=Et(H),ue=Et(i.value),ve=pv(I.value)?document.body:I.value,ge=Et(ve),Ve=he?new ga(N(g({},ue),{width:J.width})):ue;ve===document.body&&(ge.height=document.body.scrollHeight);let me=0;const Se=ve.querySelector(`${fr.selector}`);Se&&(me=Se.clientHeight);const ee=i.value.firstElementChild&&i.value.firstChild?mv(i.value.firstElementChild):{activator:0,container:0,horizontal:0},xe=Fd(),Be=yv(F),$e=Be==null?Be:Be+1,_e=rv(J,Ve,ee,ge,xe,z,te,me),st=cv(J,Ve,xe,ee,ne);b.value=!1,S.value=Et(F),u.value=ne!=="right"?st:null,r.value=ne==="right"?st:null,m.value=w.value?m.value:_e.top,w.value=Boolean(te),x.value=_e.height||0,v.value=he?Ve.width:null,T.value=_e.positioning,B.value=uv(J,dv(ge)),f.value=$e,o("change-content-styles",{desiredHeight:x.value}),E.value&&(E.value.observe(i.value,s),E.value.observe(F,s))}};return ud(()=>{E.value=new MutationObserver(X)}),Vt(()=>{n.active&&m.value!==0&&B.value&&o("scroll-out")}),Te(()=>{I.value=hv(n.activator),I.value&&!n.fixed&&I.value.addEventListener("scroll",X),X()}),lt(()=>{I.value&&!n.fixed&&I.value.removeEventListener("scroll",X)}),(F,z)=>(l(),d("div",{class:c(a(q)),style:Fe(a(D)),ref_key:"overlayRef",ref:i},[e.layout==="tooltip"?(l(),d("div",pe({key:0,class:a(K)},g({},a(Cs).props)),[h(F.$slots,"default")],16)):(l(),d("div",pe({key:1,class:a(U)},g({},a(Uy).props)),[h(F.$slots,"default")],16)),L(a(Je),{event:"resize",handler:X})],6))}}));_r.__docgenInfo={exportName:"default",displayName:"PositionedOverlay",description:"",tags:{},props:[{name:"active",required:!0,type:{name:"boolean"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}},{name:"preferredAlignment",required:!1,type:{name:"PreferredAlignment"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"boolean"}},{name:"classNames",required:!1,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"layout",required:!1,type:{name:"string"}}],events:[{name:"change-content-styles",type:{names:["Record"]}},{name:"scroll-out"}],slots:[{name:"default"}]};const Oo=P({props:{colorScheme:{type:String,default:ur},as:{type:String,default:"div"}},setup(e){return(o,n)=>(l(),d(Y,null,[(l(),A(Ie("style"),{"data-polaris-custom-properties":"",innerHTML:a(jy)},null,8,["innerHTML"])),(l(),A(Ie(e.as),pe(o.$attrs,{"p-color-scheme":e.colorScheme,style:{color:"var(--p-text-color)"}}),{default:y(()=>[h(o.$slots,"default")]),_:3},16,["p-color-scheme","style"]))],64))}});Oo.__docgenInfo={exportName:"default",displayName:"CustomProperties",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}},{name:"as",type:{name:"String as () => CustomPropertiesProps['as']"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}]};const gn=P({setup(e){return(o,n)=>(l(),d("div",{class:c(a(Ke).Section)},[h(o.$slots,"default")],2))}});gn.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},slots:[{name:"default"}]};const Hs=P({props:{fixed:{type:Boolean},sectioned:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=p(()=>O(Ke.Pane,n.fixed&&Ke["Pane-fixed"]));return(i,r)=>e.fixed?(l(),d("div",{key:0,class:c(a(s))},[e.sectioned?(l(),A(a(gn),{key:0},{default:y(()=>[h(i.$slots,"default")]),_:3})):h(i.$slots,"default",{key:1})],2)):(l(),A(a(Ut),{key:1,shadow:"",class:c(a(s)),onScrolledToBottom:r[0]||(r[0]=u=>o("scrolled-to-bottom"))},{default:y(()=>[e.sectioned?(l(),A(a(gn),{key:0},{default:y(()=>[h(i.$slots,"default")]),_:3})):h(i.$slots,"default",{key:1})]),_:3},8,["class"]))}});Hs.__docgenInfo={exportName:"default",displayName:"Pane",description:"",tags:{},props:[{name:"fixed",required:!1,type:{name:"boolean"}},{name:"sectioned",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};const fv=["id","tabIndex"],vv={inheritAttrs:!1},Ed=P(N(g({},vv),{props:{fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},preferredPosition:{default:"below"},preferredAlignment:{default:"center"},active:{type:Boolean},id:null,zIndexOverride:{default:void 0},activator:null,preferInputActivator:{default:!0},sectioned:{type:Boolean},fixed:{type:Boolean},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=C(Tt.Exited),i=C(null),r=C(null),u=C(null),m=C({}),x=U=>{s.value=U,i.value&&i.value.getBoundingClientRect()},v=()=>{r.value&&window.clearTimeout(r.value),u.value&&window.clearTimeout(u.value)};Ee(()=>n.active,()=>{const U=n.active?Tt.Entering:Tt.Exiting,K=n.active?Tt.Entered:Tt.Exited;x(U),v();const D=window.setTimeout(()=>{s.value=K},parseInt(Ss.motion["duration-100"],10));n.active?r.value=D:u.value=D});const f=p(()=>O(Ke.PopoverOverlay,s.value===Tt.Entering&&Ke["PopoverOverlay-entering"],s.value===Tt.Entered&&Ke["PopoverOverlay-open"],s.value===Tt.Exiting&&Ke["PopoverOverlay-exiting"])),b=p(()=>O(Ke.Content,n.fullHeight&&Ke["Content-fullHeight"],n.fluidContent&&Ke["Content-fluidContent"])),T=()=>{o("close",Yt.ScrollOut)},S=()=>{o("close",Yt.EscapeKeypress)},w=U=>{const K=U.target,D=i.value&&Hc(i.value,K),X=Hc(n.activator,K);D||X||s.value!==Tt.Entered||o("close",Yt.Click)},B=()=>{o("close",Yt.FocusOut)},I=()=>{o("close",Yt.FocusOut)},E=U=>{m.value={desiredHeight:`${U.height}px`}},q=()=>{n.autofocusTarget==="none"||!i.value||requestAnimationFrame(()=>{if(i.value){const U=Ar(i.value);U&&n.autofocusTarget==="first-node"?U.focus():i.value.focus()}})};return Te(()=>{n.active&&(q(),x(Tt.Entered))}),lt(()=>{v()}),(U,K)=>(l(),A(a(_r),{id:e.id,fullWidth:e.fullWidth,active:e.active,activator:e.activator,classNames:a(f),preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,onScrollOut:T,onChangeContentStyles:E},{default:y(()=>[k("div",{class:c(a(Ke).FocusTracker),tabIndex:"0",onFocus:B},null,34),L(a(Oo),{"color-scheme":e.colorScheme},{default:y(()=>[k("div",{class:c(a(Ke).Wrapper)},[k("div",{id:e.id,tabIndex:e.autofocusTarget==="none"?void 0:-1,style:Fe(m.value),class:c(a(b)),ref_key:"contentRef",ref:i},[h(U.$slots,"extra-content"),L(a(Hs),{sectioned:e.sectioned,fixed:e.fixed,onScrolledToBottom:K[0]||(K[0]=D=>U.$emit("scrolled-to-bottom"))},{default:y(()=>[h(U.$slots,"overlay")]),_:3},8,["sectioned","fixed"])],14,fv)],2),k("div",{class:c(a(Ke).FocusTracker),tabIndex:"0",onFocus:I},null,34),L(a(Je),{event:"click",handler:w}),L(a(Je),{event:"touchstart",handler:w}),L(a(mt),{keyCode:a(qe).Escape,handler:S},null,8,["keyCode"])]),_:3},8,["color-scheme"])]),_:3},8,["id","fullWidth","active","activator","classNames","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride"]))}}));Ed.__docgenInfo={exportName:"default",displayName:"PopoverOverlay",description:"",tags:{},props:[{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"fluidContent",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"preferredAlignment",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'center'"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"colorScheme",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"scrolled-to-bottom"},{name:"close",type:{names:["PopoverCloseSource"]}}],slots:[{name:"extra-content"},{name:"overlay"}]};const xv=["data-portal-id"],Tv={inheritAttrs:!1},vn=P(N(g({},Tv),{props:{idPrefix:{type:String,default:""}},setup(e){const o=e,n=fe("portalManager",new Dd),s=C(""),{useUniqueId:i}=De();return Te(()=>{const r=i("portal");s.value=o.idPrefix?`${o.idPrefix}-${r}`:r,n&&n.register(s.value)}),(r,u)=>a(n)?(l(),A(zy,{key:0,to:"#PolarisPortalsContainer"},[k("div",{"data-portal-id":s.value},[h(r.$slots,"default")],8,xv)])):_("",!0)}}));vn.__docgenInfo={exportName:"default",displayName:"Portal",description:"",tags:{},props:[{name:"idPrefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}]};const Sv={inheritAttrs:!1},tt=P(N(g({},Sv),{props:{preferredPosition:{default:void 0},preferredAlignment:{default:void 0},active:{type:Boolean},preferInputActivator:{default:!0},activatorWrapper:{default:"div"},zIndexOverride:{default:void 0},preventFocusOnClose:{type:Boolean},sectioned:{type:Boolean},fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},fixed:{type:Boolean},ariaHaspopup:{default:void 0},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=C(null),i=C(null),{useUniqueId:r}=De();Ht();const u=C(r("popover")),m=()=>{if(s.value){const f=s.value,T=Ul(f)||f,S="disabled"in T&&Boolean(T.disabled);Uf(T,{id:u.value,active:n.active,ariaHaspopup:n.ariaHaspopup,activatorDisabled:S})}};Ee(()=>n.active,()=>m());const x=f=>{let{parentElement:b}=f;for(;b;){if(b.matches(dd.selector))return!1;b=b.parentElement}return!0},v=f=>{if(o("close",f),!(!s.value||n.preventFocusOnClose)&&(f===Yt.FocusOut||f===Yt.EscapeKeypress)&&i.value){const b=Ul(i.value)||Ul(s.value)||s.value;Xg(b,x)||b.focus()}};return Te(()=>{if(s.value){const f=s.value.firstElementChild;f&&(i.value=f),m()}}),(f,b)=>(l(),A(Ie(e.activatorWrapper),{ref_key:"container",ref:s},{default:y(()=>[h(f.$slots,"activator"),i.value&&e.active?(l(),A(a(vn),{key:0,idPrefix:"popover"},{default:y(()=>[L(a(Ed),{id:u.value,activator:i.value,fullWidth:e.fullWidth,active:e.active,preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,autofocusTarget:e.autofocusTarget,sectioned:e.sectioned,colorScheme:e.colorScheme,onClose:v,onScrolledToBottom:b[0]||(b[0]=T=>o("scrolled-to-bottom"))},{overlay:y(T=>[h(f.$slots,"content")]),"extra-content":y(()=>[h(f.$slots,"extra-content")]),_:3},8,["id","activator","fullWidth","active","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride","autofocusTarget","sectioned","colorScheme"])]),_:3})):_("",!0)]),_:3},512))}}));tt.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"preferredPosition",description:"The preferred direction to open the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Show or hide the Popover",required:!0,type:{name:"boolean"}},{name:"preferInputActivator",description:"Use the activator's input element to calculate the Popover position",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"activatorWrapper",description:"The element type to wrap the activator with",tags:{default:[{description:"'div'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"zIndexOverride",description:"Override on the default z-index of 400",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"preventFocusOnClose",description:`Prevents focusing the activator or the next focusable element
when the popover is deactivated`,required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically add wrap content in a section",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow popover to stretch to the full width of its activator",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Allow popover to stretch to fit content vertically",required:!1,type:{name:"boolean"}},{name:"fluidContent",description:"Allow popover content to determine the overlay width and height",required:!1,type:{name:"boolean"}},{name:"fixed",description:"Remains in a fixed position",required:!1,type:{name:"boolean"}},{name:"ariaHaspopup",description:"Used to illustrate the type of popover element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnPrint",description:"Allow the popover overlay to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",tags:{default:[{description:"'container'",title:"default"}]},required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"close",type:{names:["PopoverCloseSource"]}},{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"content"},{name:"extra-content"}]};const Cv=["role","type","disabled","aria-busy","aria-controls","aria-expanded","aria-describedby","aria-pressed"],Av={inheritAttrs:!1},Mr=P(N(g({},Av),{props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,className:null,others:null},setup(e){const o=e,n=Ht(),s=x=>{const v={mouseup:qt};return x.forEach(f=>{const b=`on${Tr.exports.capitalize(f)}`;n[b]&&(v[f]=n[b])}),v},i=s(["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"]),r=s(["blur","click","focus","mouseover","touchstart"]),u=p(()=>({id:o.id,class:o.className,"aria-label":o.accessibilityLabel})),m=p(()=>N(g(g({},u.value),o.others),{role:o.role}));return(x,v)=>e.url&&e.disabled?(l(),d("a",Ye(pe({key:0},a(u))),[h(x.$slots,"default")],16)):e.url&&!e.disabled?(l(),A(a(_t),pe({key:1},a(m),{url:e.url,external:e.external,download:e.download},yn(a(r))),{default:y(()=>[h(x.$slots,"default")]),_:3},16,["url","external","download"])):(l(),d("button",pe({key:2},a(u),{role:e.role,type:e.submit?"submit":"button",disabled:e.disabled,"aria-busy":e.loading?!0:void 0,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-describedby":e.ariaDescribedBy,"aria-pressed":e.pressed},yn(a(i))),[h(x.$slots,"default")],16,Cv))}}));Mr.__docgenInfo={exportName:"default",displayName:"UnstyledButton",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"className",required:!1,type:{name:"string"}},{name:"others",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"default"}]};const kv=P({props:{action:null,overrides:null,keyProp:null},setup(e){const o=e,n=p(()=>{const u=o.action,{content:s,onAction:i}=u,r=Q(u,["content","onAction"]);return g(g({},r),o.overrides)});return(s,i)=>(l(),A(Mr,pe({key:e.keyProp},a(n),{onClick:e.action.onAction}),{default:y(()=>[re(W(e.action.content),1)]),_:1},16,["onClick"]))}});kv.__docgenInfo={exportName:"default",displayName:"UnstyledButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"UnstyledButtonProps"}]}},{name:"keyProp",required:!1,type:{name:"any"}}]};const Lv={viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},wv=k("path",{d:"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"},null,-1),_v=[wv];function Mv(e,o){return l(),d("svg",Lv,_v)}var Pv={render:Mv};const Nv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Bv=k("path",{d:"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"},null,-1),Iv=[Bv];function Dv(e,o){return l(),d("svg",Nv,Iv)}var $v={render:Dv};const Fv="Polaris-Spinner",Ev="Polaris-Spinner--sizeSmall",Ov="Polaris-Spinner--sizeLarge";var Uc={Spinner:Fv,sizeSmall:Ev,sizeLarge:Ov};const Jt=P({props:{size:{type:String,default:"large"},accessibilityLabel:{type:String,default:null},hasFocusableParent:{type:Boolean}},setup(e){const o=e,n=C(g({},!o.hasFocusableParent&&{role:"status"})),s=p(()=>{const i=Le("size",o.size);return O(Uc.Spinner,o.size&&Uc[i])});return(i,r)=>(l(),d("div",null,[k("span",{class:c(a(s))},[e.size==="large"?(l(),A(a(Pv),{key:0})):(l(),A(a($v),{key:1}))],2),k("span",Ye(St(n.value)),[L(a(et),null,{default:y(()=>[k("span",null,W(e.accessibilityLabel),1)]),_:1})],16)]))}});Jt.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size of the spinner",tags:{},values:["small | large"],type:{name:"String as () => Size"},defaultValue:{func:!1,value:"'large'"}},{name:"accessibilityLabel",description:"Accessible label for the spinner",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasFocusableParent",description:"Allows the component to apply the correct accessibility roles based on focus",type:{name:"boolean"}}]};const qv={inheritAttrs:!1},dr=P(N(g({},qv),{props:{commonProps:null,linkProps:null,actionProps:null,removeUnderline:null,children:{type:Boolean},disclosure:null,loading:null,icon:null},setup(e){const o=e,n=Ht(),s=p(()=>{const m=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],x={};return m.forEach(v=>{const f=`on${Tr.exports.capitalize(v)}`;n[f]&&(x[v]=n[f])}),x}),i=p(()=>O(Ce.Icon,o.loading&&Ce.hidden)),r=p(()=>O(Ce.Text,o.removeUnderline&&Ce.removeUnderline)),u=p(()=>o.disclosure==="select"?pd:o.disclosure==="up"?md:Sr);return(m,x)=>(l(),A(a(Mr),pe(g(g(g({},e.commonProps),e.linkProps),e.actionProps),yn(a(s))),{default:y(()=>[k("span",{class:c(a(Ce).Content)},[e.loading?(l(),d("span",{key:0,class:c(a(Ce).Spinner)},[L(a(Jt),{size:"small",accessibilityLabel:"Loading"})],2)):_("",!0),e.icon?(l(),d("span",{key:1,class:c(a(i))},[L(a(le),{source:e.loading?"placeholder":e.icon},null,8,["source"])],2)):_("",!0),e.children?(l(),d("span",{class:c(a(r)),key:e.actionProps&&e.actionProps.disabled?"text-disabled":"text"},[h(m.$slots,"default")],2)):_("",!0),e.disclosure?(l(),d("span",{key:3,class:c(a(Ce).Icon)},[k("div",null,[L(a(le),{source:e.loading?"placeholder":a(u)},null,8,["source"])])],2)):_("",!0)],2)]),_:3},16))}}));dr.__docgenInfo={exportName:"default",displayName:"ButtonMarkup",description:"",tags:{},props:[{name:"commonProps",required:!1,type:{name:"CommonButtonProps"}},{name:"linkProps",required:!1,type:{name:"LinkButtonProps"}},{name:"actionProps",required:!1,type:{name:"ActionButtonProps"}},{name:"removeUnderline",required:!1,type:{name:"TSIndexedAccessType"}},{name:"children",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"TSIndexedAccessType"}},{name:"loading",required:!1,type:{name:"TSIndexedAccessType"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}]};const Rv=["disabled","aria-label","aria-describedby"],Vv={inheritAttrs:!1},ye=P(N(g({},Vv),{props:{id:null,url:{default:""},external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:{default:"medium"},textAlign:{default:void 0},outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean],default:void 0},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},setup(e){const o=e,n=ce(),s=Ht(),i=p(()=>{const I=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],E={};return I.forEach(q=>{const U=`on${Tr.exports.capitalize(q)}`;s[U]&&(E[q]=s[U])}),E}),r=!!n.default,u=C(!1),m=p(()=>o.disabled||o.loading),x=p(()=>{const I=o.textAlign&&Le("textAlign",o.textAlign),E=o.size&&Le("size",o.size);return O(Ce.Button,o.primary&&Ce.primary,o.outline&&Ce.outline,o.destructive&&Ce.destructive,m.value&&Ce.disabled,o.loading&&Ce.loading,o.plain&&Ce.plain,o.pressed&&!o.disabled&&!o.url&&Ce.pressed,o.monochrome&&Ce.monochrome,o.size!=="medium"&&E&&Ce[E],I&&Ce[I],o.fullWidth&&Ce.fullWidth,o.icon&&!r&&Ce.iconOnly,o.connectedDisclosure&&Ce.connectedDisclosure,o.removeUnderline&&Ce.removeUnderline)}),v=p(()=>{const I=o.textAlign&&Le("textAlign",o.textAlign),E=o.size&&Le("size",o.size);return O(Ce.Button,o.primary&&Ce.primary,o.outline&&Ce.outline,o.size!=="medium"&&E&&Ce[E],I&&Ce[I],o.destructive&&Ce.destructive,o.connectedDisclosure&&o.connectedDisclosure.disabled&&Ce.disabled,Ce.iconOnly,Ce.ConnectedDisclosure,o.monochrome&&Ce.monochrome)}),f=p(()=>{const{id:I,accessibilityLabel:E,role:q,ariaDescribedBy:U}=o;return{id:I,className:x.value,accessibilityLabel:E,role:q,ariaDescribedBy:U}}),b=p(()=>{const{url:I,external:E,download:q}=o;return{url:I,external:E,download:q}}),T=p(()=>{const{submit:I,loading:E,pressed:q}=o;return{submit:I,loading:E,pressed:q,disabled:m.value}}),S=p(()=>{const{removeUnderline:I,disclosure:E,loading:q,icon:U}=o;return{commonProps:f.value,linkProps:b.value,actionProps:T.value,removeUnderline:I,children:r,disclosure:E,loading:q,icon:U}}),w=p(()=>{if(o.connectedDisclosure){const{disabled:I,accessibilityLabel:E="Related actions"}=o.connectedDisclosure;return{disabled:I,disclosureLabel:E}}return{}}),B=()=>{u.value=!u.value};return(I,E)=>e.connectedDisclosure?(l(),d("div",{key:0,class:c(a(Ce).ConnectedDisclosureWrapper)},[L(dr,pe(a(S),yn(a(i))),{default:y(()=>[h(I.$slots,"default")]),_:3},16),L(a(tt),{active:u.value,preferredAlignment:"right",onClose:B},{activator:y(()=>[k("button",{type:"button",class:c(a(v)),disabled:a(w).disabled,"aria-label":a(w).disclosureLabel,"aria-describedby":e.ariaDescribedBy,onClick:B,onMouseup:E[0]||(E[0]=(...q)=>a(qt)&&a(qt)(...q))},[k("span",null,[L(a(le),{source:a(Sr)},null,8,["source"])])],42,Rv)]),content:y(()=>[L(a(Ze),{items:e.connectedDisclosure.actions,onActionAnyItem:B},Ue({_:2},[be(e.connectedDisclosure.actions,({prefixId:q})=>({name:`prefix-${q}`,fn:y(()=>[h(I.$slots,`prefix-${q}`)])})),be(e.connectedDisclosure.actions,({suffixId:q})=>({name:`suffix-${q}`,fn:y(()=>[h(I.$slots,`suffix-${q}`)])}))]),1032,["items"])]),_:3},8,["active"])],2)):(l(),A(dr,pe({key:1},a(S),yn(a(i))),{default:y(()=>[h(I.$slots,"default")]),_:3},16))}}));ye.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the button",required:!1,type:{name:"string"}},{name:"url",description:"A destination to link to, rendered in the href attribute of a link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"external",description:"Forces url to open in a new tab",required:!1,type:{name:"boolean"}},{name:"download",description:`Tells the browser to download the url instead of opening it.
Provides a hint for the downloaded filename if it is a string value`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",description:"Allows the button to submit a form",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables the button, disallowing merchant interaction",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces button text with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"pressed",description:"Sets the button in a pressed state",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to define the semantic value of this element",required:!1,type:{name:"string"}},{name:"ariaControls",description:"Id of the element the button controls",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Tells screen reader the controlled element is expanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the button",required:!1,type:{name:"string"}},{name:"primary",description:"Provides extra visual weight and identifies the primary action in a set of buttons",required:!1,type:{name:"boolean"}},{name:"destructive",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"size",description:"Changes the size of the button, giving it more or less padding",tags:{values:[{description:"slim | medium | large",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textAlign",description:"Changes the inner text alignment of the button",tags:{values:[{description:"left | center | right",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:`Gives the button a subtle alternative to the default button styling,
appropriate for certain backdrops`,required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"disclosure",description:"Displays the button with a disclosure icon. Defaults to `down` when set to true",tags:{values:[{description:"down | up | select | boolean",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Renders a button that looks like a link",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes plain and outline Button colors (text, borders, icons) the same as the current text color\nAlso adds an underline to `plain` Buttons",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes underline from button text (including on interaction)when monochrome and plain are true",required:!1,type:{name:"boolean"}},{name:"icon",description:"Icon to display to the left of the button content.",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",description:"Disclosure button connected right of the button. Toggles a popover action list.",required:!1,type:{name:"ConnectedDisclosure"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Hv={inheritAttrs:!1},pt=P(N(g({},Hv),{props:{action:null,overrides:{default:()=>({})}},setup(e){const o=e,n=()=>{o.action&&o.action.onAction&&o.action.onAction()},s=p(()=>{if(!o.action)return{};const m=o.action,{onAction:i,content:r}=m,u=Q(m,["onAction","content"]);return g(g({},u),o.overrides)});return(i,r)=>e.action?(l(),A(a(ye),pe({key:0},a(s),{onClick:n}),{default:y(()=>[re(W(e.action.content),1)]),_:1},16)):_("",!0)}}));pt.__docgenInfo={exportName:"default",displayName:"ButtonFrom",description:"",tags:{},props:[{name:"action",required:!1,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"ButtonProps"}]},defaultValue:{func:!1,value:"() => ({})"}}]};const Uv="Polaris-ButtonGroup",jv="Polaris-ButtonGroup__Item",zv="Polaris-ButtonGroup--segmented",Wv="Polaris-ButtonGroup--fullWidth",Gv="Polaris-ButtonGroup--extraTight",Xv="Polaris-ButtonGroup--tight",Kv="Polaris-ButtonGroup--loose";var ma={ButtonGroup:Uv,Item:jv,"Item-plain":"Polaris-ButtonGroup__Item--plain",segmented:zv,"Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:Wv,extraTight:Gv,tight:Xv,loose:Kv};const Yv={inheritAttrs:!1},Od=P(N(g({},Yv),{setup(e){const o=C(!1),n=ce(),s=p(()=>n.default&&n.default()[0].props),i=p(()=>{const m=s.value&&(s.value.plain===""||s.value.plain);return O(ma.Item,o.value&&ma["Item-focused"],m&&ma["Item-plain"])}),r=()=>{o.value=!0},u=()=>{o.value=!1};return(m,x)=>(l(),d("div",{class:c(a(i)),onFocus:r,onBlur:u},[h(m.$slots,"default")],34))}}));Od.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};function He(e){if(!e)return!1;if(e&&e()[0].children){if(typeof e()[0].children=="string")return e()[0].children!=="v-if";if(Array.isArray(e()[0].children))return e()[0].children.length>0}return!0}const Zv=["data-buttongroup-segmented","data-buttongroup-connected-top","data-buttongroup-full-width"],Qv={inheritAttrs:!1},ot=P(N(g({},Qv),{props:{spacing:null,segmented:{type:Boolean},fullWidth:{type:Boolean},connectedTop:{type:Boolean}},setup(e){const o=e,n=ce(),s=p(()=>{const r=[];return n.default&&n.default().map(u=>{const m=u.children;typeof m=="string"&&m==="v-if"||(u.type.toString()==="Symbol(Fragment)"?m.forEach(x=>{r.push(x)}):r.push(u))}),r}),i=p(()=>O(ma.ButtonGroup,o.spacing&&ma[o.spacing],o.segmented&&ma.segmented,o.fullWidth&&ma.fullWidth));return(r,u)=>(l(),d("div",{class:c(a(i)),"data-buttongroup-segmented":e.segmented,"data-buttongroup-connected-top":e.connectedTop,"data-buttongroup-full-width":e.fullWidth},[(l(!0),d(Y,null,be(a(s),(m,x)=>(l(),A(a(Od),{key:x},{default:y(()=>[(l(),A(Ie(m)))]),_:2},1024))),128))],10,Zv))}}));ot.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"spacing",description:"Determines the space between button group items",required:!1,type:{name:"Spacing"}},{name:"segmented",description:"Join buttons as segmented group",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Buttons will stretch/shrink to occupy the full width",required:!1,type:{name:"boolean"}},{name:"connectedTop",description:"Remove top left and right border radius",required:!1,type:{name:"boolean"}}]};const Jv="Polaris-Caption";var ex={Caption:Jv};const ea=P({setup(e){return(o,n)=>(l(),d("p",{class:c(a(ex).Caption)},[h(o.$slots,"default")],2))}});ea.__docgenInfo={exportName:"default",displayName:"Caption",description:"",tags:{},slots:[{name:"default"}]};const tx="Polaris-Card",ax="Polaris-Card--subdued",ox="Polaris-Card--hideOnPrint",nx="Polaris-Card__Header",sx="Polaris-Card__Section",ix="Polaris-Card__SectionHeader",lx="Polaris-Card__Subsection",rx="Polaris-Card__Footer",cx="Polaris-Card__LeftJustified";var dt={Card:tx,subdued:ax,"Section-hideOnPrint":"Polaris-Card__Section--hideOnPrint",hideOnPrint:ox,Header:nx,Section:sx,"Section-fullWidth":"Polaris-Card__Section--fullWidth","Section-flush":"Polaris-Card__Section--flush","Section-subdued":"Polaris-Card__Section--subdued",SectionHeader:ix,Subsection:lx,Footer:rx,LeftJustified:cx};const Us=P({props:{actions:null},setup(e){const o=ce(),n=p(()=>{var s,i,r,u,m;return o.title&&o.title().length===1?((s=o.title()[0])==null?void 0:s.type.toString())==="Symbol(Text)"||((i=o.title()[0])==null?void 0:i.type.toString())==="Symbol()"?!0:o.title()[0].children&&((r=o.title()[0].children)==null?void 0:r.length)===1&&(((u=o.title()[0].children)==null?void 0:u[0].type.toString())==="Symbol(Text)"||((m=o.title()[0].children)==null?void 0:m[0].type.toString())==="Symbol()"):!1});return(s,i)=>(l(),d("div",{class:c(a(dt).Header)},[a(o).default||e.actions?(l(),A(a(Re),{key:0,alignment:"baseline",noItemWrap:""},{default:y(()=>[L(a(bt),{fill:!0},{default:y(()=>[a(n)?(l(),A(a(ta),{key:1},{default:y(()=>[h(s.$slots,"title")]),_:3})):h(s.$slots,"title",{key:0})]),_:3}),e.actions?(l(),A(a(bt),{key:0},{default:y(()=>[L(a(ot),null,{default:y(()=>[(l(!0),d(Y,null,be(e.actions,(r,u)=>(l(),A(a(pt),{key:u,action:r,overrides:{plain:!0}},null,8,["action"]))),128))]),_:1})]),_:1})):_("",!0),a(o).default?(l(),A(a(bt),{key:1},{default:y(()=>[h(s.$slots,"default")]),_:3})):_("",!0)]),_:3})):(l(),d(Y,{key:1},[a(n)?(l(),A(a(ta),{key:1},{default:y(()=>[h(s.$slots,"title")]),_:3})):h(s.$slots,"title",{key:0})],64))],2))}});Us.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}}],slots:[{name:"title"},{name:"default"}]};const js=P({props:{subdued:{type:Boolean},flush:{type:Boolean},fullWidth:{type:Boolean},hideOnPrint:{type:Boolean},actions:null},setup(e){const o=e,n=ce(),s=p(()=>O(dt.Section,o.flush&&dt["Section-flush"],o.subdued&&dt["Section-subdued"],o.fullWidth&&dt["Section-fullWidth"],o.hideOnPrint&&dt["Section-hideOnPrint"])),i=p(()=>{var r,u,m,x,v;return n.title&&n.title().length===1?((r=n.title()[0])==null?void 0:r.type.toString())==="Symbol(Text)"||((u=n.title()[0])==null?void 0:u.type.toString())==="Symbol()"?!0:n.title()[0].children&&((m=n.title()[0].children)==null?void 0:m.length)===1&&(((x=n.title()[0].children)==null?void 0:x[0].type.toString())==="Symbol(Text)"||((v=n.title()[0].children)==null?void 0:v[0].type.toString())==="Symbol()"):!1});return(r,u)=>(l(),d("div",{class:c(a(s))},[a(n).title||e.actions?(l(),d("div",{key:0,class:c(a(dt).SectionHeader)},[e.actions?(l(),A(a(Re),{key:0,noItemWrap:"",alignment:"baseline"},{default:y(()=>[L(a(bt),{fill:""},{default:y(()=>[a(i)?(l(),A(a(aa),{key:1},{default:y(()=>[h(r.$slots,"title")]),_:3})):h(r.$slots,"title",{key:0})]),_:3}),L(a(ot),null,{default:y(()=>[(l(!0),d(Y,null,be(e.actions,(m,x)=>(l(),A(a(pt),{key:x,index:x,action:m,overrides:{plain:!0}},null,8,["index","action"]))),128))]),_:1})]),_:3})):(l(),d(Y,{key:1},[a(i)?(l(),A(a(aa),{key:1},{default:y(()=>[h(r.$slots,"title")]),_:3})):h(r.$slots,"title",{key:0})],64))],2)):_("",!0),h(r.$slots,"default")],2))}});js.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"subdued",required:!1,type:{name:"boolean"}},{name:"flush",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"title"},{name:"default"}]};const qd=P({setup(e){return(o,n)=>(l(),d("div",{class:c(a(dt).Subsection)},[h(o.$slots,"default")],2))}});qd.__docgenInfo={exportName:"default",displayName:"Subsection",description:"",tags:{},slots:[{name:"default"}]};const rt=P({props:{subdued:{type:Boolean},sectioned:{type:Boolean},actions:null,primaryFooterAction:null,secondaryFooterActions:null,secondaryFooterActionsDisclosureText:null,footerActionAlignment:{default:"right"},hideOnPrint:{type:Boolean}},setup(e){const o=e,n=ce(),s=C(!1),i=()=>{s.value=!s.value},r=p(()=>O(dt.Card,o.subdued&&dt.subdued,o.hideOnPrint&&dt.hideOnPrint)),u=p(()=>O(dt.Footer,o.footerActionAlignment==="left"&&dt.LeftJustified));return ze("WithinContentContext",!1),(m,x)=>(l(),d("div",{class:c(a(r))},[a(n).title||e.actions?(l(),A(a(Us),{key:0,actions:e.actions},{title:y(()=>[h(m.$slots,"title")]),_:3},8,["actions"])):_("",!0),e.sectioned?(l(),A(a(js),{key:1},{default:y(()=>[h(m.$slots,"default")]),_:3})):h(m.$slots,"default",{key:2}),e.primaryFooterAction||e.secondaryFooterActions&&e.secondaryFooterActions.length?(l(),d("div",{key:3,class:c(a(u))},[e.footerActionAlignment==="right"?(l(),A(a(ot),{key:0},{default:y(()=>[e.secondaryFooterActions&&e.secondaryFooterActions.length===1?(l(),A(a(pt),{key:0,action:e.secondaryFooterActions[0]},null,8,["action"])):e.secondaryFooterActions&&e.secondaryFooterActions.length>1?(l(),A(a(tt),{key:1,active:s.value,onClose:i},{activator:y(()=>[L(a(ye),{disclosure:!0,onClick:i},{default:y(()=>[re(W(e.secondaryFooterActionsDisclosureText||a(cr).Polaris.Common.more),1)]),_:1})]),content:y(()=>[L(a(Ze),{items:e.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):_("",!0),e.primaryFooterAction?(l(),A(a(pt),{key:2,action:e.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):_("",!0)]),_:1})):(l(),A(a(ot),{key:1},{default:y(()=>[e.primaryFooterAction?(l(),A(a(pt),{key:0,action:e.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):_("",!0),e.secondaryFooterActions&&e.secondaryFooterActions.length===1?(l(),A(a(pt),{key:1,action:e.secondaryFooterActions[0]},null,8,["action"])):e.secondaryFooterActions&&e.secondaryFooterActions.length>1?(l(),A(a(tt),{key:2,active:s.value,onClose:i},{activator:y(()=>[L(a(ye),{disclosure:"",onClick:i},{default:y(()=>[re(W(e.secondaryFooterActionsDisclosureText||a(cr).Polaris.Common.more),1)]),_:1})]),content:y(()=>[L(a(Ze),{items:e.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):_("",!0)]),_:1}))],2)):_("",!0)],2))}});rt.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"subdued",description:"A less prominent card",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Auto wrap content in section",required:!1,type:{name:"boolean"}},{name:"actions",description:"Card header actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}},{name:"primaryFooterAction",description:"Primary action in the card footer",required:!1,type:{name:"ComplexAction"}},{name:"secondaryFooterActions",description:"Secondary actions in the card footer",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}},{name:"secondaryFooterActionsDisclosureText",description:"The content of the disclosure button rendered when there is more than one secondary footer action",required:!1,type:{name:"string"}},{name:"footerActionAlignment",description:"Alignment of the footer actions on the card, defaults to right",required:!1,type:{name:"union",elements:[{name:'"right"'},{name:'"left"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const ux="Polaris-Checkbox",dx="Polaris-Checkbox__Input",px="Polaris-Checkbox--keyFocused",mx="Polaris-Checkbox__Backdrop",yx="Polaris-Checkbox__Icon",gx="Polaris-Checkbox--hover",hx="Polaris-Checkbox--error";var Gt={Checkbox:ux,Input:dx,keyFocused:px,Backdrop:mx,"Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:yx,hover:gx,error:hx};const Pr=e=>`${e}Error`,bx="Polaris-Choice",fx="Polaris-Choice--labelHidden",vx="Polaris-Choice__Label",xx="Polaris-Choice__Control",Tx="Polaris-Choice--disabled",Sx="Polaris-Choice__Descriptions",Cx="Polaris-Choice__HelpText";var Dt={Choice:bx,labelHidden:fx,Label:vx,Control:xx,disabled:Tx,Descriptions:Sx,HelpText:Cx};const Nr=e=>`${e}HelpText`,Ax="Polaris-InlineError",kx="Polaris-InlineError__Icon";var jc={InlineError:Ax,Icon:kx};const Lx=["id"],wx={key:1},ba=P({props:{message:null,fieldID:null},setup(e){return(o,n)=>e.message?(l(),d("div",{key:0,id:a(Pr)(e.fieldID),class:c(a(jc).InlineError)},[k("div",{class:c(a(jc).Icon)},[L(a(le),{source:a(Wy)},null,8,["source"])],2),typeof e.message=="object"?(l(),A(Ie(e.message),{key:0})):(l(),d("div",wx,W(e.message),1))],10,Lx)):_("",!0)}});ba.__docgenInfo={exportName:"default",displayName:"InlineError",description:"",tags:{},props:[{name:"message",description:"Content briefly explaining how to resolve the invalid form field input.",required:!0,type:{name:"Error"}},{name:"fieldID",description:"Unique identifier of the invalid form field that the message describes",required:!0,type:{name:"string"}}]};const _x={key:0},Mx=["id"],Br=P({props:{id:null,disabled:{type:Boolean},error:{type:[null,Boolean]},labelHidden:{type:Boolean}},setup(e){const o=e,n=p(()=>O(Dt.Choice,o.labelHidden&&Dt.labelHidden,o.disabled&&Dt.disabled));return(s,i)=>e.error&&typeof e.error!="boolean"||s.$slots["help-text"]?(l(),d("div",_x,[k("label",{class:c(a(n)),onClick:i[0]||(i[0]=r=>s.$emit("click")),onMouseover:i[1]||(i[1]=r=>s.$emit("mouseover")),onMouseout:i[2]||(i[2]=r=>s.$emit("mouseout"))},[k("span",{class:c(a(Dt).Control)},[h(s.$slots,"default")],2),k("span",{class:c(a(Dt).Label)},[h(s.$slots,"label")],2)],34),k("div",{class:c(a(Dt).Descriptions)},[s.$slots["help-text"]?(l(),d("div",{key:0,id:a(Nr)(e.id),class:c(a(Dt).HelpText)},[h(s.$slots,"help-text")],10,Mx)):_("",!0),e.error&&typeof e.error!="boolean"?(l(),A(a(ba),{key:1,fieldID:e.id,message:e.error},null,8,["fieldID","message"])):_("",!0)],2)])):(l(),d("label",{key:1,class:c(a(n)),onClick:i[3]||(i[3]=r=>s.$emit("click")),onMouseover:i[4]||(i[4]=r=>s.$emit("mouseover")),onMouseout:i[5]||(i[5]=r=>s.$emit("mouseout"))},[k("span",{class:c(a(Dt).Control)},[h(s.$slots,"default")],2),k("span",{class:c(a(Dt).Label)},[h(s.$slots,"label")],2)],34))}});Br.__docgenInfo={exportName:"default",displayName:"Choice",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the choice",required:!0,type:{name:"string"}},{name:"disabled",description:"Whether the associated form control is disabled",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"mouseover"},{name:"mouseout"}],slots:[{name:"default"},{name:"label"},{name:"help-text"}]};const Px=["id","role","name","value","checked","disabled","aria-invalid","aria-controls","aria-describedby"],fa=P({props:{ariaControls:null,ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},id:null,name:null,value:{type:[String,Boolean]},modelValue:{type:[String,Boolean]},error:{type:[null,Boolean]}},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const n=e,s=fe("withinListboxContext",!1),i=C(!1),r=C(!1),u=ce(),m=p(()=>{var F;return(F=u["help-text"])==null?void 0:F.call(u)}),{useUniqueId:x}=De(),v=p(()=>x("Checkbox",n.id)),f=p(()=>n.checked==="indeterminate"),b=p(()=>!f.value&&Boolean(n.checked)||typeof n.modelValue=="boolean"&&n.modelValue===!0),T=p(()=>f.value?Gy:Cr),S=p(()=>O(Gt.Checkbox,n.error&&Gt.error)),w=p(()=>O(Gt.Backdrop,i.value&&Gt.hover)),B=p(()=>O(Gt.Input,f.value&&Gt["Input-indeterminate"],r.value&&Gt.keyFocused)),I=p(()=>f.value?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":b.value}),E=p(()=>{const F=[];return n.ariaDescribedBy&&F.push(n.ariaDescribedBy),n.error&&typeof n.error!="boolean"&&F.push(Pr(v.value)),m.value&&F.push(Nr(v.value)),F.length?F.join(" "):void 0}),q=()=>{r.value=!0,o("focus")},U=F=>{const z=F.target;o("change",F),o("update:modelValue",z.checked)},K=()=>{r.value=!1,o("blur")},D=F=>{const{key:z}=F;(z===qe.Space||z===qe.Tab)&&(r.value||(r.value=!0))};function X(F){F.stopPropagation()}return(F,z)=>(l(),A(a(Br),{id:a(v),error:e.error,disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:z[0]||(z[0]=ne=>i.value=!0),onMouseout:z[1]||(z[1]=ne=>i.value=!1)},Ue({default:y(()=>[k("span",{class:c(a(S))},[k("input",pe({id:a(v),role:a(s)?"presentation":"checkbox",name:e.name,value:e.value||e.modelValue,type:"checkbox",checked:a(b),disabled:e.disabled,class:a(B),"aria-invalid":e.error!==null,"aria-controls":e.ariaControls,"aria-describedby":a(E),onFocus:q,onChange:U,onBlur:K,onKeyup:D},a(I)),null,16,Px),k("span",{class:c(a(w)),onClick:X,onMouseup:X},null,34),k("span",{class:c(a(Gt).Icon)},[L(a(le),{source:a(T)},null,8,["source"])],2)],2)]),_:2},[a(u).label?{name:"label",fn:y(()=>[h(F.$slots,"label")])}:void 0,a(u)["help-text"]?{name:"help-text",fn:y(()=>[h(F.$slots,"help-text")])}:void 0]),1032,["id","error","disabled","labelHidden"]))}});fa.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"ariaControls",description:"Indicates the ID of the element that is controlled by the checkbox",required:!1,type:{name:"string"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the checkbox",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"indeterminate"'}]}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const Nx="Polaris-ChoiceList",Bx="Polaris-ChoiceList--titleHidden",Ix="Polaris-ChoiceList__Title",Dx="Polaris-ChoiceList__Choices",$x="Polaris-ChoiceList__ChoiceChildren",Fx="Polaris-ChoiceList__ChoiceError";var la={ChoiceList:Nx,titleHidden:Bx,Title:Ix,Choices:Dx,ChoiceChildren:$x,ChoiceError:Fx};const Ex="Polaris-RadioButton",Ox="Polaris-RadioButton__Input",qx="Polaris-RadioButton--keyFocused",Rx="Polaris-RadioButton__Backdrop",Vx="Polaris-RadioButton--hover";var rn={RadioButton:Ex,Input:Ox,keyFocused:qx,Backdrop:Rx,hover:Vx};const Hx=["id","name","value","checked","disabled","aria-describedby"],xn=P({props:{ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},id:null,name:null,value:null,modelValue:null},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const n=e,s=C(!1),i=C(!1),r=ce(),u=p(()=>{var I;return(I=r["help-text"])==null?void 0:I.call(r)}),{useUniqueId:m}=De(),x=p(()=>m("RadioButton",n.id)),v=p(()=>n.checked||n.modelValue===n.value),f=p(()=>O(rn.Backdrop,i.value&&rn.hover)),b=p(()=>O(rn.Input,s.value&&rn.keyFocused)),T=p(()=>{const I=[];return n.ariaDescribedBy&&I.push(n.ariaDescribedBy),u.value&&I.push(Nr(x.value)),I.length?I.join(" "):void 0}),S=I=>{const E=I.target;o("change",I),o("update:modelValue",E.value)},w=()=>{o("blur"),s.value=!1},B=()=>{s.value||(s.value=!0)};return(I,E)=>(l(),A(a(Br),{id:a(x),disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:E[1]||(E[1]=q=>i.value=!0),onMouseout:E[2]||(E[2]=q=>i.value=!1)},Ue({default:y(()=>[k("span",{class:c(a(rn).RadioButton)},[k("input",{id:a(x),name:e.name||a(x),value:e.value,type:"radio",checked:a(v),disabled:e.disabled,class:c(a(b)),"aria-describedby":a(T),onFocus:E[0]||(E[0]=q=>I.$emit("focus")),onChange:S,onBlur:w,onKeyup:B},null,42,Hx),k("span",{class:c(a(f))},null,2)],2)]),_:2},[a(r).label?{name:"label",fn:y(()=>[h(I.$slots,"label")])}:void 0,a(r)["help-text"]?{name:"help-text",fn:y(()=>[h(I.$slots,"help-text")])}:void 0]),1032,["id","disabled","labelHidden"]))}});xn.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the the radio button",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Radio button is selected",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const Ux=["id","aria-invalid"],jx=["innerHTML"],Mt=P({props:{choices:null,modelValue:null,name:null,allowMultiple:{type:Boolean},titleHidden:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,{useUniqueId:s}=De(),i=p(()=>s("ChoiceList",n.name)),r=p(()=>n.allowMultiple?`${i.value}Multiple`:i.value),u=p(()=>O(la.ChoiceList,n.titleHidden&&la.titleHidden)),m=f=>n.allowMultiple?n.modelValue.includes(f.value):n.modelValue===f.value,x=f=>{const b=f.target;return b.checked?n.allowMultiple?[...n.modelValue,b.value]:b.value:Array.isArray(n.modelValue)?n.modelValue.filter(T=>T!==b.value):[]},v=f=>{o("update:modelValue",x(f)),o("change",f)};return(f,b)=>(l(),d("fieldset",{id:a(r),class:c(a(u)),"aria-invalid":e.error!==null},[k("legend",{class:c(a(la).Title)},[h(f.$slots,"default")],2),k("ul",{class:c(a(la).Choices)},[(l(!0),d(Y,null,be(e.choices,(T,S)=>(l(),d("li",{key:S},[(l(),A(Ie(e.allowMultiple?a(fa):a(xn)),{name:a(r),value:T.value,checked:m(T),disabled:T.disabled||e.disabled,ariaDescribedBy:e.error&&T.describedByError?a(Pr)(a(r)):null,onChange:v},Ue({_:2},[T.label?{name:"label",fn:y(()=>[k("span",null,W(T.label),1)])}:void 0,T.helpText?{name:"help-text",fn:y(()=>[k("span",null,W(T.helpText),1)])}:void 0]),1032,["name","value","checked","disabled","ariaDescribedBy"])),typeof T.renderChildren=="string"?(l(),d("div",{key:0,innerHTML:T.renderChildren,class:c(a(la).ChoiceChildren)},null,10,jx)):(l(),A(Ie(T.renderChildren),{key:1,class:c(a(la).ChoiceChildren)},null,8,["class"]))]))),128))],2),e.error?(l(),d("div",{key:0,class:c(a(la).ChoiceError)},[L(a(ba),{fieldID:a(r),message:e.error},null,8,["fieldID","message"])],2)):_("",!0)],10,Ux))}});Mt.__docgenInfo={exportName:"default",displayName:"ChoiceList",description:"",tags:{},props:[{name:"choices",description:"Collection of choices",required:!0,type:{name:"Array",elements:[{name:"Choice"}]}},{name:"modelValue",description:"V-model will automatically bind to this prop",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allow merchants to select multiple options at once",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Toggles display of the title",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"disabled",description:"Disable all choices",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}}],slots:[{name:"default"}]};const zx="Polaris-Collapsible",Wx="Polaris-Collapsible--isFullyClosed",Gx="Polaris-Collapsible--expandOnPrint";var Gl={Collapsible:zx,isFullyClosed:Wx,expandOnPrint:Gx};const Xx=["id","aria-expanded"],qo=P({props:{id:null,expandOnPrint:{type:Boolean},open:{type:Boolean},transition:null},setup(e){const o=e,n=C(0),s=C("idle"),i=C(null),r=C(o.open),u=p(()=>s.value==="idle"&&o.open&&r.value),m=p(()=>s.value==="idle"&&!o.open&&!r.value),x=p(()=>O(Gl.Collapsible,m.value&&Gl.isFullyClosed,o.expandOnPrint&&Gl.expandOnPrint)),v=p(()=>N(g({},o.transition&&{transitionDuration:`${o.transition.duration}`,transitionTimingFunction:`${o.transition.timingFunction}`}),{maxHeight:u.value?"none":`${n.value}px`,overflow:u.value?"visible":"hidden"})),f=({target:b})=>{b===i.value&&(s.value="idle",r.value=o.open)};return Ee(()=>[o.open,r.value],()=>{o.open!==r.value&&(s.value="measuring")}),Vt(()=>{if(!!i.value)switch(s.value){case"idle":break;case"measuring":n.value=i.value.scrollHeight,s.value="animating";break;case"animating":n.value=o.open?i.value.scrollHeight:0}}),Te(()=>{!open||!i.value||(n.value=i.value.scrollHeight)}),(b,T)=>(l(),d("div",{id:e.id,style:Fe(a(v)),ref_key:"collapsibleContainerRef",ref:i,class:c(a(x)),onTransitionend:f,"aria-expanded":e.open},[e.expandOnPrint||!a(m)?h(b.$slots,"default",{key:0}):_("",!0)],46,Xx))}});qo.__docgenInfo={exportName:"default",displayName:"Collapsible",description:"",tags:{},props:[{name:"id",description:"Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component\u2019s aria-controls prop.",required:!0,type:{name:"string"}},{name:"expandOnPrint",description:"Option to show collapsible content when printing",required:!1,type:{name:"boolean"}},{name:"open",description:"Toggle whether the collapsible is expanded or not.",required:!0,type:{name:"boolean"}},{name:"transition",description:"Assign transition properties to the collapsible",required:!1,type:{name:"Transition"}}],slots:[{name:"default"}]};function Xl(e){const o=e.toString(16);return o.length===1?`0${o}`:o}function Kx(e,o){const n=e/60,s=1-Math.abs(n%2-1),i=o*s;let r=0,u=0,m=0;return n>=0&&n<=1&&(r=o,u=i,m=0),n>=1&&n<=2&&(r=i,u=o,m=0),n>=2&&n<=3&&(r=0,u=o,m=i),n>=3&&n<=4&&(r=0,u=i,m=o),n>=4&&n<=5&&(r=i,u=0,m=o),n>=5&&n<=6&&(r=o,u=0,m=i),{red:r,green:u,blue:m}}function Yx(e,o="b"){const{alpha:n=1}=e,s=e.red/255,i=e.green/255,r=e.blue/255,u=Math.max(s,i,r),m=Math.min(s,i,r),x=u-m,v=(u+m)/2;let f=0;if(u===0)f=0;else if(o==="b")f=x/u;else if(o==="l"){const w=v>.5?x/(2-u-m):x/(u+m);f=Number.isNaN(w)?0:w}let b=0;switch(u){case s:b=(i-r)/x+(i<r?6:0);break;case i:b=(r-s)/x+2;break;case r:b=(s-i)/x+4;break}const T=b/6*360,S=Qt(T,0,360);return{hue:S?ln(S,2):0,saturation:ln(Qt(f,0,1),4),brightness:ln(Qt(u,0,1),4),lightness:ln(v,4),alpha:ln(n,4)}}function Zx(e){if(e.length===4){const i=(x,v)=>e.slice(x,v).repeat(2),r=parseInt(i(1,2),16),u=parseInt(i(2,3),16),m=parseInt(i(3,4),16);return{red:r,green:u,blue:m}}const o=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return{red:o,green:n,blue:s}}function Qx({red:e,green:o,blue:n}){return`#${Xl(e)}${Xl(o)}${Xl(n)}`}function Ns(e){const{hue:o,saturation:n,brightness:s}=e,r=e.alpha||1,u=s*n;let{red:m,green:x,blue:v}=Kx(o,u);const f=s-u;return m+=f,x+=f,v+=f,{red:Math.round(m*255),green:Math.round(x*255),blue:Math.round(v*255),alpha:r}}function Jx(e){return Qx(Ns(N(g({},e),{alpha:1})))}function eT(e){const{hue:o,saturation:n,brightness:s,alpha:i=1}=Yx(e,"b");return{hue:o,saturation:n,brightness:s,alpha:i}}const tT="Polaris-ColorPicker",aT="Polaris-ColorPicker__MainColor",oT="Polaris-ColorPicker--fullWidth",nT="Polaris-ColorPicker__Dragger",sT="Polaris-ColorPicker__ColorLayer",iT="Polaris-ColorPicker__HuePicker",lT="Polaris-ColorPicker__AlphaPicker",rT="Polaris-ColorPicker__Slidable";var Ot={ColorPicker:tT,MainColor:aT,fullWidth:oT,Dragger:nT,ColorLayer:sT,HuePicker:iT,AlphaPicker:lT,Slidable:rT};const cT=["data-dragging"],zs=P({props:{draggerX:{default:0},draggerY:{default:0}},emits:["change","dragger-height"],setup(e,{emit:o}){const n=e,s=C(!1),i=C(null),r=C(null),u=C(0),m=C(0),x=p(()=>({transform:`translate3d(${u.value||n.draggerX}px, ${m.value||n.draggerY}px, 0)`}));xr||window.addEventListener("touchmove",B=>{s.value&&B.preventDefault()},{passive:!1}),Te(()=>{r.value&&o("dragger-height",r.value.clientWidth)});const v=B=>{if(w(B)){const{clientX:I,clientY:E}=B;T(I,E)}s.value=!0},f=()=>{s.value=!1},b=B=>{if(B.stopImmediatePropagation(),B.stopPropagation(),B.cancelable&&B.preventDefault(),S(B)){const E=B;T(E.clientX,E.clientY);return}const I=B;T(I.touches[0].clientX,I.touches[0].clientY)},T=(B,I)=>{if(i.value){const E=i.value.getBoundingClientRect(),q=B-E.left,U=I-E.top;o("change",{x:q,y:U})}};function S(B){return B.type==="mousemove"}function w(B){return B.type==="mousedown"}return(B,I)=>(l(),d("div",{ref_key:"slidableRef",ref:i,class:c(a(Ot).Slidable),"data-dragging":s.value,onMousedown:v,onTouchstart:v},[s.value?(l(),A(a(Je),{key:0,event:"mouseup",handler:f})):_("",!0),s.value?(l(),A(a(Je),{key:1,event:"mousemove",handler:b,passive:!1})):_("",!0),s.value?(l(),A(a(Je),{key:2,event:"touchmove",handler:b,passive:!1})):_("",!0),s.value?(l(),A(a(Je),{key:3,event:"touchend",handler:f})):_("",!0),s.value?(l(),A(a(Je),{key:4,event:"touchcancel",handler:f})):_("",!0),k("div",{style:Fe(a(x)),class:c(a(Ot).Dragger),ref_key:"draggerRef",ref:r},null,6)],42,cT))}});zs.__docgenInfo={exportName:"default",displayName:"Slidable",description:"",tags:{},props:[{name:"draggerX",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"draggerY",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"change",type:{names:["{ x: number; y: number; }"]}},{name:"dragger-height",type:{names:["number"]}}]};const Rd=P({props:{color:null,alpha:null},emits:["change"],setup(e,{emit:o}){const n=e,s=C(null),i=C(0),r=C(0),u=p(()=>Xy(n.alpha,i.value,r.value)),m=p(()=>{const{red:b,green:T,blue:S}=Ns(n.color),w=`${b}, ${T}, ${S}`;return`linear-gradient(to top, rgba(${w}, 0) 18px, rgba(${w}, 1) calc(100% - 18px))`});Te(()=>{x()});const x=()=>{s.value&&(i.value=s.value.clientHeight)},v=b=>{r.value=b},f=({y:b})=>{const T=Ky(b,i.value);o("change",T)};return(b,T)=>(l(),d("div",{class:c(a(Ot).AlphaPicker),ref_key:"alphaPickerRef",ref:s},[k("div",{class:c(a(Ot).ColorLayer),style:Fe({background:a(m)})},"\xA0",6),L(a(zs),{draggerY:a(u),draggerX:0,onChange:f,onDraggerHeight:v},null,8,["draggerY"])],2))}});Rd.__docgenInfo={exportName:"default",displayName:"AlphaPicker",description:"",tags:{},props:[{name:"color",required:!0,type:{name:"HSBColor"}},{name:"alpha",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const Vd=P({props:{hue:null},emits:["change"],setup(e,{emit:o}){const n=e,s=C(null),i=C(0),r=C(0),u=p(()=>Yy(n.hue,i.value,r.value));Te(()=>{m()});const m=()=>{s.value&&(i.value=s.value.clientHeight)},x=f=>{r.value=f},v=({y:f})=>{const b=Zy(f,i.value);o("change",b)};return(f,b)=>(l(),d("div",{class:c(a(Ot).HuePicker),ref_key:"huePickerRef",ref:s},[L(a(zs),{draggerY:a(u),draggerX:0,onChange:v,onDraggerHeight:x},null,8,["draggerY"])],2))}});Vd.__docgenInfo={exportName:"default",displayName:"HuePicker",description:"",tags:{},props:[{name:"hue",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const uT=["id","onMousedown"],Ws=P({props:{id:null,modelValue:null,allowAlpha:{type:Boolean},fullWidth:{type:Boolean},outputType:null},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,s=200,i=C(null),r=As({hue:0,saturation:0,brightness:0,alpha:1}),u=As({width:0,height:0}),m=q=>{q.preventDefault()},x=p(()=>O(Ot.ColorPicker,n.fullWidth&&Ot.fullWidth)),v=p(()=>r.alpha!==void 0&&n.allowAlpha?r.alpha:1),f=p(()=>{const{red:q,green:U,blue:K}=Ns({hue:r.hue,saturation:1,brightness:1});return`rgba(${q}, ${U}, ${K}, ${v.value})`}),b=p(()=>Qt(r.saturation*u.width,0,u.width)),T=p(()=>Qt(u.height-r.brightness*u.height,0,u.height)),S=p(()=>{if(n.outputType==="hex")return Jx(r);if(n.outputType==="rgb"){const q=Ns(r);return`rgba(${q.red}, ${q.green}, ${q.blue}, ${v.value})`}return r}),w=Rt(()=>{i.value&&(u.width=i.value.clientWidth,u.height=i.value.clientHeight)},s,{leading:!0,trailing:!0,maxWait:s});if(typeof n.modelValue=="object"&&Object.assign(r,n.modelValue),typeof n.modelValue=="string"){let q;if(/#[0-9abcdef]{3,6}/.test(n.modelValue))q=N(g({},Zx(n.modelValue)),{alpha:1});else{const U=n.modelValue.replace(/^rgba?\(|\s+|\)$/g,"").split(",");q={red:parseInt(U[0],10),green:parseInt(U[1],10),blue:parseInt(U[2],10),alpha:U[2]?parseFloat(U[3]):1}}Object.assign(r,N(g({},eT(q)),{alpha:q.alpha}))}Te(()=>{i.value&&(u.width=i.value.clientWidth,u.height=i.value.clientHeight)});const B=q=>{r.hue=q,o("change",S.value),o("update:modelValue",S.value)},I=q=>{r.alpha=q,o("change",S.value),o("update:modelValue",S.value)},E=({x:q,y:U})=>{r.saturation=Qt(q/u.width,0,1),r.brightness=Qt(1-U/u.height,0,1),o("change",S.value),o("update:modelValue",S.value)};return(q,U)=>(l(),d("div",{id:e.id,class:c(a(x)),onMousedown:yd(m,["prevent"])},[k("div",{ref_key:"mainColorRef",ref:i,class:c(a(Ot).MainColor)},[k("div",{class:c(a(Ot).ColorLayer),style:Fe({backgroundColor:a(f)})},"\xA0",6),L(a(zs),{draggerX:a(b),draggerY:a(T),onChange:E},null,8,["draggerX","draggerY"])],2),L(a(Vd),{hue:a(r).hue,onChange:B},null,8,["hue"]),e.allowAlpha?(l(),A(a(Rd),{key:0,alpha:a(v),color:a(r),onChange:I},null,8,["alpha","color"])):_("",!0),L(a(Je),{event:"resize",handler:a(w)},null,8,["handler"])],42,uT))}});Ws.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:`The currently selected color.
The color can be HSB object (same with Shopify) or RGB, Hex string`,required:!0,type:{name:"union",elements:[{name:"Color"},{name:"string"}]}},{name:"allowAlpha",description:"Allow user to select an alpha value",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow HuePicker to take the full width",required:!1,type:{name:"boolean"}},{name:"outputType",description:"Color output format",required:!1,type:{name:"union",elements:[{name:'"hsb"'},{name:'"rgb"'},{name:'"hex"'}]}}],events:[{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const dT="Polaris-Combobox__Listbox";var pT={Listbox:dT};const va=P({props:{allowMultiple:{type:Boolean},preferredPosition:{default:"below"}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e;ze("comboboxListboxOptionContext",{allowMultiple:n.allowMultiple});const s=C(!1),i=C(""),r=C(""),u=C(""),m=C(!1),x=C(!1),v=C(null),f=ce(),b=p(()=>{var D;return(D=f.default)==null?void 0:D.call(f)}),T=p(()=>!s.value&&b),S=()=>{x.value||(s.value=!1),i.value=""},w=()=>{s.value=!0,i.value=""},B=()=>{if(n.allowMultiple)x.value=!0,i.value="";else{S();return}v.value.forceUpdatePosition()},I=()=>{T.value&&w()},E=()=>{T.value&&(s.value=!0)},q=()=>{x.value=!1,s.value&&S()},U={activeOptionId:i.value,expanded:s.value,listboxId:u.value,setTextFieldFocused:D=>{m.value=D},setTextFieldLabelId:D=>{r.value=D},onTextFieldFocus:I,onTextFieldChange:E,onTextFieldBlur:q};ze("comboboxTextFieldContext",U);const K={setActiveOptionId:D=>{i.value=D},setListboxId:D=>{u.value=D},listboxId:u.value,textFieldLabelId:r.value,onOptionSelected:B,textFieldFocused:m.value,onKeyToBottom:()=>{o("scrolled-to-bottom")}};return ze("comboboxListboxContext",K),(D,X)=>(l(),A(a(tt),{ref_key:"popoverRef",ref:v,active:s.value,onClose:S,autofocusTarget:"none",preventFocusOnClose:"",fullWidth:"",preferInputActivator:!1,preferredPosition:e.preferredPosition},Ue({_:2},[a(f).activator?{name:"activator",fn:y(()=>[h(D.$slots,"activator")])}:void 0,a(f).default?{name:"content",fn:y(()=>[L(a(Hs),{onScrolledToBottom:X[0]||(X[0]=F=>D.$emit("scrolled-to-bottom"))},{default:y(()=>[k("div",{class:c(a(pT).Listbox)},[h(D.$slots,"default")],2)]),_:3})])}:void 0]),1032,["active","preferredPosition"]))}});va.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"},defaultValue:{func:!1,value:"'below'"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"default"}]};function hn(e){return`${e}Label`}const mT="Polaris-TextField",yT="Polaris-TextField--multiline",gT="Polaris-TextField__Input",hT="Polaris-TextField--hasValue",bT="Polaris-TextField--focus",fT="Polaris-TextField__VerticalContent",vT="Polaris-TextField__Backdrop",xT="Polaris-TextField--error",TT="Polaris-TextField--readOnly",ST="Polaris-TextField--disabled",CT="Polaris-TextField__Prefix",AT="Polaris-TextField--suggestion",kT="Polaris-TextField__Suffix",LT="Polaris-TextField__CharacterCount",wT="Polaris-TextField__AlignFieldBottom",_T="Polaris-TextField__ClearButton",MT="Polaris-TextField__Hidden",PT="Polaris-TextField__Spinner",NT="Polaris-TextField__SpinnerIcon",BT="Polaris-TextField__Resizer",IT="Polaris-TextField__DummyInput",DT="Polaris-TextField__Segment",$T="Polaris-TextField--monospaced";var ke={TextField:mT,multiline:yT,Input:gT,hasValue:hT,focus:bT,VerticalContent:fT,Backdrop:vT,error:xT,readOnly:TT,disabled:ST,Prefix:CT,suggestion:AT,"Input-hasClearButton":"Polaris-TextField__Input--hasClearButton","Input-suffixed":"Polaris-TextField__Input--suffixed","Input-alignRight":"Polaris-TextField__Input--alignRight","Input-alignLeft":"Polaris-TextField__Input--alignLeft","Input-alignCenter":"Polaris-TextField__Input--alignCenter",Suffix:kT,CharacterCount:LT,AlignFieldBottom:wT,ClearButton:_T,Hidden:MT,Spinner:PT,SpinnerIcon:NT,Resizer:BT,DummyInput:IT,Segment:DT,monospaced:$T};const FT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ET=k("path",{"fill-rule":"evenodd",d:"M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 1 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293z"},null,-1),OT=[ET];function qT(e,o){return l(),d("svg",FT,OT)}var Hd={render:qT};function RT(e){return`${e}Error`}function Gs(e){return`${e}HelpText`}const Ud=P({emits:["click","change","mouseup","mousedown"],setup(e,{emit:o}){const n=s=>{o("click"),o("change",s)};return(s,i)=>(l(),d("div",{"aria-hidden":"true",class:c(a(ke).Spinner)},[k("div",{role:"button",tabindex:"-1",class:c(a(ke).Segment),onClick:i[0]||(i[0]=r=>n(1)),onMousedown:i[1]||(i[1]=r=>s.$emit("mousedown")),onMouseup:i[2]||(i[2]=r=>s.$emit("mouseup"))},[k("div",{class:c(a(ke).SpinnerIcon)},[L(a(le),{source:a(md)},null,8,["source"])],2)],34),k("div",{role:"button",tabindex:"-1",class:c(a(ke).Segment),onClick:i[3]||(i[3]=r=>n(-1)),onMousedown:i[4]||(i[4]=r=>s.$emit("mousedown")),onMouseup:i[5]||(i[5]=r=>s.$emit("mouseup"))},[k("div",{class:c(a(ke).SpinnerIcon)},[L(a(le),{source:a(Sr)},null,8,["source"])],2)],34)],2))}});Ud.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},events:[{name:"mousedown"},{name:"mouseup"},{name:"click"},{name:"change",type:{names:["number"]}}]};const VT=["innerHTML"],HT=["innerHTML"],jd=P({props:{contents:null,currentHeight:null,minimumLines:null},emits:["height-change"],setup(e,{emit:o}){const n=e,s={"&":"&amp;","<":"&lt;",">":"&gt;","\n":"<br>","\r":""},i=new RegExp(`[${Object.keys(s).join()}]`,"g"),r=C(null),u=C(null),m=C(),x=C(n.currentHeight),v=S=>s[S],f=S=>S?`${S.replace(i,v)}<br>`:"<br>",b=S=>{let w="";for(let B=0;B<S;B++)w+="<br>";return w},T=()=>{m.value&&cancelAnimationFrame(m.value),m.value=requestAnimationFrame(()=>{if(!r.value||!u.value)return;const S=Math.max(r.value.offsetHeight,u.value.offsetHeight);S!==x.value&&o("height-change",S)})};return Te(()=>{m.value&&cancelAnimationFrame(m.value)}),Vt(()=>{T()}),(S,w)=>(l(),d("div",{"aria-hidden":"true",class:c(a(ke).Resizer)},[L(a(Je),{event:"resize",handler:T}),k("div",{ref_key:"contentNode",ref:r,class:c(a(ke).DummyInput),innerHTML:f(e.contents)},null,10,VT),e.minimumLines?(l(),d("div",{key:0,ref_key:"minimumLinesNode",ref:u,class:c(a(ke).DummyInput),innerHTML:b(e.minimumLines)},null,10,HT)):_("",!0)],2))}});jd.__docgenInfo={exportName:"default",displayName:"Resizer",description:"",tags:{},props:[{name:"contents",required:!1,type:{name:"string"}},{name:"currentHeight",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"minimumLines",required:!1,type:{name:"number"}}],events:[{name:"height-change",type:{names:["number"]}}]};const UT="Polaris-Connected",jT="Polaris-Connected__Item";var xs={Connected:UT,Item:jT,"Item-primary":"Polaris-Connected__Item--primary","Item-focused":"Polaris-Connected__Item--focused"};const Ts=P({props:{position:null},emits:["focus","blur"],setup(e,{emit:o}){const n=e,s=C(!1),i=p(()=>O(xs.Item,s.value&&xs["Item-focused"],n.position==="primary"&&xs["Item-primary"])),r=()=>{s.value=!0,o("focus")},u=()=>{s.value=!1,o("blur")};return(m,x)=>(l(),d("div",{class:c(a(i)),onFocus:r,onBlur:u},[h(m.$slots,"default")],34))}});Ts.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"position",required:!0,type:{name:"ItemPosition"}}],events:[{name:"focus"},{name:"blur"}],slots:[{name:"default"}]};const zd=P({setup(e){return(o,n)=>(l(),d("div",{class:c(a(xs).Connected)},[o.$slots.left?(l(),A(a(Ts),{key:0,position:"left"},{default:y(()=>[h(o.$slots,"left")]),_:3})):_("",!0),o.$slots.default?(l(),A(a(Ts),{key:1,position:"primary"},{default:y(()=>[h(o.$slots,"default")]),_:3})):_("",!0),o.$slots.right?(l(),A(a(Ts),{key:2,position:"right"},{default:y(()=>[h(o.$slots,"right")]),_:3})):_("",!0)],2))}});zd.__docgenInfo={exportName:"default",displayName:"Connected",description:"",tags:{},slots:[{name:"left"},{name:"default"},{name:"right"}]};const zT="Polaris-Labelled--hidden",WT="Polaris-Labelled__LabelWrapper",GT="Polaris-Labelled__HelpText",XT="Polaris-Labelled__Action";var cn={hidden:zT,LabelWrapper:WT,HelpText:GT,Error:"Polaris-Labelled__Error",Action:XT};const KT="Polaris-Label",YT="Polaris-Label--hidden",ZT="Polaris-Label__Text",QT="Polaris-Label__RequiredIndicator";var hs={Label:KT,hidden:YT,Text:ZT,RequiredIndicator:QT};const JT=["id","for"],Wd=P({props:{id:null,hidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,n=p(()=>O(hs.Label,o.hidden&&hs.hidden)),s=p(()=>O(hs.Text,o.requiredIndicator&&hs.RequiredIndicator));return(i,r)=>(l(),d("div",{class:c(a(n))},[k("label",{id:a(hn)(e.id),for:e.id,class:c(a(s))},[h(i.$slots,"default")],10,JT)],2))}});Wd.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"string"}},{name:"hidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const eS=["id"],Ro=P({props:{id:null,error:{type:[null,Boolean]},action:null,labelHidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,n=p(()=>o.error&&typeof o.error!="boolean"),s=p(()=>O(o.labelHidden&&cn.hidden));return(i,r)=>(l(),d("div",{class:c(a(s))},[i.$slots.label?(l(),d("div",{key:0,class:c(a(cn).LabelWrapper)},[L(a(Wd),pe({id:e.id,requiredIndicator:e.requiredIndicator,hidden:!1},i.$attrs),{default:y(()=>[h(i.$slots,"label")]),_:3},16,["id","requiredIndicator"]),e.action?(l(),d("div",{key:0,class:c(a(cn).Action)},[L(a(pt),{action:e.action,overrides:{plain:!0}},null,8,["action"])],2)):_("",!0)],2)):_("",!0),h(i.$slots,"default"),a(n)?(l(),d("div",{key:1,class:c(a(cn).Error)},[typeof e.error=="string"?(l(),A(a(ba),{key:0,message:e.error,fieldID:a(RT)(e.id)},null,8,["message","fieldID"])):(l(),A(Ie(e.error),{key:1}))],2)):_("",!0),i.$slots["help-text"]?(l(),d("div",{key:2,class:c(a(cn).HelpText),id:a(Gs)(e.id)},[h(i.$slots,"help-text")],10,eS)):_("",!0)],2))}});Ro.__docgenInfo={exportName:"default",displayName:"Labelled",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"TSIndexedAccessType"}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"action",description:"An action",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"label"},{name:"default"},{name:"help-text"}]};const tS=["id"],aS=["id"],oS=["id"],nS=["aria-live"],sS=["disabled"],iS=k("p",null,"Clear button",-1),we=P({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue","clear-button-click"],setup(e,{emit:o}){const n=e,s=fe("lang"),i=C(null),r=C(null),u=C(null),m=C(null),x=C(null),v=ce(),f=p(()=>{var $;return($=v["connected-left"])==null?void 0:$.call(v)}),b=p(()=>{var $;return($=v["connected-right"])==null?void 0:$.call(v)}),T=p(()=>{var $;return($=v["help-text"])==null?void 0:$.call(v)}),S=p(()=>{var $;return($=v.prefix)==null?void 0:$.call(v)}),w=p(()=>{var $;return($=v.suffix)==null?void 0:$.call(v)}),B=p(()=>{var $;return($=v.verticalContent)==null?void 0:$.call(v)}),I=C(),E=C(),q=C();Ee(()=>n.focused,()=>{!i.value||n.focused===void 0||(n.focused?i.value.focus():i.value.blur())}),Ee([()=>E.value,()=>n.modelValue,()=>n.type,()=>n.suggestion],()=>{const $=n.type==="text"||n.type==="tel"||n.type==="search"||n.type==="url"||n.type==="password";!i.value||!$||!n.suggestion||i.value.setSelectionRange(n.modelValue.length,n.suggestion.length)});const{useUniqueId:U}=De(),K=p(()=>U("TextField",n.id)),D=p(()=>n.type==="currency"?"text":n.type),X=p(()=>{if(!!n.multiline)return typeof n.multiline=="number"?n.multiline:1}),F=p(()=>J.value!==""),z=p(()=>n.multiline&&I.value?{height:`${I.value}px`}:{}),ne=p(()=>O(ke.TextField,Boolean(J.value)&&ke.hasValue,n.disabled&&ke.disabled,n.readOnly&&ke.readOnly,n.error&&ke.error,n.multiline&&ke.multiline,E.value&&ke.focus)),he=p(()=>{const $=n.align&&ke[Le("Input-align",n.align)];return O(ke.Input,$,w.value&&ke["Input-suffixed"],n.clearButton&&ke["Input-hasClearButton"],n.monospaced&&ke.monospaced)}),te=p(()=>O(ke.CharacterCount,n.multiline&&ke.AlignFieldBottom)),Ne=p(()=>O(ke.Backdrop,f.value&&ke["Backdrop-connectedLeft"],b.value&&ke["Backdrop-connectedRight"])),H=p(()=>O(ke.ClearButton,!F.value&&ke.AlignFieldBottom)),J=p(()=>n.suggestion?n.suggestion:n.modelValue),ue=p(()=>n.step?n.step:1),ve=p(()=>n.max?n.max:1/0),ge=p(()=>n.min?n.min:-1/0),Ve=p(()=>{if(!!n.multiline)return Boolean(n.multiline)||n.multiline>0?{"aria-multiline":!0}:void 0}),me=p(()=>J.value.length);p(()=>n.maxLength?s.Polaris.TextField.characterCountWithMaxLength({count:me.value,limit:n.maxLength}):s.Polaris.TextField.characterCount({count:me}));const Se=p(()=>n.maxLength?`${me.value}/${n.maxLength}`:me.value),ee=p(()=>{const $=[];return n.error&&$.push(`${K.value}Error`),T.value&&$.push(Gs(K.value)),n.showCharacterCount&&$.push(`${K.value}-CharacterCounter`),$.length?$.join(" "):""}),xe=p(()=>{const $=[];return S.value&&$.push(`${K.value}-Prefix`),w.value&&$.push(`${K.value}-Suffix`),B.value&&$.push(`${K.value}-VerticalContent`),$.unshift(hn(K.value)),$.join(" ")}),Be=$=>{I.value=$},$e=$=>$ instanceof HTMLElement&&(u.value&&u.value.contains($)||m.value&&m.value.contains($)),_e=$=>{const j=$.target;$e(j)||(E.value=!0)},st=$=>{var ie;const j=$.target;$e(j)||E.value||(ie=i.value)==null||ie.focus()},Bt=$=>{const j=$.target;o("update:modelValue",j.value),o("change",$)},it=$=>{const j=Qe=>(Qe.toString().split(".")[1]||[]).length,ie=n.modelValue?parseFloat(n.modelValue):0;if(typeof ie!="number")return;const Me=Math.max(j(ie),j(ue.value)),je=Math.min(Number(ve.value),Math.max(ie+$*ue.value,Number(ge.value)));o("update:modelValue",String(je.toFixed(Me)))},gt=()=>{clearTimeout(q.value)},Z=()=>{let ie=200;const Me=()=>{ie>50&&(ie-=10),it(0),q.value=window.setTimeout(Me,ie)};q.value=window.setTimeout(Me,ie),document.addEventListener("mouseup",gt,{once:!0})},Ae=$=>{const{key:j,which:ie}=g({},$),Me=/[\d.eE+-]$/;n.type!=="number"||ie!==13||Me.test(j)||$.preventDefault()},G=$=>{var j;n.selectTextOnFocus&&!n.suggestion&&((j=(n.multiline?r:i).value)==null||j.select()),o("focus",$)};return($,j)=>(l(),A(a(Ro),{id:a(K),error:e.error,action:e.labelAction,labelHidden:e.labelHidden,requiredIndicator:e.requiredIndicator},Ue({default:y(()=>[L(a(zd),null,Ue({default:y(()=>[k("div",{class:c(a(ne)),onFocus:_e,onClick:st,onBlur:j[3]||(j[3]=ie=>E.value=!1)},[a(v).prefix?(l(),d("div",{key:0,id:`${a(K)}Prefix`,class:c(a(ke).Prefix),ref_key:"prefixRef",ref:u},[h($.$slots,"prefix")],10,tS)):_("",!0),a(v)["vertical-content"]?(l(),d("div",{key:1,class:c(a(ke).VerticalContent),id:`${a(K)}-VerticalContent`,ref_key:"verticalContentRef",ref:x},[h($.$slots,"vertical-content"),(l(),A(Ie(e.multiline?"textarea":"input"),pe({id:a(K),name:e.name,disabled:e.disabled,readonly:e.readOnly,role:e.role,autofocus:e.autoFocus,value:e.modelValue,placeholder:e.placeholder,style:a(z),autocomplete:e.autoComplete,class:a(he),ref:e.multiline?"textareaRef":"inputRef",min:e.min,max:e.max,step:e.step,minlength:e.minLength,maxlength:e.maxLength,spellcheck:e.spellCheck,pattern:e.pattern,inputMode:e.inputMode,rows:a(X),type:a(D),"aria-describedby":a(ee),"aria-labelledby":a(xe),"aria-invalid":Boolean(e.error),"aria-owns":e.ariaOwns,"aria-activedescendant":e.ariaActiveDescendant,"aria-autocomplete":e.ariaAutocomplete,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-required":e.requiredIndicator},a(Ve),{onInput:Bt,onKeydown:Ae,onFocus:G,onBlur:j[0]||(j[0]=ie=>$.$emit("blur"))}),{default:y(()=>[e.multiline?(l(),d(Y,{key:0},[re(W(e.modelValue),1)],64)):_("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"]))],10,aS)):(l(),A(Ie(e.multiline?"textarea":"input"),pe({key:2,id:a(K),name:e.name,disabled:e.disabled,readonly:e.readOnly,role:e.role,autofocus:e.autoFocus,value:e.modelValue,placeholder:e.placeholder,style:a(z),autocomplete:e.autoComplete,class:a(he),ref:e.multiline?"textareaRef":"inputRef",min:e.min,max:e.max,step:e.step,minlength:e.minLength,maxlength:e.maxLength,spellcheck:e.spellCheck,pattern:e.pattern,inputMode:e.inputMode,rows:a(X),type:a(D),"aria-describedby":a(ee),"aria-labelledby":a(xe),"aria-invalid":Boolean(e.error),"aria-owns":e.ariaOwns,"aria-activedescendant":e.ariaActiveDescendant,"aria-autocomplete":e.ariaAutocomplete,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-required":e.requiredIndicator},a(Ve),{onInput:Bt,onKeydown:Ae,onFocus:G,onBlur:j[1]||(j[1]=ie=>$.$emit("blur"))}),{default:y(()=>[e.multiline?(l(),d(Y,{key:0},[re(W(e.modelValue),1)],64)):_("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"])),a(v).suffix?(l(),d("div",{key:3,id:`${a(K)}Suffix`,class:c(a(ke).Suffix),ref_key:"suffixRef",ref:m},[h($.$slots,"suffix")],10,oS)):_("",!0),e.showCharacterCount?(l(),d("div",{key:4,class:c(a(te)),"aria-live":E.value?"polite":"off","aria-atomic":"true"},[k("p",null,W(a(Se)),1)],10,nS)):_("",!0),a(F)&&e.clearButton?(l(),d("button",{key:5,class:c(a(H)),disabled:e.disabled,onClick:j[2]||(j[2]=ie=>$.$emit("clear-button-click",a(K)))},[L(a(et),null,{default:y(()=>[iS]),_:1}),L(a(le),{source:a(Hd),color:"base"},null,8,["source"])],10,sS)):_("",!0),e.type==="number"&&e.step!==0&&!e.disabled&&!e.readOnly?(l(),A(a(Ud),{key:6,onChange:it,onMousedown:Z,onMouseup:gt})):_("",!0),k("div",{class:c(a(Ne))},null,2),e.multiline?(l(),A(a(jd),{key:7,contents:a(J)||e.placeholder,currentHeight:I.value,minimumLines:typeof e.multiline=="number"?e.multiline:1,onHeightChange:Be},null,8,["contents","currentHeight","minimumLines"])):_("",!0)],34)]),_:2},[a(v)["connected-left"]?{name:"left",fn:y(()=>[h($.$slots,"connected-left")])}:void 0,a(v)["connected-right"]?{name:"right",fn:y(()=>[h($.$slots,"connected-right")])}:void 0]),1024)]),_:2},[a(v).label?{name:"label",fn:y(()=>[h($.$slots,"label")])}:void 0,a(v)["help-text"]?{name:"help-text",fn:y(()=>[h($.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden","requiredIndicator"]))}});we.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"blur"},{name:"clear-button-click",type:{names:["string"]}},{name:"focus",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"connected-left"},{name:"connected-right"},{name:"prefix"},{name:"vertical-content"},{name:"suffix"}]};const Tn=P({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:{default:"list"},showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const n=e,{activeOptionId:s,listboxId:i,expanded:r,setTextFieldFocused:u,setTextFieldLabelId:m,onTextFieldFocus:x,onTextFieldChange:v,onTextFieldBlur:f}=fe("comboboxTextFieldContext",{}),{useUniqueId:b}=De(),T=b("ComboboxTextField"),S=p(()=>n.id||T),w=p(()=>hn(n.id||T));Ee(()=>w.value,()=>{m&&m(w.value)});const B=()=>{o("focus"),x&&x(),u&&u(!0)},I=()=>{o("blur"),f&&f(),u&&u(!1)},E=q=>{const U=q.target;o("update:modelValue",U.value),o("change",q),v&&v()};return(q,U)=>(l(),A(a(we),pe(n,{modelValue:e.modelValue,id:a(S),type:e.type,ariaAutoComplete:e.ariaAutocomplete,"aria-haspopup":"listbox",ariaActiveDescendant:a(s),ariaControls:a(i),ariaExpanded:a(r),onFocus:B,onBlur:I,onChange:E}),Ue({_:2},[q.$slots.label?{name:"label",fn:y(()=>[h(q.$slots,"label")])}:void 0,q.$slots["help-text"]?{name:"help-text",fn:y(()=>[h(q.$slots,"help-text")])}:void 0,q.$slots.prefix?{name:"prefix",fn:y(()=>[h(q.$slots,"prefix")])}:void 0,q.$slots.suffix?{name:"suffix",fn:y(()=>[h(q.$slots,"suffix")])}:void 0,q.$slots["connected-left"]?{name:"connected-left",fn:y(()=>[h(q.$slots,"connected-left")])}:void 0,q.$slots["connected-right"]?{name:"connected-right",fn:y(()=>[h(q.$slots,"connected-right")])}:void 0,q.$slots["vertical-content"]?{name:"vertical-content",fn:y(()=>[h(q.$slots,"vertical-content")])}:void 0]),1040,["modelValue","id","type","ariaAutoComplete","ariaActiveDescendant","ariaControls","ariaExpanded"]))}});Tn.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'list'"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"},{name:"connected-left"},{name:"connected-right"},{name:"vertical-content"}]};function Vo(){const e=fe("frameContext",{});function o(){if(!e)throw new kh("No frame context was provided.");return e}return{useFrame:o}}const Sn=P({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean},contextControl:null,secondaryMenu:null},setup(e){const o=e;Ht();const{useFrame:n}=Vo(),{setContextualSaveBar:s,removeContextualSaveBar:i}=n(),r=ce();return Te(()=>{const{message:u,saveAction:m,discardAction:x,alignContentFlush:v,fullWidth:f}=o;s({message:u,saveAction:m,discardAction:x,alignContentFlush:v,fullWidth:f,contextControl:r.contextControl&&r.contextControl(),secondaryMenu:r.secondaryMenu&&r.secondaryMenu()})}),lt(()=>{i()}),(u,m)=>null}});Sn.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}},{name:"contextControl",description:"Accepts a component that is used to help users switch between different contexts",required:!1,type:{name:"any"}},{name:"secondaryMenu",description:"Accepts a node that is rendered to the left of the discard and save actions",required:!1,type:{name:"any"}}]};const lS="Polaris-DatePicker",rS="Polaris-DatePicker__MonthLayout",cS="Polaris-DatePicker__MonthContainer",uS="Polaris-DatePicker__Month",dS="Polaris-DatePicker__DayCell",pS="Polaris-DatePicker__Day",mS="Polaris-DatePicker__EmptyDayCell",yS="Polaris-DatePicker__Weekday",gS="Polaris-DatePicker__Header",hS="Polaris-DatePicker__Title",bS="Polaris-DatePicker__Week";var Pe={DatePicker:lS,MonthLayout:rS,MonthContainer:cS,Month:uS,"Month-current":"Polaris-DatePicker__Month--current",DayCell:dS,"DayCell-inRange":"Polaris-DatePicker__DayCell--inRange",Day:pS,"Day-today":"Polaris-DatePicker__Day--today","Day-inRange":"Polaris-DatePicker__Day--inRange","Day-selected":"Polaris-DatePicker__Day--selected","Day-disabled":"Polaris-DatePicker__Day--disabled",EmptyDayCell:mS,Weekday:yS,"Weekday-current":"Polaris-DatePicker__Weekday--current",Header:gS,Title:hS,"Day-firstInRange":"Polaris-DatePicker__Day--firstInRange","Day-hasRange":"Polaris-DatePicker__Day--hasRange","Day-hoverRight":"Polaris-DatePicker__Day--hoverRight","Day-lastInRange":"Polaris-DatePicker__Day--lastInRange",Week:bS};const ya={months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}};function mn(e){switch(e){case 0:return"january";case 1:return"february";case 2:return"march";case 3:return"april";case 4:return"may";case 5:return"june";case 6:return"july";case 7:return"august";case 8:return"september";case 9:return"october";case 10:return"november";case 11:return"december"}}function zc(e){switch(e){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}const fS=["tabIndex","aria-label","aria-disabled","aria-pressed"],pr=P({props:{focused:{type:Boolean},day:null,selected:{type:Boolean},inRange:{type:Boolean},inHoveringRange:{type:Boolean},disabled:{type:Boolean},lastDayOfMonth:null,isLastSelectedDay:{type:Boolean},isFirstSelectedDay:{type:Boolean},isHoveringRight:{type:Boolean},rangeIsDifferent:{type:Boolean},weekday:null,selectedAccessibilityLabelPrefix:null},emits:["focus","hover","click"],setup(e,{emit:o}){const n=e,s=C(null),i=p(()=>n.lastDayOfMonth||n.day),r=p(()=>n.day?$t(new Date,n.day):null),u=p(()=>n.day?n.day.getDate():null),m=p(()=>(n.focused||n.selected||r.value||u.value===1)&&!n.disabled?0:-1),x=p(()=>O(Pe.DayCell,n.selected&&Pe["DayCell-selected"],(n.inRange||n.inHoveringRange)&&!n.disabled&&Pe["DayCell-inRange"],n.isLastSelectedDay&&Pe["DayCell-lastInRange"],n.isFirstSelectedDay&&Pe["DayCell-firstInRange"],n.isHoveringRight&&Pe["DayCell-hoverRight"],n.rangeIsDifferent&&Pe["DayCell-hasRange"])),v=p(()=>O(Pe.Day,n.selected&&Pe["Day-selected"],n.disabled&&Pe["Day-disabled"],r.value&&Pe["Day-today"],(n.inRange||n.inHoveringRange)&&!n.disabled&&Pe["Day-inRange"],n.isLastSelectedDay&&Pe["Day-lastInRange"],n.isFirstSelectedDay&&Pe["Day-firstInRange"],n.isHoveringRight&&Pe["Day-hoverRight"],n.rangeIsDifferent&&Pe["Day-hasRange"])),f=p(()=>{if(!n.day)return null;const B=mn(n.day.getMonth());return B?ya.months[B]:""}),b=p(()=>[n.selected&&n.selectedAccessibilityLabelPrefix?`${n.selectedAccessibilityLabelPrefix} `:"",`${r.value?"Today ":""}`,`${n.weekday?n.weekday:""} `,`${f.value} `,`${u.value} `,`${n.day?n.day.getFullYear():new Date().getFullYear()}`].join(""));Vt(()=>{n.focused&&s.value&&setTimeout(()=>{s.value.focus()},10)});const T=()=>{o("focus",n.day)},S=()=>{o("hover",i.value)},w=()=>{!n.disabled&&n.day&&o("click",n.day)};return(B,I)=>e.day?(l(),d("td",{key:0,class:c(a(x))},[k("button",{type:"button",ref_key:"dayRef",ref:s,tabIndex:a(m),class:c(a(v)),"aria-label":a(b),"aria-disabled":e.disabled,"aria-pressed":e.selected,onFocus:T,onMouseover:S,onClick:w},W(a(u)),43,fS)],2)):(l(),d("td",{key:1,class:c(a(Pe).EmptyDayCell),onMouseover:S},null,34))}});pr.__docgenInfo={exportName:"default",displayName:"Day",description:"",tags:{},props:[{name:"focused",required:!1,type:{name:"boolean"}},{name:"day",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"inRange",required:!1,type:{name:"boolean"}},{name:"inHoveringRange",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"lastDayOfMonth",required:!1,type:{name:"any"}},{name:"isLastSelectedDay",required:!1,type:{name:"boolean"}},{name:"isFirstSelectedDay",required:!1,type:{name:"boolean"}},{name:"isHoveringRight",required:!1,type:{name:"boolean"}},{name:"rangeIsDifferent",required:!1,type:{name:"boolean"}},{name:"weekday",required:!1,type:{name:"string"}},{name:"selectedAccessibilityLabelPrefix",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["union"]}},{name:"hover",type:{names:["union"]}},{name:"click",type:{names:["Date"]}}]};const vS=["aria-label"],Gd=P({props:{label:null,title:null,current:{type:Boolean}},setup(e){const o=e,n=p(()=>O(Pe.Weekday,o.current&&Pe["Weekday-current"]));return(s,i)=>(l(),d("th",{"aria-label":e.label,scope:"col",class:c(a(n))},W(e.title),11,vS))}});Gd.__docgenInfo={exportName:"default",displayName:"Weekday",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"current",required:!0,type:{name:"boolean"}}]};const mr=P({props:{focusedDate:null,selected:null,hoverDate:null,month:null,year:null,disableDatesBefore:null,disableDatesAfter:null,allowRange:{type:Boolean},weekStartsOn:null,accessibilityLabelPrefixes:null},emits:["focus","hover","click","change"],setup(e,{emit:o}){const n=e,s=new Date,i=p(()=>s.getMonth()===n.month&&s.getFullYear()===n.year),r=p(()=>O(Pe.Title,i.value&&Pe["Month-current"])),u="Polaris-DatePicker__WeekHeadings",m=p(()=>Qy(n.month,n.year,n.weekStartsOn)),x=p(()=>{const F=mn(n.month);return F?ya.months[F]:""}),v=p(()=>Jy(n.weekStartsOn)),f=p(()=>new Date(n.year,n.month+1,0)),b=p(()=>!(n.selected&&$t(n.selected.start,n.selected.end))),T=F=>{const z=ag(n.allowRange?n.selected:void 0,F);o("change",z)},S=F=>n.disableDatesBefore&&ks(F,n.disableDatesBefore)||n.disableDatesAfter&&Ls(F,n.disableDatesAfter),w=F=>n.allowRange&&n.selected&&X(F,n.selected),B=F=>n.allowRange&&n.selected&&(!$t(n.selected.start,n.selected.end)&&D(F,n.selected)||n.hoverDate&&$t(n.selected.start,n.selected.end)&&Ls(n.hoverDate,n.selected.start)&&$t(F,n.hoverDate)&&!w(F)),I=F=>n.hoverDate&&ks(F,n.hoverDate),E=F=>{if(!n.accessibilityLabelPrefixes)return"";const[z,ne]=n.accessibilityLabelPrefixes;if(n.allowRange&&w(F)||!n.allowRange&&z)return z;if(n.allowRange&&B(F))return ne},q=(F,z,ne)=>{if(!n.allowRange||!z||!ne||F==null)return!1;const{start:he,end:te}=z;return Boolean($t(he,te)&&F>he&&F<=ne)};function U(F){const z=zc(F);return z?ya.daysAbbreviated[z]:""}function K(F){const z=zc(F);return z?ya.days[z]:""}function D(F,z){if(F==null)return!1;const{end:ne}=z;return Boolean(ne&&$t(ne,F))}function X(F,z){if(F==null)return!1;const{start:ne}=z;return Boolean(ne&&$t(ne,F))}return(F,z)=>(l(),d("div",{class:c(a(Pe).MonthContainer)},[k("table",{role:"grid",class:c(a(Pe).Month)},[k("caption",{class:c(a(r))},W(a(x))+" "+W(e.year),3),k("thead",null,[k("tr",{class:c(u)},[(l(!0),d(Y,null,be(a(v),ne=>(l(),A(a(Gd),{key:ne,title:U(ne),label:K(ne),current:a(i)&&new Date().getDay()===ne},null,8,["title","label","current"]))),128))])]),k("tbody",null,[(l(!0),d(Y,null,be(a(m),(ne,he)=>(l(),d("tr",{key:he,class:c(a(Pe).Week)},[(l(!0),d(Y,null,be(ne,(te,Ne)=>(l(),d(Y,{key:Ne},[te?(l(),A(a(pr),{key:1,selectedAccessibilityLabelPrefix:E(te),weekday:K(Ne),focused:e.focusedDate&&a($t)(te,e.focusedDate),day:te,selected:e.selected&&a(eg)(te,e.selected),inRange:e.selected&&a(tg)(te,e.selected),disabled:S(te),inHoveringRange:q(te,e.selected,e.hoverDate),isLastSelectedDay:B(te),isFirstSelectedDay:w(te),isHoveringRight:I(te),rangeIsDifferent:a(b),onFocus:H=>F.$emit("focus",te),onClick:T,onHover:H=>F.$emit("hover",te)},null,8,["selectedAccessibilityLabelPrefix","weekday","focused","day","selected","inRange","disabled","inHoveringRange","isLastSelectedDay","isFirstSelectedDay","isHoveringRight","rangeIsDifferent","onFocus","onHover"])):(l(),A(a(pr),{key:0,lastDayOfMonth:a(f),onHover:z[0]||(z[0]=H=>F.$emit("hover",null))},null,8,["lastDayOfMonth"]))],64))),128))],2))),128))])],2)],2))}});mr.__docgenInfo={exportName:"default",displayName:"Month",description:"",tags:{},props:[{name:"focusedDate",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"Range"}},{name:"hoverDate",required:!1,type:{name:"Date"}},{name:"month",required:!0,type:{name:"number"}},{name:"year",required:!0,type:{name:"number"}},{name:"disableDatesBefore",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",required:!1,type:{name:"Date"}},{name:"allowRange",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",required:!0,type:{name:"number"}},{name:"accessibilityLabelPrefixes",required:!1,type:{name:"TSTupleType"}}],events:[{name:"hover",type:{names:["union"]}},{name:"focus",type:{names:["union"]}},{name:"click",type:{names:["Date"]}},{name:"change",type:{names:["union"]}}]};const xS=["id"],Xs=P({props:{id:null,modelValue:null,month:null,year:null,allowRange:{type:Boolean},disableDatesBefore:null,disableDatesAfter:null,multiMonth:{type:Boolean},weekStartsOn:{default:0},dayAccessibilityLabelPrefix:null},emits:["month-change","change","update:modelValue"],setup(e,{emit:o}){const n=e,s=C(),i=C(),r=p(()=>Nc(n.month,n.year)),u=p(()=>Bc(n.month)),m=p(()=>Nc(u.value,r.value)),x=p(()=>Bc(u.value)),v=p(()=>ng(n.month,n.year)),f=p(()=>sg(n.month)),b=p(()=>{const H=mn(f.value);return H?ya.months[H]:""}),T=p(()=>{if(n.multiMonth){const J=mn(x.value);return J?ya.months[J]:""}const H=mn(u.value);return H?ya.months[H]:""}),S=p(()=>n.multiMonth?m.value:r.value),w=p(()=>Ne(n.modelValue)),B=p(()=>n.allowRange?"Start of range":n.dayAccessibilityLabelPrefix),I="End of range",E=p(()=>[B.value,I]),q=p(()=>`Show previous month, ${b.value} ${v.value}`),U=p(()=>`Show next month, ${T.value} ${S.value}`),K=(H,J)=>{o("month-change",{month:H,year:J})},D=(H,J)=>{s.value=void 0,K(H,J)},X=H=>{s.value=H||void 0},F=H=>{i.value=H||void 0},z=H=>{K(H.getMonth(),H.getFullYear()),i.value=H,s.value=H},ne=H=>{if(H){const{end:J}=H;i.value=J,s.value=new Date(J),o("update:modelValue",H)}o("change",H)},he=H=>{const{key:J}=H,ue=Ne(n.modelValue),ve=s.value||ue&&ue.start;if(!!ve){if(J==="ArrowUp"){const ge=new Date(ve);ge.setDate(ve.getDate()-7),n.disableDatesBefore&&ks(ge,n.disableDatesBefore)||z(ge)}if(J==="ArrowDown"){const ge=new Date(ve);ge.setDate(ve.getDate()+7),n.disableDatesAfter&&Ls(ge,n.disableDatesAfter)||z(ge)}if(J==="ArrowRight"){const ge=new Date(ve);ge.setDate(ve.getDate()+1),n.disableDatesAfter&&Ls(ge,n.disableDatesAfter)||z(ge)}if(J==="ArrowLeft"){const ge=new Date(ve);ge.setDate(ve.getDate()-1),n.disableDatesBefore&&ks(ge,n.disableDatesBefore)||z(ge)}}},te=H=>{const{key:J}=H;(J==="ArrowUp"||J==="ArrowDown"||J==="ArrowLeft"||J==="ArrowRight")&&(H.preventDefault(),H.stopPropagation())};function Ne(H){return H instanceof Date?{start:H,end:H}:H}return(H,J)=>(l(),d("div",{id:e.id,class:c(a(Pe).DatePicker),onKeydown:te,onKeyup:he},[k("div",{class:c(a(Pe).Header)},[L(a(ye),{plain:"",icon:a($o),accessibilityLabel:a(q),onClick:J[0]||(J[0]=ue=>D(a(f),a(v)))},null,8,["icon","accessibilityLabel"]),L(a(ye),{plain:"",icon:a(og),accessibilityLabel:a(U),onClick:J[1]||(J[1]=ue=>D(a(u),a(r)))},null,8,["icon","accessibilityLabel"])],2),k("div",{class:c(a(Pe).MonthLayout)},[L(a(mr),{focusedDate:s.value,month:e.month,year:e.year,selected:Ne(e.modelValue),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a(E),onChange:ne,onHover:F,onFocus:X},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"]),e.multiMonth?(l(),A(a(mr),{key:0,focusedDate:s.value,month:a(u),year:a(r),selected:a(w),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a(E),onChange:ne,onHover:F,onFocus:X},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"])):_("",!0)],2)],42,xS))}});Xs.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:"The selected date or range of dates",required:!1,type:{name:"Range"}},{name:"month",description:"The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December",required:!0,type:{name:"number"}},{name:"year",description:"The year to show",required:!0,type:{name:"number"}},{name:"allowRange",description:"Allow a range of dates to be selected",required:!1,type:{name:"boolean"}},{name:"disableDatesBefore",description:"Disable selecting dates before this.",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",description:"Disable selecting dates after this.",required:!1,type:{name:"Date"}},{name:"multiMonth",description:"The selection can span multiple months",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",description:"First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"dayAccessibilityLabelPrefix",description:"Visually hidden prefix text for selected days on single selection date pickers",required:!1,type:{name:"string"}}],events:[{name:"month-change",type:{names:["{ month: number, year: number }"]}},{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const TS="Polaris-DescriptionList",SS="Polaris-DescriptionList__Term",CS="Polaris-DescriptionList--spacingTight",AS="Polaris-DescriptionList__Description";var Bs={DescriptionList:TS,Term:SS,spacingTight:CS,Description:AS};const Ks=P({props:{spacing:{default:"loose"}},setup(e){const o=e,n=p(()=>O(Bs.DescriptionList,o.spacing==="tight"&&Bs.spacingTight));return(s,i)=>(l(),d("dl",{class:c(a(n))},[h(s.$slots,"default")],2))}});Ks.__docgenInfo={exportName:"default",displayName:"DescriptionList",description:"",tags:{},props:[{name:"spacing",description:"Determines the spacing between list items",tags:{default:[{description:"'loose'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"loose"'},{name:'"tight"'}]},defaultValue:{func:!1,value:"'loose'"}}],slots:[{name:"default"}]};const Xd=P({setup(e){const o=O(Bs.Term);return(n,s)=>(l(),d("dt",{class:c(a(o))},[h(n.$slots,"default")],2))}});Xd.__docgenInfo={exportName:"default",displayName:"DescriptionListTerm",description:"",tags:{},slots:[{name:"default"}]};const Kd=P({setup(e){const o=O(Bs.Description);return(n,s)=>(l(),d("dd",{class:c(a(o))},[h(n.$slots,"default")],2))}});Kd.__docgenInfo={exportName:"default",displayName:"DescriptionListDesc",description:"",tags:{},slots:[{name:"default"}]};const kS="Polaris-DisplayText",LS="Polaris-DisplayText--sizeSmall",wS="Polaris-DisplayText--sizeMedium",_S="Polaris-DisplayText--sizeLarge",MS="Polaris-DisplayText--sizeExtraLarge";var Wc={DisplayText:kS,sizeSmall:LS,sizeMedium:wS,sizeLarge:_S,sizeExtraLarge:MS};const Cn=P({props:{element:{default:"p"},size:{default:"medium"}},setup(e){const o=e,n=p(()=>O(Wc.DisplayText,o.size&&Wc[Le("size",o.size)]));return(s,i)=>(l(),A(Ie(e.element),{class:c(a(n))},{default:y(()=>[h(s.$slots,"default")]),_:3},8,["class"]))}});Cn.__docgenInfo={exportName:"default",displayName:"DisplayText",description:"",tags:{},props:[{name:"element",description:"Name of element to use for text",tags:{default:[{description:"'p'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'p'"}},{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}]};const PS={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},NS=k("path",{"fill-rule":"evenodd",d:"M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM5.293 8.293l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 7.414V15a1 1 0 1 1-2 0V7.414L6.707 9.707a1 1 0 0 1-1.414-1.414z"},null,-1),BS=[NS];function IS(e,o){return l(),d("svg",PS,BS)}var DS={render:IS};const $S={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},FS=k("path",{"fill-rule":"evenodd",d:"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),ES=[FS];function OS(e,o){return l(),d("svg",$S,ES)}var qS={render:OS};function Yd(e=""){const o=e.toLowerCase();return o.charAt(0).toUpperCase()+o.slice(1)}const RS="Polaris-DropZone",VS="Polaris-DropZone--focused",HS="Polaris-DropZone--hasOutline",US="Polaris-DropZone--isDisabled",jS="Polaris-DropZone--isDragging",zS="Polaris-DropZone--sizeLarge",WS="Polaris-DropZone--sizeMedium",GS="Polaris-DropZone--sizeSmall",XS="Polaris-DropZone--measuring",KS="Polaris-DropZone__Container",YS="Polaris-DropZone__Overlay",ZS="Polaris-DropZone--hasError";var vt={DropZone:RS,focused:VS,hasOutline:HS,isDisabled:US,isDragging:jS,sizeLarge:zS,sizeMedium:WS,sizeSmall:GS,measuring:XS,Container:KS,Overlay:YS,hasError:ZS};const Zd=P({props:{id:null,accept:null,disabled:{type:Boolean},type:null,multiple:{type:Boolean},openFileDialog:{type:Boolean}},emits:["focus","blur","input","file-dialog-close"],setup(e,{emit:o}){const n=e,s=C();Te(()=>{n.openFileDialog&&i()}),Vt(()=>{n.openFileDialog&&i()});const i=()=>{r(),o("file-dialog-close")},r=()=>{!s.value||s.value.click()},u=v=>{!v.target.files||o("input",v)},m=()=>{o("focus")},x=()=>{o("blur")};return(v,f)=>(l(),d("input",pe(n,{ref_key:"fileInputNode",ref:s,autoComplete:"off",onChange:u,onFocus:m,onBlur:x}),null,16))}});Zd.__docgenInfo={exportName:"default",displayName:"DropZoneInput",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"accept",required:!1,type:{name:"string"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"DropZoneFileType"}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"openFileDialog",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["Event"]}},{name:"file-dialog-close"}]};const QS=["dragover","dragenter","drop"];function JS(e,o){return e.type==="application/x-moz-file"||eC(e,o)}function Gc(e){if(tC(e)&&e.dataTransfer){const o=e.dataTransfer;if(o.files&&o.files.length)return Array.from(o.files);if(o.items&&o.items.length)return Array.from(o.items)}else if(aC(e)&&e.target.files){const o=e.target;return Array.from(o.files||[])}return[]}function eC(e,o){if(e&&o){const n=e.name||"",s=e.type||"",i=s.replace(/\/.*$/,"");return(Array.isArray(o)?o:o.split(",")).some(u=>{const m=u.trim();return m.startsWith(".")?n.toLowerCase().endsWith(m.toLowerCase()):m.endsWith("/*")?i===m.replace(/\/.*$/,""):s===m})}return!0}function tC(e){return QS.indexOf(e.type)>0}function aC(e){return e.type==="change"}const oC=!0;function Qd(e){return e?"allowMultiple":"single"}const nC=["aria-disabled"],Ys=P({props:{label:null,labelAction:null,labelHidden:{type:Boolean},id:null,accept:null,type:{default:"file"},active:{type:Boolean},error:{type:Boolean},outline:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},overlayText:null,errorOverlayText:null,allowMultiple:{type:Boolean,default:oC},disabled:{type:Boolean,default:!1},dropOnPage:{type:Boolean},openFileDialog:{type:Boolean},variableHeight:{type:Boolean},customValidator:null},emits:["drop","drop-accepted","drop-rejected","dragover","dragenter","dragleave","file-dialog-close"],setup(e,{emit:o}){const n=e,s=fe("lang"),i=ce(),r=Ht(),{useUniqueId:u}=De(),m=u("DropZone",n.id),x=Yd(n.type),v=Qd(n.allowMultiple||!1),f=C(null),b=C([]),T=C(!0),S=C("large"),w=C(!1),B=C(!1),I=C(!1),E=n.overlayText?n.overlayText:s.Polaris.DropZone[v][`overlayText${x}`],q=n.errorOverlayText?n.errorOverlayText:s.Polaris.DropZone[`errorOverlayText${x}`],U=s.Polaris.DropZone[v][`label${x}`],K=p(()=>i.label||n.label?n.labelHidden:!0),D=p(()=>O(vt.DropZone,n.outline&&vt.hasOutline,I.value&&vt.focused,(n.active||w.value)&&vt.isDragging,n.disabled&&vt.isDisabled,(B.value||n.error)&&vt.hasError,!n.variableHeight&&vt[Le("size",S.value)],T.value&&vt.measuring)),X=p(()=>(n.active||w.value)&&!B.value&&!n.error&&n.overlay),F=p(()=>w.value&&(B.value||n.error));Te(()=>{z();const ee=n.dropOnPage?document:f.value;!ee||(ee.addEventListener("drop",H),ee.addEventListener("dragover",ue),ee.addEventListener("dragenter",J),ee.addEventListener("dragleave",ve),window.addEventListener("resize",z))}),lt(()=>{const ee=n.dropOnPage?document:f.value;!ee||(ee.removeEventListener("drop",H),ee.removeEventListener("dragover",ue),ee.removeEventListener("dragenter",J),ee.removeEventListener("dragleave",ve),window.removeEventListener("resize",z))});const z=Rt(()=>{if(!f.value)return;if(n.variableHeight){T.value=!1;return}const ee=f.value.getBoundingClientRect().width;S.value="large",ee<100?S.value="small":ee<160&&(S.value="medium"),T.value&&(T.value=!1)},50,{trailing:!0}),ne=()=>{I.value=!0},he=()=>{I.value=!1},te=()=>{o("file-dialog-close")},Ne=ee=>{const xe=[],Be=[];return Array.from(ee).forEach($e=>{!JS($e,n.accept)||n.customValidator&&!n.customValidator($e)?Be.push($e):xe.push($e)}),n.allowMultiple||(xe.splice(1,xe.length),Be.push(...xe.slice(1))),{files:ee,acceptedFiles:xe,rejectedFiles:Be}},H=ee=>{if(me(ee),n.disabled)return;const xe=Gc(ee),{files:Be,acceptedFiles:$e,rejectedFiles:_e}=Ne(xe);b.value=[],w.value=!1,B.value=_e.length>0,o("drop",Be,$e,_e),$e.length>0&&o("drop-accepted",$e),_e.length>0&&o("drop-rejected",_e),ee.target.value=""},J=ee=>{if(me(ee),n.disabled)return;const xe=Gc(ee);if(ee.target&&!b.value.includes(ee.target)&&b.value.push(ee.target),w.value)return;const{rejectedFiles:Be}=Ne(xe);w.value=!0,B.value=Be.length>0,o("dragenter")},ue=ee=>{me(ee),!n.disabled&&o("dragover")},ve=ee=>{ee.preventDefault(),!n.disabled&&(b.value=b.value.filter(xe=>{const Be=n.dropOnPage&&!xr?document.body:xe;return xe!==ee.target&&Be&&Be.contains(xe)}),!(b.value.length>0)&&(w.value=!1,B.value=!1,o("dragleave")))},ge=()=>{const ee=f.value&&f.value.querySelector(`#${m}`);ee&&ee instanceof HTMLElement&&ee.click()};function Ve(ee){if(!n.disabled)return r.onClick?r.onClick(ee):ge()}const me=ee=>{ee.preventDefault(),ee.stopPropagation()},Se=As({disabled:n.disabled,focused:I,size:S,type:n.type,measuring:T,allowMultiple:n.allowMultiple});return ze("dropZoneContext",Se),(ee,xe)=>(l(),A(a(Ro),{id:a(m),action:e.labelAction,labelHidden:a(K)},{label:y(()=>[a(i).label?h(ee.$slots,"label",{key:0}):e.label?(l(),d(Y,{key:1},[re(W(e.label),1)],64)):(l(),d(Y,{key:2},[re(W(a(U)),1)],64))]),default:y(()=>[k("div",{ref_key:"dropZoneRef",ref:f,class:c(a(D)),"aria-disabled":e.disabled,onClick:Ve,onDragstart:me},[a(X)?(l(),d("div",{key:0,class:c(a(vt).Overlay)},[L(a(Re),{vertical:"",spacing:"tight"},{default:y(()=>[S.value==="small"?(l(),A(a(le),{key:0,source:a(DS),color:"interactive"},null,8,["source"])):(l(),A(a(ea),{key:1},{default:y(()=>[L(a(yt),{variation:"strong"},{default:y(()=>[re(W(a(E)),1)]),_:1})]),_:1}))]),_:1})],2)):_("",!0),a(F)?(l(),d("div",{key:1,class:c(a(vt).Overlay)},[L(a(Re),{vertical:"",spacing:"tight"},{default:y(()=>[S.value==="small"?(l(),A(a(le),{key:0,source:a(qS),color:"critical"},null,8,["source"])):(l(),A(a(ea),{key:1},{default:y(()=>[L(a(yt),{variation:"strong"},{default:y(()=>[re(W(a(q)),1)]),_:1})]),_:1}))]),_:1})],2)):_("",!0),L(a(et),null,{default:y(()=>[L(Zd,{type:"file",id:a(m),accept:e.accept,disabled:e.disabled,multiple:e.allowMultiple||!1,openFileDialog:e.openFileDialog,onInput:H,onFocus:ne,onBlur:he,onFileDialogClose:te},null,8,["id","accept","disabled","multiple","openFileDialog"])]),_:1}),k("div",{class:c(a(vt).Container)},[h(ee.$slots,"default")],2)],42,nC)]),_:3},8,["id","action","labelHidden"]))}});Ys.__docgenInfo={exportName:"default",displayName:"DropZone",description:"",tags:{},props:[{name:"label",description:"Label for the file input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for file input",required:!1,type:{name:"string"}},{name:"accept",description:"Allowed file types",required:!1,type:{name:"string"}},{name:"type",description:"Whether is a file or an image",tags:{default:[{description:"'file'",title:"default"}]},required:!1,type:{name:"DropZoneFileType"},defaultValue:{func:!1,value:"'file'"}},{name:"active",description:"Sets an active state",required:!1,type:{name:"boolean"}},{name:"error",description:"Sets an error state",required:!1,type:{name:"boolean"}},{name:"outline",description:"Displays an outline border",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlay",description:"Displays an overlay on hover",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlayText",description:"Text that appears in the overlay",required:!1,type:{name:"string"}},{name:"errorOverlayText",description:"Text that appears in the overlay when set in error state",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allows multiple files to be uploaded at once",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"defaultAllowMultiple"}},{name:"disabled",description:"Sets a disabled state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropOnPage",description:"Allows a file to be dropped anywhere on the page",required:!1,type:{name:"boolean"}},{name:"openFileDialog",description:"Sets the default file dialog state",required:!1,type:{name:"boolean"}},{name:"variableHeight",description:"Allows child content to adjust height",required:!1,type:{name:"boolean"}}],events:[{name:"drop",type:{names:["Array"]}},{name:"drop-accepted",type:{names:["Array"]}},{name:"drop-rejected",type:{names:["Array"]}},{name:"dragover"},{name:"dragenter"},{name:"dragleave"},{name:"file-dialog-close"}],slots:[{name:"label"},{name:"default"}]};const sC={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},iC=k("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM5.3 8.3l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L11 7.4V15a1 1 0 1 1-2 0V7.4L6.7 9.7a1 1 0 0 1-1.4-1.4z",fill:"#5C5F62"},null,-1),lC=[iC];function rC(e,o){return l(),d("svg",sC,lC)}var cC={render:rC};const uC="Polaris-DropZone-FileUpload",dC="Polaris-DropZone-FileUpload--large",pC="Polaris-DropZone-FileUpload--small",mC="Polaris-DropZone-FileUpload__Action",yC="Polaris-DropZone-FileUpload--disabled",gC="Polaris-DropZone-FileUpload__ActionTitle";var un={FileUpload:uC,large:dC,small:pC,Action:mC,disabled:yC,ActionTitle:gC,"ActionTitle-disabled":"Polaris-DropZone-FileUpload__ActionTitle--disabled","ActionTitle-focused":"Polaris-DropZone-FileUpload__ActionTitle--focused"};const Jd=P({props:{actionTitle:null,actionHint:null},setup(e){const o=e,n=fe("lang"),{size:s,measuring:i,type:r,disabled:u,allowMultiple:m}=ig(fe("dropZoneContext")),x=Yd(r.value),v=Qd(m.value),f=p(()=>o.actionTitle||n.Polaris.DropZone[v][`actionTitle${x}`]),b=O(un.Action,u.value&&un.disabled),T=p(()=>O(un.FileUpload,s.value==="large"&&un.large,s.value==="small"&&un.small));return(S,w)=>(l(),d("div",{class:c(a(T))},[a(s)==="large"||a(s)==="medium"?(l(),A(a(Re),{key:0,vertical:"",spacing:"tight"},{default:y(()=>[k("div",{class:c(a(b))},W(a(f)),3),e.actionHint?(l(),A(a(ea),{key:0},{default:y(()=>[L(a(yt),{variation:"subdued"},{default:y(()=>[re(W(e.actionHint),1)]),_:1})]),_:1})):_("",!0)]),_:1})):(l(),A(a(cC),{key:1,width:"20"}))],2))}});Jd.__docgenInfo={exportName:"default",displayName:"FileUpload",description:"",tags:{},props:[{name:"actionTitle",required:!1,type:{name:"string"}},{name:"actionHint",required:!1,type:{name:"string"}}]};const hC="Polaris-ExceptionList",bC="Polaris-ExceptionList__Item",fC="Polaris-ExceptionList__Icon",vC="Polaris-ExceptionList--statusWarning",xC="Polaris-ExceptionList--statusCritical",TC="Polaris-ExceptionList__Bullet",SC="Polaris-ExceptionList__Title",CC="Polaris-ExceptionList__Description";var Ft={ExceptionList:hC,Item:bC,Icon:fC,statusWarning:vC,statusCritical:xC,Bullet:TC,Title:SC,Description:CC};const ep=P({setup(e){return(o,n)=>(l(),d("ul",{class:c(a(Ft).ExceptionList)},[h(o.$slots,"default")],2))}});ep.__docgenInfo={exportName:"default",displayName:"ExceptionList",description:"",tags:{},slots:[{name:"default"}]};const AC="Polaris-Truncate";var kC={Truncate:AC};const tp=P({setup(e){return(o,n)=>{const s=vr("component");return l(),A(s,{class:c(a(kC).Truncate)},{default:y(()=>[h(o.$slots,"default")]),_:3},8,["class"])}}});tp.__docgenInfo={exportName:"default",displayName:"Truncate",description:"",tags:{},slots:[{name:"default"}]};const Zs=P({props:{status:null,icon:null,title:null,truncate:{type:Boolean}},setup(e){const o=e,n=ce(),s=p(()=>O(Ft.Item,o.status&&Ft[Le("status",o.status)]));return(i,r)=>(l(),d("li",{class:c(a(s))},[k("span",{class:c(a(Ft).Icon)},[e.icon?(l(),A(a(le),{key:0,source:e.icon},null,8,["source"])):(l(),d("span",{key:1,class:c(a(Ft).Bullet)},null,2))],2),e.truncate?(l(),A(a(tp),{key:0},{default:y(()=>[e.title?(l(),d("span",{key:0,class:c(a(Ft).Title)},W(e.title),3)):_("",!0),a(n).default?(l(),d("span",{key:1,class:c(a(Ft).Description)},[h(i.$slots,"default")],2)):_("",!0)]),_:3})):(l(),d(Y,{key:1},[e.title?(l(),d("span",{key:0,class:c(a(Ft).Title)},W(e.title),3)):_("",!0),a(n).default?(l(),d("span",{key:1,class:c(a(Ft).Description)},[h(i.$slots,"default")],2)):_("",!0)],64))],2))}});Zs.__docgenInfo={exportName:"default",displayName:"ExceptionListItem",description:"",tags:{},props:[{name:"status",description:"Set the color of the icon and title for the given item.",required:!1,type:{name:"union",elements:[{name:'"critical"'},{name:'"warning"'}]}},{name:"icon",description:"Icon displayed by the list item",required:!1,type:{name:"IconSource"}},{name:"title",description:"Text displayed beside the icon",required:!1,type:{name:"string"}},{name:"truncate",description:"Should the description be truncated at end of line",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const LC={inheritAttrs:!1,render(){return null}},ap=P(N(g({},LC),{props:{disabled:{type:Boolean},root:null},setup(e){const o=e,n=()=>{!o.disabled&&o.root&&!o.root.querySelector("[autofocus]")&&qs(o.root,!1)};return Ee([()=>o.disabled,()=>o.root],()=>n()),Te(()=>{n()}),()=>{}}}));ap.__docgenInfo={exportName:"default",displayName:"Focus",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"root",required:!0,type:{name:"union",elements:[{name:"HTMLElement"},{name:"null"}]}}]};const wC="Polaris-FooterHelp",_C="Polaris-FooterHelp__Text";var Xc={FooterHelp:wC,Text:_C};const Qs=P({setup(e){return(o,n)=>(l(),d("div",{class:c(a(Xc).FooterHelp)},[k("div",{class:c(a(Xc).Text)},[h(o.$slots,"default")],2)],2))}});Qs.__docgenInfo={exportName:"default",displayName:"FooterHelp",description:"",tags:{},slots:[{name:"default"}]};const MC=["acceptCharset","action","encType","method","name","noValidate","target","autocomplete"],PC=k("button",{type:"submit","aria-hidden":"true",tabIndex:"-1"},"Submit",-1),Js=P({props:{acceptCharset:null,action:null,autoComplete:{type:Boolean},encType:null,implicitSubmit:{type:Boolean,default:!0},method:{default:"post"},name:null,noValidate:{type:Boolean},preventDefault:{type:Boolean,default:!0},target:null},emits:["submit"],setup(e,{emit:o}){const n=e,s=p(()=>{if(typeof n.autoComplete!="undefined")return n.autoComplete?"on":"off"}),i=r=>{n.preventDefault&&r.preventDefault(),o("submit",r)};return(r,u)=>(l(),d("form",{acceptCharset:e.acceptCharset||void 0,action:e.action,encType:e.encType,method:e.method,name:e.name,noValidate:e.noValidate,target:e.target,autocomplete:a(s),onSubmit:i},[e.implicitSubmit?(l(),A(a(et),{key:0},{default:y(()=>[PC]),_:1})):_("",!0),h(r.$slots,"default")],40,MC))}});Js.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"acceptCharset",description:"Space separated list of character encodings",required:!1,type:{name:"string"}},{name:"action",description:"Where to send form-data on submittal",required:!1,type:{name:"string"}},{name:"autoComplete",description:"Grants the browser the ability to autocomplete input elements",required:!1,type:{name:"boolean"}},{name:"encType",description:"Media type when submitting content to server",required:!1,type:{name:"Enctype"}},{name:"implicitSubmit",description:"Toggles if form submits on Enter keypress. Defaults to true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"method",description:"Method used to submit form",required:!1,type:{name:"Method"},defaultValue:{func:!1,value:"'post'"}},{name:"name",description:"A unique name for the form",required:!1,type:{name:"string"}},{name:"noValidate",description:"Whether or not form is validated when submitting",required:!1,type:{name:"boolean"}},{name:"preventDefault",description:"Blocks the default form action",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"target",description:"Where to display response after form submittal",required:!1,type:{name:"Target"}}],events:[{name:"submit",type:{names:["Event"]}}],slots:[{name:"default"}]};const NC="Polaris-FormLayout",BC="Polaris-FormLayout__Title",IC="Polaris-FormLayout__Items",DC="Polaris-FormLayout__HelpText",$C="Polaris-FormLayout__Item",FC="Polaris-FormLayout--grouped",EC="Polaris-FormLayout--condensed";var Zt={FormLayout:NC,Title:BC,Items:IC,HelpText:DC,Item:$C,grouped:FC,condensed:EC};const Ir=P({setup(e){return(o,n)=>(l(),d("div",{class:c(a(Zt).Item)},[h(o.$slots,"default")],2))}});Ir.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const Dr=P({props:{condensed:{type:Boolean}},setup(e,{expose:o}){const n=e,s=ce(),{useUniqueId:i}=De(),r=i("FormLayoutGroup"),u=`${r}HelpText`,m=`${r}Title`;o({name:"FormGroup"});const x=p(()=>O(n.condensed?Zt.condensed:Zt.grouped));return(v,f)=>(l(),d("div",{role:"group",class:c(a(x)),"aria-labelledby":m,"aria-describedby":u},[a(s).title?(l(),d("div",{key:0,id:m,class:c(a(Zt).Title)},[h(v.$slots,"title")],2)):_("",!0),k("div",{class:c(a(Zt).Items)},[a(s).default?(l(!0),d(Y,{key:0},be(a(s).default(),(b,T)=>(l(),A(a(Ir),{key:T},{default:y(()=>[(l(),A(Ie(b)))]),_:2},1024))),128)):h(v.$slots,"default",{key:1})],2),a(s)["help-text"]?(l(),d("div",{key:1,id:u,class:c(a(Zt).HelpText)},[h(v.$slots,"help-text")],2)):_("",!0)],2))}});Dr.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"condensed",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"},{name:"help-text"}]};const Pt=P({setup(e){const o=C([]),n=C([]),s=ce(),i=p(()=>{const r=[],u=s.default&&s.default();if(!u||!u.length)return r;for(let m=0;m<u.length;m++)u[m].type.toString()==="Symbol()"?r.push(u[m].children):r.push(u[m]);return r});return lg(()=>{o.value=[]}),Te(()=>{o.value.forEach(r=>{n.value.push(r.name==="FormGroup")})}),(r,u)=>(l(),d("div",{class:c(a(Zt).FormLayout)},[a(i).length?(l(!0),d(Y,{key:0},be(a(i),(m,x)=>(l(),d(Y,null,[n.value[x]?(l(),A(Ie(m),{key:1,ref_for:!0,ref:v=>{o.value[x]=v}},null,512)):(l(),A(a(Ir),{key:x,class:c(a(Zt).Item)},{default:y(()=>[(l(),A(Ie(m),{ref_for:!0,ref:v=>{o.value[x]=v}},null,512))]),_:2},1032,["class"]))],64))),256)):h(r.$slots,"default",{key:1})],2))}});Pt.__docgenInfo={exportName:"default",displayName:"FormLayout",description:"",tags:{},slots:[{name:"default"}]};function Kc(e,o,n){if(!document)return;(n||document.documentElement).style.setProperty(e,o)}const OC="Polaris-Frame",qC="Polaris-Frame__Navigation",RC="Polaris-Frame--hasTopBar",VC="Polaris-Frame__NavigationDismiss",HC="Polaris-Frame__TopBar",UC="Polaris-Frame__ContextualSaveBar",jC="Polaris-Frame__Main",zC="Polaris-Frame--hasNav",WC="Polaris-Frame__Content",GC="Polaris-Frame__GlobalRibbonContainer",XC="Polaris-Frame__LoadingBar",KC="Polaris-Frame__Skip",YC="Polaris-Frame--focused",ZC="Polaris-Frame--pressed";var We={Frame:OC,Navigation:qC,hasTopBar:RC,"Navigation-enter":"Polaris-Frame__Navigation--enter","Navigation-enterActive":"Polaris-Frame__Navigation--enterActive","Navigation-exit":"Polaris-Frame__Navigation--exit","Navigation-exitActive":"Polaris-Frame__Navigation--exitActive",NavigationDismiss:VC,"Navigation-visible":"Polaris-Frame__Navigation--visible",TopBar:HC,ContextualSaveBar:UC,Main:jC,hasNav:zC,Content:WC,GlobalRibbonContainer:GC,LoadingBar:XC,Skip:KC,focused:YC,pressed:ZC};const QC={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},JC=k("path",{d:"m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"},null,-1),eA=[JC];function tA(e,o){return l(),d("svg",QC,eA)}var $r={render:tA};const aA="Polaris-Frame-CssAnimation--startFade",oA="Polaris-Frame-CssAnimation--endFade";var Yc={startFade:aA,endFade:oA};const op=P({props:{in:{type:Boolean},type:null},setup(e){const o=e,n={Entering:"entering",Entered:"entered",Exiting:"exiting",Exited:"exited"},s=C(null),i=C(o.in?n.Entering:n.Exited),r=p(()=>O(Yc[Le("start",o.type)],o.in&&Yc[Le("end",o.type)]));Ee(()=>i.value,()=>{i.value===n.Entering&&m(n.Entered)}),Ee(()=>o.in,()=>{o.in&&m(n.Entering),!o.in&&m(n.Exiting)});const u=()=>{i.value===n.Exiting&&m(n.Exited)},m=x=>{i.value=x,x===n.Entering&&s.value&&s.value.getBoundingClientRect()};return(x,v)=>(l(),d("div",{class:c(a(r)),ref_key:"frameCssAnimationRef",ref:s,onTransitionend:u},[i.value!==n.Exited||o.in?h(x.$slots,"default",{key:0}):_("",!0)],34))}});op.__docgenInfo={exportName:"default",displayName:"CssAnimation",description:"",tags:{},props:[{name:"in",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"AnimationType"}}],slots:[{name:"default"}]};function nA(e){const o=typeof e;return e!=null&&(o==="object"||o==="function")}function np(e,o){if(!e)return null;const n=Object.keys(e);for(const s of n){if(s===o)return e[o];if(nA(e[s])){const i=np(e[s],o);if(i)return i}}return null}function Fr(e={},o=0,n="width"){const s=typeof e=="number"?e:np(e,n);return s?`${s}px`:`${o}px`}const sA="Polaris-Frame-ContextualSaveBar",iA="Polaris-Frame-ContextualSaveBar__LogoContainer",lA="Polaris-Frame-ContextualSaveBar__ContextControl",rA="Polaris-Frame-ContextualSaveBar__Message",cA="Polaris-Frame-ContextualSaveBar__Contents",uA="Polaris-Frame-ContextualSaveBar--fullWidth",dA="Polaris-Frame-ContextualSaveBar__ActionContainer",pA="Polaris-Frame-ContextualSaveBar__Action";var ra={ContextualSaveBar:sA,LogoContainer:iA,ContextControl:lA,Message:rA,Contents:cA,fullWidth:uA,ActionContainer:dA,Action:pA};const sp=P({props:{open:{type:Boolean}},emits:["discard","cancel"],setup(e,{emit:o}){const n=fe("lang"),s=n.Polaris.DiscardConfirmationModal.message,i=n.Polaris.DiscardConfirmationModal.title,r=n.Polaris.DiscardConfirmationModal.primaryAction,u=n.Polaris.DiscardConfirmationModal.secondaryAction,m=()=>{o("discard")},x=()=>{o("cancel")};return(v,f)=>(l(),A(a(xa),{open:e.open,onClose:x,primaryAction:{content:a(r),destructive:!0,onAction:m},secondaryActions:[{content:a(u),onAction:x}],sectioned:""},{title:y(()=>[re(W(a(i)),1)]),content:y(()=>[re(W(a(s)),1)]),_:1},8,["open","primaryAction","secondaryActions"]))}});sp.__docgenInfo={exportName:"default",displayName:"DiscardConfirmationModal",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}}],events:[{name:"discard"},{name:"cancel"}]};const ip=P({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean}},setup(e){const o=e,n=fe("lang"),s=ce(),i=p(()=>O(ra.Contents,o.fullWidth&&ra.fullWidth)),r=n.Polaris.ContextualSaveBar.save,u=n.Polaris.ContextualSaveBar.discard,{useFrame:m}=Vo(),{logo:x}=m(),v=Fr(x,104),f=C(!1),b=()=>{f.value=!f.value},T=()=>{f.value=!1},S=()=>{o.discardAction&&(o.discardAction.discardConfirmationModal?b():o.discardAction.onAction&&o.discardAction.onAction())},w=()=>{o.discardAction&&o.discardAction.onAction&&o.discardAction.onAction(),T()};return(B,I)=>(l(),d(Y,null,[L(a(Oo),{"color-scheme":"dark"},{default:y(()=>[k("div",{class:c(a(ra).ContextualSaveBar)},[a(s).contextControl?(l(),d("div",{key:0,class:c(a(ra).ContextControl)},[h(B.$slots,"contextControl")],2)):_("",!0),!e.alignContentFlush&&!a(s).contextControl?(l(),d("div",{key:1,class:c(a(ra).LogoContainer),style:Fe(a(v))},[a(x)?(l(),A(a(Eo),{key:0,style:Fe({width:a(v)}),source:a(x).contextualSaveBarSource||"",alt:""},null,8,["style","source"])):_("",!0)],6)):_("",!0),k("div",{class:c(a(i))},[k("h2",{class:c(a(ra).Message)},W(e.message),3),k("div",{class:c(a(ra).ActionContainer)},[L(a(Re),{spacing:"tight",wrap:!1},{default:y(()=>[h(B.$slots,"secondaryMenu"),e.discardAction?(l(),A(a(ye),{key:0,url:e.discardAction.url,loading:e.discardAction.loading,disabled:e.discardAction.disabled,accessibilityLabel:e.discardAction.content,onClick:S},{default:y(()=>[e.discardAction.content?(l(),d(Y,{key:0},[re(W(e.discardAction.content),1)],64)):(l(),d(Y,{key:1},[re(W(a(u)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel"])):_("",!0),e.saveAction?(l(),A(a(ye),{key:1,primary:"",url:e.saveAction.url,loading:e.saveAction.loading,disabled:e.saveAction.disabled,accessibilityLabel:e.saveAction.content,onClick:e.saveAction.onAction},{default:y(()=>[e.saveAction.content?(l(),d(Y,{key:0},[re(W(e.saveAction.content),1)],64)):(l(),d(Y,{key:1},[re(W(a(r)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel","onClick"])):_("",!0)]),_:3})],2)],2)],2)]),_:3}),e.discardAction&&e.discardAction.onAction&&e.discardAction.discardConfirmationModal?(l(),A(a(sp),{key:0,open:f.value,onCancel:b,onDiscard:w},null,8,["open"])):_("",!0)],64))}});ip.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}}],slots:[{name:"contextControl"},{name:"secondaryMenu"}]};const mA="Polaris-Frame-Loading",yA="Polaris-Frame-Loading__Level";var Zc={Loading:mA,Level:yA};const gA=["aria-valuenow","aria-label"],lp=P({setup(e){const n=fe("lang"),s=C(0),i=C(!1),r=p(()=>({transform:`scaleX(${Math.floor(s.value)/100})`}));Te(()=>{u()}),Ee(()=>[i.value,s.value],()=>{u()});const u=()=>{s.value>=99||i.value||requestAnimationFrame(()=>{const x=Math.max((99-s.value)/10,1);i.value=!0,s.value=s.value+x})},m=()=>{i.value=!1};return(x,v)=>(l(),d("div",{class:c(a(Zc).Loading),"aria-valuenow":s.value,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar","aria-label":a(n).Polaris.Loading.label},[k("div",{class:c(a(Zc).Level),style:Fe(a(r)),onTransitionend:m},null,38)],10,gA))}});lp.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const hA="Polaris-Frame-Toast",bA="Polaris-Frame-Toast__Action",fA="Polaris-Frame-Toast--error",vA="Polaris-Frame-Toast__CloseButton";var bs={Toast:hA,Action:bA,error:fA,CloseButton:vA};const rp=P({props:{content:null,duration:null,error:{type:Boolean},action:null},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=5e3,i=1e4,r=C(),u=p(()=>O(bs.Toast,n.error&&bs.error));Te(()=>{let x=n.duration||s;n.action&&!n.duration?x=i:n.action&&n.duration&&n.duration<i&&console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it."),r.value=setTimeout(m,x)}),lt(()=>{clearTimeout(r.value)});const m=()=>{o("dismiss")};return(x,v)=>(l(),A(a(Oo),{"color-scheme":"dark"},{default:y(()=>[k("div",{class:c(a(u))},[L(a(mt),{keyCode:a(qe).Escape,handler:m},null,8,["keyCode"]),re(W(e.content),1),h(x.$slots,"default"),e.action?(l(),d("div",{key:0,class:c(a(bs).Action)},[L(a(ye),{plain:"",monochrome:"",onClick:e.action.onAction},{default:y(()=>[re(W(e.action.content),1)]),_:1},8,["onClick"])],2)):_("",!0),k("button",{type:"button",class:c(a(bs).CloseButton),onClick:m},[L(a(le),{source:a($r)},null,8,["source"])],2)],2)]),_:3}))}});rp.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const xA="Polaris-Frame-ToastManager",TA="Polaris-Frame-ToastManager__ToastWrapper";var dn={ToastManager:xA,ToastWrapper:TA,"ToastWrapper-enter":"Polaris-Frame-ToastManager__ToastWrapper--enter","ToastWrapper-exit":"Polaris-Frame-ToastManager__ToastWrapper--exit","ToastWrapper-enter-done":"Polaris-Frame-ToastManager--toastWrapperEnterDone"};const cp=P({props:{toastMessages:null},setup(e){const o=e,n=400,s=C([]),i=C(!1),r=()=>{let b=0;o.toastMessages.forEach((T,S)=>{const w=s.value[S];!w||(b+=w.clientHeight,w.style.setProperty("--pc-toast-manager-translate-y-in",`-${b}px`),w.style.setProperty("--pc-toast-manager-translate-y-out",`${-b+150}px`))})},u=b=>{b.classList.add(f.enterDone)},m=b=>{b.classList.add(f.enter)},x=(b,T)=>{b.classList.remove(f.enter),b.classList.add(f.enterDone),setTimeout(T,n)},v=(b,T)=>{b.classList.remove(f.enterDone),b.classList.add(f.exit),setTimeout(T,n)};Ee(()=>o.toastMessages,()=>{setTimeout(r,0)}),Te(()=>{i.value=!0});const f={enter:O(dn["ToastWrapper-enter"]),enterDone:O(dn["ToastWrapper-enter-done"]),exit:O(dn["ToastWrapper-exit"])};return(b,T)=>i.value?(l(),A(a(vn),{key:0},{default:y(()=>[L(a(Je),{event:"resize",handler:r}),k("div",{class:c(a(dn).ToastManager),"aria-live":"assertive"},[L(rg,{name:"custom-classes",onAfterEnter:u,onBeforeEnter:m,onEnter:x,onLeave:v},{default:y(()=>[e.toastMessages.length>0?(l(!0),d(Y,{key:0},be(e.toastMessages,(S,w)=>(l(),d("div",{key:S.id,ref_for:!0,ref:B=>{s.value[w]=B},class:c(a(dn).ToastWrapper)},[L(a(rp),Ye(St(S)),null,16)],2))),128)):_("",!0)]),_:1})],2)]),_:1})):_("",!0)}});cp.__docgenInfo={exportName:"default",displayName:"ToastManager",description:"",tags:{},props:[{name:"toastMessages",required:!0,type:{name:"Array",elements:[{name:"ToastPropsWithID"}]}}]};function oa(){const e=fe("mediaQueryContext",{});function o(){if(!e)throw new kr("No mediaQuery was provided.");return e}return{useMediaQuery:o}}const SA=["data-has-navigation"],CA=["href"],AA=["aria-label","hidden"],kA=["aria-hidden","aria-label","tabIndex"],LA=["data-has-global-ribbon"],jt=P({props:{logo:null,offset:null,showMobileNavigation:{type:Boolean},skipToContentTarget:null},emits:["navigation-dismiss"],setup(e,{emit:o}){const n=e,s="AppFrameMain",i="AppFrameNav",r="AppFrameTopBar",u="AppFrameLoadingBar",m=400,x=300,v=ce(),f=fe("lang"),b=C(!1),T=C(0),S=C(0),w=C([]),B=C(!1),I=C(null),E=C(null),{useMediaQuery:q}=oa(),{isNavigationCollapsed:U}=q(),K=C(null),D=()=>{K.value&&(T.value=K.value.offsetHeight,ee())},X=p(()=>O(We.Navigation,n.showMobileNavigation&&We["Navigation-visible"])),F={enter:O(We["Navigation-enter"]),enterActive:O(We["Navigation-enterActive"]),enterDone:O(We["Navigation-enterActive"]),exit:O(We["Navigation-exit"]),exitActive:O(We["Navigation-exitActive"])},z=j=>{j.classList.add(F.enterDone)},ne=j=>{j.classList.add(F.enter)},he=(j,ie)=>{j.classList.remove(F.enter),j.classList.add(F.enterDone),setTimeout(ie,x)},te=j=>{j.classList.remove(F.enterActive),j.classList.add(F.exitActive)},Ne=(j,ie)=>{j.classList.add(F.exit),setTimeout(ie,x)},H=p(()=>U&&!n.showMobileNavigation),J=p(()=>U&&n.showMobileNavigation),ue=J.value?0:-1,ve=g({},J.value&&{"aria-modal":!0,role:"dialog"}),ge=p(()=>O(We.Frame,v.navigation&&We.hasNav,v.topBar&&We.hasTopBar)),Ve=p(()=>O(We.Skip,b.value&&We.focused)),me=p(()=>n.skipToContentTarget?n.skipToContentTarget.id:s);Te(()=>{it(),!v.globalRibbon&&(ee(),Se())}),Ee(()=>v.globalRibbon,()=>{D(),Se()});const Se=()=>{Kc("--pc-frame-offset",n.offset||"0px")},ee=()=>{Kc("--pc-frame-global-ribbon-height",`${T.value}px`)},xe=j=>{const ie=w.value.find(({id:Me})=>Me===j.id)!=null;w.value=ie?w.value:[...w.value,j]},Be=({id:j})=>{w.value=w.value.filter(({id:ie})=>j!==ie)},$e=j=>{I.value=g({},j),B.value||(B.value=!0)},_e=()=>{B.value=!1,setTimeout(()=>{I.value=null},m)},st=()=>{S.value=S.value+1},Bt=()=>{S.value=Math.max(0,S.value-1)},it=()=>{v.globalRibbon&&D()},gt=()=>{b.value=!0},Z=()=>{b.value=!1},Ae=j=>{n.skipToContentTarget&&(n.skipToContentTarget.focus(),j.preventDefault())},G=()=>{o("navigation-dismiss")},$=j=>{const{key:ie}=j;U&&n.showMobileNavigation&&ie==="Escape"&&G()};return ze("frameContext",{logo:n.logo,showToast:xe,hideToast:Be,startLoading:st,stopLoading:Bt,setContextualSaveBar:$e,removeContextualSaveBar:_e}),(j,ie)=>(l(),d("div",pe({class:a(ge)},a(Cs).props,{"data-has-navigation":a(v).navigation?!0:void 0}),[k("div",{class:c(a(Ve))},[k("a",{href:`#${a(me)}`,onFocus:gt,onBlur:Z,onClick:Ae},W(a(f).Polaris.Frame.skipToContent),41,CA)],2),a(v).topBar?(l(),d("div",pe({key:0,class:a(We).TopBar},g(g({},a(Cs).props),a(fr).props),{id:r}),[h(j.$slots,"topBar")],16)):_("",!0),a(v).navigation?(l(),A(a(Ds),{key:1,trapping:a(J)},{default:y(()=>[L(gd,{name:"custom-classes",onAfterEnter:z,onBeforeEnter:ne,onEnter:he,onBeforeLeave:te,onLeave:Ne},{default:y(()=>[e.showMobileNavigation||!a(U)?(l(),d("div",pe({key:0},ve,{key:"NavContent",id:i,"aria-label":a(f).Polaris.Frame.navigationLabel,class:a(X),ref_key:"navigationRef",ref:E,onKeydown:$,hidden:a(H)}),[h(j.$slots,"navigation"),k("button",{type:"button",class:c(a(We).NavigationDismiss),onClick:G,"aria-hidden":a(H)||!a(U)&&!e.showMobileNavigation,"aria-label":a(f).Polaris.Frame.Navigation.closeMobileNavigationLabel,tabIndex:a(ue)},[L(a(le),{source:a($r)},null,8,["source"])],10,kA)],16,AA)):_("",!0)]),_:3})]),_:3},8,["trapping"])):_("",!0),L(a(op),{in:B.value,class:c(a(We).ContextualSaveBar),type:"fade"},{default:y(()=>[I.value?(l(),A(a(ip),Ye(pe({key:0},I.value)),Ue({_:2},[I.value.contextControl?{name:"contextControl",fn:y(()=>[(l(!0),d(Y,null,be(I.value.contextControl,(Me,je)=>(l(),A(Ie(Me),{key:je}))),128))])}:void 0,I.value.secondaryMenu?{name:"secondaryMenu",fn:y(()=>[(l(!0),d(Y,null,be(I.value.secondaryMenu,(Me,je)=>(l(),A(Ie(Me),{key:je}))),128))])}:void 0]),1040)):_("",!0)]),_:1},8,["in","class"]),S.value>0?(l(),d("div",{key:2,class:c(a(We).LoadingBar),id:u},[L(a(lp))],2)):_("",!0),e.showMobileNavigation&&a(U)?(l(),A(a(wr),{key:3,belowNavigation:"",onClick:G,onTouchstart:G})):_("",!0),k("main",{class:c(a(We).Main),id:s,"data-has-global-ribbon":!!a(v).globalRibbon},[k("div",{class:c(a(We).Content)},[h(j.$slots,"default")],2)],10,LA),L(a(cp),{"toast-messages":w.value},null,8,["toast-messages"]),a(v).globalRibbon?(l(),d("div",{key:4,class:c(a(We).GlobalRibbonContainer),ref_key:"globalRibbonContainerRef",ref:K},[h(j.$slots,"globalRibbon")],2)):_("",!0),L(a(Je),{event:"resize",handler:it})],16,SA))}});jt.__docgenInfo={exportName:"default",displayName:"Frame",description:"",tags:{},props:[{name:"logo",description:"Sets the logo for the TopBar, Navigation, and ContextualSaveBar components",required:!1,type:{name:"Logo"}},{name:"offset",description:"A horizontal offset that pushes the frame to the right, leaving empty space on the left",required:!1,type:{name:"string"}},{name:"showMobileNavigation",description:"A boolean property indicating whether the mobile navigation is currently visible",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"skipToContentTarget",description:"Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link",required:!1,type:{name:"HTMLAnchorElement"}}],events:[{name:"navigation-dismiss"}],slots:[{name:"topBar"},{name:"navigation"},{name:"default"},{name:"globalRibbon"}]};const wA="Polaris-Heading";var _A={Heading:wA};const ta=P({props:{element:{default:"h2"},id:null},setup(e){return(o,n)=>(l(),A(Ie(e.element),{id:e.id,class:c(a(_A).Heading)},{default:y(()=>[h(o.$slots,"default")]),_:3},8,["id","class"]))}});ta.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the heading",tags:{default:[{description:"'h2'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h2'"}},{name:"id",description:`A unique identifier for the heading,
used for reference in anchor links`,required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const MA="Polaris-Indicator",PA="Polaris-Indicator--pulseIndicator";var Qc={Indicator:MA,pulseIndicator:PA};const yr=P({props:{pulse:{type:Boolean,default:!1}},setup(e){const o=e,n=p(()=>O(Qc.Indicator,o.pulse&&Qc.pulseIndicator));return(s,i)=>(l(),d("span",{class:c(a(n))},null,2))}});yr.__docgenInfo={exportName:"default",displayName:"Indicator",description:"",tags:{},props:[{name:"pulse",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const NA="Polaris-KeyboardKey";var BA={KeyboardKey:NA};const ei=P({setup(e){const o=ce(),n=p(()=>{const s=o.default&&o.default()[0].children?o.default()[0].children:"";return typeof s=="string"?s.length>1?s.toLowerCase():s.toUpperCase():s});return(s,i)=>(l(),d("kbd",{class:c(a(BA).KeyboardKey)},W(a(n)),3))}});ei.__docgenInfo={exportName:"default",displayName:"KeyboardKey",description:"",tags:{}};const IA="Polaris-Layout",DA="Polaris-Layout__Section",$A="Polaris-Layout__AnnotatedSection",FA="Polaris-Layout__AnnotationWrapper",EA="Polaris-Layout__AnnotationContent",OA="Polaris-Layout__Annotation",qA="Polaris-Layout__AnnotationDescription";var Ct={Layout:IA,Section:DA,"Section-secondary":"Polaris-Layout__Section--secondary","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:$A,AnnotationWrapper:FA,AnnotationContent:EA,Annotation:OA,AnnotationDescription:qA};const zt=P({props:{secondary:{type:Boolean},fullWidth:{type:Boolean},oneHalf:{type:Boolean},oneThird:{type:Boolean}},setup(e){const o=e,n=p(()=>O(Ct.Section,o.secondary&&Ct["Section-secondary"],o.fullWidth&&Ct["Section-fullWidth"],o.oneHalf&&Ct["Section-oneHalf"],o.oneThird&&Ct["Section-oneThird"]));return(s,i)=>(l(),d("div",{class:c(a(n))},[h(s.$slots,"default")],2))}});zt.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"secondary",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"oneHalf",required:!1,type:{name:"boolean"}},{name:"oneThird",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const RA="Polaris-TextContainer",VA="Polaris-TextContainer--spacingTight",HA="Polaris-TextContainer--spacingLoose";var Jc={TextContainer:RA,spacingTight:VA,spacingLoose:HA};const At=P({props:{spacing:null},setup(e){const o=e,n=p(()=>o.spacing&&Jc[Le("spacing",o.spacing)]),s=p(()=>O(Jc.TextContainer,n.value));return(i,r)=>(l(),d("div",{class:c(a(s))},[h(i.$slots,"default")],2))}});At.__docgenInfo={exportName:"default",displayName:"TextContainer",description:"",tags:{},props:[{name:"spacing",description:"The amount of vertical spacing children will get between them",required:!1,type:{name:"Spacing"}}],slots:[{name:"default"}]};const na=P({props:{id:null},setup(e){const o=ce(),n=p(()=>{var i;return(i=o.description)==null?void 0:i.call(o)}),s=p(()=>Boolean(n.value&&(n.value.length>=2||n.value[0]&&(n.value[0].type.toString()!=="Symbol(Text)"||n.value[0].type.toString()!=="Symbol()"))));return(i,r)=>(l(),d("div",{class:c(a(Ct).AnnotatedSection)},[k("div",{class:c(a(Ct).AnnotationWrapper)},[k("div",{class:c(a(Ct).Annotation)},[L(a(At),null,{default:y(()=>[L(a(ta),{id:e.id},{default:y(()=>[h(i.$slots,"title")]),_:3},8,["id"]),a(s)?h(i.$slots,"description",{key:1}):(l(),d("div",{key:0,class:c(a(Ct).AnnotationDescription)},[h(i.$slots,"description")],2))]),_:3})],2),k("div",{class:c(a(Ct).AnnotationContent)},[h(i.$slots,"default")],2)],2)],2))}});na.__docgenInfo={exportName:"default",displayName:"AnnotatedSection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"description"},{name:"default"}]};const Nt=P({props:{sectioned:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:c(a(Ct).Layout)},[e.sectioned?(l(),A(a(zt),{key:0},{default:y(()=>[h(o.$slots,"default")]),_:3})):h(o.$slots,"default",{key:1})],2))}});Nt.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"sectioned",description:"Automatically adds sections to layout",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const UA="Polaris-Link",jA="Polaris-Link__IconLockup",zA="Polaris-Link__IconLayout",WA="Polaris-Link--monochrome",GA="Polaris-Link--removeUnderline";var ca={Link:UA,IconLockup:jA,IconLayout:zA,monochrome:WA,removeUnderline:GA};const XA=["id","aria-label"],Ho=P({props:{id:null,url:null,to:null,external:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,n=p(()=>O(ca.Link,o.monochrome&&ca.monochrome,o.removeUnderline&&ca.removeUnderline));return(s,i)=>e.url||e.to?(l(),A(a(_t),{key:0,id:e.id,to:e.to,url:e.url,class:c(a(n)),external:e.external,"aria-label":e.accessibilityLabel},{default:y(()=>[h(s.$slots,"default"),k("span",{class:c(a(ca).IconLockup)},[k("span",{class:c(a(ca).IconLayout)},[L(a(le),{source:a(Ic)},null,8,["source"])],2)],2)]),_:3},8,["id","to","url","class","external","aria-label"])):(l(),d("button",{key:1,id:e.id,type:"button",class:c(a(n)),"aria-label":e.accessibilityLabel,onClick:i[0]||(i[0]=r=>s.$emit("click"))},[h(s.$slots,"default"),k("span",{class:c(a(ca).IconLockup)},[k("span",{class:c(a(ca).IconLayout)},[L(a(le),{source:a(Ic)},null,8,["source"])],2)],2)],10,XA))}});Ho.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"id",description:"ID for the link",required:!1,type:{name:"string"}},{name:"url",description:"The url to link to",required:!1,type:{name:"string"}},{name:"to",description:"Using with vue-router",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"external",description:"Makes the link open in a new tab",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes the link color the same as the current text color and adds an underline",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes text decoration underline to the link",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const KA="Polaris-List",YA="Polaris-List--typeNumber",ZA="Polaris-List__Item";var gr={List:KA,typeNumber:YA,Item:ZA};const Uo=P({props:{type:{default:"bullet"}},setup(e){const o=e,n=p(()=>{const i=Le("type",o.type);return O(gr.List,o.type&&gr[i])}),s=o.type==="bullet"?"ul":"ol";return(i,r)=>(l(),A(Ie(a(s)),{class:c(a(n))},{default:y(()=>[h(i.$slots,"default")]),_:3},8,["class"]))}});Uo.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"type",description:"Type of list to display",tags:{values:[{description:"bullet | number",title:"values"}],default:[{description:"bullet",title:"default"}]},required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'bullet'"}}],slots:[{name:"default"}]};const ti=P({setup(e){return(o,n)=>(l(),d("li",{class:c(a(gr).Item)},[h(o.$slots,"default")],2))}});ti.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const QA="Polaris-Listbox";var JA={Listbox:QA};const ek={"aria-live":"polite"},tk=["aria-label","aria-labelledby","aria-busy","asia-activedescendant","id"],ft=P({props:{enableKeyboardControl:{type:Boolean},accessibilityLabel:null},emits:["select","on-active-option-change"],setup(e,{emit:o}){const n=e,s="[data-listbox-option]",i="data-listbox-option-value",r="data-listbox-option-action",u="data-focused";ze("withinListboxContext",!0);const m=fe("comboboxListboxContext",{}),{setActiveOptionId:x,setListboxId:v,listboxId:f,textFieldLabelId:b,willLoadMoreOptions:T,onOptionSelected:S,onKeyToBottom:w,textFieldFocused:B}=m,I=ce(),{useUniqueId:E}=De(),q=E("Listbox"),U=p(()=>Boolean(x)),K=p(()=>f||""),D=C(null),X=C(null),F=C(""),z=C(!1),ne=C([]),he=C(n.enableKeyboardControl);let te;Ee([()=>q,()=>K],()=>{v&&!f&&v(q)}),Ee([()=>te,()=>F],()=>{!F.value&&I.default&&I.default().length>0&&me()}),Ee([()=>n.enableKeyboardControl,()=>he],()=>{n.enableKeyboardControl&&!he.value&&(he.value=!0)});const Ne=()=>D.value?[...new Set(D.value.querySelectorAll(s))]:[],H=Z=>{const Ae=Z.some(j=>j.getAttribute("aria-selected")==="true");let G=0;const $=Z.find((j,ie)=>{const Me=j.getAttribute("aria-disabled")!=="true";let je;return Ae?je=j.getAttribute("aria-selected")==="true"&&Me:je=Me,je&&(G=ie),je});if(!!$)return{element:$,index:G}},ue=Rt(Z=>{X.value&&cg(Z.element,X.value)},50),ve=()=>{if(w)return z.value=!0,Promise.resolve(w())},ge=Z=>{Z?(te==null||te.element.removeAttribute(u),Z==null||Z.element.setAttribute(u,"true"),ue(Z),te=Z,x==null||x(Z.domId),o("on-active-option-change",Z.value)):te=void 0},Ve=(Z,Ae)=>({element:Z,index:Ae,domId:Z.id,value:Z.getAttribute(i)||"",disabled:Z.getAttribute("aria-disabled")==="true",isAction:Z.getAttribute(r)==="true"}),me=()=>{let Z;const Ae=Ne(),G=H(Ae);if(Ae.length===0&&ne.value.length>0){ne.value=Ae,ge();return}if(G){const{element:Qe,index:Sa}=G;Z=Ve(Qe,Sa)}const $=te!==void 0&&(Z==null?void 0:Z.domId)===(te==null?void 0:te.domId),j=(te==null?void 0:te.isAction)&&(Z==null?void 0:Z.isAction)&&(Z==null?void 0:Z.value)!==(te==null?void 0:te.value),ie=ne.value.map(Qe=>Qe.getAttribute(i)),Me=Ae.map(Qe=>Qe.getAttribute(i));if(Me.length===ie.length&&Me.every((Qe,Sa)=>ie[Sa]===Qe)){$&&j&&(ne.value=Ae,ge(Z));return}if(ne.value=Ae,z.value){z.value=!1;return}ge(Z)},Se=async Z=>{const Ae=ne.value.length-1;let G=(te==null?void 0:te.index)||0,$=0,j=te==null?void 0:te.element,ie=-1;for(;ie++<Ae;){$=it(G,Ae,Z),j=ne[$];const Me=$>=Ae,je=(j==null?void 0:j.getAttribute("aria-disabled"))==="true";if(Me&&T&&await ve(),je){G=$,j=void 0;continue}break}return{element:j,nextIndex:$}},ee=async(Z,Ae)=>{Ae.preventDefault();const{element:G,nextIndex:$}=await Se(Z);if(!G)return;const j=Ve(G,$);ge(j)},xe=Z=>{ee("down",Z)},Be=Z=>{ee("up",Z)},$e=Z=>{Z.preventDefault(),Z.stopPropagation(),gt(te)},_e=()=>{n.enableKeyboardControl||(he.value=!0)},st=Z=>{if(Z.stopPropagation(),he.value){const Ae=H(ne.value);if(Ae){const{element:G,index:$}=Ae,j=Ve(G,$);ge(j)}}n.enableKeyboardControl||(he.value=!1)},Bt=Z=>{F.value=Z},it=(Z,Ae,G)=>{let $;return G==="down"?Z===Ae?$=T?Z+1:0:$=Z+1:$=Z===0?Ae:Z-1,$},gt=Z=>{ge(Z),S&&S(),o("select",Z.value)};return ze("listboxContext",{onOptionSelect:gt,setLoading:Bt}),Vt(()=>{D.value&&(X.value=D.value.closest(Es.selector))}),(Z,Ae)=>(l(),d(Y,null,[he.value||a(B)?(l(),d(Y,{key:0},[L(a(mt),{keyEvent:"keydown",keyCode:a(qe).ArrowDown,handler:xe},null,8,["keyCode"]),L(a(mt),{keyEvent:"keydown",keyCode:a(qe).ArrowUp,handler:Be},null,8,["keyCode"]),L(a(mt),{keyEvent:"keydown",keyCode:a(qe).Enter,handler:$e},null,8,["keyCode"])],64)):_("",!0),L(a(et),null,{default:y(()=>[k("div",ek,W(F.value?F.value:null),1)]),_:1}),Z.$slots.default?(l(),d("ul",{key:1,tabindex:"0",role:"listbox",class:c(a(O)(a(JA).Listbox)),"aria-label":a(U)?void 0:e.accessibilityLabel,"aria-labelledby":a(b)||void 0,"aria-busy":Boolean(F.value),"asia-activedescendant":a(te)&&a(te).domId,id:a(q),onFocus:_e,onBlur:st,ref_key:"listboxRef",ref:D},[h(Z.$slots,"default")],42,tk)):_("",!0)],64))}});ft.__docgenInfo={exportName:"default",displayName:"Listbox",description:"",tags:{},props:[{name:"enableKeyboardControl",description:"Explicitly enable keyboard control",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["string"]}},{name:"on-active-option-change",type:{names:["string"]}}],slots:[{name:"default"}]};const ak="Polaris-Listbox-Action",ok="Polaris-Listbox-Action__ActionDivider",nk="Polaris-Listbox-Action__Icon";var Kl={Action:ak,ActionDivider:ok,Icon:nk};const sk="Polaris-Listbox-Option",ik="Polaris-Listbox-Option--divider";var eu={Option:sk,divider:ik};const lk="Polaris-Listbox-TextOption",rk="Polaris-Listbox-TextOption--allowMultiple",ck="Polaris-Listbox-TextOption--isAction",uk="Polaris-Listbox-TextOption--selected",dk="Polaris-Listbox-TextOption--disabled",pk="Polaris-Listbox-TextOption__Content",mk="Polaris-Listbox-TextOption__Checkbox";var ua={TextOption:lk,allowMultiple:rk,isAction:ck,selected:uk,disabled:dk,Content:pk,Checkbox:mk};const Is=P({props:{selected:{type:Boolean},disabled:{type:Boolean}},setup(e){const o=e,{allowMultiple:n}=fe("comboboxListboxOptionContext",{}),s=fe("actionContext",!1),i=p(()=>O(ua.TextOption,o.selected&&!n&&ua.selected,o.disabled&&ua.disabled,n&&ua.allowMultiple,s&&ua.isAction));return(r,u)=>(l(),d("div",{class:c(a(i))},[k("div",{class:c(a(ua).Content)},[a(n)&&!a(s)?(l(),d("div",{key:0,class:c(a(ua).Checkbox)},[L(a(fa),{disabled:e.disabled,checked:e.selected},{label:y(()=>[h(r.$slots,"default")]),_:3},8,["disabled","checked"])],2)):h(r.$slots,"default",{key:1})],2)],2))}});Is.__docgenInfo={exportName:"default",displayName:"TextOption",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const yk=["id","role","data-within-section","data-listbox-option-value","data-listbox-option-action","data-listbox-option-destructive","aria-disabled","aria-label","aria-selected"],kt=P({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean}},setup(e){const o=e,n=fe("mappedActionContext",{}),s=fe("sectionContext",""),i=fe("listboxContext",{onOptionSelect(X){},setLoading(X){}}),r=fe("isAction",!1),{role:u,url:m,external:x,onAction:v,destructive:f}=n,{onOptionSelect:b}=i,T=ce(),S=C(null),{useUniqueId:w}=De(),B=w("ListboxOption"),I=p(()=>Boolean(s)),E={[ug.attribute]:I.value},q=p(()=>Boolean(T.default&&(T.default().length>=2||T.default()[0]&&T.default()[0].type.toString()!=="Symbol(Text)"&&T.default()[0].type.toString()!=="Symbol()"))),U=p(()=>u||"option"),K=p(()=>O(eu.Option,o.divider&&eu.divider)),D=X=>{X.preventDefault(),v&&v(),S.value&&!v&&b({domId:B,value:o.value,element:S.value,disabled:o.disabled||!1})};return(X,F)=>(l(),d("li",pe(E,{id:a(B),class:a(K),ref_key:"listItemRef",ref:S,role:a(U),"data-within-section":a(I),"data-listbox-option-value":e.value,"data-listbox-option-action":a(r),"data-listbox-option-destructive":a(f),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,"aria-selected":e.selected,onClick:F[0]||(F[0]=z=>e.disabled?void 0:D),onKeydown:F[1]||(F[1]=z=>e.disabled?void 0:D),onMousedown:D,tabindex:"-1","data-listbox-option":""}),[a(m)?(l(),A(a(_t),{key:0,url:a(m),external:a(x)},{default:y(()=>[a(q)?h(X.$slots,"default",{key:1}):(l(),A(a(Is),{key:0,selected:e.selected,disabled:e.disabled},{default:y(()=>[h(X.$slots,"default")]),_:3},8,["selected","disabled"]))]),_:3},8,["url","external"])):(l(),d(Y,{key:1},[a(q)?h(X.$slots,"default",{key:1}):(l(),A(a(Is),{key:0,selected:e.selected,disabled:e.disabled},{default:y(()=>[h(X.$slots,"default")]),_:3},8,["selected","disabled"]))],64))],16,yk))}});kt.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const ai=P({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean},icon:null},setup(e){const o=e;ze("actionContext",!0);const n=p(()=>O(Kl.Action,o.divider&&Kl.ActionDivider));return(s,i)=>(l(),A(a(kt),Ye(St(o)),{default:y(()=>[k("div",{class:c(a(n))},[L(a(Is),{selected:e.selected,disabled:e.disabled},{default:y(()=>[e.icon?(l(),d("div",{key:0,class:c(a(Kl).Icon)},[L(a(le),{color:"subdued",source:e.icon},null,8,["source"])],2)):_("",!0),h(s.$slots,"default")]),_:3},8,["selected","disabled"])],2)]),_:3},16))}});ai.__docgenInfo={exportName:"default",displayName:"Action",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const gk="Polaris-Listbox-Header";var hk={Header:gk};const bk=["id"],fk=P({setup(e){const o=fe("sectionContext",""),n=ce(),s=p(()=>{var r;return(r=n.default)==null?void 0:r.call(n)}),i=p(()=>Boolean(s.value&&(s.value.length>=2||s.value[0]&&(s.value[0].type.toString()!=="Symbol(Text)"||s.value[0].type.toString()!=="Symbol()"))));return(r,u)=>(l(),d("div",{id:a(o),"aria-hidden":""},[a(i)?h(r.$slots,"default",{key:1}):(l(),d("div",{key:0,class:c(a(hk).Header)},[h(r.$slots,"default")],2))],8,bk))}});fk.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},slots:[{name:"default"}]};const vk="Polaris-Listbox-Loading__ListItem",xk="Polaris-Listbox-Loading";var tu={ListItem:vk,Loading:xk};const An=P({props:{accessibilityLabel:null},setup(e){const o=e,n=fe("listboxContext",{onOptionSelect(i){},setLoading(i){}}),{setLoading:s}=n;return Ee(()=>o.accessibilityLabel,()=>(s(o.accessibilityLabel),()=>s(void 0))),(i,r)=>(l(),d("li",{class:c(a(tu).ListItem),role:"presentation"},[i.$slots.default?h(i.$slots,"default",{key:0}):(l(),d("div",{key:1,class:c(a(tu).Loading)},[L(a(Jt),{size:"small",accessibilityLabel:e.accessibilityLabel},null,8,["accessibilityLabel"])],2))],2))}});An.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"accessibilityLabel",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const Tk="Polaris-Listbox-Section__SectionGroup",Sk="Polaris-Listbox-Section--noDivider";var au={SectionGroup:Tk,noDivider:Sk};const Ck=["aria-labelledby"],Ak=P({props:{divider:{type:Boolean}},setup(e){const o=e,{useUniqueId:n}=De(),s=n("ListboxSection");ze("sectionContext",s);const i=p(()=>O(au.SectionGroup,!o.divider&&au.noDivider));return(r,u)=>(l(),d("li",pe({role:"presentation"},a(dg)),[h(r.$slots,"title"),k("ul",{role:"group","aria-labelledby":a(s),class:c(a(i))},[h(r.$slots,"default")],10,Ck)],16))}});Ak.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const kn=P({setup(e){const{useFrame:o}=Vo(),{startLoading:n,stopLoading:s}=o();return Te(()=>{n()}),lt(()=>{s()}),(i,r)=>null}});kn.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const kk="Polaris-MessageIndicator__MessageIndicatorWrapper",Lk="Polaris-MessageIndicator";var ou={MessageIndicatorWrapper:kk,MessageIndicator:Lk};const up=P({props:{active:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:c(a(ou).MessageIndicatorWrapper)},[e.active?(l(),d("div",{key:0,class:c(a(ou).MessageIndicator)},null,2)):_("",!0),h(o.$slots,"default")],2))}});up.__docgenInfo={exportName:"default",displayName:"MessageIndicator",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const wk="Polaris-Modal__BodyWrapper",_k="Polaris-Modal__Body",Mk="Polaris-Modal__IFrame",Pk="Polaris-Modal__Spinner";var Aa={BodyWrapper:wk,Body:_k,IFrame:Mk,Spinner:Pk};const Nk="Polaris-Modal-Dialog__Container",Bk="Polaris-Modal-Dialog",Ik="Polaris-Modal-Dialog__Modal",Dk="Polaris-Modal-Dialog--limitHeight",$k="Polaris-Modal-Dialog--sizeSmall",Fk="Polaris-Modal-Dialog--sizeLarge",Ek="Polaris-Modal-Dialog--animateFadeUp",Ok="Polaris-Modal-Dialog--entering",qk="Polaris-Modal-Dialog--exiting",Rk="Polaris-Modal-Dialog--exited",Vk="Polaris-Modal-Dialog--entered";var Xt={Container:Nk,Dialog:Bk,Modal:Ik,limitHeight:Dk,sizeSmall:$k,sizeLarge:Fk,animateFadeUp:Ek,entering:Ok,exiting:qk,exited:Rk,entered:Vk};const Ds=P({props:{trapping:{type:Boolean,default:!0}},setup(e){const o=e,{canSafelyFocus:n}=Lh(o),s=C(null),i=C(!0);Ee([()=>o.trapping],()=>{i.value=n.value&&!(s.value&&s.value.contains(document.activeElement))?!o.trapping:!0});const r=m=>{!o.trapping||!s.value||s.value.contains(document.activeElement)||m.target instanceof Element&&m.target.matches(`${dd.selector} *`)||n.value&&m.target instanceof HTMLElement&&s.value!==m.target&&s.value.contains(m.target)&&qs(s.value)},u=m=>{if(!o.trapping||!s.value)return;const x=Ad(s.value),v=kd(s.value);m.target===v&&!m.shiftKey&&(m.preventDefault(),Zg(s.value)),m.target===x&&m.shiftKey&&(m.preventDefault(),Qg(s.value))};return(m,x)=>(l(),d("div",{ref_key:"wrapperNode",ref:s},[L(a(ap),{disabled:i.value,root:s.value},null,8,["disabled","root"]),L(a(Je),{event:"focusin",handler:r}),L(a(mt),{keyCode:a(qe).Tab,keyEvent:"keydown",handler:u},null,8,["keyCode"]),h(m.$slots,"default")],512))}});Ds.__docgenInfo={exportName:"default",displayName:"TrapFocus",description:"",tags:{},props:[{name:"trapping",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}]};const Hk=["aria-labelledby"],Uk=["aria-labelledby"],dp=P({props:{labelledBy:null,instant:{type:Boolean},limitHeight:{type:Boolean},large:{type:Boolean},small:{type:Boolean}},emits:["close","entered","exited"],setup(e,{emit:o}){const n=e,s=C(null),i=p(()=>O(Xt.Modal,n.small&&Xt.sizeSmall,n.large&&Xt.sizeLarge,n.limitHeight&&Xt.limitHeight));return Te(()=>{s.value&&s.value.contains(document.activeElement)&&qs(s.value),o("entered")}),lt(()=>{o("exited")}),(r,u)=>e.instant?(l(),d("div",{key:0,class:c(a(Xt).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref_key:"dialogNode",ref:s},[L(a(Ds),null,{default:y(()=>[k("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:c(a(Xt).Dialog)},[k("div",{class:c(a(i))},[L(a(mt),{keyCode:a(qe).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),h(r.$slots,"default")],2)],10,Hk)]),_:3})],2)):(l(),d("div",{key:1,class:c(a(Xt).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref:"dialog"},[L(a(Ds),null,{default:y(()=>[k("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:c(a(Xt).Dialog)},[k("div",{class:c(a(i))},[L(a(mt),{keyCode:a(qe).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),h(r.$slots,"default")],2)],10,Uk)]),_:3})],2))}});dp.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"labelledBy",required:!1,type:{name:"string"}},{name:"instant",required:!1,type:{name:"boolean"}},{name:"limitHeight",required:!1,type:{name:"boolean"}},{name:"large",required:!1,type:{name:"boolean"}},{name:"small",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"entered"},{name:"exited"}],slots:[{name:"default"}]};const jk="Polaris-Modal-Header",zk="Polaris-Modal-Header--titleHidden",Wk="Polaris-Modal-Header__Title";var Yl={Header:jk,titleHidden:zk,Title:Wk};const Gk="Polaris-Modal-CloseButton";var Xk={CloseButton:Gk};const pp=P({emits:["click"],setup(e,{emit:o}){return(n,s)=>(l(),d("button",{class:c(a(Xk).CloseButton),"aria-label":"Close",onClick:s[0]||(s[0]=i=>o("click"))},[L(a(le),{source:a($r),color:"base"},null,8,["source"])],2))}});pp.__docgenInfo={exportName:"default",displayName:"CloseButton",description:"",tags:{},events:[{name:"click"}]};const Kk=["id"],mp=P({props:{id:null,titleHidden:{type:Boolean}},emits:["close"],setup(e,{emit:o}){const n=e,s=ce(),i=p(()=>n.titleHidden||!s.default?Yl.titleHidden:Yl.Header);return(r,u)=>(l(),d("div",{class:c(a(i))},[k("div",{id:e.id,class:c(a(Yl).Title)},[L(a(Cn),{element:"h2",size:"small"},{default:y(()=>[h(r.$slots,"default")]),_:3})],10,Kk),L(a(pp),{onClick:u[0]||(u[0]=m=>o("close"))})],2))}});mp.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"titleHidden",required:!1,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"default"}]};const Yk="Polaris-Modal-Footer",Zk="Polaris-Modal-Footer__FooterContent";var nu={Footer:Yk,FooterContent:Zk};const Qk="Polaris-Stack",Jk="Polaris-Stack__Item",eL="Polaris-Stack--noWrap",tL="Polaris-Stack--spacingNone",aL="Polaris-Stack--spacingExtraTight",oL="Polaris-Stack--spacingTight",nL="Polaris-Stack--spacingBaseTight",sL="Polaris-Stack--spacingLoose",iL="Polaris-Stack--spacingExtraLoose",lL="Polaris-Stack--distributionLeading",rL="Polaris-Stack--distributionTrailing",cL="Polaris-Stack--distributionCenter",uL="Polaris-Stack--distributionEqualSpacing",dL="Polaris-Stack--distributionFill",pL="Polaris-Stack--distributionFillEvenly",mL="Polaris-Stack--alignmentLeading",yL="Polaris-Stack--alignmentTrailing",gL="Polaris-Stack--alignmentCenter",hL="Polaris-Stack--alignmentFill",bL="Polaris-Stack--alignmentBaseline",fL="Polaris-Stack--vertical";var Kt={Stack:Qk,Item:Jk,noWrap:eL,spacingNone:tL,spacingExtraTight:aL,spacingTight:oL,spacingBaseTight:nL,spacingLoose:sL,spacingExtraLoose:iL,distributionLeading:lL,distributionTrailing:rL,distributionCenter:cL,distributionEqualSpacing:uL,distributionFill:dL,distributionFillEvenly:pL,alignmentLeading:mL,alignmentTrailing:yL,alignmentCenter:gL,alignmentFill:hL,alignmentBaseline:bL,vertical:fL,"Item-fill":"Polaris-Stack__Item--fill"};const bt=P({props:{fill:{type:Boolean,default:!1}},setup(e){const o=e,n=p(()=>O(Kt.Item,o.fill&&Kt["Item-fill"]));return(s,i)=>(l(),d("div",{class:c(a(n))},[h(s.$slots,"default")],2))}});bt.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"fill",description:"Fill the remaining horizontal space in the stack with the item",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const Re=P({props:{wrap:{type:Boolean,default:!0},vertical:{type:Boolean},spacing:null,alignment:null,distribution:null,noItemWrap:{type:Boolean,default:!1}},setup(e){const o=e,n=ce(),s=p(()=>{const i=o.spacing&&Le("spacing",o.spacing),r=o.distribution&&Le("distribution",o.distribution),u=o.alignment&&Le("alignment",o.alignment);return O(Kt.Stack,o.vertical&&Kt.vertical,i&&Kt[i],r&&Kt[r],u&&Kt[u],o.wrap===!1&&Kt.noWrap)});return(i,r)=>(l(),d("div",{class:c(a(s))},[!e.noItemWrap&&a(n).default?(l(!0),d(Y,{key:0},be(a(n).default(),(u,m)=>(l(),A(a(bt),{key:m},{default:y(()=>[(l(),A(Ie(u)))]),_:2},1024))),128)):h(i.$slots,"default",{key:1})],2))}});Re.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"wrap",description:"Wrap stack elements to additional rows as needed on small screens (Defaults to true)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"vertical",description:"Stack the elements vertically",required:!1,type:{name:"boolean"}},{name:"spacing",description:"Adjust spacing between elements",required:!1,type:{name:"Spacing"}},{name:"alignment",description:"Adjust vertical alignment of elements",required:!1,type:{name:"Alignment"}},{name:"distribution",description:"Adjust horizontal alignment of elements",required:!1,type:{name:"Distribution"}},{name:"noItemWrap",description:"No wrap all stack elements with StackItem",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const yp=P({props:{primaryAction:null,secondaryActions:null},setup(e){return(o,n)=>(l(),d("div",{class:c(a(nu).Footer)},[k("div",{class:c(a(nu).FooterContent)},[L(a(Re),{alignment:"center","no-item-wrap":""},{default:y(()=>[L(a(bt),{fill:!0},{default:y(()=>[h(o.$slots,"default")]),_:3}),e.primaryAction||e.secondaryActions?(l(),A(a(bt),{key:0},{default:y(()=>[L(a(ot),null,{default:y(()=>[e.secondaryActions?(l(!0),d(Y,{key:0},be(e.secondaryActions,(s,i)=>(l(),A(a(pt),{key:i,action:s},null,8,["action"]))),128)):_("",!0),L(a(pt),{action:e.primaryAction,overrides:{primary:!0}},null,8,["action"])]),_:1})]),_:1})):_("",!0)]),_:3})],2)],2))}});yp.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"primaryAction",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"default"}]};const vL="Polaris-Modal-Section",xL="Polaris-Modal-Section--subdued",TL="Polaris-Modal-Section--flush";var Zl={Section:vL,subdued:xL,flush:TL};const Fo=P({props:{flush:{type:Boolean},subdued:{type:Boolean}},setup(e){const o=e,n=p(()=>O(Zl.Section,o.flush&&Zl.flush,o.subdued&&Zl.subdued));return(s,i)=>(l(),d("section",{class:c(a(n))},[h(s.$slots,"default")],2))}});Fo.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"flush",required:!1,type:{name:"boolean"}},{name:"subdued",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const SL=["name","src"],xa=P({props:{open:{type:Boolean},src:null,iFrameName:null,titleHidden:{type:Boolean},instant:{type:Boolean},sectioned:{type:Boolean},large:{type:Boolean},small:{type:Boolean},limitHeight:{type:Boolean},loading:{type:Boolean},noScroll:{type:Boolean},primaryAction:null,secondaryActions:null},emits:["iframe-load","transition-end","scrolled-to-bottom","close"],setup(e,{emit:o}){const i=ce(),r=C(null),{useUniqueId:u}=De(),m=u("modal-header"),x=C(200),v=C(!1),f=S=>{const w=S.target;if(w&&w.contentWindow)try{x.value=w.contentWindow.document.body.scrollHeight}catch{x.value=400}o("iframe-load",S)},b=()=>{o("transition-end")},T=()=>{x.value=200;const S=r.value;S&&requestAnimationFrame(()=>qs(S))};return Te(()=>{v.value=!0}),(S,w)=>(l(),d("div",null,[a(i).activator?(l(),d("div",{key:0,ref_key:"activatorNode",ref:r},[h(S.$slots,"activator")],512)):_("",!0),v.value&&e.open?(l(),A(a(vn),{key:1,idPrefix:"modal"},{default:y(()=>[L(a(dp),{instant:e.instant,labelledBy:a(m),large:e.large,small:e.small,limitHeight:e.limitHeight,onClose:w[2]||(w[2]=B=>o("close")),onEntered:b,onExited:T},{default:y(()=>[L(a(mp),{titleHidden:e.titleHidden,id:a(m),onClose:w[0]||(w[0]=B=>o("close")),key:"header"},{default:y(()=>[h(S.$slots,"title")]),_:3},8,["titleHidden","id"]),k("div",{class:c(a(Aa).BodyWrapper),key:"body"},[e.src?(l(),d("iframe",{key:0,name:e.iFrameName,title:"body markup",src:e.src,class:c(a(Aa).IFrame),onLoad:f,style:Fe({height:`${x.value}px`})},null,46,SL)):e.noScroll?(l(),d("div",{key:1,class:c(a(Aa).Body)},[e.loading?(l(),d("div",{key:0,class:c(a(Aa).Spinner)},[L(a(Jt))],2)):(l(),d(Y,{key:1},[e.sectioned?(l(),A(a(Fo),{key:0},{default:y(()=>[h(S.$slots,"content")]),_:3})):h(S.$slots,"content",{key:1})],64))],2)):(l(),A(a(Ut),{key:2,shadow:!0,class:c(a(Aa).Body),onScrolledToBottom:w[1]||(w[1]=B=>o("scrolled-to-bottom"))},{default:y(()=>[e.loading?(l(),d("div",{key:0,class:c(a(Aa).Spinner)},[L(a(Jt))],2)):(l(),d(Y,{key:1},[e.sectioned?(l(),A(a(Fo),{key:0},{default:y(()=>[h(S.$slots,"content")]),_:3})):h(S.$slots,"content",{key:1})],64))]),_:3},8,["class"]))],2),a(i).footer||e.primaryAction||e.secondaryActions?(l(),A(a(yp),{primaryAction:e.primaryAction,secondaryActions:e.secondaryActions,key:"footer"},{default:y(()=>[h(S.$slots,"footer")]),_:3},8,["primaryAction","secondaryActions"])):_("",!0)]),_:3},8,["instant","labelledBy","large","small","limitHeight"]),L(a(wr))]),_:3})):_("",!0)]))}});xa.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",description:"Whether the modal is open or not",required:!0,type:{name:"boolean"}},{name:"src",description:"The url that will be loaded as the content of the modal",required:!1,type:{name:"string"}},{name:"iFrameName",description:"The name of the modal content iframe",required:!1,type:{name:"string"}},{name:"titleHidden",description:"Hide the title in the modal",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"instant",description:"Disable animations and open modal instantly",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically adds sections to modal",required:!1,type:{name:"boolean"}},{name:"large",description:"Increases the modal width",required:!1,type:{name:"boolean"}},{name:"small",description:"Decreases the modal width",required:!1,type:{name:"boolean"}},{name:"limitHeight",description:"Limits modal height on large sceens with scrolling",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces modal content with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"noScroll",description:"Removes Scrollable container from the modal content",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary action",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",description:"Collection of secondary actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],events:[{name:"iframe-load",type:{names:["Event"]}},{name:"transition-end"},{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"title"},{name:"content"},{name:"footer"}]};const CL="Polaris-Navigation",AL="Polaris-Navigation__UserMenu",kL="Polaris-Navigation__ContextControl",LL="Polaris-Navigation__PrimaryNavigation",wL="Polaris-Navigation__LogoContainer",_L="Polaris-Navigation__Logo",ML="Polaris-Navigation__LogoLink",PL="Polaris-Navigation__Item",NL="Polaris-Navigation--keyFocused",BL="Polaris-Navigation__Icon",IL="Polaris-Navigation__Badge",DL="Polaris-Navigation--subNavigationActive",$L="Polaris-Navigation__ExternalIcon",FL="Polaris-Navigation__ListItem",EL="Polaris-Navigation__RollupSection",OL="Polaris-Navigation__SecondaryNavigation",qL="Polaris-Navigation__ItemWrapper",RL="Polaris-Navigation__Text",VL="Polaris-Navigation__SecondaryAction",HL="Polaris-Navigation--isExpanded",UL="Polaris-Navigation__List",jL="Polaris-Navigation__Section",zL="Polaris-Navigation__SectionHeading",WL="Polaris-Navigation__Action",GL="Polaris-Navigation__RollupToggle",XL="Polaris-Navigation__Indicator";var de={Navigation:CL,UserMenu:AL,ContextControl:kL,PrimaryNavigation:LL,LogoContainer:wL,Logo:_L,LogoLink:ML,Item:PL,keyFocused:NL,"Icon-resized":"Polaris-Navigation__Icon--resized","Item-selected":"Polaris-Navigation__Item--selected","Item-disabled":"Polaris-Navigation__Item--disabled",Icon:BL,Badge:IL,subNavigationActive:DL,"Item-child-active":"Polaris-Navigation--itemChildActive",ExternalIcon:$L,ListItem:FL,RollupSection:EL,SecondaryNavigation:OL,"ListItem-hasAction":"Polaris-Navigation__ListItem--hasAction",ItemWrapper:qL,Text:RL,SecondaryAction:VL,isExpanded:HL,List:UL,"SecondaryNavigation-noIcon":"Polaris-Navigation__SecondaryNavigation--noIcon",Section:jL,"Section-fill":"Polaris-Navigation__Section--fill","Section-withSeparator":"Polaris-Navigation__Section--withSeparator",SectionHeading:zL,Action:WL,RollupToggle:GL,Indicator:XL};const KL=["aria-labelledby"],Ln=P({props:{location:null,onDismiss:null,ariaLabelledBy:null},setup(e){const o=e,{useFrame:n}=Vo(),{logo:s}=n(),i=Fr(s,104),r=ce();return ze("NavigationContext",{location:o.location,onNavigationDismiss:o.onDismiss,withinContentContainer:!1}),ze("WithinContentContext",!1),(u,m)=>(l(),d("nav",{class:c(a(de).Navigation),"aria-labelledby":e.ariaLabelledBy},[a(r).contextControl?(l(),d("div",{key:0,class:c(a(de).ContextControl)},[h(u.$slots,"contextControl")],2)):a(s)?(l(),d("div",{key:1,class:c(a(de).LogoContainer)},[L(a(_t),{url:a(s).url||"",class:c(a(de).LogoLink),style:Fe({width:a(i)})},{default:y(()=>[L(a(Eo),{source:a(s).topBarSource||"",alt:a(s).accessibilityLabel||"",class:c(a(de).Logo),style:Fe({width:a(i)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):_("",!0),L(a(Ut),{class:c(a(de).PrimaryNavigation)},{default:y(()=>[h(u.$slots,"default")]),_:3},8,["class"])],10,KL))}});Ln.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"location",required:!0,type:{name:"string"}},{name:"ariaLabelledBy",description:"id of the element used as aria-labelledby",required:!1,type:{name:"string"}}],slots:[{name:"contextControl"},{name:"default"}]};const YL={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ZL=k("path",{d:"M11 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 5H12a1 1 0 0 1-1-1zM3 6.5A1.5 1.5 0 0 1 4.5 5H8a1 1 0 0 1 0 2H5v8h8v-3a1 1 0 1 1 2 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.5v-9z"},null,-1),QL=[ZL];function JL(e,o){return l(),d("svg",YL,QL)}var ew={render:JL};function tw(){const e=fe("NavigationContext",{location:""});function o(){return e}return{useNavigationContext:o}}const gp=P({props:{expanded:{type:Boolean},id:null},setup(e){const{useUniqueId:o}=De(),n=o("SecondaryNavigation");return(s,i)=>(l(),A(a(qo),{id:e.id||a(n),open:e.expanded,transition:{duration:"0ms",timingFunction:"linear"}},{default:y(()=>[k("ul",{class:c(a(de).List)},[h(s.$slots,"default")],2)]),_:3},8,["id","open"]))}});gp.__docgenInfo={exportName:"default",displayName:"Secondary",description:"",tags:{},props:[{name:"expanded",required:!0,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const aw=["disabled","aria-disabled","aria-label","onKeyup"],hr=P({props:{url:null,matches:{type:Boolean},matchPaths:null,excludePaths:null,external:{type:Boolean},icon:null,badge:null,label:null,disabled:{type:Boolean},accessibilityLabel:null,selected:{type:Boolean},exactMatch:{type:Boolean},new:{type:Boolean},subNavigationItems:null,secondaryAction:null,expanded:{type:Boolean},shouldResizeIcon:{type:Boolean}},emits:["toggle-expanded-state","click"],setup(e,{emit:o}){const n=e,{useMediaQuery:s}=oa(),{isNavigationCollapsed:i}=s(),{useUniqueId:r}=De(),u=r("SecondaryNavigation"),{useNavigationContext:m}=tw(),{location:x,onNavigationDismiss:v}=m(),f=fe("lang"),b=C(!1);Vt(()=>{!i&&n.expanded&&T()});const T=()=>{o("toggle-expanded-state")},S=me=>{b.value||(b.value=!0)},w=()=>{b.value&&(b.value=!1)},B=p(()=>n.disabled?-1:0),I=p(()=>n.subNavigationItems?n.subNavigationItems.filter(me=>me.new).length>0:!1),E=p(()=>O(de.Item,n.disabled&&de["Item-disabled"],b.value&&de.keyFocused,n.selected&&de["Item-selected"])),q=p(()=>O(de.ListItem,n.secondaryAction&&de["ListItem-hasAction"])),U=p(()=>O(de.Icon,n.shouldResizeIcon&&de["Icon-resized"])),K=ge({url:n.url,matches:n.matches,exactMatch:n.exactMatch,matchPaths:n.matchPaths,excludePaths:n.excludePaths},x),D=p(()=>n.subNavigationItems&&n.subNavigationItems.filter(me=>{const Se=ge(me,x);return Se===0||Se===1||Se===2})),X=p(()=>D.value&&D.value.length>0),F=p(()=>n.selected==null?K===0||K===1||K===2:n.selected),z=p(()=>F.value||n.expanded||X.value),ne=!n.subNavigationItems||n.subNavigationItems.length===0||!X.value,he=p(()=>O(de.Item,n.disabled&&de["Item-disabled"],F.value&&ne&&de["Item-selected"],z.value&&de.subNavigationActive,X.value&&de["Item-child-active"],b.value&&de.keyFocused)),te=p(()=>D.value?D.value.sort(({url:me},{url:Se})=>Se.length-me.length)[0]:null),Ne=p(()=>O(de.SecondaryNavigation,z.value&&de.isExpanded,!n.icon&&de["SecondaryNavigation-noIcon"])),H=me=>{if(me.currentTarget.getAttribute("href")===x&&me.preventDefault(),n.subNavigationItems&&n.subNavigationItems.length>0&&i)me.preventDefault(),T();else if(v){v(),o("click");return}o("click")};function J(me){const Se=me.split("?")[0].split("#")[0];return Se.endsWith("/")?Se:`${Se}/`}function ue(me,Se){return J(me)===J(Se)}function ve(me,Se){return J(me).startsWith(J(Se))}function ge({url:me,matches:Se,exactMatch:ee,matchPaths:xe,excludePaths:Be},$e){return me==null?4:Se?0:Se===!1||Be&&Be.some(st=>ve($e,st))?3:xe&&xe.some(st=>ve($e,st))?2:(ee?ue($e,me):ve($e,me))?1:4}function Ve(me,Se,ee){return Se?{"aria-expanded":ee,"aria-controls":me}:void 0}return(me,Se)=>{const ee=vr("Item",!0);return e.url?(l(),d("li",{key:1,class:c(a(q))},[k("div",{class:c(a(de).ItemWrapper)},[L(a(_t),pe({url:e.url,class:a(he),external:e.external,tabIndex:a(B),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:H,onKeyup:ar(S,["tab"]),onBlur:w},g({},Ve(a(u),!!e.subNavigationItems&&e.subNavigationItems.length>0,!!a(z)))),{default:y(()=>[e.icon?(l(),d("div",{key:0,class:c(a(U))},[L(a(le),{source:e.icon},null,8,["source"])],2)):_("",!0),k("span",{class:c(a(de).Text)},[re(W(e.label),1),a(I)?(l(),d("span",{key:0,class:c(a(de).Indicator)},[L(a(yr),{pulse:""})],2)):_("",!0)],2),n.new||e.badge?(l(),d("div",{key:1,class:c(a(de).Badge)},[n.new?(l(),A(a(at),{key:0,status:"new",size:"small"},{default:y(()=>[re(W(a(f).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(l(),A(a(at),{key:1,status:"new",size:"small"},{default:y(()=>[re(W(e.badge),1)]),_:1})):typeof e.badge=="object"?(l(),A(a(at),Ye(pe({key:2},e.badge)),{default:y(()=>[re(W(e.badge.content),1)]),_:1},16)):_("",!0)],2)):_("",!0),e.external?(l(),d("div",{key:2,class:c(a(de).ExternalIcon)},[L(a(le),{color:"base",accessibilityLabel:a(f).Polaris.Common.newWindowAccessibilityHint,source:a(ew)},null,8,["accessibilityLabel","source"])],2)):_("",!0)]),_:1},16,["url","class","external","tabIndex","aria-disabled","aria-label","onKeyup"]),e.secondaryAction?(l(),A(a(_t),{key:0,external:"",url:e.secondaryAction.url,class:c(a(de).SecondaryAction),tabIndex:a(B),"aria-disabled":e.disabled,"aria-label":e.secondaryAction.accessibilityLabel,onClick:e.secondaryAction.onClick},{default:y(()=>[L(a(le),{source:e.secondaryAction.icon},null,8,["source"])]),_:1},8,["url","class","tabIndex","aria-disabled","aria-label","onClick"])):_("",!0)],2),e.subNavigationItems&&e.subNavigationItems.length>0?(l(),d("div",{key:0,class:c(a(Ne))},[L(a(gp),{expanded:!!a(z),id:a(u)},{default:y(()=>[(l(!0),d(Y,null,be(e.subNavigationItems,xe=>(l(),A(ee,pe({key:xe.label},xe,{matches:xe===a(te),onClick:()=>{a(v)&&a(v)(),xe.onClick&&xe.onClick()}}),null,16,["matches","onClick"]))),128))]),_:1},8,["expanded","id"])],2)):_("",!0)],2)):(l(),d("li",{key:0,class:c(a(de).ListItem)},[k("button",{type:"button",class:c(a(E)),disabled:e.disabled,"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:H,onKeyup:ar(S,["tab"]),onBlur:w},[e.icon?(l(),d("div",{key:0,class:c(a(U))},[L(a(le),{source:e.icon},null,8,["source"])],2)):_("",!0),k("span",{class:c(a(de).Text)},[re(W(e.label),1),a(I)?(l(),d("span",{key:0,class:c(a(de).Indicator)},[L(a(yr),{pulse:""})],2)):_("",!0)],2),n.new||e.badge?(l(),d("div",{key:1,class:c(a(de).Badge)},[n.new?(l(),A(a(at),{key:0,status:"new",size:"small"},{default:y(()=>[re(W(a(f).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(l(),A(a(at),{key:1,status:"new",size:"small"},{default:y(()=>[re(W(e.badge),1)]),_:1})):typeof e.badge=="object"?(l(),A(a(at),Ye(pe({key:2},e.badge)),{default:y(()=>[re(W(e.badge.content),1)]),_:1},16)):_("",!0)],2)):_("",!0)],42,aw)],2))}}});hr.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"url",required:!1,type:{name:"string"}},{name:"matches",required:!1,type:{name:"boolean"}},{name:"matchPaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"excludePaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"external",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"badge",required:!1,type:{name:"union",elements:[{name:"string"},{name:"BadgeItemProps"}]}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"exactMatch",required:!1,type:{name:"boolean"}},{name:"new",required:!1,type:{name:"boolean"}},{name:"subNavigationItems",required:!1,type:{name:"Array",elements:[{name:"SubNavigationItem"}]}},{name:"secondaryAction",required:!1,type:{name:"SecondaryAction"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"shouldResizeIcon",required:!1,type:{name:"boolean"}}],events:[{name:"toggle-expanded-state"},{name:"click"}]};const ow=["aria-label"],nw=["aria-label"],Er=P({props:{items:null,icon:null,title:null,fill:{type:Boolean},rollup:null,action:null,separator:{type:Boolean}},emits:["click"],setup(e,{emit:o}){const n=e,s=C(!1),i=()=>{s.value=!s.value},r=()=>{s.value=!1},u=C(null),m=C(),{useMediaQuery:x}=oa(),{isNavigationCollapsed:v}=x(),{useUniqueId:f}=De(),b=f("AdditionalItems"),T=U=>{o("click"),u.value&&cancelAnimationFrame(u.value),(!U||!v)&&(u.value=requestAnimationFrame(r))};Te(()=>{u.value&&cancelAnimationFrame(u.value)});const S=p(()=>O(de.Section,n.separator&&de["Section-withSeparator"],n.fill&&de["Section-fill"])),w=O(de.Item,de.RollupToggle),B=p(()=>n.rollup&&(s.value?n.rollup.hide:n.rollup.view)),I=p(()=>n.items.findIndex(U=>n.rollup?n.rollup.activePath===U.url||U.url&&n.rollup.activePath.startsWith(U.url)||(U.subNavigationItems?U.subNavigationItems.some(({url:K})=>n.rollup&&n.rollup.activePath.startsWith(K)):!1):!1)),E=U=>{m.value===U?m.value=-1:m.value=U},q=p(()=>{let U=[];if(U=n.rollup?n.items.slice(0,n.rollup.after):n.items,n.rollup&&I.value!==-1&&I.value>n.rollup.after-1){const K=n.items.slice(n.rollup.after);U.push(...K.splice(I.value-n.rollup.after,1))}return U});return(U,K)=>(l(),d("ul",{class:c(a(S))},[e.title?(l(),d("li",{key:0,class:c(a(de).SectionHeading)},[k("span",{class:c(a(de).Text)},W(e.title),3),e.action?(l(),d("button",{key:0,type:"button",class:c(a(de).Action),"aria-label":e.action.accessibilityLabel,onClick:K[0]||(K[0]=(...D)=>e.action.onClick&&e.action.onClick(...D))},[L(a(le),{source:e.action.icon},null,8,["source"])],10,ow)):_("",!0)],2)):_("",!0),a(q).length>0?(l(!0),d(Y,{key:1},be(a(q),(D,X)=>(l(),A(a(hr),pe({key:D.label},g({},D),{label:D.label,subNavigationItems:D.subNavigationItems,expanded:m.value===X,onClick:F=>T(D.subNavigationItems!=null&&D.subNavigationItems.length>0),onToggleExpandedState:F=>E(X)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128)):_("",!0),e.rollup&&e.items.slice(e.rollup.after).length>0?(l(),d("li",{key:2,class:c(a(de).RollupSection)},[L(a(qo),{id:a(b),open:s.value},{default:y(()=>[k("ul",{class:c(a(de).List)},[(l(!0),d(Y,null,be(e.items.slice(e.rollup.after),(D,X)=>(l(),A(a(hr),pe({key:D.label},D,{label:D.label,subNavigationItems:D.subNavigationItems,expanded:m.value===X,onClick:F=>T(D.subNavigationItems!=null&&D.subNavigationItems.length>0),onToggleExpandedState:F=>E(X)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128))],2)]),_:1},8,["id","open"]),e.rollup&&e.items.length>e.rollup.after?(l(),d("div",{class:c(a(de).ListItem),key:"List Item"},[k("button",{type:"button",class:c(a(w)),"aria-label":a(B),onClick:i},[k("span",{class:c(a(de).Icon)},[L(a(le),{source:a(Nd)},null,8,["source"])],2)],10,nw)],2)):_("",!0)],2)):_("",!0)],2))}});Er.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"items",description:"A collection of navigation items to be rendered inside the section",required:!0,type:{name:"Array",elements:[{name:"ItemProps"}]}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"title",required:!1,type:{name:"string"}},{name:"fill",required:!1,type:{name:"boolean"}},{name:"rollup",required:!1,type:{name:`{
  after: number;
  view: string;
  hide: string;
  activePath: string;
}`}},{name:"action",required:!1,type:{name:`{
  icon: IconProps['source'];
  accessibilityLabel: string;
  onClick(): void;
}`}},{name:"separator",required:!1,type:{name:"boolean"}}],events:[{name:"click"}]};const sw="Polaris-OptionList",iw="Polaris-OptionList__Options",lw="Polaris-OptionList__Title";var Ql={OptionList:sw,Options:iw,Title:lw};const rw="Polaris-OptionList-Option",cw="Polaris-OptionList-Option__SingleSelectOption",uw="Polaris-OptionList-Option--focused",dw="Polaris-OptionList-Option--active",pw="Polaris-OptionList-Option--select",mw="Polaris-OptionList-Option--disabled",yw="Polaris-OptionList-Option__Media",gw="Polaris-OptionList-Option__Label",hw="Polaris-OptionList-Option__Checkbox",bw="Polaris-OptionList-Option--verticalAlignTop",fw="Polaris-OptionList-Option--verticalAlignCenter",vw="Polaris-OptionList-Option--verticalAlignBottom";var nt={Option:rw,SingleSelectOption:cw,focused:uw,active:dw,select:pw,disabled:mw,Media:yw,Label:gw,Checkbox:hw,verticalAlignTop:bw,verticalAlignCenter:fw,verticalAlignBottom:vw};const xw="Polaris-OptionList-Checkbox",Tw="Polaris-OptionList-Checkbox--active",Sw="Polaris-OptionList-Checkbox__Backdrop",Cw="Polaris-OptionList-Checkbox__Input",Aw="Polaris-OptionList-Checkbox--keyFocused",kw="Polaris-OptionList-Checkbox__Icon",Lw="Polaris-OptionList-Checkbox--hover";var ka={Checkbox:xw,active:Tw,Backdrop:Sw,Input:Cw,keyFocused:Aw,"Input-indeterminate":"Polaris-OptionList-Checkbox__Input--indeterminate",Icon:kw,hover:Lw};const ww=["id","name","value","checked","disabled","aria-checked","role"],hp=P({props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean},active:{type:Boolean},id:null,name:null,modelValue:null,role:null},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,{useUniqueId:s}=De(),i=s("Checkbox",n.id),r=C(!1),u=p(()=>O(ka.Checkbox,n.active&&ka.active)),m=p(()=>O(ka.Input,r.value&&ka.keyFocused)),x=()=>{r.value=!1},v=()=>{r.value||(r.value=!0)},f=b=>{const T=b.target;o("update:modelValue",T.value),o("change",T.value)};return(b,T)=>(l(),d("div",{class:c(a(u))},[k("input",{type:"checkbox",id:a(i),name:e.name,value:e.modelValue,checked:e.checked,disabled:e.disabled,class:c(a(m)),"aria-checked":e.checked,onChange:f,onBlur:x,onKeyup:v,role:e.role},null,42,ww),k("div",{class:c(a(ka).Backdrop)},null,2),k("div",{class:c(a(ka).Icon)},[L(a(le),{source:a(Cr)},null,8,["source"])],2)],2))}});hp.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"checked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["string"]}},{name:"update:modelValue",type:{names:["string"]}}]};const _w=["for"],Mw=["id","disabled","aria-pressed"],bp=P({props:{id:null,value:null,section:null,index:null,disabled:{type:Boolean},active:{type:Boolean},select:{type:Boolean},allowMultiple:{type:Boolean},verticalAlign:null,role:null},emits:["click"],setup(e,{emit:o}){const n=e,s=ce(),i=C(!1),r=()=>{i.value=!i.value},u=p(()=>O(nt.SingleSelectOption,i.value&&nt.focused,n.disabled&&nt.disabled,n.select&&nt.select,n.active&&nt.active,n.verticalAlign&&nt[Le("verticalAlign",n.verticalAlign)])),m=p(()=>O(nt.Label,n.disabled&&nt.disabled,n.active&&nt.active,n.select&&nt.select,n.verticalAlign&&nt[Le("verticalAlign",n.verticalAlign)])),x=p(()=>n.role==="option"?"presentation":void 0),v=()=>{n.disabled||o("click",n.section,n.index)};return(f,b)=>(l(),d("li",{key:e.id,class:c(a(nt).Option),tabIndex:"-1"},[e.active?(l(),A(a(Rs),{key:0})):_("",!0),e.allowMultiple?(l(),d("label",{key:1,for:e.id,class:c(a(m))},[k("div",{class:c(a(nt).Checkbox)},[L(a(hp),{id:e.id,modelValue:e.value,"onUpdate:modelValue":b[0]||(b[0]=T=>ws(value)?value.value=T:null),checked:e.select,active:e.active,disabled:e.disabled,role:a(x),onChange:v},null,8,["id","modelValue","checked","active","disabled","role"])],2),a(s).media?(l(),d("div",{key:0,class:c(a(nt).Media)},[h(f.$slots,"media")],2)):_("",!0),h(f.$slots,"label")],10,_w)):(l(),d("button",{key:2,type:"button",id:e.id,class:c(a(u)),disabled:e.disabled,"aria-pressed":e.active,onClick:v,onFocus:r,onBlur:r},[a(s).media?(l(),d("div",{key:0,class:c(a(nt).Media)},[h(f.$slots,"media")],2)):_("",!0),h(f.$slots,"label")],42,Mw))],2))}});bp.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"string"}},{name:"section",required:!0,type:{name:"number"}},{name:"index",required:!0,type:{name:"number"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"select",required:!1,type:{name:"boolean"}},{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"verticalAlign",required:!1,type:{name:"Alignment"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],slots:[{name:"media"},{name:"label"}]};const Pw=["role"],Nw=["id","role"],wn=P({props:{id:null,title:null,options:null,role:null,optionRole:null,sections:null,modelValue:null,allowMultiple:{type:Boolean},verticalAlign:null},emits:["update:modelValue","change"],setup(e,{emit:o}){const n=e,s=ce(),i=C(v(n.options,n.sections,n.title)),{useUniqueId:r}=De(),u=r("OptionList",n.id),m=(f,b)=>{const T=i.value[f].options[b].value,S=n.modelValue.indexOf(T);if(n.allowMultiple){const w=S===-1?[T,...n.modelValue]:[...n.modelValue.slice(0,S),...n.modelValue.slice(S+1,n.modelValue.length)];o("update:modelValue",w),o("change",w);return}o("update:modelValue",[T]),o("change",[T])},x=p(()=>i.value.length>0);Ee(()=>[n.options,n.sections,n.title],(f,b)=>{f!==b&&(i.value=v(n.options||[],n.sections||[],n.title))});function v(f,b,T){if(!f||!f.length){const S=T?[{options:[],title:T}]:[];return!b||!b.length?[]:[...S,...b]}return!b||!b.length?[{title:T,options:f}]:[{title:T,options:f},...b]}return(f,b)=>(l(),d("ul",{class:c(a(Ql).OptionList),role:e.role},[a(x)?(l(!0),d(Y,{key:0},be(i.value,(T,S)=>(l(),d("li",{key:T.title||`noTitle-${S}`},[T.title?(l(),d("p",{key:0,class:c(a(Ql).Title)},W(T.title),3)):_("",!0),k("ul",{class:c(a(Ql).Options),id:`${a(u)}-${S}`,role:e.role},[T.options?(l(!0),d(Y,{key:0},be(T.options,(w,B)=>(l(),A(a(bp),pe({key:w.id||`${a(u)}-${S}-${B}`,id:w.id||`${a(u)}-${S}-${B}`,section:S,index:B},w,{select:e.modelValue.includes(w.value),allowMultiple:e.allowMultiple,verticalAlign:e.verticalAlign,role:e.optionRole,onClick:m}),Ue({label:y(()=>[a(s)[`option-label-${w.id}`]?h(f.$slots,`option-label-${w.id}`,{key:0}):(l(),d(Y,{key:1},[re(W(w.label),1)],64))]),_:2},[a(s)[`option-media-${w.id}`]?{name:"media",fn:y(()=>[h(f.$slots,`option-media-${w.id}`)])}:void 0]),1040,["id","section","index","select","allowMultiple","verticalAlign","role"]))),128)):_("",!0)],10,Nw)]))),128)):_("",!0)],10,Pw))}});wn.__docgenInfo={exportName:"default",displayName:"OptionList",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the option list",required:!1,type:{name:"string"}},{name:"title",description:"List title",required:!1,type:{name:"string"}},{name:"options",description:"Collection of options to be listed",required:!1,type:{name:"Array",elements:[{name:"OptionDescriptor"}]}},{name:"role",description:"Defines a specific role attribute for the list itself",required:!1,type:{name:"union",elements:[{name:'"listbox"'},{name:'"combobox"'},{name:"string"}]}},{name:"optionRole",description:"Defines a specific role attribute for each option in the list",required:!1,type:{name:"string"}},{name:"sections",description:"Sections containing a header and related options",required:!1,type:{name:"Array",elements:[{name:"SectionDescriptor"}]}},{name:"modelValue",description:"The selected options",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"allowMultiple",description:"Allow more than one option to be selected",required:!1,type:{name:"boolean"}},{name:"verticalAlign",description:"Vertically align child content to the center, top, or bottom.",required:!1,type:{name:"Alignment"}}],events:[{name:"update:modelValue",type:{names:["Array"]}},{name:"change",type:{names:["Array"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Bw="Polaris-Page",Iw="Polaris-Page--fullWidth",Dw="Polaris-Page--narrowWidth",$w="Polaris-Page__Content",Fw="Polaris-Page--divider";var pn={Page:Bw,fullWidth:Iw,narrowWidth:Dw,Content:$w,divider:Fw};const fp=P({props:{title:null,secondaryActions:null,actionGroups:null},setup(e){const o=ce(),{useMediaQuery:n}=oa(),{isNavigationCollapsed:s}=n();function i(r=[]){return r.length===0?!1:r.some(u=>u.actions.length>0)}return(r,u)=>a(He)(a(o).default)?h(r.$slots,"default",{key:0}):e.secondaryActions&&e.secondaryActions.length>0||i(e.actionGroups)?(l(),A(a(Id),{key:1,actions:e.secondaryActions,groups:e.actionGroups,rollup:a(s),rollupActionsLabel:e.title?`View actions for ${e.title}`:void 0},null,8,["actions","groups","rollup","rollupActionsLabel"])):_("",!0)}});fp.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}],slots:[{name:"default"}]};const Ew="Polaris-Page-Header",Ow="Polaris-Page-Header--titleHidden",qw="Polaris-Page-Header__TitleWrapper",Rw="Polaris-Page-Header__Navigation",Vw="Polaris-Page-Header--hasActionMenu",Hw="Polaris-Page-Header--mobileView",Uw="Polaris-Page-Header__BreadcrumbWrapper",jw="Polaris-Page-Header__PaginationWrapper",zw="Polaris-Page-Header__AdditionalNavigationWrapper",Ww="Polaris-Page-Header__MainContent",Gw="Polaris-Page-Header__TitleActionMenuWrapper",Xw="Polaris-Page-Header--hasNavigation",Kw="Polaris-Page-Header__PrimaryActionWrapper",Yw="Polaris-Page-Header__ActionMenuWrapper",Zw="Polaris-Page-Header__Row",Qw="Polaris-Page-Header__RightAlign",Jw="Polaris-Page-Header__LeftAlign",e_="Polaris-Page-Header--noBreadcrumbs",t_="Polaris-Page-Header__AdditionalMetaData",a_="Polaris-Page-Header__Actions",o_="Polaris-Page-Header--longTitle",n_="Polaris-Page-Header--mediumTitle",s_="Polaris-Page-Header--isSingleRow";var Oe={Header:Ew,titleHidden:Ow,TitleWrapper:qw,Navigation:Rw,hasActionMenu:Vw,mobileView:Hw,BreadcrumbWrapper:Uw,PaginationWrapper:jw,AdditionalNavigationWrapper:zw,MainContent:Ww,TitleActionMenuWrapper:Gw,hasNavigation:Xw,PrimaryActionWrapper:Kw,ActionMenuWrapper:Yw,Row:Zw,RightAlign:Qw,LeftAlign:Jw,noBreadcrumbs:e_,AdditionalMetaData:t_,Actions:a_,longTitle:o_,mediumTitle:n_,isSingleRow:s_};const vp=P({props:{additionalMetadata:null},setup(e){const o=ce();return(n,s)=>(l(),d("div",{class:c(a(Oe).AdditionalMetaData)},[L(a(yt),{variation:"subdued"},{default:y(()=>[a(o).default?h(n.$slots,"default",{key:0}):e.additionalMetadata?(l(),d(Y,{key:1},[re(W(e.additionalMetadata),1)],64)):_("",!0)]),_:3})],2))}});vp.__docgenInfo={exportName:"default",displayName:"AdditionalMetadata",description:"",tags:{},props:[{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const Or=P({setup(e){return(o,n)=>(l(),d("div",{class:c(a(Oe).AdditionalNavigationWrapper)},[h(o.$slots,"default")],2))}});Or.__docgenInfo={exportName:"default",displayName:"AdditionalNavigation",description:"",tags:{},slots:[{name:"default"}]};const qr=P({props:{breadcrumbs:null},setup(e){return(o,n)=>e.breadcrumbs.length>0?(l(),d("div",{key:0,class:c(a(Oe).BreadcrumbWrapper)},[L(a($d),{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"])],2)):_("",!0)}});qr.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const Rr=P({props:{pagination:null},setup(e){const o=ce(),{useMediaQuery:n}=oa(),{isNavigationCollapsed:s}=n();return(i,r)=>e.pagination&&!a(s)?(l(),d("div",{key:0,class:c(a(Oe).PaginationWrapper)},[L(a(_n),Ye(St(e.pagination)),{default:y(()=>[a(He)(a(o).default)?h(i.$slots,"default",{key:0}):_("",!0)]),_:3},16)],2)):_("",!0)}});Rr.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pagination",required:!1,type:{name:"PaginationProps"}}],slots:[{name:"default"}]};const i_=P({props:{pagination:null,breadcrumbs:null},setup(e){return(o,n)=>(l(),d("div",{class:c(a(Oe).Navigation)},[L(qr,{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),L(Or,null,{default:y(()=>[h(o.$slots,"default")]),_:3}),L(Rr,{pagination:e.pagination},null,8,["pagination"])],2))}});i_.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"pagination",required:!0,type:{name:"PaginationProps"}},{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}],slots:[{name:"default"}]};const l_="Polaris-Header-Title",r_="Polaris-Header-Title__TitleWithSubtitle",c_="Polaris-Header-Title__SubTitle",u_="Polaris-Header-Title__SubtitleCompact",d_="Polaris-Header-Title__TitleWithMetadataWrapper",p_="Polaris-Header-Title__TitleMetadata";var La={Title:l_,TitleWithSubtitle:r_,SubTitle:c_,SubtitleCompact:u_,TitleWithMetadataWrapper:d_,TitleMetadata:p_};const xp=P({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(e){const o=e,n=p(()=>O(La.Title,o.subtitle&&La.TitleWithSubtitle)),s=p(()=>O(La.SubTitle,o.compactTitle&&La.SubtitleCompact)),i=ce();return(r,u)=>(l(),d(Y,null,[a(He)(a(i).default)?(l(),d("div",{key:0,class:c(a(La).TitleWithMetadataWrapper)},[e.title?(l(),d("h1",{key:0,class:c(a(n))},W(e.title),3)):_("",!0),k("div",{class:c(a(La).TitleMetadata)},[h(r.$slots,"default")],2)],2)):(l(),d(Y,{key:1},[e.title?(l(),d("h1",{key:0,class:c(a(n))},W(e.title),3)):_("",!0)],64)),e.subtitle?(l(),d("div",{key:2,class:c(a(s))},[k("p",null,W(e.subtitle),1)],2)):_("",!0)],64))}});xp.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Tp=P({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:c(a(Oe).TitleWrapper)},[L(a(xp),{title:e.title,subtitle:e.subtitle,compactTitle:e.compactTitle},{default:y(()=>[h(o.$slots,"default")]),_:3},8,["title","subtitle","compactTitle"])],2))}});Tp.__docgenInfo={exportName:"default",displayName:"PageTitle",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const br=P({props:{id:null,content:null,accessibilityLabel:null,url:null,external:{type:Boolean},destructive:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},icon:null,primary:{type:Boolean},onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const o=e,n=ce(),{useMediaQuery:s}=oa(),{isNavigationCollapsed:i}=s(),r=p(()=>o.primary?o.primary:!0),u=p(()=>m(i,o));function m(x,v){let{content:f,accessibilityLabel:b,icon:T}=v;return T==null?N(g({},v),{icon:void 0}):(x?(b=b||f,f=void 0):T=void 0,N(g({},v),{content:f,accessibilityLabel:b,icon:T}))}return(x,v)=>(l(),d("div",{class:c(a(Oe).PrimaryActionWrapper)},[a(He)(a(n).default)?h(x.$slots,"default",{key:0}):(l(),A(a(pt),{key:1,action:a(u),overrides:{primary:a(r)},onAction:v[0]||(v[0]=()=>{e.onAction&&e.onAction()}),onMouseenter:v[1]||(v[1]=()=>{e.onMouseEnter&&e.onMouseEnter()}),onTouchstart:v[2]||(v[2]=()=>{e.onTouchStart&&e.onTouchStart()})},null,8,["action","overrides"]))],2))}});br.__docgenInfo={exportName:"default",displayName:"PrimaryAction",description:"",tags:{},slots:[{name:"default"}]};const Sp=P({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(e){const o=e,n=ce(),{useMediaQuery:s}=oa(),{isNavigationCollapsed:i}=s(),r=20,u=8,m=p(()=>({breadcrumbs:o.breadcrumbs||[]})),x=p(()=>({title:o.title,subtitle:o.subtitle,compactTitle:o.compactTitle})),v=p(()=>({title:o.title,secondaryActions:o.secondaryActions,actionGroups:o.actionGroups})),f=p(()=>g({},o.primaryAction)),b=p(()=>({additionalMetadata:o.additionalMetadata})),T=p(()=>i&&(!o.breadcrumbs||!o.breadcrumbs.length)&&o.title&&o.title.length<=u),S=p(()=>!i&&!o.pagination&&!o.secondaryActions&&!n.secondaryActions&&o.title!=null&&o.title.length<=r),w=p(()=>(i||S.value)&&f.value||!i&&!S.value&&o.pagination);return(B,I)=>(l(),A(a(Cp),Ye(St(o)),Ue({slot2:y(()=>[L(a(Tp),Ye(St(a(x))),{default:y(()=>[h(B.$slots,"pageTitle")]),_:3},16)]),slot3:y(()=>[L(a(fp),Ye(St(a(v))),{default:y(()=>[h(B.$slots,"secondaryActions")]),_:3},16),(a(n).primaryAction||o.primaryAction)&&!a(i)&&!a(S)?(l(),A(a(br),Ye(pe({key:0},a(f))),{default:y(()=>[h(B.$slots,"primaryAction")]),_:3},16)):_("",!0)]),slot5:y(()=>[L(a(vp),Ye(St(a(b))),{default:y(()=>[h(B.$slots,"additionalMetadata")]),_:3},16)]),slot6:y(()=>[L(a(Or),null,{default:y(()=>[h(B.$slots,"additionalNavigation")]),_:3})]),_:2},[a(T)?void 0:{name:"slot1",fn:y(()=>[L(a(qr),Ye(St(a(m))),null,16)])},a(w)?{name:"slot4",fn:y(()=>[(a(n).primaryAction||o.primaryAction)&&(a(i)||a(S))?(l(),A(a(br),Ye(pe({key:0},a(f))),{default:y(()=>[h(B.$slots,"primaryAction")]),_:3},16)):_("",!0),!a(i)&&!a(S)?(l(),A(a(Rr),{key:1,pagination:e.pagination},{default:y(()=>[a(He)(a(n).pagination)?h(B.$slots,"pagination",{key:0}):_("",!0)]),_:3},8,["pagination"])):_("",!0)])}:void 0]),1040))}});Sp.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"pagination"},{name:"additionalMetadata"},{name:"additionalNavigation"}]};const Cp=P({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(e){const o=e,n=34,s=ce(),{useMediaQuery:i}=oa(),{isNavigationCollapsed:r}=i(),u=p(()=>!o.primaryAction&&s.primaryAction&&!o.pagination&&(o.secondaryActions&&!s.secondaryActions&&!o.secondaryActions.length||s.secondaryActions)&&(!o.actionGroups||!o.actionGroups.length)),m=p(()=>o.breadcrumbs&&o.breadcrumbs.length>0||o.pagination&&!r||s.additionalNavigation),x=p(()=>!s.default||o.secondaryActions&&o.secondaryActions.length>0||I(o.actionGroups)),v=p(()=>O(Oe.Header,u.value&&Oe.isSingleRow,o.titleHidden&&Oe.titleHidden,m.value&&Oe.hasNavigation,x.value&&Oe.hasActionMenu,r&&Oe.mobileView,(!o.breadcrumbs||!o.breadcrumbs.length)&&Oe.noBreadcrumbs,o.title&&o.title.length<n&&Oe.mediumTitle,o.title&&o.title.length>n&&Oe.longTitle)),f=p(()=>He(s.slot1)),b=p(()=>He(s.slot2)),T=p(()=>He(s.slot3)),S=p(()=>He(s.slot4)),w=p(()=>He(s.slot5)),B=p(()=>He(s.slot6));function I(E=[]){return E.length===0?!1:E.some(q=>q.actions.length>0)}return(E,q)=>(l(),d("div",{class:c(a(v))},[a(f)||a(b)||a(T)||a(S)?(l(),d("div",{key:0,class:c(a(Oe).Row)},[h(E.$slots,"slot1"),h(E.$slots,"slot2"),a(T)||a(S)?(l(),d("div",{key:0,class:c(a(Oe).RightAlign)},[a(T)&&a(S)?(l(),d("div",{key:0,class:c(a(Oe).Actions)},[h(E.$slots,"slot3"),h(E.$slots,"slot4")],2)):(l(),d(Y,{key:1},[h(E.$slots,"slot3"),h(E.$slots,"slot4")],64))],2)):_("",!0)],2)):_("",!0),a(w)||a(B)?(l(),d("div",{key:1,class:c(a(Oe).Row)},[k("div",{class:c(a(Oe).LeftAlign)},[h(E.$slots,"slot5")],2),a(B)?(l(),d("div",{key:0,class:c(a(Oe).RightAlign)},[h(E.$slots,"slot6")],2)):_("",!0)],2)):_("",!0)],2))}});Cp.__docgenInfo={exportName:"default",displayName:"HeaderWrapper",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryAction"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"slot1"},{name:"slot2"},{name:"slot3"},{name:"slot4"},{name:"slot5"},{name:"slot6"}]};const oi=P({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},divider:{type:Boolean}},setup(e){const o=e,n=ce(),s=p(()=>o.title||o.primaryAction||n.primaryAction||(o.secondaryActions||n.secondaryActions)&&(o.secondaryActions&&!n.secondaryActions&&o.secondaryActions.length>0||n.secondaryActions&&!o.secondaryActions&&!n.secondaryActions.length)||o.actionGroups&&o.actionGroups.length>0||n.actionGroups||o.breadcrumbs&&o.breadcrumbs.length>0||n.breadcrumbs),i=p(()=>{const b=o,{fullWidth:m,narrowWidth:x,divider:v}=b,f=Q(b,["fullWidth","narrowWidth","divider"]);return g({},f)}),r=p(()=>O(pn.Page,o.fullWidth&&pn.fullWidth,o.narrowWidth&&pn.narrowWidth)),u=p(()=>O(!s.value&&pn.Content,o.divider&&s&&pn.divider));return(m,x)=>(l(),d("div",{class:c(a(r))},[a(s)?(l(),A(a(Sp),Ye(pe({key:0},a(i))),Ue({_:2},[a(He)(a(n).pageTitle)?{name:"pageTitle",fn:y(()=>[h(m.$slots,"pageTitle")])}:void 0,a(n).secondaryActions?{name:"secondaryActions",fn:y(()=>[h(m.$slots,"secondaryActions")])}:void 0,a(n).primaryAction?{name:"primaryAction",fn:y(()=>[h(m.$slots,"primaryAction")])}:void 0,a(n).additionalMetadata?{name:"additionalMetadata",fn:y(()=>[h(m.$slots,"additionalMetadata")])}:void 0,a(n).additionalNavigation?{name:"additionalNavigation",fn:y(()=>[h(m.$slots,"additionalNavigation")])}:void 0,a(He)(a(n).pagination)?{name:"pagination",fn:y(()=>[h(m.$slots,"pagination")])}:void 0]),1040)):_("",!0),k("div",{class:c(a(u))},[h(m.$slots,"default")],2)],2))}});oi.__docgenInfo={exportName:"default",displayName:"Page",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"divider",description:"Displays a divider between the page header and the page content",required:!1,type:{name:"boolean"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"additionalMetadata"},{name:"additionalNavigation"},{name:"pagination"},{name:"default"}]};const m_="Polaris-PageActions";var y_={PageActions:m_};const ni=P({props:{primaryAction:null,secondaryActions:null},setup(e){const o=e,n=p(()=>o.secondaryActions&&o.secondaryActions.length>0?"equalSpacing":"trailing");return(s,i)=>(l(),d("div",{class:c(a(y_).PageActions)},[L(a(Re),{distribution:a(n),spacing:"tight"},{default:y(()=>[e.secondaryActions&&e.secondaryActions.length>0?(l(),A(a(ot),{key:0},{default:y(()=>[(l(!0),d(Y,null,be(e.secondaryActions,r=>(l(),A(a(pt),{key:r.id,action:r},null,8,["action"]))),128))]),_:1})):_("",!0),e.primaryAction?(l(),A(a(pt),{key:1,action:e.primaryAction,overrides:{primary:!0}},null,8,["action"])):_("",!0)]),_:1},8,["distribution"])],2))}});ni.__docgenInfo={exportName:"default",displayName:"PageActions",description:"",tags:{},props:[{name:"primaryAction",description:"The primary action for the page",required:!1,type:{name:"intersection",elements:[{name:"DisableableAction"},{name:"LoadableAction"}]}},{name:"secondaryActions",description:"The secondary actions for the page",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}]};function g_(){if(document==null||document.activeElement==null)return!1;const{tagName:e}=document.activeElement;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||document.activeElement.hasAttribute("contenteditable")}const h_={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},b_=k("path",{d:"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z"},null,-1),f_=[b_];function v_(e,o){return l(),d("svg",h_,f_)}var su={render:v_};const x_=["aria-label"],T_={key:2,"aria-live":"polite"},_n=P({props:{nextKeys:null,previousKeys:null,nextTooltip:null,previousTooltip:null,nextURL:null,previousURL:null,hasNext:{type:Boolean},hasPrevious:{type:Boolean},accessibilityLabel:null,accessibilityLabels:null},setup(e){const o=e,n=fe("lang"),s=C(null),i=ce(),r=Ht(),u=o.accessibilityLabel||n.Polaris.Pagination.pagination,m=o.accessibilityLabels&&o.accessibilityLabels.previous||n.Polaris.Pagination.previous,x=o.accessibilityLabels&&o.accessibilityLabels.next||n.Polaris.Pagination.next,v=p(()=>o.previousKeys&&(o.previousURL||r.onPrevious)&&o.hasPrevious),f=p(()=>o.nextKeys&&(o.nextURL||r.onNext)&&o.hasNext),b=()=>{o.previousURL;const w=r.onPrevious;S(w())},T=()=>{o.nextURL;const w=r.onNext;S(w())},S=w=>()=>{g_()||w()};return(w,B)=>(l(),d("nav",{ref_key:"paginationRef",ref:s,"aria-label":a(u)},[a(v)?(l(!0),d(Y,{key:0},be(e.previousKeys,I=>(l(),A(a(mt),{key:I,"key-code":I,handler:b},null,8,["key-code"]))),128)):_("",!0),a(f)?(l(!0),d(Y,{key:1},be(e.nextKeys,I=>(l(),A(a(mt),{key:I,"key-code":I,handler:T},null,8,["key-code"]))),128)):_("",!0),L(a(ot),{segmented:!a(He)(a(i).default)},{default:y(()=>[e.previousTooltip&&e.hasPrevious?(l(),A(a(ha),{key:0,"activator-wrapper":"span",content:e.previousTooltip},{default:y(()=>[L(a(ye),{id:"previousURL",outline:"",icon:a(su),accessibilityLabel:a(m),url:e.previousURL,disabled:!e.hasPrevious,onClick:B[0]||(B[0]=I=>w.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),A(a(ye),{key:1,id:"previousURL",outline:"",icon:a(su),accessibilityLabel:a(m),url:e.previousURL,disabled:!e.hasPrevious,onClick:B[1]||(B[1]=I=>w.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])),a(He)(a(i).default)?(l(),d("div",T_,[e.hasNext&&e.hasPrevious?(l(),A(a(yt),{key:0},{default:y(()=>[h(w.$slots,"default")]),_:3})):(l(),A(a(yt),{key:1,variation:"subdued"},{default:y(()=>[h(w.$slots,"default")]),_:3}))])):_("",!0),e.nextTooltip&&e.hasNext?(l(),A(a(ha),{key:3,"activator-wrapper":"span",content:e.nextTooltip},{default:y(()=>[L(a(ye),{id:"nextURL",outline:"",icon:a(or),accessibilityLabel:a(x),url:e.nextURL,onClick:B[2]||(B[2]=I=>w.$emit("next")),disabled:!e.hasNext},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),A(a(ye),{key:4,id:"nextURL",outline:"",icon:a(or),accessibilityLabel:a(x),url:e.nextURL,onClick:B[3]||(B[3]=I=>w.$emit("next")),disabled:!e.hasNext},null,8,["icon","accessibilityLabel","url","disabled"]))]),_:3},8,["segmented"])],8,x_))}});_n.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"nextKeys",description:"Keyboard shortcuts for the next button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"previousKeys",description:"Keyboard shortcuts for the previous button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"nextTooltip",description:"Tooltip for the next button",required:!1,type:{name:"string"}},{name:"previousTooltip",description:"Tooltip for the previous button",required:!1,type:{name:"string"}},{name:"nextURL",description:"The URL of the next page",required:!1,type:{name:"string"}},{name:"previousURL",description:"The URL of the previous page",required:!1,type:{name:"string"}},{name:"hasNext",description:"Whether there is a next page to show",required:!1,type:{name:"boolean"}},{name:"hasPrevious",description:"Whether there is a previous page to show",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Accessible label for the pagination",required:!1,type:{name:"string"}},{name:"accessibilityLabels",description:"Accessible labels for the buttons and UnstyledLinks",required:!1,type:{name:"AccessibilityLabels"}}],events:[{name:"previous"},{name:"next"}],slots:[{name:"default"}]};const S_="Polaris-ProgressBar",C_="Polaris-ProgressBar--sizeSmall",A_="Polaris-ProgressBar--sizeMedium",k_="Polaris-ProgressBar--sizeLarge",L_="Polaris-ProgressBar--colorHighlight",w_="Polaris-ProgressBar--colorPrimary",__="Polaris-ProgressBar--colorSuccess",M_="Polaris-ProgressBar--colorCritical",P_="Polaris-ProgressBar__Indicator",N_="Polaris-ProgressBar__IndicatorAppearActive",B_="Polaris-ProgressBar__IndicatorAppearDone",I_="Polaris-ProgressBar__Progress",D_="Polaris-ProgressBar__Label";var da={ProgressBar:S_,sizeSmall:C_,sizeMedium:A_,sizeLarge:k_,colorHighlight:L_,colorPrimary:w_,colorSuccess:__,colorCritical:M_,Indicator:P_,IndicatorAppearActive:N_,IndicatorAppearDone:B_,Progress:I_,Label:D_};const $_=["value"],si=P({props:{progress:{default:0},size:{default:"medium"},color:{default:"highlight"},animated:{type:Boolean,default:!0}},setup(e){const o=e,n=fe("lang"),s=p(()=>O(da.ProgressBar,o.size&&da[Le("size",o.size)],o.color&&da[Le("color",o.color)])),i=p(()=>o.progress<0?n.Polaris.ProgressBar.negativeWarningMessage.replace("{progress}",o.progress):n.Polaris.ProgressBar.exceedWarningMessage.replace("{progress}",o.progress)),r=(f,b)=>{let T;return f<0?T=0:f>100?T=100:T=f,T},u=p(()=>o.animated?Ss.motion["duration-500"]:Ss.motion["duration-0"]),m=p(()=>({"--pc-progress-bar-duration":u.value,"--pc-progress-bar-percent":x.value/100})),x=p(()=>r(o.progress,i.value)),v=(f,b)=>{setTimeout(()=>{f.classList.add(da.IndicatorAppearDone),b()},1)};return(f,b)=>(l(),d("div",{class:c(a(s))},[k("progress",{class:c(a(da).Progress),value:a(x),max:"100"},null,10,$_),L(gd,{appear:"",duration:parseInt(a(u),10),onEnter:v},{default:y(()=>[k("div",{class:c(a(O)(a(da).Indicator)),style:Fe(a(m))},[k("span",{class:c(a(da).Label)},W(a(x))+"%",3)],6)]),_:1},8,["duration"])],2))}});si.__docgenInfo={exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"progress",description:"The progression of certain tasks",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",description:"Size of progressbar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"color",description:"Color of progressbar",tags:{default:[{description:"'highlight'",title:"default"}]},required:!1,type:{name:"Color"},defaultValue:{func:!1,value:"'highlight'"}},{name:"animated",description:"Whether the fill animation is triggered",tags:{default:[{description:"'true'",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]};function F_(e){return Math.sign(e)===1?-Math.abs(e):Math.sign(e)===-1?Math.abs(e):0}const E_="Polaris-RangeSlider-SingleThumb__RangeSlider",O_="Polaris-RangeSlider-SingleThumb",q_="Polaris-RangeSlider-SingleThumb--disabled",R_="Polaris-RangeSlider-SingleThumb__InputWrapper",V_="Polaris-RangeSlider-SingleThumb__Prefix",H_="Polaris-RangeSlider-SingleThumb__Suffix",U_="Polaris-RangeSlider-SingleThumb__Input",j_="Polaris-RangeSlider-SingleThumb--error",z_="Polaris-RangeSlider-SingleThumb__Output",W_="Polaris-RangeSlider-SingleThumb__OutputBubble",G_="Polaris-RangeSlider-SingleThumb__OutputText";var Lt={RangeSlider:E_,SingleThumb:O_,disabled:q_,InputWrapper:R_,Prefix:V_,Suffix:H_,Input:U_,error:j_,Output:z_,OutputBubble:W_,OutputText:G_};const X_="Polaris-RangeSlider";var Ap={RangeSlider:X_};const K_=["id","name","min","max","step","value","disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby"],Y_=["for"],kp=P({props:{labelAction:null,labelHidden:{type:Boolean},id:null,modelValue:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","update:modelValue","focus","blur"],setup(e,{emit:o}){const n=e,s=ce(),i=p(()=>Qt(n.modelValue,n.min,n.max)),r=C([]);n.error&&r.value.push(`${n.id}Error`),s["help-text"]&&r.value.push(Gs(n.id));const u=p(()=>r.value.length?r.value.join(" "):void 0),m=p(()=>(i.value-n.min)*100/(n.max-n.min)),x=p(()=>F_((m.value-50)/100)),v=p(()=>({"--pc-range-slider-min":n.min,"--pc-range-slider-max":n.max,"--pc-range-slider-current":i.value,"--pc-range-slider-progress":`${m.value}%`,"--pc-range-slider-output-factor":`${x.value}`})),f=p(()=>O(Lt.SingleThumb,Ap.RangeSlider,n.error&&Lt.error,n.disabled&&Lt.disabled)),b=T=>{o("update:modelValue",parseFloat(T.target.value),n.id),o("input",parseFloat(T.target.value),n.id)};return(T,S)=>(l(),A(a(Ro),{id:e.id,action:e.labelAction,labelHidden:e.labelHidden},Ue({default:y(()=>[k("div",{class:c(a(f)),style:Fe(a(v))},[a(He)(a(s).prefix)?(l(),d("div",{key:0,class:c(a(Lt).Prefix)},[h(T.$slots,"prefix")],2)):_("",!0),k("div",{class:c(a(Lt).InputWrapper)},[k("input",{type:"range",class:c(a(Lt).Input),id:e.id,name:e.id,min:e.min,max:e.max,step:e.step,value:a(i),disabled:e.disabled,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":a(i),"aria-invalid":Boolean(e.error),"aria-describedby":a(u),onInput:b,onFocus:S[0]||(S[0]=w=>T.$emit("focus")),onBlur:S[1]||(S[1]=w=>T.$emit("blur"))},null,42,K_),!e.disabled&&e.output?(l(),d("output",{key:0,for:e.id,class:c(a(Lt).Output)},[k("div",{class:c(a(Lt).OutputBubble)},[k("span",{class:c(a(Lt).OutputText)},W(a(i)),3)],2)],10,Y_)):_("",!0)],2),a(He)(a(s).suffix)?(l(),d("div",{key:1,class:c(a(Lt).Suffix)},[h(T.$slots,"suffix")],2)):_("",!0)],6)]),_:2},[a(He)(a(s).label)?{name:"label",fn:y(()=>[h(T.$slots,"label")])}:void 0,a(He)(a(s)["help-text"])?{name:"help-text",fn:y(()=>[h(T.$slots,"help-text")])}:void 0]),1032,["id","action","labelHidden"]))}});kp.__docgenInfo={exportName:"default",displayName:"SingleThumb",description:"",tags:{},props:[{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"number"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["number"]}},{name:"update:modelValue",type:{names:["number"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};var Z_=pg;function Q_(e,o){return Z_(e,o)}var J_=Q_;const eM="Polaris-RangeSlider-DualThumb__RangeSlider",tM="Polaris-RangeSlider-DualThumb",aM="Polaris-RangeSlider-DualThumb__TrackWrapper",oM="Polaris-RangeSlider-DualThumb--disabled",nM="Polaris-RangeSlider-DualThumb__Track",sM="Polaris-RangeSlider-DualThumb--error",iM="Polaris-RangeSlider-DualThumb__Thumbs",lM="Polaris-RangeSlider-DualThumb__Prefix",rM="Polaris-RangeSlider-DualThumb__Suffix",cM="Polaris-RangeSlider-DualThumb__Output",uM="Polaris-RangeSlider-DualThumb__OutputBubble",dM="Polaris-RangeSlider-DualThumb__OutputText";var Xe={RangeSlider:eM,DualThumb:tM,TrackWrapper:aM,disabled:oM,Track:nM,error:sM,"Track--dashed":"Polaris-RangeSlider-DualThumb--trackDashed",Thumbs:iM,Prefix:lM,Suffix:rM,Output:cM,OutputBubble:uM,OutputText:dM};const pM=["id","className","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],mM=["for"],yM=["id","className","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],gM=["for"],Lp=P({props:{modelValue:null,labelAction:null,labelHidden:{type:Boolean},id:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","update:modelValue","focus","blur"],setup(e,{emit:o}){const n=e,s=ce(),i=C(Ae(n.modelValue,n.min,n.max,n.step)),r=C(0),u=C(0),m=C(null),x=C(null),v=C(null),f=C(null),b=Rt(()=>{if(m.value){const{width:$,left:j}=m.value.getBoundingClientRect(),ie=$-16,Me=j+16/2,je=n.max-n.min,Qe=n.min/je*ie;r.value=ie,u.value=Me-Qe}},40,{leading:!0,trailing:!0,maxWait:40}),T=p(()=>n.id),S=p(()=>`${n.id}Upper`),w=C([]);n.error&&w.value.push(`${n.id}Error`);const B=p(()=>w.value.length?w.value.join(" "):void 0),I=p(()=>O(Xe.TrackWrapper,n.error&&Xe.error,n.disabled&&Xe.disabled)),E=p(()=>O(Xe.Thumbs,n.disabled&&Xe.disabled)),q=p(()=>O(Xe.Thumbs,n.disabled&&Xe.disabled)),U=p(()=>n.max-n.min),K=p(()=>n.min/U.value*r.value),D=p(()=>i.value[0]/U.value*r.value-K.value),X=p(()=>i.value[1]/U.value*r.value-K.value),F=p(()=>O(Xe.Output)),z=p(()=>O(Xe.Output)),ne=p(()=>({"--pc-range-slider-progress-lower":`${D.value}px`,"--pc-range-slider-progress-upper":`${X.value}px`}));Te(()=>{b(),x.value&&x.value.addEventListener("touchstart",Bt,{passive:!1})}),lt(()=>{x.value&&x.value.removeEventListener("touchstart",Bt)});const he=G=>{G.button!==0||n.disabled||(gt(te),G.stopPropagation())},te=G=>{const $=i.value[1];_e([it(G.clientX),$],"Upper")},Ne=G=>{n.disabled||(Z(H),G.stopPropagation())},H=G=>{G.preventDefault();const $=i.value[1];_e([it(G.touches[0].clientX),$],"Upper")},J=G=>{G.button!==0||n.disabled||(gt(ue),G.stopPropagation())},ue=G=>{const $=i.value[0];_e([$,it(G.clientX)],"Lower")},ve=G=>{n.disabled||(Z(ge),G.stopPropagation())},ge=G=>{G.preventDefault();const $=i.value[0];_e([$,it(G.touches[0].clientX)],"Lower")},Ve=G=>{if(n.disabled)return;const j={[qe.ArrowUp]:Se,[qe.ArrowRight]:Se,[qe.ArrowDown]:ee,[qe.ArrowLeft]:ee}[G.key];j!=null&&(G.preventDefault(),G.stopPropagation(),j())},me=G=>{if(n.disabled)return;const j={[qe.ArrowUp]:xe,[qe.ArrowRight]:xe,[qe.ArrowDown]:Be,[qe.ArrowLeft]:Be}[G.key];j!=null&&(G.preventDefault(),G.stopPropagation(),j())},Se=()=>{_e([i.value[0]+n.step,i.value[1]],"Upper")},ee=()=>{_e([i.value[0]-n.step,i.value[1]],"Upper")},xe=()=>{_e([i.value[0],i.value[1]+n.step],"Lower")},Be=()=>{_e([i.value[0],i.value[1]-n.step],"Lower")},$e=()=>{o("input",i.value,n.id),o("update:modelValue",i.value,n.id)},_e=(G,$)=>{const j=Ae(G,n.min,n.max,n.step,$);J_(j,i)||(i.value=j,$e())},st=G=>{if(G.button!==0||n.disabled)return;G.preventDefault();const $=it(G.clientX),j=Math.abs(i.value[0]-$),ie=Math.abs(i.value[1]-$);j<=ie?(_e([$,i.value[1]],"Upper"),gt(te),v.value&&v.value.focus()):(_e([i.value[0],$],"Lower"),gt(ue),f.value&&f.value.focus())},Bt=G=>{if(n.disabled)return;G.preventDefault();const $=it(G.touches[0].clientX),j=Math.abs(i.value[0]-$),ie=Math.abs(i.value[1]-$);j<=ie?(_e([$,i.value[1]],"Upper"),Z(H),v.value&&v.value.focus()):(_e([i.value[0],$],"Lower"),Z(ge),f.value&&f.value.focus())},it=G=>{if(m.value){const{min:$,max:j}=n;return(G-u.value)/r.value*(j-$)}else return 0};function gt(G){document.addEventListener("mousemove",G),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",G)},{once:!0})}function Z(G){const $=()=>{document.removeEventListener("touchmove",G),document.removeEventListener("touchend",$),document.removeEventListener("touchcancel",$)};document.addEventListener("touchmove",G,{passive:!1}),document.addEventListener("touchend",$,{once:!0}),document.addEventListener("touchcancel",$,{once:!0})}function Ae(G,$,j,ie,Me="Upper"){let je=Iy(wc(G[1])),Qe=Dy(wc(G[0]));const Sa=je-ie,Lc=Qe+ie;return Me==="Upper"&&Qe>Sa?Qe=Sa:Me==="Lower"&&je<Lc&&(je=Lc),[Qe,je];function Iy(It){const sn=$+ie;return It<sn?sn:It>j?j:It}function Dy(It){const sn=j-ie;return It<$?$:It>sn?sn:It}function wc(It){return Math.round(It/ie)*ie}}return(G,$)=>(l(),d(Y,null,[L(a(Ro),{id:e.id,error:e.error,action:e.labelAction,labelHidden:e.labelHidden},Ue({default:y(()=>[k("div",{class:c(a(O)(a(Xe).DualThumb,a(Ap).RangeSlider))},[a(s).prefix?(l(),d("div",{key:0,class:c(a(Xe).Prefix)},[h(G.$slots,"prefix")],2)):_("",!0),k("div",{class:c(a(I)),ref_key:"trackWrapper",ref:x,onMousedown:st},[k("div",{class:c(a(Xe).Track),style:Fe(a(ne)),ref_key:"track",ref:m},null,6),k("div",{class:c(a(Xe)["Track--dashed"])},null,2),k("div",{id:a(T),className:a(E),style:Fe({left:`${a(D)}px`}),ref_key:"thumbLower",ref:v,role:"slider","aria-disabled":e.disabled,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":i.value[0],"aria-invalid":Boolean(e.error),"aria-describedby":a(B),"aria-labelledby":a(hn)(e.id),tabIndex:"0",onFocus:$[0]||($[0]=j=>G.$emit("focus")),onBlur:$[1]||($[1]=j=>G.$emit("blur")),onKeydown:Ve,onMousedown:he,onTouchstart:Ne},null,44,pM),!e.disabled&&e.output?(l(),d("output",{key:0,for:a(S),class:c(a(F)),style:Fe({left:`${a(D)}px`})},[k("div",{class:c(a(Xe).OutputBubble)},[k("span",{class:c(a(Xe).OutputText)},W(i.value[0]),3)],2)],14,mM)):_("",!0),k("div",{id:a(S),className:a(q),style:Fe({left:`${a(X)}px`}),role:"slider",tabIndex:"0",ref_key:"thumbUpper",ref:f,"aria-disabled":e.disabled,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":i.value[1],"aria-invalid":Boolean(e.error),"aria-describedby":a(B),"aria-labelledby":a(hn)(e.id),onFocus:$[2]||($[2]=j=>G.$emit("focus")),onBlur:$[3]||($[3]=j=>G.$emit("blur")),onKeydown:me,onMousedown:J,onTouchstart:ve},null,44,yM),!e.disabled&&e.output?(l(),d("output",{key:1,for:a(S),class:c(a(z)),style:Fe({left:`${a(X)}px`})},[k("div",{class:c(a(Xe).OutputBubble)},[k("span",{class:c(a(Xe).OutputText)},W(i.value[1]),3)],2)],14,gM)):_("",!0)],34),a(s).suffix?(l(),d("div",{key:1,class:c(a(Xe).Suffix)},[h(G.$slots,"suffix")],2)):_("",!0)],2)]),_:2},[a(He)(a(s).label)?{name:"label",fn:y(()=>[h(G.$slots,"label")])}:void 0,a(He)(a(s)["help-text"])?{name:"help-text",fn:y(()=>[h(G.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden"]),L(a(Je),{event:"resize",handler:a(b)},null,8,["handler"])],64))}});Lp.__docgenInfo={exportName:"default",displayName:"DualThumb",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"DualValue"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["DualValue"]}},{name:"update:modelValue",type:{names:["DualValue"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const Ta=P({props:{label:null,labelAction:null,labelHidden:{type:Boolean},modelValue:null,min:{default:0},max:{default:100},step:{default:1},output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue","focus","blur"],setup(e,{emit:o}){const n=e,s=ce(),{useUniqueId:i}=De(),r=i("RangeSlider"),u=p(()=>Array.isArray(n.modelValue)),m=p(()=>u.value?n.modelValue[0]:n.modelValue),x=p(()=>u.value?n.modelValue:[n.modelValue,n.modelValue+1]),v=p(()=>{const w=n,{label:b,modelValue:T}=w,S=Q(w,["label","modelValue"]);return g({id:r},S)}),f=(b,T)=>{o("change",b,T),o("update:modelValue",b,T)};return(b,T)=>a(u)?(l(),A(a(Lp),pe({key:0,modelValue:a(x),"onUpdate:modelValue":T[0]||(T[0]=S=>ws(x)?x.value=S:null)},a(v),{onInput:f,onFocus:T[1]||(T[1]=S=>o("focus")),onBlur:T[2]||(T[2]=S=>o("blur"))}),Ue({_:2},[a(s).label||e.label?{name:"label",fn:y(()=>[a(s).label?h(b.$slots,"label",{key:0}):(l(),d(Y,{key:1},[re(W(e.label),1)],64))])}:void 0,a(s)["help-text"]?{name:"help-text",fn:y(()=>[h(b.$slots,"help-text")])}:void 0,a(s).prefix?{name:"prefix",fn:y(()=>[h(b.$slots,"prefix")])}:void 0,a(s).suffix?{name:"suffix",fn:y(()=>[h(b.$slots,"suffix")])}:void 0]),1040,["modelValue"])):(l(),A(a(kp),pe({key:1,modelValue:a(m),"onUpdate:modelValue":T[3]||(T[3]=S=>ws(m)?m.value=S:null)},a(v),{onInput:f,onFocus:T[4]||(T[4]=S=>o("focus")),onBlur:T[5]||(T[5]=S=>o("blur"))}),Ue({_:2},[a(s).label||e.label?{name:"label",fn:y(()=>[a(s).label?h(b.$slots,"label",{key:0}):(l(),d(Y,{key:1},[re(W(e.label),1)],64))])}:void 0,a(s)["help-text"]?{name:"help-text",fn:y(()=>[h(b.$slots,"help-text")])}:void 0,a(s).prefix?{name:"prefix",fn:y(()=>[h(b.$slots,"prefix")])}:void 0,a(s).suffix?{name:"suffix",fn:y(()=>[h(b.$slots,"suffix")])}:void 0]),1040,["modelValue"]))}});Ta.__docgenInfo={exportName:"default",displayName:"RangeSlider",description:"",tags:{},props:[{name:"label",description:"Label for the range input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"RangeSliderValue"}},{name:"min",description:"Minimum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",description:"Maximum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",description:"Increment value for range input changes",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["RangeSliderValue"]}},{name:"update:modelValue",type:{names:["RangeSliderValue"]}},{name:"focus"},{name:"blur"}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const hM="Polaris-Select",bM="Polaris-Select--disabled",fM="Polaris-Select__Content",vM="Polaris-Select__InlineLabel",xM="Polaris-Select__Icon",TM="Polaris-Select__Backdrop",SM="Polaris-Select__SelectedOption",CM="Polaris-Select__Prefix",AM="Polaris-Select__Input",kM="Polaris-Select--error",LM="Polaris-Select--hover";var wt={Select:hM,disabled:bM,Content:fM,InlineLabel:vM,Icon:xM,Backdrop:TM,SelectedOption:SM,Prefix:CM,Input:AM,error:kM,hover:LM};const wM=["id","name","disabled","value","aria-invalid","aria-describedby","aria-required"],_M=["label"],MM=["value","disabled"],PM=["value","disabled"],NM=["aria-disabled"],jo=P({props:{options:null,labelAction:null,labelHidden:{type:Boolean},labelInline:{type:Boolean},disabled:{type:Boolean},placeholder:null,id:null,name:null,value:null,error:{type:[null,Boolean]},requiredIndicator:{type:Boolean},modelValue:null},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const n=e,s=ce(),{useUniqueId:i}=De(),r=[],u=p(()=>i("Select",n.id)),m=p(()=>n.labelInline?!0:n.labelHidden),x=p(()=>O(wt.Select,n.error&&wt.error,n.disabled&&wt.disabled)),v=p(()=>{let D=[];return T.value.forEach(X=>{if(w(X)){const F=X;D=D.concat(F.options)}else D.push(X)}),D}),f=p(()=>{let D=v.value.find(X=>n.modelValue===X.value);return D===void 0&&(D=v.value.find(X=>!X.hidden)),D||{value:"",label:""}}),b=p(()=>T.value.map(D=>K(D))),T=p(()=>{let D=n.options.map(K);return n.placeholder&&D.unshift({label:n.placeholder,value:"",disabled:!0}),D});s["help-text"]&&r.push(Gs(n.id||"")),n.error&&r.push(`${n.id}Error`);const S=D=>typeof D=="string",w=D=>typeof D=="object"&&"options"in D&&D.options!=null,B=D=>{o("update:modelValue",D.target.value),o("change",D.target.value)},I=D=>w(D)?D.title:D.label,E=D=>w(D)?{label:D.title,value:"",disabled:!0,hidden:!0}:D,q=D=>w(D)?D.options:[];function U(D){return{label:D,value:D}}function K(D){if(S(D))return U(D);if(w(D)){const{title:X,options:F}=D;return{title:X,options:F.map(z=>S(z)?U(z):z)}}return D}return(D,X)=>(l(),A(a(Ro),{id:a(u),error:e.error,action:e.labelAction,"label-hidden":a(m),"required-indicator":e.requiredIndicator},Ue({default:y(()=>[k("div",{class:c(a(x))},[k("select",{id:a(u),name:e.name,class:c(a(wt).Input),disabled:e.disabled,value:e.modelValue,"aria-invalid":!!e.error,"aria-describedby":r.join(" ")||void 0,"aria-required":e.requiredIndicator,onFocus:X[0]||(X[0]=F=>D.$emit("focus")),onBlur:X[1]||(X[1]=F=>D.$emit("blur")),onChange:B},[(l(!0),d(Y,null,be(a(b),F=>(l(),d(Y,null,[w(F)?(l(),d("optgroup",{label:I(F),key:I(F)},[(l(!0),d(Y,null,be(q(F),z=>(l(),d("option",{key:z.value,value:z.value,disabled:z.disabled},W(z.label),9,MM))),128))],8,_M)):(l(),d("option",{key:E(F).value,value:E(F).value,disabled:E(F).disabled},W(E(F).label),9,PM))],64))),256))],42,wM),k("div",{class:c(a(wt).Content),"aria-hidden":"","aria-disabled":e.disabled},[e.labelInline?(l(),d("span",{key:0,class:c(a(wt).InlineLabel)},[h(D.$slots,"label")],2)):_("",!0),D.$slots[`prefix-${a(f).id}`]?(l(),d("div",{key:1,class:c(a(wt).Prefix)},[h(D.$slots,`prefix-${a(f).id}`)],2)):_("",!0),k("span",{class:c(a(wt).SelectedOption)},[D.$slots[`label-${a(f).id}`]?h(D.$slots,`label-${a(f).id}`,{key:0}):(l(),d(Y,{key:1},[re(W(a(f).label),1)],64))],2),k("span",{class:c(a(wt).Icon)},[L(a(le),{source:a(pd)},null,8,["source"])],2)],10,NM),k("div",{class:c(a(wt).Backdrop)},null,2)],2)]),_:2},[!e.labelInline&&a(s).label?{name:"label",fn:y(()=>[h(D.$slots,"label")])}:void 0,a(s)["help-text"]?{name:"help-text",fn:y(()=>[h(D.$slots,"help-text")])}:void 0]),1032,["id","error","action","label-hidden","required-indicator"]))}});jo.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",description:"List of options or option groups to choose from",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"labelInline",description:"Show the label to the left of the value, inside the control",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Example text to display as placeholder",required:!1,type:{name:"string"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"error",description:"Display an error state",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"requiredIndicator",description:"Visual required indicator, add an asterisk to label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["TSIndexedAccessType"]}},{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],slots:[{name:"label"},{name:"help-text"},{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const BM="Polaris-SettingAction",IM="Polaris-SettingAction__Setting",DM="Polaris-SettingAction__Action";var Jl={SettingAction:BM,Setting:IM,Action:DM};const $M=P({setup(e){return(o,n)=>(l(),d("div",{class:c(a(Jl).SettingAction)},[k("div",{class:c(a(Jl).Setting)},[h(o.$slots,"setting")],2),k("div",{class:c(a(Jl).Action)},[h(o.$slots,"action")],2)],2))}});$M.__docgenInfo={exportName:"default",displayName:"SettingAction",description:"",tags:{},slots:[{name:"setting"},{name:"action"}]};const FM="Polaris-SkeletonBodyText";var EM={SkeletonBodyText:FM};const Mn=P({props:{lines:{default:3}},setup(e){return(o,n)=>(l(!0),d(Y,null,be(e.lines,s=>(l(),d("div",{key:s,class:c(a(EM).SkeletonBodyText)},null,2))),128))}});Mn.__docgenInfo={exportName:"default",displayName:"SkeletonBodyText",description:"",tags:{},props:[{name:"lines",description:"Number of lines to display",tags:{default:[{description:"3",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}]};const OM="Polaris-SkeletonDisplayText__DisplayText",qM="Polaris-SkeletonDisplayText--sizeSmall",RM="Polaris-SkeletonDisplayText--sizeMedium",VM="Polaris-SkeletonDisplayText--sizeLarge",HM="Polaris-SkeletonDisplayText--sizeExtraLarge";var iu={DisplayText:OM,sizeSmall:qM,sizeMedium:RM,sizeLarge:VM,sizeExtraLarge:HM};const Pn=P({props:{size:{default:"medium"}},setup(e){const o=e,n=O(iu.DisplayText,o.size&&iu[Le("size",o.size)]);return(s,i)=>(l(),d("div",{class:c(a(n))},null,2))}});Pn.__docgenInfo={exportName:"default",displayName:"SkeletonDisplayText",description:"",tags:{},props:[{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}]};const UM="Polaris-SkeletonPage__Page",jM="Polaris-SkeletonPage--fullWidth",zM="Polaris-SkeletonPage--narrowWidth",WM="Polaris-SkeletonPage__Content",GM="Polaris-SkeletonPage__Header",XM="Polaris-SkeletonPage__BreadcrumbAction",KM="Polaris-SkeletonPage__TitleAndPrimaryAction",YM="Polaris-SkeletonPage__TitleWrapper",ZM="Polaris-SkeletonPage__Title",QM="Polaris-SkeletonPage__SkeletonTitle",JM="Polaris-SkeletonPage__PrimaryAction",eP="Polaris-SkeletonPage__Actions",tP="Polaris-SkeletonPage__Action";var xt={Page:UM,fullWidth:jM,narrowWidth:zM,Content:WM,Header:GM,BreadcrumbAction:XM,TitleAndPrimaryAction:KM,TitleWrapper:YM,Title:ZM,SkeletonTitle:QM,PrimaryAction:JM,Actions:eP,Action:tP};const aP=["aria-label"],oP=P({props:{title:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},primaryAction:{type:Boolean},breadcrumbs:{type:Boolean}},setup(e){const o=e,n=fe("lang"),s=p(()=>O(xt.Page,o.fullWidth&&xt.fullWidth,o.narrowWidth&&xt.narrowWidth));return(i,r)=>(l(),d("div",{class:c(a(s)),role:"status","aria-label":a(n).Polaris.SkeletonPage.loadingLabel},[k("div",{class:c(a(xt).Header)},[e.breadcrumbs?(l(),d("div",{key:0,class:c(a(xt).BreadcrumbAction),style:{width:"60px"}},[L(a(Mn),{lines:1})],2)):_("",!0),k("div",{class:c(a(xt).TitleAndPrimaryAction)},[k("div",{class:c(a(xt).TitleWrapper)},[e.title?(l(),d("h1",{key:0,class:c(a(xt).Title)},W(e.title),3)):(l(),d("div",{key:1,class:c(a(xt).SkeletonTitle)},null,2))],2),e.primaryAction?(l(),d("div",{key:0,class:c(a(xt).PrimaryAction)},[L(a(Pn),{size:"large"})],2)):_("",!0)],2)],2),k("div",{class:c(a(xt).Content)},[h(i.$slots,"default")],2)],10,aP))}});oP.__docgenInfo={exportName:"default",displayName:"SkeletonPage",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Shows a skeleton over the primary action",required:!1,type:{name:"boolean"}},{name:"breadcrumbs",description:"Shows a skeleton over the breadcrumb",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const nP="Polaris-Subheading";var sP={Subheading:nP};const aa=P({props:{element:{default:"h3"}},setup(e){const o=ce(),s=p(()=>{var i,r;return o.default&&(((i=o.default()[0])==null?void 0:i.type.toString())==="Symbol(Text)"||((r=o.default()[0])==null?void 0:r.type.toString())==="Symbol()")}).value?o.default&&o.default()[0].children:void 0;return(i,r)=>(l(),A(Ie(e.element),{"aria-label":a(s),class:c(a(sP).Subheading)},{default:y(()=>[h(i.$slots,"default")]),_:3},8,["aria-label","class"]))}});aa.__docgenInfo={exportName:"default",displayName:"Subheading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the subheading",tags:{default:[{description:"'h3'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"default"}]};const Nn=P({props:{content:null,duration:null,error:{type:Boolean},action:null},setup(e){const o=e,n=Ht(),{useUniqueId:s}=De(),{useFrame:i}=Vo(),{showToast:r,hideToast:u}=i(),m=s("Toast");return Te(()=>{r(g(g({id:m},o),n))}),lt(()=>{u({id:m})}),(x,v)=>null}});Nn.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}]};const iP=["id","className","aria-label"],wp=P({props:{id:null,active:{type:Boolean},preventInteraction:null,preferredPosition:{default:"below"},activator:null,accessibilityLabel:null},setup(e){const o=e,n=fe("lang"),s=C({}),i=p(()=>o.accessibilityLabel?n.Polaris.TooltipOverlay.accessibilityLabel.replace("{label}",o.accessibilityLabel):void 0),r=u=>{s.value={minHeight:`${u.desiredHeight}px`}};return(u,m)=>e.active?(l(),A(a(_r),{key:0,layout:"tooltip",active:e.active,activator:e.activator,preferredPosition:e.preferredPosition,preventInteraction:e.preventInteraction,onChangeContentStyles:r},{default:y(()=>[k("div",{id:e.id,role:"tooltip",className:a(vs).Content,style:Fe(s.value),"aria-label":a(i)},[h(u.$slots,"default")],12,iP)]),_:3},8,["active","activator","preferredPosition","preventInteraction"])):_("",!0)}});wp.__docgenInfo={exportName:"default",displayName:"TooltipOverlay",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const lP={inheritAttrs:!1},ha=P(N(g({},lP),{props:{active:{type:Boolean,default:!1},content:null,dismissOnMouseOut:null,preferredPosition:{default:"below"},activatorWrapper:{default:"span"},accessibilityLabel:null},setup(e){const o=e,n=ce(),s=C(o.active),i=C(!1),r=C(null),u=C(null),{useUniqueId:m,uniqueIdRef:x}=De(),v=m("TooltipContent");Ee(()=>x.value,()=>{const E=(u.value?Ar(u.value):null)||u.value;!E||(E.tabIndex=0,E.setAttribute("aria-describedby",v),E.setAttribute("data-polaris-tooltip-activator","true"))}),Ee(()=>u.value,()=>{const I=u.value;I==null?r.value=null:I.firstElementChild instanceof HTMLElement&&(r.value=I.firstElementChild)});const f=()=>{s.value=!1},b=()=>{s.value=!0},T=I=>{I.key===qe.Escape&&f()};function S(){i.value=!0,b()}function w(){i.value=!1,f()}function B(){!i.value&&S()}return(I,E)=>(l(),A(Ie(e.activatorWrapper),{ref_key:"activatorContainer",ref:u,onFocus:b,onBlur:f,onMouseleave:w,onMouseover:B,onClick:E[0]||(E[0]=q=>q.stopPropagation()),onKeyup:T},{default:y(()=>[h(I.$slots,"default"),r.value?(l(),A(a(vn),{key:0,idPrefix:"tooltip"},{default:y(()=>[L(a(wp),{id:a(v),preferredPosition:e.preferredPosition,preventInteraction:e.dismissOnMouseOut,activator:r.value,active:s.value,accessibilityLabel:e.accessibilityLabel},{default:y(()=>[a(n).content?h(I.$slots,"content",{key:0}):(l(),d(Y,{key:1},[re(W(e.content),1)],64))]),_:3},8,["id","preferredPosition","preventInteraction","activator","active","accessibilityLabel"])]),_:3})):_("",!0)]),_:3},512))}}));ha.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"active",description:"Toggle whether the tooltip is visible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"content",description:"The content to display within the tooltip",required:!1,type:{name:"string"}},{name:"dismissOnMouseOut",description:"Dismiss tooltip when not interacting with its children",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",description:"The direction the tooltip tries to display",tags:{default:[{description:"'below'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activatorWrapper",description:"The element type to wrap the activator in",tags:{default:[{description:"'span'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"content"}]};const rP="Polaris-Tag",cP="Polaris-Tag--disabled",uP="Polaris-Tag--clickable",dP="Polaris-Tag--removable",pP="Polaris-Tag--linkable",mP="Polaris-Tag__TagText",yP="Polaris-Tag__Button",gP="Polaris-Tag--segmented",hP="Polaris-Tag__Link",bP="Polaris-Tag__LinkText";var ht={Tag:rP,disabled:cP,clickable:uP,removable:dP,linkable:pP,TagText:mP,Button:yP,segmented:gP,Link:hP,LinkText:bP};const fP=["disabled"],vP=["href"],xP=["title"],TP=["title"],SP=["aria-label","disabled"],Bn=P({props:{disabled:{type:Boolean},accessibilityLabel:null,url:null},setup(e){const o=e,n=Ht(),s=ce(),i=p(()=>Boolean(n.onClick)),r=p(()=>Boolean(n.onRemove)),u=p(()=>i.value&&o.url),m=p(()=>O(ht.Tag,o.disabled&&ht.disabled,i.value&&ht.clickable,r.value&&ht.removable,o.url&&!o.disabled&&ht.linkable,u.value&&ht.segmented)),x=p(()=>O(ht.Link,u.value&&ht.segmented)),v=p(()=>O(ht.Button,u.value&&ht.segmented)),f=p(()=>o.accessibilityLabel?o.accessibilityLabel:s.default&&s.default()[0].children?s.default()[0].children:""),b=p(()=>`Remove ${f.value||""}`),T=qt;return(S,w)=>a(i)?(l(),d("button",{key:0,type:"button",disabled:e.disabled,class:c(a(m))},[h(S.$slots,"default")],10,fP)):(l(),d("span",{key:1,class:c(a(m))},[e.url&&!e.disabled?(l(),d("a",{key:0,class:c(a(x)),href:e.url},[k("span",{title:a(f),class:c(a(ht).LinkText)},[h(S.$slots,"default")],10,xP)],10,vP)):(l(),d("span",{key:1,title:a(f),class:c(a(ht).TagText)},[h(S.$slots,"default")],10,TP)),a(r)?(l(),d("button",{key:2,type:"button","aria-label":a(b),class:c(a(v)),disabled:e.disabled,onClick:w[0]||(w[0]=B=>S.$emit("remove")),onMouseup:w[1]||(w[1]=(...B)=>a(T)&&a(T)(...B))},[L(a(le),{source:a(hd)},null,8,["source"])],42,SP)):_("",!0)],2))}});Bn.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"disabled",description:"Disables the tag",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"A string to use when tag has more than textual content",required:!1,type:{name:"string"}},{name:"url",description:"Url to navigate to when tag is clicked or keypressed.",required:!1,type:{name:"string"}}],events:[{name:"remove"}],slots:[{name:"default"}]};const CP="Polaris-Thumbnail",AP="Polaris-Thumbnail--sizeSmall",kP="Polaris-Thumbnail--sizeMedium",LP="Polaris-Thumbnail--sizeLarge",wP="Polaris-Thumbnail--transparent";var er={Thumbnail:CP,sizeSmall:AP,sizeMedium:kP,sizeLarge:LP,transparent:wP};const In=P({props:{size:{default:"medium"},source:null,alt:null,transparent:{type:Boolean}},setup(e){const o=e,n=p(()=>{const s=Le("size",o.size);return O(er.Thumbnail,s&&er[s],o.transparent&&er.transparent)});return(s,i)=>(l(),d("span",{class:c(a(n))},[typeof e.source=="string"?(l(),A(a(Eo),{key:0,alt:e.alt,source:e.source},null,8,["alt","source"])):(l(),A(a(le),{key:1,accessibilityLabel:e.alt,source:e.source},null,8,["accessibilityLabel","source"]))],2))}});In.__docgenInfo={exportName:"default",displayName:"Thumbnail",description:"",tags:{},props:[{name:"size",description:"Size of thumbnail",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"source",description:"URL for the image",required:!0,type:{name:"union",elements:[{name:"string"},{name:"IconSource"}]}},{name:"alt",description:"Alt text for the thumbnail image",required:!0,type:{name:"string"}},{name:"transparent",description:"Transparent background",required:!1,type:{name:"boolean"}}]};const _P={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},MP=k("path",{d:"M19 11H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14H1a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"},null,-1),PP=[MP];function NP(e,o){return l(),d("svg",_P,PP)}var BP={render:NP};const IP="Polaris-TopBar",DP="Polaris-TopBar__LogoDisplayControl",$P="Polaris-TopBar__LogoDisplayContainer",FP="Polaris-TopBar__LogoContainer",EP="Polaris-TopBar__Logo",OP="Polaris-TopBar__LogoLink",qP="Polaris-TopBar__ContextControl",RP="Polaris-TopBar__NavigationIcon",VP="Polaris-TopBar--focused",HP="Polaris-TopBar__IconWrapper",UP="Polaris-TopBar__Contents",jP="Polaris-TopBar__SearchField",zP="Polaris-TopBar__SecondaryMenu";var ut={TopBar:IP,LogoDisplayControl:DP,LogoDisplayContainer:$P,LogoContainer:FP,Logo:EP,LogoLink:OP,ContextControl:qP,NavigationIcon:RP,focused:VP,IconWrapper:HP,Contents:UP,SearchField:jP,SecondaryMenu:zP};const WP="Polaris-TopBar-Menu__ActivatorWrapper",GP="Polaris-TopBar-Menu__Activator",XP="Polaris-TopBar-Menu__Section";var lu={ActivatorWrapper:WP,Activator:GP,Section:XP};const KP="Polaris-Menu-Message__Section";var YP={Section:KP};const _p=P({props:{title:null,description:null,action:null,link:null,badge:null},setup(e){return(o,n)=>(l(),d("div",{class:c(a(YP).Section)},[L(a(gn),null,{default:y(()=>[L(a(Re),{vertical:"",spacing:"tight"},{default:y(()=>[L(a(At),null,{default:y(()=>[L(a(ta),null,{default:y(()=>[re(W(e.title),1),e.badge?(l(),A(a(at),{key:0,status:e.badge.status},{default:y(()=>[re(W(e.badge.content),1)]),_:1},8,["status"])):_("",!0)]),_:1}),k("p",null,W(e.description),1)]),_:1}),L(a(Ho),{url:e.link.to},{default:y(()=>[re(W(e.link.content),1)]),_:1},8,["url"]),L(a(ye),{plain:"",onClick:e.action.onClick},{default:y(()=>[re(W(e.action.content),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],2))}});_p.__docgenInfo={exportName:"default",displayName:"Message",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}},{name:"action",required:!0,type:{name:"{ onClick(): void; content: string }"}},{name:"link",required:!0,type:{name:"{ to: string; content: string }"}},{name:"badge",required:!1,type:{name:"{ content: string; status: BadgeProps['status'] }"}}]};const ZP=["aria-label"],QP={inheritAttrs:!1},ii=P(N(g({},QP),{props:{actions:null,message:null,open:{type:Boolean},colorScheme:null,accessibilityLabel:null},setup(e){const o=e,n=p(()=>!!o.message),s=o.message&&o.message.badge&&{content:o.message.badge.content,status:o.message.badge.status};return(i,r)=>(l(),A(a(tt),{fixed:"",active:e.open,"full-height":a(n),preferredAlignment:"right","color-scheme":e.colorScheme,onClose:r[2]||(r[2]=u=>i.$emit("close"))},{activator:y(()=>[k("div",{class:c(a(lu).ActivatorWrapper)},[k("button",{type:"button",class:c(a(lu).Activator),"aria-label":e.accessibilityLabel,onClick:r[0]||(r[0]=u=>i.$emit("open"))},[h(i.$slots,"activatorContent")],10,ZP)],2)]),content:y(()=>[L(a(Ze),{sections:e.actions,onActionAnyItem:r[1]||(r[1]=u=>i.$emit("close"))},null,8,["sections"]),e.message&&e.message.action&&e.message.link?(l(),A(a(_p),{key:0,title:e.message.title,description:e.message.description,action:{onClick:e.message.action.onClick,content:e.message.action.content},link:{to:e.message.link.to,content:e.message.link.content},badge:a(s)},null,8,["title","description","action","link","badge"])):_("",!0)]),_:3},8,["active","full-height","color-scheme"]))}}));ii.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"TSIndexedAccessType"}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the menu",required:!1,type:{name:"MessageProps"}},{name:"open",description:"A boolean property indicating whether the menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}}],events:[{name:"close"},{name:"open"}],slots:[{name:"activatorContent"}]};const JP="Polaris-TopBar-Search",eN="Polaris-TopBar-Search__SearchContent",tN="Polaris-TopBar-Search--visible",aN="Polaris-TopBar-Search__Results";var fs={Search:JP,SearchContent:eN,visible:tN,Results:aN};const oN="Polaris-TopBar-SearchDismissOverlay",nN="Polaris-TopBar-SearchDismissOverlay--visible";var ru={SearchDismissOverlay:oN,visible:nN};const Mp=P({props:{visible:{type:Boolean}},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=C(null),i=p(()=>O(ru.SearchDismissOverlay,n.visible&&ru.visible)),r=u=>{u.target===s.value&&o("dismiss")};return(u,m)=>(l(),d(Y,null,[e.visible?(l(),A(a(Lr),{key:0})):_("",!0),k("div",pe(u.$attrs,{ref_key:"nodeRef",ref:s,class:a(i),onClick:r}),null,16)],64))}});Mp.__docgenInfo={exportName:"default",displayName:"SearchDismissOverlay",description:"",tags:{},props:[{name:"visible",description:"Determines whether the overlay should be visible",required:!0,type:{name:"boolean"}}],events:[{name:"dismiss"}]};const Pp=P({props:{visible:{type:Boolean},overlayVisible:{type:Boolean,default:!1}},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=ce(),i=p(()=>O(fs.Search,n.visible&&fs.visible));return(r,u)=>(l(),d(Y,null,[e.visible&&a(s).default?(l(),A(a(Mp),{key:0,visible:e.overlayVisible,onDismiss:u[0]||(u[0]=m=>r.$emit("dismiss"))},null,8,["visible"])):_("",!0),a(s).default?(l(),d("div",{key:1,class:c(a(i))},[L(a(Oo),null,{default:y(()=>[k("div",{class:c(a(fs).SearchContent)},[k("div",{class:c(a(fs).Results)},[h(r.$slots,"default")],2)],2)]),_:3})],2)):_("",!0)],64))}});Pp.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"visible",description:"Toggles whether or not the search is visible",required:!1,type:{name:"boolean"}},{name:"overlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const sN="Polaris-TopBar-SearchField",iN="Polaris-TopBar-SearchField--focused",lN="Polaris-TopBar-SearchField__Input",rN="Polaris-TopBar-SearchField__Backdrop",cN="Polaris-TopBar-SearchField__BackdropShowFocusBorder",uN="Polaris-TopBar-SearchField__Icon",dN="Polaris-TopBar-SearchField__Clear";var pa={SearchField:sN,focused:iN,Input:lN,Backdrop:rN,BackdropShowFocusBorder:cN,Icon:uN,Clear:dN};const pN=["for"],mN=["id","placeholder"],yN=["aria-label"],Vr=P({props:{modelValue:null,placeholder:null,focused:{type:Boolean},active:{type:Boolean},showFocusBorder:{type:Boolean}},emits:["change","focus","blur","cancel","update:modelValue"],setup(e,{emit:o}){const n=e,s=fe("lang"),i=C(!1),r=C(null),{useUniqueId:u}=De(),m=u("SearchField"),x=I=>{const E=I.target;o("change",E.value),o("update:modelValue",E.value)},v=()=>{o("focus")},f=()=>{o("blur")},b=()=>{o("cancel"),o("update:modelValue",""),o("change",""),r.value&&r.value.focus()},T=()=>{i.value=!1},S=()=>{v(),i.value=!0},w=p(()=>O(pa.SearchField,(n.focused||n.active||i.value)&&pa.focused)),B=p(()=>O(pa.Backdrop,n.showFocusBorder&&pa.BackdropShowFocusBorder));return Te(()=>{!r.value||(n.focused?r.value.focus():r.value.blur())}),(I,E)=>(l(),d("div",{class:c(a(w)),onFocus:v,onBlur:f},[L(a(et),null,{default:y(()=>[k("label",{for:a(m)},W(a(s).Polaris.TopBar.SearchField.search),9,pN)]),_:1}),mg(k("input",{id:a(m),class:c(a(pa).Input),placeholder:e.placeholder,ref_key:"inputRef",ref:r,type:"search",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off","onUpdate:modelValue":E[0]||(E[0]=q=>ws(modelValue)?modelValue.value=q:null),onInput:x,onKeydown:E[1]||(E[1]=ar(yd(()=>!1,["prevent"]),["enter"]))},null,42,mN),[[yg,e.modelValue]]),k("span",{class:c(a(pa).Icon)},[L(a(le),{source:a(bn)},null,8,["source"])],2),e.modelValue.length>0?(l(),d("button",{key:0,type:"button","aria-label":a(s).Polaris.TopBar.SearchField.clearButtonLabel,class:c(a(pa).Clear),onClick:b,onBlur:T,onFocus:S},[L(a(le),{source:a(Hd)},null,8,["source"])],42,yN)):_("",!0),k("div",{class:c(a(B))},null,2)],34))}});Vr.__docgenInfo={exportName:"default",displayName:"SearchField",description:"",tags:{},props:[{name:"modelValue",description:"Initial value for the input",required:!0,type:{name:"string"}},{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"active",description:"Force a state where search is active but the text field component is not focused",required:!1,type:{name:"boolean"}},{name:"showFocusBorder",description:"Show a border when the search field is focused",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["string"]}},{name:"focus"},{name:"blur"},{name:"cancel"},{name:"update:modelValue",type:{names:["string"]}}]};const gN="Polaris-TopBar-UserMenu__Details",hN="Polaris-TopBar-UserMenu__Name",bN="Polaris-TopBar-UserMenu__Detail";var tr={Details:gN,Name:hN,Detail:bN};const Hr=P({props:{actions:null,message:null,name:null,detail:null,accessibilityLabel:null,initials:null,avatar:null,open:{type:Boolean},colorScheme:null},setup(e){const n=C(!!e.message);return(s,i)=>(l(),A(a(ii),{open:e.open,actions:e.actions,message:e.message,"color-scheme":e.colorScheme,accessibilityLabel:e.accessibilityLabel,onOpen:i[0]||(i[0]=r=>s.$emit("toggle")),onClose:i[1]||(i[1]=r=>s.$emit("toggle"))},{activatorContent:y(()=>[L(a(up),{active:n.value},{default:y(()=>[L(a(fn),{size:"small",source:e.avatar,initials:e.initials?e.initials.replace(" ",""):void 0},null,8,["source","initials"])]),_:1},8,["active"]),k("span",{class:c(a(tr).Details)},[k("p",{class:c(a(tr).Name)},W(e.name),3),k("p",{class:c(a(tr).Detail)},W(e.detail),3)],2)]),_:1},8,["open","actions","message","color-scheme","accessibilityLabel"]))}});Hr.__docgenInfo={exportName:"default",displayName:"UserMenu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"Array",elements:[{name:"{items: IconableAction[]}"}]}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"name",description:"A string detailing the merchant\u2019s full name to be displayed in the user menu",required:!0,type:{name:"string"}},{name:"detail",description:"A string allowing further detail on the merchant\u2019s name displayed in the user menu",required:!1,type:{name:"string"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}},{name:"initials",description:"The merchant\u2019s initials, rendered in place of an avatar image when not provided",required:!0,type:{name:"TSIndexedAccessType"}},{name:"avatar",description:"An avatar image representing the merchant",required:!1,type:{name:"TSIndexedAccessType"}},{name:"open",description:"A boolean property indicating whether the user menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the user menu",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"toggle"}]};const fN=["aria-label"],Dn=P({props:{showNavigationToggle:{type:Boolean},searchResultsVisible:{type:Boolean},searchResultsOverlayVisible:{type:Boolean,default:!1}},emits:["search-result-dismiss","navigation-toggle"],setup(e,{emit:o}){const n=e,s=fe("lang"),{useFrame:i}=Vo(),{logo:r}=i(),u=ce(),m=C(!1),x=()=>{m.value=!0},v=()=>{m.value=!1},f=p(()=>O(ut.NavigationIcon,m.value&&ut.focused)),b=p(()=>O(ut.LogoContainer,n.showNavigationToggle||u.searchField?ut.LogoDisplayControl:ut.LogoDisplayContainer)),T=Fr(r,104);return(S,w)=>(l(),d("div",{class:c(a(ut).TopBar)},[e.showNavigationToggle?(l(),d("button",{key:0,type:"button",class:c(a(f)),onClick:w[0]||(w[0]=B=>S.$emit("navigation-toggle")),onFocus:x,onBlur:v,"aria-label":a(s).Polaris.TopBar.toggleMenuLabel},[k("div",{class:c(a(ut).IconWrapper)},[L(a(le),{source:a(BP)},null,8,["source"])],2)],42,fN)):_("",!0),a(u).contextControl?(l(),d("div",{key:1,class:c(a(ut).ContextControl)},[h(S.$slots,"contextControl")],2)):a(r)?(l(),d("div",{key:2,class:c(a(b))},[L(a(_t),{url:a(r).url||"",class:c(a(ut).LogoLink),style:Fe({width:a(T)})},{default:y(()=>[L(a(Eo),{source:a(r).topBarSource||"",alt:a(r).accessibilityLabel||"",class:c(a(ut).Logo),style:Fe({width:a(T)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):_("",!0),k("div",{class:c(a(ut).Contents)},[k("div",{class:c(a(ut).SearchField)},[a(u).searchField?(l(),d(Y,{key:0},[h(S.$slots,"searchField"),L(a(Pp),{visible:e.searchResultsVisible,overlayVisible:e.searchResultsOverlayVisible,onDismiss:w[1]||(w[1]=B=>S.$emit("search-result-dismiss"))},{default:y(()=>[h(S.$slots,"searchResults")]),_:3},8,["visible","overlayVisible"])],64)):_("",!0)],2),k("div",{class:c(a(ut).SecondaryMenu)},[h(S.$slots,"secondaryMenu")],2),h(S.$slots,"userMenu")],2)],2))}});Dn.__docgenInfo={exportName:"default",displayName:"TopBar",description:"",tags:{},props:[{name:"showNavigationToggle",description:"Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button",required:!1,type:{name:"boolean"}},{name:"searchResultsVisible",description:"A boolean property indicating whether search results are currently visible.",required:!1,type:{name:"boolean"}},{name:"searchResultsOverlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"navigation-toggle"},{name:"search-result-dismiss"}],slots:[{name:"contextControl"},{name:"searchField"},{name:"searchResults"},{name:"secondaryMenu"},{name:"userMenu"}]};const vN=[e=>({components:{AppProvider:Vs,story:e},template:"<AppProvider><story /></AppProvider>"})],xN={viewMode:"docs",docs:{transformSource:e=>{const o=/<template>(.*)<\/template>/g;return`${e.replace(o,"$1")}`},source:{state:"open"}},controls:{matchers:{color:/(background|color|backgroundColor)$/i,date:/Date$/},sort:"alpha"},options:{showPanel:!0,storySort:{order:["Get Started","Polaris Icons","FAQs","Components",["Actions","Structure","Forms","Images and icons","Feedback indicators","Titles and text","Behavior","Lists and tables","Navigation","Overlays"]]}}};var TN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:vN,parameters:xN});const SN={},CN="wrapper";function Np(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(CN,N(g(g({},SN),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h1",null,"FAQs"),t("hr",null),t("br",null),t("h4",null,t("strong",{parentName:"h4"},"Issue: Missing declaration types")),t("p",null,"At this moment, you should add the property ",t("inlineCode",{parentName:"p"},"skipLibCheck: true")," to ",t("strong",{parentName:"p"},"tsconfig.json"),` file.
This will skip the check for missing declaration types.
We will try to fix this issue in the future.`))}Np.isMDXComponent=!0;const Bp=()=>{throw new Error("Docs-only story")};Bp.parameters={docsOnly:!0};const wa={title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},AN={};wa.parameters=wa.parameters||{};wa.parameters.docs=N(g({},wa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:AN,mdxComponentAnnotations:wa},t(Np,null))});var kN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Bp,default:wa});const LN={},wN="wrapper";function Ip(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(wN,N(g(g({},LN),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("img",{src:"https://github.com/qikify/polaris-vue/blob/master/public/images/banner.jpg?raw=true",alt:"Shopify Polaris Vue",width:"1000",height:"376"}),t("br",null),t("br",null),t("h1",null,"Get Started"),t("br",null),t("p",null,"Polaris Vue by Qikify is a component library for ",t("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," based on ",t("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris style guide"),". We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library)."),t("p",null,"Polaris Vue by qikify only supports ",t("strong",{parentName:"p"},"Vue 3.0+"),"."),t("p",null,t("strong",{parentName:"p"},"Follow Polaris React version:")," ",t("a",{parentName:"p",href:"https://github.com/Shopify/polaris/releases/tag/v9.4.0"},"9.4.0")," - Migrated date: ",t("em",{parentName:"p"},"Apr 9th, 2022"),"."),t("br",null),t("br",null),t("h2",null,"Installation"),t("p",null,"Using NPM"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`npm install @qikify/polaris-vue
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
`)),t("br",null),t("h2",null,"Issues & Contributions"),t("p",null,"Polaris Vue by qikify is an open source project and we are very happy to accept community contributions."),t("p",null,"If you notice any bugs, please create issues under ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/issues"},"Issues"),"."),t("br",null),t("br",null),t("h2",null,"License"),t("p",null,"Code released under the  ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/LICENSE"},"MIT License"),"."),t("p",null,"Copyright (c) 2021 Qikify"))}Ip.isMDXComponent=!0;const Dp=()=>{throw new Error("Docs-only story")};Dp.parameters={docsOnly:!0};const _a={title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},_N={};_a.parameters=_a.parameters||{};_a.parameters.docs=N(g({},_a.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:_N,mdxComponentAnnotations:_a},t(Ip,null))});var MN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Dp,default:_a});const PN={},NN="wrapper";function $p(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(NN,N(g(g({},PN),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h1",null,"Polaris Icons"),t("p",null,"You can use all icons from ",t("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"Shopify Polaris Icons")," Library or any SVG files."),t("p",null,t("inlineCode",{parentName:"p"},"vite-svg-loader")," & ",t("inlineCode",{parentName:"p"},"polaris-icons")," are already included in Polaris Vue package."),t("p",null,"So you don't have to install any additional packages."),t("br",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Setup:")),t("p",null,"You have to use ",t("inlineCode",{parentName:"p"},"vite-svg-loader")," in your project. See ",t("a",{parentName:"p",href:"?path=/docs/components-images-and-icons-icon"},"Icon Component")," for more details."),t("p",null,"Config in ",t("inlineCode",{parentName:"p"},"vite.config.ts")," if you are using ",t("inlineCode",{parentName:"p"},"vite")," to compile your project:"),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// vite.config.js
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
`)))}$p.isMDXComponent=!0;const Fp=()=>{throw new Error("Docs-only story")};Fp.parameters={docsOnly:!0};const Ma={title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},BN={};Ma.parameters=Ma.parameters||{};Ma.parameters.docs=N(g({},Ma.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:BN,mdxComponentAnnotations:Ma},t($p,null))});var IN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Fp,default:Ma}),cu=Object.freeze,DN=Object.defineProperty,Ep=(e,o)=>cu(DN(e,"raw",{value:cu(o||e.slice())})),uu,du;const li=e=>({components:{ActionList:Ze},setup(){return{args:e}},template:`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>`}),zo=(e,{argTypes:o})=>({components:{ActionList:Ze,Button:ye,Popover:tt,Icon:le},data(){return{active:!1,iconTickSmallMinor:Cr,iconChevronRightMinor:or,inAPopoverItems:[{content:"Import file",onAction:this.handleImportedAction},{content:"Export file",onAction:this.handleExportedAction}],iconsOrImagesItems:[{content:"Import file",image:"https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"},{content:"Export file",icon:_s}],iconAndSuffixItems:[{active:!0,content:"Import file",icon:nr,suffixId:"import"},{content:"Export file",icon:_s}],suffixAndPrefixItems:[{content:"Go here",prefixId:"here",suffixId:"here"},{content:"Or there",suffixId:"there"}]}},methods:{toggle(){this.active=!this.active},handleImportedAction(){alert("Imported!")},handleExportedAction(){alert("Exported!")}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center'}">
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
  </div>`});zo.storyName="Items";zo.parameters={docs:{source:{code:M(uu||(uu=Ep([`
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
        `])))}}};const Wo=(e,{argTypes:o})=>({components:{ActionList:Ze,Button:ye,Popover:tt,Icon:le},data(){return{sections:[{title:"File options",items:[{content:"Import file",icon:nr},{content:"Export file",icon:_s}]},{title:"Bulk actions",items:[{content:"Edit",icon:gg},{content:"Delete",icon:Dc}]}],destructiveItemSections:[{title:"File options",items:[{active:!0,content:"Import file",icon:nr},{content:"Export file",icon:_s},{destructive:!0,content:"Delete file",icon:Dc}]}],helpTextSections:[{items:[{content:"Blog posts",helpText:"Manage your blog articles"},{content:"Blogs",helpText:"Manage blogs published to your Online Store"}]}]}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '120px', justifyContent: 'center'}">
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
  </div>`});Wo.storyName="Sections";Wo.parameters={docs:{source:{code:M(du||(du=Ep([`
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
        `])))}}};const $N={Template:li,itemExamples:zo,sectionExamples:Wo},FN="wrapper";function Op(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(FN,N(g(g({},$N),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Actions / Action List",component:Ze,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"ActionList"),t("p",null,"Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let merchants select from a list of options."),t("p",null,"For Icon usages, use the ",t("a",{parentName:"p",href:"/docs/components-images-and-icons-icon--icon"},"Icon component.")),t("br",null),t("br",null),t("h3",null,"Items"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:zo,height:"250px",inline:!1,name:"_itemExamples_",mdxType:"Story"})),t("h3",null,"Sections"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:Wo,height:"300px",inline:!1,name:"_sectionExamples_",mdxType:"Story"})),t("h3",null,"ActionList"),t(R,{mdxType:"Canvas"},t(V,{name:"Action List",height:"40px",args:{default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}},parameters:{docs:{source:{code:M`
            <ActionList v-bind="props"></ActionList>
          `}}},mdxType:"Story"},li.bind({}))),t(se,{story:"Action List",mdxType:"ArgsTable"}))}Op.isMDXComponent=!0;const EN=zo,ON=Wo,ri=li.bind({});ri.storyName="Action List";ri.args={default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}};ri.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <ActionList v-bind="props"></ActionList>
          `}}};const Pa={title:"Components / Actions / Action List",component:Ze,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_itemExamples_","_sectionExamples_","actionList"]},qN={_itemExamples_:"_itemExamples_",_sectionExamples_:"_sectionExamples_","Action List":"actionList"};Pa.parameters=Pa.parameters||{};Pa.parameters.docs=N(g({},Pa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:qN,mdxComponentAnnotations:Pa},t(Op,null))});var RN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:li,itemExamples:zo,sectionExamples:Wo,_itemExamples_:EN,_sectionExamples_:ON,actionList:ri,default:Pa});const VN={},HN="wrapper";function qp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(HN,N(g(g({},VN),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Structure / App Provider",component:Vs,mdxType:"Meta"}),t("h1",null,"AppProvider"),t("p",null,"App provider is a required component that enables sharing global settings throughout the hierarchy of your application."),t("br",null),t("h2",null,"Best practices"),t("p",null,"The AppProvider component is ",t("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  <div>
  </div>
</AppProvider>
</template>

<script><\/script>
`)))}qp.isMDXComponent=!0;const Rp=()=>{throw new Error("Docs-only story")};Rp.parameters={docsOnly:!0};const Na={title:"Components / Structure / App Provider",component:Vs,includeStories:["__page"]},UN={};Na.parameters=Na.parameters||{};Na.parameters.docs=N(g({},Na.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:UN,mdxComponentAnnotations:Na},t(qp,null))});var jN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Rp,default:Na});const ci=(e,{argTypes:o})=>({components:{Avatar:fn},setup(){return{args:e}},template:'<Avatar v-bind="args"/>'}),zN={Template:ci},WN="wrapper";function Vp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(WN,N(g(g({},zN),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Images and Icons / Avatar",component:fn,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Avatar"),t("p",null,"Avatars are used to show a thumbnail representation of an individual or business in the interface."),t(R,{mdxType:"Canvas"},t(V,{name:"Avatar",height:"60px",parameters:{docs:{source:{code:M`
            <Avatar v-bind="props"/>
          `}}},mdxType:"Story"},ci.bind({}))),t(se,{story:"Avatar",mdxType:"ArgsTable"}))}Vp.isMDXComponent=!0;const Ur=ci.bind({});Ur.storyName="Avatar";Ur.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <Avatar v-bind="props"/>
          `}}};const Ba={title:"Components / Images and Icons / Avatar",component:fn,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["avatar"]},GN={Avatar:"avatar"};Ba.parameters=Ba.parameters||{};Ba.parameters.docs=N(g({},Ba.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:GN,mdxComponentAnnotations:Ba},t(Vp,null))});var XN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ci,avatar:Ur,default:Ba});const ui=e=>({components:{Badge:at},setup(){return{args:e}},template:'<Badge v-bind="args">Fulfilled</Badge>'}),Go=(e,{argTypes:o})=>({components:{Badge:at},template:M`<div>
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
  </div>`});Go.storyName="Variants";Go.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const KN={Template:ui,Variants:Go},YN="wrapper";function Hp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(YN,N(g(g({},KN),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Images and icons / Badge",component:at,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Badge"),t("p",null,"Badges are used to inform merchants of the status of an object or of an action that's been taken."),t(R,{mdxType:"Canvas"},t(V,{story:Go,height:"65px",name:"_Variants_",mdxType:"Story"})),t(R,{mdxType:"Canvas"},t(V,{name:"Badge",height:"30px",parameters:{docs:{source:{code:M`
          `}}},mdxType:"Story"},ui.bind({}))),t(se,{story:"Badge",mdxType:"ArgsTable"}))}Hp.isMDXComponent=!0;const ZN=Go,jr=ui.bind({});jr.storyName="Badge";jr.parameters={storySource:{source:`args => ({
  components: {
    Badge
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Badge v-bind="args">Fulfilled</Badge>\`
})`},docs:{source:{code:M`
          `}}};const Ia={title:"Components / Images and icons / Badge",component:at,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Variants_","badge"]},QN={_Variants_:"_Variants_",Badge:"badge"};Ia.parameters=Ia.parameters||{};Ia.parameters.docs=N(g({},Ia.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:QN,mdxComponentAnnotations:Ia},t(Hp,null))});var JN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ui,Variants:Go,_Variants_:ZN,badge:jr,default:Ia}),pu=Object.freeze,eB=Object.defineProperty,zr=(e,o)=>pu(eB(e,"raw",{value:pu(o||e.slice())})),mu,yu,gu;const di=(e,{argTypes:o})=>({components:{Button:ye},setup(){return{args:e}},template:'<Button v-bind="args">Add Product</Button>'}),Xo=(e,{argTypes:o})=>({components:{Button:ye},template:` <div style="margin: 0 auto; width: 97%">
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
  </div>`});Xo.storyName="Variants";Xo.parameters={docs:{source:{code:M`
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
        `}}};const Ko=(e,{argTypes:o})=>({components:{Button:ye},data(){return{expanded:!1}},computed:{disclosure(){return this.expanded?"up":"down"},disclosureText(){return this.expanded?"Show less":"Show more"}},template:`<div>
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
  </div>`});Ko.storyName="Disclosure";Ko.parameters={docs:{source:{code:M(mu||(mu=zr([`
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
        `])))}}};const Yo=(e,{argTypes:o})=>({components:{Button:ye},data(){return{connectedDisclosure:{accessibilityLabel:"Other save actions",actions:[{content:"Save as draft"}]}}},template:'<Button :connectedDisclosure="connectedDisclosure" :primary="true"> Save </Button>'});Yo.storyName="Split Button";Yo.parameters={docs:{source:{code:M(yu||(yu=zr([`
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
        `])))}}};const Zo=(e,{argTypes:o})=>({components:{ButtonGroup:ot,Button:ye},data(){return{isFirstButtonActive:!0}},methods:{handleFirstButtonActive(){this.isFirstButtonActive||(this.isFirstButtonActive=!0)},handleSecondButtonActive(){!this.isFirstButtonActive||(this.isFirstButtonActive=!1)}},template:`<ButtonGroup :segmented="true">
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
  </ButtonGroup>`});Zo.storyName="Pressed Button";Zo.parameters={docs:{source:{code:M(gu||(gu=zr([`
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
        `])))}}};const tB={Template:di,Variants:Xo,Disclosure:Ko,SplitButton:Yo,PressedButton:Zo},aB="wrapper";function Up(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(aB,N(g(g({},tB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Actions / Button",component:ye,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Button"),t("p",null,"Buttons are used primarily for actions, such as \u201CAdd\u201D, \u201CClose\u201D, \u201CCancel\u201D, or \u201CSave\u201D. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as \u201Cview shipping settings\u201D."),t("p",null,"For navigational actions that appear within or directly following a sentence, use the ",t("a",{parentName:"p",href:"/docs/components-navigation-link--link"},"link component.")),t("p",null,"For connectedDisclosure actions, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--actionlist"},"ActionList component.")),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"button")," element in html."),t("br",null),t("br",null),t("h3",null,"Button Variants"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:Xo,height:"280px",name:"_Variants_",mdxType:"Story"})),t("h3",null,"Pressed Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:Zo,height:"60px",name:"_PressedButton_",mdxType:"Story"})),t("h3",null,"Disclosure Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:Ko,height:"140px",name:"_Disclosure_",mdxType:"Story"})),t("h3",null,"Split Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:Yo,height:"120px",inline:!1,name:"_SplitButton_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(V,{name:"Button",height:"40px",parameters:{docs:{source:{code:M`
            <Button>Add Product</Button>
          `}}},mdxType:"Story"},di.bind({}))),t(se,{story:"Button",mdxType:"ArgsTable"}))}Up.isMDXComponent=!0;const oB=Xo,nB=Zo,sB=Ko,iB=Yo,Wr=di.bind({});Wr.storyName="Button";Wr.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <Button>Add Product</Button>
          `}}};const Da={title:"Components / Actions / Button",component:ye,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_Variants_","_PressedButton_","_Disclosure_","_SplitButton_","button"]},lB={_Variants_:"_Variants_",_PressedButton_:"_PressedButton_",_Disclosure_:"_Disclosure_",_SplitButton_:"_SplitButton_",Button:"button"};Da.parameters=Da.parameters||{};Da.parameters.docs=N(g({},Da.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:lB,mdxComponentAnnotations:Da},t(Up,null))});var rB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:di,Variants:Xo,Disclosure:Ko,SplitButton:Yo,PressedButton:Zo,_Variants_:oB,_PressedButton_:nB,_Disclosure_:sB,_SplitButton_:iB,button:Wr,default:Da});const pi=(e,{argTypes:o})=>({components:{ButtonGroup:ot,Button:ye},setup(){return{args:e}},template:`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>`}),Qo=(e,{argTypes:o})=>({components:{ButtonGroup:ot,Button:ye},template:`<ButtonGroup segmented>
    <Button> Bold </Button>
    <Button> Italic </Button>
    <Button> Underline </Button>
  </ButtonGroup>`});Qo.storyName="With segmented buttons";Qo.parameters={docs:{source:{code:M`
        <ButtonGroup segmented>
          <Button> Bold </Button>
          <Button> Italic </Button>
          <Button> Underline </Button>
        </ButtonGroup>
      `}}};const cB={Template:pi,SegmentedButtons:Qo},uB="wrapper";function jp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(uB,N(g(g({},cB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Actions / Button Group",component:ot,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"ButtonGroup"),t("p",null,"Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing."),t("br",null),t("h3",null,"With segmented buttons"),t(R,{mdxType:"Canvas"},t(V,{story:Qo,height:"65px",name:"_SegmentedButtons_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(V,{name:"Button Group",height:"60px",parameters:{docs:{source:{code:M`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}},mdxType:"Story"},pi.bind({}))),t(se,{story:"Button Group",mdxType:"ArgsTable"}))}jp.isMDXComponent=!0;const dB=Qo,Gr=pi.bind({});Gr.storyName="Button Group";Gr.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}};const $a={title:"Components / Actions / Button Group",component:ot,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SegmentedButtons_","buttonGroup"]},pB={_SegmentedButtons_:"_SegmentedButtons_","Button Group":"buttonGroup"};$a.parameters=$a.parameters||{};$a.parameters.docs=N(g({},$a.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:pB,mdxComponentAnnotations:$a},t(jp,null))});var mB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:pi,SegmentedButtons:Qo,_SegmentedButtons_:dB,buttonGroup:Gr,default:$a});const mi=e=>({components:{List:Uo,ListItem:ti,Caption:ea},setup(){return{args:e}},template:`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>`}),yB={Template:mi},gB="wrapper";function zp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(gB,N(g(g({},yB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Titles and text  / Caption",component:ea,mdxType:"Meta"}),t("h1",null,"Caption"),t("p",null,`Caption text size is smaller than the recommended size for general reading.
On web, it should be used only in a graph or as a timestamp for a list item.
On Android and iOS, it can also be used as help text or as other kinds of secondary text for list items.`),t(R,{mdxType:"Canvas"},t(V,{name:"Caption",height:"100px",parameters:{docs:{source:{code:M`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}},mdxType:"Story"},mi.bind({}))))}zp.isMDXComponent=!0;const Xr=mi.bind({});Xr.storyName="Caption";Xr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}};const Fa={title:"Components / Titles and text  / Caption",component:ea,includeStories:["caption"]},hB={Caption:"caption"};Fa.parameters=Fa.parameters||{};Fa.parameters.docs=N(g({},Fa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:hB,mdxComponentAnnotations:Fa},t(zp,null))});var bB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:mi,caption:Xr,default:Fa});const yi=e=>({components:{Card:rt},setup(){return{args:e}},template:`
    <Card sectioned :actions="[{content: 'Add variant'}]">
      <template #title>Variants</template>
      <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
    </Card>
  `}),gi=e=>({components:{Card:rt,CardSection:js,CardHeader:Us,CardSubsection:qd,Icon:le,Subheading:aa,Popover:tt,Button:ye,ActionList:Ze,Stack:Re,Subheading:aa,List:Uo,ListItem:ti},setup(){const o=C(!1);return{args:e,OrdersMinor:bd,addAccountActive:o,toggleClick:()=>{console.log("clicked")},toggleAccountActive:()=>{o.value=!o.value}}},template:`
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
  `}),hi=e=>({components:{Card:rt,CardHeader:Us,Stack:Re,ButtonGroup:ot,Button:ye,CardSection:js,ActionList:Ze,Popover:tt},setup(){const o=C(!1);return{args:e,addAccountActive:o}},template:`
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
  `}),fB={TemplateSimple:yi,TemplateFull:gi,Template:hi},vB="wrapper";function Wp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(vB,N(g(g({},fB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Structure / Card",component:rt,argTypes:{title:{description:"Title content for the card",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Card"),t("p",null,"Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done."),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Simple Card")),t(R,{mdxType:"Canvas"},t(V,{name:"Card - Simple",height:"150px",parameters:{docs:{source:{state:"close",code:M`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}},mdxType:"Story"},yi.bind({}))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Card with all of its elements")),t(R,{mdxType:"Canvas"},t(V,{name:"Card - Full",height:"700px",inline:!1,parameters:{docs:{source:{state:"close",code:M`
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
          `}}},mdxType:"Story"},gi.bind({}))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Example")),t(R,{mdxType:"Canvas"},t(V,{name:"Card",height:"360px",inline:!1,parameters:{docs:{source:{state:"close",code:M`
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
            </Card>`}}},mdxType:"Story"},hi.bind({}))),t(se,{story:"Card",mdxType:"ArgsTable"}))}Wp.isMDXComponent=!0;const Kr=yi.bind({});Kr.storyName="Card - Simple";Kr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}};const Yr=gi.bind({});Yr.storyName="Card - Full";Yr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
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
          `}}};const Zr=hi.bind({});Zr.storyName="Card";Zr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
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
            </Card>`}}};const Ea={title:"Components / Structure / Card",component:rt,argTypes:{title:{description:"Title content for the card",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["cardSimple","cardFull","card"]},xB={"Card - Simple":"cardSimple","Card - Full":"cardFull",Card:"card"};Ea.parameters=Ea.parameters||{};Ea.parameters.docs=N(g({},Ea.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:xB,mdxComponentAnnotations:Ea},t(Wp,null))});var TB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",TemplateSimple:yi,TemplateFull:gi,Template:hi,cardSimple:Kr,cardFull:Yr,card:Zr,default:Ea});const $n=e=>({components:{Checkbox:fa},setup(){return{args:e}},template:`
  <div>
    <Checkbox v-bind="args" v-model="isChecked">
      <template #label>Checkbox label</template>
      <template #help-text>Basic help text</template>
    </Checkbox>
    <p style="margin-top: 30px">Checked: {{ isChecked }} </p>
  </div>`,data(){return{isChecked:!1}}});$n.parameters={docs:{source:{code:M`
        <div>
          <Checkbox v-model="isChecked">
            <template #label>Checkbox label</template>
            <template #help-text>Basic help text</template>
          </Checkbox>
          <p>Checked: {{ isChecked }} </p>
        </div>
      `}}};const SB={Template:$n},CB="wrapper";function Gp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(CB,N(g(g({},SB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Checkbox",component:fa,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Checkbox"),t("p",null,`Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
They may also be used as a way to have merchants indicate they agree to specific terms and services.`),t(R,{mdxType:"Canvas"},t(V,{story:$n,name:"Checkbox",mdxType:"Story"})),t(se,{story:"Checkbox",mdxType:"ArgsTable"}))}Gp.isMDXComponent=!0;const Xp=$n;Xp.storyName="Checkbox";const Oa={title:"Components / Forms / Checkbox",component:fa,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Template_"]},AB={Checkbox:"_Template_"};Oa.parameters=Oa.parameters||{};Oa.parameters.docs=N(g({},Oa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:AB,mdxComponentAnnotations:Oa},t(Gp,null))});var kB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:$n,_Template_:Xp,default:Oa});const Fn=e=>({components:{ChoiceList:Mt},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Fn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const En=e=>({components:{ChoiceList:Mt},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});En.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const On=e=>({components:{ChoiceList:Mt},template:`
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
  `,data(){return{value:["shipping"],choices:[{label:"Use the shipping address as the billing address by default",helpText:"Reduces the number of fields required to check out. The billing address can still be edited.",value:"shipping"},{label:"Require a confirmation step",helpText:"Customers must review their order details before purchasing.",value:"confirmation"}]}}});On.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const qn=(e,{argTypes:o})=>({components:{ChoiceList:Mt},template:`
  <div>
    <ChoiceList
      name="singleChild"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:"<p>This is child content of Minimum quantity option</p>"}]}}});qn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const Rn=(e,{argTypes:o})=>({components:{ChoiceList:Mt},template:`
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
  `,data(){return{selected:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:""}]}},methods:{handleChange(){this.choices[2].renderChildren=this.selected==="minimum_quantity"?"<p>This is child content of Minimum quantity option</p>":""}}});Rn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const Vn=e=>({components:{ChoiceList:Mt},setup(){return{args:e}},template:`
  <ChoiceList
    v-bind="args"
    v-model="selected"
    :choices="options"
  >
    Example choice list
  </ChoiceList>
  `,data(){return{selected:"hidden",options:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Vn.parameters={docs:{source:{code:M`
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
      `}}};const LB={singleChoiceList:Fn,errorSingleChoiceList:En,multiChoiceList:On,renderChildChoiceList:qn,renderChildWithConditional:Rn,Example:Vn},wB="wrapper";function Kp(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(wB,N(g(g({},LB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Choice List",component:Mt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Choice list"),t("p",null,`A choice list lets you create a list of grouped radio buttons or checkboxes.
Use this component if you need to group together a related list of interactive choices.`),t("br",null),t("br",null),t("h3",null,"Single choice list"),t("p",null,"Allows merchants to select one option from a list."),t("ul",null,t("li",{parentName:"ul"},"Make sure all options are an either/or choice.")),t(R,{mdxType:"Canvas"},t(V,{story:Fn,name:"Single choice list",mdxType:"Story"})),t("h3",null,"Single choice list with error"),t("p",null,"Allows for accessible error handling by connecting the error message to the field with the error."),t(R,{mdxType:"Canvas"},t(V,{story:En,name:"Single choice list with error",mdxType:"Story"})),t("h3",null,"Multi-choice list"),t("p",null,"Allows merchants to select multiple options from a list."),t("ul",null,t("li",{parentName:"ul"},"Avoid options that are an either/or choice.")),t(R,{mdxType:"Canvas"},t(V,{story:On,name:"Multi-choice list",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (always rendered)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content will always be rendered. Works for both single-choice and multi-choice list.`),t(R,{mdxType:"Canvas"},t(V,{story:qn,name:"Single-choice or multi-choice list with children content (always rendered)",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (rendered only when selected)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list.`),t(R,{mdxType:"Canvas"},t(V,{story:Rn,name:"Single-choice or multi-choice list with children content (rendered only when selected)",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(V,{story:Vn,name:"Example",height:"160px",mdxType:"Story"})),t(se,{story:"Example",mdxType:"ArgsTable"}))}Kp.isMDXComponent=!0;const Yp=Fn;Yp.storyName="Single choice list";const Zp=En;Zp.storyName="Single choice list with error";const Qp=On;Qp.storyName="Multi-choice list";const Jp=qn;Jp.storyName="Single-choice or multi-choice list with children content (always rendered)";const em=Rn;em.storyName="Single-choice or multi-choice list with children content (rendered only when selected)";const tm=Vn;tm.storyName="Example";const qa={title:"Components / Forms / Choice List",component:Mt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_singleChoiceList_","_errorSingleChoiceList_","_multiChoiceList_","_renderChildChoiceList_","_renderChildWithConditional_","_Example_"]},_B={"Single choice list":"_singleChoiceList_","Single choice list with error":"_errorSingleChoiceList_","Multi-choice list":"_multiChoiceList_","Single-choice or multi-choice list with children content (always rendered)":"_renderChildChoiceList_","Single-choice or multi-choice list with children content (rendered only when selected)":"_renderChildWithConditional_",Example:"_Example_"};qa.parameters=qa.parameters||{};qa.parameters.docs=N(g({},qa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:_B,mdxComponentAnnotations:qa},t(Kp,null))});var MB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",singleChoiceList:Fn,errorSingleChoiceList:En,multiChoiceList:On,renderChildChoiceList:qn,renderChildWithConditional:Rn,Example:Vn,_singleChoiceList_:Yp,_errorSingleChoiceList_:Zp,_multiChoiceList_:Qp,_renderChildChoiceList_:Jp,_renderChildWithConditional_:em,_Example_:tm,default:qa}),hu=Object.freeze,PB=Object.defineProperty,am=(e,o)=>hu(PB(e,"raw",{value:hu(o||e.slice())})),bu,fu;const bi=e=>({components:{Card:rt,Collapsible:qo,Stack:Re,Button:ye,TextContainer:At,Link:Ho},setup(){const o=C(!0);return{args:e,open:o,handleToggle:()=>{o.value=!o.value}}},template:`
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
  `}),NB={Template:bi},BB="wrapper";function om(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(BB,N(g(g({},NB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Behavior / Collapsible",component:qo,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},mdxType:"Meta"}),t("h1",null,"Collapsible"),t("p",null,"The collapsible component is used to put long sections of information under a block that merchants can expand or collapse."),t(R,{mdxType:"Canvas"},t(V,{name:"Collapsible",height:"200px",parameters:{docs:{source:{state:"close",code:M(bu||(bu=am([`
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
          `])))}}},mdxType:"Story"},bi.bind({}))),t(se,{story:"Collapsible",mdxType:"ArgsTable"}))}om.isMDXComponent=!0;const Qr=bi.bind({});Qr.storyName="Collapsible";Qr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M(fu||(fu=am([`
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
          `])))}}};const Ra={title:"Components / Behavior / Collapsible",component:qo,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},includeStories:["collapsible"]},IB={Collapsible:"collapsible"};Ra.parameters=Ra.parameters||{};Ra.parameters.docs=N(g({},Ra.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:IB,mdxComponentAnnotations:Ra},t(om,null))});var DB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:bi,collapsible:Qr,default:Ra});const fi=e=>({components:{ColorPicker:Ws},setup(){return{color:C("#000000"),args:e}},template:M`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>`}),$B={Template:fi},FB="wrapper";function nm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(FB,N(g(g({},$B),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Color Picker",component:Ws,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Color picker"),t("p",null,`The color picker is used to let merchants select a color visually.
For example, merchants use the color picker to customize the accent color of the email templates for their shop.`),t(R,{mdxType:"Canvas"},t(V,{name:"Color Picker",height:"210px",parameters:{docs:{source:{code:M`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}},mdxType:"Story"},fi.bind({}))),t(se,{story:"Color Picker",mdxType:"ArgsTable"}))}nm.isMDXComponent=!0;const Jr=fi.bind({});Jr.storyName="Color Picker";Jr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}};const Va={title:"Components / Forms / Color Picker",component:Ws,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},includeStories:["colorPicker"]},EB={"Color Picker":"colorPicker"};Va.parameters=Va.parameters||{};Va.parameters.docs=N(g({},Va.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:EB,mdxComponentAnnotations:Va},t(nm,null))});var OB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:fi,colorPicker:Jr,default:Va});const Hn=e=>({components:{Combobox:va,Listbox:ft,ListboxOption:kt,ComboboxTextField:Tn,Icon:le},template:`
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
  </Combobox>`,data(){return{searchIcon:bn,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,n){return this.searchValue?this.searchValue===o.value:n===0}}});Hn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const Un=e=>({components:{Combobox:va,Listbox:ft,ListboxOption:kt,ComboboxTextField:Tn,Icon:le,TextContainer:At,Tag:Bn,Stack:Re},template:`
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
  `,data(){return{searchIcon:bn,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:"",selectedOptions:["rustic","antique"]}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.selectedOptions.includes(o)?this.selectedOptions=this.selectedOptions.filter(n=>n!==o):this.selectedOptions.push(o)},handleRemoveTag(o){this.selectedOptions=this.selectedOptions.filter(n=>n!==o)}}});Un.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const jn=e=>({components:{Combobox:va,Listbox:ft,ListboxOption:kt,ComboboxTextField:Tn,Icon:le,ListboxLoading:An},template:`
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
  `,data(){return{searchIcon:bn,searchValue:""}}});jn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const zn=e=>({components:{Combobox:va,Listbox:ft,ListboxOption:kt,ComboboxTextField:Tn,Icon:le},template:`
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
  </Combobox>`,data(){return{searchIcon:bn,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,n){return this.searchValue?this.searchValue===o.value:n===0}}});zn.parameters={docs:{source:{code:M`
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
      `}}};const qB={BasicAutocomplete:Hn,MultiTagAutocomplete:Un,LoadingAutoComplete:jn,ExampleAutoComplete:zn},RB="wrapper";function sm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(RB,N(g(g({},qB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Combobox",component:va,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Combobox"),t("p",null,"The Combobox component implements part of the ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"},"Aria 1.2 combobox"),` specs on a TextField and a popover containing a Listbox.
Like Autocomplete, Combobox allows merchants to quickly search through and select from large collections of options.`),t("br",null),t("br",null),t("h3",null,"Basic autocomplete"),t("p",null,"Use to help merchants complete text input quickly from a list of options."),t(R,{mdxType:"Canvas"},t(V,{story:Hn,name:"Basic Autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Multiple tags autocomplete"),t("p",null,"Use to help merchants select multiple options from a list curated by the text input."),t(R,{mdxType:"Canvas"},t(V,{story:Un,name:"Multiple tags autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Autocomplete with loading"),t("p",null,"Use to indicate loading state to merchants while option data is processing."),t(R,{mdxType:"Canvas"},t(V,{story:jn,name:"Autocomplete with loading",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Example"),t("font",{color:"red"}," Can not test props on this component due to inline Story. Try it on your own project. "),t(R,{mdxType:"Canvas"},t(V,{story:zn,name:"Example",height:"180px",inline:!1,mdxType:"Story"})),t(se,{story:"Example",mdxType:"ArgsTable"}))}sm.isMDXComponent=!0;const im=Hn;im.storyName="Basic Autocomplete";const lm=Un;lm.storyName="Multiple tags autocomplete";const rm=jn;rm.storyName="Autocomplete with loading";const cm=zn;cm.storyName="Example";const Ha={title:"Components / Forms / Combobox",component:va,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_BasicAutocomplete_","_MultiTagAutocomplete_","_LoadingAutoComplete_","_ExampleAutoComplete_"]},VB={"Basic Autocomplete":"_BasicAutocomplete_","Multiple tags autocomplete":"_MultiTagAutocomplete_","Autocomplete with loading":"_LoadingAutoComplete_",Example:"_ExampleAutoComplete_"};Ha.parameters=Ha.parameters||{};Ha.parameters.docs=N(g({},Ha.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:VB,mdxComponentAnnotations:Ha},t(sm,null))});var HB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicAutocomplete:Hn,MultiTagAutocomplete:Un,LoadingAutoComplete:jn,ExampleAutoComplete:zn,_BasicAutocomplete_:im,_MultiTagAutocomplete_:lm,_LoadingAutoComplete_:rm,_ExampleAutoComplete_:cm,default:Ha});const vi=e=>({components:{Frame:jt,ContextualSaveBar:Sn,Button:ye},setup(){return{discardHandle:()=>{console.log("nothing saved")},saveForm:()=>{alert("Saved")},CancelSmallMinor:hd}},template:`
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
  `}),UB={Template:vi},jB="wrapper";function um(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(jB,N(g(g({},UB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Contextual save bar",component:Sn,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Contextual save bar"),t("p",null,"The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work."),t(R,{mdxType:"Canvas"},t(V,{name:"Contextual save bar",inline:!1,height:"300px",parameters:{docs:{source:{code:M`
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
          `}}},mdxType:"Story"},vi.bind({}))),t(se,{story:"Contextual save bar",mdxType:"ArgsTable"}))}um.isMDXComponent=!0;const ec=vi.bind({});ec.storyName="Contextual save bar";ec.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
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
          `}}};const Ua={title:"Components / Forms / Contextual save bar",component:Sn,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},includeStories:["contextualSaveBar"]},zB={"Contextual save bar":"contextualSaveBar"};Ua.parameters=Ua.parameters||{};Ua.parameters.docs=N(g({},Ua.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:zB,mdxComponentAnnotations:Ua},t(um,null))});var WB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:vi,contextualSaveBar:ec,default:Ua});const xi=e=>({components:{DatePicker:Xs},setup(){const o=C(e.selectedDate),n=As({month:e.month,year:e.year});return{args:e,selectedDate:o,pickerView:n,handleChange:r=>{console.log(r)},handleMonthChange:({month:r,year:u})=>{n.month=r,n.year=u}}},template:M`<div>
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
  </div>`}),GB={Template:xi},XB="wrapper";function dm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(XB,N(g(g({},GB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Date Picker",component:Xs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},mdxType:"Meta"}),t("h1",null,"Date picker"),t("p",null,"Date pickers let merchants choose dates from a visual calendar that's consistently applied wherever dates need to be selected across Shopify."),t(R,{mdxType:"Canvas"},t(V,{name:"Date Picker",height:"320px",args:{selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0},parameters:{docs:{source:{code:M`
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
          `}}},mdxType:"Story"},xi.bind({}))),t(se,{story:"Date Picker",mdxType:"ArgsTable"}))}dm.isMDXComponent=!0;const Ti=xi.bind({});Ti.storyName="Date Picker";Ti.args={selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0};Ti.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
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
          `}}};const ja={title:"Components / Forms / Date Picker",component:Xs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},includeStories:["datePicker"]},KB={"Date Picker":"datePicker"};ja.parameters=ja.parameters||{};ja.parameters.docs=N(g({},ja.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:KB,mdxComponentAnnotations:ja},t(dm,null))});var YB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:xi,datePicker:Ti,default:ja});const Si=e=>({components:{DescriptionList:Ks,Dt:Xd,Dd:Kd},setup(){return{args:e}},template:`<DescriptionList v-bind="args">
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
  </DescriptionList>`}),ZB={Template:Si},QB="wrapper";function pm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(QB,N(g(g({},ZB),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Lists and tables  / Description List",component:Ks,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Description List"),t("p",null,`Description lists are a way to organize and explain related information.
They're particularly useful when you need to list and define terms such as in a glossary.`),t("font",{color:"#FF7900"},t("strong",null,"Warning:"))," Use component name as case-sensitive (",t("code",null,"<Dt>")," & ",t("code",null,"<Dd>"),") to prevent conflict with ",t("code",null,"<dt>")," ",t("code",null,"<dd>")," HTML element.",t(R,{mdxType:"Canvas"},t(V,{name:"Description List",height:"60px",parameters:{docs:{source:{code:M`
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
          `}}},mdxType:"Story"},Si.bind({}))),t(se,{story:"Description List",mdxType:"ArgsTable"}))}pm.isMDXComponent=!0;const tc=Si.bind({});tc.storyName="Description List";tc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
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
          `}}};const za={title:"Components / Lists and tables  / Description List",component:Ks,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["descriptionList"]},JB={"Description List":"descriptionList"};za.parameters=za.parameters||{};za.parameters.docs=N(g({},za.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:JB,mdxComponentAnnotations:za},t(pm,null))});var eI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Si,descriptionList:tc,default:za});const Ci=e=>({components:{DisplayText:Cn},setup(){return{args:e}},template:'<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>'}),tI={Template:Ci},aI="wrapper";function mm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(aI,N(g(g({},tI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Titles and text  / Display text",component:Cn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},mdxType:"Meta"}),t("h1",null,"Display Text"),t("p",null,`Display styles make a bold visual statement.
Use them to create impact when the main goal is visual storytelling.
For example, use display text to convince or reassure merchants such as in marketing content or to capture attention during onboarding.`),t(R,{mdxType:"Canvas"},t(V,{name:"Display text",height:"60px",args:{element:"p"},parameters:{docs:{source:{code:M`<DisplayText>Good evening, Dominic.</DisplayText>`}}},mdxType:"Story"},Ci.bind({}))),t(se,{story:"Display text",mdxType:"ArgsTable"}))}mm.isMDXComponent=!0;const Ai=Ci.bind({});Ai.storyName="Display text";Ai.args={element:"p"};Ai.parameters={storySource:{source:`args => ({
  components: {
    DisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>\`
})`},docs:{source:{code:M`<DisplayText>Good evening, Dominic.</DisplayText>`}}};const Wa={title:"Components / Titles and text  / Display text",component:Cn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},includeStories:["displayText"]},oI={"Display text":"displayText"};Wa.parameters=Wa.parameters||{};Wa.parameters.docs=N(g({},Wa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:oI,mdxComponentAnnotations:Wa},t(mm,null))});var nI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ci,displayText:Ai,default:Wa}),vu=Object.freeze,sI=Object.defineProperty,ym=(e,o)=>vu(sI(e,"raw",{value:vu(o||e.slice())})),xu,Tu;const ki=e=>({components:{DropZone:Ys,DropZoneFileUpload:Jd,Stack:Re,Thumbnail:In,Caption:ea},setup(){const o=C([]),n=(r,u,m)=>{o.value=[...o.value,...u]},s=["image/gif","image/jpeg","image/png"];return{files:o,handleDrop:n,validImageTypes:s,thumbnailSource:r=>s.includes(r.type)?window.URL.createObjectURL(r):sr}},template:`
    <DropZone @drop="handleDrop">
      <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
      <Stack v-else>
        <Stack v-for="file, index in files" :key="index">
          <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
          <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
        </Stack>
      </Stack>
    </DropZone>
  `}),iI={Template:ki},lI="wrapper";function gm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(lI,N(g(g({},iI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Actions / Drop zone",component:Ys,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Drop Zone"),t("br",null),t("p",null,"The drop zone component lets users upload files by dragging and dropping the files into an area on a page, or activating a button."),t(R,{mdxType:"Canvas"},t(V,{name:"Drop zone",height:"160px",parameters:{docs:{source:{code:M(xu||(xu=ym([`
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
          `])))}}},mdxType:"Story"},ki.bind({}))),t(se,{story:"Drop zone",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"File Upload component")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actionTitle"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actionHint"),t("td",{parentName:"tr",align:null},"String")))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Action Props")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel?"),t("td",{parentName:"tr",align:null},"Boolean")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"external?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onAction?()"),t("td",{parentName:"tr",align:null},"void")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onMouseEnter?()"),t("td",{parentName:"tr",align:null},"void")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onTouchStart?()"),t("td",{parentName:"tr",align:null},"void")))))}gm.isMDXComponent=!0;const ac=ki.bind({});ac.storyName="Drop zone";ac.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(Tu||(Tu=ym([`
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
          `])))}}};const Ga={title:"Components / Actions / Drop zone",component:Ys,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},includeStories:["dropZone"]},rI={"Drop zone":"dropZone"};Ga.parameters=Ga.parameters||{};Ga.parameters.docs=N(g({},Ga.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:rI,mdxComponentAnnotations:Ga},t(gm,null))});var cI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ki,dropZone:ac,default:Ga}),Su=Object.freeze,uI=Object.defineProperty,hm=(e,o)=>Su(uI(e,"raw",{value:Su(o||e.slice())})),Cu,Au;const Li=e=>({components:{NoteMinor:sr,ExceptionList:ep,ExceptionListItem:Zs},setup(){return{args:e,NoteMinor:sr,DiscountsMajor:hg}},template:`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>`}),dI={Template:Li},pI="wrapper";function bm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(pI,N(g(g({},dI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Lists and tables / Exception List",component:Zs,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Exception List"),t("p",null,"Use exception lists to help merchants notice important, standout information that adds extra context to a task. Exception lists often consist of a title and description. Each item in the list either has a bullet or icon at the front."),t(R,{mdxType:"Canvas"},t(V,{name:"Exception List",height:"120px",parameters:{docs:{source:{code:M(Cu||(Cu=hm([`
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
          `])))}}},mdxType:"Story"},Li.bind({}))),t(se,{story:"Exception List",mdxType:"ArgsTable"}))}bm.isMDXComponent=!0;const oc=Li.bind({});oc.storyName="Exception List";oc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(Au||(Au=hm([`
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
          `])))}}};const Xa={title:"Components / Lists and tables / Exception List",component:Zs,argTypes:{default:{table:{disable:!0}}},includeStories:["exceptionList"]},mI={"Exception List":"exceptionList"};Xa.parameters=Xa.parameters||{};Xa.parameters.docs=N(g({},Xa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:mI,mdxComponentAnnotations:Xa},t(bm,null))});var yI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Li,exceptionList:oc,default:Xa});const wi=(e,{argTypes:o})=>({props:Object.keys(o),components:{FooterHelp:Qs},template:`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>`}),gI={Template:wi},hI="wrapper";function fm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(hI,N(g(g({},gI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Navigation / Footer help",component:Qs,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Footer help"),t("p",null,"Footer help is used to refer merchants to more information related to the product or feature they're using."),t(R,{mdxType:"Canvas"},t(V,{name:"Footer help",parameters:{docs:{source:{code:M`
            <FooterHelp>Footer help content</FooterHelp>
          `}}},mdxType:"Story"},wi.bind({}))),t(se,{story:"Footer help",mdxType:"ArgsTable"}))}fm.isMDXComponent=!0;const nc=wi.bind({});nc.storyName="Footer help";nc.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <FooterHelp>Footer help content</FooterHelp>
          `}}};const Ka={title:"Components / Navigation / Footer help",component:Qs,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},includeStories:["footerHelp"]},bI={"Footer help":"footerHelp"};Ka.parameters=Ka.parameters||{};Ka.parameters.docs=N(g({},Ka.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:bI,mdxComponentAnnotations:Ka},t(fm,null))});var fI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:wi,footerHelp:nc,default:Ka}),ku=Object.freeze,vI=Object.defineProperty,vm=(e,o)=>ku(vI(e,"raw",{value:ku(o||e.slice())})),Lu,wu;const _i=e=>({components:{Form:Js,FormLayout:Pt,Checkbox:fa,Button:ye,TextField:we},data(){return{checkbox:!1,textField:""}},setup(){return{args:e}},methods:{handleSubmit(o){o.preventDefault(),alert(`Form submitted - Checkbox: ${this.checkbox} - email: ${this.textField}`),this.checkbox=!1,this.textField=""}},template:`<Form @submit="handleSubmit">
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
  </Form>`}),xI={Template:_i},TI="wrapper";function xm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(TI,N(g(g({},xI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Form",component:Js,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Form"),t("p",null,"A wrapper component that handles the submission of forms."),t(R,{mdxType:"Canvas"},t(V,{name:"Form",height:"200px",parameters:{docs:{source:{code:M(Lu||(Lu=vm([`
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
          `])))}}},mdxType:"Story"},_i.bind({}))),t(se,{story:"Form",mdxType:"ArgsTable"}))}xm.isMDXComponent=!0;const sc=_i.bind({});sc.storyName="Form";sc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(wu||(wu=vm([`
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
          `])))}}};const Ya={title:"Components / Forms / Form",component:Js,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},includeStories:["form"]},SI={Form:"form"};Ya.parameters=Ya.parameters||{};Ya.parameters.docs=N(g({},Ya.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:SI,mdxComponentAnnotations:Ya},t(xm,null))});var CI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:_i,form:sc,default:Ya});const Mi=e=>({components:{FormLayout:Pt,TextField:we},data(){return{textField:"",emailField:""}},template:`
  <FormLayout>
    <TextField v-model="textField" autoComplete="off">
      <template #label>Store name</template>
    </TextField>
    <TextField v-model="emailField" type="email" autoComplete="email">
      <template #label>Account email</template>
    </TextField>
  </FormLayout>`}),Pi=(e,{argTypes:o})=>({components:{FormLayout:Pt,FormGroup:Dr,TextField:we},data(){return{min:"",max:""}},template:`<FormLayout>
    <FormGroup>
      <TextField v-model="min" type="number">
        <template #label>Minimum order</template>
      </TextField>
      <TextField v-model="max" type="number">
        <template #label>Maximum order</template>
      </TextField>
    </FormGroup>
  </FormLayout>`}),Ni=e=>({components:{FormLayout:Pt,FormGroup:Dr,TextField:we},data(){return{textField:"",emailField:""}},template:`<FormLayout>
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
  </FormLayout>`}),AI={Template:Mi,FormLayoutGroup:Pi,FormGroupCondensed:Ni},kI="wrapper";function Tm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(kI,N(g(g({},AI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Form Layout",component:Pt,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Form Layout"),t("p",null,`Use form layout to arrange fields within a form using standard spacing.
By default it stacks fields vertically but also supports horizontal groups of fields.`),t(R,{mdxType:"Canvas"},t(V,{name:"Default Form Layout",height:"160px",parameters:{docs:{source:{state:"close",code:M`
            <FormLayout>
              <TextField v-model="textField" autoComplete="off">
                <template #label>Store name</template>
              </TextField>
              <TextField v-model="emailField" type="email" autoComplete="email">
                <template #label>Account email</template>
              </TextField>
            </FormLayout>
          `}}},mdxType:"Story"},Mi.bind({}))),t("h3",null,"Field group"),t(R,{mdxType:"Canvas"},t(V,{name:"Field Group",height:"80px",parameters:{docs:{source:{state:"close",code:M`
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
          `}}},mdxType:"Story"},Pi.bind({}))),t("h3",null,"Condensed field group"),t(R,{mdxType:"Canvas"},t(V,{name:"Condensed field group",height:"80px",parameters:{docs:{source:{code:M`
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
          `}}},mdxType:"Story"},Ni.bind({}))))}Tm.isMDXComponent=!0;const ic=Mi.bind({});ic.storyName="Default Form Layout";ic.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
            <FormLayout>
              <TextField v-model="textField" autoComplete="off">
                <template #label>Store name</template>
              </TextField>
              <TextField v-model="emailField" type="email" autoComplete="email">
                <template #label>Account email</template>
              </TextField>
            </FormLayout>
          `}}};const lc=Pi.bind({});lc.storyName="Field Group";lc.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{state:"close",code:M`
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
          `}}};const rc=Ni.bind({});rc.storyName="Condensed field group";rc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
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
          `}}};const Za={title:"Components / Forms / Form Layout",component:Pt,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},includeStories:["defaultFormLayout","fieldGroup","condensedFieldGroup"]},LI={"Default Form Layout":"defaultFormLayout","Field Group":"fieldGroup","Condensed field group":"condensedFieldGroup"};Za.parameters=Za.parameters||{};Za.parameters.docs=N(g({},Za.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:LI,mdxComponentAnnotations:Za},t(Tm,null))});var wI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Mi,FormLayoutGroup:Pi,FormGroupCondensed:Ni,defaultFormLayout:ic,fieldGroup:lc,condensedFieldGroup:rc,default:Za}),_u=Object.freeze,_I=Object.defineProperty,Sm=(e,o)=>_u(_I(e,"raw",{value:_u(o||e.slice())})),Mu,Pu;const Bi=e=>({components:{Frame:jt,TopBar:Dn,TopBarUserMenu:Hr,TopBarMenu:ii,Icon:le,TopBarSearchField:Vr,VisuallyHidden:et,ActionList:Ze,NavigationSection:Er,Navigation:Ln,Loading:kn,ContextualSaveBar:Sn,Button:ye,Toast:Nn},data(){return{isUserMenuOpen:!1,isSecondaryMenuOpen:!1,isSearchActive:!1,searchValue:"",isCollapsed:!1,isLoading:!1,isDirty:!1,toastActive:!1,userMenuAction:[{items:[{content:"Back to Shopify",icon:$o}]},{items:[{content:"Community forums"}]}],userMenuMessage:{title:"Another Message",description:"This is a description of message",action:{onClick:this.clickHandle,content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}},navItems2:[{label:"Dashboard",icon:$c(fg),onClick:this.toggleIsLoading},{label:"Qikify Orders",icon:$c(bg),onClick:this.toggleIsLoading}]}},methods:{handleSearchChange(o){this.isSearchActive=o.length>0},handleSearchResultsDismiss(){this.searchValue="",this.isSearchActive=!1},toggleUserMenu(){this.isUserMenuOpen=!this.isUserMenuOpen},toggleIsSecondaryMenuOpen(){this.isSecondaryMenuOpen=!this.isSecondaryMenuOpen},clickHandle(){alert("clicked")},toggleCollapsed(){this.isCollapsed=!this.isCollapsed},toggleToastActive(){this.toastActive=!this.toastActive},toggleIsLoading(){this.isLoading=!this.isLoading},toggleIsDirty(){this.isDirty=!this.isDirty}},setup(){return{logo:{width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},navItems:[{label:"Back to Shopify",icon:$o}],QuestionMarkMajor:fd,CirclePlusOutlineMinor:vd}},template:`
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
  `}),MI={Template:Bi},PI="wrapper";function Cm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(PI,N(g(g({},MI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Structure / Frame",component:jt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Frame"),t("p",null,"The frame component, while not visible in the user interface itself, provides the structure for an application. It wraps the main elements and houses the primary ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-navigation--navigation"},"navigation"),", ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-top-bar--top-bar"},"top bar"),", ",t("a",{parentName:"p",href:"?path=/docs/components-feedback-indicators-toast--toast"},"toast"),", and ",t("a",{parentName:"p",href:"?path=/docs/components-forms-contextual-save-bar--contextual-save-bar"},"contextual save bar")," components."),t(R,{mdxType:"Canvas"},t(V,{name:"Frame",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:M(Mu||(Mu=Sm([`
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
          `])))}}},mdxType:"Story"},Bi.bind({}))),t(se,{story:"Frame",mdxType:"ArgsTable"}))}Cm.isMDXComponent=!0;const cc=Bi.bind({});cc.storyName="Frame";cc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M(Pu||(Pu=Sm([`
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
          `])))}}};const Qa={title:"Components / Structure / Frame",component:jt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["frame"]},NI={Frame:"frame"};Qa.parameters=Qa.parameters||{};Qa.parameters.docs=N(g({},Qa.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:NI,mdxComponentAnnotations:Qa},t(Cm,null))});var BI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Bi,frame:cc,default:Qa});const Ii=e=>({components:{Heading:ta},setup(){return{args:e}},template:`
    <Heading v-bind="args">
      Online store dashboard
    </Heading>
  `}),II={Template:Ii},DI="wrapper";function Am(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(DI,N(g(g({},II),o),{components:e,mdxType:"MDXLayout"}),t("h1",null,"Heading"),t("p",null,`Headings are used as the titles of each major section of a page in the interface.
For example, card components generally use headings as their title.`),t(oe,{title:"Components / Titles and text / Heading",component:ta,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t(R,{mdxType:"Canvas"},t(V,{story:Ii,name:"Heading",height:"50px",mdxType:"Story"})),t(se,{story:"Heading",mdxType:"ArgsTable"}))}Am.isMDXComponent=!0;const km=Ii;km.storyName="Heading";const Ja={title:"Components / Titles and text / Heading",component:ta,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},$I={Heading:"_Template_"};Ja.parameters=Ja.parameters||{};Ja.parameters.docs=N(g({},Ja.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:$I,mdxComponentAnnotations:Ja},t(Am,null))});var FI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ii,_Template_:km,default:Ja}),Nu=Object.freeze,EI=Object.defineProperty,Lm=(e,o)=>Nu(EI(e,"raw",{value:Nu(o||e.slice())})),Bu,Iu;const Di=e=>({components:{Icon:le},setup(){if(e.source==="CirclePlusMinor")return{args:e,source:xd};if(e.source==="BehaviorMajor")return{args:e,source:vg};if(e.source==="placeholder")return{args:e,source:"placeholder"}},template:'<Icon :source="source" :color="args.color" :backdrop="args.backdrop" :accessibility-label="args.accessibilityLabel" />'}),OI={Template:Di},qI="wrapper";function wm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(qI,N(g(g({},OI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Images and icons / Icon",component:le,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Icon"),t("p",null,`Icons are used to visually communicate core parts of the product and available actions.
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
`)),t("h3",null,t("strong",{parentName:"h3"},"Demo & Properties")),t(R,{mdxType:"Canvas"},t(V,{name:"Icon",height:"30px",args:{source:"CirclePlusMinor"},parameters:{docs:{source:{code:M(Bu||(Bu=Lm([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}},mdxType:"Story"},Di.bind({}))),t(se,{story:"Icon",mdxType:"ArgsTable"}))}wm.isMDXComponent=!0;const $i=Di.bind({});$i.storyName="Icon";$i.args={source:"CirclePlusMinor"};$i.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(Iu||(Iu=Lm([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}};const eo={title:"Components / Images and icons / Icon",component:le,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["icon"]},RI={Icon:"icon"};eo.parameters=eo.parameters||{};eo.parameters.docs=N(g({},eo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:RI,mdxComponentAnnotations:eo},t(wm,null))});var VI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Di,icon:$i,default:eo});const Fi=e=>({components:{InlineError:ba},setup(){return{args:e}},template:'<InlineError v-bind="args"/>'}),HI={Template:Fi},UI="wrapper";function _m(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(UI,N(g(g({},HI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / InlineError",component:ba,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Inline error"),t("p",null,`Inline errors are brief, in-context messages that tell merchants something went wrong with a single or group of inputs in a form
Use inline errors to help merchants understand why a form input may not be valid and how to fix it.`),t(R,{mdxType:"Canvas"},t(V,{name:"InlineError",args:{message:"Store name is required",fieldID:"myFieldID"},parameters:{docs:{source:{code:M`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}},mdxType:"Story"},Fi.bind({}))),t(se,{story:"InlineError",mdxType:"ArgsTable"}))}_m.isMDXComponent=!0;const Ei=Fi.bind({});Ei.storyName="InlineError";Ei.args={message:"Store name is required",fieldID:"myFieldID"};Ei.parameters={storySource:{source:`args => ({
  components: {
    InlineError
  },

  setup() {
    return {
      args
    };
  },

  template: \`<InlineError v-bind="args"/>\`
})`},docs:{source:{code:M`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}};const to={title:"Components / Forms / InlineError",component:ba,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},includeStories:["inlineError"]},jI={InlineError:"inlineError"};to.parameters=to.parameters||{};to.parameters.docs=N(g({},to.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:jI,mdxComponentAnnotations:to},t(_m,null))});var zI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Fi,inlineError:Ei,default:to});const Oi=e=>({components:{KeyboardKey:ei},setup(){return{args:e}},template:"<KeyboardKey>{{ args.default }}</KeyboardKey>"}),WI={Template:Oi},GI="wrapper";function Mm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(GI,N(g(g({},WI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Images and icons / Keyboard Key",component:ei,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Keyboard Key"),t("p",null,"Keyboard key is used to educate merchants about keyboard shortcuts."),t(R,{mdxType:"Canvas"},t(V,{name:"Keyboard Key",height:"50px",args:{default:"Ctrl"},parameters:{docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}},mdxType:"Story"},Oi.bind({}))),t(se,{story:"Keyboard Key",mdxType:"ArgsTable"}))}Mm.isMDXComponent=!0;const qi=Oi.bind({});qi.storyName="Keyboard Key";qi.args={default:"Ctrl"};qi.parameters={storySource:{source:`args => ({
  components: {
    KeyboardKey
  },

  setup() {
    return {
      args
    };
  },

  template: '<KeyboardKey>{{ args.default }}</KeyboardKey>'
})`},docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}};const ao={title:"Components / Images and icons / Keyboard Key",component:ei,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},includeStories:["keyboardKey"]},XI={"Keyboard Key":"keyboardKey"};ao.parameters=ao.parameters||{};ao.parameters.docs=N(g({},ao.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:XI,mdxComponentAnnotations:ao},t(Mm,null))});var KI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Oi,keyboardKey:qi,default:ao});const Ri=e=>({components:{Layout:Nt,LayoutSection:zt,AnnotatedSection:na,TextField:we},template:`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),Vi=e=>({components:{Layout:Nt,LayoutSection:zt,AnnotatedSection:na,TextField:we},template:`
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
  </Layout>`}),Hi=e=>({components:{Layout:Nt,LayoutSection:zt,AnnotatedSection:na,TextField:we},template:`
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
  </Layout>`}),Ui=e=>({components:{Layout:Nt,LayoutSection:zt,AnnotatedSection:na,TextField:we},template:`
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
  </Layout>`}),Wn=e=>({components:{Layout:Nt,LayoutSection:zt,AnnotatedSection:na,TextField:we,FormLayout:Pt},template:`
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
  </Layout>`});Wn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const Gn=e=>({components:{Layout:Nt,LayoutSection:zt,AnnotatedSection:na,TextField:we,FormLayout:Pt},template:`
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
  </Layout>`});Gn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const ji=e=>({components:{Layout:Nt,LayoutSection:zt,AnnotatedSection:na,TextField:we},setup(){return{args:e}},template:`
  <Layout v-bind="args">
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),YI={OneColLayout:Ri,TwoColLayoutDW:Vi,TwoColLayoutSW:Hi,ThreeColLayoutSW:Ui,AnnotatedLayout:Wn,AnnotatedBannerLayout:Gn,Example:ji},ZI="wrapper";function Pm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(ZI,N(g(g({},YI),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Structure / Layout",component:Nt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},mdxType:"Meta"}),t("h1",null,"Layout"),t("p",null,`The layout component is used to create the main layout on a page.
Layouts sections come in three main configurations: one-column, two-column, and annotated.
One and two column layouts can be combined in the same page.
Annotated layouts should be used on their own and only on settings pages.`),t("br",null),t("br",null),t("h3",null,"One-column layout"),t("p",null,`Use to have a single section on its own in a full-width container.
Use for simple pages and as a container for banners and other full-width content.`),t(R,{mdxType:"Canvas"},t(V,{name:"One column layout",parameters:{docs:{source:{state:"close",code:M`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},Ri.bind({}))),t("h3",null,"Two columns with primary and secondary widths"),t("p",null,`Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual product or order pages).
Can also be used on any page that needs to structure a lot of content. This layout stacks the columns on small screens.`),t(R,{mdxType:"Canvas"},t(V,{name:"Two columns (different width)",parameters:{docs:{source:{state:"close",code:M`
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
          `}}},mdxType:"Story"},Vi.bind({}))),t("h3",null,"Two columns with equal width"),t("p",null,`Use to create a \xBD + \xBD layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(R,{mdxType:"Canvas"},t(V,{name:"Two columns (same width)",parameters:{docs:{source:{state:"close",code:M`
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
          `}}},mdxType:"Story"},Hi.bind({}))),t("h3",null,"Three columns with equal width"),t("p",null,`Use to create a \u2153 + \u2153 + \u2153 layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(R,{mdxType:"Canvas"},t(V,{name:"Three columns (same width)",parameters:{docs:{source:{state:"close",code:M`
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
          `}}},mdxType:"Story"},Ui.bind({}))),t("h3",null,"Annotated layout"),t("p",null,`Use for settings pages. When settings are grouped thematically in annotated sections,
the title and description on each section helps merchants quickly find the setting they're looking for.`),t(R,{mdxType:"Canvas"},t(V,{story:Wn,name:"Annotated layout",mdxType:"Story"})),t("h3",null,"Annotated layout with Banner at the top"),t("p",null,"Use for settings pages that need a banner or other content at the top."),t(R,{mdxType:"Canvas"},t(V,{story:Gn,name:"Annotated layout (with Banner)",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(V,{name:"Example",height:"100px",parameters:{docs:{source:{code:M`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},ji.bind({}))),t(se,{story:"Example",mdxType:"ArgsTable"}))}Pm.isMDXComponent=!0;const uc=Ri.bind({});uc.storyName="One column layout";uc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const dc=Vi.bind({});dc.storyName="Two columns (different width)";dc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
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
          `}}};const pc=Hi.bind({});pc.storyName="Two columns (same width)";pc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
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
          `}}};const mc=Ui.bind({});mc.storyName="Three columns (same width)";mc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
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
          `}}};const Nm=Wn;Nm.storyName="Annotated layout";const Bm=Gn;Bm.storyName="Annotated layout (with Banner)";const yc=ji.bind({});yc.storyName="Example";yc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const oo={title:"Components / Structure / Layout",component:Nt,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},includeStories:["oneColumnLayout","twoColumnsDifferentWidth","twoColumnsSameWidth","threeColumnsSameWidth","_AnnotatedLayout_","_AnnotatedBannerLayout_","example"]},QI={"One column layout":"oneColumnLayout","Two columns (different width)":"twoColumnsDifferentWidth","Two columns (same width)":"twoColumnsSameWidth","Three columns (same width)":"threeColumnsSameWidth","Annotated layout":"_AnnotatedLayout_","Annotated layout (with Banner)":"_AnnotatedBannerLayout_",Example:"example"};oo.parameters=oo.parameters||{};oo.parameters.docs=N(g({},oo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:QI,mdxComponentAnnotations:oo},t(Pm,null))});var JI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",OneColLayout:Ri,TwoColLayoutDW:Vi,TwoColLayoutSW:Hi,ThreeColLayoutSW:Ui,AnnotatedLayout:Wn,AnnotatedBannerLayout:Gn,Example:ji,oneColumnLayout:uc,twoColumnsDifferentWidth:dc,twoColumnsSameWidth:pc,threeColumnsSameWidth:mc,_AnnotatedLayout_:Nm,_AnnotatedBannerLayout_:Bm,example:yc,default:oo});const zi=e=>({components:{Link:Ho},setup(){return{args:e}},template:'<Link v-bind="args">Fulfilling orders</Link>'}),eD={Template:zi},tD="wrapper";function Im(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(tD,N(g(g({},eD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Navigation / Link",component:Ho,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Link"),t("p",null,"Links take users to another place, and usually appear within or directly following a sentence."),t("p",null,"For actions that aren't related to navigation, use the ",t("a",{parentName:"p",href:"/docs/components-actions-button--button"},"button component.")),t(R,{mdxType:"Canvas"},t(V,{name:"Link",parameters:{docs:{source:{code:M`
            <Link>Fulfilling orders</Link>
          `}}},mdxType:"Story"},zi.bind({}))),t(se,{story:"Link",mdxType:"ArgsTable"}))}Im.isMDXComponent=!0;const gc=zi.bind({});gc.storyName="Link";gc.parameters={storySource:{source:`args => ({
  components: {
    Link
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Link v-bind="args">Fulfilling orders</Link>\`
})`},docs:{source:{code:M`
            <Link>Fulfilling orders</Link>
          `}}};const no={title:"Components / Navigation / Link",component:Ho,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},includeStories:["link"]},aD={Link:"link"};no.parameters=no.parameters||{};no.parameters.docs=N(g({},no.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:aD,mdxComponentAnnotations:no},t(Im,null))});var oD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:zi,link:gc,default:no});const Wi=e=>({components:{List:Uo,ListItem:ti},setup(){return{args:e}},template:`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>`}),nD={Template:Wi},sD="wrapper";function Dm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(sD,N(g(g({},nD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Lists and tables / List",component:Uo,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"List"),t("p",null,"Lists display a set of related text-only content. Each list item begins with a bullet or a number."),t(R,{mdxType:"Canvas"},t(V,{name:"List",height:"80px",parameters:{docs:{source:{code:M`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}},mdxType:"Story"},Wi.bind({}))),t(se,{story:"List",mdxType:"ArgsTable"}))}Dm.isMDXComponent=!0;const hc=Wi.bind({});hc.storyName="List";hc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}};const so={title:"Components / Lists and tables / List",component:Uo,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},includeStories:["list"]},iD={List:"list"};so.parameters=so.parameters||{};so.parameters.docs=N(g({},so.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:iD,mdxComponentAnnotations:so},t(Dm,null))});var lD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Wi,list:hc,default:so});const Xn=e=>({components:{Listbox:ft,ListboxOption:kt},template:`
  <Listbox accessibilityLabel="Basic Listbox example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});Xn.parameters={docs:{source:{state:"close",code:M`
      <Listbox accessibilityLabel="Basic Listbox example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const Kn=e=>({components:{Listbox:ft,ListboxOption:kt,ListboxLoading:An},template:`
  <Listbox accessibilityLabel="Listbox with loading example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});Kn.parameters={docs:{source:{state:"close",code:M`
      <Listbox accessibilityLabel="Listbox with loading example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const Yn=e=>({components:{Listbox:ft,ListboxOption:kt,ListboxAction:ai},template:`
  <Listbox accessibilityLabel="Listbox with Action example">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});Yn.parameters={docs:{source:{state:"close",code:M`
      <Listbox accessibilityLabel="Listbox with Action example">
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const Zn=e=>({components:{Listbox:ft,ListboxOption:kt,ListboxLoading:An,ListboxAction:ai},template:`
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
  </Listbox>`});Zn.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const Qn=e=>({components:{Listbox:ft,ListboxOption:kt,ListboxLoading:An,ListboxAction:ai},setup(){return{args:e}},template:`
  <Listbox v-bind="args">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});Qn.parameters={docs:{source:{code:M`
      <Listbox>
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const rD={BasicListbox:Xn,LoadingListbox:Kn,ActionListbox:Yn,CustomListbox:Zn,ExampleListbox:Qn},cD="wrapper";function $m(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(cD,N(g(g({},rD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Lists and tables / Listbox",component:ft,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},mdxType:"Meta"}),t("h1",null,"Listbox"),t("p",null,"The Listbox component is a list component that implements part of ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"},"the Aria 1.2 Listbox specs."),`
It presents a list of options and allows users to select one or more of them.
If you need more structure than the standard component offers, use composition to customize the presentation of these lists by using headers or custom elements.`),t("br",null),t("br",null),t("h3",null,"Basic Listbox"),t("p",null,"Basic implementation of a control element used to let merchants select options"),t(R,{mdxType:"Canvas"},t(V,{story:Xn,name:"Basic Listbox",mdxType:"Story"})),t("h3",null,"Listbox with Loading"),t("p",null,"Implementation of a control element showing a loading indicator to let merchants know more options are being loaded"),t(R,{mdxType:"Canvas"},t(V,{story:Kn,name:"Listbox with Loading",mdxType:"Story"})),t("h3",null,"Listbox with Action"),t("p",null,"Implementation of a control element used to let merchants take an action"),t(R,{mdxType:"Canvas"},t(V,{story:Yn,name:"Listbox with Action",mdxType:"Story"})),t("h3",null,"Listbox with custom element"),t("p",null,"Implementation of a control with custom rendering of options"),t(R,{mdxType:"Canvas"},t(V,{story:Zn,name:"Listbox with custom element",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(V,{story:Qn,name:"Example",height:"180px",mdxType:"Story"})),t(se,{story:"Example",mdxType:"ArgsTable"}))}$m.isMDXComponent=!0;const Fm=Xn;Fm.storyName="Basic Listbox";const Em=Kn;Em.storyName="Listbox with Loading";const Om=Yn;Om.storyName="Listbox with Action";const qm=Zn;qm.storyName="Listbox with custom element";const Rm=Qn;Rm.storyName="Example";const io={title:"Components / Lists and tables / Listbox",component:ft,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},includeStories:["_BasicListbox_","_LoadingListbox_","_ActionListbox_","_CustomListbox_","_ExampleListbox_"]},uD={"Basic Listbox":"_BasicListbox_","Listbox with Loading":"_LoadingListbox_","Listbox with Action":"_ActionListbox_","Listbox with custom element":"_CustomListbox_",Example:"_ExampleListbox_"};io.parameters=io.parameters||{};io.parameters.docs=N(g({},io.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:uD,mdxComponentAnnotations:io},t($m,null))});var dD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicListbox:Xn,LoadingListbox:Kn,ActionListbox:Yn,CustomListbox:Zn,ExampleListbox:Qn,_BasicListbox_:Fm,_LoadingListbox_:Em,_ActionListbox_:Om,_CustomListbox_:qm,_ExampleListbox_:Rm,default:io});const Gi=e=>({components:{Loading:kn,Frame:jt,Button:ye},data(){return{isActive:!1}},setup(){return{args:e}},template:`<Frame>
    <Loading v-if="isActive" />
    <br/>
    <Button @click="isActive = !isActive">Toggle loading</Button>
  </Frame>`}),pD={Template:Gi},mD="wrapper";function Vm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(mD,N(g(g({},pD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Feedback indicators / Loading",component:kn,argTypes:{disabled:{table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Loading"),t("p",null,"The loading component is used to indicate to merchants that a page is loading or an upload is processing."),t(R,{mdxType:"Canvas"},t(V,{name:"Loading",inline:!1,height:"100px",parameters:{docs:{source:{code:M`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}},mdxType:"Story"},Gi.bind({}))),t(se,{story:"Loading",mdxType:"ArgsTable"}))}Vm.isMDXComponent=!0;const bc=Gi.bind({});bc.storyName="Loading";bc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}};const lo={title:"Components / Feedback indicators / Loading",component:kn,argTypes:{disabled:{table:{type:{summary:null}}}},includeStories:["loading"]},yD={Loading:"loading"};lo.parameters=lo.parameters||{};lo.parameters.docs=N(g({},lo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:yD,mdxComponentAnnotations:lo},t(Vm,null))});var gD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Gi,loading:bc,default:lo}),Du=Object.freeze,hD=Object.defineProperty,Xi=(e,o)=>Du(hD(e,"raw",{value:Du(o||e.slice())})),$u,Fu,Eu,Ou;const Ki=(e,{argTypes:o})=>({components:{ModalSection:Fo,TextContainer:At,Button:ye,Modal:xa},data(){return{active:!0}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Modal>`}),Jo=e=>({components:{Modal:xa,Button:ye,ModalSection:Fo,TextContainer:At},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleScrolledToBottom(){alert("Scrolled to bottom")}},template:`
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
  `});Jo.storyName="With scroll listener";Jo.parameters={docs:{source:{code:M($u||($u=Xi([`
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
        `])))}}};const en=e=>({components:{Modal:xa,Button:ye,Stack:Re,StackItem:bt,TextField:we,TextContainer:At,ModalSection:Fo},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleClick(){alert("Copy to clipboard successful")}},template:`
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
    </Modal>`});en.storyName="With primary action";en.parameters={docs:{source:{code:M(Fu||(Fu=Xi([`
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
      `])))}}};const bD={Template:Ki,scrollExample:Jo,primaryActionExample:en},fD="wrapper";function Hm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(fD,N(g(g({},bD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Overlays / Modal",component:xa,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Modal"),t("p",null,"Modals are overlays that require merchants to take an action before they can continue interacting with the rest of Shopify. They can be disruptive and should be used thoughtfully and sparingly."),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With primary action"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:en,height:"500px",inline:!1,name:"_primaryActionExample_",mdxType:"Story"})),t("h3",null,"With scroll listener"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:Jo,height:"500px",inline:!1,name:"_scrollExample_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(V,{name:"Modal",inline:!1,height:"500px",args:{colorScheme:"light"},parameters:{docs:{source:{code:M(Eu||(Eu=Xi([`
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
            `])))}}},mdxType:"Story"},Ki.bind({}))),t(se,{story:"Modal",mdxType:"ArgsTable"}))}Hm.isMDXComponent=!0;const vD=en,xD=Jo,Yi=Ki.bind({});Yi.storyName="Modal";Yi.args={colorScheme:"light"};Yi.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M(Ou||(Ou=Xi([`
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
            `])))}}};const ro={title:"Components / Overlays / Modal",component:xa,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_primaryActionExample_","_scrollExample_","modal"]},TD={_primaryActionExample_:"_primaryActionExample_",_scrollExample_:"_scrollExample_",Modal:"modal"};ro.parameters=ro.parameters||{};ro.parameters.docs=N(g({},ro.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:TD,mdxComponentAnnotations:ro},t(Hm,null))});var SD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ki,scrollExample:Jo,primaryActionExample:en,_primaryActionExample_:vD,_scrollExample_:xD,modal:Yi,default:ro});const Zi=e=>({components:{Frame:jt,Navigation:Ln,NavigationSection:Er},setup(){return{navItems:[{url:"#",label:"Home",icon:xg},{url:"#",label:"Orders",icon:bd},{url:"#",label:"Products",icon:Tg,selected:!0,subNavigationItems:[{url:"#",new:!0,label:"New item"},{url:"#",label:"Active Item",selected:!0},{url:"#",disabled:!0,label:"New item"}]},{url:"#",label:"Marketing",icon:Sg,badge:{content:"Warn",status:"warning"}}],navItems2:[{url:"#",label:"Online Store",icon:Cg},{url:"/path/to/place",label:"Secondary action",secondaryAction:{url:"#",accessibilityLabel:"View your online store",icon:Ag}}],CirclePlusOutlineMinor:vd}},template:`
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
  `}),CD={Template:Zi},AD="wrapper";function Um(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(AD,N(g(g({},CD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Navigation / Navigation",component:Ln,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Navigation"),t("p",null,"The navigation component is used to display the primary navigation in the sidebar of the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-frame--frame"},"frame")," of an application. Navigation includes a list of links that merchants use to move between sections of the application."),t(R,{mdxType:"Canvas"},t(V,{name:"Navigation",inline:!1,height:"500px",parameters:{docs:{source:{code:M`
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
          `}}},mdxType:"Story"},Zi.bind({}))),t(se,{story:"Navigation",mdxType:"ArgsTable"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation Section")),t("p",null,"A navigation section groups together related navigation items. Navigation sections can be clarified by a heading. Merchants can use a section to easily find navigation items within a specific category."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"items"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-item"},"Item[]")),t("td",{parentName:"tr",align:null},"A collection of navigation items to be rendered inside the section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing a title for the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"fill"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should take up all vertical space available")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"rollup"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-rollup"},"Rollup[]")),t("td",{parentName:"tr",align:null},"An object determining the collapsing behavior of the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-action"},"Action[]")),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"separator"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should have a visual separator")))),t("a",{name:"type-item"}),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Navigation section item")),t("p",null,"The content of the navigation component consists of navigation items. Each item is a link or action a merchant can take."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A location for the navigation item to navigate to when clicked")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matches"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to a closely matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"exactMatch"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to an exactly matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matchPaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing a collection of additional paths for the navigation item to respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"excludePaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing an explicit collection of paths the navigation item should not respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the navigation. Please prefer minor icons here. If a major icon has to be used, set the ",t("inlineCode",{parentName:"td"},"shouldResizeIcon")," prop to true")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"string ","|"," null"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed in a badge next to the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"label"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed as link text in the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"disabled"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is disabled")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"new"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Indicate whether the navigation item is new by adding an indicator dot to the parent and badge to the item (overwritten by the badge prop)")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of a navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"selected"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is the currently-selected item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"shouldResizeIcon"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Will allow for major icons to be displayed at the same size as minor icons")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"subNavigationItems"),t("td",{parentName:"tr",align:null},"SubNavigationItem[]"),t("td",{parentName:"tr",align:null},"A collection of navigation items rendered as nested secondary navigation items")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"secondaryAction"),t("td",{parentName:"tr",align:null},"SecondaryAction"),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to a navigation item")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@click"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on a navigation item")))),t("br",null),t("a",{name:"type-rollup"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section rollup")),t("p",null,"Rollup allows items in a navigation section to roll up and be revealed when they are of use to the merchant."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"after"),t("td",{parentName:"tr",align:null},"number"),t("td",{parentName:"tr",align:null},"A number of items after which the navigation section should be collapsed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"view"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section view action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hide"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section hide action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"activePath"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property representing the current URL of your application")))),t("br",null),t("a",{name:"type-action"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section action")),t("p",null,"Action allows a complementary icon-only action to render next to the section title."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed as the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onClick()"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on the action")))))}Um.isMDXComponent=!0;const fc=Zi.bind({});fc.storyName="Navigation";fc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
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
          `}}};const co={title:"Components / Navigation / Navigation",component:Ln,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},includeStories:["navigation"]},kD={Navigation:"navigation"};co.parameters=co.parameters||{};co.parameters.docs=N(g({},co.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:kD,mdxComponentAnnotations:co},t(Um,null))});var LD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zi,navigation:fc,default:co}),qu=Object.freeze,wD=Object.defineProperty,$s=(e,o)=>qu(wD(e,"raw",{value:qu(o||e.slice())})),Ru,Vu,Hu,Uu;const Qi=e=>({components:{Card:rt,OptionList:wn,TextStyle:yt,Icon:le},setup(){const o=C([]);return{changeSelected:i=>{console.log("changeSelected",i)},selected:o,options:[{value:"byward_market",label:"Byward Market"},{id:"centre",value:"centretown",label:"Centretown"},{value:"hintonburg",label:"Hintonburg"},{value:"westboro",label:"Westboro"},{value:"downtown",label:"Downtown"}],FoodMajor:kg}},template:`
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
  `}),Ji=e=>({components:{Card:rt,OptionList:wn},setup(){const o=C([]);return{args:e,changeSelectedvalue:i=>{console.log("changeSelectedvalue",i)},selectedValue:o,sections:[{options:[{value:"type",label:"Sale item type"},{value:"kind",label:"Sale kind"}]},{title:"Traffic",options:[{value:"source",label:"Traffic referrer source"},{value:"host",label:"Traffic referrer host"},{value:"path",label:"Traffic referrer path"}]}]}},template:`
    <Card>
      <OptionList
        v-bind="args"
        v-model="selectedValue"
        :sections="sections"
        @change="changeSelectedvalue"
      />
    </Card>
    <br/><p><strong>Value:</strong> {{ selectedValue }}</p>
  `}),_D={Template1:Qi,Template:Ji},MD="wrapper";function jm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(MD,N(g(g({},_D),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Lists and tables / Option List",component:wn,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},mdxType:"Meta"}),t("h1",null,"Option List"),t("br",null),t("p",null,"The option list component lets you create a list of grouped items that merchants can pick from. This can include single selection or multiple selection of options. Option list usually appears in a popover, and sometimes in a modal or a sidebar. Option lists are styled differently than ",t("a",{parentName:"p",href:"?path=/docs/components-forms-choice-list"},"choice lists")," and should not be used within a form, but as a standalone menu."),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Simple option list")),t("p",null,"Use sections when you have multiple groups of similar selectable items."),t(R,{mdxType:"Canvas"},t(V,{name:"Option list",parameters:{docs:{source:{state:"close",code:M(Ru||(Ru=$s([`
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
          `])))}}},mdxType:"Story"},Qi.bind({}))),t("h3",null,t("strong",{parentName:"h3"},"Option list with sections")),t("p",null,"Use sections when you have multiple groups of similar selectable items."),t(R,{mdxType:"Canvas"},t(V,{name:"Option list with sections",args:{allowMultiple:!0},parameters:{docs:{source:{code:M(Vu||(Vu=$s([`
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
          `])))}}},mdxType:"Story"},Ji.bind({}))),t(se,{story:"Option list with sections",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"OptionDescriptor Props")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"value"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Value of the option")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"label"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Display label for the option")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"disabled"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether the option is disabled or not")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"active"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Whether the option is active or not")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Unique identifier for the option")))),t("br",null),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"SectionDescriptor Props")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"options"),t("td",{parentName:"tr",align:null},"OptionDescriptor[]"),t("td",{parentName:"tr",align:null},"Collection of options within the section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Section title")))))}jm.isMDXComponent=!0;const vc=Qi.bind({});vc.storyName="Option list";vc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M(Hu||(Hu=$s([`
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
          `])))}}};const el=Ji.bind({});el.storyName="Option list with sections";el.args={allowMultiple:!0};el.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(Uu||(Uu=$s([`
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
          `])))}}};const uo={title:"Components / Lists and tables / Option List",component:wn,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},includeStories:["optionList","optionListWithSections"]},PD={"Option list":"optionList","Option list with sections":"optionListWithSections"};uo.parameters=uo.parameters||{};uo.parameters.docs=N(g({},uo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:PD,mdxComponentAnnotations:uo},t(jm,null))});var ND=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template1:Qi,Template:Ji,optionList:vc,optionListWithSections:el,default:uo});const tl=e=>({components:{Page:oi,Badge:at,Card:rt,Button:ye},setup(){return{args:e,handleClick:()=>{console.log("click")}}},template:`
    <Page
      v-bind="args"
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
  `}),BD={Template:tl},ID="wrapper";function zm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(ID,N(g(g({},BD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Structure / Page",component:oi,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Page"),t("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),t("h4",null,t("strong",{parentName:"h4"},"Related components")),t("ul",null,t("li",{parentName:"ul"},"To lay out the content within a page, use the ",t("a",{parentName:"li",href:"?path=/docs/components-structure-layout"},"layout component"),"."),t("li",{parentName:"ul"},"To add pagination within the context of a list or other page content, use the ",t("a",{parentName:"li",href:"?path=/docs/components-navigation-pagination"},"pagination component"),"."),t("li",{parentName:"ul"},"To add primary and secondary calls to action at the bottom of a page, see the ",t("a",{parentName:"li",href:"?path=/docs/components-structure-page-actions"},"page actions component"),".")),t(R,{mdxType:"Canvas"},t(V,{name:"Page",inline:!1,height:"250px",args:{fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1},parameters:{docs:{source:{code:M`
            <Page
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
          `}}},mdxType:"Story"},tl.bind({}))),t(se,{story:"Page",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Breadcrumbs Props")),t("p",null,t("strong",{parentName:"p"},"Example: ")),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// CallbackAction
<Page :breadcrumbs="[{ content: 'Order', onAction: handleAction }]"></Page>

// LinkAction
<Page :breadcrumbs="[{ content: 'Products', url: '/products' }]"></Page>
`)),t("p",null,t("inlineCode",{parentName:"p"},"CallbackAction")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A unique identifier for the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Content the action displays")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onAction()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when an action takes place")))),t("br",null),t("p",null,t("inlineCode",{parentName:"p"},"LinkAction")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A unique identifier for the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Content the action displays")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A destination to link to")))),t("br",null),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Pagination Props")),t("p",null,"See the ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-pagination"},"pagination component")," for more details."),t("p",null,t("strong",{parentName:"p"},"Example: ")),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`<Page :pagination="{ hasPrevious: true, hasNext: true, onPrevious: handlePrevious, onNext: handleNext }"></Page>
`)),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextKeys"),t("td",{parentName:"tr",align:null},"Key[]"),t("td",{parentName:"tr",align:null},"Keyboard shortcuts for the next button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousKeys"),t("td",{parentName:"tr",align:null},"Key[]"),t("td",{parentName:"tr",align:null},"Keyboard shortcuts for the previous button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextTooltip"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Tooltip for the next button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousTooltip"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Tooltip for the previous button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextURL"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"The URL of the next page")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousURL"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"The URL of the previous page")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hasNext"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether there is a next page to show")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hasPrevious"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether there is a previous page to show")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Accessible label for the pagination")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabels"),t("td",{parentName:"tr",align:null},"AccessibilityLabels"),t("td",{parentName:"tr",align:null},"Accessible labels for the buttons and UnstyledLinks")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onNext()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when next button is clicked")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onPrevious()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when previous button is clicked")))))}zm.isMDXComponent=!0;const al=tl.bind({});al.storyName="Page";al.args={fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1};al.parameters={storySource:{source:`args => ({
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

    return {
      args,
      handleClick
    };
  },

  template: \`
    <Page
      v-bind="args"
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
})`},docs:{source:{code:M`
            <Page
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
          `}}};const po={title:"Components / Structure / Page",component:oi,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["page"]},DD={Page:"page"};po.parameters=po.parameters||{};po.parameters.docs=N(g({},po.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:DD,mdxComponentAnnotations:po},t(zm,null))});var $D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:tl,page:al,default:po}),ju=Object.freeze,FD=Object.defineProperty,Wm=(e,o)=>ju(FD(e,"raw",{value:ju(o||e.slice())})),zu,Wu;const ol=e=>({components:{PageActions:ni},setup(){return{args:e,handleClick:()=>{console.log("click")}}},template:`
    <PageActions
      :primaryAction="{ content: 'Save', onClick: handleClick }"
      :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
    />
  `}),ED={Template:ol},OD="wrapper";function Gm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(OD,N(g(g({},ED),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Structure / Page Actions",component:ni,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Page Actions"),t("p",null,"Page actions let merchants take key actions at the bottom of specific pages in the interface. This is important because sometimes the primary call to action is hard to access when merchants are at the bottom of a page."),t(R,{mdxType:"Canvas"},t(V,{name:"Page Actions",height:"100px",parameters:{docs:{source:{code:M(zu||(zu=Wm([`
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
          `])))}}},mdxType:"Story"},ol.bind({}))),t(se,{story:"Page Actions",mdxType:"ArgsTable"}))}Gm.isMDXComponent=!0;const xc=ol.bind({});xc.storyName="Page Actions";xc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(Wu||(Wu=Wm([`
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
          `])))}}};const mo={title:"Components / Structure / Page Actions",component:ni,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},includeStories:["pageActions"]},qD={"Page Actions":"pageActions"};mo.parameters=mo.parameters||{};mo.parameters.docs=N(g({},mo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:qD,mdxComponentAnnotations:mo},t(Gm,null))});var RD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ol,pageActions:xc,default:mo}),Gu=Object.freeze,VD=Object.defineProperty,Xm=(e,o)=>Gu(VD(e,"raw",{value:Gu(o||e.slice())})),Xu,Ku;const nl=e=>({components:{Pagination:_n},setup(){return{args:e,handlePrevious:()=>{console.log("previous")},handleNext:()=>{console.log("next")}}},template:`
    <Pagination
      v-bind="args"
      @previous="handlePrevious"
      @next="handleNext"
    >
      Results
    </Pagination>
  `}),HD={Template:nl},UD="wrapper";function Km(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(UD,N(g(g({},HD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Navigation / Pagination",component:_n,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Pagination"),t("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),t(R,{mdxType:"Canvas"},t(V,{name:"Pagination",inline:!1,height:"100px",args:{hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"},parameters:{docs:{source:{code:M(Xu||(Xu=Xm([`
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
          `])))}}},mdxType:"Story"},nl.bind({}))),t(se,{story:"Pagination",mdxType:"ArgsTable"}))}Km.isMDXComponent=!0;const sl=nl.bind({});sl.storyName="Pagination";sl.args={hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"};sl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(Ku||(Ku=Xm([`
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
          `])))}}};const yo={title:"Components / Navigation / Pagination",component:_n,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["pagination"]},jD={Pagination:"pagination"};yo.parameters=yo.parameters||{};yo.parameters.docs=N(g({},yo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:jD,mdxComponentAnnotations:yo},t(Km,null))});var zD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:nl,pagination:sl,default:yo}),Yu=Object.freeze,WD=Object.defineProperty,il=(e,o)=>Yu(WD(e,"raw",{value:Yu(o||e.slice())})),Zu,Qu,Ju,ed;const ll=(e,{argTypes:o})=>({components:{ActionList:Ze,Button:ye,Popover:tt},data(){return{active:!0,items:[{content:"Import file"},{content:"Export file"}]}},methods:{toggleActive(){this.active=!this.active}},template:`
    <Popover
      :active="active"
      autofocusTarget="first-node"
      @close="toggleActive"
      :colorScheme="'${e.colorScheme}'"
    >
      <template #activator>
        <Button :disclosure="true" @click="toggleActive"> More actions </Button>
      </template>
      <template #content> <ActionList :items="items"/> </template>
    </Popover>`}),tn=(e,{argTypes:o})=>({components:{ActionList:Ze,Button:ye,Popover:tt,Pane:Hs,PopoverSection:gn},data(){return{active:!0,items:[{content:"Online store"},{content:"Facebook"},{content:"Shopify POS"}]}},methods:{toggleActive(){this.active=!this.active}},template:` <div>
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
  </div>`});tn.storyName="With content and actions";tn.parameters={docs:{source:{code:M(Zu||(Zu=il([`
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
        `])))}}};const an=(e,{argTypes:o})=>({components:{Button:ye,Popover:tt,FormLayout:Pt,TextField:we,Select:jo},data(){return{active:!0,options:[{label:"Tagged with",value:"Tagged with"}],selectedValue:"Tagged with",tagValue:""}},methods:{toggleActive(){this.active=!this.active},handleTagValueChange(n){this.tagValue=n}},template:` <div>
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
  </div>`});an.storyName="With form components";an.parameters={docs:{source:{code:M(Qu||(Qu=il([`
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
        `])))}}};const GD={Template:ll,ContentAndActions:tn,FormComponents:an},XD="wrapper";function Ym(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(XD,N(g(g({},GD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Overlays / Popover",component:tt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Popover"),t("p",null,"Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page."),t("p",null,"For ActionList usages, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--action-list"},"ActionList component.")),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With Content and Actions"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:tn,height:"280px",inline:!1,name:"_ContentAndActions_",mdxType:"Story"})),t("h3",null,"With Form Components"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(V,{story:an,height:"280px",inline:!1,name:"_FormComponents_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(V,{name:"Popover",inline:!1,height:"300px",args:{colorScheme:"light"},parameters:{docs:{source:{code:M(Ju||(Ju=il([`
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
          `])))}}},mdxType:"Story"},ll.bind({}))),t(se,{story:"Popover",mdxType:"ArgsTable"}))}Ym.isMDXComponent=!0;const KD=tn,YD=an,rl=ll.bind({});rl.storyName="Popover";rl.args={colorScheme:"light"};rl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M(ed||(ed=il([`
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
          `])))}}};const go={title:"Components / Overlays / Popover",component:tt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_ContentAndActions_","_FormComponents_","popover"]},ZD={_ContentAndActions_:"_ContentAndActions_",_FormComponents_:"_FormComponents_",Popover:"popover"};go.parameters=go.parameters||{};go.parameters.docs=N(g({},go.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:ZD,mdxComponentAnnotations:go},t(Ym,null))});var QD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ll,ContentAndActions:tn,FormComponents:an,_ContentAndActions_:KD,_FormComponents_:YD,popover:rl,default:go});const cl=e=>({components:{ProgressBar:si},setup(){return{args:e}},template:'<ProgressBar v-bind="args"/>'}),JD={Template:cl},e0="wrapper";function Zm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(e0,N(g(g({},JD),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Feedback indicators / Progress bar",component:si,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Progress bar"),t("p",null,"The progress bar component is used to visually represent the completion of a task or operation. It shows how much of the task has been completed and how much is still left."),t("br",null),t("br",null),t(R,{mdxType:"Canvas"},t(V,{name:"Progress bar",height:"60px",args:{progress:75},parameters:{docs:{source:{code:M`
            <ProgressBar v-bind="props"/>
          `}}},mdxType:"Story"},cl.bind({}))),t(se,{story:"Progress bar",mdxType:"ArgsTable"}))}Zm.isMDXComponent=!0;const ul=cl.bind({});ul.storyName="Progress bar";ul.args={progress:75};ul.parameters={storySource:{source:`args => ({
  components: {
    ProgressBar
  },

  setup() {
    return {
      args
    };
  },

  template: \`<ProgressBar v-bind="args"/>\`
})`},docs:{source:{code:M`
            <ProgressBar v-bind="props"/>
          `}}};const ho={title:"Components / Feedback indicators / Progress bar",component:si,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["progressBar"]},t0={"Progress bar":"progressBar"};ho.parameters=ho.parameters||{};ho.parameters.docs=N(g({},ho.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:t0,mdxComponentAnnotations:ho},t(Zm,null))});var a0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:cl,progressBar:ul,default:ho});const Jn=e=>({components:{RadioButton:xn},setup(){return{args:e}},template:`
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
  </div>`,data(){return{demoValue:"disabled"}}});Jn.parameters={docs:{source:{code:M`
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
      `}}};const o0={Template:Jn},n0="wrapper";function Qm(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(n0,N(g(g({},o0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Radio Button",component:xn,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Radio button"),t("p",null,"Use radio buttons to present each item in a list of options where merchants must make a single selection."),t(R,{mdxType:"Canvas"},t(V,{story:Jn,name:"Radio Button",mdxType:"Story"})),t(se,{story:"Radio Button",mdxType:"ArgsTable"}))}Qm.isMDXComponent=!0;const Jm=Jn;Jm.storyName="Radio Button";const bo={title:"Components / Forms / Radio Button",component:xn,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_Template_"]},s0={"Radio Button":"_Template_"};bo.parameters=bo.parameters||{};bo.parameters.docs=N(g({},bo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:s0,mdxComponentAnnotations:bo},t(Qm,null))});var i0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Jn,_Template_:Jm,default:bo}),td=Object.freeze,l0=Object.defineProperty,Fs=(e,o)=>td(l0(e,"raw",{value:td(o||e.slice())})),ad,od,nd,sd;const dl=e=>({components:{RangeSlider:Ta,Card:rt},setup(){const o=C(30);return{args:e,rangeValue:o}},template:`
    <Card sectioned>
      <template #title>Text color</template>
      <RangeSlider v-model="rangeValue" v-bind="args">
        <template #prefix>Hue</template>
        <template #suffix>{{ rangeValue }}</template>
      </RangeSlider>
    </Card>
  `}),pl=e=>({components:{RangeSlider:Ta,Card:rt},setup(){const o=C(0);return{args:e,rangeValue:o}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <br/><p>Value: {{ rangeValue }}</p>
    </Card>
  `}),ml=e=>({components:{RangeSlider:Ta,Card:rt,Stack:Re,TextField:we},setup(){const o=C([900,1e3]),n=C("900"),s=C("1000");return{args:e,rangeValue:o,minValue:n,maxValue:s,handleMinChange:m=>{m.target.value<o.value[1]&&(o.value[0]=parseInt(m.target.value))},handleMaxChange:m=>{m.target.value>o.value[0]&&(o.value[1]=parseInt(m.target.value))},handleRangeChange:m=>{n.value=`${m[0]}`,s.value=`${m[1]}`}}},template:`
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
  `}),yl=e=>({components:{RangeSlider:Ta,Card:rt},setup(){const o=C(10);return{args:e,rangeValue:o}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <p>Value: {{ rangeValue }}</p>
    </Card>
  `}),r0={SlotTemplate:dl,StepTemplate:pl,DualTemplate:ml,Template:yl},c0="wrapper";function ey(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(c0,N(g(g({},r0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Range Slider",component:Ta,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Range slider"),t("p",null,"A range slider is an input field that merchants can use to select a numeric value within a given range (minimum and maximum values)."),t("font",{color:"#FF7900"},t("strong",null,"Note:"))," The ",t("code",null,"output")," tooltip position is displayed incorrectly on demo because of the scss from Shopify.",t("br",null),t(R,{mdxType:"Canvas"},t(V,{name:"Prefix and suffix elements",height:"150px",args:{min:0,max:360,label:"Hue color mix",output:!0},parameters:{docs:{source:{state:"close",code:M(ad||(ad=Fs([`
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
          `])))}}},mdxType:"Story"},dl.bind({}))),t("h3",null,t("strong",{parentName:"h3"},"Step increamented range control")),t(R,{mdxType:"Canvas"},t(V,{name:"Range slider with steps",height:"150px",args:{min:-20,max:20,step:4,label:"Logo offset",output:!0},parameters:{docs:{source:{state:"close",code:M`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" :min="-20" :max="20" :step="4" label="Logo offset" output />
            </Card>
          `}}},mdxType:"Story"},pl.bind({}))),t("h3",null,t("strong",{parentName:"h3"},"Dual thumb range slider")),t(R,{mdxType:"Canvas"},t(V,{name:"Dual thumb range slider",height:"150px",args:{min:0,max:2e3,step:10,label:"Money spent is between",output:!0},parameters:{docs:{source:{state:"close",code:M(od||(od=Fs([`
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
          `])))}}},mdxType:"Story"},ml.bind({}))),t(R,{mdxType:"Canvas"},t(V,{name:"Range slider",height:"150px",args:{label:"Opacity percentage",output:!1},parameters:{docs:{source:{code:M`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" label="Opacity percentage" />
            </Card>
          `}}},mdxType:"Story"},yl.bind({}))),t(se,{story:"Range slider",mdxType:"ArgsTable"}))}ey.isMDXComponent=!0;const gl=dl.bind({});gl.storyName="Prefix and suffix elements";gl.args={min:0,max:360,label:"Hue color mix",output:!0};gl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M(nd||(nd=Fs([`
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
          `])))}}};const hl=pl.bind({});hl.storyName="Range slider with steps";hl.args={min:-20,max:20,step:4,label:"Logo offset",output:!0};hl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" :min="-20" :max="20" :step="4" label="Logo offset" output />
            </Card>
          `}}};const bl=ml.bind({});bl.storyName="Dual thumb range slider";bl.args={min:0,max:2e3,step:10,label:"Money spent is between",output:!0};bl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M(sd||(sd=Fs([`
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
          `])))}}};const fl=yl.bind({});fl.storyName="Range slider";fl.args={label:"Opacity percentage",output:!1};fl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" label="Opacity percentage" />
            </Card>
          `}}};const fo={title:"Components / Forms / Range Slider",component:Ta,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},includeStories:["prefixAndSuffixElements","rangeSliderWithSteps","dualThumbRangeSlider","rangeSlider"]},u0={"Prefix and suffix elements":"prefixAndSuffixElements","Range slider with steps":"rangeSliderWithSteps","Dual thumb range slider":"dualThumbRangeSlider","Range slider":"rangeSlider"};fo.parameters=fo.parameters||{};fo.parameters.docs=N(g({},fo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:u0,mdxComponentAnnotations:fo},t(ey,null))});var d0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SlotTemplate:dl,StepTemplate:pl,DualTemplate:ml,Template:yl,prefixAndSuffixElements:gl,rangeSliderWithSteps:hl,dualThumbRangeSlider:bl,rangeSlider:fl,default:fo});const vl=e=>({components:{Scrollable:Ut},template:`
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
  </Scrollable>`}),es=e=>({components:{Scrollable:Ut,ScrollTo:Rs},template:`
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
  </Scrollable>`});es.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const ts=e=>({components:{Scrollable:Ut},setup(){return{args:e}},template:`
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
  </Scrollable>`});ts.parameters={docs:{source:{code:M`
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
      `}}};const p0={DefaultScrollable:vl,ScrollToExample:es,Example:ts},m0="wrapper";function ty(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(m0,N(g(g({},p0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Behavior / Scrollable",component:Ut,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},mdxType:"Meta"}),t("h1",null,"Scrollable"),t("p",null,`The scrollable component is a container for long form content,
such as terms of service, that allows for scrolling so merchants can expose more text as they read.`),t("br",null),t("br",null),t("h3",null,"Default scrollable container"),t("p",null,`Use when you need to make a region within the page independently scrollable.
It's often used in modals and other panes where it's helpful to provide an extra visual cue that content exists below or above the fold.`),t(R,{mdxType:"Canvas"},t(V,{story:vl,name:"Default scrollable container",mdxType:"Story"})),t("h3",null,"Scroll to child component"),t("p",null,"Use when you need to programmatically scroll a child component into view in the scrollable container."),t(R,{mdxType:"Canvas"},t(V,{story:es,name:"Scroll to child component",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#fff"},mdxType:"Canvas"},t(V,{story:ts,name:"Example",height:"150px",mdxType:"Story"})),t(se,{story:"Example",mdxType:"ArgsTable"}))}ty.isMDXComponent=!0;const ay=vl;ay.storyName="Default scrollable container";const oy=es;oy.storyName="Scroll to child component";const ny=ts;ny.storyName="Example";const vo={title:"Components / Behavior / Scrollable",component:Ut,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},includeStories:["_DefaultScrollable_","_ScrollToExample_","_Example_"]},y0={"Default scrollable container":"_DefaultScrollable_","Scroll to child component":"_ScrollToExample_",Example:"_Example_"};vo.parameters=vo.parameters||{};vo.parameters.docs=N(g({},vo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:y0,mdxComponentAnnotations:vo},t(ty,null))});var g0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultScrollable:vl,ScrollToExample:es,Example:ts,_DefaultScrollable_:ay,_ScrollToExample_:oy,_Example_:ny,default:vo});const xl=e=>({components:{Select:jo,Icon:le},setup(){const o=Lg,n=C("");return{args:e,selectValue:n,iconHintMajor:o}},template:`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}`}),h0={Template:xl},b0="wrapper";function sy(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(b0,N(g(g({},h0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Select",component:jo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Select"),t("p",null,"Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface."),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"select")," element in html."),t(R,{mdxType:"Canvas"},t(V,{name:"Select",args:{placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"},parameters:{docs:{source:{code:M`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}},mdxType:"Story"},xl.bind({}))),t(se,{story:"Select",mdxType:"ArgsTable"}))}sy.isMDXComponent=!0;const Tl=xl.bind({});Tl.storyName="Select";Tl.args={placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"};Tl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}};const xo={title:"Components / Forms / Select",component:jo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},includeStories:["select"]},f0={Select:"select"};xo.parameters=xo.parameters||{};xo.parameters.docs=N(g({},xo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:f0,mdxComponentAnnotations:xo},t(sy,null))});var v0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:xl,select:Tl,default:xo});const Sl=e=>({components:{SkeletonBodyText:Mn},setup(){return{args:e}},template:`
    <SkeletonBodyText v-bind:="args"/>
  `}),x0={Template:Sl},T0="wrapper";function iy(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(T0,N(g(g({},x0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Feedback indicators",component:Mn,mdxType:"Meta"}),t("h1",null,"Skeleton body text"),t("p",null,"Skeleton body text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),t(R,{mdxType:"Canvas"},t(V,{name:"Skeleton Body Text",args:{lines:3},parameters:{docs:{source:{code:M`
            <SkeletonBodyText :lines="3"/>
          `}}},mdxType:"Story"},Sl.bind({}))),t(se,{story:"Skeleton Body Text",mdxType:"ArgsTable"}))}iy.isMDXComponent=!0;const Cl=Sl.bind({});Cl.storyName="Skeleton Body Text";Cl.args={lines:3};Cl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <SkeletonBodyText :lines="3"/>
          `}}};const To={title:"Components / Feedback indicators",component:Mn,includeStories:["skeletonBodyText"]},S0={"Skeleton Body Text":"skeletonBodyText"};To.parameters=To.parameters||{};To.parameters.docs=N(g({},To.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:S0,mdxComponentAnnotations:To},t(iy,null))});var C0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Sl,skeletonBodyText:Cl,default:To});const Al=e=>({components:{SkeletonDisplayText:Pn},setup(){return{args:e}},template:`
    <SkeletonDisplayText v-bind="args"/>
  `}),A0={Template:Al},k0="wrapper";function ly(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(k0,N(g(g({},A0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Feedback indicators",component:Pn,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Skeleton display text"),t("p",null,"Skeleton display text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),t(R,{mdxType:"Canvas"},t(V,{name:"Skeleton Display Text",args:{size:"medium"},parameters:{docs:{source:{code:M`
            <SkeletonDisplayText size="medium"/>
          `}}},mdxType:"Story"},Al.bind({}))),t(se,{story:"Skeleton Display Text",mdxType:"ArgsTable"}))}ly.isMDXComponent=!0;const kl=Al.bind({});kl.storyName="Skeleton Display Text";kl.args={size:"medium"};kl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <SkeletonDisplayText size="medium"/>
          `}}};const So={title:"Components / Feedback indicators",component:Pn,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},includeStories:["skeletonDisplayText"]},L0={"Skeleton Display Text":"skeletonDisplayText"};So.parameters=So.parameters||{};So.parameters.docs=N(g({},So.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:L0,mdxComponentAnnotations:So},t(ly,null))});var w0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Al,skeletonDisplayText:kl,default:So});const Ll=(e,{argTypes:o})=>({components:{Spinner:Jt},setup(){return{args:e}},template:'<Spinner v-bind="args"/>'}),_0={Template:Ll},M0="wrapper";function ry(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(M0,N(g(g({},_0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Feedback indicators / Spinner",component:Jt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Spinner"),t("p",null,"Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can\u2019t be represented with skeleton loading components, like for data charts."),t(R,{mdxType:"Canvas"},t(V,{name:"Spinner",height:"60px",args:{accessibilityLabel:"Spinner example",size:"large"},parameters:{docs:{source:{code:M`
            <Spinner v-bind="props"/>
          `}}},mdxType:"Story"},Ll.bind({}))),t(se,{story:"Spinner",mdxType:"ArgsTable"}))}ry.isMDXComponent=!0;const wl=Ll.bind({});wl.storyName="Spinner";wl.args={accessibilityLabel:"Spinner example",size:"large"};wl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <Spinner v-bind="props"/>
          `}}};const Co={title:"Components / Feedback indicators / Spinner",component:Jt,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["spinner"]},P0={Spinner:"spinner"};Co.parameters=Co.parameters||{};Co.parameters.docs=N(g({},Co.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:P0,mdxComponentAnnotations:Co},t(ry,null))});var N0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ll,spinner:wl,default:Co});const _l=(e,{argTypes:o})=>({components:{Stack:Re,StackItem:bt,Badge:at},setup(){return{args:e}},template:`<Stack v-bind="args">
    <Badge> Paid </Badge>
    <Badge> Processing </Badge>
    <Badge> Fulfilled </Badge>
    <Badge> Completed </Badge>
  </Stack>`}),on=(e,{argTypes:o})=>({components:{Stack:Re,StackItem:bt,Badge:at},template:`<Stack noItemWrap>
    <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
    <StackItem> <Badge> Processing </Badge> </StackItem>
    <StackItem> <Badge> Completed </Badge> </StackItem>
  </Stack>`});on.storyName="Fill the remaining space";on.parameters={docs:{source:{code:M`
        <Stack noItemWrap>
          <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
          <StackItem> <Badge> Processing </Badge> </StackItem>
          <StackItem> <Badge> Completed </Badge> </StackItem>
        </Stack>
      `}}};const B0={Template:_l,SingleFillItem:on},I0="wrapper";function cy(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(I0,N(g(g({},B0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Structure / Stack",component:Re,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Stack"),t("p",null,"Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack\u2019s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack."),t("br",null),t("br",null),t("h3",null,"A single item fills the remaining space"),t(R,{mdxType:"Canvas"},t(V,{story:on,height:"65px",name:"_SingleFillItem_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(V,{name:"Stack",height:"60px",parameters:{docs:{source:{code:M`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}},mdxType:"Story"},_l.bind({}))),t(se,{story:"Stack",mdxType:"ArgsTable"}))}cy.isMDXComponent=!0;const D0=on,Tc=_l.bind({});Tc.storyName="Stack";Tc.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}};const Ao={title:"Components / Structure / Stack",component:Re,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SingleFillItem_","stack"]},$0={_SingleFillItem_:"_SingleFillItem_",Stack:"stack"};Ao.parameters=Ao.parameters||{};Ao.parameters.docs=N(g({},Ao.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:$0,mdxComponentAnnotations:Ao},t(cy,null))});var F0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:_l,SingleFillItem:on,_SingleFillItem_:D0,stack:Tc,default:Ao});const Ml=e=>({components:{Subheading:aa},setup(){return{args:e}},template:'<Subheading v-bind="args">Accounts</Subheading>'}),E0={Template:Ml},O0="wrapper";function uy(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(O0,N(g(g({},E0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Titles and text  / Subheading",component:aa,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Subheading"),t("p",null,"Subheadings are used for the title of any sub-sections in top-level page sections."),t(R,{mdxType:"Canvas"},t(V,{name:"Subheading",inline:!1,height:"30px",args:{element:"h3"},parameters:{docs:{source:{code:M`
            <Subheading>Accounts</Subheading>
          `}}},mdxType:"Story"},Ml.bind({}))),t(se,{story:"Subheading",mdxType:"ArgsTable"}))}uy.isMDXComponent=!0;const Pl=Ml.bind({});Pl.storyName="Subheading";Pl.args={element:"h3"};Pl.parameters={storySource:{source:`args => ({
  components: {
    Subheading
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Subheading v-bind="args">Accounts</Subheading>\`
})`},docs:{source:{code:M`
            <Subheading>Accounts</Subheading>
          `}}};const ko={title:"Components / Titles and text  / Subheading",component:aa,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},includeStories:["subheading"]},q0={Subheading:"subheading"};ko.parameters=ko.parameters||{};ko.parameters.docs=N(g({},ko.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:q0,mdxComponentAnnotations:ko},t(uy,null))});var R0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ml,subheading:Pl,default:ko}),id=Object.freeze,V0=Object.defineProperty,dy=(e,o)=>id(V0(e,"raw",{value:id(o||e.slice())})),ld,rd;const Nl=e=>({components:{Tag:Bn},setup(){return{args:e}},methods:{removeHandle(){alert("Removed")},clickHandle(){alert("Clicked")}},template:`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>`}),H0={Template:Nl},U0="wrapper";function py(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(U0,N(g(g({},H0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Tag",component:Bn,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Tag"),t("p",null,"Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants."),t(R,{mdxType:"Canvas"},t(V,{name:"Tag",height:"30px",args:{disabled:!1},parameters:{docs:{source:{code:M(ld||(ld=dy([`
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
          `])))}}},mdxType:"Story"},Nl.bind({}))),t(se,{story:"Tag",mdxType:"ArgsTable"}))}py.isMDXComponent=!0;const Bl=Nl.bind({});Bl.storyName="Tag";Bl.args={disabled:!1};Bl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M(rd||(rd=dy([`
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
          `])))}}};const Lo={title:"Components / Forms / Tag",component:Bn,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["tag"]},j0={Tag:"tag"};Lo.parameters=Lo.parameters||{};Lo.parameters.docs=N(g({},Lo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:j0,mdxComponentAnnotations:Lo},t(py,null))});var z0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Nl,tag:Bl,default:Lo});const as=e=>({components:{TextContainer:At},setup(){return{args:e}},template:`
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
  `});as.parameters={docs:{source:{code:M`
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
      `}}};const W0={Template:as},G0="wrapper";function my(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(G0,N(g(g({},W0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Titles and text / Text container",component:At,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Text container"),t("p",null,"A text container is used to wrap text elements such as paragraphs, headings, and lists to give them vertical spacing."),t(R,{mdxType:"Canvas"},t(V,{story:as,name:"Text container",height:"250px",mdxType:"Story"})),t(se,{story:"Text container",mdxType:"ArgsTable"}))}my.isMDXComponent=!0;const yy=as;yy.storyName="Text container";const wo={title:"Components / Titles and text / Text container",component:At,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},X0={"Text container":"_Template_"};wo.parameters=wo.parameters||{};wo.parameters.docs=N(g({},wo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:X0,mdxComponentAnnotations:wo},t(my,null))});var K0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:as,_Template_:yy,default:wo});const os=e=>({components:{TextField:we},template:`
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
  `,data(){return{name:"Polaris"}}});os.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const ns=(e,{argTypes:o})=>({components:{TextField:we},template:`
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
  </div>`,data(){return{numberData:"1"}}});ns.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const ss=(e,{argTypes:o})=>({components:{TextField:we},template:`
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
  </div>`,data(){return{address:"156 Xa Dan 2"}}});ss.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const is=(e,{argTypes:o})=>({components:{TextField:we,ChoiceList:Mt},template:`
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
  </div>`,data(){return{months:"12",choices:[{label:"Gift cards never expire",value:"no"},{label:"Gift cards expire",value:"yes"}],selected:"yes"}}});is.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const ls=(e,{argTypes:o})=>({components:{TextField:we,Stack:Re,StackItem:bt},template:`
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
  </Stack>`,data(){return{price:"1"}}});ls.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const rs=(e,{argTypes:o})=>({components:{TextField:we},template:`
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
  `});rs.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const cs=(e,{argTypes:o})=>({components:{TextField:we},template:`
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
  `,data(){return{price:"10"}}});cs.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const us=(e,{argTypes:o})=>({components:{TextField:we,Select:jo},template:`
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
  `,data(){return{weight:"10",unit:"kg"}}});us.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const ds=(e,{argTypes:o})=>({components:{TextField:we},template:`
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
  `,data(){return{storeName:"Jaded Pixel"}}});ds.parameters={docs:{source:{state:"close",code:M`
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
      `}}};const Il=e=>({components:{TextField:we},setup(){return{args:e}},template:`
    <TextField v-bind="args" autoComplete="off">
      <template #label>Example text field</template>
    </TextField>
  `}),Y0={DefaultTextField:os,NumberField:ns,MultiLineField:ss,HiddenLabelField:is,RightAlignedField:ls,HelpTextField:rs,PrefixSuffixField:cs,ConnectedField:us,ClearBtnField:ds,ExampleField:Il},Z0="wrapper";function gy(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(Z0,N(g(g({},Y0),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Forms / Text Field",component:we,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Text field"),t("p",null,"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."),t("br",null),t("br",null),t("h3",null,"Default text field"),t("p",null,"Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options."),t(R,{mdxType:"Canvas"},t(V,{story:os,name:"Default text field",mdxType:"Story"})),t("h3",null,"Number field"),t("p",null,"Use when input text should be a number."),t(R,{mdxType:"Canvas"},t(V,{story:ns,name:"Number field",mdxType:"Story"})),t("h3",null,"Multiline text field"),t("p",null,`Use when the expected input could be more than one line.
The field will automatically grow to accommodate additional text.`),t(R,{mdxType:"Canvas"},t(V,{story:ss,name:"Multiline text field",height:"150px",mdxType:"Story"})),t("h3",null,"Text field with hidden label"),t("p",null,`Use to visually hide the label when the text field's purpose is clear from context.
The label will remain available to screen readers. Use this option with care. In almost all cases, show the label.`),t(R,{mdxType:"Canvas"},t(V,{story:is,name:"Text field with hidden label",mdxType:"Story"})),t("h3",null,"Text field with right aligned text"),t("p",null,"Use when input text should be aligned right."),t(R,{mdxType:"Canvas"},t(V,{story:ls,name:"Text field with right aligned text",mdxType:"Story"})),t("h3",null,"Text field with help text"),t("p",null,`Use to show short instructional content below the text field.
Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements).
If more explanation is needed, link to the Shopify Help Center.`),t(R,{mdxType:"Canvas"},t(V,{story:rs,name:"Text field with help text",mdxType:"Story"})),t("h3",null,"Text field with prefix or suffix"),t("p",null,"Use as a special form of help text that works best inline."),t("ul",null,t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use a prefix for things like currency symbols (\u201C$\u201D, \u201C\xA5\u201D, \u201C\xA3\u201D).")),t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use suffix for things like units of measure (\u201Cin\u201D, \u201Ccm\u201D)."))),t(R,{mdxType:"Canvas"},t(V,{story:cs,name:"Text field with prefix or suffix",mdxType:"Story"})),t("h3",null,"Text field with connected fields"),t("p",null,"Use when a text field and several related fields make up a logical unit."),t("p",null,`If inputting weight as a number and a separate unit of measurement,
use a text field with a select dropdown menu (for example \u201Ckg\u201D, \u201Clb\u201D) as a connected field.`),t(R,{mdxType:"Canvas"},t(V,{story:us,name:"Text field with connected fields",mdxType:"Story"})),t("h3",null,"Text field with clear button"),t("p",null,"Use to allow merchants to clear the content from a text field."),t(R,{mdxType:"Canvas"},t(V,{story:ds,name:"Text field with clear button",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(V,{story:Il,name:"Example",parameters:{docs:{source:{code:M`
          <TextField v-bind="args" autoComplete="off">
            <template #label>Example text field</template>
          </TextField>
          `}}},mdxType:"Story"})),t(se,{story:"Example",mdxType:"ArgsTable"}))}gy.isMDXComponent=!0;const hy=os;hy.storyName="Default text field";const by=ns;by.storyName="Number field";const fy=ss;fy.storyName="Multiline text field";const vy=is;vy.storyName="Text field with hidden label";const xy=ls;xy.storyName="Text field with right aligned text";const Ty=rs;Ty.storyName="Text field with help text";const Sy=cs;Sy.storyName="Text field with prefix or suffix";const Cy=us;Cy.storyName="Text field with connected fields";const Ay=ds;Ay.storyName="Text field with clear button";const ky=Il;ky.storyName="Example";const _o={title:"Components / Forms / Text Field",component:we,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},includeStories:["_DefaultTextField_","_NumberField_","_MultiLineField_","_HiddenLabelField_","_RightAlignedField_","_HelpTextField_","_PrefixSuffixField_","_ConnectedField_","_ClearBtnField_","_ExampleField_"]},Q0={"Default text field":"_DefaultTextField_","Number field":"_NumberField_","Multiline text field":"_MultiLineField_","Text field with hidden label":"_HiddenLabelField_","Text field with right aligned text":"_RightAlignedField_","Text field with help text":"_HelpTextField_","Text field with prefix or suffix":"_PrefixSuffixField_","Text field with connected fields":"_ConnectedField_","Text field with clear button":"_ClearBtnField_",Example:"_ExampleField_"};_o.parameters=_o.parameters||{};_o.parameters.docs=N(g({},_o.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:Q0,mdxComponentAnnotations:_o},t(gy,null))});var J0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultTextField:os,NumberField:ns,MultiLineField:ss,HiddenLabelField:is,RightAlignedField:ls,HelpTextField:rs,PrefixSuffixField:cs,ConnectedField:us,ClearBtnField:ds,ExampleField:Il,_DefaultTextField_:hy,_NumberField_:by,_MultiLineField_:fy,_HiddenLabelField_:vy,_RightAlignedField_:xy,_HelpTextField_:Ty,_PrefixSuffixField_:Sy,_ConnectedField_:Cy,_ClearBtnField_:Ay,_ExampleField_:ky,default:_o});const Dl=(e,{argTypes:o})=>({components:{TextStyle:yt},setup(){return{args:e}},template:'<TextStyle v-bind="args"> Hello </TextStyle>'}),e$={Template:Dl},t$="wrapper";function Ly(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(t$,N(g(g({},e$),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Titles and text / Text Style",component:yt,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Text Style"),t("p",null,"Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text."),t(R,{mdxType:"Canvas"},t(V,{name:"Text Style",height:"60px",parameters:{docs:{source:{code:M`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}},mdxType:"Story"},Dl.bind({}))),t(se,{story:"Text Style",mdxType:"ArgsTable"}))}Ly.isMDXComponent=!0;const Sc=Dl.bind({});Sc.storyName="Text Style";Sc.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}};const Mo={title:"Components / Titles and text / Text Style",component:yt,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["textStyle"]},a$={"Text Style":"textStyle"};Mo.parameters=Mo.parameters||{};Mo.parameters.docs=N(g({},Mo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:a$,mdxComponentAnnotations:Mo},t(Ly,null))});var o$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Dl,textStyle:Sc,default:Mo});const $l=(e,{argTypes:o})=>({components:{Thumbnail:In},setup(){return{args:e}},computed:{thumbnailSource(){return e.source==="CirclePlusMinor"?xd:e.source},bindProps(){return{size:e.size,source:this.thumbnailSource,alt:e.alt}}},template:'<Thumbnail v-bind="bindProps" />'}),n$={Template:$l},s$="wrapper";function wy(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(s$,N(g(g({},n$),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Images and Icons / Thumbnail",component:In,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Thumbnail"),t("p",null,"Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context."),t(R,{mdxType:"Canvas"},t(V,{name:"Thumbnail",height:"60px",args:{alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"},parameters:{docs:{source:{code:M`
            <Thumbnail v-bind="props" />
          `}}},mdxType:"Story"},$l.bind({}))),t(se,{story:"Thumbnail",mdxType:"ArgsTable"}))}wy.isMDXComponent=!0;const Fl=$l.bind({});Fl.storyName="Thumbnail";Fl.args={alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"};Fl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:M`
            <Thumbnail v-bind="props" />
          `}}};const Po={title:"Components / Images and Icons / Thumbnail",component:In,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},includeStories:["thumbnail"]},i$={Thumbnail:"thumbnail"};Po.parameters=Po.parameters||{};Po.parameters.docs=N(g({},Po.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:i$,mdxComponentAnnotations:Po},t(wy,null))});var l$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:$l,thumbnail:Fl,default:Po});const El=e=>({components:{Frame:jt,Toast:Nn,Button:ye},setup(){const o=C(!1),n=C(!1),s=C(!1);return{toastActive1:o,toggleToast1:()=>{o.value=!o.value},toastActive2:n,toggleToast2:()=>{n.value=!n.value},toastActive3:s,toggleToast3:()=>{s.value=!s.value},undoHandler:()=>{alert("Undo clicked")}}},template:`
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
  `}),r$={Template:El},c$="wrapper";function _y(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(c$,N(g(g({},r$),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Feedback indicators / Toast",component:Nn,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},mdxType:"Meta"}),t("h1",null,"Toast"),t("p",null,"The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action."),t(R,{mdxType:"Canvas"},t(V,{name:"Toast",inline:!1,height:"300px",parameters:{docs:{source:{code:M`
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
          `}}},mdxType:"Story"},El.bind({}))),t(se,{story:"Toast",mdxType:"ArgsTable"}))}_y.isMDXComponent=!0;const Cc=El.bind({});Cc.storyName="Toast";Cc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
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
          `}}};const No={title:"Components / Feedback indicators / Toast",component:Nn,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},includeStories:["toast"]},u$={Toast:"toast"};No.parameters=No.parameters||{};No.parameters.docs=N(g({},No.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:u$,mdxComponentAnnotations:No},t(_y,null))});var d$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:El,toast:Cc,default:No});const Ol=e=>({components:{Tooltip:ha,TextStyle:yt},setup(){return{args:e}},template:`<Tooltip v-bind="args" :content="args.content1">
    <TextStyle variation="strong">Order #1001</TextStyle>
  </Tooltip>`}),nn=e=>({components:{Button:ye,ButtonGroup:ot,Tooltip:ha,TextField:we},template:`
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
  `});nn.storyName="Tooltip visible only with child interaction";nn.parameters={docs:{source:{code:M`
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
      `}}};const p$={Template:Ol,childInteraction:nn},m$="wrapper";function My(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(m$,N(g(g({},p$),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Overlays / Tooltip",component:ha,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Tooltip"),t("p",null,"Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when merchants hover, focus, tap, or click."),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("h3",null,"A single item fills the remaining space"),t(R,{withSource:"close",mdxType:"Canvas"},t(V,{story:nn,height:"150px",inline:!1,name:"_childInteraction_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(V,{inline:!1,name:"Tooltip",height:"100px",args:{active:!0,content1:"This order has shipping labels."},parameters:{docs:{source:{code:M`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}},mdxType:"Story"},Ol.bind({}))),t(se,{story:"Tooltip",mdxType:"ArgsTable"}))}My.isMDXComponent=!0;const y$=nn,ql=Ol.bind({});ql.storyName="Tooltip";ql.args={active:!0,content1:"This order has shipping labels."};ql.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:M`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}};const Bo={title:"Components / Overlays / Tooltip",component:ha,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_childInteraction_","tooltip"]},g$={_childInteraction_:"_childInteraction_",Tooltip:"tooltip"};Bo.parameters=Bo.parameters||{};Bo.parameters.docs=N(g({},Bo.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:g$,mdxComponentAnnotations:Bo},t(My,null))});var h$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ol,childInteraction:nn,_childInteraction_:y$,tooltip:ql,default:Bo});const Rl=e=>({components:{Frame:jt,TopBar:Dn,TopBarUserMenu:Hr,TopBarMenu:ii,Icon:le,VisuallyHidden:et,TopBarSearchField:Vr,ActionList:Ze},setup(){const o={width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},n=C(!1),s=C(!1),i=C(!1),r=C(""),u=S=>{i.value=S.length>0},m=()=>{r.value="",i.value=!1},x=()=>{n.value=!n.value},v=()=>{s.value=!s.value},f=C([{items:[{content:"Back to Shopify",icon:$o}]},{items:[{content:"Community forums"}]}]),T=C({title:"Another Message",description:"This is a description of message",action:{onClick:()=>{alert("clicked")},content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}});return{logo:o,isSearchActive:i,searchValue:r,handleSearchChange:u,toggleIsSecondaryMenuOpen:v,userMenuAction:f,userMenuMessage:T,toggleUserMenu:x,isUserMenuOpen:n,isSecondaryMenuOpen:s,handleSearchResultsDismiss:m,QuestionMarkMajor:fd}},template:`
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
  `}),b$={Template:Rl},f$="wrapper";function Py(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(f$,N(g(g({},b$),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Navigation / Top Bar",component:Dn,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Top Bar"),t("p",null,"The top bar is a header component that allows merchants to search, access menus, and navigate by clicking on the logo. It's always visible at the top of interfaces like Shopify or Shopify Plus. Third-party apps that use the top bar can customize the color to match their brand using the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-app-provider"},"app provider")," component and are required to use their own logo."),t(R,{mdxType:"Canvas"},t(V,{name:"Top Bar",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:M`
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
          `}}},mdxType:"Story"},Rl.bind({}))),t(se,{story:"Top Bar",mdxType:"ArgsTable"}),t("a",{name:"subcomponent-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu")),t("p",null,"A component that composes together an activator and a popover containing an action list to create a dropdown menu."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"ActionListProps","['sections']"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu. Follow Action List component props")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the menu is currently open")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@open"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening the menu popover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@close"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle closing the menu popover")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Slots"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"#activatorContent"),t("td",{parentName:"tr",align:null}),t("td",{parentName:"tr",align:null},"Accepts an activator component that renders inside of a button that opens the menu")))),t("br",null),t("a",{name:"subcomponent-user-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar user menu")),t("p",null,"A specialized menu component that is activated by a user avatar."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"{items: IconableAction[]}[]"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"name"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string detailing the merchant's full name to be displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"detail"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string allowing further details on the merchant's name displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"initials"),t("td",{parentName:"tr",align:null},"AvatarProps","['initials']"),t("td",{parentName:"tr",align:null},"The merchant's initials, rendered in place of an avatar image when not provided")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"avatar"),t("td",{parentName:"tr",align:null},"AvatarProps","['source']"),t("td",{parentName:"tr",align:null},"An avatar image representing the merchant")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the user menu is currently open")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Event"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@toggle"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening and closing the user menu")))),t("br",null),t("a",{name:"type-message"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu message")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A title for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"description"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A description for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},"{onClick(): void; content: string}"),t("td",{parentName:"tr",align:null},"An action to render near the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"link"),t("td",{parentName:"tr",align:null},"{to: string; content: string}"),t("td",{parentName:"tr",align:null},"A link to view the content of the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"{content: string; status: BadgeProps","['status']","}"),t("td",{parentName:"tr",align:null},"A badge to render near the message")))),t("br",null),t("a",{name:"subcomponent-search-field"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar search field")),t("p",null,"A text field component that is tailor-made for a search use-case."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"value"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Initial value for the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"placeholder"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Hint text to display")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"focused"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force the focus state on the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"active"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force a state where search is active but the text field component is not focused")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@change(value: string)"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when value is changed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@focus"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when input is focused")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@blur"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when focus is removed")))))}Py.isMDXComponent=!0;const Ac=Rl.bind({});Ac.storyName="Top Bar";Ac.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:M`
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
          `}}};const Io={title:"Components / Navigation / Top Bar",component:Dn,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},includeStories:["topBar"]},v$={"Top Bar":"topBar"};Io.parameters=Io.parameters||{};Io.parameters.docs=N(g({},Io.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:v$,mdxComponentAnnotations:Io},t(Py,null))});var x$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Rl,topBar:Ac,default:Io});const Vl=e=>({components:{VisuallyHidden:et},template:`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  `}),T$={Template:Vl},S$="wrapper";function Ny(n){var s=n,{components:e}=s,o=Q(s,["components"]);return t(S$,N(g(g({},T$),o),{components:e,mdxType:"MDXLayout"}),t(oe,{title:"Components / Titles and text / Visually Hidden",component:et,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Visually hidden"),t("p",null,"Use when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden."),t(R,{mdxType:"Canvas"},t(V,{name:"Visually Hidden",parameters:{docs:{source:{code:M`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}},mdxType:"Story"},Vl.bind({}))),t(se,{story:"Visually Hidden",mdxType:"ArgsTable"}))}Ny.isMDXComponent=!0;const kc=Vl.bind({});kc.storyName="Visually Hidden";kc.parameters={storySource:{source:`args => ({
  components: {
    VisuallyHidden
  },
  template: \`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  \`
})`},docs:{source:{code:M`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}};const Do={title:"Components / Titles and text / Visually Hidden",component:et,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},includeStories:["visuallyHidden"]},C$={"Visually Hidden":"visuallyHidden"};Do.parameters=Do.parameters||{};Do.parameters.docs=N(g({},Do.parameters.docs||{}),{page:()=>t(ae,{mdxStoryNameToKey:C$,mdxComponentAnnotations:Do},t(Ny,null))});var A$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vl,visuallyHidden:kc,default:Do});function By(e){return{"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":kN,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":MN,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":IN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":RN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":jN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":XN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":JN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":rB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":mB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":bB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":TB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":kB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":MB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":DB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":OB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":HB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":WB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":YB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":eI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":nI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":cI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":yI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":fI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":CI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":wI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":BI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":FI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":VI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":zI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":KI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":JI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":oD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":lD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":dD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":gD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":SD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":LD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":ND,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":$D,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":RD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":zD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":QD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":a0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":i0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":d0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":g0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":v0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":C0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":w0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":N0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":F0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":R0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":z0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":K0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":J0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":o$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":l$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":d$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":h$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":x$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":A$}[e]}Object.assign(By,{keys:()=>["/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx"],resolve:e=>({"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":"./.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":"./.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":"./.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":"./src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":"./src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":"./src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":"./src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":"./src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":"./src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":"./src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":"./src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":"./src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":"./src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":"./src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":"./src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":"./src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":"./src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":"./src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":"./src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":"./src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":"./src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":"./src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":"./src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":"./src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":"./src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":"./src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":"./src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":"./src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":"./src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":"./src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":"./src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":"./src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":"./src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":"./src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":"./src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":"./src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":"./src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":"./src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":"./src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":"./src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":"./src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":"./src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":"./src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":"./src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":"./src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":"./src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":"./src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":"./src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":"./src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":"./src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":"./src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":"./src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":"./src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":"./src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":"./src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":"./src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":"./src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":"./src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":"./src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":"./src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":"./src/components/VisuallyHidden/README.stories.mdx"})[e]});function k$(){wg(By,{hot:!1},!1)}const L$=[Ig,Dg,$g,Fg,Eg,Og,qg,Rg,Vg,Hg,Ug,jg,TN].filter(Boolean);L$.forEach(e=>{Object.keys(e).forEach(o=>{const n=e[o];switch(o){case"args":case"argTypes":return Bg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(s=>Ng(s,!1));case"loaders":return n.forEach(s=>Pg(s,!1));case"parameters":return Fc(g({},n),!1);case"argTypesEnhancers":return n.forEach(s=>Mg(s));case"argsEnhancers":return n.forEach(s=>_g(s));case"globals":case"globalTypes":{const s={};return s[o]=n,Fc(s,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});k$();
//# sourceMappingURL=iframe.b4539230.js.map
