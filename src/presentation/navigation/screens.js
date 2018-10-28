// @flow strict

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import Config from 'react-native-config';

import * as Utils from '../../domain/utils/';
import { decorateWithProvider } from './apolloIntegration';

import { LoginScreen } from '../containers/LoginScreen';
import { PhoneScreen } from '../containers/PhoneScreen';
import { PhoneConfirmScreen } from '../containers/PhoneConfirmScreen';
import { EnterNameScreen } from '../containers/EnterNameScreen';
import { EnterBirthdayScreen } from '../containers/EnterBirthdayScreen';
import { CreateAccountScreen } from '../containers/CreateAccountScreen';

export const SCREENS = {
  LOGIN: `navigation.app.LoginScreen`,
  PHONE: `navigation.app.PhoneScreen`,
  PHONE_CONFIRM: `navigation.app.PhoneConfirmScreen`,
  ENTER_NAME: `navigation.app.EnterNameScreen`,
  ENTER_BIRTHDAY: `navigation.app.EnterBirthdayScreen`,
  CREATE_ACCOUNT: `navigation.app.CreateAccountScreen`,
};

export const registerScreens = async () => {
  const apiUrl = Config.__API_URL__;
  const client = await Utils.createApolloClient({ apiUrl });
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
};
