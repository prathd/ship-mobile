import styled from 'styled-components';
import { TextInputMask } from 'react-native-masked-text';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme from '../../../theme.style';
import { verticalScale } from '../../../scale.utils';

export default styled(TextInputMask)`
  font-family: ${theme.FF_MEDIUM};
  font-size: ${theme.FS_SM};

  border-bottom-width: 1;
  border-style: solid;
  border-color: ${theme.GREY};

  width: ${wp('75%')};
  padding-bottom: ${verticalScale(5)};
  padding-top: ${verticalScale(5)};
`;
