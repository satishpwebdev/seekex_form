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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Form = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        dob: \"\",\n        avatar: null,\n        country: \"Select Country\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleAvatarChange = (e)=>{\n        const file = e.target.files[0];\n        setFormData({\n            ...formData,\n            avatar: file\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // You can add your form submission logic here\n        console.log(\"Form Data:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen flex items-center text-black justify-center font-arone\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg shadow-md w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-4\",\n                    children: \"Create a Person\"\n                }, void 0, false, {\n                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"firstName\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"name\",\n                                    name: \"name\",\n                                    value: formData.name,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"dob\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Date of Birth\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    id: \"dob\",\n                                    name: \"dob\",\n                                    value: formData.dob,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"avatar\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Avatar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"avatar\",\n                                    name: \"avatar\",\n                                    onChange: handleAvatarChange,\n                                    accept: \"image/*\",\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"country\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Country\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: \"country\",\n                                    name: \"country\",\n                                    value: formData.country,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"Select Country\",\n                                            disabled: true,\n                                            children: \"Select Country\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"USA\",\n                                            children: \"USA\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"Canada\",\n                                            children: \"Canada\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"UK\",\n                                            children: \"UK\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"India\",\n                                            children: \"India\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"lyPBulwALcZ9QcIsI5nsDee6dek=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLDhEQUFDdUI7NENBQU92QixPQUFNO3NEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTFCLDhEQUFDUzs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ2U7Z0NBQ0NSLE1BQUs7Z0NBQ0xQLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQTFITXBCO0tBQUFBO0FBNEhOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS5qc3g/MjkxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIGRvYjogXCJcIixcbiAgICBhdmF0YXI6IG51bGwsXG4gICAgY291bnRyeTogXCJTZWxlY3QgQ291bnRyeVwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXZhdGFyQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgYXZhdGFyOiBmaWxlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFlvdSBjYW4gYWRkIHlvdXIgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljIGhlcmVcbiAgICBjb25zb2xlLmxvZyhcIkZvcm0gRGF0YTpcIiwgZm9ybURhdGEpO1xuICB9O1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ibGFjayBqdXN0aWZ5LWNlbnRlciBmb250LWFyb25lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LTk2XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5DcmVhdGUgYSBQZXJzb248L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDBcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZG9iXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBEYXRlIG9mIEJpcnRoXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgaWQ9XCJkb2JcIlxuICAgICAgICAgICAgICBuYW1lPVwiZG9iXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmRvYn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIEF2YXRhclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgIGlkPVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgbmFtZT1cImF2YXRhclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBdmF0YXJDaGFuZ2V9XG4gICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvdW50cnlcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIENvdW50cnlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGlkPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvdW50cnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDBcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VsZWN0IENvdW50cnlcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICBTZWxlY3QgQ291bnRyeVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTQVwiPlVTQTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2FuYWRhXCI+Q2FuYWRhPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVS1wiPlVLPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbmRpYVwiPkluZGlhPC9vcHRpb24+XG4gICAgICAgICAgICAgIHsvKiBBZGQgbW9yZSBjb3VudHJpZXMgYXMgbmVlZGVkICovfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJkb2IiLCJhdmF0YXIiLCJjb3VudHJ5IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQXZhdGFyQ2hhbmdlIiwiZmlsZSIsImZpbGVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJhY2NlcHQiLCJzZWxlY3QiLCJvcHRpb24iLCJkaXNhYmxlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});