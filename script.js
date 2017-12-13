$(document).ready(function() {
  $('.ui.dropdown').dropdown()

  var lis = $('.nodeview ul > li')

  for (var i = 0; i < lis.length; i += 6) {
    lis.slice(i, i + 6).wrapAll("<div class='lefttor'></div>")
  }

  for (var i = 6; i < lis.length; i += 12) {
    lis.slice(i, i + 6).wrapAll("<div class='rightol'></div>")
  }

  $('.skipped')
    .prev('.reached')
    .removeClass('reached')
    .attr('id', 'start')

  $('.skipped')
    .next('.reached')
    .attr('id', 'end')
})
const connectVar = {
  paintStyle: { stroke: '#ff9835', strokeWidth: 3 },
  source: 'start',
  target: 'end',
  anchor: ['Left', 'Left'],
  endpoint: 'Blank',
  overlays: ['Arrow'],
  anchor: [0, 1, 0, 1]
}
jsPlumb.ready(function() {
  jsPlumb.connect(connectVar)
})
