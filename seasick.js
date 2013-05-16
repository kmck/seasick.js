(function($){

    function seasick(amount, target, no_crop) {
        var $target = $(target),
            $win = $(window),
            origin_y = $win.scrollTop() + 0.5 * $win.height(),
            rotation = 0;

        // Defaults
        if (!amount) amount = 10;
        if (!target) target = 'body';

        // Initial properties
        $target.css({
            '-webkit-transform-origin-y': origin_y,
            '-moz-transform-origin-y': origin_y,
            '-ms-transform-origin-y': origin_y,
            '-o-transform-origin-y': origin_y,
            'transform-origin-y': origin_y,
            '-webkit-transform': 'rotate(' + rotation + 'deg)',
            '-moz-transform': 'rotate(' + rotation + 'deg)',
            '-ms-transform': 'rotate(' + rotation + 'deg)',
            '-o-transform': 'rotate(' + rotation + 'deg)',
            'transform': 'rotate(' + rotation + 'deg)'
        });

        // Recalculate origin on resize and scroll
        $win.on('scroll resize', function(e) {
            origin_y = $win.scrollTop() + 0.5 * $win.height();
            $target.css({
                '-webkit-transform-origin-y': origin_y,
                '-moz-transform-origin-y': origin_y,
                '-ms-transform-origin-y': origin_y,
                '-o-transform-origin-y': origin_y,
                'transform-origin-y': origin_y
            });
        });

        // Rotate on mouse movement
        $target.on('mousemove', function(e) {
            rotation = 2 * amount * (e.pageX / $win.width() - 0.5);
            $target.css({
                '-webkit-transform': 'rotate(' + rotation + 'deg)',
                '-moz-transform': 'rotate(' + rotation + 'deg)',
                '-ms-transform': 'rotate(' + rotation + 'deg)',
                '-o-transform': 'rotate(' + rotation + 'deg)',
                'transform': 'rotate(' + rotation + 'deg)'
            });
        });

        // Body crop
        if (!no_crop) $('body').css('overflow-x', 'hidden');
    }

    $.seasick = seasick;

})(jQuery);