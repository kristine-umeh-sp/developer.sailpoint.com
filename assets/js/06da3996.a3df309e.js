"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[4701],{268100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var c=n(785893),a=n(511151);const o={id:"account-read-customizer",title:"Account Read",pagination_label:"Account Read",sidebar_label:"Account Read",keywords:["connectivity","connectors","Account Read"],description:"Intercept the account read command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-read",tags:["Connectivity","Connector Command"]},i=void 0,d={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-read-customizer",title:"Account Read",description:"Intercept the account read command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-read.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-read",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-read.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,frontMatter:{id:"account-read-customizer",title:"Account Read",pagination_label:"Account Read",sidebar_label:"Account Read",keywords:["connectivity","connectors","Account Read"],description:"Intercept the account read command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-read",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account List",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-list"},next:{title:"Account Unlock",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-unlock"}},s={},r=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountReadInput",id:"example-stdaccountreadinput",level:3},{value:"Example StdAccountReadOutput",id:"example-stdaccountreadoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-read command",id:"before-account-read-command",level:3},{value:"After account-read command",id:"after-account-read-command",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsxs)(t.p,{children:["Use these commands to intercept the ",(0,c.jsx)(t.a,{href:"../../commands/account-read",children:"account-read"})," command."]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,c.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountReadInput"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountReadOutput"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountreadinput",children:"Example StdAccountReadInput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountreadoutput",children:"Example StdAccountReadOutput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,c.jsx)(t.h3,{id:"before-account-read-command",children:"Before account-read command"}),"\n",(0,c.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"    .beforeStdAccountRead(async (context: Context, input: StdAccountReadInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,c.jsx)(t.h3,{id:"after-account-read-command",children:"After account-read command"}),"\n",(0,c.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"    .afterStdAccountRead(async (context: Context, output: StdAccountReadOutput) => {\n        logger.info(`Running after account read for account ${output.identity}`)\n        return output\n    })\n"})}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}}}]);