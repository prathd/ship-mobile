import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { styles } from '../../styles/PhoneScreen.styles';

export class Phone extends Component {
  render() {
    return (
      <View style={styles.container}>
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

export const PhoneScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Phone);
