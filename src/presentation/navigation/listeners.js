import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from 'react-native';

import { SCREENS } from './screens';

export const registerListeners = async () => {
  const token = await AsyncStorage.getItem('token');

  // set dashboard as root if token exists
  let name = SCREENS.LOGIN;
  if (token) name = SCREENS.DASHBOARD;

  return Navigation.events().registerAppLaunchedListener(() => {
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
                name,
              },
            },
          ],
        },
      },
    });
  });
};
