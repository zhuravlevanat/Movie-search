"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);

    this.output = document.getElementById('output');
  }

  _createClass(UI, [{
    key: "showData",
    value: function showData(movies, genres) {
      var movieGenres = genres.join(', ');
      this.output.innerHTML += "\n    <h1>".concat(movies.title, "</h1>\n    <span>").concat(movies.release_date, "</span>\n    <p>").concat(movies.overview, "</p>\n    <p>").concat(movieGenres, "</p>\n    <img class =\"movie-backdrop\" src = 'http://image.tmdb.org/t/p/w300/").concat(movies.backdrop_path, "'></img>\n    ");
    }
  }]);

  return UI;
}();