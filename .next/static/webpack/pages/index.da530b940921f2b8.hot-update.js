"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./pages/ui/fragments/countUp.js":
    /*!***************************************!*\
  !*** ./pages/ui/fragments/countUp.js ***!
  \***************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ CountUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.mjs");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/index.mjs");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MotionHeader = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1);\n_c = MotionHeader;\nfunction CountUp() {\n    _s();\n    const count = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(0);\n    const rounded = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(count, (val)=>Math.round(val * 10) / 10);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.animate)(count, 7.5, {\n            duration: 2\n        });\n        return animation.stop;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionHeader, {\n        color: "normalBlue",\n        fontSize: "6rem",\n        children: rounded\n    }, void 0, false, {\n        fileName: "E:\\\\my_dir\\\\javascript\\\\nextjs\\\\profilePage\\\\pages\\\\ui\\\\fragments\\\\countUp.js",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\n_s(CountUp, "Xwv6a+OUhW4aFeMrSXmDsCTZQqQ=", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c1 = CountUp;\nvar _c, _c1;\n$RefreshReg$(_c, "MotionHeader");\n$RefreshReg$(_c1, "CountUp");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91aS9mcmFnbWVudHMvY291bnRVcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEU7QUFDNUM7QUFDUTtBQUUxQyxNQUFNTSxlQUFlRCx3REFBTUEsQ0FBQ0wsaURBQU1BLENBQUNPLEVBQUU7S0FBL0JEO0FBRVMsU0FBU0U7O0lBQ3RCLE1BQU1DLFFBQVFSLDZEQUFjQSxDQUFDO0lBQzdCLE1BQU1TLFVBQVVSLDJEQUFZQSxDQUFDTyxPQUFPLENBQUNFLE1BQVFDLEtBQUtDLEtBQUssQ0FBQ0YsTUFBTSxNQUFNO0lBRXBFUCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFlBQVlYLHNEQUFPQSxDQUFDTSxPQUFPLEtBQUs7WUFBRU0sVUFBVTtRQUFFO1FBRXBELE9BQU9ELFVBQVVFLElBQUk7SUFDdkIsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNWO1FBQWFXLE9BQU07UUFBYUMsVUFBUztrQkFBUVI7Ozs7OztBQUMzRDtHQVh3QkY7O1FBQ1JQLHlEQUFjQTtRQUNaQyx1REFBWUE7OztNQUZOTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91aS9mcmFnbWVudHMvY291bnRVcC5qcz9lMGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiwgdXNlTW90aW9uVmFsdWUsIHVzZVRyYW5zZm9ybSwgYW5pbWF0ZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNoYWtyYSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IE1vdGlvbkhlYWRlciA9IGNoYWtyYShtb3Rpb24uaDEpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudFVwKCkge1xuICBjb25zdCBjb3VudCA9IHVzZU1vdGlvblZhbHVlKDApO1xuICBjb25zdCByb3VuZGVkID0gdXNlVHJhbnNmb3JtKGNvdW50LCAodmFsKSA9PiBNYXRoLnJvdW5kKHZhbCAqIDEwKSAvIDEwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGUoY291bnQsIDcuNSwgeyBkdXJhdGlvbjogMiB9KTtcblxuICAgIHJldHVybiBhbmltYXRpb24uc3RvcDtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8TW90aW9uSGVhZGVyIGNvbG9yPVwibm9ybWFsQmx1ZVwiIGZvbnRTaXplPVwiNnJlbVwiPntyb3VuZGVkfTwvTW90aW9uSGVhZGVyPjtcbn1cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZVRyYW5zZm9ybSIsImFuaW1hdGUiLCJ1c2VFZmZlY3QiLCJjaGFrcmEiLCJNb3Rpb25IZWFkZXIiLCJoMSIsIkNvdW50VXAiLCJjb3VudCIsInJvdW5kZWQiLCJ2YWwiLCJNYXRoIiwicm91bmQiLCJhbmltYXRpb24iLCJkdXJhdGlvbiIsInN0b3AiLCJjb2xvciIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ui/fragments/countUp.js\n',
        ),
      );

      /***/
    },
});
