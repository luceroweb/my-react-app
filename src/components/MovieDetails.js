import React, { useEffect, useState } from 'react';
import MovieService from '../services/Axios.Movie.Service';

// Class based components
const MovieDetails = ({ id }) => {
  const [ movie, setMovie ] = useState();
  const movieService = new MovieService();

  useEffect(() => {
    getMovieById(id);
  },[id]);

  const getMovieById = async (id) => {
    const movie = await movieService.getMovieById(id);
    setMovie(movie);
  }

  return movie ? (
    <div className="row">
      <div className="col-md-6 text-center">
        <img src={movie.Poster} alt={`${movie.Title} poster`} style={{maxWidth: '100%'}} />
      </div>
      <div className="col-md-6">
        <strong className="float-end text-primary h4">{movie.imdbRating}</strong>
        <h4><strong>{movie.Title}</strong></h4>
        <span className="badge bg-secondary m-1">{movie.Rated}</span>
        <span className="badge bg-secondary m-1">{movie.Runtime}</span>
        <span className="badge bg-secondary m-1">{movie.Genre}</span>
        <p><strong>Plot</strong><br/>
        {movie.Plot}</p>
        <p><strong>Actors</strong><br/>
        {movie.Actors}</p>
      </div>
    </div>
  ) : (<h2>Loading...</h2>);
}

export default MovieDetails;