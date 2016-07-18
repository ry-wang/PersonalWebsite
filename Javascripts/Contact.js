// JavaScript Document

function stopAnimation() {
	"use strict";
	
	$('#main').stop(true, true);
	$('#main').css('opacity', '1');
	
	$('.header').stop(true, true);
	$('.header').css('opacity', '1');
	
	$('.info').stop(true, true);
	$('.info').css('opacity', '1');
}

$(document).ready(function() {
	"use strict";
	
	$(window).click(stopAnimation);
	$(window).keypress(stopAnimation);
	$(window).scroll(stopAnimation);
	
    $('#main').animate({opacity:1}, 1000);
	$('.header').delay(1000).animate({opacity:1}, 1000);
	$('.info').delay(1000).animate({opacity:1}, 1000);
});