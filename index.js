// JavaScript Document

var main = function() {
	"use strict";
    $('.Menu').click(function() {
        $('.Navigation').animate({
            left: '0px'
        }, 200);
		$('.Menu-Close').animate({
            left: '0px'
        }, 200);
        $('body').animate ({
            left: '250px'
        }, 200);
    });
    
    $('.Menu-Close').click(function() {
        $('.Navigation').animate ({
            left: '-250px'
        }, 200);
		$('.Menu-Close').animate({
            left: '-250px'
        }, 200);
        $('body').animate ({
            left: '0px'
        }, 200);
    });
};

$(document).ready(main);