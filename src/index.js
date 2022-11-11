import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Phonebook } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Phonebook />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
