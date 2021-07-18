import React, { useEffect, useState } from 'react';
import ShowService from '../../services/Axios.Show.Service';

// Class based components
const ShowDetails = ({ id }) => {
  const [ show, setShow ] = useState();

  useEffect(() => {
    const showService = new ShowService();
    const getShowById = async (id) => {
      const show = await showService.getShowById(id);
      setShow(show);
    }
    getShowById(id);
  },[id]);

  return show ? (
    <div className="row">
      <div className="col-md-6 text-center">
        {(show.Poster === 'N/A') ?
          <div className="d-none d-md-block" style={{position:'relative',width:'100%',paddingBottom:'150%',background:'grey'}}>
            <div className="position-absolute top-50 start-50 translate-middle text-light">
              No Poster
            </div>
          </div>
          :
          <img src={show.Poster} alt={`${show.Title} poster`} style={{maxWidth:'100%'}} />
        }
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