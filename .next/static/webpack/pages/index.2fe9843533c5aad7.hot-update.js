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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n// import MeetupList from \"../components/meetups/MeetupList\";\n// import { MongoClient } from \"mongodb\";\n// const DUMMY_MEETUPS = [\n//   {\n//     id: \"m1\",\n//     title: \"First Meetup\",\n//     image:\n//       \"https://cdn.pixabay.com/photo/2019/05/08/07/45/friends-4187953_1280.png\",\n//     address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n//     description: \"This is the first meet up\",\n//   },\n//   {\n//     id: \"m2\",\n//     title: \"Second Meetup\",\n//     image:\n//       \"https://cdn.pixabay.com/photo/2020/06/29/13/58/video-conference-5352757_1280.png\",\n//     address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n//     description: \"This is the second meet up\",\n//   },\n//   {\n//     id: \"m3\",\n//     title: \"Third Meetup\",\n//     image:\n//       \"https://cdn.pixabay.com/photo/2014/09/18/18/19/playmobil-451203_1280.jpg\",\n//     address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n//     description: \"This is the third meet up\",\n//   },\n//   {\n//     id: \"m4\",\n//     title: \"Fourth Meetup\",\n//     image:\n//       \"https://cdn.pixabay.com/photo/2016/02/07/14/49/meeting-1184892_1280.png\",\n//     address: \"02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461\",\n//     description: \"This is the fourth meet up\",\n//   },\n// ];\n// function HomePage(props) {\n//   return (\n//     <>\n//       <MeetupList meetups={props.meetups} />\n//     </>\n//   );\n// }\n// // export function getServerSideProps(context) {\n// //   const req = context.req;\n// //   const res = context.res;\n// //   return {\n// //     props: {\n// //       meetups: DUMMY_MEETUPS,\n// //     },\n// //   };\n// // }\n// export async function getStaticProps() {\n// const client = await MongoClient.connect(\n//     \"mongodb+srv://Hashwi:Np7CwQ2Vez90wxxX@cyberspacecluster.dr2e3yw.mongodb.net/?retryWrites=true&w=majority\"\n//   );\n//   const db = client.db();\n//   const meetupsCollection = db.collection(\"meetups\");\n//  const meetups = meetupsCollection.find().toArray()\n//  client.close()\n//   return {\n//     props: {\n//       meetups: (await meetups).map(meetup=>({\n//         title: meetup.title,\n//         address: meetup.address,\n//         image:meetup.image,\n//         id: meetup._id.toString()\n//       }))\n//     },\n//     revalidate: 1\n//   };\n// }\n// export default HomePage;\n\n\nvar DUMMY_MEETUPS = [];\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"/Users/hashi/Code/Play-ground-pvt/Nextjs/Meet_Up_NextJs/pages/index.js\",\n            lineNumber: 118,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHlDQUF5QztBQUV6QywwQkFBMEI7QUFDMUIsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQiw2QkFBNkI7QUFDN0IsYUFBYTtBQUNiLG1GQUFtRjtBQUNuRiwwRUFBMEU7QUFDMUUsZ0RBQWdEO0FBQ2hELE9BQU87QUFDUCxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLDhCQUE4QjtBQUM5QixhQUFhO0FBQ2IsNEZBQTRGO0FBQzVGLDBFQUEwRTtBQUMxRSxpREFBaUQ7QUFDakQsT0FBTztBQUNQLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLGFBQWE7QUFDYixvRkFBb0Y7QUFDcEYsMEVBQTBFO0FBQzFFLGdEQUFnRDtBQUNoRCxPQUFPO0FBQ1AsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsYUFBYTtBQUNiLG1GQUFtRjtBQUNuRiwwRUFBMEU7QUFDMUUsaURBQWlEO0FBQ2pELE9BQU87QUFDUCxLQUFLO0FBRUwsNkJBQTZCO0FBQzdCLGFBQWE7QUFDYixTQUFTO0FBQ1QsK0NBQStDO0FBQy9DLFVBQVU7QUFDVixPQUFPO0FBQ1AsSUFBSTtBQUVKLG1EQUFtRDtBQUNuRCxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBRWhDLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsbUNBQW1DO0FBQ25DLFlBQVk7QUFDWixVQUFVO0FBQ1YsT0FBTztBQUVQLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFDNUMsaUhBQWlIO0FBQ2pILE9BQU87QUFDUCw0QkFBNEI7QUFFNUIsd0RBQXdEO0FBRXhELHNEQUFzRDtBQUN0RCxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGVBQWU7QUFDZixnREFBZ0Q7QUFDaEQsK0JBQStCO0FBQy9CLG1DQUFtQztBQUNuQyw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLFlBQVk7QUFDWixTQUFTO0FBQ1Qsb0JBQW9CO0FBQ3BCLE9BQU87QUFDUCxJQUFJO0FBRUosMkJBQTJCO0FBRTNCO0FBQTBEO0FBRzFELElBQU1DLGFBQWEsR0FBRyxFQUVyQjtBQTJCRCxTQUFTQyxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN2QixxQkFDRTtrQkFDRSw0RUFBQ0gsc0VBQVU7WUFBQ0ksT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU87Ozs7O2dCQUFJO3FCQUNyQyxDQUNIO0FBQ0osQ0FBQztBQU5RRixLQUFBQSxRQUFROztBQW1CakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6IFwibTFcIixcbi8vICAgICB0aXRsZTogXCJGaXJzdCBNZWV0dXBcIixcbi8vICAgICBpbWFnZTpcbi8vICAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOS8wNS8wOC8wNy80NS9mcmllbmRzLTQxODc5NTNfMTI4MC5wbmdcIixcbi8vICAgICBhZGRyZXNzOiBcIjAyNDA5IERlcm9uIFBhdGgsIDAyNDA5IERlcm9uIFBhdGgsIFZlcm1vbnQsIDE4ODI1LTM0NjFcIixcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBmaXJzdCBtZWV0IHVwXCIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogXCJtMlwiLFxuLy8gICAgIHRpdGxlOiBcIlNlY29uZCBNZWV0dXBcIixcbi8vICAgICBpbWFnZTpcbi8vICAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMC8wNi8yOS8xMy81OC92aWRlby1jb25mZXJlbmNlLTUzNTI3NTdfMTI4MC5wbmdcIixcbi8vICAgICBhZGRyZXNzOiBcIjAyNDA5IERlcm9uIFBhdGgsIDAyNDA5IERlcm9uIFBhdGgsIFZlcm1vbnQsIDE4ODI1LTM0NjFcIixcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBzZWNvbmQgbWVldCB1cFwiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IFwibTNcIixcbi8vICAgICB0aXRsZTogXCJUaGlyZCBNZWV0dXBcIixcbi8vICAgICBpbWFnZTpcbi8vICAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wOS8xOC8xOC8xOS9wbGF5bW9iaWwtNDUxMjAzXzEyODAuanBnXCIsXG4vLyAgICAgYWRkcmVzczogXCIwMjQwOSBEZXJvbiBQYXRoLCAwMjQwOSBEZXJvbiBQYXRoLCBWZXJtb250LCAxODgyNS0zNDYxXCIsXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgdGhpcmQgbWVldCB1cFwiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IFwibTRcIixcbi8vICAgICB0aXRsZTogXCJGb3VydGggTWVldHVwXCIsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMDIvMDcvMTQvNDkvbWVldGluZy0xMTg0ODkyXzEyODAucG5nXCIsXG4vLyAgICAgYWRkcmVzczogXCIwMjQwOSBEZXJvbiBQYXRoLCAwMjQwOSBEZXJvbiBQYXRoLCBWZXJtb250LCAxODgyNS0zNDYxXCIsXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGUgZm91cnRoIG1lZXQgdXBcIixcbi8vICAgfSxcbi8vIF07XG5cbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG5cbi8vIC8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vIC8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG5cbi8vIC8vICAgcmV0dXJuIHtcbi8vIC8vICAgICBwcm9wczoge1xuLy8gLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcbi8vIC8vICAgICB9LFxuLy8gLy8gICB9O1xuLy8gLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgIFwibW9uZ29kYitzcnY6Ly9IYXNod2k6TnA3Q3dRMlZlejkwd3h4WEBjeWJlcnNwYWNlY2x1c3Rlci5kcjJlM3l3Lm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuLy8gICApO1xuLy8gICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4vLyAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbi8vICBjb25zdCBtZWV0dXBzID0gbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxuLy8gIGNsaWVudC5jbG9zZSgpXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IChhd2FpdCBtZWV0dXBzKS5tYXAobWVldHVwPT4oe1xuLy8gICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxuLy8gICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbi8vICAgICAgICAgaW1hZ2U6bWVldHVwLmltYWdlLFxuLy8gICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpXG4vLyAgICAgICB9KSlcbi8vICAgICB9LFxuLy8gICAgIHJldmFsaWRhdGU6IDFcbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICAvLyAuLi4geW91ciBkdW1teSBtZWV0dXBzIGRhdGEgLi4uXG5dO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lZXR1cHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL0hhc2h3aTpOcDdDd1EyVmV6OTB3eHhYQGN5YmVyc3BhY2VjbHVzdGVyLmRyMmUzeXcubW9uZ29kYi5uZXQvdGVzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInRlc3RcIik7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICAgIHJldHVybiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgfSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtZWV0dXBzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgb3IgaGFuZGxlIHRoZSBlcnJvciBhcyBuZWVkZWRcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuY2xvc2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBmZXRjaE1lZXR1cHMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});