export const productListingSlider = () => {
  $('.product_column4')
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
      autoplay: false,
      autoplayTimeout: 8000,
      items: 4,
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
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    })
}
