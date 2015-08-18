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
	
	var commentLength;
	var emailLength;
	
	$('#Email').keyup(function() {
		emailLength = $(this).val().length;
	});
	$('#Submission').keyup(function() {
		commentLength = $(this).val().length;
	});
	
	if ((commentLength > 0) && (emailLength > 0) ){
		$('#Submission').prop('disabled', true);
	}
	else {
		$('#Submission').prop('disabled', false);
	}
	
	$('#Submission').click(function() {
		$('#Textbox').val('');
		$('#Email').val('');
		$(this).prop('disabled', true);
	});
		
	
	$('#Submission').prop('disabled', false);
};

$(document).ready(main);