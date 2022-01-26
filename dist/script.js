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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-version.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/v8-version.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/js/customizator.js":
/*!********************************!*\
  !*** ./src/js/customizator.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customizator; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Customizator =
/*#__PURE__*/
function () {
  function Customizator() {
    var _this = this;

    _classCallCheck(this, Customizator);

    this.btnBlock = document.createElement('div');
    this.colorPicker = document.createElement('input');
    this.clear = document.createElement('div');
    this.scale = localStorage.getItem('scale') || 1;
    this.color = localStorage.getItem('color') || '#ffffff';
    this.btnBlock.addEventListener('click', function (e) {
      return _this.onScaleChange(e);
    });
    this.colorPicker.addEventListener('input', function (e) {
      return _this.onColorChange(e);
    });
    this.clear.addEventListener('click', function () {
      return _this.reset();
    });
  }

  _createClass(Customizator, [{
    key: "onScaleChange",
    value: function onScaleChange(e) {
      var _this2 = this;

      var body = document.querySelector('body');

      if (e) {
        this.scale = +e.target.value.replace(/x/g, "");
      }

      var recursy = function recursy(element) {
        element.childNodes.forEach(function (node) {
          if (node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, "").length > 0) {
            if (!node.parentNode.getAttribute('data-fz')) {
              var value = window.getComputedStyle(node.parentNode, null).fontSize;
              node.parentNode.setAttribute('data-fz', +value.replace(/px/g, ""));
              node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * _this2.scale + "px";
            } else {
              node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * _this2.scale + "px";
            }
          } else {
            recursy(node);
          }
        });
      };

      recursy(body);
      localStorage.setItem('scale', this.scale);
    }
  }, {
    key: "onColorChange",
    value: function onColorChange(e) {
      var body = document.querySelector('body');
      body.style.backgroundColor = e.target.value;
      localStorage.setItem('color', e.target.value);
    }
  }, {
    key: "setBgColor",
    value: function setBgColor() {
      var body = document.querySelector('body');
      body.style.backgroundColor = this.color;
      this.colorPicker.value = this.color;
    }
  }, {
    key: "injectStyle",
    value: function injectStyle() {
      var style = document.createElement('style');
      style.innerHTML = "\n            .panel {\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                position: fixed;\n                top: 10px;\n                right: 0;\n                border: 1px solid rgba(0,0,0, .2);\n                box-shadow: 0 0 20px rgba(0,0,0, .5);\n                width: 300px;\n                height: 60px;\n                background-color: #fff;\n\n            }\n\n            .scale {\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                width: 100px;\n                height: 40px;\n            }\n\n            .scale_btn {\n                display: block;\n                width: 40px;\n                height: 40px;\n                border: 1px solid rgba(0,0,0, .2);\n                border-radius: 4px;\n                font-size: 18px;\n            }\n\n            .color {\n                width: 40px;\n                height: 40px;\n            }\n\n            .clear {\n                font-size: 20px;\n                cursor: pointer;\n            }\n        ";
      document.querySelector('head').appendChild(style);
    }
  }, {
    key: "reset",
    value: function reset() {
      localStorage.clear();
      this.scale = 1;
      this.color = '#ffffff';
      this.setBgColor();
      this.onScaleChange();
    }
  }, {
    key: "render",
    value: function render() {
      this.injectStyle();
      this.setBgColor();
      this.onScaleChange();
      var scaleInputS = document.createElement('input'),
          scaleInputM = document.createElement('input'),
          panel = document.createElement('div');
      panel.append(this.btnBlock, this.colorPicker, this.clear);
      this.clear.innerHTML = "&times";
      this.clear.classList.add('clear');
      scaleInputS.classList.add('scale_btn');
      scaleInputM.classList.add('scale_btn');
      this.btnBlock.classList.add('scale');
      this.colorPicker.classList.add('color');
      scaleInputS.setAttribute('type', 'button');
      scaleInputM.setAttribute('type', 'button');
      scaleInputS.setAttribute('value', '1x');
      scaleInputM.setAttribute('value', '1.5x');
      this.colorPicker.setAttribute('type', 'color');
      this.colorPicker.setAttribute('value', '#ffffff');
      this.btnBlock.append(scaleInputS, scaleInputM);
      panel.classList.add('panel');
      document.querySelector('body').append(panel);
    }
  }]);

  return Customizator;
}();



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customizator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizator */ "./src/js/customizator.js");
/* harmony import */ var _test_tesks_sort_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-tesks/sort-text */ "./src/js/test-tesks/sort-text.js");
/* harmony import */ var _test_tesks_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-tesks/matrix */ "./src/js/test-tesks/matrix.js");
/* harmony import */ var _test_tesks_sort_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-tesks/sort-array */ "./src/js/test-tesks/sort-array.js");




window.addEventListener('DOMContentLoaded', function () {
  // matrix();
  // sortText();
  Object(_test_tesks_sort_array__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var panel = new _customizator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  panel.render();
});

/***/ }),

/***/ "./src/js/test-tesks/matrix.js":
/*!*************************************!*\
  !*** ./src/js/test-tesks/matrix.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);



var matrix = function matrix() {
  var w = +prompt('Введіть ширину матриці');
  var h = +prompt('Введіть висоту матриці');
  var arr = new Array(h).fill().map(function () {
    return new Array(w);
  });
  var counter = 1,
      startCol = 0,
      startRow = 0,
      endCol = w - 1,
      endRow = h - 1;

  function addZero(num) {
    if (num <= 9) {
      return '0' + num;
    } else {
      return "" + num;
    }
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (var i = startCol; i <= endCol; i++) {
      arr[startRow][i] = addZero(counter);
      counter++;
    }

    startRow++;

    for (var k = startRow; k <= endRow; k++) {
      arr[k][endCol] = addZero(counter);
      counter++;
    }

    endCol--;

    for (var j = endCol; j >= startCol; j--) {
      arr[endRow][j] = addZero(counter);
      counter++;
    }

    endRow--;

    for (var z = endRow; z >= startRow; z--) {
      arr[z][startCol] = addZero(counter);
      counter++;
    }

    startCol++;
  }

  console.log(arr);
};

/* harmony default export */ __webpack_exports__["default"] = (matrix);

/***/ }),

/***/ "./src/js/test-tesks/sort-array.js":
/*!*****************************************!*\
  !*** ./src/js/test-tesks/sort-array.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);








var sortArr = function sortArr() {
  var arr = [{
    ratingRevievs: "264 отзыва",
    price: {
      oldUan: "4 333 грн",
      newUan: "3 799 грн"
    },
    name: "Motorola MOTO G4 (XT1622) Black"
  }, {
    ratingRevievs: "1355 отзывов",
    price: "4 999 грн",
    name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"
  }, {
    ratingRevievs: "426 отзывов",
    price: "5 199 грн",
    name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"
  }, {
    ratingRevievs: "403 отзыва",
    price: "4 349 грн",
    name: "Xiaomi Redmi Note 4X 3/32GB Black"
  }, {
    ratingRevievs: "488 отзывов",
    price: "6 199 грн",
    name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"
  }, {
    ratingRevievs: "198 отзывов",
    price: {
      oldUan: "3 495 грн",
      newUan: "2 995 грн"
    },
    name: "Lenovo K5 (A6020a40) Silver"
  }];
  var temp = JSON.parse(JSON.stringify(arr));

  function clearWords() {
    temp.forEach(function (item) {
      item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, "");

      if (typeof item.price == 'string') {
        item.price = item.price.replace(/\D/g, "");
      } else {
        item.price.oldUan = item.price.oldUan.replace(/\D/g, "");
        item.price.newUan = item.price.newUan.replace(/\D/g, "");
      }
    });
  }

  clearWords();

  function sortByFeedbacks() {
    temp.sort(function (a, b) {
      return a.ratingRevievs > b.ratingRevievs ? 1 : -1;
    });
    display(temp);
  }

  function sortByFPricess() {
    temp.sort(function (a, b) {
      return (a.price.newUan || a.price) > (b.price.newUan || b.price) ? 1 : -1;
    });
    display(temp);
  }

  sortByFPricess(arr);

  function display(data) {
    document.querySelector('.sort').innerHTML = '';
    data.forEach(function (item) {
      document.querySelector('.sort').innerHTML += "\n    <div class='sort-blocks'>\n    <h3>".concat(item.name, "</h3>\n    <ul>\n      <li>").concat(item.price.newUan || item.price, " \u0433\u0440\u043D.</li>\n      <li>").concat(item.ratingRevievs, " \u0432\u0456\u0434\u0433\u0443\u043A\u0438</li>\n    </ul>\n    </div>\n    ");
    });
  }

  document.querySelector('.price').addEventListener('click', function () {
    sortByFPricess(arr);
  });
  document.querySelector('.rating').addEventListener('click', function () {
    sortByFeedbacks(arr);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sortArr);

/***/ }),

/***/ "./src/js/test-tesks/sort-text.js":
/*!****************************************!*\
  !*** ./src/js/test-tesks/sort-text.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);








var sortText = function sortText() {
  var text = "\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u042F \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B \u0432\u0430\u0441, \u0433\u043E\u0441\u043F\u043E\u0434\u0430, \u0441 \u0442\u0435\u043C \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u0432\u0430\u043C \u043F\u0440\u0435\u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435: \u043A \u043D\u0430\u043C \u0435\u0434\u0435\u0442 \u0440\u0435\u0432\u0438\u0437\u043E\u0440.\n\u0410\u043C\u043C\u043E\u0441 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447. \u041A\u0430\u043A \u0440\u0435\u0432\u0438\u0437\u043E\u0440?\n\u0410\u0440\u0442\u0435\u043C\u0438\u0439 \u0424\u0438\u043B\u0438\u043F\u043F\u043E\u0432\u0438\u0447. \u041A\u0430\u043A \u0440\u0435\u0432\u0438\u0437\u043E\u0440?\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u0420\u0435\u0432\u0438\u0437\u043E\u0440 \u0438\u0437 \u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430, \u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E. \u0418 \u0435\u0449\u0435 \u0441 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u043F\u0440\u0435\u0434\u043F\u0438\u0441\u0430\u043D\u044C\u0435\u043C.\n\u0410\u043C\u043C\u043E\u0441 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447. \u0412\u043E\u0442 \u0442\u0435 \u043D\u0430!\n\u0410\u0440\u0442\u0435\u043C\u0438\u0439 \u0424\u0438\u043B\u0438\u043F\u043F\u043E\u0432\u0438\u0447. \u0412\u043E\u0442 \u043D\u0435 \u0431\u044B\u043B\u043E \u0437\u0430\u0431\u043E\u0442\u044B, \u0442\u0430\u043A \u043F\u043E\u0434\u0430\u0439!\n\u041B\u0443\u043A\u0430 \u041B\u0443\u043A\u0438\u0447. \u0413\u043E\u0441\u043F\u043E\u0434\u0438 \u0411\u043E\u0436\u0435! \u0435\u0449\u0435 \u0438 \u0441 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u043C \u043F\u0440\u0435\u0434\u043F\u0438\u0441\u0430\u043D\u044C\u0435\u043C!\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u042F \u043A\u0430\u043A \u0431\u0443\u0434\u0442\u043E \u043F\u0440\u0435\u0434\u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u043B: \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043C\u043D\u0435 \u0432\u0441\u044E \u043D\u043E\u0447\u044C \u0441\u043D\u0438\u043B\u0438\u0441\u044C \u043A\u0430\u043A\u0438\u0435-\u0442\u043E \u0434\u0432\u0435 \u043D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0435 \u043A\u0440\u044B\u0441\u044B. \u041F\u0440\u0430\u0432\u043E, \u044D\u0442\u0430\u043A\u0438\u0445 \u044F \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0432\u0438\u0434\u044B\u0432\u0430\u043B: \u0447\u0435\u0440\u043D\u044B\u0435, \u043D\u0435\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u044B! \u043F\u0440\u0438\u0448\u043B\u0438, \u043F\u043E\u043D\u044E\u0445\u0430\u043B\u0438 \u2014 \u0438 \u043F\u043E\u0448\u043B\u0438 \u043F\u0440\u043E\u0447\u044C. \u0412\u043E\u0442 \u044F \u0432\u0430\u043C \u043F\u0440\u043E\u0447\u0442\u0443 \u043F\u0438\u0441\u044C\u043C\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u044F \u043E\u0442 \u0410\u043D\u0434\u0440\u0435\u044F \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447\u0430 \u0427\u043C\u044B\u0445\u043E\u0432\u0430, \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u044B, \u0410\u0440\u0442\u0435\u043C\u0438\u0439 \u0424\u0438\u043B\u0438\u043F\u043F\u043E\u0432\u0438\u0447, \u0437\u043D\u0430\u0435\u0442\u0435. \u0412\u043E\u0442 \u0447\u0442\u043E \u043E\u043D \u043F\u0438\u0448\u0435\u0442: \xAB\u041B\u044E\u0431\u0435\u0437\u043D\u044B\u0439 \u0434\u0440\u0443\u0433, \u043A\u0443\u043C \u0438 \u0431\u043B\u0430\u0433\u043E\u0434\u0435\u0442\u0435\u043B\u044C (\u0431\u043E\u0440\u043C\u043E\u0447\u0435\u0442 \u0432\u043F\u043E\u043B\u0433\u043E\u043B\u043E\u0441\u0430, \u043F\u0440\u043E\u0431\u0435\u0433\u0430\u044F \u0441\u043A\u043E\u0440\u043E \u0433\u043B\u0430\u0437\u0430\u043C\u0438)... \u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u0442\u0435\u0431\u044F\xBB. \u0410! \u0432\u043E\u0442: \xAB\u0421\u043F\u0435\u0448\u0443, \u043C\u0435\u0436\u0434\u0443 \u043F\u0440\u043E\u0447\u0438\u043C, \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u0442\u0435\u0431\u044F, \u0447\u0442\u043E \u043F\u0440\u0438\u0435\u0445\u0430\u043B \u0447\u0438\u043D\u043E\u0432\u043D\u0438\u043A \u0441 \u043F\u0440\u0435\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u044E \u0433\u0443\u0431\u0435\u0440\u043D\u0438\u044E \u0438 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043D\u0430\u0448 \u0443\u0435\u0437\u0434 (\u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u0442 \u043F\u0430\u043B\u0435\u0446 \u0432\u0432\u0435\u0440\u0445). \u042F \u0443\u0437\u043D\u0430\u043B \u044D\u0442\u043E \u043E\u0442 \u0441\u0430\u043C\u044B\u0445 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u044B\u0445 \u043B\u044E\u0434\u0435\u0439, \u0445\u043E\u0442\u044F \u043E\u043D \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0435\u0431\u044F \u0447\u0430\u0441\u0442\u043D\u044B\u043C \u043B\u0438\u0446\u043E\u043C. \u0422\u0430\u043A \u043A\u0430\u043A \u044F \u0437\u043D\u0430\u044E, \u0447\u0442\u043E \u0437\u0430 \u0442\u043E\u0431\u043E\u044E, \u043A\u0430\u043A \u0437\u0430 \u0432\u0441\u044F\u043A\u0438\u043C, \u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0433\u0440\u0435\u0448\u043A\u0438, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0442\u044B \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0443\u043C\u043D\u044B\u0439 \u0438 \u043D\u0435 \u043B\u044E\u0431\u0438\u0448\u044C \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u043F\u043B\u044B\u0432\u0435\u0442 \u0432 \u0440\u0443\u043A\u0438...\xBB (\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0441\u044C), \u043D\u0443, \u0437\u0434\u0435\u0441\u044C \u0441\u0432\u043E\u0438... \xAB\u0442\u043E \u0441\u043E\u0432\u0435\u0442\u0443\u044E \u0442\u0435\u0431\u0435 \u0432\u0437\u044F\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u043E\u0441\u0442\u044C, \u0438\u0431\u043E \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0435\u0445\u0430\u0442\u044C \u0432\u043E \u0432\u0441\u044F\u043A\u0438\u0439 \u0447\u0430\u0441, \u0435\u0441\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u0436\u0435 \u043D\u0435 \u043F\u0440\u0438\u0435\u0445\u0430\u043B \u0438 \u043D\u0435 \u0436\u0438\u0432\u0435\u0442 \u0433\u0434\u0435-\u043D\u0438\u0431\u0443\u0434\u044C \u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E... \u0412\u0447\u0435\u0440\u0430\u0448\u043D\u0435\u0433\u043E \u0434\u043D\u0438 \u044F...\xBB \u041D\u0443, \u0442\u0443\u0442 \u0443\u0436 \u043F\u043E\u0448\u043B\u0438 \u0434\u0435\u043B\u0430 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0435: \xAB...\u0441\u0435\u0441\u0442\u0440\u0430 \u0410\u043D\u043D\u0430 \u041A\u0438\u0440\u0438\u043B\u043E\u0432\u043D\u0430 \u043F\u0440\u0438\u0435\u0445\u0430\u043B\u0430 \u043A \u043D\u0430\u043C \u0441 \u0441\u0432\u043E\u0438\u043C \u043C\u0443\u0436\u0435\u043C; \u0418\u0432\u0430\u043D \u041A\u0438\u0440\u0438\u043B\u043E\u0432\u0438\u0447 \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u0442\u043E\u043B\u0441\u0442\u0435\u043B \u0438 \u0432\u0441\u0435 \u0438\u0433\u0440\u0430\u0435\u0442 \u043D\u0430 \u0441\u043A\u0440\u044B\u043F\u043A\u0435...\xBB \u2014 \u0438 \u043F\u0440\u043E\u0447\u0435\u0435, \u0438 \u043F\u0440\u043E\u0447\u0435\u0435. \u0422\u0430\u043A \u0432\u043E\u0442 \u043A\u0430\u043A\u043E\u0435 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E!\n\u0410\u043C\u043C\u043E\u0441 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447. \u0414\u0430, \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0442\u0430\u043A\u043E\u0435... \u043D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u043E, \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435\u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u043E. \u0427\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043D\u0435\u0434\u0430\u0440\u043E\u043C.\n\u041B\u0443\u043A\u0430 \u041B\u0443\u043A\u0438\u0447. \u0417\u0430\u0447\u0435\u043C \u0436\u0435, \u0410\u043D\u0442\u043E\u043D \u0410\u043D\u0442\u043E\u043D\u043E\u0432\u0438\u0447, \u043E\u0442\u0447\u0435\u0433\u043E \u044D\u0442\u043E? \u0417\u0430\u0447\u0435\u043C \u043A \u043D\u0430\u043C \u0440\u0435\u0432\u0438\u0437\u043E\u0440?\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u0417\u0430\u0447\u0435\u043C! \u0422\u0430\u043A \u0443\u0436, \u0432\u0438\u0434\u043D\u043E, \u0441\u0443\u0434\u044C\u0431\u0430! (\u0412\u0437\u0434\u043E\u0445\u043D\u0443\u0432.) \u0414\u043E \u0441\u0438\u0445 \u043F\u043E\u0440, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u0411\u043E\u0433\u0443, \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u043B\u0438\u0441\u044C \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0433\u043E\u0440\u043E\u0434\u0430\u043C; \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u0440\u0438\u0448\u043B\u0430 \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043A \u043D\u0430\u0448\u0435\u043C\u0443.\n\u0410\u043C\u043C\u043E\u0441 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447. \u042F \u0434\u0443\u043C\u0430\u044E, \u0410\u043D\u0442\u043E\u043D \u0410\u043D\u0442\u043E\u043D\u043E\u0432\u0438\u0447, \u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043D\u043A\u0430\u044F \u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u0430. \u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442 \u0432\u043E\u0442 \u0447\u0442\u043E: \u0420\u043E\u0441\u0441\u0438\u044F... \u0434\u0430... \u0445\u043E\u0447\u0435\u0442 \u0432\u0435\u0441\u0442\u0438 \u0432\u043E\u0439\u043D\u0443, \u0438 \u043C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0438\u044F-\u0442\u043E, \u0432\u043E\u0442 \u0432\u0438\u0434\u0438\u0442\u0435, \u0438 \u043F\u043E\u0434\u043E\u0441\u043B\u0430\u043B\u0430 \u0447\u0438\u043D\u043E\u0432\u043D\u0438\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C, \u043D\u0435\u0442 \u043B\u0438 \u0433\u0434\u0435 \u0438\u0437\u043C\u0435\u043D\u044B.\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u042D\u043A \u043A\u0443\u0434\u0430 \u0445\u0432\u0430\u0442\u0438\u043B\u0438! \u0415\u0449\u0435 \u0443\u043C\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A! \u0412 \u0443\u0435\u0437\u0434\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435 \u0438\u0437\u043C\u0435\u043D\u0430! \u0427\u0442\u043E \u043E\u043D, \u043F\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439, \u0447\u0442\u043E \u043B\u0438? \u0414\u0430 \u043E\u0442\u0441\u044E\u0434\u0430, \u0445\u043E\u0442\u044C \u0442\u0440\u0438 \u0433\u043E\u0434\u0430 \u0441\u043A\u0430\u0447\u0438, \u043D\u0438 \u0434\u043E \u043A\u0430\u043A\u043E\u0433\u043E \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043D\u0435 \u0434\u043E\u0435\u0434\u0435\u0448\u044C.\n\u0410\u043C\u043C\u043E\u0441 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447. \u041D\u0435\u0442, \u044F \u0432\u0430\u043C \u0441\u043A\u0430\u0436\u0443, \u0432\u044B \u043D\u0435 \u0442\u043E\u0433\u043E... \u0432\u044B \u043D\u0435... \u041D\u0430\u0447\u0430\u043B\u044C\u0441\u0442\u0432\u043E \u0438\u043C\u0435\u0435\u0442 \u0442\u043E\u043D\u043A\u0438\u0435 \u0432\u0438\u0434\u044B: \u0434\u0430\u0440\u043E\u043C \u0447\u0442\u043E \u0434\u0430\u043B\u0435\u043A\u043E, \u0430 \u043E\u043D\u043E \u0441\u0435\u0431\u0435 \u043C\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0443\u0441.\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u041C\u043E\u0442\u0430\u0435\u0442 \u0438\u043B\u0438 \u043D\u0435 \u043C\u043E\u0442\u0430\u0435\u0442, \u0430 \u044F \u0432\u0430\u0441, \u0433\u043E\u0441\u043F\u043E\u0434\u0430, \u043F\u0440\u0435\u0434\u0443\u0432\u0435\u0434\u043E\u043C\u0438\u043B. \u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043F\u043E \u0441\u0432\u043E\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u044F \u043A\u043E\u0435-\u043A\u0430\u043A\u0438\u0435 \u0440\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0435\u043D\u044C\u044F \u0441\u0434\u0435\u043B\u0430\u043B, \u0441\u043E\u0432\u0435\u0442\u0443\u044E \u0438 \u0432\u0430\u043C. \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0432\u0430\u043C, \u0410\u0440\u0442\u0435\u043C\u0438\u0439 \u0424\u0438\u043B\u0438\u043F\u043F\u043E\u0432\u0438\u0447! \u0411\u0435\u0437 \u0441\u043E\u043C\u043D\u0435\u043D\u0438\u044F, \u043F\u0440\u043E\u0435\u0437\u0436\u0430\u044E\u0449\u0438\u0439 \u0447\u0438\u043D\u043E\u0432\u043D\u0438\u043A \u0437\u0430\u0445\u043E\u0447\u0435\u0442 \u043F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u0434\u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0432\u0430\u043C \u0431\u043E\u0433\u043E\u0443\u0433\u043E\u0434\u043D\u044B\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u2014 \u0438 \u043F\u043E\u0442\u043E\u043C\u0443 \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0432\u0441\u0435 \u0431\u044B\u043B\u043E \u043F\u0440\u0438\u043B\u0438\u0447\u043D\u043E: \u043A\u043E\u043B\u043F\u0430\u043A\u0438 \u0431\u044B\u043B\u0438 \u0431\u044B \u0447\u0438\u0441\u0442\u044B\u0435, \u0438 \u0431\u043E\u043B\u044C\u043D\u044B\u0435 \u043D\u0435 \u043F\u043E\u0445\u043E\u0434\u0438\u043B\u0438 \u0431\u044B \u043D\u0430 \u043A\u0443\u0437\u043D\u0435\u0446\u043E\u0432, \u043A\u0430\u043A \u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u043E\u043D\u0438 \u0445\u043E\u0434\u044F\u0442 \u043F\u043E-\u0434\u043E\u043C\u0430\u0448\u043D\u0435\u043C\u0443.\n\u0410\u0440\u0442\u0435\u043C\u0438\u0439 \u0424\u0438\u043B\u0438\u043F\u043F\u043E\u0432\u0438\u0447. \u041D\u0443, \u044D\u0442\u043E \u0435\u0449\u0435 \u043D\u0438\u0447\u0435\u0433\u043E. \u041A\u043E\u043B\u043F\u0430\u043A\u0438, \u043F\u043E\u0436\u0430\u043B\u0443\u0439, \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0434\u0435\u0442\u044C \u0438 \u0447\u0438\u0441\u0442\u044B\u0435.\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u0414\u0430, \u0438 \u0442\u043E\u0436\u0435 \u043D\u0430\u0434 \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u0440\u043E\u0432\u0430\u0442\u044C\u044E \u043D\u0430\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E-\u043B\u0430\u0442\u044B\u043D\u0438 \u0438\u043B\u0438 \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u043C \u043A\u0430\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435... \u044D\u0442\u043E \u0443\u0436 \u043F\u043E \u0432\u0430\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438, \u0425\u0440\u0438\u0441\u0442\u0438\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447, \u2014 \u0432\u0441\u044F\u043A\u0443\u044E \u0431\u043E\u043B\u0435\u0437\u043D\u044C: \u043A\u043E\u0433\u0434\u0430 \u043A\u0442\u043E \u0437\u0430\u0431\u043E\u043B\u0435\u043B, \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0434\u043D\u044F \u0438 \u0447\u0438\u0441\u043B\u0430... \u041D\u0435\u0445\u043E\u0440\u043E\u0448\u043E, \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0431\u043E\u043B\u044C\u043D\u044B\u0435 \u0442\u0430\u043A\u043E\u0439 \u043A\u0440\u0435\u043F\u043A\u0438\u0439 \u0442\u0430\u0431\u0430\u043A \u043A\u0443\u0440\u044F\u0442, \u0447\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0441\u0447\u0438\u0445\u0430\u0435\u0448\u044C\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u043E\u0439\u0434\u0435\u0448\u044C. \u0414\u0430 \u0438 \u043B\u0443\u0447\u0448\u0435, \u0435\u0441\u043B\u0438 \u0431 \u0438\u0445 \u0431\u044B\u043B\u043E \u043C\u0435\u043D\u044C\u0448\u0435: \u0442\u043E\u0442\u0447\u0430\u0441 \u043E\u0442\u043D\u0435\u0441\u0443\u0442 \u043A \u0434\u0443\u0440\u043D\u043E\u043C\u0443 \u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044E \u0438\u043B\u0438 \u043A \u043D\u0435\u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0443 \u0432\u0440\u0430\u0447\u0430.\n\u0410\u0440\u0442\u0435\u043C\u0438\u0439 \u0424\u0438\u043B\u0438\u043F\u043F\u043E\u0432\u0438\u0447. \u041E! \u043D\u0430\u0441\u0447\u0435\u0442 \u0432\u0440\u0430\u0447\u0435\u0432\u0430\u043D\u044C\u044F \u043C\u044B \u0441 \u0425\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u043E\u043C \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447\u0435\u043C \u0432\u0437\u044F\u043B\u0438 \u0441\u0432\u043E\u0438 \u043C\u0435\u0440\u044B: \u0447\u0435\u043C \u0431\u043B\u0438\u0436\u0435 \u043A \u043D\u0430\u0442\u0443\u0440\u0435, \u0442\u0435\u043C \u043B\u0443\u0447\u0448\u0435, \u2014 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432 \u0434\u043E\u0440\u043E\u0433\u0438\u0445 \u043C\u044B \u043D\u0435 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u043C. \u0427\u0435\u043B\u043E\u0432\u0435\u043A \u043F\u0440\u043E\u0441\u0442\u043E\u0439: \u0435\u0441\u043B\u0438 \u0443\u043C\u0440\u0435\u0442, \u0442\u043E \u0438 \u0442\u0430\u043A \u0443\u043C\u0440\u0435\u0442; \u0435\u0441\u043B\u0438 \u0432\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0435\u0442, \u0442\u043E \u0438 \u0442\u0430\u043A \u0432\u044B\u0437\u0434\u043E\u0440\u043E\u0432\u0435\u0435\u0442. \u0414\u0430 \u0438 \u0425\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u0443 \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447\u0443 \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0431\u044B\u043B\u043E \u0431 \u0441 \u043D\u0438\u043C\u0438 \u0438\u0437\u044A\u044F\u0441\u043D\u044F\u0442\u044C\u0441\u044F: \u043E\u043D \u043F\u043E-\u0440\u0443\u0441\u0441\u043A\u0438 \u043D\u0438 \u0441\u043B\u043E\u0432\u0430 \u043D\u0435 \u0437\u043D\u0430\u0435\u0442.\n\u0425\u0440\u0438\u0441\u0442\u0438\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447 \u0438\u0437\u0434\u0430\u0435\u0442 \u0437\u0432\u0443\u043A, \u043E\u0442\u0447\u0430\u0441\u0442\u0438 \u043F\u043E\u0445\u043E\u0436\u0438\u0439 \u043D\u0430 \u0431\u0443\u043A\u0432\u0443 \u0438 \u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0435.\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u0412\u0430\u043C \u0442\u043E\u0436\u0435 \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u043B \u0431\u044B, \u0410\u043C\u043C\u043E\u0441 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430. \u0423 \u0432\u0430\u0441 \u0442\u0430\u043C \u0432 \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0439, \u043A\u0443\u0434\u0430 \u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0438\u0442\u0435\u043B\u0438, \u0441\u0442\u043E\u0440\u043E\u0436\u0430 \u0437\u0430\u0432\u0435\u043B\u0438 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u0433\u0443\u0441\u0435\u0439 \u0441 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u043C\u0438 \u0433\u0443\u0441\u0435\u043D\u043A\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u0430\u043A \u0438 \u0448\u043D\u044B\u0440\u044F\u044E\u0442 \u043F\u043E\u0434 \u043D\u043E\u0433\u0430\u043C\u0438. \u041E\u043D\u043E, \u043A\u043E\u043D\u0435\u0447\u043D\u043E, \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u043C \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u043E\u043C \u0437\u0430\u0432\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0432\u0441\u044F\u043A\u043E\u043C\u0443 \u043F\u043E\u0445\u0432\u0430\u043B\u044C\u043D\u043E, \u0438 \u043F\u043E\u0447\u0435\u043C\u0443 \u0436 \u0441\u0442\u043E\u0440\u043E\u0436\u0443 \u0438 \u043D\u0435 \u0437\u0430\u0432\u0435\u0441\u0442\u044C \u0435\u0433\u043E? \u0442\u043E\u043B\u044C\u043A\u043E, \u0437\u043D\u0430\u0435\u0442\u0435, \u0432 \u0442\u0430\u043A\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u043D\u0435\u043F\u0440\u0438\u043B\u0438\u0447\u043D\u043E... \u042F \u0438 \u043F\u0440\u0435\u0436\u0434\u0435 \u0445\u043E\u0442\u0435\u043B \u0432\u0430\u043C \u044D\u0442\u043E \u0437\u0430\u043C\u0435\u0442\u0438\u0442\u044C, \u043D\u043E \u0432\u0441\u0435 \u043A\u0430\u043A-\u0442\u043E \u043F\u043E\u0437\u0430\u0431\u044B\u0432\u0430\u043B.\n\u0410\u043C\u043C\u043E\u0441 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447. \u0410 \u0432\u043E\u0442 \u044F \u0438\u0445 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0436\u0435 \u0432\u0435\u043B\u044E \u0432\u0441\u0435\u0445 \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u043D\u0430 \u043A\u0443\u0445\u043D\u044E. \u0425\u043E\u0442\u0438\u0442\u0435, \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u043E\u0431\u0435\u0434\u0430\u0442\u044C.\n\u0413\u043E\u0440\u043E\u0434\u043D\u0438\u0447\u0438\u0439. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0434\u0443\u0440\u043D\u043E, \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0432\u044B\u0441\u0443\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0430\u043C\u043E\u043C \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0432\u0441\u044F\u043A\u0430\u044F \u0434\u0440\u044F\u043D\u044C \u0438 \u043D\u0430\u0434 \u0441\u0430\u043C\u044B\u043C \u0448\u043A\u0430\u043F\u043E\u043C \u0441 \u0431\u0443\u043C\u0430\u0433\u0430\u043C\u0438 \u043E\u0445\u043E\u0442\u043D\u0438\u0447\u0438\u0439 \u0430\u0440\u0430\u043F\u043D\u0438\u043A. \u042F \u0437\u043D\u0430\u044E, \u0432\u044B \u043B\u044E\u0431\u0438\u0442\u0435 \u043E\u0445\u043E\u0442\u0443, \u043D\u043E \u0432\u0441\u0435 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u043B\u0443\u0447\u0448\u0435 \u0435\u0433\u043E \u043F\u0440\u0438\u043D\u044F\u0442\u044C, \u0430 \u0442\u0430\u043C, \u043A\u0430\u043A \u043F\u0440\u043E\u0435\u0434\u0435\u0442 \u0440\u0435\u0432\u0438\u0437\u043E\u0440, \u043F\u043E\u0436\u0430\u043B\u0443\u0439, \u043E\u043F\u044F\u0442\u044C \u0435\u0433\u043E \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0432\u0435\u0441\u0438\u0442\u044C. \u0422\u0430\u043A\u0436\u0435 \u0437\u0430\u0441\u0435\u0434\u0430\u0442\u0435\u043B\u044C \u0432\u0430\u0448... \u043E\u043D, \u043A\u043E\u043D\u0435\u0447\u043D\u043E, \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0441\u0432\u0435\u0434\u0443\u0449\u0438\u0439, \u043D\u043E \u043E\u0442 \u043D\u0435\u0433\u043E \u0442\u0430\u043A\u043E\u0439 \u0437\u0430\u043F\u0430\u0445, \u043A\u0430\u043A \u0431\u0443\u0434\u0442\u043E \u0431\u044B \u043E\u043D \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u044B\u0448\u0435\u043B \u0438\u0437 \u0432\u0438\u043D\u043E\u043A\u0443\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u043E\u0434\u0430, \u2014 \u044D\u0442\u043E \u0442\u043E\u0436\u0435 \u043D\u0435\u0445\u043E\u0440\u043E\u0448\u043E. \u042F \u0445\u043E\u0442\u0435\u043B \u0434\u0430\u0432\u043D\u043E \u043E\u0431 \u044D\u0442\u043E\u043C \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0430\u043C, \u043D\u043E \u0431\u044B\u043B, \u043D\u0435 \u043F\u043E\u043C\u043D\u044E, \u0447\u0435\u043C-\u0442\u043E \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D. \u0415\u0441\u0442\u044C \u043F\u0440\u043E\u0442\u0438\u0432 \u044D\u0442\u043E\u0433\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430, \u0435\u0441\u043B\u0438 \u0443\u0436\u0435 \u044D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E, \u043A\u0430\u043A \u043E\u043D \u0433\u043E\u0432\u043E\u0440\u0438\u0442, \u0443 \u043D\u0435\u0433\u043E \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0445: \u043C\u043E\u0436\u043D\u043E \u0435\u043C\u0443 \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C \u0435\u0441\u0442\u044C \u043B\u0443\u043A, \u0438\u043B\u0438 \u0447\u0435\u0441\u043D\u043E\u043A, \u0438\u043B\u0438 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0434\u0440\u0443\u0433\u043E\u0435. \u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043C\u0435\u0434\u0438\u043A\u0430\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0425\u0440\u0438\u0441\u0442\u0438\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447.\n";
  var roles = ['Городничий', 'Аммос Федорович', 'Артемий Филиппович', 'Лука Лукич', 'Христиан Иванович'];
  var result = '';
  var arrayText = text.split('\n');
  roles.forEach(function (role) {
    var temp = "\n".concat(role, ":\n");
    result += "\n".concat(temp, "\n");
    arrayText.forEach(function (item, i) {
      if (item.indexOf(role) >= 0 && item.indexOf(role) <= role.length) {
        var content = item.slice(role.length + 1);
        result += "\n".concat(i + 1, ") ").concat(content);
      }
    });
  });
  console.log(result);
};

/* harmony default export */ __webpack_exports__["default"] = (sortText);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map