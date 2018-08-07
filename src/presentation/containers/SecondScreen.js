import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export class Second extends Component {
  render() {
    return (
      <View>
        <Text>This is Page 2!</Text>
        <Button title="Back" onPress={() => this.onClickPop()} />
      </View>
    );
  }

  onClickPop = async () => {
    await Navigation.pop(this.props.componentId);
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const SecondScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Second);
