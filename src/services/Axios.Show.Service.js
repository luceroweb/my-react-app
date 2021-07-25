import axios from 'axios';

const apiKey = '19c7ac68';
const searchService = 'https://www.omdbapi.com/';

export default class AxiosShowService {

  getShowsByTitle(title,type,page){
    return axios.get(`${searchService}?s=${title}&type=${type}${page?`&page=${page}`:''}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }

  getShowById(imdbID){
    return axios.get(`${searchService}?i=${imdbID}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }
  
}