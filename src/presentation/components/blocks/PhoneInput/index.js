import React, { Component } from 'react';
import styled from 'styled-components';

import View from '../../elements/View';
import Text from '../../elements/Text';

type Props = {};
export class PhoneInput extends Component<Props> {
  render() {
    return (
      <View>
        <Text>This is the PHONE INPUT</Text>
      </View>
    );
  }
}

export default PhoneInput;
