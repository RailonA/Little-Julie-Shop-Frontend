import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './Pages/homePage';
import Page404 from './Pages/Page404';

// require('./Assets/styles/homePage.css');

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch className="">
        <Route path="/" component={HomePage} exact />
        <Route path="/Page404" component={Page404} exact />
        <Redirect to="/Page404" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
