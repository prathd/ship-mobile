import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { compose, graphql } from 'react-apollo';

import { SCREENS } from '../navigation/screens';
import { QUERY_USER_STATE, CREATE_USER } from '../../data/graphql/User.graphql';

import SignupInput from '../components/blocks/SignupInput';
import EnterAccountInformation from '../components/blocks/EnterAccountInformation';
import CreateAccountButton from '../components/blocks/CreateAccountButton';

type Props = {};
export class CreateAccount extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`Account Details`}>
        <EnterAccountInformation
          onChange={this.onChange}
          email={this.state.email}
          password={this.state.password}
        />
        <TouchableOpacity onPress={this.pushNextScreen}>
          <CreateAccountButton />
        </TouchableOpacity>
      </SignupInput>
    );
  }

  onChange = args => {
    this.setState(args);
  };

  popScreen = async () => {
    await this.props.pop();
  };

  pushNextScreen = async () => {
    const userData = {
      variables: {
        name: this.props.UserState.name,
        birthday: new Date(this.props.UserState.birthday).toISOString(),
        gender: this.props.UserState.gender,
        phoneNumberId: this.props.UserState.phone.id,
        email: this.state.email,
        password: this.state.password,
      },
    };

    const auth = await this.props.signup(userData);

    // TODO
    // add auth.token to BatchHttpLink headers
    // set dashboard as root
  };
}

export const CreateAccountScreen = compose(
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState: {
        ...UserState,
        phone: JSON.parse(UserState.phone),
      },
    }),
  }),
  graphql(CREATE_USER, { name: 'signup' }),
)(CreateAccount);
