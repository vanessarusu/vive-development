const splashPage = function () {
  function playSplashPage(splashPage, body) {
    var svgElement = document.querySelector("#introAnimation");
    localStorage.setItem("hasViewedSplashPage", true);
    // animation
    var orange = svgElement.querySelector("#orangev");
    var leftBlue = svgElement.querySelector("#left-blue");
    var rightBlue = svgElement.querySelector("#right-blue");
    var topBlue = svgElement.querySelector("#top-blue");
    var header = document.querySelector("header");
    var heroHeadline = document.querySelector(".hero-headline");

    if (
      !body.classList.contains(".fl-builder-edit") &&
      !body.classList.contains("logged-in")
    ) {
      if (header) {
        header.classList.add("transparent");
      }
      if (heroHeadline) {
        heroHeadline.classList.add("transparent");
      }

      body.classList.add("modal-open");
      // left panel fade
      setTimeout(function () {
        leftBlue.beginElement();
      }, 500);
      // right panel fade
      setTimeout(function () {
        rightBlue.beginElement();
      }, 1200);
      // top panel fade
      setTimeout(function () {
        topBlue.beginElement();
      }, 1900);
      // orange v fade
      setTimeout(function () {
        orange.beginElement();
      }, 2600);
      // fade in the content
      setTimeout(function () {
        if (header) {
          header.classList.remove("transparent");
        }
        if (heroHeadline) {
          heroHeadline.classList.remove("transparent");
        }
      }, 4000);
      // hide element and allow body scroll
      setTimeout(function () {
        splashPage.style.display = "none";
        body.classList.remove("modal-open");
      }, 5200);
    }

  }

  function init() {
    // logic
    var shouldPlay = !localStorage.getItem("hasViewedSplashPage"); // set to cookies
    var splashPage = document.querySelector("#splashPage");
    var body = document.querySelector("body");

    // splash page should play
    if (shouldPlay == true && splashPage) {
      playSplashPage(splashPage, body);
    }

    // splash page should not play
    else {
      if (splashPage) {
        splashPage.style.display = "none";
      }
      body.classList.remove("modal-open");
    }
  }

  return {
    init: init,
  };
};

export default splashPage;
