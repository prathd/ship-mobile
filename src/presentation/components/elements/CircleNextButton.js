import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import Touchable from './Touchable';
import View from './View';
import { moderateScale } from '../../scale.utils';

const StyledLinearGradient = styled(LinearGradient)`
  width: ${moderateScale(50)};
  height: ${moderateScale(50)};
  border-radius: ${moderateScale(25)};
  align-items: center;
  justify-content: center;
`;

export default class CircleNextButton extends Component {
  render() {
    return (
      <View
        modifiers={['circle', 'width', 'height']}
        radius={25}
        width={50}
        height={50}
      >
        <Touchable onPress={this.props.onPress}>
          <StyledLinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#FB857F', '#FF9C68']}
          >
            <Icon
              name="chevron-right"
              size={moderateScale(30)}
              color="#FFFFFF"
            />
          </StyledLinearGradient>
        </Touchable>
      </View>
    );
  }
}
