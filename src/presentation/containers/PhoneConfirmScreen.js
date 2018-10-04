import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';

import theme from '../theme.style';
import { SCREENS } from '../navigation/screens';

import View from '../components/elements/View';
import Text from '../components/elements/Text';

type Props = {};
export class PhoneConfirm extends Component<Props> {
  render() {
    return (
      <View flex={1} modifiers={['flex', 'center']}>
        <Text>Temporary Text</Text>
        <TouchableOpacity onPress={this.popScreen}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  popScreen = async () => {
    await this.props.pop();
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export const PhoneConfirmScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneConfirm);
