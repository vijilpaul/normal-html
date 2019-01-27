"use strict";

$(window).on("load", function () {
    
});

$(document).ready(function () {
    /* placeholder text */
	$('body').on('change keyup focusin','input.req',function(){
		var thisval = $(this).val();
		$(this).closest('.input__sec').addClass('focused');
	});
	
	$('body').on('change keyup blur','input.req',function(){
		var thisval = $(this).val();
		if(thisval == ""){
			$(this).closest('.input__sec').removeClass('focused');
		}
	});
	//image upload
	function readURL(input) {
	  if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
		  //$('#blah').attr('src', e.target.result);
		  $('.img__viewsec').css('background-image', 'url(' + e.target.result + ')');
		}
		reader.readAsDataURL(input.files[0]);
	  }
	}
	$("#image-upload").change(function() {
		var ext = $('#image-upload').val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['png','jpg','jpeg']) == -1) {
			alert('Please upload only image(jpg, png)');
		} else{
			readURL(this);
			$('.img__photoSlider').slick('slickGoTo', 0);
		}
	});
});
//Login Validation
function loginValidate(){
	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if($('.input-email').val() == ""){
		$('.input-email').next().html("Please enter the email address");
		$('.input-email').focus();
		return false;
		
	}	
	if(!emailRegex.test($('.input-email').val())){
		$('.input-email').next().html("Please enter the valid email address");
		$('.input-email').focus();
		return false;
		
	}		
	if($('.input-password').val() == ""){
		$('.input-email').next().html("");
		$('.input-password').next().html("Please enter the Password");
		$('.input-password').focus();
		return false;
	}
	return true;
}

//SignUp form
function signupValidate(){
	//bool isValid = true;
	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var numeric = /^[\-\+]?[\d\,]*\.?[\d]*$/;
	if($('.input-name').val() == ""){
		$('.input-name').next().html("Please enter the name");
		$('.input-name').focus();
		return false;
	}
	if($('.input-mail').val() == ""){
		$('.input-name').next().html("");
		$('.input-mail').next().html("Please enter the email address");
		$('.input-mail').focus();
		return false;
	}	
	if(!emailRegex.test($('.input-mail').val())){
		$('.input-name').next().html("");
		$('.input-mail').next().html("Please enter the valid email address");
		$('.input-mail').focus();
		return false;
	}
	if($('.input-phone').val() == ""){
		$('.input-mail').next().html("");
		$('.input-phone').next().html("Please enter the Phone number");
		$('.input-phone').focus();
		return false;
	}
	if(!numeric.test($('.input-phone').val())){
		$('.input-mail').next().html("");
		$('.input-phone').next().html("Please enter the Numeric number");
		$('.input-phone').focus();
		return false;
	}	
	if($('.input-username').val() == ""){
		$('.input-phone').next().html("");
		$('.input-username').next().html("Please enter the User name");
		$('.input-username').focus();
		return false;
	}		
	if($('.input-password-signup').val() == ""){
		$('.input-username').next().html("");
		$('.input-password-signup').next().html("Please enter the password");
		$('.input-password-signup').focus();
		return false;
	}
	if($('.input-confirm-password').val() != $('.input-password-signup').val()){
		$('.input-password-signup').next().html("");
		$('.input-confirm-password').next().html("Please enter the correct password");
		$('.input-confirm-password').focus();
		return false;
	}
	return true;
}