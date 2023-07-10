/**
 * Variables 
 */
var cookieName = 'fav_stories'; //Nombre de la cokkie
var nidAttr = 'data-nid'; //Atributo del contenedor en el que debemos meter el ID del nodo
var favouriteClass = 'is-favourited'; //Clase CSS para "elegido"
var cookieOptions = { path: '/' }; //Opciones de la cookie

(function ($, Drupal) {

    /**
     * 
     */
    function _findContent() {
        var retVal = JSON.parse($.cookie(cookieName) || '[]');
        if (!retVal) {
            retVal = [];
        }
        return retVal;
    }

    /**
     * Busca el contenido en la cookie
     */
    function _findInCookie(nid) {
        var content = _findContent();
        var filterClosure = function (nodeId) {
            return nodeId === nid;
        }
        return typeof content.find === 'function' ? content.find(filterClosure) : content.filter(filterClosure)[0];
    }

    /**
     * Comprueba si tenemos favoritos añadidos o no y pone  
     * el estilo correspondiente en el bloque de favoritos 
     */
    function checkFavouritesBlock() {
        var fav_block = $('.header-favourite-block');
        var num = _findContent().length;
        if (num) {
            $(fav_block).find('[data-show-on-favourites=true]').show();
            $(fav_block).find('[data-show-on-favourites=false]').hide();
            $(fav_block).find('.favourite-icon-container').text(num);
            $(fav_block).find('.favourite-icon-container-mov').text(num);
            $(fav_block).addClass('has-favourites').removeClass('no-favourites');
            $('#menu_mobile_opener').addClass('has-favourites').removeClass('no-favourites');
        } else {
            $(fav_block).find('[data-show-on-favourites=true]').hide();
            $(fav_block).find('[data-show-on-favourites=false]').show();
            $(fav_block).addClass('no-favourites').removeClass('has-favourites');
            $(fav_block).find('.favourite-icon-container-mov').text('');
            $('#menu_mobile_opener').addClass('no-favourites').removeClass('has-favourites');
        }
    }

    /**
     * A estas tres funciones la llamaremos desde el js de nuestro módulo. 
     * Por eso las añadimos al repositorio del jQuery. 
     * Se puede ver el módulo hic_header para ver como hacerlo
     */

    $.fn.findInCookie = function () {
        var nid = $(this).attr(nidAttr);
        return _findInCookie(nid);
    }

    /** 
     * Añade la pagina con animacion de estrellitas
     */
    $.fn.addSubstractFavourite = function () {
        var nid = $(this).attr(nidAttr);
        var icFav = $(this).find('.ic-favourite').first();
        var hearts = $(this).find('.hearts').first();
        if (_findInCookie(nid)) {
            $(this).removeClass(favouriteClass);
            $.cookie(cookieName, JSON.stringify(_findContent().filter(function (nodeId) {
                return nodeId !== nid;
            })), cookieOptions);
        } else {
            icFav.addClass('hidden');
            hearts.removeClass('hidden').addClass('added');
            setTimeout(function () {
                hearts.removeClass('added').addClass('removed');
                setTimeout(function () {
                    hearts.addClass('hidden').removeClass('removed');
                    icFav.removeClass('hidden');
                }, 1000);
            }, 2000);
            $(this).addClass(favouriteClass);
            var content = _findContent();
            content.push(nid);
            $.cookie(cookieName, JSON.stringify(content), cookieOptions);
        }
        checkFavouritesBlock();
    }

    /**
     * Añade la pagina sin animacion de estrellitas
     */
    $.fn.addSubstractFavourite2 = function () {
        var nid = $(this).attr(nidAttr);
        if (_findInCookie(nid)) {
            $(this).removeClass(favouriteClass);
            $.cookie(cookieName, JSON.stringify(_findContent().filter(function (nodeId) {
                return nodeId !== nid;
            })), cookieOptions);
        } else {
            $(this).addClass(favouriteClass);
            var content = _findContent();
            content.push(nid);
            $.cookie(cookieName, JSON.stringify(content), cookieOptions);
        }
        checkFavouritesBlock();
        return this;
    }

    /**
     * 
     */
    Drupal.behaviors.headerFavouritesBlock = {
        attach: function (context, _) {
            $('.header-favourite-block', context).once('header-favourite-block').each(function () {
                checkFavouritesBlock();
            });
        }
    }

})(jQuery, Drupal);