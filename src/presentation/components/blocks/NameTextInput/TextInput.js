import styled from 'styled-components';
import { TextInput } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import theme from '../../../theme.style';

export default styled(TextInput)`
  font-family: ${theme.FF_MEDIUM};
  font-size: ${theme.FS_SM};

  border-bottom-width: 1;
  border-style: solid;
  border-color: ${theme.GREY};

  width: ${wp('75%')};
`;
