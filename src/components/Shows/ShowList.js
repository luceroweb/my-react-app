import React, { useState, useEffect } from 'react';
import AxiosShowSearch from '../../services/Axios.Show.Service';
import ShowSearch from './ShowSearch';
import ShowCards from './ShowCards';

const ShowList = () => {
  const [ titleSearchTerm, setTitleSearchTerm ] = useState();
  const [ titleSearchType, setTitleSearchType ] = useState();
  const [ showList, setShowList ] = useState([]);

  useEffect(() => {
    const axiosShowSearch = new AxiosShowSearch();
    const getShowsByTitle = async (title,type) => {
      const showList = await axiosShowSearch.getShowsByTitle(title,type);
      console.log(showList);
      setShowList(showList.Search);
    }
    getShowsByTitle(titleSearchTerm,titleSearchType);
  }, [titleSearchTerm,titleSearchType]);

  return(
    <div className="container">
      <h1 className="font-weight-light text-center">Show Search</h1>
      <ShowSearch 
        setTitleSearchTerm={setTitleSearchTerm}
        setTitleSearchType={setTitleSearchType}
      />
      <div className="row align-items-top">
        { showList &&
          <ShowCards
            showList={showList}
          />
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