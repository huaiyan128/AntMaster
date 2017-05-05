import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import LoginPage from '../pages/login';
import MainLayout from '../layouts/MainLayout';
const Routes = ({ history }) =>
  <Router history={history}>
    <Route component={MainLayout}>
      <Route path="/"  component={App} />
      <Route path="/usermanage" state='0' component={App}/>
      <Route path="/lottery" state='1' component={App}/>
    </Route>
    <Route path="/login" component={LoginPage} />
    <Route path="*" component={NotFound} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.any
};

export default Routes;
