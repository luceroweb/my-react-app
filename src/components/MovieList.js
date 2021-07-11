import React, {  useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import MovieModal from './MovieModal';
import MovieService from './MovieService';

export const MovieList = () => {
  const [ movies, setMovies ] = useState([]);
  const movieService = new MovieService();              

  async function getMovies() {
    const movies = await movieService.getMovies('dune');
    setMovies(movies.Search);
    console.log(movies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const [show, setShow] = useState();

  const showMovie = (index) => {
    if(index === show) return setShow(null);
    setShow(index);
  }              

  const renderMovieList = () => (
    movies.map((movie, index) => (
      <div key={index}>
        <div className="movie-card">
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <div>
            <h5>{ movie.title }</h5>
            <button onClick={() => showMovie(index)}>
              { index === show ? "Hide Movie" : "Show Movie" }
            </button>
          </div>
        </div>
        { show === index && 
          <MovieModal 
            onClose={setShow} 
            show={show} 
            children={<MovieDetails 
              movie={movie} 
            />} 
          />
        }
      </div>
    ))
  );
    // https://omdbapi.com/?s=star%20wars&apikey=19c7ac68

  return(
    <div className="movile-list-container">
      { console.log(movies)}
      { renderMovieList() }
    </div>
  )
}