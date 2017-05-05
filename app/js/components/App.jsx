import React, { Component, PropTypes } from 'react';
import IndexView from './Views/Index';
import MainLayout from '../layouts/MainLayout';
import UserManage from '../components/Views/userManage';
import Lottery from '../components/Views/lottery'
const App = ({ location }) => {
  let View = IndexView;
  const path = { location }.location.pathname;
  console.log("path",path);
  if(path=='/'){
    View=IndexView;
  }else if(path=='/usermanage')
  {
    View=UserManage;
  }else if(path=='/lottery')
  {
    View=Lottery;
  }
    return ( 
    //  <MainLayout> 
      <View />   
    //  </MainLayout>
    );
};

export default App;