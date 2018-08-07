// @flow strict

import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import * as reducers from './reducers';

export const getStore = () => {
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(combineReducers(reducers), applyMiddleware(...middleware));
};
