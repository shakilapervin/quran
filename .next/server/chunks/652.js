exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 4452:
/***/ ((module) => {

// Exports
module.exports = {
	"sideBar": "Sidebar_sideBar__3fF1F",
	"avatar": "Sidebar_avatar__js5uB",
	"menu": "Sidebar_menu__5D77y",
	"active": "Sidebar_active__qlMTA"
};


/***/ }),

/***/ 9514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CustomImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function CustomImage({ href , src  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "unsetImg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: src,
                    layout: "fill",
                    className: "customImg",
                    alt: "Image"
                })
            })
        })
    });
};


/***/ }),

/***/ 5665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/admin/layouts/Sidebar.module.css
var Sidebar_module = __webpack_require__(4452);
var Sidebar_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_module);
// EXTERNAL MODULE: ./components/CustomImage.js
var CustomImage = __webpack_require__(9514);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/admin/layouts/Sidebar.js





function Sidebar({ user  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Sidebar_module_default()).sideBar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Sidebar_module_default()).avatar,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomImage/* default */.Z, {
                    href: "#",
                    src: "/avatar.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center text-white mt-2",
                children: user.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (Sidebar_module_default()).menu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/admin",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: router.pathname == "/admin/dashboard" ? (Sidebar_module_default()).active : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fi fi-rr-dashboard"
                                    }),
                                    "Dashboard"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/admin/sura",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: router.pathname == "/admin/sura" || router.pathname == "/admin/sura/add-new" || router.pathname == "/admin/sura/[id]" ? (Sidebar_module_default()).active : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fi fi-rr-book"
                                    }),
                                    "Manage Sura"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/admin/dua",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: router.pathname == "/admin/dua" || router.pathname == "/admin/dua/add-new" || router.pathname == "/admin/dua/[id]" ? (Sidebar_module_default()).active : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fi fi-rr-book"
                                    }),
                                    "Manage Dua"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/api/auth/signout",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fi fi-rr-sign-out-alt"
                                    }),
                                    "Logout"
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/admin/layouts/Layout.js



function Layout(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid p-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                            user: props.user
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-10",
                        children: props.children
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const session = {
    cookieName: "sm-pos",
    password: "s%3Al3ozSdvQ83TtC5RvJ.CibaQoHtaY0H3QOB1kqR8H2A",
    cookieOptions: {
        secure: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (session);


/***/ })

};
;