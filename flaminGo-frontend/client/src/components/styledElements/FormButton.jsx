import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const Button = styled.button`
  font-size: 14px;
  font-family: ${fonts.mainFont};
  font-weight: ${fonts.plain};
  color: ${colors.white};
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.clementine};
  border: none;
  border-radius: 20px;
  width: ${(props) => (props.width ? props.width : '160px')};
  height: 40px;
  outline: none;
  margin: ${(props) => (props.margin ? props.margin : 0)};

  &:active {
    background-color: ${(props) =>
    props.color ? colors.grape : colors.carrot};
  }
`;
/**
 * This is for all the smaller buttons
 * @param {Function} onClick - the onClick functionality
 * @param {String} backgroundColor - set the background color - default is clementine
 * @param {String} margin - set the margins for the element - default is 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {Boolean} disabled - set the element to disabled - default is false
 * @param {String} className - add class or list of classes to element
 * @param {String} id - add an id to the element
 * @param {String} width - change the width of the button - default is 160px and should work for the majority of buttons
 */
const FormButton = ({
  name,
  children,
  onClick,
  backgroundColor,
  margin,
  type,
  disabled = false,
  className,
  id,
  width,
}) => (
  <Button
    name={name}
    id={id}
    type={type}
    margin={margin}
    color={backgroundColor}
    onClick={onClick}
    disabled={disabled}
    className={className}
    width={width}
  >
    {children}
  </Button>
);

export default FormButton;
