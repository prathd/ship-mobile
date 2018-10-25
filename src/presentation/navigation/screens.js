// @flow strict

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

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

export const registerScreens = () => {
  Navigation.registerComponent(
    SCREENS.LOGIN,
    decorateWithProvider(LoginScreen),
  );

  // Navigation.registerComponent(
  //   SCREENS.PHONE,
  //   decorateWithProvider(PhoneScreen),
  // );
  //
  // Navigation.registerComponent(
  //   SCREENS.PHONE_CONFIRM,
  //   decorateWithProvider(PhoneConfirmScreen),
  // );
  //
  // Navigation.registerComponent(
  //   SCREENS.ENTER_NAME,
  //   decorateWithProvider(EnterNameScreen),
  // );
  //
  // Navigation.registerComponent(
  //   SCREENS.ENTER_BIRTHDAY,
  //   decorateWithProvider(EnterBirthdayScreen),
  // );
  //
  // Navigation.registerComponent(
  //   SCREENS.CREATE_ACCOUNT,
  //   decorateWithProvider(CreateAccountScreen),
  // );
};
