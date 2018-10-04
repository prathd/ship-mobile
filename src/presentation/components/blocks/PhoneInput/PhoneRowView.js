import styled from 'styled-components';
import View from '../../elements/View';

import { moderateScale, verticalScale } from '../../../scale.utils';

export default styled(View)`
  height: ${verticalScale(50)};
  align-items: center;
  justify-content: center;
  margin-top: ${moderateScale(20)};
  margin-bottom: ${moderateScale(50)};
  padding-left: ${moderateScale(50)};
  padding-right: ${moderateScale(50)};
`;
