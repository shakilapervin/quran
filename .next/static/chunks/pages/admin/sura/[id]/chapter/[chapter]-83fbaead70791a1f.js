(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{1742:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sura/[id]/chapter/[chapter]",function(){return t(6397)}])},6397:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSP:function(){return w},default:function(){return N}});var r=t(7568),s=t(4051),i=t.n(s),n=t(5893),l=t(5665),o=t(9008),c=t.n(o),h=t(9669),d=t.n(h),f=t(5152),u=t.n(f),m=t(7294),g=t(9755),x=t.n(g),p=t(6494),b=t(2920),j=t(4849),v=u()((function(){return Promise.all([t.e(326),t.e(911)]).then(t.t.bind(t,2911,23))}),{loadableGenerated:{webpack:function(){return[2911]}},ssr:!1}),w=!0;function N(e){var a=e.user,t=e.id,s=e.sura,o=(0,m.useState)(),h=o[0],f=o[1],u=(0,m.useState)(!0),g=u[0],w=u[1],N=(0,m.useState)(!1),C=N[0],y=N[1],F={headers:{Authorization:"Bearer ".concat(a.token)}};(0,m.useEffect)((function(){d().get("".concat("https://almunji.webxcode.xyz/api","/chapter/").concat(t),F).then((function(e){!0===e.data.status&&(f(e.data.chapter),w(!1))})).catch((function(e){console.log(e)}))}),[]);var k={readonly:!1,height:400},T=function(){var e=(0,r.Z)(i().mark((function e(a){var r,n,l,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),y(!0),b.Am.loading("Saving",{position:"bottom-left",theme:"dark"}),r=a.target.arabicTitle.value,n=a.target.banglaTitle.value,l=x()(".tafsilShort .jodit-wysiwyg").html(),o=x()(".tafsilLong .jodit-wysiwyg").html(),c=a.target.serial.value,e.prev=8,e.next=11,d().post("".concat("https://almunji.webxcode.xyz/api","/chapter/update"),{arabic:r,bangla:n,shortTafsil:l,longTafsil:o,serial:c,sura:s,id:t},F);case 11:!0===e.sent.data.status?(b.Am.dismiss(),b.Am.success("Saved",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),y(!1)):(b.Am.dismiss(),b.Am.error("Something went wrong! Try again",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),y(!1)),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(8),b.Am.dismiss(),b.Am.error(e.t0.response.statusText,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),y(!1);case 20:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(a){return e.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:"Edit Chapter"})}),C&&!0===C&&(0,n.jsx)(p.Z,{}),(0,n.jsx)(b.Ix,{}),(0,n.jsxs)(l.Z,{user:a,children:[(0,n.jsx)("div",{className:"topBar",children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("h1",{className:"welcome",children:"Edit Chapter"})})}),(0,n.jsx)("div",{className:"widgetArea",children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("div",{className:"formWrapper",children:(0,n.jsxs)("form",{onSubmit:T,encType:"multipart/form-data",children:[(0,n.jsxs)("div",{className:"form-group mb-2",children:[(0,n.jsx)("label",{children:"Arabic"}),s&&!1===g&&(0,n.jsx)("textarea",{name:"arabicTitle",className:"form-control",rows:"5",dir:"rtl",defaultValue:h.arabic})||(0,n.jsx)(j.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,n.jsx)(j.Z,{width:"100%",height:70})})]}),(0,n.jsxs)("div",{className:"form-group mb-2",children:[(0,n.jsx)("label",{children:"Bangla"}),s&&!1===g&&(0,n.jsx)("textarea",{name:"banglaTitle",className:"form-control",rows:"5",defaultValue:h.bangla})||(0,n.jsx)(j.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,n.jsx)(j.Z,{width:"100%",height:70})})]}),(0,n.jsxs)("div",{className:"form-group mb-2 tafsilShort",children:[(0,n.jsx)("label",{children:"Short Tafsil"}),s&&!1===g&&(0,n.jsx)(v,{config:k,value:h.shortTafsil})||(0,n.jsx)(j.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,n.jsx)(j.Z,{width:"100%",height:100})})]}),(0,n.jsxs)("div",{className:"form-group mb-2 tafsilLong",children:[(0,n.jsx)("label",{children:"Long Tafsil"}),s&&!1===g&&(0,n.jsx)(v,{config:k,value:h.longTafsil2})||(0,n.jsx)(j.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,n.jsx)(j.Z,{width:"100%",height:100})})]}),(0,n.jsxs)("div",{className:"form-group mb-2",children:[(0,n.jsx)("label",{children:"Chapter Serial Number"}),s&&!1===g&&(0,n.jsx)("input",{type:"text",className:"form-control",required:!0,name:"serial",id:"serial",defaultValue:h.serial})||(0,n.jsx)(j.y,{baseColor:"#ffffff",highlightColor:"#F1F5F9",children:(0,n.jsx)(j.Z,{width:"100%",height:40})})]}),(0,n.jsx)("div",{className:"form-group mb-2",children:(0,n.jsx)("button",{type:"submit",className:"btn btn-success",children:"Update"})})]})})})})]})]})}}},function(e){e.O(0,[571,959,217,497,937,310,774,888,179],(function(){return a=1742,e(e.s=a);var a}));var a=e.O();_N_E=a}]);