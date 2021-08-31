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

  if (window.location.href.indexOf("#available-now") >= 1) {
    pg.loadLeasing();
  }
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

  function clickLeasing() {
    var button = document.querySelector('.esg-filterbutton[data-filter="filter-now-leasing"]');
    setTimeout(function () {
      if (button != undefined) {
        button.click();
        button.parentElement.style.display = 'none';
      }
    }, 400);
  }

  function init() {
    setTimeout(function () {
      if (document.querySelector("body").classList.contains("page-id-18")) {
        initializeGridOverrides();
      }
    }, 1000);
  }

  return {
    init: init,
    loadLeasing: clickLeasing
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
    svgElement.style.display = 'block';
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
        body.classList.remove("modal-open"); // splashPage.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsImluaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwibG9hZExlYXNpbmciLCJ0YyIsInRvZ2dsZUNvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVycyIsIkJvb2xlYW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImluaXRpYWxpemVHcmlkT3ZlcnJpZGVzIiwiZXNzYXBpXzFfMSIsInVuZGVmaW5lZCIsImFsbERyb3Bkb3ducyIsImNoaWxkcmVuIiwicGFyZW50IiwiY2hpbGQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xpY2tlZCIsIngiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImVzcmVkcmF3IiwicmVzZXRUb0ZpbHRlckFsbCIsInZpc2libGVUZXh0Tm9kZSIsInBhcmVudE5vZGUiLCJpbm5lclRleHQiLCJjbGlja0xlYXNpbmciLCJidXR0b24iLCJjbGljayIsInBhcmVudEVsZW1lbnQiLCJwbGF5U3BsYXNoUGFnZSIsImJvZHkiLCJzdmdFbGVtZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm9yYW5nZSIsImxlZnRCbHVlIiwicmlnaHRCbHVlIiwidG9wQmx1ZSIsImhlYWRlciIsImhlcm9IZWFkbGluZSIsImFkZCIsImJlZ2luRWxlbWVudCIsInNob3VsZFBsYXkiLCJnZXRJdGVtIiwiYmlvcyIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFlBQVk7QUFDWCxNQUFNQSxFQUFFLEdBQUdDLG1FQUFrQixFQUE3QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsMERBQVMsRUFBcEI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLDREQUFVLEVBQXJCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyw0REFBVyxFQUF0QjtBQUVBUCxJQUFFLENBQUNRLElBQUg7QUFD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SSxDQUFDN0MsT0FBTCxDQUFhLFVBQUNDLEVBQUQsRUFBUTtBQUNuQixVQUFJTCxPQUFPLENBQUNLLEVBQUUsQ0FBQ0gsYUFBSCxDQUFpQix1QkFBakIsQ0FBRCxDQUFYLEVBQXdEO0FBQ3RERyxVQUFFLENBQUNILGFBQUgsQ0FBaUIsdUJBQWpCLEVBQTBDSSxnQkFBMUMsQ0FDRSxPQURGLEVBRUUsVUFBVUMsQ0FBVixFQUFhO0FBQ1hBLFdBQUMsQ0FBQ0MsY0FBRjtBQUNBWCxZQUFFLENBQUNZLE1BQUgsQ0FBVUosRUFBVjtBQUNELFNBTEg7QUFPRDtBQUNGLEtBVkQ7QUFXRDs7QUFFRCxXQUFTZCxJQUFULEdBQWdCO0FBQ2RRLHFCQUFpQjtBQUNsQjs7QUFFRCxTQUFPO0FBQ0xSLFFBQUksRUFBRUE7QUFERCxHQUFQO0FBR0QsQ0F6QkQ7O0FBMkJlTCx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQSxJQUFNWSxhQUFhLEdBQUksU0FBakJBLGFBQWlCLENBQVVPLEVBQVYsRUFBYztBQUVqQyxXQUFTSSxNQUFULENBQWdCSixFQUFoQixFQUFvQjtBQUNoQixRQUFHQSxFQUFFLENBQUNpQixTQUFILENBQWFDLFFBQWIsQ0FBc0IsTUFBdEIsQ0FBSCxFQUFrQztBQUM5QmxCLFFBQUUsQ0FBQ2lCLFNBQUgsQ0FBYUUsTUFBYixDQUFvQixNQUFwQjtBQUNILEtBRkQsTUFJSztBQUNEbkIsUUFBRSxDQUFDaUIsU0FBSCxDQUFhdUIsR0FBYixDQUFpQixNQUFqQjtBQUNIO0FBRUo7O0FBRUQsV0FBU3RELElBQVQsR0FBZ0I7QUFDWjJELGVBQVcsQ0FBQzdDLEVBQUQsQ0FBWDtBQUNIOztBQUVELFNBQU87QUFDSEksVUFBTSxFQUFFQTtBQURMLEdBQVA7QUFHSCxDQXBCRDs7QUFzQmVYLDRFQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0IGludGVyYWN0aXZlQ29sdW1ucyBmcm9tIFwiLi9pbnRlcmFjdGl2ZUNvbHVtbnNcIjtcbmltcG9ydCBzdGFmZkJpb3MgZnJvbSBcIi4vc3RhZmZCaW9zXCI7XG5pbXBvcnQgc3BsYXNoUGFnZSBmcm9tIFwiLi9zcGxhc2gtcGFnZVwiO1xuaW1wb3J0IHByb2plY3RHcmlkIGZyb20gXCIuL3Byb2plY3RHcmlkXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGljID0gaW50ZXJhY3RpdmVDb2x1bW5zKCk7XG4gIGNvbnN0IHNiID0gc3RhZmZCaW9zKCk7XG4gIGNvbnN0IHNwID0gc3BsYXNoUGFnZSgpO1xuICBjb25zdCBwZyA9IHByb2plY3RHcmlkKCk7XG5cbiAgaWMuaW5pdCgpO1xuICBzYi5pbml0KCk7XG4gIHNwLmluaXQoKTtcbiAgcGcuaW5pdCgpO1xuXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiI2F2YWlsYWJsZS1ub3dcIikgPj0gMSkge1xuICAgIHBnLmxvYWRMZWFzaW5nKCk7XG4gIH1cbn0pKCk7XG5cbi8vIChmdW5jdGlvbigpIHtcblxuLy8gfSkoKTtcbiIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuXG5jb25zdCBpbnRlcmFjdGl2ZUNvbHVtbnMgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgdGMgPSAgdG9nZ2xlQ29sdW1ucygpO1xuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmKEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJykpKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJhY3RpdmVDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJyk7XG4gICAgXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZUNvbHVtbnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0Yy50b2dnbGUodGhpcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RpdmVDb2x1bW5zOyIsImNvbnN0IHByb2plY3RHcmlkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpIHtcbiAgICBpZiAoZXNzYXBpXzFfMSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYnkgZGVmYXVsdCB0aGUgZ3JpZCBkcm9wZG93biBhbGxvd3MgeW91IHRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zIGluIGEgZHJvcGRvd25cbiAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gc2VsZWN0IG9uZSBvcHRpb24gYXQgYSB0aW1lLCBzbyB3ZSBuZWVkIHRvIGR5bmFtaWNhbGx5IGRlc2VsZWN0IHdoYXRldmVyIHdlIGhhdmVuJ3QganVzdCBjbGlja2VkIG9uXG4gICAgLy8gYXBpIGlzIGxpbWl0ZWQsIGhlbmNlIHRoZSB0aW1lb3V0c1xuXG4gICAgLy8gc2VsZWN0IGFsbCBkcm9wZG93biBvcHRpb24gd3JhcHBlcnNcbiAgICB2YXIgYWxsRHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lc2ctZHJvcGRvd24td3JhcHBlclwiKTtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXNnLWZpbHRlcmJ1dHRvblwiKTsgLy8gYWxsIG9wdGlvbnNcbiAgICAgIGxldCBwYXJlbnQgPSBlbDtcblxuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gd2hlbiB5b3UgY2xpY2sgYSBkcm9wZG93biBvcHRpb24gY2xvc2UgYWxsIGRyb3Bkb3duc1xuICAgICAgICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBnZXQgY2xpY2tlZCBlbGVtZW50XG4gICAgICAgICAgbGV0IGNsaWNrZWQgPSB0aGlzO1xuICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBvdGhlciBkcm9wZG93biBvcHRpb25zXG4gICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIGVuc3VyZSBhbGwgb3RoZXIgb3B0aW9uIGFyZSBkZXNlbGVjdGVkXG4gICAgICAgICAgICAgIGlmICghKHggPT0gY2xpY2tlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyB0aGUgZ3JpZFxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlc3NhcGlfMV8xICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGVzc2FwaV8xXzEuZXNyZWRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXNnLWFsbGZpbHRlclwiKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoY2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpIHtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHZpc2libGVUZXh0Tm9kZSA9IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5lc2ctc2VsZWN0ZWQtZmlsdGVyYnV0dG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgdmlzaWJsZVRleHROb2RlLmlubmVyVGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuZXNnLWFsbGZpbHRlciBzcGFuXCJcbiAgICAgICAgKS5pbm5lclRleHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0xlYXNpbmcoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc2ctZmlsdGVyYnV0dG9uW2RhdGEtZmlsdGVyPVwiZmlsdGVyLW5vdy1sZWFzaW5nXCJdJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChidXR0b24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMCk7ICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZS1pZC0xOFwiKSkge1xuICAgICAgICBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIGxvYWRMZWFzaW5nOiBjbGlja0xlYXNpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0R3JpZDtcbiIsImNvbnN0IHNwbGFzaFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpIHtcbiAgICB2YXIgc3ZnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50cm9BbmltYXRpb25cIik7XG4gICAgc3ZnRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVmlld2VkU3BsYXNoUGFnZVwiLCB0cnVlKTtcbiAgICAvLyBhbmltYXRpb25cbiAgICB2YXIgb3JhbmdlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI29yYW5nZXZcIik7XG4gICAgdmFyIGxlZnRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtYmx1ZVwiKTtcbiAgICB2YXIgcmlnaHRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWJsdWVcIik7XG4gICAgdmFyIHRvcEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJsdWVcIik7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgdmFyIGhlcm9IZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyby1oZWFkbGluZVwiKTtcblxuICAgIGlmIChcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIi5mbC1idWlsZGVyLWVkaXRcIikgJiZcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlZC1pblwiKVxuICAgICkge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICBoZXJvSGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgLy8gbGVmdCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGVmdEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCA1MDApO1xuICAgICAgLy8gcmlnaHQgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJpZ2h0Qmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDEyMDApO1xuICAgICAgLy8gdG9wIHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0b3BCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMTkwMCk7XG4gICAgICAvLyBvcmFuZ2UgdiBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3JhbmdlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMjYwMCk7XG4gICAgICAvLyBmYWRlIGluIHRoZSBjb250ZW50XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICAgIGhlcm9IZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMDApO1xuICAgICAgLy8gaGlkZSBlbGVtZW50IGFuZCBhbGxvdyBib2R5IHNjcm9sbFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNwbGFzaFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgICAvLyBzcGxhc2hQYWdlLnJlbW92ZSgpO1xuICAgICAgfSwgNTIwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIGxvZ2ljXG4gICAgdmFyIHNob3VsZFBsYXkgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgcGxheVxuICAgIGlmIChzaG91bGRQbGF5ID09IHRydWUgJiYgc3BsYXNoUGFnZSkge1xuICAgICAgcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSk7XG4gICAgfVxuXG4gICAgLy8gc3BsYXNoIHBhZ2Ugc2hvdWxkIG5vdCBwbGF5XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3BsYXNoUGFnZSkge1xuICAgICAgICBzcGxhc2hQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsYXNoUGFnZTtcbiIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuY29uc3Qgc3RhZmZCaW9zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YyA9IHRvZ2dsZUNvbHVtbnMoKTtcblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgYmlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhZmYtYmlvXCIpO1xuICAgIGJpb3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChCb29sZWFuKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikpKSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRjLnRvZ2dsZShlbCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhZmZCaW9zO1xuIiwiY29uc3QgdG9nZ2xlQ29sdW1ucyA9IChmdW5jdGlvbiAoZWwpIHtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZShlbCkge1xuICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZUNvbHVtbnM7Il0sInNvdXJjZVJvb3QiOiIifQ==