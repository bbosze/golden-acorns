import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SimpleGoldenAcornApp from './SimpleGoldenAcornApp';
import ReduxGoldenAcornApp from './ReduxGoldenAcornApp';
import Welcome from './Welcome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// getInitialState('redux').then(data => console.log(data));

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'BUYONE':
      return {
        count: state.count + 1
      };
    case 'EATONE':
      return {
        count: state.count - 1
      };
    case 'SET INIT' :
    return {
      count: action.payload
    };
    default:
      return state;
  }
}

const store = createStore(reducer);

const Router = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/simple" component={SimpleGoldenAcornApp} />
        <Route exact path="/redux" component={ReduxGoldenAcornApp} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

export default Router
