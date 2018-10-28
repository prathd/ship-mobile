// @flow strict

import * as React from 'react';
import { View, Text } from 'react-native';
import { ApolloProvider } from 'react-apollo';

import Compositor from './Compositor';

export const decorateWithProvider = (Component, client) => {
  const wrappedComponent = class Scene extends React.Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <Compositor {...this.props}>
            <Component {...this.props} />
          </Compositor>
        </ApolloProvider>
      );
    }
  };

  return () => wrappedComponent;
};
