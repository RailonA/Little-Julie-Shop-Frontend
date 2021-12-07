import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './Pages/homePage';
import Page404 from './Pages/Page404';
import Nav from './Containers/navBar';

// require('./Assets/styles/homePage.css');

const Routes = () => (
  <BrowserRouter>
    <div className="">
      <Nav />
      <div>
        <Switch className="container-fluid">
          <Route path="/" component={HomePage} exact />
          <Route path="/Page404" component={Page404} exact />
          <Redirect to="/Page404" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
