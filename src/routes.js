import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './Pages/homePage';
import UserPage from './Pages/userPage';
import Page404 from './Pages/Page404';

// require('./Assets/styles/homePage.css');

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch className="">
        <Route path="/" component={HomePage} exact />
        <Route path="/user/:id" component={UserPage} exact />
        <Route path="/Page404" component={Page404} exact />
        <Redirect to="/Page404" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
