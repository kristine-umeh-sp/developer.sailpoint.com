"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[19291],{254739:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var l=n(785893),t=n(511151);const a={id:"plugin-build-file",title:"Build File",pagination_label:"Build File",sidebar_label:"Build File",sidebar_position:3,sidebar_class_name:"plugin_developer_guide_build_file",keywords:["plugin"],description:"IdentityIQ Plugin Build File",slug:"/iiq/plugin-developer-guide/build-file",tags:["plugin","guide","identityiq"]},s="Build File",r={id:"iiq/plugin-developer-guide/chapter-3/plugin-build-file",title:"Build File",description:"IdentityIQ Plugin Build File",source:"@site/docs/iiq/plugin-developer-guide/chapter-3/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-3",slug:"/iiq/plugin-developer-guide/build-file",permalink:"/docs/iiq/plugin-developer-guide/build-file",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-3/index.md",tags:[{inline:!0,label:"plugin",permalink:"/docs/tags/plugin"},{inline:!0,label:"guide",permalink:"/docs/tags/guide"},{inline:!0,label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729800545e3,sidebarPosition:3,frontMatter:{id:"plugin-build-file",title:"Build File",pagination_label:"Build File",sidebar_label:"Build File",sidebar_position:3,sidebar_class_name:"plugin_developer_guide_build_file",keywords:["plugin"],description:"IdentityIQ Plugin Build File",slug:"/iiq/plugin-developer-guide/build-file",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Manifest",permalink:"/docs/iiq/plugin-developer-guide/manifest"},next:{title:"Database Scripts",permalink:"/docs/iiq/plugin-developer-guide/database-scripts"}},d={},o=[{value:"Java versions",id:"java-versions",level:2}];function p(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"build-file",children:"Build File"}),"\n",(0,l.jsxs)(i.p,{children:["Apache Ant is a simple, readily available tool you can use to package plugins prior to deployment and distribution. To provide build specific values, the standard is to also include a ",(0,l.jsx)(i.code,{children:"build.properties"})," file with a simple key-value pair for all build specific tokens."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-text",children:"jdk.home.1.7=/Library/Java/JavaVirtualMachines/jdk1.8.0_66.jdk\niiq.home=/usr/local/apache-tomcat-8.0.30/webapps/identityiq/\npluginName=TodoPlugin\nversion=2.0.0\n"})}),"\n",(0,l.jsx)(i.p,{children:"The earlier example illustrates how a properties file can be leveraged to allow multiple developers to use the same build process, despite having different build environments. The actual 'build.xml' file is fairly straightforward, and it's responsible for creating the build directory, compiling any java classes, packaging those compiled classes into a .jar archive, and then archiving the complete plugin in .zip format. A more detailed explanation is provided for the 'Todo' plugin build file."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project name="Todo Plugin" default="package">\n  \x3c!-- allow overriding of build properties --\x3e\n  <property file="user.build.properties"/>\n  <property file="build.properties"/>\n  <property name="buildPlugins" location="build"/>\n\n  <target name="clean">\n        <echo message="Starting clean target"/>\n        <delete dir="${buildPlugins}"/>\n    </target>\n\n\n\n  <target name="package">\n      <property name="pluginBase" location="." />\n      <property name="pluginSrc" location="${pluginBase}/src" />\n      <property name="pluginBuild" location="${buildPlugins}/${pluginName}" />\n      <property name="pluginLib" location="${pluginBuild}/lib" />\n      <property name="pluginClasses" location="${pluginBuild}/classes" />\n      <property name="pluginContents" location="${pluginBuild}/contents" />\n\n      <mkdir dir="${pluginClasses}" />\n\n      <javac srcdir="${pluginSrc}" destdir="${pluginClasses}"\n                 includeantruntime="false" target="1.7">\n\n          <classpath>\n            <pathelement path="${iiq.home}/WEB-INF/classes"/>\n            <fileset dir="${iiq.home}/WEB-INF/lib">\n            <include name="**/*.jar"/>\n            </fileset>\n          </classpath>\n\n          <compilerarg value="-Xlint:deprecation" />\n          <compilerarg value="-Xlint:unchecked" />\n      </javac>\n\n      <mkdir dir="${pluginLib}" />\n      <jar destfile="${pluginLib}/${pluginName}.jar">\n          <fileset dir="${pluginClasses}">\n            <include name="**/*" />\n          </fileset>\n      </jar>\n\n      <mkdir dir="${pluginContents}" />\n      <copy todir="${pluginContents}">\n          <fileset dir="${pluginBase}">\n              <include name="manifest.xml" />\n              <include name="db/**" />\n              <include name="import/**" />\n              <include name="lib/*.jar" />\n              <include name="ui/**" />\n          </fileset>\n          <fileset dir="${pluginBuild}">\n            <include name="lib/*.jar" />\n          </fileset>\n      </copy>\n      <zip encoding="UTF-8" baseDir="${pluginContents}" destfile="${pluginBuild}/dist/${pluginName}.${version}.zip">\n      </zip>\n  </target>\n</project>\n'})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Lines 4 and 5"})," - specifies the properties file to use during the build. If the 'user.build.properties' file does not exist, it will cascade down and use the 'build.properties'. This can be leveraged to facilitate a 'standard' build, as well as a developer specific build."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Lines 14-19"})," - defines the folder structure where the resulting build artifacts will be placed."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Line 21"})," - creates a directory for any compiled Java classes to be placed."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Lines 23-33"})," - responsible for the compilation of Java classes. It is necessary to add the out of the box IdentityIQ packages to the classpath for compilation, which is done by utilizing the 'iiq.home' token from the build.properties file."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Line 35"})," - creates the 'lib' folder, where the jar'd up plugin .class files will be placed."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Line 37-41"})," - responsible for creating the .jar file."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Line 45-56"})," - copies all other files required for plugin deployment to the build folder."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"Line 58-59"})," - creates the archive (.zip) file of the plugin contents and places the .zip file in the /dist folder - this is the archive that can be installed by 'drag and drop' in IdentityIQ."]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"java-versions",children:"Java versions"}),"\n",(0,l.jsxs)(i.p,{children:["When you're developing a plugin, complications can arise when the plugin is built using a different version of Java (newer) than that deployed on the application server(s) hosting IdentityIQ. To avoid this issue, it is recommended that the 'javac' argument in the build.xml file be parametrized with the most compatible Java version available. IdentityIQ 7.1 supports both Java 1.7 and 1.8, so setting the compilation to be 1.7 compatible is a good idea. To do so, add the property 'target' to the 'javac' directive, and set it equal to '1.7', or whatever version is being targeted. You can find an example of this process in ",(0,l.jsx)(i.strong,{children:"line 24"})," of the earlier example."]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}}}]);