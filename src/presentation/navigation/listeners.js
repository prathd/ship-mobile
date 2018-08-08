// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from './screens';

export const registerListeners = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: {
        visible: false,
        drawBehind: true,
        animate: false,
      },
    });

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
        },
      },
    });
  });
};
