import React from 'react';
import BottomFooter from './bottomfooter/BottomFooter';
import LeftNavigationContainer from './leftnav/LeftNavigationContainer';
import MainContainer from './main/MainContainer';
import TopHeaderContainer from './topheader/TopHeaderContainer';

const App = _ => {
  return (
    <div id = "app_main">
      <TopHeaderContainer/>
      <div className = 'content_wrapper'>
        <LeftNavigationContainer/>
        <MainContainer/>
      </div>
      <BottomFooter/>
    </div>
  )
}

export default App;
