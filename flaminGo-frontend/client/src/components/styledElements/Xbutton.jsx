import styled from 'styled-components';
import React from 'react';
import { colors } from './styleGuid';

const XBtn = styled.button`
  color: ${(props) => (props.color ? colors[props.color] : colors.black)};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  border: none;
  background: rgba(0, 0, 0, 0);
  right: ${(props) => (props.right ? props.right : '0')};
  position: absolute;
  outline: none;
`;

/**
 * @param {String} right - set the position right
 * @param {String} color - set font color - default is white
 * @param {Function} onClick - the onClick functionality
 * @param {String} margin - set the margins for the element - default is html default (1em top and bottom)
 */
const XButton = ({ margin, onClick, right, color }) => (
  <XBtn onClick={onClick} right={right} margin={margin} color={color}>
    <svg
      width='30'
      height='30'
      fill='currentColor'
      class='bi bi-x'
      viewBox='0 0 16 16'
    >
      <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
    </svg>
  </XBtn>
);

export default XButton;
