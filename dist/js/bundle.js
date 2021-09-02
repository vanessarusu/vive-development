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

    window.onscroll = function () {
      /* When the user scrolls down, hide the header. When the user scrolls up, show the header*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RpY2t5LWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsInNoIiwic3RpY2t5SGVhZGVyIiwiaW5pdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJsb2FkTGVhc2luZyIsInRjIiwidG9nZ2xlQ29sdW1ucyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiQm9vbGVhbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiaW5pdGlhbGl6ZUdyaWRPdmVycmlkZXMiLCJlc3NhcGlfMV8xIiwidW5kZWZpbmVkIiwiYWxsRHJvcGRvd25zIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZCIsInNldFRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGlja2VkIiwieCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZXNyZWRyYXciLCJyZXNldFRvRmlsdGVyQWxsIiwidmlzaWJsZVRleHROb2RlIiwicGFyZW50Tm9kZSIsImlubmVyVGV4dCIsImNsaWNrTGVhc2luZyIsImJ1dHRvbiIsImNsaWNrIiwicGFyZW50RWxlbWVudCIsInBsYXlTcGxhc2hQYWdlIiwiYm9keSIsInN2Z0VsZW1lbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwib3JhbmdlIiwibGVmdEJsdWUiLCJyaWdodEJsdWUiLCJ0b3BCbHVlIiwiaGVhZGVyIiwiaGVyb0hlYWRsaW5lIiwiYWRkIiwiYmVnaW5FbGVtZW50Iiwic2hvdWxkUGxheSIsImdldEl0ZW0iLCJiaW9zIiwiaGVhZGVyU2Nyb2xsSG9vayIsImdldEVsZW1lbnRCeUlkIiwiYnJlYWtwb2ludCIsInByZXZTY3JvbGxwb3MiLCJwYWdlWU9mZnNldCIsImJyb3dzZXJIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9uc2Nyb2xsIiwiaW5uZXJXaWR0aCIsImN1cnJlbnRTY3JvbGxQb3MiLCJwb3NpdGlvbiIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FD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LEU7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBLElBQU1RLGFBQWEsR0FBSSxTQUFqQkEsYUFBaUIsQ0FBVU8sRUFBVixFQUFjO0FBRWpDLFdBQVNJLE1BQVQsQ0FBZ0JKLEVBQWhCLEVBQW9CO0FBQ2hCLFFBQUdBLEVBQUUsQ0FBQ2lCLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixNQUF0QixDQUFILEVBQWtDO0FBQzlCbEIsUUFBRSxDQUFDaUIsU0FBSCxDQUFhRSxNQUFiLENBQW9CLE1BQXBCO0FBQ0gsS0FGRCxNQUlLO0FBQ0RuQixRQUFFLENBQUNpQixTQUFILENBQWF1QixHQUFiLENBQWlCLE1BQWpCO0FBQ0g7QUFFSjs7QUFFRCxXQUFTdEQsSUFBVCxHQUFnQjtBQUNac0UsZUFBVyxDQUFDeEQsRUFBRCxDQUFYO0FBQ0g7O0FBRUQsU0FBTztBQUNISSxVQUFNLEVBQUVBO0FBREwsR0FBUDtBQUdILENBcEJEOztBQXNCZVgsNEVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgaW50ZXJhY3RpdmVDb2x1bW5zIGZyb20gXCIuL2ludGVyYWN0aXZlQ29sdW1uc1wiO1xuaW1wb3J0IHN0YWZmQmlvcyBmcm9tIFwiLi9zdGFmZkJpb3NcIjtcbmltcG9ydCBzcGxhc2hQYWdlIGZyb20gXCIuL3NwbGFzaC1wYWdlXCI7XG5pbXBvcnQgcHJvamVjdEdyaWQgZnJvbSBcIi4vcHJvamVjdEdyaWRcIjtcbmltcG9ydCBzdGlja3lIZWFkZXIgZnJvbSBcIi4vc3RpY2t5LWhlYWRlclwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBpYyA9IGludGVyYWN0aXZlQ29sdW1ucygpO1xuICBjb25zdCBzYiA9IHN0YWZmQmlvcygpO1xuICBjb25zdCBzcCA9IHNwbGFzaFBhZ2UoKTtcbiAgY29uc3QgcGcgPSBwcm9qZWN0R3JpZCgpO1xuICBjb25zdCBzaCA9IHN0aWNreUhlYWRlcigpO1xuXG4gIGljLmluaXQoKTtcbiAgc2IuaW5pdCgpO1xuICBzcC5pbml0KCk7XG4gIHBnLmluaXQoKTtcbiAgc2guaW5pdCgpO1xuXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiI2F2YWlsYWJsZS1ub3dcIikgPj0gMSkge1xuICAgIHBnLmxvYWRMZWFzaW5nKCk7XG4gIH1cblxufSkoKTsiLCJpbXBvcnQgdG9nZ2xlQ29sdW1ucyBmcm9tIFwiLi90b2dnbGVDb2x1bW5zXCI7XG5cblxuY29uc3QgaW50ZXJhY3RpdmVDb2x1bW5zID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IHRjID0gIHRvZ2dsZUNvbHVtbnMoKTtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBpZihCb29sZWFuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmFjdGl2ZS1jYWxsb3V0LWNvbHVtbicpKSkge1xuICAgICAgICAgICAgdmFyIGludGVyYWN0aXZlQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmFjdGl2ZS1jYWxsb3V0LWNvbHVtbicpO1xuICAgIFxuICAgICAgICAgICAgaW50ZXJhY3RpdmVDb2x1bW5zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGMudG9nZ2xlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0aXZlQ29sdW1uczsiLCJjb25zdCBwcm9qZWN0R3JpZCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUdyaWRPdmVycmlkZXMoKSB7XG4gICAgaWYgKGVzc2FwaV8xXzEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGJ5IGRlZmF1bHQgdGhlIGdyaWQgZHJvcGRvd24gYWxsb3dzIHlvdSB0byBzZWxlY3QgbXVsdGlwbGUgb3B0aW9ucyBpbiBhIGRyb3Bkb3duXG4gICAgLy8gd2Ugb25seSB3YW50IHRvIHNlbGVjdCBvbmUgb3B0aW9uIGF0IGEgdGltZSwgc28gd2UgbmVlZCB0byBkeW5hbWljYWxseSBkZXNlbGVjdCB3aGF0ZXZlciB3ZSBoYXZlbid0IGp1c3QgY2xpY2tlZCBvblxuICAgIC8vIGFwaSBpcyBsaW1pdGVkLCBoZW5jZSB0aGUgdGltZW91dHNcblxuICAgIC8vIHNlbGVjdCBhbGwgZHJvcGRvd24gb3B0aW9uIHdyYXBwZXJzXG4gICAgdmFyIGFsbERyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXNnLWRyb3Bkb3duLXdyYXBwZXJcIik7XG4gICAgYWxsRHJvcGRvd25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVzZy1maWx0ZXJidXR0b25cIik7IC8vIGFsbCBvcHRpb25zXG4gICAgICBsZXQgcGFyZW50ID0gZWw7XG5cbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIHdoZW4geW91IGNsaWNrIGEgZHJvcGRvd24gb3B0aW9uIGNsb3NlIGFsbCBkcm9wZG93bnNcbiAgICAgICAgICBhbGxEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gZ2V0IGNsaWNrZWQgZWxlbWVudFxuICAgICAgICAgIGxldCBjbGlja2VkID0gdGhpcztcbiAgICAgICAgICAvLyBsb29wIHRocm91Z2ggb3RoZXIgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBlbnN1cmUgYWxsIG90aGVyIG9wdGlvbiBhcmUgZGVzZWxlY3RlZFxuICAgICAgICAgICAgICBpZiAoISh4ID09IGNsaWNrZWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAvLyByZWRyYXcgdGhlIGdyaWRcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXNzYXBpXzFfMSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBlc3NhcGlfMV8xLmVzcmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh4LmNsYXNzTGlzdC5jb250YWlucyhcImVzZy1hbGxmaWx0ZXJcIikpIHtcbiAgICAgICAgICAgICAgICByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGNsaWNrZWQpIHtcbiAgICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKSB7XG4gICAgYWxsRHJvcGRvd25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgIHZhciB2aXNpYmxlVGV4dE5vZGUgPSBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuZXNnLXNlbGVjdGVkLWZpbHRlcmJ1dHRvblwiXG4gICAgICAgICk7XG4gICAgICAgIHZpc2libGVUZXh0Tm9kZS5pbm5lclRleHQgPSBlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLmVzZy1hbGxmaWx0ZXIgc3BhblwiXG4gICAgICAgICkuaW5uZXJUZXh0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tMZWFzaW5nKCkge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXNnLWZpbHRlcmJ1dHRvbltkYXRhLWZpbHRlcj1cImZpbHRlci1ub3ctbGVhc2luZ1wiXScpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYnV0dG9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9LCA0MDApOyAgXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2UtaWQtMThcIikpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUdyaWRPdmVycmlkZXMoKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgICBsb2FkTGVhc2luZzogY2xpY2tMZWFzaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEdyaWQ7XG4iLCJjb25zdCBzcGxhc2hQYWdlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBwbGF5U3BsYXNoUGFnZShzcGxhc2hQYWdlLCBib2R5KSB7XG4gICAgdmFyIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludHJvQW5pbWF0aW9uXCIpO1xuICAgIHN2Z0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9J2Jsb2NrJztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhhc1ZpZXdlZFNwbGFzaFBhZ2VcIiwgdHJ1ZSk7XG4gICAgLy8gYW5pbWF0aW9uXG4gICAgdmFyIG9yYW5nZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmFuZ2V2XCIpO1xuICAgIHZhciBsZWZ0Qmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LWJsdWVcIik7XG4gICAgdmFyIHJpZ2h0Qmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1ibHVlXCIpO1xuICAgIHZhciB0b3BCbHVlID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1ibHVlXCIpO1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIHZhciBoZXJvSGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm8taGVhZGxpbmVcIik7XG5cbiAgICBpZiAoXG4gICAgICAhYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCIuZmwtYnVpbGRlci1lZGl0XCIpICYmXG4gICAgICAhYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZWQtaW5cIilcbiAgICApIHtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZXJvSGVhZGxpbmUpIHtcbiAgICAgICAgaGVyb0hlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgIH1cblxuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3BlblwiKTtcbiAgICAgIC8vIGxlZnQgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxlZnRCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgNTAwKTtcbiAgICAgIC8vIHJpZ2h0IHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByaWdodEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAxMjAwKTtcbiAgICAgIC8vIHRvcCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9wQmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDE5MDApO1xuICAgICAgLy8gb3JhbmdlIHYgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9yYW5nZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDI2MDApO1xuICAgICAgLy8gZmFkZSBpbiB0aGUgY29udGVudFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZXJvSGVhZGxpbmUpIHtcbiAgICAgICAgICBoZXJvSGVhZGxpbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICB9XG4gICAgICB9LCA0MDAwKTtcbiAgICAgIC8vIGhpZGUgZWxlbWVudCBhbmQgYWxsb3cgYm9keSBzY3JvbGxcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzcGxhc2hQYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICAgICAgLy8gc3BsYXNoUGFnZS5yZW1vdmUoKTtcbiAgICAgIH0sIDUyMDApO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBsb2dpY1xuICAgIHZhciBzaG91bGRQbGF5ID0gIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGFzVmlld2VkU3BsYXNoUGFnZVwiKTsgLy8gc2V0IHRvIGNvb2tpZXNcbiAgICB2YXIgc3BsYXNoUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3BsYXNoUGFnZVwiKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgLy8gc3BsYXNoIHBhZ2Ugc2hvdWxkIHBsYXlcbiAgICBpZiAoc2hvdWxkUGxheSA9PSB0cnVlICYmIHNwbGFzaFBhZ2UpIHtcbiAgICAgIHBsYXlTcGxhc2hQYWdlKHNwbGFzaFBhZ2UsIGJvZHkpO1xuICAgIH1cblxuICAgIC8vIHNwbGFzaCBwYWdlIHNob3VsZCBub3QgcGxheVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHNwbGFzaFBhZ2UpIHtcbiAgICAgICAgc3BsYXNoUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGFzaFBhZ2U7XG4iLCJpbXBvcnQgdG9nZ2xlQ29sdW1ucyBmcm9tIFwiLi90b2dnbGVDb2x1bW5zXCI7XG5cbmNvbnN0IHN0YWZmQmlvcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGMgPSB0b2dnbGVDb2x1bW5zKCk7XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGJpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YWZmLWJpb1wiKTtcbiAgICBiaW9zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoQm9vbGVhbihlbC5xdWVyeVNlbGVjdG9yKFwiLnN0YWZmLWJpby1leHBhbmQgaW1nXCIpKSkge1xuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKFwiLnN0YWZmLWJpby1leHBhbmQgaW1nXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0Yy50b2dnbGUoZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWZmQmlvcztcbiIsImNvbnN0IHN0aWNreUhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcblxuICAgIHZhciBoZWFkZXJTY3JvbGxIb29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItc2Nyb2xsLXVwXCIpO1xuICAgIHZhciBicmVha3BvaW50ID0gMTIwMDtcbiAgICB2YXIgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICB2YXIgYnJvd3NlckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIC8qIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyBkb3duLCBoaWRlIHRoZSBoZWFkZXIuIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyB1cCwgc2hvdyB0aGUgaGVhZGVyKi9cbiAgICBcblxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gYnJlYWtwb2ludCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHBhZ2VZT2Zmc2V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxQb3MgPiBicm93c2VySGVpZ2h0IC8gNCkge1xuICAgICAgICAgIGlmIChwcmV2U2Nyb2xscG9zID4gY3VycmVudFNjcm9sbFBvcykge1xuICAgICAgICAgICAgaWYgKCFoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5jb250YWlucyhcInN0aWNreS12aXNpYmxlXCIpKSB7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmFkZChcInN0aWNreS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5jb250YWlucyhcInN0aWNreS1oaWRlXCIpKSB7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGlja3lIZWFkZXI7XG4iLCJjb25zdCB0b2dnbGVDb2x1bW5zID0gKGZ1bmN0aW9uIChlbCkge1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKGVsKSB7XG4gICAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlOiB0b2dnbGVcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQ29sdW1uczsiXSwic291cmNlUm9vdCI6IiJ9