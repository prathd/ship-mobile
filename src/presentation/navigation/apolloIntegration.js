// @flow strict

import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import Config from 'react-native-config';

import * as Utils from '../../domain/utils/';

// TODO implement Compositor for RNN

export const decorateWithProvider = Component => {
  const wrappedComponent = class Scene extends React.Component<*> {
    render() {
      const apiUrl = Config.__API_URL__;
      const client = Utils.createApolloClient({ apiUrl });

      Utils.log.info(`Connecting to GraphQL backend at: ${apiUrl}`);

      return (
        <ApolloProvider client={client}>
          <Component />
        </ApolloProvider>
      );
    }
  };

  return () => wrappedComponent;
};
