$(function() {
  function setOptions() {
    var showInherited  = $('#options #show-inherited').get(0)
    var showProtected  = $('#options #show-protected').get(0)
    var showPrivate    = $('#options #show-private').get(0)
    var showDeprecated = $('#options #show-deprecated').get(0)

    $('body').toggleClass('hide-inherited',  showInherited && !showInherited.checked)
    $('body').toggleClass('hide-protected',  showProtected && !showProtected.checked)
    $('body').toggleClass('hide-private',    showPrivate && !showPrivate.checked)
    $('body').toggleClass('hide-deprecated', showDeprecated && !showDeprecated.checked)
  }

  $('body').on('change', '#options input[type=checkbox]', function() {
    setOptions()
  })

  setOptions()
})
