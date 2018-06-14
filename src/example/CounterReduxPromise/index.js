import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import reducer from './reducers';
import Counter from './containers/Counter';

const middlewares = [logger, reduxPromise];
const store = createStore(reducer, applyMiddleware(...middlewares));
const DOM = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    DOM
  );
};
render();
