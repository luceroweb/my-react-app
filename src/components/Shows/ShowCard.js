import ShowDetails from './ShowDetails';
import Modal from '../Modal';
import PosterUnavailable from '../../images/PosterUnavailable.jpg';

const ShowCard = ({ show, index, buttons, onClose, selectedImdbID, setSelectedImdbID }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
      <div className="card" onClick={() => setSelectedImdbID(show.imdbID)} style={{cursor:'pointer'}}>
        <div className="card-img-top" style={{width:'100%',maxHeight:'150%',background:'no-repeat center',overflow:'hidden'}}>
        <img src={(show.Poster === 'N/A') ? PosterUnavailable : show.Poster} alt={`${show.Title} poster`} style={{width:'100%'}} />
        </div>
        <div className="card-body">
          {(show.Poster === 'N/A') ? <span className="text-secondary">No poster avaialble</span> : null }
          <p className="card-title">{ show.Title }</p>
        </div>
      </div>
      { selectedImdbID && 
        <Modal
          show={selectedImdbID}
          onClose={onClose}
          buttons={buttons}
          children={
            <ShowDetails
              imdbID={selectedImdbID}
            />
          } 
        />
      }
    </div>
  )
}

export default ShowCard;