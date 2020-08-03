(function ($) {
    "use strict";
    var main_wind = $(window);

    main_wind.on("scroll", function () {
        var consultScroll = $(".scroll_up");
        if ($(this).scrollTop() > 300) {
            consultScroll.fadeIn();
            consultScroll.removeClass("invisible");
        } else {
            consultScroll.fadeOut();
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