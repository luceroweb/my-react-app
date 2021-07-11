import React from "react";

export default class MovieService extends React.Component {
  async getMovies(title) {
    const apiKey = '19c7ac68';
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);

    return response.json();
  }

  async getMovie(imdbID) {
    const apiKey = '19c7ac68';
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);

    return response.json();
  }
}