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
xhr.open('GET', 'https://cdn.jsdelivr.net/gh/come1024/test@23ef21337d6ce4fdbbcac328b406e8c4b60b42d9/changba.html', !0)
xhr.send()
