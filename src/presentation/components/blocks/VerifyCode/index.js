import React, { Component } from 'react';
import { Platform } from 'react-native';

import theme from '../../../theme.style';

import View50Signup from '../../elements/View50Signup';
import TextInput from './TextInput';

type Props = {};
export class SignupInput extends Component<Props> {
  render() {
    return (
      <View50Signup modifiers={['fullWidth', 'row']}>
        <TextInput
          name="code"
          ref="code"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="_ _ _ _ _ _"
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          returnKeyType="done"
          autoFocus
          placeholderTextColor={theme.PURPLE}
          selectionColor={theme.WHITE}
          maxLength={6}
          value={this.props.code}
          onChangeText={code => this.props.onChange({ code })}
        />
      </View50Signup>
    );
  }
}

export default SignupInput;
