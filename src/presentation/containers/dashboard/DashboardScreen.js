import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { styles } from '../../styles/DashboardScreen.styles';

export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
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

export const DashboardScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
