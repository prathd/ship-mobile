import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { SCREENS } from '../../data/screens';

import LoginButtons from '../components/blocks/LoginButtons';
import GradientView from '../components/elements/GradientView';
import Text from '../components/elements/Text';

export class Login extends Component {
  render() {
    return (
      <GradientView flex={1} modifiers={['flex', 'center']}>
        <Text modifiers={['black', 'lg', 'white']}>Welcome to Ship</Text>
        <LoginButtons>
          <TouchableOpacity onPress={this.loginWithFacebook}>
            <LoginButtons.OpaqueButton>
              <Text modifiers={['black', 'xs', 'light_purple']}>
                CONTINUE WITH FACEBOOK
              </Text>
            </LoginButtons.OpaqueButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pushNextScreen}>
            <LoginButtons.TransparentButton>
              <Text modifiers={['black', 'xs', 'white']}>USE PHONE NUMBER</Text>
            </LoginButtons.TransparentButton>
          </TouchableOpacity>
        </LoginButtons>
      </GradientView>
    );
  }

  loginWithFacebook = async () => {
    // TODO
  };

  pushNextScreen = () => {
    this.props.push({
      component: {
        name: SCREENS.PHONE,
        options: {
          topBar: {
            visible: false,
          },
          animations: {
            push: {
              enable: false,
            },
            pop: {
              enable: false,
            },
          },
        },
      },
    });
  };
}

export const LoginScreen = Login;
