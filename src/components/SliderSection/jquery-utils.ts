export const mainOwlSlider = () => {
  $('.slider_area').owlCarousel({
    animateOut: 'fadeOut',
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 8000,
    items: 1,
    dots: false,
    lazyLoad: true,
    navText: [
      '<i class="zmdi zmdi-long-arrow-left zmdi-hc-fw"></i>',
      '<i class="zmdi zmdi-long-arrow-right zmdi-hc-fw"></i>'
    ]
  })
}

export const dealSlider = () => {
  $('.product_column1')
    .on('changed.owl.carousel initialized.owl.carousel', function(event) {
      $(event.target)
        .find('.owl-item')
        .removeClass('last')
        .eq(event.item.index + event.page.size - 1)
        .addClass('last')
    })
    .owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplayTimeout: 8000,
      items: 1,
      dots: false,
      navText: [
        '<i class="ion-ios-arrow-back"></i>',
        '<i class="ion-ios-arrow-forward"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 1
        }
      }
    })
}

export const productCountdown = () => {
  $('[data-countdown]').each(function() {
    var $this = $(this),
      finalDate = $(this).data('countdown')
    $this.countdown(finalDate, function(event) {
      $this.html(
        event.strftime(
          '<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">hours</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>'
        )
      )
    })
  })
}
