"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[5351],{994757:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=t(785893),s=t(511151);const l={id:"plugin-manifest",title:"Manifest",pagination_label:"Manifest",sidebar_label:"Manifest",sidebar_position:2,sidebar_class_name:"plugin_developer_guide_manifest",keywords:["plugin"],description:"IdentityIQ Plugin Manifest File",slug:"/iiq/plugin-developer-guide/manifest",tags:["plugin","guide","identityiq"]},r="Manifest File",a={id:"iiq/plugin-developer-guide/chapter-2/plugin-manifest",title:"Manifest",description:"IdentityIQ Plugin Manifest File",source:"@site/docs/iiq/plugin-developer-guide/chapter-2/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-2",slug:"/iiq/plugin-developer-guide/manifest",permalink:"/docs/iiq/plugin-developer-guide/manifest",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-2/index.md",tags:[{inline:!0,label:"plugin",permalink:"/docs/tags/plugin"},{inline:!0,label:"guide",permalink:"/docs/tags/guide"},{inline:!0,label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:2,frontMatter:{id:"plugin-manifest",title:"Manifest",pagination_label:"Manifest",sidebar_label:"Manifest",sidebar_position:2,sidebar_class_name:"plugin_developer_guide_manifest",keywords:["plugin"],description:"IdentityIQ Plugin Manifest File",slug:"/iiq/plugin-developer-guide/manifest",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Overview",permalink:"/docs/iiq/plugin-developer-guide/overview"},next:{title:"Build File",permalink:"/docs/iiq/plugin-developer-guide/build-file"}},o={},d=[{value:"Settings",id:"settings",level:2},{value:"Snippets",id:"snippets",level:2}];function h(e){const i={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"manifest-file",children:"Manifest File"}),"\n",(0,n.jsx)(i.p,{children:"A plugin is defined in IdentityIQ by the 'Plugin' XML object that defines the parameters of the plugin. Features such as REST resources, snippets, settings, etc. are defined in these parameters. The 'Plugin' object is defined in the 'manifest.xml' file. This is a required artifact. The 'Todo' plugin manifest will be examined:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Plugin PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Plugin certificationLevel="None" displayName="Todo Plugin" minSystemVersion="7.1" name="TodoPlugin" version="2.0">\n <Attributes>\n   <Map>\n     <entry key="minUpgradableVersion" value="1.0" />\n     <entry key="fullPage">\n       <value>\n         <FullPage title="Todo List" />\n       </value>\n     </entry>\n     <entry key="restResources">\n       <value>\n         <List>\n           <String>com.acme.todo.rest.TodoResource</String>\n           <String>com.acme.todo.rest.FlaggedUserResource</String>\n           <String>com.acme.todo.rest.PageConfigResource</String>\n         </List>\n       </value>\n     </entry>\n     <entry key="serviceExecutors">\n       <value>\n         <List>\n           <String>com.acme.todo.server.TodoFlaggingService</String>\n         </List>\n       </value>\n     </entry>\n     <entry key="settings">\n       <value>\n         <List>\n           <Setting dataType="boolean" helpText="Indicates whether or not todos can be deleted" label="Delete Allowed" name="canDelete" defaultValue="true"/>\n           <Setting dataType="string" helpText="The default name for a todo" label="Default Name" name="defaultName" defaultValue="My Todo"/>\n           <Setting dataType="int" helpText="The default time in minutes for a todo" label="Default Time" name="defaultTime" defaultValue="30"/>\n           <Setting dataType="int" helpText="The maximum numer of active todos a user is allowed to have before being flagged" label="Max Active Todos" name="maxUntilFlagged" defaultValue="10"/>\n         </List>\n       </value>\n     </entry>\n     <entry key="snippets">\n       <value>\n         <List>\n           <Snippet regexPattern=".*" rightRequired="ViewTodoPluginIcon">\n             <Scripts>\n               <String>ui/js/snippets/header.js</String>\n             </Scripts>\n             <StyleSheets>\n               <String>ui/css/todo.css</String>\n             </StyleSheets>\n           </Snippet>\n         </List>\n       </value>\n     </entry>\n   </Map>\n </Attributes>\n</Plugin>\n'})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Line 3"})," - contains the plugin's metadata. This is where you will define the object name of your plugin (name value), the name displayed in the UI for your plugin (",(0,n.jsx)(i.code,{children:"displayName"}),"), and the minimum system version (",(0,n.jsx)(i.code,{children:"minSystemVersion"}),")."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Line 6"})," - ",(0,n.jsx)(i.code,{children:"minUpgradeableVersion"})," specifies which version of this plugin has to be installed in order to upgrade to the version specified in the manifest file's metadata."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Line 7"})," - ",(0,n.jsx)(i.code,{children:"fullPage"})," indicates whether this plugin will have a full page element available in the IdentityIQ UI - see the 'page.xhtml' section of this document under 'UI elements'."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Line 12-20"})," - specifies the compiled Java classes, by package, that include the REST web service endpoints that you have written - see REST section of this document under 'Java Classes'."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Line 21-27"})," - specifies the compiled Java classes, by package, that contain the service executors for your plugin - see the Service Executors section of this document under 'Java Classes'."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Line 28-37"})," - specifies the settings that are end-user configurable for this plugin."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Line 38-51"})," - lists the various snippets that can be injected into IdentityIQ pages, the match criteria, and the content and style of the snippet."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"settings",children:"Settings"}),"\n",(0,n.jsx)(i.p,{children:"Plugin settings are attributes that are available for the end-user/system administrator to modify as part of their installation. The example from the 'Todo' plugin has four settings available that control default values for certain elements, as well as whether or not 'Todo' entries can be deleted in the UI. Settings appear to the end user when they click the 'Configure' button for the specific plugin on the 'Plugins' dashboard."}),"\n",(0,n.jsx)(i.p,{children:"Settings from the manifest file will be listed in order on the plugin settings page. Also present on the plugin settings page is a visual representation of the meta data in the manifest file (name, version, certification level)."}),"\n",(0,n.jsx)(i.p,{children:"One concept not shown in the 'Todo' plugin example, the concept of 'allowed values', can be very useful. This concept allows the developer to provide a predefined list of values that a field can adopt. The dataType 'boolean' does this automatically. In the earlier screenshot, there is a dropdown element available on the 'Delete Allowed' setting - the dropdown has two elements: 'True' and 'False'."}),"\n",(0,n.jsxs)(i.p,{children:["Each ",(0,n.jsx)(i.code,{children:"Setting"})," tag describes one element on the settings/configuration page for a Plugin, visible to Plugin administrators in the IIQ system."]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Attribute Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"name"}),(0,n.jsx)(i.td,{children:"Name of the current setting"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"dataType"}),(0,n.jsx)(i.td,{children:"Setting type ( Ex. string or int or boolean)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"value"}),(0,n.jsx)(i.td,{children:"Value for the setting"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"label"}),(0,n.jsx)(i.td,{children:"Display label for the setting"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"helpText"}),(0,n.jsx)(i.td,{children:"Associated help text for the setting"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"allowedValues"}),(0,n.jsx)(i.td,{children:"List of allowed values for dropdown population"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"defaultValue"}),(0,n.jsx)(i.td,{children:"The default value for the setting"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"snippets",children:"Snippets"}),"\n",(0,n.jsx)(i.p,{children:"Snippets are small, configurable pieces of code that can be injected into the rendering of normal IdentityIQ UI pages. A snippet contains four equally important components:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:(0,n.jsx)(i.strong,{children:"Attribute Name"})}),(0,n.jsx)(i.th,{children:(0,n.jsx)(i.strong,{children:"Description"})})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"regexPattern"}),(0,n.jsx)(i.td,{children:"Regular expression pattern run against the current URL in the browser - if the URL matches the pattern, the snippet will attempt to display."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"rightRequired"}),(0,n.jsx)(i.td,{children:"Determines the scope of users allowed to view the snippet element - this should reference an IdentityIQ 'SPRight' object."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"scripts"}),(0,n.jsxs)(i.td,{children:["List of scripts to run when a particular URL matches the ",(0,n.jsx)(i.code,{children:"regexPattern"}),". Normally this will consist of injecting an element into the DOM of the page. The 'Todo' example's 'hearder.js' file uses JQuery for this purpose."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"styleSheets"}),(0,n.jsx)(i.td,{children:"list of any css files that are required by Snippet Scripts"})]})]})]}),"\n",(0,n.jsxs)(i.p,{children:["The 'Todo' plugin snippet creates a new top level icon on every page of the IdentityIQ UI, which is visible to someone with the ",(0,n.jsx)(i.code,{children:"ViewTodoPluginIcon"})," SPRight."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:'     <entry key="snippets">\n       <value>\n         <List>\n           <Snippet regexPattern=".*" rightRequired="ViewTodoPluginIcon">\n             <Scripts>\n               <String>ui/js/snippets/header.js</String>\n             </Scripts>\n             <StyleSheets>\n               <String>ui/css/todo.css</String>\n             </StyleSheets>\n           </Snippet>\n         </List>\n       </value>\n     </entry>\n'})}),"\n",(0,n.jsxs)(i.p,{children:["The script, ",(0,n.jsx)(i.code,{children:"header.js"})," looks for ",(0,n.jsx)(i.code,{children:"ul.navbar-right li:first"}),". Then, using the JQuery operation ",(0,n.jsx)(i.code,{children:".before()"}),", the script injects an icon link pointing to the fullPage (/plugins/pluginPage.jsf?pn=TodoPlugin) of the 'Todo' plugin."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"var url = SailPoint.CONTEXT_PATH + '/plugins/pluginPage.jsf?pn=TodoPlugin';\n\njQuery(document).ready(function () {\n  jQuery('ul.navbar-right li:first').before(\n    '<li class=\"dropdown\">' +\n      ' <a href=\"' +\n      url +\n      '\" tabindex=\"0\" role=\"menuitem\" title=\"View your Todo list\">' +\n      ' <i role=\"presenation\" class=\"fa fa-sticky-note-o fa-lg example\"></i>' +\n      ' </a>' +\n      '</li>',\n  );\n});\n"})}),"\n",(0,n.jsx)(i.p,{children:"For reference, if you were to inspect any page of the IdentityIQ UI using a utility like Google Chrome's developer tools, you could figure out where to potentially have JQuery inject your snippet scripts."}),"\n",(0,n.jsxs)(i.p,{children:["The end result of this snippet is shown here, with the icon properly inserted before the other items in the ",(0,n.jsx)(i.code,{children:"navbar-right"})," list:"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Snippet",src:t(427645).Z+"",width:"568",height:"72"})})]})}function c(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},427645:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjgAAABICAIAAAB0qhhJAAAN40lEQVR42uzYPU7jQBiH8ZwhyczGMxkTR1qyS7FFKFYghChBgo4vRRDyQRJCBeECHIEDgDgTPUdBAhtjQyToKN4xz6Nf587F+5ddeiYiIhJc6ZmIiEhwDBUREYmOoSIiItExVEREJDqGioiIRMdQERGR6BgqIiISHUNFRESiY6iIiEh0DBUREYmOoSIiItGVfi2cAwAgFkMFABCNoQIAiMZQ4dvocLqxsH8drRbARbShw2lM5qsGfhSGCt8zUamraP1pqV4Aj61Qh1O2CmCoUBDZTT8r1FC5iQ7P2CqAoYL38pXSbjxrrKWH/mExvGn+8859cykbKqfdKN0qhgpgqOC3bKUmyp3OGqvpob9r/q0EnTfGB0Fi2ezkQ6XcULsxQwUwVPBe/jml6oNZYyU99LdRq1zbSwQHFR+UY7W9ttl6HyrbU+5UuwlDBTBU8Fs2VCNl+7PwfzZUv8u13ZgXW1WOJbO62w4286Gq2q5yQ4YKYKjgPR1O0/9+yvYu54fqdQYOK0HHB8lWzQ2VOWaoAIYKRZAPVdWefBiqxWSlTKdqjqu26wFzFM9V22zNDVV9oN2YoQIYKvjt06G6i1rJStmusn3lhvFT0eoDZXvxVi2bbYYKYKhQNF8M1Z/k0Nu+diP9Itn0QY/SIO43lvYbrahG0SgarahG0XBDuCoqpMUIGUA1gxrJpoMXgySYjFZUo2gUjVZUo2j4IVwV1VBZNYe8atFE2n+0ohpFo2i0ohpFww2NVlSjaBSNotGKahQNakSHisrMq714wraSiYRRROHCgaqoQhOndUzaMWHmnsjUGZKKOYMzsnQsauavOLZgxbGEnLmD04VYEdDBdR0bBqfbRtFoRTWKhgCiQ0XVvuzolM3nSydtx4/qZu/beuOZol4JnSsqRZ3infuv/oeB5y8/WLq1DKo4ArpQw6QSyMgqW/IfDHYfvAbkAitUc5dmIGPQImW90vSihX///nvx6mNU6iw59YLB6c5RhIlGK6pRRCkaWhVV98oT8RXLCCrTMK8GVlQqhuV0rqgWrznxHwx+/PzdPXWnvFbhoIogXcuauw9ev37zOTFnLrB++g8Gb95+jk6fffDYzd+//8ZnzwEqG4QoJmPWp8/f/yOBJ8/eOwd008f2pt4tQOvu3H+NjIAim3ZeePjk3bT5B8gzdteBqw8ev80uX4JLwclz94gxXM2w/NK1J0CVZMgCUUDsFCziuBUraBVRGJ6jFdUoohSNVlRkV1TqRhX/YaCgevkgjKDT5+//xwt+/fqjZ1U72JztEdr379+//xjg85cfwAFMOjgAOJALtOvtuy9fvv4A2vv9xy8gGyiy/+iNv3//rdt6jgwzXYN6f//+CzTt+Jm7WBUA6wOgRZt3XSRoVELOXKA5QJVkyMZlzQGG7aLVxwnYAnMSMASu3nxGdkiOVlSjiFI0WlFRWFH5RU36DwPAgTW4OLBfJac5KMapUgsW/McLNmw/D1Q22NCJs3f/4wBzlx2lp0v6Z+4BWrpsPYBdc3mJKgoD+L8htglbtGjRQqgWBkIUJNFKqk0QRYseRkQLC3oqSJFFLRpEKNSNgoqPUQRfOCiijjo6vsfn+BZ1VHTEF9cffHi4zDD4OKCzOIdvcec73z2Pe+58v/N997TIz+RHfwGV/LyelHGspsAbhFhZC7I5uHIjLRwJQoUjUpDesT9BLbzc3d3LL2k9IqgCq0GiyRM/QAMqI7piQKUJqms3062Dwgb2YnxqzPkXz9/mkWq7lZwZDQt07sIrHI2MMLi5zcGET9/LyD6pYd9/4sAsqiQ27iV5VCtCIal1moNx5DTQaZGzXYEKL08OcGt7B/1GcCv1a6E49E6vX0a4HFgPP66CAXo+tmU6qrHJynWpNN3gyLzc6BtdIOSiL07lsFgDw3Oi9/ZPKXKP+ZfiEz9fuvqeZYWXYomB1M7MrYBAVUv7Na4+yEoVLTuru5mOClU7uidczUM8Twm733zIx4DZSW1X7+TT1/9ZCDUp+n34LHt6NiCahcU1XnW6CGkkZOIGVEZ0xYBKE1QJSRk4DuugsB329E6KC4iNSznbpSGhV1nrtQ/v9r1f6OUYhX96WX2v4jAIDgh9lAi8tyIXUnCa7euDCk1ji6+gxM011EffNzQjp1REyZuAW7e38y6tCIPSKs/lhI9EVKBO9CyQtEakSN6P68Jyt3QKYEjQgSvBDNfkDGUwpO+o5UIsYQ8RUl3jgHShasEYGhBCXAjDLBova2tqHcYeKHKv2zMut3f2+Iud7Vz3+2a5S17jrDxXVX0P0+ElIfJOvPsNMGOMEqTRBRMhdLM3cufB75AHmP6zwgorKA2ojBwuBlT6oPqTXUsa53HKP9lcq8JmFmeEgc4/Vl/AkmUr+Dt77Zcf5RHyabqj1RfOIlqRC/4xZr+9c/uNqori8P9ANaEjakcRoyD4gIjwoC9KvCQo0UCooDHQiAp9ALQpQktKS1BDiwVBMFUuTUOxNMTYRrBeUtQ2xAfTRBIviUZ5UB+QQG9oUr92xeXJtLYNM233mflNvpA9Z86cWWc4s7+z9l7ntODFdLafvqh8kunrb36isy4ubWAh3zCJFMcD5we85dWq5uh26M3pyksqmkitvvvxd9qMytrWSMV8bimqn4rdH/pgIx7yUTtWsIW+5mt7P7KkjQOS2hl/dc/BNkvUqA3BXoePf0U1ig/9eVQW6vMbD5MbkZAtLazFdrbXNvTHrvlXUX+yM/rNNDR3RjcCYx75PFVGJV6QqCZBVFjKfnX0MhTOMcBCiRqDMJzVcuKZ8V9s+qKiC4tOmx1r6kwR1RRG67gMBkZ9UMqYxvbTEpVrw0XFacrm8hOWZvnDp7UMTlxYLWWFtvbzJiqvesAK1GswR2UDdJTnuBotADeQN3xNFxXzSf4qC0nyaNsnkkaT8firHr8lf/iJ93p4Lirbpn8Vm8oaaUetGd3ImEc+DQ39iUEkqokWlVvKpxZmzNzAaT7YCpn6xaY5O/XE6tqyXac8TsZ/qPKwGhCfe2Dcj1PpeYu3Tm20Ud546/ToolpT/G46209fVDyNiopyc7rs9o7vbSGl/7Sjg2CM2rGR1k+6KmtamKOq2tOCkBgefKmkPpqfLVu9j6dR/fgnXpuo+J8l47GQ+HQrOHTXpoiKNpvafeCMfRBtFxVHOAs5m2ELHPy0YeebrTwdj6j8WALNUYn/yB1RPfrcgcqj7fB6Y8fkiMot5Wepw3v5NH6xGebGWcVMg3u0ly73ppw1kw6GEy0ge6ZJRhdVc8t4q8MzLiqb/vGn3kdzGNCzN546t3HbccoNaHOFsudJXAaeUulHmbt1+r9cuEiDKZ9Xtr//2x+XaLt+KExIyaj8011FvuaIoqpr+MLmqNaX1GMsS+NsI9RfMPZI/B4Y1RMs31f3KTZlO6zMOAG1HrSZo2KsmGFDVma27J36s1ykRYP1kWt0I1FUTCHGJkdE9fbprh1H2teWnyiv++yDby/MmFWccVGNaakw/2sM66pGeVC7xdVg4QTMPagGxnrQP85/YPvkxIMJvEjPkx46fZ95YrwXUT2+ai9VHhYe5jjWZCukTms51MuxFyg5+kY2xXutCIIG+ZC/3QJAFVYWaAtT1nRR+assQUjR26ZQ+4B7KD7kKWUgxE9uZ8nQlspm3uUlNoTHU/SDh1hiKmKui4oPv8KdpIo3RjcyIhKVSJe4i+rQx11Liw7dfk/pe5+ff7m2dULv9Yel6BSQU1wsBTadzuPin93W8GpjH7ecOW9zINFyzyTK4QbG8aBcmyr20L5thvsoiLiG+zhQdUmiM0FRIRiisqnTMWFNZExj0ZJKospItBKVSJcsENW6HSexVOXRs4lb10+cqPhx0j9yycv9j+2Ki6VsJA2/kgEwO1Xx74QTVWf08us2HeEuSnMWbgkkVOb5rNB5nA8KwcP8zoVEJXJOVKX7zzD5NDpbD7aZpSZOVNx6LkYjfiOyYs1+i5/i4zAj5E56KTbyYrmUByNg1FyEuRdCohI5J6rEzA0LHt654JH/5Q6/+dtEisonqH7+NZaWspSF+2UAV9SGGWEKXJOEU11Oi5dUhRmnkKhE0OTaH05kxpjuPsx9yT6osP/y3A9UxDE1yFW0YQYpJCoROrkmKjH5c2z8UUquLQ0zPCFRiRggUQkhJCoRNBKVEEKiEkEjUQkhJCoRNBKVEEKiEkEjUQkhJCoRNBKVEEKiEkEzoqg6bru5rGB+WfLe8uR9QywKGyJcWFawoDo5V6ISQqIS2cZwUWUBEpUQEpXIHiQqIYREJYImKqoHZzxUXXCnUZOcXZO8qyY5t+aWOJCEOdXJ2Rb8tpvulqiEkKhEluCiuv6GZ/MSK6dNf2ra9CeNvPzlefkrB0mETT6smJa/fCjsZRY5oopFMYgQWY9EJTJZNXddojAv0t0D3mJJ4KAo4rSwgQbqikvVohBZj0QlMiWqIgbK6NwHsxPv9/k3VDkNF5XHPJROPU2CSJooUQkhUYnYY6Ky0b+hpGpVXqIQXcWVxEosxXwb6RT2ZdckKiEkKhFv6Mc9qcJV5FXkInT0ZFcx5BlAt0OWWot9JSohJCoRe0xUnlfRv6OrWDOkqCK3lEQlxBSLqv/q30KkSV//X9Dbd7Wnt7+7p+9Kdy9cvtITR4icXWBH2B3brzC/cyFyB4lKZNJV4NKKKb4LspQQEpUQQgghUQkhhIg5EpUQQoigkaiEEEIEjUQlhBAiaCQqIYQQQSNRCSGECJp/AN08n/ZOnGAUAAAAAElFTkSuQmCC"}}]);