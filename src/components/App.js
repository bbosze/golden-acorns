import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Router from "./Router";


const App = () => {
  return(
  <React.Fragment>
      <Header />
      <div className="maincontainer">
        <div className="App">
          <Router />
        </div>
        <Sidebar />
      </div>
  </React.Fragment>
  );
}

export default App;
