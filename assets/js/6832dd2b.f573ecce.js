"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[10165],{839008:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=l(785893),i=l(511151),s=l(365332),o=l(424455);const r={id:"powershell-sdk",title:"PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"PowerShell",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk"],description:"Easy ISC development in PowerShell.",slug:"/tools/sdk/powershell",tags:["SDK"]},a=void 0,d={id:"tools/sdk/powershell/powershell-sdk",title:"PowerShell SDK",description:"Easy ISC development in PowerShell.",source:"@site/docs/tools/sdk/powershell/index.mdx",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell",permalink:"/docs/tools/sdk/powershell",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/index.mdx",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:3,frontMatter:{id:"powershell-sdk",title:"PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"PowerShell",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk"],description:"Easy ISC development in PowerShell.",slug:"/tools/sdk/powershell",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/error-handling"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/getting-started"}},c={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Manually install the SDK",id:"manually-install-the-sdk",level:3},{value:"Configure",id:"configure",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Example <code>config.json</code>",id:"example-configjson",level:4},{value:"Example <code>config.json</code>",id:"example-configjson-1",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:3},{value:"Discuss",id:"discuss",level:2},{value:"Getting Started",id:"getting-started",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Read this guide to learn how to use the PowerShell SDK. The PowerShell SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"You need the following to use the PowerShell SDK:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["PowerShell 6.2 or greater. To learn how to install, refer to ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.4",children:"Installing PowerShell"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Your tenant name in IdentityNow. To learn how to find it, refer to ",(0,t.jsx)(n.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Getting Started"}),". The SDK will use this tenant name to connect to your IdentityNow instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A PAT with a client secret and ID. To learn how to create one in ISC, refer to ",(0,t.jsx)(n.a,{href:"https://documentation.sailpoint.com/saas/help/common/api_keys.html#generating-a-personal-access-token",children:"Personal Access Tokens"}),". The SDK will use this PAT to authenticate with the SailPoint APIs."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)("summary",{children:["CLI Assisted ",(0,t.jsx)("em",{children:"(Recommended)"})]}),(0,t.jsxs)(n.p,{children:["The SailPoint CLI offers a few commands that will allow you to quickly get started with the PowerShell SDK. To learn how to install and use the SailPoint CLI, refer to ",(0,t.jsx)(n.a,{href:"https://developer.sailpoint.com/idn/tools/cli#get-the-cli",children:"SailPoint CLI"}),"."]}),(0,t.jsx)(n.p,{children:"Once the CLI is installed and configured, run this command to create a new PowerShell project with the PowerShell SDK:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sail sdk init powershell\n"})}),(0,t.jsx)(n.p,{children:"Running the command create the structure for your project:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"|-- powershell-template\n|   |-- paginate.ps1\n|   |-- paginateAccounts.ps1\n|   |-- patchEntitlement.ps1\n|   |-- sdk.ps1\n|   |-- search.ps1\n|   |-- transform.ps1\n"})}),(0,t.jsx)(n.p,{children:"Run this command to install the required dependencies:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Install-Module -Name PSSailpoint\n"})}),(0,t.jsx)(n.p,{children:'The command installs the SailPoint PowerShell SDK module. You will be prompted to confirm that you want to install the module from \'PSGallery\'. Enter "A" to say "Yes to All".'}),(0,t.jsxs)(n.p,{children:["If you already have a version of the PowerShell SDK installed, you can install a new version side-by-side with it by adding the ",(0,t.jsx)(n.code,{children:"-Force"})," parameter to the end of your ",(0,t.jsx)(n.code,{children:"Install-Module"})," commmand:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Install-Module -Name PSSailpoint -Force\n"})}),(0,t.jsxs)(n.p,{children:["To validate that the module is installed, run this command, ",(0,t.jsx)(n.code,{children:"Get-Module -ListAvailable PSSailpoint"}),", and verify that the module is listed. Additionally, you can run this command, ",(0,t.jsx)(n.code,{children:"Get-Command -Module PSSailpoint"}),", to see the available commands included in the module."]}),(0,t.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,t.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Manual Installation"}),(0,t.jsx)(n.h3,{id:"manually-install-the-sdk",children:"Manually install the SDK"}),(0,t.jsx)(n.p,{children:"If access to the PowerShell Gallery isn't available, you can also install the PowerShell SDK manually."}),(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"If you manually install the module on a machine without access to the PowerShell Gallery, you will also need to manually install updates to the SDK."})}),(0,t.jsx)(n.p,{children:"Follow these steps to manually install the PowerShell module:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the source code zip from the most recent release on ",(0,t.jsx)(n.a,{href:"https://github.com/sailpoint-oss/powershell-sdk/releases",children:"GitHub"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Open the ZIP file, then open then folder labeled ",(0,t.jsx)(n.code,{children:"powershell-sdk-x.x.x"}),", with the ",(0,t.jsx)(n.code,{children:"x.x.x"})," representing the version you downloaded."]}),"\n",(0,t.jsxs)(n.li,{children:["Extract the ",(0,t.jsx)(n.code,{children:"PSSailpoint"})," module folder inside to one of the following locations:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To install for the Current user: ",(0,t.jsx)(n.code,{children:"C:\\Users\\<username>\\Documents\\WindowsPowerShell\\Modules\\PSSailpoint"})]}),"\n",(0,t.jsxs)(n.li,{children:["To install for All users (requires Administrator privileges): ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\WindowsPowerShell\\Modules\\PSSailpoint"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"Import-Module PSSailpoint"})," to import the module into the current session."]}),"\n",(0,t.jsxs)(n.li,{children:["To validate that the module is installed, run ",(0,t.jsx)(n.code,{children:"Get-Module -ListAvailable PSSailpoint"})," and verify that the module is listed. Additionally, you can run ",(0,t.jsx)(n.code,{children:"Get-Command -Module PSSailpoint"})," to see the module's available commands."]}),"\n"]}),(0,t.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,t.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,t.jsxs)(n.p,{children:["You must provide configuration to the SDK so that it can authenticate to your SailPoint tenant and make API calls. To do so, you can use a configuration file, ",(0,t.jsx)(n.code,{children:"config.json"}),", or environment variables."]}),"\n",(0,t.jsx)(n.h3,{id:"configuration-file",children:"Configuration File"}),"\n",(0,t.jsxs)(n.p,{children:['The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: ',(0,t.jsx)(n.code,{children:"ClientId"}),", ",(0,t.jsx)(n.code,{children:"ClientSecret"}),", ",(0,t.jsx)(n.code,{children:"BaseURL"}),"."]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsxs)("summary",{children:["CLI Assisted ",(0,t.jsx)("em",{children:"(Recommended)"})]}),"\nThe SailPoint CLI offers a command to generate the config.json file with your currently configured CLI credentials."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sail sdk init config\n"})}),(0,t.jsxs)(n.p,{children:["If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a ",(0,t.jsx)(n.code,{children:"config.json"})," for."]}),(0,t.jsx)(n.p,{children:"To pass an additional parameter that states the environment you want to configure, run this command:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sail sdk init config --env devrel\n"})}),(0,t.jsxs)(n.h4,{id:"example-configjson",children:["Example ",(0,t.jsx)(n.code,{children:"config.json"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Manual Configuration"}),(0,t.jsxs)(n.p,{children:['Create a file named "config.json", and provide these key/value pairs: ',(0,t.jsx)(n.code,{children:"ClientId"}),", ",(0,t.jsx)(n.code,{children:"ClientSecret"}),", ",(0,t.jsx)(n.code,{children:"BaseURL"}),"."]}),(0,t.jsxs)(n.h4,{id:"example-configjson-1",children:["Example ",(0,t.jsx)(n.code,{children:"config.json"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please ensure this file is ignored in your version control system (ex. .gitignore for git)"})}),"\n",(0,t.jsx)(n.h3,{id:"environment-variable-configuration",children:"Environment variable configuration"}),"\n",(0,t.jsx)(n.p,{children:"You can also store your configuration in environment variables."}),"\n",(0,t.jsxs)(n.p,{children:["To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,t.jsx)(n.code,{children:"~/.bash_profile"}),"."]}),"\n","\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.default,{value:"linux_mac",label:"Linux/Mac",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export SAIL_BASE_URL=https://[tenant].api.identitynow.com\nexport SAIL_CLIENT_ID=[clientID]\nexport SAIL_CLIENT_SECRET=[clientSecret]\n"})})}),(0,t.jsxs)(o.default,{value:"windows",label:"Windows PowerShell",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$env:SAIL_BASE_URL=https://[tenant].api.identitynow.com\n$env:SAIL_CLIENT_ID=[clientID]\n$env:SAIL_CLIENT_SECRET=[clientSecret]\n"})}),(0,t.jsx)(n.p,{children:"To get your environment variables to persist across PowerShell sessions, run these commands instead:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://[tenant].api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','[clientID]')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','[clientSecret]')\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"discuss",children:"Discuss"}),"\n",(0,t.jsxs)(n.p,{children:["You can use this SDK to build new tools that extend your ISC platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,t.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"}),"!"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["To get started using the SDK, refer to the ",(0,t.jsx)(n.a,{href:"/docs/tools/sdk/powershell/getting-started",children:"Getting Started Guide"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},365332:(e,n,l)=>{l.d(n,{Z:()=>b});var t=l(667294),i=l(490512),s=l(8757),o=l(873276),r=l(254939);const a={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var d=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,x=(e,n,l)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,j=(e,n)=>{for(var l in n||(n={}))p.call(n,l)&&x(e,l,n[l]);if(u)for(var l of u(n))m.call(n,l)&&x(e,l,n[l]);return e},f=(e,n)=>c(e,h(n));function g({className:e,block:n,selectedValue:l,selectValue:o,tabValues:r}){const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const n=e.currentTarget,t=d.indexOf(n),i=r[t].value;i!==l&&(c(n),o(i))},u=e=>{var n,l;let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const l=d.indexOf(e.currentTarget)+1;t=null!=(n=d[l])?n:d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=null!=(l=d[n])?l:d[d.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},r.map((({value:e,label:n,attributes:s})=>t.createElement("li",f(j({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:e=>d.push(e),onKeyDown:u,onClick:h},s),{className:(0,i.Z)("tabs__item",a.tabItem,null==s?void 0:s.className,{"tabs__item--active":l===e})}),null!=n?n:e))))}function S({lazy:e,children:n,selectedValue:l}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l}))))}function w(e){const n=(0,o.Y)(e);return t.createElement("div",{className:(0,i.Z)("tabs-container",a.tabList)},t.createElement(g,j(j({},n),e)),t.createElement(S,j(j({},n),e)))}function b(e){const n=(0,r.default)();return t.createElement(w,j({key:String(n)},e),(0,o.h)(e.children))}}}]);