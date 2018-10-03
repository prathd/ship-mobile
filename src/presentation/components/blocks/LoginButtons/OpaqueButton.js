import styled from 'styled-components';

import { verticalScale } from '../../../scale.utils';
import theme from '../../../theme.style';

const OpaqueButton = styled.View`
  border-style: solid;
  border-color: ${theme.WHITE};
  border-radius: 25;
  border-width: 3;

  background-color: ${theme.WHITE};
  height: ${verticalScale(40)};

  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 15;
`;

export default OpaqueButton;
