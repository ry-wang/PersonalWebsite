// JavaScript Document

var main = function() {
	"use strict";
	
	//Code for slide-in menu
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
	
	//Code for feedback from below
	
	var commentLength = $('#Submission').val().length;
	var emailLength = $('#Email').val().length;
	
	$('#Submission').click(function() {
		$(this).val('');
		$(this).addClass('disabled');
	});
	
	$('#Submission').keyup(function() {
		commentLength = $(this).val().length;
	});
	$('#Email').keyup(function() {
		emailLength = $(this).val().length;
	});
	
	if ((commentLength > 0) && (emailLength > 0) ){
		$('#Submission').addClass('enabled');
	}
	else {
		$('#Submission').addClass('disabled');
	}
		
	
	$('#Submission').addClass('disabled');
};

$(document).ready(main);