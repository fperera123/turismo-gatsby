(function($) {
    Drupal.behaviors.mobileBlockSearch = {
        attach: function(context) {

            heightResultsContainer();
            fontSizerSR();

            function heightResultsContainer() {
                var filtersWrapperH = $('.filters-wrapper').innerHeight();
                if ($(window).innerWidth() >= 768) {
                    $('.content-wrapper').css({ 'min-height': filtersWrapperH });
                }
            }

            function fontSizerSR() {
                var wrapperPage = $('.hic-search-engine-search-form');
                var storiesContainer = $('.content-wrapper').innerWidth();
                var nuevoVW = stablishFontSizeSR(storiesContainer);
                if (($(window).innerWidth() > 767) && (wrapperPage.innerWidth() < 1500)) {
                    if (nuevoVW < 0.535) {
                        $('.content-wrapper').css('font-size', nuevoVW + 'vw');
                    } else {
                        $('.content-wrapper').css('font-size', '0.535vw');
                    }
                }
                if ($(window).innerWidth() <= 768) {
                    $('.content-wrapper').css('font-size', nuevoVW + 'vw');
                    $('.paginationList').css('font-size', nuevoVW + 'vw');
                    $('.pager-wrapper').find('.js-form-type-select').css('font-size', nuevoVW + 'vw');
                }
            }

            function stablishFontSizeSR(wContainer) {
                var wBrowser = $(window).innerWidth();
                var newVW = ((wContainer * 100) / wBrowser) / 100;
                return newVW;
            }
            var resizerTimer;
            $(window).on('resize', function(e) {
                clearTimeout(resizerTimer);
                resizerTimer = setTimeout(function() {
                    heightResultsContainer();
                    fontSizerSR();
                }, 100);
            });

            let button = $('.mobile-search-trigger');
            button.once().click(
                function(event) {
                    let $this = $(this);
                    if ($this.is('.closed')) {
                        $this.removeClass('closed').addClass('opened');
                        $this.parent('.search-block').parent('.hic-search-engine-block-form').removeClass(
                            'mobile-closed').addClass('mobile-open');
                        $('#search-text').focus();
                        $('#block-hicheaderlogo').fadeOut(500);
                        $('#block-opener-menu').fadeOut(500);
                    } else {
                        closeSearchInput($this);
                    }
                });
            $(document).once().click(
                function(event) {
                    if (!button.is(event.target) && $('#search-text').get(0) != event.target &&
                        button.has(event.target).length === 0) {
                        closeSearchInput(button);
                    }
                });
        }
    }

    function closeSearchInput(element) {
        element.removeClass('opened').addClass('closed');
        element.parent('.search-block').parent('.hic-search-engine-block-form').removeClass(
            'mobile-open').addClass('mobile-closed');
        $('#block-hicheaderlogo').fadeIn(1000);
        $('#block-opener-menu').fadeIn(1000);
    }
})(jQuery);