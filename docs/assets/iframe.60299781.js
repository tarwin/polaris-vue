var Zy=Object.defineProperty,Qy=Object.defineProperties;var Jy=Object.getOwnPropertyDescriptors;var fs=Object.getOwnPropertySymbols;var $c=Object.prototype.hasOwnProperty,Fc=Object.prototype.propertyIsEnumerable;var Kl=(e,o,n)=>o in e?Zy(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,v=(e,o)=>{for(var n in o||(o={}))$c.call(o,n)&&Kl(e,n,o[n]);if(fs)for(var n of fs(o))Fc.call(o,n)&&Kl(e,n,o[n]);return e},N=(e,o)=>Qy(e,Jy(o));var J=(e,o)=>{var n={};for(var s in e)$c.call(e,s)&&o.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&fs)for(var s of fs(e))o.indexOf(s)<0&&Fc.call(e,s)&&(n[s]=e[s]);return n};var ut=(e,o,n)=>(Kl(e,typeof o!="symbol"?o+"":o,n),n);import{c as eg,a as xd,b as tg,w as ag,i as og,d as M,o as xe,e as ct,f as Vt,s as ng,t as Ps,g as Us,h as Lr,r as C,j as m,k as Ht,l as d,m as f,n as ye,u as a,p as Ge,q as F,v as l,x as ve,y as Fe,z as Td,A,B as y,C as Ee,D as u,E as Pe,F as L,G as k,H as z,I as P,J as X,K as ie,L as Re,M as Qe,N as kt,O as be,P as je,Q as de,R as wr,S as Ec,T as qo,U as _s,V as sg,W as ig,X as lg,Y as Ut,Z as Sd,_ as fn,$ as Pr,a0 as Cd,a1 as Ad,a2 as ya,a3 as rg,a4 as cg,a5 as _r,a6 as dn,a7 as Jt,a8 as ug,a9 as dg,aa as pg,ab as mg,ac as Ms,ad as kd,ae as Et,af as yg,ag as gg,ah as hg,ai as bg,aj as Ns,ak as Bs,al as fg,am as vg,an as Oc,ao as qc,ap as xg,aq as Tg,ar as Sg,as as Ld,at as Cg,au as Ag,av as wd,aw as Rc,ax as kg,ay as Lg,az as wg,aA as cr,aB as Is,aC as ur,aD as Pg,aE as Pd,aF as _g,aG as Mg,aH as Tn,aI as t,aJ as oe,aK as ne,aL as _,aM as Ds,aN as dr,aO as Ng,aP as Vc,aQ as V,aR as H,aS as ce,aT as _d,aU as pr,aV as Bg,aW as Hc,aX as Ig,aY as Md,aZ as Nd,a_ as Dg,a$ as Bd,b0 as $g,b1 as Fg,b2 as Eg,b3 as Og,b4 as qg,b5 as Rg,b6 as Vg,b7 as Hg,b8 as Ug,b9 as Uc,ba as jg,bb as Wg,bc as zg,bd as Gg,be as Xg,bf as Kg,bg as Yg,bh as Zg,bi as Qg,bj as Jg,bk as eh,bl as th,bm as ah,bn as oh,bo as nh,bp as sh,bq as ih}from"./vendor.accfa1dc.js";const lh=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};lh();const Id=eg({page:"preview"});xd.setChannel(Id);window.__STORYBOOK_ADDONS_CHANNEL__=Id;const{SERVER_CHANNEL_URL:jc}=ag;if(jc){const e=tg({url:jc});xd.setServerChannel(e),window.__STORYBOOK_SERVER_CHANNEL__=e}const $s='a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]:not([tabindex="-1"])',mr="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",rh='a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';function js(e,o){if(e.matches)return e.matches(o);const n=(e.ownerDocument||document).querySelectorAll(o);let s=n.length;for(;s>=0&&n.item(s)!==e;)return s-=1,s>-1}function Yl(e){const o="a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";return js(e,o)?e:e.querySelector(o)}function ch(e,o){const n=[...document.querySelectorAll(mr)],s=n.indexOf(e)+1,i=n.slice(s);for(const r of i)if(og(r)&&(!o||o&&o(r)))return r;return null}function uh(e,o){const n=ch(e,o);return n&&n instanceof HTMLElement?(n.focus(),!0):!1}function Mr(e,o=!0){return!o&&js(e,mr)?e:e.querySelector(mr)}function Dd(e){return e.querySelectorAll(rh)}function $d(e,o){let n=0;for(const s of e){if(s===o)break;n+=1}return n===e.length?-1:n}function dh(e,o){const n=Dd(e),s=$d(n,o);s===-1?n[0].focus():n[(s-1+n.length)%n.length].focus()}function ph(e,o){const n=Dd(e),s=$d(n,o);s===-1?n[0].focus():n[(s+1)%n.length].focus()}const ft=e=>{e.currentTarget.blur()};function Sn(e,o=!0){var n;(n=Mr(e,o))==null||n.focus()}function Fd(e,o=!0){return!o&&js(e,$s)?e:e.querySelector($s)}function Ed(e,o=!0){if(!o&&js(e,$s))return e;const n=e.querySelectorAll($s);return n[n.length-1]}function mh(e,o=!0){const n=Fd(e,o);return n?(n.focus(),!0):!1}function yh(e,o=!0){const n=Ed(e,o);return n?(n.focus(),!0):!1}const gh={inheritAttrs:!1,render(){return null}},yt=M(N(v({},gh),{props:{keyCode:{type:String,required:!0},keyEvent:{type:String,default:"keyup"},handler:{type:Function,required:!0},useCapture:{type:Boolean},options:{type:Object}},setup(e){const o=e;function n(s){s.key===o.keyCode&&o.handler(s)}return xe(()=>document.addEventListener(o.keyEvent,n,o.useCapture||o.options)),ct(()=>document.removeEventListener(o.keyEvent,n,o.useCapture||o.options)),()=>{}}}));yt.__docgenInfo={exportName:"default",displayName:"KeypressListener",description:"",tags:{},props:[{name:"keyCode",type:{name:"String as () => Key"},required:!0},{name:"keyEvent",type:{name:"String as () => KeyEvent"},defaultValue:{func:!1,value:"'keyup'"}},{name:"handler",type:{name:"func"},required:!0},{name:"useCapture",type:{name:"boolean"}},{name:"options",type:{name:"Object as () => AddEventListenerOptions"}}]};var Ue=(e=>(e.Backspace="Backspace",e.Tab="Tab",e.Enter="Enter",e.Shift="Shift",e.Ctrl="Ctrl",e.Alt="Alt",e.Pause="Pause",e.CapsLock="CapsLock",e.Escape="Escape",e.Space="Space",e.PageUp="PageUp",e.PageDown="PageDown",e.End="End",e.Home="Home",e.ArrowRight="ArrowRight",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.Insert="Insert",e.Delete="Delete",e.Key0="Key0",e.Key1="Key1",e.Key2="Key2",e.Key3="Key3",e.Key4="Key4",e.Key5="Key5",e.Key6="Key6",e.Key7="Key7",e.Key8="Key8",e.Key9="Key9",e.KeyA="KeyA",e.KeyB="KeyB",e.KeyC="KeyC",e.KeyD="KeyD",e.KeyE="KeyE",e.KeyF="KeyF",e.KeyG="KeyG",e.KeyH="KeyH",e.KeyI="KeyI",e.KeyJ="KeyJ",e.KeyK="KeyK",e.KeyL="KeyL",e.KeyM="KeyM",e.KeyN="KeyN",e.KeyO="KeyO",e.KeyP="KeyP",e.KeyQ="KeyQ",e.KeyR="KeyR",e.KeyS="KeyS",e.KeyT="KeyT",e.KeyU="KeyU",e.KeyV="KeyV",e.KeyW="KeyW",e.KeyX="KeyX",e.KeyY="KeyY",e.KeyZ="KeyZ",e.LeftMeta="LeftMeta",e.RightMeta="RightMeta",e.Select="Select",e.Numpad0="Numpad0",e.Numpad1="Numpad1",e.Numpad2="Numpad2",e.Numpad3="Numpad3",e.Numpad4="Numpad4",e.Numpad5="Numpad5",e.Numpad6="Numpad6",e.Numpad7="Numpad7",e.Numpad8="Numpad8",e.Numpad9="Numpad9",e.Multiply="Multiply",e.Add="Add",e.Subtract="Subtract",e.Decimal="Decimal",e.Divide="Divide",e.F1="F1",e.F2="F2",e.F3="F3",e.F4="F4",e.F5="F5",e.F6="F6",e.F7="F7",e.F8="F8",e.F9="F9",e.F10="F10",e.F11="F11",e.F12="F12",e.NumLock="NumLock",e.ScrollLock="ScrollLock",e.Semicolon="Semicolon",e.Equals="Equals",e.Comma="Comma",e.Dash="Dash",e.Period="Period",e.ForwardSlash="ForwardSlash",e.GraveAccent="GraveAccent",e.OpenBracket="OpenBracket",e.BackSlash="BackSlash",e.CloseBracket="CloseBracket",e.SingleQuote="SingleQuote",e))(Ue||{});const hh="Polaris-ActionList",bh="Polaris-ActionList__Actions",fh="Polaris-ActionList__Section",vh="Polaris-ActionList__Title",xh="Polaris-ActionList--firstSectionWithTitle",Th="Polaris-ActionList__Item",Sh="Polaris-ActionList--active",Ch="Polaris-ActionList--destructive",Ah="Polaris-ActionList--disabled",kh="Polaris-ActionList__Prefix",Lh="Polaris-ActionList__Suffix",wh="Polaris-ActionList__Content",Ph="Polaris-ActionList__ContentBlock",_h="Polaris-ActionList__ContentBlockInner",Mh="Polaris-ActionList__Text";var Ke={ActionList:hh,"Section-withoutTitle":"Polaris-ActionList__Section--withoutTitle",Actions:bh,Section:fh,Title:vh,firstSectionWithTitle:xh,Item:Th,active:Sh,destructive:Ch,disabled:Ah,Prefix:kh,Suffix:Lh,Content:wh,ContentBlock:Ph,ContentBlockInner:_h,Text:Mh};class ba{constructor({top:o=0,left:n=0,width:s=0,height:i=0}={}){ut(this,"top");ut(this,"left");ut(this,"width");ut(this,"height");this.top=o,this.left=n,this.width=s,this.height=i}static get zero(){return new ba}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}}function qt(e){if(!(e instanceof Element))return new ba({width:window.innerWidth,height:window.innerHeight});const o=e.getBoundingClientRect();return new ba({top:o.top,left:o.left,width:o.width,height:o.height})}const vs=1e3/60;function Od(e){return e===document}function Nh(e){return Od(e)?document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop}function Bh(e,o){const n=e.left,s=e.left+e.width,i=o.left;return o.left+o.width<n||s<i}class Ih{constructor(o){ut(this,"stickyItems",[]);ut(this,"stuckItems",[]);ut(this,"container",null);ut(this,"topBarOffset",0);ut(this,"handleResize",Vt(()=>{this.manageStickyItems()},vs,{leading:!0,trailing:!0,maxWait:vs}));ut(this,"handleScroll",Vt(()=>{this.manageStickyItems()},vs,{leading:!0,trailing:!0,maxWait:vs}));o&&this.setContainer(o)}registerStickyItem(o){this.stickyItems.push(o)}unregisterStickyItem(o){const n=this.stickyItems.findIndex(({stickyNode:s})=>o===s);this.stickyItems.splice(n,1)}setContainer(o){this.container=o,Od(o)&&this.setTopBarOffset(o),this.container.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.manageStickyItems()}removeScrollListener(){this.container&&(this.container.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize))}manageStickyItems(){if(this.stickyItems.length<=0)return;const o=this.container?Nh(this.container):0,n=qt(this.container).top+this.topBarOffset;this.stickyItems.forEach(s=>{const{handlePositioning:i}=s,{sticky:r,top:c,left:p,width:T}=this.evaluateStickyItem(s,o,n);this.updateStuckItems(s,r),i(r,c,p,T)})}evaluateStickyItem(o,n,s){var I;const{stickyNode:i,placeHolderNode:r,boundingElement:c,offset:p,disableWhenStacked:T}=o;if(T&&ng().matches)return{sticky:!1,top:0,left:0,width:"auto"};const b=p?this.getOffset(i)+parseInt(Ps.spacing["5"],10):this.getOffset(i),g=n+b,h=r.getBoundingClientRect().top-s+n,x=s+b,{width:S}=r.getBoundingClientRect(),{left:w}=r.getBoundingClientRect();let B;if(c==null)B=g>=h;else{const q=i.getBoundingClientRect().height||((I=i.firstElementChild)==null?void 0:I.getBoundingClientRect().height)||0,R=c.getBoundingClientRect().bottom-q+n-s;B=g>=h&&g<R}return{sticky:B,top:x,left:w,width:S}}updateStuckItems(o,n){const{stickyNode:s}=o;n&&!this.isNodeStuck(s)?this.addStuckItem(o):!n&&this.isNodeStuck(s)&&this.removeStuckItem(o)}addStuckItem(o){this.stuckItems.push(o)}removeStuckItem(o){const{stickyNode:n}=o,s=this.stuckItems.findIndex(({stickyNode:i})=>n===i);this.stuckItems.splice(s,1)}getOffset(o){if(this.stuckItems.length===0)return 0;let n=0,s=0;const i=this.stuckItems.length,r=qt(o);for(;s<i;){const c=this.stuckItems[s].stickyNode;if(c!==o){const p=qt(c);Bh(r,p)||(n+=qt(c).height)}else break;s+=1}return n}isNodeStuck(o){return this.stuckItems.findIndex(({stickyNode:s})=>o===s)>=0}setTopBarOffset(o){const n=o.querySelector(`:not(${Us.selector}) ${Lr.selector}`);this.topBarOffset=n?n.clientHeight:0}}const Dh="Polaris-Scrollable",$h="Polaris-Scrollable--horizontal",Fh="Polaris-Scrollable--vertical",Eh="Polaris-Scrollable--verticalHasScrolling",Oh="Polaris-Scrollable--hasTopShadow",qh="Polaris-Scrollable--hasBottomShadow";var ka={Scrollable:Dh,horizontal:$h,vertical:Fh,verticalHasScrolling:Eh,hasTopShadow:Oh,hasBottomShadow:qh};const Rh=["tabindex"],jt=M({props:{vertical:{type:Boolean,default:!0},horizontal:{type:Boolean},shadow:{type:Boolean},hint:{type:Boolean},focusable:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=j=>{j.preventDefault()},i=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},r=100,c=.2,p=.2,T=["scroll","touchmove","wheel"],b=i(),g=2,h=C(null),x=C(!1),S=C(!1),w=C(0),B=C(!1),I=new Ih,q=j=>{w.value=j};Ge("stickyManagerContext",I),Ge("scrollToPositionContext",q);const R=m(()=>F(ka.Scrollable,n.vertical&&ka.vertical,n.horizontal&&ka.horizontal,x.value&&ka.hasTopShadow,S.value&&ka.hasBottomShadow,n.vertical&&B.value&&ka.verticalHasScrolling)),U=()=>{if(!h.value)return;const{scrollTop:j,scrollHeight:se,clientHeight:he}=h.value,te=Boolean(n.shadow&&!(j+he>=se)),Me=Boolean(n.shadow&&j>0&&w.value>0),$=se>he,G=se-j<=he+g;$&&G&&o("scrolled-to-bottom"),x.value=Me,S.value=te,w.value=j,B.value=$},Q=Vt(()=>{U()},50,{trailing:!0}),D=(j=!0)=>{!h.value||T.forEach(se=>{var he,te;j?(he=h.value)==null||he.addEventListener(se,s):(te=h.value)==null||te.removeEventListener(se,s)})},Y=()=>{const j=w.value*p;w.value=j<c?0:w.value-j,w.value>0?window.requestAnimationFrame(Y):D(!1)},E=()=>{if(!h.value)return;const{clientHeight:j,scrollHeight:se}=h.value;if(b||w.value>0||se<=j)return;const he=se-j;D(),w.value=he>r?r:he,window.requestAnimationFrame(Y)};return xe(()=>{!h.value||(I.setContainer(h.value),h.value.scrollTop=w.value,h.value.addEventListener("scroll",()=>{window.requestAnimationFrame(U)}),window.addEventListener("resize",Q),window.requestAnimationFrame(()=>{U(),n.hint&&E()}))}),Ht(()=>{h.value&&w.value>0&&(h.value.scrollTop=w.value)}),ct(()=>{!h.value||(h.value.removeEventListener("scroll",U),window.removeEventListener("resize",Q),I.removeScrollListener())}),(j,se)=>(l(),d("div",ye({ref_key:"scrollArea",ref:h},a(Us).props,{class:a(R),tabindex:e.focusable?0:void 0}),[f(j.$slots,"default")],16,Rh))}});jt.__docgenInfo={exportName:"default",displayName:"Scrollable",description:"",tags:{},props:[{name:"vertical",description:"Scroll content vertically",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"horizontal",description:"Scroll content horizontally",required:!1,type:{name:"boolean"}},{name:"shadow",description:"Add a shadow when content is scrollable",required:!1,type:{name:"boolean"}},{name:"hint",description:"Slightly hints content upon mounting when scrollable",required:!1,type:{name:"boolean"}},{name:"focusable",description:"Adds a tabIndex to scrollable when children are not focusable",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};class Nr extends Error{constructor(o=""){super(`${o&&`${o} `}Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-app-provider for implementation instructions.`);this.name="MissingAppProviderError"}}class Vh extends Error{constructor(o=""){super(`${o&&`${o} `}Your component must be wrapped in a <Frame> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-frame--page for implementation instructions.`);this.name="MissingFrameError"}}function Oe(){const e=ve("uniqueIdFactory"),o=C("");function n(s="",i=""){if(!e)throw new Nr("No UniqueIdFactory was provided.");return i||(o.value||(o.value=e.nextId(s)),o.value)}return{uniqueIdRef:o,useUniqueId:n}}function Hh(e){const o=ve("focusManager"),{useUniqueId:n,uniqueIdRef:s}=Oe();Fe([()=>e.trapping],()=>{e.trapping&&s&&o.add(s.value)});const i=m(()=>o.trapFocusList[0]===s.value);return Td(()=>{if(!o)throw new Nr("No FocusManager was provided.")}),xe(()=>{const r=n();e.trapping&&o.add(r)}),ct(()=>{s.value&&o.remove(s.value)}),{canSafelyFocus:i}}const Uh=["id"],Ws=M({setup(e){const o=ve("scrollToPositionContext",()=>!1),n=C(null),{useUniqueId:s}=Oe(),i=s("ScrollTo");return xe(()=>{!o||!n.value||o(n.value.offsetTop)}),(r,c)=>(l(),d("a",{id:a(i),ref_key:"anchorNode",ref:n},null,8,Uh))}});Ws.__docgenInfo={exportName:"default",displayName:"ScrollTo",description:"",tags:{}};const xt=M({props:{to:null,url:null,external:{type:Boolean}},setup(e){return(o,n)=>(l(),A(Ee(e.to?"router-link":"a"),{href:e.url,to:e.to,target:e.to?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0},{default:y(()=>[f(o.$slots,"default")]),_:3},8,["href","to","target","rel"]))}});xt.__docgenInfo={exportName:"default",displayName:"UnstyledLink",description:"",tags:{},props:[{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const jh="Polaris-TextStyle--variationPositive",Wh="Polaris-TextStyle--variationNegative",zh="Polaris-TextStyle--variationWarning",Gh="Polaris-TextStyle--variationCode",Xh="Polaris-TextStyle--variationStrong",Kh="Polaris-TextStyle--variationSubdued";var Yh={variationPositive:jh,variationNegative:Wh,variationWarning:zh,variationCode:Gh,variationStrong:Xh,variationSubdued:Kh};const gt=M({props:{variation:{type:String,default:null}},setup(e){const o=e,n={positive:"positive",negative:"negative",warning:"warning",strong:"strong",subdued:"subdued",code:"code"};function s(c){return c===n.code?"code":"span"}const i=C(s(o.variation)),r=m(()=>{const c=o.variation&&Pe("variation",o.variation);return F(c&&Yh[c])});return(c,p)=>(l(),A(Ee(i.value),{class:u(a(r))},{default:y(()=>[f(c.$slots,"default")]),_:3},8,["class"]))}});gt.__docgenInfo={exportName:"default",displayName:"TextStyle",description:"",tags:{},props:[{name:"variation",description:"Give text additional visual meaning",tags:{},values:["positive | negative | strong | subdued | code"],type:{name:"String as () => Variation"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]};const Zh="Polaris-Icon",Qh="Polaris-Icon--applyColor",Jh="Polaris-Icon--hasBackdrop",eb="Polaris-Icon--colorBase",tb="Polaris-Icon--colorSubdued",ab="Polaris-Icon--colorCritical",ob="Polaris-Icon--colorInteractive",nb="Polaris-Icon--colorWarning",sb="Polaris-Icon--colorHighlight",ib="Polaris-Icon--colorSuccess",lb="Polaris-Icon--colorPrimary",rb="Polaris-Icon__Svg",cb="Polaris-Icon__Img",ub="Polaris-Icon__Placeholder";var ia={Icon:Zh,applyColor:Qh,hasBackdrop:Jh,colorBase:eb,colorSubdued:tb,colorCritical:ab,colorInteractive:ob,colorWarning:nb,colorHighlight:sb,colorSuccess:ib,colorPrimary:lb,Svg:rb,Img:cb,Placeholder:ub},Wc={env:"production"};const db="Polaris-VisuallyHidden";var pb={VisuallyHidden:db};const ot=M({setup(e){return(o,n)=>(l(),d("span",{class:u(a(pb).VisuallyHidden)},[f(o.$slots,"default")],2))}});ot.__docgenInfo={exportName:"default",displayName:"VisuallyHidden",description:"",tags:{},slots:[{name:"default"}]};const mb=["src"],re=M({props:{source:null,color:null,backdrop:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,n=["base","critical","highlight","success","warning"],s=m(()=>o.color&&ia[Pe("color",o.color)]),i=m(()=>F(ia.Icon,s.value,o.color&&ia.applyColor,o.backdrop&&ia.hasBackdrop)),r=m(()=>typeof o.source=="object"?"icon":o.source==="placeholder"?"placeholder":"external"),c=m(()=>r.value==="external"?encodeURIComponent(String(o.source)):""),p=()=>{o.color&&r.value==="external"&&Wc.env==="development"&&console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.")},T=()=>{o.backdrop&&o.color&&!n.includes(o.color)&&Wc.env==="development"&&console.warn(`The ${o.color} variant does not have a supported backdrop color`)};return xe(()=>{p(),T()}),(b,g)=>(l(),d("span",{class:u(a(i))},[L(a(ot),null,{default:y(()=>[k("span",null,z(e.accessibilityLabel),1)]),_:1}),a(r)==="icon"?(l(),A(Ee(e.source),{key:0,class:u(a(ia).Svg)},null,8,["class"])):a(r)==="placeholder"?(l(),d("div",{key:1,class:u(a(ia).Placeholder)},null,2)):(l(),d("img",{key:2,class:u(a(ia).Img),src:`data:image/svg+xml;utf8,${a(c)}`,alt:"","aria-hidden":"true"},null,10,mb))],2))}});re.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"source",description:"The contents to display in the icon",required:!0,type:{name:"IconSource"}},{name:"color",description:"Set the color for the icon",required:!1,type:{name:"Color"}},{name:"backdrop",description:"Show a backdrop behind the icon",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}]};const yb="Polaris-Badge",gb="Polaris-Badge--sizeSmall",hb="Polaris-Badge--statusSuccess",bb="Polaris-Badge--statusInfo",fb="Polaris-Badge--statusAttention",vb="Polaris-Badge--statusWarning",xb="Polaris-Badge--statusCritical",Tb="Polaris-Badge--statusNew",Sb="Polaris-Badge__Pip",Cb="Polaris-Badge--progressIncomplete",Ab="Polaris-Badge--progressPartiallyComplete",kb="Polaris-Badge--progressComplete",Lb="Polaris-Badge--withinFilter",wb="Polaris-Badge__Icon";var la={Badge:yb,sizeSmall:gb,statusSuccess:hb,statusInfo:bb,statusAttention:fb,statusWarning:vb,statusCritical:xb,statusNew:Tb,Pip:Sb,progressIncomplete:Cb,progressPartiallyComplete:Ab,progressComplete:kb,withinFilter:Lb,Icon:wb};const Pb={key:2},at=M({props:{status:null,progress:null,size:{default:"medium"},statusAndProgressLabelOverride:null,icon:null},setup(e){const o=e,n=ve("withinFilterContext",!1),s="medium",i=C(""),r=C(""),c=m(()=>F(la.Badge,o.status&&la[Pe("status",o.status)],o.progress&&la[Pe("progress",o.progress)],o.size&&o.size!==s&&la[Pe("size",o.size)],n&&la.withinFilter)),p=m(()=>o.statusAndProgressLabelOverride||r.value||i.value),T=m(()=>o.statusAndProgressLabelOverride||`${r.value} ${i.value}`);return xe(()=>{switch(o.progress){case"incomplete":i.value="incomplete";break;case"partiallyComplete":i.value="partiallyComplete";break;case"complete":i.value="complete";break}switch(o.status){case"info":r.value="info";break;case"success":r.value="success";break;case"warning":r.value="warning";break;case"critical":r.value="critical";break;case"attention":r.value="attention";break;case"new":r.value="new";break}}),(b,g)=>(l(),d("span",{class:u(a(c))},[!e.progress&&e.icon?(l(),d("span",{key:0,class:u(a(la).Icon)},[L(a(re),{source:e.icon},null,8,["source"])],2)):P("",!0),a(p)?(l(),d(X,{key:1},[i.value?(l(),d("span",{key:0,class:u(a(la).Pip)},[L(a(ot),null,{default:y(()=>[ie(z(a(T)),1)]),_:1})],2)):(l(),A(a(ot),{key:1},{default:y(()=>[ie(z(a(T)),1)]),_:1}))],64)):P("",!0),b.$slots.default?(l(),d("span",Pb,[f(b.$slots,"default")])):P("",!0)],2))}});at.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"status",description:"Colors and labels the badge with the given status.",required:!1,type:{name:"Status"}},{name:"progress",description:"Render a pip showing the progress of a given task.",required:!1,type:{name:"Progress"}},{name:"size",description:"Medium or small size.",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"statusAndProgressLabelOverride",description:"Pass a custom accessibilityLabel",required:!1,type:{name:"string"}},{name:"icon",description:"Icon to display to the left of the badge\u2019s content.",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const _b={inheritAttrs:!1},yr=M(N(v({},_b),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const o=e,n=m(()=>o.ellipsis&&o.content?`${o.content}\u2026`:o.content);return(s,i)=>(l(),d("span",{class:u(a(Ke).Content)},[e.prefixId?(l(),d("span",{key:0,class:u(a(Ke).Prefix)},[f(s.$slots,"prefix")],2)):e.icon?(l(),d("span",{key:1,class:u(a(Ke).Prefix)},[L(a(re),{source:e.icon},null,8,["source"])],2)):e.image?(l(),d("span",{key:2,class:u(a(Ke).Prefix),role:"presentation",style:Re({backgroundImage:`url(${e.image}`})},null,6)):P("",!0),k("span",{class:u(a(Ke).Text)},[e.helpText?(l(),d("span",{key:0,class:u(a(Ke).ContentBlock)},[k("span",{class:u(a(Ke).ContentBlockInner)},z(a(n)),3),L(a(gt),{variation:"subdued"},{default:y(()=>[ie(z(e.helpText),1)]),_:1})],2)):(l(),d(X,{key:1},[ie(z(a(n)),1)],64))],2),e.badge?(l(),d("span",{key:3,class:u(a(Ke).Suffix)},[L(a(at),{status:e.badge.status},{default:y(()=>[ie(z(e.badge.content),1)]),_:1},8,["status"])],2)):P("",!0),e.suffixId?(l(),d("span",{key:4,class:u(a(Ke).Suffix)},[f(s.$slots,"suffix")],2)):P("",!0)],2))}}));yr.__docgenInfo={exportName:"default",displayName:"ContentElement",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],slots:[{name:"prefix"},{name:"suffix"}]};const Mb=["role"],Nb=["id","disabled","aria-label","role"],Bb={inheritAttrs:!1},qd=M(N(v({},Bb),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},emits:["action"],setup(e,{emit:o}){const n=e,s=m(()=>F(Ke.Item,n.disabled&&Ke.disabled,n.destructive&&Ke.destructive,n.active&&Ke.active)),i=m(()=>({badge:n.badge,content:n.content,helpText:n.helpText,icon:n.icon,prefixId:n.prefixId,suffixId:n.suffixId,image:n.image,disabled:n.disabled,ellipsis:n.ellipsis,role:n.role})),r=m(()=>n.role==="menuitem"?"presentation":void 0),c=()=>{n.disabled||o("action")};return(p,T)=>(l(),d("li",{role:a(r)},[e.active?(l(),A(a(Ws),{key:0})):P("",!0),e.url?(l(),A(a(xt),{key:1,id:e.id,url:e.disabled?void 0:e.url,class:u(a(s)),external:e.external,"aria-label":e.accessibilityLabel,role:e.role,onClick:c},{default:y(()=>[L(yr,Qe(kt(a(i))),{suffix:y(()=>[f(p.$slots,"suffix")]),prefix:y(()=>[f(p.$slots,"prefix")]),_:3},16)]),_:3},8,["id","url","class","external","aria-label","role"])):(l(),d("button",{key:2,id:e.id,type:"button",class:u(a(s)),disabled:e.disabled,"aria-label":e.accessibilityLabel,role:e.role,onClick:c,onMouseup:T[0]||(T[0]=(...b)=>a(ft)&&a(ft)(...b))},[L(yr,Qe(kt(a(i))),{suffix:y(()=>[f(p.$slots,"suffix")]),prefix:y(()=>[f(p.$slots,"prefix")]),_:3},16)],42,Nb))],8,Mb))}}));qd.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"action"}],slots:[{name:"suffix"},{name:"prefix"}]};const Ib=["role","tabIndex"],Db={inheritAttrs:!1},gr=M(N(v({},Db),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=m(()=>n.section.title?void 0:Ke["Section-withoutTitle"]),i=m(()=>F(Ke.Title,n.firstSection&&Ke.firstSectionWithTitle)),r=m(()=>{let p;switch(n.actionRole){case"option":p="presentation";break;case"menuitem":p=n.hasMultipleSections?"presentation":"menu";break;default:p=void 0;break}return p}),c=p=>{p&&p(),o("action-any-item")};return(p,T)=>(l(),d("div",{class:u(a(s))},[e.section.title?(l(),d("p",{key:0,class:u(a(i))},z(e.section.title),3)):P("",!0),k("ul",{class:u(a(Ke).Actions),role:a(r),tabIndex:e.hasMultipleSections?void 0:-1},[(l(!0),d(X,null,be(e.section.items,(w,S)=>{var B=w,{content:b,helpText:g,onAction:h}=B,x=J(B,["content","helpText","onAction"]);return l(),A(a(qd),ye({key:`${b}-${S}`,content:b,helpText:g,role:e.actionRole},v({},x),{onAction:I=>c(h)}),je({_:2},[x.prefixId?{name:"prefix",fn:y(()=>[f(p.$slots,`prefix-${x.prefixId}`)])}:void 0,x.suffixId?{name:"suffix",fn:y(()=>[f(p.$slots,`suffix-${x.suffixId}`)])}:void 0]),1040,["content","helpText","role","onAction"])}),128))],10,Ib)],2))}}));gr.__docgenInfo={exportName:"default",displayName:"SectionMarkup",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const $b={inheritAttrs:!1},Rd=M(N(v({},$b),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=m(()=>{const{section:i,hasMultipleSections:r,actionRole:c,firstSection:p}=n;return{section:i,hasMultipleSections:r,actionRole:c,firstSection:p}});return(i,r)=>e.hasMultipleSections?(l(),d("li",{key:0,class:u(a(Ke).Section),role:"presentation"},[L(gr,ye(a(s),{onActionAnyItem:r[0]||(r[0]=c=>o("action-any-item"))}),je({_:2},[be(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:y(()=>[f(i.$slots,`prefix-${c}`)])})),be(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:y(()=>[f(i.$slots,`suffix-${c}`)])}))]),1040)],2)):(l(),A(gr,ye({key:1},a(s),{onActionAnyItem:r[1]||(r[1]=c=>o("action-any-item"))}),je({_:2},[be(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:y(()=>[f(i.$slots,`prefix-${c}`)])})),be(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:y(()=>[f(i.$slots,`suffix-${c}`)])}))]),1040))}}));Rd.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Fb={inheritAttrs:!1},et=M(N(v({},Fb),{props:{items:{default:void 0},sections:{default:()=>[]},actionRole:{default:void 0}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=C(null),i=m(()=>n.items?[{items:n.items},...n.sections]:n.sections?n.sections:[]),r=m(()=>i.value.length>1),c=m(()=>r.value?"ul":"div"),p=m(()=>r.value&&n.actionRole==="menuitem"?"menu":void 0),T=m(()=>r.value&&n.actionRole==="menuitem"?-1:void 0),b=h=>{h.preventDefault();const x=h.target;s.value&&x&&s.value.contains(x)&&dh(s.value,x)},g=h=>{h.preventDefault();const x=h.target;s.value&&x&&s.value.contains(x)&&ph(s.value,x)};return(h,x)=>(l(),A(Ee(a(c)),{ref_key:"actionListRef",ref:s,role:a(p),class:u(a(F)(a(Ke).ActionList)),tabIndex:a(T)},{default:y(()=>[(l(!0),d(X,null,be(a(i),(S,w)=>(l(),d(X,null,[S.items&&S.items.length>0?(l(),A(a(Rd),{key:S.title||w,firstSection:w===0,section:S,hasMultipleSections:a(r),actionRole:e.actionRole,onActionAnyItem:x[0]||(x[0]=B=>o("action-any-item"))},je({_:2},[be(S.items,({prefixId:B})=>({name:`prefix-${B}`,fn:y(()=>[f(h.$slots,`prefix-${B}`)])})),be(S.items,({suffixId:B})=>({name:`suffix-${B}`,fn:y(()=>[f(h.$slots,`suffix-${B}`)])}))]),1032,["firstSection","section","hasMultipleSections","actionRole"])):P("",!0)],64))),256)),e.actionRole==="menuitem"?(l(),d(X,{key:0},[L(a(yt),{keyEvent:"keydown",keyCode:a(Ue).ArrowDown,handler:g},null,8,["keyCode"]),L(a(yt),{keyEvent:"keydown",keyCode:a(Ue).ArrowUp,handler:b},null,8,["keyCode"])],64)):P("",!0)]),_:3},8,["role","class","tabIndex"]))}}));et.__docgenInfo={exportName:"default",displayName:"ActionList",description:"",tags:{},props:[{name:"items",description:"Collection of actions for list",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"undefined"}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"menuitem"'}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Eb="Polaris-ActionMenu";var Ob={ActionMenu:Eb};const qb="Polaris-ActionMenu-Actions__ActionsLayout";var Rb={ActionsLayout:qb};const Vb="Polaris-ActionMenu-MenuGroup__Details";var Hb={Details:Vb};const Ub="Polaris-ActionMenu-SecondaryAction",jb="Polaris-ActionMenu-SecondaryAction--destructive";var zc={SecondaryAction:Ub,destructive:jb};const Fs=M({props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:null,textAlign:null,outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean]},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},emits:["click","get-offset-width"],setup(e,{emit:o}){const n=e,s=C(null),i=m(()=>F(zc.SecondaryAction,n.destructive&&zc.destructive));xe(()=>{var c;r(((c=s.value)==null?void 0:c.offsetWidth)||0)});const r=c=>{s.value&&o("get-offset-width",c)};return(c,p)=>(l(),d("span",{class:u(a(i)),ref_key:"secondaryActionsRef",ref:s},[L(a(fe),ye({onClick:p[0]||(p[0]=T=>c.$emit("click"))},n),{default:y(()=>[f(c.$slots,"default")]),_:3},16)],2))}});Fs.__docgenInfo={exportName:"default",displayName:"SecondaryAction",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"primary",required:!1,type:{name:"boolean"}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]}},{name:"textAlign",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]}},{name:"plain",required:!1,type:{name:"boolean"}},{name:"monochrome",required:!1,type:{name:"boolean"}},{name:"removeUnderline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",required:!1,type:{name:"ConnectedDisclosure"}}],events:[{name:"click"},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const Wb={inheritAttrs:!1},Vd=M(N(v({},Wb),{props:{badge:null,title:null,actions:null,icon:null,index:null,accessibilityLabel:null,active:{type:Boolean}},emits:["open","close","get-offset-width"],setup(e,{emit:o}){const n=e,s=de(),i=()=>{o("close",n.title)},r=()=>{o("open",n.title)},c=p=>{o("get-offset-width",p)};return(p,T)=>e.actions.length?(l(),A(a(tt),{key:0,active:Boolean(e.active),"preferred-alignment":"left",hideOnPrint:"",onClose:i},{activator:y(()=>[L(a(Fs),{disclosure:!0,icon:e.icon,accessibilityLabel:e.accessibilityLabel,onClick:r,onGetOffsetWidth:c},{default:y(()=>[ie(z(e.title),1)]),_:1},8,["icon","accessibilityLabel"])]),content:y(()=>[L(a(et),{items:e.actions,onActionAnyItem:i},null,8,["items"]),a(s).default?(l(),d("div",{key:0,class:u(a(Hb).Details)},[f(p.$slots,"default")],2)):P("",!0)]),_:3},8,["active"])):P("",!0)}}));Vd.__docgenInfo={exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"title",description:"Menu group title",required:!0,type:{name:"string"}},{name:"actions",description:"List of actions",required:!0,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"icon",description:"Icon to display",required:!1,type:{name:"TSIndexedAccessType"}},{name:"index",description:"Zero-indexed numerical position. Overrides the group's order in the menu.",required:!1,type:{name:"number"}},{name:"accessibilityLabel",description:"Visually hidden menu description for screen readers",required:!1,type:{name:"string"}},{name:"active",description:"Whether or not the menu is open",required:!1,type:{name:"boolean"}}],events:[{name:"open",type:{names:["string"]}},{name:"close",type:{names:["string"]}},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const Hd=M({props:{actions:null,groups:null},setup(e){const o=e,n=8,s=ve("lang"),i=C(null),r=C(0),c=C(0),p=C(0),T=C(0),b=C([]),g=C(null),h=C({showable:[],rolledUp:[]}),x=C({title:s.Polaris.ActionMenu.Actions.moreActions,actions:[]}),S=m(()=>o.groups&&o.groups.length?[...o.groups].pop():[]),w=m(()=>[...b.value].pop()||0),B=$=>{b.value=[...b.value,$]},I=$=>{g.value?g.value=null:g.value=$},q=()=>{g.value=null},R=m(()=>o.groups?[...o.groups,x.value]:[x.value]),U=m(()=>R.value.filter($=>o.groups&&o.groups.length===0?$:$===S.value||!h.value.rolledUp.some(G=>Me(G)&&G.title===$.title))),Q=$=>$===x.value,D=$=>$===S.value,Y=m(()=>h.value.rolledUp.reduce(($,G)=>($.push(...Me(G)?G.actions:[G]),$),[])),E=$=>{const le=$,{actions:G}=le,K=J(le,["actions"]);return N(v({},K),{active:g.value===$.title})},j=$=>!Q($)&&!D($)?$.actions:!Q($)&&D($)?[...Y.value,...$.actions]:Q($)&&(!o.groups||o.groups.length===0)&&Y.value.length?Y.value:[],se=()=>{let $=[...o.actions||[],...o.groups||[]];o.groups&&o.groups.length>0&&($=[...$].slice(0,$.length-1));const G=$.slice(0,h.value.showable.length),K=$.slice(h.value.showable.length,$.length);h.value={showable:G,rolledUp:K}};Ht(()=>{if(se(),!!i.value){if(c.value=i.value.offsetWidth,T.value>=2&&[...o.actions||[],...o.groups||[]].length===p.value){se();return}he()}});const he=()=>{if(b.value.length===0||c.value===0)return;const $=[...o.actions||[],...o.groups||[]];if($.length===1){h.value={showable:$,rolledUp:[]};return}let G=c.value,K=[],le=[];$.forEach((pe,$e)=>{if(b.value[$e]+r.value+n+w.value<=G)G-=b.value[$e]+n*2,K=[...K,pe];else{if(G=0,pe===S.value)return;le=[...le,pe]}}),h.value={showable:K,rolledUp:le},T.value+=1,p.value=$.length},te=()=>{Vt(()=>{!i.value||(c.value=i.value.offsetWidth,T.value=0,he())},50,{leading:!1,trailing:!0})};function Me($){return"title"in $}return($,G)=>(l(),d("div",{ref_key:"actionsLayoutRef",ref:i,class:u(a(Rb).ActionsLayout)},[L(a(nt),{spacing:"extraTight"},{default:y(()=>[h.value.showable.length>0?(l(!0),d(X,{key:0},be(h.value.showable,K=>(l(),d(X,{key:K.content},[K.content?(l(),A(a(Fs),ye({key:0},K,{onGetOffsetWidth:B}),{default:y(()=>[ie(z(K.content),1)]),_:2},1040)):P("",!0)],64))),128)):P("",!0),(l(!0),d(X,null,be(e.actions,K=>(l(),d(X,{key:K.content},[!h.value.showable.length&&!h.value.rolledUp.includes(K)?(l(),A(a(Fs),ye({key:0},K,{onClick:le=>K.onAction?K.onAction():void 0,onGetOffsetWidth:B}),{default:y(()=>[ie(z(K.content),1)]),_:2},1040,["onClick"])):P("",!0)],64))),128)),(l(!0),d(X,null,be(a(U),K=>(l(),A(a(Vd),ye({key:K.title},E(K),{actions:j(K),onOpen:I,onClose:q,onGetOffsetWidth:B}),null,16,["actions"]))),128))]),_:1}),L(a(Je),{event:"resize",handler:te})],2))}});Hd.__docgenInfo={exportName:"default",displayName:"Actions",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}]};const zb={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Gb=k("path",{d:"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z"},null,-1),Xb=[Gb];function Kb(e,o){return l(),d("svg",zb,Xb)}var _a={render:Kb};const Yb="Polaris-ActionMenu-RollupActions__RollupActivator";var Zb={RollupActivator:Yb};const Ud=M({props:{accessibilityLabel:null,items:null,sections:null},setup(e){const o=ve("lang"),n=C(!1),s=()=>{n.value=!n.value};return(i,r)=>{var c,p;return((c=e.items)==null?void 0:c.length)||((p=e.sections)==null?void 0:p.length)?(l(),A(a(tt),{key:0,active:n.value,preferredAlignment:"right",onClose:s,hideOnPrint:""},{activator:y(()=>[k("div",{class:u(a(Zb).RollupActivator)},[L(a(fe),{outline:"",icon:a(_a),accessibilityLabel:e.accessibilityLabel||a(o).Polaris.ActionMenu.RollupActions.rollupButton,onClick:s},null,8,["icon","accessibilityLabel"])],2)]),content:y(()=>[L(a(et),{items:e.items,sections:e.sections,onActionAnyItem:s},null,8,["items","sections"])]),_:1},8,["active"])):P("",!0)}}});Ud.__docgenInfo={exportName:"default",displayName:"RollupActions",description:"",tags:{},props:[{name:"accessibilityLabel",description:"Accessibilty label",required:!1,type:{name:"string"}},{name:"items",description:"Collection of actions for the list",required:!1,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"Array",elements:[{name:"ActionListSection"}]}}]};const Qb={inheritAttrs:!1},jd=M(N(v({},Qb),{props:{actions:null,groups:null,rollup:{type:Boolean},rollupActionsLabel:null},setup(e){const o=e,n=m(()=>F(Ob.ActionMenu)),s=m(()=>(o.groups||[]).map(r=>i(r)));function i({title:r,actions:c}){return{title:r,items:c}}return(r,c)=>e.actions&&e.actions.length||e.groups&&e.groups.length?(l(),d("div",{key:0,class:u(a(n))},[e.rollup?(l(),A(a(Ud),{key:0,accessibilityLabel:e.rollupActionsLabel,items:e.actions,sections:a(s)},null,8,["accessibilityLabel","items","sections"])):(l(),A(a(Hd),{key:1,actions:e.actions,groups:e.groups},null,8,["actions","groups"]))],2)):P("",!0)}}));jd.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"rollup",description:"Roll up all actions into a Popover > ActionList",required:!1,type:{name:"boolean"}},{name:"rollupActionsLabel",description:"Label for rolled up actions activator",required:!1,type:{name:"string"}}]};const Gc="data-lock-scrolling",Xc="data-lock-scrolling-wrapper";let xs=0;class Jb{constructor(){this.scrollLocks=0,this.locked=!1}registerScrollLock(){this.scrollLocks+=1,this.handleScrollLocking()}unregisterScrollLock(){this.scrollLocks-=1,this.handleScrollLocking()}handleScrollLocking(){if(wr)return;const{scrollLocks:o}=this,{body:n}=document,s=n.firstElementChild;o===0?(n.removeAttribute(Gc),s&&s.removeAttribute(Xc),window.scroll(0,xs),this.locked=!1):o>0&&!this.locked&&(xs=window.pageYOffset,n.setAttribute(Gc,""),s&&(s.setAttribute(Xc,""),s.scrollTop=xs),this.locked=!0)}resetScrollPosition(){xs=0}}class ef{constructor(o){this.idGenerators={},this.idGeneratorFactory=o}nextId(o){return this.idGenerators[o]||(this.idGenerators[o]=this.idGeneratorFactory(o)),this.idGenerators[o]()}}function tf(e=""){let o=1;return()=>`Polaris${e}${o++}`}const af={ActionMenu:{Actions:{moreActions:"More actions"},RollupActions:{rollupButton:"View actions"}},Avatar:{label:"Avatar",labelWithInitials:"Avatar with initials {initials}"},Autocomplete:{spinnerAccessibilityLabel:"Loading",ellipsis:"{content}\u2026"},Badge:{PROGRESS_LABELS:{incomplete:"Incomplete",partiallyComplete:"Partially complete",complete:"Complete"},STATUS_LABELS:{info:"Info",success:"Success",warning:"Warning",critical:"Critical",attention:"Attention",new:"New"},progressAndStatus:"{statusLabel} {progressLabel}"},Button:{spinnerAccessibilityLabel:"Loading",connectedDisclosureAccessibilityLabel:"Related actions"},Common:{checkbox:"checkbox",undo:"Undo",cancel:"Cancel",newWindowAccessibilityHint:"(opens a new window)",clear:"Clear",close:"Close",submit:"Submit",more:"More"},ContextualSaveBar:{save:"Save",discard:"Discard"},DataTable:{sortAccessibilityLabel:"sort {direction} by",navAccessibilityLabel:"Scroll table {direction} one column",totalsRowHeading:"Totals",totalRowHeading:"Total"},DatePicker:{previousMonth:"Show previous month, {previousMonthName} {showPreviousYear}",nextMonth:"Show next month, {nextMonth} {nextYear}",today:"Today ",start:"Start of range",end:"End of range",months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}},DiscardConfirmationModal:{title:"Discard all unsaved changes",message:"If you discard changes, you\u2019ll delete any edits you made since you last saved.",primaryAction:"Discard changes",secondaryAction:"Continue editing"},DropZone:{single:{overlayTextFile:"Drop file to upload",overlayTextImage:"Drop image to upload",actionTitleFile:"Add file",actionTitleImage:"Add image",actionHintFile:"or drop file to upload",actionHintImage:"or drop image to upload",labelFile:"Upload file",labelImage:"Upload image"},allowMultiple:{overlayTextFile:"Drop files to upload",overlayTextImage:"Drop images to upload",actionTitleFile:"Add files",actionTitleImage:"Add images",actionHintFile:"or drop files to upload",actionHintImage:"or drop images to upload",labelFile:"Upload files",labelImage:"Upload images"},errorOverlayTextFile:"File type is not valid",errorOverlayTextImage:"Image type is not valid"},EmptySearchResult:{altText:"Empty search results"},Frame:{skipToContent:"Skip to content",navigationLabel:"Navigation",Navigation:{closeMobileNavigationLabel:"Close navigation"}},Filters:{moreFilters:"More filters",moreFiltersWithCount:"More filters ({count})",filter:"Filter {resourceName}",noFiltersApplied:"No filters applied",cancel:"Cancel",done:"Done",clearAllFilters:"Clear all filters",clear:"Clear",clearLabel:"Clear {filterName}"},IndexProvider:{defaultItemSingular:"Item",defaultItemPlural:"Items",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} are selected.",selected:"{selectedItemsCount} selected",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}"},IndexTable:{emptySearchTitle:"No {resourceNamePlural} found",emptySearchDescription:"Try changing the filters or search term",onboardingBadgeText:"New",resourceLoadingAccessibilityLabel:"Loading {resourceNamePlural}\u2026",selectAllLabel:"Select all {resourceNamePlural}",selected:"{selectedItemsCount} selected",undo:"Undo",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural}",selectItem:"Select {resourceName}",selectButtonText:"Select"},Loading:{label:"Page loading bar"},Modal:{iFrameTitle:"body markup",modalWarning:"These required properties are missing from Modal: {missingProps}"},Page:{Header:{rollupActionsLabel:"View actions for {title}"}},Pagination:{previous:"Previous",next:"Next",pagination:"Pagination"},ProgressBar:{negativeWarningMessage:"Values passed to the progress prop shouldn\u2019t be negative. Resetting {progress} to 0.",exceedWarningMessage:"Values passed to the progress prop shouldn\u2019t exceed 100. Setting {progress} to 100."},ResourceList:{sortingLabel:"Sort by",defaultItemSingular:"item",defaultItemPlural:"items",showing:"Showing {itemsCount} {resource}",showingTotalCount:"Showing {itemsCount} of {totalItemsCount} {resource}",loading:"Loading {resource}",selected:"{selectedItemsCount} selected",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} in your store are selected.",allFilteredItemsSelected:"All {itemsLength}+ {resourceNamePlural} in this filter are selected.",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural} in your store",selectAllFilteredItems:"Select all {itemsLength}+ {resourceNamePlural} in this filter",emptySearchResultTitle:"No {resourceNamePlural} found",emptySearchResultDescription:"Try changing the filters or search term",selectButtonText:"Select",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}",ariaLiveSingular:"{itemsLength} item",ariaLivePlural:"{itemsLength} items",Item:{actionsDropdownLabel:"Actions for {accessibilityLabel}",actionsDropdown:"Actions dropdown",viewItem:"View details for {itemName}"},BulkActions:{actionsActivatorLabel:"Actions",moreActionsActivatorLabel:"More actions",warningMessage:"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions."}},SkeletonPage:{loadingLabel:"Page loading"},Tabs:{toggleTabsLabel:"More tabs"},Tag:{ariaLabel:"Remove {children}"},TextField:{characterCount:"{count} characters",characterCountWithMaxLength:"{count} of {limit} characters used"},TooltipOverlay:{accessibilityLabel:"Tooltip: {label}"},TopBar:{toggleMenuLabel:"Toggle menu",SearchField:{clearButtonLabel:"Clear",search:"Search"}},MediaCard:{popoverButton:"Actions"},VideoThumbnail:{playButtonA11yLabel:{default:"Play video",defaultWithDuration:"Play video of length {duration}",duration:{hours:{other:{only:"{hourCount} hours",andMinutes:"{hourCount} hours and {minuteCount} minutes",andMinute:"{hourCount} hours and {minuteCount} minute",minutesAndSeconds:"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hours, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hours, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hours and {secondCount} seconds",andSecond:"{hourCount} hours and {secondCount} second"},one:{only:"{hourCount} hour",andMinutes:"{hourCount} hour and {minuteCount} minutes",andMinute:"{hourCount} hour and {minuteCount} minute",minutesAndSeconds:"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hour, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hour, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hour and {secondCount} seconds",andSecond:"{hourCount} hour and {secondCount} second"}},minutes:{other:{only:"{minuteCount} minutes",andSeconds:"{minuteCount} minutes and {secondCount} seconds",andSecond:"{minuteCount} minutes and {secondCount} second"},one:{only:"{minuteCount} minute",andSeconds:"{minuteCount} minute and {secondCount} seconds",andSecond:"{minuteCount} minute and {secondCount} second"}},seconds:{other:"{secondCount} seconds",one:"{secondCount} second"}}}}};var hr={Polaris:af};class Wd{constructor(){ut(this,"portalIds",[])}register(o){this.portalIds.includes(o)||this.portalIds.push(o)}hasContainer(){return this.portalIds.length}}class of{constructor(){ut(this,"trapFocusList",[])}add(o){this.trapFocusList=[...this.trapFocusList,o]}remove(o){const n=this.trapFocusList.indexOf(o);return n>-1&&(this.trapFocusList=this.trapFocusList.splice(n,1)),n>-1}}const br="light";const nf=k("div",{id:"PolarisPortalsContainer"},null,-1),zs=M({props:{colorScheme:{type:String,default:br}},setup(e){const o=e,n=new Jb,s=new Wd,i=C(new ef(tf)),r=new of,c=C(Ec().matches),p=()=>{document.body.setAttribute("p-color-scheme",o.colorScheme||br),document.body.style.backgroundColor="var(--p-background)",document.body.style.color="var(--p-text)"},T=Vt(()=>{c.value!==Ec().matches&&(c.value=!c.value)},40,{trailing:!0,leading:!0,maxWait:40});return Fe(()=>o.colorScheme,(b,g)=>{b!==g&&p()}),xe(()=>{document!==null&&p()}),Ge("mediaQueryContext",{isNavigationCollapsed:c.value}),Ge("scrollLockManager",n),Ge("portalManager",s),Ge("uniqueIdFactory",i.value),Ge("focusManager",r),Ge("lang",hr),(b,g)=>(l(),A(a(Ho),{"color-scheme":e.colorScheme},{default:y(()=>[L(a(Je),{event:"resize",handler:a(T)},null,8,["handler"]),f(b.$slots,"default"),nf]),_:3},8,["color-scheme"]))}});zs.__docgenInfo={exportName:"default",displayName:"AppProvider",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}}],slots:[{name:"default"}]};const sf="Polaris-Avatar",lf="Polaris-Avatar--hidden",rf="Polaris-Avatar--sizeExtraSmall",cf="Polaris-Avatar--sizeSmall",uf="Polaris-Avatar--sizeMedium",df="Polaris-Avatar--sizeLarge",pf="Polaris-Avatar--styleOne",mf="Polaris-Avatar--styleTwo",yf="Polaris-Avatar--styleThree",gf="Polaris-Avatar--styleFour",hf="Polaris-Avatar--styleFive",bf="Polaris-Avatar--hasImage",ff="Polaris-Avatar__Image",vf="Polaris-Avatar__Initials",xf="Polaris-Avatar__Svg";var Gt={Avatar:sf,hidden:lf,sizeExtraSmall:rf,sizeSmall:cf,sizeMedium:uf,sizeLarge:df,styleOne:pf,styleTwo:mf,styleThree:yf,styleFour:gf,styleFive:hf,hasImage:bf,Image:ff,Initials:vf,Svg:xf};const Zl=["one","two","three","four","five"];function Tf(e){return e?Zl[e.charCodeAt(0)%Zl.length]:Zl[0]}const Sf=["src","srcSet","crossOrigin"],Cf=["src","crossOrigin"],Vo=M({props:{source:null,crossOrigin:null,sourceSet:null},setup(e){const o=e,n=m(()=>o.sourceSet?o.sourceSet.map(({source:s,descriptor:i})=>`${s} ${i}`).join(","):null);return(s,i)=>a(n)?(l(),d("img",{key:0,src:e.source,srcSet:e.sourceSet,crossOrigin:e.crossOrigin},null,8,Sf)):(l(),d("img",{key:1,src:e.source,crossOrigin:e.crossOrigin},null,8,Cf))}});Vo.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"source",required:!0,type:{name:"string"}},{name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},{name:"sourceSet",required:!1,type:{name:"Array",elements:[{name:"SourceSet"}]}}]};const Af=["aria-label"],Cn=M({props:{size:{default:"medium"},name:{default:void 0},initials:{default:void 0},customer:{type:Boolean,default:void 0},source:{default:void 0},accessibilityLabel:{default:void 0}},emits:["error"],setup(e,{emit:o}){const n=e,s=C("PENDING"),i="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z",r="0.35em",c=m(()=>n.source&&s.value!=="ERRORED"),p=m(()=>{const h=Pe("size",n.size),x=Pe("style",Tf(n.name||n.initials));return F(Gt.Avatar,h&&Gt[h],!n.customer&&Gt[x],(c.value||n.initials&&n.initials.length===0)&&s.value!=="LOADED"&&Gt.hidden,c.value&&Gt.hasImage)}),T=m(()=>n.accessibilityLabel?n.accessibilityLabel:n.name?n.name:n.initials?`Avatar with initials ${n.initials.split("").join(" ")}`:"Avatar"),b=()=>{s.value="LOADED"},g=()=>{s.value="ERRORED",o("error")};return(h,x)=>(l(),d("span",{"aria-label":a(T),role:"img",class:u(a(p))},[a(c)?P("",!0):(l(),d("span",{key:0,class:u(a(Gt).Initials)},[(l(),d("svg",{class:u(a(Gt).Svg),viewBox:"0 0 40 40"},[e.customer||!e.initials?(l(),d("path",{key:0,fill:"currentColor",d:i})):(l(),d("text",{key:1,x:"50%",y:"50%",dy:r,fill:"currentColor","font-size":"20","text-anchor":"middle"},z(e.initials),1))],2))],2)),e.source&&s.value!=="ERRORED"?(l(),A(a(Vo),{key:1,class:u(a(Gt).Image),source:e.source,alt:"",role:"presentation",onLoad:b,onError:g},null,8,["class","source"])):P("",!0)],10,Af))}});Cn.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",description:"Size of avatar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"name",description:"The name of the person",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"initials",description:"Initials of person to display",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"customer",description:"Whether the avatar is for a customer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"source",description:"URL of the avatar image which falls back to initials if the image fails to load",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"accessibilityLabel",description:"Accessible label for the avatar image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"error"}]};const kf="Polaris-Backdrop",Lf="Polaris-Backdrop--transparent",wf="Polaris-Backdrop--belowNavigation";var Ql={Backdrop:kf,transparent:Lf,belowNavigation:wf};const Pf={inheritAttrs:!1,render(){return null}},Br=M(N(v({},Pf),{setup(e){const o=ve("scrollLockManager");return xe(()=>{o.registerScrollLock()}),ct(()=>{o.unregisterScrollLock()}),()=>{}}}));Br.__docgenInfo={exportName:"default",displayName:"ScrollLock",description:"",tags:{}};const Ir=M({props:{belowNavigation:{type:Boolean},transparent:{type:Boolean}},setup(e){const o=e,n=m(()=>F(Ql.Backdrop,o.belowNavigation&&Ql.belowNavigation,o.transparent&&Ql.transparent));return(s,i)=>(l(),d("div",{class:u(a(n))},[L(a(Br))],2))}});Ir.__docgenInfo={exportName:"default",displayName:"Backdrop",description:"",tags:{},props:[{name:"belowNavigation",required:!1,type:{name:"boolean"}},{name:"transparent",required:!1,type:{name:"boolean"}}]};const _f="Polaris-Breadcrumbs__Breadcrumb",Mf="Polaris-Breadcrumbs__Icon",Nf="Polaris-Breadcrumbs__Content";var Ts={Breadcrumb:_f,Icon:Mf,Content:Nf};const Bf={key:0,role:"navigation"},If=["aria-label"],zd=M({props:{breadcrumbs:null},setup(e){const o=e,n=C(o.breadcrumbs[o.breadcrumbs.length-1]),s=m(()=>{const{url:r}=n.value;return r}),i=m(()=>{const{onAction:r}=n.value;return r});return(r,c)=>n.value?(l(),d("nav",Bf,[a(s)?(l(),A(a(xt),{key:n.value.content,url:a(s),class:u(a(Ts).Breadcrumb),"aria-label":n.value.accessibilityLabel,onMouseup:a(ft)},{default:y(()=>[k("span",{class:u(a(Ts).Icon)},[L(a(re),{source:a(qo)},null,8,["source"])],2),L(a(ot),null,{default:y(()=>[ie(z(n.value.content),1)]),_:1})]),_:1},8,["url","class","aria-label","onMouseup"])):(l(),d("button",{type:"button",key:n.value.content,class:u(a(Ts).Breadcrumb),"aria-label":n.value.accessibilityLabel,onMouseup:c[0]||(c[0]=(...p)=>a(ft)&&a(ft)(...p)),onClick:c[1]||(c[1]=(...p)=>a(i)&&a(i)(...p))},[k("span",{class:u(a(Ts).Icon)},[L(a(re),{source:a(qo)},null,8,["source"])],2),L(a(ot),null,{default:y(()=>[ie(z(n.value.content),1)]),_:1})],42,If))])):P("",!0)}});zd.__docgenInfo={exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const Df="Polaris-Button",$f="Polaris-Button--pressed",Ff="Polaris-Button--disabled",Ef="Polaris-Button--connectedDisclosure",Of="Polaris-Button__Content",qf="Polaris-Button--plain",Rf="Polaris-Button--textAlignLeft",Vf="Polaris-Button--textAlignCenter",Hf="Polaris-Button--textAlignRight",Uf="Polaris-Button__Icon",jf="Polaris-Button--fullWidth",Wf="Polaris-Button--hidden",zf="Polaris-Button__Spinner",Gf="Polaris-Button--primary",Xf="Polaris-Button--destructive",Kf="Polaris-Button--outline",Yf="Polaris-Button--loading",Zf="Polaris-Button--removeUnderline",Qf="Polaris-Button--iconOnly",Jf="Polaris-Button--sizeSlim",ev="Polaris-Button--sizeLarge",tv="Polaris-Button--monochrome",av="Polaris-Button__Text",ov="Polaris-Button__ConnectedDisclosureWrapper",nv="Polaris-Button__ConnectedDisclosure";var Ce={Button:Df,pressed:$f,disabled:Ff,connectedDisclosure:Ef,Content:Of,plain:qf,textAlignLeft:Rf,textAlignCenter:Vf,textAlignRight:Hf,Icon:Uf,fullWidth:jf,hidden:Wf,Spinner:zf,primary:Gf,destructive:Xf,outline:Kf,loading:Yf,removeUnderline:Zf,iconOnly:Qf,sizeSlim:Jf,sizeLarge:ev,monochrome:tv,Text:av,ConnectedDisclosureWrapper:ov,ConnectedDisclosure:nv},Zt=(e=>(e[e.Click=0]="Click",e[e.EscapeKeypress=1]="EscapeKeypress",e[e.FocusOut=2]="FocusOut",e[e.ScrollOut=3]="ScrollOut",e))(Zt||{}),At=(e=>(e.Entering="entering",e.Entered="entered",e.Exiting="exiting",e.Exited="exited",e))(At||{});function Kc(e,o){if(e===o)return!0;let n=o.parentNode;for(;n!=null;){if(n===e)return!0;n=n.parentNode}return!1}function sv(e,{id:o,active:n=!1,ariaHaspopup:s,activatorDisabled:i=!1}){i||(e.tabIndex=e.tabIndex||0),e.setAttribute("aria-controls",o),e.setAttribute("aria-owns",o),e.setAttribute("aria-expanded",String(n)),s!=null&&e.setAttribute("aria-haspopup",String(s))}const iv="Polaris-PositionedOverlay",lv="Polaris-PositionedOverlay--fixed",rv="Polaris-PositionedOverlay--calculating",cv="Polaris-PositionedOverlay--preventInteraction";var Jl={PositionedOverlay:iv,fixed:lv,calculating:rv,preventInteraction:cv};const uv="Polaris-Popover",dv="Polaris-Popover__PopoverOverlay",pv="Polaris-Popover--measuring",mv="Polaris-Popover--fullWidth",yv="Polaris-Popover__Content",gv="Polaris-Popover--positionedAbove",hv="Polaris-Popover__Wrapper",bv="Polaris-Popover__Pane",fv="Polaris-Popover__Section",vv="Polaris-Popover__FocusTracker";var Ze={Popover:uv,PopoverOverlay:dv,"PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",measuring:pv,fullWidth:mv,Content:yv,positionedAbove:gv,Wrapper:hv,"Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:bv,"Pane-fixed":"Polaris-Popover__Pane--fixed",Section:fv,FocusTracker:vv,"PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"};const xv="Polaris-Tooltip-TooltipOverlay",Tv="Polaris-Tooltip-TooltipOverlay--measuring",Sv="Polaris-Tooltip-TooltipOverlay--positionedAbove",Cv="Polaris-Tooltip-TooltipOverlay__Content";var ks={TooltipOverlay:xv,measuring:Tv,positionedAbove:Sv,Content:Cv};function Av(e,o,n,s,i,r,c,p=0){const T=e.top,b=T+e.height,g=e.top-p,h=i.height-e.top-e.height,x=o.height,S=n.activator+n.container,w=n.container,B=e.top-Math.max(s.top,0),I=i.top+Math.min(i.height,s.top+s.height)-(e.top+e.height),q=B>=w,R=I>=w,U=Math.min(h,x),Q=Math.min(g,x),D=c?0:i.top,Y={height:Q-S,top:T+D-Q,positioning:"above"},E={height:U-S,top:b+D,positioning:"below"};return r==="above"?(q||B>=I&&!R)&&(g>x||g>h)?Y:E:r==="below"?(R||I>=B&&!q)&&(h>x||h>g)?E:Y:q&&R?g>h?Y:E:B>w?Y:E}function kv(e,o,n,s,i){const r=n.width-o.width;if(i==="left")return Math.min(r,Math.max(0,e.left-s.horizontal));if(i==="right"){const c=n.width-(e.left+e.width);return Math.min(r,Math.max(0,c-s.horizontal))}return Math.min(r,Math.max(0,e.center.x-o.width/2))}function Lv(e,o){const{center:n}=e;return n.y<o.top||n.y>o.top+o.height}function Gd(){return new ba({top:window.scrollY,left:window.scrollX,height:window.innerHeight,width:document.body.clientWidth})}function wv(e,o=Gd()){const n=Math.max(e.top,0),s=Math.max(e.left,0),i=Math.min(e.top+e.height,o.height),r=Math.min(e.left+e.width,o.width);return new ba({top:n,left:s,height:i-n,width:r-s})}function Pv(e){return e===document}function _v(e){const o=window.getComputedStyle(e);return{activator:parseFloat(o.marginTop||"0"),container:parseFloat(o.marginBottom||"0"),horizontal:parseFloat(o.marginLeft||"0")}}function Mv(e){const o=e.closest(_s.selector)||document.body,n=o===document.body?"auto":parseInt(window.getComputedStyle(o).zIndex||"0",10);return n==="auto"||Number.isNaN(n)?null:n}const Nv={inheritAttrs:!1,render(){return null}},Je=M(N(v({},Nv),{props:{event:{type:String,required:!0},capture:{type:Boolean},passive:{type:Boolean},handler:{type:Function,required:!0}},setup(e){const o=e;function n(){const{event:i,capture:r,passive:c,handler:p}=o;window.addEventListener(i,p,{capture:r,passive:c})}function s(i){const{event:r,handler:c,capture:p}=i||o;window.removeEventListener(r,c,p)}return Fe(()=>v({},o),(i,r)=>{i!==r&&(s(r),n())}),xe(()=>n()),ct(()=>s()),()=>{}}}));Je.__docgenInfo={exportName:"default",displayName:"EventListener",description:"",tags:{},props:[{name:"event",type:{name:"string"},required:!0},{name:"capture",type:{name:"boolean"}},{name:"passive",type:{name:"boolean"}},{name:"handler",type:{name:"Function as unknown as () => BaseEventProps['handler']"},required:!0}]};function Bv(e){const o=e.closest(Us.selector);return o instanceof HTMLElement?o:document}const Iv={inheritAttrs:!1},Dr=M(N(v({},Iv),{props:{active:{type:Boolean},activator:null,preferInputActivator:{type:Boolean},preferredPosition:null,preferredAlignment:null,fullWidth:{type:Boolean},fixed:{type:Boolean},preventInteraction:{type:Boolean},classNames:null,zIndexOverride:null,hideOnPrint:{type:Boolean},layout:null},emits:["change-content-styles","scroll-out"],setup(e,{emit:o}){const n=e,s={childList:!0,subtree:!0,characterData:!0},i=C(null),r=C(null),c=C(null),p=C(0),T=C(0),b=C(null),g=C(null),h=C(!0),x=C("below"),S=C(qt(n.activator)),w=C(!1),B=C(!1),I=C(null),q=C(null),R=m(()=>{const E=n.classNames;return F(Jl.PositionedOverlay,n.fixed&&Jl.fixed,n.preventInteraction&&Jl.preventInteraction,E)}),U=m(()=>F(Ze.Popover,x.value==="above"&&Ze.positionedAbove,n.fullWidth&&Ze.fullWidth,h.value&&Ze.measuring,n.hideOnPrint&&Ze["PopoverOverlay-hideOnPrint"])),Q=m(()=>F(ks.TooltipOverlay,h.value&&ks.measuring,x.value==="above"&&ks.positionedAbove)),D=m(()=>({top:p.value==null||Number.isNaN(p.value)?void 0:`${p.value}px`,left:c.value==null||Number.isNaN(c.value)?void 0:`${c.value}px`,right:r.value==null||Number.isNaN(r.value)?void 0:`${r.value}px`,width:b.value==null||Number.isNaN(b.value)?void 0:`${b.value}px`,zIndex:n.zIndexOverride||g.value||void 0})),Y=()=>{if(q.value&&q.value.disconnect(),T.value=0,x.value="below",h.value=!0,i.value&&I.value){const{activator:E,preferredPosition:j="below",preferredAlignment:se="center",fullWidth:he,fixed:te,preferInputActivator:Me=!0}=n,$=Me&&E.querySelector("input")||E,G=qt($),K=qt(i.value),le=Pv(I.value)?document.body:I.value,pe=qt(le),$e=he?new ba(N(v({},K),{width:G.width})):K;le===document.body&&(pe.height=document.body.scrollHeight);let ge=0;const Se=le.querySelector(`${Lr.selector}`);Se&&(ge=Se.clientHeight);const ae=i.value.firstElementChild&&i.value.firstChild?_v(i.value.firstElementChild):{activator:0,container:0,horizontal:0},Te=Gd(),De=Mv(E),qe=De==null?De:De+1,Ne=Av(G,$e,ae,pe,Te,j,te,ge),lt=kv(G,$e,Te,ae,se);h.value=!1,S.value=qt(E),c.value=se!=="right"?lt:null,r.value=se==="right"?lt:null,p.value=w.value?p.value:Ne.top,w.value=Boolean(te),T.value=Ne.height||0,b.value=he?$e.width:null,x.value=Ne.positioning,B.value=Lv(G,wv(pe)),g.value=qe,o("change-content-styles",{desiredHeight:T.value}),q.value&&(q.value.observe(i.value,s),q.value.observe(E,s))}};return Td(()=>{q.value=new MutationObserver(Y)}),Ht(()=>{n.active&&p.value!==0&&B.value&&o("scroll-out")}),xe(()=>{I.value=Bv(n.activator),I.value&&!n.fixed&&I.value.addEventListener("scroll",Y),Y()}),ct(()=>{I.value&&!n.fixed&&I.value.removeEventListener("scroll",Y)}),(E,j)=>(l(),d("div",{class:u(a(R)),style:Re(a(D)),ref_key:"overlayRef",ref:i},[e.layout==="tooltip"?(l(),d("div",ye({key:0,class:a(Q)},v({},a(_s).props)),[f(E.$slots,"default")],16)):(l(),d("div",ye({key:1,class:a(U)},v({},a(sg).props)),[f(E.$slots,"default")],16)),L(a(Je),{event:"resize",handler:Y})],6))}}));Dr.__docgenInfo={exportName:"default",displayName:"PositionedOverlay",description:"",tags:{},props:[{name:"active",required:!0,type:{name:"boolean"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}},{name:"preferredAlignment",required:!1,type:{name:"PreferredAlignment"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"boolean"}},{name:"classNames",required:!1,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"layout",required:!1,type:{name:"string"}}],events:[{name:"change-content-styles",type:{names:["Record"]}},{name:"scroll-out"}],slots:[{name:"default"}]};const Ho=M({props:{colorScheme:{type:String,default:br},as:{type:String,default:"div"}},setup(e){return(o,n)=>(l(),d(X,null,[(l(),A(Ee("style"),{"data-polaris-custom-properties":"",innerHTML:a(ig)},null,8,["innerHTML"])),(l(),A(Ee(e.as),ye(o.$attrs,{"p-color-scheme":e.colorScheme,style:{color:"var(--p-text-color)"}}),{default:y(()=>[f(o.$slots,"default")]),_:3},16,["p-color-scheme","style"]))],64))}});Ho.__docgenInfo={exportName:"default",displayName:"CustomProperties",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}},{name:"as",type:{name:"String as () => CustomPropertiesProps['as']"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}]};const vn=M({setup(e){return(o,n)=>(l(),d("div",{class:u(a(Ze).Section)},[f(o.$slots,"default")],2))}});vn.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},slots:[{name:"default"}]};const Gs=M({props:{fixed:{type:Boolean},sectioned:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=m(()=>F(Ze.Pane,n.fixed&&Ze["Pane-fixed"]));return(i,r)=>e.fixed?(l(),d("div",{key:0,class:u(a(s))},[e.sectioned?(l(),A(a(vn),{key:0},{default:y(()=>[f(i.$slots,"default")]),_:3})):f(i.$slots,"default",{key:1})],2)):(l(),A(a(jt),{key:1,shadow:"",class:u(a(s)),onScrolledToBottom:r[0]||(r[0]=c=>o("scrolled-to-bottom"))},{default:y(()=>[e.sectioned?(l(),A(a(vn),{key:0},{default:y(()=>[f(i.$slots,"default")]),_:3})):f(i.$slots,"default",{key:1})]),_:3},8,["class"]))}});Gs.__docgenInfo={exportName:"default",displayName:"Pane",description:"",tags:{},props:[{name:"fixed",required:!1,type:{name:"boolean"}},{name:"sectioned",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};const Dv=["id","tabIndex"],$v={inheritAttrs:!1},Xd=M(N(v({},$v),{props:{fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},preferredPosition:{default:"below"},preferredAlignment:{default:"center"},active:{type:Boolean},id:null,zIndexOverride:{default:void 0},activator:null,preferInputActivator:{default:!0},sectioned:{type:Boolean},fixed:{type:Boolean},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=C(At.Exited),i=C(null),r=C(null),c=C(null),p=C({}),T=U=>{s.value=U,i.value&&i.value.getBoundingClientRect()},b=()=>{r.value&&window.clearTimeout(r.value),c.value&&window.clearTimeout(c.value)};Fe(()=>n.active,()=>{const U=n.active?At.Entering:At.Exiting,Q=n.active?At.Entered:At.Exited;T(U),b();const D=window.setTimeout(()=>{s.value=Q},parseInt(Ps.motion["duration-100"],10));n.active?r.value=D:c.value=D});const g=m(()=>F(Ze.PopoverOverlay,s.value===At.Entering&&Ze["PopoverOverlay-entering"],s.value===At.Entered&&Ze["PopoverOverlay-open"],s.value===At.Exiting&&Ze["PopoverOverlay-exiting"])),h=m(()=>F(Ze.Content,n.fullHeight&&Ze["Content-fullHeight"],n.fluidContent&&Ze["Content-fluidContent"])),x=()=>{o("close",Zt.ScrollOut)},S=()=>{o("close",Zt.EscapeKeypress)},w=U=>{const Q=U.target,D=i.value&&Kc(i.value,Q),Y=Kc(n.activator,Q);D||Y||s.value!==At.Entered||o("close",Zt.Click)},B=()=>{o("close",Zt.FocusOut)},I=()=>{o("close",Zt.FocusOut)},q=U=>{p.value={desiredHeight:`${U.height}px`}},R=()=>{n.autofocusTarget==="none"||!i.value||requestAnimationFrame(()=>{if(i.value){const U=Mr(i.value);U&&n.autofocusTarget==="first-node"?U.focus():i.value.focus()}})};return xe(()=>{n.active&&(R(),T(At.Entered))}),ct(()=>{b()}),(U,Q)=>(l(),A(a(Dr),{id:e.id,fullWidth:e.fullWidth,active:e.active,activator:e.activator,classNames:a(g),preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,onScrollOut:x,onChangeContentStyles:q},{default:y(()=>[k("div",{class:u(a(Ze).FocusTracker),tabIndex:"0",onFocus:B},null,34),L(a(Ho),{"color-scheme":e.colorScheme},{default:y(()=>[k("div",{class:u(a(Ze).Wrapper)},[k("div",{id:e.id,tabIndex:e.autofocusTarget==="none"?void 0:-1,style:Re(p.value),class:u(a(h)),ref_key:"contentRef",ref:i},[f(U.$slots,"extra-content"),L(a(Gs),{sectioned:e.sectioned,fixed:e.fixed,onScrolledToBottom:Q[0]||(Q[0]=D=>U.$emit("scrolled-to-bottom"))},{default:y(()=>[f(U.$slots,"overlay")]),_:3},8,["sectioned","fixed"])],14,Dv)],2),k("div",{class:u(a(Ze).FocusTracker),tabIndex:"0",onFocus:I},null,34),L(a(Je),{event:"click",handler:w}),L(a(Je),{event:"touchstart",handler:w}),L(a(yt),{keyCode:a(Ue).Escape,handler:S},null,8,["keyCode"])]),_:3},8,["color-scheme"])]),_:3},8,["id","fullWidth","active","activator","classNames","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride"]))}}));Xd.__docgenInfo={exportName:"default",displayName:"PopoverOverlay",description:"",tags:{},props:[{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"fluidContent",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"preferredAlignment",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'center'"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"colorScheme",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"scrolled-to-bottom"},{name:"close",type:{names:["PopoverCloseSource"]}}],slots:[{name:"extra-content"},{name:"overlay"}]};const Fv=["data-portal-id"],Ev={inheritAttrs:!1},An=M(N(v({},Ev),{props:{idPrefix:{type:String,default:""}},setup(e){const o=e,n=ve("portalManager",new Wd),s=C(""),{useUniqueId:i}=Oe();return xe(()=>{const r=i("portal");s.value=o.idPrefix?`${o.idPrefix}-${r}`:r,n&&n.register(s.value)}),(r,c)=>a(n)?(l(),A(lg,{key:0,to:"#PolarisPortalsContainer"},[k("div",{"data-portal-id":s.value},[f(r.$slots,"default")],8,Fv)])):P("",!0)}}));An.__docgenInfo={exportName:"default",displayName:"Portal",description:"",tags:{},props:[{name:"idPrefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}]};const Ov={inheritAttrs:!1},tt=M(N(v({},Ov),{props:{preferredPosition:{default:void 0},preferredAlignment:{default:void 0},active:{type:Boolean},preferInputActivator:{default:!0},activatorWrapper:{default:"div"},zIndexOverride:{default:void 0},preventFocusOnClose:{type:Boolean},sectioned:{type:Boolean},fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},fixed:{type:Boolean},ariaHaspopup:{default:void 0},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=C(null),i=C(null),{useUniqueId:r}=Oe();Ut();const c=C(r("popover")),p=()=>{if(s.value){const g=s.value,x=Yl(g)||g,S="disabled"in x&&Boolean(x.disabled);sv(x,{id:c.value,active:n.active,ariaHaspopup:n.ariaHaspopup,activatorDisabled:S})}};Fe(()=>n.active,()=>p());const T=g=>{let{parentElement:h}=g;for(;h;){if(h.matches(Sd.selector))return!1;h=h.parentElement}return!0},b=g=>{if(o("close",g),!(!s.value||n.preventFocusOnClose)&&(g===Zt.FocusOut||g===Zt.EscapeKeypress)&&i.value){const h=Yl(i.value)||Yl(s.value)||s.value;uh(h,T)||h.focus()}};return xe(()=>{if(s.value){const g=s.value.firstElementChild;g&&(i.value=g),p()}}),(g,h)=>(l(),A(Ee(e.activatorWrapper),{ref_key:"container",ref:s},{default:y(()=>[f(g.$slots,"activator"),i.value&&e.active?(l(),A(a(An),{key:0,idPrefix:"popover"},{default:y(()=>[L(a(Xd),{id:c.value,activator:i.value,fullWidth:e.fullWidth,active:e.active,preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,autofocusTarget:e.autofocusTarget,sectioned:e.sectioned,colorScheme:e.colorScheme,onClose:b,onScrolledToBottom:h[0]||(h[0]=x=>o("scrolled-to-bottom"))},{overlay:y(x=>[f(g.$slots,"content")]),"extra-content":y(()=>[f(g.$slots,"extra-content")]),_:3},8,["id","activator","fullWidth","active","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride","autofocusTarget","sectioned","colorScheme"])]),_:3})):P("",!0)]),_:3},512))}}));tt.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"preferredPosition",description:"The preferred direction to open the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Show or hide the Popover",required:!0,type:{name:"boolean"}},{name:"preferInputActivator",description:"Use the activator's input element to calculate the Popover position",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"activatorWrapper",description:"The element type to wrap the activator with",tags:{default:[{description:"'div'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"zIndexOverride",description:"Override on the default z-index of 400",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"preventFocusOnClose",description:`Prevents focusing the activator or the next focusable element
when the popover is deactivated`,required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically add wrap content in a section",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow popover to stretch to the full width of its activator",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Allow popover to stretch to fit content vertically",required:!1,type:{name:"boolean"}},{name:"fluidContent",description:"Allow popover content to determine the overlay width and height",required:!1,type:{name:"boolean"}},{name:"fixed",description:"Remains in a fixed position",required:!1,type:{name:"boolean"}},{name:"ariaHaspopup",description:"Used to illustrate the type of popover element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnPrint",description:"Allow the popover overlay to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",tags:{default:[{description:"'container'",title:"default"}]},required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"close",type:{names:["PopoverCloseSource"]}},{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"content"},{name:"extra-content"}]};const qv=["role","type","disabled","aria-busy","aria-controls","aria-expanded","aria-describedby","aria-pressed"],Rv={inheritAttrs:!1},$r=M(N(v({},Rv),{props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,className:null,others:null},setup(e){const o=e,n=Ut(),s=T=>{const b={mouseup:ft};return T.forEach(g=>{const h=`on${Pr.exports.capitalize(g)}`;n[h]&&(b[g]=n[h])}),b},i=s(["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"]),r=s(["blur","click","focus","mouseover","touchstart"]),c=m(()=>({id:o.id,class:o.className,"aria-label":o.accessibilityLabel})),p=m(()=>N(v(v({},c.value),o.others),{role:o.role}));return(T,b)=>e.url&&e.disabled?(l(),d("a",Qe(ye({key:0},a(c))),[f(T.$slots,"default")],16)):e.url&&!e.disabled?(l(),A(a(xt),ye({key:1},a(p),{url:e.url,external:e.external,download:e.download},fn(a(r))),{default:y(()=>[f(T.$slots,"default")]),_:3},16,["url","external","download"])):(l(),d("button",ye({key:2},a(c),{role:e.role,type:e.submit?"submit":"button",disabled:e.disabled,"aria-busy":e.loading?!0:void 0,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-describedby":e.ariaDescribedBy,"aria-pressed":e.pressed},fn(a(i))),[f(T.$slots,"default")],16,qv))}}));$r.__docgenInfo={exportName:"default",displayName:"UnstyledButton",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"className",required:!1,type:{name:"string"}},{name:"others",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"default"}]};const Vv=M({props:{action:null,overrides:null,keyProp:null},setup(e){const o=e,n=m(()=>{const c=o.action,{content:s,onAction:i}=c,r=J(c,["content","onAction"]);return v(v({},r),o.overrides)});return(s,i)=>(l(),A($r,ye({key:e.keyProp},a(n),{onClick:e.action.onAction}),{default:y(()=>[ie(z(e.action.content),1)]),_:1},16,["onClick"]))}});Vv.__docgenInfo={exportName:"default",displayName:"UnstyledButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"UnstyledButtonProps"}]}},{name:"keyProp",required:!1,type:{name:"any"}}]};const Hv={viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},Uv=k("path",{d:"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"},null,-1),jv=[Uv];function Wv(e,o){return l(),d("svg",Hv,jv)}var zv={render:Wv};const Gv={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Xv=k("path",{d:"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"},null,-1),Kv=[Xv];function Yv(e,o){return l(),d("svg",Gv,Kv)}var Zv={render:Yv};const Qv="Polaris-Spinner",Jv="Polaris-Spinner--sizeSmall",ex="Polaris-Spinner--sizeLarge";var Yc={Spinner:Qv,sizeSmall:Jv,sizeLarge:ex};const ea=M({props:{size:{type:String,default:"large"},accessibilityLabel:{type:String,default:null},hasFocusableParent:{type:Boolean}},setup(e){const o=e,n=C(v({},!o.hasFocusableParent&&{role:"status"})),s=m(()=>{const i=Pe("size",o.size);return F(Yc.Spinner,o.size&&Yc[i])});return(i,r)=>(l(),d("div",null,[k("span",{class:u(a(s))},[e.size==="large"?(l(),A(a(zv),{key:0})):(l(),A(a(Zv),{key:1}))],2),k("span",Qe(kt(n.value)),[L(a(ot),null,{default:y(()=>[k("span",null,z(e.accessibilityLabel),1)]),_:1})],16)]))}});ea.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size of the spinner",tags:{},values:["small | large"],type:{name:"String as () => Size"},defaultValue:{func:!1,value:"'large'"}},{name:"accessibilityLabel",description:"Accessible label for the spinner",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasFocusableParent",description:"Allows the component to apply the correct accessibility roles based on focus",type:{name:"boolean"}}]};const tx={inheritAttrs:!1},fr=M(N(v({},tx),{props:{commonProps:null,linkProps:null,actionProps:null,removeUnderline:null,children:{type:Boolean},disclosure:null,loading:null,icon:null},setup(e){const o=e,n=Ut(),s=m(()=>{const p=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],T={};return p.forEach(b=>{const g=`on${Pr.exports.capitalize(b)}`;n[g]&&(T[b]=n[g])}),T}),i=m(()=>F(Ce.Icon,o.loading&&Ce.hidden)),r=m(()=>F(Ce.Text,o.removeUnderline&&Ce.removeUnderline)),c=m(()=>o.disclosure==="select"?Cd:o.disclosure==="up"?Ad:ya);return(p,T)=>(l(),A(a($r),ye(v(v(v({},e.commonProps),e.linkProps),e.actionProps),fn(a(s))),{default:y(()=>[k("span",{class:u(a(Ce).Content)},[e.loading?(l(),d("span",{key:0,class:u(a(Ce).Spinner)},[L(a(ea),{size:"small",accessibilityLabel:"Loading"})],2)):P("",!0),e.icon?(l(),d("span",{key:1,class:u(a(i))},[L(a(re),{source:e.loading?"placeholder":e.icon},null,8,["source"])],2)):P("",!0),e.children?(l(),d("span",{class:u(a(r)),key:e.actionProps&&e.actionProps.disabled?"text-disabled":"text"},[f(p.$slots,"default")],2)):P("",!0),e.disclosure?(l(),d("span",{key:3,class:u(a(Ce).Icon)},[k("div",null,[L(a(re),{source:e.loading?"placeholder":a(c)},null,8,["source"])])],2)):P("",!0)],2)]),_:3},16))}}));fr.__docgenInfo={exportName:"default",displayName:"ButtonMarkup",description:"",tags:{},props:[{name:"commonProps",required:!1,type:{name:"CommonButtonProps"}},{name:"linkProps",required:!1,type:{name:"LinkButtonProps"}},{name:"actionProps",required:!1,type:{name:"ActionButtonProps"}},{name:"removeUnderline",required:!1,type:{name:"TSIndexedAccessType"}},{name:"children",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"TSIndexedAccessType"}},{name:"loading",required:!1,type:{name:"TSIndexedAccessType"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}]};const ax=["disabled","aria-label","aria-describedby"],ox={inheritAttrs:!1},fe=M(N(v({},ox),{props:{id:null,url:{default:""},external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:{default:"medium"},textAlign:{default:void 0},outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean],default:void 0},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},setup(e){const o=e,n=de(),s=Ut(),i=m(()=>{const I=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],q={};return I.forEach(R=>{const U=`on${Pr.exports.capitalize(R)}`;s[U]&&(q[R]=s[U])}),q}),r=!!n.default,c=C(!1),p=m(()=>o.disabled||o.loading),T=m(()=>{const I=o.textAlign&&Pe("textAlign",o.textAlign),q=o.size&&Pe("size",o.size);return F(Ce.Button,o.primary&&Ce.primary,o.outline&&Ce.outline,o.destructive&&Ce.destructive,p.value&&Ce.disabled,o.loading&&Ce.loading,o.plain&&Ce.plain,o.pressed&&!o.disabled&&!o.url&&Ce.pressed,o.monochrome&&Ce.monochrome,o.size!=="medium"&&q&&Ce[q],I&&Ce[I],o.fullWidth&&Ce.fullWidth,o.icon&&!r&&Ce.iconOnly,o.connectedDisclosure&&Ce.connectedDisclosure,o.removeUnderline&&Ce.removeUnderline)}),b=m(()=>{const I=o.textAlign&&Pe("textAlign",o.textAlign),q=o.size&&Pe("size",o.size);return F(Ce.Button,o.primary&&Ce.primary,o.outline&&Ce.outline,o.size!=="medium"&&q&&Ce[q],I&&Ce[I],o.destructive&&Ce.destructive,o.connectedDisclosure&&o.connectedDisclosure.disabled&&Ce.disabled,Ce.iconOnly,Ce.ConnectedDisclosure,o.monochrome&&Ce.monochrome)}),g=m(()=>{const{id:I,accessibilityLabel:q,role:R,ariaDescribedBy:U}=o;return{id:I,className:T.value,accessibilityLabel:q,role:R,ariaDescribedBy:U}}),h=m(()=>{const{url:I,external:q,download:R}=o;return{url:I,external:q,download:R}}),x=m(()=>{const{submit:I,loading:q,pressed:R}=o;return{submit:I,loading:q,pressed:R,disabled:p.value}}),S=m(()=>{const{removeUnderline:I,disclosure:q,loading:R,icon:U}=o;return{commonProps:g.value,linkProps:h.value,actionProps:x.value,removeUnderline:I,children:r,disclosure:q,loading:R,icon:U}}),w=m(()=>{if(o.connectedDisclosure){const{disabled:I,accessibilityLabel:q="Related actions"}=o.connectedDisclosure;return{disabled:I,disclosureLabel:q}}return{}}),B=()=>{c.value=!c.value};return(I,q)=>e.connectedDisclosure?(l(),d("div",{key:0,class:u(a(Ce).ConnectedDisclosureWrapper)},[L(fr,ye(a(S),fn(a(i))),{default:y(()=>[f(I.$slots,"default")]),_:3},16),L(a(tt),{active:c.value,preferredAlignment:"right",onClose:B},{activator:y(()=>[k("button",{type:"button",class:u(a(b)),disabled:a(w).disabled,"aria-label":a(w).disclosureLabel,"aria-describedby":e.ariaDescribedBy,onClick:B,onMouseup:q[0]||(q[0]=(...R)=>a(ft)&&a(ft)(...R))},[k("span",null,[L(a(re),{source:a(ya)},null,8,["source"])])],42,ax)]),content:y(()=>[L(a(et),{items:e.connectedDisclosure.actions,onActionAnyItem:B},je({_:2},[be(e.connectedDisclosure.actions,({prefixId:R})=>({name:`prefix-${R}`,fn:y(()=>[f(I.$slots,`prefix-${R}`)])})),be(e.connectedDisclosure.actions,({suffixId:R})=>({name:`suffix-${R}`,fn:y(()=>[f(I.$slots,`suffix-${R}`)])}))]),1032,["items"])]),_:3},8,["active"])],2)):(l(),A(fr,ye({key:1},a(S),fn(a(i))),{default:y(()=>[f(I.$slots,"default")]),_:3},16))}}));fe.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the button",required:!1,type:{name:"string"}},{name:"url",description:"A destination to link to, rendered in the href attribute of a link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"external",description:"Forces url to open in a new tab",required:!1,type:{name:"boolean"}},{name:"download",description:`Tells the browser to download the url instead of opening it.
Provides a hint for the downloaded filename if it is a string value`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",description:"Allows the button to submit a form",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables the button, disallowing merchant interaction",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces button text with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"pressed",description:"Sets the button in a pressed state",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to define the semantic value of this element",required:!1,type:{name:"string"}},{name:"ariaControls",description:"Id of the element the button controls",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Tells screen reader the controlled element is expanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the button",required:!1,type:{name:"string"}},{name:"primary",description:"Provides extra visual weight and identifies the primary action in a set of buttons",required:!1,type:{name:"boolean"}},{name:"destructive",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"size",description:"Changes the size of the button, giving it more or less padding",tags:{values:[{description:"slim | medium | large",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textAlign",description:"Changes the inner text alignment of the button",tags:{values:[{description:"left | center | right",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:`Gives the button a subtle alternative to the default button styling,
appropriate for certain backdrops`,required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"disclosure",description:"Displays the button with a disclosure icon. Defaults to `down` when set to true",tags:{values:[{description:"down | up | select | boolean",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Renders a button that looks like a link",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes plain and outline Button colors (text, borders, icons) the same as the current text color\nAlso adds an underline to `plain` Buttons",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes underline from button text (including on interaction)when monochrome and plain are true",required:!1,type:{name:"boolean"}},{name:"icon",description:"Icon to display to the left of the button content.",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",description:"Disclosure button connected right of the button. Toggles a popover action list.",required:!1,type:{name:"ConnectedDisclosure"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const nx={inheritAttrs:!1},mt=M(N(v({},nx),{props:{action:null,overrides:{default:()=>({})}},setup(e){const o=e,n=()=>{o.action&&o.action.onAction&&o.action.onAction()},s=m(()=>{if(!o.action)return{};const p=o.action,{onAction:i,content:r}=p,c=J(p,["onAction","content"]);return v(v({},c),o.overrides)});return(i,r)=>e.action?(l(),A(a(fe),ye({key:0},a(s),{onClick:n}),{default:y(()=>[ie(z(e.action.content),1)]),_:1},16)):P("",!0)}}));mt.__docgenInfo={exportName:"default",displayName:"ButtonFrom",description:"",tags:{},props:[{name:"action",required:!1,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"ButtonProps"}]},defaultValue:{func:!1,value:"() => ({})"}}]};const sx="Polaris-ButtonGroup",ix="Polaris-ButtonGroup__Item",lx="Polaris-ButtonGroup--segmented",rx="Polaris-ButtonGroup--fullWidth",cx="Polaris-ButtonGroup--extraTight",ux="Polaris-ButtonGroup--tight",dx="Polaris-ButtonGroup--loose";var ga={ButtonGroup:sx,Item:ix,"Item-plain":"Polaris-ButtonGroup__Item--plain",segmented:lx,"Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:rx,extraTight:cx,tight:ux,loose:dx};const px={inheritAttrs:!1},Kd=M(N(v({},px),{setup(e){const o=C(!1),n=de(),s=m(()=>n.default&&n.default()[0].props),i=m(()=>{const p=s.value&&(s.value.plain===""||s.value.plain);return F(ga.Item,o.value&&ga["Item-focused"],p&&ga["Item-plain"])}),r=()=>{o.value=!0},c=()=>{o.value=!1};return(p,T)=>(l(),d("div",{class:u(a(i)),onFocus:r,onBlur:c},[f(p.$slots,"default")],34))}}));Kd.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};function Ae(e){if(!e)return!1;if(e&&e()[0].children){if(typeof e()[0].children=="string")return e()[0].children!=="v-if";if(Array.isArray(e()[0].children))return e()[0].children.length>0}return!0}const mx=["data-buttongroup-segmented","data-buttongroup-connected-top","data-buttongroup-full-width"],yx={inheritAttrs:!1},nt=M(N(v({},yx),{props:{spacing:null,segmented:{type:Boolean},fullWidth:{type:Boolean},connectedTop:{type:Boolean}},setup(e){const o=e,n=de(),s=m(()=>{const r=[];return n.default&&n.default().map(c=>{const p=c.children;typeof p=="string"&&p==="v-if"||(c.type.toString()==="Symbol(Fragment)"||c.type.toString()==="Symbol()"?p.forEach(T=>{r.push(T)}):r.push(c))}),r}),i=m(()=>F(ga.ButtonGroup,o.spacing&&ga[o.spacing],o.segmented&&ga.segmented,o.fullWidth&&ga.fullWidth));return(r,c)=>(l(),d("div",{class:u(a(i)),"data-buttongroup-segmented":e.segmented,"data-buttongroup-connected-top":e.connectedTop,"data-buttongroup-full-width":e.fullWidth},[(l(!0),d(X,null,be(a(s),(p,T)=>(l(),A(a(Kd),{key:T},{default:y(()=>[(l(),A(Ee(p)))]),_:2},1024))),128))],10,mx))}}));nt.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"spacing",description:"Determines the space between button group items",required:!1,type:{name:"Spacing"}},{name:"segmented",description:"Join buttons as segmented group",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Buttons will stretch/shrink to occupy the full width",required:!1,type:{name:"boolean"}},{name:"connectedTop",description:"Remove top left and right border radius",required:!1,type:{name:"boolean"}}]};const gx="Polaris-Caption";var hx={Caption:gx};const ta=M({setup(e){return(o,n)=>(l(),d("p",{class:u(a(hx).Caption)},[f(o.$slots,"default")],2))}});ta.__docgenInfo={exportName:"default",displayName:"Caption",description:"",tags:{},slots:[{name:"default"}]};const bx="Polaris-Card",fx="Polaris-Card--subdued",vx="Polaris-Card--hideOnPrint",xx="Polaris-Card__Header",Tx="Polaris-Card__Section",Sx="Polaris-Card__SectionHeader",Cx="Polaris-Card__Subsection",Ax="Polaris-Card__Footer",kx="Polaris-Card__LeftJustified";var pt={Card:bx,subdued:fx,"Section-hideOnPrint":"Polaris-Card__Section--hideOnPrint",hideOnPrint:vx,Header:xx,Section:Tx,"Section-fullWidth":"Polaris-Card__Section--fullWidth","Section-flush":"Polaris-Card__Section--flush","Section-subdued":"Polaris-Card__Section--subdued",SectionHeader:Sx,Subsection:Cx,Footer:Ax,LeftJustified:kx};const Xs=M({props:{actions:null},setup(e){const o=de(),n=m(()=>{var s,i,r,c,p;return o.title&&o.title().length===1?((s=o.title()[0])==null?void 0:s.type.toString())==="Symbol(Text)"||((i=o.title()[0])==null?void 0:i.type.toString())==="Symbol()"?!0:o.title()[0].children&&((r=o.title()[0].children)==null?void 0:r.length)===1&&(((c=o.title()[0].children)==null?void 0:c[0].type.toString())==="Symbol(Text)"||((p=o.title()[0].children)==null?void 0:p[0].type.toString())==="Symbol()"):!1});return(s,i)=>(l(),d("div",{class:u(a(pt).Header)},[a(o).default||e.actions?(l(),A(a(We),{key:0,alignment:"baseline",noItemWrap:""},{default:y(()=>[L(a(vt),{fill:!0},{default:y(()=>[a(n)?(l(),A(a(aa),{key:1},{default:y(()=>[f(s.$slots,"title")]),_:3})):f(s.$slots,"title",{key:0})]),_:3}),e.actions?(l(),A(a(vt),{key:0},{default:y(()=>[L(a(nt),null,{default:y(()=>[(l(!0),d(X,null,be(e.actions,(r,c)=>(l(),A(a(mt),{key:c,action:r,overrides:{plain:!0}},null,8,["action"]))),128))]),_:1})]),_:1})):P("",!0),a(o).default?(l(),A(a(vt),{key:1},{default:y(()=>[f(s.$slots,"default")]),_:3})):P("",!0)]),_:3})):(l(),d(X,{key:1},[a(n)?(l(),A(a(aa),{key:1},{default:y(()=>[f(s.$slots,"title")]),_:3})):f(s.$slots,"title",{key:0})],64))],2))}});Xs.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}}],slots:[{name:"title"},{name:"default"}]};const kn=M({props:{title:null,subdued:{type:Boolean},flush:{type:Boolean},fullWidth:{type:Boolean},hideOnPrint:{type:Boolean},actions:null},setup(e){const o=e,n=de(),s=m(()=>F(pt.Section,o.flush&&pt["Section-flush"],o.subdued&&pt["Section-subdued"],o.fullWidth&&pt["Section-fullWidth"],o.hideOnPrint&&pt["Section-hideOnPrint"])),i=m(()=>{var r,c,p,T,b;return n.title&&n.title().length===1?((r=n.title()[0])==null?void 0:r.type.toString())==="Symbol(Text)"||((c=n.title()[0])==null?void 0:c.type.toString())==="Symbol()"?!0:n.title()[0].children&&((p=n.title()[0].children)==null?void 0:p.length)===1&&(((T=n.title()[0].children)==null?void 0:T[0].type.toString())==="Symbol(Text)"||((b=n.title()[0].children)==null?void 0:b[0].type.toString())==="Symbol()"):!0});return(r,c)=>(l(),d("div",{class:u(a(s))},[e.title||a(Ae)(a(n).title)||e.actions?(l(),d("div",{key:0,class:u(a(pt).SectionHeader)},[e.actions?(l(),A(a(We),{key:0,noItemWrap:"",alignment:"baseline"},{default:y(()=>[L(a(vt),{fill:""},{default:y(()=>[a(i)?(l(),A(a(oa),{key:1},{default:y(()=>[a(Ae)(a(n).title)?f(r.$slots,"title",{key:0}):(l(),d(X,{key:1},[ie(z(e.title),1)],64))]),_:3})):f(r.$slots,"title",{key:0})]),_:3}),L(a(nt),null,{default:y(()=>[(l(!0),d(X,null,be(e.actions,(p,T)=>(l(),A(a(mt),{key:T,index:T,action:p,overrides:{plain:!0}},null,8,["index","action"]))),128))]),_:1})]),_:3})):(l(),d(X,{key:1},[a(i)?(l(),A(a(oa),{key:1},{default:y(()=>[a(Ae)(a(n).title)?f(r.$slots,"title",{key:0}):(l(),d(X,{key:1},[ie(z(e.title),1)],64))]),_:3})):f(r.$slots,"title",{key:0})],64))],2)):P("",!0),f(r.$slots,"default")],2))}});kn.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subdued",required:!1,type:{name:"boolean"}},{name:"flush",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"title"},{name:"default"}]};const Yd=M({setup(e){return(o,n)=>(l(),d("div",{class:u(a(pt).Subsection)},[f(o.$slots,"default")],2))}});Yd.__docgenInfo={exportName:"default",displayName:"Subsection",description:"",tags:{},slots:[{name:"default"}]};const it=M({props:{title:null,subdued:{type:Boolean},sectioned:{type:Boolean},actions:null,primaryFooterAction:null,secondaryFooterActions:null,secondaryFooterActionsDisclosureText:null,footerActionAlignment:{default:"right"},hideOnPrint:{type:Boolean}},setup(e){const o=e,n=de(),s=C(!1),i=()=>{s.value=!s.value},r=m(()=>F(pt.Card,o.subdued&&pt.subdued,o.hideOnPrint&&pt.hideOnPrint)),c=m(()=>F(pt.Footer,o.footerActionAlignment==="left"&&pt.LeftJustified));return Ge("WithinContentContext",!1),(p,T)=>(l(),d("div",{class:u(a(r))},[e.title||a(Ae)(a(n).title)||e.actions?(l(),A(a(Xs),{key:0,actions:e.actions},{title:y(()=>[a(Ae)(a(n).title)?f(p.$slots,"title",{key:0}):(l(),d(X,{key:1},[ie(z(e.title),1)],64))]),_:3},8,["actions"])):P("",!0),e.sectioned?(l(),A(a(kn),{key:1},{default:y(()=>[f(p.$slots,"default")]),_:3})):f(p.$slots,"default",{key:2}),e.primaryFooterAction||e.secondaryFooterActions&&e.secondaryFooterActions.length?(l(),d("div",{key:3,class:u(a(c))},[e.footerActionAlignment==="right"?(l(),A(a(nt),{key:0},{default:y(()=>[e.secondaryFooterActions&&e.secondaryFooterActions.length===1?(l(),A(a(mt),{key:0,action:e.secondaryFooterActions[0]},null,8,["action"])):e.secondaryFooterActions&&e.secondaryFooterActions.length>1?(l(),A(a(tt),{key:1,active:s.value,onClose:i},{activator:y(()=>[L(a(fe),{disclosure:!0,onClick:i},{default:y(()=>[ie(z(e.secondaryFooterActionsDisclosureText||a(hr).Polaris.Common.more),1)]),_:1})]),content:y(()=>[L(a(et),{items:e.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):P("",!0),e.primaryFooterAction?(l(),A(a(mt),{key:2,action:e.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):P("",!0)]),_:1})):(l(),A(a(nt),{key:1},{default:y(()=>[e.primaryFooterAction?(l(),A(a(mt),{key:0,action:e.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):P("",!0),e.secondaryFooterActions&&e.secondaryFooterActions.length===1?(l(),A(a(mt),{key:1,action:e.secondaryFooterActions[0]},null,8,["action"])):e.secondaryFooterActions&&e.secondaryFooterActions.length>1?(l(),A(a(tt),{key:2,active:s.value,onClose:i},{activator:y(()=>[L(a(fe),{disclosure:"",onClick:i},{default:y(()=>[ie(z(e.secondaryFooterActionsDisclosureText||a(hr).Polaris.Common.more),1)]),_:1})]),content:y(()=>[L(a(et),{items:e.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):P("",!0)]),_:1}))],2)):P("",!0)],2))}});it.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",description:"Title content for the card *",required:!1,type:{name:"string"}},{name:"subdued",description:"A less prominent card",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Auto wrap content in section",required:!1,type:{name:"boolean"}},{name:"actions",description:"Card header actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}},{name:"primaryFooterAction",description:"Primary action in the card footer",required:!1,type:{name:"ComplexAction"}},{name:"secondaryFooterActions",description:"Secondary actions in the card footer",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}},{name:"secondaryFooterActionsDisclosureText",description:"The content of the disclosure button rendered when there is more than one secondary footer action",required:!1,type:{name:"string"}},{name:"footerActionAlignment",description:"Alignment of the footer actions on the card, defaults to right",required:!1,type:{name:"union",elements:[{name:'"right"'},{name:'"left"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const Lx="Polaris-Checkbox",wx="Polaris-Checkbox__Input",Px="Polaris-Checkbox--keyFocused",_x="Polaris-Checkbox__Backdrop",Mx="Polaris-Checkbox__Icon",Nx="Polaris-Checkbox--hover",Bx="Polaris-Checkbox--error";var Xt={Checkbox:Lx,Input:wx,keyFocused:Px,Backdrop:_x,"Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:Mx,hover:Nx,error:Bx};const Fr=e=>`${e}Error`,Ix="Polaris-Choice",Dx="Polaris-Choice--labelHidden",$x="Polaris-Choice__Label",Fx="Polaris-Choice__Control",Ex="Polaris-Choice--disabled",Ox="Polaris-Choice__Descriptions",qx="Polaris-Choice__HelpText";var Ft={Choice:Ix,labelHidden:Dx,Label:$x,Control:Fx,disabled:Ex,Descriptions:Ox,HelpText:qx};const Er=e=>`${e}HelpText`,Rx="Polaris-InlineError",Vx="Polaris-InlineError__Icon";var Zc={InlineError:Rx,Icon:Vx};const Hx=["id"],Ux={key:1},va=M({props:{message:null,fieldID:null},setup(e){return(o,n)=>e.message?(l(),d("div",{key:0,id:a(Fr)(e.fieldID),class:u(a(Zc).InlineError)},[k("div",{class:u(a(Zc).Icon)},[L(a(re),{source:a(rg)},null,8,["source"])],2),typeof e.message=="object"?(l(),A(Ee(e.message),{key:0})):(l(),d("div",Ux,z(e.message),1))],10,Hx)):P("",!0)}});va.__docgenInfo={exportName:"default",displayName:"InlineError",description:"",tags:{},props:[{name:"message",description:"Content briefly explaining how to resolve the invalid form field input.",required:!0,type:{name:"ErrorType"}},{name:"fieldID",description:"Unique identifier of the invalid form field that the message describes",required:!0,type:{name:"string"}}]};const jx={key:0},Wx=["id"],Or=M({props:{id:null,disabled:{type:Boolean},error:{type:[null,Boolean]},labelHidden:{type:Boolean}},setup(e){const o=e,n=m(()=>F(Ft.Choice,o.labelHidden&&Ft.labelHidden,o.disabled&&Ft.disabled));return(s,i)=>e.error&&typeof e.error!="boolean"||s.$slots["help-text"]?(l(),d("div",jx,[k("label",{class:u(a(n)),onClick:i[0]||(i[0]=r=>s.$emit("click")),onMouseover:i[1]||(i[1]=r=>s.$emit("mouseover")),onMouseout:i[2]||(i[2]=r=>s.$emit("mouseout"))},[k("span",{class:u(a(Ft).Control)},[f(s.$slots,"default")],2),k("span",{class:u(a(Ft).Label)},[f(s.$slots,"label")],2)],34),k("div",{class:u(a(Ft).Descriptions)},[s.$slots["help-text"]?(l(),d("div",{key:0,id:a(Er)(e.id),class:u(a(Ft).HelpText)},[f(s.$slots,"help-text")],10,Wx)):P("",!0),e.error&&typeof e.error!="boolean"?(l(),A(a(va),{key:1,fieldID:e.id,message:e.error},null,8,["fieldID","message"])):P("",!0)],2)])):(l(),d("label",{key:1,class:u(a(n)),onClick:i[3]||(i[3]=r=>s.$emit("click")),onMouseover:i[4]||(i[4]=r=>s.$emit("mouseover")),onMouseout:i[5]||(i[5]=r=>s.$emit("mouseout"))},[k("span",{class:u(a(Ft).Control)},[f(s.$slots,"default")],2),k("span",{class:u(a(Ft).Label)},[f(s.$slots,"label")],2)],34))}});Or.__docgenInfo={exportName:"default",displayName:"Choice",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the choice",required:!0,type:{name:"string"}},{name:"disabled",description:"Whether the associated form control is disabled",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"ErrorType"},{name:"boolean"}]}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"mouseover"},{name:"mouseout"}],slots:[{name:"default"},{name:"label"},{name:"help-text"}]};const zx=["id","role","name","value","checked","disabled","aria-invalid","aria-controls","aria-describedby"],xa=M({props:{ariaControls:null,ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},id:null,name:null,value:{type:[String,Boolean]},modelValue:{type:[String,Boolean]},error:{type:[null,Boolean]}},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const n=e,s=ve("withinListboxContext",!1),i=C(!1),r=C(!1),c=de(),p=m(()=>{var E;return(E=c["help-text"])==null?void 0:E.call(c)}),{useUniqueId:T}=Oe(),b=m(()=>T("Checkbox",n.id)),g=m(()=>n.checked==="indeterminate"),h=m(()=>!g.value&&Boolean(n.checked)||typeof n.modelValue=="boolean"&&n.modelValue===!0),x=m(()=>g.value?cg:_r),S=m(()=>F(Xt.Checkbox,n.error&&Xt.error)),w=m(()=>F(Xt.Backdrop,i.value&&Xt.hover)),B=m(()=>F(Xt.Input,g.value&&Xt["Input-indeterminate"],r.value&&Xt.keyFocused)),I=m(()=>g.value?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":h.value}),q=m(()=>{const E=[];return n.ariaDescribedBy&&E.push(n.ariaDescribedBy),n.error&&typeof n.error!="boolean"&&E.push(Fr(b.value)),p.value&&E.push(Er(b.value)),E.length?E.join(" "):void 0}),R=()=>{r.value=!0,o("focus")},U=E=>{const j=E.target;o("change",E),o("update:modelValue",j.checked)},Q=()=>{r.value=!1,o("blur")},D=E=>{const{key:j}=E;(j===Ue.Space||j===Ue.Tab)&&(r.value||(r.value=!0))};function Y(E){E.stopPropagation()}return(E,j)=>(l(),A(a(Or),{id:a(b),error:e.error,disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:j[0]||(j[0]=se=>i.value=!0),onMouseout:j[1]||(j[1]=se=>i.value=!1)},je({default:y(()=>[k("span",{class:u(a(S))},[k("input",ye({id:a(b),role:a(s)?"presentation":"checkbox",name:e.name,value:e.value||e.modelValue,type:"checkbox",checked:a(h),disabled:e.disabled,class:a(B),"aria-invalid":e.error!==null,"aria-controls":e.ariaControls,"aria-describedby":a(q),onFocus:R,onChange:U,onBlur:Q,onKeyup:D},a(I)),null,16,zx),k("span",{class:u(a(w)),onClick:Y,onMouseup:Y},null,34),k("span",{class:u(a(Xt).Icon)},[L(a(re),{source:a(x)},null,8,["source"])],2)],2)]),_:2},[a(c).label?{name:"label",fn:y(()=>[f(E.$slots,"label")])}:void 0,a(c)["help-text"]?{name:"help-text",fn:y(()=>[f(E.$slots,"help-text")])}:void 0]),1032,["id","error","disabled","labelHidden"]))}});xa.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"ariaControls",description:"Indicates the ID of the element that is controlled by the checkbox",required:!1,type:{name:"string"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the checkbox",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"indeterminate"'}]}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"ErrorType"},{name:"boolean"}]}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const Gx="Polaris-ChoiceList",Xx="Polaris-ChoiceList--titleHidden",Kx="Polaris-ChoiceList__Title",Yx="Polaris-ChoiceList__Choices",Zx="Polaris-ChoiceList__ChoiceChildren",Qx="Polaris-ChoiceList__ChoiceError";var ra={ChoiceList:Gx,titleHidden:Xx,Title:Kx,Choices:Yx,ChoiceChildren:Zx,ChoiceError:Qx};const Jx="Polaris-RadioButton",eT="Polaris-RadioButton__Input",tT="Polaris-RadioButton--keyFocused",aT="Polaris-RadioButton__Backdrop",oT="Polaris-RadioButton--hover";var pn={RadioButton:Jx,Input:eT,keyFocused:tT,Backdrop:aT,hover:oT};const nT=["id","name","value","checked","disabled","aria-describedby"],Ln=M({props:{ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},id:null,name:null,value:null,modelValue:null},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const n=e,s=C(!1),i=C(!1),r=de(),c=m(()=>{var I;return(I=r["help-text"])==null?void 0:I.call(r)}),{useUniqueId:p}=Oe(),T=m(()=>p("RadioButton",n.id)),b=m(()=>n.checked||n.modelValue===n.value),g=m(()=>F(pn.Backdrop,i.value&&pn.hover)),h=m(()=>F(pn.Input,s.value&&pn.keyFocused)),x=m(()=>{const I=[];return n.ariaDescribedBy&&I.push(n.ariaDescribedBy),c.value&&I.push(Er(T.value)),I.length?I.join(" "):void 0}),S=I=>{const q=I.target;o("change",I),o("update:modelValue",q.value)},w=()=>{o("blur"),s.value=!1},B=()=>{s.value||(s.value=!0)};return(I,q)=>(l(),A(a(Or),{id:a(T),disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:q[1]||(q[1]=R=>i.value=!0),onMouseout:q[2]||(q[2]=R=>i.value=!1)},je({default:y(()=>[k("span",{class:u(a(pn).RadioButton)},[k("input",{id:a(T),name:e.name||a(T),value:e.value,type:"radio",checked:a(b),disabled:e.disabled,class:u(a(h)),"aria-describedby":a(x),onFocus:q[0]||(q[0]=R=>I.$emit("focus")),onChange:S,onBlur:w,onKeyup:B},null,42,nT),k("span",{class:u(a(g))},null,2)],2)]),_:2},[a(r).label?{name:"label",fn:y(()=>[f(I.$slots,"label")])}:void 0,a(r)["help-text"]?{name:"help-text",fn:y(()=>[f(I.$slots,"help-text")])}:void 0]),1032,["id","disabled","labelHidden"]))}});Ln.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the the radio button",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Radio button is selected",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const sT=["id","aria-invalid"],iT=["innerHTML"],Nt=M({props:{choices:null,modelValue:null,name:null,allowMultiple:{type:Boolean},titleHidden:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,{useUniqueId:s}=Oe(),i=m(()=>s("ChoiceList",n.name)),r=m(()=>n.allowMultiple?`${i.value}Multiple`:i.value),c=m(()=>F(ra.ChoiceList,n.titleHidden&&ra.titleHidden)),p=g=>n.allowMultiple?n.modelValue.includes(g.value):n.modelValue===g.value,T=g=>{const h=g.target;return h.checked?n.allowMultiple?[...n.modelValue,h.value]:h.value:Array.isArray(n.modelValue)?n.modelValue.filter(x=>x!==h.value):[]},b=g=>{o("update:modelValue",T(g)),o("change",g)};return(g,h)=>(l(),d("fieldset",{id:a(r),class:u(a(c)),"aria-invalid":e.error!==null},[k("legend",{class:u(a(ra).Title)},[f(g.$slots,"default")],2),k("ul",{class:u(a(ra).Choices)},[(l(!0),d(X,null,be(e.choices,(x,S)=>(l(),d("li",{key:S},[(l(),A(Ee(e.allowMultiple?a(xa):a(Ln)),{name:a(r),value:x.value,checked:p(x),disabled:x.disabled||e.disabled,ariaDescribedBy:e.error&&x.describedByError?a(Fr)(a(r)):null,onChange:b},je({_:2},[x.label?{name:"label",fn:y(()=>[k("span",null,z(x.label),1)])}:void 0,x.helpText?{name:"help-text",fn:y(()=>[k("span",null,z(x.helpText),1)])}:void 0]),1032,["name","value","checked","disabled","ariaDescribedBy"])),typeof x.renderChildren=="string"?(l(),d("div",{key:0,innerHTML:x.renderChildren,class:u(a(ra).ChoiceChildren)},null,10,iT)):(l(),A(Ee(x.renderChildren),{key:1,class:u(a(ra).ChoiceChildren)},null,8,["class"]))]))),128))],2),e.error?(l(),d("div",{key:0,class:u(a(ra).ChoiceError)},[L(a(va),{fieldID:a(r),message:e.error},null,8,["fieldID","message"])],2)):P("",!0)],10,sT))}});Nt.__docgenInfo={exportName:"default",displayName:"ChoiceList",description:"",tags:{},props:[{name:"choices",description:"Collection of choices",required:!0,type:{name:"Array",elements:[{name:"Choice"}]}},{name:"modelValue",description:"V-model will automatically bind to this prop",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allow merchants to select multiple options at once",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Toggles display of the title",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable all choices",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}}],slots:[{name:"default"}]};const lT="Polaris-Collapsible",rT="Polaris-Collapsible--isFullyClosed",cT="Polaris-Collapsible--expandOnPrint";var er={Collapsible:lT,isFullyClosed:rT,expandOnPrint:cT};const uT=["id","aria-expanded"],Uo=M({props:{id:null,expandOnPrint:{type:Boolean},open:{type:Boolean},transition:null},setup(e){const o=e,n=C(0),s=C("idle"),i=C(null),r=C(o.open),c=m(()=>s.value==="idle"&&o.open&&r.value),p=m(()=>s.value==="idle"&&!o.open&&!r.value),T=m(()=>F(er.Collapsible,p.value&&er.isFullyClosed,o.expandOnPrint&&er.expandOnPrint)),b=m(()=>N(v({},o.transition&&{transitionDuration:`${o.transition.duration}`,transitionTimingFunction:`${o.transition.timingFunction}`}),{maxHeight:c.value?"none":`${n.value}px`,overflow:c.value?"visible":"hidden"})),g=({target:h})=>{h===i.value&&(s.value="idle",r.value=o.open)};return Fe(()=>[o.open,r.value],()=>{o.open!==r.value&&(s.value="measuring")}),Ht(()=>{if(!!i.value)switch(s.value){case"idle":break;case"measuring":n.value=i.value.scrollHeight,s.value="animating";break;case"animating":n.value=o.open?i.value.scrollHeight:0}}),xe(()=>{!open||!i.value||(n.value=i.value.scrollHeight)}),(h,x)=>(l(),d("div",{id:e.id,style:Re(a(b)),ref_key:"collapsibleContainerRef",ref:i,class:u(a(T)),onTransitionend:g,"aria-expanded":e.open},[e.expandOnPrint||!a(p)?f(h.$slots,"default",{key:0}):P("",!0)],46,uT))}});Uo.__docgenInfo={exportName:"default",displayName:"Collapsible",description:"",tags:{},props:[{name:"id",description:"Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component\u2019s aria-controls prop.",required:!0,type:{name:"string"}},{name:"expandOnPrint",description:"Option to show collapsible content when printing",required:!1,type:{name:"boolean"}},{name:"open",description:"Toggle whether the collapsible is expanded or not.",required:!0,type:{name:"boolean"}},{name:"transition",description:"Assign transition properties to the collapsible",required:!1,type:{name:"Transition"}}],slots:[{name:"default"}]};function tr(e){const o=e.toString(16);return o.length===1?`0${o}`:o}function dT(e,o){const n=e/60,s=1-Math.abs(n%2-1),i=o*s;let r=0,c=0,p=0;return n>=0&&n<=1&&(r=o,c=i,p=0),n>=1&&n<=2&&(r=i,c=o,p=0),n>=2&&n<=3&&(r=0,c=o,p=i),n>=3&&n<=4&&(r=0,c=i,p=o),n>=4&&n<=5&&(r=i,c=0,p=o),n>=5&&n<=6&&(r=o,c=0,p=i),{red:r,green:c,blue:p}}function pT(e,o="b"){const{alpha:n=1}=e,s=e.red/255,i=e.green/255,r=e.blue/255,c=Math.max(s,i,r),p=Math.min(s,i,r),T=c-p,b=(c+p)/2;let g=0;if(c===0)g=0;else if(o==="b")g=T/c;else if(o==="l"){const w=b>.5?T/(2-c-p):T/(c+p);g=Number.isNaN(w)?0:w}let h=0;switch(c){case s:h=(i-r)/T+(i<r?6:0);break;case i:h=(r-s)/T+2;break;case r:h=(s-i)/T+4;break}const x=h/6*360,S=Jt(x,0,360);return{hue:S?dn(S,2):0,saturation:dn(Jt(g,0,1),4),brightness:dn(Jt(c,0,1),4),lightness:dn(b,4),alpha:dn(n,4)}}function mT(e){if(e.length===4){const i=(T,b)=>e.slice(T,b).repeat(2),r=parseInt(i(1,2),16),c=parseInt(i(2,3),16),p=parseInt(i(3,4),16);return{red:r,green:c,blue:p}}const o=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return{red:o,green:n,blue:s}}function yT({red:e,green:o,blue:n}){return`#${tr(e)}${tr(o)}${tr(n)}`}function Es(e){const{hue:o,saturation:n,brightness:s}=e,r=e.alpha||1,c=s*n;let{red:p,green:T,blue:b}=dT(o,c);const g=s-c;return p+=g,T+=g,b+=g,{red:Math.round(p*255),green:Math.round(T*255),blue:Math.round(b*255),alpha:r}}function gT(e){return yT(Es(N(v({},e),{alpha:1})))}function hT(e){const{hue:o,saturation:n,brightness:s,alpha:i=1}=pT(e,"b");return{hue:o,saturation:n,brightness:s,alpha:i}}const bT="Polaris-ColorPicker",fT="Polaris-ColorPicker__MainColor",vT="Polaris-ColorPicker--fullWidth",xT="Polaris-ColorPicker__Dragger",TT="Polaris-ColorPicker__ColorLayer",ST="Polaris-ColorPicker__HuePicker",CT="Polaris-ColorPicker__AlphaPicker",AT="Polaris-ColorPicker__Slidable";var Rt={ColorPicker:bT,MainColor:fT,fullWidth:vT,Dragger:xT,ColorLayer:TT,HuePicker:ST,AlphaPicker:CT,Slidable:AT};const kT=["data-dragging"],Ks=M({props:{draggerX:{default:0},draggerY:{default:0}},emits:["change","dragger-height"],setup(e,{emit:o}){const n=e,s=C(!1),i=C(null),r=C(null),c=C(0),p=C(0),T=m(()=>({transform:`translate3d(${c.value||n.draggerX}px, ${p.value||n.draggerY}px, 0)`}));wr||window.addEventListener("touchmove",B=>{s.value&&B.preventDefault()},{passive:!1}),xe(()=>{r.value&&o("dragger-height",r.value.clientWidth)});const b=B=>{if(w(B)){const{clientX:I,clientY:q}=B;x(I,q)}s.value=!0},g=()=>{s.value=!1},h=B=>{if(B.stopImmediatePropagation(),B.stopPropagation(),B.cancelable&&B.preventDefault(),S(B)){const q=B;x(q.clientX,q.clientY);return}const I=B;x(I.touches[0].clientX,I.touches[0].clientY)},x=(B,I)=>{if(i.value){const q=i.value.getBoundingClientRect(),R=B-q.left,U=I-q.top;o("change",{x:R,y:U})}};function S(B){return B.type==="mousemove"}function w(B){return B.type==="mousedown"}return(B,I)=>(l(),d("div",{ref_key:"slidableRef",ref:i,class:u(a(Rt).Slidable),"data-dragging":s.value,onMousedown:b,onTouchstart:b},[s.value?(l(),A(a(Je),{key:0,event:"mouseup",handler:g})):P("",!0),s.value?(l(),A(a(Je),{key:1,event:"mousemove",handler:h,passive:!1})):P("",!0),s.value?(l(),A(a(Je),{key:2,event:"touchmove",handler:h,passive:!1})):P("",!0),s.value?(l(),A(a(Je),{key:3,event:"touchend",handler:g})):P("",!0),s.value?(l(),A(a(Je),{key:4,event:"touchcancel",handler:g})):P("",!0),k("div",{style:Re(a(T)),class:u(a(Rt).Dragger),ref_key:"draggerRef",ref:r},null,6)],42,kT))}});Ks.__docgenInfo={exportName:"default",displayName:"Slidable",description:"",tags:{},props:[{name:"draggerX",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"draggerY",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"change",type:{names:["{ x: number; y: number; }"]}},{name:"dragger-height",type:{names:["number"]}}]};const Zd=M({props:{color:null,alpha:null},emits:["change"],setup(e,{emit:o}){const n=e,s=C(null),i=C(0),r=C(0),c=m(()=>ug(n.alpha,i.value,r.value)),p=m(()=>{const{red:h,green:x,blue:S}=Es(n.color),w=`${h}, ${x}, ${S}`;return`linear-gradient(to top, rgba(${w}, 0) 18px, rgba(${w}, 1) calc(100% - 18px))`});xe(()=>{T()});const T=()=>{s.value&&(i.value=s.value.clientHeight)},b=h=>{r.value=h},g=({y:h})=>{const x=dg(h,i.value);o("change",x)};return(h,x)=>(l(),d("div",{class:u(a(Rt).AlphaPicker),ref_key:"alphaPickerRef",ref:s},[k("div",{class:u(a(Rt).ColorLayer),style:Re({background:a(p)})},"\xA0",6),L(a(Ks),{draggerY:a(c),draggerX:0,onChange:g,onDraggerHeight:b},null,8,["draggerY"])],2))}});Zd.__docgenInfo={exportName:"default",displayName:"AlphaPicker",description:"",tags:{},props:[{name:"color",required:!0,type:{name:"HSBColor"}},{name:"alpha",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const Qd=M({props:{hue:null},emits:["change"],setup(e,{emit:o}){const n=e,s=C(null),i=C(0),r=C(0),c=m(()=>pg(n.hue,i.value,r.value));xe(()=>{p()});const p=()=>{s.value&&(i.value=s.value.clientHeight)},T=g=>{r.value=g},b=({y:g})=>{const h=mg(g,i.value);o("change",h)};return(g,h)=>(l(),d("div",{class:u(a(Rt).HuePicker),ref_key:"huePickerRef",ref:s},[L(a(Ks),{draggerY:a(c),draggerX:0,onChange:b,onDraggerHeight:T},null,8,["draggerY"])],2))}});Qd.__docgenInfo={exportName:"default",displayName:"HuePicker",description:"",tags:{},props:[{name:"hue",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const LT=["id","onMousedown"],Ys=M({props:{id:null,modelValue:null,allowAlpha:{type:Boolean},fullWidth:{type:Boolean},outputType:null},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,s=200,i=C(null),r=Ms({hue:0,saturation:0,brightness:0,alpha:1}),c=Ms({width:0,height:0}),p=R=>{R.preventDefault()},T=m(()=>F(Rt.ColorPicker,n.fullWidth&&Rt.fullWidth)),b=m(()=>r.alpha!==void 0&&n.allowAlpha?r.alpha:1),g=m(()=>{const{red:R,green:U,blue:Q}=Es({hue:r.hue,saturation:1,brightness:1});return`rgba(${R}, ${U}, ${Q}, ${b.value})`}),h=m(()=>Jt(r.saturation*c.width,0,c.width)),x=m(()=>Jt(c.height-r.brightness*c.height,0,c.height)),S=m(()=>{if(n.outputType==="hex")return gT(r);if(n.outputType==="rgb"){const R=Es(r);return`rgba(${R.red}, ${R.green}, ${R.blue}, ${b.value})`}return r}),w=Vt(()=>{i.value&&(c.width=i.value.clientWidth,c.height=i.value.clientHeight)},s,{leading:!0,trailing:!0,maxWait:s});if(typeof n.modelValue=="object"&&Object.assign(r,n.modelValue),typeof n.modelValue=="string"){let R;if(/#[0-9abcdef]{3,6}/.test(n.modelValue))R=N(v({},mT(n.modelValue)),{alpha:1});else{const U=n.modelValue.replace(/^rgba?\(|\s+|\)$/g,"").split(",");R={red:parseInt(U[0],10),green:parseInt(U[1],10),blue:parseInt(U[2],10),alpha:U[2]?parseFloat(U[3]):1}}Object.assign(r,N(v({},hT(R)),{alpha:R.alpha}))}xe(()=>{i.value&&(c.width=i.value.clientWidth,c.height=i.value.clientHeight)});const B=R=>{r.hue=R,o("change",S.value),o("update:modelValue",S.value)},I=R=>{r.alpha=R,o("change",S.value),o("update:modelValue",S.value)},q=({x:R,y:U})=>{r.saturation=Jt(R/c.width,0,1),r.brightness=Jt(1-U/c.height,0,1),o("change",S.value),o("update:modelValue",S.value)};return(R,U)=>(l(),d("div",{id:e.id,class:u(a(T)),onMousedown:kd(p,["prevent"])},[k("div",{ref_key:"mainColorRef",ref:i,class:u(a(Rt).MainColor)},[k("div",{class:u(a(Rt).ColorLayer),style:Re({backgroundColor:a(g)})},"\xA0",6),L(a(Ks),{draggerX:a(h),draggerY:a(x),onChange:q},null,8,["draggerX","draggerY"])],2),L(a(Qd),{hue:a(r).hue,onChange:B},null,8,["hue"]),e.allowAlpha?(l(),A(a(Zd),{key:0,alpha:a(b),color:a(r),onChange:I},null,8,["alpha","color"])):P("",!0),L(a(Je),{event:"resize",handler:a(w)},null,8,["handler"])],42,LT))}});Ys.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:`The currently selected color.
The color can be HSB object (same with Shopify) or RGB, Hex string`,required:!0,type:{name:"union",elements:[{name:"Color"},{name:"string"}]}},{name:"allowAlpha",description:"Allow user to select an alpha value",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow HuePicker to take the full width",required:!1,type:{name:"boolean"}},{name:"outputType",description:"Color output format",required:!1,type:{name:"union",elements:[{name:'"hsb"'},{name:'"rgb"'},{name:'"hex"'}]}}],events:[{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const wT="Polaris-Combobox__Listbox";var PT={Listbox:wT};const Ta=M({props:{allowMultiple:{type:Boolean},preferredPosition:{default:"below"}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e;Ge("comboboxListboxOptionContext",{allowMultiple:n.allowMultiple});const s=C(!1),i=C(""),r=C(""),c=C(""),p=C(!1),T=C(!1),b=C(null),g=de(),h=m(()=>{var D;return(D=g.default)==null?void 0:D.call(g)}),x=m(()=>!s.value&&h),S=()=>{T.value||(s.value=!1),i.value=""},w=()=>{s.value=!0,i.value=""},B=()=>{if(n.allowMultiple)T.value=!0,i.value="";else{S();return}b.value.forceUpdatePosition()},I=()=>{x.value&&w()},q=()=>{x.value&&(s.value=!0)},R=()=>{T.value=!1,s.value&&S()},U={activeOptionId:i.value,expanded:s.value,listboxId:c.value,setTextFieldFocused:D=>{p.value=D},setTextFieldLabelId:D=>{r.value=D},onTextFieldFocus:I,onTextFieldChange:q,onTextFieldBlur:R};Ge("comboboxTextFieldContext",U);const Q={setActiveOptionId:D=>{i.value=D},setListboxId:D=>{c.value=D},listboxId:c.value,textFieldLabelId:r.value,onOptionSelected:B,textFieldFocused:p.value,onKeyToBottom:()=>{o("scrolled-to-bottom")}};return Ge("comboboxListboxContext",Q),(D,Y)=>(l(),A(a(tt),{ref_key:"popoverRef",ref:b,active:s.value,onClose:S,autofocusTarget:"none",preventFocusOnClose:"",fullWidth:"",preferInputActivator:!1,preferredPosition:e.preferredPosition},je({_:2},[a(g).activator?{name:"activator",fn:y(()=>[f(D.$slots,"activator")])}:void 0,a(g).default?{name:"content",fn:y(()=>[L(a(Gs),{onScrolledToBottom:Y[0]||(Y[0]=E=>D.$emit("scrolled-to-bottom"))},{default:y(()=>[k("div",{class:u(a(PT).Listbox)},[f(D.$slots,"default")],2)]),_:3})])}:void 0]),1032,["active","preferredPosition"]))}});Ta.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"},defaultValue:{func:!1,value:"'below'"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"default"}]};function xn(e){return`${e}Label`}const _T="Polaris-TextField",MT="Polaris-TextField--multiline",NT="Polaris-TextField__Input",BT="Polaris-TextField--hasValue",IT="Polaris-TextField--focus",DT="Polaris-TextField__VerticalContent",$T="Polaris-TextField__Backdrop",FT="Polaris-TextField--error",ET="Polaris-TextField--readOnly",OT="Polaris-TextField--disabled",qT="Polaris-TextField__Prefix",RT="Polaris-TextField--suggestion",VT="Polaris-TextField__Suffix",HT="Polaris-TextField__CharacterCount",UT="Polaris-TextField__AlignFieldBottom",jT="Polaris-TextField__ClearButton",WT="Polaris-TextField__Hidden",zT="Polaris-TextField__Spinner",GT="Polaris-TextField__SpinnerIcon",XT="Polaris-TextField__Resizer",KT="Polaris-TextField__DummyInput",YT="Polaris-TextField__Segment",ZT="Polaris-TextField--monospaced";var we={TextField:_T,multiline:MT,Input:NT,hasValue:BT,focus:IT,VerticalContent:DT,Backdrop:$T,error:FT,readOnly:ET,disabled:OT,Prefix:qT,suggestion:RT,"Input-hasClearButton":"Polaris-TextField__Input--hasClearButton","Input-suffixed":"Polaris-TextField__Input--suffixed","Input-alignRight":"Polaris-TextField__Input--alignRight","Input-alignLeft":"Polaris-TextField__Input--alignLeft","Input-alignCenter":"Polaris-TextField__Input--alignCenter",Suffix:VT,CharacterCount:HT,AlignFieldBottom:UT,ClearButton:jT,Hidden:WT,Spinner:zT,SpinnerIcon:GT,Resizer:XT,DummyInput:KT,Segment:YT,monospaced:ZT};const QT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},JT=k("path",{"fill-rule":"evenodd",d:"M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM7.707 6.293a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 1 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293z"},null,-1),eS=[JT];function tS(e,o){return l(),d("svg",QT,eS)}var Jd={render:tS};function aS(e){return`${e}Error`}function Zs(e){return`${e}HelpText`}const ep=M({emits:["click","change","mouseup","mousedown"],setup(e,{emit:o}){const n=s=>{o("click"),o("change",s)};return(s,i)=>(l(),d("div",{"aria-hidden":"true",class:u(a(we).Spinner)},[k("div",{role:"button",tabindex:"-1",class:u(a(we).Segment),onClick:i[0]||(i[0]=r=>n(1)),onMousedown:i[1]||(i[1]=r=>s.$emit("mousedown")),onMouseup:i[2]||(i[2]=r=>s.$emit("mouseup"))},[k("div",{class:u(a(we).SpinnerIcon)},[L(a(re),{source:a(Ad)},null,8,["source"])],2)],34),k("div",{role:"button",tabindex:"-1",class:u(a(we).Segment),onClick:i[3]||(i[3]=r=>n(-1)),onMousedown:i[4]||(i[4]=r=>s.$emit("mousedown")),onMouseup:i[5]||(i[5]=r=>s.$emit("mouseup"))},[k("div",{class:u(a(we).SpinnerIcon)},[L(a(re),{source:a(ya)},null,8,["source"])],2)],34)],2))}});ep.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},events:[{name:"mousedown"},{name:"mouseup"},{name:"click"},{name:"change",type:{names:["number"]}}]};const oS=["innerHTML"],nS=["innerHTML"],tp=M({props:{contents:null,currentHeight:null,minimumLines:null},emits:["height-change"],setup(e,{emit:o}){const n=e,s={"&":"&amp;","<":"&lt;",">":"&gt;","\n":"<br>","\r":""},i=new RegExp(`[${Object.keys(s).join()}]`,"g"),r=C(null),c=C(null),p=C(),T=C(n.currentHeight),b=S=>s[S],g=S=>S?`${S.replace(i,b)}<br>`:"<br>",h=S=>{let w="";for(let B=0;B<S;B++)w+="<br>";return w},x=()=>{p.value&&cancelAnimationFrame(p.value),p.value=requestAnimationFrame(()=>{if(!r.value||!c.value)return;const S=Math.max(r.value.offsetHeight,c.value.offsetHeight);S!==T.value&&o("height-change",S)})};return xe(()=>{p.value&&cancelAnimationFrame(p.value)}),Ht(()=>{x()}),(S,w)=>(l(),d("div",{"aria-hidden":"true",class:u(a(we).Resizer)},[L(a(Je),{event:"resize",handler:x}),k("div",{ref_key:"contentNode",ref:r,class:u(a(we).DummyInput),innerHTML:g(e.contents)},null,10,oS),e.minimumLines?(l(),d("div",{key:0,ref_key:"minimumLinesNode",ref:c,class:u(a(we).DummyInput),innerHTML:h(e.minimumLines)},null,10,nS)):P("",!0)],2))}});tp.__docgenInfo={exportName:"default",displayName:"Resizer",description:"",tags:{},props:[{name:"contents",required:!1,type:{name:"string"}},{name:"currentHeight",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"minimumLines",required:!1,type:{name:"number"}}],events:[{name:"height-change",type:{names:["number"]}}]};const sS="Polaris-Connected",iS="Polaris-Connected__Item";var Ls={Connected:sS,Item:iS,"Item-primary":"Polaris-Connected__Item--primary","Item-focused":"Polaris-Connected__Item--focused"};const ws=M({props:{position:null},emits:["focus","blur"],setup(e,{emit:o}){const n=e,s=C(!1),i=m(()=>F(Ls.Item,s.value&&Ls["Item-focused"],n.position==="primary"&&Ls["Item-primary"])),r=()=>{s.value=!0,o("focus")},c=()=>{s.value=!1,o("blur")};return(p,T)=>(l(),d("div",{class:u(a(i)),onFocus:r,onBlur:c},[f(p.$slots,"default")],34))}});ws.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"position",required:!0,type:{name:"ItemPosition"}}],events:[{name:"focus"},{name:"blur"}],slots:[{name:"default"}]};const ap=M({setup(e){return(o,n)=>(l(),d("div",{class:u(a(Ls).Connected)},[o.$slots.left?(l(),A(a(ws),{key:0,position:"left"},{default:y(()=>[f(o.$slots,"left")]),_:3})):P("",!0),o.$slots.default?(l(),A(a(ws),{key:1,position:"primary"},{default:y(()=>[f(o.$slots,"default")]),_:3})):P("",!0),o.$slots.right?(l(),A(a(ws),{key:2,position:"right"},{default:y(()=>[f(o.$slots,"right")]),_:3})):P("",!0)],2))}});ap.__docgenInfo={exportName:"default",displayName:"Connected",description:"",tags:{},slots:[{name:"left"},{name:"default"},{name:"right"}]};const lS="Polaris-Labelled--hidden",rS="Polaris-Labelled__LabelWrapper",cS="Polaris-Labelled__HelpText",uS="Polaris-Labelled__Action";var mn={hidden:lS,LabelWrapper:rS,HelpText:cS,Error:"Polaris-Labelled__Error",Action:uS};const dS="Polaris-Label",pS="Polaris-Label--hidden",mS="Polaris-Label__Text",yS="Polaris-Label__RequiredIndicator";var Ss={Label:dS,hidden:pS,Text:mS,RequiredIndicator:yS};const gS=["id","for"],op=M({props:{id:null,hidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,n=m(()=>F(Ss.Label,o.hidden&&Ss.hidden)),s=m(()=>F(Ss.Text,o.requiredIndicator&&Ss.RequiredIndicator));return(i,r)=>(l(),d("div",{class:u(a(n))},[k("label",{id:a(xn)(e.id),for:e.id,class:u(a(s))},[f(i.$slots,"default")],10,gS)],2))}});op.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"string"}},{name:"hidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const hS=["id"],jo=M({props:{id:null,error:{type:[null,Boolean]},action:null,labelHidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,n=m(()=>o.error&&typeof o.error!="boolean"),s=m(()=>F(o.labelHidden&&mn.hidden));return(i,r)=>(l(),d("div",{class:u(a(s))},[i.$slots.label?(l(),d("div",{key:0,class:u(a(mn).LabelWrapper)},[L(a(op),ye({id:e.id,requiredIndicator:e.requiredIndicator,hidden:!1},i.$attrs),{default:y(()=>[f(i.$slots,"label")]),_:3},16,["id","requiredIndicator"]),e.action?(l(),d("div",{key:0,class:u(a(mn).Action)},[L(a(mt),{action:e.action,overrides:{plain:!0}},null,8,["action"])],2)):P("",!0)],2)):P("",!0),f(i.$slots,"default"),a(n)?(l(),d("div",{key:1,class:u(a(mn).Error)},[typeof e.error=="string"?(l(),A(a(va),{key:0,message:e.error,fieldID:a(aS)(e.id)},null,8,["message","fieldID"])):(l(),A(Ee(e.error),{key:1}))],2)):P("",!0),i.$slots["help-text"]?(l(),d("div",{key:2,class:u(a(mn).HelpText),id:a(Zs)(e.id)},[f(i.$slots,"help-text")],10,hS)):P("",!0)],2))}});jo.__docgenInfo={exportName:"default",displayName:"Labelled",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"TSIndexedAccessType"}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"ErrorType"},{name:"boolean"}]}},{name:"action",description:"An action",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"label"},{name:"default"},{name:"help-text"}]};const bS=["id"],fS=["id"],vS=["id"],xS=["aria-live"],TS=["disabled"],SS=k("p",null,"Clear button",-1),_e=M({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue","clear-button-click"],setup(e,{emit:o}){const n=e,s=ve("lang"),i=C(null),r=C(null),c=C(null),p=C(null),T=C(null),b=de(),g=m(()=>{var O;return(O=b["connected-left"])==null?void 0:O.call(b)}),h=m(()=>{var O;return(O=b["connected-right"])==null?void 0:O.call(b)}),x=m(()=>{var O;return(O=b["help-text"])==null?void 0:O.call(b)}),S=m(()=>{var O;return(O=b.prefix)==null?void 0:O.call(b)}),w=m(()=>{var O;return(O=b.suffix)==null?void 0:O.call(b)}),B=m(()=>{var O;return(O=b.verticalContent)==null?void 0:O.call(b)}),I=C(),q=C(),R=C();Fe(()=>n.focused,()=>{!i.value||n.focused===void 0||(n.focused?i.value.focus():i.value.blur())}),Fe([()=>q.value,()=>n.modelValue,()=>n.type,()=>n.suggestion],()=>{const O=n.type==="text"||n.type==="tel"||n.type==="search"||n.type==="url"||n.type==="password";!i.value||!O||!n.suggestion||i.value.setSelectionRange(n.modelValue.length,n.suggestion.length)});const{useUniqueId:U}=Oe(),Q=m(()=>U("TextField",n.id)),D=m(()=>n.type==="currency"?"text":n.type),Y=m(()=>{if(!!n.multiline)return typeof n.multiline=="number"?n.multiline:1}),E=m(()=>G.value!==""),j=m(()=>n.multiline&&I.value?{height:`${I.value}px`}:{}),se=m(()=>F(we.TextField,Boolean(G.value)&&we.hasValue,n.disabled&&we.disabled,n.readOnly&&we.readOnly,n.error&&we.error,n.multiline&&we.multiline,q.value&&we.focus)),he=m(()=>{const O=n.align&&we[Pe("Input-align",n.align)];return F(we.Input,O,w.value&&we["Input-suffixed"],n.clearButton&&we["Input-hasClearButton"],n.monospaced&&we.monospaced)}),te=m(()=>F(we.CharacterCount,n.multiline&&we.AlignFieldBottom)),Me=m(()=>F(we.Backdrop,g.value&&we["Backdrop-connectedLeft"],h.value&&we["Backdrop-connectedRight"])),$=m(()=>F(we.ClearButton,!E.value&&we.AlignFieldBottom)),G=m(()=>n.suggestion?n.suggestion:n.modelValue),K=m(()=>n.step?n.step:1),le=m(()=>n.max?n.max:1/0),pe=m(()=>n.min?n.min:-1/0),$e=m(()=>{if(!!n.multiline)return Boolean(n.multiline)||n.multiline>0?{"aria-multiline":!0}:void 0}),ge=m(()=>G.value.length);m(()=>n.maxLength?s.Polaris.TextField.characterCountWithMaxLength({count:ge.value,limit:n.maxLength}):s.Polaris.TextField.characterCount({count:ge}));const Se=m(()=>n.maxLength?`${ge.value}/${n.maxLength}`:ge.value),ae=m(()=>{const O=[];return n.error&&O.push(`${Q.value}Error`),x.value&&O.push(Zs(Q.value)),n.showCharacterCount&&O.push(`${Q.value}-CharacterCounter`),O.length?O.join(" "):""}),Te=m(()=>{const O=[];return S.value&&O.push(`${Q.value}-Prefix`),w.value&&O.push(`${Q.value}-Suffix`),B.value&&O.push(`${Q.value}-VerticalContent`),O.unshift(xn(Q.value)),O.join(" ")}),De=O=>{I.value=O},qe=O=>O instanceof HTMLElement&&(c.value&&c.value.contains(O)||p.value&&p.value.contains(O)),Ne=O=>{const W=O.target;qe(W)||(q.value=!0)},lt=O=>{var ue;const W=O.target;qe(W)||q.value||(ue=i.value)==null||ue.focus()},Dt=O=>{const W=O.target;o("update:modelValue",W.value),o("change",O)},rt=O=>{const W=ze=>(ze.toString().split(".")[1]||[]).length,ue=n.modelValue?parseFloat(n.modelValue):0;if(typeof ue!="number")return;const Be=Math.max(W(ue),W(K.value)),Ve=Math.min(Number(le.value),Math.max(ue+O*K.value,Number(pe.value)));o("update:modelValue",String(Ve.toFixed(Be)))},ht=()=>{clearTimeout(R.value)},ee=()=>{let ue=200;const Be=()=>{ue>50&&(ue-=10),rt(0),R.value=window.setTimeout(Be,ue)};R.value=window.setTimeout(Be,ue),document.addEventListener("mouseup",ht,{once:!0})},ke=O=>{const{key:W,which:ue}=v({},O),Be=/[\d.eE+-]$/;n.type!=="number"||ue!==13||Be.test(W)||O.preventDefault()},Z=O=>{var W;n.selectTextOnFocus&&!n.suggestion&&((W=(n.multiline?r:i).value)==null||W.select()),o("focus",O)};return(O,W)=>(l(),A(a(jo),{id:a(Q),error:e.error,action:e.labelAction,labelHidden:e.labelHidden,requiredIndicator:e.requiredIndicator},je({default:y(()=>[L(a(ap),null,je({default:y(()=>[k("div",{class:u(a(se)),onFocus:Ne,onClick:lt,onBlur:W[3]||(W[3]=ue=>q.value=!1)},[a(b).prefix?(l(),d("div",{key:0,id:`${a(Q)}Prefix`,class:u(a(we).Prefix),ref_key:"prefixRef",ref:c},[f(O.$slots,"prefix")],10,bS)):P("",!0),a(b)["vertical-content"]?(l(),d("div",{key:1,class:u(a(we).VerticalContent),id:`${a(Q)}-VerticalContent`,ref_key:"verticalContentRef",ref:T},[f(O.$slots,"vertical-content"),(l(),A(Ee(e.multiline?"textarea":"input"),ye({id:a(Q),name:e.name,disabled:e.disabled,readonly:e.readOnly,role:e.role,autofocus:e.autoFocus,value:e.modelValue,placeholder:e.placeholder,style:a(j),autocomplete:e.autoComplete,class:a(he),ref:e.multiline?"textareaRef":"inputRef",min:e.min,max:e.max,step:e.step,minlength:e.minLength,maxlength:e.maxLength,spellcheck:e.spellCheck,pattern:e.pattern,inputMode:e.inputMode,rows:a(Y),type:a(D),"aria-describedby":a(ae),"aria-labelledby":a(Te),"aria-invalid":Boolean(e.error),"aria-owns":e.ariaOwns,"aria-activedescendant":e.ariaActiveDescendant,"aria-autocomplete":e.ariaAutocomplete,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-required":e.requiredIndicator},a($e),{onInput:Dt,onKeydown:ke,onFocus:Z,onBlur:W[0]||(W[0]=ue=>O.$emit("blur"))}),{default:y(()=>[e.multiline?(l(),d(X,{key:0},[ie(z(e.modelValue),1)],64)):P("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"]))],10,fS)):(l(),A(Ee(e.multiline?"textarea":"input"),ye({key:2,id:a(Q),name:e.name,disabled:e.disabled,readonly:e.readOnly,role:e.role,autofocus:e.autoFocus,value:e.modelValue,placeholder:e.placeholder,style:a(j),autocomplete:e.autoComplete,class:a(he),ref:e.multiline?"textareaRef":"inputRef",min:e.min,max:e.max,step:e.step,minlength:e.minLength,maxlength:e.maxLength,spellcheck:e.spellCheck,pattern:e.pattern,inputMode:e.inputMode,rows:a(Y),type:a(D),"aria-describedby":a(ae),"aria-labelledby":a(Te),"aria-invalid":Boolean(e.error),"aria-owns":e.ariaOwns,"aria-activedescendant":e.ariaActiveDescendant,"aria-autocomplete":e.ariaAutocomplete,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-required":e.requiredIndicator},a($e),{onInput:Dt,onKeydown:ke,onFocus:Z,onBlur:W[1]||(W[1]=ue=>O.$emit("blur"))}),{default:y(()=>[e.multiline?(l(),d(X,{key:0},[ie(z(e.modelValue),1)],64)):P("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"])),a(b).suffix?(l(),d("div",{key:3,id:`${a(Q)}Suffix`,class:u(a(we).Suffix),ref_key:"suffixRef",ref:p},[f(O.$slots,"suffix")],10,vS)):P("",!0),e.showCharacterCount?(l(),d("div",{key:4,class:u(a(te)),"aria-live":q.value?"polite":"off","aria-atomic":"true"},[k("p",null,z(a(Se)),1)],10,xS)):P("",!0),a(E)&&e.clearButton?(l(),d("button",{key:5,class:u(a($)),disabled:e.disabled,onClick:W[2]||(W[2]=ue=>O.$emit("clear-button-click",a(Q)))},[L(a(ot),null,{default:y(()=>[SS]),_:1}),L(a(re),{source:a(Jd),color:"base"},null,8,["source"])],10,TS)):P("",!0),e.type==="number"&&e.step!==0&&!e.disabled&&!e.readOnly?(l(),A(a(ep),{key:6,onChange:rt,onMousedown:ee,onMouseup:ht})):P("",!0),k("div",{class:u(a(Me))},null,2),e.multiline?(l(),A(a(tp),{key:7,contents:a(G)||e.placeholder,currentHeight:I.value,minimumLines:typeof e.multiline=="number"?e.multiline:1,onHeightChange:De},null,8,["contents","currentHeight","minimumLines"])):P("",!0)],34)]),_:2},[a(b)["connected-left"]?{name:"left",fn:y(()=>[f(O.$slots,"connected-left")])}:void 0,a(b)["connected-right"]?{name:"right",fn:y(()=>[f(O.$slots,"connected-right")])}:void 0]),1024)]),_:2},[a(b).label?{name:"label",fn:y(()=>[f(O.$slots,"label")])}:void 0,a(b)["help-text"]?{name:"help-text",fn:y(()=>[f(O.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden","requiredIndicator"]))}});_e.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"ErrorType"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"blur"},{name:"clear-button-click",type:{names:["string"]}},{name:"focus",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"connected-left"},{name:"connected-right"},{name:"prefix"},{name:"vertical-content"},{name:"suffix"}]};const wn=M({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},suggestion:null,readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:{default:"text"},name:null,id:null,role:null,step:null,autoComplete:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:{default:"list"},showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const n=e,{activeOptionId:s,listboxId:i,expanded:r,setTextFieldFocused:c,setTextFieldLabelId:p,onTextFieldFocus:T,onTextFieldChange:b,onTextFieldBlur:g}=ve("comboboxTextFieldContext",{}),{useUniqueId:h}=Oe(),x=h("ComboboxTextField"),S=m(()=>n.id||x),w=m(()=>xn(n.id||x));Fe(()=>w.value,()=>{p&&p(w.value)});const B=()=>{o("focus"),T&&T(),c&&c(!0)},I=()=>{o("blur"),g&&g(),c&&c(!1)},q=R=>{const U=R.target;o("update:modelValue",U.value),o("change",R),b&&b()};return(R,U)=>(l(),A(a(_e),ye(n,{modelValue:e.modelValue,id:a(S),type:e.type,ariaAutoComplete:e.ariaAutocomplete,"aria-haspopup":"listbox",ariaActiveDescendant:a(s),ariaControls:a(i),ariaExpanded:a(r),onFocus:B,onBlur:I,onChange:q}),je({_:2},[R.$slots.label?{name:"label",fn:y(()=>[f(R.$slots,"label")])}:void 0,R.$slots["help-text"]?{name:"help-text",fn:y(()=>[f(R.$slots,"help-text")])}:void 0,R.$slots.prefix?{name:"prefix",fn:y(()=>[f(R.$slots,"prefix")])}:void 0,R.$slots.suffix?{name:"suffix",fn:y(()=>[f(R.$slots,"suffix")])}:void 0,R.$slots["connected-left"]?{name:"connected-left",fn:y(()=>[f(R.$slots,"connected-left")])}:void 0,R.$slots["connected-right"]?{name:"connected-right",fn:y(()=>[f(R.$slots,"connected-right")])}:void 0,R.$slots["vertical-content"]?{name:"vertical-content",fn:y(()=>[f(R.$slots,"vertical-content")])}:void 0]),1040,["modelValue","id","type","ariaAutoComplete","ariaActiveDescendant","ariaControls","ariaExpanded"]))}});wn.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"suggestion",description:"An inline autocomplete suggestion containing the input value. The characters that complete the input value are selected for ease of deletion on input change or keypress of Backspace/Delete. The selected substring is visually highlighted with subdued styling.",required:!1,type:{name:"string"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"ErrorType"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'text'"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"string"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'list'"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"},{name:"connected-left"},{name:"connected-right"},{name:"vertical-content"}]};function Wo(){const e=ve("frameContext",{});function o(){if(!e)throw new Vh("No frame context was provided.");return e}return{useFrame:o}}const Pn=M({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean},contextControl:null,secondaryMenu:null},setup(e){const o=e;Ut();const{useFrame:n}=Wo(),{setContextualSaveBar:s,removeContextualSaveBar:i}=n(),r=de();return xe(()=>{const{message:c,saveAction:p,discardAction:T,alignContentFlush:b,fullWidth:g}=o;s({message:c,saveAction:p,discardAction:T,alignContentFlush:b,fullWidth:g,contextControl:r.contextControl&&r.contextControl(),secondaryMenu:r.secondaryMenu&&r.secondaryMenu()})}),ct(()=>{i()}),(c,p)=>null}});Pn.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}},{name:"contextControl",description:"Accepts a component that is used to help users switch between different contexts",required:!1,type:{name:"any"}},{name:"secondaryMenu",description:"Accepts a node that is rendered to the left of the discard and save actions",required:!1,type:{name:"any"}}]};const CS="Polaris-DatePicker",AS="Polaris-DatePicker__MonthLayout",kS="Polaris-DatePicker__MonthContainer",LS="Polaris-DatePicker__Month",wS="Polaris-DatePicker__DayCell",PS="Polaris-DatePicker__Day",_S="Polaris-DatePicker__EmptyDayCell",MS="Polaris-DatePicker__Weekday",NS="Polaris-DatePicker__Header",BS="Polaris-DatePicker__Title",IS="Polaris-DatePicker__Week";var Ie={DatePicker:CS,MonthLayout:AS,MonthContainer:kS,Month:LS,"Month-current":"Polaris-DatePicker__Month--current",DayCell:wS,"DayCell-inRange":"Polaris-DatePicker__DayCell--inRange",Day:PS,"Day-today":"Polaris-DatePicker__Day--today","Day-inRange":"Polaris-DatePicker__Day--inRange","Day-selected":"Polaris-DatePicker__Day--selected","Day-disabled":"Polaris-DatePicker__Day--disabled",EmptyDayCell:_S,Weekday:MS,"Weekday-current":"Polaris-DatePicker__Weekday--current",Header:NS,Title:BS,"Day-firstInRange":"Polaris-DatePicker__Day--firstInRange","Day-hasRange":"Polaris-DatePicker__Day--hasRange","Day-hoverRight":"Polaris-DatePicker__Day--hoverRight","Day-lastInRange":"Polaris-DatePicker__Day--lastInRange",Week:IS};const ha={months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}};function bn(e){switch(e){case 0:return"january";case 1:return"february";case 2:return"march";case 3:return"april";case 4:return"may";case 5:return"june";case 6:return"july";case 7:return"august";case 8:return"september";case 9:return"october";case 10:return"november";case 11:return"december"}}function Qc(e){switch(e){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}const DS=["tabIndex","aria-label","aria-disabled","aria-pressed"],vr=M({props:{focused:{type:Boolean},day:null,selected:{type:Boolean},inRange:{type:Boolean},inHoveringRange:{type:Boolean},disabled:{type:Boolean},lastDayOfMonth:null,isLastSelectedDay:{type:Boolean},isFirstSelectedDay:{type:Boolean},isHoveringRight:{type:Boolean},rangeIsDifferent:{type:Boolean},weekday:null,selectedAccessibilityLabelPrefix:null},emits:["focus","hover","click"],setup(e,{emit:o}){const n=e,s=C(null),i=m(()=>n.lastDayOfMonth||n.day),r=m(()=>n.day?Et(new Date,n.day):null),c=m(()=>n.day?n.day.getDate():null),p=m(()=>(n.focused||n.selected||r.value||c.value===1)&&!n.disabled?0:-1),T=m(()=>F(Ie.DayCell,n.selected&&Ie["DayCell-selected"],(n.inRange||n.inHoveringRange)&&!n.disabled&&Ie["DayCell-inRange"],n.isLastSelectedDay&&Ie["DayCell-lastInRange"],n.isFirstSelectedDay&&Ie["DayCell-firstInRange"],n.isHoveringRight&&Ie["DayCell-hoverRight"],n.rangeIsDifferent&&Ie["DayCell-hasRange"])),b=m(()=>F(Ie.Day,n.selected&&Ie["Day-selected"],n.disabled&&Ie["Day-disabled"],r.value&&Ie["Day-today"],(n.inRange||n.inHoveringRange)&&!n.disabled&&Ie["Day-inRange"],n.isLastSelectedDay&&Ie["Day-lastInRange"],n.isFirstSelectedDay&&Ie["Day-firstInRange"],n.isHoveringRight&&Ie["Day-hoverRight"],n.rangeIsDifferent&&Ie["Day-hasRange"])),g=m(()=>{if(!n.day)return null;const B=bn(n.day.getMonth());return B?ha.months[B]:""}),h=m(()=>[n.selected&&n.selectedAccessibilityLabelPrefix?`${n.selectedAccessibilityLabelPrefix} `:"",`${r.value?"Today ":""}`,`${n.weekday?n.weekday:""} `,`${g.value} `,`${c.value} `,`${n.day?n.day.getFullYear():new Date().getFullYear()}`].join(""));Ht(()=>{n.focused&&s.value&&setTimeout(()=>{s.value.focus()},10)});const x=()=>{o("focus",n.day)},S=()=>{o("hover",i.value)},w=()=>{!n.disabled&&n.day&&o("click",n.day)};return(B,I)=>e.day?(l(),d("td",{key:0,class:u(a(T))},[k("button",{type:"button",ref_key:"dayRef",ref:s,tabIndex:a(p),class:u(a(b)),"aria-label":a(h),"aria-disabled":e.disabled,"aria-pressed":e.selected,onFocus:x,onMouseover:S,onClick:w},z(a(c)),43,DS)],2)):(l(),d("td",{key:1,class:u(a(Ie).EmptyDayCell),onMouseover:S},null,34))}});vr.__docgenInfo={exportName:"default",displayName:"Day",description:"",tags:{},props:[{name:"focused",required:!1,type:{name:"boolean"}},{name:"day",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"inRange",required:!1,type:{name:"boolean"}},{name:"inHoveringRange",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"lastDayOfMonth",required:!1,type:{name:"any"}},{name:"isLastSelectedDay",required:!1,type:{name:"boolean"}},{name:"isFirstSelectedDay",required:!1,type:{name:"boolean"}},{name:"isHoveringRight",required:!1,type:{name:"boolean"}},{name:"rangeIsDifferent",required:!1,type:{name:"boolean"}},{name:"weekday",required:!1,type:{name:"string"}},{name:"selectedAccessibilityLabelPrefix",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["union"]}},{name:"hover",type:{names:["union"]}},{name:"click",type:{names:["Date"]}}]};const $S=["aria-label"],np=M({props:{label:null,title:null,current:{type:Boolean}},setup(e){const o=e,n=m(()=>F(Ie.Weekday,o.current&&Ie["Weekday-current"]));return(s,i)=>(l(),d("th",{"aria-label":e.label,scope:"col",class:u(a(n))},z(e.title),11,$S))}});np.__docgenInfo={exportName:"default",displayName:"Weekday",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"current",required:!0,type:{name:"boolean"}}]};const xr=M({props:{focusedDate:null,selected:null,hoverDate:null,month:null,year:null,disableDatesBefore:null,disableDatesAfter:null,allowRange:{type:Boolean},weekStartsOn:null,accessibilityLabelPrefixes:null},emits:["focus","hover","click","change"],setup(e,{emit:o}){const n=e,s=new Date,i=m(()=>s.getMonth()===n.month&&s.getFullYear()===n.year),r=m(()=>F(Ie.Title,i.value&&Ie["Month-current"])),c="Polaris-DatePicker__WeekHeadings",p=m(()=>yg(n.month,n.year,n.weekStartsOn)),T=m(()=>{const E=bn(n.month);return E?ha.months[E]:""}),b=m(()=>gg(n.weekStartsOn)),g=m(()=>new Date(n.year,n.month+1,0)),h=m(()=>!(n.selected&&Et(n.selected.start,n.selected.end))),x=E=>{const j=fg(n.allowRange?n.selected:void 0,E);o("change",j)},S=E=>n.disableDatesBefore&&Ns(E,n.disableDatesBefore)||n.disableDatesAfter&&Bs(E,n.disableDatesAfter),w=E=>n.allowRange&&n.selected&&Y(E,n.selected),B=E=>n.allowRange&&n.selected&&(!Et(n.selected.start,n.selected.end)&&D(E,n.selected)||n.hoverDate&&Et(n.selected.start,n.selected.end)&&Bs(n.hoverDate,n.selected.start)&&Et(E,n.hoverDate)&&!w(E)),I=E=>n.hoverDate&&Ns(E,n.hoverDate),q=E=>{if(!n.accessibilityLabelPrefixes)return"";const[j,se]=n.accessibilityLabelPrefixes;if(n.allowRange&&w(E)||!n.allowRange&&j)return j;if(n.allowRange&&B(E))return se},R=(E,j,se)=>{if(!n.allowRange||!j||!se||E==null)return!1;const{start:he,end:te}=j;return Boolean(Et(he,te)&&E>he&&E<=se)};function U(E){const j=Qc(E);return j?ha.daysAbbreviated[j]:""}function Q(E){const j=Qc(E);return j?ha.days[j]:""}function D(E,j){if(E==null)return!1;const{end:se}=j;return Boolean(se&&Et(se,E))}function Y(E,j){if(E==null)return!1;const{start:se}=j;return Boolean(se&&Et(se,E))}return(E,j)=>(l(),d("div",{class:u(a(Ie).MonthContainer)},[k("table",{role:"grid",class:u(a(Ie).Month)},[k("caption",{class:u(a(r))},z(a(T))+" "+z(e.year),3),k("thead",null,[k("tr",{class:u(c)},[(l(!0),d(X,null,be(a(b),se=>(l(),A(a(np),{key:se,title:U(se),label:Q(se),current:a(i)&&new Date().getDay()===se},null,8,["title","label","current"]))),128))])]),k("tbody",null,[(l(!0),d(X,null,be(a(p),(se,he)=>(l(),d("tr",{key:he,class:u(a(Ie).Week)},[(l(!0),d(X,null,be(se,(te,Me)=>(l(),d(X,{key:Me},[te?(l(),A(a(vr),{key:1,selectedAccessibilityLabelPrefix:q(te),weekday:Q(Me),focused:e.focusedDate&&a(Et)(te,e.focusedDate),day:te,selected:e.selected&&a(hg)(te,e.selected),inRange:e.selected&&a(bg)(te,e.selected),disabled:S(te),inHoveringRange:R(te,e.selected,e.hoverDate),isLastSelectedDay:B(te),isFirstSelectedDay:w(te),isHoveringRight:I(te),rangeIsDifferent:a(h),onFocus:$=>E.$emit("focus",te),onClick:x,onHover:$=>E.$emit("hover",te)},null,8,["selectedAccessibilityLabelPrefix","weekday","focused","day","selected","inRange","disabled","inHoveringRange","isLastSelectedDay","isFirstSelectedDay","isHoveringRight","rangeIsDifferent","onFocus","onHover"])):(l(),A(a(vr),{key:0,lastDayOfMonth:a(g),onHover:j[0]||(j[0]=$=>E.$emit("hover",null))},null,8,["lastDayOfMonth"]))],64))),128))],2))),128))])],2)],2))}});xr.__docgenInfo={exportName:"default",displayName:"Month",description:"",tags:{},props:[{name:"focusedDate",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"Range"}},{name:"hoverDate",required:!1,type:{name:"Date"}},{name:"month",required:!0,type:{name:"number"}},{name:"year",required:!0,type:{name:"number"}},{name:"disableDatesBefore",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",required:!1,type:{name:"Date"}},{name:"allowRange",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",required:!0,type:{name:"number"}},{name:"accessibilityLabelPrefixes",required:!1,type:{name:"TSTupleType"}}],events:[{name:"hover",type:{names:["union"]}},{name:"focus",type:{names:["union"]}},{name:"click",type:{names:["Date"]}},{name:"change",type:{names:["union"]}}]};const FS=["id"],Qs=M({props:{id:null,modelValue:null,month:null,year:null,allowRange:{type:Boolean},disableDatesBefore:null,disableDatesAfter:null,multiMonth:{type:Boolean},weekStartsOn:{default:0},dayAccessibilityLabelPrefix:null},emits:["month-change","change","update:modelValue"],setup(e,{emit:o}){const n=e,s=C(),i=C(),r=m(()=>Oc(n.month,n.year)),c=m(()=>qc(n.month)),p=m(()=>Oc(c.value,r.value)),T=m(()=>qc(c.value)),b=m(()=>xg(n.month,n.year)),g=m(()=>Tg(n.month)),h=m(()=>{const $=bn(g.value);return $?ha.months[$]:""}),x=m(()=>{if(n.multiMonth){const G=bn(T.value);return G?ha.months[G]:""}const $=bn(c.value);return $?ha.months[$]:""}),S=m(()=>n.multiMonth?p.value:r.value),w=m(()=>Me(n.modelValue)),B=m(()=>n.allowRange?"Start of range":n.dayAccessibilityLabelPrefix),I="End of range",q=m(()=>[B.value,I]),R=m(()=>`Show previous month, ${h.value} ${b.value}`),U=m(()=>`Show next month, ${x.value} ${S.value}`),Q=($,G)=>{o("month-change",{month:$,year:G})},D=($,G)=>{s.value=void 0,Q($,G)},Y=$=>{s.value=$||void 0},E=$=>{i.value=$||void 0},j=$=>{Q($.getMonth(),$.getFullYear()),i.value=$,s.value=$},se=$=>{if($){const{end:G}=$;i.value=G,s.value=new Date(G),o("update:modelValue",$)}o("change",$)},he=$=>{const{key:G}=$,K=Me(n.modelValue),le=s.value||K&&K.start;if(!!le){if(G==="ArrowUp"){const pe=new Date(le);pe.setDate(le.getDate()-7),n.disableDatesBefore&&Ns(pe,n.disableDatesBefore)||j(pe)}if(G==="ArrowDown"){const pe=new Date(le);pe.setDate(le.getDate()+7),n.disableDatesAfter&&Bs(pe,n.disableDatesAfter)||j(pe)}if(G==="ArrowRight"){const pe=new Date(le);pe.setDate(le.getDate()+1),n.disableDatesAfter&&Bs(pe,n.disableDatesAfter)||j(pe)}if(G==="ArrowLeft"){const pe=new Date(le);pe.setDate(le.getDate()-1),n.disableDatesBefore&&Ns(pe,n.disableDatesBefore)||j(pe)}}},te=$=>{const{key:G}=$;(G==="ArrowUp"||G==="ArrowDown"||G==="ArrowLeft"||G==="ArrowRight")&&($.preventDefault(),$.stopPropagation())};function Me($){return $ instanceof Date?{start:$,end:$}:$}return($,G)=>(l(),d("div",{id:e.id,class:u(a(Ie).DatePicker),onKeydown:te,onKeyup:he},[k("div",{class:u(a(Ie).Header)},[L(a(fe),{plain:"",icon:a(qo),accessibilityLabel:a(R),onClick:G[0]||(G[0]=K=>D(a(g),a(b)))},null,8,["icon","accessibilityLabel"]),L(a(fe),{plain:"",icon:a(vg),accessibilityLabel:a(U),onClick:G[1]||(G[1]=K=>D(a(c),a(r)))},null,8,["icon","accessibilityLabel"])],2),k("div",{class:u(a(Ie).MonthLayout)},[L(a(xr),{focusedDate:s.value,month:e.month,year:e.year,selected:Me(e.modelValue),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a(q),onChange:se,onHover:E,onFocus:Y},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"]),e.multiMonth?(l(),A(a(xr),{key:0,focusedDate:s.value,month:a(c),year:a(r),selected:a(w),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a(q),onChange:se,onHover:E,onFocus:Y},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"])):P("",!0)],2)],42,FS))}});Qs.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:"The selected date or range of dates",required:!1,type:{name:"Range"}},{name:"month",description:"The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December",required:!0,type:{name:"number"}},{name:"year",description:"The year to show",required:!0,type:{name:"number"}},{name:"allowRange",description:"Allow a range of dates to be selected",required:!1,type:{name:"boolean"}},{name:"disableDatesBefore",description:"Disable selecting dates before this.",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",description:"Disable selecting dates after this.",required:!1,type:{name:"Date"}},{name:"multiMonth",description:"The selection can span multiple months",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",description:"First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"dayAccessibilityLabelPrefix",description:"Visually hidden prefix text for selected days on single selection date pickers",required:!1,type:{name:"string"}}],events:[{name:"month-change",type:{names:["{ month: number, year: number }"]}},{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const ES="Polaris-DescriptionList",OS="Polaris-DescriptionList__Term",qS="Polaris-DescriptionList--spacingTight",RS="Polaris-DescriptionList__Description";var Os={DescriptionList:ES,Term:OS,spacingTight:qS,Description:RS};const Js=M({props:{spacing:{default:"loose"}},setup(e){const o=e,n=m(()=>F(Os.DescriptionList,o.spacing==="tight"&&Os.spacingTight));return(s,i)=>(l(),d("dl",{class:u(a(n))},[f(s.$slots,"default")],2))}});Js.__docgenInfo={exportName:"default",displayName:"DescriptionList",description:"",tags:{},props:[{name:"spacing",description:"Determines the spacing between list items",tags:{default:[{description:"'loose'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"loose"'},{name:'"tight"'}]},defaultValue:{func:!1,value:"'loose'"}}],slots:[{name:"default"}]};const sp=M({setup(e){const o=F(Os.Term);return(n,s)=>(l(),d("dt",{class:u(a(o))},[f(n.$slots,"default")],2))}});sp.__docgenInfo={exportName:"default",displayName:"DescriptionListTerm",description:"",tags:{},slots:[{name:"default"}]};const ip=M({setup(e){const o=F(Os.Description);return(n,s)=>(l(),d("dd",{class:u(a(o))},[f(n.$slots,"default")],2))}});ip.__docgenInfo={exportName:"default",displayName:"DescriptionListDesc",description:"",tags:{},slots:[{name:"default"}]};const VS="Polaris-DisplayText",HS="Polaris-DisplayText--sizeSmall",US="Polaris-DisplayText--sizeMedium",jS="Polaris-DisplayText--sizeLarge",WS="Polaris-DisplayText--sizeExtraLarge";var Jc={DisplayText:VS,sizeSmall:HS,sizeMedium:US,sizeLarge:jS,sizeExtraLarge:WS};const _n=M({props:{element:{default:"p"},size:{default:"medium"}},setup(e){const o=e,n=m(()=>F(Jc.DisplayText,o.size&&Jc[Pe("size",o.size)]));return(s,i)=>(l(),A(Ee(e.element),{class:u(a(n))},{default:y(()=>[f(s.$slots,"default")]),_:3},8,["class"]))}});_n.__docgenInfo={exportName:"default",displayName:"DisplayText",description:"",tags:{},props:[{name:"element",description:"Name of element to use for text",tags:{default:[{description:"'p'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'p'"}},{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}]};const zS={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},GS=k("path",{"fill-rule":"evenodd",d:"M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM5.293 8.293l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 7.414V15a1 1 0 1 1-2 0V7.414L6.707 9.707a1 1 0 0 1-1.414-1.414z"},null,-1),XS=[GS];function KS(e,o){return l(),d("svg",zS,XS)}var YS={render:KS};const ZS={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},QS=k("path",{"fill-rule":"evenodd",d:"M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zM9 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V6zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),JS=[QS];function eC(e,o){return l(),d("svg",ZS,JS)}var tC={render:eC};function lp(e=""){const o=e.toLowerCase();return o.charAt(0).toUpperCase()+o.slice(1)}const aC="Polaris-DropZone",oC="Polaris-DropZone--focused",nC="Polaris-DropZone--hasOutline",sC="Polaris-DropZone--isDisabled",iC="Polaris-DropZone--isDragging",lC="Polaris-DropZone--sizeLarge",rC="Polaris-DropZone--sizeMedium",cC="Polaris-DropZone--sizeSmall",uC="Polaris-DropZone--measuring",dC="Polaris-DropZone__Container",pC="Polaris-DropZone__Overlay",mC="Polaris-DropZone--hasError";var St={DropZone:aC,focused:oC,hasOutline:nC,isDisabled:sC,isDragging:iC,sizeLarge:lC,sizeMedium:rC,sizeSmall:cC,measuring:uC,Container:dC,Overlay:pC,hasError:mC};const rp=M({props:{id:null,accept:null,disabled:{type:Boolean},type:null,multiple:{type:Boolean},openFileDialog:{type:Boolean}},emits:["focus","blur","input","file-dialog-close"],setup(e,{emit:o}){const n=e,s=C();xe(()=>{n.openFileDialog&&i()}),Ht(()=>{n.openFileDialog&&i()});const i=()=>{r(),o("file-dialog-close")},r=()=>{!s.value||s.value.click()},c=b=>{!b.target.files||o("input",b)},p=()=>{o("focus")},T=()=>{o("blur")};return(b,g)=>(l(),d("input",ye(n,{ref_key:"fileInputNode",ref:s,autoComplete:"off",onChange:c,onFocus:p,onBlur:T}),null,16))}});rp.__docgenInfo={exportName:"default",displayName:"DropZoneInput",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"accept",required:!1,type:{name:"string"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"DropZoneFileType"}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"openFileDialog",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["Event"]}},{name:"file-dialog-close"}]};const yC=["dragover","dragenter","drop"];function gC(e,o){return e.type==="application/x-moz-file"||hC(e,o)}function eu(e){if(bC(e)&&e.dataTransfer){const o=e.dataTransfer;if(o.files&&o.files.length)return Array.from(o.files);if(o.items&&o.items.length)return Array.from(o.items)}else if(fC(e)&&e.target.files){const o=e.target;return Array.from(o.files||[])}return[]}function hC(e,o){if(e&&o){const n=e.name||"",s=e.type||"",i=s.replace(/\/.*$/,"");return(Array.isArray(o)?o:o.split(",")).some(c=>{const p=c.trim();return p.startsWith(".")?n.toLowerCase().endsWith(p.toLowerCase()):p.endsWith("/*")?i===p.replace(/\/.*$/,""):s===p})}return!0}function bC(e){return yC.indexOf(e.type)>0}function fC(e){return e.type==="change"}const vC=!0;function cp(e){return e?"allowMultiple":"single"}const xC=["aria-disabled"],ei=M({props:{label:null,labelAction:null,labelHidden:{type:Boolean},id:null,accept:null,type:{default:"file"},active:{type:Boolean},error:{type:Boolean},outline:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},overlayText:null,errorOverlayText:null,allowMultiple:{type:Boolean,default:vC},disabled:{type:Boolean,default:!1},dropOnPage:{type:Boolean},openFileDialog:{type:Boolean},variableHeight:{type:Boolean},customValidator:null},emits:["drop","drop-accepted","drop-rejected","dragover","dragenter","dragleave","file-dialog-close"],setup(e,{emit:o}){const n=e,s=ve("lang"),i=de(),r=Ut(),{useUniqueId:c}=Oe(),p=c("DropZone",n.id),T=lp(n.type),b=cp(n.allowMultiple||!1),g=C(null),h=C([]),x=C(!0),S=C("large"),w=C(!1),B=C(!1),I=C(!1),q=n.overlayText?n.overlayText:s.Polaris.DropZone[b][`overlayText${T}`],R=n.errorOverlayText?n.errorOverlayText:s.Polaris.DropZone[`errorOverlayText${T}`],U=s.Polaris.DropZone[b][`label${T}`],Q=m(()=>i.label||n.label?n.labelHidden:!0),D=m(()=>F(St.DropZone,n.outline&&St.hasOutline,I.value&&St.focused,(n.active||w.value)&&St.isDragging,n.disabled&&St.isDisabled,(B.value||n.error)&&St.hasError,!n.variableHeight&&St[Pe("size",S.value)],x.value&&St.measuring)),Y=m(()=>(n.active||w.value)&&!B.value&&!n.error&&n.overlay),E=m(()=>w.value&&(B.value||n.error));xe(()=>{j();const ae=n.dropOnPage?document:g.value;!ae||(ae.addEventListener("drop",$),ae.addEventListener("dragover",K),ae.addEventListener("dragenter",G),ae.addEventListener("dragleave",le),window.addEventListener("resize",j))}),ct(()=>{const ae=n.dropOnPage?document:g.value;!ae||(ae.removeEventListener("drop",$),ae.removeEventListener("dragover",K),ae.removeEventListener("dragenter",G),ae.removeEventListener("dragleave",le),window.removeEventListener("resize",j))});const j=Vt(()=>{if(!g.value)return;if(n.variableHeight){x.value=!1;return}const ae=g.value.getBoundingClientRect().width;S.value="large",ae<100?S.value="small":ae<160&&(S.value="medium"),x.value&&(x.value=!1)},50,{trailing:!0}),se=()=>{I.value=!0},he=()=>{I.value=!1},te=()=>{o("file-dialog-close")},Me=ae=>{const Te=[],De=[];return Array.from(ae).forEach(qe=>{!gC(qe,n.accept)||n.customValidator&&!n.customValidator(qe)?De.push(qe):Te.push(qe)}),n.allowMultiple||(Te.splice(1,Te.length),De.push(...Te.slice(1))),{files:ae,acceptedFiles:Te,rejectedFiles:De}},$=ae=>{if(ge(ae),n.disabled)return;const Te=eu(ae),{files:De,acceptedFiles:qe,rejectedFiles:Ne}=Me(Te);h.value=[],w.value=!1,B.value=Ne.length>0,o("drop",De,qe,Ne),qe.length>0&&o("drop-accepted",qe),Ne.length>0&&o("drop-rejected",Ne),ae.target.value=""},G=ae=>{if(ge(ae),n.disabled)return;const Te=eu(ae);if(ae.target&&!h.value.includes(ae.target)&&h.value.push(ae.target),w.value)return;const{rejectedFiles:De}=Me(Te);w.value=!0,B.value=De.length>0,o("dragenter")},K=ae=>{ge(ae),!n.disabled&&o("dragover")},le=ae=>{ae.preventDefault(),!n.disabled&&(h.value=h.value.filter(Te=>{const De=n.dropOnPage&&!wr?document.body:Te;return Te!==ae.target&&De&&De.contains(Te)}),!(h.value.length>0)&&(w.value=!1,B.value=!1,o("dragleave")))},pe=()=>{const ae=g.value&&g.value.querySelector(`#${p}`);ae&&ae instanceof HTMLElement&&ae.click()};function $e(ae){if(!n.disabled)return r.onClick?r.onClick(ae):pe()}const ge=ae=>{ae.preventDefault(),ae.stopPropagation()},Se=Ms({disabled:n.disabled,focused:I,size:S,type:n.type,measuring:x,allowMultiple:n.allowMultiple});return Ge("dropZoneContext",Se),(ae,Te)=>(l(),A(a(jo),{id:a(p),action:e.labelAction,labelHidden:a(Q)},{label:y(()=>[a(i).label?f(ae.$slots,"label",{key:0}):e.label?(l(),d(X,{key:1},[ie(z(e.label),1)],64)):(l(),d(X,{key:2},[ie(z(a(U)),1)],64))]),default:y(()=>[k("div",{ref_key:"dropZoneRef",ref:g,class:u(a(D)),"aria-disabled":e.disabled,onClick:$e,onDragstart:ge},[a(Y)?(l(),d("div",{key:0,class:u(a(St).Overlay)},[L(a(We),{vertical:"",spacing:"tight"},{default:y(()=>[S.value==="small"?(l(),A(a(re),{key:0,source:a(YS),color:"interactive"},null,8,["source"])):(l(),A(a(ta),{key:1},{default:y(()=>[L(a(gt),{variation:"strong"},{default:y(()=>[ie(z(a(q)),1)]),_:1})]),_:1}))]),_:1})],2)):P("",!0),a(E)?(l(),d("div",{key:1,class:u(a(St).Overlay)},[L(a(We),{vertical:"",spacing:"tight"},{default:y(()=>[S.value==="small"?(l(),A(a(re),{key:0,source:a(tC),color:"critical"},null,8,["source"])):(l(),A(a(ta),{key:1},{default:y(()=>[L(a(gt),{variation:"strong"},{default:y(()=>[ie(z(a(R)),1)]),_:1})]),_:1}))]),_:1})],2)):P("",!0),L(a(ot),null,{default:y(()=>[L(rp,{type:"file",id:a(p),accept:e.accept,disabled:e.disabled,multiple:e.allowMultiple||!1,openFileDialog:e.openFileDialog,onInput:$,onFocus:se,onBlur:he,onFileDialogClose:te},null,8,["id","accept","disabled","multiple","openFileDialog"])]),_:1}),k("div",{class:u(a(St).Container)},[f(ae.$slots,"default")],2)],42,xC)]),_:3},8,["id","action","labelHidden"]))}});ei.__docgenInfo={exportName:"default",displayName:"DropZone",description:"",tags:{},props:[{name:"label",description:"Label for the file input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for file input",required:!1,type:{name:"string"}},{name:"accept",description:"Allowed file types",required:!1,type:{name:"string"}},{name:"type",description:"Whether is a file or an image",tags:{default:[{description:"'file'",title:"default"}]},required:!1,type:{name:"DropZoneFileType"},defaultValue:{func:!1,value:"'file'"}},{name:"active",description:"Sets an active state",required:!1,type:{name:"boolean"}},{name:"error",description:"Sets an error state",required:!1,type:{name:"boolean"}},{name:"outline",description:"Displays an outline border",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlay",description:"Displays an overlay on hover",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"overlayText",description:"Text that appears in the overlay",required:!1,type:{name:"string"}},{name:"errorOverlayText",description:"Text that appears in the overlay when set in error state",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allows multiple files to be uploaded at once",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"defaultAllowMultiple"}},{name:"disabled",description:"Sets a disabled state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropOnPage",description:"Allows a file to be dropped anywhere on the page",required:!1,type:{name:"boolean"}},{name:"openFileDialog",description:"Sets the default file dialog state",required:!1,type:{name:"boolean"}},{name:"variableHeight",description:"Allows child content to adjust height",required:!1,type:{name:"boolean"}}],events:[{name:"drop",type:{names:["Array"]}},{name:"drop-accepted",type:{names:["Array"]}},{name:"drop-rejected",type:{names:["Array"]}},{name:"dragover"},{name:"dragenter"},{name:"dragleave"},{name:"file-dialog-close"}],slots:[{name:"label"},{name:"default"}]};const TC={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},SC=k("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM5.3 8.3l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L11 7.4V15a1 1 0 1 1-2 0V7.4L6.7 9.7a1 1 0 0 1-1.4-1.4z",fill:"#5C5F62"},null,-1),CC=[SC];function AC(e,o){return l(),d("svg",TC,CC)}var kC={render:AC};const LC="Polaris-DropZone-FileUpload",wC="Polaris-DropZone-FileUpload--large",PC="Polaris-DropZone-FileUpload--small",_C="Polaris-DropZone-FileUpload__Action",MC="Polaris-DropZone-FileUpload--disabled",NC="Polaris-DropZone-FileUpload__ActionTitle";var yn={FileUpload:LC,large:wC,small:PC,Action:_C,disabled:MC,ActionTitle:NC,"ActionTitle-disabled":"Polaris-DropZone-FileUpload__ActionTitle--disabled","ActionTitle-focused":"Polaris-DropZone-FileUpload__ActionTitle--focused"};const up=M({props:{actionTitle:null,actionHint:null},setup(e){const o=e,n=ve("lang"),{size:s,measuring:i,type:r,disabled:c,allowMultiple:p}=Sg(ve("dropZoneContext")),T=lp(r.value),b=cp(p.value),g=m(()=>o.actionTitle||n.Polaris.DropZone[b][`actionTitle${T}`]),h=F(yn.Action,c.value&&yn.disabled),x=m(()=>F(yn.FileUpload,s.value==="large"&&yn.large,s.value==="small"&&yn.small));return(S,w)=>(l(),d("div",{class:u(a(x))},[a(s)==="large"||a(s)==="medium"?(l(),A(a(We),{key:0,vertical:"",spacing:"tight"},{default:y(()=>[k("div",{class:u(a(h))},z(a(g)),3),e.actionHint?(l(),A(a(ta),{key:0},{default:y(()=>[L(a(gt),{variation:"subdued"},{default:y(()=>[ie(z(e.actionHint),1)]),_:1})]),_:1})):P("",!0)]),_:1})):(l(),A(a(kC),{key:1,width:"20"}))],2))}});up.__docgenInfo={exportName:"default",displayName:"FileUpload",description:"",tags:{},props:[{name:"actionTitle",required:!1,type:{name:"string"}},{name:"actionHint",required:!1,type:{name:"string"}}]};const BC="Polaris-ExceptionList",IC="Polaris-ExceptionList__Item",DC="Polaris-ExceptionList__Icon",$C="Polaris-ExceptionList--statusWarning",FC="Polaris-ExceptionList--statusCritical",EC="Polaris-ExceptionList__Bullet",OC="Polaris-ExceptionList__Title",qC="Polaris-ExceptionList__Description";var Ot={ExceptionList:BC,Item:IC,Icon:DC,statusWarning:$C,statusCritical:FC,Bullet:EC,Title:OC,Description:qC};const dp=M({setup(e){return(o,n)=>(l(),d("ul",{class:u(a(Ot).ExceptionList)},[f(o.$slots,"default")],2))}});dp.__docgenInfo={exportName:"default",displayName:"ExceptionList",description:"",tags:{},slots:[{name:"default"}]};const RC="Polaris-Truncate";var VC={Truncate:RC};const pp=M({setup(e){return(o,n)=>{const s=Ld("component");return l(),A(s,{class:u(a(VC).Truncate)},{default:y(()=>[f(o.$slots,"default")]),_:3},8,["class"])}}});pp.__docgenInfo={exportName:"default",displayName:"Truncate",description:"",tags:{},slots:[{name:"default"}]};const ti=M({props:{status:null,icon:null,title:null,truncate:{type:Boolean}},setup(e){const o=e,n=de(),s=m(()=>F(Ot.Item,o.status&&Ot[Pe("status",o.status)]));return(i,r)=>(l(),d("li",{class:u(a(s))},[k("span",{class:u(a(Ot).Icon)},[e.icon?(l(),A(a(re),{key:0,source:e.icon},null,8,["source"])):(l(),d("span",{key:1,class:u(a(Ot).Bullet)},null,2))],2),e.truncate?(l(),A(a(pp),{key:0},{default:y(()=>[e.title?(l(),d("span",{key:0,class:u(a(Ot).Title)},z(e.title),3)):P("",!0),a(n).default?(l(),d("span",{key:1,class:u(a(Ot).Description)},[f(i.$slots,"default")],2)):P("",!0)]),_:3})):(l(),d(X,{key:1},[e.title?(l(),d("span",{key:0,class:u(a(Ot).Title)},z(e.title),3)):P("",!0),a(n).default?(l(),d("span",{key:1,class:u(a(Ot).Description)},[f(i.$slots,"default")],2)):P("",!0)],64))],2))}});ti.__docgenInfo={exportName:"default",displayName:"ExceptionListItem",description:"",tags:{},props:[{name:"status",description:"Set the color of the icon and title for the given item.",required:!1,type:{name:"union",elements:[{name:'"critical"'},{name:'"warning"'}]}},{name:"icon",description:"Icon displayed by the list item",required:!1,type:{name:"IconSource"}},{name:"title",description:"Text displayed beside the icon",required:!1,type:{name:"string"}},{name:"truncate",description:"Should the description be truncated at end of line",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const HC={inheritAttrs:!1,render(){return null}},mp=M(N(v({},HC),{props:{disabled:{type:Boolean},root:null},setup(e){const o=e,n=()=>{!o.disabled&&o.root&&!o.root.querySelector("[autofocus]")&&Sn(o.root,!1)};return Fe([()=>o.disabled,()=>o.root],()=>n()),xe(()=>{n()}),()=>{}}}));mp.__docgenInfo={exportName:"default",displayName:"Focus",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"root",required:!0,type:{name:"union",elements:[{name:"HTMLElement"},{name:"null"}]}}]};const UC="Polaris-FooterHelp",jC="Polaris-FooterHelp__Text";var tu={FooterHelp:UC,Text:jC};const ai=M({setup(e){return(o,n)=>(l(),d("div",{class:u(a(tu).FooterHelp)},[k("div",{class:u(a(tu).Text)},[f(o.$slots,"default")],2)],2))}});ai.__docgenInfo={exportName:"default",displayName:"FooterHelp",description:"",tags:{},slots:[{name:"default"}]};const WC=["acceptCharset","action","encType","method","name","noValidate","target","autocomplete"],zC=k("button",{type:"submit","aria-hidden":"true",tabIndex:"-1"},"Submit",-1),oi=M({props:{acceptCharset:null,action:null,autoComplete:{type:Boolean},encType:null,implicitSubmit:{type:Boolean,default:!0},method:{default:"post"},name:null,noValidate:{type:Boolean},preventDefault:{type:Boolean,default:!0},target:null},emits:["submit"],setup(e,{emit:o}){const n=e,s=m(()=>{if(typeof n.autoComplete!="undefined")return n.autoComplete?"on":"off"}),i=r=>{n.preventDefault&&r.preventDefault(),o("submit",r)};return(r,c)=>(l(),d("form",{acceptCharset:e.acceptCharset||void 0,action:e.action,encType:e.encType,method:e.method,name:e.name,noValidate:e.noValidate,target:e.target,autocomplete:a(s),onSubmit:i},[e.implicitSubmit?(l(),A(a(ot),{key:0},{default:y(()=>[zC]),_:1})):P("",!0),f(r.$slots,"default")],40,WC))}});oi.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"acceptCharset",description:"Space separated list of character encodings",required:!1,type:{name:"string"}},{name:"action",description:"Where to send form-data on submittal",required:!1,type:{name:"string"}},{name:"autoComplete",description:"Grants the browser the ability to autocomplete input elements",required:!1,type:{name:"boolean"}},{name:"encType",description:"Media type when submitting content to server",required:!1,type:{name:"Enctype"}},{name:"implicitSubmit",description:"Toggles if form submits on Enter keypress. Defaults to true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"method",description:"Method used to submit form",required:!1,type:{name:"Method"},defaultValue:{func:!1,value:"'post'"}},{name:"name",description:"A unique name for the form",required:!1,type:{name:"string"}},{name:"noValidate",description:"Whether or not form is validated when submitting",required:!1,type:{name:"boolean"}},{name:"preventDefault",description:"Blocks the default form action",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"target",description:"Where to display response after form submittal",required:!1,type:{name:"Target"}}],events:[{name:"submit",type:{names:["Event"]}}],slots:[{name:"default"}]};const GC="Polaris-FormLayout",XC="Polaris-FormLayout__Title",KC="Polaris-FormLayout__Items",YC="Polaris-FormLayout__HelpText",ZC="Polaris-FormLayout__Item",QC="Polaris-FormLayout--grouped",JC="Polaris-FormLayout--condensed";var Qt={FormLayout:GC,Title:XC,Items:KC,HelpText:YC,Item:ZC,grouped:QC,condensed:JC};const qr=M({setup(e){return(o,n)=>(l(),d("div",{class:u(a(Qt).Item)},[f(o.$slots,"default")],2))}});qr.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const Rr=M({props:{condensed:{type:Boolean}},setup(e,{expose:o}){const n=e,s=de(),{useUniqueId:i}=Oe(),r=i("FormLayoutGroup"),c=`${r}HelpText`,p=`${r}Title`;o({name:"FormGroup"});const T=m(()=>F(n.condensed?Qt.condensed:Qt.grouped));return(b,g)=>(l(),d("div",{role:"group",class:u(a(T)),"aria-labelledby":p,"aria-describedby":c},[a(s).title?(l(),d("div",{key:0,id:p,class:u(a(Qt).Title)},[f(b.$slots,"title")],2)):P("",!0),k("div",{class:u(a(Qt).Items)},[a(s).default?(l(!0),d(X,{key:0},be(a(s).default(),(h,x)=>(l(),A(a(qr),{key:x},{default:y(()=>[(l(),A(Ee(h)))]),_:2},1024))),128)):f(b.$slots,"default",{key:1})],2),a(s)["help-text"]?(l(),d("div",{key:1,id:c,class:u(a(Qt).HelpText)},[f(b.$slots,"help-text")],2)):P("",!0)],2))}});Rr.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"condensed",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"},{name:"help-text"}]};const Bt=M({setup(e){const o=C([]),n=C([]),s=de(),i=m(()=>{const r=[];return s.default&&s.default().map(c=>{const p=c.children;typeof p=="string"&&p==="v-if"||(c.type.toString()==="Symbol(Fragment)"||c.type.toString()==="Symbol()"?p.forEach(T=>{r.push(T)}):r.push(c))}),r});return Cg(()=>{o.value=[]}),xe(()=>{o.value.forEach(r=>{n.value.push(r.name==="FormGroup")})}),(r,c)=>(l(),d("div",{class:u(a(Qt).FormLayout)},[a(i).length?(l(!0),d(X,{key:0},be(a(i),(p,T)=>(l(),d(X,null,[n.value[T]?(l(),A(Ee(p),{key:1,ref_for:!0,ref:b=>{o.value[T]=b}},null,512)):(l(),A(a(qr),{key:T,class:u(a(Qt).Item)},{default:y(()=>[(l(),A(Ee(p),{ref_for:!0,ref:b=>{o.value[T]=b}},null,512))]),_:2},1032,["class"]))],64))),256)):f(r.$slots,"default",{key:1})],2))}});Bt.__docgenInfo={exportName:"default",displayName:"FormLayout",description:"",tags:{},slots:[{name:"default"}]};function au(e,o,n){if(!document)return;(n||document.documentElement).style.setProperty(e,o)}const eA="Polaris-Frame",tA="Polaris-Frame__Navigation",aA="Polaris-Frame--hasTopBar",oA="Polaris-Frame__NavigationDismiss",nA="Polaris-Frame__TopBar",sA="Polaris-Frame__ContextualSaveBar",iA="Polaris-Frame__Main",lA="Polaris-Frame--hasNav",rA="Polaris-Frame__Content",cA="Polaris-Frame__GlobalRibbonContainer",uA="Polaris-Frame__LoadingBar",dA="Polaris-Frame__Skip",pA="Polaris-Frame--focused",mA="Polaris-Frame--pressed";var Xe={Frame:eA,Navigation:tA,hasTopBar:aA,"Navigation-enter":"Polaris-Frame__Navigation--enter","Navigation-enterActive":"Polaris-Frame__Navigation--enterActive","Navigation-exit":"Polaris-Frame__Navigation--exit","Navigation-exitActive":"Polaris-Frame__Navigation--exitActive",NavigationDismiss:oA,"Navigation-visible":"Polaris-Frame__Navigation--visible",TopBar:nA,ContextualSaveBar:sA,Main:iA,hasNav:lA,Content:rA,GlobalRibbonContainer:cA,LoadingBar:uA,Skip:dA,focused:pA,pressed:mA};const yA={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},gA=k("path",{d:"m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"},null,-1),hA=[gA];function bA(e,o){return l(),d("svg",yA,hA)}var Vr={render:bA};const fA="Polaris-Frame-CssAnimation--startFade",vA="Polaris-Frame-CssAnimation--endFade";var ou={startFade:fA,endFade:vA};const yp=M({props:{in:{type:Boolean},type:null},setup(e){const o=e,n={Entering:"entering",Entered:"entered",Exiting:"exiting",Exited:"exited"},s=C(null),i=C(o.in?n.Entering:n.Exited),r=m(()=>F(ou[Pe("start",o.type)],o.in&&ou[Pe("end",o.type)]));Fe(()=>i.value,()=>{i.value===n.Entering&&p(n.Entered)}),Fe(()=>o.in,()=>{o.in&&p(n.Entering),!o.in&&p(n.Exiting)});const c=()=>{i.value===n.Exiting&&p(n.Exited)},p=T=>{i.value=T,T===n.Entering&&s.value&&s.value.getBoundingClientRect()};return(T,b)=>(l(),d("div",{class:u(a(r)),ref_key:"frameCssAnimationRef",ref:s,onTransitionend:c},[i.value!==n.Exited||o.in?f(T.$slots,"default",{key:0}):P("",!0)],34))}});yp.__docgenInfo={exportName:"default",displayName:"CssAnimation",description:"",tags:{},props:[{name:"in",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"AnimationType"}}],slots:[{name:"default"}]};function xA(e){const o=typeof e;return e!=null&&(o==="object"||o==="function")}function gp(e,o){if(!e)return null;const n=Object.keys(e);for(const s of n){if(s===o)return e[o];if(xA(e[s])){const i=gp(e[s],o);if(i)return i}}return null}function Hr(e={},o=0,n="width"){const s=typeof e=="number"?e:gp(e,n);return s?`${s}px`:`${o}px`}const TA="Polaris-Frame-ContextualSaveBar",SA="Polaris-Frame-ContextualSaveBar__LogoContainer",CA="Polaris-Frame-ContextualSaveBar__ContextControl",AA="Polaris-Frame-ContextualSaveBar__Message",kA="Polaris-Frame-ContextualSaveBar__Contents",LA="Polaris-Frame-ContextualSaveBar--fullWidth",wA="Polaris-Frame-ContextualSaveBar__ActionContainer",PA="Polaris-Frame-ContextualSaveBar__Action";var ca={ContextualSaveBar:TA,LogoContainer:SA,ContextControl:CA,Message:AA,Contents:kA,fullWidth:LA,ActionContainer:wA,Action:PA};const hp=M({props:{open:{type:Boolean}},emits:["discard","cancel"],setup(e,{emit:o}){const n=ve("lang"),s=n.Polaris.DiscardConfirmationModal.message,i=n.Polaris.DiscardConfirmationModal.title,r=n.Polaris.DiscardConfirmationModal.primaryAction,c=n.Polaris.DiscardConfirmationModal.secondaryAction,p=()=>{o("discard")},T=()=>{o("cancel")};return(b,g)=>(l(),A(a(Sa),{open:e.open,onClose:T,primaryAction:{content:a(r),destructive:!0,onAction:p},secondaryActions:[{content:a(c),onAction:T}],sectioned:""},{title:y(()=>[ie(z(a(i)),1)]),content:y(()=>[ie(z(a(s)),1)]),_:1},8,["open","primaryAction","secondaryActions"]))}});hp.__docgenInfo={exportName:"default",displayName:"DiscardConfirmationModal",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}}],events:[{name:"discard"},{name:"cancel"}]};const bp=M({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean}},setup(e){const o=e,n=ve("lang"),s=de(),i=m(()=>F(ca.Contents,o.fullWidth&&ca.fullWidth)),r=n.Polaris.ContextualSaveBar.save,c=n.Polaris.ContextualSaveBar.discard,{useFrame:p}=Wo(),{logo:T}=p(),b=Hr(T,104),g=C(!1),h=()=>{g.value=!g.value},x=()=>{g.value=!1},S=()=>{o.discardAction&&(o.discardAction.discardConfirmationModal?h():o.discardAction.onAction&&o.discardAction.onAction())},w=()=>{o.discardAction&&o.discardAction.onAction&&o.discardAction.onAction(),x()};return(B,I)=>(l(),d(X,null,[L(a(Ho),{"color-scheme":"dark"},{default:y(()=>[k("div",{class:u(a(ca).ContextualSaveBar)},[a(s).contextControl?(l(),d("div",{key:0,class:u(a(ca).ContextControl)},[f(B.$slots,"contextControl")],2)):P("",!0),!e.alignContentFlush&&!a(s).contextControl?(l(),d("div",{key:1,class:u(a(ca).LogoContainer),style:Re(a(b))},[a(T)?(l(),A(a(Vo),{key:0,style:Re({width:a(b)}),source:a(T).contextualSaveBarSource||"",alt:""},null,8,["style","source"])):P("",!0)],6)):P("",!0),k("div",{class:u(a(i))},[k("h2",{class:u(a(ca).Message)},z(e.message),3),k("div",{class:u(a(ca).ActionContainer)},[L(a(We),{spacing:"tight",wrap:!1},{default:y(()=>[f(B.$slots,"secondaryMenu"),e.discardAction?(l(),A(a(fe),{key:0,url:e.discardAction.url,loading:e.discardAction.loading,disabled:e.discardAction.disabled,accessibilityLabel:e.discardAction.content,onClick:S},{default:y(()=>[e.discardAction.content?(l(),d(X,{key:0},[ie(z(e.discardAction.content),1)],64)):(l(),d(X,{key:1},[ie(z(a(c)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel"])):P("",!0),e.saveAction?(l(),A(a(fe),{key:1,primary:"",url:e.saveAction.url,loading:e.saveAction.loading,disabled:e.saveAction.disabled,accessibilityLabel:e.saveAction.content,onClick:e.saveAction.onAction},{default:y(()=>[e.saveAction.content?(l(),d(X,{key:0},[ie(z(e.saveAction.content),1)],64)):(l(),d(X,{key:1},[ie(z(a(r)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel","onClick"])):P("",!0)]),_:3})],2)],2)],2)]),_:3}),e.discardAction&&e.discardAction.onAction&&e.discardAction.discardConfirmationModal?(l(),A(a(hp),{key:0,open:g.value,onCancel:h,onDiscard:w},null,8,["open"])):P("",!0)],64))}});bp.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}}],slots:[{name:"contextControl"},{name:"secondaryMenu"}]};const _A="Polaris-Frame-Loading",MA="Polaris-Frame-Loading__Level";var nu={Loading:_A,Level:MA};const NA=["aria-valuenow","aria-label"],fp=M({setup(e){const n=ve("lang"),s=C(0),i=C(!1),r=m(()=>({transform:`scaleX(${Math.floor(s.value)/100})`}));xe(()=>{c()}),Fe(()=>[i.value,s.value],()=>{c()});const c=()=>{s.value>=99||i.value||requestAnimationFrame(()=>{const T=Math.max((99-s.value)/10,1);i.value=!0,s.value=s.value+T})},p=()=>{i.value=!1};return(T,b)=>(l(),d("div",{class:u(a(nu).Loading),"aria-valuenow":s.value,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar","aria-label":a(n).Polaris.Loading.label},[k("div",{class:u(a(nu).Level),style:Re(a(r)),onTransitionend:p},null,38)],10,NA))}});fp.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const BA="Polaris-Frame-Toast",IA="Polaris-Frame-Toast__Action",DA="Polaris-Frame-Toast--error",$A="Polaris-Frame-Toast__CloseButton";var Cs={Toast:BA,Action:IA,error:DA,CloseButton:$A};const vp=M({props:{content:null,duration:null,error:{type:Boolean},action:null},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=5e3,i=1e4,r=C(),c=m(()=>F(Cs.Toast,n.error&&Cs.error));xe(()=>{let T=n.duration||s;n.action&&!n.duration?T=i:n.action&&n.duration&&n.duration<i&&console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it."),r.value=setTimeout(p,T)}),ct(()=>{clearTimeout(r.value)});const p=()=>{o("dismiss")};return(T,b)=>(l(),A(a(Ho),{"color-scheme":"dark"},{default:y(()=>[k("div",{class:u(a(c))},[L(a(yt),{keyCode:a(Ue).Escape,handler:p},null,8,["keyCode"]),ie(z(e.content),1),f(T.$slots,"default"),e.action?(l(),d("div",{key:0,class:u(a(Cs).Action)},[L(a(fe),{plain:"",monochrome:"",onClick:e.action.onAction},{default:y(()=>[ie(z(e.action.content),1)]),_:1},8,["onClick"])],2)):P("",!0),k("button",{type:"button",class:u(a(Cs).CloseButton),onClick:p},[L(a(re),{source:a(Vr)},null,8,["source"])],2)],2)]),_:3}))}});vp.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const FA="Polaris-Frame-ToastManager",EA="Polaris-Frame-ToastManager__ToastWrapper";var gn={ToastManager:FA,ToastWrapper:EA,"ToastWrapper-enter":"Polaris-Frame-ToastManager__ToastWrapper--enter","ToastWrapper-exit":"Polaris-Frame-ToastManager__ToastWrapper--exit","ToastWrapper-enter-done":"Polaris-Frame-ToastManager--toastWrapperEnterDone"};const xp=M({props:{toastMessages:null},setup(e){const o=e,n=400,s=C([]),i=C(!1),r=()=>{let h=0;o.toastMessages.forEach((x,S)=>{const w=s.value[S];!w||(h+=w.clientHeight,w.style.setProperty("--pc-toast-manager-translate-y-in",`-${h}px`),w.style.setProperty("--pc-toast-manager-translate-y-out",`${-h+150}px`))})},c=h=>{h.classList.add(g.enterDone)},p=h=>{h.classList.add(g.enter)},T=(h,x)=>{h.classList.remove(g.enter),h.classList.add(g.enterDone),setTimeout(x,n)},b=(h,x)=>{h.classList.remove(g.enterDone),h.classList.add(g.exit),setTimeout(x,n)};Fe(()=>o.toastMessages,()=>{setTimeout(r,0)}),xe(()=>{i.value=!0});const g={enter:F(gn["ToastWrapper-enter"]),enterDone:F(gn["ToastWrapper-enter-done"]),exit:F(gn["ToastWrapper-exit"])};return(h,x)=>i.value?(l(),A(a(An),{key:0},{default:y(()=>[L(a(Je),{event:"resize",handler:r}),k("div",{class:u(a(gn).ToastManager),"aria-live":"assertive"},[L(Ag,{name:"custom-classes",onAfterEnter:c,onBeforeEnter:p,onEnter:T,onLeave:b},{default:y(()=>[e.toastMessages.length>0?(l(!0),d(X,{key:0},be(e.toastMessages,(S,w)=>(l(),d("div",{key:S.id,ref_for:!0,ref:B=>{s.value[w]=B},class:u(a(gn).ToastWrapper)},[L(a(vp),Qe(kt(S)),null,16)],2))),128)):P("",!0)]),_:1})],2)]),_:1})):P("",!0)}});xp.__docgenInfo={exportName:"default",displayName:"ToastManager",description:"",tags:{},props:[{name:"toastMessages",required:!0,type:{name:"Array",elements:[{name:"ToastPropsWithID"}]}}]};function na(){const e=ve("mediaQueryContext",{});function o(){if(!e)throw new Nr("No mediaQuery was provided.");return e}return{useMediaQuery:o}}const OA=["data-has-navigation"],qA=["href"],RA=["aria-label","hidden"],VA=["aria-hidden","aria-label","tabIndex"],HA=["data-has-global-ribbon"],Wt=M({props:{logo:null,offset:null,showMobileNavigation:{type:Boolean},skipToContentTarget:null},emits:["navigation-dismiss"],setup(e,{emit:o}){const n=e,s="AppFrameMain",i="AppFrameNav",r="AppFrameTopBar",c="AppFrameLoadingBar",p=400,T=300,b=de(),g=ve("lang"),h=C(!1),x=C(0),S=C(0),w=C([]),B=C(!1),I=C(null),q=C(null),{useMediaQuery:R}=na(),{isNavigationCollapsed:U}=R(),Q=C(null),D=()=>{Q.value&&(x.value=Q.value.offsetHeight,ae())},Y=m(()=>F(Xe.Navigation,n.showMobileNavigation&&Xe["Navigation-visible"])),E={enter:F(Xe["Navigation-enter"]),enterActive:F(Xe["Navigation-enterActive"]),enterDone:F(Xe["Navigation-enterActive"]),exit:F(Xe["Navigation-exit"]),exitActive:F(Xe["Navigation-exitActive"])},j=W=>{W.classList.add(E.enterDone)},se=W=>{W.classList.add(E.enter)},he=(W,ue)=>{W.classList.remove(E.enter),W.classList.add(E.enterDone),setTimeout(ue,T)},te=W=>{W.classList.remove(E.enterActive),W.classList.add(E.exitActive)},Me=(W,ue)=>{W.classList.add(E.exit),setTimeout(ue,T)},$=m(()=>U&&!n.showMobileNavigation),G=m(()=>U&&n.showMobileNavigation),K=G.value?0:-1,le=v({},G.value&&{"aria-modal":!0,role:"dialog"}),pe=m(()=>F(Xe.Frame,b.navigation&&Xe.hasNav,b.topBar&&Xe.hasTopBar)),$e=m(()=>F(Xe.Skip,h.value&&Xe.focused)),ge=m(()=>n.skipToContentTarget?n.skipToContentTarget.id:s);xe(()=>{rt(),!b.globalRibbon&&(ae(),Se())}),Fe(()=>b.globalRibbon,()=>{D(),Se()});const Se=()=>{au("--pc-frame-offset",n.offset||"0px")},ae=()=>{au("--pc-frame-global-ribbon-height",`${x.value}px`)},Te=W=>{const ue=w.value.find(({id:Be})=>Be===W.id)!=null;w.value=ue?w.value:[...w.value,W]},De=({id:W})=>{w.value=w.value.filter(({id:ue})=>W!==ue)},qe=W=>{const ze=W,{contextControl:ue,secondaryMenu:Be}=ze,Ve=J(ze,["contextControl","secondaryMenu"]);I.value=Ve,B.value||(B.value=!0)},Ne=()=>{B.value=!1,setTimeout(()=>{I.value=null},p)},lt=()=>{S.value=S.value+1},Dt=()=>{S.value=Math.max(0,S.value-1)},rt=()=>{b.globalRibbon&&D()},ht=()=>{h.value=!0},ee=()=>{h.value=!1},ke=W=>{n.skipToContentTarget&&(n.skipToContentTarget.focus(),W.preventDefault())},Z=()=>{o("navigation-dismiss")},O=W=>{const{key:ue}=W;U&&n.showMobileNavigation&&ue==="Escape"&&Z()};return Ge("frameContext",{logo:n.logo,showToast:Te,hideToast:De,startLoading:lt,stopLoading:Dt,setContextualSaveBar:qe,removeContextualSaveBar:Ne}),(W,ue)=>(l(),d("div",ye({class:a(pe)},a(_s).props,{"data-has-navigation":a(b).navigation?!0:void 0}),[k("div",{class:u(a($e))},[k("a",{href:`#${a(ge)}`,onFocus:ht,onBlur:ee,onClick:ke},z(a(g).Polaris.Frame.skipToContent),41,qA)],2),a(b).topBar?(l(),d("div",ye({key:0,class:a(Xe).TopBar},v(v({},a(_s).props),a(Lr).props),{id:r}),[f(W.$slots,"topBar")],16)):P("",!0),a(b).navigation?(l(),A(a(Rs),{key:1,trapping:a(G)},{default:y(()=>[L(wd,{name:"custom-classes",onAfterEnter:j,onBeforeEnter:se,onEnter:he,onBeforeLeave:te,onLeave:Me},{default:y(()=>[e.showMobileNavigation||!a(U)?(l(),d("div",ye({key:0},le,{key:"NavContent",id:i,"aria-label":a(g).Polaris.Frame.navigationLabel,class:a(Y),ref_key:"navigationRef",ref:q,onKeydown:O,hidden:a($)}),[f(W.$slots,"navigation"),k("button",{type:"button",class:u(a(Xe).NavigationDismiss),onClick:Z,"aria-hidden":a($)||!a(U)&&!e.showMobileNavigation,"aria-label":a(g).Polaris.Frame.Navigation.closeMobileNavigationLabel,tabIndex:a(K)},[L(a(re),{source:a(Vr)},null,8,["source"])],10,VA)],16,RA)):P("",!0)]),_:3})]),_:3},8,["trapping"])):P("",!0),L(a(yp),{in:B.value,class:u(a(Xe).ContextualSaveBar),type:"fade"},{default:y(()=>[I.value?(l(),A(a(bp),Qe(ye({key:0},I.value)),je({_:2},[I.value.contextControl?{name:"contextControl",fn:y(()=>[(l(!0),d(X,null,be(I.value.contextControl,(Be,Ve)=>(l(),A(Ee(Be),{key:Ve}))),128))])}:void 0,I.value.secondaryMenu?{name:"secondaryMenu",fn:y(()=>[(l(!0),d(X,null,be(I.value.secondaryMenu,(Be,Ve)=>(l(),A(Ee(Be),{key:Ve}))),128))])}:void 0]),1040)):P("",!0)]),_:1},8,["in","class"]),S.value>0?(l(),d("div",{key:2,class:u(a(Xe).LoadingBar),id:c},[L(a(fp))],2)):P("",!0),e.showMobileNavigation&&a(U)?(l(),A(a(Ir),{key:3,belowNavigation:"",onClick:Z,onTouchstart:Z})):P("",!0),k("main",{class:u(a(Xe).Main),id:s,"data-has-global-ribbon":!!a(b).globalRibbon},[k("div",{class:u(a(Xe).Content)},[f(W.$slots,"default")],2)],10,HA),L(a(xp),{"toast-messages":w.value},null,8,["toast-messages"]),a(b).globalRibbon?(l(),d("div",{key:4,class:u(a(Xe).GlobalRibbonContainer),ref_key:"globalRibbonContainerRef",ref:Q},[f(W.$slots,"globalRibbon")],2)):P("",!0),L(a(Je),{event:"resize",handler:rt})],16,OA))}});Wt.__docgenInfo={exportName:"default",displayName:"Frame",description:"",tags:{},props:[{name:"logo",description:"Sets the logo for the TopBar, Navigation, and ContextualSaveBar components",required:!1,type:{name:"Logo"}},{name:"offset",description:"A horizontal offset that pushes the frame to the right, leaving empty space on the left",required:!1,type:{name:"string"}},{name:"showMobileNavigation",description:"A boolean property indicating whether the mobile navigation is currently visible",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"skipToContentTarget",description:"Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link",required:!1,type:{name:"HTMLAnchorElement"}}],events:[{name:"navigation-dismiss"}],slots:[{name:"topBar"},{name:"navigation"},{name:"default"},{name:"globalRibbon"}]};const UA="Polaris-Heading";var jA={Heading:UA};const aa=M({props:{element:{default:"h2"},id:null},setup(e){return(o,n)=>(l(),A(Ee(e.element),{id:e.id,class:u(a(jA).Heading)},{default:y(()=>[f(o.$slots,"default")]),_:3},8,["id","class"]))}});aa.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the heading",tags:{default:[{description:"'h2'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h2'"}},{name:"id",description:`A unique identifier for the heading,
used for reference in anchor links`,required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const WA="Polaris-Indicator",zA="Polaris-Indicator--pulseIndicator";var su={Indicator:WA,pulseIndicator:zA};const Tr=M({props:{pulse:{type:Boolean,default:!1}},setup(e){const o=e,n=m(()=>F(su.Indicator,o.pulse&&su.pulseIndicator));return(s,i)=>(l(),d("span",{class:u(a(n))},null,2))}});Tr.__docgenInfo={exportName:"default",displayName:"Indicator",description:"",tags:{},props:[{name:"pulse",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const GA="Polaris-KeyboardKey";var XA={KeyboardKey:GA};const ni=M({setup(e){const o=de(),n=m(()=>{const s=o.default&&o.default()[0].children?o.default()[0].children:"";return typeof s=="string"?s.length>1?s.toLowerCase():s.toUpperCase():s});return(s,i)=>(l(),d("kbd",{class:u(a(XA).KeyboardKey)},z(a(n)),3))}});ni.__docgenInfo={exportName:"default",displayName:"KeyboardKey",description:"",tags:{}};const KA="Polaris-Layout",YA="Polaris-Layout__Section",ZA="Polaris-Layout__AnnotatedSection",QA="Polaris-Layout__AnnotationWrapper",JA="Polaris-Layout__AnnotationContent",ek="Polaris-Layout__Annotation",tk="Polaris-Layout__AnnotationDescription";var Lt={Layout:KA,Section:YA,"Section-secondary":"Polaris-Layout__Section--secondary","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:ZA,AnnotationWrapper:QA,AnnotationContent:JA,Annotation:ek,AnnotationDescription:tk};const zt=M({props:{secondary:{type:Boolean},fullWidth:{type:Boolean},oneHalf:{type:Boolean},oneThird:{type:Boolean}},setup(e){const o=e,n=m(()=>F(Lt.Section,o.secondary&&Lt["Section-secondary"],o.fullWidth&&Lt["Section-fullWidth"],o.oneHalf&&Lt["Section-oneHalf"],o.oneThird&&Lt["Section-oneThird"]));return(s,i)=>(l(),d("div",{class:u(a(n))},[f(s.$slots,"default")],2))}});zt.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"secondary",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"oneHalf",required:!1,type:{name:"boolean"}},{name:"oneThird",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const ak="Polaris-TextContainer",ok="Polaris-TextContainer--spacingTight",nk="Polaris-TextContainer--spacingLoose";var iu={TextContainer:ak,spacingTight:ok,spacingLoose:nk};const wt=M({props:{spacing:null},setup(e){const o=e,n=m(()=>o.spacing&&iu[Pe("spacing",o.spacing)]),s=m(()=>F(iu.TextContainer,n.value));return(i,r)=>(l(),d("div",{class:u(a(s))},[f(i.$slots,"default")],2))}});wt.__docgenInfo={exportName:"default",displayName:"TextContainer",description:"",tags:{},props:[{name:"spacing",description:"The amount of vertical spacing children will get between them",required:!1,type:{name:"Spacing"}}],slots:[{name:"default"}]};const sa=M({props:{id:null},setup(e){const o=de(),n=m(()=>{var i;return(i=o.description)==null?void 0:i.call(o)}),s=m(()=>Boolean(n.value&&(n.value.length>=2||n.value[0]&&(n.value[0].type.toString()!=="Symbol(Text)"||n.value[0].type.toString()!=="Symbol()"))));return(i,r)=>(l(),d("div",{class:u(a(Lt).AnnotatedSection)},[k("div",{class:u(a(Lt).AnnotationWrapper)},[k("div",{class:u(a(Lt).Annotation)},[L(a(wt),null,{default:y(()=>[L(a(aa),{id:e.id},{default:y(()=>[f(i.$slots,"title")]),_:3},8,["id"]),a(s)?f(i.$slots,"description",{key:1}):(l(),d("div",{key:0,class:u(a(Lt).AnnotationDescription)},[f(i.$slots,"description")],2))]),_:3})],2),k("div",{class:u(a(Lt).AnnotationContent)},[f(i.$slots,"default")],2)],2)],2))}});sa.__docgenInfo={exportName:"default",displayName:"AnnotatedSection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"description"},{name:"default"}]};const It=M({props:{sectioned:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:u(a(Lt).Layout)},[e.sectioned?(l(),A(a(zt),{key:0},{default:y(()=>[f(o.$slots,"default")]),_:3})):f(o.$slots,"default",{key:1})],2))}});It.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"sectioned",description:"Automatically adds sections to layout",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const sk="Polaris-Link",ik="Polaris-Link__IconLockup",lk="Polaris-Link__IconLayout",rk="Polaris-Link--monochrome",ck="Polaris-Link--removeUnderline";var ua={Link:sk,IconLockup:ik,IconLayout:lk,monochrome:rk,removeUnderline:ck};const uk=["id","aria-label"],zo=M({props:{id:null,url:null,to:null,external:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,n=m(()=>F(ua.Link,o.monochrome&&ua.monochrome,o.removeUnderline&&ua.removeUnderline));return(s,i)=>e.url||e.to?(l(),A(a(xt),{key:0,id:e.id,to:e.to,url:e.url,class:u(a(n)),external:e.external,"aria-label":e.accessibilityLabel},{default:y(()=>[f(s.$slots,"default"),k("span",{class:u(a(ua).IconLockup)},[k("span",{class:u(a(ua).IconLayout)},[L(a(re),{source:a(Rc)},null,8,["source"])],2)],2)]),_:3},8,["id","to","url","class","external","aria-label"])):(l(),d("button",{key:1,id:e.id,type:"button",class:u(a(n)),"aria-label":e.accessibilityLabel,onClick:i[0]||(i[0]=r=>s.$emit("click"))},[f(s.$slots,"default"),k("span",{class:u(a(ua).IconLockup)},[k("span",{class:u(a(ua).IconLayout)},[L(a(re),{source:a(Rc)},null,8,["source"])],2)],2)],10,uk))}});zo.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"id",description:"ID for the link",required:!1,type:{name:"string"}},{name:"url",description:"The url to link to",required:!1,type:{name:"string"}},{name:"to",description:"Using with vue-router",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"external",description:"Makes the link open in a new tab",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes the link color the same as the current text color and adds an underline",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes text decoration underline to the link",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const dk="Polaris-List",pk="Polaris-List--typeNumber",mk="Polaris-List__Item";var Sr={List:dk,typeNumber:pk,Item:mk};const Go=M({props:{type:{default:"bullet"}},setup(e){const o=e,n=m(()=>{const i=Pe("type",o.type);return F(Sr.List,o.type&&Sr[i])}),s=o.type==="bullet"?"ul":"ol";return(i,r)=>(l(),A(Ee(a(s)),{class:u(a(n))},{default:y(()=>[f(i.$slots,"default")]),_:3},8,["class"]))}});Go.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"type",description:"Type of list to display",tags:{values:[{description:"bullet | number",title:"values"}],default:[{description:"bullet",title:"default"}]},required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'bullet'"}}],slots:[{name:"default"}]};const si=M({setup(e){return(o,n)=>(l(),d("li",{class:u(a(Sr).Item)},[f(o.$slots,"default")],2))}});si.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const yk="Polaris-Listbox";var gk={Listbox:yk};const hk={"aria-live":"polite"},bk=["aria-label","aria-labelledby","aria-busy","asia-activedescendant","id"],Tt=M({props:{enableKeyboardControl:{type:Boolean},accessibilityLabel:null},emits:["select","on-active-option-change"],setup(e,{emit:o}){const n=e,s="[data-listbox-option]",i="data-listbox-option-value",r="data-listbox-option-action",c="data-focused";Ge("withinListboxContext",!0);const p=ve("comboboxListboxContext",{}),{setActiveOptionId:T,setListboxId:b,listboxId:g,textFieldLabelId:h,willLoadMoreOptions:x,onOptionSelected:S,onKeyToBottom:w,textFieldFocused:B}=p,I=de(),{useUniqueId:q}=Oe(),R=q("Listbox"),U=m(()=>Boolean(T)),Q=m(()=>g||""),D=C(null),Y=C(null),E=C(""),j=C(!1),se=C([]),he=C(n.enableKeyboardControl);let te;Fe([()=>R,()=>Q],()=>{b&&!g&&b(R)}),Fe([()=>te,()=>E],()=>{!E.value&&I.default&&I.default().length>0&&ge()}),Fe([()=>n.enableKeyboardControl,()=>he],()=>{n.enableKeyboardControl&&!he.value&&(he.value=!0)});const Me=()=>D.value?[...new Set(D.value.querySelectorAll(s))]:[],$=ee=>{const ke=ee.some(W=>W.getAttribute("aria-selected")==="true");let Z=0;const O=ee.find((W,ue)=>{const Be=W.getAttribute("aria-disabled")!=="true";let Ve;return ke?Ve=W.getAttribute("aria-selected")==="true"&&Be:Ve=Be,Ve&&(Z=ue),Ve});if(!!O)return{element:O,index:Z}},K=Vt(ee=>{Y.value&&kg(ee.element,Y.value)},50),le=()=>{if(w)return j.value=!0,Promise.resolve(w())},pe=ee=>{ee?(te==null||te.element.removeAttribute(c),ee==null||ee.element.setAttribute(c,"true"),K(ee),te=ee,T==null||T(ee.domId),o("on-active-option-change",ee.value)):te=void 0},$e=(ee,ke)=>({element:ee,index:ke,domId:ee.id,value:ee.getAttribute(i)||"",disabled:ee.getAttribute("aria-disabled")==="true",isAction:ee.getAttribute(r)==="true"}),ge=()=>{let ee;const ke=Me(),Z=$(ke);if(ke.length===0&&se.value.length>0){se.value=ke,pe();return}if(Z){const{element:ze,index:Aa}=Z;ee=$e(ze,Aa)}const O=te!==void 0&&(ee==null?void 0:ee.domId)===(te==null?void 0:te.domId),W=(te==null?void 0:te.isAction)&&(ee==null?void 0:ee.isAction)&&(ee==null?void 0:ee.value)!==(te==null?void 0:te.value),ue=se.value.map(ze=>ze.getAttribute(i)),Be=ke.map(ze=>ze.getAttribute(i));if(Be.length===ue.length&&Be.every((ze,Aa)=>ue[Aa]===ze)){O&&W&&(se.value=ke,pe(ee));return}if(se.value=ke,j.value){j.value=!1;return}pe(ee)},Se=async ee=>{const ke=se.value.length-1;let Z=(te==null?void 0:te.index)||0,O=0,W=te==null?void 0:te.element,ue=-1;for(;ue++<ke;){O=rt(Z,ke,ee),W=se[O];const Be=O>=ke,Ve=(W==null?void 0:W.getAttribute("aria-disabled"))==="true";if(Be&&x&&await le(),Ve){Z=O,W=void 0;continue}break}return{element:W,nextIndex:O}},ae=async(ee,ke)=>{ke.preventDefault();const{element:Z,nextIndex:O}=await Se(ee);if(!Z)return;const W=$e(Z,O);pe(W)},Te=ee=>{ae("down",ee)},De=ee=>{ae("up",ee)},qe=ee=>{ee.preventDefault(),ee.stopPropagation(),ht(te)},Ne=()=>{n.enableKeyboardControl||(he.value=!0)},lt=ee=>{if(ee.stopPropagation(),he.value){const ke=$(se.value);if(ke){const{element:Z,index:O}=ke,W=$e(Z,O);pe(W)}}n.enableKeyboardControl||(he.value=!1)},Dt=ee=>{E.value=ee},rt=(ee,ke,Z)=>{let O;return Z==="down"?ee===ke?O=x?ee+1:0:O=ee+1:O=ee===0?ke:ee-1,O},ht=ee=>{pe(ee),S&&S(),o("select",ee.value)};return Ge("listboxContext",{onOptionSelect:ht,setLoading:Dt}),Ht(()=>{D.value&&(Y.value=D.value.closest(Us.selector))}),(ee,ke)=>(l(),d(X,null,[he.value||a(B)?(l(),d(X,{key:0},[L(a(yt),{keyEvent:"keydown",keyCode:a(Ue).ArrowDown,handler:Te},null,8,["keyCode"]),L(a(yt),{keyEvent:"keydown",keyCode:a(Ue).ArrowUp,handler:De},null,8,["keyCode"]),L(a(yt),{keyEvent:"keydown",keyCode:a(Ue).Enter,handler:qe},null,8,["keyCode"])],64)):P("",!0),L(a(ot),null,{default:y(()=>[k("div",hk,z(E.value?E.value:null),1)]),_:1}),ee.$slots.default?(l(),d("ul",{key:1,tabindex:"0",role:"listbox",class:u(a(F)(a(gk).Listbox)),"aria-label":a(U)?void 0:e.accessibilityLabel,"aria-labelledby":a(h)||void 0,"aria-busy":Boolean(E.value),"asia-activedescendant":a(te)&&a(te).domId,id:a(R),onFocus:Ne,onBlur:lt,ref_key:"listboxRef",ref:D},[f(ee.$slots,"default")],42,bk)):P("",!0)],64))}});Tt.__docgenInfo={exportName:"default",displayName:"Listbox",description:"",tags:{},props:[{name:"enableKeyboardControl",description:"Explicitly enable keyboard control",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["string"]}},{name:"on-active-option-change",type:{names:["string"]}}],slots:[{name:"default"}]};const fk="Polaris-Listbox-Action",vk="Polaris-Listbox-Action__ActionDivider",xk="Polaris-Listbox-Action__Icon";var ar={Action:fk,ActionDivider:vk,Icon:xk};const Tk="Polaris-Listbox-Option",Sk="Polaris-Listbox-Option--divider";var lu={Option:Tk,divider:Sk};const Ck="Polaris-Listbox-TextOption",Ak="Polaris-Listbox-TextOption--allowMultiple",kk="Polaris-Listbox-TextOption--isAction",Lk="Polaris-Listbox-TextOption--selected",wk="Polaris-Listbox-TextOption--disabled",Pk="Polaris-Listbox-TextOption__Content",_k="Polaris-Listbox-TextOption__Checkbox";var da={TextOption:Ck,allowMultiple:Ak,isAction:kk,selected:Lk,disabled:wk,Content:Pk,Checkbox:_k};const qs=M({props:{selected:{type:Boolean},disabled:{type:Boolean}},setup(e){const o=e,{allowMultiple:n}=ve("comboboxListboxOptionContext",{}),s=ve("actionContext",!1),i=m(()=>F(da.TextOption,o.selected&&!n&&da.selected,o.disabled&&da.disabled,n&&da.allowMultiple,s&&da.isAction));return(r,c)=>(l(),d("div",{class:u(a(i))},[k("div",{class:u(a(da).Content)},[a(n)&&!a(s)?(l(),d("div",{key:0,class:u(a(da).Checkbox)},[L(a(xa),{disabled:e.disabled,checked:e.selected},{label:y(()=>[f(r.$slots,"default")]),_:3},8,["disabled","checked"])],2)):f(r.$slots,"default",{key:1})],2)],2))}});qs.__docgenInfo={exportName:"default",displayName:"TextOption",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Mk=["id","role","data-within-section","data-listbox-option-value","data-listbox-option-action","data-listbox-option-destructive","aria-disabled","aria-label","aria-selected"],Pt=M({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean}},setup(e){const o=e,n=ve("mappedActionContext",{}),s=ve("sectionContext",""),i=ve("listboxContext",{onOptionSelect(Y){},setLoading(Y){}}),r=ve("isAction",!1),{role:c,url:p,external:T,onAction:b,destructive:g}=n,{onOptionSelect:h}=i,x=de(),S=C(null),{useUniqueId:w}=Oe(),B=w("ListboxOption"),I=m(()=>Boolean(s)),q={[Lg.attribute]:I.value},R=m(()=>Boolean(x.default&&(x.default().length>=2||x.default()[0]&&x.default()[0].type.toString()!=="Symbol(Text)"&&x.default()[0].type.toString()!=="Symbol()"))),U=m(()=>c||"option"),Q=m(()=>F(lu.Option,o.divider&&lu.divider)),D=Y=>{Y.preventDefault(),b&&b(),S.value&&!b&&h({domId:B,value:o.value,element:S.value,disabled:o.disabled||!1})};return(Y,E)=>(l(),d("li",ye(q,{id:a(B),class:a(Q),ref_key:"listItemRef",ref:S,role:a(U),"data-within-section":a(I),"data-listbox-option-value":e.value,"data-listbox-option-action":a(r),"data-listbox-option-destructive":a(g),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,"aria-selected":e.selected,onClick:E[0]||(E[0]=j=>e.disabled?void 0:D),onKeydown:E[1]||(E[1]=j=>e.disabled?void 0:D),onMousedown:D,tabindex:"-1","data-listbox-option":""}),[a(p)?(l(),A(a(xt),{key:0,url:a(p),external:a(T)},{default:y(()=>[a(R)?f(Y.$slots,"default",{key:1}):(l(),A(a(qs),{key:0,selected:e.selected,disabled:e.disabled},{default:y(()=>[f(Y.$slots,"default")]),_:3},8,["selected","disabled"]))]),_:3},8,["url","external"])):(l(),d(X,{key:1},[a(R)?f(Y.$slots,"default",{key:1}):(l(),A(a(qs),{key:0,selected:e.selected,disabled:e.disabled},{default:y(()=>[f(Y.$slots,"default")]),_:3},8,["selected","disabled"]))],64))],16,Mk))}});Pt.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const ii=M({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean},icon:null},setup(e){const o=e;Ge("actionContext",!0);const n=m(()=>F(ar.Action,o.divider&&ar.ActionDivider));return(s,i)=>(l(),A(a(Pt),Qe(kt(o)),{default:y(()=>[k("div",{class:u(a(n))},[L(a(qs),{selected:e.selected,disabled:e.disabled},{default:y(()=>[e.icon?(l(),d("div",{key:0,class:u(a(ar).Icon)},[L(a(re),{color:"subdued",source:e.icon},null,8,["source"])],2)):P("",!0),f(s.$slots,"default")]),_:3},8,["selected","disabled"])],2)]),_:3},16))}});ii.__docgenInfo={exportName:"default",displayName:"Action",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const Nk="Polaris-Listbox-Header";var Bk={Header:Nk};const Ik=["id"],Dk=M({setup(e){const o=ve("sectionContext",""),n=de(),s=m(()=>{var r;return(r=n.default)==null?void 0:r.call(n)}),i=m(()=>Boolean(s.value&&(s.value.length>=2||s.value[0]&&(s.value[0].type.toString()!=="Symbol(Text)"||s.value[0].type.toString()!=="Symbol()"))));return(r,c)=>(l(),d("div",{id:a(o),"aria-hidden":""},[a(i)?f(r.$slots,"default",{key:1}):(l(),d("div",{key:0,class:u(a(Bk).Header)},[f(r.$slots,"default")],2))],8,Ik))}});Dk.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},slots:[{name:"default"}]};const $k="Polaris-Listbox-Loading__ListItem",Fk="Polaris-Listbox-Loading";var ru={ListItem:$k,Loading:Fk};const Mn=M({props:{accessibilityLabel:null},setup(e){const o=e,n=ve("listboxContext",{onOptionSelect(i){},setLoading(i){}}),{setLoading:s}=n;return Fe(()=>o.accessibilityLabel,()=>(s(o.accessibilityLabel),()=>s(void 0))),(i,r)=>(l(),d("li",{class:u(a(ru).ListItem),role:"presentation"},[i.$slots.default?f(i.$slots,"default",{key:0}):(l(),d("div",{key:1,class:u(a(ru).Loading)},[L(a(ea),{size:"small",accessibilityLabel:e.accessibilityLabel},null,8,["accessibilityLabel"])],2))],2))}});Mn.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"accessibilityLabel",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const Ek="Polaris-Listbox-Section__SectionGroup",Ok="Polaris-Listbox-Section--noDivider";var cu={SectionGroup:Ek,noDivider:Ok};const qk=["aria-labelledby"],Rk=M({props:{divider:{type:Boolean}},setup(e){const o=e,{useUniqueId:n}=Oe(),s=n("ListboxSection");Ge("sectionContext",s);const i=m(()=>F(cu.SectionGroup,!o.divider&&cu.noDivider));return(r,c)=>(l(),d("li",ye({role:"presentation"},a(wg)),[f(r.$slots,"title"),k("ul",{role:"group","aria-labelledby":a(s),class:u(a(i))},[f(r.$slots,"default")],10,qk)],16))}});Rk.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const Nn=M({setup(e){const{useFrame:o}=Wo(),{startLoading:n,stopLoading:s}=o();return xe(()=>{n()}),ct(()=>{s()}),(i,r)=>null}});Nn.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const Vk="Polaris-MessageIndicator__MessageIndicatorWrapper",Hk="Polaris-MessageIndicator";var uu={MessageIndicatorWrapper:Vk,MessageIndicator:Hk};const Tp=M({props:{active:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:u(a(uu).MessageIndicatorWrapper)},[e.active?(l(),d("div",{key:0,class:u(a(uu).MessageIndicator)},null,2)):P("",!0),f(o.$slots,"default")],2))}});Tp.__docgenInfo={exportName:"default",displayName:"MessageIndicator",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Uk="Polaris-Modal__BodyWrapper",jk="Polaris-Modal__Body",Wk="Polaris-Modal__IFrame",zk="Polaris-Modal__Spinner";var La={BodyWrapper:Uk,Body:jk,IFrame:Wk,Spinner:zk};const Gk="Polaris-Modal-Dialog__Container",Xk="Polaris-Modal-Dialog",Kk="Polaris-Modal-Dialog__Modal",Yk="Polaris-Modal-Dialog--limitHeight",Zk="Polaris-Modal-Dialog--sizeSmall",Qk="Polaris-Modal-Dialog--sizeLarge",Jk="Polaris-Modal-Dialog--animateFadeUp",eL="Polaris-Modal-Dialog--entering",tL="Polaris-Modal-Dialog--exiting",aL="Polaris-Modal-Dialog--exited",oL="Polaris-Modal-Dialog--entered";var Kt={Container:Gk,Dialog:Xk,Modal:Kk,limitHeight:Yk,sizeSmall:Zk,sizeLarge:Qk,animateFadeUp:Jk,entering:eL,exiting:tL,exited:aL,entered:oL};const Rs=M({props:{trapping:{type:Boolean,default:!0}},setup(e){const o=e,{canSafelyFocus:n}=Hh(o),s=C(null),i=C(!0);Fe([()=>o.trapping],()=>{i.value=n.value&&!(s.value&&s.value.contains(document.activeElement))?!o.trapping:!0});const r=p=>{!o.trapping||!s.value||s.value.contains(document.activeElement)||p.target instanceof Element&&p.target.matches(`${Sd.selector} *`)||n.value&&p.target instanceof HTMLElement&&s.value!==p.target&&s.value.contains(p.target)&&Sn(s.value)},c=p=>{if(!o.trapping||!s.value)return;const T=Fd(s.value),b=Ed(s.value);p.target===b&&!p.shiftKey&&(p.preventDefault(),mh(s.value)),p.target===T&&p.shiftKey&&(p.preventDefault(),yh(s.value))};return(p,T)=>(l(),d("div",{ref_key:"wrapperNode",ref:s},[L(a(mp),{disabled:i.value,root:s.value},null,8,["disabled","root"]),L(a(Je),{event:"focusin",handler:r}),L(a(yt),{keyCode:a(Ue).Tab,keyEvent:"keydown",handler:c},null,8,["keyCode"]),f(p.$slots,"default")],512))}});Rs.__docgenInfo={exportName:"default",displayName:"TrapFocus",description:"",tags:{},props:[{name:"trapping",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}]};const nL=["aria-labelledby"],sL=["aria-labelledby"],Sp=M({props:{labelledBy:null,instant:{type:Boolean},limitHeight:{type:Boolean},large:{type:Boolean},small:{type:Boolean}},emits:["close","entered","exited"],setup(e,{emit:o}){const n=e,s=C(null),i=m(()=>F(Kt.Modal,n.small&&Kt.sizeSmall,n.large&&Kt.sizeLarge,n.limitHeight&&Kt.limitHeight));return xe(()=>{s.value&&s.value.contains(document.activeElement)&&Sn(s.value),o("entered")}),ct(()=>{o("exited")}),(r,c)=>e.instant?(l(),d("div",{key:0,class:u(a(Kt).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref_key:"dialogNode",ref:s},[L(a(Rs),null,{default:y(()=>[k("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:u(a(Kt).Dialog)},[k("div",{class:u(a(i))},[L(a(yt),{keyCode:a(Ue).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),f(r.$slots,"default")],2)],10,nL)]),_:3})],2)):(l(),d("div",{key:1,class:u(a(Kt).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref:"dialog"},[L(a(Rs),null,{default:y(()=>[k("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:u(a(Kt).Dialog)},[k("div",{class:u(a(i))},[L(a(yt),{keyCode:a(Ue).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),f(r.$slots,"default")],2)],10,sL)]),_:3})],2))}});Sp.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"labelledBy",required:!1,type:{name:"string"}},{name:"instant",required:!1,type:{name:"boolean"}},{name:"limitHeight",required:!1,type:{name:"boolean"}},{name:"large",required:!1,type:{name:"boolean"}},{name:"small",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"entered"},{name:"exited"}],slots:[{name:"default"}]};const iL="Polaris-Modal-Header",lL="Polaris-Modal-Header--titleHidden",rL="Polaris-Modal-Header__Title";var or={Header:iL,titleHidden:lL,Title:rL};const cL="Polaris-Modal-CloseButton";var uL={CloseButton:cL};const Cp=M({emits:["click"],setup(e,{emit:o}){return(n,s)=>(l(),d("button",{class:u(a(uL).CloseButton),"aria-label":"Close",onClick:s[0]||(s[0]=i=>o("click"))},[L(a(re),{source:a(Vr),color:"base"},null,8,["source"])],2))}});Cp.__docgenInfo={exportName:"default",displayName:"CloseButton",description:"",tags:{},events:[{name:"click"}]};const dL=["id"],Ap=M({props:{id:null,titleHidden:{type:Boolean}},emits:["close"],setup(e,{emit:o}){const n=e,s=de(),i=m(()=>n.titleHidden||!s.default?or.titleHidden:or.Header);return(r,c)=>(l(),d("div",{class:u(a(i))},[k("div",{id:e.id,class:u(a(or).Title)},[L(a(_n),{element:"h2",size:"small"},{default:y(()=>[f(r.$slots,"default")]),_:3})],10,dL),L(a(Cp),{onClick:c[0]||(c[0]=p=>o("close"))})],2))}});Ap.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"titleHidden",required:!1,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"default"}]};const pL="Polaris-Modal-Footer",mL="Polaris-Modal-Footer__FooterContent";var du={Footer:pL,FooterContent:mL};const yL="Polaris-Stack",gL="Polaris-Stack__Item",hL="Polaris-Stack--noWrap",bL="Polaris-Stack--spacingNone",fL="Polaris-Stack--spacingExtraTight",vL="Polaris-Stack--spacingTight",xL="Polaris-Stack--spacingBaseTight",TL="Polaris-Stack--spacingLoose",SL="Polaris-Stack--spacingExtraLoose",CL="Polaris-Stack--distributionLeading",AL="Polaris-Stack--distributionTrailing",kL="Polaris-Stack--distributionCenter",LL="Polaris-Stack--distributionEqualSpacing",wL="Polaris-Stack--distributionFill",PL="Polaris-Stack--distributionFillEvenly",_L="Polaris-Stack--alignmentLeading",ML="Polaris-Stack--alignmentTrailing",NL="Polaris-Stack--alignmentCenter",BL="Polaris-Stack--alignmentFill",IL="Polaris-Stack--alignmentBaseline",DL="Polaris-Stack--vertical";var Yt={Stack:yL,Item:gL,noWrap:hL,spacingNone:bL,spacingExtraTight:fL,spacingTight:vL,spacingBaseTight:xL,spacingLoose:TL,spacingExtraLoose:SL,distributionLeading:CL,distributionTrailing:AL,distributionCenter:kL,distributionEqualSpacing:LL,distributionFill:wL,distributionFillEvenly:PL,alignmentLeading:_L,alignmentTrailing:ML,alignmentCenter:NL,alignmentFill:BL,alignmentBaseline:IL,vertical:DL,"Item-fill":"Polaris-Stack__Item--fill"};const vt=M({props:{fill:{type:Boolean,default:!1}},setup(e){const o=e,n=m(()=>F(Yt.Item,o.fill&&Yt["Item-fill"]));return(s,i)=>(l(),d("div",{class:u(a(n))},[f(s.$slots,"default")],2))}});vt.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"fill",description:"Fill the remaining horizontal space in the stack with the item",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const We=M({props:{wrap:{type:Boolean,default:!0},vertical:{type:Boolean},spacing:null,alignment:null,distribution:null,noItemWrap:{type:Boolean,default:!1}},setup(e){const o=e,n=de(),s=m(()=>{const i=o.spacing&&Pe("spacing",o.spacing),r=o.distribution&&Pe("distribution",o.distribution),c=o.alignment&&Pe("alignment",o.alignment);return F(Yt.Stack,o.vertical&&Yt.vertical,i&&Yt[i],r&&Yt[r],c&&Yt[c],o.wrap===!1&&Yt.noWrap)});return(i,r)=>(l(),d("div",{class:u(a(s))},[!e.noItemWrap&&a(n).default?(l(!0),d(X,{key:0},be(a(n).default(),(c,p)=>(l(),A(a(vt),{key:p},{default:y(()=>[(l(),A(Ee(c)))]),_:2},1024))),128)):f(i.$slots,"default",{key:1})],2))}});We.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"wrap",description:"Wrap stack elements to additional rows as needed on small screens (Defaults to true)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"vertical",description:"Stack the elements vertically",required:!1,type:{name:"boolean"}},{name:"spacing",description:"Adjust spacing between elements",required:!1,type:{name:"Spacing"}},{name:"alignment",description:"Adjust vertical alignment of elements",required:!1,type:{name:"Alignment"}},{name:"distribution",description:"Adjust horizontal alignment of elements",required:!1,type:{name:"Distribution"}},{name:"noItemWrap",description:"No wrap all stack elements with StackItem",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const kp=M({props:{primaryAction:null,secondaryActions:null},setup(e){return(o,n)=>(l(),d("div",{class:u(a(du).Footer)},[k("div",{class:u(a(du).FooterContent)},[L(a(We),{alignment:"center","no-item-wrap":""},{default:y(()=>[L(a(vt),{fill:!0},{default:y(()=>[f(o.$slots,"default")]),_:3}),e.primaryAction||e.secondaryActions?(l(),A(a(vt),{key:0},{default:y(()=>[L(a(nt),null,{default:y(()=>[e.secondaryActions?(l(!0),d(X,{key:0},be(e.secondaryActions,(s,i)=>(l(),A(a(mt),{key:i,action:s},null,8,["action"]))),128)):P("",!0),L(a(mt),{action:e.primaryAction,overrides:{primary:!0}},null,8,["action"])]),_:1})]),_:1})):P("",!0)]),_:3})],2)],2))}});kp.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"primaryAction",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"default"}]};const $L="Polaris-Modal-Section",FL="Polaris-Modal-Section--subdued",EL="Polaris-Modal-Section--flush";var nr={Section:$L,subdued:FL,flush:EL};const Ro=M({props:{flush:{type:Boolean},subdued:{type:Boolean}},setup(e){const o=e,n=m(()=>F(nr.Section,o.flush&&nr.flush,o.subdued&&nr.subdued));return(s,i)=>(l(),d("section",{class:u(a(n))},[f(s.$slots,"default")],2))}});Ro.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"flush",required:!1,type:{name:"boolean"}},{name:"subdued",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const OL=["name","src"],Sa=M({props:{open:{type:Boolean},src:null,iFrameName:null,titleHidden:{type:Boolean},instant:{type:Boolean},sectioned:{type:Boolean},large:{type:Boolean},small:{type:Boolean},limitHeight:{type:Boolean},loading:{type:Boolean},noScroll:{type:Boolean},primaryAction:null,secondaryActions:null},emits:["iframe-load","transition-end","scrolled-to-bottom","close"],setup(e,{emit:o}){const i=de(),r=C(null),{useUniqueId:c}=Oe(),p=c("modal-header"),T=C(200),b=C(!1),g=S=>{const w=S.target;if(w&&w.contentWindow)try{T.value=w.contentWindow.document.body.scrollHeight}catch{T.value=400}o("iframe-load",S)},h=()=>{o("transition-end")},x=()=>{T.value=200;const S=r.value;S&&requestAnimationFrame(()=>Sn(S))};return xe(()=>{b.value=!0}),(S,w)=>(l(),d("div",null,[a(i).activator?(l(),d("div",{key:0,ref_key:"activatorNode",ref:r},[f(S.$slots,"activator")],512)):P("",!0),b.value&&e.open?(l(),A(a(An),{key:1,idPrefix:"modal"},{default:y(()=>[L(a(Sp),{instant:e.instant,labelledBy:a(p),large:e.large,small:e.small,limitHeight:e.limitHeight,onClose:w[2]||(w[2]=B=>o("close")),onEntered:h,onExited:x},{default:y(()=>[L(a(Ap),{titleHidden:e.titleHidden,id:a(p),onClose:w[0]||(w[0]=B=>o("close")),key:"header"},{default:y(()=>[f(S.$slots,"title")]),_:3},8,["titleHidden","id"]),k("div",{class:u(a(La).BodyWrapper),key:"body"},[e.src?(l(),d("iframe",{key:0,name:e.iFrameName,title:"body markup",src:e.src,class:u(a(La).IFrame),onLoad:g,style:Re({height:`${T.value}px`})},null,46,OL)):e.noScroll?(l(),d("div",{key:1,class:u(a(La).Body)},[e.loading?(l(),d("div",{key:0,class:u(a(La).Spinner)},[L(a(ea))],2)):(l(),d(X,{key:1},[e.sectioned?(l(),A(a(Ro),{key:0},{default:y(()=>[f(S.$slots,"content")]),_:3})):f(S.$slots,"content",{key:1})],64))],2)):(l(),A(a(jt),{key:2,shadow:!0,class:u(a(La).Body),onScrolledToBottom:w[1]||(w[1]=B=>o("scrolled-to-bottom"))},{default:y(()=>[e.loading?(l(),d("div",{key:0,class:u(a(La).Spinner)},[L(a(ea))],2)):(l(),d(X,{key:1},[e.sectioned?(l(),A(a(Ro),{key:0},{default:y(()=>[f(S.$slots,"content")]),_:3})):f(S.$slots,"content",{key:1})],64))]),_:3},8,["class"]))],2),a(i).footer||e.primaryAction||e.secondaryActions?(l(),A(a(kp),{primaryAction:e.primaryAction,secondaryActions:e.secondaryActions,key:"footer"},{default:y(()=>[f(S.$slots,"footer")]),_:3},8,["primaryAction","secondaryActions"])):P("",!0)]),_:3},8,["instant","labelledBy","large","small","limitHeight"]),L(a(Ir))]),_:3})):P("",!0)]))}});Sa.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",description:"Whether the modal is open or not",required:!0,type:{name:"boolean"}},{name:"src",description:"The url that will be loaded as the content of the modal",required:!1,type:{name:"string"}},{name:"iFrameName",description:"The name of the modal content iframe",required:!1,type:{name:"string"}},{name:"titleHidden",description:"Hide the title in the modal",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"instant",description:"Disable animations and open modal instantly",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically adds sections to modal",required:!1,type:{name:"boolean"}},{name:"large",description:"Increases the modal width",required:!1,type:{name:"boolean"}},{name:"small",description:"Decreases the modal width",required:!1,type:{name:"boolean"}},{name:"limitHeight",description:"Limits modal height on large sceens with scrolling",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces modal content with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"noScroll",description:"Removes Scrollable container from the modal content",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary action",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",description:"Collection of secondary actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],events:[{name:"iframe-load",type:{names:["Event"]}},{name:"transition-end"},{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"title"},{name:"content"},{name:"footer"}]};const qL="Polaris-Navigation",RL="Polaris-Navigation__UserMenu",VL="Polaris-Navigation__ContextControl",HL="Polaris-Navigation__PrimaryNavigation",UL="Polaris-Navigation__LogoContainer",jL="Polaris-Navigation__Logo",WL="Polaris-Navigation__LogoLink",zL="Polaris-Navigation__Item",GL="Polaris-Navigation--keyFocused",XL="Polaris-Navigation__Icon",KL="Polaris-Navigation__Badge",YL="Polaris-Navigation--subNavigationActive",ZL="Polaris-Navigation__ExternalIcon",QL="Polaris-Navigation__ListItem",JL="Polaris-Navigation__RollupSection",ew="Polaris-Navigation__SecondaryNavigation",tw="Polaris-Navigation__ItemWrapper",aw="Polaris-Navigation__Text",ow="Polaris-Navigation__SecondaryAction",nw="Polaris-Navigation--isExpanded",sw="Polaris-Navigation__List",iw="Polaris-Navigation__Section",lw="Polaris-Navigation__SectionHeading",rw="Polaris-Navigation__Action",cw="Polaris-Navigation__RollupToggle",uw="Polaris-Navigation__Indicator";var me={Navigation:qL,UserMenu:RL,ContextControl:VL,PrimaryNavigation:HL,LogoContainer:UL,Logo:jL,LogoLink:WL,Item:zL,keyFocused:GL,"Icon-resized":"Polaris-Navigation__Icon--resized","Item-selected":"Polaris-Navigation__Item--selected","Item-disabled":"Polaris-Navigation__Item--disabled",Icon:XL,Badge:KL,subNavigationActive:YL,"Item-child-active":"Polaris-Navigation--itemChildActive",ExternalIcon:ZL,ListItem:QL,RollupSection:JL,SecondaryNavigation:ew,"ListItem-hasAction":"Polaris-Navigation__ListItem--hasAction",ItemWrapper:tw,Text:aw,SecondaryAction:ow,isExpanded:nw,List:sw,"SecondaryNavigation-noIcon":"Polaris-Navigation__SecondaryNavigation--noIcon",Section:iw,"Section-fill":"Polaris-Navigation__Section--fill","Section-withSeparator":"Polaris-Navigation__Section--withSeparator",SectionHeading:lw,Action:rw,RollupToggle:cw,Indicator:uw};const dw=["aria-labelledby"],Bn=M({props:{location:null,onDismiss:null,ariaLabelledBy:null},setup(e){const o=e,{useFrame:n}=Wo(),{logo:s}=n(),i=Hr(s,104),r=de();return Ge("NavigationContext",{location:o.location,onNavigationDismiss:o.onDismiss,withinContentContainer:!1}),Ge("WithinContentContext",!1),(c,p)=>(l(),d("nav",{class:u(a(me).Navigation),"aria-labelledby":e.ariaLabelledBy},[a(r).contextControl?(l(),d("div",{key:0,class:u(a(me).ContextControl)},[f(c.$slots,"contextControl")],2)):a(s)?(l(),d("div",{key:1,class:u(a(me).LogoContainer)},[L(a(xt),{url:a(s).url||"",class:u(a(me).LogoLink),style:Re({width:a(i)})},{default:y(()=>[L(a(Vo),{source:a(s).topBarSource||"",alt:a(s).accessibilityLabel||"",class:u(a(me).Logo),style:Re({width:a(i)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):P("",!0),L(a(jt),{class:u(a(me).PrimaryNavigation)},{default:y(()=>[f(c.$slots,"default")]),_:3},8,["class"])],10,dw))}});Bn.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"location",required:!0,type:{name:"string"}},{name:"ariaLabelledBy",description:"id of the element used as aria-labelledby",required:!1,type:{name:"string"}}],slots:[{name:"contextControl"},{name:"default"}]};const pw={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},mw=k("path",{d:"M11 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 5H12a1 1 0 0 1-1-1zM3 6.5A1.5 1.5 0 0 1 4.5 5H8a1 1 0 0 1 0 2H5v8h8v-3a1 1 0 1 1 2 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.5v-9z"},null,-1),yw=[mw];function gw(e,o){return l(),d("svg",pw,yw)}var hw={render:gw};function bw(){const e=ve("NavigationContext",{location:""});function o(){return e}return{useNavigationContext:o}}const Lp=M({props:{expanded:{type:Boolean},id:null},setup(e){const{useUniqueId:o}=Oe(),n=o("SecondaryNavigation");return(s,i)=>(l(),A(a(Uo),{id:e.id||a(n),open:e.expanded,transition:{duration:"0ms",timingFunction:"linear"}},{default:y(()=>[k("ul",{class:u(a(me).List)},[f(s.$slots,"default")],2)]),_:3},8,["id","open"]))}});Lp.__docgenInfo={exportName:"default",displayName:"Secondary",description:"",tags:{},props:[{name:"expanded",required:!0,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const fw=["disabled","aria-disabled","aria-label","onKeyup"],Cr=M({props:{url:null,matches:{type:Boolean},matchPaths:null,excludePaths:null,external:{type:Boolean},icon:null,badge:null,label:null,disabled:{type:Boolean},accessibilityLabel:null,selected:{type:Boolean},exactMatch:{type:Boolean},new:{type:Boolean},subNavigationItems:null,secondaryAction:null,expanded:{type:Boolean},shouldResizeIcon:{type:Boolean}},emits:["toggle-expanded-state","click"],setup(e,{emit:o}){const n=e,{useMediaQuery:s}=na(),{isNavigationCollapsed:i}=s(),{useUniqueId:r}=Oe(),c=r("SecondaryNavigation"),{useNavigationContext:p}=bw(),{location:T,onNavigationDismiss:b}=p(),g=ve("lang"),h=C(!1);Ht(()=>{!i&&n.expanded&&x()});const x=()=>{o("toggle-expanded-state")},S=ge=>{h.value||(h.value=!0)},w=()=>{h.value&&(h.value=!1)},B=m(()=>n.disabled?-1:0),I=m(()=>n.subNavigationItems?n.subNavigationItems.filter(ge=>ge.new).length>0:!1),q=m(()=>F(me.Item,n.disabled&&me["Item-disabled"],h.value&&me.keyFocused,n.selected&&me["Item-selected"])),R=m(()=>F(me.ListItem,n.secondaryAction&&me["ListItem-hasAction"])),U=m(()=>F(me.Icon,n.shouldResizeIcon&&me["Icon-resized"])),Q=pe({url:n.url,matches:n.matches,exactMatch:n.exactMatch,matchPaths:n.matchPaths,excludePaths:n.excludePaths},T),D=m(()=>n.subNavigationItems&&n.subNavigationItems.filter(ge=>{const Se=pe(ge,T);return Se===0||Se===1||Se===2})),Y=m(()=>D.value&&D.value.length>0),E=m(()=>n.selected==null?Q===0||Q===1||Q===2:n.selected),j=m(()=>E.value||n.expanded||Y.value),se=!n.subNavigationItems||n.subNavigationItems.length===0||!Y.value,he=m(()=>F(me.Item,n.disabled&&me["Item-disabled"],E.value&&se&&me["Item-selected"],j.value&&me.subNavigationActive,Y.value&&me["Item-child-active"],h.value&&me.keyFocused)),te=m(()=>D.value?D.value.sort(({url:ge},{url:Se})=>Se.length-ge.length)[0]:null),Me=m(()=>F(me.SecondaryNavigation,j.value&&me.isExpanded,!n.icon&&me["SecondaryNavigation-noIcon"])),$=ge=>{if(ge.currentTarget.getAttribute("href")===T&&ge.preventDefault(),n.subNavigationItems&&n.subNavigationItems.length>0&&i)ge.preventDefault(),x();else if(b){b(),o("click");return}o("click")};function G(ge){const Se=ge.split("?")[0].split("#")[0];return Se.endsWith("/")?Se:`${Se}/`}function K(ge,Se){return G(ge)===G(Se)}function le(ge,Se){return G(ge).startsWith(G(Se))}function pe({url:ge,matches:Se,exactMatch:ae,matchPaths:Te,excludePaths:De},qe){return ge==null?4:Se?0:Se===!1||De&&De.some(lt=>le(qe,lt))?3:Te&&Te.some(lt=>le(qe,lt))?2:(ae?K(qe,ge):le(qe,ge))?1:4}function $e(ge,Se,ae){return Se?{"aria-expanded":ae,"aria-controls":ge}:void 0}return(ge,Se)=>{const ae=Ld("Item",!0);return e.url?(l(),d("li",{key:1,class:u(a(R))},[k("div",{class:u(a(me).ItemWrapper)},[L(a(xt),ye({url:e.url,class:a(he),external:e.external,tabIndex:a(B),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:$,onKeyup:cr(S,["tab"]),onBlur:w},v({},$e(a(c),!!e.subNavigationItems&&e.subNavigationItems.length>0,!!a(j)))),{default:y(()=>[e.icon?(l(),d("div",{key:0,class:u(a(U))},[L(a(re),{source:e.icon},null,8,["source"])],2)):P("",!0),k("span",{class:u(a(me).Text)},[ie(z(e.label),1),a(I)?(l(),d("span",{key:0,class:u(a(me).Indicator)},[L(a(Tr),{pulse:""})],2)):P("",!0)],2),n.new||e.badge?(l(),d("div",{key:1,class:u(a(me).Badge)},[n.new?(l(),A(a(at),{key:0,status:"new",size:"small"},{default:y(()=>[ie(z(a(g).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(l(),A(a(at),{key:1,status:"new",size:"small"},{default:y(()=>[ie(z(e.badge),1)]),_:1})):typeof e.badge=="object"?(l(),A(a(at),Qe(ye({key:2},e.badge)),{default:y(()=>[ie(z(e.badge.content),1)]),_:1},16)):P("",!0)],2)):P("",!0),e.external?(l(),d("div",{key:2,class:u(a(me).ExternalIcon)},[L(a(re),{color:"base",accessibilityLabel:a(g).Polaris.Common.newWindowAccessibilityHint,source:a(hw)},null,8,["accessibilityLabel","source"])],2)):P("",!0)]),_:1},16,["url","class","external","tabIndex","aria-disabled","aria-label","onKeyup"]),e.secondaryAction?(l(),A(a(xt),{key:0,external:"",url:e.secondaryAction.url,class:u(a(me).SecondaryAction),tabIndex:a(B),"aria-disabled":e.disabled,"aria-label":e.secondaryAction.accessibilityLabel,onClick:e.secondaryAction.onClick},{default:y(()=>[L(a(re),{source:e.secondaryAction.icon},null,8,["source"])]),_:1},8,["url","class","tabIndex","aria-disabled","aria-label","onClick"])):P("",!0)],2),e.subNavigationItems&&e.subNavigationItems.length>0?(l(),d("div",{key:0,class:u(a(Me))},[L(a(Lp),{expanded:!!a(j),id:a(c)},{default:y(()=>[(l(!0),d(X,null,be(e.subNavigationItems,Te=>(l(),A(ae,ye({key:Te.label},Te,{matches:Te===a(te),onClick:()=>{a(b)&&a(b)(),Te.onClick&&Te.onClick()}}),null,16,["matches","onClick"]))),128))]),_:1},8,["expanded","id"])],2)):P("",!0)],2)):(l(),d("li",{key:0,class:u(a(me).ListItem)},[k("button",{type:"button",class:u(a(q)),disabled:e.disabled,"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:$,onKeyup:cr(S,["tab"]),onBlur:w},[e.icon?(l(),d("div",{key:0,class:u(a(U))},[L(a(re),{source:e.icon},null,8,["source"])],2)):P("",!0),k("span",{class:u(a(me).Text)},[ie(z(e.label),1),a(I)?(l(),d("span",{key:0,class:u(a(me).Indicator)},[L(a(Tr),{pulse:""})],2)):P("",!0)],2),n.new||e.badge?(l(),d("div",{key:1,class:u(a(me).Badge)},[n.new?(l(),A(a(at),{key:0,status:"new",size:"small"},{default:y(()=>[ie(z(a(g).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(l(),A(a(at),{key:1,status:"new",size:"small"},{default:y(()=>[ie(z(e.badge),1)]),_:1})):typeof e.badge=="object"?(l(),A(a(at),Qe(ye({key:2},e.badge)),{default:y(()=>[ie(z(e.badge.content),1)]),_:1},16)):P("",!0)],2)):P("",!0)],42,fw)],2))}}});Cr.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"url",required:!1,type:{name:"string"}},{name:"matches",required:!1,type:{name:"boolean"}},{name:"matchPaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"excludePaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"external",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"badge",required:!1,type:{name:"union",elements:[{name:"string"},{name:"BadgeItemProps"}]}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"exactMatch",required:!1,type:{name:"boolean"}},{name:"new",required:!1,type:{name:"boolean"}},{name:"subNavigationItems",required:!1,type:{name:"Array",elements:[{name:"SubNavigationItem"}]}},{name:"secondaryAction",required:!1,type:{name:"SecondaryAction"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"shouldResizeIcon",required:!1,type:{name:"boolean"}}],events:[{name:"toggle-expanded-state"},{name:"click"}]};const vw=["aria-label"],xw=["aria-label"],Ur=M({props:{items:null,icon:null,title:null,fill:{type:Boolean},rollup:null,action:null,separator:{type:Boolean}},emits:["click"],setup(e,{emit:o}){const n=e,s=C(!1),i=()=>{s.value=!s.value},r=()=>{s.value=!1},c=C(null),p=C(),{useMediaQuery:T}=na(),{isNavigationCollapsed:b}=T(),{useUniqueId:g}=Oe(),h=g("AdditionalItems"),x=U=>{o("click"),c.value&&cancelAnimationFrame(c.value),(!U||!b)&&(c.value=requestAnimationFrame(r))};xe(()=>{c.value&&cancelAnimationFrame(c.value)});const S=m(()=>F(me.Section,n.separator&&me["Section-withSeparator"],n.fill&&me["Section-fill"])),w=F(me.Item,me.RollupToggle),B=m(()=>n.rollup&&(s.value?n.rollup.hide:n.rollup.view)),I=m(()=>n.items.findIndex(U=>n.rollup?n.rollup.activePath===U.url||U.url&&n.rollup.activePath.startsWith(U.url)||(U.subNavigationItems?U.subNavigationItems.some(({url:Q})=>n.rollup&&n.rollup.activePath.startsWith(Q)):!1):!1)),q=U=>{p.value===U?p.value=-1:p.value=U},R=m(()=>{let U=[];if(U=n.rollup?n.items.slice(0,n.rollup.after):n.items,n.rollup&&I.value!==-1&&I.value>n.rollup.after-1){const Q=n.items.slice(n.rollup.after);U.push(...Q.splice(I.value-n.rollup.after,1))}return U});return(U,Q)=>(l(),d("ul",{class:u(a(S))},[e.title?(l(),d("li",{key:0,class:u(a(me).SectionHeading)},[k("span",{class:u(a(me).Text)},z(e.title),3),e.action?(l(),d("button",{key:0,type:"button",class:u(a(me).Action),"aria-label":e.action.accessibilityLabel,onClick:Q[0]||(Q[0]=(...D)=>e.action.onClick&&e.action.onClick(...D))},[L(a(re),{source:e.action.icon},null,8,["source"])],10,vw)):P("",!0)],2)):P("",!0),a(R).length>0?(l(!0),d(X,{key:1},be(a(R),(D,Y)=>(l(),A(a(Cr),ye({key:D.label},v({},D),{label:D.label,subNavigationItems:D.subNavigationItems,expanded:p.value===Y,onClick:E=>x(D.subNavigationItems!=null&&D.subNavigationItems.length>0),onToggleExpandedState:E=>q(Y)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128)):P("",!0),e.rollup&&e.items.slice(e.rollup.after).length>0?(l(),d("li",{key:2,class:u(a(me).RollupSection)},[L(a(Uo),{id:a(h),open:s.value},{default:y(()=>[k("ul",{class:u(a(me).List)},[(l(!0),d(X,null,be(e.items.slice(e.rollup.after),(D,Y)=>(l(),A(a(Cr),ye({key:D.label},D,{label:D.label,subNavigationItems:D.subNavigationItems,expanded:p.value===Y,onClick:E=>x(D.subNavigationItems!=null&&D.subNavigationItems.length>0),onToggleExpandedState:E=>q(Y)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128))],2)]),_:1},8,["id","open"]),e.rollup&&e.items.length>e.rollup.after?(l(),d("div",{class:u(a(me).ListItem),key:"List Item"},[k("button",{type:"button",class:u(a(w)),"aria-label":a(B),onClick:i},[k("span",{class:u(a(me).Icon)},[L(a(re),{source:a(_a)},null,8,["source"])],2)],10,xw)],2)):P("",!0)],2)):P("",!0)],2))}});Ur.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"items",description:"A collection of navigation items to be rendered inside the section",required:!0,type:{name:"Array",elements:[{name:"ItemProps"}]}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"title",required:!1,type:{name:"string"}},{name:"fill",required:!1,type:{name:"boolean"}},{name:"rollup",required:!1,type:{name:`{
  after: number;
  view: string;
  hide: string;
  activePath: string;
}`}},{name:"action",required:!1,type:{name:`{
  icon: IconProps['source'];
  accessibilityLabel: string;
  onClick(): void;
}`}},{name:"separator",required:!1,type:{name:"boolean"}}],events:[{name:"click"}]};const Tw="Polaris-OptionList",Sw="Polaris-OptionList__Options",Cw="Polaris-OptionList__Title";var sr={OptionList:Tw,Options:Sw,Title:Cw};const Aw="Polaris-OptionList-Option",kw="Polaris-OptionList-Option__SingleSelectOption",Lw="Polaris-OptionList-Option--focused",ww="Polaris-OptionList-Option--active",Pw="Polaris-OptionList-Option--select",_w="Polaris-OptionList-Option--disabled",Mw="Polaris-OptionList-Option__Media",Nw="Polaris-OptionList-Option__Label",Bw="Polaris-OptionList-Option__Checkbox",Iw="Polaris-OptionList-Option--verticalAlignTop",Dw="Polaris-OptionList-Option--verticalAlignCenter",$w="Polaris-OptionList-Option--verticalAlignBottom";var st={Option:Aw,SingleSelectOption:kw,focused:Lw,active:ww,select:Pw,disabled:_w,Media:Mw,Label:Nw,Checkbox:Bw,verticalAlignTop:Iw,verticalAlignCenter:Dw,verticalAlignBottom:$w};const Fw="Polaris-OptionList-Checkbox",Ew="Polaris-OptionList-Checkbox--active",Ow="Polaris-OptionList-Checkbox__Backdrop",qw="Polaris-OptionList-Checkbox__Input",Rw="Polaris-OptionList-Checkbox--keyFocused",Vw="Polaris-OptionList-Checkbox__Icon",Hw="Polaris-OptionList-Checkbox--hover";var wa={Checkbox:Fw,active:Ew,Backdrop:Ow,Input:qw,keyFocused:Rw,"Input-indeterminate":"Polaris-OptionList-Checkbox__Input--indeterminate",Icon:Vw,hover:Hw};const Uw=["id","name","value","checked","disabled","aria-checked","role"],wp=M({props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean},active:{type:Boolean},id:null,name:null,modelValue:null,role:null},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,{useUniqueId:s}=Oe(),i=s("Checkbox",n.id),r=C(!1),c=m(()=>F(wa.Checkbox,n.active&&wa.active)),p=m(()=>F(wa.Input,r.value&&wa.keyFocused)),T=()=>{r.value=!1},b=()=>{r.value||(r.value=!0)},g=h=>{const x=h.target;o("update:modelValue",x.value),o("change",x.value)};return(h,x)=>(l(),d("div",{class:u(a(c))},[k("input",{type:"checkbox",id:a(i),name:e.name,value:e.modelValue,checked:e.checked,disabled:e.disabled,class:u(a(p)),"aria-checked":e.checked,onChange:g,onBlur:T,onKeyup:b,role:e.role},null,42,Uw),k("div",{class:u(a(wa).Backdrop)},null,2),k("div",{class:u(a(wa).Icon)},[L(a(re),{source:a(_r)},null,8,["source"])],2)],2))}});wp.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"checked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"modelValue",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["string"]}},{name:"update:modelValue",type:{names:["string"]}}]};const jw=["for"],Ww=["id","disabled","aria-pressed"],Pp=M({props:{id:null,value:null,section:null,index:null,disabled:{type:Boolean},active:{type:Boolean},select:{type:Boolean},allowMultiple:{type:Boolean},verticalAlign:null,role:null},emits:["click"],setup(e,{emit:o}){const n=e,s=de(),i=C(!1),r=()=>{i.value=!i.value},c=m(()=>F(st.SingleSelectOption,i.value&&st.focused,n.disabled&&st.disabled,n.select&&st.select,n.active&&st.active,n.verticalAlign&&st[Pe("verticalAlign",n.verticalAlign)])),p=m(()=>F(st.Label,n.disabled&&st.disabled,n.active&&st.active,n.select&&st.select,n.verticalAlign&&st[Pe("verticalAlign",n.verticalAlign)])),T=m(()=>n.role==="option"?"presentation":void 0),b=()=>{n.disabled||o("click",n.section,n.index)};return(g,h)=>(l(),d("li",{key:e.id,class:u(a(st).Option),tabIndex:"-1"},[e.active?(l(),A(a(Ws),{key:0})):P("",!0),e.allowMultiple?(l(),d("label",{key:1,for:e.id,class:u(a(p))},[k("div",{class:u(a(st).Checkbox)},[L(a(wp),{id:e.id,modelValue:e.value,"onUpdate:modelValue":h[0]||(h[0]=x=>Is(value)?value.value=x:null),checked:e.select,active:e.active,disabled:e.disabled,role:a(T),onChange:b},null,8,["id","modelValue","checked","active","disabled","role"])],2),a(s).media?(l(),d("div",{key:0,class:u(a(st).Media)},[f(g.$slots,"media")],2)):P("",!0),f(g.$slots,"label")],10,jw)):(l(),d("button",{key:2,type:"button",id:e.id,class:u(a(c)),disabled:e.disabled,"aria-pressed":e.active,onClick:b,onFocus:r,onBlur:r},[a(s).media?(l(),d("div",{key:0,class:u(a(st).Media)},[f(g.$slots,"media")],2)):P("",!0),f(g.$slots,"label")],42,Ww))],2))}});Pp.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"string"}},{name:"section",required:!0,type:{name:"number"}},{name:"index",required:!0,type:{name:"number"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"select",required:!1,type:{name:"boolean"}},{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"verticalAlign",required:!1,type:{name:"Alignment"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],slots:[{name:"media"},{name:"label"}]};const zw=["role"],Gw=["id","role"],In=M({props:{id:null,title:null,options:null,role:null,optionRole:null,sections:null,modelValue:null,allowMultiple:{type:Boolean},verticalAlign:null},emits:["update:modelValue","change"],setup(e,{emit:o}){const n=e,s=de(),i=C(b(n.options,n.sections,n.title)),{useUniqueId:r}=Oe(),c=r("OptionList",n.id),p=(g,h)=>{const x=i.value[g].options[h].value,S=n.modelValue.indexOf(x);if(n.allowMultiple){const w=S===-1?[x,...n.modelValue]:[...n.modelValue.slice(0,S),...n.modelValue.slice(S+1,n.modelValue.length)];o("update:modelValue",w),o("change",w);return}o("update:modelValue",[x]),o("change",[x])},T=m(()=>i.value.length>0);Fe(()=>[n.options,n.sections,n.title],(g,h)=>{g!==h&&(i.value=b(n.options||[],n.sections||[],n.title))});function b(g,h,x){if(!g||!g.length){const S=x?[{options:[],title:x}]:[];return!h||!h.length?[]:[...S,...h]}return!h||!h.length?[{title:x,options:g}]:[{title:x,options:g},...h]}return(g,h)=>(l(),d("ul",{class:u(a(sr).OptionList),role:e.role},[a(T)?(l(!0),d(X,{key:0},be(i.value,(x,S)=>(l(),d("li",{key:x.title||`noTitle-${S}`},[x.title?(l(),d("p",{key:0,class:u(a(sr).Title)},z(x.title),3)):P("",!0),k("ul",{class:u(a(sr).Options),id:`${a(c)}-${S}`,role:e.role},[x.options?(l(!0),d(X,{key:0},be(x.options,(w,B)=>(l(),A(a(Pp),ye({key:w.id||`${a(c)}-${S}-${B}`,id:w.id||`${a(c)}-${S}-${B}`,section:S,index:B},w,{select:e.modelValue.includes(w.value),allowMultiple:e.allowMultiple,verticalAlign:e.verticalAlign,role:e.optionRole,onClick:p}),je({label:y(()=>[a(s)[`option-label-${w.id}`]?f(g.$slots,`option-label-${w.id}`,{key:0}):(l(),d(X,{key:1},[ie(z(w.label),1)],64))]),_:2},[a(s)[`option-media-${w.id}`]?{name:"media",fn:y(()=>[f(g.$slots,`option-media-${w.id}`)])}:void 0]),1040,["id","section","index","select","allowMultiple","verticalAlign","role"]))),128)):P("",!0)],10,Gw)]))),128)):P("",!0)],10,zw))}});In.__docgenInfo={exportName:"default",displayName:"OptionList",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the option list",required:!1,type:{name:"string"}},{name:"title",description:"List title",required:!1,type:{name:"string"}},{name:"options",description:"Collection of options to be listed",required:!1,type:{name:"Array",elements:[{name:"OptionDescriptor"}]}},{name:"role",description:"Defines a specific role attribute for the list itself",required:!1,type:{name:"union",elements:[{name:'"listbox"'},{name:'"combobox"'},{name:"string"}]}},{name:"optionRole",description:"Defines a specific role attribute for each option in the list",required:!1,type:{name:"string"}},{name:"sections",description:"Sections containing a header and related options",required:!1,type:{name:"Array",elements:[{name:"SectionDescriptor"}]}},{name:"modelValue",description:"The selected options",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"allowMultiple",description:"Allow more than one option to be selected",required:!1,type:{name:"boolean"}},{name:"verticalAlign",description:"Vertically align child content to the center, top, or bottom.",required:!1,type:{name:"Alignment"}}],events:[{name:"update:modelValue",type:{names:["Array"]}},{name:"change",type:{names:["Array"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Xw="Polaris-Page",Kw="Polaris-Page--fullWidth",Yw="Polaris-Page--narrowWidth",Zw="Polaris-Page__Content",Qw="Polaris-Page--divider";var hn={Page:Xw,fullWidth:Kw,narrowWidth:Yw,Content:Zw,divider:Qw};const _p=M({props:{title:null,secondaryActions:null,actionGroups:null},setup(e){const o=de(),{useMediaQuery:n}=na(),{isNavigationCollapsed:s}=n();function i(r=[]){return r.length===0?!1:r.some(c=>c.actions.length>0)}return(r,c)=>a(Ae)(a(o).default)?f(r.$slots,"default",{key:0}):e.secondaryActions&&e.secondaryActions.length>0||i(e.actionGroups)?(l(),A(a(jd),{key:1,actions:e.secondaryActions,groups:e.actionGroups,rollup:a(s),rollupActionsLabel:e.title?`View actions for ${e.title}`:void 0},null,8,["actions","groups","rollup","rollupActionsLabel"])):P("",!0)}});_p.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}],slots:[{name:"default"}]};const Jw="Polaris-Page-Header",eP="Polaris-Page-Header--titleHidden",tP="Polaris-Page-Header__TitleWrapper",aP="Polaris-Page-Header__Navigation",oP="Polaris-Page-Header--hasActionMenu",nP="Polaris-Page-Header--mobileView",sP="Polaris-Page-Header__BreadcrumbWrapper",iP="Polaris-Page-Header__PaginationWrapper",lP="Polaris-Page-Header__AdditionalNavigationWrapper",rP="Polaris-Page-Header__MainContent",cP="Polaris-Page-Header__TitleActionMenuWrapper",uP="Polaris-Page-Header--hasNavigation",dP="Polaris-Page-Header__PrimaryActionWrapper",pP="Polaris-Page-Header__ActionMenuWrapper",mP="Polaris-Page-Header__Row",yP="Polaris-Page-Header__RightAlign",gP="Polaris-Page-Header__LeftAlign",hP="Polaris-Page-Header--noBreadcrumbs",bP="Polaris-Page-Header__AdditionalMetaData",fP="Polaris-Page-Header__Actions",vP="Polaris-Page-Header--longTitle",xP="Polaris-Page-Header--mediumTitle",TP="Polaris-Page-Header--isSingleRow";var He={Header:Jw,titleHidden:eP,TitleWrapper:tP,Navigation:aP,hasActionMenu:oP,mobileView:nP,BreadcrumbWrapper:sP,PaginationWrapper:iP,AdditionalNavigationWrapper:lP,MainContent:rP,TitleActionMenuWrapper:cP,hasNavigation:uP,PrimaryActionWrapper:dP,ActionMenuWrapper:pP,Row:mP,RightAlign:yP,LeftAlign:gP,noBreadcrumbs:hP,AdditionalMetaData:bP,Actions:fP,longTitle:vP,mediumTitle:xP,isSingleRow:TP};const Mp=M({props:{additionalMetadata:null},setup(e){const o=de();return(n,s)=>(l(),d("div",{class:u(a(He).AdditionalMetaData)},[L(a(gt),{variation:"subdued"},{default:y(()=>[a(o).default?f(n.$slots,"default",{key:0}):e.additionalMetadata?(l(),d(X,{key:1},[ie(z(e.additionalMetadata),1)],64)):P("",!0)]),_:3})],2))}});Mp.__docgenInfo={exportName:"default",displayName:"AdditionalMetadata",description:"",tags:{},props:[{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const jr=M({setup(e){return(o,n)=>(l(),d("div",{class:u(a(He).AdditionalNavigationWrapper)},[f(o.$slots,"default")],2))}});jr.__docgenInfo={exportName:"default",displayName:"AdditionalNavigation",description:"",tags:{},slots:[{name:"default"}]};const Wr=M({props:{breadcrumbs:null},setup(e){return(o,n)=>e.breadcrumbs.length>0?(l(),d("div",{key:0,class:u(a(He).BreadcrumbWrapper)},[L(a(zd),{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"])],2)):P("",!0)}});Wr.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const zr=M({props:{pagination:null},setup(e){const o=de(),{useMediaQuery:n}=na(),{isNavigationCollapsed:s}=n();return(i,r)=>e.pagination&&!a(s)?(l(),d("div",{key:0,class:u(a(He).PaginationWrapper)},[L(a(Dn),Qe(kt(e.pagination)),{default:y(()=>[a(Ae)(a(o).default)?f(i.$slots,"default",{key:0}):P("",!0)]),_:3},16)],2)):P("",!0)}});zr.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pagination",required:!1,type:{name:"PaginationProps"}}],slots:[{name:"default"}]};const SP=M({props:{pagination:null,breadcrumbs:null},setup(e){return(o,n)=>(l(),d("div",{class:u(a(He).Navigation)},[L(Wr,{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),L(jr,null,{default:y(()=>[f(o.$slots,"default")]),_:3}),L(zr,{pagination:e.pagination},null,8,["pagination"])],2))}});SP.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"pagination",required:!0,type:{name:"PaginationProps"}},{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}],slots:[{name:"default"}]};const CP="Polaris-Header-Title",AP="Polaris-Header-Title__TitleWithSubtitle",kP="Polaris-Header-Title__SubTitle",LP="Polaris-Header-Title__SubtitleCompact",wP="Polaris-Header-Title__TitleWithMetadataWrapper",PP="Polaris-Header-Title__TitleMetadata";var Pa={Title:CP,TitleWithSubtitle:AP,SubTitle:kP,SubtitleCompact:LP,TitleWithMetadataWrapper:wP,TitleMetadata:PP};const Np=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(e){const o=e,n=m(()=>F(Pa.Title,o.subtitle&&Pa.TitleWithSubtitle)),s=m(()=>F(Pa.SubTitle,o.compactTitle&&Pa.SubtitleCompact)),i=de();return(r,c)=>(l(),d(X,null,[a(Ae)(a(i).default)?(l(),d("div",{key:0,class:u(a(Pa).TitleWithMetadataWrapper)},[e.title?(l(),d("h1",{key:0,class:u(a(n))},z(e.title),3)):P("",!0),k("div",{class:u(a(Pa).TitleMetadata)},[f(r.$slots,"default")],2)],2)):(l(),d(X,{key:1},[e.title?(l(),d("h1",{key:0,class:u(a(n))},z(e.title),3)):P("",!0)],64)),e.subtitle?(l(),d("div",{key:2,class:u(a(s))},[k("p",null,z(e.subtitle),1)],2)):P("",!0)],64))}});Np.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Bp=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:u(a(He).TitleWrapper)},[L(a(Np),{title:e.title,subtitle:e.subtitle,compactTitle:e.compactTitle},{default:y(()=>[f(o.$slots,"default")]),_:3},8,["title","subtitle","compactTitle"])],2))}});Bp.__docgenInfo={exportName:"default",displayName:"PageTitle",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Ar=M({props:{id:null,content:null,accessibilityLabel:null,url:null,external:{type:Boolean},destructive:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},icon:null,primary:{type:Boolean},onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const o=e,n=de(),{useMediaQuery:s}=na(),{isNavigationCollapsed:i}=s(),r=m(()=>o.primary?o.primary:!0),c=m(()=>p(i,o));function p(T,b){let{content:g,accessibilityLabel:h,icon:x}=b;return x==null?N(v({},b),{icon:void 0}):(T?(h=h||g,g=void 0):x=void 0,N(v({},b),{content:g,accessibilityLabel:h,icon:x}))}return(T,b)=>(l(),d("div",{class:u(a(He).PrimaryActionWrapper)},[a(Ae)(a(n).default)?f(T.$slots,"default",{key:0}):(l(),A(a(mt),{key:1,action:a(c),overrides:{primary:a(r)},onAction:b[0]||(b[0]=()=>{e.onAction&&e.onAction()}),onMouseenter:b[1]||(b[1]=()=>{e.onMouseEnter&&e.onMouseEnter()}),onTouchstart:b[2]||(b[2]=()=>{e.onTouchStart&&e.onTouchStart()})},null,8,["action","overrides"]))],2))}});Ar.__docgenInfo={exportName:"default",displayName:"PrimaryAction",description:"",tags:{},slots:[{name:"default"}]};const Ip=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(e){const o=e,n=de(),{useMediaQuery:s}=na(),{isNavigationCollapsed:i}=s(),r=20,c=8,p=m(()=>({breadcrumbs:o.breadcrumbs||[]})),T=m(()=>({title:o.title,subtitle:o.subtitle,compactTitle:o.compactTitle})),b=m(()=>({title:o.title,secondaryActions:o.secondaryActions,actionGroups:o.actionGroups})),g=m(()=>v({},o.primaryAction)),h=m(()=>({additionalMetadata:o.additionalMetadata})),x=m(()=>i&&(!o.breadcrumbs||!o.breadcrumbs.length)&&o.title&&o.title.length<=c),S=m(()=>!i&&!o.pagination&&!o.secondaryActions&&!n.secondaryActions&&o.title!=null&&o.title.length<=r),w=m(()=>(i||S.value)&&g.value||!i&&!S.value&&o.pagination);return(B,I)=>(l(),A(a(Dp),Qe(kt(o)),je({slot2:y(()=>[L(a(Bp),Qe(kt(a(T))),{default:y(()=>[f(B.$slots,"pageTitle")]),_:3},16)]),slot3:y(()=>[L(a(_p),Qe(kt(a(b))),{default:y(()=>[f(B.$slots,"secondaryActions")]),_:3},16),(a(n).primaryAction||o.primaryAction)&&!a(i)&&!a(S)?(l(),A(a(Ar),Qe(ye({key:0},a(g))),{default:y(()=>[f(B.$slots,"primaryAction")]),_:3},16)):P("",!0)]),slot5:y(()=>[L(a(Mp),Qe(kt(a(h))),{default:y(()=>[f(B.$slots,"additionalMetadata")]),_:3},16)]),slot6:y(()=>[L(a(jr),null,{default:y(()=>[f(B.$slots,"additionalNavigation")]),_:3})]),_:2},[a(x)?void 0:{name:"slot1",fn:y(()=>[L(a(Wr),Qe(kt(a(p))),null,16)])},a(w)?{name:"slot4",fn:y(()=>[(a(n).primaryAction||o.primaryAction)&&(a(i)||a(S))?(l(),A(a(Ar),Qe(ye({key:0},a(g))),{default:y(()=>[f(B.$slots,"primaryAction")]),_:3},16)):P("",!0),!a(i)&&!a(S)?(l(),A(a(zr),{key:1,pagination:e.pagination},{default:y(()=>[a(Ae)(a(n).pagination)?f(B.$slots,"pagination",{key:0}):P("",!0)]),_:3},8,["pagination"])):P("",!0)])}:void 0]),1040))}});Ip.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"pagination"},{name:"additionalMetadata"},{name:"additionalNavigation"}]};const Dp=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(e){const o=e,n=34,s=de(),{useMediaQuery:i}=na(),{isNavigationCollapsed:r}=i(),c=m(()=>!o.primaryAction&&s.primaryAction&&!o.pagination&&(o.secondaryActions&&!s.secondaryActions&&!o.secondaryActions.length||s.secondaryActions)&&(!o.actionGroups||!o.actionGroups.length)),p=m(()=>o.breadcrumbs&&o.breadcrumbs.length>0||o.pagination&&!r||s.additionalNavigation),T=m(()=>!s.default||o.secondaryActions&&o.secondaryActions.length>0||I(o.actionGroups)),b=m(()=>F(He.Header,c.value&&He.isSingleRow,o.titleHidden&&He.titleHidden,p.value&&He.hasNavigation,T.value&&He.hasActionMenu,r&&He.mobileView,(!o.breadcrumbs||!o.breadcrumbs.length)&&He.noBreadcrumbs,o.title&&o.title.length<n&&He.mediumTitle,o.title&&o.title.length>n&&He.longTitle)),g=m(()=>Ae(s.slot1)),h=m(()=>Ae(s.slot2)),x=m(()=>Ae(s.slot3)),S=m(()=>Ae(s.slot4)),w=m(()=>Ae(s.slot5)),B=m(()=>Ae(s.slot6));function I(q=[]){return q.length===0?!1:q.some(R=>R.actions.length>0)}return(q,R)=>(l(),d("div",{class:u(a(b))},[a(g)||a(h)||a(x)||a(S)?(l(),d("div",{key:0,class:u(a(He).Row)},[f(q.$slots,"slot1"),f(q.$slots,"slot2"),a(x)||a(S)?(l(),d("div",{key:0,class:u(a(He).RightAlign)},[a(x)&&a(S)?(l(),d("div",{key:0,class:u(a(He).Actions)},[f(q.$slots,"slot3"),f(q.$slots,"slot4")],2)):(l(),d(X,{key:1},[f(q.$slots,"slot3"),f(q.$slots,"slot4")],64))],2)):P("",!0)],2)):P("",!0),a(w)||a(B)?(l(),d("div",{key:1,class:u(a(He).Row)},[k("div",{class:u(a(He).LeftAlign)},[f(q.$slots,"slot5")],2),a(B)?(l(),d("div",{key:0,class:u(a(He).RightAlign)},[f(q.$slots,"slot6")],2)):P("",!0)],2)):P("",!0)],2))}});Dp.__docgenInfo={exportName:"default",displayName:"HeaderWrapper",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryAction"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"slot1"},{name:"slot2"},{name:"slot3"},{name:"slot4"},{name:"slot5"},{name:"slot6"}]};const li=M({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},divider:{type:Boolean}},setup(e){const o=e,n=de(),s=m(()=>o.title||o.primaryAction||n.primaryAction||(o.secondaryActions||n.secondaryActions)&&(o.secondaryActions&&!n.secondaryActions&&o.secondaryActions.length>0||n.secondaryActions&&!o.secondaryActions&&!n.secondaryActions.length)||o.actionGroups&&o.actionGroups.length>0||n.actionGroups||o.breadcrumbs&&o.breadcrumbs.length>0||n.breadcrumbs),i=m(()=>{const h=o,{fullWidth:p,narrowWidth:T,divider:b}=h,g=J(h,["fullWidth","narrowWidth","divider"]);return v({},g)}),r=m(()=>F(hn.Page,o.fullWidth&&hn.fullWidth,o.narrowWidth&&hn.narrowWidth)),c=m(()=>F(!s.value&&hn.Content,o.divider&&s&&hn.divider));return(p,T)=>(l(),d("div",{class:u(a(r))},[a(s)?(l(),A(a(Ip),Qe(ye({key:0},a(i))),je({_:2},[a(Ae)(a(n).pageTitle)?{name:"pageTitle",fn:y(()=>[f(p.$slots,"pageTitle")])}:void 0,a(n).secondaryActions?{name:"secondaryActions",fn:y(()=>[f(p.$slots,"secondaryActions")])}:void 0,a(n).primaryAction?{name:"primaryAction",fn:y(()=>[f(p.$slots,"primaryAction")])}:void 0,a(n).additionalMetadata?{name:"additionalMetadata",fn:y(()=>[f(p.$slots,"additionalMetadata")])}:void 0,a(n).additionalNavigation?{name:"additionalNavigation",fn:y(()=>[f(p.$slots,"additionalNavigation")])}:void 0,a(Ae)(a(n).pagination)?{name:"pagination",fn:y(()=>[f(p.$slots,"pagination")])}:void 0]),1040)):P("",!0),k("div",{class:u(a(c))},[f(p.$slots,"default")],2)],2))}});li.__docgenInfo={exportName:"default",displayName:"Page",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"divider",description:"Displays a divider between the page header and the page content",required:!1,type:{name:"boolean"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"additionalMetadata"},{name:"additionalNavigation"},{name:"pagination"},{name:"default"}]};const _P="Polaris-PageActions";var MP={PageActions:_P};const ri=M({props:{primaryAction:null,secondaryActions:null},setup(e){const o=e,n=m(()=>o.secondaryActions&&o.secondaryActions.length>0?"equalSpacing":"trailing");return(s,i)=>(l(),d("div",{class:u(a(MP).PageActions)},[L(a(We),{distribution:a(n),spacing:"tight"},{default:y(()=>[e.secondaryActions&&e.secondaryActions.length>0?(l(),A(a(nt),{key:0},{default:y(()=>[(l(!0),d(X,null,be(e.secondaryActions,r=>(l(),A(a(mt),{key:r.id,action:r},null,8,["action"]))),128))]),_:1})):P("",!0),e.primaryAction?(l(),A(a(mt),{key:1,action:e.primaryAction,overrides:{primary:!0}},null,8,["action"])):P("",!0)]),_:1},8,["distribution"])],2))}});ri.__docgenInfo={exportName:"default",displayName:"PageActions",description:"",tags:{},props:[{name:"primaryAction",description:"The primary action for the page",required:!1,type:{name:"intersection",elements:[{name:"DisableableAction"},{name:"LoadableAction"}]}},{name:"secondaryActions",description:"The secondary actions for the page",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}]};function NP(){if(document==null||document.activeElement==null)return!1;const{tagName:e}=document.activeElement;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||document.activeElement.hasAttribute("contenteditable")}const BP={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},IP=k("path",{d:"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z"},null,-1),DP=[IP];function $P(e,o){return l(),d("svg",BP,DP)}var pu={render:$P};const FP=["aria-label"],EP={key:2,"aria-live":"polite"},Dn=M({props:{nextKeys:null,previousKeys:null,nextTooltip:null,previousTooltip:null,nextURL:null,previousURL:null,hasNext:{type:Boolean},hasPrevious:{type:Boolean},accessibilityLabel:null,accessibilityLabels:null},setup(e){const o=e,n=ve("lang"),s=C(null),i=de(),r=Ut(),c=o.accessibilityLabel||n.Polaris.Pagination.pagination,p=o.accessibilityLabels&&o.accessibilityLabels.previous||n.Polaris.Pagination.previous,T=o.accessibilityLabels&&o.accessibilityLabels.next||n.Polaris.Pagination.next,b=m(()=>o.previousKeys&&(o.previousURL||r.onPrevious)&&o.hasPrevious),g=m(()=>o.nextKeys&&(o.nextURL||r.onNext)&&o.hasNext),h=()=>{o.previousURL;const w=r.onPrevious;S(w())},x=()=>{o.nextURL;const w=r.onNext;S(w())},S=w=>()=>{NP()||w()};return(w,B)=>(l(),d("nav",{ref_key:"paginationRef",ref:s,"aria-label":a(c)},[a(b)?(l(!0),d(X,{key:0},be(e.previousKeys,I=>(l(),A(a(yt),{key:I,"key-code":I,handler:h},null,8,["key-code"]))),128)):P("",!0),a(g)?(l(!0),d(X,{key:1},be(e.nextKeys,I=>(l(),A(a(yt),{key:I,"key-code":I,handler:x},null,8,["key-code"]))),128)):P("",!0),L(a(nt),{segmented:!a(Ae)(a(i).default)},{default:y(()=>[e.previousTooltip&&e.hasPrevious?(l(),A(a(fa),{key:0,"activator-wrapper":"span",content:e.previousTooltip},{default:y(()=>[L(a(fe),{id:"previousURL",outline:"",icon:a(pu),accessibilityLabel:a(p),url:e.previousURL,disabled:!e.hasPrevious,onClick:B[0]||(B[0]=I=>w.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),A(a(fe),{key:1,id:"previousURL",outline:"",icon:a(pu),accessibilityLabel:a(p),url:e.previousURL,disabled:!e.hasPrevious,onClick:B[1]||(B[1]=I=>w.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])),a(Ae)(a(i).default)?(l(),d("div",EP,[e.hasNext&&e.hasPrevious?(l(),A(a(gt),{key:0},{default:y(()=>[f(w.$slots,"default")]),_:3})):(l(),A(a(gt),{key:1,variation:"subdued"},{default:y(()=>[f(w.$slots,"default")]),_:3}))])):P("",!0),e.nextTooltip&&e.hasNext?(l(),A(a(fa),{key:3,"activator-wrapper":"span",content:e.nextTooltip},{default:y(()=>[L(a(fe),{id:"nextURL",outline:"",icon:a(ur),accessibilityLabel:a(T),url:e.nextURL,onClick:B[2]||(B[2]=I=>w.$emit("next")),disabled:!e.hasNext},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),A(a(fe),{key:4,id:"nextURL",outline:"",icon:a(ur),accessibilityLabel:a(T),url:e.nextURL,onClick:B[3]||(B[3]=I=>w.$emit("next")),disabled:!e.hasNext},null,8,["icon","accessibilityLabel","url","disabled"]))]),_:3},8,["segmented"])],8,FP))}});Dn.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"nextKeys",description:"Keyboard shortcuts for the next button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"previousKeys",description:"Keyboard shortcuts for the previous button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"nextTooltip",description:"Tooltip for the next button",required:!1,type:{name:"string"}},{name:"previousTooltip",description:"Tooltip for the previous button",required:!1,type:{name:"string"}},{name:"nextURL",description:"The URL of the next page",required:!1,type:{name:"string"}},{name:"previousURL",description:"The URL of the previous page",required:!1,type:{name:"string"}},{name:"hasNext",description:"Whether there is a next page to show",required:!1,type:{name:"boolean"}},{name:"hasPrevious",description:"Whether there is a previous page to show",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Accessible label for the pagination",required:!1,type:{name:"string"}},{name:"accessibilityLabels",description:"Accessible labels for the buttons and UnstyledLinks",required:!1,type:{name:"AccessibilityLabels"}}],events:[{name:"previous"},{name:"next"}],slots:[{name:"default"}]};const OP="Polaris-ProgressBar",qP="Polaris-ProgressBar--sizeSmall",RP="Polaris-ProgressBar--sizeMedium",VP="Polaris-ProgressBar--sizeLarge",HP="Polaris-ProgressBar--colorHighlight",UP="Polaris-ProgressBar--colorPrimary",jP="Polaris-ProgressBar--colorSuccess",WP="Polaris-ProgressBar--colorCritical",zP="Polaris-ProgressBar__Indicator",GP="Polaris-ProgressBar__IndicatorAppearActive",XP="Polaris-ProgressBar__IndicatorAppearDone",KP="Polaris-ProgressBar__Progress",YP="Polaris-ProgressBar__Label";var pa={ProgressBar:OP,sizeSmall:qP,sizeMedium:RP,sizeLarge:VP,colorHighlight:HP,colorPrimary:UP,colorSuccess:jP,colorCritical:WP,Indicator:zP,IndicatorAppearActive:GP,IndicatorAppearDone:XP,Progress:KP,Label:YP};const ZP=["value"],ci=M({props:{progress:{default:0},size:{default:"medium"},color:{default:"highlight"},animated:{type:Boolean,default:!0}},setup(e){const o=e,n=ve("lang"),s=m(()=>F(pa.ProgressBar,o.size&&pa[Pe("size",o.size)],o.color&&pa[Pe("color",o.color)])),i=m(()=>o.progress<0?n.Polaris.ProgressBar.negativeWarningMessage.replace("{progress}",o.progress):n.Polaris.ProgressBar.exceedWarningMessage.replace("{progress}",o.progress)),r=(g,h)=>{let x;return g<0?x=0:g>100?x=100:x=g,x},c=m(()=>o.animated?Ps.motion["duration-500"]:Ps.motion["duration-0"]),p=m(()=>({"--pc-progress-bar-duration":c.value,"--pc-progress-bar-percent":T.value/100})),T=m(()=>r(o.progress,i.value)),b=(g,h)=>{setTimeout(()=>{g.classList.add(pa.IndicatorAppearDone),h()},1)};return(g,h)=>(l(),d("div",{class:u(a(s))},[k("progress",{class:u(a(pa).Progress),value:a(T),max:"100"},null,10,ZP),L(wd,{appear:"",duration:parseInt(a(c),10),onEnter:b},{default:y(()=>[k("div",{class:u(a(F)(a(pa).Indicator)),style:Re(a(p))},[k("span",{class:u(a(pa).Label)},z(a(T))+"%",3)],6)]),_:1},8,["duration"])],2))}});ci.__docgenInfo={exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"progress",description:"The progression of certain tasks",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",description:"Size of progressbar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"color",description:"Color of progressbar",tags:{default:[{description:"'highlight'",title:"default"}]},required:!1,type:{name:"Color"},defaultValue:{func:!1,value:"'highlight'"}},{name:"animated",description:"Whether the fill animation is triggered",tags:{default:[{description:"'true'",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]};function QP(e){return Math.sign(e)===1?-Math.abs(e):Math.sign(e)===-1?Math.abs(e):0}const JP="Polaris-RangeSlider-SingleThumb__RangeSlider",e_="Polaris-RangeSlider-SingleThumb",t_="Polaris-RangeSlider-SingleThumb--disabled",a_="Polaris-RangeSlider-SingleThumb__InputWrapper",o_="Polaris-RangeSlider-SingleThumb__Prefix",n_="Polaris-RangeSlider-SingleThumb__Suffix",s_="Polaris-RangeSlider-SingleThumb__Input",i_="Polaris-RangeSlider-SingleThumb--error",l_="Polaris-RangeSlider-SingleThumb__Output",r_="Polaris-RangeSlider-SingleThumb__OutputBubble",c_="Polaris-RangeSlider-SingleThumb__OutputText";var _t={RangeSlider:JP,SingleThumb:e_,disabled:t_,InputWrapper:a_,Prefix:o_,Suffix:n_,Input:s_,error:i_,Output:l_,OutputBubble:r_,OutputText:c_};const u_="Polaris-RangeSlider";var $p={RangeSlider:u_};const d_=["id","name","min","max","step","value","disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby"],p_=["for"],Fp=M({props:{labelAction:null,labelHidden:{type:Boolean},id:null,modelValue:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","focus","blur"],setup(e,{emit:o}){const n=e,s=de(),i=m(()=>Jt(n.modelValue,n.min,n.max)),r=C([]);n.error&&r.value.push(`${n.id}Error`),s["help-text"]&&r.value.push(Zs(n.id));const c=m(()=>r.value.length?r.value.join(" "):void 0),p=m(()=>(i.value-n.min)*100/(n.max-n.min)),T=m(()=>QP((p.value-50)/100)),b=m(()=>({"--pc-range-slider-min":n.min,"--pc-range-slider-max":n.max,"--pc-range-slider-current":i.value,"--pc-range-slider-progress":`${p.value}%`,"--pc-range-slider-output-factor":`${T.value}`})),g=m(()=>F(_t.SingleThumb,$p.RangeSlider,n.error&&_t.error,n.disabled&&_t.disabled)),h=x=>{o("input",parseFloat(x.target.value),n.id)};return(x,S)=>(l(),A(a(jo),{id:e.id,action:e.labelAction,labelHidden:e.labelHidden},je({default:y(()=>[k("div",{class:u(a(g)),style:Re(a(b))},[a(Ae)(a(s).prefix)?(l(),d("div",{key:0,class:u(a(_t).Prefix)},[f(x.$slots,"prefix")],2)):P("",!0),k("div",{class:u(a(_t).InputWrapper)},[k("input",{type:"range",class:u(a(_t).Input),id:e.id,name:e.id,min:e.min,max:e.max,step:e.step,value:a(i),disabled:e.disabled,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":a(i),"aria-invalid":Boolean(e.error),"aria-describedby":a(c),onInput:h,onFocus:S[0]||(S[0]=w=>x.$emit("focus")),onBlur:S[1]||(S[1]=w=>x.$emit("blur"))},null,42,d_),!e.disabled&&e.output?(l(),d("output",{key:0,for:e.id,class:u(a(_t).Output)},[k("div",{class:u(a(_t).OutputBubble)},[k("span",{class:u(a(_t).OutputText)},z(a(i)),3)],2)],10,p_)):P("",!0)],2),a(Ae)(a(s).suffix)?(l(),d("div",{key:1,class:u(a(_t).Suffix)},[f(x.$slots,"suffix")],2)):P("",!0)],6)]),_:2},[a(Ae)(a(s).label)?{name:"label",fn:y(()=>[f(x.$slots,"label")])}:void 0,a(Ae)(a(s)["help-text"])?{name:"help-text",fn:y(()=>[f(x.$slots,"help-text")])}:void 0]),1032,["id","action","labelHidden"]))}});Fp.__docgenInfo={exportName:"default",displayName:"SingleThumb",description:"",tags:{},props:[{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"number"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["number"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};var m_=Pg;function y_(e,o){return m_(e,o)}var g_=y_;const h_="Polaris-RangeSlider-DualThumb__RangeSlider",b_="Polaris-RangeSlider-DualThumb",f_="Polaris-RangeSlider-DualThumb__TrackWrapper",v_="Polaris-RangeSlider-DualThumb--disabled",x_="Polaris-RangeSlider-DualThumb__Track",T_="Polaris-RangeSlider-DualThumb--error",S_="Polaris-RangeSlider-DualThumb__Thumbs",C_="Polaris-RangeSlider-DualThumb__Prefix",A_="Polaris-RangeSlider-DualThumb__Suffix",k_="Polaris-RangeSlider-DualThumb__Output",L_="Polaris-RangeSlider-DualThumb__OutputBubble",w_="Polaris-RangeSlider-DualThumb__OutputText";var Ye={RangeSlider:h_,DualThumb:b_,TrackWrapper:f_,disabled:v_,Track:x_,error:T_,"Track--dashed":"Polaris-RangeSlider-DualThumb--trackDashed",Thumbs:S_,Prefix:C_,Suffix:A_,Output:k_,OutputBubble:L_,OutputText:w_};const P_=["id","className","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],__=["for"],M_=["id","className","aria-disabled","aria-valuemin","aria-valuemax","aria-valuenow","aria-invalid","aria-describedby","aria-labelledby"],N_=["for"],Ep=M({props:{modelValue:null,labelAction:null,labelHidden:{type:Boolean},id:null,min:null,max:null,step:null,output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["input","update:modelValue","focus","blur"],setup(e,{emit:o}){const n=e,s=de(),i=C(ke(n.modelValue,n.min,n.max,n.step)),r=C(0),c=C(0),p=C(null),T=C(null),b=C(null),g=C(null),h=Vt(()=>{if(p.value){const{width:O,left:W}=p.value.getBoundingClientRect(),ue=O-16,Be=W+16/2,Ve=n.max-n.min,ze=n.min/Ve*ue;r.value=ue,c.value=Be-ze}},40,{leading:!0,trailing:!0,maxWait:40}),x=m(()=>n.id),S=m(()=>`${n.id}Upper`),w=C([]);n.error&&w.value.push(`${n.id}Error`);const B=m(()=>w.value.length?w.value.join(" "):void 0),I=m(()=>F(Ye.TrackWrapper,n.error&&Ye.error,n.disabled&&Ye.disabled)),q=m(()=>F(Ye.Thumbs,n.disabled&&Ye.disabled)),R=m(()=>F(Ye.Thumbs,n.disabled&&Ye.disabled)),U=m(()=>n.max-n.min),Q=m(()=>n.min/U.value*r.value),D=m(()=>i.value[0]/U.value*r.value-Q.value),Y=m(()=>i.value[1]/U.value*r.value-Q.value),E=m(()=>F(Ye.Output)),j=m(()=>F(Ye.Output)),se=m(()=>({"--pc-range-slider-progress-lower":`${D.value}px`,"--pc-range-slider-progress-upper":`${Y.value}px`}));xe(()=>{h(),T.value&&T.value.addEventListener("touchstart",Dt,{passive:!1})}),ct(()=>{T.value&&T.value.removeEventListener("touchstart",Dt)});const he=Z=>{Z.button!==0||n.disabled||(ht(te),Z.stopPropagation())},te=Z=>{const O=i.value[1];Ne([rt(Z.clientX),O],"Upper")},Me=Z=>{n.disabled||(ee($),Z.stopPropagation())},$=Z=>{Z.preventDefault();const O=i.value[1];Ne([rt(Z.touches[0].clientX),O],"Upper")},G=Z=>{Z.button!==0||n.disabled||(ht(K),Z.stopPropagation())},K=Z=>{const O=i.value[0];Ne([O,rt(Z.clientX)],"Lower")},le=Z=>{n.disabled||(ee(pe),Z.stopPropagation())},pe=Z=>{Z.preventDefault();const O=i.value[0];Ne([O,rt(Z.touches[0].clientX)],"Lower")},$e=Z=>{if(n.disabled)return;const W={[Ue.ArrowUp]:Se,[Ue.ArrowRight]:Se,[Ue.ArrowDown]:ae,[Ue.ArrowLeft]:ae}[Z.key];W!=null&&(Z.preventDefault(),Z.stopPropagation(),W())},ge=Z=>{if(n.disabled)return;const W={[Ue.ArrowUp]:Te,[Ue.ArrowRight]:Te,[Ue.ArrowDown]:De,[Ue.ArrowLeft]:De}[Z.key];W!=null&&(Z.preventDefault(),Z.stopPropagation(),W())},Se=()=>{Ne([i.value[0]+n.step,i.value[1]],"Upper")},ae=()=>{Ne([i.value[0]-n.step,i.value[1]],"Upper")},Te=()=>{Ne([i.value[0],i.value[1]+n.step],"Lower")},De=()=>{Ne([i.value[0],i.value[1]-n.step],"Lower")},qe=()=>{o("input",i.value,n.id),o("update:modelValue",i.value,n.id)},Ne=(Z,O)=>{const W=ke(Z,n.min,n.max,n.step,O);g_(W,i)||(i.value=W,qe())},lt=Z=>{if(Z.button!==0||n.disabled)return;Z.preventDefault();const O=rt(Z.clientX),W=Math.abs(i.value[0]-O),ue=Math.abs(i.value[1]-O);W<=ue?(Ne([O,i.value[1]],"Upper"),ht(te),b.value&&b.value.focus()):(Ne([i.value[0],O],"Lower"),ht(K),g.value&&g.value.focus())},Dt=Z=>{if(n.disabled)return;Z.preventDefault();const O=rt(Z.touches[0].clientX),W=Math.abs(i.value[0]-O),ue=Math.abs(i.value[1]-O);W<=ue?(Ne([O,i.value[1]],"Upper"),ee($),b.value&&b.value.focus()):(Ne([i.value[0],O],"Lower"),ee(pe),g.value&&g.value.focus())},rt=Z=>{if(p.value){const{min:O,max:W}=n;return(Z-c.value)/r.value*(W-O)}else return 0};function ht(Z){document.addEventListener("mousemove",Z),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",Z)},{once:!0})}function ee(Z){const O=()=>{document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",O),document.removeEventListener("touchcancel",O)};document.addEventListener("touchmove",Z,{passive:!1}),document.addEventListener("touchend",O,{once:!0}),document.addEventListener("touchcancel",O,{once:!0})}function ke(Z,O,W,ue,Be="Upper"){let Ve=Ky(Dc(Z[1])),ze=Yy(Dc(Z[0]));const Aa=Ve-ue,Ic=ze+ue;return Be==="Upper"&&ze>Aa?ze=Aa:Be==="Lower"&&Ve<Ic&&(Ve=Ic),[ze,Ve];function Ky($t){const un=O+ue;return $t<un?un:$t>W?W:$t}function Yy($t){const un=W-ue;return $t<O?O:$t>un?un:$t}function Dc($t){return Math.round($t/ue)*ue}}return(Z,O)=>(l(),d(X,null,[L(a(jo),{id:e.id,error:e.error,action:e.labelAction,labelHidden:e.labelHidden},je({default:y(()=>[k("div",{class:u(a(F)(a(Ye).DualThumb,a($p).RangeSlider))},[a(s).prefix?(l(),d("div",{key:0,class:u(a(Ye).Prefix)},[f(Z.$slots,"prefix")],2)):P("",!0),k("div",{class:u(a(I)),ref_key:"trackWrapper",ref:T,onMousedown:lt},[k("div",{class:u(a(Ye).Track),style:Re(a(se)),ref_key:"track",ref:p},null,6),k("div",{class:u(a(Ye)["Track--dashed"])},null,2),k("div",{id:a(x),className:a(q),style:Re({left:`${a(D)}px`}),ref_key:"thumbLower",ref:b,role:"slider","aria-disabled":e.disabled,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":i.value[0],"aria-invalid":Boolean(e.error),"aria-describedby":a(B),"aria-labelledby":a(xn)(e.id),tabIndex:"0",onFocus:O[0]||(O[0]=W=>Z.$emit("focus")),onBlur:O[1]||(O[1]=W=>Z.$emit("blur")),onKeydown:$e,onMousedown:he,onTouchstart:Me},null,44,P_),!e.disabled&&e.output?(l(),d("output",{key:0,for:a(S),class:u(a(E)),style:Re({left:`${a(D)}px`})},[k("div",{class:u(a(Ye).OutputBubble)},[k("span",{class:u(a(Ye).OutputText)},z(i.value[0]),3)],2)],14,__)):P("",!0),k("div",{id:a(S),className:a(R),style:Re({left:`${a(Y)}px`}),role:"slider",tabIndex:"0",ref_key:"thumbUpper",ref:g,"aria-disabled":e.disabled,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":i.value[1],"aria-invalid":Boolean(e.error),"aria-describedby":a(B),"aria-labelledby":a(xn)(e.id),onFocus:O[2]||(O[2]=W=>Z.$emit("focus")),onBlur:O[3]||(O[3]=W=>Z.$emit("blur")),onKeydown:ge,onMousedown:G,onTouchstart:le},null,44,M_),!e.disabled&&e.output?(l(),d("output",{key:1,for:a(S),class:u(a(j)),style:Re({left:`${a(Y)}px`})},[k("div",{class:u(a(Ye).OutputBubble)},[k("span",{class:u(a(Ye).OutputText)},z(i.value[1]),3)],2)],14,N_)):P("",!0)],34),a(s).suffix?(l(),d("div",{key:1,class:u(a(Ye).Suffix)},[f(Z.$slots,"suffix")],2)):P("",!0)],2)]),_:2},[a(Ae)(a(s).label)?{name:"label",fn:y(()=>[f(Z.$slots,"label")])}:void 0,a(Ae)(a(s)["help-text"])?{name:"help-text",fn:y(()=>[f(Z.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden"]),L(a(Je),{event:"resize",handler:a(h)},null,8,["handler"])],64))}});Ep.__docgenInfo={exportName:"default",displayName:"DualThumb",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"DualValue"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for range input",required:!0,type:{name:"string"}},{name:"min",description:"Minimum possible value for range input",required:!0,type:{name:"number"}},{name:"max",description:"Maximum possible value for range input",required:!0,type:{name:"number"}},{name:"step",description:"Increment value for range input changes",required:!0,type:{name:"number"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"input",type:{names:["DualValue"]}},{name:"update:modelValue",type:{names:["DualValue"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const Ca=M({props:{label:null,labelAction:null,labelHidden:{type:Boolean},modelValue:null,min:{default:0},max:{default:100},step:{default:1},output:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue","focus","blur"],setup(e,{emit:o}){const n=e,s=de(),{useUniqueId:i}=Oe(),r=i("RangeSlider"),c=m(()=>Array.isArray(n.modelValue)),p=m(()=>c.value?n.modelValue[0]:n.modelValue),T=m(()=>c.value?n.modelValue:[n.modelValue,n.modelValue+1]),b=m(()=>{const w=n,{label:h,modelValue:x}=w,S=J(w,["label","modelValue"]);return v({id:r},S)}),g=(h,x)=>{o("change",h,x),o("update:modelValue",h,x)};return(h,x)=>a(c)?(l(),A(a(Ep),ye({key:0,modelValue:a(T),"onUpdate:modelValue":x[0]||(x[0]=S=>Is(T)?T.value=S:null)},a(b),{onInput:g,onFocus:x[1]||(x[1]=S=>o("focus")),onBlur:x[2]||(x[2]=S=>o("blur"))}),je({_:2},[a(s).label||e.label?{name:"label",fn:y(()=>[a(s).label?f(h.$slots,"label",{key:0}):(l(),d(X,{key:1},[ie(z(e.label),1)],64))])}:void 0,a(s)["help-text"]?{name:"help-text",fn:y(()=>[f(h.$slots,"help-text")])}:void 0,a(s).prefix?{name:"prefix",fn:y(()=>[f(h.$slots,"prefix")])}:void 0,a(s).suffix?{name:"suffix",fn:y(()=>[f(h.$slots,"suffix")])}:void 0]),1040,["modelValue"])):(l(),A(a(Fp),ye({key:1,modelValue:a(p),"onUpdate:modelValue":x[3]||(x[3]=S=>Is(p)?p.value=S:null)},a(b),{onInput:g,onFocus:x[4]||(x[4]=S=>o("focus")),onBlur:x[5]||(x[5]=S=>o("blur"))}),je({_:2},[a(s).label||e.label?{name:"label",fn:y(()=>[a(s).label?f(h.$slots,"label",{key:0}):(l(),d(X,{key:1},[ie(z(e.label),1)],64))])}:void 0,a(s)["help-text"]?{name:"help-text",fn:y(()=>[f(h.$slots,"help-text")])}:void 0,a(s).prefix?{name:"prefix",fn:y(()=>[f(h.$slots,"prefix")])}:void 0,a(s).suffix?{name:"suffix",fn:y(()=>[f(h.$slots,"suffix")])}:void 0]),1040,["modelValue"]))}});Ca.__docgenInfo={exportName:"default",displayName:"RangeSlider",description:"",tags:{},props:[{name:"label",description:"Label for the range input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Initial value for range input",required:!0,type:{name:"RangeSliderValue"}},{name:"min",description:"Minimum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",description:"Maximum possible value for range input",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",description:"Increment value for range input changes",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"output",description:"Provide a tooltip while sliding, indicating the current value",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"ErrorType"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["RangeSliderValue"]}},{name:"update:modelValue",type:{names:["RangeSliderValue"]}},{name:"focus"},{name:"blur"}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"}]};const B_="Polaris-Select",I_="Polaris-Select--disabled",D_="Polaris-Select__Content",$_="Polaris-Select__InlineLabel",F_="Polaris-Select__Icon",E_="Polaris-Select__Backdrop",O_="Polaris-Select__SelectedOption",q_="Polaris-Select__Prefix",R_="Polaris-Select__Input",V_="Polaris-Select--error",H_="Polaris-Select--hover";var Mt={Select:B_,disabled:I_,Content:D_,InlineLabel:$_,Icon:F_,Backdrop:E_,SelectedOption:O_,Prefix:q_,Input:R_,error:V_,hover:H_};const U_=["id","name","disabled","value","aria-invalid","aria-describedby","aria-required"],j_=["label"],W_=["value","disabled"],z_=["value","disabled"],G_=["aria-disabled"],Xo=M({props:{options:null,labelAction:null,labelHidden:{type:Boolean},labelInline:{type:Boolean},disabled:{type:Boolean},placeholder:null,id:null,name:null,value:null,error:{type:[null,Boolean]},requiredIndicator:{type:Boolean},modelValue:null},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const n=e,s=de(),{useUniqueId:i}=Oe(),r=[],c=m(()=>i("Select",n.id)),p=m(()=>n.labelInline?!0:n.labelHidden),T=m(()=>F(Mt.Select,n.error&&Mt.error,n.disabled&&Mt.disabled)),b=m(()=>{let D=[];return x.value.forEach(Y=>{if(w(Y)){const E=Y;D=D.concat(E.options)}else D.push(Y)}),D}),g=m(()=>{let D=b.value.find(Y=>n.modelValue===Y.value);return D===void 0&&(D=b.value.find(Y=>!Y.hidden)),D||{value:"",label:""}}),h=m(()=>x.value.map(D=>Q(D))),x=m(()=>{let D=n.options.map(Q);return n.placeholder&&D.unshift({label:n.placeholder,value:"",disabled:!0}),D});s["help-text"]&&r.push(Zs(n.id||"")),n.error&&r.push(`${n.id}Error`);const S=D=>typeof D=="string",w=D=>typeof D=="object"&&"options"in D&&D.options!=null,B=D=>{o("update:modelValue",D.target.value),o("change",D.target.value)},I=D=>w(D)?D.title:D.label,q=D=>w(D)?{label:D.title,value:"",disabled:!0,hidden:!0}:D,R=D=>w(D)?D.options:[];function U(D){return{label:D,value:D}}function Q(D){if(S(D))return U(D);if(w(D)){const{title:Y,options:E}=D;return{title:Y,options:E.map(j=>S(j)?U(j):j)}}return D}return(D,Y)=>(l(),A(a(jo),{id:a(c),error:e.error,action:e.labelAction,"label-hidden":a(p),"required-indicator":e.requiredIndicator},je({default:y(()=>[k("div",{class:u(a(T))},[k("select",{id:a(c),name:e.name,class:u(a(Mt).Input),disabled:e.disabled,value:e.modelValue,"aria-invalid":!!e.error,"aria-describedby":r.join(" ")||void 0,"aria-required":e.requiredIndicator,onFocus:Y[0]||(Y[0]=E=>D.$emit("focus")),onBlur:Y[1]||(Y[1]=E=>D.$emit("blur")),onChange:B},[(l(!0),d(X,null,be(a(h),E=>(l(),d(X,null,[w(E)?(l(),d("optgroup",{label:I(E),key:I(E)},[(l(!0),d(X,null,be(R(E),j=>(l(),d("option",{key:j.value,value:j.value,disabled:j.disabled},z(j.label),9,W_))),128))],8,j_)):(l(),d("option",{key:q(E).value,value:q(E).value,disabled:q(E).disabled},z(q(E).label),9,z_))],64))),256))],42,U_),k("div",{class:u(a(Mt).Content),"aria-hidden":"","aria-disabled":e.disabled},[e.labelInline?(l(),d("span",{key:0,class:u(a(Mt).InlineLabel)},[f(D.$slots,"label")],2)):P("",!0),D.$slots[`prefix-${a(g).id}`]?(l(),d("div",{key:1,class:u(a(Mt).Prefix)},[f(D.$slots,`prefix-${a(g).id}`)],2)):P("",!0),k("span",{class:u(a(Mt).SelectedOption)},[D.$slots[`label-${a(g).id}`]?f(D.$slots,`label-${a(g).id}`,{key:0}):(l(),d(X,{key:1},[ie(z(a(g).label),1)],64))],2),k("span",{class:u(a(Mt).Icon)},[L(a(re),{source:a(Cd)},null,8,["source"])],2)],10,G_),k("div",{class:u(a(Mt).Backdrop)},null,2)],2)]),_:2},[!e.labelInline&&a(s).label?{name:"label",fn:y(()=>[f(D.$slots,"label")])}:void 0,a(s)["help-text"]?{name:"help-text",fn:y(()=>[f(D.$slots,"help-text")])}:void 0]),1032,["id","error","action","label-hidden","required-indicator"]))}});Xo.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",description:"List of options or option groups to choose from",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"labelInline",description:"Show the label to the left of the value, inside the control",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Example text to display as placeholder",required:!1,type:{name:"string"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"error",description:"Display an error state",required:!1,type:{name:"union",elements:[{name:"ErrorType"},{name:"boolean"}]}},{name:"requiredIndicator",description:"Visual required indicator, add an asterisk to label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["TSIndexedAccessType"]}},{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],slots:[{name:"label"},{name:"help-text"},{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const X_="Polaris-SettingAction",K_="Polaris-SettingAction__Setting",Y_="Polaris-SettingAction__Action";var ir={SettingAction:X_,Setting:K_,Action:Y_};const Z_=M({setup(e){return(o,n)=>(l(),d("div",{class:u(a(ir).SettingAction)},[k("div",{class:u(a(ir).Setting)},[f(o.$slots,"setting")],2),k("div",{class:u(a(ir).Action)},[f(o.$slots,"action")],2)],2))}});Z_.__docgenInfo={exportName:"default",displayName:"SettingAction",description:"",tags:{},slots:[{name:"setting"},{name:"action"}]};const Q_="Polaris-SkeletonBodyText";var J_={SkeletonBodyText:Q_};const $n=M({props:{lines:{default:3}},setup(e){return(o,n)=>(l(!0),d(X,null,be(e.lines,s=>(l(),d("div",{key:s,class:u(a(J_).SkeletonBodyText)},null,2))),128))}});$n.__docgenInfo={exportName:"default",displayName:"SkeletonBodyText",description:"",tags:{},props:[{name:"lines",description:"Number of lines to display",tags:{default:[{description:"3",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}]};const eM="Polaris-SkeletonDisplayText__DisplayText",tM="Polaris-SkeletonDisplayText--sizeSmall",aM="Polaris-SkeletonDisplayText--sizeMedium",oM="Polaris-SkeletonDisplayText--sizeLarge",nM="Polaris-SkeletonDisplayText--sizeExtraLarge";var mu={DisplayText:eM,sizeSmall:tM,sizeMedium:aM,sizeLarge:oM,sizeExtraLarge:nM};const Fn=M({props:{size:{default:"medium"}},setup(e){const o=e,n=F(mu.DisplayText,o.size&&mu[Pe("size",o.size)]);return(s,i)=>(l(),d("div",{class:u(a(n))},null,2))}});Fn.__docgenInfo={exportName:"default",displayName:"SkeletonDisplayText",description:"",tags:{},props:[{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}]};const sM="Polaris-SkeletonPage__Page",iM="Polaris-SkeletonPage--fullWidth",lM="Polaris-SkeletonPage--narrowWidth",rM="Polaris-SkeletonPage__Content",cM="Polaris-SkeletonPage__Header",uM="Polaris-SkeletonPage__BreadcrumbAction",dM="Polaris-SkeletonPage__TitleAndPrimaryAction",pM="Polaris-SkeletonPage__TitleWrapper",mM="Polaris-SkeletonPage__Title",yM="Polaris-SkeletonPage__SkeletonTitle",gM="Polaris-SkeletonPage__PrimaryAction",hM="Polaris-SkeletonPage__Actions",bM="Polaris-SkeletonPage__Action";var Ct={Page:sM,fullWidth:iM,narrowWidth:lM,Content:rM,Header:cM,BreadcrumbAction:uM,TitleAndPrimaryAction:dM,TitleWrapper:pM,Title:mM,SkeletonTitle:yM,PrimaryAction:gM,Actions:hM,Action:bM};const fM=["aria-label"],vM=M({props:{title:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},primaryAction:{type:Boolean},breadcrumbs:{type:Boolean}},setup(e){const o=e,n=ve("lang"),s=m(()=>F(Ct.Page,o.fullWidth&&Ct.fullWidth,o.narrowWidth&&Ct.narrowWidth));return(i,r)=>(l(),d("div",{class:u(a(s)),role:"status","aria-label":a(n).Polaris.SkeletonPage.loadingLabel},[k("div",{class:u(a(Ct).Header)},[e.breadcrumbs?(l(),d("div",{key:0,class:u(a(Ct).BreadcrumbAction),style:{width:"60px"}},[L(a($n),{lines:1})],2)):P("",!0),k("div",{class:u(a(Ct).TitleAndPrimaryAction)},[k("div",{class:u(a(Ct).TitleWrapper)},[e.title?(l(),d("h1",{key:0,class:u(a(Ct).Title)},z(e.title),3)):(l(),d("div",{key:1,class:u(a(Ct).SkeletonTitle)},null,2))],2),e.primaryAction?(l(),d("div",{key:0,class:u(a(Ct).PrimaryAction)},[L(a(Fn),{size:"large"})],2)):P("",!0)],2)],2),k("div",{class:u(a(Ct).Content)},[f(i.$slots,"default")],2)],10,fM))}});vM.__docgenInfo={exportName:"default",displayName:"SkeletonPage",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Shows a skeleton over the primary action",required:!1,type:{name:"boolean"}},{name:"breadcrumbs",description:"Shows a skeleton over the breadcrumb",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const xM="Polaris-Subheading";var TM={Subheading:xM};const oa=M({props:{element:{default:"h3"}},setup(e){const o=de(),s=m(()=>{var i,r;return o.default&&(((i=o.default()[0])==null?void 0:i.type.toString())==="Symbol(Text)"||((r=o.default()[0])==null?void 0:r.type.toString())==="Symbol()")}).value?o.default&&o.default()[0].children:void 0;return(i,r)=>(l(),A(Ee(e.element),{"aria-label":a(s),class:u(a(TM).Subheading)},{default:y(()=>[f(i.$slots,"default")]),_:3},8,["aria-label","class"]))}});oa.__docgenInfo={exportName:"default",displayName:"Subheading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the subheading",tags:{default:[{description:"'h3'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"default"}]};function yu(e,o,n,s,i){const r=s.reduce((b,g)=>b+g,0),c=e.map((b,g)=>g),p=[],T=[];if(i>r)p.push(...c);else{p.push(o);let b=s[o];c.forEach(g=>{if(g!==o){const h=s[g];if(b+h>=i-n){T.push(g);return}p.push(g),b+=h}})}return{visibleTabs:p,hiddenTabs:T}}const SM="Polaris-Tabs",CM="Polaris-Tabs__Wrapper",AM="Polaris-Tabs--fitted",kM="Polaris-Tabs__TabContainer",LM="Polaris-Tabs__Title",wM="Polaris-Tabs--fillSpace",PM="Polaris-Tabs__Tab",_M="Polaris-Tabs--titleWithIcon",MM="Polaris-Tabs__Panel",NM="Polaris-Tabs__List",BM="Polaris-Tabs__Item",IM="Polaris-Tabs__DisclosureTab",DM="Polaris-Tabs__DisclosureActivator",$M="Polaris-Tabs__TabMeasurer";var Le={Tabs:SM,Wrapper:CM,fitted:AM,TabContainer:kM,Title:LM,fillSpace:wM,Tab:PM,"Tab-selected":"Polaris-Tabs__Tab--selected",titleWithIcon:_M,Panel:MM,"Panel-hidden":"Polaris-Tabs__Panel--hidden",List:NM,Item:BM,DisclosureTab:IM,"DisclosureTab-visible":"Polaris-Tabs__DisclosureTab--visible",DisclosureActivator:DM,TabMeasurer:$M};const Op=M({props:{id:null,focused:{type:Boolean},panelID:null,url:null,accessibilityLabel:null},setup(e){const o=e,n=C(null),s=F(Le.Item),i=m(()=>({id:o.id,class:s,"aria-controls":o.panelID,"aria-selected":!1,"aria-label":o.accessibilityLabel}));return(r,c)=>(l(),d("li",null,[e.url?(l(),A(a(xt),ye({key:0,ref_key:"focusedNode",ref:n},a(i),{onClick:c[0]||(c[0]=p=>r.$emit("click"))}),{default:y(()=>[f(r.$slots,"default")]),_:3},16)):(l(),d("button",ye({key:1,type:"button",ref_key:"focusedNode",ref:n},a(i),{onClick:c[1]||(c[1]=p=>r.$emit("click"))}),[f(r.$slots,"default")],16))]))}});Op.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"focused",required:!0,type:{name:"boolean"}},{name:"panelID",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const qp=M({props:{focusIndex:null,disclosureTabs:null},emits:["click","keypress"],setup(e,{emit:o}){const n=de(),s=i=>{const{key:r}=i;(r==="ArrowLeft"||r==="ArrowRight")&&(i.preventDefault(),i.stopPropagation())};return(i,r)=>(l(),d("ul",{class:u(a(Le).List),onKeydown:s,onKeyup:r[0]||(r[0]=c=>o("keypress",c))},[(l(!0),d(X,null,be(e.disclosureTabs,(c,p)=>(l(),A(a(Op),{key:c.id,id:c.id,url:c.url,panelID:c.panelID,accessibilityLabel:c.accessibilityLabel,focused:p===e.focusIndex,onClick:T=>o("click",c.id)},{default:y(()=>[a(Ae)(a(n)[c.id])?f(i.$slots,c.id,{key:0}):(l(),d(X,{key:1},[ie(z(c.content),1)],64))]),_:2},1032,["id","url","panelID","accessibilityLabel","focused","onClick"]))),128))],34))}});qp.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"focusIndex",required:!0,type:{name:"number"}},{name:"disclosureTabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}}],events:[{name:"click",type:{names:["string"]}},{name:"keypress",type:{names:["KeyboardEvent"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const FM=["id","aria-labelledby"],kr=M({props:{hidden:{type:Boolean},id:null,tabID:null},setup(e){const o=e,n=m(()=>F(Le.Panel,o.hidden&&Le["Panel--hidden"]));return(s,i)=>(l(),d("div",{class:u(a(n)),id:e.id,role:"tabpanel","aria-labelledby":e.tabID,tabIndex:"-1"},[f(s.$slots,"default")],10,FM))}});kr.__docgenInfo={exportName:"default",displayName:"Panel",description:"",tags:{},props:[{name:"hidden",required:!1,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"tabID",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const EM=["id","tabIndex","aria-selected","aria-controls","aria-label"],Gr=M({props:{id:null,focused:{type:Boolean},siblingTabHasFocus:{type:Boolean},selected:{type:Boolean},panelID:null,url:null,measuring:{type:Boolean},accessibilityLabel:null},emits:["click"],setup(e,{emit:o}){const n=e;de();const s=C(n.selected),i=C(!1),r=C(null),c=m(()=>n.selected&&!n.siblingTabHasFocus&&!n.measuring||n.focused&&!n.measuring?0:-1),p=()=>{o("click",n.id)};xe(()=>{T()}),Fe(()=>[n.focused,n.id,n.measuring,n.panelID,n.selected],()=>{T()});const T=()=>{if(n.measuring)return;(n.focused||document.activeElement&&document.activeElement.id===n.id)&&n.selected&&n.panelID&&!i.value&&(h(n.panelID),i.value=!0),n.selected&&!s.value&&n.panelID?h(n.panelID):n.focused&&r.value&&Sn(r.value),s.value=n.selected},b=m(()=>F(Le.Tab,n.selected&&Le["Tab-selected"])),g=m(()=>F(Le.TabContainer)),h=x=>{const S=document.getElementById(x);S&&S.focus({preventScroll:!0})};return(x,S)=>(l(),d("li",{class:u(a(g)),ref_key:"tabNode",ref:r,role:"presentation"},[e.url?(l(),A(a(xt),{key:0,id:e.id,url:e.url,role:"tab",tabIndex:a(c),class:u(a(b)),"aria-selected":e.selected,"aria-controls":e.panelID,"aria-label":e.accessibilityLabel,onClick:p,onMouseup:a(ft)},{default:y(()=>[k("span",{class:u(a(Le).Title)},[f(x.$slots,"default")],2)]),_:3},8,["id","url","tabIndex","class","aria-selected","aria-controls","aria-label","onMouseup"])):(l(),d("button",{key:1,id:e.id,role:"tab",type:"button",tabIndex:a(c),class:u(a(b)),"aria-selected":e.selected,"aria-controls":e.panelID,"aria-label":e.accessibilityLabel,onClick:p,onMouseup:S[0]||(S[0]=(...w)=>a(ft)&&a(ft)(...w))},[k("span",{class:u(a(Le).Title)},[f(x.$slots,"default")],2)],42,EM))],2))}});Gr.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"focused",required:!1,type:{name:"boolean"}},{name:"siblingTabHasFocus",required:!1,type:{name:"boolean"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"panelID",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"measuring",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["string"]}}],slots:[{name:"default"}]};const Rp=M({props:{tabToFocus:null,siblingTabHasFocus:{type:Boolean},selected:null,tabs:null},emits:["measurement"],setup(e,{emit:o}){const n=e,s=de(),i=C(null),r=C(null),c=()=>{r.value&&cancelAnimationFrame(r.value),r.value=requestAnimationFrame(()=>{if(!i.value)return;const T=i.value.offsetWidth,b=i.value.children,h=Array.from(b).map(S=>Math.ceil(S.getBoundingClientRect().width)),x=h.pop()||0;o("measurement",{containerWidth:T,disclosureWidth:x,hiddenTabWidths:h})})};Fe(()=>n.tabs,()=>{c()});const p=F(Le.Tabs,Le.TabMeasurer);return(T,b)=>(l(),d("div",{class:u(a(p)),ref_key:"containerNode",ref:i},[L(a(Je),{event:"resize",handler:c}),(l(!0),d(X,null,be(e.tabs,(g,h)=>(l(),A(a(Gr),{measuring:"",key:`${h}${g.id}Hidden`,id:`${g.id}Measurer`,siblingTabHasFocus:e.siblingTabHasFocus,focused:h===e.tabToFocus,selected:h===e.selected,url:g.url},{default:y(()=>[a(Ae)(a(s)[g.id])?f(T.$slots,g.id,{key:0}):(l(),d(X,{key:1},[ie(z(g.content),1)],64))]),_:2},1032,["id","siblingTabHasFocus","focused","selected","url"]))),128)),f(T.$slots,"activator")],2))}});Rp.__docgenInfo={exportName:"default",displayName:"TabMeasurer",description:"",tags:{},props:[{name:"tabToFocus",required:!0,type:{name:"number"}},{name:"siblingTabHasFocus",required:!0,type:{name:"boolean"}},{name:"selected",required:!0,type:{name:"number"}},{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}}],events:[{name:"measurement",type:{names:["TabMeasurements"]}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"activator"}]};const OM=["aria-label"],qM=["aria-label"],RM=["aria-label"],VM=["aria-label"],ui=M({props:{selected:null,tabs:null,fitted:{type:Boolean},disclosureText:null},emits:["select"],setup(e,{emit:o}){const n=e,s=ve("lang"),i=de(),r=($,G)=>{const{disclosureWidth:K,tabWidths:le,containerWidth:pe}=G,{visibleTabs:$e,hiddenTabs:ge}=yu($.tabs,$.selected,K,le,pe);b.value=$e,g.value=ge};xe(()=>{r({tabs:n.tabs,selected:n.selected},{disclosureWidth:c.value,tabWidths:T.value,containerWidth:p.value})});const c=C(0),p=C(1/0),T=C([]),b=C([]),g=C([]),h=C(!1),x=C(-1),S=m(()=>b.value.length<n.tabs.length),w=m(()=>!!n.disclosureText),B=m(()=>F(Le.Tabs,n.fitted&&Le.fitted,S.value&&Le.fillSpace)),I=m(()=>F(Le.DisclosureTab,S.value&&Le["DisclosureTab-visible"])),q=m(()=>F(Le.DisclosureActivator,w.value&&Le.Tab)),R=m(()=>F(Le.Title,w.value&&Le.titleWithIcon)),U=m(()=>[...b.value].sort((G,K)=>G-K)),Q=m(()=>g.value.map($=>n.tabs[$])),D=$=>{const G=$.key,K=h.value?b.value.concat(g.value):[...b.value];let le=K.indexOf(x.value);G==="ArrowRight"&&(le+=1,le===K.length&&(le=0)),G==="ArrowLeft"&&(le===-1||le===0?le=K.length-1:le-=1),x.value=K[le]},Y=$=>{const G=$.target;if(G.classList.contains(Le.Tab)||G.classList.contains(Le.Item)){let le=-1;n.tabs.some((pe,$e)=>pe.id===G.id?(le=$e,!0):!1),x.value=le;return}if(G.classList.contains(Le.DisclosureActivator))return;if(!$.relatedTarget){x.value=n.selected;return}const K=$.relatedTarget;K instanceof HTMLElement&&!K.classList.contains(Le.Tab)&&!K.classList.contains(Le.Item)&&!K.classList.contains(Le.DisclosureActivator)&&(x.value=n.selected)},E=$=>{if($.relatedTarget==null){x.value=-1;return}const G=$.relatedTarget;G instanceof HTMLElement&&!G.classList.contains(Le.Tab)&&!G.classList.contains(Le.Item)&&(x.value=-1)},j=()=>{h.value=!h.value},se=()=>{h.value=!1},he=$=>{const G=yu(n.tabs,n.selected,$.disclosureWidth,$.hiddenTabWidths,$.containerWidth);x.value=x.value===-1?-1:n.selected,b.value=G.visibleTabs,g.value=G.hiddenTabs,c.value=$.disclosureWidth,p.value=$.containerWidth,T.value=$.hiddenTabWidths},te=$=>{const G=n.tabs.findIndex(K=>K.id===$);G!==-1&&o("select",G)};function Me($){const{key:G}=$;(G==="ArrowLeft"||G==="ArrowRight")&&($.preventDefault(),$.stopPropagation())}return($,G)=>(l(),d("div",null,[k("div",{class:u(a(Le).Wrapper)},[L(a(Rp),{tabToFocus:x.value,selected:e.selected,tabs:e.tabs,siblingTabHasFocus:x.value>-1,onMeasurement:he},je({activator:y(()=>[e.disclosureText?(l(),d("div",{key:0,class:u(a(Le).TabContainer)},[k("button",{type:"button",class:u(a(q)),"aria-label":a(s).Polaris.Tabs.toggleTabsLabel,onClick:j},[k("span",{class:u(a(R))},[a(w)?(l(),d(X,{key:0},[ie(z(e.disclosureText),1),L(a(re),{source:a(ya),color:"subdued"},null,8,["source"])],64)):(l(),A(a(re),{key:1,source:a(_a),color:"subdued"},null,8,["source"]))],2)],10,OM)],2)):(l(),d("button",{key:1,type:"button",class:u(a(q)),"aria-label":a(s).Polaris.Tabs.toggleTabsLabel,onClick:j},[k("span",{class:u(a(R))},[a(w)?(l(),d(X,{key:0},[ie(z(e.disclosureText),1),L(a(re),{source:a(ya),color:"subdued"},null,8,["source"])],64)):(l(),A(a(re),{key:1,source:a(_a),color:"subdued"},null,8,["source"]))],2)],10,qM))]),_:2},[be(e.tabs,(K,le)=>({name:"{#[tab.id]}",fn:y(()=>[a(Ae)(a(i)[K.id])?f($.$slots,K.id,{key:0}):(l(),d(X,{key:1},[ie(z(K.content),1)],64))])}))]),1032,["tabToFocus","selected","tabs","siblingTabHasFocus"]),k("ul",{role:"tablist",class:u(a(B)),onFocus:Y,onBlur:E,onKeydown:Me,onKeyup:D},[(l(!0),d(X,null,be(a(U),(K,le)=>(l(),A(a(Gr),{key:`${le}-${e.tabs[K].id}`,id:e.tabs[K].id,siblingTabHasFocus:x.value>-1,focused:le===x.value,selected:le===e.selected,panelID:a(Ae)(a(i).default)?e.tabs[K].panelID||`${e.tabs[K].id}-panel`:void 0,accessibilityLabel:e.tabs[K].accessibilityLabel,url:e.tabs[K].url,onClick:te},{default:y(()=>[a(Ae)(a(i)[e.tabs[K].id])?f($.$slots,e.tabs[K].id,{key:0}):(l(),d(X,{key:1},[ie(z(e.tabs[K].content),1)],64))]),_:2},1032,["id","siblingTabHasFocus","focused","selected","panelID","accessibilityLabel","url"]))),128)),k("li",{class:u(a(I)),role:"presentation"},[L(a(tt),{preferredPosition:"below",active:a(S)&&h.value,onClose:se,autofocusTarget:"first-node"},{activator:y(()=>[e.disclosureText?(l(),d("div",{key:0,class:u(a(Le).TabContainer)},[k("button",{type:"button",class:u(a(q)),"aria-label":a(s).Polaris.Tabs.toggleTabsLabel,onClick:j},[k("span",{class:u(a(R))},[a(w)?(l(),d(X,{key:0},[ie(z(e.disclosureText),1),L(a(re),{source:a(ya),color:"subdued"},null,8,["source"])],64)):(l(),A(a(re),{key:1,source:a(_a),color:"subdued"},null,8,["source"]))],2)],10,RM)],2)):(l(),d("button",{key:1,type:"button",class:u(a(q)),"aria-label":a(s).Polaris.Tabs.toggleTabsLabel,onClick:j},[k("span",{class:u(a(R))},[a(w)?(l(),d(X,{key:0},[ie(z(e.disclosureText),1),L(a(re),{source:a(ya),color:"subdued"},null,8,["source"])],64)):(l(),A(a(re),{key:1,source:a(_a),color:"subdued"},null,8,["source"]))],2)],10,VM))]),content:y(()=>[L(a(qp),{focusIndex:g.value.indexOf(x.value),disclosureTabs:a(Q),onClick:te,onKeypress:D},null,8,["focusIndex","disclosureTabs"])]),_:1},8,["active"])],2)],34)],2),a(Ae)(a(i).default)?(l(!0),d(X,{key:0},be(e.tabs,(K,le)=>(l(),d(X,{key:K.id},[e.selected===le?(l(),A(a(kr),{key:0,id:K.panelID||`${K.id}-panel`,tabID:K.id},{default:y(()=>[f($.$slots,"default")]),_:2},1032,["id","tabID"])):P("",!0),L(a(kr),{id:K.panelID||`${K.id}-panel`,tabID:K.id,hidden:""},null,8,["id","tabID"])],64))),128)):P("",!0)]))}});ui.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"selected",description:"Index of selected tab",required:!0,type:{name:"number"}},{name:"tabs",description:"List of tabs",required:!0,type:{name:"Array",elements:[{name:"TabDescriptor"}]}},{name:"fitted",description:"Fit tabs to container",required:!1,type:{name:"boolean"}},{name:"disclosureText",description:"Text to replace disclosures horizontal dots",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["number"]},description:"Callback when tab is selected"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const En=M({props:{content:null,duration:null,error:{type:Boolean},action:null},setup(e){const o=e,n=Ut(),{useUniqueId:s}=Oe(),{useFrame:i}=Wo(),{showToast:r,hideToast:c}=i(),p=s("Toast");return xe(()=>{r(v(v({id:p},o),n))}),ct(()=>{c({id:p})}),(T,b)=>null}});En.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}]};const HM=["id","className","aria-label"],Vp=M({props:{id:null,active:{type:Boolean},preventInteraction:null,preferredPosition:{default:"below"},activator:null,accessibilityLabel:null},setup(e){const o=e,n=ve("lang"),s=C({}),i=m(()=>o.accessibilityLabel?n.Polaris.TooltipOverlay.accessibilityLabel.replace("{label}",o.accessibilityLabel):void 0),r=c=>{s.value={minHeight:`${c.desiredHeight}px`}};return(c,p)=>e.active?(l(),A(a(Dr),{key:0,layout:"tooltip",active:e.active,activator:e.activator,preferredPosition:e.preferredPosition,preventInteraction:e.preventInteraction,onChangeContentStyles:r},{default:y(()=>[k("div",{id:e.id,role:"tooltip",className:a(ks).Content,style:Re(s.value),"aria-label":a(i)},[f(c.$slots,"default")],12,HM)]),_:3},8,["active","activator","preferredPosition","preventInteraction"])):P("",!0)}});Vp.__docgenInfo={exportName:"default",displayName:"TooltipOverlay",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const UM={inheritAttrs:!1},fa=M(N(v({},UM),{props:{active:{type:Boolean,default:!1},content:null,dismissOnMouseOut:null,preferredPosition:{default:"below"},activatorWrapper:{default:"span"},accessibilityLabel:null},setup(e){const o=e,n=de(),s=C(o.active),i=C(!1),r=C(null),c=C(null),{useUniqueId:p,uniqueIdRef:T}=Oe(),b=p("TooltipContent");Fe(()=>T.value,()=>{const q=(c.value?Mr(c.value):null)||c.value;!q||(q.tabIndex=0,q.setAttribute("aria-describedby",b),q.setAttribute("data-polaris-tooltip-activator","true"))}),Fe(()=>c.value,()=>{const I=c.value;I==null?r.value=null:I.firstElementChild instanceof HTMLElement&&(r.value=I.firstElementChild)});const g=()=>{s.value=!1},h=()=>{s.value=!0},x=I=>{I.key===Ue.Escape&&g()};function S(){i.value=!0,h()}function w(){i.value=!1,g()}function B(){!i.value&&S()}return(I,q)=>(l(),A(Ee(e.activatorWrapper),{ref_key:"activatorContainer",ref:c,onFocus:h,onBlur:g,onMouseleave:w,onMouseover:B,onClick:q[0]||(q[0]=R=>R.stopPropagation()),onKeyup:x},{default:y(()=>[f(I.$slots,"default"),r.value?(l(),A(a(An),{key:0,idPrefix:"tooltip"},{default:y(()=>[L(a(Vp),{id:a(b),preferredPosition:e.preferredPosition,preventInteraction:e.dismissOnMouseOut,activator:r.value,active:s.value,accessibilityLabel:e.accessibilityLabel},{default:y(()=>[a(n).content?f(I.$slots,"content",{key:0}):(l(),d(X,{key:1},[ie(z(e.content),1)],64))]),_:3},8,["id","preferredPosition","preventInteraction","activator","active","accessibilityLabel"])]),_:3})):P("",!0)]),_:3},512))}}));fa.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"active",description:"Toggle whether the tooltip is visible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"content",description:"The content to display within the tooltip",required:!1,type:{name:"string"}},{name:"dismissOnMouseOut",description:"Dismiss tooltip when not interacting with its children",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",description:"The direction the tooltip tries to display",tags:{default:[{description:"'below'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activatorWrapper",description:"The element type to wrap the activator in",tags:{default:[{description:"'span'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"content"}]};const jM="Polaris-Tag",WM="Polaris-Tag--disabled",zM="Polaris-Tag--clickable",GM="Polaris-Tag--removable",XM="Polaris-Tag--linkable",KM="Polaris-Tag__TagText",YM="Polaris-Tag__Button",ZM="Polaris-Tag--segmented",QM="Polaris-Tag__Link",JM="Polaris-Tag__LinkText";var bt={Tag:jM,disabled:WM,clickable:zM,removable:GM,linkable:XM,TagText:KM,Button:YM,segmented:ZM,Link:QM,LinkText:JM};const eN=["disabled"],tN=["href"],aN=["title"],oN=["title"],nN=["aria-label","disabled"],On=M({props:{disabled:{type:Boolean},accessibilityLabel:null,url:null},setup(e){const o=e,n=Ut(),s=de(),i=m(()=>Boolean(n.onClick)),r=m(()=>Boolean(n.onRemove)),c=m(()=>i.value&&o.url),p=m(()=>F(bt.Tag,o.disabled&&bt.disabled,i.value&&bt.clickable,r.value&&bt.removable,o.url&&!o.disabled&&bt.linkable,c.value&&bt.segmented)),T=m(()=>F(bt.Link,c.value&&bt.segmented)),b=m(()=>F(bt.Button,c.value&&bt.segmented)),g=m(()=>o.accessibilityLabel?o.accessibilityLabel:s.default&&s.default()[0].children?s.default()[0].children:""),h=m(()=>`Remove ${g.value||""}`),x=ft;return(S,w)=>a(i)?(l(),d("button",{key:0,type:"button",disabled:e.disabled,class:u(a(p))},[f(S.$slots,"default")],10,eN)):(l(),d("span",{key:1,class:u(a(p))},[e.url&&!e.disabled?(l(),d("a",{key:0,class:u(a(T)),href:e.url},[k("span",{title:a(g),class:u(a(bt).LinkText)},[f(S.$slots,"default")],10,aN)],10,tN)):(l(),d("span",{key:1,title:a(g),class:u(a(bt).TagText)},[f(S.$slots,"default")],10,oN)),a(r)?(l(),d("button",{key:2,type:"button","aria-label":a(h),class:u(a(b)),disabled:e.disabled,onClick:w[0]||(w[0]=B=>S.$emit("remove")),onMouseup:w[1]||(w[1]=(...B)=>a(x)&&a(x)(...B))},[L(a(re),{source:a(Pd)},null,8,["source"])],42,nN)):P("",!0)],2))}});On.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"disabled",description:"Disables the tag",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"A string to use when tag has more than textual content",required:!1,type:{name:"string"}},{name:"url",description:"Url to navigate to when tag is clicked or keypressed.",required:!1,type:{name:"string"}}],events:[{name:"remove"}],slots:[{name:"default"}]};const sN="Polaris-Thumbnail",iN="Polaris-Thumbnail--sizeSmall",lN="Polaris-Thumbnail--sizeMedium",rN="Polaris-Thumbnail--sizeLarge",cN="Polaris-Thumbnail--transparent";var lr={Thumbnail:sN,sizeSmall:iN,sizeMedium:lN,sizeLarge:rN,transparent:cN};const qn=M({props:{size:{default:"medium"},source:null,alt:null,transparent:{type:Boolean}},setup(e){const o=e,n=m(()=>{const s=Pe("size",o.size);return F(lr.Thumbnail,s&&lr[s],o.transparent&&lr.transparent)});return(s,i)=>(l(),d("span",{class:u(a(n))},[typeof e.source=="string"?(l(),A(a(Vo),{key:0,alt:e.alt,source:e.source},null,8,["alt","source"])):(l(),A(a(re),{key:1,accessibilityLabel:e.alt,source:e.source},null,8,["accessibilityLabel","source"]))],2))}});qn.__docgenInfo={exportName:"default",displayName:"Thumbnail",description:"",tags:{},props:[{name:"size",description:"Size of thumbnail",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"source",description:"URL for the image",required:!0,type:{name:"union",elements:[{name:"string"},{name:"IconSource"}]}},{name:"alt",description:"Alt text for the thumbnail image",required:!0,type:{name:"string"}},{name:"transparent",description:"Transparent background",required:!1,type:{name:"boolean"}}]};const uN={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},dN=k("path",{d:"M19 11H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14H1a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"},null,-1),pN=[dN];function mN(e,o){return l(),d("svg",uN,pN)}var yN={render:mN};const gN="Polaris-TopBar",hN="Polaris-TopBar__LogoDisplayControl",bN="Polaris-TopBar__LogoDisplayContainer",fN="Polaris-TopBar__LogoContainer",vN="Polaris-TopBar__Logo",xN="Polaris-TopBar__LogoLink",TN="Polaris-TopBar__ContextControl",SN="Polaris-TopBar__NavigationIcon",CN="Polaris-TopBar--focused",AN="Polaris-TopBar__IconWrapper",kN="Polaris-TopBar__Contents",LN="Polaris-TopBar__SearchField",wN="Polaris-TopBar__SecondaryMenu";var dt={TopBar:gN,LogoDisplayControl:hN,LogoDisplayContainer:bN,LogoContainer:fN,Logo:vN,LogoLink:xN,ContextControl:TN,NavigationIcon:SN,focused:CN,IconWrapper:AN,Contents:kN,SearchField:LN,SecondaryMenu:wN};const PN="Polaris-TopBar-Menu__ActivatorWrapper",_N="Polaris-TopBar-Menu__Activator",MN="Polaris-TopBar-Menu__Section";var gu={ActivatorWrapper:PN,Activator:_N,Section:MN};const NN="Polaris-Menu-Message__Section";var BN={Section:NN};const Hp=M({props:{title:null,description:null,action:null,link:null,badge:null},setup(e){return(o,n)=>(l(),d("div",{class:u(a(BN).Section)},[L(a(vn),null,{default:y(()=>[L(a(We),{vertical:"",spacing:"tight"},{default:y(()=>[L(a(wt),null,{default:y(()=>[L(a(aa),null,{default:y(()=>[ie(z(e.title),1),e.badge?(l(),A(a(at),{key:0,status:e.badge.status},{default:y(()=>[ie(z(e.badge.content),1)]),_:1},8,["status"])):P("",!0)]),_:1}),k("p",null,z(e.description),1)]),_:1}),L(a(zo),{url:e.link.to},{default:y(()=>[ie(z(e.link.content),1)]),_:1},8,["url"]),L(a(fe),{plain:"",onClick:e.action.onClick},{default:y(()=>[ie(z(e.action.content),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],2))}});Hp.__docgenInfo={exportName:"default",displayName:"Message",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}},{name:"action",required:!0,type:{name:"{ onClick(): void; content: string }"}},{name:"link",required:!0,type:{name:"{ to: string; content: string }"}},{name:"badge",required:!1,type:{name:"{ content: string; status: BadgeProps['status'] }"}}]};const IN=["aria-label"],DN={inheritAttrs:!1},di=M(N(v({},DN),{props:{actions:null,message:null,open:{type:Boolean},colorScheme:null,accessibilityLabel:null},setup(e){const o=e,n=m(()=>!!o.message),s=o.message&&o.message.badge&&{content:o.message.badge.content,status:o.message.badge.status};return(i,r)=>(l(),A(a(tt),{fixed:"",active:e.open,"full-height":a(n),preferredAlignment:"right","color-scheme":e.colorScheme,onClose:r[2]||(r[2]=c=>i.$emit("close"))},{activator:y(()=>[k("div",{class:u(a(gu).ActivatorWrapper)},[k("button",{type:"button",class:u(a(gu).Activator),"aria-label":e.accessibilityLabel,onClick:r[0]||(r[0]=c=>i.$emit("open"))},[f(i.$slots,"activatorContent")],10,IN)],2)]),content:y(()=>[L(a(et),{sections:e.actions,onActionAnyItem:r[1]||(r[1]=c=>i.$emit("close"))},null,8,["sections"]),e.message&&e.message.action&&e.message.link?(l(),A(a(Hp),{key:0,title:e.message.title,description:e.message.description,action:{onClick:e.message.action.onClick,content:e.message.action.content},link:{to:e.message.link.to,content:e.message.link.content},badge:a(s)},null,8,["title","description","action","link","badge"])):P("",!0)]),_:3},8,["active","full-height","color-scheme"]))}}));di.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"TSIndexedAccessType"}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the menu",required:!1,type:{name:"MessageProps"}},{name:"open",description:"A boolean property indicating whether the menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}}],events:[{name:"close"},{name:"open"}],slots:[{name:"activatorContent"}]};const $N="Polaris-TopBar-Search",FN="Polaris-TopBar-Search__SearchContent",EN="Polaris-TopBar-Search--visible",ON="Polaris-TopBar-Search__Results";var As={Search:$N,SearchContent:FN,visible:EN,Results:ON};const qN="Polaris-TopBar-SearchDismissOverlay",RN="Polaris-TopBar-SearchDismissOverlay--visible";var hu={SearchDismissOverlay:qN,visible:RN};const Up=M({props:{visible:{type:Boolean}},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=C(null),i=m(()=>F(hu.SearchDismissOverlay,n.visible&&hu.visible)),r=c=>{c.target===s.value&&o("dismiss")};return(c,p)=>(l(),d(X,null,[e.visible?(l(),A(a(Br),{key:0})):P("",!0),k("div",ye(c.$attrs,{ref_key:"nodeRef",ref:s,class:a(i),onClick:r}),null,16)],64))}});Up.__docgenInfo={exportName:"default",displayName:"SearchDismissOverlay",description:"",tags:{},props:[{name:"visible",description:"Determines whether the overlay should be visible",required:!0,type:{name:"boolean"}}],events:[{name:"dismiss"}]};const jp=M({props:{visible:{type:Boolean},overlayVisible:{type:Boolean,default:!1}},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=de(),i=m(()=>F(As.Search,n.visible&&As.visible));return(r,c)=>(l(),d(X,null,[e.visible&&a(s).default?(l(),A(a(Up),{key:0,visible:e.overlayVisible,onDismiss:c[0]||(c[0]=p=>r.$emit("dismiss"))},null,8,["visible"])):P("",!0),a(s).default?(l(),d("div",{key:1,class:u(a(i))},[L(a(Ho),null,{default:y(()=>[k("div",{class:u(a(As).SearchContent)},[k("div",{class:u(a(As).Results)},[f(r.$slots,"default")],2)],2)]),_:3})],2)):P("",!0)],64))}});jp.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"visible",description:"Toggles whether or not the search is visible",required:!1,type:{name:"boolean"}},{name:"overlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const VN="Polaris-TopBar-SearchField",HN="Polaris-TopBar-SearchField--focused",UN="Polaris-TopBar-SearchField__Input",jN="Polaris-TopBar-SearchField__Backdrop",WN="Polaris-TopBar-SearchField__BackdropShowFocusBorder",zN="Polaris-TopBar-SearchField__Icon",GN="Polaris-TopBar-SearchField__Clear";var ma={SearchField:VN,focused:HN,Input:UN,Backdrop:jN,BackdropShowFocusBorder:WN,Icon:zN,Clear:GN};const XN=["for"],KN=["id","placeholder"],YN=["aria-label"],Xr=M({props:{modelValue:null,placeholder:null,focused:{type:Boolean},active:{type:Boolean},showFocusBorder:{type:Boolean}},emits:["change","focus","blur","cancel","update:modelValue"],setup(e,{emit:o}){const n=e,s=ve("lang"),i=C(!1),r=C(null),{useUniqueId:c}=Oe(),p=c("SearchField"),T=I=>{const q=I.target;o("change",q.value),o("update:modelValue",q.value)},b=()=>{o("focus")},g=()=>{o("blur")},h=()=>{o("cancel"),o("update:modelValue",""),o("change",""),r.value&&r.value.focus()},x=()=>{i.value=!1},S=()=>{b(),i.value=!0},w=m(()=>F(ma.SearchField,(n.focused||n.active||i.value)&&ma.focused)),B=m(()=>F(ma.Backdrop,n.showFocusBorder&&ma.BackdropShowFocusBorder));return xe(()=>{!r.value||(n.focused?r.value.focus():r.value.blur())}),(I,q)=>(l(),d("div",{class:u(a(w)),onFocus:b,onBlur:g},[L(a(ot),null,{default:y(()=>[k("label",{for:a(p)},z(a(s).Polaris.TopBar.SearchField.search),9,XN)]),_:1}),_g(k("input",{id:a(p),class:u(a(ma).Input),placeholder:e.placeholder,ref_key:"inputRef",ref:r,type:"search",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off","onUpdate:modelValue":q[0]||(q[0]=R=>Is(modelValue)?modelValue.value=R:null),onInput:T,onKeydown:q[1]||(q[1]=cr(kd(()=>!1,["prevent"]),["enter"]))},null,42,KN),[[Mg,e.modelValue]]),k("span",{class:u(a(ma).Icon)},[L(a(re),{source:a(Tn)},null,8,["source"])],2),e.modelValue.length>0?(l(),d("button",{key:0,type:"button","aria-label":a(s).Polaris.TopBar.SearchField.clearButtonLabel,class:u(a(ma).Clear),onClick:h,onBlur:x,onFocus:S},[L(a(re),{source:a(Jd)},null,8,["source"])],42,YN)):P("",!0),k("div",{class:u(a(B))},null,2)],34))}});Xr.__docgenInfo={exportName:"default",displayName:"SearchField",description:"",tags:{},props:[{name:"modelValue",description:"Initial value for the input",required:!0,type:{name:"string"}},{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"active",description:"Force a state where search is active but the text field component is not focused",required:!1,type:{name:"boolean"}},{name:"showFocusBorder",description:"Show a border when the search field is focused",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["string"]}},{name:"focus"},{name:"blur"},{name:"cancel"},{name:"update:modelValue",type:{names:["string"]}}]};const ZN="Polaris-TopBar-UserMenu__Details",QN="Polaris-TopBar-UserMenu__Name",JN="Polaris-TopBar-UserMenu__Detail";var rr={Details:ZN,Name:QN,Detail:JN};const Kr=M({props:{actions:null,message:null,name:null,detail:null,accessibilityLabel:null,initials:null,avatar:null,open:{type:Boolean},colorScheme:null},setup(e){const n=C(!!e.message);return(s,i)=>(l(),A(a(di),{open:e.open,actions:e.actions,message:e.message,"color-scheme":e.colorScheme,accessibilityLabel:e.accessibilityLabel,onOpen:i[0]||(i[0]=r=>s.$emit("toggle")),onClose:i[1]||(i[1]=r=>s.$emit("toggle"))},{activatorContent:y(()=>[L(a(Tp),{active:n.value},{default:y(()=>[L(a(Cn),{size:"small",source:e.avatar,initials:e.initials?e.initials.replace(" ",""):void 0},null,8,["source","initials"])]),_:1},8,["active"]),k("span",{class:u(a(rr).Details)},[k("p",{class:u(a(rr).Name)},z(e.name),3),k("p",{class:u(a(rr).Detail)},z(e.detail),3)],2)]),_:1},8,["open","actions","message","color-scheme","accessibilityLabel"]))}});Kr.__docgenInfo={exportName:"default",displayName:"UserMenu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"Array",elements:[{name:"{items: IconableAction[]}"}]}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"name",description:"A string detailing the merchant\u2019s full name to be displayed in the user menu",required:!0,type:{name:"string"}},{name:"detail",description:"A string allowing further detail on the merchant\u2019s name displayed in the user menu",required:!1,type:{name:"string"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}},{name:"initials",description:"The merchant\u2019s initials, rendered in place of an avatar image when not provided",required:!0,type:{name:"TSIndexedAccessType"}},{name:"avatar",description:"An avatar image representing the merchant",required:!1,type:{name:"TSIndexedAccessType"}},{name:"open",description:"A boolean property indicating whether the user menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the user menu",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"toggle"}]};const eB=["aria-label"],Rn=M({props:{showNavigationToggle:{type:Boolean},searchResultsVisible:{type:Boolean},searchResultsOverlayVisible:{type:Boolean,default:!1}},emits:["search-result-dismiss","navigation-toggle"],setup(e,{emit:o}){const n=e,s=ve("lang"),{useFrame:i}=Wo(),{logo:r}=i(),c=de(),p=C(!1),T=()=>{p.value=!0},b=()=>{p.value=!1},g=m(()=>F(dt.NavigationIcon,p.value&&dt.focused)),h=m(()=>F(dt.LogoContainer,n.showNavigationToggle||c.searchField?dt.LogoDisplayControl:dt.LogoDisplayContainer)),x=Hr(r,104);return(S,w)=>(l(),d("div",{class:u(a(dt).TopBar)},[e.showNavigationToggle?(l(),d("button",{key:0,type:"button",class:u(a(g)),onClick:w[0]||(w[0]=B=>S.$emit("navigation-toggle")),onFocus:T,onBlur:b,"aria-label":a(s).Polaris.TopBar.toggleMenuLabel},[k("div",{class:u(a(dt).IconWrapper)},[L(a(re),{source:a(yN)},null,8,["source"])],2)],42,eB)):P("",!0),a(c).contextControl?(l(),d("div",{key:1,class:u(a(dt).ContextControl)},[f(S.$slots,"contextControl")],2)):a(r)?(l(),d("div",{key:2,class:u(a(h))},[L(a(xt),{url:a(r).url||"",class:u(a(dt).LogoLink),style:Re({width:a(x)})},{default:y(()=>[L(a(Vo),{source:a(r).topBarSource||"",alt:a(r).accessibilityLabel||"",class:u(a(dt).Logo),style:Re({width:a(x)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):P("",!0),k("div",{class:u(a(dt).Contents)},[k("div",{class:u(a(dt).SearchField)},[a(c).searchField?(l(),d(X,{key:0},[f(S.$slots,"searchField"),L(a(jp),{visible:e.searchResultsVisible,overlayVisible:e.searchResultsOverlayVisible,onDismiss:w[1]||(w[1]=B=>S.$emit("search-result-dismiss"))},{default:y(()=>[f(S.$slots,"searchResults")]),_:3},8,["visible","overlayVisible"])],64)):P("",!0)],2),k("div",{class:u(a(dt).SecondaryMenu)},[f(S.$slots,"secondaryMenu")],2),f(S.$slots,"userMenu")],2)],2))}});Rn.__docgenInfo={exportName:"default",displayName:"TopBar",description:"",tags:{},props:[{name:"showNavigationToggle",description:"Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button",required:!1,type:{name:"boolean"}},{name:"searchResultsVisible",description:"A boolean property indicating whether search results are currently visible.",required:!1,type:{name:"boolean"}},{name:"searchResultsOverlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"navigation-toggle"},{name:"search-result-dismiss"}],slots:[{name:"contextControl"},{name:"searchField"},{name:"searchResults"},{name:"secondaryMenu"},{name:"userMenu"}]};const tB=[e=>({components:{AppProvider:zs,story:e},template:"<AppProvider><story /></AppProvider>"})],aB={viewMode:"docs",docs:{transformSource:e=>{const o=/<template>(.*)<\/template>/g;return`${e.replace(o,"$1")}`},source:{state:"open"}},controls:{matchers:{color:/(background|color|backgroundColor)$/i,date:/Date$/},sort:"alpha"},options:{showPanel:!0,storySort:{order:["Get Started","Polaris Icons","FAQs","Components",["Actions","Structure","Forms","Images and icons","Feedback indicators","Titles and text","Behavior","Lists and tables","Navigation","Overlays"]]}}};var oB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:tB,parameters:aB});const nB={},sB="wrapper";function Wp(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(sB,N(v(v({},nB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h1",null,"FAQs"),t("hr",null),t("br",null),t("h4",null,t("strong",{parentName:"h4"},"Issue: Missing declaration types")),t("p",null,"At this moment, you should add the property ",t("inlineCode",{parentName:"p"},"skipLibCheck: true")," to ",t("strong",{parentName:"p"},"tsconfig.json"),` file.
This will skip the check for missing declaration types.
We will try to fix this issue in the future.`))}Wp.isMDXComponent=!0;const zp=()=>{throw new Error("Docs-only story")};zp.parameters={docsOnly:!0};const Ma={title:"FAQs",parameters:{isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},iB={};Ma.parameters=Ma.parameters||{};Ma.parameters.docs=N(v({},Ma.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:iB,mdxComponentAnnotations:Ma},t(Wp,null))});var lB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:zp,default:Ma});const rB={},cB="wrapper";function Gp(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(cB,N(v(v({},rB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("img",{src:"https://github.com/qikify/polaris-vue/blob/master/public/images/banner.jpg?raw=true",alt:"Shopify Polaris Vue",width:"1000",height:"376"}),t("br",null),t("br",null),t("h1",null,"Get Started"),t("br",null),t("p",null,"Polaris Vue by Qikify is a component library for ",t("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," based on ",t("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris style guide"),". We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library)."),t("p",null,"Polaris Vue by qikify only supports ",t("strong",{parentName:"p"},"Vue 3.0+"),"."),t("p",null,t("strong",{parentName:"p"},"Follow Polaris React version:")," ",t("a",{parentName:"p",href:"https://github.com/Shopify/polaris/releases/tag/v9.4.0"},"9.4.0")," - Migrated date: ",t("em",{parentName:"p"},"Apr 9th, 2022"),"."),t("br",null),t("br",null),t("h2",null,"Installation"),t("p",null,"Using NPM"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`npm install @qikify/polaris-vue
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
`)),t("br",null),t("h2",null,"Issues & Contributions"),t("p",null,"Polaris Vue by qikify is an open source project and we are very happy to accept community contributions."),t("p",null,"If you notice any bugs, please create issues under ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/issues"},"Issues"),"."),t("br",null),t("br",null),t("h2",null,"License"),t("p",null,"Code released under the  ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/LICENSE"},"MIT License"),"."),t("p",null,"Copyright (c) 2021 Qikify"))}Gp.isMDXComponent=!0;const Xp=()=>{throw new Error("Docs-only story")};Xp.parameters={docsOnly:!0};const Na={title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},uB={};Na.parameters=Na.parameters||{};Na.parameters.docs=N(v({},Na.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:uB,mdxComponentAnnotations:Na},t(Gp,null))});var dB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Xp,default:Na});const pB={},mB="wrapper";function Kp(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(mB,N(v(v({},pB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h1",null,"Polaris Icons"),t("p",null,"You can use all icons from ",t("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"Shopify Polaris Icons")," Library or any SVG files."),t("p",null,t("inlineCode",{parentName:"p"},"vite-svg-loader")," & ",t("inlineCode",{parentName:"p"},"polaris-icons")," are already included in Polaris Vue package."),t("p",null,"So you don't have to install any additional packages."),t("br",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Setup:")),t("p",null,"You have to use ",t("inlineCode",{parentName:"p"},"vite-svg-loader")," in your project. See ",t("a",{parentName:"p",href:"?path=/docs/components-images-and-icons-icon"},"Icon Component")," for more details."),t("p",null,"Config in ",t("inlineCode",{parentName:"p"},"vite.config.ts")," if you are using ",t("inlineCode",{parentName:"p"},"vite")," to compile your project:"),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// vite.config.js
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
`)))}Kp.isMDXComponent=!0;const Yp=()=>{throw new Error("Docs-only story")};Yp.parameters={docsOnly:!0};const Ba={title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},yB={};Ba.parameters=Ba.parameters||{};Ba.parameters.docs=N(v({},Ba.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:yB,mdxComponentAnnotations:Ba},t(Kp,null))});var gB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:Yp,default:Ba}),bu=Object.freeze,hB=Object.defineProperty,Zp=(e,o)=>bu(hB(e,"raw",{value:bu(o||e.slice())})),fu,vu;const pi=e=>({components:{ActionList:et},setup(){return{args:e}},template:`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>`}),Ko=(e,{argTypes:o})=>({components:{ActionList:et,Button:fe,Popover:tt,Icon:re},data(){return{active:!1,iconTickSmallMinor:_r,iconChevronRightMinor:ur,inAPopoverItems:[{content:"Import file",onAction:this.handleImportedAction},{content:"Export file",onAction:this.handleExportedAction}],iconsOrImagesItems:[{content:"Import file",image:"https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"},{content:"Export file",icon:Ds}],iconAndSuffixItems:[{active:!0,content:"Import file",icon:dr,suffixId:"import"},{content:"Export file",icon:Ds}],suffixAndPrefixItems:[{content:"Go here",prefixId:"here",suffixId:"here"},{content:"Or there",suffixId:"there"}]}},methods:{toggle(){this.active=!this.active},handleImportedAction(){alert("Imported!")},handleExportedAction(){alert("Exported!")}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center'}">
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
  </div>`});Ko.storyName="Items";Ko.parameters={docs:{source:{code:_(fu||(fu=Zp([`
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
        `])))}}};const Yo=(e,{argTypes:o})=>({components:{ActionList:et,Button:fe,Popover:tt,Icon:re},data(){return{sections:[{title:"File options",items:[{content:"Import file",icon:dr},{content:"Export file",icon:Ds}]},{title:"Bulk actions",items:[{content:"Edit",icon:Ng},{content:"Delete",icon:Vc}]}],destructiveItemSections:[{title:"File options",items:[{active:!0,content:"Import file",icon:dr},{content:"Export file",icon:Ds},{destructive:!0,content:"Delete file",icon:Vc}]}],helpTextSections:[{items:[{content:"Blog posts",helpText:"Manage your blog articles"},{content:"Blogs",helpText:"Manage blogs published to your Online Store"}]}]}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '120px', justifyContent: 'center'}">
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
  </div>`});Yo.storyName="Sections";Yo.parameters={docs:{source:{code:_(vu||(vu=Zp([`
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
        `])))}}};const bB={Template:pi,itemExamples:Ko,sectionExamples:Yo},fB="wrapper";function Qp(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(fB,N(v(v({},bB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Actions / Action List",component:et,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"ActionList"),t("p",null,"Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let merchants select from a list of options."),t("p",null,"For Icon usages, use the ",t("a",{parentName:"p",href:"/docs/components-images-and-icons-icon--icon"},"Icon component.")),t("br",null),t("br",null),t("h3",null,"Items"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Ko,height:"250px",inline:!1,name:"_itemExamples_",mdxType:"Story"})),t("h3",null,"Sections"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Yo,height:"300px",inline:!1,name:"_sectionExamples_",mdxType:"Story"})),t("h3",null,"ActionList"),t(V,{mdxType:"Canvas"},t(H,{name:"Action List",height:"40px",args:{default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}},parameters:{docs:{source:{code:_`
            <ActionList v-bind="props"></ActionList>
          `}}},mdxType:"Story"},pi.bind({}))),t(ce,{story:"Action List",mdxType:"ArgsTable"}))}Qp.isMDXComponent=!0;const vB=Ko,xB=Yo,mi=pi.bind({});mi.storyName="Action List";mi.args={default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}};mi.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <ActionList v-bind="props"></ActionList>
          `}}};const Ia={title:"Components / Actions / Action List",component:et,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_itemExamples_","_sectionExamples_","actionList"]},TB={_itemExamples_:"_itemExamples_",_sectionExamples_:"_sectionExamples_","Action List":"actionList"};Ia.parameters=Ia.parameters||{};Ia.parameters.docs=N(v({},Ia.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:TB,mdxComponentAnnotations:Ia},t(Qp,null))});var SB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:pi,itemExamples:Ko,sectionExamples:Yo,_itemExamples_:vB,_sectionExamples_:xB,actionList:mi,default:Ia});const CB={},AB="wrapper";function Jp(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(AB,N(v(v({},CB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Structure / App Provider",component:zs,mdxType:"Meta"}),t("h1",null,"AppProvider"),t("p",null,"App provider is a required component that enables sharing global settings throughout the hierarchy of your application."),t("br",null),t("h2",null,"Best practices"),t("p",null,"The AppProvider component is ",t("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  <div>
  </div>
</AppProvider>
</template>

<script><\/script>
`)))}Jp.isMDXComponent=!0;const em=()=>{throw new Error("Docs-only story")};em.parameters={docsOnly:!0};const Da={title:"Components / Structure / App Provider",component:zs,includeStories:["__page"]},kB={};Da.parameters=Da.parameters||{};Da.parameters.docs=N(v({},Da.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:kB,mdxComponentAnnotations:Da},t(Jp,null))});var LB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:em,default:Da});const yi=(e,{argTypes:o})=>({components:{Avatar:Cn},setup(){return{args:e}},template:'<Avatar v-bind="args"/>'}),wB={Template:yi},PB="wrapper";function tm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(PB,N(v(v({},wB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Images and Icons / Avatar",component:Cn,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Avatar"),t("p",null,"Avatars are used to show a thumbnail representation of an individual or business in the interface."),t(V,{mdxType:"Canvas"},t(H,{name:"Avatar",height:"60px",parameters:{docs:{source:{code:_`
            <Avatar v-bind="props"/>
          `}}},mdxType:"Story"},yi.bind({}))),t(ce,{story:"Avatar",mdxType:"ArgsTable"}))}tm.isMDXComponent=!0;const Yr=yi.bind({});Yr.storyName="Avatar";Yr.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <Avatar v-bind="props"/>
          `}}};const $a={title:"Components / Images and Icons / Avatar",component:Cn,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["avatar"]},_B={Avatar:"avatar"};$a.parameters=$a.parameters||{};$a.parameters.docs=N(v({},$a.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:_B,mdxComponentAnnotations:$a},t(tm,null))});var MB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:yi,avatar:Yr,default:$a});const gi=e=>({components:{Badge:at},setup(){return{args:e}},template:'<Badge v-bind="args">Fulfilled</Badge>'}),Zo=(e,{argTypes:o})=>({components:{Badge:at},template:_`<div>
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
  </div>`});Zo.storyName="Variants";Zo.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const NB={Template:gi,Variants:Zo},BB="wrapper";function am(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(BB,N(v(v({},NB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Images and icons / Badge",component:at,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Badge"),t("p",null,"Badges are used to inform merchants of the status of an object or of an action that's been taken."),t(V,{mdxType:"Canvas"},t(H,{story:Zo,height:"65px",name:"_Variants_",mdxType:"Story"})),t(V,{mdxType:"Canvas"},t(H,{name:"Badge",height:"30px",parameters:{docs:{source:{code:_`
          `}}},mdxType:"Story"},gi.bind({}))),t(ce,{story:"Badge",mdxType:"ArgsTable"}))}am.isMDXComponent=!0;const IB=Zo,Zr=gi.bind({});Zr.storyName="Badge";Zr.parameters={storySource:{source:`args => ({
  components: {
    Badge
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Badge v-bind="args">Fulfilled</Badge>\`
})`},docs:{source:{code:_`
          `}}};const Fa={title:"Components / Images and icons / Badge",component:at,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Variants_","badge"]},DB={_Variants_:"_Variants_",Badge:"badge"};Fa.parameters=Fa.parameters||{};Fa.parameters.docs=N(v({},Fa.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:DB,mdxComponentAnnotations:Fa},t(am,null))});var $B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:gi,Variants:Zo,_Variants_:IB,badge:Zr,default:Fa}),xu=Object.freeze,FB=Object.defineProperty,Qr=(e,o)=>xu(FB(e,"raw",{value:xu(o||e.slice())})),Tu,Su,Cu;const hi=(e,{argTypes:o})=>({components:{Button:fe},setup(){return{args:e}},template:'<Button v-bind="args">Add Product</Button>'}),Qo=(e,{argTypes:o})=>({components:{Button:fe},template:` <div style="margin: 0 auto; width: 97%">
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
  </div>`});Qo.storyName="Variants";Qo.parameters={docs:{source:{code:_`
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
        `}}};const Jo=(e,{argTypes:o})=>({components:{Button:fe},data(){return{expanded:!1}},computed:{disclosure(){return this.expanded?"up":"down"},disclosureText(){return this.expanded?"Show less":"Show more"}},template:`<div>
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
  </div>`});Jo.storyName="Disclosure";Jo.parameters={docs:{source:{code:_(Tu||(Tu=Qr([`
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
        `])))}}};const en=(e,{argTypes:o})=>({components:{Button:fe},data(){return{connectedDisclosure:{accessibilityLabel:"Other save actions",actions:[{content:"Save as draft"}]}}},template:'<Button :connectedDisclosure="connectedDisclosure" :primary="true"> Save </Button>'});en.storyName="Split Button";en.parameters={docs:{source:{code:_(Su||(Su=Qr([`
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
        `])))}}};const tn=(e,{argTypes:o})=>({components:{ButtonGroup:nt,Button:fe},data(){return{isFirstButtonActive:!0}},methods:{handleFirstButtonActive(){this.isFirstButtonActive||(this.isFirstButtonActive=!0)},handleSecondButtonActive(){!this.isFirstButtonActive||(this.isFirstButtonActive=!1)}},template:`<ButtonGroup :segmented="true">
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
  </ButtonGroup>`});tn.storyName="Pressed Button";tn.parameters={docs:{source:{code:_(Cu||(Cu=Qr([`
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
        `])))}}};const EB={Template:hi,Variants:Qo,Disclosure:Jo,SplitButton:en,PressedButton:tn},OB="wrapper";function om(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(OB,N(v(v({},EB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Actions / Button",component:fe,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Button"),t("p",null,"Buttons are used primarily for actions, such as \u201CAdd\u201D, \u201CClose\u201D, \u201CCancel\u201D, or \u201CSave\u201D. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as \u201Cview shipping settings\u201D."),t("p",null,"For navigational actions that appear within or directly following a sentence, use the ",t("a",{parentName:"p",href:"/docs/components-navigation-link--link"},"link component.")),t("p",null,"For connectedDisclosure actions, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--actionlist"},"ActionList component.")),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"button")," element in html."),t("br",null),t("br",null),t("h3",null,"Button Variants"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Qo,height:"280px",name:"_Variants_",mdxType:"Story"})),t("h3",null,"Pressed Button"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:tn,height:"60px",name:"_PressedButton_",mdxType:"Story"})),t("h3",null,"Disclosure Button"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Jo,height:"140px",name:"_Disclosure_",mdxType:"Story"})),t("h3",null,"Split Button"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:en,height:"120px",inline:!1,name:"_SplitButton_",mdxType:"Story"})),t("h3",null,"Example"),t(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Button",height:"40px",parameters:{docs:{source:{code:_`
            <Button>Add Product</Button>
          `}}},mdxType:"Story"},hi.bind({}))),t(ce,{story:"Button",mdxType:"ArgsTable"}))}om.isMDXComponent=!0;const qB=Qo,RB=tn,VB=Jo,HB=en,Jr=hi.bind({});Jr.storyName="Button";Jr.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <Button>Add Product</Button>
          `}}};const Ea={title:"Components / Actions / Button",component:fe,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_Variants_","_PressedButton_","_Disclosure_","_SplitButton_","button"]},UB={_Variants_:"_Variants_",_PressedButton_:"_PressedButton_",_Disclosure_:"_Disclosure_",_SplitButton_:"_SplitButton_",Button:"button"};Ea.parameters=Ea.parameters||{};Ea.parameters.docs=N(v({},Ea.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:UB,mdxComponentAnnotations:Ea},t(om,null))});var jB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:hi,Variants:Qo,Disclosure:Jo,SplitButton:en,PressedButton:tn,_Variants_:qB,_PressedButton_:RB,_Disclosure_:VB,_SplitButton_:HB,button:Jr,default:Ea});const bi=(e,{argTypes:o})=>({components:{ButtonGroup:nt,Button:fe},setup(){return{args:e}},template:`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>`}),an=(e,{argTypes:o})=>({components:{ButtonGroup:nt,Button:fe},template:`<ButtonGroup segmented>
    <Button> Bold </Button>
    <Button> Italic </Button>
    <Button> Underline </Button>
  </ButtonGroup>`});an.storyName="With segmented buttons";an.parameters={docs:{source:{code:_`
        <ButtonGroup segmented>
          <Button> Bold </Button>
          <Button> Italic </Button>
          <Button> Underline </Button>
        </ButtonGroup>
      `}}};const WB={Template:bi,SegmentedButtons:an},zB="wrapper";function nm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(zB,N(v(v({},WB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Actions / Button Group",component:nt,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"ButtonGroup"),t("p",null,"Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing."),t("br",null),t("h3",null,"With segmented buttons"),t(V,{mdxType:"Canvas"},t(H,{story:an,height:"65px",name:"_SegmentedButtons_",mdxType:"Story"})),t("h3",null,"Example"),t(V,{mdxType:"Canvas"},t(H,{name:"Button Group",height:"60px",parameters:{docs:{source:{code:_`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}},mdxType:"Story"},bi.bind({}))),t(ce,{story:"Button Group",mdxType:"ArgsTable"}))}nm.isMDXComponent=!0;const GB=an,ec=bi.bind({});ec.storyName="Button Group";ec.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}};const Oa={title:"Components / Actions / Button Group",component:nt,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SegmentedButtons_","buttonGroup"]},XB={_SegmentedButtons_:"_SegmentedButtons_","Button Group":"buttonGroup"};Oa.parameters=Oa.parameters||{};Oa.parameters.docs=N(v({},Oa.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:XB,mdxComponentAnnotations:Oa},t(nm,null))});var KB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:bi,SegmentedButtons:an,_SegmentedButtons_:GB,buttonGroup:ec,default:Oa});const fi=e=>({components:{List:Go,ListItem:si,Caption:ta},setup(){return{args:e}},template:`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>`}),YB={Template:fi},ZB="wrapper";function sm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(ZB,N(v(v({},YB),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Titles and text  / Caption",component:ta,mdxType:"Meta"}),t("h1",null,"Caption"),t("p",null,`Caption text size is smaller than the recommended size for general reading.
On web, it should be used only in a graph or as a timestamp for a list item.
On Android and iOS, it can also be used as help text or as other kinds of secondary text for list items.`),t(V,{mdxType:"Canvas"},t(H,{name:"Caption",height:"100px",parameters:{docs:{source:{code:_`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}},mdxType:"Story"},fi.bind({}))))}sm.isMDXComponent=!0;const tc=fi.bind({});tc.storyName="Caption";tc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}};const qa={title:"Components / Titles and text  / Caption",component:ta,includeStories:["caption"]},QB={Caption:"caption"};qa.parameters=qa.parameters||{};qa.parameters.docs=N(v({},qa.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:QB,mdxComponentAnnotations:qa},t(sm,null))});var JB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:fi,caption:tc,default:qa});const vi=e=>({components:{Card:it},setup(){return{args:e}},template:`
    <Card sectioned :actions="[{content: 'Add variant'}]">
      <template #title>Variants</template>
      <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
    </Card>
  `}),xi=e=>({components:{Card:it,CardSection:kn,CardHeader:Xs,CardSubsection:Yd,Icon:re,Subheading:oa,Popover:tt,Button:fe,ActionList:et,Stack:We,Subheading:oa,List:Go,ListItem:si},setup(){const o=C(!1);return{args:e,OrdersMinor:_d,addAccountActive:o,toggleClick:()=>{console.log("clicked")},toggleAccountActive:()=>{o.value=!o.value}}},template:`
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
  `}),Ti=e=>({components:{Card:it,CardHeader:Xs,Stack:We,ButtonGroup:nt,Button:fe,CardSection:kn,ActionList:et,Popover:tt},setup(){const o=C(!1);return{args:e,addAccountActive:o}},template:`
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
  `}),eI={TemplateSimple:vi,TemplateFull:xi,Template:Ti},tI="wrapper";function im(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(tI,N(v(v({},eI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Structure / Card",component:it,argTypes:{propTitle:{name:"title",description:"Title content for the card.",table:{category:"props",type:{summary:"string"}}},title:{description:"Title content for the card. This will overwrite the `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Card"),t("p",null,"Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done."),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Simple Card")),t(V,{mdxType:"Canvas"},t(H,{name:"Card - Simple",height:"150px",parameters:{docs:{source:{state:"close",code:_`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}},mdxType:"Story"},vi.bind({}))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Card with all of its elements")),t(V,{mdxType:"Canvas"},t(H,{name:"Card - Full",height:"700px",inline:!1,parameters:{docs:{source:{state:"close",code:_`
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
          `}}},mdxType:"Story"},xi.bind({}))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Example")),t(V,{mdxType:"Canvas"},t(H,{name:"Card",height:"360px",inline:!1,parameters:{docs:{source:{state:"close",code:_`
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
            </Card>`}}},mdxType:"Story"},Ti.bind({}))),t(ce,{story:"Card",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"CardSection Props")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title?"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"The title of the section.")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"subdued?"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"A less prominent card.")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"flush?"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null})),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"fullWidth?"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null})),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hideOnPrint?"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Allow the card to be hidden when printing.")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions?"),t("td",{parentName:"tr",align:null},"ComplexAction[]"),t("td",{parentName:"tr",align:null})))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Slots"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"#title"),t("td",{parentName:"tr",align:null},"The title of the section. This will overwrite the prop ",t("inlineCode",{parentName:"td"},"title")," if existed.")))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"ComplexAction types")),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`/** A unique identifier for the action */
id?: string;
/** Content the action displays */
content?: string;
/** Visually hidden text for screen readers */
accessibilityLabel?: string;
/** A destination to link to, rendered in the action */
url?: string;
/** Forces url to open in a new tab */
external?: boolean;
/** Whether or not the action is disabled */
disabled?: boolean;
/** Destructive action */
destructive?: boolean;
/** Source of the icon */
icon?: IconSource;
/** Should action be displayed as an outlined button */
outline?: boolean;
/** Should a spinner be displayed */
loading?: boolean;
/** Should action be displayed as a plain link */
plain?: boolean;
/** Callback when an action takes place */
onAction?(): void;
/** Callback when mouse enter */
onMouseEnter?(): void;
/** Callback when element is touched */
onTouchStart?(): void;
`)))}im.isMDXComponent=!0;const ac=vi.bind({});ac.storyName="Card - Simple";ac.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}};const oc=xi.bind({});oc.storyName="Card - Full";oc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
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
          `}}};const nc=Ti.bind({});nc.storyName="Card";nc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
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
            </Card>`}}};const Ra={title:"Components / Structure / Card",component:it,argTypes:{propTitle:{name:"title",description:"Title content for the card.",table:{category:"props",type:{summary:"string"}}},title:{description:"Title content for the card. This will overwrite the `title` prop.",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["cardSimple","cardFull","card"]},aI={"Card - Simple":"cardSimple","Card - Full":"cardFull",Card:"card"};Ra.parameters=Ra.parameters||{};Ra.parameters.docs=N(v({},Ra.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:aI,mdxComponentAnnotations:Ra},t(im,null))});var oI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",TemplateSimple:vi,TemplateFull:xi,Template:Ti,cardSimple:ac,cardFull:oc,card:nc,default:Ra});const Vn=e=>({components:{Checkbox:xa},setup(){return{args:e}},template:`
  <div>
    <Checkbox v-bind="args" v-model="isChecked">
      <template #label>Checkbox label</template>
      <template #help-text>Basic help text</template>
    </Checkbox>
    <p style="margin-top: 30px">Checked: {{ isChecked }} </p>
  </div>`,data(){return{isChecked:!1}}});Vn.parameters={docs:{source:{code:_`
        <div>
          <Checkbox v-model="isChecked">
            <template #label>Checkbox label</template>
            <template #help-text>Basic help text</template>
          </Checkbox>
          <p>Checked: {{ isChecked }} </p>
        </div>
      `}}};const nI={Template:Vn},sI="wrapper";function lm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(sI,N(v(v({},nI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Checkbox",component:xa,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Checkbox"),t("p",null,`Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
They may also be used as a way to have merchants indicate they agree to specific terms and services.`),t(V,{mdxType:"Canvas"},t(H,{story:Vn,name:"Checkbox",mdxType:"Story"})),t(ce,{story:"Checkbox",mdxType:"ArgsTable"}))}lm.isMDXComponent=!0;const rm=Vn;rm.storyName="Checkbox";const Va={title:"Components / Forms / Checkbox",component:xa,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Template_"]},iI={Checkbox:"_Template_"};Va.parameters=Va.parameters||{};Va.parameters.docs=N(v({},Va.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:iI,mdxComponentAnnotations:Va},t(lm,null))});var lI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vn,_Template_:rm,default:Va});const Hn=e=>({components:{ChoiceList:Nt},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Hn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Un=e=>({components:{ChoiceList:Nt},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Un.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const jn=e=>({components:{ChoiceList:Nt},template:`
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
  `,data(){return{value:["shipping"],choices:[{label:"Use the shipping address as the billing address by default",helpText:"Reduces the number of fields required to check out. The billing address can still be edited.",value:"shipping"},{label:"Require a confirmation step",helpText:"Customers must review their order details before purchasing.",value:"confirmation"}]}}});jn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Wn=(e,{argTypes:o})=>({components:{ChoiceList:Nt},template:`
  <div>
    <ChoiceList
      name="singleChild"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:"<p>This is child content of Minimum quantity option</p>"}]}}});Wn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const zn=(e,{argTypes:o})=>({components:{ChoiceList:Nt},template:`
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
  `,data(){return{selected:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:""}]}},methods:{handleChange(){this.choices[2].renderChildren=this.selected==="minimum_quantity"?"<p>This is child content of Minimum quantity option</p>":""}}});zn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Gn=e=>({components:{ChoiceList:Nt},setup(){return{args:e}},template:`
  <ChoiceList
    v-bind="args"
    v-model="selected"
    :choices="options"
  >
    Example choice list
  </ChoiceList>
  `,data(){return{selected:"hidden",options:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Gn.parameters={docs:{source:{code:_`
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
      `}}};const rI={singleChoiceList:Hn,errorSingleChoiceList:Un,multiChoiceList:jn,renderChildChoiceList:Wn,renderChildWithConditional:zn,Example:Gn},cI="wrapper";function cm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(cI,N(v(v({},rI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Choice List",component:Nt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Choice list"),t("p",null,`A choice list lets you create a list of grouped radio buttons or checkboxes.
Use this component if you need to group together a related list of interactive choices.`),t("br",null),t("br",null),t("h3",null,"Single choice list"),t("p",null,"Allows merchants to select one option from a list."),t("ul",null,t("li",{parentName:"ul"},"Make sure all options are an either/or choice.")),t(V,{mdxType:"Canvas"},t(H,{story:Hn,name:"Single choice list",mdxType:"Story"})),t("h3",null,"Single choice list with error"),t("p",null,"Allows for accessible error handling by connecting the error message to the field with the error."),t(V,{mdxType:"Canvas"},t(H,{story:Un,name:"Single choice list with error",mdxType:"Story"})),t("h3",null,"Multi-choice list"),t("p",null,"Allows merchants to select multiple options from a list."),t("ul",null,t("li",{parentName:"ul"},"Avoid options that are an either/or choice.")),t(V,{mdxType:"Canvas"},t(H,{story:jn,name:"Multi-choice list",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (always rendered)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content will always be rendered. Works for both single-choice and multi-choice list.`),t(V,{mdxType:"Canvas"},t(H,{story:Wn,name:"Single-choice or multi-choice list with children content (always rendered)",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (rendered only when selected)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list.`),t(V,{mdxType:"Canvas"},t(H,{story:zn,name:"Single-choice or multi-choice list with children content (rendered only when selected)",mdxType:"Story"})),t("h3",null,"Example"),t(V,{mdxType:"Canvas"},t(H,{story:Gn,name:"Example",height:"160px",mdxType:"Story"})),t(ce,{story:"Example",mdxType:"ArgsTable"}))}cm.isMDXComponent=!0;const um=Hn;um.storyName="Single choice list";const dm=Un;dm.storyName="Single choice list with error";const pm=jn;pm.storyName="Multi-choice list";const mm=Wn;mm.storyName="Single-choice or multi-choice list with children content (always rendered)";const ym=zn;ym.storyName="Single-choice or multi-choice list with children content (rendered only when selected)";const gm=Gn;gm.storyName="Example";const Ha={title:"Components / Forms / Choice List",component:Nt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_singleChoiceList_","_errorSingleChoiceList_","_multiChoiceList_","_renderChildChoiceList_","_renderChildWithConditional_","_Example_"]},uI={"Single choice list":"_singleChoiceList_","Single choice list with error":"_errorSingleChoiceList_","Multi-choice list":"_multiChoiceList_","Single-choice or multi-choice list with children content (always rendered)":"_renderChildChoiceList_","Single-choice or multi-choice list with children content (rendered only when selected)":"_renderChildWithConditional_",Example:"_Example_"};Ha.parameters=Ha.parameters||{};Ha.parameters.docs=N(v({},Ha.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:uI,mdxComponentAnnotations:Ha},t(cm,null))});var dI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",singleChoiceList:Hn,errorSingleChoiceList:Un,multiChoiceList:jn,renderChildChoiceList:Wn,renderChildWithConditional:zn,Example:Gn,_singleChoiceList_:um,_errorSingleChoiceList_:dm,_multiChoiceList_:pm,_renderChildChoiceList_:mm,_renderChildWithConditional_:ym,_Example_:gm,default:Ha}),Au=Object.freeze,pI=Object.defineProperty,hm=(e,o)=>Au(pI(e,"raw",{value:Au(o||e.slice())})),ku,Lu;const Si=e=>({components:{Card:it,Collapsible:Uo,Stack:We,Button:fe,TextContainer:wt,Link:zo},setup(){const o=C(!0);return{args:e,open:o,handleToggle:()=>{o.value=!o.value}}},template:`
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
  `}),mI={Template:Si},yI="wrapper";function bm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(yI,N(v(v({},mI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Behavior / Collapsible",component:Uo,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},mdxType:"Meta"}),t("h1",null,"Collapsible"),t("p",null,"The collapsible component is used to put long sections of information under a block that merchants can expand or collapse."),t(V,{mdxType:"Canvas"},t(H,{name:"Collapsible",height:"200px",parameters:{docs:{source:{state:"close",code:_(ku||(ku=hm([`
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
          `])))}}},mdxType:"Story"},Si.bind({}))),t(ce,{story:"Collapsible",mdxType:"ArgsTable"}))}bm.isMDXComponent=!0;const sc=Si.bind({});sc.storyName="Collapsible";sc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_(Lu||(Lu=hm([`
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
          `])))}}};const Ua={title:"Components / Behavior / Collapsible",component:Uo,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},includeStories:["collapsible"]},gI={Collapsible:"collapsible"};Ua.parameters=Ua.parameters||{};Ua.parameters.docs=N(v({},Ua.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:gI,mdxComponentAnnotations:Ua},t(bm,null))});var hI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Si,collapsible:sc,default:Ua});const Ci=e=>({components:{ColorPicker:Ys},setup(){return{color:C("#000000"),args:e}},template:_`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>`}),bI={Template:Ci},fI="wrapper";function fm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(fI,N(v(v({},bI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Color Picker",component:Ys,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Color picker"),t("p",null,`The color picker is used to let merchants select a color visually.
For example, merchants use the color picker to customize the accent color of the email templates for their shop.`),t(V,{mdxType:"Canvas"},t(H,{name:"Color Picker",height:"210px",parameters:{docs:{source:{code:_`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}},mdxType:"Story"},Ci.bind({}))),t(ce,{story:"Color Picker",mdxType:"ArgsTable"}))}fm.isMDXComponent=!0;const ic=Ci.bind({});ic.storyName="Color Picker";ic.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}};const ja={title:"Components / Forms / Color Picker",component:Ys,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},includeStories:["colorPicker"]},vI={"Color Picker":"colorPicker"};ja.parameters=ja.parameters||{};ja.parameters.docs=N(v({},ja.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:vI,mdxComponentAnnotations:ja},t(fm,null))});var xI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ci,colorPicker:ic,default:ja});const Xn=e=>({components:{Combobox:Ta,Listbox:Tt,ListboxOption:Pt,ComboboxTextField:wn,Icon:re},template:`
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
  </Combobox>`,data(){return{searchIcon:Tn,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,n){return this.searchValue?this.searchValue===o.value:n===0}}});Xn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Kn=e=>({components:{Combobox:Ta,Listbox:Tt,ListboxOption:Pt,ComboboxTextField:wn,Icon:re,TextContainer:wt,Tag:On,Stack:We},template:`
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
  `,data(){return{searchIcon:Tn,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:"",selectedOptions:["rustic","antique"]}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.selectedOptions.includes(o)?this.selectedOptions=this.selectedOptions.filter(n=>n!==o):this.selectedOptions.push(o)},handleRemoveTag(o){this.selectedOptions=this.selectedOptions.filter(n=>n!==o)}}});Kn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Yn=e=>({components:{Combobox:Ta,Listbox:Tt,ListboxOption:Pt,ComboboxTextField:wn,Icon:re,ListboxLoading:Mn},template:`
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
  `,data(){return{searchIcon:Tn,searchValue:""}}});Yn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Zn=e=>({components:{Combobox:Ta,Listbox:Tt,ListboxOption:Pt,ComboboxTextField:wn,Icon:re},template:`
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
  </Combobox>`,data(){return{searchIcon:Tn,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,n){return this.searchValue?this.searchValue===o.value:n===0}}});Zn.parameters={docs:{source:{code:_`
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
      `}}};const TI={BasicAutocomplete:Xn,MultiTagAutocomplete:Kn,LoadingAutoComplete:Yn,ExampleAutoComplete:Zn},SI="wrapper";function vm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(SI,N(v(v({},TI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Combobox",component:Ta,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Combobox"),t("p",null,"The Combobox component implements part of the ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"},"Aria 1.2 combobox"),` specs on a TextField and a popover containing a Listbox.
Like Autocomplete, Combobox allows merchants to quickly search through and select from large collections of options.`),t("br",null),t("br",null),t("h3",null,"Basic autocomplete"),t("p",null,"Use to help merchants complete text input quickly from a list of options."),t(V,{mdxType:"Canvas"},t(H,{story:Xn,name:"Basic Autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Multiple tags autocomplete"),t("p",null,"Use to help merchants select multiple options from a list curated by the text input."),t(V,{mdxType:"Canvas"},t(H,{story:Kn,name:"Multiple tags autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Autocomplete with loading"),t("p",null,"Use to indicate loading state to merchants while option data is processing."),t(V,{mdxType:"Canvas"},t(H,{story:Yn,name:"Autocomplete with loading",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Example"),t("font",{color:"red"}," Can not test props on this component due to inline Story. Try it on your own project. "),t(V,{mdxType:"Canvas"},t(H,{story:Zn,name:"Example",height:"180px",inline:!1,mdxType:"Story"})),t(ce,{story:"Example",mdxType:"ArgsTable"}))}vm.isMDXComponent=!0;const xm=Xn;xm.storyName="Basic Autocomplete";const Tm=Kn;Tm.storyName="Multiple tags autocomplete";const Sm=Yn;Sm.storyName="Autocomplete with loading";const Cm=Zn;Cm.storyName="Example";const Wa={title:"Components / Forms / Combobox",component:Ta,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_BasicAutocomplete_","_MultiTagAutocomplete_","_LoadingAutoComplete_","_ExampleAutoComplete_"]},CI={"Basic Autocomplete":"_BasicAutocomplete_","Multiple tags autocomplete":"_MultiTagAutocomplete_","Autocomplete with loading":"_LoadingAutoComplete_",Example:"_ExampleAutoComplete_"};Wa.parameters=Wa.parameters||{};Wa.parameters.docs=N(v({},Wa.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:CI,mdxComponentAnnotations:Wa},t(vm,null))});var AI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicAutocomplete:Xn,MultiTagAutocomplete:Kn,LoadingAutoComplete:Yn,ExampleAutoComplete:Zn,_BasicAutocomplete_:xm,_MultiTagAutocomplete_:Tm,_LoadingAutoComplete_:Sm,_ExampleAutoComplete_:Cm,default:Wa});const Ai=e=>({components:{Frame:Wt,ContextualSaveBar:Pn,Button:fe},setup(){return{discardHandle:()=>{console.log("nothing saved")},saveForm:()=>{alert("Saved")},CancelSmallMinor:Pd}},template:`
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
  `}),kI={Template:Ai},LI="wrapper";function Am(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(LI,N(v(v({},kI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Contextual save bar",component:Pn,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Contextual save bar"),t("p",null,"The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work."),t(V,{mdxType:"Canvas"},t(H,{name:"Contextual save bar",inline:!1,height:"300px",parameters:{docs:{source:{code:_`
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
          `}}},mdxType:"Story"},Ai.bind({}))),t(ce,{story:"Contextual save bar",mdxType:"ArgsTable"}))}Am.isMDXComponent=!0;const lc=Ai.bind({});lc.storyName="Contextual save bar";lc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
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
          `}}};const za={title:"Components / Forms / Contextual save bar",component:Pn,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},includeStories:["contextualSaveBar"]},wI={"Contextual save bar":"contextualSaveBar"};za.parameters=za.parameters||{};za.parameters.docs=N(v({},za.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:wI,mdxComponentAnnotations:za},t(Am,null))});var PI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ai,contextualSaveBar:lc,default:za});const ki=e=>({components:{DatePicker:Qs},setup(){const o=C(e.selectedDate),n=Ms({month:e.month,year:e.year});return{args:e,selectedDate:o,pickerView:n,handleChange:r=>{console.log(r)},handleMonthChange:({month:r,year:c})=>{n.month=r,n.year=c}}},template:_`<div>
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
  </div>`}),_I={Template:ki},MI="wrapper";function km(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(MI,N(v(v({},_I),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Date Picker",component:Qs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},mdxType:"Meta"}),t("h1",null,"Date picker"),t("p",null,"Date pickers let merchants choose dates from a visual calendar that's consistently applied wherever dates need to be selected across Shopify."),t(V,{mdxType:"Canvas"},t(H,{name:"Date Picker",height:"320px",args:{selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0},parameters:{docs:{source:{code:_`
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
          `}}},mdxType:"Story"},ki.bind({}))),t(ce,{story:"Date Picker",mdxType:"ArgsTable"}))}km.isMDXComponent=!0;const Li=ki.bind({});Li.storyName="Date Picker";Li.args={selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0};Li.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
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
          `}}};const Ga={title:"Components / Forms / Date Picker",component:Qs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},includeStories:["datePicker"]},NI={"Date Picker":"datePicker"};Ga.parameters=Ga.parameters||{};Ga.parameters.docs=N(v({},Ga.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:NI,mdxComponentAnnotations:Ga},t(km,null))});var BI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ki,datePicker:Li,default:Ga});const wi=e=>({components:{DescriptionList:Js,Dt:sp,Dd:ip},setup(){return{args:e}},template:`<DescriptionList v-bind="args">
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
  </DescriptionList>`}),II={Template:wi},DI="wrapper";function Lm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(DI,N(v(v({},II),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Lists and tables  / Description List",component:Js,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Description List"),t("p",null,`Description lists are a way to organize and explain related information.
They're particularly useful when you need to list and define terms such as in a glossary.`),t("font",{color:"#FF7900"},t("strong",null,"Warning:"))," Use component name as case-sensitive (",t("code",null,"<Dt>")," & ",t("code",null,"<Dd>"),") to prevent conflict with ",t("code",null,"<dt>")," ",t("code",null,"<dd>")," HTML element.",t(V,{mdxType:"Canvas"},t(H,{name:"Description List",height:"60px",parameters:{docs:{source:{code:_`
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
          `}}},mdxType:"Story"},wi.bind({}))),t(ce,{story:"Description List",mdxType:"ArgsTable"}))}Lm.isMDXComponent=!0;const rc=wi.bind({});rc.storyName="Description List";rc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
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
          `}}};const Xa={title:"Components / Lists and tables  / Description List",component:Js,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["descriptionList"]},$I={"Description List":"descriptionList"};Xa.parameters=Xa.parameters||{};Xa.parameters.docs=N(v({},Xa.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:$I,mdxComponentAnnotations:Xa},t(Lm,null))});var FI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:wi,descriptionList:rc,default:Xa});const Pi=e=>({components:{DisplayText:_n},setup(){return{args:e}},template:'<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>'}),EI={Template:Pi},OI="wrapper";function wm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(OI,N(v(v({},EI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Titles and text  / Display text",component:_n,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},mdxType:"Meta"}),t("h1",null,"Display Text"),t("p",null,`Display styles make a bold visual statement.
Use them to create impact when the main goal is visual storytelling.
For example, use display text to convince or reassure merchants such as in marketing content or to capture attention during onboarding.`),t(V,{mdxType:"Canvas"},t(H,{name:"Display text",height:"60px",args:{element:"p"},parameters:{docs:{source:{code:_`<DisplayText>Good evening, Dominic.</DisplayText>`}}},mdxType:"Story"},Pi.bind({}))),t(ce,{story:"Display text",mdxType:"ArgsTable"}))}wm.isMDXComponent=!0;const _i=Pi.bind({});_i.storyName="Display text";_i.args={element:"p"};_i.parameters={storySource:{source:`args => ({
  components: {
    DisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>\`
})`},docs:{source:{code:_`<DisplayText>Good evening, Dominic.</DisplayText>`}}};const Ka={title:"Components / Titles and text  / Display text",component:_n,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},includeStories:["displayText"]},qI={"Display text":"displayText"};Ka.parameters=Ka.parameters||{};Ka.parameters.docs=N(v({},Ka.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:qI,mdxComponentAnnotations:Ka},t(wm,null))});var RI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Pi,displayText:_i,default:Ka}),wu=Object.freeze,VI=Object.defineProperty,Pm=(e,o)=>wu(VI(e,"raw",{value:wu(o||e.slice())})),Pu,_u;const Mi=e=>({components:{DropZone:ei,DropZoneFileUpload:up,Stack:We,Thumbnail:qn,Caption:ta},setup(){const o=C([]),n=(r,c,p)=>{o.value=[...o.value,...c]},s=["image/gif","image/jpeg","image/png"];return{files:o,handleDrop:n,validImageTypes:s,thumbnailSource:r=>s.includes(r.type)?window.URL.createObjectURL(r):pr}},template:`
    <DropZone @drop="handleDrop">
      <DropZoneFileUpload v-if="!files.length" actionHint="Accepts .gif, .jpg, and .png" />
      <Stack v-else>
        <Stack v-for="file, index in files" :key="index">
          <Thumbnail size="small" :alt="file.name" :source="thumbnailSource(file)" />
          <div>{{ file.name }} <Caption>{{ file.size }} bytes</Caption></div>
        </Stack>
      </Stack>
    </DropZone>
  `}),HI={Template:Mi},UI="wrapper";function _m(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(UI,N(v(v({},HI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Actions / Drop zone",component:ei,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Drop Zone"),t("br",null),t("p",null,"The drop zone component lets users upload files by dragging and dropping the files into an area on a page, or activating a button."),t(V,{mdxType:"Canvas"},t(H,{name:"Drop zone",height:"160px",parameters:{docs:{source:{code:_(Pu||(Pu=Pm([`
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
          `])))}}},mdxType:"Story"},Mi.bind({}))),t(ce,{story:"Drop zone",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"File Upload component")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actionTitle"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actionHint"),t("td",{parentName:"tr",align:null},"String")))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Action Props")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel?"),t("td",{parentName:"tr",align:null},"Boolean")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"external?"),t("td",{parentName:"tr",align:null},"String")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onAction?()"),t("td",{parentName:"tr",align:null},"void")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onMouseEnter?()"),t("td",{parentName:"tr",align:null},"void")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onTouchStart?()"),t("td",{parentName:"tr",align:null},"void")))))}_m.isMDXComponent=!0;const cc=Mi.bind({});cc.storyName="Drop zone";cc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_(_u||(_u=Pm([`
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
          `])))}}};const Ya={title:"Components / Actions / Drop zone",component:ei,argTypes:{default:{description:"The child elements to render in the dropzone",table:{type:{summary:null}},control:{disable:!0}},label:{description:"Slot for label for the file input. This will override the label props.",table:{type:{summary:null}},control:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"true"}}},dropOnPage:{table:{defaultValue:{summary:"false"}}},labelAction:{table:{type:{summary:"Action"}}},type:{table:{type:{summary:"file | image"}}},click:{description:"Callback triggered on click",table:{category:"events",type:{summary:"(event) => void"}}},drop:{description:"Callback triggered on any file drop",control:{disable:!0},table:{type:{summary:"(files, acceptedFiles, rejectedFiles) => void"}}},dragover:{description:"Callback triggered when one or more files are dragging over the drag area",control:{disable:!0}},dragenter:{description:"Callback triggered when one or more files entered the drag area",control:{disable:!0}},dragleave:{description:"Callback triggered when one or more files left the drag area",control:{disable:!0}},"drop-accepted":{description:"Callback triggered when at least one of the files dropped was accepted",control:{disable:!0},table:{type:{summary:"(acceptedFiles) => void"}}},"drop-rejected":{description:"Callback triggered when at least one of the files dropped was rejected",control:{disable:!0},table:{type:{summary:"(rejectedFiles) => void"}}},"file-dialog-close":{description:"Callback triggered when the file dialog is canceled",control:{disable:!0}}},includeStories:["dropZone"]},jI={"Drop zone":"dropZone"};Ya.parameters=Ya.parameters||{};Ya.parameters.docs=N(v({},Ya.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:jI,mdxComponentAnnotations:Ya},t(_m,null))});var WI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Mi,dropZone:cc,default:Ya}),Mu=Object.freeze,zI=Object.defineProperty,Mm=(e,o)=>Mu(zI(e,"raw",{value:Mu(o||e.slice())})),Nu,Bu;const Ni=e=>({components:{NoteMinor:pr,ExceptionList:dp,ExceptionListItem:ti},setup(){return{args:e,NoteMinor:pr,DiscountsMajor:Bg}},template:`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>`}),GI={Template:Ni},XI="wrapper";function Nm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(XI,N(v(v({},GI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Lists and tables / Exception List",component:ti,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Exception List"),t("p",null,"Use exception lists to help merchants notice important, standout information that adds extra context to a task. Exception lists often consist of a title and description. Each item in the list either has a bullet or icon at the front."),t(V,{mdxType:"Canvas"},t(H,{name:"Exception List",height:"120px",parameters:{docs:{source:{code:_(Nu||(Nu=Mm([`
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
          `])))}}},mdxType:"Story"},Ni.bind({}))),t(ce,{story:"Exception List",mdxType:"ArgsTable"}))}Nm.isMDXComponent=!0;const uc=Ni.bind({});uc.storyName="Exception List";uc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_(Bu||(Bu=Mm([`
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
          `])))}}};const Za={title:"Components / Lists and tables / Exception List",component:ti,argTypes:{default:{table:{disable:!0}}},includeStories:["exceptionList"]},KI={"Exception List":"exceptionList"};Za.parameters=Za.parameters||{};Za.parameters.docs=N(v({},Za.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:KI,mdxComponentAnnotations:Za},t(Nm,null))});var YI=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ni,exceptionList:uc,default:Za});const Bi=(e,{argTypes:o})=>({props:Object.keys(o),components:{FooterHelp:ai},template:`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>`}),ZI={Template:Bi},QI="wrapper";function Bm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(QI,N(v(v({},ZI),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Navigation / Footer help",component:ai,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Footer help"),t("p",null,"Footer help is used to refer merchants to more information related to the product or feature they're using."),t(V,{mdxType:"Canvas"},t(H,{name:"Footer help",parameters:{docs:{source:{code:_`
            <FooterHelp>Footer help content</FooterHelp>
          `}}},mdxType:"Story"},Bi.bind({}))),t(ce,{story:"Footer help",mdxType:"ArgsTable"}))}Bm.isMDXComponent=!0;const dc=Bi.bind({});dc.storyName="Footer help";dc.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <FooterHelp>Footer help content</FooterHelp>
          `}}};const Qa={title:"Components / Navigation / Footer help",component:ai,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},includeStories:["footerHelp"]},JI={"Footer help":"footerHelp"};Qa.parameters=Qa.parameters||{};Qa.parameters.docs=N(v({},Qa.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:JI,mdxComponentAnnotations:Qa},t(Bm,null))});var eD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Bi,footerHelp:dc,default:Qa}),Iu=Object.freeze,tD=Object.defineProperty,Im=(e,o)=>Iu(tD(e,"raw",{value:Iu(o||e.slice())})),Du,$u;const Ii=e=>({components:{Form:oi,FormLayout:Bt,Checkbox:xa,Button:fe,TextField:_e},data(){return{checkbox:!1,textField:""}},setup(){return{args:e}},methods:{handleSubmit(o){o.preventDefault(),alert(`Form submitted - Checkbox: ${this.checkbox} - email: ${this.textField}`),this.checkbox=!1,this.textField=""}},template:`<Form @submit="handleSubmit">
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
  </Form>`}),aD={Template:Ii},oD="wrapper";function Dm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(oD,N(v(v({},aD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Form",component:oi,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Form"),t("p",null,"A wrapper component that handles the submission of forms."),t(V,{mdxType:"Canvas"},t(H,{name:"Form",height:"200px",parameters:{docs:{source:{code:_(Du||(Du=Im([`
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
          `])))}}},mdxType:"Story"},Ii.bind({}))),t(ce,{story:"Form",mdxType:"ArgsTable"}))}Dm.isMDXComponent=!0;const pc=Ii.bind({});pc.storyName="Form";pc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_($u||($u=Im([`
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
          `])))}}};const Ja={title:"Components / Forms / Form",component:oi,argTypes:{default:{table:{disable:!0}},implicitSubmit:{table:{type:{summary:null}}},preventDefault:{table:{type:{summary:null}}},encType:{table:{type:{summary:"application/x-www-form-urlencoded | multipart/form-data | text/plain"}}},submit:{description:"Callback when form is submitted",control:{disable:!0}}},includeStories:["form"]},nD={Form:"form"};Ja.parameters=Ja.parameters||{};Ja.parameters.docs=N(v({},Ja.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:nD,mdxComponentAnnotations:Ja},t(Dm,null))});var sD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ii,form:pc,default:Ja});const Di=e=>({components:{FormLayout:Bt,TextField:_e},data(){return{textField:"",emailField:""}},template:`
  <FormLayout>
    <TextField v-model="textField" autoComplete="off">
      <template #label>Store name</template>
    </TextField>
    <TextField v-model="emailField" type="email" autoComplete="email">
      <template #label>Account email</template>
    </TextField>
  </FormLayout>`}),$i=(e,{argTypes:o})=>({components:{FormLayout:Bt,FormGroup:Rr,TextField:_e},data(){return{min:"",max:""}},template:`<FormLayout>
    <FormGroup>
      <TextField v-model="min" type="number">
        <template #label>Minimum order</template>
      </TextField>
      <TextField v-model="max" type="number">
        <template #label>Maximum order</template>
      </TextField>
    </FormGroup>
  </FormLayout>`}),Fi=e=>({components:{FormLayout:Bt,FormGroup:Rr,TextField:_e},data(){return{textField:"",emailField:""}},template:`<FormLayout>
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
  </FormLayout>`}),iD={Template:Di,FormLayoutGroup:$i,FormGroupCondensed:Fi},lD="wrapper";function $m(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(lD,N(v(v({},iD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Form Layout",component:Bt,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Form Layout"),t("p",null,`Use form layout to arrange fields within a form using standard spacing.
By default it stacks fields vertically but also supports horizontal groups of fields.`),t(V,{mdxType:"Canvas"},t(H,{name:"Default Form Layout",height:"160px",parameters:{docs:{source:{state:"close",code:_`
            <FormLayout>
              <TextField v-model="textField" autoComplete="off">
                <template #label>Store name</template>
              </TextField>
              <TextField v-model="emailField" type="email" autoComplete="email">
                <template #label>Account email</template>
              </TextField>
            </FormLayout>
          `}}},mdxType:"Story"},Di.bind({}))),t("h3",null,"Field group"),t(V,{mdxType:"Canvas"},t(H,{name:"Field Group",height:"80px",parameters:{docs:{source:{state:"close",code:_`
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
          `}}},mdxType:"Story"},$i.bind({}))),t("h3",null,"Condensed field group"),t(V,{mdxType:"Canvas"},t(H,{name:"Condensed field group",height:"80px",parameters:{docs:{source:{code:_`
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
          `}}},mdxType:"Story"},Fi.bind({}))))}$m.isMDXComponent=!0;const mc=Di.bind({});mc.storyName="Default Form Layout";mc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
            <FormLayout>
              <TextField v-model="textField" autoComplete="off">
                <template #label>Store name</template>
              </TextField>
              <TextField v-model="emailField" type="email" autoComplete="email">
                <template #label>Account email</template>
              </TextField>
            </FormLayout>
          `}}};const yc=$i.bind({});yc.storyName="Field Group";yc.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{state:"close",code:_`
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
          `}}};const gc=Fi.bind({});gc.storyName="Condensed field group";gc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
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
          `}}};const eo={title:"Components / Forms / Form Layout",component:Bt,argTypes:{default:{table:{disable:!0}},field:{name:"field-{field-id}",description:"Slot for each form field, defined by `field-id`. Must have prefix `field-`",table:{category:"Slots",type:{summary:null}}},group:{name:"group-{group-id}",description:"Slot for each field group, defined by `group-id`. Must have prefix `group-`",table:{category:"Slots",type:{summary:null}}}},includeStories:["defaultFormLayout","fieldGroup","condensedFieldGroup"]},rD={"Default Form Layout":"defaultFormLayout","Field Group":"fieldGroup","Condensed field group":"condensedFieldGroup"};eo.parameters=eo.parameters||{};eo.parameters.docs=N(v({},eo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:rD,mdxComponentAnnotations:eo},t($m,null))});var cD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Di,FormLayoutGroup:$i,FormGroupCondensed:Fi,defaultFormLayout:mc,fieldGroup:yc,condensedFieldGroup:gc,default:eo}),Fu=Object.freeze,uD=Object.defineProperty,Fm=(e,o)=>Fu(uD(e,"raw",{value:Fu(o||e.slice())})),Eu,Ou;const Ei=e=>({components:{Frame:Wt,TopBar:Rn,TopBarUserMenu:Kr,TopBarMenu:di,Icon:re,TopBarSearchField:Xr,VisuallyHidden:ot,ActionList:et,NavigationSection:Ur,Navigation:Bn,Loading:Nn,ContextualSaveBar:Pn,Button:fe,Toast:En},data(){return{isUserMenuOpen:!1,isSecondaryMenuOpen:!1,isSearchActive:!1,searchValue:"",isCollapsed:!1,isLoading:!1,isDirty:!1,toastActive:!1,userMenuAction:[{items:[{content:"Back to Shopify",icon:qo}]},{items:[{content:"Community forums"}]}],userMenuMessage:{title:"Another Message",description:"This is a description of message",action:{onClick:this.clickHandle,content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}},navItems2:[{label:"Dashboard",icon:Hc(Dg),onClick:this.toggleIsLoading},{label:"Qikify Orders",icon:Hc(Ig),onClick:this.toggleIsLoading}]}},methods:{handleSearchChange(o){this.isSearchActive=o.length>0},handleSearchResultsDismiss(){this.searchValue="",this.isSearchActive=!1},toggleUserMenu(){this.isUserMenuOpen=!this.isUserMenuOpen},toggleIsSecondaryMenuOpen(){this.isSecondaryMenuOpen=!this.isSecondaryMenuOpen},clickHandle(){alert("clicked")},toggleCollapsed(){this.isCollapsed=!this.isCollapsed},toggleToastActive(){this.toastActive=!this.toastActive},toggleIsLoading(){this.isLoading=!this.isLoading},toggleIsDirty(){this.isDirty=!this.isDirty}},setup(){return{logo:{width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},navItems:[{label:"Back to Shopify",icon:qo}],QuestionMarkMajor:Md,CirclePlusOutlineMinor:Nd}},template:`
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
  `}),dD={Template:Ei},pD="wrapper";function Em(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(pD,N(v(v({},dD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Structure / Frame",component:Wt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Frame"),t("p",null,"The frame component, while not visible in the user interface itself, provides the structure for an application. It wraps the main elements and houses the primary ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-navigation--navigation"},"navigation"),", ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-top-bar--top-bar"},"top bar"),", ",t("a",{parentName:"p",href:"?path=/docs/components-feedback-indicators-toast--toast"},"toast"),", and ",t("a",{parentName:"p",href:"?path=/docs/components-forms-contextual-save-bar--contextual-save-bar"},"contextual save bar")," components."),t(V,{mdxType:"Canvas"},t(H,{name:"Frame",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:_(Eu||(Eu=Fm([`
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
          `])))}}},mdxType:"Story"},Ei.bind({}))),t(ce,{story:"Frame",mdxType:"ArgsTable"}))}Em.isMDXComponent=!0;const hc=Ei.bind({});hc.storyName="Frame";hc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_(Ou||(Ou=Fm([`
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
          `])))}}};const to={title:"Components / Structure / Frame",component:Wt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["frame"]},mD={Frame:"frame"};to.parameters=to.parameters||{};to.parameters.docs=N(v({},to.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:mD,mdxComponentAnnotations:to},t(Em,null))});var yD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ei,frame:hc,default:to});const Oi=e=>({components:{Heading:aa},setup(){return{args:e}},template:`
    <Heading v-bind="args">
      Online store dashboard
    </Heading>
  `}),gD={Template:Oi},hD="wrapper";function Om(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(hD,N(v(v({},gD),o),{components:e,mdxType:"MDXLayout"}),t("h1",null,"Heading"),t("p",null,`Headings are used as the titles of each major section of a page in the interface.
For example, card components generally use headings as their title.`),t(ne,{title:"Components / Titles and text / Heading",component:aa,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t(V,{mdxType:"Canvas"},t(H,{story:Oi,name:"Heading",height:"50px",mdxType:"Story"})),t(ce,{story:"Heading",mdxType:"ArgsTable"}))}Om.isMDXComponent=!0;const qm=Oi;qm.storyName="Heading";const ao={title:"Components / Titles and text / Heading",component:aa,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},bD={Heading:"_Template_"};ao.parameters=ao.parameters||{};ao.parameters.docs=N(v({},ao.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:bD,mdxComponentAnnotations:ao},t(Om,null))});var fD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Oi,_Template_:qm,default:ao}),qu=Object.freeze,vD=Object.defineProperty,Rm=(e,o)=>qu(vD(e,"raw",{value:qu(o||e.slice())})),Ru,Vu;const qi=e=>({components:{Icon:re},setup(){if(e.source==="CirclePlusMinor")return{args:e,source:Bd};if(e.source==="BehaviorMajor")return{args:e,source:$g};if(e.source==="placeholder")return{args:e,source:"placeholder"}},template:'<Icon :source="source" :color="args.color" :backdrop="args.backdrop" :accessibility-label="args.accessibilityLabel" />'}),xD={Template:qi},TD="wrapper";function Vm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(TD,N(v(v({},xD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Images and icons / Icon",component:re,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Icon"),t("p",null,`Icons are used to visually communicate core parts of the product and available actions.
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
`)),t("h3",null,t("strong",{parentName:"h3"},"Demo & Properties")),t(V,{mdxType:"Canvas"},t(H,{name:"Icon",height:"30px",args:{source:"CirclePlusMinor"},parameters:{docs:{source:{code:_(Ru||(Ru=Rm([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}},mdxType:"Story"},qi.bind({}))),t(ce,{story:"Icon",mdxType:"ArgsTable"}))}Vm.isMDXComponent=!0;const Ri=qi.bind({});Ri.storyName="Icon";Ri.args={source:"CirclePlusMinor"};Ri.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_(Vu||(Vu=Rm([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}};const oo={title:"Components / Images and icons / Icon",component:re,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["icon"]},SD={Icon:"icon"};oo.parameters=oo.parameters||{};oo.parameters.docs=N(v({},oo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:SD,mdxComponentAnnotations:oo},t(Vm,null))});var CD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:qi,icon:Ri,default:oo});const Vi=e=>({components:{InlineError:va},setup(){return{args:e}},template:'<InlineError v-bind="args"/>'}),AD={Template:Vi},kD="wrapper";function Hm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(kD,N(v(v({},AD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / InlineError",component:va,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Inline error"),t("p",null,`Inline errors are brief, in-context messages that tell merchants something went wrong with a single or group of inputs in a form
Use inline errors to help merchants understand why a form input may not be valid and how to fix it.`),t(V,{mdxType:"Canvas"},t(H,{name:"InlineError",args:{message:"Store name is required",fieldID:"myFieldID"},parameters:{docs:{source:{code:_`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}},mdxType:"Story"},Vi.bind({}))),t(ce,{story:"InlineError",mdxType:"ArgsTable"}))}Hm.isMDXComponent=!0;const Hi=Vi.bind({});Hi.storyName="InlineError";Hi.args={message:"Store name is required",fieldID:"myFieldID"};Hi.parameters={storySource:{source:`args => ({
  components: {
    InlineError
  },

  setup() {
    return {
      args
    };
  },

  template: \`<InlineError v-bind="args"/>\`
})`},docs:{source:{code:_`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}};const no={title:"Components / Forms / InlineError",component:va,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},includeStories:["inlineError"]},LD={InlineError:"inlineError"};no.parameters=no.parameters||{};no.parameters.docs=N(v({},no.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:LD,mdxComponentAnnotations:no},t(Hm,null))});var wD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vi,inlineError:Hi,default:no});const Ui=e=>({components:{KeyboardKey:ni},setup(){return{args:e}},template:"<KeyboardKey>{{ args.default }}</KeyboardKey>"}),PD={Template:Ui},_D="wrapper";function Um(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(_D,N(v(v({},PD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Images and icons / Keyboard Key",component:ni,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Keyboard Key"),t("p",null,"Keyboard key is used to educate merchants about keyboard shortcuts."),t(V,{mdxType:"Canvas"},t(H,{name:"Keyboard Key",height:"50px",args:{default:"Ctrl"},parameters:{docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}},mdxType:"Story"},Ui.bind({}))),t(ce,{story:"Keyboard Key",mdxType:"ArgsTable"}))}Um.isMDXComponent=!0;const ji=Ui.bind({});ji.storyName="Keyboard Key";ji.args={default:"Ctrl"};ji.parameters={storySource:{source:`args => ({
  components: {
    KeyboardKey
  },

  setup() {
    return {
      args
    };
  },

  template: '<KeyboardKey>{{ args.default }}</KeyboardKey>'
})`},docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}};const so={title:"Components / Images and icons / Keyboard Key",component:ni,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},includeStories:["keyboardKey"]},MD={"Keyboard Key":"keyboardKey"};so.parameters=so.parameters||{};so.parameters.docs=N(v({},so.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:MD,mdxComponentAnnotations:so},t(Um,null))});var ND=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ui,keyboardKey:ji,default:so});const Wi=e=>({components:{Layout:It,LayoutSection:zt,AnnotatedSection:sa,TextField:_e},template:`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),zi=e=>({components:{Layout:It,LayoutSection:zt,AnnotatedSection:sa,TextField:_e},template:`
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
  </Layout>`}),Gi=e=>({components:{Layout:It,LayoutSection:zt,AnnotatedSection:sa,TextField:_e},template:`
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
  </Layout>`}),Xi=e=>({components:{Layout:It,LayoutSection:zt,AnnotatedSection:sa,TextField:_e},template:`
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
  </Layout>`}),Qn=e=>({components:{Layout:It,LayoutSection:zt,AnnotatedSection:sa,TextField:_e,FormLayout:Bt},template:`
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
  </Layout>`});Qn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Jn=e=>({components:{Layout:It,LayoutSection:zt,AnnotatedSection:sa,TextField:_e,FormLayout:Bt},template:`
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
  </Layout>`});Jn.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Ki=e=>({components:{Layout:It,LayoutSection:zt,AnnotatedSection:sa,TextField:_e},setup(){return{args:e}},template:`
  <Layout v-bind="args">
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),BD={OneColLayout:Wi,TwoColLayoutDW:zi,TwoColLayoutSW:Gi,ThreeColLayoutSW:Xi,AnnotatedLayout:Qn,AnnotatedBannerLayout:Jn,Example:Ki},ID="wrapper";function jm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(ID,N(v(v({},BD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Structure / Layout",component:It,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},mdxType:"Meta"}),t("h1",null,"Layout"),t("p",null,`The layout component is used to create the main layout on a page.
Layouts sections come in three main configurations: one-column, two-column, and annotated.
One and two column layouts can be combined in the same page.
Annotated layouts should be used on their own and only on settings pages.`),t("br",null),t("br",null),t("h3",null,"One-column layout"),t("p",null,`Use to have a single section on its own in a full-width container.
Use for simple pages and as a container for banners and other full-width content.`),t(V,{mdxType:"Canvas"},t(H,{name:"One column layout",parameters:{docs:{source:{state:"close",code:_`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},Wi.bind({}))),t("h3",null,"Two columns with primary and secondary widths"),t("p",null,`Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual product or order pages).
Can also be used on any page that needs to structure a lot of content. This layout stacks the columns on small screens.`),t(V,{mdxType:"Canvas"},t(H,{name:"Two columns (different width)",parameters:{docs:{source:{state:"close",code:_`
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
          `}}},mdxType:"Story"},zi.bind({}))),t("h3",null,"Two columns with equal width"),t("p",null,`Use to create a \xBD + \xBD layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(V,{mdxType:"Canvas"},t(H,{name:"Two columns (same width)",parameters:{docs:{source:{state:"close",code:_`
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
          `}}},mdxType:"Story"},Gi.bind({}))),t("h3",null,"Three columns with equal width"),t("p",null,`Use to create a \u2153 + \u2153 + \u2153 layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(V,{mdxType:"Canvas"},t(H,{name:"Three columns (same width)",parameters:{docs:{source:{state:"close",code:_`
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
          `}}},mdxType:"Story"},Xi.bind({}))),t("h3",null,"Annotated layout"),t("p",null,`Use for settings pages. When settings are grouped thematically in annotated sections,
the title and description on each section helps merchants quickly find the setting they're looking for.`),t(V,{mdxType:"Canvas"},t(H,{story:Qn,name:"Annotated layout",mdxType:"Story"})),t("h3",null,"Annotated layout with Banner at the top"),t("p",null,"Use for settings pages that need a banner or other content at the top."),t(V,{mdxType:"Canvas"},t(H,{story:Jn,name:"Annotated layout (with Banner)",mdxType:"Story"})),t("h3",null,"Example"),t(V,{mdxType:"Canvas"},t(H,{name:"Example",height:"100px",parameters:{docs:{source:{code:_`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},Ki.bind({}))),t(ce,{story:"Example",mdxType:"ArgsTable"}))}jm.isMDXComponent=!0;const bc=Wi.bind({});bc.storyName="One column layout";bc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const fc=zi.bind({});fc.storyName="Two columns (different width)";fc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
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
          `}}};const vc=Gi.bind({});vc.storyName="Two columns (same width)";vc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
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
          `}}};const xc=Xi.bind({});xc.storyName="Three columns (same width)";xc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
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
          `}}};const Wm=Qn;Wm.storyName="Annotated layout";const zm=Jn;zm.storyName="Annotated layout (with Banner)";const Tc=Ki.bind({});Tc.storyName="Example";Tc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const io={title:"Components / Structure / Layout",component:It,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},includeStories:["oneColumnLayout","twoColumnsDifferentWidth","twoColumnsSameWidth","threeColumnsSameWidth","_AnnotatedLayout_","_AnnotatedBannerLayout_","example"]},DD={"One column layout":"oneColumnLayout","Two columns (different width)":"twoColumnsDifferentWidth","Two columns (same width)":"twoColumnsSameWidth","Three columns (same width)":"threeColumnsSameWidth","Annotated layout":"_AnnotatedLayout_","Annotated layout (with Banner)":"_AnnotatedBannerLayout_",Example:"example"};io.parameters=io.parameters||{};io.parameters.docs=N(v({},io.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:DD,mdxComponentAnnotations:io},t(jm,null))});var $D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",OneColLayout:Wi,TwoColLayoutDW:zi,TwoColLayoutSW:Gi,ThreeColLayoutSW:Xi,AnnotatedLayout:Qn,AnnotatedBannerLayout:Jn,Example:Ki,oneColumnLayout:bc,twoColumnsDifferentWidth:fc,twoColumnsSameWidth:vc,threeColumnsSameWidth:xc,_AnnotatedLayout_:Wm,_AnnotatedBannerLayout_:zm,example:Tc,default:io});const Yi=e=>({components:{Link:zo},setup(){return{args:e}},template:'<Link v-bind="args">Fulfilling orders</Link>'}),FD={Template:Yi},ED="wrapper";function Gm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(ED,N(v(v({},FD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Navigation / Link",component:zo,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Link"),t("p",null,"Links take users to another place, and usually appear within or directly following a sentence."),t("p",null,"For actions that aren't related to navigation, use the ",t("a",{parentName:"p",href:"/docs/components-actions-button--button"},"button component.")),t(V,{mdxType:"Canvas"},t(H,{name:"Link",parameters:{docs:{source:{code:_`
            <Link>Fulfilling orders</Link>
          `}}},mdxType:"Story"},Yi.bind({}))),t(ce,{story:"Link",mdxType:"ArgsTable"}))}Gm.isMDXComponent=!0;const Sc=Yi.bind({});Sc.storyName="Link";Sc.parameters={storySource:{source:`args => ({
  components: {
    Link
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Link v-bind="args">Fulfilling orders</Link>\`
})`},docs:{source:{code:_`
            <Link>Fulfilling orders</Link>
          `}}};const lo={title:"Components / Navigation / Link",component:zo,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},includeStories:["link"]},OD={Link:"link"};lo.parameters=lo.parameters||{};lo.parameters.docs=N(v({},lo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:OD,mdxComponentAnnotations:lo},t(Gm,null))});var qD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Yi,link:Sc,default:lo});const Zi=e=>({components:{List:Go,ListItem:si},setup(){return{args:e}},template:`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>`}),RD={Template:Zi},VD="wrapper";function Xm(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(VD,N(v(v({},RD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Lists and tables / List",component:Go,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"List"),t("p",null,"Lists display a set of related text-only content. Each list item begins with a bullet or a number."),t(V,{mdxType:"Canvas"},t(H,{name:"List",height:"80px",parameters:{docs:{source:{code:_`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}},mdxType:"Story"},Zi.bind({}))),t(ce,{story:"List",mdxType:"ArgsTable"}))}Xm.isMDXComponent=!0;const Cc=Zi.bind({});Cc.storyName="List";Cc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}};const ro={title:"Components / Lists and tables / List",component:Go,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},includeStories:["list"]},HD={List:"list"};ro.parameters=ro.parameters||{};ro.parameters.docs=N(v({},ro.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:HD,mdxComponentAnnotations:ro},t(Xm,null))});var UD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zi,list:Cc,default:ro});const es=e=>({components:{Listbox:Tt,ListboxOption:Pt},template:`
  <Listbox accessibilityLabel="Basic Listbox example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});es.parameters={docs:{source:{state:"close",code:_`
      <Listbox accessibilityLabel="Basic Listbox example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const ts=e=>({components:{Listbox:Tt,ListboxOption:Pt,ListboxLoading:Mn},template:`
  <Listbox accessibilityLabel="Listbox with loading example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});ts.parameters={docs:{source:{state:"close",code:_`
      <Listbox accessibilityLabel="Listbox with loading example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const as=e=>({components:{Listbox:Tt,ListboxOption:Pt,ListboxAction:ii},template:`
  <Listbox accessibilityLabel="Listbox with Action example">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});as.parameters={docs:{source:{state:"close",code:_`
      <Listbox accessibilityLabel="Listbox with Action example">
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const os=e=>({components:{Listbox:Tt,ListboxOption:Pt,ListboxLoading:Mn,ListboxAction:ii},template:`
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
  </Listbox>`});os.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const ns=e=>({components:{Listbox:Tt,ListboxOption:Pt,ListboxLoading:Mn,ListboxAction:ii},setup(){return{args:e}},template:`
  <Listbox v-bind="args">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});ns.parameters={docs:{source:{code:_`
      <Listbox>
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const jD={BasicListbox:es,LoadingListbox:ts,ActionListbox:as,CustomListbox:os,ExampleListbox:ns},WD="wrapper";function Km(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(WD,N(v(v({},jD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Lists and tables / Listbox",component:Tt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},mdxType:"Meta"}),t("h1",null,"Listbox"),t("p",null,"The Listbox component is a list component that implements part of ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"},"the Aria 1.2 Listbox specs."),`
It presents a list of options and allows users to select one or more of them.
If you need more structure than the standard component offers, use composition to customize the presentation of these lists by using headers or custom elements.`),t("br",null),t("br",null),t("h3",null,"Basic Listbox"),t("p",null,"Basic implementation of a control element used to let merchants select options"),t(V,{mdxType:"Canvas"},t(H,{story:es,name:"Basic Listbox",mdxType:"Story"})),t("h3",null,"Listbox with Loading"),t("p",null,"Implementation of a control element showing a loading indicator to let merchants know more options are being loaded"),t(V,{mdxType:"Canvas"},t(H,{story:ts,name:"Listbox with Loading",mdxType:"Story"})),t("h3",null,"Listbox with Action"),t("p",null,"Implementation of a control element used to let merchants take an action"),t(V,{mdxType:"Canvas"},t(H,{story:as,name:"Listbox with Action",mdxType:"Story"})),t("h3",null,"Listbox with custom element"),t("p",null,"Implementation of a control with custom rendering of options"),t(V,{mdxType:"Canvas"},t(H,{story:os,name:"Listbox with custom element",mdxType:"Story"})),t("h3",null,"Example"),t(V,{mdxType:"Canvas"},t(H,{story:ns,name:"Example",height:"180px",mdxType:"Story"})),t(ce,{story:"Example",mdxType:"ArgsTable"}))}Km.isMDXComponent=!0;const Ym=es;Ym.storyName="Basic Listbox";const Zm=ts;Zm.storyName="Listbox with Loading";const Qm=as;Qm.storyName="Listbox with Action";const Jm=os;Jm.storyName="Listbox with custom element";const ey=ns;ey.storyName="Example";const co={title:"Components / Lists and tables / Listbox",component:Tt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},includeStories:["_BasicListbox_","_LoadingListbox_","_ActionListbox_","_CustomListbox_","_ExampleListbox_"]},zD={"Basic Listbox":"_BasicListbox_","Listbox with Loading":"_LoadingListbox_","Listbox with Action":"_ActionListbox_","Listbox with custom element":"_CustomListbox_",Example:"_ExampleListbox_"};co.parameters=co.parameters||{};co.parameters.docs=N(v({},co.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:zD,mdxComponentAnnotations:co},t(Km,null))});var GD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicListbox:es,LoadingListbox:ts,ActionListbox:as,CustomListbox:os,ExampleListbox:ns,_BasicListbox_:Ym,_LoadingListbox_:Zm,_ActionListbox_:Qm,_CustomListbox_:Jm,_ExampleListbox_:ey,default:co});const Qi=e=>({components:{Loading:Nn,Frame:Wt,Button:fe},data(){return{isActive:!1}},setup(){return{args:e}},template:`<Frame>
    <Loading v-if="isActive" />
    <br/>
    <Button @click="isActive = !isActive">Toggle loading</Button>
  </Frame>`}),XD={Template:Qi},KD="wrapper";function ty(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(KD,N(v(v({},XD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Feedback indicators / Loading",component:Nn,argTypes:{disabled:{table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Loading"),t("p",null,"The loading component is used to indicate to merchants that a page is loading or an upload is processing."),t(V,{mdxType:"Canvas"},t(H,{name:"Loading",inline:!1,height:"100px",parameters:{docs:{source:{code:_`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}},mdxType:"Story"},Qi.bind({}))),t(ce,{story:"Loading",mdxType:"ArgsTable"}))}ty.isMDXComponent=!0;const Ac=Qi.bind({});Ac.storyName="Loading";Ac.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}};const uo={title:"Components / Feedback indicators / Loading",component:Nn,argTypes:{disabled:{table:{type:{summary:null}}}},includeStories:["loading"]},YD={Loading:"loading"};uo.parameters=uo.parameters||{};uo.parameters.docs=N(v({},uo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:YD,mdxComponentAnnotations:uo},t(ty,null))});var ZD=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Qi,loading:Ac,default:uo}),Hu=Object.freeze,QD=Object.defineProperty,Ji=(e,o)=>Hu(QD(e,"raw",{value:Hu(o||e.slice())})),Uu,ju,Wu,zu;const el=(e,{argTypes:o})=>({components:{ModalSection:Ro,TextContainer:wt,Button:fe,Modal:Sa},data(){return{active:!0}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Modal>`}),on=e=>({components:{Modal:Sa,Button:fe,ModalSection:Ro,TextContainer:wt},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleScrolledToBottom(){alert("Scrolled to bottom")}},template:`
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
  `});on.storyName="With scroll listener";on.parameters={docs:{source:{code:_(Uu||(Uu=Ji([`
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
        `])))}}};const nn=e=>({components:{Modal:Sa,Button:fe,Stack:We,StackItem:vt,TextField:_e,TextContainer:wt,ModalSection:Ro},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleClick(){alert("Copy to clipboard successful")}},template:`
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
    </Modal>`});nn.storyName="With primary action";nn.parameters={docs:{source:{code:_(ju||(ju=Ji([`
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
      `])))}}};const JD={Template:el,scrollExample:on,primaryActionExample:nn},e0="wrapper";function ay(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(e0,N(v(v({},JD),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Overlays / Modal",component:Sa,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Modal"),t("p",null,"Modals are overlays that require merchants to take an action before they can continue interacting with the rest of Shopify. They can be disruptive and should be used thoughtfully and sparingly."),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With primary action"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:nn,height:"500px",inline:!1,name:"_primaryActionExample_",mdxType:"Story"})),t("h3",null,"With scroll listener"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:on,height:"500px",inline:!1,name:"_scrollExample_",mdxType:"Story"})),t("h3",null,"Example"),t(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Modal",inline:!1,height:"500px",args:{colorScheme:"light"},parameters:{docs:{source:{code:_(Wu||(Wu=Ji([`
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
            `])))}}},mdxType:"Story"},el.bind({}))),t(ce,{story:"Modal",mdxType:"ArgsTable"}))}ay.isMDXComponent=!0;const t0=nn,a0=on,tl=el.bind({});tl.storyName="Modal";tl.args={colorScheme:"light"};tl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_(zu||(zu=Ji([`
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
            `])))}}};const po={title:"Components / Overlays / Modal",component:Sa,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_primaryActionExample_","_scrollExample_","modal"]},o0={_primaryActionExample_:"_primaryActionExample_",_scrollExample_:"_scrollExample_",Modal:"modal"};po.parameters=po.parameters||{};po.parameters.docs=N(v({},po.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:o0,mdxComponentAnnotations:po},t(ay,null))});var n0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:el,scrollExample:on,primaryActionExample:nn,_primaryActionExample_:t0,_scrollExample_:a0,modal:tl,default:po});const al=e=>({components:{Frame:Wt,Navigation:Bn,NavigationSection:Ur},setup(){return{navItems:[{url:"#",label:"Home",icon:Fg},{url:"#",label:"Orders",icon:_d},{url:"#",label:"Products",icon:Eg,selected:!0,subNavigationItems:[{url:"#",new:!0,label:"New item"},{url:"#",label:"Active Item",selected:!0},{url:"#",disabled:!0,label:"New item"}]},{url:"#",label:"Marketing",icon:Og,badge:{content:"Warn",status:"warning"}}],navItems2:[{url:"#",label:"Online Store",icon:qg},{url:"/path/to/place",label:"Secondary action",secondaryAction:{url:"#",accessibilityLabel:"View your online store",icon:Rg}}],CirclePlusOutlineMinor:Nd}},template:`
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
  `}),s0={Template:al},i0="wrapper";function oy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(i0,N(v(v({},s0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Navigation / Navigation",component:Bn,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Navigation"),t("p",null,"The navigation component is used to display the primary navigation in the sidebar of the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-frame--frame"},"frame")," of an application. Navigation includes a list of links that merchants use to move between sections of the application."),t(V,{mdxType:"Canvas"},t(H,{name:"Navigation",inline:!1,height:"500px",parameters:{docs:{source:{code:_`
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
          `}}},mdxType:"Story"},al.bind({}))),t(ce,{story:"Navigation",mdxType:"ArgsTable"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation Section")),t("p",null,"A navigation section groups together related navigation items. Navigation sections can be clarified by a heading. Merchants can use a section to easily find navigation items within a specific category."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"items"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-item"},"Item[]")),t("td",{parentName:"tr",align:null},"A collection of navigation items to be rendered inside the section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing a title for the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"fill"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should take up all vertical space available")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"rollup"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-rollup"},"Rollup[]")),t("td",{parentName:"tr",align:null},"An object determining the collapsing behavior of the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-action"},"Action[]")),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"separator"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should have a visual separator")))),t("a",{name:"type-item"}),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Navigation section item")),t("p",null,"The content of the navigation component consists of navigation items. Each item is a link or action a merchant can take."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A location for the navigation item to navigate to when clicked")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matches"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to a closely matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"exactMatch"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to an exactly matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matchPaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing a collection of additional paths for the navigation item to respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"excludePaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing an explicit collection of paths the navigation item should not respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the navigation. Please prefer minor icons here. If a major icon has to be used, set the ",t("inlineCode",{parentName:"td"},"shouldResizeIcon")," prop to true")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"string ","|"," null"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed in a badge next to the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"label"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed as link text in the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"disabled"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is disabled")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"new"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Indicate whether the navigation item is new by adding an indicator dot to the parent and badge to the item (overwritten by the badge prop)")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of a navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"selected"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is the currently-selected item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"shouldResizeIcon"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Will allow for major icons to be displayed at the same size as minor icons")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"subNavigationItems"),t("td",{parentName:"tr",align:null},"SubNavigationItem[]"),t("td",{parentName:"tr",align:null},"A collection of navigation items rendered as nested secondary navigation items")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"secondaryAction"),t("td",{parentName:"tr",align:null},"SecondaryAction"),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to a navigation item")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@click"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on a navigation item")))),t("br",null),t("a",{name:"type-rollup"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section rollup")),t("p",null,"Rollup allows items in a navigation section to roll up and be revealed when they are of use to the merchant."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"after"),t("td",{parentName:"tr",align:null},"number"),t("td",{parentName:"tr",align:null},"A number of items after which the navigation section should be collapsed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"view"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section view action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hide"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section hide action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"activePath"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property representing the current URL of your application")))),t("br",null),t("a",{name:"type-action"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section action")),t("p",null,"Action allows a complementary icon-only action to render next to the section title."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed as the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onClick()"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on the action")))))}oy.isMDXComponent=!0;const kc=al.bind({});kc.storyName="Navigation";kc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
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
          `}}};const mo={title:"Components / Navigation / Navigation",component:Bn,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},includeStories:["navigation"]},l0={Navigation:"navigation"};mo.parameters=mo.parameters||{};mo.parameters.docs=N(v({},mo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:l0,mdxComponentAnnotations:mo},t(oy,null))});var r0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:al,navigation:kc,default:mo}),Gu=Object.freeze,c0=Object.defineProperty,Vs=(e,o)=>Gu(c0(e,"raw",{value:Gu(o||e.slice())})),Xu,Ku,Yu,Zu;const ol=e=>({components:{Card:it,OptionList:In,TextStyle:gt,Icon:re},setup(){const o=C([]);return{changeSelected:i=>{console.log("changeSelected",i)},selected:o,options:[{value:"byward_market",label:"Byward Market"},{id:"centre",value:"centretown",label:"Centretown"},{value:"hintonburg",label:"Hintonburg"},{value:"westboro",label:"Westboro"},{value:"downtown",label:"Downtown"}],FoodMajor:Vg}},template:`
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
  `}),nl=e=>({components:{Card:it,OptionList:In},setup(){const o=C([]);return{args:e,changeSelectedvalue:i=>{console.log("changeSelectedvalue",i)},selectedValue:o,sections:[{options:[{value:"type",label:"Sale item type"},{value:"kind",label:"Sale kind"}]},{title:"Traffic",options:[{value:"source",label:"Traffic referrer source"},{value:"host",label:"Traffic referrer host"},{value:"path",label:"Traffic referrer path"}]}]}},template:`
    <Card>
      <OptionList
        v-bind="args"
        v-model="selectedValue"
        :sections="sections"
        @change="changeSelectedvalue"
      />
    </Card>
    <br/><p><strong>Value:</strong> {{ selectedValue }}</p>
  `}),u0={Template1:ol,Template:nl},d0="wrapper";function ny(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(d0,N(v(v({},u0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Lists and tables / Option List",component:In,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},mdxType:"Meta"}),t("h1",null,"Option List"),t("br",null),t("p",null,"The option list component lets you create a list of grouped items that merchants can pick from. This can include single selection or multiple selection of options. Option list usually appears in a popover, and sometimes in a modal or a sidebar. Option lists are styled differently than ",t("a",{parentName:"p",href:"?path=/docs/components-forms-choice-list"},"choice lists")," and should not be used within a form, but as a standalone menu."),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Simple option list")),t("p",null,"Use sections when you have multiple groups of similar selectable items."),t(V,{mdxType:"Canvas"},t(H,{name:"Option list",parameters:{docs:{source:{state:"close",code:_(Xu||(Xu=Vs([`
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
          `])))}}},mdxType:"Story"},ol.bind({}))),t("h3",null,t("strong",{parentName:"h3"},"Option list with sections")),t("p",null,"Use sections when you have multiple groups of similar selectable items."),t(V,{mdxType:"Canvas"},t(H,{name:"Option list with sections",args:{allowMultiple:!0},parameters:{docs:{source:{code:_(Ku||(Ku=Vs([`
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
          `])))}}},mdxType:"Story"},nl.bind({}))),t(ce,{story:"Option list with sections",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"OptionDescriptor Props")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"value"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Value of the option")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"label"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Display label for the option")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"disabled"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether the option is disabled or not")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"active"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Whether the option is active or not")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Unique identifier for the option")))),t("br",null),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"SectionDescriptor Props")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"options"),t("td",{parentName:"tr",align:null},"OptionDescriptor[]"),t("td",{parentName:"tr",align:null},"Collection of options within the section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Section title")))))}ny.isMDXComponent=!0;const Lc=ol.bind({});Lc.storyName="Option list";Lc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_(Yu||(Yu=Vs([`
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
          `])))}}};const sl=nl.bind({});sl.storyName="Option list with sections";sl.args={allowMultiple:!0};sl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_(Zu||(Zu=Vs([`
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
          `])))}}};const yo={title:"Components / Lists and tables / Option List",component:In,argTypes:{modelValue:{table:{disable:!0}},allowMultiple:{table:{defaultValue:{summary:"false"}}},options:{table:{type:{summary:"OptionsDescriptor[]"}},control:{disable:!0}},role:{table:{type:{summary:"'listbox' | 'combobox' | string"}}},sections:{table:{type:{summary:"SectionDescriptor[]"}},control:{disable:!0}},verticalAlign:{control:{type:"select",options:["top","center","bottom"]},table:{defaultValue:{summary:"top"},type:{summary:"top | center | bottom"}}},"update:modelValue":{table:{disable:!0}},change:{description:"Callback when selection is changed",control:{disable:!0},table:{type:{summary:"(value: string[]) => void"}}},default:{table:{disable:!0}},"option-label-[option-id]":{description:"Slot to display label for the option. This will override the default option label prop.",table:{category:"slots",type:{summary:"Example: option-label-kind"}}},"option-media-[option-id]":{description:"Media to display to the left of the option content. Defined by option id value.",table:{category:"slots",type:{summary:"Example: option-media-kind"}}}},includeStories:["optionList","optionListWithSections"]},p0={"Option list":"optionList","Option list with sections":"optionListWithSections"};yo.parameters=yo.parameters||{};yo.parameters.docs=N(v({},yo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:p0,mdxComponentAnnotations:yo},t(ny,null))});var m0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template1:ol,Template:nl,optionList:Lc,optionListWithSections:sl,default:yo});const il=e=>({components:{Page:li,Badge:at,Card:it,Button:fe},setup(){return{args:e,handleClick:()=>{console.log("click")}}},template:`
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
  `}),y0={Template:il},g0="wrapper";function sy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(g0,N(v(v({},y0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Structure / Page",component:li,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Page"),t("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),t("h4",null,t("strong",{parentName:"h4"},"Related components")),t("ul",null,t("li",{parentName:"ul"},"To lay out the content within a page, use the ",t("a",{parentName:"li",href:"?path=/docs/components-structure-layout"},"layout component"),"."),t("li",{parentName:"ul"},"To add pagination within the context of a list or other page content, use the ",t("a",{parentName:"li",href:"?path=/docs/components-navigation-pagination"},"pagination component"),"."),t("li",{parentName:"ul"},"To add primary and secondary calls to action at the bottom of a page, see the ",t("a",{parentName:"li",href:"?path=/docs/components-structure-page-actions"},"page actions component"),".")),t(V,{mdxType:"Canvas"},t(H,{name:"Page",inline:!1,height:"250px",args:{fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1},parameters:{docs:{source:{code:_`
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
          `}}},mdxType:"Story"},il.bind({}))),t(ce,{story:"Page",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Breadcrumbs Props")),t("p",null,t("strong",{parentName:"p"},"Example: ")),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// CallbackAction
<Page :breadcrumbs="[{ content: 'Order', onAction: handleAction }]"></Page>

// LinkAction
<Page :breadcrumbs="[{ content: 'Products', url: '/products' }]"></Page>
`)),t("p",null,t("inlineCode",{parentName:"p"},"CallbackAction")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A unique identifier for the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Content the action displays")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onAction()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when an action takes place")))),t("br",null),t("p",null,t("inlineCode",{parentName:"p"},"LinkAction")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A unique identifier for the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Content the action displays")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A destination to link to")))),t("br",null),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Pagination Props")),t("p",null,"See the ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-pagination"},"pagination component")," for more details."),t("p",null,t("strong",{parentName:"p"},"Example: ")),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`<Page :pagination="{ hasPrevious: true, hasNext: true, onPrevious: handlePrevious, onNext: handleNext }"></Page>
`)),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextKeys"),t("td",{parentName:"tr",align:null},"Key[]"),t("td",{parentName:"tr",align:null},"Keyboard shortcuts for the next button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousKeys"),t("td",{parentName:"tr",align:null},"Key[]"),t("td",{parentName:"tr",align:null},"Keyboard shortcuts for the previous button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextTooltip"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Tooltip for the next button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousTooltip"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Tooltip for the previous button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextURL"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"The URL of the next page")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousURL"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"The URL of the previous page")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hasNext"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether there is a next page to show")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hasPrevious"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether there is a previous page to show")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Accessible label for the pagination")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabels"),t("td",{parentName:"tr",align:null},"AccessibilityLabels"),t("td",{parentName:"tr",align:null},"Accessible labels for the buttons and UnstyledLinks")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onNext()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when next button is clicked")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onPrevious()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when previous button is clicked")))))}sy.isMDXComponent=!0;const ll=il.bind({});ll.storyName="Page";ll.args={fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1};ll.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
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
          `}}};const go={title:"Components / Structure / Page",component:li,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["page"]},h0={Page:"page"};go.parameters=go.parameters||{};go.parameters.docs=N(v({},go.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:h0,mdxComponentAnnotations:go},t(sy,null))});var b0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:il,page:ll,default:go}),Qu=Object.freeze,f0=Object.defineProperty,iy=(e,o)=>Qu(f0(e,"raw",{value:Qu(o||e.slice())})),Ju,ed;const rl=e=>({components:{PageActions:ri},setup(){return{args:e,handleClick:()=>{console.log("click")}}},template:`
    <PageActions
      :primaryAction="{ content: 'Save', onClick: handleClick }"
      :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
    />
  `}),v0={Template:rl},x0="wrapper";function ly(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(x0,N(v(v({},v0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Structure / Page Actions",component:ri,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Page Actions"),t("p",null,"Page actions let merchants take key actions at the bottom of specific pages in the interface. This is important because sometimes the primary call to action is hard to access when merchants are at the bottom of a page."),t(V,{mdxType:"Canvas"},t(H,{name:"Page Actions",height:"100px",parameters:{docs:{source:{code:_(Ju||(Ju=iy([`
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
          `])))}}},mdxType:"Story"},rl.bind({}))),t(ce,{story:"Page Actions",mdxType:"ArgsTable"}))}ly.isMDXComponent=!0;const wc=rl.bind({});wc.storyName="Page Actions";wc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_(ed||(ed=iy([`
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
          `])))}}};const ho={title:"Components / Structure / Page Actions",component:ri,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},includeStories:["pageActions"]},T0={"Page Actions":"pageActions"};ho.parameters=ho.parameters||{};ho.parameters.docs=N(v({},ho.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:T0,mdxComponentAnnotations:ho},t(ly,null))});var S0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:rl,pageActions:wc,default:ho}),td=Object.freeze,C0=Object.defineProperty,ry=(e,o)=>td(C0(e,"raw",{value:td(o||e.slice())})),ad,od;const cl=e=>({components:{Pagination:Dn},setup(){return{args:e,handlePrevious:()=>{console.log("previous")},handleNext:()=>{console.log("next")}}},template:`
    <Pagination
      v-bind="args"
      @previous="handlePrevious"
      @next="handleNext"
    >
      Results
    </Pagination>
  `}),A0={Template:cl},k0="wrapper";function cy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(k0,N(v(v({},A0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Navigation / Pagination",component:Dn,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Pagination"),t("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),t(V,{mdxType:"Canvas"},t(H,{name:"Pagination",inline:!1,height:"100px",args:{hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"},parameters:{docs:{source:{code:_(ad||(ad=ry([`
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
          `])))}}},mdxType:"Story"},cl.bind({}))),t(ce,{story:"Pagination",mdxType:"ArgsTable"}))}cy.isMDXComponent=!0;const ul=cl.bind({});ul.storyName="Pagination";ul.args={hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"};ul.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_(od||(od=ry([`
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
          `])))}}};const bo={title:"Components / Navigation / Pagination",component:Dn,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["pagination"]},L0={Pagination:"pagination"};bo.parameters=bo.parameters||{};bo.parameters.docs=N(v({},bo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:L0,mdxComponentAnnotations:bo},t(cy,null))});var w0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:cl,pagination:ul,default:bo}),nd=Object.freeze,P0=Object.defineProperty,dl=(e,o)=>nd(P0(e,"raw",{value:nd(o||e.slice())})),sd,id,ld,rd;const pl=(e,{argTypes:o})=>({components:{ActionList:et,Button:fe,Popover:tt},data(){return{active:!0,items:[{content:"Import file"},{content:"Export file"}]}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Popover>`}),sn=(e,{argTypes:o})=>({components:{ActionList:et,Button:fe,Popover:tt,Pane:Gs,PopoverSection:vn},data(){return{active:!0,items:[{content:"Online store"},{content:"Facebook"},{content:"Shopify POS"}]}},methods:{toggleActive(){this.active=!this.active}},template:` <div>
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
  </div>`});sn.storyName="With content and actions";sn.parameters={docs:{source:{code:_(sd||(sd=dl([`
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
        `])))}}};const ln=(e,{argTypes:o})=>({components:{Button:fe,Popover:tt,FormLayout:Bt,TextField:_e,Select:Xo},data(){return{active:!0,options:[{label:"Tagged with",value:"Tagged with"}],selectedValue:"Tagged with",tagValue:""}},methods:{toggleActive(){this.active=!this.active},handleTagValueChange(n){this.tagValue=n}},template:` <div>
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
  </div>`});ln.storyName="With form components";ln.parameters={docs:{source:{code:_(id||(id=dl([`
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
        `])))}}};const _0={Template:pl,ContentAndActions:sn,FormComponents:ln},M0="wrapper";function uy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(M0,N(v(v({},_0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Overlays / Popover",component:tt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Popover"),t("p",null,"Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page."),t("p",null,"For ActionList usages, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--action-list"},"ActionList component.")),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With Content and Actions"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:sn,height:"280px",inline:!1,name:"_ContentAndActions_",mdxType:"Story"})),t("h3",null,"With Form Components"),t(V,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ln,height:"280px",inline:!1,name:"_FormComponents_",mdxType:"Story"})),t("h3",null,"Example"),t(V,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Popover",inline:!1,height:"300px",args:{colorScheme:"light"},parameters:{docs:{source:{code:_(ld||(ld=dl([`
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
          `])))}}},mdxType:"Story"},pl.bind({}))),t(ce,{story:"Popover",mdxType:"ArgsTable"}))}uy.isMDXComponent=!0;const N0=sn,B0=ln,ml=pl.bind({});ml.storyName="Popover";ml.args={colorScheme:"light"};ml.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_(rd||(rd=dl([`
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
          `])))}}};const fo={title:"Components / Overlays / Popover",component:tt,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_ContentAndActions_","_FormComponents_","popover"]},I0={_ContentAndActions_:"_ContentAndActions_",_FormComponents_:"_FormComponents_",Popover:"popover"};fo.parameters=fo.parameters||{};fo.parameters.docs=N(v({},fo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:I0,mdxComponentAnnotations:fo},t(uy,null))});var D0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:pl,ContentAndActions:sn,FormComponents:ln,_ContentAndActions_:N0,_FormComponents_:B0,popover:ml,default:fo});const yl=e=>({components:{ProgressBar:ci},setup(){return{args:e}},template:'<ProgressBar v-bind="args"/>'}),$0={Template:yl},F0="wrapper";function dy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(F0,N(v(v({},$0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Feedback indicators / Progress bar",component:ci,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Progress bar"),t("p",null,"The progress bar component is used to visually represent the completion of a task or operation. It shows how much of the task has been completed and how much is still left."),t("br",null),t("br",null),t(V,{mdxType:"Canvas"},t(H,{name:"Progress bar",height:"60px",args:{progress:75},parameters:{docs:{source:{code:_`
            <ProgressBar v-bind="props"/>
          `}}},mdxType:"Story"},yl.bind({}))),t(ce,{story:"Progress bar",mdxType:"ArgsTable"}))}dy.isMDXComponent=!0;const gl=yl.bind({});gl.storyName="Progress bar";gl.args={progress:75};gl.parameters={storySource:{source:`args => ({
  components: {
    ProgressBar
  },

  setup() {
    return {
      args
    };
  },

  template: \`<ProgressBar v-bind="args"/>\`
})`},docs:{source:{code:_`
            <ProgressBar v-bind="props"/>
          `}}};const vo={title:"Components / Feedback indicators / Progress bar",component:ci,argTypes:{size:{name:"size",description:"Size of ProgressBar",options:["small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},color:{name:"color",description:"Color of ProgressBar",options:["highlight","primary","success","critical"],control:{type:"select"},table:{defaultValue:{summary:"highlight"},type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["progressBar"]},E0={"Progress bar":"progressBar"};vo.parameters=vo.parameters||{};vo.parameters.docs=N(v({},vo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:E0,mdxComponentAnnotations:vo},t(dy,null))});var O0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:yl,progressBar:gl,default:vo});const ss=e=>({components:{RadioButton:Ln},setup(){return{args:e}},template:`
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
  </div>`,data(){return{demoValue:"disabled"}}});ss.parameters={docs:{source:{code:_`
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
      `}}};const q0={Template:ss},R0="wrapper";function py(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(R0,N(v(v({},q0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Radio Button",component:Ln,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Radio button"),t("p",null,"Use radio buttons to present each item in a list of options where merchants must make a single selection."),t(V,{mdxType:"Canvas"},t(H,{story:ss,name:"Radio Button",mdxType:"Story"})),t(ce,{story:"Radio Button",mdxType:"ArgsTable"}))}py.isMDXComponent=!0;const my=ss;my.storyName="Radio Button";const xo={title:"Components / Forms / Radio Button",component:Ln,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_Template_"]},V0={"Radio Button":"_Template_"};xo.parameters=xo.parameters||{};xo.parameters.docs=N(v({},xo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:V0,mdxComponentAnnotations:xo},t(py,null))});var H0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ss,_Template_:my,default:xo}),cd=Object.freeze,U0=Object.defineProperty,Hs=(e,o)=>cd(U0(e,"raw",{value:cd(o||e.slice())})),ud,dd,pd,md;const hl=e=>({components:{RangeSlider:Ca,Card:it},setup(){const o=C(30);return{args:e,rangeValue:o}},template:`
    <Card sectioned>
      <template #title>Text color</template>
      <RangeSlider v-model="rangeValue" v-bind="args">
        <template #prefix>Hue</template>
        <template #suffix>{{ rangeValue }}</template>
      </RangeSlider>
    </Card>
  `}),bl=e=>({components:{RangeSlider:Ca,Card:it},setup(){const o=C(0);return{args:e,rangeValue:o}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <br/><p>Value: {{ rangeValue }}</p>
    </Card>
  `}),fl=e=>({components:{RangeSlider:Ca,Card:it,Stack:We,TextField:_e},setup(){const o=C([900,1e3]),n=C("900"),s=C("1000");return{args:e,rangeValue:o,minValue:n,maxValue:s,handleMinChange:p=>{p.target.value<o.value[1]&&(o.value[0]=parseInt(p.target.value))},handleMaxChange:p=>{p.target.value>o.value[0]&&(o.value[1]=parseInt(p.target.value))},handleRangeChange:p=>{n.value=`${p[0]}`,s.value=`${p[1]}`}}},template:`
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
  `}),vl=e=>({components:{RangeSlider:Ca,Card:it},setup(){const o=C(10);return{args:e,rangeValue:o}},template:`
    <Card sectioned>
      <template #title>Background color</template>
      <RangeSlider v-model="rangeValue" v-bind="args" />
      <p>Value: {{ rangeValue }}</p>
    </Card>
  `}),j0={SlotTemplate:hl,StepTemplate:bl,DualTemplate:fl,Template:vl},W0="wrapper";function yy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(W0,N(v(v({},j0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Range Slider",component:Ca,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Range slider"),t("p",null,"A range slider is an input field that merchants can use to select a numeric value within a given range (minimum and maximum values)."),t("font",{color:"#FF7900"},t("strong",null,"Note:"))," The ",t("code",null,"output")," tooltip position is displayed incorrectly on demo because of the scss from Shopify.",t("br",null),t(V,{mdxType:"Canvas"},t(H,{name:"Prefix and suffix elements",height:"150px",args:{min:0,max:360,label:"Hue color mix",output:!0},parameters:{docs:{source:{state:"close",code:_(ud||(ud=Hs([`
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
          `])))}}},mdxType:"Story"},hl.bind({}))),t("h3",null,t("strong",{parentName:"h3"},"Step increamented range control")),t(V,{mdxType:"Canvas"},t(H,{name:"Range slider with steps",height:"150px",args:{min:-20,max:20,step:4,label:"Logo offset",output:!0},parameters:{docs:{source:{state:"close",code:_`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" :min="-20" :max="20" :step="4" label="Logo offset" output />
            </Card>
          `}}},mdxType:"Story"},bl.bind({}))),t("h3",null,t("strong",{parentName:"h3"},"Dual thumb range slider")),t(V,{mdxType:"Canvas"},t(H,{name:"Dual thumb range slider",height:"150px",args:{min:0,max:2e3,step:10,label:"Money spent is between",output:!0},parameters:{docs:{source:{state:"close",code:_(dd||(dd=Hs([`
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
          `])))}}},mdxType:"Story"},fl.bind({}))),t(V,{mdxType:"Canvas"},t(H,{name:"Range slider",height:"150px",args:{label:"Opacity percentage",output:!1},parameters:{docs:{source:{code:_`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" label="Opacity percentage" />
            </Card>
          `}}},mdxType:"Story"},vl.bind({}))),t(ce,{story:"Range slider",mdxType:"ArgsTable"}))}yy.isMDXComponent=!0;const xl=hl.bind({});xl.storyName="Prefix and suffix elements";xl.args={min:0,max:360,label:"Hue color mix",output:!0};xl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_(pd||(pd=Hs([`
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
          `])))}}};const Tl=bl.bind({});Tl.storyName="Range slider with steps";Tl.args={min:-20,max:20,step:4,label:"Logo offset",output:!0};Tl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" :min="-20" :max="20" :step="4" label="Logo offset" output />
            </Card>
          `}}};const Sl=fl.bind({});Sl.storyName="Dual thumb range slider";Sl.args={min:0,max:2e3,step:10,label:"Money spent is between",output:!0};Sl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_(md||(md=Hs([`
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
          `])))}}};const Cl=vl.bind({});Cl.storyName="Range slider";Cl.args={label:"Opacity percentage",output:!1};Cl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <Card sectioned>
              <template #title>Background color</template>
              <RangeSlider v-model="rangeValue" label="Opacity percentage" />
            </Card>
          `}}};const To={title:"Components / Forms / Range Slider",component:Ca,argTypes:{default:{table:{disable:!0}},label:{description:"Label for the range input",control:{disable:!0},table:{type:{summary:null}}},"help-text":{description:"Additional text to aid in use",control:{disable:!0},table:{type:{summary:null}}},prefix:{description:"Element to display before the input",control:{disable:!0},table:{type:{summary:null}}},suffix:{description:"Element to display after the input",control:{disable:!0},table:{type:{summary:null}}},modelValue:{table:{type:{summary:"number | [number, number]"}}},error:{table:{type:{summary:"string"}}},labelAction:{table:{type:{summary:"LabelledProps['action']"}}},blur:{description:"Callback when focus is removed",table:{type:{summary:"() => void"}},control:{disable:!0}},focus:{description:"Callback when range input is focused",table:{type:{summary:"() => void"}},control:{disable:!0}},change:{description:"Callback when the range input is changed",table:{type:{summary:"(value, id) => void"}},control:{disable:!0}},"update:modelValue":{table:{disable:!0},control:{disable:!0}}},includeStories:["prefixAndSuffixElements","rangeSliderWithSteps","dualThumbRangeSlider","rangeSlider"]},z0={"Prefix and suffix elements":"prefixAndSuffixElements","Range slider with steps":"rangeSliderWithSteps","Dual thumb range slider":"dualThumbRangeSlider","Range slider":"rangeSlider"};To.parameters=To.parameters||{};To.parameters.docs=N(v({},To.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:z0,mdxComponentAnnotations:To},t(yy,null))});var G0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SlotTemplate:hl,StepTemplate:bl,DualTemplate:fl,Template:vl,prefixAndSuffixElements:xl,rangeSliderWithSteps:Tl,dualThumbRangeSlider:Sl,rangeSlider:Cl,default:To});const Al=e=>({components:{Scrollable:jt},template:`
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
  </Scrollable>`}),is=e=>({components:{Scrollable:jt,ScrollTo:Ws},template:`
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
  </Scrollable>`});is.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const ls=e=>({components:{Scrollable:jt},setup(){return{args:e}},template:`
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
  </Scrollable>`});ls.parameters={docs:{source:{code:_`
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
      `}}};const X0={DefaultScrollable:Al,ScrollToExample:is,Example:ls},K0="wrapper";function gy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(K0,N(v(v({},X0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Behavior / Scrollable",component:jt,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},mdxType:"Meta"}),t("h1",null,"Scrollable"),t("p",null,`The scrollable component is a container for long form content,
such as terms of service, that allows for scrolling so merchants can expose more text as they read.`),t("br",null),t("br",null),t("h3",null,"Default scrollable container"),t("p",null,`Use when you need to make a region within the page independently scrollable.
It's often used in modals and other panes where it's helpful to provide an extra visual cue that content exists below or above the fold.`),t(V,{mdxType:"Canvas"},t(H,{story:Al,name:"Default scrollable container",mdxType:"Story"})),t("h3",null,"Scroll to child component"),t("p",null,"Use when you need to programmatically scroll a child component into view in the scrollable container."),t(V,{mdxType:"Canvas"},t(H,{story:is,name:"Scroll to child component",mdxType:"Story"})),t("h3",null,"Example"),t(V,{style:{backgroundColor:"#fff"},mdxType:"Canvas"},t(H,{story:ls,name:"Example",height:"150px",mdxType:"Story"})),t(ce,{story:"Example",mdxType:"ArgsTable"}))}gy.isMDXComponent=!0;const hy=Al;hy.storyName="Default scrollable container";const by=is;by.storyName="Scroll to child component";const fy=ls;fy.storyName="Example";const So={title:"Components / Behavior / Scrollable",component:jt,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},includeStories:["_DefaultScrollable_","_ScrollToExample_","_Example_"]},Y0={"Default scrollable container":"_DefaultScrollable_","Scroll to child component":"_ScrollToExample_",Example:"_Example_"};So.parameters=So.parameters||{};So.parameters.docs=N(v({},So.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:Y0,mdxComponentAnnotations:So},t(gy,null))});var Z0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultScrollable:Al,ScrollToExample:is,Example:ls,_DefaultScrollable_:hy,_ScrollToExample_:by,_Example_:fy,default:So});const kl=e=>({components:{Select:Xo,Icon:re},setup(){const o=Hg,n=C("");return{args:e,selectValue:n,iconHintMajor:o}},template:`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}`}),Q0={Template:kl},J0="wrapper";function vy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(J0,N(v(v({},Q0),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Select",component:Xo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Select"),t("p",null,"Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface."),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"select")," element in html."),t(V,{mdxType:"Canvas"},t(H,{name:"Select",args:{placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"},parameters:{docs:{source:{code:_`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}},mdxType:"Story"},kl.bind({}))),t(ce,{story:"Select",mdxType:"ArgsTable"}))}vy.isMDXComponent=!0;const Ll=kl.bind({});Ll.storyName="Select";Ll.args={placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"};Ll.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}};const Co={title:"Components / Forms / Select",component:Xo,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},includeStories:["select"]},e1={Select:"select"};Co.parameters=Co.parameters||{};Co.parameters.docs=N(v({},Co.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:e1,mdxComponentAnnotations:Co},t(vy,null))});var t1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:kl,select:Ll,default:Co});const wl=e=>({components:{SkeletonBodyText:$n},setup(){return{args:e}},template:`
    <SkeletonBodyText v-bind:="args"/>
  `}),a1={Template:wl},o1="wrapper";function xy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(o1,N(v(v({},a1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Feedback indicators",component:$n,mdxType:"Meta"}),t("h1",null,"Skeleton body text"),t("p",null,"Skeleton body text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),t(V,{mdxType:"Canvas"},t(H,{name:"Skeleton Body Text",args:{lines:3},parameters:{docs:{source:{code:_`
            <SkeletonBodyText :lines="3"/>
          `}}},mdxType:"Story"},wl.bind({}))),t(ce,{story:"Skeleton Body Text",mdxType:"ArgsTable"}))}xy.isMDXComponent=!0;const Pl=wl.bind({});Pl.storyName="Skeleton Body Text";Pl.args={lines:3};Pl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <SkeletonBodyText :lines="3"/>
          `}}};const Ao={title:"Components / Feedback indicators",component:$n,includeStories:["skeletonBodyText"]},n1={"Skeleton Body Text":"skeletonBodyText"};Ao.parameters=Ao.parameters||{};Ao.parameters.docs=N(v({},Ao.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:n1,mdxComponentAnnotations:Ao},t(xy,null))});var s1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:wl,skeletonBodyText:Pl,default:Ao});const _l=e=>({components:{SkeletonDisplayText:Fn},setup(){return{args:e}},template:`
    <SkeletonDisplayText v-bind="args"/>
  `}),i1={Template:_l},l1="wrapper";function Ty(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(l1,N(v(v({},i1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Feedback indicators",component:Fn,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Skeleton display text"),t("p",null,"Skeleton display text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),t(V,{mdxType:"Canvas"},t(H,{name:"Skeleton Display Text",args:{size:"medium"},parameters:{docs:{source:{code:_`
            <SkeletonDisplayText size="medium"/>
          `}}},mdxType:"Story"},_l.bind({}))),t(ce,{story:"Skeleton Display Text",mdxType:"ArgsTable"}))}Ty.isMDXComponent=!0;const Ml=_l.bind({});Ml.storyName="Skeleton Display Text";Ml.args={size:"medium"};Ml.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <SkeletonDisplayText size="medium"/>
          `}}};const ko={title:"Components / Feedback indicators",component:Fn,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},includeStories:["skeletonDisplayText"]},r1={"Skeleton Display Text":"skeletonDisplayText"};ko.parameters=ko.parameters||{};ko.parameters.docs=N(v({},ko.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:r1,mdxComponentAnnotations:ko},t(Ty,null))});var c1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:_l,skeletonDisplayText:Ml,default:ko});const Nl=(e,{argTypes:o})=>({components:{Spinner:ea},setup(){return{args:e}},template:'<Spinner v-bind="args"/>'}),u1={Template:Nl},d1="wrapper";function Sy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(d1,N(v(v({},u1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Feedback indicators / Spinner",component:ea,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Spinner"),t("p",null,"Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can\u2019t be represented with skeleton loading components, like for data charts."),t(V,{mdxType:"Canvas"},t(H,{name:"Spinner",height:"60px",args:{accessibilityLabel:"Spinner example",size:"large"},parameters:{docs:{source:{code:_`
            <Spinner v-bind="props"/>
          `}}},mdxType:"Story"},Nl.bind({}))),t(ce,{story:"Spinner",mdxType:"ArgsTable"}))}Sy.isMDXComponent=!0;const Bl=Nl.bind({});Bl.storyName="Spinner";Bl.args={accessibilityLabel:"Spinner example",size:"large"};Bl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <Spinner v-bind="props"/>
          `}}};const Lo={title:"Components / Feedback indicators / Spinner",component:ea,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["spinner"]},p1={Spinner:"spinner"};Lo.parameters=Lo.parameters||{};Lo.parameters.docs=N(v({},Lo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:p1,mdxComponentAnnotations:Lo},t(Sy,null))});var m1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Nl,spinner:Bl,default:Lo});const Il=(e,{argTypes:o})=>({components:{Stack:We,StackItem:vt,Badge:at},setup(){return{args:e}},template:`<Stack v-bind="args">
    <Badge> Paid </Badge>
    <Badge> Processing </Badge>
    <Badge> Fulfilled </Badge>
    <Badge> Completed </Badge>
  </Stack>`}),rn=(e,{argTypes:o})=>({components:{Stack:We,StackItem:vt,Badge:at},template:`<Stack noItemWrap>
    <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
    <StackItem> <Badge> Processing </Badge> </StackItem>
    <StackItem> <Badge> Completed </Badge> </StackItem>
  </Stack>`});rn.storyName="Fill the remaining space";rn.parameters={docs:{source:{code:_`
        <Stack noItemWrap>
          <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
          <StackItem> <Badge> Processing </Badge> </StackItem>
          <StackItem> <Badge> Completed </Badge> </StackItem>
        </Stack>
      `}}};const y1={Template:Il,SingleFillItem:rn},g1="wrapper";function Cy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(g1,N(v(v({},y1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Structure / Stack",component:We,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Stack"),t("p",null,"Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack\u2019s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack."),t("br",null),t("br",null),t("h3",null,"A single item fills the remaining space"),t(V,{mdxType:"Canvas"},t(H,{story:rn,height:"65px",name:"_SingleFillItem_",mdxType:"Story"})),t("h3",null,"Example"),t(V,{mdxType:"Canvas"},t(H,{name:"Stack",height:"60px",parameters:{docs:{source:{code:_`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}},mdxType:"Story"},Il.bind({}))),t(ce,{story:"Stack",mdxType:"ArgsTable"}))}Cy.isMDXComponent=!0;const h1=rn,Pc=Il.bind({});Pc.storyName="Stack";Pc.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}};const wo={title:"Components / Structure / Stack",component:We,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SingleFillItem_","stack"]},b1={_SingleFillItem_:"_SingleFillItem_",Stack:"stack"};wo.parameters=wo.parameters||{};wo.parameters.docs=N(v({},wo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:b1,mdxComponentAnnotations:wo},t(Cy,null))});var f1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Il,SingleFillItem:rn,_SingleFillItem_:h1,stack:Pc,default:wo});const Dl=e=>({components:{Subheading:oa},setup(){return{args:e}},template:'<Subheading v-bind="args">Accounts</Subheading>'}),v1={Template:Dl},x1="wrapper";function Ay(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(x1,N(v(v({},v1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Titles and text  / Subheading",component:oa,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Subheading"),t("p",null,"Subheadings are used for the title of any sub-sections in top-level page sections."),t(V,{mdxType:"Canvas"},t(H,{name:"Subheading",inline:!1,height:"30px",args:{element:"h3"},parameters:{docs:{source:{code:_`
            <Subheading>Accounts</Subheading>
          `}}},mdxType:"Story"},Dl.bind({}))),t(ce,{story:"Subheading",mdxType:"ArgsTable"}))}Ay.isMDXComponent=!0;const $l=Dl.bind({});$l.storyName="Subheading";$l.args={element:"h3"};$l.parameters={storySource:{source:`args => ({
  components: {
    Subheading
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Subheading v-bind="args">Accounts</Subheading>\`
})`},docs:{source:{code:_`
            <Subheading>Accounts</Subheading>
          `}}};const Po={title:"Components / Titles and text  / Subheading",component:oa,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},includeStories:["subheading"]},T1={Subheading:"subheading"};Po.parameters=Po.parameters||{};Po.parameters.docs=N(v({},Po.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:T1,mdxComponentAnnotations:Po},t(Ay,null))});var S1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Dl,subheading:$l,default:Po}),yd=Object.freeze,C1=Object.defineProperty,ky=(e,o)=>yd(C1(e,"raw",{value:yd(o||e.slice())})),gd,hd;const Fl=e=>({components:{Tabs:ui,CardSection:kn,Badge:at,Card:it},setup(){const o=C(0);return{args:e,selectedTab:o,handleTabChange:i=>{o.value=i},tabs:[{id:"all-customers-1",content:"All",accessibilityLabel:"All customers",panelID:"all-customers-content-1"},{id:"accepts-marketing-1",content:"Accepts marketing",panelID:"accepts-marketing-content-1"},{id:"repeat-customers-1",content:"Repeat customers",panelID:"repeat-customers-content-1"}]}},template:`
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
  `}),A1={Template:Fl},k1="wrapper";function Ly(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(k1,N(v(v({},A1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Navigation / Tabs",component:ui,argTypes:{default:{table:{disable:!0}},selected:{control:{disable:!0}},tabs:{table:{type:{summary:"TabDescriptor[]"}},control:{disable:!0}},select:{table:{type:{summary:"(selectedTabIndex: number) => void"}}},"#tab-id":{description:"Slot to show content of the tab. This slot will override the `content` prop of tab.",table:{category:"slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Tabs"),t("p",null,"Use to alternate among related views within the same context."),t("br",null),t(V,{mdxType:"Canvas"},t(H,{name:"Tabs",height:"200px",args:{fitted:!1},parameters:{docs:{source:{state:"close",code:_(gd||(gd=ky([`
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
          `])))}}},mdxType:"Story"},Fl.bind({}))),t(ce,{story:"Tabs",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"TabDescriptor Props")),t("pre",null,t("code",{parentName:"pre",className:"language-js"},`/** A unique identifier for the tab */
id: string;
/** A destination to link to */
url?: string;
/** Content for the tab */
content: string;
/** A unique identifier for the panel */
panelID?: string;
/** Visually hidden text for screen readers */
accessibilityLabel?: string;
`)))}Ly.isMDXComponent=!0;const El=Fl.bind({});El.storyName="Tabs";El.args={fitted:!1};El.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_(hd||(hd=ky([`
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
          `])))}}};const _o={title:"Components / Navigation / Tabs",component:ui,argTypes:{default:{table:{disable:!0}},selected:{control:{disable:!0}},tabs:{table:{type:{summary:"TabDescriptor[]"}},control:{disable:!0}},select:{table:{type:{summary:"(selectedTabIndex: number) => void"}}},"#tab-id":{description:"Slot to show content of the tab. This slot will override the `content` prop of tab.",table:{category:"slots",type:{summary:null}}}},includeStories:["tabs"]},L1={Tabs:"tabs"};_o.parameters=_o.parameters||{};_o.parameters.docs=N(v({},_o.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:L1,mdxComponentAnnotations:_o},t(Ly,null))});var w1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Fl,tabs:El,default:_o}),bd=Object.freeze,P1=Object.defineProperty,wy=(e,o)=>bd(P1(e,"raw",{value:bd(o||e.slice())})),fd,vd;const Ol=e=>({components:{Tag:On},setup(){return{args:e}},methods:{removeHandle(){alert("Removed")},clickHandle(){alert("Clicked")}},template:`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>`}),_1={Template:Ol},M1="wrapper";function Py(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(M1,N(v(v({},_1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Tag",component:On,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Tag"),t("p",null,"Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants."),t(V,{mdxType:"Canvas"},t(H,{name:"Tag",height:"30px",args:{disabled:!1},parameters:{docs:{source:{code:_(fd||(fd=wy([`
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
          `])))}}},mdxType:"Story"},Ol.bind({}))),t(ce,{story:"Tag",mdxType:"ArgsTable"}))}Py.isMDXComponent=!0;const ql=Ol.bind({});ql.storyName="Tag";ql.args={disabled:!1};ql.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_(vd||(vd=wy([`
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
          `])))}}};const Mo={title:"Components / Forms / Tag",component:On,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["tag"]},N1={Tag:"tag"};Mo.parameters=Mo.parameters||{};Mo.parameters.docs=N(v({},Mo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:N1,mdxComponentAnnotations:Mo},t(Py,null))});var B1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ol,tag:ql,default:Mo});const rs=e=>({components:{TextContainer:wt},setup(){return{args:e}},template:`
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
  `});rs.parameters={docs:{source:{code:_`
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
      `}}};const I1={Template:rs},D1="wrapper";function _y(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(D1,N(v(v({},I1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Titles and text / Text container",component:wt,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Text container"),t("p",null,"A text container is used to wrap text elements such as paragraphs, headings, and lists to give them vertical spacing."),t(V,{mdxType:"Canvas"},t(H,{story:rs,name:"Text container",height:"250px",mdxType:"Story"})),t(ce,{story:"Text container",mdxType:"ArgsTable"}))}_y.isMDXComponent=!0;const My=rs;My.storyName="Text container";const No={title:"Components / Titles and text / Text container",component:wt,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},$1={"Text container":"_Template_"};No.parameters=No.parameters||{};No.parameters.docs=N(v({},No.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:$1,mdxComponentAnnotations:No},t(_y,null))});var F1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:rs,_Template_:My,default:No});const cs=e=>({components:{TextField:_e},template:`
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
  `,data(){return{name:"Polaris"}}});cs.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const us=(e,{argTypes:o})=>({components:{TextField:_e},template:`
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
  </div>`,data(){return{numberData:"1"}}});us.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const ds=(e,{argTypes:o})=>({components:{TextField:_e},template:`
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
  </div>`,data(){return{address:"156 Xa Dan 2"}}});ds.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const ps=(e,{argTypes:o})=>({components:{TextField:_e,ChoiceList:Nt},template:`
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
  </div>`,data(){return{months:"12",choices:[{label:"Gift cards never expire",value:"no"},{label:"Gift cards expire",value:"yes"}],selected:"yes"}}});ps.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const ms=(e,{argTypes:o})=>({components:{TextField:_e,Stack:We,StackItem:vt},template:`
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
  </Stack>`,data(){return{price:"1"}}});ms.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const ys=(e,{argTypes:o})=>({components:{TextField:_e},template:`
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
  `});ys.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const gs=(e,{argTypes:o})=>({components:{TextField:_e},template:`
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
  `,data(){return{price:"10"}}});gs.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const hs=(e,{argTypes:o})=>({components:{TextField:_e,Select:Xo},template:`
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
  `,data(){return{weight:"10",unit:"kg"}}});hs.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const bs=(e,{argTypes:o})=>({components:{TextField:_e},template:`
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
  `,data(){return{storeName:"Jaded Pixel"}}});bs.parameters={docs:{source:{state:"close",code:_`
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
      `}}};const Rl=e=>({components:{TextField:_e},setup(){return{args:e}},template:`
    <TextField v-bind="args" autoComplete="off">
      <template #label>Example text field</template>
    </TextField>
  `}),E1={DefaultTextField:cs,NumberField:us,MultiLineField:ds,HiddenLabelField:ps,RightAlignedField:ms,HelpTextField:ys,PrefixSuffixField:gs,ConnectedField:hs,ClearBtnField:bs,ExampleField:Rl},O1="wrapper";function Ny(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(O1,N(v(v({},E1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Forms / Text Field",component:_e,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Text field"),t("p",null,"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."),t("br",null),t("br",null),t("h3",null,"Default text field"),t("p",null,"Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options."),t(V,{mdxType:"Canvas"},t(H,{story:cs,name:"Default text field",mdxType:"Story"})),t("h3",null,"Number field"),t("p",null,"Use when input text should be a number."),t(V,{mdxType:"Canvas"},t(H,{story:us,name:"Number field",mdxType:"Story"})),t("h3",null,"Multiline text field"),t("p",null,`Use when the expected input could be more than one line.
The field will automatically grow to accommodate additional text.`),t(V,{mdxType:"Canvas"},t(H,{story:ds,name:"Multiline text field",height:"150px",mdxType:"Story"})),t("h3",null,"Text field with hidden label"),t("p",null,`Use to visually hide the label when the text field's purpose is clear from context.
The label will remain available to screen readers. Use this option with care. In almost all cases, show the label.`),t(V,{mdxType:"Canvas"},t(H,{story:ps,name:"Text field with hidden label",mdxType:"Story"})),t("h3",null,"Text field with right aligned text"),t("p",null,"Use when input text should be aligned right."),t(V,{mdxType:"Canvas"},t(H,{story:ms,name:"Text field with right aligned text",mdxType:"Story"})),t("h3",null,"Text field with help text"),t("p",null,`Use to show short instructional content below the text field.
Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements).
If more explanation is needed, link to the Shopify Help Center.`),t(V,{mdxType:"Canvas"},t(H,{story:ys,name:"Text field with help text",mdxType:"Story"})),t("h3",null,"Text field with prefix or suffix"),t("p",null,"Use as a special form of help text that works best inline."),t("ul",null,t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use a prefix for things like currency symbols (\u201C$\u201D, \u201C\xA5\u201D, \u201C\xA3\u201D).")),t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use suffix for things like units of measure (\u201Cin\u201D, \u201Ccm\u201D)."))),t(V,{mdxType:"Canvas"},t(H,{story:gs,name:"Text field with prefix or suffix",mdxType:"Story"})),t("h3",null,"Text field with connected fields"),t("p",null,"Use when a text field and several related fields make up a logical unit."),t("p",null,`If inputting weight as a number and a separate unit of measurement,
use a text field with a select dropdown menu (for example \u201Ckg\u201D, \u201Clb\u201D) as a connected field.`),t(V,{mdxType:"Canvas"},t(H,{story:hs,name:"Text field with connected fields",mdxType:"Story"})),t("h3",null,"Text field with clear button"),t("p",null,"Use to allow merchants to clear the content from a text field."),t(V,{mdxType:"Canvas"},t(H,{story:bs,name:"Text field with clear button",mdxType:"Story"})),t("h3",null,"Example"),t(V,{mdxType:"Canvas"},t(H,{story:Rl,name:"Example",parameters:{docs:{source:{code:_`
          <TextField v-bind="args" autoComplete="off">
            <template #label>Example text field</template>
          </TextField>
          `}}},mdxType:"Story"})),t(ce,{story:"Example",mdxType:"ArgsTable"}))}Ny.isMDXComponent=!0;const By=cs;By.storyName="Default text field";const Iy=us;Iy.storyName="Number field";const Dy=ds;Dy.storyName="Multiline text field";const $y=ps;$y.storyName="Text field with hidden label";const Fy=ms;Fy.storyName="Text field with right aligned text";const Ey=ys;Ey.storyName="Text field with help text";const Oy=gs;Oy.storyName="Text field with prefix or suffix";const qy=hs;qy.storyName="Text field with connected fields";const Ry=bs;Ry.storyName="Text field with clear button";const Vy=Rl;Vy.storyName="Example";const Bo={title:"Components / Forms / Text Field",component:_e,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},includeStories:["_DefaultTextField_","_NumberField_","_MultiLineField_","_HiddenLabelField_","_RightAlignedField_","_HelpTextField_","_PrefixSuffixField_","_ConnectedField_","_ClearBtnField_","_ExampleField_"]},q1={"Default text field":"_DefaultTextField_","Number field":"_NumberField_","Multiline text field":"_MultiLineField_","Text field with hidden label":"_HiddenLabelField_","Text field with right aligned text":"_RightAlignedField_","Text field with help text":"_HelpTextField_","Text field with prefix or suffix":"_PrefixSuffixField_","Text field with connected fields":"_ConnectedField_","Text field with clear button":"_ClearBtnField_",Example:"_ExampleField_"};Bo.parameters=Bo.parameters||{};Bo.parameters.docs=N(v({},Bo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:q1,mdxComponentAnnotations:Bo},t(Ny,null))});var R1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultTextField:cs,NumberField:us,MultiLineField:ds,HiddenLabelField:ps,RightAlignedField:ms,HelpTextField:ys,PrefixSuffixField:gs,ConnectedField:hs,ClearBtnField:bs,ExampleField:Rl,_DefaultTextField_:By,_NumberField_:Iy,_MultiLineField_:Dy,_HiddenLabelField_:$y,_RightAlignedField_:Fy,_HelpTextField_:Ey,_PrefixSuffixField_:Oy,_ConnectedField_:qy,_ClearBtnField_:Ry,_ExampleField_:Vy,default:Bo});const Vl=(e,{argTypes:o})=>({components:{TextStyle:gt},setup(){return{args:e}},template:'<TextStyle v-bind="args"> Hello </TextStyle>'}),V1={Template:Vl},H1="wrapper";function Hy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(H1,N(v(v({},V1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Titles and text / Text Style",component:gt,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Text Style"),t("p",null,"Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text."),t(V,{mdxType:"Canvas"},t(H,{name:"Text Style",height:"60px",parameters:{docs:{source:{code:_`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}},mdxType:"Story"},Vl.bind({}))),t(ce,{story:"Text Style",mdxType:"ArgsTable"}))}Hy.isMDXComponent=!0;const _c=Vl.bind({});_c.storyName="Text Style";_c.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}};const Io={title:"Components / Titles and text / Text Style",component:gt,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["textStyle"]},U1={"Text Style":"textStyle"};Io.parameters=Io.parameters||{};Io.parameters.docs=N(v({},Io.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:U1,mdxComponentAnnotations:Io},t(Hy,null))});var j1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vl,textStyle:_c,default:Io});const Hl=(e,{argTypes:o})=>({components:{Thumbnail:qn},setup(){return{args:e}},computed:{thumbnailSource(){return e.source==="CirclePlusMinor"?Bd:e.source},bindProps(){return{size:e.size,source:this.thumbnailSource,alt:e.alt}}},template:'<Thumbnail v-bind="bindProps" />'}),W1={Template:Hl},z1="wrapper";function Uy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(z1,N(v(v({},W1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Images and Icons / Thumbnail",component:qn,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Thumbnail"),t("p",null,"Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context."),t(V,{mdxType:"Canvas"},t(H,{name:"Thumbnail",height:"60px",args:{alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"},parameters:{docs:{source:{code:_`
            <Thumbnail v-bind="props" />
          `}}},mdxType:"Story"},Hl.bind({}))),t(ce,{story:"Thumbnail",mdxType:"ArgsTable"}))}Uy.isMDXComponent=!0;const Ul=Hl.bind({});Ul.storyName="Thumbnail";Ul.args={alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"};Ul.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:_`
            <Thumbnail v-bind="props" />
          `}}};const Do={title:"Components / Images and Icons / Thumbnail",component:qn,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},includeStories:["thumbnail"]},G1={Thumbnail:"thumbnail"};Do.parameters=Do.parameters||{};Do.parameters.docs=N(v({},Do.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:G1,mdxComponentAnnotations:Do},t(Uy,null))});var X1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Hl,thumbnail:Ul,default:Do});const jl=e=>({components:{Frame:Wt,Toast:En,Button:fe},setup(){const o=C(!1),n=C(!1),s=C(!1);return{toastActive1:o,toggleToast1:()=>{o.value=!o.value},toastActive2:n,toggleToast2:()=>{n.value=!n.value},toastActive3:s,toggleToast3:()=>{s.value=!s.value},undoHandler:()=>{alert("Undo clicked")}}},template:`
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
  `}),K1={Template:jl},Y1="wrapper";function jy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(Y1,N(v(v({},K1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Feedback indicators / Toast",component:En,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},mdxType:"Meta"}),t("h1",null,"Toast"),t("p",null,"The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action."),t(V,{mdxType:"Canvas"},t(H,{name:"Toast",inline:!1,height:"300px",parameters:{docs:{source:{code:_`
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
          `}}},mdxType:"Story"},jl.bind({}))),t(ce,{story:"Toast",mdxType:"ArgsTable"}))}jy.isMDXComponent=!0;const Mc=jl.bind({});Mc.storyName="Toast";Mc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
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
          `}}};const $o={title:"Components / Feedback indicators / Toast",component:En,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},includeStories:["toast"]},Z1={Toast:"toast"};$o.parameters=$o.parameters||{};$o.parameters.docs=N(v({},$o.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:Z1,mdxComponentAnnotations:$o},t(jy,null))});var Q1=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:jl,toast:Mc,default:$o});const Wl=e=>({components:{Tooltip:fa,TextStyle:gt},setup(){return{args:e}},template:`<Tooltip v-bind="args" :content="args.content1">
    <TextStyle variation="strong">Order #1001</TextStyle>
  </Tooltip>`}),cn=e=>({components:{Button:fe,ButtonGroup:nt,Tooltip:fa,TextField:_e},template:`
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
  `});cn.storyName="Tooltip visible only with child interaction";cn.parameters={docs:{source:{code:_`
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
      `}}};const J1={Template:Wl,childInteraction:cn},e$="wrapper";function Wy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(e$,N(v(v({},J1),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Overlays / Tooltip",component:fa,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Tooltip"),t("p",null,"Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when merchants hover, focus, tap, or click."),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("h3",null,"A single item fills the remaining space"),t(V,{withSource:"close",mdxType:"Canvas"},t(H,{story:cn,height:"150px",inline:!1,name:"_childInteraction_",mdxType:"Story"})),t("h3",null,"Example"),t(V,{mdxType:"Canvas"},t(H,{inline:!1,name:"Tooltip",height:"100px",args:{active:!0,content1:"This order has shipping labels."},parameters:{docs:{source:{code:_`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}},mdxType:"Story"},Wl.bind({}))),t(ce,{story:"Tooltip",mdxType:"ArgsTable"}))}Wy.isMDXComponent=!0;const t$=cn,zl=Wl.bind({});zl.storyName="Tooltip";zl.args={active:!0,content1:"This order has shipping labels."};zl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:_`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}};const Fo={title:"Components / Overlays / Tooltip",component:fa,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_childInteraction_","tooltip"]},a$={_childInteraction_:"_childInteraction_",Tooltip:"tooltip"};Fo.parameters=Fo.parameters||{};Fo.parameters.docs=N(v({},Fo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:a$,mdxComponentAnnotations:Fo},t(Wy,null))});var o$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Wl,childInteraction:cn,_childInteraction_:t$,tooltip:zl,default:Fo});const Gl=e=>({components:{Frame:Wt,TopBar:Rn,TopBarUserMenu:Kr,TopBarMenu:di,Icon:re,VisuallyHidden:ot,TopBarSearchField:Xr,ActionList:et},setup(){const o={width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},n=C(!1),s=C(!1),i=C(!1),r=C(""),c=S=>{i.value=S.length>0},p=()=>{r.value="",i.value=!1},T=()=>{n.value=!n.value},b=()=>{s.value=!s.value},g=C([{items:[{content:"Back to Shopify",icon:qo}]},{items:[{content:"Community forums"}]}]),x=C({title:"Another Message",description:"This is a description of message",action:{onClick:()=>{alert("clicked")},content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}});return{logo:o,isSearchActive:i,searchValue:r,handleSearchChange:c,toggleIsSecondaryMenuOpen:b,userMenuAction:g,userMenuMessage:x,toggleUserMenu:T,isUserMenuOpen:n,isSecondaryMenuOpen:s,handleSearchResultsDismiss:p,QuestionMarkMajor:Md}},template:`
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
  `}),n$={Template:Gl},s$="wrapper";function zy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(s$,N(v(v({},n$),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Navigation / Top Bar",component:Rn,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Top Bar"),t("p",null,"The top bar is a header component that allows merchants to search, access menus, and navigate by clicking on the logo. It's always visible at the top of interfaces like Shopify or Shopify Plus. Third-party apps that use the top bar can customize the color to match their brand using the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-app-provider"},"app provider")," component and are required to use their own logo."),t(V,{mdxType:"Canvas"},t(H,{name:"Top Bar",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:_`
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
          `}}},mdxType:"Story"},Gl.bind({}))),t(ce,{story:"Top Bar",mdxType:"ArgsTable"}),t("a",{name:"subcomponent-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu")),t("p",null,"A component that composes together an activator and a popover containing an action list to create a dropdown menu."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"ActionListProps","['sections']"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu. Follow Action List component props")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the menu is currently open")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@open"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening the menu popover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@close"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle closing the menu popover")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Slots"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"#activatorContent"),t("td",{parentName:"tr",align:null}),t("td",{parentName:"tr",align:null},"Accepts an activator component that renders inside of a button that opens the menu")))),t("br",null),t("a",{name:"subcomponent-user-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar user menu")),t("p",null,"A specialized menu component that is activated by a user avatar."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"{items: IconableAction[]}[]"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"name"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string detailing the merchant's full name to be displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"detail"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string allowing further details on the merchant's name displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"initials"),t("td",{parentName:"tr",align:null},"AvatarProps","['initials']"),t("td",{parentName:"tr",align:null},"The merchant's initials, rendered in place of an avatar image when not provided")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"avatar"),t("td",{parentName:"tr",align:null},"AvatarProps","['source']"),t("td",{parentName:"tr",align:null},"An avatar image representing the merchant")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the user menu is currently open")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Event"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@toggle"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening and closing the user menu")))),t("br",null),t("a",{name:"type-message"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu message")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A title for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"description"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A description for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},"{onClick(): void; content: string}"),t("td",{parentName:"tr",align:null},"An action to render near the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"link"),t("td",{parentName:"tr",align:null},"{to: string; content: string}"),t("td",{parentName:"tr",align:null},"A link to view the content of the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"{content: string; status: BadgeProps","['status']","}"),t("td",{parentName:"tr",align:null},"A badge to render near the message")))),t("br",null),t("a",{name:"subcomponent-search-field"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar search field")),t("p",null,"A text field component that is tailor-made for a search use-case."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"value"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Initial value for the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"placeholder"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Hint text to display")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"focused"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force the focus state on the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"active"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force a state where search is active but the text field component is not focused")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@change(value: string)"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when value is changed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@focus"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when input is focused")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@blur"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when focus is removed")))))}zy.isMDXComponent=!0;const Nc=Gl.bind({});Nc.storyName="Top Bar";Nc.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:_`
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
          `}}};const Eo={title:"Components / Navigation / Top Bar",component:Rn,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},includeStories:["topBar"]},i$={"Top Bar":"topBar"};Eo.parameters=Eo.parameters||{};Eo.parameters.docs=N(v({},Eo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:i$,mdxComponentAnnotations:Eo},t(zy,null))});var l$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Gl,topBar:Nc,default:Eo});const Xl=e=>({components:{VisuallyHidden:ot},template:`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  `}),r$={Template:Xl},c$="wrapper";function Gy(n){var s=n,{components:e}=s,o=J(s,["components"]);return t(c$,N(v(v({},r$),o),{components:e,mdxType:"MDXLayout"}),t(ne,{title:"Components / Titles and text / Visually Hidden",component:ot,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Visually hidden"),t("p",null,"Use when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden."),t(V,{mdxType:"Canvas"},t(H,{name:"Visually Hidden",parameters:{docs:{source:{code:_`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}},mdxType:"Story"},Xl.bind({}))),t(ce,{story:"Visually Hidden",mdxType:"ArgsTable"}))}Gy.isMDXComponent=!0;const Bc=Xl.bind({});Bc.storyName="Visually Hidden";Bc.parameters={storySource:{source:`args => ({
  components: {
    VisuallyHidden
  },
  template: \`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  \`
})`},docs:{source:{code:_`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}};const Oo={title:"Components / Titles and text / Visually Hidden",component:ot,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},includeStories:["visuallyHidden"]},u$={"Visually Hidden":"visuallyHidden"};Oo.parameters=Oo.parameters||{};Oo.parameters.docs=N(v({},Oo.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:u$,mdxComponentAnnotations:Oo},t(Gy,null))});var d$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Xl,visuallyHidden:Bc,default:Oo});function Xy(e){return{"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":lB,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":dB,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":gB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":SB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":LB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":MB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":$B,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":jB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":KB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":JB,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":oI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":lI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":dI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":hI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":xI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":AI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":PI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":BI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":FI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":RI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":WI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":YI,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":eD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":sD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":cD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":yD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":fD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":CD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":wD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":ND,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":$D,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":qD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":UD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":GD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":ZD,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":n0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":r0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":m0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":b0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":S0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":w0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":D0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":O0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":H0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":G0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":Z0,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":t1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":s1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":c1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":m1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":f1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":S1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx":w1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":B1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":F1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":R1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":j1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":X1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":Q1,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":o$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":l$,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":d$}[e]}Object.assign(Xy,{keys:()=>["/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx"],resolve:e=>({"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/Faqs.stories.mdx":"./.storybook/stories/Faqs.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":"./.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":"./.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":"./src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":"./src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":"./src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":"./src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":"./src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":"./src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":"./src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":"./src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":"./src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":"./src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":"./src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":"./src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":"./src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":"./src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":"./src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":"./src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":"./src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DropZone/README.stories.mdx":"./src/components/DropZone/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":"./src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":"./src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Form/README.stories.mdx":"./src/components/Form/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FormLayout/README.stories.mdx":"./src/components/FormLayout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":"./src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":"./src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":"./src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":"./src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":"./src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":"./src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":"./src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":"./src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":"./src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":"./src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":"./src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":"./src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/OptionList/README.stories.mdx":"./src/components/OptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":"./src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":"./src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":"./src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":"./src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ProgressBar/README.stories.mdx":"./src/components/ProgressBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":"./src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RangeSlider/README.stories.mdx":"./src/components/RangeSlider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":"./src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":"./src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":"./src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":"./src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":"./src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":"./src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":"./src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tabs/README.stories.mdx":"./src/components/Tabs/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":"./src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":"./src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":"./src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":"./src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":"./src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":"./src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":"./src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":"./src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":"./src/components/VisuallyHidden/README.stories.mdx"})[e]});function p$(){Ug(Xy,{hot:!1},!1)}const m$=[Kg,Yg,Zg,Qg,Jg,eh,th,ah,oh,nh,sh,ih,oB].filter(Boolean);m$.forEach(e=>{Object.keys(e).forEach(o=>{const n=e[o];switch(o){case"args":case"argTypes":return Xg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(s=>Gg(s,!1));case"loaders":return n.forEach(s=>zg(s,!1));case"parameters":return Uc(v({},n),!1);case"argTypesEnhancers":return n.forEach(s=>Wg(s));case"argsEnhancers":return n.forEach(s=>jg(s));case"globals":case"globalTypes":{const s={};return s[o]=n,Uc(s,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});p$();
//# sourceMappingURL=iframe.60299781.js.map
