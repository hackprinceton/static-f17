function scrollToHash(hash) {
  $(window).stop(true).scrollTo(hash, {
    duration: 400,
    interrupt: true,
  });
}

function hashLinkHandler(e) {
  e.preventDefault();
  history.pushState(null, null, this.hash);
  scrollToHash(this.hash);
  $('#main-menu').hide();
}

$(document).ready(() => {
  $(document).foundation();

  this.$('.faq-wrap').masonry({
    itemSelector: '.faq',
    columnWidth: '.faq-sizer',
    percentPosition: true,
  });

  // https://gist.github.com/flesler/3f3e1166690108abf747
  $('body').on('click', "a[href^='#'], a[href^='/#']", hashLinkHandler);

  this.$('.faq').on('on.zf.toggler off.zf.toggler', () => {
    this.$('.faq-wrap').masonry();
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
