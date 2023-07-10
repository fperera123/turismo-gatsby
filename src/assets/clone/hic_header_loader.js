(function($) {

    var pageHeaderVideos = $.makeArray($('div[data-video_dynamic="true"]').map(function() {
		return {
			nid: $(this).data('nid'),
			videoid: $(this).data('videoid'),
			customization_exists: $(this).data('customizationexists'),
			loaded: false
		};
	}));

	window.addEventListener('resize', () => {
		var unloadedVideos = pageHeaderVideos.filter(v => v.loaded == false);
		if (typeof unloadedVideos !== 'undefined' ) {
			Drupal.attachBehaviors();
		}
	});

    Drupal.behaviors.loadHeaderAjax = {
        attach: function() {
            var attempt = 0;
            var maxAttempts = 50;
            var get_blocks = null;
            var container_customization_exists =  document.getElementById('video_dynamic').dataset.customizationexists;
            var get_blocks_id = setInterval(
                function() {
                    setBottomPosition();
                    get_blocks = getCookie('dmp-get-blocks');
                    if ((get_blocks !== null && get_blocks === '1') || container_customization_exists !== 1) {
                        var loader = function() {
                            var container = $(this);
                            var container_nid = container.data('nid');
                            var container_typedinamic = container.data('typedinamic');
                            var container_video_id = container.data('videoid');
                            var url = window.location.href;
                            var isVideoLoaded =  pageHeaderVideos.filter(v => v.videoid === container_video_id).shift().loaded;
							var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
							if (!isVideoLoaded && ((width > 992 && container_video_id.endsWith("desktop")) || (width <= 992 && container_video_id.endsWith("mobile")))) {

								$.post({
									url: Drupal.url('hic-header-video-loader'),
									data: JSON.stringify({
										nid: container_nid,
										videoid: container_video_id,
                                        typedinamic: container_typedinamic,
                                        url: url
									}),
									contentType: 'application/json',
									success: function(data) {
										if (container.find("article").length == 0)
											container.append(data);
										pageHeaderVideos.filter(function(block) {
											return block.videoid === container_video_id;
										}).shift().loaded = true;
										Drupal.attachBehaviors();
									},
									error: function(error) {
									}
								})
							}
                        };
                        $('div[data-video_dynamic="true"]').each(loader);
                        var scrollFilter = function(block) {
                            return block.loaded === false &&
                                $('div[data-videoid="' + block.videoid + '"]').visible(true);
                        };
                        $(window).scroll(function() {
                            $(pageHeaderVideos.filter(scrollFilter)).map(function() {
                                return $('div[data-videoid="' + this.videoid + '"]').get();
                            }).once().each(loader);
                        });
                        clearInterval(get_blocks_id);
                    } else {
                        //meter aqui la aceptacion de cookies
                        cookie_agreed = getCookie('cookie-agreed');
                        if (cookie_agreed == '2') {
                            cookie_agreed_categories = getCookie('cookie-agreed-categories');
                            if (attempt < maxAttempts) {
                                attempt++;
                            } else {
                                // the execution goes on but we have not got a new campaign...
                                clearInterval(get_blocks_id);
                            }
                        }
                    }
                }, 50);
        }
    };

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function setBottomPosition() {
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        let heightModal = htmlStyles.getPropertyValue("--heightDialog");
        if ($('#sliding-popup').length > 0) {
            let modalH = $('.eu-cookie-compliance-content').outerHeight() + 'px';
            document.documentElement.style.setProperty("--heightDialog", modalH);
        }

    }


})(jQuery);
