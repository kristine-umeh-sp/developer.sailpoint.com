"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11248],{973845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(785893),a=r(511151),i=r(841282),c=r(476828);const o={id:"reports-data-extraction",title:"Reports Data Extraction",description:"Reports Data Extraction",custom_edit_url:null},s=void 0,l={id:"api/v3/reports-data-extraction",title:"Reports Data Extraction",description:"Reports Data Extraction",source:"@site/docs/api/v3/reports-data-extraction.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/reports-data-extraction",permalink:"/docs/api/v3/reports-data-extraction",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"reports-data-extraction",title:"Reports Data Extraction",description:"Reports Data Extraction",custom_edit_url:null},sidebar:"isc_v3_sidebar",previous:{title:"Update the Public Identities Configuration",permalink:"/docs/api/v3/update-public-identity-config"},next:{title:"Get Report Result",permalink:"/docs/api/v3/get-report-result"}},d={},p=[];function u(e){const t={p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Use this API to implement reports lifecycle managing and monitoring.\nWith this functionality in place, users can run reports, view their results, and cancel reports in progress.\nThis can be potentially helpful for auditing purposes."}),"\n","\n",(0,n.jsx)(i.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(667294),a=r(490512),i=r(476828),c=r(370393),o=r(585597),s=r(935096),l=r(633084),d=r(555199);const p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=r(799603),m=r(921702);function f({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,a.Z)("card padding--lg",p.cardContainer)},t)}function h({href:e,icon:t,title:r,description:i}){return n.createElement(f,{href:e},n.createElement(d.default,{as:"h2",className:(0,a.Z)("text--truncate",p.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p.cardDescription),title:i},i))}function g({item:e}){var t;const r=(0,i.LM)(e),a=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?n.createElement(h,{href:r,icon:n.createElement(u.G,{icon:m.cC_,className:p.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function v({item:e}){var t,r;const a=(0,s.Z)(e.href)?n.createElement(u.G,{icon:m.FL8,className:p.docCardIcon}):n.createElement(u.G,{icon:m.wlW,className:p.docCardIcon}),c=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(h,{href:e.href,icon:a,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function E({item:e}){switch(e.type){case"link":return n.createElement(v,{item:e});case"category":return n.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var x=Object.defineProperty,b=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&w(e,r,t[r]);if(b)for(var r of b(t))_.call(t,r)&&w(e,r,t[r]);return e};function C({className:e}){const t=(0,i.jA)();return n.createElement(D,{items:t.items,className:e})}function D(e){const{items:t,className:r}=e;if(!t)return n.createElement(C,N({},e));const c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e})))))}}}]);