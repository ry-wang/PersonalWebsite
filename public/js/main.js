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

  $("a[href='#contact']").click(function(e) {
    e.preventDefault();
    scrollToDiv("#contact", 2000);
  });

  $("#scroll").click(function(e) {
    e.preventDefault();
    scrollToDiv("#main", 1500);
  });

  $(window).scroll(function() {
    toggleScrollButton();
  });
});

/*          GOOGLE ANALYTICS BELOW          */

(function(i,s,o,g,r,a,m) {
  i['GoogleAnalyticsObject']=r;
  i[r]=i[r]||function() {
      (i[r].q=i[r].q||[]).push(arguments)
    },i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })

(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-89426071-1', 'auto');
ga('send', 'pageview');
