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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/BarcodeScanTorch.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}module.exports=_arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _arrayWithoutHoles(arr){if(Array.isArray(arr))return arrayLikeToArray(arr);}module.exports=_arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}module.exports=_defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}module.exports=_extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}module.exports=_iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}module.exports=_nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles=__webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");var iterableToArray=__webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");var unsupportedIterableToArray=__webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");var nonIterableSpread=__webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");function _toConsumableArray(arr){return arrayWithoutHoles(arr)||iterableToArray(arr)||unsupportedIterableToArray(arr)||nonIterableSpread();}module.exports=_toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return arrayLikeToArray(o,minLen);}module.exports=_unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __exportStar=this&&this.__exportStar||function(m,exports){for(var p in m){if(p!=="default"&&!exports.hasOwnProperty(p))__createBinding(exports,m,p);}};Object.defineProperty(exports,"__esModule",{value:true});__exportStar(__webpack_require__(/*! ./native/common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js"),exports);__exportStar(__webpack_require__(/*! ./web/common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js"),exports);

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));var _extends3=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));Object.defineProperty(exports,"__esModule",{value:true});exports.mergeNativeStyles=void 0;function mergeNativeStyles(defaultStyle,overrideStyles){var styles=[defaultStyle].concat((0,_toConsumableArray2.default)(overrideStyles.filter(function(object){return object!==undefined;})));return Object.keys(defaultStyle).reduce(function(flattened,currentKey){var styleItems=styles.map(function(object){return object[currentKey];});return(0,_extends3.default)((0,_extends3.default)({},flattened),(0,_defineProperty2.default)({},currentKey,flattenObjects(styleItems)));},{});}exports.mergeNativeStyles=mergeNativeStyles;function flattenObjects(objects){return objects.reduce(function(merged,object){return(0,_extends3.default)((0,_extends3.default)({},merged),object);},{});}

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.parseInlineStyle=void 0;function parseInlineStyle(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";try{return style.split(";").reduce(function(styleObject,line){var pair=line.split(":");if(pair.length===2){var name=pair[0].trim().replace(/(-.)/g,function(match){return match[1].toUpperCase();});styleObject[name]=pair[1].trim();}return styleObject;},{});}catch(_){return{};}}exports.parseInlineStyle=parseInlineStyle;

/***/ }),

/***/ "./src/BarcodeScanTorch.tsx":
/*!**********************************!*\
  !*** ./src/BarcodeScanTorch.tsx ***!
  \**********************************/
/*! exports provided: BarcodeScanTorch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanTorch", function() { return BarcodeScanTorch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-camera */ "react-native-camera");
/* harmony import */ var react_native_camera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_camera__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mendix/pluggable-widgets-tools */ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js");
/* harmony import */ var _mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_3__);




;
const defaultStyle = {
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        alignItems: 'center',
    },
    bottom: {
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textBox: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textInput: {
        height: 45,
        margin: 5,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#de712b',
    },
    switchOn: {
        height: 45,
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#de712b',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
    },
    switchOff: {
        height: 45,
        margin: 5,
        borderRadius: 30,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#de712b',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
    },
    textOn: {
        color: 'white',
        fontSize: 16,
        margin: 50,
        fontWeight: 'bold',
    },
    textOff: {
        color: '#de712b',
        fontSize: 16,
        margin: 50,
        fontWeight: 'bold',
    },
    textBarcode: {
        color: '#de712b',
        fontSize: 16,
        fontWeight: 'bold',
    }
};
class BarcodeScanTorch extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.onBarCodeReadHandler = this.onBarCodeRead.bind(this);
        this.manualBarcodeHandler = this.manualBarcode.bind(this);
        this.styles = Object(_mendix_pluggable_widgets_tools__WEBPACK_IMPORTED_MODULE_3__["mergeNativeStyles"])(defaultStyle, this.props.style);
        this.toggleTorch = this.toggleTorch.bind(this);
        this.toggleAutoDetect = this.toggleAutoDetect.bind(this);
        this.state = {
            torchON: false,
            autoDetect: true,
            textboxValue: '',
        };
    }
    toggleTorch() {
        this.setState({ torchON: !this.state.torchON });
    }
    toggleAutoDetect() {
        this.setState({ autoDetect: !this.state.autoDetect });
    }
    render() {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], { style: this.styles.container },
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native_camera__WEBPACK_IMPORTED_MODULE_2__["RNCamera"], { style: this.styles.preview, captureAudio: false, onBarCodeRead: this.onBarCodeReadHandler, flashMode: this.state.torchON ? react_native_camera__WEBPACK_IMPORTED_MODULE_2__["RNCamera"].Constants.FlashMode.torch : react_native_camera__WEBPACK_IMPORTED_MODULE_2__["RNCamera"].Constants.FlashMode.off }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], { style: this.styles.bottom },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], { onPress: this.toggleTorch, style: this.state.torchON ? this.styles.switchOff : this.styles.switchOn },
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], { style: this.state.torchON ? this.styles.textOff : this.styles.textOn },
                        "\u21AF Lamp ",
                        this.state.torchON ? "uit" : "aan")),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], { onPress: this.toggleAutoDetect, style: this.state.autoDetect ? this.styles.switchOn : this.styles.switchOff },
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], { style: this.state.autoDetect ? this.styles.textOn : this.styles.textOff },
                        "\u2551\u2588\u2551 Detectie ",
                        this.state.autoDetect ? "aan" : "uit")),
                this.state.autoDetect ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], null) :
                    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["View"], { style: this.styles.textBox },
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], { style: this.styles.textBarcode }, "Barcode: "),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["TextInput"], { style: this.styles.textInput, placeholder: "Scan of vul handmatig", value: this.state.textboxValue, onChangeText: (text) => this.setState({ textboxValue: text }) }),
                        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["TouchableOpacity"], { onPress: this.manualBarcodeHandler, style: this.styles.switchOn },
                            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_native__WEBPACK_IMPORTED_MODULE_1__["Text"], { style: this.styles.textOn }, "Naar machine"))))));
    }
    onBarCodeRead(event) {
        if (this.state.autoDetect) {
            if (this.props.barcode.status !== "available" || event.data === this.props.barcode.value) {
                return;
            }
            this.props.barcode.setValue(event.data);
            if (this.props.onDetect && this.props.onDetect.canExecute) {
                react_native__WEBPACK_IMPORTED_MODULE_1__["Vibration"].vibrate(400);
                this.props.onDetect.execute();
            }
        }
        else {
            if (this.state.textboxValue !== event.data) {
                react_native__WEBPACK_IMPORTED_MODULE_1__["Vibration"].vibrate(400);
                this.setState({ textboxValue: event.data });
                return;
            }
        }
    }
    manualBarcode() {
        var _a;
        this.props.barcode.setValue(this.state.textboxValue);
        (_a = this.props.onDetect) === null || _a === void 0 ? void 0 : _a.execute();
    }
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ }),

/***/ "react-native-camera":
/*!**************************************!*\
  !*** external "react-native-camera" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-camera");

/***/ })

/******/ });
//# sourceMappingURL=BarcodeScanTorch.js.map