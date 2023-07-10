(function($, Drupal) {


	// Due to lack of support from IE11 to use arrow functions, has to ceate dummy
	// functios to avois verbosity
	function _isNumberlike(input) {
		return !isNaN(+input);
	}
	/*-----------------------------
	 *
	 *------------------------------*/
	function _toNumber(input) {
		return +input;
	}
	/*-----------------------------
	 *
	 *------------------------------*/
	function _findContent(cookie) {
		var retVal = JSON.parse($.cookie(cookie) || '[]');
		if (!retVal) {
			retVal = [];
		}
		return retVal;
	}
	/*-----------------------------
	 *
	 *------------------------------*/
	function _parseTaxonomyElementsArray(taxonomy) {
		return $(this).find('.term-' + taxonomy + '-container span').toArray().map(
				function(current) {
					return current.innerText;
				}).filter(_isNumberlike).map(_toNumber);
	}

	/*-----------------------------
	 *
	 *------------------------------*/
	function _updateCookieWithValues(cookie, ids) {
		var currentContent = _findContent(cookie);
		ids.filter(_isNumberlike).map(_toNumber).forEach(function(currentId) {
			if (!currentContent.some(function(currentContentId) {
				return false//currentContentId === currentId
			})) {
				if (currentContent.length > 5) {
					currentContent.shift();
				}
				currentContent.push(currentId);
			}
		});
		$.cookie(cookie, JSON.stringify(currentContent), {
			path : '/'
		});
	}

	/*-------------------------------
	 *
	 *--------------------------------*/
	function _updateCookieWithTagValues(cookie, ids) {
		var  family_tax_id =  parseInt($('#family_tax_id').text());
		var  LGTB_tax_id =  parseInt($('#LGTB_tax_id').text());
		var previousContent = _findContent(cookie);
		var currentContent = [];
		var tag_update = false;

		if (previousContent.length > 5) {
			previousContent.shift();
		}

		ids.filter(_isNumberlike).map(_toNumber).forEach(function(currentId) {
			if (!currentContent.some(function(currentContentId) {
				return false//currentContentId === currentId
			})) {
				currentContent.push(currentId);
			}
		});
		if (currentContent.includes(LGTB_tax_id)){
			previousContent.push(LGTB_tax_id);
			tag_update = true;
		}
		else if (currentContent.includes(family_tax_id)){
			previousContent.push(family_tax_id);
			tag_update = true;
		}
		/*Solo familia y LGTB
		 * else {
			previousContent.push(currentContent.shift());
		}*/
		$.cookie(cookie, JSON.stringify(previousContent), {
			path : '/'
		});
		return tag_update;
	}

	Drupal.behaviors.hicCustomization = {
		attach: function (context) {
			$('.hic-customization-data', context).once('hic-customization').each(
					function() {
						cookie_agreed = getCookie('cookie-agreed');
						var tag_update = false;
						if(cookie_agreed == '2'){
							cookie_agreed_categories = getCookie('cookie-agreed-categories');
							if (cookie_agreed_categories.indexOf("marketing") > 0 ) {
								/*var nid = $(this).data('nid');
								var nodeType = $(this).data('node-type');
								var $this = this;
								[ 'islands', 'main_motivation', 'motivations', 'tags' ].forEach(function(current) {
									var newIds = _parseTaxonomyElementsArray.call($this, current);
									_updateCookieWithValues('hic_term_' + current, newIds);
								});*/
								//cogemos el main motivation o el tag para ver la priorida de motivaciones
								var main_motivationId = _parseTaxonomyElementsArray.call(this, 'main_motivation');
								var tag_motivationId = _parseTaxonomyElementsArray.call(this, 'tags');
								if (tag_motivationId.length >= 1){
									tag_update = _updateCookieWithTagValues('hic_term_custom_nav', tag_motivationId);
								}
								if ((main_motivationId.length >= 1) && !tag_update){
									_updateCookieWithValues('hic_term_custom_nav', main_motivationId);
								}
								//_updateCookieWithValues('hic_visited_' + nodeType, [ nid ]);
							}
						}
					});
		}
	};


})(jQuery, Drupal);
