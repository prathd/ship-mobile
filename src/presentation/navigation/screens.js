// @flow strict

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { getStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';
import { WelcomeScreen } from '../containers/WelcomeScreen';
import { SecondScreen } from '../containers/SecondScreen';

export const SCREENS = {
  HOME: `navigation.app.WelcomeScreen`,
  SECOND: `navigation.app.SecondScreen`,
};

export const registerScreens = () => {
  const store = getStore();

  Navigation.registerComponent(
    SCREENS.HOME,
    decorateWithProvider(WelcomeScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.SECOND,
    decorateWithProvider(SecondScreen, store, Provider),
  );
};
