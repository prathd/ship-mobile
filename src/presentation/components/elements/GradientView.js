import React, { Component } from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';

import theme from '../../theme.style';

const gradientOptions = {
  start:
    Dimensions.get('window').height < 700
      ? { x: 0.25, y: 0 }
      : Dimensions.get('window').height < 800
        ? { x: 0, y: 0 }
        : { x: 0.05, y: 0 },
  end:
    Dimensions.get('window').height < 700
      ? { x: 0.75, y: 1 }
      : Dimensions.get('window').height < 800
        ? { x: 1, y: 1 }
        : { x: 0.5, y: 1 },
  locations: [0.15, 1],
  colors: [theme.PINK, theme.PURPLE],
};

const MODIFIER_CONFIG = {
  flex: props => `
    flex: ${props.flex}
  `,
  center: props => `
    justify-content: center;
    align-items: center;
  `,
  row: props => `
    flex-direction: row;
  `,
  column: props => `
    flex-direction: column;
  `,
};

const GradientView = styled(props => (
  <LinearGradient {...gradientOptions} {...props} />
))`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export default GradientView;
