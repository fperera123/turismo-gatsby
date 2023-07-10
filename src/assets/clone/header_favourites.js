(function ($, Drupal) {
	
    Drupal.behaviors.headerBlock = {
            attach: function (context, _) {
                $('.header', context).find('.fav-container').once('header_block')
                .each(
                		function () {                        	
                			if ($(this).findInCookie()) {
                        		$(this).addClass(favouriteClass);
                        	}
                    })
                    .click(function () {
                    	$(this).addSubstractFavourite2();
                    });
            }
        };
    
})(jQuery, Drupal);
