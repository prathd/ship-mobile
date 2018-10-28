import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import theme from '../theme.style';
import { SCREENS } from '../navigation/screens';

import SignupInput from '../components/blocks/SignupInput';
import PhoneInput from '../components/blocks/PhoneInput';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class Phone extends Component<Props> {
  render() {
    return (
      <SignupInput
        back={this.popScreen}
        prompt={`What's your${'\n'}phone number?`}
      >
        <PhoneInput />
        <TouchableOpacity onPress={this.pushNextScreen}>
          <CircleNextButton />
        </TouchableOpacity>
      </SignupInput>
    );
  }

  popScreen = async () => {
    await this.props.pop();
  };

  pushNextScreen = async () => {
    await this.props.push({
      component: {
        name: SCREENS.PHONE_CONFIRM,
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

export const PhoneScreen = Phone;
