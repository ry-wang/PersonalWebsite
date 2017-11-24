function scrollToDiv(div, time) {
  $("html, body").animate({
      scrollTop: $(div).offset().top + ($(div).innerHeight() - $(div).height()) / 2
  }, time);
}

$(document).ready(function() {
  "use strict";

  $("a[href='#about']").click(function(e) {
    e.preventDefault();
    scrollToDiv("#about", 1000);
  });

  $("a[href='#projects']").click(function(e) {
    e.preventDefault();
    scrollToDiv("#projects", 1500);
  });

  $("a[href='#contact']").click(function(e) {
    e.preventDefault();
    scrollToDiv("#contact", 2000);
  });
});
