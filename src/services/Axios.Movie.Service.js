import axios from 'axios';

const apiKey = '19c7ac68';

export default class MovieService {

  getMoviesByTitle(title){
    return axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }

  getMovieById(id){
    return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }
  
}