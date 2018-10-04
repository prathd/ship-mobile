import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';

import { SCREENS } from '../navigation/screens';

import SignupInput from '../components/blocks/SignupInput';
import EnterAccountInformation from '../components/blocks/EnterAccountInformation';
import CreateAccountButton from '../components/blocks/CreateAccountButton';

type Props = {};
export class CreateAccount extends Component<Props> {
  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`Account Details`}>
        <EnterAccountInformation />
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
    // TODO create next screen
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
