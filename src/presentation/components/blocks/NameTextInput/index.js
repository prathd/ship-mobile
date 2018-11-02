import React, { Component } from 'react';
import { Platform } from 'react-native';

import theme from '../../../theme.style';

import View50Signup from '../../elements/View50Signup';
import TextInput from './TextInput';

type Props = {};
export class NameTextInput extends Component<Props> {
  render() {
    return (
      <View50Signup modifiers={['fullWidth', 'row']}>
        <TextInput
          name="name"
          ref="name"
          underlineColorAndroid="transparent"
          placeholder="Jane Doe"
          returnKeyType="done"
          autoFocus
          placeholderTextColor={theme.GREY}
          selectionColor={theme.WHITE}
          maxLength={50}
          value={this.props.name}
          onChangeText={name => this.props.onChange({ name })}
        />
      </View50Signup>
    );
  }
}

export default NameTextInput;
