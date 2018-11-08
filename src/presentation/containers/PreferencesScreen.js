import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export class Preferences extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Preferences Screen!</Text>
        <TouchableOpacity onPress={() => this.props.hideSide()}>
          <Text>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const PreferencesScreen = Preferences;
