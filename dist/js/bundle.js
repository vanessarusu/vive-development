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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsImluaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwibG9hZExlYXNpbmciLCJ0YyIsInRvZ2dsZUNvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVycyIsIkJvb2xlYW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImluaXRpYWxpemVHcmlkT3ZlcnJpZGVzIiwiZXNzYXBpXzFfMSIsInVuZGVmaW5lZCIsImFsbERyb3Bkb3ducyIsImNoaWxkcmVuIiwicGFyZW50IiwiY2hpbGQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xpY2tlZCIsIngiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImVzcmVkcmF3IiwicmVzZXRUb0ZpbHRlckFsbCIsInZpc2libGVUZXh0Tm9kZSIsInBhcmVudE5vZGUiLCJpbm5lclRleHQiLCJjbGlja0xlYXNpbmciLCJidXR0b24iLCJjbGljayIsInBhcmVudEVsZW1lbnQiLCJwbGF5U3BsYXNoUGFnZSIsImJvZHkiLCJzdmdFbGVtZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm9yYW5nZSIsImxlZnRCbHVlIiwicmlnaHRCbHVlIiwidG9wQmx1ZSIsImhlYWRlciIsImhlcm9IZWFkbGluZSIsImFkZCIsImJlZ2luRWxlbWVudCIsInNob3VsZFBsYXkiLCJnZXRJdGVtIiwiYmlvcyIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFlBQVk7QUFDWCxNQUFNQSxFQUFFLEdBQUdDLG1FQUFrQixFQUE3QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsMERBQVMsRUFBcEI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLDREQUFVLEVBQXJCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyw0REFBVyxFQUF0QjtBQUVBUCxJQUFFLENBQUNRLElBQUg7QUFD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QU8sQ0FBQ0ssRUFBRSxDQUFDSCxhQUFILENBQWlCLHVCQUFqQixDQUFELENBQVgsRUFBd0Q7QUFDdERHLFVBQUUsQ0FBQ0gsYUFBSCxDQUFpQix1QkFBakIsRUFBMENJLGdCQUExQyxDQUNFLE9BREYsRUFFRSxVQUFVQyxDQUFWLEVBQWE7QUFDWEEsV0FBQyxDQUFDQyxjQUFGO0FBQ0FYLFlBQUUsQ0FBQ1ksTUFBSCxDQUFVSixFQUFWO0FBQ0QsU0FMSDtBQU9EO0FBQ0YsS0FWRDtBQVdEOztBQUVELFdBQVNkLElBQVQsR0FBZ0I7QUFDZFEscUJBQWlCO0FBQ2xCOztBQUVELFNBQU87QUFDTFIsUUFBSSxFQUFFQTtBQURELEdBQVA7QUFHRCxDQXpCRDs7QUEyQmVMLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBLElBQU1ZLGFBQWEsR0FBSSxTQUFqQkEsYUFBaUIsQ0FBVU8sRUFBVixFQUFjO0FBRWpDLFdBQVNJLE1BQVQsQ0FBZ0JKLEVBQWhCLEVBQW9CO0FBQ2hCLFFBQUdBLEVBQUUsQ0FBQ2lCLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixNQUF0QixDQUFILEVBQWtDO0FBQzlCbEIsUUFBRSxDQUFDaUIsU0FBSCxDQUFhRSxNQUFiLENBQW9CLE1BQXBCO0FBQ0gsS0FGRCxNQUlLO0FBQ0RuQixRQUFFLENBQUNpQixTQUFILENBQWF1QixHQUFiLENBQWlCLE1BQWpCO0FBQ0g7QUFFSjs7QUFFRCxXQUFTdEQsSUFBVCxHQUFnQjtBQUNaMkQsZUFBVyxDQUFDN0MsRUFBRCxDQUFYO0FBQ0g7O0FBRUQsU0FBTztBQUNISSxVQUFNLEVBQUVBO0FBREwsR0FBUDtBQUdILENBcEJEOztBQXNCZVgsNEVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgaW50ZXJhY3RpdmVDb2x1bW5zIGZyb20gXCIuL2ludGVyYWN0aXZlQ29sdW1uc1wiO1xuaW1wb3J0IHN0YWZmQmlvcyBmcm9tIFwiLi9zdGFmZkJpb3NcIjtcbmltcG9ydCBzcGxhc2hQYWdlIGZyb20gXCIuL3NwbGFzaC1wYWdlXCI7XG5pbXBvcnQgcHJvamVjdEdyaWQgZnJvbSBcIi4vcHJvamVjdEdyaWRcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaWMgPSBpbnRlcmFjdGl2ZUNvbHVtbnMoKTtcbiAgY29uc3Qgc2IgPSBzdGFmZkJpb3MoKTtcbiAgY29uc3Qgc3AgPSBzcGxhc2hQYWdlKCk7XG4gIGNvbnN0IHBnID0gcHJvamVjdEdyaWQoKTtcblxuICBpYy5pbml0KCk7XG4gIHNiLmluaXQoKTtcbiAgc3AuaW5pdCgpO1xuICBwZy5pbml0KCk7XG5cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIjYXZhaWxhYmxlLW5vd1wiKSA+PSAxKSB7XG4gICAgcGcubG9hZExlYXNpbmcoKTtcbiAgfVxufSkoKTtcblxuLy8gKGZ1bmN0aW9uKCkge1xuXG4vLyB9KSgpO1xuIiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5cbmNvbnN0IGludGVyYWN0aXZlQ29sdW1ucyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCB0YyA9ICB0b2dnbGVDb2x1bW5zKCk7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYoQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKSkpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcmFjdGl2ZUNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKTtcbiAgICBcbiAgICAgICAgICAgIGludGVyYWN0aXZlQ29sdW1ucy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRjLnRvZ2dsZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdGl2ZUNvbHVtbnM7IiwiY29uc3QgcHJvamVjdEdyaWQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGluaXRpYWxpemVHcmlkT3ZlcnJpZGVzKCkge1xuICAgIGlmIChlc3NhcGlfMV8xID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBieSBkZWZhdWx0IHRoZSBncmlkIGRyb3Bkb3duIGFsbG93cyB5b3UgdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMgaW4gYSBkcm9wZG93blxuICAgIC8vIHdlIG9ubHkgd2FudCB0byBzZWxlY3Qgb25lIG9wdGlvbiBhdCBhIHRpbWUsIHNvIHdlIG5lZWQgdG8gZHluYW1pY2FsbHkgZGVzZWxlY3Qgd2hhdGV2ZXIgd2UgaGF2ZW4ndCBqdXN0IGNsaWNrZWQgb25cbiAgICAvLyBhcGkgaXMgbGltaXRlZCwgaGVuY2UgdGhlIHRpbWVvdXRzXG5cbiAgICAvLyBzZWxlY3QgYWxsIGRyb3Bkb3duIG9wdGlvbiB3cmFwcGVyc1xuICAgIHZhciBhbGxEcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVzZy1kcm9wZG93bi13cmFwcGVyXCIpO1xuICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgbGV0IGNoaWxkcmVuID0gZWwucXVlcnlTZWxlY3RvckFsbChcIi5lc2ctZmlsdGVyYnV0dG9uXCIpOyAvLyBhbGwgb3B0aW9uc1xuICAgICAgbGV0IHBhcmVudCA9IGVsO1xuXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyB3aGVuIHlvdSBjbGljayBhIGRyb3Bkb3duIG9wdGlvbiBjbG9zZSBhbGwgZHJvcGRvd25zXG4gICAgICAgICAgYWxsRHJvcGRvd25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGdldCBjbGlja2VkIGVsZW1lbnRcbiAgICAgICAgICBsZXQgY2xpY2tlZCA9IHRoaXM7XG4gICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG90aGVyIGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gZW5zdXJlIGFsbCBvdGhlciBvcHRpb24gYXJlIGRlc2VsZWN0ZWRcbiAgICAgICAgICAgICAgaWYgKCEoeCA9PSBjbGlja2VkKSkge1xuICAgICAgICAgICAgICAgIGlmICh4LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IHRoZSBncmlkXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzc2FwaV8xXzEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXNzYXBpXzFfMS5lc3JlZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoXCJlc2ctYWxsZmlsdGVyXCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChjbGlja2VkKSB7XG4gICAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducykge1xuICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikgPT0gbnVsbCkge1xuICAgICAgICB2YXIgdmlzaWJsZVRleHROb2RlID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLmVzZy1zZWxlY3RlZC1maWx0ZXJidXR0b25cIlxuICAgICAgICApO1xuICAgICAgICB2aXNpYmxlVGV4dE5vZGUuaW5uZXJUZXh0ID0gZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5lc2ctYWxsZmlsdGVyIHNwYW5cIlxuICAgICAgICApLmlubmVyVGV4dDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrTGVhc2luZygpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVzZy1maWx0ZXJidXR0b25bZGF0YS1maWx0ZXI9XCJmaWx0ZXItbm93LWxlYXNpbmdcIl0nKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSwgNDAwKTsgIFxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlLWlkLTE4XCIpKSB7XG4gICAgICAgIGluaXRpYWxpemVHcmlkT3ZlcnJpZGVzKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgbG9hZExlYXNpbmc6IGNsaWNrTGVhc2luZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RHcmlkO1xuIiwiY29uc3Qgc3BsYXNoUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSkge1xuICAgIHZhciBzdmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnRyb0FuaW1hdGlvblwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhhc1ZpZXdlZFNwbGFzaFBhZ2VcIiwgdHJ1ZSk7XG4gICAgLy8gYW5pbWF0aW9uXG4gICAgdmFyIG9yYW5nZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmFuZ2V2XCIpO1xuICAgIHZhciBsZWZ0Qmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LWJsdWVcIik7XG4gICAgdmFyIHJpZ2h0Qmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1ibHVlXCIpO1xuICAgIHZhciB0b3BCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1ibHVlXCIpO1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIHZhciBoZXJvSGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm8taGVhZGxpbmVcIik7XG5cbiAgICBpZiAoXG4gICAgICAhYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCIuZmwtYnVpbGRlci1lZGl0XCIpICYmXG4gICAgICAhYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZWQtaW5cIilcbiAgICApIHtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZXJvSGVhZGxpbmUpIHtcbiAgICAgICAgaGVyb0hlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgIH1cblxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3BlblwiKTtcbiAgICAgIC8vIGxlZnQgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxlZnRCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgNTAwKTtcbiAgICAgIC8vIHJpZ2h0IHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByaWdodEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAxMjAwKTtcbiAgICAgIC8vIHRvcCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9wQmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDE5MDApO1xuICAgICAgLy8gb3JhbmdlIHYgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9yYW5nZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDI2MDApO1xuICAgICAgLy8gZmFkZSBpbiB0aGUgY29udGVudFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZXJvSGVhZGxpbmUpIHtcbiAgICAgICAgICBoZXJvSGVhZGxpbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICB9XG4gICAgICB9LCA0MDAwKTtcbiAgICAgIC8vIGhpZGUgZWxlbWVudCBhbmQgYWxsb3cgYm9keSBzY3JvbGxcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzcGxhc2hQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICAgICAgLy8gc3BsYXNoUGFnZS5yZW1vdmUoKTtcbiAgICAgIH0sIDUyMDApO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBsb2dpY1xuICAgIHZhciBzaG91bGRQbGF5ID0gIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGFzVmlld2VkU3BsYXNoUGFnZVwiKTsgLy8gc2V0IHRvIGNvb2tpZXNcbiAgICB2YXIgc3BsYXNoUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsYXNoUGFnZVwiKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgLy8gc3BsYXNoIHBhZ2Ugc2hvdWxkIHBsYXlcbiAgICBpZiAoc2hvdWxkUGxheSA9PSB0cnVlICYmIHNwbGFzaFBhZ2UpIHtcbiAgICAgIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpO1xuICAgIH1cblxuICAgIC8vIHNwbGFzaCBwYWdlIHNob3VsZCBub3QgcGxheVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHNwbGFzaFBhZ2UpIHtcbiAgICAgICAgc3BsYXNoUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGFzaFBhZ2U7XG4iLCJpbXBvcnQgdG9nZ2xlQ29sdW1ucyBmcm9tIFwiLi90b2dnbGVDb2x1bW5zXCI7XG5cbmNvbnN0IHN0YWZmQmlvcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGMgPSB0b2dnbGVDb2x1bW5zKCk7XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGJpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YWZmLWJpb1wiKTtcbiAgICBiaW9zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoQm9vbGVhbihlbC5xdWVyeVNlbGVjdG9yKFwiLnN0YWZmLWJpby1leHBhbmQgaW1nXCIpKSkge1xuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKFwiLnN0YWZmLWJpby1leHBhbmQgaW1nXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0Yy50b2dnbGUoZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWZmQmlvcztcbiIsImNvbnN0IHRvZ2dsZUNvbHVtbnMgPSAoZnVuY3Rpb24gKGVsKSB7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZWwpIHtcbiAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVDb2x1bW5zOyJdLCJzb3VyY2VSb290IjoiIn0=