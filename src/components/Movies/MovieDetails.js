import React, { useEffect, useState } from 'react';
import MovieService from '../../services/Axios.Movie.Service';

// Class based components
const MovieDetails = ({ id }) => {
  const [ movie, setMovie ] = useState();

  useEffect(() => {
    const movieService = new MovieService();
    const getMovieById = async (id) => {
      const movie = await movieService.getMovieById(id);
      setMovie(movie);
    }
    getMovieById(id);
  },[id]);

  return movie ? (
    <div className="row">
      <div className="col-md-6 text-center">
        {(movie.Poster === 'N/A') ?
          <div className="d-none d-md-block" style={{position:'relative',width:'100%',paddingBottom:'150%',background:'grey'}}>
            <div className="position-absolute top-50 start-50 translate-middle text-light">
              No Poster
            </div>
          </div>
          :
          <img src={movie.Poster} alt={`${movie.Title} poster`} style={{maxWidth:'100%'}} />
        }
      </div>
      <div className="col-md-6">
        <strong className="float-end text-primary h4">{movie.imdbRating}</strong>
        <h4><strong>{movie.Title}</strong></h4>
        { movie.Rated !== 'N/A' && <span className="badge bg-secondary m-1">{movie.Rated}</span> }
        { movie.Runtime !== 'N/A' && <span className="badge bg-secondary m-1">{movie.Runtime}</span> }
        { movie.Genre !== 'N/A' && <span className="badge bg-secondary m-1">{movie.Genre}</span> }
        { movie.Plot !== 'N/A' && 
          <p><strong>Plot</strong><br/>
          {movie.Plot}</p>
        }
        { movie.Actors !== 'N/A' && 
          <p><strong>Actors</strong><br/>
          {movie.Actors}</p>
        }
      </div>
    </div>
  ) : (<h2>Loading...</h2>);
}

export default MovieDetails;