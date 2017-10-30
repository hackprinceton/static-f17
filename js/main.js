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

  if (!Foundation.MediaQuery.atLeast('large')) {
    $('#main-menu').hide('fast');
  }
}

// https://stackoverflow.com/a/901144
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {
  $(document).foundation();

  if ($('.template-home').length > 0) {
    $('.faq-wrap').masonry({
      itemSelector: '.faq',
      columnWidth: '.faq-sizer',
      percentPosition: true,
    });

    $('.faq').on('on.zf.toggler off.zf.toggler', function() {
      $('.faq-wrap').masonry();
    });

    // https://gist.github.com/flesler/3f3e1166690108abf747
    $('body').on('click', "a[href^='#'], a[href^='/#']", hashLinkHandler);

    if (window.location.hash[0] === '#') {
      scrollToHash(window.location.hash);
    }
  }

  // Read login status cookie, and show buttons if logged in
  var userId = Cookies.get('meteor_is_logged_in');
  if (userId === 'true') {
    $('.js-show-if-logged-out').addClass('hide');
    $('.js-show-if-logged-in').removeClass('hide');
  }

  var embedded = (getParameterByName('embedded') == '1');
  if (embedded) {
    $('.main-wrapper > nav').hide();
    $('.main-wrapper > footer').hide();
    $('body').css('padding-top', 0);
  }
});
