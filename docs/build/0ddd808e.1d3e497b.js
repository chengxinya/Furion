(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),c=(n(0),n(87)),l=n(96),r=n(97),o=n.p+"assets/images/kzq-77369bcccab051a1e1140bdce990c167.png";const i={id:"dynamic-api-controller",title:"3. \u52a8\u6001 API \u63a7\u5236\u5668",sidebar_label:"3. \u52a8\u6001 API \u63a7\u5236\u5668"},s={unversionedId:"dynamic-api-controller",id:"dynamic-api-controller",isDocsHomePage:!1,title:"3. \u52a8\u6001 API \u63a7\u5236\u5668",description:"3.1 \u4ec0\u4e48\u662f\u63a7\u5236\u5668",source:"@site/docs\\dynamic-api-controller.mdx",permalink:"/fur/docs/dynamic-api-controller",editUrl:"https://gitee.com/monksoul/Fur/tree/alpha/docs/docs/dynamic-api-controller.mdx",sidebar_label:"3. \u52a8\u6001 API \u63a7\u5236\u5668",sidebar:"docs",previous:{title:"2.2 \u9009\u9879",permalink:"/fur/docs/options"}},b=[{value:"3.1 \u4ec0\u4e48\u662f\u63a7\u5236\u5668",id:"31-\u4ec0\u4e48\u662f\u63a7\u5236\u5668",children:[]}],u={rightToc:b};function p({components:e,...t}){return Object(c.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"31-\u4ec0\u4e48\u662f\u63a7\u5236\u5668"},"3.1 \u4ec0\u4e48\u662f\u63a7\u5236\u5668"),Object(c.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u63a7\u5236\u5668\u662f\u4e00\u4e2a\u627f\u4e0a\u542f\u4e0b\u7684\u4f5c\u7528\uff0c\u6839\u636e\u7528\u6237\u8f93\u5165\uff0c\u6267\u884c\u54cd\u5e94\u884c\u4e3a\uff08\u52a8\u4f5c\u65b9\u6cd5\uff09\uff0c\u540c\u65f6\u5728\u884c\u4e3a\u4e2d\u8c03\u7528\u6a21\u578b\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8fd4\u56de\u7ed9\u7528\u6237\u7ed3\u679c\uff08\u89c6\u56fe\uff09\u3002"),Object(c.b)("img",{src:o}),Object(c.b)("p",null),Object(c.b)("p",null,"\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\uff0c\u63a7\u5236\u5668\u6709\u4e24\u79cd\u8868\u73b0\u5f62\u5f0f\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Mvc"),"\uff08\u5e26\u89c6\u56fe\uff09"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"WebAPI"),"\uff08RESTful API\uff09")),Object(c.b)(l.a,{defaultValue:"mvc",values:[{label:"Mvc \u63a7\u5236\u5668",value:"mvc"},{label:"WebAPI \u63a7\u5236\u5668",value:"webapi"}],mdxType:"Tabs"},Object(c.b)(r.a,{value:"mvc",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5,7}","{1,5,7}":!0}),"using Microsoft.AspNetCore.Mvc;\n\nnamespace Fur.Web.Entry.Controllers\n{\n    public class MvcController : Controller\n    {\n        public IActionResult Index()\n        {\n            return View();\n        }\n    }\n}\n"))),Object(c.b)(r.a,{value:"webapi",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5,6,8,9}","{1,5,6,8,9}":!0}),'using Microsoft.AspNetCore.Mvc;\n\nnamespace Fur.Web.Entry.Controllers\n{\n    [Route("api/[controller]")]\n    public class WebApiController : ControllerBase\n    {\n        [HttpGet]\n        public IActionResult Get()\n        {\n            return Content(nameof(Fur));\n        }\n    }\n}\n')))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Mvc")," \u63a7\u5236\u5668\u548c ",Object(c.b)("inlineCode",{parentName:"p"},"WebAPI")," \u63a7\u5236\u5668\u6700\u5927\u7684\u533a\u522b\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"WebAPI")," \u63a7\u5236\u5668\u4e0d\u5e26 ",Object(c.b)("strong",{parentName:"p"},"\u89c6\u56fe")," \u548c\u901a\u8fc7 ",Object(c.b)("strong",{parentName:"p"},"\u8bf7\u6c42\u8c13\u8bcd\u548c\u8def\u7531\u5730\u5740\u54cd\u5e94\u884c\u4e3a"),"\u3002"))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";var a=n(0),c=n.n(a),l=n(95),r=n(85),o=n(50),i=n.n(o);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:u,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(l.a)(),[O,j]=Object(a.useState)(o),[f,v]=Object(a.useState)(!1);if(null!=p){const e=d[p];null!=e&&e!==O&&u.some(t=>t.value===e)&&j(e)}const y=e=>{j(e),null!=p&&m(p,e)},C=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},N=()=>{v(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",N)},[]),c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(r.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===e}),style:f?{}:{outline:"none"},key:e,ref:e=>C.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(C,e.target,e),g(e)},onFocus:()=>y(e),onClick:()=>{y(e),v(!1)},onPointerDown:()=>v(!1)},t))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},97:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){return c.a.createElement("div",null,e.children)}}}]);