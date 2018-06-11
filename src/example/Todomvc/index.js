import './index.css';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const renderApp = () => {
  render(<Root store={store} />, document.getElementById('app'));
};
renderApp();
if (module.hot) {
  module.hot.accept(['./containers/Root'], () => {
    renderApp();
  });
}
