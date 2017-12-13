$(document).ready(function() {
  $('.ui.dropdown').dropdown()

  var lis = $('.nodeview ul > li')

  for (var i = 0; i < lis.length; i += 6) {
    lis.slice(i, i + 6).wrapAll("<div class='lefttor'></div>")
  }

  for (var i = 6; i < lis.length; i += 12) {
    lis.slice(i, i + 6).wrapAll("<div class='rightol'></div>")
  }

  $('.conatiner li')
    .last()
    .addClass('final')

  $('li.skipped').each(function(index, val) {
    $(this)
      .prev('.reached')
      .removeClass('reached')
      .attr('id', 'start' + index)
  })
  $('li.skipped').each(function(index, val) {
    $(this)
      .next('.reached')
      .attr('id', 'end' + index)
  })
})
const common = {
  cssClass: 'myCssClass',
  paintStyle: { stroke: '#ff9835', strokeWidth: 3 },
  anchor: ['Right', 'Left'],
  connector: [
    'Flowchart',
    { stub: 80, cornerRadius: 5, alwaysRespectStubs: true }
  ],
  endpoint: 'Blank',
  overlays: ['PlainArrow'],
  anchor: [0, 1, 0, 1],
  detachable: false
}
const connectVar = {
  source: 'start0',
  target: 'end1'
}
const connectVar2 = {
  source: 'start2',
  target: 'end2'
}
jsPlumb.ready(function() {
  jsPlumb.connect(connectVar, common)
  jsPlumb.connect(connectVar2, common)
})
