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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RpY2t5LWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsInNoIiwic3RpY2t5SGVhZGVyIiwiaW5pdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJsb2FkTGVhc2luZyIsInRjIiwidG9nZ2xlQ29sdW1ucyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiQm9vbGVhbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiaW5pdGlhbGl6ZUdyaWRPdmVycmlkZXMiLCJlc3NhcGlfMV8xIiwidW5kZWZpbmVkIiwiYWxsRHJvcGRvd25zIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZCIsInNldFRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGlja2VkIiwieCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZXNyZWRyYXciLCJyZXNldFRvRmlsdGVyQWxsIiwidmlzaWJsZVRleHROb2RlIiwicGFyZW50Tm9kZSIsImlubmVyVGV4dCIsImNsaWNrTGVhc2luZyIsImJ1dHRvbiIsImNsaWNrIiwicGFyZW50RWxlbWVudCIsInBsYXlTcGxhc2hQYWdlIiwiYm9keSIsInN2Z0VsZW1lbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwib3JhbmdlIiwibGVmdEJsdWUiLCJyaWdodEJsdWUiLCJ0b3BCbHVlIiwiaGVhZGVyIiwiaGVyb0hlYWRsaW5lIiwiYWRkIiwiYmVnaW5FbGVtZW50Iiwic2hvdWxkUGxheSIsImdldEl0ZW0iLCJiaW9zIiwiaGVhZGVyU2Nyb2xsSG9vayIsImdldEVsZW1lbnRCeUlkIiwiYnJlYWtwb2ludCIsInByZXZTY3JvbGxwb3MiLCJwYWdlWU9mZnNldCIsImJyb3dzZXJIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9uc2Nyb2xsIiwiaW5uZXJXaWR0aCIsImN1cnJlbnRTY3JvbGxQb3MiLCJwb3NpdGlvbiIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FD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QUFJLEVBQUVBO0FBREQsR0FBUDtBQUdELENBNUNEOztBQThDZUQsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUEsSUFBTVEsYUFBYSxHQUFJLFNBQWpCQSxhQUFpQixDQUFVTyxFQUFWLEVBQWM7QUFFakMsV0FBU0ksTUFBVCxDQUFnQkosRUFBaEIsRUFBb0I7QUFDaEIsUUFBR0EsRUFBRSxDQUFDaUIsU0FBSCxDQUFhQyxRQUFiLENBQXNCLE1BQXRCLENBQUgsRUFBa0M7QUFDOUJsQixRQUFFLENBQUNpQixTQUFILENBQWFFLE1BQWIsQ0FBb0IsTUFBcEI7QUFDSCxLQUZELE1BSUs7QUFDRG5CLFFBQUUsQ0FBQ2lCLFNBQUgsQ0FBYXVCLEdBQWIsQ0FBaUIsTUFBakI7QUFDSDtBQUVKOztBQUVELFdBQVN0RCxJQUFULEdBQWdCO0FBQ1pzRSxlQUFXLENBQUN4RCxFQUFELENBQVg7QUFDSDs7QUFFRCxTQUFPO0FBQ0hJLFVBQU0sRUFBRUE7QUFETCxHQUFQO0FBR0gsQ0FwQkQ7O0FBc0JlWCw0RUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBpbnRlcmFjdGl2ZUNvbHVtbnMgZnJvbSBcIi4vaW50ZXJhY3RpdmVDb2x1bW5zXCI7XG5pbXBvcnQgc3RhZmZCaW9zIGZyb20gXCIuL3N0YWZmQmlvc1wiO1xuaW1wb3J0IHNwbGFzaFBhZ2UgZnJvbSBcIi4vc3BsYXNoLXBhZ2VcIjtcbmltcG9ydCBwcm9qZWN0R3JpZCBmcm9tIFwiLi9wcm9qZWN0R3JpZFwiO1xuaW1wb3J0IHN0aWNreUhlYWRlciBmcm9tIFwiLi9zdGlja3ktaGVhZGVyXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGljID0gaW50ZXJhY3RpdmVDb2x1bW5zKCk7XG4gIGNvbnN0IHNiID0gc3RhZmZCaW9zKCk7XG4gIGNvbnN0IHNwID0gc3BsYXNoUGFnZSgpO1xuICBjb25zdCBwZyA9IHByb2plY3RHcmlkKCk7XG4gIGNvbnN0IHNoID0gc3RpY2t5SGVhZGVyKCk7XG5cbiAgaWMuaW5pdCgpO1xuICBzYi5pbml0KCk7XG4gIHNwLmluaXQoKTtcbiAgcGcuaW5pdCgpO1xuICBzaC5pbml0KCk7XG5cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIjYXZhaWxhYmxlLW5vd1wiKSA+PSAxKSB7XG4gICAgcGcubG9hZExlYXNpbmcoKTtcbiAgfVxuXG59KSgpOyIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuXG5jb25zdCBpbnRlcmFjdGl2ZUNvbHVtbnMgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgdGMgPSAgdG9nZ2xlQ29sdW1ucygpO1xuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGlmKEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJykpKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJhY3RpdmVDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludGVyYWN0aXZlLWNhbGxvdXQtY29sdW1uJyk7XG4gICAgXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZUNvbHVtbnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0Yy50b2dnbGUodGhpcyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RpdmVDb2x1bW5zOyIsImNvbnN0IHByb2plY3RHcmlkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpIHtcbiAgICBpZiAoZXNzYXBpXzFfMSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYnkgZGVmYXVsdCB0aGUgZ3JpZCBkcm9wZG93biBhbGxvd3MgeW91IHRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zIGluIGEgZHJvcGRvd25cbiAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gc2VsZWN0IG9uZSBvcHRpb24gYXQgYSB0aW1lLCBzbyB3ZSBuZWVkIHRvIGR5bmFtaWNhbGx5IGRlc2VsZWN0IHdoYXRldmVyIHdlIGhhdmVuJ3QganVzdCBjbGlja2VkIG9uXG4gICAgLy8gYXBpIGlzIGxpbWl0ZWQsIGhlbmNlIHRoZSB0aW1lb3V0c1xuXG4gICAgLy8gc2VsZWN0IGFsbCBkcm9wZG93biBvcHRpb24gd3JhcHBlcnNcbiAgICB2YXIgYWxsRHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lc2ctZHJvcGRvd24td3JhcHBlclwiKTtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXNnLWZpbHRlcmJ1dHRvblwiKTsgLy8gYWxsIG9wdGlvbnNcbiAgICAgIGxldCBwYXJlbnQgPSBlbDtcblxuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gd2hlbiB5b3UgY2xpY2sgYSBkcm9wZG93biBvcHRpb24gY2xvc2UgYWxsIGRyb3Bkb3duc1xuICAgICAgICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBnZXQgY2xpY2tlZCBlbGVtZW50XG4gICAgICAgICAgbGV0IGNsaWNrZWQgPSB0aGlzO1xuICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBvdGhlciBkcm9wZG93biBvcHRpb25zXG4gICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIGVuc3VyZSBhbGwgb3RoZXIgb3B0aW9uIGFyZSBkZXNlbGVjdGVkXG4gICAgICAgICAgICAgIGlmICghKHggPT0gY2xpY2tlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyB0aGUgZ3JpZFxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlc3NhcGlfMV8xICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGVzc2FwaV8xXzEuZXNyZWRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXNnLWFsbGZpbHRlclwiKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoY2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpIHtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHZpc2libGVUZXh0Tm9kZSA9IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5lc2ctc2VsZWN0ZWQtZmlsdGVyYnV0dG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgdmlzaWJsZVRleHROb2RlLmlubmVyVGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuZXNnLWFsbGZpbHRlciBzcGFuXCJcbiAgICAgICAgKS5pbm5lclRleHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0xlYXNpbmcoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc2ctZmlsdGVyYnV0dG9uW2RhdGEtZmlsdGVyPVwiZmlsdGVyLW5vdy1sZWFzaW5nXCJdJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChidXR0b24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMCk7ICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZS1pZC0xOFwiKSkge1xuICAgICAgICBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIGxvYWRMZWFzaW5nOiBjbGlja0xlYXNpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0R3JpZDtcbiIsImNvbnN0IHNwbGFzaFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpIHtcbiAgICB2YXIgc3ZnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50cm9BbmltYXRpb25cIik7XG4gICAgc3ZnRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVmlld2VkU3BsYXNoUGFnZVwiLCB0cnVlKTtcbiAgICAvLyBhbmltYXRpb25cbiAgICB2YXIgb3JhbmdlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI29yYW5nZXZcIik7XG4gICAgdmFyIGxlZnRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtYmx1ZVwiKTtcbiAgICB2YXIgcmlnaHRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWJsdWVcIik7XG4gICAgdmFyIHRvcEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJsdWVcIik7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgdmFyIGhlcm9IZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyby1oZWFkbGluZVwiKTtcblxuICAgIGlmIChcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIi5mbC1idWlsZGVyLWVkaXRcIikgJiZcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlZC1pblwiKVxuICAgICkge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICBoZXJvSGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgLy8gbGVmdCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGVmdEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCA1MDApO1xuICAgICAgLy8gcmlnaHQgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJpZ2h0Qmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDEyMDApO1xuICAgICAgLy8gdG9wIHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0b3BCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMTkwMCk7XG4gICAgICAvLyBvcmFuZ2UgdiBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3JhbmdlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMjYwMCk7XG4gICAgICAvLyBmYWRlIGluIHRoZSBjb250ZW50XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICAgIGhlcm9IZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMDApO1xuICAgICAgLy8gaGlkZSBlbGVtZW50IGFuZCBhbGxvdyBib2R5IHNjcm9sbFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNwbGFzaFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgICAvLyBzcGxhc2hQYWdlLnJlbW92ZSgpO1xuICAgICAgfSwgNTIwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIGxvZ2ljXG4gICAgdmFyIHNob3VsZFBsYXkgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgcGxheVxuICAgIGlmIChzaG91bGRQbGF5ID09IHRydWUgJiYgc3BsYXNoUGFnZSkge1xuICAgICAgcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSk7XG4gICAgfVxuXG4gICAgLy8gc3BsYXNoIHBhZ2Ugc2hvdWxkIG5vdCBwbGF5XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3BsYXNoUGFnZSkge1xuICAgICAgICBzcGxhc2hQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsYXNoUGFnZTtcbiIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuY29uc3Qgc3RhZmZCaW9zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YyA9IHRvZ2dsZUNvbHVtbnMoKTtcblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgYmlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhZmYtYmlvXCIpO1xuICAgIGJpb3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChCb29sZWFuKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikpKSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRjLnRvZ2dsZShlbCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhZmZCaW9zO1xuIiwiY29uc3Qgc3RpY2t5SGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgdmFyIGhlYWRlclNjcm9sbEhvb2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zY3JvbGwtdXBcIik7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSAxMjAwO1xuICAgIHZhciBwcmV2U2Nyb2xscG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHZhciBicm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYoaGVhZGVyU2Nyb2xsSG9vayA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IGJyZWFrcG9pbnQpIHsgXG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gcGFnZVlPZmZzZXQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA+IGJyb3dzZXJIZWlnaHQgLyA0KSB7XG4gICAgICAgICAgaWYgKHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zKSB7XG4gICAgICAgICAgICBpZiAoIWhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RpY2t5LXZpc2libGVcIikpIHtcbiAgICAgICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1oaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RpY2t5LWhpZGVcIikpIHtcbiAgICAgICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmFkZChcInN0aWNreS1oaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktdmlzaWJsZVwiKTtcbiAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0aWNreUhlYWRlcjtcbiIsImNvbnN0IHRvZ2dsZUNvbHVtbnMgPSAoZnVuY3Rpb24gKGVsKSB7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZWwpIHtcbiAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVDb2x1bW5zOyJdLCJzb3VyY2VSb290IjoiIn0=