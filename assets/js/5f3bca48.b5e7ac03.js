"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86088],{329449:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=i(785893),r=i(511151),c=i(841282),a=i(476828);const s={id:"public-identities",title:"Public Identities",description:"Public Identities",custom_edit_url:null},o=void 0,l={id:"api/v3/public-identities",title:"Public Identities",description:"Public Identities",source:"@site/docs/api/v3/public-identities.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/public-identities",permalink:"/docs/api/v3/public-identities",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"public-identities",title:"Public Identities",description:"Public Identities",custom_edit_url:null},sidebar:"isc_v3_sidebar",previous:{title:"Delete Personal Access Token",permalink:"/docs/api/v3/delete-personal-access-token"},next:{title:"Get a list of public identities",permalink:"/docs/api/v3/get-public-identities"}},d={},u=[];function p(e){const t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Use this API in conjunction with ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/public-identities-config/",children:"Public Identites Config"})," to enable non-administrators to view identities' publicly visible attributes.\nWith this functionality in place, non-administrators can view identity attributes other than the default attributes (email, lifecycle state, and manager), depending on which identity attributes their organization administrators have made public.\nThis can be helpful for access approvers, certification reviewers, managers viewing their direct reports' access, and source owners viewing their tasks."]}),"\n","\n",(0,n.jsx)(c.Z,{items:(0,a.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},841282:(e,t,i)=>{i.d(t,{Z:()=>k});var n=i(667294),r=i(490512),c=i(476828),a=i(370393),s=i(585597),o=i(935096),l=i(633084),d=i(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i(799603),m=i(921702);function f({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,r.Z)("card padding--lg",u.cardContainer)},t)}function b({href:e,icon:t,title:i,description:c}){return n.createElement(f,{href:e},n.createElement(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:i},t," ",i),c&&n.createElement("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:c},c))}function h({item:e}){var t;const i=(0,c.LM)(e),r=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?n.createElement(b,{href:i,icon:n.createElement(p.G,{icon:m.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function v({item:e}){var t,i;const r=(0,o.Z)(e.href)?n.createElement(p.G,{icon:m.FL8,className:u.docCardIcon}):n.createElement(p.G,{icon:m.wlW,className:u.docCardIcon}),a=(0,c.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(b,{href:e.href,icon:r,title:e.label,description:(null!=(i=e.description)?i:"<Heading"!=(null==a?void 0:a.description)&&"<span"!=(null==a?void 0:a.description))?null==a?void 0:a.description:e.label})}function g({item:e}){switch(e.type){case"link":return n.createElement(v,{item:e});case"category":return n.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var w=Object.defineProperty,y=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,_=(e,t,i)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,N=(e,t)=>{for(var i in t||(t={}))E.call(t,i)&&_(e,i,t[i]);if(y)for(var i of y(t))I.call(t,i)&&_(e,i,t[i]);return e};function j({className:e}){const t=(0,c.jA)();return n.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:i}=e;if(!t)return n.createElement(j,N({},e));const a=(0,c.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",i)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}}}]);