"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[78329],{493756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=n(785893),s=n(511151);const r={id:"filtering-events",title:"Filtering Events",pagination_label:"Filtering Events",sidebar_label:"Filtering Events",sidebar_position:4,sidebar_class_name:"filteringEvents",keywords:["filtering","events"],description:"Many triggers can produce a staggering amount of events if left unfiltered. Event filtering helps you solve this problem.",slug:"/extensibility/event-triggers/filtering-events",tags:["Event Triggers"]},a=void 0,l={id:"extensibility/event-triggers/filtering-events",title:"Filtering Events",description:"Many triggers can produce a staggering amount of events if left unfiltered. Event filtering helps you solve this problem.",source:"@site/docs/extensibility/event-triggers/filtering-events.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/filtering-events",permalink:"/docs/extensibility/event-triggers/filtering-events",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/filtering-events.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:4,frontMatter:{id:"filtering-events",title:"Filtering Events",pagination_label:"Filtering Events",sidebar_label:"Filtering Events",sidebar_position:4,sidebar_class_name:"filteringEvents",keywords:["filtering","events"],description:"Many triggers can produce a staggering amount of events if left unfiltered. Event filtering helps you solve this problem.",slug:"/extensibility/event-triggers/filtering-events",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Subscribing to a Trigger",permalink:"/docs/extensibility/event-triggers/subscribing-to-trigger"},next:{title:"Testing Triggers",permalink:"/docs/extensibility/event-triggers/testing-triggers"}},d={},o=[{value:"What is a Filter",id:"what-is-a-filter",level:2},{value:"Benefits of Using Filters",id:"benefits-of-using-filters",level:2},{value:"Constructing a Filter",id:"constructing-a-filter",level:2},{value:"Expressions",id:"expressions",level:3},{value:"Functions",id:"functions",level:3},{value:"Operators",id:"operators",level:3},{value:"Developing Filters",id:"developing-filters",level:3},{value:"Validating Filters",id:"validating-filters",level:2},{value:"Validating Filters Using the UI",id:"validating-filters-using-the-ui",level:3},{value:"Validating Filters Using the API",id:"validating-filters-using-the-api",level:3},{value:"Testing Filters",id:"testing-filters",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"what-is-a-filter",children:"What is a Filter"}),"\n",(0,i.jsx)(t.p,{children:"Many triggers can produce a staggering amount of events if left unfiltered, resulting in more network traffic and more processing time on a subscribing service. Your subscribing service usually only needs to be notified of events containing a key attribute or value you want to process. For example, the Identity Attributes Changed trigger emits an event whenever an identity has a change in attributes. This can occur during the mover process when an identity changes departments or a manager is promoted, resulting in several identities receiving a new manager. Rather than inundate your subscribing service with every identity change, you can use an event trigger filter to specify which events your service is interested in processing."}),"\n",(0,i.jsx)(t.h2,{id:"benefits-of-using-filters",children:"Benefits of Using Filters"}),"\n",(0,i.jsx)(t.p,{children:"Network bandwidth and processing power come at a cost, especially when you are using managed solutions like AWS or no-code providers like Zapier. Without filtering, a subscribing service would be sent every single event that the trigger receives. The first thing any subscriber must do in this scenario is inspect each event to figure out which ones it must process and which ones it can ignore. Taking this approach with managed providers that charge per invocation, like AWS Lambda, can become expensive. Furthermore, some no-code providers may put a limit on the total number of invocations that a service can make in a given month, which would be quickly exhausted with this approach. Trigger filters take the filtering logic out of your subscribing service and place it on the event trigger within SailPoint, so you only receive the events matching your filter criteria."}),"\n",(0,i.jsx)(t.h2,{id:"constructing-a-filter",children:"Constructing a Filter"}),"\n",(0,i.jsxs)(t.p,{children:["Event trigger filters are constructed using a ",(0,i.jsx)(t.strong,{children:"Jayway"})," JSONpath expression. See the following tables for a list of operators that can be used in a trigger filter."]}),"\n",(0,i.jsx)(t.h3,{id:"expressions",children:"Expressions"}),"\n",(0,i.jsx)(t.p,{children:"Expressions specify a path to an element or array of elements in a JSON structure. Expressions are used to select data in a JSON structure to check for the existence of attributes or to narrow down the data where the filter logic is applied."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Expression"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"$"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Root"})," - The root object / element."]}),(0,i.jsx)(t.td,{children:"$"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"@"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Current"})," - The current object / element of an array."]}),(0,i.jsx)(t.td,{children:'$.changes[?(@.attribute == "department")]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Child operator"})," - Selects a child element of an object."]}),(0,i.jsx)(t.td,{children:"$.identity"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:".."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Recursive descent"})," - JSONPath borrows this syntax from E4X."]}),(0,i.jsx)(t.td,{children:"$..id"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Wildcard"})," - All objects / elements regardless of their names."]}),(0,i.jsx)(t.td,{children:"$.changes[*]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"[]"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Subscript"})," - In Javascript and JSON, it is the native array operator."]}),(0,i.jsx)(t.td,{children:"$.changes[1].attribute"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"[,]"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Union"})," - Selects elements of an array."]}),(0,i.jsx)(t.td,{children:"$.changes[0,1,2]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["[start:stop",":step","]"]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Array slice"})," - Selects elements of an array."]}),(0,i.jsx)(t.td,{children:"$.changes[0:2:1]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["[",":n","]"]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Array slice"})," - Selects the first ",(0,i.jsx)(t.code,{children:"n"})," elements of an array."]}),(0,i.jsx)(t.td,{children:"$.changes[:2]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"[-n:]"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Array slice"})," - Selects the last ",(0,i.jsx)(t.code,{children:"n"})," elements of an array."]}),(0,i.jsx)(t.td,{children:"$.changes[-1:]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"?()"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Filter expression"})," - Applies a filter expression."]}),(0,i.jsx)(t.td,{children:'$[?($.identity.name == "john.doe")]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"()"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Script expression"})," - Applies a script expression."]}),(0,i.jsx)(t.td,{children:"$.changes[(@.length-1)]"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(t.p,{children:"Functions can be invoked at the tail end of a path - the input to a function is the output of the path expression. The function output is dictated by the function itself."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Output type"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"length()"}),(0,i.jsx)(t.td,{children:"Provides the length of an array"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"$[?($.changes.length() >= 3)]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"concat()"}),(0,i.jsx)(t.td,{children:"Concatenates two or more paths into a single string value"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:'$.concat($.identity.attributes.firstname," ",$.identity.attributes.lastname)'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"operators",children:"Operators"}),"\n",(0,i.jsx)(t.p,{children:"Operators provide more options to filter JSON structures."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Operator"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"=="}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Equals to"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if operands match."]}),(0,i.jsx)(t.td,{children:'$[?($.identity.name == "john.doe")]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"!="}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Not equal to"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if operands do not match."]}),(0,i.jsx)(t.td,{children:'$[?($.identity.name != "george.washington")]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:">"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Greater than"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand is greater than the right operand. It works on strings and numbers."]}),(0,i.jsx)(t.td,{children:"$[?($.attributes.created > '2020-04-27T16:48:33.200Z')]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:">="}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Greater than or equal to"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand is greater than or equal to the right operand."]}),(0,i.jsx)(t.td,{children:"$[?($.attributes.created >= '2020-04-27T16:48:33.597Z')]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"<"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Less than"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand is less than the right operand."]}),(0,i.jsx)(t.td,{children:"$[?($.attributes.created < '2020-04-27T16:48:33.200Z')]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"<="}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Less than or equal to"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand is less than or equal to the right operand."]}),(0,i.jsx)(t.td,{children:"$[?($.attributes.created <= '2020-04-27T16:48:33.200Z')]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"=~"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Regular expression"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand matches the regular expression."]}),(0,i.jsx)(t.td,{children:'$.changes[?(@.attribute == "department" && @.newValue =~ /US.*Support/i)]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"in"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"In"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand exists in the list of values on the right."]}),(0,i.jsx)(t.td,{children:"$.changes[?(@.attribute == 'department' && @.newValue in ['sales','engineering'])]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nin"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Not in"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand ",(0,i.jsx)(t.strong,{children:"does not"})," exist in the list of values on the right."]}),(0,i.jsx)(t.td,{children:"$.changes[?(@.attribute == 'department' && @.newValue nin ['sales','engineering'])]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subsetof"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Subset of"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand is a subset of the right."]}),(0,i.jsx)(t.td,{children:"$[?($.warnings subsetof ['Account skipped','Invalid account'])]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"anyof"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Any of"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand has an intersection with the right."]}),(0,i.jsx)(t.td,{children:"$[?($.warnings anyof ['Account skipped','Invalid account'])]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"noneof"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"None of"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the left operand ",(0,i.jsx)(t.strong,{children:"does not"})," have an intersection with the right."]}),(0,i.jsx)(t.td,{children:"$[?($.warnings noneof ['Account skipped','Invalid account'])]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"size"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Size"})," - Evaluates to ",(0,i.jsx)(t.code,{children:"true"})," if the size of the left (array or string) matches the right."]}),(0,i.jsx)(t.td,{children:"$[?($.warnings size 1]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&&"}),(0,i.jsxs)(t.td,{children:["Logical ",(0,i.jsx)(t.strong,{children:"AND"})," operator that evaluates ",(0,i.jsx)(t.code,{children:"true"})," only if both conditions are ",(0,i.jsx)(t.code,{children:"true"}),". You can only use this operator when both operands are part of the same item."]}),(0,i.jsx)(t.td,{children:'$.changes[?(@.attribute == "cloudLifecycleState" && @.newValue == "terminated")]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"!"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Not"})," - Negates the boolean expression."]}),(0,i.jsx)(t.td,{children:"$.identity.attributes[?(!@.alternateEmail)]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"||"}),(0,i.jsxs)(t.td,{children:["Logical ",(0,i.jsx)(t.strong,{children:"OR"})," operator that evaluates ",(0,i.jsx)(t.code,{children:"true"})," if at least one condition is ",(0,i.jsx)(t.code,{children:"true"}),"."]}),(0,i.jsx)(t.td,{children:'$.changes[?(@.attribute == "cloudLifecycleState" || @.attribute == "department")]'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"contains"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"Contains"})," - Checks whether a string contains the specified substring (case sensitive)."]}),(0,i.jsx)(t.td,{children:'$[?($.identity.name contains "john")]'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"developing-filters",children:"Developing Filters"}),"\n",(0,i.jsxs)(t.p,{children:["Developing a filter can be faster when you use a tool like an online ",(0,i.jsx)(t.a,{href:"https://www.javainuse.com/jsonpath",children:"JSONpath editor"}),". These tools can provide quick feedback on your filter, allowing you to focus on the exact filter expression you want before testing it on a trigger. Just paste an example of your event trigger input and start crafting an expression to see its result."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Third party websites like the one mentioned earlier must be treated with caution. Do not use real data from your tenant when you're interacting with these tools."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"JSONPath editor",src:n(996566).Z+"",width:"2541",height:"1192"})}),"\n",(0,i.jsxs)(t.p,{children:["Most of the examples provided in the operator tables above can be used against the Identity Attributes Changed event trigger input, as seen below. You can find all of the input/output schemas for the other available triggers in our ",(0,i.jsx)(t.a,{href:"/docs/api/beta/triggers#available-event-triggers",children:"API specification"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "identity": {\n    "id": "ee769173319b41d19ccec6cea52f237b",\n    "name": "john.doe",\n    "type": "IDENTITY"\n  },\n  "changes": [\n    {\n      "attribute": "department",\n      "oldValue": "Sales",\n      "newValue": "Marketing"\n    },\n    {\n      "attribute": "manager",\n      "oldValue": {\n        "id": "ee769173319b41d19ccec6c235423237b",\n        "name": "robert.brown",\n        "type": "IDENTITY"\n      },\n      "newValue": {\n        "id": "ee769173319b41d19ccec6c235423236c",\n        "name": "mary.johnson",\n        "type": "IDENTITY"\n      }\n    },\n    {\n      "attribute": "cloudLifecycleState",\n      "oldValue": "active",\n      "newValue": "terminated"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"validating-filters",children:"Validating Filters"}),"\n",(0,i.jsx)(t.p,{children:"When you are finished developing your JSONpath filter, you must validate it with SailPoint's trigger service. There are two ways to do this: use the UI or the API."}),"\n",(0,i.jsx)(t.h3,{id:"validating-filters-using-the-ui",children:"Validating Filters Using the UI"}),"\n",(0,i.jsxs)(t.p,{children:["To validate a filter using the UI, subscribe to a new event trigger or edit an existing one. In the configuration options, paste your JSONpath expression in the ",(0,i.jsx)(t.code,{children:"Filter"})," input box and select ",(0,i.jsx)(t.code,{children:"Update"}),". If you do not receive an error message, then your filter expression is valid with SailPoint."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"UI filter",src:n(757423).Z+"",width:"791",height:"1297"})}),"\n",(0,i.jsx)(t.h3,{id:"validating-filters-using-the-api",children:"Validating Filters Using the API"}),"\n",(0,i.jsxs)(t.p,{children:["You can validate a trigger filter by using the ",(0,i.jsx)(t.a,{href:"/docs/api/beta/test-subscription-filter",children:"test filter"})," API endpoint. You must escape any double quotes, as seen in the example payload in the API description. Also, you must provide a sample input for the validation engine to run against. It is best to use the input example included in the input/output schemas for the event trigger you want to apply your filter to. Refer to ",(0,i.jsx)(t.a,{href:"/docs/api/beta/triggers#available-event-triggers",children:"this table"})," to find the schema of your event trigger. This is an example request:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"POST https://{tenant}.api.identitynow.com/beta/trigger-subscriptions/validate-filter\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "input": {\n    "identity": {\n      "id": "ee769173319b41d19ccec6cea52f237b",\n      "name": "john.doe",\n      "type": "IDENTITY"\n    },\n    "changes": [\n      {\n        "attribute": "department",\n        "oldValue": "Sales",\n        "newValue": "Marketing"\n      },\n      {\n        "attribute": "manager",\n        "oldValue": {\n          "id": "ee769173319b41d19ccec6c235423237b",\n          "name": "robert.brown",\n          "type": "IDENTITY"\n        },\n        "newValue": {\n          "id": "ee769173319b41d19ccec6c235423236c",\n          "name": "mary.johnson",\n          "type": "IDENTITY"\n        }\n      },\n      {\n        "attribute": "cloudLifecycleState",\n        "oldValue": "active",\n        "newValue": "terminated"\n      }\n    ]\n  },\n  "filter": "$[?($.identity.name == \\"john.doe\\")]"\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"testing-filters",children:"Testing Filters"}),"\n",(0,i.jsxs)(t.p,{children:["If SailPoint accepts your trigger filter, you must test whether it actually works. You must configure your trigger subscription to point to the URL of your testing service. ",(0,i.jsx)(t.a,{href:"https://webhook.site",children:"webhook.site"})," is an easy to use testing service. Just copy the unique URL it generates and paste it into your subscription's integration URL field. The easiest way to test a trigger subscription is to use the UI to fire off a test event."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Third party websites like the one mentioned earlier must be treated with caution. Do not use real data from your tenant when you're interacting with these tools."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"test subscription",src:n(828163).Z+"",width:"2041",height:"344"})}),"\n",(0,i.jsxs)(t.p,{children:["Once you fire off a test event, monitor your webhook.site webpage for an incoming event. If the filter matches the test input, you will an event come in. If the filter does not match the input, then it will nott fire. Test both scenarios to make sure your filter is not always evaluating to ",(0,i.jsx)(t.code,{children:"true"}),", and that it will indeed evaluate to ",(0,i.jsx)(t.code,{children:"false"})," under the correct circumstances. For example, the filter ",(0,i.jsx)(t.code,{children:'$[?($.identity.name contains "john")]'})," will match the test event for Identity Attributes Changed and you will see an event in webhook.site, but you also want to make sure that ",(0,i.jsx)(t.code,{children:'$[?($.identity.name contains "archer")]'})," doesn't fire because the test input is always the same."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to control the test input to validate your filter against a more robust set of data, use the ",(0,i.jsx)(t.a,{href:"/docs/api/beta/start-test-trigger-invocation",children:"test invocation"})," API endpoint."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},996566:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/jsonpath-editor-6b27255e293ed1aed200900bd38f6d55.png"},828163:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/test-subscription-572f17aa5c34840225f632ae61598fd6.png"},757423:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ui-filter-bbd6ba8d5a004335161f834ff6b5f217.png"}}]);