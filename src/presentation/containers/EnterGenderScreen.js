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

export class EnterGender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: this.props.UserState.gender || '',
    };
  }

  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`I am`}>
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
      variables: { gender: this.state.gender },
    });

    return this.props.push(SCREENS.CREATE_ACCOUNT);
  };
}

export const EnterGenderScreen = compose(
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState,
    }),
  }),
  graphql(UPDATE_USER_STATE, { name: 'updateUserState' }),
)(EnterGender);
