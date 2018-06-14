import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import { DECREMENT, INCREMENT } from './actions';

/********reduxMiddleware*******/
import loggerMiddle from 'redux-logger';
// import promiseMiddle from "redux-promise";
import thunkMiddle from 'redux-thunk';
const reduxMiddleware = [loggerMiddle, thunkMiddle];

/*******add*******/
// import { Provider } from "react-redux";
/*******add*******/

const store = createStore(counter, applyMiddleware(...reduxMiddleware));
const rootEl = document.getElementById('app');

const render = () =>
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState().value}
        onIncrement={() => store.dispatch(INCREMENT())}
        onDecrement={() => store.dispatch(DECREMENT())}
      />
      {/*******modify*******/}
      {/*
        <Provider store={store}>
          <Counter />
        </Provider>
      */}
    </div>,
    rootEl
  );

render();

store.subscribe(render);
/*******sub*******/
// store.subscribe(render);
