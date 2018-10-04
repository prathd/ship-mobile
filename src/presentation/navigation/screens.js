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

export const SCREENS = {
  LOGIN: `navigation.app.LoginScreen`,
  PHONE: `navigation.app.PhoneScreen`,
  PHONE_CONFIRM: `navigation.app.PhoneConfirmScreen`,
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
};
