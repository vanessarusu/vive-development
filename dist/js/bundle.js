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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RpY2t5LWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsInNoIiwic3RpY2t5SGVhZGVyIiwiaW5pdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJsb2FkTGVhc2luZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJ0YyIsInRvZ2dsZUNvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVycyIsIkJvb2xlYW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImtleUNvZGUiLCJpbml0aWFsaXplR3JpZE92ZXJyaWRlcyIsImVzc2FwaV8xXzEiLCJ1bmRlZmluZWQiLCJhbGxEcm9wZG93bnMiLCJjaGlsZHJlbiIsInBhcmVudCIsImNoaWxkIiwic2V0VGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsImNsaWNrZWQiLCJ4IiwiY29udGFpbnMiLCJlc3JlZHJhdyIsInJlc2V0VG9GaWx0ZXJBbGwiLCJ2aXNpYmxlVGV4dE5vZGUiLCJwYXJlbnROb2RlIiwiaW5uZXJUZXh0IiwiY2xpY2tMZWFzaW5nIiwiYnV0dG9uIiwiY2xpY2siLCJwYXJlbnRFbGVtZW50IiwicGxheVNwbGFzaFBhZ2UiLCJib2R5Iiwic3ZnRWxlbWVudCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJvcmFuZ2UiLCJsZWZ0Qmx1ZSIsInJpZ2h0Qmx1ZSIsInRvcEJsdWUiLCJoZWFkZXIiLCJoZXJvSGVhZGxpbmUiLCJhZGQiLCJiZWdpbkVsZW1lbnQiLCJzaG91bGRQbGF5IiwiZ2V0SXRlbSIsImJpb3MiLCJoZWFkZXJTY3JvbGxIb29rIiwiZ2V0RWxlbWVudEJ5SWQiLCJicmVha3BvaW50IiwicHJldlNjcm9sbHBvcyIsInBhZ2VZT2Zmc2V0IiwiYnJvd3NlckhlaWdodCIsImlubmVySGVpZ2h0Iiwib25zY3JvbGwiLCJpbm5lcldpZHRoIiwiY3VycmVudFNjcm9sbFBvcyIsInBvc2l0aW9uIiwidG9nZ2xlQ2xhc3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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Q0FBa0MsZ0JBQWxDO0FBQ0FxRCw4QkFBZ0IsQ0FBQ3RELFNBQWpCLENBQTJCaUQsR0FBM0IsQ0FBK0IsYUFBL0I7QUFDRDtBQUNGO0FBQ0YsU0FaRCxNQVlPO0FBQ0xLLDBCQUFnQixDQUFDdEQsU0FBakIsQ0FBMkJDLE1BQTNCLENBQWtDLGdCQUFsQztBQUNBcUQsMEJBQWdCLENBQUN0RCxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsYUFBbEM7QUFDRDs7QUFDRHdELHFCQUFhLEdBQUdNLGdCQUFoQjtBQUNELE9BcEJELE1Bc0JLO0FBQ0RULHdCQUFnQixDQUFDOUIsS0FBakIsQ0FBdUJ3QyxRQUF2QixHQUFrQyxVQUFsQztBQUNIO0FBQ0YsS0EzQkQ7QUE0QkQ7O0FBRUQsU0FBTztBQUNMeEUsUUFBSSxFQUFFQTtBQURELEdBQVA7QUFHRCxDQTVDRDs7QUE4Q2VELDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBLElBQU1jLGFBQWEsR0FBSSxTQUFqQkEsYUFBaUIsQ0FBVUssRUFBVixFQUFjO0FBRWpDLFdBQVNJLE1BQVQsQ0FBZ0JKLEVBQWhCLEVBQW9CO0FBQ2hCLFFBQUdBLEVBQUUsQ0FBQ1YsU0FBSCxDQUFhNEIsUUFBYixDQUFzQixNQUF0QixDQUFILEVBQWtDO0FBQzlCbEIsUUFBRSxDQUFDVixTQUFILENBQWFDLE1BQWIsQ0FBb0IsTUFBcEI7QUFDSCxLQUZELE1BSUs7QUFDRFMsUUFBRSxDQUFDVixTQUFILENBQWFpRCxHQUFiLENBQWlCLE1BQWpCO0FBQ0g7QUFFSjs7QUFFRCxXQUFTekQsSUFBVCxHQUFnQjtBQUNaeUUsZUFBVyxDQUFDdkQsRUFBRCxDQUFYO0FBQ0g7O0FBRUQsU0FBTztBQUNISSxVQUFNLEVBQUVBO0FBREwsR0FBUDtBQUdILENBcEJEOztBQXNCZVQsNEVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgaW50ZXJhY3RpdmVDb2x1bW5zIGZyb20gXCIuL2ludGVyYWN0aXZlQ29sdW1uc1wiO1xuaW1wb3J0IHN0YWZmQmlvcyBmcm9tIFwiLi9zdGFmZkJpb3NcIjtcbmltcG9ydCBzcGxhc2hQYWdlIGZyb20gXCIuL3NwbGFzaC1wYWdlXCI7XG5pbXBvcnQgcHJvamVjdEdyaWQgZnJvbSBcIi4vcHJvamVjdEdyaWRcIjtcbmltcG9ydCBzdGlja3lIZWFkZXIgZnJvbSBcIi4vc3RpY2t5LWhlYWRlclwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBpYyA9IGludGVyYWN0aXZlQ29sdW1ucygpO1xuICBjb25zdCBzYiA9IHN0YWZmQmlvcygpO1xuICBjb25zdCBzcCA9IHNwbGFzaFBhZ2UoKTtcbiAgY29uc3QgcGcgPSBwcm9qZWN0R3JpZCgpO1xuICBjb25zdCBzaCA9IHN0aWNreUhlYWRlcigpO1xuXG4gIGljLmluaXQoKTtcbiAgc2IuaW5pdCgpO1xuICBzcC5pbml0KCk7XG4gIHBnLmluaXQoKTtcbiAgc2guaW5pdCgpO1xuXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiI2F2YWlsYWJsZS1ub3dcIikgPj0gMSkge1xuICAgIHBnLmxvYWRMZWFzaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtaXRlbS0yOCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtbWVudS1pdGVtJyk7XG4gIH1cblxuICBjb25zb2xlLmxvZygnd2ViIGRlc2lnbiBieSBsd2RnLmNhLiBkZXZlbG9wbWVudCBieSB2YW5lc3NhcnVzdS5jb20nKTtcblxufSkoKTsiLCJpbXBvcnQgdG9nZ2xlQ29sdW1ucyBmcm9tIFwiLi90b2dnbGVDb2x1bW5zXCI7XG5cblxuY29uc3QgaW50ZXJhY3RpdmVDb2x1bW5zID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IHRjID0gIHRvZ2dsZUNvbHVtbnMoKTtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBpZihCb29sZWFuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmFjdGl2ZS1jYWxsb3V0LWNvbHVtbicpKSkge1xuICAgICAgICAgICAgdmFyIGludGVyYWN0aXZlQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmFjdGl2ZS1jYWxsb3V0LWNvbHVtbicpO1xuICAgIFxuICAgICAgICAgICAgaW50ZXJhY3RpdmVDb2x1bW5zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRjLnRvZ2dsZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBpZihlLmtleUNvZGUgPT0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGMudG9nZ2xlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RpdmVDb2x1bW5zOyIsImNvbnN0IHByb2plY3RHcmlkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpIHtcbiAgICBpZiAoZXNzYXBpXzFfMSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYnkgZGVmYXVsdCB0aGUgZ3JpZCBkcm9wZG93biBhbGxvd3MgeW91IHRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zIGluIGEgZHJvcGRvd25cbiAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gc2VsZWN0IG9uZSBvcHRpb24gYXQgYSB0aW1lLCBzbyB3ZSBuZWVkIHRvIGR5bmFtaWNhbGx5IGRlc2VsZWN0IHdoYXRldmVyIHdlIGhhdmVuJ3QganVzdCBjbGlja2VkIG9uXG4gICAgLy8gYXBpIGlzIGxpbWl0ZWQsIGhlbmNlIHRoZSB0aW1lb3V0c1xuXG4gICAgLy8gc2VsZWN0IGFsbCBkcm9wZG93biBvcHRpb24gd3JhcHBlcnNcbiAgICB2YXIgYWxsRHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lc2ctZHJvcGRvd24td3JhcHBlclwiKTtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXNnLWZpbHRlcmJ1dHRvblwiKTsgLy8gYWxsIG9wdGlvbnNcbiAgICAgIGxldCBwYXJlbnQgPSBlbDtcblxuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gd2hlbiB5b3UgY2xpY2sgYSBkcm9wZG93biBvcHRpb24gY2xvc2UgYWxsIGRyb3Bkb3duc1xuICAgICAgICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBnZXQgY2xpY2tlZCBlbGVtZW50XG4gICAgICAgICAgbGV0IGNsaWNrZWQgPSB0aGlzO1xuICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBvdGhlciBkcm9wZG93biBvcHRpb25zXG4gICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIGVuc3VyZSBhbGwgb3RoZXIgb3B0aW9uIGFyZSBkZXNlbGVjdGVkXG4gICAgICAgICAgICAgIGlmICghKHggPT0gY2xpY2tlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyB0aGUgZ3JpZFxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlc3NhcGlfMV8xICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIGVzc2FwaV8xXzEuZXNyZWRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXNnLWFsbGZpbHRlclwiKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoY2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpIHtcbiAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgdmFyIHZpc2libGVUZXh0Tm9kZSA9IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5lc2ctc2VsZWN0ZWQtZmlsdGVyYnV0dG9uXCJcbiAgICAgICAgKTtcbiAgICAgICAgdmlzaWJsZVRleHROb2RlLmlubmVyVGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuZXNnLWFsbGZpbHRlciBzcGFuXCJcbiAgICAgICAgKS5pbm5lclRleHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0xlYXNpbmcoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc2ctZmlsdGVyYnV0dG9uW2RhdGEtZmlsdGVyPVwiZmlsdGVyLW5vdy1sZWFzaW5nXCJdJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChidXR0b24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMCk7ICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZS1pZC0xOFwiKSkge1xuICAgICAgICBpbml0aWFsaXplR3JpZE92ZXJyaWRlcygpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICAgIGxvYWRMZWFzaW5nOiBjbGlja0xlYXNpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0R3JpZDtcbiIsImNvbnN0IHNwbGFzaFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpIHtcbiAgICB2YXIgc3ZnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW50cm9BbmltYXRpb25cIik7XG4gICAgc3ZnRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVmlld2VkU3BsYXNoUGFnZVwiLCB0cnVlKTtcbiAgICAvLyBhbmltYXRpb25cbiAgICB2YXIgb3JhbmdlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI29yYW5nZXZcIik7XG4gICAgdmFyIGxlZnRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtYmx1ZVwiKTtcbiAgICB2YXIgcmlnaHRCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWJsdWVcIik7XG4gICAgdmFyIHRvcEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJsdWVcIik7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgdmFyIGhlcm9IZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyby1oZWFkbGluZVwiKTtcblxuICAgIGlmIChcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIi5mbC1idWlsZGVyLWVkaXRcIikgJiZcbiAgICAgICFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlZC1pblwiKVxuICAgICkge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICBoZXJvSGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgfVxuXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgLy8gbGVmdCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGVmdEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCA1MDApO1xuICAgICAgLy8gcmlnaHQgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJpZ2h0Qmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDEyMDApO1xuICAgICAgLy8gdG9wIHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0b3BCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMTkwMCk7XG4gICAgICAvLyBvcmFuZ2UgdiBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3JhbmdlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMjYwMCk7XG4gICAgICAvLyBmYWRlIGluIHRoZSBjb250ZW50XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcm9IZWFkbGluZSkge1xuICAgICAgICAgIGhlcm9IZWFkbGluZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMDApO1xuICAgICAgLy8gaGlkZSBlbGVtZW50IGFuZCBhbGxvdyBib2R5IHNjcm9sbFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNwbGFzaFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgICAvLyBzcGxhc2hQYWdlLnJlbW92ZSgpO1xuICAgICAgfSwgNTIwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIGxvZ2ljXG4gICAgdmFyIHNob3VsZFBsYXkgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIpOyAvLyBzZXQgdG8gY29va2llc1xuICAgIHZhciBzcGxhc2hQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGxhc2hQYWdlXCIpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgcGxheVxuICAgIGlmIChzaG91bGRQbGF5ID09IHRydWUgJiYgc3BsYXNoUGFnZSkge1xuICAgICAgcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSk7XG4gICAgfVxuXG4gICAgLy8gc3BsYXNoIHBhZ2Ugc2hvdWxkIG5vdCBwbGF5XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3BsYXNoUGFnZSkge1xuICAgICAgICBzcGxhc2hQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsYXNoUGFnZTtcbiIsImltcG9ydCB0b2dnbGVDb2x1bW5zIGZyb20gXCIuL3RvZ2dsZUNvbHVtbnNcIjtcblxuY29uc3Qgc3RhZmZCaW9zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YyA9IHRvZ2dsZUNvbHVtbnMoKTtcblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgYmlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhZmYtYmlvXCIpO1xuICAgIGJpb3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChCb29sZWFuKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikpKSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZmYtYmlvLWV4cGFuZCBpbWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRjLnRvZ2dsZShlbCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhZmZCaW9zO1xuIiwiY29uc3Qgc3RpY2t5SGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBoZWFkZXJTY3JvbGxIb29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItc2Nyb2xsLXVwXCIpO1xuICAgIHZhciBicmVha3BvaW50ID0gMTIwMDtcbiAgICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB2YXIgYnJvd3NlckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmKGhlYWRlclNjcm9sbEhvb2sgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBicmVha3BvaW50KSB7IFxuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHBhZ2VZT2Zmc2V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxQb3MgPiBicm93c2VySGVpZ2h0IC8gNCkge1xuICAgICAgICAgIGlmIChwcmV2U2Nyb2xscG9zID4gY3VycmVudFNjcm9sbFBvcykge1xuICAgICAgICAgICAgaWYgKCFoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5jb250YWlucyhcInN0aWNreS12aXNpYmxlXCIpKSB7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmFkZChcInN0aWNreS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5jb250YWlucyhcInN0aWNreS1oaWRlXCIpKSB7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGlja3lIZWFkZXI7XG4iLCJjb25zdCB0b2dnbGVDb2x1bW5zID0gKGZ1bmN0aW9uIChlbCkge1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKGVsKSB7XG4gICAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlOiB0b2dnbGVcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQ29sdW1uczsiXSwic291cmNlUm9vdCI6IiJ9