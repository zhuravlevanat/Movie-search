class UI {
  constructor() {
    this.output = document.getElementById('output');
  }

  showData(movies, genres) {
    const movieGenres = genres.join(', ');
    this.output.innerHTML += `
    <h1>${movies.title}</h1>
    <span>${movies.release_date}</span>
    <p>${movies.overview}</p>
    <p>${movieGenres}</p>
    <img class ="movie-backdrop" src = 'http://image.tmdb.org/t/p/w300/${movies.backdrop_path}'></img>
    ` ;
    
  }  
}

export default UI;
