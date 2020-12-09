module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(22)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/** @module config
 *  @description App config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.05.17, 04:12
 */

var config = {
  app: __webpack_require__(10),
  build: __webpack_require__(11),
  css: __webpack_require__(12),
  userAgent: __webpack_require__(14)
  // constants: require('./constants'),
};

module.exports = config;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@bem-react/classname");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/** @module config.app
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2019.09.10, 14:25
 */

module.exports = { // Common-used app variables...

  defaultPageSize: 20, // Number of entries per page

  useCssModules: false, // To use css-module mappings (see `cssMappings` below)

  // Css-modules mappings in format `{ [originalClassName]: transformedClassName }`.
  // Set it with `WebUiCore.utils.setFactoryOptions(React, { useCssModules: true, cssMappings })`
  cssMappings: null

  // cssModulePrefix: 'WebUiCore', // UNUSED
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/** @module config.build
 *  @description Build management config
 *  @since 2019.09.10, 14:25
 *  @changed 2019.09.10, 14:25
 */

var DEBUG = false;
var DEV_DEBUG = false;

module.exports = { // Common-used build variables...

  DEBUG: DEBUG,
  DEV_DEBUG: DEV_DEBUG,

  THEME: "default",
  buildTag: "v.0.1.5-201209-2308-build-prod-default",
  version: "0.1.5" };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.10.21, 22:52
 */

// Theme...
var THEME = "default";
var theme = __webpack_require__(13);

// Some reusable parameters...
var defaultFontSize = theme.defaultFontSize || 16;
var textColor = theme.textColor || '#444';

var defaultTransitonTime = 250;
var defaultAnimateTimeout = 500;

// module.exports = { // Common-used css variables...
var cssConfig = { // Common-used css variables...

  THEME: THEME,

  primaryColor: theme.primaryColor,
  primaryLightColor: theme.primaryLightColor,
  primaryDarkColor: theme.primaryDarkColor,
  primaryContrastColor: theme.primaryContrastColor,

  secondaryColor: theme.secondaryColor,
  secondaryLightColor: theme.secondaryLightColor,
  secondaryDarkColor: theme.secondaryDarkColor,
  secondaryContrastColor: theme.secondaryContrastColor,

  // Colors...

  // Colors for dialogs styles
  errorColor: theme.errorColor || '#c33',
  warnColor: theme.warnColor || '#f73', // '#f96',
  successColor: theme.successColor || '#593', // '#ac9',
  infoColor: theme.infoColor || '#29a', // '#9bd',
  confirmColor: theme.confirmColor /* || theme.primaryColor || textColor */ || '#891', // '#07f',
  selectColor: theme.selectColor || '#05b',

  specialContrastColor: '#fff', // Generic contrast for accenting colors

  textColor: textColor,
  defaultTextColor: textColor,

  // Neutral colors...

  neutralExtraDarkColor: '#666',
  neutralDarkColor: '#999',
  neutralTintedDarkColor: '#aaa',
  neutralShadedColor: '#bbb',
  neutralColor: '#ccc',
  neutralTintedColor: '#d0d0d0',
  neutralLightColor: '#e0e0e0',
  neutralExtraLightColor: '#f0f0f0',

  // Layout colors...

  bodyBgColor: theme.bodyBgColor || '#fff',
  bodyTextColor: theme.bodyTextColor || '#333',
  layoutBgColor: theme.layoutBgColor || '#f0f0f0',
  layoutLightBgColor: theme.layoutLightBgColor || '#f7f7f7',

  layoutBorderColor: theme.layoutBorderColor || '#ccc',

  // Fonts...

  defaultFont: theme.defaultFont || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

  defaultFontSize: defaultFontSize,
  fontSize: defaultFontSize,
  fontSizeM: defaultFontSize,
  fontSizeSm: defaultFontSize - 2,
  fontSizeXs: defaultFontSize - 4,
  fontSizeLg: defaultFontSize + 2,
  fontSizeXl: defaultFontSize + 4,
  fontSizeXxl: defaultFontSize + 8,
  titleFontSize: defaultFontSize + 8,
  defaultLineHeight: 1.6,
  // defaultFontWeight: 400,
  defaultFontWeight: 'normal',
  // defaultFontWeight: 500,
  // defaultBemFontSize: defaultFontSize,

  // Breakpoints (from bootstrap)
  bk_xs: 0,
  bk_sm_pre: 575.98,
  bk_sm: 576,
  bk_md_pre: 767.98,
  bk_md: 768,
  bk_lg_pre: 991.98,
  bk_lg: 992,
  bk_xl_pre: 1199.98,
  bk_xl: 1200,

  // Median breakpoints (breakpoints between popular screen sizes
  bm_xs: 0,
  bm_sm_pre: 399.98,
  bm_sm: 400,
  bm_md_pre: 699.98,
  bm_md: 700,
  bm_lg_pre: 799.98,
  bm_lg: 800,
  bm_xl_pre: 1099.98,
  bm_xl: 1100,

  // Spacings & paddings...

  innerPadding: 5,
  itemPadding: 10,
  containerPadding: 15,
  blockPadding: 20,

  // Timeouts & delays...

  transitionTime: defaultTransitonTime, // ms

  animateTimeout: defaultAnimateTimeout, // ms
  modalAnimateTimeout: defaultAnimateTimeout // ms

  // Parameters...

  // // Use global flex container & in page components scrolls
  // // NOTE: 2019.06.14, 13:14 -- Not used. Using `html.Clippable` dynamically creating selectors.
  // useGlobalClipping: true,
};


var formItemSpacing = 4;
var formItemHeight = 32; // px
var formItemBorderSize = 1; // px
var formItemInnerHeight = formItemHeight - formItemBorderSize * 2; // px

Object.assign(cssConfig, { // Form properties...

  // Forms...

  formItemSpacing: formItemSpacing, // px
  formItemHeight: formItemHeight, // px
  formItemBorderSize: formItemBorderSize, // px
  formItemInnerHeight: formItemInnerHeight, // px

  formItemBorderRadius: 3, // px
  formItemBorderColor: cssConfig.neutralColor,
  formItemActorColor: cssConfig.neutralDarkColor,
  formItemBgColor: '#fff',
  formItemTextColor: cssConfig.defaultTextColor,
  formItemPlaceholderColor: cssConfig.neutralColor,
  formItemInnerPaddingH: 8,
  formItemDisabledOpacity: .5,

  formPlaceholderColor: '#ccc',

  // tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16 });



module.exports = cssConfig;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/** @module config.themes.default
 *  @desc App theme css parameters
 *  @since 2019.09.06, 11:23
 *  @changed 2019.09.06, 11:24
 */

module.exports = {

  primaryDarkColor: '#06d', // '#c90'
  primaryColor: '#07f', // '#fc0'
  primaryLightColor: '#6af', // '#fe8'
  primaryContrastColor: '#fff',

  secondaryDarkColor: '#233',
  secondaryColor: '#677',
  secondaryLightColor: '#abb',
  secondaryContrastColor: '#fff' };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** @module config.build
 *  @description Build management config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.05.17, 04:12
 *
 * Detecting next browser features (see `detectUserAgent` function):
 *
 *  - ANTGalio
 *  - WebKit
 *  - Opera
 *  - Firefox
 *  - Safari
 *  - IE
 *  - Edge
 *  - Chrome
 *  - Blink
 *
 * NOTE: All config submodules uses only ES5 syntax (no webpack/babel poly/overfills for avoid compatibility issues)
 */

/** Prefix to add for each body agent class.
     * Adding `{cssAgentPrefix}BrowserId` class for each detected browser feature).
     * E.g.: 'ua_Chrome', 'ua_IE' etc...
     */
var cssAgentPrefix = 'ua_';

var hasOwnProperty = Object.prototype.hasOwnProperty;

function detectSafari() {
  var isSafari = false;
  try {
    isSafari = /constructor/i.test(String(global.HTMLElement));
  }
  catch (error) {} // eslint-disable-line no-empty
  if (!isSafari) {
    var notificationObject = global.safari && typeof global.safari !== 'undefined' && global.safari.pushNotification;
    isSafari = !!notificationObject && String(notificationObject) === '[object SafariRemoteNotification]';
  }
  return isSafari;
}

function detectUserAgent() {

  var agentString = String(global.navigator && global.navigator.userAgent || 'none');
  // var agentString = getAgentString()
  var document = global.document;
  var body = document && document.body /*  || {} */;

  var ua = {};

  ua.ANTGalio = agentString.indexOf('ANTGalio') !== -1;
  ua.WebKit = agentString.indexOf('WebKit') !== -1;

  ua.Opera = !!global.opr && !!global.opr.addons || !!global.opera || agentString.indexOf(' OPR/') != -1;

  // Firefox 1.0+
  ua.Firefox = typeof InstallTrigger !== 'undefined';

  // // Safari 3.0+ "[object HTMLElementConstructor]"
  // ua.Safari = /constructor/i.test(global.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]" })(!global.safari || (typeof global.safari !== 'undefined' && global.safari.pushNotification))
  ua.Safari = detectSafari();

  ua.IE = /*@cc_on!@*/!!(document && document.documentMode);

  // Edge 20+
  ua.Edge = !ua.IE && !!global.StyleMedia;

  // Chrome 1 - 71
  ua.Chrome = !!global.chrome && (!!global.chrome.webstore || !!global.chrome.runtime);

  // Blink engine detection
  ua.Blink = (ua.Chrome || ua.Opera) && !!global.CSS;

  var agentData = {
    agentString: agentString,
    agentsList: [] };

  var cssAgentClasses = '';
  for (var key in ua) {// Filter non-false agent keys, construct agentsList...
    if (hasOwnProperty.call(ua, key) && ua[key]) {
      agentData[key] = ua[key];
      agentData.agentsList.push(key);
      cssAgentClasses += (cssAgentClasses ? ' ' : '') + cssAgentPrefix + key;
    }
  }

  if (body) {// Add agent classes to body class
    body.className = (body.className ? body.className + ' ' : '') + cssAgentClasses;
  }

  return agentData;

}

var userAgent = detectUserAgent();

module.exports = userAgent;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(23);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ config_default.a; });
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ utils_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "InlineIcon", function() { return /* reexport */ elements_InlineIcon_InlineIcon; });
__webpack_require__.d(__webpack_exports__, "Popup", function() { return /* reexport */ elements_Popup_Popup; });
__webpack_require__.d(__webpack_exports__, "Menu", function() { return /* reexport */ elements_Menu_Menu; });
__webpack_require__.d(__webpack_exports__, "MenuItem", function() { return /* reexport */ elements_MenuItem_MenuItem; });
__webpack_require__.d(__webpack_exports__, "FormItemDummy", function() { return /* reexport */ forms_FormItemDummy_FormItemDummy; });
__webpack_require__.d(__webpack_exports__, "FormLabel", function() { return /* reexport */ forms_FormLabel_FormLabel; });
__webpack_require__.d(__webpack_exports__, "FormButton", function() { return /* reexport */ forms_FormButton_FormButton; });
__webpack_require__.d(__webpack_exports__, "FormGroup", function() { return /* reexport */ forms_FormGroup_FormGroup; });
__webpack_require__.d(__webpack_exports__, "FormButtonGroup", function() { return /* reexport */ forms_FormButtonGroup_FormButtonGroup; });
__webpack_require__.d(__webpack_exports__, "FormInputGroup", function() { return /* reexport */ forms_FormInputGroup_FormInputGroup; });
__webpack_require__.d(__webpack_exports__, "FormText", function() { return /* reexport */ forms_FormText_FormText; });
__webpack_require__.d(__webpack_exports__, "FormSelect", function() { return /* reexport */ forms_FormSelect_FormSelect; });
__webpack_require__.d(__webpack_exports__, "FormTextInput", function() { return /* reexport */ forms_FormTextInput_FormTextInput; });
__webpack_require__.d(__webpack_exports__, "FormPasswordInput", function() { return /* reexport */ forms_FormPasswordInput_FormPasswordInput; });
__webpack_require__.d(__webpack_exports__, "Hello", function() { return /* reexport */ demo_Hello_Hello; });

// NAMESPACE OBJECT: ./src/utils/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "setConfigOptions", function() { return configure_setConfigOptions; });
__webpack_require__.d(utils_namespaceObject, "cssMapping", function() { return configure_cssMapping; });
__webpack_require__.d(utils_namespaceObject, "cn", function() { return configure_cn; });

// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__(6);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: external "@bem-react/classname"
var classname_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/utils/configure.js
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.08, 21:47
 */




var configMap;

var configure_getConfigMap = function getConfigMap() {
  if (!configMap) {
    configMap = {};
    Object.keys(config_default.a).forEach(function (scopeId) {
      var scopeObj = config_default.a[scopeId];
      // const mapObj = configMap[scopeId] || (configMap[scopeId] = {})
      Object.keys(scopeObj).forEach(function (keyId) {
        if (configMap[keyId]) {
          configMap[keyId].push(scopeId);
          // const error = new Error('Duplicated config key "' + keyId + '" in scope "' + scopeId + '" and "' + configMap[keyId] + '"')
          // console.error(error) // eslint-disable-line no-console
          // debugger // eslint-disable-line no-debugger
          // throw error
        } else
        {
          configMap[keyId] = [scopeId];
        }
      });
    });
  }
  return configMap;
};

var configure_setConfigOptions = function setConfigOptions(options) {
  var map = configure_getConfigMap();
  Object.entries(options).map(function (_ref) {var key = _ref[0],val = _ref[1]; // Set entry
    var scopes = map[key];
    scopes.map(function (scope) {
      var obj = config_default.a[scope];
      if (obj) {
        obj[key] = val;
      }
    });
  });
};

var configure_cssMapping = function cssMapping(classNames) {var _config$app =
  config_default.a.app,useCssModules = _config$app.useCssModules,cssMappings = _config$app.cssMappings;
  if (!useCssModules || !cssMappings || !Object.keys(cssMappings)) {// No css-module transforms
    return classNames;
  }
  var classNamesList = typeof classNames === 'string' ? classNames.split(' ').map(function (s) {return s.trim();}) : classNames;
  if (!Array.isArray(classNamesList)) {
    throw new Error('Class list must be an array!');
  }
  var resultList = classNamesList.map(function (className) {
    var result = cssMappings[className] || className;
    // if (className !== result) {
    //   console.log('WebUiCore:utils:cssMapping', className, '->', result)
    //   debugger
    // }
    return result;
  });
  return resultList.join(' ');
};

// Wrapper for `@bem-react/classname/cn()` function
// See original method call signatures & usage in `https://github.com/bem/bem-react/tree/master/packages/classname`
var configure_cn = function cn() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  var result = classname_["cn"].apply(cn, args);
  if (typeof result === 'string') {// If class name, not fabric
    return configure_cssMapping(result);
  } else
  if (typeof result === 'function') {
    return function cnCssMapping() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      var res = result.apply(null, args);
      if (typeof res === 'string') {
        res = configure_cssMapping(res);
      }
      return res;
    };
  }
  return result;
};
// CONCATENATED MODULE: ./src/utils/utils.js
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.05.27, 22:58
 */


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(4);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(9);

// EXTERNAL MODULE: ./src/elements/InlineIcon/InlineIcon.pcss
var InlineIcon_InlineIcon = __webpack_require__(16);

// CONCATENATED MODULE: ./src/elements/InlineIcon/InlineIcon.jsx
 /** @module InlineIcon
                                                                    *  @class InlineIcon
                                                                    *  @since 2020.10.07, 02:08
                                                                    *  @changed 2020.10.07, 02:08
                                                                    */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'




// import * as regularIcons from '@fortawesome/free-regular-svg-icons'
// TODO: Add optional prefix ('regular', 'solid', 'default') to icon id for choosing icons set.




var cnInlineIcon = configure_cn('InlineIcon');var

InlineIcon_InlineIcon_InlineIcon = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(InlineIcon, _React$Component);function InlineIcon() {return _React$Component.apply(this, arguments) || this;}var _proto = InlineIcon.prototype;_proto.

  getClassName = function getClassName() {var

    id =
    this.props.id;
    var className = cnInlineIcon({
      id: id },
    [this.props.className]);
    return className;
  };_proto.

  render = function render() {var _this$props =








    this.props,id = _this$props.id,tag = _this$props.tag,title = _this$props.title,icon = _this$props.icon,onClick = _this$props.onClick;

    // Create fortawesome icon element if passed icon image (svg icon)
    var iconComponent = icon && typeof icon === 'string' ? free_solid_svg_icons_[icon] : icon;
    var content = iconComponent && iconComponent.iconName ? /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], { className: cnInlineIcon('IconImg'), icon: iconComponent }) : iconComponent;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      title: title,
      onClick: onClick
      // key,
    };

    var tagName = tag || 'span';
    var element = /*#__PURE__*/external_react_default.a.createElement(tagName, renderProps, content);
    return element;
  };return InlineIcon;}(external_react_default.a.Component /** @lends @InlineIcon.prototype */);



/* harmony default export */ var elements_InlineIcon_InlineIcon = (InlineIcon_InlineIcon_InlineIcon);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/elements/Popup/Popup.pcss
var Popup_Popup = __webpack_require__(17);

// CONCATENATED MODULE: ./src/elements/Popup/Popup.jsx
 /** @module Popup
                                                                                                                                                                                                                                                                                *  @class Popup
                                                                                                                                                                                                                                                                                *  @since 2020.10.27, 00:39
                                                                                                                                                                                                                                                                                *  @changed 2020.10.29, 03:14
                                                                                                                                                                                                                                                                                */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'




var cnPopup = configure_cn('Popup');

var delayedClickTimeout = 200;
var globalClickEventName = 'mousedown';var

Popup_Popup_Popup = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(Popup, _React$Component);var _proto = Popup.prototype;



  // Helpers...
  _proto.



















  registerGlobalClickHandler = function registerGlobalClickHandler() {
    window.addEventListener(globalClickEventName, this.globalClickHandler);
  };_proto.

  unregisterGlobalClickHandler = function unregisterGlobalClickHandler() {
    this.clearDelayedClickTimerHandler();
    window.removeEventListener(globalClickEventName, this.globalClickHandler);
  };











  // Lifecycle...

  function Popup(props) {var _this;
    _this = _React$Component.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "delayedClickTimerHandler", null);defineProperty_default()(assertThisInitialized_default()(_this), "delayedGlobalClickHandler", function () {// Close popup
      console.log('Popup:delayedGlobalClickHandler');_this.setState({ show: false });});defineProperty_default()(assertThisInitialized_default()(_this), "clearDelayedClickTimerHandler", function () {console.log('Popup:clearDelayedClickTimerHandler', _this.delayedClickTimerHandler);if (_this.delayedClickTimerHandler) {clearTimeout(_this.delayedClickTimerHandler);_this.delayedClickTimerHandler = null;}});defineProperty_default()(assertThisInitialized_default()(_this), "globalClickHandler", function () {_this.clearDelayedClickTimerHandler();_this.delayedClickTimerHandler = setTimeout(_this.delayedGlobalClickHandler, delayedClickTimeout);console.log('Popup:globalClickHandler (set handler)', _this.delayedClickTimerHandler);});defineProperty_default()(assertThisInitialized_default()(_this), "updateGlobalClickHandlerByState", function (state) {var show = state.show;if (show) {_this.registerGlobalClickHandler();} else {_this.unregisterGlobalClickHandler();}});defineProperty_default()(assertThisInitialized_default()(_this), "onControlClick",






































    function (_ref) {var show = _ref.show;
      _this.clearDelayedClickTimerHandler();
      if (show == null) {// Toggle state if no value passed
        show = !_this.state.show;
      }
      _this.setState({
        show: show,
        wasShown: _this.state.wasShown || show });var

      onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick({ show: show });
      }
    });var showPopup = props.showPopup,registerHideStopper = props.registerHideStopper;_this.state = { // show: false, // Is content element displaying now?
      // wasShown: false, // Memorized state: did content element once displayed?
      show: showPopup, // Is content element displaying now?
      wasShown: showPopup // Memorized state: did content element once displayed?
    };if (typeof registerHideStopper === 'function') {// External hide canceler (FormSelect: on Menu click etc)
      registerHideStopper(_this.clearDelayedClickTimerHandler);}return _this;}_proto.componentDidMount = function componentDidMount() {var show = this.state.show;if (show) {this.registerGlobalClickHandler();}};_proto.componentWillUnmount = function componentWillUnmount() {this.unregisterGlobalClickHandler();};_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var prevShowPopup = prevProps.showPopup;var showPopup = this.props.showPopup;if (prevShowPopup !== showPopup) {this.setState({ show: showPopup, wasShown: this.state.wasShown || showPopup }, this.updateGlobalClickHandlerByState);} else if (prevState.show !== this.state.show) {this.updateGlobalClickHandlerByState(this.state);}} // Handlers...
  ;_proto.getClassName = function getClassName() {var id = this.props.id;var
    show =

    this.state.show;
    var className = cnPopup({
      id: id,
      show: show },
    [this.props.className]);
    return className;
  }

  // Render...
  ;_proto.
  renderPopupControl = function renderPopupControl() {var
    popupControl = this.props.popupControl;var


    show =

    this.state.show;

    var controlProps = popupControl && popupControl.props;

    var content = extends_default()({},
    popupControl, {
      props: extends_default()({},
      controlProps, {
        onClick: /* controlProps.onControlClick || */this.onControlClick,
        checked: show }) });



    return /*#__PURE__*/(
      external_react_default.a.createElement("div", { className: cnPopup('ControlWrapper') },
      content));


  };_proto.

  renderPopupContent = function renderPopupContent() {var
    popupContent = this.props.popupContent;var _this$state =




    this.state,show = _this$state.show,wasShown = _this$state.wasShown;

    if (!show && !wasShown) {// Content hidden and was not initialized
      return null;
    }

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", { className: cnPopup('ContentWrapper', { show: show }) },
      popupContent));


  };_proto.

  render = function render() {var


    id =

    this.props.id;

    var renderProps = {
      id: id,
      className: this.getClassName() };


    var renderPopupControl = this.renderPopupControl();
    var renderPopupContent = this.renderPopupContent();

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      renderPopupControl,
      renderPopupContent));


  };return Popup;}(external_react_default.a.Component /** @lends @Popup.prototype */);



/* harmony default export */ var elements_Popup_Popup = (Popup_Popup_Popup);
// EXTERNAL MODULE: ./src/forms/FormItemHOC/FormItemHOC.pcss
var FormItemHOC = __webpack_require__(18);

// CONCATENATED MODULE: ./src/forms/FormItemHOC/FormItemHOC.jsx
 /** @module FormItemHOC
                                                                                                                                                                                                                                                                                *  @class FormItemHOC
                                                                                                                                                                                                                                                                                *  @since 2019.09.25, 19:18
                                                                                                                                                                                                                                                                                *  @changed 2020.06.04, 22:58
                                                                                                                                                                                                                                                                                */






var cnFormItem = configure_cn('FormItem');

var classNameModifiers = [// Pass props/state params to class modifiers
// Display-related modifiers...
'fullWidth',
'innerFlex', // (???)
'solid', // Item is unwrappable (???)
'framed', // Frame around item (input field, select etc) (???)
// Behavior-related modifiers...
'hoverable', // Allow hover effects
'focusable', // Allow hover effects
'clickable',
// States...
'hovered',
'focused',
'pressed',
'checked',
'disabled',
'fill' // (???)
];

var defaultState = {// Default state
  // hoverable: false,
  // focusable: false,
};

var props2State = [// Pass props to state
'hoverable', // Allow hover effects
'focusable' // Allow hover effects
];

// Helper functions...

var FormItemHOC_deriveState = function deriveState() {for (var _len = arguments.length, sets = new Array(_len), _key = 0; _key < _len; _key++) {sets[_key] = arguments[_key];}
  return props2State.reduce(function (state, id) {
    var val = sets.reduce(function (val, set) {
      return set[id] != null /* && val == null */ ? set[id] : val;
    }, null);
    if (val != null) {var _extends2;
      return extends_default()({}, state, (_extends2 = {}, _extends2[id] = val, _extends2));
    }
    return state;
  }, defaultState);
};
/* // UNUSED: deriveStateFromProps
    * const deriveStateFromProps = (props, defaultState) => {
    *   return props2State.reduce((state, id) =>{
    *     const val = props[id]
    *     if (val != null) {
    *       return { ...state, [id]: val }
    *     }
    *     return state
    *   }, defaultState)
    * }
    */

// Unique id counter
var uniqIdCount = 1;

var FormItemHOC_wrapFormItemHOC = function wrapFormItemHOC(WrappedComponent, params) {var _temp;if (params === void 0) {params = {};}return _temp = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(_temp, _React$Component);var _proto = _temp.prototype;

    // Helper methods...
    _proto.
    getStateOrPropOrParam = function getStateOrPropOrParam(id) {// Get parameter from state or from props
      return this.state[id] != null ? this.state[id] :
      this.props[id] != null ? this.props[id] :
      params[id];
    };_proto.

    createUniqId = function createUniqId() {
      return 'FormItem' + uniqIdCount++;
    };_proto.

    getId = function getId(props) {
      props = props || this.props;
      return props.id || this.id || (this.id = this.createUniqId());
    }

    // Lifecycle methods...
    ;
    function _temp(props) {var _this;
      _this = _React$Component.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseOver",





















































      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        if (hoverable && !disabled) {
          _this.setState({ hovered: true });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseOut",
      function () {
        var disabled = _this.getStateOrPropOrParam('disabled');
        var hoverable = _this.getStateOrPropOrParam('hoverable');
        if (hoverable && !disabled) {
          _this.setState({ hovered: false });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "setDomRef",

      function (domRef) {// Children dom node receiver
        _this.formItemDomRef = domRef;
      });_this.state = FormItemHOC_deriveState(defaultState, params, props); // deriveStateFromProps(props, defaultState)
      _this.id = props.id || params.id; // this.formItemRef = React.createRef()
      return _this;}_temp.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {// TODO: Update event subscriptions if `hoverable` flag changed?
      return FormItemHOC_deriveState(params, props, state); // deriveStateFromProps(props, state)
    };_proto.componentDidMount = function componentDidMount() {// const { formItemRef: { current } = {} } = this
      var formItemDomRef = this.formItemDomRef;var hoverable = this.state.hoverable;if (hoverable && formItemDomRef && formItemDomRef.addEventListener) {this.hoverableInited = true;formItemDomRef.addEventListener('mouseover', this.handleMouseOver);formItemDomRef.addEventListener('mouseout', this.handleMouseOut);}};_proto.componentWillUnmount = function componentWillUnmount() {if (this.hoverableInited) {// const { formItemRef: { current } = {} } = this
        var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.removeEventListener) {formItemDomRef.removeEventListener('mouseover', this.handleMouseOver);formItemDomRef.removeEventListener('mouseout', this.handleMouseOut);}}};_proto.getClassName = function getClassName() {var _this2 = this; // Collect modifier values from state or props
      var mods = classNameModifiers.reduce(function (mods, id) {var val = _this2.getStateOrPropOrParam(id); // (this.state[id] != null) ? this.state[id] : this.props[id]
        if (val != null) {mods[id] = val;}return mods;}, {});return cnFormItem(mods, [this.props.className]);} /* // For `focusable` state (TODO?)
                                                                                                                * handleFocus() {
                                                                                                                *   this.setState({ focused: true })
                                                                                                                * }
                                                                                                                * handleBlur() {
                                                                                                                *   this.setState({ focused: false })
                                                                                                                * }
                                                                                                                */;_proto.render = function render() {// const id = this.getId() // this.props.id || this.id || (this.id = this.createUniqId())
      var _this$state = this.state,hovered = _this$state.hovered,focused = _this$state.focused; // TODO: Generate unique id?
      return /*#__PURE__*/external_react_default.a.createElement(WrappedComponent, extends_default()({}, this.props, { // id={id}
        hovered: hovered, focused: focused, className: this.getClassName(), setDomRef: this.setDomRef // Children dom node receiver
      }));};return _temp;}(external_react_default.a.Component), _temp;};


/** Usage:
                                                       * FormItemHOC(component)
                                                       * FormItemHOC(params)(component)
                                                       */
var FormItemHOC_FormItemHOC = function FormItemHOC(params) {
  if (typeof params === 'string') {// Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') {// Params passed -> metafabric
    return function (component) {return FormItemHOC_wrapFormItemHOC(component, params);};
  } else
  {// Component passed -> simple fabric
    return FormItemHOC_wrapFormItemHOC(params);
  }
};

/* harmony default export */ var forms_FormItemHOC_FormItemHOC = (FormItemHOC_FormItemHOC);
// EXTERNAL MODULE: ./src/elements/MenuItem/MenuItem.pcss
var MenuItem_MenuItem = __webpack_require__(19);

// CONCATENATED MODULE: ./src/elements/MenuItem/MenuItem.jsx
 /** @module MenuItem
                                                                                                                                                                                                                          *  @class MenuItem
                                                                                                                                                                                                                          *  @since 2020.10.27, 03:05
                                                                                                                                                                                                                          *  @changed 2020.10.27, 03:06
                                                                                                                                                                                                                          */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'








var cnMenuItem = configure_cn('MenuItem');var

MenuItem_MenuItem_MenuItem = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(MenuItem, _React$Component);function MenuItem() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",



    function () {var _this$props =
      _this.props,id = _this$props.id,val = _this$props.val,onClick = _this$props.onClick;
      if (typeof onClick === 'function') {
        onClick({ id: id, val: val, component: assertThisInitialized_default()(_this) });
      }
    });return _this;}var _proto = MenuItem.prototype;

  // Helper methods...
  _proto.
  getClassName = function getClassName() {var _this$props2 =








    this.props,id = _this$props2.id,checkable = _this$props2.checkable,withIcon = _this$props2.withIcon,checked = _this$props2.checked,disabled = _this$props2.disabled;
    var className = cnMenuItem({
      id: id,
      checkable: checkable,
      withIcon: withIcon,
      checked: checked,
      disabled: disabled },
    [this.props.className]);
    return className;
  }

  // Render...
  ;_proto.
  renderIconContent = function renderIconContent() {var _this$props3 =





    this.props,withIcon = _this$props3.withIcon,checkable = _this$props3.checkable,checked = _this$props3.checked,icon = _this$props3.icon;
    if (withIcon && icon || checkable && checked) {
      var iconContent = icon || 'faCheck';
      return iconContent && /*#__PURE__*/external_react_default.a.createElement(elements_InlineIcon_InlineIcon, { icon: iconContent, className: cnMenuItem('Icon') });
    }
  };_proto.

  renderTextContent = function renderTextContent() {var _this$props4 =



    this.props,children = _this$props4.children,text = _this$props4.text;
    return /*#__PURE__*/(
      external_react_default.a.createElement("span", { className: cnMenuItem('Text') },
      children || text));


  };_proto.

  render = function render() {var _this$props5 =






    this.props,val = _this$props5.val,htmlId = _this$props5.htmlId,setDomRef = _this$props5.setDomRef;

    var renderProps = {
      // id,
      id: htmlId,
      className: this.getClassName(),
      onClick: this.onClick,
      ref: setDomRef // Init ref for FormItemHOC
    };

    var iconContent = this.renderIconContent();
    var textContent = this.renderTextContent();

    // console.log('MenuItem:render', val)

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      iconContent,
      textContent));


  };return MenuItem;}(external_react_default.a.Component /** @lends @MenuItem.prototype */);



/* harmony default export */ var elements_MenuItem_MenuItem = (forms_FormItemHOC_FormItemHOC({ hoverable: true })(MenuItem_MenuItem_MenuItem));
// EXTERNAL MODULE: ./src/elements/Menu/Menu.pcss
var Menu_Menu = __webpack_require__(20);

// CONCATENATED MODULE: ./src/elements/Menu/Menu.jsx
 /** @module Menu
                                                                                                                                                                                                                                                                                *  @class Menu
                                                                                                                                                                                                                                                                                *  @since 2020.10.27, 02:58
                                                                                                                                                                                                                                                                                *  @changed 2020.10.27, 21:16
                                                                                                                                                                                                                                                                                */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'






var cnMenu = configure_cn('Menu');

// Unique id counter
var Menu_uniqIdCount = 1;var

Menu_Menu_Menu = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(Menu, _React$Component);var _proto = Menu.prototype;

  // Helper fuctions...
  _proto.
  getClassName = function getClassName() {
    // const id = this.getId()
    var _this$props =




    this.props,id = _this$props.id,disabled = _this$props.disabled,mode = _this$props.mode,layout = _this$props.layout;
    var className = cnMenu({
      id: id,
      disabled: disabled,
      mode: mode,
      layout: layout },
    [this.props.className]);
    return className;
  };_proto.

  setChildrenItemsFromProps = function setChildrenItemsFromProps() /* children, checkedValStates */{var _this2 = this;
    // console.log('Menu:setChildrenItemsFromProps', {
    //   children,
    // })
    // debugger
    var children = this.props.children;
    var valChecked = {};
    if (Array.isArray(children)) {
      children = children.map(function (item) {
        var isArray = !!item && Array.isArray(item);
        var isObject = !!item && typeof item === 'object' && !isArray; // Array.isArray(item)
        var isElement = isObject && /*#__PURE__*/external_react_default.a.isValidElement(item);
        var isMenuItem = isElement && item.type === elements_MenuItem_MenuItem;
        var isRawObject = isObject && !isElement;
        // console.log('Menu:setChildrenItemsFromProps:item', {
        //   item,
        //   isElement,
        //   isArray,
        //   isObject,
        //   isMenuItem,
        // })
        // debugger
        if (isRawObject || isMenuItem) {
          var itemProps = isRawObject ? item : item.props;
          // Construct unique key values...
          var val = itemProps.val;
          // const checked = checkedValStates && checkedValStates[val] != null ? checkedValStates[val] : itemProps.checked
          var checkable = itemProps.checkable != null ? itemProps.checkable : _this2.props.checkable;
          var newProps = extends_default()({},
          itemProps, {
            onClick: itemProps.onClick || _this2.onMenuItemClick,
            checkable: checkable
            // checked,
          });
          if (isRawObject) {// Raw object -> create MenuItem
            var key = item && item.key || _this2.getId() + '_Item_' + (itemProps.id || itemProps.val);
            item = /*#__PURE__*/external_react_default.a.createElement(elements_MenuItem_MenuItem, extends_default()({}, newProps, { key: key }));
            // isMenuItem = isElement = true
          } else
          if (isMenuItem) {// MenuItem -> Add onClick handler if handler is not defined
            item = extends_default()({}, item, { props: newProps });
          }
          if (item.props.checked) {
            valChecked[val] = true;
          }
        }
        // TODO: Process arrays (subitems/groups)?
        return item;
      });
    }
    this.setState({
      items: children,
      valChecked: valChecked });

    // return children
  };_proto.

  updateChildrenItems = function updateChildrenItems(checkedValStates) {var _this$props2 =
    this.props,singleChoice = _this$props2.singleChoice,onChange = _this$props2.onChange;var _this$state =
    this.state,valChecked = _this$state.valChecked,items = _this$state.items;
    if (Array.isArray(items)) {
      items = items.map(function (item) {
        var isObject = !!item && typeof item === 'object';
        var isElement = isObject && /*#__PURE__*/external_react_default.a.isValidElement(item);
        var isMenuItem = isElement && item.type === elements_MenuItem_MenuItem;
        if (isMenuItem) {
          var itemProps = item.props;var
          val = itemProps.val,checked = itemProps.checked;
          var setChecked = checkedValStates[val];
          if (setChecked != null) {
            if (setChecked !== checked) {
              item = extends_default()({}, item, { props: extends_default()({}, itemProps, { checked: setChecked }) });
              valChecked[val] = setChecked;
            }
          } else
          if (singleChoice && itemProps.checked) {
            item = extends_default()({}, item, { props: extends_default()({}, itemProps, { checked: false }) });
            valChecked[val] = false;
          }
        }
        return item;
      });
    }
    this.setState({
      items: items,
      valChecked: valChecked });

    if (typeof onChange === 'function') {
      var checkedValues = Object.entries(valChecked).
      map(function (_ref) {var val = _ref[0],checked = _ref[1];return checked && val;}).
      filter(Boolean);
      onChange({ checkedValues: checkedValues });
    }
  };_proto.

  createUniqId = function createUniqId() {
    return 'Menu' + Menu_uniqIdCount++;
  };_proto.

  getId = function getId(props) {
    props = props || this.props;
    return props.id || this.id || (this.id = this.createUniqId());
  }

  // Lifecycle...
  ;
  function Menu(props) {var _this;
    _this = _React$Component.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onMenuItemClick",



















    function (_ref2) {var _this$updateChildrenI;var val = _ref2.val;var _this$props3 =
      _this.props,onClick = _this$props3.onClick,singleChoice = _this$props3.singleChoice;
      if (typeof onClick === 'function') {// Invoke onClick handler
        onClick({ val: val });
      }var
      valChecked = _this.state.valChecked;
      var setChecked = !valChecked[val];
      if (singleChoice === 'mandatory' && !setChecked) {// Don not made changes if single mode and clicked item was checked
        return;
      }
      _this.updateChildrenItems((_this$updateChildrenI = {}, _this$updateChildrenI[val] = setChecked, _this$updateChildrenI)); // Apply items changes
    });_this.state = {};return _this;}_proto.componentDidMount = function componentDidMount() {// const children = this.props.children
    this.setChildrenItemsFromProps();};_proto.componentDidUpdate = function componentDidUpdate(prevProps) {var prevChildren = prevProps.children;var children = this.props.children;if (prevChildren !== children) {// TODO: To update items states?
      this.setChildrenItemsFromProps();}} // Handlers...
  ; // Render...
  _proto.renderContent = function renderContent() {var
    items = this.state.items;
    return items;
  };_proto.

  render = function render() {var


    id =




    this.props.id;

    var renderProps = {
      id: id,
      className: this.getClassName()
      // title,
      // onClick,
      // key,
    };

    var content = this.renderContent();

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      content));


  };return Menu;}(external_react_default.a.Component /** @lends @Menu.prototype */);



/* harmony default export */ var elements_Menu_Menu = (Menu_Menu_Menu);
// CONCATENATED MODULE: ./src/elements/elements.js
/** @module elements
 *  @desc Basic elements
 *  @since 2020.10.07, 02:12
 *  @changed 2020.10.27, 03:03
 */
// EXTERNAL MODULE: ./src/forms/FormItemDummy/FormItemDummy.pcss
var FormItemDummy_FormItemDummy = __webpack_require__(21);

// CONCATENATED MODULE: ./src/forms/FormItemDummy/FormItemDummy.jsx
 /** @module FormItemDummy
                                                                                                                                                                                                                          *  @class FormItemDummy
                                                                                                                                                                                                                          *  @desc Demo form item
                                                                                                                                                                                                                          *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                          *  @changed 2020.07.20, 19:07
                                                                                                                                                                                                                          */


// import connect from 'react-redux/es/connect/connect'








var cnFormItemDummy = configure_cn('FormItemDummy');var

FormItemDummy_FormItemDummy_FormItemDummy = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormItemDummy, _React$Component);

  function FormItemDummy(props) {var _this;
    _this = _React$Component.call(this, props) || this;
    // const {
    //   hoverable,
    //   clickable,
    //   checked,
    // } = props
    defineProperty_default()(assertThisInitialized_default()(_this), "onClick",




































































    function (event) {var _this$props =




      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick,clickable = _this$props.clickable;
      if (clickable && !disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });_this.state = {// // FormItem states...
      // solid: true,
      // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      // framed: true,
    };return _this;}FormItemDummy.getDerivedStateFromProps = function getDerivedStateFromProps(props /* , state */) {// ???
    var hasIcon = props.hasIcon,hasText = props.hasText,onlyIcon = props.onlyIcon,text = props.text,icon = props.icon,children = props.children;return { // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      hasIcon: !!(hasIcon || icon), hasText: !onlyIcon && !!(hasText || text || children) };};var _proto = FormItemDummy.prototype;_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var _this$props2 = this.props,id = _this$props2.id,onlyIcon = _this$props2.onlyIcon,largeIcon = _this$props2.largeIcon,rightIcon = _this$props2.rightIcon,style = _this$props2.style,fullWidth = _this$props2.fullWidth,type = _this$props2.type;var _this$state = this.state,hasIcon = _this$state.hasIcon,hasText = _this$state.hasText;var classList = cnFormItemDummy({ id: id, style: style, fullWidth: fullWidth, // checked,
      // plain,
      hasIcon: hasIcon, hasText: hasText, onlyIcon: onlyIcon, largeIcon: largeIcon, rightIcon: rightIcon, type: type, solid: true }, [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.render = function render() {var _this$props3 =




    this.props,id = _this$props3.id,children = _this$props3.children,text = _this$props3.text,tag = _this$props3.tag,type = _this$props3.type,title = _this$props3.title,icon = _this$props3.icon,setDomRef = _this$props3.setDomRef;var _this$state2 =



    this.state,hasIcon = _this$state2.hasIcon,hasText = _this$state2.hasText;

    // Create fortawesome icon element if passed icon image (svg icon)
    var iconImg = icon && icon.iconName ? /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], { className: cnFormItemDummy('IconImg'), icon: icon }) : icon;
    var iconElem = hasIcon && /*#__PURE__*/
    external_react_default.a.createElement("span", { key: "Icon", className: cnFormItemDummy('Icon') },
    iconImg);



    // Text element
    var textElem = hasText && /*#__PURE__*/
    external_react_default.a.createElement("span", { key: "Text", className: cnFormItemDummy('Text') },
    text || children);



    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    var renderProps = {
      // ...basicRenderProps,
      id: id,
      className: this.getClassName(),
      title: title,
      type: type,
      onClick: this.onClick,
      ref: setDomRef };


    var content = [iconElem, textElem]; // children || text

    var tagName = tag || 'div';
    var element = /*#__PURE__*/external_react_default.a.createElement(tagName, renderProps, content);
    return element;
  };return FormItemDummy;}(external_react_default.a.Component /** @lends @FormItemDummy.prototype */);



/* harmony default export */ var forms_FormItemDummy_FormItemDummy = (forms_FormItemHOC_FormItemHOC(FormItemDummy_FormItemDummy_FormItemDummy));
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/forms/FormLabel/FormLabel.pcss
var FormLabel_FormLabel = __webpack_require__(24);

// CONCATENATED MODULE: ./src/forms/FormLabel/FormLabel.jsx
 /** @module FormLabel
                                                                                                                                                                                                                          *  @class FormLabel
                                                                                                                                                                                                                          *  @since 2020.10.06, 23:45
                                                                                                                                                                                                                          *  @changed 2020.10.06, 23:46
                                                                                                                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'






var cnFormLabel = configure_cn('FormLabel');var

FormLabel_FormLabel_FormLabel = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormLabel, _React$Component);function FormLabel() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",















    function (event) {var _this$props =




      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if ( /* clickable && */!disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });return _this;}var _proto = FormLabel.prototype;_proto.getClassName = function getClassName() {var id = this.props.id;var classList = cnFormLabel({ id: id // clickable,
    }, [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.
  render = function render() {var _this$props2 =









    this.props,id = _this$props2.id,name = _this$props2.name,disabled = _this$props2.disabled,htmlFor = _this$props2.htmlFor,text = _this$props2.text,children = _this$props2.children,title = _this$props2.title;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title };


    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps, /*#__PURE__*/
      external_react_default.a.createElement("label", {
        className: "FormLabel-Control",
        id: id,
        name: name,
        disabled: disabled,
        htmlFor: htmlFor,
        title: title },

      children || text || title)));




  };return FormLabel;}(external_react_default.a.Component /** @lends @FormLabel.prototype */);




FormLabel_FormLabel_FormLabel.propTypes = {
  id: prop_types_default.a.string };

/* harmony default export */ var forms_FormLabel_FormLabel = (forms_FormItemHOC_FormItemHOC({ hoverable: true })(FormLabel_FormLabel_FormLabel));
// EXTERNAL MODULE: ./src/forms/FormButton/FormButton.pcss
var FormButton_FormButton = __webpack_require__(25);

// EXTERNAL MODULE: ./src/forms/FormButton/FormButton-Variations.pcss
var FormButton_Variations = __webpack_require__(26);

// EXTERNAL MODULE: ./src/forms/FormButton/FormButton-Styles.pcss
var FormButton_Styles = __webpack_require__(27);

// CONCATENATED MODULE: ./src/forms/FormButton/FormButton.jsx
 /** @module FormButton
                                                                                                                                                                                                                                                                                *  @class FormButton
                                                                                                                                                                                                                                                                                *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                                                                                *  @changed 2020.10.29, 03:30
                                                                                                                                                                                                                                                                                */
/* eslint-disable react/require-default-props */



// import connect from 'react-redux/es/connect/connect'
// import { cn } from '@bem-react/classname'










var cnFormButton = configure_cn('FormButton');var

FormButton_FormButton_FormButton = /*#__PURE__*/function (_React$PureComponent) {inheritsLoose_default()(FormButton, _React$PureComponent);function FormButton() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",



























































    function (event) {var _this$props =




      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if (!disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });return _this;}var _proto = FormButton.prototype;_proto.hasIcon = function hasIcon() {var _this$props2 = this.props,icon = _this$props2.icon,hasIcon = _this$props2.hasIcon;return !!(hasIcon || icon);};_proto.hasText = function hasText() {var _this$props3 = this.props,hasText = _this$props3.hasText,onlyIcon = _this$props3.onlyIcon,children = _this$props3.children,text = _this$props3.text;return !onlyIcon && !!(hasText || text || children);};_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var _this$props4 = this.props,checked = _this$props4.checked,fullWidth = _this$props4.fullWidth,id = _this$props4.id,largeIcon = _this$props4.largeIcon,rotatedIcon = _this$props4.rotatedIcon,onlyIcon = _this$props4.onlyIcon,rightIcon = _this$props4.rightIcon,style = _this$props4.style,onDark = _this$props4.onDark,plain = _this$props4.plain,type = _this$props4.type,variation = _this$props4.variation;var mods = { // plain,
      checked: checked, fullWidth: fullWidth, id: id, largeIcon: largeIcon, rotatedIcon: rotatedIcon, onlyIcon: onlyIcon, rightIcon: rightIcon, solid: true, style: style, onDark: onDark, plain: plain, type: type, variation: variation };var classList = cnFormButton(extends_default()({}, mods, { hasIcon: this.hasIcon(), hasText: this.hasText() }), [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.renderIcon = function renderIcon() {
    var hasIcon = this.hasIcon();
    if (hasIcon) {var
      icon = this.props.icon;
      if (icon && icon.type === elements_InlineIcon_InlineIcon) {// Already InlineIcon
        // Extend with updated `className` props
        var props = extends_default()({},
        icon.props, {
          className: cnFormButton('Icon', [icon.props.className]) });

        var newIcon = extends_default()({}, icon, { props: props });
        return newIcon;
      }
      return /*#__PURE__*/(
        external_react_default.a.createElement(elements_InlineIcon_InlineIcon, { icon: icon, className: cnFormButton('Icon') }));

    }
  };_proto.

  renderText = function renderText() {
    var hasText = this.hasText(); // !onlyIcon && !!(hasText || text || children
    if (hasText) {var _this$props5 =
      this.props,text = _this$props5.text,children = _this$props5.children;
      return hasText && /*#__PURE__*/
      external_react_default.a.createElement("span", { className: cnFormButton('Text') },
      text || children);


    }
  };_proto.

  render = function render() {var _this$props6 =
















    this.props,id = _this$props6.id,disabled = _this$props6.disabled,tag = _this$props6.tag,type = _this$props6.type,title = _this$props6.title,setDomRef = _this$props6.setDomRef;

    var iconElem = this.renderIcon(); // Icon element
    var textElem = this.renderText(); // Text element

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    var renderProps = {
      // ...basicRenderProps,
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title,
      type: type,
      onClick: this.onClick,
      ref: setDomRef // Init ref for FormItemHOC
    };

    // const content = [ iconElem, textElem ] // children || text
    var content = /*#__PURE__*/
    external_react_default.a.createElement(external_react_default.a.Fragment, null,
    iconElem,
    textElem);



    var tagName = tag || 'div';
    var element = /*#__PURE__*/external_react_default.a.createElement(tagName, renderProps, content);
    return element;
  };return FormButton;}(external_react_default.a.PureComponent /** @lends @FormButton.prototype */);defineProperty_default()(FormButton_FormButton_FormButton, "propTypes",

{
  id: prop_types_default.a.string,

  // hoverable: PropTypes.bool, // FormItem: Allowed hovered events
  // focusable: PropTypes.bool, // FormItem: Allowed focused events

  // TODO: Actualize & check next properties, implement cosmos fixtures...

  // TODO: formId -- id for form element (passed on form submit)
  // name: PropTypes.string, // ???
  disabled: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,

  hasIcon: prop_types_default.a.bool, // Optional
  hasText: prop_types_default.a.bool, // Optional
  text: prop_types_default.a.string, // Text content (may be passed as node children)
  icon: prop_types_default.a.oneOfType([// Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
  prop_types_default.a.string,
  prop_types_default.a.object]),

  onlyIcon: prop_types_default.a.bool, // Only icon
  largeIcon: prop_types_default.a.bool, // Large icon
  rightIcon: prop_types_default.a.bool, // Icon placed at right side
  // TODO: size: PropTypes.string, // Different form item sizes? (eg: md -- default, sm, xs, lg, xl, xxl)

  style: prop_types_default.a.string, // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
  onDark: prop_types_default.a.bool, // On dark background
  fullWidth: prop_types_default.a.bool, // Occupies all horizontal space
  plain: prop_types_default.a.bool, // ??? Plain icon (no border & background -- if no style specified, looks as link)

  checked: prop_types_default.a.bool // FormItem: Checked state
});


/* harmony default export */ var forms_FormButton_FormButton = (forms_FormItemHOC_FormItemHOC({ hoverable: true, framed: true })(FormButton_FormButton_FormButton));
// EXTERNAL MODULE: ./src/forms/FormGroup/FormGroup.pcss
var FormGroup_FormGroup = __webpack_require__(28);

// CONCATENATED MODULE: ./src/forms/FormGroup/FormGroup.jsx
 /** @module FormGroup
                                                                                                                          *  @class FormGroup
                                                                                                                          *  @since 2020.07.20, 19:07
                                                                                                                          *  @changed 2020.07.20, 19:07
                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'






var FormGroup_classNameModifiers = [
// Basic element properties
'id',
// Style-related modifiers...
'align',
'padded',
'background',
'flow'
// 'fullWidth',
];

var cnFormGroup = configure_cn('FormGroup');var

FormGroup_FormGroup_FormGroup = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormGroup, _React$Component);

  function FormGroup(props) {var _this;
    _this = _React$Component.call(this, props) || this;
    _this.state = {};return _this;

  }var _proto = FormGroup.prototype;_proto.

  getClassName = function getClassName() {var _this2 = this;
    var mods = FormGroup_classNameModifiers.reduce(function (mods, id) {
      var val = _this2.state[id] != null ? _this2.state[id] : _this2.props[id];
      if (val != null) {var _extends2;
        return extends_default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {var _this$props =






    this.props,id = _this$props.id,children = _this$props.children,content = _this$props.content;

    // const renderProps = this.getRenderProps()

    return /*#__PURE__*/(
      external_react_default.a.createElement("div", { id: id, className: this.getClassName() },
      content || children));


  };return FormGroup;}(external_react_default.a.Component /** @lends @FormGroup.prototype */);



FormGroup_FormGroup_FormGroup.propTypes = {
  id: prop_types_default.a.string,
  name: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  flow: prop_types_default.a.bool,
  value: prop_types_default.a.any,
  valueType: prop_types_default.a.string,
  onChange: prop_types_default.a.func };

/* harmony default export */ var forms_FormGroup_FormGroup = (forms_FormItemHOC_FormItemHOC(FormGroup_FormGroup_FormGroup));
// EXTERNAL MODULE: ./src/forms/FormButtonGroup/FormButtonGroup.pcss
var FormButtonGroup_FormButtonGroup = __webpack_require__(29);

// CONCATENATED MODULE: ./src/forms/FormButtonGroup/FormButtonGroup.jsx
 /** @module FormButtonGroup
                                                                                                                          *  @class FormButtonGroup
                                                                                                                          *  @since 2020.10.21, 23:43
                                                                                                                          *  @changed 2020.10.21, 23:43
                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'







var FormButtonGroup_classNameModifiers = [
// Basic element properties
'id',
// Style-related modifiers...
'align',
'padded',
'background',
'flow'
// 'fullWidth',
];

var cnFormButtonGroup = configure_cn('FormButtonGroup');var

FormButtonGroup_FormButtonGroup_FormButtonGroup = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormButtonGroup, _React$Component);function FormButtonGroup() {return _React$Component.apply(this, arguments) || this;}var _proto = FormButtonGroup.prototype;_proto.

  getClassName = function getClassName() {var _this = this;
    var mods = FormButtonGroup_classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return extends_default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormButtonGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {
    // const {
    //   id,
    //   // name,
    //   // disabled,
    //   children,
    //   content,
    // } = this.props
    return /*#__PURE__*/(
      external_react_default.a.createElement(forms_FormGroup_FormGroup, extends_default()({}, this.props, { className: this.getClassName() })));

  };return FormButtonGroup;}(external_react_default.a.Component /** @lends @FormButtonGroup.prototype */);



FormButtonGroup_FormButtonGroup_FormButtonGroup.propTypes = {
  id: prop_types_default.a.string,
  name: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  flow: prop_types_default.a.bool,
  value: prop_types_default.a.any,
  valueType: prop_types_default.a.string,
  onChange: prop_types_default.a.func };

/* harmony default export */ var forms_FormButtonGroup_FormButtonGroup = (forms_FormItemHOC_FormItemHOC(FormButtonGroup_FormButtonGroup_FormButtonGroup));
// EXTERNAL MODULE: ./src/forms/FormInputGroup/FormInputGroup.pcss
var FormInputGroup_FormInputGroup = __webpack_require__(30);

// CONCATENATED MODULE: ./src/forms/FormInputGroup/FormInputGroup.jsx
 /** @module FormInputGroup
                                                                                                                          *  @class FormInputGroup
                                                                                                                          *  @since 2020.10.21, 23:43
                                                                                                                          *  @changed 2020.10.21, 23:43
                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'







var FormInputGroup_classNameModifiers = [
// Basic element properties
'id',
// Style-related modifiers...
'align',
'padded',
'background',
'flow'
// 'fullWidth',
];

var cnFormInputGroup = configure_cn('FormInputGroup');var

FormInputGroup_FormInputGroup_FormInputGroup = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormInputGroup, _React$Component);function FormInputGroup() {return _React$Component.apply(this, arguments) || this;}var _proto = FormInputGroup.prototype;_proto.

  getClassName = function getClassName() {var _this = this;
    var mods = FormInputGroup_classNameModifiers.reduce(function (mods, id) {
      var val = _this.props[id];
      if (val != null) {var _extends2;
        return extends_default()({}, mods, (_extends2 = {}, _extends2[id] = val, _extends2));
      }
      return mods;
    }, {});
    return cnFormInputGroup(mods, [this.props.className]);
  }

  // Render...
  ;_proto.
  render = function render() {
    // const {
    //   id,
    //   // name,
    //   // disabled,
    //   children,
    //   content,
    // } = this.props
    return /*#__PURE__*/(
      external_react_default.a.createElement(forms_FormGroup_FormGroup, extends_default()({}, this.props, { className: this.getClassName() })));

  };return FormInputGroup;}(external_react_default.a.Component /** @lends @FormInputGroup.prototype */);



FormInputGroup_FormInputGroup_FormInputGroup.propTypes = {
  id: prop_types_default.a.string,
  name: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  flow: prop_types_default.a.bool,
  value: prop_types_default.a.any,
  valueType: prop_types_default.a.string,
  onChange: prop_types_default.a.func };

/* harmony default export */ var forms_FormInputGroup_FormInputGroup = (forms_FormItemHOC_FormItemHOC(FormInputGroup_FormInputGroup_FormInputGroup));
// EXTERNAL MODULE: ./src/forms/FormText/FormText.pcss
var FormText_FormText = __webpack_require__(31);

// CONCATENATED MODULE: ./src/forms/FormText/FormText.jsx
 /** @module FormText
                                                                                                                                                                                                                          *  @class FormText
                                                                                                                                                                                                                          *  @since 2020.10.29, 21:25
                                                                                                                                                                                                                          *  @changed 2020.10.29, 22:42
                                                                                                                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'






var cnFormText = configure_cn('FormText');var

FormText_FormText_FormText = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormText, _React$Component);function FormText() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onClick",













    function (event) {var _this$props =



      _this.props,disabled = _this$props.disabled,onClick = _this$props.onClick;
      if (!disabled && onClick && typeof onClick === 'function') {
        onClick(event);
      }
    });return _this;}var _proto = FormText.prototype;_proto.getClassName = function getClassName() {var id = this.props.id;var classList = cnFormText({ id: id }, [this.props.className]);return classList;} // Handlers...
  ;
  // Render...
  _proto.
  render = function render() {var _this$props2 =







    this.props,id = _this$props2.id,disabled = _this$props2.disabled,text = _this$props2.text,children = _this$props2.children,title = _this$props2.title;

    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title };


    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      children || text || title));



  };return FormText;}(external_react_default.a.Component /** @lends @FormText.prototype */);




FormText_FormText_FormText.propTypes = {
  id: prop_types_default.a.string };

/* harmony default export */ var forms_FormText_FormText = (forms_FormItemHOC_FormItemHOC({ hoverable: true })(FormText_FormText_FormText));
// EXTERNAL MODULE: ./src/forms/FormSelect/FormSelect.pcss
var FormSelect_FormSelect = __webpack_require__(32);

// CONCATENATED MODULE: ./src/forms/FormSelect/FormSelect.jsx
 /** @module FormSelect
                                                                                                                                                                                                                          *  @class FormSelect
                                                                                                                                                                                                                          *  @since 2020.10.28, 22:49
                                                                                                                                                                                                                          *  @changed 2020.10.29, 03:14
                                                                                                                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'




// import FormGroup from 'forms/FormGroup'
// import FormGroup from '../FormGroup'




// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



var cnFormSelect = configure_cn('FormSelect');var

FormSelect_FormSelect_FormSelect = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormSelect, _React$Component);function FormSelect() {var _this;for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onControlClick",














    function (params) {var
      onControlClick = _this.props.onControlClick;
      if (typeof onControlClick === 'function') {
        onControlClick(params);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onMenuItemClick",
    function (params) {
      if (typeof _this.hideStopper === 'function' && !_this.props.closeOnSelect) {
        _this.hideStopper();
      }var
      onMenuItemClick = _this.props.onMenuItemClick;
      if (typeof onMenuItemClick === 'function') {
        onMenuItemClick(params);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onMenuChange",
    function (params) {var
      onMenuChange = _this.props.onMenuChange;
      if (typeof onMenuChange === 'function') {
        onMenuChange(params);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "registerHideStopper",

    function (hideStopper) {// Called from popup
      _this.hideStopper = hideStopper;
    });return _this;}var _proto = FormSelect.prototype;_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var id = this.props.id;var classList = cnFormSelect({ id: id }, [this.props.className]);return classList;} // Handlers...
  ; // onChange
  // onIemClick
  /* // onClick
   * onClick = (event) => {
   *   const {
   *     disabled,
   *     onClick,
   *     clickable,
   *   } = this.props
   *   if (clickable && !disabled && onClick && typeof onClick === 'function') {
   *     onClick(event)
   *   }
   * }
   */

  // Render...
  _proto.
  render = function render() {var _this$props =












    this.props,id = _this$props.id,disabled = _this$props.disabled,text = _this$props.text,title = _this$props.title,show = _this$props.show,singleChoice = _this$props.singleChoice,controlButtonStyle = _this$props.controlButtonStyle;

    var controlContent = /*#__PURE__*/
    external_react_default.a.createElement(forms_FormButton_FormButton, {
      icon: "faChevronDown",
      rightIcon: true,
      style: controlButtonStyle || 'primary',
      variation: "popupControl",
      rotatedIcon: true,
      text: text,
      title: title });



    var menuContent = /*#__PURE__*/
    external_react_default.a.createElement(elements_Menu_Menu, {
      checkable: true,
      singleChoice: singleChoice,
      onChange: this.onMenuChange,
      onClick: this.onMenuItemClick },

    [
    { val: 1, text: 'Swimming' },
    { val: 2, text: 'Skiing', checked: true }]);




    // const renderProps = this.getRenderProps()
    var renderProps = {
      // ...basicRenderProps,
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title,
      showPopup: show,
      popupControl: controlContent,
      popupContent: menuContent,
      onControlClick: this.onControlClick,
      registerHideStopper: this.registerHideStopper
      // onControlClick: buttonOnClick,
      // asItem: true
      // onClick: this.onClick, // ???
    };

    return /*#__PURE__*/(
      external_react_default.a.createElement(elements_Popup_Popup, renderProps));


  };return FormSelect;}(external_react_default.a.Component /** @lends @FormSelect.prototype */);




FormSelect_FormSelect_FormSelect.propTypes = {
  id: prop_types_default.a.string };

/* harmony default export */ var forms_FormSelect_FormSelect = (forms_FormItemHOC_FormItemHOC({ hoverable: true })(FormSelect_FormSelect_FormSelect));
// EXTERNAL MODULE: ./src/forms/FormTextInput/FormTextInput.pcss
var FormTextInput_FormTextInput = __webpack_require__(33);

// CONCATENATED MODULE: ./src/forms/FormTextInput/FormTextInput.jsx
 /** @module FormTextInput
                                                                                                                                                                                                                          *  @class FormTextInput
                                                                                                                                                                                                                          *  @since 2020.10.07, 00:20
                                                                                                                                                                                                                          *  @changed 2020.10.29, 23:44
                                                                                                                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



var cnFormTextInput = configure_cn('FormTextInput');var

FormTextInput_FormTextInput_FormTextInput = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormTextInput, _React$Component);


  // Lifecycle...

  function FormTextInput(props) {var _this;
    _this = _React$Component.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "updateValue",






































    function (state) {var _this$props =
      _this.props,id = _this$props.id,onChange = _this$props.onChange,disabled = _this$props.disabled,numericValue = _this$props.numericValue;
      if (!disabled && typeof onChange === 'function') {var _event =
        event,target = _event.target;var
        value = state.value;
        if (numericValue && !isNaN(value)) {
          value = Number(value);
        }
        onChange({ event: event, id: id, target: target, value: value });
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "handleChange",




















    function (event) {var
      target = event.target;var
      value = target.value;
      _this.setState({ value: value });
    });defineProperty_default()(assertThisInitialized_default()(_this), "onClearClick",

    function () {
      _this.setState({ value: '' });
    });defineProperty_default()(assertThisInitialized_default()(_this), "onKeyPress",

    function (event) {var
      keyCode = event.keyCode;var _this$props2 =





      _this.props,id = _this$props2.id,onKeyPress = _this$props2.onKeyPress,onEnterPressed = _this$props2.onEnterPressed;
      var cbProps = { event: event, id: id, keyCode: keyCode };
      onKeyPress && onKeyPress(cbProps);
      onEnterPressed && keyCode === 13 && onEnterPressed(cbProps); // Enter?
      // onEscPressed && (keyCode === 27) && onEscPressed(cbProps) // Esc? Seems to not processing (in chrome at least)
    });defineProperty_default()(assertThisInitialized_default()(_this), "onFocusIn",

    function () {
      _this.mounted && _this.setState({ focused: true });
      window.addEventListener('keypress', _this.onKeyPress);
      if (typeof _this.props.onFocusIn === 'function') {// Propogate event if handler passed
        _this.props.onFocusIn(event);
      }
    });defineProperty_default()(assertThisInitialized_default()(_this), "onFocusOut",
    function (event) {
      _this.mounted && _this.setState({ focused: false });
      window.removeEventListener('keypress', _this.onKeyPress);
      if (typeof _this.props.onFocusOut === 'function') {// Propogate event if handler passed
        _this.props.onFocusOut(event);
      }
    });var _this$props$value = _this.props.value,_value = _this$props$value === void 0 ? '' : _this$props$value;_this.state = { value: _value };return _this;}var _proto = FormTextInput.prototype;_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {var prevValue = prevProps.value;var propsValue = this.props.value;var stateValue = this.state.value;if (prevValue !== propsValue && propsValue !== stateValue) {this.setState({ value: propsValue }, this.updateValue);} else if (prevState.value !== stateValue) {this.updateValue(this.state);}} // Helper methods...
  ;_proto.hasValue = function hasValue() {var value = this.state.value;return value != null && value !== '';};_proto.hasIcon = function hasIcon() {var _this$props3 = this.props,icon = _this$props3.icon,hasIcon = _this$props3.hasIcon,hasClear = _this$props3.hasClear;return hasIcon || !!icon || hasClear && this.hasValue();};_proto.getClassName = function getClassName() {var _this$props4 = this.props,id = _this$props4.id,hasClear = _this$props4.hasClear;var hasValue = this.hasValue();var hasClearActive = hasClear && hasValue;var classList = cnFormTextInput({ id: id, hasIcon: this.hasIcon(), hasValue: this.hasValue(), hasClear: hasClear, hasClearActive: hasClearActive }, [this.props.className]);return classList;} // Event handlers...
  ; // Render...
  _proto.
  renderInput = function renderInput() {var _this2 = this;var

    value =
    this.state.value;var _this$props5 =








    this.props,id = _this$props5.id,inputId = _this$props5.inputId,name = _this$props5.name,disabled = _this$props5.disabled,placeholder = _this$props5.placeholder,_this$props5$type = _this$props5.type,type = _this$props5$type === void 0 ? 'text' : _this$props5$type;

    var inputProps = {
      key: 'Input',
      type: type,
      className: cnFormTextInput('Control'),
      id: inputId || id || name,
      name: name || inputId || id,
      disabled: disabled,
      placeholder: placeholder,
      ref: function ref(domElem) {_this2.inputDomElem = domElem;},
      onChange: this.handleChange,
      value: value
      // onFocus: this.onFocusIn,
      // onBlur: this.onFocusOut,
    };
    return /*#__PURE__*/(
      external_react_default.a.createElement("input",
      inputProps));


  };_proto.

  renderClearIcon = function renderClearIcon() {// DELETE
    var _this$props6 =




    this.props,hasClear = _this$props6.hasClear,clearIcon = _this$props6.clearIcon,clearIconTitle = _this$props6.clearIconTitle;
    var hasValue = this.hasValue();
    var hasClearActive = hasClear && hasValue;
    return hasClearActive && /*#__PURE__*/
    external_react_default.a.createElement(elements_InlineIcon_InlineIcon, {
      icon: clearIcon || 'faTimes',
      className: cnFormTextInput('Icon', { mode: 'Clear' }),
      onClick: this.onClearClick,
      title: clearIconTitle || 'Clear content' });


  };_proto.

  renderIcon = function renderIcon() {// DELETE
    var _this$props7 =




    this.props,icon = _this$props7.icon,iconTitle = _this$props7.iconTitle,onIconClick = _this$props7.onIconClick;

    return icon && /*#__PURE__*/
    external_react_default.a.createElement(elements_InlineIcon_InlineIcon, {
      icon: icon,
      className: cnFormTextInput('Icon'),
      onClick: onIconClick,
      title: iconTitle });


  };_proto.

  render = function render() {var _this$props8 =







    this.props,id = _this$props8.id,disabled = _this$props8.disabled,_this$props8$type = _this$props8.type,type = _this$props8$type === void 0 ? 'text' : _this$props8$type,title = _this$props8.title,setDomRef = _this$props8.setDomRef;

    var inputElem = this.renderInput();

    var renderProps = {
      id: id,
      className: this.getClassName(),
      disabled: disabled,
      title: title,
      type: type,
      onClick: this.onClick,
      ref: setDomRef };


    return /*#__PURE__*/(
      external_react_default.a.createElement("div", renderProps,
      inputElem,
      this.renderIcon() || this.renderClearIcon()));



  };return FormTextInput;}(external_react_default.a.Component /** @lends @FormTextInput.prototype */);



FormTextInput_FormTextInput_FormTextInput.propTypes = {
  id: prop_types_default.a.string };

/* harmony default export */ var forms_FormTextInput_FormTextInput = (forms_FormItemHOC_FormItemHOC({ hoverable: true, framed: true })(FormTextInput_FormTextInput_FormTextInput));
// EXTERNAL MODULE: ./src/forms/FormPasswordInput/FormPasswordInput.pcss
var FormPasswordInput_FormPasswordInput = __webpack_require__(34);

// CONCATENATED MODULE: ./src/forms/FormPasswordInput/FormPasswordInput.jsx
 /** @module FormPasswordInput
                                                                                                                                                                                                                                                                                *  @class FormPasswordInput
                                                                                                                                                                                                                                                                                *  @since 2020.10.29, 23:50
                                                                                                                                                                                                                                                                                *  @changed 2020.10.30, 00:03
                                                                                                                                                                                                                                                                                */


// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'


// import InlineIcon from 'elements/InlineIcon'



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



var cnFormPasswordInput = configure_cn('FormPasswordInput');var

FormPasswordInput_FormPasswordInput_FormPasswordInput = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormPasswordInput, _React$Component);

  // Lifecycle...

  function FormPasswordInput(props) {var _this;
    _this = _React$Component.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "onTypeIconClick",


































    function () {var
      type = _this.state.type;
      var setType = type === 'password' ? 'type' : 'password';
      _this.setState({ type: setType });
    });var _this$props$type = _this.props.type,_type = _this$props$type === void 0 ? 'password' : _this$props$type;_this.state = { type: _type };return _this;}var _proto = FormPasswordInput.prototype;_proto.componentDidUpdate = function componentDidUpdate(prevProps /* , prevState */) {var prevType = prevProps.type;var propsType = this.props.type;var stateType = this.state.type;if (prevType !== propsType && propsType !== stateType) {this.setState({ type: propsType });} // else if (prevState.type !== stateType) {
    //   this.updateType(this.state)
    // }
  } // Helper methods...
  ;_proto.getClassName = function getClassName() {var id = this.props.id;var classList = cnFormPasswordInput({ id: id }, [this.props.className]);return classList;} // Event handlers...
  ; // Render...
  _proto.render = function render() {var
    type =
    this.state.type;

    var icon = type === 'password' ? 'faEyeSlash' : 'faEye';
    return /*#__PURE__*/(
      external_react_default.a.createElement(forms_FormTextInput_FormTextInput, extends_default()({
        iconTitle: "Show/hide password",
        onIconClick: this.onTypeIconClick },
      this.props, {
        type: type,
        icon: icon })));



  };return FormPasswordInput;}(external_react_default.a.Component /** @lends @FormPasswordInput.prototype */);



/* // propTypes
                                                                                             * FormPasswordInput.propTypes = {
                                                                                             *   id: PropTypes.string,
                                                                                             * }
                                                                                             */
/* harmony default export */ var forms_FormPasswordInput_FormPasswordInput = (/* FormItemHOC({ hoverable: true, framed: true })( */FormPasswordInput_FormPasswordInput_FormPasswordInput);
// CONCATENATED MODULE: ./src/forms/forms.js
/** @module forms
 *  @desc Form components
 *  @since 2020.07.20, 19:21
 *  @changed 2020.10.22, 00:16
 */

// Form elements...
 // DEBUG: Demo element


// TODO...


// export FormLabeledGroup from './FormLabeledGroup'

// export FormDateRange from './FormDateRange'
// export FormDateTime from './FormDateTime'
// export FormRadio from './FormRadio'
// export FormSwitch from './FormSwitch'
//
// export FormPager from './FormPager'
// EXTERNAL MODULE: ./src/demo/Hello/Hello.pcss
var Hello_Hello = __webpack_require__(35);

// CONCATENATED MODULE: ./src/demo/Hello/img/LockColor2.svg
/* harmony default export */ var LockColor2 = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3RjJGNDsiIGQ9Ik00MzIsNDg3SDgwYy00NC4xMTIsMC04MC0zNS44ODgtODAtODBzMzUuODg4LTgwLDgwLTgwaDM1MmM0NC4xMTIsMCw4MCwzNS44ODgsODAsODANCglTNDc2LjExMiw0ODcsNDMyLDQ4N3oiLz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzZENzM3RjsiIGN4PSIyMDYiIGN5PSI0MDciIHI9IjI1Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgY3g9IjEwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgZD0iTTMxNiwxNTdIMTk2Yy04LjI4NCwwLTE1LTYuNzE2LTE1LTE1di00MmMwLTQxLjM1NSwzMy42NDUtNzUsNzUtNzVzNzUsMzMuNjQ1LDc1LDc1djQyDQoJCUMzMzEsMTUwLjI4NCwzMjQuMjg0LDE1NywzMTYsMTU3eiBNMjExLDEyN2g5MHYtMjdjMC0yNC44MTMtMjAuMTg3LTQ1LTQ1LTQ1cy00NSwyMC4xODctNDUsNDVWMTI3eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVFNUY2OTsiIGQ9Ik0yNTYsMjV2MzBjMjQuODEzLDAsNDUsMjAuMTg3LDQ1LDQ1djI3aC00NXYzMGg2MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di00Mg0KCUMzMzEsNTguNjQ1LDI5Ny4zNTUsMjUsMjU2LDI1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMyQjsiIGQ9Ik0zNTEsMjc2SDE2MWMtOC4yODQsMC0xNS02LjcxNi0xNS0xNVYxNDJjMC04LjI4NCw2LjcxNi0xNSwxNS0xNWgxOTBjOC4yODQsMCwxNSw2LjcxNiwxNSwxNXYxMTkNCglDMzY2LDI2OS4yODQsMzU5LjI4NCwyNzYsMzUxLDI3NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjk4MUU7IiBkPSJNMzUxLDEyN2gtOTV2MTQ5aDk1YzguMjg0LDAsMTUtNi43MTYsMTUtMTVWMTQyQzM2NiwxMzMuNzE2LDM1OS4yODQsMTI3LDM1MSwxMjd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTgxRTsiIGQ9Ik0yODEsMTkyYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTIwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1YzAsNi41MjgsNC4xNzgsMTIuMDY3LDEwLDE0LjEyOFYyMTINCgkJYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTV2LTUuODcyQzI3Ni44MjIsMjA0LjA2NywyODEsMTk4LjUyOCwyODEsMTkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RGREFFMDsiIGQ9Ik00MzIsMzI3SDI1NnYxNjBoMTc2YzQ0LjExMiwwLDgwLTM1Ljg4OCw4MC04MFM0NzYuMTEyLDMyNyw0MzIsMzI3eiIvPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNUU1RjY5OyIgY3g9IjMwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1RTVGNjk7IiBjeD0iNDA2IiBjeT0iNDA3IiByPSIyNSIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGODUxMjsiIGQ9Ik0yNjYsMTc3aC0xMHY1MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di01Ljg3MmM1LjgyMi0yLjA2MSwxMC03LjYsMTAtMTQuMTI4DQoJQzI4MSwxODMuNzE2LDI3NC4yODQsMTc3LDI2NiwxNzd6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");
// CONCATENATED MODULE: ./src/demo/Hello/Hello.jsx
/** @module Hello
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */


// import { cn } from '@bem-react/classname'

// import config from 'config'





var cnHello = configure_cn('Hello');

var Hello_Hello_Hello = function Hello(_ref) {var _ref$greeting = _ref.greeting,greeting = _ref$greeting === void 0 ? 'Greeting' : _ref$greeting,_ref$name = _ref.name,name = _ref$name === void 0 ? 'Name' : _ref$name;
  var className = cnHello();
  return /*#__PURE__*/(
    external_react_default.a.createElement("div", { className: className }, /*#__PURE__*/
    external_react_default.a.createElement("h1", { className: cnHello('Title') }, greeting, ", ", name, "!"), /*#__PURE__*/
    external_react_default.a.createElement("div", { className: cnHello('Image') }, /*#__PURE__*/
    external_react_default.a.createElement("img", { src: LockColor2 }))));



};

/* harmony default export */ var demo_Hello_Hello = (Hello_Hello_Hello);
// EXTERNAL MODULE: ./src/build.pcss
var build = __webpack_require__(36);

// CONCATENATED MODULE: ./src/build.js
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.05.27, 22:58
 */




// Demo component


// Basic styles


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map