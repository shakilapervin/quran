(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{4192:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sura/[id]/chapter",function(){return n(2083)}])},9514:function(e,a,n){"use strict";n.d(a,{Z:function(){return d}});var t=n(5893),s=n(1664),r=n.n(s),i=n(5675),c=n.n(i);function d(e){var a=e.href,n=e.src;return(0,t.jsx)(r(),{href:a,children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:"unsetImg",children:(0,t.jsx)(c(),{src:n,layout:"fill",className:"customImg",alt:"Image"})})})})}},603:function(e,a,n){"use strict";n.d(a,{Z:function(){return r}});var t=n(5893),s=n(4849);function r(e){for(var a=e.td,n=e.tr,r=[],i=0;i<n;i++)r.push(i);for(var c=[],d=0;d<a;d++)c.push(d);return r.map((function(e,a){return(0,t.jsx)("tr",{children:c.map((function(e,a){return(0,t.jsx)("td",{children:(0,t.jsx)(s.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,t.jsx)("p",{children:(0,t.jsx)(s.Z,{width:"100%",height:30})})})},a)}))},a)}))}},5665:function(e,a,n){"use strict";n.d(a,{Z:function(){return u}});var t=n(5893),s=(n(7294),n(8845)),r=n.n(s),i=n(9514),c=n(1664),d=n.n(c),l=n(1163);function o(e){var a=e.user,n=(0,l.useRouter)();return(0,t.jsxs)("div",{className:r().sideBar,children:[(0,t.jsx)("div",{className:r().avatar,children:(0,t.jsx)(i.Z,{href:"#",src:"/avatar.jpg"})}),(0,t.jsx)("p",{className:"text-center text-white mt-2",children:a.name}),(0,t.jsxs)("ul",{className:r().menu,children:[(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:"/admin",children:(0,t.jsxs)("a",{className:"/admin/dashboard"==n.pathname?r().active:"",children:[(0,t.jsx)("span",{className:"fi fi-rr-dashboard"}),"Dashboard"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:"/admin/sura",children:(0,t.jsxs)("a",{className:"/admin/sura"==n.pathname||"/admin/sura/add-new"==n.pathname||"/admin/sura/[id]"==n.pathname?r().active:"",children:[(0,t.jsx)("span",{className:"fi fi-rr-book"}),"Manage Sura"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:"/admin/dua",children:(0,t.jsxs)("a",{className:"/admin/dua"==n.pathname||"/admin/dua/add-new"==n.pathname||"/admin/dua/[id]"==n.pathname?r().active:"",children:[(0,t.jsx)("span",{className:"fi fi-rr-book"}),"Manage Dua"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:"/api/auth/signout",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("span",{className:"fi fi-rr-sign-out-alt"}),"Logout"]})})})]})]})}function u(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"container-fluid p-0",children:(0,t.jsxs)("div",{className:"row g-0",children:[(0,t.jsx)("div",{className:"col-md-2",children:(0,t.jsx)(o,{user:e.user})}),(0,t.jsx)("div",{className:"col-md-10",children:e.children})]})})})}},2083:function(e,a,n){"use strict";n.r(a),n.d(a,{__N_SSP:function(){return g},default:function(){return N}});var t=n(7568),s=n(4051),r=n.n(s),i=n(5893),c=n(9008),d=n.n(c),l=n(5665),o=n(1664),u=n.n(o),h=n(7294),m=n(9669),x=n.n(m),f=n(603),p=n(2920),j=n(9755),v=n.n(j),g=!0;function N(e){var a=e.user,n=e.sura,s=(0,h.useState)(),c=s[0],o=s[1],m=(0,h.useState)([]),j=m[0],g=m[1],N=(0,h.useState)(!0),b=N[0],w=N[1],_={headers:{Authorization:"Bearer ".concat(a.token)}};function k(){return(k=(0,t.Z)(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x().get("".concat("https://almunji.webxcode.xyz/api","/").concat(n,"/chapter"),_);case 3:!0===(a=e.sent).data.status&&(a.data.chapters.data?o(a.data.chapters.data):o([]),a.data.chapters.links&&g(a.data.chapters.links),w(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}(0,h.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[o]);var C=function(){var e=(0,t.Z)(r().mark((function e(a){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,x().get(a,_);case 4:!0===(n=e.sent).data.status&&(o(n.data.suras.data),g(n.data.suras.links),w(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=(0,t.Z)(r().mark((function e(a){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.Am.loading("Deleting",{position:"bottom-right",theme:"dark"}),e.prev=1,e.next=4,x().post("".concat("https://almunji.webxcode.xyz/api","/chapter/delete"),{id:a},_);case 4:!0===(n=e.sent).data.status?(p.Am.dismiss(),p.Am.success("Successfully Deleted",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),v()(".row-id-".concat(a)).fadeOut()):(p.Am.dismiss(),p.Am.error(n.data.error,{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),p.Am.dismiss(),p.Am.error(e.t0.response.data.errors,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d(),{children:(0,i.jsxs)("title",{children:["Manage ",n.banglaName," Chapters"]})}),(0,i.jsx)(p.Ix,{}),(0,i.jsxs)(l.Z,{user:a,children:[(0,i.jsx)("div",{className:"topBar",children:(0,i.jsx)("div",{className:"content",children:(0,i.jsxs)("h1",{className:"welcome",children:["Manage ",n.banglaName," Chapters"]})})}),(0,i.jsx)("div",{className:"widgetArea",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(u(),{href:"/admin/sura/".concat(n,"/chapter/add-new"),children:(0,i.jsx)("a",{className:"btn btn-success",children:"Add New Chapter"})}),(0,i.jsxs)("table",{className:"table mt-3",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{width:"10%",children:"Chapter"}),(0,i.jsx)("th",{width:"40%",children:"Arabic"}),(0,i.jsx)("th",{width:"40%",children:"Bangla"}),(0,i.jsx)("th",{width:"10%",children:"Action"})]})}),(0,i.jsxs)("tbody",{children:[c&&c.length<=0&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:4,className:"text-center",children:"No Sura Found"})}),c&&!b&&c.map((function(e){return(0,i.jsxs)("tr",{style:{verticalAlign:"middle"},className:"row-id-".concat(e.id),children:[(0,i.jsx)("td",{children:e.serial}),(0,i.jsx)("td",{dir:"rtl",children:e.arabic}),(0,i.jsx)("td",{className:"text-start",children:e.bangla}),(0,i.jsxs)("td",{children:[(0,i.jsx)(u(),{href:"/admin/sura/".concat(e.sura,"/chapter/").concat(e.id),children:(0,i.jsx)("a",{className:"btn btn-warning btn-sm m-2",children:"Edit"})}),(0,i.jsx)("a",{className:"btn btn-danger btn-sm",onClick:function(a){a.preventDefault(),confirm("Want to delete?")&&S(e.id)},children:"Delete"})]})]},e.id)}))||(0,i.jsx)(f.Z,{tr:3,td:4})]}),(0,i.jsx)("tfoot",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:6,children:(0,i.jsx)("nav",{className:"float-end",children:(0,i.jsx)("ul",{className:"pagination mt-3",children:j.map((function(e){return(0,i.jsx)("li",{className:"page-item ".concat(!0===e.active?"active":""),children:(0,i.jsx)("a",{className:"page-link",onClick:function(){return C(e.url)},dangerouslySetInnerHTML:{__html:e.label}})},e.label)}))})})})})})]})]})})]})]})}},8845:function(e){e.exports={sideBar:"Sidebar_sideBar__3fF1F",avatar:"Sidebar_avatar__js5uB",menu:"Sidebar_menu__5D77y",active:"Sidebar_active__qlMTA"}}},function(e){e.O(0,[571,959,217,497,937,774,888,179],(function(){return a=4192,e(e.s=a);var a}));var a=e.O();_N_E=a}]);