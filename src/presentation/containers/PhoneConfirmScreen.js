import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { compose, graphql } from 'react-apollo';

import theme from '../theme.style';
import { SCREENS } from '../navigation/screens';
import {
  PHONE_QUERY,
  VERIIFY_PHONE_NUMBER,
  SAVE_PHONE_LOCALLY,
} from '../../data/graphql/Auth.graphql';

import SignupInput from '../components/blocks/SignupInput';
import VerifyCode from '../components/blocks/VerifyCode';
import Text from '../components/elements/Text';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class PhoneConfirm extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
    };
  }

  render() {
    return (
      <SignupInput
        back={this.popScreen}
        prompt={`Enter the 6 digit code${'\n'}sent to your device`}
      >
        <VerifyCode onChange={this.onChange} code={this.state.code} />
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

  onChange = args => {
    this.setState({ ...args });
  };

  popScreen = async () => {
    await this.props.pop();
  };

  pushNextScreen = async () => {
    try {
      // verify code
      const { data } = await this.props.verifyPhoneNumber({
        variables: {
          id: this.props.phone.id,
          code: parseInt(this.state.code),
        },
      });
      const { id, phone, countryCode, verified } = data.verifyPhoneNumber;

      // if successful save locally & push next screen
      if (verified) {
        await this.props.savePhoneLocally({
          variables: { id, phone, countryCode, verified },
        });

        return this.props.push({
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
      }
    } catch (e) {
      console.log(e);

      // if unsuccessful alert
      alert('Invalid code. Please try again.');
    }
  };

  resendCode = () => {
    // TODO resend code
  };
}

export const PhoneConfirmScreen = compose(
  graphql(PHONE_QUERY, {
    props: ({ data: { phone } }) => ({
      phone,
    }),
  }),
  graphql(VERIIFY_PHONE_NUMBER, { name: 'verifyPhoneNumber' }),
  graphql(SAVE_PHONE_LOCALLY, { name: 'savePhoneLocally' }),
)(PhoneConfirm);
