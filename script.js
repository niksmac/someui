$(document).ready(function () {
  var lis = $('.nodeview ul > li')

  for (var i = 0; i < lis.length; i += 6) {
    lis.slice(i, i + 6).wrapAll("<div class='lefttor'></div>")
  }

  for (var i = 6; i < lis.length; i += 12) {
    lis.slice(i, i + 6).wrapAll("<div class='rightol'></div>")
  }
})
