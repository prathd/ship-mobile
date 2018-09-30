import styled from 'styled-components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { applyStyleModifiers } from 'styled-components-modifiers';

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
};

const Text = styled.Text`
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export default Text;
