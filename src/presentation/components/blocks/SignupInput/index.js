import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

import View from '../../elements/View';
import Text from '../../elements/Text';
import SignupHeader from './SignupHeader';
import BackButton from './BackButton';
import TopView from './TopView';
import HeaderView from './HeaderView';
import PromptView from './PromptView';
import ChildredView from './ChildredView';

type Props = {};
export class SignupInput extends Component<Props> {
  render() {
    return (
      <View flex={1} modifiers={['flex']}>
        <HeaderView>
          <SignupHeader />
        </HeaderView>
        <TopView>
          <TouchableOpacity onPress={this.props.back}>
            <BackButton />
          </TouchableOpacity>
        </TopView>
        <PromptView>
          <Text modifiers={['heavy', 'lg', 'center']}>{this.props.prompt}</Text>
        </PromptView>
        <ChildredView>{this.props.children}</ChildredView>
      </View>
    );
  }
}

export default SignupInput;
