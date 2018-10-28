import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import theme from '../theme.style';
import { SCREENS } from '../navigation/screens';

import SignupInput from '../components/blocks/SignupInput';
import VerifyCode from '../components/blocks/VerifyCode';
import Text from '../components/elements/Text';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class PhoneConfirm extends Component<Props> {
  render() {
    return (
      <SignupInput
        back={this.popScreen}
        prompt={`Enter the 6 digit code${'\n'}sent to your device`}
      >
        <VerifyCode />
        <TouchableOpacity onPress={this.pushNextScreen}>
          <CircleNextButton />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.resendCode}>
          <Text
            modifiers={['heavy', 'xs', 'purple', 'vMargin10']}
          >{`Didn't get a text?`}</Text>
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
        name: SCREENS.ENTER_NAME,
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

export const PhoneConfirmScreen = PhoneConfirm;
