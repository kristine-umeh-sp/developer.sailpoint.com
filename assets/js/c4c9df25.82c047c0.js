"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[79043],{106472:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>v,default:()=>q,frontMatter:()=>g,metadata:()=>b,toc:()=>_});var i=a(785893),r=a(511151),l=a(168562),n=a.n(l),t=(a(69957),a(496463)),o=(a(318438),a(998439)),d=a.n(o),m=(a(534168),a(603655)),c=a.n(m),p=a(313503),h=a.n(p),u=a(82479),x=a.n(u),j=a(555199),f=(a(645774),a(424455));const g={id:"post-user-roles",sidebar_label:"Create multiple new user role pairings",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu2zgQ/RVinmU7zcXdFdCHdJEFXKAXJO6+GMZiTI1sthSpDsk4hqF/XwwVx0rTBgmwfrBlzhnNmTMX7sG3xBiNd7MKSmh9iF8D8bW3FKCAioJm04odSviLCSOpJtloWkvK0ValQKzYW1ItGjZuLW4R1wHKBTwYAywLYPqRKMT3vtpBuc9/DVMFZeREBWjvIrkoJmxba3SmNfkWJPYegt5Qg/IUdy1BCX71jXSEAlqWJKKhIFaJ+W8f84hFZtxBASZSE174DlMNgCFKblBA7bnBCCWkZCroCpBQL8N2BUQTrUAOGkPXf0Sc0HoX+vinJyfy81j9q7uWdKRKHaAqeoXqFq2Rs6wtvEJG7+hzDeXiqRg/swzQFb9HffAr6JZ9Fue/Iv4eK3Xd81MjlRyubOaufdNaijT+f1nPXJbkg7g+x/sfQeUwV8yew0MSF79KYuYisUOrbohviVX2USPFFBM7qpR3KrkNuspSpehOU/YMr0ru+a4kCfmU2aVqKARck+rPV8atVdyQ6vEF0B2K0FDCjWfeqeAbihtBbclFtWXv1sdGFJs/7ALhgHEDJUwGc1VAyCKEXIfEFkrYxNiGcjLZR3Lo4idsqBs776hprd8RjbVvJtgaKOAW2UgP9IP4AO8zqzFZGRnUDWn/ZAXNM1w5bEhhCGYt0ksvpRB9Qyx5LIWfTmziLhNcETLxZZI8Fsuh+UaU73kMQQ+FkKQk2wyD8h4Exf3D34f5nvvv5FSU73c7n7h/zBMvRb4+Lr6rQy0eL6rFYOfAWY1/XNTT89HF2zdvR+cX09PR6qzWo1P95/Ssnk6xxikMFs/LHLplV4BxtZfYUrxe0Dfjk/HJYCo+XV1/VJdfZk+V35A6GJVGp1Ykyz+rj1pTCApdpRpfmXqnpMY+BdlVPrGmoIxTWRpyt4a9a8hFmQ1rNLmQBXG5CeDjbJ6Vk/5r0A0sL75/HjHfH+fvFTdY3wCR7uKktWhklfSdvr+fiMWwgMsCNjIu5QL2+xUG+sq26+T4RyKWNlwe+z53YQEbwoo41/477YRcT3M0l9gCtynfXT+vDFlqvcelljXzLHY5mOgvn2/m0rz3F3DjK/Fh3Eo34RZKgAJ8v7fyDS1ne7Do1gnXgu3fKZ//AM2y1+Y=",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create multiple new user role pairings' (post-user-roles)"},v=void 0,b={id:"api/nerm/v1/post-user-roles",title:"post-user-roles",description:"<Heading",source:"@site/docs/api/nerm/v1/post-user-roles.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/post-user-roles",permalink:"/docs/api/nerm/v1/post-user-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create multiple new user role pairings' (post-user-roles)",tags:[],version:"current",frontMatter:{id:"post-user-roles",sidebar_label:"Create multiple new user role pairings",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu2zgQ/RVinmU7zcXdFdCHdJEFXKAXJO6+GMZiTI1sthSpDsk4hqF/XwwVx0rTBgmwfrBlzhnNmTMX7sG3xBiNd7MKSmh9iF8D8bW3FKCAioJm04odSviLCSOpJtloWkvK0ValQKzYW1ItGjZuLW4R1wHKBTwYAywLYPqRKMT3vtpBuc9/DVMFZeREBWjvIrkoJmxba3SmNfkWJPYegt5Qg/IUdy1BCX71jXSEAlqWJKKhIFaJ+W8f84hFZtxBASZSE174DlMNgCFKblBA7bnBCCWkZCroCpBQL8N2BUQTrUAOGkPXf0Sc0HoX+vinJyfy81j9q7uWdKRKHaAqeoXqFq2Rs6wtvEJG7+hzDeXiqRg/swzQFb9HffAr6JZ9Fue/Iv4eK3Xd81MjlRyubOaufdNaijT+f1nPXJbkg7g+x/sfQeUwV8yew0MSF79KYuYisUOrbohviVX2USPFFBM7qpR3KrkNuspSpehOU/YMr0ru+a4kCfmU2aVqKARck+rPV8atVdyQ6vEF0B2K0FDCjWfeqeAbihtBbclFtWXv1sdGFJs/7ALhgHEDJUwGc1VAyCKEXIfEFkrYxNiGcjLZR3Lo4idsqBs776hprd8RjbVvJtgaKOAW2UgP9IP4AO8zqzFZGRnUDWn/ZAXNM1w5bEhhCGYt0ksvpRB9Qyx5LIWfTmziLhNcETLxZZI8Fsuh+UaU73kMQQ+FkKQk2wyD8h4Exf3D34f5nvvv5FSU73c7n7h/zBMvRb4+Lr6rQy0eL6rFYOfAWY1/XNTT89HF2zdvR+cX09PR6qzWo1P95/Ssnk6xxikMFs/LHLplV4BxtZfYUrxe0Dfjk/HJYCo+XV1/VJdfZk+V35A6GJVGp1Ykyz+rj1pTCApdpRpfmXqnpMY+BdlVPrGmoIxTWRpyt4a9a8hFmQ1rNLmQBXG5CeDjbJ6Vk/5r0A0sL75/HjHfH+fvFTdY3wCR7uKktWhklfSdvr+fiMWwgMsCNjIu5QL2+xUG+sq26+T4RyKWNlwe+z53YQEbwoo41/477YRcT3M0l9gCtynfXT+vDFlqvcelljXzLHY5mOgvn2/m0rz3F3DjK/Fh3Eo34RZKgAJ8v7fyDS1ne7Do1gnXgu3fKZ//AM2y1+Y=",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create multiple new user role pairings' (post-user-roles)"},sidebar:"nermSideBar",previous:{title:"Get user role pairings",permalink:"/docs/api/nerm/v1/get-user-roles"},next:{title:"Update multiple user role pairings",permalink:"/docs/api/nerm/v1/patch-user-roles"}},y={},_=[];function N(e){const s={p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Create multiple new user role pairings"}),"\n",(0,i.jsx)(t.Z,{method:"post",path:"/user_roles"}),"\n",(0,i.jsx)(s.p,{children:"Create multiple new user role pairings"}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"user_roles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Expected response to a valid request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(x(),{children:[(0,i.jsx)(f.default,{label:"UserRoles",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"user_roles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0}}),(0,i.jsx)(h(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0}}),(0,i.jsx)(h(),{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})}),(0,i.jsxs)(f.default,{label:"Job",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"job has started"}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"job_status"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3ce88e47ad6dba2ddf349d21"}}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"queued"}})]})]})}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{type:"int",example:200}})]})]})]})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(c(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request - unable to complete."})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(x(),{children:[(0,i.jsx)(f.default,{label:"InvalidJson",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,i.jsxs)(f.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(c(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(c(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}}}]);