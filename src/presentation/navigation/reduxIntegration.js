// @flow strict

import * as React from 'react';
import type { Provider as ProviderType } from 'react-redux';
import type { Store as StoreType } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';

import { getStore } from '../redux';
import Compositor from './Compositor';

export const decorateWithProvider = (
  Component: React.ComponentType<*>,
  Store: StoreType,
  Provider: ProviderType,
) => {
  const wrappedComponent = class Scene extends React.Component<*> {
    render() {
      const { store, persistor } = getStore();

      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Compositor {...this.props}>
              <Component {...this.props} />
            </Compositor>
          </PersistGate>
        </Provider>
      );
    }
  };

  return () => wrappedComponent;
};
