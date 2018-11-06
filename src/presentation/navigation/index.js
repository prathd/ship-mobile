// @flow strict

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

export const initializeNavigation = async () => {
  return Navigation.events().registerAppLaunchedListener(async () => {
    const defaultNavigation = await registerScreens();

    Navigation.setRoot({
      root: {
        sideMenu: {
          center: JSON.parse(defaultNavigation.center),
          left: JSON.parse(defaultNavigation.left),
          right: JSON.parse(defaultNavigation.right),
        },
      },
    });
  });
};
