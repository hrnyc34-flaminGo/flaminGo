import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const ModalTitle = styled.h3`
  font-family: ${fonts.mainFont};
  font-size: 36px;
  font-weight: ${fonts.bold};
  color: ${(props) => (props.color ? colors[props.color] : colors.black)};
  margin: ${(props) => props.margin && props.margin};
  text-align: center;
`;

/**
 * Styled H3 for Modals
 * @param {String} color - set font color - default is berry
 * @param {String} margin - set the margins for the element - default is html default (1em top and bottom)
 */
const ModalHeader = ({ color, margin }) => {};
export default ModalTitle;
