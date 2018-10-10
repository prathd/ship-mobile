import styled from 'styled-components';

import View from '../../elements/View';

import { moderateScale, verticalScale } from '../../../scale.utils';

export default styled(View)`
  width: ${moderateScale(292)};
  height: ${moderateScale(50)};

  margin-top: ${verticalScale(15)};
`;
