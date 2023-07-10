(function($) {
    Drupal.behaviors.blockCommonHeaderView = {
        attach: function(context) {
            resetStylesElements();
            heightLogo();
            heightTab();

            function _browserIE11() {
                return (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || !!navigator.userAgent.match(/Trident.*rv\:11\./));
            }

            function _isDesktop() {
                return $(window).innerWidth() >= 992;
            }

            function _formatForTab() {
                var winW = $(window).innerWidth();
                var format = 'lg';
                if (winW < 576) {
                    format = 'xs'
                } else {
                    if ((winW >= 576) && (winW < 768)) {
                        format = 'sm'
                    } else {
                        if ((winW >= 768) && (winW < 992)) {
                            format = 'md'
                        } else {
                            if ((winW >= 992) && (winW < 1200)) {
                                format = 'lg'
                            } else {
                                if (winW >= 1200) {
                                    format = 'xl'
                                }
                            }
                        }
                    }
                }
                return format;
            }

            function _ajustePorAlturaCabecera(classHeight) {
                var dif = 185;
                if (classHeight == 'height-big') {
                    switch (_formatForTab()) {
                        case 'xs':
                            dif = 185;
                            break;
                        case 'sm':
                            dif = 190;
                            break;
                        case 'md':
                            dif = 190;
                            break;
                        case 'lg':
                            dif = 200;
                            break;
                        case 'xl':
                            dif = 210;
                            break;
                    }
                    dif = ($(window).innerHeight() * 0.15) + 60;
                } else {
                    if (classHeight == 'height-medium') {
                        switch (_formatForTab()) {
                            case 'xs':
                                dif = 180;
                                break;
                            case 'sm':
                                dif = 160;
                                break;
                            case 'md':
                                dif = 170;
                                break;
                            case 'lg':
                                dif = 200;
                                break;
                            case 'xl':
                                dif = 210;
                                break;
                        }
                        dif = ($(window).innerHeight() * 0.8) * 0.15;
                    } else {
                        switch (_formatForTab()) {
                            case 'xs':
                                dif = 170;
                                break;
                            case 'sm':
                                dif = 170;
                                break;
                            case 'md':
                                dif = 160;
                                break;
                            case 'lg':
                                dif = 210;
                                break;
                            case 'xl':
                                dif = 120;
                                break;
                        }
                        dif = ($(window).innerHeight() * 0.5) * 0.15;
                    }
                }
                return dif;
            }

            function paddBottomLogo($header, formatWindow) {
                let pB;
                if (formatWindow == 'desktop') {
                    if ($header.hasClass('height-small')) {
                        pB = 40;
                    }
                    if ($header.hasClass('height-medium')) {
                        pB = 35;
                    }
                    if ($header.hasClass('height-big')) {
                        pB = 40;
                    }
                } else {
                    if ($header.hasClass('height-small')) {
                        pB = 30;
                    }
                    if ($header.hasClass('height-medium')) {
                        pB = 55;
                    }
                    if ($header.hasClass('height-big')) {
                        pB = 45;
                    }
                }
                return pB;
            }

            function paddTopLogo($header, $logoContainer, formatWindow) {
                let pT;
                if (formatWindow == 'desktop') {
                    if ($logoContainer.hasClass('ver-align-down-ml')) {
                        pT = 60;
                    } else {
                        if ($logoContainer.hasClass('ver-align-up-ml')) {
                            if ($header.hasClass('height-small')) {
                                pT = 40;
                            }
                            if ($header.hasClass('height-medium')) {
                                pT = 35;
                            }
                            if ($header.hasClass('height-big')) {
                                pT = 40;
                            }
                        } else {
                            if ($logoContainer.hasClass('ver-align-middle-ml')) {
                                if ($logoContainer.hasClass('valign-up-logo')) {
                                    pT = 60;
                                } else {
                                    if ($logoContainer.hasClass('valign-down-logo')) {
                                        if ($header.hasClass('height-small')) {
                                            pT = 40;
                                        }
                                        if ($header.hasClass('height-medium')) {
                                            pT = 35;
                                        }
                                        if ($header.hasClass('height-big')) {
                                            pT = 40;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if ($logoContainer.hasClass('ver-align-down-ml')) {
                        pT = 60;
                    } else {
                        if ($logoContainer.hasClass('ver-align-up-ml')) {
                            if ($header.hasClass('height-small')) {
                                pT = 30;
                            }
                            if ($header.hasClass('height-medium')) {
                                pT = 55;
                            }
                            if ($header.hasClass('height-big')) {
                                pT = 45;
                            }
                        } else {
                            if ($logoContainer.hasClass('ver-align-middle-ml')) {
                                if ($logoContainer.hasClass('valign-up-logo')) {
                                    pT = 60;
                                } else {
                                    if ($logoContainer.hasClass('valign-down-logo')) {
                                        if ($header.hasClass('height-small')) {
                                            pT = 30;
                                        }
                                        if ($header.hasClass('height-medium')) {
                                            pT = 55;
                                        }
                                        if ($header.hasClass('height-big')) {
                                            pT = 45;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return pT;
            }

            function heightLogo() {
                var cabecera = $('.header');
                var contenidoTitulos = cabecera.find('.content').first();
                var navegacion = $('.region-header');
                var marginTop = 0;
                if ($('.logo').length > 0) {
                    var contenedorLogo = $('.logo');
                    var paddingHeader = parseInt(cabecera.css('padding-top'));
                    var paddingBottomNavegacion = parseInt(navegacion.css('padding-bottom'));
                    var paddingLogo = contenedorLogo.innerHeight() - contenedorLogo.height();
                    var topTitulos = contenidoTitulos.position().top;
                    var bottomContenedorTitulos = topTitulos + contenidoTitulos.innerHeight();
                    var alturaLogo = cabecera.innerHeight() - navegacion.innerHeight() - contenidoTitulos.innerHeight();
                    if ($(window).innerWidth() > 991) {
                        var alturaMaxImagen = alturaLogo - paddBottomLogo(cabecera, 'desktop') - paddTopLogo(cabecera, contenedorLogo, 'desktop');
                    } else {
                        var alturaMaxImagen = alturaLogo - paddBottomLogo(cabecera, 'mobile') - paddTopLogo(cabecera, contenedorLogo, 'mobile');
                    }

                    var mediaAltura = alturaLogo / 2;
                    if ($(window).innerWidth() > 991) {
                        var alturaMediaMaxImagen = mediaAltura - paddBottomLogo(cabecera, 'desktop') - paddTopLogo(cabecera, contenedorLogo, 'desktop');
                    } else {
                        var alturaMediaMaxImagen = mediaAltura - paddBottomLogo(cabecera, 'mobile') - paddTopLogo(cabecera, contenedorLogo, 'mobile');
                    }
                    var alturaTopLogo = topTitulos - paddingHeader - paddBottomLogo(cabecera);
                    var imagen;
                    if ($(window).innerWidth() > 768) {
                        imagen = contenedorLogo.find('.me-logo-desktop-image').find('img');
                    } else {
                        imagen = contenedorLogo.find('.me-logo-mobile-image').find('img');
                    }
                    if ($(window).innerWidth() < 992) {
                        if (
                            contenedorLogo.hasClass('ver-align-down-ml') ||
                            (contenedorLogo.hasClass('ver-align-middle-ml') && contenedorLogo.hasClass('valign-up-logo'))
                        ) {
                            if (paddingBottomNavegacion > 60) {
                                marginTop = -1 * (paddingBottomNavegacion - 60);
                            } else {
                                marginTop = 60 - paddingBottomNavegacion;
                            }
                            contenedorLogo.css({ 'margin-top': marginTop });
                        }
                    }
                    if (contenedorLogo.hasClass('ver-align-middle-ml')) {
                        if ((mediaAltura > 0) && (alturaMediaMaxImagen > 0)) {
                            contenedorLogo.css({ 'height': mediaAltura });
                            imagen.css({ 'max-height': alturaMediaMaxImagen });
                            if (contenedorLogo.hasClass('valign-down-logo')) {
                                contenedorLogo.css({ 'top': bottomContenedorTitulos, 'height': mediaAltura });
                            } else {
                                if (contenedorLogo.hasClass('valign-up-logo')) {
                                    if (alturaLogo > 0) {
                                        contenedorLogo.css({ 'height': alturaTopLogo, 'top': navegacion.innerHeight() });
                                        imagen.css({ 'max-height': alturaTopLogo });
                                    } else {
                                        imagen.css({ 'display': 'none' });
                                    }
                                }
                            }
                        } else {
                            contenedorLogo.css({ 'display': 'none' });
                        }
                    } else {
                        if ((alturaLogo > 0) && (alturaMaxImagen > 0)) {
                            contenedorLogo.css({ 'height': alturaLogo });
                            imagen.css({ 'max-height': alturaMaxImagen });
                            if (contenedorLogo.hasClass('ver-align-up-ml')) {
                                contenedorLogo.css({ 'top': bottomContenedorTitulos, 'height': alturaLogo });
                            } else {
                                if (contenedorLogo.hasClass('ver-align-down-ml')) {
                                    contenedorLogo.css({ 'top': navegacion.innerHeight(), 'height': alturaLogo });
                                }
                            }
                        } else {
                            contenedorLogo.css({ 'display': 'none' });
                        }
                    }
                }
            }

            function resetStylesElements() {
                var contenedorLogo = $('.logo');
                contenedorLogo.removeAttr('style');
                contenedorLogo.find('img').removeAttr('style');
            }

            function videoDimensionsIE11() {
                if ($('.local-video-desktop').length > 0) {
                    let wVideo = $('.local-video-desktop').attr('data-video-width');
                    let hVideo = $('.local-video-desktop').attr('data-video-height');
                    let wWindow = $(window).innerWidth();
                    let pW = (wWindow * 100) / wVideo;
                    $('.local-video-desktop').find('video').first().css({ width: wWindow, height: pW + '%', position: 'static' });
                }
            }

            function heightHeaderHIC(headerObj) {
                var hH = 0;
                if (!$('body').hasClass('user-logged-in')) {
                    hH = headerObj.innerHeight();
                } else {
                    if (headerObj.hasClass('height-small')) {
                        hH = ($(window).innerHeight() * 0.5) - 39;
                        if ($('body').hasClass('toolbar-tray-open')) {
                            hH = ($(window).innerHeight() * 0.5) - 79;
                        }
                    } else {
                        if (headerObj.hasClass('height-medium')) {
                            hH = ($(window).innerHeight() * 0.8) - 39;
                            if ($('body').hasClass('toolbar-tray-open')) {
                                hH = ($(window).innerHeight() * 0.8) - 79;
                            }
                        } else {
                            if (headerObj.hasClass('height-big')) {
                                hH = $(window).innerHeight() - 39;
                                if ($('body').hasClass('toolbar-tray-open')) {
                                    hH = $(window).innerHeight() - 79;
                                }
                            }
                        }
                    }
                    if (headerObj.hasClass('w-tab')) {
                        hH = hH - 60;
                    }
                }
                return hH;
            }

            function videoSource(boolDkt) {
                var obj = '';
                if (boolDkt) {
                    obj = $('.local-video-desktop');
                } else {
                    obj = $('.local-video-mobile');
                }
                return obj;
            }

            function setSizes(objVideo, newW, newH) {
                objVideo.find('video').first().css({ width: newW, height: newH });
            }

            function videoDimensions() {
                let headerHIC = $('#header_hic');
                var wHeader = headerHIC.innerWidth();
                var hHeader = heightHeaderHIC(headerHIC);
                var videoObj = videoSource(_isDesktop());
                var wVideo = videoObj.attr('data-video-width');
                var hVideo = videoObj.attr('data-video-height');
                var pWRed = (wHeader * 100) / wVideo;
                var pHRed = (hHeader * 100) / hVideo;
                var hVRed = (pHRed * hVideo) / 100;
                var wVRed = (pWRed * wVideo) / 100;
                var newW = 'auto';
                var newH = 'auto';
                //Cabecera horizontal/cuadrada
                if (wHeader >= hHeader) {
                    var hVRedPorAncho = (pWRed * hVideo) / 100;
                    if (hVRedPorAncho >= hHeader) {
                        newH = pWRed + '%';
                        newW = wHeader;
                    } else {
                        newH = pHRed + '%';
                        newW = wHeader;
                    }
                } else {
                    //Cabecera vertical
                    var wVRedPorAlto = (pHRed * wVideo) / 100;
                    if (wVRedPorAlto >= wHeader) {
                        newH = pHRed + '%';
                        newW = 'auto';
                    } else {
                        var pWPorHeader = (wHeader * 100) / wVideo;
                        var hVRedPorAncho = (pWPorHeader * hVideo) / 100;
                        newW = '100%';
                        newH = hVRedPorAncho;
                    }

                }
                setSizes(videoObj, newW, newH);
            }

            function heightTab() {
                var headerObj = $('#header_hic');
                headerObj.css({ height: '' });
                if (headerObj.hasClass('w-tab')) {
                    var tabObj = headerObj.find('.content.tab').first();
                    var originalHeightHeader = headerObj.innerHeight();
                    var heightTab = tabObj.innerHeight();
                    var heightHeader = heightTab + 'px';
                    var adjustment = 185;
                    var hAjuste = 100;
                    if (heightTab > 100) {
                        if (headerObj.hasClass('height-big')) {
                            adjustment = _ajustePorAlturaCabecera('height-big');
                        } else {
                            if (headerObj.hasClass('height-medium')) {
                                adjustment = _ajustePorAlturaCabecera('height-medium');
                            } else {
                                adjustment = _ajustePorAlturaCabecera('height-small');
                            }
                        }

                        hAjuste = adjustment;
                        heightHeader = (originalHeightHeader + heightTab - hAjuste) + 'px';
                        if ($('body').hasClass('has-upper-header-block')) {
                            if ($(window).innerWidth() > 991) {
                                heightHeader = (originalHeightHeader + heightTab - hAjuste - 64 + 20) + 'px';
                            } else {
                                heightHeader = (originalHeightHeader + heightTab - hAjuste - 32 + 20) + 'px';
                            }
                        }
                        headerObj.css({ 'height': heightHeader });
                        if ($('.background_video').length > 0) {
                            $('.background_video').css({
                                'top': 0
                            });
                            $('.background_video_mov').css({
                                'top': 0,
                                'transform': 'translate(-50%,0)'
                            })
                        }
                        if ($('.background_image').length > 0) {
                            $('.background_image_mov').css({
                                'top': 0,
                                'height': heightHeader
                            });
                        }
                    }

                }
                //}
            }
            if (_browserIE11()) {
                videoDimensionsIE11();
            }

            if (($('.background_video').length > 0) && !_browserIE11()) {
                if (!$('.background_video').hasClass('dktH-left') && !$('.background_video').hasClass('dktH-right') &&
                    !$('.background_video_mov').hasClass('mblH-left') && !$('.background_video_mov').hasClass('mblH-right')) {
                    videoDimensions();
                }
            }
            var resizerTimer;
            $(window).on('resize', function(e) {
                clearTimeout(resizerTimer);
                resizerTimer = setTimeout(function() {
                    resetStylesElements();
                    heightLogo();
                    if (_browserIE11()) {
                        videoDimensionsIE11();
                    }
                    if (($('.background_video').length > 0) && !_browserIE11()) {
                        if (!$('.background_video').hasClass('dktH-left') && !$('.background_video').hasClass('dktH-right') &&
                            !$('.background_video_mov').hasClass('mblH-left') && !$('.background_video_mov').hasClass('mblH-right')) {
                            videoDimensions();
                        }
                    }
                    heightTab();
                }, 100);
            });


        }
    }
})(jQuery);
//# sourceURL=/themes/custom/hic_front_theme/js/block/block-common-header.js