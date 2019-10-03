const movieSerchSelect = document.getElementById('movie-search');
movieSerchSelect.addEventListener('change', onMovieSearchSelectChange);

// import MovieDB from './movieDB';
// import UI from './ui';

const movie = new MovieDB();
const ui = new UI();

let arrGenres;

function onMovieSearchSelectChange() {
  movie.getMovieGenre().then(data => {    
    arrGenres = data.movieGenre.genres;        
    });

  if (movieSerchSelect.value === '1') {
    movie.getNowPlaying().then(data => {
      const arr = data.nowPlayingMovie.results;
      arr.forEach(element => {
        const genres = displayMovieGenre(element.genre_ids);
        ui.showData(element, genres);        
      });        
    });
  } else if (movieSerchSelect.value === '2') {
    movie.getPopular().then(data => {
      const arr = data.popularMovie.results;
      arr.forEach(element => {
        const genres = displayMovieGenre(element.genre_ids);
        ui.showData(element, genres);        
      }); 
    });
  } else if (movieSerchSelect.value === '3') {
    movie.getTopRated().then(data => {
      const arr = data.topRatedMovie.results;
      arr.forEach(element => {
        const genres = displayMovieGenre(element.genre_ids);
        ui.showData(element, genres);        
      }); 
    });
  }  
}

function displayMovieGenre(idGenre) {
  let genreName =[];
  arrGenres.filter(data => {
    idGenre.forEach(elem => {
    if (elem === data.id) {
      genreName.push(data.name);
    }
  });
});
return genreName;
}