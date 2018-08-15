import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../../navigation/screens';
import { styles } from '../../styles/PhoneConfirm.styles';

export class Phone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Confirm code sent to {this.props.number}</Text>
        <Button title="Back" onPress={() => this.onClickPop()} />
      </View>
    );
  }

  onClickPop = async () => {
    await Navigation.pop(this.props.componentId);
  };
}

const mapStateToProps = ({ registerReducer }) => ({
  number: registerReducer.rUser.number,
});

const mapDispatchToProps = {};

export const PhoneConfirm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Phone);
