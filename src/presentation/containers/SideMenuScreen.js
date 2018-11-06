import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { compose, withApollo } from 'react-apollo';

export class SideMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the SideMenu!</Text>
        <TouchableOpacity onPress={this.logout}>
          <Text>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  logout() {
    this.props.client.resetStore();
  }
}

export const SideMenuScreen = compose(
  withApollo,
)(SideMenu);
