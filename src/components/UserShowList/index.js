import React, { useState, useEffect } from 'react';
import UserShowListService from '../../services/userShowList.service';
import ShowService from '../../services/Axios.Show.Service';
import ShowCard from '../Shows/ShowCard';

export const UserShowList = () => {
  const [selectedImdbID, setSelectedImdbID] = useState();
  const [userShowImdbIDList, setUserImdbIDList] = useState([]);
  const [userShowInfo, setUserShowInfo] = useState([]);
  
  useEffect(() => {

    const userShowListService = new UserShowListService();
    const getShowList = async () => {
      const sessionVariableShowList =  await userShowListService.getShowList();
      setUserImdbIDList(sessionVariableShowList ? sessionVariableShowList.list : []);
    };
    getShowList();

  }, [setUserImdbIDList]);

  const showService = new ShowService();

  const myshowlist = [];

  const getShowById = async () => {
    if(userShowImdbIDList.length) {
      for(let i=0; i<userShowImdbIDList.length; i++){
        const show = await showService.getShowById(userShowImdbIDList[i]);
        myshowlist.push(show);
      }
        setUserShowInfo(myshowlist);
        console.log('done');
    }
  }
  getShowById();
  
  console.log('User Show Info',userShowInfo);

  const buttons = [];

  const onClose = () => setSelectedImdbID(null);

  return (
    <div className="container">
      <h1 className=" text-center">User Show List</h1>
      <div className="row align-items-top">
        { userShowInfo.length ?
          userShowInfo.map((show, index) => {
            return <ShowCard show={show} index={index} buttons={buttons} onClose={onClose} selectedImdbID={selectedImdbID} setSelectedImdbID={setSelectedImdbID} key={index} />
          })
        : <p className=" text-center">You haven't selected any favorite shows yet</p>
        }
      </div>
    </div>
  )
}