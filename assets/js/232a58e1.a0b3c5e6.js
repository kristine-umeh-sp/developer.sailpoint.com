"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[54306],{310223:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(785893),r=i(511151);const a={id:"api-versioning-strategy",title:"API Versioning Strategy",pagination_label:"API Versioning Strategy",sidebar_label:"API Versioning Strategy",sidebar_position:7,sidebar_class_name:"apiVersioning",keywords:["api","versioning"],description:"Identity Security Cloud API Versioning Strategy.",slug:"/api/api-versioning-strategy",tags:["API Versioning Strategy"]},s=void 0,o={id:"api/api-versioning-strategy",title:"API Versioning Strategy",description:"Identity Security Cloud API Versioning Strategy.",source:"@site/docs/api/api-versioning-strategy.md",sourceDirName:"api",slug:"/api/api-versioning-strategy",permalink:"/docs/api/api-versioning-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/api-versioning-strategy.md",tags:[{inline:!0,label:"API Versioning Strategy",permalink:"/docs/tags/api-versioning-strategy"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:7,frontMatter:{id:"api-versioning-strategy",title:"API Versioning Strategy",pagination_label:"API Versioning Strategy",sidebar_label:"API Versioning Strategy",sidebar_position:7,sidebar_class_name:"apiVersioning",keywords:["api","versioning"],description:"Identity Security Cloud API Versioning Strategy.",slug:"/api/api-versioning-strategy",tags:["API Versioning Strategy"]},sidebar:"isc_v3_sidebar",previous:{title:"Authorization",permalink:"/docs/api/authorization"},next:{title:"Standard Collection Parameters",permalink:"/docs/api/standard-collection-parameters"}},l={},d=[{value:"Public vs Experimental",id:"public-vs-experimental",level:2},{value:"Public",id:"public",level:3},{value:"Experimental",id:"experimental",level:3},{value:"Release schedule",id:"release-schedule",level:2},{value:"Deprecations",id:"deprecations",level:2},{value:"Announcements",id:"announcements",level:3},{value:"API specification",id:"api-specification",level:3},{value:"Deprecation header",id:"deprecation-header",level:3},{value:"Exceptions to the versioning process",id:"exceptions-to-the-versioning-process",level:2},{value:"Security",id:"security",level:3},{value:"Performance",id:"performance",level:3},{value:"Delivery",id:"delivery",level:3},{value:"V3 and Beta APIs",id:"v3-and-beta-apis",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"With the introduction of this API versioning strategy SailPoint\u2019s Identity Security Cloud APIs will now follow a annual release schedule to facilitate the introduction of new APIs and the deprecation of unsupported APIs. This annual release schedule enables SailPoint to continually evolve its APIs to meet the needs of users while allowing outdated functionality to be gracefully retired. This document describes the yearly release process and how you, the user, should operate within SailPoint\u2019s API ecosystem to ensure your integrations are always up-to-date and are not impacted by deprecations."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"SailPoint\u2019s API versioning process is subject to change at any time. SailPoint will use reasonable efforts, when possible, to communicate changes that affect users of the API in the appropriate channels in advance of such changes."})}),"\n",(0,t.jsx)(n.h2,{id:"public-vs-experimental",children:"Public vs Experimental"}),"\n",(0,t.jsx)(n.h3,{id:"public",children:"Public"}),"\n",(0,t.jsx)(n.p,{children:"Public APIs are production ready APIs that are meant to be used by customers, partners, and other external users. Public APIs will generally not receive any breaking changes, but additional features that don\u2019t break compatibility may be introduced. When possible, it is preferred to use the latest public API version in your custom integrations to avoid any short notice deprecations or other complications. Examples of non-breaking changes include, but are not limited to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding a new endpoint."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding an optional parameter."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding an optional request header."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding a response property."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding a response header."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding enum values."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changing a required parameter to an optional parameter."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changing response properties or status code for requests using new enums, new optional parameters, or new request headers."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Expanding authentication or authorization requirements."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"experimental",children:"Experimental"}),"\n",(0,t.jsx)(n.p,{children:"Experimental APIs are APIs that are still under development, but may be used by customers, partners, and other external users for evaluation purposes. We offer these APIs to the public in order to get feedback from users on how we can improve them before they are released into production. These APIs may introduce breaking changes with little to no notice, and are not suitable for production use cases. Examples of breaking changes include, but are not limited to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Removing an entire endpoint."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Removing or renaming a parameter."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Removing or renaming a response property."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Removing enum values."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding a new required parameter."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adding a new validation rule to an existing parameter."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changing the type of a request parameter or response property."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changing the response status code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changing synchronous effects to asynchronous effects."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restricting authentication or authorization requirements."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changing the definition of request parameter or response property"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Experimental APIs will be marked as "Experimental" in the API specification.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"experimental",src:i(156738).Z+"",width:"1226",height:"440"})}),"\n",(0,t.jsx)(n.p,{children:"Access to experimental APIs requires an opt-in header flag. When an endpoint transitions from the experimental to public, the header is no longer necessary, but its presence won\u2019t cause any issues."}),"\n",(0,t.jsxs)(n.p,{children:["To enable preview for a request, add the ",(0,t.jsx)(n.code,{children:"X-SailPoint-Experimental"})," header with a value of true to each API request that invokes a experimental endpoint. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --header "X-SailPoint-Experimental: true" https://acme.api.identitynow.com/v2026/endpoint\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you attempt to invoke an experimental API without specifying the ",(0,t.jsx)(n.code,{children:"X-SailPoint-Experimental"})," header, you will receive an error message indicating that the endpoint is in preview status and requires the ",(0,t.jsx)(n.code,{children:"X-SailPoint-Experimental"})," header."]})}),"\n",(0,t.jsx)(n.h2,{id:"release-schedule",children:"Release schedule"}),"\n",(0,t.jsx)(n.p,{children:"SailPoint will introduce an annual release which includes both public and experimental APIs. Each yearly version will be named according to its release year. For instance, if the release occurs in 2025, the version will be designated as v2025."}),"\n",(0,t.jsx)(n.p,{children:"Each annual release will be accompanied by an experimental release if there is at least one breaking change introduced in the current annual release. This experimental release will be named after the next year. For example, if the current year is 2025, the experimental version will be named v2026. Any breaking changes to public endpoints in a public version throughout the year will be introduced in the experimental version."}),"\n",(0,t.jsx)(n.p,{children:"When a new annual release is introduced, non-deprecated endpoints will generally be transferred to the new release without modifications. As a result, the same endpoint will usually be able to be accessed via both the old and new versions. Only the latest public release will receive new functionality. If at anytime throughout the year a experimental API is deemed ready for production, it will be released into the current year\u2019s public version, but not previous years."}),"\n",(0,t.jsx)(n.p,{children:"Annual release versions will typically be supported for 3 years and then remain operational for an additional 2-year transition period, unless otherwise noted or an exception applies.  Customers will be expected to move to the latest public release during those two years. Customers seeking support for an annual release that is over 3 years old will be asked to transition to a newer version."}),"\n",(0,t.jsx)(n.p,{children:"The following image demonstrates the support model for public and experimental releases. The green bars represent how long an annual release version will be supported by our support team. When a annual release is older than three years, it may still remain operational, but it is no longer supported. The blue bars represent experimental releases which are available for one year in the preview state before being changed to a production release."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Versioning Timeline",src:i(834754).Z+"",width:"6326",height:"2529"})}),"\n",(0,t.jsx)(n.h2,{id:"deprecations",children:"Deprecations"}),"\n",(0,t.jsx)(n.p,{children:"Individual APIs may be deprecated at anytime. The term \u201cdeprecation\u201d means that we intend to turn off an API or change the functionality of an API in a way that breaks backwards compatibility. Deprecated APIs will be functional for two years before they are turned off or the old functionality is removed. Deprecations will be announced in one of the following three ways."}),"\n",(0,t.jsx)(n.h3,{id:"announcements",children:"Announcements"}),"\n",(0,t.jsxs)(n.p,{children:["Communications will be sent out to notify impacted users of any deprecations. These communications may appear in the Admin page of the Identity Security Cloud UI, in the ",(0,t.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss/c/announcements/14",children:"Announcements"})," category, in Compass, or in newsletters or emails."]}),"\n",(0,t.jsx)(n.h3,{id:"api-specification",children:"API specification"}),"\n",(0,t.jsx)(n.p,{children:"Deprecated APIs will be marked as \u201cDeprecated\u201d in the API specification. Additional information on why it is being deprecated and what, if any, replacements are available may be provided in the deprecation notice."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"deprecation",src:i(857494).Z+"",width:"1223",height:"384"})}),"\n",(0,t.jsx)(n.h3,{id:"deprecation-header",children:"Deprecation header"}),"\n",(0,t.jsxs)(n.p,{children:["Deprecated APIs will use a response header to inform users when a particular endpoint is deprecated. If you receive a response header in the form of ",(0,t.jsx)(n.code,{children:"X-Deprecated: true"}),", it means that the endpoint has been deprecated and you should check the API specification for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"exceptions-to-the-versioning-process",children:"Exceptions to the versioning process"}),"\n",(0,t.jsx)(n.p,{children:"SailPoint may occasionally decide to make exceptions to the versioning process. These exceptions may be due to a variety of factors, including security, performance, or delivery."}),"\n",(0,t.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,t.jsx)(n.p,{children:"SailPoint\u2019s Product Security team may approve breaking changes to our APIs to resolve security issues. In these cases, no prior notice about the breaking change will be provided, in order to ensure the security issue is fixed in a timely manner and to limit knowledge of the security issue to third parties."}),"\n",(0,t.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,t.jsx)(n.p,{children:"SailPoint may approve breaking changes to our API to address performance issues. The impact to customers will be weighed against the performance improvements in order to determine if an exception to the versioning process will be made or not."}),"\n",(0,t.jsx)(n.h3,{id:"delivery",children:"Delivery"}),"\n",(0,t.jsx)(n.p,{children:"SailPoint may make breaking changes to our APIs in order to decrease the time to deliver new features, as long as there is minimal impact to users of the API."}),"\n",(0,t.jsx)(n.h2,{id:"v3-and-beta-apis",children:"V3 and Beta APIs"}),"\n",(0,t.jsx)(n.p,{children:"The V3 and Beta APIs will remain operational for as long as they contain non-deprecated endpoints. V3 and Beta will be supported until Q1 of 2027, meaning that users can submit support tickets for these versions. After Q1 of 2027, users may no longer submit support tickets for these versions, and they will be asked to use a supported version instead."})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},834754:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/api-versioning-timeline-1083eb6090c7f4f8538e2c411d0250ca.jpg"},857494:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/deprecation-warning-d6c12c4bc1f5940a853e37058b926c3c.png"},156738:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/experimental-warning-d8929dc626173815641b244976b2f1c2.png"}}]);