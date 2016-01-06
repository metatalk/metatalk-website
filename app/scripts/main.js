$(function() {
  $(window).scroll(function(e) {
    if($(this).scrollTop() > 10) {
      $('.site-nav').addClass('is-scrolled');
    } else {
      $('.site-nav').removeClass('is-scrolled');
    }
  });

  // onload
  if(document.body.clientWidth >= 768) {
    $('video').attr('autoplay', true);
  }

  // If you want to autoplay when the window resized wider than 780px
  // after load, you can add this:

  $(window).resize(function() {
    if(document.body.clientWidth >= 768) {
      $('video').attr('autoplay', true);
    }
  });
});