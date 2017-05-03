import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
//import {Router, Route, IndexRoute, Link}  from 'react-router-dom';
import App from '../components/App';
import NotFound from '../components/NotFound';
import Login from '../pages/login';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route >
      <Route path="/" component={App} />
      <Route path="/form1" component={App} />
      {/*<Route path="/form2" component={App} />
    <Route path="/table" component={App} />
    <Route path="/carousel" component={App} />
    <Route path="/collapse" component={App} />
    <Route path="/modal" component={App} />*/}
      <Route path="*" component={NotFound} />
    </Route>
    <Route path="/login" component={Login} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
