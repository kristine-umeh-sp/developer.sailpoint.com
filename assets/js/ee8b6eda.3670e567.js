"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77919],{591031:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(785893),s=o(511151);const r={id:"go-sdk-delete",title:"Delete resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","delete"],description:"Learn how to delete resources with the Golang SDK in this guide.",slug:"/tools/sdk/go/delete",tags:["SDK","Software Development Kit"]},i=void 0,a={id:"tools/sdk/go/go-sdk-delete",title:"Delete resources with the Go SDK",description:"Learn how to delete resources with the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/deleting-resources.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/delete",permalink:"/docs/tools/sdk/go/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/deleting-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"},{inline:!0,label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:4,frontMatter:{id:"go-sdk-delete",title:"Delete resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","delete"],description:"Learn how to delete resources with the Golang SDK in this guide.",slug:"/tools/sdk/go/delete",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/update"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/paginate"}},l={},d=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Here is an example script that searches for the Workgroup created in ",(0,n.jsx)(t.a,{href:"/docs/tools/sdk/go/create",children:"Create a resource"})," by name and calls the delete method to remove it from your environment."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n "context"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n workgroup, r, err := apiClient.Beta.GovernanceGroupsApi.ListWorkgroups(ctx).Filters(`name eq "DB Access Governance Group"`).Execute()\n\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when retrieving workgroup`: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n\n response, errorMessage := apiClient.Beta.GovernanceGroupsApi.DeleteWorkgroup(ctx, *workgroup[0].Id).Execute()\n\n if errorMessage != nil {\n  fmt.Fprintf(os.Stderr, "Error when updating workgroup`: %v\\n", errorMessage)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", response)\n }\n\n fmt.Fprintf(os.Stdout, "Resource Deleted: %v\\n", response.StatusCode)\n\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"To run the code, run this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"go run sdk.go\n"})}),"\n",(0,n.jsx)(t.p,{children:"The deletionStatus is returned by the SDK with a value of 204."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);