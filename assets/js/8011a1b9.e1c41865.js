"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[58041],{332376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(785893),a=n(511151);const s={id:"identity-context",title:"Identity Attribute Context in Transforms",pagination_label:"Identity Attribute Context",sidebar_label:"Identity Attribute Context",sidebar_class_name:"identityContextTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Examples on how you might use the identity attribute context.",sidebar_position:5,slug:"/extensibility/transforms/guides/identity-context-examples",tags:["Transforms","Guides","identity"]},r=void 0,o={id:"extensibility/transforms/guides/identity-context",title:"Identity Attribute Context in Transforms",description:"Examples on how you might use the identity attribute context.",source:"@site/docs/extensibility/transforms/guides/identity-context.md",sourceDirName:"extensibility/transforms/guides",slug:"/extensibility/transforms/guides/identity-context-examples",permalink:"/docs/extensibility/transforms/guides/identity-context-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/guides/identity-context.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Guides",permalink:"/docs/tags/guides"},{inline:!0,label:"identity",permalink:"/docs/tags/identity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:5,frontMatter:{id:"identity-context",title:"Identity Attribute Context in Transforms",pagination_label:"Identity Attribute Context",sidebar_label:"Identity Attribute Context",sidebar_class_name:"identityContextTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Examples on how you might use the identity attribute context.",sidebar_position:5,slug:"/extensibility/transforms/guides/identity-context-examples",tags:["Transforms","Guides","identity"]},sidebar:"openApiSidebar",previous:{title:"Lifecycle State Transform",permalink:"/docs/extensibility/transforms/guides/lifecycle-state-transform"},next:{title:"Operations",permalink:"/docs/extensibility/transforms/operations"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2},{value:"Get the ID of the identity&#39;s manager",id:"get-the-id-of-the-identitys-manager",level:3},{value:"Get a custom attribute of the identity&#39;s manager",id:"get-a-custom-attribute-of-the-identitys-manager",level:3},{value:"Get manager status of the identity",id:"get-manager-status-of-the-identity",level:3},{value:"Get an identity&#39;s accounts",id:"get-an-identitys-accounts",level:3},{value:"Get details of an account on a specified application/source",id:"get-details-of-an-account-on-a-specified-applicationsource",level:3},{value:"Get a comma separated list of account names from an application/source",id:"get-a-comma-separated-list-of-account-names-from-an-applicationsource",level:3},{value:"Notes",id:"notes",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Transforms ship with the Apache Velocity template engine, which allows a transform to reference, transform, and render values passed into the transform context."}),"\n",(0,i.jsx)(t.p,{children:"The following variables are available to the Apache Velocity template engine when a transform is used to source an identity attribute:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"identity"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Identity"}),(0,i.jsx)(t.td,{children:"This is the identity the attribute promotion is performed on."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attributeDefinition"}),(0,i.jsx)(t.td,{children:"sailpoint.object.AttributeDefinition"}),(0,i.jsx)(t.td,{children:"This is the definition of the attribute being promoted."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"oldValue"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"This is the attribute's previous value."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["For available methods on these objects see our ",(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/extensibility/rules/java-docs",children:"Rules Java Docs"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"These examples will help you learn what you can do with the identity context."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You can use ",(0,i.jsx)(t.code,{children:"$identity"}),", as well as the other variables, in all transform operations."]})}),"\n",(0,i.jsx)(t.h3,{id:"get-the-id-of-the-identitys-manager",children:"Get the ID of the identity's manager"}),"\n",(0,i.jsxs)(t.p,{children:["You must use a ",(0,i.jsx)(t.code,{children:"firstValid"}),". If the identity does not have a manager, ",(0,i.jsx)(t.code,{children:"getManager()"})," returns null."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "firstValid",\n  "attributes": {\n    "values": [\n      "$identity.getManager().getId()",\n      "no manager exists"\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"get-a-custom-attribute-of-the-identitys-manager",children:"Get a custom attribute of the identity's manager"}),"\n",(0,i.jsxs)(t.p,{children:["You must use a ",(0,i.jsx)(t.code,{children:"firstValid"}),". If the identity does not have a manager, ",(0,i.jsx)(t.code,{children:"getManager()"})," returns null."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "firstValid",\n  "attributes": {\n    "values": [\n      "$identity.getManager().getStringAttribute(\'country\')",\n      "no manager exists"\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"get-manager-status-of-the-identity",children:"Get manager status of the identity"}),"\n",(0,i.jsx)(t.p,{children:"This example would get the status of whether or not the identity is currently actually a manager."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "static",\n  "attributes": {\n    "value": "$identity.getManagerStatus()"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"get-an-identitys-accounts",children:"Get an identity's accounts"}),"\n",(0,i.jsx)(t.p,{children:"This example would get an identity's various associated source accounts."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "static",\n  "attributes": {\n    "value": "$identity.getLinks()"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"get-details-of-an-account-on-a-specified-applicationsource",children:"Get details of an account on a specified application/source"}),"\n",(0,i.jsxs)(t.p,{children:["The below examples pull in the SailPoint-generated account ID for the first account an identity has on a source, but you can replace ",(0,i.jsx)(t.code,{children:"id"})," with the name of the attribute you're interested in retrieving."]}),"\n",(0,i.jsx)(t.p,{children:"To retrieve an attribute from an identity's account in a specific source, by Source ID:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "firstValid",\n    "attributes": {\n        "values": [\n            {\n                "type": "static",\n                "attributes": {\n                    "value": "$identity.getLinksByAppIdOrName("2c918088814e6a610181686b56977fa8",null\\")[0].id"\n                }\n            },\n            null\n        ],\n        "ignoreErrors": true\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"To retrieve an attribute from an identity's account in a specific source, by Source Name:"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Note the ",(0,i.jsx)(t.code,{children:"[source]"})," at the end of the Source Name in the below example. This is required for all sources other than the internal IdentityNow source."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "firstValid",\n    "attributes": {\n        "values": [\n            {\n                "type": "static",\n                "attributes": {\n                    "value": "$identity.getLinksByAppIdOrName(null,\\"Active Directory [source]\\")[0].id"\n                }\n            },\n            null\n        ],\n        "ignoreErrors": true\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"get-a-comma-separated-list-of-account-names-from-an-applicationsource",children:"Get a comma separated list of account names from an application/source"}),"\n",(0,i.jsx)(t.p,{children:"This is the velocity logic of the transform:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'/* Loop through accounts returned from get accounts by application id */\n#foreach($account in $identity.getLinksByAppIdOrName("2c918088814e6a610181686b56977fa8",null))\n    #if($foreach.index + 1 != $identity.getLinks().size()) /* If we are not on the last item, include a comma */\n        $account.getNativeIdentity(),\n    #else\n        $account.getNativeIdentity()\n    #end\n#end\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "static",\n  "attributes": {\n    "value": "#foreach($account in $identity.getLinksByAppIdOrName(\\"2c918088814e6a610181686b56977fa8\\",null))#if($foreach.index + 1 != $identity.getLinks().size())$account.getNativeIdentity(),#else$account.getNativeIdentity()#end#end"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"If you assign a variable with the identity attribute context, doing so will cast the type to a string."})}),"\n",(0,i.jsx)(t.p,{children:"For example, you may do this if you wanted to assign the identity's manager object to a variable and then get additional data from it."}),"\n",(0,i.jsx)(t.admonition,{title:"Invalid",type:"warning",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "static",\n  "attributes": {\n    "manager": "$identity.getManager()",\n    "value": "$manager.getStringAttribute(\'country\')"\n  }\n}\n'})})}),"\n",(0,i.jsx)(t.admonition,{title:"Valid",type:"tip",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "type": "static",\n  "attributes": {\n    "managerCountry": "$identity.getManager().getStringAttribute(\'country\')",\n    "value": "$managerCountry"\n  }\n}\n'})})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);