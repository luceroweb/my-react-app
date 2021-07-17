import React, { useState, useEffect } from 'react';
import ShowDetails from './ShowDetails';
import Modal from '../Modal';
import AxiosShowSearch from '../../services/Axios.Show.Service';
import ShowSearch from './ShowSearch';

const ShowList = () => {
  const [ titleSearchTerm, setTitleSearchTerm ] = useState();
  const [ titleSearchType, setTitleSearchType ] = useState();
  const [ showList, setShowList ] = useState([]);
  const [selectedShow, setSelectedShow] = useState();

  useEffect(() => {
    const axiosShowSearch = new AxiosShowSearch();
    const getShowsByTitle = async (title,type) => {
      const showList = await axiosShowSearch.getShowsByTitle(title,type);
      console.log(showList);
      setShowList(showList.Search);
    }
    getShowsByTitle(titleSearchTerm,titleSearchType);
  }, [titleSearchTerm,titleSearchType]);

  const onClose = () => setSelectedShow(null);

  const renderShowList = () => (
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
              <img src={show.Poster} alt={`${show.Title} poster`} style={{maxWidth:'100%'}} />
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
  );

  return(
    <div className="container">
      <h1 className="font-weight-light text-center">Show Search</h1>
      <ShowSearch 
        setTitleSearchTerm={setTitleSearchTerm}
        setTitleSearchType={setTitleSearchType}
      />
      <div className="row align-items-top">
        { showList &&
          renderShowList()
        }
        { !titleSearchTerm &&
          <p className="text-center">search for a show above</p>
        }
        { !showList && titleSearchTerm &&
          <p className="text-center">Sorry, we couldn't find a {titleSearchType} called {titleSearchTerm}.<br/>
          Please try again.</p>
        }
      </div>
    </div>
  )
}

export default ShowList;