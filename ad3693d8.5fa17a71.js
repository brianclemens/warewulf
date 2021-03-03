(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return c}));var r=t(3),o=t(7),l=(t(0),t(115)),a={id:"development-environment-kvm",title:"Development Environment (KVM)"},s={unversionedId:"contributing/development-environment-kvm",id:"contributing/development-environment-kvm",isDocsHomePage:!1,title:"Development Environment (KVM)",description:"1. Create CentOS 7 development virtual machine under KVM",source:"@site/docs/contributing/development-environment-kvm.md",slug:"/contributing/development-environment-kvm",permalink:"/warewulf/docs/contributing/development-environment-kvm",editUrl:"https://github.com/ctrliq/warewulf/edit/main/docs/docs/contributing/development-environment-kvm.md",version:"current",sidebar:"someSidebar",previous:{title:"Documentation",permalink:"/warewulf/docs/contributing/documentation"},next:{title:"Development Environment (VirtualBox)",permalink:"/warewulf/docs/contributing/development-environment-vbox"}},i=[],u={toc:i};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create CentOS 7 development virtual machine under KVM")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# KVM is running on server called master1 which is not my desktop\nssh -X master1\n\n# On master1 server\nwget -P /global/downloads/centos http://mirror.mobap.edu/centos/7.8.2003/isos/x86_64/CentOS-7-x86_64-Everything-2003.iso\n\nqemu-img create -o preallocation=metadata -f qcow2 /global/images/centos-7.qcow2 32G\n\n# install wwdev Centos 7 development VM\nsudo virt-install --virt-type kvm --name centos7-wwdev --ram 8192 \\\n   --disk /global/images/centos-7.qcow2,format=qcow2 \\\n   --network network=default \\\n   --graphics vnc,listen=0.0.0.0 --noautoconsole \\\n   --os-type=linux --os-variant=rhel7.0 \\\n   --location=/global/downloads/centos/CentOS-7-x86_64-Everything-2003.iso\n\n# Complete installation using virt-manager\n\n# To start virt-manager on non-local server\nssh -X master1\n\nsudo -E virt-manager\n\n# Login to VM and install @development group and go language\nssh root@wwdev\n\n# Disable selinux by modifying /etc/sysconfig/selinux\nvi /etc/sysconfig/selinux\n\n    SELINUX=disabled\n\n# disable firewall\nsystemctl stop firewalld\nsystemctl disable firewalld\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Turn off default network dhcp on server master1")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# shutdown all VMs\nsudo virsh net-destroy default\n\nsudo virsh net-edit default\n\n    # remove dhcp lines from XML\n\nsudo virsh net-start default\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Build and install warewulf on wwdev")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"ssh wwdev\n\n# Fedora prerequisites\nsudo dnf -y install tftp-server tftp\nsudo dnf -y install dhcp\nsudo dnf -y install ipmitool\nsudo dnf install singularity\nsudo dnf install gpgme-devel\nsudo dnf install libassuan.x86_64 libassuan-devel.x86_64\nsudo dnf golang\nsudo dnf nfs-utils\n\n# Centos prerequisites\nsudo yum -y install tftp-server tftp\nsudo yum -y install dhcp\nsudo yum -y install ipmitool\nsudo yum install http://repo.ctrliq.com/packages/rhel7/ctrl-release.rpm\nsudo yum install singularityplus\nsudo yum install gpgme-devel\nsudo yum install libassuan.x86_64 libassuan-devel.x86_64\nsudo yum install https://packages.endpoint.com/rhel/7/os/x86_64/endpoint-repo-1.7-1.x86_64.rpm\nsudo yum install golang \nsudo yum install nfs-utils\n\n# Install Warewulf and dependencies\ngit clone https://github.com/ctrliq/warewulf.git\ncd warewulf\n\nmake all\nsudo make install\n\n# Configure the controller\nEdit the file /etc/warewulf/warewulf.conf and ensure that you've ser the approprite configuration parameters\n\n# Configure system service automatically\nsudo wwctl configure dhcp # Create the default dhcpd.conf file and start/enable service\nsudo wwctl configure tftp # Install the base tftp/PXE boot files and start/enable service\nsudo wwctl configure nfs  # Configure the exports and create an fstab in the default system overlay\nsudo wwctl configure ssh  # Build the basic ssh keys to be included by the default system overlay\n\n# Pull and build the VNFS container and kernel\nsudo wwctl container import docker://warewulf/centos-8 centos-8 --setdefault\nsudo wwctl kernel import build $(uname -r) --setdefault\n\n# Set up the default node profile\nsudo wwctl profile set default -K $(uname -r) -C centos-7\nsudo wwctl profile set default --netdev eth0 -M WW_server_subnet_mask -G WW_server_ip\nsudo wwctl profile list\n\n# Add a node and build node specific overlays\nsudo wwctl node add n0000.cluster --netdev eth0 -I n0000_ip --discoverable\nsudo wwctl node list -a n0000\n\n# Review Warewulf overlays\nsudo wwctl overlay list -l\nsudo wwctl overlay list -ls\nsudo wwctl overlay edit default /etc/hello_world.ww\nsudo wwctl overlay build -a\n\n# Start the Warewulf daemon\nsudo wwctl ready\nsudo wwctl server start\nsudo wwctl server status\n")),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Boot your node and watch the console and the output of the Warewulfd process")))}c.isMDXComponent=!0},115:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),c=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||l;return t?o.a.createElement(f,s(s({ref:n},u),{},{components:t})):o.a.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<l;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);