import React, { Component, PropTypes } from 'react';
import IndexView from './Views/Index';
import MainLayout from '../layouts/MainLayout';
const App = ({ location }) => {
  let View = IndexView;
  const path = { location }.location.pathname;
  if(path=='/'){
    View=IndexView;
  }
    return ( 
    <MainLayout> 
      <View />   
    </MainLayout>
    );
};

export default App;