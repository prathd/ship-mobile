import styled from 'styled-components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../../theme.style';

const OpaqueButton = styled.View`
  border-style: solid;
  border-color: ${theme.WHITE};
  border-radius: 25;
  border-width: 3;

  background-color: ${theme.WHITE};
  height: ${hp('6%')};

  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: 15;
`;

export default OpaqueButton;
