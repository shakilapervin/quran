(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{9514:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var n=t(5893),r=t(1664),l=t.n(r),o=t(5675),s=t.n(o);function u(e){var a=e.href,t=e.src;return(0,n.jsx)(l(),{href:a,children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{className:"unsetImg",children:(0,n.jsx)(s(),{src:t,layout:"fill",className:"customImg",alt:"Image"})})})})}},6494:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var n=t(5893);function r(){return(0,n.jsx)("div",{className:"loader"})}},5665:function(e,a,t){"use strict";t.d(a,{Z:function(){return f}});var n=t(5893),r=(t(7294),t(8845)),l=t.n(r),o=t(9514),s=t(1664),u=t.n(s),i=t(1163);function c(e){var a=e.user,t=(0,i.useRouter)();return(0,n.jsxs)("div",{className:l().sideBar,children:[(0,n.jsx)("div",{className:l().avatar,children:(0,n.jsx)(o.Z,{href:"#",src:"/avatar.jpg"})}),(0,n.jsx)("p",{className:"text-center text-white mt-2",children:a.name}),(0,n.jsxs)("ul",{className:l().menu,children:[(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/admin",children:(0,n.jsxs)("a",{className:"/admin/dashboard"==t.pathname?l().active:"",children:[(0,n.jsx)("span",{className:"fi fi-rr-dashboard"}),"Dashboard"]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/admin/sura",children:(0,n.jsxs)("a",{className:"/admin/sura"==t.pathname||"/admin/sura/add-new"==t.pathname||"/admin/sura/[id]"==t.pathname?l().active:"",children:[(0,n.jsx)("span",{className:"fi fi-rr-book"}),"Manage Sura"]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/admin/dua",children:(0,n.jsxs)("a",{className:"/admin/dua"==t.pathname||"/admin/dua/add-new"==t.pathname||"/admin/dua/[id]"==t.pathname?l().active:"",children:[(0,n.jsx)("span",{className:"fi fi-rr-book"}),"Manage Dua"]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/api/auth/signout",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("span",{className:"fi fi-rr-sign-out-alt"}),"Logout"]})})})]})]})}function f(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"container-fluid p-0",children:(0,n.jsxs)("div",{className:"row g-0",children:[(0,n.jsx)("div",{className:"col-md-2",children:(0,n.jsx)(c,{user:e.user})}),(0,n.jsx)("div",{className:"col-md-10",children:e.children})]})})})}},1210:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=function(e,a,t,n){return!1};("function"===typeof a.default||"object"===typeof a.default&&null!==a.default)&&"undefined"===typeof a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},8418:function(e,a,t){"use strict";var n=t(4941).Z;t(5753).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r,l=(r=t(7294))&&r.__esModule?r:{default:r},o=t(6273),s=t(2725),u=t(3462),i=t(1018),c=t(7190),f=t(1210),d=t(8684);var p="undefined"!==typeof l.default.useTransition,h={};function v(e,a,t,n){if(e&&o.isLocalURL(a)){e.prefetch(a,t,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;h[a+"%"+t+(r?"%"+r:"")]=!0}}var m=l.default.forwardRef((function(e,a){var t,r=e.href,m=e.as,x=e.children,j=e.prefetch,_=e.passHref,y=e.replace,b=e.shallow,g=e.scroll,C=e.locale,N=e.onClick,M=e.onMouseEnter,L=e.legacyBehavior,k=void 0===L?!0!==Boolean(!1):L,E=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);t=x,!k||"string"!==typeof t&&"number"!==typeof t||(t=l.default.createElement("a",null,t));var R=!1!==j,w=n(p?l.default.useTransition():[],2)[1],A=l.default.useContext(u.RouterContext),O=l.default.useContext(i.AppRouterContext);O&&(A=O);var T,B=l.default.useMemo((function(){var e=n(o.resolveHref(A,r,!0),2),a=e[0],t=e[1];return{href:a,as:m?o.resolveHref(A,m):t||a}}),[A,r,m]),D=B.href,P=B.as,S=l.default.useRef(D),F=l.default.useRef(P);k&&(T=l.default.Children.only(t));var K=k?T&&"object"===typeof T&&T.ref:a,U=n(c.useIntersection({rootMargin:"200px"}),3),Z=U[0],H=U[1],I=U[2],q=l.default.useCallback((function(e){F.current===P&&S.current===D||(I(),F.current=P,S.current=D),Z(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[P,K,D,I,Z]);l.default.useEffect((function(){var e=H&&R&&o.isLocalURL(D),a="undefined"!==typeof C?C:A&&A.locale,t=h[D+"%"+P+(a?"%"+a:"")];e&&!t&&v(A,D,P,{locale:a})}),[P,D,H,C,R,A]);var W={ref:q,onClick:function(e){k||"function"!==typeof N||N(e),k&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,a,t,n,r,l,s,u,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t)){e.preventDefault();var c=function(){a[r?"replace":"push"](t,n,{shallow:l,locale:u,scroll:s})};i?i(c):c()}}(e,A,D,P,y,b,g,C,O?w:void 0)},onMouseEnter:function(e){k||"function"!==typeof M||M(e),k&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),o.isLocalURL(D)&&v(A,D,P,{priority:!0})}};if(!k||_||"a"===T.type&&!("href"in T.props)){var z="undefined"!==typeof C?C:A&&A.locale,G=A&&A.isLocaleDomain&&f.getDomainLocale(P,z,A.locales,A.domainLocales);W.href=G||d.addBasePath(s.addLocale(P,z,A&&A.defaultLocale))}return k?l.default.cloneElement(T,W):l.default.createElement("a",Object.assign({},E,W),t)}));a.default=m,("function"===typeof a.default||"object"===typeof a.default&&null!==a.default)&&"undefined"===typeof a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},1018:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var n,r=(n=t(7294))&&n.__esModule?n:{default:n};var l=r.default.createContext(null);a.AppRouterContext=l;var o=r.default.createContext(null);a.AppTreeContext=o;var s=r.default.createContext(null);a.FullAppTreeContext=s},8845:function(e){e.exports={sideBar:"Sidebar_sideBar__3fF1F",avatar:"Sidebar_avatar__js5uB",menu:"Sidebar_menu__5D77y",active:"Sidebar_active__qlMTA"}},4570:function(e){e.exports={formWrapper:"AddNewSura_formWrapper__qLKSR"}},1664:function(e,a,t){e.exports=t(8418)}}]);