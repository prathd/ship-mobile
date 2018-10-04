import styled from 'styled-components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme from '../../../theme.style';
import { verticalScale } from '../../../scale.utils';

import View from '../../elements/View';

export default styled(View)`
  align-items: flex-start;
  width: ${wp('75%')};
  margin-top: ${verticalScale(10)};
  align-items: center;
`;
