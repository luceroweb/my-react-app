export default class UserShowListService {
  addShowToList(imdbID) {
    let showList = localStorage.getItem('showList');

    if (showList) {
      showList = JSON.parse(showList);
      showList.list.push(imdbID);
    };
    
    if (!showList) showList = { list: [ imdbID ] };

    localStorage.setItem('showList', JSON.stringify(showList));
  }

  getShowList() {
    let showList = localStorage.getItem('showList');
    if(!showList) return null;

    return JSON.parse(showList);
  }
}