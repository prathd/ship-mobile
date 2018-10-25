// @flow strict

import { AsyncStorage } from 'react-native';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { persistCache } from 'apollo-cache-persist';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { LoggingLink } from 'apollo-logger';
import ApolloClient from 'apollo-client';

import Config from 'react-native-config';

import { NAVIGATION_QUERY } from '../../data/graphql/Navigation.graphql';

import settings from '../../../settings';
import log from './log';

const defaultState = {
  navigation: {
    __typename: 'Navigation',
    screen: '',
    isReset: false,
    backstack: [],
    isPop: false,
    showError: false,
  },
};

const mutations = {
  updateNavigation: (
    _,
    { screen, isReset, backstack, isPop, showError },
    { cache },
  ) => {
    const previous = cache.readQuery({ query: NAVIGATION_QUERY });
    const next = { screen, isReset, backstack, isPop, showError };

    Object.keys(next).forEach(key => next[key] == null && delete next[key]);

    const data = {
      ...previous,
      navigation: {
        ...previous.navigation,
        ...next,
      },
    };

    cache.writeQuery({ query: NAVIGATION_QUERY, data });
    return null;
  },
};

const createApolloClient = ({ apiUrl }) => {
  const cache = new InMemoryCache();
  const httpLink = new BatchHttpLink({ uri: apiUrl, credentials: 'include' });

  // persistCache({
  //   cache,
  //   storage: AsyncStorage,
  //   debug: true,
  // });

  const stateLink = withClientState({
    cache,
    resolvers: {
      Mutation: {
        ...mutations,
      },
    },
    defaults: defaultState,
  });
  const allLinks = [stateLink, httpLink];

  // if not in prod use a logger
  if (
    (settings.app.logging.apolloLogging && !Config.__TEST__) ||
    typeof window !== 'undefined'
  ) {
    allLinks.unshift(new LoggingLink({ logger: log.debug.bind(log) }));
  }

  const clientParams = {
    link: ApolloLink.from(allLinks),
    cache,
  };

  if (Config.__TEST__) {
    clientParams.defaultOptions = {
      query: {
        fetchPolicy: 'no-cache',
      },
    };
  }

  const client = new ApolloClient(clientParams);
  client.onResetStore(stateLink.writeDefaults);

  return client;
};

export default createApolloClient;