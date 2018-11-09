import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { compose, withApollo } from 'react-apollo';

export class SideMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the SideMenu!</Text>
        <TouchableOpacity onPress={this.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.hideSide()}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }

  logout = async () => {
    await AsyncStorage.removeItem('token');
    this.props.resetStack(0);
  };
}

export const SideMenuScreen = compose(withApollo)(SideMenu);
