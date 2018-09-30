// @flow strict

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { getStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';
import { CompositorPropsType } from '../flowTypes';

import Compositor from './Compositor';

import { LoginScreen } from '../containers/LoginScreen';

export const SCREENS = {
  LOGIN: `navigation.app.LoginScreen`,
};

export const registerScreens = () => {
  const { store } = getStore();

  Navigation.registerComponent(
    SCREENS.LOGIN,
    decorateWithProvider(LoginScreen, store, Provider),
  );
};
