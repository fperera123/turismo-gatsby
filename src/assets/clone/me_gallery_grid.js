(function ($) {

  var checkExist = setInterval(function() {
      var gridGallery = $('.me-gallery-grid');

      if (gridGallery.length) {
          clearInterval(checkExist); // clear interval once the element is found

          gridGallery.each(function () {
              var $grid = $(this).masonry({
                  itemSelector: '.grid-item',
                  columnWidth: '.grid-item',
                  gutter: '.gutter-sizer',
                  percentPosition: true,
                  horizontalOrder: true
              });

              $grid.imagesLoaded().progress(function () {
                  $grid.masonry('layout');
              });
          });
      }
  }, 100); // check every 500ms

})(window.jQuery);
