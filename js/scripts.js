'use strict';

(function($){

  function filterNutrients(event) {
    var label = $(event.target);
    var hiddenRepos = $('#repo-list').find('a').not('.' + label.data('label'));
    if (!label.is('.active')) {
      hiddenRepos.addClass('fade-out');
      label.addClass('active').siblings().removeClass('active');
    } else {
      hiddenRepos.removeClass('fade-out');
      label.removeClass('active');
    }
  }

  function showMyRepo(event) {
    $('.below-head').find('a').addClass('masked');
    $(event.target).addClass('slide-out');
    $('#above-head').find('img').attr('src',$(event.target).attr('src'));
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