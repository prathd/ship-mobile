import styled from 'styled-components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import TransparentButton from './TransparentButton';
import OpaqueButton from './OpaqueButton';

const LoginButtons = styled.View`
  position: absolute;
  width: ${wp('75%')};
  bottom: 60;
`;

LoginButtons.TransparentButton = TransparentButton;
LoginButtons.OpaqueButton = OpaqueButton;

export default LoginButtons;
