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
/* harmony import */ var _sticky_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky-header */ "./src/js/sticky-header.js");






(function () {
  var ic = Object(_interactiveColumns__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var sb = Object(_staffBios__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var sp = Object(_splash_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var pg = Object(_projectGrid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var sh = Object(_sticky_header__WEBPACK_IMPORTED_MODULE_4__["default"])();
  ic.init();
  sb.init();
  sp.init();
  pg.init();
  sh.init();

  if (window.location.href.indexOf("#available-now") >= 1) {
    pg.loadLeasing();
  } else {
    document.querySelector('#menu-item-28').classList.remove('current-menu-item');
  }

  console.log('web design by lwdg.ca. development by vanessarusu.com');
})();

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
        el.tabIndex = 0;
        el.addEventListener('click', function (e) {
          e.preventDefault();
          tc.toggle(this);
        });
        el.addEventListener('keyup', function (e) {
          if (e.keyCode == 9) {
            e.preventDefault();
            tc.toggle(this);
          }
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

/***/ "./src/js/sticky-header.js":
/*!*********************************!*\
  !*** ./src/js/sticky-header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var stickyHeader = function stickyHeader() {
  function init() {
    var headerScrollHook = document.getElementById("header-scroll-up");
    var breakpoint = 1200;
    var prevScrollpos = window.pageYOffset;
    var browserHeight = window.innerHeight;

    if (headerScrollHook == undefined) {
      return;
    }

    window.onscroll = function () {
      if (window.innerWidth > breakpoint) {
        var currentScrollPos = pageYOffset;

        if (currentScrollPos > browserHeight / 4) {
          if (prevScrollpos > currentScrollPos) {
            if (!headerScrollHook.classList.contains("sticky-visible")) {
              headerScrollHook.classList.add("sticky-visible");
              headerScrollHook.classList.remove("sticky-hide");
            }
          } else {
            if (!headerScrollHook.classList.contains("sticky-hide")) {
              headerScrollHook.classList.remove("sticky-visible");
              headerScrollHook.classList.add("sticky-hide");
            }
          }
        } else {
          headerScrollHook.classList.remove("sticky-visible");
          headerScrollHook.classList.remove("sticky-hide");
        }

        prevScrollpos = currentScrollPos;
      } else {
        headerScrollHook.style.position = 'relative';
      }
    };
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (stickyHeader);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RpY2t5LWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsInNoIiwic3RpY2t5SGVhZGVyIiwiaW5pdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJsb2FkTGVhc2luZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJ0YyIsInRvZ2dsZUNvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVycyIsIkJvb2xlYW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwidGFiSW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwia2V5Q29kZSIsImluaXRpYWxpemVHcmlkT3ZlcnJpZGVzIiwiZXNzYXBpXzFfMSIsInVuZGVmaW5lZCIsImFsbERyb3Bkb3ducyIsImNoaWxkcmVuIiwicGFyZW50IiwiY2hpbGQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xpY2tlZCIsIngiLCJjb250YWlucyIsImVzcmVkcmF3IiwicmVzZXRUb0ZpbHRlckFsbCIsInZpc2libGVUZXh0Tm9kZSIsInBhcmVudE5vZGUiLCJpbm5lclRleHQiLCJjbGlja0xlYXNpbmciLCJidXR0b24iLCJjbGljayIsInBhcmVudEVsZW1lbnQiLCJwbGF5U3BsYXNoUGFnZSIsImJvZHkiLCJzdmdFbGVtZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm9yYW5nZSIsImxlZnRCbHVlIiwicmlnaHRCbHVlIiwidG9wQmx1ZSIsImhlYWRlciIsImhlcm9IZWFkbGluZSIsImFkZCIsImJlZ2luRWxlbWVudCIsInNob3VsZFBsYXkiLCJnZXRJdGVtIiwiYmlvcyIsImhlYWRlclNjcm9sbEhvb2siLCJnZXRFbGVtZW50QnlJZCIsImJyZWFrcG9pbnQiLCJwcmV2U2Nyb2xscG9zIiwicGFnZVlPZmZzZXQiLCJicm93c2VySGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJvbnNjcm9sbCIsImlubmVyV2lkdGgiLCJjdXJyZW50U2Nyb2xsUG9zIiwicG9zaXRpb24iLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0IGludGVyYWN0aXZlQ29sdW1ucyBmcm9tIFwiLi9pbnRlcmFjdGl2ZUNvbHVtbnNcIjtcbmltcG9ydCBzdGFmZkJpb3MgZnJvbSBcIi4vc3RhZmZCaW9zXCI7XG5pbXBvcnQgc3BsYXNoUGFnZSBmcm9tIFwiLi9zcGxhc2gtcGFnZVwiO1xuaW1wb3J0IHByb2plY3RHcmlkIGZyb20gXCIuL3Byb2plY3RHcmlkXCI7XG5pbXBvcnQgc3RpY2t5SGVhZGVyIGZyb20gXCIuL3N0aWNreS1oZWFkZXJcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaWMgPSBpbnRlcmFjdGl2ZUNvbHVtbnMoKTtcbiAgY29uc3Qgc2IgPSBzdGFmZkJpb3MoKTtcbiAgY29uc3Qgc3AgPSBzcGxhc2hQYWdlKCk7XG4gIGNvbnN0IHBnID0gcHJvamVjdEdyaWQoKTtcbiAgY29uc3Qgc2ggPSBzdGlja3lIZWFkZXIoKTtcblxuICBpYy5pbml0KCk7XG4gIHNiLmluaXQoKTtcbiAgc3AuaW5pdCgpO1xuICBwZy5pbml0KCk7XG4gIHNoLmluaXQoKTtcblxuICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIiNhdmFpbGFibGUtbm93XCIpID49IDEpIHtcbiAgICBwZy5sb2FkTGVhc2luZygpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWl0ZW0tMjgnKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LW1lbnUtaXRlbScpO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ3dlYiBkZXNpZ24gYnkgbHdkZy5jYS4gZGV2ZWxvcG1lbnQgYnkgdmFuZXNzYXJ1c3UuY29tJyk7XG5cbn0pKCk7IiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5cbmNvbnN0IGludGVyYWN0aXZlQ29sdW1ucyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCB0YyA9ICB0b2dnbGVDb2x1bW5zKCk7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYoQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKSkpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcmFjdGl2ZUNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKTtcbiAgICBcbiAgICAgICAgICAgIGludGVyYWN0aXZlQ29sdW1ucy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGMudG9nZ2xlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Yy50b2dnbGUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdGl2ZUNvbHVtbnM7IiwiY29uc3QgcHJvamVjdEdyaWQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGluaXRpYWxpemVHcmlkT3ZlcnJpZGVzKCkge1xuICAgIGlmIChlc3NhcGlfMV8xID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBieSBkZWZhdWx0IHRoZSBncmlkIGRyb3Bkb3duIGFsbG93cyB5b3UgdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMgaW4gYSBkcm9wZG93blxuICAgIC8vIHdlIG9ubHkgd2FudCB0byBzZWxlY3Qgb25lIG9wdGlvbiBhdCBhIHRpbWUsIHNvIHdlIG5lZWQgdG8gZHluYW1pY2FsbHkgZGVzZWxlY3Qgd2hhdGV2ZXIgd2UgaGF2ZW4ndCBqdXN0IGNsaWNrZWQgb25cbiAgICAvLyBhcGkgaXMgbGltaXRlZCwgaGVuY2UgdGhlIHRpbWVvdXRzXG5cbiAgICAvLyBzZWxlY3QgYWxsIGRyb3Bkb3duIG9wdGlvbiB3cmFwcGVyc1xuICAgIHZhciBhbGxEcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVzZy1kcm9wZG93bi13cmFwcGVyXCIpO1xuICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgbGV0IGNoaWxkcmVuID0gZWwucXVlcnlTZWxlY3RvckFsbChcIi5lc2ctZmlsdGVyYnV0dG9uXCIpOyAvLyBhbGwgb3B0aW9uc1xuICAgICAgbGV0IHBhcmVudCA9IGVsO1xuXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyB3aGVuIHlvdSBjbGljayBhIGRyb3Bkb3duIG9wdGlvbiBjbG9zZSBhbGwgZHJvcGRvd25zXG4gICAgICAgICAgYWxsRHJvcGRvd25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGdldCBjbGlja2VkIGVsZW1lbnRcbiAgICAgICAgICBsZXQgY2xpY2tlZCA9IHRoaXM7XG4gICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG90aGVyIGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gZW5zdXJlIGFsbCBvdGhlciBvcHRpb24gYXJlIGRlc2VsZWN0ZWRcbiAgICAgICAgICAgICAgaWYgKCEoeCA9PSBjbGlja2VkKSkge1xuICAgICAgICAgICAgICAgIGlmICh4LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IHRoZSBncmlkXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzc2FwaV8xXzEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXNzYXBpXzFfMS5lc3JlZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoXCJlc2ctYWxsZmlsdGVyXCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChjbGlja2VkKSB7XG4gICAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducykge1xuICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikgPT0gbnVsbCkge1xuICAgICAgICB2YXIgdmlzaWJsZVRleHROb2RlID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLmVzZy1zZWxlY3RlZC1maWx0ZXJidXR0b25cIlxuICAgICAgICApO1xuICAgICAgICB2aXNpYmxlVGV4dE5vZGUuaW5uZXJUZXh0ID0gZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5lc2ctYWxsZmlsdGVyIHNwYW5cIlxuICAgICAgICApLmlubmVyVGV4dDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrTGVhc2luZygpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVzZy1maWx0ZXJidXR0b25bZGF0YS1maWx0ZXI9XCJmaWx0ZXItbm93LWxlYXNpbmdcIl0nKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSwgNDAwKTsgIFxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlLWlkLTE4XCIpKSB7XG4gICAgICAgIGluaXRpYWxpemVHcmlkT3ZlcnJpZGVzKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgbG9hZExlYXNpbmc6IGNsaWNrTGVhc2luZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RHcmlkO1xuIiwiY29uc3Qgc3BsYXNoUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSkge1xuICAgIHZhciBzdmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnRyb0FuaW1hdGlvblwiKTtcbiAgICBzdmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSdibG9jayc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIsIHRydWUpO1xuICAgIC8vIGFuaW1hdGlvblxuICAgIHZhciBvcmFuZ2UgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JhbmdldlwiKTtcbiAgICB2YXIgbGVmdEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdC1ibHVlXCIpO1xuICAgIHZhciByaWdodEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHQtYmx1ZVwiKTtcbiAgICB2YXIgdG9wQmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmx1ZVwiKTtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICB2YXIgaGVyb0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLWhlYWRsaW5lXCIpO1xuXG4gICAgaWYgKFxuICAgICAgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLmZsLWJ1aWxkZXItZWRpdFwiKSAmJlxuICAgICAgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VkLWluXCIpXG4gICAgKSB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB9XG4gICAgICBpZiAoaGVyb0hlYWRsaW5lKSB7XG4gICAgICAgIGhlcm9IZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB9XG5cbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XG4gICAgICAvLyBsZWZ0IHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZWZ0Qmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICAvLyByaWdodCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmlnaHRCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMTIwMCk7XG4gICAgICAvLyB0b3AgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvcEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAxOTAwKTtcbiAgICAgIC8vIG9yYW5nZSB2IGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvcmFuZ2UuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAyNjAwKTtcbiAgICAgIC8vIGZhZGUgaW4gdGhlIGNvbnRlbnRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVyb0hlYWRsaW5lKSB7XG4gICAgICAgICAgaGVyb0hlYWRsaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgNDAwMCk7XG4gICAgICAvLyBoaWRlIGVsZW1lbnQgYW5kIGFsbG93IGJvZHkgc2Nyb2xsXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3BsYXNoUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgICAgIC8vIHNwbGFzaFBhZ2UucmVtb3ZlKCk7XG4gICAgICB9LCA1MjAwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gbG9naWNcbiAgICB2YXIgc2hvdWxkUGxheSA9ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhhc1ZpZXdlZFNwbGFzaFBhZ2VcIik7IC8vIHNldCB0byBjb29raWVzXG4gICAgdmFyIHNwbGFzaFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwbGFzaFBhZ2VcIik7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIC8vIHNwbGFzaCBwYWdlIHNob3VsZCBwbGF5XG4gICAgaWYgKHNob3VsZFBsYXkgPT0gdHJ1ZSAmJiBzcGxhc2hQYWdlKSB7XG4gICAgICBwbGF5U3BsYXNoUGFnZShzcGxhc2hQYWdlLCBib2R5KTtcbiAgICB9XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgbm90IHBsYXlcbiAgICBlbHNlIHtcbiAgICAgIGlmIChzcGxhc2hQYWdlKSB7XG4gICAgICAgIHNwbGFzaFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzcGxhc2hQYWdlO1xuIiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5jb25zdCBzdGFmZkJpb3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRjID0gdG9nZ2xlQ29sdW1ucygpO1xuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBiaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGFmZi1iaW9cIik7XG4gICAgYmlvcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKEJvb2xlYW4oZWwucXVlcnlTZWxlY3RvcihcIi5zdGFmZi1iaW8tZXhwYW5kIGltZ1wiKSkpIHtcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvcihcIi5zdGFmZi1iaW8tZXhwYW5kIGltZ1wiKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGMudG9nZ2xlKGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFmZkJpb3M7XG4iLCJjb25zdCBzdGlja3lIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGhlYWRlclNjcm9sbEhvb2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zY3JvbGwtdXBcIik7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSAxMjAwO1xuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHZhciBicm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYoaGVhZGVyU2Nyb2xsSG9vayA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IGJyZWFrcG9pbnQpIHsgXG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gcGFnZVlPZmZzZXQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+IGJyb3dzZXJIZWlnaHQgLyA0KSB7XG4gICAgICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgICAgICBpZiAoIWhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RpY2t5LXZpc2libGVcIikpIHtcbiAgICAgICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1oaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RpY2t5LWhpZGVcIikpIHtcbiAgICAgICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmFkZChcInN0aWNreS1oaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktdmlzaWJsZVwiKTtcbiAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0aWNreUhlYWRlcjtcbiIsImNvbnN0IHRvZ2dsZUNvbHVtbnMgPSAoZnVuY3Rpb24gKGVsKSB7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZWwpIHtcbiAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVDb2x1bW5zOyJdLCJzb3VyY2VSb290IjoiIn0=