"use strict";

$(window).on("load", function () {
    $(window).scroll(function () {
        fixedMenu();
    });
});
//header fixed
function fixedMenu() {
    var scroll = $(window).scrollTop();
    if (parseInt(scroll) > "65") {
        $("header").addClass("header_fixed");
    } else {
        $("header").removeClass("header_fixed");
    }
}

//Footer sticky
$(window).bind("load", function () {
    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");
    positionFooter();
    function positionFooter() {
        footerHeight = $footer.height();
        footerTop = $(window).scrollTop() + $(window).height() - footerHeight + "px";

        if ($(document.body).height() + footerHeight < $(window).height()) {
            $footer.css({
                position: "absolute"
            }).animate({
                top: footerTop
            });
        } else {
            $footer.css({
                position: "static"
            });
        }
    }
    //$(window).scroll(positionFooter).resize(positionFooter)               
});

$(document).ready(function () {
    $('.header__menuMobile').on('click', function () {
        $('.header__mobilePostion').addClass('activeMenu');
        $('.header__mobMenuClose').addClass('closeactive');
    });
    $('.header__mobMenuClose').on('click', function () {
        $('.header__mobilePostion').removeClass('activeMenu');
        $('.header__mobMenuClose').removeClass('closeactive');
    });
    $('.header__menu li a, .scroll-down').on('click', function() {
        var relVal = $(this).attr('href');
        $("html,body").animate({scrollTop:$(relVal).offset().top - 50},1000)
    });

	$(".light-pop-up-main").hide();
	$(".light-overlay-bg").hide();
	$(".lightbox-relbox").hide();
	$(".lightbox-new").click(function(){
		var relVal = $(this).attr("src");
		$(".light-pop-up-main").fadeIn();
		$(".light-overlay-bg").fadeIn();
		$(".lightbox-relbox").fadeIn();	
		$(".lightbox-relbox").find('img').attr('src', relVal);
	});
	$(".btn-close").click(function(){
		$(".light-pop-up-main").fadeOut();
		$(".light-overlay-bg").fadeOut();
		$(".lightbox-relbox").fadeOut();
		$(".lightbox-relbox img").attr('src', '');
	});
	$('.playicon').click(function(){
		var vid = $('#myVideo').get(0);
		vid.play();
		$('.pauseicon').show();
		$('.playicon').hide();
	});
	$('.pauseicon').click(function(){
		var vid = $('#myVideo').get(0);
		vid.pause();
		$('.playicon').show();
		$('.pauseicon').hide();
    });
    $('.video__slider').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 667,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });

});

