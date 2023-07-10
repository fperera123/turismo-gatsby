(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.MediaLocalVideo = {
    attach: function (context, settings) {
      $("div[class^='local-video-']", context).once('media-local-video').each(function () {
        var videoTag = $(this).find('video');
        var videoWidth = $(this).attr('data-video-width');
        var videoHeight = $(this).attr('data-video-height');
        if ((!isNaN(videoWidth) && parseInt(videoWidth) > 0)
          && (!isNaN(videoHeight) && parseInt(videoHeight) > 0)) {
          $(videoTag).attr('width', videoWidth);
          $(videoTag).attr('height', videoHeight);
        }
        var autoplay = videoTag.attr('autoplay');
        if (typeof autoplay !== typeof undefined && autoplay !== false) {
          videoTag.attr("playsinline", "playsinline");
        }
      });
    }
  };
})(jQuery, Drupal)
