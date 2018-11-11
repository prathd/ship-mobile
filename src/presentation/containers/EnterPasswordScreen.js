import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { compose, graphql, withApollo } from 'react-apollo';

import { QUERY_USER_STATE } from '../../data/graphql/User.graphql';
import { LOGIN } from '../../data/graphql/Auth.graphql';

import SignupInput from '../components/blocks/SignupInput';
import EnterAccountInformation from '../components/blocks/EnterAccountInformation';
import CreateAccountButton from '../components/blocks/CreateAccountButton';
import Touchable from '../components/elements/Touchable';

export class EnterPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
    };
  }

  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`Enter Password`}>
        <EnterAccountInformation
          onChange={this.onChange}
          password={this.state.password}
          passwordOnly
        />
        <Touchable onPress={this.pushNextScreen}>
          <CreateAccountButton buttonText={`Login`} />
        </Touchable>
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
    try {
      const userData = {
        variables: {
          phoneNumberId: this.props.UserState.phone.id,
          password: this.state.password,
        },
      };
      const auth = await this.props.login(userData);
      await Promise.all([AsyncStorage.setItem('token', auth.data.login.token), AsyncStorage.setItem('stage', JSON.stringify(auth.data.login.user.stage))]);
      this.props.resetStack(auth.data.login.user.stage ? 1 : 3);
    } catch (e) {
      console.log(e);
      alert('Error Logging In.');
    }
  };
}

export const EnterPasswordScreen = compose(
  withApollo,
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState: {
        ...UserState,
        phone: JSON.parse(UserState.phone),
      },
    }),
  }),
  graphql(LOGIN, { name: 'login' }),
)(EnterPassword);
