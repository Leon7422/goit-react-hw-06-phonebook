import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '../src/redux/store';
import { Provider } from 'react-redux';
import { Phonebook } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Phonebook />
    </React.StrictMode>
  </Provider>
);
