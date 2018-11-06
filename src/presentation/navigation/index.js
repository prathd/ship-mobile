import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

export const initializeNavigation = () => {
  return Navigation.events().registerAppLaunchedListener(async () => {
    const root = await registerScreens();
    Navigation.setRoot({ root });
  });
};
