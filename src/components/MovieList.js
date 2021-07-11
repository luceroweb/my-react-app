import React, {  useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import MovieModal from './MovieModal';
import MovieService from '../services/Movie.Service';

export const MovieList = () => {
  const [ movies, setMovies ] = useState([]);
  const [show, setShow] = useState();
  const [ movieDetails, setMovieDetails ] = useState([]);
  const movieService = new MovieService();

  async function getMoviesByTitle(title) {
    const movies = await movieService.getMoviesByTitle(title);
    setMovies(movies.Search);
  }

  useEffect(() => {
    getMoviesByTitle('dune');
  }, []);

  async function getMovieById(id) {
    const movie = await movieService.getMovieById(id);
    setMovieDetails(movie);
  }

  const showMovie = (id,index) => {
    getMovieById(id);
    if(index === show) return setShow(null);
    setShow(index);
  }

  const renderMovieList = () => (
    movies.map((movie, index) => (
      <div className="movie-card" key={index}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <div>
          <h5>{ movie.Title }</h5>
          <button onClick={() => showMovie(movie.imdbID,index)}>
            { index === show ? "Hide Movie" : "Show Movie" }
          </button>
        </div>
        { show === index && 
          <MovieModal 
            onClose={setShow} 
            show={show} 
            children={
              <MovieDetails 
                movie={movie} 
              />
            } 
          />
        }
      </div>
    ))
  );
    // https://omdbapi.com/?s=star%20wars&apikey=19c7ac68

  return(
    <div className="movie-list-container">
      { movies && renderMovieList() }
    </div>
  )
}