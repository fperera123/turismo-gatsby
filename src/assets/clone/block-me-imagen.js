(function($) {

    "use strict";

    Drupal.behaviors.blockMEImagenView = {
        attach: function(context) {
            $('.block-inline-blockme-imagen', context).find('.toClamp').each(function() {
                var currentInterval;
                var spans = $(this).find('span');
                spans.detach();
                var originalText = $(this).html().replace('\n', '').trim();
                var boundary = 'k!@';
                var $this = this;

                function handleTruncation() {
                    $(this).html(originalText + boundary);
                    ellipsis(this, 2, {
                        replaceStr: boundary + '...'
                    });
                    if ($(this).html().lastIndexOf(boundary + '...') !== -1) {
                        $(this).addClass('clamped').removeClass('not-clamped');
                        $(this).html($(this).html().replace(boundary + '...', '<span class="foo">...<span></span></span>'));
                    } else {
                        $(this).addClass('not-clamped').removeClass('clamped');
                        $(this).html($(this).html().replace(boundary, '<span class="foo"><span></span></span>'));
                    }
                    $(this).children('.foo').addClass('url-type-clamped').css('display', 'inline');
                }
                handleTruncation.apply(this);
                $(window).resize(function() {
                    if (currentInterval) {
                        clearTimeout(currentInterval);
                        currentInterval = 0;
                    }
                    currentInterval = setTimeout(function() {
                        handleTruncation.apply($this);
                    }, 100);

                });
            });
        }
    };
})(jQuery);