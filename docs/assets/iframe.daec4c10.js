var tm=Object.defineProperty,om=Object.defineProperties;var am=Object.getOwnPropertyDescriptors;var Hn=Object.getOwnPropertySymbols;var Ar=Object.prototype.hasOwnProperty,Cr=Object.prototype.propertyIsEnumerable;var Gi=(e,o,n)=>o in e?tm(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,y=(e,o)=>{for(var n in o||(o={}))Ar.call(o,n)&&Gi(e,n,o[n]);if(Hn)for(var n of Hn(o))Cr.call(o,n)&&Gi(e,n,o[n]);return e},M=(e,o)=>om(e,am(o));var G=(e,o)=>{var n={};for(var s in e)Ar.call(e,s)&&o.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Hn)for(var s of Hn(e))o.indexOf(s)<0&&Cr.call(e,s)&&(n[s]=e[s]);return n};var Je=(e,o,n)=>(Gi(e,typeof o!="symbol"?o+"":o,n),n);import{c as nm,a as jc,b as sm,w as im,i as lm,d as C,o as pe,e as it,f as eo,s as rm,t as Wc,g as ls,h as Tl,r as L,j as p,k as ao,l as d,m as g,n as re,u as a,p as $e,q as O,v as l,x as xe,y as Be,z as zc,A as T,B as h,C as Pe,D as u,E as ke,F as S,G as w,H as j,I as X,J as _,K as le,L as Re,M as qe,N as ht,O as ue,P as ze,Q as se,R as Gc,S as kr,T as ya,U as Qn,V as cm,W as um,X as dm,Y as Rt,Z as Kc,_ as Wa,$ as Sl,a0 as Xc,a1 as Yc,a2 as Al,a3 as pm,a4 as mm,a5 as Qc,a6 as qa,a7 as Qt,a8 as ym,a9 as hm,aa as gm,ab as bm,ac as sl,ad as Jc,ae as Zc,af as Tt,ag as fm,ah as vm,ai as xm,aj as Tm,ak as Jn,al as Zn,am as Sm,an as Am,ao as Lr,ap as _r,aq as Cm,ar as km,as as eu,at as Lm,au as _m,av as Pm,aw as Pr,ax as wm,ay as tu,az as Mm,aA as Nm,aB as il,aC as ll,aD as ou,aE as Bm,aF as Im,aG as Dm,aH as Ga,aI as t,aJ as Q,aK as J,aL as N,aM as es,aN as rl,aO as $m,aP as wr,aQ as R,aR as H,aS as ee,aT as au,aU as Mr,aV as Em,aW as Nr,aX as Fm,aY as nu,aZ as su,a_ as Om,a$ as iu,b0 as qm,b1 as Rm,b2 as Hm,b3 as Vm,b4 as Um,b5 as jm,b6 as Wm,b7 as zm,b8 as Br,b9 as Gm,ba as Km,bb as Xm,bc as Ym,bd as Qm,be as Jm,bf as Zm,bg as ey,bh as ty,bi as oy,bj as ay,bk as ny,bl as sy,bm as iy,bn as ly,bo as ry,bp as cy}from"./vendor.72c6baea.js";const uy=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};uy();const lu=nm({page:"preview"});jc.setChannel(lu);window.__STORYBOOK_ADDONS_CHANNEL__=lu;const{SERVER_CHANNEL_URL:Ir}=im;if(Ir){const e=sm({url:Ir});jc.setServerChannel(e),window.__STORYBOOK_SERVER_CHANNEL__=e}const ts='a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]:not([tabindex="-1"])',cl="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",dy='a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';function rs(e,o){if(e.matches)return e.matches(o);const n=(e.ownerDocument||document).querySelectorAll(o);let s=n.length;for(;s>=0&&n.item(s)!==e;)return s-=1,s>-1}function Ki(e){const o="a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";return rs(e,o)?e:e.querySelector(o)}function py(e,o){const n=[...document.querySelectorAll(cl)],s=n.indexOf(e)+1,i=n.slice(s);for(const r of i)if(lm(r)&&(!o||o&&o(r)))return r;return null}function my(e,o){const n=py(e,o);return n&&n instanceof HTMLElement?(n.focus(),!0):!1}function Cl(e,o=!0){return!o&&rs(e,cl)?e:e.querySelector(cl)}function ru(e){return e.querySelectorAll(dy)}function cu(e,o){let n=0;for(const s of e){if(s===o)break;n+=1}return n===e.length?-1:n}function yy(e,o){const n=ru(e),s=cu(n,o);s===-1?n[0].focus():n[(s-1+n.length)%n.length].focus()}function hy(e,o){const n=ru(e),s=cu(n,o);s===-1?n[0].focus():n[(s+1)%n.length].focus()}const kt=e=>{e.currentTarget.blur()};function cs(e,o=!0){var n;(n=Cl(e,o))==null||n.focus()}function uu(e,o=!0){return!o&&rs(e,ts)?e:e.querySelector(ts)}function du(e,o=!0){if(!o&&rs(e,ts))return e;const n=e.querySelectorAll(ts);return n[n.length-1]}function gy(e,o=!0){const n=uu(e,o);return n?(n.focus(),!0):!1}function by(e,o=!0){const n=du(e,o);return n?(n.focus(),!0):!1}const fy={inheritAttrs:!1,render(){return null}},tt=C(M(y({},fy),{props:{keyCode:{type:String,required:!0},keyEvent:{type:String,default:"keyup"},handler:{type:Function,required:!0}},setup(e){const o=e;function n(s){s.key===o.keyCode&&o.handler(s)}return pe(()=>document.addEventListener(o.keyEvent,n)),it(()=>document.removeEventListener(o.keyEvent,n)),()=>{}}}));tt.__docgenInfo={exportName:"default",displayName:"KeypressListener",description:"",tags:{},props:[{name:"keyCode",type:{name:"String as () => Key"},required:!0},{name:"keyEvent",type:{name:"String as () => KeyEvent"},defaultValue:{func:!1,value:"'keyup'"}},{name:"handler",type:{name:"func"},required:!0}]};var Qe=(e=>(e.Backspace="Backspace",e.Tab="Tab",e.Enter="Enter",e.Shift="Shift",e.Ctrl="Ctrl",e.Alt="Alt",e.Pause="Pause",e.CapsLock="CapsLock",e.Escape="Escape",e.Space="Space",e.PageUp="PageUp",e.PageDown="PageDown",e.End="End",e.Home="Home",e.ArrowRight="ArrowRight",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.Insert="Insert",e.Delete="Delete",e.Key0="Key0",e.Key1="Key1",e.Key2="Key2",e.Key3="Key3",e.Key4="Key4",e.Key5="Key5",e.Key6="Key6",e.Key7="Key7",e.Key8="Key8",e.Key9="Key9",e.KeyA="KeyA",e.KeyB="KeyB",e.KeyC="KeyC",e.KeyD="KeyD",e.KeyE="KeyE",e.KeyF="KeyF",e.KeyG="KeyG",e.KeyH="KeyH",e.KeyI="KeyI",e.KeyJ="KeyJ",e.KeyK="KeyK",e.KeyL="KeyL",e.KeyM="KeyM",e.KeyN="KeyN",e.KeyO="KeyO",e.KeyP="KeyP",e.KeyQ="KeyQ",e.KeyR="KeyR",e.KeyS="KeyS",e.KeyT="KeyT",e.KeyU="KeyU",e.KeyV="KeyV",e.KeyW="KeyW",e.KeyX="KeyX",e.KeyY="KeyY",e.KeyZ="KeyZ",e.LeftMeta="LeftMeta",e.RightMeta="RightMeta",e.Select="Select",e.Numpad0="Numpad0",e.Numpad1="Numpad1",e.Numpad2="Numpad2",e.Numpad3="Numpad3",e.Numpad4="Numpad4",e.Numpad5="Numpad5",e.Numpad6="Numpad6",e.Numpad7="Numpad7",e.Numpad8="Numpad8",e.Numpad9="Numpad9",e.Multiply="Multiply",e.Add="Add",e.Subtract="Subtract",e.Decimal="Decimal",e.Divide="Divide",e.F1="F1",e.F2="F2",e.F3="F3",e.F4="F4",e.F5="F5",e.F6="F6",e.F7="F7",e.F8="F8",e.F9="F9",e.F10="F10",e.F11="F11",e.F12="F12",e.NumLock="NumLock",e.ScrollLock="ScrollLock",e.Semicolon="Semicolon",e.Equals="Equals",e.Comma="Comma",e.Dash="Dash",e.Period="Period",e.ForwardSlash="ForwardSlash",e.GraveAccent="GraveAccent",e.OpenBracket="OpenBracket",e.BackSlash="BackSlash",e.CloseBracket="CloseBracket",e.SingleQuote="SingleQuote",e))(Qe||{});const vy="Polaris-ActionList",xy="Polaris-ActionList__Actions",Ty="Polaris-ActionList__Section",Sy="Polaris-ActionList__Title",Ay="Polaris-ActionList--firstSectionWithTitle",Cy="Polaris-ActionList__Item",ky="Polaris-ActionList--active",Ly="Polaris-ActionList--destructive",_y="Polaris-ActionList--disabled",Py="Polaris-ActionList__Prefix",wy="Polaris-ActionList__Suffix",My="Polaris-ActionList__Content",Ny="Polaris-ActionList__ContentBlock",By="Polaris-ActionList__ContentBlockInner",Iy="Polaris-ActionList__Text";var De={ActionList:vy,"Section-withoutTitle":"Polaris-ActionList__Section--withoutTitle",Actions:xy,Section:Ty,Title:Sy,firstSectionWithTitle:Ay,Item:Cy,active:ky,destructive:Ly,disabled:_y,Prefix:Py,Suffix:wy,Content:My,ContentBlock:Ny,ContentBlockInner:By,Text:Iy};class to{constructor({top:o=0,left:n=0,width:s=0,height:i=0}={}){Je(this,"top");Je(this,"left");Je(this,"width");Je(this,"height");this.top=o,this.left=n,this.width=s,this.height=i}static get zero(){return new to}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}}function At(e){if(!(e instanceof Element))return new to({width:window.innerWidth,height:window.innerHeight});const o=e.getBoundingClientRect();return new to({top:o.top,left:o.left,width:o.width,height:o.height})}const Vn=1e3/60;function pu(e){return e===document}function Dy(e){return pu(e)?document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop}function $y(e,o){const n=e.left,s=e.left+e.width,i=o.left;return o.left+o.width<n||s<i}class Ey{constructor(o){Je(this,"stickyItems",[]);Je(this,"stuckItems",[]);Je(this,"container",null);Je(this,"topBarOffset",0);Je(this,"handleResize",eo(()=>{this.manageStickyItems()},Vn,{leading:!0,trailing:!0,maxWait:Vn}));Je(this,"handleScroll",eo(()=>{this.manageStickyItems()},Vn,{leading:!0,trailing:!0,maxWait:Vn}));o&&this.setContainer(o)}registerStickyItem(o){this.stickyItems.push(o)}unregisterStickyItem(o){const n=this.stickyItems.findIndex(({stickyNode:s})=>o===s);this.stickyItems.splice(n,1)}setContainer(o){this.container=o,pu(o)&&this.setTopBarOffset(o),this.container.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.manageStickyItems()}removeScrollListener(){this.container&&(this.container.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize))}manageStickyItems(){if(this.stickyItems.length<=0)return;const o=this.container?Dy(this.container):0,n=At(this.container).top+this.topBarOffset;this.stickyItems.forEach(s=>{const{handlePositioning:i}=s,{sticky:r,top:c,left:m,width:f}=this.evaluateStickyItem(s,o,n);this.updateStuckItems(s,r),i(r,c,m,f)})}evaluateStickyItem(o,n,s){var P;const{stickyNode:i,placeHolderNode:r,boundingElement:c,offset:m,disableWhenStacked:f}=o;if(f&&rm().matches)return{sticky:!1,top:0,left:0,width:"auto"};const x=m?this.getOffset(i)+parseInt(Wc.spacing["5"],10):this.getOffset(i),v=n+x,b=r.getBoundingClientRect().top-s+n,A=s+x,{width:k}=r.getBoundingClientRect(),{left:B}=r.getBoundingClientRect();let I;if(c==null)I=v>=b;else{const $=i.getBoundingClientRect().height||((P=i.firstElementChild)==null?void 0:P.getBoundingClientRect().height)||0,q=c.getBoundingClientRect().bottom-$+n-s;I=v>=b&&v<q}return{sticky:I,top:A,left:B,width:k}}updateStuckItems(o,n){const{stickyNode:s}=o;n&&!this.isNodeStuck(s)?this.addStuckItem(o):!n&&this.isNodeStuck(s)&&this.removeStuckItem(o)}addStuckItem(o){this.stuckItems.push(o)}removeStuckItem(o){const{stickyNode:n}=o,s=this.stuckItems.findIndex(({stickyNode:i})=>n===i);this.stuckItems.splice(s,1)}getOffset(o){if(this.stuckItems.length===0)return 0;let n=0,s=0;const i=this.stuckItems.length,r=At(o);for(;s<i;){const c=this.stuckItems[s].stickyNode;if(c!==o){const m=At(c);$y(r,m)||(n+=At(c).height)}else break;s+=1}return n}isNodeStuck(o){return this.stuckItems.findIndex(({stickyNode:s})=>o===s)>=0}setTopBarOffset(o){const n=o.querySelector(`:not(${ls.selector}) ${Tl.selector}`);this.topBarOffset=n?n.clientHeight:0}}const Fy="Polaris-Scrollable",Oy="Polaris-Scrollable--horizontal",qy="Polaris-Scrollable--vertical",Ry="Polaris-Scrollable--verticalHasScrolling",Hy="Polaris-Scrollable--hasTopShadow",Vy="Polaris-Scrollable--hasBottomShadow";var ro={Scrollable:Fy,horizontal:Oy,vertical:qy,verticalHasScrolling:Ry,hasTopShadow:Hy,hasBottomShadow:Vy};const Uy=["tabindex"],_t=C({props:{vertical:{type:Boolean,default:!0},horizontal:{type:Boolean},shadow:{type:Boolean},hint:{type:Boolean},focusable:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=U=>{U.preventDefault()},i=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},r=100,c=.2,m=.2,f=["scroll","touchmove","wheel"],x=i(),v=2,b=L(null),A=L(!1),k=L(!1),B=L(0),I=L(!1),P=new Ey,$=U=>{B.value=U};$e("stickyManagerContext",P),$e("scrollToPositionContext",$);const q=p(()=>O(ro.Scrollable,n.vertical&&ro.vertical,n.horizontal&&ro.horizontal,A.value&&ro.hasTopShadow,k.value&&ro.hasBottomShadow,n.vertical&&I.value&&ro.verticalHasScrolling)),E=()=>{if(!b.value)return;const{scrollTop:U,scrollHeight:te,clientHeight:de}=b.value,ce=Boolean(n.shadow&&!(U+de>=te)),we=Boolean(n.shadow&&U>0&&B.value>0),V=te>de,Y=te-U<=de+v;V&&Y&&o("scrolled-to-bottom"),A.value=we,k.value=ce,B.value=U,I.value=V},K=eo(()=>{E()},50,{trailing:!0}),F=(U=!0)=>{!b.value||f.forEach(te=>{var de,ce;U?(de=b.value)==null||de.addEventListener(te,s):(ce=b.value)==null||ce.removeEventListener(te,s)})},W=()=>{const U=B.value*m;B.value=U<c?0:B.value-U,B.value>0?window.requestAnimationFrame(W):F(!1)},D=()=>{if(!b.value)return;const{clientHeight:U,scrollHeight:te}=b.value;if(x||B.value>0||te<=U)return;const de=te-U;F(),B.value=de>r?r:de,window.requestAnimationFrame(W)};return pe(()=>{!b.value||(P.setContainer(b.value),b.value.scrollTop=B.value,b.value.addEventListener("scroll",()=>{window.requestAnimationFrame(E)}),window.addEventListener("resize",K),window.requestAnimationFrame(()=>{E(),n.hint&&D()}))}),ao(()=>{b.value&&B.value>0&&(b.value.scrollTop=B.value)}),it(()=>{!b.value||(b.value.removeEventListener("scroll",E),window.removeEventListener("resize",K),P.removeScrollListener())}),(U,te)=>(l(),d("div",re({ref_key:"scrollArea",ref:b},a(ls).props,{class:a(q),tabindex:e.focusable?0:void 0}),[g(U.$slots,"default")],16,Uy))}});_t.__docgenInfo={exportName:"default",displayName:"Scrollable",description:"",tags:{},props:[{name:"vertical",description:"Scroll content vertically",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"horizontal",description:"Scroll content horizontally",required:!1,type:{name:"boolean"}},{name:"shadow",description:"Add a shadow when content is scrollable",required:!1,type:{name:"boolean"}},{name:"hint",description:"Slightly hints content upon mounting when scrollable",required:!1,type:{name:"boolean"}},{name:"focusable",description:"Adds a tabIndex to scrollable when children are not focusable",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};class kl extends Error{constructor(o=""){super(`${o&&`${o} `}Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-appprovider--page for implementation instructions.`);this.name="MissingAppProviderError"}}class jy extends Error{constructor(o=""){super(`${o&&`${o} `}Your component must be wrapped in a <Frame> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-frame--page for implementation instructions.`);this.name="MissingFrameError"}}function Ne(){const e=xe("uniqueIdFactory"),o=L("");function n(s="",i=""){if(!e)throw new kl("No UniqueIdFactory was provided.");return i||(o.value||(o.value=e.nextId(s)),o.value)}return{uniqueIdRef:o,useUniqueId:n}}function Wy(e){const o=xe("focusManager"),{useUniqueId:n,uniqueIdRef:s}=Ne();Be([()=>e.trapping],()=>{e.trapping&&s&&o.add(s.value)});const i=p(()=>o.trapFocusList[0]===s.value);return zc(()=>{if(!o)throw new kl("No FocusManager was provided.")}),pe(()=>{const r=n();e.trapping&&o.add(r)}),it(()=>{s.value&&o.remove(s.value)}),{canSafelyFocus:i}}const zy=["id"],Ll=C({setup(e){const o=xe("scrollToPositionContext",()=>!1),n=L(null),{useUniqueId:s}=Ne(),i=s("ScrollTo");return pe(()=>{!o||!n.value||o(n.value.offsetTop)}),(r,c)=>(l(),d("a",{id:a(i),ref_key:"anchorNode",ref:n},null,8,zy))}});Ll.__docgenInfo={exportName:"default",displayName:"ScrollTo",description:"",tags:{}};const gt=C({props:{to:null,url:null,external:{type:Boolean}},setup(e){return(o,n)=>(l(),T(Pe(e.to?"router-link":"a"),{href:e.url,to:e.to,target:e.to?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0},{default:h(()=>[g(o.$slots,"default")]),_:3},8,["href","to","target","rel"]))}});gt.__docgenInfo={exportName:"default",displayName:"UnstyledLink",description:"",tags:{},props:[{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Gy="Polaris-TextStyle--variationPositive",Ky="Polaris-TextStyle--variationNegative",Xy="Polaris-TextStyle--variationWarning",Yy="Polaris-TextStyle--variationCode",Qy="Polaris-TextStyle--variationStrong",Jy="Polaris-TextStyle--variationSubdued";var Zy={variationPositive:Gy,variationNegative:Ky,variationWarning:Xy,variationCode:Yy,variationStrong:Qy,variationSubdued:Jy};const Lt=C({props:{variation:{type:String,default:null}},setup(e){const o=e,n={positive:"positive",negative:"negative",warning:"warning",strong:"strong",subdued:"subdued",code:"code"};function s(c){return c===n.code?"code":"span"}const i=L(s(o.variation)),r=p(()=>{const c=o.variation&&ke("variation",o.variation);return O(c&&Zy[c])});return(c,m)=>(l(),T(Pe(i.value),{class:u(a(r))},{default:h(()=>[g(c.$slots,"default")]),_:3},8,["class"]))}});Lt.__docgenInfo={exportName:"default",displayName:"TextStyle",description:"",tags:{},props:[{name:"variation",description:"Give text additional visual meaning",tags:{},values:["positive | negative | strong | subdued | code"],type:{name:"String as () => Variation"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]};const eh="Polaris-Icon",th="Polaris-Icon--applyColor",oh="Polaris-Icon--hasBackdrop",ah="Polaris-Icon--colorBase",nh="Polaris-Icon--colorSubdued",sh="Polaris-Icon--colorCritical",ih="Polaris-Icon--colorInteractive",lh="Polaris-Icon--colorWarning",rh="Polaris-Icon--colorHighlight",ch="Polaris-Icon--colorSuccess",uh="Polaris-Icon--colorPrimary",dh="Polaris-Icon__Svg",ph="Polaris-Icon__Img",mh="Polaris-Icon__Placeholder";var Wt={Icon:eh,applyColor:th,hasBackdrop:oh,colorBase:ah,colorSubdued:nh,colorCritical:sh,colorInteractive:ih,colorWarning:lh,colorHighlight:rh,colorSuccess:ch,colorPrimary:uh,Svg:dh,Img:ph,Placeholder:mh},Dr={env:"production"};const yh="Polaris-VisuallyHidden";var hh={VisuallyHidden:yh};const Ge=C({setup(e){return(o,n)=>(l(),d("span",{class:u(a(hh).VisuallyHidden)},[g(o.$slots,"default")],2))}});Ge.__docgenInfo={exportName:"default",displayName:"VisuallyHidden",description:"",tags:{},slots:[{name:"default"}]};const gh=["src"],ae=C({props:{source:null,color:null,backdrop:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,n=["base","critical","highlight","success","warning"],s=p(()=>o.color&&Wt[ke("color",o.color)]),i=p(()=>O(Wt.Icon,s.value,o.color&&Wt.applyColor,o.backdrop&&Wt.hasBackdrop)),r=p(()=>typeof o.source=="object"?"icon":o.source==="placeholder"?"placeholder":"external"),c=p(()=>r.value==="external"?encodeURIComponent(String(o.source)):""),m=()=>{o.color&&r.value==="external"&&Dr.env==="development"&&console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.")},f=()=>{o.backdrop&&o.color&&!n.includes(o.color)&&Dr.env==="development"&&console.warn(`The ${o.color} variant does not have a supported backdrop color`)};return pe(()=>{m(),f()}),(x,v)=>(l(),d("span",{class:u(a(i))},[S(a(Ge),null,{default:h(()=>[w("span",null,j(e.accessibilityLabel),1)]),_:1}),a(r)==="icon"?(l(),T(Pe(e.source),{key:0,class:u(a(Wt).Svg)},null,8,["class"])):a(r)==="placeholder"?(l(),d("div",{key:1,class:u(a(Wt).Placeholder)},null,2)):(l(),d("img",{key:2,class:u(a(Wt).Img),src:`data:image/svg+xml;utf8,${a(c)}`,alt:"","aria-hidden":"true"},null,10,gh))],2))}});ae.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"source",description:"The contents to display in the icon",required:!0,type:{name:"IconSource"}},{name:"color",description:"Set the color for the icon",required:!1,type:{name:"Color"}},{name:"backdrop",description:"Show a backdrop behind the icon",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}]};const bh="Polaris-Badge",fh="Polaris-Badge--sizeSmall",vh="Polaris-Badge--statusSuccess",xh="Polaris-Badge--statusInfo",Th="Polaris-Badge--statusAttention",Sh="Polaris-Badge--statusWarning",Ah="Polaris-Badge--statusCritical",Ch="Polaris-Badge--statusNew",kh="Polaris-Badge__Pip",Lh="Polaris-Badge--progressIncomplete",_h="Polaris-Badge--progressPartiallyComplete",Ph="Polaris-Badge--progressComplete",wh="Polaris-Badge--withinFilter";var co={Badge:bh,sizeSmall:fh,statusSuccess:vh,statusInfo:xh,statusAttention:Th,statusWarning:Sh,statusCritical:Ah,statusNew:Ch,Pip:kh,progressIncomplete:Lh,progressPartiallyComplete:_h,progressComplete:Ph,withinFilter:wh};const je=C({props:{status:null,progress:null,size:{default:"medium"},statusAndProgressLabelOverride:null},setup(e){const o=e,n=xe("withinFilterContext",!1),s="medium",i=L(""),r=L(""),c=p(()=>O(co.Badge,o.status&&co[ke("status",o.status)],o.progress&&co[ke("progress",o.progress)],o.size&&o.size!==s&&co[ke("size",o.size)],n&&co.withinFilter)),m=p(()=>o.statusAndProgressLabelOverride||r.value||i.value),f=p(()=>o.statusAndProgressLabelOverride||`${r.value} ${i.value}`);return pe(()=>{switch(o.progress){case"incomplete":i.value="incomplete";break;case"partiallyComplete":i.value="partiallyComplete";break;case"complete":i.value="complete";break}switch(o.status){case"info":r.value="info";break;case"success":r.value="success";break;case"warning":r.value="warning";break;case"critical":r.value="critical";break;case"attention":r.value="attention";break;case"new":r.value="new";break}}),(x,v)=>(l(),d("span",{class:u(a(c))},[a(m)?(l(),d(X,{key:0},[i.value?(l(),d("span",{key:0,class:u(a(co).Pip)},[S(a(Ge),null,{default:h(()=>[le(j(a(f)),1)]),_:1})],2)):(l(),T(a(Ge),{key:1},{default:h(()=>[le(j(a(f)),1)]),_:1}))],64)):_("",!0),g(x.$slots,"default")],2))}});je.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"status",description:"Colors and labels the badge with the given status.",required:!1,type:{name:"Status"}},{name:"progress",description:"Render a pip showing the progress of a given task.",required:!1,type:{name:"Progress"}},{name:"size",description:"Medium or small size.",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"statusAndProgressLabelOverride",description:"Pass a custom accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const Mh={inheritAttrs:!1},ul=C(M(y({},Mh),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const o=e,n=p(()=>o.ellipsis&&o.content?`${o.content}\u2026`:o.content);return(s,i)=>(l(),d("span",{class:u(a(De).Content)},[e.prefixId?(l(),d("span",{key:0,class:u(a(De).Prefix)},[g(s.$slots,"prefix")],2)):e.icon?(l(),d("span",{key:1,class:u(a(De).Prefix)},[S(a(ae),{source:e.icon},null,8,["source"])],2)):e.image?(l(),d("span",{key:2,class:u(a(De).Prefix),role:"presentation",style:Re({backgroundImage:`url(${e.image}`})},null,6)):_("",!0),w("span",{class:u(a(De).Text)},[e.helpText?(l(),d("span",{key:0,class:u(a(De).ContentBlock)},[w("span",{class:u(a(De).ContentBlockInner)},j(a(n)),3),S(a(Lt),{variation:"subdued"},{default:h(()=>[le(j(e.helpText),1)]),_:1})],2)):(l(),d(X,{key:1},[le(j(a(n)),1)],64))],2),e.badge?(l(),d("span",{key:3,class:u(a(De).Suffix)},[S(a(je),{status:e.badge.status},{default:h(()=>[le(j(e.badge.content),1)]),_:1},8,["status"])],2)):_("",!0),e.suffixId?(l(),d("span",{key:4,class:u(a(De).Suffix)},[g(s.$slots,"suffix")],2)):_("",!0)],2))}}));ul.__docgenInfo={exportName:"default",displayName:"ContentElement",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],slots:[{name:"prefix"},{name:"suffix"}]};const Nh=["role"],Bh=["id","disabled","aria-label","role"],Ih={inheritAttrs:!1},mu=C(M(y({},Ih),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},emits:["action"],setup(e,{emit:o}){const n=e,s=p(()=>O(De.Item,n.disabled&&De.disabled,n.destructive&&De.destructive,n.active&&De.active)),i=p(()=>({badge:n.badge,content:n.content,helpText:n.helpText,icon:n.icon,prefixId:n.prefixId,suffixId:n.suffixId,image:n.image,disabled:n.disabled,ellipsis:n.ellipsis,role:n.role})),r=p(()=>n.role==="menuitem"?"presentation":void 0),c=()=>{n.disabled||o("action")};return(m,f)=>(l(),d("li",{role:a(r)},[e.active?(l(),T(a(Ll),{key:0})):_("",!0),e.url?(l(),T(a(gt),{key:1,id:e.id,url:e.disabled?void 0:e.url,class:u(a(s)),external:e.external,"aria-label":e.accessibilityLabel,role:e.role,onClick:c},{default:h(()=>[S(ul,qe(ht(a(i))),{suffix:h(()=>[g(m.$slots,"suffix")]),prefix:h(()=>[g(m.$slots,"prefix")]),_:3},16)]),_:3},8,["id","url","class","external","aria-label","role"])):(l(),d("button",{key:2,id:e.id,type:"button",class:u(a(s)),disabled:e.disabled,"aria-label":e.accessibilityLabel,role:e.role,onClick:c,onMouseup:f[0]||(f[0]=(...x)=>a(kt)&&a(kt)(...x))},[S(ul,qe(ht(a(i))),{suffix:h(()=>[g(m.$slots,"suffix")]),prefix:h(()=>[g(m.$slots,"prefix")]),_:3},16)],42,Bh))],8,Nh))}}));mu.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"action"}],slots:[{name:"suffix"},{name:"prefix"}]};const Dh=["role","tabIndex"],$h={inheritAttrs:!1},dl=C(M(y({},$h),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=p(()=>n.section.title?void 0:De["Section-withoutTitle"]),i=p(()=>O(De.Title,n.firstSection&&De.firstSectionWithTitle)),r=p(()=>{let m;switch(n.actionRole){case"option":m="presentation";break;case"menuitem":m=n.hasMultipleSections?"presentation":"menu";break;default:m=void 0;break}return m}),c=m=>{m&&m(),o("action-any-item")};return(m,f)=>(l(),d("div",{class:u(a(s))},[e.section.title?(l(),d("p",{key:0,class:u(a(i))},j(e.section.title),3)):_("",!0),w("ul",{class:u(a(De).Actions),role:a(r),tabIndex:e.hasMultipleSections?void 0:-1},[(l(!0),d(X,null,ue(e.section.items,(B,k)=>{var I=B,{content:x,helpText:v,onAction:b}=I,A=G(I,["content","helpText","onAction"]);return l(),T(a(mu),re({key:`${x}-${k}`,content:x,helpText:v,role:e.actionRole},y({},A),{onAction:P=>c(b)}),ze({_:2},[A.prefixId?{name:"prefix",fn:h(()=>[g(m.$slots,`prefix-${A.prefixId}`)])}:void 0,A.suffixId?{name:"suffix",fn:h(()=>[g(m.$slots,`suffix-${A.suffixId}`)])}:void 0]),1040,["content","helpText","role","onAction"])}),128))],10,Dh)],2))}}));dl.__docgenInfo={exportName:"default",displayName:"SectionMarkup",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Eh={inheritAttrs:!1},yu=C(M(y({},Eh),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=p(()=>{const{section:i,hasMultipleSections:r,actionRole:c,firstSection:m}=n;return{section:i,hasMultipleSections:r,actionRole:c,firstSection:m}});return(i,r)=>e.hasMultipleSections?(l(),d("li",{key:0,class:u(a(De).Section),role:"presentation"},[S(dl,re(a(s),{onActionAnyItem:r[0]||(r[0]=c=>o("action-any-item"))}),ze({_:2},[ue(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:h(()=>[g(i.$slots,`prefix-${c}`)])})),ue(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:h(()=>[g(i.$slots,`suffix-${c}`)])}))]),1040)],2)):(l(),T(dl,re({key:1},a(s),{onActionAnyItem:r[1]||(r[1]=c=>o("action-any-item"))}),ze({_:2},[ue(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:h(()=>[g(i.$slots,`prefix-${c}`)])})),ue(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:h(()=>[g(i.$slots,`suffix-${c}`)])}))]),1040))}}));yu.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Fh={inheritAttrs:!1},Fe=C(M(y({},Fh),{props:{items:{default:void 0},sections:{default:()=>[]},actionRole:{default:void 0}},emits:["action-any-item"],setup(e,{emit:o}){const n=e,s=L(null),i=p(()=>n.items?[{items:n.items},...n.sections]:n.sections?n.sections:[]),r=p(()=>i.value.length>1),c=p(()=>r.value?"ul":"div"),m=p(()=>r.value&&n.actionRole==="menuitem"?"menu":void 0),f=p(()=>r.value&&n.actionRole==="menuitem"?-1:void 0),x=b=>{b.preventDefault();const A=b.target;s.value&&A&&s.value.contains(A)&&yy(s.value,A)},v=b=>{b.preventDefault();const A=b.target;s.value&&A&&s.value.contains(A)&&hy(s.value,A)};return(b,A)=>(l(),T(Pe(a(c)),{ref_key:"actionListRef",ref:s,role:a(m),class:u(a(O)(a(De).ActionList)),tabIndex:a(f)},{default:h(()=>[(l(!0),d(X,null,ue(a(i),(k,B)=>(l(),d(X,null,[k.items&&k.items.length>0?(l(),T(a(yu),{key:k.title||B,firstSection:B===0,section:k,hasMultipleSections:a(r),actionRole:e.actionRole,onActionAnyItem:A[0]||(A[0]=I=>o("action-any-item"))},ze({_:2},[ue(k.items,({prefixId:I})=>({name:`prefix-${I}`,fn:h(()=>[g(b.$slots,`prefix-${I}`)])})),ue(k.items,({suffixId:I})=>({name:`suffix-${I}`,fn:h(()=>[g(b.$slots,`suffix-${I}`)])}))]),1032,["firstSection","section","hasMultipleSections","actionRole"])):_("",!0)],64))),256)),e.actionRole==="menuitem"?(l(),d(X,{key:0},[S(a(tt),{keyEvent:"keydown",keyCode:a(Qe).ArrowDown,handler:v},null,8,["keyCode"]),S(a(tt),{keyEvent:"keydown",keyCode:a(Qe).ArrowUp,handler:x},null,8,["keyCode"])],64)):_("",!0)]),_:3},8,["role","class","tabIndex"]))}}));Fe.__docgenInfo={exportName:"default",displayName:"ActionList",description:"",tags:{},props:[{name:"items",description:"Collection of actions for list",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"undefined"}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"menuitem"'}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Oh="Polaris-ActionMenu";var qh={ActionMenu:Oh};const Rh="Polaris-ActionMenu-Actions__ActionsLayout";var Hh={ActionsLayout:Rh};const Vh="Polaris-ActionMenu-MenuGroup__Details";var Uh={Details:Vh};const jh="Polaris-ActionMenu-SecondaryAction",Wh="Polaris-ActionMenu-SecondaryAction--destructive";var $r={SecondaryAction:jh,destructive:Wh};const os=C({props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:null,textAlign:null,outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean]},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},emits:["click","get-offset-width"],setup(e,{emit:o}){const n=e,s=L(null),i=p(()=>O($r.SecondaryAction,n.destructive&&$r.destructive));pe(()=>{var c;r(((c=s.value)==null?void 0:c.offsetWidth)||0)});const r=c=>{s.value&&o("get-offset-width",c)};return(c,m)=>(l(),d("span",{class:u(a(i)),ref_key:"secondaryActionsRef",ref:s},[S(a(ne),re({onClick:m[0]||(m[0]=f=>c.$emit("click"))},n),{default:h(()=>[g(c.$slots,"default")]),_:3},16)],2))}});os.__docgenInfo={exportName:"default",displayName:"SecondaryAction",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"primary",required:!1,type:{name:"boolean"}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]}},{name:"textAlign",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]}},{name:"outline",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]}},{name:"plain",required:!1,type:{name:"boolean"}},{name:"monochrome",required:!1,type:{name:"boolean"}},{name:"removeUnderline",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",required:!1,type:{name:"ConnectedDisclosure"}}],events:[{name:"click"},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const zh={inheritAttrs:!1},hu=C(M(y({},zh),{props:{badge:null,title:null,actions:null,icon:null,index:null,accessibilityLabel:null,active:{type:Boolean}},emits:["open","close","get-offset-width"],setup(e,{emit:o}){const n=e,s=se(),i=()=>{o("close",n.title)},r=()=>{o("open",n.title)},c=m=>{o("get-offset-width",m)};return(m,f)=>e.actions.length?(l(),T(a(He),{key:0,active:Boolean(e.active),"preferred-alignment":"left",hideOnPrint:"",onClose:i},{activator:h(()=>[S(a(os),{disclosure:!0,icon:e.icon,accessibilityLabel:e.accessibilityLabel,onClick:r,onGetOffsetWidth:c},{default:h(()=>[le(j(e.title),1)]),_:1},8,["icon","accessibilityLabel"])]),content:h(()=>[S(a(Fe),{items:e.actions,onActionAnyItem:i},null,8,["items"]),a(s).default?(l(),d("div",{key:0,class:u(a(Uh).Details)},[g(m.$slots,"default")],2)):_("",!0)]),_:3},8,["active"])):_("",!0)}}));hu.__docgenInfo={exportName:"default",displayName:"MenuGroup",description:"",tags:{},props:[{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"title",description:"Menu group title",required:!0,type:{name:"string"}},{name:"actions",description:"List of actions",required:!0,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"icon",description:"Icon to display",required:!1,type:{name:"TSIndexedAccessType"}},{name:"index",description:"Zero-indexed numerical position. Overrides the group's order in the menu.",required:!1,type:{name:"number"}},{name:"accessibilityLabel",description:"Visually hidden menu description for screen readers",required:!1,type:{name:"string"}},{name:"active",description:"Whether or not the menu is open",required:!1,type:{name:"boolean"}}],events:[{name:"open",type:{names:["string"]}},{name:"close",type:{names:["string"]}},{name:"get-offset-width",type:{names:["number"]}}],slots:[{name:"default"}]};const gu=C({props:{actions:null,groups:null},setup(e){const o=e,n=8,s=xe("lang"),i=L(null),r=L(0),c=L(0),m=L(0),f=L(0),x=L([]),v=L(null),b=L({showable:[],rolledUp:[]}),A=L({title:s.Polaris.ActionMenu.Actions.moreActions,actions:[]}),k=p(()=>o.groups&&o.groups.length?[...o.groups].pop():[]),B=p(()=>[...x.value].pop()||0),I=V=>{x.value=[...x.value,V]},P=V=>{v.value?v.value=null:v.value=V},$=()=>{v.value=null},q=p(()=>o.groups?[...o.groups,A.value]:[A.value]),E=p(()=>q.value.filter(V=>o.groups&&o.groups.length===0?V:V===k.value||!b.value.rolledUp.some(Y=>we(Y)&&Y.title===V.title))),K=V=>V===A.value,F=V=>V===k.value,W=p(()=>b.value.rolledUp.reduce((V,Y)=>(V.push(...we(Y)?Y.actions:[Y]),V),[])),D=V=>{const ye=V,{actions:Y}=ye,ie=G(ye,["actions"]);return M(y({},ie),{active:v.value===V.title})},U=V=>!K(V)&&!F(V)?V.actions:!K(V)&&F(V)?[...W.value,...V.actions]:K(V)&&(!o.groups||o.groups.length===0)&&W.value.length?W.value:[],te=()=>{let V=[...o.actions||[],...o.groups||[]];o.groups&&o.groups.length>0&&(V=[...V].slice(0,V.length-1));const Y=V.slice(0,b.value.showable.length),ie=V.slice(b.value.showable.length,V.length);b.value={showable:Y,rolledUp:ie}};ao(()=>{if(te(),!!i.value){if(c.value=i.value.offsetWidth,f.value>=2&&[...o.actions||[],...o.groups||[]].length===m.value){te();return}de()}});const de=()=>{if(x.value.length===0||c.value===0)return;const V=[...o.actions||[],...o.groups||[]];if(V.length===1){b.value={showable:V,rolledUp:[]};return}let Y=c.value,ie=[],ye=[];V.forEach((fe,Ye)=>{if(x.value[Ye]+r.value+n+B.value<=Y)Y-=x.value[Ye]+n*2,ie=[...ie,fe];else{if(Y=0,fe===k.value)return;ye=[...ye,fe]}}),b.value={showable:ie,rolledUp:ye},f.value+=1,m.value=V.length},ce=()=>{eo(()=>{!i.value||(c.value=i.value.offsetWidth,f.value=0,de())},50,{leading:!1,trailing:!0})};function we(V){return"title"in V}return(V,Y)=>(l(),d("div",{ref_key:"actionsLayoutRef",ref:i,class:u(a(Hh).ActionsLayout)},[S(a(Ke),{spacing:"extraTight"},{default:h(()=>[b.value.showable.length>0?(l(!0),d(X,{key:0},ue(b.value.showable,ie=>(l(),d(X,{key:ie.content},[ie.content?(l(),T(a(os),re({key:0},ie,{onGetOffsetWidth:I}),{default:h(()=>[le(j(ie.content),1)]),_:2},1040)):_("",!0)],64))),128)):_("",!0),(l(!0),d(X,null,ue(e.actions,ie=>(l(),d(X,{key:ie.content},[!b.value.showable.length&&!b.value.rolledUp.includes(ie)?(l(),T(a(os),re({key:0},ie,{onClick:ye=>ie.onAction?ie.onAction():void 0,onGetOffsetWidth:I}),{default:h(()=>[le(j(ie.content),1)]),_:2},1040,["onClick"])):_("",!0)],64))),128)),(l(!0),d(X,null,ue(a(E),ie=>(l(),T(a(hu),re({key:ie.title},D(ie),{actions:U(ie),onOpen:P,onClose:$,onGetOffsetWidth:I}),null,16,["actions"]))),128))]),_:1}),S(a(We),{event:"resize",handler:ce})],2))}});gu.__docgenInfo={exportName:"default",displayName:"Actions",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}]};const Gh={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Kh=w("path",{d:"M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z"},null,-1),Xh=[Kh];function Yh(e,o){return l(),d("svg",Gh,Xh)}var bu={render:Yh};const Qh="Polaris-ActionMenu-RollupActions__RollupActivator";var Jh={RollupActivator:Qh};const fu=C({props:{accessibilityLabel:null,items:null,sections:null},setup(e){const o=xe("lang"),n=L(!1),s=()=>{n.value=!n.value};return(i,r)=>{var c,m;return((c=e.items)==null?void 0:c.length)||((m=e.sections)==null?void 0:m.length)?(l(),T(a(He),{key:0,active:n.value,preferredAlignment:"right",onClose:s,hideOnPrint:""},{activator:h(()=>[w("div",{class:u(a(Jh).RollupActivator)},[S(a(ne),{outline:"",icon:a(bu),accessibilityLabel:e.accessibilityLabel||a(o).Polaris.ActionMenu.RollupActions.rollupButton,onClick:s},null,8,["icon","accessibilityLabel"])],2)]),content:h(()=>[S(a(Fe),{items:e.items,sections:e.sections,onActionAnyItem:s},null,8,["items","sections"])]),_:1},8,["active"])):_("",!0)}}});fu.__docgenInfo={exportName:"default",displayName:"RollupActions",description:"",tags:{},props:[{name:"accessibilityLabel",description:"Accessibilty label",required:!1,type:{name:"string"}},{name:"items",description:"Collection of actions for the list",required:!1,type:{name:"Array",elements:[{name:"ActionListItemDescriptor"}]}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"Array",elements:[{name:"ActionListSection"}]}}]};const Zh={inheritAttrs:!1},vu=C(M(y({},Zh),{props:{actions:null,groups:null,rollup:{type:Boolean},rollupActionsLabel:null},setup(e){const o=e,n=p(()=>O(qh.ActionMenu)),s=p(()=>(o.groups||[]).map(r=>i(r)));function i({title:r,actions:c}){return{title:r,items:c}}return(r,c)=>e.actions&&e.actions.length||e.groups&&e.groups.length?(l(),d("div",{key:0,class:u(a(n))},[e.rollup?(l(),T(a(fu),{key:0,accessibilityLabel:e.rollupActionsLabel,items:e.actions,sections:a(s)},null,8,["accessibilityLabel","items","sections"])):(l(),T(a(gu),{key:1,actions:e.actions,groups:e.groups},null,8,["actions","groups"]))],2)):_("",!0)}}));vu.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"actions",description:"Collection of page-level secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"groups",description:"Collection of page-level action groups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"rollup",description:"Roll up all actions into a Popover > ActionList",required:!1,type:{name:"boolean"}},{name:"rollupActionsLabel",description:"Label for rolled up actions activator",required:!1,type:{name:"string"}}]};const Er="data-lock-scrolling",Fr="data-lock-scrolling-wrapper";let Un=0;class eg{constructor(){this.scrollLocks=0,this.locked=!1}registerScrollLock(){this.scrollLocks+=1,this.handleScrollLocking()}unregisterScrollLock(){this.scrollLocks-=1,this.handleScrollLocking()}handleScrollLocking(){if(Gc)return;const{scrollLocks:o}=this,{body:n}=document,s=n.firstElementChild;o===0?(n.removeAttribute(Er),s&&s.removeAttribute(Fr),window.scroll(0,Un),this.locked=!1):o>0&&!this.locked&&(Un=window.pageYOffset,n.setAttribute(Er,""),s&&(s.setAttribute(Fr,""),s.scrollTop=Un),this.locked=!0)}resetScrollPosition(){Un=0}}class tg{constructor(o){this.idGenerators={},this.idGeneratorFactory=o}nextId(o){return this.idGenerators[o]||(this.idGenerators[o]=this.idGeneratorFactory(o)),this.idGenerators[o]()}}function og(e=""){let o=1;return()=>`Polaris${e}${o++}`}const ag={ActionMenu:{Actions:{moreActions:"More actions"},RollupActions:{rollupButton:"View actions"}},Avatar:{label:"Avatar",labelWithInitials:"Avatar with initials {initials}"},Autocomplete:{spinnerAccessibilityLabel:"Loading",ellipsis:"{content}\u2026"},Badge:{PROGRESS_LABELS:{incomplete:"Incomplete",partiallyComplete:"Partially complete",complete:"Complete"},STATUS_LABELS:{info:"Info",success:"Success",warning:"Warning",critical:"Critical",attention:"Attention",new:"New"},progressAndStatus:"{statusLabel} {progressLabel}"},Button:{spinnerAccessibilityLabel:"Loading",connectedDisclosureAccessibilityLabel:"Related actions"},Common:{checkbox:"checkbox",undo:"Undo",cancel:"Cancel",newWindowAccessibilityHint:"(opens a new window)",clear:"Clear",close:"Close",submit:"Submit",more:"More"},ContextualSaveBar:{save:"Save",discard:"Discard"},DataTable:{sortAccessibilityLabel:"sort {direction} by",navAccessibilityLabel:"Scroll table {direction} one column",totalsRowHeading:"Totals",totalRowHeading:"Total"},DatePicker:{previousMonth:"Show previous month, {previousMonthName} {showPreviousYear}",nextMonth:"Show next month, {nextMonth} {nextYear}",today:"Today ",start:"Start of range",end:"End of range",months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}},DiscardConfirmationModal:{title:"Discard all unsaved changes",message:"If you discard changes, you\u2019ll delete any edits you made since you last saved.",primaryAction:"Discard changes",secondaryAction:"Continue editing"},DropZone:{single:{overlayTextFile:"Drop file to upload",overlayTextImage:"Drop image to upload",actionTitleFile:"Add file",actionTitleImage:"Add image",actionHintFile:"or drop file to upload",actionHintImage:"or drop image to upload",labelFile:"Upload file",labelImage:"Upload image"},allowMultiple:{overlayTextFile:"Drop files to upload",overlayTextImage:"Drop images to upload",actionTitleFile:"Add files",actionTitleImage:"Add images",actionHintFile:"or drop files to upload",actionHintImage:"or drop images to upload",labelFile:"Upload files",labelImage:"Upload images"},errorOverlayTextFile:"File type is not valid",errorOverlayTextImage:"Image type is not valid"},EmptySearchResult:{altText:"Empty search results"},Frame:{skipToContent:"Skip to content",navigationLabel:"Navigation",Navigation:{closeMobileNavigationLabel:"Close navigation"}},Filters:{moreFilters:"More filters",moreFiltersWithCount:"More filters ({count})",filter:"Filter {resourceName}",noFiltersApplied:"No filters applied",cancel:"Cancel",done:"Done",clearAllFilters:"Clear all filters",clear:"Clear",clearLabel:"Clear {filterName}"},IndexProvider:{defaultItemSingular:"Item",defaultItemPlural:"Items",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} are selected.",selected:"{selectedItemsCount} selected",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}"},IndexTable:{emptySearchTitle:"No {resourceNamePlural} found",emptySearchDescription:"Try changing the filters or search term",onboardingBadgeText:"New",resourceLoadingAccessibilityLabel:"Loading {resourceNamePlural}\u2026",selectAllLabel:"Select all {resourceNamePlural}",selected:"{selectedItemsCount} selected",undo:"Undo",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural}",selectItem:"Select {resourceName}",selectButtonText:"Select"},Loading:{label:"Page loading bar"},Modal:{iFrameTitle:"body markup",modalWarning:"These required properties are missing from Modal: {missingProps}"},Page:{Header:{rollupActionsLabel:"View actions for {title}"}},Pagination:{previous:"Previous",next:"Next",pagination:"Pagination"},ProgressBar:{negativeWarningMessage:"Values passed to the progress prop shouldn\u2019t be negative. Resetting {progress} to 0.",exceedWarningMessage:"Values passed to the progress prop shouldn\u2019t exceed 100. Setting {progress} to 100."},ResourceList:{sortingLabel:"Sort by",defaultItemSingular:"item",defaultItemPlural:"items",showing:"Showing {itemsCount} {resource}",showingTotalCount:"Showing {itemsCount} of {totalItemsCount} {resource}",loading:"Loading {resource}",selected:"{selectedItemsCount} selected",allItemsSelected:"All {itemsLength}+ {resourceNamePlural} in your store are selected.",allFilteredItemsSelected:"All {itemsLength}+ {resourceNamePlural} in this filter are selected.",selectAllItems:"Select all {itemsLength}+ {resourceNamePlural} in your store",selectAllFilteredItems:"Select all {itemsLength}+ {resourceNamePlural} in this filter",emptySearchResultTitle:"No {resourceNamePlural} found",emptySearchResultDescription:"Try changing the filters or search term",selectButtonText:"Select",a11yCheckboxDeselectAllSingle:"Deselect {resourceNameSingular}",a11yCheckboxSelectAllSingle:"Select {resourceNameSingular}",a11yCheckboxDeselectAllMultiple:"Deselect all {itemsLength} {resourceNamePlural}",a11yCheckboxSelectAllMultiple:"Select all {itemsLength} {resourceNamePlural}",ariaLiveSingular:"{itemsLength} item",ariaLivePlural:"{itemsLength} items",Item:{actionsDropdownLabel:"Actions for {accessibilityLabel}",actionsDropdown:"Actions dropdown",viewItem:"View details for {itemName}"},BulkActions:{actionsActivatorLabel:"Actions",moreActionsActivatorLabel:"More actions",warningMessage:"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions."}},SkeletonPage:{loadingLabel:"Page loading"},Tabs:{toggleTabsLabel:"More tabs"},Tag:{ariaLabel:"Remove {children}"},TextField:{characterCount:"{count} characters",characterCountWithMaxLength:"{count} of {limit} characters used"},TooltipOverlay:{accessibilityLabel:"Tooltip: {label}"},TopBar:{toggleMenuLabel:"Toggle menu",SearchField:{clearButtonLabel:"Clear",search:"Search"}},MediaCard:{popoverButton:"Actions"},VideoThumbnail:{playButtonA11yLabel:{default:"Play video",defaultWithDuration:"Play video of length {duration}",duration:{hours:{other:{only:"{hourCount} hours",andMinutes:"{hourCount} hours and {minuteCount} minutes",andMinute:"{hourCount} hours and {minuteCount} minute",minutesAndSeconds:"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hours, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hours, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hours and {secondCount} seconds",andSecond:"{hourCount} hours and {secondCount} second"},one:{only:"{hourCount} hour",andMinutes:"{hourCount} hour and {minuteCount} minutes",andMinute:"{hourCount} hour and {minuteCount} minute",minutesAndSeconds:"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds",minutesAndSecond:"{hourCount} hour, {minuteCount} minutes, and {secondCount} second",minuteAndSeconds:"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds",minuteAndSecond:"{hourCount} hour, {minuteCount} minute, and {secondCount} second",andSeconds:"{hourCount} hour and {secondCount} seconds",andSecond:"{hourCount} hour and {secondCount} second"}},minutes:{other:{only:"{minuteCount} minutes",andSeconds:"{minuteCount} minutes and {secondCount} seconds",andSecond:"{minuteCount} minutes and {secondCount} second"},one:{only:"{minuteCount} minute",andSeconds:"{minuteCount} minute and {secondCount} seconds",andSecond:"{minuteCount} minute and {secondCount} second"}},seconds:{other:"{secondCount} seconds",one:"{secondCount} second"}}}}};var pl={Polaris:ag};class xu{constructor(){Je(this,"portalIds",[])}register(o){this.portalIds.includes(o)||this.portalIds.push(o)}hasContainer(){return this.portalIds.length}}class ng{constructor(){Je(this,"trapFocusList",[])}add(o){this.trapFocusList=[...this.trapFocusList,o]}remove(o){const n=this.trapFocusList.indexOf(o);return n>-1&&(this.trapFocusList=this.trapFocusList.splice(n,1)),n>-1}}const ml="light",Or="polaris-custom-properties";const sg=w("div",{id:"PolarisPortalsContainer"},null,-1),us=C({props:{colorScheme:{type:String,default:ml}},setup(e){const o=e,n=new eg,s=new xu,i=L(new tg(og)),r=new ng,c=L(kr().matches),m=()=>{document.body.setAttribute("p-color-scheme",o.colorScheme||ml),document.body.style.backgroundColor="var(--p-background)",document.body.style.color="var(--p-text)"},f=eo(()=>{c.value!==kr().matches&&(c.value=!c.value)},40,{trailing:!0,leading:!0,maxWait:40});return Be(()=>o.colorScheme,(x,v)=>{x!==v&&m()}),pe(()=>{document!==null&&m()}),$e("mediaQueryContext",{isNavigationCollapsed:c.value}),$e("scrollLockManager",n),$e("portalManager",s),$e("uniqueIdFactory",i.value),$e("focusManager",r),$e("lang",pl),(x,v)=>(l(),T(a(ba),{"color-scheme":e.colorScheme},{default:h(()=>[S(a(We),{event:"resize",handler:a(f)},null,8,["handler"]),g(x.$slots,"default"),sg]),_:3},8,["color-scheme"]))}});us.__docgenInfo={exportName:"default",displayName:"AppProvider",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}}],slots:[{name:"default"}]};const ig="Polaris-Avatar",lg="Polaris-Avatar--hidden",rg="Polaris-Avatar--sizeExtraSmall",cg="Polaris-Avatar--sizeSmall",ug="Polaris-Avatar--sizeMedium",dg="Polaris-Avatar--sizeLarge",pg="Polaris-Avatar--styleOne",mg="Polaris-Avatar--styleTwo",yg="Polaris-Avatar--styleThree",hg="Polaris-Avatar--styleFour",gg="Polaris-Avatar--styleFive",bg="Polaris-Avatar--hasImage",fg="Polaris-Avatar__Image",vg="Polaris-Avatar__Initials",xg="Polaris-Avatar__Svg";var Nt={Avatar:ig,hidden:lg,sizeExtraSmall:rg,sizeSmall:cg,sizeMedium:ug,sizeLarge:dg,styleOne:pg,styleTwo:mg,styleThree:yg,styleFour:hg,styleFive:gg,hasImage:bg,Image:fg,Initials:vg,Svg:xg};const Xi=["one","two","three","four","five"];function Tg(e){return e?Xi[e.charCodeAt(0)%Xi.length]:Xi[0]}const Sg=["src","srcSet","crossOrigin"],Ag=["src","crossOrigin"],ga=C({props:{source:null,crossOrigin:null,sourceSet:null},setup(e){const o=e,n=p(()=>o.sourceSet?o.sourceSet.map(({source:s,descriptor:i})=>`${s} ${i}`).join(","):null);return(s,i)=>a(n)?(l(),d("img",{key:0,src:e.source,srcSet:e.sourceSet,crossOrigin:e.crossOrigin},null,8,Sg)):(l(),d("img",{key:1,src:e.source,crossOrigin:e.crossOrigin},null,8,Ag))}});ga.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"source",required:!0,type:{name:"string"}},{name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},{name:"sourceSet",required:!1,type:{name:"Array",elements:[{name:"SourceSet"}]}}]};const Cg=["aria-label"],Ka=C({props:{size:{default:"medium"},name:{default:void 0},initials:{default:void 0},customer:{type:Boolean,default:void 0},source:{default:void 0},accessibilityLabel:{default:void 0}},emits:["error"],setup(e,{emit:o}){const n=e,s=L("PENDING"),i="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z",r="0.35em",c=p(()=>n.source&&s.value!=="ERRORED"),m=p(()=>{const b=ke("size",n.size),A=ke("style",Tg(n.name||n.initials));return O(Nt.Avatar,b&&Nt[b],!n.customer&&Nt[A],(c.value||n.initials&&n.initials.length===0)&&s.value!=="LOADED"&&Nt.hidden,c.value&&Nt.hasImage)}),f=p(()=>n.accessibilityLabel?n.accessibilityLabel:n.name?n.name:n.initials?`Avatar with initials ${n.initials.split("").join(" ")}`:"Avatar"),x=()=>{s.value="LOADED"},v=()=>{s.value="ERRORED",o("error")};return(b,A)=>(l(),d("span",{"aria-label":a(f),role:"img",class:u(a(m))},[a(c)?_("",!0):(l(),d("span",{key:0,class:u(a(Nt).Initials)},[(l(),d("svg",{class:u(a(Nt).Svg),viewBox:"0 0 40 40"},[e.customer||!e.initials?(l(),d("path",{key:0,fill:"currentColor",d:i})):(l(),d("text",{key:1,x:"50%",y:"50%",dy:r,fill:"currentColor","font-size":"20","text-anchor":"middle"},j(e.initials),1))],2))],2)),e.source&&s.value!=="ERRORED"?(l(),T(a(ga),{key:1,class:u(a(Nt).Image),source:e.source,alt:"",role:"presentation",onLoad:x,onError:v},null,8,["class","source"])):_("",!0)],10,Cg))}});Ka.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",description:"Size of avatar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"name",description:"The name of the person",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"initials",description:"Initials of person to display",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"customer",description:"Whether the avatar is for a customer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"source",description:"URL of the avatar image which falls back to initials if the image fails to load",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"accessibilityLabel",description:"Accessible label for the avatar image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"error"}]};const kg="Polaris-Backdrop",Lg="Polaris-Backdrop--transparent",_g="Polaris-Backdrop--belowNavigation";var Yi={Backdrop:kg,"fade-in":"Polaris-Backdrop__fade--in",transparent:Lg,belowNavigation:_g};const Pg={inheritAttrs:!1,render(){return null}},_l=C(M(y({},Pg),{setup(e){const o=xe("scrollLockManager");return pe(()=>{o.registerScrollLock()}),it(()=>{o.unregisterScrollLock()}),()=>{}}}));_l.__docgenInfo={exportName:"default",displayName:"ScrollLock",description:"",tags:{}};const Pl=C({props:{belowNavigation:{type:Boolean},transparent:{type:Boolean}},setup(e){const o=e,n=p(()=>O(Yi.Backdrop,o.belowNavigation&&Yi.belowNavigation,o.transparent&&Yi.transparent));return(s,i)=>(l(),d("div",{class:u(a(n))},[S(a(_l))],2))}});Pl.__docgenInfo={exportName:"default",displayName:"Backdrop",description:"",tags:{},props:[{name:"belowNavigation",required:!1,type:{name:"boolean"}},{name:"transparent",required:!1,type:{name:"boolean"}}]};const wg="Polaris-Breadcrumbs__Breadcrumb",Mg="Polaris-Breadcrumbs__Icon",Ng="Polaris-Breadcrumbs__Content";var jn={Breadcrumb:wg,Icon:Mg,Content:Ng};const Bg={key:0,role:"navigation"},Ig=["aria-label"],Tu=C({props:{breadcrumbs:null},setup(e){const o=e,n=L(o.breadcrumbs[o.breadcrumbs.length-1]),s=p(()=>{const{url:r}=n.value;return r}),i=p(()=>{const{onAction:r}=n.value;return r});return(r,c)=>n.value?(l(),d("nav",Bg,[a(s)?(l(),T(a(gt),{key:n.value.content,url:a(s),class:u(a(jn).Breadcrumb),"aria-label":n.value.accessibilityLabel,onMouseup:a(kt)},{default:h(()=>[w("span",{class:u(a(jn).Icon)},[S(a(ae),{source:a(ya)},null,8,["source"])],2),S(a(Ge),null,{default:h(()=>[le(j(n.value.content),1)]),_:1})]),_:1},8,["url","class","aria-label","onMouseup"])):(l(),d("button",{type:"button",key:n.value.content,class:u(a(jn).Breadcrumb),"aria-label":n.value.accessibilityLabel,onMouseup:c[0]||(c[0]=(...m)=>a(kt)&&a(kt)(...m)),onClick:c[1]||(c[1]=(...m)=>a(i)&&a(i)(...m))},[w("span",{class:u(a(jn).Icon)},[S(a(ae),{source:a(ya)},null,8,["source"])],2),S(a(Ge),null,{default:h(()=>[le(j(n.value.content),1)]),_:1})],42,Ig))])):_("",!0)}});Tu.__docgenInfo={exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const Dg="Polaris-Button",$g="Polaris-Button--pressed",Eg="Polaris-Button--disabled",Fg="Polaris-Button--connectedDisclosure",Og="Polaris-Button__Content",qg="Polaris-Button--plain",Rg="Polaris-Button--textAlignLeft",Hg="Polaris-Button--textAlignCenter",Vg="Polaris-Button--textAlignRight",Ug="Polaris-Button__Icon",jg="Polaris-Button--fullWidth",Wg="Polaris-Button--hidden",zg="Polaris-Button__Spinner",Gg="Polaris-Button--primary",Kg="Polaris-Button--destructive",Xg="Polaris-Button--outline",Yg="Polaris-Button--loading",Qg="Polaris-Button--removeUnderline",Jg="Polaris-Button--iconOnly",Zg="Polaris-Button--sizeSlim",eb="Polaris-Button--sizeLarge",tb="Polaris-Button--monochrome",ob="Polaris-Button__Text",ab="Polaris-Button__ConnectedDisclosureWrapper",nb="Polaris-Button__ConnectedDisclosure";var ge={Button:Dg,pressed:$g,disabled:Eg,connectedDisclosure:Fg,Content:Og,plain:qg,textAlignLeft:Rg,textAlignCenter:Hg,textAlignRight:Vg,Icon:Ug,fullWidth:jg,hidden:Wg,Spinner:zg,primary:Gg,destructive:Kg,outline:Xg,loading:Yg,removeUnderline:Qg,iconOnly:Jg,sizeSlim:Zg,sizeLarge:eb,monochrome:tb,Text:ob,ConnectedDisclosureWrapper:ab,ConnectedDisclosure:nb},$t=(e=>(e[e.Click=0]="Click",e[e.EscapeKeypress=1]="EscapeKeypress",e[e.FocusOut=2]="FocusOut",e[e.ScrollOut=3]="ScrollOut",e))($t||{}),ct=(e=>(e.Entering="entering",e.Entered="entered",e.Exiting="exiting",e.Exited="exited",e))(ct||{});function qr(e,o){if(e===o)return!0;let n=o.parentNode;for(;n!=null;){if(n===e)return!0;n=n.parentNode}return!1}function sb(e,{id:o,active:n=!1,ariaHaspopup:s,activatorDisabled:i=!1}){i||(e.tabIndex=e.tabIndex||0),e.setAttribute("aria-controls",o),e.setAttribute("aria-owns",o),e.setAttribute("aria-expanded",String(n)),s!=null&&e.setAttribute("aria-haspopup",String(s))}const ib="Polaris-PositionedOverlay",lb="Polaris-PositionedOverlay--fixed",rb="Polaris-PositionedOverlay--calculating",cb="Polaris-PositionedOverlay--preventInteraction";var Qi={PositionedOverlay:ib,fixed:lb,calculating:rb,preventInteraction:cb};const ub="Polaris-Popover",db="Polaris-Popover__PopoverOverlay",pb="Polaris-Popover--measuring",mb="Polaris-Popover--fullWidth",yb="Polaris-Popover__Content",hb="Polaris-Popover--positionedAbove",gb="Polaris-Popover__Wrapper",bb="Polaris-Popover__Pane",fb="Polaris-Popover__Section",vb="Polaris-Popover__FocusTracker";var Ee={Popover:ub,PopoverOverlay:db,"PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",measuring:pb,fullWidth:mb,Content:yb,positionedAbove:hb,Wrapper:gb,"Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:bb,"Pane-fixed":"Polaris-Popover__Pane--fixed",Section:fb,FocusTracker:vb,"PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"};const xb="Polaris-Tooltip-TooltipOverlay",Tb="Polaris-Tooltip-TooltipOverlay--measuring",Sb="Polaris-Tooltip-TooltipOverlay--positionedAbove",Ab="Polaris-Tooltip-TooltipOverlay__Content";var Kn={TooltipOverlay:xb,measuring:Tb,positionedAbove:Sb,Content:Ab};function Cb(e,o,n,s,i,r,c,m=0){const f=e.top,x=f+e.height,v=e.top-m,b=i.height-e.top-e.height,A=o.height,k=n.activator+n.container,B=n.container,I=e.top-Math.max(s.top,0),P=i.top+Math.min(i.height,s.top+s.height)-(e.top+e.height),$=I>=B,q=P>=B,E=Math.min(b,A),K=Math.min(v,A),F=c?0:i.top,W={height:K-k,top:f+F-K,positioning:"above"},D={height:E-k,top:x+F,positioning:"below"};return r==="above"?($||I>=P&&!q)&&(v>A||v>b)?W:D:r==="below"?(q||P>=I&&!$)&&(b>A||b>v)?D:W:$&&q?v>b?W:D:I>B?W:D}function kb(e,o,n,s,i){const r=n.width-o.width;if(i==="left")return Math.min(r,Math.max(0,e.left-s.horizontal));if(i==="right"){const c=n.width-(e.left+e.width);return Math.min(r,Math.max(0,c-s.horizontal))}return Math.min(r,Math.max(0,e.center.x-o.width/2))}function Lb(e,o){const{center:n}=e;return n.y<o.top||n.y>o.top+o.height}function Su(){return new to({top:window.scrollY,left:window.scrollX,height:window.innerHeight,width:document.body.clientWidth})}function _b(e,o=Su()){const n=Math.max(e.top,0),s=Math.max(e.left,0),i=Math.min(e.top+e.height,o.height),r=Math.min(e.left+e.width,o.width);return new to({top:n,left:s,height:i-n,width:r-s})}function Pb(e){return e===document}function wb(e){const o=window.getComputedStyle(e);return{activator:parseFloat(o.marginTop||"0"),container:parseFloat(o.marginBottom||"0"),horizontal:parseFloat(o.marginLeft||"0")}}function Mb(e){const o=e.closest(Qn.selector)||document.body,n=o===document.body?"auto":parseInt(window.getComputedStyle(o).zIndex||"0",10);return n==="auto"||Number.isNaN(n)?null:n}const Nb={inheritAttrs:!1,render(){return null}},We=C(M(y({},Nb),{props:{event:{type:String,required:!0},capture:{type:Boolean},passive:{type:Boolean},handler:{type:Function,required:!0}},setup(e){const o=e;function n(){const{event:i,capture:r,passive:c,handler:m}=o;window.addEventListener(i,m,{capture:r,passive:c})}function s(i){const{event:r,handler:c,capture:m}=i||o;window.removeEventListener(r,c,m)}return Be(()=>y({},o),(i,r)=>{i!==r&&(s(r),n())}),pe(()=>n()),it(()=>s()),()=>{}}}));We.__docgenInfo={exportName:"default",displayName:"EventListener",description:"",tags:{},props:[{name:"event",type:{name:"string"},required:!0},{name:"capture",type:{name:"boolean"}},{name:"passive",type:{name:"boolean"}},{name:"handler",type:{name:"Function as unknown as () => BaseEventProps['handler']"},required:!0}]};function Bb(e){const o=e.closest(ls.selector);return o instanceof HTMLElement?o:document}const Ib={inheritAttrs:!1},wl=C(M(y({},Ib),{props:{active:{type:Boolean},activator:null,preferInputActivator:{type:Boolean},preferredPosition:null,preferredAlignment:null,fullWidth:{type:Boolean},fixed:{type:Boolean},preventInteraction:{type:Boolean},classNames:null,zIndexOverride:null,hideOnPrint:{type:Boolean},layout:null},emits:["change-content-styles","scroll-out"],setup(e,{emit:o}){const n=e,s={childList:!0,subtree:!0,characterData:!0},i=L(null),r=L(null),c=L(null),m=L(0),f=L(0),x=L(null),v=L(null),b=L(!0),A=L("below"),k=L(At(n.activator)),B=L(!1),I=L(!1),P=L(null),$=L(null),q=p(()=>{const D=n.classNames;return O(Qi.PositionedOverlay,n.fixed&&Qi.fixed,n.preventInteraction&&Qi.preventInteraction,D)}),E=p(()=>O(Ee.Popover,A.value==="above"&&Ee.positionedAbove,n.fullWidth&&Ee.fullWidth,b.value&&Ee.measuring,n.hideOnPrint&&Ee["PopoverOverlay-hideOnPrint"])),K=p(()=>O(Kn.TooltipOverlay,b.value&&Kn.measuring,A.value==="above"&&Kn.positionedAbove)),F=p(()=>({top:m.value==null||Number.isNaN(m.value)?void 0:`${m.value}px`,left:c.value==null||Number.isNaN(c.value)?void 0:`${c.value}px`,right:r.value==null||Number.isNaN(r.value)?void 0:`${r.value}px`,width:x.value==null||Number.isNaN(x.value)?void 0:`${x.value}px`,zIndex:n.zIndexOverride||v.value||void 0})),W=()=>{if($.value&&$.value.disconnect(),f.value=0,A.value="below",b.value=!0,i.value&&P.value){const{activator:D,preferredPosition:U="below",preferredAlignment:te="center",fullWidth:de,fixed:ce,preferInputActivator:we=!0}=n,V=we&&D.querySelector("input")||D,Y=At(V),ie=At(i.value),ye=Pb(P.value)?document.body:P.value,fe=At(ye),Ye=de?new to(M(y({},ie),{width:Y.width})):ie;ye===document.body&&(fe.height=document.body.scrollHeight);let he=0;const Te=ye.querySelector(`${Tl.selector}`);Te&&(he=Te.clientHeight);const Z=i.value.firstElementChild&&i.value.firstChild?wb(i.value.firstElementChild):{activator:0,container:0,horizontal:0},ve=Su(),be=Mb(D),Ae=be==null?be:be+1,mt=Cb(Y,Ye,Z,fe,ve,U,ce,he),Ue=kb(Y,Ye,ve,Z,te);b.value=!1,k.value=At(D),c.value=te!=="right"?Ue:null,r.value=te==="right"?Ue:null,m.value=B.value?m.value:mt.top,B.value=Boolean(ce),f.value=mt.height||0,x.value=de?Ye.width:null,A.value=mt.positioning,I.value=Lb(Y,_b(fe)),v.value=Ae,o("change-content-styles",{desiredHeight:f.value}),$.value&&($.value.observe(i.value,s),$.value.observe(D,s))}};return zc(()=>{$.value=new MutationObserver(W)}),ao(()=>{n.active&&m.value!==0&&I.value&&o("scroll-out")}),pe(()=>{P.value=Bb(n.activator),P.value&&!n.fixed&&P.value.addEventListener("scroll",W),W()}),it(()=>{P.value&&!n.fixed&&P.value.removeEventListener("scroll",W)}),(D,U)=>(l(),d("div",{class:u(a(q)),style:Re(a(F)),ref_key:"overlayRef",ref:i},[e.layout==="tooltip"?(l(),d("div",re({key:0,class:a(K)},y({},a(Qn).props)),[g(D.$slots,"default")],16)):(l(),d("div",re({key:1,class:a(E)},y({},a(cm).props)),[g(D.$slots,"default")],16)),S(a(We),{event:"resize",handler:W})],6))}}));wl.__docgenInfo={exportName:"default",displayName:"PositionedOverlay",description:"",tags:{},props:[{name:"active",required:!0,type:{name:"boolean"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}},{name:"preferredAlignment",required:!1,type:{name:"PreferredAlignment"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"boolean"}},{name:"classNames",required:!1,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"layout",required:!1,type:{name:"string"}}],events:[{name:"change-content-styles",type:{names:["Record"]}},{name:"scroll-out"}],slots:[{name:"default"}]};const ba=C({props:{colorScheme:{type:String,default:ml},as:{type:String,default:"div"}},setup(e){return pe(()=>{let o=document.getElementById(Or);o||(o=document.createElement("style"),o.id=Or,o.textContent=um,document.head.appendChild(o))}),(o,n)=>(l(),T(Pe(e.as),{"p-color-scheme":e.colorScheme,style:Re({color:"var(--p-text-color)"})},{default:h(()=>[g(o.$slots,"default")]),_:3},8,["p-color-scheme","style"]))}});ba.__docgenInfo={exportName:"default",displayName:"CustomProperties",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}},{name:"as",type:{name:"String as () => CustomPropertiesProps['as']"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}]};const za=C({setup(e){return(o,n)=>(l(),d("div",{class:u(a(Ee).Section)},[g(o.$slots,"default")],2))}});za.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},slots:[{name:"default"}]};const ds=C({props:{fixed:{type:Boolean},sectioned:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=p(()=>O(Ee.Pane,n.fixed&&Ee["Pane-fixed"]));return(i,r)=>e.fixed?(l(),d("div",{key:0,class:u(a(s))},[e.sectioned?(l(),T(a(za),{key:0},{default:h(()=>[g(i.$slots,"default")]),_:3})):g(i.$slots,"default",{key:1})],2)):(l(),T(a(_t),{key:1,shadow:"",class:u(a(s)),onScrolledToBottom:r[0]||(r[0]=c=>o("scrolled-to-bottom"))},{default:h(()=>[e.sectioned?(l(),T(a(za),{key:0},{default:h(()=>[g(i.$slots,"default")]),_:3})):g(i.$slots,"default",{key:1})]),_:3},8,["class"]))}});ds.__docgenInfo={exportName:"default",displayName:"Pane",description:"",tags:{},props:[{name:"fixed",required:!1,type:{name:"boolean"}},{name:"sectioned",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};const Db=["id","tabIndex"],$b={inheritAttrs:!1},Au=C(M(y({},$b),{props:{fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},preferredPosition:{default:"below"},preferredAlignment:{default:"center"},active:{type:Boolean},id:null,zIndexOverride:{default:void 0},activator:null,preferInputActivator:{default:!0},sectioned:{type:Boolean},fixed:{type:Boolean},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=L(ct.Exited),i=L(null),r=L(null),c=L(null),m=L({}),f=E=>{s.value=E,i.value&&i.value.getBoundingClientRect()},x=()=>{r.value&&window.clearTimeout(r.value),c.value&&window.clearTimeout(c.value)};Be(()=>n.active,()=>{const E=n.active?ct.Entering:ct.Exiting,K=n.active?ct.Entered:ct.Exited;f(E),x();const F=window.setTimeout(()=>{s.value=K},parseInt(Wc.motion["duration-100"],10));n.active?r.value=F:c.value=F});const v=p(()=>O(Ee.PopoverOverlay,s.value===ct.Entering&&Ee["PopoverOverlay-entering"],s.value===ct.Entered&&Ee["PopoverOverlay-open"],s.value===ct.Exiting&&Ee["PopoverOverlay-exiting"])),b=p(()=>O(Ee.Content,n.fullHeight&&Ee["Content-fullHeight"],n.fluidContent&&Ee["Content-fluidContent"])),A=()=>{o("close",$t.ScrollOut)},k=()=>{o("close",$t.EscapeKeypress)},B=E=>{const K=E.target,F=i.value&&qr(i.value,K),W=qr(n.activator,K);F||W||s.value!==ct.Entered||o("close",$t.Click)},I=()=>{o("close",$t.FocusOut)},P=()=>{o("close",$t.FocusOut)},$=E=>{m.value={desiredHeight:`${E.height}px`}},q=()=>{n.autofocusTarget==="none"||!i.value||requestAnimationFrame(()=>{if(i.value){const E=Cl(i.value);E&&n.autofocusTarget==="first-node"?E.focus():i.value.focus()}})};return pe(()=>{n.active&&(q(),f(ct.Entered))}),it(()=>{x()}),(E,K)=>(l(),T(a(wl),{id:e.id,fullWidth:e.fullWidth,active:e.active,activator:e.activator,classNames:a(v),preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,onScrollOut:A,onChangeContentStyles:$},{default:h(()=>[w("div",{class:u(a(Ee).FocusTracker),tabIndex:"0",onFocus:I},null,34),S(a(ba),{"color-scheme":e.colorScheme},{default:h(()=>[w("div",{class:u(a(Ee).Wrapper)},[w("div",{id:e.id,tabIndex:e.autofocusTarget==="none"?void 0:-1,style:Re(m.value),class:u(a(b)),ref_key:"contentRef",ref:i},[g(E.$slots,"extra-content"),S(a(ds),{sectioned:e.sectioned,fixed:e.fixed,onScrolledToBottom:K[0]||(K[0]=F=>E.$emit("scrolled-to-bottom"))},{default:h(()=>[g(E.$slots,"overlay")]),_:3},8,["sectioned","fixed"])],14,Db)],2),w("div",{class:u(a(Ee).FocusTracker),tabIndex:"0",onFocus:P},null,34),S(a(We),{event:"click",handler:B}),S(a(We),{event:"touchstart",handler:B}),S(a(tt),{keyCode:a(Qe).Escape,handler:k},null,8,["keyCode"])]),_:3},8,["color-scheme"])]),_:3},8,["id","fullWidth","active","activator","classNames","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride"]))}}));Au.__docgenInfo={exportName:"default",displayName:"PopoverOverlay",description:"",tags:{},props:[{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"fluidContent",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"preferredAlignment",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'center'"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"colorScheme",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"scrolled-to-bottom"},{name:"close",type:{names:["PopoverCloseSource"]}}],slots:[{name:"extra-content"},{name:"overlay"}]};const Eb=["data-portal-id"],Fb={inheritAttrs:!1},Xa=C(M(y({},Fb),{props:{idPrefix:{type:String,default:""}},setup(e){const o=e,n=xe("portalManager",new xu),s=L(""),{useUniqueId:i}=Ne();return pe(()=>{const r=i("portal");s.value=o.idPrefix?`${o.idPrefix}-${r}`:r,n&&n.register(s.value)}),(r,c)=>a(n)?(l(),T(dm,{key:0,to:"#PolarisPortalsContainer"},[w("div",{"data-portal-id":s.value},[g(r.$slots,"default")],8,Eb)])):_("",!0)}}));Xa.__docgenInfo={exportName:"default",displayName:"Portal",description:"",tags:{},props:[{name:"idPrefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}]};const Ob={inheritAttrs:!1},He=C(M(y({},Ob),{props:{preferredPosition:{default:void 0},preferredAlignment:{default:void 0},active:{type:Boolean},preferInputActivator:{default:!0},activatorWrapper:{default:"div"},zIndexOverride:{default:void 0},preventFocusOnClose:{type:Boolean},sectioned:{type:Boolean},fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},fixed:{type:Boolean},ariaHaspopup:{default:void 0},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:o}){const n=e,s=L(null),i=L(null),{useUniqueId:r}=Ne();Rt();const c=L(r("popover")),m=()=>{if(s.value){const v=s.value,A=Ki(v)||v,k="disabled"in A&&Boolean(A.disabled);sb(A,{id:c.value,active:n.active,ariaHaspopup:n.ariaHaspopup,activatorDisabled:k})}};Be(()=>n.active,()=>m());const f=v=>{let{parentElement:b}=v;for(;b;){if(b.matches(Kc.selector))return!1;b=b.parentElement}return!0},x=v=>{if(o("close",v),!(!s.value||n.preventFocusOnClose)&&(v===$t.FocusOut||v===$t.EscapeKeypress)&&i.value){const b=Ki(i.value)||Ki(s.value)||s.value;my(b,f)||b.focus()}};return pe(()=>{if(s.value){const v=s.value.firstElementChild;v&&(i.value=v),m()}}),(v,b)=>(l(),T(Pe(e.activatorWrapper),{ref_key:"container",ref:s},{default:h(()=>[g(v.$slots,"activator"),i.value&&e.active?(l(),T(a(Xa),{key:0,idPrefix:"popover"},{default:h(()=>[S(a(Au),{id:c.value,activator:i.value,fullWidth:e.fullWidth,active:e.active,preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,autofocusTarget:e.autofocusTarget,sectioned:e.sectioned,colorScheme:e.colorScheme,onClose:x,onScrolledToBottom:b[0]||(b[0]=A=>o("scrolled-to-bottom"))},{overlay:h(A=>[g(v.$slots,"content")]),"extra-content":h(()=>[g(v.$slots,"extra-content")]),_:3},8,["id","activator","fullWidth","active","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride","autofocusTarget","sectioned","colorScheme"])]),_:3})):_("",!0)]),_:3},512))}}));He.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"preferredPosition",description:"The preferred direction to open the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Show or hide the Popover",required:!0,type:{name:"boolean"}},{name:"preferInputActivator",description:"Use the activator's input element to calculate the Popover position",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"activatorWrapper",description:"The element type to wrap the activator with",tags:{default:[{description:"'div'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"zIndexOverride",description:"Override on the default z-index of 400",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"preventFocusOnClose",description:`Prevents focusing the activator or the next focusable element
when the popover is deactivated`,required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically add wrap content in a section",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow popover to stretch to the full width of its activator",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Allow popover to stretch to fit content vertically",required:!1,type:{name:"boolean"}},{name:"fluidContent",description:"Allow popover content to determine the overlay width and height",required:!1,type:{name:"boolean"}},{name:"fixed",description:"Remains in a fixed position",required:!1,type:{name:"boolean"}},{name:"ariaHaspopup",description:"Used to illustrate the type of popover element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnPrint",description:"Allow the popover overlay to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",tags:{default:[{description:"'container'",title:"default"}]},required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"close",type:{names:["PopoverCloseSource"]}},{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"content"},{name:"extra-content"}]};const qb=["role","type","disabled","aria-busy","aria-controls","aria-expanded","aria-describedby","aria-pressed"],Rb={inheritAttrs:!1},Ml=C(M(y({},Rb),{props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,className:null,others:null},setup(e){const o=e,n=Rt(),s=f=>{const x={mouseup:kt};return f.forEach(v=>{const b=`on${Sl.exports.capitalize(v)}`;n[b]&&(x[v]=n[b])}),x},i=s(["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"]),r=s(["blur","click","focus","mouseover","touchstart"]),c=p(()=>({id:o.id,class:o.className,"aria-label":o.accessibilityLabel})),m=p(()=>M(y(y({},c.value),o.others),{role:o.role}));return(f,x)=>e.url&&e.disabled?(l(),d("a",qe(re({key:0},a(c))),[g(f.$slots,"default")],16)):e.url&&!e.disabled?(l(),T(a(gt),re({key:1},a(m),{url:e.url,external:e.external,download:e.download},Wa(a(r))),{default:h(()=>[g(f.$slots,"default")]),_:3},16,["url","external","download"])):(l(),d("button",re({key:2},a(c),{role:e.role,type:e.submit?"submit":"button",disabled:e.disabled,"aria-busy":e.loading?!0:void 0,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-describedby":e.ariaDescribedBy,"aria-pressed":e.pressed},Wa(a(i))),[g(f.$slots,"default")],16,qb))}}));Ml.__docgenInfo={exportName:"default",displayName:"UnstyledButton",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"className",required:!1,type:{name:"string"}},{name:"others",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"default"}]};const Hb=C({props:{action:null,overrides:null,keyProp:null},setup(e){const o=e,n=p(()=>{const c=o.action,{content:s,onAction:i}=c,r=G(c,["content","onAction"]);return y(y({},r),o.overrides)});return(s,i)=>(l(),T(Ml,re({key:e.keyProp},a(n),{onClick:e.action.onAction}),{default:h(()=>[le(j(e.action.content),1)]),_:1},16,["onClick"]))}});Hb.__docgenInfo={exportName:"default",displayName:"UnstyledButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"UnstyledButtonProps"}]}},{name:"keyProp",required:!1,type:{name:"any"}}]};const Vb={viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},Ub=w("path",{d:"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"},null,-1),jb=[Ub];function Wb(e,o){return l(),d("svg",Vb,jb)}var zb={render:Wb};const Gb={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Kb=w("path",{d:"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"},null,-1),Xb=[Kb];function Yb(e,o){return l(),d("svg",Gb,Xb)}var Qb={render:Yb};const Jb="Polaris-Spinner",Zb="Polaris-Spinner--loading",ef="Polaris-Spinner--sizeSmall",tf="Polaris-Spinner--sizeLarge";var Rr={Spinner:Jb,loading:Zb,sizeSmall:ef,sizeLarge:tf};const Ft=C({props:{size:{type:String,default:"large"},accessibilityLabel:{type:String,default:null},hasFocusableParent:{type:Boolean}},setup(e){const o=e,n=L(y({},!o.hasFocusableParent&&{role:"status"})),s=p(()=>{const i=ke("size",o.size);return O(Rr.Spinner,o.size&&Rr[i])});return(i,r)=>(l(),d("div",null,[w("span",{class:u(a(s))},[e.size==="large"?(l(),T(a(zb),{key:0})):(l(),T(a(Qb),{key:1}))],2),w("span",qe(ht(n.value)),[S(a(Ge),null,{default:h(()=>[w("span",null,j(e.accessibilityLabel),1)]),_:1})],16)]))}});Ft.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size of the spinner",tags:{},values:["small | large"],type:{name:"String as () => Size"},defaultValue:{func:!1,value:"'large'"}},{name:"accessibilityLabel",description:"Accessible label for the spinner",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasFocusableParent",description:"Allows the component to apply the correct accessibility roles based on focus",type:{name:"boolean"}}]};const of={inheritAttrs:!1},yl=C(M(y({},of),{props:{commonProps:null,linkProps:null,actionProps:null,removeUnderline:null,children:{type:Boolean},disclosure:null,loading:null,icon:null},setup(e){const o=e,n=Rt(),s=p(()=>{const m=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],f={};return m.forEach(x=>{const v=`on${Sl.exports.capitalize(x)}`;n[v]&&(f[x]=n[v])}),f}),i=p(()=>O(ge.Icon,o.loading&&ge.hidden)),r=p(()=>O(ge.Text,o.removeUnderline&&ge.removeUnderline)),c=p(()=>o.disclosure==="select"?Xc:o.disclosure==="up"?Yc:Al);return(m,f)=>(l(),T(a(Ml),re(y(y(y({},e.commonProps),e.linkProps),e.actionProps),Wa(a(s))),{default:h(()=>[w("span",{class:u(a(ge).Content)},[e.loading?(l(),d("span",{key:0,class:u(a(ge).Spinner)},[S(a(Ft),{size:"small",accessibilityLabel:"Loading"})],2)):_("",!0),e.icon?(l(),d("span",{key:1,class:u(a(i))},[S(a(ae),{source:e.loading?"placeholder":e.icon},null,8,["source"])],2)):_("",!0),e.children?(l(),d("span",{class:u(a(r)),key:e.actionProps&&e.actionProps.disabled?"text-disabled":"text"},[g(m.$slots,"default")],2)):_("",!0),e.disclosure?(l(),d("span",{key:3,class:u(a(ge).Icon)},[w("div",null,[S(a(ae),{source:e.loading?"placeholder":a(c)},null,8,["source"])])],2)):_("",!0)],2)]),_:3},16))}}));yl.__docgenInfo={exportName:"default",displayName:"ButtonMarkup",description:"",tags:{},props:[{name:"commonProps",required:!1,type:{name:"CommonButtonProps"}},{name:"linkProps",required:!1,type:{name:"LinkButtonProps"}},{name:"actionProps",required:!1,type:{name:"ActionButtonProps"}},{name:"removeUnderline",required:!1,type:{name:"TSIndexedAccessType"}},{name:"children",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"TSIndexedAccessType"}},{name:"loading",required:!1,type:{name:"TSIndexedAccessType"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}]};const af=["disabled","aria-label","aria-describedby"],nf={inheritAttrs:!1},ne=C(M(y({},nf),{props:{id:null,url:{default:""},external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:{default:"medium"},textAlign:{default:void 0},outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean],default:void 0},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},setup(e){const o=e,n=se(),s=Rt(),i=p(()=>{const P=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],$={};return P.forEach(q=>{const E=`on${Sl.exports.capitalize(q)}`;s[E]&&($[q]=s[E])}),$}),r=!!n.default,c=L(!1),m=p(()=>o.disabled||o.loading),f=p(()=>{const P=o.textAlign&&ke("textAlign",o.textAlign),$=o.size&&ke("size",o.size);return O(ge.Button,o.primary&&ge.primary,o.outline&&ge.outline,o.destructive&&ge.destructive,m.value&&ge.disabled,o.loading&&ge.loading,o.plain&&ge.plain,o.pressed&&!o.disabled&&!o.url&&ge.pressed,o.monochrome&&ge.monochrome,o.size!=="medium"&&$&&ge[$],P&&ge[P],o.fullWidth&&ge.fullWidth,o.icon&&!r&&ge.iconOnly,o.connectedDisclosure&&ge.connectedDisclosure,o.removeUnderline&&ge.removeUnderline)}),x=p(()=>{const P=o.textAlign&&ke("textAlign",o.textAlign),$=o.size&&ke("size",o.size);return O(ge.Button,o.primary&&ge.primary,o.outline&&ge.outline,o.size!=="medium"&&$&&ge[$],P&&ge[P],o.destructive&&ge.destructive,o.connectedDisclosure&&o.connectedDisclosure.disabled&&ge.disabled,ge.iconOnly,ge.ConnectedDisclosure,o.monochrome&&ge.monochrome)}),v=p(()=>{const{id:P,accessibilityLabel:$,role:q,ariaDescribedBy:E}=o;return{id:P,className:f.value,accessibilityLabel:$,role:q,ariaDescribedBy:E}}),b=p(()=>{const{url:P,external:$,download:q}=o;return{url:P,external:$,download:q}}),A=p(()=>{const{submit:P,loading:$,pressed:q}=o;return{submit:P,loading:$,pressed:q,disabled:m.value}}),k=p(()=>{const{removeUnderline:P,disclosure:$,loading:q,icon:E}=o;return{commonProps:v.value,linkProps:b.value,actionProps:A.value,removeUnderline:P,children:r,disclosure:$,loading:q,icon:E}}),B=p(()=>{if(o.connectedDisclosure){const{disabled:P,accessibilityLabel:$="Related actions"}=o.connectedDisclosure;return{disabled:P,disclosureLabel:$}}return{}}),I=()=>{c.value=!c.value};return(P,$)=>e.connectedDisclosure?(l(),d("div",{key:0,class:u(a(ge).ConnectedDisclosureWrapper)},[S(yl,re(a(k),Wa(a(i))),{default:h(()=>[g(P.$slots,"default")]),_:3},16),S(a(He),{active:c.value,preferredAlignment:"right",onClose:I},{activator:h(()=>[w("button",{type:"button",class:u(a(x)),disabled:a(B).disabled,"aria-label":a(B).disclosureLabel,"aria-describedby":e.ariaDescribedBy,onClick:I,onMouseup:$[0]||($[0]=(...q)=>a(kt)&&a(kt)(...q))},[w("span",null,[S(a(ae),{source:a(Al)},null,8,["source"])])],42,af)]),content:h(()=>[S(a(Fe),{items:e.connectedDisclosure.actions,onActionAnyItem:I},ze({_:2},[ue(e.connectedDisclosure.actions,({prefixId:q})=>({name:`prefix-${q}`,fn:h(()=>[g(P.$slots,`prefix-${q}`)])})),ue(e.connectedDisclosure.actions,({suffixId:q})=>({name:`suffix-${q}`,fn:h(()=>[g(P.$slots,`suffix-${q}`)])}))]),1032,["items"])]),_:3},8,["active"])],2)):(l(),T(yl,re({key:1},a(k),Wa(a(i))),{default:h(()=>[g(P.$slots,"default")]),_:3},16))}}));ne.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the button",required:!1,type:{name:"string"}},{name:"url",description:"A destination to link to, rendered in the href attribute of a link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"external",description:"Forces url to open in a new tab",required:!1,type:{name:"boolean"}},{name:"download",description:`Tells the browser to download the url instead of opening it.
Provides a hint for the downloaded filename if it is a string value`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",description:"Allows the button to submit a form",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables the button, disallowing merchant interaction",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces button text with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"pressed",description:"Sets the button in a pressed state",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to define the semantic value of this element",required:!1,type:{name:"string"}},{name:"ariaControls",description:"Id of the element the button controls",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Tells screen reader the controlled element is expanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the button",required:!1,type:{name:"string"}},{name:"primary",description:"Provides extra visual weight and identifies the primary action in a set of buttons",required:!1,type:{name:"boolean"}},{name:"destructive",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"size",description:"Changes the size of the button, giving it more or less padding",tags:{values:[{description:"slim | medium | large",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textAlign",description:"Changes the inner text alignment of the button",tags:{values:[{description:"left | center | right",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:`Gives the button a subtle alternative to the default button styling,
appropriate for certain backdrops`,required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"disclosure",description:"Displays the button with a disclosure icon. Defaults to `down` when set to true",tags:{values:[{description:"down | up | select | boolean",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Renders a button that looks like a link",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes plain and outline Button colors (text, borders, icons) the same as the current text color\nAlso adds an underline to `plain` Buttons",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes underline from button text (including on interaction)when monochrome and plain are true",required:!1,type:{name:"boolean"}},{name:"icon",description:"Icon to display to the left of the button content.",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",description:"Disclosure button connected right of the button. Toggles a popover action list.",required:!1,type:{name:"ConnectedDisclosure"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const sf={inheritAttrs:!1},nt=C(M(y({},sf),{props:{action:null,overrides:{default:()=>({})}},setup(e){const o=e,n=()=>{o.action&&o.action.onAction&&o.action.onAction()},s=p(()=>{if(!o.action)return{};const m=o.action,{onAction:i,content:r}=m,c=G(m,["onAction","content"]);return y(y({},c),o.overrides)});return(i,r)=>e.action?(l(),T(a(ne),re({key:0},a(s),{onClick:n}),{default:h(()=>[le(j(e.action.content),1)]),_:1},16)):_("",!0)}}));nt.__docgenInfo={exportName:"default",displayName:"ButtonFrom",description:"",tags:{},props:[{name:"action",required:!1,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"ButtonProps"}]},defaultValue:{func:!1,value:"() => ({})"}}]};const lf="Polaris-ButtonGroup",rf="Polaris-ButtonGroup__Item",cf="Polaris-ButtonGroup--segmented",uf="Polaris-ButtonGroup--fullWidth",df="Polaris-ButtonGroup--extraTight",pf="Polaris-ButtonGroup--tight",mf="Polaris-ButtonGroup--loose";var Jt={ButtonGroup:lf,Item:rf,"Item-plain":"Polaris-ButtonGroup__Item--plain",segmented:cf,"Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:uf,extraTight:df,tight:pf,loose:mf};const yf={inheritAttrs:!1},Cu=C(M(y({},yf),{setup(e){const o=L(!1),n=se(),s=p(()=>n.default&&n.default()[0].props),i=p(()=>{const m=s.value&&(s.value.plain===""||s.value.plain);return O(Jt.Item,o.value&&Jt["Item-focused"],m&&Jt["Item-plain"])}),r=()=>{o.value=!0},c=()=>{o.value=!1};return(m,f)=>(l(),d("div",{class:u(a(i)),onFocus:r,onBlur:c},[g(m.$slots,"default")],34))}}));Cu.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};function Xe(e){if(e&&e()[0].children){if(typeof e()[0].children=="string")return e()[0].children!=="v-if";if(Array.isArray(e()[0].children))return e()[0].children.length>0}return!0}const hf=["data-buttongroup-segmented","data-buttongroup-connected-top","data-buttongroup-full-width"],gf={inheritAttrs:!1},Ke=C(M(y({},gf),{props:{spacing:null,segmented:{type:Boolean},fullWidth:{type:Boolean},connectedTop:{type:Boolean}},setup(e){const o=e,n=se(),s=p(()=>{const r=[];return n.default&&n.default().map(c=>{const m=c.children;typeof m=="string"&&m==="v-if"||(c.type.toString()==="Symbol(Fragment)"?m.forEach(f=>{r.push(f)}):r.push(c))}),r}),i=p(()=>O(Jt.ButtonGroup,o.spacing&&Jt[o.spacing],o.segmented&&Jt.segmented,o.fullWidth&&Jt.fullWidth));return(r,c)=>(l(),d("div",{class:u(a(i)),"data-buttongroup-segmented":e.segmented,"data-buttongroup-connected-top":e.connectedTop,"data-buttongroup-full-width":e.fullWidth},[(l(!0),d(X,null,ue(a(s),(m,f)=>(l(),T(a(Cu),{key:f},{default:h(()=>[(l(),T(Pe(m)))]),_:2},1024))),128))],10,hf))}}));Ke.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"spacing",description:"Determines the space between button group items",required:!1,type:{name:"Spacing"}},{name:"segmented",description:"Join buttons as segmented group",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Buttons will stretch/shrink to occupy the full width",required:!1,type:{name:"boolean"}},{name:"connectedTop",description:"Remove top left and right border radius",required:!1,type:{name:"boolean"}}]};const bf="Polaris-Caption";var ff={Caption:bf};const ps=C({setup(e){return(o,n)=>(l(),d("p",{class:u(a(ff).Caption)},[g(o.$slots,"default")],2))}});ps.__docgenInfo={exportName:"default",displayName:"Caption",description:"",tags:{},slots:[{name:"default"}]};const vf="Polaris-Card",xf="Polaris-Card--subdued",Tf="Polaris-Card--hideOnPrint",Sf="Polaris-Card__Header",Af="Polaris-Card__Section",Cf="Polaris-Card__SectionHeader",kf="Polaris-Card__Subsection",Lf="Polaris-Card__Footer",_f="Polaris-Card__LeftJustified";var et={Card:vf,subdued:xf,"Section-hideOnPrint":"Polaris-Card__Section--hideOnPrint",hideOnPrint:Tf,Header:Sf,Section:Af,"Section-fullWidth":"Polaris-Card__Section--fullWidth","Section-flush":"Polaris-Card__Section--flush","Section-subdued":"Polaris-Card__Section--subdued",SectionHeader:Cf,Subsection:kf,Footer:Lf,LeftJustified:_f};const ms=C({props:{actions:null},setup(e){const o=se(),n=p(()=>{var s,i,r;return o.title&&o.title().length===1?((s=o.title()[0])==null?void 0:s.type.toString())==="Symbol(Text)"?!0:o.title()[0].children&&((i=o.title()[0].children)==null?void 0:i.length)===1&&((r=o.title()[0].children)==null?void 0:r[0].type.toString())==="Symbol(Text)":!1});return(s,i)=>(l(),d("div",{class:u(a(et).Header)},[a(o).default||e.actions?(l(),T(a(Ve),{key:0,alignment:"baseline",noItemWrap:""},{default:h(()=>[S(a(st),{fill:!0},{default:h(()=>[a(n)?(l(),T(a(Ot),{key:1},{default:h(()=>[g(s.$slots,"title")]),_:3})):g(s.$slots,"title",{key:0})]),_:3}),e.actions?(l(),T(a(st),{key:0},{default:h(()=>[S(a(Ke),null,{default:h(()=>[(l(!0),d(X,null,ue(e.actions,(r,c)=>(l(),T(a(nt),{key:c,action:r,overrides:{plain:!0}},null,8,["action"]))),128))]),_:1})]),_:1})):_("",!0),a(o).default?(l(),T(a(st),{key:1},{default:h(()=>[g(s.$slots,"default")]),_:3})):_("",!0)]),_:3})):(l(),d(X,{key:1},[a(n)?(l(),T(a(Ot),{key:1},{default:h(()=>[g(s.$slots,"title")]),_:3})):g(s.$slots,"title",{key:0})],64))],2))}});ms.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}}],slots:[{name:"title"},{name:"default"}]};const ys=C({props:{subdued:{type:Boolean},flush:{type:Boolean},fullWidth:{type:Boolean},hideOnPrint:{type:Boolean},actions:null},setup(e){const o=e,n=se(),s=p(()=>O(et.Section,o.flush&&et["Section-flush"],o.subdued&&et["Section-subdued"],o.fullWidth&&et["Section-fullWidth"],o.hideOnPrint&&et["Section-hideOnPrint"])),i=p(()=>{var r,c,m;return n.title&&n.title().length===1?((r=n.title()[0])==null?void 0:r.type.toString())==="Symbol(Text)"?!0:n.title()[0].children&&((c=n.title()[0].children)==null?void 0:c.length)===1&&((m=n.title()[0].children)==null?void 0:m[0].type.toString())==="Symbol(Text)":!1});return(r,c)=>(l(),d("div",{class:u(a(s))},[a(n).title||e.actions?(l(),d("div",{key:0,class:u(a(et).SectionHeader)},[e.actions?(l(),T(a(Ve),{key:0,noItemWrap:"",alignment:"baseline"},{default:h(()=>[S(a(st),{fill:""},{default:h(()=>[a(i)?(l(),T(a(qt),{key:1},{default:h(()=>[g(r.$slots,"title")]),_:3})):g(r.$slots,"title",{key:0})]),_:3}),S(a(Ke),null,{default:h(()=>[(l(!0),d(X,null,ue(e.actions,(m,f)=>(l(),T(a(nt),{key:f,index:f,action:m,overrides:{plain:!0}},null,8,["index","action"]))),128))]),_:1})]),_:3})):(l(),d(X,{key:1},[a(i)?(l(),T(a(qt),{key:1},{default:h(()=>[g(r.$slots,"title")]),_:3})):g(r.$slots,"title",{key:0})],64))],2)):_("",!0),g(r.$slots,"default")],2))}});ys.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"subdued",required:!1,type:{name:"boolean"}},{name:"flush",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"title"},{name:"default"}]};const ku=C({setup(e){return(o,n)=>(l(),d("div",{class:u(a(et).Subsection)},[g(o.$slots,"default")],2))}});ku.__docgenInfo={exportName:"default",displayName:"Subsection",description:"",tags:{},slots:[{name:"default"}]};const Ht=C({props:{subdued:{type:Boolean},sectioned:{type:Boolean},actions:null,primaryFooterAction:null,secondaryFooterActions:null,secondaryFooterActionsDisclosureText:null,footerActionAlignment:{default:"right"},hideOnPrint:{type:Boolean}},setup(e){const o=e,n=se(),s=L(!1),i=()=>{s.value=!s.value},r=p(()=>O(et.Card,o.subdued&&et.subdued,o.hideOnPrint&&et.hideOnPrint)),c=p(()=>O(et.Footer,o.footerActionAlignment==="left"&&et.LeftJustified));return $e("WithinContentContext",!1),(m,f)=>(l(),d("div",{class:u(a(r))},[a(n).title||e.actions?(l(),T(a(ms),{key:0,actions:e.actions},{title:h(()=>[g(m.$slots,"title")]),_:3},8,["actions"])):_("",!0),e.sectioned?(l(),T(a(ys),{key:1},{default:h(()=>[g(m.$slots,"default")]),_:3})):g(m.$slots,"default",{key:2}),e.primaryFooterAction||e.secondaryFooterActions&&e.secondaryFooterActions.length?(l(),d("div",{key:3,class:u(a(c))},[e.footerActionAlignment==="right"?(l(),T(a(Ke),{key:0},{default:h(()=>[e.secondaryFooterActions&&e.secondaryFooterActions.length===1?(l(),T(a(nt),{key:0,action:e.secondaryFooterActions[0]},null,8,["action"])):e.secondaryFooterActions&&e.secondaryFooterActions.length>1?(l(),T(a(He),{key:1,active:s.value,onClose:i},{activator:h(()=>[S(a(ne),{disclosure:!0,onClick:i},{default:h(()=>[le(j(e.secondaryFooterActionsDisclosureText||a(pl).Polaris.Common.more),1)]),_:1})]),content:h(()=>[S(a(Fe),{items:e.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):_("",!0),e.primaryFooterAction?(l(),T(a(nt),{key:2,action:e.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):_("",!0)]),_:1})):(l(),T(a(Ke),{key:1},{default:h(()=>[e.primaryFooterAction?(l(),T(a(nt),{key:0,action:e.primaryFooterAction,overrides:{primary:!0}},null,8,["action"])):_("",!0),e.secondaryFooterActions&&e.secondaryFooterActions.length===1?(l(),T(a(nt),{key:1,action:e.secondaryFooterActions[0]},null,8,["action"])):e.secondaryFooterActions&&e.secondaryFooterActions.length>1?(l(),T(a(He),{key:2,active:s.value,onClose:i},{activator:h(()=>[S(a(ne),{disclosure:"",onClick:i},{default:h(()=>[le(j(e.secondaryFooterActionsDisclosureText||a(pl).Polaris.Common.more),1)]),_:1})]),content:h(()=>[S(a(Fe),{items:e.secondaryFooterActions},null,8,["items"])]),_:1},8,["active"])):_("",!0)]),_:1}))],2)):_("",!0)],2))}});Ht.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"subdued",description:"A less prominent card",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Auto wrap content in section",required:!1,type:{name:"boolean"}},{name:"actions",description:"Card header actions",required:!1,type:{name:"Array",elements:[{name:"DisableableAction"}]}},{name:"primaryFooterAction",description:"Primary action in the card footer",required:!1,type:{name:"ComplexAction"}},{name:"secondaryFooterActions",description:"Secondary actions in the card footer",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}},{name:"secondaryFooterActionsDisclosureText",description:"The content of the disclosure button rendered when there is more than one secondary footer action",required:!1,type:{name:"string"}},{name:"footerActionAlignment",description:"Alignment of the footer actions on the card, defaults to right",required:!1,type:{name:"union",elements:[{name:'"right"'},{name:'"left"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"hideOnPrint",description:"Allow the card to be hidden when printing",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const Pf="Polaris-Checkbox",wf="Polaris-Checkbox__Input",Mf="Polaris-Checkbox--keyFocused",Nf="Polaris-Checkbox__Backdrop",Bf="Polaris-Checkbox__Icon",If="Polaris-Checkbox--hover",Df="Polaris-Checkbox--error";var Bt={Checkbox:Pf,Input:wf,keyFocused:Mf,Backdrop:Nf,"Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:Bf,hover:If,error:Df};const Nl=e=>`${e}Error`,$f="Polaris-Choice",Ef="Polaris-Choice--labelHidden",Ff="Polaris-Choice__Label",Of="Polaris-Choice__Control",qf="Polaris-Choice--disabled",Rf="Polaris-Choice__Descriptions",Hf="Polaris-Choice__HelpText";var xt={Choice:$f,labelHidden:Ef,Label:Ff,Control:Of,disabled:qf,Descriptions:Rf,HelpText:Hf};const Bl=e=>`${e}HelpText`,Vf="Polaris-InlineError",Uf="Polaris-InlineError__Icon";var Hr={InlineError:Vf,Icon:Uf};const jf=["id"],Wf={key:1},no=C({props:{message:null,fieldID:null},setup(e){return(o,n)=>e.message?(l(),d("div",{key:0,id:a(Nl)(e.fieldID),class:u(a(Hr).InlineError)},[w("div",{class:u(a(Hr).Icon)},[S(a(ae),{source:a(pm)},null,8,["source"])],2),typeof e.message=="object"?(l(),T(Pe(e.message),{key:0})):(l(),d("div",Wf,j(e.message),1))],10,jf)):_("",!0)}});no.__docgenInfo={exportName:"default",displayName:"InlineError",description:"",tags:{},props:[{name:"message",description:"Content briefly explaining how to resolve the invalid form field input.",required:!0,type:{name:"Error"}},{name:"fieldID",description:"Unique identifier of the invalid form field that the message describes",required:!0,type:{name:"string"}}]};const zf={key:0},Gf=["id"],Il=C({props:{id:null,disabled:{type:Boolean},error:{type:[null,Boolean]},labelHidden:{type:Boolean}},setup(e){const o=e,n=p(()=>O(xt.Choice,o.labelHidden&&xt.labelHidden,o.disabled&&xt.disabled));return(s,i)=>e.error&&typeof e.error!="boolean"||s.$slots["help-text"]?(l(),d("div",zf,[w("label",{class:u(a(n)),onClick:i[0]||(i[0]=r=>s.$emit("click")),onMouseover:i[1]||(i[1]=r=>s.$emit("mouseover")),onMouseout:i[2]||(i[2]=r=>s.$emit("mouseout"))},[w("span",{class:u(a(xt).Control)},[g(s.$slots,"default")],2),w("span",{class:u(a(xt).Label)},[g(s.$slots,"label")],2)],34),w("div",{class:u(a(xt).Descriptions)},[s.$slots["help-text"]?(l(),d("div",{key:0,id:a(Bl)(e.id),class:u(a(xt).HelpText)},[g(s.$slots,"help-text")],10,Gf)):_("",!0),e.error&&typeof e.error!="boolean"?(l(),T(a(no),{key:1,fieldID:e.id,message:e.error},null,8,["fieldID","message"])):_("",!0)],2)])):(l(),d("label",{key:1,class:u(a(n)),onClick:i[3]||(i[3]=r=>s.$emit("click")),onMouseover:i[4]||(i[4]=r=>s.$emit("mouseover")),onMouseout:i[5]||(i[5]=r=>s.$emit("mouseout"))},[w("span",{class:u(a(xt).Control)},[g(s.$slots,"default")],2),w("span",{class:u(a(xt).Label)},[g(s.$slots,"label")],2)],34))}});Il.__docgenInfo={exportName:"default",displayName:"Choice",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the choice",required:!0,type:{name:"string"}},{name:"disabled",description:"Whether the associated form control is disabled",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"mouseover"},{name:"mouseout"}],slots:[{name:"default"},{name:"label"},{name:"help-text"}]};const Kf=["id","role","name","value","checked","disabled","aria-invalid","aria-controls","aria-describedby"],fa=C({props:{ariaControls:null,ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},id:null,name:null,value:{type:[String,Boolean]},modelValue:{type:[String,Boolean]},error:{type:[null,Boolean]}},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const n=e,s=xe("withinListboxContext",!1),i=L(!1),r=L(!1),c=se(),m=p(()=>{var D;return(D=c["help-text"])==null?void 0:D.call(c)}),{useUniqueId:f}=Ne(),x=p(()=>f("Checkbox",n.id)),v=p(()=>n.checked==="indeterminate"),b=p(()=>!v.value&&Boolean(n.checked)||typeof n.modelValue=="boolean"&&n.modelValue===!0),A=p(()=>v.value?mm:Qc),k=p(()=>O(Bt.Checkbox,n.error&&Bt.error)),B=p(()=>O(Bt.Backdrop,i.value&&Bt.hover)),I=p(()=>O(Bt.Input,v.value&&Bt["Input-indeterminate"],r.value&&Bt.keyFocused)),P=p(()=>v.value?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":b.value}),$=p(()=>{const D=[];return n.ariaDescribedBy&&D.push(n.ariaDescribedBy),n.error&&typeof n.error!="boolean"&&D.push(Nl(x.value)),m.value&&D.push(Bl(x.value)),D.length?D.join(" "):void 0}),q=()=>{r.value=!0,o("focus")},E=D=>{const U=D.target;o("change",D),o("update:modelValue",U.checked)},K=()=>{r.value=!1,o("blur")},F=D=>{const{key:U}=D;(U===Qe.Space||U===Qe.Tab)&&(r.value||(r.value=!0))};function W(D){D.stopPropagation()}return(D,U)=>(l(),T(a(Il),{id:a(x),error:e.error,disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:U[0]||(U[0]=te=>i.value=!0),onMouseout:U[1]||(U[1]=te=>i.value=!1)},ze({default:h(()=>[w("span",{class:u(a(k))},[w("input",re({id:a(x),role:a(s)?"presentation":"checkbox",name:e.name,value:e.value||e.modelValue,type:"checkbox",checked:a(b),disabled:e.disabled,class:a(I),"aria-invalid":e.error!==null,"aria-controls":e.ariaControls,"aria-describedby":a($),onFocus:q,onChange:E,onBlur:K,onKeyup:F},a(P)),null,16,Kf),w("span",{class:u(a(B)),onClick:W,onMouseup:W},null,34),w("span",{class:u(a(Bt).Icon)},[S(a(ae),{source:a(A)},null,8,["source"])],2)],2)]),_:2},[a(c).label?{name:"label",fn:h(()=>[g(D.$slots,"label")])}:void 0,a(c)["help-text"]?{name:"help-text",fn:h(()=>[g(D.$slots,"help-text")])}:void 0]),1032,["id","error","disabled","labelHidden"]))}});fa.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"ariaControls",description:"Indicates the ID of the element that is controlled by the checkbox",required:!1,type:{name:"string"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the checkbox",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"indeterminate"'}]}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const Xf="Polaris-ChoiceList",Yf="Polaris-ChoiceList--titleHidden",Qf="Polaris-ChoiceList__Title",Jf="Polaris-ChoiceList__Choices",Zf="Polaris-ChoiceList__ChoiceChildren",ev="Polaris-ChoiceList__ChoiceError";var zt={ChoiceList:Xf,titleHidden:Yf,Title:Qf,Choices:Jf,ChoiceChildren:Zf,ChoiceError:ev};const tv="Polaris-RadioButton",ov="Polaris-RadioButton__Input",av="Polaris-RadioButton--keyFocused",nv="Polaris-RadioButton__Backdrop",sv="Polaris-RadioButton--hover";var Ra={RadioButton:tv,Input:ov,keyFocused:av,Backdrop:nv,hover:sv};const iv=["id","name","value","checked","disabled","aria-describedby"],Ya=C({props:{ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},id:null,name:null,value:null,modelValue:null},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:o}){const n=e,s=L(!1),i=L(!1),r=se(),c=p(()=>{var P;return(P=r["help-text"])==null?void 0:P.call(r)}),{useUniqueId:m}=Ne(),f=p(()=>m("RadioButton",n.id)),x=p(()=>n.checked||n.modelValue===n.value),v=p(()=>O(Ra.Backdrop,i.value&&Ra.hover)),b=p(()=>O(Ra.Input,s.value&&Ra.keyFocused)),A=p(()=>{const P=[];return n.ariaDescribedBy&&P.push(n.ariaDescribedBy),c.value&&P.push(Bl(f.value)),P.length?P.join(" "):void 0}),k=P=>{const $=P.target;o("change",P),o("update:modelValue",$.value)},B=()=>{o("blur"),s.value=!1},I=()=>{s.value||(s.value=!0)};return(P,$)=>(l(),T(a(Il),{id:a(f),disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:$[1]||($[1]=q=>i.value=!0),onMouseout:$[2]||($[2]=q=>i.value=!1)},ze({default:h(()=>[w("span",{class:u(a(Ra).RadioButton)},[w("input",{id:a(f),name:e.name||a(f),value:e.value,type:"radio",checked:a(x),disabled:e.disabled,class:u(a(b)),"aria-describedby":a(A),onFocus:$[0]||($[0]=q=>P.$emit("focus")),onChange:k,onBlur:B,onKeyup:I},null,42,iv),w("span",{class:u(a(v))},null,2)],2)]),_:2},[a(r).label?{name:"label",fn:h(()=>[g(P.$slots,"label")])}:void 0,a(r)["help-text"]?{name:"help-text",fn:h(()=>[g(P.$slots,"help-text")])}:void 0]),1032,["id","disabled","labelHidden"]))}});Ya.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the the radio button",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Radio button is selected",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const lv=["id","aria-invalid"],rv=["innerHTML"],bt=C({props:{choices:null,modelValue:null,name:null,allowMultiple:{type:Boolean},titleHidden:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,{useUniqueId:s}=Ne(),i=p(()=>s("ChoiceList",n.name)),r=p(()=>n.allowMultiple?`${i.value}Multiple`:i.value),c=p(()=>O(zt.ChoiceList,n.titleHidden&&zt.titleHidden)),m=v=>n.allowMultiple?n.modelValue.includes(v.value):n.modelValue===v.value,f=v=>{const b=v.target;return b.checked?n.allowMultiple?[...n.modelValue,b.value]:b.value:Array.isArray(n.modelValue)?n.modelValue.filter(A=>A!==b.value):[]},x=v=>{o("update:modelValue",f(v)),o("change",v)};return(v,b)=>(l(),d("fieldset",{id:a(r),class:u(a(c)),"aria-invalid":e.error!==null},[w("legend",{class:u(a(zt).Title)},[g(v.$slots,"default")],2),w("ul",{class:u(a(zt).Choices)},[(l(!0),d(X,null,ue(e.choices,(A,k)=>(l(),d("li",{key:k},[(l(),T(Pe(e.allowMultiple?a(fa):a(Ya)),{name:a(r),value:A.value,checked:m(A),disabled:A.disabled||e.disabled,ariaDescribedBy:e.error&&A.describedByError?a(Nl)(a(r)):null,onChange:x},ze({_:2},[A.label?{name:"label",fn:h(()=>[w("span",null,j(A.label),1)])}:void 0,A.helpText?{name:"help-text",fn:h(()=>[w("span",null,j(A.helpText),1)])}:void 0]),1032,["name","value","checked","disabled","ariaDescribedBy"])),typeof A.renderChildren=="string"?(l(),d("div",{key:0,innerHTML:A.renderChildren,class:u(a(zt).ChoiceChildren)},null,10,rv)):(l(),T(Pe(A.renderChildren),{key:1,class:u(a(zt).ChoiceChildren)},null,8,["class"]))]))),128))],2),e.error?(l(),d("div",{key:0,class:u(a(zt).ChoiceError)},[S(a(no),{fieldID:a(r),message:e.error},null,8,["fieldID","message"])],2)):_("",!0)],10,lv))}});bt.__docgenInfo={exportName:"default",displayName:"ChoiceList",description:"",tags:{},props:[{name:"choices",description:"Collection of choices",required:!0,type:{name:"Array",elements:[{name:"Choice"}]}},{name:"modelValue",description:"V-model will automatically bind to this prop",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allow merchants to select multiple options at once",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Toggles display of the title",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"disabled",description:"Disable all choices",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}}],slots:[{name:"default"}]};const cv="Polaris-Collapsible",uv="Polaris-Collapsible--isFullyClosed",dv="Polaris-Collapsible--expandOnPrint";var Ji={Collapsible:cv,isFullyClosed:uv,expandOnPrint:dv};const pv=["id","aria-expanded"],va=C({props:{id:null,expandOnPrint:{type:Boolean},open:{type:Boolean},transition:null},setup(e){const o=e,n=L(0),s=L("idle"),i=L(null),r=L(o.open),c=p(()=>s.value==="idle"&&o.open&&r.value),m=p(()=>s.value==="idle"&&!o.open&&!r.value),f=p(()=>O(Ji.Collapsible,m.value&&Ji.isFullyClosed,o.expandOnPrint&&Ji.expandOnPrint)),x=p(()=>M(y({},o.transition&&{transitionDuration:`${o.transition.duration}`,transitionTimingFunction:`${o.transition.timingFunction}`}),{maxHeight:c.value?"none":`${n.value}px`,overflow:c.value?"visible":"hidden"})),v=({target:b})=>{b===i.value&&(s.value="idle",r.value=o.open)};return Be(()=>[o.open,r.value],()=>{o.open!==r.value&&(s.value="measuring")}),ao(()=>{if(!!i.value)switch(s.value){case"idle":break;case"measuring":n.value=i.value.scrollHeight,s.value="animating";break;case"animating":n.value=o.open?i.value.scrollHeight:0}}),pe(()=>{!open||!i.value||(n.value=i.value.scrollHeight)}),(b,A)=>(l(),d("div",{id:e.id,style:Re(a(x)),ref_key:"collapsibleContainerRef",ref:i,class:u(a(f)),onTransitionend:v,"aria-expanded":e.open},[e.expandOnPrint||!a(m)?g(b.$slots,"default",{key:0}):_("",!0)],46,pv))}});va.__docgenInfo={exportName:"default",displayName:"Collapsible",description:"",tags:{},props:[{name:"id",description:"Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component\u2019s aria-controls prop.",required:!0,type:{name:"string"}},{name:"expandOnPrint",description:"Option to show collapsible content when printing",required:!1,type:{name:"boolean"}},{name:"open",description:"Toggle whether the collapsible is expanded or not.",required:!0,type:{name:"boolean"}},{name:"transition",description:"Assign transition properties to the collapsible",required:!1,type:{name:"Transition"}}],slots:[{name:"default"}]};function Zi(e){const o=e.toString(16);return o.length===1?`0${o}`:o}function mv(e,o){const n=e/60,s=1-Math.abs(n%2-1),i=o*s;let r=0,c=0,m=0;return n>=0&&n<=1&&(r=o,c=i,m=0),n>=1&&n<=2&&(r=i,c=o,m=0),n>=2&&n<=3&&(r=0,c=o,m=i),n>=3&&n<=4&&(r=0,c=i,m=o),n>=4&&n<=5&&(r=i,c=0,m=o),n>=5&&n<=6&&(r=o,c=0,m=i),{red:r,green:c,blue:m}}function yv(e,o="b"){const{alpha:n=1}=e,s=e.red/255,i=e.green/255,r=e.blue/255,c=Math.max(s,i,r),m=Math.min(s,i,r),f=c-m,x=(c+m)/2;let v=0;if(c===0)v=0;else if(o==="b")v=f/c;else if(o==="l"){const B=x>.5?f/(2-c-m):f/(c+m);v=Number.isNaN(B)?0:B}let b=0;switch(c){case s:b=(i-r)/f+(i<r?6:0);break;case i:b=(r-s)/f+2;break;case r:b=(s-i)/f+4;break}const A=b/6*360,k=Qt(A,0,360);return{hue:k?qa(k,2):0,saturation:qa(Qt(v,0,1),4),brightness:qa(Qt(c,0,1),4),lightness:qa(x,4),alpha:qa(n,4)}}function hv(e){if(e.length===4){const i=(f,x)=>e.slice(f,x).repeat(2),r=parseInt(i(1,2),16),c=parseInt(i(2,3),16),m=parseInt(i(3,4),16);return{red:r,green:c,blue:m}}const o=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return{red:o,green:n,blue:s}}function gv({red:e,green:o,blue:n}){return`#${Zi(e)}${Zi(o)}${Zi(n)}`}function as(e){const{hue:o,saturation:n,brightness:s}=e,r=e.alpha||1,c=s*n;let{red:m,green:f,blue:x}=mv(o,c);const v=s-c;return m+=v,f+=v,x+=v,{red:Math.round(m*255),green:Math.round(f*255),blue:Math.round(x*255),alpha:r}}function bv(e){return gv(as(M(y({},e),{alpha:1})))}function fv(e){const{hue:o,saturation:n,brightness:s,alpha:i=1}=yv(e,"b");return{hue:o,saturation:n,brightness:s,alpha:i}}const vv="Polaris-ColorPicker",xv="Polaris-ColorPicker__MainColor",Tv="Polaris-ColorPicker--fullWidth",Sv="Polaris-ColorPicker__Dragger",Av="Polaris-ColorPicker__ColorLayer",Cv="Polaris-ColorPicker__HuePicker",kv="Polaris-ColorPicker__AlphaPicker",Lv="Polaris-ColorPicker__Slidable";var Ct={ColorPicker:vv,MainColor:xv,fullWidth:Tv,Dragger:Sv,ColorLayer:Av,HuePicker:Cv,AlphaPicker:kv,Slidable:Lv};const _v=["data-dragging"],hs=C({props:{draggerX:{default:0},draggerY:{default:0}},emits:["change","dragger-height"],setup(e,{emit:o}){const n=e,s=L(!1),i=L(null),r=L(null),c=L(0),m=L(0),f=p(()=>({transform:`translate3d(${c.value||n.draggerX}px, ${m.value||n.draggerY}px, 0)`}));Gc||window.addEventListener("touchmove",I=>{s.value&&I.preventDefault()},{passive:!1}),pe(()=>{r.value&&o("dragger-height",r.value.clientWidth)});const x=I=>{if(B(I)){const{clientX:P,clientY:$}=I;A(P,$)}s.value=!0},v=()=>{s.value=!1},b=I=>{if(I.stopImmediatePropagation(),I.stopPropagation(),I.cancelable&&I.preventDefault(),k(I)){const $=I;A($.clientX,$.clientY);return}const P=I;A(P.touches[0].clientX,P.touches[0].clientY)},A=(I,P)=>{if(i.value){const $=i.value.getBoundingClientRect(),q=I-$.left,E=P-$.top;o("change",{x:q,y:E})}};function k(I){return I.type==="mousemove"}function B(I){return I.type==="mousedown"}return(I,P)=>(l(),d("div",{ref_key:"slidableRef",ref:i,class:u(a(Ct).Slidable),"data-dragging":s.value,onMousedown:x,onTouchstart:x},[s.value?(l(),T(a(We),{key:0,event:"mouseup",handler:v})):_("",!0),s.value?(l(),T(a(We),{key:1,event:"mousemove",handler:b,passive:!1})):_("",!0),s.value?(l(),T(a(We),{key:2,event:"touchmove",handler:b,passive:!1})):_("",!0),s.value?(l(),T(a(We),{key:3,event:"touchend",handler:v})):_("",!0),s.value?(l(),T(a(We),{key:4,event:"touchcancel",handler:v})):_("",!0),w("div",{style:Re(a(f)),class:u(a(Ct).Dragger),ref_key:"draggerRef",ref:r},null,6)],42,_v))}});hs.__docgenInfo={exportName:"default",displayName:"Slidable",description:"",tags:{},props:[{name:"draggerX",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"draggerY",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"change",type:{names:["{ x: number; y: number; }"]}},{name:"dragger-height",type:{names:["number"]}}]};const Lu=C({props:{color:null,alpha:null},emits:["change"],setup(e,{emit:o}){const n=e,s=L(null),i=L(0),r=L(0),c=p(()=>ym(n.alpha,i.value,r.value)),m=p(()=>{const{red:b,green:A,blue:k}=as(n.color),B=`${b}, ${A}, ${k}`;return`linear-gradient(to top, rgba(${B}, 0) 18px, rgba(${B}, 1) calc(100% - 18px))`});pe(()=>{f()});const f=()=>{s.value&&(i.value=s.value.clientHeight)},x=b=>{r.value=b},v=({y:b})=>{const A=hm(b,i.value);o("change",A)};return(b,A)=>(l(),d("div",{class:u(a(Ct).AlphaPicker),ref_key:"alphaPickerRef",ref:s},[w("div",{class:u(a(Ct).ColorLayer),style:Re({background:a(m)})},"\xA0",6),S(a(hs),{draggerY:a(c),draggerX:0,onChange:v,onDraggerHeight:x},null,8,["draggerY"])],2))}});Lu.__docgenInfo={exportName:"default",displayName:"AlphaPicker",description:"",tags:{},props:[{name:"color",required:!0,type:{name:"HSBColor"}},{name:"alpha",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const _u=C({props:{hue:null},emits:["change"],setup(e,{emit:o}){const n=e,s=L(null),i=L(0),r=L(0),c=p(()=>gm(n.hue,i.value,r.value));pe(()=>{m()});const m=()=>{s.value&&(i.value=s.value.clientHeight)},f=v=>{r.value=v},x=({y:v})=>{const b=bm(v,i.value);o("change",b)};return(v,b)=>(l(),d("div",{class:u(a(Ct).HuePicker),ref_key:"huePickerRef",ref:s},[S(a(hs),{draggerY:a(c),draggerX:0,onChange:x,onDraggerHeight:f},null,8,["draggerY"])],2))}});_u.__docgenInfo={exportName:"default",displayName:"HuePicker",description:"",tags:{},props:[{name:"hue",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const Pv=["id","onMousedown"],gs=C({props:{id:null,modelValue:null,allowAlpha:{type:Boolean},fullWidth:{type:Boolean},outputType:null},emits:["change","update:modelValue"],setup(e,{emit:o}){const n=e,s=200,i=L(null),r=sl({hue:0,saturation:0,brightness:0,alpha:1}),c=sl({width:0,height:0}),m=q=>{q.preventDefault()},f=p(()=>O(Ct.ColorPicker,n.fullWidth&&Ct.fullWidth)),x=p(()=>r.alpha!==void 0&&n.allowAlpha?r.alpha:1),v=p(()=>{const{red:q,green:E,blue:K}=as({hue:r.hue,saturation:1,brightness:1});return`rgba(${q}, ${E}, ${K}, ${x.value})`}),b=p(()=>Qt(r.saturation*c.width,0,c.width)),A=p(()=>Qt(c.height-r.brightness*c.height,0,c.height)),k=p(()=>{if(n.outputType==="hex")return bv(r);if(n.outputType==="rgb"){const q=as(r);return`rgba(${q.red}, ${q.green}, ${q.blue}, ${x.value})`}return r}),B=eo(()=>{i.value&&(c.width=i.value.clientWidth,c.height=i.value.clientHeight)},s,{leading:!0,trailing:!0,maxWait:s});if(typeof n.modelValue=="object"&&Object.assign(r,n.modelValue),typeof n.modelValue=="string"){let q;if(/#[0-9abcdef]{3,6}/.test(n.modelValue))q=M(y({},hv(n.modelValue)),{alpha:1});else{const E=n.modelValue.replace(/^rgba?\(|\s+|\)$/g,"").split(",");q={red:parseInt(E[0],10),green:parseInt(E[1],10),blue:parseInt(E[2],10),alpha:E[2]?parseFloat(E[3]):1}}Object.assign(r,M(y({},fv(q)),{alpha:q.alpha}))}pe(()=>{i.value&&(c.width=i.value.clientWidth,c.height=i.value.clientHeight)});const I=q=>{r.hue=q,o("change",k.value),o("update:modelValue",k.value)},P=q=>{r.alpha=q,o("change",k.value),o("update:modelValue",k.value)},$=({x:q,y:E})=>{r.saturation=Qt(q/c.width,0,1),r.brightness=Qt(1-E/c.height,0,1),o("change",k.value),o("update:modelValue",k.value)};return(q,E)=>(l(),d("div",{id:e.id,class:u(a(f)),onMousedown:Jc(m,["prevent"])},[w("div",{ref_key:"mainColorRef",ref:i,class:u(a(Ct).MainColor)},[w("div",{class:u(a(Ct).ColorLayer),style:Re({backgroundColor:a(v)})},"\xA0",6),S(a(hs),{draggerX:a(b),draggerY:a(A),onChange:$},null,8,["draggerX","draggerY"])],2),S(a(_u),{hue:a(r).hue,onChange:I},null,8,["hue"]),e.allowAlpha?(l(),T(a(Lu),{key:0,alpha:a(x),color:a(r),onChange:P},null,8,["alpha","color"])):_("",!0),S(a(We),{event:"resize",handler:a(B)},null,8,["handler"])],42,Pv))}});gs.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:`The currently selected color.
The color can be HSB object (same with Shopify) or RGB, Hex string`,required:!0,type:{name:"union",elements:[{name:"Color"},{name:"string"}]}},{name:"allowAlpha",description:"Allow user to select an alpha value",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow HuePicker to take the full width",required:!1,type:{name:"boolean"}},{name:"outputType",description:"Color output format",required:!1,type:{name:"union",elements:[{name:'"hsb"'},{name:'"rgb"'},{name:'"hex"'}]}}],events:[{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const wv="Polaris-Combobox__Listbox";var Mv={Listbox:wv};const so=C({props:{allowMultiple:{type:Boolean},preferredPosition:null},emits:["scrolled-to-bottom"],setup(e,{emit:o}){const n=e;$e("comboboxListboxOptionContext",{allowMultiple:n.allowMultiple});const s=L(!1),i=L(""),r=L(""),c=L(!1),m=L(""),f=se(),x=p(()=>{var q;return(q=f.default)==null?void 0:q.call(f)}),v=p(()=>!s.value&&x),b=()=>{n.allowMultiple||(s.value=!1,i.value="")},A=()=>{s.value=!1,i.value=""},k=()=>{v.value&&(s.value=!0)},B=()=>{v.value&&(s.value=!0)},I=()=>{s.value&&(s.value=!1,i.value="")},P={activeOptionId:i.value,expanded:s.value,listboxId:r.value,setTextFieldFocused:q=>{c.value=q},setTextFieldLabelId:q=>{m.value=q},onTextFieldFocus:k,onTextFieldChange:B,onTextFieldBlur:I};$e("comboboxTextFieldContext",P);const $={setActiveOptionId:q=>{i.value=q},setListboxId:q=>{r.value=q},listboxId:r.value,textFieldLabelId:m.value,onOptionSelected:b,textFieldFocused:c.value,onKeyToBottom:()=>{o("scrolled-to-bottom")}};return $e("comboboxListboxContext",$),(q,E)=>(l(),T(a(He),{active:s.value,autofocusTarget:"none",preventFocusOnClose:!0,fullWidth:!0,preferInputActivator:!1,preferredPosition:e.preferredPosition,onClose:A},ze({_:2},[a(f).activator?{name:"activator",fn:h(()=>[g(q.$slots,"activator")])}:void 0,a(f).default?{name:"content",fn:h(()=>[S(a(ds),{onScrolledToBottom:E[0]||(E[0]=K=>q.$emit("scrolled-to-bottom"))},{default:h(()=>[w("div",{class:u(a(Mv).Listbox)},[g(q.$slots,"default")],2)]),_:3})])}:void 0]),1032,["active","preferredPosition"]))}});so.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"allowMultiple",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"default"}]};function Dl(e){return`${e}Label`}const Nv="Polaris-TextField",Bv="Polaris-TextField--multiline",Iv="Polaris-TextField__Input",Dv="Polaris-TextField--hasValue",$v="Polaris-TextField--focus",Ev="Polaris-TextField__Backdrop",Fv="Polaris-TextField--error",Ov="Polaris-TextField--readOnly",qv="Polaris-TextField--disabled",Rv="Polaris-TextField__Prefix",Hv="Polaris-TextField__Suffix",Vv="Polaris-TextField__CharacterCount",Uv="Polaris-TextField__AlignFieldBottom",jv="Polaris-TextField__ClearButton",Wv="Polaris-TextField__Hidden",zv="Polaris-TextField__Spinner",Gv="Polaris-TextField__SpinnerIcon",Kv="Polaris-TextField__Resizer",Xv="Polaris-TextField__DummyInput",Yv="Polaris-TextField__Segment",Qv="Polaris-TextField--monospaced";var Se={TextField:Nv,multiline:Bv,Input:Iv,hasValue:Dv,focus:$v,Backdrop:Ev,error:Fv,readOnly:Ov,disabled:qv,Prefix:Rv,"Input-hasClearButton":"Polaris-TextField__Input--hasClearButton","Input-suffixed":"Polaris-TextField__Input--suffixed","Input-alignRight":"Polaris-TextField__Input--alignRight","Input-alignLeft":"Polaris-TextField__Input--alignLeft","Input-alignCenter":"Polaris-TextField__Input--alignCenter",Suffix:Hv,CharacterCount:Vv,AlignFieldBottom:Uv,ClearButton:jv,Hidden:Wv,Spinner:zv,SpinnerIcon:Gv,Resizer:Kv,DummyInput:Xv,Segment:Yv,monospaced:Qv};function Jv(e){return`${e}Error`}function $l(e){return`${e}HelpText`}const Pu=C({emits:["click","change","mouseup","mousedown"],setup(e,{emit:o}){const n=s=>{o("click"),o("change",s)};return(s,i)=>(l(),d("div",{"aria-hidden":"true",class:u(a(Se).Spinner)},[w("div",{role:"button",tabindex:"-1",class:u(a(Se).Segment),onClick:i[0]||(i[0]=r=>n(1)),onMousedown:i[1]||(i[1]=r=>s.$emit("mousedown")),onMouseup:i[2]||(i[2]=r=>s.$emit("mouseup"))},[w("div",{class:u(a(Se).SpinnerIcon)},[S(a(ae),{source:a(Yc)},null,8,["source"])],2)],34),w("div",{role:"button",tabindex:"-1",class:u(a(Se).Segment),onClick:i[3]||(i[3]=r=>n(-1)),onMousedown:i[4]||(i[4]=r=>s.$emit("mousedown")),onMouseup:i[5]||(i[5]=r=>s.$emit("mouseup"))},[w("div",{class:u(a(Se).SpinnerIcon)},[S(a(ae),{source:a(Al)},null,8,["source"])],2)],34)],2))}});Pu.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},events:[{name:"mousedown"},{name:"mouseup"},{name:"click"},{name:"change",type:{names:["number"]}}]};const Zv=["innerHTML"],ex=["innerHTML"],wu=C({props:{contents:null,currentHeight:null,minimumLines:null},emits:["height-change"],setup(e,{emit:o}){const n=e,s={"&":"&amp;","<":"&lt;",">":"&gt;","\n":"<br>","\r":""},i=new RegExp(`[${Object.keys(s).join()}]`,"g"),r=L(null),c=L(null),m=L(),f=L(n.currentHeight),x=k=>s[k],v=k=>k?`${k.replace(i,x)}<br>`:"<br>",b=k=>{let B="";for(let I=0;I<k;I++)B+="<br>";return B},A=()=>{m.value&&cancelAnimationFrame(m.value),m.value=requestAnimationFrame(()=>{if(!r.value||!c.value)return;const k=Math.max(r.value.offsetHeight,c.value.offsetHeight);k!==f.value&&o("height-change",k)})};return pe(()=>{m.value&&cancelAnimationFrame(m.value)}),ao(()=>{A()}),(k,B)=>(l(),d("div",{"aria-hidden":"true",class:u(a(Se).Resizer)},[S(a(We),{event:"resize",handler:A}),w("div",{ref_key:"contentNode",ref:r,class:u(a(Se).DummyInput),innerHTML:v(e.contents)},null,10,Zv),e.minimumLines?(l(),d("div",{key:0,ref_key:"minimumLinesNode",ref:c,class:u(a(Se).DummyInput),innerHTML:b(e.minimumLines)},null,10,ex)):_("",!0)],2))}});wu.__docgenInfo={exportName:"default",displayName:"Resizer",description:"",tags:{},props:[{name:"contents",required:!1,type:{name:"string"}},{name:"currentHeight",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"minimumLines",required:!1,type:{name:"number"}}],events:[{name:"height-change",type:{names:["number"]}}]};const tx="Polaris-Connected",ox="Polaris-Connected__Item";var Xn={Connected:tx,Item:ox,"Item-primary":"Polaris-Connected__Item--primary","Item-focused":"Polaris-Connected__Item--focused"};const Yn=C({props:{position:null},emits:["focus","blur"],setup(e,{emit:o}){const n=e,s=L(!1),i=p(()=>O(Xn.Item,s.value&&Xn["Item-focused"],n.position==="primary"&&Xn["Item-primary"])),r=()=>{s.value=!0,o("focus")},c=()=>{s.value=!1,o("blur")};return(m,f)=>(l(),d("div",{class:u(a(i)),onFocus:r,onBlur:c},[g(m.$slots,"default")],34))}});Yn.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"position",required:!0,type:{name:"ItemPosition"}}],events:[{name:"focus"},{name:"blur"}],slots:[{name:"default"}]};const Mu=C({setup(e){return(o,n)=>(l(),d("div",{class:u(a(Xn).Connected)},[o.$slots.left?(l(),T(a(Yn),{key:0,position:"left"},{default:h(()=>[g(o.$slots,"left")]),_:3})):_("",!0),o.$slots.default?(l(),T(a(Yn),{key:1,position:"primary"},{default:h(()=>[g(o.$slots,"default")]),_:3})):_("",!0),o.$slots.right?(l(),T(a(Yn),{key:2,position:"right"},{default:h(()=>[g(o.$slots,"right")]),_:3})):_("",!0)],2))}});Mu.__docgenInfo={exportName:"default",displayName:"Connected",description:"",tags:{},slots:[{name:"left"},{name:"default"},{name:"right"}]};const ax="Polaris-Labelled--hidden",nx="Polaris-Labelled__LabelWrapper",sx="Polaris-Labelled__HelpText",ix="Polaris-Labelled__Action";var Ha={hidden:ax,LabelWrapper:nx,HelpText:sx,Error:"Polaris-Labelled__Error",Action:ix};const lx="Polaris-Label",rx="Polaris-Label--hidden",cx="Polaris-Label__Text",ux="Polaris-Label__RequiredIndicator";var Wn={Label:lx,hidden:rx,Text:cx,RequiredIndicator:ux};const dx=["id","for"],Nu=C({props:{id:null,hidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,n=p(()=>O(Wn.Label,o.hidden&&Wn.hidden)),s=p(()=>O(Wn.Text,o.requiredIndicator&&Wn.RequiredIndicator));return(i,r)=>(l(),d("div",{class:u(a(n))},[w("label",{id:a(Dl)(e.id),for:e.id,class:u(a(s))},[g(i.$slots,"default")],10,dx)],2))}});Nu.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"string"}},{name:"hidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const px=["id"],El=C({props:{id:null,error:{type:[null,Boolean]},action:null,labelHidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const o=e,n=p(()=>o.error&&typeof o.error!="boolean"),s=p(()=>O(o.labelHidden&&Ha.hidden));return(i,r)=>(l(),d("div",{class:u(a(s))},[i.$slots.label?(l(),d("div",{key:0,class:u(a(Ha).LabelWrapper)},[S(a(Nu),re({id:e.id,requiredIndicator:e.requiredIndicator,hidden:!1},i.$attrs),{default:h(()=>[g(i.$slots,"label")]),_:3},16,["id","requiredIndicator"]),e.action?(l(),d("div",{key:0,class:u(a(Ha).Action)},null,2)):_("",!0)],2)):_("",!0),g(i.$slots,"default"),a(n)?(l(),d("div",{key:1,class:u(a(Ha).Error)},[typeof e.error=="string"?(l(),T(a(no),{key:0,message:e.error,fieldID:a(Jv)(e.id)},null,8,["message","fieldID"])):(l(),T(Pe(e.error),{key:1}))],2)):_("",!0),i.$slots["help-text"]?(l(),d("div",{key:2,class:u(a(Ha).HelpText),id:a($l)(e.id)},[g(i.$slots,"help-text")],10,px)):_("",!0)],2))}});El.__docgenInfo={exportName:"default",displayName:"Labelled",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"TSIndexedAccessType"}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"action",description:"An action",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"label"},{name:"default"},{name:"help-text"}]};const mx=["id"],yx=["id"],hx=["aria-live"],gx=["disabled"],bx=w("p",null,"Clear button",-1),Le=C({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:null,name:null,id:null,role:null,step:null,autoComplete:{type:[String,Boolean]},max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue","clear-button-click"],setup(e,{emit:o}){const n=e,s=L(null),i=L(null),r=L(null),c=se(),m=p(()=>{var z;return(z=c["connected-left"])==null?void 0:z.call(c)}),f=p(()=>{var z;return(z=c["connected-right"])==null?void 0:z.call(c)}),x=p(()=>{var z;return(z=c["help-text"])==null?void 0:z.call(c)}),v=p(()=>{var z;return(z=c.prefix)==null?void 0:z.call(c)}),b=p(()=>{var z;return(z=c.suffix)==null?void 0:z.call(c)}),A=L(),k=L(),B=L();Be(()=>n.focused,()=>{!r.value||!n.focused===void 0||(n.focused?r.value.focus():r.value.blur())});const{useUniqueId:I}=Ne(),P=p(()=>I("TextField",n.id)),$=p(()=>n.type==="currency"?"text":n.type),q=p(()=>{if(!!n.multiline)return typeof n.multiline=="number"?n.multiline:1}),E=p(()=>de.value!==""),K=p(()=>n.multiline&&A.value?{height:`${A.value}px`}:{}),F=p(()=>O(Se.TextField,Boolean(de.value)&&Se.hasValue,n.disabled&&Se.disabled,n.readOnly&&Se.readOnly,n.error&&Se.error,n.multiline&&Se.multiline,k.value&&Se.focus)),W=p(()=>{const z=n.align&&Se[ke("Input-align",n.align)];return O(Se.Input,z,b.value&&Se["Input-suffixed"],n.clearButton&&Se["Input-hasClearButton"],n.monospaced&&Se.monospaced)}),D=p(()=>O(Se.CharacterCount,n.multiline&&Se.AlignFieldBottom)),U=p(()=>O(Se.Backdrop,m.value&&Se["Backdrop-connectedLeft"],f.value&&Se["Backdrop-connectedRight"])),te=p(()=>O(Se.ClearButton,!E.value&&Se.AlignFieldBottom)),de=p(()=>typeof n.modelValue=="string"?n.modelValue:""),ce=p(()=>n.step?n.step:1),we=p(()=>n.max?n.max:1/0),V=p(()=>n.min?n.min:-1/0),Y=p(()=>{if(!!n.multiline)return Boolean(n.multiline)||n.multiline>0?{"aria-multiline":!0}:void 0}),ie=p(()=>n.autoComplete===!0?"on":n.autoComplete===!1?"off":n.autoComplete),ye=p(()=>de.value.length),fe=p(()=>n.maxLength?ye.value:`${ye.value}/${n.maxLength}`),Ye=p(()=>{const z=[];return n.error&&z.push(`${P.value}Error`),x.value&&z.push($l(P.value)),n.showCharacterCount&&z.push(`${P.value}CharacterCounter`),z.length?z.join(" "):void 0}),he=p(()=>{const z=[];return v.value&&z.push(`${P.value}Prefix`),b.value&&z.push(`${P.value}Suffix`),z.unshift(Dl(P.value)),z.join(" ")}),Te=z=>{A.value=z},Z=z=>z instanceof HTMLElement&&(s.value&&s.value.contains(z)||i.value&&i.value.contains(z)),ve=z=>{var Oe;const _e=z.target;Z(_e)||k.value||(Oe=r.value)==null||Oe.focus()},be=z=>{const _e=z.target;Z(_e)||(k.value=!0)},Ae=z=>{const _e=z.target;Z(_e)||(k.value=!1)},mt=z=>{const _e=z.target;o("update:modelValue",_e.value),o("change",z)},Ue=z=>{n.selectTextOnFocus&&r.value&&r.value.select(),o("focus",z)},lo=z=>{const _e=Mt=>(Mt.toString().split(".")[1]||[]).length,Oe=n.modelValue?parseFloat(n.modelValue):0;if(typeof Oe!="number")return;const me=Math.max(_e(Oe),_e(ce.value)),ot=Math.min(Number(we.value),Math.max(Oe+z*ce.value,Number(V.value)));o("update:modelValue",String(ot.toFixed(me)))},vt=()=>{clearTimeout(B.value)},jt=()=>{let Oe=200;const me=()=>{Oe>50&&(Oe-=10),lo(0),B.value=window.setTimeout(me,Oe)};B.value=window.setTimeout(me,Oe),document.addEventListener("mouseup",vt,{once:!0})},Oa=z=>{const{key:_e,which:Oe}=y({},z),me=/[\d.eE+-]$/;n.type!=="number"||Oe!==13||me.test(_e)||z.preventDefault()};return(z,_e)=>(l(),T(a(El),{id:a(P),error:e.error,action:e.labelAction,labelHidden:e.labelHidden,requiredIndicator:e.requiredIndicator},ze({default:h(()=>[S(a(Mu),null,ze({default:h(()=>[w("div",{class:u(a(F)),onFocus:be,onClick:ve,onBlur:Ae},[a(c).prefix?(l(),d("div",{key:0,id:`${a(P)}Prefix`,class:u(a(Se).Prefix),ref_key:"prefixRef",ref:s},[g(z.$slots,"prefix")],10,mx)):_("",!0),(l(),T(Pe(e.multiline?"textarea":"input"),re({id:a(P),name:e.name,disabled:e.disabled,readonly:e.readOnly,role:e.role,autofocus:e.autoFocus,value:e.modelValue,placeholder:e.placeholder,style:a(K),autocomplete:a(ie),class:a(W),ref_key:"inputRef",ref:r,min:e.min,max:e.max,step:e.step,minlength:e.minLength,maxlength:e.maxLength,spellcheck:e.spellCheck,pattern:e.pattern,inputMode:e.inputMode,rows:a(q),type:a($),"aria-describedby":a(Ye),"aria-labelledby":a(he),"aria-invalid":Boolean(e.error),"aria-owns":e.ariaOwns,"aria-activedescendant":e.ariaActiveDescendant,"aria-autocomplete":e.ariaAutocomplete,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-required":e.requiredIndicator},a(Y),{onInput:mt,onKeydown:Oa,onFocus:Ue,onBlur:_e[0]||(_e[0]=Oe=>z.$emit("blur"))}),{default:h(()=>[e.multiline?(l(),d(X,{key:0},[le(j(e.modelValue),1)],64)):_("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"])),a(c).suffix?(l(),d("div",{key:1,id:`${a(P)}Suffix`,class:u(a(Se).Suffix),ref_key:"suffixRef",ref:i},[g(z.$slots,"suffix")],10,yx)):_("",!0),e.showCharacterCount?(l(),d("div",{key:2,class:u(a(D)),"aria-live":k.value?"polite":"off","aria-atomic":"true"},[w("p",null,j(a(fe)),1)],10,hx)):_("",!0),a(E)&&e.clearButton?(l(),d("button",{key:3,class:u(a(te)),disabled:e.disabled,onClick:_e[1]||(_e[1]=Oe=>z.$emit("clear-button-click",e.id))},[S(a(Ge),null,{default:h(()=>[bx]),_:1}),S(a(ae),{source:a(Zc),color:"base"},null,8,["source"])],10,gx)):_("",!0),e.type==="number"&&e.step!==0&&!e.disabled&&!e.readOnly?(l(),T(a(Pu),{key:4,onChange:lo,onMousedown:jt,onMouseup:vt})):_("",!0),w("div",{class:u(a(U))},null,2),e.multiline?(l(),T(a(wu),{key:5,contents:a(de)||e.placeholder,currentHeight:A.value,minimumLines:typeof e.multiline=="number"?e.multiline:1,onHeightChange:Te},null,8,["contents","currentHeight","minimumLines"])):_("",!0)],34)]),_:2},[a(c)["connected-left"]?{name:"left",fn:h(()=>[g(z.$slots,"connected-left")])}:void 0,a(c)["connected-right"]?{name:"right",fn:h(()=>[g(z.$slots,"connected-right")])}:void 0]),1024)]),_:2},[a(c).label?{name:"label",fn:h(()=>[g(z.$slots,"label")])}:void 0,a(c)["help-text"]?{name:"help-text",fn:h(()=>[g(z.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden","requiredIndicator"]))}});Le.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"blur"},{name:"clear-button-click",type:{names:["string"]}},{name:"focus",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"connected-left"},{name:"connected-right"},{name:"prefix"},{name:"suffix"}]};const Qa=C({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:null,name:null,id:null,role:null,step:null,max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean},selectTextOnFocus:{type:Boolean}},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const n=e,s=xe("comboboxTextFieldContext",{}),{activeOptionId:i,listboxId:r,expanded:c,setTextFieldFocused:m,setTextFieldLabelId:f,onTextFieldFocus:x,onTextFieldChange:v,onTextFieldBlur:b}=s,{useUniqueId:A}=Ne(),k=A("ComboboxTextField"),B=p(()=>n.id||k),I=p(()=>Dl(n.id||k));Be([()=>I.value,()=>f],()=>{f&&f(I.value)});const P=()=>{o("focus"),x&&x(),m&&m(!0)},$=()=>{o("blur"),b&&b(),m&&m(!1)},q=E=>{const K=E.target;o("update:modelValue",K.value),o("change",E),v&&v()};return(E,K)=>(l(),T(a(Le),re(n,{id:a(B),autoComplete:"list","aria-haspopup":"listbox",ariaActiveDescendant:a(i),ariaControls:a(r),ariaExpanded:a(c),modelValue:e.modelValue,onFocus:P,onBlur:$,onChange:q}),ze({_:2},[E.$slots.label?{name:"label",fn:h(()=>[g(E.$slots,"label")])}:void 0,E.$slots["help-text"]?{name:"help-text",fn:h(()=>[g(E.$slots,"help-text")])}:void 0,E.$slots.prefix?{name:"prefix",fn:h(()=>[g(E.$slots,"prefix")])}:void 0,E.$slots.suffix?{name:"suffix",fn:h(()=>[g(E.$slots,"suffix")])}:void 0,E.$slots["connected-left"]?{name:"connected-left",fn:h(()=>[g(E.$slots,"connected-left")])}:void 0,E.$slots["connected-right"]?{name:"connected-right",fn:h(()=>[g(E.$slots,"connected-right")])}:void 0]),1040,["id","ariaActiveDescendant","ariaControls","ariaExpanded","modelValue"]))}});Qa.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}},{name:"selectTextOnFocus",description:"Indicates whether or not the entire input/text area text should be selected on focus",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"prefix"},{name:"suffix"},{name:"connected-left"},{name:"connected-right"}]};function xa(){const e=xe("frameContext",{});function o(){if(!e)throw new jy("No frame context was provided.");return e}return{useFrame:o}}const Ja=C({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean},contextControl:null,secondaryMenu:null},setup(e){const o=e;Rt();const{useFrame:n}=xa(),{setContextualSaveBar:s,removeContextualSaveBar:i}=n(),r=se();return pe(()=>{const{message:c,saveAction:m,discardAction:f,alignContentFlush:x,fullWidth:v}=o;s({message:c,saveAction:m,discardAction:f,alignContentFlush:x,fullWidth:v,contextControl:r.contextControl&&r.contextControl(),secondaryMenu:r.secondaryMenu&&r.secondaryMenu()})}),it(()=>{i()}),(c,m)=>null}});Ja.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}},{name:"contextControl",description:"Accepts a component that is used to help users switch between different contexts",required:!1,type:{name:"any"}},{name:"secondaryMenu",description:"Accepts a node that is rendered to the left of the discard and save actions",required:!1,type:{name:"any"}}]};const fx="Polaris-DatePicker",vx="Polaris-DatePicker__MonthLayout",xx="Polaris-DatePicker__MonthContainer",Tx="Polaris-DatePicker__Month",Sx="Polaris-DatePicker__DayCell",Ax="Polaris-DatePicker__Day",Cx="Polaris-DatePicker__EmptyDayCell",kx="Polaris-DatePicker__Weekday",Lx="Polaris-DatePicker__Header",_x="Polaris-DatePicker__Title",Px="Polaris-DatePicker__Week";var Ce={DatePicker:fx,MonthLayout:vx,MonthContainer:xx,Month:Tx,"Month-current":"Polaris-DatePicker__Month--current",DayCell:Sx,"DayCell-inRange":"Polaris-DatePicker__DayCell--inRange",Day:Ax,"Day-today":"Polaris-DatePicker__Day--today","Day-inRange":"Polaris-DatePicker__Day--inRange","Day-selected":"Polaris-DatePicker__Day--selected","Day-disabled":"Polaris-DatePicker__Day--disabled",EmptyDayCell:Cx,Weekday:kx,"Weekday-current":"Polaris-DatePicker__Weekday--current",Header:Lx,Title:_x,"Day-firstInRange":"Polaris-DatePicker__Day--firstInRange","Day-hasRange":"Polaris-DatePicker__Day--hasRange","Day-hoverRight":"Polaris-DatePicker__Day--hoverRight","Day-lastInRange":"Polaris-DatePicker__Day--lastInRange",Week:Px};const Zt={months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}};function ja(e){switch(e){case 0:return"january";case 1:return"february";case 2:return"march";case 3:return"april";case 4:return"may";case 5:return"june";case 6:return"july";case 7:return"august";case 8:return"september";case 9:return"october";case 10:return"november";case 11:return"december"}}function Vr(e){switch(e){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}const wx=["tabIndex","aria-label","aria-disabled","aria-pressed"],hl=C({props:{focused:{type:Boolean},day:null,selected:{type:Boolean},inRange:{type:Boolean},inHoveringRange:{type:Boolean},disabled:{type:Boolean},lastDayOfMonth:null,isLastSelectedDay:{type:Boolean},isFirstSelectedDay:{type:Boolean},isHoveringRight:{type:Boolean},rangeIsDifferent:{type:Boolean},weekday:null,selectedAccessibilityLabelPrefix:null},emits:["focus","hover","click"],setup(e,{emit:o}){const n=e,s=L(null),i=p(()=>n.lastDayOfMonth||n.day),r=p(()=>n.day?Tt(new Date,n.day):null),c=p(()=>n.day?n.day.getDate():null),m=p(()=>(n.focused||n.selected||r.value||c.value===1)&&!n.disabled?0:-1),f=p(()=>O(Ce.DayCell,n.selected&&Ce["DayCell-selected"],(n.inRange||n.inHoveringRange)&&!n.disabled&&Ce["DayCell-inRange"],n.isLastSelectedDay&&Ce["DayCell-lastInRange"],n.isFirstSelectedDay&&Ce["DayCell-firstInRange"],n.isHoveringRight&&Ce["DayCell-hoverRight"],n.rangeIsDifferent&&Ce["DayCell-hasRange"])),x=p(()=>O(Ce.Day,n.selected&&Ce["Day-selected"],n.disabled&&Ce["Day-disabled"],r.value&&Ce["Day-today"],(n.inRange||n.inHoveringRange)&&!n.disabled&&Ce["Day-inRange"],n.isLastSelectedDay&&Ce["Day-lastInRange"],n.isFirstSelectedDay&&Ce["Day-firstInRange"],n.isHoveringRight&&Ce["Day-hoverRight"],n.rangeIsDifferent&&Ce["Day-hasRange"])),v=p(()=>{if(!n.day)return null;const I=ja(n.day.getMonth());return I?Zt.months[I]:""}),b=p(()=>[n.selected&&n.selectedAccessibilityLabelPrefix?`${n.selectedAccessibilityLabelPrefix} `:"",`${r.value?"Today ":""}`,`${n.weekday?n.weekday:""} `,`${v.value} `,`${c.value} `,`${n.day?n.day.getFullYear():new Date().getFullYear()}`].join(""));ao(()=>{n.focused&&s.value&&setTimeout(()=>{s.value.focus()},10)});const A=()=>{o("focus",n.day)},k=()=>{o("hover",i.value)},B=()=>{!n.disabled&&n.day&&o("click",n.day)};return(I,P)=>e.day?(l(),d("td",{key:0,class:u(a(f))},[w("button",{type:"button",ref_key:"dayRef",ref:s,tabIndex:a(m),class:u(a(x)),"aria-label":a(b),"aria-disabled":e.disabled,"aria-pressed":e.selected,onFocus:A,onMouseover:k,onClick:B},j(a(c)),43,wx)],2)):(l(),d("td",{key:1,class:u(a(Ce).EmptyDayCell),onMouseover:k},null,34))}});hl.__docgenInfo={exportName:"default",displayName:"Day",description:"",tags:{},props:[{name:"focused",required:!1,type:{name:"boolean"}},{name:"day",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"inRange",required:!1,type:{name:"boolean"}},{name:"inHoveringRange",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"lastDayOfMonth",required:!1,type:{name:"any"}},{name:"isLastSelectedDay",required:!1,type:{name:"boolean"}},{name:"isFirstSelectedDay",required:!1,type:{name:"boolean"}},{name:"isHoveringRight",required:!1,type:{name:"boolean"}},{name:"rangeIsDifferent",required:!1,type:{name:"boolean"}},{name:"weekday",required:!1,type:{name:"string"}},{name:"selectedAccessibilityLabelPrefix",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["union"]}},{name:"hover",type:{names:["union"]}},{name:"click",type:{names:["Date"]}}]};const Mx=["aria-label"],Bu=C({props:{label:null,title:null,current:{type:Boolean}},setup(e){const o=e,n=p(()=>O(Ce.Weekday,o.current&&Ce["Weekday-current"]));return(s,i)=>(l(),d("th",{"aria-label":e.label,scope:"col",class:u(a(n))},j(e.title),11,Mx))}});Bu.__docgenInfo={exportName:"default",displayName:"Weekday",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"current",required:!0,type:{name:"boolean"}}]};const gl=C({props:{focusedDate:null,selected:null,hoverDate:null,month:null,year:null,disableDatesBefore:null,disableDatesAfter:null,allowRange:{type:Boolean},weekStartsOn:null,accessibilityLabelPrefixes:null},emits:["focus","hover","click","change"],setup(e,{emit:o}){const n=e,s=new Date,i=p(()=>s.getMonth()===n.month&&s.getFullYear()===n.year),r=p(()=>O(Ce.Title,i.value&&Ce["Month-current"])),c="Polaris-DatePicker__WeekHeadings",m=p(()=>fm(n.month,n.year,n.weekStartsOn)),f=p(()=>{const D=ja(n.month);return D?Zt.months[D]:""}),x=p(()=>vm(n.weekStartsOn)),v=p(()=>new Date(n.year,n.month+1,0)),b=p(()=>!(n.selected&&Tt(n.selected.start,n.selected.end))),A=D=>{const U=Sm(n.allowRange?n.selected:void 0,D);o("change",U)},k=D=>n.disableDatesBefore&&Jn(D,n.disableDatesBefore)||n.disableDatesAfter&&Zn(D,n.disableDatesAfter),B=D=>n.allowRange&&n.selected&&W(D,n.selected),I=D=>n.allowRange&&n.selected&&(!Tt(n.selected.start,n.selected.end)&&F(D,n.selected)||n.hoverDate&&Tt(n.selected.start,n.selected.end)&&Zn(n.hoverDate,n.selected.start)&&Tt(D,n.hoverDate)&&!B(D)),P=D=>n.hoverDate&&Jn(D,n.hoverDate),$=D=>{if(!n.accessibilityLabelPrefixes)return"";const[U,te]=n.accessibilityLabelPrefixes;if(n.allowRange&&B(D)||!n.allowRange&&U)return U;if(n.allowRange&&I(D))return te},q=(D,U,te)=>{if(!n.allowRange||!U||!te||D==null)return!1;const{start:de,end:ce}=U;return Boolean(Tt(de,ce)&&D>de&&D<=te)};function E(D){const U=Vr(D);return U?Zt.daysAbbreviated[U]:""}function K(D){const U=Vr(D);return U?Zt.days[U]:""}function F(D,U){if(D==null)return!1;const{end:te}=U;return Boolean(te&&Tt(te,D))}function W(D,U){if(D==null)return!1;const{start:te}=U;return Boolean(te&&Tt(te,D))}return(D,U)=>(l(),d("div",{class:u(a(Ce).MonthContainer)},[w("table",{role:"grid",class:u(a(Ce).Month)},[w("caption",{class:u(a(r))},j(a(f))+" "+j(e.year),3),w("thead",null,[w("tr",{class:u(c)},[(l(!0),d(X,null,ue(a(x),te=>(l(),T(a(Bu),{key:te,title:E(te),label:K(te),current:a(i)&&new Date().getDay()===te},null,8,["title","label","current"]))),128))])]),w("tbody",null,[(l(!0),d(X,null,ue(a(m),(te,de)=>(l(),d("tr",{key:de,class:u(a(Ce).Week)},[(l(!0),d(X,null,ue(te,(ce,we)=>(l(),d(X,{key:we},[ce?(l(),T(a(hl),{key:1,selectedAccessibilityLabelPrefix:$(ce),weekday:K(we),focused:e.focusedDate&&a(Tt)(ce,e.focusedDate),day:ce,selected:e.selected&&a(xm)(ce,e.selected),inRange:e.selected&&a(Tm)(ce,e.selected),disabled:k(ce),inHoveringRange:q(ce,e.selected,e.hoverDate),isLastSelectedDay:I(ce),isFirstSelectedDay:B(ce),isHoveringRight:P(ce),rangeIsDifferent:a(b),onFocus:V=>D.$emit("focus",ce),onClick:A,onHover:V=>D.$emit("hover",ce)},null,8,["selectedAccessibilityLabelPrefix","weekday","focused","day","selected","inRange","disabled","inHoveringRange","isLastSelectedDay","isFirstSelectedDay","isHoveringRight","rangeIsDifferent","onFocus","onHover"])):(l(),T(a(hl),{key:0,lastDayOfMonth:a(v),onHover:U[0]||(U[0]=V=>D.$emit("hover",null))},null,8,["lastDayOfMonth"]))],64))),128))],2))),128))])],2)],2))}});gl.__docgenInfo={exportName:"default",displayName:"Month",description:"",tags:{},props:[{name:"focusedDate",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"Range"}},{name:"hoverDate",required:!1,type:{name:"Date"}},{name:"month",required:!0,type:{name:"number"}},{name:"year",required:!0,type:{name:"number"}},{name:"disableDatesBefore",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",required:!1,type:{name:"Date"}},{name:"allowRange",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",required:!0,type:{name:"number"}},{name:"accessibilityLabelPrefixes",required:!1,type:{name:"TSTupleType"}}],events:[{name:"hover",type:{names:["union"]}},{name:"focus",type:{names:["union"]}},{name:"click",type:{names:["Date"]}},{name:"change",type:{names:["union"]}}]};const Nx=["id"],bs=C({props:{id:null,modelValue:null,month:null,year:null,allowRange:{type:Boolean},disableDatesBefore:null,disableDatesAfter:null,multiMonth:{type:Boolean},weekStartsOn:{default:0},dayAccessibilityLabelPrefix:null},emits:["month-change","change","update:modelValue"],setup(e,{emit:o}){const n=e,s=L(),i=L(),r=p(()=>Lr(n.month,n.year)),c=p(()=>_r(n.month)),m=p(()=>Lr(c.value,r.value)),f=p(()=>_r(c.value)),x=p(()=>Cm(n.month,n.year)),v=p(()=>km(n.month)),b=p(()=>{const V=ja(v.value);return V?Zt.months[V]:""}),A=p(()=>{if(n.multiMonth){const Y=ja(f.value);return Y?Zt.months[Y]:""}const V=ja(c.value);return V?Zt.months[V]:""}),k=p(()=>n.multiMonth?m.value:r.value),B=p(()=>we(n.modelValue)),I=p(()=>n.allowRange?"Start of range":n.dayAccessibilityLabelPrefix),P="End of range",$=p(()=>[I.value,P]),q=p(()=>`Show previous month, ${b.value} ${x.value}`),E=p(()=>`Show next month, ${A.value} ${k.value}`),K=(V,Y)=>{o("month-change",{month:V,year:Y})},F=(V,Y)=>{s.value=void 0,K(V,Y)},W=V=>{s.value=V||void 0},D=V=>{i.value=V||void 0},U=V=>{K(V.getMonth(),V.getFullYear()),i.value=V,s.value=V},te=V=>{if(V){const{end:Y}=V;i.value=Y,s.value=new Date(Y),o("update:modelValue",V)}o("change",V)},de=V=>{const{key:Y}=V,ie=we(n.modelValue),ye=s.value||ie&&ie.start;if(!!ye){if(Y==="ArrowUp"){const fe=new Date(ye);fe.setDate(ye.getDate()-7),n.disableDatesBefore&&Jn(fe,n.disableDatesBefore)||U(fe)}if(Y==="ArrowDown"){const fe=new Date(ye);fe.setDate(ye.getDate()+7),n.disableDatesAfter&&Zn(fe,n.disableDatesAfter)||U(fe)}if(Y==="ArrowRight"){const fe=new Date(ye);fe.setDate(ye.getDate()+1),n.disableDatesAfter&&Zn(fe,n.disableDatesAfter)||U(fe)}if(Y==="ArrowLeft"){const fe=new Date(ye);fe.setDate(ye.getDate()-1),n.disableDatesBefore&&Jn(fe,n.disableDatesBefore)||U(fe)}}},ce=V=>{const{key:Y}=V;(Y==="ArrowUp"||Y==="ArrowDown"||Y==="ArrowLeft"||Y==="ArrowRight")&&(V.preventDefault(),V.stopPropagation())};function we(V){return V instanceof Date?{start:V,end:V}:V}return(V,Y)=>(l(),d("div",{id:e.id,class:u(a(Ce).DatePicker),onKeydown:ce,onKeyup:de},[w("div",{class:u(a(Ce).Header)},[S(a(ne),{plain:"",icon:a(ya),accessibilityLabel:a(q),onClick:Y[0]||(Y[0]=ie=>F(a(v),a(x)))},null,8,["icon","accessibilityLabel"]),S(a(ne),{plain:"",icon:a(Am),accessibilityLabel:a(E),onClick:Y[1]||(Y[1]=ie=>F(a(c),a(r)))},null,8,["icon","accessibilityLabel"])],2),w("div",{class:u(a(Ce).MonthLayout)},[S(a(gl),{focusedDate:s.value,month:e.month,year:e.year,selected:we(e.modelValue),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a($),onChange:te,onHover:D,onFocus:W},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"]),e.multiMonth?(l(),T(a(gl),{key:0,focusedDate:s.value,month:a(c),year:a(r),selected:a(B),hoverDate:i.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a($),onChange:te,onHover:D,onFocus:W},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"])):_("",!0)],2)],42,Nx))}});bs.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:"The selected date or range of dates",required:!1,type:{name:"Range"}},{name:"month",description:"The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December",required:!0,type:{name:"number"}},{name:"year",description:"The year to show",required:!0,type:{name:"number"}},{name:"allowRange",description:"Allow a range of dates to be selected",required:!1,type:{name:"boolean"}},{name:"disableDatesBefore",description:"Disable selecting dates before this.",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",description:"Disable selecting dates after this.",required:!1,type:{name:"Date"}},{name:"multiMonth",description:"The selection can span multiple months",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",description:"First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"dayAccessibilityLabelPrefix",description:"Visually hidden prefix text for selected days on single selection date pickers",required:!1,type:{name:"string"}}],events:[{name:"month-change",type:{names:["{ month: number, year: number }"]}},{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const Bx="Polaris-DescriptionList",Ix="Polaris-DescriptionList__Term",Dx="Polaris-DescriptionList--spacingTight",$x="Polaris-DescriptionList__Description";var ns={DescriptionList:Bx,Term:Ix,spacingTight:Dx,Description:$x};const fs=C({props:{spacing:{default:"loose"}},setup(e){const o=e,n=p(()=>O(ns.DescriptionList,o.spacing==="tight"&&ns.spacingTight));return(s,i)=>(l(),d("dl",{class:u(a(n))},[g(s.$slots,"default")],2))}});fs.__docgenInfo={exportName:"default",displayName:"DescriptionList",description:"",tags:{},props:[{name:"spacing",description:"Determines the spacing between list items",tags:{default:[{description:"'loose'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"loose"'},{name:'"tight"'}]},defaultValue:{func:!1,value:"'loose'"}}],slots:[{name:"default"}]};const Iu=C({setup(e){const o=O(ns.Term);return(n,s)=>(l(),d("dt",{class:u(a(o))},[g(n.$slots,"default")],2))}});Iu.__docgenInfo={exportName:"default",displayName:"DescriptionListTerm",description:"",tags:{},slots:[{name:"default"}]};const Du=C({setup(e){const o=O(ns.Description);return(n,s)=>(l(),d("dd",{class:u(a(o))},[g(n.$slots,"default")],2))}});Du.__docgenInfo={exportName:"default",displayName:"DescriptionListDesc",description:"",tags:{},slots:[{name:"default"}]};const Ex="Polaris-DisplayText",Fx="Polaris-DisplayText--sizeSmall",Ox="Polaris-DisplayText--sizeMedium",qx="Polaris-DisplayText--sizeLarge",Rx="Polaris-DisplayText--sizeExtraLarge";var Ur={DisplayText:Ex,sizeSmall:Fx,sizeMedium:Ox,sizeLarge:qx,sizeExtraLarge:Rx};const Za=C({props:{element:{default:"p"},size:{default:"medium"}},setup(e){const o=e,n=p(()=>O(Ur.DisplayText,o.size&&Ur[ke("size",o.size)]));return(s,i)=>(l(),T(Pe(e.element),{class:u(a(n))},{default:h(()=>[g(s.$slots,"default")]),_:3},8,["class"]))}});Za.__docgenInfo={exportName:"default",displayName:"DisplayText",description:"",tags:{},props:[{name:"element",description:"Name of element to use for text",tags:{default:[{description:"'p'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'p'"}},{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}]};const Hx="Polaris-ExceptionList",Vx="Polaris-ExceptionList__Item",Ux="Polaris-ExceptionList__Icon",jx="Polaris-ExceptionList--statusWarning",Wx="Polaris-ExceptionList--statusCritical",zx="Polaris-ExceptionList__Bullet",Gx="Polaris-ExceptionList__Title",Kx="Polaris-ExceptionList__Description";var St={ExceptionList:Hx,Item:Vx,Icon:Ux,statusWarning:jx,statusCritical:Wx,Bullet:zx,Title:Gx,Description:Kx};const $u=C({setup(e){return(o,n)=>(l(),d("ul",{class:u(a(St).ExceptionList)},[g(o.$slots,"default")],2))}});$u.__docgenInfo={exportName:"default",displayName:"ExceptionList",description:"",tags:{},slots:[{name:"default"}]};const Xx="Polaris-Truncate";var Yx={Truncate:Xx};const Eu=C({setup(e){return(o,n)=>{const s=eu("component");return l(),T(s,{class:u(a(Yx).Truncate)},{default:h(()=>[g(o.$slots,"default")]),_:3},8,["class"])}}});Eu.__docgenInfo={exportName:"default",displayName:"Truncate",description:"",tags:{},slots:[{name:"default"}]};const vs=C({props:{status:null,icon:null,title:null,truncate:{type:Boolean}},setup(e){const o=e,n=se(),s=p(()=>O(St.Item,o.status&&St[ke("status",o.status)]));return(i,r)=>(l(),d("li",{class:u(a(s))},[w("span",{class:u(a(St).Icon)},[e.icon?(l(),T(a(ae),{key:0,source:e.icon},null,8,["source"])):(l(),d("span",{key:1,class:u(a(St).Bullet)},null,2))],2),e.truncate?(l(),T(a(Eu),{key:0},{default:h(()=>[e.title?(l(),d("span",{key:0,class:u(a(St).Title)},j(e.title),3)):_("",!0),a(n).default?(l(),d("span",{key:1,class:u(a(St).Description)},[g(i.$slots,"default")],2)):_("",!0)]),_:3})):(l(),d(X,{key:1},[e.title?(l(),d("span",{key:0,class:u(a(St).Title)},j(e.title),3)):_("",!0),a(n).default?(l(),d("span",{key:1,class:u(a(St).Description)},[g(i.$slots,"default")],2)):_("",!0)],64))],2))}});vs.__docgenInfo={exportName:"default",displayName:"ExceptionListItem",description:"",tags:{},props:[{name:"status",description:"Set the color of the icon and title for the given item.",required:!1,type:{name:"union",elements:[{name:'"critical"'},{name:'"warning"'}]}},{name:"icon",description:"Icon displayed by the list item",required:!1,type:{name:"IconSource"}},{name:"title",description:"Text displayed beside the icon",required:!1,type:{name:"string"}},{name:"truncate",description:"Should the description be truncated at end of line",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Qx={inheritAttrs:!1,render(){return null}},Fu=C(M(y({},Qx),{props:{disabled:{type:Boolean},root:null},setup(e){const o=e,n=()=>{!o.disabled&&o.root&&!o.root.querySelector("[autofocus]")&&cs(o.root,!1)};return Be([()=>o.disabled,()=>o.root],()=>n()),pe(()=>{n()}),()=>{}}}));Fu.__docgenInfo={exportName:"default",displayName:"Focus",description:"",tags:{},props:[{name:"disabled",required:!1,type:{name:"boolean"}},{name:"root",required:!0,type:{name:"union",elements:[{name:"HTMLElement"},{name:"null"}]}}]};const Jx="Polaris-FooterHelp",Zx="Polaris-FooterHelp__Text";var jr={FooterHelp:Jx,Text:Zx};const xs=C({setup(e){return(o,n)=>(l(),d("div",{class:u(a(jr).FooterHelp)},[w("div",{class:u(a(jr).Text)},[g(o.$slots,"default")],2)],2))}});xs.__docgenInfo={exportName:"default",displayName:"FooterHelp",description:"",tags:{},slots:[{name:"default"}]};const eT=w("button",{type:"submit","aria-hidden":"true",tabIndex:"-1"},"Submit",-1),tT=C({props:{implicitSubmit:{type:Boolean,default:!0},preventDefault:{type:Boolean}},emits:["submit"],setup(e,{emit:o}){const n=e,s=i=>{n.preventDefault&&i.preventDefault(),o("submit",i)};return(i,r)=>(l(),d("form",{onSubmit:s},[e.implicitSubmit?(l(),T(a(Ge),{key:0},{default:h(()=>[eT]),_:1})):_("",!0),g(i.$slots,"default")],32))}});tT.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"implicitSubmit",description:"Toggles if form submits on Enter keypress. Defaults to true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"preventDefault",description:"Blocks the default form action",required:!1,type:{name:"boolean"}}],events:[{name:"submit",type:{names:["Event"]}}],slots:[{name:"default"}]};const oT="Polaris-FormLayout",aT="Polaris-FormLayout__Title",nT="Polaris-FormLayout__Items",sT="Polaris-FormLayout__HelpText",iT="Polaris-FormLayout__Item",lT="Polaris-FormLayout--grouped",rT="Polaris-FormLayout--condensed";var Et={FormLayout:oT,Title:aT,Items:nT,HelpText:sT,Item:iT,grouped:lT,condensed:rT};const Fl=C({setup(e){return(o,n)=>(l(),d("div",{class:u(a(Et).Item)},[g(o.$slots,"default")],2))}});Fl.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const cT=C({props:{condensed:{type:Boolean}},setup(e,{expose:o}){const n=e,s=se(),{useUniqueId:i}=Ne(),r=i("FormLayoutGroup"),c=`${r}HelpText`,m=`${r}Title`;o({name:"FormGroup"});const f=p(()=>O(n.condensed?Et.condensed:Et.grouped));return(x,v)=>(l(),d("div",{role:"group",class:u(a(f)),"aria-labelledby":m,"aria-describedby":c},[a(s).title?(l(),d("div",{key:0,id:m,class:u(a(Et).Title)},[g(x.$slots,"title")],2)):_("",!0),w("div",{class:u(a(Et).Items)},[a(s).default?(l(!0),d(X,{key:0},ue(a(s).default(),(b,A)=>(l(),T(a(Fl),{key:A},{default:h(()=>[(l(),T(Pe(b)))]),_:2},1024))),128)):g(x.$slots,"default",{key:1})],2),a(s)["help-text"]?(l(),d("div",{key:1,id:c,class:u(a(Et).HelpText)},[g(x.$slots,"help-text")],2)):_("",!0)],2))}});cT.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"condensed",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"},{name:"help-text"}]};const Ts=C({setup(e){const o=L([]),n=L([]),s=se();return Lm(()=>{o.value=[]}),pe(()=>{o.value.forEach(i=>{n.value.push(i.name==="FormGroup")})}),(i,r)=>(l(),d("div",{class:u(a(Et).FormLayout)},[a(s).default?(l(!0),d(X,{key:0},ue(a(s).default(),(c,m)=>(l(),d(X,null,[n.value[m]?(l(),T(Pe(c),{key:1,ref_for:!0,ref:f=>{o.value[m]=f}},null,512)):(l(),T(a(Fl),{key:m,class:u(a(Et).Item)},{default:h(()=>[(l(),T(Pe(c),{ref_for:!0,ref:f=>{o.value[m]=f}},null,512))]),_:2},1032,["class"]))],64))),256)):g(i.$slots,"default",{key:1})],2))}});Ts.__docgenInfo={exportName:"default",displayName:"FormLayout",description:"",tags:{},slots:[{name:"default"}]};function Wr(e,o,n){if(!document)return;(n||document.documentElement).style.setProperty(e,o)}const uT="Polaris-Frame",dT="Polaris-Frame__Navigation",pT="Polaris-Frame--hasTopBar",mT="Polaris-Frame__NavigationDismiss",yT="Polaris-Frame__TopBar",hT="Polaris-Frame__ContextualSaveBar",gT="Polaris-Frame__Main",bT="Polaris-Frame--hasNav",fT="Polaris-Frame__Content",vT="Polaris-Frame__GlobalRibbonContainer",xT="Polaris-Frame__LoadingBar",TT="Polaris-Frame__Skip",ST="Polaris-Frame--focused",AT="Polaris-Frame--pressed";var Ie={Frame:uT,Navigation:dT,hasTopBar:pT,"Navigation-enter":"Polaris-Frame__Navigation--enter","Navigation-enterActive":"Polaris-Frame__Navigation--enterActive","Navigation-exit":"Polaris-Frame__Navigation--exit","Navigation-exitActive":"Polaris-Frame__Navigation--exitActive",NavigationDismiss:mT,"Navigation-visible":"Polaris-Frame__Navigation--visible",TopBar:yT,ContextualSaveBar:hT,Main:gT,hasNav:bT,Content:fT,GlobalRibbonContainer:vT,LoadingBar:xT,Skip:TT,focused:ST,pressed:AT};const CT={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},kT=w("path",{d:"m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"},null,-1),LT=[kT];function _T(e,o){return l(),d("svg",CT,LT)}var Ol={render:_T};const PT="Polaris-Frame-CssAnimation--startFade",wT="Polaris-Frame-CssAnimation--endFade";var zr={startFade:PT,endFade:wT};const Ou=C({props:{in:{type:Boolean},type:null},setup(e){const o=e,n={Entering:"entering",Entered:"entered",Exiting:"exiting",Exited:"exited"},s=L(null),i=L(o.in?n.Entering:n.Exited),r=p(()=>O(zr[ke("start",o.type)],o.in&&zr[ke("end",o.type)]));Be(()=>i.value,()=>{i.value===n.Entering&&m(n.Entered)}),Be(()=>o.in,()=>{o.in&&m(n.Entering),!o.in&&m(n.Exiting)});const c=()=>{i.value===n.Exiting&&m(n.Exited)},m=f=>{i.value=f,f===n.Entering&&s.value&&s.value.getBoundingClientRect()};return(f,x)=>(l(),d("div",{class:u(a(r)),ref_key:"frameCssAnimationRef",ref:s,onTransitionend:c},[i.value!==n.Exited||o.in?g(f.$slots,"default",{key:0}):_("",!0)],34))}});Ou.__docgenInfo={exportName:"default",displayName:"CssAnimation",description:"",tags:{},props:[{name:"in",required:!0,type:{name:"boolean"}},{name:"type",required:!0,type:{name:"AnimationType"}}],slots:[{name:"default"}]};function MT(e){const o=typeof e;return e!=null&&(o==="object"||o==="function")}function qu(e,o){if(!e)return null;const n=Object.keys(e);for(const s of n){if(s===o)return e[o];if(MT(e[s])){const i=qu(e[s],o);if(i)return i}}return null}function ql(e={},o=0,n="width"){const s=typeof e=="number"?e:qu(e,n);return s?`${s}px`:`${o}px`}const NT="Polaris-Frame-ContextualSaveBar",BT="Polaris-Frame-ContextualSaveBar__LogoContainer",IT="Polaris-Frame-ContextualSaveBar__ContextControl",DT="Polaris-Frame-ContextualSaveBar__Message",$T="Polaris-Frame-ContextualSaveBar__Contents",ET="Polaris-Frame-ContextualSaveBar--fullWidth",FT="Polaris-Frame-ContextualSaveBar__ActionContainer",OT="Polaris-Frame-ContextualSaveBar__Action";var Gt={ContextualSaveBar:NT,LogoContainer:BT,ContextControl:IT,Message:DT,Contents:$T,fullWidth:ET,ActionContainer:FT,Action:OT};const Ru=C({props:{open:{type:Boolean}},emits:["discard","cancel"],setup(e,{emit:o}){const n=xe("lang"),s=n.Polaris.DiscardConfirmationModal.message,i=n.Polaris.DiscardConfirmationModal.title,r=n.Polaris.DiscardConfirmationModal.primaryAction,c=n.Polaris.DiscardConfirmationModal.secondaryAction,m=()=>{o("discard")},f=()=>{o("cancel")};return(x,v)=>(l(),T(a(io),{open:e.open,onClose:f,primaryAction:{content:a(r),destructive:!0,onAction:m},secondaryActions:[{content:a(c),onAction:f}],sectioned:""},{title:h(()=>[le(j(a(i)),1)]),content:h(()=>[le(j(a(s)),1)]),_:1},8,["open","primaryAction","secondaryActions"]))}});Ru.__docgenInfo={exportName:"default",displayName:"DiscardConfirmationModal",description:"",tags:{},props:[{name:"open",required:!0,type:{name:"boolean"}}],events:[{name:"discard"},{name:"cancel"}]};const Hu=C({props:{alignContentFlush:{type:Boolean},message:null,saveAction:null,discardAction:null,fullWidth:{type:Boolean}},setup(e){const o=e,n=xe("lang"),s=se(),i=p(()=>O(Gt.Contents,o.fullWidth&&Gt.fullWidth)),r=n.Polaris.ContextualSaveBar.save,c=n.Polaris.ContextualSaveBar.discard,{useFrame:m}=xa(),{logo:f}=m(),x=ql(f,104),v=L(!1),b=()=>{v.value=!v.value},A=()=>{v.value=!1},k=()=>{o.discardAction&&(o.discardAction.discardConfirmationModal?b():o.discardAction.onAction&&o.discardAction.onAction())},B=()=>{o.discardAction&&o.discardAction.onAction&&o.discardAction.onAction(),A()};return(I,P)=>(l(),d(X,null,[S(a(ba),{"color-scheme":"dark"},{default:h(()=>[w("div",{class:u(a(Gt).ContextualSaveBar)},[a(s).contextControl?(l(),d("div",{key:0,class:u(a(Gt).ContextControl)},[g(I.$slots,"contextControl")],2)):_("",!0),!e.alignContentFlush&&!a(s).contextControl?(l(),d("div",{key:1,class:u(a(Gt).LogoContainer),style:Re(a(x))},[a(f)?(l(),T(a(ga),{key:0,style:Re({width:a(x)}),source:a(f).contextualSaveBarSource||"",alt:""},null,8,["style","source"])):_("",!0)],6)):_("",!0),w("div",{class:u(a(i))},[w("h2",{class:u(a(Gt).Message)},j(e.message),3),w("div",{class:u(a(Gt).ActionContainer)},[S(a(Ve),{spacing:"tight",wrap:!1},{default:h(()=>[g(I.$slots,"secondaryMenu"),e.discardAction?(l(),T(a(ne),{key:0,url:e.discardAction.url,loading:e.discardAction.loading,disabled:e.discardAction.disabled,accessibilityLabel:e.discardAction.content,onClick:k},{default:h(()=>[e.discardAction.content?(l(),d(X,{key:0},[le(j(e.discardAction.content),1)],64)):(l(),d(X,{key:1},[le(j(a(c)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel"])):_("",!0),e.saveAction?(l(),T(a(ne),{key:1,primary:"",url:e.saveAction.url,loading:e.saveAction.loading,disabled:e.saveAction.disabled,accessibilityLabel:e.saveAction.content,onClick:e.saveAction.onAction},{default:h(()=>[e.saveAction.content?(l(),d(X,{key:0},[le(j(e.saveAction.content),1)],64)):(l(),d(X,{key:1},[le(j(a(r)),1)],64))]),_:1},8,["url","loading","disabled","accessibilityLabel","onClick"])):_("",!0)]),_:3})],2)],2)],2)]),_:3}),e.discardAction&&e.discardAction.onAction&&e.discardAction.discardConfirmationModal?(l(),T(a(Ru),{key:0,open:v.value,onCancel:b,onDiscard:B},null,8,["open"])):_("",!0)],64))}});Hu.__docgenInfo={exportName:"default",displayName:"ContextualSaveBar",description:"",tags:{},props:[{name:"alignContentFlush",description:"Extend the contents section to be flush with the left edge",required:!1,type:{name:"boolean"}},{name:"message",description:"Accepts a string of content that will be rendered to the left of the actions",required:!1,type:{name:"string"}},{name:"saveAction",description:"Save or commit contextual save bar action with text defaulting to 'Save'",required:!1,type:{name:"ContextualSaveBarAction"}},{name:"discardAction",description:"Discard or cancel contextual save bar action with text defaulting to 'Discard'",required:!1,type:{name:"ContextualSaveBarCombinedActionProps"}},{name:"fullWidth",description:"Remove the normal max-width on the contextual save bar",required:!1,type:{name:"boolean"}}],slots:[{name:"contextControl"},{name:"secondaryMenu"}]};const qT="Polaris-Frame-Loading",RT="Polaris-Frame-Loading__Level";var Gr={Loading:qT,Level:RT};const HT=["aria-valuenow","aria-label"],Vu=C({setup(e){const n=xe("lang"),s=L(0),i=L(!1),r=p(()=>({transform:`scaleX(${Math.floor(s.value)/100})`}));pe(()=>{c()}),Be(()=>[i.value,s.value],()=>{c()});const c=()=>{s.value>=99||i.value||requestAnimationFrame(()=>{const f=Math.max((99-s.value)/10,1);i.value=!0,s.value=s.value+f})},m=()=>{i.value=!1};return(f,x)=>(l(),d("div",{class:u(a(Gr).Loading),"aria-valuenow":s.value,"aria-valuemin":0,"aria-valuemax":100,role:"progressbar","aria-label":a(n).Polaris.Loading.label},[w("div",{class:u(a(Gr).Level),style:Re(a(r)),onTransitionend:m},null,38)],10,HT))}});Vu.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const VT="Polaris-Frame-Toast",UT="Polaris-Frame-Toast__Action",jT="Polaris-Frame-Toast--error",WT="Polaris-Frame-Toast__CloseButton";var zn={Toast:VT,Action:UT,error:jT,CloseButton:WT};const Uu=C({props:{content:null,duration:null,error:{type:Boolean},action:null},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=5e3,i=1e4,r=L(),c=p(()=>O(zn.Toast,n.error&&zn.error));pe(()=>{let f=n.duration||s;n.action&&!n.duration?f=i:n.action&&n.duration&&n.duration<i&&console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it."),r.value=setTimeout(m,f)}),it(()=>{clearTimeout(r.value)});const m=()=>{o("dismiss")};return(f,x)=>(l(),T(a(ba),{"color-scheme":"dark"},{default:h(()=>[w("div",{class:u(a(c))},[S(a(tt),{keyCode:a(Qe).Escape,handler:m},null,8,["keyCode"]),le(j(e.content),1),g(f.$slots,"default"),e.action?(l(),d("div",{key:0,class:u(a(zn).Action)},[S(a(ne),{plain:"",monochrome:"",onClick:e.action.onAction},{default:h(()=>[le(j(e.action.content),1)]),_:1},8,["onClick"])],2)):_("",!0),w("button",{type:"button",class:u(a(zn).CloseButton),onClick:m},[S(a(ae),{source:a(Ol)},null,8,["source"])],2)],2)]),_:3}))}});Uu.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const zT="Polaris-Frame-ToastManager",GT="Polaris-Frame-ToastManager__ToastWrapper";var Va={ToastManager:zT,ToastWrapper:GT,"ToastWrapper-enter":"Polaris-Frame-ToastManager__ToastWrapper--enter","ToastWrapper-exit":"Polaris-Frame-ToastManager__ToastWrapper--exit","ToastWrapper-enter-done":"Polaris-Frame-ToastManager--toastWrapperEnterDone"};const ju=C({props:{toastMessages:null},setup(e){const o=e,n=400,s=L([]),i=L(!1),r=()=>{let b=0;o.toastMessages.forEach((A,k)=>{const B=s.value[k];!B||(b+=B.clientHeight,B.style.setProperty("--pc-toast-manager-translate-y-in",`-${b}px`),B.style.setProperty("--pc-toast-manager-translate-y-out",`${-b+150}px`))})},c=b=>{b.classList.add(v.enterDone)},m=b=>{b.classList.add(v.enter)},f=(b,A)=>{b.classList.remove(v.enter),b.classList.add(v.enterDone),setTimeout(A,n)},x=(b,A)=>{b.classList.remove(v.enterDone),b.classList.add(v.exit),setTimeout(A,n)};Be(()=>o.toastMessages,()=>{setTimeout(r,0)}),pe(()=>{i.value=!0});const v={enter:O(Va["ToastWrapper-enter"]),enterDone:O(Va["ToastWrapper-enter-done"]),exit:O(Va["ToastWrapper-exit"])};return(b,A)=>i.value?(l(),T(a(Xa),{key:0},{default:h(()=>[S(a(We),{event:"resize",handler:r}),w("div",{class:u(a(Va).ToastManager),"aria-live":"assertive"},[S(_m,{name:"custom-classes",onAfterEnter:c,onBeforeEnter:m,onEnter:f,onLeave:x},{default:h(()=>[e.toastMessages.length>0?(l(!0),d(X,{key:0},ue(e.toastMessages,(k,B)=>(l(),d("div",{key:k.id,ref_for:!0,ref:I=>{s.value[B]=I},class:u(a(Va).ToastWrapper)},[S(a(Uu),qe(ht(k)),null,16)],2))),128)):_("",!0)]),_:1})],2)]),_:1})):_("",!0)}});ju.__docgenInfo={exportName:"default",displayName:"ToastManager",description:"",tags:{},props:[{name:"toastMessages",required:!0,type:{name:"Array",elements:[{name:"ToastPropsWithID"}]}}]};function Vt(){const e=xe("mediaQueryContext",{});function o(){if(!e)throw new kl("No mediaQuery was provided.");return e}return{useMediaQuery:o}}const KT=["data-has-navigation"],XT=["href"],YT=["aria-label","hidden"],QT=["aria-hidden","aria-label","tabIndex"],JT=["data-has-global-ribbon"],Pt=C({props:{logo:null,offset:null,showMobileNavigation:{type:Boolean},skipToContentTarget:null},emits:["navigation-dismiss"],setup(e,{emit:o}){const n=e,s="AppFrameMain",i="AppFrameNav",r="AppFrameTopBar",c="AppFrameLoadingBar",m=400,f=300,x=se(),v=xe("lang"),b=L(!1),A=L(0),k=L(0),B=L([]),I=L(!1),P=L(null),$=L(null),{useMediaQuery:q}=Vt(),{isNavigationCollapsed:E}=q(),K=L(null),F=()=>{K.value&&(A.value=K.value.offsetHeight,Z())},W=p(()=>O(Ie.Navigation,n.showMobileNavigation&&Ie["Navigation-visible"])),D={enter:O(Ie["Navigation-enter"]),enterActive:O(Ie["Navigation-enterActive"]),enterDone:O(Ie["Navigation-enterActive"]),exit:O(Ie["Navigation-exit"]),exitActive:O(Ie["Navigation-exitActive"])},U=me=>{me.classList.add(D.enterDone)},te=me=>{me.classList.add(D.enter)},de=(me,ot)=>{me.classList.remove(D.enter),me.classList.add(D.enterDone),setTimeout(ot,f)},ce=me=>{me.classList.remove(D.enterActive),me.classList.add(D.exitActive)},we=(me,ot)=>{me.classList.add(D.exit),setTimeout(ot,f)},V=p(()=>E&&!n.showMobileNavigation),Y=p(()=>E&&n.showMobileNavigation),ie=Y.value?0:-1,ye=y({},Y.value&&{"aria-modal":!0,role:"dialog"}),fe=p(()=>O(Ie.Frame,x.navigation&&Ie.hasNav,x.topBar&&Ie.hasTopBar)),Ye=p(()=>O(Ie.Skip,b.value&&Ie.focused)),he=p(()=>n.skipToContentTarget?n.skipToContentTarget.id:s);pe(()=>{vt(),!x.globalRibbon&&(Z(),Te())}),Be(()=>x.globalRibbon,()=>{F(),Te()});const Te=()=>{Wr("--pc-frame-offset",n.offset||"0px")},Z=()=>{Wr("--pc-frame-global-ribbon-height",`${A.value}px`)},ve=me=>{const ot=B.value.find(({id:Mt})=>Mt===me.id)!=null;B.value=ot?B.value:[...B.value,me]},be=({id:me})=>{B.value=B.value.filter(({id:ot})=>me!==ot)},Ae=me=>{P.value=y({},me),I.value||(I.value=!0)},mt=()=>{I.value=!1,setTimeout(()=>{P.value=null},m)},Ue=()=>{k.value=k.value+1},lo=()=>{k.value=Math.max(0,k.value-1)},vt=()=>{x.globalRibbon&&F()},jt=()=>{b.value=!0},Oa=()=>{b.value=!1},z=me=>{n.skipToContentTarget&&(n.skipToContentTarget.focus(),me.preventDefault())},_e=()=>{o("navigation-dismiss")},Oe=me=>{const{key:ot}=me;E&&n.showMobileNavigation&&ot==="Escape"&&_e()};return $e("frameContext",{logo:n.logo,showToast:ve,hideToast:be,startLoading:Ue,stopLoading:lo,setContextualSaveBar:Ae,removeContextualSaveBar:mt}),(me,ot)=>(l(),d("div",re({class:a(fe)},a(Qn).props,{"data-has-navigation":a(x).navigation?!0:void 0}),[w("div",{class:u(a(Ye))},[w("a",{href:`#${a(he)}`,onFocus:jt,onBlur:Oa,onClick:z},j(a(v).Polaris.Frame.skipToContent),41,XT)],2),a(x).topBar?(l(),d("div",re({key:0,class:a(Ie).TopBar},y(y({},a(Qn).props),a(Tl).props),{id:r}),[g(me.$slots,"topBar")],16)):_("",!0),a(x).navigation?(l(),T(a(is),{key:1,trapping:a(Y)},{default:h(()=>[S(Pm,{name:"custom-classes",onAfterEnter:U,onBeforeEnter:te,onEnter:de,onBeforeLeave:ce,onLeave:we},{default:h(()=>[e.showMobileNavigation||!a(E)?(l(),d("div",re({key:0},ye,{key:"NavContent",id:i,"aria-label":a(v).Polaris.Frame.navigationLabel,class:a(W),ref_key:"navigationRef",ref:$,onKeydown:Oe,hidden:a(V)}),[g(me.$slots,"navigation"),w("button",{type:"button",class:u(a(Ie).NavigationDismiss),onClick:_e,"aria-hidden":a(V)||!a(E)&&!e.showMobileNavigation,"aria-label":a(v).Polaris.Frame.Navigation.closeMobileNavigationLabel,tabIndex:a(ie)},[S(a(ae),{source:a(Ol)},null,8,["source"])],10,QT)],16,YT)):_("",!0)]),_:3})]),_:3},8,["trapping"])):_("",!0),S(a(Ou),{in:I.value,class:u(a(Ie).ContextualSaveBar),type:"fade"},{default:h(()=>[P.value?(l(),T(a(Hu),qe(re({key:0},P.value)),ze({_:2},[P.value.contextControl?{name:"contextControl",fn:h(()=>[(l(!0),d(X,null,ue(P.value.contextControl,(Mt,zi)=>(l(),T(Pe(Mt),{key:zi}))),128))])}:void 0,P.value.secondaryMenu?{name:"secondaryMenu",fn:h(()=>[(l(!0),d(X,null,ue(P.value.secondaryMenu,(Mt,zi)=>(l(),T(Pe(Mt),{key:zi}))),128))])}:void 0]),1040)):_("",!0)]),_:1},8,["in","class"]),k.value>0?(l(),d("div",{key:2,class:u(a(Ie).LoadingBar),id:c},[S(a(Vu))],2)):_("",!0),e.showMobileNavigation&&a(E)?(l(),T(a(Pl),{key:3,belowNavigation:"",onClick:_e,onTouchstart:_e})):_("",!0),w("main",{class:u(a(Ie).Main),id:s,"data-has-global-ribbon":!!a(x).globalRibbon},[w("div",{class:u(a(Ie).Content)},[g(me.$slots,"default")],2)],10,JT),S(a(ju),{"toast-messages":B.value},null,8,["toast-messages"]),a(x).globalRibbon?(l(),d("div",{key:4,class:u(a(Ie).GlobalRibbonContainer),ref_key:"globalRibbonContainerRef",ref:K},[g(me.$slots,"globalRibbon")],2)):_("",!0),S(a(We),{event:"resize",handler:vt})],16,KT))}});Pt.__docgenInfo={exportName:"default",displayName:"Frame",description:"",tags:{},props:[{name:"logo",description:"Sets the logo for the TopBar, Navigation, and ContextualSaveBar components",required:!1,type:{name:"Logo"}},{name:"offset",description:"A horizontal offset that pushes the frame to the right, leaving empty space on the left",required:!1,type:{name:"string"}},{name:"showMobileNavigation",description:"A boolean property indicating whether the mobile navigation is currently visible",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"skipToContentTarget",description:"Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link",required:!1,type:{name:"HTMLAnchorElement"}}],events:[{name:"navigation-dismiss"}],slots:[{name:"topBar"},{name:"navigation"},{name:"default"},{name:"globalRibbon"}]};const ZT="Polaris-Heading";var eS={Heading:ZT};const Ot=C({props:{element:{default:"h2"},id:null},setup(e){return(o,n)=>(l(),T(Pe(e.element),{id:e.id,class:u(a(eS).Heading)},{default:h(()=>[g(o.$slots,"default")]),_:3},8,["id","class"]))}});Ot.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the heading",tags:{default:[{description:"'h2'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h2'"}},{name:"id",description:`A unique identifier for the heading,
used for reference in anchor links`,required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const tS="Polaris-Indicator",oS="Polaris-Indicator--pulseIndicator",aS="Polaris-Indicator--bounce",nS="Polaris-Indicator--pulse";var Kr={Indicator:tS,pulseIndicator:oS,bounce:aS,pulse:nS};const bl=C({props:{pulse:{type:Boolean,default:!1}},setup(e){const o=e,n=p(()=>O(Kr.Indicator,o.pulse&&Kr.pulseIndicator));return(s,i)=>(l(),d("span",{class:u(a(n))},null,2))}});bl.__docgenInfo={exportName:"default",displayName:"Indicator",description:"",tags:{},props:[{name:"pulse",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}]};const sS="Polaris-KeyboardKey";var iS={KeyboardKey:sS};const Ss=C({setup(e){const o=se(),n=p(()=>{const s=o.default&&o.default()[0].children?o.default()[0].children:"";return typeof s=="string"?s.length>1?s.toLowerCase():s.toUpperCase():s});return(s,i)=>(l(),d("kbd",{class:u(a(iS).KeyboardKey)},j(a(n)),3))}});Ss.__docgenInfo={exportName:"default",displayName:"KeyboardKey",description:"",tags:{}};const lS="Polaris-Layout",rS="Polaris-Layout__Section",cS="Polaris-Layout__AnnotatedSection",uS="Polaris-Layout__AnnotationWrapper",dS="Polaris-Layout__AnnotationContent",pS="Polaris-Layout__Annotation",mS="Polaris-Layout__AnnotationDescription";var ut={Layout:lS,Section:rS,"Section-secondary":"Polaris-Layout__Section--secondary","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:cS,AnnotationWrapper:uS,AnnotationContent:dS,Annotation:pS,AnnotationDescription:mS};const wt=C({props:{secondary:{type:Boolean},fullWidth:{type:Boolean},oneHalf:{type:Boolean},oneThird:{type:Boolean}},setup(e){const o=e,n=p(()=>O(ut.Section,o.secondary&&ut["Section-secondary"],o.fullWidth&&ut["Section-fullWidth"],o.oneHalf&&ut["Section-oneHalf"],o.oneThird&&ut["Section-oneThird"]));return(s,i)=>(l(),d("div",{class:u(a(n))},[g(s.$slots,"default")],2))}});wt.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"secondary",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"oneHalf",required:!1,type:{name:"boolean"}},{name:"oneThird",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const yS="Polaris-TextContainer",hS="Polaris-TextContainer--spacingTight",gS="Polaris-TextContainer--spacingLoose";var Xr={TextContainer:yS,spacingTight:hS,spacingLoose:gS};const dt=C({props:{spacing:null},setup(e){const o=e,n=p(()=>o.spacing&&Xr[ke("spacing",o.spacing)]),s=p(()=>O(Xr.TextContainer,n.value));return(i,r)=>(l(),d("div",{class:u(a(s))},[g(i.$slots,"default")],2))}});dt.__docgenInfo={exportName:"default",displayName:"TextContainer",description:"",tags:{},props:[{name:"spacing",description:"The amount of vertical spacing children will get between them",required:!1,type:{name:"Spacing"}}],slots:[{name:"default"}]};const Ut=C({props:{id:null},setup(e){const o=se(),n=p(()=>{var i;return(i=o.description)==null?void 0:i.call(o)}),s=p(()=>Boolean(n.value&&(n.value.length>=2||n.value[0]&&n.value[0].type.toString()!=="Symbol(Text)")));return(i,r)=>(l(),d("div",{class:u(a(ut).AnnotatedSection)},[w("div",{class:u(a(ut).AnnotationWrapper)},[w("div",{class:u(a(ut).Annotation)},[S(a(dt),null,{default:h(()=>[S(a(Ot),{id:e.id},{default:h(()=>[g(i.$slots,"title")]),_:3},8,["id"]),a(s)?g(i.$slots,"description",{key:1}):(l(),d("div",{key:0,class:u(a(ut).AnnotationDescription)},[g(i.$slots,"description")],2))]),_:3})],2),w("div",{class:u(a(ut).AnnotationContent)},[g(i.$slots,"default")],2)],2)],2))}});Ut.__docgenInfo={exportName:"default",displayName:"AnnotatedSection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"description"},{name:"default"}]};const ft=C({props:{sectioned:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:u(a(ut).Layout)},[e.sectioned?(l(),T(a(wt),{key:0},{default:h(()=>[g(o.$slots,"default")]),_:3})):g(o.$slots,"default",{key:1})],2))}});ft.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"sectioned",description:"Automatically adds sections to layout",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const bS="Polaris-Link",fS="Polaris-Link__IconLockup",vS="Polaris-Link__IconLayout",xS="Polaris-Link--monochrome",TS="Polaris-Link--removeUnderline";var Kt={Link:bS,IconLockup:fS,IconLayout:vS,monochrome:xS,removeUnderline:TS};const SS=["id","aria-label"],Ta=C({props:{id:null,url:null,to:null,external:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},accessibilityLabel:null},setup(e){const o=e,n=p(()=>O(Kt.Link,o.monochrome&&Kt.monochrome,o.removeUnderline&&Kt.removeUnderline));return(s,i)=>e.url||e.to?(l(),T(a(gt),{key:0,id:e.id,to:e.to,url:e.url,class:u(a(n)),external:e.external,"aria-label":e.accessibilityLabel},{default:h(()=>[g(s.$slots,"default"),w("span",{class:u(a(Kt).IconLockup)},[w("span",{class:u(a(Kt).IconLayout)},[S(a(ae),{source:a(Pr)},null,8,["source"])],2)],2)]),_:3},8,["id","to","url","class","external","aria-label"])):(l(),d("button",{key:1,id:e.id,type:"button",class:u(a(n)),"aria-label":e.accessibilityLabel,onClick:i[0]||(i[0]=r=>s.$emit("click"))},[g(s.$slots,"default"),w("span",{class:u(a(Kt).IconLockup)},[w("span",{class:u(a(Kt).IconLayout)},[S(a(ae),{source:a(Pr)},null,8,["source"])],2)],2)],10,SS))}});Ta.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"id",description:"ID for the link",required:!1,type:{name:"string"}},{name:"url",description:"The url to link to",required:!1,type:{name:"string"}},{name:"to",description:"Using with vue-router",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"external",description:"Makes the link open in a new tab",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes the link color the same as the current text color and adds an underline",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes text decoration underline to the link",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const AS="Polaris-List",CS="Polaris-List--typeNumber",kS="Polaris-List__Item";var fl={List:AS,typeNumber:CS,Item:kS};const Sa=C({props:{type:{default:"bullet"}},setup(e){const o=e,n=p(()=>{const i=ke("type",o.type);return O(fl.List,o.type&&fl[i])}),s=o.type==="bullet"?"ul":"ol";return(i,r)=>(l(),T(Pe(a(s)),{class:u(a(n))},{default:h(()=>[g(i.$slots,"default")]),_:3},8,["class"]))}});Sa.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"type",description:"Type of list to display",tags:{values:[{description:"bullet | number",title:"values"}],default:[{description:"bullet",title:"default"}]},required:!1,type:{name:"Type"},defaultValue:{func:!1,value:"'bullet'"}}],slots:[{name:"default"}]};const As=C({setup(e){return(o,n)=>(l(),d("li",{class:u(a(fl).Item)},[g(o.$slots,"default")],2))}});As.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const LS="Polaris-Listbox";var _S={Listbox:LS};const PS={"aria-live":"polite"},wS=["aria-label","aria-labelledby","aria-busy","id"],lt=C({props:{enableKeyboardControl:{type:Boolean},accessibilityLabel:null},emits:["select"],setup(e,{emit:o}){const n=e,s="[data-listbox-option]",i="data-listbox-option-value",r="data-focused",c="aria-activedescendant";$e("withinListboxContext",!0);const m=xe("comboboxListboxContext",{}),{setActiveOptionId:f,setListboxId:x,listboxId:v,textFieldLabelId:b,onOptionSelected:A,onKeyToBottom:k,textFieldFocused:B}=m,{useUniqueId:I}=Ne(),P=I("Listbox"),$=p(()=>Boolean(f)),q=p(()=>v||""),E=L(null),K=L(null),F=L(""),W=L(n.enableKeyboardControl);let D;Be([()=>P,()=>q],()=>{x&&!v&&x(P)}),Be(()=>D,()=>{f&&f(D.domId)});const U=()=>{var ve;const Z=(ve=E.value)==null?void 0:ve.querySelectorAll(s);return Z?[...new Set(Array.from(Z))]:[]},te=(Z,ve)=>{eo(()=>{if(K.value){const{element:be}=Z,Ae=ve&&wm(be,tu.selector)||be;Mm(Ae,K.value)}},15)},de=Z=>{var ve;if(D&&D.element&&D.element.removeAttribute(r),Z){if(Z.element.setAttribute(r,"true"),(ve=E.value)==null||ve.setAttribute(c,Z.domId),K.value){const be=U().findIndex(Ae=>Ae.id===Z.element.id)===0;te(Z,be)}D=Z}},ce=Z=>{const ve=Z==="up",be=U();let Ae=D.element,mt=-1;for(;mt++<be.length;){let Ue;if(Ae){const lo=Ae==null?void 0:Ae.id,vt=be.findIndex(Oa=>Oa.id===lo);let jt=ve?-1:1;vt===0&&ve?jt=be.length-1:vt===be.length-1&&!ve&&(jt=-(be.length-1)),Ue=vt+jt,Ae=be[Ue]}else Ue=ve?be.length-1:0,Ae=be[Ue];if((Ae==null?void 0:Ae.getAttribute("aria-disabled"))!=="true")return Ue===be.length-1&&k&&k(),Ae}return null},we=(Z,ve)=>{ve.preventDefault();const be=ce(Z);if(!be)return;const Ae={domId:be.id,value:be.getAttribute(i)||"",element:be,disabled:be.getAttribute("aria-disabled")==="true"};de(Ae)},V=Z=>{we("down",Z)},Y=Z=>{we("up",Z)},ie=Z=>{o("select",Z)},ye=Z=>{de(Z),A&&A(),ie(Z.value)};$e("listboxContext",{onOptionSelect:ye,setLoading:Z=>{F.value=Z}});const Ye=Z=>{Z.preventDefault(),Z.stopPropagation(),ye(D)},he=()=>{n.enableKeyboardControl||(W.value=!0)},Te=Z=>{Z.stopPropagation(),n.enableKeyboardControl&&de(),!(n.enableKeyboardControl||$)&&(W.value=!1)};return pe(()=>{E.value&&(K.value=E.value.closest(ls.selector))}),(Z,ve)=>(l(),d(X,null,[W.value||a(B)?(l(),d(X,{key:0},[S(a(tt),{keyEvent:"keydown",keyCode:a(Qe).ArrowDown,handler:V},null,8,["keyCode"]),S(a(tt),{keyEvent:"keydown",keyCode:a(Qe).ArrowUp,handler:Y},null,8,["keyCode"]),S(a(tt),{keyEvent:"keydown",keyCode:a(Qe).Enter,handler:Ye},null,8,["keyCode"])],64)):_("",!0),S(a(Ge),null,{default:h(()=>[w("div",PS,j(F.value?F.value:null),1)]),_:1}),Z.$slots.default?(l(),d("ul",{key:1,tabindex:"0",role:"listbox",class:u(a(O)(a(_S).Listbox)),"aria-label":a($)?void 0:e.accessibilityLabel,"aria-labelledby":a(b)||void 0,"aria-busy":Boolean(F.value),id:a(P),onFocus:he,onBlur:Te,ref_key:"listboxRef",ref:E},[g(Z.$slots,"default")],42,wS)):_("",!0)],64))}});lt.__docgenInfo={exportName:"default",displayName:"Listbox",description:"",tags:{},props:[{name:"enableKeyboardControl",description:"Explicitly enable keyboard control",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["string"]}}],slots:[{name:"default"}]};const MS="Polaris-Listbox-Action",NS="Polaris-Listbox-Action__ActionDivider",BS="Polaris-Listbox-Action__Icon";var el={Action:MS,ActionDivider:NS,Icon:BS};const IS="Polaris-Listbox-Option",DS="Polaris-Listbox-Option--divider";var Yr={Option:IS,divider:DS};const $S="Polaris-Listbox-TextOption",ES="Polaris-Listbox-TextOption--allowMultiple",FS="Polaris-Listbox-TextOption--isAction",OS="Polaris-Listbox-TextOption--disabled",qS="Polaris-Listbox-TextOption--selected",RS="Polaris-Listbox-TextOption__Content",HS="Polaris-Listbox-TextOption__Checkbox";var Xt={TextOption:$S,allowMultiple:ES,isAction:FS,disabled:OS,selected:qS,Content:RS,Checkbox:HS};const ss=C({props:{selected:{type:Boolean},disabled:{type:Boolean}},setup(e){const o=e,n=xe("comboboxListboxOptionContext",{}),s=xe("actionContext",!1),i=p(()=>Boolean(n.allowMultiple)),r=p(()=>s),c=p(()=>O(Xt.TextOption,o.selected&&!i.value&&Xt.selected,o.disabled&&Xt.disabled,i.value&&Xt.allowMultiple,r.value&&Xt.isAction));return(m,f)=>(l(),d("div",{class:u(a(c))},[w("div",{class:u(a(Xt).Content)},[a(i)&&!a(r)?(l(),d("div",{key:0,class:u(a(Xt).Checkbox)},[S(a(fa),{checked:e.selected},{label:h(()=>[g(m.$slots,"default")]),_:3},8,["checked"])],2)):g(m.$slots,"default",{key:1})],2)],2))}});ss.__docgenInfo={exportName:"default",displayName:"TextOption",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const VS=["id","role","data-within-section","data-listbox-option-value","data-listbox-option-destructive","aria-disabled","aria-label","aria-selected"],pt=C({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean}},setup(e){const o=e,n=xe("mappedActionContext",{}),s=xe("sectionContext",""),i=xe("listboxContext",{onOptionSelect(D){},setLoading(D){}}),{role:r,url:c,external:m,onAction:f,destructive:x}=n,{onOptionSelect:v}=i,b=se(),A=p(()=>{var D;return(D=b.default)==null?void 0:D.call(b)}),k=L(null),{useUniqueId:B}=Ne(),I=B("ListboxOption"),P=p(()=>Boolean(s)),$={[Nm.attribute]:P.value},q=p(()=>Boolean(A.value&&(A.value.length>=2||A.value[0]&&A.value[0].type.toString()!=="Symbol(Text)"))),E=p(()=>r||"option"),K=p(()=>O(Yr.Option,o.divider&&Yr.divider)),F=D=>{if(D.preventDefault(),!o.disabled&&(f&&f(),k.value&&!f)){const U={domId:I,value:o.value,element:k.value,disabled:o.disabled||!1};v(U)}},W=D=>{D.preventDefault()};return(D,U)=>(l(),d("li",re($,{id:a(I),class:a(K),ref_key:"listItemRef",ref:k,role:a(E),"data-within-section":a(P),"data-listbox-option-value":e.value,"data-listbox-option-destructive":a(x),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,"aria-selected":e.selected,onClick:F,onMousedown:W,tabindex:"-1","data-listbox-option":""}),[a(c)?(l(),T(a(gt),{key:0,url:a(c),external:a(m)},{default:h(()=>[a(q)?g(D.$slots,"default",{key:1}):(l(),T(a(ss),{key:0,selected:e.selected,disabled:e.disabled},{default:h(()=>[g(D.$slots,"default")]),_:3},8,["selected","disabled"]))]),_:3},8,["url","external"])):(l(),d(X,{key:1},[a(q)?g(D.$slots,"default",{key:1}):(l(),T(a(ss),{key:0,selected:e.selected,disabled:e.disabled},{default:h(()=>[g(D.$slots,"default")]),_:3},8,["selected","disabled"]))],64))],16,VS))}});pt.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Cs=C({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean},icon:null},setup(e){const o=e;$e("actionContext",!0);const n=p(()=>O(el.Action,o.divider&&el.ActionDivider));return(s,i)=>(l(),T(a(pt),{value:e.value,selected:e.selected,disabled:e.disabled,divider:e.divider},{default:h(()=>[w("div",{class:u(a(n))},[S(a(ss),{selected:e.selected,disabled:e.disabled},{default:h(()=>[e.icon?(l(),d("div",{key:0,class:u(a(el).Icon)},[S(a(ae),{color:"subdued",source:e.icon},null,8,["source"])],2)):_("",!0),g(s.$slots,"default")]),_:3},8,["selected","disabled"])],2)]),_:3},8,["value","selected","disabled","divider"]))}});Cs.__docgenInfo={exportName:"default",displayName:"Action",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const US="Polaris-Listbox-Header";var jS={Header:US};const WS=["id"],zS=C({setup(e){const o=xe("sectionContext",""),n=se(),s=p(()=>{var r;return(r=n.default)==null?void 0:r.call(n)}),i=p(()=>Boolean(s.value&&(s.value.length>=2||s.value[0]&&s.value[0].type.toString()!=="Symbol(Text)")));return(r,c)=>(l(),d("div",{id:a(o),"aria-hidden":""},[a(i)?g(r.$slots,"default",{key:1}):(l(),d("div",{key:0,class:u(a(jS).Header)},[g(r.$slots,"default")],2))],8,WS))}});zS.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},slots:[{name:"default"}]};const GS="Polaris-Listbox-Loading__ListItem",KS="Polaris-Listbox-Loading";var Qr={ListItem:GS,Loading:KS};const en=C({props:{accessibilityLabel:null},setup(e){const o=e,n=xe("listboxContext",{onOptionSelect(i){},setLoading(i){}}),{setLoading:s}=n;return Be(()=>o.accessibilityLabel,()=>(s(o.accessibilityLabel),()=>s(void 0))),(i,r)=>(l(),d("li",{class:u(a(Qr).ListItem),role:"presentation"},[i.$slots.default?g(i.$slots,"default",{key:0}):(l(),d("div",{key:1,class:u(a(Qr).Loading)},[S(a(Ft),{size:"small",accessibilityLabel:e.accessibilityLabel},null,8,["accessibilityLabel"])],2))],2))}});en.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"accessibilityLabel",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const XS="Polaris-Listbox-Section__SectionGroup",YS="Polaris-Listbox-Section--noDivider";var Jr={SectionGroup:XS,noDivider:YS};const QS=["aria-labelledby"],JS=C({props:{divider:{type:Boolean}},setup(e){const o=e,{useUniqueId:n}=Ne(),s=n("ListboxSection");$e("sectionContext",s);const i=p(()=>O(Jr.SectionGroup,!o.divider&&Jr.noDivider));return(r,c)=>(l(),d("li",re({role:"presentation"},a(tu)),[g(r.$slots,"title"),w("ul",{role:"group","aria-labelledby":a(s),class:u(a(i))},[g(r.$slots,"default")],10,QS)],16))}});JS.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const tn=C({setup(e){const{useFrame:o}=xa(),{startLoading:n,stopLoading:s}=o();return pe(()=>{n()}),it(()=>{s()}),(i,r)=>null}});tn.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{}};const ZS="Polaris-MessageIndicator__MessageIndicatorWrapper",eA="Polaris-MessageIndicator";var Zr={MessageIndicatorWrapper:ZS,MessageIndicator:eA};const Wu=C({props:{active:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:u(a(Zr).MessageIndicatorWrapper)},[e.active?(l(),d("div",{key:0,class:u(a(Zr).MessageIndicator)},null,2)):_("",!0),g(o.$slots,"default")],2))}});Wu.__docgenInfo={exportName:"default",displayName:"MessageIndicator",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const tA="Polaris-Modal__BodyWrapper",oA="Polaris-Modal__Body",aA="Polaris-Modal__IFrame",nA="Polaris-Modal__Spinner";var uo={BodyWrapper:tA,Body:oA,IFrame:aA,Spinner:nA};const sA="Polaris-Modal-Dialog__Container",iA="Polaris-Modal-Dialog",lA="Polaris-Modal-Dialog__Modal",rA="Polaris-Modal-Dialog--limitHeight",cA="Polaris-Modal-Dialog--sizeSmall",uA="Polaris-Modal-Dialog--sizeLarge",dA="Polaris-Modal-Dialog--animateFadeUp",pA="Polaris-Modal-Dialog--entering",mA="Polaris-Modal-Dialog--exiting",yA="Polaris-Modal-Dialog--exited",hA="Polaris-Modal-Dialog--entered";var It={Container:sA,Dialog:iA,Modal:lA,limitHeight:rA,sizeSmall:cA,sizeLarge:uA,animateFadeUp:dA,entering:pA,exiting:mA,exited:yA,entered:hA};const is=C({props:{trapping:{type:Boolean,default:!0}},setup(e){const o=e,{canSafelyFocus:n}=Wy(o),s=L(null),i=L(!0);Be([()=>o.trapping],()=>{i.value=n.value&&!(s.value&&s.value.contains(document.activeElement))?!o.trapping:!0});const r=m=>{!o.trapping||!s.value||s.value.contains(document.activeElement)||m.target instanceof Element&&m.target.matches(`${Kc.selector} *`)||n.value&&m.target instanceof HTMLElement&&s.value!==m.target&&s.value.contains(m.target)&&cs(s.value)},c=m=>{if(!o.trapping||!s.value)return;const f=uu(s.value),x=du(s.value);m.target===x&&!m.shiftKey&&(m.preventDefault(),gy(s.value)),m.target===f&&m.shiftKey&&(m.preventDefault(),by(s.value))};return(m,f)=>(l(),d("div",{ref_key:"wrapperNode",ref:s},[S(a(Fu),{disabled:i.value,root:s.value},null,8,["disabled","root"]),S(a(We),{event:"focusin",handler:r}),S(a(tt),{keyCode:a(Qe).Tab,keyEvent:"keydown",handler:c},null,8,["keyCode"]),g(m.$slots,"default")],512))}});is.__docgenInfo={exportName:"default",displayName:"TrapFocus",description:"",tags:{},props:[{name:"trapping",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}]};const gA=["aria-labelledby"],bA=["aria-labelledby"],zu=C({props:{labelledBy:null,instant:{type:Boolean},limitHeight:{type:Boolean},large:{type:Boolean},small:{type:Boolean}},emits:["close","entered","exited"],setup(e,{emit:o}){const n=e,s=L(null),i=p(()=>O(It.Modal,n.small&&It.sizeSmall,n.large&&It.sizeLarge,n.limitHeight&&It.limitHeight));return pe(()=>{s.value&&s.value.contains(document.activeElement)&&cs(s.value),o("entered")}),it(()=>{o("exited")}),(r,c)=>e.instant?(l(),d("div",{key:0,class:u(a(It).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref_key:"dialogNode",ref:s},[S(a(is),null,{default:h(()=>[w("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:u(a(It).Dialog)},[w("div",{class:u(a(i))},[S(a(tt),{keyCode:a(Qe).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),g(r.$slots,"default")],2)],10,gA)]),_:3})],2)):(l(),d("div",{key:1,class:u(a(It).Container),"data-polaris-layer":"","data-polaris-overlay":"",ref:"dialog"},[S(a(is),null,{default:h(()=>[w("div",{role:"dialog","aria-modal":"","aria-labelledby":e.labelledBy,tabindex:"-1",class:u(a(It).Dialog)},[w("div",{class:u(a(i))},[S(a(tt),{keyCode:a(Qe).Escape,handler:()=>r.$emit("close")},null,8,["keyCode","handler"]),g(r.$slots,"default")],2)],10,bA)]),_:3})],2))}});zu.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"labelledBy",required:!1,type:{name:"string"}},{name:"instant",required:!1,type:{name:"boolean"}},{name:"limitHeight",required:!1,type:{name:"boolean"}},{name:"large",required:!1,type:{name:"boolean"}},{name:"small",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"entered"},{name:"exited"}],slots:[{name:"default"}]};const fA="Polaris-Modal-Header",vA="Polaris-Modal-Header--titleHidden",xA="Polaris-Modal-Header__Title";var tl={Header:fA,titleHidden:vA,Title:xA};const TA="Polaris-Modal-CloseButton";var SA={CloseButton:TA};const Gu=C({emits:["click"],setup(e,{emit:o}){return(n,s)=>(l(),d("button",{class:u(a(SA).CloseButton),"aria-label":"Close",onClick:s[0]||(s[0]=i=>o("click"))},[S(a(ae),{source:a(Ol),color:"base"},null,8,["source"])],2))}});Gu.__docgenInfo={exportName:"default",displayName:"CloseButton",description:"",tags:{},events:[{name:"click"}]};const AA=["id"],Ku=C({props:{id:null,titleHidden:{type:Boolean}},emits:["close"],setup(e,{emit:o}){const n=e,s=se(),i=p(()=>n.titleHidden||!s.default?tl.titleHidden:tl.Header);return(r,c)=>(l(),d("div",{class:u(a(i))},[w("div",{id:e.id,class:u(a(tl).Title)},[S(a(Za),{element:"h2",size:"small"},{default:h(()=>[g(r.$slots,"default")]),_:3})],10,AA),S(a(Gu),{onClick:c[0]||(c[0]=m=>o("close"))})],2))}});Ku.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"titleHidden",required:!1,type:{name:"boolean"}}],events:[{name:"close"}],slots:[{name:"default"}]};const CA="Polaris-Modal-Footer",kA="Polaris-Modal-Footer__FooterContent";var ec={Footer:CA,FooterContent:kA};const LA="Polaris-Stack",_A="Polaris-Stack__Item",PA="Polaris-Stack--noWrap",wA="Polaris-Stack--spacingNone",MA="Polaris-Stack--spacingExtraTight",NA="Polaris-Stack--spacingTight",BA="Polaris-Stack--spacingBaseTight",IA="Polaris-Stack--spacingLoose",DA="Polaris-Stack--spacingExtraLoose",$A="Polaris-Stack--distributionLeading",EA="Polaris-Stack--distributionTrailing",FA="Polaris-Stack--distributionCenter",OA="Polaris-Stack--distributionEqualSpacing",qA="Polaris-Stack--distributionFill",RA="Polaris-Stack--distributionFillEvenly",HA="Polaris-Stack--alignmentLeading",VA="Polaris-Stack--alignmentTrailing",UA="Polaris-Stack--alignmentCenter",jA="Polaris-Stack--alignmentFill",WA="Polaris-Stack--alignmentBaseline",zA="Polaris-Stack--vertical";var Dt={Stack:LA,Item:_A,noWrap:PA,spacingNone:wA,spacingExtraTight:MA,spacingTight:NA,spacingBaseTight:BA,spacingLoose:IA,spacingExtraLoose:DA,distributionLeading:$A,distributionTrailing:EA,distributionCenter:FA,distributionEqualSpacing:OA,distributionFill:qA,distributionFillEvenly:RA,alignmentLeading:HA,alignmentTrailing:VA,alignmentCenter:UA,alignmentFill:jA,alignmentBaseline:WA,vertical:zA,"Item-fill":"Polaris-Stack__Item--fill"};const st=C({props:{fill:{type:Boolean,default:!1}},setup(e){const o=e,n=p(()=>O(Dt.Item,o.fill&&Dt["Item-fill"]));return(s,i)=>(l(),d("div",{class:u(a(n))},[g(s.$slots,"default")],2))}});st.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"fill",description:"Fill the remaining horizontal space in the stack with the item",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const Ve=C({props:{wrap:{type:Boolean,default:!0},vertical:{type:Boolean},spacing:null,alignment:null,distribution:null,noItemWrap:{type:Boolean,default:!1}},setup(e){const o=e,n=se(),s=p(()=>{const i=o.spacing&&ke("spacing",o.spacing),r=o.distribution&&ke("distribution",o.distribution),c=o.alignment&&ke("alignment",o.alignment);return O(Dt.Stack,o.vertical&&Dt.vertical,i&&Dt[i],r&&Dt[r],c&&Dt[c],o.wrap===!1&&Dt.noWrap)});return(i,r)=>(l(),d("div",{class:u(a(s))},[!e.noItemWrap&&a(n).default?(l(!0),d(X,{key:0},ue(a(n).default(),(c,m)=>(l(),T(a(st),{key:m},{default:h(()=>[(l(),T(Pe(c)))]),_:2},1024))),128)):g(i.$slots,"default",{key:1})],2))}});Ve.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"wrap",description:"Wrap stack elements to additional rows as needed on small screens (Defaults to true)",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"vertical",description:"Stack the elements vertically",required:!1,type:{name:"boolean"}},{name:"spacing",description:"Adjust spacing between elements",required:!1,type:{name:"Spacing"}},{name:"alignment",description:"Adjust vertical alignment of elements",required:!1,type:{name:"Alignment"}},{name:"distribution",description:"Adjust horizontal alignment of elements",required:!1,type:{name:"Distribution"}},{name:"noItemWrap",description:"No wrap all stack elements with StackItem",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const Xu=C({props:{primaryAction:null,secondaryActions:null},setup(e){return(o,n)=>(l(),d("div",{class:u(a(ec).Footer)},[w("div",{class:u(a(ec).FooterContent)},[S(a(Ve),{alignment:"center","no-item-wrap":""},{default:h(()=>[S(a(st),{fill:!0},{default:h(()=>[g(o.$slots,"default")]),_:3}),e.primaryAction||e.secondaryActions?(l(),T(a(st),{key:0},{default:h(()=>[S(a(Ke),null,{default:h(()=>[e.secondaryActions?(l(!0),d(X,{key:0},ue(e.secondaryActions,(s,i)=>(l(),T(a(nt),{key:i,action:s},null,8,["action"]))),128)):_("",!0),S(a(nt),{action:e.primaryAction,overrides:{primary:!0}},null,8,["action"])]),_:1})]),_:1})):_("",!0)]),_:3})],2)],2))}});Xu.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"primaryAction",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],slots:[{name:"default"}]};const GA="Polaris-Modal-Section",KA="Polaris-Modal-Section--subdued",XA="Polaris-Modal-Section--flush";var ol={Section:GA,subdued:KA,flush:XA};const ha=C({props:{flush:{type:Boolean},subdued:{type:Boolean}},setup(e){const o=e,n=p(()=>O(ol.Section,o.flush&&ol.flush,o.subdued&&ol.subdued));return(s,i)=>(l(),d("section",{class:u(a(n))},[g(s.$slots,"default")],2))}});ha.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"flush",required:!1,type:{name:"boolean"}},{name:"subdued",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const YA=["name","src"],io=C({props:{open:{type:Boolean},src:null,iFrameName:null,titleHidden:{type:Boolean},instant:{type:Boolean},sectioned:{type:Boolean},large:{type:Boolean},small:{type:Boolean},limitHeight:{type:Boolean},loading:{type:Boolean},noScroll:{type:Boolean},primaryAction:null,secondaryActions:null},emits:["iframe-load","transition-end","scrolled-to-bottom","close"],setup(e,{emit:o}){const i=se(),r=L(null),{useUniqueId:c}=Ne(),m=c("modal-header"),f=L(200),x=L(!1),v=k=>{const B=k.target;if(B&&B.contentWindow)try{f.value=B.contentWindow.document.body.scrollHeight}catch{f.value=400}o("iframe-load",k)},b=()=>{o("transition-end")},A=()=>{f.value=200;const k=r.value;k&&requestAnimationFrame(()=>cs(k))};return pe(()=>{x.value=!0}),(k,B)=>(l(),d("div",null,[a(i).activator?(l(),d("div",{key:0,ref_key:"activatorNode",ref:r},[g(k.$slots,"activator")],512)):_("",!0),x.value&&e.open?(l(),T(a(Xa),{key:1,idPrefix:"modal"},{default:h(()=>[S(a(zu),{instant:e.instant,labelledBy:a(m),large:e.large,small:e.small,limitHeight:e.limitHeight,onClose:B[2]||(B[2]=I=>o("close")),onEntered:b,onExited:A},{default:h(()=>[S(a(Ku),{titleHidden:e.titleHidden,id:a(m),onClose:B[0]||(B[0]=I=>o("close")),key:"header"},{default:h(()=>[g(k.$slots,"title")]),_:3},8,["titleHidden","id"]),w("div",{class:u(a(uo).BodyWrapper),key:"body"},[e.src?(l(),d("iframe",{key:0,name:e.iFrameName,title:"body markup",src:e.src,class:u(a(uo).IFrame),onLoad:v,style:Re({height:`${f.value}px`})},null,46,YA)):e.noScroll?(l(),d("div",{key:1,class:u(a(uo).Body)},[e.loading?(l(),d("div",{key:0,class:u(a(uo).Spinner)},[S(a(Ft))],2)):(l(),d(X,{key:1},[e.sectioned?(l(),T(a(ha),{key:0},{default:h(()=>[g(k.$slots,"content")]),_:3})):g(k.$slots,"content",{key:1})],64))],2)):(l(),T(a(_t),{key:2,shadow:!0,class:u(a(uo).Body),onScrolledToBottom:B[1]||(B[1]=I=>o("scrolled-to-bottom"))},{default:h(()=>[e.loading?(l(),d("div",{key:0,class:u(a(uo).Spinner)},[S(a(Ft))],2)):(l(),d(X,{key:1},[e.sectioned?(l(),T(a(ha),{key:0},{default:h(()=>[g(k.$slots,"content")]),_:3})):g(k.$slots,"content",{key:1})],64))]),_:3},8,["class"]))],2),a(i).footer||e.primaryAction||e.secondaryActions?(l(),T(a(Xu),{primaryAction:e.primaryAction,secondaryActions:e.secondaryActions,key:"footer"},{default:h(()=>[g(k.$slots,"footer")]),_:3},8,["primaryAction","secondaryActions"])):_("",!0)]),_:3},8,["instant","labelledBy","large","small","limitHeight"]),S(a(Pl))]),_:3})):_("",!0)]))}});io.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"open",description:"Whether the modal is open or not",required:!0,type:{name:"boolean"}},{name:"src",description:"The url that will be loaded as the content of the modal",required:!1,type:{name:"string"}},{name:"iFrameName",description:"The name of the modal content iframe",required:!1,type:{name:"string"}},{name:"titleHidden",description:"Hide the title in the modal",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"instant",description:"Disable animations and open modal instantly",required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically adds sections to modal",required:!1,type:{name:"boolean"}},{name:"large",description:"Increases the modal width",required:!1,type:{name:"boolean"}},{name:"small",description:"Decreases the modal width",required:!1,type:{name:"boolean"}},{name:"limitHeight",description:"Limits modal height on large sceens with scrolling",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces modal content with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"noScroll",description:"Removes Scrollable container from the modal content",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary action",required:!1,type:{name:"ComplexAction"}},{name:"secondaryActions",description:"Collection of secondary actions",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}],events:[{name:"iframe-load",type:{names:["Event"]}},{name:"transition-end"},{name:"scrolled-to-bottom"},{name:"close"}],slots:[{name:"activator"},{name:"title"},{name:"content"},{name:"footer"}]};const QA="Polaris-Navigation",JA="Polaris-Navigation__UserMenu",ZA="Polaris-Navigation__ContextControl",eC="Polaris-Navigation__PrimaryNavigation",tC="Polaris-Navigation__LogoContainer",oC="Polaris-Navigation__Logo",aC="Polaris-Navigation__LogoLink",nC="Polaris-Navigation__Item",sC="Polaris-Navigation--keyFocused",iC="Polaris-Navigation__Icon",lC="Polaris-Navigation__Badge",rC="Polaris-Navigation--subNavigationActive",cC="Polaris-Navigation__ExternalIcon",uC="Polaris-Navigation__ListItem",dC="Polaris-Navigation__RollupSection",pC="Polaris-Navigation__SecondaryNavigation",mC="Polaris-Navigation__ItemWrapper",yC="Polaris-Navigation__Text",hC="Polaris-Navigation__SecondaryAction",gC="Polaris-Navigation--isExpanded",bC="Polaris-Navigation__List",fC="Polaris-Navigation__Section",vC="Polaris-Navigation__SectionHeading",xC="Polaris-Navigation__Action",TC="Polaris-Navigation__RollupToggle",SC="Polaris-Navigation__Indicator";var oe={Navigation:QA,UserMenu:JA,ContextControl:ZA,PrimaryNavigation:eC,LogoContainer:tC,Logo:oC,LogoLink:aC,Item:nC,keyFocused:sC,"Icon-resized":"Polaris-Navigation__Icon--resized","Item-selected":"Polaris-Navigation__Item--selected","Item-disabled":"Polaris-Navigation__Item--disabled",Icon:iC,Badge:lC,subNavigationActive:rC,"Item-child-active":"Polaris-Navigation--itemChildActive",ExternalIcon:cC,ListItem:uC,RollupSection:dC,SecondaryNavigation:pC,"ListItem-hasAction":"Polaris-Navigation__ListItem--hasAction",ItemWrapper:mC,Text:yC,SecondaryAction:hC,isExpanded:gC,List:bC,"SecondaryNavigation-noIcon":"Polaris-Navigation__SecondaryNavigation--noIcon",Section:fC,"Section-fill":"Polaris-Navigation__Section--fill","Section-withSeparator":"Polaris-Navigation__Section--withSeparator",SectionHeading:vC,Action:xC,RollupToggle:TC,Indicator:SC,"fade-in":"Polaris-Navigation__fade--in"};const AC=["aria-labelledby"],on=C({props:{location:null,onDismiss:null,ariaLabelledBy:null},setup(e){const o=e,{useFrame:n}=xa(),{logo:s}=n(),i=ql(s,104),r=se();return $e("NavigationContext",{location:o.location,onNavigationDismiss:o.onDismiss,withinContentContainer:!1}),$e("WithinContentContext",!1),(c,m)=>(l(),d("nav",{class:u(a(oe).Navigation),"aria-labelledby":e.ariaLabelledBy},[a(r).contextControl?(l(),d("div",{key:0,class:u(a(oe).ContextControl)},[g(c.$slots,"contextControl")],2)):a(s)?(l(),d("div",{key:1,class:u(a(oe).LogoContainer)},[S(a(gt),{url:a(s).url||"",class:u(a(oe).LogoLink),style:Re({width:a(i)})},{default:h(()=>[S(a(ga),{source:a(s).topBarSource||"",alt:a(s).accessibilityLabel||"",class:u(a(oe).Logo),style:Re({width:a(i)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):_("",!0),S(a(_t),{class:u(a(oe).PrimaryNavigation)},{default:h(()=>[g(c.$slots,"default")]),_:3},8,["class"])],10,AC))}});on.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"location",required:!0,type:{name:"string"}},{name:"ariaLabelledBy",description:"id of the element used as aria-labelledby",required:!1,type:{name:"string"}}],slots:[{name:"contextControl"},{name:"default"}]};const CC={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},kC=w("path",{d:"M11 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L13.586 5H12a1 1 0 0 1-1-1zM3 6.5A1.5 1.5 0 0 1 4.5 5H8a1 1 0 0 1 0 2H5v8h8v-3a1 1 0 1 1 2 0v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.5v-9z"},null,-1),LC=[kC];function _C(e,o){return l(),d("svg",CC,LC)}var PC={render:_C};function wC(){const e=xe("NavigationContext",{location:""});function o(){return e}return{useNavigationContext:o}}const Yu=C({props:{expanded:{type:Boolean},id:null},setup(e){const{useUniqueId:o}=Ne(),n=o("SecondaryNavigation");return(s,i)=>(l(),T(a(va),{id:e.id||a(n),open:e.expanded,transition:{duration:"0ms",timingFunction:"linear"}},{default:h(()=>[w("ul",{class:u(a(oe).List)},[g(s.$slots,"default")],2)]),_:3},8,["id","open"]))}});Yu.__docgenInfo={exportName:"default",displayName:"Secondary",description:"",tags:{},props:[{name:"expanded",required:!0,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const MC=["disabled","aria-disabled","aria-label","onKeyup"],vl=C({props:{url:null,matches:{type:Boolean},matchPaths:null,excludePaths:null,external:{type:Boolean},icon:null,badge:null,label:null,disabled:{type:Boolean},accessibilityLabel:null,selected:{type:Boolean},exactMatch:{type:Boolean},new:{type:Boolean},subNavigationItems:null,secondaryAction:null,expanded:{type:Boolean},shouldResizeIcon:{type:Boolean}},emits:["toggle-expanded-state","click"],setup(e,{emit:o}){const n=e,{useMediaQuery:s}=Vt(),{isNavigationCollapsed:i}=s(),{useUniqueId:r}=Ne(),c=r("SecondaryNavigation"),{useNavigationContext:m}=wC(),{location:f,onNavigationDismiss:x}=m(),v=xe("lang"),b=L(!1);ao(()=>{!i&&n.expanded&&A()});const A=()=>{o("toggle-expanded-state")},k=he=>{b.value||(b.value=!0)},B=()=>{b.value&&(b.value=!1)},I=p(()=>n.disabled?-1:0),P=p(()=>n.subNavigationItems?n.subNavigationItems.filter(he=>he.new).length>0:!1),$=p(()=>O(oe.Item,n.disabled&&oe["Item-disabled"],b.value&&oe.keyFocused,n.selected&&oe["Item-selected"])),q=p(()=>O(oe.ListItem,n.secondaryAction&&oe["ListItem-hasAction"])),E=p(()=>O(oe.Icon,n.shouldResizeIcon&&oe["Icon-resized"])),K=fe({url:n.url,matches:n.matches,exactMatch:n.exactMatch,matchPaths:n.matchPaths,excludePaths:n.excludePaths},f),F=p(()=>n.subNavigationItems&&n.subNavigationItems.filter(he=>{const Te=fe(he,f);return Te===0||Te===1||Te===2})),W=p(()=>F.value&&F.value.length>0),D=p(()=>n.selected==null?K===0||K===1||K===2:n.selected),U=p(()=>D.value||n.expanded||W.value),te=!n.subNavigationItems||n.subNavigationItems.length===0||!W.value,de=p(()=>O(oe.Item,n.disabled&&oe["Item-disabled"],D.value&&te&&oe["Item-selected"],U.value&&oe.subNavigationActive,W.value&&oe["Item-child-active"],b.value&&oe.keyFocused)),ce=p(()=>F.value?F.value.sort(({url:he},{url:Te})=>Te.length-he.length)[0]:null),we=p(()=>O(oe.SecondaryNavigation,U.value&&oe.isExpanded,!n.icon&&oe["SecondaryNavigation-noIcon"])),V=he=>{if(he.currentTarget.getAttribute("href")===f&&he.preventDefault(),n.subNavigationItems&&n.subNavigationItems.length>0&&i)he.preventDefault(),A();else if(x){x(),o("click");return}o("click")};function Y(he){const Te=he.split("?")[0].split("#")[0];return Te.endsWith("/")?Te:`${Te}/`}function ie(he,Te){return Y(he)===Y(Te)}function ye(he,Te){return Y(he).startsWith(Y(Te))}function fe({url:he,matches:Te,exactMatch:Z,matchPaths:ve,excludePaths:be},Ae){return he==null?4:Te?0:Te===!1||be&&be.some(Ue=>ye(Ae,Ue))?3:ve&&ve.some(Ue=>ye(Ae,Ue))?2:(Z?ie(Ae,he):ye(Ae,he))?1:4}function Ye(he,Te,Z){return Te?{"aria-expanded":Z,"aria-controls":he}:void 0}return(he,Te)=>{const Z=eu("Item",!0);return e.url?(l(),d("li",{key:1,class:u(a(q))},[w("div",{class:u(a(oe).ItemWrapper)},[S(a(gt),re({url:e.url,class:a(de),external:e.external,tabIndex:a(I),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:V,onKeyup:il(k,["tab"]),onBlur:B},y({},Ye(a(c),!!e.subNavigationItems&&e.subNavigationItems.length>0,!!a(U)))),{default:h(()=>[e.icon?(l(),d("div",{key:0,class:u(a(E))},[S(a(ae),{source:e.icon},null,8,["source"])],2)):_("",!0),w("span",{class:u(a(oe).Text)},[le(j(e.label),1),a(P)?(l(),d("span",{key:0,class:u(a(oe).Indicator)},[S(a(bl),{pulse:""})],2)):_("",!0)],2),n.new||e.badge?(l(),d("div",{key:1,class:u(a(oe).Badge)},[n.new?(l(),T(a(je),{key:0,status:"new",size:"small"},{default:h(()=>[le(j(a(v).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(l(),T(a(je),{key:1,status:"new",size:"small"},{default:h(()=>[le(j(e.badge),1)]),_:1})):typeof e.badge=="object"?(l(),T(a(je),qe(re({key:2},e.badge)),{default:h(()=>[le(j(e.badge.content),1)]),_:1},16)):_("",!0)],2)):_("",!0),e.external?(l(),d("div",{key:2,class:u(a(oe).ExternalIcon)},[S(a(ae),{color:"base",accessibilityLabel:a(v).Polaris.Common.newWindowAccessibilityHint,source:a(PC)},null,8,["accessibilityLabel","source"])],2)):_("",!0)]),_:1},16,["url","class","external","tabIndex","aria-disabled","aria-label","onKeyup"]),e.secondaryAction?(l(),T(a(gt),{key:0,external:"",url:e.secondaryAction.url,class:u(a(oe).SecondaryAction),tabIndex:a(I),"aria-disabled":e.disabled,"aria-label":e.secondaryAction.accessibilityLabel,onClick:e.secondaryAction.onClick},{default:h(()=>[S(a(ae),{source:e.secondaryAction.icon},null,8,["source"])]),_:1},8,["url","class","tabIndex","aria-disabled","aria-label","onClick"])):_("",!0)],2),e.subNavigationItems&&e.subNavigationItems.length>0?(l(),d("div",{key:0,class:u(a(we))},[S(a(Yu),{expanded:!!a(U),id:a(c)},{default:h(()=>[(l(!0),d(X,null,ue(e.subNavigationItems,ve=>(l(),T(Z,re({key:ve.label},ve,{matches:ve===a(ce),onClick:()=>{a(x)&&a(x)(),ve.onClick&&ve.onClick()}}),null,16,["matches","onClick"]))),128))]),_:1},8,["expanded","id"])],2)):_("",!0)],2)):(l(),d("li",{key:0,class:u(a(oe).ListItem)},[w("button",{type:"button",class:u(a($)),disabled:e.disabled,"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,onClick:V,onKeyup:il(k,["tab"]),onBlur:B},[e.icon?(l(),d("div",{key:0,class:u(a(E))},[S(a(ae),{source:e.icon},null,8,["source"])],2)):_("",!0),w("span",{class:u(a(oe).Text)},[le(j(e.label),1),a(P)?(l(),d("span",{key:0,class:u(a(oe).Indicator)},[S(a(bl),{pulse:""})],2)):_("",!0)],2),n.new||e.badge?(l(),d("div",{key:1,class:u(a(oe).Badge)},[n.new?(l(),T(a(je),{key:0,status:"new",size:"small"},{default:h(()=>[le(j(a(v).Polaris.Badge.STATUS_LABELS.new),1)]),_:1})):typeof e.badge=="string"?(l(),T(a(je),{key:1,status:"new",size:"small"},{default:h(()=>[le(j(e.badge),1)]),_:1})):typeof e.badge=="object"?(l(),T(a(je),qe(re({key:2},e.badge)),{default:h(()=>[le(j(e.badge.content),1)]),_:1},16)):_("",!0)],2)):_("",!0)],42,MC)],2))}}});vl.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"url",required:!1,type:{name:"string"}},{name:"matches",required:!1,type:{name:"boolean"}},{name:"matchPaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"excludePaths",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"external",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"badge",required:!1,type:{name:"union",elements:[{name:"string"},{name:"BadgeItemProps"}]}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"exactMatch",required:!1,type:{name:"boolean"}},{name:"new",required:!1,type:{name:"boolean"}},{name:"subNavigationItems",required:!1,type:{name:"Array",elements:[{name:"SubNavigationItem"}]}},{name:"secondaryAction",required:!1,type:{name:"SecondaryAction"}},{name:"expanded",required:!1,type:{name:"boolean"}},{name:"shouldResizeIcon",required:!1,type:{name:"boolean"}}],events:[{name:"toggle-expanded-state"},{name:"click"}]};const NC=["aria-label"],BC=["aria-label"],Rl=C({props:{items:null,icon:null,title:null,fill:{type:Boolean},rollup:null,action:null,separator:{type:Boolean}},emits:["click"],setup(e,{emit:o}){const n=e,s=L(!1),i=()=>{s.value=!s.value},r=()=>{s.value=!1},c=L(null),m=L(),{useMediaQuery:f}=Vt(),{isNavigationCollapsed:x}=f(),{useUniqueId:v}=Ne(),b=v("AdditionalItems"),A=E=>{o("click"),c.value&&cancelAnimationFrame(c.value),(!E||!x)&&(c.value=requestAnimationFrame(r))};pe(()=>{c.value&&cancelAnimationFrame(c.value)});const k=p(()=>O(oe.Section,n.separator&&oe["Section-withSeparator"],n.fill&&oe["Section-fill"])),B=O(oe.Item,oe.RollupToggle),I=p(()=>n.rollup&&(s.value?n.rollup.hide:n.rollup.view)),P=p(()=>n.items.findIndex(E=>n.rollup?n.rollup.activePath===E.url||E.url&&n.rollup.activePath.startsWith(E.url)||(E.subNavigationItems?E.subNavigationItems.some(({url:K})=>n.rollup&&n.rollup.activePath.startsWith(K)):!1):!1)),$=E=>{m.value===E?m.value=-1:m.value=E},q=p(()=>{let E=[];if(E=n.rollup?n.items.slice(0,n.rollup.after):n.items,n.rollup&&P.value!==-1&&P.value>n.rollup.after-1){const K=n.items.slice(n.rollup.after);E.push(...K.splice(P.value-n.rollup.after,1))}return E});return(E,K)=>(l(),d("ul",{class:u(a(k))},[e.title?(l(),d("li",{key:0,class:u(a(oe).SectionHeading)},[w("span",{class:u(a(oe).Text)},j(e.title),3),e.action?(l(),d("button",{key:0,type:"button",class:u(a(oe).Action),"aria-label":e.action.accessibilityLabel,onClick:K[0]||(K[0]=(...F)=>e.action.onClick&&e.action.onClick(...F))},[S(a(ae),{source:e.action.icon},null,8,["source"])],10,NC)):_("",!0)],2)):_("",!0),a(q).length>0?(l(!0),d(X,{key:1},ue(a(q),(F,W)=>(l(),T(a(vl),re({key:F.label},y({},F),{label:F.label,subNavigationItems:F.subNavigationItems,expanded:m.value===W,onClick:D=>A(F.subNavigationItems!=null&&F.subNavigationItems.length>0),onToggleExpandedState:D=>$(W)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128)):_("",!0),e.rollup&&e.items.slice(e.rollup.after).length>0?(l(),d("li",{key:2,class:u(a(oe).RollupSection)},[S(a(va),{id:a(b),open:s.value},{default:h(()=>[w("ul",{class:u(a(oe).List)},[(l(!0),d(X,null,ue(e.items.slice(e.rollup.after),(F,W)=>(l(),T(a(vl),re({key:F.label},F,{label:F.label,subNavigationItems:F.subNavigationItems,expanded:m.value===W,onClick:D=>A(F.subNavigationItems!=null&&F.subNavigationItems.length>0),onToggleExpandedState:D=>$(W)}),null,16,["label","subNavigationItems","expanded","onClick","onToggleExpandedState"]))),128))],2)]),_:1},8,["id","open"]),e.rollup&&e.items.length>e.rollup.after?(l(),d("div",{class:u(a(oe).ListItem),key:"List Item"},[w("button",{type:"button",class:u(a(B)),"aria-label":a(I),onClick:i},[w("span",{class:u(a(oe).Icon)},[S(a(ae),{source:a(bu)},null,8,["source"])],2)],10,BC)],2)):_("",!0)],2)):_("",!0)],2))}});Rl.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"items",description:"A collection of navigation items to be rendered inside the section",required:!0,type:{name:"Array",elements:[{name:"ItemProps"}]}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}},{name:"title",required:!1,type:{name:"string"}},{name:"fill",required:!1,type:{name:"boolean"}},{name:"rollup",required:!1,type:{name:`{
  after: number;
  view: string;
  hide: string;
  activePath: string;
}`}},{name:"action",required:!1,type:{name:`{
  icon: IconProps['source'];
  accessibilityLabel: string;
  onClick(): void;
}`}},{name:"separator",required:!1,type:{name:"boolean"}}],events:[{name:"click"}]};const IC="Polaris-Page",DC="Polaris-Page--fullWidth",$C="Polaris-Page--narrowWidth",EC="Polaris-Page__Content",FC="Polaris-Page--divider";var Ua={Page:IC,fullWidth:DC,narrowWidth:$C,Content:EC,divider:FC};const Qu=C({props:{title:null,secondaryActions:null,actionGroups:null},setup(e){const o=se(),{useMediaQuery:n}=Vt(),{isNavigationCollapsed:s}=n();function i(r=[]){return r.length===0?!1:r.some(c=>c.actions.length>0)}return(r,c)=>a(Xe)(a(o).default)?g(r.$slots,"default",{key:0}):e.secondaryActions&&e.secondaryActions.length>0||i(e.actionGroups)?(l(),T(a(vu),{key:1,actions:e.secondaryActions,groups:e.actionGroups,rollup:a(s),rollupActionsLabel:e.title?`View actions for ${e.title}`:void 0},null,8,["actions","groups","rollup","rollupActionsLabel"])):_("",!0)}});Qu.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"secondaryActions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}}],slots:[{name:"default"}]};const OC="Polaris-Page-Header",qC="Polaris-Page-Header--titleHidden",RC="Polaris-Page-Header__TitleWrapper",HC="Polaris-Page-Header__Navigation",VC="Polaris-Page-Header--hasActionMenu",UC="Polaris-Page-Header--mobileView",jC="Polaris-Page-Header__BreadcrumbWrapper",WC="Polaris-Page-Header__PaginationWrapper",zC="Polaris-Page-Header__AdditionalNavigationWrapper",GC="Polaris-Page-Header__MainContent",KC="Polaris-Page-Header__TitleActionMenuWrapper",XC="Polaris-Page-Header--hasNavigation",YC="Polaris-Page-Header__PrimaryActionWrapper",QC="Polaris-Page-Header__ActionMenuWrapper",JC="Polaris-Page-Header__Row",ZC="Polaris-Page-Header__RightAlign",ek="Polaris-Page-Header__LeftAlign",tk="Polaris-Page-Header--noBreadcrumbs",ok="Polaris-Page-Header__AdditionalMetaData",ak="Polaris-Page-Header__Actions",nk="Polaris-Page-Header--longTitle",sk="Polaris-Page-Header--mediumTitle",ik="Polaris-Page-Header--isSingleRow";var Me={Header:OC,titleHidden:qC,TitleWrapper:RC,Navigation:HC,hasActionMenu:VC,mobileView:UC,BreadcrumbWrapper:jC,PaginationWrapper:WC,AdditionalNavigationWrapper:zC,MainContent:GC,TitleActionMenuWrapper:KC,hasNavigation:XC,PrimaryActionWrapper:YC,ActionMenuWrapper:QC,Row:JC,RightAlign:ZC,LeftAlign:ek,noBreadcrumbs:tk,AdditionalMetaData:ok,Actions:ak,longTitle:nk,mediumTitle:sk,isSingleRow:ik};const Ju=C({props:{additionalMetadata:null},setup(e){const o=se();return(n,s)=>(l(),d("div",{class:u(a(Me).AdditionalMetaData)},[S(a(Lt),{variation:"subdued"},{default:h(()=>[a(o).default?g(n.$slots,"default",{key:0}):e.additionalMetadata?(l(),d(X,{key:1},[le(j(e.additionalMetadata),1)],64)):_("",!0)]),_:3})],2))}});Ju.__docgenInfo={exportName:"default",displayName:"AdditionalMetadata",description:"",tags:{},props:[{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const Hl=C({setup(e){return(o,n)=>(l(),d("div",{class:u(a(Me).AdditionalNavigationWrapper)},[g(o.$slots,"default")],2))}});Hl.__docgenInfo={exportName:"default",displayName:"AdditionalNavigation",description:"",tags:{},slots:[{name:"default"}]};const Vl=C({props:{breadcrumbs:null},setup(e){return(o,n)=>e.breadcrumbs.length>0?(l(),d("div",{key:0,class:u(a(Me).BreadcrumbWrapper)},[S(a(Tu),{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"])],2)):_("",!0)}});Vl.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}]};const Ul=C({props:{pagination:null},setup(e){const o=se(),{useMediaQuery:n}=Vt(),{isNavigationCollapsed:s}=n();return(i,r)=>e.pagination&&!a(s)?(l(),d("div",{key:0,class:u(a(Me).PaginationWrapper)},[S(a(an),qe(ht(e.pagination)),{default:h(()=>[a(Xe)(a(o).default)?g(i.$slots,"default",{key:0}):_("",!0)]),_:3},16)],2)):_("",!0)}});Ul.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pagination",required:!1,type:{name:"PaginationProps"}}],slots:[{name:"default"}]};const lk=C({props:{pagination:null,breadcrumbs:null},setup(e){return(o,n)=>(l(),d("div",{class:u(a(Me).Navigation)},[S(Vl,{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),S(Hl,null,{default:h(()=>[g(o.$slots,"default")]),_:3}),S(Ul,{pagination:e.pagination},null,8,["pagination"])],2))}});lk.__docgenInfo={exportName:"default",displayName:"Navigation",description:"",tags:{},props:[{name:"pagination",required:!0,type:{name:"PaginationProps"}},{name:"breadcrumbs",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}}],slots:[{name:"default"}]};const rk="Polaris-Header-Title",ck="Polaris-Header-Title__TitleWithSubtitle",uk="Polaris-Header-Title__SubTitle",dk="Polaris-Header-Title__SubtitleCompact",pk="Polaris-Header-Title__TitleWithMetadataWrapper",mk="Polaris-Header-Title__TitleMetadata";var po={Title:rk,TitleWithSubtitle:ck,SubTitle:uk,SubtitleCompact:dk,TitleWithMetadataWrapper:pk,TitleMetadata:mk};const Zu=C({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(e){const o=e,n=p(()=>O(po.Title,o.subtitle&&po.TitleWithSubtitle)),s=p(()=>O(po.SubTitle,o.compactTitle&&po.SubtitleCompact)),i=se();return(r,c)=>(l(),d(X,null,[a(Xe)(a(i).default)?(l(),d("div",{key:0,class:u(a(po).TitleWithMetadataWrapper)},[e.title?(l(),d("h1",{key:0,class:u(a(n))},j(e.title),3)):_("",!0),w("div",{class:u(a(po).TitleMetadata)},[g(r.$slots,"default")],2)],2)):(l(),d(X,{key:1},[e.title?(l(),d("h1",{key:0,class:u(a(n))},j(e.title),3)):_("",!0)],64)),e.subtitle?(l(),d("div",{key:2,class:u(a(s))},[w("p",null,j(e.subtitle),1)],2)):_("",!0)],64))}});Zu.__docgenInfo={exportName:"default",displayName:"Title",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const ed=C({props:{title:null,subtitle:null,compactTitle:{type:Boolean}},setup(e){return(o,n)=>(l(),d("div",{class:u(a(Me).TitleWrapper)},[S(a(Zu),{title:e.title,subtitle:e.subtitle,compactTitle:e.compactTitle},{default:h(()=>[g(o.$slots,"default")]),_:3},8,["title","subtitle","compactTitle"])],2))}});ed.__docgenInfo={exportName:"default",displayName:"PageTitle",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const xl=C({props:{id:null,content:null,accessibilityLabel:null,url:null,external:{type:Boolean},destructive:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},icon:null,primary:{type:Boolean},onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const o=e,n=se(),{useMediaQuery:s}=Vt(),{isNavigationCollapsed:i}=s(),r=p(()=>o.primary?o.primary:!0),c=p(()=>m(i,o));function m(f,x){let{content:v,accessibilityLabel:b,icon:A}=x;return A==null?M(y({},x),{icon:void 0}):(f?(b=b||v,v=void 0):A=void 0,M(y({},x),{content:v,accessibilityLabel:b,icon:A}))}return(f,x)=>(l(),d("div",{class:u(a(Me).PrimaryActionWrapper)},[a(Xe)(a(n).default)?g(f.$slots,"default",{key:0}):(l(),T(a(nt),{key:1,action:a(c),overrides:{primary:a(r)},onAction:x[0]||(x[0]=()=>{e.onAction&&e.onAction()}),onMouseenter:x[1]||(x[1]=()=>{e.onMouseEnter&&e.onMouseEnter()}),onTouchstart:x[2]||(x[2]=()=>{e.onTouchStart&&e.onTouchStart()})},null,8,["action","overrides"]))],2))}});xl.__docgenInfo={exportName:"default",displayName:"PrimaryAction",description:"",tags:{},slots:[{name:"default"}]};const td=C({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(e){const o=e,n=se(),{useMediaQuery:s}=Vt(),{isNavigationCollapsed:i}=s(),r=20,c=8,m=p(()=>({breadcrumbs:o.breadcrumbs||[]})),f=p(()=>({title:o.title,subtitle:o.subtitle,compactTitle:o.compactTitle})),x=p(()=>({title:o.title,secondaryActions:o.secondaryActions,actionGroups:o.actionGroups})),v=p(()=>y({},o.primaryAction)),b=p(()=>({additionalMetadata:o.additionalMetadata})),A=p(()=>i&&(!o.breadcrumbs||!o.breadcrumbs.length)&&o.title&&o.title.length<=c),k=p(()=>!i&&!o.pagination&&!o.secondaryActions&&!n.secondaryActions&&o.title!=null&&o.title.length<=r),B=p(()=>(i||k.value)&&v.value||!i&&!k.value&&o.pagination);return(I,P)=>(l(),T(a(od),qe(ht(o)),ze({slot2:h(()=>[S(a(ed),qe(ht(a(f))),{default:h(()=>[g(I.$slots,"pageTitle")]),_:3},16)]),slot3:h(()=>[S(a(Qu),qe(ht(a(x))),{default:h(()=>[g(I.$slots,"secondaryActions")]),_:3},16),(a(n).primaryAction||o.primaryAction)&&!a(i)&&!a(k)?(l(),T(a(xl),qe(re({key:0},a(v))),{default:h(()=>[g(I.$slots,"primaryAction")]),_:3},16)):_("",!0)]),slot5:h(()=>[S(a(Ju),qe(ht(a(b))),{default:h(()=>[g(I.$slots,"additionalMetadata")]),_:3},16)]),slot6:h(()=>[S(a(Hl),null,{default:h(()=>[g(I.$slots,"additionalNavigation")]),_:3})]),_:2},[a(A)?void 0:{name:"slot1",fn:h(()=>[S(a(Vl),qe(ht(a(m))),null,16)])},a(B)?{name:"slot4",fn:h(()=>[(a(n).primaryAction||o.primaryAction)&&(a(i)||a(k))?(l(),T(a(xl),qe(re({key:0},a(v))),{default:h(()=>[g(I.$slots,"primaryAction")]),_:3},16)):_("",!0),!a(i)&&!a(k)?(l(),T(a(Ul),{key:1,pagination:e.pagination},{default:h(()=>[a(Xe)(a(n).pagination)?g(I.$slots,"pagination",{key:0}):_("",!0)]),_:3},8,["pagination"])):_("",!0)])}:void 0]),1040))}});td.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"pagination"},{name:"additionalMetadata"},{name:"additionalNavigation"}]};const od=C({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null},setup(e){const o=e,n=34,s=se(),{useMediaQuery:i}=Vt(),{isNavigationCollapsed:r}=i(),c=p(()=>!o.primaryAction&&s.primaryAction&&!o.pagination&&(o.secondaryActions&&!s.secondaryActions&&!o.secondaryActions.length||s.secondaryActions)&&(!o.actionGroups||!o.actionGroups.length)),m=p(()=>o.breadcrumbs&&o.breadcrumbs.length>0||o.pagination&&!r||s.additionalNavigation),f=p(()=>!s.default||o.secondaryActions&&o.secondaryActions.length>0||P(o.actionGroups)),x=p(()=>O(Me.Header,c.value&&Me.isSingleRow,o.titleHidden&&Me.titleHidden,m.value&&Me.hasNavigation,f.value&&Me.hasActionMenu,r&&Me.mobileView,(!o.breadcrumbs||!o.breadcrumbs.length)&&Me.noBreadcrumbs,o.title&&o.title.length<n&&Me.mediumTitle,o.title&&o.title.length>n&&Me.longTitle)),v=p(()=>Xe(s.slot1)),b=p(()=>Xe(s.slot2)),A=p(()=>Xe(s.slot3)),k=p(()=>Xe(s.slot4)),B=p(()=>Xe(s.slot5)),I=p(()=>Xe(s.slot6));function P($=[]){return $.length===0?!1:$.some(q=>q.actions.length>0)}return($,q)=>(l(),d("div",{class:u(a(x))},[a(v)||a(b)||a(A)||a(k)?(l(),d("div",{key:0,class:u(a(Me).Row)},[g($.$slots,"slot1"),g($.$slots,"slot2"),a(A)||a(k)?(l(),d("div",{key:0,class:u(a(Me).RightAlign)},[a(A)&&a(k)?(l(),d("div",{key:0,class:u(a(Me).Actions)},[g($.$slots,"slot3"),g($.$slots,"slot4")],2)):(l(),d(X,{key:1},[g($.$slots,"slot3"),g($.$slots,"slot4")],64))],2)):_("",!0)],2)):_("",!0),a(B)||a(I)?(l(),d("div",{key:1,class:u(a(Me).Row)},[w("div",{class:u(a(Me).LeftAlign)},[g($.$slots,"slot5")],2),a(I)?(l(),d("div",{key:0,class:u(a(Me).RightAlign)},[g($.$slots,"slot6")],2)):_("",!0)],2)):_("",!0)],2))}});od.__docgenInfo={exportName:"default",displayName:"HeaderWrapper",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryAction"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}}],slots:[{name:"slot1"},{name:"slot2"},{name:"slot3"},{name:"slot4"},{name:"slot5"},{name:"slot6"}]};const ks=C({props:{title:null,subtitle:null,compactTitle:{type:Boolean},titleHidden:{type:Boolean},primaryAction:null,pagination:null,breadcrumbs:null,secondaryActions:null,actionGroups:null,additionalMetadata:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},divider:{type:Boolean}},setup(e){const o=e,n=se(),s=p(()=>o.title||o.primaryAction||n.primaryAction||(o.secondaryActions||n.secondaryActions)&&(o.secondaryActions&&!n.secondaryActions&&o.secondaryActions.length>0||n.secondaryActions&&!o.secondaryActions&&!n.secondaryActions.length)||o.actionGroups&&o.actionGroups.length>0||n.actionGroups||o.breadcrumbs&&o.breadcrumbs.length>0||n.breadcrumbs),i=p(()=>{const b=o,{fullWidth:m,narrowWidth:f,divider:x}=b,v=G(b,["fullWidth","narrowWidth","divider"]);return y({},v)}),r=p(()=>O(Ua.Page,o.fullWidth&&Ua.fullWidth,o.narrowWidth&&Ua.narrowWidth)),c=p(()=>O(!s.value&&Ua.Content,o.divider&&s&&Ua.divider));return(m,f)=>(l(),d("div",{class:u(a(r))},[a(s)?(l(),T(a(td),qe(re({key:0},a(i))),ze({_:2},[a(Xe)(a(n).pageTitle)?{name:"pageTitle",fn:h(()=>[g(m.$slots,"pageTitle")])}:void 0,a(n).secondaryActions?{name:"secondaryActions",fn:h(()=>[g(m.$slots,"secondaryActions")])}:void 0,a(n).primaryAction?{name:"primaryAction",fn:h(()=>[g(m.$slots,"primaryAction")])}:void 0,a(n).additionalMetadata?{name:"additionalMetadata",fn:h(()=>[g(m.$slots,"additionalMetadata")])}:void 0,a(n).additionalNavigation?{name:"additionalNavigation",fn:h(()=>[g(m.$slots,"additionalNavigation")])}:void 0,a(Xe)(a(n).pagination)?{name:"pagination",fn:h(()=>[g(m.$slots,"pagination")])}:void 0]),1040)):_("",!0),w("div",{class:u(a(c))},[g(m.$slots,"default")],2)],2))}});ks.__docgenInfo={exportName:"default",displayName:"Page",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"subtitle",description:"Page subtitle, in regular type",required:!1,type:{name:"string"}},{name:"compactTitle",description:"Removes spacing between title and subtitle",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Visually hide the title",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Primary page-level action",required:!1,type:{name:"PrimaryActionType"}},{name:"pagination",description:"Page-level pagination",required:!1,type:{name:"PaginationProps"}},{name:"breadcrumbs",description:"Collection of breadcrumbs",required:!1,type:{name:"TSIndexedAccessType"}},{name:"secondaryActions",description:"Collection of secondary page-level actions",required:!1,type:{name:"Array",elements:[{name:"MenuActionDescriptor"}]}},{name:"actionGroups",description:"Collection of page-level groups of secondary actions",required:!1,type:{name:"Array",elements:[{name:"MenuGroupDescriptor"}]}},{name:"additionalMetadata",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"divider",description:"Displays a divider between the page header and the page content",required:!1,type:{name:"boolean"}}],slots:[{name:"pageTitle"},{name:"secondaryActions"},{name:"primaryAction"},{name:"additionalMetadata"},{name:"additionalNavigation"},{name:"pagination"},{name:"default"}]};const yk="Polaris-PageActions";var hk={PageActions:yk};const Ls=C({props:{primaryAction:null,secondaryActions:null},setup(e){const o=e,n=p(()=>o.secondaryActions&&o.secondaryActions.length>0?"equalSpacing":"trailing");return(s,i)=>(l(),d("div",{class:u(a(hk).PageActions)},[S(a(Ve),{distribution:a(n),spacing:"tight"},{default:h(()=>[e.secondaryActions&&e.secondaryActions.length>0?(l(),T(a(Ke),{key:0},{default:h(()=>[(l(!0),d(X,null,ue(e.secondaryActions,r=>(l(),T(a(nt),{key:r.id,action:r},null,8,["action"]))),128))]),_:1})):_("",!0),e.primaryAction?(l(),T(a(nt),{key:1,action:e.primaryAction,overrides:{primary:!0}},null,8,["action"])):_("",!0)]),_:1},8,["distribution"])],2))}});Ls.__docgenInfo={exportName:"default",displayName:"PageActions",description:"",tags:{},props:[{name:"primaryAction",description:"The primary action for the page",required:!1,type:{name:"intersection",elements:[{name:"DisableableAction"},{name:"LoadableAction"}]}},{name:"secondaryActions",description:"The secondary actions for the page",required:!1,type:{name:"Array",elements:[{name:"ComplexAction"}]}}]};function gk(){if(document==null||document.activeElement==null)return!1;const{tagName:e}=document.activeElement;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||document.activeElement.hasAttribute("contenteditable")}const bk={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},fk=w("path",{d:"M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z"},null,-1),vk=[fk];function xk(e,o){return l(),d("svg",bk,vk)}var tc={render:xk};const Tk=["aria-label"],Sk={key:2,"aria-live":"polite"},an=C({props:{nextKeys:null,previousKeys:null,nextTooltip:null,previousTooltip:null,nextURL:null,previousURL:null,hasNext:{type:Boolean},hasPrevious:{type:Boolean},accessibilityLabel:null,accessibilityLabels:null},setup(e){const o=e,n=xe("lang"),s=L(null),i=se(),r=Rt(),c=o.accessibilityLabel||n.Polaris.Pagination.pagination,m=o.accessibilityLabels&&o.accessibilityLabels.previous||n.Polaris.Pagination.previous,f=o.accessibilityLabels&&o.accessibilityLabels.next||n.Polaris.Pagination.next,x=p(()=>o.previousKeys&&(o.previousURL||r.onPrevious)&&o.hasPrevious),v=p(()=>o.nextKeys&&(o.nextURL||r.onNext)&&o.hasNext),b=()=>{o.previousURL;const B=r.onPrevious;k(B())},A=()=>{o.nextURL;const B=r.onNext;k(B())},k=B=>()=>{gk()||B()};return(B,I)=>(l(),d("nav",{ref_key:"paginationRef",ref:s,"aria-label":a(c)},[a(x)?(l(!0),d(X,{key:0},ue(e.previousKeys,P=>(l(),T(a(tt),{key:P,"key-code":P,handler:b},null,8,["key-code"]))),128)):_("",!0),a(v)?(l(!0),d(X,{key:1},ue(e.nextKeys,P=>(l(),T(a(tt),{key:P,"key-code":P,handler:A},null,8,["key-code"]))),128)):_("",!0),S(a(Ke),{segmented:!a(Xe)(a(i).default)},{default:h(()=>[e.previousTooltip&&e.hasPrevious?(l(),T(a(oo),{key:0,"activator-wrapper":"span",content:e.previousTooltip},{default:h(()=>[S(a(ne),{id:"previousURL",outline:"",icon:a(tc),accessibilityLabel:a(m),url:e.previousURL,disabled:!e.hasPrevious,onClick:I[0]||(I[0]=P=>B.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),T(a(ne),{key:1,id:"previousURL",outline:"",icon:a(tc),accessibilityLabel:a(m),url:e.previousURL,disabled:!e.hasPrevious,onClick:I[1]||(I[1]=P=>B.$emit("previous"))},null,8,["icon","accessibilityLabel","url","disabled"])),a(Xe)(a(i).default)?(l(),d("div",Sk,[e.hasNext&&e.hasPrevious?(l(),T(a(Lt),{key:0},{default:h(()=>[g(B.$slots,"default")]),_:3})):(l(),T(a(Lt),{key:1,variation:"subdued"},{default:h(()=>[g(B.$slots,"default")]),_:3}))])):_("",!0),e.nextTooltip&&e.hasNext?(l(),T(a(oo),{key:3,"activator-wrapper":"span",content:e.nextTooltip},{default:h(()=>[S(a(ne),{id:"nextURL",outline:"",icon:a(ll),accessibilityLabel:a(f),url:e.nextURL,onClick:I[2]||(I[2]=P=>B.$emit("next")),disabled:!e.hasNext},null,8,["icon","accessibilityLabel","url","disabled"])]),_:1},8,["content"])):(l(),T(a(ne),{key:4,id:"nextURL",outline:"",icon:a(ll),accessibilityLabel:a(f),url:e.nextURL,onClick:I[3]||(I[3]=P=>B.$emit("next")),disabled:!e.hasNext},null,8,["icon","accessibilityLabel","url","disabled"]))]),_:3},8,["segmented"])],8,Tk))}});an.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"nextKeys",description:"Keyboard shortcuts for the next button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"previousKeys",description:"Keyboard shortcuts for the previous button",required:!1,type:{name:"Array",elements:[{name:"Key"}]}},{name:"nextTooltip",description:"Tooltip for the next button",required:!1,type:{name:"string"}},{name:"previousTooltip",description:"Tooltip for the previous button",required:!1,type:{name:"string"}},{name:"nextURL",description:"The URL of the next page",required:!1,type:{name:"string"}},{name:"previousURL",description:"The URL of the previous page",required:!1,type:{name:"string"}},{name:"hasNext",description:"Whether there is a next page to show",required:!1,type:{name:"boolean"}},{name:"hasPrevious",description:"Whether there is a previous page to show",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Accessible label for the pagination",required:!1,type:{name:"string"}},{name:"accessibilityLabels",description:"Accessible labels for the buttons and UnstyledLinks",required:!1,type:{name:"AccessibilityLabels"}}],events:[{name:"previous"},{name:"next"}],slots:[{name:"default"}]};const Ak="Polaris-Select",Ck="Polaris-Select--disabled",kk="Polaris-Select__Content",Lk="Polaris-Select__InlineLabel",_k="Polaris-Select__Icon",Pk="Polaris-Select__Backdrop",wk="Polaris-Select__SelectedOption",Mk="Polaris-Select__Prefix",Nk="Polaris-Select__Input",Bk="Polaris-Select--error",Ik="Polaris-Select--hover";var yt={Select:Ak,disabled:Ck,Content:kk,InlineLabel:Lk,Icon:_k,Backdrop:Pk,SelectedOption:wk,Prefix:Mk,Input:Nk,error:Bk,hover:Ik};const Dk=["id","name","disabled","value","aria-invalid","aria-describedby","aria-required"],$k=["label"],Ek=["value","disabled"],Fk=["value","disabled"],Ok=["aria-disabled"],Aa=C({props:{options:null,labelAction:null,labelHidden:{type:Boolean},labelInline:{type:Boolean},disabled:{type:Boolean},placeholder:null,id:null,name:null,value:null,error:{type:[null,Boolean]},requiredIndicator:{type:Boolean},modelValue:null},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:o}){const n=e,s=se(),{useUniqueId:i}=Ne(),r=[],c=p(()=>i("Select",n.id)),m=p(()=>n.labelInline?!0:n.labelHidden),f=p(()=>O(yt.Select,n.error&&yt.error,n.disabled&&yt.disabled)),x=p(()=>{let F=[];return A.value.forEach(W=>{if(B(W)){const D=W;F=F.concat(D.options)}else F.push(W)}),F}),v=p(()=>{let F=x.value.find(W=>n.modelValue===W.value);return F===void 0&&(F=x.value.find(W=>!W.hidden)),F||{value:"",label:""}}),b=p(()=>A.value.map(F=>K(F))),A=p(()=>{let F=n.options.map(K);return n.placeholder&&F.unshift({label:n.placeholder,value:"",disabled:!0}),F});s["help-text"]&&r.push($l(n.id||"")),n.error&&r.push(`${n.id}Error`);const k=F=>typeof F=="string",B=F=>typeof F=="object"&&"options"in F&&F.options!=null,I=F=>{o("update:modelValue",F.target.value),o("change",F.target.value)},P=F=>B(F)?F.title:F.label,$=F=>B(F)?{label:F.title,value:"",disabled:!0,hidden:!0}:F,q=F=>B(F)?F.options:[];function E(F){return{label:F,value:F}}function K(F){if(k(F))return E(F);if(B(F)){const{title:W,options:D}=F;return{title:W,options:D.map(U=>k(U)?E(U):U)}}return F}return(F,W)=>(l(),T(a(El),{id:a(c),error:e.error,action:e.labelAction,"label-hidden":a(m),"required-indicator":e.requiredIndicator},ze({default:h(()=>[w("div",{class:u(a(f))},[w("select",{id:a(c),name:e.name,class:u(a(yt).Input),disabled:e.disabled,value:e.modelValue,"aria-invalid":!!e.error,"aria-describedby":r.join(" ")||void 0,"aria-required":e.requiredIndicator,onFocus:W[0]||(W[0]=D=>F.$emit("focus")),onBlur:W[1]||(W[1]=D=>F.$emit("blur")),onChange:I},[(l(!0),d(X,null,ue(a(b),D=>(l(),d(X,null,[B(D)?(l(),d("optgroup",{label:P(D),key:P(D)},[(l(!0),d(X,null,ue(q(D),U=>(l(),d("option",{key:U.value,value:U.value,disabled:U.disabled},j(U.label),9,Ek))),128))],8,$k)):(l(),d("option",{key:$(D).value,value:$(D).value,disabled:$(D).disabled},j($(D).label),9,Fk))],64))),256))],42,Dk),w("div",{class:u(a(yt).Content),"aria-hidden":"","aria-disabled":e.disabled},[e.labelInline?(l(),d("span",{key:0,class:u(a(yt).InlineLabel)},[g(F.$slots,"label")],2)):_("",!0),F.$slots[`prefix-${a(v).id}`]?(l(),d("div",{key:1,class:u(a(yt).Prefix)},[g(F.$slots,`prefix-${a(v).id}`)],2)):_("",!0),w("span",{class:u(a(yt).SelectedOption)},[F.$slots[`label-${a(v).id}`]?g(F.$slots,`label-${a(v).id}`,{key:0}):(l(),d(X,{key:1},[le(j(a(v).label),1)],64))],2),w("span",{class:u(a(yt).Icon)},[S(a(ae),{source:a(Xc)},null,8,["source"])],2)],10,Ok),w("div",{class:u(a(yt).Backdrop)},null,2)],2)]),_:2},[!e.labelInline&&a(s).label?{name:"label",fn:h(()=>[g(F.$slots,"label")])}:void 0,a(s)["help-text"]?{name:"help-text",fn:h(()=>[g(F.$slots,"help-text")])}:void 0]),1032,["id","error","action","label-hidden","required-indicator"]))}});Aa.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",description:"List of options or option groups to choose from",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"labelInline",description:"Show the label to the left of the value, inside the control",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Example text to display as placeholder",required:!1,type:{name:"string"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"error",description:"Display an error state",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"requiredIndicator",description:"Visual required indicator, add an asterisk to label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["TSIndexedAccessType"]}},{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],slots:[{name:"label"},{name:"help-text"},{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const qk="Polaris-SettingAction",Rk="Polaris-SettingAction__Setting",Hk="Polaris-SettingAction__Action";var al={SettingAction:qk,Setting:Rk,Action:Hk};const Vk=C({setup(e){return(o,n)=>(l(),d("div",{class:u(a(al).SettingAction)},[w("div",{class:u(a(al).Setting)},[g(o.$slots,"setting")],2),w("div",{class:u(a(al).Action)},[g(o.$slots,"action")],2)],2))}});Vk.__docgenInfo={exportName:"default",displayName:"SettingAction",description:"",tags:{},slots:[{name:"setting"},{name:"action"}]};const Uk="Polaris-SkeletonBodyText";var jk={SkeletonBodyText:Uk};const nn=C({props:{lines:{default:3}},setup(e){return(o,n)=>(l(!0),d(X,null,ue(e.lines,s=>(l(),d("div",{key:s,class:u(a(jk).SkeletonBodyText)},null,2))),128))}});nn.__docgenInfo={exportName:"default",displayName:"SkeletonBodyText",description:"",tags:{},props:[{name:"lines",description:"Number of lines to display",tags:{default:[{description:"3",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}]};const Wk="Polaris-SkeletonDisplayText__DisplayText",zk="Polaris-SkeletonDisplayText--sizeSmall",Gk="Polaris-SkeletonDisplayText--sizeMedium",Kk="Polaris-SkeletonDisplayText--sizeLarge",Xk="Polaris-SkeletonDisplayText--sizeExtraLarge";var oc={DisplayText:Wk,sizeSmall:zk,sizeMedium:Gk,sizeLarge:Kk,sizeExtraLarge:Xk};const sn=C({props:{size:{default:"medium"}},setup(e){const o=e,n=O(oc.DisplayText,o.size&&oc[ke("size",o.size)]);return(s,i)=>(l(),d("div",{class:u(a(n))},null,2))}});sn.__docgenInfo={exportName:"default",displayName:"SkeletonDisplayText",description:"",tags:{},props:[{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}]};const Yk="Polaris-SkeletonPage__Page",Qk="Polaris-SkeletonPage--fullWidth",Jk="Polaris-SkeletonPage--narrowWidth",Zk="Polaris-SkeletonPage__Content",eL="Polaris-SkeletonPage__Header",tL="Polaris-SkeletonPage__BreadcrumbAction",oL="Polaris-SkeletonPage__TitleAndPrimaryAction",aL="Polaris-SkeletonPage__TitleWrapper",nL="Polaris-SkeletonPage__Title",sL="Polaris-SkeletonPage__SkeletonTitle",iL="Polaris-SkeletonPage__PrimaryAction",lL="Polaris-SkeletonPage__Actions",rL="Polaris-SkeletonPage__Action";var rt={Page:Yk,fullWidth:Qk,narrowWidth:Jk,Content:Zk,Header:eL,BreadcrumbAction:tL,TitleAndPrimaryAction:oL,TitleWrapper:aL,Title:nL,SkeletonTitle:sL,PrimaryAction:iL,Actions:lL,Action:rL};const cL=["aria-label"],uL=C({props:{title:null,fullWidth:{type:Boolean},narrowWidth:{type:Boolean},primaryAction:{type:Boolean},breadcrumbs:{type:Boolean}},setup(e){const o=e,n=xe("lang"),s=p(()=>O(rt.Page,o.fullWidth&&rt.fullWidth,o.narrowWidth&&rt.narrowWidth));return(i,r)=>(l(),d("div",{class:u(a(s)),role:"status","aria-label":a(n).Polaris.SkeletonPage.loadingLabel},[w("div",{class:u(a(rt).Header)},[e.breadcrumbs?(l(),d("div",{key:0,class:u(a(rt).BreadcrumbAction),style:{width:"60px"}},[S(a(nn),{lines:1})],2)):_("",!0),w("div",{class:u(a(rt).TitleAndPrimaryAction)},[w("div",{class:u(a(rt).TitleWrapper)},[e.title?(l(),d("h1",{key:0,class:u(a(rt).Title)},j(e.title),3)):(l(),d("div",{key:1,class:u(a(rt).SkeletonTitle)},null,2))],2),e.primaryAction?(l(),d("div",{key:0,class:u(a(rt).PrimaryAction)},[S(a(sn),{size:"large"})],2)):_("",!0)],2)],2),w("div",{class:u(a(rt).Content)},[g(i.$slots,"default")],2)],10,cL))}});uL.__docgenInfo={exportName:"default",displayName:"SkeletonPage",description:"",tags:{},props:[{name:"title",description:"Page title, in large type",required:!1,type:{name:"string"}},{name:"fullWidth",description:"Remove the normal max-width on the page",required:!1,type:{name:"boolean"}},{name:"narrowWidth",description:"Decreases the maximum layout width. Intended for single-column layouts",required:!1,type:{name:"boolean"}},{name:"primaryAction",description:"Shows a skeleton over the primary action",required:!1,type:{name:"boolean"}},{name:"breadcrumbs",description:"Shows a skeleton over the breadcrumb",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const dL="Polaris-Subheading";var pL={Subheading:dL};const qt=C({props:{element:{default:"h3"}},setup(e){const o=se(),s=p(()=>{var i,r;return console.log(123,o.default&&o.default()),console.log(4,o.default&&o.default()[0].el),o.default&&(((i=o.default()[0])==null?void 0:i.type.toString())==="Symbol(Text)"||((r=o.default()[0])==null?void 0:r.type.toString())==="Symbol()")}).value?o.default&&o.default()[0].children:void 0;return(i,r)=>(l(),T(Pe(e.element),{"aria-label":a(s),class:u(a(pL).Subheading)},{default:h(()=>[g(i.$slots,"default")]),_:3},8,["aria-label","class"]))}});qt.__docgenInfo={exportName:"default",displayName:"Subheading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the subheading",tags:{default:[{description:"'h3'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"default"}]};const ln=C({props:{content:null,duration:null,error:{type:Boolean},action:null},setup(e){const o=e,n=Rt(),{useUniqueId:s}=Ne(),{useFrame:i}=xa(),{showToast:r,hideToast:c}=i(),m=s("Toast");return pe(()=>{r(y(y({id:m},o),n))}),it(()=>{c({id:m})}),(f,x)=>null}});ln.__docgenInfo={exportName:"default",displayName:"Toast",description:"",tags:{},props:[{name:"content",description:"The content that should appear in the toast message",required:!0,type:{name:"string"}},{name:"duration",description:"The length of time in milliseconds the toast message should persist",tags:{default:[{description:"5000",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Display an error toast.",required:!1,type:{name:"boolean"}},{name:"action",description:"Adds an action next to the message",required:!1,type:{name:"Action"}}]};const mL=["id","className","aria-label"],ad=C({props:{id:null,active:{type:Boolean},preventInteraction:null,preferredPosition:{default:"below"},activator:null,accessibilityLabel:null},setup(e){const o=e,n=xe("lang"),s=L({}),i=p(()=>o.accessibilityLabel?n.Polaris.TooltipOverlay.accessibilityLabel.replace("{label}",o.accessibilityLabel):void 0),r=c=>{s.value={minHeight:`${c.desiredHeight}px`}};return(c,m)=>e.active?(l(),T(a(wl),{key:0,layout:"tooltip",active:e.active,activator:e.activator,preferredPosition:e.preferredPosition,preventInteraction:e.preventInteraction,onChangeContentStyles:r},{default:h(()=>[w("div",{id:e.id,role:"tooltip",className:a(Kn).Content,style:Re(s.value),"aria-label":a(i)},[g(c.$slots,"default")],12,mL)]),_:3},8,["active","activator","preferredPosition","preventInteraction"])):_("",!0)}});ad.__docgenInfo={exportName:"default",displayName:"TooltipOverlay",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"string"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const yL={inheritAttrs:!1},oo=C(M(y({},yL),{props:{active:{type:Boolean,default:!1},content:null,dismissOnMouseOut:null,preferredPosition:{default:"below"},activatorWrapper:{default:"span"},accessibilityLabel:null},setup(e){const o=e,n=se(),s=L(o.active),i=L(!1),r=L(null),c=L(null),{useUniqueId:m,uniqueIdRef:f}=Ne(),x=m("TooltipContent");Be(()=>f.value,()=>{const $=(c.value?Cl(c.value):null)||c.value;!$||($.tabIndex=0,$.setAttribute("aria-describedby",x),$.setAttribute("data-polaris-tooltip-activator","true"))}),Be(()=>c.value,()=>{const P=c.value;P==null?r.value=null:P.firstElementChild instanceof HTMLElement&&(r.value=P.firstElementChild)});const v=()=>{s.value=!1},b=()=>{s.value=!0},A=P=>{P.key===Qe.Escape&&v()};function k(){i.value=!0,b()}function B(){i.value=!1,v()}function I(){!i.value&&k()}return(P,$)=>(l(),T(Pe(e.activatorWrapper),{ref_key:"activatorContainer",ref:c,onFocus:b,onBlur:v,onMouseleave:B,onMouseover:I,onClick:$[0]||($[0]=q=>q.stopPropagation()),onKeyup:A},{default:h(()=>[g(P.$slots,"default"),r.value?(l(),T(a(Xa),{key:0,idPrefix:"tooltip"},{default:h(()=>[S(a(ad),{id:a(x),preferredPosition:e.preferredPosition,preventInteraction:e.dismissOnMouseOut,activator:r.value,active:s.value,accessibilityLabel:e.accessibilityLabel},{default:h(()=>[a(n).content?g(P.$slots,"content",{key:0}):(l(),d(X,{key:1},[le(j(e.content),1)],64))]),_:3},8,["id","preferredPosition","preventInteraction","activator","active","accessibilityLabel"])]),_:3})):_("",!0)]),_:3},512))}}));oo.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"active",description:"Toggle whether the tooltip is visible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"content",description:"The content to display within the tooltip",required:!1,type:{name:"string"}},{name:"dismissOnMouseOut",description:"Dismiss tooltip when not interacting with its children",required:!1,type:{name:"TSIndexedAccessType"}},{name:"preferredPosition",description:"The direction the tooltip tries to display",tags:{default:[{description:"'below'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"activatorWrapper",description:"The element type to wrap the activator in",tags:{default:[{description:"'span'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"content"}]};const hL="Polaris-Tag",gL="Polaris-Tag--disabled",bL="Polaris-Tag--clickable",fL="Polaris-Tag--removable",vL="Polaris-Tag--linkable",xL="Polaris-Tag__TagText",TL="Polaris-Tag__Button",SL="Polaris-Tag--segmented",AL="Polaris-Tag__Link",CL="Polaris-Tag__LinkText";var at={Tag:hL,disabled:gL,clickable:bL,removable:fL,linkable:vL,TagText:xL,Button:TL,segmented:SL,Link:AL,LinkText:CL};const kL=["disabled"],LL=["href"],_L=["title"],PL=["title"],wL=["aria-label","disabled"],rn=C({props:{disabled:{type:Boolean},accessibilityLabel:null,url:null},setup(e){const o=e,n=Rt(),s=se(),i=p(()=>Boolean(n.onClick)),r=p(()=>Boolean(n.onRemove)),c=p(()=>i.value&&o.url),m=p(()=>O(at.Tag,o.disabled&&at.disabled,i.value&&at.clickable,r.value&&at.removable,o.url&&!o.disabled&&at.linkable,c.value&&at.segmented)),f=p(()=>O(at.Link,c.value&&at.segmented)),x=p(()=>O(at.Button,c.value&&at.segmented)),v=p(()=>o.accessibilityLabel?o.accessibilityLabel:s.default&&s.default()[0].children?s.default()[0].children:""),b=p(()=>`Remove ${v.value||""}`),A=kt;return(k,B)=>a(i)?(l(),d("button",{key:0,type:"button",disabled:e.disabled,class:u(a(m))},[g(k.$slots,"default")],10,kL)):(l(),d("span",{key:1,class:u(a(m))},[e.url&&!e.disabled?(l(),d("a",{key:0,class:u(a(f)),href:e.url},[w("span",{title:a(v),class:u(a(at).LinkText)},[g(k.$slots,"default")],10,_L)],10,LL)):(l(),d("span",{key:1,title:a(v),class:u(a(at).TagText)},[g(k.$slots,"default")],10,PL)),a(r)?(l(),d("button",{key:2,type:"button","aria-label":a(b),class:u(a(x)),disabled:e.disabled,onClick:B[0]||(B[0]=I=>k.$emit("remove")),onMouseup:B[1]||(B[1]=(...I)=>a(A)&&a(A)(...I))},[S(a(ae),{source:a(ou)},null,8,["source"])],42,wL)):_("",!0)],2))}});rn.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"disabled",description:"Disables the tag",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"A string to use when tag has more than textual content",required:!1,type:{name:"string"}},{name:"url",description:"Url to navigate to when tag is clicked or keypressed.",required:!1,type:{name:"string"}}],events:[{name:"remove"}],slots:[{name:"default"}]};const ML="Polaris-Thumbnail",NL="Polaris-Thumbnail--sizeSmall",BL="Polaris-Thumbnail--sizeMedium",IL="Polaris-Thumbnail--sizeLarge";var ac={Thumbnail:ML,sizeSmall:NL,sizeMedium:BL,sizeLarge:IL};const _s=C({props:{size:{default:"medium"},source:null,alt:null},setup(e){const o=e,n=p(()=>{const s=ke("size",o.size);return O(ac.Thumbnail,s&&ac[s])});return(s,i)=>(l(),d("span",{class:u(a(n))},[typeof e.source=="string"?(l(),T(a(ga),{key:0,alt:e.alt,source:e.source},null,8,["alt","source"])):(l(),T(a(ae),{key:1,accessibilityLabel:e.alt,source:e.source},null,8,["accessibilityLabel","source"]))],2))}});_s.__docgenInfo={exportName:"default",displayName:"Thumbnail",description:"",tags:{},props:[{name:"size",description:"Size of thumbnail",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"source",description:"URL for the image",required:!0,type:{name:"union",elements:[{name:"string"},{name:"IconSource"}]}},{name:"alt",description:"Alt text for the thumbnail image",required:!0,type:{name:"string"}}]};const DL={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},$L=w("path",{d:"M19 11H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14H1a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"},null,-1),EL=[$L];function FL(e,o){return l(),d("svg",DL,EL)}var OL={render:FL};const qL="Polaris-TopBar",RL="Polaris-TopBar__LogoDisplayControl",HL="Polaris-TopBar__LogoDisplayContainer",VL="Polaris-TopBar__LogoContainer",UL="Polaris-TopBar__Logo",jL="Polaris-TopBar__LogoLink",WL="Polaris-TopBar__ContextControl",zL="Polaris-TopBar__NavigationIcon",GL="Polaris-TopBar--focused",KL="Polaris-TopBar__IconWrapper",XL="Polaris-TopBar__Contents",YL="Polaris-TopBar__SearchField",QL="Polaris-TopBar__SecondaryMenu";var Ze={TopBar:qL,LogoDisplayControl:RL,LogoDisplayContainer:HL,LogoContainer:VL,Logo:UL,LogoLink:jL,ContextControl:WL,NavigationIcon:zL,focused:GL,IconWrapper:KL,Contents:XL,SearchField:YL,SecondaryMenu:QL};const JL="Polaris-TopBar-Menu__ActivatorWrapper",ZL="Polaris-TopBar-Menu__Activator",e_="Polaris-TopBar-Menu__Section";var nc={ActivatorWrapper:JL,Activator:ZL,Section:e_};const t_="Polaris-Menu-Message__Section";var o_={Section:t_};const nd=C({props:{title:null,description:null,action:null,link:null,badge:null},setup(e){return(o,n)=>(l(),d("div",{class:u(a(o_).Section)},[S(a(za),null,{default:h(()=>[S(a(Ve),{vertical:"",spacing:"tight"},{default:h(()=>[S(a(dt),null,{default:h(()=>[S(a(Ot),null,{default:h(()=>[le(j(e.title),1),e.badge?(l(),T(a(je),{key:0,status:e.badge.status},{default:h(()=>[le(j(e.badge.content),1)]),_:1},8,["status"])):_("",!0)]),_:1}),w("p",null,j(e.description),1)]),_:1}),S(a(Ta),{url:e.link.to},{default:h(()=>[le(j(e.link.content),1)]),_:1},8,["url"]),S(a(ne),{plain:"",onClick:e.action.onClick},{default:h(()=>[le(j(e.action.content),1)]),_:1},8,["onClick"])]),_:1})]),_:1})],2))}});nd.__docgenInfo={exportName:"default",displayName:"Message",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"description",required:!0,type:{name:"string"}},{name:"action",required:!0,type:{name:"{ onClick(): void; content: string }"}},{name:"link",required:!0,type:{name:"{ to: string; content: string }"}},{name:"badge",required:!1,type:{name:"{ content: string; status: BadgeProps['status'] }"}}]};const a_=["aria-label"],n_={inheritAttrs:!1},Ps=C(M(y({},n_),{props:{actions:null,message:null,open:{type:Boolean},colorScheme:null,accessibilityLabel:null},setup(e){const o=e,n=p(()=>!!o.message),s=o.message&&o.message.badge&&{content:o.message.badge.content,status:o.message.badge.status};return(i,r)=>(l(),T(a(He),{fixed:"",active:e.open,"full-height":a(n),preferredAlignment:"right","color-scheme":e.colorScheme,onClose:r[2]||(r[2]=c=>i.$emit("close"))},{activator:h(()=>[w("div",{class:u(a(nc).ActivatorWrapper)},[w("button",{type:"button",class:u(a(nc).Activator),"aria-label":e.accessibilityLabel,onClick:r[0]||(r[0]=c=>i.$emit("open"))},[g(i.$slots,"activatorContent")],10,a_)],2)]),content:h(()=>[S(a(Fe),{sections:e.actions,onActionAnyItem:r[1]||(r[1]=c=>i.$emit("close"))},null,8,["sections"]),e.message&&e.message.action&&e.message.link?(l(),T(a(nd),{key:0,title:e.message.title,description:e.message.description,action:{onClick:e.message.action.onClick,content:e.message.action.content},link:{to:e.message.link.to,content:e.message.link.content},badge:a(s)},null,8,["title","description","action","link","badge"])):_("",!0)]),_:3},8,["active","full-height","color-scheme"]))}}));Ps.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"TSIndexedAccessType"}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the menu",required:!1,type:{name:"MessageProps"}},{name:"open",description:"A boolean property indicating whether the menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}}],events:[{name:"close"},{name:"open"}],slots:[{name:"activatorContent"}]};const s_="Polaris-TopBar-Search",i_="Polaris-TopBar-Search__SearchContent",l_="Polaris-TopBar-Search--visible",r_="Polaris-TopBar-Search__Results";var Gn={Search:s_,SearchContent:i_,visible:l_,Results:r_};const c_="Polaris-TopBar-SearchDismissOverlay",u_="Polaris-TopBar-SearchDismissOverlay--visible";var sc={SearchDismissOverlay:c_,visible:u_,"fade-in":"Polaris-TopBar-SearchDismissOverlay__fade--in"};const sd=C({props:{visible:{type:Boolean}},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=L(null),i=p(()=>O(sc.SearchDismissOverlay,n.visible&&sc.visible)),r=c=>{c.target===s.value&&o("dismiss")};return(c,m)=>(l(),d(X,null,[e.visible?(l(),T(a(_l),{key:0})):_("",!0),w("div",re(c.$attrs,{ref_key:"nodeRef",ref:s,class:a(i),onClick:r}),null,16)],64))}});sd.__docgenInfo={exportName:"default",displayName:"SearchDismissOverlay",description:"",tags:{},props:[{name:"visible",description:"Determines whether the overlay should be visible",required:!0,type:{name:"boolean"}}],events:[{name:"dismiss"}]};const id=C({props:{visible:{type:Boolean},overlayVisible:{type:Boolean,default:!1}},emits:["dismiss"],setup(e,{emit:o}){const n=e,s=se(),i=p(()=>O(Gn.Search,n.visible&&Gn.visible));return(r,c)=>(l(),d(X,null,[e.visible&&a(s).default?(l(),T(a(sd),{key:0,visible:e.overlayVisible,onDismiss:c[0]||(c[0]=m=>r.$emit("dismiss"))},null,8,["visible"])):_("",!0),a(s).default?(l(),d("div",{key:1,class:u(a(i))},[S(a(ba),null,{default:h(()=>[w("div",{class:u(a(Gn).SearchContent)},[w("div",{class:u(a(Gn).Results)},[g(r.$slots,"default")],2)],2)]),_:3})],2)):_("",!0)],64))}});id.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"visible",description:"Toggles whether or not the search is visible",required:!1,type:{name:"boolean"}},{name:"overlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}]};const d_="Polaris-TopBar-SearchField",p_="Polaris-TopBar-SearchField--focused",m_="Polaris-TopBar-SearchField__Input",y_="Polaris-TopBar-SearchField__Backdrop",h_="Polaris-TopBar-SearchField__BackdropShowFocusBorder",g_="Polaris-TopBar-SearchField__Icon",b_="Polaris-TopBar-SearchField__Clear",f_="Polaris-TopBar-SearchField--toLightBackground";var Yt={SearchField:d_,focused:p_,Input:m_,Backdrop:y_,BackdropShowFocusBorder:h_,Icon:g_,Clear:b_,toLightBackground:f_};const v_=["for"],x_=["id","placeholder"],T_=["aria-label"],jl=C({props:{modelValue:null,placeholder:null,focused:{type:Boolean},active:{type:Boolean},showFocusBorder:{type:Boolean}},emits:["change","focus","blur","cancel","update:modelValue"],setup(e,{emit:o}){const n=e,s=xe("lang"),i=L(!1),r=L(null),{useUniqueId:c}=Ne(),m=c("SearchField"),f=P=>{const $=P.target;o("change",$.value),o("update:modelValue",$.value)},x=()=>{o("focus")},v=()=>{o("blur")},b=()=>{o("cancel"),o("update:modelValue",""),o("change",""),r.value&&r.value.focus()},A=()=>{i.value=!1},k=()=>{x(),i.value=!0},B=p(()=>O(Yt.SearchField,(n.focused||n.active||i.value)&&Yt.focused)),I=p(()=>O(Yt.Backdrop,n.showFocusBorder&&Yt.BackdropShowFocusBorder));return pe(()=>{!r.value||(n.focused?r.value.focus():r.value.blur())}),(P,$)=>(l(),d("div",{class:u(a(B)),onFocus:x,onBlur:v},[S(a(Ge),null,{default:h(()=>[w("label",{for:a(m)},j(a(s).Polaris.TopBar.SearchField.search),9,v_)]),_:1}),Bm(w("input",{id:a(m),class:u(a(Yt).Input),placeholder:e.placeholder,ref_key:"inputRef",ref:r,type:"search",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off","onUpdate:modelValue":$[0]||($[0]=q=>Dm(modelValue)?modelValue.value=q:null),onInput:f,onKeydown:$[1]||($[1]=il(Jc(()=>!1,["prevent"]),["enter"]))},null,42,x_),[[Im,e.modelValue]]),w("span",{class:u(a(Yt).Icon)},[S(a(ae),{source:a(Ga)},null,8,["source"])],2),e.modelValue.length>0?(l(),d("button",{key:0,type:"button","aria-label":a(s).Polaris.TopBar.SearchField.clearButtonLabel,class:u(a(Yt).Clear),onClick:b,onBlur:A,onFocus:k},[S(a(ae),{source:a(Zc)},null,8,["source"])],42,T_)):_("",!0),w("div",{class:u(a(I))},null,2)],34))}});jl.__docgenInfo={exportName:"default",displayName:"SearchField",description:"",tags:{},props:[{name:"modelValue",description:"Initial value for the input",required:!0,type:{name:"string"}},{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"active",description:"Force a state where search is active but the text field component is not focused",required:!1,type:{name:"boolean"}},{name:"showFocusBorder",description:"Show a border when the search field is focused",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["string"]}},{name:"focus"},{name:"blur"},{name:"cancel"},{name:"update:modelValue",type:{names:["string"]}}]};const S_="Polaris-TopBar-UserMenu__Details",A_="Polaris-TopBar-UserMenu__Name",C_="Polaris-TopBar-UserMenu__Detail";var nl={Details:S_,Name:A_,Detail:C_};const Wl=C({props:{actions:null,message:null,name:null,detail:null,accessibilityLabel:null,initials:null,avatar:null,open:{type:Boolean},colorScheme:null},setup(e){const n=L(!!e.message);return(s,i)=>(l(),T(a(Ps),{open:e.open,actions:e.actions,message:e.message,"color-scheme":e.colorScheme,accessibilityLabel:e.accessibilityLabel,onOpen:i[0]||(i[0]=r=>s.$emit("toggle")),onClose:i[1]||(i[1]=r=>s.$emit("toggle"))},{activatorContent:h(()=>[S(a(Wu),{active:n.value},{default:h(()=>[S(a(Ka),{size:"small",source:e.avatar,initials:e.initials?e.initials.replace(" ",""):void 0},null,8,["source","initials"])]),_:1},8,["active"]),w("span",{class:u(a(nl).Details)},[w("p",{class:u(a(nl).Name)},j(e.name),3),w("p",{class:u(a(nl).Detail)},j(e.detail),3)],2)]),_:1},8,["open","actions","message","color-scheme","accessibilityLabel"]))}});Wl.__docgenInfo={exportName:"default",displayName:"UserMenu",description:"",tags:{},props:[{name:"actions",description:"An array of action objects that are rendered inside of a popover triggered by this menu",required:!0,type:{name:"Array",elements:[{name:"{items: IconableAction[]}"}]}},{name:"message",description:"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu",required:!1,type:{name:"TSIndexedAccessType"}},{name:"name",description:"A string detailing the merchant\u2019s full name to be displayed in the user menu",required:!0,type:{name:"string"}},{name:"detail",description:"A string allowing further detail on the merchant\u2019s name displayed in the user menu",required:!1,type:{name:"string"}},{name:"accessibilityLabel",description:"A string that provides the accessibility labeling",required:!1,type:{name:"string"}},{name:"initials",description:"The merchant\u2019s initials, rendered in place of an avatar image when not provided",required:!0,type:{name:"TSIndexedAccessType"}},{name:"avatar",description:"An avatar image representing the merchant",required:!1,type:{name:"TSIndexedAccessType"}},{name:"open",description:"A boolean property indicating whether the user menu is currently open",required:!0,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the user menu",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"toggle"}]};const k_=["aria-label"],cn=C({props:{showNavigationToggle:{type:Boolean},searchResultsVisible:{type:Boolean},searchResultsOverlayVisible:{type:Boolean,default:!1}},emits:["search-result-dismiss","navigation-toggle"],setup(e,{emit:o}){const n=e,s=xe("lang"),{useFrame:i}=xa(),{logo:r}=i(),c=se(),m=L(!1),f=()=>{m.value=!0},x=()=>{m.value=!1},v=p(()=>O(Ze.NavigationIcon,m.value&&Ze.focused)),b=p(()=>O(Ze.LogoContainer,n.showNavigationToggle||c.searchField?Ze.LogoDisplayControl:Ze.LogoDisplayContainer)),A=ql(r,104);return(k,B)=>(l(),d("div",{class:u(a(Ze).TopBar)},[e.showNavigationToggle?(l(),d("button",{key:0,type:"button",class:u(a(v)),onClick:B[0]||(B[0]=I=>k.$emit("navigation-toggle")),onFocus:f,onBlur:x,"aria-label":a(s).Polaris.TopBar.toggleMenuLabel},[w("div",{class:u(a(Ze).IconWrapper)},[S(a(ae),{source:a(OL)},null,8,["source"])],2)],42,k_)):_("",!0),a(c).contextControl?(l(),d("div",{key:1,class:u(a(Ze).ContextControl)},[g(k.$slots,"contextControl")],2)):a(r)?(l(),d("div",{key:2,class:u(a(b))},[S(a(gt),{url:a(r).url||"",class:u(a(Ze).LogoLink),style:Re({width:a(A)})},{default:h(()=>[S(a(ga),{source:a(r).topBarSource||"",alt:a(r).accessibilityLabel||"",class:u(a(Ze).Logo),style:Re({width:a(A)})},null,8,["source","alt","class","style"])]),_:1},8,["url","class","style"])],2)):_("",!0),w("div",{class:u(a(Ze).Contents)},[w("div",{class:u(a(Ze).SearchField)},[a(c).searchField?(l(),d(X,{key:0},[g(k.$slots,"searchField"),S(a(id),{visible:e.searchResultsVisible,overlayVisible:e.searchResultsOverlayVisible,onDismiss:B[1]||(B[1]=I=>k.$emit("search-result-dismiss"))},{default:h(()=>[g(k.$slots,"searchResults")]),_:3},8,["visible","overlayVisible"])],64)):_("",!0)],2),w("div",{class:u(a(Ze).SecondaryMenu)},[g(k.$slots,"secondaryMenu")],2),g(k.$slots,"userMenu")],2)],2))}});cn.__docgenInfo={exportName:"default",displayName:"TopBar",description:"",tags:{},props:[{name:"showNavigationToggle",description:"Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button",required:!1,type:{name:"boolean"}},{name:"searchResultsVisible",description:"A boolean property indicating whether search results are currently visible.",required:!1,type:{name:"boolean"}},{name:"searchResultsOverlayVisible",description:"Whether or not the search results overlay has a visible backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"navigation-toggle"},{name:"search-result-dismiss"}],slots:[{name:"contextControl"},{name:"searchField"},{name:"searchResults"},{name:"secondaryMenu"},{name:"userMenu"}]};const L_=[e=>({components:{AppProvider:us,story:e},template:"<AppProvider><story /></AppProvider>"})],__={viewMode:"docs",docs:{transformSource:e=>{const o=/<template>(.*)<\/template>/g;return`${e.replace(o,"$1")}`},source:{state:"open"}},controls:{matchers:{color:/(background|color|backgroundColor)$/i,date:/Date$/},sort:"alpha"},options:{showPanel:!0,storySort:{order:["Get Started","Polaris Icons","Component Status","Components",["Actions","Structure","Forms","Images and icons","Feedback indicators","Titles and text","Behavior","Lists and tables","Navigation","Overlays"]]}}};var P_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:L_,parameters:__});const w_={},M_="wrapper";function ld(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(M_,M(y(y({},w_),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Component Status",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h2",null,"Components List"),t("p",null,"Here are all the Working in Progress components. If you want to contribute, all pull requests are welcome."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Component"),t("th",{parentName:"tr",align:null},"Status"),t("th",{parentName:"tr",align:null},"Category"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"Autocomplete"),t("td",{parentName:"tr",align:null},t("em",{parentName:"td"},"WIP")),t("td",{parentName:"tr",align:null},"Structure")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"Card"),t("td",{parentName:"tr",align:null},t("em",{parentName:"td"},"WIP")),t("td",{parentName:"tr",align:null},"Forms")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"Range Slider"),t("td",{parentName:"tr",align:null},t("em",{parentName:"td"},"WIP")),t("td",{parentName:"tr",align:null},"Forms")))))}ld.isMDXComponent=!0;const rd=()=>{throw new Error("Docs-only story")};rd.parameters={docsOnly:!0};const mo={title:"Component Status",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},N_={};mo.parameters=mo.parameters||{};mo.parameters.docs=M(y({},mo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:N_,mdxComponentAnnotations:mo},t(ld,null))});var B_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:rd,default:mo});const I_={},D_="wrapper";function cd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(D_,M(y(y({},I_),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("img",{src:"https://github.com/qikify/polaris-vue/blob/master/public/images/banner.jpg?raw=true",alt:"Shopify Polaris Vue",width:"1000",height:"376"}),t("br",null),t("br",null),t("h1",null,"Get Started"),t("br",null),t("p",null,"Polaris Vue by Qikify is a component library for ",t("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," based on ",t("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris style guide"),". We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library)."),t("p",null,"Polaris Vue by qikify only supports ",t("strong",{parentName:"p"},"Vue 3.0+"),"."),t("p",null,t("strong",{parentName:"p"},"Follow Polaris React version:")," ",t("a",{parentName:"p",href:"https://github.com/Shopify/polaris-react/releases/tag/v9.2.2"},"9.2.2")," - Release date: ",t("em",{parentName:"p"},"Mar 12th, 2022"),"."),t("br",null),t("br",null),t("h2",null,"Installation"),t("p",null,"Using NPM"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`npm install @qikify/polaris-vue
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
`)),t("br",null),t("h2",null,"Issues & Contributions"),t("p",null,"Polaris Vue by qikify is an open source project and we are very happy to accept community contributions."),t("p",null,"If you notice any bugs, please create issues under ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/issues"},"Issues"),"."),t("br",null),t("br",null),t("h2",null,"License"),t("p",null,"Code released under the  ",t("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/LICENSE"},"MIT License"),"."),t("p",null,"Copyright (c) 2021 Qikify"))}cd.isMDXComponent=!0;const ud=()=>{throw new Error("Docs-only story")};ud.parameters={docsOnly:!0};const yo={title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},$_={};yo.parameters=yo.parameters||{};yo.parameters.docs=M(y({},yo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:$_,mdxComponentAnnotations:yo},t(cd,null))});var E_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:ud,default:yo});const F_={},O_="wrapper";function dd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(O_,M(y(y({},F_),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("h1",null,"Polaris Icons"),t("p",null,"You can use all icons from ",t("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"Shopify Polaris Icons")," Library or any SVG files."),t("p",null,t("inlineCode",{parentName:"p"},"vite-svg-loader")," & ",t("inlineCode",{parentName:"p"},"polaris-icons")," are already included in Polaris Vue package."),t("p",null,"So you don't have to install any additional packages."),t("br",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Setup:")),t("p",null,"You have to use ",t("inlineCode",{parentName:"p"},"vite-svg-loader")," in your project. See ",t("a",{parentName:"p",href:"?path=/docs/components-images-and-icons-icon--icon"},"Icon Component")," for more details."),t("p",null,"Config in ",t("inlineCode",{parentName:"p"},"vite.config.ts")," if you are using ",t("inlineCode",{parentName:"p"},"vite")," to compile your project:"),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// vite.config.js
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
`)))}dd.isMDXComponent=!0;const pd=()=>{throw new Error("Docs-only story")};pd.parameters={docsOnly:!0};const ho={title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},q_={};ho.parameters=ho.parameters||{};ho.parameters.docs=M(y({},ho.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:q_,mdxComponentAnnotations:ho},t(dd,null))});var R_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:pd,default:ho}),ic=Object.freeze,H_=Object.defineProperty,md=(e,o)=>ic(H_(e,"raw",{value:ic(o||e.slice())})),lc,rc;const ws=e=>({components:{ActionList:Fe},setup(){return{args:e}},template:`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>`}),Ca=(e,{argTypes:o})=>({components:{ActionList:Fe,Button:ne,Popover:He,Icon:ae},data(){return{active:!1,iconTickSmallMinor:Qc,iconChevronRightMinor:ll,inAPopoverItems:[{content:"Import file",onAction:this.handleImportedAction},{content:"Export file",onAction:this.handleExportedAction}],iconsOrImagesItems:[{content:"Import file",image:"https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"},{content:"Export file",icon:es}],iconAndSuffixItems:[{active:!0,content:"Import file",icon:rl,suffixId:"import"},{content:"Export file",icon:es}],suffixAndPrefixItems:[{content:"Go here",prefixId:"here",suffixId:"here"},{content:"Or there",suffixId:"there"}]}},methods:{toggle(){this.active=!this.active},handleImportedAction(){alert("Imported!")},handleExportedAction(){alert("Exported!")}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center'}">
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
  </div>`});Ca.storyName="Items";Ca.parameters={docs:{source:{code:N(lc||(lc=md([`
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
        `])))}}};const ka=(e,{argTypes:o})=>({components:{ActionList:Fe,Button:ne,Popover:He,Icon:ae},data(){return{sections:[{title:"File options",items:[{content:"Import file",icon:rl},{content:"Export file",icon:es}]},{title:"Bulk actions",items:[{content:"Edit",icon:$m},{content:"Delete",icon:wr}]}],destructiveItemSections:[{title:"File options",items:[{active:!0,content:"Import file",icon:rl},{content:"Export file",icon:es},{destructive:!0,content:"Delete file",icon:wr}]}],helpTextSections:[{items:[{content:"Blog posts",helpText:"Manage your blog articles"},{content:"Blogs",helpText:"Manage blogs published to your Online Store"}]}]}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '120px', justifyContent: 'center'}">
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
  </div>`});ka.storyName="Sections";ka.parameters={docs:{source:{code:N(rc||(rc=md([`
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
        `])))}}};const V_={Template:ws,itemExamples:Ca,sectionExamples:ka},U_="wrapper";function yd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(U_,M(y(y({},V_),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Actions / ActionList",component:Fe,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"ActionList"),t("p",null,"Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let merchants select from a list of options."),t("p",null,"For Icon usages, use the ",t("a",{parentName:"p",href:"/docs/components-images-and-icons-icon--icon"},"Icon component.")),t("br",null),t("br",null),t("h3",null,"Items"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Ca,height:"250px",inline:!1,name:"_itemExamples_",mdxType:"Story"})),t("h3",null,"Sections"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:ka,height:"300px",inline:!1,name:"_sectionExamples_",mdxType:"Story"})),t("h3",null,"ActionList"),t(R,{mdxType:"Canvas"},t(H,{name:"ActionList",height:"40px",args:{default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}},parameters:{docs:{source:{code:N`
            <ActionList v-bind="props"></ActionList>
          `}}},mdxType:"Story"},ws.bind({}))),t(ee,{story:"ActionList",mdxType:"ArgsTable"}))}yd.isMDXComponent=!0;const j_=Ca,W_=ka,Ms=ws.bind({});Ms.storyName="ActionList";Ms.args={default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}};Ms.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
            <ActionList v-bind="props"></ActionList>
          `}}};const go={title:"Components / Actions / ActionList",component:Fe,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_itemExamples_","_sectionExamples_","actionList"]},z_={_itemExamples_:"_itemExamples_",_sectionExamples_:"_sectionExamples_",ActionList:"actionList"};go.parameters=go.parameters||{};go.parameters.docs=M(y({},go.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:z_,mdxComponentAnnotations:go},t(yd,null))});var G_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ws,itemExamples:Ca,sectionExamples:ka,_itemExamples_:j_,_sectionExamples_:W_,actionList:Ms,default:go});const K_={},X_="wrapper";function hd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(X_,M(y(y({},K_),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Structure / AppProvider",component:us,mdxType:"Meta"}),t("h1",null,"AppProvider"),t("p",null,"App provider is a required component that enables sharing global settings throughout the hierarchy of your application."),t("br",null),t("h2",null,"Best practices"),t("p",null,"The AppProvider component is ",t("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  <div>
  </div>
</AppProvider>
</template>

<script><\/script>
`)))}hd.isMDXComponent=!0;const gd=()=>{throw new Error("Docs-only story")};gd.parameters={docsOnly:!0};const bo={title:"Components / Structure / AppProvider",component:us,includeStories:["__page"]},Y_={};bo.parameters=bo.parameters||{};bo.parameters.docs=M(y({},bo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Y_,mdxComponentAnnotations:bo},t(hd,null))});var Q_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:gd,default:bo});const Ns=(e,{argTypes:o})=>({components:{Avatar:Ka},setup(){return{args:e}},template:'<Avatar v-bind="args"/>'}),J_={Template:Ns},Z_="wrapper";function bd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(Z_,M(y(y({},J_),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Images and Icons / Avatar",component:Ka,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Avatar"),t("p",null,"Avatars are used to show a thumbnail representation of an individual or business in the interface."),t(R,{mdxType:"Canvas"},t(H,{name:"Avatar",height:"60px",parameters:{docs:{source:{code:N`
            <Avatar v-bind="props"/>
          `}}},mdxType:"Story"},Ns.bind({}))),t(ee,{story:"Avatar",mdxType:"ArgsTable"}))}bd.isMDXComponent=!0;const zl=Ns.bind({});zl.storyName="Avatar";zl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <Avatar v-bind="props"/>
          `}}};const fo={title:"Components / Images and Icons / Avatar",component:Ka,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["avatar"]},eP={Avatar:"avatar"};fo.parameters=fo.parameters||{};fo.parameters.docs=M(y({},fo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:eP,mdxComponentAnnotations:fo},t(bd,null))});var tP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ns,avatar:zl,default:fo});const Bs=e=>({components:{Badge:je},setup(){return{args:e}},template:'<Badge v-bind="args">Fulfilled</Badge>'}),La=(e,{argTypes:o})=>({components:{Badge:je},template:N`<div>
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
  </div>`});La.storyName="Variants";La.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const oP={Template:Bs,Variants:La},aP="wrapper";function fd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(aP,M(y(y({},oP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Images and icons / Badge",component:je,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Badge"),t("p",null,"Badges are used to inform merchants of the status of an object or of an action that's been taken."),t(R,{mdxType:"Canvas"},t(H,{story:La,height:"65px",name:"_Variants_",mdxType:"Story"})),t(R,{mdxType:"Canvas"},t(H,{name:"Badge",height:"30px",parameters:{docs:{source:{code:N`
          `}}},mdxType:"Story"},Bs.bind({}))),t(ee,{story:"Badge",mdxType:"ArgsTable"}))}fd.isMDXComponent=!0;const nP=La,Gl=Bs.bind({});Gl.storyName="Badge";Gl.parameters={storySource:{source:`args => ({
  components: {
    Badge
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Badge v-bind="args">Fulfilled</Badge>\`
})`},docs:{source:{code:N`
          `}}};const vo={title:"Components / Images and icons / Badge",component:je,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Variants_","badge"]},sP={_Variants_:"_Variants_",Badge:"badge"};vo.parameters=vo.parameters||{};vo.parameters.docs=M(y({},vo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:sP,mdxComponentAnnotations:vo},t(fd,null))});var iP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Bs,Variants:La,_Variants_:nP,badge:Gl,default:vo}),cc=Object.freeze,lP=Object.defineProperty,Kl=(e,o)=>cc(lP(e,"raw",{value:cc(o||e.slice())})),uc,dc,pc;const Is=(e,{argTypes:o})=>({components:{Button:ne},setup(){return{args:e}},template:'<Button v-bind="args">Add Product</Button>'}),_a=(e,{argTypes:o})=>({components:{Button:ne},template:` <div style="margin: 0 auto; width: 97%">
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
  </div>`});_a.storyName="Variants";_a.parameters={docs:{source:{code:N`
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
        `}}};const Pa=(e,{argTypes:o})=>({components:{Button:ne},data(){return{expanded:!1}},computed:{disclosure(){return this.expanded?"up":"down"},disclosureText(){return this.expanded?"Show less":"Show more"}},template:`<div>
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
  </div>`});Pa.storyName="Disclosure";Pa.parameters={docs:{source:{code:N(uc||(uc=Kl([`
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
        `])))}}};const wa=(e,{argTypes:o})=>({components:{Button:ne},data(){return{connectedDisclosure:{accessibilityLabel:"Other save actions",actions:[{content:"Save as draft"}]}}},template:'<Button :connectedDisclosure="connectedDisclosure" :primary="true"> Save </Button>'});wa.storyName="Split Button";wa.parameters={docs:{source:{code:N(dc||(dc=Kl([`
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
        `])))}}};const Ma=(e,{argTypes:o})=>({components:{ButtonGroup:Ke,Button:ne},data(){return{isFirstButtonActive:!0}},methods:{handleFirstButtonActive(){this.isFirstButtonActive||(this.isFirstButtonActive=!0)},handleSecondButtonActive(){!this.isFirstButtonActive||(this.isFirstButtonActive=!1)}},template:`<ButtonGroup :segmented="true">
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
  </ButtonGroup>`});Ma.storyName="Pressed Button";Ma.parameters={docs:{source:{code:N(pc||(pc=Kl([`
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
        `])))}}};const rP={Template:Is,Variants:_a,Disclosure:Pa,SplitButton:wa,PressedButton:Ma},cP="wrapper";function vd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(cP,M(y(y({},rP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Actions / Button",component:ne,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Button"),t("p",null,"Buttons are used primarily for actions, such as \u201CAdd\u201D, \u201CClose\u201D, \u201CCancel\u201D, or \u201CSave\u201D. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as \u201Cview shipping settings\u201D."),t("p",null,"For navigational actions that appear within or directly following a sentence, use the ",t("a",{parentName:"p",href:"/docs/components-navigation-link--link"},"link component.")),t("p",null,"For connectedDisclosure actions, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--actionlist"},"ActionList component.")),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"button")," element in html."),t("br",null),t("br",null),t("h3",null,"Button Variants"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:_a,height:"280px",name:"_Variants_",mdxType:"Story"})),t("h3",null,"Pressed Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Ma,height:"60px",name:"_PressedButton_",mdxType:"Story"})),t("h3",null,"Disclosure Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Pa,height:"140px",name:"_Disclosure_",mdxType:"Story"})),t("h3",null,"Split Button"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:wa,height:"120px",inline:!1,name:"_SplitButton_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Button",height:"40px",parameters:{docs:{source:{code:N`
            <Button>Add Product</Button>
          `}}},mdxType:"Story"},Is.bind({}))),t(ee,{story:"Button",mdxType:"ArgsTable"}))}vd.isMDXComponent=!0;const uP=_a,dP=Ma,pP=Pa,mP=wa,Xl=Is.bind({});Xl.storyName="Button";Xl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <Button>Add Product</Button>
          `}}};const xo={title:"Components / Actions / Button",component:ne,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_Variants_","_PressedButton_","_Disclosure_","_SplitButton_","button"]},yP={_Variants_:"_Variants_",_PressedButton_:"_PressedButton_",_Disclosure_:"_Disclosure_",_SplitButton_:"_SplitButton_",Button:"button"};xo.parameters=xo.parameters||{};xo.parameters.docs=M(y({},xo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:yP,mdxComponentAnnotations:xo},t(vd,null))});var hP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Is,Variants:_a,Disclosure:Pa,SplitButton:wa,PressedButton:Ma,_Variants_:uP,_PressedButton_:dP,_Disclosure_:pP,_SplitButton_:mP,button:Xl,default:xo});const Ds=(e,{argTypes:o})=>({components:{ButtonGroup:Ke,Button:ne},setup(){return{args:e}},template:`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>`}),Na=(e,{argTypes:o})=>({components:{ButtonGroup:Ke,Button:ne},template:`<ButtonGroup segmented>
    <Button> Bold </Button>
    <Button> Italic </Button>
    <Button> Underline </Button>
  </ButtonGroup>`});Na.storyName="With segmented buttons";Na.parameters={docs:{source:{code:N`
        <ButtonGroup segmented>
          <Button> Bold </Button>
          <Button> Italic </Button>
          <Button> Underline </Button>
        </ButtonGroup>
      `}}};const gP={Template:Ds,SegmentedButtons:Na},bP="wrapper";function xd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(bP,M(y(y({},gP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Actions / ButtonGroup",component:Ke,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"ButtonGroup"),t("p",null,"Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing."),t("br",null),t("h3",null,"With segmented buttons"),t(R,{mdxType:"Canvas"},t(H,{story:Na,height:"65px",name:"_SegmentedButtons_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{name:"ButtonGroup",height:"60px",parameters:{docs:{source:{code:N`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}},mdxType:"Story"},Ds.bind({}))),t(ee,{story:"ButtonGroup",mdxType:"ArgsTable"}))}xd.isMDXComponent=!0;const fP=Na,Yl=Ds.bind({});Yl.storyName="ButtonGroup";Yl.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}};const To={title:"Components / Actions / ButtonGroup",component:Ke,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SegmentedButtons_","buttonGroup"]},vP={_SegmentedButtons_:"_SegmentedButtons_",ButtonGroup:"buttonGroup"};To.parameters=To.parameters||{};To.parameters.docs=M(y({},To.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:vP,mdxComponentAnnotations:To},t(xd,null))});var xP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ds,SegmentedButtons:Na,_SegmentedButtons_:fP,buttonGroup:Yl,default:To});const $s=e=>({components:{List:Sa,ListItem:As,Caption:ps},setup(){return{args:e}},template:`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>`}),TP={Template:$s},SP="wrapper";function Td(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(SP,M(y(y({},TP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Titles and text  / Caption",component:ps,mdxType:"Meta"}),t("h1",null,"Caption"),t("p",null,`Caption text size is smaller than the recommended size for general reading.
On web, it should be used only in a graph or as a timestamp for a list item.
On Android and iOS, it can also be used as help text or as other kinds of secondary text for list items.`),t(R,{mdxType:"Canvas"},t(H,{name:"Caption",height:"100px",parameters:{docs:{source:{code:N`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}},mdxType:"Story"},$s.bind({}))))}Td.isMDXComponent=!0;const Ql=$s.bind({});Ql.storyName="Caption";Ql.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}};const So={title:"Components / Titles and text  / Caption",component:ps,includeStories:["caption"]},AP={Caption:"caption"};So.parameters=So.parameters||{};So.parameters.docs=M(y({},So.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:AP,mdxComponentAnnotations:So},t(Td,null))});var CP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:$s,caption:Ql,default:So});const Es=e=>({components:{Card:Ht},setup(){return{args:e}},template:`
    <Card sectioned :actions="[{content: 'Add variant'}]">
      <template #title>Variants</template>
      <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
    </Card>
  `}),Fs=e=>({components:{Card:Ht,CardSection:ys,CardHeader:ms,CardSubsection:ku,Icon:ae,Subheading:qt,Popover:He,Button:ne,ActionList:Fe,Stack:Ve,Subheading:qt,List:Sa,ListItem:As},setup(){const o=L(!1);return{args:e,OrdersMinor:au,addAccountActive:o,toggleClick:()=>{console.log("clicked")},toggleAccountActive:()=>{o.value=!o.value}}},template:`
    <Card
      :secondaryFooterActions="[{ content: 'Cancel shipment', destructive: true }, { content: 'Add another shipment', disabled: true }]"
      :primaryFooterAction="{ content: 'Add tracking number' }"
    >
      <template #title>Shipment</template>
      <CardHeader :actions="[{ content: 'Preview' }]">
        <template #title>Item Orders</template>
        <Popover :active="addAccountActive" @close="toggleClick">
          <template #activator>
            <Button
              :plain="true",
              :disclosure="true"
              @click="toggleAccountActive">Add account</Button>
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
        <CardSubsection>123 First St<br />Somewhere<br />The Universe</CardSubsection>
        <CardSubsection>123 Second St<br />Somewhere<br />The Universe</CardSubsection>
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
  `}),Os=e=>({components:{Card:Ht,CardHeader:ms,Stack:Ve,ButtonGroup:Ke,Button:ne,CardSection:ys,ActionList:Fe,Popover:He},setup(){const o=L(!1);return{args:e,addAccountActive:o}},template:`
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
  `}),kP={TemplateSimple:Es,TemplateFull:Fs,Template:Os},LP="wrapper";function Sd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(LP,M(y(y({},kP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Structure / Card",component:Ht,argTypes:{title:{description:"Title content for the card",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Card"),t("p",null,"Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done."),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Simple Card")),t(R,{mdxType:"Canvas"},t(H,{name:"Card - Simple",height:"150px",parameters:{docs:{source:{state:"close",code:N`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}},mdxType:"Story"},Es.bind({}))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Card with all of its elements")),t(R,{mdxType:"Canvas"},t(H,{name:"Card - Full",height:"700px",inline:!1,parameters:{docs:{source:{state:"close",code:N`
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
                <CardSubsection>123 First St<br />Somewhere<br />The Universe</CardSubsection>
                <CardSubsection>123 Second St<br />Somewhere<br />The Universe</CardSubsection>
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
          `}}},mdxType:"Story"},Fs.bind({}))),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Example")),t(R,{mdxType:"Canvas"},t(H,{name:"Card",height:"360px",inline:!1,parameters:{docs:{source:{state:"close",code:N`
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
            </Card>`}}},mdxType:"Story"},Os.bind({}))),t(ee,{story:"Card",mdxType:"ArgsTable"}))}Sd.isMDXComponent=!0;const Jl=Es.bind({});Jl.storyName="Card - Simple";Jl.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N`
            <Card sectioned :actions="[{content: 'Add variant'}]">
              <template #title>Variants</template>
              <p>Add variants if this product comes in multiple versions, like different sizes or colors.</p>
            </Card>`}}};const Zl=Fs.bind({});Zl.storyName="Card - Full";Zl.parameters={storySource:{source:`args => ({
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
            <Button
              :plain="true",
              :disclosure="true"
              @click="toggleAccountActive">Add account</Button>
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
        <CardSubsection>123 First St<br />Somewhere<br />The Universe</CardSubsection>
        <CardSubsection>123 Second St<br />Somewhere<br />The Universe</CardSubsection>
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
})`},docs:{source:{state:"close",code:N`
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
                <CardSubsection>123 First St<br />Somewhere<br />The Universe</CardSubsection>
                <CardSubsection>123 Second St<br />Somewhere<br />The Universe</CardSubsection>
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
          `}}};const er=Os.bind({});er.storyName="Card";er.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N`
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
            </Card>`}}};const Ao={title:"Components / Structure / Card",component:Ht,argTypes:{title:{description:"Title content for the card",table:{type:{summary:null}},control:{disable:!0}},default:{description:"Inner content of the card",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["cardSimple","cardFull","card"]},_P={"Card - Simple":"cardSimple","Card - Full":"cardFull",Card:"card"};Ao.parameters=Ao.parameters||{};Ao.parameters.docs=M(y({},Ao.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:_P,mdxComponentAnnotations:Ao},t(Sd,null))});var PP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",TemplateSimple:Es,TemplateFull:Fs,Template:Os,cardSimple:Jl,cardFull:Zl,card:er,default:Ao});const un=e=>({components:{Checkbox:fa},setup(){return{args:e}},template:`
  <div>
    <Checkbox v-bind="args" v-model="isChecked">
      <template #label>Checkbox label</template>
      <template #help-text>Basic help text</template>
    </Checkbox>
    <p style="margin-top: 30px">Checked: {{ isChecked }} </p>
  </div>`,data(){return{isChecked:!1}}});un.parameters={docs:{source:{code:N`
        <div>
          <Checkbox v-model="isChecked">
            <template #label>Checkbox label</template>
            <template #help-text>Basic help text</template>
          </Checkbox>
          <p>Checked: {{ isChecked }} </p>
        </div>
      `}}};const wP={Template:un},MP="wrapper";function Ad(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(MP,M(y(y({},wP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / Checkbox",component:fa,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Checkbox"),t("p",null,`Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
They may also be used as a way to have merchants indicate they agree to specific terms and services.`),t(R,{mdxType:"Canvas"},t(H,{story:un,name:"Checkbox",mdxType:"Story"})),t(ee,{story:"Checkbox",mdxType:"ArgsTable"}))}Ad.isMDXComponent=!0;const Cd=un;Cd.storyName="Checkbox";const Co={title:"Components / Forms / Checkbox",component:fa,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Template_"]},NP={Checkbox:"_Template_"};Co.parameters=Co.parameters||{};Co.parameters.docs=M(y({},Co.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:NP,mdxComponentAnnotations:Co},t(Ad,null))});var BP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:un,_Template_:Cd,default:Co});const dn=e=>({components:{ChoiceList:bt},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});dn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const pn=e=>({components:{ChoiceList:bt},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});pn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const mn=e=>({components:{ChoiceList:bt},template:`
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
  `,data(){return{value:["shipping"],choices:[{label:"Use the shipping address as the billing address by default",helpText:"Reduces the number of fields required to check out. The billing address can still be edited.",value:"shipping"},{label:"Require a confirmation step",helpText:"Customers must review their order details before purchasing.",value:"confirmation"}]}}});mn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const yn=(e,{argTypes:o})=>({components:{ChoiceList:bt},template:`
  <div>
    <ChoiceList
      name="singleChild"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:"<p>This is child content of Minimum quantity option</p>"}]}}});yn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const hn=(e,{argTypes:o})=>({components:{ChoiceList:bt},template:`
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
  `,data(){return{selected:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:""}]}},methods:{handleChange(){this.choices[2].renderChildren=this.selected==="minimum_quantity"?"<p>This is child content of Minimum quantity option</p>":""}}});hn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const gn=e=>({components:{ChoiceList:bt},setup(){return{args:e}},template:`
  <ChoiceList
    v-bind="args"
    v-model="selected"
    :choices="options"
  >
    Example choice list
  </ChoiceList>
  `,data(){return{selected:"hidden",options:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});gn.parameters={docs:{source:{code:N`
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
      `}}};const IP={singleChoiceList:dn,errorSingleChoiceList:pn,multiChoiceList:mn,renderChildChoiceList:yn,renderChildWithConditional:hn,Example:gn},DP="wrapper";function kd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(DP,M(y(y({},IP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / ChoiceList",component:bt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Choice list"),t("p",null,`A choice list lets you create a list of grouped radio buttons or checkboxes.
Use this component if you need to group together a related list of interactive choices.`),t("br",null),t("br",null),t("h3",null,"Single choice list"),t("p",null,"Allows merchants to select one option from a list."),t("ul",null,t("li",{parentName:"ul"},"Make sure all options are an either/or choice.")),t(R,{mdxType:"Canvas"},t(H,{story:dn,name:"Single choice list",mdxType:"Story"})),t("h3",null,"Single choice list with error"),t("p",null,"Allows for accessible error handling by connecting the error message to the field with the error."),t(R,{mdxType:"Canvas"},t(H,{story:pn,name:"Single choice list with error",mdxType:"Story"})),t("h3",null,"Multi-choice list"),t("p",null,"Allows merchants to select multiple options from a list."),t("ul",null,t("li",{parentName:"ul"},"Avoid options that are an either/or choice.")),t(R,{mdxType:"Canvas"},t(H,{story:mn,name:"Multi-choice list",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (always rendered)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content will always be rendered. Works for both single-choice and multi-choice list.`),t(R,{mdxType:"Canvas"},t(H,{story:yn,name:"Single-choice or multi-choice list with children content (always rendered)",mdxType:"Story"})),t("h3",null,"Single-choice or multi-choice list with children content (rendered only when selected)"),t("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list.`),t(R,{mdxType:"Canvas"},t(H,{story:hn,name:"Single-choice or multi-choice list with children content (rendered only when selected)",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{story:gn,name:"Example",height:"160px",mdxType:"Story"})),t(ee,{story:"Example",mdxType:"ArgsTable"}))}kd.isMDXComponent=!0;const Ld=dn;Ld.storyName="Single choice list";const _d=pn;_d.storyName="Single choice list with error";const Pd=mn;Pd.storyName="Multi-choice list";const wd=yn;wd.storyName="Single-choice or multi-choice list with children content (always rendered)";const Md=hn;Md.storyName="Single-choice or multi-choice list with children content (rendered only when selected)";const Nd=gn;Nd.storyName="Example";const ko={title:"Components / Forms / ChoiceList",component:bt,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},value:{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_singleChoiceList_","_errorSingleChoiceList_","_multiChoiceList_","_renderChildChoiceList_","_renderChildWithConditional_","_Example_"]},$P={"Single choice list":"_singleChoiceList_","Single choice list with error":"_errorSingleChoiceList_","Multi-choice list":"_multiChoiceList_","Single-choice or multi-choice list with children content (always rendered)":"_renderChildChoiceList_","Single-choice or multi-choice list with children content (rendered only when selected)":"_renderChildWithConditional_",Example:"_Example_"};ko.parameters=ko.parameters||{};ko.parameters.docs=M(y({},ko.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:$P,mdxComponentAnnotations:ko},t(kd,null))});var EP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",singleChoiceList:dn,errorSingleChoiceList:pn,multiChoiceList:mn,renderChildChoiceList:yn,renderChildWithConditional:hn,Example:gn,_singleChoiceList_:Ld,_errorSingleChoiceList_:_d,_multiChoiceList_:Pd,_renderChildChoiceList_:wd,_renderChildWithConditional_:Md,_Example_:Nd,default:ko}),mc=Object.freeze,FP=Object.defineProperty,Bd=(e,o)=>mc(FP(e,"raw",{value:mc(o||e.slice())})),yc,hc;const qs=e=>({components:{Card:Ht,Collapsible:va,Stack:Ve,Button:ne,TextContainer:dt,Link:Ta},setup(){const o=L(!0);return{args:e,open:o,handleToggle:()=>{o.value=!o.value}}},template:`
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
  `}),OP={Template:qs},qP="wrapper";function Id(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(qP,M(y(y({},OP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Behavior / Collapsible",component:va,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},mdxType:"Meta"}),t("h1",null,"Collapsible"),t("p",null,"The collapsible component is used to put long sections of information under a block that merchants can expand or collapse."),t(R,{mdxType:"Canvas"},t(H,{name:"Collapsible",height:"200px",parameters:{docs:{source:{state:"close",code:N(yc||(yc=Bd([`
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
          `])))}}},mdxType:"Story"},qs.bind({}))),t(ee,{story:"Collapsible",mdxType:"ArgsTable"}))}Id.isMDXComponent=!0;const tr=qs.bind({});tr.storyName="Collapsible";tr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N(hc||(hc=Bd([`
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
          `])))}}};const Lo={title:"Components / Behavior / Collapsible",component:va,argTypes:{default:{description:"The content to display inside the collapsible.",table:{type:{summary:null}},control:{disable:!0}},expandOnPrint:{control:{disable:!0}},transition:{control:{disable:!0},table:{type:{summary:"{ duration?: string, timingFunction?: string }"}}}},includeStories:["collapsible"]},RP={Collapsible:"collapsible"};Lo.parameters=Lo.parameters||{};Lo.parameters.docs=M(y({},Lo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:RP,mdxComponentAnnotations:Lo},t(Id,null))});var HP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:qs,collapsible:tr,default:Lo});const Rs=e=>({components:{ColorPicker:gs},setup(){return{color:L("#000000"),args:e}},template:N`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>`}),VP={Template:Rs},UP="wrapper";function Dd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(UP,M(y(y({},VP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / Color Picker",component:gs,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Color picker"),t("p",null,`The color picker is used to let merchants select a color visually.
For example, merchants use the color picker to customize the accent color of the email templates for their shop.`),t(R,{mdxType:"Canvas"},t(H,{name:"Color Picker",height:"210px",parameters:{docs:{source:{code:N`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}},mdxType:"Story"},Rs.bind({}))),t(ee,{story:"Color Picker",mdxType:"ArgsTable"}))}Dd.isMDXComponent=!0;const or=Rs.bind({});or.storyName="Color Picker";or.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}};const _o={title:"Components / Forms / Color Picker",component:gs,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{defaultValue:{summary:"hsb"},type:{summary:null}}}},includeStories:["colorPicker"]},jP={"Color Picker":"colorPicker"};_o.parameters=_o.parameters||{};_o.parameters.docs=M(y({},_o.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:jP,mdxComponentAnnotations:_o},t(Dd,null))});var WP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Rs,colorPicker:or,default:_o});const bn=e=>({components:{Combobox:so,Listbox:lt,ListboxOption:pt,ComboboxTextField:Qa,Icon:ae},template:`
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
  </Combobox>`,data(){return{searchIcon:Ga,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,n){return this.searchValue?this.searchValue===o.value:n===0}}});bn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const fn=e=>({components:{Combobox:so,Listbox:lt,ListboxOption:pt,ComboboxTextField:Qa,Icon:ae,TextContainer:dt,Tag:rn,Stack:Ve},template:`
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
  `,data(){return{searchIcon:Ga,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:"",selectedOptions:["rustic","antique"]}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.selectedOptions.includes(o)?this.selectedOptions=this.selectedOptions.filter(n=>n!==o):this.selectedOptions.push(o)},handleRemoveTag(o){this.selectedOptions=this.selectedOptions.filter(n=>n!==o)}}});fn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const vn=e=>({components:{Combobox:so,Listbox:lt,ListboxOption:pt,ComboboxTextField:Qa,Icon:ae,ListboxLoading:en},template:`
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
  `,data(){return{searchIcon:Ga,searchValue:""}}});vn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const xn=e=>({components:{Combobox:so,Listbox:lt,ListboxOption:pt,ComboboxTextField:Qa,Icon:ae},template:`
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
  </Combobox>`,data(){return{searchIcon:Ga,options:[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}],searchValue:""}},computed:{filteredOptions(){return this.searchValue?this.options.filter(o=>o.value.includes(this.searchValue)):this.options}},methods:{handleOptionSelected(o){this.searchValue=o},isOptionSelected(o,n){return this.searchValue?this.searchValue===o.value:n===0}}});xn.parameters={docs:{source:{code:N`
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
      `}}};const zP={BasicAutocomplete:bn,MultiTagAutocomplete:fn,LoadingAutoComplete:vn,ExampleAutoComplete:xn},GP="wrapper";function $d(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(GP,M(y(y({},zP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / Combobox",component:so,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Combobox"),t("p",null,"The Combobox component implements part of the ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"},"Aria 1.2 combobox"),` specs on a TextField and a popover containing a Listbox.
Like Autocomplete, Combobox allows merchants to quickly search through and select from large collections of options.`),t("br",null),t("br",null),t("h3",null,"Basic autocomplete"),t("p",null,"Use to help merchants complete text input quickly from a list of options."),t(R,{mdxType:"Canvas"},t(H,{story:bn,name:"Basic Autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Multiple tags autocomplete"),t("p",null,"Use to help merchants select multiple options from a list curated by the text input."),t(R,{mdxType:"Canvas"},t(H,{story:fn,name:"Multiple tags autocomplete",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Autocomplete with loading"),t("p",null,"Use to indicate loading state to merchants while option data is processing."),t(R,{mdxType:"Canvas"},t(H,{story:vn,name:"Autocomplete with loading",height:"200px",inline:!1,mdxType:"Story"})),t("h3",null,"Example"),t("font",{color:"red"}," Can not test props on this component due to inline Story. Try it on your own project. "),t(R,{mdxType:"Canvas"},t(H,{story:xn,name:"Example",height:"180px",inline:!1,mdxType:"Story"})),t(ee,{story:"Example",mdxType:"ArgsTable"}))}$d.isMDXComponent=!0;const Ed=bn;Ed.storyName="Basic Autocomplete";const Fd=fn;Fd.storyName="Multiple tags autocomplete";const Od=vn;Od.storyName="Autocomplete with loading";const qd=xn;qd.storyName="Example";const Po={title:"Components / Forms / Combobox",component:so,argTypes:{preferredPosition:{description:"Position to display children content",control:{type:"select",options:["below","above","mostSpace"]},table:{type:{summary:"above | below | mostSpace"}}},"scrolled-to-bottom":{description:"Callback when children scrolled to bottom",control:{disable:!0},table:{type:{summary:"() => void"}}},"default slot":{description:"Children content to display",table:{category:"slots",type:{summary:null}}},activator:{description:"Element that will trigger content of combobox in default slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_BasicAutocomplete_","_MultiTagAutocomplete_","_LoadingAutoComplete_","_ExampleAutoComplete_"]},KP={"Basic Autocomplete":"_BasicAutocomplete_","Multiple tags autocomplete":"_MultiTagAutocomplete_","Autocomplete with loading":"_LoadingAutoComplete_",Example:"_ExampleAutoComplete_"};Po.parameters=Po.parameters||{};Po.parameters.docs=M(y({},Po.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:KP,mdxComponentAnnotations:Po},t($d,null))});var XP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicAutocomplete:bn,MultiTagAutocomplete:fn,LoadingAutoComplete:vn,ExampleAutoComplete:xn,_BasicAutocomplete_:Ed,_MultiTagAutocomplete_:Fd,_LoadingAutoComplete_:Od,_ExampleAutoComplete_:qd,default:Po});const Hs=e=>({components:{Frame:Pt,ContextualSaveBar:Ja,Button:ne},setup(){return{discardHandle:()=>{console.log("nothing saved")},saveForm:()=>{alert("Saved")},CancelSmallMinor:ou}},template:`
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
  `}),YP={Template:Hs},QP="wrapper";function Rd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(QP,M(y(y({},YP),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / Contextual save bar",component:Ja,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Contextual save bar"),t("p",null,"The contextual save bar tells merchants their options once they have made changes to a form on the page. This component is also shown while creating a new object like a product or customer. Merchants can use this component to save or discard their work."),t(R,{mdxType:"Canvas"},t(H,{name:"Contextual save bar",inline:!1,height:"300px",parameters:{docs:{source:{code:N`
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
          `}}},mdxType:"Story"},Hs.bind({}))),t(ee,{story:"Contextual save bar",mdxType:"ArgsTable"}))}Rd.isMDXComponent=!0;const ar=Hs.bind({});ar.storyName="Contextual save bar";ar.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
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
          `}}};const wo={title:"Components / Forms / Contextual save bar",component:Ja,argTypes:{secondaryMenu:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}},contextControl:{table:{category:"Slots",type:{summary:null}},control:{disable:!0}}},includeStories:["contextualSaveBar"]},JP={"Contextual save bar":"contextualSaveBar"};wo.parameters=wo.parameters||{};wo.parameters.docs=M(y({},wo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:JP,mdxComponentAnnotations:wo},t(Rd,null))});var ZP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Hs,contextualSaveBar:ar,default:wo});const Vs=e=>({components:{DatePicker:bs},setup(){const o=L(e.selectedDate),n=sl({month:e.month,year:e.year});return{args:e,selectedDate:o,pickerView:n,handleChange:r=>{console.log(r)},handleMonthChange:({month:r,year:c})=>{n.month=r,n.year=c}}},template:N`<div>
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
  </div>`}),ew={Template:Vs},tw="wrapper";function Hd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(tw,M(y(y({},ew),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / Date Picker",component:bs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},mdxType:"Meta"}),t("h1",null,"Date picker"),t("p",null,"Date pickers let merchants choose dates from a visual calendar that's consistently applied wherever dates need to be selected across Shopify."),t(R,{mdxType:"Canvas"},t(H,{name:"Date Picker",height:"320px",args:{selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0},parameters:{docs:{source:{code:N`
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
          `}}},mdxType:"Story"},Vs.bind({}))),t(ee,{story:"Date Picker",mdxType:"ArgsTable"}))}Hd.isMDXComponent=!0;const Us=Vs.bind({});Us.storyName="Date Picker";Us.args={selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0};Us.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
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
          `}}};const Mo={title:"Components / Forms / Date Picker",component:bs,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},allowRange:{defaultValue:{summary:!1}},multiMonth:{defaultValue:{summary:!1}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},includeStories:["datePicker"]},ow={"Date Picker":"datePicker"};Mo.parameters=Mo.parameters||{};Mo.parameters.docs=M(y({},Mo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:ow,mdxComponentAnnotations:Mo},t(Hd,null))});var aw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vs,datePicker:Us,default:Mo});const js=e=>({components:{DescriptionList:fs,Dt:Iu,Dd:Du},setup(){return{args:e}},template:`<DescriptionList v-bind="args">
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
  </DescriptionList>`}),nw={Template:js},sw="wrapper";function Vd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(sw,M(y(y({},nw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Lists and tables  / Description List",component:fs,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Description List"),t("p",null,`Description lists are a way to organize and explain related information.
They're particularly useful when you need to list and define terms such as in a glossary.`),t("font",{color:"#FF7900"},t("strong",null,"Warning:"))," Use component name as case-sensitive (",t("code",null,"<Dt>")," & ",t("code",null,"<Dd>"),") to prevent conflict with ",t("code",null,"<dt>")," ",t("code",null,"<dd>")," HTML element.",t(R,{mdxType:"Canvas"},t(H,{name:"Description List",height:"60px",parameters:{docs:{source:{code:N`
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
          `}}},mdxType:"Story"},js.bind({}))),t(ee,{story:"Description List",mdxType:"ArgsTable"}))}Vd.isMDXComponent=!0;const nr=js.bind({});nr.storyName="Description List";nr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
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
          `}}};const No={title:"Components / Lists and tables  / Description List",component:fs,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["descriptionList"]},iw={"Description List":"descriptionList"};No.parameters=No.parameters||{};No.parameters.docs=M(y({},No.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:iw,mdxComponentAnnotations:No},t(Vd,null))});var lw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:js,descriptionList:nr,default:No});const Ws=e=>({components:{DisplayText:Za},setup(){return{args:e}},template:'<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>'}),rw={Template:Ws},cw="wrapper";function Ud(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(cw,M(y(y({},rw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Titles and text  / Display text",component:Za,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},mdxType:"Meta"}),t("h1",null,"Display Text"),t("p",null,`Display styles make a bold visual statement.
Use them to create impact when the main goal is visual storytelling.
For example, use display text to convince or reassure merchants such as in marketing content or to capture attention during onboarding.`),t(R,{mdxType:"Canvas"},t(H,{name:"Display text",height:"60px",args:{element:"p"},parameters:{docs:{source:{code:N`<DisplayText>Good evening, Dominic.</DisplayText>`}}},mdxType:"Story"},Ws.bind({}))),t(ee,{story:"Display text",mdxType:"ArgsTable"}))}Ud.isMDXComponent=!0;const zs=Ws.bind({});zs.storyName="Display text";zs.args={element:"p"};zs.parameters={storySource:{source:`args => ({
  components: {
    DisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>\`
})`},docs:{source:{code:N`<DisplayText>Good evening, Dominic.</DisplayText>`}}};const Bo={title:"Components / Titles and text  / Display text",component:Za,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},includeStories:["displayText"]},uw={"Display text":"displayText"};Bo.parameters=Bo.parameters||{};Bo.parameters.docs=M(y({},Bo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:uw,mdxComponentAnnotations:Bo},t(Ud,null))});var dw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ws,displayText:zs,default:Bo}),gc=Object.freeze,pw=Object.defineProperty,jd=(e,o)=>gc(pw(e,"raw",{value:gc(o||e.slice())})),bc,fc;const Gs=e=>({components:{NoteMinor:Mr,ExceptionList:$u,ExceptionListItem:vs},setup(){return{args:e,NoteMinor:Mr,DiscountsMajor:Em}},template:`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>`}),mw={Template:Gs},yw="wrapper";function Wd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(yw,M(y(y({},mw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Lists and tables / Exception List",component:vs,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Exception List"),t("p",null,"Use exception lists to help merchants notice important, standout information that adds extra context to a task. Exception lists often consist of a title and description. Each item in the list either has a bullet or icon at the front."),t(R,{mdxType:"Canvas"},t(H,{name:"Exception List",height:"120px",parameters:{docs:{source:{code:N(bc||(bc=jd([`
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
          `])))}}},mdxType:"Story"},Gs.bind({}))),t(ee,{story:"Exception List",mdxType:"ArgsTable"}))}Wd.isMDXComponent=!0;const sr=Gs.bind({});sr.storyName="Exception List";sr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N(fc||(fc=jd([`
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
          `])))}}};const Io={title:"Components / Lists and tables / Exception List",component:vs,argTypes:{default:{table:{disable:!0}}},includeStories:["exceptionList"]},hw={"Exception List":"exceptionList"};Io.parameters=Io.parameters||{};Io.parameters.docs=M(y({},Io.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:hw,mdxComponentAnnotations:Io},t(Wd,null))});var gw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Gs,exceptionList:sr,default:Io});const Ks=(e,{argTypes:o})=>({props:Object.keys(o),components:{FooterHelp:xs},template:`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>`}),bw={Template:Ks},fw="wrapper";function zd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(fw,M(y(y({},bw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Navigation / Footer help",component:xs,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Footer help"),t("p",null,"Footer help is used to refer merchants to more information related to the product or feature they're using."),t(R,{mdxType:"Canvas"},t(H,{name:"Footer help",parameters:{docs:{source:{code:N`
            <FooterHelp>Footer help content</FooterHelp>
          `}}},mdxType:"Story"},Ks.bind({}))),t(ee,{story:"Footer help",mdxType:"ArgsTable"}))}zd.isMDXComponent=!0;const ir=Ks.bind({});ir.storyName="Footer help";ir.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <FooterHelp>Footer help content</FooterHelp>
          `}}};const Do={title:"Components / Navigation / Footer help",component:xs,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},includeStories:["footerHelp"]},vw={"Footer help":"footerHelp"};Do.parameters=Do.parameters||{};Do.parameters.docs=M(y({},Do.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:vw,mdxComponentAnnotations:Do},t(zd,null))});var xw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ks,footerHelp:ir,default:Do}),vc=Object.freeze,Tw=Object.defineProperty,Gd=(e,o)=>vc(Tw(e,"raw",{value:vc(o||e.slice())})),xc,Tc;const Xs=e=>({components:{Frame:Pt,TopBar:cn,TopBarUserMenu:Wl,TopBarMenu:Ps,Icon:ae,TopBarSearchField:jl,VisuallyHidden:Ge,ActionList:Fe,NavigationSection:Rl,Navigation:on,Loading:tn,ContextualSaveBar:Ja,Button:ne,Toast:ln},data(){return{isUserMenuOpen:!1,isSecondaryMenuOpen:!1,isSearchActive:!1,searchValue:"",isCollapsed:!1,isLoading:!1,isDirty:!1,toastActive:!1,userMenuAction:[{items:[{content:"Back to Shopify",icon:ya}]},{items:[{content:"Community forums"}]}],userMenuMessage:{title:"Another Message",description:"This is a description of message",action:{onClick:this.clickHandle,content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}},navItems2:[{label:"Dashboard",icon:Nr(Om),onClick:this.toggleIsLoading},{label:"Qikify Orders",icon:Nr(Fm),onClick:this.toggleIsLoading}]}},methods:{handleSearchChange(o){this.isSearchActive=o.length>0},handleSearchResultsDismiss(){this.searchValue="",this.isSearchActive=!1},toggleUserMenu(){this.isUserMenuOpen=!this.isUserMenuOpen},toggleIsSecondaryMenuOpen(){this.isSecondaryMenuOpen=!this.isSecondaryMenuOpen},clickHandle(){alert("clicked")},toggleCollapsed(){this.isCollapsed=!this.isCollapsed},toggleToastActive(){this.toastActive=!this.toastActive},toggleIsLoading(){this.isLoading=!this.isLoading},toggleIsDirty(){this.isDirty=!this.isDirty}},setup(){return{logo:{width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},navItems:[{label:"Back to Shopify",icon:ya}],QuestionMarkMajor:nu,CirclePlusOutlineMinor:su}},template:`
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
  `}),Sw={Template:Xs},Aw="wrapper";function Kd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(Aw,M(y(y({},Sw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Structure / Frame",component:Pt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Frame"),t("p",null,"The frame component, while not visible in the user interface itself, provides the structure for an application. It wraps the main elements and houses the primary ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-navigation--navigation"},"navigation"),", ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-top-bar--top-bar"},"top bar"),", ",t("a",{parentName:"p",href:"?path=/docs/components-feedback-indicators-toast--toast"},"toast"),", and ",t("a",{parentName:"p",href:"?path=/docs/components-forms-contextual-save-bar--contextual-save-bar"},"contextual save bar")," components."),t(R,{mdxType:"Canvas"},t(H,{name:"Frame",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:N(xc||(xc=Gd([`
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
          `])))}}},mdxType:"Story"},Xs.bind({}))),t(ee,{story:"Frame",mdxType:"ArgsTable"}))}Kd.isMDXComponent=!0;const lr=Xs.bind({});lr.storyName="Frame";lr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N(Tc||(Tc=Gd([`
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
          `])))}}};const $o={title:"Components / Structure / Frame",component:Pt,argTypes:{"navigation-dismiss":{description:"A callback function to handle clicking the mobile navigation dismiss button",table:{type:{summary:null}},control:{disable:!0}},default:{table:{disable:!0}},globalRibbon:{description:"Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame",table:{type:{summary:null}},control:{disable:!0}},navigation:{description:"Accepts a navigation component that will be rendered in the left sidebar of an application frame",table:{type:{summary:null}},control:{disable:!0}},topBar:{description:"Accepts a top bar component that will be rendered at the top-most portion of an application frame",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["frame"]},Cw={Frame:"frame"};$o.parameters=$o.parameters||{};$o.parameters.docs=M(y({},$o.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Cw,mdxComponentAnnotations:$o},t(Kd,null))});var kw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Xs,frame:lr,default:$o});const Ys=e=>({components:{Heading:Ot},setup(){return{args:e}},template:`
    <Heading v-bind="args">
      Online store dashboard
    </Heading>
  `}),Lw={Template:Ys},_w="wrapper";function Xd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(_w,M(y(y({},Lw),o),{components:e,mdxType:"MDXLayout"}),t("h1",null,"Heading"),t("p",null,`Headings are used as the titles of each major section of a page in the interface.
For example, card components generally use headings as their title.`),t(J,{title:"Components / Titles and text / Heading",component:Ot,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t(R,{mdxType:"Canvas"},t(H,{story:Ys,name:"Heading",height:"50px",mdxType:"Story"})),t(ee,{story:"Heading",mdxType:"ArgsTable"}))}Xd.isMDXComponent=!0;const Yd=Ys;Yd.storyName="Heading";const Eo={title:"Components / Titles and text / Heading",component:Ot,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},Pw={Heading:"_Template_"};Eo.parameters=Eo.parameters||{};Eo.parameters.docs=M(y({},Eo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Pw,mdxComponentAnnotations:Eo},t(Xd,null))});var ww=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ys,_Template_:Yd,default:Eo}),Sc=Object.freeze,Mw=Object.defineProperty,Qd=(e,o)=>Sc(Mw(e,"raw",{value:Sc(o||e.slice())})),Ac,Cc;const Qs=e=>({components:{Icon:ae},setup(){if(e.source==="CirclePlusMinor")return{args:e,source:iu};if(e.source==="BehaviorMajor")return{args:e,source:qm};if(e.source==="placeholder")return{args:e,source:"placeholder"}},template:'<Icon :source="source" :color="args.color" :backdrop="args.backdrop" :accessibility-label="args.accessibilityLabel" />'}),Nw={Template:Qs},Bw="wrapper";function Jd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(Bw,M(y(y({},Nw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Images and icons / Icon",component:ae,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Icon"),t("p",null,`Icons are used to visually communicate core parts of the product and available actions.
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
`)),t("h3",null,t("strong",{parentName:"h3"},"Demo & Properties")),t(R,{mdxType:"Canvas"},t(H,{name:"Icon",height:"30px",args:{source:"CirclePlusMinor"},parameters:{docs:{source:{code:N(Ac||(Ac=Qd([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}},mdxType:"Story"},Qs.bind({}))),t(ee,{story:"Icon",mdxType:"ArgsTable"}))}Jd.isMDXComponent=!0;const Js=Qs.bind({});Js.storyName="Icon";Js.args={source:"CirclePlusMinor"};Js.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N(Cc||(Cc=Qd([`
            <Icon :source="CirclePlusMinor" />
            <script setup>
            import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
            <\/script>
          `])))}}};const Fo={title:"Components / Images and icons / Icon",component:ae,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["icon"]},Iw={Icon:"icon"};Fo.parameters=Fo.parameters||{};Fo.parameters.docs=M(y({},Fo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Iw,mdxComponentAnnotations:Fo},t(Jd,null))});var Dw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Qs,icon:Js,default:Fo});const Zs=e=>({components:{InlineError:no},setup(){return{args:e}},template:'<InlineError v-bind="args"/>'}),$w={Template:Zs},Ew="wrapper";function Zd(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(Ew,M(y(y({},$w),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / InlineError",component:no,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Inline error"),t("p",null,`Inline errors are brief, in-context messages that tell merchants something went wrong with a single or group of inputs in a form
Use inline errors to help merchants understand why a form input may not be valid and how to fix it.`),t(R,{mdxType:"Canvas"},t(H,{name:"InlineError",args:{message:"Store name is required",fieldID:"myFieldID"},parameters:{docs:{source:{code:N`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}},mdxType:"Story"},Zs.bind({}))),t(ee,{story:"InlineError",mdxType:"ArgsTable"}))}Zd.isMDXComponent=!0;const ei=Zs.bind({});ei.storyName="InlineError";ei.args={message:"Store name is required",fieldID:"myFieldID"};ei.parameters={storySource:{source:`args => ({
  components: {
    InlineError
  },

  setup() {
    return {
      args
    };
  },

  template: \`<InlineError v-bind="args"/>\`
})`},docs:{source:{code:N`
            <InlineError fieldID="myFieldID" message="Store name is required"/>
          `}}};const Oo={title:"Components / Forms / InlineError",component:no,argTypes:{message:{control:{type:"text"},table:{type:{summary:"string | component"}}},default:{table:{disable:!0}}},includeStories:["inlineError"]},Fw={InlineError:"inlineError"};Oo.parameters=Oo.parameters||{};Oo.parameters.docs=M(y({},Oo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Fw,mdxComponentAnnotations:Oo},t(Zd,null))});var Ow=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zs,inlineError:ei,default:Oo});const ti=e=>({components:{KeyboardKey:Ss},setup(){return{args:e}},template:"<KeyboardKey>{{ args.default }}</KeyboardKey>"}),qw={Template:ti},Rw="wrapper";function ep(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(Rw,M(y(y({},qw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Images and icons / Keyboard Key",component:Ss,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Keyboard Key"),t("p",null,"Keyboard key is used to educate merchants about keyboard shortcuts."),t(R,{mdxType:"Canvas"},t(H,{name:"Keyboard Key",height:"50px",args:{default:"Ctrl"},parameters:{docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}},mdxType:"Story"},ti.bind({}))),t(ee,{story:"Keyboard Key",mdxType:"ArgsTable"}))}ep.isMDXComponent=!0;const oi=ti.bind({});oi.storyName="Keyboard Key";oi.args={default:"Ctrl"};oi.parameters={storySource:{source:`args => ({
  components: {
    KeyboardKey
  },

  setup() {
    return {
      args
    };
  },

  template: '<KeyboardKey>{{ args.default }}</KeyboardKey>'
})`},docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}};const qo={title:"Components / Images and icons / Keyboard Key",component:Ss,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},includeStories:["keyboardKey"]},Hw={"Keyboard Key":"keyboardKey"};qo.parameters=qo.parameters||{};qo.parameters.docs=M(y({},qo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Hw,mdxComponentAnnotations:qo},t(ep,null))});var Vw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ti,keyboardKey:oi,default:qo});const ai=e=>({components:{Layout:ft,LayoutSection:wt,AnnotatedSection:Ut,TextField:Le},template:`
  <Layout>
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),ni=e=>({components:{Layout:ft,LayoutSection:wt,AnnotatedSection:Ut,TextField:Le},template:`
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
  </Layout>`}),si=e=>({components:{Layout:ft,LayoutSection:wt,AnnotatedSection:Ut,TextField:Le},template:`
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
  </Layout>`}),ii=e=>({components:{Layout:ft,LayoutSection:wt,AnnotatedSection:Ut,TextField:Le},template:`
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
  </Layout>`}),Tn=e=>({components:{Layout:ft,LayoutSection:wt,AnnotatedSection:Ut,TextField:Le,FormLayout:Ts},template:`
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
  </Layout>`});Tn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const Sn=e=>({components:{Layout:ft,LayoutSection:wt,AnnotatedSection:Ut,TextField:Le,FormLayout:Ts},template:`
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
  </Layout>`});Sn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const li=e=>({components:{Layout:ft,LayoutSection:wt,AnnotatedSection:Ut,TextField:Le},setup(){return{args:e}},template:`
  <Layout v-bind="args">
    <LayoutSection>
      <TextField>
        <template #label>Text field</template>
      </TextField>
    </LayoutSection>
  </Layout>`}),Uw={OneColLayout:ai,TwoColLayoutDW:ni,TwoColLayoutSW:si,ThreeColLayoutSW:ii,AnnotatedLayout:Tn,AnnotatedBannerLayout:Sn,Example:li},jw="wrapper";function tp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(jw,M(y(y({},Uw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Structure / Layout",component:ft,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},mdxType:"Meta"}),t("h1",null,"Layout"),t("p",null,`The layout component is used to create the main layout on a page.
Layouts sections come in three main configurations: one-column, two-column, and annotated.
One and two column layouts can be combined in the same page.
Annotated layouts should be used on their own and only on settings pages.`),t("br",null),t("br",null),t("h3",null,"One-column layout"),t("p",null,`Use to have a single section on its own in a full-width container.
Use for simple pages and as a container for banners and other full-width content.`),t(R,{mdxType:"Canvas"},t(H,{name:"One column layout",parameters:{docs:{source:{state:"close",code:N`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},ai.bind({}))),t("h3",null,"Two columns with primary and secondary widths"),t("p",null,`Use to follow a normal section with a secondary section to create a 2/3 + 1/3 layout on detail pages (such as individual product or order pages).
Can also be used on any page that needs to structure a lot of content. This layout stacks the columns on small screens.`),t(R,{mdxType:"Canvas"},t(H,{name:"Two columns (different width)",parameters:{docs:{source:{state:"close",code:N`
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
          `}}},mdxType:"Story"},ni.bind({}))),t("h3",null,"Two columns with equal width"),t("p",null,`Use to create a \xBD + \xBD layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(R,{mdxType:"Canvas"},t(H,{name:"Two columns (same width)",parameters:{docs:{source:{state:"close",code:N`
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
          `}}},mdxType:"Story"},si.bind({}))),t("h3",null,"Three columns with equal width"),t("p",null,`Use to create a \u2153 + \u2153 + \u2153 layout. Can be used to display content of equal importance.
This layout will stack the columns on small screens.`),t(R,{mdxType:"Canvas"},t(H,{name:"Three columns (same width)",parameters:{docs:{source:{state:"close",code:N`
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
          `}}},mdxType:"Story"},ii.bind({}))),t("h3",null,"Annotated layout"),t("p",null,`Use for settings pages. When settings are grouped thematically in annotated sections,
the title and description on each section helps merchants quickly find the setting they're looking for.`),t(R,{mdxType:"Canvas"},t(H,{story:Tn,name:"Annotated layout",mdxType:"Story"})),t("h3",null,"Annotated layout with Banner at the top"),t("p",null,"Use for settings pages that need a banner or other content at the top."),t(R,{mdxType:"Canvas"},t(H,{story:Sn,name:"Annotated layout (with Banner)",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{name:"Example",height:"100px",parameters:{docs:{source:{code:N`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}},mdxType:"Story"},li.bind({}))),t(ee,{story:"Example",mdxType:"ArgsTable"}))}tp.isMDXComponent=!0;const rr=ai.bind({});rr.storyName="One column layout";rr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N`
          <Layout>
            <LayoutSection>
              <TextField>
                <template #label>Text field</template>
              </TextField>
            </LayoutSection>
          </Layout>\n
          import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const cr=ni.bind({});cr.storyName="Two columns (different width)";cr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N`
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
          `}}};const ur=si.bind({});ur.storyName="Two columns (same width)";ur.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N`
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
          `}}};const dr=ii.bind({});dr.storyName="Three columns (same width)";dr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N`
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
          `}}};const op=Tn;op.storyName="Annotated layout";const ap=Sn;ap.storyName="Annotated layout (with Banner)";const pr=li.bind({});pr.storyName="Example";pr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
            <Layout>
              <LayoutSection>
                <TextField>
                  <template #label>Text field</template>
                </TextField>
              </LayoutSection>
            </Layout>\n
            import { Layout, LayoutSection, TextField } from '@/polaris-vue';
          `}}};const Ro={title:"Components / Structure / Layout",component:ft,argTypes:{default:{table:{disable:!0}},secondary:{description:"Secondary width",table:{category:"section props",type:{summary:"boolean"}}},fullWidth:{description:"Make section have full width",table:{category:"section props",type:{summary:"boolean"}}},oneHalf:{description:"Use for 1/2 + 1/2 layout",table:{category:"section props",type:{summary:"boolean"}}},oneThird:{description:"use for 1/3 + 1/3 + 1/3 layout",table:{category:"section props",type:{summary:"boolean"}}}},includeStories:["oneColumnLayout","twoColumnsDifferentWidth","twoColumnsSameWidth","threeColumnsSameWidth","_AnnotatedLayout_","_AnnotatedBannerLayout_","example"]},Ww={"One column layout":"oneColumnLayout","Two columns (different width)":"twoColumnsDifferentWidth","Two columns (same width)":"twoColumnsSameWidth","Three columns (same width)":"threeColumnsSameWidth","Annotated layout":"_AnnotatedLayout_","Annotated layout (with Banner)":"_AnnotatedBannerLayout_",Example:"example"};Ro.parameters=Ro.parameters||{};Ro.parameters.docs=M(y({},Ro.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Ww,mdxComponentAnnotations:Ro},t(tp,null))});var zw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",OneColLayout:ai,TwoColLayoutDW:ni,TwoColLayoutSW:si,ThreeColLayoutSW:ii,AnnotatedLayout:Tn,AnnotatedBannerLayout:Sn,Example:li,oneColumnLayout:rr,twoColumnsDifferentWidth:cr,twoColumnsSameWidth:ur,threeColumnsSameWidth:dr,_AnnotatedLayout_:op,_AnnotatedBannerLayout_:ap,example:pr,default:Ro});const ri=e=>({components:{Link:Ta},setup(){return{args:e}},template:'<Link v-bind="args">Fulfilling orders</Link>'}),Gw={Template:ri},Kw="wrapper";function np(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(Kw,M(y(y({},Gw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Navigation / Link",component:Ta,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Link"),t("p",null,"Links take users to another place, and usually appear within or directly following a sentence."),t("p",null,"For actions that aren't related to navigation, use the ",t("a",{parentName:"p",href:"/docs/components-actions-button--button"},"button component.")),t(R,{mdxType:"Canvas"},t(H,{name:"Link",parameters:{docs:{source:{code:N`
            <Link>Fulfilling orders</Link>
          `}}},mdxType:"Story"},ri.bind({}))),t(ee,{story:"Link",mdxType:"ArgsTable"}))}np.isMDXComponent=!0;const mr=ri.bind({});mr.storyName="Link";mr.parameters={storySource:{source:`args => ({
  components: {
    Link
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Link v-bind="args">Fulfilling orders</Link>\`
})`},docs:{source:{code:N`
            <Link>Fulfilling orders</Link>
          `}}};const Ho={title:"Components / Navigation / Link",component:Ta,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},includeStories:["link"]},Xw={Link:"link"};Ho.parameters=Ho.parameters||{};Ho.parameters.docs=M(y({},Ho.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Xw,mdxComponentAnnotations:Ho},t(np,null))});var Yw=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ri,link:mr,default:Ho});const ci=e=>({components:{List:Sa,ListItem:As},setup(){return{args:e}},template:`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>`}),Qw={Template:ci},Jw="wrapper";function sp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(Jw,M(y(y({},Qw),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Lists and tables / List",component:Sa,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"List"),t("p",null,"Lists display a set of related text-only content. Each list item begins with a bullet or a number."),t(R,{mdxType:"Canvas"},t(H,{name:"List",height:"80px",parameters:{docs:{source:{code:N`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}},mdxType:"Story"},ci.bind({}))),t(ee,{story:"List",mdxType:"ArgsTable"}))}sp.isMDXComponent=!0;const yr=ci.bind({});yr.storyName="List";yr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}};const Vo={title:"Components / Lists and tables / List",component:Sa,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},includeStories:["list"]},Zw={List:"list"};Vo.parameters=Vo.parameters||{};Vo.parameters.docs=M(y({},Vo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:Zw,mdxComponentAnnotations:Vo},t(sp,null))});var eM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ci,list:yr,default:Vo});const An=e=>({components:{Listbox:lt,ListboxOption:pt},template:`
  <Listbox accessibilityLabel="Basic Listbox example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});An.parameters={docs:{source:{state:"close",code:N`
      <Listbox accessibilityLabel="Basic Listbox example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const Cn=e=>({components:{Listbox:lt,ListboxOption:pt,ListboxLoading:en},template:`
  <Listbox accessibilityLabel="Listbox with loading example">
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});Cn.parameters={docs:{source:{state:"close",code:N`
      <Listbox accessibilityLabel="Listbox with loading example">
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const kn=e=>({components:{Listbox:lt,ListboxOption:pt,ListboxAction:Cs},template:`
  <Listbox accessibilityLabel="Listbox with Action example">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
  </Listbox>`});kn.parameters={docs:{source:{state:"close",code:N`
      <Listbox accessibilityLabel="Listbox with Action example">
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
      </Listbox>
      `}}};const Ln=e=>({components:{Listbox:lt,ListboxOption:pt,ListboxLoading:en,ListboxAction:Cs},template:`
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
  </Listbox>`});Ln.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const _n=e=>({components:{Listbox:lt,ListboxOption:pt,ListboxLoading:en,ListboxAction:Cs},setup(){return{args:e}},template:`
  <Listbox v-bind="args">
    <ListboxAction value="ActionValue" :divider="true">
      <div>Add item</div>
    </ListboxAction>
    <ListboxOption value="1">Option 1</ListboxOption>
    <ListboxOption value="2">Option 2</ListboxOption>
    <ListboxOption value="3">Option 3</ListboxOption>
    <ListboxLoading accessibilityLabel="items are loading"/>
  </Listbox>`});_n.parameters={docs:{source:{code:N`
      <Listbox>
        <ListboxAction value="ActionValue" :divider="true">
          <div>Add item</div>
        </ListboxAction>
        <ListboxOption value="1">Option 1</ListboxOption>
        <ListboxOption value="2">Option 2</ListboxOption>
        <ListboxOption value="3">Option 3</ListboxOption>
        <ListboxLoading accessibilityLabel="items are loading"/>
      </Listbox>
      `}}};const tM={BasicListbox:An,LoadingListbox:Cn,ActionListbox:kn,CustomListbox:Ln,ExampleListbox:_n},oM="wrapper";function ip(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(oM,M(y(y({},tM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Lists and tables / Listbox",component:lt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},mdxType:"Meta"}),t("h1",null,"Listbox"),t("p",null,"The Listbox component is a list component that implements part of ",t("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"},"the Aria 1.2 Listbox specs."),`
It presents a list of options and allows users to select one or more of them.
If you need more structure than the standard component offers, use composition to customize the presentation of these lists by using headers or custom elements.`),t("br",null),t("br",null),t("h3",null,"Basic Listbox"),t("p",null,"Basic implementation of a control element used to let merchants select options"),t(R,{mdxType:"Canvas"},t(H,{story:An,name:"Basic Listbox",mdxType:"Story"})),t("h3",null,"Listbox with Loading"),t("p",null,"Implementation of a control element showing a loading indicator to let merchants know more options are being loaded"),t(R,{mdxType:"Canvas"},t(H,{story:Cn,name:"Listbox with Loading",mdxType:"Story"})),t("h3",null,"Listbox with Action"),t("p",null,"Implementation of a control element used to let merchants take an action"),t(R,{mdxType:"Canvas"},t(H,{story:kn,name:"Listbox with Action",mdxType:"Story"})),t("h3",null,"Listbox with custom element"),t("p",null,"Implementation of a control with custom rendering of options"),t(R,{mdxType:"Canvas"},t(H,{story:Ln,name:"Listbox with custom element",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{story:_n,name:"Example",height:"180px",mdxType:"Story"})),t(ee,{story:"Example",mdxType:"ArgsTable"}))}ip.isMDXComponent=!0;const lp=An;lp.storyName="Basic Listbox";const rp=Cn;rp.storyName="Listbox with Loading";const cp=kn;cp.storyName="Listbox with Action";const up=Ln;up.storyName="Listbox with custom element";const dp=_n;dp.storyName="Example";const Uo={title:"Components / Lists and tables / Listbox",component:lt,argTypes:{default:{table:{disable:!0}},accessibilityLabel:{defaultValue:"Listbox example"},select:{description:"Callback when an option is selected",control:{disable:!0},table:{type:{summary:"(value: string) => void"}}},children:{description:"Content to display inside Listbox by slot",table:{type:{summary:"ListboxOption|ListboxAction|ListboxLoading"}}},"ListboxOption - value":{description:"Unique item values",table:{category:"Listbox Option props",type:{summary:"string"}}},"listboxOption - accessibilityLabel":{description:"Visually hidden text for screen readers",table:{category:"Listbox Option props",type:{summary:"string"}}},"ListboxOption - selected":{description:"Option is selected",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - disabled":{description:"Option is disabled",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxOption - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Option props",type:{summary:"boolean"}}},"ListboxAction - icon":{description:"Icon for option",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxAction - value":{description:"Unique item values",table:{category:"Listbox Action props",type:{summary:"string"}}},"ListboxAction - selected":{description:"Option is selected",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - disabled":{description:"Option is disabled",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - divider":{description:"Adds a border-bottom to the Option",table:{category:"Listbox Action props",type:{summary:"boolean"}}},"ListboxAction - selected":{description:"Icon for action",table:{category:"Listbox Action props",type:{summary:'SVG component|"placeholder"|svg html string'}}},"ListboxLoading- accessibilityLabel":{description:"Icon for action",table:{category:"Listbox Loading props",type:{summary:"string"}}}},includeStories:["_BasicListbox_","_LoadingListbox_","_ActionListbox_","_CustomListbox_","_ExampleListbox_"]},aM={"Basic Listbox":"_BasicListbox_","Listbox with Loading":"_LoadingListbox_","Listbox with Action":"_ActionListbox_","Listbox with custom element":"_CustomListbox_",Example:"_ExampleListbox_"};Uo.parameters=Uo.parameters||{};Uo.parameters.docs=M(y({},Uo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:aM,mdxComponentAnnotations:Uo},t(ip,null))});var nM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",BasicListbox:An,LoadingListbox:Cn,ActionListbox:kn,CustomListbox:Ln,ExampleListbox:_n,_BasicListbox_:lp,_LoadingListbox_:rp,_ActionListbox_:cp,_CustomListbox_:up,_ExampleListbox_:dp,default:Uo});const ui=e=>({components:{Loading:tn,Frame:Pt,Button:ne},data(){return{isActive:!1}},setup(){return{args:e}},template:`<Frame>
    <Loading v-if="isActive" />
    <br/>
    <Button @click="isActive = !isActive">Toggle loading</Button>
  </Frame>`}),sM={Template:ui},iM="wrapper";function pp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(iM,M(y(y({},sM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Feedback indicators / Loading",component:tn,argTypes:{disabled:{table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Loading"),t("p",null,"The loading component is used to indicate to merchants that a page is loading or an upload is processing."),t(R,{mdxType:"Canvas"},t(H,{name:"Loading",inline:!1,height:"100px",parameters:{docs:{source:{code:N`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}},mdxType:"Story"},ui.bind({}))),t(ee,{story:"Loading",mdxType:"ArgsTable"}))}pp.isMDXComponent=!0;const hr=ui.bind({});hr.storyName="Loading";hr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
            <Frame><Loading v-if="isActive" /></Frame>
          `}}};const jo={title:"Components / Feedback indicators / Loading",component:tn,argTypes:{disabled:{table:{type:{summary:null}}}},includeStories:["loading"]},lM={Loading:"loading"};jo.parameters=jo.parameters||{};jo.parameters.docs=M(y({},jo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:lM,mdxComponentAnnotations:jo},t(pp,null))});var rM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ui,loading:hr,default:jo}),kc=Object.freeze,cM=Object.defineProperty,di=(e,o)=>kc(cM(e,"raw",{value:kc(o||e.slice())})),Lc,_c,Pc,wc;const pi=(e,{argTypes:o})=>({components:{ModalSection:ha,TextContainer:dt,Button:ne,Modal:io},data(){return{active:!0}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Modal>`}),Ba=e=>({components:{Modal:io,Button:ne,ModalSection:ha,TextContainer:dt},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleScrolledToBottom(){alert("Scrolled to bottom")}},template:`
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
  `});Ba.storyName="With scroll listener";Ba.parameters={docs:{source:{code:N(Lc||(Lc=di([`
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
        `])))}}};const Ia=e=>({components:{Modal:io,Button:ne,Stack:Ve,StackItem:st,TextField:Le,TextContainer:dt,ModalSection:ha},data(){return{active:!0}},methods:{toggle(){this.active=!this.active},handleClick(){alert("Copy to clipboard successful")}},template:`
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
    </Modal>`});Ia.storyName="With primary action";Ia.parameters={docs:{source:{code:N(_c||(_c=di([`
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
      `])))}}};const uM={Template:pi,scrollExample:Ba,primaryActionExample:Ia},dM="wrapper";function mp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(dM,M(y(y({},uM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Overlays / Modal",component:io,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Modal"),t("p",null,"Modals are overlays that require merchants to take an action before they can continue interacting with the rest of Shopify. They can be disruptive and should be used thoughtfully and sparingly."),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With primary action"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Ia,height:"500px",inline:!1,name:"_primaryActionExample_",mdxType:"Story"})),t("h3",null,"With scroll listener"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Ba,height:"500px",inline:!1,name:"_scrollExample_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Modal",inline:!1,height:"500px",args:{colorScheme:"light"},parameters:{docs:{source:{code:N(Pc||(Pc=di([`
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
            `])))}}},mdxType:"Story"},pi.bind({}))),t(ee,{story:"Modal",mdxType:"ArgsTable"}))}mp.isMDXComponent=!0;const pM=Ia,mM=Ba,mi=pi.bind({});mi.storyName="Modal";mi.args={colorScheme:"light"};mi.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N(wc||(wc=di([`
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
            `])))}}};const Wo={title:"Components / Overlays / Modal",component:io,argTypes:{close:{description:"Callback when modal is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the modal is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Modal",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the modal",control:{disable:!0},table:{type:{summary:null}}},title:{name:"content",description:"The content for the title of the modal",control:{disable:!0},table:{type:{summary:null}}},footer:{description:"Inner content of the footer",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_primaryActionExample_","_scrollExample_","modal"]},yM={_primaryActionExample_:"_primaryActionExample_",_scrollExample_:"_scrollExample_",Modal:"modal"};Wo.parameters=Wo.parameters||{};Wo.parameters.docs=M(y({},Wo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:yM,mdxComponentAnnotations:Wo},t(mp,null))});var hM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:pi,scrollExample:Ba,primaryActionExample:Ia,_primaryActionExample_:pM,_scrollExample_:mM,modal:mi,default:Wo});const yi=e=>({components:{Frame:Pt,Navigation:on,NavigationSection:Rl},setup(){return{navItems:[{url:"#",label:"Home",icon:Rm},{url:"#",label:"Orders",icon:au},{url:"#",label:"Products",icon:Hm,selected:!0,subNavigationItems:[{url:"#",new:!0,label:"New item"},{url:"#",label:"Active Item",selected:!0},{url:"#",disabled:!0,label:"New item"}]},{url:"#",label:"Marketing",icon:Vm,badge:{content:"Warn",status:"warning"}}],navItems2:[{url:"#",label:"Online Store",icon:Um},{url:"/path/to/place",label:"Secondary action",secondaryAction:{url:"#",accessibilityLabel:"View your online store",icon:jm}}],CirclePlusOutlineMinor:su}},template:`
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
  `}),gM={Template:yi},bM="wrapper";function yp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(bM,M(y(y({},gM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Navigation / Navigation",component:on,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Navigation"),t("p",null,"The navigation component is used to display the primary navigation in the sidebar of the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-frame--frame"},"frame")," of an application. Navigation includes a list of links that merchants use to move between sections of the application."),t(R,{mdxType:"Canvas"},t(H,{name:"Navigation",inline:!1,height:"500px",parameters:{docs:{source:{code:N`
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
          `}}},mdxType:"Story"},yi.bind({}))),t(ee,{story:"Navigation",mdxType:"ArgsTable"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation Section")),t("p",null,"A navigation section groups together related navigation items. Navigation sections can be clarified by a heading. Merchants can use a section to easily find navigation items within a specific category."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"items"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-item"},"Item[]")),t("td",{parentName:"tr",align:null},"A collection of navigation items to be rendered inside the section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing a title for the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"fill"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should take up all vertical space available")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"rollup"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-rollup"},"Rollup[]")),t("td",{parentName:"tr",align:null},"An object determining the collapsing behavior of the navigation section")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-action"},"Action[]")),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to the section title")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"separator"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the section should have a visual separator")))),t("a",{name:"type-item"}),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Navigation section item")),t("p",null,"The content of the navigation component consists of navigation items. Each item is a link or action a merchant can take."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A location for the navigation item to navigate to when clicked")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matches"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to a closely matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"exactMatch"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item should respond to an exactly matching location property")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"matchPaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing a collection of additional paths for the navigation item to respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"excludePaths"),t("td",{parentName:"tr",align:null},"string[]"),t("td",{parentName:"tr",align:null},"A string property providing an explicit collection of paths the navigation item should not respond to")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed next to the navigation. Please prefer minor icons here. If a major icon has to be used, set the ",t("inlineCode",{parentName:"td"},"shouldResizeIcon")," prop to true")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"string ","|"," null"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed in a badge next to the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"label"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property allowing content to be displayed as link text in the navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"disabled"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is disabled")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"new"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Indicate whether the navigation item is new by adding an indicator dot to the parent and badge to the item (overwritten by the badge prop)")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of a navigation item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"selected"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the navigation item is the currently-selected item")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"shouldResizeIcon"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Will allow for major icons to be displayed at the same size as minor icons")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"subNavigationItems"),t("td",{parentName:"tr",align:null},"SubNavigationItem[]"),t("td",{parentName:"tr",align:null},"A collection of navigation items rendered as nested secondary navigation items")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"secondaryAction"),t("td",{parentName:"tr",align:null},"SecondaryAction"),t("td",{parentName:"tr",align:null},"Renders an icon-only action as a supplementary action next to a navigation item")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@click"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on a navigation item")))),t("br",null),t("a",{name:"type-rollup"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section rollup")),t("p",null,"Rollup allows items in a navigation section to roll up and be revealed when they are of use to the merchant."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"after"),t("td",{parentName:"tr",align:null},"number"),t("td",{parentName:"tr",align:null},"A number of items after which the navigation section should be collapsed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"view"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section view action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hide"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property providing content for the section hide action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"activePath"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string property representing the current URL of your application")))),t("br",null),t("a",{name:"type-action"}),t("h3",null,t("strong",{parentName:"h3"},"Navigation section action")),t("p",null,"Action allows a complementary icon-only action to render next to the section title."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"icon"),t("td",{parentName:"tr",align:null},"IconProps","['source']"),t("td",{parentName:"tr",align:null},"An icon to be displayed as the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A visually hidden label for screen readers to understand the content of the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onClick()"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle clicking on the action")))))}yp.isMDXComponent=!0;const gr=yi.bind({});gr.storyName="Navigation";gr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
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
          `}}};const zo={title:"Components / Navigation / Navigation",component:on,argTypes:{default:{table:{disable:!0}},contextControl:{control:{disable:!0},table:{type:{summary:null}}}},includeStories:["navigation"]},fM={Navigation:"navigation"};zo.parameters=zo.parameters||{};zo.parameters.docs=M(y({},zo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:fM,mdxComponentAnnotations:zo},t(yp,null))});var vM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:yi,navigation:gr,default:zo});const hi=e=>({components:{Page:ks,Badge:je,Card:Ht,Button:ne},setup(){return{args:e,handleClick:()=>{console.log("click")}}},template:`
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
  `}),xM={Template:hi},TM="wrapper";function hp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(TM,M(y(y({},xM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Structure / Page",component:ks,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Page"),t("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),t("h4",null,t("strong",{parentName:"h4"},"Related components")),t("ul",null,t("li",{parentName:"ul"},"To lay out the content within a page, use the ",t("a",{parentName:"li",href:"?path=/docs/components-structure-layout"},"layout component"),"."),t("li",{parentName:"ul"},"To add pagination within the context of a list or other page content, use the ",t("a",{parentName:"li",href:"?path=/docs/components-navigation-pagination"},"pagination component"),"."),t("li",{parentName:"ul"},"To add primary and secondary calls to action at the bottom of a page, see the ",t("a",{parentName:"li",href:"?path=/docs/components-structure-page-actions"},"page actions component"),".")),t(R,{mdxType:"Canvas"},t(H,{name:"Page",inline:!1,height:"250px",args:{fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1},parameters:{docs:{source:{code:N`
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
          `}}},mdxType:"Story"},hi.bind({}))),t(ee,{story:"Page",mdxType:"ArgsTable"}),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Breadcrumbs Props")),t("p",null,t("strong",{parentName:"p"},"Example: ")),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`// CallbackAction
<Page :breadcrumbs="[{ content: 'Order', onAction: handleAction }]"></Page>

// LinkAction
<Page :breadcrumbs="[{ content: 'Products', url: '/products' }]"></Page>
`)),t("p",null,t("inlineCode",{parentName:"p"},"CallbackAction")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A unique identifier for the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Content the action displays")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onAction()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when an action takes place")))),t("br",null),t("p",null,t("inlineCode",{parentName:"p"},"LinkAction")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"id"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A unique identifier for the action")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"content"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Content the action displays")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Visually hidden text for screen readers")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"url"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"A destination to link to")))),t("br",null),t("hr",null),t("br",null),t("h3",null,t("strong",{parentName:"h3"},"Pagination Props")),t("p",null,"See the ",t("a",{parentName:"p",href:"?path=/docs/components-navigation-pagination"},"pagination component")," for more details."),t("p",null,t("strong",{parentName:"p"},"Example: ")),t("pre",null,t("code",{parentName:"pre",className:"language-javascript"},`<Page :pagination="{ hasPrevious: true, hasNext: true, onPrevious: handlePrevious, onNext: handleNext }"></Page>
`)),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextKeys"),t("td",{parentName:"tr",align:null},"Key[]"),t("td",{parentName:"tr",align:null},"Keyboard shortcuts for the next button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousKeys"),t("td",{parentName:"tr",align:null},"Key[]"),t("td",{parentName:"tr",align:null},"Keyboard shortcuts for the previous button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextTooltip"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Tooltip for the next button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousTooltip"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Tooltip for the previous button")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"nextURL"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"The URL of the next page")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"previousURL"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"The URL of the previous page")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hasNext"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether there is a next page to show")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"hasPrevious"),t("td",{parentName:"tr",align:null},"Boolean"),t("td",{parentName:"tr",align:null},"Whether there is a previous page to show")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabel"),t("td",{parentName:"tr",align:null},"String"),t("td",{parentName:"tr",align:null},"Accessible label for the pagination")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"accessibilityLabels"),t("td",{parentName:"tr",align:null},"AccessibilityLabels"),t("td",{parentName:"tr",align:null},"Accessible labels for the buttons and UnstyledLinks")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onNext()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when next button is clicked")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"onPrevious()"),t("td",{parentName:"tr",align:null},"Function"),t("td",{parentName:"tr",align:null},"Callback when previous button is clicked")))))}hp.isMDXComponent=!0;const gi=hi.bind({});gi.storyName="Page";gi.args={fullWidth:!0,narrowWidth:!1,title:"3/4 inch Leather pet collar",subtitle:"Perfect for any pet",compactTitle:!1,titleHidden:!1,divider:!1};gi.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
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
          `}}};const Go={title:"Components / Structure / Page",component:ks,argTypes:{paginationProp:{name:"pagination",description:"Page-level pagination, see `Pagination` component",table:{category:"props",type:{summary:"PaginationProps"}}},breadcrumbs:{table:{type:{summary:"CallbackAction | LinkAction"}}},compactTitle:{table:{defaultValue:{summary:"false"}}},divider:{table:{defaultValue:{summary:"false"}}},fullWidth:{table:{defaultValue:{summary:"false"}}},narrowWidth:{table:{defaultValue:{summary:"false"}}},titleHidden:{table:{defaultValue:{summary:"false"}}},default:{description:"The contents of the page",table:{type:{summary:null}},control:{disable:!0}},additionalMetadata:{description:"Additional metadata underneath the sub page title",table:{type:{summary:null}},control:{disable:!0}},additionalNavigation:{table:{type:{summary:"Deprecated"}},control:{disable:!0}},pageTitle:{description:"Important and non-interactive status information shown immediately after the title.",table:{type:{summary:null}},control:{disable:!0}},pagination:{description:"Label for page-level pagination",table:{type:{summary:null}},control:{disable:!0}},primaryAction:{description:"Primary page-level action",table:{type:{summary:null}},control:{disable:!0}},secondaryActions:{description:"Collection of secondary page-level actions",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["page"]},SM={Page:"page"};Go.parameters=Go.parameters||{};Go.parameters.docs=M(y({},Go.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:SM,mdxComponentAnnotations:Go},t(hp,null))});var AM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:hi,page:gi,default:Go}),Mc=Object.freeze,CM=Object.defineProperty,gp=(e,o)=>Mc(CM(e,"raw",{value:Mc(o||e.slice())})),Nc,Bc;const bi=e=>({components:{PageActions:Ls},setup(){return{args:e,handleClick:()=>{console.log("click")}}},template:`
    <PageActions
      :primaryAction="{ content: 'Save', onClick: handleClick }"
      :secondaryActions="[{ content: 'Delete', destructive: true, onClick: handleClick  }, { content: 'Clear', disabled: true }]"
    />
  `}),kM={Template:bi},LM="wrapper";function bp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(LM,M(y(y({},kM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Structure / Page Actions",component:Ls,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Page Actions"),t("p",null,"Page actions let merchants take key actions at the bottom of specific pages in the interface. This is important because sometimes the primary call to action is hard to access when merchants are at the bottom of a page."),t(R,{mdxType:"Canvas"},t(H,{name:"Page Actions",height:"100px",parameters:{docs:{source:{code:N(Nc||(Nc=gp([`
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
          `])))}}},mdxType:"Story"},bi.bind({}))),t(ee,{story:"Page Actions",mdxType:"ArgsTable"}))}bp.isMDXComponent=!0;const br=bi.bind({});br.storyName="Page Actions";br.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N(Bc||(Bc=gp([`
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
          `])))}}};const Ko={title:"Components / Structure / Page Actions",component:Ls,argTypes:{secondaryActions:{table:{type:{summary:"ComplexAction[]"}},control:{disable:!0}},primaryAction:{table:{type:{summary:"DisableableAction && LoadableAction"}},control:{disable:!0}}},includeStories:["pageActions"]},_M={"Page Actions":"pageActions"};Ko.parameters=Ko.parameters||{};Ko.parameters.docs=M(y({},Ko.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:_M,mdxComponentAnnotations:Ko},t(bp,null))});var PM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:bi,pageActions:br,default:Ko}),Ic=Object.freeze,wM=Object.defineProperty,fp=(e,o)=>Ic(wM(e,"raw",{value:Ic(o||e.slice())})),Dc,$c;const fi=e=>({components:{Pagination:an},setup(){return{args:e,handlePrevious:()=>{console.log("previous")},handleNext:()=>{console.log("next")}}},template:`
    <Pagination
      v-bind="args"
      @previous="handlePrevious"
      @next="handleNext"
    >
      Results
    </Pagination>
  `}),MM={Template:fi},NM="wrapper";function vp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(NM,M(y(y({},MM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Navigation / Pagination",component:an,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Pagination"),t("p",null,"Use pagination to let merchants move through an ordered collection of items that has been split into pages. On the web, pagination uses buttons to move back and forth between pages. On iOS and Android, pagination uses infinite scrolling."),t(R,{mdxType:"Canvas"},t(H,{name:"Pagination",inline:!1,height:"100px",args:{hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"},parameters:{docs:{source:{code:N(Dc||(Dc=fp([`
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
          `])))}}},mdxType:"Story"},fi.bind({}))),t(ee,{story:"Pagination",mdxType:"ArgsTable"}))}vp.isMDXComponent=!0;const vi=fi.bind({});vi.storyName="Pagination";vi.args={hasPrevious:!0,hasNext:!0,nextKeys:["k"],previousKeys:["j"],nextTooltip:"Press K",previousTooltip:"Press J"};vi.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N($c||($c=fp([`
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
          `])))}}};const Xo={title:"Components / Navigation / Pagination",component:an,argTypes:{default:{description:"Text to provide more context in between the arrow buttons",table:{type:{summary:null}},control:{disable:!0}},next:{name:"@next",description:"Callback when next button is clicked",table:{type:{summary:null}},control:{disable:!0}},previous:{name:"@previous",description:"Callback when previous button is clicked",table:{type:{summary:null}},control:{disable:!0}}},includeStories:["pagination"]},BM={Pagination:"pagination"};Xo.parameters=Xo.parameters||{};Xo.parameters.docs=M(y({},Xo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:BM,mdxComponentAnnotations:Xo},t(vp,null))});var IM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:fi,pagination:vi,default:Xo}),Ec=Object.freeze,DM=Object.defineProperty,xi=(e,o)=>Ec(DM(e,"raw",{value:Ec(o||e.slice())})),Fc,Oc,qc,Rc;const Ti=(e,{argTypes:o})=>({components:{ActionList:Fe,Button:ne,Popover:He},data(){return{active:!0,items:[{content:"Import file"},{content:"Export file"}]}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Popover>`}),Da=(e,{argTypes:o})=>({components:{ActionList:Fe,Button:ne,Popover:He,Pane:ds,PopoverSection:za},data(){return{active:!0,items:[{content:"Online store"},{content:"Facebook"},{content:"Shopify POS"}]}},methods:{toggleActive(){this.active=!this.active}},template:` <div>
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
  </div>`});Da.storyName="With content and actions";Da.parameters={docs:{source:{code:N(Fc||(Fc=xi([`
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
        `])))}}};const $a=(e,{argTypes:o})=>({components:{Button:ne,Popover:He,FormLayout:Ts,TextField:Le,Select:Aa},data(){return{active:!0,options:[{label:"Tagged with",value:"Tagged with"}],selectedValue:"Tagged with",tagValue:""}},methods:{toggleActive(){this.active=!this.active},handleTagValueChange(n){this.tagValue=n}},template:` <div>
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
  </div>`});$a.storyName="With form components";$a.parameters={docs:{source:{code:N(Oc||(Oc=xi([`
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
        `])))}}};const $M={Template:Ti,ContentAndActions:Da,FormComponents:$a},EM="wrapper";function xp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(EM,M(y(y({},$M),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Overlays / Popover",component:He,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Popover"),t("p",null,"Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page."),t("p",null,"For ActionList usages, use the ",t("a",{parentName:"p",href:"/docs/components-actions-actionlist--action-list"},"ActionList component.")),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("br",null),t("h3",null,"With Content and Actions"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:Da,height:"280px",inline:!1,name:"_ContentAndActions_",mdxType:"Story"})),t("h3",null,"With Form Components"),t(R,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},t(H,{story:$a,height:"280px",inline:!1,name:"_FormComponents_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},t(H,{name:"Popover",inline:!1,height:"300px",args:{colorScheme:"light"},parameters:{docs:{source:{code:N(qc||(qc=xi([`
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
          `])))}}},mdxType:"Story"},Ti.bind({}))),t(ee,{story:"Popover",mdxType:"ArgsTable"}))}xp.isMDXComponent=!0;const FM=Da,OM=$a,Si=Ti.bind({});Si.storyName="Popover";Si.args={colorScheme:"light"};Si.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N(Rc||(Rc=xi([`
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
          `])))}}};const Yo={title:"Components / Overlays / Popover",component:He,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_ContentAndActions_","_FormComponents_","popover"]},qM={_ContentAndActions_:"_ContentAndActions_",_FormComponents_:"_FormComponents_",Popover:"popover"};Yo.parameters=Yo.parameters||{};Yo.parameters.docs=M(y({},Yo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:qM,mdxComponentAnnotations:Yo},t(xp,null))});var RM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ti,ContentAndActions:Da,FormComponents:$a,_ContentAndActions_:FM,_FormComponents_:OM,popover:Si,default:Yo});const Pn=e=>({components:{RadioButton:Ya},setup(){return{args:e}},template:`
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
  </div>`,data(){return{demoValue:"disabled"}}});Pn.parameters={docs:{source:{code:N`
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
      `}}};const HM={Template:Pn},VM="wrapper";function Tp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(VM,M(y(y({},HM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / RadioButton",component:Ya,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Radio button"),t("p",null,"Use radio buttons to present each item in a list of options where merchants must make a single selection."),t(R,{mdxType:"Canvas"},t(H,{story:Pn,name:"RadioButton",mdxType:"Story"})),t(ee,{story:"RadioButton",mdxType:"ArgsTable"}))}Tp.isMDXComponent=!0;const Sp=Pn;Sp.storyName="RadioButton";const Qo={title:"Components / Forms / RadioButton",component:Ya,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_Template_"]},UM={RadioButton:"_Template_"};Qo.parameters=Qo.parameters||{};Qo.parameters.docs=M(y({},Qo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:UM,mdxComponentAnnotations:Qo},t(Tp,null))});var jM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Pn,_Template_:Sp,default:Qo});const Ai=e=>({components:{Scrollable:_t},template:`
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
  </Scrollable>`}),wn=e=>({components:{Scrollable:_t,ScrollTo:Ll},template:`
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
  </Scrollable>`});wn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const Mn=e=>({components:{Scrollable:_t},setup(){return{args:e}},template:`
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
  </Scrollable>`});Mn.parameters={docs:{source:{code:N`
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
      `}}};const WM={DefaultScrollable:Ai,ScrollToExample:wn,Example:Mn},zM="wrapper";function Ap(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(zM,M(y(y({},WM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Behavior / Scrollable",component:_t,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},mdxType:"Meta"}),t("h1",null,"Scrollable"),t("p",null,`The scrollable component is a container for long form content,
such as terms of service, that allows for scrolling so merchants can expose more text as they read.`),t("br",null),t("br",null),t("h3",null,"Default scrollable container"),t("p",null,`Use when you need to make a region within the page independently scrollable.
It's often used in modals and other panes where it's helpful to provide an extra visual cue that content exists below or above the fold.`),t(R,{mdxType:"Canvas"},t(H,{story:Ai,name:"Default scrollable container",mdxType:"Story"})),t("h3",null,"Scroll to child component"),t("p",null,"Use when you need to programmatically scroll a child component into view in the scrollable container."),t(R,{mdxType:"Canvas"},t(H,{story:wn,name:"Scroll to child component",mdxType:"Story"})),t("h3",null,"Example"),t(R,{style:{backgroundColor:"#fff"},mdxType:"Canvas"},t(H,{story:Mn,name:"Example",height:"150px",mdxType:"Story"})),t(ee,{story:"Example",mdxType:"ArgsTable"}))}Ap.isMDXComponent=!0;const Cp=Ai;Cp.storyName="Default scrollable container";const kp=wn;kp.storyName="Scroll to child component";const Lp=Mn;Lp.storyName="Example";const Jo={title:"Components / Behavior / Scrollable",component:_t,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},includeStories:["_DefaultScrollable_","_ScrollToExample_","_Example_"]},GM={"Default scrollable container":"_DefaultScrollable_","Scroll to child component":"_ScrollToExample_",Example:"_Example_"};Jo.parameters=Jo.parameters||{};Jo.parameters.docs=M(y({},Jo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:GM,mdxComponentAnnotations:Jo},t(Ap,null))});var KM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultScrollable:Ai,ScrollToExample:wn,Example:Mn,_DefaultScrollable_:Cp,_ScrollToExample_:kp,_Example_:Lp,default:Jo});const Ci=e=>({components:{Select:Aa,Icon:ae},setup(){const o=Wm,n=L("");return{args:e,selectValue:n,iconHintMajor:o}},template:`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}`}),XM={Template:Ci},YM="wrapper";function _p(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(YM,M(y(y({},XM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / Select",component:Aa,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Select"),t("p",null,"Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface."),t("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",t("b",null,"select")," element in html."),t(R,{mdxType:"Canvas"},t(H,{name:"Select",args:{placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"},parameters:{docs:{source:{code:N`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}},mdxType:"Story"},Ci.bind({}))),t(ee,{story:"Select",mdxType:"ArgsTable"}))}_p.isMDXComponent=!0;const ki=Ci.bind({});ki.storyName="Select";ki.args={placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"};ki.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}};const Zo={title:"Components / Forms / Select",component:Aa,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},disabled:{table:{defaultValue:{summary:"false"}}},requiredIndicator:{table:{defaultValue:{summary:"false"}}},modelValue:{table:{disable:!0}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},includeStories:["select"]},QM={Select:"select"};Zo.parameters=Zo.parameters||{};Zo.parameters.docs=M(y({},Zo.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:QM,mdxComponentAnnotations:Zo},t(_p,null))});var JM=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ci,select:ki,default:Zo});const Li=e=>({components:{SkeletonBodyText:nn},setup(){return{args:e}},template:`
      <SkeletonBodyText v-bind:="args"/>
    `}),ZM={Template:Li},eN="wrapper";function Pp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(eN,M(y(y({},ZM),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Feedback indicators",component:nn,mdxType:"Meta"}),t("h1",null,"Skeleton body text"),t("p",null,"Skeleton body text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),t(R,{mdxType:"Canvas"},t(H,{name:"SkeletonBodyText",args:{lines:3},parameters:{docs:{source:{code:N`
                        <SkeletonBodyText v-bind="props"/>
                    `}}},mdxType:"Story"},Li.bind({}))),t(ee,{story:"SkeletonBodyText",mdxType:"ArgsTable"}))}Pp.isMDXComponent=!0;const _i=Li.bind({});_i.storyName="SkeletonBodyText";_i.args={lines:3};_i.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
                        <SkeletonBodyText v-bind="props"/>
                    `}}};const ea={title:"Components / Feedback indicators",component:nn,includeStories:["skeletonBodyText"]},tN={SkeletonBodyText:"skeletonBodyText"};ea.parameters=ea.parameters||{};ea.parameters.docs=M(y({},ea.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:tN,mdxComponentAnnotations:ea},t(Pp,null))});var oN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Li,skeletonBodyText:_i,default:ea});const Pi=e=>({components:{SkeletonDisplayText:sn},setup(){return{args:e}},template:`
      <SkeletonDisplayText v-bind="args"/>
    `}),aN={Template:Pi},nN="wrapper";function wp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(nN,M(y(y({},aN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Feedback indicators",component:sn,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Skeleton display text"),t("p",null,"Skeleton display text is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by merchants. Can be used for content in or outside of a card."),t(R,{mdxType:"Canvas"},t(H,{name:"SkeletonDisplayText",args:{size:"medium"},parameters:{docs:{source:{code:N`
                        <SkeletonDisplayText v-bind="props"/>
                    `}}},mdxType:"Story"},Pi.bind({}))),t(ee,{story:"SkeletonDisplayText",mdxType:"ArgsTable"}))}wp.isMDXComponent=!0;const wi=Pi.bind({});wi.storyName="SkeletonDisplayText";wi.args={size:"medium"};wi.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
                        <SkeletonDisplayText v-bind="props"/>
                    `}}};const ta={title:"Components / Feedback indicators",component:sn,argTypes:{size:{name:"size",description:"Size of the text",options:["small","medium","large","extraLarge"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}}},includeStories:["skeletonDisplayText"]},sN={SkeletonDisplayText:"skeletonDisplayText"};ta.parameters=ta.parameters||{};ta.parameters.docs=M(y({},ta.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:sN,mdxComponentAnnotations:ta},t(wp,null))});var iN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Pi,skeletonDisplayText:wi,default:ta});const Mi=(e,{argTypes:o})=>({components:{Spinner:Ft},setup(){return{args:e}},template:'<Spinner v-bind="args"/>'}),lN={Template:Mi},rN="wrapper";function Mp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(rN,M(y(y({},lN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Feedback indicators / Spinner",component:Ft,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Spinner"),t("p",null,"Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can\u2019t be represented with skeleton loading components, like for data charts."),t(R,{mdxType:"Canvas"},t(H,{name:"Spinner",height:"60px",args:{accessibilityLabel:"Spinner example",size:"large"},parameters:{docs:{source:{code:N`
            <Spinner v-bind="props"/>
          `}}},mdxType:"Story"},Mi.bind({}))),t(ee,{story:"Spinner",mdxType:"ArgsTable"}))}Mp.isMDXComponent=!0;const Ni=Mi.bind({});Ni.storyName="Spinner";Ni.args={accessibilityLabel:"Spinner example",size:"large"};Ni.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <Spinner v-bind="props"/>
          `}}};const oa={title:"Components / Feedback indicators / Spinner",component:Ft,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["spinner"]},cN={Spinner:"spinner"};oa.parameters=oa.parameters||{};oa.parameters.docs=M(y({},oa.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:cN,mdxComponentAnnotations:oa},t(Mp,null))});var uN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Mi,spinner:Ni,default:oa});const Bi=(e,{argTypes:o})=>({components:{Stack:Ve,StackItem:st,Badge:je},setup(){return{args:e}},template:`<Stack v-bind="args">
    <Badge> Paid </Badge>
    <Badge> Processing </Badge>
    <Badge> Fulfilled </Badge>
    <Badge> Completed </Badge>
  </Stack>`}),Ea=(e,{argTypes:o})=>({components:{Stack:Ve,StackItem:st,Badge:je},template:`<Stack noItemWrap>
    <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
    <StackItem> <Badge> Processing </Badge> </StackItem>
    <StackItem> <Badge> Completed </Badge> </StackItem>
  </Stack>`});Ea.storyName="Fill the remaining space";Ea.parameters={docs:{source:{code:N`
        <Stack noItemWrap>
          <StackItem :fill="true"> <Badge> Paid </Badge> </StackItem>
          <StackItem> <Badge> Processing </Badge> </StackItem>
          <StackItem> <Badge> Completed </Badge> </StackItem>
        </Stack>
      `}}};const dN={Template:Bi,SingleFillItem:Ea},pN="wrapper";function Np(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(pN,M(y(y({},dN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Structure / Stack",component:Ve,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Stack"),t("p",null,"Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack\u2019s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack."),t("br",null),t("br",null),t("h3",null,"A single item fills the remaining space"),t(R,{mdxType:"Canvas"},t(H,{story:Ea,height:"65px",name:"_SingleFillItem_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{name:"Stack",height:"60px",parameters:{docs:{source:{code:N`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}},mdxType:"Story"},Bi.bind({}))),t(ee,{story:"Stack",mdxType:"ArgsTable"}))}Np.isMDXComponent=!0;const mN=Ea,fr=Bi.bind({});fr.storyName="Stack";fr.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <Stack v-bind="args">
              <Badge> Paid </Badge>
              <Badge> Processing </Badge>
              <Badge> Fulfilled </Badge>
              <Badge> Completed </Badge>
            </Stack>
          `}}};const aa={title:"Components / Structure / Stack",component:Ve,argTypes:{spacing:{name:"spacing",description:"Adjust spacing between elements",options:["extraTight","tight","baseTight","loose","extraLoose","none"],control:{type:"select"},table:{type:{summary:null}}},distribution:{name:"distribution",description:"Adjust horizontal alignment of elements",options:["equalSpacing","leading","trailing","center","fill","fillEvenly"],control:{type:"select"},table:{type:{summary:null}}},alignment:{name:"alignment",description:"Adjust vertical alignment of elements",options:["leading","trailing","center","fill","baseline"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SingleFillItem_","stack"]},yN={_SingleFillItem_:"_SingleFillItem_",Stack:"stack"};aa.parameters=aa.parameters||{};aa.parameters.docs=M(y({},aa.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:yN,mdxComponentAnnotations:aa},t(Np,null))});var hN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Bi,SingleFillItem:Ea,_SingleFillItem_:mN,stack:fr,default:aa});const Ii=e=>({components:{Subheading:qt},setup(){return{args:e}},template:'<Subheading v-bind="args">Accounts</Subheading>'}),gN={Template:Ii},bN="wrapper";function Bp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(bN,M(y(y({},gN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Titles and text  / Subheading",component:qt,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Subheading"),t("p",null,"Subheadings are used for the title of any sub-sections in top-level page sections."),t(R,{mdxType:"Canvas"},t(H,{name:"Subheading",inline:!1,height:"30px",args:{element:"h3"},parameters:{docs:{source:{code:N`
            <Subheading>Accounts</Subheading>
          `}}},mdxType:"Story"},Ii.bind({}))),t(ee,{story:"Subheading",mdxType:"ArgsTable"}))}Bp.isMDXComponent=!0;const Di=Ii.bind({});Di.storyName="Subheading";Di.args={element:"h3"};Di.parameters={storySource:{source:`args => ({
  components: {
    Subheading
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Subheading v-bind="args">Accounts</Subheading>\`
})`},docs:{source:{code:N`
            <Subheading>Accounts</Subheading>
          `}}};const na={title:"Components / Titles and text  / Subheading",component:qt,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},includeStories:["subheading"]},fN={Subheading:"subheading"};na.parameters=na.parameters||{};na.parameters.docs=M(y({},na.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:fN,mdxComponentAnnotations:na},t(Bp,null))});var vN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ii,subheading:Di,default:na}),Hc=Object.freeze,xN=Object.defineProperty,Ip=(e,o)=>Hc(xN(e,"raw",{value:Hc(o||e.slice())})),Vc,Uc;const $i=e=>({components:{Tag:rn},setup(){return{args:e}},methods:{removeHandle(){alert("Removed")},clickHandle(){alert("Clicked")}},template:`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>`}),TN={Template:$i},SN="wrapper";function Dp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(SN,M(y(y({},TN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / Tag",component:rn,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Tag"),t("p",null,"Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants."),t(R,{mdxType:"Canvas"},t(H,{name:"Tag",height:"30px",args:{disabled:!1},parameters:{docs:{source:{code:N(Vc||(Vc=Ip([`
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
          `])))}}},mdxType:"Story"},$i.bind({}))),t(ee,{story:"Tag",mdxType:"ArgsTable"}))}Dp.isMDXComponent=!0;const Ei=$i.bind({});Ei.storyName="Tag";Ei.args={disabled:!1};Ei.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N(Uc||(Uc=Ip([`
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
          `])))}}};const sa={title:"Components / Forms / Tag",component:rn,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{category:"events",type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["tag"]},AN={Tag:"tag"};sa.parameters=sa.parameters||{};sa.parameters.docs=M(y({},sa.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:AN,mdxComponentAnnotations:sa},t(Dp,null))});var CN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:$i,tag:Ei,default:sa});const Nn=e=>({components:{TextContainer:dt},setup(){return{args:e}},template:`
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
  `});Nn.parameters={docs:{source:{code:N`
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
      `}}};const kN={Template:Nn},LN="wrapper";function $p(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(LN,M(y(y({},kN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Titles and text / Text container",component:dt,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},mdxType:"Meta"}),t("h1",null,"Text container"),t("p",null,"A text container is used to wrap text elements such as paragraphs, headings, and lists to give them vertical spacing."),t(R,{mdxType:"Canvas"},t(H,{story:Nn,name:"Text container",height:"250px",mdxType:"Story"})),t(ee,{story:"Text container",mdxType:"ArgsTable"}))}$p.isMDXComponent=!0;const Ep=Nn;Ep.storyName="Text container";const ia={title:"Components / Titles and text / Text container",component:dt,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},_N={"Text container":"_Template_"};ia.parameters=ia.parameters||{};ia.parameters.docs=M(y({},ia.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:_N,mdxComponentAnnotations:ia},t($p,null))});var PN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Nn,_Template_:Ep,default:ia});const Bn=e=>({components:{TextField:Le},template:`
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
  `,data(){return{name:"Polaris"}}});Bn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const In=(e,{argTypes:o})=>({components:{TextField:Le},template:`
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
  </div>`,data(){return{numberData:"1"}}});In.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const Dn=(e,{argTypes:o})=>({components:{TextField:Le},template:`
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
  </div>`,data(){return{address:"156 Xa Dan 2"}}});Dn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const $n=(e,{argTypes:o})=>({components:{TextField:Le,ChoiceList:bt},template:`
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
  </div>`,data(){return{months:"12",choices:[{label:"Gift cards never expire",value:"no"},{label:"Gift cards expire",value:"yes"}],selected:"yes"}}});$n.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const En=(e,{argTypes:o})=>({components:{TextField:Le,Stack:Ve,StackItem:st},template:`
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
  </Stack>`,data(){return{price:"1"}}});En.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const Fn=(e,{argTypes:o})=>({components:{TextField:Le},template:`
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
  `});Fn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const On=(e,{argTypes:o})=>({components:{TextField:Le},template:`
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
  `,data(){return{price:"10"}}});On.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const qn=(e,{argTypes:o})=>({components:{TextField:Le,Select:Aa},template:`
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
  `,data(){return{weight:"10",unit:"kg"}}});qn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const Rn=(e,{argTypes:o})=>({components:{TextField:Le},template:`
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
  `,data(){return{storeName:"Jaded Pixel"}}});Rn.parameters={docs:{source:{state:"close",code:N`
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
      `}}};const Fi=e=>({components:{TextField:Le},setup(){return{args:e}},template:`
    <TextField v-bind="args" autoComplete="off">
      <template #label>Example text field</template>
    </TextField>
  `}),wN={DefaultTextField:Bn,NumberField:In,MultiLineField:Dn,HiddenLabelField:$n,RightAlignedField:En,HelpTextField:Fn,PrefixSuffixField:On,ConnectedField:qn,ClearBtnField:Rn,ExampleField:Fi},MN="wrapper";function Fp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(MN,M(y(y({},wN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Forms / TextField",component:Le,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),t("h1",null,"Text field"),t("p",null,"A text field is an input field that merchants can type into. It has a range of options and supports several text formats including numbers."),t("br",null),t("br",null),t("h3",null,"Default text field"),t("p",null,"Use to allow merchants to provide text input when the expected input is short. For longer input, use the auto grow or multiline options."),t(R,{mdxType:"Canvas"},t(H,{story:Bn,name:"Default text field",mdxType:"Story"})),t("h3",null,"Number field"),t("p",null,"Use when input text should be a number."),t(R,{mdxType:"Canvas"},t(H,{story:In,name:"Number field",mdxType:"Story"})),t("h3",null,"Multiline text field"),t("p",null,`Use when the expected input could be more than one line.
The field will automatically grow to accommodate additional text.`),t(R,{mdxType:"Canvas"},t(H,{story:Dn,name:"Multiline text field",height:"150px",mdxType:"Story"})),t("h3",null,"Text field with hidden label"),t("p",null,`Use to visually hide the label when the text field's purpose is clear from context.
The label will remain available to screen readers. Use this option with care. In almost all cases, show the label.`),t(R,{mdxType:"Canvas"},t(H,{story:$n,name:"Text field with hidden label",mdxType:"Story"})),t("h3",null,"Text field with right aligned text"),t("p",null,"Use when input text should be aligned right."),t(R,{mdxType:"Canvas"},t(H,{story:En,name:"Text field with right aligned text",mdxType:"Story"})),t("h3",null,"Text field with help text"),t("p",null,`Use to show short instructional content below the text field.
Help text works to help merchants understand how to fix errors that result from incorrect formatting (such as dates or passwords with specific character requirements).
If more explanation is needed, link to the Shopify Help Center.`),t(R,{mdxType:"Canvas"},t(H,{story:Fn,name:"Text field with help text",mdxType:"Story"})),t("h3",null,"Text field with prefix or suffix"),t("p",null,"Use as a special form of help text that works best inline."),t("ul",null,t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use a prefix for things like currency symbols (\u201C$\u201D, \u201C\xA5\u201D, \u201C\xA3\u201D).")),t("li",{parentName:"ul"},t("p",{parentName:"li"},"Use suffix for things like units of measure (\u201Cin\u201D, \u201Ccm\u201D)."))),t(R,{mdxType:"Canvas"},t(H,{story:On,name:"Text field with prefix or suffix",mdxType:"Story"})),t("h3",null,"Text field with connected fields"),t("p",null,"Use when a text field and several related fields make up a logical unit."),t("p",null,`If inputting weight as a number and a separate unit of measurement,
use a text field with a select dropdown menu (for example \u201Ckg\u201D, \u201Clb\u201D) as a connected field.`),t(R,{mdxType:"Canvas"},t(H,{story:qn,name:"Text field with connected fields",mdxType:"Story"})),t("h3",null,"Text field with clear button"),t("p",null,"Use to allow merchants to clear the content from a text field."),t(R,{mdxType:"Canvas"},t(H,{story:Rn,name:"Text field with clear button",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{story:Fi,name:"Example",parameters:{docs:{source:{code:N`
          <TextField v-bind="args" autoComplete="off">
            <template #label>Example text field</template>
          </TextField>
          `}}},mdxType:"Story"})),t(ee,{story:"Example",mdxType:"ArgsTable"}))}Fp.isMDXComponent=!0;const Op=Bn;Op.storyName="Default text field";const qp=In;qp.storyName="Number field";const Rp=Dn;Rp.storyName="Multiline text field";const Hp=$n;Hp.storyName="Text field with hidden label";const Vp=En;Vp.storyName="Text field with right aligned text";const Up=Fn;Up.storyName="Text field with help text";const jp=On;jp.storyName="Text field with prefix or suffix";const Wp=qn;Wp.storyName="Text field with connected fields";const zp=Rn;zp.storyName="Text field with clear button";const Gp=Fi;Gp.storyName="Example";const la={title:"Components / Forms / TextField",component:Le,argTypes:{default:{control:{type:"text"},table:{disable:!0}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"string"}}},ariaActiveDescendant:{control:{type:"text"},table:{type:{summary:"string"}}},ariaAutocomplete:{control:{type:"text"},table:{type:{summary:"string"}}},ariaControls:{control:{type:"text"},table:{type:{summary:"string"}}},ariaExpanded:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},ariaOwns:{control:{type:"text"},table:{type:{summary:"string"}}},autoComplete:{control:{type:"text"},table:{type:{summary:"string"}}},autoFocus:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},clearButton:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},focused:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},inputMode:{control:{type:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},table:{type:{summary:'"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'}}},labelAction:{control:{disable:!0},table:{type:{summary:"string"}}},labelHidden:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},max:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxHeight:{control:{type:"text"},table:{type:{summary:"string | number"}}},maxLength:{table:{type:{summary:"number"}}},min:{control:{type:"text"},table:{type:{summary:"string | number"}}},minLength:{control:{type:"number"},table:{type:{summary:"number"}}},modelValue:{description:"Initial value for the input, v-model is available in this component"},monospaced:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},multiline:{control:{type:"number"},table:{type:{summary:"boolean | number"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},pattern:{control:{type:"text"},table:{type:{summary:"string"}}},placeholder:{control:{type:"text"},table:{type:{summary:"string"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},requiredIndicator:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},role:{control:{type:"text"},table:{type:{summary:"string"}}},showCharacterCount:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},spellCheck:{control:{type:"boolean"},table:{type:{summary:"boolean"}}},step:{control:{type:"number"},table:{type:{summary:"number"}}},type:{control:{type:"select",options:["text","password","email","number","tel","search","url","date","datetime-local","time","month","week","color","file"]},table:{type:{summary:'"text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "datetime-local" | "time" | "month" | "week" | "color" | "file"'}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when value is changed",control:{disable:!0},table:{type:{summary:"(Event) => void"}}},"clear-button-click":{description:"Call back when clear button is clicked",control:{disable:!0},table:{type:{summary:"(id: String) => void"}}},focus:{description:"Callback when input is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"connected-left":{control:{disable:!0},description:"An element connected to the left of the input",table:{type:{summary:"slot"}}},"connected-right":{control:{disable:!0},description:"An element connected to the right of the input",table:{type:{summary:"slot"}}},"help-text":{control:{disable:!0},description:"Additional hint text to display",table:{type:{summary:"slot"}}},label:{control:{disable:!0},description:"Label for the input",table:{type:{summary:"slot"}}},prefix:{control:{disable:!0},description:"Text to display before value",table:{type:{summary:"slot"}}},suffix:{control:{disable:!0},description:"Text to display after value",table:{type:{summary:"slot"}}}},includeStories:["_DefaultTextField_","_NumberField_","_MultiLineField_","_HiddenLabelField_","_RightAlignedField_","_HelpTextField_","_PrefixSuffixField_","_ConnectedField_","_ClearBtnField_","_ExampleField_"]},NN={"Default text field":"_DefaultTextField_","Number field":"_NumberField_","Multiline text field":"_MultiLineField_","Text field with hidden label":"_HiddenLabelField_","Text field with right aligned text":"_RightAlignedField_","Text field with help text":"_HelpTextField_","Text field with prefix or suffix":"_PrefixSuffixField_","Text field with connected fields":"_ConnectedField_","Text field with clear button":"_ClearBtnField_",Example:"_ExampleField_"};la.parameters=la.parameters||{};la.parameters.docs=M(y({},la.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:NN,mdxComponentAnnotations:la},t(Fp,null))});var BN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultTextField:Bn,NumberField:In,MultiLineField:Dn,HiddenLabelField:$n,RightAlignedField:En,HelpTextField:Fn,PrefixSuffixField:On,ConnectedField:qn,ClearBtnField:Rn,ExampleField:Fi,_DefaultTextField_:Op,_NumberField_:qp,_MultiLineField_:Rp,_HiddenLabelField_:Hp,_RightAlignedField_:Vp,_HelpTextField_:Up,_PrefixSuffixField_:jp,_ConnectedField_:Wp,_ClearBtnField_:zp,_ExampleField_:Gp,default:la});const Oi=(e,{argTypes:o})=>({components:{TextStyle:Lt},setup(){return{args:e}},template:'<TextStyle v-bind="args"> Hello </TextStyle>'}),IN={Template:Oi},DN="wrapper";function Kp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(DN,M(y(y({},IN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Titles and text / TextStyle",component:Lt,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"TextStyle"),t("p",null,"Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text."),t(R,{mdxType:"Canvas"},t(H,{name:"TextStyle",height:"60px",parameters:{docs:{source:{code:N`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}},mdxType:"Story"},Oi.bind({}))),t(ee,{story:"TextStyle",mdxType:"ArgsTable"}))}Kp.isMDXComponent=!0;const vr=Oi.bind({});vr.storyName="TextStyle";vr.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}};const ra={title:"Components / Titles and text / TextStyle",component:Lt,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["textStyle"]},$N={TextStyle:"textStyle"};ra.parameters=ra.parameters||{};ra.parameters.docs=M(y({},ra.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:$N,mdxComponentAnnotations:ra},t(Kp,null))});var EN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Oi,textStyle:vr,default:ra});const qi=(e,{argTypes:o})=>({components:{Thumbnail:_s},setup(){return{args:e}},computed:{thumbnailSource(){return e.source==="CirclePlusMinor"?iu:e.source},bindProps(){return{size:e.size,source:this.thumbnailSource,alt:e.alt}}},template:'<Thumbnail v-bind="bindProps" />'}),FN={Template:qi},ON="wrapper";function Xp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(ON,M(y(y({},FN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Images and Icons / Thumbnail",component:_s,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Thumbnail"),t("p",null,"Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context."),t(R,{mdxType:"Canvas"},t(H,{name:"Thumbnail",height:"60px",args:{alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"},parameters:{docs:{source:{code:N`
            <Thumbnail v-bind="props" />
          `}}},mdxType:"Story"},qi.bind({}))),t(ee,{story:"Thumbnail",mdxType:"ArgsTable"}))}Xp.isMDXComponent=!0;const Ri=qi.bind({});Ri.storyName="Thumbnail";Ri.args={alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"};Ri.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:N`
            <Thumbnail v-bind="props" />
          `}}};const ca={title:"Components / Images and Icons / Thumbnail",component:_s,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},includeStories:["thumbnail"]},qN={Thumbnail:"thumbnail"};ca.parameters=ca.parameters||{};ca.parameters.docs=M(y({},ca.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:qN,mdxComponentAnnotations:ca},t(Xp,null))});var RN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:qi,thumbnail:Ri,default:ca});const Hi=e=>({components:{Frame:Pt,Toast:ln,Button:ne},setup(){const o=L(!1),n=L(!1),s=L(!1);return{toastActive1:o,toggleToast1:()=>{o.value=!o.value},toastActive2:n,toggleToast2:()=>{n.value=!n.value},toastActive3:s,toggleToast3:()=>{s.value=!s.value},undoHandler:()=>{alert("Undo clicked")}}},template:`
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
  `}),HN={Template:Hi},VN="wrapper";function Yp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(VN,M(y(y({},HN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Feedback indicators / Toast",component:ln,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},mdxType:"Meta"}),t("h1",null,"Toast"),t("p",null,"The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action."),t(R,{mdxType:"Canvas"},t(H,{name:"Toast",inline:!1,height:"300px",parameters:{docs:{source:{code:N`
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
          `}}},mdxType:"Story"},Hi.bind({}))),t(ee,{story:"Toast",mdxType:"ArgsTable"}))}Yp.isMDXComponent=!0;const xr=Hi.bind({});xr.storyName="Toast";xr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
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
          `}}};const ua={title:"Components / Feedback indicators / Toast",component:ln,argTypes:{action:{control:{disable:!0}},duration:{table:{defaultValue:{summary:"5000"}}},error:{table:{defaultValue:{summary:"false"}}}},includeStories:["toast"]},UN={Toast:"toast"};ua.parameters=ua.parameters||{};ua.parameters.docs=M(y({},ua.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:UN,mdxComponentAnnotations:ua},t(Yp,null))});var jN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Hi,toast:xr,default:ua});const Vi=e=>({components:{Tooltip:oo,TextStyle:Lt},setup(){return{args:e}},template:`<Tooltip v-bind="args" :content="args.content1">
    <TextStyle variation="strong">Order #1001</TextStyle>
  </Tooltip>`}),Fa=e=>({components:{Button:ne,ButtonGroup:Ke,Tooltip:oo,TextField:Le},template:`
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
  `});Fa.storyName="Tooltip visible only with child interaction";Fa.parameters={docs:{source:{code:N`
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
      `}}};const WN={Template:Vi,childInteraction:Fa},zN="wrapper";function Qp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(zN,M(y(y({},WN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Overlays / Tooltip",component:oo,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Tooltip"),t("p",null,"Tooltips are floating labels that briefly explain the function of a user interface element. They can be triggered when merchants hover, focus, tap, or click."),t("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),t("br",null),t("br",null),t("h3",null,"A single item fills the remaining space"),t(R,{withSource:"close",mdxType:"Canvas"},t(H,{story:Fa,height:"150px",inline:!1,name:"_childInteraction_",mdxType:"Story"})),t("h3",null,"Example"),t(R,{mdxType:"Canvas"},t(H,{inline:!1,name:"Tooltip",height:"100px",args:{active:!0,content1:"This order has shipping labels."},parameters:{docs:{source:{code:N`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}},mdxType:"Story"},Vi.bind({}))),t(ee,{story:"Tooltip",mdxType:"ArgsTable"}))}Qp.isMDXComponent=!0;const GN=Fa,Ui=Vi.bind({});Ui.storyName="Tooltip";Ui.args={active:!0,content1:"This order has shipping labels."};Ui.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:N`
            <Tooltip active content="This order has shipping labels.">
              <TextStyle variation="strong">Order #1001</TextStyle>
            </Tooltip>
          `}}};const da={title:"Components / Overlays / Tooltip",component:oo,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the tooltip",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},content1:{name:"content",description:"The content to display inside the tooltip",table:{category:"props",type:{summary:null}}},content:{name:" content",description:"The content to display inside the tooltip (Slot version)",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_childInteraction_","tooltip"]},KN={_childInteraction_:"_childInteraction_",Tooltip:"tooltip"};da.parameters=da.parameters||{};da.parameters.docs=M(y({},da.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:KN,mdxComponentAnnotations:da},t(Qp,null))});var XN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Vi,childInteraction:Fa,_childInteraction_:GN,tooltip:Ui,default:da});const ji=e=>({components:{Frame:Pt,TopBar:cn,TopBarUserMenu:Wl,TopBarMenu:Ps,Icon:ae,VisuallyHidden:Ge,TopBarSearchField:jl,ActionList:Fe},setup(){const o={width:30,topBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png",contextualSaveBarSource:"https://github.com/qikify/polaris-vue/raw/dev/public/images/logo.png"},n=L(!1),s=L(!1),i=L(!1),r=L(""),c=k=>{i.value=k.length>0},m=()=>{r.value="",i.value=!1},f=()=>{n.value=!n.value},x=()=>{s.value=!s.value},v=L([{items:[{content:"Back to Shopify",icon:ya}]},{items:[{content:"Community forums"}]}]),A=L({title:"Another Message",description:"This is a description of message",action:{onClick:()=>{alert("clicked")},content:"This is a action"},link:{to:"https://google.com",content:"Google Homepage"}});return{logo:o,isSearchActive:i,searchValue:r,handleSearchChange:c,toggleIsSecondaryMenuOpen:x,userMenuAction:v,userMenuMessage:A,toggleUserMenu:f,isUserMenuOpen:n,isSecondaryMenuOpen:s,handleSearchResultsDismiss:m,QuestionMarkMajor:nu}},template:`
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
  `}),YN={Template:ji},QN="wrapper";function Jp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(QN,M(y(y({},YN),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Navigation / Top Bar",component:cn,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},mdxType:"Meta"}),t("h1",null,"Top Bar"),t("p",null,"The top bar is a header component that allows merchants to search, access menus, and navigate by clicking on the logo. It's always visible at the top of interfaces like Shopify or Shopify Plus. Third-party apps that use the top bar can customize the color to match their brand using the ",t("a",{parentName:"p",href:"?path=/docs/components-structure-appprovider--page"},"app provider")," component and are required to use their own logo."),t(R,{mdxType:"Canvas"},t(H,{name:"Top Bar",inline:!1,height:"400px",width:"400px",parameters:{docs:{source:{state:"close",code:N`
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
          `}}},mdxType:"Story"},ji.bind({}))),t(ee,{story:"Top Bar",mdxType:"ArgsTable"}),t("a",{name:"subcomponent-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu")),t("p",null,"A component that composes together an activator and a popover containing an action list to create a dropdown menu."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"ActionListProps","['sections']"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu. Follow Action List component props")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the menu is currently open")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@open"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening the menu popover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@close"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle closing the menu popover")))),t("br",null),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Slots"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"#activatorContent"),t("td",{parentName:"tr",align:null}),t("td",{parentName:"tr",align:null},"Accepts an activator component that renders inside of a button that opens the menu")))),t("br",null),t("a",{name:"subcomponent-user-menu"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar user menu")),t("p",null,"A specialized menu component that is activated by a user avatar."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"actions"),t("td",{parentName:"tr",align:null},"{items: IconableAction[]}[]"),t("td",{parentName:"tr",align:null},"An array of action objects that are rendered inside of a popover triggered by this menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"message"),t("td",{parentName:"tr",align:null},t("a",{parentName:"td",href:"#type-message"},"MessageProps")),t("td",{parentName:"tr",align:null},"Accepts a message that facilitates direct, urgent communication with the merchant through the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"name"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string detailing the merchant's full name to be displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"detail"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A string allowing further details on the merchant's name displayed in the user menu")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"initials"),t("td",{parentName:"tr",align:null},"AvatarProps","['initials']"),t("td",{parentName:"tr",align:null},"The merchant's initials, rendered in place of an avatar image when not provided")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"avatar"),t("td",{parentName:"tr",align:null},"AvatarProps","['source']"),t("td",{parentName:"tr",align:null},"An avatar image representing the merchant")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"open"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"A boolean property indicating whether the user menu is currently open")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Event"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@toggle"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"A callback function to handle opening and closing the user menu")))),t("br",null),t("a",{name:"type-message"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar menu message")),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"title"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A title for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"description"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"A description for the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"action"),t("td",{parentName:"tr",align:null},"{onClick(): void; content: string}"),t("td",{parentName:"tr",align:null},"An action to render near the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"link"),t("td",{parentName:"tr",align:null},"{to: string; content: string}"),t("td",{parentName:"tr",align:null},"A link to view the content of the message")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"badge"),t("td",{parentName:"tr",align:null},"{content: string; status: BadgeProps","['status']","}"),t("td",{parentName:"tr",align:null},"A badge to render near the message")))),t("br",null),t("a",{name:"subcomponent-search-field"}),t("h3",null,t("strong",{parentName:"h3"},"Top bar search field")),t("p",null,"A text field component that is tailor-made for a search use-case."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Prop"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"value"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Initial value for the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"placeholder"),t("td",{parentName:"tr",align:null},"string"),t("td",{parentName:"tr",align:null},"Hint text to display")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"focused"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force the focus state on the input")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"active"),t("td",{parentName:"tr",align:null},"boolean"),t("td",{parentName:"tr",align:null},"Force a state where search is active but the text field component is not focused")))),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Events"),t("th",{parentName:"tr",align:null},"Type"),t("th",{parentName:"tr",align:null},"Description"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@change(value: string)"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when value is changed")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@focus"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when input is focused")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},"@blur"),t("td",{parentName:"tr",align:null},"function"),t("td",{parentName:"tr",align:null},"Callback when focus is removed")))))}Jp.isMDXComponent=!0;const Tr=ji.bind({});Tr.storyName="Top Bar";Tr.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{state:"close",code:N`
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
          `}}};const pa={title:"Components / Navigation / Top Bar",component:cn,argTypes:{default:{table:{disable:!0}},"navigation-toggle":{description:"A callback function that handles hiding and showing mobile navigation",control:{disable:!0},table:{type:{summary:null}}},"search-result-dismiss":{description:"A callback function that handles the dismissal of search results",control:{disable:!0},table:{type:{summary:null}}},contextControl:{description:"Accepts a component that is used to help users switch between different contexts",control:{disable:!0},table:{type:{summary:null}}},searchField:{description:"Accepts a search field component that is made available as a `TextField` static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},searchResults:{description:"Accepts a search results component that is ideally composed of a card component containing a list of actionable search results",control:{disable:!0},table:{type:{summary:null}}},secondaryMenu:{description:"Accepts a menu component that is made available as a static member of the top bar component",control:{disable:!0},table:{type:{summary:null}}},userMenu:{description:"Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu",control:{disable:!0},table:{type:{summary:null}}}},includeStories:["topBar"]},JN={"Top Bar":"topBar"};pa.parameters=pa.parameters||{};pa.parameters.docs=M(y({},pa.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:JN,mdxComponentAnnotations:pa},t(Jp,null))});var ZN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ji,topBar:Tr,default:pa});const Wi=e=>({components:{VisuallyHidden:Ge},template:`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  `}),eB={Template:Wi},tB="wrapper";function Zp(n){var s=n,{components:e}=s,o=G(s,["components"]);return t(tB,M(y(y({},eB),o),{components:e,mdxType:"MDXLayout"}),t(J,{title:"Components / Titles and text / Visually Hidden",component:Ge,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),t("h1",null,"Visually hidden"),t("p",null,"Use when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden."),t(R,{mdxType:"Canvas"},t(H,{name:"Visually Hidden",parameters:{docs:{source:{code:N`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}},mdxType:"Story"},Wi.bind({}))),t(ee,{story:"Visually Hidden",mdxType:"ArgsTable"}))}Zp.isMDXComponent=!0;const Sr=Wi.bind({});Sr.storyName="Visually Hidden";Sr.parameters={storySource:{source:`args => ({
  components: {
    VisuallyHidden
  },
  template: \`
    <VisuallyHidden>
      <span>Hidden content</span>
    </VisuallyHidden>
    <p>Content passed down have been hide</p>
  \`
})`},docs:{source:{code:N`
            <VisuallyHidden>
              <span>Hidden content</span>
            </VisuallyHidden>
            <p>Content passed down have been hide</p>
          `}}};const ma={title:"Components / Titles and text / Visually Hidden",component:Ge,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},includeStories:["visuallyHidden"]},oB={"Visually Hidden":"visuallyHidden"};ma.parameters=ma.parameters||{};ma.parameters.docs=M(y({},ma.parameters.docs||{}),{page:()=>t(Q,{mdxStoryNameToKey:oB,mdxComponentAnnotations:ma},t(Zp,null))});var aB=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Wi,visuallyHidden:Sr,default:ma});function em(e){return{"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx":B_,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":E_,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":R_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":G_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":Q_,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":tP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":iP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":hP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":xP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":CP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":PP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":BP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":EP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":HP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":WP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":XP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":ZP,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":aw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":lw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":dw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":gw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":xw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":kw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":ww,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":Dw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":Ow,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":Vw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":zw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":Yw,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":eM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":nM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":rM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":hM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":vM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":AM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":PM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":IM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":RM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":jM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":KM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":JM,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":oN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":iN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":uN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":hN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":vN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":CN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":PN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":BN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":EN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":RN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":jN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":XN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":ZN,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":aB}[e]}Object.assign(em,{keys:()=>["/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx"],resolve:e=>({"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx":"./.storybook/stories/ComponentStatus.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":"./.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":"./.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":"./src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":"./src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":"./src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":"./src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":"./src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":"./src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":"./src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Card/README.stories.mdx":"./src/components/Card/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":"./src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":"./src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Collapsible/README.stories.mdx":"./src/components/Collapsible/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":"./src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Combobox/README.stories.mdx":"./src/components/Combobox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ContextualSaveBar/README.stories.mdx":"./src/components/ContextualSaveBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":"./src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DescriptionList/README.stories.mdx":"./src/components/DescriptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":"./src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":"./src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":"./src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Frame/README.stories.mdx":"./src/components/Frame/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":"./src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":"./src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":"./src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":"./src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Layout/README.stories.mdx":"./src/components/Layout/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":"./src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":"./src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Listbox/README.stories.mdx":"./src/components/Listbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Loading/README.stories.mdx":"./src/components/Loading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Modal/README.stories.mdx":"./src/components/Modal/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Navigation/README.stories.mdx":"./src/components/Navigation/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Page/README.stories.mdx":"./src/components/Page/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/PageActions/README.stories.mdx":"./src/components/PageActions/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Pagination/README.stories.mdx":"./src/components/Pagination/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":"./src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":"./src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":"./src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":"./src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonBodyText/README.stories.mdx":"./src/components/SkeletonBodyText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/SkeletonDisplayText/README.stories.mdx":"./src/components/SkeletonDisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":"./src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Stack/README.stories.mdx":"./src/components/Stack/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":"./src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":"./src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":"./src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextField/README.stories.mdx":"./src/components/TextField/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":"./src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":"./src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Toast/README.stories.mdx":"./src/components/Toast/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tooltip/README.stories.mdx":"./src/components/Tooltip/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TopBar/README.stories.mdx":"./src/components/TopBar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":"./src/components/VisuallyHidden/README.stories.mdx"})[e]});function nB(){zm(em,{hot:!1},!1)}const sB=[Jm,Zm,ey,ty,oy,ay,ny,sy,iy,ly,ry,cy,P_].filter(Boolean);sB.forEach(e=>{Object.keys(e).forEach(o=>{const n=e[o];switch(o){case"args":case"argTypes":return Qm.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(s=>Ym(s,!1));case"loaders":return n.forEach(s=>Xm(s,!1));case"parameters":return Br(y({},n),!1);case"argTypesEnhancers":return n.forEach(s=>Km(s));case"argsEnhancers":return n.forEach(s=>Gm(s));case"globals":case"globalTypes":{const s={};return s[o]=n,Br(s,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});nB();
//# sourceMappingURL=iframe.daec4c10.js.map
