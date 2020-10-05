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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
  module.exports = __webpack_require__(16)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@bem-react/classname");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/** @module config
 *  @description App config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.05.17, 04:12
 */

var config = {
  build: __webpack_require__(9),
  css: __webpack_require__(10),
  userAgent: __webpack_require__(12)
  // app: require('./app'),
  // constants: require('./constants'),
};

module.exports = config;

/***/ }),
/* 9 */
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
  buildTag: "v.0.0.17-201006-0047-build-prod-default",
  version: "0.0.17" };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2019.09.03, 11:04
 */

// Theme...
var THEME = "default";
var theme = __webpack_require__(11);

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
  warnColor: theme.warnColor || '#f96',
  successColor: theme.successColor || '#ac9',
  infoColor: theme.infoColor || '#9bd',
  confirmColor: theme.confirmColor || theme.primaryColor || textColor,
  selectColor: theme.selectColor || '#05b',

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


var formItemHeight = 32; // px
var formItemBorderSize = 1; // px
var formItemInnerHeight = formItemHeight - formItemBorderSize; // px

Object.assign(cssConfig, { // Form properties...

  // Forms...

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

  tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16 });



module.exports = cssConfig;

/***/ }),
/* 11 */
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
/* 12 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(17);

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
/* 17 */
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "config", function() { return /* reexport */ config_default.a; });
__webpack_require__.d(__webpack_exports__, "FormItemDummy", function() { return /* reexport */ forms_FormItemDummy_FormItemDummy; });
__webpack_require__.d(__webpack_exports__, "FormButton", function() { return /* reexport */ forms_FormButton_FormButton; });
__webpack_require__.d(__webpack_exports__, "FormGroup", function() { return /* reexport */ forms_FormGroup_FormGroup; });
__webpack_require__.d(__webpack_exports__, "Hello", function() { return /* reexport */ demo_Hello_Hello; });

// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__(8);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(4);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(3);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@bem-react/classname"
var classname_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(6);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/forms/FormItemHOC/FormItemHOC.pcss
var FormItemHOC = __webpack_require__(14);

// CONCATENATED MODULE: ./src/forms/FormItemHOC/FormItemHOC.jsx
 /** @module FormItemHOC
                                                                                                                                                                                                                                                                                *  @class FormItemHOC
                                                                                                                                                                                                                                                                                *  @since 2019.09.25, 19:18
                                                                                                                                                                                                                                                                                *  @changed 2020.06.04, 22:58
                                                                                                                                                                                                                                                                                */






var cnFormItem = Object(classname_["cn"])('FormItem');

var classNameModifiers = [// Pass props/state params to class modifiers
// Display-related modifiers...
'fullWidth',
'innerFlex', // (???)
'solid', // Item is unwrappable (???)
'framed', // Frame around item (input field, select etc) (???)
// Behavior-related modifiers...
'hoverable', // Allow hover effects
'focusable', // Allow hover effects
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

var FormItemHOC_wrapFormItemHOC = function wrapFormItemHOC(WrappedComponent, params) {var _temp;if (params === void 0) {params = {};}return _temp = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(_temp, _React$Component);var _proto = _temp.prototype;

    // Helper methods...
    _proto.
    getFlag = function getFlag(id) {// Get parameter from state or from props
      return this.state[id] != null ? this.state[id] : this.props[id];
    }

    // Lifecycle methods...
    ;
    function _temp(props) {var _this;
      _this = _React$Component.call(this, props) || this;defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseOver",

























































      function () {
        var disabled = _this.getFlag('disabled');
        var hoverable = _this.getFlag('hoverable');
        if (hoverable && !disabled) {
          _this.setState({ hovered: true });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "handleMouseOut",
      function () {
        var disabled = _this.getFlag('disabled');
        var hoverable = _this.getFlag('hoverable');
        if (hoverable && !disabled) {
          _this.setState({ hovered: false });
        }
      });defineProperty_default()(assertThisInitialized_default()(_this), "setDomRef",

      function (domRef) {
        _this.formItemDomRef = domRef;
      });_this.state = FormItemHOC_deriveState(defaultState, params, props); // deriveStateFromProps(props, defaultState)
      // if (params.hoverable) {
      //   console.log(this.state)
      //   debugger
      // }
      _this.id = props.id || params.id;_this.formItemRef = /*#__PURE__*/external_react_default.a.createRef();return _this;}_temp.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {// TODO: Update event subscriptions if `hoverable` flag changed?
      return FormItemHOC_deriveState(params, props, state); // deriveStateFromProps(props, state)
    };_proto.componentDidMount = function componentDidMount() {// const { formItemRef: { current } = {} } = this
      var formItemDomRef = this.formItemDomRef;var hoverable = this.state.hoverable;if (hoverable && formItemDomRef && formItemDomRef.addEventListener) {this.hoverableInited = true;formItemDomRef.addEventListener('mouseover', this.handleMouseOver);formItemDomRef.addEventListener('mouseout', this.handleMouseOut);}};_proto.componentWillUnmount = function componentWillUnmount() {if (this.hoverableInited) {// const { formItemRef: { current } = {} } = this
        var formItemDomRef = this.formItemDomRef;if (formItemDomRef && formItemDomRef.removeEventListener) {formItemDomRef.removeEventListener('mouseover', this.handleMouseOver);formItemDomRef.removeEventListener('mouseout', this.handleMouseOut);}}};_proto.getClassName = function getClassName() {var _this2 = this; // Collect modifier values from state or props
      var mods = classNameModifiers.reduce(function (mods, id) {var val = _this2.getFlag(id); // (this.state[id] != null) ? this.state[id] : this.props[id]
        if (val != null) {mods[id] = val;}return mods;}, {});return cnFormItem(mods, [this.props.className]);} /* // For `focusable` state (TODO?)
                                                                                                                * handleFocus() {
                                                                                                                *   this.setState({ focused: true })
                                                                                                                * }
                                                                                                                * handleBlur() {
                                                                                                                *   this.setState({ focused: false })
                                                                                                                * }
                                                                                                                */;_proto.render = function render() {var _this$state = this.state,hovered = _this$state.hovered,focused = _this$state.focused;return /*#__PURE__*/external_react_default.a.createElement(WrappedComponent, extends_default()({}, this.props, { hovered: hovered, focused: focused, className: this.getClassName(), setDomRef: this.setDomRef }));};return _temp;}(external_react_default.a.Component), _temp;};
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
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7);

// EXTERNAL MODULE: ./src/forms/FormItemDummy/FormItemDummy.pcss
var FormItemDummy_FormItemDummy = __webpack_require__(15);

// CONCATENATED MODULE: ./src/forms/FormItemDummy/FormItemDummy.jsx
 /** @module FormItemDummy
                                                                                                                                                                                                                          *  @class FormItemDummy
                                                                                                                                                                                                                          *  @desc Demo form item
                                                                                                                                                                                                                          *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                          *  @changed 2020.07.20, 19:07
                                                                                                                                                                                                                          */


// import connect from 'react-redux/es/connect/connect'








var cnFormItemDummy = Object(classname_["cn"])('FormItemDummy');var

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
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/forms/FormButton/FormButton.pcss
var FormButton_FormButton = __webpack_require__(18);

// EXTERNAL MODULE: ./src/forms/FormButton/FormButton-Styles.pcss
var FormButton_Styles = __webpack_require__(19);

// CONCATENATED MODULE: ./src/forms/FormButton/FormButton.jsx
 /** @module FormButton
                                                                                                                                                                                                                          *  @class FormButton
                                                                                                                                                                                                                          *  @since 2020.07.20, 19:07
                                                                                                                                                                                                                          *  @changed 2020.07.20, 19:07
                                                                                                                                                                                                                          */



// import connect from 'react-redux/es/connect/connect'









var cnFormButton = Object(classname_["cn"])('FormButton');var

FormButton_FormButton_FormButton = /*#__PURE__*/function (_React$Component) {inheritsLoose_default()(FormButton, _React$Component);

  function FormButton(props) {var _this;
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
    };return _this;}FormButton.getDerivedStateFromProps = function getDerivedStateFromProps(props /* , state */) {// ???
    var hasIcon = props.hasIcon,hasText = props.hasText,onlyIcon = props.onlyIcon,text = props.text,icon = props.icon,children = props.children;return { // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      hasIcon: !!(hasIcon || icon), hasText: !onlyIcon && !!(hasText || text || children) };};var _proto = FormButton.prototype;_proto.getClassName = function getClassName() {// TODO: Refactor properties!
    var _this$props2 = this.props,id = _this$props2.id,onlyIcon = _this$props2.onlyIcon,largeIcon = _this$props2.largeIcon,rightIcon = _this$props2.rightIcon,style = _this$props2.style,fullWidth = _this$props2.fullWidth,type = _this$props2.type;var _this$state = this.state,hasIcon = _this$state.hasIcon,hasText = _this$state.hasText;var classList = cnFormButton({ id: id, style: style, fullWidth: fullWidth, // checked,
      // plain,
      hasIcon: hasIcon, hasText: hasText, onlyIcon: onlyIcon, largeIcon: largeIcon, rightIcon: rightIcon, type: type, solid: true }, [this.props.className]);return classList;} // Handlers...
  ; // Render...
  _proto.render = function render() {var _this$props3 =




    this.props,id = _this$props3.id,children = _this$props3.children,text = _this$props3.text,tag = _this$props3.tag,type = _this$props3.type,title = _this$props3.title,icon = _this$props3.icon,setDomRef = _this$props3.setDomRef;var _this$state2 =



    this.state,hasIcon = _this$state2.hasIcon,hasText = _this$state2.hasText;

    // Create fortawesome icon element if passed icon image (svg icon)
    var iconImg = icon && icon.iconName ? /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], { className: cnFormButton('IconImg'), icon: icon }) : icon;
    var iconElem = hasIcon && /*#__PURE__*/
    external_react_default.a.createElement("span", { key: "Icon", className: cnFormButton('Icon') },
    iconImg);



    // Text element
    var textElem = hasText && /*#__PURE__*/
    external_react_default.a.createElement("span", { key: "Text", className: cnFormButton('Text') },
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
  };return FormButton;}(external_react_default.a.Component /** @lends @FormButton.prototype */);



FormButton_FormButton_FormButton.propTypes = {
  id: prop_types_default.a.string,

  hoverable: prop_types_default.a.bool, // FormItem: Allowed hovered events
  focusable: prop_types_default.a.bool, // FormItem: Allowed focused events

  // TODO: Actualize & check next properties, implement cosmos fixtures...

  // TODO: formId -- id for form element (passed on form submit)
  name: prop_types_default.a.string, // ???
  disabled: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,

  hasIcon: prop_types_default.a.bool, // Optional
  hasText: prop_types_default.a.bool, // Optional
  text: prop_types_default.a.string, // Text content (may be passed as node children)
  icon: prop_types_default.a.any, // Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
  onlyIcon: prop_types_default.a.bool, // Only icon
  largeIcon: prop_types_default.a.bool, // Large icon
  rightIcon: prop_types_default.a.bool, // Icon placed at right side
  // TODO: size: PropTypes.string, // Different form item sizes? (eg: md -- default, sm, xs, lg, xl, xxl)

  style: prop_types_default.a.string, // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
  fullWidth: prop_types_default.a.bool, // Occupies all horizontal space
  // plain: PropTypes.bool, // ??? Plain icon (no border & background -- if no style specified, looks as link)

  checked: prop_types_default.a.bool // FormItem: Checked state
};
/* harmony default export */ var forms_FormButton_FormButton = (forms_FormItemHOC_FormItemHOC({ hoverable: true })(FormButton_FormButton_FormButton));
// EXTERNAL MODULE: ./src/forms/FormGroup/FormGroup.pcss
var FormGroup_FormGroup = __webpack_require__(20);

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
'flow'];


var cnFormGroup = Object(classname_["cn"])('FormGroup');var

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
// CONCATENATED MODULE: ./src/forms/index.js
/** @module forms
 *  @desc Form components
 *  @since 2020.07.20, 19:21
 *  @changed 2020.07.20, 19:21
 */

// Form elements...
 // Demo element


// TODO...

// export FormLabeledGroup from './FormLabeledGroup'
// export FormItem from './FormItem'
//
// export FormText from './FormText'
// export FormLabel from './FormLabel'
//
// export FormDateRange from './FormDateRange'
// export FormDateTime from './FormDateTime'
// export FormSelect from './FormSelect'
// export FormTextInput from './FormTextInput'
// export FormPasswordInput from './FormPasswordInput'
// export FormRadio from './FormRadio'
//
// export FormPager from './FormPager'
// EXTERNAL MODULE: ./src/demo/Hello/Hello.pcss
var Hello_Hello = __webpack_require__(21);

// CONCATENATED MODULE: ./src/demo/Hello/img/LockColor2.svg
/* harmony default export */ var LockColor2 = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3RjJGNDsiIGQ9Ik00MzIsNDg3SDgwYy00NC4xMTIsMC04MC0zNS44ODgtODAtODBzMzUuODg4LTgwLDgwLTgwaDM1MmM0NC4xMTIsMCw4MCwzNS44ODgsODAsODANCglTNDc2LjExMiw0ODcsNDMyLDQ4N3oiLz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzZENzM3RjsiIGN4PSIyMDYiIGN5PSI0MDciIHI9IjI1Ii8+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgY3g9IjEwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNkQ3MzdGOyIgZD0iTTMxNiwxNTdIMTk2Yy04LjI4NCwwLTE1LTYuNzE2LTE1LTE1di00MmMwLTQxLjM1NSwzMy42NDUtNzUsNzUtNzVzNzUsMzMuNjQ1LDc1LDc1djQyDQoJCUMzMzEsMTUwLjI4NCwzMjQuMjg0LDE1NywzMTYsMTU3eiBNMjExLDEyN2g5MHYtMjdjMC0yNC44MTMtMjAuMTg3LTQ1LTQ1LTQ1cy00NSwyMC4xODctNDUsNDVWMTI3eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzVFNUY2OTsiIGQ9Ik0yNTYsMjV2MzBjMjQuODEzLDAsNDUsMjAuMTg3LDQ1LDQ1djI3aC00NXYzMGg2MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di00Mg0KCUMzMzEsNTguNjQ1LDI5Ny4zNTUsMjUsMjU2LDI1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQUMyQjsiIGQ9Ik0zNTEsMjc2SDE2MWMtOC4yODQsMC0xNS02LjcxNi0xNS0xNVYxNDJjMC04LjI4NCw2LjcxNi0xNSwxNS0xNWgxOTBjOC4yODQsMCwxNSw2LjcxNiwxNSwxNXYxMTkNCglDMzY2LDI2OS4yODQsMzU5LjI4NCwyNzYsMzUxLDI3NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRjk4MUU7IiBkPSJNMzUxLDEyN2gtOTV2MTQ5aDk1YzguMjg0LDAsMTUtNi43MTYsMTUtMTVWMTQyQzM2NiwxMzMuNzE2LDM1OS4yODQsMTI3LDM1MSwxMjd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGOTgxRTsiIGQ9Ik0yODEsMTkyYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTIwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1YzAsNi41MjgsNC4xNzgsMTIuMDY3LDEwLDE0LjEyOFYyMTINCgkJYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTV2LTUuODcyQzI3Ni44MjIsMjA0LjA2NywyODEsMTk4LjUyOCwyODEsMTkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0RGREFFMDsiIGQ9Ik00MzIsMzI3SDI1NnYxNjBoMTc2YzQ0LjExMiwwLDgwLTM1Ljg4OCw4MC04MFM0NzYuMTEyLDMyNyw0MzIsMzI3eiIvPg0KPGc+DQoJPGNpcmNsZSBzdHlsZT0iZmlsbDojNUU1RjY5OyIgY3g9IjMwNiIgY3k9IjQwNyIgcj0iMjUiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiM1RTVGNjk7IiBjeD0iNDA2IiBjeT0iNDA3IiByPSIyNSIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGODUxMjsiIGQ9Ik0yNjYsMTc3aC0xMHY1MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di01Ljg3MmM1LjgyMi0yLjA2MSwxMC03LjYsMTAtMTQuMTI4DQoJQzI4MSwxODMuNzE2LDI3NC4yODQsMTc3LDI2NiwxNzd6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");
// CONCATENATED MODULE: ./src/demo/Hello/Hello.jsx
/** @module Hello
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */



// import config from 'config'





var cnHello = Object(classname_["cn"])('Hello');

var Hello_Hello_Hello = function Hello(_ref) {var _ref$greeting = _ref.greeting,greeting = _ref$greeting === void 0 ? 'Greeting' : _ref$greeting,_ref$name = _ref.name,name = _ref$name === void 0 ? 'Name' : _ref$name;
  return /*#__PURE__*/(
    external_react_default.a.createElement("div", { className: cnHello() }, /*#__PURE__*/
    external_react_default.a.createElement("h1", { className: cnHello('Title') }, greeting, ", ", name, "!"), /*#__PURE__*/
    external_react_default.a.createElement("div", { className: cnHello('Image') }, /*#__PURE__*/
    external_react_default.a.createElement("img", { src: LockColor2 }))));



};

/* harmony default export */ var demo_Hello_Hello = (Hello_Hello_Hello);
// CONCATENATED MODULE: ./src/build.js
/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.05.27, 22:58
 */



// Demo component


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map