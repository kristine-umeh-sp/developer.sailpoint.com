"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88771],{985778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(785893),i=n(511151);const r={id:"rule-utility",title:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",pagination_label:"Identity Security Cloud Rule Utility",sidebar_label:"Identity Security Cloud Rule Utility",sidebar_position:4,sidebar_class_name:"ruleUtility",keywords:["rule","utility"],description:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",slug:"/extensibility/rules/rule-utility",tags:["Rules"]},o=void 0,s={id:"extensibility/rules/rule-utility",title:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",description:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",source:"@site/docs/extensibility/rules/idn_rule_utility.md",sourceDirName:"extensibility/rules",slug:"/extensibility/rules/rule-utility",permalink:"/docs/extensibility/rules/rule-utility",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/idn_rule_utility.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:4,frontMatter:{id:"rule-utility",title:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",pagination_label:"Identity Security Cloud Rule Utility",sidebar_label:"Identity Security Cloud Rule Utility",sidebar_position:4,sidebar_class_name:"ruleUtility",keywords:["rule","utility"],description:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",slug:"/extensibility/rules/rule-utility",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Web Services Before Operation Rule",permalink:"/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule"},next:{title:"Java Docs",permalink:"/docs/extensibility/rules/java-docs"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Configuration of Search Attributes within Identity Security Cloud",id:"configuration-of-search-attributes-within-identity-security-cloud",level:2},{value:"Create the New Search Attribute in Identity Security Cloud",id:"create-the-new-search-attribute-in-identity-security-cloud",level:3},{value:"Create Rules that Can Be Used to Query the Newly Created Attribute values",id:"create-rules-that-can-be-used-to-query-the-newly-created-attribute-values",level:2},{value:"Implement Rules within the Create Profile Section of Each Source for an Acount is Being Provisioned For",id:"implement-rules-within-the-create-profile-section-of-each-source-for-an-acount-is-being-provisioned-for",level:2},{value:"IdnRuleUtil.java Descriptors",id:"idnruleutiljava-descriptors",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Get an Entitlement Description",id:"get-an-entitlement-description",level:3},{value:"Check whether an accountID is Unique",id:"check-whether-an-accountid-is-unique",level:3},{value:"Get the Name of the Identity Matching a Specific Account Search Result",id:"get-the-name-of-the-identity-matching-a-specific-account-search-result",level:3},{value:"Get Multiple Attributes from the First Account Retreived From a Source",id:"get-multiple-attributes-from-the-first-account-retreived-from-a-source",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Use this guide to learn how to configure searchable account attributes within Identity Security Cloud and then leverage them within the ISCRuleUtil wrapper class when searching accounts for attributes such as uniqueness checks. There are also methods in the ISCRuleUtil wrapper class you can use without the additional searchable attributes."}),"\n",(0,a.jsx)(t.p,{children:"Search attributes allow you to search across accounts and sources to determine whether a specific attribute value is being used in your Identity Security Cloud environment."}),"\n",(0,a.jsx)(t.p,{children:"There are three critical components involves with working with searchable attributes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#configuration-of-search-attributes-within-identity-security-cloud",children:"Configuration of search attributes within Identity Security Cloud"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Seed data for accounts already aggregated into the system."}),"\n",(0,a.jsx)(t.li,{children:"Ensure attribute promotion happens for new/changed accounts that are aggregated."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#create-rules-that-can-be-used-to-query-the-newly-created-attribute-values",children:"Create rules that can be used to query the newly created attribute values"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#implement-rules-within-the-create-profile-section-of-each-source-for-an-acount-is-being-provisioned-for",children:"Implement rules within the Create Profile section of each source an account is being provisioned for"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configuration-of-search-attributes-within-identity-security-cloud",children:"Configuration of Search Attributes within Identity Security Cloud"}),"\n",(0,a.jsx)(t.p,{children:"When you are planning to implement search attributes, it is important that you consider the way new accounts' values will be generated and which attributes should be used as references."}),"\n",(0,a.jsx)(t.p,{children:"You need the following information to create search attributes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"IDs for sources that will be searched."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Attribute name for each source that will be searched (such as mail, email, emailAddress)."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Unique name for the new attribute that will become common to all accounts in the account search configuration (e.g., newMail, newEmail, newEmailAddress)."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Display name for the new attribute configuration."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The following example shows how to create a new attribute with the ",(0,a.jsx)(t.a,{href:"/docs/api/beta/create-search-attribute-config",children:"Search Attributes API"}),":"]}),"\n",(0,a.jsx)(t.p,{children:"Your company has two sources. The first is Active Directory, and the second is Workday. When the system aggregates new accounts, the company wants to query Identity Security Cloud to see whether an email address already exists. If the email address is not in use, you can assign it to the new account. If it is in use, you can iterate on the email address value (add a 1 for example). You can then query Identity Security Cloud once more to see whether your incremented email address is in use. You can repeat this procedure until you have determined that an email address is unique."}),"\n",(0,a.jsx)(t.p,{children:"The following information is necessary to create your search attribute:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"IDs for sources that will be searched:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Active Directory: ",(0,a.jsx)(t.code,{children:"4028112837fe14c70177fe1955e9032c"})]}),"\n",(0,a.jsxs)(t.li,{children:["Workday: ",(0,a.jsx)(t.code,{children:"4028812877fa18c72177fs195baa0341"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Attribute name on each source that will be searched (such as mail, email, emailAddress):"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Active Directory: ",(0,a.jsx)(t.code,{children:"mail"})]}),"\n",(0,a.jsxs)(t.li,{children:["Workday: ",(0,a.jsx)(t.code,{children:"emailAddress"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Unique name for the new attribute that will become common to all accounts in the account search configuration (e.g., newMail, newEmail, newEmailAddress):"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"promotedEmailAddress"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Display name for the new attribute configuration:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"Promoted Email Address"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"create-the-new-search-attribute-in-identity-security-cloud",children:"Create the New Search Attribute in Identity Security Cloud"}),"\n",(0,a.jsxs)(t.p,{children:["To call the APIs for search attributes, you need a personal access token and the name of your tenant to provide with the request. To retrieve a personal access token, see ",(0,a.jsx)(t.a,{href:"/docs/api/authentication#generate-a-personal-access-token",children:"Personal Access Tokens"}),". To get the name of your tenant, see ",(0,a.jsx)(t.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Finding Your Organization Tenant Name"})]}),"\n",(0,a.jsx)(t.p,{children:"Doing so creates an account search configuration for the two sources/attributes specified. All new/changed accounts that are aggregated have this new attribute(\u201cpromotedEmailAddress\u201d) created in the account schema and the value of the attribute(\u201cmail\u201d or \u201cemailAddress\u201d), depending on the source, is promoted to that new attribute."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl --location -g --request POST \'https://{tenant}.api.identitynow.com/beta/accounts/search-attribute-config\' \\\n--header \'Authorization: Bearer {token}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "name": "promotedEmailAddress",\n  "displayName": "Promoted Email Address",\n  "applicationAttributes":\n    {\n      "4028112837fe14c70177fe1955e9032c": "mail",\n      "4028812877fa18c72177fs195baa0341": "emailAddress"\n    }\n}\'\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Aggregation only processes new and/or changed accounts for many sources. If an account is unchanged, an aggregation will not seed the new attribute or its value for this account. Therefore, it is mandatory that a non-optimized aggregation be performed when an account search configuration is created/modified for each source involved in that configuration."})}),"\n",(0,a.jsx)(t.p,{children:"If this source has already been aggregated before the account search configuration was created, a non-optimized aggregation must now be performed to seed the new attribute data for all existing accounts."}),"\n",(0,a.jsxs)(t.p,{children:["At this point, the configuration exists to promote attributes on any new/changed account that comes into Identity Security Cloud. These attributes and their associated values are stored for use in custom rules. Each account that exists on either of these sources will now have a new attribute called \u201cpromotedEmailAddress\u201d. ",(0,a.jsxs)(t.em,{children:["The value of this attribute will be the value of ",(0,a.jsx)(t.code,{children:"mail"})," if it is the Active Directory Source or ",(0,a.jsx)(t.code,{children:"emailAddress"})," if it is the Workday source."]})]}),"\n",(0,a.jsx)(t.h2,{id:"create-rules-that-can-be-used-to-query-the-newly-created-attribute-values",children:"Create Rules that Can Be Used to Query the Newly Created Attribute values"}),"\n",(0,a.jsx)(t.p,{children:"To access the promoted attribute data mentioned in the above section, you can use library methods that have been implemented to allow access to that data. There are two methods that have been implemented:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"/**\n * Count the accounts that match the searchable attribute and value.\n *\n * @param sourceIds The list of application IDs that represent the sources of the data.\n * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n * @param operation The operation to use when matching, it will either be Operation.Equal OR Operation.StartsWith\n * @param values The value of that searchable attribute to math.  The value parameter is required.\n *\n * @return The number of accounts that match the parameters provided.\n */\npublic int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"\n/**\n * Get the identity name for the account matching the specified criteria.\n *\n * @param sourceIds The list of application IDs that represent the sources of the data.\n * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.\n * @param values The value of that searchable attribute to math.  The value parameter is required.\n *\n * @return The name of the identity that matched the account that match the parameters provided.\n */\npublic String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)\n"})}),"\n",(0,a.jsx)(t.p,{children:"Each of these utility library methods are loaded into the context that is available from within your custom rule. It can be accessed by appending the prefix \u201cidn.\u201d to the method call."}),"\n",(0,a.jsx)(t.p,{children:"Example: You want to use the promoted attribute data to determine an email address's uniqueness before using it to provision a new account to one of the sources involved in the account search configuration. You can call these methods to determine that uniqueness."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import sailpoint.object.*;\nimport java.util.*;\nimport sailpoint.rule.*;\nimport org.apache.commons.lang.StringUtils;\n\n     List SOURCE_IDS = new ArrayList(Arrays.asList(new String[]{"4028112837fe14c70177fe1955e9032c","4028812877fa18c72177fs195baa0341"}));\n     String PROMOTED_ATTR_NAME = "promotedEmailAddress";\n     String SEARCH_OP = "StartsWith"; //Can also use "Equals"\n     List SEARCH_VALUES = new ArrayList(Arrays.asList(new String[]{"jc@sailpoint.com"}));\n\n    //return matching accounts\n     return idn.attrSearchCountAccounts(SOURCE_IDS, PROMOTED_ATTR_NAME, SEARCH_OP, SEARCH_VALUES));\n\n     //In the event that the earlier call returns non-zero values, it is certain\n     //that an email value is already in use.  If it is required to\n     //know which identity owns the account with this value, you can call this method:\n     //idn.attrSearchGetIdentityName(SOURCE_IDS, PROMOTED_ATTR_NAME, SEARCH_OP, SEARCH_VALUES));\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Note that there are two method calls within the earlier example rule."})}),"\n",(0,a.jsxs)(t.p,{children:["Calling the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"idn.attrSearchCountAccounts()"})})," method with both example source IDs causes a search of all accounts for a value \u201cpromotedEmailAddress=",(0,a.jsx)(t.a,{href:"mailto:jc@sailpoint.com",children:"jc@sailpoint.com"}),"\u201d. The search returns the count of accounts containing that attribute value pair."]}),"\n",(0,a.jsxs)(t.p,{children:["If ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"idn.attrSearchCountAccounts()"})})," returns non-zero, it may be useful to determine which identity owns the account(s) containing that value. The ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"idn.attrSearchGetIdentityName()"})})," method will return that identity name."]}),"\n",(0,a.jsx)(t.h2,{id:"implement-rules-within-the-create-profile-section-of-each-source-for-an-acount-is-being-provisioned-for",children:"Implement Rules within the Create Profile Section of Each Source for an Acount is Being Provisioned For"}),"\n",(0,a.jsxs)(t.p,{children:["Create Profile can be found at ",(0,a.jsx)(t.strong,{children:"Admin"})," > ",(0,a.jsx)(t.strong,{children:"Connections"})," > ",(0,a.jsx)(t.strong,{children:"Source"})," > ",(0,a.jsx)(t.code,{children:"SourceName"})," > ",(0,a.jsx)(t.strong,{children:"Accounts"})," > ",(0,a.jsx)(t.strong,{children:"Create Profile"})]}),"\n",(0,a.jsx)(t.p,{children:"You can invoke rules in different ways, but one of the most common implementations involves binding it to the Create Profile. This results in the rule's being used to generate/check the values used during new account provisioning."}),"\n",(0,a.jsxs)(t.p,{children:["When a ",(0,a.jsx)(t.code,{children:"Generator"})," is selected for the ",(0,a.jsx)(t.code,{children:"distinguishedName"})," attribute, a rule that invokes the provided library methods can be selected. This is an example of such a scenario:"]}),"\n",(0,a.jsx)(t.p,{children:"Through a lifecycle state change, an account needs to be provisioned to an Active Directory source."}),"\n",(0,a.jsxs)(t.p,{children:["When the provisioning plan is created, the rule that generates the value for ",(0,a.jsx)(t.code,{children:"distinguishedName"})," is called. The rule invokes the library methods mentioned earlier to determine the uniqueness of the attribute. In this case it may do the following:"]}),"\n",(0,a.jsxs)(t.p,{children:["Call ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"idn.attrSearchCountAccounts()"})})," to determine whether any other accounts are using first.last as a distinguishedName. If a count of 1 or more is returned, the call can be retried with first.last+1. The call is repeated until a zero is returned. At that point, the value is unique and can be used. The value is returned to the calling rule."]}),"\n",(0,a.jsxs)(t.p,{children:["In some cases where a non zero value is returned, it may be useful to know which identity owns the account that value belongs to. To find out this information, call ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.code,{children:"idn.attrSearchGetIdentityName()"})})," to determine the identity in question."]}),"\n",(0,a.jsx)(t.h2,{id:"idnruleutiljava-descriptors",children:"IdnRuleUtil.java Descriptors"}),"\n",(0,a.jsxs)(t.admonition,{type:"caution",children:[(0,a.jsx)(t.p,{children:'Both the normal SailPoint context passed into the Beanshell rule evaluation and the new IdnRuleUtil referenced here include an "Identity" class:'}),(0,a.jsxs)(t.p,{children:["The SailPoint context Identity class is provided via ",(0,a.jsx)(t.code,{children:"sailpoint.object.Identity"})," The IdnRuleUtil Identity class is provided via ",(0,a.jsx)(t.code,{children:"sailpoint.rule.Identity"})," When referencing an Identity class, you must be explicit as to which Identity class you are using to avoid a namespace conflict. For example:"]})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'sailpoint.object.Identity identity = plan.getIdentity();\nString sAMAccountName = identity.getAttribute("adUsername");\n\nsailpoint.rule.Identity foundIdentity = idn.getIdentityById("uid");\nString email = foundIdentity.getEmail();\n'})}),"\n",(0,a.jsx)(t.p,{children:"The below section provides a full accounting of the methods available to rule writers using the IdnRuleUtil class:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'/**\n * Utility class containing methods customers can use within rules to perform common tasks.\n * IdnRuleUtil is available in rules as "idn" variable, e.g. "idn.countAccounts("someAppId")".\n * This utility class allows you to abstract out the use of SailPointContext in rules so you can one day not pass a\n * context to the rule at all.\n */\n\nimport sailpoint.object.Application;\nimport sailpoint.object.Attributes;\nimport sailpoint.object.Filter;\nimport sailpoint.object.Link;\nimport sailpoint.object.LinkExternalAttribute;\nimport sailpoint.object.ManagedAttribute;\nimport sailpoint.object.QueryOptions;\nimport sailpoint.rule.Account;\nimport sailpoint.rule.ManagedAttributeDetails;\nimport sailpoint.rule.RuleObjectFactory;\nimport sailpoint.tools.GeneralException;\nimport sailpoint.tools.Util;\n\nclass IdnRuleUtil {\n    /**\n     * Determines whether an account currently exists on an application using the native identity.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @return True if the account exists, false otherwise.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    boolean accountExistsByNativeIdentity(String applicationName, String nativeIdentity)\n\n\n\n    /**\n     * Determines if an account currently exists on an application using the display name.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param displayName The account\'s display name.\n     * @return True if the account exists, false otherwise.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    boolean accountExistsByDisplayName(String applicationName, String displayName)\n\n\n\n    /**\n     * Gets an account on an application using the native identity.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @return The account or null if not found. If more than one is found, the first\n     *         account in the exists is returned.\n     * @throws GeneralException wrapping underlying DB related errors\n     */\n    Account getAccountByNativeIdentity(String applicationName, String nativeIdentity)\n\n\n\n    /**\n     * Gets an account on an application using the display name.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param displayName The account\'s display name.\n     * @return The account or null if not found. If more than one is found, the first\n     *         account in the exists is returned.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    Account getAccountByDisplayName(String applicationName, String displayName)\n\n\n\n    /**\n    * Get the first account for the application and identityName and return the first account\'s native identity.\n    *\n    * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n    * @param identityName The identity name.\n    * @return The first link\'s nativeIdentity.\n    *\n    * @throws GeneralException wrapping underlying DB related errors.\n    */\n    public String getFirstAccountNativeIdentity(String applicationName, String identityName)\n\n    /**\n     * Counts the number of accounts on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @return The total number of accounts.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    int countAccounts(String applicationName)\n\n\n\n    /**\n     * Gets the value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    Object getRawAccountAttribute(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     */\n    Object getRawAccountAttribute(Account account, String attribute)\n\n\n\n    /**\n     * Gets the string value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n     String getAccountAttribute(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the string value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     */\n     String getAccountAttribute(Account account, String attribute)\n\n\n\n    /**\n     * Gets the boolean value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or false if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    boolean getAccountAttributeBool(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the boolean value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or false if the attribute does not exist.\n     */\n    boolean getAccountAttributeBool(Account account, String attribute)\n\n\n\n    /**\n     * Count the accounts that match the searchable attribute and value.\n     *\n     * @param sourceIds The list of application IDs that represent the sources of the data.\n     * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n     * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.\n     * @param values The list of values of the searchable attribute to match. The values parameter is required.\n     *\n     * @return The number of accounts matching the parameters provided.\n     * @throws IllegalStateException wrapping underlying errors\n     */\n    int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values)\n\n\n\n    /**\n     * Get the identity name for the account matching the specified criteria.\n     *\n     * @param sourceIds The list of application IDs that represent the sources of the data\n     * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n     * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.\n     * @param values The list of values of the searchable attribute to match. The values parameter is required.\n     *\n     * @return The name of the Identity that matched the account, matching the parameters provided.\n     * @throws IllegalStateException wrapping underlying errors\n     */\n    String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)\n\n\n\n    /**\n     * Gets the int value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or zero if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    int getAccountAttributeInt(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the int value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or zero if the attribute does not exist.\n     */\n    int getAccountAttributeInt(Account account, String attribute)\n\n\n\n    /**\n     * Finds the ManagedAttribute description by provided sourceId/name/value/type.\n     *\n     * @param sourceId The sourceId used to query the ManagedAttribute.\n     * @param name The name of the attribute used to query the ManagedAttribute.\n     * @param value The value of the attribute used to query the ManagedAttribute.\n     * @param type The type of attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).\n     *             Defaults to Entitlement (if null provided).\n     * @return ManagedAttribute\'s description if found or else null.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    String getManagedAttributeDescription(String sourceId, String name, String value, ManagedAttribute.Type type)\n\n\n\n    /**\n    * Finds the ManagedAttribute by sourceId/name/value/type and returns its details in ManagedAttributeDetails model.\n    *\n    * @param sourceId The sourceId used to query the ManagedAttribute.\n    * @param name The name of the attribute used to query the ManagedAttribute.\n    * @param value The value of the attribute used to query the ManagedAttribute.\n    * @param type The type of attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).\n    * Defaults to Entitlement (if null provided).\n    * @return ManagedAttributeDetails if found or else null.\n    * @throws GeneralException wrapping underlying DB related errors.\n    */\n    public ManagedAttributeDetails getManagedAttributeDetails(String sourceId, String name, String value, ManagedAttribute.Type type)\n\n\n\n   /**\n    * Fetch an identity by the internal ID.\n    *\n    * @param id The ID to use when fetching an identity object\n    * @return A DTO representing the Identity. It will throw if the identity is not found.\n    */\n    public sailpoint.rule.Identity getIdentityById(String id) ...\n\n\n\n    /**\n    * Find and return the users that match the incoming attributeName, operation, value ordered by\n    * the specified sortAttribute.\n    *\n    * @param attributeName The attribute to be searched. It must be searchable and non-null.\n    * @param operation The operation to be used when searching. It only allows Equals and StartsWith.\n    * @param value The value to match. It must be non-null.\n    * @param sortAttribute The attribute to be used when sorting.\n    * Default ordering is on uid if it is not specified and this also must be searchable.\n    * Sort is always be in ascending order.\n    *\n    * @return The list of users matching the passed in parameters. The max number of returned values is limited to 50.\n    *\n    * @throws IllegalStateException when attribute provided is not searchable,\n    * when the operation is not StartsWith or Equals,\n    * the sortAttribute is not searchable,\n    * or if there are issues during the search.\n    *\n    * @see #EQUALS_FILTER\n    * @see #STARTS_WITH_FILTER\n    */\n    public List<sailpoint.rule.Identity> findIdentitiesBySearchableIdentityAttribute(String attributeName, String operation,\nString value, String sortAttribute)\n\n\n\n    /**\n    * Count and return the number of users matching the incoming attributeName, operation and value.\n    *\n    * @param attributeName The attribute to be searched. It must be searchable and non-null.\n    * @param operation The operation to be used when searching. It only allows Equals and StartsWith.\n    * @param value The value to match. It must be non-null.\n    *\n    * @return The number of identities matching the parameters.\n    *\n    * @throws IllegalStateException when attribute provided is not searchable,\n    * when the operation is not StartsWith or Equals,\n    * or if there are issues during the count operation.\n    *\n    * @see #EQUALS_FILTE\n    * @see #STARTS_WITH_FILTER\n    */\n    public int countIdentitiesBySearchableIdentityAttribute(String attributeName, String operation, String value)\n}\n\n    /**\n    * Use this method to call LDAP type connectors to look for\n    * unique values. This method calls the connector with a specific search filter\n    * based on the attributeName and value passed into the method.\n    * Any returned value is considered non-unique.\n    *\n    * @param identityNameOrId The name or ID of the identity you are using\n    * @param applicationNameOrId The name or ID of the source you are targeting\n    * @param attributeName The name of the attribute you want to validate\n    * @param attributeValue The value of the attribute you want to validate\n    *\n    * @return true if the value is unique AND false otherwise. If the application or identity can\'t be found, an\n    * IllegalStateException will be thrown.\n    *\n    */\n    public boolean isUniqueLDAPValue(String identityNameOrId, String applicationNameOrId, String attributeName, String attributeValue)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsx)(t.h3,{id:"get-an-entitlement-description",children:"Get an Entitlement Description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\n/*\n  * In Before Provisioning rules (where this will likely be used), the source being provisioned to\n  * is passed in by the "application" variable. You can use this to get sourceId using application.getId().\n  * e.g. String sourceId = application.getId();\n*/\nString entitlementDescription = idn.getManagedAttributeDescription(sourceId, attributeName, attributeValue, Type.Entitlement);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"check-whether-an-accountid-is-unique",children:"Check whether an accountID is Unique"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\n/*\n  * In Attribute Generator rules (where this will likely be used), the source being provisioned to\n  * is passed in by the "application" variable. You can use this to get applicationName using application.getName().\n  * e.g. String applicationName = application.getName();\n*/\nboolean exists = idn.accountExistsByNativeIdentity(applicationName, nativeIdentity);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"get-the-name-of-the-identity-matching-a-specific-account-search-result",children:"Get the Name of the Identity Matching a Specific Account Search Result"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\nString identityName = idn.attrSearchGetIdentityName(sourceIdsAsList, attributeName, Operation.Equal, valuesToMatchAsList);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"get-multiple-attributes-from-the-first-account-retreived-from-a-source",children:"Get Multiple Attributes from the First Account Retreived From a Source"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\n//Account objects are used with the import statement import sailpoint.rule.Account;\nAccount acct = idn.getFirstAccount("HR [source]", identity.getName());\nMap acctAttrs = acct.getAttributes();\nString firstName = acctAttrs.get("First Name");\nString lastName = acctAttrs.get("Last Name");\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);