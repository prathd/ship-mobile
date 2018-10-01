import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import theme from '../theme.style';
import { SCREENS } from '../navigation/screens';

import LoginButtons from '../components/blocks/LoginButtons';
import GradientView from '../components/elements/GradientView';
import ShipLogo from '../components/elements/ShipLogo';
import Slide from '../components/elements/Slide';
import Text from '../components/elements/Text';

type Props = {};
export class Login extends Component<Props> {
  render() {
    return (
      <GradientView flex={1} modifiers={['flex', 'center']}>
        <Swiper
          dotColor={theme.FADED_PURPLE}
          activeDotColor={theme.WHITE}
          containerStyle={{ width: Dimensions.get('window').width }}
        >
          <Slide>
            <Text modifiers={['black', 'md', 'white']}>Welcome to Ship</Text>
            <Text modifiers={['light', 'sm', 'white']}>
              Swipe to learn more.
            </Text>
          </Slide>
          <Slide>
            <ShipLogo source={require('../images/ship.png')} />
          </Slide>
        </Swiper>
        <LoginButtons>
          <TouchableOpacity>
            <LoginButtons.OpaqueButton>
              <Text modifiers={['black', 'xs', 'light_purple']}>
                CONTINUE WITH FACEBOOK
              </Text>
            </LoginButtons.OpaqueButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pushPhoneScreen}>
            <LoginButtons.TransparentButton>
              <Text modifiers={['black', 'xs', 'white']}>USE PHONE NUMBER</Text>
            </LoginButtons.TransparentButton>
          </TouchableOpacity>
        </LoginButtons>
      </GradientView>
    );
  }

  pushPhoneScreen = async () => {
    await this.props.push({
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
