import { Navigation } from 'react-native-navigation';
import Config from 'react-native-config';

import { SCREENS } from '../../data/screens';
import * as Utils from '../../domain/utils/';
import { decorateWithProvider } from './apolloIntegration';

import * as Containers from '../containers/';

export const registerScreens = async () => {
  const apiUrl = Config.__API_URL__;
  const { client, navigationState } = await Utils.createApolloClient({
    apiUrl,
  });

  Utils.log.info(`Connecting to GraphQL backend at: ${apiUrl}`);

  for (let screen in SCREENS) {
    Navigation.registerComponent(
      SCREENS[screen],
      decorateWithProvider(
        Containers[SCREENS[screen].replace(/.*\./g, '')],
        client,
      ),
    );
  }

  return JSON.parse(navigationState.currentRoot);
};
