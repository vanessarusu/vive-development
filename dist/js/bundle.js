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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interactiveColumns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactiveColumns */ "./src/js/interactiveColumns.js");
/* harmony import */ var _staffBios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staffBios */ "./src/js/staffBios.js");



(function () {
  var ic = Object(_interactiveColumns__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var sb = Object(_staffBios__WEBPACK_IMPORTED_MODULE_1__["default"])();
  ic.init();
  sb.init();
})(); // (function(){
//     console.log('hola');
//     setTimeout(function() {
//         if(Boolean(_N2['#n2-ss-5'])) {
//             // window['n2-ss-5'] = 2;
//         //    document.querySelector("#n2-ss-5 .nextend-arrow-next").click();
//             // _N2.r('#n2-ss-5', function() {
//             //     var slider = _N2['#n2-ss-5'];
//             //     slider.next();
//             // });
//         }
//     }, 1000);
// })();

/***/ }),

/***/ "./src/js/interactiveColumns.js":
/*!**************************************!*\
  !*** ./src/js/interactiveColumns.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggleColumns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleColumns */ "./src/js/toggleColumns.js");


var interactiveColumns = function interactiveColumns() {
  var tc = Object(_toggleColumns__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function addEventListeners() {
    if (Boolean(document.querySelector('.interactive-callout-column'))) {
      var interactiveColumns = document.querySelectorAll('.interactive-callout-column');
      interactiveColumns.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          tc.toggle(this);
        });
      });
    }
  }

  function init() {
    addEventListeners();
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (interactiveColumns);

/***/ }),

/***/ "./src/js/staffBios.js":
/*!*****************************!*\
  !*** ./src/js/staffBios.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggleColumns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleColumns */ "./src/js/toggleColumns.js");


var staffBios = function staffBios() {
  var tc = Object(_toggleColumns__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function addEventListeners() {
    var bios = document.querySelectorAll('.staff-bio');
    bios.forEach(function (el) {
      el.querySelector('.staff-bio-expand img').addEventListener('click', function (e) {
        e.preventDefault();
        tc.toggle(el);
      });
    });
  }

  function init() {
    addEventListeners();
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (staffBios);

/***/ }),

/***/ "./src/js/toggleColumns.js":
/*!*********************************!*\
  !*** ./src/js/toggleColumns.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleColumns = function toggleColumns(el) {
  function toggle(el) {
    if (el.classList.contains('open')) {
      el.classList.remove('open');
    } else {
      el.classList.add('open');
    }
  }

  function init() {
    toggleClass(el);
  }

  return {
    toggle: toggle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (toggleColumns);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdGFmZkJpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvZ2dsZUNvbHVtbnMuanMiXSwibmFtZXMiOlsiaWMiLCJpbnRlcmFjdGl2ZUNvbHVtbnMiLCJzYiIsInN0YWZmQmlvcyIsImluaXQiLCJ0YyIsInRvZ2dsZUNvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVycyIsIkJvb2xlYW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImJpb3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxp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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgaW50ZXJhY3RpdmVDb2x1bW5zIGZyb20gXCIuL2ludGVyYWN0aXZlQ29sdW1uc1wiO1xuaW1wb3J0IHN0YWZmQmlvcyBmcm9tIFwiLi9zdGFmZkJpb3NcIjtcblxuKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaWMgPSBpbnRlcmFjdGl2ZUNvbHVtbnMoKTtcbiAgICBjb25zdCBzYiA9IHN0YWZmQmlvcygpO1xuXG4gICAgaWMuaW5pdCgpO1xuICAgIHNiLmluaXQoKTtcbn0pKCk7XG5cblxuXG4vLyAoZnVuY3Rpb24oKXtcbi8vICAgICBjb25zb2xlLmxvZygnaG9sYScpO1xuLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGlmKEJvb2xlYW4oX04yWycjbjItc3MtNSddKSkge1xuLy8gICAgICAgICAgICAgLy8gd2luZG93WyduMi1zcy01J10gPSAyO1xuLy8gICAgICAgICAvLyAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI24yLXNzLTUgLm5leHRlbmQtYXJyb3ctbmV4dFwiKS5jbGljaygpO1xuLy8gICAgICAgICAgICAgLy8gX04yLnIoJyNuMi1zcy01JywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAvLyAgICAgdmFyIHNsaWRlciA9IF9OMlsnI24yLXNzLTUnXTtcbi8vICAgICAgICAgICAgIC8vICAgICBzbGlkZXIubmV4dCgpO1xuLy8gICAgICAgICAgICAgLy8gfSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9LCAxMDAwKTtcbi8vIH0pKCk7IiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5cbmNvbnN0IGludGVyYWN0aXZlQ29sdW1ucyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCB0YyA9ICB0b2dnbGVDb2x1bW5zKCk7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYoQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKSkpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcmFjdGl2ZUNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKTtcbiAgICBcbiAgICAgICAgICAgIGludGVyYWN0aXZlQ29sdW1ucy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRjLnRvZ2dsZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdGl2ZUNvbHVtbnM7IiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5cbmNvbnN0IHN0YWZmQmlvcyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCB0YyA9ICB0b2dnbGVDb2x1bW5zKCk7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIGJpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZmYtYmlvJyk7XG4gICAgICAgIGJpb3MuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuc3RhZmYtYmlvLWV4cGFuZCBpbWcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGMudG9nZ2xlKGVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhZmZCaW9zOyIsImNvbnN0IHRvZ2dsZUNvbHVtbnMgPSAoZnVuY3Rpb24gKGVsKSB7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZWwpIHtcbiAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVDb2x1bW5zOyJdLCJzb3VyY2VSb290IjoiIn0=