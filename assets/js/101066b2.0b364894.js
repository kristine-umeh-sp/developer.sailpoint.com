"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37285],{656041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=r(785893),n=r(511151),i=r(841282),a=r(476828);const c={id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},s=void 0,l={id:"api/beta/workflows",title:"Workflows",description:"Workflows",source:"@site/docs/api/beta/workflows.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/workflows",permalink:"/docs/api/beta/workflows",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Update Tenant-wide Reassignment Configuration settings",permalink:"/docs/api/beta/put-tenant-configuration"},next:{title:"Create Workflow",permalink:"/docs/api/beta/create-workflow"}},d={},u=[];function m(e){const t={a:"a",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Workflows allow administrators to create custom automation scripts directly within Identity Security Cloud.  These automation scripts respond to ",(0,o.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/#how-to-get-started-with-event-triggers",children:"event triggers"})," and perform a series of actions to perform tasks that are either too cumbersome or not available in the Identity Security Cloud UI.  Workflows can be configured via a graphical user interface within Identity Security Cloud, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST."]}),"\n","\n",(0,o.jsx)(i.Z,{items:(0,a.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>x});var o=r(667294),n=r(490512),i=r(476828),a=r(370393),c=r(585597),s=r(935096),l=r(633084),d=r(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=r(799603),p=r(921702);function f({href:e,children:t}){return o.createElement(a.Z,{href:e,className:(0,n.Z)("card padding--lg",u.cardContainer)},t)}function w({href:e,icon:t,title:r,description:i}){return o.createElement(f,{href:e},o.createElement(d.default,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:r},t," ",r),i&&o.createElement("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:i},i))}function h({item:e}){var t;const r=(0,i.LM)(e),n=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?o.createElement(w,{href:r,icon:o.createElement(m.G,{icon:p.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:n(e.items.length)}):null}function g({item:e}){var t,r;const n=(0,s.Z)(e.href)?o.createElement(m.G,{icon:p.FL8,className:u.docCardIcon}):o.createElement(m.G,{icon:p.wlW,className:u.docCardIcon}),a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return o.createElement(w,{href:e.href,icon:n,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==a?void 0:a.description)&&"<span"!=(null==a?void 0:a.description))?null==a?void 0:a.description:e.label})}function b({item:e}){switch(e.type){case"link":return o.createElement(g,{item:e});case"category":return o.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var k=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&C(e,r,t[r]);if(y)for(var r of y(t))E.call(t,r)&&C(e,r,t[r]);return e};function _({className:e}){const t=(0,i.jA)();return o.createElement(x,{items:t.items,className:e})}function x(e){const{items:t,className:r}=e;if(!t)return o.createElement(_,N({},e));const a=(0,i.MN)(t);return o.createElement("section",{className:(0,n.Z)("row",r)},a.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(b,{item:e})))))}}}]);