export const categorySubMenuToggle = () => {
  $('.categories_title').on('click', function() {
    $(this).toggleClass('active')
    $('.categories_menu_toggle').slideToggle('medium')
  })
  $('.categories_menu_toggle li.menu_item_children > a').on(
    'click',
    function() {
      if ($(window).width() < 991) {
        $(this).removeAttr('href')
        var element = $(this).parent('li')
        if (element.hasClass('open')) {
          element.removeClass('open')
          element.find('li').removeClass('open')
          element.find('ul').slideUp()
        } else {
          element.addClass('open')
          element.children('ul').slideDown()
          element
            .siblings('li')
            .children('ul')
            .slideUp()
          element.siblings('li').removeClass('open')
          element
            .siblings('li')
            .find('li')
            .removeClass('open')
          element
            .siblings('li')
            .find('ul')
            .slideUp()
        }
      }
    }
  )
  $('.categories_menu_toggle li.menu_item_children > a').append(
    '<span class="expand"></span>'
  )
}

export const niceSelectCategory = () => {
  $('.select_option').niceSelect()
}
