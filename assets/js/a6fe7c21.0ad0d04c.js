"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[54858],{308205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(785893),n=a(511151),i=a(841282),c=a(476828);const o={id:"approvals",title:"Approvals",description:"Approvals",custom_edit_url:null},s=void 0,l={id:"api/v2024/approvals",title:"Approvals",description:"Approvals",source:"@site/docs/api/v2024/approvals.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/approvals",permalink:"/docs/api/v2024/approvals",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"approvals",title:"Approvals",description:"Approvals",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Upload CSV to Discover Applications",permalink:"/docs/api/v2024/send-manual-discover-applications-csv-template"},next:{title:"Get Approvals",permalink:"/docs/api/v2024/get-approvals"}},p={},d=[];function m(e){const t={a:"a",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them."}),"\n",(0,r.jsxs)(t.p,{children:["The main advantages this API has vs ",(0,r.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/beta/access-request-approvals",children:"Access Request Approvals"})," are that you can use it to get generic approvals individually or in batches and make changes to those approvals."]}),"\n","\n",(0,r.jsx)(i.Z,{items:(0,c.jA)().items})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},841282:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(667294),n=a(490512),i=a(476828),c=a(370393),o=a(585597),s=a(935096),l=a(633084),p=a(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=a(799603),u=a(921702);function v({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,n.Z)("card padding--lg",d.cardContainer)},t)}function f({href:e,icon:t,title:a,description:i}){return r.createElement(v,{href:e},r.createElement(p.default,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:a},t," ",a),i&&r.createElement("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:i},i))}function h({item:e}){var t;const a=(0,i.LM)(e),n=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return a?r.createElement(f,{href:a,icon:r.createElement(m.G,{icon:u.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:n(e.items.length)}):null}function g({item:e}){var t,a;const n=(0,s.Z)(e.href)?r.createElement(m.G,{icon:u.FL8,className:d.docCardIcon}):r.createElement(m.G,{icon:u.wlW,className:d.docCardIcon}),c=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(f,{href:e.href,icon:n,title:e.label,description:(null!=(a=e.description)?a:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function y({item:e}){switch(e.type){case"link":return r.createElement(g,{item:e});case"category":return r.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,E=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,j=(e,t)=>{for(var a in t||(t={}))_.call(t,a)&&N(e,a,t[a]);if(E)for(var a of E(t))A.call(t,a)&&N(e,a,t[a]);return e};function w({className:e}){const t=(0,i.jA)();return r.createElement(x,{items:t.items,className:e})}function x(e){const{items:t,className:a}=e;if(!t)return r.createElement(w,j({},e));const c=(0,i.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",a)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}}}]);