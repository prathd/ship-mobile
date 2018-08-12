// @flow strict

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { getStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';

import { HomeScreen } from '../containers/HomeScreen';
import { PhoneScreen } from '../containers/register/PhoneScreen';
import { PhoneConfirm } from '../containers/register/PhoneConfirm';

const REGISTER_SCREENS = {
  PHONE: `navigation.app.register.PhoneScreen`,
  PHONECONFIRM: `navigation.app.register.PhoneConfirm`,
};

export const SCREENS = {
  HOME: `navigation.app.HomeScreen`,
  REGISTER: REGISTER_SCREENS,
};

export const registerScreens = () => {
  const store = getStore();

  Navigation.registerComponent(
    SCREENS.HOME,
    decorateWithProvider(HomeScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.REGISTER.PHONE,
    decorateWithProvider(PhoneScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.REGISTER.PHONECONFIRM,
    decorateWithProvider(PhoneConfirm, store, Provider),
  );
};
