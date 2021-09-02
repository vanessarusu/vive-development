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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RpY2t5LWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsInNoIiwic3RpY2t5SGVhZGVyIiwiaW5pdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJsb2FkTGVhc2luZyIsImNvbnNvbGUiLCJsb2ciLCJ0YyIsInRvZ2dsZUNvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVycyIsIkJvb2xlYW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImluaXRpYWxpemVHcmlkT3ZlcnJpZGVzIiwiZXNzYXBpXzFfMSIsInVuZGVmaW5lZCIsImFsbERyb3Bkb3ducyIsImNoaWxkcmVuIiwicGFyZW50IiwiY2hpbGQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xpY2tlZCIsIngiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImVzcmVkcmF3IiwicmVzZXRUb0ZpbHRlckFsbCIsInZpc2libGVUZXh0Tm9kZSIsInBhcmVudE5vZGUiLCJpbm5lclRleHQiLCJjbGlja0xlYXNpbmciLCJidXR0b24iLCJjbGljayIsInBhcmVudEVsZW1lbnQiLCJwbGF5U3BsYXNoUGFnZSIsImJvZHkiLCJzdmdFbGVtZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm9yYW5nZSIsImxlZnRCbHVlIiwicmlnaHRCbHVlIiwidG9wQmx1ZSIsImhlYWRlciIsImhlcm9IZWFkbGluZSIsImFkZCIsImJlZ2luRWxlbWVudCIsInNob3VsZFBsYXkiLCJnZXRJdGVtIiwiYmlvcyIsImhlYWRlclNjcm9sbEhvb2siLCJnZXRFbGVtZW50QnlJZCIsImJyZWFrcG9pbnQiLCJwcmV2U2Nyb2xscG9zIiwicGFnZVlPZmZzZXQiLCJicm93c2VySGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJvbnNjcm9sbCIsImlubmVyV2lkdGgiLCJjdXJyZW50U2Nyb2xsUG9zIiwicG9zaXRpb24iLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFD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LEdBQWtDLFVBQWxDO0FBQ0g7QUFDRixLQTFCRDtBQTJCRDs7QUFFRCxTQUFPO0FBQ0x2RSxRQUFJLEVBQUVBO0FBREQsR0FBUDtBQUdELENBNUNEOztBQThDZUQsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUEsSUFBTVUsYUFBYSxHQUFJLFNBQWpCQSxhQUFpQixDQUFVTyxFQUFWLEVBQWM7QUFFakMsV0FBU0ksTUFBVCxDQUFnQkosRUFBaEIsRUFBb0I7QUFDaEIsUUFBR0EsRUFBRSxDQUFDaUIsU0FBSCxDQUFhQyxRQUFiLENBQXNCLE1BQXRCLENBQUgsRUFBa0M7QUFDOUJsQixRQUFFLENBQUNpQixTQUFILENBQWFFLE1BQWIsQ0FBb0IsTUFBcEI7QUFDSCxLQUZELE1BSUs7QUFDRG5CLFFBQUUsQ0FBQ2lCLFNBQUgsQ0FBYXVCLEdBQWIsQ0FBaUIsTUFBakI7QUFDSDtBQUVKOztBQUVELFdBQVN4RCxJQUFULEdBQWdCO0FBQ1p3RSxlQUFXLENBQUN4RCxFQUFELENBQVg7QUFDSDs7QUFFRCxTQUFPO0FBQ0hJLFVBQU0sRUFBRUE7QUFETCxHQUFQO0FBR0gsQ0FwQkQ7O0FBc0JlWCw0RUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBpbnRlcmFjdGl2ZUNvbHVtbnMgZnJvbSBcIi4vaW50ZXJhY3RpdmVDb2x1bW5zXCI7XG5pbXBvcnQgc3RhZmZCaW9zIGZyb20gXCIuL3N0YWZmQmlvc1wiO1xuaW1wb3J0IHNwbGFzaFBhZ2UgZnJvbSBcIi4vc3BsYXNoLXBhZ2VcIjtcbmltcG9ydCBwcm9qZWN0R3JpZCBmcm9tIFwiLi9wcm9qZWN0R3JpZFwiO1xuaW1wb3J0IHN0aWNreUhlYWRlciBmcm9tIFwiLi9zdGlja3ktaGVhZGVyXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGljID0gaW50ZXJhY3RpdmVDb2x1bW5zKCk7XG4gIGNvbnN0IHNiID0gc3RhZmZCaW9zKCk7XG4gIGNvbnN0IHNwID0gc3BsYXNoUGFnZSgpO1xuICBjb25zdCBwZyA9IHByb2plY3RHcmlkKCk7XG4gIGNvbnN0IHNoID0gc3RpY2t5SGVhZGVyKCk7XG5cbiAgaWMuaW5pdCgpO1xuICBzYi5pbml0KCk7XG4gIHNwLmluaXQoKTtcbiAgcGcuaW5pdCgpO1xuICBzaC5pbml0KCk7XG5cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIjYXZhaWxhYmxlLW5vd1wiKSA+PSAxKSB7XG4gICAgcGcubG9hZExlYXNpbmcoKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCd3ZWIgZGVzaWduIGJ5IGx3ZGcuY2EuIGRldmVsb3BtZW50IGJ5IHZhbmVzc2FydXN1LmNvbScpO1xuXG59KSgpOyIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuXG5jb25zdCBpbnRlcmFjdGl2ZUNvbHVtbnMgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgdGMgPSAgdG9nZ2xlQ29sdW1ucygpO1xuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmKEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJykpKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJhY3RpdmVDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJyk7XG4gICAgXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZUNvbHVtbnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0Yy50b2dnbGUodGhpcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RpdmVDb2x1bW5zOyIsImNvbnN0IHByb2plY3RHcmlkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpIHtcbiAgICBpZiAoZXNzYXBpXzFfMSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYnkgZGVmYXVsdCB0aGUgZ3JpZCBkcm9wZG93biBhbGxvd3MgeW91IHRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zIGluIGEgZHJvcGRvd25cbiAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gc2VsZWN0IG9uZSBvcHRpb24gYXQgYSB0aW1lLCBzbyB3ZSBuZWVkIHRvIGR5bmFtaWNhbGx5IGRlc2VsZWN0IHdoYXRldmVyIHdlIGhhdmVuJ3QganVzdCBjbGlja2VkIG9uXG4gICAgLy8gYXBpIGlzIGxpbWl0ZWQsIGhlbmNlIHRoZSB0aW1lb3V0c1xuXG4gICAgLy8gc2VsZWN0IGFsbCBkcm9wZG93biBvcHRpb24gd3JhcHBlcnNcbiAgICB2YXIgYWxsRHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lc2ctZHJvcGRvd24td3JhcHBlclwiKTtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXNnLWZpbHRlcmJ1dHRvblwiKTsgLy8gYWxsIG9wdGlvbnNcbiAgICAgIGxldCBwYXJlbnQgPSBlbDtcblxuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gd2hlbiB5b3UgY2xpY2sgYSBkcm9wZG93biBvcHRpb24gY2xvc2UgYWxsIGRyb3Bkb3duc1xuICAgICAgICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBnZXQgY2xpY2tlZCBlbGVtZW50XG4gICAgICAgICAgbGV0IGNsaWNrZWQgPSB0aGlzO1xuICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBvdGhlciBkcm9wZG93biBvcHRpb25zXG4gICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIGVuc3VyZSBhbGwgb3RoZXIgb3B0aW9uIGFyZSBkZXNlbGVjdGVkXG4gICAgICAgICAgICAgIGlmICghKHggPT0gY2xpY2tlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyB0aGUgZ3JpZFxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlc3NhcGlfMV8xICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGVzc2FwaV8xXzEuZXNyZWRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXNnLWFsbGZpbHRlclwiKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoY2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpIHtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHZpc2libGVUZXh0Tm9kZSA9IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5lc2ctc2VsZWN0ZWQtZmlsdGVyYnV0dG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgdmlzaWJsZVRleHROb2RlLmlubmVyVGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuZXNnLWFsbGZpbHRlciBzcGFuXCJcbiAgICAgICAgKS5pbm5lclRleHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0xlYXNpbmcoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc2ctZmlsdGVyYnV0dG9uW2RhdGEtZmlsdGVyPVwiZmlsdGVyLW5vdy1sZWFzaW5nXCJdJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChidXR0b24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMCk7ICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZS1pZC0xOFwiKSkge1xuICAgICAgICBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIGxvYWRMZWFzaW5nOiBjbGlja0xlYXNpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0R3JpZDtcbiIsImNvbnN0IHNwbGFzaFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpIHtcbiAgICB2YXIgc3ZnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50cm9BbmltYXRpb25cIik7XG4gICAgc3ZnRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVmlld2VkU3BsYXNoUGFnZVwiLCB0cnVlKTtcbiAgICAvLyBhbmltYXRpb25cbiAgICB2YXIgb3JhbmdlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI29yYW5nZXZcIik7XG4gICAgdmFyIGxlZnRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtYmx1ZVwiKTtcbiAgICB2YXIgcmlnaHRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWJsdWVcIik7XG4gICAgdmFyIHRvcEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJsdWVcIik7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgdmFyIGhlcm9IZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyby1oZWFkbGluZVwiKTtcblxuICAgIGlmIChcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIi5mbC1idWlsZGVyLWVkaXRcIikgJiZcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlZC1pblwiKVxuICAgICkge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICBoZXJvSGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgLy8gbGVmdCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGVmdEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCA1MDApO1xuICAgICAgLy8gcmlnaHQgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJpZ2h0Qmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDEyMDApO1xuICAgICAgLy8gdG9wIHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0b3BCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMTkwMCk7XG4gICAgICAvLyBvcmFuZ2UgdiBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3JhbmdlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMjYwMCk7XG4gICAgICAvLyBmYWRlIGluIHRoZSBjb250ZW50XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICAgIGhlcm9IZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMDApO1xuICAgICAgLy8gaGlkZSBlbGVtZW50IGFuZCBhbGxvdyBib2R5IHNjcm9sbFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNwbGFzaFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgICAvLyBzcGxhc2hQYWdlLnJlbW92ZSgpO1xuICAgICAgfSwgNTIwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIGxvZ2ljXG4gICAgdmFyIHNob3VsZFBsYXkgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgcGxheVxuICAgIGlmIChzaG91bGRQbGF5ID09IHRydWUgJiYgc3BsYXNoUGFnZSkge1xuICAgICAgcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSk7XG4gICAgfVxuXG4gICAgLy8gc3BsYXNoIHBhZ2Ugc2hvdWxkIG5vdCBwbGF5XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3BsYXNoUGFnZSkge1xuICAgICAgICBzcGxhc2hQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsYXNoUGFnZTtcbiIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuY29uc3Qgc3RhZmZCaW9zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YyA9IHRvZ2dsZUNvbHVtbnMoKTtcblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgYmlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhZmYtYmlvXCIpO1xuICAgIGJpb3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChCb29sZWFuKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikpKSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRjLnRvZ2dsZShlbCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhZmZCaW9zO1xuIiwiY29uc3Qgc3RpY2t5SGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgdmFyIGhlYWRlclNjcm9sbEhvb2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zY3JvbGwtdXBcIik7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSAxMjAwO1xuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHZhciBicm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYoaGVhZGVyU2Nyb2xsSG9vayA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IGJyZWFrcG9pbnQpIHsgXG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gcGFnZVlPZmZzZXQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+IGJyb3dzZXJIZWlnaHQgLyA0KSB7XG4gICAgICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgICAgICBpZiAoIWhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RpY2t5LXZpc2libGVcIikpIHtcbiAgICAgICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1oaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RpY2t5LWhpZGVcIikpIHtcbiAgICAgICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmFkZChcInN0aWNreS1oaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktdmlzaWJsZVwiKTtcbiAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0aWNreUhlYWRlcjtcbiIsImNvbnN0IHRvZ2dsZUNvbHVtbnMgPSAoZnVuY3Rpb24gKGVsKSB7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZWwpIHtcbiAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVDb2x1bW5zOyJdLCJzb3VyY2VSb290IjoiIn0=