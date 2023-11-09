function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
	console.log(results);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function handle(d) {
  $(document).ready(function(){
	console.log(JSON.parse(d));
    var app = new Vue({
      el: '#app',
      data: {
        a: JSON.parse(d),
        word: getParameterByName("x")
      }
    });
  });
}

function getJSON() {
  url = "https://raw.githubusercontent.com/clancywoodburn/super-wiki/master/data.json#"
  var b = [];
  $.get(url)
  .done(function( data ) {
    handle(data)
  });
  return b
}

getJSON();
