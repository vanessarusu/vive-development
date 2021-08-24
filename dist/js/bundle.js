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
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-page */ "./src/js/splash-page.js");




(function () {
  var ic = Object(_interactiveColumns__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var sb = Object(_staffBios__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var sp = Object(_splash_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
  ic.init();
  sb.init();
  sp.init();
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

/***/ "./src/js/splash-page.js":
/*!*******************************!*\
  !*** ./src/js/splash-page.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var splashPage = function splashPage() {
  function playSplashPage(splashPage, body) {
    var svgElement = document.querySelector("#introAnimation");
    sessionStorage.setItem("hasViewedSplashPage", true); // animation

    svgElement.addEventListener("load", function () {
      var orange = svgElement.querySelector("#orangev");
      var leftBlue = svgElement.querySelector("#left-blue");
      var rightBlue = svgElement.querySelector("#right-blue");
      var topBlue = svgElement.querySelector("#top-blue");
      var header = document.querySelector("header");
      var heroHeadline = document.querySelector(".hero-headline");

      if (!body.classList.contains(".fl-builder-edit")) {
        if (header) {
          header.classList.add("transparent");
        }

        if (heroHeadline) {
          heroHeadline.classList.add("transparent");
        }

        body.classList.add("modal-open"); // left panel fade

        setTimeout(function () {
          leftBlue.beginElement();
        }, 500); // right panel fade

        setTimeout(function () {
          rightBlue.beginElement();
        }, 1200); // top panel fade

        setTimeout(function () {
          topBlue.beginElement();
        }, 1900); // orange v fade

        setTimeout(function () {
          orange.beginElement();
        }, 2600); // fade in the content

        setTimeout(function () {
          if (header) {
            header.classList.remove("transparent");
          }

          if (heroHeadline) {
            heroHeadline.classList.remove("transparent");
          }
        }, 4000); // hide element and allow body scroll

        setTimeout(function () {
          splashPage.style.display = "none";
          body.classList.remove("modal-open");
        }, 5200);
      }
    });
  }

  function init() {
    // logic
    var shouldPlay = !sessionStorage.getItem("hasViewedSplashPage"); // set to cookies

    var splashPage = document.querySelector("#splashPage");
    var body = document.querySelector("body"); // splash page should play

    if (shouldPlay && splashPage) {
      playSplashPage(splashPage, body);
    } // splash page should not play
    else {
      if (splashPage) {
        splashPage.style.display = 'none';
      }

      body.classList.remove("modal-open");
    }
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (splashPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zcGxhc2gtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RhZmZCaW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90b2dnbGVDb2x1bW5zLmpzIl0sIm5hbWVzIjpbImljIiwiaW50ZXJhY3RpdmVDb2x1bW5zIiwic2IiLCJzdGFmZkJpb3MiLCJzcCIsInNwbGFzaFBhZ2UiLCJpbml0IiwidGMiLCJ0b2dnbGVDb2x1bW5zIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJCb29sZWFuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGUiLCJwbGF5U3BsYXNoUGFnZSIsImJvZHkiLCJzdmdFbGVtZW50Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwib3JhbmdlIiwibGVmdEJsdWUiLCJyaWdodEJsdWUiLCJ0b3BCbHVlIiwiaGVhZGVyIiwiaGVyb0hlYWRsaW5lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJzZXRUaW1lb3V0IiwiYmVnaW5FbGVtZW50IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvdWxkUGxheSIsImdldEl0ZW0iLCJiaW9zIiwidG9nZ2xlQ2xhc3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUEwQ0ksZ0JBQTFDLENBQTJELE9BQTNELEVBQW9FLFVBQVNDLENBQVQsRUFBWTtBQUM1RUEsU0FBQyxDQUFDQyxjQUFGO0FBQ0FYLFVBQUUsQ0FBQ1ksTUFBSCxDQUFVSixFQUFWO0FBQ0gsT0FIRDtBQUlQLEtBTEc7QUFNSDs7QUFFRCxXQUFTVCxJQUFULEdBQWdCO0FBQ1pHLHFCQUFpQjtBQUNwQjs7QUFFRCxTQUFPO0FBQ0hILFFBQUksRUFBRUE7QUFESCxHQUFQO0FBR0gsQ0FyQkQ7O0FBdUJlSCx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQSxJQUFNSyxhQUFhLEdBQUksU0FBakJBLGFBQWlCLENBQVVPLEVBQVYsRUFBYztBQUVqQyxXQUFTSSxNQUFULENBQWdCSixFQUFoQixFQUFvQjtBQUNoQixRQUFHQSxFQUFFLENBQUNnQixTQUFILENBQWFDLFFBQWIsQ0FBc0IsTUFBdEIsQ0FBSCxFQUFrQztBQUM5QmpCLFFBQUUsQ0FBQ2dCLFNBQUgsQ0FBYUssTUFBYixDQUFvQixNQUFwQjtBQUNILEtBRkQsTUFJSztBQUNEckIsUUFBRSxDQUFDZ0IsU0FBSCxDQUFhRSxHQUFiLENBQWlCLE1BQWpCO0FBQ0g7QUFFSjs7QUFFRCxXQUFTM0IsSUFBVCxHQUFnQjtBQUNab0MsZUFBVyxDQUFDM0IsRUFBRCxDQUFYO0FBQ0g7O0FBRUQsU0FBTztBQUNISSxVQUFNLEVBQUVBO0FBREwsR0FBUDtBQUdILENBcEJEOztBQXNCZVgsNEVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgaW50ZXJhY3RpdmVDb2x1bW5zIGZyb20gXCIuL2ludGVyYWN0aXZlQ29sdW1uc1wiO1xuaW1wb3J0IHN0YWZmQmlvcyBmcm9tIFwiLi9zdGFmZkJpb3NcIjtcbmltcG9ydCBzcGxhc2hQYWdlIGZyb20gJy4vc3BsYXNoLXBhZ2UnO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBpYyA9IGludGVyYWN0aXZlQ29sdW1ucygpO1xuICBjb25zdCBzYiA9IHN0YWZmQmlvcygpO1xuICBjb25zdCBzcCA9IHNwbGFzaFBhZ2UoKTtcblxuICBpYy5pbml0KCk7XG4gIHNiLmluaXQoKTtcbiAgc3AuaW5pdCgpO1xuXG59KSgpO1xuXG5cbi8vIChmdW5jdGlvbigpe1xuLy8gICAgIGNvbnNvbGUubG9nKCdob2xhJyk7XG4vLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgaWYoQm9vbGVhbihfTjJbJyNuMi1zcy01J10pKSB7XG4vLyAgICAgICAgICAgICAvLyB3aW5kb3dbJ24yLXNzLTUnXSA9IDI7XG4vLyAgICAgICAgIC8vICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbjItc3MtNSAubmV4dGVuZC1hcnJvdy1uZXh0XCIpLmNsaWNrKCk7XG4vLyAgICAgICAgICAgICAvLyBfTjIucignI24yLXNzLTUnLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIC8vICAgICB2YXIgc2xpZGVyID0gX04yWycjbjItc3MtNSddO1xuLy8gICAgICAgICAgICAgLy8gICAgIHNsaWRlci5uZXh0KCk7XG4vLyAgICAgICAgICAgICAvLyB9KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0sIDEwMDApO1xuLy8gfSkoKTtcbiIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuXG5jb25zdCBpbnRlcmFjdGl2ZUNvbHVtbnMgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgdGMgPSAgdG9nZ2xlQ29sdW1ucygpO1xuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmKEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJykpKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJhY3RpdmVDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJyk7XG4gICAgXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZUNvbHVtbnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0Yy50b2dnbGUodGhpcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RpdmVDb2x1bW5zOyIsImNvbnN0IHNwbGFzaFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSkge1xuICAgICAgICB2YXIgc3ZnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50cm9BbmltYXRpb25cIik7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIsIHRydWUpO1xuXG4gICAgICAvLyBhbmltYXRpb25cbiAgICAgIHN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3JhbmdlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI29yYW5nZXZcIik7XG4gICAgICAgIHZhciBsZWZ0Qmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LWJsdWVcIik7XG4gICAgICAgIHZhciByaWdodEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHQtYmx1ZVwiKTtcbiAgICAgICAgdmFyIHRvcEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJsdWVcIik7XG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgICAgICB2YXIgaGVyb0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLWhlYWRsaW5lXCIpO1xuXG4gICAgICAgIGlmICghYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCIuZmwtYnVpbGRlci1lZGl0XCIpKSB7XG4gICAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICAgICAgaGVyb0hlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgICAgIC8vIGxlZnQgcGFuZWwgZmFkZVxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGVmdEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAvLyByaWdodCBwYW5lbCBmYWRlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByaWdodEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICAgICAgfSwgMTIwMCk7XG4gICAgICAgICAgLy8gdG9wIHBhbmVsIGZhZGVcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRvcEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICAgICAgfSwgMTkwMCk7XG4gICAgICAgICAgLy8gb3JhbmdlIHYgZmFkZVxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3JhbmdlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgICAgIH0sIDI2MDApO1xuICAgICAgICAgIC8vIGZhZGUgaW4gdGhlIGNvbnRlbnRcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoZXJvSGVhZGxpbmUpIHtcbiAgICAgICAgICAgICAgaGVyb0hlYWRsaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgICAvLyBoaWRlIGVsZW1lbnQgYW5kIGFsbG93IGJvZHkgc2Nyb2xsXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzcGxhc2hQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgICAgICAgfSwgNTIwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBsb2dpY1xuICAgIHZhciBzaG91bGRQbGF5ID0gIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgcGxheVxuICAgIGlmIChzaG91bGRQbGF5ICYmIHNwbGFzaFBhZ2UpIHtcbiAgICAgIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpO1xuICAgIH1cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgbm90IHBsYXlcbiAgICBlbHNlIHtcbiAgICAgICAgaWYoc3BsYXNoUGFnZSkge1xuICAgICAgICAgICAgc3BsYXNoUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsYXNoUGFnZTsiLCJpbXBvcnQgdG9nZ2xlQ29sdW1ucyBmcm9tIFwiLi90b2dnbGVDb2x1bW5zXCI7XG5cblxuY29uc3Qgc3RhZmZCaW9zID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IHRjID0gIHRvZ2dsZUNvbHVtbnMoKTtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgYmlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFmZi1iaW8nKTtcbiAgICAgICAgYmlvcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5zdGFmZi1iaW8tZXhwYW5kIGltZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0Yy50b2dnbGUoZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSkgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdGFmZkJpb3M7IiwiY29uc3QgdG9nZ2xlQ29sdW1ucyA9IChmdW5jdGlvbiAoZWwpIHtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZShlbCkge1xuICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZUNvbHVtbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==