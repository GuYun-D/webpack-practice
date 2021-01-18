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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/iconfont.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/iconfont.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconfont_eot_t_1610935380026__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconfont.eot?t=1610935380026 */ \"./src/iconfont.eot?t=1610935380026\");\n/* harmony import */ var _iconfont_woff_t_1610935380026__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconfont.woff?t=1610935380026 */ \"./src/iconfont.woff?t=1610935380026\");\n/* harmony import */ var _iconfont_ttf_t_1610935380026__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iconfont.ttf?t=1610935380026 */ \"./src/iconfont.ttf?t=1610935380026\");\n/* harmony import */ var _iconfont_svg_t_1610935380026__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iconfont.svg?t=1610935380026 */ \"./src/iconfont.svg?t=1610935380026\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_eot_t_1610935380026__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_eot_t_1610935380026__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_woff_t_1610935380026__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_ttf_t_1610935380026__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_iconfont_svg_t_1610935380026__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { hash: \"#iconfont\" });\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {font-family: \\\"iconfont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* IE9 */\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'), \\n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff'),\\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('truetype'), \\n  url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('svg'); /* iOS 4.1- */\\n}\\n\\n.iconfont {\\n  font-family: \\\"iconfont\\\" !important;\\n  font-size: 16px;\\n  font-style: normal;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.icon-shengri:before {\\n  content: \\\"\\\\e80f\\\";\\n}\\n\\n.icon-zhifu:before {\\n  content: \\\"\\\\e810\\\";\\n}\\n\\n.icon-baogao:before {\\n  content: \\\"\\\\e811\\\";\\n}\\n\\n.icon-fanghu:before {\\n  content: \\\"\\\\e812\\\";\\n}\\n\\n.icon-leftarrow:before {\\n  content: \\\"\\\\e600\\\";\\n}\\n\\n.icon-weixin:before {\\n  content: \\\"\\\\e66f\\\";\\n}\\n\\n.icon-iconfontweibo:before {\\n  content: \\\"\\\\e63c\\\";\\n}\\n\\n.icon-G:before {\\n  content: \\\"\\\\e601\\\";\\n}\\n\\n.icon-feiniao:before {\\n  content: \\\"\\\\e673\\\";\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/iconfont.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/iconfont.css":
/*!**************************!*\
  !*** ./src/iconfont.css ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./iconfont.css */ \"../node_modules/css-loader/dist/cjs.js!./src/iconfont.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_iconfont_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/iconfont.css?");

/***/ }),

/***/ "./src/iconfont.eot?t=1610935380026":
/*!******************************************!*\
  !*** ./src/iconfont.eot?t=1610935380026 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"136e582b36a1b14f2b4010bcd537992a.eot\");\n\n//# sourceURL=webpack:///./src/iconfont.eot?");

/***/ }),

/***/ "./src/iconfont.svg?t=1610935380026":
/*!******************************************!*\
  !*** ./src/iconfont.svg?t=1610935380026 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5e18e1f357e98a82254f40713e1e1986.svg\");\n\n//# sourceURL=webpack:///./src/iconfont.svg?");

/***/ }),

/***/ "./src/iconfont.ttf?t=1610935380026":
/*!******************************************!*\
  !*** ./src/iconfont.ttf?t=1610935380026 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cab357700c7d2af34a1b12a886371bd9.ttf\");\n\n//# sourceURL=webpack:///./src/iconfont.ttf?");

/***/ }),

/***/ "./src/iconfont.woff?t=1610935380026":
/*!*******************************************!*\
  !*** ./src/iconfont.woff?t=1610935380026 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"645dea7390bb41f4ed5c67402fdf9beb.woff\");\n\n//# sourceURL=webpack:///./src/iconfont.woff?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _iconfont_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconfont.css */ \"./src/iconfont.css\");\n// 引入样式文件\r\n\r\n\r\nfunction add(x, y){\r\n    return x + y\r\n}\r\n\r\nconsole.log(add(26, 9));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });