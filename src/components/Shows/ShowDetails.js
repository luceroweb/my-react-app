import React, { useEffect, useState } from 'react';
import ShowService from '../../services/Axios.Show.Service';
import PosterUnavailable from '../../images/PosterUnavailable.jpg';

const ShowDetails = ({ imdbID }) => {
  const [ show, setShow ] = useState();

  useEffect(() => {
    const showService = new ShowService();
    const getShowById = async (imdbID) => {
      const show = await showService.getShowById(imdbID);
      setShow(show);
    }
    getShowById(imdbID);
  },[imdbID]);

  return show ? (
    <div className="row">
      <div className="col-md-6 text-center">
        <img src={(show.Poster === 'N/A') ? PosterUnavailable : show.Poster} alt={`${show.Title} poster`} style={{maxWidth:'100%'}} />
        {(show.Poster === 'N/A') ? <span className="text-secondary">No poster avaialble</span> : null }
      </div>
      <div className="col-md-6">
        { show.imdbRating !== 'N/A' && <strong className="float-end text-primary h4">{show.imdbRating}</strong> }
        <h4><strong>{show.Title}</strong></h4>
        { show.Rated !== 'N/A' && <span className="badge bg-secondary m-1">{show.Rated}</span> }
        { show.Runtime !== 'N/A' && <span className="badge bg-secondary m-1">{show.Runtime}</span> }
        { show.Genre !== 'N/A' && <span className="badge bg-secondary m-1">{show.Genre}</span> }
        { show.Plot !== 'N/A' && 
          <p><strong>Plot</strong><br/>
          {show.Plot}</p>
        }
        { show.Actors !== 'N/A' && 
          <p><strong>Actors</strong><br/>
          {show.Actors}</p>
        }
      </div>
    </div>
  ) : (<h2>Loading...</h2>);
}

export default ShowDetails;