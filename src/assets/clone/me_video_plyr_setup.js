(function ($) {

  let checkExist = setInterval(function () {
    if ($(".block-inline-blockme-video").length) {
      console.log("initPlayer ran");
      initPlayer();
      clearInterval(checkExist);
    }
  }, 100);

  function initPlayer() {
    $(".block-inline-blockme-video").each(function () {
      var block = this;
      $(this).on('click', "div.wrapper-video-container.poster", function (e) {
        var wrapper = this;
        $(this).removeClass('poster');
        if (!$(block).hasClass('layout-builder-block')) {
          var loader = $(this).find(".spinkit-overlay");
          $(loader).show();
          var transitionTime = 600;
          var posterField = $(this).find("div[class*='field-me-v-poster']").first();
          var videoInfo = $(this).find(".info-video").first();
          var iconPlay = $(this).find('.iconContainer').first();
          let videoField, jsPlyr;
          if ($(wrapper).find("div[class*='field-me-v-remote-video']").length) {
            videoField = $(wrapper).find("div[class*='field-me-v-remote-video']").first();
          } else {
            videoField = $(wrapper).find("div[class*='field-me-v-local-video']").first();
          }

          if ($(videoField).find('.media--type-video-local').length) {
            if (window.matchMedia("(min-width: 48em)").matches) {
              // Desktop
              jsPlyr = $(videoField).find('.local-video-desktop .js-plyr');
            } else {
              // Mobile
              jsPlyr = $(videoField).find('.local-video-mobile .js-plyr');
            }
          } else if ($(videoField).find('.media--type-remote-video').length) {
            jsPlyr = $(videoField).find('.js-plyr');
          }

          if (jsPlyr.length > 1) {
            const players = Array.from(jsPlyr).map(p => new window.Plyr(p));
            players.forEach(function (item, index, array) {
              plyrEventsManager(item, posterField, transitionTime, iconPlay, videoInfo, loader);
            });
          } else {
            const player = new window.Plyr(jsPlyr);
            plyrEventsManager(player, posterField, transitionTime, iconPlay, videoInfo, loader);
          }
        }
      })
    });
  }

  function plyrEventsManager(player, posterField, transitionTime, iconPlay, videoInfo, loader) {
    player.on('ready', event => {
      const instance = event.detail.plyr;
      $(posterField).fadeOut(transitionTime);
      $(iconPlay).find('.playIcon').addClass('hidden');
      setTimeout(function () {
        $(iconPlay).hide();
      }, 2000);
      $(videoInfo).addClass('playing');
      setTimeout(function () {
        $(loader).hide();
      }, transitionTime);
      instance.play();
    });

    player.on('pause', event => {
      $(videoInfo).addClass('paused');
      $(iconPlay).fadeIn();
      $(iconPlay).find('.playIcon').addClass('hidden');
      $(iconPlay).find('.pauseIcon').removeClass('hidden');
      setTimeout(function () {
        $(iconPlay).fadeOut('fast');
      }, 500);
    });

    player.on('play', event => {
      $(iconPlay).fadeIn();
      $(iconPlay).find('.playIcon').removeClass('hidden');
      $(iconPlay).find('.pauseIcon').addClass('hidden');
      setTimeout(function () {
        $(iconPlay).fadeOut('fast');
      }, 500);
    });

    player.on('ended', event => {
      $(iconPlay).show();
      $(iconPlay).find('.playIcon').removeClass('hidden');
    });
  }

})(window.jQuery);