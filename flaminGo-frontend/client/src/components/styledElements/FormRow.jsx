import React from 'react';
import {
  FlexRow,
  FormLabel,
} from '../management/employeeModal/formInfoView/EmployFormPositioning';
import FormInput from './InputTypeText';

/**
 *
 * @param {String} label - set the form label
 * @param {Boolean} editMode - set the disabled to true and border to none - default false
 */
const FormRow = ({
  label,
  name,
  placeholder,
  defaultValue,
  onChange,
  editMode,
  margin,
  value,
  width,
}) => {
  return (
    <FlexRow margin={margin}>
      <FormLabel>{`${label}:`}</FormLabel>
      <FormInput
        value={value}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={editMode ? placeholder : undefined}
        border={!editMode && 'none'}
        disabled={!editMode}
        type={name === 'startDate' ? 'date' : 'text'}
        width={name === 'startDate' ? '169px' : width}
      />
    </FlexRow>
  );
};

export default FormRow;
