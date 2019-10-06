const movieSearchSelect = document.getElementById('movie-search');
movieSearchSelect.addEventListener('change', onMovieSearchSelectChange);

// import MovieDB from './movieDB';
// import UI from './ui';

const movie = new MovieDB();
const ui = new UI();

let arrGenres;

function clearOutput() {
  ui.output.innerHTML="";  
}

function displayMovie(list) {
  list.forEach(element => {
    const genres = getGenreTitle(element.genre_ids);
    ui.showData(element, genres);        
  }); 
}

function getGenreTitle(idGenre) {
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

function onMovieSearchSelectChange(event) {
  movie.getMovieGenres().then(data => { 
    arrGenres = data; 
  });  
  switch (event.target.value) {
    case '1':
      clearOutput();
      movie.getNowPlaying().then(data => {
        displayMovie(data.nowPlayingMovie);                 
      });
    break;
    case '2':
      clearOutput();
      movie.getPopular().then(data => {
        displayMovie(data.popularMovie);                 
      });
    break;
    case '3':
      clearOutput();
      movie.getTopRated().then(data => {
      displayMovie(data.topRatedMovie);                 
      });
    break;
  }  
}

