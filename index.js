// JavaScript Document

var main = function() {
	"use strict";
	var hackerrankDark = new Image('Images/hackerrankDark.png');
	var githubDark = new Image('Images/githubDark.png');
	var linkedinDark = new Image('Images/linkedinDark.png');
	/*preload([
		'Images/hackerrankDark.png',
		'Images/githubDark.png',
		'Images/linkedinDark.png',
	]);
	function preload(imageArray) {
		$(imageArray).each(function() {
            $('<img />').attr('src', this).appendTo('body').css('display', 'none');
        });
	}*/
	
	//Menu Animation
    $('.Menu').click(function() {
        $('.Navigation').animate({
            left: '5px'
        }, 200);
		$('.Menu-Close').animate({
            left: '5px'
        }, 200);
    });
	
	$('.Menu-Close img').hover(function() {
		$(this).attr('src', 'Images/close.png');
		}, function() {
		$(this).attr('src','Images/closer.png');
	});

    $('.Menu-Close').click(function() {
        $('.Navigation').animate ({
            left: '-260px'
        }, 200);
		$('.Menu-Close').animate({
            left: '-260px'
        }, 200);
    });
	
	//Code for changing icons
	$('#hackerrank').hover(function() {
		$(this).attr('src', 'Images/hackerrank.png');
		}, function() {
		$(this).attr('src', hackerrankDark);
	});
	$('#github').hover(function() {
		$(this).attr('src', 'Images/github.png');
		}, function() {
		$(this).attr('src', githubDark);
	});
	$('#linkedin').hover(function() {
		$(this).attr('src', 'Images/linkedin.png');
		}, function() {
		$(this).attr('src', linkedinDark);
	}); 
	
};

$(document).ready(main);