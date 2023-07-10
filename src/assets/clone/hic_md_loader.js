(function($) {
	Drupal.behaviors.loadBlocksAjax = {
		attach : function() {
			var pageBlocks = $.makeArray($('div[data-dynamic="true"]').map(
					function() {
						return {
							nid : $(this).data('nid'),
							uuid : $(this).data('uuid'),
							loaded : false
						};
					}));
			var attempt = 0;
			var maxAttempts = 50;
			var get_blocks = null;
			var get_blocks_id = setInterval(					
					function() {
						get_blocks = getCookie('dmp-get-blocks');
						if(get_blocks !== null && get_blocks === '1'){							
							var loader = function() {
								var container = $(this);
								var container_nid = container.data('nid');
								if(container_nid === undefined){
									container_nid = $(".hic-customization-data").data("nid");
								}
								var containerUUID = container.data('uuid');
								container.addClass('ph-loading');
								container
										.append('<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>');
								$.post({
									url : Drupal.url('hic-md-loader'),
									data : JSON.stringify({
										nid : container_nid,
										uuid : containerUUID
									}),
									contentType : 'application/json',
									success : function(data) {
										container.append(data);
										container.find('.spinner').remove();
										container.removeClass('ph-loading');
										pageBlocks.filter(function(block) {
											return block.uuid === containerUUID;
										}).shift().loaded = true;
										Drupal.attachBehaviors();									
									},
									error : function(error) {
										container.find('.spinner').remove();
										container.removeClass('ph-loading');
									}
								})
							};
							$('div[data-dynamic="true"]').filter(function() {								
								num_items = $(this).find('#bloc_num_items').data('num_items');
								if (typeof num_items !== 'undefined') {
									if (num_items == 0){
										$(this).addClass('no-content');
									}
								}
								return $(this).visible(true);
							}).once().each(loader);
							var scrollFilter = function(block) {
								return block.loaded === false
										&& $('div[data-uuid="' + block.uuid + '"]').visible(true);
							};
							$(window).scroll(function() {
								$(pageBlocks.filter(scrollFilter)).map(function() {
									return $('div[data-uuid="' + this.uuid + '"]').get();
								}).once().each(loader);
							});
							clearInterval(get_blocks_id);
					}else{
						//meter aqui la aceptacion de cookies
						cookie_agreed = getCookie('cookie-agreed');
						if(cookie_agreed == '2'){
							cookie_agreed_categories = getCookie('cookie-agreed-categories');
							if(attempt < maxAttempts){
								attempt++;
							}else{
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
})(jQuery);