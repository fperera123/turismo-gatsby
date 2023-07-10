(function($, Drupal) {
 
    Drupal.behaviors.mdRelatedStories = {
        attach: function(context, _) {
            $('.block-inline-blockmd-related-stories', context).find('.fav-container').once('md-related-stories')
                .each(function() {
                    if ($(this).findInCookie()) {
                        $(this).addClass(favouriteClass);
                    }
                })
                .click(function() {
                	$(this).addSubstractFavourite();                   
                });
        }
    };
})(jQuery, Drupal)