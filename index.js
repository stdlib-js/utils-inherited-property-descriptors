// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).inheritedPropertyDescriptors=r()}(this,(function(){"use strict";var t=9007199254740991,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&g.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[j],r=d(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[j]=e:delete t[j],n}:function(t){return v.call(t)},h=Number,O=h.prototype.toString;var w=y();function _(t){return"object"==typeof t&&(t instanceof h||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function S(t){return s(t)||_(t)}p(S,"isPrimitive",s),p(S,"isObject",_);var P=Number.POSITIVE_INFINITY,E=h.NEGATIVE_INFINITY,I=Math.floor;function T(t){return I(t)===t}function A(t){return t<P&&t>E&&T(t)}function N(t){return s(t)&&A(t)}function k(t){return _(t)&&A(t.valueOf())}function x(t){return N(t)||k(t)}function B(t){return N(t)&&t>0}function V(t){return k(t)&&t.valueOf()>0}function D(t){return B(t)||V(t)}p(x,"isPrimitive",N),p(x,"isObject",k),p(D,"isPrimitive",B),p(D,"isObject",V);var F=void 0!==Object.getOwnPropertyDescriptors,L=Object,C=L.getOwnPropertyDescriptors;var G=void 0!==Object.getOwnPropertyNames,Y=Object.getOwnPropertyNames;function M(t){return Object.keys(Object(t))}var X,H=void 0!==Object.keys;function R(t){return"[object Arguments]"===m(t)}X=function(){return R(arguments)}();var U=X;function W(t){return"string"==typeof t}var q=String.prototype.valueOf;var z=y();function J(t){return"object"==typeof t&&(t instanceof String||(z?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function K(t){return W(t)||J(t)}function Q(t){return t!=t}function Z(t){return s(t)&&Q(t)}function $(t){return _(t)&&Q(t.valueOf())}function tt(t){return Z(t)||$(t)}p(K,"isPrimitive",W),p(K,"isObject",J),p(tt,"isPrimitive",Z),p(tt,"isObject",$);var rt=Object.prototype.propertyIsEnumerable;var et,nt=!rt.call("beep","0");function ot(t,r){var e;return null!=t&&(!(e=rt.call(t,r))&&nt&&K(t)?!Z(r=+r)&&N(r)&&r>=0&&r<t.length:e)}et=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var ut,it=et;ut=U?R:function(t){return null!==t&&"object"==typeof t&&!it(t)&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!ot(t,"callee")};var ct=ut,ft=Array.prototype.slice;function lt(t){return null!==t&&"object"==typeof t}var at=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!it(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(lt);p(lt,"isObjectLikeArray",at);var pt=ot((function(){}),"prototype"),st=!ot({toString:null},"toString");function bt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=9007199254740991}function yt(t,r,e){var n,o;if(!bt(t)&&!W(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!N(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(tt(r)){for(;o<n;o++)if(tt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var vt=/./;function gt(t){return"boolean"==typeof t}var dt=Boolean.prototype.toString;var jt=y();function mt(t){return"object"==typeof t&&(t instanceof Boolean||(jt?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function ht(t){return gt(t)||mt(t)}function Ot(){return new Function("return this;")()}p(ht,"isPrimitive",gt),p(ht,"isObject",mt);var wt="object"==typeof self?self:null,_t="object"==typeof window?window:null,St="object"==typeof global?global:null;var Pt=function(t){if(arguments.length){if(!gt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Ot()}if(wt)return wt;if(_t)return _t;if(St)return St;throw new Error("unexpected error. Unable to resolve global object.")}(),Et=Pt.document&&Pt.document.childNodes,It=Int8Array;function Tt(){return/^\s*function\s*([^(]*)/i}var At=/^\s*function\s*([^(]*)/i;function Nt(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=At.exec(n.toString()))return r[1]}return lt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(Tt,"REGEXP",At);var kt="function"==typeof vt||"object"==typeof It||"function"==typeof Et?function(t){return Nt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Nt(t).toLowerCase():r};function xt(t){return t.constructor&&t.constructor.prototype===t}var Bt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Vt="undefined"==typeof window?void 0:window;var Dt=function(){var t;if("undefined"===kt(Vt))return!1;for(t in Vt)try{-1===yt(Bt,t)&&d(Vt,t)&&null!==Vt[t]&&"object"===kt(Vt[t])&&xt(Vt[t])}catch(t){return!0}return!1}(),Ft="undefined"!=typeof window;var Lt,Ct=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Lt=H?function(){return 2!==(M(arguments)||"").length}(1,2)?function(t){return ct(t)?M(ft.call(t)):M(t)}:M:function(t){var r,e,n,o,u,i,c;if(o=[],ct(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!lt(t))return o;e=pt&&n}for(u in t)e&&"prototype"===u||!d(t,u)||o.push(String(u));if(st)for(r=function(t){if(!1===Ft&&!Dt)return xt(t);try{return xt(t)}catch(t){return!1}}(t),c=0;c<Ct.length;c++)i=Ct[c],r&&"constructor"===i||!d(t,i)||o.push(String(i));return o};var Gt,Yt=Lt;Gt=G?function(t){return Y(Object(t))}:function(t){return Yt(Object(t))};var Mt,Xt=Gt,Ht=void 0!==Object.getOwnPropertySymbols,Rt=Object.getOwnPropertySymbols;Mt=Ht?function(t){return Rt(Object(t))}:function(){return[]};var Ut,Wt=Mt,qt=void 0!==Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptor;Ut=qt?function(t,r){var e;return null==t||void 0===(e=zt(t,r))?null:e}:function(t,r){return d(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var Jt,Kt=Ut;Jt=F?function(t){return C(L(t))}:function(t){var r,e,n,o,u;for(o={},e=Xt(t),u=0;u<e.length;u++)(n=Kt(t,e[u]))&&a(o,e[u],{configurable:!0,enumerable:!0,writable:!0,value:n});for(r=Wt(t),u=0;u<r.length;u++)(n=Kt(t,r[u]))&&a(o,r[u],{configurable:!0,enumerable:!0,writable:!0,value:n});return o};var Qt=Jt;var Zt,$t,tr=Object.getPrototypeOf;$t=Object.getPrototypeOf,Zt="function"===kt($t)?tr:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var rr=Zt;function er(t){return null==t?null:(t=Object(t),rr(t))}function nr(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(r,e){var n,o,u,i,c,f,l;if(arguments.length>1){if(!B(e))throw new TypeError(nr("0kE4I",e));c=e}else c=t;if(null==r)return{};for(u=er(r),n={},f=1;u&&f<=c;){for(i=Qt(u),o=Yt(i),l=0;l<o.length;l++)d(n,o[l])||a(n,o[l],{configurable:!0,enumerable:!0,writable:!0,value:i[o[l]]});for(o=Wt(i),l=0;l<o.length;l++)d(n,o[l])||a(n,o[l],{configurable:!0,enumerable:!0,writable:!0,value:i[o[l]]});u=er(u),f+=1}return n}}));
//# sourceMappingURL=index.js.map
