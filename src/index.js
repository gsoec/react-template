// window.fetch polyfill
// NOTE: https://github.com/github/fetch
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('./index.css');

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
