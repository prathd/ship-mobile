import styled from 'styled-components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { verticalScale } from '../../../scale.utils';
import View from '../../elements/View';

export default styled(View)`
  margin-top: ${verticalScale(120)};
  width: ${wp('100%')};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
