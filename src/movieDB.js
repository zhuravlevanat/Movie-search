class MovieDB {
  constructor() {    
  }

  static urlNowPlayingMovie = `https://api.themoviedb.org/3/movie/now_playing?api_key=28ae3beaaffa9842263e6e671dfde8d0&language=en-US&page=1`;
  static urlPopularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=28ae3beaaffa9842263e6e671dfde8d0&language=en-US&page=1`;
  static urlTopRatedMovie = `https://api.themoviedb.org/3/movie/top_rated?api_key=28ae3beaaffa9842263e6e671dfde8d0&language=en-US&page=1`
  static urlMovieGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=28ae3beaaffa9842263e6e671dfde8d0&language=en-US`

  async getNowPlaying() {
    const response = await fetch(MovieDB.urlNowPlayingMovie);

    const responseObj = await response.json();
    const nowPlayingMovie = responseObj.results;
    
    return {
      nowPlayingMovie
    }
  }

  async getPopular() {
    const response = await fetch(MovieDB.urlPopularMovie);

    const responseObj = await response.json();
    const popularMovie = responseObj.results;

    return {
      popularMovie
    }
  }

  async getTopRated() {
    const response = await fetch(MovieDB.urlTopRatedMovie);

    const responseObj = await response.json();
    const topRatedMovie = responseObj.results;

    return {
      topRatedMovie
    }
  }

  async getMovieGenres() {
    const response = await fetch(MovieDB.urlMovieGenre);

    const responseObj = await response.json();
    const arrayOfMovieGenres = responseObj.genres;
    
    return arrayOfMovieGenres;
  }  
}

//export default MovieDB;

