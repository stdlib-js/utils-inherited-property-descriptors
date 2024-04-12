// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).inheritedPropertyDescriptors=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,O=isNaN,S=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function E(r){var e,t,n,i,a,c,l,f,s,p,g,b,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,b=n.padRight,y=void 0,(y=g-p.length)<0?p:p=b?p+m(y):m(y)+p)),c+=n.arg||"",l+=1}return c}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,o;for(t=[],o=0,n=P.exec(r);n;)(e=r.slice(o,P.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=P.lastIndex,n=P.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return E.apply(null,e)}var I,A=Object.prototype,V=A.toString,F=A.__defineGetter__,N=A.__defineSetter__,C=A.__lookupGetter__,$=A.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=A,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var B=I;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return D&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&U.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof Z?Z.toStringTag:"";var Y=G()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[M],e=X(r,M);try{r[M]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[M]=t:delete r[M],n}:function(r){return W.call(r)},H=Number,z=H.prototype.toString;var q=G();function J(r){return"object"==typeof r&&(r instanceof H||(q?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function K(r){return R(r)||J(r)}L(K,"isPrimitive",R),L(K,"isObject",J);var Q=Number.POSITIVE_INFINITY,rr=H.NEGATIVE_INFINITY,er=Math.floor;function tr(r){return er(r)===r}function nr(r){return r<Q&&r>rr&&tr(r)}function or(r){return R(r)&&nr(r)}function ir(r){return J(r)&&nr(r.valueOf())}function ar(r){return or(r)||ir(r)}function ur(r){return or(r)&&r>0}function cr(r){return ir(r)&&r.valueOf()>0}function lr(r){return ur(r)||cr(r)}L(ar,"isPrimitive",or),L(ar,"isObject",ir),L(lr,"isPrimitive",ur),L(lr,"isObject",cr);var fr=void 0!==Object.getOwnPropertyDescriptors,sr=Object,pr=sr.getOwnPropertyDescriptors;var gr=void 0!==Object.getOwnPropertyNames,br=sr.getOwnPropertyNames;function yr(r){return Object.keys(Object(r))}var dr,hr=void 0!==Object.keys;function vr(r){return"[object Arguments]"===Y(r)}dr=function(){return vr(arguments)}();var wr=dr;function mr(r){return"string"==typeof r}var jr=String.prototype.valueOf;var Or=G();function Sr(r){return"object"==typeof r&&(r instanceof String||(Or?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Y(r)))}function _r(r){return mr(r)||Sr(r)}function Er(r){return r!=r}function Pr(r){return R(r)&&Er(r)}function Tr(r){return J(r)&&Er(r.valueOf())}function kr(r){return Pr(r)||Tr(r)}L(_r,"isPrimitive",mr),L(_r,"isObject",Sr),L(kr,"isPrimitive",Pr),L(kr,"isObject",Tr);var xr=Object.prototype.propertyIsEnumerable;var Ir,Ar=!xr.call("beep","0");function Vr(r,e){var t;return null!=r&&(!(t=xr.call(r,e))&&Ar&&_r(r)?!Pr(e=+e)&&or(e)&&e>=0&&e<r.length:t)}Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var Fr,Nr=Ir;Fr=wr?vr:function(r){return null!==r&&"object"==typeof r&&!Nr(r)&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=4294967295&&X(r,"callee")&&!Vr(r,"callee")};var Cr=Fr,$r=Array.prototype.slice;function Br(r){return null!==r&&"object"==typeof r}var Lr=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Nr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Br);L(Br,"isObjectLikeArray",Lr);var Rr=Vr((function(){}),"prototype"),Dr=!Vr({toString:null},"toString"),Gr=9007199254740991;function Wr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&tr(i.length)&&i.length>=0&&i.length<=Gr||mr(r)))throw new TypeError(x("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!or(t))throw new TypeError(x("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(kr(e)){for(;o<n;o++)if(kr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Ur=/./;function Xr(r){return"boolean"==typeof r}var Zr=Boolean,Mr=Boolean.prototype.toString;var Yr=G();function Hr(r){return"object"==typeof r&&(r instanceof Zr||(Yr?function(r){try{return Mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function zr(r){return Xr(r)||Hr(r)}L(zr,"isPrimitive",Xr),L(zr,"isObject",Hr);var qr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="object"==typeof global?global:null,Qr="object"==typeof globalThis?globalThis:null;var re=function(r){if(arguments.length){if(!Xr(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Qr)return Qr;if(qr)return qr;if(Jr)return Jr;if(Kr)return Kr;throw new Error("unexpected error. Unable to resolve global object.")}(),ee=re.document&&re.document.childNodes,te=Int8Array;function ne(){return/^\s*function\s*([^(]*)/i}var oe=/^\s*function\s*([^(]*)/i;function ie(r){var e,t,n,o;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=oe.exec(n.toString()))return e[1]}return Br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(ne,"REGEXP",oe);var ae="function"==typeof Ur||"object"==typeof te||"function"==typeof ee?function(r){return ie(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ie(r).toLowerCase():e};function ue(r){return r.constructor&&r.constructor.prototype===r}var ce=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window;var fe=function(){var r;if("undefined"===ae(le))return!1;for(r in le)try{-1===Wr(ce,r)&&X(le,r)&&null!==le[r]&&"object"===ae(le[r])&&ue(le[r])}catch(r){return!0}return!1}(),se="undefined"!=typeof window;var pe,ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];pe=hr?function(){return 2!==(yr(arguments)||"").length}(1,2)?function(r){return Cr(r)?yr($r.call(r)):yr(r)}:yr:function(r){var e,t,n,o,i,a,u;if(o=[],Cr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!X(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Br(r))return o;t=Rr&&n}for(i in r)t&&"prototype"===i||!X(r,i)||o.push(String(i));if(Dr)for(e=function(r){if(!1===se&&!fe)return ue(r);try{return ue(r)}catch(r){return!1}}(r),u=0;u<ge.length;u++)a=ge[u],e&&"constructor"===a||!X(r,a)||o.push(String(a));return o};var be,ye=pe;be=gr?function(r){return br(sr(r))}:function(r){return ye(sr(r))};var de,he=be,ve=void 0!==Object.getOwnPropertySymbols,we=sr.getOwnPropertySymbols;de=ve?function(r){return we(sr(r))}:function(){return[]};var me,je=de,Oe=void 0!==Object.getOwnPropertyDescriptor,Se=Object.getOwnPropertyDescriptor;me=Oe?function(r,e){var t;return null==r||void 0===(t=Se(r,e))?null:t}:function(r,e){return X(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var _e,Ee=me;_e=fr?function(r){return pr(sr(r))}:function(r){var e,t,n,o,i;for(o={},t=he(r),i=0;i<t.length;i++)(n=Ee(r,t[i]))&&B(o,t[i],{configurable:!0,enumerable:!0,writable:!0,value:n});for(e=je(r),i=0;i<e.length;i++)(n=Ee(r,e[i]))&&B(o,e[i],{configurable:!0,enumerable:!0,writable:!0,value:n});return o};var Pe=_e;var Te,ke,xe=Object.getPrototypeOf;ke=Object.getPrototypeOf,Te="function"===ae(ke)?xe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ie=Te;function Ae(r){return null==r?null:(r=sr(r),Ie(r))}return function(r,e){var t,n,o,i,a,u,c;if(arguments.length>1){if(!ur(e))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1Ul45",e));a=e}else a=9007199254740991;if(null==r)return{};for(o=Ae(r),t={},u=1;o&&u<=a;){for(i=Pe(o),n=ye(i),c=0;c<n.length;c++)X(t,n[c])||B(t,n[c],{configurable:!0,enumerable:!0,writable:!0,value:i[n[c]]});for(n=je(i),c=0;c<n.length;c++)X(t,n[c])||B(t,n[c],{configurable:!0,enumerable:!0,writable:!0,value:i[n[c]]});o=Ae(o),u+=1}return t}}));
//# sourceMappingURL=index.js.map
