import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const FormInput = styled.textarea`
  color: ${colors.black};
  font-family: ${fonts.mainFont};
  font-weight: ${fonts.plain};
  font-size: 16px;
  border: 1px solid ${colors.berry};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  border-radius: 4px;
  padding: 15px 20px 15px 20px;
  width: ${(props) => props.width && props.width};
  resize: none;
`;

/**
 * input bar for forms
 * @param {Function} onChange - set onChange function
 * @param {String} margin - set the margins for the element - default is 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {String} width - change the width of the button - default is html default
 * @param {Number} rows - change the height of the input area by setting the number of rows of text - default is html default
 * @param {Boolean} disabled - set the element to disabled - default is false
 * @param {String} className - add class or list of classes to element
 * @param {String} id - add an id to the element
 */
const TextAreaForm = ({
  placeholder,
  name,
  onChange,
  value,
  defaultValue,
  autocomplete = 'off',
  margin,
  className,
  disabled = false,
  width,
  wrap,
  maxlength,
  rows,
  id,
}) => (
  <FormInput
    id={id}
    rows={rows}
    maxlength={maxlength}
    placeholder={placeholder}
    name={name}
    margin={margin}
    onChange={onChange}
    disabled={disabled}
    autocomplete={autocomplete}
    className={className}
    autocomplete={autocomplete}
    value={value}
    defaultValue={defaultValue}
    width={width}
    wrap={wrap}
  />
);
export default TextAreaForm;
