import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import Swiper from 'react-native-swiper';
import { styles } from '../styles/WelcomeScreen.styles';

type Props = {};
export class Welcome extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} autoplay loop>
          <View style={styles.slide1}>
            <Text style={styles.text}>Welcome to Ship!</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Page 2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Page 3</Text>
          </View>
        </Swiper>
        <View style={styles.overlay}>
          <LoginButton
            publishPermissions={[
              'default',
              'email',
              'user_birthday',
              'user_gender',
              'user_hometown',
              'user_likes',
              'user_photos',
            ]}
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
        name: 'navigation.app.SecondScreen',
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

export const WelcomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
