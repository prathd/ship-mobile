import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG = {
  flex: props => `
    flex: ${props.flex}
  `,
  center: props => `
    justify-content: center;
    align-items: center;
  `,
  row: props => `
    flex-direction: row;
  `,
  column: props => `
    flex-direction: column;
  `,
};

const View = styled.View`
  margin: 0;
  padding: 0;
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`;

export default View;
