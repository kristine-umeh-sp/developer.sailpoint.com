"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83636],{833064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(785893),s=t(511151);const r={id:"conditional",title:"Conditional",pagination_label:"Conditional",sidebar_label:"Conditional",sidebar_class_name:"conditional",keywords:["transforms","operations","conditional"],description:"Output different values depending on simple conditional logic.",slug:"/extensibility/transforms/operations/conditional",tags:["Transforms","Transform Operations"]},o=void 0,a={id:"extensibility/transforms/operations/conditional",title:"Conditional",description:"Output different values depending on simple conditional logic.",source:"@site/docs/extensibility/transforms/operations/conditional.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/conditional",permalink:"/docs/extensibility/transforms/operations/conditional",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/conditional.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,frontMatter:{id:"conditional",title:"Conditional",pagination_label:"Conditional",sidebar_label:"Conditional",sidebar_class_name:"conditional",keywords:["transforms","operations","conditional"],description:"Output different values depending on simple conditional logic.",slug:"/extensibility/transforms/operations/conditional",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Concatenation",permalink:"/docs/extensibility/transforms/operations/concatenation"},next:{title:"Date Compare",permalink:"/docs/extensibility/transforms/operations/date-compare"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:'Use the conditional transform to output different values depending on simple conditional logic. This is a convenient transform - the same capability can be implemented with a "static" transform, but this transform has greater simplicity and null-safe error checking.'}),"\n",(0,i.jsx)(n.admonition,{title:"Other Considerations",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The two operands within the transform cannot be null; if they are, an IllegalArgumentException is thrown."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"expression"}),' attribute must be "eq," or the transform will throw an IllegalArgumentException.']}),"\n",(0,i.jsx)(n.li,{children:'All attribute string values are case-sensitive, so differently cased strings (e.g., "engineering" and "Engineering") will not return as matched.'}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the ",(0,i.jsx)(n.code,{children:"type"})," and ",(0,i.jsx)(n.code,{children:"name"})," attributes, the conditional transform requires an ",(0,i.jsx)(n.code,{children:"expression"}),", a ",(0,i.jsx)(n.code,{children:"positiveCondition"}),", and a ",(0,i.jsx)(n.code,{children:"negativeCondition"}),". If the expression evaluates to false, the transform returns the negative condition; otherwise it returns the positive condition."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "expression": "foo eq foo",\n    "positiveCondition": "true",\n    "negativeCondition": "false"\n  },\n  "type": "conditional",\n  "name": "Conditional Transform"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Required Attributes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"type"})," - This must always be set to ",(0,i.jsx)(n.code,{children:"conditional"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"expression"})," - This comparison statement follows the structure of ",(0,i.jsx)(n.code,{children:"ValueA eq ValueB"})," where ",(0,i.jsx)(n.code,{children:"ValueA"})," and ",(0,i.jsx)(n.code,{children:"ValueB"})," are static strings or outputs of other transforms; the ",(0,i.jsx)(n.code,{children:"eq"})," operator is the only valid comparison."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"positiveCondition"})," - This is the output of the transform if the expression evaluates to true."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"negativeCondition"})," - This is the output of the transform if the expression evaluates to false."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Optional Attributes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["This transform takes the user's HR-defined department attribute and compares it to the value of \"Science\". If this is the user's department, the transform returns ",(0,i.jsx)(n.code,{children:"true"}),". Otherwise, it returns ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "expression": "$department eq Science",\n    "positiveCondition": "true",\n    "negativeCondition": "false",\n    "department": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "department"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "conditional",\n  "name": "Test Conditional Transform"\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)("p",{children:"\xa0"}),"\n",(0,i.jsxs)(n.p,{children:["This transform extends the previous one by returning the output of another Seaspray transform depending on the result of the expression. You can assign Seaspray transforms' outputs to variables and then reference them within the ",(0,i.jsx)(n.code,{children:"positiveCondition"})," and ",(0,i.jsx)(n.code,{children:"negativeCondition"})," attributes."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "expression": "$department eq Science",\n    "positiveCondition": "$scienceBuilding",\n    "negativeCondition": "$adminBuilding",\n    "department": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "department"\n      },\n      "type": "accountAttribute"\n    },\n    "scienceBuilding": {\n      "attributes": {\n        "value": "Building S"\n      },\n      "type": "static"\n    },\n    "adminBuilding": {\n      "attributes": {\n        "value": "Building A"\n      },\n      "type": "static"\n    }\n  },\n  "type": "conditional",\n  "name": "Test Conditional Transform"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);