"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[65572],{842790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=n(785893),r=n(511151),a=n(841282),c=n(476828);const o={id:"iai-recommendations",title:"IAI Recommendations",description:"IAI Recommendations",custom_edit_url:null},s=void 0,l={id:"api/beta/iai-recommendations",title:"IAI Recommendations",description:"IAI Recommendations",source:"@site/docs/api/beta/iai-recommendations.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/iai-recommendations",permalink:"/docs/api/beta/iai-recommendations",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"iai-recommendations",title:"IAI Recommendations",description:"IAI Recommendations",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Identity Outliers List",permalink:"/docs/api/beta/get-peer-group-outliers"},next:{title:"Returns a Recommendation Based on Object",permalink:"/docs/api/beta/get-recommendations"}},d={},m=[];function u(e){return(0,i.jsx)(a.Z,{items:(0,c.jA)().items})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},841282:(e,t,n)=>{n.d(t,{Z:()=>j});var i=n(667294),r=n(490512),a=n(476828),c=n(370393),o=n(585597),s=n(935096),l=n(633084),d=n(555199);const m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),p=n(921702);function f({href:e,children:t}){return i.createElement(c.Z,{href:e,className:(0,r.Z)("card padding--lg",m.cardContainer)},t)}function b({href:e,icon:t,title:n,description:a}){return i.createElement(f,{href:e},i.createElement(d.default,{as:"h2",className:(0,r.Z)("text--truncate",m.cardTitle),title:n},t," ",n),a&&i.createElement("p",{className:(0,r.Z)("text--truncate",m.cardDescription),title:a},a))}function h({item:e}){var t;const n=(0,a.LM)(e),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?i.createElement(b,{href:n,icon:i.createElement(u.G,{icon:p.cC_,className:m.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function g({item:e}){var t,n;const r=(0,s.Z)(e.href)?i.createElement(u.G,{icon:p.FL8,className:m.docCardIcon}):i.createElement(u.G,{icon:p.wlW,className:m.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(b,{href:e.href,icon:r,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function I({item:e}){switch(e.type){case"link":return i.createElement(g,{item:e});case"category":return i.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&N(e,n,t[n]);if(E)for(var n of E(t))_.call(t,n)&&N(e,n,t[n]);return e};function C({className:e}){const t=(0,a.jA)();return i.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:n}=e;if(!t)return i.createElement(C,w({},e));const c=(0,a.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(I,{item:e})))))}}}]);