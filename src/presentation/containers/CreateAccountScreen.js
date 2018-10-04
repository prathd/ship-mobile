import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';

import { SCREENS } from '../navigation/screens';

import SignupInput from '../components/blocks/SignupInput';
import VerifyCode from '../components/blocks/VerifyCode';
import CreateAccountButton from '../components/blocks/CreateAccountButton';

type Props = {};
export class CreateAccount extends Component<Props> {
  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`Account Details`}>
        <VerifyCode />
        <TouchableOpacity onPress={this.pushNextScreen}>
          <CreateAccountButton />
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
        name: SCREENS.DASHBOARD,
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export const CreateAccountScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAccount);
