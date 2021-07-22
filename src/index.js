import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import client from './apollo/client';
import {
  getFromLocalStorage,
  setToLocalStorage,
} from './helpers/localStorage/localAPI';
import { hydrate } from './redux/basketSlice';

import './index.css';

store.subscribe(() => {
  setToLocalStorage('basketState', store.getState().basket);
});

const basketState = getFromLocalStorage('basketState');
if (basketState) {
  store.dispatch(hydrate(basketState));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
