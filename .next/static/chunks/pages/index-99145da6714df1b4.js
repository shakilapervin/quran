(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1673:function(e,a){"use strict";a.ky=void 0;var n=/[0-9]/g,s=/[\u0660-\u0669]/g,c=/[^0-9]/g,r=/[^\u0660-\u0669]/g;a.ky=function(e,a){return void 0===a&&(a=!1),a&&(e=String(e).replace(c,"")),String(e).replace(n,(function(e){return String.fromCharCode(e.charCodeAt(0)+1584)}))}},5557:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},3678:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return k}});var s=n(5893),c=n(9008),r=n.n(c),t=n(9514),l=n(3676),i=n(7568),o=n(4051),d=n.n(o),u=n(7294),m=n(3315),h=n.n(m),x=n(9669),p=n.n(x),j=n(1673),v=n(9755),f=n.n(v);function N(){var e=(0,u.useState)(),a=e[0],n=e[1],c=(0,u.useState)(),r=c[0],t=c[1];function l(){return(l=(0,i.Z)(d().mark((function e(){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().get("".concat("https://almunji.webxcode.xyz/api","/sura?allData=true"));case 3:!0===(a=e.sent).data.status&&(n(a.data.suras),o(1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function o(e){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(d().mark((function e(a){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().get("".concat("https://almunji.webxcode.xyz/api","/").concat(a,"/chapter?allData=true"));case 3:!0===(n=e.sent).data.status&&t(n.data.chapters),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}(0,u.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:h().searchBoxTitle,children:" \u0645\u062a\u0646 \u0642\u0631\u0622\u0646"}),(0,s.jsx)("div",{className:h().searchFieldWrapper,children:(0,s.jsx)("form",{action:"/sura",method:"get",children:(0,s.jsx)("div",{className:"row align-items-center",children:(0,s.jsxs)("div",{className:"col-md-12",children:[(0,s.jsxs)("div",{className:"row align-items-center mb-3",children:[(0,s.jsx)("label",{className:"col-md-2 col-form-label",children:"\u0633\u0648\u0631\u0647:"}),(0,s.jsx)("div",{className:"col-md-10",children:(0,s.jsx)("select",{name:"sura",className:"form-control ".concat(h().dropdown," sura"),onChange:function(){o(f()(".sura").val())},children:a&&a.map((function(e){return(0,s.jsxs)("option",{value:e.id,children:[(0,j.ky)(e.serial_no),". ",e.arabic_name]},e.id)}))})})]}),(0,s.jsxs)("div",{className:"row align-items-center mb-3",children:[(0,s.jsx)("label",{className:"col-md-2 col-form-label",children:"\u0622\u064a\u0647:"}),(0,s.jsx)("div",{className:"col-md-10",children:(0,s.jsx)("select",{name:"chapter",className:"form-control ".concat(h().dropdown),children:r&&r.map((function(e){return(0,s.jsx)("option",{value:e.serial,children:(0,j.ky)(e.serial)},e.id)}))})})]}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsx)("div",{className:"col-md-2"}),(0,s.jsx)("div",{className:"col-md-10",children:(0,s.jsx)("button",{className:"btn btn-dark",type:"submit",children:"\u062c\u0633\u062a\u062c\u0648"})})]})]})})})})]})}var g=n(1664),w=n.n(g),b=n(214),y=n.n(b);function _(){var e=(0,u.useState)(),a=e[0],n=e[1];function c(){return(c=(0,i.Z)(d().mark((function e(){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().get("".concat("https://almunji.webxcode.xyz/api","/dua?allData=true"));case 3:!0===(a=e.sent).data.status&&n(a.data.duas),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function r(){return(r=(0,i.Z)(d().mark((function e(a){var s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().get("".concat("https://almunji.webxcode.xyz/api","/dua?type=").concat(a));case 3:!0===(s=e.sent).data.status&&(console.log(s.data.duas),n(s.data.duas)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}(0,u.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:h().searchBoxTitle,children:"\u062f\u0639\u0627"}),(0,s.jsx)("div",{className:h().searchFieldWrapper,children:(0,s.jsx)("form",{action:"/sura",method:"get",children:(0,s.jsx)("div",{className:"row align-items-center",children:(0,s.jsxs)("div",{className:"col-md-12",children:[(0,s.jsxs)("div",{className:"row align-items-center mb-3",children:[(0,s.jsx)("label",{className:"col-md-2 col-form-label",children:"\u0633\u0648\u0631\u0647:"}),(0,s.jsx)("div",{className:"col-md-10",children:(0,s.jsxs)("select",{name:"dua",className:"form-control ".concat(h().dropdown," dua"),onChange:function(){!function(e){r.apply(this,arguments)}(f()(".dua").val())},children:[(0,s.jsx)("option",{value:"1",children:"\u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09bf\u09a8\u09c7\u09b0 \u09a6\u09cb\u09df\u09be"}),(0,s.jsx)("option",{value:"2",children:"\u09b8\u09aa\u09cd\u09a4\u09be\u09b9\u09c7\u09b0 \u09a6\u09cb\u09df\u09be"}),(0,s.jsx)("option",{value:"3",children:"\u09ac\u09bf\u09b6\u09c7\u09b7 \u09a6\u09cb\u09df\u09be"}),(0,s.jsx)("option",{value:"4",children:"\u09aa\u09cd\u09b0\u09b8\u09bf\u09a6\u09cd\u09a7 \u09a6\u09cb\u09df\u09be"})]})})]}),(0,s.jsxs)("div",{className:"row align-items-center mb-3",children:[(0,s.jsx)("label",{className:"col-md-2 col-form-label",children:"\u0622\u064a\u0647:"}),(0,s.jsx)("div",{className:"col-md-10",children:(0,s.jsx)("select",{name:"chapter",className:"form-control ".concat(h().dropdown),children:a&&a.map((function(e){return(0,s.jsx)("option",{value:e.id,children:e.arabicName},e.id)}))})})]}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsx)("div",{className:"col-md-2"}),(0,s.jsx)("div",{className:"col-md-10",children:(0,s.jsx)("button",{className:"btn btn-dark",type:"submit",children:"\u062c\u0633\u062a\u062c\u0648"})})]})]})})})})]})}function k(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"\u067e\u0627\u0631\u0633 \u0642\u0631\u0622\u0646 : \u062c\u0633\u062a\u062c\u0648\u064a \u0642\u0631\u0622\u0646"}),(0,s.jsx)("meta",{name:"description",content:"\u062c\u0633\u062a\u062c\u0648\u06af\u0631 \u0642\u0631\u0622\u0646 \u0628\u0647 \u0633\u0647 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u064a \u060c \u0639\u0631\u0628\u064a \u0648 \u0627\u0646\u06af\u0644\u064a\u0633\u064a. \u0645\u0642\u0627\u0644\u0627\u062a \u0648 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627\u064a \u0642\u0631\u0622\u0646\u064a. \u062a\u0644\u0627\u0648\u062a \u0642\u0631\u0622\u0646. \u062a\u0631\u062c\u0645\u0647 \u0647\u0627\u064a \u0645\u062e\u062a\u0644\u0641 \u0642\u0631\u0622\u0646"}),(0,s.jsx)("meta",{name:"keyword",content:"\u0642\u0631\u0627\u0646 , \u0641\u0627\u0631\u0633\u064a , \u0642\u0631\u0622\u0646 \u06a9\u0631\u064a\u0645 , \u0642\u0631\u0622\u0646 \u0645\u062c\u064a\u062f , \u0641\u0627\u0631\u0633\u064a , \u0627\u0646\u06af\u0644\u064a\u0633\u064a, \u0642\u0631\u0622\u0646 , \u0639\u0631\u0628\u064a , \u0639\u0631\u0628\u064a , \u062a\u0631\u062c\u0645\u0647 , \u062c\u0633\u062a\u062c\u0648 , quran, iran, koran, islam, god, \u0642\u0631\u0627\u0646 \u06a9\u0631\u06cc\u0645"})]}),(0,s.jsxs)("div",{className:y().topArea,dir:"rtl",children:[(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsx)("div",{className:"col-md-3",children:(0,s.jsx)("div",{className:y().logo,children:(0,s.jsx)(t.Z,{src:"/logo.png",href:"/"})})}),(0,s.jsx)("div",{className:"col-md-6",children:(0,s.jsx)(l.Z,{})}),(0,s.jsx)("div",{className:"col-md-3 text-center",children:(0,s.jsx)(w(),{href:"#",children:(0,s.jsx)("a",{children:"\u09ac\u09be\u0982\u09b2\u09be"})})})]})}),(0,s.jsx)("div",{className:"container mt-5",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-4",children:(0,s.jsx)(N,{})}),(0,s.jsx)("div",{className:"col-md-4",children:(0,s.jsx)(_,{})})]})})]})]})}},3315:function(e){e.exports={searchBoxTitle:"SearchBySura_searchBoxTitle__vfRhF",searchFieldWrapper:"SearchBySura_searchFieldWrapper__Swfj3",dropdown:"SearchBySura_dropdown__ycbhE"}}},function(e){e.O(0,[571,959,217,601,774,888,179],(function(){return a=5557,e(e.s=a);var a}));var a=e.O();_N_E=a}]);