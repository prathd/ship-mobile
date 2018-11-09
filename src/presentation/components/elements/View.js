import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { moderateScale } from '../../scale.utils';

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
  circle: props => `
    border-radius: ${moderateScale(props.radius)};
  `,
  width: props => `
    width: ${moderateScale(props.width)};
  `,
  height: props => `
    height: ${moderateScale(props.height)};
  `,
};

const View = styled.View`
  margin: 0;
  padding: 0;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export default View;
