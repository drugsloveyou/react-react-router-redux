import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import { createStore } from 'redux';
import { Decrement, Increment } from './actions';
import reducers from './reducers';

const store = createStore(reducers);
const DOM = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState().value}
      onIncrement={() => store.dispatch(Increment())}
      onDecrement={() => store.dispatch(Decrement())}
    />,
    DOM
  );
};

render();
store.subscribe(render);
