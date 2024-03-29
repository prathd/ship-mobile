import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';

import {
  QUERY_USER_STATE,
  UPDATE_USER_STATE,
} from '../../data/graphql/User.graphql';
import { SCREENS } from '../../data/screens';

import SignupInput from '../components/blocks/SignupInput';
import NameTextInput from '../components/blocks/NameTextInput';
import CircleNextButton from '../components/elements/CircleNextButton';

export class EnterName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.UserState.name || '',
    };
  }

  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`What's your name?`}>
        <NameTextInput onChange={this.onChange} name={this.state.name} />
        <CircleNextButton onPress={this.pushNextScreen} />
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
    await this.props.updateUserState({
      variables: { name: this.state.name },
    });

    return this.props.push(SCREENS.ENTER_BIRTHDAY);
  };
}

export const EnterNameScreen = compose(
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState,
    }),
  }),
  graphql(UPDATE_USER_STATE, { name: 'updateUserState' }),
)(EnterName);
