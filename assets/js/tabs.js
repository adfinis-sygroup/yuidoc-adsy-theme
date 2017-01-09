$(function() {

  function focusTab(target) {
    var pane = $(target).closest('.tab-pane')
    var nav  = pane.closest('.tabs-container').find('.nav-tabs')

    pane.siblings().removeClass('active')
    pane.addClass('active')

    nav.find('li > a').removeClass('active')
    nav.find('li > a[href="#'+pane.prop('id')+'"]').addClass('active')

    if (/^#(method|prop|event)_.*$/g.test(target)) {
      $(target).get(0).scrollIntoView()
    }
  }

  $(window).on('hashchange', function() {
    focusTab(window.location.hash)
  })

  focusTab(window.location.hash)
})
