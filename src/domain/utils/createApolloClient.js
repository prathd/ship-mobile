// @flow strict

import { AsyncStorage } from 'react-native';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor, persistCache } from 'apollo-cache-persist';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { LoggingLink } from 'apollo-logger';
import ApolloClient from 'apollo-client';

import Config from 'react-native-config';

import { NAVIGATION_QUERY } from '../../data/graphql/Navigation.graphql';

import settings from '../../../settings';
import log from './log';

const SCHEMA_VERSION = '1';
const SCHEMA_VERSION_KEY = 'apollo-schema-version';
const defaultState = {
  navigation: {
    __typename: 'Navigation',
    screen: JSON.stringify({
      component: {
        name: `navigation.app.LoginScreen`,
      },
    }),
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

const createApolloClient = async ({ apiUrl }) => {
  const cache = new InMemoryCache();
  const httpLink = new BatchHttpLink({ uri: apiUrl, credentials: 'include' });

  try {
    const persistor = new CachePersistor({
      cache,
      storage: AsyncStorage,
      debug: true,
    });

    // Read the current schema version from AsyncStorage.
    const currentVersion = await AsyncStorage.getItem(SCHEMA_VERSION_KEY);

    if (currentVersion === SCHEMA_VERSION) {
      // If the current version matches the latest version,
      // we're good to go and can restore the cache.
      await persistor.restore();
    } else {
      // Otherwise, we'll want to purge the outdated persisted cache
      // and mark ourselves as having updated to the latest version.
      await persistor.purge();
      await AsyncStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
    }
  } catch (e) {
    console.log('Apollo cache could not be persisted', e);
  }

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

  // if not in production use a logger
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
