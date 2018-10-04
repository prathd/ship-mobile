// @flow strict

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { getStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';
import { CompositorPropsType } from '../flowTypes';

import Compositor from './Compositor';

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

export const registerScreens = () => {
  const { store } = getStore();

  Navigation.registerComponent(
    SCREENS.LOGIN,
    decorateWithProvider(LoginScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.PHONE,
    decorateWithProvider(PhoneScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.PHONE_CONFIRM,
    decorateWithProvider(PhoneConfirmScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.ENTER_NAME,
    decorateWithProvider(EnterNameScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.ENTER_BIRTHDAY,
    decorateWithProvider(EnterBirthdayScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.CREATE_ACCOUNT,
    decorateWithProvider(CreateAccountScreen, store, Provider),
  );
};
