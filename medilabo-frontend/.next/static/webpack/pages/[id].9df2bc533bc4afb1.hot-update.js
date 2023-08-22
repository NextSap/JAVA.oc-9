"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id]/index.tsx":
/*!******************************!*\
  !*** ./pages/[id]/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_patient_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/patient.store */ \"./store/patient.store.ts\");\n/* harmony import */ var _components_ui_button_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button.ui */ \"./components/ui/button.ui.tsx\");\n/* harmony import */ var _store_diabetes_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/diabetes.store */ \"./store/diabetes.store.ts\");\n/* harmony import */ var _store_notes_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/notes.store */ \"./store/notes.store.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Index = ()=>{\n    var _patient, _patient1, _patient2, _patient3, _patient4, _patient5, _notes;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const patientStore = (0,_store_patient_store__WEBPACK_IMPORTED_MODULE_3__.usePatientStore)();\n    const diabetesStore = (0,_store_diabetes_store__WEBPACK_IMPORTED_MODULE_5__.useDiabetesStore)();\n    const notesStore = (0,_store_notes_store__WEBPACK_IMPORTED_MODULE_6__.useNotesStore)();\n    const { data: patient } = patientStore.getPatientById(router.query.id);\n    const { data: diabetes } = diabetesStore.getRisk(router.query.id);\n    const { data: notes } = notesStore.getNotebook(router.query.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: ()=>router.push(\"/\"),\n                children: \"Back to the menu\"\n            }, void 0, false, {\n                fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onClick: ()=>router.push(\"/edit/\".concat(router.query.id)),\n                children: \"Modify\"\n            }, void 0, false, {\n                fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Fiche Patient : \",\n                            (_patient = patient) === null || _patient === void 0 ? void 0 : _patient.firstName,\n                            \" \",\n                            (_patient1 = patient) === null || _patient1 === void 0 ? void 0 : _patient1.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Gender : \",\n                            (_patient2 = patient) === null || _patient2 === void 0 ? void 0 : _patient2.gender\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Age : \",\n                            (_patient3 = patient) === null || _patient3 === void 0 ? void 0 : _patient3.birthdate\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Phone : \",\n                            (_patient4 = patient) === null || _patient4 === void 0 ? void 0 : _patient4.phoneNumber\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Address : \",\n                            (_patient5 = patient) === null || _patient5 === void 0 ? void 0 : _patient5.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Diabetes risk : \",\n                            diabetes\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: ()=>router.push(\"/create/\".concat(router.query.id)),\n                        children: \"Add a note\"\n                    }, void 0, false, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Notes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    (_notes = notes) === null || _notes === void 0 ? void 0 : _notes.notes.map((note, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        note.title,\n                                        \" • \",\n                                        note.createdAt\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"whitespace-pre-line\",\n                                    children: note.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/louisdiilio/IdeaProjects/@ Openclassrooms/JAVA.oc-9/medilabo-frontend/pages/[id]/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Index, \"OFKXoTMcZutu+11hwtwFOpNGw8w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store_patient_store__WEBPACK_IMPORTED_MODULE_3__.usePatientStore,\n        _store_diabetes_store__WEBPACK_IMPORTED_MODULE_5__.useDiabetesStore,\n        _store_notes_store__WEBPACK_IMPORTED_MODULE_6__.useNotesStore\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDZ0I7QUFDUDtBQUNTO0FBQ047QUFFbEQsTUFBTU0sUUFBUTtRQXdCdUJDLFVBQXFCQSxXQUM3QkEsV0FDSEEsV0FDRUEsV0FDRUEsV0FNYkM7O0lBaENiLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUN4QixNQUFNUyxlQUFlUixxRUFBZUE7SUFDcEMsTUFBTVMsZ0JBQWdCUCx1RUFBZ0JBO0lBQ3RDLE1BQU1RLGFBQWFQLGlFQUFhQTtJQUVoQyxNQUFNLEVBQ0ZRLE1BQU1OLE9BQU8sRUFDaEIsR0FBR0csYUFBYUksY0FBYyxDQUFDTCxPQUFPTSxLQUFLLENBQUNDLEVBQUU7SUFFL0MsTUFBTSxFQUNGSCxNQUFNSSxRQUFRLEVBQ2pCLEdBQUdOLGNBQWNPLE9BQU8sQ0FBQ1QsT0FBT00sS0FBSyxDQUFDQyxFQUFFO0lBRXpDLE1BQU0sRUFDRkgsTUFBTUwsS0FBSyxFQUNkLEdBQUdJLFdBQVdPLFdBQVcsQ0FBQ1YsT0FBT00sS0FBSyxDQUFDQyxFQUFFO0lBRTFDLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ2xCLGdFQUFNQTtnQkFBQ21CLFNBQVMsSUFBTWIsT0FBT2MsSUFBSSxDQUFDOzBCQUFNOzs7Ozs7MEJBQ3pDLDhEQUFDcEIsZ0VBQU1BO2dCQUFDbUIsU0FBUyxJQUFNYixPQUFPYyxJQUFJLENBQUMsU0FBeUIsT0FBaEJkLE9BQU9NLEtBQUssQ0FBQ0MsRUFBRTswQkFBSzs7Ozs7OzBCQUNoRSw4REFBQ0k7O2tDQUNHLDhEQUFDSTs7NEJBQUc7NkJBQWlCakIsV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTa0IsU0FBUzs0QkFBQzs2QkFBRWxCLFlBQUFBLHFCQUFBQSxnQ0FBQUEsVUFBU21CLFFBQVE7Ozs7Ozs7a0NBQzNELDhEQUFDQzs7NEJBQUU7NkJBQVVwQixZQUFBQSxxQkFBQUEsZ0NBQUFBLFVBQVNxQixNQUFNOzs7Ozs7O2tDQUM1Qiw4REFBQ0Q7OzRCQUFFOzZCQUFPcEIsWUFBQUEscUJBQUFBLGdDQUFBQSxVQUFTc0IsU0FBUzs7Ozs7OztrQ0FDNUIsOERBQUNGOzs0QkFBRTs2QkFBU3BCLFlBQUFBLHFCQUFBQSxnQ0FBQUEsVUFBU3VCLFdBQVc7Ozs7Ozs7a0NBQ2hDLDhEQUFDSDs7NEJBQUU7NkJBQVdwQixZQUFBQSxxQkFBQUEsZ0NBQUFBLFVBQVN3QixPQUFPOzs7Ozs7O2tDQUM5Qiw4REFBQ0o7OzRCQUFFOzRCQUFpQlY7Ozs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDRzs7a0NBQ0csOERBQUNqQixnRUFBTUE7d0JBQUNtQixTQUFTLElBQU1iLE9BQU9jLElBQUksQ0FBQyxXQUEyQixPQUFoQmQsT0FBT00sS0FBSyxDQUFDQyxFQUFFO2tDQUFLOzs7Ozs7a0NBQ2xFLDhEQUFDVztrQ0FBRTs7Ozs7O3FCQUNGbkIsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPQSxLQUFLLENBQUN3QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7d0JBQ3JCLHFCQUNJLDhEQUFDZDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNNOzt3Q0FBR00sS0FBS0UsS0FBSzt3Q0FBQzt3Q0FBSUYsS0FBS0csU0FBUzs7Ozs7Ozs4Q0FDakMsOERBQUNUO29DQUFFTixXQUFVOzhDQUF1QlksS0FBS0ksT0FBTzs7Ozs7OzsyQkFGdkJIOzs7OztvQkFLckM7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0E3Q001Qjs7UUFFYUwsa0RBQVNBO1FBQ0hDLGlFQUFlQTtRQUNkRSxtRUFBZ0JBO1FBQ25CQyw2REFBYUE7OztLQUw5QkM7QUErQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2lkXS9pbmRleC50c3g/NzYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHt1c2VQYXRpZW50U3RvcmV9IGZyb20gXCJAL3N0b3JlL3BhdGllbnQuc3RvcmVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b24udWlcIjtcbmltcG9ydCB7dXNlRGlhYmV0ZXNTdG9yZX0gZnJvbSBcIkAvc3RvcmUvZGlhYmV0ZXMuc3RvcmVcIjtcbmltcG9ydCB7dXNlTm90ZXNTdG9yZX0gZnJvbSBcIkAvc3RvcmUvbm90ZXMuc3RvcmVcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBwYXRpZW50U3RvcmUgPSB1c2VQYXRpZW50U3RvcmUoKTtcbiAgICBjb25zdCBkaWFiZXRlc1N0b3JlID0gdXNlRGlhYmV0ZXNTdG9yZSgpO1xuICAgIGNvbnN0IG5vdGVzU3RvcmUgPSB1c2VOb3Rlc1N0b3JlKCk7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHBhdGllbnRcbiAgICB9ID0gcGF0aWVudFN0b3JlLmdldFBhdGllbnRCeUlkKHJvdXRlci5xdWVyeS5pZCBhcyBzdHJpbmcpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBkYXRhOiBkaWFiZXRlc1xuICAgIH0gPSBkaWFiZXRlc1N0b3JlLmdldFJpc2socm91dGVyLnF1ZXJ5LmlkIGFzIHN0cmluZyk7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IG5vdGVzXG4gICAgfSA9IG5vdGVzU3RvcmUuZ2V0Tm90ZWJvb2socm91dGVyLnF1ZXJ5LmlkIGFzIHN0cmluZyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTVcIj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+QmFjayB0byB0aGUgbWVudTwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2VkaXQvJHtyb3V0ZXIucXVlcnkuaWR9YCl9Pk1vZGlmeTwvQnV0dG9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+RmljaGUgUGF0aWVudCA6IHtwYXRpZW50Py5maXJzdE5hbWV9IHtwYXRpZW50Py5sYXN0TmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwPkdlbmRlciA6IHtwYXRpZW50Py5nZW5kZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkFnZSA6IHtwYXRpZW50Py5iaXJ0aGRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlBob25lIDoge3BhdGllbnQ/LnBob25lTnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BZGRyZXNzIDoge3BhdGllbnQ/LmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkRpYWJldGVzIHJpc2sgOiB7ZGlhYmV0ZXN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9jcmVhdGUvJHtyb3V0ZXIucXVlcnkuaWR9YCl9PkFkZCBhIG5vdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cbiAgICAgICAgICAgICAgICB7bm90ZXM/Lm5vdGVzLm1hcCgobm90ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e25vdGUudGl0bGV9IOKAoiB7bm90ZS5jcmVhdGVkQXR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLWxpbmVcIj57bm90ZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZVBhdGllbnRTdG9yZSIsIkJ1dHRvbiIsInVzZURpYWJldGVzU3RvcmUiLCJ1c2VOb3Rlc1N0b3JlIiwiSW5kZXgiLCJwYXRpZW50Iiwibm90ZXMiLCJyb3V0ZXIiLCJwYXRpZW50U3RvcmUiLCJkaWFiZXRlc1N0b3JlIiwibm90ZXNTdG9yZSIsImRhdGEiLCJnZXRQYXRpZW50QnlJZCIsInF1ZXJ5IiwiaWQiLCJkaWFiZXRlcyIsImdldFJpc2siLCJnZXROb3RlYm9vayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwdXNoIiwiaDEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInAiLCJnZW5kZXIiLCJiaXJ0aGRhdGUiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJtYXAiLCJub3RlIiwiaW5kZXgiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id]/index.tsx\n"));

/***/ })

});