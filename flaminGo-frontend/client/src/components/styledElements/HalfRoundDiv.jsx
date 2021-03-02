import React from 'react';
import styled from 'styled-components';
import { colors, fonts, gradients } from './styleGuid';

const HalfRound = styled.section`
  color: ${(props) => (props.gradients ? colors.white : colors.black)};
  font-family: ${fonts.mainFont};
  font-weight: ${fonts.plain};
  background-color: ${colors.white};
  background-image: ${(props) =>
    props.gradients ? gradients.carrotToBerry : 'none'};
  border-radius: 0px 30px 0px 30px;
  width: ${(props) => (props.width ? props.width : '900px')};
  height: ${(props) => (props.height ? props.height : '600px')};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;

/**
 * pre built div with half the corners rounded
 * @param {String} margin - set the margins for the element - default is 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {String} width - change the width of the button - default is 900px
 * @param {String} height - change the height of the button - default is 600px
 * @param {String} padding - set padding using padding shorthand property - default is 0
 * @param {Boolean} gradients - indicate if you want gradients version - default false
 * If gradients is set to true background will be the carrotToBerry gradients, font color will be set to white
 * @param {String} className - add class or list of classes to element
 * @param {String} id - add an id to the element
 *
 */

const HalfRoundDiv = ({
  children,
  margin,
  padding,
  gradients,
  className,
  id,
  height,
  width,
}) => (
  <HalfRound
    width={width}
    height={height}
    id={id}
    margin={margin}
    padding={padding}
    className={className}
    gradients={gradients}
  >
    {children}
  </HalfRound>
);

export default HalfRoundDiv;
