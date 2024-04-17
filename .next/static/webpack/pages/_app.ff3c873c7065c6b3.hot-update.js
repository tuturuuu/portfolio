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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/index.mjs");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/index.mjs");\n/* harmony import */ var _fontsource_roboto_mono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fontsource/roboto-mono */ "./node_modules/@fontsource/roboto-mono/index.css");\n/* harmony import */ var _fontsource_roboto_mono__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_mono__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fontsource_roboto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/roboto */ "./node_modules/@fontsource/roboto/index.css");\n/* harmony import */ var _fontsource_roboto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nconst config = {\n    initialColorMode: "system",\n    useSystemColorMode: true\n};\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.mode)("#E8E1E8", "#796878")(props)\n            }\n        })\n};\nconst fonts = {\n    heading: "Roboto Mono",\n    body: "Roboto Mono"\n};\nconst components = {\n    Heading: {\n        variants: {\n            "section-title": (props)=>({\n                    marginTop: 3,\n                    marginBottom: 4,\n                    color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.mode)("darkBlue", "#c8c8d5")(props)\n                })\n        }\n    },\n    Text: {\n        baseStyle: (props)=>({\n                fontSize: "lg",\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.mode)("#253758", "white")(props)\n            })\n    },\n    Link: {\n        baseStyle: (props)=>({\n                fontSize: "lg",\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__.mode)("#253758", "white")(props),\n                textUnderlineOffset: 3\n            })\n    }\n};\nconst colors = {\n    darkPink: "#b88c8c",\n    darkBrown: "#9b7960",\n    veriLightBrown: "#FFFAF5",\n    darkBlueBlack: "#363844",\n    lightBrown: "#cbb19b",\n    darkBlue: "#5C7DBA",\n    darkerBlue: "#253758",\n    normalBlue: "#8584A1",\n    darkPurple: "#615086"\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.extendTheme)({\n    config,\n    styles,\n    fonts,\n    colors,\n    components\n});\n/* harmony default export */ __webpack_exports__["default"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3RoZW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFMEI7QUFDb0I7QUFDTztBQUNyQjtBQUNMO0FBRTNCLE1BQU1HLFNBQVM7SUFDYkMsa0JBQWtCO0lBQ2xCQyxvQkFBb0I7QUFDdEI7QUFFQSxNQUFNQyxTQUFTO0lBQ2JDLFFBQVEsQ0FBQ0MsUUFBVztZQUNsQkMsTUFBTTtnQkFDSkMsSUFBSVQsNERBQUlBLENBQUMsV0FBVyxXQUFXTztZQUNqQztRQUNGO0FBQ0Y7QUFFQSxNQUFNRyxRQUFRO0lBQ1pDLFNBQVM7SUFDVEgsTUFBTTtBQUVSO0FBRUEsTUFBTUksYUFBYTtJQUNqQkMsU0FBUztRQUNQQyxVQUFVO1lBQ1IsaUJBQWlCLENBQUNQLFFBQVc7b0JBQzNCUSxXQUFXO29CQUNYQyxjQUFjO29CQUNkQyxPQUFPakIsNERBQUlBLENBQUMsWUFBWSxXQUFXTztnQkFDckM7UUFDRjtJQUNGO0lBRUFXLE1BQU07UUFDSkMsV0FBVyxDQUFDWixRQUFXO2dCQUNyQmEsVUFBVTtnQkFDVkgsT0FBT2pCLDREQUFJQSxDQUFDLFdBQVcsU0FBU087WUFDbEM7SUFDRjtJQUVBYyxNQUFNO1FBQ0pGLFdBQVcsQ0FBQ1osUUFBVztnQkFDckJhLFVBQVU7Z0JBQ1ZILE9BQU9qQiw0REFBSUEsQ0FBQyxXQUFXLFNBQVNPO2dCQUNoQ2UscUJBQXFCO1lBQ3ZCO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLFNBQVM7SUFDYkMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLGdCQUFnQjtJQUNoQkMsZUFBZTtJQUNmQyxZQUFZO0lBQ1pDLFVBQVU7SUFDVkMsWUFBWTtJQUNaQyxZQUFZO0lBQ1pDLFlBQVk7QUFDZDtBQUVBLE1BQU1DLFFBQVFsQyw2REFBV0EsQ0FBQztJQUN4Qkc7SUFDQUc7SUFDQUs7SUFDQWE7SUFDQVg7QUFDRjtBQUVBLCtEQUFlcUIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWJzL3RoZW1lLmpzPzIyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZXh0ZW5kVGhlbWUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcbmltcG9ydCB7IHVzZUNvbG9yTW9kZVZhbHVlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90by1tb25vXCJcbmltcG9ydCBcIkBmb250c291cmNlL3JvYm90b1wiXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogXCJzeXN0ZW1cIixcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlLFxufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBnbG9iYWw6IChwcm9wcykgPT4gKHtcbiAgICBib2R5OiB7XG4gICAgICBiZzogbW9kZShcIiNFOEUxRThcIiwgXCIjNzk2ODc4XCIpKHByb3BzKSxcbiAgICB9LFxuICB9KSxcbn07XG5cbmNvbnN0IGZvbnRzID0ge1xuICBoZWFkaW5nOiBcIlJvYm90byBNb25vXCIsXG4gIGJvZHk6IFwiUm9ib3RvIE1vbm9cIixcbiAgXG59O1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBIZWFkaW5nOiB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIFwic2VjdGlvbi10aXRsZVwiOiAocHJvcHMpID0+ICh7XG4gICAgICAgIG1hcmdpblRvcDogMyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA0LFxuICAgICAgICBjb2xvcjogbW9kZShcImRhcmtCbHVlXCIsIFwiI2M4YzhkNVwiKShwcm9wcyksXG4gICAgICB9KSxcbiAgICB9LFxuICB9LFxuXG4gIFRleHQ6IHtcbiAgICBiYXNlU3R5bGU6IChwcm9wcykgPT4gKHtcbiAgICAgIGZvbnRTaXplOiBcImxnXCIsXG4gICAgICBjb2xvcjogbW9kZShcIiMyNTM3NThcIiwgXCJ3aGl0ZVwiKShwcm9wcylcbiAgICB9KSxcbiAgfSxcblxuICBMaW5rOiB7XG4gICAgYmFzZVN0eWxlOiAocHJvcHMpID0+ICh7XG4gICAgICBmb250U2l6ZTogXCJsZ1wiLFxuICAgICAgY29sb3I6IG1vZGUoXCIjMjUzNzU4XCIsIFwid2hpdGVcIikocHJvcHMpLFxuICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogMyxcbiAgICB9KSxcbiAgfSxcbn07XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgZGFya1Bpbms6IFwiI2I4OGM4Y1wiLFxuICBkYXJrQnJvd246IFwiIzliNzk2MFwiLFxuICB2ZXJpTGlnaHRCcm93bjogXCIjRkZGQUY1XCIsXG4gIGRhcmtCbHVlQmxhY2s6IFwiIzM2Mzg0NFwiLFxuICBsaWdodEJyb3duOiBcIiNjYmIxOWJcIixcbiAgZGFya0JsdWU6IFwiIzVDN0RCQVwiLFxuICBkYXJrZXJCbHVlOiBcIiMyNTM3NThcIixcbiAgbm9ybWFsQmx1ZTogXCIjODU4NEExXCIsXG4gIGRhcmtQdXJwbGU6IFwiIzYxNTA4NlwiXG59O1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29uZmlnLFxuICBzdHlsZXMsXG4gIGZvbnRzLFxuICBjb2xvcnMsXG4gIGNvbXBvbmVudHMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJmb250cyIsImhlYWRpbmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJUZXh0IiwiYmFzZVN0eWxlIiwiZm9udFNpemUiLCJMaW5rIiwidGV4dFVuZGVybGluZU9mZnNldCIsImNvbG9ycyIsImRhcmtQaW5rIiwiZGFya0Jyb3duIiwidmVyaUxpZ2h0QnJvd24iLCJkYXJrQmx1ZUJsYWNrIiwibGlnaHRCcm93biIsImRhcmtCbHVlIiwiZGFya2VyQmx1ZSIsIm5vcm1hbEJsdWUiLCJkYXJrUHVycGxlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/theme.js\n',
        ),
      );

      /***/
    },
});
