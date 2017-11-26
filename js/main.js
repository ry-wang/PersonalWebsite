function scrollToDiv(div, time) {
  $("html, body").animate({
      scrollTop: $(div).offset().top + ($(div).innerHeight() - $(div).height()) / 2
  }, time);
}

function toggleScrollButton() {
  if ($(window).scrollTop() > $("#main").outerHeight() / 2) {
    $("#scroll").css("display", "inline-block");
  } else {
    $("#scroll").css("display", "none");
  }
}

$(document).ready(function() {
  "use strict";

  toggleScrollButton();

  $("a[href='#about']").click(function(e) {
    e.preventDefault();
    scrollToDiv("#about", 1000);
  });

  $("a[href='#projects']").click(function(e) {
    e.preventDefault();
    scrollToDiv("#projects", 1500);
  });

  $("#scroll").click(function(e) {
    e.preventDefault();
    scrollToDiv("#main", 1500);
  });

  $(window).scroll(function() {
    toggleScrollButton();
  });
});

