import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Counter from './containers/Counter';
const store = createStore(reducer);
const DOM = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Counter/>
    </Provider>,
    DOM
  );
};
render();
