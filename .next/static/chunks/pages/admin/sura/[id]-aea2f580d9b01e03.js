(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[600],{3473:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sura/[id]",function(){return s(6358)}])},9514:function(e,a,s){"use strict";s.d(a,{Z:function(){return l}});var r=s(5893),n=s(1664),t=s.n(n),i=s(5675),c=s.n(i);function l(e){var a=e.href,s=e.src;return(0,r.jsx)(t(),{href:a,children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:"unsetImg",children:(0,r.jsx)(c(),{src:s,layout:"fill",className:"customImg",alt:"Image"})})})})}},6494:function(e,a,s){"use strict";s.d(a,{Z:function(){return n}});var r=s(5893);function n(){return(0,r.jsx)("div",{className:"loader"})}},5665:function(e,a,s){"use strict";s.d(a,{Z:function(){return u}});var r=s(5893),n=(s(7294),s(8845)),t=s.n(n),i=s(9514),c=s(1664),l=s.n(c),d=s(1163);function o(e){var a=e.user,s=(0,d.useRouter)();return(0,r.jsxs)("div",{className:t().sideBar,children:[(0,r.jsx)("div",{className:t().avatar,children:(0,r.jsx)(i.Z,{href:"#",src:"/avatar.jpg"})}),(0,r.jsx)("p",{className:"text-center text-white mt-2",children:a.name}),(0,r.jsxs)("ul",{className:t().menu,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/admin",children:(0,r.jsxs)("a",{className:"/admin/dashboard"==s.pathname?t().active:"",children:[(0,r.jsx)("span",{className:"fi fi-rr-dashboard"}),"Dashboard"]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/admin/sura",children:(0,r.jsxs)("a",{className:"/admin/sura"==s.pathname||"/admin/sura/add-new"==s.pathname||"/admin/sura/[id]"==s.pathname?t().active:"",children:[(0,r.jsx)("span",{className:"fi fi-rr-book"}),"Manage Sura"]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/admin/dua",children:(0,r.jsxs)("a",{className:"/admin/dua"==s.pathname||"/admin/dua/add-new"==s.pathname||"/admin/dua/[id]"==s.pathname?t().active:"",children:[(0,r.jsx)("span",{className:"fi fi-rr-book"}),"Manage Dua"]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/api/auth/signout",children:(0,r.jsxs)("a",{children:[(0,r.jsx)("span",{className:"fi fi-rr-sign-out-alt"}),"Logout"]})})})]})]})}function u(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container-fluid p-0",children:(0,r.jsxs)("div",{className:"row g-0",children:[(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsx)(o,{user:e.user})}),(0,r.jsx)("div",{className:"col-md-10",children:e.children})]})})})}},6358:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSP:function(){return j},default:function(){return p}});var r=s(7568),n=s(4051),t=s.n(n),i=s(5893),c=s(5665),l=s(9008),d=s.n(l),o=s(9669),u=s.n(o),m=s(4849),h=s(7294),f=s(2920),x=s(6494),j=!0;function p(e){var a=e.user,s=e.id,n=(0,h.useState)(),l=n[0],o=n[1],j=(0,h.useState)(!0),p=j[0],g=j[1],v=(0,h.useState)(!1),N=v[0],b=v[1],_={headers:{Authorization:"Bearer ".concat(a.token)}};(0,h.useEffect)((function(){u().get("".concat("https://almunji.webxcode.xyz/api","/sura/").concat(s),_).then((function(e){!0===e.data.status&&(o(e.data.sura),g(!1))})).catch((function(e){console.log(e)}))}),[]);var w=function(){var e=(0,r.Z)(t().mark((function e(a){var r,n,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),b(!0),f.Am.loading("Saving",{position:"bottom-left",theme:"dark"}),r=a.target.arabicName.value,n=a.target.banglaName.value,i=a.target.serial.value,e.prev=6,e.next=9,u().post("".concat("https://almunji.webxcode.xyz/api","/sura/update"),{banglaName:n,arabicName:r,serial_no:i,id:s},_);case 9:!0===e.sent.data.status?(f.Am.dismiss(),f.Am.success("Saved",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),b(!1)):(f.Am.dismiss(),f.Am.error("Something went wrong! Try again",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),b(!1)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(6),f.Am.dismiss(),f.Am.error(e.t0.response.statusText,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),b(!1);case 18:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(a){return e.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d(),{children:(0,i.jsx)("title",{children:"Edit Sura"})}),N&&!0===N&&(0,i.jsx)(x.Z,{}),(0,i.jsx)(f.Ix,{}),(0,i.jsxs)(c.Z,{user:a,children:[(0,i.jsx)("div",{className:"topBar",children:(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("h1",{className:"welcome",children:"Edit Sura"})})}),(0,i.jsx)("div",{className:"widgetArea",children:(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("div",{className:"formWrapper",children:(0,i.jsxs)("form",{onSubmit:w,encType:"multipart/form-data",children:[(0,i.jsxs)("div",{className:"form-group mb-2",children:[(0,i.jsx)("label",{children:"Bangla Name"}),l&&!1===p&&(0,i.jsx)("input",{type:"text",className:"form-control",name:"banglaName",required:!0,defaultValue:l.bangla_name})||(0,i.jsx)(m.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,i.jsx)(m.Z,{width:"100%",height:40})})]}),(0,i.jsxs)("div",{className:"form-group mb-2",children:[(0,i.jsx)("label",{children:"Arabic Name"}),l&&!1===p&&(0,i.jsx)("input",{type:"text",className:"form-control",name:"arabicName",required:!0,defaultValue:l.arabic_name,dir:"rtl"})||(0,i.jsx)(m.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,i.jsx)(m.Z,{width:"100%",height:40})})]}),(0,i.jsxs)("div",{className:"form-group mb-2",children:[(0,i.jsx)("label",{children:"Sura Serial Number"}),l&&!1===p&&(0,i.jsx)("input",{type:"text",className:"form-control",name:"serial",required:!0,defaultValue:l.serial_no,dir:"rtl"})||(0,i.jsx)(m.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,i.jsx)(m.Z,{width:"100%",height:40})})]}),(0,i.jsx)("div",{className:"form-group mb-2",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-success",children:"Update"})})]})})})})]})]})}},8845:function(e){e.exports={sideBar:"Sidebar_sideBar__3fF1F",avatar:"Sidebar_avatar__js5uB",menu:"Sidebar_menu__5D77y",active:"Sidebar_active__qlMTA"}}},function(e){e.O(0,[959,217,497,937,774,888,179],(function(){return a=3473,e(e.s=a);var a}));var a=e.O();_N_E=a}]);