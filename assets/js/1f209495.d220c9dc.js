"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36971],{924120:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(785893),c=n(511151);const i={id:"test-connection-customizer",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Intercept the test connection command.",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",tags:["Connectivity","Connector Command"]},s=void 0,a={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection-customizer",title:"Test Connection",description:"Intercept the test connection command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/test-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,frontMatter:{id:"test-connection-customizer",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Intercept the test connection command.",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Source Data Read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-read"},next:{title:"Full Example",permalink:"/docs/connectivity/saas-connectivity/customizers/example"}},r={},d=[{value:"Overview",id:"overview",level:2},{value:"Example StdTestConnectionOutput",id:"example-stdtestconnectionoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before test-connection command",id:"before-test-connection-command",level:3},{value:"After test-connection command",id:"after-test-connection-command",level:3}];function l(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(e.p,{children:["Use these commands to intercept the ",(0,o.jsx)(e.a,{href:"../../commands/test-connection",children:"Test-Connection"})," command."]}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,o.jsx)(e.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"Input"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:"undefined"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"Output"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:"StdTestConnectionOutput"})]})]})]}),"\n",(0,o.jsx)(e.h3,{id:"example-stdtestconnectionoutput",children:"Example StdTestConnectionOutput"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"{\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(e.h3,{id:"before-test-connection-command",children:"Before test-connection command"}),"\n",(0,o.jsx)(e.p,{children:"Use this logic to implement the command:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"    .beforeStdTestConnection(async (context: Context, input: undefined) => {\n        logger.info('Running before test connection')\n    })\n"})}),"\n",(0,o.jsx)(e.p,{children:"There is no input, so you cannot mutate any data. However, you can make web request calls or perform any type of logging or logic before calling the connector."}),"\n",(0,o.jsx)(e.h3,{id:"after-test-connection-command",children:"After test-connection command"}),"\n",(0,o.jsx)(e.p,{children:"Use this logic to implement the command:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"    .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {\n        logger.info('Running after test connection')\n        return output\n    })\n"})}),"\n",(0,o.jsx)(e.p,{children:"The output datatype is always an empty object handed down from the connector."})]})}function m(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}}}]);