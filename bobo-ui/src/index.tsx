import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (process.env.REACT_APP_ENV === 'mock') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
