(function($) {
    'use strict';

    function assign_colorbox(element) {
        var windowWidth = $(window).innerWidth();
        var colorboxElSelector = windowWidth <= 768 ? '.me-im-mobile-image' : '.me-im-desktop-image';
        var colorboxEl = $(element).find(colorboxElSelector).find('a').colorbox({
            transition: "fade",
            inline: true,
            href: function() {
                return $(this).data('colorbox-inline');
            },
            rel: function() {
                return $(this).data('colorbox-gallery');
            },
            width: windowWidth,
            height: $(window).innerHeight(),
            current: '',
            previous: '',
            next: '',
            opacity: 0.95,
            onComplete: completeColorbox
        });
    }

    function assign_swipe() {
        $(document).bind('cbox_open', function() {
            $('#colorbox').swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    $.colorbox.next();
                },
                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    $.colorbox.prev();
                },
                threshold: 75,
            });
        });
    }

    function completeColorbox() {
        if ($('#cboxOverlay').is(':visible')) {
            $.colorbox.resize({ width: $(window).width(), height: 'auto' });
            $.colorbox.resize();
        }
        $('<span class="animation-arrow"></span>').appendTo($('#cboxPrevious'));
        $('<span class="animation-arrow"></span>').appendTo($('#cboxNext'));
    }

    var resizeTimer;
    function resizeColorbox() {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if ($('#cboxOverlay').is(':visible')) {
                $.colorbox.resize({ width: $(window).width(), height: $(window).height() });
                $.colorbox.resize();
            }
        }, 100);
    }

    $(window).resize(resizeColorbox);
    window.addEventListener("orientationchange", resizeColorbox, false);

    var checkExist = setInterval(function() {
        var galleryGrid = $('.me-gallery-grid');
        var gallerySlider = $('.me-gallery-slider .swiper-wrapper');
        if (galleryGrid.length || gallerySlider.length) {
            clearInterval(checkExist);
            galleryGrid.each(function(index) {
                assign_colorbox(this);
                assign_swipe();
            });
            gallerySlider.each(function(index) {
                assign_colorbox(this);
                assign_swipe();
            });
        }
    }, 100);

})(window.jQuery);
