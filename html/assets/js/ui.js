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
});