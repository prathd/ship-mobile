import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { SCREENS } from '../navigation/screens';

import SignupInput from '../components/blocks/SignupInput';
import BirthdayTextInput from '../components/blocks/BirthdayTextInput';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class EnterBirthday extends Component<Props> {
  render() {
    return (
      <SignupInput
        back={this.popScreen}
        prompt={`When is your${'\n'}birthday?`}
      >
        <BirthdayTextInput />
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
        name: SCREENS.CREATE_ACCOUNT,
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

  resendCode = () => {
    // TODO resend code
  };
}

export const EnterBirthdayScreen = EnterBirthday;
