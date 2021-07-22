import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowList from './components/Shows/ShowList';
import { UserMovieList } from './components/UserMovieList/UserMovieList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
                         
ReactDOM.render(
  <BrowserRouter>
    <Nav/>
    <Switch>
      <Route exact path="/" component={ShowList} />
      <Route exact path="/user-movie-list" component={UserMovieList} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);