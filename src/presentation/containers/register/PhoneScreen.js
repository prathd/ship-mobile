import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../../navigation/screens';
import { styles } from '../../styles/PhoneScreen.styles';

export class Phone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Page 2!</Text>
        <TextInput keyboardType={'phone-pad'} />
        <Button title="Back" onPress={() => this.onClickPop()} />
        <Button title="Next" onPress={() => this.onClickPush()} />
      </View>
    );
  }

  onClickPop = async () => {
    await Navigation.pop(this.props.componentId);
  };

  onClickPush = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: SCREENS.REGISTER.PHONECONFIRM,
        options: {
          topBar: {
            visible: false,
          },
          animations: {
            push: {
              enable: false,
            },
            pop: {
              enable: false,
            },
          },
        },
      },
    });
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const PhoneScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Phone);
