(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{172:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return a})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),c=(n(0),n(364)),i={title:"include/sleepy_discord/compression.h"},s={unversionedId:"reference/Files/compression_8h",id:"reference/Files/compression_8h",isDocsHomePage:!1,title:"include/sleepy_discord/compression.h",description:"Source code",source:"@site/docs/reference/Files/compression_8h.md",slug:"/reference/Files/compression_8h",permalink:"/sleepy-discord/docs/reference/Files/compression_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/common_return_types.h",permalink:"/sleepy-discord/docs/reference/Files/common__return__types_8h"},next:{title:"sleepy_discord/cpr_session.cpp",permalink:"/sleepy-discord/docs/reference/Files/cpr__session_8cpp"}},a=[{value:"Source code",id:"source-code",children:[]}],p={toc:a};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"source-code"},"Source code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n\n#if defined(EXISTENT_ZLIB_NG) || defined(EXISTENT_ZLIB)\n#include "zlib_compression.h"\n#else\n#include "generic_compression.h"\n#endif // EXISTENT_ZLIB_NG\n')),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  8 May 2021 at 19:54:18 UTC"))}l.isMDXComponent=!0},364:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=t,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return n?o.a.createElement(m,s(s({ref:r},p),{},{components:n})):o.a.createElement(m,s({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,i=new Array(c);i[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);