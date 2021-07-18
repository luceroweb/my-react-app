import React, { useState } from 'react';
import ShowDetails from './ShowDetails';
import Modal from '../Modal';

const ShowCards = ({ showList }) => {
  const [selectedShow, setSelectedShow] = useState();

  const onClose = () => setSelectedShow(null);

  return(
    showList.map((show, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
        <div className="card" onClick={() => setSelectedShow(show.imdbID)} style={{cursor:'pointer'}}>
          {(show.Poster === 'N/A') ?
            <div style={{position:'relative',width:'100%',paddingBottom:'150%',background:'grey'}}>
              <div className="position-absolute top-50 start-50 translate-middle text-light">
                No Poster
              </div>
            </div>
            :
            <div className="card-img-top" style={{width:'100%',maxHeight:'150%',background:'grey no-repeat center',overflow:'hidden'}}>
              <img src={show.Poster} alt={`${show.Title} poster`} style={{width:'100%'}} />
            </div>
          }
          
          <div className="card-body">
            <p className="card-title">{ show.Title }</p>
          </div>
        </div>
        { selectedShow && 
          <Modal
            show={selectedShow}
            onClose={onClose}
            children={
              <ShowDetails
                id={selectedShow}
              />
            } 
          />
        }
      </div>
    ))
  )
}

export default ShowCards;