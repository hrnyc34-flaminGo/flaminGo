import React from 'react';
import styled from 'styled-components';
import { colors } from './styleGuid';
import ToolTip from './ToolTip';

const Button = styled.button`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => (props.color ? colors[props.color] : colors.white)};
  background: none;
  padding: 0;
  border: none;
  height: 40px;
  outline: none;
  position: relative;
  &:hover ${ToolTip} {
    visibility: visible;
  }
`;

/**
 * @param {String} margin - set the margins for the element - @default 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {Function} onClick - the onClick functionality
 * @param {String} color - set font color - @default white
 * @param {String} location - a string representing the location the arrow points to - i.e. `To ${location}` this is only revealed on hover
 */
const BackArrow = ({ margin, color, onClick, location }) => (
  <Button margin={margin} color={color} onClick={onClick}>
    <svg width='40' height='40' fill='currentColor' viewBox='0 0 20 20'>
      <path
        fillRule='evenodd'
        d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
      />
    </svg>
    <ToolTip>{`To ${location}`}</ToolTip>
  </Button>
);

export default BackArrow;
