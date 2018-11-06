import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class MessageCenter extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the MessageCenter!</Text>
      </View>
    );
  }
}

export const MessageCenterScreen = MessageCenter;
