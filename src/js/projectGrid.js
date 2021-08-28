const projectGrid = function () {
  function initializeGridOverrides() {
    if (essapi_1_1 == undefined) {
      return;
    }
    // by default the grid dropdown allows you to select multiple options in a dropdown
    // we only want to select one option at a time, so we need to dynamically deselect whatever we haven't just clicked on
    // api is limited, hence the timeouts

    // select all dropdown option wrappers
    var allDropdowns = document.querySelectorAll(".esg-dropdown-wrapper");
    allDropdowns.forEach((el) => {
      let children = el.querySelectorAll(".esg-filterbutton"); // all options
      let parent = el;

      children.forEach((child) => {
        child.addEventListener("click", function (e) {
          // when you click a dropdown option close all dropdowns
          allDropdowns.forEach((el) => {
            setTimeout(function (e) {
              el.style.display = "none";
            }, 10);
          });

          // get clicked element
          let clicked = this;
          // loop through other dropdown options
          children.forEach((x) => {
            setTimeout(function () {
              // ensure all other option are deselected
              if (!(x == clicked)) {
                if (x.classList.contains("selected")) {
                  x.classList.remove("selected");

                  // redraw the grid
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
    allDropdowns.forEach((el) => {
      if (el.querySelector(".selected") == null) {
        var visibleTextNode = el.parentNode.querySelector(
          ".esg-selected-filterbutton"
        );
        visibleTextNode.innerText = el.querySelector(
          ".esg-allfilter span"
        ).innerText;
      }
    });
  }

  function clickLeasing() {
    let button = document.querySelector('.esg-filterbutton[data-filter="filter-now-leasing"]');

      setTimeout(function() {
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
    loadLeasing: clickLeasing,
  };
};

export default projectGrid;
