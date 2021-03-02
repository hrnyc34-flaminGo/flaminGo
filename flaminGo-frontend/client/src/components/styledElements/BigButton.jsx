import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const Button = styled.button`
  font-family: ${fonts.mainFont};
  font-size: 36px;
  font-weight: ${fonts.bold};
  color: ${(props) => (props.color ? props.color : colors.berry)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  border: none;
  border-radius: 50px;
  width: 650px;
  height: 110px;
  outline: none;
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

/**
 * This is for the big navigation buttons
 * @param {Function} onClick - the onClick functionality
 * @param {String} backgroundColor - set the background color - default is white
 * @param {String} color - set font color - default is berry
 * @param {String} margin - set the margins for the element - default is 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {Boolean} disabled - set the element to disabled - default is false
 * @param {String} className - add class or list of classes to element
 * @param {String} id - add an id to the element
 */
const BigButton = ({
  children,
  onClick,
  backgroundColor,
  color,
  margin,
  type,
  disabled = false,
  classes,
  id,
}) => (
  <Button
    id={id}
    margin={margin}
    backgroundColor={backgroundColor}
    color={color}
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={classes}
  >
    {children}
  </Button>
);

export default BigButton;
