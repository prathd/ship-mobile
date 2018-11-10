import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';

import { SCREENS } from '../../data/screens';
import { VERIIFY_PHONE_NUMBER } from '../../data/graphql/Auth.graphql';
import { QUERY_USER_STATE } from '../../data/graphql/User.graphql';

import SignupInput from '../components/blocks/SignupInput';
import VerifyCode from '../components/blocks/VerifyCode';
import Text from '../components/elements/Text';
import CircleNextButton from '../components/elements/CircleNextButton';
import Touchable from '../components/elements/Touchable';

export class PhoneConfirm extends Component {
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
        <CircleNextButton onPress={this.pushNextScreen} />
        <Touchable onPress={this.resendCode}>
          <Text
            modifiers={['heavy', 'xs', 'purple', 'vMargin10']}
          >{`Didn't get a text?`}</Text>
        </Touchable>
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
          id: this.props.UserState.phone.id,
          code: parseInt(this.state.code),
        },
      });
      const { verified } = data.verifyPhoneNumber;

      // if successful save locally & push next screen
      if (verified) return this.props.push(SCREENS.ENTER_NAME);

      alert(
        'There was a problem confirming the entered code. Please try again.',
      );
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
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState: {
        ...UserState,
        phone: JSON.parse(UserState.phone),
      },
    }),
  }),
  graphql(VERIIFY_PHONE_NUMBER, { name: 'verifyPhoneNumber' }),
)(PhoneConfirm);
