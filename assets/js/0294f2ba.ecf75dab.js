"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[2330],{217236:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(785893),n=t(511151),s=(t(871336),t(841282)),i=t(476828);const o={id:"secure-data-share",title:"Secure Data Share",pagination_label:"Secure Data Share",sidebar_label:"Secure Data Share",sidebar_position:6,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Share ISC data with Snowflake.",slug:"/reporting/secure-data-share",tags:["SecureDataShare"],hide_table_of_contents:!0},c="Secure Data Share",l={id:"reporting/secure-data-share/secure-data-share",title:"Secure Data Share",description:"Share ISC data with Snowflake.",source:"@site/docs/reporting/secure-data-share/index.md",sourceDirName:"reporting/secure-data-share",slug:"/reporting/secure-data-share",permalink:"/docs/reporting/secure-data-share",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/secure-data-share/index.md",tags:[{inline:!0,label:"SecureDataShare",permalink:"/docs/tags/secure-data-share"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:6,frontMatter:{id:"secure-data-share",title:"Secure Data Share",pagination_label:"Secure Data Share",sidebar_label:"Secure Data Share",sidebar_position:6,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Share ISC data with Snowflake.",slug:"/reporting/secure-data-share",tags:["SecureDataShare"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Access Intelligence Center Videos",permalink:"/docs/reporting/aic-videos"},next:{title:"Secure Data Share ER Diagram",permalink:"/docs/reporting/sds-er-diagram"}},d={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Data Synchronization SLA",id:"data-synchronization-sla",level:2},{value:"How to use SDS",id:"how-to-use-sds",level:2},{value:"Discuss",id:"discuss",level:2}];function h(e){const a={a:"a",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"secure-data-share",children:"Secure Data Share"}),"\n",(0,r.jsxs)(a.p,{children:["Secure Data Share (SDS) makes your SailPoint identity data available directly in your own ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com/financial-services/partner-solutions/snowflake/",children:"AWS Snowflake"})," account. The provided dataset comprises structured tables that include identity, audit event, entitlement, role, access profile, account, and application data. Secure Data Share is an alternative to SailPoint's ",(0,r.jsx)(a.a,{href:"https://documentation.sailpoint.com/saas/help/search/index.html",children:"Search"}),". SDS uses SQL as the query language, whereas Search uses the ",(0,r.jsx)(a.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html",children:"Elasticsearch Query Language"}),". SQL provides certain advantages over Elasticsearch: joining and aggregating data is easier in SQL, and the Snowflake interface has a built-in SQL explorer and allows you to download your search results in CSV format. SDS also allows you to connect your SailPoint data to your favorite data analytics tools, like ",(0,r.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-connect-snowflake",children:"PowerBI"})," and ",(0,r.jsx)(a.a,{href:"https://help.tableau.com/current/pro/desktop/en-us/examples_snowflake.htm",children:"Tableau"}),", further enhancing the reporting capabilities for your SailPoint data."]}),"\n",(0,r.jsxs)(a.p,{children:["If you would like to speak to a SailPoint representative about Secure Data Share, please ",(0,r.jsx)(a.a,{href:"https://calendly.com/jordan-mandernach/secure_data_share",children:"schedule a meeting here"}),"."]}),"\n",(0,r.jsx)("div",{class:"text--center",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Q-XZtjuv6XY?si=8o9qou1lEGsTx-Se",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,r.jsx)(a.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(a.p,{children:"Secure Data Share is an add-on for Identity Security Cloud. Please contact your sales representative to discuss your SDS options. You must also have an AWS Snowflake account so that SailPoint can synchronize your tenant data with your Snowflake instance."}),"\n",(0,r.jsx)(a.h2,{id:"data-synchronization-sla",children:"Data Synchronization SLA"}),"\n",(0,r.jsx)(a.p,{children:"Similar to Search, SDS has a synchronization service-level agreement (SLA) of 24 hours. This means it can take up to 24 hours for operational data in your tenant to be synchronized with your Snowflake database. SailPoint Search and SDS are two separate systems, and there is no guarantee on which service will receive updated data first. In some cases, operational data may appear in Search before SDS, and in other cases SDS may receive the data first."}),"\n",(0,r.jsx)(a.h2,{id:"how-to-use-sds",children:"How to use SDS"}),"\n",(0,r.jsxs)(a.p,{children:["For information on how to install and use SDS in your environment, see the documentation ",(0,r.jsx)(a.a,{href:"https://documentation.sailpoint.com/saas/help/secure_data_share/secure_data_share.html",children:"here"}),". Because SDS uses SQL as the query language, your tenant data is formatted into relational tables. To view the relationships between these tables, please see the following pages for the entity relationship (ER) diagrams that represent the data model."]}),"\n","\n",(0,r.jsx)(s.Z,{items:(0,i.jA)().items}),"\n",(0,r.jsx)(a.h2,{id:"discuss",children:"Discuss"}),"\n",(0,r.jsx)(a.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,r.jsxs)(a.p,{children:["To learn more about SDS and discuss it with SailPoint Developer Community members, go to the ",(0,r.jsx)(a.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function m(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},841282:(e,a,t)=>{t.d(a,{Z:()=>E});var r=t(667294),n=t(490512),s=t(476828),i=t(370393),o=t(585597),c=t(935096),l=t(633084),d=t(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var h=t(799603),m=t(921702);function p({href:e,children:a}){return r.createElement(i.Z,{href:e,className:(0,n.Z)("card padding--lg",u.cardContainer)},a)}function f({href:e,icon:a,title:t,description:s}){return r.createElement(p,{href:e},r.createElement(d.default,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:t},a," ",t),s&&r.createElement("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:s},s))}function S({item:e}){var a;const t=(0,s.LM)(e),n=function(){const{selectMessage:e}=(0,o.c)();return a=>e(a,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a}))}();return t?r.createElement(f,{href:t,icon:r.createElement(h.G,{icon:m.cC_,className:u.docCardIcon}),title:e.label,description:null!=(a=e.description)?a:n(e.items.length)}):null}function g({item:e}){var a,t;const n=(0,c.Z)(e.href)?r.createElement(h.G,{icon:m.FL8,className:u.docCardIcon}):r.createElement(h.G,{icon:m.wlW,className:u.docCardIcon}),i=(0,s.xz)(null!=(a=e.docId)?a:void 0);return r.createElement(f,{href:e.href,icon:n,title:e.label,description:(null!=(t=e.description)?t:"<Heading"!=(null==i?void 0:i.description)&&"<span"!=(null==i?void 0:i.description))?null==i?void 0:i.description:e.label})}function y({item:e}){switch(e.type){case"link":return r.createElement(g,{item:e});case"category":return r.createElement(S,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,k=(e,a,t)=>a in e?v(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,D=(e,a)=>{for(var t in a||(a={}))w.call(a,t)&&k(e,t,a[t]);if(b)for(var t of b(a))x.call(a,t)&&k(e,t,a[t]);return e};function j({className:e}){const a=(0,s.jA)();return r.createElement(E,{items:a.items,className:e})}function E(e){const{items:a,className:t}=e;if(!a)return r.createElement(j,D({},e));const i=(0,s.MN)(a);return r.createElement("section",{className:(0,n.Z)("row",t)},i.map(((e,a)=>r.createElement("article",{key:a,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},871336:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(667294),n=t(181581),s=t(725026);const i={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function o({children:e,diagram:a}){n.N.contentLoaded();const[t,o]=r.useState(0),[c,l]=r.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[d,u]=r.useState({x:0,y:0}),[h,m]=r.useState(!1);function p(e){e.screenX?(l({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:d.x,offsetY:d.y}),u({x:d.x,y:d.y})):(l({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:d.x,offsetY:d.y}),u({x:d.x,y:d.y}))}function f(e){l({cursor:"grab",clickX:0,clickY:0})}function S(e){"grabbing"===c.cursor&&(e.screenX?u({x:c.clickX-e.screenX+c.offsetX,y:c.clickY-e.screenY+c.offsetY}):u({x:c.clickX-e.changedTouches[0].screenX+c.offsetX,y:c.clickY-e.changedTouches[0].screenY+c.offsetY}))}let g,y;return r.useEffect((()=>{let e=!1;return setTimeout((()=>{e||m(!0)}),100),()=>{e=!0}})),!0===h?(y=r.createElement("div",null),g=r.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-d.y+"px",left:-d.x+"px",width:"calc(100% + "+t+"px)",maxHeight:"1000px"}},a)):(y=r.createElement("div",null,"Diagram Loading ..."),g=r.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-d.y+"px",left:-d.x+"px",width:"calc(100% + "+t+"px)",maxHeight:"1000px"}},a)),r.createElement("div",null,r.createElement("img",{className:i.zoomIn,onClick:e=>{o(t+300)},src:(0,s.default)("/icons/magnifying-glass-plus-regular.svg")}),r.createElement("img",{className:i.zoomIn,onClick:e=>function(e){o(0),l({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),u({x:0,y:0})}(e),src:(0,s.default)("/icons/house-regular.svg")}),r.createElement("img",{className:i.zoomIn,onClick:e=>{o(t-300)},src:(0,s.default)("/icons/magnifying-glass-minus-regular.svg")}),r.createElement("div",{style:{cursor:c.cursor},className:i.mermaidContainer,onMouseMove:e=>S(e),onTouchMove:e=>S(e),onMouseDown:e=>p(e),onTouchStart:e=>p(e),onMouseUp:e=>f(),onTouchEnd:e=>f(),onMouseLeave:e=>f()},y,g))}}}]);