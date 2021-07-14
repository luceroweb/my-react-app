import React, {  useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import MovieModal from './MovieModal';
import MovieService from '../services/Movie.Service';

export const MovieList = () => {
  const [ movies, setMovies ] = useState([]);
  const [show, setShow] = useState();
  const [ movieDetails, setMovieDetails ] = useState([]);
  const movieService = new MovieService();

  async function callMovieServiceByTitle(title) {
    const movies = await movieService.getMoviesByTitle(title);
    setMovies(movies.Search);
  }

  useEffect(() => {
    callMovieServiceByTitle('harry potter');
  }, []);

  async function getMovieById(id) {
    const movie = await movieService.getMovieById(id);
    setMovieDetails(movie);
  }

  const showMovie = (id,index) => {
    setMovieDetails([]);
    getMovieById(id);
    if(index === show) return setShow(null);
    setShow(index);
  }

  const renderMovieList = () => (
    movies.map((movie, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className="d-block mb-4 h-100 text-center text-md-start" onClick={() => showMovie(movie.imdbID,index)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} style={{maxWidth:'100%'}} />
          <div>
            <p>{ movie.Title }</p>
            <button onClick={() => showMovie(movie.imdbID,index)}>
              { index === show ? "Hide Movie" : "Show Movie" }
            </button>
          </div>
        </div>
        { show === index && 
          <MovieModal 
            onClose={setShow} 
            show={show} 
            children={
              <MovieDetails 
                movie={movieDetails} 
              />
            } 
          />
        }
      </div>
    ))
  );
    // https://omdbapi.com/?s=star%20wars&apikey=19c7ac68

  return(
    <div className="container">
      <h1 className="font-weight-light mt-4 mb-0">Movie List</h1>
      <div className="row align-items-center">
        { movies && renderMovieList() }
      </div>
    </div>
  )
}