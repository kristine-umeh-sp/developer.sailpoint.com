"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21959],{830705:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(785893),o=r(511151);const i={id:"connector-executed-rules",title:"Connector Executed Rules",pagination_label:"Connector Executed Rules",sidebar_label:"Connector Executed Rules",sidebar_position:3,sidebar_class_name:"cloudExecutedRules",keywords:["connector","rules"],description:"Overview of connector-executed rules.",slug:"/extensibility/rules/connector-rules",tags:["Rules"]},s=void 0,l={id:"extensibility/rules/connector-rules/connector-executed-rules",title:"Connector Executed Rules",description:"Overview of connector-executed rules.",source:"@site/docs/extensibility/rules/connector-rules/index.md",sourceDirName:"extensibility/rules/connector-rules",slug:"/extensibility/rules/connector-rules",permalink:"/docs/extensibility/rules/connector-rules",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/connector-rules/index.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:3,frontMatter:{id:"connector-executed-rules",title:"Connector Executed Rules",pagination_label:"Connector Executed Rules",sidebar_label:"Connector Executed Rules",sidebar_position:3,sidebar_class_name:"cloudExecutedRules",keywords:["connector","rules"],description:"Overview of connector-executed rules.",slug:"/extensibility/rules/connector-rules",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Transform Rule",permalink:"/docs/extensibility/rules/cloud-rules/transform-rule"},next:{title:"Before and After Operations",permalink:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}},c={},d=[{value:"Supported Connector Rules",id:"supported-connector-rules",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Connector Rule Object Model",id:"connector-rule-object-model",level:2},{value:"Attaching Connector-Related Rules to Sources",id:"attaching-connector-related-rules-to-sources",level:2},{value:"Example API calls by Rule Type",id:"example-api-calls-by-rule-type",level:2},{value:"BeforeProvisioning Rule",id:"beforeprovisioning-rule",level:3},{value:"AfterCreate, AfterModify, AfterDelete, BeforeCreate, BeforeModify, BeforeDelete Rules",id:"aftercreate-aftermodify-afterdelete-beforecreate-beforemodify-beforedelete-rules",level:3},{value:"Correlation Rule",id:"correlation-rule",level:3},{value:"ManagerCorrelation Rule",id:"managercorrelation-rule",level:3},{value:"BuildMap Rule",id:"buildmap-rule",level:3},{value:"JDBCBuildMap Rule",id:"jdbcbuildmap-rule",level:3},{value:"JDBCProvision Rule",id:"jdbcprovision-rule",level:3},{value:"SAP HR Provisioning Modify Rule",id:"sap-hr-provisioning-modify-rule",level:3},{value:"WebServiceBeforeOperation Rule",id:"webservicebeforeoperation-rule",level:3},{value:"WebServiceAfterOperation Rule",id:"webserviceafteroperation-rule",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Connector-Executed Rules"})," or ",(0,t.jsx)(n.strong,{children:"Connector Rules"})," are rules that are executed in the Identity Security Cloud virtual appliance, and they are usually extensions of the connector itself. The rules are commonly used to perform complex connector-related functions, so they are specific to only certain connectors. Because these rules execute in the virtual appliance, they do not have access to query the Identity Security Cloud data model or fetch information from Identity Security Cloud. They rely instead on contextual information sent from Identity Security Cloud. Connector-executed rules may also have managed connections provided in their contexts to support querying end systems or sources. Though these managed connections may be used, making additional connections or call-outs is not allowed."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike cloud rules, connector rules do not have a rule review process and are directly editable with the ",(0,t.jsx)(n.a,{href:"https://developer.sailpoint.com/docs/api/beta/connector-rule-management",children:"Connector Rule REST APIs"}),". For more details, see ",(0,t.jsx)(n.a,{href:"#configuration-process",children:"Configuration Process"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-connector-rules",children:"Supported Connector Rules"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Rule Name"}),(0,t.jsx)(n.th,{children:"Rule Type"}),(0,t.jsx)(n.th,{children:"Source Type(s)"}),(0,t.jsx)(n.th,{children:"Purpose"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"Before Creation Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"ConnectorBeforeCreate"})}),(0,t.jsx)(n.td,{children:"Active Directory, Azure Active Directory"}),(0,t.jsx)(n.td,{children:"Executes PowerShell commands on the IQService component before a source account is created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"Before Modify Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"ConnectorBeforeModify"})}),(0,t.jsx)(n.td,{children:"Active Directory, Azure Active Directory"}),(0,t.jsx)(n.td,{children:"Executes PowerShell commands on the IQService component before a source account is modified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"Before Delete Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"ConnectorBeforeDelete"})}),(0,t.jsx)(n.td,{children:"Active Directory, Azure Active Directory"}),(0,t.jsx)(n.td,{children:"Executes PowerShell commands on the IQService component before a source account is deleted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"After Creation Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"ConnectorAfterCreate"})}),(0,t.jsx)(n.td,{children:"Active Directory, Azure Active Directory"}),(0,t.jsx)(n.td,{children:"Executes PowerShell commands on the IQService component after a source account is created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"After Modify Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"ConnectorAfterModify"})}),(0,t.jsx)(n.td,{children:"Active Directory, Azure Active Directory"}),(0,t.jsx)(n.td,{children:"Executes PowerShell commands on the IQService component after a source account is modified."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"After Delete Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations",children:"ConnectorAfterDelete"})}),(0,t.jsx)(n.td,{children:"Active Directory, Azure Active Directory"}),(0,t.jsx)(n.td,{children:"Executes PowerShell commands on the IQService component after a source account is deleted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Build Map Rule"}),(0,t.jsx)(n.td,{children:"BuildMap"}),(0,t.jsx)(n.td,{children:"Delimited File"}),(0,t.jsxs)(n.td,{children:["Calculates and transforms data from a parsed file during the aggregation process. ",(0,t.jsx)(n.em,{children:"Note: This is only available for the Delimited File source type, not Generic source types."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule",children:"JDBC Build Map Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule",children:"JDBCBuildMap"})}),(0,t.jsx)(n.td,{children:"JDBC"}),(0,t.jsxs)(n.td,{children:["Calculates and transforms data from a database query result during the aggregation process. It can also perform additional calls back to the database. ",(0,t.jsx)(n.em,{children:"Note: This rule is available for the JDBC Generic source, as well as other sources that derive from the JDBC connector (e.g., Oracle EBS, PeopleSoft, etc.)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/jdbc-provisioning-rule",children:"JDBC Provision Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/jdbc-provisioning-rule",children:"JDBCProvision"})}),(0,t.jsx)(n.td,{children:"JDBC"}),(0,t.jsx)(n.td,{children:"Executes database queries to perform provisioning of account and access for all account operations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/sap-buildmap-rule",children:"SAP Build Map Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/sap-buildmap-rule",children:"SAPBuildMap"})}),(0,t.jsx)(n.td,{children:"SAP HR, SAP"}),(0,t.jsx)(n.td,{children:"Calculates and transforms data from SAP during the aggregation process. It can also perform additional calls back to the SAP system using SAP BAPI calls."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/sap-provisioning-modify-rule",children:"SAP HR Provisioning Modify Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/sap-provisioning-modify-rule",children:"SapHrOperationProvisioning"})}),(0,t.jsx)(n.td,{children:"SAP HR"}),(0,t.jsx)(n.td,{children:"Performs SAP HR modification operations during provisioning. Often used for attribute sync to custom SAP HR attributes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule",children:"Web Services Before Operation Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule",children:"WebServiceBeforeOperationRule"})}),(0,t.jsx)(n.td,{children:"Web Services"}),(0,t.jsx)(n.td,{children:"Executes before the next web-services HTTP(S) operation. Often used to calculate values."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/webservices-after-provisioning-rule",children:"Web Services After Operation Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/extensibility/rules/connector-rules/webservices-after-provisioning-rule",children:"WebServiceAfterOperationRule"})}),(0,t.jsx)(n.td,{children:"Web Services"}),(0,t.jsx)(n.td,{children:"Executes after a web-services HTTP(S) operation. Often used to parse complex data."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-process",children:"Configuration Process"}),"\n",(0,t.jsxs)(n.p,{children:["Connector Rules are directly editable with the ",(0,t.jsx)(n.a,{href:"https://developer.sailpoint.com/docs/api/beta/connector-rule-management",children:"Connector Rule REST APIs"}),", which provide ability to interact with rules directly."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Path"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/beta/get-connector-rule-list",children:"List Connector Rules"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GET /beta/connector-rules/"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/beta/get-connector-rule",children:"Get Connector Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GET /beta/connector-rules/[id]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/beta/create-connector-rule",children:"Create Connector Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST /beta/connector-rules/"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/beta/update-connector-rule",children:"Update Connector Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"PUT /beta/connector-rules/[id]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/beta/delete-connector-rule",children:"Delete Connector Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DELETE /beta/connector-rules/[id]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/beta/validate-connector-rule",children:"Validate Connector Rule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"POST /beta/connector-rules/validate"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["SailPoint architectural optimizations have added resiliency and protections against malformed or long-running rules. These APIs also offer built-in protection and checking against potentially harmful code. For more information, see ",(0,t.jsx)(n.a,{href:"/docs/extensibility/rules#rule-code-restrictions",children:"Rule Code Restrictions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"connector-rule-object-model",children:"Connector Rule Object Model"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": "2c91808674a2816a0174af21a6450009",\n    "name": "Example WebServices Rule",\n    "description": "This is just an example",\n    "created": "2020-09-21T05:27:32.170Z",\n    "modified": null,\n    "type": "WebServiceBeforeOperationRule",\n    "signature": {\n        "input": [],\n        "output": null\n    },\n    "attributes": {\n        "sourceVersion": "2020-09-21 05:27:31"\n    },\n    "sourceCode": {\n        "version": "2020-09-21 05:27:31",\n        "script": "\\n      import java.util.HashMap;\\n      import org.json.JSONArray;\\n      import org.json.JSONException;\\n      import org.json.JSONObject;\\n\\n      import org.apache.http.HttpEntity;\\n      import org.apache.http.HttpResponse;\\n      import org.apache.http.client.HttpClient;\\n      import org.apache.http.client.methods.HttpPost;\\n      import ...\nrequestEndPoint.getBody().put(\\"jsonBody\\",requestXML); \\n              }\\n        }\\n    }\\n    log.info(\\"Done Ultipro Onboarding before operation rule...\\");\\n    return requestEndPoint;\\n"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," - Unique UUID that the REST APIs refers to this rule by. This is generated on creation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," - Name the user interface and references may use to refer to this rule."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"description"})," - Description of the rule\u2019s purpose or usage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"created"})," - Timestamp when the rule was created."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"modified"})," - Timestamp when the rule was last modified. The default is ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"})," - Type of connector rule. For a list of supported rule types, see ",(0,t.jsx)(n.a,{href:"#supported-connector-rules",children:"Supported Connector Rules"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"attributes"})," - List of attributes.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sourceVersion"})," - String indicating the rule's version. Typically, this is the same as ",(0,t.jsx)(n.code,{children:"version"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sourceCode"})," - Object housing the actual source code that makes the rule work.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"version"})," - String indicating the rule's version. Typically, this is the same as ",(0,t.jsx)(n.code,{children:"sourceVersion"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"script"})," - Rule\u2019s code the connector runs. This must be an escaped string. For help with formatting, use an escaping tool like ",(0,t.jsx)(n.a,{href:"https://www.freeformatter.com/java-dotnet-escape.html#before-output",children:"Free Formatter."})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"attaching-connector-related-rules-to-sources",children:"Attaching Connector-Related Rules to Sources"}),"\n",(0,t.jsxs)(n.p,{children:["Once a connector-related rule has been imported to your tenant, you must configure any sources that need to reference that rule during the desired operation. You can accomplish this configuration through the execution of an API call on the source. The following examples all use a ",(0,t.jsx)(n.code,{children:"PATCH"})," operation for a partial source update, but ",(0,t.jsx)(n.code,{children:"PUT"})," operations work too, as long as the entire source object model is provided."]}),"\n",(0,t.jsxs)(n.p,{children:["For the ",(0,t.jsx)(n.code,{children:"PATCH"})," operations, you must provide an ",(0,t.jsx)(n.code,{children:"op"})," key. For new configurations, this key is typically set to ",(0,t.jsx)(n.code,{children:"add"})," as the example shows, but they can be any of the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"add"})," - Add a new value to the configuration. Use this operation if this is the first time you are setting the value, i.e. it has never been configured before."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"replace"})," - Use this operation to change the existing value. Use this operation if you are updating the value, i.e. you want to change the configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"remove"})," - Removes a value from the configuration. Use this operation if you want to unset a value. ",(0,t.jsx)(n.strong,{children:"Caution: Removals can be destructive if the path is improperly configured. This can negatively alter your source config."})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-api-calls-by-rule-type",children:"Example API calls by Rule Type"}),"\n",(0,t.jsx)(n.h3,{id:"beforeprovisioning-rule",children:"BeforeProvisioning Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/beforeProvisioningRule",\n    "value": {\n      "type": "RULE",\n      "id": "2c918085708c274401708c2a8a760001",\n      "name": "Example Rule"\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"aftercreate-aftermodify-afterdelete-beforecreate-beforemodify-beforedelete-rules",children:"AfterCreate, AfterModify, AfterDelete, BeforeCreate, BeforeModify, BeforeDelete Rules"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The value key is a list. All available AfterCreate, AfterModify, BeforeCreate, and BeforeModify rules will need to be set in the same list."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/nativeRules",\n    "value": ["Example Rule 1", "Example Rule 2"]\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"correlation-rule",children:"Correlation Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/accountCorrelationRule",\n    "value": {\n      "type": "RULE",\n      "id": "2c9180896fc824e5016fc827ea880005",\n      "name": "Example Rule"\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"managercorrelation-rule",children:"ManagerCorrelation Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "replace",\n    "path": "/managerCorrelationRule",\n    "value": {\n      "type": "RULE",\n      "id": "2c9180836fb03f35016fb05dae3b0001",\n      "name": "Example Rule"\n    }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"buildmap-rule",children:"BuildMap Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/buildMapRule",\n    "value": "Example Rule"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"jdbcbuildmap-rule",children:"JDBCBuildMap Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/buildMapRule",\n    "value": "Example Rule"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"jdbcprovision-rule",children:"JDBCProvision Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/jdbcProvisionRule",\n    "value": "Example Rule"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"sap-hr-provisioning-modify-rule",children:"SAP HR Provisioning Modify Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/saphrModifyProvisioningRule",\n    "value": "Example Rule"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"webservicebeforeoperation-rule",children:"WebServiceBeforeOperation Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id]"]}),"\n",(0,t.jsxs)(n.p,{children:["Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsxs)(n.p,{children:["_Note: Replace ",(0,t.jsx)(n.code,{children:"_"}),"with the index location of operation the way it is configured on the source. For example, 0, 1, 2, etc. You can use a",(0,t.jsx)(n.code,{children:"GET"}),"call on the source first to verify the index location prior to executing the",(0,t.jsx)(n.code,{children:"PATCH"})," call to attach the rule.*"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "replace",\n    "path": "/connectorAttributes/connectionParameters/[*]/beforeRule",\n    "value": "Example Rule"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"webserviceafteroperation-rule",children:"WebServiceAfterOperation Rule"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PATCH"})," /v3/sources/[id] Content-Type: ",(0,t.jsx)(n.code,{children:"application/json-patch+json"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: Replace [*] with the index location of the operation the way it is configured on the source. For example, 0, 1, 2, etc. You can use a ",(0,t.jsx)(n.code,{children:"GET"})," call on the source first to verify the index location prior to executing the ",(0,t.jsx)(n.code,{children:"PATCH"})," call to attach the rule."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "op": "replace",\n    "path": "/connectorAttributes/connectionParameters/[*]/afterRule",\n    "value": "Example Rule"\n  }\n]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);