"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45134],{435270:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(785893),n=t(511151);const o={id:"typescript-sdk-error-handling",title:"Error Handling with The TypeScript SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","error"],description:"Learn how to configure error handling when using the TypeScript SDK.",slug:"/tools/sdk/typescript/error-handling",tags:["SDK"]},i=void 0,a={id:"tools/sdk/typescript/typescript-sdk-error-handling",title:"Error Handling with The TypeScript SDK",description:"Learn how to configure error handling when using the TypeScript SDK.",source:"@site/docs/tools/sdk/typescript/error-handling.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/error-handling",permalink:"/docs/tools/sdk/typescript/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/error-handling.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:8,frontMatter:{id:"typescript-sdk-error-handling",title:"Error Handling with The TypeScript SDK",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:8,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","error"],description:"Learn how to configure error handling when using the TypeScript SDK.",slug:"/tools/sdk/typescript/error-handling",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Retries",permalink:"/docs/tools/sdk/typescript/retries"},next:{title:"RDK",permalink:"/docs/tools/rule-development-kit"}},l={},d=[];function p(e){const r={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"The TypeScript SDK uses the Axios library to handle HTTP requests. Axios will throw an error for any response status that falls outside the range of 2xx. A non-2xx response will immediately halt the program and produce a stack trace. Axios provides two methods for gracefully handling error responses from an API."}),"\n",(0,s.jsxs)(r.p,{children:["The first method is to use a ",(0,s.jsx)(r.code,{children:"catch"})," function to intercept any unsuccessful response and take actions on the results, such as logging the message or performing additional actions before exiting the program:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"showLineNumbers",children:"// Catch any non 2xx response and log the error message and metadata\nlet transforms = await api.listTransforms().catch(function (error) {\n  console.log(error.response.data);\n  console.log(error.response.status);\n  console.log(error.response.headers);\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The second method is to define which HTTP status codes should throw an error for a given request using the ",(0,s.jsx)(r.code,{children:"validateStatus"})," option. This gives you an opportunity to recover from a bad request without exiting the program."]}),"\n",(0,s.jsx)(r.p,{children:"If you don't want the program to exit for 4xx response codes, you can use this configuration:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"showLineNumbers",children:"// Resolve only if the status code is less than 500\nlet transforms = await api.listTransforms(\n  {filters: 'id eq'},\n  {\n    validateStatus: function (status) {\n      return status < 500;\n    },\n  },\n);\n\nif (transforms.status === 200) {\n  console.log(transforms);\n} else if (transforms.status === 400) {\n  console.log('The filter is invalid.  Continuing execution.');\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"If you don't want the program to exit for any error response, you can use this configuration:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"await api.listTransforms(\n  {},\n  {\n    validateStatus: function (status) {\n      return true;\n    },\n  },\n);\n"})})]})}function c(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);