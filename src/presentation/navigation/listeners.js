// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from './screens';

export const registerListeners = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: SCREENS.HOME,
              },
            },
          ],
          options: {
            topBar: {
              visible: false,
            },
          },
        },
      },
    });
  });
};
