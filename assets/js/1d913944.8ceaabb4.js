"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45689],{366077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var i=r(785893),s=r(511151),n=r(841282),d=r(476828);const c={id:"triggers",title:"Triggers",description:"Triggers",custom_edit_url:null},a=void 0,l={id:"api/beta/triggers",title:"Triggers",description:"Triggers",source:"@site/docs/api/beta/triggers.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/triggers",permalink:"/docs/api/beta/triggers",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"triggers",title:"Triggers",description:"Triggers",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Delete a transform",permalink:"/docs/api/beta/delete-transform"},next:{title:"List Triggers",permalink:"/docs/api/beta/list-triggers"}},o={},h=[{value:"Available Event Triggers",id:"available-event-triggers",level:2},{value:"Early Access Event Triggers",id:"early-access-event-triggers",level:2}];function g(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Event Triggers provide real-time updates to changes in Identity Security Cloud so you can take action as soon as an event occurs, rather than poll an API endpoint for updates. Identity Security Cloud provides a user interface within the admin console to create and manage trigger subscriptions.  These endpoints allow for programatically creating and managing trigger subscriptions."}),"\n",(0,i.jsx)(t.p,{children:"There are two types of event triggers:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"FIRE_AND_FORGET"}),": This trigger type will send a payload to each subscriber without needing a response.  Each trigger of this type has a limit of ",(0,i.jsx)(t.strong,{children:"50 subscriptions"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"REQUEST_RESPONSE"}),": This trigger type will send a payload to a subscriber and expect a response back.  Each trigger of this type may only have ",(0,i.jsx)(t.strong,{children:"one subscription"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"available-event-triggers",children:"Available Event Triggers"}),"\n",(0,i.jsx)(t.p,{children:"Production ready event triggers that are available in all tenants."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"ID"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Trigger condition"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval/",children:"Access Request Dynamic Approval"})}),(0,i.jsxs)(t.td,{children:["idn",":access-request-dynamic-approver"]}),(0,i.jsx)(t.td,{children:"REQUEST_RESPONSE"}),(0,i.jsx)(t.td,{children:"After an access request is submitted. Expects the subscriber to respond with the ID of an identity or workgroup to add to the approval workflow."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision/",children:"Access Request Decision"})}),(0,i.jsxs)(t.td,{children:["idn",":access-request-post-approval"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After an access request is approved."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/",children:"Access Request Submitted"})}),(0,i.jsxs)(t.td,{children:["idn",":access-request-pre-approval"]}),(0,i.jsx)(t.td,{children:"REQUEST_RESPONSE"}),(0,i.jsx)(t.td,{children:"After an access request is submitted. Expects the subscriber to respond with an approval decision."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-aggregation-completed/",children:"Account Aggregation Completed"})}),(0,i.jsxs)(t.td,{children:["idn",":account-aggregation-completed"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After an account aggregation completed, terminated, failed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Account Attributes Changed"}),(0,i.jsxs)(t.td,{children:["idn",":account-attributes-changed"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After an account aggregation, and one or more account attributes have changed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Account Correlated"}),(0,i.jsxs)(t.td,{children:["idn",":account-correlated"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After an account is added to an identity."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Accounts Collected for Aggregation"}),(0,i.jsxs)(t.td,{children:["idn",":aggregation-accounts-collected"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"New, changed, and deleted accounts have been gathered during an aggregation and are being processed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Account Uncorrelated"}),(0,i.jsxs)(t.td,{children:["idn",":account-uncorrelated"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After an account is removed from an identity."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Campaign Activated"}),(0,i.jsxs)(t.td,{children:["idn",":campaign-activated"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a campaign is activated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Campaign Ended"}),(0,i.jsxs)(t.td,{children:["idn",":campaign-ended"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a campaign ends."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Campaign Generated"}),(0,i.jsxs)(t.td,{children:["idn",":campaign-generated"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a campaign finishes generating."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Certification Signed Off"}),(0,i.jsxs)(t.td,{children:["idn",":certification-signed-off"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a certification is signed off by its reviewer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/account-aggregation-completed/",children:"Identity Attributes Changed"})}),(0,i.jsxs)(t.td,{children:["idn",":identity-attributes-changed"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After One or more identity attributes changed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-created/",children:"Identity Created"})}),(0,i.jsxs)(t.td,{children:["idn",":identity-created"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After an identity is created."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed/",children:"Provisioning Action Completed"})}),(0,i.jsxs)(t.td,{children:["idn",":post-provisioning"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a provisioning action completed on a source."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/scheduled-search/",children:"Scheduled Search"})}),(0,i.jsxs)(t.td,{children:["idn",":saved-search-complete"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a scheduled search completed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-created/",children:"Source Created"})}),(0,i.jsxs)(t.td,{children:["idn",":source-created"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a source is created."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-deleted/",children:"Source Deleted"})}),(0,i.jsxs)(t.td,{children:["idn",":source-deleted"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a source is deleted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-updated/",children:"Source Updated"})}),(0,i.jsxs)(t.td,{children:["idn",":source-updated"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After configuration changes have been made to a source."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/va-cluster-status-change/",children:"VA Cluster Status Change"})}),(0,i.jsxs)(t.td,{children:["idn",":va-cluster-status-change"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After the status of a VA cluster has changed."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"early-access-event-triggers",children:"Early Access Event Triggers"}),"\n",(0,i.jsx)(t.p,{children:"Triggers that are in-development and not ready for production use.  Please contact support to enable these triggers in your tenant."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"ID"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Trigger condition"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/identity-deleted/",children:"Identity Deleted"})}),(0,i.jsxs)(t.td,{children:["idn",":identity-deleted"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After an identity is deleted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-created/",children:"Source Account Created"})}),(0,i.jsxs)(t.td,{children:["idn",":source-account-created"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a source account is created."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-deleted/",children:"Source Account Deleted"})}),(0,i.jsxs)(t.td,{children:["idn",":source-account-deleted"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a source account is deleted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/source-account-updated/",children:"Source Account Updated"})}),(0,i.jsxs)(t.td,{children:["idn",":source-account-updated"]}),(0,i.jsx)(t.td,{children:"FIRE_AND_FORGET"}),(0,i.jsx)(t.td,{children:"After a source account is changed."})]})]})]}),"\n","\n",(0,i.jsx)(n.Z,{items:(0,d.jA)().items})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>T});var i=r(667294),s=r(490512),n=r(476828),d=r(370393),c=r(585597),a=r(935096),l=r(633084),o=r(555199);const h={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var g=r(799603),x=r(921702);function p({href:e,children:t}){return i.createElement(d.Z,{href:e,className:(0,s.Z)("card padding--lg",h.cardContainer)},t)}function u({href:e,icon:t,title:r,description:n}){return i.createElement(p,{href:e},i.createElement(o.default,{as:"h2",className:(0,s.Z)("text--truncate",h.cardTitle),title:r},t," ",r),n&&i.createElement("p",{className:(0,s.Z)("text--truncate",h.cardDescription),title:n},n))}function j({item:e}){var t;const r=(0,n.LM)(e),s=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?i.createElement(u,{href:r,icon:i.createElement(g.G,{icon:x.cC_,className:h.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:s(e.items.length)}):null}function m({item:e}){var t,r;const s=(0,a.Z)(e.href)?i.createElement(g.G,{icon:x.FL8,className:h.docCardIcon}):i.createElement(g.G,{icon:x.wlW,className:h.docCardIcon}),d=(0,n.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(u,{href:e.href,icon:s,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==d?void 0:d.description)&&"<span"!=(null==d?void 0:d.description))?null==d?void 0:d.description:e.label})}function f({item:e}){switch(e.type){case"link":return i.createElement(m,{item:e});case"category":return i.createElement(j,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&A(e,r,t[r]);if(E)for(var r of E(t))y.call(t,r)&&A(e,r,t[r]);return e};function R({className:e}){const t=(0,n.jA)();return i.createElement(T,{items:t.items,className:e})}function T(e){const{items:t,className:r}=e;if(!t)return i.createElement(R,_({},e));const d=(0,n.MN)(t);return i.createElement("section",{className:(0,s.Z)("row",r)},d.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}}}]);