(function ($) {
    "use strict";
    var main_wind = $(window);

    main_wind.on("scroll", function () {
        var consultScroll = $(".scroll_up");
        if ($(this).scrollTop() > 300) {
            consultScroll.fadeIn(350);
            consultScroll.removeClass("invisible");
        } else {
            consultScroll.fadeOut(350);
        }
    });

    var goScroll = $(".scroll_up");
    goScroll.on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
                scrollTop: 0,
            },
            500
        );
    });
    
})(jQuery);


var tableOffset = $("#current-list").offset().top;
var $header = $("#current-list > thead").clone();
var $fixedHeader = $("#header-fixed").append($header);

$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();
    
    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
        $fixedHeader.show();
    }
    else if (offset < tableOffset) {
        $fixedHeader.hide();
    }
});