import { Navigation } from 'react-native-navigation';
import Config from 'react-native-config';

import { SCREENS } from '../../data/screens';
import * as Utils from '../../domain/utils/';
import { decorateWithProvider } from './apolloIntegration';

import { LoginScreen } from '../containers/LoginScreen';
import { PhoneScreen } from '../containers/PhoneScreen';
import { PhoneConfirmScreen } from '../containers/PhoneConfirmScreen';
import { EnterNameScreen } from '../containers/EnterNameScreen';
import { EnterBirthdayScreen } from '../containers/EnterBirthdayScreen';
import { CreateAccountScreen } from '../containers/CreateAccountScreen';
import { EnterPasswordScreen } from '../containers/EnterPasswordScreen';
import { DashboardScreen } from '../containers/DashboardScreen';
import { SideMenuScreen } from '../containers/SideMenuScreen';
import { PreferencesScreen } from '../containers/PreferencesScreen';
import { MessageCenterScreen } from '../containers/MessageCenterScreen';

export const registerScreens = async () => {
  const apiUrl = Config.__API_URL__;
  const { client, navigationState } = await Utils.createApolloClient({
    apiUrl,
  });

  Utils.log.info(`Connecting to GraphQL backend at: ${apiUrl}`);

  Navigation.registerComponent(
    SCREENS.LOGIN,
    decorateWithProvider(LoginScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.PHONE,
    decorateWithProvider(PhoneScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.PHONE_CONFIRM,
    decorateWithProvider(PhoneConfirmScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.ENTER_NAME,
    decorateWithProvider(EnterNameScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.ENTER_BIRTHDAY,
    decorateWithProvider(EnterBirthdayScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.CREATE_ACCOUNT,
    decorateWithProvider(CreateAccountScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.ENTER_PASSWORD,
    decorateWithProvider(EnterPasswordScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.SIDE_MENU,
    decorateWithProvider(SideMenuScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.PREFERENCES,
    decorateWithProvider(PreferencesScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.DASHBOARD,
    decorateWithProvider(DashboardScreen, client),
  );

  Navigation.registerComponent(
    SCREENS.MESSAGE_CENTER,
    decorateWithProvider(MessageCenterScreen, client),
  );

  return JSON.parse(navigationState.currentRoot);
};
