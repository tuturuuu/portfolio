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

/***/ "./pages/ui/fragments/mouseTrack.js":
/*!******************************************!*\
  !*** ./pages/ui/fragments/mouseTrack.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CursorTracking; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction CursorTracking(props) {\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionValue)(200);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionValue)(200);\n    const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(y, [\n        0,\n        400\n    ], [\n        45,\n        -45\n    ]);\n    const rotateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(x, [\n        0,\n        400\n    ], [\n        -45,\n        45\n    ]);\n    function handleMouse(event) {\n        x.set(event.pageX);\n        y.set(event.pageY);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: 500,\n            height: 500,\n            ...props.style,\n            display: \"flex\",\n            placeItems: \"center\",\n            placeContent: \"center\",\n            perspective: 400\n        },\n        onMouseMove: handleMouse,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            style: {\n                width: 300,\n                height: 300,\n                borderRadius: 30,\n                backgroundColor: \"black\",\n                rotateX,\n                rotateY\n            }\n        }, void 0, false, {\n            fileName: \"E:\\\\my_dir\\\\javascript\\\\nextjs\\\\profilePage\\\\pages\\\\ui\\\\fragments\\\\mouseTrack.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\my_dir\\\\javascript\\\\nextjs\\\\profilePage\\\\pages\\\\ui\\\\fragments\\\\mouseTrack.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(CursorTracking, \"lVB72lhScnmufL0r1VHu2nMtA+g=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform\n    ];\n});\n_c = CursorTracking;\nvar _c;\n$RefreshReg$(_c, \"CursorTracking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91aS9mcmFnbWVudHMvbW91c2VUcmFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0U7QUFDckQsU0FBU0csZUFBZUMsS0FBSzs7SUFDeEMsTUFBTUMsSUFBSUwsNkRBQWNBLENBQUM7SUFDekIsTUFBTU0sSUFBSU4sNkRBQWNBLENBQUM7SUFFekIsTUFBTU8sVUFBVU4sMkRBQVlBLENBQUNLLEdBQUc7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUksQ0FBQztLQUFHO0lBQ25ELE1BQU1FLFVBQVVQLDJEQUFZQSxDQUFDSSxHQUFHO1FBQUM7UUFBRztLQUFJLEVBQUU7UUFBQyxDQUFDO1FBQUk7S0FBRztJQUVuRCxTQUFTSSxZQUFZQyxLQUFLO1FBQ3RCTCxFQUFFTSxHQUFHLENBQUNELE1BQU1FLEtBQUs7UUFDakJOLEVBQUVLLEdBQUcsQ0FBQ0QsTUFBTUcsS0FBSztJQUNyQjtJQUVBLHFCQUNJLDhEQUFDQztRQUNHQyxPQUFPO1lBQ0hDLE9BQU87WUFDUEMsUUFBUTtZQUNSLEdBQUdiLE1BQU1XLEtBQUs7WUFDZEcsU0FBUztZQUNUQyxZQUFZO1lBQ1pDLGNBQWM7WUFDZEMsYUFBYTtRQUNqQjtRQUNBQyxhQUFhYjtrQkFFYiw0RUFBQ1AsaURBQU1BLENBQUNZLEdBQUc7WUFDUEMsT0FBTztnQkFDSEMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUk0sY0FBYztnQkFDZEMsaUJBQWlCO2dCQUNqQmpCO2dCQUNBQztZQUNKOzs7Ozs7Ozs7OztBQUloQjtHQXJDd0JMOztRQUNWSCx5REFBY0E7UUFDZEEseURBQWNBO1FBRVJDLHVEQUFZQTtRQUNaQSx1REFBWUE7OztLQUxSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91aS9mcmFnbWVudHMvbW91c2VUcmFjay5qcz8zYTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1vdGlvblZhbHVlLCB1c2VUcmFuc2Zvcm0sIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3Vyc29yVHJhY2tpbmcocHJvcHMpIHtcclxuICAgIGNvbnN0IHggPSB1c2VNb3Rpb25WYWx1ZSgyMDApXHJcbiAgICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMjAwKVxyXG5cclxuICAgIGNvbnN0IHJvdGF0ZVggPSB1c2VUcmFuc2Zvcm0oeSwgWzAsIDQwMF0sIFs0NSwgLTQ1XSlcclxuICAgIGNvbnN0IHJvdGF0ZVkgPSB1c2VUcmFuc2Zvcm0oeCwgWzAsIDQwMF0sIFstNDUsIDQ1XSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZShldmVudCkge1xyXG4gICAgICAgIHguc2V0KGV2ZW50LnBhZ2VYKVxyXG4gICAgICAgIHkuc2V0KGV2ZW50LnBhZ2VZKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgICAgLi4ucHJvcHMuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlWCxcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGVZLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VNb3Rpb25WYWx1ZSIsInVzZVRyYW5zZm9ybSIsIm1vdGlvbiIsIkN1cnNvclRyYWNraW5nIiwicHJvcHMiLCJ4IiwieSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiaGFuZGxlTW91c2UiLCJldmVudCIsInNldCIsInBhZ2VYIiwicGFnZVkiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInBsYWNlSXRlbXMiLCJwbGFjZUNvbnRlbnQiLCJwZXJzcGVjdGl2ZSIsIm9uTW91c2VNb3ZlIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ui/fragments/mouseTrack.js\n"));

/***/ })

});