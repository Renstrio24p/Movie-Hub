var Le=Object.create;var Xa=Object.defineProperty;var Te=Object.getOwnPropertyDescriptor;var Re=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,Ae=Object.prototype.hasOwnProperty;var De=(r,o)=>()=>(r&&(o=r(r=0)),o);var Se=(r,o)=>()=>(o||r((o={exports:{}}).exports,o),o.exports);var Ce=(r,o,k,u)=>{if(o&&typeof o=="object"||typeof o=="function")for(let v of Re(o))!Ae.call(r,v)&&v!==k&&Xa(r,v,{get:()=>o[v],enumerable:!(u=Te(o,v))||u.enumerable});return r};var Xe=(r,o,k)=>(k=r!=null?Le(Ee(r)):{},Ce(o||!r||!r.__esModule?Xa(k,"default",{value:r,enumerable:!0}):k,r));var c=De(()=>{});var Na=Se((Zt,Kt)=>{c();(function(r,o){typeof Zt=="object"&&typeof Kt<"u"?Kt.exports=o():typeof define=="function"&&define.amd?define(o):(r=typeof globalThis<"u"?globalThis:r||self,r.DOMPurify=o())})(Zt,function(){"use strict";let{entries:r,setPrototypeOf:o,isFrozen:k,getPrototypeOf:u,getOwnPropertyDescriptor:v}=Object,{freeze:b,seal:L,create:st}=Object,{apply:J,construct:B}=typeof Reflect<"u"&&Reflect;b||(b=function(n){return n}),L||(L=function(n){return n}),J||(J=function(n,l,m){return n.apply(l,m)}),B||(B=function(n,l){return new n(...l)});let z=D(Array.prototype.forEach),G=D(Array.prototype.pop),X=D(Array.prototype.push),mt=D(String.prototype.toLowerCase),ht=D(String.prototype.toString),Pa=D(String.prototype.match),tt=D(String.prototype.replace),Fa=D(String.prototype.indexOf),Ha=D(String.prototype.trim),A=D(RegExp.prototype.test),at=$a(TypeError);function D(f){return function(n){for(var l=arguments.length,m=new Array(l>1?l-1:0),I=1;I<l;I++)m[I-1]=arguments[I];return J(f,n,m)}}function $a(f){return function(){for(var n=arguments.length,l=new Array(n),m=0;m<n;m++)l[m]=arguments[m];return B(f,l)}}function s(f,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:mt;o&&o(f,null);let m=n.length;for(;m--;){let I=n[m];if(typeof I=="string"){let U=l(I);U!==I&&(k(n)||(n[m]=U),I=U)}f[I]=!0}return f}function Ga(f){for(let n=0;n<f.length;n++)v(f,n)===void 0&&(f[n]=null);return f}function P(f){let n=st(null);for(let[l,m]of r(f))v(f,l)!==void 0&&(Array.isArray(m)?n[l]=Ga(m):m&&typeof m=="object"&&m.constructor===Object?n[l]=P(m):n[l]=m);return n}function ft(f,n){for(;f!==null;){let m=v(f,n);if(m){if(m.get)return D(m.get);if(typeof m.value=="function")return D(m.value)}f=u(f)}function l(m){return console.warn("fallback value for",m),null}return l}let Qt=b(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),xt=b(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_t=b(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Wa=b(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),vt=b(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ja=b(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Jt=b(["#text"]),ta=b(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),It=b(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),aa=b(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),lt=b(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Va=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),qa=L(/<%[\w\W]*|[\w\W]*%>/gm),Za=L(/\${[\w\W]*}/gm),Ka=L(/^data-[\-\w.\u00B7-\uFFFF]/),Qa=L(/^aria-[\-\w]+$/),ea=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ja=L(/^(?:\w+script|data):/i),te=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),na=L(/^html$/i);var ia=Object.freeze({__proto__:null,MUSTACHE_EXPR:Va,ERB_EXPR:qa,TMPLIT_EXPR:Za,DATA_ATTR:Ka,ARIA_ATTR:Qa,IS_ALLOWED_URI:ea,IS_SCRIPT_OR_DATA:Ja,ATTR_WHITESPACE:te,DOCTYPE_NAME:na});let ae=function(){return typeof window>"u"?null:window},ee=function(n,l){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let m=null,I="data-tt-policy-suffix";l&&l.hasAttribute(I)&&(m=l.getAttribute(I));let U="dompurify"+(m?"#"+m:"");try{return n.createPolicy(U,{createHTML(W){return W},createScriptURL(W){return W}})}catch{return console.warn("TrustedTypes policy "+U+" could not be created."),null}};function ra(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ae(),n=i=>ra(i);if(n.version="3.0.8",n.removed=[],!f||!f.document||f.document.nodeType!==9)return n.isSupported=!1,n;let{document:l}=f,m=l,I=m.currentScript,{DocumentFragment:U,HTMLTemplateElement:W,Node:Ot,Element:oa,NodeFilter:Lt,NamedNodeMap:ie=f.NamedNodeMap||f.MozNamedAttrMap,HTMLFormElement:re,DOMParser:oe,trustedTypes:ct}=f,dt=oa.prototype,se=ft(dt,"cloneNode"),me=ft(dt,"nextSibling"),fe=ft(dt,"childNodes"),Tt=ft(dt,"parentNode");if(typeof W=="function"){let i=l.createElement("template");i.content&&i.content.ownerDocument&&(l=i.content.ownerDocument)}let O,et="",{implementation:Rt,createNodeIterator:le,createDocumentFragment:ce,getElementsByTagName:de}=l,{importNode:pe}=m,Y={};n.isSupported=typeof r=="function"&&typeof Tt=="function"&&Rt&&Rt.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:Et,ERB_EXPR:At,TMPLIT_EXPR:Dt,DATA_ATTR:be,ARIA_ATTR:ke,IS_SCRIPT_OR_DATA:ue,ATTR_WHITESPACE:sa}=ia,{IS_ALLOWED_URI:ma}=ia,w=null,fa=s({},[...Qt,...xt,..._t,...vt,...Jt]),g=null,la=s({},[...ta,...It,...aa,...lt]),p=Object.seal(st(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),nt=null,St=null,ca=!0,Ct=!0,da=!1,pa=!0,j=!1,F=!1,Xt=!1,zt=!1,V=!1,pt=!1,bt=!1,ba=!0,ka=!1,we="user-content-",Yt=!0,it=!1,q={},Z=null,ua=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),wa=null,ga=s({},["audio","video","img","source","image","track"]),Ut=null,ya=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),kt="http://www.w3.org/1998/Math/MathML",ut="http://www.w3.org/2000/svg",N="http://www.w3.org/1999/xhtml",K=N,Nt=!1,Mt=null,ge=s({},[kt,ut,N],ht),rt=null,ye=["application/xhtml+xml","text/html"],he="text/html",y=null,Q=null,xe=l.createElement("form"),ha=function(t){return t instanceof RegExp||t instanceof Function},Bt=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Q&&Q===t)){if((!t||typeof t!="object")&&(t={}),t=P(t),rt=ye.indexOf(t.PARSER_MEDIA_TYPE)===-1?he:t.PARSER_MEDIA_TYPE,y=rt==="application/xhtml+xml"?ht:mt,w="ALLOWED_TAGS"in t?s({},t.ALLOWED_TAGS,y):fa,g="ALLOWED_ATTR"in t?s({},t.ALLOWED_ATTR,y):la,Mt="ALLOWED_NAMESPACES"in t?s({},t.ALLOWED_NAMESPACES,ht):ge,Ut="ADD_URI_SAFE_ATTR"in t?s(P(ya),t.ADD_URI_SAFE_ATTR,y):ya,wa="ADD_DATA_URI_TAGS"in t?s(P(ga),t.ADD_DATA_URI_TAGS,y):ga,Z="FORBID_CONTENTS"in t?s({},t.FORBID_CONTENTS,y):ua,nt="FORBID_TAGS"in t?s({},t.FORBID_TAGS,y):{},St="FORBID_ATTR"in t?s({},t.FORBID_ATTR,y):{},q="USE_PROFILES"in t?t.USE_PROFILES:!1,ca=t.ALLOW_ARIA_ATTR!==!1,Ct=t.ALLOW_DATA_ATTR!==!1,da=t.ALLOW_UNKNOWN_PROTOCOLS||!1,pa=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,j=t.SAFE_FOR_TEMPLATES||!1,F=t.WHOLE_DOCUMENT||!1,V=t.RETURN_DOM||!1,pt=t.RETURN_DOM_FRAGMENT||!1,bt=t.RETURN_TRUSTED_TYPE||!1,zt=t.FORCE_BODY||!1,ba=t.SANITIZE_DOM!==!1,ka=t.SANITIZE_NAMED_PROPS||!1,Yt=t.KEEP_CONTENT!==!1,it=t.IN_PLACE||!1,ma=t.ALLOWED_URI_REGEXP||ea,K=t.NAMESPACE||N,p=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ha(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(p.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ha(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(p.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(p.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),j&&(Ct=!1),pt&&(V=!0),q&&(w=s({},Jt),g=[],q.html===!0&&(s(w,Qt),s(g,ta)),q.svg===!0&&(s(w,xt),s(g,It),s(g,lt)),q.svgFilters===!0&&(s(w,_t),s(g,It),s(g,lt)),q.mathMl===!0&&(s(w,vt),s(g,aa),s(g,lt))),t.ADD_TAGS&&(w===fa&&(w=P(w)),s(w,t.ADD_TAGS,y)),t.ADD_ATTR&&(g===la&&(g=P(g)),s(g,t.ADD_ATTR,y)),t.ADD_URI_SAFE_ATTR&&s(Ut,t.ADD_URI_SAFE_ATTR,y),t.FORBID_CONTENTS&&(Z===ua&&(Z=P(Z)),s(Z,t.FORBID_CONTENTS,y)),Yt&&(w["#text"]=!0),F&&s(w,["html","head","body"]),w.table&&(s(w,["tbody"]),delete nt.tbody),t.TRUSTED_TYPES_POLICY){if(typeof t.TRUSTED_TYPES_POLICY.createHTML!="function")throw at('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof t.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw at('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=t.TRUSTED_TYPES_POLICY,et=O.createHTML("")}else O===void 0&&(O=ee(ct,I)),O!==null&&typeof et=="string"&&(et=O.createHTML(""));b&&b(t),Q=t}},xa=s({},["mi","mo","mn","ms","mtext"]),_a=s({},["foreignobject","desc","title","annotation-xml"]),_e=s({},["title","style","font","a","script"]),va=s({},[...xt,..._t,...Wa]),Ia=s({},[...vt,...ja]),ve=function(t){let a=Tt(t);(!a||!a.tagName)&&(a={namespaceURI:K,tagName:"template"});let e=mt(t.tagName),d=mt(a.tagName);return Mt[t.namespaceURI]?t.namespaceURI===ut?a.namespaceURI===N?e==="svg":a.namespaceURI===kt?e==="svg"&&(d==="annotation-xml"||xa[d]):!!va[e]:t.namespaceURI===kt?a.namespaceURI===N?e==="math":a.namespaceURI===ut?e==="math"&&_a[d]:!!Ia[e]:t.namespaceURI===N?a.namespaceURI===ut&&!_a[d]||a.namespaceURI===kt&&!xa[d]?!1:!Ia[e]&&(_e[e]||!va[e]):!!(rt==="application/xhtml+xml"&&Mt[t.namespaceURI]):!1},H=function(t){X(n.removed,{element:t});try{t.parentNode.removeChild(t)}catch{t.remove()}},Pt=function(t,a){try{X(n.removed,{attribute:a.getAttributeNode(t),from:a})}catch{X(n.removed,{attribute:null,from:a})}if(a.removeAttribute(t),t==="is"&&!g[t])if(V||pt)try{H(a)}catch{}else try{a.setAttribute(t,"")}catch{}},Oa=function(t){let a=null,e=null;if(zt)t="<remove></remove>"+t;else{let _=Pa(t,/^[\r\n\t ]+/);e=_&&_[0]}rt==="application/xhtml+xml"&&K===N&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");let d=O?O.createHTML(t):t;if(K===N)try{a=new oe().parseFromString(d,rt)}catch{}if(!a||!a.documentElement){a=Rt.createDocument(K,"template",null);try{a.documentElement.innerHTML=Nt?et:d}catch{}}let x=a.body||a.documentElement;return t&&e&&x.insertBefore(l.createTextNode(e),x.childNodes[0]||null),K===N?de.call(a,F?"html":"body")[0]:F?a.documentElement:x},La=function(t){return le.call(t.ownerDocument||t,t,Lt.SHOW_ELEMENT|Lt.SHOW_COMMENT|Lt.SHOW_TEXT,null)},Ie=function(t){return t instanceof re&&(typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof ie)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},Ta=function(t){return typeof Ot=="function"&&t instanceof Ot},M=function(t,a,e){Y[t]&&z(Y[t],d=>{d.call(n,a,e,Q)})},Ra=function(t){let a=null;if(M("beforeSanitizeElements",t,null),Ie(t))return H(t),!0;let e=y(t.nodeName);if(M("uponSanitizeElement",t,{tagName:e,allowedTags:w}),t.hasChildNodes()&&!Ta(t.firstElementChild)&&A(/<[/\w]/g,t.innerHTML)&&A(/<[/\w]/g,t.textContent))return H(t),!0;if(!w[e]||nt[e]){if(!nt[e]&&Aa(e)&&(p.tagNameCheck instanceof RegExp&&A(p.tagNameCheck,e)||p.tagNameCheck instanceof Function&&p.tagNameCheck(e)))return!1;if(Yt&&!Z[e]){let d=Tt(t)||t.parentNode,x=fe(t)||t.childNodes;if(x&&d){let _=x.length;for(let T=_-1;T>=0;--T)d.insertBefore(se(x[T],!0),me(t))}}return H(t),!0}return t instanceof oa&&!ve(t)||(e==="noscript"||e==="noembed"||e==="noframes")&&A(/<\/no(script|embed|frames)/i,t.innerHTML)?(H(t),!0):(j&&t.nodeType===3&&(a=t.textContent,z([Et,At,Dt],d=>{a=tt(a,d," ")}),t.textContent!==a&&(X(n.removed,{element:t.cloneNode()}),t.textContent=a)),M("afterSanitizeElements",t,null),!1)},Ea=function(t,a,e){if(ba&&(a==="id"||a==="name")&&(e in l||e in xe))return!1;if(!(Ct&&!St[a]&&A(be,a))){if(!(ca&&A(ke,a))){if(!g[a]||St[a]){if(!(Aa(t)&&(p.tagNameCheck instanceof RegExp&&A(p.tagNameCheck,t)||p.tagNameCheck instanceof Function&&p.tagNameCheck(t))&&(p.attributeNameCheck instanceof RegExp&&A(p.attributeNameCheck,a)||p.attributeNameCheck instanceof Function&&p.attributeNameCheck(a))||a==="is"&&p.allowCustomizedBuiltInElements&&(p.tagNameCheck instanceof RegExp&&A(p.tagNameCheck,e)||p.tagNameCheck instanceof Function&&p.tagNameCheck(e))))return!1}else if(!Ut[a]){if(!A(ma,tt(e,sa,""))){if(!((a==="src"||a==="xlink:href"||a==="href")&&t!=="script"&&Fa(e,"data:")===0&&wa[t])){if(!(da&&!A(ue,tt(e,sa,"")))){if(e)return!1}}}}}}return!0},Aa=function(t){return t.indexOf("-")>0},Da=function(t){M("beforeSanitizeAttributes",t,null);let{attributes:a}=t;if(!a)return;let e={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:g},d=a.length;for(;d--;){let x=a[d],{name:_,namespaceURI:T,value:$}=x,ot=y(_),R=_==="value"?$:Ha($);if(e.attrName=ot,e.attrValue=R,e.keepAttr=!0,e.forceKeepAttr=void 0,M("uponSanitizeAttribute",t,e),R=e.attrValue,e.forceKeepAttr||(Pt(_,t),!e.keepAttr))continue;if(!pa&&A(/\/>/i,R)){Pt(_,t);continue}j&&z([Et,At,Dt],Ca=>{R=tt(R,Ca," ")});let Sa=y(t.nodeName);if(Ea(Sa,ot,R)){if(ka&&(ot==="id"||ot==="name")&&(Pt(_,t),R=we+R),O&&typeof ct=="object"&&typeof ct.getAttributeType=="function"&&!T)switch(ct.getAttributeType(Sa,ot)){case"TrustedHTML":{R=O.createHTML(R);break}case"TrustedScriptURL":{R=O.createScriptURL(R);break}}try{T?t.setAttributeNS(T,_,R):t.setAttribute(_,R),G(n.removed)}catch{}}}M("afterSanitizeAttributes",t,null)},Oe=function i(t){let a=null,e=La(t);for(M("beforeSanitizeShadowDOM",t,null);a=e.nextNode();)M("uponSanitizeShadowNode",a,null),!Ra(a)&&(a.content instanceof U&&i(a.content),Da(a));M("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=null,e=null,d=null,x=null;if(Nt=!i,Nt&&(i="<!-->"),typeof i!="string"&&!Ta(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw at("dirty is not a string, aborting")}else throw at("toString is not a function");if(!n.isSupported)return i;if(Xt||Bt(t),n.removed=[],typeof i=="string"&&(it=!1),it){if(i.nodeName){let $=y(i.nodeName);if(!w[$]||nt[$])throw at("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof Ot)a=Oa("<!---->"),e=a.ownerDocument.importNode(i,!0),e.nodeType===1&&e.nodeName==="BODY"||e.nodeName==="HTML"?a=e:a.appendChild(e);else{if(!V&&!j&&!F&&i.indexOf("<")===-1)return O&&bt?O.createHTML(i):i;if(a=Oa(i),!a)return V?null:bt?et:""}a&&zt&&H(a.firstChild);let _=La(it?i:a);for(;d=_.nextNode();)Ra(d)||(d.content instanceof U&&Oe(d.content),Da(d));if(it)return i;if(V){if(pt)for(x=ce.call(a.ownerDocument);a.firstChild;)x.appendChild(a.firstChild);else x=a;return(g.shadowroot||g.shadowrootmode)&&(x=pe.call(m,x,!0)),x}let T=F?a.outerHTML:a.innerHTML;return F&&w["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&A(na,a.ownerDocument.doctype.name)&&(T="<!DOCTYPE "+a.ownerDocument.doctype.name+`>
`+T),j&&z([Et,At,Dt],$=>{T=tt(T,$," ")}),O&&bt?O.createHTML(T):T},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bt(i),Xt=!0},n.clearConfig=function(){Q=null,Xt=!1},n.isValidAttribute=function(i,t,a){Q||Bt({});let e=y(i),d=y(t);return Ea(e,d,a)},n.addHook=function(i,t){typeof t=="function"&&(Y[i]=Y[i]||[],X(Y[i],t))},n.removeHook=function(i){if(Y[i])return G(Y[i])},n.removeHooks=function(i){Y[i]&&(Y[i]=[])},n.removeAllHooks=function(){Y={}},n}var ne=ra();return ne})});c();c();c();c();function Ft(r){r.innerHTML=`
    <div>
      <h1>NotFound</h1>
    </div>
  `}c();var C={navbar:"g",movies:"s",overlay:"m",buttons:"r",video:"u",description:"f",divider:"y",router:"x",footer:"h"};function wt(r){document.title="Movies HUB",r.innerHTML=`
        <div class=${C.movies}>
            <div class=${C.overlay}>
                <div class=${C.desc}>
                    <p>Unlimited movies,TV shows, and <br>
                    more. <br>
                    Watch anywhere. Cancel anytime.
                    </p>
                    <div class=${C.buttons}>
                        <a href='/login'>Login</a>
                        <a href='/signup'>Sign up</a>
                    </div>
                </div>
                <div class=${C.video}>
                    <h2>AI Video</h2>
                </div>
            </div>
        </div>
        <div class=${C.description}>
            <p>
                Unlimited movies, TV shows, and more. <br>
                Watch anywhere. Cancel anytime.
            </p>
        </div>
        <div class=${C.divider}></div>
    `}c();c();var za=`
    ./google.png
`;var E={login:"d",overlay:"_",container:"t",confirm:"c",remember:"l",google:"b",signup:"I"};function Ht(r){r.innerHTML=`
    
        <div class=${E.login}>
        <div class=${E.overlay}></div>
            <div class=${E.container}>
                <h1>Sign in</h1>
                <form>
                    <input type='text' id='email' placeholder='Email address or Phone' />
                    <input type='password' id='pass' placeholder='\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022' />
                    <div class=${E.remember}>
                        <div>
                            <input type='checkbox' name='checkbox' />
                            <label for='checkbox'>Remember me</label>
                        </div>
                        <div>
                            <a href='/help'>Need help?</a>
                        </div>
                    </div>
                    <button>Sign in</button>
                    <button>
                        <div class=${E.google}>
                            <img src=${za} alt='google'>
                        </div>
                    Sign in with Google
                    </button>
                    <a class=${E.signup} href='/signup'>No Account yet?, Sign up here.</a>
                </form>
            </div>
        </div>

    `}c();function $t(r){r.innerHTML=`
    
        <div class=${E.login}>
        <div class=${E.overlay}></div>
            <div class=${E.container}>
                <h1>Register</h1>
                <form>
                    <input type='text' id='email' placeholder='Email address or Phone' />
                    <input class=${E.confirm} type='password' id='pass' placeholder='\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022' />
                    <input type='password' id='cpass' placeholder='\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022' />
                    <div class=${E.remember}>
                        <div>
                            <input type='checkbox' name='checkbox' />
                            <label for='checkbox'>Remember me</label>
                        </div>
                        <div>
                            <a href='/help'>Need help?</a>
                        </div>
                    </div>
                    <button>Sign up</button>
                    <a class=${E.signup} href='/login'>Already have an Account?, login here.</a>
                </form>
            </div>
        </div>

    `}c();var gt=class{routes=[];constructor(o){this.routes=o,window.addEventListener("popstate",this.handlePopState.bind(this)),this.handlePopState()}handlePopState(){let o=window.location.pathname,k=this.findMatchingRoute(o,this.routes);if(k){let u=document.createElement("div");k.element(u)}else{let u=this.findMatchingRoute("*",this.routes);if(u){let v=document.createElement("div");u.element(v)}}}findMatchingRoute(o,k){for(let u of k){let v=u.path;if(v==="*")return u;{let L=[],st=v.replace(/:[^\s/]+/g,z=>(L.push(z.substring(1)),"([^\\s/]+)")),J=new RegExp(`^${st}(?:/|$)`),B=o.match(J);if(B){let z={};if(L.forEach((G,X)=>{z[G]=B[X+1]}),u.children){let G=o.slice(B[0].length),X=this.findMatchingRoute(G,u.children);if(X)return X.params=z,X}return{...u,params:z}}}}}navigate(o){history.pushState(null,"",o),this.handlePopState()}};function Gt(r){new gt([{path:"/",element:()=>{wt(r)},errorElement:()=>{},children:[{path:"/about",element:()=>{wt(r)},errorElement:()=>{}}]},{path:"/login",element:()=>{Ht(r)},errorElement:()=>{}},{path:"/signup",element:()=>{$t(r)},errorElement:()=>{}},{path:"*",element:()=>{Ft(r)}}]).navigate("")}c();var h={logo:"p",list:"O",box:"e",title:"X",lang:"i",subscribe:"o",drop:"v",drop_list:"a",fadeOutUp:"k",show:"Y",fadeInDown:"z"};c();var Wt=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"/>
        </svg>
    `,Ya=`
        <svg id='drops' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="currentColor"></path></svg>
    `,Ua=`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="18px" viewBox="0 0 25 18" version="1.1">
    <g id="surface1">
        <path class="icon-path" style="fill-rule:nonzero;" d="M 7.914062 1.722656 C 7.714844 1.960938 7.707031 1.988281 7.707031 2.480469 L 7.707031 2.988281 L 5.546875 2.988281 C 4.355469 2.988281 3.347656 3.007812 3.292969 3.027344 C 3.214844 3.054688 3.203125 3.195312 3.203125 3.941406 L 3.203125 4.816406 L 6.925781 4.816406 C 8.980469 4.816406 10.667969 4.835938 10.691406 4.855469 C 10.710938 4.871094 10.703125 4.953125 10.675781 5.019531 C 10.617188 5.183594 10.402344 5.777344 10.339844 5.945312 C 10.253906 6.179688 9.300781 8.207031 9.191406 8.382812 C 9.128906 8.480469 9.027344 8.667969 8.964844 8.800781 C 8.839844 9.042969 8.671875 9.15625 8.632812 9.035156 C 8.621094 8.992188 8.511719 8.824219 8.386719 8.660156 C 8.269531 8.496094 8.164062 8.339844 8.164062 8.324219 C 8.164062 8.304688 8.117188 8.214844 8.0625 8.121094 C 8.003906 8.027344 7.878906 7.835938 7.785156 7.679688 C 7.683594 7.53125 7.503906 7.179688 7.367188 6.890625 C 7.058594 6.230469 6.800781 5.933594 6.488281 5.886719 C 6.214844 5.84375 5.992188 5.917969 5.804688 6.113281 C 5.632812 6.296875 5.484375 6.601562 5.484375 6.765625 C 5.484375 6.882812 6.054688 8.125 6.273438 8.488281 C 6.320312 8.570312 6.449219 8.792969 6.546875 8.972656 C 6.640625 9.152344 6.78125 9.355469 6.847656 9.414062 C 6.910156 9.480469 6.96875 9.554688 6.96875 9.59375 C 6.96875 9.640625 7.082031 9.808594 7.542969 10.449219 L 7.667969 10.625 L 6.757812 11.582031 C 5.746094 12.636719 5.308594 13.03125 4.566406 13.542969 C 3.957031 13.976562 3.714844 14.265625 3.714844 14.585938 C 3.714844 14.957031 3.878906 15.238281 4.183594 15.402344 C 4.515625 15.578125 4.621094 15.585938 4.921875 15.429688 C 5.222656 15.253906 5.957031 14.726562 6.050781 14.613281 C 6.09375 14.554688 6.152344 14.511719 6.183594 14.511719 C 6.273438 14.511719 7.097656 13.746094 7.929688 12.878906 C 8.359375 12.4375 8.730469 12.074219 8.761719 12.074219 C 8.777344 12.074219 9.089844 12.363281 9.441406 12.714844 C 9.796875 13.070312 10.183594 13.417969 10.300781 13.472656 C 10.792969 13.761719 11.347656 13.5 11.527344 12.898438 C 11.632812 12.511719 11.515625 12.320312 10.648438 11.445312 C 10.222656 11.011719 9.875 10.628906 9.875 10.582031 C 9.875 10.542969 9.945312 10.410156 10.035156 10.285156 C 10.121094 10.164062 10.292969 9.882812 10.417969 9.667969 C 10.542969 9.4375 10.703125 9.164062 10.769531 9.050781 C 11.097656 8.519531 11.992188 6.4375 12.242188 5.636719 C 12.292969 5.472656 12.363281 5.285156 12.394531 5.234375 C 12.417969 5.167969 12.445312 5.085938 12.445312 5.027344 C 12.445312 4.871094 12.652344 4.816406 13.332031 4.816406 L 14 4.816406 L 14.273438 4.515625 C 14.570312 4.207031 14.601562 4.066406 14.496094 3.667969 C 14.433594 3.429688 14.273438 3.261719 13.957031 3.105469 C 13.742188 3 13.542969 2.988281 11.546875 2.988281 L 9.363281 2.988281 L 9.363281 2.5 C 9.363281 2.011719 9.324219 1.863281 9.113281 1.597656 C 9.015625 1.484375 8.949219 1.464844 8.558594 1.464844 L 8.117188 1.464844 Z M 7.914062 1.722656 "/>
        <path class="icon-path" style="fill-rule:nonzero;" d="M 13.269531 10.386719 C 13.160156 10.472656 13.152344 10.558594 13.136719 13.082031 C 13.128906 14.992188 13.136719 15.707031 13.191406 15.765625 C 13.273438 15.878906 14.039062 15.890625 14.144531 15.78125 C 14.191406 15.734375 14.210938 15.429688 14.210938 14.808594 L 14.210938 13.917969 L 14.707031 13.910156 C 15.636719 13.886719 16.207031 13.558594 16.503906 12.898438 C 16.691406 12.460938 16.730469 11.867188 16.601562 11.402344 C 16.496094 11.042969 16.09375 10.605469 15.722656 10.457031 C 15.324219 10.304688 13.449219 10.25 13.269531 10.386719 Z M 15.183594 11.28125 C 15.425781 11.402344 15.546875 11.636719 15.570312 12.042969 C 15.585938 12.347656 15.570312 12.445312 15.453125 12.621094 C 15.265625 12.921875 15 13.046875 14.570312 13.046875 L 14.210938 13.046875 L 14.210938 11.140625 L 14.628906 11.175781 C 14.851562 11.195312 15.101562 11.238281 15.183594 11.28125 Z M 15.183594 11.28125 "/>
        <path class="icon-path" style="fill-rule:nonzero;" d="M 17.59375 10.347656 C 17.535156 10.371094 17.519531 10.976562 17.519531 13.082031 C 17.519531 15.488281 17.527344 15.785156 17.609375 15.816406 C 17.769531 15.882812 18.464844 15.855469 18.535156 15.78125 C 18.582031 15.734375 18.605469 15.378906 18.605469 14.589844 L 18.605469 13.472656 L 20.542969 13.472656 L 20.554688 14.644531 L 20.570312 15.824219 L 20.941406 15.839844 C 21.140625 15.855469 21.367188 15.839844 21.4375 15.824219 L 21.570312 15.792969 L 21.570312 10.367188 L 21.4375 10.335938 C 21.367188 10.320312 21.140625 10.304688 20.941406 10.320312 L 20.570312 10.335938 L 20.515625 12.46875 L 19.558594 12.488281 L 18.605469 12.5 L 18.605469 11.523438 C 18.605469 10.988281 18.609375 10.535156 18.621094 10.53125 C 18.625 10.515625 18.597656 10.464844 18.550781 10.410156 C 18.496094 10.328125 18.378906 10.304688 18.066406 10.308594 C 17.84375 10.308594 17.628906 10.328125 17.59375 10.347656 Z M 17.59375 10.347656 "/>
    </g>
</svg>  
    `;function jt(r){r.innerHTML=`
    <div class=${h.logo}>
      <h3>Movies</h3>
      <span>
         hub
      </span>
    </div>
    <div class=${h.list}>
        <div class=${h.box}>
            <h3 class=${h.title}>FAQ's</h3>
            <ul>
                <li>
                    <a href='/faq'>FAQ</a>
                </li>
                <li>
                    <a href='/faq'>Support</a>
                </li>
                <li>
                    <a href='/faq'>Redeem Gift Cards</a>
                </li>
                <li>
                    <a href='/watch'>Ways to watch</a>
                </li>
            </ul>
        </div>
        <div class=${h.box}>
            <h3 class=${h.title}>My Account</h3>
            <ul>
                <li>
                    <a href='/login'>Login</a>
                </li>
                <li>
                    <a href='/faq'>History</a>
                </li>
                <li>
                    <a href='/faq'>Recent Watched</a>
                </li>
                <li>
                    <a href='/watch'>Account FAQ</a>
                </li>
            </ul>
        </div>
        <div class=${h.box}>
            <h3 class=${h.title}>Menu</h3>
            <ul>
                <li>
                    <a href='/login'>Media Center</a>
                </li>
                <li>
                    <a href='/faq'>Jobs</a>
                </li>
                <li>
                    <a href='/faq'>Terms of Use</a>
                </li>
                <li>
                    <a href='/watch'>Buy Gift Cards</a>
                </li>
            </ul>
        </div>
        <div class=${h.box}>
            <h3 class=${h.title}>Subscribe</h3>
            <ul class='${h.subscribe}'>
                <li>
                    <span>For more details.</span>
                    <div>
                        <input type='email' placeholder='Email' />
                        <input type='button' value='Subscribe'>
                    </div>
                    <span>&copy; Movie HUB PH &trade;</span>
                </li>
            </ul>
        </div>
    </div>
    <div class=${h["lang-container"]}>
        <div id='drop' class=${h.lang}>
            <div class=${h.drop}>
                ${Wt}
                <span id='Lang'>English UK</span>
                ${Ya}
            </div>
            <div id='droplist' class=${h.drop_list}>
                <li> ${Wt}English UK</li>
                <li> ${Ua}Tagalog PH</li>
            </div>
        </div>
    </div>
    `;let o=document.getElementById("drop"),k=document.getElementById("droplist"),u=document.getElementById("drops"),v=document.getElementById("Lang");o.addEventListener("click",b=>{b.stopPropagation(),k.classList.toggle(h.show),k.style.animation="fadeInUp 1s 0s ease-in-out",u.style.transform="rotate(50%)"}),document.addEventListener("click",()=>{k.classList.remove(h.show)}),k.addEventListener("click",b=>{b.stopPropagation()})}c();var yt={logo:"w",navlinks:"n",hub:"L"};function Vt(r){r.innerHTML=`
            <div class=${yt.logo}>
                <h1>Movies</h1>
                <div class=${yt.hub}>
                    <p>hub</p>
                </div>
            </div>
            <div class=${yt.navlinks}>
                <a href='/'>Home</a>
                <a href='/movies'>Movies</a>
                <a href='/tv-series'>TV Series</a>
            </div>
    `}function qt(r){r.innerHTML=`
    <div class=${C.bg}>
        <nav class=${C.navbar} id='navbar'></nav>
        <div id='router'></div>
        <footer class=${C.footer} id='footer'></footer>
    </div>
  `;let o=document.getElementById("router");Gt(o);let k=document.getElementById("navbar");Vt(k);let u=document.getElementById("footer");jt(u)}var Ba=Xe(Na(),1),Ma=document.getElementById("app");if(Ma){let o=Ba.default.sanitize("<img src=x onerror=alert('XSS')>");qt(Ma,o)}
/*! Bundled license information:

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.0.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.8/LICENSE *)
*/
