import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';

import { SCREENS } from '../navigation/screens';

import SignupInput from '../components/blocks/SignupInput';
import NameTextInput from '../components/blocks/NameTextInput';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class EnterName extends Component<Props> {
  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`What's your name?`}>
        <NameTextInput />
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
        name: SCREENS.ENTER_BIRTHDAY,
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

export const EnterNameScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnterName);
