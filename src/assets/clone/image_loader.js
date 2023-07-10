(function($, settings) {
 $(window).ajaxSuccess(loadImages);
 function loadImages(event) {
  Drupal.behaviors.lazy.attach(document, settings);
 }
})(jQuery, drupalSettings);