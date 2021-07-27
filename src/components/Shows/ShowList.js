import React, { useState, useEffect } from 'react';
import AxiosShowSearch from '../../services/Axios.Show.Service';
import ShowSearch from './ShowSearch';
import Pagination from '../Pagination/Pagination2';
import UserShowListService from '../../services/userShowList.service';
import ShowCard from './ShowCard';
import BookmarkIcon from '../../images/bookmark.svg';

const ShowList = () => {
  const [ titleSearchTerm, setTitleSearchTerm ] = useState();
  const [ titleSearchType, setTitleSearchType ] = useState();
  const [ showList, setShowList ] = useState([]);
  const [ totalResults, setTotalResults ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ selectedShow, setSelectedShow ] = useState();

  const userShowListService = new UserShowListService();

  const onClose = () => setSelectedShow(null);

  const addShowToList = async (imdbID) => {
    await userShowListService.addShowToList(imdbID);
  }

  useEffect(() => {
    const axiosShowSearch = new AxiosShowSearch();
    const getShowsByTitle = async (title,type,page) => {
      const showList = await axiosShowSearch.getShowsByTitle(title,type,page);
      setTotalResults(showList?showList.totalResults:0);
      setShowList(showList.Search);
    }
    getShowsByTitle(titleSearchTerm,titleSearchType,currentPage);
  }, [titleSearchTerm,titleSearchType,currentPage]);

  return(
    <div className="container">
      <ShowSearch 
        setTitleSearchTerm={setTitleSearchTerm}
        setTitleSearchType={setTitleSearchType}
      />
      <div className="row align-items-top">
        { showList &&
          showList.map((show, index) => (
            <ShowCard 
              show={show} 
              index={index} 
              onClose={onClose} 
              selectedShow={selectedShow} 
              addShowToList={addShowToList} 
              setSelectedShow={setSelectedShow} 
              key={index} 
              buttons={
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => addShowToList(show)}>
                  <img src={BookmarkIcon} alt="" style={{height:'1em',marginRight:'0.5em'}} />
                  Add To My Shows
                </button>
              } 
            />
          ))
        }
        { !titleSearchTerm &&
          <p className="text-center">search for a show above</p>
        }
        { !showList && titleSearchTerm &&
          <p className="text-center">Sorry, we couldn't find a {titleSearchType} called {titleSearchTerm}.<br/>
          Please try again.</p>
        }
      </div>
      <Pagination totalResults={totalResults} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default ShowList;