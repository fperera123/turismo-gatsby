(function($) {
    // Drupal.behaviors.blockUpperHeader = {
    //     attach: function attach() {
    //         if ($('.block-upper-header').length) {
    //             $('body').addClass('has-upper-header-block');
    //         }
    //     }
    // };

    function _isDesktop() {
        return $(window).innerWidth() >= 768;
    }

    function _isNotTablet() {
        return $(window).innerWidth() >= 992;
    }

    function fixMenuFunction(toSticky) {
        var surplus = 10;
        var win;

        // Get the offset position of the navbar
        if (_isNotTablet()) {
            surplus = 27;
            if ($('.has-upper-header-block').length > 0) {
                surplus = 64;
            }
        } else {
            if ($('.has-upper-header-block').length > 0) {
                surplus = 32;
            }
        }

        if ($('.block-hic-header-island-tablet').length > 0) {
            toSticky.addClass('island-env');

        } else {
            toSticky.removeClass('island-env');
        }

        var sticky = toSticky.offset().top + surplus;

        if (typeof sticky !== "undefined") {
            win = $(window);
            if (win.scrollTop() >= sticky) {
                if (!toSticky.hasClass('is-fixed-header') && !$('body').hasClass('page-node-type-home-island')) {
                    toSticky.addClass("is-fixed-header");
                    $('.region-link-home-island').addClass('is-fixed-pill');
                }
            }
            win.on("scroll", function() {
                if (win.scrollTop() >= sticky) {
                    sticky = parseInt(sticky);

                    if (!toSticky.hasClass('is-fixed-header') && !$('body').hasClass('page-node-type-home-island')) {
                        toSticky.addClass("is-fixed-header");
                        $('.region-link-home-island').addClass('is-fixed-pill');
                    }
                } else {
                    toSticky.removeClass("is-fixed-header");
                    $('.region-link-home-island').removeClass('is-fixed-pill');
                }
            });
        }
    }

    let checkExist = setInterval(function() {
        if ($('header[role="banner"]').length) {
           console.log("fixMenuFunction ran");
           var header = $('.page-content').find('header[role="banner"]');
           fixMenuFunction(header);
           clearInterval(checkExist);
        }
     }, 100); // check every 100ms


    // Drupal.behaviors.fixMenu = {
    //     attach: function() {
    //         if ($('.user-logged-in').length <= 0) {
    //             var header = $('.page-content').find('header[role="banner"]');
    //             fixMenuFunction(header);
    //         }
    //     }
    // }



    // if (typeof WOW !== "undefined") {
    //     var wow = new WOW({
    //         boxClass: 'wow', // animated element css class (default is wow)
    //         animateClass: 'animated', // animation css class (default is animated)
    //         offset: 50, // distance to the element when triggering the animation (default is 0)
    //         mobile: true, // trigger animations on mobile devices (default is true)
    //         live: true, // act on asynchronously loaded content (default is true)
    //         scrollContainer: null // optional scroll container selector, otherwise use window
    //     });
    //     wow.init();
    // }
    // window.addEventListener('wheel', function() { passive: false });
    // if ($('.user-logged-in').length <= 0) {
    //     $("html").easeScroll({
    //         frameRate: 60,
    //         animationTime: 1000,
    //         stepSize: 1,
    //         pulseAlgorithm: 1,
    //         pulseScale: 8,
    //         pulseNormalize: 1,
    //         accelerationDelta: 1,
    //         accelerationMax: 1,
    //         keyboardSupport: true,
    //         arrowScroll: 9,
    //         touchpadSupport: true,
    //         fixedBackground: true
    //     });
    // }
    // document.addEventListener('wheel', function(e) {​​
    //     e.preventDefault();
    //     $("html").easeScroll();
    // }​​, {​​ passive: false }​​);
    // Not used for now, keep it because we maybe end up using it in the future,
    // else remove
    // Drupal.behaviors.handleResize = {
    //     attach: function() {
    //         var currentIsDesktop = null;
    //         $(window).once('handle-resize').resize(function() {
    //             if (_isDesktop() && !currentIsDesktop) {
    //                 $(window).trigger('hic_desktop_view');
    //                 currentIsDesktop = true;
    //             } else if (!_isDesktop() && currentIsDesktop) {
    //                 $(window).trigger('hic_mobile_view');
    //                 currentIsDesktop = false;
    //             } else if (currentIsDesktop === null) {
    //                 $(window).trigger(_isDesktop() ? 'hic_desktop_view' : 'hic_mobile_view');
    //                 currentIsDesktop = _isDesktop();
    //             }
    //         });
    //         $(window).resize();
    //     }
    // };

    // Drupal.behaviors.handleLineClamp = {
    //     attach: function(context) {
    //         $(context).clamp();
    //     }
    // };

    //Esta funcion se usa para "limpiar" la url del combo de idiomas
    // Drupal.behaviors.fixQueryString = {
    //     attach: function(context, settings) {
    //         $(".menu-item--expanded .menu-item, .menu--main .menu-item, .language-link, .logo_image").once().mouseup(function(event) {
    //             var element = $(event.target);
    //             element = (element.hasClass('logo_front'))?element.parent().parent():element;
    //             const hrefParts = $(element.attr('href').split('?'));
    //             const domain = hrefParts.first().get(0);
    //             if (hrefParts.length > 1 && domain.startsWith('https://')) {
    //                 element.attr('href', domain);
    //             }
    //         });
    //     }
    // };

    // $.fn.extend({
    //     /**
    //      * This function returns if the device is a not mobile.
    //      */
    //     isDesktop: function isDesktop() {
    //         return !!($(window).innerWidth() >= 768);
    //     },
    //     dropdown: function(extraExclusions) {
    //         this.each(function(_, parentDiv) {
    //             var parentEl = $(parentDiv);
    //             parentEl.find('.trigger-wrapper').once().click(function(e) {
    //                 e.preventDefault();
    //                 var itemChanger = parentEl.find('.item-selector-wrapper');
    //                 var $this = $(this);
    //                 itemChanger.toggleClass('collapsed expanded');
    //                 $this.toggleClass('down up');
    //             });

    //             var onceSuffix = extraExclusions instanceof Array ? extraExclusions.join('-') : 'no-extra-' + new Date().getTime();
    //             $(document).click(function(e) {
    //                 var excludedClasses = ['items-selector', 'select-wrapper', 'trigger-wrapper', 'limit-trigger'];
    //                 // if (extraExclusions instanceof Array) {
    //                 //   excludedClasses = excludedClasses.concat(extraExclusions);
    //                 // }
    //                 var classClicked = event.target.className.split(' ');
    //                 if (!excludedClasses.some(function(r) { return classClicked.indexOf(r) >= 0 })) {
    //                     parentEl.find('.limit-trigger').parent().removeClass('up').addClass('down');
    //                     parentEl.find('.item-selector-wrapper').removeClass('expanded').addClass('collapsed');
    //                 }
    //             });
    //         });
    //         return this;
    //     },
    //     clamp: function(rootEl) {
    //         var selector = '.clamp-on'
    //         var target = rootEl instanceof $ ? rootEl.find(selector) : $(selector)
    //         return target
    //             .once('handle-clamp')
    //             .each(
    //                 function() {
    //                     var $this = this;
    //                     var originalText = this.innerHTML;
    //                     var currentTimeout = null;
    //                     var el = $this;
    //                     var $el = $(el);
    //                     var lines;
    //                     var errorHint = 'near element tag: ' + el.tagName + ' classes: ' +
    //                         el.className;
    //                     if ($el.data('clamp-always') &&
    //                         ($el.data('clamp-desktop') || $el.data('clamp-mobile'))) {
    //                         throw new Error(
    //                             'You can NOT use clamp-always when combined with clamp-desktop or clamp-mobile, ' +
    //                             errorHint);
    //                     } else if ($el.data('clamp-always')) {
    //                         lines = $el.data('clamp-always');
    //                     } else if (typeof $el.data('clamp-desktop') === 'undefined' ||
    //                         typeof $el.data('clamp-mobile') === 'undefined') {
    //                         throw new Error(
    //                             'You MUST specify both properties clamp-desktop and clamp-mobile, or use only clamp-always, ',
    //                             errorHint);
    //                     }

    //                     function __changeClamp() {

    //                         el.innerHTML = originalText;
    //                         if (currentTimeout) {
    //                             clearTimeout(currentTimeout);
    //                             currentTimeout = null;
    //                         }
    //                         currentTimeout = setTimeout(function() {
    //                             if (!$el.data('clamp-always')) {
    //                                 lines = _isDesktop() ? $el.attr('data-clamp-desktop') : $el
    //                                     .attr('data-clamp-mobile');
    //                             }
    //                             if (+lines) {
    //                                 ellipsis(el, +lines, {
    //                                     responsive: false,
    //                                     delimiter: ''
    //                                 });
    //                             } else {
    //                                 el.innerHTML = originalText;
    //                             }
    //                             currentTimeout = null;
    //                         }, 200);
    //                     }
    //                     __changeClamp();
    //                     $(window).on('resize', function() {
    //                         __changeClamp();
    //                     });
    //                     $(this).on('recalculateClamp', function() {
    //                         __changeClamp();
    //                     });
    //                 }
    //             );
    //     }
    // });

    /**
     * Drupal Theme to create a Placeholder for taxonomy totalcount
     *
     * @param total
     */
    // Drupal.theme.taxonomyCounter = function taxonomyCounter(total) {
    //     return Drupal.formatString('<span class="total-items">!total</span>', {
    //         '!total': total
    //     });
    // }

    /*var linkRewriter = function(a, b) {
           $('a[href*="' + a + '"]').each(function() {
              $(this).attr('href', $(this).attr('href').replace(a, b));
           });
        };

       if (window.location.hostname == 'editpro.holaislascanarias.com') {
           linkRewriter('www.holaislascanarias.com', 'editpro.holaislascanarias.com');
       }*/

})(window.jQuery);



