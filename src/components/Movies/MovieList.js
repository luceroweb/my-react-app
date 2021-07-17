import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import MovieModal from './MovieModal';
import AxiosMovieSearch from '../../services/Axios.Movie.Service';
import MovieSearch from './MovieSearch';

const MovieList = () => {
  const [ titleSearchTerm, setTitleSearchTerm ] = useState();
  const [ titleSearchType, setTitleSearchType ] = useState();
  const [ movieList, setMovieList ] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    const axiosMovieSearch = new AxiosMovieSearch();
    const getMoviesByTitle = async (title,type) => {
      const movieList = await axiosMovieSearch.getMoviesByTitle(title,type);
      console.log(movieList);
      setMovieList(movieList.Search);
    }
    getMoviesByTitle(titleSearchTerm,titleSearchType);
  }, [titleSearchTerm,titleSearchType]);

  const onClose = () => setSelectedMovie(null);

  const renderMovieList = () => (
    movieList.map((movie, index) => (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
        <div className="card" onClick={() => setSelectedMovie(movie.imdbID)} style={{cursor:'pointer'}}>
          {(movie.Poster === 'N/A') ?
            <div style={{position:'relative',width:'100%',paddingBottom:'150%',background:'grey'}}>
              <div className="position-absolute top-50 start-50 translate-middle text-light">
                No Poster
              </div>
            </div>
            :
            <div className="card-img-top" style={{width:'100%',maxHeight:'150%',background:'grey no-repeat center',overflow:'hidden'}}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} style={{maxWidth:'100%'}} />
            </div>
          }
          
          <div className="card-body">
            <p className="card-title">{ movie.Title }</p>
          </div>
        </div>
        { selectedMovie && 
          <MovieModal
            show={selectedMovie}
            onClose={onClose}
            children={
              <MovieDetails
                id={selectedMovie}
              />
            } 
          />
        }
      </div>
    ))
  );

  return(
    <div className="container">
      <h1 className="font-weight-light text-center">Movie List</h1>
      <MovieSearch 
        setTitleSearchTerm={setTitleSearchTerm}
        setTitleSearchType={setTitleSearchType}
      />
      <div className="row align-items-top">
        { movieList &&
          renderMovieList()
        }
        { !titleSearchTerm &&
          <p className="text-center">search for a movie above</p>
        }
        { !movieList && titleSearchTerm &&
          <p className="text-center">Sorry, we couldn't find a {titleSearchType} called {titleSearchTerm}</p>
        }
      </div>
    </div>
  )
}

export default MovieList;