// JavaScript Document

function stopAnimation() {
}

$(document).ready(function() {
	"use strict";
	
	$(window).click(function() {
		$('.cover-heading').stop();
		$('.cover-heading').css('opacity', '1');
		
		$('.Subtitle').stop();
		$('.Subtitle').css('opacity', '1');
		
		$('.lead').stop();
		$('.lead').css('opacity', '1');
	});
	
	$('.cover-heading').delay(10).animate({opacity:1}, 2000);
	$('.Subtitle').delay(1000).animate({opacity:1}, 2000);
	$('.lead').delay(1000).animate({opacity:1}, 2000);
	
});