import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowList from './components/Shows/ShowList';
import { UserShowList } from './components/UserShowList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
                         
ReactDOM.render(
  <BrowserRouter>
    <Nav/>
    <Switch>
      <Route exact path="/" component={ShowList} />
      <Route exact path="/user-show-list" component={UserShowList} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);