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
		$('.header__menu li').removeClass('active');
		$(this).parent('li').addClass('active');
        var relVal = $(this).attr('href');
        $("html,body").animate({scrollTop:$(relVal).offset().top - 50},1000);
		
    });
    $('.testi__slider').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplaySpeed: 5000
    });

});

