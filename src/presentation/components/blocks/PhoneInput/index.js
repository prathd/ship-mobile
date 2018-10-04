import React, { Component } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import View from '../../elements/View';
import Text from '../../elements/Text';

import CountryPicker from './CountryPicker';
import PhoneRowView from './PhoneRowView';
import InputTextView from './InputTextView';
import TextInput from './TextInput';

import { verticalScale } from '../../../scale.utils';
import theme from '../../../theme.style';

type Props = {};
export class PhoneInput extends Component<Props> {
  constructor(props) {
    super(props);

    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeModal = this.onChangeModal.bind(this);

    this.state = {
      country: {
        cca2: 'US',
        callingCode: '1',
      },
      modalVisible: false,
    };
  }

  render() {
    const countryPickerCustomStyles = {
      itemCountryName: {
        borderBottomWidth: 0,
      },
      emojiFlag: {
        height: verticalScale(32),
      },
    };

    return (
      <PhoneRowView modifiers={['fullWidth', 'row']}>
        <CountryPicker
          onChange={this.onChangeCountry}
          closeable
          styles={countryPickerCustomStyles}
          cca2={this.state.country.cca2}
          showCallingCode
          filterable
          modalVisible={this.state.modalVisible}
          onChangeModal={this.onChangeModal}
        />
        <InputTextView flex={10} modifiers={['flex', 'row', 'center']}>
          <TouchableOpacity onPress={() => this.onChangeModal(true)}>
            <Text modifiers={['medium', 'sm', 'purple']}>
              +{this.state.country.callingCode}
            </Text>
          </TouchableOpacity>
          <View flex={1} modifier={['flex', 'center']}>
            <TextInput
              name="phoneNumber"
              ref="phoneNumberInput"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="1234 5678"
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              returnKeyType="done"
              autoFocus
              placeholderTextColor={theme.GREY}
              selectionColor={theme.PURPLE}
              maxLength={20}
            />
          </View>
        </InputTextView>
      </PhoneRowView>
    );
  }

  onChangeCountry(country) {
    this.setState({ country });
    this.refs.phoneNumberInput.root.focus();
  }

  onChangeModal(isVisible) {
    this.setState({ modalVisible: isVisible });
  }
}

export default PhoneInput;
