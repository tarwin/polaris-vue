var bi=Object.defineProperty,vi=Object.defineProperties;var xi=Object.getOwnPropertyDescriptors;var Ro=Object.getOwnPropertySymbols;var Ka=Object.prototype.hasOwnProperty,Ya=Object.prototype.propertyIsEnumerable;var aa=(e,t,o)=>t in e?bi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))Ka.call(t,o)&&aa(e,o,t[o]);if(Ro)for(var o of Ro(t))Ya.call(t,o)&&aa(e,o,t[o]);return e},S=(e,t)=>vi(e,xi(t));var K=(e,t)=>{var o={};for(var s in e)Ka.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&Ro)for(var s of Ro(e))t.indexOf(s)<0&&Ya.call(e,s)&&(o[s]=e[s]);return o};var Pe=(e,t,o)=>(aa(e,typeof t!="symbol"?t+"":t,o),o);import{i as Si,d as I,o as fe,a as Co,b as So,s as Ti,t as Ns,c as Jo,e as qs,r as L,f as zo,p as Ne,g as u,h as Qo,j as m,k as f,m as xe,u as a,l as F,n as l,q as ke,v as M,w as _,x as he,y as d,z as ve,A as V,B as A,C as ne,F as ie,D as O,E as He,G as lt,H as jo,I as da,J as ye,K as $e,L as Ci,S as _i,U as ki,M as Pi,N as Je,O as Ai,P as wi,Q as Ii,T as Di,R as eo,V as Li,W as To,X as Sa,Y as Rs,Z as Fs,_ as Ta,$ as _e,a0 as Bi,a1 as $i,a2 as Os,a3 as go,a4 as nt,a5 as Mi,a6 as Ei,a7 as Ni,a8 as qi,a9 as Ri,aa as Fi,ab as Re,ac as Oi,ad as Vi,ae as Hi,af as zi,ag as Uo,ah as Wo,ai as ji,aj as Ui,ak as Wi,al as Ja,am as Qa,an as Xi,ao as Gi,ap as Ki,aq as Yi,ar as Za,as as Ji,at as Vs,au as Qi,av as Zi,aw as el,ax as tl,ay as n,az as Y,aA as J,aB as q,aC as ol,aD as Xo,aE as pa,aF as nl,aG as es,aH as j,aI as U,aJ as oe,aK as ts,aL as al,aM as Hs,aN as sl,aO as rl,aP as il,aQ as os,aR as ll,aS as cl,aT as ul,aU as dl,aV as pl,aW as ml,aX as yl,aY as hl,aZ as fl,a_ as gl,a$ as bl,b0 as vl,b1 as xl,b2 as Sl,b3 as Tl,b4 as Cl,b5 as _l,b6 as kl}from"./vendor.c0b7c7a2.js";const Pl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};Pl();const ma="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",Al='a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';function zs(e,t){if(e.matches)return e.matches(t);const o=(e.ownerDocument||document).querySelectorAll(t);let s=o.length;for(;s>=0&&o.item(s)!==e;)return s-=1,s>-1}function sa(e){const t="a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";return zs(e,t)?e:e.querySelector(t)}function wl(e,t){const o=[...document.querySelectorAll(ma)],s=o.indexOf(e)+1,r=o.slice(s);for(const i of r)if(Si(i)&&(!t||t&&t(i)))return i;return null}function Il(e,t){const o=wl(e,t);return o&&o instanceof HTMLElement?(o.focus(),!0):!1}function Dl(e,t=!0){return!t&&zs(e,ma)?e:e.querySelector(ma)}function js(e){return e.querySelectorAll(Al)}function Us(e,t){let o=0;for(const s of e){if(s===t)break;o+=1}return o===e.length?-1:o}function Ll(e,t){const o=js(e),s=Us(o,t);s===-1?o[0].focus():o[(s-1+o.length)%o.length].focus()}function Bl(e,t){const o=js(e),s=Us(o,t);s===-1?o[0].focus():o[(s+1)%o.length].focus()}const Zt=e=>{e.currentTarget.blur()},$l={inheritAttrs:!1,render(){return null}},st=I(S(y({},$l),{props:{keyCode:{type:String,required:!0},keyEvent:{type:String,default:"keyup"},handler:{type:Function,required:!0}},setup(e){const t=e;function o(s){s.key===t.keyCode&&t.handler(s)}return fe(()=>document.addEventListener(t.keyEvent,o)),Co(()=>document.removeEventListener(t.keyEvent,o)),()=>{}}}));st.__docgenInfo={exportName:"default",displayName:"KeypressListener",description:"",tags:{},props:[{name:"keyCode",type:{name:"String as () => Key"},required:!0},{name:"keyEvent",type:{name:"String as () => KeyEvent"},defaultValue:{func:!1,value:"'keyup'"}},{name:"handler",type:{name:"func"},required:!0}]};var ze=(e=>(e.Backspace="Backspace",e.Tab="Tab",e.Enter="Enter",e.Shift="Shift",e.Ctrl="Ctrl",e.Alt="Alt",e.Pause="Pause",e.CapsLock="CapsLock",e.Escape="Escape",e.Space="Space",e.PageUp="PageUp",e.PageDown="PageDown",e.End="End",e.Home="Home",e.ArrowRight="ArrowRight",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowDown="ArrowDown",e.Insert="Insert",e.Delete="Delete",e.Key0="Key0",e.Key1="Key1",e.Key2="Key2",e.Key3="Key3",e.Key4="Key4",e.Key5="Key5",e.Key6="Key6",e.Key7="Key7",e.Key8="Key8",e.Key9="Key9",e.KeyA="KeyA",e.KeyB="KeyB",e.KeyC="KeyC",e.KeyD="KeyD",e.KeyE="KeyE",e.KeyF="KeyF",e.KeyG="KeyG",e.KeyH="KeyH",e.KeyI="KeyI",e.KeyJ="KeyJ",e.KeyK="KeyK",e.KeyL="KeyL",e.KeyM="KeyM",e.KeyN="KeyN",e.KeyO="KeyO",e.KeyP="KeyP",e.KeyQ="KeyQ",e.KeyR="KeyR",e.KeyS="KeyS",e.KeyT="KeyT",e.KeyU="KeyU",e.KeyV="KeyV",e.KeyW="KeyW",e.KeyX="KeyX",e.KeyY="KeyY",e.KeyZ="KeyZ",e.LeftMeta="LeftMeta",e.RightMeta="RightMeta",e.Select="Select",e.Numpad0="Numpad0",e.Numpad1="Numpad1",e.Numpad2="Numpad2",e.Numpad3="Numpad3",e.Numpad4="Numpad4",e.Numpad5="Numpad5",e.Numpad6="Numpad6",e.Numpad7="Numpad7",e.Numpad8="Numpad8",e.Numpad9="Numpad9",e.Multiply="Multiply",e.Add="Add",e.Subtract="Subtract",e.Decimal="Decimal",e.Divide="Divide",e.F1="F1",e.F2="F2",e.F3="F3",e.F4="F4",e.F5="F5",e.F6="F6",e.F7="F7",e.F8="F8",e.F9="F9",e.F10="F10",e.F11="F11",e.F12="F12",e.NumLock="NumLock",e.ScrollLock="ScrollLock",e.Semicolon="Semicolon",e.Equals="Equals",e.Comma="Comma",e.Dash="Dash",e.Period="Period",e.ForwardSlash="ForwardSlash",e.GraveAccent="GraveAccent",e.OpenBracket="OpenBracket",e.BackSlash="BackSlash",e.CloseBracket="CloseBracket",e.SingleQuote="SingleQuote",e))(ze||{});const Ml="Polaris-ActionList",El="Polaris-ActionList__Actions",Nl="Polaris-ActionList__Section",ql="Polaris-ActionList__Title",Rl="Polaris-ActionList--firstSectionWithTitle",Fl="Polaris-ActionList__Item",Ol="Polaris-ActionList--active",Vl="Polaris-ActionList--destructive",Hl="Polaris-ActionList--disabled",zl="Polaris-ActionList__Prefix",jl="Polaris-ActionList__Suffix",Ul="Polaris-ActionList__Content",Wl="Polaris-ActionList__ContentBlock",Xl="Polaris-ActionList__ContentBlockInner",Gl="Polaris-ActionList__Text";var me={ActionList:Ml,"Section-withoutTitle":"Polaris-ActionList__Section--withoutTitle",Actions:El,Section:Nl,Title:ql,firstSectionWithTitle:Rl,Item:Fl,active:Ol,destructive:Vl,disabled:Hl,Prefix:zl,Suffix:jl,Content:Ul,ContentBlock:Wl,ContentBlockInner:Xl,Text:Gl};class it{constructor({top:t=0,left:o=0,width:s=0,height:r=0}={}){Pe(this,"top");Pe(this,"left");Pe(this,"width");Pe(this,"height");this.top=t,this.left=o,this.width=s,this.height=r}static get zero(){return new it}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}}function Oe(e){if(!(e instanceof Element))return new it({width:window.innerWidth,height:window.innerHeight});const t=e.getBoundingClientRect();return new it({top:t.top,left:t.left,width:t.width,height:t.height})}const Fo=1e3/60;function Ws(e){return e===document}function Kl(e){return Ws(e)?document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop}function Yl(e,t){const o=e.left,s=e.left+e.width,r=t.left;return t.left+t.width<o||s<r}class Jl{constructor(t){Pe(this,"stickyItems",[]);Pe(this,"stuckItems",[]);Pe(this,"container",null);Pe(this,"topBarOffset",0);Pe(this,"handleResize",So(()=>{this.manageStickyItems()},Fo,{leading:!0,trailing:!0,maxWait:Fo}));Pe(this,"handleScroll",So(()=>{this.manageStickyItems()},Fo,{leading:!0,trailing:!0,maxWait:Fo}));t&&this.setContainer(t)}registerStickyItem(t){this.stickyItems.push(t)}unregisterStickyItem(t){const o=this.stickyItems.findIndex(({stickyNode:s})=>t===s);this.stickyItems.splice(o,1)}setContainer(t){this.container=t,Ws(t)&&this.setTopBarOffset(t),this.container.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.manageStickyItems()}removeScrollListener(){this.container&&(this.container.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize))}manageStickyItems(){if(this.stickyItems.length<=0)return;const t=this.container?Kl(this.container):0,o=Oe(this.container).top+this.topBarOffset;this.stickyItems.forEach(s=>{const{handlePositioning:r}=s,{sticky:i,top:c,left:p,width:v}=this.evaluateStickyItem(s,t,o);this.updateStuckItems(s,i),r(i,c,p,v)})}evaluateStickyItem(t,o,s){var C;const{stickyNode:r,placeHolderNode:i,boundingElement:c,offset:p,disableWhenStacked:v}=t;if(v&&Ti().matches)return{sticky:!1,top:0,left:0,width:"auto"};const T=p?this.getOffset(r)+parseInt(Ns.spacing["5"],10):this.getOffset(r),g=o+T,h=i.getBoundingClientRect().top-s+o,x=s+T,{width:w}=i.getBoundingClientRect(),{left:B}=i.getBoundingClientRect();let D;if(c==null)D=g>=h;else{const P=r.getBoundingClientRect().height||((C=r.firstElementChild)==null?void 0:C.getBoundingClientRect().height)||0,E=c.getBoundingClientRect().bottom-P+o-s;D=g>=h&&g<E}return{sticky:D,top:x,left:B,width:w}}updateStuckItems(t,o){const{stickyNode:s}=t;o&&!this.isNodeStuck(s)?this.addStuckItem(t):!o&&this.isNodeStuck(s)&&this.removeStuckItem(t)}addStuckItem(t){this.stuckItems.push(t)}removeStuckItem(t){const{stickyNode:o}=t,s=this.stuckItems.findIndex(({stickyNode:r})=>o===r);this.stuckItems.splice(s,1)}getOffset(t){if(this.stuckItems.length===0)return 0;let o=0,s=0;const r=this.stuckItems.length,i=Oe(t);for(;s<r;){const c=this.stuckItems[s].stickyNode;if(c!==t){const p=Oe(c);Yl(i,p)||(o+=Oe(c).height)}else break;s+=1}return o}isNodeStuck(t){return this.stuckItems.findIndex(({stickyNode:s})=>t===s)>=0}setTopBarOffset(t){const o=t.querySelector(`:not(${Jo.selector}) ${qs.selector}`);this.topBarOffset=o?o.clientHeight:0}}const Ql="Polaris-Scrollable",Zl="Polaris-Scrollable--horizontal",ec="Polaris-Scrollable--vertical",tc="Polaris-Scrollable--verticalHasScrolling",oc="Polaris-Scrollable--hasTopShadow",nc="Polaris-Scrollable--hasBottomShadow";var gt={Scrollable:Ql,horizontal:Zl,vertical:ec,verticalHasScrolling:tc,hasTopShadow:oc,hasBottomShadow:nc};const ac=["tabindex"],ct=I({props:{vertical:{type:Boolean,default:!0},horizontal:{type:Boolean},shadow:{type:Boolean},hint:{type:Boolean},focusable:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:t}){const o=e,s=$=>{$.preventDefault()},r=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},i=100,c=.2,p=.2,v=["scroll","touchmove","wheel"],T=r(),g=2,h=L(null),x=L(!1),w=L(!1),B=L(0),D=L(!1),C=zo({stickyManager:new Jl}),P=$=>{B.value=$};Ne("stickyManagerContext",C.stickyManager),Ne("scrollToPositionContext",P);const E=u(()=>F(gt.Scrollable,o.vertical&&gt.vertical,o.horizontal&&gt.horizontal,x.value&&gt.hasTopShadow,w.value&&gt.hasBottomShadow,o.vertical&&D.value&&gt.verticalHasScrolling)),N=()=>{if(!h.value)return;const{scrollTop:$,scrollHeight:W,clientHeight:se}=h.value,ee=Boolean(o.shadow&&!($+se>=W)),Te=Boolean(o.shadow&&$>0&&B.value>0),z=W>se,Q=W-$<=se+g;z&&Q&&t("scrolled-to-bottom"),x.value=Te,w.value=ee,B.value=$,D.value=z},G=So(()=>{N()},50,{trailing:!0}),k=($=!0)=>{!h.value||v.forEach(W=>{var se,ee;$?(se=h.value)==null||se.addEventListener(W,s):(ee=h.value)==null||ee.removeEventListener(W,s)})},H=()=>{const $=B.value*p;B.value=$<c?0:B.value-$,B.value>0?window.requestAnimationFrame(H):k(!1)},b=()=>{if(!h.value)return;const{clientHeight:$,scrollHeight:W}=h.value;if(T||B.value>0||W<=$)return;const se=W-$;k(),B.value=se>i?i:se,window.requestAnimationFrame(H)};return fe(()=>{!h.value||(C.stickyManager.setContainer(h.value),h.value.scrollTop=B.value,h.value.addEventListener("scroll",()=>{window.requestAnimationFrame(N)}),window.addEventListener("resize",G),window.requestAnimationFrame(()=>{N(),o.hint&&b()}))}),Qo(()=>{h.value&&B.value>0&&(h.value.scrollTop=B.value)}),Co(()=>{!h.value||(h.value.removeEventListener("scroll",N),window.removeEventListener("resize",G),C.stickyManager.removeScrollListener())}),($,W)=>(l(),m("div",xe({ref_key:"scrollArea",ref:h},a(Jo).props,{class:a(E),tabindex:e.focusable?0:void 0}),[f($.$slots,"default")],16,ac))}});ct.__docgenInfo={exportName:"default",displayName:"Scrollable",description:"",tags:{},props:[{name:"vertical",description:"Scroll content vertically",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"horizontal",description:"Scroll content horizontally",required:!1,type:{name:"boolean"}},{name:"shadow",description:"Add a shadow when content is scrollable",required:!1,type:{name:"boolean"}},{name:"hint",description:"Slightly hints content upon mounting when scrollable",required:!1,type:{name:"boolean"}},{name:"focusable",description:"Adds a tabIndex to scrollable when children are not focusable",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};class sc extends Error{constructor(t=""){super(`${t&&`${t} `}Your application must be wrapped in an <AppProvider> component. See https://qikify.github.io/polaris-vue/?path=/docs/components-structure-appprovider--page for implementation instructions.`);this.name="MissingAppProviderError"}}function Ie(){const e=ke("uniqueIdFactory"),t=L("");function o(s="",r=""){if(!e)throw new sc("No UniqueIdFactory was provided.");return r||(t.value||(t.value=e.nextId(s)),t.value)}return{uniqueIdRef:t,useUniqueId:o}}const rc=["id"],Ca=I({setup(e){const t=ke("scrollToPositionContext",()=>!1),o=L(null),{useUniqueId:s}=Ie(),r=s("ScrollTo");return fe(()=>{!t||!o.value||t(o.value.offsetTop)}),(i,c)=>(l(),m("a",{id:a(r),ref_key:"anchorNode",ref:o},null,8,rc))}});Ca.__docgenInfo={exportName:"default",displayName:"ScrollTo",description:"",tags:{}};const _o=I({props:{to:null,url:null,external:{type:Boolean}},setup(e){return(t,o)=>(l(),M(he(e.to?"router-link":"a"),{href:e.url,to:e.to,target:e.to?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0},{default:_(()=>[f(t.$slots,"default")]),_:3},8,["href","to","target","rel"]))}});_o.__docgenInfo={exportName:"default",displayName:"UnstyledLink",description:"",tags:{},props:[{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const ic="Polaris-TextStyle--variationPositive",lc="Polaris-TextStyle--variationNegative",cc="Polaris-TextStyle--variationWarning",uc="Polaris-TextStyle--variationCode",dc="Polaris-TextStyle--variationStrong",pc="Polaris-TextStyle--variationSubdued";var mc={variationPositive:ic,variationNegative:lc,variationWarning:cc,variationCode:uc,variationStrong:dc,variationSubdued:pc};const ko=I({props:{variation:{type:String,default:null}},setup(e){const t=e;function o(i){return i==="code"?"code":"span"}const s=L(o(t.variation)),r=u(()=>{const i=t.variation&&ve("variation",t.variation);return F(i&&mc[i])});return(i,c)=>(l(),M(he(s.value),{class:d(a(r))},{default:_(()=>[f(i.$slots,"default")]),_:3},8,["class"]))}});ko.__docgenInfo={exportName:"default",displayName:"TextStyle",description:"",tags:{},props:[{name:"variation",description:"Give text additional visual meaning",tags:{},values:["positive | negative | strong | subdued | code"],type:{name:"String as () => Variation"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}]};const yc="Polaris-Icon",hc="Polaris-Icon--applyColor",fc="Polaris-Icon--hasBackdrop",gc="Polaris-Icon--colorBase",bc="Polaris-Icon--colorSubdued",vc="Polaris-Icon--colorCritical",xc="Polaris-Icon--colorInteractive",Sc="Polaris-Icon--colorWarning",Tc="Polaris-Icon--colorHighlight",Cc="Polaris-Icon--colorSuccess",_c="Polaris-Icon--colorPrimary",kc="Polaris-Icon__Svg",Pc="Polaris-Icon__Img",Ac="Polaris-Icon__Placeholder";var Ze={Icon:yc,applyColor:hc,hasBackdrop:fc,colorBase:gc,colorSubdued:bc,colorCritical:vc,colorInteractive:xc,colorWarning:Sc,colorHighlight:Tc,colorSuccess:Cc,colorPrimary:_c,Svg:kc,Img:Pc,Placeholder:Ac},ns={env:"production"};const wc="Polaris-VisuallyHidden";var Ic={VisuallyHidden:wc};const Me=I({setup(e){return(t,o)=>(l(),m("span",{class:d(a(Ic).VisuallyHidden)},[f(t.$slots,"default")],2))}});Me.__docgenInfo={exportName:"default",displayName:"VisuallyHidden",description:"",tags:{},slots:[{name:"default"}]};const Dc=["src"],ue=I({props:{source:null,color:null,backdrop:{type:Boolean},accessibilityLabel:null},setup(e){const t=e,o=["base","critical","highlight","success","warning"],s=u(()=>t.color&&Ze[ve("color",t.color)]),r=u(()=>F(Ze.Icon,s.value,t.color&&Ze.applyColor,t.backdrop&&Ze.hasBackdrop)),i=u(()=>typeof t.source=="object"?"icon":t.source==="placeholder"?"placeholder":"external"),c=u(()=>i.value==="external"?encodeURIComponent(String(t.source)):""),p=()=>{t.color&&i.value==="external"&&ns.env==="development"&&console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.")},v=()=>{t.backdrop&&t.color&&!o.includes(t.color)&&ns.env==="development"&&console.warn(`The ${t.color} variant does not have a supported backdrop color`)};return fe(()=>{p(),v()}),(T,g)=>(l(),m("span",{class:d(a(r))},[V(a(Me),null,{default:_(()=>[A("span",null,ne(e.accessibilityLabel),1)]),_:1}),a(i)==="icon"?(l(),M(he(e.source),{key:0,class:d(a(Ze).Svg)},null,8,["class"])):a(i)==="placeholder"?(l(),m("div",{key:1,class:d(a(Ze).Placeholder)},null,2)):(l(),m("img",{key:2,class:d(a(Ze).Img),src:`data:image/svg+xml;utf8,${a(c)}`,alt:"","aria-hidden":"true"},null,10,Dc))],2))}});ue.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"source",description:"The contents to display in the icon",required:!0,type:{name:"IconSource"}},{name:"color",description:"Set the color for the icon",required:!1,type:{name:"Color"}},{name:"backdrop",description:"Show a backdrop behind the icon",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}]};const Lc="Polaris-Badge",Bc="Polaris-Badge--sizeSmall",$c="Polaris-Badge--statusSuccess",Mc="Polaris-Badge--statusInfo",Ec="Polaris-Badge--statusAttention",Nc="Polaris-Badge--statusWarning",qc="Polaris-Badge--statusCritical",Rc="Polaris-Badge--statusNew",Fc="Polaris-Badge__Pip",Oc="Polaris-Badge--progressIncomplete",Vc="Polaris-Badge--progressPartiallyComplete",Hc="Polaris-Badge--progressComplete",zc="Polaris-Badge--withinFilter";var bt={Badge:Lc,sizeSmall:Bc,statusSuccess:$c,statusInfo:Mc,statusAttention:Ec,statusWarning:Nc,statusCritical:qc,statusNew:Rc,Pip:Fc,progressIncomplete:Oc,progressPartiallyComplete:Vc,progressComplete:Hc,withinFilter:zc};const to=I({props:{status:null,progress:null,size:{default:"medium"},statusAndProgressLabelOverride:null},setup(e){const t=e,o=ke("withinFilterContext",!1),s="medium",r=L(""),i=L(""),c=u(()=>F(bt.Badge,t.status&&bt[ve("status",t.status)],t.progress&&bt[ve("progress",t.progress)],t.size&&t.size!==s&&bt[ve("size",t.size)],o&&bt.withinFilter)),p=u(()=>t.statusAndProgressLabelOverride||i.value||r.value),v=u(()=>t.statusAndProgressLabelOverride||`${i.value} ${r.value}`);return fe(()=>{switch(t.progress){case"incomplete":r.value="incomplete";break;case"partiallyComplete":r.value="partiallyComplete";break;case"complete":r.value="complete";break}switch(t.status){case"info":i.value="info";break;case"success":i.value="success";break;case"warning":i.value="warning";break;case"critical":i.value="critical";break;case"attention":i.value="attention";break;case"new":i.value="new";break}}),(T,g)=>(l(),m("span",{class:d(a(c))},[a(p)?(l(),m(ie,{key:0},[r.value?(l(),m("span",{key:0,class:d(a(bt).Pip)},[V(a(Me),null,{default:_(()=>[He(ne(a(v)),1)]),_:1})],2)):(l(),M(a(Me),{key:1},{default:_(()=>[He(ne(a(v)),1)]),_:1}))],64)):O("",!0),f(T.$slots,"default")],2))}});to.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"status",description:"Colors and labels the badge with the given status.",required:!1,type:{name:"Status"}},{name:"progress",description:"Render a pip showing the progress of a given task.",required:!1,type:{name:"Progress"}},{name:"size",description:"Medium or small size.",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"statusAndProgressLabelOverride",description:"Pass a custom accessibilityLabel",required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const jc={inheritAttrs:!1},ya=I(S(y({},jc),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},setup(e){const t=e,o=u(()=>t.ellipsis&&t.content?`${t.content}\u2026`:t.content);return(s,r)=>(l(),m("span",{class:d(a(me).Content)},[e.prefixId?(l(),m("span",{key:0,class:d(a(me).Prefix)},[f(s.$slots,"prefix")],2)):e.icon?(l(),m("span",{key:1,class:d(a(me).Prefix)},[V(a(ue),{source:e.icon},null,8,["source"])],2)):e.image?(l(),m("span",{key:2,class:d(a(me).Prefix),role:"presentation",style:lt({backgroundImage:`url(${e.image}`})},null,6)):O("",!0),A("span",{class:d(a(me).Text)},[e.helpText?(l(),m("span",{key:0,class:d(a(me).ContentBlock)},[A("span",{class:d(a(me).ContentBlockInner)},ne(a(o)),3),V(a(ko),{variation:"subdued"},{default:_(()=>[He(ne(e.helpText),1)]),_:1})],2)):(l(),m(ie,{key:1},[He(ne(a(o)),1)],64))],2),e.badge?(l(),m("span",{key:3,class:d(a(me).Suffix)},[V(a(to),{status:e.badge.status},{default:_(()=>[He(ne(e.badge.content),1)]),_:1},8,["status"])],2)):O("",!0),e.suffixId?(l(),m("span",{key:4,class:d(a(me).Suffix)},[f(s.$slots,"suffix")],2)):O("",!0)],2))}}));ya.__docgenInfo={exportName:"default",displayName:"ContentElement",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],slots:[{name:"prefix"},{name:"suffix"}]};const Uc=["role"],Wc=["id","disabled","aria-label","role"],Xc={inheritAttrs:!1},Xs=I(S(y({},Xc),{props:{id:null,content:null,url:null,external:{type:Boolean},badge:null,destructive:{type:Boolean},disabled:{type:Boolean},icon:null,accessibilityLabel:null,helpText:null,image:null,prefixId:null,suffixId:null,ellipsis:{type:Boolean},active:{type:Boolean},role:null,onAction:null,onMouseEnter:null,onTouchStart:null},emits:["action"],setup(e,{emit:t}){const o=e,s=u(()=>F(me.Item,o.disabled&&me.disabled,o.destructive&&me.destructive,o.active&&me.active)),r=u(()=>({badge:o.badge,content:o.content,helpText:o.helpText,icon:o.icon,prefixId:o.prefixId,suffixId:o.suffixId,image:o.image,disabled:o.disabled,ellipsis:o.ellipsis,role:o.role})),i=u(()=>o.role==="menuitem"?"presentation":void 0),c=()=>{o.disabled||t("action")};return(p,v)=>(l(),m("li",{role:a(i)},[e.active?(l(),M(a(Ca),{key:0})):O("",!0),e.url?(l(),M(a(_o),{key:1,id:e.id,url:e.disabled?void 0:e.url,class:d(a(s)),external:e.external,"aria-label":e.accessibilityLabel,role:e.role,onClick:c},{default:_(()=>[V(ya,jo(da(a(r))),{suffix:_(()=>[f(p.$slots,"suffix")]),prefix:_(()=>[f(p.$slots,"prefix")]),_:3},16)]),_:3},8,["id","url","class","external","aria-label","role"])):(l(),m("button",{key:2,id:e.id,type:"button",class:d(a(s)),disabled:e.disabled,"aria-label":e.accessibilityLabel,role:e.role,onClick:c,onMouseup:v[0]||(v[0]=(...T)=>a(Zt)&&a(Zt)(...T))},[V(ya,jo(da(a(r))),{suffix:_(()=>[f(p.$slots,"suffix")]),prefix:_(()=>[f(p.$slots,"prefix")]),_:3},16)],42,Wc))],8,Uc))}}));Xs.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"content",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"badge",required:!1,type:{name:`{
  status: 'new';
  content: string;
}`}},{name:"destructive",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"IconSource"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"image",required:!1,type:{name:"string"}},{name:"prefixId",required:!1,type:{name:"string"}},{name:"suffixId",required:!1,type:{name:"string"}},{name:"ellipsis",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"string"}}],events:[{name:"action"}],slots:[{name:"suffix"},{name:"prefix"}]};const Gc=["role","tabIndex"],Kc={inheritAttrs:!1},ha=I(S(y({},Kc),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:t}){const o=e,s=u(()=>o.section.title?void 0:me["Section-withoutTitle"]),r=u(()=>F(me.Title,o.firstSection&&me.firstSectionWithTitle)),i=u(()=>{let p;switch(o.actionRole){case"option":p="presentation";break;case"menuitem":p=o.hasMultipleSections?"presentation":"menu";break;default:p=void 0;break}return p}),c=p=>{p&&p(),t("action-any-item")};return(p,v)=>(l(),m("div",{class:d(a(s))},[e.section.title?(l(),m("p",{key:0,class:d(a(r))},ne(e.section.title),3)):O("",!0),A("ul",{class:d(a(me).Actions),role:a(i),tabIndex:e.hasMultipleSections?void 0:-1},[(l(!0),m(ie,null,ye(e.section.items,(B,w)=>{var D=B,{content:T,helpText:g,onAction:h}=D,x=K(D,["content","helpText","onAction"]);return l(),M(a(Xs),xe({key:`${T}-${w}`,content:T,helpText:g,role:e.actionRole},y({},x),{onAction:C=>c(h)}),$e({_:2},[x.prefixId?{name:"prefix",fn:_(()=>[f(p.$slots,`prefix-${x.prefixId}`)])}:void 0,x.suffixId?{name:"suffix",fn:_(()=>[f(p.$slots,`suffix-${x.suffixId}`)])}:void 0]),1040,["content","helpText","role","onAction"])}),128))],10,Gc)],2))}}));ha.__docgenInfo={exportName:"default",displayName:"SectionMarkup",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Yc={inheritAttrs:!1},Gs=I(S(y({},Yc),{props:{section:null,hasMultipleSections:{type:Boolean},actionRole:null,firstSection:{type:Boolean}},emits:["action-any-item"],setup(e,{emit:t}){const o=e,s=u(()=>{const{section:r,hasMultipleSections:i,actionRole:c,firstSection:p}=o;return{section:r,hasMultipleSections:i,actionRole:c,firstSection:p}});return(r,i)=>e.hasMultipleSections?(l(),m("li",{key:0,class:d(a(me).Section),role:"presentation"},[V(ha,xe(a(s),{onActionAnyItem:i[0]||(i[0]=c=>t("action-any-item"))}),$e({_:2},[ye(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:_(()=>[f(r.$slots,`prefix-${c}`)])})),ye(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:_(()=>[f(r.$slots,`suffix-${c}`)])}))]),1040)],2)):(l(),M(ha,xe({key:1},a(s),{onActionAnyItem:i[1]||(i[1]=c=>t("action-any-item"))}),$e({_:2},[ye(e.section.items,({prefixId:c})=>({name:`prefix-${c}`,fn:_(()=>[f(r.$slots,`prefix-${c}`)])})),ye(e.section.items,({suffixId:c})=>({name:`suffix-${c}`,fn:_(()=>[f(r.$slots,`suffix-${c}`)])}))]),1040))}}));Gs.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"section",description:"Section of action items",required:!0,type:{name:"ActionListSection"}},{name:"hasMultipleSections",description:"Should there be multiple sections",required:!0,type:{name:"boolean"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:'"option"'},{name:'"menuitem"'},{name:"string"}]}},{name:"firstSection",description:"Whether or not the section is the first to appear",required:!1,type:{name:"boolean"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Jc={inheritAttrs:!1},je=I(S(y({},Jc),{props:{items:{default:void 0},sections:{default:()=>[]},actionRole:{default:void 0}},emits:["action-any-item"],setup(e,{emit:t}){const o=e,s=L(null),r=u(()=>o.items?[{items:o.items},...o.sections]:o.sections?o.sections:[]),i=u(()=>r.value.length>1),c=u(()=>i.value?"ul":"div"),p=u(()=>i.value&&o.actionRole==="menuitem"?"menu":void 0),v=u(()=>i.value&&o.actionRole==="menuitem"?-1:void 0),T=h=>{h.preventDefault();const x=h.target;s.value&&x&&s.value.contains(x)&&Ll(s.value,x)},g=h=>{h.preventDefault();const x=h.target;s.value&&x&&s.value.contains(x)&&Bl(s.value,x)};return(h,x)=>(l(),M(he(a(c)),{ref_key:"actionListRef",ref:s,role:a(p),class:d(a(F)(a(me).ActionList)),tabIndex:a(v)},{default:_(()=>[(l(!0),m(ie,null,ye(a(r),(w,B)=>(l(),m(ie,null,[w.items.length>0?(l(),M(a(Gs),{key:w.title||B,firstSection:B===0,section:w,hasMultipleSections:a(i),actionRole:e.actionRole,onActionAnyItem:x[0]||(x[0]=D=>t("action-any-item"))},$e({_:2},[ye(w.items,({prefixId:D})=>({name:`prefix-${D}`,fn:_(()=>[f(h.$slots,`prefix-${D}`)])})),ye(w.items,({suffixId:D})=>({name:`suffix-${D}`,fn:_(()=>[f(h.$slots,`suffix-${D}`)])}))]),1032,["firstSection","section","hasMultipleSections","actionRole"])):O("",!0)],64))),256)),e.actionRole==="menuitem"?(l(),m(ie,{key:0},[V(a(st),{keyEvent:"keydown",keyCode:a(ze).ArrowDown,handler:g},null,8,["keyCode"]),V(a(st),{keyEvent:"keydown",keyCode:a(ze).ArrowUp,handler:T},null,8,["keyCode"])],64)):O("",!0)]),_:3},8,["role","class","tabIndex"]))}}));je.__docgenInfo={exportName:"default",displayName:"ActionList",description:"",tags:{},props:[{name:"items",description:"Collection of actions for list",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"undefined"}},{name:"sections",description:"Collection of sectioned action items",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"() => []"}},{name:"actionRole",description:"Defines a specific role attribute for each action in the list",required:!1,type:{name:"union",elements:[{name:"string"},{name:'"menuitem"'}]},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"action-any-item"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};class Ks{constructor(){Pe(this,"portalIds",[])}register(t){this.portalIds.includes(t)||this.portalIds.push(t)}hasContainer(){return this.portalIds.length}}class Qc{constructor(){Pe(this,"trapFocusList",[])}add(t){this.trapFocusList=[...this.trapFocusList,t]}remove(t){const o=this.trapFocusList.indexOf(t);return o>-1&&(this.trapFocusList=this.trapFocusList.splice(o,1)),o>-1}}const fa="light",as="polaris-custom-properties",_a=I({props:{colorScheme:{type:String,default:fa},className:{type:String,default:null},as:{type:String,default:"div"}},setup(e){return fe(()=>{let t=document.getElementById(as);t||(t=document.createElement("style"),t.id=as,t.textContent=Ci,document.head.appendChild(t))}),(t,o)=>(l(),M(he(e.as),{"p-color-scheme":e.colorScheme,class:d(e.className),style:lt({color:"var(--p-text-color)"})},{default:_(()=>[f(t.$slots,"default")]),_:3},8,["p-color-scheme","class","style"]))}});_a.__docgenInfo={exportName:"default",displayName:"CustomProperties",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}},{name:"className",type:{name:"String as () => CustomPropertiesProps['className']"},defaultValue:{func:!1,value:"null"}},{name:"as",type:{name:"String as () => CustomPropertiesProps['as']"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}]};const Zc=A("div",{id:"PolarisPortalsContainer"},null,-1),Zo=I({props:{colorScheme:{type:String,default:fa}},setup(e){const t=e,o=L(new _i),s=new Ks,r=L(new ki(Pi)),i=L(new Qc),c=()=>{document.body.setAttribute("p-color-scheme",t.colorScheme||fa),document.body.style.backgroundColor="var(--p-background)",document.body.style.color="var(--p-text)"};return Je(()=>t.colorScheme,(p,v)=>{p!==v&&c()}),fe(()=>{document!==null&&c()}),Ne("scrollLockManager",o),Ne("portalManager",s),Ne("uniqueIdFactory",r.value),Ne("focusManager",i),(p,v)=>(l(),M(a(_a),{"color-scheme":e.colorScheme},{default:_(()=>[f(p.$slots,"default"),Zc]),_:3},8,["color-scheme"]))}});Zo.__docgenInfo={exportName:"default",displayName:"AppProvider",description:"",tags:{},props:[{name:"colorScheme",type:{name:"String as () => CustomPropertiesProps['colorScheme']"},defaultValue:{func:!1,value:"DEFAULT_COLOR_SCHEME"}}],slots:[{name:"default"}]};const eu="Polaris-Avatar",tu="Polaris-Avatar--hidden",ou="Polaris-Avatar--sizeExtraSmall",nu="Polaris-Avatar--sizeSmall",au="Polaris-Avatar--sizeMedium",su="Polaris-Avatar--sizeLarge",ru="Polaris-Avatar--styleOne",iu="Polaris-Avatar--styleTwo",lu="Polaris-Avatar--styleThree",cu="Polaris-Avatar--styleFour",uu="Polaris-Avatar--styleFive",du="Polaris-Avatar--hasImage",pu="Polaris-Avatar__Image",mu="Polaris-Avatar__Initials",yu="Polaris-Avatar__Svg";var Xe={Avatar:eu,hidden:tu,sizeExtraSmall:ou,sizeSmall:nu,sizeMedium:au,sizeLarge:su,styleOne:ru,styleTwo:iu,styleThree:lu,styleFour:cu,styleFive:uu,hasImage:du,Image:pu,Initials:mu,Svg:yu};const ra=["one","two","three","four","five"];function hu(e){return e?ra[e.charCodeAt(0)%ra.length]:ra[0]}const fu=["src","srcSet","crossOrigin"],gu=["src","crossOrigin"],ka=I({props:{source:null,crossOrigin:null,sourceSet:null},setup(e){const t=e,o=u(()=>t.sourceSet?t.sourceSet.map(({source:s,descriptor:r})=>`${s} ${r}`).join(","):null);return(s,r)=>a(o)?(l(),m("img",{key:0,src:e.source,srcSet:e.sourceSet,crossOrigin:e.crossOrigin},null,8,fu)):(l(),m("img",{key:1,src:e.source,crossOrigin:e.crossOrigin},null,8,gu))}});ka.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"source",required:!0,type:{name:"string"}},{name:"crossOrigin",required:!1,type:{name:"CrossOrigin"}},{name:"sourceSet",required:!1,type:{name:"Array",elements:[{name:"SourceSet"}]}}]};const bu=["aria-label"],en=I({props:{size:{default:"medium"},name:{default:void 0},initials:{default:void 0},customer:{type:Boolean,default:void 0},source:{default:void 0},accessibilityLabel:{default:void 0}},emits:["error"],setup(e,{emit:t}){const o=e,s=L("PENDING"),r="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z",i="0.35em",c=u(()=>o.source&&s.value!=="ERRORED"),p=u(()=>{const h=ve("size",o.size),x=ve("style",hu(o.name||o.initials));return F(Xe.Avatar,h&&Xe[h],!o.customer&&Xe[x],(c.value||o.initials&&o.initials.length===0)&&s.value!=="LOADED"&&Xe.hidden,c.value&&Xe.hasImage)}),v=u(()=>o.accessibilityLabel?o.accessibilityLabel:o.name?o.name:o.initials?`Avatar with initials ${o.initials.split("").join(" ")}`:"Avatar"),T=()=>{s.value="LOADED"},g=()=>{s.value="ERRORED",t("error")};return(h,x)=>(l(),m("span",{"aria-label":a(v),role:"img",class:d(a(p))},[a(c)?O("",!0):(l(),m("span",{key:0,class:d(a(Xe).Initials)},[(l(),m("svg",{class:d(a(Xe).Svg),viewBox:"0 0 40 40"},[e.customer||!e.initials?(l(),m("path",{key:0,fill:"currentColor",d:r})):(l(),m("text",{key:1,x:"50%",y:"50%",dy:i,fill:"currentColor",fontSize:"20",textAnchor:"middle"},ne(e.initials),1))],2))],2)),e.source&&s.value!=="ERRORED"?(l(),M(a(ka),{key:1,class:d(a(Xe).Image),source:e.source,alt:"",role:"presentation",onLoad:T,onError:g},null,8,["class","source"])):O("",!0)],10,bu))}});en.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"size",description:"Size of avatar",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"name",description:"The name of the person",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"initials",description:"Initials of person to display",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"customer",description:"Whether the avatar is for a customer",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"source",description:"URL of the avatar image which falls back to initials if the image fails to load",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"accessibilityLabel",description:"Accessible label for the avatar image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"error"}]};const vu="Polaris-Button",xu="Polaris-Button--pressed",Su="Polaris-Button--disabled",Tu="Polaris-Button--connectedDisclosure",Cu="Polaris-Button__Content",_u="Polaris-Button--plain",ku="Polaris-Button--textAlignLeft",Pu="Polaris-Button--textAlignCenter",Au="Polaris-Button--textAlignRight",wu="Polaris-Button__Icon",Iu="Polaris-Button--fullWidth",Du="Polaris-Button--hidden",Lu="Polaris-Button__Spinner",Bu="Polaris-Button--primary",$u="Polaris-Button--destructive",Mu="Polaris-Button--outline",Eu="Polaris-Button--loading",Nu="Polaris-Button--removeUnderline",qu="Polaris-Button--iconOnly",Ru="Polaris-Button--sizeSlim",Fu="Polaris-Button--sizeLarge",Ou="Polaris-Button--monochrome",Vu="Polaris-Button__Text",Hu="Polaris-Button__ConnectedDisclosureWrapper",zu="Polaris-Button__ConnectedDisclosure";var Z={Button:vu,pressed:xu,disabled:Su,connectedDisclosure:Tu,Content:Cu,plain:_u,textAlignLeft:ku,textAlignCenter:Pu,textAlignRight:Au,Icon:wu,fullWidth:Iu,hidden:Du,Spinner:Lu,primary:Bu,destructive:$u,outline:Mu,loading:Eu,removeUnderline:Nu,iconOnly:qu,sizeSlim:Ru,sizeLarge:Fu,monochrome:Ou,Text:Vu,ConnectedDisclosureWrapper:Hu,ConnectedDisclosure:zu},Ke=(e=>(e[e.Click=0]="Click",e[e.EscapeKeypress=1]="EscapeKeypress",e[e.FocusOut=2]="FocusOut",e[e.ScrollOut=3]="ScrollOut",e))(Ke||{}),De=(e=>(e.Entering="entering",e.Entered="entered",e.Exiting="exiting",e.Exited="exited",e))(De||{});function ss(e,t){if(e===t)return!0;let o=t.parentNode;for(;o!=null;){if(o===e)return!0;o=o.parentNode}return!1}function ju(e,{id:t,active:o=!1,ariaHaspopup:s,activatorDisabled:r=!1}){r||(e.tabIndex=e.tabIndex||0),e.setAttribute("aria-controls",t),e.setAttribute("aria-owns",t),e.setAttribute("aria-expanded",String(o)),s!=null&&e.setAttribute("aria-haspopup",String(s))}const Uu="Polaris-PositionedOverlay",Wu="Polaris-PositionedOverlay--fixed",Xu="Polaris-PositionedOverlay--calculating",Gu="Polaris-PositionedOverlay--preventInteraction";var ia={PositionedOverlay:Uu,fixed:Wu,calculating:Xu,preventInteraction:Gu};const Ku="Polaris-Popover",Yu="Polaris-Popover__PopoverOverlay",Ju="Polaris-Popover--measuring",Qu="Polaris-Popover--fullWidth",Zu="Polaris-Popover__Content",ed="Polaris-Popover--positionedAbove",td="Polaris-Popover__Wrapper",od="Polaris-Popover__Pane",nd="Polaris-Popover__Section",ad="Polaris-Popover__FocusTracker";var be={Popover:Ku,PopoverOverlay:Yu,"PopoverOverlay-entering":"Polaris-Popover__PopoverOverlay--entering","PopoverOverlay-open":"Polaris-Popover__PopoverOverlay--open","PopoverOverlay-exiting":"Polaris-Popover__PopoverOverlay--exiting",measuring:Ju,fullWidth:Qu,Content:Zu,positionedAbove:ed,Wrapper:td,"Content-fullHeight":"Polaris-Popover__Content--fullHeight","Content-fluidContent":"Polaris-Popover__Content--fluidContent",Pane:od,"Pane-fixed":"Polaris-Popover__Pane--fixed",Section:nd,FocusTracker:ad,"PopoverOverlay-hideOnPrint":"Polaris-Popover__PopoverOverlay--hideOnPrint"};function sd(e,t,o,s,r,i,c,p=0){const v=e.top,T=v+e.height,g=e.top-p,h=r.height-e.top-e.height,x=t.height,w=o.activator+o.container,B=o.container,D=e.top-Math.max(s.top,0),C=r.top+Math.min(r.height,s.top+s.height)-(e.top+e.height),P=D>=B,E=C>=B,N=Math.min(h,x),G=Math.min(g,x),k=c?0:r.top,H={height:G-w,top:v+k-G,positioning:"above"},b={height:N-w,top:T+k,positioning:"below"};return i==="above"?(P||D>=C&&!E)&&(g>x||g>h)?H:b:i==="below"?(E||C>=D&&!P)&&(h>x||h>g)?b:H:P&&E?g>h?H:b:D>B?H:b}function rd(e,t,o,s,r){const i=o.width-t.width;if(r==="left")return Math.min(i,Math.max(0,e.left-s.horizontal));if(r==="right"){const c=o.width-(e.left+e.width);return Math.min(i,Math.max(0,c-s.horizontal))}return Math.min(i,Math.max(0,e.center.x-t.width/2))}function id(e,t){const{center:o}=e;return o.y<t.top||o.y>t.top+t.height}function Ys(){return new it({top:window.scrollY,left:window.scrollX,height:window.innerHeight,width:document.body.clientWidth})}function ld(e,t=Ys()){const o=Math.max(e.top,0),s=Math.max(e.left,0),r=Math.min(e.top+e.height,t.height),i=Math.min(e.left+e.width,t.width);return new it({top:o,left:s,height:r-o,width:i-s})}function cd(e){return e===document}function ud(e){const t=window.getComputedStyle(e);return{activator:parseFloat(t.marginTop||"0"),container:parseFloat(t.marginBottom||"0"),horizontal:parseFloat(t.marginLeft||"0")}}function dd(e){const t=e.closest(Ai.selector)||document.body,o=t===document.body?"auto":parseInt(window.getComputedStyle(t).zIndex||"0",10);return o==="auto"||Number.isNaN(o)?null:o}const pd={inheritAttrs:!1,render(){return null}},Le=I(S(y({},pd),{props:{event:{type:String,required:!0},capture:{type:Boolean},passive:{type:Boolean},handler:{type:Function,required:!0}},setup(e){const t=e;function o(){const{event:r,capture:i,passive:c,handler:p}=t;window.addEventListener(r,p,{capture:i,passive:c})}function s(r){const{event:i,handler:c,capture:p}=r||t;window.removeEventListener(i,c,p)}return Je(()=>y({},t),(r,i)=>{r!==i&&(s(i),o())}),fe(()=>o()),Co(()=>s()),()=>{}}}));Le.__docgenInfo={exportName:"default",displayName:"EventListener",description:"",tags:{},props:[{name:"event",type:{name:"string"},required:!0},{name:"capture",type:{name:"boolean"}},{name:"passive",type:{name:"boolean"}},{name:"handler",type:{name:"Function as unknown as () => BaseEventProps['handler']"},required:!0}]};function md(e){const t=e.closest(Jo.selector);return t instanceof HTMLElement?t:document}const yd={inheritAttrs:!1},Js=I(S(y({},yd),{props:{active:{type:Boolean},activator:null,preferInputActivator:{type:Boolean},preferredPosition:null,preferredAlignment:null,fullWidth:{type:Boolean},fixed:{type:Boolean},preventInteraction:{type:Boolean},classNames:null,zIndexOverride:null,hideOnPrint:{type:Boolean}},emits:["change-content-styles","scroll-out"],setup(e,{emit:t}){const o=e,s={childList:!0,subtree:!0,characterData:!0},r=L(null),i=L(null),c=L(null),p=L(0),v=L(0),T=L(null),g=L(null),h=L(!0),x=L("below"),w=L(Oe(o.activator)),B=L(!1),D=L(!1),C=L(null),P=L(null),E=u(()=>{const H=o.classNames;return F(ia.PositionedOverlay,o.fixed&&ia.fixed,o.preventInteraction&&ia.preventInteraction,H)}),N=u(()=>F(be.Popover,x.value==="above"&&be.positionedAbove,o.fullWidth&&be.fullWidth,h.value&&be.measuring,o.hideOnPrint&&be["PopoverOverlay-hideOnPrint"])),G=u(()=>({top:p.value==null||Number.isNaN(p.value)?void 0:`${p.value}px`,left:c.value==null||Number.isNaN(c.value)?void 0:`${c.value}px`,right:i.value==null||Number.isNaN(i.value)?void 0:`${i.value}px`,width:T.value==null||Number.isNaN(T.value)?void 0:`${T.value}px`,zIndex:o.zIndexOverride||g.value||void 0})),k=()=>{if(P.value&&P.value.disconnect(),v.value=0,x.value="below",h.value=!0,r.value&&C.value){const{activator:H,preferredPosition:b="below",preferredAlignment:$="center",fullWidth:W,fixed:se,preferInputActivator:ee=!0}=o,Te=ee&&H.querySelector("input")||H,z=Oe(Te),Q=Oe(r.value),Ae=cd(C.value)?document.body:C.value,ge=Oe(Ae),le=W?new it(S(y({},Q),{width:z.width})):Q;Ae===document.body&&(ge.height=document.body.scrollHeight);let dt=0;const pt=Ae.querySelector(`${qs.selector}`);pt&&(dt=pt.clientHeight);const mt=r.value.firstElementChild&&r.value.firstChild?ud(r.value.firstElementChild):{activator:0,container:0,horizontal:0},X=Ys(),ce=dd(H),re=ce==null?ce:ce+1,de=sd(z,le,mt,ge,X,b,se,dt),yt=rd(z,le,X,mt,$);h.value=!1,w.value=Oe(H),c.value=$!=="right"?yt:null,i.value=$==="right"?yt:null,p.value=B.value?p.value:de.top,B.value=Boolean(se),v.value=de.height||0,T.value=W?le.width:null,x.value=de.positioning,D.value=id(z,ld(ge)),g.value=re,t("change-content-styles",{height:`${v.value}px`}),P.value&&(P.value.observe(r.value,s),P.value.observe(H,s))}};return wi(()=>{P.value=new MutationObserver(k)}),Qo(()=>{o.active&&p.value!==0&&D.value&&t("scroll-out")}),fe(()=>{C.value=md(o.activator),C.value&&!o.fixed&&C.value.addEventListener("scroll",k),k()}),Co(()=>{C.value&&!o.fixed&&C.value.removeEventListener("scroll",k)}),(H,b)=>(l(),m("div",{class:d(a(E)),style:lt(a(G)),ref_key:"overlayRef",ref:r},[A("div",xe({class:a(N)},y({},a(Ii).props)),[f(H.$slots,"default",{measuring:h.value,left:c.value,right:i.value,desiredHeight:v.value,positioning:x.value,activatorRect:w.value})],16),V(a(Le),{event:"resize",handler:k})],6))}}));Js.__docgenInfo={exportName:"default",displayName:"PositionedOverlay",description:"",tags:{},props:[{name:"active",required:!0,type:{name:"boolean"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"PreferredPosition"}},{name:"preferredAlignment",required:!1,type:{name:"PreferredAlignment"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"preventInteraction",required:!1,type:{name:"boolean"}},{name:"classNames",required:!1,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}}],events:[{name:"change-content-styles",type:{names:["Record"]}},{name:"scroll-out"}],slots:[{name:"default",scoped:!0,bindings:[{name:"measuring",title:"binding"},{name:"left",title:"binding"},{name:"right",title:"binding"},{name:"desired-height",title:"binding"},{name:"positioning",title:"binding"},{name:"activator-rect",title:"binding"}]}]};const Go=I({setup(e){return(t,o)=>(l(),m("div",{class:d(a(be).Section)},[f(t.$slots,"default")],2))}});Go.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},slots:[{name:"default"}]};const Pa=I({props:{fixed:{type:Boolean},sectioned:{type:Boolean}},emits:["scrolled-to-bottom"],setup(e,{emit:t}){const o=e,s=u(()=>F(be.Pane,o.fixed&&be["Pane-fixed"]));return(r,i)=>e.fixed?(l(),m("div",{key:0,class:d(a(s))},[e.sectioned?(l(),M(a(Go),{key:0},{default:_(()=>[f(r.$slots,"default")]),_:3})):f(r.$slots,"default",{key:1})],2)):(l(),M(a(ct),{key:1,shadow:"",class:d(a(s)),onScrolledToBottom:i[0]||(i[0]=c=>t("scrolled-to-bottom"))},{default:_(()=>[e.sectioned?(l(),M(a(Go),{key:0},{default:_(()=>[f(r.$slots,"default")]),_:3})):f(r.$slots,"default",{key:1})]),_:3},8,["class"]))}});Pa.__docgenInfo={exportName:"default",displayName:"Pane",description:"",tags:{},props:[{name:"fixed",required:!1,type:{name:"boolean"}},{name:"sectioned",required:!1,type:{name:"boolean"}}],events:[{name:"scrolled-to-bottom"}],slots:[{name:"default"}]};const hd=["id","tabIndex"],fd={inheritAttrs:!1},Qs=I(S(y({},fd),{props:{fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},preferredPosition:{default:"below"},preferredAlignment:{default:"center"},active:{type:Boolean},id:null,zIndexOverride:{default:void 0},activator:null,preferInputActivator:{default:!0},sectioned:{type:Boolean},fixed:{type:Boolean},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:t}){const o=e,s=L(De.Exited),r=L(null),i=L(null),c=L(null),p=L({}),v=N=>{s.value=N,r.value&&r.value.getBoundingClientRect()},T=()=>{i.value&&window.clearTimeout(i.value),c.value&&window.clearTimeout(c.value)};Je(()=>o.active,()=>{const N=o.active?De.Entering:De.Exiting,G=o.active?De.Entered:De.Exited;v(N),T();const k=window.setTimeout(()=>{s.value=G},parseInt(Ns.motion["duration-100"],10));o.active?i.value=k:c.value=k});const g=u(()=>F(be.PopoverOverlay,s.value===De.Entering&&be["PopoverOverlay-entering"],s.value===De.Entered&&be["PopoverOverlay-open"],s.value===De.Exiting&&be["PopoverOverlay-exiting"])),h=u(()=>F(be.Content,o.fullHeight&&be["Content-fullHeight"],o.fluidContent&&be["Content-fluidContent"])),x=()=>{t("close",Ke.ScrollOut)},w=()=>{t("close",Ke.EscapeKeypress)},B=N=>{const G=N.target,k=r.value&&ss(r.value,G),H=ss(o.activator,G);k||H||s.value!==De.Entered||t("close",Ke.Click)},D=()=>{t("close",Ke.FocusOut)},C=()=>{t("close",Ke.FocusOut)},P=N=>{p.value=N},E=()=>{o.autofocusTarget==="none"||!r.value||requestAnimationFrame(()=>{if(r.value){const N=Dl(r.value);N&&o.autofocusTarget==="first-node"?N.focus():r.value.focus()}})};return fe(()=>{o.active&&(E(),v(De.Entered))}),Co(()=>{T()}),(N,G)=>(l(),M(a(Js),{id:e.id,fullWidth:e.fullWidth,active:e.active,activator:e.activator,classNames:a(g),preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,onScrollOut:x,onChangeContentStyles:P},{default:_(()=>[A("div",{class:d(a(be).FocusTracker),tabIndex:"0",onFocus:D},null,34),V(a(_a),{"color-scheme":e.colorScheme},{default:_(()=>[A("div",{class:d(a(be).Wrapper)},[A("div",{id:e.id,tabIndex:e.autofocusTarget==="none"?void 0:-1,style:lt(p.value),class:d(a(h)),ref_key:"contentRef",ref:r},[f(N.$slots,"extra-content"),V(a(Pa),{sectioned:e.sectioned,fixed:e.fixed,onScrolledToBottom:G[0]||(G[0]=k=>N.$emit("scrolled-to-bottom"))},{default:_(()=>[f(N.$slots,"overlay")]),_:3},8,["sectioned","fixed"])],14,hd)],2),A("div",{class:d(a(be).FocusTracker),tabIndex:"0",onFocus:C},null,34),V(a(Le),{event:"click",handler:B}),V(a(Le),{event:"touchstart",handler:B}),V(a(st),{keyCode:a(ze).Escape,handler:w},null,8,["keyCode"])]),_:3},8,["color-scheme"])]),_:3},8,["id","fullWidth","active","activator","classNames","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride"]))}}));Qs.__docgenInfo={exportName:"default",displayName:"PopoverOverlay",description:"",tags:{},props:[{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"fullHeight",required:!1,type:{name:"boolean"}},{name:"fluidContent",required:!1,type:{name:"boolean"}},{name:"preferredPosition",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'below'"}},{name:"preferredAlignment",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'center'"}},{name:"active",required:!0,type:{name:"boolean"}},{name:"id",required:!0,type:{name:"string"}},{name:"zIndexOverride",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"activator",required:!0,type:{name:"HTMLElement"}},{name:"preferInputActivator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"sectioned",required:!1,type:{name:"boolean"}},{name:"fixed",required:!1,type:{name:"boolean"}},{name:"hideOnPrint",required:!1,type:{name:"boolean"}},{name:"colorScheme",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"scrolled-to-bottom"},{name:"close",type:{names:["PopoverCloseSource"]}}],slots:[{name:"extra-content"},{name:"overlay"}]};const gd=["data-portal-id"],bd={inheritAttrs:!1},Zs=I(S(y({},bd),{props:{idPrefix:{type:String,default:""}},setup(e){const t=e,o=ke("portalManager",new Ks),s=L(""),{useUniqueId:r}=Ie();return fe(()=>{const i=r("portal");s.value=t.idPrefix?`${t.idPrefix}-${i}`:i,o&&o.register(s.value)}),(i,c)=>a(o)?(l(),M(Di,{key:0,to:"#PolarisPortalsContainer"},[A("div",{"data-portal-id":s.value},[f(i.$slots,"default")],8,gd)])):O("",!0)}}));Zs.__docgenInfo={exportName:"default",displayName:"Portal",description:"",tags:{},props:[{name:"idPrefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}]};const vd={inheritAttrs:!1},Ue=I(S(y({},vd),{props:{preferredPosition:{default:void 0},preferredAlignment:{default:void 0},active:{type:Boolean},preferInputActivator:{default:!0},activatorWrapper:{default:"div"},zIndexOverride:{default:void 0},preventFocusOnClose:{type:Boolean},sectioned:{type:Boolean},fullWidth:{type:Boolean},fullHeight:{type:Boolean},fluidContent:{type:Boolean},fixed:{type:Boolean},ariaHaspopup:{default:void 0},hideOnPrint:{type:Boolean},colorScheme:{default:void 0},autofocusTarget:{default:"container"}},emits:["close","scrolled-to-bottom"],setup(e,{emit:t}){const o=e,s=L(null),r=L(null),{useUniqueId:i}=Ie();eo();const c=L(i("popover")),p=()=>{if(s.value){const g=s.value,x=sa(g)||g,w="disabled"in x&&Boolean(x.disabled);ju(x,{id:c.value,active:o.active,ariaHaspopup:o.ariaHaspopup,activatorDisabled:w})}};Je(()=>o.active,()=>p());const v=g=>{let{parentElement:h}=g;for(;h;){if(h.matches(Li.selector))return!1;h=h.parentElement}return!0},T=g=>{if(t("close",g),!(!s.value||o.preventFocusOnClose)&&(g===Ke.FocusOut||g===Ke.EscapeKeypress)&&r.value){const h=sa(r.value)||sa(s.value)||s.value;Il(h,v)||h.focus()}};return fe(()=>{if(s.value){const g=s.value.firstElementChild;g&&(r.value=g),p()}}),(g,h)=>(l(),M(he(e.activatorWrapper),{ref_key:"container",ref:s},{default:_(()=>[f(g.$slots,"activator"),r.value&&e.active?(l(),M(a(Zs),{key:0,idPrefix:"popover"},{default:_(()=>[V(a(Qs),{id:c.value,activator:r.value,fullWidth:e.fullWidth,active:e.active,preferInputActivator:e.preferInputActivator,fixed:e.fixed,preferredPosition:e.preferredPosition,preferredAlignment:e.preferredAlignment,zIndexOverride:e.zIndexOverride,autofocusTarget:e.autofocusTarget,sectioned:e.sectioned,colorScheme:e.colorScheme,onClose:T,onScrolledToBottom:h[0]||(h[0]=x=>t("scrolled-to-bottom"))},{overlay:_(x=>[f(g.$slots,"content")]),"extra-content":_(()=>[f(g.$slots,"extra-content")]),_:3},8,["id","activator","fullWidth","active","preferInputActivator","fixed","preferredPosition","preferredAlignment","zIndexOverride","autofocusTarget","sectioned","colorScheme"])]),_:3})):O("",!0)]),_:3},512))}}));Ue.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"preferredPosition",description:"The preferred direction to open the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Show or hide the Popover",required:!0,type:{name:"boolean"}},{name:"preferInputActivator",description:"Use the activator's input element to calculate the Popover position",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"true"}},{name:"activatorWrapper",description:"The element type to wrap the activator with",tags:{default:[{description:"'div'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"zIndexOverride",description:"Override on the default z-index of 400",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"preventFocusOnClose",description:`Prevents focusing the activator or the next focusable element
when the popover is deactivated`,required:!1,type:{name:"boolean"}},{name:"sectioned",description:"Automatically add wrap content in a section",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow popover to stretch to the full width of its activator",required:!1,type:{name:"boolean"}},{name:"fullHeight",description:"Allow popover to stretch to fit content vertically",required:!1,type:{name:"boolean"}},{name:"fluidContent",description:"Allow popover content to determine the overlay width and height",required:!1,type:{name:"boolean"}},{name:"fixed",description:"Remains in a fixed position",required:!1,type:{name:"boolean"}},{name:"ariaHaspopup",description:"Used to illustrate the type of popover element",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnPrint",description:"Allow the popover overlay to be hidden when printing",required:!1,type:{name:"boolean"}},{name:"colorScheme",description:"Accepts a color scheme for the contents of the popover",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"undefined"}},{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",tags:{default:[{description:"'container'",title:"default"}]},required:!1,type:{name:"PopoverAutofocusTarget"},defaultValue:{func:!1,value:"'container'"}}],events:[{name:"close",type:{names:["PopoverCloseSource"]}},{name:"scrolled-to-bottom"}],slots:[{name:"activator"},{name:"content"},{name:"extra-content"}]};const xd=["role","type","disabled","aria-busy","aria-controls","aria-expanded","aria-describedby","aria-pressed"],Sd={inheritAttrs:!1},Aa=I(S(y({},Sd),{props:{id:null,url:null,external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,className:null,others:null},setup(e){const t=e,o=eo(),s=v=>{const T={mouseup:Zt};return v.forEach(g=>{const h=`on${Sa.exports.capitalize(g)}`;o[h]&&(T[g]=o[h])}),T},r=s(["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"]),i=s(["blur","click","focus","mouseover","touchstart"]),c=u(()=>({id:t.id,class:t.className,"aria-label":t.accessibilityLabel})),p=u(()=>S(y(y({},c),t.others),{role:t.role}));return(v,T)=>e.url&&e.disabled?(l(),m("a",jo(xe({key:0},a(c))),[f(v.$slots,"default")],16)):e.url&&!e.disabled?(l(),M(a(_o),xe({key:1},a(p),{url:e.url,external:e.external,download:e.download},To(a(i))),{default:_(()=>[f(v.$slots,"default")]),_:3},16,["url","external","download"])):(l(),m("button",xe({key:2},a(c),{role:e.role,type:e.submit?"submit":"button",disabled:e.disabled,"aria-busy":e.loading?!0:void 0,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-describedby":e.ariaDescribedBy,"aria-pressed":e.pressed},To(a(r))),[f(v.$slots,"default")],16,xd))}}));Aa.__docgenInfo={exportName:"default",displayName:"UnstyledButton",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}},{name:"url",required:!1,type:{name:"string"}},{name:"external",required:!1,type:{name:"boolean"}},{name:"download",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"pressed",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"role",required:!1,type:{name:"string"}},{name:"ariaControls",required:!1,type:{name:"string"}},{name:"ariaExpanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",required:!1,type:{name:"string"}},{name:"className",required:!1,type:{name:"string"}},{name:"others",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"default"}]};const Td=I({props:{action:null,overrides:null,keyProp:null},setup(e){const t=e,o=u(()=>{const c=t.action,{content:s,onAction:r}=c,i=K(c,["content","onAction"]);return y(y({},i),t.overrides)});return(s,r)=>(l(),M(Aa,xe({key:e.keyProp},a(o),{onClick:e.action.onAction}),{default:_(()=>[He(ne(e.action.content),1)]),_:1},16,["onClick"]))}});Td.__docgenInfo={exportName:"default",displayName:"UnstyledButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"UnstyledButtonProps"}]}},{name:"keyProp",required:!1,type:{name:"any"}}]};const Cd={viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},_d=A("path",{d:"M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"},null,-1),kd=[_d];function Pd(e,t){return l(),m("svg",Cd,kd)}var Ad={render:Pd};const wd={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Id=A("path",{d:"M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"},null,-1),Dd=[Id];function Ld(e,t){return l(),m("svg",wd,Dd)}var Bd={render:Ld};const $d="Polaris-Spinner",Md="Polaris-Spinner--loading",Ed="Polaris-Spinner--sizeSmall",Nd="Polaris-Spinner--sizeLarge";var rs={Spinner:$d,loading:Md,sizeSmall:Ed,sizeLarge:Nd};const oo=I({props:{size:{type:String,default:"large"},accessibilityLabel:{type:String,default:null},hasFocusableParent:{type:Boolean}},setup(e){const t=e,o=L(y({},!t.hasFocusableParent&&{role:"status"})),s=u(()=>{const r=ve("size",t.size);return F(rs.Spinner,t.size&&rs[r])});return(r,i)=>(l(),m("div",null,[A("span",{class:d(a(s))},[e.size==="large"?(l(),M(a(Ad),{key:0})):(l(),M(a(Bd),{key:1}))],2),A("span",jo(da(o.value)),[V(a(Me),null,{default:_(()=>[A("span",null,ne(e.accessibilityLabel),1)]),_:1})],16)]))}});oo.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",description:"Size of the spinner",tags:{},values:["small | large"],type:{name:"String as () => Size"},defaultValue:{func:!1,value:"'large'"}},{name:"accessibilityLabel",description:"Accessible label for the spinner",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasFocusableParent",description:"Allows the component to apply the correct accessibility roles based on focus",type:{name:"boolean"}}]};const qd={inheritAttrs:!1},ga=I(S(y({},qd),{props:{commonProps:null,linkProps:null,actionProps:null,removeUnderline:null,children:{type:Boolean},disclosure:null,loading:null,icon:null},setup(e){const t=e,o=eo(),s=u(()=>{const p=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],v={};return p.forEach(T=>{const g=`on${Sa.exports.capitalize(T)}`;o[g]&&(v[T]=o[g])}),v}),r=u(()=>F(Z.Icon,t.loading&&Z.hidden)),i=u(()=>F(Z.Text,t.removeUnderline&&Z.removeUnderline)),c=u(()=>t.disclosure==="select"?Rs:t.disclosure==="up"?Fs:Ta);return(p,v)=>(l(),M(a(Aa),xe(y(y(y({},e.commonProps),e.linkProps),e.actionProps),To(a(s))),{default:_(()=>[A("span",{class:d(a(Z).Content)},[e.loading?(l(),m("span",{key:0,class:d(a(Z).Spinner)},[V(a(oo),{size:"small",accessibilityLabel:"Loading"})],2)):O("",!0),e.icon?(l(),m("span",{key:1,class:d(a(r))},[V(a(ue),{source:e.loading?"placeholder":e.icon},null,8,["source"])],2)):O("",!0),e.children?(l(),m("span",{class:d(a(i)),key:e.actionProps&&e.actionProps.disabled?"text-disabled":"text"},[f(p.$slots,"default")],2)):O("",!0),e.disclosure?(l(),m("span",{key:3,class:d(a(Z).Icon)},[A("div",null,[V(a(ue),{source:e.loading?"placeholder":a(c)},null,8,["source"])])],2)):O("",!0)],2)]),_:3},16))}}));ga.__docgenInfo={exportName:"default",displayName:"ButtonMarkup",description:"",tags:{},props:[{name:"commonProps",required:!1,type:{name:"CommonButtonProps"}},{name:"linkProps",required:!1,type:{name:"LinkButtonProps"}},{name:"actionProps",required:!1,type:{name:"ActionButtonProps"}},{name:"removeUnderline",required:!1,type:{name:"TSIndexedAccessType"}},{name:"children",required:!1,type:{name:"boolean"}},{name:"disclosure",required:!1,type:{name:"TSIndexedAccessType"}},{name:"loading",required:!1,type:{name:"TSIndexedAccessType"}},{name:"icon",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}]};const Rd=["disabled","aria-label","aria-describedby"],Fd={inheritAttrs:!1},Se=I(S(y({},Fd),{props:{id:null,url:{default:""},external:{type:Boolean},download:{type:[String,Boolean]},submit:{type:Boolean},disabled:{type:Boolean},loading:{type:Boolean},pressed:{type:Boolean},accessibilityLabel:null,role:null,ariaControls:null,ariaExpanded:{type:Boolean},ariaDescribedBy:null,primary:{type:Boolean},destructive:{type:Boolean},size:{default:"medium"},textAlign:{default:void 0},outline:{type:Boolean},fullWidth:{type:Boolean},disclosure:{type:[String,Boolean],default:void 0},plain:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},icon:null,connectedDisclosure:null},setup(e){const t=e,o=_e(),s=eo(),r=u(()=>{const C=["blur","click","focus","keydown","keypress","keyup","mouseover","touchstart"],P={};return C.forEach(E=>{const N=`on${Sa.exports.capitalize(E)}`;s[N]&&(P[E]=s[N])}),P}),i=!!o.default,c=L(!1),p=u(()=>t.disabled||t.loading),v=u(()=>{const C=t.textAlign&&ve("textAlign",t.textAlign),P=t.size&&ve("size",t.size);return F(Z.Button,t.primary&&Z.primary,t.outline&&Z.outline,t.destructive&&Z.destructive,p.value&&Z.disabled,t.loading&&Z.loading,t.plain&&Z.plain,t.pressed&&!t.disabled&&!t.url&&Z.pressed,t.monochrome&&Z.monochrome,t.size!=="medium"&&P&&Z[P],C&&Z[C],t.fullWidth&&Z.fullWidth,t.icon&&!i&&Z.iconOnly,t.connectedDisclosure&&Z.connectedDisclosure,t.removeUnderline&&Z.removeUnderline)}),T=u(()=>{const C=t.textAlign&&ve("textAlign",t.textAlign),P=t.size&&ve("size",t.size);return F(Z.Button,t.primary&&Z.primary,t.outline&&Z.outline,t.size!=="medium"&&P&&Z[P],C&&Z[C],t.destructive&&Z.destructive,t.connectedDisclosure&&t.connectedDisclosure.disabled&&Z.disabled,Z.iconOnly,Z.ConnectedDisclosure,t.monochrome&&Z.monochrome)}),g=u(()=>{const{id:C,accessibilityLabel:P,role:E,ariaDescribedBy:N}=t;return{id:C,className:v.value,accessibilityLabel:P,role:E,ariaDescribedBy:N}}),h=u(()=>{const{url:C,external:P,download:E}=t;return{url:C,external:P,download:E}}),x=u(()=>{const{submit:C,loading:P,pressed:E}=t;return{submit:C,loading:P,pressed:E,disabled:p.value}}),w=u(()=>{const{removeUnderline:C,disclosure:P,loading:E,icon:N}=t;return{commonProps:g.value,linkProps:h.value,actionProps:x.value,removeUnderline:C,children:i,disclosure:P,loading:E,icon:N}}),B=u(()=>{if(t.connectedDisclosure){const{disabled:C,accessibilityLabel:P="Related actions"}=t.connectedDisclosure;return{disabled:C,disclosureLabel:P}}return{}}),D=()=>{c.value=!c.value};return(C,P)=>e.connectedDisclosure?(l(),m("div",{key:0,class:d(a(Z).ConnectedDisclosureWrapper)},[V(ga,xe(a(w),To(a(r))),{default:_(()=>[f(C.$slots,"default")]),_:3},16),V(a(Ue),{active:c.value,preferredAlignment:"right",onClose:D},{activator:_(()=>[A("button",{type:"button",class:d(a(T)),disabled:a(B).disabled,"aria-label":a(B).disclosureLabel,"aria-describedby":e.ariaDescribedBy,onClick:D,onMouseup:P[0]||(P[0]=(...E)=>a(Zt)&&a(Zt)(...E))},[A("span",null,[V(a(ue),{source:a(Ta)},null,8,["source"])])],42,Rd)]),content:_(()=>[V(a(je),{items:e.connectedDisclosure.actions,onActionAnyItem:D},$e({_:2},[ye(e.connectedDisclosure.actions,({prefixId:E})=>({name:`prefix-${E}`,fn:_(()=>[f(C.$slots,`prefix-${E}`)])})),ye(e.connectedDisclosure.actions,({suffixId:E})=>({name:`suffix-${E}`,fn:_(()=>[f(C.$slots,`suffix-${E}`)])}))]),1032,["items"])]),_:3},8,["active"])],2)):(l(),M(ga,xe({key:1},a(w),To(a(r))),{default:_(()=>[f(C.$slots,"default")]),_:3},16))}}));Se.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the button",required:!1,type:{name:"string"}},{name:"url",description:"A destination to link to, rendered in the href attribute of a link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"external",description:"Forces url to open in a new tab",required:!1,type:{name:"boolean"}},{name:"download",description:`Tells the browser to download the url instead of opening it.
Provides a hint for the downloaded filename if it is a string value`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"submit",description:"Allows the button to submit a form",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disables the button, disallowing merchant interaction",required:!1,type:{name:"boolean"}},{name:"loading",description:"Replaces button text with a spinner while a background action is being performed",required:!1,type:{name:"boolean"}},{name:"pressed",description:"Sets the button in a pressed state",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}},{name:"role",description:"A valid WAI-ARIA role to define the semantic value of this element",required:!1,type:{name:"string"}},{name:"ariaControls",description:"Id of the element the button controls",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Tells screen reader the controlled element is expanded",required:!1,type:{name:"boolean"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the button",required:!1,type:{name:"string"}},{name:"primary",description:"Provides extra visual weight and identifies the primary action in a set of buttons",required:!1,type:{name:"boolean"}},{name:"destructive",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"size",description:"Changes the size of the button, giving it more or less padding",tags:{values:[{description:"slim | medium | large",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"slim"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textAlign",description:"Changes the inner text alignment of the button",tags:{values:[{description:"left | center | right",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"center"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:`Gives the button a subtle alternative to the default button styling,
appropriate for certain backdrops`,required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Indicates a dangerous or potentially negative action",required:!1,type:{name:"boolean"}},{name:"disclosure",description:"Displays the button with a disclosure icon. Defaults to `down` when set to true",tags:{values:[{description:"down | up | select | boolean",title:"values"}]},required:!1,type:{name:"union",elements:[{name:'"down"'},{name:'"up"'},{name:'"select"'},{name:"boolean"}]},defaultValue:{func:!1,value:"undefined"}},{name:"plain",description:"Renders a button that looks like a link",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes plain and outline Button colors (text, borders, icons) the same as the current text color\nAlso adds an underline to `plain` Buttons",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes underline from button text (including on interaction)when monochrome and plain are true",required:!1,type:{name:"boolean"}},{name:"icon",description:"Icon to display to the left of the button content.",required:!1,type:{name:"IconSource"}},{name:"connectedDisclosure",description:"Disclosure button connected right of the button. Toggles a popover action list.",required:!1,type:{name:"ConnectedDisclosure"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const Od={inheritAttrs:!1},Vd=I(S(y({},Od),{props:{action:null,overrides:{default:()=>({})}},setup(e){const t=e,o=()=>{t.action.onAction&&t.action.onAction()},s=u(()=>{const p=t.action,{onAction:r,content:i}=p,c=K(p,["onAction","content"]);return y(y({},c),t.overrides)});return(r,i)=>e.action?(l(),M(a(Se),xe({key:0},a(s),{onClick:o}),{default:_(()=>[He(ne(e.action.content),1)]),_:1},16)):O("",!0)}}));Vd.__docgenInfo={exportName:"default",displayName:"ButtonFrom",description:"",tags:{},props:[{name:"action",required:!0,type:{name:"ComplexAction"}},{name:"overrides",required:!1,type:{name:"Partial",elements:[{name:"ButtonProps"}]},defaultValue:{func:!1,value:"() => ({})"}}]};const Hd="Polaris-ButtonGroup",zd="Polaris-ButtonGroup__Item",jd="Polaris-ButtonGroup--segmented",Ud="Polaris-ButtonGroup--fullWidth",Wd="Polaris-ButtonGroup--extraTight",Xd="Polaris-ButtonGroup--tight",Gd="Polaris-ButtonGroup--loose";var at={ButtonGroup:Hd,Item:zd,"Item-plain":"Polaris-ButtonGroup__Item--plain",segmented:jd,"Item-focused":"Polaris-ButtonGroup__Item--focused",fullWidth:Ud,extraTight:Wd,tight:Xd,loose:Gd};const Kd={inheritAttrs:!1},er=I(S(y({},Kd),{setup(e){const t=L(!1),o=_e(),s=u(()=>o.default&&o.default()[0].props),r=u(()=>{const p=s.value&&(s.value.plain===""||s.value.plain);return F(at.Item,t.value&&at["Item-focused"],p&&at["Item-plain"])}),i=()=>{t.value=!0},c=()=>{t.value=!1};return(p,v)=>(l(),m("div",{class:d(a(r)),onFocus:i,onBlur:c},[f(p.$slots,"default")],34))}}));er.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const Yd=["data-buttongroup-segmented","data-buttongroup-connected-top","data-buttongroup-full-width"],Jd={inheritAttrs:!1},no=I(S(y({},Jd),{props:{spacing:null,segmented:{type:Boolean},fullWidth:{type:Boolean},connectedTop:{type:Boolean}},setup(e){const t=e,o=_e(),s=u(()=>F(at.ButtonGroup,t.spacing&&at[t.spacing],t.segmented&&at.segmented,t.fullWidth&&at.fullWidth));return(r,i)=>(l(),m("div",{class:d(a(s)),"data-buttongroup-segmented":e.segmented,"data-buttongroup-connected-top":e.connectedTop,"data-buttongroup-full-width":e.fullWidth},[a(o).default?(l(!0),m(ie,{key:0},ye(a(o).default(),(c,p)=>(l(),M(a(er),{key:p},{default:_(()=>[(l(),M(he(c)))]),_:2},1024))),128)):O("",!0)],10,Yd))}}));no.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"spacing",description:"Determines the space between button group items",required:!1,type:{name:"Spacing"}},{name:"segmented",description:"Join buttons as segmented group",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Buttons will stretch/shrink to occupy the full width",required:!1,type:{name:"boolean"}},{name:"connectedTop",description:"Remove top left and right border radius",required:!1,type:{name:"boolean"}}]};const Qd="Polaris-Caption";var Zd={Caption:Qd};const tn=I({setup(e){return(t,o)=>(l(),m("p",{class:d(a(Zd).Caption)},[f(t.$slots,"default")],2))}});tn.__docgenInfo={exportName:"default",displayName:"Caption",description:"",tags:{},slots:[{name:"default"}]};const ep="Polaris-Checkbox",tp="Polaris-Checkbox__Input",op="Polaris-Checkbox--keyFocused",np="Polaris-Checkbox__Backdrop",ap="Polaris-Checkbox__Icon",sp="Polaris-Checkbox--hover",rp="Polaris-Checkbox--error";var Ge={Checkbox:ep,Input:tp,keyFocused:op,Backdrop:np,"Input-indeterminate":"Polaris-Checkbox__Input--indeterminate",Icon:ap,hover:sp,error:rp};const wa=e=>`${e}Error`,ip="Polaris-Choice",lp="Polaris-Choice--labelHidden",cp="Polaris-Choice__Label",up="Polaris-Choice__Control",dp="Polaris-Choice--disabled",pp="Polaris-Choice__Descriptions",mp="Polaris-Choice__HelpText";var qe={Choice:ip,labelHidden:lp,Label:cp,Control:up,disabled:dp,Descriptions:pp,HelpText:mp};const Ia=e=>`${e}HelpText`,yp="Polaris-InlineError",hp="Polaris-InlineError__Icon";var is={InlineError:yp,Icon:hp};const fp=["id"],gp={key:1},ut=I({props:{message:null,fieldID:null},setup(e){return(t,o)=>e.message?(l(),m("div",{key:0,id:a(wa)(e.fieldID),class:d(a(is).InlineError)},[A("div",{class:d(a(is).Icon)},[V(a(ue),{source:a(Bi)},null,8,["source"])],2),typeof e.message=="object"?(l(),M(he(e.message),{key:0})):(l(),m("div",gp,ne(e.message),1))],10,fp)):O("",!0)}});ut.__docgenInfo={exportName:"default",displayName:"InlineError",description:"",tags:{},props:[{name:"message",description:"Content briefly explaining how to resolve the invalid form field input.",required:!0,type:{name:"Error"}},{name:"fieldID",description:"Unique identifier of the invalid form field that the message describes",required:!0,type:{name:"string"}}]};const bp={key:0},vp=["id"],Da=I({props:{id:null,disabled:{type:Boolean},error:{type:[null,Boolean]},labelHidden:{type:Boolean}},setup(e){const t=e,o=u(()=>F(qe.Choice,t.labelHidden&&qe.labelHidden,t.disabled&&qe.disabled));return(s,r)=>e.error&&typeof e.error!="boolean"||s.$slots["help-text"]?(l(),m("div",bp,[A("label",{class:d(a(o)),onClick:r[0]||(r[0]=i=>s.$emit("click")),onMouseover:r[1]||(r[1]=i=>s.$emit("mouseover")),onMouseout:r[2]||(r[2]=i=>s.$emit("mouseout"))},[A("span",{class:d(a(qe).Control)},[f(s.$slots,"default")],2),A("span",{class:d(a(qe).Label)},[f(s.$slots,"label")],2)],34),A("div",{class:d(a(qe).Descriptions)},[s.$slots["help-text"]?(l(),m("div",{key:0,id:a(Ia)(e.id),class:d(a(qe).HelpText)},[f(s.$slots,"help-text")],10,vp)):O("",!0),e.error&&typeof e.error!="boolean"?(l(),M(a(ut),{key:1,fieldID:e.id,message:e.error},null,8,["fieldID","message"])):O("",!0)],2)])):(l(),m("label",{key:1,class:d(a(o)),onClick:r[3]||(r[3]=i=>s.$emit("click")),onMouseover:r[4]||(r[4]=i=>s.$emit("mouseover")),onMouseout:r[5]||(r[5]=i=>s.$emit("mouseout"))},[A("span",{class:d(a(qe).Control)},[f(s.$slots,"default")],2),A("span",{class:d(a(qe).Label)},[f(s.$slots,"label")],2)],34))}});Da.__docgenInfo={exportName:"default",displayName:"Choice",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the choice",required:!0,type:{name:"string"}},{name:"disabled",description:"Whether the associated form control is disabled",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"mouseover"},{name:"mouseout"}],slots:[{name:"default"},{name:"label"},{name:"help-text"}]};const xp=["id","role","name","value","checked","disabled","aria-invalid","aria-controls","aria-describedby"],ao=I({props:{ariaControls:null,ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:[Boolean,String]},disabled:{type:Boolean},id:null,name:null,value:{type:[String,Boolean]},modelValue:{type:[String,Boolean]},error:{type:[null,Boolean]}},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:t}){const o=e,s=ke("withinListboxContext",!1),r=L(!1),i=L(!1),c=_e(),p=u(()=>{var b;return(b=c["help-text"])==null?void 0:b.call(c)}),{useUniqueId:v}=Ie(),T=u(()=>v("Checkbox",o.id)),g=u(()=>o.checked==="indeterminate"),h=u(()=>!g.value&&Boolean(o.checked)||typeof o.modelValue=="boolean"&&o.modelValue===!0),x=u(()=>g.value?$i:Os),w=u(()=>F(Ge.Checkbox,o.error&&Ge.error)),B=u(()=>F(Ge.Backdrop,r.value&&Ge.hover)),D=u(()=>F(Ge.Input,g.value&&Ge["Input-indeterminate"],i.value&&Ge.keyFocused)),C=u(()=>g.value?{indeterminate:"true","aria-checked":"mixed"}:{"aria-checked":h.value}),P=u(()=>{const b=[];return o.ariaDescribedBy&&b.push(o.ariaDescribedBy),o.error&&typeof o.error!="boolean"&&b.push(wa(T.value)),p.value&&b.push(Ia(T.value)),b.length?b.join(" "):void 0}),E=()=>{i.value=!0,t("focus")},N=b=>{const $=b.target;t("change",b),t("update:modelValue",$.checked)},G=()=>{i.value=!1,t("blur")},k=b=>{const{key:$}=b;($===ze.Space||$===ze.Tab)&&(i.value||(i.value=!0))};function H(b){b.stopPropagation()}return(b,$)=>(l(),M(a(Da),{id:a(T),error:e.error,disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:$[0]||($[0]=W=>r.value=!0),onMouseout:$[1]||($[1]=W=>r.value=!1)},$e({default:_(()=>[A("span",{class:d(a(w))},[A("input",xe({id:a(T),role:a(s)?"presentation":"checkbox",name:e.name,value:e.value||e.modelValue,type:"checkbox",checked:a(h),disabled:e.disabled,class:a(D),"aria-invalid":e.error!==null,"aria-controls":e.ariaControls,"aria-describedby":a(P),onFocus:E,onChange:N,onBlur:G,onKeyup:k},a(C)),null,16,xp),A("span",{class:d(a(B)),onClick:H,onMouseup:H},null,34),A("span",{class:d(a(Ge).Icon)},[V(a(ue),{source:a(x)},null,8,["source"])],2)],2)]),_:2},[a(c).label?{name:"label",fn:_(()=>[f(b.$slots,"label")])}:void 0,a(c)["help-text"]?{name:"help-text",fn:_(()=>[f(b.$slots,"help-text")])}:void 0]),1032,["id","error","disabled","labelHidden"]))}});ao.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"ariaControls",description:"Indicates the ID of the element that is controlled by the checkbox",required:!1,type:{name:"string"}},{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the checkbox",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:'"indeterminate"'}]}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"error",description:"Display an error message",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const Sp="Polaris-ChoiceList",Tp="Polaris-ChoiceList--titleHidden",Cp="Polaris-ChoiceList__Title",_p="Polaris-ChoiceList__Choices",kp="Polaris-ChoiceList__ChoiceChildren",Pp="Polaris-ChoiceList__ChoiceError";var et={ChoiceList:Sp,titleHidden:Tp,Title:Cp,Choices:_p,ChoiceChildren:kp,ChoiceError:Pp};const Ap="Polaris-RadioButton",wp="Polaris-RadioButton__Input",Ip="Polaris-RadioButton--keyFocused",Dp="Polaris-RadioButton__Backdrop",Lp="Polaris-RadioButton--hover";var bo={RadioButton:Ap,Input:wp,keyFocused:Ip,Backdrop:Dp,hover:Lp};const Bp=["id","name","value","checked","disabled","aria-describedby"],Po=I({props:{ariaDescribedBy:null,labelHidden:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},id:null,name:null,value:null,modelValue:null},emits:["focus","change","update:modelValue","blur"],setup(e,{emit:t}){const o=e,s=L(!1),r=L(!1),i=_e(),c=u(()=>{var C;return(C=i["help-text"])==null?void 0:C.call(i)}),{useUniqueId:p}=Ie(),v=u(()=>p("RadioButton",o.id)),T=u(()=>o.checked||o.modelValue===o.value),g=u(()=>F(bo.Backdrop,r.value&&bo.hover)),h=u(()=>F(bo.Input,s.value&&bo.keyFocused)),x=u(()=>{const C=[];return o.ariaDescribedBy&&C.push(o.ariaDescribedBy),c.value&&C.push(Ia(v.value)),C.length?C.join(" "):void 0}),w=C=>{const P=C.target;t("change",C),t("update:modelValue",P.value)},B=()=>{t("blur"),s.value=!1},D=()=>{s.value||(s.value=!0)};return(C,P)=>(l(),M(a(Da),{id:a(v),disabled:e.disabled,labelHidden:e.labelHidden,onMouseover:P[1]||(P[1]=E=>r.value=!0),onMouseout:P[2]||(P[2]=E=>r.value=!1)},$e({default:_(()=>[A("span",{class:d(a(bo).RadioButton)},[A("input",{id:a(v),name:e.name||a(v),value:e.value,type:"radio",checked:a(T),disabled:e.disabled,class:d(a(h)),"aria-describedby":a(x),onFocus:P[0]||(P[0]=E=>C.$emit("focus")),onChange:w,onBlur:B,onKeyup:D},null,42,Bp),A("span",{class:d(a(g))},null,2)],2)]),_:2},[a(i).label?{name:"label",fn:_(()=>[f(C.$slots,"label")])}:void 0,a(i)["help-text"]?{name:"help-text",fn:_(()=>[f(C.$slots,"help-text")])}:void 0]),1032,["id","disabled","labelHidden"]))}});Po.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"ariaDescribedBy",description:"Indicates the ID of the element that describes the the radio button",required:!1,type:{name:"string"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"checked",description:"Radio button is selected",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"blur"}],slots:[{name:"label"},{name:"help-text"}]};const $p=["id","aria-invalid"],Mp=["innerHTML"],We=I({props:{choices:null,modelValue:null,name:null,allowMultiple:{type:Boolean},titleHidden:{type:Boolean},error:null,disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(e,{emit:t}){const o=e,{useUniqueId:s}=Ie(),r=u(()=>s("ChoiceList",o.name)),i=u(()=>o.allowMultiple?`${r.value}Multiple`:r.value),c=u(()=>F(et.ChoiceList,o.titleHidden&&et.titleHidden)),p=g=>o.allowMultiple?o.modelValue.includes(g.value):o.modelValue===g.value,v=g=>{const h=g.target;return h.checked?o.allowMultiple?[...o.modelValue,h.value]:h.value:Array.isArray(o.modelValue)?o.modelValue.filter(x=>x!==h.value):[]},T=g=>{t("update:modelValue",v(g)),t("change",g)};return(g,h)=>(l(),m("fieldset",{id:a(i),class:d(a(c)),"aria-invalid":e.error!==null},[A("legend",{class:d(a(et).Title)},[f(g.$slots,"default")],2),A("ul",{class:d(a(et).Choices)},[(l(!0),m(ie,null,ye(e.choices,(x,w)=>(l(),m("li",{key:w},[(l(),M(he(e.allowMultiple?a(ao):a(Po)),{name:a(i),value:x.value,checked:p(x),disabled:x.disabled||e.disabled,ariaDescribedBy:e.error&&x.describedByError?a(wa)(a(i)):null,onChange:T},$e({_:2},[x.label?{name:"label",fn:_(()=>[A("span",null,ne(x.label),1)])}:void 0,x.helpText?{name:"help-text",fn:_(()=>[A("span",null,ne(x.helpText),1)])}:void 0]),1032,["name","value","checked","disabled","ariaDescribedBy"])),typeof x.renderChildren=="string"?(l(),m("div",{key:0,innerHTML:x.renderChildren,class:d(a(et).ChoiceChildren)},null,10,Mp)):(l(),M(he(x.renderChildren),{key:1,class:d(a(et).ChoiceChildren)},null,8,["class"]))]))),128))],2),e.error?(l(),m("div",{key:0,class:d(a(et).ChoiceError)},[V(a(ut),{fieldID:a(i),message:e.error},null,8,["fieldID","message"])],2)):O("",!0)],10,$p))}});We.__docgenInfo={exportName:"default",displayName:"ChoiceList",description:"",tags:{},props:[{name:"choices",description:"Collection of choices",required:!0,type:{name:"Array",elements:[{name:"Choice"}]}},{name:"modelValue",description:"V-model will automatically bind to this prop",required:!0,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"allowMultiple",description:"Allow merchants to select multiple options at once",required:!1,type:{name:"boolean"}},{name:"titleHidden",description:"Toggles display of the title",required:!1,type:{name:"boolean"}},{name:"error",description:"Display an error message",required:!1,type:{name:"Error"}},{name:"disabled",description:"Disable all choices",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["union"]}}],slots:[{name:"default"}]};function la(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function Ep(e,t){const o=e/60,s=1-Math.abs(o%2-1),r=t*s;let i=0,c=0,p=0;return o>=0&&o<=1&&(i=t,c=r,p=0),o>=1&&o<=2&&(i=r,c=t,p=0),o>=2&&o<=3&&(i=0,c=t,p=r),o>=3&&o<=4&&(i=0,c=r,p=t),o>=4&&o<=5&&(i=r,c=0,p=t),o>=5&&o<=6&&(i=t,c=0,p=r),{red:i,green:c,blue:p}}function Np(e,t="b"){const{alpha:o=1}=e,s=e.red/255,r=e.green/255,i=e.blue/255,c=Math.max(s,r,i),p=Math.min(s,r,i),v=c-p,T=(c+p)/2;let g=0;if(c===0)g=0;else if(t==="b")g=v/c;else if(t==="l"){const B=T>.5?v/(2-c-p):v/(c+p);g=Number.isNaN(B)?0:B}let h=0;switch(c){case s:h=(r-i)/v+(r<i?6:0);break;case r:h=(i-s)/v+2;break;case i:h=(s-r)/v+4;break}const x=h/6*360,w=nt(x,0,360);return{hue:w?go(w,2):0,saturation:go(nt(g,0,1),4),brightness:go(nt(c,0,1),4),lightness:go(T,4),alpha:go(o,4)}}function qp(e){if(e.length===4){const r=(v,T)=>e.slice(v,T).repeat(2),i=parseInt(r(1,2),16),c=parseInt(r(2,3),16),p=parseInt(r(3,4),16);return{red:i,green:c,blue:p}}const t=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return{red:t,green:o,blue:s}}function Rp({red:e,green:t,blue:o}){return`#${la(e)}${la(t)}${la(o)}`}function Ko(e){const{hue:t,saturation:o,brightness:s}=e,i=e.alpha||1,c=s*o;let{red:p,green:v,blue:T}=Ep(t,c);const g=s-c;return p+=g,v+=g,T+=g,{red:Math.round(p*255),green:Math.round(v*255),blue:Math.round(T*255),alpha:i}}function Fp(e){return Rp(Ko(S(y({},e),{alpha:1})))}function Op(e){const{hue:t,saturation:o,brightness:s,alpha:r=1}=Np(e,"b");return{hue:t,saturation:o,brightness:s,alpha:r}}const Vp="Polaris-ColorPicker",Hp="Polaris-ColorPicker__MainColor",zp="Polaris-ColorPicker--fullWidth",jp="Polaris-ColorPicker__Dragger",Up="Polaris-ColorPicker__ColorLayer",Wp="Polaris-ColorPicker__HuePicker",Xp="Polaris-ColorPicker__AlphaPicker",Gp="Polaris-ColorPicker__Slidable";var Ve={ColorPicker:Vp,MainColor:Hp,fullWidth:zp,Dragger:jp,ColorLayer:Up,HuePicker:Wp,AlphaPicker:Xp,Slidable:Gp};const Kp=["data-dragging"],on=I({props:{draggerX:{default:0},draggerY:{default:0}},emits:["change","dragger-height"],setup(e,{emit:t}){const o=e;eo();const s=L(!1),r=L(null),i=L(null),c=L(0),p=L(0),v=u(()=>({transform:`translate3d(${c.value||o.draggerX}px, ${p.value||o.draggerY}px, 0)`}));Mi||window.addEventListener("touchmove",D=>{s.value&&D.preventDefault()},{passive:!1}),fe(()=>{i.value&&t("dragger-height",i.value.clientWidth)});const T=D=>{if(B(D)){const{clientX:C,clientY:P}=D;x(C,P)}s.value=!0},g=()=>{s.value=!1},h=D=>{if(D.stopImmediatePropagation(),D.stopPropagation(),D.cancelable&&D.preventDefault(),w(D)){const P=D;x(P.clientX,P.clientY);return}const C=D;x(C.touches[0].clientX,C.touches[0].clientY)},x=(D,C)=>{if(r.value){const P=r.value.getBoundingClientRect(),E=D-P.left,N=C-P.top;t("change",{x:E,y:N})}};function w(D){return D.type==="mousemove"}function B(D){return D.type==="mousedown"}return(D,C)=>(l(),m("div",{ref_key:"slidableRef",ref:r,class:d(a(Ve).Slidable),"data-dragging":s.value,onMousedown:T,onTouchstart:T},[s.value?(l(),M(a(Le),{key:0,event:"mouseup",handler:g})):O("",!0),s.value?(l(),M(a(Le),{key:1,event:"mousemove",handler:h,passive:!1})):O("",!0),s.value?(l(),M(a(Le),{key:2,event:"touchmove",handler:h,passive:!1})):O("",!0),s.value?(l(),M(a(Le),{key:3,event:"touchend",handler:g})):O("",!0),s.value?(l(),M(a(Le),{key:4,event:"touchcancel",handler:g})):O("",!0),A("div",{style:lt(a(v)),class:d(a(Ve).Dragger),ref_key:"draggerRef",ref:i},null,6)],42,Kp))}});on.__docgenInfo={exportName:"default",displayName:"Slidable",description:"",tags:{},props:[{name:"draggerX",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"draggerY",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"change",type:{names:["{ x: number; y: number; }"]}},{name:"dragger-height",type:{names:["number"]}}]};const tr=I({props:{color:null,alpha:null},emits:["change"],setup(e,{emit:t}){const o=e,s=L(null),r=L(0),i=L(0),c=u(()=>Ei(o.alpha,r.value,i.value)),p=u(()=>{const{red:h,green:x,blue:w}=Ko(o.color),B=`${h}, ${x}, ${w}`;return`linear-gradient(to top, rgba(${B}, 0) 18px, rgba(${B}, 1) calc(100% - 18px))`});fe(()=>{v()});const v=()=>{s.value&&(r.value=s.value.clientHeight)},T=h=>{i.value=h},g=({y:h})=>{const x=Ni(h,r.value);t("change",x)};return(h,x)=>(l(),m("div",{class:d(a(Ve).AlphaPicker),ref_key:"alphaPickerRef",ref:s},[A("div",{class:d(a(Ve).ColorLayer),style:lt({background:a(p)})},"\xA0",6),V(a(on),{draggerY:a(c),draggerX:0,onChange:g,onDraggerHeight:T},null,8,["draggerY"])],2))}});tr.__docgenInfo={exportName:"default",displayName:"AlphaPicker",description:"",tags:{},props:[{name:"color",required:!0,type:{name:"HSBColor"}},{name:"alpha",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const or=I({props:{hue:null},emits:["change"],setup(e,{emit:t}){const o=e,s=L(null),r=L(0),i=L(0),c=u(()=>qi(o.hue,r.value,i.value));fe(()=>{p()});const p=()=>{s.value&&(r.value=s.value.clientHeight)},v=g=>{i.value=g},T=({y:g})=>{const h=Ri(g,r.value);t("change",h)};return(g,h)=>(l(),m("div",{class:d(a(Ve).HuePicker),ref_key:"huePickerRef",ref:s},[V(a(on),{draggerY:a(c),draggerX:0,onChange:T,onDraggerHeight:v},null,8,["draggerY"])],2))}});or.__docgenInfo={exportName:"default",displayName:"HuePicker",description:"",tags:{},props:[{name:"hue",required:!0,type:{name:"number"}}],events:[{name:"change",type:{names:["number"]}}]};const Yp=["id","onMousedown"],nn=I({props:{id:null,modelValue:null,allowAlpha:{type:Boolean},fullWidth:{type:Boolean},outputType:null},emits:["change","update:modelValue"],setup(e,{emit:t}){const o=e,s=200,r=L(null),i=zo({hue:0,saturation:0,brightness:0,alpha:1}),c=zo({width:0,height:0}),p=E=>{E.preventDefault()},v=u(()=>F(Ve.ColorPicker,o.fullWidth&&Ve.fullWidth)),T=u(()=>i.alpha!==void 0&&o.allowAlpha?i.alpha:1),g=u(()=>{const{red:E,green:N,blue:G}=Ko({hue:i.hue,saturation:1,brightness:1});return`rgba(${E}, ${N}, ${G}, ${T.value})`}),h=u(()=>nt(i.saturation*c.width,0,c.width)),x=u(()=>nt(c.height-i.brightness*c.height,0,c.height)),w=u(()=>{if(o.outputType==="hex")return Fp(i);if(o.outputType==="rgb"){const E=Ko(i);return`rgba(${E.red}, ${E.green}, ${E.blue}, ${T.value})`}return i}),B=So(()=>{r.value&&(c.width=r.value.clientWidth,c.height=r.value.clientHeight)},s,{leading:!0,trailing:!0,maxWait:s});if(typeof o.modelValue=="object"&&Object.assign(i,o.modelValue),typeof o.modelValue=="string"){let E;if(/#[0-9abcdef]{3,6}/.test(o.modelValue))E=S(y({},qp(o.modelValue)),{alpha:1});else{const N=o.modelValue.replace(/^rgba?\(|\s+|\)$/g,"").split(",");E={red:parseInt(N[0],10),green:parseInt(N[1],10),blue:parseInt(N[2],10),alpha:N[2]?parseFloat(N[3]):1}}Object.assign(i,S(y({},Op(E)),{alpha:E.alpha}))}fe(()=>{r.value&&(c.width=r.value.clientWidth,c.height=r.value.clientHeight)});const D=E=>{i.hue=E,t("change",w.value),t("update:modelValue",w.value)},C=E=>{i.alpha=E,t("change",w.value),t("update:modelValue",w.value)},P=({x:E,y:N})=>{i.saturation=nt(E/c.width,0,1),i.brightness=nt(1-N/c.height,0,1),t("change",w.value),t("update:modelValue",w.value)};return(E,N)=>(l(),m("div",{id:e.id,class:d(a(v)),onMousedown:Fi(p,["prevent"])},[A("div",{ref_key:"mainColorRef",ref:r,class:d(a(Ve).MainColor)},[A("div",{class:d(a(Ve).ColorLayer),style:lt({backgroundColor:a(g)})},"\xA0",6),V(a(on),{draggerX:a(h),draggerY:a(x),onChange:P},null,8,["draggerX","draggerY"])],2),V(a(or),{hue:a(i).hue,onChange:D},null,8,["hue"]),e.allowAlpha?(l(),M(a(tr),{key:0,alpha:a(T),color:a(i),onChange:C},null,8,["alpha","color"])):O("",!0),V(a(Le),{event:"resize",handler:a(B)},null,8,["handler"])],42,Yp))}});nn.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:`The currently selected color.
The color can be HSB object (same with Shopify) or RGB, Hex string`,required:!0,type:{name:"union",elements:[{name:"Color"},{name:"string"}]}},{name:"allowAlpha",description:"Allow user to select an alpha value",required:!1,type:{name:"boolean"}},{name:"fullWidth",description:"Allow HuePicker to take the full width",required:!1,type:{name:"boolean"}},{name:"outputType",description:"Color output format",required:!1,type:{name:"union",elements:[{name:'"hsb"'},{name:'"rgb"'},{name:'"hex"'}]}}],events:[{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const Jp="Polaris-Connected",Qp="Polaris-Connected__Item";var Vo={Connected:Jp,Item:Qp,"Item-primary":"Polaris-Connected__Item--primary","Item-focused":"Polaris-Connected__Item--focused"};const Ho=I({props:{position:null},emits:["focus","blur"],setup(e,{emit:t}){const o=e,s=L(!1),r=u(()=>F(Vo.Item,s.value&&Vo["Item-focused"],o.position==="primary"&&Vo["Item-primary"])),i=()=>{s.value=!0,t("focus")},c=()=>{s.value=!1,t("blur")};return(p,v)=>(l(),m("div",{class:d(a(r)),onFocus:i,onBlur:c},[f(p.$slots,"default")],34))}});Ho.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},props:[{name:"position",required:!0,type:{name:"ItemPosition"}}],events:[{name:"focus"},{name:"blur"}],slots:[{name:"default"}]};const nr=I({setup(e){return(t,o)=>(l(),m("div",{class:d(a(Vo).Connected)},[t.$slots.left?(l(),M(a(Ho),{key:0,position:"left"},{default:_(()=>[f(t.$slots,"left")]),_:3})):O("",!0),t.$slots.default?(l(),M(a(Ho),{key:1,position:"primary"},{default:_(()=>[f(t.$slots,"default")]),_:3})):O("",!0),t.$slots.right?(l(),M(a(Ho),{key:2,position:"right"},{default:_(()=>[f(t.$slots,"right")]),_:3})):O("",!0)],2))}});nr.__docgenInfo={exportName:"default",displayName:"Connected",description:"",tags:{},slots:[{name:"left"},{name:"default"},{name:"right"}]};const Zp="Polaris-DatePicker",em="Polaris-DatePicker__MonthLayout",tm="Polaris-DatePicker__MonthContainer",om="Polaris-DatePicker__Month",nm="Polaris-DatePicker__DayCell",am="Polaris-DatePicker__Day",sm="Polaris-DatePicker__EmptyDayCell",rm="Polaris-DatePicker__Weekday",im="Polaris-DatePicker__Header",lm="Polaris-DatePicker__Title",cm="Polaris-DatePicker__Week";var ae={DatePicker:Zp,MonthLayout:em,MonthContainer:tm,Month:om,"Month-current":"Polaris-DatePicker__Month--current",DayCell:nm,"DayCell-inRange":"Polaris-DatePicker__DayCell--inRange",Day:am,"Day-today":"Polaris-DatePicker__Day--today","Day-inRange":"Polaris-DatePicker__Day--inRange","Day-selected":"Polaris-DatePicker__Day--selected","Day-disabled":"Polaris-DatePicker__Day--disabled",EmptyDayCell:sm,Weekday:rm,"Weekday-current":"Polaris-DatePicker__Weekday--current",Header:im,Title:lm,"Day-firstInRange":"Polaris-DatePicker__Day--firstInRange","Day-hasRange":"Polaris-DatePicker__Day--hasRange","Day-hoverRight":"Polaris-DatePicker__Day--hoverRight","Day-lastInRange":"Polaris-DatePicker__Day--lastInRange",Week:cm};const rt={months:{january:"January",february:"February",march:"March",april:"April",may:"May",june:"June",july:"July",august:"August",september:"September",october:"October",november:"November",december:"December"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday"},daysAbbreviated:{monday:"Mo",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fr",saturday:"Sa",sunday:"Su"}};function xo(e){switch(e){case 0:return"january";case 1:return"february";case 2:return"march";case 3:return"april";case 4:return"may";case 5:return"june";case 6:return"july";case 7:return"august";case 8:return"september";case 9:return"october";case 10:return"november";case 11:return"december"}}function ls(e){switch(e){case 0:return"sunday";case 1:return"monday";case 2:return"tuesday";case 3:return"wednesday";case 4:return"thursday";case 5:return"friday";case 6:return"saturday"}}const um=["tabIndex","aria-label","aria-disabled","aria-pressed"],ba=I({props:{focused:{type:Boolean},day:null,selected:{type:Boolean},inRange:{type:Boolean},inHoveringRange:{type:Boolean},disabled:{type:Boolean},lastDayOfMonth:null,isLastSelectedDay:{type:Boolean},isFirstSelectedDay:{type:Boolean},isHoveringRight:{type:Boolean},rangeIsDifferent:{type:Boolean},weekday:null,selectedAccessibilityLabelPrefix:null},emits:["focus","hover","click"],setup(e,{emit:t}){const o=e,s=L(null),r=u(()=>o.lastDayOfMonth||o.day),i=u(()=>o.day?Re(new Date,o.day):null),c=u(()=>o.day?o.day.getDate():null),p=u(()=>(o.focused||o.selected||i.value||c.value===1)&&!o.disabled?0:-1),v=u(()=>F(ae.DayCell,o.selected&&ae["DayCell-selected"],(o.inRange||o.inHoveringRange)&&!o.disabled&&ae["DayCell-inRange"],o.isLastSelectedDay&&ae["DayCell-lastInRange"],o.isFirstSelectedDay&&ae["DayCell-firstInRange"],o.isHoveringRight&&ae["DayCell-hoverRight"],o.rangeIsDifferent&&ae["DayCell-hasRange"])),T=u(()=>F(ae.Day,o.selected&&ae["Day-selected"],o.disabled&&ae["Day-disabled"],i.value&&ae["Day-today"],(o.inRange||o.inHoveringRange)&&!o.disabled&&ae["Day-inRange"],o.isLastSelectedDay&&ae["Day-lastInRange"],o.isFirstSelectedDay&&ae["Day-firstInRange"],o.isHoveringRight&&ae["Day-hoverRight"],o.rangeIsDifferent&&ae["Day-hasRange"])),g=u(()=>{if(!o.day)return null;const D=xo(o.day.getMonth());return D?rt.months[D]:""}),h=u(()=>[o.selected&&o.selectedAccessibilityLabelPrefix?`${o.selectedAccessibilityLabelPrefix} `:"",`${i.value?"Today ":""}`,`${o.weekday?o.weekday:""} `,`${g.value} `,`${c.value} `,`${o.day?o.day.getFullYear():new Date().getFullYear()}`].join(""));Qo(()=>{o.focused&&s.value&&setTimeout(()=>{s.value.focus()},10)});const x=()=>{t("focus",o.day)},w=()=>{t("hover",r.value)},B=()=>{!o.disabled&&o.day&&t("click",o.day)};return(D,C)=>e.day?(l(),m("td",{key:0,class:d(a(v))},[A("button",{type:"button",ref_key:"dayRef",ref:s,tabIndex:a(p),class:d(a(T)),"aria-label":a(h),"aria-disabled":e.disabled,"aria-pressed":e.selected,onFocus:x,onMouseover:w,onClick:B},ne(a(c)),43,um)],2)):(l(),m("td",{key:1,class:d(a(ae).EmptyDayCell),onMouseover:w},null,34))}});ba.__docgenInfo={exportName:"default",displayName:"Day",description:"",tags:{},props:[{name:"focused",required:!1,type:{name:"boolean"}},{name:"day",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"inRange",required:!1,type:{name:"boolean"}},{name:"inHoveringRange",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"lastDayOfMonth",required:!1,type:{name:"any"}},{name:"isLastSelectedDay",required:!1,type:{name:"boolean"}},{name:"isFirstSelectedDay",required:!1,type:{name:"boolean"}},{name:"isHoveringRight",required:!1,type:{name:"boolean"}},{name:"rangeIsDifferent",required:!1,type:{name:"boolean"}},{name:"weekday",required:!1,type:{name:"string"}},{name:"selectedAccessibilityLabelPrefix",required:!1,type:{name:"string"}}],events:[{name:"focus",type:{names:["union"]}},{name:"hover",type:{names:["union"]}},{name:"click",type:{names:["Date"]}}]};const dm=["aria-label"],ar=I({props:{label:null,title:null,current:{type:Boolean}},setup(e){const t=e,o=u(()=>F(ae.Weekday,t.current&&ae["Weekday-current"]));return(s,r)=>(l(),m("th",{"aria-label":e.label,scope:"col",class:d(a(o))},ne(e.title),11,dm))}});ar.__docgenInfo={exportName:"default",displayName:"Weekday",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"title",required:!0,type:{name:"string"}},{name:"current",required:!0,type:{name:"boolean"}}]};const va=I({props:{focusedDate:null,selected:null,hoverDate:null,month:null,year:null,disableDatesBefore:null,disableDatesAfter:null,allowRange:{type:Boolean},weekStartsOn:null,accessibilityLabelPrefixes:null},emits:["focus","hover","click","change"],setup(e,{emit:t}){const o=e,s=new Date,r=u(()=>s.getMonth()===o.month&&s.getFullYear()===o.year),i=u(()=>F(ae.Title,r.value&&ae["Month-current"])),c="Polaris-DatePicker__WeekHeadings",p=u(()=>Oi(o.month,o.year,o.weekStartsOn)),v=u(()=>{const b=xo(o.month);return b?rt.months[b]:""}),T=u(()=>Vi(o.weekStartsOn)),g=u(()=>new Date(o.year,o.month+1,0)),h=u(()=>!(o.selected&&Re(o.selected.start,o.selected.end))),x=b=>{const $=ji(o.allowRange?o.selected:void 0,b);t("change",$)},w=b=>o.disableDatesBefore&&Uo(b,o.disableDatesBefore)||o.disableDatesAfter&&Wo(b,o.disableDatesAfter),B=b=>o.allowRange&&o.selected&&H(b,o.selected),D=b=>o.allowRange&&o.selected&&(!Re(o.selected.start,o.selected.end)&&k(b,o.selected)||o.hoverDate&&Re(o.selected.start,o.selected.end)&&Wo(o.hoverDate,o.selected.start)&&Re(b,o.hoverDate)&&!B(b)),C=b=>o.hoverDate&&Uo(b,o.hoverDate),P=b=>{if(!o.accessibilityLabelPrefixes)return"";const[$,W]=o.accessibilityLabelPrefixes;if(o.allowRange&&B(b)||!o.allowRange&&$)return $;if(o.allowRange&&D(b))return W},E=(b,$,W)=>{if(!o.allowRange||!$||!W||b==null)return!1;const{start:se,end:ee}=$;return Boolean(Re(se,ee)&&b>se&&b<=W)};function N(b){const $=ls(b);return $?rt.daysAbbreviated[$]:""}function G(b){const $=ls(b);return $?rt.days[$]:""}function k(b,$){if(b==null)return!1;const{end:W}=$;return Boolean(W&&Re(W,b))}function H(b,$){if(b==null)return!1;const{start:W}=$;return Boolean(W&&Re(W,b))}return(b,$)=>(l(),m("div",{class:d(a(ae).MonthContainer)},[A("table",{role:"grid",class:d(a(ae).Month)},[A("caption",{class:d(a(i))},ne(a(v))+" "+ne(e.year),3),A("thead",null,[A("tr",{class:d(c)},[(l(!0),m(ie,null,ye(a(T),W=>(l(),M(a(ar),{key:W,title:N(W),label:G(W),current:a(r)&&new Date().getDay()===W},null,8,["title","label","current"]))),128))])]),A("tbody",null,[(l(!0),m(ie,null,ye(a(p),(W,se)=>(l(),m("tr",{key:se,class:d(a(ae).Week)},[(l(!0),m(ie,null,ye(W,(ee,Te)=>(l(),m(ie,{key:Te},[ee?(l(),M(a(ba),{key:1,selectedAccessibilityLabelPrefix:P(ee),weekday:G(Te),focused:e.focusedDate&&a(Re)(ee,e.focusedDate),day:ee,selected:e.selected&&a(Hi)(ee,e.selected),inRange:e.selected&&a(zi)(ee,e.selected),disabled:w(ee),inHoveringRange:E(ee,e.selected,e.hoverDate),isLastSelectedDay:D(ee),isFirstSelectedDay:B(ee),isHoveringRight:C(ee),rangeIsDifferent:a(h),onFocus:z=>b.$emit("focus",ee),onClick:x,onHover:z=>b.$emit("hover",ee)},null,8,["selectedAccessibilityLabelPrefix","weekday","focused","day","selected","inRange","disabled","inHoveringRange","isLastSelectedDay","isFirstSelectedDay","isHoveringRight","rangeIsDifferent","onFocus","onHover"])):(l(),M(a(ba),{key:0,lastDayOfMonth:a(g),onHover:$[0]||($[0]=z=>b.$emit("hover",null))},null,8,["lastDayOfMonth"]))],64))),128))],2))),128))])],2)],2))}});va.__docgenInfo={exportName:"default",displayName:"Month",description:"",tags:{},props:[{name:"focusedDate",required:!1,type:{name:"Date"}},{name:"selected",required:!1,type:{name:"Range"}},{name:"hoverDate",required:!1,type:{name:"Date"}},{name:"month",required:!0,type:{name:"number"}},{name:"year",required:!0,type:{name:"number"}},{name:"disableDatesBefore",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",required:!1,type:{name:"Date"}},{name:"allowRange",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",required:!0,type:{name:"number"}},{name:"accessibilityLabelPrefixes",required:!1,type:{name:"TSTupleType"}}],events:[{name:"hover",type:{names:["union"]}},{name:"focus",type:{names:["union"]}},{name:"click",type:{names:["Date"]}},{name:"change",type:{names:["union"]}}]};const pm=["id"],an=I({props:{id:null,modelValue:null,month:null,year:null,allowRange:{type:Boolean},disableDatesBefore:null,disableDatesAfter:null,multiMonth:{type:Boolean},weekStartsOn:{default:0},dayAccessibilityLabelPrefix:null},emits:["month-change","change","update:modelValue"],setup(e,{emit:t}){const o=e,s=L(),r=L(),i=u(()=>Ja(o.month,o.year)),c=u(()=>Qa(o.month)),p=u(()=>Ja(c.value,i.value)),v=u(()=>Qa(c.value)),T=u(()=>Xi(o.month,o.year)),g=u(()=>Gi(o.month)),h=u(()=>{const z=xo(g.value);return z?rt.months[z]:""}),x=u(()=>{if(o.multiMonth){const Q=xo(v.value);return Q?rt.months[Q]:""}const z=xo(c.value);return z?rt.months[z]:""}),w=u(()=>o.multiMonth?p.value:i.value),B=u(()=>Te(o.modelValue)),D=u(()=>o.allowRange?"Start of range":o.dayAccessibilityLabelPrefix),C="End of range",P=u(()=>[D.value,C]),E=u(()=>`Show previous month, ${h.value} ${T.value}`),N=u(()=>`Show next month, ${x.value} ${w.value}`),G=(z,Q)=>{t("month-change",{month:z,year:Q})},k=(z,Q)=>{s.value=void 0,G(z,Q)},H=z=>{s.value=z||void 0},b=z=>{r.value=z||void 0},$=z=>{G(z.getMonth(),z.getFullYear()),r.value=z,s.value=z},W=z=>{if(z){const{end:Q}=z;r.value=Q,s.value=new Date(Q),t("update:modelValue",z)}t("change",z)},se=z=>{const{key:Q}=z,Ae=Te(o.modelValue),ge=s.value||Ae&&Ae.start;if(!!ge){if(Q==="ArrowUp"){const le=new Date(ge);le.setDate(ge.getDate()-7),o.disableDatesBefore&&Uo(le,o.disableDatesBefore)||$(le)}if(Q==="ArrowDown"){const le=new Date(ge);le.setDate(ge.getDate()+7),o.disableDatesAfter&&Wo(le,o.disableDatesAfter)||$(le)}if(Q==="ArrowRight"){const le=new Date(ge);le.setDate(ge.getDate()+1),o.disableDatesAfter&&Wo(le,o.disableDatesAfter)||$(le)}if(Q==="ArrowLeft"){const le=new Date(ge);le.setDate(ge.getDate()-1),o.disableDatesBefore&&Uo(le,o.disableDatesBefore)||$(le)}}},ee=z=>{const{key:Q}=z;(Q==="ArrowUp"||Q==="ArrowDown"||Q==="ArrowLeft"||Q==="ArrowRight")&&(z.preventDefault(),z.stopPropagation())};function Te(z){return z instanceof Date?{start:z,end:z}:z}return(z,Q)=>(l(),m("div",{id:e.id,class:d(a(ae).DatePicker),onKeydown:ee,onKeyup:se},[A("div",{class:d(a(ae).Header)},[V(a(Se),{plain:"",icon:a(Ui),accessibilityLabel:a(E),onClick:Q[0]||(Q[0]=Ae=>k(a(g),a(T)))},null,8,["icon","accessibilityLabel"]),V(a(Se),{plain:"",icon:a(Wi),accessibilityLabel:a(N),onClick:Q[1]||(Q[1]=Ae=>k(a(c),a(i)))},null,8,["icon","accessibilityLabel"])],2),A("div",{class:d(a(ae).MonthLayout)},[V(a(va),{focusedDate:s.value,month:e.month,year:e.year,selected:Te(e.modelValue),hoverDate:r.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a(P),onChange:W,onHover:b,onFocus:H},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"]),e.multiMonth?(l(),M(a(va),{key:0,focusedDate:s.value,month:a(c),year:a(i),selected:a(B),hoverDate:r.value,disableDatesBefore:e.disableDatesBefore,disableDatesAfter:e.disableDatesAfter,allowRange:e.allowRange,weekStartsOn:e.weekStartsOn,accessibilityLabelPrefixes:a(P),onChange:W,onHover:b,onFocus:H},null,8,["focusedDate","month","year","selected","hoverDate","disableDatesBefore","disableDatesAfter","allowRange","weekStartsOn","accessibilityLabelPrefixes"])):O("",!0)],2)],42,pm))}});an.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"id",description:"ID for the element",required:!1,type:{name:"string"}},{name:"modelValue",description:"The selected date or range of dates",required:!1,type:{name:"Range"}},{name:"month",description:"The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December",required:!0,type:{name:"number"}},{name:"year",description:"The year to show",required:!0,type:{name:"number"}},{name:"allowRange",description:"Allow a range of dates to be selected",required:!1,type:{name:"boolean"}},{name:"disableDatesBefore",description:"Disable selecting dates before this.",required:!1,type:{name:"Date"}},{name:"disableDatesAfter",description:"Disable selecting dates after this.",required:!1,type:{name:"Date"}},{name:"multiMonth",description:"The selection can span multiple months",required:!1,type:{name:"boolean"}},{name:"weekStartsOn",description:"First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday",tags:{default:[{description:"0",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"dayAccessibilityLabelPrefix",description:"Visually hidden prefix text for selected days on single selection date pickers",required:!1,type:{name:"string"}}],events:[{name:"month-change",type:{names:["{ month: number, year: number }"]}},{name:"change",type:{names:["union"]}},{name:"update:modelValue",type:{names:["union"]}}]};const mm="Polaris-DisplayText",ym="Polaris-DisplayText--sizeSmall",hm="Polaris-DisplayText--sizeMedium",fm="Polaris-DisplayText--sizeLarge",gm="Polaris-DisplayText--sizeExtraLarge";var cs={DisplayText:mm,sizeSmall:ym,sizeMedium:hm,sizeLarge:fm,sizeExtraLarge:gm};const sn=I({props:{element:{default:"p"},size:{default:"medium"}},setup(e){const t=e,o=u(()=>F(cs.DisplayText,t.size&&cs[ve("size",t.size)]));return(s,r)=>(l(),M(he(e.element),{class:d(a(o))},{default:_(()=>[f(s.$slots,"default")]),_:3},8,["class"]))}});sn.__docgenInfo={exportName:"default",displayName:"DisplayText",description:"",tags:{},props:[{name:"element",description:"Name of element to use for text",tags:{default:[{description:"'p'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'p'"}},{name:"size",description:"Size of the text",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}]};const bm="Polaris-ExceptionList",vm="Polaris-ExceptionList__Item",xm="Polaris-ExceptionList__Icon",Sm="Polaris-ExceptionList--statusWarning",Tm="Polaris-ExceptionList--statusCritical",Cm="Polaris-ExceptionList__Bullet",_m="Polaris-ExceptionList__Title",km="Polaris-ExceptionList__Description";var Fe={ExceptionList:bm,Item:vm,Icon:xm,statusWarning:Sm,statusCritical:Tm,Bullet:Cm,Title:_m,Description:km};const sr=I({setup(e){return(t,o)=>(l(),m("ul",{class:d(a(Fe).ExceptionList)},[f(t.$slots,"default")],2))}});sr.__docgenInfo={exportName:"default",displayName:"ExceptionList",description:"",tags:{},slots:[{name:"default"}]};const Pm="Polaris-Truncate";var Am={Truncate:Pm};const rr=I({setup(e){return(t,o)=>{const s=Ki("component");return l(),M(s,{class:d(a(Am).Truncate)},{default:_(()=>[f(t.$slots,"default")]),_:3},8,["class"])}}});rr.__docgenInfo={exportName:"default",displayName:"Truncate",description:"",tags:{},slots:[{name:"default"}]};const rn=I({props:{status:null,icon:null,title:null,truncate:{type:Boolean}},setup(e){const t=e,o=_e(),s=u(()=>F(Fe.Item,t.status&&Fe[ve("status",t.status)]));return(r,i)=>(l(),m("li",{class:d(a(s))},[A("span",{class:d(a(Fe).Icon)},[e.icon?(l(),M(a(ue),{key:0,source:e.icon},null,8,["source"])):(l(),m("span",{key:1,class:d(a(Fe).Bullet)},null,2))],2),e.truncate?(l(),M(a(rr),{key:0},{default:_(()=>[e.title?(l(),m("span",{key:0,class:d(a(Fe).Title)},ne(e.title),3)):O("",!0),a(o).default?(l(),m("span",{key:1,class:d(a(Fe).Description)},[f(r.$slots,"default")],2)):O("",!0)]),_:3})):(l(),m(ie,{key:1},[e.title?(l(),m("span",{key:0,class:d(a(Fe).Title)},ne(e.title),3)):O("",!0),a(o).default?(l(),m("span",{key:1,class:d(a(Fe).Description)},[f(r.$slots,"default")],2)):O("",!0)],64))],2))}});rn.__docgenInfo={exportName:"default",displayName:"ExceptionListItem",description:"",tags:{},props:[{name:"status",description:"Set the color of the icon and title for the given item.",required:!1,type:{name:"union",elements:[{name:'"critical"'},{name:'"warning"'}]}},{name:"icon",description:"Icon displayed by the list item",required:!1,type:{name:"IconSource"}},{name:"title",description:"Text displayed beside the icon",required:!1,type:{name:"string"}},{name:"truncate",description:"Should the description be truncated at end of line",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const wm="Polaris-FooterHelp",Im="Polaris-FooterHelp__Text";var us={FooterHelp:wm,Text:Im};const ln=I({setup(e){return(t,o)=>(l(),m("div",{class:d(a(us).FooterHelp)},[A("div",{class:d(a(us).Text)},[f(t.$slots,"default")],2)],2))}});ln.__docgenInfo={exportName:"default",displayName:"FooterHelp",description:"",tags:{},slots:[{name:"default"}]};const Dm=A("button",{type:"submit","aria-hidden":"true",tabIndex:"-1"},"Submit",-1),Lm=I({props:{implicitSubmit:{type:Boolean,default:!0},preventDefault:{type:Boolean}},emits:["submit"],setup(e,{emit:t}){const o=e,s=r=>{o.preventDefault&&r.preventDefault(),t("submit",r)};return(r,i)=>(l(),m("form",{onSubmit:s},[f(r.$slots,"default"),e.implicitSubmit?(l(),M(a(Me),{key:0},{default:_(()=>[Dm]),_:1})):O("",!0)],32))}});Lm.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"implicitSubmit",description:"Toggles if form submits on Enter keypress. Defaults to true.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"preventDefault",description:"Blocks the default form action",required:!1,type:{name:"boolean"}}],events:[{name:"submit",type:{names:["Event"]}}],slots:[{name:"default"}]};const Bm="Polaris-FormLayout",$m="Polaris-FormLayout__Title",Mm="Polaris-FormLayout__Items",Em="Polaris-FormLayout__HelpText",Nm="Polaris-FormLayout__Item",qm="Polaris-FormLayout--grouped",Rm="Polaris-FormLayout--condensed";var Ye={FormLayout:Bm,Title:$m,Items:Mm,HelpText:Em,Item:Nm,grouped:qm,condensed:Rm};const La=I({setup(e){return(t,o)=>(l(),m("div",{class:d(a(Ye).Item)},[f(t.$slots,"default")],2))}});La.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const Fm=I({props:{condensed:{type:Boolean}},setup(e,{expose:t}){const o=e,s=_e(),{useUniqueId:r}=Ie(),i=r("FormLayoutGroup"),c=`${i}HelpText`,p=`${i}Title`;t({name:"FormGroup"});const v=u(()=>F(o.condensed?Ye.condensed:Ye.grouped));return(T,g)=>(l(),m("div",{role:"group",class:d(a(v)),"aria-labelledby":p,"aria-describedby":c},[a(s).title?(l(),m("div",{key:0,id:p,class:d(a(Ye).Title)},[f(T.$slots,"title")],2)):O("",!0),A("div",{class:d(a(Ye).Items)},[a(s).default?(l(!0),m(ie,{key:0},ye(a(s).default(),(h,x)=>(l(),M(a(La),{key:x},{default:_(()=>[(l(),M(he(h)))]),_:2},1024))),128)):f(T.$slots,"default",{key:1})],2),a(s)["help-text"]?(l(),m("div",{key:1,id:c,class:d(a(Ye).HelpText)},[f(T.$slots,"help-text")],2)):O("",!0)],2))}});Fm.__docgenInfo={exportName:"default",displayName:"Group",description:"",tags:{},props:[{name:"condensed",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"},{name:"help-text"}]};const ir=I({setup(e){const t=L([]),o=L([]),s=_e();return Yi(()=>{t.value=[]}),fe(()=>{t.value.forEach(r=>{o.value.push(r.name==="FormGroup")})}),(r,i)=>(l(),m("div",{class:d(a(Ye).FormLayout)},[a(s).default?(l(!0),m(ie,{key:0},ye(a(s).default(),(c,p)=>(l(),m(ie,null,[o.value[p]?(l(),M(he(c),{key:1,ref_for:!0,ref:v=>{t.value[p]=v}},null,512)):(l(),M(a(La),{key:p,class:d(a(Ye).Item)},{default:_(()=>[(l(),M(he(c),{ref_for:!0,ref:v=>{t.value[p]=v}},null,512))]),_:2},1032,["class"]))],64))),256)):f(r.$slots,"default",{key:1})],2))}});ir.__docgenInfo={exportName:"default",displayName:"FormLayout",description:"",tags:{},slots:[{name:"default"}]};const Om="Polaris-Heading";var Vm={Heading:Om};const Ao=I({props:{element:{default:"h2"},id:null},setup(e){return(t,o)=>(l(),M(he(e.element),{id:e.id,class:d(a(Vm).Heading)},{default:_(()=>[f(t.$slots,"default")]),_:3},8,["id","class"]))}});Ao.__docgenInfo={exportName:"default",displayName:"Heading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the heading",tags:{default:[{description:"'h2'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h2'"}},{name:"id",description:`A unique identifier for the heading,
used for reference in anchor links`,required:!1,type:{name:"string"}}],slots:[{name:"default"}]};const Hm="Polaris-KeyboardKey";var zm={KeyboardKey:Hm};const cn=I({setup(e){const t=_e(),o=u(()=>{const s=t.default&&t.default()[0].children?t.default()[0].children:"";return typeof s=="string"?s.length>1?s.toLowerCase():s.toUpperCase():s});return(s,r)=>(l(),m("kbd",{class:d(a(zm).KeyboardKey)},ne(a(o)),3))}});cn.__docgenInfo={exportName:"default",displayName:"KeyboardKey",description:"",tags:{}};const jm="Polaris-Label",Um="Polaris-Label--hidden",Wm="Polaris-Label__Text",Xm="Polaris-Label__RequiredIndicator";var Oo={Label:jm,hidden:Um,Text:Wm,RequiredIndicator:Xm};function lr(e){return`${e}Label`}const Gm=["id","for"],cr=I({props:{id:null,hidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const t=e,o=u(()=>F(Oo.Label,t.hidden&&Oo.hidden)),s=u(()=>F(Oo.Text,t.requiredIndicator&&Oo.RequiredIndicator));return(r,i)=>(l(),m("div",{class:d(a(o))},[A("label",{id:a(lr)(e.id),for:e.id,class:d(a(s))},[f(r.$slots,"default")],10,Gm)],2))}});cr.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"string"}},{name:"hidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Km="Polaris-Labelled--hidden",Ym="Polaris-Labelled__LabelWrapper",Jm="Polaris-Labelled__HelpText",Qm="Polaris-Labelled__Action";var vo={hidden:Km,LabelWrapper:Ym,HelpText:Jm,Error:"Polaris-Labelled__Error",Action:Qm};function Zm(e){return`${e}Error`}function Ba(e){return`${e}HelpText`}const ey=["id"],$a=I({props:{id:null,error:{type:[null,Boolean]},action:null,labelHidden:{type:Boolean},requiredIndicator:{type:Boolean}},setup(e){const t=e,o=u(()=>t.error&&typeof t.error!="boolean"),s=u(()=>F(t.labelHidden&&vo.hidden));return(r,i)=>(l(),m("div",{class:d(a(s))},[r.$slots.label?(l(),m("div",{key:0,class:d(a(vo).LabelWrapper)},[V(a(cr),xe({id:e.id,requiredIndicator:e.requiredIndicator,hidden:!1},r.$attrs),{default:_(()=>[f(r.$slots,"label")]),_:3},16,["id","requiredIndicator"]),e.action?(l(),m("div",{key:0,class:d(a(vo).Action)},null,2)):O("",!0)],2)):O("",!0),f(r.$slots,"default"),a(o)?(l(),m("div",{key:1,class:d(a(vo).Error)},[typeof e.error=="string"?(l(),M(a(ut),{key:0,message:e.error,fieldID:a(Zm)(e.id)},null,8,["message","fieldID"])):(l(),M(he(e.error),{key:1}))],2)):O("",!0),r.$slots["help-text"]?(l(),m("div",{key:2,class:d(a(vo).HelpText),id:a(Ba)(e.id)},[f(r.$slots,"help-text")],10,ey)):O("",!0)],2))}});$a.__docgenInfo={exportName:"default",displayName:"Labelled",description:"",tags:{},props:[{name:"id",description:"A unique identifier for the label",required:!0,type:{name:"TSIndexedAccessType"}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"action",description:"An action",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"requiredIndicator",description:"Visual required indicator for the label",required:!1,type:{name:"boolean"}}],slots:[{name:"label"},{name:"default"},{name:"help-text"}]};const ty="Polaris-Layout",oy="Polaris-Layout__Section",ny="Polaris-Layout__AnnotatedSection",ay="Polaris-Layout__AnnotationWrapper",sy="Polaris-Layout__AnnotationContent",ry="Polaris-Layout__Annotation",iy="Polaris-Layout__AnnotationDescription";var Be={Layout:ty,Section:oy,"Section-secondary":"Polaris-Layout__Section--secondary","Section-fullWidth":"Polaris-Layout__Section--fullWidth","Section-oneHalf":"Polaris-Layout__Section--oneHalf","Section-oneThird":"Polaris-Layout__Section--oneThird",AnnotatedSection:ny,AnnotationWrapper:ay,AnnotationContent:sy,Annotation:ry,AnnotationDescription:iy};const ur=I({props:{secondary:{type:Boolean},fullWidth:{type:Boolean},oneHalf:{type:Boolean},oneThird:{type:Boolean}},setup(e){const t=e,o=u(()=>F(Be.Section,t.secondary&&Be["Section-secondary"],t.fullWidth&&Be["Section-fullWidth"],t.oneHalf&&Be["Section-oneHalf"],t.oneThird&&Be["Section-oneThird"]));return(s,r)=>(l(),m("div",{class:d(a(o))},[f(s.$slots,"default")],2))}});ur.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"secondary",required:!1,type:{name:"boolean"}},{name:"fullWidth",required:!1,type:{name:"boolean"}},{name:"oneHalf",required:!1,type:{name:"boolean"}},{name:"oneThird",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const ly="Polaris-TextContainer",cy="Polaris-TextContainer--spacingTight",uy="Polaris-TextContainer--spacingLoose";var ds={TextContainer:ly,spacingTight:cy,spacingLoose:uy};const wo=I({props:{spacing:null},setup(e){const t=e,o=u(()=>t.spacing&&ds[ve("TextContainer",t.spacing)]),s=u(()=>F(ds.TextContainer,o.value));return(r,i)=>(l(),m("div",{class:d(a(s))},[f(r.$slots,"default")],2))}});wo.__docgenInfo={exportName:"default",displayName:"TextContainer",description:"",tags:{},props:[{name:"spacing",description:"The amount of vertical spacing children will get between them",required:!1,type:{name:"Spacing"}}],slots:[{name:"default"}]};const dy=I({props:{id:null},setup(e){const t=_e(),o=u(()=>{var r;return(r=t.description)==null?void 0:r.call(t)}),s=u(()=>{var r;return Boolean(o.value&&(o.value.length>=2||o.value[0]&&((r=o.value[0].el)==null?void 0:r.nodeType)!==3))});return(r,i)=>(l(),m("div",{class:d(a(Be).AnnotatedSection)},[A("div",{class:d(a(Be).AnnotationWrapper)},[A("div",{class:d(a(Be).Annotation)},[V(a(wo),null,{default:_(()=>[V(a(Ao),{id:e.id},{default:_(()=>[f(r.$slots,"title")]),_:3},8,["id"]),a(s)?f(r.$slots,"description",{key:1}):(l(),m("div",{key:0,class:d(a(Be).AnnotationDescription)},[f(r.$slots,"description")],2))]),_:3})],2),A("div",{class:d(a(Be).AnnotationContent)},null,2)],2)],2))}});dy.__docgenInfo={exportName:"default",displayName:"AnnotatedSection",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"description"}]};const py=I({props:{sectioned:{type:Boolean}},setup(e){return(t,o)=>(l(),m("div",{class:d(a(Be).Layout)},[e.sectioned?(l(),M(a(ur),{key:0},{default:_(()=>[f(t.$slots,"default")]),_:3})):f(t.$slots,"default",{key:1})],2))}});py.__docgenInfo={exportName:"default",displayName:"Layout",description:"",tags:{},props:[{name:"sectioned",description:"Automatically adds sections to layout",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const my="Polaris-Link",yy="Polaris-Link__IconLockup",hy="Polaris-Link__IconLayout",fy="Polaris-Link--monochrome",gy="Polaris-Link--removeUnderline";var tt={Link:my,IconLockup:yy,IconLayout:hy,monochrome:fy,removeUnderline:gy};const by=["id","aria-label"],un=I({props:{id:null,url:null,to:null,external:{type:Boolean},monochrome:{type:Boolean},removeUnderline:{type:Boolean},accessibilityLabel:null},setup(e){const t=e,o=u(()=>F(tt.Link,t.monochrome&&tt.monochrome,t.removeUnderline&&tt.removeUnderline));return(s,r)=>e.url||e.to?(l(),M(a(_o),{key:0,id:e.id,to:e.to,url:e.url,class:d(a(o)),external:e.external,"aria-label":e.accessibilityLabel},{default:_(()=>[f(s.$slots,"default"),A("span",{class:d(a(tt).IconLockup)},[A("span",{class:d(a(tt).IconLayout)},[V(a(ue),{source:a(Za)},null,8,["source"])],2)],2)]),_:3},8,["id","to","url","class","external","aria-label"])):(l(),m("button",{key:1,id:e.id,type:"button",class:d(a(o)),"aria-label":e.accessibilityLabel,onClick:r[0]||(r[0]=i=>s.$emit("click"))},[f(s.$slots,"default"),A("span",{class:d(a(tt).IconLockup)},[A("span",{class:d(a(tt).IconLayout)},[V(a(ue),{source:a(Za)},null,8,["source"])],2)],2)],10,by))}});un.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"id",description:"ID for the link",required:!1,type:{name:"string"}},{name:"url",description:"The url to link to",required:!1,type:{name:"string"}},{name:"to",description:"Using with vue-router",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"external",description:"Makes the link open in a new tab",required:!1,type:{name:"boolean"}},{name:"monochrome",description:"Makes the link color the same as the current text color and adds an underline",required:!1,type:{name:"boolean"}},{name:"removeUnderline",description:"Removes text decoration underline to the link",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Descriptive text to be read to screenreaders",required:!1,type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}]};const vy="Polaris-List",xy="Polaris-List--typeNumber",Sy="Polaris-List__Item";var xa={List:vy,typeNumber:xy,Item:Sy};const Io=I({props:{type:{default:"bullet"}},setup(e){const t=e,o=u(()=>{const r=ve("type",t.type);return F(xa.List,t.type&&xa[r])}),s=t.type==="bullet"?"ul":"ol";return(r,i)=>(l(),M(he(a(s)),{class:d(a(o))},{default:_(()=>[f(r.$slots,"default")]),_:3},8,["class"]))}});Io.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"type",description:"Type of list to display",tags:{values:[{description:"bullet | number",title:"values"}],default:[{description:"bullet",title:"default"}]},required:!0,type:{name:"Type"},defaultValue:{func:!1,value:"'bullet'"}}],slots:[{name:"default"}]};const Ma=I({setup(e){return(t,o)=>(l(),m("li",{class:d(a(xa).Item)},[f(t.$slots,"default")],2))}});Ma.__docgenInfo={exportName:"default",displayName:"Item",description:"",tags:{},slots:[{name:"default"}]};const Ty="Polaris-Listbox";var Cy={Listbox:Ty};const _y={"aria-live":"polite"},ky=["aria-label","aria-labelledby","aria-busy","id"],Py=I({props:{enableKeyboardControl:{type:Boolean},accessibilityLabel:null},emits:["select"],setup(e,{emit:t}){const o=e,s="[data-listbox-option]",r="data-listbox-option-value",i="data-focused",c="aria-activedescendant";Ne("withinListboxContext",!0);const p=ke("comboboxListboxContext",{}),{setActiveOptionId:v,setListboxId:T,listboxId:g,textFieldLabelId:h,onOptionSelected:x,onKeyToBottom:w,textFieldFocused:B}=p,{useUniqueId:D}=Ie(),C=D("Listbox"),P=u(()=>Boolean(v)),E=u(()=>g||""),N=L(null),G=L(null),k=L(""),H=L(o.enableKeyboardControl);let b;Je([()=>C,()=>E],()=>{T&&!g&&T(C)}),Je(()=>b,()=>{v&&v(b.domId)});const $=()=>{var ce;const X=(ce=N.value)==null?void 0:ce.querySelectorAll(s);return X?[...new Set(Array.from(X))]:[]},W=(X,ce)=>{So(()=>{if(G.value){const{element:re}=X,de=ce&&Ji(re,Vs.selector)||re;Qi(de,G.value)}},15)},se=X=>{var ce;if(b&&b.element&&b.element.removeAttribute(i),X){if(X.element.setAttribute(i,"true"),(ce=N.value)==null||ce.setAttribute(c,X.domId),G.value){const re=$().findIndex(de=>de.id===X.element.id)===0;W(X,re)}b=X}},ee=X=>{const ce=X==="up",re=$();let de=b.element,yt=-1;for(;yt++<re.length;){let Qe;if(de){const qo=de==null?void 0:de.id,ht=re.findIndex(na=>na.id===qo);let fo=ce?-1:1;ht===0&&ce?fo=re.length-1:ht===re.length-1&&!ce&&(fo=-(re.length-1)),Qe=ht+fo,de=re[Qe]}else Qe=ce?re.length-1:0,de=re[Qe];if((de==null?void 0:de.getAttribute("aria-disabled"))!=="true")return Qe===re.length-1&&w&&w(),de}return null},Te=(X,ce)=>{ce.preventDefault();const re=ee(X);if(!re)return;const de={domId:re.id,value:re.getAttribute(r)||"",element:re,disabled:re.getAttribute("aria-disabled")==="true"};se(de)},z=X=>{Te("down",X)},Q=X=>{Te("up",X)},Ae=X=>{t("select",X)},ge=X=>{se(X),x&&x(),Ae(X.value)};Ne("listboxContext",{onOptionSelect:ge,setLoading:X=>{k.value=X}});const dt=X=>{X.preventDefault(),X.stopPropagation(),ge(b)},pt=()=>{o.enableKeyboardControl||(H.value=!0)},mt=X=>{X.stopPropagation(),o.enableKeyboardControl&&se(),!(o.enableKeyboardControl||P)&&(H.value=!1)};return fe(()=>{N.value&&(G.value=N.value.closest(Jo.selector))}),(X,ce)=>(l(),m(ie,null,[H.value||a(B)?(l(),m(ie,{key:0},[V(a(st),{keyEvent:"keydown",keyCode:a(ze).ArrowDown,handler:z},null,8,["keyCode"]),V(a(st),{keyEvent:"keydown",keyCode:a(ze).ArrowUp,handler:Q},null,8,["keyCode"]),V(a(st),{keyEvent:"keydown",keyCode:a(ze).Enter,handler:dt},null,8,["keyCode"])],64)):O("",!0),V(a(Me),null,{default:_(()=>[A("div",_y,ne(k.value?k.value:null),1)]),_:1}),X.$slots.default?(l(),m("ul",{key:1,tabindex:"0",role:"listbox",class:d(a(F)(a(Cy).Listbox)),"aria-label":a(P)?void 0:e.accessibilityLabel,"aria-labelledby":a(h)||void 0,"aria-busy":Boolean(k.value),id:a(C),onFocus:pt,onBlur:mt,ref_key:"listboxRef",ref:N},[f(X.$slots,"default")],42,ky)):O("",!0)],64))}});Py.__docgenInfo={exportName:"default",displayName:"Listbox",description:"",tags:{},props:[{name:"enableKeyboardControl",description:"Explicitly enable keyboard control",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"Visually hidden text for screen readers",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["string"]}}],slots:[{name:"default"}]};const Ay="Polaris-Listbox-Action",wy="Polaris-Listbox-Action__ActionDivider",Iy="Polaris-Listbox-Action__Icon";var ca={Action:Ay,ActionDivider:wy,Icon:Iy};const Dy="Polaris-Listbox-Option",Ly="Polaris-Listbox-Option--divider";var ps={Option:Dy,divider:Ly};const By="Polaris-Listbox-TextOption",$y="Polaris-Listbox-TextOption--allowMultiple",My="Polaris-Listbox-TextOption--isAction",Ey="Polaris-Listbox-TextOption--disabled",Ny="Polaris-Listbox-TextOption--selected",qy="Polaris-Listbox-TextOption__Content",Ry="Polaris-Listbox-TextOption__Checkbox";var ot={TextOption:By,allowMultiple:$y,isAction:My,disabled:Ey,selected:Ny,Content:qy,Checkbox:Ry};const Yo=I({props:{selected:{type:Boolean},disabled:{type:Boolean}},setup(e){const t=e,o=ke("comboboxListboxOptionContext",{}),s=ke("actionContext",!1),r=u(()=>Boolean(o.allowMultiple)),i=u(()=>s),c=u(()=>F(ot.TextOption,t.selected&&!r.value&&ot.selected,t.disabled&&ot.disabled,r.value&&ot.allowMultiple,i.value&&ot.isAction));return(p,v)=>(l(),m("div",{class:d(a(c))},[A("div",{class:d(a(ot).Content)},[a(r)&&!a(i)?(l(),m("div",{key:0,class:d(a(ot).Checkbox)},[V(a(ao),{checked:e.selected},{label:_(()=>[f(p.$slots,"default")]),_:3},8,["checked"])],2)):f(p.$slots,"default",{key:1})],2)],2))}});Yo.__docgenInfo={exportName:"default",displayName:"TextOption",description:"",tags:{},props:[{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Fy=["id","role","data-within-section","data-listbox-option-value","data-listbox-option-destructive","aria-disabled","aria-label","aria-selected"],dr=I({props:{value:null,accessibilityLabel:null,selected:{type:Boolean},disabled:{type:Boolean},divider:{type:Boolean}},setup(e){const t=e,o=ke("mappedActionContext",{}),s=ke("sectionContext",""),r=ke("listboxContext",{onOptionSelect(b){},setLoading(b){}}),{role:i,url:c,external:p,onAction:v,destructive:T}=o,{onOptionSelect:g}=r,h=_e(),x=u(()=>{var b;return(b=h.default)==null?void 0:b.call(h)}),w=L(null),{useUniqueId:B}=Ie(),D=B("ListboxOption"),C=u(()=>Boolean(s)),P={[Zi.attribute]:C.value},E=u(()=>{var b;return Boolean(x.value&&(x.value.length>=2||x.value[0]&&((b=x.value[0].el)==null?void 0:b.nodeType)!==3))}),N=u(()=>i||"option"),G=u(()=>F(ps.Option,t.divider&&ps.divider)),k=b=>{if(b.preventDefault(),!t.disabled&&(v&&v(),w.value&&!v)){const $={domId:D,value:t.value,element:w.value,disabled:t.disabled||!1};g($)}},H=b=>{b.preventDefault()};return(b,$)=>(l(),m("li",xe(P,{id:a(D),class:a(G),ref_key:"listItemRef",ref:w,role:a(N),"data-within-section":a(C),"data-listbox-option-value":e.value,"data-listbox-option-destructive":a(T),"aria-disabled":e.disabled,"aria-label":e.accessibilityLabel,"aria-selected":e.selected,onClick:k,onMousedown:H,tabindex:"-1","data-listbox-option":""}),[a(c)?(l(),M(a(_o),{key:0,url:a(c),external:a(p)},{default:_(()=>[a(E)?f(b.$slots,"default",{key:1}):(l(),M(a(Yo),{key:0,selected:e.selected,disabled:e.disabled},{default:_(()=>[f(b.$slots,"default")]),_:3},8,["selected","disabled"]))]),_:3},8,["url","external"])):(l(),m(ie,{key:1},[a(E)?f(b.$slots,"default",{key:1}):(l(),M(a(Yo),{key:0,selected:e.selected,disabled:e.disabled},{default:_(()=>[f(b.$slots,"default")]),_:3},8,["selected","disabled"]))],64))],16,Fy))}});dr.__docgenInfo={exportName:"default",displayName:"Option",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"string"}},{name:"accessibilityLabel",required:!1,type:{name:"string"}},{name:"selected",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}]};const Oy=I({props:{icon:null},setup(e){const t=e;Ne("actionContext",!0);const o=u(()=>F(ca.Action,t.divider&&ca.ActionDivider));return(s,r)=>(l(),M(a(dr),{value:s.value,selected:s.selected,disabled:s.disabled,divider:s.divider},{default:_(()=>[A("div",{class:d(a(o))},[V(a(Yo),{selected:s.selected,disabled:s.disabled},{default:_(()=>[e.icon?(l(),m("div",{key:0,class:d(a(ca).Icon)},[V(a(ue),{color:"subdued",source:e.icon},null,8,["source"])],2)):O("",!0),f(s.$slots,"default")]),_:3},8,["selected","disabled"])],2)]),_:3},8,["value","selected","disabled","divider"]))}});Oy.__docgenInfo={exportName:"default",displayName:"Action",description:"",tags:{},props:[{name:"icon",required:!1,type:{name:"IconSource"}}],slots:[{name:"default"}]};const Vy="Polaris-Listbox-Header";var Hy={Header:Vy};const zy=["id"],jy=I({setup(e){const t=ke("sectionContext",""),o=_e(),s=u(()=>{var i;return(i=o.default)==null?void 0:i.call(o)}),r=u(()=>{var i;return Boolean(s.value&&(s.value.length>=2||s.value[0]&&((i=s.value[0].el)==null?void 0:i.nodeType)!==3))});return(i,c)=>(l(),m("div",{id:a(t),"aria-hidden":""},[a(r)?f(i.$slots,"default",{key:1}):(l(),m("div",{key:0,class:d(a(Hy).Header)},[f(i.$slots,"default")],2))],8,zy))}});jy.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},slots:[{name:"default"}]};const Uy="Polaris-Listbox-Loading__ListItem",Wy="Polaris-Listbox-Loading";var ms={ListItem:Uy,Loading:Wy};const Xy=I({props:{accessibilityLabel:null},setup(e){const t=e,o=ke("listboxContext",{onOptionSelect(r){},setLoading(r){}}),{setLoading:s}=o;return Je(()=>t.accessibilityLabel,()=>(s(t.accessibilityLabel),()=>s(void 0))),(r,i)=>(l(),m("li",{class:d(a(ms).ListItem),role:"presentation"},[r.$slots.default?f(r.$slots,"default",{key:0}):(l(),m("div",{key:1,class:d(a(ms).Loading)},[V(a(oo),{size:"small",accessibilityLabel:e.accessibilityLabel},null,8,["accessibilityLabel"])],2))],2))}});Xy.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"accessibilityLabel",required:!0,type:{name:"string"}}],slots:[{name:"default"}]};const Gy="Polaris-Listbox-Section__SectionGroup",Ky="Polaris-Listbox-Section--noDivider";var ys={SectionGroup:Gy,noDivider:Ky};const Yy=["aria-labelledby"],Jy=I({props:{divider:{type:Boolean}},setup(e){const t=e,{useUniqueId:o}=Ie(),s=o("ListboxSection");Ne("sectionContext",s);const r=u(()=>F(ys.SectionGroup,!t.divider&&ys.noDivider));return(i,c)=>(l(),m("li",xe({role:"presentation"},a(Vs)),[f(i.$slots,"title"),A("ul",{role:"group","aria-labelledby":a(s),class:d(a(r))},[f(i.$slots,"default")],10,Yy)],16))}});Jy.__docgenInfo={exportName:"default",displayName:"Section",description:"",tags:{},props:[{name:"divider",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}]};const Qy="Polaris-Select",Zy="Polaris-Select--disabled",eh="Polaris-Select__Content",th="Polaris-Select__InlineLabel",oh="Polaris-Select__Icon",nh="Polaris-Select__Backdrop",ah="Polaris-Select__SelectedOption",sh="Polaris-Select__Prefix",rh="Polaris-Select__Input",ih="Polaris-Select--error",lh="Polaris-Select--hover";var Ee={Select:Qy,disabled:Zy,Content:eh,InlineLabel:th,Icon:oh,Backdrop:nh,SelectedOption:ah,Prefix:sh,Input:rh,error:ih,hover:lh};const ch=["id","name","disabled","value","aria-invalid","aria-describedby","aria-required"],uh=["label"],dh=["value","disabled"],ph=["value","disabled"],mh=["aria-disabled"],Do=I({props:{options:null,labelAction:null,labelHidden:{type:Boolean},labelInline:{type:Boolean},disabled:{type:Boolean},placeholder:null,id:null,name:null,value:null,error:{type:[null,Boolean]},requiredIndicator:{type:Boolean},modelValue:null},emits:["focus","blur","change","update:modelValue"],setup(e,{emit:t}){const o=e,s=_e(),{useUniqueId:r}=Ie(),i=[],c=u(()=>r("Select",o.id)),p=u(()=>o.labelInline?!0:o.labelHidden),v=u(()=>F(Ee.Select,o.error&&Ee.error,o.disabled&&Ee.disabled)),T=u(()=>{let k=[];return x.value.forEach(H=>{if(B(H)){const b=H;k=k.concat(b.options)}else k.push(H)}),k}),g=u(()=>{let k=T.value.find(H=>o.modelValue===H.value);return k===void 0&&(k=T.value.find(H=>!H.hidden)),k||{value:"",label:""}}),h=u(()=>x.value.map(k=>G(k))),x=u(()=>{let k=o.options.map(G);return o.placeholder&&k.unshift({label:o.placeholder,value:"",disabled:!0}),k});s["help-text"]&&i.push(Ba(o.id||"")),o.error&&i.push(`${o.id}Error`);const w=k=>typeof k=="string",B=k=>typeof k=="object"&&"options"in k&&k.options!=null,D=k=>{t("update:modelValue",k.target.value),t("change",k.target.value)},C=k=>B(k)?k.title:k.label,P=k=>B(k)?{label:k.title,value:"",disabled:!0,hidden:!0}:k,E=k=>B(k)?k.options:[];function N(k){return{label:k,value:k}}function G(k){if(w(k))return N(k);if(B(k)){const{title:H,options:b}=k;return{title:H,options:b.map($=>w($)?N($):$)}}return k}return(k,H)=>(l(),M(a($a),{id:a(c),error:e.error,action:e.labelAction,"label-hidden":a(p),"required-indicator":e.requiredIndicator},$e({default:_(()=>[A("div",{class:d(a(v))},[A("select",{id:a(c),name:e.name,class:d(a(Ee).Input),disabled:e.disabled,value:e.modelValue,"aria-invalid":!!e.error,"aria-describedby":i.join(" ")||void 0,"aria-required":e.requiredIndicator,onFocus:H[0]||(H[0]=b=>k.$emit("focus")),onBlur:H[1]||(H[1]=b=>k.$emit("blur")),onChange:D},[(l(!0),m(ie,null,ye(a(h),b=>(l(),m(ie,null,[B(b)?(l(),m("optgroup",{label:C(b),key:C(b)},[(l(!0),m(ie,null,ye(E(b),$=>(l(),m("option",{key:$.value,value:$.value,disabled:$.disabled},ne($.label),9,dh))),128))],8,uh)):(l(),m("option",{key:P(b).value,value:P(b).value,disabled:P(b).disabled},ne(P(b).label),9,ph))],64))),256))],42,ch),A("div",{class:d(a(Ee).Content),"aria-hidden":"","aria-disabled":e.disabled},[e.labelInline?(l(),m("span",{key:0,class:d(a(Ee).InlineLabel)},[f(k.$slots,"label")],2)):O("",!0),k.$slots[`prefix-${a(g).id}`]?(l(),m("div",{key:1,class:d(a(Ee).Prefix)},[f(k.$slots,`prefix-${a(g).id}`)],2)):O("",!0),A("span",{class:d(a(Ee).SelectedOption)},[k.$slots[`label-${a(g).id}`]?f(k.$slots,`label-${a(g).id}`,{key:0}):(l(),m(ie,{key:1},[He(ne(a(g).label),1)],64))],2),A("span",{class:d(a(Ee).Icon)},[V(a(ue),{source:a(Rs)},null,8,["source"])],2)],10,mh),A("div",{class:d(a(Ee).Backdrop)},null,2)],2)]),_:2},[!e.labelInline&&a(s).label?{name:"label",fn:_(()=>[f(k.$slots,"label")])}:void 0,a(s)["help-text"]?{name:"help-text",fn:_(()=>[f(k.$slots,"help-text")])}:void 0]),1032,["id","error","action","label-hidden","required-indicator"]))}});Do.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"options",description:"List of options or option groups to choose from",required:!0,type:{name:"Array",elements:[{name:"TSParenthesizedType"}]}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"Action"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"labelInline",description:"Show the label to the left of the value, inside the control",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable input",required:!1,type:{name:"boolean"}},{name:"placeholder",description:"Example text to display as placeholder",required:!1,type:{name:"string"}},{name:"id",description:"ID for form input",required:!1,type:{name:"string"}},{name:"name",description:"Name for form input",required:!1,type:{name:"string"}},{name:"value",description:"Value for form input",required:!1,type:{name:"string"}},{name:"error",description:"Display an error state",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"requiredIndicator",description:"Visual required indicator, add an asterisk to label",required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value for v-model binding",required:!1,type:{name:"string"}}],events:[{name:"focus"},{name:"blur"},{name:"change",type:{names:["TSIndexedAccessType"]}},{name:"update:modelValue",type:{names:["TSIndexedAccessType"]}}],slots:[{name:"label"},{name:"help-text"},{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]}]};const yh="Polaris-SettingAction",hh="Polaris-SettingAction__Setting",fh="Polaris-SettingAction__Action";var ua={SettingAction:yh,Setting:hh,Action:fh};const gh=I({setup(e){return(t,o)=>(l(),m("div",{class:d(a(ua).SettingAction)},[A("div",{class:d(a(ua).Setting)},[f(t.$slots,"setting")],2),A("div",{class:d(a(ua).Action)},[f(t.$slots,"action")],2)],2))}});gh.__docgenInfo={exportName:"default",displayName:"SettingAction",description:"",tags:{},slots:[{name:"setting"},{name:"action"}]};const bh="Polaris-Subheading";var vh={Subheading:bh};const dn=I({props:{element:{default:"h3"}},setup(e){return(t,o)=>(l(),M(he(e.element),{class:d(a(vh).Subheading)},{default:_(()=>[f(t.$slots,"default")]),_:3},8,["class"]))}});dn.__docgenInfo={exportName:"default",displayName:"Subheading",description:"",tags:{},props:[{name:"element",description:"The element name to use for the subheading",tags:{default:[{description:"'h3'",title:"default"}]},required:!1,type:{name:"HeadingTagName"},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"default"}]};const xh="Polaris-Tag",Sh="Polaris-Tag--disabled",Th="Polaris-Tag--clickable",Ch="Polaris-Tag--removable",_h="Polaris-Tag--linkable",kh="Polaris-Tag__TagText",Ph="Polaris-Tag__Button",Ah="Polaris-Tag--segmented",wh="Polaris-Tag__Link",Ih="Polaris-Tag__LinkText";var we={Tag:xh,disabled:Sh,clickable:Th,removable:Ch,linkable:_h,TagText:kh,Button:Ph,segmented:Ah,Link:wh,LinkText:Ih};const Dh=["disabled"],Lh=["href"],Bh=["title"],$h=["title"],Mh=["aria-label","disabled"],pn=I({props:{disabled:{type:Boolean},accessibilityLabel:null,url:null},setup(e){const t=e,o=eo(),s=_e(),r=u(()=>Boolean(o.onClick)),i=u(()=>Boolean(o.onRemove)),c=u(()=>r.value&&t.url),p=u(()=>F(we.Tag,t.disabled&&we.disabled,r.value&&we.clickable,i.value&&we.removable,t.url&&!t.disabled&&we.linkable,c.value&&we.segmented)),v=u(()=>F(we.Link,c.value&&we.segmented)),T=u(()=>F(we.Button,c.value&&we.segmented)),g=u(()=>t.accessibilityLabel?t.accessibilityLabel:s.default&&s.default()[0].children?s.default()[0].children:""),h=u(()=>`Remove ${g.value||""}`),x=Zt;return(w,B)=>a(r)?(l(),m("button",{key:0,type:"button",disabled:e.disabled,class:d(a(p))},[f(w.$slots,"default")],10,Dh)):(l(),m("span",{key:1,class:d(a(p))},[e.url&&!e.disabled?(l(),m("a",{key:0,class:d(a(v)),href:e.url},[A("span",{title:a(g),class:d(a(we).LinkText)},[f(w.$slots,"default")],10,Bh)],10,Lh)):(l(),m("span",{key:1,title:a(g),class:d(a(we).TagText)},[f(w.$slots,"default")],10,$h)),a(i)?(l(),m("button",{key:2,type:"button","aria-label":a(h),class:d(a(T)),disabled:e.disabled,onClick:B[0]||(B[0]=D=>w.$emit("remove")),onMouseup:B[1]||(B[1]=(...D)=>a(x)&&a(x)(...D))},[V(a(ue),{source:a(el)},null,8,["source"])],42,Mh)):O("",!0)],2))}});pn.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"disabled",description:"Disables the tag",required:!1,type:{name:"boolean"}},{name:"accessibilityLabel",description:"A string to use when tag has more than textual content",required:!1,type:{name:"string"}},{name:"url",description:"Url to navigate to when tag is clicked or keypressed.",required:!1,type:{name:"string"}}],events:[{name:"remove"}],slots:[{name:"default"}]};const Eh="Polaris-TextField",Nh="Polaris-TextField--multiline",qh="Polaris-TextField__Input",Rh="Polaris-TextField--hasValue",Fh="Polaris-TextField--focus",Oh="Polaris-TextField__Backdrop",Vh="Polaris-TextField--error",Hh="Polaris-TextField--readOnly",zh="Polaris-TextField--disabled",jh="Polaris-TextField__Prefix",Uh="Polaris-TextField__Suffix",Wh="Polaris-TextField__CharacterCount",Xh="Polaris-TextField__AlignFieldBottom",Gh="Polaris-TextField__ClearButton",Kh="Polaris-TextField__Hidden",Yh="Polaris-TextField__Spinner",Jh="Polaris-TextField__SpinnerIcon",Qh="Polaris-TextField__Resizer",Zh="Polaris-TextField__DummyInput",ef="Polaris-TextField__Segment",tf="Polaris-TextField--monospaced";var te={TextField:Eh,multiline:Nh,Input:qh,hasValue:Rh,focus:Fh,Backdrop:Oh,error:Vh,readOnly:Hh,disabled:zh,Prefix:jh,"Input-hasClearButton":"Polaris-TextField__Input--hasClearButton","Input-suffixed":"Polaris-TextField__Input--suffixed","Input-alignRight":"Polaris-TextField__Input--alignRight","Input-alignLeft":"Polaris-TextField__Input--alignLeft","Input-alignCenter":"Polaris-TextField__Input--alignCenter",Suffix:Uh,CharacterCount:Wh,AlignFieldBottom:Xh,ClearButton:Gh,Hidden:Kh,Spinner:Yh,SpinnerIcon:Jh,Resizer:Qh,DummyInput:Zh,Segment:ef,monospaced:tf};const pr=I({emits:["click","change","mouseup","mousedown"],setup(e,{emit:t}){const o=s=>{t("click"),t("change",s)};return(s,r)=>(l(),m("div",{"aria-hidden":"true",class:d(a(te).Spinner)},[A("div",{role:"button",tabindex:"-1",class:d(a(te).Segment),onClick:r[0]||(r[0]=i=>o(1)),onMousedown:r[1]||(r[1]=i=>s.$emit("mousedown")),onMouseup:r[2]||(r[2]=i=>s.$emit("mouseup"))},[A("div",{class:d(a(te).SpinnerIcon)},[V(a(ue),{source:a(Fs)},null,8,["source"])],2)],34),A("div",{role:"button",tabindex:"-1",class:d(a(te).Segment),onClick:r[3]||(r[3]=i=>o(-1)),onMousedown:r[4]||(r[4]=i=>s.$emit("mousedown")),onMouseup:r[5]||(r[5]=i=>s.$emit("mouseup"))},[A("div",{class:d(a(te).SpinnerIcon)},[V(a(ue),{source:a(Ta)},null,8,["source"])],2)],34)],2))}});pr.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},events:[{name:"mousedown"},{name:"mouseup"},{name:"click"},{name:"change",type:{names:["number"]}}]};const of=["innerHTML"],nf=["innerHTML"],mr=I({props:{contents:null,currentHeight:null,minimumLines:null},emits:["height-change"],setup(e,{emit:t}){const o=e,s={"&":"&amp;","<":"&lt;",">":"&gt;","\n":"<br>","\r":""},r=new RegExp(`[${Object.keys(s).join()}]`,"g"),i=L(null),c=L(null),p=L(),v=L(o.currentHeight),T=w=>s[w],g=w=>w?`${w.replace(r,T)}<br>`:"<br>",h=w=>{let B="";for(let D=0;D<w;D++)B+="<br>";return B},x=()=>{p.value&&cancelAnimationFrame(p.value),p.value=requestAnimationFrame(()=>{if(!i.value||!c.value)return;const w=Math.max(i.value.offsetHeight,c.value.offsetHeight);w!==v.value&&t("height-change",w)})};return fe(()=>{p.value&&cancelAnimationFrame(p.value)}),Qo(()=>{x()}),(w,B)=>(l(),m("div",{"aria-hidden":"true",class:d(a(te).Resizer)},[V(a(Le),{event:"resize",handler:x}),A("div",{ref_key:"contentNode",ref:i,class:d(a(te).DummyInput),innerHTML:g(e.contents)},null,10,of),e.minimumLines?(l(),m("div",{key:0,ref_key:"minimumLinesNode",ref:c,class:d(a(te).DummyInput),innerHTML:h(e.minimumLines)},null,10,nf)):O("",!0)],2))}});mr.__docgenInfo={exportName:"default",displayName:"Resizer",description:"",tags:{},props:[{name:"contents",required:!1,type:{name:"string"}},{name:"currentHeight",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]}},{name:"minimumLines",required:!1,type:{name:"number"}}],events:[{name:"height-change",type:{names:["number"]}}]};const af=["id"],sf=["id"],rf=["aria-live"],lf=["disabled"],cf=A("p",null,"Clear button",-1),yr=I({props:{placeholder:null,modelValue:null,labelAction:null,labelHidden:{type:Boolean},disabled:{type:Boolean},clearButton:{type:Boolean},readOnly:{type:Boolean},autoFocus:{type:Boolean},focused:{type:Boolean},multiline:{type:[Boolean,Number]},error:{type:[null,Boolean]},type:null,name:null,id:null,role:null,step:null,autoComplete:{type:[String,Boolean]},max:null,maxLength:null,maxHeight:null,min:null,minLength:null,pattern:null,inputMode:null,spellCheck:{type:Boolean},ariaOwns:null,ariaExpanded:{type:Boolean},ariaControls:null,ariaActiveDescendant:null,ariaAutocomplete:null,showCharacterCount:{type:Boolean},align:null,requiredIndicator:{type:Boolean},monospaced:{type:Boolean}},emits:["focus","click","blur","change","update:modelValue","clear-button-click"],setup(e,{emit:t}){const o=e,s=ke("comboboxTextFieldContext",{}),r=L(null),i=L(null),c=L(null),p=_e(),v=u(()=>{var R;return(R=p["connected-left"])==null?void 0:R.call(p)}),T=u(()=>{var R;return(R=p["connected-right"])==null?void 0:R.call(p)}),g=u(()=>{var R;return(R=p["help-text"])==null?void 0:R.call(p)}),h=u(()=>{var R;return(R=p.prefix)==null?void 0:R.call(p)}),x=u(()=>{var R;return(R=p.suffix)==null?void 0:R.call(p)}),w=L(),B=L(),D=L();Je(()=>o.focused,()=>{!c.value||!o.focused===void 0||(o.focused?c.value.focus():c.value.blur())});const{useUniqueId:C}=Ie(),P=u(()=>C("TextField",o.id)),E=u(()=>o.type==="currency"?"text":o.type),N=u(()=>{if(!!o.multiline)return typeof o.multiline=="number"?o.multiline:1}),G=u(()=>ee.value!==""),k=u(()=>o.multiline&&w.value?{height:`${w.value}px`}:{}),H=u(()=>F(te.TextField,Boolean(ee.value)&&te.hasValue,o.disabled&&te.disabled,o.readOnly&&te.readOnly,o.error&&te.error,o.multiline&&te.multiline,B.value&&te.focus)),b=u(()=>{const R=o.align&&te[ve("Input-align",o.align)];return F(te.Input,R,x.value&&te["Input-suffixed"],o.clearButton&&te["Input-hasClearButton"],o.monospaced&&te.monospaced)}),$=u(()=>F(te.CharacterCount,o.multiline&&te.AlignFieldBottom)),W=u(()=>F(te.Backdrop,v.value&&te["Backdrop-connectedLeft"],T.value&&te["Backdrop-connectedRight"])),se=u(()=>F(te.ClearButton,!G.value&&te.AlignFieldBottom)),ee=u(()=>typeof o.modelValue=="string"?o.modelValue:""),Te=u(()=>o.step?o.step:1),z=u(()=>o.max?o.max:1/0),Q=u(()=>o.min?o.min:-1/0),Ae=u(()=>{if(!!o.multiline)return Boolean(o.multiline)||o.multiline>0?{"aria-multiline":!0}:void 0}),ge=u(()=>o.autoComplete===!0?"on":o.autoComplete===!1?"off":o.autoComplete),le=u(()=>ee.value.length),dt=u(()=>o.maxLength?le.value:`${le.value}/${o.maxLength}`),pt=u(()=>{const R=[];return o.error&&R.push(`${P.value}Error`),g.value&&R.push(Ba(P.value)),o.showCharacterCount&&R.push(`${P.value}CharacterCounter`),R.length?R.join(" "):void 0}),mt=u(()=>{const R=[];return h.value&&R.push(`${P.value}Prefix`),x.value&&R.push(`${P.value}Suffix`),R.unshift(lr(P.value)),R.join(" ")}),X=R=>{w.value=R},ce=R=>R instanceof HTMLElement&&(r.value&&r.value.contains(R)||i.value&&i.value.contains(R)),re=R=>{var Ce;const pe=R.target;ce(pe)||B.value||(Ce=c.value)==null||Ce.focus()},de=R=>{const pe=R.target;ce(pe)||(B.value=!0)},yt=R=>{const pe=R.target;ce(pe)||(B.value=!1)},Qe=R=>{const pe=R.target;s.onTextFieldChange&&s.onTextFieldChange(),t("update:modelValue",pe.value),t("change",R)},qo=R=>{const pe=gi=>(gi.toString().split(".")[1]||[]).length,Ce=o.modelValue?parseFloat(o.modelValue):0;if(typeof Ce!="number")return;const ft=Math.max(pe(Ce),pe(Te.value)),fi=Math.min(Number(z.value),Math.max(Ce+R*Te.value,Number(Q.value)));t("update:modelValue",String(fi.toFixed(ft)))},ht=()=>{clearTimeout(D.value)},fo=()=>{let Ce=200;const ft=()=>{Ce>50&&(Ce-=10),qo(0),D.value=window.setTimeout(ft,Ce)};D.value=window.setTimeout(ft,Ce),document.addEventListener("mouseup",ht,{once:!0})},na=R=>{const{key:pe,which:Ce}=y({},R),ft=/[\d.eE+-]$/;o.type!=="number"||Ce!==13||ft.test(pe)||R.preventDefault()};return(R,pe)=>(l(),M(a($a),{id:a(P),error:e.error,action:e.labelAction,labelHidden:e.labelHidden,requiredIndicator:e.requiredIndicator},$e({default:_(()=>[V(a(nr),null,$e({default:_(()=>[A("div",{class:d(a(H)),onFocus:de,onClick:re,onBlur:yt},[a(p).prefix?(l(),m("div",{key:0,id:`${a(P)}Prefix`,class:d(a(te).Prefix),ref_key:"prefixRef",ref:r},[f(R.$slots,"prefix")],10,af)):O("",!0),(l(),M(he(e.multiline?"textarea":"input"),xe({id:a(P),name:e.name,disabled:e.disabled,readonly:e.readOnly,role:e.role,autofocus:e.autoFocus,value:e.modelValue,placeholder:e.placeholder,style:a(k),autocomplete:a(ge),class:a(b),ref_key:"inputRef",ref:c,min:e.min,max:e.max,step:e.step,minlength:e.minLength,maxlength:e.maxLength,spellcheck:e.spellCheck,pattern:e.pattern,inputMode:e.inputMode,rows:a(N),type:a(E),"aria-describedby":a(pt),"aria-labelledby":a(mt),"aria-invalid":Boolean(e.error),"aria-owns":e.ariaOwns,"aria-activedescendant":e.ariaActiveDescendant,"aria-autocomplete":e.ariaAutocomplete,"aria-controls":e.ariaControls,"aria-expanded":e.ariaExpanded,"aria-required":e.requiredIndicator},a(Ae),{onInput:Qe,onKeydown:na,onFocus:pe[0]||(pe[0]=Ce=>R.$emit("focus")),onBlur:pe[1]||(pe[1]=Ce=>R.$emit("blur"))}),{default:_(()=>[e.multiline?(l(),m(ie,{key:0},[He(ne(e.modelValue),1)],64)):O("",!0)]),_:1},16,["id","name","disabled","readonly","role","autofocus","value","placeholder","style","autocomplete","class","min","max","step","minlength","maxlength","spellcheck","pattern","inputMode","rows","type","aria-describedby","aria-labelledby","aria-invalid","aria-owns","aria-activedescendant","aria-autocomplete","aria-controls","aria-expanded","aria-required"])),a(p).suffix?(l(),m("div",{key:1,id:`${a(P)}Suffix`,class:d(a(te).Suffix),ref_key:"suffixRef",ref:i},[f(R.$slots,"suffix")],10,sf)):O("",!0),e.showCharacterCount?(l(),m("div",{key:2,class:d(a($)),"aria-live":B.value?"polite":"off","aria-atomic":"true"},[A("p",null,ne(a(dt)),1)],10,rf)):O("",!0),a(G)&&e.clearButton?(l(),m("button",{key:3,class:d(a(se)),disabled:e.disabled,onClick:pe[2]||(pe[2]=Ce=>R.$emit("clear-button-click",e.id))},[V(a(Me),null,{default:_(()=>[cf]),_:1}),V(a(ue),{source:a(tl),color:"base"},null,8,["source"])],10,lf)):O("",!0),e.type==="number"&&e.step!==0&&!e.disabled&&!e.readOnly?(l(),M(a(pr),{key:4,onChange:qo,onMousedown:fo,onMouseup:ht})):O("",!0),A("div",{class:d(a(W))},null,2),e.multiline?(l(),M(a(mr),{key:5,contents:a(ee)||e.placeholder,currentHeight:w.value,minimumLines:typeof e.multiline=="number"?e.multiline:1,onHeightChange:X},null,8,["contents","currentHeight","minimumLines"])):O("",!0)],34)]),_:2},[a(p).left?{name:"left",fn:_(()=>[f(R.$slots,"connected-left")])}:void 0,a(p).right?{name:"right",fn:_(()=>[f(R.$slots,"connected-right")])}:void 0]),1024)]),_:2},[a(p).label?{name:"label",fn:_(()=>[f(R.$slots,"label")])}:void 0,a(p)["help-text"]?{name:"help-text",fn:_(()=>[f(R.$slots,"help-text")])}:void 0]),1032,["id","error","action","labelHidden","requiredIndicator"]))}});yr.__docgenInfo={exportName:"default",displayName:"TextField",description:"",tags:{},props:[{name:"placeholder",description:"Hint text to display",required:!1,type:{name:"string"}},{name:"modelValue",description:"Initial value for the input",required:!1,type:{name:"string"}},{name:"labelAction",description:"Adds an action to the label",required:!1,type:{name:"TSIndexedAccessType"}},{name:"labelHidden",description:"Visually hide the label",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable the input",required:!1,type:{name:"boolean"}},{name:"clearButton",description:"Show a clear text button in the input",required:!1,type:{name:"boolean"}},{name:"readOnly",description:"Disable editing of the input",required:!1,type:{name:"boolean"}},{name:"autoFocus",description:"Automatically focus the input",required:!1,type:{name:"boolean"}},{name:"focused",description:"Force the focus state on the input",required:!1,type:{name:"boolean"}},{name:"multiline",description:"Allow for multiple lines of input",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"number"}]}},{name:"error",description:"Error to display beneath the label",required:!1,type:{name:"union",elements:[{name:"Error"},{name:"boolean"}]}},{name:"type",description:"Determine type of input",required:!1,type:{name:"Type"}},{name:"name",description:"Name of the input",required:!1,type:{name:"string"}},{name:"id",description:"ID for the input",required:!1,type:{name:"string"}},{name:"role",description:"Defines a specific role attribute for the input",required:!1,type:{name:"string"}},{name:"step",description:"Limit increment value for numeric and date-time inputs",required:!1,type:{name:"number"}},{name:"autoComplete",description:'Enable automatic completion by the browser. Set to "off" when you do not want the browser to fill in info',required:!0,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"max",description:"Mimics the behavior of the native HTML attribute, limiting the maximum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"maxLength",description:"Maximum character length for an input",required:!1,type:{name:"number"}},{name:"maxHeight",description:"Maximum height of the input element. Only applies when `multiline` is `true`",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"min",description:"Mimics the behavior of the native HTML attribute, limiting the minimum value",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"minLength",description:"Minimum character length for an input",required:!1,type:{name:"number"}},{name:"pattern",description:"A regular expression to check the value against",required:!1,type:{name:"string"}},{name:"inputMode",description:"Choose the keyboard that should be used on mobile devices",required:!1,type:{name:"InputMode"}},{name:"spellCheck",description:"Indicate whether value should have spelling checked",required:!1,type:{name:"boolean"}},{name:"ariaOwns",description:"Indicates the id of a component owned by the input",required:!1,type:{name:"string"}},{name:"ariaExpanded",description:"Indicates whether or not a Popover is displayed",required:!1,type:{name:"boolean"}},{name:"ariaControls",description:"Indicates the id of a component controlled by the input",required:!1,type:{name:"string"}},{name:"ariaActiveDescendant",description:"Indicates the id of a related component\u2019s visually focused element to the input",required:!1,type:{name:"string"}},{name:"ariaAutocomplete",description:"Indicates what kind of user input completion suggestions are provided",required:!1,type:{name:"string"}},{name:"showCharacterCount",description:"Indicates whether or not the character count should be displayed",required:!1,type:{name:"boolean"}},{name:"align",description:"Determines the alignment of the text in the input",required:!1,type:{name:"Alignment"}},{name:"requiredIndicator",description:"Visual required indicator, adds an asterisk to label",required:!1,type:{name:"boolean"}},{name:"monospaced",description:"Indicates whether or not a monospaced font should be used",required:!1,type:{name:"boolean"}}],events:[{name:"focus"},{name:"blur"},{name:"clear-button-click",type:{names:["string"]}},{name:"click"},{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"label"},{name:"help-text"},{name:"connected-left"},{name:"connected-right"},{name:"prefix"},{name:"suffix"}]};const uf="Polaris-Thumbnail",df="Polaris-Thumbnail--sizeSmall",pf="Polaris-Thumbnail--sizeMedium",mf="Polaris-Thumbnail--sizeLarge";var hs={Thumbnail:uf,sizeSmall:df,sizeMedium:pf,sizeLarge:mf};const mn=I({props:{size:{default:"medium"},source:null,alt:null},setup(e){const t=e,o=u(()=>{const s=ve("size",t.size);return F(hs.Thumbnail,s&&hs[s])});return(s,r)=>(l(),m("span",{class:d(a(o))},[typeof e.source=="string"?(l(),M(a(ka),{key:0,alt:e.alt,source:e.source},null,8,["alt","source"])):(l(),M(a(ue),{key:1,accessibilityLabel:e.alt,source:e.source},null,8,["accessibilityLabel","source"]))],2))}});mn.__docgenInfo={exportName:"default",displayName:"Thumbnail",description:"",tags:{},props:[{name:"size",description:"Size of thumbnail",tags:{default:[{description:"'medium'",title:"default"}]},required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"'medium'"}},{name:"source",description:"URL for the image",required:!0,type:{name:"union",elements:[{name:"string"},{name:"IconSource"}]}},{name:"alt",description:"Alt text for the thumbnail image",required:!0,type:{name:"string"}}]};const yf=[e=>({components:{AppProvider:Zo,story:e},template:"<AppProvider><story /></AppProvider>"})],hf={viewMode:"docs",docs:{transformSource:e=>{const t=/<template>(.*)<\/template>/g;return`${e.replace(t,"$1")}`},source:{state:"open"}},controls:{matchers:{color:/(background|color|backgroundColor)$/i,date:/Date$/},sort:"alpha"},options:{showPanel:!0,storySort:{order:["Get Started","Polaris Icons","Component Status","Components",["Actions","Structure","Forms","Images and icons","Feedback indicators","Titles and text","Behavior","Lists and tables","Navigation","Overlays"]]}}};var ff=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:yf,parameters:hf});const gf={},bf="wrapper";function hr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(bf,S(y(y({},gf),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Component Status",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),n("h2",null,"Components List"),n("p",null,"Here are all the Working in Progress components. If you want to contribute, all pull requests are welcome."),n("table",null,n("thead",{parentName:"table"},n("tr",{parentName:"thead"},n("th",{parentName:"tr",align:null},"Component"),n("th",{parentName:"tr",align:null},"Status"),n("th",{parentName:"tr",align:null},"Category"))),n("tbody",{parentName:"table"},n("tr",{parentName:"tbody"},n("td",{parentName:"tr",align:null},"Autocomplete"),n("td",{parentName:"tr",align:null},n("em",{parentName:"td"},"WIP")),n("td",{parentName:"tr",align:null},"Structure")),n("tr",{parentName:"tbody"},n("td",{parentName:"tr",align:null},"Card"),n("td",{parentName:"tr",align:null},n("em",{parentName:"td"},"WIP")),n("td",{parentName:"tr",align:null},"Forms")),n("tr",{parentName:"tbody"},n("td",{parentName:"tr",align:null},"Range Slider"),n("td",{parentName:"tr",align:null},n("em",{parentName:"td"},"WIP")),n("td",{parentName:"tr",align:null},"Forms")))))}hr.isMDXComponent=!0;const fr=()=>{throw new Error("Docs-only story")};fr.parameters={docsOnly:!0};const vt={title:"Component Status",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},vf={};vt.parameters=vt.parameters||{};vt.parameters.docs=S(y({},vt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:vf,mdxComponentAnnotations:vt},n(hr,null))});var xf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:fr,default:vt});const Sf={},Tf="wrapper";function gr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Tf,S(y(y({},Sf),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),n("img",{src:"https://github.com/qikify/polaris-vue/blob/master/public/images/banner.jpg?raw=true",alt:"Shopify Polaris Vue",width:"1000",height:"376"}),n("br",null),n("br",null),n("h1",null,"Get Started"),n("br",null),n("p",null,"Polaris Vue by Qikify is a component library for ",n("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," based on ",n("a",{parentName:"p",href:"https://polaris.shopify.com/"},"Shopify Polaris style guide"),". We try to keep the package light-weight and easy to use (mostly similar with original Polaris Library)."),n("p",null,"Polaris Vue by qikify only supports ",n("strong",{parentName:"p"},"Vue 3.0.0+"),"."),n("p",null,n("strong",{parentName:"p"},"Follow Polaris React version:")," ",n("a",{parentName:"p",href:"https://github.com/Shopify/polaris-react/releases/tag/v9.0.0"},"9.0.0")," - Release date: ",n("em",{parentName:"p"},"Feb 15th, 2022"),"."),n("br",null),n("br",null),n("h2",null,"Installation"),n("p",null,"Using NPM"),n("pre",null,n("code",{parentName:"pre",className:"language-bash"},`npm install @qikify/polaris-vue
`)),n("p",null,"Using Yarn"),n("pre",null,n("code",{parentName:"pre",className:"language-bash"},`yarn add @qikify/polaris-vue
`)),n("br",null),n("h2",null,"Usage"),n("p",null,"Use as a Vue plugin (globally registers all components):"),n("pre",null,n("code",{parentName:"pre",className:"language-js"},`//main.js
import { createApp } from 'vue'
import PolarisVue from '@qikify/polaris-vue' // (\u2713)
import '@qikify/polaris-vue/dist/style.css' // (\u2713) This will be deprecated in the future, right after Vue 3 supports css injections.
import App from './App.vue'

//...
const app = createApp(App)
app.use(PolarisVue) // (\u2713)
...
`)),n("p",null,"OR use individual component (for better bundle size):"),n("pre",null,n("code",{parentName:"pre",className:"language-js"},`import { List, Icon } from '@qikify/polaris-vue';
`)),n("br",null),n("h3",null,n("strong",{parentName:"h3"},"AppProvider")),n("p",null,"The AppProvider component is ",n("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),n("pre",null,n("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  ...
</AppProvider>
</template>

<script><\/script>
`)),n("br",null),n("h2",null,"De-duplicating Vue version"),n("p",null,n("inlineCode",{parentName:"p"},"PolarisVue"),", other packages and your project may require access to the global Vue reference. So sometimes, you may get the runtime error message like:"),n("pre",null,n("code",{parentName:"pre",className:"language-bash"},`TypeError: Cannot read properties of null (reading 'isCE')
renderSlot(...)
...
`)),n("p",null,"To avoid this, simply add ",n("inlineCode",{parentName:"p"},"dedupe: ['vue']")," to your ",n("inlineCode",{parentName:"p"},"vite.config.ts")," file, like below:"),n("pre",null,n("code",{parentName:"pre",className:"language-bash"},`export default defineConfig({
  resolve: {
    ...
    dedupe: ['vue'],
  },
  ...
});
`)),n("br",null),n("h2",null,"Issues & Contributions"),n("p",null,"Polaris Vue by qikify is an open source project and we are very happy to accept community contributions."),n("p",null,"If you notice any bugs, please create issues under ",n("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/issues"},"Issues"),"."),n("br",null),n("br",null),n("h2",null,"License"),n("p",null,"Code released under the  ",n("a",{parentName:"p",href:"https://github.com/qikify/polaris-vue/LICENSE"},"MIT License"),"."),n("p",null,"Copyright (c) 2021 Qikify"))}gr.isMDXComponent=!0;const br=()=>{throw new Error("Docs-only story")};br.parameters={docsOnly:!0};const xt={title:"Get Started",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},Cf={};xt.parameters=xt.parameters||{};xt.parameters.docs=S(y({},xt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Cf,mdxComponentAnnotations:xt},n(gr,null))});var _f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:br,default:xt});const kf={},Pf="wrapper";function vr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Pf,S(y(y({},kf),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),n("h1",null,"Polaris Icons"),n("p",null,"You can use all icons from ",n("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"Shopify Polaris Icons")," Library or any SVG files."),n("p",null,n("inlineCode",{parentName:"p"},"vite-svg-loader")," & ",n("inlineCode",{parentName:"p"},"polaris-icons")," are already included in Polaris Vue package."),n("p",null,"So you don't have to install any additional packages."),n("br",null),n("br",null),n("h2",null,"Setup"),n("p",null,"You have to use ",n("inlineCode",{parentName:"p"},"vite-svg-loader")," in your project. See ",n("a",{parentName:"p",href:"?path=/docs/components-images-and-icons-icon--icon"},"Icon Component")," for more details."),n("p",null,"Config in ",n("inlineCode",{parentName:"p"},"vite.config.ts")," if you are using ",n("inlineCode",{parentName:"p"},"vite")," to compile your project:"),n("pre",null,n("code",{parentName:"pre",className:"language-javascript"},`// vite.config.js
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    ...
    svgLoader(),
  ],
  ...
});
`)),n("h2",null,"Usage"),n("p",null,"Composition API:"),n("pre",null,n("code",{parentName:"pre",className:"language-js"},`// *.vue
<script setup>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';
<\/script>

<template>
  <Icon :source="CirclePlusMinor">
</template>
`)),n("p",null,"Options API:"),n("pre",null,n("code",{parentName:"pre",className:"language-js"},`<script>
import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';

export default {
  data() {
    return {
      iconCirclePlusMinor: CirclePlusMinor,
    };
  },
}
<\/script>

<template>
  <Icon :source="iconCirclePlusMinor">
</template>
`)))}vr.isMDXComponent=!0;const xr=()=>{throw new Error("Docs-only story")};xr.parameters={docsOnly:!0};const St={title:"Polaris Icons",parameters:{viewMode:"docs",isToolshown:!1,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},Af={};St.parameters=St.parameters||{};St.parameters.docs=S(y({},St.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Af,mdxComponentAnnotations:St},n(vr,null))});var wf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:xr,default:St}),fs=Object.freeze,If=Object.defineProperty,Sr=(e,t)=>fs(If(e,"raw",{value:fs(t||e.slice())})),gs,bs;const yn=e=>({components:{ActionList:je},setup(){return{args:e}},template:`<div :style="{width: '200px', background: '#fff'}" data-style="{width: '200px', background: '#fff'}">
    <ActionList v-bind="args"></ActionList>
  </div>`}),so=(e,{argTypes:t})=>({components:{ActionList:je,Button:Se,Popover:Ue,Icon:ue},data(){return{active:!1,iconTickSmallMinor:Os,iconChevronRightMinor:ol,inAPopoverItems:[{content:"Import file",onAction:this.handleImportedAction},{content:"Export file",onAction:this.handleExportedAction}],iconsOrImagesItems:[{content:"Import file",image:"https://user-images.githubusercontent.com/31103446/150456962-80f99435-aa6b-459f-be78-4b89a03417a7.png"},{content:"Export file",icon:Xo}],iconAndSuffixItems:[{active:!0,content:"Import file",icon:pa,suffixId:"import"},{content:"Export file",icon:Xo}],suffixAndPrefixItems:[{content:"Go here",prefixId:"here",suffixId:"here"},{content:"Or there",suffixId:"there"}]}},methods:{toggle(){this.active=!this.active},handleImportedAction(){alert("Imported!")},handleExportedAction(){alert("Exported!")}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center'}">
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
  </div>`});so.storyName="Items";so.parameters={docs:{source:{code:q(gs||(gs=Sr([`
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
        `])))}}};const ro=(e,{argTypes:t})=>({components:{ActionList:je,Button:Se,Popover:Ue,Icon:ue},data(){return{sections:[{title:"File options",items:[{content:"Import file",icon:pa},{content:"Export file",icon:Xo}]},{title:"Bulk actions",items:[{content:"Edit",icon:nl},{content:"Delete",icon:es}]}],destructiveItemSections:[{title:"File options",items:[{active:!0,content:"Import file",icon:pa},{content:"Export file",icon:Xo},{destructive:!0,content:"Delete file",icon:es}]}],helpTextSections:[{items:[{content:"Blog posts",helpText:"Manage your blog articles"},{content:"Blogs",helpText:"Manage blogs published to your Online Store"}]}]}},template:` <div :style="{display: 'flex', flexDirection: 'row', gap: '120px', justifyContent: 'center'}">
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
  </div>`});ro.storyName="Sections";ro.parameters={docs:{source:{code:q(bs||(bs=Sr([`
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
        `])))}}};const Df={Template:yn,itemExamples:so,sectionExamples:ro},Lf="wrapper";function Tr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Lf,S(y(y({},Df),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Actions / ActionList",component:je,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),n("h1",null,"ActionList"),n("p",null,"Action lists render a list of actions or selectable options. This component is usually placed inside a popover container to create a dropdown menu or to let merchants select from a list of options."),n("p",null,"For Icon usages, use the ",n("a",{parentName:"p",href:"/docs/components-images-and-icons-icon--icon"},"Icon component.")),n("br",null),n("br",null),n("h3",null,"Items"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:so,height:"250px",inline:!1,name:"_itemExamples_",mdxType:"Story"})),n("h3",null,"Sections"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:ro,height:"300px",inline:!1,name:"_sectionExamples_",mdxType:"Story"})),n("h3",null,"ActionList"),n(j,{mdxType:"Canvas"},n(U,{name:"ActionList",height:"40px",args:{default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}},parameters:{docs:{source:{code:q`
            <ActionList v-bind="props"></ActionList>
          `}}},mdxType:"Story"},yn.bind({}))),n(oe,{story:"ActionList",mdxType:"ArgsTable"}))}Tr.isMDXComponent=!0;const Bf=so,$f=ro,hn=yn.bind({});hn.storyName="ActionList";hn.args={default:{items:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}]}};hn.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q`
            <ActionList v-bind="props"></ActionList>
          `}}};const Tt={title:"Components / Actions / ActionList",component:je,argTypes:{items:{name:"items",control:{type:"object"},defaultValue:[{content:"Action 1",onAction:()=>alert("Action 1")},{content:"Action 2",onAction:()=>alert("Action 2")}],table:{type:{summary:null}}},actionRole:{control:{type:"select",options:["menuitem"]},table:{type:{summary:null}}},"action-any-item":{name:"action-any-item",description:"Callback when any item is clicked or keypressed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of ActionList by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of ActionList by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_itemExamples_","_sectionExamples_","actionList"]},Mf={_itemExamples_:"_itemExamples_",_sectionExamples_:"_sectionExamples_",ActionList:"actionList"};Tt.parameters=Tt.parameters||{};Tt.parameters.docs=S(y({},Tt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Mf,mdxComponentAnnotations:Tt},n(Tr,null))});var Ef=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:yn,itemExamples:so,sectionExamples:ro,_itemExamples_:Bf,_sectionExamples_:$f,actionList:hn,default:Tt});const Nf={},qf="wrapper";function Cr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(qf,S(y(y({},Nf),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Structure / AppProvider",component:Zo,mdxType:"Meta"}),n("h1",null,"AppProvider"),n("p",null,"App provider is a required component that enables sharing global settings throughout the hierarchy of your application."),n("br",null),n("h2",null,"Best practices"),n("p",null,"The AppProvider component is ",n("inlineCode",{parentName:"p"},"required")," to use PolarisVue. Without it, the components in your application will not function correctly. You must wrap the root (the top) of your application in the app provider component."),n("pre",null,n("code",{parentName:"pre",className:"language-javascript"},`// App.vue
<template>
<AppProvider>
  <div>
  </div>
</AppProvider>
</template>

<script><\/script>
`)))}Cr.isMDXComponent=!0;const _r=()=>{throw new Error("Docs-only story")};_r.parameters={docsOnly:!0};const Ct={title:"Components / Structure / AppProvider",component:Zo,includeStories:["__page"]},Rf={};Ct.parameters=Ct.parameters||{};Ct.parameters.docs=S(y({},Ct.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Rf,mdxComponentAnnotations:Ct},n(Cr,null))});var Ff=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:_r,default:Ct});const fn=(e,{argTypes:t})=>({components:{Avatar:en},setup(){return{args:e}},template:'<Avatar v-bind="args"/>'}),Of={Template:fn},Vf="wrapper";function kr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Vf,S(y(y({},Of),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Images and Icons / Avatar",component:en,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Avatar"),n("p",null,"Avatars are used to show a thumbnail representation of an individual or business in the interface."),n(j,{mdxType:"Canvas"},n(U,{name:"Avatar",height:"60px",parameters:{docs:{source:{code:q`
            <Avatar v-bind="props"/>
          `}}},mdxType:"Story"},fn.bind({}))),n(oe,{story:"Avatar",mdxType:"ArgsTable"}))}kr.isMDXComponent=!0;const Ea=fn.bind({});Ea.storyName="Avatar";Ea.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q`
            <Avatar v-bind="props"/>
          `}}};const _t={title:"Components / Images and Icons / Avatar",component:en,argTypes:{size:{name:"size",description:"Size of Avatar",options:["extraSmall","small","medium","large"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},error:{name:"error",description:"Callback fired when the image fails to load",control:{disable:!0},table:{type:{summary:'"() => void"'}}},default:{table:{disable:!0}}},includeStories:["avatar"]},Hf={Avatar:"avatar"};_t.parameters=_t.parameters||{};_t.parameters.docs=S(y({},_t.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Hf,mdxComponentAnnotations:_t},n(kr,null))});var zf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:fn,avatar:Ea,default:_t});const gn=e=>({components:{Badge:to},setup(){return{args:e}},template:'<Badge v-bind="args">Fulfilled</Badge>'}),io=(e,{argTypes:t})=>({components:{Badge:to},template:q`<div>
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
  </div>`});io.storyName="Variants";io.parameters={docs:{source:{state:"close",code:q`
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
      `}}};const jf={Template:gn,Variants:io},Uf="wrapper";function Pr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Uf,S(y(y({},jf),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Images and icons / Badge",component:to,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Badge"),n("p",null,"Badges are used to inform merchants of the status of an object or of an action that's been taken."),n(j,{mdxType:"Canvas"},n(U,{story:io,height:"65px",name:"_Variants_",mdxType:"Story"})),n(j,{mdxType:"Canvas"},n(U,{name:"Badge",height:"30px",parameters:{docs:{source:{code:q`
          `}}},mdxType:"Story"},gn.bind({}))),n(oe,{story:"Badge",mdxType:"ArgsTable"}))}Pr.isMDXComponent=!0;const Wf=io,Na=gn.bind({});Na.storyName="Badge";Na.parameters={storySource:{source:`args => ({
  components: {
    Badge
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Badge v-bind="args">Fulfilled</Badge>\`
})`},docs:{source:{code:q`
          `}}};const kt={title:"Components / Images and icons / Badge",component:to,argTypes:{status:{control:{type:"select",options:["success","info","critical","warning","new","attention"]},table:{type:{summary:null}}},progress:{options:["incomplete","partiallyComplete","complete"],control:{type:"select"},table:{type:{summary:null}}},size:{options:["small","medium"],control:{type:"select"},table:{type:{summary:null}}},statusAndProgressLabelOverride:{table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Variants_","badge"]},Xf={_Variants_:"_Variants_",Badge:"badge"};kt.parameters=kt.parameters||{};kt.parameters.docs=S(y({},kt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Xf,mdxComponentAnnotations:kt},n(Pr,null))});var Gf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:gn,Variants:io,_Variants_:Wf,badge:Na,default:kt}),vs=Object.freeze,Kf=Object.defineProperty,qa=(e,t)=>vs(Kf(e,"raw",{value:vs(t||e.slice())})),xs,Ss,Ts;const bn=(e,{argTypes:t})=>({components:{Button:Se},setup(){return{args:e}},template:'<Button v-bind="args">Add Product</Button>'}),lo=(e,{argTypes:t})=>({components:{Button:Se},template:` <div style="margin: 0 auto; width: 97%">
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
  </div>`});lo.storyName="Variants";lo.parameters={docs:{source:{code:q`
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
        `}}};const co=(e,{argTypes:t})=>({components:{Button:Se},data(){return{expanded:!1}},computed:{disclosure(){return this.expanded?"up":"down"},disclosureText(){return this.expanded?"Show less":"Show more"}},template:`<div>
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
  </div>`});co.storyName="Disclosure";co.parameters={docs:{source:{code:q(xs||(xs=qa([`
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
        `])))}}};const uo=(e,{argTypes:t})=>({components:{Button:Se},data(){return{connectedDisclosure:{accessibilityLabel:"Other save actions",actions:[{content:"Save as draft"}]}}},template:'<Button :connectedDisclosure="connectedDisclosure" :primary="true"> Save </Button>'});uo.storyName="Split Button";uo.parameters={docs:{source:{code:q(Ss||(Ss=qa([`
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
        `])))}}};const po=(e,{argTypes:t})=>({components:{ButtonGroup:no,Button:Se},data(){return{isFirstButtonActive:!0}},methods:{handleFirstButtonActive(){this.isFirstButtonActive||(this.isFirstButtonActive=!0)},handleSecondButtonActive(){!this.isFirstButtonActive||(this.isFirstButtonActive=!1)}},template:`<ButtonGroup :segmented="true">
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
  </ButtonGroup>`});po.storyName="Pressed Button";po.parameters={docs:{source:{code:q(Ts||(Ts=qa([`
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
        `])))}}};const Yf={Template:bn,Variants:lo,Disclosure:co,SplitButton:uo,PressedButton:po},Jf="wrapper";function Ar(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Jf,S(y(y({},Yf),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Actions / Button",component:Se,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),n("h1",null,"Button"),n("p",null,"Buttons are used primarily for actions, such as \u201CAdd\u201D, \u201CClose\u201D, \u201CCancel\u201D, or \u201CSave\u201D. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as \u201Cview shipping settings\u201D."),n("p",null,"For navigational actions that appear within or directly following a sentence, use the ",n("a",{parentName:"p",href:"/docs/components-navigation-link--link"},"link component.")),n("p",null,"For connectedDisclosure actions, use the ",n("a",{parentName:"p",href:"/docs/components-actions-actionlist--actionlist"},"ActionList component.")),n("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",n("b",null,"button")," element in html."),n("br",null),n("br",null),n("h3",null,"Button Variants"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:lo,height:"280px",name:"_Variants_",mdxType:"Story"})),n("h3",null,"Pressed Button"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:po,height:"60px",name:"_PressedButton_",mdxType:"Story"})),n("h3",null,"Disclosure Button"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:co,height:"140px",name:"_Disclosure_",mdxType:"Story"})),n("h3",null,"Split Button"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:uo,height:"120px",inline:!1,name:"_SplitButton_",mdxType:"Story"})),n("h3",null,"Example"),n(j,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},n(U,{name:"Button",height:"40px",parameters:{docs:{source:{code:q`
            <Button>Add Product</Button>
          `}}},mdxType:"Story"},bn.bind({}))),n(oe,{story:"Button",mdxType:"ArgsTable"}))}Ar.isMDXComponent=!0;const Qf=lo,Zf=po,eg=co,tg=uo,Ra=bn.bind({});Ra.storyName="Button";Ra.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q`
            <Button>Add Product</Button>
          `}}};const Pt={title:"Components / Actions / Button",component:Se,argTypes:{disclosure:{control:{type:"select",options:["down","up","select","boolean"]},table:{type:{summary:null}}},size:{control:{type:"select",options:["slim","medium","large"]},table:{type:{summary:null}}},textAlign:{control:{type:"select",options:["left","right","center"]},table:{type:{summary:null}}},icon:{name:"icon",control:{type:"select",options:["placeholder"],labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},blur:{name:"blur",description:"Callback when focus leaves button",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},click:{name:"click",description:"Callback when clicked",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},focus:{name:"focus",description:"Callback when button becomes focussed",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},keydown:{name:"keydown",description:"Callback when a keydown event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keypress:{name:"keypress",description:"Callback when a keypress event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},keyup:{name:"keyup",description:"Callback when a keyup event is registered on the button",control:{disable:!0},table:{category:"Events",type:{summary:'"(event: KeyboardEvent) => void"'}}},mouseover:{name:"mouseover",description:"Callback when mouse enter",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},touchstart:{name:"touchstart",description:"Callback when element is touched",control:{disable:!0},table:{category:"Events",type:{summary:'"() => void"'}}},prefix:{name:"prefix-{prefixId}",description:"Slot to custom prefix for each item of actions on connectedDisclosure by `prefixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},suffix:{name:"suffix-{suffixId}",description:"Slot to custom suffix for each item of actions on connectedDisclosure by `suffixId`",control:{disable:!0},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:"true"}}},includeStories:["_Variants_","_PressedButton_","_Disclosure_","_SplitButton_","button"]},og={_Variants_:"_Variants_",_PressedButton_:"_PressedButton_",_Disclosure_:"_Disclosure_",_SplitButton_:"_SplitButton_",Button:"button"};Pt.parameters=Pt.parameters||{};Pt.parameters.docs=S(y({},Pt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:og,mdxComponentAnnotations:Pt},n(Ar,null))});var ng=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:bn,Variants:lo,Disclosure:co,SplitButton:uo,PressedButton:po,_Variants_:Qf,_PressedButton_:Zf,_Disclosure_:eg,_SplitButton_:tg,button:Ra,default:Pt});const vn=(e,{argTypes:t})=>({components:{ButtonGroup:no,Button:Se},setup(){return{args:e}},template:`<ButtonGroup v-bind="args">
    <Button> Cancel </Button>
    <Button primary> Save </Button>
  </ButtonGroup>`}),mo=(e,{argTypes:t})=>({components:{ButtonGroup:no,Button:Se},template:`<ButtonGroup segmented>
    <Button> Bold </Button>
    <Button> Italic </Button>
    <Button> Underline </Button>
  </ButtonGroup>`});mo.storyName="With segmented buttons";mo.parameters={docs:{source:{code:q`
        <ButtonGroup segmented>
          <Button> Bold </Button>
          <Button> Italic </Button>
          <Button> Underline </Button>
        </ButtonGroup>
      `}}};const ag={Template:vn,SegmentedButtons:mo},sg="wrapper";function wr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(sg,S(y(y({},ag),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Actions / ButtonGroup",component:no,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"ButtonGroup"),n("p",null,"Button group displays multiple related actions stacked or in a horizontal row to help with arrangement and spacing."),n("br",null),n("h3",null,"With segmented buttons"),n(j,{mdxType:"Canvas"},n(U,{story:mo,height:"65px",name:"_SegmentedButtons_",mdxType:"Story"})),n("h3",null,"Example"),n(j,{mdxType:"Canvas"},n(U,{name:"ButtonGroup",height:"60px",parameters:{docs:{source:{code:q`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}},mdxType:"Story"},vn.bind({}))),n(oe,{story:"ButtonGroup",mdxType:"ArgsTable"}))}wr.isMDXComponent=!0;const rg=mo,Fa=vn.bind({});Fa.storyName="ButtonGroup";Fa.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q`
            <ButtonGroup v-bind="props">
              <Button> Cancel </Button>
              <Button primary> Save </Button>
            </ButtonGroup>
          `}}};const At={title:"Components / Actions / ButtonGroup",component:no,argTypes:{spacing:{name:"spacing",description:"Determines the space between button group items",options:["extraTight","tight","loose"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_SegmentedButtons_","buttonGroup"]},ig={_SegmentedButtons_:"_SegmentedButtons_",ButtonGroup:"buttonGroup"};At.parameters=At.parameters||{};At.parameters.docs=S(y({},At.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:ig,mdxComponentAnnotations:At},n(wr,null))});var lg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:vn,SegmentedButtons:mo,_SegmentedButtons_:rg,buttonGroup:Fa,default:At});const xn=e=>({components:{List:Io,ListItem:Ma,Caption:tn},setup(){return{args:e}},template:`<List>
    <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
    <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
  </List>`}),cg={Template:xn},ug="wrapper";function Ir(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(ug,S(y(y({},cg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Titles and text  / Caption",component:tn,mdxType:"Meta"}),n("h1",null,"Caption"),n("p",null,`Caption text size is smaller than the recommended size for general reading.
On web, it should be used only in a graph or as a timestamp for a list item.
On Android and iOS, it can also be used as help text or as other kinds of secondary text for list items.`),n(j,{mdxType:"Canvas"},n(U,{name:"Caption",height:"100px",parameters:{docs:{source:{code:q`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}},mdxType:"Story"},xn.bind({}))))}Ir.isMDXComponent=!0;const Oa=xn.bind({});Oa.storyName="Caption";Oa.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q`
            <List>
              <ListItem>Order #1001 <Caption>Received April 21, 2017</Caption></ListItem>
              <ListItem>Order #1002 <Caption>Received April 22, 2017</Caption></ListItem>
            </List>
          `}}};const wt={title:"Components / Titles and text  / Caption",component:tn,includeStories:["caption"]},dg={Caption:"caption"};wt.parameters=wt.parameters||{};wt.parameters.docs=S(y({},wt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:dg,mdxComponentAnnotations:wt},n(Ir,null))});var pg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:xn,caption:Oa,default:wt});const Lo=e=>({components:{Checkbox:ao},setup(){return{args:e}},template:`
  <div>
    <Checkbox v-bind="args" v-model="isChecked">
      <template #label>Checkbox label</template>
      <template #help-text>Basic help text</template>
    </Checkbox>
    <p style="margin-top: 30px">Checked: {{ isChecked }} </p>
  </div>`,data(){return{isChecked:!1}}});Lo.parameters={docs:{source:{code:q`
        <div>
          <Checkbox v-model="isChecked">
            <template #label>Checkbox label</template>
            <template #help-text>Basic help text</template>
          </Checkbox>
          <p>Checked: {{ isChecked }} </p>
        </div>
      `}}};const mg={Template:Lo},yg="wrapper";function Dr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(yg,S(y(y({},mg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / Checkbox",component:ao,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Checkbox"),n("p",null,`Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
They may also be used as a way to have merchants indicate they agree to specific terms and services.`),n(j,{mdxType:"Canvas"},n(U,{story:Lo,name:"Checkbox",mdxType:"Story"})),n(oe,{story:"Checkbox",mdxType:"ArgsTable"}))}Dr.isMDXComponent=!0;const Lr=Lo;Lr.storyName="Checkbox";const It={title:"Components / Forms / Checkbox",component:ao,argTypes:{checked:{control:{type:"text"},table:{type:{summary:'string | "indeterminate"'}}},error:{control:{type:"text"},table:{type:{summary:"string | boolean"}}},blur:{description:"Callback when focus is removed",control:{disable:!0},table:{type:{summary:"() => void"}}},change:{description:"Callback when checkbox is toggled",control:{disable:!0},table:{type:{summary:"(event: Event) => void"}}},modelValue:{description:"v-model is available for this component, string type should be used with multiple checkbox",control:{disable:!0},table:{type:{summary:"boolean | string"}}},value:{table:{disable:!0}},focus:{description:"Callback when checkbox is focused",control:{disable:!0},table:{type:{summary:"() => void"}}},"update:modelValue":{table:{disable:!0}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the checkbox",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_Template_"]},hg={Checkbox:"_Template_"};It.parameters=It.parameters||{};It.parameters.docs=S(y({},It.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:hg,mdxComponentAnnotations:It},n(Dr,null))});var fg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Lo,_Template_:Lr,default:It});const Sn=e=>({components:{ChoiceList:We},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}}),Tn=e=>({components:{ChoiceList:We},template:`
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
  `,data(){return{value:"hidden",choices:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}}),Cn=e=>({components:{ChoiceList:We},template:`
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
  `,data(){return{value:["shipping"],choices:[{label:"Use the shipping address as the billing address by default",helpText:"Reduces the number of fields required to check out. The billing address can still be edited.",value:"shipping"},{label:"Require a confirmation step",helpText:"Customers must review their order details before purchasing.",value:"confirmation"}]}}}),_n=(e,{argTypes:t})=>({components:{ChoiceList:We},template:`
  <div>
    <ChoiceList
      name="singleChild"
      v-model="value"
      :choices="choices"
    >
      Company name
    </ChoiceList>
  </div>
  `,data(){return{value:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:"<p>This is child content of Minimum quantity option</p>"}]}}}),kn=(e,{argTypes:t})=>({components:{ChoiceList:We},template:`
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
  `,data(){return{selected:"none",choices:[{label:"None",value:"none"},{label:"Minimum purchase",value:"minimum_purchase"},{label:"Minimum quantity",value:"minimum_quantity",renderChildren:""}]}},methods:{handleChange(){this.choices[2].renderChildren=this.selected==="minimum_quantity"?"<p>This is child content of Minimum quantity option</p>":""}}}),Bo=e=>({components:{ChoiceList:We},setup(){return{args:e}},template:`
  <ChoiceList
    v-bind="args"
    v-model="selected"
    :choices="options"
  >
    Example choice list
  </ChoiceList>
  `,data(){return{selected:"hidden",options:[{label:"Hidden",value:"hidden"},{label:"Optional",value:"optional"},{label:"Required",value:"required"}]}}});Bo.parameters={docs:{source:{code:q`
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
      `}}};const gg={singleChoiceList:Sn,errorSingleChoiceList:Tn,multiChoiceList:Cn,renderChildChoiceList:_n,renderChildWithConditional:kn,Example:Bo},bg="wrapper";function Br(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(bg,S(y(y({},gg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / ChoiceList",component:We,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},"value (choice)":{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Choice list"),n("p",null,`A choice list lets you create a list of grouped radio buttons or checkboxes.
Use this component if you need to group together a related list of interactive choices.`),n("br",null),n("br",null),n("h3",null,"Single choice list"),n("p",null,"Allows merchants to select one option from a list."),n("ul",null,n("li",{parentName:"ul"},"Make sure all options are an either/or choice.")),n(j,{mdxType:"Canvas"},n(U,{story:Sn,name:"Single choice list",mdxType:"Story"})),n("h3",null,"Single choice list with error"),n("p",null,"Allows for accessible error handling by connecting the error message to the field with the error."),n(j,{mdxType:"Canvas"},n(U,{story:Tn,name:"Single choice list with error",mdxType:"Story"})),n("h3",null,"Multi-choice list"),n("p",null,"Allows merchants to select multiple options from a list."),n("ul",null,n("li",{parentName:"ul"},"Avoid options that are an either/or choice.")),n(j,{mdxType:"Canvas"},n(U,{story:Cn,name:"Multi-choice list",mdxType:"Story"})),n("h3",null,"Single-choice or multi-choice list with children content (always rendered)"),n("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content will always be rendered. Works for both single-choice and multi-choice list.`),n(j,{mdxType:"Canvas"},n(U,{story:_n,name:"Single-choice or multi-choice list with children content (always rendered)",mdxType:"Story"})),n("h3",null,"Single-choice or multi-choice list with children content (rendered only when selected)"),n("p",null,`Use when you need merchants to view and/or interact with additional content under a choice.
The content is only rendered when the choice is selected. Works for both single-choice and multi-choice list.`),n(j,{mdxType:"Canvas"},n(U,{story:kn,name:"Single-choice or multi-choice list with children content (rendered only when selected)",mdxType:"Story"})),n("h3",null,"Example"),n(j,{mdxType:"Canvas"},n(U,{story:Bo,name:"Example",height:"160px",mdxType:"Story"})),n(oe,{story:"Example",mdxType:"ArgsTable"}))}Br.isMDXComponent=!0;const $r=Sn;$r.storyName="Single choice list";const Mr=Tn;Mr.storyName="Single choice list with error";const Er=Cn;Er.storyName="Multi-choice list";const Nr=_n;Nr.storyName="Single-choice or multi-choice list with children content (always rendered)";const qr=kn;qr.storyName="Single-choice or multi-choice list with children content (rendered only when selected)";const Rr=Bo;Rr.storyName="Example";const Dt={title:"Components / Forms / ChoiceList",component:We,argTypes:{choices:{control:{disable:!0},table:{type:{summary:"Choices[]"}}},error:{control:{type:"text"},table:{type:{summary:"string"}}},modelValue:{control:{disable:!0},table:{type:{summary:"string | array"}}},change:{description:"Callback when choice is toggled (this will emit input event)",control:{disable:!0},table:{category:"events",type:{summary:'"(event) => void"'}}},focus:{description:"Callback when checkbox is focussed",table:{category:"events",type:{summary:'"() => void"'}}},blur:{description:"Callback when focus is remove",table:{category:"events",type:{summary:'"() => void"'}}},"default slot":{description:"Label for list of choices",control:{disable:!0},table:{category:"slots"}},"value (choice)":{description:"Value of the choice",table:{category:"choice props",type:{summary:"string"}}},label:{description:"Label for the choice",table:{category:"choice props",type:{summary:"string"}}},disabled:{control:{disable:!0},description:"Disable choice",table:{category:"choice props",type:{summary:"boolean"}}},label:{description:" Additional text to aide in use",table:{category:"choice props",type:{summary:"string"}}},describedByErrorField:{description:"Indicates that the choice is aria-describedBy the error message",table:{category:"choice props",type:{summary:"boolean"}}},renderChildren:{description:"children rendered within each choice",table:{category:"choice props",type:{summary:"string | component | html element"}}},default:{table:{disable:!0}}},includeStories:["_singleChoiceList_","_errorSingleChoiceList_","_multiChoiceList_","_renderChildChoiceList_","_renderChildWithConditional_","_Example_"]},vg={"Single choice list":"_singleChoiceList_","Single choice list with error":"_errorSingleChoiceList_","Multi-choice list":"_multiChoiceList_","Single-choice or multi-choice list with children content (always rendered)":"_renderChildChoiceList_","Single-choice or multi-choice list with children content (rendered only when selected)":"_renderChildWithConditional_",Example:"_Example_"};Dt.parameters=Dt.parameters||{};Dt.parameters.docs=S(y({},Dt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:vg,mdxComponentAnnotations:Dt},n(Br,null))});var xg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",singleChoiceList:Sn,errorSingleChoiceList:Tn,multiChoiceList:Cn,renderChildChoiceList:_n,renderChildWithConditional:kn,Example:Bo,_singleChoiceList_:$r,_errorSingleChoiceList_:Mr,_multiChoiceList_:Er,_renderChildChoiceList_:Nr,_renderChildWithConditional_:qr,_Example_:Rr,default:Dt});const Pn=e=>({components:{ColorPicker:nn},setup(){return{color:L("#000000"),args:e}},template:q`
  <ColorPicker v-bind="args" v-model="color" /><br/>
  <strong>Output:</strong> <span>{{ color }}</span>`}),Sg={Template:Pn},Tg="wrapper";function Fr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Tg,S(y(y({},Sg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / Color Picker",component:nn,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{type:{summary:null,default:"hsb"}}}},mdxType:"Meta"}),n("h1",null,"Color picker"),n("p",null,`The color picker is used to let merchants select a color visually.
For example, merchants use the color picker to customize the accent color of the email templates for their shop.`),n(j,{mdxType:"Canvas"},n(U,{name:"Color Picker",height:"210px",parameters:{docs:{source:{code:q`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}},mdxType:"Story"},Pn.bind({}))),n(oe,{story:"Color Picker",mdxType:"ArgsTable"}))}Fr.isMDXComponent=!0;const Va=Pn.bind({});Va.storyName="Color Picker";Va.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q`
            <ColorPicker v-bind="args" @change="setColor" v-model="color" />\n
            setup() {
              const color = ref('#000000');
              const setColor = (newColor) => {
                console.log(newColor);
              };
              return { color, setColor };
            },
          `}}};const Lt={title:"Components / Forms / Color Picker",component:nn,argTypes:{change:{description:"Callback when the color is changed. Return selected color.",control:!1},modelValue:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},outputType:{options:["hex","rgb","hsb"],control:{type:"select"},table:{type:{summary:null,default:"hsb"}}}},includeStories:["colorPicker"]},Cg={"Color Picker":"colorPicker"};Lt.parameters=Lt.parameters||{};Lt.parameters.docs=S(y({},Lt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Cg,mdxComponentAnnotations:Lt},n(Fr,null))});var _g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Pn,colorPicker:Va,default:Lt});const An=e=>({components:{DatePicker:an},setup(){const t=L(e.selectedDate),o=zo({month:e.month,year:e.year});return{args:e,selectedDate:t,pickerView:o,handleChange:i=>{console.log(i)},handleMonthChange:({month:i,year:c})=>{o.month=i,o.year=c}}},template:q`<div>
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
  </div>`}),kg={Template:An},Pg="wrapper";function Or(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Pg,S(y(y({},kg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / Date Picker",component:an,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},mdxType:"Meta"}),n("h1",null,"Date picker"),n("p",null,"Date pickers let merchants choose dates from a visual calendar that's consistently applied wherever dates need to be selected across Shopify."),n(j,{mdxType:"Canvas"},n(U,{name:"Date Picker",height:"320px",args:{selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0},parameters:{docs:{source:{code:q`
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
          `}}},mdxType:"Story"},An.bind({}))),n(oe,{story:"Date Picker",mdxType:"ArgsTable"}))}Or.isMDXComponent=!0;const wn=An.bind({});wn.storyName="Date Picker";wn.args={selectedDate:{start:new Date("2022/01/16"),end:new Date("2022/01/19")},month:0,year:2022,allowRange:!0};wn.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q`
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
          `}}};const Bt={title:"Components / Forms / Date Picker",component:an,argTypes:{disableDatesAfter:{control:{type:"date"}},disableDatesBefore:{control:{type:"date"}},change:{description:"Callback when date is selected",table:{type:{summary:"date"}},control:{disable:!0}},selectedDate:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},modelValue:{table:{disable:!0}},"month-change":{description:"Callback when month is changed",control:{disable:!0},table:{type:{summary:"{month, year}"}}}},includeStories:["datePicker"]},Ag={"Date Picker":"datePicker"};Bt.parameters=Bt.parameters||{};Bt.parameters.docs=S(y({},Bt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Ag,mdxComponentAnnotations:Bt},n(Or,null))});var wg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:An,datePicker:wn,default:Bt});const In=e=>({components:{DisplayText:sn},setup(){return{args:e}},template:'<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>'}),Ig={Template:In},Dg="wrapper";function Vr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Dg,S(y(y({},Ig),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Titles and text  / Display text",component:sn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},mdxType:"Meta"}),n("h1",null,"Display Text"),n("p",null,`Display styles make a bold visual statement.
Use them to create impact when the main goal is visual storytelling.
For example, use display text to convince or reassure merchants such as in marketing content or to capture attention during onboarding.`),n(j,{mdxType:"Canvas"},n(U,{name:"Display text",height:"60px",args:{element:"p"},parameters:{docs:{source:{code:q`<DisplayText>Good evening, Dominic.</DisplayText>`}}},mdxType:"Story"},In.bind({}))),n(oe,{story:"Display text",mdxType:"ArgsTable"}))}Vr.isMDXComponent=!0;const Dn=In.bind({});Dn.storyName="Display text";Dn.args={element:"p"};Dn.parameters={storySource:{source:`args => ({
  components: {
    DisplayText
  },

  setup() {
    return {
      args
    };
  },

  template: \`<DisplayText v-bind="args">Good evening, Dominic.</DisplayText>\`
})`},docs:{source:{code:q`<DisplayText>Good evening, Dominic.</DisplayText>`}}};const $t={title:"Components / Titles and text  / Display text",component:sn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}},size:{options:["small","medium","large","extraLarge"],control:{type:"select"},table:{type:{summary:null,default:"medium"}}}},includeStories:["displayText"]},Lg={"Display text":"displayText"};$t.parameters=$t.parameters||{};$t.parameters.docs=S(y({},$t.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Lg,mdxComponentAnnotations:$t},n(Vr,null))});var Bg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:In,displayText:Dn,default:$t}),Cs=Object.freeze,$g=Object.defineProperty,Hr=(e,t)=>Cs($g(e,"raw",{value:Cs(t||e.slice())})),_s,ks;const Ln=e=>({components:{NoteMinor:ts,ExceptionList:sr,ExceptionListItem:rn},setup(){return{args:e,NoteMinor:ts,DiscountsMajor:al}},template:`<ExceptionList>
    <ExceptionListItem :icon="NoteMinor">This customer is awesome. Make sure to treat them right!</ExceptionListItem>
    <ExceptionListItem title="Required" status="critical">This order need to be fulfilled ASAP.</ExceptionListItem>
    <ExceptionListItem title="Warning" status="warning" :icon="DiscountsMajor">This order was applied discount code.</ExceptionListItem>
    <ExceptionListItem v-bind="args">Example Exception List Item</ExceptionListItem>
  </ExceptionList>`}),Mg={Template:Ln},Eg="wrapper";function zr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Eg,S(y(y({},Mg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Lists and tables / Exception List",component:rn,argTypes:{default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Exception List"),n("p",null,"Use exception lists to help merchants notice important, standout information that adds extra context to a task. Exception lists often consist of a title and description. Each item in the list either has a bullet or icon at the front."),n(j,{mdxType:"Canvas"},n(U,{name:"Exception List",height:"120px",parameters:{docs:{source:{code:q(_s||(_s=Hr([`
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
          `])))}}},mdxType:"Story"},Ln.bind({}))),n(oe,{story:"Exception List",mdxType:"ArgsTable"}))}zr.isMDXComponent=!0;const Ha=Ln.bind({});Ha.storyName="Exception List";Ha.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q(ks||(ks=Hr([`
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
          `])))}}};const Mt={title:"Components / Lists and tables / Exception List",component:rn,argTypes:{default:{table:{disable:!0}}},includeStories:["exceptionList"]},Ng={"Exception List":"exceptionList"};Mt.parameters=Mt.parameters||{};Mt.parameters.docs=S(y({},Mt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Ng,mdxComponentAnnotations:Mt},n(zr,null))});var qg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Ln,exceptionList:Ha,default:Mt});const Bn=(e,{argTypes:t})=>({props:Object.keys(t),components:{FooterHelp:ln},template:`
  <FooterHelp>
    <p>Footer help content</p>
  </FooterHelp>`}),Rg={Template:Bn},Fg="wrapper";function jr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Fg,S(y(y({},Rg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Navigation / Footer help",component:ln,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},mdxType:"Meta"}),n("h1",null,"Footer help"),n("p",null,"Footer help is used to refer merchants to more information related to the product or feature they're using."),n(j,{mdxType:"Canvas"},n(U,{name:"Footer help",parameters:{docs:{source:{code:q`
            <FooterHelp>Footer help content</FooterHelp>
          `}}},mdxType:"Story"},Bn.bind({}))),n(oe,{story:"Footer help",mdxType:"ArgsTable"}))}jr.isMDXComponent=!0;const za=Bn.bind({});za.storyName="Footer help";za.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q`
            <FooterHelp>Footer help content</FooterHelp>
          `}}};const Et={title:"Components / Navigation / Footer help",component:ln,argTypes:{default:{table:{disable:!0}},content:{name:"content",description:"The content to display inside FooterHelp",table:{type:{summary:"slot"}}}},includeStories:["footerHelp"]},Og={"Footer help":"footerHelp"};Et.parameters=Et.parameters||{};Et.parameters.docs=S(y({},Et.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Og,mdxComponentAnnotations:Et},n(jr,null))});var Vg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Bn,footerHelp:za,default:Et});const $n=(e,{argTypes:t})=>({props:Object.keys(t),components:{Heading:Ao},template:`
    <Heading v-bind="$props">
      Online store dashboard
    </Heading>
  `}),Hg={Template:$n},zg="wrapper";function Ur(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(zg,S(y(y({},Hg),t),{components:e,mdxType:"MDXLayout"}),n("h1",null,"Heading"),n("p",null,`Headings are used as the titles of each major section of a page in the interface.
For example, card components generally use headings as their title.`),n(J,{title:"Components / Titles and text / Heading",component:Ao,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},mdxType:"Meta"}),n(j,{mdxType:"Canvas"},n(U,{story:$n,name:"Heading",height:"50px",mdxType:"Story"})),n(oe,{story:"Heading",mdxType:"ArgsTable"}))}Ur.isMDXComponent=!0;const Wr=$n;Wr.storyName="Heading";const Nt={title:"Components / Titles and text / Heading",component:Ao,argTypes:{element:{control:{type:"select",options:["h1","h2","h3","h4","h5","h6","p"]},table:{type:{summary:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'"}}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},jg={Heading:"_Template_"};Nt.parameters=Nt.parameters||{};Nt.parameters.docs=S(y({},Nt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:jg,mdxComponentAnnotations:Nt},n(Ur,null))});var Ug=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:$n,_Template_:Wr,default:Nt}),Ps=Object.freeze,Wg=Object.defineProperty,Xg=(e,t)=>Ps(Wg(e,"raw",{value:Ps(t||e.slice())})),As;const Mn=(e,{argTypes:t})=>({props:Object.keys(t),components:{Icon:ue},computed:{iconSource(){return e.source==="CirclePlusMinor"?Hs:e.source==="BehaviorMajor"?sl:e.source}},template:`<Icon :source="iconSource" v-bind="$props" icon-name="${e.source||"CirclePlusMinor"}" />`}),Gg={Template:Mn},Kg="wrapper";function Xr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Kg,S(y(y({},Gg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Images and icons / Icon",component:ue,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",defaultValue:"CirclePlusMinor",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Icon"),n("p",null,`Icons are used to visually communicate core parts of the product and available actions.
They can act as wayfinding tools to help merchants more easily understand where they are in the product,
and common interaction patterns that are available.`),n("p",null,n("strong",{parentName:"p"},"How to use:")),n("p",null,"To use icons, you need to import svg icon as Vue component by ",n("inlineCode",{parentName:"p"},"vue-svg-loader")," then bind it to ",n("inlineCode",{parentName:"p"},"data"),".",n("br",null),`
`,n("em",{parentName:"p"},"WHY we do that?")," To reduce the size (a lot) of the bundle."),n("p",null,"You can find icon list from ",n("strong",{parentName:"p"},"Shopify Icon Library"),": ",n("a",{parentName:"p",href:"https://polaris-icons.shopify.com/"},"here"),"."),n("p",null,"See example:"),n(rl,{language:"javascript",code:q(As||(As=Xg([`
  <template>
    <Icon :source="iconCirclePlusMinor" />
  </template>

  <script>
  // Change \`CirclePlusMinor\` to icon name from Shopify Icon Library
  import CirclePlusMinor from '!vue-svg-loader!@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';

  // OR if you config \`vue-svg-loader\` in vue.config.js
  // import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';

  export default {
    data() {
      return {
        iconCirclePlusMinor: CirclePlusMinor,
      };
    },
  };
  <\/script>
  `],[`
  <template>
    <Icon :source="iconCirclePlusMinor" />
  </template>\\n
  <script>
  \\/\\/ Change \\\`CirclePlusMinor\\\` to icon name from Shopify Icon Library
  import CirclePlusMinor from '!vue-svg-loader!@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';\\n
  \\/\\/ OR if you config \\\`vue-svg-loader\\\` in vue.config.js
  \\/\\/ import CirclePlusMinor from '@shopify/polaris-icons/dist/svg/CirclePlusMinor.svg';\\n
  export default {
    data() {
      return {
        iconCirclePlusMinor: CirclePlusMinor,
      };
    },
  };
  <\/script>
  `]))),mdxType:"Source"}),n("h3",null,n("strong",{parentName:"h3"},"Demo & Properties")),n(j,{mdxType:"Canvas"},n(U,{name:"Icon",height:"30px",parameters:{docs:{transformSource:r=>{const i=r.match(/icon-name="(.*?)"/)[1],c=r.replace(/<template>/,"").replace(/<\/template>/,"").replace(/icon-name=".*?"/,"").replace(/source='(.*)'/,`source="icon${i}"`);return i==="placeholder"?c:q`
          import ${i} from '@shopify/polaris-icons/dist/svg/${i}.svg';\n
            data() {
              return {
                icon${i}: ${i},
              };
            },
          ${c}
          `}}},mdxType:"Story"},Mn.bind({}))),n(oe,{story:"Icon",mdxType:"ArgsTable"}))}Xr.isMDXComponent=!0;const ja=Mn.bind({});ja.storyName="Icon";ja.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    Icon
  },
  computed: {
    iconSource() {
      if (args.source === 'CirclePlusMinor') {
        return CirclePlusMinor;
      }

      if (args.source === 'BehaviorMajor') {
        return BehaviorMajor;
      }

      return args.source;
    }

  },
  template: \`<Icon :source="iconSource" v-bind="$props" icon-name="\${args.source || 'CirclePlusMinor'}" />\`
})`},docs:{transformSource:e=>{const t=e.match(/icon-name="(.*?)"/)[1],o=e.replace(/<template>/,"").replace(/<\/template>/,"").replace(/icon-name=".*?"/,"").replace(/source='(.*)'/,`source="icon${t}"`);return t==="placeholder"?o:q`
          import ${t} from '@shopify/polaris-icons/dist/svg/${t}.svg';\n
            data() {
              return {
                icon${t}: ${t},
              };
            },
          ${o}
          `}}};const qt={title:"Components / Images and icons / Icon",component:ue,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},backdrop:{table:{type:{summary:null}}},source:{name:"source",defaultValue:"CirclePlusMinor",options:["CirclePlusMinor","BehaviorMajor","placeholder"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:'SVG Component | "placeholder" | svg html string'}}},color:{name:"color",options:[null,"base","subdued","critical","interactive","warning","highlight","success","primary"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["icon"]},Yg={Icon:"icon"};qt.parameters=qt.parameters||{};qt.parameters.docs=S(y({},qt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Yg,mdxComponentAnnotations:qt},n(Xr,null))});var Jg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Mn,icon:ja,default:qt});const En=(e,{argTypes:t})=>({props:Object.keys(t),components:{InlineError:ut},template:'<InlineError v-bind="$props"/>'}),Qg={Template:En},Zg="wrapper";function Gr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Zg,S(y(y({},Qg),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / InlineError",component:ut,argTypes:{message:{control:{type:"text"},table:{type:{summary:"String | Vue Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Inline error"),n("p",null,`Inline errors are brief, in-context messages that tell merchants something went wrong with a single or group of inputs in a form
Use inline errors to help merchants understand why a form input may not be valid and how to fix it.`),n(j,{mdxType:"Canvas"},n(U,{name:"InlineError",args:{message:"Store name is required",fieldID:"myFieldID"},parameters:{docs:{transformSource:r=>r.replace(/<template>/,"").replace(/<\/template>/,"")}},mdxType:"Story"},En.bind({}))),n(oe,{story:"InlineError",mdxType:"ArgsTable"}))}Gr.isMDXComponent=!0;const Nn=En.bind({});Nn.storyName="InlineError";Nn.args={message:"Store name is required",fieldID:"myFieldID"};Nn.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    InlineError
  },
  template: \`<InlineError v-bind="$props"/>\`
})`},docs:{transformSource:e=>e.replace(/<template>/,"").replace(/<\/template>/,"")}};const Rt={title:"Components / Forms / InlineError",component:ut,argTypes:{message:{control:{type:"text"},table:{type:{summary:"String | Vue Component"}}},default:{table:{disable:!0}}},includeStories:["inlineError"]},eb={InlineError:"inlineError"};Rt.parameters=Rt.parameters||{};Rt.parameters.docs=S(y({},Rt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:eb,mdxComponentAnnotations:Rt},n(Gr,null))});var tb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:En,inlineError:Nn,default:Rt});const qn=e=>({components:{KeyboardKey:cn},setup(){return{args:e}},template:"<KeyboardKey>{{ args.default }}</KeyboardKey>"}),ob={Template:qn},nb="wrapper";function Kr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(nb,S(y(y({},ob),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Images and icons / Keyboard Key",component:cn,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),n("h1",null,"Keyboard Key"),n("p",null,"Keyboard key is used to educate merchants about keyboard shortcuts."),n(j,{mdxType:"Canvas"},n(U,{name:"Keyboard Key",height:"50px",args:{default:"Ctrl"},parameters:{docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}},mdxType:"Story"},qn.bind({}))),n(oe,{story:"Keyboard Key",mdxType:"ArgsTable"}))}Kr.isMDXComponent=!0;const Rn=qn.bind({});Rn.storyName="Keyboard Key";Rn.args={default:"Ctrl"};Rn.parameters={storySource:{source:`args => ({
  components: {
    KeyboardKey
  },

  setup() {
    return {
      args
    };
  },

  template: '<KeyboardKey>{{ args.default }}</KeyboardKey>'
})`},docs:{source:{code:"<KeyboardKey>ctrl</KeyboardKey>"}}};const Ft={title:"Components / Images and icons / Keyboard Key",component:cn,argTypes:{default:{name:"default",description:"The content to display inside the key",control:{type:"text"},table:{category:"Slots",type:{summary:null}}}},includeStories:["keyboardKey"]},ab={"Keyboard Key":"keyboardKey"};Ft.parameters=Ft.parameters||{};Ft.parameters.docs=S(y({},Ft.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:ab,mdxComponentAnnotations:Ft},n(Kr,null))});var sb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:qn,keyboardKey:Rn,default:Ft});const Fn=e=>({components:{Link:un},setup(){return{args:e}},template:'<Link v-bind="args">Fulfilling orders</Link>'}),rb={Template:Fn},ib="wrapper";function Yr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(ib,S(y(y({},rb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Navigation / Link",component:un,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Link"),n("p",null,"Links take users to another place, and usually appear within or directly following a sentence."),n("p",null,"For actions that aren't related to navigation, use the ",n("a",{parentName:"p",href:"/docs/components-actions-button--button"},"button component.")),n(j,{mdxType:"Canvas"},n(U,{name:"Link",parameters:{docs:{source:{code:q`
            <Link>Fulfilling orders</Link>
          `}}},mdxType:"Story"},Fn.bind({}))),n(oe,{story:"Link",mdxType:"ArgsTable"}))}Yr.isMDXComponent=!0;const Ua=Fn.bind({});Ua.storyName="Link";Ua.parameters={storySource:{source:`args => ({
  components: {
    Link
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Link v-bind="args">Fulfilling orders</Link>\`
})`},docs:{source:{code:q`
            <Link>Fulfilling orders</Link>
          `}}};const Ot={title:"Components / Navigation / Link",component:un,argTypes:{to:{name:"to",description:"Set to for vue-router",control:{type:"text"},table:{type:{summary:"string | object"}}},click:{name:"click",description:"Callback when a link is clicked",control:{disable:!0},table:{type:{summary:"() => void"}}},default:{table:{disable:!0}}},includeStories:["link"]},lb={Link:"link"};Ot.parameters=Ot.parameters||{};Ot.parameters.docs=S(y({},Ot.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:lb,mdxComponentAnnotations:Ot},n(Yr,null))});var cb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Fn,link:Ua,default:Ot});const On=e=>({components:{List:Io,ListItem:Ma},setup(){return{args:e}},template:`<List v-bind="args">
    <ListItem>Yellow shirt</ListItem>
    <ListItem>Red shirt</ListItem>
    <ListItem>Green shirt</ListItem>
  </List>`}),ub={Template:On},db="wrapper";function Jr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(db,S(y(y({},ub),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Lists and tables / List",component:Io,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"List"),n("p",null,"Lists display a set of related text-only content. Each list item begins with a bullet or a number."),n(j,{mdxType:"Canvas"},n(U,{name:"List",height:"80px",parameters:{docs:{source:{code:q`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}},mdxType:"Story"},On.bind({}))),n(oe,{story:"List",mdxType:"ArgsTable"}))}Jr.isMDXComponent=!0;const Wa=On.bind({});Wa.storyName="List";Wa.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q`
            <List type="bullet">
              <ListItem>Yellow shirt</ListItem>
              <ListItem>Red shirt</ListItem>
              <ListItem>Green shirt</ListItem>
            </List>
          `}}};const Vt={title:"Components / Lists and tables / List",component:Io,argTypes:{type:{name:"type",description:"Type of list to display",options:["bullet","number"],control:{type:"select"},table:{type:{default:"bullet",summary:null}}},default:{table:{disable:!0}}},includeStories:["list"]},pb={List:"list"};Vt.parameters=Vt.parameters||{};Vt.parameters.docs=S(y({},Vt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:pb,mdxComponentAnnotations:Vt},n(Jr,null))});var mb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:On,list:Wa,default:Vt}),ws=Object.freeze,yb=Object.defineProperty,Vn=(e,t)=>ws(yb(e,"raw",{value:ws(t||e.slice())})),Is,Ds,Ls,Bs;const Hn=(e,{argTypes:t})=>({components:{ActionList:je,Button:Se,Popover:Ue},data(){return{active:!0,items:[{content:"Import file"},{content:"Export file"}]}},methods:{toggleActive(){this.active=!this.active}},template:`
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
    </Popover>`}),yo=(e,{argTypes:t})=>({components:{ActionList:je,Button:Se,Popover:Ue,Pane:Pa,PopoverSection:Go},data(){return{active:!0,items:[{content:"Online store"},{content:"Facebook"},{content:"Shopify POS"}]}},methods:{toggleActive(){this.active=!this.active}},template:` <div>
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
  </div>`});yo.storyName="With content and actions";yo.parameters={docs:{source:{code:q(Is||(Is=Vn([`
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
        `])))}}};const ho=(e,{argTypes:t})=>({components:{Button:Se,Popover:Ue,FormLayout:ir,TextField:yr,Select:Do},data(){return{active:!0,options:[{label:"Tagged with",value:"Tagged with"}],selectedValue:"Tagged with",tagValue:""}},methods:{toggleActive(){this.active=!this.active},handleTagValueChange(o){this.tagValue=o}},template:` <div>
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
  </div>`});ho.storyName="With form components";ho.parameters={docs:{source:{code:q(Ds||(Ds=Vn([`
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
        `])))}}};const hb={Template:Hn,ContentAndActions:yo,FormComponents:ho},fb="wrapper";function Qr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(fb,S(y(y({},hb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Overlays / Popover",component:Ue,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Popover"),n("p",null,"Popovers are small overlays that open on demand. They let merchants access additional content and actions without cluttering the page."),n("p",null,"For ActionList usages, use the ",n("a",{parentName:"p",href:"/docs/components-actions-actionlist--action-list"},"ActionList component.")),n("font",{color:"red"}," ","Can not test props on this component due to inline Story. Try it on your own project."," "),n("br",null),n("br",null),n("br",null),n("h3",null,"With Content and Actions"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:yo,height:"280px",inline:!1,name:"_ContentAndActions_",mdxType:"Story"})),n("h3",null,"With Form Components"),n(j,{style:{backgroundColor:"#f6f6f7"},withSource:"close",mdxType:"Canvas"},n(U,{story:ho,height:"280px",inline:!1,name:"_FormComponents_",mdxType:"Story"})),n("h3",null,"Example"),n(j,{style:{backgroundColor:"#f6f6f7"},mdxType:"Canvas"},n(U,{name:"Popover",inline:!1,height:"300px",args:{colorScheme:"light"},parameters:{docs:{source:{code:q(Ls||(Ls=Vn([`
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
          `])))}}},mdxType:"Story"},Hn.bind({}))),n(oe,{story:"Popover",mdxType:"ArgsTable"}))}Qr.isMDXComponent=!0;const gb=yo,bb=ho,zn=Hn.bind({});zn.storyName="Popover";zn.args={colorScheme:"light"};zn.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q(Bs||(Bs=Vn([`
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
          `])))}}};const Ht={title:"Components / Overlays / Popover",component:Ue,argTypes:{preferredPosition:{name:"preferredPosition",description:"The preferred direction to open the popover",options:["above","below","mostSpace"],control:{type:"select"},table:{defaultValue:{summary:"below"},type:{summary:null}}},preferredAlignment:{name:"preferredAlignment",description:"The preferred alignment of the popover relative to its activator",options:["left","center","right"],control:{type:"select"},table:{defaultValue:{summary:"center"},type:{summary:null}}},autofocusTarget:{name:"autofocusTarget",description:"The preferred auto focus target defaulting to the popover container",options:["container","none","first-node"],control:{type:"select"},table:{defaultValue:{summary:"container"},type:{summary:null}}},colorScheme:{options:["light","dark"],control:{type:"select"},table:{defaultValue:{summary:"light"},type:{summary:"dark | light"}}},close:{name:"close",description:"Callback when popover is closed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"scrolled-to-bottom":{name:"scrolled-to-bottom",description:"Callback when the bottom of the popover is reached by mouse or keyboard",control:{disable:!0},table:{type:{summary:'"() => void"'}}},activator:{name:"activator",description:"The element to activate the Popover",control:{disable:!0},table:{type:{summary:null}}},content:{name:"content",description:"The content to display inside the popover",control:{disable:!0},table:{type:{summary:null}}},"extra-content":{name:"extra-content",description:"The content to display inside the popover parallel with content slot",control:{disable:!0},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["_ContentAndActions_","_FormComponents_","popover"]},vb={_ContentAndActions_:"_ContentAndActions_",_FormComponents_:"_FormComponents_",Popover:"popover"};Ht.parameters=Ht.parameters||{};Ht.parameters.docs=S(y({},Ht.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:vb,mdxComponentAnnotations:Ht},n(Qr,null))});var xb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Hn,ContentAndActions:yo,FormComponents:ho,_ContentAndActions_:gb,_FormComponents_:bb,popover:zn,default:Ht});const $o=e=>({components:{RadioButton:Po},setup(){return{args:e}},template:`
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
  </div>`,data(){return{demoValue:"disabled"}}});$o.parameters={docs:{source:{code:q`
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
      `}}};const Sb={Template:$o},Tb="wrapper";function Zr(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Tb,S(y(y({},Sb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / RadioButton",component:Po,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Radio button"),n("p",null,"Use radio buttons to present each item in a list of options where merchants must make a single selection."),n(j,{mdxType:"Canvas"},n(U,{story:$o,name:"RadioButton",mdxType:"Story"})),n(oe,{story:"RadioButton",mdxType:"ArgsTable"}))}Zr.isMDXComponent=!0;const ei=$o;ei.storyName="RadioButton";const zt={title:"Components / Forms / RadioButton",component:Po,argTypes:{modelValue:{table:{disable:!0}},blur:{description:"Callback when focus is remove",control:{disable:!0},table:{type:{summary:'"() => void"'}}},change:{description:"Callback when radio button is toggled",control:{disable:!0},table:{type:{summary:'"(event: Event) => void"'}}},focus:{description:"Callback when radio button is focussed",control:{disable:!0},table:{type:{summary:'"() => void"'}}},"help-text":{description:"Additional text to aide in use",control:{disable:!0},table:{type:{summary:null}}},label:{description:"Label for the radio button",control:{disable:!0},table:{type:{summary:null}}},"update:modelValue":{table:{disable:!0}},default:{table:{disable:!0}}},includeStories:["_Template_"]},Cb={RadioButton:"_Template_"};zt.parameters=zt.parameters||{};zt.parameters.docs=S(y({},zt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Cb,mdxComponentAnnotations:zt},n(Zr,null))});var _b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:$o,_Template_:ei,default:zt});const Mo=(e,{argTypes:t})=>({components:{Scrollable:ct},template:`
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
  </Scrollable>`});Mo.parameters={docs:{source:!1}};const Eo=(e,{argTypes:t})=>({components:{Scrollable:ct,ScrollTo:Ca},template:`
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
  </Scrollable>`});Eo.parameters={docs:{source:!1,transformSource:e=>q`
        import { ScrollTo } from '@shopify/polaris';\n
        components: { ScrollTo },\n
        ${e}
      `}};const No=(e,{argTypes:t})=>({props:Object.keys(t),components:{Scrollable:ct},template:`
  <Scrollable :style="{height: '100px'}" v-bind="$props">
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
  </Scrollable>`});No.parameters={docs:{source:!1}};const kb={DefaultScrollable:Mo,ScrollToExample:Eo,Example:No},Pb="wrapper";function ti(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Pb,S(y(y({},kb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Behavior / Scrollable",component:ct,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},mdxType:"Meta"}),n("h1",null,"Scrollable"),n("p",null,`The scrollable component is a container for long form content,
such as terms of service, that allows for scrolling so merchants can expose more text as they read.`),n("br",null),n("br",null),n("h3",null,"Default scrollable container"),n("p",null,`Use when you need to make a region within the page independently scrollable.
It's often used in modals and other panes where it's helpful to provide an extra visual cue that content exists below or above the fold.`),n(j,{mdxType:"Canvas"},n(U,{story:Mo,name:"Default scrollable container",mdxType:"Story"})),n("h3",null,"Scroll to child component"),n("p",null,"Use when you need to programmatically scroll a child component into view in the scrollable container."),n(j,{mdxType:"Canvas"},n(U,{story:Eo,name:"Scroll to child component",mdxType:"Story"})),n("h3",null,"Example"),n(j,{style:{backgroundColor:"#fff"},mdxType:"Canvas"},n(U,{story:No,name:"Example",height:"150px",mdxType:"Story"})),n(oe,{story:"Example",mdxType:"ArgsTable"}))}ti.isMDXComponent=!0;const oi=Mo;oi.storyName="Default scrollable container";const ni=Eo;ni.storyName="Scroll to child component";const ai=No;ai.storyName="Example";const jt={title:"Components / Behavior / Scrollable",component:ct,argTypes:{default:{table:{disable:"true"}},"scrolled-to-bottom":{control:{disable:!0},table:{type:{summary:"() => void"}}},ScrollTo:{description:"Wrap it around content that you want to scroll to",control:{disable:!0},table:{category:"ScrollTo Component",type:{summary:"<ScrollTo> Content </ScrollTo>"}}}},includeStories:["_DefaultScrollable_","_ScrollToExample_","_Example_"]},Ab={"Default scrollable container":"_DefaultScrollable_","Scroll to child component":"_ScrollToExample_",Example:"_Example_"};jt.parameters=jt.parameters||{};jt.parameters.docs=S(y({},jt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Ab,mdxComponentAnnotations:jt},n(ti,null))});var wb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",DefaultScrollable:Mo,ScrollToExample:Eo,Example:No,_DefaultScrollable_:oi,_ScrollToExample_:ni,_Example_:ai,default:jt});const jn=e=>({components:{Select:Do,Icon:ue},setup(){const t=il,o=L("");return{args:e,selectValue:o,iconHintMajor:t}},template:`<Select v-bind="args" v-model="selectValue">
    <template #label>{{ args.label }}</template>
    <template #help-text>{{ args['help-text'] }}</template>
    <template #prefix-hint>
      <Icon :source="iconHintMajor" />
    </template>
  </Select>
  <br/>
  <strong>Value selected:</strong> {{ selectValue }}`}),Ib={Template:jn},Db="wrapper";function si(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Db,S(y(y({},Ib),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / Select",component:Do,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},input:{control:!1,table:{type:{summary:"Return: selected value"}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},mdxType:"Meta"}),n("h1",null,"Select"),n("p",null,"Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface."),n("font",{color:"#FF7900"},"Use component with camel case for prevent conflict with ",n("b",null,"select")," element in html."),n(j,{mdxType:"Canvas"},n(U,{name:"Select",args:{placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"},parameters:{docs:{source:{code:q`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}},mdxType:"Story"},jn.bind({}))),n(oe,{story:"Select",mdxType:"ArgsTable"}))}si.isMDXComponent=!0;const Un=jn.bind({});Un.storyName="Select";Un.args={placeholder:"Select an option",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"},{id:"hint",label:"Option with icon",value:"hint"},{label:"Option disabled",value:"disabled",disabled:!0}],label:"Date Range","help-text":"This is some help text"};Un.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q`<Select placeholder="Select an option" v-model="selectValue" :options="options">
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
          `}}};const Ut={title:"Components / Forms / Select",component:Do,argTypes:{options:{name:"options",control:{type:"object"},table:{type:{summary:null}}},error:{control:{type:"text"},table:{type:{summary:"string | component"}}},value:{table:{disable:!0}},blur:{control:!1,description:"Callback when focus is removed",table:{type:{summary:null}}},focus:{control:!1,description:"Callback when select is focused",table:{type:{summary:null}}},input:{control:!1,table:{type:{summary:"Return: selected value"}}},change:{control:!1,table:{type:{summary:"Return: selected value"}}},"help-text":{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},label:{control:{type:"text"},table:{category:"Slots",type:{summary:null}}},default:{table:{disable:!0}},"update:modelValue":{table:{disable:!0}},prefix:{name:"prefix-{option-id}",description:"Slot to custom prefix for each option by `option-id`",controls:null,table:{category:"Slots",type:{summary:null}}}},includeStories:["select"]},Lb={Select:"select"};Ut.parameters=Ut.parameters||{};Ut.parameters.docs=S(y({},Ut.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Lb,mdxComponentAnnotations:Ut},n(si,null))});var Bb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:jn,select:Un,default:Ut});const Wn=(e,{argTypes:t})=>({components:{Spinner:oo},setup(){return{args:e}},template:'<Spinner v-bind="args"/>'}),$b={Template:Wn},Mb="wrapper";function ri(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Mb,S(y(y({},$b),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Feedback indicators / Spinner",component:oo,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Spinner"),n("p",null,"Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can\u2019t be represented with skeleton loading components, like for data charts."),n(j,{mdxType:"Canvas"},n(U,{name:"Spinner",height:"60px",args:{accessibilityLabel:"Spinner example",size:"large"},parameters:{docs:{source:{code:q`
            <Spinner v-bind="props"/>
          `}}},mdxType:"Story"},Wn.bind({}))),n(oe,{story:"Spinner",mdxType:"ArgsTable"}))}ri.isMDXComponent=!0;const Xn=Wn.bind({});Xn.storyName="Spinner";Xn.args={accessibilityLabel:"Spinner example",size:"large"};Xn.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q`
            <Spinner v-bind="props"/>
          `}}};const Wt={title:"Components / Feedback indicators / Spinner",component:oo,argTypes:{accessibilityLabel:{table:{type:{summary:null}}},hasFocusableParent:{table:{type:{summary:null}}},size:{name:"size",description:"Size of Spinner",options:["large","small"],control:{type:"select"},table:{defaultValue:{summary:"large"},type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["spinner"]},Eb={Spinner:"spinner"};Wt.parameters=Wt.parameters||{};Wt.parameters.docs=S(y({},Wt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Eb,mdxComponentAnnotations:Wt},n(ri,null))});var Nb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Wn,spinner:Xn,default:Wt});const Gn=e=>({components:{Subheading:dn},setup(){return{args:e}},template:'<Subheading v-bind="args">Accounts</Subheading>'}),qb={Template:Gn},Rb="wrapper";function ii(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Rb,S(y(y({},qb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Titles and text  / Subheading",component:dn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Subheading"),n("p",null,"Subheadings are used for the title of any sub-sections in top-level page sections."),n(j,{mdxType:"Canvas"},n(U,{name:"Subheading",height:"30px",args:{element:"h3"},parameters:{docs:{source:{code:q`
            <Subheading>Accounts</Subheading>
          `}}},mdxType:"Story"},Gn.bind({}))),n(oe,{story:"Subheading",mdxType:"ArgsTable"}))}ii.isMDXComponent=!0;const Kn=Gn.bind({});Kn.storyName="Subheading";Kn.args={element:"h3"};Kn.parameters={storySource:{source:`args => ({
  components: {
    Subheading
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Subheading v-bind="args">Accounts</Subheading>\`
})`},docs:{source:{code:q`
            <Subheading>Accounts</Subheading>
          `}}};const Xt={title:"Components / Titles and text  / Subheading",component:dn,argTypes:{element:{control:{type:"text"},table:{type:{summary:"Tag name"}}},default:{table:{disable:!0}}},includeStories:["subheading"]},Fb={Subheading:"subheading"};Xt.parameters=Xt.parameters||{};Xt.parameters.docs=S(y({},Xt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Fb,mdxComponentAnnotations:Xt},n(ii,null))});var Ob=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Gn,subheading:Kn,default:Xt}),$s=Object.freeze,Vb=Object.defineProperty,li=(e,t)=>$s(Vb(e,"raw",{value:$s(t||e.slice())})),Ms,Es;const Yn=e=>({components:{Tag:pn},setup(){return{args:e}},methods:{removeHandle(){alert("Removed")},clickHandle(){alert("Clicked")}},template:`<div>
  <Tag v-bind="args">Wholesale</Tag>&nbsp;
  <Tag @remove="removeHandle">Removable</Tag>&nbsp;
  <Tag @click="clickHandle">Clickable</Tag>&nbsp;
  <Tag url="https://github.com/qikify/polaris-vue">With link</Tag>
  </div>`}),Hb={Template:Yn},zb="wrapper";function ci(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(zb,S(y(y({},Hb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Forms / Tag",component:pn,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Tag"),n("p",null,"Tags represent a set of interactive, merchant-supplied keywords that help label, organize, and categorize objects. Tags can be added or removed from an object by merchants."),n(j,{mdxType:"Canvas"},n(U,{name:"Tag",height:"30px",args:{disabled:!1},parameters:{docs:{source:{code:q(Ms||(Ms=li([`
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
          `])))}}},mdxType:"Story"},Yn.bind({}))),n(oe,{story:"Tag",mdxType:"ArgsTable"}))}ci.isMDXComponent=!0;const Jn=Yn.bind({});Jn.storyName="Tag";Jn.args={disabled:!1};Jn.parameters={storySource:{source:`args => ({
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
})`},docs:{source:{code:q(Es||(Es=li([`
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
          `])))}}};const Gt={title:"Components / Forms / Tag",component:pn,argTypes:{disabled:{table:{type:{summary:null}}},click:{description:"Callback when tag is clicked or keypressed. Renders without remove button or url when set.",control:!1,table:{type:{summary:null}}},remove:{control:!1,description:"Callback when remove button is clicked or keypressed.",table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["tag"]},jb={Tag:"tag"};Gt.parameters=Gt.parameters||{};Gt.parameters.docs=S(y({},Gt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:jb,mdxComponentAnnotations:Gt},n(ci,null))});var Ub=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Yn,tag:Jn,default:Gt});const Qn=(e,{argTypes:t})=>({components:{TextContainer:wo},props:Object.keys(t),template:`
    <TextContainer v-bind="$props">
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
  `}),Wb={Template:Qn},Xb="wrapper";function ui(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Xb,S(y(y({},Wb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Titles and text / Text container",component:wo,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},mdxType:"Meta"}),n("h1",null,"Text container"),n("p",null,"A text container is used to wrap text elements such as paragraphs, headings, and lists to give them vertical spacing."),n(j,{mdxType:"Canvas"},n(U,{story:Qn,name:"Text container",height:"250px",mdxType:"Story"})),n(oe,{story:"Text container",mdxType:"ArgsTable"}))}ui.isMDXComponent=!0;const di=Qn;di.storyName="Text container";const Kt={title:"Components / Titles and text / Text container",component:wo,argTypes:{spacing:{control:{type:"select",options:["loose","tight"]},table:{type:{summary:'"loose" | "tight"'}}},"default slot":{description:"The content to render in the text container.",table:{category:"slots"}},default:{table:{disable:"true"}}},includeStories:["_Template_"]},Gb={"Text container":"_Template_"};Kt.parameters=Kt.parameters||{};Kt.parameters.docs=S(y({},Kt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Gb,mdxComponentAnnotations:Kt},n(ui,null))});var Kb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Qn,_Template_:di,default:Kt});const Zn=(e,{argTypes:t})=>({components:{TextStyle:ko},setup(){return{args:e}},template:'<TextStyle v-bind="args"> Hello </TextStyle>'}),Yb={Template:Zn},Jb="wrapper";function pi(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(Jb,S(y(y({},Yb),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Titles and text / TextStyle",component:ko,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"TextStyle"),n("p",null,"Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text."),n(j,{mdxType:"Canvas"},n(U,{name:"TextStyle",height:"60px",parameters:{docs:{source:{code:q`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}},mdxType:"Story"},Zn.bind({}))),n(oe,{story:"TextStyle",mdxType:"ArgsTable"}))}pi.isMDXComponent=!0;const Xa=Zn.bind({});Xa.storyName="TextStyle";Xa.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q`
            <TextStyle v-bind="props"> Hello </TextStyle>
          `}}};const Yt={title:"Components / Titles and text / TextStyle",component:ko,argTypes:{variation:{name:"variation",description:"Give text additional visual meaning",options:["positive","negative","warning","strong","subdued","code"],control:{type:"select"},table:{type:{summary:null}}},default:{table:{disable:!0}}},includeStories:["textStyle"]},Qb={TextStyle:"textStyle"};Yt.parameters=Yt.parameters||{};Yt.parameters.docs=S(y({},Yt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:Qb,mdxComponentAnnotations:Yt},n(pi,null))});var Zb=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:Zn,textStyle:Xa,default:Yt});const ea=(e,{argTypes:t})=>({components:{Thumbnail:mn},setup(){return{args:e}},computed:{thumbnailSource(){return e.source==="CirclePlusMinor"?Hs:e.source},bindProps(){return{size:e.size,source:this.thumbnailSource,alt:e.alt}}},template:'<Thumbnail v-bind="bindProps" />'}),ev={Template:ea},tv="wrapper";function mi(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(tv,S(y(y({},ev),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Images and Icons / Thumbnail",component:mn,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Thumbnail"),n("p",null,"Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context."),n(j,{mdxType:"Canvas"},n(U,{name:"Thumbnail",height:"60px",args:{alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"},parameters:{docs:{source:{code:q`
            <Thumbnail v-bind="props" />
          `}}},mdxType:"Story"},ea.bind({}))),n(oe,{story:"Thumbnail",mdxType:"ArgsTable"}))}mi.isMDXComponent=!0;const ta=ea.bind({});ta.storyName="Thumbnail";ta.args={alt:"Thumbnail example",size:"medium",source:"https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"};ta.parameters={storySource:{source:`(args, {
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
})`},docs:{source:{code:q`
            <Thumbnail v-bind="props" />
          `}}};const Jt={title:"Components / Images and Icons / Thumbnail",component:mn,argTypes:{size:{name:"size",description:"Size of Thumbnail",options:["large","medium","small"],control:{type:"select"},table:{defaultValue:{summary:"medium"},type:{summary:null}}},source:{name:"source",options:["CirclePlusMinor","https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"],control:{type:"select",labels:{null:"default"}},table:{type:{summary:"image url String | SVG Component"}}},default:{table:{disable:!0}}},includeStories:["thumbnail"]},ov={Thumbnail:"thumbnail"};Jt.parameters=Jt.parameters||{};Jt.parameters.docs=S(y({},Jt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:ov,mdxComponentAnnotations:Jt},n(mi,null))});var nv=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:ea,thumbnail:ta,default:Jt});const oa=(e,{argTypes:t})=>({props:Object.keys(t),components:{VisuallyHidden:Me},template:`<div>
      <VisuallyHidden>
        <span>Hidden content</span>
      </VisuallyHidden>
      <p>Content passed down have been hide</p>
    </div>`}),av={Template:oa},sv="wrapper";function yi(o){var s=o,{components:e}=s,t=K(s,["components"]);return n(sv,S(y(y({},av),t),{components:e,mdxType:"MDXLayout"}),n(J,{title:"Components / Titles and text / VisuallyHidden",component:Me,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},mdxType:"Meta"}),n("h1",null,"Visually hidden"),n("p",null,"Use when an element needs to be available to assistive technology (for example, a screen reader) but otherwise hidden."),n(j,{mdxType:"Canvas"},n(U,{name:"VisuallyHidden",mdxType:"Story"},oa.bind({}))),n(oe,{story:"VisuallyHidden",mdxType:"ArgsTable"}))}yi.isMDXComponent=!0;const Ga=oa.bind({});Ga.storyName="VisuallyHidden";Ga.parameters={storySource:{source:`(args, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  components: {
    VisuallyHidden
  },
  template: \`<div>
      <VisuallyHidden>
        <span>Hidden content</span>
      </VisuallyHidden>
      <p>Content passed down have been hide</p>
    </div>\`
})`}};const Qt={title:"Components / Titles and text / VisuallyHidden",component:Me,argTypes:{content:{name:"content",description:"The content to be hidden visually",table:{type:{summary:"slot"}}},default:{table:{disable:!0}}},includeStories:["visuallyHidden"]},rv={VisuallyHidden:"visuallyHidden"};Qt.parameters=Qt.parameters||{};Qt.parameters.docs=S(y({},Qt.parameters.docs||{}),{page:()=>n(Y,{mdxStoryNameToKey:rv,mdxComponentAnnotations:Qt},n(yi,null))});var iv=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Template:oa,visuallyHidden:Ga,default:Qt});function hi(e){return{"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx":xf,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":_f,"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":wf,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":Ef,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":Ff,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":zf,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":Gf,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":ng,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":lg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":pg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":fg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":xg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":_g,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":wg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":Bg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":qg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":Vg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":Ug,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":Jg,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":tb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":sb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":cb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":mb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":xb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":_b,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":wb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":Bb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":Nb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":Ob,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":Ub,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":Kb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":Zb,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":nv,"/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":iv}[e]}Object.assign(hi,{keys:()=>["/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx"],resolve:e=>({"/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/ComponentStatus.stories.mdx":"./.storybook/stories/ComponentStatus.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/GetStarted.stories.mdx":"./.storybook/stories/GetStarted.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/.storybook/stories/PolarisIcons.stories.mdx":"./.storybook/stories/PolarisIcons.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ActionList/README.stories.mdx":"./src/components/ActionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/AppProvider/README.stories.mdx":"./src/components/AppProvider/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Avatar/README.stories.mdx":"./src/components/Avatar/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Badge/README.stories.mdx":"./src/components/Badge/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Button/README.stories.mdx":"./src/components/Button/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ButtonGroup/README.stories.mdx":"./src/components/ButtonGroup/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Caption/README.stories.mdx":"./src/components/Caption/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Checkbox/README.stories.mdx":"./src/components/Checkbox/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ChoiceList/README.stories.mdx":"./src/components/ChoiceList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ColorPicker/README.stories.mdx":"./src/components/ColorPicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DatePicker/README.stories.mdx":"./src/components/DatePicker/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/DisplayText/README.stories.mdx":"./src/components/DisplayText/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/ExceptionList/README.stories.mdx":"./src/components/ExceptionList/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/FooterHelp/README.stories.mdx":"./src/components/FooterHelp/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Heading/README.stories.mdx":"./src/components/Heading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Icon/README.stories.mdx":"./src/components/Icon/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/InlineError/README.stories.mdx":"./src/components/InlineError/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/KeyboardKey/README.stories.mdx":"./src/components/KeyboardKey/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Link/README.stories.mdx":"./src/components/Link/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/List/README.stories.mdx":"./src/components/List/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Popover/README.stories.mdx":"./src/components/Popover/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/RadioButton/README.stories.mdx":"./src/components/RadioButton/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Scrollable/README.stories.mdx":"./src/components/Scrollable/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Select/README.stories.mdx":"./src/components/Select/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Spinner/README.stories.mdx":"./src/components/Spinner/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Subheading/README.stories.mdx":"./src/components/Subheading/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Tag/README.stories.mdx":"./src/components/Tag/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextContainer/README.stories.mdx":"./src/components/TextContainer/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/TextStyle/README.stories.mdx":"./src/components/TextStyle/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/Thumbnail/README.stories.mdx":"./src/components/Thumbnail/README.stories.mdx","/Users/ser/scatola/jobs/opensources/polaris-vue/src/components/VisuallyHidden/README.stories.mdx":"./src/components/VisuallyHidden/README.stories.mdx"})[e]});function lv(e){e(hi,{hot:!1},!1)}const cv=[ml,yl,hl,fl,gl,bl,vl,xl,Sl,Tl,Cl,_l,ff].filter(Boolean);cv.forEach(e=>{Object.keys(e).forEach(t=>{const o=e[t];switch(t){case"args":case"argTypes":return pl.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(s=>dl(s,!1));case"loaders":return o.forEach(s=>ul(s,!1));case"parameters":return os(y({},o),!1);case"argTypesEnhancers":return o.forEach(s=>cl(s));case"argsEnhancers":return o.forEach(s=>ll(s));case"globals":case"globalTypes":{const s={};return s[t]=o,os(s,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});lv(kl);
//# sourceMappingURL=iframe.3dbff022.js.map
