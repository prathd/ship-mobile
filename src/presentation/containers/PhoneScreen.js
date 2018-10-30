import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import { compose, graphql } from 'react-apollo';

import theme from '../theme.style';
import { SCREENS } from '../navigation/screens';
import {
  LOGIN_WITH_PHONE_NUMBER,
  SAVE_PHONE_LOCALLY,
} from '../../data/graphql/Auth.graphql';

import SignupInput from '../components/blocks/SignupInput';
import PhoneInput from '../components/blocks/PhoneInput';
import CircleNextButton from '../components/elements/CircleNextButton';

type Props = {};
export class Phone extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      country: {
        cca2: 'US',
        callingCode: '1',
      },
      phone: '',
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
          countryCode: parseInt(this.state.country.callingCode),
        },
      });

      const { id, phone, countryCode, verified } = data.loginWithPhoneNumber;
      await this.props.savePhoneLocally({
        variables: { id, phone, countryCode, verified },
      });

      if (!data.loginWithPhoneNumber.verified) {
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

      alert('Phone already verified.');
    } catch (e) {
      console.log(e);
      alert('Phone number not found.');
    }

    return;
  };
}

export const PhoneScreen = compose(
  graphql(LOGIN_WITH_PHONE_NUMBER, { name: 'loginWithPhoneNumber' }),
  graphql(SAVE_PHONE_LOCALLY, { name: 'savePhoneLocally' }),
)(Phone);
