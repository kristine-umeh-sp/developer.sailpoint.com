"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[85718],{212152:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=s(785893),r=s(511151);const o={id:"powershell-sdk-getting-started",title:"Getting started with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","start"],description:"Learn how to use the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/getting-started",tags:["SDK"]},a=void 0,i={id:"tools/sdk/powershell/powershell-sdk-getting-started",title:"Getting started with the PowerShell SDK",description:"Learn how to use the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/getting-started.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/getting-started",permalink:"/docs/tools/sdk/powershell/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/getting-started.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:1,frontMatter:{id:"powershell-sdk-getting-started",title:"Getting started with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","start"],description:"Learn how to use the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/getting-started",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/create"}},l={},d=[{value:"List Transforms",id:"list-transforms",level:2},{value:"WithHttpInfo Switch",id:"withhttpinfo-switch",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. To learn how to install and configure the PowerShell SDK, refer to ",(0,n.jsx)(t.a,{href:"/docs/tools/sdk/powershell",children:"Installation and Configuration"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"To get an idea of what cmdlets the SDK offers run the following command. This command lists all available Get cmdlets within the SDK:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:'Get-Command -Module PSSailpoint | where-object {$_.name -like "*Get-*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis\n'})}),"\n",(0,n.jsx)(t.p,{children:"The SDK returns this output:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:"Name                             Synopsis\n----                             --------\nGet-AccessProfile                Get an Access Profile\nGet-AccessProfileEntitlements    List Access Profile's Entitlements\nGet-AccessProfiles               List Access Profiles\nGet-AccessRequestApprovalSummary Get the number of access-requests-approvals\nGet-AccessRequestConfig          Get Access Request Configuration\nGet-AccessRequestStatus          Access Request Status\nGet-Account                      Account Details\nGet-AccountActivities            List Account Activities\nGet-AccountActivity              Get an Account Activity\nGet-AccountEntitlements          Account Entitlements\nGet-Accounts                     Accounts List\nGet-AccountsSchema               Downloads source accounts schema template\nGet-ActiveCampaigns              List Campaigns\n...\n"})}),"\n",(0,n.jsx)(t.h2,{id:"list-transforms",children:"List Transforms"}),"\n",(0,n.jsx)(t.p,{children:"Let's say that you wanted to see all the transforms available in your tenant. You can search for the cmdlet:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:'Get-Command -Module PSSailpoint | where-object {$_.name -like "Get-*Transform*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis\n'})}),"\n",(0,n.jsx)(t.p,{children:"The SDK returns this output (all beta endpoints are designated by the Beta prefix):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:"Name               Synopsis\n----               --------\nGet-BetaTransform  Transform by ID\nGet-BetaTransforms List transforms\nGet-Transform      Transform by ID\nGet-Transforms     List transforms\n"})}),"\n",(0,n.jsx)(t.p,{children:"To get syntax, description and parameters for a single cmdlet, run this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:"Get-Help Get-Transforms -Detailed\n"})}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Cmdlet Response"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"NAME\n    Get-Transforms\n\nSYNOPSIS\n    List transforms\n\n\nSYNTAX\n    Get-Transforms [[-Offset] <Nullable`1>] [[-Limit] <Nullable`1>] [[-Count] <Nullable`1>] [[-Name] <String>] [[-Filters] <String>] [-WithHttpInfo] [<CommonParameters>]\n\n\nDESCRIPTION\n    Gets a list of all saved transform objects. A token with 'transforms-list read' authority is required to call this API.\n\n\nPARAMETERS\n    -Offset <Nullable`1>\n        Offset into the full result set. Usually specified with *limit* to paginate through the results. For more information, refer to [V3 API Standard Collection\n        Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters).\n\n    -Limit <Nullable`1>\n        Max number of results to return. For more information, refer to [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters).\n\n    -Count <Nullable`1>\n        If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a\n        performance impact, it is recommended not to send **count=true** if that value will not be used. For more information, refer to [V3 API Standard Collection\n        Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters).\n\n    -Name <String>\n        Name of the transform to retrieve from the list.\n\n    -Filters <String>\n        Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results). Filtering is\n        supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw*\n\n    -WithHttpInfo [<SwitchParameter>]\n        A switch that, when enabled, will return a hash table of Response, StatusCode and Headers, instead of just the Response.\n\n    <CommonParameters>\n        This cmdlet supports the common parameters: Verbose, Debug,\n        ErrorAction, ErrorVariable, WarningAction, WarningVariable,\n        OutBuffer, PipelineVariable, and OutVariable. For more information, refer to\n        about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Running ",(0,n.jsx)(t.code,{children:"Get-Transforms"})," will return a list of all transforms in your tenant."]}),"\n",(0,n.jsxs)(t.p,{children:["Running ",(0,n.jsx)(t.code,{children:"Get-Transforms -Limit 10 -Filter 'name sw Test\"'"})," will return a list of no more than 10 transforms whose names start with ",(0,n.jsx)(t.code,{children:"Test"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"withhttpinfo-switch",children:"WithHttpInfo Switch"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the cmdlets return just the response from the API without including any information about status code or headers returned. Use the ",(0,n.jsx)(t.code,{children:"-WithHttpInfo"})," switch to return this information with the response."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:"Get-Transforms -WithHttpInfo\n\nName                           Value\n----                           -----\nHeaders                        {[Date, System.String[]], [Transfer-Encoding, System.String[]], [Connection, System.String[]], [Server, System.String[]]\u2026}\nStatusCode                     200\nResponse                       {System.Management.Automation.OrderedHashtable, System.Management.Automation.OrderedHashtable, System.Management.Automation.Ordered\u2026\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);