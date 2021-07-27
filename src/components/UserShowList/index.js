import React, { useState, useEffect } from 'react';
import UserShowListService from '../../services/userShowList.service';
import ShowCard from '../Shows/ShowCard';
import BookmarkIcon from '../../images/bookmark.svg';

export const UserShowList = () => {
  const [selectedShow, setSelectedShow] = useState();
  const [showList, setShowList] = useState([]);

  const userShowListService = new UserShowListService();
  
  useEffect(() => {

    const getShowList = async () => {
      let sessionVariableShowList =  await userShowListService.getShowList();
      sessionVariableShowList = sessionVariableShowList ? sessionVariableShowList.list : [];
      setShowList(sessionVariableShowList);
    };
    getShowList();

  }, []);

  const onClose = () => setSelectedShow(null);

  const removeShowFromList = async (show) => {
    await userShowListService.removeShowFromList(show);
  }

  return (
    <div className="container">
      <h1 className=" text-center">User Show List</h1>
      <div className="row align-items-top">
        { showList.length ?
          showList.map((show, index) => {
            return <ShowCard 
              show={show} 
              index={index} 
              onClose={onClose} 
              selectedShow={selectedShow} 
              setSelectedShow={setSelectedShow} 
              key={index} 
              buttons={
                <button type="button" className="btn btn-secondary" onClick={() => removeShowFromList(show)}>
                  <img src={BookmarkIcon} alt="" style={{height:'1em',marginRight:'0.5em'}} />
                  Remove From My Shows
                </button>
              } 
            />
          })
        : <p className=" text-center">You haven't selected any favorite shows yet</p>
        }
      </div>
    </div>
  )
}