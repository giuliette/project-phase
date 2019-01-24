import React from 'react';
import ReactDOM from 'react-dom';
import clickStore from '../store';
import { Provider } from 'react-redux';
import Router from './Router';

ReactDOM.render(
  <Provider store={clickStore}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
