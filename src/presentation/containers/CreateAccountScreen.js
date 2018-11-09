import React, { Component } from 'react';
import { compose, graphql, withApollo } from 'react-apollo';
import { AsyncStorage } from 'react-native';

import { SCREENS } from '../../data/screens';
import { QUERY_USER_STATE } from '../../data/graphql/User.graphql';
import { SIGNUP } from '../../data/graphql/Auth.graphql';

import SignupInput from '../components/blocks/SignupInput';
import EnterAccountInformation from '../components/blocks/EnterAccountInformation';
import CreateAccountButton from '../components/blocks/CreateAccountButton';
import Touchable from '../components/elements/Touchable';

export class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      agreeTOC: false,
    };
  }

  render() {
    return (
      <SignupInput back={this.popScreen} prompt={`Account Details`}>
        <EnterAccountInformation
          onChange={this.onChange}
          email={this.state.email}
          password={this.state.password}
          agreeTOC={this.state.agreeTOC}
        />
        <Touchable onPress={this.pushNextScreen}>
          <CreateAccountButton buttonText={`Create Account`} />
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
    if (!this.state.agreeTOC) {
      return alert('Please Read & Agree to the Terms & Conditions.');
    }

    const userData = {
      variables: {
        name: this.props.UserState.name,
        birthday: new Date(this.props.UserState.birthday).toISOString(),
        gender: this.props.UserState.gender,
        phoneNumberId: this.props.UserState.phone.id,
        agreeTOC: this.state.agreeTOC,
        email: this.state.email,
        password: this.state.password,
      },
    };
    const auth = await this.props.signup(userData);

    await AsyncStorage.setItem('token', auth.data.signup.token);
    this.props.resetStack(1);
  };
}

export const CreateAccountScreen = compose(
  withApollo,
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState: {
        ...UserState,
        phone: JSON.parse(UserState.phone),
      },
    }),
  }),
  graphql(SIGNUP, { name: 'signup' }),
)(CreateAccount);
