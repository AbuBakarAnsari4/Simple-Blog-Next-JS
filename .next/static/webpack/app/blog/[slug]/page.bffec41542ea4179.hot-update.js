"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/[slug]/page",{

/***/ "(app-client)/./app/blog/[slug]/page.js":
/*!*********************************!*\
  !*** ./app/blog/[slug]/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Navbar */ \"(app-client)/./app/components/Navbar.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(app-client)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var appwrite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! appwrite */ \"(app-client)/./node_modules/appwrite/dist/esm/sdk.js\");\n/* harmony import */ var _app_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Footer */ \"(app-client)/./app/components/Footer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst client = new appwrite__WEBPACK_IMPORTED_MODULE_4__.Client();\nclient.setEndpoint(\"https://cloud.appwrite.io/v1\").setProject(\"648b0e99608e158b28ac\");\nconst BlogPage = (param)=>{\n    let { params  } = param;\n    _s();\n    const [blogPost, setBlogPost] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const { slug  } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        document.title = blogPost === null || blogPost === void 0 ? void 0 : blogPost.title;\n        const databases = new appwrite__WEBPACK_IMPORTED_MODULE_4__.Databases(client);\n        let promise = databases.listDocuments(\"648b104d7cbdca1d2121\", \"648b105682c84bb999a0\", [\n            appwrite__WEBPACK_IMPORTED_MODULE_4__.Query.equal(\"slug\", slug)\n        ]);\n        promise.then(function(response) {\n            // console.log(response);\n            setBlogPost(response.documents[0]);\n        }, function(error) {\n            console.log(error);\n        });\n    }, []);\n    document.title = blogPost === null || blogPost === void 0 ? void 0 : blogPost.title;\n    document.getElementsByTagName(\"meta\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: blogPost === null || blogPost === void 0 ? void 0 : blogPost.title\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Unbeliveable\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 py-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"mb-4 w-96\",\n                        src: blogPost === null || blogPost === void 0 ? void 0 : blogPost.image,\n                        alt: \"blogpost\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-4\",\n                        children: blogPost === null || blogPost === void 0 ? void 0 : blogPost.title\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg\",\n                        dangerouslySetInnerHTML: {\n                            __html: blogPost === null || blogPost === void 0 ? void 0 : blogPost.content\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\Desktop\\\\appwritecloud_nextjs\\\\app\\\\blog\\\\[slug]\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(BlogPage, \"4OWgb0ch/dwByuCPprizKHepDx8=\");\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Jsb2cvW3NsdWddL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkM7QUFDaEI7QUFDZTtBQUNZO0FBQ1g7QUFFN0MsTUFBTVMsU0FBUyxJQUFJTCw0Q0FBTUE7QUFFekJLLE9BQ0dDLFlBQVksZ0NBQ1pDLFdBQVc7QUFJZCxNQUFNQyxXQUFXO1FBQUMsRUFBRUMsT0FBTSxFQUFFOztJQUMxQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBO0lBRXhDLE1BQU0sRUFBRWMsS0FBSSxFQUFFLEdBQUdIO0lBRWpCVixnREFBU0EsQ0FBQztRQUNSYyxTQUFTQyxRQUFNSixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVJO1FBRXpCLE1BQU1DLFlBQVksSUFBSWQsK0NBQVNBLENBQUNJO1FBRWhDLElBQUlXLFVBQVVELFVBQVVFLGNBQ3RCLHdCQUF1Qix3QkFDdkI7WUFDRWQsMkNBQUtBLENBQUNlLE1BQU0sUUFBUU47U0FDckI7UUFHSEksUUFBUUcsS0FBSyxTQUFVQyxRQUFRO1lBQzdCLHlCQUF5QjtZQUN6QlQsWUFBWVMsU0FBU0MsU0FBUyxDQUFDLEVBQUU7UUFDbkMsR0FBRyxTQUFVQyxLQUFLO1lBQ2hCQyxRQUFRQyxJQUFJRjtRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBR0xULFNBQVNDLFFBQU1KLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUk7SUFDekJELFNBQVNZLHFCQUFxQjtJQUU5QixxQkFDRTs7MEJBQ0UsOERBQUM1QixrREFBSUE7O2tDQUNILDhEQUFDaUI7a0NBQU9KLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUk7Ozs7OztrQ0FDbEIsOERBQUNZO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDaEMsOERBQU1BOzs7OzswQkFDUCw4REFBQ2lDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7d0JBQVlFLEtBQUt0QixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVV1Qjt3QkFBT0MsS0FBSTs7Ozs7O2tDQUNyRCw4REFBQ0M7d0JBQUdMLFdBQVU7a0NBQTJCcEIscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVSTs7Ozs7O2tDQUNuRCw4REFBQ3NCO3dCQUFFTixXQUFVO3dCQUFVTyx5QkFBeUI7NEJBQUNDLFFBQU81QixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVrQjt3QkFBTzs7Ozs7Ozs7Ozs7OzBCQUUzRSw4REFBQ3hCLDhEQUFNQTs7Ozs7OztBQUdiO0dBNUNNSTtLQUFBQTtBQStDTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmxvZy9bc2x1Z10vcGFnZS5qcz9hYmNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDbGllbnQsIERhdGFiYXNlcywgSUQsIFF1ZXJ5IH0gZnJvbSAnYXBwd3JpdGUnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpO1xyXG5cclxuY2xpZW50XHJcbiAgLnNldEVuZHBvaW50KCdodHRwczovL2Nsb3VkLmFwcHdyaXRlLmlvL3YxJylcclxuICAuc2V0UHJvamVjdCgnNjQ4YjBlOTk2MDhlMTU4YjI4YWMnKTtcclxuXHJcblxyXG5cclxuY29uc3QgQmxvZ1BhZ2UgPSAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtibG9nUG9zdCwgc2V0QmxvZ1Bvc3RdID0gdXNlU3RhdGUoKVxyXG5cclxuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlPWJsb2dQb3N0Py50aXRsZTtcclxuICAgIFxyXG4gICAgY29uc3QgZGF0YWJhc2VzID0gbmV3IERhdGFiYXNlcyhjbGllbnQpO1xyXG5cclxuICAgIGxldCBwcm9taXNlID0gZGF0YWJhc2VzLmxpc3REb2N1bWVudHMoXHJcbiAgICAgIFwiNjQ4YjEwNGQ3Y2JkY2ExZDIxMjFcIixcIjY0OGIxMDU2ODJjODRiYjk5OWEwXCIsXHJcbiAgICAgIFtcclxuICAgICAgICBRdWVyeS5lcXVhbCgnc2x1ZycsIHNsdWcpXHJcbiAgICAgIF1cclxuICAgICk7XHJcblxyXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIHNldEJsb2dQb3N0KHJlc3BvbnNlLmRvY3VtZW50c1swXSk7XHJcbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pXHJcblxyXG4gIFxyXG4gIGRvY3VtZW50LnRpdGxlPWJsb2dQb3N0Py50aXRsZTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e2Jsb2dQb3N0Py50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJVbmJlbGl2ZWFibGVcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1iLTQgdy05NlwiIHNyYz17YmxvZ1Bvc3Q/LmltYWdlfSBhbHQ9XCJibG9ncG9zdFwiIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+e2Jsb2dQb3N0Py50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpibG9nUG9zdD8uY29udGVudH19PjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2VcclxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNsaWVudCIsIkRhdGFiYXNlcyIsIklEIiwiUXVlcnkiLCJGb290ZXIiLCJjbGllbnQiLCJzZXRFbmRwb2ludCIsInNldFByb2plY3QiLCJCbG9nUGFnZSIsInBhcmFtcyIsImJsb2dQb3N0Iiwic2V0QmxvZ1Bvc3QiLCJzbHVnIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImRhdGFiYXNlcyIsInByb21pc2UiLCJsaXN0RG9jdW1lbnRzIiwiZXF1YWwiLCJ0aGVuIiwicmVzcG9uc2UiLCJkb2N1bWVudHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaDEiLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/blog/[slug]/page.js\n"));

/***/ })

});