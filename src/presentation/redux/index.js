// @flow strict

import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import mapValues from 'lodash/mapValues';

import * as reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['navigationReducer'],
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers),
);

export const getStore = () => {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(...middleware),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
