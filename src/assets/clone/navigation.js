(function ($) {

    let checkExist = setInterval(function () {
        if ($(".menu--footer-website-menu").length) {
            console.log("initNavigation ran");
            initNavigation();
            clearInterval(checkExist);
        }
    }, 100);

    function initNavigation() {
        stablishTwoColumnsSubMenu();
        heightFooterWebsites();

        function stablishTwoColumnsSubMenu() {
            var twoCol = $('.two-column-menu');
            twoCol.each(function () {
                $(this).parent().addClass('two-cols-submenu');
            });
        }

        $('.block-menu.navigation.menu--main').find('.menu-item--expanded:not(.two-cols-submenu)').on({
            mouseenter: function () {
                var wLink = $(this).first().outerWidth();
                var leftPosition = (-1 * (190 / 2)) + (wLink / 2);
                $(this).find('ul.menu').first().addClass('hovered').css({ 'left': leftPosition });
            },
            mouseleave: function () {
                $(this).find('ul.menu').first().removeClass('hovered');
            }
        });

        $('.block-menu.navigation.menu--main').find('.menu-item--expanded.two-cols-submenu').on({
            mouseenter: function () {
                var wLink = $(this).first().outerWidth();
                var leftPosition = (-1 * (450 / 2)) + (wLink / 2);
                $(this).find('ul.menu').first().addClass('hovered').css({ 'left': leftPosition });
            },
            mouseleave: function () {
                $(this).find('ul.menu').first().removeClass('hovered');
            }
        });

        $('#menu_mobile_opener').on({
            click: function () {
                $('.layout-sidebar-first').removeClass('hidden');
                $('.page-content').addClass('menu-active');
            }
        });

        $('#menu_mobile_closer').on({
            click: function () {
                $('.page-content').removeClass('menu-active').addClass('menu-inactive');
                setTimeout(function () {
                    $('.page-content').removeClass('menu-inactive');
                }, 500);
                setTimeout(function () {
                    $('.layout-sidebar-first').addClass('hidden');
                }, 500);
            }
        });

        $('.menu--footer-website-menu').find('.footer_menu_title').on({
            'click mouseenter': function () {
                if ($(this).parent().hasClass('no-active')) {
                    $(this).parent().removeClass('no-active').addClass('active');
                    $('.menu--footer-website-menu').find('.footer_menu_title').not(this).parent().removeClass('active').addClass('no-active');
                }
            }
        });

        function heightFooterWebsites() {
            var menuWebsites = $('.menu--footer-website-menu');
            var titleItems = menuWebsites.find('.footer_menu_title');
            var heightContent = 0;
            titleItems.each(function () {
                heightContent = heightContent + $(this).innerHeight();
            });
            if ($(window).innerWidth() > 991) {
                menuWebsites.find('.wrapper-item-content').css({ 'height': heightContent });
                var heightText = menuWebsites.find('.wrapper-item-content').find('.footer_menu_img').innerHeight();
                menuWebsites.find('.wrapper-item-content').find('.wrapper-text-link').css({ 'height': heightText });
            } else {
                menuWebsites.find('.wrapper-item-content').removeAttr('style');
                menuWebsites.find('.wrapper-item-content').find('.wrapper-text-link').removeAttr('style');
            }
        }

        var resizerTimer;
        $(window).on('resize', function (e) {
            clearTimeout(resizerTimer);
            resizerTimer = setTimeout(function () {
                if ($(window).innerWidth() > 991) {
                    $('.page-content').removeClass('menu-active');
                }
                heightFooterWebsites();
            }, 100);
        });
    }

})(window.jQuery);
