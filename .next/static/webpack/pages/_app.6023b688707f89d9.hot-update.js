"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app", {
  /***/ "./libs/theme.js":
    /*!***********************!*\
  !*** ./libs/theme.js ***!
  \***********************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/index.mjs");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/index.mjs");\n\n\nconst config = {\n    initialColorMode: "system",\n    useSystemColorMode: true\n};\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)("#FFFAF5", "#202023")(props)\n            }\n        })\n};\nconst fonts = {\n    heading: "roboto mono",\n    body: "Roboto"\n};\nconst components = {\n    Heading: {\n        variants: {\n            "section-title": {\n                marginTop: 3,\n                marginBottom: 4,\n                color: "#363844"\n            }\n        }\n    },\n    Text: {\n        baseStyle: (props)=>({\n                fontSize: "lg"\n            })\n    },\n    Link: {\n        baseStyle: (props)=>({\n                fontSize: "lg",\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)("#363844", "white")(props),\n                textUnderlineOffset: 3\n            })\n    }\n};\nconst colors = {\n    darkPink: "#b88c8c",\n    darkBrown: "#9b7960",\n    veriLightBrown: "#FFFAF5",\n    darkBlueBlack: "#363844",\n    lightBrown: "#cbb19b"\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config,\n    styles,\n    fonts,\n    colors,\n    components\n});\n/* harmony default export */ __webpack_exports__["default"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3RoZW1lLmpzIiwibWFwcGluZ3MiOiI7OztBQUswQjtBQUNvQjtBQUU5QyxNQUFNSyxTQUFTO0lBQ2JDLGtCQUFrQjtJQUNsQkMsb0JBQW9CO0FBQ3RCO0FBRUEsTUFBTUMsU0FBUztJQUNiQyxRQUFRLENBQUNDLFFBQVc7WUFDbEJDLE1BQU07Z0JBQ0pDLElBQUlSLDREQUFJQSxDQUFDLFdBQVcsV0FBV007WUFDakM7UUFDRjtBQUNGO0FBRUEsTUFBTUcsUUFBUTtJQUNaQyxTQUFTO0lBQ1RILE1BQU07QUFDUjtBQUVBLE1BQU1JLGFBQWE7SUFDakJDLFNBQVM7UUFDUEMsVUFBVTtZQUNSLGlCQUFpQjtnQkFDZkMsV0FBVztnQkFDWEMsY0FBYztnQkFDZEMsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBQyxNQUFNO1FBQ0pDLFdBQVcsQ0FBQ1osUUFBVztnQkFDckJhLFVBQVU7WUFDWjtJQUNGO0lBRUFDLE1BQU07UUFDSkYsV0FBVyxDQUFDWixRQUFXO2dCQUNyQmEsVUFBVTtnQkFDVkgsT0FBT2hCLDREQUFJQSxDQUFDLFdBQVcsU0FBU007Z0JBQ2hDZSxxQkFBcUI7WUFDdkI7SUFDRjtBQUNGO0FBRUEsTUFBTUMsU0FBUztJQUNiQyxVQUFVO0lBQ1ZDLFdBQVc7SUFDWEMsZ0JBQWdCO0lBQ2hCQyxlQUFlO0lBQ2ZDLFlBQVk7QUFDZDtBQUVBLE1BQU1DLFFBQVE5Qiw2REFBV0EsQ0FBQztJQUN4Qkc7SUFDQUc7SUFDQUs7SUFDQWE7SUFDQVg7QUFDRjtBQUVBLCtEQUFlaUIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWJzL3RoZW1lLmpzPzIyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYmFja2dyb3VuZCxcbiAgYm9yZGVyLFxuICBleHRlbmRUaGVtZSxcbiAgdGV4dERlY29yYXRpb24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiBcInN5c3RlbVwiLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdsb2JhbDogKHByb3BzKSA9PiAoe1xuICAgIGJvZHk6IHtcbiAgICAgIGJnOiBtb2RlKFwiI0ZGRkFGNVwiLCBcIiMyMDIwMjNcIikocHJvcHMpLFxuICAgIH0sXG4gIH0pLFxufTtcblxuY29uc3QgZm9udHMgPSB7XG4gIGhlYWRpbmc6IFwiclxcb2JvdG8gbW9ub1wiLFxuICBib2R5OiBcIlJvYm90b1wiLFxufTtcblxuY29uc3QgY29tcG9uZW50cyA9IHtcbiAgSGVhZGluZzoge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICBcInNlY3Rpb24tdGl0bGVcIjoge1xuICAgICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNCxcbiAgICAgICAgY29sb3I6IFwiIzM2Mzg0NFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIFRleHQ6IHtcbiAgICBiYXNlU3R5bGU6IChwcm9wcykgPT4gKHtcbiAgICAgIGZvbnRTaXplOiBcImxnXCIsXG4gICAgfSksXG4gIH0sXG5cbiAgTGluazoge1xuICAgIGJhc2VTdHlsZTogKHByb3BzKSA9PiAoe1xuICAgICAgZm9udFNpemU6IFwibGdcIixcbiAgICAgIGNvbG9yOiBtb2RlKFwiIzM2Mzg0NFwiLCBcIndoaXRlXCIpKHByb3BzKSxcbiAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDMsXG4gICAgfSksXG4gIH0sXG59O1xuXG5jb25zdCBjb2xvcnMgPSB7XG4gIGRhcmtQaW5rOiBcIiNiODhjOGNcIixcbiAgZGFya0Jyb3duOiBcIiM5Yjc5NjBcIixcbiAgdmVyaUxpZ2h0QnJvd246IFwiI0ZGRkFGNVwiLFxuICBkYXJrQmx1ZUJsYWNrOiBcIiMzNjM4NDRcIixcbiAgbGlnaHRCcm93bjogXCIjY2JiMTliXCIsXG59O1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29uZmlnLFxuICBzdHlsZXMsXG4gIGZvbnRzLFxuICBjb2xvcnMsXG4gIGNvbXBvbmVudHMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZCIsImJvcmRlciIsImV4dGVuZFRoZW1lIiwidGV4dERlY29yYXRpb24iLCJtb2RlIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiZm9udHMiLCJoZWFkaW5nIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiVGV4dCIsImJhc2VTdHlsZSIsImZvbnRTaXplIiwiTGluayIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJjb2xvcnMiLCJkYXJrUGluayIsImRhcmtCcm93biIsInZlcmlMaWdodEJyb3duIiwiZGFya0JsdWVCbGFjayIsImxpZ2h0QnJvd24iLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/theme.js\n',
        ),
      );

      /***/
    },
});
