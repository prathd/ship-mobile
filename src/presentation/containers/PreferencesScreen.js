import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Preferences extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Preferences Screen!</Text>
      </View>
    );
  }
}

export const PreferencesScreen = Preferences;
