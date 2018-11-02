import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import { compose, graphql } from 'react-apollo';

import { SCREENS } from '../navigation/screens';
import { QUERY_USER_STATE } from '../../data/graphql/User.graphql';
import { LOGIN } from '../../data/graphql/Auth.graphql';

import SignupInput from '../components/blocks/SignupInput';
import EnterAccountInformation from '../components/blocks/EnterAccountInformation';
import CreateAccountButton from '../components/blocks/CreateAccountButton';

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
        <TouchableOpacity onPress={this.pushNextScreen}>
          <CreateAccountButton buttonText={`Login`} />
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
    try {
      const userData = {
        variables: {
          phoneNumberId: this.props.UserState.phone.id,
          password: this.state.password,
        },
      };
      const auth = await this.props.login(userData);

      await AsyncStorage.setItem('token', auth.data.login.token);
      await this.props.resetTo({
        component: {
          name: SCREENS.DASHBOARD,
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
    } catch (e) {
      console.log(e);
      alert('Error Logging In.');
    }
  };
}

export const EnterPasswordScreen = compose(
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
