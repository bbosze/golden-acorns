import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SimpleGoldenAcornApp from './SimpleGoldenAcornApp';
import ReduxGoldenAcornApp from './ReduxGoldenAcornApp';
import Subscribe from './Subscribe';
import Welcome from './Welcome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js'
import getInitialState from './helpers/getinitialstate'

const store = createStore(reducer);
getInitialState('redux').then(data => {
  store.dispatch({
    type: 'SET INIT',
    payload: data
  })
});


const Router = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/index" component={Subscribe} />
        <Route exact path="/simple" component={SimpleGoldenAcornApp} />
        <Route exact path="/redux" component={ReduxGoldenAcornApp} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export default Router
