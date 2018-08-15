import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeFBData } from '../../redux/actions';
import { Text, View, Button, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PhoneInput from 'react-native-phone-input';

import { SCREENS } from '../../navigation/screens';
import { styles } from '../../styles/PhoneScreen.styles';

export class Phone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Page 2!</Text>
        <PhoneInput
          ref={ref => {
            this.phone = ref;
          }}
        />
        <Button title="Next" onPress={this.onClickPush} />
      </View>
    );
  }

  onClickPush = async () => {
    // validate phone number

    this.props.storeFBData({
      data: {
        number: this.phone.getValue(),
      },
    });

    // send text to entered number

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

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ storeFBData }, dispatch);
};

export const PhoneScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Phone);
