(function($) {
    "use strict";
    Drupal.behaviors.blockMEVideoView = {
        attach: function() {
            containerPadding();
            outerHeightAdjust();

            function containerPadding() {
                var vContainers = $('.block-inline-blockme-video');
                vContainers.each(function(ind, val) {
                    var pTop, pBottom = 0;
                    var wrapperV = $(this).find('.wrapper-video-container').first();
                    var videoC = wrapperV.find('.field--name-field-me-v-remote-video').first();
                    var videoLocal = videoC.find('.media--type-video-local').first();
                    //console.log(videoLocal.length);
                    if (videoLocal.length > 0) {
                        var vLocalDkt = videoC.find('.local-video-desktop');
                        var vLocalMbl = videoC.find('.local-video-mobile');
                        var wDkt = vLocalDkt.attr('data-video-width');
                        var hDkt = vLocalDkt.attr('data-video-height');
                        var wMbl = vLocalMbl.attr('data-video-width');
                        var hMbl = vLocalMbl.attr('data-video-height');
                        var videoDkt = vLocalDkt.find('video').first();
                        var videoMbl = vLocalMbl.find('video').first();
                        var hCalculatedDkt = ((wrapperV.outerWidth() * 100) / wDkt) + '%';
                        var hCalculatedMbl = ((wrapperV.outerWidth() * 100) / wMbl) + '%';
                        if ($(window).innerWidth() >= 768) {
                            pTop = ((hDkt * 100) / wDkt) * 0.71;
                            pTop = pTop + '%';
                            pBottom = (hDkt * 100) / wDkt;
                            pBottom = pBottom + '%';
                            if ($(this).hasClass('fit')) {
                                wrapperV.attr('style', 'padding-top: ' + pTop + '!important; padding-bottom: ' + pBottom);
                            } else {
                                wrapperV.attr('style', 'padding-bottom: ' + pBottom);
                            }
                        } else {
                            pTop = ((hMbl * 100) / wMbl) * 0.71;
                            pTop = pTop + '%';
                            pBottom = (hMbl * 100) / wMbl;
                            pBottom = pBottom + '%';
                            if ($(this).hasClass('fit')) {
                                wrapperV.attr('style', 'padding-bottom: ' + pBottom);
                            } else {
                                wrapperV.attr('style', 'padding-bottom: ' + pBottom);
                            }
                        }

                        videoDkt.css({ 'width': '100%', 'height': hCalculatedDkt });
                        videoMbl.css({ 'width': '100%', 'height': hCalculatedMbl });
                    } else {
                        var videoRemote = videoC.find('.media--type-remote-video').first();
                        //console.log(videoRemote.length);
                        if (videoRemote.length > 0) {
                            var lastPaddBottom = wrapperV.attr('style');
                            if (($(window).innerWidth() < 768) && $(this).hasClass('fit')) {
                                lastPaddBottom = lastPaddBottom + ';padding-top: 0 !important';
                                //console.log(lastPaddBottom);
                                wrapperV.attr('style', lastPaddBottom);
                            } else {
                                lastPaddBottom = lastPaddBottom.replace('padding-top: 0 !important', '');
                                //console.log(lastPaddBottom);
                                wrapperV.attr('style', lastPaddBottom);
                            }
                        }
                    }

                });
            }

            function outerHeightAdjust() {
                var blocks = $('.block-inline-blockme-video');
                blocks.each(function(ind, val) {
                    var wContenedorTextos = $(this).innerWidth();
                    var nuevoVW = stablishFontSizeV(wContenedorTextos);
                    $(this).find('.iconContainer').css('font-size', nuevoVW + 'vw');
                    var minH = $(this).outerHeight() + 10;
                    if ($(window).innerWidth() >= 768) {
                        $(this).find('.field--name-field-me-v-poster').find('.me-im-desktop-image').find('img').css('min-height', minH);

                    } else {
                        $(this).find('.field--name-field-me-v-poster').find('.me-im-mobile-image').find('img').css('min-height', minH);
                    }
                });
            }

            function stablishFontSizeV(wContainer) {
                var wBrowser = $(window).innerWidth();
                var newVW = ((wContainer * 100) / wBrowser) / 100;
                return newVW;
            }

            var resizerTimer;
            $(window).on('resize', function(e) {
                clearTimeout(resizerTimer);
                resizerTimer = setTimeout(function() {
                    containerPadding();
                    outerHeightAdjust();
                }, 100);
            });
        }
    };
})(jQuery);