module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_theme_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme/theme */ \"./src/theme/theme.js\");\n/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/i18n */ \"./src/i18n.js\");\n/* harmony import */ var _src_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_i18n__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_components_CookiesNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/CookiesNotification */ \"./src/components/CookiesNotification.js\");\nvar _jsxFileName = \"/Users/kerimfathallah/Desktop/kode-klub/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, \"KodeKlub\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"minimum-scale=1, initial-scale=1, width=device-width\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"/assets/favicon.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: _src_theme_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }), __jsx(_src_components_CookiesNotification__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }))));\n};\n\nMyApp.getStaticProps = async appContext => _objectSpread({}, await App.getStaticProps(appContext));\n\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_src_i18n__WEBPACK_IMPORTED_MODULE_6__[\"appWithTranslation\"])(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJSZWFjdCIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRoZW1lIiwiZ2V0U3RhdGljUHJvcHMiLCJhcHBDb250ZXh0IiwiQXBwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYXBwV2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDM0NDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsTUFBTTtBQUNyQixVQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbEI7O0FBQ0EsUUFBSUYsU0FBSixFQUFlO0FBQ2RBLGVBQVMsQ0FBQ0csYUFBVixDQUF3QkMsV0FBeEIsQ0FBb0NKLFNBQXBDO0FBQ0E7QUFDRCxHQUxELEVBS0csRUFMSDtBQU9BLFNBQ0MsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsRUFFQztBQUNDLFFBQUksRUFBQyxVQUROO0FBRUMsV0FBTyxFQUFDLHNEQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQU1DO0FBQU0sT0FBRyxFQUFDLGVBQVY7QUFBMEIsUUFBSSxFQUFDLHFCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsQ0FERCxFQVNDLE1BQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVLLHdEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUlDLE1BQUMsU0FBRCxlQUFlUixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRCxDQVRELENBREQ7QUFrQkEsQ0ExQkQ7O0FBNEJBRixLQUFLLENBQUNXLGNBQU4sR0FBdUIsTUFBT0MsVUFBUCxzQkFDbEIsTUFBTUMsR0FBRyxDQUFDRixjQUFKLENBQW1CQyxVQUFuQixDQURZLENBQXZCOztBQUlBWixLQUFLLENBQUNjLFNBQU4sR0FBa0I7QUFDakJiLFdBQVMsRUFBRWMsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEaEI7QUFFakJmLFdBQVMsRUFBRWEsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFGWCxDQUFsQjtBQUtlRSxtSUFBa0IsQ0FBQ25CLEtBQUQsQ0FBakMiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZS90aGVtZSc7XG5cbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uL3NyYy9pMThuJztcbmltcG9ydCBDb29raWVzTm90aWZpY2F0aW9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Nvb2tpZXNOb3RpZmljYXRpb24nO1xuXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcblx0XHRpZiAoanNzU3R5bGVzKSB7XG5cdFx0XHRqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5Lb2RlS2x1YjwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Fzc2V0cy9mYXZpY29uLnBuZ1wiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cblx0XHRcdFx0PENvb2tpZXNOb3RpZmljYXRpb24gLz5cblxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KTtcbn07XG5cbk15QXBwLmdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+ICh7XG5cdC4uLihhd2FpdCBBcHAuZ2V0U3RhdGljUHJvcHMoYXBwQ29udGV4dCkpXG59KTtcblxuTXlBcHAucHJvcFR5cGVzID0ge1xuXHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXHRwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/components/CookiesNotification.js":
/*!***********************************************!*\
  !*** ./src/components/CookiesNotification.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ \"./src/i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/kerimfathallah/Desktop/kode-klub/src/components/CookiesNotification.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  root: {\n    backgroundColor: '#384047',\n    color: 'white',\n    maxWidth: 600,\n    position: 'fixed',\n    bottom: 0,\n    left: 0,\n    margin: theme.spacing(3),\n    padding: theme.spacing(3),\n    outline: 'none',\n    zIndex: 2000,\n    borderRadius: '10px'\n  },\n  action: {\n    backgroundColor: '#11c0c0',\n    color: 'white'\n  }\n}));\n\nfunction CookiesNotification({\n  t\n}) {\n  const classes = useStyles();\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleClose = () => {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('consent', 'true');\n    setOpen(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const consent = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('consent');\n\n    if (!consent) {\n      setOpen(true);\n    }\n  }, []);\n\n  if (!open) {\n    return null;\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Portal\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 4\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\",\n    color: \"inherit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, t('text'), \".\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    mt: 2,\n    display: \"flex\",\n    justifyContent: \"flex-end\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: handleClose,\n    variant: \"contained\",\n    className: classes.action,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 6\n    }\n  }, t('button')))));\n}\n\nCookiesNotification.getInitialProps = async () => ({\n  namespacesRequired: ['cookies']\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__[\"withTranslation\"])('cookies')(CookiesNotification));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db29raWVzTm90aWZpY2F0aW9uLmpzPzU5NzUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW4iLCJzcGFjaW5nIiwicGFkZGluZyIsIm91dGxpbmUiLCJ6SW5kZXgiLCJib3JkZXJSYWRpdXMiLCJhY3Rpb24iLCJDb29raWVzTm90aWZpY2F0aW9uIiwidCIsImNsYXNzZXMiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwiaGFuZGxlQ2xvc2UiLCJDb29raWVzIiwic2V0IiwidXNlRWZmZWN0IiwiY29uc2VudCIsImdldCIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3hDQyxNQUFJLEVBQUU7QUFDTEMsbUJBQWUsRUFBRSxTQURaO0FBRUxDLFNBQUssRUFBRSxPQUZGO0FBR0xDLFlBQVEsRUFBRSxHQUhMO0FBSUxDLFlBQVEsRUFBRSxPQUpMO0FBS0xDLFVBQU0sRUFBRSxDQUxIO0FBTUxDLFFBQUksRUFBRSxDQU5EO0FBT0xDLFVBQU0sRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQVBIO0FBUUxDLFdBQU8sRUFBRVYsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQVJKO0FBU0xFLFdBQU8sRUFBRSxNQVRKO0FBVUxDLFVBQU0sRUFBRSxJQVZIO0FBV0xDLGdCQUFZLEVBQUU7QUFYVCxHQURrQztBQWN4Q0MsUUFBTSxFQUFFO0FBQ1BaLG1CQUFlLEVBQUUsU0FEVjtBQUVQQyxTQUFLLEVBQUU7QUFGQTtBQWRnQyxDQUFaLENBQUQsQ0FBNUI7O0FBb0JBLFNBQVNZLG1CQUFULENBQTZCO0FBQUVDO0FBQUYsQ0FBN0IsRUFBb0M7QUFDbkMsUUFBTUMsT0FBTyxHQUFHbkIsU0FBUyxFQUF6QjtBQUNBLFFBQU07QUFBQSxPQUFDb0IsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsS0FBRCxDQUFoQzs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN6QkMsb0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIsTUFBdkI7QUFDQUosV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBLEdBSEQ7O0FBS0FLLHlEQUFTLENBQUMsTUFBTTtBQUNmLFVBQU1DLE9BQU8sR0FBR0gsZ0RBQU8sQ0FBQ0ksR0FBUixDQUFZLFNBQVosQ0FBaEI7O0FBRUEsUUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDYk4sYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFJLENBQUNELElBQUwsRUFBVztBQUNWLFdBQU8sSUFBUDtBQUNBOztBQUVELFNBQ0MsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUVELE9BQU8sQ0FBQ2hCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VlLENBQUMsQ0FBQyxNQUFELENBREgsTUFERCxFQWFDLE1BQUMscURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLFdBQU8sRUFBQyxNQUFwQjtBQUEyQixrQkFBYyxFQUFDLFVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHdEQUFEO0FBQ0MsV0FBTyxFQUFFSyxXQURWO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ0gsTUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFRSxDQUFDLENBQUMsUUFBRCxDQUpILENBREQsQ0FiRCxDQURELENBREQ7QUEwQkE7O0FBRURELG1CQUFtQixDQUFDWSxlQUFwQixHQUFzQyxhQUFhO0FBQ2xEQyxvQkFBa0IsRUFBRSxDQUFDLFNBQUQ7QUFEOEIsQ0FBYixDQUF0Qzs7QUFJZUMsNEhBQWUsQ0FBQyxTQUFELENBQWYsQ0FBMkJkLG1CQUEzQixDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ29va2llc05vdGlmaWNhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7XG5cdEJveCxcblx0QnV0dG9uLFxuXHRMaW5rLFxuXHRQb3J0YWwsXG5cdFR5cG9ncmFwaHksXG5cdG1ha2VTdHlsZXNcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG5cdHJvb3Q6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzg0MDQ3Jyxcblx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHRtYXhXaWR0aDogNjAwLFxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdGJvdHRvbTogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygzKSxcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0XHR6SW5kZXg6IDIwMDAsXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCdcblx0fSxcblx0YWN0aW9uOiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzExYzBjMCcsXG5cdFx0Y29sb3I6ICd3aGl0ZSdcblx0fVxufSkpO1xuXG5mdW5jdGlvbiBDb29raWVzTm90aWZpY2F0aW9uKHsgdCB9KSB7XG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuXHRcdENvb2tpZXMuc2V0KCdjb25zZW50JywgJ3RydWUnKTtcblx0XHRzZXRPcGVuKGZhbHNlKTtcblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGNvbnNlbnQgPSBDb29raWVzLmdldCgnY29uc2VudCcpO1xuXG5cdFx0aWYgKCFjb25zZW50KSB7XG5cdFx0XHRzZXRPcGVuKHRydWUpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdGlmICghb3Blbikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8UG9ydGFsPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuXHRcdFx0XHRcdHt0KCd0ZXh0Jyl9XG5cdFx0XHRcdFx0ey8qIDxMaW5rXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9XCJhXCJcblx0XHRcdFx0XHRcdGNvbG9yPVwiaW5oZXJpdFwiXG5cdFx0XHRcdFx0XHR1bmRlcmxpbmU9XCJhbHdheXNcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZGV2aWFzLmlvL3ByaXZhY3ktcG9saWN5XCJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0e3QoJ3ByaXZhY3knKX1cblx0XHRcdFx0XHQ8L0xpbms+ICovfVxuXHRcdFx0XHRcdC5cblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHQ8Qm94IG10PXsyfSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDbG9zZX1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XG5cdFx0XHRcdFx0XHR7dCgnYnV0dG9uJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Qb3J0YWw+XG5cdCk7XG59XG5cbkNvb2tpZXNOb3RpZmljYXRpb24uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcblx0bmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2Nvb2tpZXMnXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29va2llcycpKENvb2tpZXNOb3RpZmljYXRpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CookiesNotification.js\n");

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst {\n  localeSubpaths\n} = __webpack_require__(/*! next/config */ \"next/config\").default().publicRuntimeConfig;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  otherLanguages: ['nl', 'en'],\n  localeSubpaths,\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaTE4bi5qcz85MjI1Il0sIm5hbWVzIjpbIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJsb2NhbGVTdWJwYXRocyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlUGF0aCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFQLENBQXdCQyxPQUE1Qzs7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBcUJGLG1CQUFPLENBQUMsZ0NBQUQsQ0FBUCxDQUF1QkMsT0FBdkIsR0FBaUNFLG1CQUE1RDs7QUFDQSxNQUFNQyxJQUFJLEdBQUdKLG1CQUFPLENBQUMsa0JBQUQsQ0FBcEI7O0FBR0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixJQUFJUCxXQUFKLENBQWdCO0FBQ2hDUSxnQkFBYyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FEZ0I7QUFFaENMLGdCQUZnQztBQUdoQ00sWUFBVSxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYSx5QkFBYjtBQUhvQixDQUFoQixDQUFqQiIsImZpbGUiOiIuL3NyYy9pMThuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0O1xuY29uc3QgeyBsb2NhbGVTdWJwYXRocyB9ID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZztcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuXHRvdGhlckxhbmd1YWdlczogWydubCcsICdlbiddLFxuXHRsb2NhbGVTdWJwYXRocyxcblx0bG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/i18n.js\n");

/***/ }),

/***/ "./src/theme/palette.js":
/*!******************************!*\
  !*** ./src/theme/palette.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n\nconst white = '#FFFFFF';\nconst black = '#000000';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  black,\n  white,\n  alternate: 'rgb(247, 249, 250)',\n  secondary: {\n    main: '#11c0c0'\n  },\n  success: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].green[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].green[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].green[400]\n  },\n  info: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[400]\n  },\n  warning: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].orange[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].orange[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].orange[400]\n  },\n  error: {\n    contrastText: white,\n    dark: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].red[900],\n    main: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].red[600],\n    light: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].red[400]\n  },\n  text: {\n    primary: '#121037',\n    secondary: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blueGrey[600],\n    link: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blue[600]\n  },\n  background: {\n    default: '#F4F6F8',\n    paper: white\n  },\n  icon: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].blueGrey[600],\n  divider: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"colors\"].grey[200]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvcGFsZXR0ZS5qcz84ZjAxIl0sIm5hbWVzIjpbIndoaXRlIiwiYmxhY2siLCJhbHRlcm5hdGUiLCJzZWNvbmRhcnkiLCJtYWluIiwic3VjY2VzcyIsImNvbnRyYXN0VGV4dCIsImRhcmsiLCJjb2xvcnMiLCJncmVlbiIsImxpZ2h0IiwiaW5mbyIsImJsdWUiLCJ3YXJuaW5nIiwib3JhbmdlIiwiZXJyb3IiLCJyZWQiLCJ0ZXh0IiwicHJpbWFyeSIsImJsdWVHcmV5IiwibGluayIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJpY29uIiwiZGl2aWRlciIsImdyZXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsS0FBSyxHQUFHLFNBQWQ7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBZDtBQUVlO0FBQ2JBLE9BRGE7QUFFYkQsT0FGYTtBQUdiRSxXQUFTLEVBQUUsb0JBSEU7QUFJYkMsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRTtBQURHLEdBSkU7QUFPYkMsU0FBTyxFQUFFO0FBQ1BDLGdCQUFZLEVBQUVOLEtBRFA7QUFFUE8sUUFBSSxFQUFFQyx3REFBTSxDQUFDQyxLQUFQLENBQWEsR0FBYixDQUZDO0FBR1BMLFFBQUksRUFBRUksd0RBQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsQ0FIQztBQUlQQyxTQUFLLEVBQUVGLHdEQUFNLENBQUNDLEtBQVAsQ0FBYSxHQUFiO0FBSkEsR0FQSTtBQWFiRSxNQUFJLEVBQUU7QUFDSkwsZ0JBQVksRUFBRU4sS0FEVjtBQUVKTyxRQUFJLEVBQUVDLHdEQUFNLENBQUNJLElBQVAsQ0FBWSxHQUFaLENBRkY7QUFHSlIsUUFBSSxFQUFFSSx3REFBTSxDQUFDSSxJQUFQLENBQVksR0FBWixDQUhGO0FBSUpGLFNBQUssRUFBRUYsd0RBQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7QUFKSCxHQWJPO0FBbUJiQyxTQUFPLEVBQUU7QUFDUFAsZ0JBQVksRUFBRU4sS0FEUDtBQUVQTyxRQUFJLEVBQUVDLHdEQUFNLENBQUNNLE1BQVAsQ0FBYyxHQUFkLENBRkM7QUFHUFYsUUFBSSxFQUFFSSx3REFBTSxDQUFDTSxNQUFQLENBQWMsR0FBZCxDQUhDO0FBSVBKLFNBQUssRUFBRUYsd0RBQU0sQ0FBQ00sTUFBUCxDQUFjLEdBQWQ7QUFKQSxHQW5CSTtBQXlCYkMsT0FBSyxFQUFFO0FBQ0xULGdCQUFZLEVBQUVOLEtBRFQ7QUFFTE8sUUFBSSxFQUFFQyx3REFBTSxDQUFDUSxHQUFQLENBQVcsR0FBWCxDQUZEO0FBR0xaLFFBQUksRUFBRUksd0RBQU0sQ0FBQ1EsR0FBUCxDQUFXLEdBQVgsQ0FIRDtBQUlMTixTQUFLLEVBQUVGLHdEQUFNLENBQUNRLEdBQVAsQ0FBVyxHQUFYO0FBSkYsR0F6Qk07QUErQmJDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsU0FETDtBQUVKZixhQUFTLEVBQUVLLHdEQUFNLENBQUNXLFFBQVAsQ0FBZ0IsR0FBaEIsQ0FGUDtBQUdKQyxRQUFJLEVBQUVaLHdEQUFNLENBQUNJLElBQVAsQ0FBWSxHQUFaO0FBSEYsR0EvQk87QUFvQ2JTLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsU0FEQztBQUVWQyxTQUFLLEVBQUV2QjtBQUZHLEdBcENDO0FBd0Nid0IsTUFBSSxFQUFFaEIsd0RBQU0sQ0FBQ1csUUFBUCxDQUFnQixHQUFoQixDQXhDTztBQXlDYk0sU0FBTyxFQUFFakIsd0RBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxHQUFaO0FBekNJLENBQWYiLCJmaWxlIjoiLi9zcmMvdGhlbWUvcGFsZXR0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuY29uc3Qgd2hpdGUgPSAnI0ZGRkZGRic7XG5jb25zdCBibGFjayA9ICcjMDAwMDAwJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBibGFjayxcbiAgd2hpdGUsXG4gIGFsdGVybmF0ZTogJ3JnYigyNDcsIDI0OSwgMjUwKScsXG4gIHNlY29uZGFyeToge1xuICAgIG1haW46ICcjMTFjMGMwJyxcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGNvbnRyYXN0VGV4dDogd2hpdGUsXG4gICAgZGFyazogY29sb3JzLmdyZWVuWzkwMF0sXG4gICAgbWFpbjogY29sb3JzLmdyZWVuWzYwMF0sXG4gICAgbGlnaHQ6IGNvbG9ycy5ncmVlbls0MDBdLFxuICB9LFxuICBpbmZvOiB7XG4gICAgY29udHJhc3RUZXh0OiB3aGl0ZSxcbiAgICBkYXJrOiBjb2xvcnMuYmx1ZVs5MDBdLFxuICAgIG1haW46IGNvbG9ycy5ibHVlWzYwMF0sXG4gICAgbGlnaHQ6IGNvbG9ycy5ibHVlWzQwMF0sXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBjb250cmFzdFRleHQ6IHdoaXRlLFxuICAgIGRhcms6IGNvbG9ycy5vcmFuZ2VbOTAwXSxcbiAgICBtYWluOiBjb2xvcnMub3JhbmdlWzYwMF0sXG4gICAgbGlnaHQ6IGNvbG9ycy5vcmFuZ2VbNDAwXSxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBjb250cmFzdFRleHQ6IHdoaXRlLFxuICAgIGRhcms6IGNvbG9ycy5yZWRbOTAwXSxcbiAgICBtYWluOiBjb2xvcnMucmVkWzYwMF0sXG4gICAgbGlnaHQ6IGNvbG9ycy5yZWRbNDAwXSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6ICcjMTIxMDM3JyxcbiAgICBzZWNvbmRhcnk6IGNvbG9ycy5ibHVlR3JleVs2MDBdLFxuICAgIGxpbms6IGNvbG9ycy5ibHVlWzYwMF0sXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICBkZWZhdWx0OiAnI0Y0RjZGOCcsXG4gICAgcGFwZXI6IHdoaXRlLFxuICB9LFxuICBpY29uOiBjb2xvcnMuYmx1ZUdyZXlbNjAwXSxcbiAgZGl2aWRlcjogY29sb3JzLmdyZXlbMjAwXSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/palette.js\n");

/***/ }),

/***/ "./src/theme/theme.js":
/*!****************************!*\
  !*** ./src/theme/theme.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ \"./src/theme/palette.js\");\n\n\nconst theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"responsiveFontSizes\"])(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: _palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  typography: {\n    fontFamily: 'Lato'\n  },\n  zIndex: {\n    appBar: 1200,\n    drawer: 1100\n  },\n  overrides: {\n    MuiButton: {\n      containedSecondary: {\n        color: 'white'\n      }\n    }\n  }\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvdGhlbWUuanM/NWE1NSJdLCJuYW1lcyI6WyJ0aGVtZSIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInpJbmRleCIsImFwcEJhciIsImRyYXdlciIsIm92ZXJyaWRlcyIsIk11aUJ1dHRvbiIsImNvbnRhaW5lZFNlY29uZGFyeSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLDZFQUFtQixDQUNoQ0Msd0VBQWMsQ0FBQztBQUNkQywyREFEYztBQUVkQyxZQUFVLEVBQUU7QUFDWEMsY0FBVSxFQUFFO0FBREQsR0FGRTtBQUtkQyxRQUFNLEVBQUU7QUFDUEMsVUFBTSxFQUFFLElBREQ7QUFFUEMsVUFBTSxFQUFFO0FBRkQsR0FMTTtBQVNkQyxXQUFTLEVBQUU7QUFDVkMsYUFBUyxFQUFFO0FBQ1ZDLHdCQUFrQixFQUFFO0FBQ25CQyxhQUFLLEVBQUU7QUFEWTtBQURWO0FBREQ7QUFURyxDQUFELENBRGtCLENBQWpDO0FBb0JlWixvRUFBZiIsImZpbGUiOiIuL3NyYy90aGVtZS90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnO1xuXG5jb25zdCB0aGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXMoXG5cdGNyZWF0ZU11aVRoZW1lKHtcblx0XHRwYWxldHRlLFxuXHRcdHR5cG9ncmFwaHk6IHtcblx0XHRcdGZvbnRGYW1pbHk6ICdMYXRvJ1xuXHRcdH0sXG5cdFx0ekluZGV4OiB7XG5cdFx0XHRhcHBCYXI6IDEyMDAsXG5cdFx0XHRkcmF3ZXI6IDExMDBcblx0XHR9LFxuXHRcdG92ZXJyaWRlczoge1xuXHRcdFx0TXVpQnV0dG9uOiB7XG5cdFx0XHRcdGNvbnRhaW5lZFNlY29uZGFyeToge1xuXHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme/theme.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });