(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{279:function(n,e,l){"use strict";l.r(e),l.d(e,"query",function(){return p}),l.d(e,"default",function(){return d});l(3),l(130),l(5),l(6),l(4),l(7);var t=l(0),o=l.n(t),r=l(303),a=l.n(r),u=l(11);function i(n,e){if(null==n)return{};var l,t,o={},r=Object.keys(n);for(t=0;t<r.length;t++)l=r[t],e.indexOf(l)>=0||(o[l]=n[l]);return o}var s=function(n){return function(e){var l=e.href,t=i(e,["href"]);if(l.startsWith("http")||l.startsWith("#"))return o.a.createElement(u.a,Object.assign({href:l},t));var r=l.startsWith("/")?l.slice(1):l;return o.a.createElement(u.a,Object.assign({},t,{href:n[r]}))}},c=function(n){var e=n.children,l=i(n,["children"]);return o.a.createElement(u.F,l,o.a.Children.map(e,function(n){return"code"===n.type||"Styled(code)"===n.type.displayName?o.a.createElement(u.f,n.props):o.a.cloneElement(n)}))},p="1006944883",d=function(n){var e,l;function t(e){var l;l=n.call(this,e)||this;var t=e.pageContext.relativeLinks,r=new a.a({createElement:o.a.createElement,components:{h1:u.g,h2:u.h,h3:u.i,h4:u.j,h5:u.k,h6:u.l,p:u.E,ul:u.A,li:u.B,pre:c,code:u.y,table:u.H,th:u.J,td:u.I,blockquote:u.b,a:s(t)}}).Compiler;return l.state={renderAst:r},l}return l=n,(e=t).prototype=Object.create(l.prototype),e.prototype.constructor=e,e.__proto__=l,t.prototype.render=function(){var n=this.props.data.docBySlug.htmlAst,e=this.state.renderAst;return o.a.createElement("div",null,o.a.createElement(u.D,null,e(n)))},t}(o.a.Component)},282:function(n,e,l){"use strict";l(13);var t=l(288),o=l(286),r=l(289);n.exports=function(n){var e,l,a=n.space,u=n.mustUseProperty||[],i=n.attributes||{},s=n.properties,c=n.transform,p={},d={};for(e in s)l=new r(e,c(i,e),s[e],a),-1!==u.indexOf(e)&&(l.mustUseProperty=!0),p[e]=l,d[t(e)]=e,d[t(l.attribute)]=e;return new o(p,d,a)}},283:function(n,e,l){"use strict";var t=0;function o(){return Math.pow(2,++t)}e.boolean=o(),e.booleanish=o(),e.overloadedBoolean=o(),e.number=o(),e.spaceSeparated=o(),e.commaSeparated=o(),e.commaOrSpaceSeparated=o()},284:function(n,e,l){"use strict";var t=l(8),o=l(44),r=l(76),a=l(33),u=[].lastIndexOf,i=!!u&&1/[1].lastIndexOf(1,-0)<0;t(t.P+t.F*(i||!l(45)(u)),"Array",{lastIndexOf:function(n){if(i)return u.apply(this,arguments)||0;var e=o(this),l=a(e.length),t=l-1;for(arguments.length>1&&(t=Math.min(t,r(arguments[1]))),t<0&&(t=l+t);t>=0;t--)if(t in e&&e[t]===n)return t||0;return-1}})},285:function(n,e,l){"use strict";var t=l(306),o=l(286);n.exports=function(n){var e,l,r=n.length,a=[],u=[],i=-1;for(;++i<r;)e=n[i],a.push(e.property),u.push(e.normal),l=e.space;return new o(t.apply(null,a),t.apply(null,u),l)}},286:function(n,e,l){"use strict";n.exports=o;var t=o.prototype;function o(n,e,l){this.property=n,this.normal=e,l&&(this.space=l)}t.space=null,t.normal={},t.property={}},287:function(n,e,l){"use strict";var t=l(282);n.exports=t({space:"xlink",transform:function(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},288:function(n,e,l){"use strict";n.exports=function(n){return n.toLowerCase()}},289:function(n,e,l){"use strict";var t=l(290),o=l(283);n.exports=u,u.prototype=new t,u.prototype.defined=!0;var r=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],a=r.length;function u(n,e,l,u){var s,c=-1;for(i(this,"space",u),t.call(this,n,e);++c<a;)i(this,s=r[c],(l&o[s])===o[s])}function i(n,e,l){l&&(n[e]=l)}},290:function(n,e,l){"use strict";n.exports=o;var t=o.prototype;function o(n,e){this.property=n,this.attribute=e}t.space=null,t.attribute=null,t.property=null,t.boolean=!1,t.booleanish=!1,t.overloadedBoolean=!1,t.number=!1,t.commaSeparated=!1,t.spaceSeparated=!1,t.commaOrSpaceSeparated=!1,t.mustUseProperty=!1,t.defined=!1},291:function(n,e,l){"use strict";var t=l(282);n.exports=t({space:"xml",transform:function(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},292:function(n,e,l){"use strict";var t=l(282),o=l(293);n.exports=t({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:o,properties:{xmlns:null,xmlnsXLink:null}})},293:function(n,e,l){"use strict";var t=l(294);n.exports=function(n,e){return t(n,e.toLowerCase())}},294:function(n,e,l){"use strict";n.exports=function(n,e){return e in n?n[e]:e}},295:function(n,e,l){"use strict";var t=l(283),o=l(282),r=t.booleanish,a=t.number,u=t.spaceSeparated;n.exports=o({transform:function(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:r,ariaAutoComplete:null,ariaBusy:r,ariaChecked:r,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:u,ariaCurrent:null,ariaDescribedBy:u,ariaDetails:null,ariaDisabled:r,ariaDropEffect:u,ariaErrorMessage:null,ariaExpanded:r,ariaFlowTo:u,ariaGrabbed:r,ariaHasPopup:null,ariaHidden:r,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:u,ariaLevel:a,ariaLive:null,ariaModal:r,ariaMultiLine:r,ariaMultiSelectable:r,ariaOrientation:null,ariaOwns:u,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:r,ariaReadOnly:r,ariaRelevant:null,ariaRequired:r,ariaRoleDescription:u,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:r,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}})},303:function(n,e,l){"use strict";l(24);var t=l(304),o=l(317);n.exports=function(n){var e=n||{},l=e.createElement,a=e.Fragment,u=e.components||{};function i(n,e,t){var o=r.call(u,n)?u[n]:n;return l(o,e,t)}this.Compiler=function(n){var r=t(i,o(n),e.prefix);return"root"===n.type?(r="div"!==r.type||1===n.children.length&&"element"===n.children[0].type?[r]:r.props.children,l(a||"div",{},r)):r}};var r={}.hasOwnProperty},304:function(n,e,l){"use strict";l(12);var t=l(305),o=l(308),r=l(310),a=l(311),u=l(312),i=l(313),s=l(315),c=l(316),p=c("root"),d=c("element"),f=c("text"),h=/-([a-z])/g;function g(n,e,l,t){var o,i=t.hyperscript||t.vdom||t.vue,s=t.schema,c=r(s,e);null==l||l!=l||i&&!1===l||i&&c.boolean&&!l||(null!==l&&"object"==typeof l&&"length"in l&&(l=(c.commaSeparated?u:a).stringify(l)),c.boolean&&!0===t.hyperscript&&(l=""),t.vue?"style"!==e&&(o="attrs"):c.mustUseProperty||(!0===t.vdom?o="attributes":!0===t.hyperscript&&(o="attrs")),o?(void 0===n[o]&&(n[o]={}),n[o][c.attribute]=l):n[t.react&&c.space?c.property:c.attribute]=l)}function m(n){return Boolean(n&&n.context&&n.cleanup)}function v(n,e){return e.toUpperCase()}n.exports=function(n,e,l){var r,a,u,c,y=l||{};if("function"!=typeof n)throw new Error("h is not a function");"string"==typeof y||"boolean"==typeof y?(r=y,y={}):r=y.prefix;a=function(n){var e=n&&n("div");return Boolean(e&&("_owner"in e||"_store"in e)&&null===e.key)}(n),u=function(n){var e=n&&n("div");return Boolean(e&&e.context&&e.context._isVue)}(n),c=function(n){return n&&"VirtualNode"===n("div").type}(n),null==r&&(r=(!0===a||!0===u||!0===c)&&"h-");if(p(e))e=1===e.children.length&&d(e.children[0])?e.children[0]:{type:"element",tagName:"div",properties:{},children:e.children};else if(!d(e))throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");return function n(e,l,t){var r=t.schema;var a=r;var u=l.tagName;var c;var p;var m;var y;var x;var b;var w;var k;var S;"html"===r.space&&"svg"===u.toLowerCase()&&(a=o,t.schema=a);!0===t.vdom&&"html"===a.space&&(u=u.toUpperCase());c=l.properties;p={};for(y in c)g(p,y,c[y],t);"string"!=typeof p.style||!0!==t.vdom&&!0!==t.vue&&!0!==t.react||(p.style=function(n,e){var l={};try{i(n,function(n,e){l[function(n){"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4));return n.replace(h,v)}(n)]=e})}catch(t){throw t.message=e+"[style]"+t.message.slice("undefined".length),t}return l}(p.style,u));t.prefix&&(t.key++,p.key=t.prefix+t.key);t.vdom&&"html"!==a.space&&(p.namespace=s[a.space]);x=[];m=l.children;b=m?m.length:0;w=-1;for(;++w<b;)k=m[w],d(k)?x.push(n(e,k,t)):f(k)&&x.push(k.value);S=0===x.length?e(u,p):e(u,p,x);t.schema=r;return S}(n,e,{schema:"svg"===y.space?o:t,prefix:r,key:0,react:a,vue:u,vdom:c,hyperscript:m(n)})}},305:function(n,e,l){"use strict";var t=l(285),o=l(287),r=l(291),a=l(292),u=l(295),i=l(307);n.exports=t([r,o,a,u,i])},306:function(n,e){n.exports=function(){for(var n={},e=0;e<arguments.length;e++){var t=arguments[e];for(var o in t)l.call(t,o)&&(n[o]=t[o])}return n};var l=Object.prototype.hasOwnProperty},307:function(n,e,l){"use strict";var t=l(283),o=l(282),r=l(293),a=t.boolean,u=t.overloadedBoolean,i=t.booleanish,s=t.number,c=t.spaceSeparated,p=t.commaSeparated;n.exports=o({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:r,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:a,allowPaymentRequest:a,allowUserMedia:a,alt:null,as:null,async:a,autoCapitalize:null,autoComplete:c,autoFocus:a,autoPlay:a,capture:a,charSet:null,checked:a,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:i,controls:a,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:a,defer:a,dir:null,dirName:null,disabled:a,download:u,draggable:i,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:a,formTarget:null,headers:c,height:s,hidden:a,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:a,itemId:null,itemProp:c,itemRef:c,itemScope:a,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loop:a,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:a,muted:a,name:null,nonce:null,noModule:a,noValidate:a,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:a,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:a,poster:null,preload:null,readOnly:a,referrerPolicy:null,rel:c,required:a,reversed:a,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:a,seamless:a,selected:a,shape:null,size:s,sizes:null,slot:null,span:s,spellCheck:i,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:a,useMap:null,value:i,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:a,declare:a,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:a,noHref:a,noShade:a,noWrap:a,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:i,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,prefix:null,property:null,results:s,security:null,unselectable:null}})},308:function(n,e,l){"use strict";var t=l(285),o=l(287),r=l(291),a=l(292),u=l(295),i=l(309);n.exports=t([r,o,a,u,i])},309:function(n,e,l){"use strict";var t=l(283),o=l(282),r=l(294),a=t.boolean,u=t.number,i=t.spaceSeparated,s=t.commaSeparated,c=t.commaOrSpaceSeparated;n.exports=o({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:r,properties:{about:c,accentHeight:u,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:u,amplitude:u,arabicForm:null,ascent:u,attributeName:null,attributeType:null,azimuth:u,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:u,by:null,calcMode:null,capHeight:u,className:i,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:u,diffuseConstant:u,direction:null,display:null,dur:null,divisor:u,dominantBaseline:null,download:a,dx:null,dy:null,edgeMode:null,editable:null,elevation:u,enableBackground:null,end:null,event:null,exponent:u,externalResourcesRequired:null,fill:null,fillOpacity:u,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:u,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:u,horizOriginX:u,horizOriginY:u,id:null,ideographic:u,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:u,k:u,k1:u,k2:u,k3:u,k4:u,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:u,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:u,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:u,overlineThickness:u,paintOrder:null,panose1:null,path:null,pathLength:u,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:i,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:u,pointsAtY:u,pointsAtZ:u,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:u,specularExponent:u,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:u,strikethroughThickness:u,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:u,strokeOpacity:u,strokeWidth:null,style:null,surfaceScale:u,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:u,tableValues:null,target:null,targetX:u,targetY:u,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:u,underlineThickness:u,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:u,values:null,vAlphabetic:u,vMathematical:u,vectorEffect:null,vHanging:u,vIdeographic:u,version:null,vertAdvY:u,vertOriginX:u,vertOriginY:u,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:u,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})},310:function(n,e,l){"use strict";l(12);var t=l(288),o=l(289),r=l(290),a="data";n.exports=function(n,e){var l=t(e),d=e,f=r;if(l in n.normal)return n.property[n.normal[l]];l.length>4&&l.slice(0,4)===a&&u.test(e)&&("-"===e.charAt(4)?d=function(n){var e=n.slice(5).replace(i,p);return a+e.charAt(0).toUpperCase()+e.slice(1)}(e):e=function(n){var e=n.slice(4);if(i.test(e))return n;"-"!==(e=e.replace(s,c)).charAt(0)&&(e="-"+e);return a+e}(e),f=o);return new f(d,e)};var u=/^data[-a-z0-9.:_]+$/i,i=/-[a-z]/g,s=/[A-Z]/g;function c(n){return"-"+n.toLowerCase()}function p(n){return n.charAt(1).toUpperCase()}},311:function(n,e,l){"use strict";l(27),l(75),e.parse=function(n){var e=String(n||t).trim();return e===t?[]:e.split(r)},e.stringify=function(n){return n.join(o).trim()};var t="",o=" ",r=/[ \t\n\r\f]+/g},312:function(n,e,l){"use strict";l(75),l(13),e.parse=function(n){var e,l=[],o=String(n||r),a=o.indexOf(t),u=0,i=!1;for(;!i;)-1===a&&(a=o.length,i=!0),!(e=o.slice(u,a).trim())&&i||l.push(e),u=a+1,a=o.indexOf(t,u);return l},e.stringify=function(n,e){var l=e||{},a=!1===l.padLeft?r:o,u=l.padRight?o:r;n[n.length-1]===r&&(n=n.concat(r));return n.join(u+t+a).trim()};var t=",",o=" ",r=""},313:function(n,e,l){var t=l(314);n.exports=function(n,e){var l,o=null;if(!n||"string"!=typeof n)return o;for(var r,a,u=t(n),i="function"==typeof e,s=0,c=u.length;s<c;s++)r=(l=u[s]).property,a=l.value,i?e(r,a,l):a&&(o||(o={}),o[r]=a);return o}},314:function(n,e,l){l(12),l(284),l(62);var t=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,o=/\n/g,r=/^\s*/,a=/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,u=/^:\s*/,i=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,c=/^\s+|\s+$/g,p="\n",d="/",f="*",h="",g="comment",m="declaration";function v(n){return n?n.replace(c,h):h}n.exports=function(n,e){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var l=1,c=1;function y(n){var e=n.match(o);e&&(l+=e.length);var t=n.lastIndexOf(p);c=~t?n.length-t:c+n.length}function x(){var n={line:l,column:c};return function(e){return e.position=new b(n),C(),e}}function b(n){this.start=n,this.end={line:l,column:c},this.source=e.source}b.prototype.content=n;var w=[];function k(t){var o=new Error(e.source+":"+l+":"+c+": "+t);if(o.reason=t,o.filename=e.source,o.line=l,o.column=c,o.source=n,!e.silent)throw o;w.push(o)}function S(e){var l=e.exec(n);if(l){var t=l[0];return y(t),n=n.slice(t.length),l}}function C(){S(r)}function O(n){var e;for(n=n||[];e=P();)!1!==e&&n.push(e);return n}function P(){var e=x();if(d==n.charAt(0)&&f==n.charAt(1)){for(var l=2;h!=n.charAt(l)&&(f!=n.charAt(l)||d!=n.charAt(l+1));)++l;if(l+=2,h===n.charAt(l-1))return k("End of comment missing");var t=n.slice(2,l-2);return c+=2,y(t),n=n.slice(l),c+=2,e({type:g,comment:t})}}function M(){var n=x(),e=S(a);if(e){if(P(),!S(u))return k("property missing ':'");var l=S(i),o=n({type:m,property:v(e[0].replace(t,h)),value:l?v(l[0].replace(t,h)):h});return S(s),o}}return C(),function(){var n,e=[];for(O(e);n=M();)!1!==n&&(e.push(n),O(e));return e}()}},315:function(n){n.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},316:function(n,e,l){"use strict";function t(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var l;for(l in n)if(e[l]!==n[l])return!1;return!0}}function r(n){var e=function(n){for(var e=[],l=n.length,o=-1;++o<l;)e[o]=t(n[o]);return e}(n),l=e.length;return function(){var n=-1;for(;++n<l;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=t},317:function(n,e,l){"use strict";l(75);var t=l(318),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(u(n,r[e],n.properties[e]),delete n.properties[e])}function u(n,e,l){var t=(n.properties.style||"").trim();t&&!/;\s*/.test(t)&&(t+=";"),t&&(t+=" ");var o=t+e+": "+l+";";n.properties.style=o}n.exports=function(n){return t(n,"element",a),n}},318:function(n,e,l){"use strict";l(13),n.exports=u;var t=l(319),o=t.CONTINUE,r=t.SKIP,a=t.EXIT;function u(n,e,l,o){"function"==typeof e&&"function"!=typeof l&&(o=l,l=e,e=null),t(n,e,function(n,e){var t=e[e.length-1],o=t?t.children.indexOf(n):null;return l(n,o,t)},o)}u.CONTINUE=o,u.SKIP=r,u.EXIT=a},319:function(n,e,l){"use strict";n.exports=u;var t=l(320),o=!0,r="skip",a=!1;function u(n,e,l,o){var u;function s(n,t,c){var p,d=[];return(e&&!u(n,t,c[c.length-1]||null)||(d=i(l(n,c)))[0]!==a)&&n.children&&d[0]!==r&&(p=i(function(n,e){var l,t=o?-1:1,r=(o?n.length:-1)+t;for(;r>-1&&r<n.length;){if((l=s(n[r],r,e))[0]===a)return l;r="number"==typeof l[1]?l[1]:r+t}}(n.children,c.concat(n))))[0]===a?p:d}"function"==typeof e&&"function"!=typeof l&&(o=l,l=e,e=null),u=t(e),s(n,null,[])}function i(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[o,n]:[n]}u.CONTINUE=o,u.SKIP=r,u.EXIT=a},320:function(n,e,l){"use strict";function t(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var l;for(l in n)if(e[l]!==n[l])return!1;return!0}}function r(n){var e=function(n){for(var e=[],l=n.length,o=-1;++o<l;)e[o]=t(n[o]);return e}(n),l=e.length;return function(){var n=-1;for(;++n<l;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=t}}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-doc-page-markdown-jsx-83c0f380785387a6f653.js.map