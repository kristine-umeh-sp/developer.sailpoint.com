"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[15634],{914801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(785893),r=a(511151);const s={id:"source-data-read",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Read source data.",slug:"/connectivity/saas-connectivity/commands/source-data-read",tags:["Connectivity","Connector Command"]},o=void 0,c={id:"connectivity/saas-connectivity/connector-commands/source-data-read",title:"Source Data Read",description:"Read source data.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/source-data-read.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/source-data-read",permalink:"/docs/connectivity/saas-connectivity/commands/source-data-read",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/source-data-read.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,frontMatter:{id:"source-data-read",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Read source data.",slug:"/connectivity/saas-connectivity/commands/source-data-read",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Source Data Discover",permalink:"/docs/connectivity/saas-connectivity/commands/source-data-discover"},next:{title:"Test Connection",permalink:"/docs/connectivity/saas-connectivity/commands/test-connection"}},i={},d=[{value:"Example StdSourceDataReadInput",id:"example-stdsourcedatareadinput",level:3},{value:"Example StdSourceDataReadOutput",id:"example-stdsourcedatareadoutput",level:3},{value:"Description",id:"description",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"StdSourceDataReadInput"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"StdSourceDataReadOutput"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-stdsourcedatareadinput",children:"Example StdSourceDataReadInput"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'{\n    "sourceDataKey": "name",\n    "queryInput": {\n        "query": "fetchAll",\n        "limit": 10\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"example-stdsourcedatareadoutput",children:"Example StdSourceDataReadOutput"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"[\n  {\n    key: 'id',\n    label: 'Id',\n    subLabel: 'Airtable Base Id',\n  },\n  {\n    key: 'name',\n    label: 'Name',\n    subLabel: 'Airtable Source Table Name',\n  },\n];\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Use the source data read command to query a source in Identity Security Cloud and return a set of data. This data is typically used to populate a dropdown menu for selection purposes. This functionality is typically useful for Identity Security Cloud forms, but it can be used for any type of implementation that requires you to get other information from a source, information that is not normally retrieved from identites or entitlements."}),"\n",(0,n.jsxs)(t.p,{children:["To use this command, you must specify this value in the ",(0,n.jsx)(t.code,{children:"commands"})," array: ",(0,n.jsx)(t.code,{children:"std:source-data:read"})]}),"\n",(0,n.jsxs)(t.p,{children:["This is a simple example of the source data read command. It is implemented to retrieve the base ID name. The ",(0,n.jsx)(t.code,{children:"sourceDataKey"})," is required, the ",(0,n.jsx)(t.code,{children:"source data read"})," command should return it."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:".stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {\n    if (input.sourceDataKey === 'id') {\n        res.send([{\n            key: airtable.getAirtableBase(),\n            label: airtable.getAirtableBase(),\n            subLabel: 'Airtable Base Id'\n        }])\n    } else {\n        throw new ConnectorError('invalid/unsupported source data key')\n    }\n})\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can optionally use ",(0,n.jsx)(t.code,{children:"input.queryInput.query"})," to make the list searchable. One way you could do this is to import a tool like ",(0,n.jsx)(t.a,{href:"https://github.com/AlaSQL/alasql",children:"alasql"})," and allow the user to implement a search on the dataset. This example from Airtable shows how you could use the source data read command to get accounts and allow a search to be performed with the Airtable API:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:".stdSourceDataRead(async (context: Context, input: StdSourceDataReadInput, res: Response<StdSourceDataReadOutput>) => {\n    if (input.sourceDataKey === 'id') {\n        res.send([{\n            key: airtable.getAirtableBase(),\n            label: airtable.getAirtableBase(),\n            subLabel: 'Airtable Base Id'\n        }])\n    } else if (input.sourceDataKey === 'accounts' && input.queryInput?.query) {\n        let accounts = await airtable.queryAccounts(input.queryInput.query)\n        let result: StdSourceDataReadOutput = []\n        for (let account of accounts) {\n            result.push({ key: account.id, label: account.displayName, subLabel: account.email })\n        }\n        res.send(result)\n    } else {\n        throw new ConnectorError('invalid/unsupported source data key')\n    }\n})\n\n// airtable.ts implementation of queryAccounts:\n\nasync queryAccounts(query: string): Promise<AirtableAccount[]> {\n    return this.airTableBase('Users').select({\n        view: 'Grid view',\n        filterByFormula: `SEARCH(LOWER(\"${query}\"), LOWER(displayName)) > 0`\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray\n    }).catch(err => {\n        throw new ConnectorError('error while getting accounts: ' + err)\n    })\n}\n\n"})}),"\n",(0,n.jsx)(t.p,{children:'Now, if the source system sends a command like the following, the system will only get results that contain the name "Adam":'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'    "type": "std:source-data:read",\n    "input": {\n        "queryInput": {\n            "query": "Adam"\n        }\n    },\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);