import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import FBSDK from 'react-native-fbsdk';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import { SCREENS } from '../navigation/screens';
import { storeFBData } from '../redux/actions';
import { styles } from '../styles/HomeScreen.styles';

type Props = {};
export class Home extends Component<Props> {
  render() {
    const gradientOptions = {
      start:
        Dimensions.get('window').height < 700
          ? { x: 0.25, y: 0 }
          : Dimensions.get('window').height < 800
            ? { x: 0, y: 0 }
            : { x: 0.05, y: 0 },
      end:
        Dimensions.get('window').height < 700
          ? { x: 0.75, y: 1 }
          : Dimensions.get('window').height < 800
            ? { x: 1, y: 1 }
            : { x: 0.5, y: 1 },
      locations: [0.15, 1],
      colors: ['#F55D84', '#7659DD'],
    };
    const fbPermissions = [
      'public_profile',
      'email',
      'user_birthday',
      'user_photos',
      'user_videos',
      'user_friends',
      'user_gender',
      'user_hometown',
      'user_likes',
      'user_link',
      'user_location',
    ];

    return (
      <View style={styles.container}>
        <Swiper
          containerStyle={styles.wrapper}
          autoplay
          autoplayTimeout={5}
          loop
        >
          <LinearGradient {...gradientOptions} style={styles.slide1}>
            <Text style={styles.text}>Welcome to Ship!</Text>
          </LinearGradient>
          <View style={styles.slide2}>
            <Text style={styles.text}>Page 2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Page 3</Text>
          </View>
        </Swiper>
        <View style={styles.overlay}>
          <FBSDK.LoginButton
            readPermissions={fbPermissions}
            onLoginFinished={this.onFBLogin}
          />
          <TouchableOpacity onPress={this.pushPhoneScreen}>
            <View style={styles.phoneView}>
              <Text style={styles.phoneText}>USE PHONE NUMBER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onFBLogin = async (error, result) => {
    if (error) {
      alert('Login has ERROR: ' + result.error);
    } else if (result.isCancelled) {
      alert('Login was cancelled.');
    } else {
      const data = await FBSDK.AccessToken.getCurrentAccessToken();
      const response = await fetch(
        'http://localhost:3000/api/v1/auth/login/fbat',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        },
      );
      const responseJson = await response.json();

      this.props.storeFBData({
        data: {
          name: responseJson.data.name,
          birthday: responseJson.data.birthday,
        },
      });

      if (responseJson.code === 103) {
        this.pushPhoneScreen();
      } else if (responseJson.code === 102) {
        this.pushDashboardScreen();
      } else {
        alert('Login with Facebook unsuccessful.');
      }
    }
  };

  pushPhoneScreen = async () => {
    await this.props.push({
      component: {
        name: SCREENS.REGISTER.PHONE,
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

  pushDashboardScreen = async () => {
    await this.props.push({
      component: {
        name: SCREENS.DASHBOARD.HOME,
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
  return bindActionCreators({ storeFBData }, dispatch);
};

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
