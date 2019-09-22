export const smallProductListingSlider = () => {
  $('.product_tab_column3')
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
      items: 3,
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
          items: 3
        }
      }
    })
}
