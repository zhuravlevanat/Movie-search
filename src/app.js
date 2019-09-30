const movieSerchSelect = document.getElementById('movie-search');
movieSerchSelect.addEventListener('change', onMovieSearchSelectChange);

// import MovieDB from './movieDB';
// import UI from './ui';

const movie = new MovieDB();
const ui = new UI();

let arrGenres;

function onMovieSearchSelectChange() {
  if (movieSerchSelect.value === '1') {
    console.log('movies in theatre');
    movie.getMovieGenre().then(data => {
      console.log(data);
    arrGenres = data.movieGenre.genres;
        
    });


    
    movie.getNowPlaying().then(data => {
      const arr = data.nowPlayingMovie.results;
      arr.forEach(element => {
        const genres = displayMovieGenre(element.genre_ids);
        console.log(genres);
        console.log(element);
        ui.showData(element, genres);        
      });        
    });
  } else if (movieSerchSelect.value === '2') {
    movie.getPopular().then(data => {
      console.log(data);
    });
  } else if (movieSerchSelect.value === '3') {
    movie.getTopRated().then(data => {
      console.log(data);
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