(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4507],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},431:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],i={id:"fs",title:"13. FS \u9759\u6001\u7c7b",sidebar_label:"13. FS \u9759\u6001\u7c7b"},c=void 0,u={unversionedId:"global/fs",id:"global/fs",isDocsHomePage:!1,title:"13. FS \u9759\u6001\u7c7b",description:"13.1 \u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668",source:"@site/docs/global/fs.mdx",sourceDirName:"global",slug:"/global/fs",permalink:"/furion/docs/global/fs",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/fs.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1621132602,formattedLastUpdatedAt:"5/16/2021",frontMatter:{id:"fs",title:"13. FS \u9759\u6001\u7c7b",sidebar_label:"13. FS \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"12. SpareTime \u9759\u6001\u7c7b",permalink:"/furion/docs/global/sparetime"},next:{title:"14. JWTEncryption \u9759\u6001\u7c7b",permalink:"/furion/docs/global/jwt"}},s=[{value:"13.1 \u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668",id:"131-\u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668",children:[]},{value:"13.2 \u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668",id:"132-\u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668",children:[]},{value:"13.3 \u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668",id:"133-\u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668",children:[]},{value:"13.4 \u7279\u522b\u6ce8\u610f",id:"134-\u7279\u522b\u6ce8\u610f",children:[]}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"131-\u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668"},"13.1 \u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'var fileProvider = FS.GetPhysicalFileProvider(@"c:/test");\n')),(0,l.kt)("h2",{id:"132-\u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668"},"13.2 \u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"var fileProvider = FS.GetEmbeddedFileProvider(Assembly.GetEntryAssembly());\n")),(0,l.kt)("h2",{id:"133-\u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668"},"13.3 \u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'var fileProvider = FS.GetFileProvider(FileProviderTypes.Physical, @"c:/test");\n')),(0,l.kt)("h2",{id:"134-\u7279\u522b\u6ce8\u610f"},"13.4 \u7279\u522b\u6ce8\u610f"),(0,l.kt)("p",null,"\u4f7f\u7528\u8be5\u529f\u80fd\u9700\u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"p"},"services.AddVirtualFileServer()")," \u5df2\u6ce8\u518c\u3002\u6846\u67b6\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\u63a7\u5236\u8be5\u670d\u52a1\u6ce8\u518c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"AppSettings")," \u914d\u7f6e"),"\uff08\u63a8\u8350\u65b9\u5f0f\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AppSettings": {\n    "EnabledVirtualFileServer": true\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee5\u4e0a\u914d\u7f6e\u9ed8\u8ba4\u5f00\u542f\uff0c\u65e0\u9700\u914d\u7f6e\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"`\u624b\u52a8\u6ce8\u518c"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddVirtualFileServer();\n")))}d.isMDXComponent=!0}}]);