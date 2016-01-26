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
    if($(this).parent().hasClass('logos__logo')) {
      $.get('/parts/project-detail.html', function(html) {
        $('body').append(html).find('.project-detail#'+hash).addClass('is-open');
      });
    } else {
      $('.project-detail#'+hash).addClass('is-open');
    }

  });

  $('body').delegate('.project-detail__close','click', function(e) {
    e.preventDefault();
    history.pushState({}, '', './wat-we-doen.html');
    $('body').removeClass('is-modal-open');
    $('.project-detail').removeClass('is-open');
  });

  var hashTagActive = "";
  $(".down,#btn-down").click(function (event) {
    if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
      event.preventDefault();
      //calculate destination place
      var dest = 0;
      if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(this.hash).offset().top;
      }
      //go to destination
      $('html,body').animate({
        scrollTop: dest
      }, 700, 'swing');
      hashTagActive = this.hash;
    }
  });

  if(window.location.hash == '#form') {
    console.log('ok');
    $('.confirm').css('display','inline-block');
    $('#form').hide();
  }

});