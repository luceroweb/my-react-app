import React from 'react';

// Class based components
const MovieDetails = ({ movie }) => {
  const {
    Title,
    Type,
    Year,
  } = movie;
  
  return (
    <div className="moviePoster">
      <div className="movieInfo">
        <h2>Details</h2>
        <p>{Title}</p>
        <p>{Type}</p>
        <p>{Year}</p>}
      </div>
    </div>
  )
}

export default MovieDetails;