export default class UserShowListService {
  addShowToList(show) {
    let showList = localStorage.getItem('showList');

    if (showList) {
      showList = JSON.parse(showList);
      showList.list.push(show);
    };
    
    if (!showList) showList = { list: [ show ] };

    localStorage.setItem('showList', JSON.stringify(showList));
  }

  removeShowFromList(show) {
    let showList = localStorage.getItem('showList');
    let filtered = null;

    if (showList) {
      showList = JSON.parse(showList);
      filtered = showList.list.filter(function(savedShow){ 
        return savedShow !== show;
      });
    };

    localStorage.setItem('showList', JSON.stringify({ list: [ filtered ] }));
  }

  getShowList() {
    let showList = localStorage.getItem('showList');
    if(!showList) return null;

    return JSON.parse(showList);
  }
}