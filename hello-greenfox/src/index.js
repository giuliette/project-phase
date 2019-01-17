import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import clickStore from '../store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={clickStore}>
  <App />
  </Provider>,
  document.getElementById('root'),
);
