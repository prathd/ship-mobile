import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import theme from '../theme.style';

import Text from '../components/elements/Text';
import View from '../components/elements/View';

type Props = {};
export class Phone extends Component<Props> {
  render() {
    return (
      <View flex={1} modifiers={['flex', 'center']}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export const PhoneScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Phone);
