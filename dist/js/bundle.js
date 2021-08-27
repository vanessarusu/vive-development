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
/* harmony import */ var _projectGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectGrid */ "./src/js/projectGrid.js");





(function () {
  var ic = Object(_interactiveColumns__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var sb = Object(_staffBios__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var sp = Object(_splash_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var pg = Object(_projectGrid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  ic.init();
  sb.init();
  sp.init();
  pg.init();
})(); // (function() {
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

/***/ "./src/js/projectGrid.js":
/*!*******************************!*\
  !*** ./src/js/projectGrid.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var projectGrid = function projectGrid() {
  function initializeGridOverrides() {
    if (essapi_1_1 == undefined) {
      return;
    } // by default the grid dropdown allows you to select multiple options in a dropdown
    // we only want to select one option at a time, so we need to dynamically deselect whatever we haven't just clicked on
    // api is limited, hence the timeouts
    // select all dropdown option wrappers


    var allDropdowns = document.querySelectorAll(".esg-dropdown-wrapper");
    allDropdowns.forEach(function (el) {
      var children = el.querySelectorAll(".esg-filterbutton"); // all options

      var parent = el;
      children.forEach(function (child) {
        child.addEventListener("click", function (e) {
          // when you click a dropdown option close all dropdowns
          allDropdowns.forEach(function (el) {
            setTimeout(function (e) {
              el.style.display = "none";
            }, 10);
          }); // get clicked element

          var clicked = this; // loop through other dropdown options

          children.forEach(function (x) {
            setTimeout(function () {
              // ensure all other option are deselected
              if (!(x == clicked)) {
                if (x.classList.contains("selected")) {
                  x.classList.remove("selected"); // redraw the grid

                  setTimeout(function () {
                    if (essapi_1_1 != undefined) {
                      essapi_1_1.esredraw();
                    }
                  }, 0);
                }
              } else if (x.classList.contains("esg-allfilter")) {
                resetToFilterAll(allDropdowns);
              }
            }, 0);
          });
          setTimeout(function (clicked) {
            if (el.querySelector(".selected") == null) {
              resetToFilterAll(allDropdowns);
            }
          }, 10);
        });
      });
    });
  }

  function resetToFilterAll(allDropdowns) {
    allDropdowns.forEach(function (el) {
      if (el.querySelector(".selected") == null) {
        var visibleTextNode = el.parentNode.querySelector(".esg-selected-filterbutton");
        visibleTextNode.innerText = el.querySelector(".esg-allfilter span").innerText;
      }
    });
  }

  function init() {
    setTimeout(function () {
      if (document.querySelector("body").classList.contains("page-id-18")) {
        initializeGridOverrides();
      }
    }, 1000);
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (projectGrid);

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
    localStorage.setItem("hasViewedSplashPage", true); // animation

    var orange = svgElement.querySelector("#orangev");
    var leftBlue = svgElement.querySelector("#left-blue");
    var rightBlue = svgElement.querySelector("#right-blue");
    var topBlue = svgElement.querySelector("#top-blue");
    var header = document.querySelector("header");
    var heroHeadline = document.querySelector(".hero-headline");

    if (!body.classList.contains(".fl-builder-edit") && !body.classList.contains("logged-in")) {
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
  }

  function init() {
    // logic
    var shouldPlay = !localStorage.getItem("hasViewedSplashPage"); // set to cookies

    var splashPage = document.querySelector("#splashPage");
    var body = document.querySelector("body"); // splash page should play

    if (shouldPlay == true && splashPage) {
      playSplashPage(splashPage, body);
    } // splash page should not play
    else {
      if (splashPage) {
        splashPage.style.display = "none";
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
    var bios = document.querySelectorAll(".staff-bio");
    bios.forEach(function (el) {
      if (Boolean(el.querySelector(".staff-bio-expand img"))) {
        el.querySelector(".staff-bio-expand img").addEventListener("click", function (e) {
          e.preventDefault();
          tc.toggle(el);
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsImluaXQiLCJ0YyIsInRvZ2dsZUNvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVycyIsIkJvb2xlYW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImluaXRpYWxpemVHcmlkT3ZlcnJpZGVzIiwiZXNzYXBpXzFfMSIsInVuZGVmaW5lZCIsImFsbERyb3Bkb3ducyIsImNoaWxkcmVuIiwicGFyZW50IiwiY2hpbGQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xpY2tlZCIsIngiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImVzcmVkcmF3IiwicmVzZXRUb0ZpbHRlckFsbCIsInZpc2libGVUZXh0Tm9kZSIsInBhcmVudE5vZGUiLCJpbm5lclRleHQiLCJwbGF5U3BsYXNoUGFnZSIsImJvZHkiLCJzdmdFbGVtZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm9yYW5nZSIsImxlZnRCbHVlIiwicmlnaHRCbHVlIiwidG9wQmx1ZSIsImhlYWRlciIsImhlcm9IZWFkbGluZSIsImFkZCIsImJlZ2luRWxlbWVudCIsInNob3VsZFBsYXkiLCJnZXRJdGVtIiwiYmlvcyIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFlBQVk7QUFDWCxNQUFNQSxFQUFFLEdBQUdDLG1FQUFrQixFQUE3QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsMERBQVMsRUFBcEI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLDREQUFVLEVBQXJCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyw0REFBVyxFQUF0QjtBQUVBUCxJQUFFLENBQUNRLElBQUg7QUFDQU4sSUFBRSxDQUFDTSxJQUFIO0FBQ0FKLElBQUUsQ0FBQ0ksSUFBSDtBQUNBRixJQUFFLENBQUNFLElBQUg7QUFFRCxDQVhELEksQ0FjQTtBQUdBLFE7Ozs7Ozs7Ozs7OztB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QUFILENBQWFFLE1BQWIsQ0FBb0IsTUFBcEI7QUFDSCxLQUZELE1BSUs7QUFDRG5CLFFBQUUsQ0FBQ2lCLFNBQUgsQ0FBYW1CLEdBQWIsQ0FBaUIsTUFBakI7QUFDSDtBQUVKOztBQUVELFdBQVM3QyxJQUFULEdBQWdCO0FBQ1prRCxlQUFXLENBQUN6QyxFQUFELENBQVg7QUFDSDs7QUFFRCxTQUFPO0FBQ0hJLFVBQU0sRUFBRUE7QUFETCxHQUFQO0FBR0gsQ0FwQkQ7O0FBc0JlWCw0RUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBpbnRlcmFjdGl2ZUNvbHVtbnMgZnJvbSBcIi4vaW50ZXJhY3RpdmVDb2x1bW5zXCI7XG5pbXBvcnQgc3RhZmZCaW9zIGZyb20gXCIuL3N0YWZmQmlvc1wiO1xuaW1wb3J0IHNwbGFzaFBhZ2UgZnJvbSAnLi9zcGxhc2gtcGFnZSc7XG5pbXBvcnQgcHJvamVjdEdyaWQgZnJvbSAnLi9wcm9qZWN0R3JpZCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGljID0gaW50ZXJhY3RpdmVDb2x1bW5zKCk7XG4gIGNvbnN0IHNiID0gc3RhZmZCaW9zKCk7XG4gIGNvbnN0IHNwID0gc3BsYXNoUGFnZSgpO1xuICBjb25zdCBwZyA9IHByb2plY3RHcmlkKCk7XG5cbiAgaWMuaW5pdCgpO1xuICBzYi5pbml0KCk7XG4gIHNwLmluaXQoKTtcbiAgcGcuaW5pdCgpO1xuXG59KSgpO1xuXG5cbi8vIChmdW5jdGlvbigpIHtcblxuICAgIFxuLy8gfSkoKTsiLCJpbXBvcnQgdG9nZ2xlQ29sdW1ucyBmcm9tIFwiLi90b2dnbGVDb2x1bW5zXCI7XG5cblxuY29uc3QgaW50ZXJhY3RpdmVDb2x1bW5zID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IHRjID0gIHRvZ2dsZUNvbHVtbnMoKTtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBpZihCb29sZWFuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmFjdGl2ZS1jYWxsb3V0LWNvbHVtbicpKSkge1xuICAgICAgICAgICAgdmFyIGludGVyYWN0aXZlQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmFjdGl2ZS1jYWxsb3V0LWNvbHVtbicpO1xuICAgIFxuICAgICAgICAgICAgaW50ZXJhY3RpdmVDb2x1bW5zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGMudG9nZ2xlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0aXZlQ29sdW1uczsiLCJjb25zdCBwcm9qZWN0R3JpZCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUdyaWRPdmVycmlkZXMoKSB7XG4gICAgaWYgKGVzc2FwaV8xXzEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGJ5IGRlZmF1bHQgdGhlIGdyaWQgZHJvcGRvd24gYWxsb3dzIHlvdSB0byBzZWxlY3QgbXVsdGlwbGUgb3B0aW9ucyBpbiBhIGRyb3Bkb3duXG4gICAgLy8gd2Ugb25seSB3YW50IHRvIHNlbGVjdCBvbmUgb3B0aW9uIGF0IGEgdGltZSwgc28gd2UgbmVlZCB0byBkeW5hbWljYWxseSBkZXNlbGVjdCB3aGF0ZXZlciB3ZSBoYXZlbid0IGp1c3QgY2xpY2tlZCBvblxuICAgIC8vIGFwaSBpcyBsaW1pdGVkLCBoZW5jZSB0aGUgdGltZW91dHNcblxuICAgIC8vIHNlbGVjdCBhbGwgZHJvcGRvd24gb3B0aW9uIHdyYXBwZXJzXG4gICAgdmFyIGFsbERyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXNnLWRyb3Bkb3duLXdyYXBwZXJcIik7XG4gICAgYWxsRHJvcGRvd25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVzZy1maWx0ZXJidXR0b25cIik7IC8vIGFsbCBvcHRpb25zXG4gICAgICBsZXQgcGFyZW50ID0gZWw7XG5cbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIHdoZW4geW91IGNsaWNrIGEgZHJvcGRvd24gb3B0aW9uIGNsb3NlIGFsbCBkcm9wZG93bnNcbiAgICAgICAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gZ2V0IGNsaWNrZWQgZWxlbWVudFxuICAgICAgICAgIGxldCBjbGlja2VkID0gdGhpcztcbiAgICAgICAgICAvLyBsb29wIHRocm91Z2ggb3RoZXIgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBlbnN1cmUgYWxsIG90aGVyIG9wdGlvbiBhcmUgZGVzZWxlY3RlZFxuICAgICAgICAgICAgICBpZiAoISh4ID09IGNsaWNrZWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAvLyByZWRyYXcgdGhlIGdyaWRcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXNzYXBpXzFfMSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBlc3NhcGlfMV8xLmVzcmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucyhcImVzZy1hbGxmaWx0ZXJcIikpIHtcbiAgICAgICAgICAgICAgICByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGNsaWNrZWQpIHtcbiAgICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKSB7XG4gICAgYWxsRHJvcGRvd25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHZhciB2aXNpYmxlVGV4dE5vZGUgPSBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuZXNnLXNlbGVjdGVkLWZpbHRlcmJ1dHRvblwiXG4gICAgICAgICk7XG4gICAgICAgIHZpc2libGVUZXh0Tm9kZS5pbm5lclRleHQgPSBlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLmVzZy1hbGxmaWx0ZXIgc3BhblwiXG4gICAgICAgICkuaW5uZXJUZXh0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlLWlkLTE4XCIpKSB7XG4gICAgICAgIGluaXRpYWxpemVHcmlkT3ZlcnJpZGVzKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0R3JpZDtcbiIsImNvbnN0IHNwbGFzaFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpIHtcbiAgICB2YXIgc3ZnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50cm9BbmltYXRpb25cIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIsIHRydWUpO1xuICAgIC8vIGFuaW1hdGlvblxuICAgIHZhciBvcmFuZ2UgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JhbmdldlwiKTtcbiAgICB2YXIgbGVmdEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdC1ibHVlXCIpO1xuICAgIHZhciByaWdodEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHQtYmx1ZVwiKTtcbiAgICB2YXIgdG9wQmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmx1ZVwiKTtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICB2YXIgaGVyb0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLWhlYWRsaW5lXCIpO1xuXG4gICAgaWYgKFxuICAgICAgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLmZsLWJ1aWxkZXItZWRpdFwiKSAmJlxuICAgICAgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VkLWluXCIpXG4gICAgKSB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB9XG4gICAgICBpZiAoaGVyb0hlYWRsaW5lKSB7XG4gICAgICAgIGhlcm9IZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB9XG5cbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XG4gICAgICAvLyBsZWZ0IHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZWZ0Qmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICAvLyByaWdodCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmlnaHRCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMTIwMCk7XG4gICAgICAvLyB0b3AgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvcEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAxOTAwKTtcbiAgICAgIC8vIG9yYW5nZSB2IGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvcmFuZ2UuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAyNjAwKTtcbiAgICAgIC8vIGZhZGUgaW4gdGhlIGNvbnRlbnRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVyb0hlYWRsaW5lKSB7XG4gICAgICAgICAgaGVyb0hlYWRsaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgNDAwMCk7XG4gICAgICAvLyBoaWRlIGVsZW1lbnQgYW5kIGFsbG93IGJvZHkgc2Nyb2xsXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3BsYXNoUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgICB9LCA1MjAwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gbG9naWNcbiAgICB2YXIgc2hvdWxkUGxheSA9ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhhc1ZpZXdlZFNwbGFzaFBhZ2VcIik7IC8vIHNldCB0byBjb29raWVzXG4gICAgdmFyIHNwbGFzaFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwbGFzaFBhZ2VcIik7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIC8vIHNwbGFzaCBwYWdlIHNob3VsZCBwbGF5XG4gICAgaWYgKHNob3VsZFBsYXkgPT0gdHJ1ZSAmJiBzcGxhc2hQYWdlKSB7XG4gICAgICBwbGF5U3BsYXNoUGFnZShzcGxhc2hQYWdlLCBib2R5KTtcbiAgICB9XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgbm90IHBsYXlcbiAgICBlbHNlIHtcbiAgICAgIGlmIChzcGxhc2hQYWdlKSB7XG4gICAgICAgIHNwbGFzaFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzcGxhc2hQYWdlO1xuIiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5jb25zdCBzdGFmZkJpb3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRjID0gdG9nZ2xlQ29sdW1ucygpO1xuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBiaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGFmZi1iaW9cIik7XG4gICAgYmlvcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKEJvb2xlYW4oZWwucXVlcnlTZWxlY3RvcihcIi5zdGFmZi1iaW8tZXhwYW5kIGltZ1wiKSkpIHtcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvcihcIi5zdGFmZi1iaW8tZXhwYW5kIGltZ1wiKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGMudG9nZ2xlKGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFmZkJpb3M7XG4iLCJjb25zdCB0b2dnbGVDb2x1bW5zID0gKGZ1bmN0aW9uIChlbCkge1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKGVsKSB7XG4gICAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlOiB0b2dnbGVcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQ29sdW1uczsiXSwic291cmNlUm9vdCI6IiJ9