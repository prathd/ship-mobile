import { AsyncStorage } from 'react-native';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { ApolloLink } from 'apollo-link';
import { CachePersistor } from 'apollo-cache-persist';
import { withClientState } from 'apollo-link-state';
import { LoggingLink } from 'apollo-logger';
import ApolloClient from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import Config from 'react-native-config';

import { Mutation } from '../../data/mutations';
import { defaultState, sideMenuRoot } from '../../defaults/defaultState';
import settings from '../../../settings';
import log from './log';
import { SCREENS } from '../../data/screens';
import { NAVIGATION_QUERY } from '../../data/graphql/Navigation.graphql';

const SCHEMA_VERSION = '1';
const SCHEMA_VERSION_KEY = 'apollo-schema-version';

const createApolloClient = async ({ apiUrl }) => {
  // modify defaults if token exists
  const token = await AsyncStorage.getItem('token');
  if (token) defaultState.Navigation.currentRoot = JSON.stringify(sideMenuRoot(SCREENS.DASHBOARD));

  const cache = new InMemoryCache();
  const persistor = new CachePersistor({
    cache,
    storage: AsyncStorage,
    trigger: 'write',
    serialize: true,
    debug: true,
  });

  const httpLink = new BatchHttpLink({
    uri: apiUrl,
    credentials: 'include',
  });

  const stateLink = withClientState({
    cache,
    resolvers: { Mutation },
    defaults: defaultState,
  });

  // restore cache (if applicable)
  try {
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

  const authLink = setContext(async (request, previousContext) => {
    const token = await AsyncStorage.getItem('token');
    console.log('[authLink] Request made over Network with Token', token);

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...(previousContext.headers || {}),
        authorization: token ? `Bearer ${token}` : ``,
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );
      });
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // concatenate apollo-links
  const allLinks = [stateLink, authLink, errorLink, httpLink];

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
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first',
      },
    },
  };

  if (Config.__TEST__) {
    clientParams.defaultOptions = {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    };
  }

  const client = new ApolloClient(clientParams);
  client.onResetStore(cache.writeDefaults);

  // query navigation state from client to properly restore from cache
  const navigationState = (await client.query({ query: NAVIGATION_QUERY })).data.Navigation;
  console.log('Navigation State Fetched from Cache', JSON.parse(navigationState.currentRoot));
  return { client, navigationState };
};

export default createApolloClient;
