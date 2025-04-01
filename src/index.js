import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './redux/store'; // Clear import path
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);