import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import theme from '../theme.style';

import SignupInput from '../components/blocks/SignupInput';
import PhoneInput from '../components/blocks/PhoneInput';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class Phone extends Component<Props> {
  render() {
    return (
      <SignupInput
        back={this.onClickBack}
        prompt={`What's your${'\n'}phone number?`}
      >
        <PhoneInput />
        <CircleNextButton />
      </SignupInput>
    );
  }

  onClickBack = async () => {
    await this.props.pop();
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export const PhoneScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Phone);
