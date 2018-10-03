import styled from 'styled-components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import View from '../../elements/View';

export default styled(View)`
  position: absolute;
  left: ${wp('-2.5%')};
  top: 0;
`;
