"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8085],{265010:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var t=n(785893),s=n(511151);const l={id:"cli-sanitize",title:"Sanitize",pagination_label:"CLI-Sanitize",sidebar_label:"Sanitize",sidebar_position:2,sidebar_class_name:"cli",keywords:["cli","sanitize"],description:"Learn how to use the CLI to sanitize your HAR files in this guide.",slug:"/tools/cli/sanitize",tags:["CLI"]},a=void 0,o={id:"tools/cli/cli-sanitize",title:"Sanitize",description:"Learn how to use the CLI to sanitize your HAR files in this guide.",source:"@site/docs/tools/cli/sanitize.md",sourceDirName:"tools/cli",slug:"/tools/cli/sanitize",permalink:"/docs/tools/cli/sanitize",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/sanitize.md",tags:[{inline:!0,label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:2,frontMatter:{id:"cli-sanitize",title:"Sanitize",pagination_label:"CLI-Sanitize",sidebar_label:"Sanitize",sidebar_position:2,sidebar_class_name:"cli",keywords:["cli","sanitize"],description:"Learn how to use the CLI to sanitize your HAR files in this guide.",slug:"/tools/cli/sanitize",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI Connectors",permalink:"/docs/tools/cli/connectors"},next:{title:"CLI-Search",permalink:"/docs/tools/cli/search"}},c={},r=[{value:"Sanitize",id:"sanitize",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Command",id:"command",level:3}];function d(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"sanitize",children:"Sanitize"}),"\n",(0,t.jsx)(e.p,{children:"Learn how to use the CLI to sanitize your HAR files in this guide."}),"\n",(0,t.jsx)(e.p,{children:"When you're troubleshooting issues you encounter using Identity Security Cloud, some of the most helpful data can be contained in a HAR file collected from your browser's API calls made while replicating the issue."}),"\n",(0,t.jsx)(e.p,{children:"The problem lies in the amount of information, specifically sensitive information that the HAR file contains, due to the nature of the data it's capturing. The CLI is very useful for this. You can use the CLI to sanitize the HAR file, which removes sensitive information but still still leaves the file in a useful state for troubleshooting the issue."}),"\n",(0,t.jsxs)(e.p,{children:["The existing support guide for collecting and sanitizing the HAR file ",(0,t.jsx)(e.a,{href:"https://support.sailpoint.com/csm?id=kb_article_view&sysparm_article=KB0011711#_gl=1*17esz5f*_gcl_au*MTczOTU0NDU4NC4xNjkxNjc5NzY2",children:"can be found here"}),"."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"#sanitize",children:"Sanitize"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#functionality",children:"Functionality"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#command",children:"Command"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"functionality",children:"Functionality"}),"\n",(0,t.jsx)(e.p,{children:"The sanitize command sanitizes a HAR file of sensitive data. It only removes access tokens matching the Identity Security Cloud format and origin urls similar to the examples below:"}),"\n",(0,t.jsx)(e.p,{children:"Access Token"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiI1OGViMDZhNC1kY2Q3LTRlOTYtOGZhYy1jY2EyYWZjMDNlNjEiLCJpbnRlcm5hbCI6dHJ1ZSwicG9kIjoiY29vayIsIm9yZyI6ImV4YW1wbGUiLCJpZGVudGl0eV9pZCI6ImZmODA4MTgxNTVmZThjMDgwMTU1ZmU4ZDkyNWIwMzE2IiwidXNlcl9uYW1lIjoic2xwdC5zZXJ2aWNlcyIsInN0cm9uZ19hdXRoIjp0cnVlLCJhdXRob3JpdGllcyI6WyJPUkdfQURNSU4iXSwiY2xpZW50X2lkIjoibktCUE93akpIOExYU2pJbCIsInN0cm9uZ19hdXRoX3N1cHBvcnRlZCI6dHJ1ZSwidXNlcl9pZCI6IjU5NTgyNiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NjU4ODgzMTksImp0aSI6ImM5OGQxMjM2LTQ1MTMtNGM4OS1hMGQwLTBjYjlmMzI3NmI1NiJ9.SAY4ZQkXGi2cY_qz57Ah9_zDq4-bnF-oDJKotXa-LCY\n"})}),"\n",(0,t.jsx)(e.p,{children:"Origin URLs"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "name": "origin",\n  "value": "https://example.identitynow.com"\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"command",children:"Command"}),"\n",(0,t.jsx)(e.p,{children:"To use the CLI to sanitize HAR files, you can run this command:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sail sanitize ./path/to/har/file.har\n"})}),"\n",(0,t.jsx)(e.p,{children:"You can also sanitize multiple files at once:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sail sanitize ./path/to/har/file1.har ./path/to/har/file2.har ./path/to/har/file3.har\n"})})]})}function h(i={}){const{wrapper:e}={...(0,s.a)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}}}]);