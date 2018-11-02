import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { compose, graphql } from 'react-apollo';

import { SCREENS } from '../navigation/screens';
import {
  QUERY_USER_STATE,
  UPDATE_USER_STATE,
} from '../../data/graphql/User.graphql';

import SignupInput from '../components/blocks/SignupInput';
import BirthdayTextInput from '../components/blocks/BirthdayTextInput';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class EnterBirthday extends Component<Props> {
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
        <TouchableOpacity onPress={this.pushNextScreen}>
          <CircleNextButton />
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
    await this.props.updateUserState({
      variables: { birthday: this.state.birthday },
    });

    await this.props.push({
      component: {
        name: SCREENS.CREATE_ACCOUNT,
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
}

export const EnterBirthdayScreen = compose(
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState,
    }),
  }),
  graphql(UPDATE_USER_STATE, { name: 'updateUserState' }),
)(EnterBirthday);
