function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}




function getJSON() {
  url = "https://raw.githubusercontent.com/Clancy-W/super-wiki/master/data.json#"
  var b = [];
  $.get(url)
  .done(function( data ) {
    b.push(JSON.parse(data))
  });
  return b
}

h = getJSON()

$(document).ready(function(){
  var app = new Vue({
    el: '#app',
    data: {
      a: h[0],
      word: getParameterByName("x")
    }
  });
});
