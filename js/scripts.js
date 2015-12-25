'use strict';

(function($){

  function filterRepos(event) {
    var label = $(event.target);
    if (label.is('.disabled')) {
      return;
    }

    $('#repo-list').find('a.fade-out').removeClass('fade-out');
    if (!label.is('.active')) {
      $('#repo-list').find('a').not('.' + label.data('label')).addClass('fade-out');
      label.addClass('active').siblings().removeClass('active');
    } else {
      label.removeClass('active');
    }
  }

  function showMyRepo(event) {
    var $repoLogo = $(event.target);
    $('.below-head').find('a').addClass('masked');
    $repoLogo.addClass('slide-out');
    $('#above-head').find('a').attr('href',$repoLogo.parent().data('repo-address'));
    $('#above-head').find('img').attr('src',$repoLogo.attr('src'));
    $('#above-content').find('.repo-desc').html($repoLogo.siblings('.repo-desc').html());
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