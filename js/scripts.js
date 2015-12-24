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

  function showMyRepo(event) {
    $('.below-head').find('a').addClass('masked');
    $(event.target).addClass('slide-out');
    $('#above-head').find('a').css('background-image','url(img/' + event.target.id + '.png)')
    $('#above-head,#above-content').addClass('slide-in');
  }

  function hideMyRepo() {
    $('.below-head').find('a').removeClass('masked');
    $('.myrepo.slide-out').removeClass('slide-out');
    $('#above-head,#above-content').removeClass('slide-in');
  }

  $(function() {

    $('.label-pool').on('click', '.label', filterNutrients);

    $('.myrepo').on('click', showMyRepo);

    $('#above-content').find('.btn-return').on('click', hideMyRepo);

  });

})(jQuery);