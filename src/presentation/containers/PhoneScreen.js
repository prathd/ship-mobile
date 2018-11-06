import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { compose, graphql } from 'react-apollo';

import theme from '../theme.style';
import { SCREENS } from '../../data/screens';
import { LOGIN_WITH_PHONE_NUMBER } from '../../data/graphql/Auth.graphql';
import {
  QUERY_USER_STATE,
  UPDATE_USER_STATE,
} from '../../data/graphql/User.graphql';

import SignupInput from '../components/blocks/SignupInput';
import PhoneInput from '../components/blocks/PhoneInput';
import CircleNextButton from '../components/elements/CircleNextButton';

export class Phone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: {
        cca2: this.props.UserState.phone.cca2 || 'US',
        callingCode: this.props.UserState.phone.countryCode || 1,
      },
      phone: this.props.UserState.phone.number || '',
    };
  }

  render() {
    return (
      <SignupInput
        back={this.popScreen}
        prompt={`What's your${'\n'}phone number?`}
      >
        <PhoneInput
          onChange={this.onChange}
          country={this.state.country}
          phone={this.state.phone}
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
    try {
      const { data } = await this.props.loginWithPhoneNumber({
        variables: {
          phone: this.state.phone,
          cca2: this.state.country.cca2,
          countryCode: parseInt(this.state.country.callingCode),
        },
      });

      const {
        id,
        phone,
        cca2,
        countryCode,
        verified,
      } = data.loginWithPhoneNumber;
      await this.props.updateUserState({
        variables: {
          phone: JSON.stringify({
            id,
            number: phone,
            cca2,
            countryCode,
          }),
        },
      });

      if (!verified) {
        return this.props.push({
          component: {
            name: SCREENS.PHONE_CONFIRM,
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
      }

      return this.props.push({
        component: {
          name: SCREENS.ENTER_PASSWORD,
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
      alert('Phone Number was not able to be verified.');
    }

    return;
  };
}

export const PhoneScreen = compose(
  graphql(QUERY_USER_STATE, {
    props: ({ data: { UserState } }) => ({
      UserState: {
        ...UserState,
        phone: JSON.parse(UserState.phone),
      },
    }),
  }),
  graphql(LOGIN_WITH_PHONE_NUMBER, { name: 'loginWithPhoneNumber' }),
  graphql(UPDATE_USER_STATE, { name: 'updateUserState' }),
)(Phone);
