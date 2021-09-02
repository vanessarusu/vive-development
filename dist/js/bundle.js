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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJhY3RpdmVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9qZWN0R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3BsYXNoLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YWZmQmlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RpY2t5LWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9nZ2xlQ29sdW1ucy5qcyJdLCJuYW1lcyI6WyJpYyIsImludGVyYWN0aXZlQ29sdW1ucyIsInNiIiwic3RhZmZCaW9zIiwic3AiLCJzcGxhc2hQYWdlIiwicGciLCJwcm9qZWN0R3JpZCIsInNoIiwic3RpY2t5SGVhZGVyIiwiaW5pdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJsb2FkTGVhc2luZyIsInRjIiwidG9nZ2xlQ29sdW1ucyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiQm9vbGVhbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiaW5pdGlhbGl6ZUdyaWRPdmVycmlkZXMiLCJlc3NhcGlfMV8xIiwidW5kZWZpbmVkIiwiYWxsRHJvcGRvd25zIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZCIsInNldFRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGlja2VkIiwieCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZXNyZWRyYXciLCJyZXNldFRvRmlsdGVyQWxsIiwidmlzaWJsZVRleHROb2RlIiwicGFyZW50Tm9kZSIsImlubmVyVGV4dCIsImNsaWNrTGVhc2luZyIsImJ1dHRvbiIsImNsaWNrIiwicGFyZW50RWxlbWVudCIsInBsYXlTcGxhc2hQYWdlIiwiYm9keSIsInN2Z0VsZW1lbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwib3JhbmdlIiwibGVmdEJsdWUiLCJyaWdodEJsdWUiLCJ0b3BCbHVlIiwiaGVhZGVyIiwiaGVyb0hlYWRsaW5lIiwiYWRkIiwiYmVnaW5FbGVtZW50Iiwic2hvdWxkUGxheSIsImdldEl0ZW0iLCJiaW9zIiwiaGVhZGVyU2Nyb2xsSG9vayIsImdldEVsZW1lbnRCeUlkIiwiYnJlYWtwb2ludCIsInByZXZTY3JvbGxwb3MiLCJwYWdlWU9mZnNldCIsImJyb3dzZXJIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9uc2Nyb2xsIiwiaW5uZXJXaWR0aCIsImN1cnJlbnRTY3JvbGxQb3MiLCJwb3NpdGlvbiIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FD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THJFLFFBQUksRUFBRUE7QUFERCxHQUFQO0FBR0QsQ0E5Q0Q7O0FBZ0RlRCwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoREE7QUFBQSxJQUFNUSxhQUFhLEdBQUksU0FBakJBLGFBQWlCLENBQVVPLEVBQVYsRUFBYztBQUVqQyxXQUFTSSxNQUFULENBQWdCSixFQUFoQixFQUFvQjtBQUNoQixRQUFHQSxFQUFFLENBQUNpQixTQUFILENBQWFDLFFBQWIsQ0FBc0IsTUFBdEIsQ0FBSCxFQUFrQztBQUM5QmxCLFFBQUUsQ0FBQ2lCLFNBQUgsQ0FBYUUsTUFBYixDQUFvQixNQUFwQjtBQUNILEtBRkQsTUFJSztBQUNEbkIsUUFBRSxDQUFDaUIsU0FBSCxDQUFhdUIsR0FBYixDQUFpQixNQUFqQjtBQUNIO0FBRUo7O0FBRUQsV0FBU3RELElBQVQsR0FBZ0I7QUFDWnNFLGVBQVcsQ0FBQ3hELEVBQUQsQ0FBWDtBQUNIOztBQUVELFNBQU87QUFDSEksVUFBTSxFQUFFQTtBQURMLEdBQVA7QUFHSCxDQXBCRDs7QUFzQmVYLDRFQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0IGludGVyYWN0aXZlQ29sdW1ucyBmcm9tIFwiLi9pbnRlcmFjdGl2ZUNvbHVtbnNcIjtcbmltcG9ydCBzdGFmZkJpb3MgZnJvbSBcIi4vc3RhZmZCaW9zXCI7XG5pbXBvcnQgc3BsYXNoUGFnZSBmcm9tIFwiLi9zcGxhc2gtcGFnZVwiO1xuaW1wb3J0IHByb2plY3RHcmlkIGZyb20gXCIuL3Byb2plY3RHcmlkXCI7XG5pbXBvcnQgc3RpY2t5SGVhZGVyIGZyb20gXCIuL3N0aWNreS1oZWFkZXJcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaWMgPSBpbnRlcmFjdGl2ZUNvbHVtbnMoKTtcbiAgY29uc3Qgc2IgPSBzdGFmZkJpb3MoKTtcbiAgY29uc3Qgc3AgPSBzcGxhc2hQYWdlKCk7XG4gIGNvbnN0IHBnID0gcHJvamVjdEdyaWQoKTtcbiAgY29uc3Qgc2ggPSBzdGlja3lIZWFkZXIoKTtcblxuICBpYy5pbml0KCk7XG4gIHNiLmluaXQoKTtcbiAgc3AuaW5pdCgpO1xuICBwZy5pbml0KCk7XG4gIHNoLmluaXQoKTtcblxuICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIiNhdmFpbGFibGUtbm93XCIpID49IDEpIHtcbiAgICBwZy5sb2FkTGVhc2luZygpO1xuICB9XG5cbn0pKCk7IiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5cbmNvbnN0IGludGVyYWN0aXZlQ29sdW1ucyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCB0YyA9ICB0b2dnbGVDb2x1bW5zKCk7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgaWYoQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKSkpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcmFjdGl2ZUNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJhY3RpdmUtY2FsbG91dC1jb2x1bW4nKTtcbiAgICBcbiAgICAgICAgICAgIGludGVyYWN0aXZlQ29sdW1ucy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRjLnRvZ2dsZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmFjdGl2ZUNvbHVtbnM7IiwiY29uc3QgcHJvamVjdEdyaWQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGluaXRpYWxpemVHcmlkT3ZlcnJpZGVzKCkge1xuICAgIGlmIChlc3NhcGlfMV8xID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBieSBkZWZhdWx0IHRoZSBncmlkIGRyb3Bkb3duIGFsbG93cyB5b3UgdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMgaW4gYSBkcm9wZG93blxuICAgIC8vIHdlIG9ubHkgd2FudCB0byBzZWxlY3Qgb25lIG9wdGlvbiBhdCBhIHRpbWUsIHNvIHdlIG5lZWQgdG8gZHluYW1pY2FsbHkgZGVzZWxlY3Qgd2hhdGV2ZXIgd2UgaGF2ZW4ndCBqdXN0IGNsaWNrZWQgb25cbiAgICAvLyBhcGkgaXMgbGltaXRlZCwgaGVuY2UgdGhlIHRpbWVvdXRzXG5cbiAgICAvLyBzZWxlY3QgYWxsIGRyb3Bkb3duIG9wdGlvbiB3cmFwcGVyc1xuICAgIHZhciBhbGxEcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVzZy1kcm9wZG93bi13cmFwcGVyXCIpO1xuICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgbGV0IGNoaWxkcmVuID0gZWwucXVlcnlTZWxlY3RvckFsbChcIi5lc2ctZmlsdGVyYnV0dG9uXCIpOyAvLyBhbGwgb3B0aW9uc1xuICAgICAgbGV0IHBhcmVudCA9IGVsO1xuXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyB3aGVuIHlvdSBjbGljayBhIGRyb3Bkb3duIG9wdGlvbiBjbG9zZSBhbGwgZHJvcGRvd25zXG4gICAgICAgICAgYWxsRHJvcGRvd25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGdldCBjbGlja2VkIGVsZW1lbnRcbiAgICAgICAgICBsZXQgY2xpY2tlZCA9IHRoaXM7XG4gICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIG90aGVyIGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gZW5zdXJlIGFsbCBvdGhlciBvcHRpb24gYXJlIGRlc2VsZWN0ZWRcbiAgICAgICAgICAgICAgaWYgKCEoeCA9PSBjbGlja2VkKSkge1xuICAgICAgICAgICAgICAgIGlmICh4LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IHRoZSBncmlkXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzc2FwaV8xXzEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXNzYXBpXzFfMS5lc3JlZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoXCJlc2ctYWxsZmlsdGVyXCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRUb0ZpbHRlckFsbChhbGxEcm9wZG93bnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChjbGlja2VkKSB7XG4gICAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc2V0VG9GaWx0ZXJBbGwoYWxsRHJvcGRvd25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRvRmlsdGVyQWxsKGFsbERyb3Bkb3ducykge1xuICAgIGFsbERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikgPT0gbnVsbCkge1xuICAgICAgICB2YXIgdmlzaWJsZVRleHROb2RlID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLmVzZy1zZWxlY3RlZC1maWx0ZXJidXR0b25cIlxuICAgICAgICApO1xuICAgICAgICB2aXNpYmxlVGV4dE5vZGUuaW5uZXJUZXh0ID0gZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5lc2ctYWxsZmlsdGVyIHNwYW5cIlxuICAgICAgICApLmlubmVyVGV4dDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrTGVhc2luZygpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVzZy1maWx0ZXJidXR0b25bZGF0YS1maWx0ZXI9XCJmaWx0ZXItbm93LWxlYXNpbmdcIl0nKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSwgNDAwKTsgIFxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlLWlkLTE4XCIpKSB7XG4gICAgICAgIGluaXRpYWxpemVHcmlkT3ZlcnJpZGVzKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gICAgbG9hZExlYXNpbmc6IGNsaWNrTGVhc2luZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RHcmlkO1xuIiwiY29uc3Qgc3BsYXNoUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gcGxheVNwbGFzaFBhZ2Uoc3BsYXNoUGFnZSwgYm9keSkge1xuICAgIHZhciBzdmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnRyb0FuaW1hdGlvblwiKTtcbiAgICBzdmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSdibG9jayc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoYXNWaWV3ZWRTcGxhc2hQYWdlXCIsIHRydWUpO1xuICAgIC8vIGFuaW1hdGlvblxuICAgIHZhciBvcmFuZ2UgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JhbmdldlwiKTtcbiAgICB2YXIgbGVmdEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdC1ibHVlXCIpO1xuICAgIHZhciByaWdodEJsdWUgPSBzdmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHQtYmx1ZVwiKTtcbiAgICB2YXIgdG9wQmx1ZSA9IHN2Z0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmx1ZVwiKTtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICB2YXIgaGVyb0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLWhlYWRsaW5lXCIpO1xuXG4gICAgaWYgKFxuICAgICAgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLmZsLWJ1aWxkZXItZWRpdFwiKSAmJlxuICAgICAgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VkLWluXCIpXG4gICAgKSB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB9XG4gICAgICBpZiAoaGVyb0hlYWRsaW5lKSB7XG4gICAgICAgIGhlcm9IZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICB9XG5cbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XG4gICAgICAvLyBsZWZ0IHBhbmVsIGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZWZ0Qmx1ZS5iZWdpbkVsZW1lbnQoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICAvLyByaWdodCBwYW5lbCBmYWRlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmlnaHRCbHVlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgfSwgMTIwMCk7XG4gICAgICAvLyB0b3AgcGFuZWwgZmFkZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvcEJsdWUuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAxOTAwKTtcbiAgICAgIC8vIG9yYW5nZSB2IGZhZGVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvcmFuZ2UuYmVnaW5FbGVtZW50KCk7XG4gICAgICB9LCAyNjAwKTtcbiAgICAgIC8vIGZhZGUgaW4gdGhlIGNvbnRlbnRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVyb0hlYWRsaW5lKSB7XG4gICAgICAgICAgaGVyb0hlYWRsaW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgfVxuICAgICAgfSwgNDAwMCk7XG4gICAgICAvLyBoaWRlIGVsZW1lbnQgYW5kIGFsbG93IGJvZHkgc2Nyb2xsXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3BsYXNoUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG4gICAgICAgIC8vIHNwbGFzaFBhZ2UucmVtb3ZlKCk7XG4gICAgICB9LCA1MjAwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gbG9naWNcbiAgICB2YXIgc2hvdWxkUGxheSA9ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhhc1ZpZXdlZFNwbGFzaFBhZ2VcIik7IC8vIHNldCB0byBjb29raWVzXG4gICAgdmFyIHNwbGFzaFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwbGFzaFBhZ2VcIik7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIC8vIHNwbGFzaCBwYWdlIHNob3VsZCBwbGF5XG4gICAgaWYgKHNob3VsZFBsYXkgPT0gdHJ1ZSAmJiBzcGxhc2hQYWdlKSB7XG4gICAgICBwbGF5U3BsYXNoUGFnZShzcGxhc2hQYWdlLCBib2R5KTtcbiAgICB9XG5cbiAgICAvLyBzcGxhc2ggcGFnZSBzaG91bGQgbm90IHBsYXlcbiAgICBlbHNlIHtcbiAgICAgIGlmIChzcGxhc2hQYWdlKSB7XG4gICAgICAgIHNwbGFzaFBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzcGxhc2hQYWdlO1xuIiwiaW1wb3J0IHRvZ2dsZUNvbHVtbnMgZnJvbSBcIi4vdG9nZ2xlQ29sdW1uc1wiO1xuXG5jb25zdCBzdGFmZkJpb3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRjID0gdG9nZ2xlQ29sdW1ucygpO1xuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBiaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGFmZi1iaW9cIik7XG4gICAgYmlvcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKEJvb2xlYW4oZWwucXVlcnlTZWxlY3RvcihcIi5zdGFmZi1iaW8tZXhwYW5kIGltZ1wiKSkpIHtcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvcihcIi5zdGFmZi1iaW8tZXhwYW5kIGltZ1wiKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGMudG9nZ2xlKGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFmZkJpb3M7XG4iLCJjb25zdCBzdGlja3lIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgICB2YXIgaGVhZGVyU2Nyb2xsSG9vayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXNjcm9sbC11cFwiKTtcbiAgICB2YXIgYnJlYWtwb2ludCA9IDEyMDA7XG4gICAgdmFyIHByZXZTY3JvbGxwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgdmFyIGJyb3dzZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgXG4gICAgaWYoaGVhZGVyU2Nyb2xsSG9vayA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIC8qIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyBkb3duLCBoaWRlIHRoZSBoZWFkZXIuIFdoZW4gdGhlIHVzZXIgc2Nyb2xscyB1cCwgc2hvdyB0aGUgaGVhZGVyKi9cblxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gYnJlYWtwb2ludCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHBhZ2VZT2Zmc2V0O1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxQb3MgPiBicm93c2VySGVpZ2h0IC8gNCkge1xuICAgICAgICAgIGlmIChwcmV2U2Nyb2xscG9zID4gY3VycmVudFNjcm9sbFBvcykge1xuICAgICAgICAgICAgaWYgKCFoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5jb250YWlucyhcInN0aWNreS12aXNpYmxlXCIpKSB7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LmFkZChcInN0aWNreS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5jb250YWlucyhcInN0aWNreS1oaWRlXCIpKSB7XG4gICAgICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICBoZWFkZXJTY3JvbGxIb29rLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktaGlkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LXZpc2libGVcIik7XG4gICAgICAgICAgaGVhZGVyU2Nyb2xsSG9vay5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGhlYWRlclNjcm9sbEhvb2suc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGlja3lIZWFkZXI7XG4iLCJjb25zdCB0b2dnbGVDb2x1bW5zID0gKGZ1bmN0aW9uIChlbCkge1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKGVsKSB7XG4gICAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlOiB0b2dnbGVcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQ29sdW1uczsiXSwic291cmNlUm9vdCI6IiJ9