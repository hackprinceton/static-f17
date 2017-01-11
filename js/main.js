function scrollToHash(hash) {
  const offsetTop = -$('.top-bar').height();
  $(window).stop(true).scrollTo(hash, {
    duration: 500,
    interrupt: true,
    offset: {
      top: offsetTop,
    },
  });
}

function hashLinkHandler(e) {
  e.preventDefault();
  history.pushState(null, null, this.hash);
  scrollToHash(this.hash);
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
});
