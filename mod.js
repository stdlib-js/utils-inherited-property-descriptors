// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var e,n,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===r.specifier||10!==e)&&(a=4294967295+a+1),a<0?(n=(-a).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=a.toString(e),a||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===u.call(r.specifier)?u.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,b,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var S=String.fromCharCode,E=isNaN,_=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,u,f,l,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(u)?String(n.arg):S(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){return"string"==typeof r}function V(r){var e,t,n;if(!A(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var B,F=Object.prototype,N=F.toString,C=F.__defineGetter__,L=F.__defineSetter__,$=F.__lookupGetter__,R=F.__lookupSetter__;B=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),u&&L&&L.call(r,e,t.set),r};var G=B;function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&Z.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,z="function"==typeof H?H.toStringTag:"";var q=X()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[z],e=Y(r,z);try{r[z]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[z]=t:delete r[z],n}:function(r){return D.call(r)},J=Number,K=J.prototype.toString;var Q=X();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function er(r){return U(r)||rr(r)}M(er,"isPrimitive",U),M(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,or=Math.floor;function ir(r){return or(r)===r}function ur(r){return r<tr&&r>nr&&ir(r)}function ar(r){return U(r)&&ur(r)}function cr(r){return rr(r)&&ur(r.valueOf())}function fr(r){return ar(r)||cr(r)}function lr(r){return ar(r)&&r>0}function sr(r){return cr(r)&&r.valueOf()>0}function pr(r){return lr(r)||sr(r)}M(fr,"isPrimitive",ar),M(fr,"isObject",cr),M(pr,"isPrimitive",lr),M(pr,"isObject",sr);var gr=void 0!==Object.getOwnPropertyDescriptors,br=Object,yr=br.getOwnPropertyDescriptors;var vr=void 0!==Object.getOwnPropertyNames,dr=br.getOwnPropertyNames;function hr(r){return Object.keys(Object(r))}var wr=void 0!==Object.keys;function mr(r){return"[object Arguments]"===q(r)}var jr=function(){return mr(arguments)}();function Or(r){return"string"==typeof r}var Sr=String.prototype.valueOf;var Er=X();function _r(r){return"object"==typeof r&&(r instanceof String||(Er?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function Pr(r){return Or(r)||_r(r)}function Tr(r){return r!=r}function kr(r){return U(r)&&Tr(r)}function Ir(r){return rr(r)&&Tr(r.valueOf())}function xr(r){return kr(r)||Ir(r)}M(Pr,"isPrimitive",Or),M(Pr,"isObject",_r),M(xr,"isPrimitive",kr),M(xr,"isObject",Ir);var Ar=Object.prototype.propertyIsEnumerable;var Vr,Br=!Ar.call("beep","0");function Fr(r,e){var t;return null!=r&&(!(t=Ar.call(r,e))&&Br&&Pr(r)?!kr(e=+e)&&ar(e)&&e>=0&&e<r.length:t)}Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};var Nr,Cr=Vr;Nr=jr?mr:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=4294967295&&Y(r,"callee")&&!Fr(r,"callee")};var Lr=Nr,$r=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);M(Rr,"isObjectLikeArray",Gr);var Mr=Fr((function(){}),"prototype"),Ur=!Fr({toString:null},"toString");function Wr(r){return r!=r}function Xr(r){return U(r)&&Wr(r)}function Dr(r){return rr(r)&&Wr(r.valueOf())}function Zr(r){return Xr(r)||Dr(r)}M(Zr,"isPrimitive",Xr),M(Zr,"isObject",Dr);function Yr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=9007199254740991}function Hr(r){return"string"==typeof r}var zr=String.prototype.valueOf;var qr=X();function Jr(r){return"object"==typeof r&&(r instanceof String||(qr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function Kr(r){return Hr(r)||Jr(r)}function Qr(r,e,t){var n,o;if(!Yr(r)&&!Hr(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ar(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Zr(e)){for(;o<n;o++)if(Zr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}M(Kr,"isPrimitive",Hr),M(Kr,"isObject",Jr);var re=/./;function ee(r){return"boolean"==typeof r}var te=Boolean,ne=Boolean.prototype.toString;var oe=X();function ie(r){return"object"==typeof r&&(r instanceof te||(oe?function(r){try{return ne.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function ue(r){return ee(r)||ie(r)}function ae(){return new Function("return this;")()}M(ue,"isPrimitive",ee),M(ue,"isObject",ie);var ce="object"==typeof self?self:null,fe="object"==typeof window?window:null,le="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},se="object"==typeof le?le:null,pe="object"==typeof globalThis?globalThis:null;var ge=function(r){if(arguments.length){if(!ee(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ae()}if(pe)return pe;if(ce)return ce;if(fe)return fe;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),be=ge.document&&ge.document.childNodes,ye=Int8Array;function ve(){return/^\s*function\s*([^(]*)/i}var de=/^\s*function\s*([^(]*)/i;function he(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=de.exec(n.toString()))return e[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(ve,"REGEXP",de);var we="function"==typeof re||"object"==typeof ye||"function"==typeof be?function(r){return he(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?he(r).toLowerCase():e};function me(r){return r.constructor&&r.constructor.prototype===r}var je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Oe="undefined"==typeof window?void 0:window;var Se=function(){var r;if("undefined"===we(Oe))return!1;for(r in Oe)try{-1===Qr(je,r)&&Y(Oe,r)&&null!==Oe[r]&&"object"===we(Oe[r])&&me(Oe[r])}catch(r){return!0}return!1}(),Ee="undefined"!=typeof window;var _e,Pe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];_e=wr?function(){return 2!==(hr(arguments)||"").length}(1,2)?function(r){return Lr(r)?hr($r.call(r)):hr(r)}:hr:function(r){var e,t,n,o,i,u,a;if(o=[],Lr(r)){for(a=0;a<r.length;a++)o.push(a.toString());return o}if("string"==typeof r){if(r.length>0&&!Y(r,"0"))for(a=0;a<r.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof r)&&!Rr(r))return o;t=Mr&&n}for(i in r)t&&"prototype"===i||!Y(r,i)||o.push(String(i));if(Ur)for(e=function(r){if(!1===Ee&&!Se)return me(r);try{return me(r)}catch(r){return!1}}(r),a=0;a<Pe.length;a++)u=Pe[a],e&&"constructor"===u||!Y(r,u)||o.push(String(u));return o};var Te,ke=_e;Te=vr?function(r){return dr(br(r))}:function(r){return ke(br(r))};var Ie,xe=Te,Ae=void 0!==Object.getOwnPropertySymbols,Ve=br.getOwnPropertySymbols;Ie=Ae?function(r){return Ve(br(r))}:function(){return[]};var Be,Fe=Ie,Ne=void 0!==Object.getOwnPropertyDescriptor,Ce=Object.getOwnPropertyDescriptor;Be=Ne?function(r,e){var t;return null==r||void 0===(t=Ce(r,e))?null:t}:function(r,e){return Y(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Le,$e=Be;Le=gr?function(r){return yr(br(r))}:function(r){var e,t,n,o,i;for(o={},t=xe(r),i=0;i<t.length;i++)(n=$e(r,t[i]))&&G(o,t[i],{configurable:!0,enumerable:!0,writable:!0,value:n});for(e=Fe(r),i=0;i<e.length;i++)(n=$e(r,e[i]))&&G(o,e[i],{configurable:!0,enumerable:!0,writable:!0,value:n});return o};var Re=Le,Ge=/./;function Me(r){return"boolean"==typeof r}var Ue=Boolean.prototype.toString;var We=X();function Xe(r){return"object"==typeof r&&(r instanceof te||(We?function(r){try{return Ue.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function De(r){return Me(r)||Xe(r)}function Ze(){return new Function("return this;")()}M(De,"isPrimitive",Me),M(De,"isObject",Xe);var Ye="object"==typeof self?self:null,He="object"==typeof window?window:null,ze="object"==typeof le?le:null,qe="object"==typeof globalThis?globalThis:null;var Je=function(r){if(arguments.length){if(!Me(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ze()}if(qe)return qe;if(Ye)return Ye;if(He)return He;if(ze)return ze;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array;function rt(){return/^\s*function\s*([^(]*)/i}var et=/^\s*function\s*([^(]*)/i;function tt(r){return null!==r&&"object"==typeof r}M(rt,"REGEXP",et);var nt=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(tt);function ot(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=et.exec(n.toString()))return e[1]}return tt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(tt,"isObjectLikeArray",nt);var it="function"==typeof Ge||"object"==typeof Qe||"function"==typeof Ke?function(r){return ot(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ot(r).toLowerCase():e};var ut,at,ct=Object.getPrototypeOf;at=Object.getPrototypeOf,ut="function"===it(at)?ct:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ft=ut;function lt(r){return null==r?null:(r=br(r),ft(r))}function st(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function pt(r,e){var t,n,o,i,u,a,c;if(arguments.length>1){if(!lr(e))throw new TypeError(st("1Ul45,IB",e));u=e}else u=9007199254740991;if(null==r)return{};for(o=lt(r),t={},a=1;o&&a<=u;){for(i=Re(o),n=ke(i),c=0;c<n.length;c++)Y(t,n[c])||G(t,n[c],{configurable:!0,enumerable:!0,writable:!0,value:i[n[c]]});for(n=Fe(i),c=0;c<n.length;c++)Y(t,n[c])||G(t,n[c],{configurable:!0,enumerable:!0,writable:!0,value:i[n[c]]});o=lt(o),a+=1}return t}export{pt as default};
//# sourceMappingURL=mod.js.map
