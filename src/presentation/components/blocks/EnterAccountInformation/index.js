import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import theme from '../../../theme.style';

import View50Signup from '../../elements/View50Signup';
import Eye from '../../elements/Eye';
import Text from '../../elements/Text';
import View from '../../elements/View';
import TextInput from './TextInput';
import PasswordView from './PasswordView';
import ContractView from './ContractView';
import EyeView from './EyeView';
import CheckBox from './CheckBox';
import Image from './Image';

type Props = {};
export class EnterAccountInformation extends Component<Props> {
  constructor(props) {
    super(props);

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);

    this.state = {
      hidePassword: true,
      isChecked: false,
    };
  }
  render() {
    return (
      <View50Signup modifiers={['fullWidth', 'column']}>
        <TextInput
          name="email"
          ref="email"
          underlineColorAndroid="transparent"
          placeholder="email address"
          returnKeyType="done"
          autoFocus
          placeholderTextColor={theme.GREY}
          selectionColor={theme.PURPLE}
          maxLength={50}
          value={this.props.email}
          onChangeText={email => this.props.onChange({ email })}
        />
        <PasswordView>
          <TextInput
            name="password"
            ref="password"
            underlineColorAndroid="transparent"
            placeholder="password"
            secureTextEntry={this.state.hidePassword}
            returnKeyType="done"
            placeholderTextColor={theme.GREY}
            selectionColor={theme.PURPLE}
            maxLength={50}
            value={this.props.password}
            onChangeText={password => this.props.onChange({ password })}
          />
          <EyeView>
            <TouchableOpacity onPress={this.toggleShowPassword}>
              <Eye show={this.state.hidePassword} />
            </TouchableOpacity>
          </EyeView>
        </PasswordView>
        <ContractView modifiers={['fullWidth', 'row']}>
          <CheckBox
            onClick={this.toggleCheckBox}
            isChecked={this.state.isChecked}
            checkedImage={
              <Image source={require('../../../images/filled.png')} />
            }
            unCheckedImage={
              <Image source={require('../../../images/unfilled.png')} />
            }
          />
          <View flex={12} modifiers={['flex', 'row', 'fullWidth']}>
            <TouchableOpacity onPress={this.toggleCheckBox}>
              <Text modifiers={['light', 'xs']}>
                I agree to the{' '}
                <Text modifiers={['medium', 'xs', 'purple']}>
                  Terms & Conditions
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ContractView>
      </View50Signup>
    );
  }

  toggleShowPassword = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  toggleCheckBox = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
}

export default EnterAccountInformation;
