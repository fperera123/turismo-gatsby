(function($) {

    //Set the current lenguage text	
    init_language_text();

    /*
     * Shows/Hide Language Links
     */
    Drupal.behaviors.bOpenLanguageLinks = {
        attach: function(context, _) {

            $('#openLanguageLinks', context).once('hic_footer').click(function() {
                var classLanguageLinks = $('#languageLinks');
                if (classLanguageLinks.hasClass('hidden')) {
                    $('#languageLinks').removeClass('hidden');
                    $('#languageLinks').addClass('visible');
                    $('#openLanguageLinks').removeClass('down');
                    $('#openLanguageLinks').addClass('up');
                } else {
                    $('#languageLinks').removeClass('visible');
                    $('#languageLinks').addClass('hidden');
                    $('#openLanguageLinks').removeClass('up');
                    $('#openLanguageLinks').addClass('down');
                }
                return false;
            });
        }
    };

    /*---------------
     * 
     ----------------*/
    function init_language_text() {
    	var active_language = $('#languageLinks').find('.is-active').first().text();
        if (active_language == "") {
            setTimeout(function() {
                init_language_text();
            }, 1000);
        } else {
            var opener = $('#openLanguageLinks');
            opener.text(active_language);
        }
    }


})(jQuery);