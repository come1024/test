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
xhr.open('GET', 'https://cdn.jsdelivr.net/gh/come1024/test@ba501f272f993ec5fff70f71cd980a7e19265d28/changba.html', !0)
xhr.send()
