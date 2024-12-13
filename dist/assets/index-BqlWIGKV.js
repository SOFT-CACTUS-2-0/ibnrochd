import{r as F,g as Sn,b as Cn,c as Nn,R as _e,j as vt}from"./index-CX0wop81.js";const En=(...t)=>{console!=null&&console.warn&&(G(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t))},re={},St=(...t)=>{G(t[0])&&re[t[0]]||(G(t[0])&&(re[t[0]]=new Date),En(...t))},Re=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Ct=(t,e,n)=>{t.loadNamespaces(e,Re(t,n))},oe=(t,e,n,a)=>{if(G(n)&&(n=[n]),t.options.preload&&t.options.preload.indexOf(e)>-1)return Ct(t,n,a);n.forEach(r=>{t.options.ns.indexOf(r)<0&&t.options.ns.push(r)}),t.loadLanguages(e,Re(t,a))},In=(t,e,n={})=>!e.languages||!e.languages.length?(St("i18n.languages were undefined or empty",e.languages),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(a,r)=>{var o;if(((o=n.bindI18n)==null?void 0:o.indexOf("languageChanging"))>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!r(a.isLanguageChangingTo,t))return!1}}),G=t=>typeof t=="string",Tn=t=>typeof t=="object"&&t!==null,Ln=F.createContext();class Mn{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const zn=(t,e)=>{const n=F.useRef();return F.useEffect(()=>{n.current=t},[t,e]),n.current},je=(t,e,n,a)=>t.getFixedT(e,n,a),Fn=(t,e,n,a)=>F.useCallback(je(t,e,n,a),[t,e,n,a]),oo=(t,e={})=>{var N,S,st,X;const{i18n:n}=e,{i18n:a,defaultNS:r}=F.useContext(Ln)||{},o=n||a||Cn();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new Mn),!o){St("You will need to pass in an i18next instance by using initReactI18next");const P=(M,z)=>G(z)?z:Tn(z)&&G(z.defaultValue)?z.defaultValue:Array.isArray(M)?M[M.length-1]:M,L=[P,{},!1];return L.t=P,L.i18n={},L.ready=!1,L}(N=o.options.react)!=null&&N.wait&&St("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...Sn(),...o.options.react,...e},{useSuspense:i,keyPrefix:f}=s;let c=r||((S=o.options)==null?void 0:S.defaultNS);c=G(c)?[c]:c||["translation"],(X=(st=o.reportNamespaces).addUsedNamespaces)==null||X.call(st,c);const u=(o.isInitialized||o.initializedStoreOnce)&&c.every(P=>In(P,o,s)),g=Fn(o,e.lng||null,s.nsMode==="fallback"?c:c[0],f),d=()=>g,v=()=>je(o,e.lng||null,s.nsMode==="fallback"?c:c[0],f),[k,w]=F.useState(d);let h=c.join();e.lng&&(h=`${e.lng}${h}`);const A=zn(h),b=F.useRef(!0);F.useEffect(()=>{const{bindI18n:P,bindI18nStore:L}=s;b.current=!0,!u&&!i&&(e.lng?oe(o,e.lng,c,()=>{b.current&&w(v)}):Ct(o,c,()=>{b.current&&w(v)})),u&&A&&A!==h&&b.current&&w(v);const M=()=>{b.current&&w(v)};return P&&(o==null||o.on(P,M)),L&&(o==null||o.store.on(L,M)),()=>{b.current=!1,o&&(P==null||P.split(" ").forEach(z=>o.off(z,M))),L&&o&&L.split(" ").forEach(z=>o.store.off(z,M))}},[o,h]),F.useEffect(()=>{b.current&&u&&w(d)},[o,f,u]);const x=[k,o,u];if(x.t=k,x.i18n=o,x.ready=u,u||!u&&!i)return x;throw new Promise(P=>{e.lng?oe(o,e.lng,c,()=>P()):Ct(o,c,()=>P())})};/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function _n(t,e,n){return(e=jn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?se(Object(n),!0).forEach(function(a){_n(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Rn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jn(t){var e=Rn(t,"string");return typeof e=="symbol"?e:e+""}const ie=()=>{};let Xt={},De={},Ue=null,We={mark:ie,measure:ie};try{typeof window<"u"&&(Xt=window),typeof document<"u"&&(De=document),typeof MutationObserver<"u"&&(Ue=MutationObserver),typeof performance<"u"&&(We=performance)}catch{}const{userAgent:le=""}=Xt.navigator||{},U=Xt,y=De,ce=Ue,it=We;U.document;const j=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Ye=~le.indexOf("MSIE")||~le.indexOf("Trident/");var Dn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Un=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,He={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ge=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],O="classic",pt="duotone",Yn="sharp",Hn="sharp-duotone",Ve=[O,pt,Yn,Hn],Gn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Vn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$n=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Xn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Bn=["fak","fa-kit","fakd","fa-kit-duotone"],fe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Kn=["kit"],qn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Jn=["fak","fakd"],Qn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ue={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ta=["fak","fa-kit","fakd","fa-kit-duotone"],ea={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},na={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},aa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Nt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ra=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Et=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Zn,...ra],oa=["solid","regular","light","thin","duotone","brands"],$e=[1,2,3,4,5,6,7,8,9,10],sa=$e.concat([11,12,13,14,15,16,17,18,19,20]),ia=[...Object.keys(aa),...oa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY].concat($e.map(t=>"".concat(t,"x"))).concat(sa.map(t=>"w-".concat(t))),la={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const _="___FONT_AWESOME___",It=16,Xe="fa",Be="svg-inline--fa",V="data-fa-i2svg",Tt="data-fa-pseudo-element",ca="data-fa-pseudo-element-pending",Bt="data-prefix",Kt="data-icon",me="fontawesome-i2svg",fa="async",ua=["HTML","HEAD","STYLE","SCRIPT"],Ke=(()=>{try{return!0}catch{return!1}})();function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[O]}})}const qe=l({},He);qe[O]=l(l(l(l({},{"fa-duotone":"duotone"}),He[O]),fe.kit),fe["kit-duotone"]);const ma=rt(qe),Lt=l({},Xn);Lt[O]=l(l(l(l({},{duotone:"fad"}),Lt[O]),ue.kit),ue["kit-duotone"]);const de=rt(Lt),Mt=l({},Nt);Mt[O]=l(l({},Mt[O]),Qn.kit);const qt=rt(Mt),zt=l({},na);zt[O]=l(l({},zt[O]),qn.kit);rt(zt);const da=Dn,Je="fa-layers-text",pa=Un,ga=l({},Gn);rt(ga);const ha=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt=Wn,ba=[...Kn,...ia],tt=U.FontAwesomeConfig||{};function ya(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function va(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=va(ya(n));r!=null&&(tt[a]=r)});const Qe={styleDefault:"solid",familyDefault:O,cssPrefix:Xe,replacementClass:Be,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);const J=l(l({},Qe),tt);J.autoReplaceSvg||(J.observeMutations=!1);const m={};Object.keys(Qe).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){J[t]=e,et.forEach(n=>n(m))},get:function(){return J[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,et.forEach(e=>e(m))},get:function(){return J.cssPrefix}});U.FontAwesomeConfig=m;const et=[];function xa(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}const D=It,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Aa(t){if(!t||!j)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return y.head.insertBefore(e,a),t}const wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nt(){let t=12,e="";for(;t-- >0;)e+=wa[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ze(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ka(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ze(t[n]),'" '),"").trim()}function gt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Oa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(s," ").concat(i)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Pa(t){let{transform:e,width:n=It,height:a=It,startCentered:r=!1}=t,o="";return r&&Ye?o+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):o+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),o+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function tn(){const t=Xe,e=Be,n=m.cssPrefix,a=m.replacementClass;let r=Sa;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let pe=!1;function At(){m.autoAddCss&&!pe&&(Aa(tn()),pe=!0)}var Ca={mixout(){return{dom:{css:tn,insertCss:At}}},hooks(){return{beforeDOMElementCreation(){At()},beforeI2svg(){At()}}}};const R=U||{};R[_]||(R[_]={});R[_].styles||(R[_].styles={});R[_].hooks||(R[_].hooks={});R[_].shims||(R[_].shims=[]);var T=R[_];const en=[],nn=function(){y.removeEventListener("DOMContentLoaded",nn),ut=1,en.map(t=>t())};let ut=!1;j&&(ut=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ut||y.addEventListener("DOMContentLoaded",nn));function Na(t){j&&(ut?setTimeout(t,0):en.push(t))}function ot(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ze(t):"<".concat(e," ").concat(ka(n),">").concat(a.map(ot).join(""),"</").concat(e,">")}function ge(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wt=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,f,c,u;for(a===void 0?(f=1,u=e[o[0]]):(f=0,u=a);f<s;f++)c=o[f],u=i(u,e[c],c,e);return u};function Ea(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ft(t){const e=Ea(t);return e.length===1?e[0].toString(16):null}function Ia(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function he(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function _t(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=he(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,he(e)):T.styles[t]=l(l({},T.styles[t]||{}),r),t==="fas"&&_t("fa",e)}const{styles:at,shims:Ta}=T,an=Object.keys(qt),La=an.reduce((t,e)=>(t[e]=Object.keys(qt[e]),t),{});let Zt=null,rn={},on={},sn={},ln={},cn={};function Ma(t){return~ba.indexOf(t)}function za(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ma(r)?r:null}const fn=()=>{const t=a=>wt(at,(r,o,s)=>(r[s]=wt(o,a,{}),r),{});rn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),on=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),cn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in at||m.autoFetchSvg,n=wt(Ta,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});sn=n.names,ln=n.unicodes,Zt=ht(m.styleDefault,{family:m.familyDefault})};xa(t=>{Zt=ht(t.styleDefault,{family:m.familyDefault})});fn();function te(t,e){return(rn[t]||{})[e]}function Fa(t,e){return(on[t]||{})[e]}function H(t,e){return(cn[t]||{})[e]}function un(t){return sn[t]||{prefix:null,iconName:null}}function _a(t){const e=ln[t],n=te("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return Zt}const mn=()=>({prefix:null,iconName:null,rest:[]});function Ra(t){let e=O;const n=an.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return Ve.forEach(a=>{(t.includes(n[a])||t.some(r=>La[a].includes(r)))&&(e=a)}),e}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=e,a=ma[n][t];if(n===pt&&!t)return"fad";const r=de[n][t]||de[n][a],o=t in T.styles?t:null;return r||o||null}function ja(t){let e=[],n=null;return t.forEach(a=>{const r=za(m.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function be(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Et.concat(ta),o=be(t.filter(g=>r.includes(g))),s=be(t.filter(g=>!Et.includes(g))),i=o.filter(g=>(a=g,!Ge.includes(g))),[f=null]=i,c=Ra(o),u=l(l({},ja(s)),{},{prefix:ht(f,{family:c})});return l(l(l({},u),Ya({values:t,family:c,styles:at,config:m,canonical:u,givenPrefix:a})),Da(n,a,u))}function Da(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?un(r):{},s=H(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!at.far&&at.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ua=Ve.filter(t=>t!==O||t!==pt),Wa=Object.keys(Nt).filter(t=>t!==O).map(t=>Object.keys(Nt[t])).flat();function Ya(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===pt,f=e.includes("fa-duotone")||e.includes("fad"),c=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(f||c||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ua.includes(n)&&(Object.keys(o).find(d=>Wa.includes(d))||s.autoFetchSvg)){const d=$n.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=W()||"fas"),a}class Ha{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),_t(o,r[o]);const s=qt[O][o];s&&_t(s,r[o]),fn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],f=i[2];e[o]||(e[o]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[o][c]=i)}),e[o][s]=i}),e}}let ye=[],B={};const q={},Ga=Object.keys(q);function Va(t,e){let{mixoutsTo:n}=e;return ye=t,B={},Object.keys(q).forEach(a=>{Ga.indexOf(a)===-1&&delete q[a]}),ye.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{B[s]||(B[s]=[]),B[s].push(o[s])})}a.provides&&a.provides(q)}),n}function Rt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(B[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function $(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(B[t]||[]).forEach(o=>{o.apply(null,n)})}function Y(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,e):void 0}function jt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||W();if(e)return e=H(n,e)||e,ge(dn.definitions,n,e)||ge(T.styles,n,e)}const dn=new Ha,$a=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,$("noAuto")},Xa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?($("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Na(()=>{Ka({autoReplaceSvgRoot:e}),$("watch",t)})}},Ba={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ht(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(da))){const e=bt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||W(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=W();return{prefix:e,iconName:H(e,t)||t}}}},C={noAuto:$a,config:m,dom:Xa,parse:Ba,library:dn,findIconDefinition:jt,toHtml:ot},Ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&C.dom.i2svg({node:e})};function yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ot(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function qa(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(Qt(s)&&n.found&&!a.found){const{width:i,height:f}=n,c={x:i/f/2,y:.5};r.style=gt(l(l({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ja(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function ee(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:f,titleId:c,extra:u,watchable:g=!1}=t,{width:d,height:v}=n.found?n:e,k=Jn.includes(a),w=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(S=>u.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(u.classes).join(" ");let h={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(v)})};const A=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/v*16*.0625,"em")}:{};g&&(h.attributes[V]=""),i&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||nt())},children:[i]}),delete h.attributes.title);const b=l(l({},h),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:s,styles:l(l({},A),u.styles)}),{children:x,attributes:N}=n.found&&e.found?Y("generateAbstractMask",b)||{children:[],attributes:{}}:Y("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=x,b.attributes=N,s?Ja(b):qa(b)}function ve(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,f=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(f[V]="");const c=l({},s.styles);Qt(r)&&(c.transform=Pa({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=gt(c);u.length>0&&(f.style=u);const g=[];return g.push({tag:"span",attributes:f,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Qa(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=gt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:kt}=T;function Dt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Za={found:!1,width:512,height:512};function tr(t,e){!Ke&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ut(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=W()),new Promise((a,r)=>{if(n==="fa"){const o=un(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&kt[e]&&kt[e][t]){const o=kt[e][t];return a(Dt(o))}tr(t,e),a(l(l({},Za),{},{icon:m.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}const xe=()=>{},Wt=m.measurePerformance&&it&&it.mark&&it.measure?it:{mark:xe,measure:xe},Z='FA "6.7.1"',er=t=>(Wt.mark("".concat(Z," ").concat(t," begins")),()=>pn(t)),pn=t=>{Wt.mark("".concat(Z," ").concat(t," ends")),Wt.measure("".concat(Z," ").concat(t),"".concat(Z," ").concat(t," begins"),"".concat(Z," ").concat(t," ends"))};var ne={begin:er,end:pn};const ct=()=>{};function Ae(t){return typeof(t.getAttribute?t.getAttribute(V):null)=="string"}function nr(t){const e=t.getAttribute?t.getAttribute(Bt):null,n=t.getAttribute?t.getAttribute(Kt):null;return e&&n}function ar(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function rr(){return m.autoReplaceSvg===!0?ft.replace:ft[m.autoReplaceSvg]||ft.replace}function or(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function sr(t){return y.createElement(t)}function gn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?or:sr}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(gn(o,{ceFn:n}))}),a}function ir(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ft={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(gn(n),e)}),e.getAttribute(V)===null&&m.keepOriginalSource){let n=y.createComment(ir(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Jt(e).indexOf(m.replacementClass))return ft.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===m.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>ot(o)).join(`
`);e.setAttribute(V,""),e.innerHTML=r}};function we(t){t()}function hn(t,e){const n=typeof e=="function"?e:ct;if(t.length===0)n();else{let a=we;m.mutateApproach===fa&&(a=U.requestAnimationFrame||we),a(()=>{const r=rr(),o=ne.begin("mutate");t.map(r),o(),n()})}}let ae=!1;function bn(){ae=!0}function Yt(){ae=!1}let mt=null;function ke(t){if(!ce||!m.observeMutations)return;const{treeCallback:e=ct,nodeCallback:n=ct,pseudoElementsCallback:a=ct,observeMutationsRoot:r=y}=t;mt=new ce(o=>{if(ae)return;const s=W();Q(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Ae(i.addedNodes[0])&&(m.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&m.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&Ae(i.target)&&~ha.indexOf(i.attributeName))if(i.attributeName==="class"&&nr(i.target)){const{prefix:f,iconName:c}=bt(Jt(i.target));i.target.setAttribute(Bt,f||s),c&&i.target.setAttribute(Kt,c)}else ar(i.target)&&n(i.target)})}),j&&mt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function lr(){mt&&mt.disconnect()}function cr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function fr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=bt(Jt(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Fa(r.prefix,t.innerText)||te(r.prefix,Ft(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ur(t){const e=Q(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||nt()):(e["aria-hidden"]="true",e.focusable="false")),e}function mr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=fr(t),o=ur(t),s=Rt("parseNodeAttributes",{},t);let i=e.styleParser?cr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:dr}=T;function yn(t){const e=m.autoReplaceSvg==="nest"?Oe(t,{styleParser:!1}):Oe(t);return~e.extra.classes.indexOf(Je)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}function pr(){return[...Bn,...Et]}function Pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(me,"-").concat(u)),r=u=>n.remove("".concat(me,"-").concat(u)),o=m.autoFetchSvg?pr():Ge.concat(Object.keys(dr));o.includes("fa")||o.push("fa");const s=[".".concat(Je,":not([").concat(V,"])")].concat(o.map(u=>".".concat(u,":not([").concat(V,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=Q(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const f=ne.begin("onTree"),c=i.reduce((u,g)=>{try{const d=yn(g);d&&u.push(d)}catch(d){Ke||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,g)=>{Promise.all(c).then(d=>{hn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(d=>{f(),g(d)})})}function gr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yn(t).then(n=>{n&&hn([n],e)})}function hr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:jt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:jt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const br=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:f=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:g,iconName:d,icon:v}=t;return yt(l({type:"icon"},t),()=>($("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?c["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(i||nt()):(c["aria-hidden"]="true",c.focusable="false")),ee({icons:{main:Dt(v),mask:r?Dt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:l(l({},I),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:c,styles:u,classes:f}})))};var yr={mixout(){return{icon:hr(br)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Pe,t.nodeCallback=gr,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Pe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:f,mask:c,maskId:u,extra:g}=n;return new Promise((d,v)=>{Promise.all([Ut(a,s),c.iconName?Ut(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[w,h]=k;d([e,ee({icons:{main:w,mask:h},prefix:s,iconName:a,transform:i,symbol:f,maskId:u,title:r,titleId:o,extra:g,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=gt(s);i.length>0&&(a.style=i);let f;return Qt(o)&&(f=Y("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},vr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return yt({type:"layer"},()=>{$("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},xr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return yt({type:"counter",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),Qa({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},Ar={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return yt({type:"text",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),ve({content:t,transform:l(l({},I),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(Ye){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,i=c.height/f}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,ve({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const wr=new RegExp('"',"ug"),Se=[1105920,1112319],Ce=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Vn),la),ea),Ht=Object.keys(Ce).reduce((t,e)=>(t[e.toLowerCase()]=Ce[e],t),{}),kr=Object.keys(Ht).reduce((t,e)=>{const n=Ht[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Or(t){const e=t.replace(wr,""),n=Ia(e,0),a=n>=Se[0]&&n<=Se[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ft(r?e[0]:e),isSecondary:a||r}}function Pr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ht[n]||{})[r]||kr[n]}function Ne(t,e){const n="".concat(ca).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Q(t.children).filter(d=>d.getAttribute(Tt)===e)[0],i=U.getComputedStyle(t,e),f=i.getPropertyValue("font-family"),c=f.match(pa),u=i.getPropertyValue("font-weight"),g=i.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&g!=="none"&&g!==""){const d=i.getPropertyValue("content");let v=Pr(f,u);const{value:k,isSecondary:w}=Or(d),h=c[0].startsWith("FontAwesome");let A=te(v,k),b=A;if(h){const x=_a(k);x.iconName&&x.prefix&&(A=x.iconName,v=x.prefix)}if(A&&!w&&(!s||s.getAttribute(Bt)!==v||s.getAttribute(Kt)!==b)){t.setAttribute(n,b),s&&t.removeChild(s);const x=mr(),{extra:N}=x;N.attributes[Tt]=e,Ut(A,v).then(S=>{const st=ee(l(l({},x),{},{icons:{main:S,mask:mn()},prefix:v,iconName:b,extra:N,watchable:!0})),X=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=st.map(P=>ot(P)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Sr(t){return Promise.all([Ne(t,"::before"),Ne(t,"::after")])}function Cr(t){return t.parentNode!==document.head&&!~ua.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ee(t){if(j)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(Cr).map(Sr),r=ne.begin("searchPseudoElements");bn(),Promise.all(a).then(()=>{r(),Yt(),e()}).catch(()=>{r(),Yt(),n()})})}var Nr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ee,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;m.searchPseudoElements&&Ee(n)}}};let Ie=!1;var Er={mixout(){return{dom:{unwatch(){bn(),Ie=!0}}}},hooks(){return{bootstrap(){ke(Rt("mutationObserverCallbacks",{}))},noAuto(){lr()},watch(t){const{observeMutationsRoot:e}=t;Ie?Yt():ke(Rt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Te=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Ir={mixout(){return{parse:{transform:t=>Te(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Te(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(f," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:u,path:g};return{tag:"g",attributes:l({},d.outer),children:[{tag:"g",attributes:l({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),d.path)}]}]}}}};const Ot={x:0,y:0,width:"100%",height:"100%"};function Le(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Tr(t){return t.tag==="g"?t.children:[t]}var Lr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?bt(n.split(" ").map(r=>r.trim())):mn();return a.prefix||(a.prefix=W()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:f,icon:c}=r,{width:u,icon:g}=o,d=Oa({transform:i,containerWidth:u,iconWidth:f}),v={tag:"rect",attributes:l(l({},Ot),{},{fill:"white"})},k=c.children?{children:c.children.map(Le)}:{},w={tag:"g",attributes:l({},d.inner),children:[Le(l({tag:c.tag,attributes:l(l({},c.attributes),d.path)},k))]},h={tag:"g",attributes:l({},d.outer),children:[w]},A="mask-".concat(s||nt()),b="clip-".concat(s||nt()),x={tag:"mask",attributes:l(l({},Ot),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,h]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Tr(g)},x]};return n.push(N,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(A,")")},Ot)}),{children:n,attributes:a}}}},Mr={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},zr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Fr=[Ca,yr,vr,xr,Ar,Nr,Er,Ir,Lr,Mr,zr];Va(Fr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const Gt=C.parse;C.findIconDefinition;C.toHtml;const _r=C.icon;C.layer;C.text;C.counter;var vn={exports:{}},Rr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jr=Rr,Dr=jr;function xn(){}function An(){}An.resetWarningCache=xn;var Ur=function(){function t(a,r,o,s,i,f){if(f!==Dr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:An,resetWarningCache:xn};return n.PropTypes=n,n};vn.exports=Ur();var Wr=vn.exports;const p=Nn(Wr);function Me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Me(Object(n),!0).forEach(function(a){K(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Hr(t,e){if(t==null)return{};var n=Yr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Vt(t){return Gr(t)||Vr(t)||$r(t)||Xr()}function Gr(t){if(Array.isArray(t))return $t(t)}function Vr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $r(t,e){if(t){if(typeof t=="string")return $t(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $t(t,e)}}function $t(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Xr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Br(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,s=t.shake,i=t.flash,f=t.spin,c=t.spinPulse,u=t.spinReverse,g=t.pulse,d=t.fixedWidth,v=t.inverse,k=t.border,w=t.listItem,h=t.flip,A=t.size,b=t.rotation,x=t.pull,N=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":g,"fa-fw":d,"fa-inverse":v,"fa-border":k,"fa-li":w,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},K(e,"fa-".concat(A),typeof A<"u"&&A!==null),K(e,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),K(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),K(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(S){return N[S]?S:null}).filter(function(S){return S})}function Kr(t){return t=t-0,t===t}function wn(t){return Kr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var qr=["style"];function Jr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Qr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=wn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[Jr(r)]=o:e[r]=o,e},{})}function kn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return kn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var u=e.attributes[c];switch(c){case"class":f.attrs.className=u,delete e.attributes.class;break;case"style":f.attrs.style=Qr(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=u:f.attrs[wn(c)]=u}return f},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=Hr(n,qr);return r.attrs.style=E(E({},r.attrs.style),s),t.apply(void 0,[e.tag,E(E({},r.attrs),i)].concat(Vt(a)))}var On=!1;try{On=!0}catch{}function Zr(){if(!On&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ze(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Gt.icon)return Gt.icon(t);if(t===null)return null;if(t&&dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Pt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?K({},t,e):{}}var Fe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Pn=_e.forwardRef(function(t,e){var n=E(E({},Fe),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,f=n.titleId,c=n.maskId,u=ze(a),g=Pt("classes",[].concat(Vt(Br(n)),Vt((s||"").split(" ")))),d=Pt("transform",typeof n.transform=="string"?Gt.transform(n.transform):n.transform),v=Pt("mask",ze(r)),k=_r(u,E(E(E(E({},g),d),v),{},{symbol:o,title:i,titleId:f,maskId:c}));if(!k)return Zr("Could not find icon",u),null;var w=k.abstract,h={ref:e};return Object.keys(n).forEach(function(A){Fe.hasOwnProperty(A)||(h[A]=n[A])}),to(w[0],h)});Pn.displayName="FontAwesomeIcon";Pn.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var to=kn.bind(null,_e.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const eo={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},so=eo,io={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},lo={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},co={prefix:"fas",iconName:"envelope-open",icon:[512,512,[62135],"f2b6","M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"]},fo={prefix:"fas",iconName:"language",icon:[640,512,[],"f1ab","M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"]},uo={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},mo={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},po={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},go={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},ho={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},bo={prefix:"fas",iconName:"fax",icon:[512,512,[128224,128439],"f1ac","M128 64l0 96 64 0 0-96 194.7 0L416 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0L192 0c-35.3 0-64 28.7-64 64zM0 160L0 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm480 32l-352 0 0 288c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},yo={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},vo={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},xo={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},no={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ao=no,wo={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},ko={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Oo={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Po={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]},So={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Co=({isOpen:t,onClose:e,children:n})=>t?vt.jsx("div",{className:"modal-overlay",onClick:e,children:vt.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n,vt.jsx("button",{className:"modal-close",onClick:e,children:"×"})]})}):null;/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ao={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},No=ao;export{Pn as F,Co as M,mo as a,so as b,po as c,uo as d,yo as e,co as f,wo as g,ko as h,xo as i,No as j,So as k,Po as l,Oo as m,lo as n,vo as o,bo as p,go as q,ho as r,fo as s,io as t,oo as u,Ao as v};
