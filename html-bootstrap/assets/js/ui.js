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
        //$('#header').css('height', '145px');
    } else {
        $("header").removeClass("header_fixed");
        //$('#header').css('height', 'auto');
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