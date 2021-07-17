import axios from 'axios';

const apiKey = '19c7ac68';

export default class AxiosMovieService {

  getMoviesByTitle(title,type){
    return axios.get(`https://www.omdbapi.com/?s=${title}&type=${type}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }

  getMovieById(id){
    return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }
  
}