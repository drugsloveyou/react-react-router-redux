import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { persistState } from 'redux-devtools';
import Devtool from './containers/Devtool';

import reducer from './reducers';
import Counter from './containers/Counter';

const middlewares = [logger, reduxPromise];
const enhancer = compose(
  applyMiddleware(...middlewares),
  Devtool.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

const store = createStore(reducer, enhancer);
const DOM = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Counter />
        <Devtool />
      </div>
    </Provider>,
    DOM
  );
};
render();
