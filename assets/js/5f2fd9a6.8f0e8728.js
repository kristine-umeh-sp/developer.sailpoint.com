"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[47057],{971226:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(785893),r=i(511151),a=i(841282),c=i(476828);const o={id:"application-discovery",title:"Application Discovery",description:"Application Discovery",custom_edit_url:null},l=void 0,s={id:"api/beta/application-discovery",title:"Application Discovery",description:"Application Discovery",source:"@site/docs/api/beta/application-discovery.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/application-discovery",permalink:"/docs/api/beta/application-discovery",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"application-discovery",title:"Application Discovery",description:"Application Discovery",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"List all user apps",permalink:"/docs/api/beta/list-all-user-apps"},next:{title:"Download CSV Template for Discovery",permalink:"/docs/api/beta/get-manual-discover-applications-csv-template"}},p={},d=[];function m(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Use this API to discover applications within your Okta connector and receive connector recommendations by manually uploading application names."}),"\n","\n",(0,n.jsx)(a.Z,{items:(0,c.jA)().items})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},841282:(e,t,i)=>{i.d(t,{Z:()=>j});var n=i(667294),r=i(490512),a=i(476828),c=i(370393),o=i(585597),l=i(935096),s=i(633084),p=i(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=i(799603),u=i(921702);function f({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,r.Z)("card padding--lg",d.cardContainer)},t)}function v({href:e,icon:t,title:i,description:a}){return n.createElement(f,{href:e},n.createElement(p.default,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i},t," ",i),a&&n.createElement("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:a},a))}function y({item:e}){var t;const i=(0,a.LM)(e),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,s.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?n.createElement(v,{href:i,icon:n.createElement(m.G,{icon:u.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function b({item:e}){var t,i;const r=(0,l.Z)(e.href)?n.createElement(m.G,{icon:u.FL8,className:d.docCardIcon}):n.createElement(m.G,{icon:u.wlW,className:d.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(v,{href:e.href,icon:r,title:e.label,description:(null!=(i=e.description)?i:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function h({item:e}){switch(e.type){case"link":return n.createElement(b,{item:e});case"category":return n.createElement(y,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,E=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,D=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,N=(e,t)=>{for(var i in t||(t={}))w.call(t,i)&&D(e,i,t[i]);if(E)for(var i of E(t))_.call(t,i)&&D(e,i,t[i]);return e};function C({className:e}){const t=(0,a.jA)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:i}=e;if(!t)return n.createElement(C,N({},e));const c=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",i)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}}}]);