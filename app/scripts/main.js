$(function() {
  $(window).scroll(function(e) {
    if($(this).scrollTop() > 10) {
      $('.site-nav').addClass('is-scrolled');
    } else {
      $('.site-nav').removeClass('is-scrolled');
    }
  });

  $('.site-nav__toggle').click(function(e) {
    $('.site-nav__inner').toggleClass('is-out')
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

  $('.project-detail__image').hover(function() {
    $(this).addClass('is-hover');
  },function() {
    $(this).removeClass('is-hover');
  });

  $('.btn--project').click(function(e) {
    $('body').addClass('is-modal-open');
    var hash = $(this).attr('href').substring(2);
    $('.project-detail#'+hash).addClass('is-open');
  });

  $('.project-detail__close').click(function(e) {
    e.preventDefault();
    history.pushState({}, '', './wat-we-doen.html');
    $('body').removeClass('is-modal-open');
    $('.project-detail').removeClass('is-open');
  });

});