// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,b="set"in e,a&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),b&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function g(t,r){return null!=t&&v.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(t){var r,e,n;if(null==t)return y.call(t);e=t[d],r=g(t,d);try{t[d]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[d]=e:delete t[d],n}:function(t){return y.call(t)},m=Number,w=m.prototype.toString;var h=s();function O(t){return"object"==typeof t&&(t instanceof m||(h?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function _(t){return p(t)||O(t)}a(_,"isPrimitive",p),a(_,"isObject",O);var S=Number.POSITIVE_INFINITY,P=m.NEGATIVE_INFINITY,E=Math.floor;function I(t){return E(t)===t}function T(t){return t<S&&t>P&&I(t)}function A(t){return p(t)&&T(t)}function N(t){return O(t)&&T(t.valueOf())}function k(t){return A(t)||N(t)}function B(t){return A(t)&&t>0}function V(t){return N(t)&&t.valueOf()>0}function x(t){return B(t)||V(t)}a(k,"isPrimitive",A),a(k,"isObject",N),a(x,"isPrimitive",B),a(x,"isObject",V);var F=void 0!==Object.getOwnPropertyDescriptors,D=Object,L=D.getOwnPropertyDescriptors;var C=void 0!==Object.getOwnPropertyNames,G=Object.getOwnPropertyNames;function Y(t){return Object.keys(Object(t))}var M=void 0!==Object.keys;function X(t){return"[object Arguments]"===j(t)}var H=function(){return X(arguments)}();function R(t){return"string"==typeof t}var U=String.prototype.valueOf;var W=s();function q(t){return"object"==typeof t&&(t instanceof String||(W?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function z(t){return R(t)||q(t)}function J(t){return t!=t}function K(t){return p(t)&&J(t)}function Q(t){return O(t)&&J(t.valueOf())}function Z(t){return K(t)||Q(t)}a(z,"isPrimitive",R),a(z,"isObject",q),a(Z,"isPrimitive",K),a(Z,"isObject",Q);var $=Object.prototype.propertyIsEnumerable;var tt,rt=!$.call("beep","0");function et(t,r){var e;return null!=t&&(!(e=$.call(t,r))&&rt&&z(t)?!K(r=+r)&&A(r)&&r>=0&&r<t.length:e)}tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var nt,ot=tt;nt=H?X:function(t){return null!==t&&"object"==typeof t&&!ot(t)&&"number"==typeof t.length&&I(t.length)&&t.length>=0&&t.length<=4294967295&&g(t,"callee")&&!et(t,"callee")};var ut=nt,it=Array.prototype.slice;function ct(t){return null!==t&&"object"==typeof t}var ft=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!ot(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ct);a(ct,"isObjectLikeArray",ft);var lt=et((function(){}),"prototype"),at=!et({toString:null},"toString");function pt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&I(t.length)&&t.length>=0&&t.length<=9007199254740991}function bt(t,r,e){var n,o;if(!pt(t)&&!R(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!A(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Z(r)){for(;o<n;o++)if(Z(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var st=/./;function yt(t){return"boolean"==typeof t}var vt=Boolean.prototype.toString;var gt=s();function dt(t){return"object"==typeof t&&(t instanceof Boolean||(gt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function jt(t){return yt(t)||dt(t)}function mt(){return new Function("return this;")()}a(jt,"isPrimitive",yt),a(jt,"isObject",dt);var wt="object"==typeof self?self:null,ht="object"==typeof window?window:null,Ot="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},_t="object"==typeof Ot?Ot:null;var St=function(t){if(arguments.length){if(!yt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return mt()}if(wt)return wt;if(ht)return ht;if(_t)return _t;throw new Error("unexpected error. Unable to resolve global object.")}(),Pt=St.document&&St.document.childNodes,Et=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var Tt=/^\s*function\s*([^(]*)/i;function At(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Tt.exec(n.toString()))return r[1]}return ct(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(It,"REGEXP",Tt);var Nt="function"==typeof st||"object"==typeof Et||"function"==typeof Pt?function(t){return At(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?At(t).toLowerCase():r};function kt(t){return t.constructor&&t.constructor.prototype===t}var Bt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Vt="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===Nt(Vt))return!1;for(t in Vt)try{-1===bt(Bt,t)&&g(Vt,t)&&null!==Vt[t]&&"object"===Nt(Vt[t])&&kt(Vt[t])}catch(t){return!0}return!1}(),Ft="undefined"!=typeof window;var Dt,Lt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Dt=M?function(){return 2!==(Y(arguments)||"").length}(1,2)?function(t){return ut(t)?Y(it.call(t)):Y(t)}:Y:function(t){var r,e,n,o,u,i,c;if(o=[],ut(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!g(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!ct(t))return o;e=lt&&n}for(u in t)e&&"prototype"===u||!g(t,u)||o.push(String(u));if(at)for(r=function(t){if(!1===Ft&&!xt)return kt(t);try{return kt(t)}catch(t){return!1}}(t),c=0;c<Lt.length;c++)i=Lt[c],r&&"constructor"===i||!g(t,i)||o.push(String(i));return o};var Ct,Gt=Dt;Ct=C?function(t){return G(Object(t))}:function(t){return Gt(Object(t))};var Yt,Mt=Ct,Xt=void 0!==Object.getOwnPropertySymbols,Ht=Object.getOwnPropertySymbols;Yt=Xt?function(t){return Ht(Object(t))}:function(){return[]};var Rt,Ut=Yt,Wt=void 0!==Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyDescriptor;Rt=Wt?function(t,r){var e;return null==t||void 0===(e=qt(t,r))?null:e}:function(t,r){return g(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var zt,Jt=Rt;zt=F?function(t){return L(D(t))}:function(t){var r,e,n,o,u;for(o={},e=Mt(t),u=0;u<e.length;u++)(n=Jt(t,e[u]))&&l(o,e[u],{configurable:!0,enumerable:!0,writable:!0,value:n});for(r=Ut(t),u=0;u<r.length;u++)(n=Jt(t,r[u]))&&l(o,r[u],{configurable:!0,enumerable:!0,writable:!0,value:n});return o};var Kt=zt;var Qt,Zt,$t=Object.getPrototypeOf;Zt=Object.getPrototypeOf,Qt="function"===Nt(Zt)?$t:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var tr=Qt;function rr(t){return null==t?null:(t=Object(t),tr(t))}function er(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function nr(t,r){var e,n,o,u,i,c,f;if(arguments.length>1){if(!B(r))throw new TypeError(er("0kE4I",r));i=r}else i=9007199254740991;if(null==t)return{};for(o=rr(t),e={},c=1;o&&c<=i;){for(u=Kt(o),n=Gt(u),f=0;f<n.length;f++)g(e,n[f])||l(e,n[f],{configurable:!0,enumerable:!0,writable:!0,value:u[n[f]]});for(n=Ut(u),f=0;f<n.length;f++)g(e,n[f])||l(e,n[f],{configurable:!0,enumerable:!0,writable:!0,value:u[n[f]]});o=rr(o),c+=1}return e}export{nr as default};
//# sourceMappingURL=mod.js.map
