"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[58853],{541151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>r});var c=n(785893),o=n(511151);const i={id:"account-delete",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","account delete"],description:"Remove account from a source.",slug:"/connectivity/saas-connectivity/commands/account-delete",tags:["Connectivity","Connector Command"]},a=void 0,s={id:"connectivity/saas-connectivity/connector-commands/account-delete",title:"Account Delete",description:"Remove account from a source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/account-delete.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/account-delete",permalink:"/docs/connectivity/saas-connectivity/commands/account-delete",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/account-delete.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,frontMatter:{id:"account-delete",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","account delete"],description:"Remove account from a source.",slug:"/connectivity/saas-connectivity/commands/account-delete",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Create",permalink:"/docs/connectivity/saas-connectivity/commands/account-create"},next:{title:"Account Disable",permalink:"/docs/connectivity/saas-connectivity/commands/account-disable"}},l={},r=[{value:"Example StdAccountDeleteInput",id:"example-stdaccountdeleteinput",level:3},{value:"Example StdAccountDeleteOutput",id:"example-stdaccountdeleteoutput",level:3},{value:"Description",id:"description",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,c.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountDeleteInput"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountDeleteOutput"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountdeleteinput",children:"Example StdAccountDeleteInput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountdeleteoutput",children:"Example StdAccountDeleteOutput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"{\n}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"The account delete command sends one attribute from ISC, the identity to delete. This can be passed to your connector to delete the account from the source system."}),"\n",(0,c.jsxs)(t.p,{children:["Enable account delete in ISC through a BeforeProvisioning rule. The connector honors whichever operation the provisioning plan sends. For more information, see the ",(0,c.jsx)(t.a,{href:"https://community.sailpoint.com/t5/Identity-Security-Cloud-Articles/Identity-Security-Cloud-Rule-Guide/ta-p/76665",children:"documentation"})," and an ",(0,c.jsx)(t.a,{href:"https://community.sailpoint.com/t5/Identity-Security-Cloud-Wiki/Identity-Security-Cloud-Rule-Guide-Before-Provisioning-Rule/ta-p/77415",children:"example implementation"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["To use this command, you must specify this value in the ",(0,c.jsx)(t.code,{children:"commands"})," array: ",(0,c.jsx)(t.code,{children:"std:account:delete"})]}),"\n",(0,c.jsx)(t.p,{children:"The following snippet shows an example of account delete command implementation:"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts",children:"index.ts"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:".stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {\n    const account = await airtable.getAccount(input.key)\n    res.send(await airtable.deleteAccount(account.airtableId))\n})\n"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts",children:"airtable.ts"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"async deleteAccount(airTableid: string): Promise<Record<string, never>> {\n    return this.airTableBase('Users').destroy(airTableid,\n    ).then(() => {\n        return {}\n    }).catch(err => {\n        throw new ConnectorError('error while deleting account: ' + err)\n    })\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);