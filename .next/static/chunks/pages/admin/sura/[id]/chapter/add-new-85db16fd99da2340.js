(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{7123:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sura/[id]/chapter/add-new",function(){return a(2191)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,a,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,a){"use strict";var r=a(4941).Z;a(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=a(7294))&&n.__esModule?n:{default:n},l=a(6273),s=a(2725),i=a(3462),c=a(1018),u=a(7190),f=a(1210),d=a(8684);var p="undefined"!==typeof o.default.useTransition,h={};function m(e,t,a,r){if(e&&l.isLocalURL(t)){e.prefetch(t,a,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+a+(n?"%"+n:"")]=!0}}var v=o.default.forwardRef((function(e,t){var a,n=e.href,v=e.as,x=e.children,g=e.prefetch,b=e.passHref,j=e.replace,y=e.shallow,_=e.scroll,C=e.locale,w=e.onClick,N=e.onMouseEnter,k=e.legacyBehavior,A=void 0===k?!0!==Boolean(!1):k,T=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);a=x,!A||"string"!==typeof a&&"number"!==typeof a||(a=o.default.createElement("a",null,a));var O=!1!==g,E=r(p?o.default.useTransition():[],2)[1],L=o.default.useContext(i.RouterContext),M=o.default.useContext(c.AppRouterContext);M&&(L=M);var P,S=o.default.useMemo((function(){var e=r(l.resolveHref(L,n,!0),2),t=e[0],a=e[1];return{href:t,as:v?l.resolveHref(L,v):a||t}}),[L,n,v]),R=S.href,B=S.as,H=o.default.useRef(R),D=o.default.useRef(B);A&&(P=o.default.Children.only(a));var U=A?P&&"object"===typeof P&&P.ref:t,I=r(u.useIntersection({rootMargin:"200px"}),3),K=I[0],Z=I[1],z=I[2],F=o.default.useCallback((function(e){D.current===B&&H.current===R||(z(),D.current=B,H.current=R),K(e),U&&("function"===typeof U?U(e):"object"===typeof U&&(U.current=e))}),[B,U,R,z,K]);o.default.useEffect((function(){var e=Z&&O&&l.isLocalURL(R),t="undefined"!==typeof C?C:L&&L.locale,a=h[R+"%"+B+(t?"%"+t:"")];e&&!a&&m(L,R,B,{locale:t})}),[B,R,Z,C,O,L]);var W={ref:F,onClick:function(e){A||"function"!==typeof w||w(e),A&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,a,r,n,o,s,i,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(a)){e.preventDefault();var u=function(){t[n?"replace":"push"](a,r,{shallow:o,locale:i,scroll:s})};c?c(u):u()}}(e,L,R,B,j,y,_,C,M?E:void 0)},onMouseEnter:function(e){A||"function"!==typeof N||N(e),A&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),l.isLocalURL(R)&&m(L,R,B,{priority:!0})}};if(!A||b||"a"===P.type&&!("href"in P.props)){var q="undefined"!==typeof C?C:L&&L.locale,X=L&&L.isLocaleDomain&&f.getDomainLocale(B,q,L.locales,L.domainLocales);W.href=X||d.addBasePath(s.addLocale(B,q,L&&L.defaultLocale))}return A?o.default.cloneElement(P,W):o.default.createElement("a",Object.assign({},T,W),a)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,n=(r=a(7294))&&r.__esModule?r:{default:r};var o=n.default.createContext(null);t.AppRouterContext=o;var l=n.default.createContext(null);t.AppTreeContext=l;var s=n.default.createContext(null);t.FullAppTreeContext=s},2191:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return _},default:function(){return C}});var r=a(7568),n=a(4051),o=a.n(n),l=a(5893),s=a(7294),i=a(9008),c=a.n(i),u=a(5665),f=a(8209),d=a.n(f),p=a(9669),h=a.n(p),m=a(9755),v=a.n(m),x=a(5152),g=a.n(x),b=a(6494),j=a(2920),y=g()((function(){return Promise.all([a.e(326),a.e(911)]).then(a.t.bind(a,2911,23))}),{loadableGenerated:{webpack:function(){return[2911]}},ssr:!1}),_=!0;function C(e){var t=e.user,a=e.id,n=(0,s.useState)(),i=n[0],f=n[1],p=(0,s.useState)(!0),m=p[0],x=p[1],g=(0,s.useState)(!1),_=g[0],C=g[1],w={headers:{Authorization:"Bearer ".concat(t.token)}};(0,s.useEffect)((function(){h().get("".concat("https://almunji.webxcode.xyz/api","/sura/").concat(a),w).then((function(e){!0===e.data.status&&(f(e.data.sura),x(!1))})).catch((function(e){console.log(e)}))}),[]);var N={readonly:!1,height:400},k=function(){var e=(0,r.Z)(o().mark((function e(t){var r,n,l,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),C(!0),j.Am.loading("Saving",{position:"bottom-left",theme:"dark"}),r=t.target.arabicTitle.value,n=t.target.banglaTitle.value,l=v()(".tafsilShort .jodit-wysiwyg").html(),s=v()(".tafsilLong .jodit-wysiwyg").html(),i=t.target.serial.value,e.prev=8,e.next=11,h().post("".concat("https://almunji.webxcode.xyz/api","/chapter/save"),{arabic:r,bangla:n,shortTafsil:l,longTafsil:s,serial:i,sura:a},w);case 11:!0===e.sent.data.status?(j.Am.dismiss(),j.Am.success("Saved",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),v()("form").trigger("reset"),C(!1)):(j.Am.dismiss(),j.Am.error("Something went wrong! Try again",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),C(!1)),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(8),j.Am.dismiss(),j.Am.error(e.t0.response.statusText,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),C(!1);case 20:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c(),{children:(0,l.jsxs)("title",{children:["Add New Chapter In",i&&!1===m&&" "+i.bangla_name]})}),_&&!0===_&&(0,l.jsx)(b.Z,{}),(0,l.jsx)(j.Ix,{}),(0,l.jsx)(u.Z,{user:t,children:(0,l.jsxs)("div",{className:"topBar",children:[(0,l.jsx)("div",{className:"content",children:(0,l.jsxs)("h1",{className:"welcome",children:["Add New Chapter In",i&&!1===m&&" "+i.bangla_name]})}),(0,l.jsx)("div",{className:"widgetArea",children:(0,l.jsx)("div",{className:"content",children:(0,l.jsx)("div",{className:d().formWrapper,children:(0,l.jsxs)("form",{onSubmit:k,id:"form",children:[(0,l.jsxs)("div",{className:"form-group mb-2",children:[(0,l.jsx)("label",{children:"Arabic"}),(0,l.jsx)("textarea",{name:"arabicTitle",className:"form-control",rows:"5",dir:"rtl"})]}),(0,l.jsxs)("div",{className:"form-group mb-2",children:[(0,l.jsx)("label",{children:"Bangla"}),(0,l.jsx)("textarea",{name:"banglaTitle",className:"form-control",rows:"5"})]}),(0,l.jsxs)("div",{className:"form-group mb-2 tafsilShort",children:[(0,l.jsx)("label",{children:"Short Tafsil"}),(0,l.jsx)(y,{config:N})]}),(0,l.jsxs)("div",{className:"form-group mb-2 tafsilLong",children:[(0,l.jsx)("label",{children:"Long Tafsil"}),(0,l.jsx)(y,{config:N})]}),(0,l.jsxs)("div",{className:"form-group mb-2",children:[(0,l.jsx)("label",{children:"Chapter Serial Number"}),(0,l.jsx)("input",{type:"text",className:"form-control",required:!0,name:"serial",id:"serial"})]}),(0,l.jsx)("div",{className:"form-group mb-2",children:(0,l.jsx)("button",{type:"submit",className:"btn btn-success",children:"Save"})})]})})})})]})})]})}},8209:function(e){e.exports={formWrapper:"AddNewChapter_formWrapper__geqcj"}},1664:function(e,t,a){e.exports=a(8418)}},function(e){e.O(0,[571,959,217,497,310,774,888,179],(function(){return t=7123,e(e.s=t);var t}));var t=e.O();_N_E=t}]);