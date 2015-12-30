// JavaScript Document

function stopAnimation() {
	"use strict";
	
	$('.cover-heading').stop(true, true);
	
	$('.Subtitle').stop(true, true);
	$('.Subtitle').css('opacity', '1');
		
	$('.lead').stop(true, true);
	$('.lead').css('opacity', '1');
}

$(document).ready(function() {
	"use strict";
	
	$('.cover-heading').animate({opacity:1}, 2000);
	$('.Subtitle').delay(1000).animate({opacity:1}, 2000);
	$('.lead').delay(1000).animate({opacity:1}, 2000);
	
	
	$(window).click(stopAnimation);
	$(window).scroll(stopAnimation);
	$(window).keypress(stopAnimation);
});