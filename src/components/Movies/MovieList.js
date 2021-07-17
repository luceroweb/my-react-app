import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import MovieModal from './MovieModal';
// import MovieService from '../services/Movie.Service';
import MovieService from '../../services/Axios.Movie.Service';
import LogFormData from '../Forms/LogFormData';

const MovieList = () => {
  const [ movieList, setMovieList ] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const movieService = new MovieService();

  const getMoviesByTitle = async (title) => {
    const movieList = await movieService.getMoviesByTitle(title);
    setMovieList(movieList.Search);
  }

  useEffect(() => {
    getMoviesByTitle('jason bourne');
  }, []);

  const onClose = () => setSelectedMovie(null);

  const renderMovieList = () => (
    movieList.map((movie, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className="d-block mb-4 h-100 text-center text-md-start" onClick={() => setSelectedMovie(movie.imdbID)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} style={{width:'300px',maxWidth:'100%'}} />
          <div>
            <p>{ movie.Title }</p>
            <button onClick={() => setSelectedMovie(movie.imdbID)}>
              { index === selectedMovie ? "Hide Movie" : "Show Movie" }
            </button>
          </div>
        </div>
        { selectedMovie && 
          <MovieModal
            show={selectedMovie}
            onClose={onClose}
            children={
              <MovieDetails
                id={selectedMovie}
              />
            } 
          />
        }
      </div>
    ))
  );

  return(
    <div className="container">
      <h1 className="font-weight-light mt-4 mb-0">Movie List</h1>
      <LogFormData />
      <div className="row align-items-center">
        { movieList && renderMovieList() }
      </div>
    </div>
  )
}

export default MovieList;