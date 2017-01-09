$(function() {
  function search(term) {
    var re = new RegExp(term, 'gi')

    $('.nav-side-list-item').each(function() {
      if (!re.test($(this).text())) {
        return $(this).hide()
      }

      return $(this).show()
    })
  }

  $('#search').on('input', function() {
    search($(this).val())
  })
})
