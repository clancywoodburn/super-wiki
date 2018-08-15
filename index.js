function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var app = new Vue({
  el: '#app',
  data: {
    a: {
      "spiderman": {
        "supername": "Spider-Man",
        "firstname": "Peter",
        "lastname": "Parker",
        "description": "This is a description of Spider-Man.",
        "ishero": true,
        "powers": [
          "Wall Crawling",
          "Spider Sense",
          "Super Strength"
        ]
      }
    }
  }
});
