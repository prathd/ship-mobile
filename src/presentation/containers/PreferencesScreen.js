import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../data/screens';

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
