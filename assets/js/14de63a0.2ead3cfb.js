"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[3425],{320597:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>y,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>_});var l=a(785893),r=a(511151),i=a(168562),t=a.n(i),n=(a(69957),a(496463)),o=(a(318438),a(998439)),p=a.n(o),d=(a(534168),a(603655)),c=a.n(d),m=a(313503),h=a.n(m),u=a(82479),x=a.n(u),b=a(555199),j=(a(645774),a(424455));const f={id:"create-profile-type-role",sidebar_label:"Create a profile type role",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v2zgQ/SuDOUu2669kBewhWWQBL9AkSLx7MYyCEscSG4pUSSqJYfi/L4Zyard2s02LxV7WB1sWHzVv5r0ZcYOSfOFUE5Q1mOG8Uh7IyMYqE6AQBgpHIhAIaJxdKU0Q1g2Bs5p6cH0zv0phXhGIXGkV1hAsBFuWmuBCa/vUv9S2eADlQVpDECpn27KCUBHc7h43XzeECdqGnGASM4kZdkF3EEbcWc2oIEqP2QJfuOzJeFwm6OhTSz5cWrnGbBP/KkcSs+BaSrCwJpAJvCSaRqsiBux/9Jz6Bn1RUS34ip+KGdr8IxUBEw7XkAuKPK+urKv/GbWj+IFRH5Q82OCDU6bE5Kj0BEqCXcXyHFYbE6RnUTeadw8pn5ydjVbpcHw+TceT4SrNZT5Kz36ZvhuN8tHgfDrEbYJclB+I67pCvzXeNsGgQtzwlWoet/HD6vjGGt+VZzgY8M+XVK6eGyoCSXiBsp8EPAqt+F4UF//X8V/UMcGfS/FU3ME0Pz+bpqvxZJqOz0YyzeV0kubT8WhCg3yaD+Wr/kmHnx00PmWaSyHhrvMGpNAakevom8Iyg0C9tzjGGrpZYbY4dsULvZmJdvyDt26Tb+P+YlQMc+WcdR63yy6JyakkZiaQM0LDPblHchD3QAqOQusMSbAGWlMJIzVJoOeC4k7/puReNzpxyGNmF1CT96Ik6O7nypRR9g5/KPW9dW4N3tYUKkY9kQnw5KwpdwpuE+Q1yyO+sbGXGxEqzLD/RZt1Az1BH4vhox6t05hhFULjs35/E8gIE65FTduesYbqRts1Ua+wdV80ChN8FE6xF2Jye3iX4Uq0OmCGoqipsMcGj3AwoiYQ3quSJWBPtT7Ymhzns2R+RetUWEeCOQlH7qLlfBbLw+V7VqDjcQj6LAgnxdlGGGY7ECa7i9+tqwWTndsHMhD4+9e1bV13GZuHxb7bv/2uXjTZT7mjOfZ9E+FgAH3/q0CZleWYLF5X0He9QW9w0B3XV3fv4eJ2dnK0vCzG80dO0Pqu+qIoyHsQRkJtpVqtgTW2ref3hW1dQR6UgVgaMo/KWVOTCdwjWhVkfCyIiSbA97N55Mo+rIU5WPntmyeer9lu9r33352cdiYK9Bz6jRaKx1LXLZtddy3wRHctE6y4BbMFbja58PSn09st3/7UkmNLL/c9FB2dYEVCkotuf6A1l6pLP91ReRS6ZS5HY4gHZbfjouDR9Sp2eTAlbm/u59wIuxNdbSXvceKJjSmeMMN4doyzMB75+N4GtTBlK0rGds/kz9/VbbOz",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile type role' (create-profile-type-role)"},y=void 0,g={id:"api/nerm/v1/create-profile-type-role",title:"create-profile-type-role",description:"<Heading",source:"@site/docs/api/nerm/v1/create-profile-type-role.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/create-profile-type-role",permalink:"/docs/api/nerm/v1/create-profile-type-role",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile type role' (create-profile-type-role)",tags:[],version:"current",frontMatter:{id:"create-profile-type-role",sidebar_label:"Create a profile type role",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v2zgQ/SuDOUu2669kBewhWWQBL9AkSLx7MYyCEscSG4pUSSqJYfi/L4Zyard2s02LxV7WB1sWHzVv5r0ZcYOSfOFUE5Q1mOG8Uh7IyMYqE6AQBgpHIhAIaJxdKU0Q1g2Bs5p6cH0zv0phXhGIXGkV1hAsBFuWmuBCa/vUv9S2eADlQVpDECpn27KCUBHc7h43XzeECdqGnGASM4kZdkF3EEbcWc2oIEqP2QJfuOzJeFwm6OhTSz5cWrnGbBP/KkcSs+BaSrCwJpAJvCSaRqsiBux/9Jz6Bn1RUS34ip+KGdr8IxUBEw7XkAuKPK+urKv/GbWj+IFRH5Q82OCDU6bE5Kj0BEqCXcXyHFYbE6RnUTeadw8pn5ydjVbpcHw+TceT4SrNZT5Kz36ZvhuN8tHgfDrEbYJclB+I67pCvzXeNsGgQtzwlWoet/HD6vjGGt+VZzgY8M+XVK6eGyoCSXiBsp8EPAqt+F4UF//X8V/UMcGfS/FU3ME0Pz+bpqvxZJqOz0YyzeV0kubT8WhCg3yaD+Wr/kmHnx00PmWaSyHhrvMGpNAakevom8Iyg0C9tzjGGrpZYbY4dsULvZmJdvyDt26Tb+P+YlQMc+WcdR63yy6JyakkZiaQM0LDPblHchD3QAqOQusMSbAGWlMJIzVJoOeC4k7/puReNzpxyGNmF1CT96Ik6O7nypRR9g5/KPW9dW4N3tYUKkY9kQnw5KwpdwpuE+Q1yyO+sbGXGxEqzLD/RZt1Az1BH4vhox6t05hhFULjs35/E8gIE65FTduesYbqRts1Ua+wdV80ChN8FE6xF2Jye3iX4Uq0OmCGoqipsMcGj3AwoiYQ3quSJWBPtT7Ymhzns2R+RetUWEeCOQlH7qLlfBbLw+V7VqDjcQj6LAgnxdlGGGY7ECa7i9+tqwWTndsHMhD4+9e1bV13GZuHxb7bv/2uXjTZT7mjOfZ9E+FgAH3/q0CZleWYLF5X0He9QW9w0B3XV3fv4eJ2dnK0vCzG80dO0Pqu+qIoyHsQRkJtpVqtgTW2ref3hW1dQR6UgVgaMo/KWVOTCdwjWhVkfCyIiSbA97N55Mo+rIU5WPntmyeer9lu9r33352cdiYK9Bz6jRaKx1LXLZtddy3wRHctE6y4BbMFbja58PSn09st3/7UkmNLL/c9FB2dYEVCkotuf6A1l6pLP91ReRS6ZS5HY4gHZbfjouDR9Sp2eTAlbm/u59wIuxNdbSXvceKJjSmeMMN4doyzMB75+N4GtTBlK0rGds/kz9/VbbOz",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile type role' (create-profile-type-role)"},sidebar:"nermSideBar",previous:{title:"Delete synced attribute",permalink:"/docs/api/nerm/v1/delete-synced-attribute"},next:{title:"Create a profile",permalink:"/docs/api/nerm/v1/post-profile"}},v={},_=[];function q(e){const s={p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Create a profile type role"}),"\n",(0,l.jsx)(n.Z,{method:"post",path:"/profile_type_roles"}),"\n",(0,l.jsx)(s.p,{children:"This endpoint can create a profile type role. NOTE- The ability to toggle Allow/Block is done through the Profile Type"}),"\n",(0,l.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(p(),{className:"openapi-tabs__mime",children:(0,l.jsx)(j.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"form"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(h(),{collapsible:!1,name:"profile_type_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the profile type",example:"2eb5773f-2486-452f-bdb3-796133b30862"}}),(0,l.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the role",example:"2eb5773f-2486-452f-bdb3-796133b30862"}})]})]})})})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(t(),{label:void 0,id:void 0,children:[(0,l.jsxs)(j.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Expected response to a valid request"})}),(0,l.jsx)("div",{children:(0,l.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"form"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(h(),{collapsible:!1,name:"profile_type_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the profile type",example:"2eb5773f-2486-452f-bdb3-796133b30862"}}),(0,l.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the role",example:"2eb5773f-2486-452f-bdb3-796133b30862"}}),(0,l.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the profile type role",example:"2e06b876-f456-473d-bd65-b6435e0b6b2d"}})]})]})})})]})}),(0,l.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(c(),{responseExample:'{\n  "form": {\n    "profile_type_id": "2eb5773f-2486-452f-bdb3-796133b30862",\n    "role_id": "2eb5773f-2486-452f-bdb3-796133b30862",\n    "id": "2e06b876-f456-473d-bd65-b6435e0b6b2d"\n  }\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(j.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Bad Request - unable to complete."})}),(0,l.jsx)("div",{children:(0,l.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,l.jsx)(s.p,{children:"oneOf"})}),(0,l.jsxs)(x(),{children:[(0,l.jsx)(j.default,{label:"InvalidJson",value:"0-item-properties",children:(0,l.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,l.jsxs)(j.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,l.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,l.jsx)(h(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,l.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(c(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(j.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,l.jsx)("div",{children:(0,l.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(j.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,l.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(c(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function N(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(q,{...e})}):q(e)}}}]);