import styled from 'styled-components';
import { TextInput } from 'react-native';

import { moderateScale, verticalScale } from '../../../scale.utils';
import theme from '../../../theme.style';

export default styled(TextInput)`
  margin-left: ${moderateScale(10)};

  font-family: ${theme.FF_BOOK};
  font-size: ${theme.FS_SM};

  border-bottom-width: 1;
  border-bottom-color: ${theme.PURPLE};
  border-style: solid;

  padding-bottom: ${verticalScale(5)};
  padding-top: ${verticalScale(5)};
`;
