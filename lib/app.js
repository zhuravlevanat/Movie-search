"use strict";

var movieSerchSelect = document.getElementById('movie-search');
movieSerchSelect.addEventListener('change', onMovieSearchSelectChange);
var movie = new MovieDB();
var ui = new UI();
var arrGenres;

function onMovieSearchSelectChange() {
  if (movieSerchSelect.value === '1') {
    console.log('movies in theatre');
    movie.getMovieGenre().then(function (data) {
      console.log(data);
      arrGenres = data.movieGenre.genres;
    });
    movie.getNowPlaying().then(function (data) {
      var arr = data.nowPlayingMovie.results;
      arr.forEach(function (element) {
        var genres = displayMovieGenre(element.genre_ids);
        console.log(genres);
        console.log(element);
        ui.showData(element, genres);
      });
    });
  } else if (movieSerchSelect.value === '2') {
    movie.getPopular().then(function (data) {
      console.log(data);
    });
  } else if (movieSerchSelect.value === '3') {
    movie.getTopRated().then(function (data) {
      console.log(data);
    });
  }
}

function displayMovieGenre(idGenre) {
  var genreName = [];
  arrGenres.filter(function (data) {
    idGenre.forEach(function (elem) {
      if (elem === data.id) {
        genreName.push(data.name);
      }
    });
  });
  return genreName;
}