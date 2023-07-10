(function($) {
	Drupal.behaviors.hic_footer_reset_cookies = {
		attach: function attach(context, settings) {
			let resetCookiesSettings = settings.hic_footer.resetCookies;
			let resetCookiesDidomiSettings = settings.hic_footer.resetCookiesDidomi;
			if(typeof resetCookiesSettings != "undefined"){
			  $(resetCookiesSettings.selector, context).once('reset-cookies-link').click(function(event) {
			    if(typeof Drupal.eu_cookie_compliance != "undefined"){
				event.preventDefault();
				event.stopPropagation();
				Drupal.eu_cookie_compliance.createPopup(settings.eu_cookie_compliance.popup_html_info);
				Drupal.eu_cookie_compliance.initPopup();
				Drupal.attachBehaviors();
			    }
			  });
			}
			if(typeof resetCookiesDidomiSettings != "undefined"){
				$(resetCookiesDidomiSettings.selector, context).once('reset-cookies-link-didomi').click(function(event) {
					event.preventDefault();
					event.stopPropagation();
					javascript:Didomi.preferences.show();
				});
			}
		}
	};
	$(document).on('eu_cookie_compliance_popup_open', function() {
		Drupal.behaviors.cookieComplianceShow.attach(document, drupalSettings);
		if(typeof Didomi != "undefined"){
			Didomi.preferences.show();
		}
	});
})(jQuery);
