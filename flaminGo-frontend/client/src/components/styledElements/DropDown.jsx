import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const DropDown = styled.select`
  font-family: ${fonts.mainFont};
  font-weight: ${fonts.plain};
  font-size: 16px;
  color: ${colors.black};
  border: ${(props) =>
    props.border ? props.border : `1px solid ${colors.berry}`};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  border-radius: 4px;
  padding: 5px 20px 5px 20px;
  width: ${(props) => props.width && props.width};
`;

/**
 *
 * @param {String} border - changing the border property - default is '1px solid berry'
 * @param {String} margin - set the margins for the element - default is 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {String} width - change the width of the button - default is 160px and should work for the majority of buttons
 */
const DropDownForm = ({ border, margin, width }) => {};

export default DropDown;
