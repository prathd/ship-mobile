import React, { Component } from 'react';
import { connect, graphql, withApollo } from 'react-redux';
import { compose } from 'react-apollo';
import { bindActionCreators } from 'redux';
import { Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Config from 'react-native-config';

import settings from '../../../settings';

import theme from '../theme.style';
import { SCREENS } from '../navigation/screens';

import LoginButtons from '../components/blocks/LoginButtons';
import GradientView from '../components/elements/GradientView';
import ShipLogo from '../components/elements/ShipLogo';
import Slide from '../components/elements/Slide';
import Text from '../components/elements/Text';

export class Login extends Component {
  render() {
    console.log('APOLLO: ', this.props, Config.API_URL, settings);
    return (
      <GradientView flex={1} modifiers={['flex', 'center']}>
        <Swiper
          dotColor={theme.FADED_PURPLE}
          activeDotColor={theme.WHITE}
          containerStyle={{ width: Dimensions.get('window').width }}
        >
          <Slide>
            <Text modifiers={['black', 'lg', 'white']}>Welcome to Ship</Text>
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
          <TouchableOpacity onPress={this.pushNextScreen}>
            <LoginButtons.TransparentButton>
              <Text modifiers={['black', 'xs', 'white']}>USE PHONE NUMBER</Text>
            </LoginButtons.TransparentButton>
          </TouchableOpacity>
        </LoginButtons>
      </GradientView>
    );
  }

  pushNextScreen = async () => {
    // await this.props.push({
    //   component: {
    //     name: SCREENS.PHONE,
    //     options: {
    //       topBar: {
    //         visible: false,
    //       },
    //       animations: {
    //         push: {
    //           enable: false,
    //         },
    //         pop: {
    //           enable: false,
    //         },
    //       },
    //     },
    //   },
    // });
  };
}

// const mapStateToProps = state => ({});
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({}, dispatch);
// };
//
// export const LoginScreen = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Login);

export const LoginScreen = Login;
