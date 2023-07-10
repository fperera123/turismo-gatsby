(function($) {

    "use strict";

    Drupal.behaviors.blockMDShareView = {
        attach: function() {

            colorBackParagraph();

            function colorBackParagraph() {
                var objectsToPrint = $('.block-inline-blockme-paragraph');
                objectsToPrint.each(function() {
                    if ($(this).hasClass('up') || $(this).hasClass('down')) {
                        var colorParent = $(this).parent().parent().parent().parent().css('background-color');
                        console.log($(this).parent().parent().parent().parent());
                        console.log(colorParent);
                        $(this).find('.p-wrapper').css({ 'background-color': colorParent });
                        $(this).find('.p-content').css({ 'background-color': colorParent });
                    }
                });
            }
        }
    };
})(jQuery);