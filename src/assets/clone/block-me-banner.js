(function($) {

    "use strict";

    Drupal.behaviors.blockMEBannerView = {
        attach: function(context) {
            var resizerTimer;

            resetAdjust();
            widthButtonAdjust();
            heightVideoContainer();
            heightImageContainer();

            $(window).on('resize', function(e) {
                clearTimeout(resizerTimer);
                resizerTimer = setTimeout(function() {
                    resetAdjust();
                    widthButtonAdjust();
                    heightVideoContainer();
                    heightImageContainer();
                }, 100);
            });


            function widthButtonAdjust() {
                var banners = $('.block-inline-blockme-banner').find('.me-banner-wrapper');
                banners.each(function() {
                    if ($(this).innerWidth() < 250) {
                        var wBanner = $(this).innerWidth();
                        var wOrWoArrow = $(this).find('.link-button');
                        wOrWoArrow.parent().css({ 'min-width': wBanner - 20 });
                        wOrWoArrow.css({ 'min-width': wBanner - 20, 'width': wBanner - 20 });
                        if (wOrWoArrow.is(":visible")) {
                            var toChange = wOrWoArrow.find('.field--name-field-me-b-text-button').find('.field__item');
                            var widthElement = toChange.innerWidth();
                            var marginLeft = 0;
                            var newW = 'auto';
                            if (widthElement >= (wBanner - 60)) {
                                marginLeft = 0;
                                newW = wBanner - 50;
                            } else {
                                marginLeft = (wBanner - widthElement - 70) / 2;
                                newW = 'auto';
                            }
                            //toChange.css({ 'margin-left': marginLeft, 'width': newW });
                            toChange.css({ 'width': newW });
                        }
                    } else {
                        if ($(window).innerWidth() >= 768) {
                            var links = $('.block-inline-blockme-banner').find('.link-button');
                            links.each(function() {
                                if ($(this).find('.mini-arrow').is(":visible")) {
                                    var toChange = $(this).find('.field--name-field-me-b-text-button').find('.field__item');
                                    toChange.each(function() {
                                        var widthElement = $(this).innerWidth();
                                        if (widthElement < 185) {
                                            var marginLeft = (185 - widthElement) / 2;
                                            //$(this).css({ 'margin-left': marginLeft, 'width': 'auto' });
                                            $(this).css({ 'width': 'auto' });
                                        }
                                    });
                                }
                            });
                        }
                    }
                });

            }

            function resetAdjust() {
                $('.block-inline-blockme-banner').find('.wrapper-button').removeAttr('style');
                $('.block-inline-blockme-banner').find('.link-button').css({ 'min-width': '', 'width': '' });
                $('.block-inline-blockme-banner').find('.link-button').find('.field--name-field-me-b-text-button').find('.field__item').removeAttr('style');
                $('.block-inline-blockme-banner').find('.w-video').find('video').removeClass('altered').removeAttr('style');
                $('.block-inline-blockme-banner').find('.w-image').find('.field--name-field-me-b-image').removeClass('altered').find('img').removeAttr('style');
            }

            function heightVideoContainer() {
                var videoBanner = $('.block-inline-blockme-banner').find('.w-video');
                videoBanner.each(function() {
                    var heightVideoContainer = $(this).find('.field--name-field-me-b-video').innerHeight() - 8;
                    if ($(window).innerWidth() > 768) {
                        var originalHeightVideo = $(this).find('.field--name-field-me-b-video').find('.local-video-desktop').attr('data-video-height');
                        var originalWidthVideo = $(this).find('.field--name-field-me-b-video').find('.local-video-desktop').attr('data-video-width');
                    } else {
                        var originalHeightVideo = $(this).find('.field--name-field-me-b-video').find('.local-video-mobile').attr('data-video-height');
                        var originalWidthVideo = $(this).find('.field--name-field-me-b-video').find('.local-video-mobile').attr('data-video-width');
                    }
                    var widthVideoContainer = $(this).find('.field--name-field-me-b-video').innerWidth();
                    var heightTextos = $(this).find('.me-banner-wrapper').height();
                    var fixH = heightTextos + 10;
                    var porcentajeAmp = (widthVideoContainer * 100) / originalWidthVideo;
                    var newHeight = (porcentajeAmp * originalHeightVideo) / 100;
                    if (heightTextos > heightVideoContainer) {
                        $(this).css('height', heightTextos);
                        $(this).find('.me-banner-wrapper').css('height', heightTextos);
                        $(this).find('.field--name-field-me-b-video').find('video').addClass('altered').css({ 'height': fixH });
                    } else {
                        if (heightVideoContainer > newHeight) {
                            $(this).find('.field--name-field-me-b-video').find('video').addClass('altered').css({ 'height': heightVideoContainer });
                        }
                        $(this).css('height', heightVideoContainer);
                        $(this).find('.me-banner-wrapper').css('height', heightVideoContainer);
                    }
                });
            }

            function heightImageContainer() {
                var imageBanner = $('.block-inline-blockme-banner').find('.w-image');
                imageBanner.each(function() {
                    var heightImage = $(this).find('.field--name-field-me-b-image').innerHeight();
                    var widthImage = $(this).find('.field--name-field-me-b-image').innerWidth();
                    var heightTextos = $(this).find('.me-banner-wrapper').innerHeight();
                    if ($(window).innerWidth() > 768) {
                        var originalHeightImage = parseInt($(this).find('.field--name-field-me-b-image').find('.me-im-desktop-image').find('img').attr('height'));
                        var originalWidthImage = parseInt($(this).find('.field--name-field-me-b-image').find('.me-im-desktop-image').find('img').attr('width'));
                    } else {
                        var originalHeightImage = parseInt($(this).find('.field--name-field-me-b-image').find('.me-im-mobile-image').find('img').attr('height'));
                        var originalWidthImage = parseInt($(this).find('.field--name-field-me-b-image').find('.me-im-mobile-image').find('img').attr('width'));
                    }
                    var fixH = heightTextos + 10;
                    if (originalHeightImage > originalWidthImage) {
                        $(this).find('.field--name-field-me-b-image').addClass('vertical-img');
                        $(this).find('.field--name-field-me-b-image').find('img').css({ 'min-height': fixH });
                    } else {
                        $(this).find('.field--name-field-me-b-image').addClass('horizontal-img');
                        $(this).find('.field--name-field-me-b-image').find('img').css({ 'min-height': fixH });
                    }
                    if ($(this).parents('.three-01')) {
                        var containerWidth = $(this).find('.field--name-field-me-b-image').innerWidth();
                        var containerHeight = $(this).find('.field--name-field-me-b-image').innerHeight();
                        var originalWidthImage = parseInt($(this).find('.field--name-field-me-b-image').find('.me-im-desktop-image').find('img').attr('width'));
                        var originalHeightImage = parseInt($(this).find('.field--name-field-me-b-image').find('.me-im-desktop-image').find('img').attr('height'));
                        if (containerWidth < originalWidthImage) {
                            var newPercentageWidth = (containerWidth * 100) / originalWidthImage;
                            var newHeight = (newPercentageWidth * originalHeightImage) / 100;
                            //console.log('Porcentaje: ' + newPercentageWidth + '\nNueva altura: ' + newHeight);
                            if (newHeight < containerHeight) {
                                $(this).find('.field--name-field-me-b-image').find('.me-im-desktop-image').find('img').css({ 'height': containerHeight, 'width': 'auto' });
                            } else {
                                $(this).find('.field--name-field-me-b-image').find('.me-im-desktop-image').find('img').css({ 'height': newHeight, 'width': 'auto' });
                            }
                        }
                    }

                });
            }
        }
    };
})(jQuery);
