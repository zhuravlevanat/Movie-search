class MovieDB {
  constructor() {
    this._key = '28ae3beaaffa9842263e6e671dfde8d0';
  }

  async getNowPlaying() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this._key}&language=en-US&page=1`);

    const nowPlayingMovie = await response.json();

    return {
      nowPlayingMovie
    }
  }

  async getPopular() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this._key}&language=en-US&page=1`);

    const popularMovie = await response.json();

    return {
      popularMovie
    }
  }

  async getTopRated() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this._key}&language=en-US&page=1`);

    const topRatedMovie = await response.json();

    return {
      topRatedMovie
    }
  }

  async getMovieGenre() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this._key}&language=en-US`);

    const movieGenre = await response.json();

    return {
      movieGenre
    }
  }

  
  
}

//export default MovieDB;

