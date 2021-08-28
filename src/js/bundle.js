import interactiveColumns from "./interactiveColumns";
import staffBios from "./staffBios";
import splashPage from "./splash-page";
import projectGrid from "./projectGrid";

(function () {
  const ic = interactiveColumns();
  const sb = staffBios();
  const sp = splashPage();
  const pg = projectGrid();

  ic.init();
  sb.init();
  sp.init();
  pg.init();

  if (window.location.href.indexOf("#available-now") >= 1) {
    pg.loadLeasing();
  }
})();

// (function() {

// })();
