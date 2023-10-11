"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Form = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        dob: \"\",\n        avatar: \"\",\n        country: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleAvatarChange = (e)=>{\n        const file = e.target.files[0];\n        setFormData({\n            ...formData,\n            avatar: file.name\n        });\n    };\n    const newForm = {\n        \"taskName\": \"Satish\",\n        \"desc\": \"dvsvs\",\n        \"remindAt\": \"2023-10-18\"\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://taskbe.cyclic.cloud/tasks\", newForm);\n            const response = await resp.data;\n            console.log(\"res\", response);\n        } catch (error) {}\n    // You can add your form submission logic here\n    //   console.log(\"Form Data:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen flex items-center text-black justify-center font-arone\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg shadow-md w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-4\",\n                    children: \"Create a Person\"\n                }, void 0, false, {\n                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"firstName\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"name\",\n                                    name: \"name\",\n                                    value: formData.name,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"dob\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Date of Birth\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    id: \"dob\",\n                                    name: \"dob\",\n                                    value: formData.dob,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"avatar\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Avatar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"avatar\",\n                                    name: \"avatar\",\n                                    onChange: handleAvatarChange,\n                                    accept: \"image/*\",\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"country\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Country\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: \"country\",\n                                    name: \"country\",\n                                    value: formData.country,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"Select Country\",\n                                            disabled: true,\n                                            children: \"Select Country\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"USA\",\n                                            children: \"USA\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"Canada\",\n                                            children: \"Canada\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"UK\",\n                                            children: \"UK\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"India\",\n                                            children: \"India\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 22\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n            lineNumber: 42,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Form, \"HwE+QF8EEocvEPHpqLeDbDXpqgM=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVmtCLFdBQVU7b0NBQ1ZVLFFBQVE7O3NEQUVSLDhEQUFDRzs0Q0FBTzdCLE9BQU07NENBQWlCOEIsUUFBUTtzREFBQzs7Ozs7O3NEQUd4Qyw4REFBQ0Q7NENBQU83QixPQUFNO3NEQUFNOzs7Ozs7c0RBQ3BCLDhEQUFDNkI7NENBQU83QixPQUFNO3NEQUFTOzs7Ozs7c0RBQ3ZCLDhEQUFDNkI7NENBQU83QixPQUFNO3NEQUFLOzs7Ozs7c0RBQ25CLDhEQUFDNkI7NENBQU83QixPQUFNO3NEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTVCLDhEQUFDZTs0QkFBSUMsV0FBVTtzQ0FDWiw0RUFBQ2U7Z0NBQU9SLE1BQUs7Z0NBQVNQLFdBQVU7MENBQW1GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJJO0dBaElNMUI7S0FBQUE7QUFrSU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD8yOTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIGRvYjogXCJcIixcbiAgICAgIGF2YXRhcjogXCJcIixcbiAgICAgIGNvdW50cnk6IFwiXCIsXG4gICB9KTtcblxuICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgIH07XG5cbiAgIGNvbnN0IGhhbmRsZUF2YXRhckNoYW5nZSA9IChlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBhdmF0YXI6IGZpbGUubmFtZSB9KTtcbiAgIH07XG5cbiAgIGNvbnN0IG5ld0Zvcm0gPXtcbiAgICAgICAgXCJ0YXNrTmFtZVwiOiBcIlNhdGlzaFwiLFxuICAgICAgICBcImRlc2NcIjogXCJkdnN2c1wiLFxuICAgICAgICBcInJlbWluZEF0XCI6IFwiMjAyMy0xMC0xOFwiXG4gICB9XG5cbiAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnkge1xuICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL3Rhc2tiZS5jeWNsaWMuY2xvdWQvdGFza3NcIiwgbmV3Rm9ybSk7XG4gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc3AuZGF0YVxuICAgICAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzcG9uc2UpXG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgIC8vIFlvdSBjYW4gYWRkIHlvdXIgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljIGhlcmVcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiRm9ybSBEYXRhOlwiLCBmb3JtRGF0YSk7XG4gICB9O1xuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ibGFjayBqdXN0aWZ5LWNlbnRlciBmb250LWFyb25lXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LTk2XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+Q3JlYXRlIGEgUGVyc29uPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkb2JcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICBEYXRlIG9mIEJpcnRoXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICBpZD1cImRvYlwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZG9iXCJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kb2J9XG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImF2YXRhclwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgIEF2YXRhclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQXZhdGFyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgQ291bnRyeVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VsZWN0IENvdW50cnlcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBDb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0FcIj5VU0E8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYW5hZGFcIj5DYW5hZGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVS1wiPlVLPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW5kaWFcIj5JbmRpYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBtb3JlIGNvdW50cmllcyBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJGb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsImRvYiIsImF2YXRhciIsImNvdW50cnkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVBdmF0YXJDaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJuZXdGb3JtIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwIiwicG9zdCIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYWNjZXB0Iiwic2VsZWN0Iiwib3B0aW9uIiwiZGlzYWJsZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});