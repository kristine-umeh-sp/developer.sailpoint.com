"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[91644],{656261:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=i(785893),r=i(511151),n=i(841282),l=i(476828);const a={id:"guides",title:"Rule Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_position:1,sidebar_class_name:"Rules",keywords:["rules","guides"],description:"Rule Guides",slug:"/extensibility/rules/guides",tags:["Rules","Guides"]},o=void 0,c={id:"extensibility/rules/guides/guides",title:"Rule Guides",description:"Rule Guides",source:"@site/docs/extensibility/rules/guides/index.md",sourceDirName:"extensibility/rules/guides",slug:"/extensibility/rules/guides",permalink:"/docs/extensibility/rules/guides",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/guides/index.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"},{inline:!0,label:"Guides",permalink:"/docs/tags/guides"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:1,frontMatter:{id:"guides",title:"Rule Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_position:1,sidebar_class_name:"Rules",keywords:["rules","guides"],description:"Rule Guides",slug:"/extensibility/rules/guides",tags:["Rules","Guides"]},sidebar:"openApiSidebar",previous:{title:"Rules",permalink:"/docs/extensibility/rules"},next:{title:"Your First Rule",permalink:"/docs/extensibility/rules/guides/your-first-rule"}},d={},u=[];function m(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Not sure how to use rules yet? Read these guides to learn how to use rules and get started!"}),"\n","\n",(0,s.jsx)(n.Z,{items:(0,l.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},841282:(e,t,i)=>{i.d(t,{Z:()=>k});var s=i(667294),r=i(490512),n=i(476828),l=i(370393),a=i(585597),o=i(935096),c=i(633084),d=i(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=i(799603),p=i(921702);function g({href:e,children:t}){return s.createElement(l.Z,{href:e,className:(0,r.Z)("card padding--lg",u.cardContainer)},t)}function b({href:e,icon:t,title:i,description:n}){return s.createElement(g,{href:e},s.createElement(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:i},t," ",i),n&&s.createElement("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:n},n))}function f({item:e}){var t;const i=(0,n.LM)(e),r=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?s.createElement(b,{href:i,icon:s.createElement(m.G,{icon:p.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function y({item:e}){var t,i;const r=(0,o.Z)(e.href)?s.createElement(m.G,{icon:p.FL8,className:u.docCardIcon}):s.createElement(m.G,{icon:p.wlW,className:u.docCardIcon}),l=(0,n.xz)(null!=(t=e.docId)?t:void 0);return s.createElement(b,{href:e.href,icon:r,title:e.label,description:(null!=(i=e.description)?i:"<Heading"!=(null==l?void 0:l.description)&&"<span"!=(null==l?void 0:l.description))?null==l?void 0:l.description:e.label})}function h({item:e}){switch(e.type){case"link":return s.createElement(y,{item:e});case"category":return s.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var x=Object.defineProperty,v=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,w=(e,t,i)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,G=(e,t)=>{for(var i in t||(t={}))_.call(t,i)&&w(e,i,t[i]);if(v)for(var i of v(t))E.call(t,i)&&w(e,i,t[i]);return e};function N({className:e}){const t=(0,n.jA)();return s.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:i}=e;if(!t)return s.createElement(N,G({},e));const l=(0,n.MN)(t);return s.createElement("section",{className:(0,r.Z)("row",i)},l.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(h,{item:e})))))}}}]);