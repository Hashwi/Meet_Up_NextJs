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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"First Meetup\",\n        image: \"https://cdn.pixabay.com/photo/2019/05/08/07/45/friends-4187953_1280.png\",\n        address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n        description: \"This is the first meet up\"\n    },\n    {\n        id: \"m2\",\n        title: \"Second Meetup\",\n        image: \"https://cdn.pixabay.com/photo/2020/06/29/13/58/video-conference-5352757_1280.png\",\n        address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n        description: \"This is the second meet up\"\n    },\n    {\n        id: \"m3\",\n        title: \"Third Meetup\",\n        image: \"https://cdn.pixabay.com/photo/2014/09/18/18/19/playmobil-451203_1280.jpg\",\n        address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n        description: \"This is the third meet up\"\n    },\n    {\n        id: \"m4\",\n        title: \"Fourth Meetup\",\n        image: \"https://cdn.pixabay.com/photo/2016/02/07/14/49/meeting-1184892_1280.png\",\n        address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n        description: \"This is the fourth meet up\"\n    }, \n];\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                meetups: DUMMY_MEETUPS\n            }, void 0, false, {\n                fileName: \"/Users/hashi/Code/Play-ground-pvt/Nextjs/Meet_Up_NextJs/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/hashi/Code/Play-ground-pvt/Nextjs/Meet_Up_NextJs/pages/index.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQTBEO0FBQ1Q7QUFHakQsSUFBTUUsYUFBYSxHQUFHO0lBQ3BCO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxjQUFjO1FBQ3JCQyxLQUFLLEVBQ0gseUVBQXlFO1FBQzNFQyxPQUFPLEVBQUUseURBQXlEO1FBQ2xFQyxXQUFXLEVBQUUsMkJBQTJCO0tBQ3pDO0lBQ0Q7UUFDRUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGVBQWU7UUFDdEJDLEtBQUssRUFDSCxrRkFBa0Y7UUFDcEZDLE9BQU8sRUFBRSx5REFBeUQ7UUFDbEVDLFdBQVcsRUFBRSw0QkFBNEI7S0FDMUM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsY0FBYztRQUNyQkMsS0FBSyxFQUNILDBFQUEwRTtRQUM1RUMsT0FBTyxFQUFFLHlEQUF5RDtRQUNsRUMsV0FBVyxFQUFFLDJCQUEyQjtLQUN6QztJQUNEO1FBQ0VKLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxlQUFlO1FBQ3RCQyxLQUFLLEVBQ0gseUVBQXlFO1FBQzNFQyxPQUFPLEVBQUUseURBQXlEO1FBQ2xFQyxXQUFXLEVBQUUsNEJBQTRCO0tBQzFDO0NBQ0Y7QUFFRCxTQUFTQyxRQUFRLEdBQUc7SUFDbEIscUJBQ0U7a0JBQ0UsNEVBQUNQLGlFQUFNO3NCQUNMLDRFQUFDRCxzRUFBVTtnQkFBQ1MsT0FBTyxFQUFFUCxhQUFhOzs7OztvQkFBSTs7Ozs7Z0JBQy9CO3FCQUNSLENBQ0g7QUFDSixDQUFDO0FBUlFNLEtBQUFBLFFBQVE7QUFVakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5cblxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcbiAge1xuICAgIGlkOiBcIm0xXCIsXG4gICAgdGl0bGU6IFwiRmlyc3QgTWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTkvMDUvMDgvMDcvNDUvZnJpZW5kcy00MTg3OTUzXzEyODAucG5nXCIsXG4gICAgYWRkcmVzczogXCIwMjQwOSBEZXJvbiBQYXRoLCAwMjQwOSBEZXJvbiBQYXRoLCBWZXJtb250LCAxODgyNS0zNDYxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgZmlyc3QgbWVldCB1cFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwibTJcIixcbiAgICB0aXRsZTogXCJTZWNvbmQgTWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjAvMDYvMjkvMTMvNTgvdmlkZW8tY29uZmVyZW5jZS01MzUyNzU3XzEyODAucG5nXCIsXG4gICAgYWRkcmVzczogXCIwMjQwOSBEZXJvbiBQYXRoLCAwMjQwOSBEZXJvbiBQYXRoLCBWZXJtb250LCAxODgyNS0zNDYxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgc2Vjb25kIG1lZXQgdXBcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIm0zXCIsXG4gICAgdGl0bGU6IFwiVGhpcmQgTWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTQvMDkvMTgvMTgvMTkvcGxheW1vYmlsLTQ1MTIwM18xMjgwLmpwZ1wiLFxuICAgIGFkZHJlc3M6IFwiMDI0MDkgRGVyb24gUGF0aCwgMDI0MDkgRGVyb24gUGF0aCwgVmVybW9udCwgMTg4MjUtMzQ2MVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHRoaXJkIG1lZXQgdXBcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIm00XCIsXG4gICAgdGl0bGU6IFwiRm91cnRoIE1lZXR1cFwiLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzAyLzA3LzE0LzQ5L21lZXRpbmctMTE4NDg5Ml8xMjgwLnBuZ1wiLFxuICAgIGFkZHJlc3M6IFwiMDI0MDkgRGVyb24gUGF0aCwgMDI0MDkgRGVyb24gUGF0aCwgVmVybW9udCwgMTg4MjUtMzQ2MVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGZvdXJ0aCBtZWV0IHVwXCIsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17RFVNTVlfTUVFVFVQU30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiTGF5b3V0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});