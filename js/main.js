function scrollToHash(hash) {
  const offsetTop = -$('.title-bar').height();
  $(window).stop(true).scrollTo(hash, {
    axis: 'y',
    duration: 400,
    interrupt: false,
    offset: {
      top: offsetTop,
    },
  });
}

function hashLinkHandler(e) {
  e.preventDefault();
  history.pushState(null, null, this.hash);
  scrollToHash(this.hash);

  if (Foundation.MediaQuery.is('medium down')) {
    $('#main-menu').hide('fast');
  }
}

$(document).ready(function() {
  $(document).foundation();

  $('.faq-wrap').masonry({
    itemSelector: '.faq',
    columnWidth: '.faq-sizer',
    percentPosition: true,
  });

  // https://gist.github.com/flesler/3f3e1166690108abf747
  $('body').on('click', "a[href^='#'], a[href^='/#']", hashLinkHandler);

  $('.faq').on('on.zf.toggler off.zf.toggler', function() {
    $('.faq-wrap').masonry();
  });

  if (window.location.hash[0] === '#') {
    scrollToHash(window.location.hash);
  }

  // Read login status cookie, and show buttons if logged in
  var userId = Cookies.get('meteor_is_logged_in');
  if (userId === 'true') {
    $('.js-show-if-logged-out').addClass('hide');
    $('.js-show-if-logged-in').removeClass('hide');
  }
});
