import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export class Second extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Page 2!</Text>
        <Button title="GoTo Page 1" onPress={() => this.onClickPop()} />
      </View>
    );
  }

  onClickPop = async () => {
    await Navigation.pop(this.props.componentId);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const SecondScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Second);
