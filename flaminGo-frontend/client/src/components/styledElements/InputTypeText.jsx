import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const FormInput = styled.input`
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
 * input bar for forms
 * @param {Function} onChange - set onChange function
 * @param {String} margin - set the margins for the element - default is 0
 * this is using margin shorthand property https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#margin_and_padding_properties
 * @param {String} width - change the width of the button - default is html default
 * @param {Boolean} disabled - set the element to disabled - default is false
 * @param {String} className - add class or list of classes to element
 * @param {String} id - add an id to the element
 * @param {String} type - change the type of your form - default is text
 */
const InputTypeText = ({
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
  maxlength,
  minlength,
  id,
  border,
  type = 'text',
}) => (
  <FormInput
    id={id}
    minlength={minlength}
    maxlength={maxlength}
    placeholder={placeholder}
    name={name}
    type={type}
    margin={margin}
    onChange={onChange}
    disabled={disabled}
    autocomplete={autocomplete}
    className={className}
    autocomplete={autocomplete}
    value={value}
    defaultValue={defaultValue}
    width={width}
    border={border}
  />
);
export default InputTypeText;
