import React, { Component } from 'react';

import { SCREENS } from '../../data/screens';

import LoginButtons from '../components/blocks/LoginButtons';
import GradientView from '../components/elements/GradientView';
import Text from '../components/elements/Text';
import Touchable from '../components/elements/Touchable';

export class Login extends Component {
  render() {
    return (
      <GradientView flex={1} modifiers={['flex', 'center']}>
        <Text modifiers={['black', 'lg', 'white']}>Welcome to Ship</Text>
        <LoginButtons>
          <Touchable onPress={this.loginWithFacebook}>
            <LoginButtons.OpaqueButton>
              <Text modifiers={['black', 'xs', 'light_purple']}>
                CONTINUE WITH FACEBOOK
              </Text>
            </LoginButtons.OpaqueButton>
          </Touchable>
          <Touchable onPress={this.pushNextScreen}>
            <LoginButtons.TransparentButton>
              <Text modifiers={['black', 'xs', 'white']}>USE PHONE NUMBER</Text>
            </LoginButtons.TransparentButton>
          </Touchable>
        </LoginButtons>
      </GradientView>
    );
  }

  loginWithFacebook = async () => {
    // TODO
  };

  pushNextScreen = () => {
    this.props.push(SCREENS.PHONE);
  };
}

export const LoginScreen = Login;
