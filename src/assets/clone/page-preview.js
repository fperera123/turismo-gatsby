(function($) {


    //Comprobamos si tenemos el parametro de previsualizacion
    var urlParams = new URLSearchParams(window.location.search);
    var isPreview = urlParams.get('isPreview');

    if (isPreview == "true") {
        hideHeader();
        hideFooter();
    }

    function hideHeader() {
        var allHidden = true;
        var actItem;
        //Ocultamos los bloque que no se deben ver en la cabecera
        //Logo
        actItem = $('#block-hicheaderlogo');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Buscador
        actItem = $('#block-hicsearchengineblockform');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Menu
        actItem = $('#block-hic-front-theme-main-menu');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Menu Mobile
        actItem = $('.opener-menu-block');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Menu Favoritos    	
        actItem = $('#block-hicheaderfavouriteblock');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Indicador pagina favorita    	
        actItem = $('.fav-container');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Barra administración
        actItem = $('#toolbar-administration');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Barra Tareas Locales
        actItem = $('#block-hic-front-theme-local-tasks');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }

        //Si no tenemos todos, volvemos a llamar
        if (!allHidden) {
            setTimeout(function() {
                hideHeader();
            }, 200);
        }

        //$('.block-hic-header-favourites-page-block').find('.wrapper-item').find('link-element').removeClass('hovered');
    }

    function hideFooter() {
        //Ocultamos los bloque que no se deben ver en el footer
        var allHidden = true;
        var actItem;
        actItem = $('footer');
        if ($.isEmptyObject(actItem.html())) {
            allHidden = false;
        } else {
            actItem.addClass('hiddenPreview');
        }
        //Si no tenemos todos, volvemos a llamar
        if (!allHidden) {
            setTimeout(function() {
                hideHeader();
            }, 200);
        }
    }


})(jQuery);