(function ($) {

    $.fn.contentOffsetFooting = function (options) {

        let setting = $.extend({
            'content': '#application-content',
            'footing': '#application-footing'
        }, options);

        let handles = function () {
            let offset = setting.footing.height();

            setting.content.css({
                'padding-bottom': offset
            });

            setting.footing.css({
                'margin-top': -offset
            });
        };

        $(window).ready(handles).resize(handles);
    };

})(jQuery);
