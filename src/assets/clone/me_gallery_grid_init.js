(function ($) {

  var checkExist = setInterval(function() {
      var gridGallery = $('.me-gallery-grid');

      if (gridGallery.length) {
          clearInterval(checkExist);
          console.log("gridGallery ran");
          gridGallery.each(function () {
              if ($(this).hasClass('zoom-on')) {
                  var $articles = $(this).find('.field__item.grid-item article');
                  var articleId, colorboxLink;
                  $articles.each(function() {
                      var $itemDesktop = $(this).find('.me-gallery-image-item.me-im-desktop-image');
                      var $itemMobile = $(this).find('.me-gallery-image-item.me-im-mobile-image');
                      articleId = $(this).data('media-id');
                      colorboxLink = '<a data-colorbox-inline=".colorbox-block-' + articleId + '"></a>';
                      $itemDesktop.children().wrapAll(colorboxLink);
                      $itemMobile.children().wrapAll(colorboxLink);
                  });
              }
          });
      }
  }, 100);

})(window.jQuery);
