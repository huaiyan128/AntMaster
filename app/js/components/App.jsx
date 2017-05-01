import React, { Component, PropTypes } from 'react';

const App = ({ location }) => {
  let View = IndexView;
    return ( 
    <MainLayout> 
      <View />   
    </MainLayout>
    );
};

export default App;