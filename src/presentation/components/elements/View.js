import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
  fullWidth: props => `
    width: ${wp('100%')};
  `,
};

const View = styled.View`
  margin: 0;
  padding: 0;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export default View;
