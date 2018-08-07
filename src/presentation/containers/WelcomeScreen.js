import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
const FBSDK = require('react-native-fbsdk');
const { LoginButton, AccessToken } = FBSDK;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class Welcome extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Ship!</Text>
        <Text style={styles.instructions}>
          To get started, edit WelcomeScreen.js
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <LoginButton
          publishPermissions={['publish_actions']}
          onLoginFinished={(error, result) => {
            if (error) {
              alert('login has error: ' + result.error);
            } else if (result.isCancelled) {
              alert('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                alert(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => alert('logout.')}
        />
        <Button title="GoTo Page 2" onPress={() => this.onClickPush()} />
      </View>
    );
  }

  onClickPush = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.app.SecondScreen',
      },
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const WelcomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
