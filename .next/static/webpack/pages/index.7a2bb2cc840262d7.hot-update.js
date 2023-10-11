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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Form = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        dob: \"\",\n        avatar: \"\",\n        country: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleAvatarChange = (e)=>{\n        const file = e.target.files[0];\n        setFormData({\n            ...formData,\n            avatar: file.name\n        });\n        console.log(\"ff\", file);\n    };\n    const newForm = {\n        \"taskName\": \"Satish\",\n        \"desc\": \"dvsvs\",\n        \"remindAt\": \"2023-10-18\"\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const resp = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://taskbe.cyclic.cloud/tasks\", newForm);\n            const response = await resp.json();\n            console.log(\"Hello\", response);\n        } catch (error) {}\n    // You can add your form submission logic here\n    //   console.log(\"Form Data:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen flex items-center text-black justify-center font-arone\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg shadow-md w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-semibold mb-4\",\n                    children: \"Create a Person\"\n                }, void 0, false, {\n                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"firstName\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"name\",\n                                    name: \"name\",\n                                    value: formData.name,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"dob\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Date of Birth\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    id: \"dob\",\n                                    name: \"dob\",\n                                    value: formData.dob,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"avatar\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Avatar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"avatar\",\n                                    name: \"avatar\",\n                                    onChange: handleAvatarChange,\n                                    accept: \"image/*\",\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"country\",\n                                    className: \"block text-gray-700\",\n                                    children: \"Country\"\n                                }, void 0, false, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    id: \"country\",\n                                    name: \"country\",\n                                    value: formData.country,\n                                    onChange: handleChange,\n                                    className: \"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400\",\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"Select Country\",\n                                            disabled: true,\n                                            children: \"Select Country\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"USA\",\n                                            children: \"USA\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"Canada\",\n                                            children: \"Canada\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"UK\",\n                                            children: \"UK\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"India\",\n                                            children: \"India\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 22\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 102,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n            lineNumber: 43,\n            columnNumber: 10\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/satish/Desktop/seekex_form/components/Form.jsx\",\n        lineNumber: 42,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Form, \"HwE+QF8EEocvEPHpqLeDbDXpqgM=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVNNLE9BQU87b0NBQ3ZCNEIsVUFBVTNCO29DQUNWa0IsV0FBVTtvQ0FDVlUsUUFBUTs7c0RBRVIsOERBQUNHOzRDQUFPN0IsT0FBTTs0Q0FBaUI4QixRQUFRO3NEQUFDOzs7Ozs7c0RBR3hDLDhEQUFDRDs0Q0FBTzdCLE9BQU07c0RBQU07Ozs7OztzREFDcEIsOERBQUM2Qjs0Q0FBTzdCLE9BQU07c0RBQVM7Ozs7OztzREFDdkIsOERBQUM2Qjs0Q0FBTzdCLE9BQU07c0RBQUs7Ozs7OztzREFDbkIsOERBQUM2Qjs0Q0FBTzdCLE9BQU07c0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJNUIsOERBQUNlOzRCQUFJQyxXQUFVO3NDQUNaLDRFQUFDZTtnQ0FBT1IsTUFBSztnQ0FBU1AsV0FBVTswQ0FBbUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckk7R0FqSU0xQjtLQUFBQTtBQW1JTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0uanN4PzI5MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgZG9iOiBcIlwiLFxuICAgICAgYXZhdGFyOiBcIlwiLFxuICAgICAgY291bnRyeTogXCJcIixcbiAgIH0pO1xuXG4gICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgfTtcblxuICAgY29uc3QgaGFuZGxlQXZhdGFyQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGF2YXRhcjogZmlsZS5uYW1lIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJmZlwiLCBmaWxlKVxuICAgfTtcblxuICAgY29uc3QgbmV3Rm9ybSA9e1xuICAgICAgICBcInRhc2tOYW1lXCI6IFwiU2F0aXNoXCIsXG4gICAgICAgIFwiZGVzY1wiOiBcImR2c3ZzXCIsXG4gICAgICAgIFwicmVtaW5kQXRcIjogXCIyMDIzLTEwLTE4XCJcbiAgIH1cblxuICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vdGFza2JlLmN5Y2xpYy5jbG91ZC90YXNrc1wiLCBuZXdGb3JtKTtcbiAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzcC5qc29uKClcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIiwgcmVzcG9uc2UpXG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgIC8vIFlvdSBjYW4gYWRkIHlvdXIgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljIGhlcmVcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiRm9ybSBEYXRhOlwiLCBmb3JtRGF0YSk7XG4gICB9O1xuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ibGFjayBqdXN0aWZ5LWNlbnRlciBmb250LWFyb25lXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LTk2XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+Q3JlYXRlIGEgUGVyc29uPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkb2JcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICBEYXRlIG9mIEJpcnRoXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICBpZD1cImRvYlwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZG9iXCJcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kb2J9XG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImF2YXRhclwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgIEF2YXRhclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQXZhdGFyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3VudHJ5XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgQ291bnRyeVxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VsZWN0IENvdW50cnlcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBDb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0FcIj5VU0E8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYW5hZGFcIj5DYW5hZGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVS1wiPlVLPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW5kaWFcIj5JbmRpYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBtb3JlIGNvdW50cmllcyBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJGb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsImRvYiIsImF2YXRhciIsImNvdW50cnkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVBdmF0YXJDaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwibmV3Rm9ybSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzcCIsInBvc3QiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYWNjZXB0Iiwic2VsZWN0Iiwib3B0aW9uIiwiZGlzYWJsZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.jsx\n"));

/***/ })

});