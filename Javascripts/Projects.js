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
			$('#topButton').css('visibility', 'visible');
		}
		else {
			$('#topButton').css('visibility', 'hidden');
		}
	});
	
	$('#topButton').hover(
		function() {
			$('.glyphicon-arrow-up').css('color', '#45616F');
		},
		function() {
			$('.glyphicon-arrow-up').css('color', '#000');
		}
	);
	
	$('.glyphicon-arrow-left').hover(
		function() {
			$(this).css('color', '#45616F');
		},
		function() {
			$(this).css('color', '#000');
		}
	);
	
	$('.glyphicon-arrow-right').hover(
		function() {
			$(this).css('color', '#45616F');
		},
		function() {
			$(this).css('color', '#000');
		}
	);
	
	$('.glyphicon-arrow-left').click(function() {
		window.scrollTo(0,0);
	});
	$('.glyphicon-arrow-right').click(function() {
		window.scrollTo(0,0);
	});
	
	//Scroll to top
	$('#topButton').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
};

$(document).ready(main);