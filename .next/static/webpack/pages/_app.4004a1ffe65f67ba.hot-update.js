"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/ui/fragments/darkModeIcon.js":
/*!********************************************!*\
  !*** ./pages/ui/fragments/darkModeIcon.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToggleIcon: function() { return /* binding */ ToggleIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ToggleIcon(param) {\n    let { onClick, display, boxSize } = param;\n    _s();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.MoonIcon, {}, void 0, false, {\n            fileName: \"E:\\\\my_dir\\\\javascript\\\\nextjs\\\\profilePage\\\\pages\\\\ui\\\\fragments\\\\darkModeIcon.js\",\n            lineNumber: 8,\n            columnNumber: 31\n        }, void 0), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.SunIcon, {}, void 0, false, {\n            fileName: \"E:\\\\my_dir\\\\javascript\\\\nextjs\\\\profilePage\\\\pages\\\\ui\\\\fragments\\\\darkModeIcon.js\",\n            lineNumber: 8,\n            columnNumber: 45\n        }, void 0)),\n        as: \"Button\",\n        mr: 3,\n        boxSize: boxSize,\n        p: 2,\n        borderRadius: 8,\n        borderWidth: 1,\n        borderStyle: \"solid\",\n        borderColor: \"#707280\",\n        onClick: onClick,\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"darkerBlue\", \"veriLightBrown\"),\n        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"veriLightBrown\", \"darkBrown\"),\n        display: display\n    }, void 0, false, {\n        fileName: \"E:\\\\my_dir\\\\javascript\\\\nextjs\\\\profilePage\\\\pages\\\\ui\\\\fragments\\\\darkModeIcon.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_s(ToggleIcon, \"6SPWDKKJx3x6/piDRqtxmfjVGnY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = ToggleIcon;\nvar _c;\n$RefreshReg$(_c, \"ToggleIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91aS9mcmFnbWVudHMvZGFya01vZGVJY29uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDTztBQUNBO0FBRTlDLFNBQVNJLFdBQVcsS0FBNkI7UUFBN0IsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUE3Qjs7SUFDekIscUJBQ0UsOERBQUNQLHdEQUFVQTtRQUNUUSxNQUFNTCxtRUFBaUJBLGVBQUMsOERBQUNGLHNEQUFRQTs7OztrQ0FBSyw4REFBQ0MscURBQU9BOzs7OztRQUM5Q08sSUFBRztRQUNIQyxJQUFJO1FBQ0pILFNBQVNBO1FBQ1RJLEdBQUc7UUFDSEMsY0FBYztRQUNkQyxhQUFhO1FBQ2JDLGFBQVk7UUFDWkMsYUFBWTtRQUNaVixTQUFTQTtRQUNUVyxJQUFJYixtRUFBaUJBLENBQUMsY0FBYztRQUNwQ2MsT0FBT2QsbUVBQWlCQSxDQUFDLGtCQUFrQjtRQUMzQ0csU0FBU0E7Ozs7OztBQUdmO0dBbEJnQkY7O1FBR0pELCtEQUFpQkE7UUFVbkJBLCtEQUFpQkE7UUFDZEEsK0RBQWlCQTs7O0tBZGRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VpL2ZyYWdtZW50cy9kYXJrTW9kZUljb24uanM/MGI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IE1vb25JY29uLCBTdW5JY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZUljb24oeyBvbkNsaWNrLCBkaXNwbGF5LCBib3hTaXplIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8SWNvbkJ1dHRvblxuICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+LCA8U3VuSWNvbiAvPil9XG4gICAgICBhcz1cIkJ1dHRvblwiXG4gICAgICBtcj17M31cbiAgICAgIGJveFNpemU9e2JveFNpemV9XG4gICAgICBwPXsyfVxuICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgYm9yZGVyV2lkdGg9ezF9XG4gICAgICBib3JkZXJTdHlsZT1cInNvbGlkXCJcbiAgICAgIGJvcmRlckNvbG9yPVwiIzcwNzI4MFwiXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZGFya2VyQmx1ZVwiLCBcInZlcmlMaWdodEJyb3duXCIpfVxuICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwidmVyaUxpZ2h0QnJvd25cIiwgXCJkYXJrQnJvd25cIil9XG4gICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgIC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsIk1vb25JY29uIiwiU3VuSWNvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiVG9nZ2xlSWNvbiIsIm9uQ2xpY2siLCJkaXNwbGF5IiwiYm94U2l6ZSIsImljb24iLCJhcyIsIm1yIiwicCIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsImJnIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ui/fragments/darkModeIcon.js\n"));

/***/ })

});