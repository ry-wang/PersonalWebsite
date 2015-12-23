// JavaScript Document

var main = function() {
	"use strict";
	$('#Carousel').on('slide.bs.carousel', function(ev) {
		var id = ev.relatedTarget.id;
		switch (id) {
			case "1": 
				$('.carousel-1-description').css('display', 'block');
				$('.carousel-2-description').css('display', 'none');
				$('.carousel-3-description').css('display', 'none');
			break;
			case "2": 
				$('.carousel-1-description').css('display', 'none');
				$('.carousel-2-description').css('display', 'block');
				$('.carousel-3-description').css('display', 'none');
			break;
			case "3":
				$('.carousel-1-description').css('display', 'none');
				$('.carousel-2-description').css('display', 'none');
				$('.carousel-3-description').css('display', 'block');
			break;
		}
	});
	
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		console.log(scrollPosition);
		if (scrollPosition > 50) {
			$('#Carousel').carousel('pause');
		}
		else {
			$('#Carousel').carousel('cycle');
			$('#Carousel').carousel({
				interval: 3000
			});
		}
	});
	//Showing scroll up button
	$(window).scroll(function() {
		if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
			$('#topButton').css('visibility', 'visible');
		}
		else {
			$('#topButton').css('visibility', 'hidden');
		}
	});
	//Scroll to top
	$('#topButton').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
};

$(document).ready(main);