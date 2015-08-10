// JavaScript Document

var main = function() {
	"use strict";
    $('.Menu-Icon').click(function() {
        $('.Navigation').animate({
            left: '0px'
        }, 200);
		$('.Menu-Close').animate({
            left: '0px'
        }, 200);
        
        $('.Content').animate ({
            left: '285px'
        }, 200);
    });
    
    $('.Menu-Close').click(function() {
        $('.Navigation').animate ({
            left: '-285px'
        }, 200);
		$('.Menu-Close').animate({
            left: '-285px'
        }, 200);
        $('.Content').animate ({
            left: '0px'
        }, 200);
    });
};

$(document).ready(main);