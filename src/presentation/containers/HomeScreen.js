import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import { SCREENS } from '../navigation/screens';
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

    console.log();
    return (
      <View style={styles.container}>
        <Swiper containerStyle={styles.wrapper} loop>
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
          <LoginButton
            publishPermissions={['publish_actions']}
            onLoginFinished={(error, result) => {
              if (error) {
                alert('Login has ERROR: ' + result.error);
              } else if (result.isCancelled) {
                alert('Login was cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  alert(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => alert('logout.')}
          />
          <Button title="Use Phone Number" onPress={() => this.onClickPush()} />
        </View>
      </View>
    );
  }

  onClickPush = async () => {
    await Navigation.push(this.props.componentId, {
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
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
