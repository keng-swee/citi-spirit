import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers'
import { HelmetProvider } from 'react-helmet-async';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("1716672c39ef9964d65fa1b4d0a66f5b8");

const store = createStore(reducers, compose(applyMiddleware(thunk)));




ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
        </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

