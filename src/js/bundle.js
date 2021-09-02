import interactiveColumns from "./interactiveColumns";
import staffBios from "./staffBios";
import splashPage from "./splash-page";
import projectGrid from "./projectGrid";
import stickyHeader from "./sticky-header";

(function () {
  const ic = interactiveColumns();
  const sb = staffBios();
  const sp = splashPage();
  const pg = projectGrid();
  const sh = stickyHeader();

  ic.init();
  sb.init();
  sp.init();
  pg.init();
  sh.init();

  if (window.location.href.indexOf("#available-now") >= 1) {
    pg.loadLeasing();
  }

})();