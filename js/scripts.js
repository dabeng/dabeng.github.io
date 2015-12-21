'use strict';

(function($){

  function filterNutrients(event) {
    var label = $(event.target);
    var nutrient = label.data('nutrient');
    var hiddenN = $('#js-nutrients').find('a').not('.' + nutrient);
    if (!label.is('.active')) {
      hiddenN.fadeOut();
      label.addClass('active').siblings().removeClass('active');
    } else {
      hiddenN.fadeIn();
      label.removeClass('active');
    }
  }

  $(function() {
    $('.label-pool').on('click', '.label', filterNutrients);
  });

})(jQuery);