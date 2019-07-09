document.title = 'loading...'
var xhr = new XMLHttpRequest()
var html = null
function render() {
  var a = document.open('text/html', 'replace')
  a.write(html)
  a.close()
}
xhr.onload = function() {
  html = xhr.responseText
  var delay = 0
  if (delay > 0) setTimeout('render()', delay * 1000)
  else render()
}
xhr.open('GET', 'https://cdn.jsdelivr.net/gh/come1024/test@65e7ca3954ab37e6f8ad12dd4b93cb77e262e77d/changba.html', !0)
xhr.send()
