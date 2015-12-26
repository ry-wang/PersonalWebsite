// JavaScript Document
var main = function() {
	"use strict";
	
	//Showing scroll up button
	$(window).scroll(function() {
		if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
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
	
	//Scroll to top
	$('#topButton').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
};

$(document).ready(main);