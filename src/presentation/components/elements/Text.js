import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { verticalScale } from '../../scale.utils';
import theme from '../../theme.style';

const MODIFIER_CONFIG = {
  // font-family
  black: props => `
    font-family: ${theme.FF_BLACK}
  `,
  book: props => `
    font-family: ${theme.FF_BOOK}
  `,
  heavy: props => `
    font-family: ${theme.FF_HEAVY}
  `,
  light: props => `
    font-family: ${theme.FF_LIGHT}
  `,
  medium: props => `
    font-family: ${theme.FF_MEDIUM}
  `,

  // font-size
  xs: props => `
    font-size: ${theme.FS_XS}
  `,
  sm: props => `
    font-size: ${theme.FS_SM}
  `,
  md: props => `
    font-size: ${theme.FS_MD}
  `,
  lg: props => `
    font-size: ${theme.FS_LG}
  `,
  xl: props => `
    font-size: ${theme.FS_XL}
  `,
  xxl: props => `
    font-size: ${theme.FS_XXL}
  `,

  // color
  white: props => `
    color: ${theme.WHITE};
  `,
  light_purple: props => `
    color: ${theme.LIGHT_PURPLE};
  `,
  purple: props => `
    color: ${theme.PURPLE};
  `,

  // alignment
  center: props => `
    text-align: center;
  `,

  // margin or padding
  vMargin10: props => `
    margin-top: ${verticalScale(10)};
  `,
};

const Text = styled.Text`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export default Text;
