import React, { Component } from 'react';
import { Platform } from 'react-native';

import theme from '../../../theme.style';

import View50Signup from '../../elements/View50Signup';
import TextInputMask from './TextInputMask';

type Props = {};
export class NameTextInput extends Component<Props> {
  render() {
    return (
      <View50Signup modifiers={['fullWidth', 'row']}>
        <TextInputMask
          name="birthday"
          ref="birthday"
          placeholder="MM / DD / YYYY"
          maxLength={10}
          autoFocus
          underlineColorAndroid="transparent"
          returnKeyType="done"
          placeholderTextColor={theme.GREY}
          selectionColor={theme.WHITE}
          type={'datetime'}
          options={{
            format: 'MM/DD/YYYY',
          }}
        />
      </View50Signup>
    );
  }
}

export default NameTextInput;
