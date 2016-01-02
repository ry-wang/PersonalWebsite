// JavaScript Document

function stopAnimation() {
	"use strict";
	
	$('#title').stop(true, true);
	$('#title').css('opacity', '1');
	
	$('.main').stop(true, true);
	$('.main').css('opacity', '1');
	
	$('.content').stop(true, true);
	$('.content').css('opacity', '1');
}

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
	
	$(window).scroll(function() {
		var elementTop = $('#awards').offset().top;
		//var elementBottom = $('#awards').offset().top + $('#awards').outerHeight();
		var screenBottom = $(window).scrollTop() + $(window).height();
		
		if ((screenBottom > elementTop)) {
			console.log(1);
			$('#awards').animate({opacity:1}, 1000);
		}
		else {
			console.log(2);
			$('#awards').css('opacity', '0');
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

$(document).ready(function() {
	"use strict";
	
	$(window).click(stopAnimation);
	$(window).keypress(stopAnimation);
	console.log(10);
	$(window).scroll(stopAnimation);
	
	$('#title').animate({opacity:1}, 1000);
	$('.main').delay(1000).animate({opacity:1}, 1000);
	$('.content').delay(1000).animate({opacity:1}, 1000);
});

$(document).ready(main);