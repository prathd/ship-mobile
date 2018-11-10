import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Onboarding extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Onboarding Screen!</Text>
      </View>
    );
  }
}

export const OnboardingScreen = Onboarding;
