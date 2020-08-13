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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: ./src/theme/theme.js + 1 modules
var theme = __webpack_require__("WlUB");

// EXTERNAL MODULE: ./src/i18n.js
var i18n = __webpack_require__("kiXb");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./src/components/CookiesNotification.js
var __jsx = external_react_default.a.createElement;




const useStyles = Object(core_["makeStyles"])(theme => ({
  root: {
    backgroundColor: '#384047',
    color: 'white',
    maxWidth: 600,
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    outline: 'none',
    zIndex: 2000,
    borderRadius: '10px'
  },
  action: {
    backgroundColor: '#11c0c0',
    color: 'white'
  }
}));

function CookiesNotification({
  t
}) {
  const classes = useStyles();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);

  const handleClose = () => {
    external_js_cookie_default.a.set('consent', 'true');
    setOpen(false);
  };

  Object(external_react_["useEffect"])(() => {
    const consent = external_js_cookie_default.a.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  if (!open) {
    return null;
  }

  return __jsx(core_["Portal"], null, __jsx("div", {
    className: classes.root
  }, __jsx(core_["Typography"], {
    variant: "body1",
    color: "inherit"
  }, t('text'), ' ', __jsx(core_["Link"], {
    component: "a",
    color: "inherit",
    underline: "always",
    href: "https://devias.io/privacy-policy",
    target: "_blank"
  }, t('privacy')), "."), __jsx(core_["Box"], {
    mt: 2,
    display: "flex",
    justifyContent: "flex-end"
  }, __jsx(core_["Button"], {
    onClick: handleClose,
    variant: "contained",
    className: classes.action
  }, t('button')))));
}

CookiesNotification.getInitialProps = async () => ({
  namespacesRequired: ['cookies']
});

/* harmony default export */ var components_CookiesNotification = (Object(i18n["withTranslation"])('cookies')(CookiesNotification));
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  external_react_default.a.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, null, _app_jsx("title", null, "KodeKlub"), _app_jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width"
  }), _app_jsx("link", {
    rel: "shortcut icon",
    href: "/assets/favicon.png"
  })), _app_jsx(styles_["ThemeProvider"], {
    theme: theme["a" /* default */]
  }, _app_jsx(CssBaseline_default.a, null), _app_jsx(components_CookiesNotification, null), _app_jsx(Component, pageProps)));
};

MyApp.getStaticProps = async appContext => _objectSpread({}, await App.getStaticProps(appContext));

/* harmony default export */ var _app = __webpack_exports__["default"] = (Object(i18n["appWithTranslation"])(MyApp));

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "WlUB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./src/theme/palette.js

const white = '#FFFFFF';
const black = '#000000';
/* harmony default export */ var palette = ({
  black,
  white,
  alternate: 'rgb(247, 249, 250)',
  secondary: {
    main: '#11c0c0'
  },
  success: {
    contrastText: white,
    dark: core_["colors"].green[900],
    main: core_["colors"].green[600],
    light: core_["colors"].green[400]
  },
  info: {
    contrastText: white,
    dark: core_["colors"].blue[900],
    main: core_["colors"].blue[600],
    light: core_["colors"].blue[400]
  },
  warning: {
    contrastText: white,
    dark: core_["colors"].orange[900],
    main: core_["colors"].orange[600],
    light: core_["colors"].orange[400]
  },
  error: {
    contrastText: white,
    dark: core_["colors"].red[900],
    main: core_["colors"].red[600],
    light: core_["colors"].red[400]
  },
  text: {
    primary: '#121037',
    secondary: core_["colors"].blueGrey[600],
    link: core_["colors"].blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: core_["colors"].blueGrey[600],
  divider: core_["colors"].grey[200]
});
// CONCATENATED MODULE: ./src/theme/theme.js


const theme = Object(core_["responsiveFontSizes"])(Object(core_["createMuiTheme"])({
  palette: palette,
  typography: {
    fontFamily: 'Lato'
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: 'white'
      }
    }
  }
}));
/* harmony default export */ var theme_theme = __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kiXb":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

const {
  localeSubpaths
} = __webpack_require__("KNus").default().publicRuntimeConfig;

const path = __webpack_require__("oyvS");

module.exports = new NextI18Next({
  otherLanguages: ['nl', 'en'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales')
});

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });