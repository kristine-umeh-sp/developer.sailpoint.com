"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53921],{105988:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=s(785893),t=s(511151);const a={id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},i=void 0,o={id:"tools/cli/cli-transforms",title:"CLI Transforms",description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",source:"@site/docs/tools/cli/transforms.md",sourceDirName:"tools/cli",slug:"/tools/cli/transforms",permalink:"/docs/tools/cli/transforms",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/transforms.md",tags:[{inline:!0,label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:6,frontMatter:{id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-SPConfig",permalink:"/docs/tools/cli/spconfig"},next:{title:"CLI VA",permalink:"/docs/tools/cli/va"}},l={},d=[{value:"Commands",id:"commands",level:2},{value:"List transforms",id:"list-transforms",level:2},{value:"Download transforms",id:"download-transforms",level:2},{value:"Create transform",id:"create-transform",level:2},{value:"Update transform",id:"update-transform",level:2},{value:"Delete transform",id:"delete-transform",level:2},{value:"Preview transform",id:"preview-transform",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide."}),"\n",(0,r.jsxs)(n.p,{children:["In Identity Security Cloud (ISC), you can use transforms to manipulate attribute data without writing any code. For more information about transforms, refer to ",(0,r.jsx)(n.a,{href:"/docs/extensibility/transforms",children:"Transforms"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.code,{children:"transforms"})," command, it's it easy to create, manage, and test transforms in the CLI."]}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsx)(n.p,{children:"To create, manage, and test transforms with the CLI, you can use these commands:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#commands",children:"Commands"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#list-transforms",children:"List transforms"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#download-transforms",children:"Download transforms"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#create-transform",children:"Create transform"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#update-transform",children:"Update transform"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#delete-transform",children:"Delete transform"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#preview-transform",children:"Preview transform"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"list-transforms",children:"List transforms"}),"\n",(0,r.jsx)(n.p,{children:"To get a list of the transforms available in your tenant, run this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sail transform list\n"})}),"\n",(0,r.jsx)(n.p,{children:"This command produces a table of available transforms."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Transform List",src:s(812869).Z+"",width:"1200",height:"500"})}),"\n",(0,r.jsx)(n.h2,{id:"download-transforms",children:"Download transforms"}),"\n",(0,r.jsxs)(n.p,{children:["To download all the transforms in your tenant and save them as ",(0,r.jsx)(n.code,{children:"json"})," files on your computer, run the following command. By default, this command will save the files in the current working directory. Use the ",(0,r.jsx)(n.code,{children:"-d"})," flag to specify a path to an output directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sail transform download -d transform_files\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, this command will save the files in the current working directory. Use the ",(0,r.jsx)(n.code,{children:"-d"})," flag to specify a path to an output directory."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Transform Download",src:s(790014).Z+"",width:"1200",height:"500"})}),"\n",(0,r.jsx)(n.p,{children:"This command will overwrite any existing files with the same name, so be careful when you run this in a directory that has transforms that have been modified but not yet saved."}),"\n",(0,r.jsx)(n.h2,{id:"create-transform",children:"Create transform"}),"\n",(0,r.jsxs)(n.p,{children:["To create a new transform from a ",(0,r.jsx)(n.code,{children:"json"})," file, run the following command. Use the ",(0,r.jsx)(n.code,{children:"-f"})," flag to specify the path to the ",(0,r.jsx)(n.code,{children:"json"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sail transform create -f transform.json\n"})}),"\n",(0,r.jsx)(n.h2,{id:"update-transform",children:"Update transform"}),"\n",(0,r.jsxs)(n.p,{children:["To update a transform from a ",(0,r.jsx)(n.code,{children:"json"})," file, run the following command. Use the ",(0,r.jsx)(n.code,{children:"-f"})," flag to specify the path to the ",(0,r.jsx)(n.code,{children:"json"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sail transform update -f transform.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"A common workflow is to first download the transforms, then make edits to the transform file, and then use the update command to save those edits in ISC."}),"\n",(0,r.jsx)(n.h2,{id:"delete-transform",children:"Delete transform"}),"\n",(0,r.jsx)(n.p,{children:"To delete a transform, run this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sail transform delete <transform-id>\n"})}),"\n",(0,r.jsx)(n.p,{children:"To delete multiple transforms, use this syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sail transform delete <transform-id> <transform-id> <transform-id>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use this command in conjunction with the ",(0,r.jsx)(n.code,{children:"ls"})," command to find the ID of the transform you want to delete."]}),"\n",(0,r.jsx)(n.p,{children:"This is an example of how you can find a transform ID and delete it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sail transform list\n+--------------------------------------+--------------------------+\n|                  ID                  |           NAME           |\n+--------------------------------------+--------------------------+\n| 03d5187b-ab96-402c-b5a1-40b74285d77a | WIFI Group               |\n| 06d589cf-4d7d-4b40-8617-c221092ceb2c | Remove Diacritical Marks |\n| 1f3a97cf-e58b-4fad-b2f2-0dcc19fb1627 | NETID                    |\n+--------------------------------------+--------------------------+\nsail transform delete 03d5187b-ab96-402c-b5a1-40b74285d77a\n"})}),"\n",(0,r.jsx)(n.h2,{id:"preview-transform",children:"Preview transform"}),"\n",(0,r.jsx)(n.p,{children:"Use this command to preview a transform in your environment. The command offers two modes based upon the input:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Interactive Mode"}),": Walk through the process interactively, providing the identity profile and identity as inputs dynamically."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Direct Mode"}),": Specify the identity profile and identity upfront for a quicker preview."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Both modes display the transform result along with the associated identity attributes in a table format, giving you a clear overview of the applied transformation."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This command temporarily creates and deletes a transform in your environment to generate the preview."})}),"\n",(0,r.jsx)(n.p,{children:"Below is an example of Interactive Mode, where you'll provide inputs dynamically:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Transform Preview",src:s(947238).Z+"",width:"1200",height:"1000"})}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can directly specify the identity profile and identity using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sail transform preview --profile 8b9960eebbdd43029393edd9dcf25976 --identity 1d2d747380634a38a48f079422833ed6 --file transform_files/DeriveFirstInitialLastNameInUpper.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also include a flag ",(0,r.jsx)(n.code,{children:"--result-only"})," or ",(0,r.jsx)(n.code,{children:"-r"})," to return only the transform result, which is useful for creating tests or automating validation workflows."]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},790014:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/transform-download-23453d19230ad2708a3389a3a026179f.gif"},812869:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/transform-list-033f4d95c861fda8172582e306ec55e0.gif"},947238:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/transform-preview-e86c9b7a31205dd3494f3f28705d4046.gif"}}]);