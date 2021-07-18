import axios from 'axios';

const apiKey = '19c7ac68';
const searchService = 'https://www.omdbapi.com/';

export default class AxiosShowService {

  getShowsByTitle(title,type,page){
    return axios.get(`${searchService}?s=${title}&type=${type}${page?`&page=${page}`:''}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }

  getShowById(id){
    return axios.get(`${searchService}?i=${id}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }
  
}