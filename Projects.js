// JavaScript Document

var main = function() {
	"use strict";
	$('#Carousel').on('slide.bs.carousel', function(ev) {
		var id = ev.relatedTarget.id;
		switch (id) {
			case "1": 
				$('.carousel-1-description').css('display', 'block');
				$('.carousel-2-description').css('display', 'none');
			break;
			case "2": 
				$('.carousel-1-description').css('display', 'none');
				$('.carousel-2-description').css('display', 'block');
			break;
		}
	});
	$(document).ready(main);
};