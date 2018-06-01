import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import rootReducer from "./reducers";

/*------------redux-midlleware------------*/
import logger from "redux-logger";
/*------------redux-midlleware------------*/

const reduxMiddleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...reduxMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
