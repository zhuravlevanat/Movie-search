"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovieDB =
/*#__PURE__*/
function () {
  function MovieDB() {
    _classCallCheck(this, MovieDB);

    this._key = '28ae3beaaffa9842263e6e671dfde8d0';
  }

  _createClass(MovieDB, [{
    key: "getNowPlaying",
    value: function () {
      var _getNowPlaying = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var response, nowPlayingMovie;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(this._key, "&language=en-US&page=1"));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                nowPlayingMovie = _context.sent;
                return _context.abrupt("return", {
                  nowPlayingMovie: nowPlayingMovie
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getNowPlaying() {
        return _getNowPlaying.apply(this, arguments);
      }

      return getNowPlaying;
    }()
  }, {
    key: "getPopular",
    value: function () {
      var _getPopular = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var response, popularMovie;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(this._key, "&language=en-US&page=1"));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                popularMovie = _context2.sent;
                return _context2.abrupt("return", {
                  popularMovie: popularMovie
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPopular() {
        return _getPopular.apply(this, arguments);
      }

      return getPopular;
    }()
  }, {
    key: "getTopRated",
    value: function () {
      var _getTopRated = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var response, topRatedMovie;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(this._key, "&language=en-US&page=1"));

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                topRatedMovie = _context3.sent;
                return _context3.abrupt("return", {
                  topRatedMovie: topRatedMovie
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTopRated() {
        return _getTopRated.apply(this, arguments);
      }

      return getTopRated;
    }()
  }, {
    key: "getMovieGenre",
    value: function () {
      var _getMovieGenre = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var response, movieGenre;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(this._key, "&language=en-US"));

              case 2:
                response = _context4.sent;
                _context4.next = 5;
                return response.json();

              case 5:
                movieGenre = _context4.sent;
                return _context4.abrupt("return", {
                  movieGenre: movieGenre
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getMovieGenre() {
        return _getMovieGenre.apply(this, arguments);
      }

      return getMovieGenre;
    }()
  }]);

  return MovieDB;
}();