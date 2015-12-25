'use strict';

(function($){

  function filterRepos(event) {
    var label = $(event.target);
    if (label.is('.disabled')) {
      return;
    }
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
    $('#above-head').find('a').attr('href',$(event.target).parent().data('repo-address'));
    $('#above-head').find('img').attr('src',$(event.target).attr('src'));
    $('#above-content').find('.repo-desc').html($(event.target).siblings('.repo-desc').html());
    $('#above-head,#above-content').addClass('slide-in');
    $('.label-pool').find('.label').addClass('disabled');
  }

  function hideMyRepo() {
    $('.below-head').find('a').removeClass('masked');
    $('.myrepo').find('img.slide-out').removeClass('slide-out');
    $('#above-head,#above-content').removeClass('slide-in');
    $('.label-pool').find('.label').removeClass('disabled');
  }

  $(function() {

    $('.label-pool').on('click', '.label', filterRepos);

    $('.myrepo').on('click', showMyRepo);

    $('#above-content').find('.btn-return').on('click', hideMyRepo);

  });

})(jQuery);