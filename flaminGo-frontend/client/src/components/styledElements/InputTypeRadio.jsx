import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

const FormInput = styled.input`
  font-family: ${fonts.mainFont};
  font-size: 16px;
  color: ${colors.black};
  border: 1px solid ${colors.berry};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  border-radius: 4px;
  padding: 5px 20px 5px 20px;
  width: ${(props) => props.width && props.width};
`;

const TextInput = ({
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
}) => (
  <FormInput
    id={id}
    minlength={minlength}
    maxlength={maxlength}
    placeholder={placeholder}
    name={name}
    type='radio'
    margin={margin}
    onChange={onChange}
    disabled={disabled}
    autocomplete={autocomplete}
    className={className}
    autocomplete={autocomplete}
    value={value}
    defaultValue={defaultValue}
    width={width}
  />
);
export default TextInput;
