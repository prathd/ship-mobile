import styled from 'styled-components';
import { TextInput } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme from '../../../theme.style';

export default styled(TextInput)`
  font-family: ${theme.FF_MEDIUM};
  font-size: ${theme.FS_XL};
  color: ${theme.LIGHT_PURPLE};

  width: ${wp('100%')};
  text-align: center;
`;
