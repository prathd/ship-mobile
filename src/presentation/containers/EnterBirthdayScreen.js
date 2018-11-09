import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';

import { SCREENS } from '../../data/screens';
import {
  QUERY_USER_STATE,
  UPDATE_USER_STATE,
} from '../../data/graphql/User.graphql';

import SignupInput from '../components/blocks/SignupInput';
import BirthdayTextInput from '../components/blocks/BirthdayTextInput';
import CircleNextButton from '../components/elements/CircleNextButton';
import Touchable from '../components/elements/Touchable';

export class EnterBirthday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthday: this.props.UserState.birthday || '',
    };
  }
  render() {
    return (
      <SignupInput
        back={this.popScreen}
        prompt={`When is your${'\n'}birthday?`}
      >
        <BirthdayTextInput
          onChange={this.onChange}
          birthday={this.state.birthday}
        />
        <Touchable onPress={this.pushNextScreen}>
          <CircleNextButton />
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
    await this.props.updateUserState({
      variables: { birthday: this.state.birthday },
    });

    return this.props.push(SCREENS.CREATE_ACCOUNT);
  };
}

export const EnterBirthdayScreen = compose(
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState,
    }),
  }),
  graphql(UPDATE_USER_STATE, { name: 'updateUserState' }),
)(EnterBirthday);
