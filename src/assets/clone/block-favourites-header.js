(function($) {

    "use strict";

    Drupal.behaviors.blockFavouritesHeaderView = {
        attach: function() {
            $('.header-favourite-block').on({
                mouseenter: function() {
                    if ($(window).innerWidth() >= 992) {
                        $(this).find('.wrapper-menu').removeClass('hidden');
                    }
                },
                mouseleave: function() {
                    if ($(window).innerWidth() >= 992) {
                        $(this).find('.wrapper-menu').addClass('hidden');
                    }
                }

            });
        }
    };
})(jQuery);