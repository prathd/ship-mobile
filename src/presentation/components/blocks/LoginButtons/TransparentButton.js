import styled from 'styled-components';

import { verticalScale } from '../../../scale.utils';
import theme from '../../../theme.style';

const TransparentButton = styled.View`
  border-style: solid;
  border-color: ${theme.WHITE};
  border-radius: 25;
  border-width: 3;

  height: ${verticalScale(40)};

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default TransparentButton;
