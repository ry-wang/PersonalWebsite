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
				$('.carousel-4-description').css('display', 'none');
			break;
			case "2": 
				$('.carousel-1-description').css('display', 'none');
				$('.carousel-2-description').css('display', 'block');
				$('.carousel-3-description').css('display', 'none');
				$('.carousel-4-description').css('display', 'none');
			break;
			case "3":
				$('.carousel-1-description').css('display', 'none');
				$('.carousel-2-description').css('display', 'none');
				$('.carousel-3-description').css('display', 'block');
				$('.carousel-4-description').css('display', 'none');
			break;
		}
	});
	
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition > 20) {
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
		if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
			$('.up-button').css('visibility', 'visible');
		}
		else {
			$('.up-button').css('visibility', 'hidden');
		}
	});
	
	$('.up-button').hover(
		function() {
			$('.glyphicon-arrow-up').css('color', '#45616F');
		},
		function() {
			$('.glyphicon-arrow-up').css('color', '#000');
		}
	);
	
	$('.left-button').hover(
		function() {
			$('.glyphicon-arrow-left').css('color', '#45616F');
		},
		function() {
			$('.glyphicon-arrow-left').css('color', '#000');
		}
	);
	
	$('.right-button').hover(
		function() {
			$('.glyphicon-arrow-right').css('color', '#45616F');
		},
		function() {
			$('.glyphicon-arrow-right').css('color', '#000');
		}
	);
	
	$('.left-button').click(function() {
		$(this).css('background-color', '#FFF');
		window.scrollTo(0,0);
	});
	$('.right-button').click(function() {
		$(this).css('background-color', '#FFF');
		window.scrollTo(0,0);
	});
	
	//Scroll to top
	$('.up-button').click(function() {
		$(this).css('background-color', '#FFF');
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
};

$(document).ready(main);