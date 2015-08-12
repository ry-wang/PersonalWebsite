// JavaScript Document

var main = function() {
	"use strict";
    $('.Menu').click(function() {
        $('.Navigation').animate({
            left: '5px'
        }, 200);
		$('.Menu-Close').animate({
            left: '5px'
        }, 200);
    });
	
	$('.Menu-Close').hover(function() {
		$('.Menu-Close img').attr('src', 'Images/close.png');
		}, function() {
		$('.Menu-Close img').attr('src','Images/closer.png');
	});

    $('.Menu-Close').click(function() {
        $('.Navigation').animate ({
            left: '-260px'
        }, 200);
		$('.Menu-Close').animate({
            left: '-260px'
        }, 200);
    });
};

$(document).ready(main);