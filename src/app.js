import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { Platform } from 'react-native';

export default function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'navigation.app.WelcomeScreen',
              },
            },
          ],
        },
      },
    });
  });
}
