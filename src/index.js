import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/reducers/reducer.js'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import getInitialState from './components/helpers/getinitialstate'
import App from './components/App'

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
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
