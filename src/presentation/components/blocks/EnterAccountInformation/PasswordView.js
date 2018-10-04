import styled from 'styled-components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme from '../../../theme.style';
import { verticalScale } from '../../../scale.utils';

import View from '../../elements/View';

export default styled(View)`
  justify-content: center;
  margin-top: ${verticalScale(20)};
`;
