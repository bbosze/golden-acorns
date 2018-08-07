import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/reducers/reducer.js'
import './index.css';
import Router from "./components/Router";
import registerServiceWorker from './registerServiceWorker';
import getInitialState from './components/helpers/getinitialstate'

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
getInitialState('redux').then(data => {
  store.dispatch({
    type: 'SET INIT',
    payload: data
  })
});



ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
