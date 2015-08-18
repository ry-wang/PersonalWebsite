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
		checkLength();
	});
	$('#Textbox').keyup(function() {
		commentLength = $(this).val().length;
		checkLength();
	});
	
	function checkLength() {
		if ((commentLength > 0) && (emailLength > 0)) {
			$('#Submission').prop('disabled', false);
			$('#Submission').css('cursor', 'pointer');
		}
		else {
			$('#Submission').prop('disabled', true);
			$('#Submission').css('cursor', 'default');
		}
	}
	
	$('#Submission').hover(function() {
		if ($(this).is('disabled') === false) {
			$(this).css('background-color', '#7784B6');
			$(this).css('color', '#FFFFFF');
		}
		}, function() {
		if ($(this).is('disabled') === false) {
			$(this).css('background-color', '#9E9E9E');
			$(this).css('color', '#000000');
		}
	});
	
	$('#Submission').click(function() {
		/*$('#Textbox').val('');
		$('#Email').val('');
		$(this).prop('disabled', true);
		$(this).css('background-color', '#9E9E9E');
		$(this).css('color', '#000000');
		$(this).css('cursor', 'default');*/
	});
		
	
	$('#Submission').prop('disabled', true);
	
};

$(document).ready(main);