export const productWithCategoriesListingSlider = () => {
  $('.categories_column2')
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
      nav: false,
      autoplayTimeout: 8000,
      items: 2,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        }
      }
    })
}
