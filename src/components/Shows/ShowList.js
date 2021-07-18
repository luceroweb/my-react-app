import React, { useState, useEffect } from 'react';
import AxiosShowSearch from '../../services/Axios.Show.Service';
import ShowSearch from './ShowSearch';
import ShowCards from './ShowCards';
import Pagination from '../Pagination';

const ShowList = () => {
  const [ titleSearchTerm, setTitleSearchTerm ] = useState();
  const [ titleSearchType, setTitleSearchType ] = useState();
  const [ showList, setShowList ] = useState([]);
  const [ totalResults, setTotalResults ] = useState(0);
  const [ selectedPage, setSelectedPage ] = useState(null);

  useEffect(() => {
    const axiosShowSearch = new AxiosShowSearch();
    const getShowsByTitle = async (title,type,page) => {
      const showList = await axiosShowSearch.getShowsByTitle(title,type,page);
      setTotalResults(showList?showList.totalResults:0);
      setShowList(showList.Search);
    }
    getShowsByTitle(titleSearchTerm,titleSearchType,selectedPage);
  }, [titleSearchTerm,titleSearchType,selectedPage]);

  return(
    <div className="container">
      <h1 className="font-weight-light text-center">Show Search</h1>
      <ShowSearch 
        setTitleSearchTerm={setTitleSearchTerm}
        setTitleSearchType={setTitleSearchType}
      />
      <div className="row align-items-top">
        { showList &&
          <ShowCards showList={showList} />
        }
        <Pagination totalResults={totalResults} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
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