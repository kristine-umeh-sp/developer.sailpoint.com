"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37320],{491253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(785893),a=n(511151),i=n(841282),c=n(476828);const o={id:"tenant",title:"Tenant",description:"Tenant",custom_edit_url:null},l=void 0,s={id:"api/v2024/tenant",title:"Tenant",description:"Tenant",source:"@site/docs/api/v2024/tenant.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/tenant",permalink:"/docs/api/v2024/tenant",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"tenant",title:"Tenant",description:"Tenant",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Retrieve headers only for pending task list.",permalink:"/docs/api/v2024/get-pending-task-headers"},next:{title:"Get Tenant Information.",permalink:"/docs/api/v2024/get-tenant"}},d={},m=[];function u(e){const t={p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"API for reading tenant details."}),"\n","\n",(0,r.jsx)(i.Z,{items:(0,c.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(667294),a=n(490512),i=n(476828),c=n(370393),o=n(585597),l=n(935096),s=n(633084),d=n(555199);const m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),p=n(921702);function f({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,a.Z)("card padding--lg",m.cardContainer)},t)}function h({href:e,icon:t,title:n,description:i}){return r.createElement(f,{href:e},r.createElement(d.default,{as:"h2",className:(0,a.Z)("text--truncate",m.cardTitle),title:n},t," ",n),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",m.cardDescription),title:i},i))}function v({item:e}){var t;const n=(0,i.LM)(e),a=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,s.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(h,{href:n,icon:r.createElement(u.G,{icon:p.cC_,className:m.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function g({item:e}){var t,n;const a=(0,l.Z)(e.href)?r.createElement(u.G,{icon:p.FL8,className:m.docCardIcon}):r.createElement(u.G,{icon:p.wlW,className:m.docCardIcon}),c=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(h,{href:e.href,icon:a,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function b({item:e}){switch(e.type){case"link":return r.createElement(g,{item:e});case"category":return r.createElement(v,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var E=Object.defineProperty,y=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))_.call(t,n)&&w(e,n,t[n]);if(y)for(var n of y(t))N.call(t,n)&&w(e,n,t[n]);return e};function k({className:e}){const t=(0,i.jA)();return r.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:n}=e;if(!t)return r.createElement(k,T({},e));const c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}}}]);