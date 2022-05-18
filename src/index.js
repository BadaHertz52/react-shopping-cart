import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './App';

import productListReducer from 'store/modules/productList';
import productItemReducer from 'store/modules/productItem';
import cartReducer from 'store/modules/cart';

if (process.env.NODE_ENV === 'development') {
  const {worker} = require('./mocks/browser');
  worker.start();
}

export const rootReducer = combineReducers({
  productListReducer,
  productItemReducer,
  cartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
