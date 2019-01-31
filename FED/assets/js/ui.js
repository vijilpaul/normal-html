"use strict";

$(window).on("load", function () {
   
});
$(document).ready(function () {
    $('.chat__iconbox').on('click', function () {
		$(this).toggleClass('open');
        $('.chat__innerBox').toggleClass('open');
		$('.chat__innerBox').removeClass('chat__newHeight');
		$('.chat__conversationBox').hide();
		$('.chat__startBox').show();
    });
    $('.chat__new').on('click', function () {
		$('.chat__innerBox').addClass('chat__newHeight');
        $('.chat__conversationBox').fadeIn();
		$('.chat__startBox').fadeOut();
    });
	$('.chat__submit').on('click', function () {
		var afterwriteMsg = $('.chat__input').val();
		$('.chat__appendText').append('<div class="chat__usBox"><p>' + afterwriteMsg + '</p></div>').animate({scrollTop: $('.chat__usBox:last').prop("scrollHeight")}, 500);
		$('.chat__input').val('').focus();
    });
	
	
});

