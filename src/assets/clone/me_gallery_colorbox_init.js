(function($) {
  "use strict";

  var checkExist = setInterval(function() {
      if ($('.me-gallery').length) {
          clearInterval(checkExist);
          $('.me-gallery').each(function(index) {
            var windowWidth = $(window).innerWidth();
            var colorboxElSelector = windowWidth <= 768 ? '.me-gallery-image-item.me-im-desktop-image' : '.me-gallery-image-item.me-im-mobile-image';
              $(this).find(colorboxElSelector).each( function() {
                  $(this).children('a').attr('data-colorbox-gallery', 'colorbox-group-desktop-' + index);
              });
          });
      }
  }, 100); // check every 100ms
})(window.jQuery);
