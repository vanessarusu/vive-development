const stickyHeader = function () {
  function init() {

    var headerScrollHook = document.getElementById("header-scroll-up");
    var breakpoint = 1200;
    var prevScrollpos = window.pageYOffset;
    var browserHeight = window.innerHeight;

    if(headerScrollHook == undefined) {
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
      }

      else {
          headerScrollHook.style.position = 'relative';
      }
    };
  }

  return {
    init: init,
  };
};

export default stickyHeader;
