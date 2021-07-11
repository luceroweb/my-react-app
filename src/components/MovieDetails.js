import React from 'react';

// Class based components
const MovieDetails = ({ movie }) => {
  
  return (
    <>
      {movie &&
        <div className="moviePoster">
          <div className="movieInfo">
            <h2>Details</h2>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <p>{movie.Title}</p>
            <p>{movie.Type}</p>
            <p>{movie.Year}</p>
            <p>{movie.imdbID}</p>
          </div>
        </div>
      }
    </>
  )
}

export default MovieDetails;