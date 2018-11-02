import React, { Component } from 'react';
import { Platform } from 'react-native';

import theme from '../../../theme.style';

import Text from '../../elements/Text';
import RelativeView from './RelativeView';
import AbsoluteView from './AbsoluteView';
import ButtonBackground from './ButtonBackground';

type Props = {};
export class CreateAccountButton extends Component<Props> {
  render() {
    return (
      <RelativeView modifiers={['row']}>
        <ButtonBackground />
        <AbsoluteView modifiers={['center', 'row']}>
          <Text modifiers={['heavy', 'sm', 'white']}>
            {this.props.buttonText}
          </Text>
        </AbsoluteView>
      </RelativeView>
    );
  }
}

export default CreateAccountButton;
