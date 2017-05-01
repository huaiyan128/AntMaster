// import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
// // import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { browserHistory } from 'react-router';
 import App from './components/App';
 import Routes from './routes/index';

ReactDOM.render(
   <Routes history={browserHistory} />,
    document.body
);



