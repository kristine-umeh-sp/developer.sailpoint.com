"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36830],{618762:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>v,default:()=>q,frontMatter:()=>f,metadata:()=>b,toc:()=>_});var i=a(785893),l=a(511151),r=a(168562),n=a.n(r),t=(a(69957),a(496463)),c=(a(318438),a(998439)),m=a.n(c),o=(a(534168),a(603655)),d=a.n(o),p=a(313503),h=a.n(p),u=a(82479),x=a.n(u),j=a(555199),g=(a(645774),a(424455));const f={id:"patch-user-roles",sidebar_label:"Update multiple user role pairings",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu20YQ/ZXFPFOS44vSEuiDErioAiQNbLkvglCMlkNxk+UusxfbAsF/D2bXluQqdRWgfJCWO2c4Z+492I4cBmXNvIISOgyyufPkbqwmDwVU5KVTHQOghLuuwkCijTqoTpOInpxwVpPoUDllNqwScOOhXMJO6GFVgKNvkXx4Z6stlH16VY4qKIOLVIC0JpAJLMKu00omTpMvnu324GVDLfIpbDuCEuz6C8kABXSOPQiKPEvZ5t/Z5h6LzuEWClCBWv/f31DVAcYHdgsKqK1rMUAJMaoKhiKbOhHLjE7DDgUEFTRDdmkYncOQHw6j76zxmen52Rn/vczR9WNHMlAlnqEiWIHiHrXiu5QF+ImAW0N/1lAuj8N2RBSG4t9RH+wahlX24vJHxN9hJW4yPzES0eBaJ+7Stp2mQOP/l/XcpJB8YNXXeP/FqGTm2jnr/M6Jqx85MTeBnEEtbsndkxNJR4yEoxCdoUpYI6Jp0FSaKkGPkpKm/ynnXq9fYpPHzGaiJe9xQyLfr5XZiNCQyPgC6BE50FDCrXVuK7xtKTSMeiATxIOzZrMvRJbZ3chgEhgaKGFy0IIF+BQFnxIRnYYSmhA6X04mfSCDJnzCloaxsYbaTtst0VjadoKdggLu0SkugtyzO3h2rcaouW1QtiTt0aRaJLgw2JJA79WGY8/FFH2wLTl2ZMX8ZHQqbBPBNaEjN4vsx3J1KL7l0Gceh6BdJtgp9jbBoHwCQfF0+P25xxf2KxkR+Pe3rY0uH1PXc5Zv9jPy+jkZL2faMo8nuKjxl6t6ejm6evvm7ejyano+Wl/UcnQuf51e1NMp1jiFgxl1qsJuUJ2mMKyGApSpLfPkROfgvxmfjc8OWujT9c1HMfs8P85SQ+JZKCQasU47JWUKpSTvBZpKtLZS9VZwPdjoebDZ6CR5oYxIYSRzr5w1LZnAjaSVJONT8EwqGPg4X6Qod9aHFs2B5KSV9oJ1v2/UExdiLpJAj2HSaVQmrQ/uhv6pa5aHSV4V0Fgf+Lbv1+jpzulh4OtvkRyX6mrfG6lSC2gIK3KpPr7SFkp4nymOFmyb4TqmVfjPucKTL2vMJM+iV7Grg7b/PFu8/4Mr/Gmht7ZiJYcPXEb4ACVAATZPt7Tx+a4HjWYTccPY/FF+vgMSxO0t",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user role pairings' (patch-user-roles)"},v=void 0,b={id:"api/nerm/v1/patch-user-roles",title:"patch-user-roles",description:"<Heading",source:"@site/docs/api/nerm/v1/patch-user-roles.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/patch-user-roles",permalink:"/docs/api/nerm/v1/patch-user-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user role pairings' (patch-user-roles)",tags:[],version:"current",frontMatter:{id:"patch-user-roles",sidebar_label:"Update multiple user role pairings",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu20YQ/ZXFPFOS44vSEuiDErioAiQNbLkvglCMlkNxk+UusxfbAsF/D2bXluQqdRWgfJCWO2c4Z+492I4cBmXNvIISOgyyufPkbqwmDwVU5KVTHQOghLuuwkCijTqoTpOInpxwVpPoUDllNqwScOOhXMJO6GFVgKNvkXx4Z6stlH16VY4qKIOLVIC0JpAJLMKu00omTpMvnu324GVDLfIpbDuCEuz6C8kABXSOPQiKPEvZ5t/Z5h6LzuEWClCBWv/f31DVAcYHdgsKqK1rMUAJMaoKhiKbOhHLjE7DDgUEFTRDdmkYncOQHw6j76zxmen52Rn/vczR9WNHMlAlnqEiWIHiHrXiu5QF+ImAW0N/1lAuj8N2RBSG4t9RH+wahlX24vJHxN9hJW4yPzES0eBaJ+7Stp2mQOP/l/XcpJB8YNXXeP/FqGTm2jnr/M6Jqx85MTeBnEEtbsndkxNJR4yEoxCdoUpYI6Jp0FSaKkGPkpKm/ynnXq9fYpPHzGaiJe9xQyLfr5XZiNCQyPgC6BE50FDCrXVuK7xtKTSMeiATxIOzZrMvRJbZ3chgEhgaKGFy0IIF+BQFnxIRnYYSmhA6X04mfSCDJnzCloaxsYbaTtst0VjadoKdggLu0SkugtyzO3h2rcaouW1QtiTt0aRaJLgw2JJA79WGY8/FFH2wLTl2ZMX8ZHQqbBPBNaEjN4vsx3J1KL7l0Gceh6BdJtgp9jbBoHwCQfF0+P25xxf2KxkR+Pe3rY0uH1PXc5Zv9jPy+jkZL2faMo8nuKjxl6t6ejm6evvm7ejyano+Wl/UcnQuf51e1NMp1jiFgxl1qsJuUJ2mMKyGApSpLfPkROfgvxmfjc8OWujT9c1HMfs8P85SQ+JZKCQasU47JWUKpSTvBZpKtLZS9VZwPdjoebDZ6CR5oYxIYSRzr5w1LZnAjaSVJONT8EwqGPg4X6Qod9aHFs2B5KSV9oJ1v2/UExdiLpJAj2HSaVQmrQ/uhv6pa5aHSV4V0Fgf+Lbv1+jpzulh4OtvkRyX6mrfG6lSC2gIK3KpPr7SFkp4nymOFmyb4TqmVfjPucKTL2vMJM+iV7Grg7b/PFu8/4Mr/Gmht7ZiJYcPXEb4ACVAATZPt7Tx+a4HjWYTccPY/FF+vgMSxO0t",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user role pairings' (patch-user-roles)"},sidebar:"nermSideBar",previous:{title:"Create multiple new user role pairings",permalink:"/docs/api/nerm/v1/post-user-roles"},next:{title:"Find user role pairing by id",permalink:"/docs/api/nerm/v1/get-user-role"}},y={},_=[];function N(e){const s={p:"p",...(0,l.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Update multiple user role pairings"}),"\n",(0,i.jsx)(t.Z,{method:"patch",path:"/user_roles"}),"\n",(0,i.jsx)(s.p,{children:"Update multiple user role pairings"}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"user_roles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Expected response to a valid request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(x(),{children:[(0,i.jsx)(g.default,{label:"UserRoles",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"user_roles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0}}),(0,i.jsx)(h(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0}}),(0,i.jsx)(h(),{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})}),(0,i.jsxs)(g.default,{label:"Job",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"job has started"}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"job_status"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3ce88e47ad6dba2ddf349d21"}}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"queued"}})]})]})}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{type:"int",example:200}})]})]})]})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(d(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request - unable to complete."})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(x(),{children:[(0,i.jsx)(g.default,{label:"InvalidJson",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,i.jsxs)(g.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(d(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(d(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}}}]);