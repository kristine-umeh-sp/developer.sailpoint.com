"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92388],{867861:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(785893),r=i(511151),a=i(841282),c=i(476828);const o={id:"applications",title:"Applications",description:"Applications",custom_edit_url:null},l=void 0,s={id:"api/iiq/applications",title:"Applications",description:"Applications",source:"@site/docs/api/iiq/applications.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/applications",permalink:"/docs/api/iiq/applications",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"applications",title:"Applications",description:"Applications",custom_edit_url:null},sidebar:"iiqApiSideBar",previous:{title:"Returns an Alert resource based on id.",permalink:"/docs/api/iiq/get-alert-by-id"},next:{title:"Returns all Application resources.",permalink:"/docs/api/iiq/get-applications"}},p={},d=[];function u(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Alert object, a generic real time event processing object."}),"\n","\n",(0,n.jsx)(a.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},841282:(e,t,i)=>{i.d(t,{Z:()=>C});var n=i(667294),r=i(490512),a=i(476828),c=i(370393),o=i(585597),l=i(935096),s=i(633084),p=i(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=i(799603),m=i(921702);function f({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,r.Z)("card padding--lg",d.cardContainer)},t)}function h({href:e,icon:t,title:i,description:a}){return n.createElement(f,{href:e},n.createElement(p.default,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i},t," ",i),a&&n.createElement("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:a},a))}function g({item:e}){var t;const i=(0,a.LM)(e),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,s.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?n.createElement(h,{href:i,icon:n.createElement(u.G,{icon:m.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:r(e.items.length)}):null}function b({item:e}){var t,i;const r=(0,l.Z)(e.href)?n.createElement(u.G,{icon:m.FL8,className:d.docCardIcon}):n.createElement(u.G,{icon:m.wlW,className:d.docCardIcon}),c=(0,a.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(h,{href:e.href,icon:r,title:e.label,description:(null!=(i=e.description)?i:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function v({item:e}){switch(e.type){case"link":return n.createElement(b,{item:e});case"category":return n.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var E=Object.defineProperty,y=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,t,i)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,_=(e,t)=>{for(var i in t||(t={}))N.call(t,i)&&w(e,i,t[i]);if(y)for(var i of y(t))j.call(t,i)&&w(e,i,t[i]);return e};function A({className:e}){const t=(0,a.jA)();return n.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:i}=e;if(!t)return n.createElement(A,_({},e));const c=(0,a.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",i)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}}}]);