import toggleColumns from "./toggleColumns";

const staffBios = function () {
  const tc = toggleColumns();

  function addEventListeners() {
    var bios = document.querySelectorAll(".staff-bio");
    bios.forEach((el) => {
      el.tabIndex = 0;
      if (Boolean(el.querySelector(".staff-bio-expand img"))) {
        el.querySelector(".staff-bio-expand img").addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            tc.toggle(el);
          }
        );
      }
    });
  }

  function init() {
    addEventListeners();
  }

  return {
    init: init,
  };
};

export default staffBios;
