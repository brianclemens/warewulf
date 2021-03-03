(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(115)),i={id:"container",title:"wwctl container"},c={unversionedId:"wwctl/container",id:"wwctl/container",isDocsHomePage:!1,title:"wwctl container",description:"Starting with version 4, Warewulf uses containers to build the bootable VNFS images for nodes to boot. These commands will help you import, management, and transform containers into bootable Warewulf VNFS images.",source:"@site/docs/wwctl/container.md",slug:"/wwctl/container",permalink:"/warewulf/docs/wwctl/container",editUrl:"https://github.com/ctrliq/warewulf/edit/main/docs/docs/wwctl/container.md",version:"current",sidebar:"someSidebar",previous:{title:"wwctl configure",permalink:"/warewulf/docs/wwctl/configure"},next:{title:"wwctl controller",permalink:"/warewulf/docs/wwctl/controller"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Starting with version 4, Warewulf uses containers to build the bootable VNFS images for nodes to boot. These commands will help you import, management, and transform containers into bootable Warewulf VNFS images."),Object(a.b)("p",null,"build"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"This command will build a bootable VNFS image from an imported container image.\n\n-a, --all  (re)Build all VNFS images for all nodes\n-f, --force  Force rebuild, even if it isn't necessary\n--setdefault  Set this container for the default profile\n\ndelete\n")),Object(a.b)("p",null,"This command will delete a container that has been imported into Warewulf."),Object(a.b)("p",null,"exec"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"This command will allow you to run any command inside of a given warewulf container. This is commonly used with an interactive shell such as ``/bin/bash`` to run a virtual environment within the container.\n\nimprt\n")),Object(a.b)("p",null,"This command will pull and import a container into Warewulf so it can be used as a source to create a bootable VNFS image."),Object(a.b)("p",null,"-f, --force  Force overwrite of an existing container\n-u, --update  Update and overwrite an existing container\n-b, --build  Build container when after pulling\n--setdefault  Set this container for the default profile"),Object(a.b)("p",null,"list, ls"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"This command will show you the containers that are imported into Warewulf.\n\n")))}s.isMDXComponent=!0}}]);