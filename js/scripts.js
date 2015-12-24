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
    $('#cohort').on('click',function() {
      $('.below-head').find('a').addClass('masked');
      $(this).addClass('slide-out');
      $('#above-head,#above-content').addClass('slide-in');
    });
    $('#above-content').find('.btn-return').on('click',function() {
      $('.below-head').find('a').removeClass('masked');
      $('#cohort').removeClass('slide-out');
      $('#above-head,#above-content').removeClass('slide-in');
    });
  });

})(jQuery);