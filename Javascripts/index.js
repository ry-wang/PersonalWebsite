// JavaScript Document

function stopAnimation() {
	"use strict";
	
	$('.heading').stop(true, true);
	
	$('.heading-title').stop(true, true);
	$('.heading-title').css('opacity', '1');
		
	$('.heading-description').stop(true, true);
	$('.heading-description').css('opacity', '1');
}

$(document).ready(function() {
	"use strict";
	
	$('.heading').animate({opacity:1}, 2000);
	$('.heading-title').delay(1000).animate({opacity:1}, 2000);
	$('.heading-description').delay(1000).animate({opacity:1}, 2000);
	
	
	$(window).click(stopAnimation);
	$(window).scroll(stopAnimation);
	$(window).keypress(stopAnimation);
});